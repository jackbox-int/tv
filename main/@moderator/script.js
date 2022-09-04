var t$ = Object.defineProperty;
var r$ = (e, t, r) => t in e ? t$(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var n$ = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var Ee = (e, t, r) => (r$(e, typeof t != "symbol" ? t + "" : t, r), r);
var Qne = n$((tie, O1) => {
    const i$ = function() {
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
    i$();

    function lh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const s$ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        a$ = lh(s$);

    function jE(e) {
        return !!e || e === ""
    }

    function lo(e) {
        if (Le(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Vt(n) ? l$(n) : lo(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Vt(e)) return e;
            if ($t(e)) return e
        }
    }
    const o$ = /;(?![^(]*\))/g,
        c$ = /:(.+)/;

    function l$(e) {
        const t = {};
        return e.split(o$).forEach(r => {
            if (r) {
                const n = r.split(c$);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function Ge(e) {
        let t = "";
        if (Vt(e)) t = e;
        else if (Le(e))
            for (let r = 0; r < e.length; r++) {
                const n = Ge(e[r]);
                n && (t += n + " ")
            } else if ($t(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function u$(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = cl(e[n], t[n]);
        return r
    }

    function cl(e, t) {
        if (e === t) return !0;
        let r = mv(e),
            n = mv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Ya(e), n = Ya(t), r || n) return e === t;
        if (r = Le(e), n = Le(t), r || n) return r && n ? u$(e, t) : !1;
        if (r = $t(e), n = $t(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const c in e) {
                const u = e.hasOwnProperty(c),
                    f = t.hasOwnProperty(c);
                if (u && !f || !u && f || !cl(e[c], t[c])) return !1
            }
        }
        return String(e) === String(t)
    }

    function HE(e, t) {
        return e.findIndex(r => cl(r, t))
    }
    const Xe = e => Vt(e) ? e : e == null ? "" : Le(e) || $t(e) && (e.toString === YE || !je(e.toString)) ? JSON.stringify(e, KE, 2) : String(e),
        KE = (e, t) => t && t.__v_isRef ? KE(e, t.value) : ks(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : ul(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : $t(t) && !Le(t) && !qE(t) ? String(t) : t,
        pt = {},
        Ds = [],
        cn = () => {},
        f$ = () => !1,
        d$ = /^on[^a-z]/,
        ll = e => d$.test(e),
        uh = e => e.startsWith("onUpdate:"),
        Jt = Object.assign,
        fh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        h$ = Object.prototype.hasOwnProperty,
        Qe = (e, t) => h$.call(e, t),
        Le = Array.isArray,
        ks = e => uo(e) === "[object Map]",
        ul = e => uo(e) === "[object Set]",
        mv = e => uo(e) === "[object Date]",
        je = e => typeof e == "function",
        Vt = e => typeof e == "string",
        Ya = e => typeof e == "symbol",
        $t = e => e !== null && typeof e == "object",
        VE = e => $t(e) && je(e.then) && je(e.catch),
        YE = Object.prototype.toString,
        uo = e => YE.call(e),
        p$ = e => uo(e).slice(8, -1),
        qE = e => uo(e) === "[object Object]",
        dh = e => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Dc = lh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        fl = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        g$ = /-(\w)/g,
        Sn = fl(e => e.replace(g$, (t, r) => r ? r.toUpperCase() : "")),
        m$ = /\B([A-Z])/g,
        is = fl(e => e.replace(m$, "-$1").toLowerCase()),
        dl = fl(e => e.charAt(0).toUpperCase() + e.slice(1)),
        ff = fl(e => e ? `on${dl(e)}` : ""),
        qa = (e, t) => !Object.is(e, t),
        kc = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        jc = (e, t, r) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        Hc = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let vv;
    const v$ = () => vv || (vv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let yn;
    class zE {
        constructor(t = !1) {
            this.active = !0, this.effects = [], this.cleanups = [], !t && yn && (this.parent = yn, this.index = (yn.scopes || (yn.scopes = [])).push(this) - 1)
        }
        run(t) {
            if (this.active) {
                const r = yn;
                try {
                    return yn = this, t()
                } finally {
                    yn = r
                }
            }
        }
        on() {
            yn = this
        }
        off() {
            yn = this.parent
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

    function _$(e) {
        return new zE(e)
    }

    function y$(e, t = yn) {
        t && t.active && t.effects.push(e)
    }
    const hh = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        XE = e => (e.w & di) > 0,
        JE = e => (e.n & di) > 0,
        E$ = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= di
        },
        b$ = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    XE(s) && !JE(s) ? s.delete(e) : t[r++] = s, s.w &= ~di, s.n &= ~di
                }
                t.length = r
            }
        },
        sd = new WeakMap;
    let La = 0,
        di = 1;
    const ad = 30;
    let sn;
    const Xi = Symbol(""),
        od = Symbol("");
    class ph {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, y$(this, n)
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
                return this.parent = sn, sn = this, ci = !0, di = 1 << ++La, La <= ad ? E$(this) : _v(this), this.fn()
            } finally {
                La <= ad && b$(this), di = 1 << --La, sn = this.parent, ci = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            sn === this ? this.deferStop = !0 : this.active && (_v(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function _v(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let ci = !0;
    const ZE = [];

    function Zs() {
        ZE.push(ci), ci = !1
    }

    function Qs() {
        const e = ZE.pop();
        ci = e === void 0 ? !0 : e
    }

    function Pr(e, t, r) {
        if (ci && sn) {
            let n = sd.get(e);
            n || sd.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = hh()), QE(s)
        }
    }

    function QE(e, t) {
        let r = !1;
        La <= ad ? JE(e) || (e.n |= di, r = !XE(e)) : r = !e.has(sn), r && (e.add(sn), sn.deps.push(e))
    }

    function Fn(e, t, r, n, s, o) {
        const c = sd.get(e);
        if (!c) return;
        let u = [];
        if (t === "clear") u = [...c.values()];
        else if (r === "length" && Le(e)) c.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(c.get(r)), t) {
            case "add":
                Le(e) ? dh(r) && u.push(c.get("length")) : (u.push(c.get(Xi)), ks(e) && u.push(c.get(od)));
                break;
            case "delete":
                Le(e) || (u.push(c.get(Xi)), ks(e) && u.push(c.get(od)));
                break;
            case "set":
                ks(e) && u.push(c.get(Xi));
                break
        }
        if (u.length === 1) u[0] && cd(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            cd(hh(f))
        }
    }

    function cd(e, t) {
        const r = Le(e) ? e : [...e];
        for (const n of r) n.computed && yv(n);
        for (const n of r) n.computed || yv(n)
    }

    function yv(e, t) {
        (e !== sn || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const T$ = lh("__proto__,__v_isRef,__isVue"),
        eb = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ya)),
        S$ = gh(),
        O$ = gh(!1, !0),
        A$ = gh(!0),
        Ev = I$();

    function I$() {
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
                Zs();
                const n = nt(this)[t].apply(this, r);
                return Qs(), n
            }
        }), e
    }

    function gh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? W$ : sb : t ? ib : nb).get(n)) return n;
            const c = Le(n);
            if (!e && c && Qe(Ev, s)) return Reflect.get(Ev, s, o);
            const u = Reflect.get(n, s, o);
            return (Ya(s) ? eb.has(s) : T$(s)) || (e || Pr(n, "get", s), t) ? u : rr(u) ? c && dh(s) ? u : u.value : $t(u) ? e ? ab(u) : Bn(u) : u
        }
    }
    const C$ = tb(),
        R$ = tb(!0);

    function tb(e = !1) {
        return function(r, n, s, o) {
            let c = r[n];
            if (za(c) && rr(c) && !rr(s)) return !1;
            if (!e && !za(s) && (ld(s) || (s = nt(s), c = nt(c)), !Le(r) && rr(c) && !rr(s))) return c.value = s, !0;
            const u = Le(r) && dh(n) ? Number(n) < r.length : Qe(r, n),
                f = Reflect.set(r, n, s, o);
            return r === nt(o) && (u ? qa(s, c) && Fn(r, "set", n, s) : Fn(r, "add", n, s)), f
        }
    }

    function w$(e, t) {
        const r = Qe(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Fn(e, "delete", t, void 0), n
    }

    function N$(e, t) {
        const r = Reflect.has(e, t);
        return (!Ya(t) || !eb.has(t)) && Pr(e, "has", t), r
    }

    function $$(e) {
        return Pr(e, "iterate", Le(e) ? "length" : Xi), Reflect.ownKeys(e)
    }
    const rb = {
            get: S$,
            set: C$,
            deleteProperty: w$,
            has: N$,
            ownKeys: $$
        },
        L$ = {
            get: A$,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        P$ = Jt({}, rb, {
            get: O$,
            set: R$
        }),
        mh = e => e,
        hl = e => Reflect.getPrototypeOf(e);

    function gc(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = nt(e),
            o = nt(t);
        r || (t !== o && Pr(s, "get", t), Pr(s, "get", o));
        const {
            has: c
        } = hl(s), u = n ? mh : r ? yh : Xa;
        if (c.call(s, t)) return u(e.get(t));
        if (c.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function mc(e, t = !1) {
        const r = this.__v_raw,
            n = nt(r),
            s = nt(e);
        return t || (e !== s && Pr(n, "has", e), Pr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function vc(e, t = !1) {
        return e = e.__v_raw, !t && Pr(nt(e), "iterate", Xi), Reflect.get(e, "size", e)
    }

    function bv(e) {
        e = nt(e);
        const t = nt(this);
        return hl(t).has.call(t, e) || (t.add(e), Fn(t, "add", e, e)), this
    }

    function Tv(e, t) {
        t = nt(t);
        const r = nt(this),
            {
                has: n,
                get: s
            } = hl(r);
        let o = n.call(r, e);
        o || (e = nt(e), o = n.call(r, e));
        const c = s.call(r, e);
        return r.set(e, t), o ? qa(t, c) && Fn(r, "set", e, t) : Fn(r, "add", e, t), this
    }

    function Sv(e) {
        const t = nt(this),
            {
                has: r,
                get: n
            } = hl(t);
        let s = r.call(t, e);
        s || (e = nt(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Fn(t, "delete", e, void 0), o
    }

    function Ov() {
        const e = nt(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Fn(e, "clear", void 0, void 0), r
    }

    function _c(e, t) {
        return function(n, s) {
            const o = this,
                c = o.__v_raw,
                u = nt(c),
                f = t ? mh : e ? yh : Xa;
            return !e && Pr(u, "iterate", Xi), c.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function yc(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = nt(s),
                c = ks(o),
                u = e === "entries" || e === Symbol.iterator && c,
                f = e === "keys" && c,
                h = s[e](...n),
                g = r ? mh : t ? yh : Xa;
            return !t && Pr(o, "iterate", f ? od : Xi), {
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

    function Jn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function D$() {
        const e = {
                get(o) {
                    return gc(this, o)
                },
                get size() {
                    return vc(this)
                },
                has: mc,
                add: bv,
                set: Tv,
                delete: Sv,
                clear: Ov,
                forEach: _c(!1, !1)
            },
            t = {
                get(o) {
                    return gc(this, o, !1, !0)
                },
                get size() {
                    return vc(this)
                },
                has: mc,
                add: bv,
                set: Tv,
                delete: Sv,
                clear: Ov,
                forEach: _c(!1, !0)
            },
            r = {
                get(o) {
                    return gc(this, o, !0)
                },
                get size() {
                    return vc(this, !0)
                },
                has(o) {
                    return mc.call(this, o, !0)
                },
                add: Jn("add"),
                set: Jn("set"),
                delete: Jn("delete"),
                clear: Jn("clear"),
                forEach: _c(!0, !1)
            },
            n = {
                get(o) {
                    return gc(this, o, !0, !0)
                },
                get size() {
                    return vc(this, !0)
                },
                has(o) {
                    return mc.call(this, o, !0)
                },
                add: Jn("add"),
                set: Jn("set"),
                delete: Jn("delete"),
                clear: Jn("clear"),
                forEach: _c(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = yc(o, !1, !1), r[o] = yc(o, !0, !1), t[o] = yc(o, !1, !0), n[o] = yc(o, !0, !0)
        }), [e, r, t, n]
    }
    const [k$, M$, x$, U$] = D$();

    function vh(e, t) {
        const r = t ? e ? U$ : x$ : e ? M$ : k$;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Qe(r, s) && s in n ? r : n, s, o)
    }
    const F$ = {
            get: vh(!1, !1)
        },
        B$ = {
            get: vh(!1, !0)
        },
        G$ = {
            get: vh(!0, !1)
        },
        nb = new WeakMap,
        ib = new WeakMap,
        sb = new WeakMap,
        W$ = new WeakMap;

    function j$(e) {
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

    function H$(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : j$(p$(e))
    }

    function Bn(e) {
        return za(e) ? e : _h(e, !1, rb, F$, nb)
    }

    function K$(e) {
        return _h(e, !1, P$, B$, ib)
    }

    function ab(e) {
        return _h(e, !0, L$, G$, sb)
    }

    function _h(e, t, r, n, s) {
        if (!$t(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const c = H$(e);
        if (c === 0) return e;
        const u = new Proxy(e, c === 2 ? n : r);
        return s.set(e, u), u
    }

    function Ms(e) {
        return za(e) ? Ms(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function za(e) {
        return !!(e && e.__v_isReadonly)
    }

    function ld(e) {
        return !!(e && e.__v_isShallow)
    }

    function ob(e) {
        return Ms(e) || za(e)
    }

    function nt(e) {
        const t = e && e.__v_raw;
        return t ? nt(t) : e
    }

    function cb(e) {
        return jc(e, "__v_skip", !0), e
    }
    const Xa = e => $t(e) ? Bn(e) : e,
        yh = e => $t(e) ? ab(e) : e;

    function lb(e) {
        ci && sn && (e = nt(e), QE(e.dep || (e.dep = hh())))
    }

    function ub(e, t) {
        e = nt(e), e.dep && cd(e.dep)
    }

    function rr(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function an(e) {
        return fb(e, !1)
    }

    function V$(e) {
        return fb(e, !0)
    }

    function fb(e, t) {
        return rr(e) ? e : new Y$(e, t)
    }
    class Y$ {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : nt(t), this._value = r ? t : Xa(t)
        }
        get value() {
            return lb(this), this._value
        }
        set value(t) {
            t = this.__v_isShallow ? t : nt(t), qa(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Xa(t), ub(this))
        }
    }

    function q$(e) {
        return rr(e) ? e.value : e
    }
    const z$ = {
        get: (e, t, r) => q$(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return rr(s) && !rr(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function db(e) {
        return Ms(e) ? e : new Proxy(e, z$)
    }
    class X$ {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new ph(t, () => {
                this._dirty || (this._dirty = !0, ub(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = nt(this);
            return lb(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }

    function J$(e, t, r = !1) {
        let n, s;
        const o = je(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new X$(n, s, o || !s, r)
    }

    function li(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            pl(o, t, r)
        }
        return s
    }

    function Xr(e, t, r, n) {
        if (je(e)) {
            const o = li(e, t, r, n);
            return o && VE(o) && o.catch(c => {
                pl(c, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Xr(e[o], t, r, n));
        return s
    }

    function pl(e, t, r, n = !0) {
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
        Z$(e, r, s, n)
    }

    function Z$(e, t, r, n = !0) {
        console.error(e)
    }
    let Kc = !1,
        ud = !1;
    const Lr = [];
    let xn = 0;
    const Ma = [];
    let Pa = null,
        Is = 0;
    const xa = [];
    let ti = null,
        Cs = 0;
    const hb = Promise.resolve();
    let Eh = null,
        fd = null;

    function Q$(e) {
        const t = Eh || hb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function eL(e) {
        let t = xn + 1,
            r = Lr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Ja(Lr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function pb(e) {
        (!Lr.length || !Lr.includes(e, Kc && e.allowRecurse ? xn + 1 : xn)) && e !== fd && (e.id == null ? Lr.push(e) : Lr.splice(eL(e.id), 0, e), gb())
    }

    function gb() {
        !Kc && !ud && (ud = !0, Eh = hb.then(_b))
    }

    function tL(e) {
        const t = Lr.indexOf(e);
        t > xn && Lr.splice(t, 1)
    }

    function mb(e, t, r, n) {
        Le(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e), gb()
    }

    function rL(e) {
        mb(e, Pa, Ma, Is)
    }

    function nL(e) {
        mb(e, ti, xa, Cs)
    }

    function gl(e, t = null) {
        if (Ma.length) {
            for (fd = t, Pa = [...new Set(Ma)], Ma.length = 0, Is = 0; Is < Pa.length; Is++) Pa[Is]();
            Pa = null, Is = 0, fd = null, gl(e, t)
        }
    }

    function vb(e) {
        if (gl(), xa.length) {
            const t = [...new Set(xa)];
            if (xa.length = 0, ti) {
                ti.push(...t);
                return
            }
            for (ti = t, ti.sort((r, n) => Ja(r) - Ja(n)), Cs = 0; Cs < ti.length; Cs++) ti[Cs]();
            ti = null, Cs = 0
        }
    }
    const Ja = e => e.id == null ? 1 / 0 : e.id;

    function _b(e) {
        ud = !1, Kc = !0, gl(e), Lr.sort((r, n) => Ja(r) - Ja(n));
        const t = cn;
        try {
            for (xn = 0; xn < Lr.length; xn++) {
                const r = Lr[xn];
                r && r.active !== !1 && li(r, null, 14)
            }
        } finally {
            xn = 0, Lr.length = 0, vb(), Kc = !1, Eh = null, (Lr.length || Ma.length || xa.length) && _b(e)
        }
    }

    function iL(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || pt;
        let s = r;
        const o = t.startsWith("update:"),
            c = o && t.slice(7);
        if (c && c in n) {
            const g = `${c==="modelValue"?"model":c}Modifiers`,
                {
                    number: y,
                    trim: b
                } = n[g] || pt;
            b && (s = r.map(R => R.trim())), y && (s = r.map(Hc))
        }
        let u, f = n[u = ff(t)] || n[u = ff(Sn(t))];
        !f && o && (f = n[u = ff(is(t))]), f && Xr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Xr(h, e, 6, s)
        }
    }

    function yb(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let c = {},
            u = !1;
        if (!je(e)) {
            const f = h => {
                const g = yb(h, t, !0);
                g && (u = !0, Jt(c, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (n.set(e, null), null) : (Le(o) ? o.forEach(f => c[f] = null) : Jt(c, o), n.set(e, c), c)
    }

    function ml(e, t) {
        return !e || !ll(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, is(t)) || Qe(e, t))
    }
    let zr = null,
        vl = null;

    function Vc(e) {
        const t = zr;
        return zr = e, vl = e && e.type.__scopeId || null, t
    }

    function ea(e) {
        vl = e
    }

    function ta() {
        vl = null
    }

    function bh(e, t = zr, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && kv(-1);
            const o = Vc(t),
                c = e(...s);
            return Vc(o), n._d && kv(1), c
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
            propsOptions: [c],
            slots: u,
            attrs: f,
            emit: h,
            render: g,
            renderCache: y,
            data: b,
            setupState: R,
            ctx: P,
            inheritAttrs: x
        } = e;
        let U, I;
        const H = Vc(e);
        try {
            if (r.shapeFlag & 4) {
                const W = s || n;
                U = bn(g.call(W, W, y, o, R, b, P)), I = f
            } else {
                const W = t;
                U = bn(W.length > 1 ? W(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : W(o, null)), I = t.props ? f : sL(f)
            }
        } catch (W) {
            Ua.length = 0, pl(W, e, 1), U = st(ln)
        }
        let Y = U;
        if (I && x !== !1) {
            const W = Object.keys(I),
                {
                    shapeFlag: G
                } = Y;
            W.length && G & 7 && (c && W.some(uh) && (I = aL(I, c)), Y = hi(Y, I))
        }
        return r.dirs && (Y = hi(Y), Y.dirs = Y.dirs ? Y.dirs.concat(r.dirs) : r.dirs), r.transition && (Y.transition = r.transition), U = Y, Vc(H), U
    }
    const sL = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || ll(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        aL = (e, t) => {
            const r = {};
            for (const n in e)(!uh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function oL(e, t, r) {
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
                const g = t.dynamicProps;
                for (let y = 0; y < g.length; y++) {
                    const b = g[y];
                    if (c[b] !== n[b] && !ml(h, b)) return !0
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
            if (t[o] !== e[o] && !ml(r, o)) return !0
        }
        return !1
    }

    function cL({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const lL = e => e.__isSuspense;

    function uL(e, t) {
        t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : nL(e)
    }

    function fL(e, t) {
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
    const Iv = {};

    function Ji(e, t, r) {
        return Eb(e, t, r)
    }

    function Eb(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: c
    } = pt) {
        const u = Xt;
        let f, h = !1,
            g = !1;
        if (rr(e) ? (f = () => e.value, h = ld(e)) : Ms(e) ? (f = () => e, n = !0) : Le(e) ? (g = !0, h = e.some(I => Ms(I) || ld(I)), f = () => e.map(I => {
                if (rr(I)) return I.value;
                if (Ms(I)) return zi(I);
                if (je(I)) return li(I, u, 2)
            })) : je(e) ? t ? f = () => li(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return y && y(), Xr(e, u, 3, [b])
            } : f = cn, t && n) {
            const I = f;
            f = () => zi(I())
        }
        let y, b = I => {
            y = U.onStop = () => {
                li(I, u, 4)
            }
        };
        if (to) return b = cn, t ? r && Xr(t, u, 3, [f(), g ? [] : void 0, b]) : f(), cn;
        let R = g ? [] : Iv;
        const P = () => {
            if (!!U.active)
                if (t) {
                    const I = U.run();
                    (n || h || (g ? I.some((H, Y) => qa(H, R[Y])) : qa(I, R))) && (y && y(), Xr(t, u, 3, [I, R === Iv ? void 0 : R, b]), R = I)
                } else U.run()
        };
        P.allowRecurse = !!t;
        let x;
        s === "sync" ? x = P : s === "post" ? x = () => Sr(P, u && u.suspense) : x = () => rL(P);
        const U = new ph(f, x);
        return t ? r ? P() : R = U.run() : s === "post" ? Sr(U.run.bind(U), u && u.suspense) : U.run(), () => {
            U.stop(), u && u.scope && fh(u.scope.effects, U)
        }
    }

    function dL(e, t, r) {
        const n = this.proxy,
            s = Vt(e) ? e.includes(".") ? bb(n, e) : () => n[e] : e.bind(n, n);
        let o;
        je(t) ? o = t : (o = t.handler, r = t);
        const c = Xt;
        Ks(this);
        const u = Eb(s, o.bind(n), r);
        return c ? Ks(c) : Zi(), u
    }

    function bb(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function zi(e, t) {
        if (!$t(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), rr(e)) zi(e.value, t);
        else if (Le(e))
            for (let r = 0; r < e.length; r++) zi(e[r], t);
        else if (ul(e) || ks(e)) e.forEach(r => {
            zi(r, t)
        });
        else if (qE(e))
            for (const r in e) zi(e[r], t);
        return e
    }

    function Tb() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Sh(() => {
            e.isMounted = !0
        }), Rb(() => {
            e.isUnmounting = !0
        }), e
    }
    const Kr = [Function, Array],
        hL = {
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
                    n = Tb();
                let s;
                return () => {
                    const o = t.default && Th(t.default(), !0);
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
                    if (n.isLeaving) return hf(c);
                    const h = Cv(c);
                    if (!h) return hf(c);
                    const g = Za(h, u, n, r);
                    Qa(h, g);
                    const y = r.subTree,
                        b = y && Cv(y);
                    let R = !1;
                    const {
                        getTransitionKey: P
                    } = h.type;
                    if (P) {
                        const x = P();
                        s === void 0 ? s = x : x !== s && (s = x, R = !0)
                    }
                    if (b && b.type !== ln && (!Hi(h, b) || R)) {
                        const x = Za(b, u, n, r);
                        if (Qa(b, x), f === "out-in") return n.isLeaving = !0, x.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, hf(c);
                        f === "in-out" && h.type !== ln && (x.delayLeave = (U, I, H) => {
                            const Y = Ob(n, b);
                            Y[String(b.key)] = b, U._leaveCb = () => {
                                I(), U._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = H
                        })
                    }
                    return c
                }
            }
        },
        Sb = hL;

    function Ob(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function Za(e, t, r, n) {
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
            onAfterLeave: R,
            onLeaveCancelled: P,
            onBeforeAppear: x,
            onAppear: U,
            onAfterAppear: I,
            onAppearCancelled: H
        } = t, Y = String(e.key), W = Ob(r, e), G = (ce, ue) => {
            ce && Xr(ce, n, 9, ue)
        }, z = (ce, ue) => {
            const Ce = ue[1];
            G(ce, ue), Le(ce) ? ce.every(Ie => Ie.length <= 1) && Ce() : ce.length <= 1 && Ce()
        }, ae = {
            mode: o,
            persisted: c,
            beforeEnter(ce) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = x || u;
                    else return;
                ce._leaveCb && ce._leaveCb(!0);
                const Ce = W[Y];
                Ce && Hi(e, Ce) && Ce.el._leaveCb && Ce.el._leaveCb(), G(ue, [ce])
            },
            enter(ce) {
                let ue = f,
                    Ce = h,
                    Ie = g;
                if (!r.isMounted)
                    if (s) ue = U || f, Ce = I || h, Ie = H || g;
                    else return;
                let fe = !1;
                const Ae = ce._enterCb = F => {
                    fe || (fe = !0, F ? G(Ie, [ce]) : G(Ce, [ce]), ae.delayedLeave && ae.delayedLeave(), ce._enterCb = void 0)
                };
                ue ? z(ue, [ce, Ae]) : Ae()
            },
            leave(ce, ue) {
                const Ce = String(e.key);
                if (ce._enterCb && ce._enterCb(!0), r.isUnmounting) return ue();
                G(y, [ce]);
                let Ie = !1;
                const fe = ce._leaveCb = Ae => {
                    Ie || (Ie = !0, ue(), Ae ? G(P, [ce]) : G(R, [ce]), ce._leaveCb = void 0, W[Ce] === e && delete W[Ce])
                };
                W[Ce] = e, b ? z(b, [ce, fe]) : fe()
            },
            clone(ce) {
                return Za(ce, t, r, n)
            }
        };
        return ae
    }

    function hf(e) {
        if (_l(e)) return e = hi(e), e.children = null, e
    }

    function Cv(e) {
        return _l(e) ? e.children ? e.children[0] : void 0 : e
    }

    function Qa(e, t) {
        e.shapeFlag & 6 && e.component ? Qa(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function Th(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let c = e[o];
            const u = r == null ? c.key : String(r) + String(c.key != null ? c.key : o);
            c.type === Ot ? (c.patchFlag & 128 && s++, n = n.concat(Th(c.children, t, u))) : (t || c.type !== ln) && n.push(u != null ? hi(c, {
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
    const Mc = e => !!e.type.__asyncLoader,
        _l = e => e.type.__isKeepAlive;

    function pL(e, t) {
        Ab(e, "a", t)
    }

    function gL(e, t) {
        Ab(e, "da", t)
    }

    function Ab(e, t, r = Xt) {
        const n = e.__wdc || (e.__wdc = () => {
            let s = r;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (yl(t, n, r), r) {
            let s = r.parent;
            for (; s && s.parent;) _l(s.parent.vnode) && mL(n, t, r, s), s = s.parent
        }
    }

    function mL(e, t, r, n) {
        const s = yl(t, e, n, !0);
        Oh(() => {
            fh(n[t], s)
        }, r)
    }

    function yl(e, t, r = Xt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...c) => {
                    if (r.isUnmounted) return;
                    Zs(), Ks(r);
                    const u = Xr(t, r, e, c);
                    return Zi(), Qs(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Gn = e => (t, r = Xt) => (!to || e === "sp") && yl(e, t, r),
        Ib = Gn("bm"),
        Sh = Gn("m"),
        vL = Gn("bu"),
        Cb = Gn("u"),
        Rb = Gn("bum"),
        Oh = Gn("um"),
        _L = Gn("sp"),
        yL = Gn("rtg"),
        EL = Gn("rtc");

    function bL(e, t = Xt) {
        yl("ec", e, t)
    }

    function Ke(e, t) {
        const r = zr;
        if (r === null) return e;
        const n = Tl(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [c, u, f, h = pt] = t[o];
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
        return e
    }

    function ki(e, t, r, n) {
        const s = e.dirs,
            o = t && t.dirs;
        for (let c = 0; c < s.length; c++) {
            const u = s[c];
            o && (u.oldValue = o[c].value);
            let f = u.dir[n];
            f && (Zs(), Xr(f, r, 8, [e.el, u, e, t]), Qs())
        }
    }
    const Ah = "components",
        TL = "directives";

    function Rt(e, t) {
        return Ih(Ah, e, !0, t) || e
    }
    const wb = Symbol();

    function SL(e) {
        return Vt(e) ? Ih(Ah, e, !1) || e : e || wb
    }

    function Ht(e) {
        return Ih(TL, e)
    }

    function Ih(e, t, r = !0, n = !1) {
        const s = zr || Xt;
        if (s) {
            const o = s.type;
            if (e === Ah) {
                const u = JL(o, !1);
                if (u && (u === t || u === Sn(t) || u === dl(Sn(t)))) return o
            }
            const c = Rv(s[e] || o[e], t) || Rv(s.appContext[e], t);
            return !c && n ? o : c
        }
    }

    function Rv(e, t) {
        return e && (e[t] || e[Sn(t)] || e[dl(Sn(t))])
    }

    function fo(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (Le(e) || Vt(e)) {
            s = new Array(e.length);
            for (let c = 0, u = e.length; c < u; c++) s[c] = t(e[c], c, void 0, o && o[c])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let c = 0; c < e; c++) s[c] = t(c + 1, c, void 0, o && o[c])
        } else if ($t(e))
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
    const dd = e => e ? Gb(e) ? Tl(e) || e.proxy : dd(e.parent) : null,
        Yc = Jt(Object.create(null), {
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
            $options: e => $b(e),
            $forceUpdate: e => e.f || (e.f = () => pb(e.update)),
            $nextTick: e => e.n || (e.n = Q$.bind(e.proxy)),
            $watch: e => dL.bind(e)
        }),
        OL = {
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
                    const R = c[t];
                    if (R !== void 0) switch (R) {
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
                        hd && (c[t] = 0)
                    }
                }
                const g = Yc[t];
                let y, b;
                if (g) return t === "$attrs" && Pr(e, "get", t), g(e);
                if ((y = u.__cssModules) && (y = y[t])) return y;
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
                return !!r[c] || e !== pt && Qe(e, c) || t !== pt && Qe(t, c) || (u = o[0]) && Qe(u, c) || Qe(n, c) || Qe(Yc, c) || Qe(s.config.globalProperties, c)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : Qe(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let hd = !0;

    function AL(e) {
        const t = $b(e),
            r = e.proxy,
            n = e.ctx;
        hd = !1, t.beforeCreate && wv(t.beforeCreate, e, "bc");
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
            beforeUpdate: R,
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
            expose: Ce,
            inheritAttrs: Ie,
            components: fe,
            directives: Ae,
            filters: F
        } = t;
        if (h && IL(h, n, null, e.appContext.config.unwrapInjectedRef), c)
            for (const ye in c) {
                const me = c[ye];
                je(me) && (n[ye] = me.bind(r))
            }
        if (s) {
            const ye = s.call(r, r);
            $t(ye) && (e.data = Bn(ye))
        }
        if (hd = !0, o)
            for (const ye in o) {
                const me = o[ye],
                    Se = je(me) ? me.bind(r, r) : je(me.get) ? me.get.bind(r, r) : cn,
                    ke = !je(me) && je(me.set) ? me.set.bind(r) : cn,
                    Fe = qr({
                        get: Se,
                        set: ke
                    });
                Object.defineProperty(n, ye, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Fe.value,
                    set: et => Fe.value = et
                })
            }
        if (u)
            for (const ye in u) Nb(u[ye], n, r, ye);
        if (f) {
            const ye = je(f) ? f.call(r) : f;
            Reflect.ownKeys(ye).forEach(me => {
                fL(me, ye[me])
            })
        }
        g && wv(g, e, "c");

        function de(ye, me) {
            Le(me) ? me.forEach(Se => ye(Se.bind(r))) : me && ye(me.bind(r))
        }
        if (de(Ib, y), de(Sh, b), de(vL, R), de(Cb, P), de(pL, x), de(gL, U), de(bL, ce), de(EL, z), de(yL, ae), de(Rb, H), de(Oh, W), de(_L, ue), Le(Ce))
            if (Ce.length) {
                const ye = e.exposed || (e.exposed = {});
                Ce.forEach(me => {
                    Object.defineProperty(ye, me, {
                        get: () => r[me],
                        set: Se => r[me] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        G && e.render === cn && (e.render = G), Ie != null && (e.inheritAttrs = Ie), fe && (e.components = fe), Ae && (e.directives = Ae)
    }

    function IL(e, t, r = cn, n = !1) {
        Le(e) && (e = pd(e));
        for (const s in e) {
            const o = e[s];
            let c;
            $t(o) ? "default" in o ? c = ui(o.from || s, o.default, !0) : c = ui(o.from || s) : c = ui(o), rr(c) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => c.value,
                set: u => c.value = u
            }) : t[s] = c
        }
    }

    function wv(e, t, r) {
        Xr(Le(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function Nb(e, t, r, n) {
        const s = n.includes(".") ? bb(r, n) : () => r[n];
        if (Vt(e)) {
            const o = t[e];
            je(o) && Ji(s, o)
        } else if (je(e)) Ji(s, e.bind(r));
        else if ($t(e))
            if (Le(e)) e.forEach(o => Nb(o, t, r, n));
            else {
                const o = je(e.handler) ? e.handler.bind(r) : t[e.handler];
                je(o) && Ji(s, o, e)
            }
    }

    function $b(e) {
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
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => qc(f, h, c, !0)), qc(f, t, c)), o.set(t, f), f
    }

    function qc(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && qc(e, o, r, !0), s && s.forEach(c => qc(e, c, r, !0));
        for (const c in t)
            if (!(n && c === "expose")) {
                const u = CL[c] || r && r[c];
                e[c] = u ? u(e[c], t[c]) : t[c]
            } return e
    }
    const CL = {
        data: Nv,
        props: Gi,
        emits: Gi,
        methods: Gi,
        computed: Gi,
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
        components: Gi,
        directives: Gi,
        watch: wL,
        provide: Nv,
        inject: RL
    };

    function Nv(e, t) {
        return t ? e ? function() {
            return Jt(je(e) ? e.call(this, this) : e, je(t) ? t.call(this, this) : t)
        } : t : e
    }

    function RL(e, t) {
        return Gi(pd(e), pd(t))
    }

    function pd(e) {
        if (Le(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
            return t
        }
        return e
    }

    function pr(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function Gi(e, t) {
        return e ? Jt(Jt(Object.create(null), e), t) : t
    }

    function wL(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = Jt(Object.create(null), e);
        for (const n in t) r[n] = pr(e[n], t[n]);
        return r
    }

    function NL(e, t, r, n = !1) {
        const s = {},
            o = {};
        jc(o, bl, 1), e.propsDefaults = Object.create(null), Lb(e, t, s, o);
        for (const c in e.propsOptions[0]) c in s || (s[c] = void 0);
        r ? e.props = n ? s : K$(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function $L(e, t, r, n) {
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
                for (let y = 0; y < g.length; y++) {
                    let b = g[y];
                    if (ml(e.emitsOptions, b)) continue;
                    const R = t[b];
                    if (f)
                        if (Qe(o, b)) R !== o[b] && (o[b] = R, h = !0);
                        else {
                            const P = Sn(b);
                            s[P] = gd(f, u, P, R, e, !1)
                        }
                    else R !== o[b] && (o[b] = R, h = !0)
                }
            }
        } else {
            Lb(e, t, s, o) && (h = !0);
            let g;
            for (const y in u)(!t || !Qe(t, y) && ((g = is(y)) === y || !Qe(t, g))) && (f ? r && (r[y] !== void 0 || r[g] !== void 0) && (s[y] = gd(f, u, y, void 0, e, !0)) : delete s[y]);
            if (o !== u)
                for (const y in o)(!t || !Qe(t, y) && !0) && (delete o[y], h = !0)
        }
        h && Fn(e, "set", "$attrs")
    }

    function Lb(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let c = !1,
            u;
        if (t)
            for (let f in t) {
                if (Dc(f)) continue;
                const h = t[f];
                let g;
                s && Qe(s, g = Sn(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : ml(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, c = !0)
            }
        if (o) {
            const f = nt(r),
                h = u || pt;
            for (let g = 0; g < o.length; g++) {
                const y = o[g];
                r[y] = gd(s, f, y, h[y], e, !Qe(h, y))
            }
        }
        return c
    }

    function gd(e, t, r, n, s, o) {
        const c = e[r];
        if (c != null) {
            const u = Qe(c, "default");
            if (u && n === void 0) {
                const f = c.default;
                if (c.type !== Function && je(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (Ks(s), n = h[r] = f.call(null, t), Zi())
                } else n = f
            }
            c[0] && (o && !u ? n = !1 : c[1] && (n === "" || n === is(r)) && (n = !0))
        }
        return n
    }

    function Pb(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const o = e.props,
            c = {},
            u = [];
        let f = !1;
        if (!je(e)) {
            const g = y => {
                f = !0;
                const [b, R] = Pb(y, t, !0);
                Jt(c, b), R && u.push(...R)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return n.set(e, Ds), Ds;
        if (Le(o))
            for (let g = 0; g < o.length; g++) {
                const y = Sn(o[g]);
                $v(y) && (c[y] = pt)
            } else if (o)
                for (const g in o) {
                    const y = Sn(g);
                    if ($v(y)) {
                        const b = o[g],
                            R = c[y] = Le(b) || je(b) ? {
                                type: b
                            } : b;
                        if (R) {
                            const P = Dv(Boolean, R.type),
                                x = Dv(String, R.type);
                            R[0] = P > -1, R[1] = x < 0 || P < x, (P > -1 || Qe(R, "default")) && u.push(y)
                        }
                    }
                }
        const h = [c, u];
        return n.set(e, h), h
    }

    function $v(e) {
        return e[0] !== "$"
    }

    function Lv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Pv(e, t) {
        return Lv(e) === Lv(t)
    }

    function Dv(e, t) {
        return Le(t) ? t.findIndex(r => Pv(r, e)) : je(t) && Pv(t, e) ? 0 : -1
    }
    const Db = e => e[0] === "_" || e === "$stable",
        Ch = e => Le(e) ? e.map(bn) : [bn(e)],
        LL = (e, t, r) => {
            if (t._n) return t;
            const n = bh((...s) => Ch(t(...s)), r);
            return n._c = !1, n
        },
        kb = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (Db(s)) continue;
                const o = e[s];
                if (je(o)) t[s] = LL(s, o, n);
                else if (o != null) {
                    const c = Ch(o);
                    t[s] = () => c
                }
            }
        },
        Mb = (e, t) => {
            const r = Ch(t);
            e.slots.default = () => r
        },
        PL = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = nt(t), jc(t, "_", r)) : kb(t, e.slots = {})
            } else e.slots = {}, t && Mb(e, t);
            jc(e.slots, bl, 1)
        },
        DL = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                c = pt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (Jt(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, kb(t, s)), c = t
            } else t && (Mb(e, t), c = {
                default: 1
            });
            if (o)
                for (const u in s) !Db(u) && !(u in c) && delete s[u]
        };

    function xb() {
        return {
            app: null,
            config: {
                isNativeTag: f$,
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
    let kL = 0;

    function ML(e, t) {
        return function(n, s = null) {
            je(n) || (n = Object.assign({}, n)), s != null && !$t(s) && (s = null);
            const o = xb(),
                c = new Set;
            let u = !1;
            const f = o.app = {
                _uid: kL++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: QL,
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
                mount(h, g, y) {
                    if (!u) {
                        const b = st(n, s);
                        return b.appContext = o, g && t ? t(b, h) : e(b, h, y), u = !0, f._container = h, h.__vue_app__ = f, Tl(b.component) || b.component.proxy
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
        if (Le(e)) {
            e.forEach((b, R) => md(b, t && (Le(t) ? t[R] : t), r, n, s));
            return
        }
        if (Mc(n) && !s) return;
        const o = n.shapeFlag & 4 ? Tl(n.component) || n.component.proxy : n.el,
            c = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === pt ? u.refs = {} : u.refs,
            y = u.setupState;
        if (h != null && h !== f && (Vt(h) ? (g[h] = null, Qe(y, h) && (y[h] = null)) : rr(h) && (h.value = null)), je(f)) li(f, u, 12, [c, g]);
        else {
            const b = Vt(f),
                R = rr(f);
            if (b || R) {
                const P = () => {
                    if (e.f) {
                        const x = b ? g[f] : f.value;
                        s ? Le(x) && fh(x, o) : Le(x) ? x.includes(o) || x.push(o) : b ? (g[f] = [o], Qe(y, f) && (y[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else b ? (g[f] = c, Qe(y, f) && (y[f] = c)) : R && (f.value = c, e.k && (g[e.k] = c))
                };
                c ? (P.id = -1, Sr(P, r)) : P()
            }
        }
    }
    const Sr = uL;

    function xL(e) {
        return UL(e)
    }

    function UL(e, t) {
        const r = v$();
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
            parentNode: y,
            nextSibling: b,
            setScopeId: R = cn,
            cloneNode: P,
            insertStaticContent: x
        } = e, U = (m, p, O, M = null, B = null, V = null, le = !1, ie = null, ee = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Hi(m, p) && (M = Tt(m), wt(m, B, V, !0), m = null), p.patchFlag === -2 && (ee = !1, p.dynamicChildren = null);
            const {
                type: w,
                ref: j,
                shapeFlag: he
            } = p;
            switch (w) {
                case El:
                    I(m, p, O, M);
                    break;
                case ln:
                    H(m, p, O, M);
                    break;
                case pf:
                    m == null && Y(p, O, M, le);
                    break;
                case Ot:
                    Ae(m, p, O, M, B, V, le, ie, ee);
                    break;
                default:
                    he & 1 ? z(m, p, O, M, B, V, le, ie, ee) : he & 6 ? F(m, p, O, M, B, V, le, ie, ee) : (he & 64 || he & 128) && w.process(m, p, O, M, B, V, le, ie, ee, Mt)
            }
            j != null && B && md(j, m && m.ref, V, p || m, !p)
        }, I = (m, p, O, M) => {
            if (m == null) n(p.el = u(p.children), O, M);
            else {
                const B = p.el = m.el;
                p.children !== m.children && h(B, p.children)
            }
        }, H = (m, p, O, M) => {
            m == null ? n(p.el = f(p.children || ""), O, M) : p.el = m.el
        }, Y = (m, p, O, M) => {
            [m.el, m.anchor] = x(m.children, p, O, M, m.el, m.anchor)
        }, W = ({
            el: m,
            anchor: p
        }, O, M) => {
            let B;
            for (; m && m !== p;) B = b(m), n(m, O, M), m = B;
            n(p, O, M)
        }, G = ({
            el: m,
            anchor: p
        }) => {
            let O;
            for (; m && m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, z = (m, p, O, M, B, V, le, ie, ee) => {
            le = le || p.type === "svg", m == null ? ae(p, O, M, B, V, le, ie, ee) : Ce(m, p, B, V, le, ie, ee)
        }, ae = (m, p, O, M, B, V, le, ie) => {
            let ee, w;
            const {
                type: j,
                props: he,
                shapeFlag: pe,
                transition: Re,
                patchFlag: Pe,
                dirs: A
            } = m;
            if (m.el && P !== void 0 && Pe === -1) ee = m.el = P(m.el);
            else {
                if (ee = m.el = c(m.type, V, he && he.is, he), pe & 8 ? g(ee, m.children) : pe & 16 && ue(m.children, ee, null, M, B, V && j !== "foreignObject", le, ie), A && ki(m, null, M, "created"), he) {
                    for (const $ in he) $ !== "value" && !Dc($) && o(ee, $, null, he[$], V, m.children, M, B, at);
                    "value" in he && o(ee, "value", null, he.value), (w = he.onVnodeBeforeMount) && mn(w, M, m)
                }
                ce(ee, m, m.scopeId, le, M)
            }
            A && ki(m, null, M, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Re && !Re.persisted;
            T && Re.beforeEnter(ee), n(ee, p, O), ((w = he && he.onVnodeMounted) || T || A) && Sr(() => {
                w && mn(w, M, m), T && Re.enter(ee), A && ki(m, null, M, "mounted")
            }, B)
        }, ce = (m, p, O, M, B) => {
            if (O && R(m, O), M)
                for (let V = 0; V < M.length; V++) R(m, M[V]);
            if (B) {
                let V = B.subTree;
                if (p === V) {
                    const le = B.vnode;
                    ce(m, le, le.scopeId, le.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, p, O, M, B, V, le, ie, ee = 0) => {
            for (let w = ee; w < m.length; w++) {
                const j = m[w] = ie ? ni(m[w]) : bn(m[w]);
                U(null, j, p, O, M, B, V, le, ie)
            }
        }, Ce = (m, p, O, M, B, V, le) => {
            const ie = p.el = m.el;
            let {
                patchFlag: ee,
                dynamicChildren: w,
                dirs: j
            } = p;
            ee |= m.patchFlag & 16;
            const he = m.props || pt,
                pe = p.props || pt;
            let Re;
            O && Mi(O, !1), (Re = pe.onVnodeBeforeUpdate) && mn(Re, O, p, m), j && ki(p, m, O, "beforeUpdate"), O && Mi(O, !0);
            const Pe = B && p.type !== "foreignObject";
            if (w ? Ie(m.dynamicChildren, w, ie, O, M, Pe, V) : le || Se(m, p, ie, null, O, M, Pe, V, !1), ee > 0) {
                if (ee & 16) fe(ie, p, he, pe, O, M, B);
                else if (ee & 2 && he.class !== pe.class && o(ie, "class", null, pe.class, B), ee & 4 && o(ie, "style", he.style, pe.style, B), ee & 8) {
                    const A = p.dynamicProps;
                    for (let T = 0; T < A.length; T++) {
                        const $ = A[T],
                            S = he[$],
                            L = pe[$];
                        (L !== S || $ === "value") && o(ie, $, S, L, B, m.children, O, M, at)
                    }
                }
                ee & 1 && m.children !== p.children && g(ie, p.children)
            } else !le && w == null && fe(ie, p, he, pe, O, M, B);
            ((Re = pe.onVnodeUpdated) || j) && Sr(() => {
                Re && mn(Re, O, p, m), j && ki(p, m, O, "updated")
            }, M)
        }, Ie = (m, p, O, M, B, V, le) => {
            for (let ie = 0; ie < p.length; ie++) {
                const ee = m[ie],
                    w = p[ie],
                    j = ee.el && (ee.type === Ot || !Hi(ee, w) || ee.shapeFlag & 70) ? y(ee.el) : O;
                U(ee, w, j, null, M, B, V, le, !0)
            }
        }, fe = (m, p, O, M, B, V, le) => {
            if (O !== M) {
                for (const ie in M) {
                    if (Dc(ie)) continue;
                    const ee = M[ie],
                        w = O[ie];
                    ee !== w && ie !== "value" && o(m, ie, w, ee, le, p.children, B, V, at)
                }
                if (O !== pt)
                    for (const ie in O) !Dc(ie) && !(ie in M) && o(m, ie, O[ie], null, le, p.children, B, V, at);
                "value" in M && o(m, "value", O.value, M.value)
            }
        }, Ae = (m, p, O, M, B, V, le, ie, ee) => {
            const w = p.el = m ? m.el : u(""),
                j = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Re
            } = p;
            Re && (ie = ie ? ie.concat(Re) : Re), m == null ? (n(w, O, M), n(j, O, M), ue(p.children, O, j, B, V, le, ie, ee)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ie(m.dynamicChildren, pe, O, B, V, le, ie), (p.key != null || B && p === B.subTree) && Ub(m, p, !0)) : Se(m, p, O, j, B, V, le, ie, ee)
        }, F = (m, p, O, M, B, V, le, ie, ee) => {
            p.slotScopeIds = ie, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, M, le, ee) : re(p, O, M, B, V, le, ee) : de(m, p, ee)
        }, re = (m, p, O, M, B, V, le) => {
            const ie = m.component = VL(m, M, B);
            if (_l(m) && (ie.ctx.renderer = Mt), YL(ie), ie.asyncDep) {
                if (B && B.registerDep(ie, ye), !m.el) {
                    const ee = ie.subTree = st(ln);
                    H(null, ee, p, O)
                }
                return
            }
            ye(ie, m, p, O, B, V, le)
        }, de = (m, p, O) => {
            const M = p.component = m.component;
            if (oL(m, p, O))
                if (M.asyncDep && !M.asyncResolved) {
                    me(M, p, O);
                    return
                } else M.next = p, tL(M.update), M.update();
            else p.el = m.el, M.vnode = p
        }, ye = (m, p, O, M, B, V, le) => {
            const ie = () => {
                    if (m.isMounted) {
                        let {
                            next: j,
                            bu: he,
                            u: pe,
                            parent: Re,
                            vnode: Pe
                        } = m, A = j, T;
                        Mi(m, !1), j ? (j.el = Pe.el, me(m, j, le)) : j = Pe, he && kc(he), (T = j.props && j.props.onVnodeBeforeUpdate) && mn(T, Re, j, Pe), Mi(m, !0);
                        const $ = df(m),
                            S = m.subTree;
                        m.subTree = $, U(S, $, y(S.el), Tt(S), m, B, V), j.el = $.el, A === null && cL(m, $.el), pe && Sr(pe, B), (T = j.props && j.props.onVnodeUpdated) && Sr(() => mn(T, Re, j, Pe), B)
                    } else {
                        let j;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Re,
                            m: Pe,
                            parent: A
                        } = m, T = Mc(p);
                        if (Mi(m, !1), Re && kc(Re), !T && (j = pe && pe.onVnodeBeforeMount) && mn(j, A, p), Mi(m, !0), he && xt) {
                            const $ = () => {
                                m.subTree = df(m), xt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && $()) : $()
                        } else {
                            const $ = m.subTree = df(m);
                            U(null, $, O, M, m, B, V), p.el = $.el
                        }
                        if (Pe && Sr(Pe, B), !T && (j = pe && pe.onVnodeMounted)) {
                            const $ = p;
                            Sr(() => mn(j, A, $), B)
                        }(p.shapeFlag & 256 || A && Mc(A.vnode) && A.vnode.shapeFlag & 256) && m.a && Sr(m.a, B), m.isMounted = !0, p = O = M = null
                    }
                },
                ee = m.effect = new ph(ie, () => pb(w), m.scope),
                w = m.update = () => ee.run();
            w.id = m.uid, Mi(m, !0), w()
        }, me = (m, p, O) => {
            p.component = m;
            const M = m.vnode.props;
            m.vnode = p, m.next = null, $L(m, p.props, M, O), DL(m, p.children, O), Zs(), gl(void 0, m.update), Qs()
        }, Se = (m, p, O, M, B, V, le, ie, ee = !1) => {
            const w = m && m.children,
                j = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Re
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Fe(w, he, O, M, B, V, le, ie, ee);
                    return
                } else if (pe & 256) {
                    ke(w, he, O, M, B, V, le, ie, ee);
                    return
                }
            }
            Re & 8 ? (j & 16 && at(w, B, V), he !== w && g(O, he)) : j & 16 ? Re & 16 ? Fe(w, he, O, M, B, V, le, ie, ee) : at(w, B, V, !0) : (j & 8 && g(O, ""), Re & 16 && ue(he, O, M, B, V, le, ie, ee))
        }, ke = (m, p, O, M, B, V, le, ie, ee) => {
            m = m || Ds, p = p || Ds;
            const w = m.length,
                j = p.length,
                he = Math.min(w, j);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Re = p[pe] = ee ? ni(p[pe]) : bn(p[pe]);
                U(m[pe], Re, O, null, B, V, le, ie, ee)
            }
            w > j ? at(m, B, V, !0, !1, he) : ue(p, O, M, B, V, le, ie, ee, he)
        }, Fe = (m, p, O, M, B, V, le, ie, ee) => {
            let w = 0;
            const j = p.length;
            let he = m.length - 1,
                pe = j - 1;
            for (; w <= he && w <= pe;) {
                const Re = m[w],
                    Pe = p[w] = ee ? ni(p[w]) : bn(p[w]);
                if (Hi(Re, Pe)) U(Re, Pe, O, null, B, V, le, ie, ee);
                else break;
                w++
            }
            for (; w <= he && w <= pe;) {
                const Re = m[he],
                    Pe = p[pe] = ee ? ni(p[pe]) : bn(p[pe]);
                if (Hi(Re, Pe)) U(Re, Pe, O, null, B, V, le, ie, ee);
                else break;
                he--, pe--
            }
            if (w > he) {
                if (w <= pe) {
                    const Re = pe + 1,
                        Pe = Re < j ? p[Re].el : M;
                    for (; w <= pe;) U(null, p[w] = ee ? ni(p[w]) : bn(p[w]), O, Pe, B, V, le, ie, ee), w++
                }
            } else if (w > pe)
                for (; w <= he;) wt(m[w], B, V, !0), w++;
            else {
                const Re = w,
                    Pe = w,
                    A = new Map;
                for (w = Pe; w <= pe; w++) {
                    const Te = p[w] = ee ? ni(p[w]) : bn(p[w]);
                    Te.key != null && A.set(Te.key, w)
                }
                let T, $ = 0;
                const S = pe - Pe + 1;
                let L = !1,
                    J = 0;
                const te = new Array(S);
                for (w = 0; w < S; w++) te[w] = 0;
                for (w = Re; w <= he; w++) {
                    const Te = m[w];
                    if ($ >= S) {
                        wt(Te, B, V, !0);
                        continue
                    }
                    let ut;
                    if (Te.key != null) ut = A.get(Te.key);
                    else
                        for (T = Pe; T <= pe; T++)
                            if (te[T - Pe] === 0 && Hi(Te, p[T])) {
                                ut = T;
                                break
                            } ut === void 0 ? wt(Te, B, V, !0) : (te[ut - Pe] = w + 1, ut >= J ? J = ut : L = !0, U(Te, p[ut], O, null, B, V, le, ie, ee), $++)
                }
                const _e = L ? FL(te) : Ds;
                for (T = _e.length - 1, w = S - 1; w >= 0; w--) {
                    const Te = Pe + w,
                        ut = p[Te],
                        sr = Te + 1 < j ? p[Te + 1].el : M;
                    te[w] === 0 ? U(null, ut, O, sr, B, V, le, ie, ee) : L && (T < 0 || w !== _e[T] ? et(ut, O, sr, 2) : T--)
                }
            }
        }, et = (m, p, O, M, B = null) => {
            const {
                el: V,
                type: le,
                transition: ie,
                children: ee,
                shapeFlag: w
            } = m;
            if (w & 6) {
                et(m.component.subTree, p, O, M);
                return
            }
            if (w & 128) {
                m.suspense.move(p, O, M);
                return
            }
            if (w & 64) {
                le.move(m, p, O, Mt);
                return
            }
            if (le === Ot) {
                n(V, p, O);
                for (let he = 0; he < ee.length; he++) et(ee[he], p, O, M);
                n(m.anchor, p, O);
                return
            }
            if (le === pf) {
                W(m, p, O);
                return
            }
            if (M !== 2 && w & 1 && ie)
                if (M === 0) ie.beforeEnter(V), n(V, p, O), Sr(() => ie.enter(V), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Re
                    } = ie, Pe = () => n(V, p, O), A = () => {
                        he(V, () => {
                            Pe(), Re && Re()
                        })
                    };
                    pe ? pe(V, Pe, A) : A()
                }
            else n(V, p, O)
        }, wt = (m, p, O, M = !1, B = !1) => {
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
            if (ie != null && md(ie, null, O, m, !0), j & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Re = j & 1 && pe,
                Pe = !Mc(m);
            let A;
            if (Pe && (A = le && le.onVnodeBeforeUnmount) && mn(A, p, m), j & 6) vr(m.component, O, M);
            else {
                if (j & 128) {
                    m.suspense.unmount(O, M);
                    return
                }
                Re && ki(m, null, p, "beforeUnmount"), j & 64 ? m.type.remove(m, p, O, B, Mt, M) : w && (V !== Ot || he > 0 && he & 64) ? at(w, p, O, !1, !0) : (V === Ot && he & 384 || !B && j & 16) && at(ee, p, O), M && Ar(m)
            }(Pe && (A = le && le.onVnodeUnmounted) || Re) && Sr(() => {
                A && mn(A, p, m), Re && ki(m, null, p, "unmounted")
            }, O)
        }, Ar = m => {
            const {
                type: p,
                el: O,
                anchor: M,
                transition: B
            } = m;
            if (p === Ot) {
                ir(O, M);
                return
            }
            if (p === pf) {
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
        }, vr = (m, p, O) => {
            const {
                bum: M,
                scope: B,
                update: V,
                subTree: le,
                um: ie
            } = m;
            M && kc(M), B.stop(), V && (V.active = !1, wt(le, m, p, O)), ie && Sr(ie, p), Sr(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, at = (m, p, O, M = !1, B = !1, V = 0) => {
            for (let le = V; le < m.length; le++) wt(m[le], p, O, M, B)
        }, Tt = m => m.shapeFlag & 6 ? Tt(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), ot = (m, p, O) => {
            m == null ? p._vnode && wt(p._vnode, null, null, !0) : U(p._vnode || null, m, p, null, null, null, O), vb(), p._vnode = m
        }, Mt = {
            p: U,
            um: wt,
            m: et,
            r: Ar,
            mt: re,
            mc: ue,
            pc: Se,
            pbc: Ie,
            n: Tt,
            o: e
        };
        let Yt, xt;
        return t && ([Yt, xt] = t(Mt)), {
            render: ot,
            hydrate: Yt,
            createApp: ML(ot, Yt)
        }
    }

    function Mi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function Ub(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (Le(n) && Le(s))
            for (let o = 0; o < n.length; o++) {
                const c = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ni(s[o]), u.el = c.el), r || Ub(c, u))
            }
    }

    function FL(e) {
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
    const BL = e => e.__isTeleport,
        Ot = Symbol(void 0),
        El = Symbol(void 0),
        ln = Symbol(void 0),
        pf = Symbol(void 0),
        Ua = [];
    let on = null;

    function ne(e = !1) {
        Ua.push(on = e ? null : [])
    }

    function GL() {
        Ua.pop(), on = Ua[Ua.length - 1] || null
    }
    let eo = 1;

    function kv(e) {
        eo += e
    }

    function Fb(e) {
        return e.dynamicChildren = eo > 0 ? on || Ds : null, GL(), eo > 0 && on && on.push(e), e
    }

    function oe(e, t, r, n, s, o) {
        return Fb(X(e, t, r, n, s, o, !0))
    }

    function Yr(e, t, r, n, s) {
        return Fb(st(e, t, r, n, s, !0))
    }

    function vd(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Hi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const bl = "__vInternal",
        Bb = ({
            key: e
        }) => e != null ? e : null,
        xc = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Vt(e) || rr(e) || je(e) ? {
            i: zr,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function X(e, t = null, r = null, n = 0, s = null, o = e === Ot ? 0 : 1, c = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && Bb(t),
            ref: t && xc(t),
            scopeId: vl,
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
        return u ? (Rh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Vt(r) ? 8 : 16), eo > 0 && !c && on && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && on.push(f), f
    }
    const st = WL;

    function WL(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === wb) && (e = ln), vd(e)) {
            const u = hi(e, t, !0);
            return r && Rh(u, r), eo > 0 && !o && on && (u.shapeFlag & 6 ? on[on.indexOf(e)] = u : on.push(u)), u.patchFlag |= -2, u
        }
        if (ZL(e) && (e = e.__vccOpts), t) {
            t = jL(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Vt(u) && (t.class = Ge(u)), $t(f) && (ob(f) && !Le(f) && (f = Jt({}, f)), t.style = lo(f))
        }
        const c = Vt(e) ? 1 : lL(e) ? 128 : BL(e) ? 64 : $t(e) ? 4 : je(e) ? 2 : 0;
        return X(e, t, r, n, s, c, o, !0)
    }

    function jL(e) {
        return e ? ob(e) || bl in e ? Jt({}, e) : e : null
    }

    function hi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: c
        } = e, u = t ? wh(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && Bb(u),
            ref: t && t.ref ? r && s ? Le(s) ? s.concat(xc(t)) : [s, xc(t)] : xc(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: c,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Ot ? o === -1 ? 16 : o | 16 : o,
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

    function mr(e = " ", t = 0) {
        return st(El, null, e, t)
    }

    function We(e = "", t = !1) {
        return t ? (ne(), Yr(ln, null, e)) : st(ln, null, e)
    }

    function bn(e) {
        return e == null || typeof e == "boolean" ? st(ln) : Le(e) ? st(Ot, null, e.slice()) : typeof e == "object" ? ni(e) : st(El, null, String(e))
    }

    function ni(e) {
        return e.el === null || e.memo ? e : hi(e)
    }

    function Rh(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (Le(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Rh(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(bl in t) ? t._ctx = zr : s === 3 && zr && (zr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else je(t) ? (t = {
            default: t,
            _ctx: zr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [mr(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function wh(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Ge([t.class, n.class]));
                else if (s === "style") t.style = lo([t.style, n.style]);
            else if (ll(s)) {
                const o = t[s],
                    c = n[s];
                c && o !== c && !(Le(o) && o.includes(c)) && (t[s] = o ? [].concat(o, c) : c)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function mn(e, t, r, n = null) {
        Xr(e, t, 7, [r, n])
    }
    const HL = xb();
    let KL = 0;

    function VL(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || HL,
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
                scope: new zE(!0),
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
                propsOptions: Pb(n, s),
                emitsOptions: yb(n, s),
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
        }, o.root = t ? t.root : o, o.emit = iL.bind(null, o), e.ce && e.ce(o), o
    }
    let Xt = null;
    const pi = () => Xt || zr,
        Ks = e => {
            Xt = e, e.scope.on()
        },
        Zi = () => {
            Xt && Xt.scope.off(), Xt = null
        };

    function Gb(e) {
        return e.vnode.shapeFlag & 4
    }
    let to = !1;

    function YL(e, t = !1) {
        to = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = Gb(e);
        NL(e, r, s, t), PL(e, n);
        const o = s ? qL(e, t) : void 0;
        return to = !1, o
    }

    function qL(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = cb(new Proxy(e.ctx, OL));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? XL(e) : null;
            Ks(e), Zs();
            const o = li(n, e, 0, [e.props, s]);
            if (Qs(), Zi(), VE(o)) {
                if (o.then(Zi, Zi), t) return o.then(c => {
                    Mv(e, c, t)
                }).catch(c => {
                    pl(c, e, 0)
                });
                e.asyncDep = o
            } else Mv(e, o, t)
        } else Wb(e, t)
    }

    function Mv(e, t, r) {
        je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $t(t) && (e.setupState = db(t)), Wb(e, r)
    }
    let xv;

    function Wb(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && xv && !n.render) {
                const s = n.template;
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
                    n.render = xv(s, h)
                }
            }
            e.render = n.render || cn
        }
        Ks(e), Zs(), AL(e), Qs(), Zi()
    }

    function zL(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return Pr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function XL(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = zL(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Tl(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(db(cb(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Yc) return Yc[r](e)
            }
        }))
    }

    function JL(e, t = !0) {
        return je(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function ZL(e) {
        return je(e) && "__vccOpts" in e
    }
    const qr = (e, t) => J$(e, t, to);

    function Nh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? $t(t) && !Le(t) ? vd(t) ? st(e, null, [t]) : st(e, t) : st(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && vd(r) && (r = [r]), st(e, t, r))
    }
    const QL = "3.2.37",
        eP = "http://www.w3.org/2000/svg",
        Ki = typeof document < "u" ? document : null,
        Uv = Ki && Ki.createElement("template"),
        tP = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Ki.createElementNS(eP, e) : Ki.createElement(e, r ? {
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
                const c = r ? r.previousSibling : t.lastChild;
                if (s && (s === o || s.nextSibling))
                    for (; t.insertBefore(s.cloneNode(!0), r), !(s === o || !(s = s.nextSibling)););
                else {
                    Uv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const u = Uv.content;
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

    function rP(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function nP(e, t, r) {
        const n = e.style,
            s = Vt(r);
        if (r && !s) {
            for (const o in r) _d(n, o, r[o]);
            if (t && !Vt(t))
                for (const o in t) r[o] == null && _d(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const Fv = /\s*!important$/;

    function _d(e, t, r) {
        if (Le(r)) r.forEach(n => _d(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = iP(e, t);
            Fv.test(r) ? e.setProperty(is(n), r.replace(Fv, ""), "important") : e[n] = r
        }
    }
    const Bv = ["Webkit", "Moz", "ms"],
        gf = {};

    function iP(e, t) {
        const r = gf[t];
        if (r) return r;
        let n = Sn(t);
        if (n !== "filter" && n in e) return gf[t] = n;
        n = dl(n);
        for (let s = 0; s < Bv.length; s++) {
            const o = Bv[s] + n;
            if (o in e) return gf[t] = o
        }
        return t
    }
    const Gv = "http://www.w3.org/1999/xlink";

    function sP(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Gv, t.slice(6, t.length)) : e.setAttributeNS(Gv, t, r);
        else {
            const o = a$(t);
            r == null || o && !jE(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function aP(e, t, r, n, s, o, c) {
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
            f === "boolean" ? r = jE(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [jb, oP] = (() => {
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
    const cP = Promise.resolve(),
        lP = () => {
            yd = 0
        },
        uP = () => yd || (cP.then(lP), yd = jb());

    function Vi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function fP(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function dP(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            c = o[t];
        if (n && c) c.value = n;
        else {
            const [u, f] = hP(t);
            if (n) {
                const h = o[t] = pP(n, s);
                Vi(e, u, h, f)
            } else c && (fP(e, u, c, f), o[t] = void 0)
        }
    }
    const Wv = /(?:Once|Passive|Capture)$/;

    function hP(e) {
        let t;
        if (Wv.test(e)) {
            t = {};
            let r;
            for (; r = e.match(Wv);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
        }
        return [is(e.slice(2)), t]
    }

    function pP(e, t) {
        const r = n => {
            const s = n.timeStamp || jb();
            (oP || s >= r.attached - 1) && Xr(gP(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = uP(), r
    }

    function gP(e, t) {
        if (Le(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const jv = /^on[a-z]/,
        mP = (e, t, r, n, s = !1, o, c, u, f) => {
            t === "class" ? rP(e, n, s) : t === "style" ? nP(e, r, n) : ll(t) ? uh(t) || dP(e, t, r, n, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : vP(e, t, n, s)) ? aP(e, t, n, o, c, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), sP(e, t, n, s))
        };

    function vP(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && jv.test(t) && je(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || jv.test(t) && Vt(r) ? !1 : t in e
    }
    const Zn = "transition",
        Ca = "animation",
        $h = (e, {
            slots: t
        }) => Nh(Sb, Kb(e), t);
    $h.displayName = "Transition";
    const Hb = {
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
        _P = $h.props = Jt({}, Sb.props, Hb),
        xi = (e, t = []) => {
            Le(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        Hv = e => e ? Le(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function Kb(e) {
        const t = {};
        for (const fe in e) fe in Hb || (t[fe] = e[fe]);
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
            leaveFromClass: y = `${r}-leave-from`,
            leaveActiveClass: b = `${r}-leave-active`,
            leaveToClass: R = `${r}-leave-to`
        } = e, P = yP(s), x = P && P[0], U = P && P[1], {
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
        }, Ce = (fe, Ae) => {
            fe._isLeaving = !1, ri(fe, y), ri(fe, R), ri(fe, b), Ae && Ae()
        }, Ie = fe => (Ae, F) => {
            const re = fe ? ae : H,
                de = () => ue(Ae, fe, F);
            xi(re, [Ae, de]), Kv(() => {
                ri(Ae, fe ? f : o), Dn(Ae, fe ? g : u), Hv(re) || Vv(Ae, n, x, de)
            })
        };
        return Jt(t, {
            onBeforeEnter(fe) {
                xi(I, [fe]), Dn(fe, o), Dn(fe, c)
            },
            onBeforeAppear(fe) {
                xi(z, [fe]), Dn(fe, f), Dn(fe, h)
            },
            onEnter: Ie(!1),
            onAppear: Ie(!0),
            onLeave(fe, Ae) {
                fe._isLeaving = !0;
                const F = () => Ce(fe, Ae);
                Dn(fe, y), Yb(), Dn(fe, b), Kv(() => {
                    !fe._isLeaving || (ri(fe, y), Dn(fe, R), Hv(W) || Vv(fe, n, U, F))
                }), xi(W, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), xi(Y, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), xi(ce, [fe])
            },
            onLeaveCancelled(fe) {
                Ce(fe), xi(G, [fe])
            }
        })
    }

    function yP(e) {
        if (e == null) return null;
        if ($t(e)) return [mf(e.enter), mf(e.leave)]; {
            const t = mf(e);
            return [t, t]
        }
    }

    function mf(e) {
        return Hc(e)
    }

    function Dn(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function ri(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.remove(n));
        const {
            _vtc: r
        } = e;
        r && (r.delete(t), r.size || (e._vtc = void 0))
    }

    function Kv(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let EP = 0;

    function Vv(e, t, r, n) {
        const s = e._endId = ++EP,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: c,
            timeout: u,
            propCount: f
        } = Vb(e, t);
        if (!c) return n();
        const h = c + "end";
        let g = 0;
        const y = () => {
                e.removeEventListener(h, b), o()
            },
            b = R => {
                R.target === e && ++g >= f && y()
            };
        setTimeout(() => {
            g < f && y()
        }, u + 1), e.addEventListener(h, b)
    }

    function Vb(e, t) {
        const r = window.getComputedStyle(e),
            n = P => (r[P] || "").split(", "),
            s = n(Zn + "Delay"),
            o = n(Zn + "Duration"),
            c = Yv(s, o),
            u = n(Ca + "Delay"),
            f = n(Ca + "Duration"),
            h = Yv(u, f);
        let g = null,
            y = 0,
            b = 0;
        t === Zn ? c > 0 && (g = Zn, y = c, b = o.length) : t === Ca ? h > 0 && (g = Ca, y = h, b = f.length) : (y = Math.max(c, h), g = y > 0 ? c > h ? Zn : Ca : null, b = g ? g === Zn ? o.length : f.length : 0);
        const R = g === Zn && /\b(transform|all)(,|$)/.test(r[Zn + "Property"]);
        return {
            type: g,
            timeout: y,
            propCount: b,
            hasTransform: R
        }
    }

    function Yv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => qv(r) + qv(e[n])))
    }

    function qv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function Yb() {
        return document.body.offsetHeight
    }
    const qb = new WeakMap,
        zb = new WeakMap,
        bP = {
            name: "TransitionGroup",
            props: Jt({}, _P, {
                tag: String,
                moveClass: String
            }),
            setup(e, {
                slots: t
            }) {
                const r = pi(),
                    n = Tb();
                let s, o;
                return Cb(() => {
                    if (!s.length) return;
                    const c = e.moveClass || `${e.name||"v"}-move`;
                    if (!IP(s[0].el, r.vnode.el, c)) return;
                    s.forEach(SP), s.forEach(OP);
                    const u = s.filter(AP);
                    Yb(), u.forEach(f => {
                        const h = f.el,
                            g = h.style;
                        Dn(h, c), g.transform = g.webkitTransform = g.transitionDuration = "";
                        const y = h._moveCb = b => {
                            b && b.target !== h || (!b || /transform$/.test(b.propertyName)) && (h.removeEventListener("transitionend", y), h._moveCb = null, ri(h, c))
                        };
                        h.addEventListener("transitionend", y)
                    })
                }), () => {
                    const c = nt(e),
                        u = Kb(c);
                    let f = c.tag || Ot;
                    s = o, o = t.default ? Th(t.default()) : [];
                    for (let h = 0; h < o.length; h++) {
                        const g = o[h];
                        g.key != null && Qa(g, Za(g, u, n, r))
                    }
                    if (s)
                        for (let h = 0; h < s.length; h++) {
                            const g = s[h];
                            Qa(g, Za(g, u, n, r)), qb.set(g, g.el.getBoundingClientRect())
                        }
                    return st(f, null, o)
                }
            }
        },
        TP = bP;

    function SP(e) {
        const t = e.el;
        t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
    }

    function OP(e) {
        zb.set(e, e.el.getBoundingClientRect())
    }

    function AP(e) {
        const t = qb.get(e),
            r = zb.get(e),
            n = t.left - r.left,
            s = t.top - r.top;
        if (n || s) {
            const o = e.el.style;
            return o.transform = o.webkitTransform = `translate(${n}px,${s}px)`, o.transitionDuration = "0s", e
        }
    }

    function IP(e, t, r) {
        const n = e.cloneNode();
        e._vtc && e._vtc.forEach(c => {
            c.split(/\s+/).forEach(u => u && n.classList.remove(u))
        }), r.split(/\s+/).forEach(c => c && n.classList.add(c)), n.style.display = "none";
        const s = t.nodeType === 1 ? t : t.parentNode;
        s.appendChild(n);
        const {
            hasTransform: o
        } = Vb(n);
        return s.removeChild(n), o
    }
    const zc = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return Le(t) ? r => kc(t, r) : t
    };

    function CP(e) {
        e.target.composing = !0
    }

    function zv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const Xv = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = zc(s);
                const o = n || s.props && s.props.type === "number";
                Vi(e, t ? "change" : "input", c => {
                    if (c.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Hc(u)), e._assign(u)
                }), r && Vi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Vi(e, "compositionstart", CP), Vi(e, "compositionend", zv), Vi(e, "change", zv))
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
                if (e._assign = zc(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Hc(e.value) === t)) return;
                const c = t == null ? "" : t;
                e.value !== c && (e.value = c)
            }
        },
        RP = {
            deep: !0,
            created(e, t, r) {
                e._assign = zc(r), Vi(e, "change", () => {
                    const n = e._modelValue,
                        s = wP(e),
                        o = e.checked,
                        c = e._assign;
                    if (Le(n)) {
                        const u = HE(n, s),
                            f = u !== -1;
                        if (o && !f) c(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), c(h)
                        }
                    } else if (ul(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), c(u)
                    } else c(Xb(e, o))
                })
            },
            mounted: Jv,
            beforeUpdate(e, t, r) {
                e._assign = zc(r), Jv(e, t, r)
            }
        };

    function Jv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, Le(t) ? e.checked = HE(t, n.props.value) > -1 : ul(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = cl(t, Xb(e, !0)))
    }

    function wP(e) {
        return "_value" in e ? e._value : e.value
    }

    function Xb(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const NP = ["ctrl", "shift", "alt", "meta"],
        $P = {
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
            exact: (e, t) => NP.some(r => e[`${r}Key`] && !t.includes(r))
        },
        Jr = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = $P[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
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
        PP = (e, t) => r => {
            if (!("key" in r)) return;
            const n = is(r.key);
            if (t.some(s => s === n || LP[s] === n)) return e(r)
        },
        DP = Jt({
            patchProp: mP
        }, tP);
    let Zv;

    function kP() {
        return Zv || (Zv = xL(DP))
    }
    const MP = (...e) => {
        const t = kP().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = xP(n);
            if (!s) return;
            const o = t._component;
            !je(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const c = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c
        }, t
    };

    function xP(e) {
        return Vt(e) ? document.querySelector(e) : e
    }
    /*!
     * shared v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Ed = typeof window < "u",
        UP = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        vi = e => UP ? Symbol(e) : e,
        FP = (e, t, r) => BP({
            l: e,
            k: t,
            s: r
        }),
        BP = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Gt = e => typeof e == "number" && isFinite(e),
        GP = e => Ph(e) === "[object Date]",
        gi = e => Ph(e) === "[object RegExp]",
        Sl = e => xe(e) && Object.keys(e).length === 0;

    function WP(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const nr = Object.assign;

    function Qv(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const jP = Object.prototype.hasOwnProperty;

    function Lh(e, t) {
        return jP.call(e, t)
    }
    const _t = Array.isArray,
        Dt = e => typeof e == "function",
        ve = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        yt = e => e !== null && typeof e == "object",
        Jb = Object.prototype.toString,
        Ph = e => Jb.call(e),
        xe = e => Ph(e) === "[object Object]",
        HP = e => e == null ? "" : _t(e) || xe(e) && e.toString === Jb ? JSON.stringify(e, null, 2) : String(e);
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

    function Ol(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, c = e, u = new SyntaxError(String(c));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function KP(e) {
        throw e
    }

    function VP(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function bd(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const Pn = " ",
        YP = "\r",
        gr = `
`,
        qP = String.fromCharCode(8232),
        zP = String.fromCharCode(8233);

    function XP(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const c = ae => t[ae] === YP && t[ae + 1] === gr,
            u = ae => t[ae] === gr,
            f = ae => t[ae] === zP,
            h = ae => t[ae] === qP,
            g = ae => c(ae) || u(ae) || f(ae) || h(ae),
            y = () => r,
            b = () => n,
            R = () => s,
            P = () => o,
            x = ae => c(ae) || f(ae) || h(ae) ? gr : t[ae],
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
            index: y,
            line: b,
            column: R,
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
    const Qn = void 0,
        e_ = "'",
        JP = "tokenizer";

    function ZP(e, t = {}) {
        const r = t.location !== !1,
            n = XP(e),
            s = () => n.index(),
            o = () => VP(n.line(), n.column(), n.index()),
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

        function y(m, p, O, ...M) {
            const B = h();
            if (p.column += O, p.offset += O, g) {
                const V = bd(B.startLoc, p),
                    le = Ol(m, V, {
                        domain: JP,
                        args: M
                    });
                g(le)
            }
        }

        function b(m, p, O) {
            m.endLoc = o(), m.currentType = p;
            const M = {
                type: p
            };
            return r && (M.loc = bd(m.startLoc, m.endLoc)), O != null && (M.value = O), M
        }
        const R = m => b(m, 14);

        function P(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (y(rt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function x(m) {
            let p = "";
            for (; m.currentPeek() === Pn || m.currentPeek() === gr;) p += m.currentPeek(), m.peek();
            return p
        }

        function U(m) {
            const p = x(m);
            return m.skipToPeek(), p
        }

        function I(m) {
            if (m === Qn) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function H(m) {
            if (m === Qn) return !1;
            const p = m.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function Y(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            x(m);
            const M = I(m.currentPeek());
            return m.resetPeek(), M
        }

        function W(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            x(m);
            const M = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = H(M);
            return m.resetPeek(), B
        }

        function G(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            x(m);
            const M = m.currentPeek() === e_;
            return m.resetPeek(), M
        }

        function z(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 8) return !1;
            x(m);
            const M = m.currentPeek() === ".";
            return m.resetPeek(), M
        }

        function ae(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 9) return !1;
            x(m);
            const M = I(m.currentPeek());
            return m.resetPeek(), M
        }

        function ce(m, p) {
            const {
                currentType: O
            } = p;
            if (!(O === 8 || O === 12)) return !1;
            x(m);
            const M = m.currentPeek() === ":";
            return m.resetPeek(), M
        }

        function ue(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 10) return !1;
            const M = () => {
                    const V = m.currentPeek();
                    return V === "{" ? I(m.peek()) : V === "@" || V === "%" || V === "|" || V === ":" || V === "." || V === Pn || !V ? !1 : V === gr ? (m.peek(), M()) : I(V)
                },
                B = M();
            return m.resetPeek(), B
        }

        function Ce(m) {
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
                    return ie === "{" ? V === "%" ? !1 : B : ie === "@" || !ie ? V === "%" ? !0 : B : ie === "%" ? (m.peek(), O(B, "%", !0)) : ie === "|" ? V === "%" || le ? !0 : !(V === Pn || V === gr) : ie === Pn ? (m.peek(), O(!0, Pn, le)) : ie === gr ? (m.peek(), O(!0, gr, le)) : !0
                },
                M = O();
            return p && m.resetPeek(), M
        }

        function Ae(m, p) {
            const O = m.currentChar();
            return O === Qn ? Qn : p(O) ? (m.next(), O) : null
        }

        function F(m) {
            return Ae(m, O => {
                const M = O.charCodeAt(0);
                return M >= 97 && M <= 122 || M >= 65 && M <= 90 || M >= 48 && M <= 57 || M === 95 || M === 36
            })
        }

        function re(m) {
            return Ae(m, O => {
                const M = O.charCodeAt(0);
                return M >= 48 && M <= 57
            })
        }

        function de(m) {
            return Ae(m, O => {
                const M = O.charCodeAt(0);
                return M >= 48 && M <= 57 || M >= 65 && M <= 70 || M >= 97 && M <= 102
            })
        }

        function ye(m) {
            let p = "",
                O = "";
            for (; p = re(m);) O += p;
            return O
        }

        function me(m) {
            U(m);
            const p = m.currentChar();
            return p !== "%" && y(rt.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
        }

        function Se(m) {
            let p = "";
            for (;;) {
                const O = m.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(m)) p += O, m.next();
                    else break;
                else if (O === Pn || O === gr)
                    if (fe(m)) p += O, m.next();
                    else {
                        if (Ce(m)) break;
                        p += O, m.next()
                    }
                else p += O, m.next()
            }
            return p
        }

        function ke(m) {
            U(m);
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return m.currentChar() === Qn && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Fe(m) {
            U(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${ye(m)}`) : p += ye(m), m.currentChar() === Qn && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function et(m) {
            U(m), P(m, "'");
            let p = "",
                O = "";
            const M = V => V !== e_ && V !== gr;
            for (; p = Ae(m, M);) p === "\\" ? O += wt(m) : O += p;
            const B = m.currentChar();
            return B === gr || B === Qn ? (y(rt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === gr && (m.next(), P(m, "'")), O) : (P(m, "'"), O)
        }

        function wt(m) {
            const p = m.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return m.next(), `\\${p}`;
                case "u":
                    return Ar(m, p, 4);
                case "U":
                    return Ar(m, p, 6);
                default:
                    return y(rt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Ar(m, p, O) {
            P(m, p);
            let M = "";
            for (let B = 0; B < O; B++) {
                const V = de(m);
                if (!V) {
                    y(rt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${M}${m.currentChar()}`);
                    break
                }
                M += V
            }
            return `\\${p}${M}`
        }

        function ir(m) {
            U(m);
            let p = "",
                O = "";
            const M = B => B !== "{" && B !== "}" && B !== Pn && B !== gr;
            for (; p = Ae(m, M);) O += p;
            return O
        }

        function vr(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function at(m) {
            const p = (O = !1, M) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Pn ? M : B === gr ? (M += B, m.next(), p(O, M)) : (M += B, m.next(), p(!0, M))
            };
            return p(!1, "")
        }

        function Tt(m) {
            U(m);
            const p = P(m, "|");
            return U(m), p
        }

        function ot(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && y(rt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = b(p, 2, "{"), U(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && y(rt.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && U(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = Mt(m, p) || R(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        V = !0,
                        le = !0;
                    if (Ce(m)) return p.braceNest > 0 && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = b(p, 1, Tt(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Yt(m, p);
                    if (B = Y(m, p)) return O = b(p, 5, ke(m)), U(m), O;
                    if (V = W(m, p)) return O = b(p, 6, Fe(m)), U(m), O;
                    if (le = G(m, p)) return O = b(p, 7, et(m)), U(m), O;
                    if (!B && !V && !le) return O = b(p, 13, ir(m)), y(rt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), U(m), O;
                    break
            }
            return O
        }

        function Mt(m, p) {
            const {
                currentType: O
            } = p;
            let M = null;
            const B = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === gr || B === Pn) && y(rt.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return m.next(), M = b(p, 8, "@"), p.inLinked = !0, M;
                case ".":
                    return U(m), m.next(), b(p, 9, ".");
                case ":":
                    return U(m), m.next(), b(p, 10, ":");
                default:
                    return Ce(m) ? (M = b(p, 1, Tt(m)), p.braceNest = 0, p.inLinked = !1, M) : z(m, p) || ce(m, p) ? (U(m), Mt(m, p)) : ae(m, p) ? (U(m), b(p, 12, vr(m))) : ue(m, p) ? (U(m), B === "{" ? ot(m, p) || M : b(p, 11, at(m))) : (O === 8 && y(rt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Yt(m, p))
            }
        }

        function Yt(m, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return ot(m, p) || R(p);
            if (p.inLinked) return Mt(m, p) || R(p);
            switch (m.currentChar()) {
                case "{":
                    return ot(m, p) || R(p);
                case "}":
                    return y(rt.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), b(p, 3, "}");
                case "@":
                    return Mt(m, p) || R(p);
                default:
                    if (Ce(m)) return O = b(p, 1, Tt(m)), p.braceNest = 0, p.inLinked = !1, O;
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
                endLoc: M
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = M, f.offset = s(), f.startLoc = o(), n.currentChar() === Qn ? b(f, 14) : Yt(n, f)
        }
        return {
            nextToken: xt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const QP = "parser",
        eD = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function tD(e, t, r) {
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

    function rD(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(I, H, Y, W, ...G) {
            const z = I.currentPosition();
            if (z.offset += W, z.column += W, r) {
                const ae = bd(Y, z),
                    ce = Ol(H, ae, {
                        domain: QP,
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
            return z.value = H.replace(eD, tD), I.nextToken(), o(z, I.currentOffset(), I.currentPosition()), z
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

        function y(I, H) {
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
                    W.value == null && n(I, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, vn(W)), Y.key = y(I, W.value || "");
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

        function R(I) {
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
                        const Ce = b(I);
                        G.items.push(Ce.node), z = Ce.nextConsumeToken || null;
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
                const ce = R(I);
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
                G = R(I);
            return H.currentType === 14 ? G : P(I, Y, W, G)
        }

        function U(I) {
            const H = ZP(I, nr({}, e)),
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

    function nD(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function t_(e, t) {
        for (let r = 0; r < e.length; r++) Dh(e[r], t)
    }

    function Dh(e, t) {
        switch (e.type) {
            case 1:
                t_(e.cases, t), t.helper("plural");
                break;
            case 2:
                t_(e.items, t);
                break;
            case 6:
                Dh(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function iD(e, t = {}) {
        const r = nD(e);
        r.helper("normalize"), e.body && Dh(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function sD(e, t) {
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

        function y(x = !0) {
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
            deindent: y,
            newline: b,
            helper: x => `_${x}`,
            needIndent: () => c.needIndent
        }
    }

    function aD(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), Vs(e, t.key), t.modifier ? (e.push(", "), Vs(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function oD(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (Vs(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function cD(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let o = 0; o < s && (Vs(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function lD(e, t) {
        t.body ? Vs(e, t.body) : e.push("null")
    }

    function Vs(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                lD(e, t);
                break;
            case 1:
                cD(e, t);
                break;
            case 2:
                oD(e, t);
                break;
            case 6:
                aD(e, t);
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
    const uD = (e, t = {}) => {
        const r = ve(t.mode) ? t.mode : "normal",
            n = ve(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            c = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = sD(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: c
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(c), u.length > 0 && (f.push(`const { ${u.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), Vs(f, e), f.deindent(c), f.push("}");
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

    function fD(e, t = {}) {
        const r = nr({}, t),
            s = rD(r).parse(e);
        return iD(s, r), uD(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const dD = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const _i = [];
    _i[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    _i[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    _i[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    _i[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    _i[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    _i[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    _i[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const hD = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function pD(e) {
        return hD.test(e)
    }

    function gD(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function mD(e) {
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

    function vD(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : pD(t) ? gD(t) : "*" + t
    }

    function _D(e) {
        const t = [];
        let r = -1,
            n = 0,
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
            if (s > 0) s--, n = 4, b[0]();
            else {
                if (s = 0, c === void 0 || (c = vD(c), c === !1)) return !1;
                b[1]()
            }
        };

        function R() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, u = "\\" + P, b[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && R())) {
                if (f = mD(o), y = _i[n], h = y[f] || y.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = b[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const r_ = new Map;

    function yD(e, t) {
        return yt(e) ? e[t] : null
    }

    function ED(e, t) {
        if (!yt(e)) return null;
        let r = r_.get(t);
        if (r || (r = _D(t), r && r_.set(t, r)), !r) return null;
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
    const bD = e => e,
        TD = e => "",
        SD = "text",
        OD = e => e.length === 0 ? "" : e.join(""),
        AD = HP;

    function n_(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function ID(e) {
        const t = Gt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Gt(e.named.count) || Gt(e.named.n)) ? Gt(e.named.count) ? e.named.count : Gt(e.named.n) ? e.named.n : t : t
    }

    function CD(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function RD(e = {}) {
        const t = e.locale,
            r = ID(e),
            n = yt(e.pluralRules) && ve(t) && Dt(e.pluralRules[t]) ? e.pluralRules[t] : n_,
            s = yt(e.pluralRules) && ve(t) && Dt(e.pluralRules[t]) ? n_ : void 0,
            o = I => I[n(r, I.length, s)],
            c = e.list || [],
            u = I => c[I],
            f = e.named || {};
        Gt(e.pluralIndex) && CD(r, f);
        const h = I => f[I];

        function g(I) {
            const H = Dt(e.messages) ? e.messages(I) : yt(e.messages) ? e.messages[I] : !1;
            return H || (e.parent ? e.parent.message(I) : TD)
        }
        const y = I => e.modifiers ? e.modifiers[I] : bD,
            b = xe(e.processor) && Dt(e.processor.normalize) ? e.processor.normalize : OD,
            R = xe(e.processor) && Dt(e.processor.interpolate) ? e.processor.interpolate : AD,
            P = xe(e.processor) && ve(e.processor.type) ? e.processor.type : SD,
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
                    return G === "vnode" && _t(ae) && z && (ae = ae[0]), z ? y(z)(ae, G) : ae
                },
                message: g,
                type: P,
                interpolate: R,
                normalize: b
            };
        return U
    }
    let wD = null;
    dD.FunctionTranslate;

    function ND(e) {
        return t => wD
    }
    const $D = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function LD(e, t, r) {
        return [...new Set([r, ..._t(t) ? t : yt(t) ? Object.keys(t) : ve(t) ? [t] : [r]])]
    }

    function Zb(e, t, r) {
        const n = ve(r) ? r : ho,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let c = [r];
            for (; _t(c);) c = i_(o, c, t);
            const u = _t(t) || !xe(t) ? t : t.default ? t.default : null;
            c = ve(u) ? [u] : u, _t(c) && i_(o, c, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function i_(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Je(n); s++) {
            const o = t[s];
            ve(o) && (n = PD(e, t[s], r))
        }
        return n
    }

    function PD(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = DD(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function DD(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (_t(r) || xe(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const kD = "9.2.2",
        Al = -1,
        ho = "en-US",
        s_ = "",
        a_ = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function MD() {
        return {
            upper: (e, t) => t === "text" && ve(e) ? e.toUpperCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ve(e) ? e.toLowerCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ve(e) ? a_(e) : t === "vnode" && yt(e) && "__v_isVNode" in e ? a_(e.children) : e
        }
    }
    let Qb;

    function xD(e) {
        Qb = e
    }
    let eT;

    function UD(e) {
        eT = e
    }
    let tT;

    function FD(e) {
        tT = e
    }
    let o_ = 0;

    function BD(e = {}) {
        const t = ve(e.version) ? e.version : kD,
            r = ve(e.locale) ? e.locale : ho,
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
            u = nr({}, e.modifiers || {}, MD()),
            f = e.pluralRules || {},
            h = Dt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            y = Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            R = !!e.unresolving,
            P = Dt(e.postTranslation) ? e.postTranslation : null,
            x = xe(e.processor) ? e.processor : null,
            U = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            I = !!e.escapeParameter,
            H = Dt(e.messageCompiler) ? e.messageCompiler : Qb,
            Y = Dt(e.messageResolver) ? e.messageResolver : eT || yD,
            W = Dt(e.localeFallbacker) ? e.localeFallbacker : tT || LD,
            G = yt(e.fallbackContext) ? e.fallbackContext : void 0,
            z = Dt(e.onWarn) ? e.onWarn : WP,
            ae = e,
            ce = yt(ae.__datetimeFormatters) ? ae.__datetimeFormatters : new Map,
            ue = yt(ae.__numberFormatters) ? ae.__numberFormatters : new Map,
            Ce = yt(ae.__meta) ? ae.__meta : {};
        o_++;
        const Ie = {
            version: t,
            cid: o_,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: g,
            fallbackWarn: y,
            fallbackFormat: b,
            unresolving: R,
            postTranslation: P,
            processor: x,
            warnHtmlMessage: U,
            escapeParameter: I,
            messageCompiler: H,
            messageResolver: Y,
            localeFallbacker: W,
            fallbackContext: G,
            onWarn: z,
            __meta: Ce
        };
        return Ie.datetimeFormats = o, Ie.numberFormats = c, Ie.__datetimeFormatters = ce, Ie.__numberFormatters = ue, Ie
    }

    function kh(e, t, r, n, s) {
        const {
            missing: o,
            onWarn: c
        } = e;
        if (o !== null) {
            const u = o(e, r, t, s);
            return ve(u) ? u : t
        } else return t
    }

    function Ra(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const GD = e => e;
    let c_ = Object.create(null);

    function WD(e, t = {}) {
        {
            const n = (t.onCacheKey || GD)(e),
                s = c_[n];
            if (s) return s;
            let o = !1;
            const c = t.onError || KP;
            t.onError = h => {
                o = !0, c(h)
            };
            const {
                code: u
            } = fD(e, t), f = new Function(`return ${u}`)();
            return o ? f : c_[n] = f
        }
    }
    let rT = rt.__EXTEND_POINT__;
    const vf = () => ++rT,
        Ns = {
            INVALID_ARGUMENT: rT,
            INVALID_DATE_ARGUMENT: vf(),
            INVALID_ISO_DATE_ARGUMENT: vf(),
            __EXTEND_POINT__: vf()
        };

    function $s(e) {
        return Ol(e, null, void 0)
    }
    const l_ = () => "",
        Qi = e => Dt(e);

    function u_(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: c,
            messages: u
        } = e, [f, h] = Td(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, y = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, b = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, R = !!h.resolvedMessage, P = ve(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", x = r || P !== "", U = ve(h.locale) ? h.locale : e.locale;
        b && jD(h);
        let [I, H, Y] = R ? [f, U, u[U] || {}] : nT(e, f, U, c, y, g), W = I, G = f;
        if (!R && !(ve(W) || Qi(W)) && x && (W = P, G = W), !R && (!(ve(W) || Qi(W)) || !ve(H))) return s ? Al : f;
        let z = !1;
        const ae = () => {
                z = !0
            },
            ce = Qi(W) ? W : iT(e, f, H, W, G, ae);
        if (z) return W;
        const ue = VD(e, H, Y, h),
            Ce = RD(ue),
            Ie = HD(e, ce, Ce);
        return n ? n(Ie, f) : Ie
    }

    function jD(e) {
        _t(e.list) ? e.list = e.list.map(t => ve(t) ? Qv(t) : t) : yt(e.named) && Object.keys(e.named).forEach(t => {
            ve(e.named[t]) && (e.named[t] = Qv(e.named[t]))
        })
    }

    function nT(e, t, r, n, s, o) {
        const {
            messages: c,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, n, r);
        let y = {},
            b, R = null;
        const P = "translate";
        for (let x = 0; x < g.length && (b = g[x], y = c[b] || {}, (R = f(y, t)) === null && (R = y[t]), !(ve(R) || Dt(R))); x++) {
            const U = kh(e, t, b, o, P);
            U !== t && (R = U)
        }
        return [R, b, y]
    }

    function iT(e, t, r, n, s, o) {
        const {
            messageCompiler: c,
            warnHtmlMessage: u
        } = e;
        if (Qi(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (c == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = c(n, KD(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function HD(e, t, r) {
        return t(r)
    }

    function Td(...e) {
        const [t, r, n] = e, s = {};
        if (!ve(t) && !Gt(t) && !Qi(t)) throw $s(Ns.INVALID_ARGUMENT);
        const o = Gt(t) ? String(t) : (Qi(t), t);
        return Gt(r) ? s.plural = r : ve(r) ? s.default = r : xe(r) && !Sl(r) ? s.named = r : _t(r) && (s.list = r), Gt(n) ? s.plural = n : ve(n) ? s.default = n : xe(n) && nr(s, n), [o, s]
    }

    function KD(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: c => {
                throw o && o(c), c
            },
            onCacheKey: c => FP(t, r, c)
        }
    }

    function VD(e, t, r, n) {
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
            messages: R => {
                let P = c(r, R);
                if (P == null && g) {
                    const [, , x] = nT(g, R, t, u, f, h);
                    P = c(x, R)
                }
                if (ve(P)) {
                    let x = !1;
                    const I = iT(e, R, t, P, R, () => {
                        x = !0
                    });
                    return x ? l_ : I
                } else return Qi(P) ? P : l_
            }
        };
        return e.processor && (b.processor = e.processor), n.list && (b.list = n.list), n.named && (b.named = n.named), Gt(n.plural) && (b.pluralIndex = n.plural), b
    }

    function f_(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, y] = Sd(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const R = !!g.part,
            P = ve(g.locale) ? g.locale : e.locale,
            x = c(e, s, P);
        if (!ve(f) || f === "") return new Intl.DateTimeFormat(P, y).format(h);
        let U = {},
            I, H = null;
        const Y = "datetime format";
        for (let z = 0; z < x.length && (I = x[z], U = r[I] || {}, H = U[f], !xe(H)); z++) kh(e, f, I, b, Y);
        if (!xe(H) || !ve(I)) return n ? Al : f;
        let W = `${I}__${f}`;
        Sl(y) || (W = `${W}__${JSON.stringify(y)}`);
        let G = u.get(W);
        return G || (G = new Intl.DateTimeFormat(I, nr({}, H, y)), u.set(W, G)), R ? G.formatToParts(h) : G.format(h)
    }
    const sT = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function Sd(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {},
            u;
        if (ve(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw $s(Ns.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw $s(Ns.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (GP(t)) {
            if (isNaN(t.getTime())) throw $s(Ns.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Gt(t)) u = t;
        else throw $s(Ns.INVALID_ARGUMENT);
        return ve(r) ? o.key = r : xe(r) && Object.keys(r).forEach(f => {
            sT.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ve(n) ? o.locale = n : xe(n) && (c = n), xe(s) && (c = s), [o.key || "", u, o, c]
    }

    function d_(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function h_(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, y] = Od(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const R = !!g.part,
            P = ve(g.locale) ? g.locale : e.locale,
            x = c(e, s, P);
        if (!ve(f) || f === "") return new Intl.NumberFormat(P, y).format(h);
        let U = {},
            I, H = null;
        const Y = "number format";
        for (let z = 0; z < x.length && (I = x[z], U = r[I] || {}, H = U[f], !xe(H)); z++) kh(e, f, I, b, Y);
        if (!xe(H) || !ve(I)) return n ? Al : f;
        let W = `${I}__${f}`;
        Sl(y) || (W = `${W}__${JSON.stringify(y)}`);
        let G = u.get(W);
        return G || (G = new Intl.NumberFormat(I, nr({}, H, y)), u.set(W, G)), R ? G.formatToParts(h) : G.format(h)
    }
    const aT = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function Od(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {};
        if (!Gt(t)) throw $s(Ns.INVALID_ARGUMENT);
        const u = t;
        return ve(r) ? o.key = r : xe(r) && Object.keys(r).forEach(f => {
            aT.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ve(n) ? o.locale = n : xe(n) && (c = n), xe(s) && (c = s), [o.key || "", u, o, c]
    }

    function p_(e, t, r) {
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
    const YD = "9.2.2";
    $D.__EXTEND_POINT__;
    let oT = rt.__EXTEND_POINT__;
    const Tr = () => ++oT,
        Ut = {
            UNEXPECTED_RETURN_TYPE: oT,
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

    function Kt(e, ...t) {
        return Ol(e, null, void 0)
    }
    const Ad = vi("__transrateVNode"),
        Id = vi("__datetimeParts"),
        Cd = vi("__numberParts"),
        cT = vi("__setPluralRules");
    vi("__intlifyMeta");
    const lT = vi("__injectWithOption");

    function Rd(e) {
        if (!yt(e)) return e;
        for (const t in e)
            if (!!Lh(e, t))
                if (!t.includes(".")) yt(e[t]) && Rd(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], yt(s[r[n]]) && Rd(s[r[n]])
                } return e
    }

    function Il(e, t) {
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
                    f ? (c[f] = c[f] || {}, Fa(h, c[f])) : Fa(h, c)
                } else ve(u) && Fa(JSON.parse(u), c)
            }), s == null && o)
            for (const u in c) Lh(c, u) && Rd(c[u]);
        return c
    }
    const Ec = e => !yt(e) || _t(e);

    function Fa(e, t) {
        if (Ec(e) || Ec(t)) throw Kt(Ut.INVALID_VALUE);
        for (const r in e) Lh(e, r) && (Ec(e[r]) || Ec(t[r]) ? t[r] = e[r] : Fa(e[r], t[r]))
    }

    function qD(e) {
        return e.type
    }

    function uT(e, t, r) {
        let n = yt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Il(e.locale.value, {
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

    function g_(e) {
        return st(El, null, e, 0)
    }
    let m_ = 0;

    function v_(e) {
        return (t, r, n, s) => e(r, n, pi() || void 0, s)
    }

    function Mh(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Je(e.inheritLocale) ? e.inheritLocale : !0;
        const o = an(r && s ? r.locale.value : ve(e.locale) ? e.locale : ho),
            c = an(r && s ? r.fallbackLocale.value : ve(e.fallbackLocale) || _t(e.fallbackLocale) || xe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = an(Il(o.value, e)),
            f = an(xe(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = an(xe(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Je(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : Je(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = r ? r.fallbackRoot : Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            R = !!e.fallbackFormat,
            P = Dt(e.missing) ? e.missing : null,
            x = Dt(e.missing) ? v_(e.missing) : null,
            U = Dt(e.postTranslation) ? e.postTranslation : null,
            I = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const Y = r ? r.modifiers : xe(e.modifiers) ? e.modifiers : {};
        let W = e.pluralRules || r && r.pluralRules,
            G;
        G = (() => {
            const w = {
                version: YD,
                locale: o.value,
                fallbackLocale: c.value,
                messages: u.value,
                modifiers: Y,
                pluralRules: W,
                missing: x === null ? void 0 : x,
                missingWarn: g,
                fallbackWarn: y,
                fallbackFormat: R,
                unresolving: !0,
                postTranslation: U === null ? void 0 : U,
                warnHtmlMessage: I,
                escapeParameter: H,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return w.datetimeFormats = f.value, w.numberFormats = h.value, w.__datetimeFormatters = xe(G) ? G.__datetimeFormatters : void 0, w.__numberFormatters = xe(G) ? G.__numberFormatters : void 0, BD(w)
        })(), Ra(G, o.value, c.value);

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
                    c.value = w, G.fallbackLocale = c.value, Ra(G, o.value, w)
                }
            }),
            Ce = qr(() => u.value),
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
            w !== null && (x = v_(w)), P = w, G.missing = x
        }
        const ye = (w, j, he, pe, Re, Pe) => {
            ae();
            let A;
            if (A = w(G), Gt(A) && A === Al) {
                const [T, $] = j();
                return r && b ? pe(r) : Re(T)
            } else {
                if (Pe(A)) return A;
                throw Kt(Ut.UNEXPECTED_RETURN_TYPE)
            }
        };

        function me(...w) {
            return ye(j => Reflect.apply(u_, null, [j, ...w]), () => Td(...w), "translate", j => Reflect.apply(j.t, j, [...w]), j => j, j => ve(j))
        }

        function Se(...w) {
            const [j, he, pe] = w;
            if (pe && !yt(pe)) throw Kt(Ut.INVALID_ARGUMENT);
            return me(j, he, nr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function ke(...w) {
            return ye(j => Reflect.apply(f_, null, [j, ...w]), () => Sd(...w), "datetime format", j => Reflect.apply(j.d, j, [...w]), () => s_, j => ve(j))
        }

        function Fe(...w) {
            return ye(j => Reflect.apply(h_, null, [j, ...w]), () => Od(...w), "number format", j => Reflect.apply(j.n, j, [...w]), () => s_, j => ve(j))
        }

        function et(w) {
            return w.map(j => ve(j) || Gt(j) || Je(j) ? g_(String(j)) : j)
        }
        const Ar = {
            normalize: et,
            interpolate: w => w,
            type: "vnode"
        };

        function ir(...w) {
            return ye(j => {
                let he;
                const pe = j;
                try {
                    pe.processor = Ar, he = Reflect.apply(u_, null, [pe, ...w])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => Td(...w), "translate", j => j[Ad](...w), j => [g_(j)], j => _t(j))
        }

        function vr(...w) {
            return ye(j => Reflect.apply(h_, null, [j, ...w]), () => Od(...w), "number format", j => j[Cd](...w), () => [], j => ve(j) || _t(j))
        }

        function at(...w) {
            return ye(j => Reflect.apply(f_, null, [j, ...w]), () => Sd(...w), "datetime format", j => j[Id](...w), () => [], j => ve(j) || _t(j))
        }

        function Tt(w) {
            W = w, G.pluralRules = W
        }

        function ot(w, j) {
            const he = ve(j) ? j : o.value,
                pe = xt(he);
            return G.messageResolver(pe, w) !== null
        }

        function Mt(w) {
            let j = null;
            const he = Zb(G, c.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Re = u.value[he[pe]] || {},
                    Pe = G.messageResolver(Re, w);
                if (Pe != null) {
                    j = Pe;
                    break
                }
            }
            return j
        }

        function Yt(w) {
            const j = Mt(w);
            return j != null ? j : r ? r.tm(w) || {} : {}
        }

        function xt(w) {
            return u.value[w] || {}
        }

        function m(w, j) {
            u.value[w] = j, G.messages = u.value
        }

        function p(w, j) {
            u.value[w] = u.value[w] || {}, Fa(j, u.value[w]), G.messages = u.value
        }

        function O(w) {
            return f.value[w] || {}
        }

        function M(w, j) {
            f.value[w] = j, G.datetimeFormats = f.value, d_(G, w, j)
        }

        function B(w, j) {
            f.value[w] = nr(f.value[w] || {}, j), G.datetimeFormats = f.value, d_(G, w, j)
        }

        function V(w) {
            return h.value[w] || {}
        }

        function le(w, j) {
            h.value[w] = j, G.numberFormats = h.value, p_(G, w, j)
        }

        function ie(w, j) {
            h.value[w] = nr(h.value[w] || {}, j), G.numberFormats = h.value, p_(G, w, j)
        }
        m_++, r && Ed && (Ji(r.locale, w => {
            s && (o.value = w, G.locale = w, Ra(G, o.value, c.value))
        }), Ji(r.fallbackLocale, w => {
            s && (c.value = w, G.fallbackLocale = w, Ra(G, o.value, c.value))
        }));
        const ee = {
            id: m_,
            locale: ce,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(w) {
                s = w, w && r && (o.value = r.locale.value, c.value = r.fallbackLocale.value, Ra(G, o.value, c.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ce,
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
                return y
            },
            set fallbackWarn(w) {
                y = w, G.fallbackWarn = y
            },
            get fallbackRoot() {
                return b
            },
            set fallbackRoot(w) {
                b = w
            },
            get fallbackFormat() {
                return R
            },
            set fallbackFormat(w) {
                R = w, G.fallbackFormat = R
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
            [cT]: Tt
        };
        return ee.datetimeFormats = Ie, ee.numberFormats = fe, ee.rt = Se, ee.te = ot, ee.tm = Yt, ee.d = ke, ee.n = Fe, ee.getDateTimeFormat = O, ee.setDateTimeFormat = M, ee.mergeDateTimeFormat = B, ee.getNumberFormat = V, ee.setNumberFormat = le, ee.mergeNumberFormat = ie, ee[lT] = e.__injectWithOption, ee[Ad] = ir, ee[Id] = at, ee[Cd] = vr, ee
    }

    function zD(e) {
        const t = ve(e.locale) ? e.locale : ho,
            r = ve(e.fallbackLocale) || _t(e.fallbackLocale) || xe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = Dt(e.missing) ? e.missing : void 0,
            s = Je(e.silentTranslationWarn) || gi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = Je(e.silentFallbackWarn) || gi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            c = Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = xe(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = Dt(e.postTranslation) ? e.postTranslation : void 0,
            y = ve(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            b = !!e.escapeParameterHtml,
            R = Je(e.sync) ? e.sync : !0;
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
            warnHtmlMessage: y,
            escapeParameter: b,
            messageResolver: e.messageResolver,
            inheritLocale: R,
            __i18n: x,
            __root: U,
            __injectWithOption: I
        }
    }

    function wd(e = {}, t) {
        {
            const r = Mh(zD(e)),
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
                        const y = o;
                        return ve(c) ? f.locale = c : _t(c) ? h = c : xe(c) && (g = c), _t(u) ? h = u : xe(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
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
                        const y = o;
                        return ve(c) ? f.locale = c : Gt(c) ? f.plural = c : _t(c) ? h = c : xe(c) && (g = c), ve(u) ? f.locale = u : _t(u) ? h = u : xe(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
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
    const xh = {
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

    function XD({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ..._t(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function fT(e) {
        return Ot
    }
    const __ = {
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
        }, xh),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Uh({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(y => y !== "_"),
                    c = {};
                e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = ve(e.plural) ? +e.plural : e.plural);
                const u = XD(t, o),
                    f = s[Ad](e.keypath, u, c),
                    h = nr({}, n),
                    g = ve(e.tag) || yt(e.tag) ? e.tag : fT();
                return Nh(g, h, f)
            }
        }
    };

    function JD(e) {
        return _t(e) && !ve(e[0])
    }

    function dT(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const c = {
                part: !0
            };
            let u = {};
            e.locale && (c.locale = e.locale), ve(e.format) ? c.key = e.format : yt(e.format) && (ve(e.format.key) && (c.key = e.format.key), u = Object.keys(e.format).reduce((b, R) => r.includes(R) ? nr({}, b, {
                [R]: e.format[R]
            }) : b, {}));
            const f = n(e.value, c, u);
            let h = [c.key];
            _t(f) ? h = f.map((b, R) => {
                const P = s[b.type],
                    x = P ? P({
                        [b.type]: b.value,
                        index: R,
                        parts: f
                    }) : [b.value];
                return JD(x) && (x[0].key = `${b.type}-${R}`), x
            }) : ve(f) && (h = [f]);
            const g = nr({}, o),
                y = ve(e.tag) || yt(e.tag) ? e.tag : fT();
            return Nh(y, g, h)
        }
    }
    const y_ = {
            name: "i18n-n",
            props: nr({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, xh),
            setup(e, t) {
                const r = e.i18n || Uh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return dT(e, t, aT, (...n) => r[Cd](...n))
            }
        },
        E_ = {
            name: "i18n-d",
            props: nr({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, xh),
            setup(e, t) {
                const r = e.i18n || Uh({
                    useScope: "parent",
                    __useComponent: !0
                });
                return dT(e, t, sT, (...n) => r[Id](...n))
            }
        };

    function ZD(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function QD(e) {
        const t = c => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = c;
            if (!u || !u.$) throw Kt(Ut.UNEXPECTED_ERROR);
            const g = ZD(e, u.$),
                y = b_(h);
            return [Reflect.apply(g.t, g, [...T_(y)]), g]
        };
        return {
            created: (c, u) => {
                const [f, h] = t(u);
                Ed && e.global === h && (c.__i18nWatcher = Ji(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), c.__composer = h, c.textContent = f
            },
            unmounted: c => {
                Ed && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
            },
            beforeUpdate: (c, {
                value: u
            }) => {
                if (c.__composer) {
                    const f = c.__composer,
                        h = b_(u);
                    c.textContent = Reflect.apply(f.t, f, [...T_(h)])
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

    function b_(e) {
        if (ve(e)) return {
            path: e
        };
        if (xe(e)) {
            if (!("path" in e)) throw Kt(Ut.REQUIRED_VALUE, "path");
            return e
        } else throw Kt(Ut.INVALID_VALUE)
    }

    function T_(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, c = {}, u = n || {};
        return ve(r) && (c.locale = r), Gt(s) && (c.plural = s), Gt(o) && (c.plural = o), [t, u, c]
    }

    function ek(e, t, ...r) {
        const n = xe(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : __.name, __), e.component(y_.name, y_), e.component(E_.name, E_)), e.directive("t", QD(t))
    }

    function tk(e, t, r) {
        return {
            beforeCreate() {
                const n = pi();
                if (!n) throw Kt(Ut.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = S_(e, o) : (o.__injectWithOption = !0, this.$i18n = wd(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = S_(e, s) : this.$i18n = wd({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && uT(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, c) => this.$i18n.te(o, c), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = pi();
                if (!n) throw Kt(Ut.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function S_(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[cT](t.pluralizationRules || e.pluralizationRules);
        const r = Il(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const rk = vi("global-vue-i18n");

    function nk(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [c, u] = ik(e, r),
            f = vi("");

        function h(b) {
            return o.get(b) || null
        }

        function g(b, R) {
            o.set(b, R)
        }

        function y(b) {
            o.delete(b)
        } {
            const b = {
                get mode() {
                    return r ? "legacy" : "composition"
                },
                get allowComposition() {
                    return s
                },
                async install(R, ...P) {
                    R.__VUE_I18N_SYMBOL__ = f, R.provide(R.__VUE_I18N_SYMBOL__, b), !r && n && hk(R, b.global), ek(R, b, ...P), r && R.mixin(tk(u, u.__composer, b));
                    const x = R.unmount;
                    R.unmount = () => {
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
                __deleteInstance: y
            };
            return b
        }
    }

    function Uh(e = {}) {
        const t = pi();
        if (t == null) throw Kt(Ut.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Kt(Ut.NOT_INSLALLED);
        const r = sk(t),
            n = ok(r),
            s = qD(t),
            o = ak(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Kt(Ut.NOT_AVAILABLE_IN_LEGACY_MODE);
            return uk(t, o, n, e)
        }
        if (o === "global") return uT(n, e, s), n;
        if (o === "parent") {
            let f = ck(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const c = r;
        let u = c.__getInstance(t);
        if (u == null) {
            const f = nr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Mh(f), lk(c, t), c.__setInstance(t, u)
        }
        return u
    }

    function ik(e, t, r) {
        const n = _$(); {
            const s = t ? n.run(() => wd(e)) : n.run(() => Mh(e));
            if (s == null) throw Kt(Ut.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function sk(e) {
        {
            const t = ui(e.isCE ? rk : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Kt(e.isCE ? Ut.NOT_INSLALLED_WITH_PROVIDE : Ut.UNEXPECTED_ERROR);
            return t
        }
    }

    function ak(e, t) {
        return Sl(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function ok(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function ck(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const c = e;
            if (e.mode === "composition") n = c.__getInstance(o);
            else {
                const u = c.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[lT] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function lk(e, t, r) {
        Sh(() => {}, t), Oh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function uk(e, t, r, n = {}) {
        const s = t === "local",
            o = V$(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Kt(Ut.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const c = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = an(s && c ? r.locale.value : ve(n.locale) ? n.locale : ho),
            f = an(s && c ? r.fallbackLocale.value : ve(n.fallbackLocale) || _t(n.fallbackLocale) || xe(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = an(Il(u.value, n)),
            g = an(xe(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            y = an(xe(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            b = s ? r.missingWarn : Je(n.missingWarn) || gi(n.missingWarn) ? n.missingWarn : !0,
            R = s ? r.fallbackWarn : Je(n.fallbackWarn) || gi(n.fallbackWarn) ? n.fallbackWarn : !0,
            P = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            x = !!n.fallbackFormat,
            U = Dt(n.missing) ? n.missing : null,
            I = Dt(n.postTranslation) ? n.postTranslation : null,
            H = s ? r.warnHtmlMessage : Je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            Y = !!n.escapeParameter,
            W = s ? r.modifiers : xe(n.modifiers) ? n.modifiers : {},
            G = n.pluralRules || s && r.pluralRules;

        function z() {
            return [u.value, f.value, h.value, g.value, y.value]
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
            Ce = qr(() => g.value),
            Ie = qr(() => y.value);

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

        function ye(...p) {
            return o.value ? de(() => Reflect.apply(o.value.t, null, [...p])) : de(() => "")
        }

        function me(...p) {
            return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
        }

        function Se(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function ke(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function Fe(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function et(p, O) {
            return o.value ? o.value.te(p, O) : !1
        }

        function wt(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function Ar(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function ir(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function vr(p) {
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

        function Mt(p, O) {
            o.value && (o.value.setNumberFormat(p, O), y.value[p] = O)
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
            datetimeFormats: Ce,
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
                return o.value ? o.value.fallbackWarn : R
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
            t: ye,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Ae,
            getMissingHandler: F,
            setMissingHandler: re,
            rt: me,
            d: Se,
            n: ke,
            tm: Fe,
            te: et,
            getLocaleMessage: wt,
            setLocaleMessage: Ar,
            mergeLocaleMessage: ir,
            getDateTimeFormat: vr,
            setDateTimeFormat: at,
            mergeDateTimeFormat: Tt,
            getNumberFormat: ot,
            setNumberFormat: Mt,
            mergeNumberFormat: Yt
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(O => {
                p.mergeLocaleMessage(O, h.value[O])
            }), Object.keys(g.value).forEach(O => {
                p.mergeDateTimeFormat(O, g.value[O])
            }), Object.keys(y.value).forEach(O => {
                p.mergeNumberFormat(O, y.value[O])
            }), p.escapeParameter = Y, p.fallbackFormat = x, p.fallbackRoot = P, p.fallbackWarn = R, p.missingWarn = b, p.warnHtmlMessage = H
        }
        return Ib(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Kt(Ut.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, y.value = p.numberFormats.value) : s && m(p)
        }), xt
    }
    const fk = ["locale", "fallbackLocale", "availableLocales"],
        dk = ["t", "rt", "d", "n", "tm"];

    function hk(e, t) {
        const r = Object.create(null);
        fk.forEach(n => {
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
        }), e.config.globalProperties.$i18n = r, dk.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Kt(Ut.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    xD(WD);
    UD(ED);
    FD(Zb);
    class ns {
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

    function pk(e) {
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

    function gk() {
        this.__data__ = [], this.size = 0
    }
    var mk = gk;

    function vk(e, t) {
        return e === t || e !== e && t !== t
    }
    var Cl = vk,
        _k = Cl;

    function yk(e, t) {
        for (var r = e.length; r--;)
            if (_k(e[r][0], t)) return r;
        return -1
    }
    var Rl = yk,
        Ek = Rl,
        bk = Array.prototype,
        Tk = bk.splice;

    function Sk(e) {
        var t = this.__data__,
            r = Ek(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : Tk.call(t, r, 1), --this.size, !0
    }
    var Ok = Sk,
        Ak = Rl;

    function Ik(e) {
        var t = this.__data__,
            r = Ak(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var Ck = Ik,
        Rk = Rl;

    function wk(e) {
        return Rk(this.__data__, e) > -1
    }
    var Nk = wk,
        $k = Rl;

    function Lk(e, t) {
        var r = this.__data__,
            n = $k(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var Pk = Lk,
        Dk = mk,
        kk = Ok,
        Mk = Ck,
        xk = Nk,
        Uk = Pk;

    function ra(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ra.prototype.clear = Dk;
    ra.prototype.delete = kk;
    ra.prototype.get = Mk;
    ra.prototype.has = xk;
    ra.prototype.set = Uk;
    var wl = ra,
        Fk = wl;

    function Bk() {
        this.__data__ = new Fk, this.size = 0
    }
    var Gk = Bk;

    function Wk(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var jk = Wk;

    function Hk(e) {
        return this.__data__.get(e)
    }
    var Kk = Hk;

    function Vk(e) {
        return this.__data__.has(e)
    }
    var Yk = Vk,
        qk = typeof kt == "object" && kt && kt.Object === Object && kt,
        hT = qk,
        zk = hT,
        Xk = typeof self == "object" && self && self.Object === Object && self,
        Jk = zk || Xk || Function("return this")(),
        fn = Jk,
        Zk = fn,
        Qk = Zk.Symbol,
        Nl = Qk,
        O_ = Nl,
        pT = Object.prototype,
        eM = pT.hasOwnProperty,
        tM = pT.toString,
        wa = O_ ? O_.toStringTag : void 0;

    function rM(e) {
        var t = eM.call(e, wa),
            r = e[wa];
        try {
            e[wa] = void 0;
            var n = !0
        } catch {}
        var s = tM.call(e);
        return n && (t ? e[wa] = r : delete e[wa]), s
    }
    var nM = rM,
        iM = Object.prototype,
        sM = iM.toString;

    function aM(e) {
        return sM.call(e)
    }
    var oM = aM,
        A_ = Nl,
        cM = nM,
        lM = oM,
        uM = "[object Null]",
        fM = "[object Undefined]",
        I_ = A_ ? A_.toStringTag : void 0;

    function dM(e) {
        return e == null ? e === void 0 ? fM : uM : I_ && I_ in Object(e) ? cM(e) : lM(e)
    }
    var na = dM;

    function hM(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var dn = hM,
        pM = na,
        gM = dn,
        mM = "[object AsyncFunction]",
        vM = "[object Function]",
        _M = "[object GeneratorFunction]",
        yM = "[object Proxy]";

    function EM(e) {
        if (!gM(e)) return !1;
        var t = pM(e);
        return t == vM || t == _M || t == mM || t == yM
    }
    var Fh = EM,
        bM = fn,
        TM = bM["__core-js_shared__"],
        SM = TM,
        _f = SM,
        C_ = function() {
            var e = /[^.]+$/.exec(_f && _f.keys && _f.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function OM(e) {
        return !!C_ && C_ in e
    }
    var AM = OM,
        IM = Function.prototype,
        CM = IM.toString;

    function RM(e) {
        if (e != null) {
            try {
                return CM.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var gT = RM,
        wM = Fh,
        NM = AM,
        $M = dn,
        LM = gT,
        PM = /[\\^$.*+?()[\]{}|]/g,
        DM = /^\[object .+?Constructor\]$/,
        kM = Function.prototype,
        MM = Object.prototype,
        xM = kM.toString,
        UM = MM.hasOwnProperty,
        FM = RegExp("^" + xM.call(UM).replace(PM, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function BM(e) {
        if (!$M(e) || NM(e)) return !1;
        var t = wM(e) ? FM : DM;
        return t.test(LM(e))
    }
    var GM = BM;

    function WM(e, t) {
        return e == null ? void 0 : e[t]
    }
    var jM = WM,
        HM = GM,
        KM = jM;

    function VM(e, t) {
        var r = KM(e, t);
        return HM(r) ? r : void 0
    }
    var ss = VM,
        YM = ss,
        qM = fn,
        zM = YM(qM, "Map"),
        Bh = zM,
        XM = ss,
        JM = XM(Object, "create"),
        $l = JM,
        R_ = $l;

    function ZM() {
        this.__data__ = R_ ? R_(null) : {}, this.size = 0
    }
    var QM = ZM;

    function ex(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var tx = ex,
        rx = $l,
        nx = "__lodash_hash_undefined__",
        ix = Object.prototype,
        sx = ix.hasOwnProperty;

    function ax(e) {
        var t = this.__data__;
        if (rx) {
            var r = t[e];
            return r === nx ? void 0 : r
        }
        return sx.call(t, e) ? t[e] : void 0
    }
    var ox = ax,
        cx = $l,
        lx = Object.prototype,
        ux = lx.hasOwnProperty;

    function fx(e) {
        var t = this.__data__;
        return cx ? t[e] !== void 0 : ux.call(t, e)
    }
    var dx = fx,
        hx = $l,
        px = "__lodash_hash_undefined__";

    function gx(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = hx && t === void 0 ? px : t, this
    }
    var mx = gx,
        vx = QM,
        _x = tx,
        yx = ox,
        Ex = dx,
        bx = mx;

    function ia(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ia.prototype.clear = vx;
    ia.prototype.delete = _x;
    ia.prototype.get = yx;
    ia.prototype.has = Ex;
    ia.prototype.set = bx;
    var Tx = ia,
        w_ = Tx,
        Sx = wl,
        Ox = Bh;

    function Ax() {
        this.size = 0, this.__data__ = {
            hash: new w_,
            map: new(Ox || Sx),
            string: new w_
        }
    }
    var Ix = Ax;

    function Cx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var Rx = Cx,
        wx = Rx;

    function Nx(e, t) {
        var r = e.__data__;
        return wx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Ll = Nx,
        $x = Ll;

    function Lx(e) {
        var t = $x(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var Px = Lx,
        Dx = Ll;

    function kx(e) {
        return Dx(this, e).get(e)
    }
    var Mx = kx,
        xx = Ll;

    function Ux(e) {
        return xx(this, e).has(e)
    }
    var Fx = Ux,
        Bx = Ll;

    function Gx(e, t) {
        var r = Bx(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var Wx = Gx,
        jx = Ix,
        Hx = Px,
        Kx = Mx,
        Vx = Fx,
        Yx = Wx;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = jx;
    sa.prototype.delete = Hx;
    sa.prototype.get = Kx;
    sa.prototype.has = Vx;
    sa.prototype.set = Yx;
    var mT = sa,
        qx = wl,
        zx = Bh,
        Xx = mT,
        Jx = 200;

    function Zx(e, t) {
        var r = this.__data__;
        if (r instanceof qx) {
            var n = r.__data__;
            if (!zx || n.length < Jx - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Xx(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var Qx = Zx,
        e2 = wl,
        t2 = Gk,
        r2 = jk,
        n2 = Kk,
        i2 = Yk,
        s2 = Qx;

    function aa(e) {
        var t = this.__data__ = new e2(e);
        this.size = t.size
    }
    aa.prototype.clear = t2;
    aa.prototype.delete = r2;
    aa.prototype.get = n2;
    aa.prototype.has = i2;
    aa.prototype.set = s2;
    var vT = aa,
        a2 = ss,
        o2 = function() {
            try {
                var e = a2(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        _T = o2,
        N_ = _T;

    function c2(e, t, r) {
        t == "__proto__" && N_ ? N_(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Gh = c2,
        l2 = Gh,
        u2 = Cl;

    function f2(e, t, r) {
        (r !== void 0 && !u2(e[t], r) || r === void 0 && !(t in e)) && l2(e, t, r)
    }
    var yT = f2;

    function d2(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), c = n(t), u = c.length; u--;) {
                var f = c[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var h2 = d2,
        p2 = h2,
        g2 = p2(),
        m2 = g2,
        Xc = {
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
            var y = h.length,
                b = u ? u(y) : new h.constructor(y);
            return h.copy(b), b
        }
        e.exports = f
    })(Xc, Xc.exports);
    var v2 = fn,
        _2 = v2.Uint8Array,
        y2 = _2,
        $_ = y2;

    function E2(e) {
        var t = new e.constructor(e.byteLength);
        return new $_(t).set(new $_(e)), t
    }
    var Wh = E2,
        b2 = Wh;

    function T2(e, t) {
        var r = t ? b2(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var ET = T2;

    function S2(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var bT = S2,
        O2 = dn,
        L_ = Object.create,
        A2 = function() {
            function e() {}
            return function(t) {
                if (!O2(t)) return {};
                if (L_) return L_(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        I2 = A2;

    function C2(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var TT = C2,
        R2 = TT,
        w2 = R2(Object.getPrototypeOf, Object),
        jh = w2,
        N2 = Object.prototype;

    function $2(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || N2;
        return e === r
    }
    var Hh = $2,
        L2 = I2,
        P2 = jh,
        D2 = Hh;

    function k2(e) {
        return typeof e.constructor == "function" && !D2(e) ? L2(P2(e)) : {}
    }
    var ST = k2;

    function M2(e) {
        return e != null && typeof e == "object"
    }
    var yi = M2,
        x2 = na,
        U2 = yi,
        F2 = "[object Arguments]";

    function B2(e) {
        return U2(e) && x2(e) == F2
    }
    var G2 = B2,
        P_ = G2,
        W2 = yi,
        OT = Object.prototype,
        j2 = OT.hasOwnProperty,
        H2 = OT.propertyIsEnumerable,
        K2 = P_(function() {
            return arguments
        }()) ? P_ : function(e) {
            return W2(e) && j2.call(e, "callee") && !H2.call(e, "callee")
        },
        AT = K2,
        V2 = Array.isArray,
        Ei = V2,
        Y2 = 9007199254740991;

    function q2(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y2
    }
    var IT = q2,
        z2 = Fh,
        X2 = IT;

    function J2(e) {
        return e != null && X2(e.length) && !z2(e)
    }
    var Pl = J2,
        Z2 = Pl,
        Q2 = yi;

    function eU(e) {
        return Q2(e) && Z2(e)
    }
    var tU = eU,
        ro = {
            exports: {}
        };

    function rU() {
        return !1
    }
    var nU = rU;
    (function(e, t) {
        var r = fn,
            n = nU,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            c = o && o.exports === s,
            u = c ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(ro, ro.exports);
    var iU = na,
        sU = jh,
        aU = yi,
        oU = "[object Object]",
        cU = Function.prototype,
        lU = Object.prototype,
        CT = cU.toString,
        uU = lU.hasOwnProperty,
        fU = CT.call(Object);

    function dU(e) {
        if (!aU(e) || iU(e) != oU) return !1;
        var t = sU(e);
        if (t === null) return !0;
        var r = uU.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && CT.call(r) == fU
    }
    var hU = dU,
        pU = na,
        gU = IT,
        mU = yi,
        vU = "[object Arguments]",
        _U = "[object Array]",
        yU = "[object Boolean]",
        EU = "[object Date]",
        bU = "[object Error]",
        TU = "[object Function]",
        SU = "[object Map]",
        OU = "[object Number]",
        AU = "[object Object]",
        IU = "[object RegExp]",
        CU = "[object Set]",
        RU = "[object String]",
        wU = "[object WeakMap]",
        NU = "[object ArrayBuffer]",
        $U = "[object DataView]",
        LU = "[object Float32Array]",
        PU = "[object Float64Array]",
        DU = "[object Int8Array]",
        kU = "[object Int16Array]",
        MU = "[object Int32Array]",
        xU = "[object Uint8Array]",
        UU = "[object Uint8ClampedArray]",
        FU = "[object Uint16Array]",
        BU = "[object Uint32Array]",
        bt = {};
    bt[LU] = bt[PU] = bt[DU] = bt[kU] = bt[MU] = bt[xU] = bt[UU] = bt[FU] = bt[BU] = !0;
    bt[vU] = bt[_U] = bt[NU] = bt[yU] = bt[$U] = bt[EU] = bt[bU] = bt[TU] = bt[SU] = bt[OU] = bt[AU] = bt[IU] = bt[CU] = bt[RU] = bt[wU] = !1;

    function GU(e) {
        return mU(e) && gU(e.length) && !!bt[pU(e)]
    }
    var WU = GU;

    function jU(e) {
        return function(t) {
            return e(t)
        }
    }
    var Kh = jU,
        no = {
            exports: {}
        };
    (function(e, t) {
        var r = hT,
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
    })(no, no.exports);
    var HU = WU,
        KU = Kh,
        D_ = no.exports,
        k_ = D_ && D_.isTypedArray,
        VU = k_ ? KU(k_) : HU,
        RT = VU;

    function YU(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var wT = YU,
        qU = Gh,
        zU = Cl,
        XU = Object.prototype,
        JU = XU.hasOwnProperty;

    function ZU(e, t, r) {
        var n = e[t];
        (!(JU.call(e, t) && zU(n, r)) || r === void 0 && !(t in e)) && qU(e, t, r)
    }
    var Vh = ZU,
        QU = Vh,
        eF = Gh;

    function tF(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, c = t.length; ++o < c;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? eF(r, u, f) : QU(r, u, f)
        }
        return r
    }
    var po = tF;

    function rF(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var nF = rF,
        iF = 9007199254740991,
        sF = /^(?:0|[1-9]\d*)$/;

    function aF(e, t) {
        var r = typeof e;
        return t = t == null ? iF : t, !!t && (r == "number" || r != "symbol" && sF.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Yh = aF,
        oF = nF,
        cF = AT,
        lF = Ei,
        uF = ro.exports,
        fF = Yh,
        dF = RT,
        hF = Object.prototype,
        pF = hF.hasOwnProperty;

    function gF(e, t) {
        var r = lF(e),
            n = !r && cF(e),
            s = !r && !n && uF(e),
            o = !r && !n && !s && dF(e),
            c = r || n || s || o,
            u = c ? oF(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || pF.call(e, h)) && !(c && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || fF(h, f))) && u.push(h);
        return u
    }
    var NT = gF;

    function mF(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var vF = mF,
        _F = dn,
        yF = Hh,
        EF = vF,
        bF = Object.prototype,
        TF = bF.hasOwnProperty;

    function SF(e) {
        if (!_F(e)) return EF(e);
        var t = yF(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !TF.call(e, n)) || r.push(n);
        return r
    }
    var OF = SF,
        AF = NT,
        IF = OF,
        CF = Pl;

    function RF(e) {
        return CF(e) ? AF(e, !0) : IF(e)
    }
    var go = RF,
        wF = po,
        NF = go;

    function $F(e) {
        return wF(e, NF(e))
    }
    var LF = $F,
        M_ = yT,
        PF = Xc.exports,
        DF = ET,
        kF = bT,
        MF = ST,
        x_ = AT,
        U_ = Ei,
        xF = tU,
        UF = ro.exports,
        FF = Fh,
        BF = dn,
        GF = hU,
        WF = RT,
        F_ = wT,
        jF = LF;

    function HF(e, t, r, n, s, o, c) {
        var u = F_(e, r),
            f = F_(t, r),
            h = c.get(f);
        if (h) {
            M_(e, r, h);
            return
        }
        var g = o ? o(u, f, r + "", e, t, c) : void 0,
            y = g === void 0;
        if (y) {
            var b = U_(f),
                R = !b && UF(f),
                P = !b && !R && WF(f);
            g = f, b || R || P ? U_(u) ? g = u : xF(u) ? g = kF(u) : R ? (y = !1, g = PF(f, !0)) : P ? (y = !1, g = DF(f, !0)) : g = [] : GF(f) || x_(f) ? (g = u, x_(u) ? g = jF(u) : (!BF(u) || FF(u)) && (g = MF(f))) : y = !1
        }
        y && (c.set(f, g), s(g, f, n, o, c), c.delete(f)), M_(e, r, g)
    }
    var KF = HF,
        VF = vT,
        YF = yT,
        qF = m2,
        zF = KF,
        XF = dn,
        JF = go,
        ZF = wT;

    function $T(e, t, r, n, s) {
        e !== t && qF(t, function(o, c) {
            if (s || (s = new VF), XF(o)) zF(e, t, c, r, $T, n, s);
            else {
                var u = n ? n(ZF(e, c), o, c + "", e, t, s) : void 0;
                u === void 0 && (u = o), YF(e, c, u)
            }
        }, JF)
    }
    var QF = $T;

    function eB(e) {
        return e
    }
    var LT = eB;

    function tB(e, t, r) {
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
    var rB = tB,
        nB = rB,
        B_ = Math.max;

    function iB(e, t, r) {
        return t = B_(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = B_(n.length - t, 0), c = Array(o); ++s < o;) c[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(c), nB(e, this, u)
            }
    }
    var sB = iB;

    function aB(e) {
        return function() {
            return e
        }
    }
    var oB = aB,
        cB = oB,
        G_ = _T,
        lB = LT,
        uB = G_ ? function(e, t) {
            return G_(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: cB(t),
                writable: !0
            })
        } : lB,
        fB = uB,
        dB = 800,
        hB = 16,
        pB = Date.now;

    function gB(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = pB(),
                s = hB - (n - r);
            if (r = n, s > 0) {
                if (++t >= dB) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var mB = gB,
        vB = fB,
        _B = mB,
        yB = _B(vB),
        EB = yB,
        bB = LT,
        TB = sB,
        SB = EB;

    function OB(e, t) {
        return SB(TB(e, t, bB), e + "")
    }
    var AB = OB,
        IB = Cl,
        CB = Pl,
        RB = Yh,
        wB = dn;

    function NB(e, t, r) {
        if (!wB(r)) return !1;
        var n = typeof t;
        return (n == "number" ? CB(r) && RB(t, r.length) : n == "string" && t in r) ? IB(r[t], e) : !1
    }
    var $B = NB,
        LB = AB,
        PB = $B;

    function DB(e) {
        return LB(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                c = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && PB(r[0], r[1], c) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var kB = DB,
        MB = QF,
        xB = kB,
        UB = xB(function(e, t, r) {
            MB(e, t, r)
        }),
        FB = UB;
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
            return FB(t[0], ...t)
        }
    }
    Ee(xs, "locale"), Ee(xs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const Bp = class {
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
    let Wt = Bp;
    Ee(Wt, "queryParams", new URLSearchParams(window.location.search)), Ee(Wt, "getQueryParam", t => Bp.queryParams.get(t)), Ee(Wt, "sleep", t => new Promise(r => {
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
    Ee(Ct, "defaultNamespace", "tv");
    class io {
        constructor() {
            Ee(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, r) {
            io.add(t, r), this.artifacts = this.list()
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
            io.setAsViewed(t), this.artifacts = this.list()
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
    var Nd = {
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

                function R(F) {
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
                    F = y(F), re = b(re);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + re : re
                }, P.prototype.delete = function(F) {
                    delete this.map[y(F)]
                }, P.prototype.get = function(F) {
                    return F = y(F), this.has(F) ? this.map[F] : null
                }, P.prototype.has = function(F) {
                    return this.map.hasOwnProperty(y(F))
                }, P.prototype.set = function(F, re) {
                    this.map[y(F)] = b(re)
                }, P.prototype.forEach = function(F, re) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(re, this.map[de], de, this)
                }, P.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push(de)
                    }), R(F)
                }, P.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(re) {
                        F.push(re)
                    }), R(F)
                }, P.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(re, de) {
                        F.push([de, re])
                    }), R(F)
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
                    for (var re = new Uint8Array(F), de = new Array(re.length), ye = 0; ye < re.length; ye++) de[ye] = String.fromCharCode(re[ye]);
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
                            var ye = de.split("="),
                                me = ye.shift().replace(/\+/g, " "),
                                Se = ye.join("=").replace(/\+/g, " ");
                            re.append(decodeURIComponent(me), decodeURIComponent(Se))
                        }
                    }), re
                }

                function Ce(F) {
                    var re = new P,
                        de = F.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(ye) {
                        var me = ye.split(":"),
                            Se = me.shift().trim();
                        if (Se) {
                            var ke = me.join(":").trim();
                            re.append(Se, ke)
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
                        var ye = Error(re);
                        this.stack = ye.stack
                    }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
                }

                function Ae(F, re) {
                    return new Promise(function(de, ye) {
                        var me = new ce(F, re);
                        if (me.signal && me.signal.aborted) return ye(new c.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function ke() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Fe = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: Ce(Se.getAllResponseHeaders() || "")
                            };
                            Fe.url = "responseURL" in Se ? Se.responseURL : Fe.headers.get("X-Request-URL");
                            var et = "response" in Se ? Se.response : Se.responseText;
                            de(new Ie(et, Fe))
                        }, Se.onerror = function() {
                            ye(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            ye(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            ye(new c.DOMException("Aborted", "AbortError"))
                        }, Se.open(me.method, me.url, !0), me.credentials === "include" ? Se.withCredentials = !0 : me.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), me.headers.forEach(function(Fe, et) {
                            Se.setRequestHeader(et, Fe)
                        }), me.signal && (me.signal.addEventListener("abort", ke), Se.onreadystatechange = function() {
                            Se.readyState === 4 && me.signal.removeEventListener("abort", ke)
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
    })(Nd, Nd.exports);
    var BB = function() {
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
        W_ = typeof Symbol < "u" && Symbol,
        GB = BB,
        WB = function() {
            return typeof W_ != "function" || typeof Symbol != "function" || typeof W_("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : GB()
        },
        jB = "Function.prototype.bind called on incompatible ",
        yf = Array.prototype.slice,
        HB = Object.prototype.toString,
        KB = "[object Function]",
        VB = function(t) {
            var r = this;
            if (typeof r != "function" || HB.call(r) !== KB) throw new TypeError(jB + r);
            for (var n = yf.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var g = r.apply(this, n.concat(yf.call(arguments)));
                        return Object(g) === g ? g : this
                    } else return r.apply(t, n.concat(yf.call(arguments)))
                }, c = Math.max(0, r.length - n.length), u = [], f = 0; f < c; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        YB = VB,
        qh = Function.prototype.bind || YB,
        qB = qh,
        zB = qB.call(Function.call, Object.prototype.hasOwnProperty),
        Ze, Ys = SyntaxError,
        PT = Function,
        Us = TypeError,
        Ef = function(e) {
            try {
                return PT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        es = Object.getOwnPropertyDescriptor;
    if (es) try {
        es({}, "")
    } catch {
        es = null
    }
    var bf = function() {
            throw new Us
        },
        XB = es ? function() {
            try {
                return arguments.callee, bf
            } catch {
                try {
                    return es(arguments, "callee").get
                } catch {
                    return bf
                }
            }
        }() : bf,
        Ts = WB(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Rs = {},
        JB = typeof Uint8Array > "u" ? Ze : ii(Uint8Array),
        Fs = {
            "%AggregateError%": typeof AggregateError > "u" ? Ze : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Ze : ArrayBuffer,
            "%ArrayIteratorPrototype%": Ts ? ii([][Symbol.iterator]()) : Ze,
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
            "%Function%": PT,
            "%GeneratorFunction%": Rs,
            "%Int8Array%": typeof Int8Array > "u" ? Ze : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Ze : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Ze : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Ts ? ii(ii([][Symbol.iterator]())) : Ze,
            "%JSON%": typeof JSON == "object" ? JSON : Ze,
            "%Map%": typeof Map > "u" ? Ze : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Ts ? Ze : ii(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !Ts ? Ze : ii(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Ze : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Ts ? ii("" [Symbol.iterator]()) : Ze,
            "%Symbol%": Ts ? Symbol : Ze,
            "%SyntaxError%": Ys,
            "%ThrowTypeError%": XB,
            "%TypedArray%": JB,
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
        ZB = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = Ef("async function () {}");
            else if (t === "%GeneratorFunction%") r = Ef("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = Ef("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = ii(s.prototype))
            }
            return Fs[t] = r, r
        },
        j_ = {
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
        mo = qh,
        Jc = zB,
        QB = mo.call(Function.call, Array.prototype.concat),
        eG = mo.call(Function.apply, Array.prototype.splice),
        H_ = mo.call(Function.call, String.prototype.replace),
        Zc = mo.call(Function.call, String.prototype.slice),
        tG = mo.call(Function.call, RegExp.prototype.exec),
        rG = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        nG = /\\(\\)?/g,
        iG = function(t) {
            var r = Zc(t, 0, 1),
                n = Zc(t, -1);
            if (r === "%" && n !== "%") throw new Ys("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Ys("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return H_(t, rG, function(o, c, u, f) {
                s[s.length] = u ? H_(f, nG, "$1") : c || o
            }), s
        },
        sG = function(t, r) {
            var n = t,
                s;
            if (Jc(j_, n) && (s = j_[n], n = "%" + s[0] + "%"), Jc(Fs, n)) {
                var o = Fs[n];
                if (o === Rs && (o = ZB(n)), typeof o > "u" && !r) throw new Us("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new Ys("intrinsic " + t + " does not exist!")
        },
        zh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Us("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Us('"allowMissing" argument must be a boolean');
            if (tG(/^%?[^%]*%?$/g, t) === null) throw new Ys("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = iG(t),
                s = n.length > 0 ? n[0] : "",
                o = sG("%" + s + "%", r),
                c = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], eG(n, QB([0, 1], h)));
            for (var g = 1, y = !0; g < n.length; g += 1) {
                var b = n[g],
                    R = Zc(b, 0, 1),
                    P = Zc(b, -1);
                if ((R === '"' || R === "'" || R === "`" || P === '"' || P === "'" || P === "`") && R !== P) throw new Ys("property names with quotes must have matching quotes");
                if ((b === "constructor" || !y) && (f = !0), s += "." + b, c = "%" + s + "%", Jc(Fs, c)) u = Fs[c];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!r) throw new Us("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (es && g + 1 >= n.length) {
                        var x = es(u, b);
                        y = !!x, y && "get" in x && !("originalValue" in x.get) ? u = x.get : u = u[b]
                    } else y = Jc(u, b), u = u[b];
                    y && !f && (Fs[c] = u)
                }
            }
            return u
        },
        DT = {
            exports: {}
        };
    (function(e) {
        var t = qh,
            r = zh,
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
            var b = o(t, s, arguments);
            if (c && u) {
                var R = c(b, "length");
                R.configurable && u(b, "length", {
                    value: 1 + f(0, y.length - (arguments.length - 1))
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
    })(DT);
    var kT = zh,
        MT = DT.exports,
        aG = MT(kT("String.prototype.indexOf")),
        oG = function(t, r) {
            var n = kT(t, !!r);
            return typeof n == "function" && aG(t, ".prototype.") > -1 ? MT(n) : n
        };
    const cG = {},
        lG = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: cG
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        uG = pk(lG);
    var Xh = typeof Map == "function" && Map.prototype,
        Tf = Object.getOwnPropertyDescriptor && Xh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Qc = Xh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        fG = Xh && Map.prototype.forEach,
        Jh = typeof Set == "function" && Set.prototype,
        Sf = Object.getOwnPropertyDescriptor && Jh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        el = Jh && Sf && typeof Sf.get == "function" ? Sf.get : null,
        dG = Jh && Set.prototype.forEach,
        hG = typeof WeakMap == "function" && WeakMap.prototype,
        Ba = hG ? WeakMap.prototype.has : null,
        pG = typeof WeakSet == "function" && WeakSet.prototype,
        Ga = pG ? WeakSet.prototype.has : null,
        gG = typeof WeakRef == "function" && WeakRef.prototype,
        K_ = gG ? WeakRef.prototype.deref : null,
        mG = Boolean.prototype.valueOf,
        vG = Object.prototype.toString,
        _G = Function.prototype.toString,
        yG = String.prototype.match,
        Zh = String.prototype.slice,
        oi = String.prototype.replace,
        EG = String.prototype.toUpperCase,
        V_ = String.prototype.toLowerCase,
        xT = RegExp.prototype.test,
        Y_ = Array.prototype.concat,
        Tn = Array.prototype.join,
        bG = Array.prototype.slice,
        q_ = Math.floor,
        $d = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Of = Object.getOwnPropertySymbols,
        Ld = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        qs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        lr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === qs ? "object" : "symbol") ? Symbol.toStringTag : null,
        UT = Object.prototype.propertyIsEnumerable,
        z_ = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function X_(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || xT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -q_(-e) : q_(e);
            if (n !== e) {
                var s = String(n),
                    o = Zh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var Pd = uG,
        J_ = Pd.custom,
        Z_ = BT(J_) ? J_ : null,
        TG = function e(t, r, n, s) {
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
            if (typeof t == "string") return WT(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? X_(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? X_(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return Dd(t) ? "[Array]" : "[Object]";
            var y = BG(o, n);
            if (typeof s > "u") s = [];
            else if (GT(s, t) >= 0) return "[Circular]";

            function b(Ae, F, re) {
                if (F && (s = bG.call(s), s.push(F)), re) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Ae, de, n + 1, s)
                }
                return e(Ae, o, n + 1, s)
            }
            if (typeof t == "function" && !Q_(t)) {
                var R = $G(t),
                    P = bc(t, b);
                return "[Function" + (R ? ": " + R : " (anonymous)") + "]" + (P.length > 0 ? " { " + Tn.call(P, ", ") + " }" : "")
            }
            if (BT(t)) {
                var x = qs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ld.call(t);
                return typeof t == "object" && !qs ? Na(x) : x
            }
            if (xG(t)) {
                for (var U = "<" + V_.call(String(t.nodeName)), I = t.attributes || [], H = 0; H < I.length; H++) U += " " + I[H].name + "=" + FT(SG(I[H].value), "double", o);
                return U += ">", t.childNodes && t.childNodes.length && (U += "..."), U += "</" + V_.call(String(t.nodeName)) + ">", U
            }
            if (Dd(t)) {
                if (t.length === 0) return "[]";
                var Y = bc(t, b);
                return y && !FG(Y) ? "[" + kd(Y, y) + "]" : "[ " + Tn.call(Y, ", ") + " ]"
            }
            if (AG(t)) {
                var W = bc(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !UT.call(t, "cause") ? "{ [" + String(t) + "] " + Tn.call(Y_.call("[cause]: " + b(t.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Tn.call(W, ", ") + " }"
            }
            if (typeof t == "object" && c) {
                if (Z_ && typeof t[Z_] == "function" && Pd) return Pd(t, {
                    depth: g - n
                });
                if (c !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (LG(t)) {
                var G = [];
                return fG.call(t, function(Ae, F) {
                    G.push(b(F, t, !0) + " => " + b(Ae, t))
                }), ey("Map", Qc.call(t), G, y)
            }
            if (kG(t)) {
                var z = [];
                return dG.call(t, function(Ae) {
                    z.push(b(Ae, t))
                }), ey("Set", el.call(t), z, y)
            }
            if (PG(t)) return Af("WeakMap");
            if (MG(t)) return Af("WeakSet");
            if (DG(t)) return Af("WeakRef");
            if (CG(t)) return Na(b(Number(t)));
            if (wG(t)) return Na(b($d.call(t)));
            if (RG(t)) return Na(mG.call(t));
            if (IG(t)) return Na(b(String(t)));
            if (!OG(t) && !Q_(t)) {
                var ae = bc(t, b),
                    ce = z_ ? z_(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ce = !ce && lr && Object(t) === t && lr in t ? Zh.call(bi(t), 8, -1) : ue ? "Object" : "",
                    Ie = ce || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ie + (Ce || ue ? "[" + Tn.call(Y_.call([], Ce || [], ue || []), ": ") + "] " : "");
                return ae.length === 0 ? fe + "{}" : y ? fe + "{" + kd(ae, y) + "}" : fe + "{ " + Tn.call(ae, ", ") + " }"
            }
            return String(t)
        };

    function FT(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function SG(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Dd(e) {
        return bi(e) === "[object Array]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function OG(e) {
        return bi(e) === "[object Date]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function Q_(e) {
        return bi(e) === "[object RegExp]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function AG(e) {
        return bi(e) === "[object Error]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function IG(e) {
        return bi(e) === "[object String]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function CG(e) {
        return bi(e) === "[object Number]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function RG(e) {
        return bi(e) === "[object Boolean]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function BT(e) {
        if (qs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Ld) return !1;
        try {
            return Ld.call(e), !0
        } catch {}
        return !1
    }

    function wG(e) {
        if (!e || typeof e != "object" || !$d) return !1;
        try {
            return $d.call(e), !0
        } catch {}
        return !1
    }
    var NG = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return NG.call(e, t)
    }

    function bi(e) {
        return vG.call(e)
    }

    function $G(e) {
        if (e.name) return e.name;
        var t = yG.call(_G.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function GT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function LG(e) {
        if (!Qc || !e || typeof e != "object") return !1;
        try {
            Qc.call(e);
            try {
                el.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function PG(e) {
        if (!Ba || !e || typeof e != "object") return !1;
        try {
            Ba.call(e, Ba);
            try {
                Ga.call(e, Ga)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function DG(e) {
        if (!K_ || !e || typeof e != "object") return !1;
        try {
            return K_.call(e), !0
        } catch {}
        return !1
    }

    function kG(e) {
        if (!el || !e || typeof e != "object") return !1;
        try {
            el.call(e);
            try {
                Qc.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function MG(e) {
        if (!Ga || !e || typeof e != "object") return !1;
        try {
            Ga.call(e, Ga);
            try {
                Ba.call(e, Ba)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function xG(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function WT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return WT(Zh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, UG);
        return FT(s, "single", t)
    }

    function UG(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + EG.call(t.toString(16))
    }

    function Na(e) {
        return "Object(" + e + ")"
    }

    function Af(e) {
        return e + " { ? }"
    }

    function ey(e, t, r, n) {
        var s = n ? kd(r, n) : Tn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function FG(e) {
        for (var t = 0; t < e.length; t++)
            if (GT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function BG(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Tn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Tn.call(Array(t + 1), r)
        }
    }

    function kd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Tn.call(e, "," + r) + `
` + t.prev
    }

    function bc(e, t) {
        var r = Dd(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = si(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Of == "function" ? Of(e) : [],
            c;
        if (qs) {
            c = {};
            for (var u = 0; u < o.length; u++) c["$" + o[u]] = o[u]
        }
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || qs && c["$" + f] instanceof Symbol || (xT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Of == "function")
            for (var h = 0; h < o.length; h++) UT.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var Qh = zh,
        oa = oG,
        GG = TG,
        WG = Qh("%TypeError%"),
        Tc = Qh("%WeakMap%", !0),
        Sc = Qh("%Map%", !0),
        jG = oa("WeakMap.prototype.get", !0),
        HG = oa("WeakMap.prototype.set", !0),
        KG = oa("WeakMap.prototype.has", !0),
        VG = oa("Map.prototype.get", !0),
        YG = oa("Map.prototype.set", !0),
        qG = oa("Map.prototype.has", !0),
        ep = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        zG = function(e, t) {
            var r = ep(e, t);
            return r && r.value
        },
        XG = function(e, t, r) {
            var n = ep(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        JG = function(e, t) {
            return !!ep(e, t)
        },
        ZG = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new WG("Side channel does not contain " + GG(o))
                },
                get: function(o) {
                    if (Tc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return jG(t, o)
                    } else if (Sc) {
                        if (r) return VG(r, o)
                    } else if (n) return zG(n, o)
                },
                has: function(o) {
                    if (Tc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return KG(t, o)
                    } else if (Sc) {
                        if (r) return qG(r, o)
                    } else if (n) return JG(n, o);
                    return !1
                },
                set: function(o, c) {
                    Tc && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new Tc), HG(t, o, c)) : Sc ? (r || (r = new Sc), YG(r, o, c)) : (n || (n = {
                        key: {},
                        next: null
                    }), XG(n, o, c))
                }
            };
            return s
        },
        QG = String.prototype.replace,
        e3 = /%20/g,
        If = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        tp = {
            default: If.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return QG.call(e, e3, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: If.RFC1738,
            RFC3986: If.RFC3986
        },
        t3 = tp,
        Cf = Object.prototype.hasOwnProperty,
        Yi = Array.isArray,
        _n = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        r3 = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (Yi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        jT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        n3 = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (Yi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Cf.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return Yi(t) && !Yi(r) && (s = jT(t, n)), Yi(t) && Yi(r) ? (r.forEach(function(o, c) {
                if (Cf.call(t, c)) {
                    var u = t[c];
                    u && typeof u == "object" && o && typeof o == "object" ? t[c] = e(u, o, n) : t.push(o)
                } else t[c] = o
            }), t) : Object.keys(r).reduce(function(o, c) {
                var u = r[c];
                return Cf.call(o, c) ? o[c] = e(o[c], u, n) : o[c] = u, o
            }, s)
        },
        i3 = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        s3 = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        a3 = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var c = t;
            if (typeof t == "symbol" ? c = Symbol.prototype.toString.call(t) : typeof t != "string" && (c = String(t)), n === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < c.length; ++f) {
                var h = c.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === t3.RFC1738 && (h === 40 || h === 41)) {
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
        o3 = function(t) {
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
            return r3(r), t
        },
        c3 = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        l3 = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        u3 = function(t, r) {
            return [].concat(t, r)
        },
        f3 = function(t, r) {
            if (Yi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        HT = {
            arrayToObject: jT,
            assign: i3,
            combine: u3,
            compact: o3,
            decode: s3,
            encode: a3,
            isBuffer: l3,
            isRegExp: c3,
            maybeMap: f3,
            merge: n3
        },
        KT = ZG,
        Md = HT,
        Wa = tp,
        d3 = Object.prototype.hasOwnProperty,
        ty = {
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
        h3 = String.prototype.split,
        p3 = Array.prototype.push,
        VT = function(e, t) {
            p3.apply(e, Mn(t) ? t : [t])
        },
        g3 = Date.prototype.toISOString,
        ry = Wa.default,
        tr = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Md.encode,
            encodeValuesOnly: !1,
            format: ry,
            formatter: Wa.formatters[ry],
            indices: !1,
            serializeDate: function(t) {
                return g3.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        m3 = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Rf = {},
        v3 = function e(t, r, n, s, o, c, u, f, h, g, y, b, R, P, x, U) {
            for (var I = t, H = U, Y = 0, W = !1;
                (H = H.get(Rf)) !== void 0 && !W;) {
                var G = H.get(t);
                if (Y += 1, typeof G < "u") {
                    if (G === Y) throw new RangeError("Cyclic object value");
                    W = !0
                }
                typeof H.get(Rf) > "u" && (Y = 0)
            }
            if (typeof f == "function" ? I = f(r, I) : I instanceof Date ? I = y(I) : n === "comma" && Mn(I) && (I = Md.maybeMap(I, function(Se) {
                    return Se instanceof Date ? y(Se) : Se
                })), I === null) {
                if (o) return u && !P ? u(r, tr.encoder, x, "key", b) : r;
                I = ""
            }
            if (m3(I) || Md.isBuffer(I)) {
                if (u) {
                    var z = P ? r : u(r, tr.encoder, x, "key", b);
                    if (n === "comma" && P) {
                        for (var ae = h3.call(String(I), ","), ce = "", ue = 0; ue < ae.length; ++ue) ce += (ue === 0 ? "" : ",") + R(u(ae[ue], tr.encoder, x, "value", b));
                        return [R(z) + (s && Mn(I) && ae.length === 1 ? "[]" : "") + "=" + ce]
                    }
                    return [R(z) + "=" + R(u(I, tr.encoder, x, "value", b))]
                }
                return [R(r) + "=" + R(String(I))]
            }
            var Ce = [];
            if (typeof I > "u") return Ce;
            var Ie;
            if (n === "comma" && Mn(I)) Ie = [{
                value: I.length > 0 ? I.join(",") || null : void 0
            }];
            else if (Mn(f)) Ie = f;
            else {
                var fe = Object.keys(I);
                Ie = h ? fe.sort(h) : fe
            }
            for (var Ae = s && Mn(I) && I.length === 1 ? r + "[]" : r, F = 0; F < Ie.length; ++F) {
                var re = Ie[F],
                    de = typeof re == "object" && typeof re.value < "u" ? re.value : I[re];
                if (!(c && de === null)) {
                    var ye = Mn(I) ? typeof n == "function" ? n(Ae, re) : Ae : Ae + (g ? "." + re : "[" + re + "]");
                    U.set(t, Y);
                    var me = KT();
                    me.set(Rf, U), VT(Ce, e(de, ye, n, s, o, c, u, f, h, g, y, b, R, P, x, me))
                }
            }
            return Ce
        },
        _3 = function(t) {
            if (!t) return tr;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || tr.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Wa.default;
            if (typeof t.format < "u") {
                if (!d3.call(Wa.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Wa.formatters[n],
                o = tr.filter;
            return (typeof t.filter == "function" || Mn(t.filter)) && (o = t.filter), {
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
        y3 = function(e, t) {
            var r = e,
                n = _3(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Mn(n.filter) && (o = n.filter, s = o);
            var c = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in ty ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = ty[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var g = KT(), y = 0; y < s.length; ++y) {
                var b = s[y];
                n.skipNulls && r[b] === null || VT(c, v3(r[b], b, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var R = c.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), R.length > 0 ? P + R : ""
        },
        zs = HT,
        xd = Object.prototype.hasOwnProperty,
        E3 = Array.isArray,
        zt = {
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
        b3 = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        YT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        T3 = "utf8=%26%2310003%3B",
        S3 = "utf8=%E2%9C%93",
        O3 = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                c = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === S3 ? h = "utf-8" : c[f] === T3 && (h = "iso-8859-1"), u = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== u) {
                    var g = c[f],
                        y = g.indexOf("]="),
                        b = y === -1 ? g.indexOf("=") : y + 1,
                        R, P;
                    b === -1 ? (R = r.decoder(g, zt.decoder, h, "key"), P = r.strictNullHandling ? null : "") : (R = r.decoder(g.slice(0, b), zt.decoder, h, "key"), P = zs.maybeMap(YT(g.slice(b + 1), r), function(x) {
                        return r.decoder(x, zt.decoder, h, "value")
                    })), P && r.interpretNumericEntities && h === "iso-8859-1" && (P = b3(P)), g.indexOf("[]=") > -1 && (P = E3(P) ? [P] : P), xd.call(n, R) ? n[R] = zs.combine(n[R], P) : n[R] = P
                } return n
        },
        A3 = function(e, t, r, n) {
            for (var s = n ? t : YT(t, r), o = e.length - 1; o >= 0; --o) {
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
        I3 = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    c = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && c.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    g = [];
                if (h) {
                    if (!n.plainObjects && xd.call(Object.prototype, h) && !n.allowPrototypes) return;
                    g.push(h)
                }
                for (var y = 0; n.depth > 0 && (f = u.exec(o)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && xd.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), A3(g, r, n, s)
            }
        },
        C3 = function(t) {
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
                delimiter: typeof t.delimiter == "string" || zs.isRegExp(t.delimiter) ? t.delimiter : zt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : zt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : zt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : zt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : zt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : zt.strictNullHandling
            }
        },
        R3 = function(e, t) {
            var r = C3(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? O3(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), c = 0; c < o.length; ++c) {
                var u = o[c],
                    f = I3(u, n[u], r, typeof e == "string");
                s = zs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : zs.compact(s)
        },
        w3 = y3,
        N3 = R3,
        $3 = tp,
        qT = {
            formats: $3,
            parse: N3,
            stringify: w3
        };
    class L3 {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class P3 {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class D3 {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class k3 {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class M3 {}
    var Dl = {
        CreateRoomReply: L3,
        GetRoomReply: P3,
        GetAudienceReply: D3,
        RoomExit: k3,
        RoomLock: M3
    };
    const ny = Nd.exports,
        x3 = qT,
        {
            CreateRoomReply: U3,
            GetRoomReply: F3
        } = Dl;
    class B3 {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = x3.stringify(r);
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
                c = await (await ny(n, {
                    method: "POST"
                })).json();
            if (!c.ok) throw new Error(`failed to create room: ${c.error}`);
            let u = c.body;
            return new U3({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await ny(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new F3({
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
    var G3 = {
            APIClient: B3
        },
        ws = null;
    typeof WebSocket < "u" ? ws = WebSocket : typeof MozWebSocket < "u" ? ws = MozWebSocket : typeof kt < "u" ? ws = kt.WebSocket || kt.MozWebSocket : typeof window < "u" ? ws = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ws = self.WebSocket || self.MozWebSocket);
    var W3 = ws,
        rp = {
            exports: {}
        },
        Bs = typeof Reflect == "object" ? Reflect : null,
        iy = Bs && typeof Bs.apply == "function" ? Bs.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        Uc;
    Bs && typeof Bs.ownKeys == "function" ? Uc = Bs.ownKeys : Object.getOwnPropertySymbols ? Uc = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Uc = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function j3(e) {
        console && console.warn && console.warn(e)
    }
    var zT = Number.isNaN || function(t) {
        return t !== t
    };

    function dt() {
        dt.init.call(this)
    }
    rp.exports = dt;
    rp.exports.once = Y3;
    dt.EventEmitter = dt;
    dt.prototype._events = void 0;
    dt.prototype._eventsCount = 0;
    dt.prototype._maxListeners = void 0;
    var sy = 10;

    function kl(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(dt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return sy
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || zT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            sy = e
        }
    });
    dt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    dt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || zT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function XT(e) {
        return e._maxListeners === void 0 ? dt.defaultMaxListeners : e._maxListeners
    }
    dt.prototype.getMaxListeners = function() {
        return XT(this)
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
        if (typeof f == "function") iy(f, this, r);
        else
            for (var h = f.length, g = tS(f, h), n = 0; n < h; ++n) iy(g[n], this, r);
        return !0
    };

    function JT(e, t, r, n) {
        var s, o, c;
        if (kl(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), c = o[t]), c === void 0) c = o[t] = r, ++e._eventsCount;
        else if (typeof c == "function" ? c = o[t] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), s = XT(e), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = c.length, j3(u)
        }
        return e
    }
    dt.prototype.addListener = function(t, r) {
        return JT(this, t, r, !1)
    };
    dt.prototype.on = dt.prototype.addListener;
    dt.prototype.prependListener = function(t, r) {
        return JT(this, t, r, !0)
    };

    function H3() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function ZT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = H3.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    dt.prototype.once = function(t, r) {
        return kl(r), this.on(t, ZT(this, t, r)), this
    };
    dt.prototype.prependOnceListener = function(t, r) {
        return kl(r), this.prependListener(t, ZT(this, t, r)), this
    };
    dt.prototype.removeListener = function(t, r) {
        var n, s, o, c, u;
        if (kl(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, c = n.length - 1; c >= 0; c--)
                if (n[c] === r || n[c].listener === r) {
                    u = n[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : K3(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
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

    function QT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? V3(s) : tS(s, s.length)
    }
    dt.prototype.listeners = function(t) {
        return QT(this, t, !0)
    };
    dt.prototype.rawListeners = function(t) {
        return QT(this, t, !1)
    };
    dt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : eS.call(e, t)
    };
    dt.prototype.listenerCount = eS;

    function eS(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    dt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Uc(this._events) : []
    };

    function tS(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function K3(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function V3(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function Y3(e, t) {
        return new Promise(function(r, n) {
            function s(c) {
                e.removeListener(t, o), n(c)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            rS(e, t, o, {
                once: !0
            }), t !== "error" && q3(e, s, {
                once: !0
            })
        })
    }

    function q3(e, t, r) {
        typeof e.on == "function" && rS(e, "error", t, r)
    }

    function rS(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class z3 {
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
    class Ml extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class vo extends Ml {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class nS extends vo {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class iS extends vo {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class sS extends vo {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class lt extends Ml {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class aS extends lt {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class oS extends lt {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class cS extends lt {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class lS extends lt {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class uS extends lt {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class fS extends lt {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class dS extends lt {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class hS extends lt {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class pS extends lt {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class gS extends lt {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class mS extends lt {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class vS extends lt {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class _S extends lt {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class yS extends lt {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class ES extends lt {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class bS extends lt {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class TS extends lt {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class SS extends lt {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class OS extends lt {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class AS extends lt {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class IS extends lt {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class CS extends lt {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class RS extends lt {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class wS extends lt {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class NS extends lt {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class $S extends lt {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class LS extends lt {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class PS extends lt {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function X3({
        code: e,
        message: t
    }) {
        const r = J3[e];
        return r ? new r({
            message: t
        }) : new Ml({
            message: t
        })
    }
    var ja = {
        createError: X3,
        CallError: Ml,
        EcastServerError: vo,
        EcastCreateRoomFailed: nS,
        EcastDialRoomFailed: iS,
        EcastServerIsShuttingDown: sS,
        EcastClientError: lt,
        EcastParseError: aS,
        EcastRequestIsMissingOpcode: oS,
        EcastRequestHasInvalidOpcode: cS,
        EcastRequestHasInvalidArguments: lS,
        EcastEntityNotFound: uS,
        EcastEntityAlreadyExists: fS,
        EcastEntityTypeError: dS,
        EcastNoSuchClient: hS,
        EcastRoomIsLocked: pS,
        EcastRoomIsFull: gS,
        EcastLicenseNotFound: mS,
        EcastLicenseCheckFailed: vS,
        EcastRoomNotFound: _S,
        EcastInvalidRole: yS,
        EcastTwitchLoginRequired: ES,
        EcastInvalidOption: bS,
        EcastPasswordRequired: TS,
        EcastInvalidPassword: SS,
        EcastNameRequired: OS,
        EcastFilterError: AS,
        EcastNoSuchFilter: IS,
        EcastPermissionDenied: CS,
        EcastNotConnected: RS,
        EcastIllegalOperation: wS,
        EcastACLChangeDenied: NS,
        EcastRoomHasEnded: $S,
        EcastEntityLocked: LS,
        EcastRateLimitExceeded: PS,
        ObservedError: z3
    };
    const J3 = {
        1e3: vo,
        1001: nS,
        1002: iS,
        1003: sS,
        2e3: lt,
        2001: aS,
        2002: oS,
        2003: cS,
        2004: lS,
        2005: uS,
        2006: fS,
        2007: dS,
        2008: hS,
        2009: pS,
        2010: gS,
        2011: mS,
        2012: vS,
        2013: _S,
        2014: yS,
        2015: ES,
        2016: bS,
        2017: TS,
        2018: SS,
        2019: OS,
        2021: AS,
        2022: IS,
        2023: CS,
        2024: RS,
        2025: wS,
        2026: NS,
        2027: $S,
        2028: LS,
        2420: PS
    };
    class Z3 {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class Q3 {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class eW {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class tW {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class rW {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var np = {
        ClientConnected: Q3,
        ClientDisconnected: eW,
        ClientKicked: rW,
        ClientSend: tW,
        ClientWelcome: Z3
    };
    class nW {
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
        CountGroup: nW
    };
    class iW {
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
        GCounter: iW
    };
    class sW {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var DS = {
        Notification: sW
    };
    class aW {
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
    class oW {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var ap = {
        ObjectEntity: aW,
        ObjectEcho: oW
    };
    class cW {
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
        PNCounter: cW
    };
    class lW {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var kS = {
        Reply: lW
    };
    class uW {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var fW = {
        Request: uW
    };
    class dW {
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
    class hW {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var cp = {
        TextEntity: dW,
        TextEcho: hW
    };
    class pW {
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
        TextRing: pW
    };
    class gW {
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
    var MS = {
        ArtifactEntity: gW
    };
    class mW {
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
    class vW {
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
    class _W {
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
        DoodleEntity: mW,
        DoodleLine: vW,
        DoodleLineRemoved: _W
    };
    class yW {
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
    class EW {
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
    class bW {
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
    var xS = {
        StackEntity: yW,
        StackElement: EW,
        StackElements: bW
    };
    class TW {
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
    var US = {
        DropEntity: TW
    };
    class SW {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var OW = {
        Echo: SW
    };
    class AW {
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
    var IW = {
        LockEntity: AW
    };
    class CW {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var FS = {
        OK: CW
    };
    class RW {
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
    var BS = {
        NumberEntity: RW
    };
    const {
        ArtifactEntity: wW
    } = MS, {
        ClientWelcome: NW,
        ClientConnected: $W,
        ClientDisconnected: LW,
        ClientKicked: PW,
        ClientSend: DW
    } = np, {
        CountGroup: kW
    } = ip, {
        DoodleEntity: MW,
        DoodleLine: xW,
        DoodleLineRemoved: UW
    } = up, {
        StackEntity: FW,
        StackElement: BW,
        StackElements: GW
    } = xS, {
        DropEntity: WW
    } = US, {
        Echo: jW
    } = OW, {
        LockEntity: HW
    } = IW, {
        GCounter: KW
    } = sp, {
        GetAudienceReply: VW,
        RoomExit: YW,
        RoomLock: qW
    } = Dl, {
        Notification: zW
    } = DS, {
        OK: XW
    } = FS, {
        NumberEntity: JW
    } = BS, {
        ObjectEcho: ZW,
        ObjectEntity: QW
    } = ap, {
        PNCounter: ay
    } = op, {
        Reply: ej
    } = kS, {
        TextEcho: tj,
        TextEntity: rj
    } = cp, {
        TextRing: nj
    } = lp, {
        createError: oy,
        ObservedError: ij
    } = ja;

    function Ud(e, t, r) {
        switch (e) {
            case "ok":
                return new XW;
            case "echo":
                return new jW({
                    message: t.message
                });
            case "lock":
                return new HW({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return oy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new ij({
                    to: t.to,
                    error: oy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new rj({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new tj({
                    message: t.message
                });
            case "object":
                return new QW({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new ZW({
                    message: t.message
                });
            case "drop":
                return new WW({
                    key: t.key
                });
            case "artifact":
                return new wW({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new $W({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new LW({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new PW({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new DW({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new NW({
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
                        s[o] = Ud(c[0], c[1], c[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new MW({
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
                return new xW({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new UW({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new FW({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new BW({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new GW({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new JW({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new YW({
                    cause: t.cause
                });
            case "room/lock":
                return new qW;
            case "room/get-audience":
                return new VW({
                    connections: t.connections
                });
            case "audience":
                return new ay({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new kW({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new nj({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new KW({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new ay({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function sj(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new ej({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Ud(r, t.result)
        }) : new zW({
            pc: t.pc,
            opcode: r,
            result: Ud(r, t.result)
        })
    }
    var aj = {
        parseResponseMessage: sj
    };
    const cy = W3,
        oj = qT,
        cj = rp.exports,
        {
            CallError: lj
        } = ja,
        {
            ClientWelcome: uj
        } = np,
        {
            CountGroup: fj
        } = ip,
        {
            GCounter: dj
        } = sp,
        {
            Notification: ly
        } = DS,
        {
            ObjectEntity: wf
        } = ap,
        {
            PNCounter: hj
        } = op,
        {
            Reply: pj
        } = kS,
        {
            Request: gj
        } = fW,
        {
            TextEntity: Nf
        } = cp,
        {
            TextRing: mj
        } = lp,
        {
            parseResponseMessage: vj
        } = aj,
        {
            DoodleEntity: _j
        } = up,
        {
            StackEntity: yj
        } = xS,
        Ej = 1e3 + Math.floor(Math.random() * 500),
        uy = 13e3;
    class bj extends cj {
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
            const r = oj.stringify(t),
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
                this.conn = new cy(n, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const y = vj(g);
                    if (y instanceof pj) this.onReply(y);
                    else if (y instanceof ly) {
                        if (y.result instanceof uj) u = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
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
            return new Promise(r => setTimeout(r, t))
        }
        debugLog(...t) {
            !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...t)
        }
        async reconnect() {
            this.disconnect(), this.debugLog("Attempting to reconnect");
            let t = 1,
                r = Ej;
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
                if (r >= uy) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(uy, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new ly(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof lj ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== cy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new gj({
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
            return this.entities[t] = new wf({
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
            return this.entities[t] = new wf({
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
            return this.entities[t] = new wf({
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
            const g = await this.send("doodle/create", n);
            return this.entities[t] = new _j({
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
            return this.entities[t] = new yj({
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
            return this.entities[t] = new fj({
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
            return this.entities[t] = new dj({
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
            return this.entities[t] = new hj({
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
            return this.entities[t] = new mj({
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
    var Tj = {
        WSClient: bj
    };
    const {
        APIClient: Sj
    } = G3, {
        WSClient: Oj
    } = Tj, {
        CreateRoomReply: Aj,
        GetRoomReply: Ij
    } = Dl, {
        ClientWelcome: Cj,
        ClientDisconnected: Rj
    } = np, {
        ArtifactEntity: wj
    } = MS, {
        GCounter: Nj
    } = sp, {
        NumberEntity: $j
    } = BS, {
        TextEntity: Lj
    } = cp, {
        DoodleEntity: Pj
    } = up, {
        ObjectEntity: Dj
    } = ap, {
        CountGroup: kj
    } = ip, {
        DropEntity: Mj
    } = US, {
        OK: xj
    } = FS, {
        RoomExit: Uj
    } = Dl, {
        TextRing: Fj
    } = lp, {
        PNCounter: Bj
    } = op;
    var Un = {
        APIClient: Sj,
        WSClient: Oj,
        ClientWelcome: Cj,
        CreateRoomReply: Aj,
        DropEntity: Mj,
        GetRoomReply: Ij,
        ClientDisconnected: Rj,
        RoomExit: Uj,
        OK: xj,
        ArtifactEntity: wj,
        DoodleEntity: Pj,
        NumberEntity: $j,
        CountGroup: kj,
        GCounter: Nj,
        ObjectEntity: Dj,
        PNCounter: Bj,
        TextEntity: Lj,
        TextRing: Fj
    };
    const Gj = [{
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
        GS = e => Gj.find(t => t.tag === e || t.categoryId === e);

    function Wj(...e) {
        console.log(...e)
    }

    function jj(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var fy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(kt, function(r) {
            var n = typeof window < "u" ? window : typeof kt < "u" ? kt : typeof self < "u" ? self : {},
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

            function h(A) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, $ = {}, S; S = T.exec(A);) {
                    var L = u(S[1]),
                        J = u(S[2]);
                    L === null || J === null || L in $ || ($[L] = J)
                }
                return $
            }

            function g(A, T) {
                T = T || "";
                var $ = [],
                    S, L;
                typeof T != "string" && (T = "?");
                for (L in A)
                    if (o.call(A, L)) {
                        if (S = A[L], !S && (S === null || S === c || isNaN(S)) && (S = ""), L = f(L), S = f(S), L === null || S === null) continue;
                        $.push(L + "=" + S)
                    } return $.length ? T + $.join("&") : ""
            }
            var y = g,
                b = h,
                R = {
                    stringify: y,
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
                    function(T, $) {
                        return z($.protocol) ? T.replace(/\\/g, "/") : T
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
                var $ = T.location || {};
                A = A || $;
                var S = {},
                    L = typeof A,
                    J;
                if (A.protocol === "blob:") S = new ue(unescape(A.pathname), {});
                else if (L === "string") {
                    S = new ue(A, {});
                    for (J in W) delete S[J]
                } else if (L === "object") {
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
                var $ = x.exec(A),
                    S = $[1] ? $[1].toLowerCase() : "",
                    L = !!$[2],
                    J = !!$[3],
                    te = 0,
                    _e;
                return L ? J ? (_e = $[2] + $[3] + $[4], te = $[2].length + $[3].length) : (_e = $[2] + $[4], te = $[2].length) : J ? (_e = $[3] + $[4], te = $[3].length) : _e = $[4], S === "file:" ? te >= 2 && (_e = _e.slice(2)) : z(S) ? _e = $[4] : S ? L && (_e = _e.slice(2)) : te >= 2 && z(T.protocol) && (_e = $[4]), {
                    protocol: S,
                    slashes: L || z(S),
                    slashesCount: te,
                    rest: _e
                }
            }

            function ce(A, T) {
                if (A === "") return T;
                for (var $ = (T || "/").split("/").slice(0, -1).concat(A.split("/")), S = $.length, L = $[S - 1], J = !1, te = 0; S--;) $[S] === "." ? $.splice(S, 1) : $[S] === ".." ? ($.splice(S, 1), te++) : te && (S === 0 && (J = !0), $.splice(S, 1), te--);
                return J && $.unshift(""), (L === "." || L === "..") && $.push(""), $.join("/")
            }

            function ue(A, T, $) {
                if (A = H(A), !(this instanceof ue)) return new ue(A, T, $);
                var S, L, J, te, _e, Te, ut = Y.slice(),
                    sr = typeof T,
                    De = this,
                    fa = 0;
                for (sr !== "object" && sr !== "string" && ($ = T, T = null), $ && typeof $ != "function" && ($ = R.parse), T = G(T), L = ae(A || "", T), S = !L.protocol && !L.slashes, De.slashes = L.slashes || S && T.slashes, De.protocol = L.protocol || T.protocol || "", A = L.rest, (De.protocol === "file:" || !L.slashes && (L.protocol || L.slashesCount < 2 || !z(De.protocol))) && (ut[3] = [/(.*)/, "pathname"]); fa < ut.length; fa++) {
                    if (te = ut[fa], typeof te == "function") {
                        A = te(A, De);
                        continue
                    }
                    J = te[0], Te = te[1], J !== J ? De[Te] = A : typeof J == "string" ? ~(_e = A.indexOf(J)) && (typeof te[2] == "number" ? (De[Te] = A.slice(0, _e), A = A.slice(_e + te[2])) : (De[Te] = A.slice(_e), A = A.slice(0, _e))) : (_e = J.exec(A)) && (De[Te] = _e[1], A = A.slice(0, _e.index)), De[Te] = De[Te] || S && te[3] && T[Te] || "", te[4] && (De[Te] = De[Te].toLowerCase())
                }
                $ && (De.query = $(De.query)), S && T.slashes && De.pathname.charAt(0) !== "/" && (De.pathname !== "" || T.pathname !== "") && (De.pathname = ce(De.pathname, T.pathname)), De.pathname.charAt(0) !== "/" && z(De.protocol) && (De.pathname = "/" + De.pathname), s(De.port, De.protocol) || (De.host = De.hostname, De.port = ""), De.username = De.password = "", De.auth && (te = De.auth.split(":"), De.username = te[0] || "", De.password = te[1] || ""), De.origin = De.protocol !== "file:" && z(De.protocol) && De.host ? De.protocol + "//" + De.host : "null", De.href = De.toString()
            }

            function Ce(A, T, $) {
                var S = this;
                switch (A) {
                    case "query":
                        typeof T == "string" && T.length && (T = ($ || R.parse)(T)), S[A] = T;
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
                            var L = A === "pathname" ? "/" : "#";
                            S[A] = T.charAt(0) !== L ? L + T : T
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
                (!A || typeof A != "function") && (A = R.stringify);
                var T, $ = this,
                    S = $.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var L = S + ($.slashes || z($.protocol) ? "//" : "");
                return $.username && (L += $.username, $.password && (L += ":" + $.password), L += "@"), L += $.host + $.pathname, T = typeof $.query == "object" ? A($.query) : $.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), $.hash && (L += $.hash), L
            }
            ue.prototype = {
                set: Ce,
                toString: Ie
            }, ue.extractProtocol = ae, ue.location = G, ue.trimLeft = H, ue.qs = R;
            var fe = ue;

            function Ae(A, T) {
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
            var ye = function() {
                this.listeners = {}
            };
            ye.prototype.addEventListener = function(T, $) {
                typeof $ == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === $
                }).length === 0 && this.listeners[T].push($))
            }, ye.prototype.removeEventListener = function(T, $) {
                var S = this.listeners[T];
                this.listeners[T] = re(S, function(L) {
                    return L === $
                })
            }, ye.prototype.dispatchEvent = function(T) {
                for (var $ = this, S = [], L = arguments.length - 1; L-- > 0;) S[L] = arguments[L + 1];
                var J = T.type,
                    te = this.listeners[J];
                return Array.isArray(te) ? (te.forEach(function(_e) {
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
                    L = this.urlMap[S];
                if (L && L.server && L.websockets.indexOf(T) === -1) return L.websockets.push(T), L.server
            }, Se.prototype.addMembershipToRoom = function(T, $) {
                var S = this.urlMap[me(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[$] || (S.roomMemberships[$] = []), S.roomMemberships[$].push(T))
            }, Se.prototype.attachServer = function(T, $) {
                var S = me($),
                    L = this.urlMap[S];
                if (!L) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Se.prototype.serverLookup = function(T) {
                var $ = me(T),
                    S = this.urlMap[$];
                if (S) return S.server
            }, Se.prototype.websocketsLookup = function(T, $, S) {
                var L = me(T),
                    J, te = this.urlMap[L];
                if (J = te ? te.websockets : [], $) {
                    var _e = te.roomMemberships[$];
                    J = _e || []
                }
                return S ? J.filter(function(Te) {
                    return Te !== S
                }) : J
            }, Se.prototype.removeServer = function(T) {
                delete this.urlMap[me(T)]
            }, Se.prototype.removeWebSocket = function(T, $) {
                var S = me($),
                    L = this.urlMap[S];
                L && (L.websockets = re(L.websockets, function(J) {
                    return J === T
                }))
            }, Se.prototype.removeMembershipFromRoom = function(T, $) {
                var S = this.urlMap[me(T.url)],
                    L = S.roomMemberships[$];
                S && L !== null && (S.roomMemberships[$] = re(L, function(J) {
                    return J === T
                }))
            };
            var ke = new Se,
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
                wt = function() {};
            wt.prototype.stopPropagation = function() {}, wt.prototype.stopImmediatePropagation = function() {}, wt.prototype.initEvent = function(T, $, S) {
                T === void 0 && (T = "undefined"), $ === void 0 && ($ = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean($), this.cancelable = Boolean(S)
            };
            var Ar = function(A) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), A.call(this), !$) throw new TypeError(et.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var L = S.bubbles,
                            J = S.cancelable;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? Boolean(J) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(wt),
                ir = function(A) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), A.call(this), !$) throw new TypeError(et.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            J = S.cancelable,
                            te = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ut = S.ports;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? Boolean(J) : !1, this.canncelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.origin = "" + _e, this.ports = typeof ut > "u" ? null : ut, this.data = typeof te > "u" ? null : te, this.lastEventId = "" + (Te || "")
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(wt),
                vr = function(A) {
                    function T($, S) {
                        if (S === void 0 && (S = {}), A.call(this), !$) throw new TypeError(et.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            J = S.cancelable,
                            te = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + $, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = J ? Boolean(J) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.code = typeof te == "number" ? parseInt(te, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return A && (T.__proto__ = A), T.prototype = Object.create(A && A.prototype), T.prototype.constructor = T, T
                }(wt);

            function at(A) {
                var T = A.type,
                    $ = A.target,
                    S = new Ar(T);
                return $ && (S.target = $, S.srcElement = $, S.currentTarget = $), S
            }

            function Tt(A) {
                var T = A.type,
                    $ = A.origin,
                    S = A.data,
                    L = A.target,
                    J = new ir(T, {
                        data: S,
                        origin: $
                    });
                return L && (J.target = L, J.srcElement = L, J.currentTarget = L), J
            }

            function ot(A) {
                var T = A.code,
                    $ = A.reason,
                    S = A.type,
                    L = A.target,
                    J = A.wasClean;
                J || (J = T === Fe.CLOSE_NORMAL || T === Fe.CLOSE_NO_STATUS);
                var te = new vr(S, {
                    code: T,
                    reason: $,
                    wasClean: J
                });
                return L && (te.target = L, te.srcElement = L, te.currentTarget = L), te
            }

            function Mt(A, T, $) {
                A.readyState = V.CLOSING;
                var S = ke.serverLookup(A.url),
                    L = ot({
                        type: "close",
                        target: A.target,
                        code: T,
                        reason: $
                    }),
                    J = ot({
                        type: "server::close",
                        target: A,
                        code: T,
                        reason: $
                    });
                Ae(function() {
                    ke.removeWebSocket(A, A.url), A.readyState = V.CLOSED, A.dispatchEvent(L), A.dispatchEvent(J), S && S.dispatchEvent(L, S)
                }, A)
            }

            function Yt(A, T, $) {
                A.readyState = V.CLOSING;
                var S = ke.serverLookup(A.url),
                    L = ot({
                        type: "close",
                        target: A.target,
                        code: T,
                        reason: $,
                        wasClean: !1
                    }),
                    J = ot({
                        type: "server::close",
                        target: A,
                        code: T,
                        reason: $,
                        wasClean: !1
                    }),
                    te = at({
                        type: "error",
                        target: A.target
                    });
                Ae(function() {
                    ke.removeWebSocket(A, A.url), A.readyState = V.CLOSED, A.dispatchEvent(te), A.dispatchEvent(L), A.dispatchEvent(J), S && S.dispatchEvent(L, S)
                }, A)
            }

            function xt(A) {
                return Object.prototype.toString.call(A) !== "[object Blob]" && !(A instanceof ArrayBuffer) && (A = String(A)), A
            }
            var m = new WeakMap;

            function p(A) {
                if (m.has(A)) return m.get(A);
                var T = new Proxy(A, {
                    get: function(S, L) {
                        return L === "close" ? function(te) {
                            te === void 0 && (te = {});
                            var _e = te.code || Fe.CLOSE_NORMAL,
                                Te = te.reason || "";
                            Mt(T, _e, Te)
                        } : L === "send" ? function(te) {
                            te = xt(te), A.dispatchEvent(Tt({
                                type: "message",
                                data: te,
                                origin: this.url,
                                target: A
                            }))
                        } : L === "on" ? function(te, _e) {
                            A.addEventListener("server::" + te, _e)
                        } : L === "target" ? A : S[L]
                    }
                });
                return m.set(A, T), T
            }

            function O(A) {
                var T = encodeURIComponent(A).match(/%[89ABab]/g);
                return A.length + (T ? T.length : 0)
            }

            function M(A) {
                var T = new fe(A),
                    $ = T.pathname,
                    S = T.protocol,
                    L = T.hash;
                if (!A) throw new TypeError(et.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if ($ || (T.pathname = "/"), S === "") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (L !== "") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + L + "'). Fragment identifiers are not allowed in WebSocket URLs.");
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
                    }).reduce(function(S, L) {
                        return S[L.protocol] = (S[L.protocol] || 0) + L.count, S
                    }, {}),
                    $ = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if ($.length > 0) throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The subprotocol '" + $[0] + "' is duplicated.");
                return A
            }
            var V = function(A) {
                function T(S, L) {
                    A.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = M(S), L = B(L), this.protocol = L[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var J = p(this),
                        te = ke.attachWebSocket(J, this.url);
                    Ae(function() {
                        if (te)
                            if (te.options.verifyClient && typeof te.options.verifyClient == "function" && !te.options.verifyClient()) this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), ke.removeWebSocket(J, this.url), this.dispatchEvent(at({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(ot({
                                type: "close",
                                target: this,
                                code: Fe.CLOSE_NORMAL
                            }));
                            else {
                                if (te.options.selectProtocol && typeof te.options.selectProtocol == "function") {
                                    var Te = te.options.selectProtocol(L),
                                        ut = Te !== "",
                                        sr = L.indexOf(Te) !== -1;
                                    if (ut && !sr) {
                                        this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), ke.removeWebSocket(J, this.url), this.dispatchEvent(at({
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
                }, T.prototype.send = function(L) {
                    var J = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var te = Tt({
                            type: "server::message",
                            origin: this.url,
                            data: xt(L)
                        }),
                        _e = ke.serverLookup(this.url);
                    _e && Ae(function() {
                        J.dispatchEvent(te, L)
                    }, _e)
                }, T.prototype.close = function(L, J) {
                    if (L !== void 0 && (typeof L != "number" || L !== 1e3 && (L < 3e3 || L > 4999))) throw new TypeError(et.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + L + " is neither.");
                    if (J !== void 0) {
                        var te = O(J);
                        if (te > 123) throw new SyntaxError(et.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? Yt(_e, L || Fe.CLOSE_ABNORMAL, J) : Mt(_e, L || Fe.CLOSE_NO_STATUS, J)
                    }
                }, Object.defineProperties(T.prototype, $), T
            }(ye);
            V.CONNECTING = 0, V.prototype.CONNECTING = V.CONNECTING, V.OPEN = 1, V.prototype.OPEN = V.OPEN, V.CLOSING = 2, V.prototype.CLOSING = V.CLOSING, V.CLOSED = 3, V.prototype.CLOSED = V.CLOSED;
            var le = function(A) {
                return A.reduce(function(T, $) {
                    return T.indexOf($) > -1 ? T : T.concat($)
                }, [])
            };

            function ie() {
                return typeof window < "u" ? window : typeof process == "object" && typeof jj == "function" && typeof kt == "object" ? kt : this
            }
            var ee = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                w = function(A) {
                    function T($, S) {
                        S === void 0 && (S = ee), A.call(this);
                        var L = new fe($);
                        L.pathname || (L.pathname = "/"), this.url = L.toString(), this.originalWebSocket = null;
                        var J = ke.attachServer(this, this.url);
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
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), ke.removeServer(this.url), typeof S == "function" && S()
                    }, T.prototype.on = function(S, L) {
                        this.addEventListener(S, L)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var L = S.code,
                            J = S.reason,
                            te = S.wasClean,
                            _e = ke.websocketsLookup(this.url);
                        ke.removeServer(this.url), _e.forEach(function(Te) {
                            Te.readyState = V.CLOSED, Te.dispatchEvent(ot({
                                type: "close",
                                target: Te.target,
                                code: L || Fe.CLOSE_NORMAL,
                                reason: J || "",
                                wasClean: te
                            }))
                        }), this.dispatchEvent(ot({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, L, J) {
                        var te = this;
                        J === void 0 && (J = {});
                        var _e = J.websockets;
                        _e || (_e = ke.websocketsLookup(this.url)), typeof J != "object" || arguments.length > 3 ? (L = Array.prototype.slice.call(arguments, 1, arguments.length), L = L.map(function(Te) {
                            return xt(Te)
                        })) : L = xt(L), _e.forEach(function(Te) {
                            Array.isArray(L) ? Te.dispatchEvent.apply(Te, [Tt({
                                type: S,
                                data: L,
                                origin: te.url,
                                target: Te.target
                            })].concat(L)) : Te.dispatchEvent(Tt({
                                type: S,
                                data: L,
                                origin: te.url,
                                target: Te.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return ke.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, L, J) {
                        var te = this;
                        J === void 0 && (J = []);
                        var _e = this,
                            Te = le(J.concat(ke.websocketsLookup(this.url, S, L)));
                        return {
                            to: function(ut, sr) {
                                return te.to.call(te, ut, sr, Te)
                            },
                            emit: function(sr, De) {
                                _e.emit(sr, De, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], L = arguments.length; L--;) S[L] = arguments[L];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var L = ke.websocketsLookup(this.url);
                        S === "error" && L.forEach(function(J) {
                            J.readyState = V.CLOSED, J.dispatchEvent(at({
                                type: "error"
                            }))
                        })
                    }, T
                }(ye);
            w.of = function(T) {
                return new w(T)
            };
            var j = function(A) {
                function T(S, L) {
                    var J = this;
                    S === void 0 && (S = "socket.io"), L === void 0 && (L = ""), A.call(this), this.binaryType = "blob";
                    var te = new fe(S);
                    te.pathname || (te.pathname = "/"), this.url = te.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof L == "string" || typeof L == "object" && L !== null ? this.protocol = L : Array.isArray(L) && L.length > 0 && (this.protocol = L[0]);
                    var _e = ke.attachWebSocket(this, this.url);
                    Ae(function() {
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
                var $ = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var L = ke.serverLookup(this.url);
                        return ke.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(ot({
                            type: "close",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        })), L && L.dispatchEvent(ot({
                            type: "disconnect",
                            target: this,
                            code: Fe.CLOSE_NORMAL
                        }), L), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(L) {
                    for (var J = [], te = arguments.length - 1; te-- > 0;) J[te] = arguments[te + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var _e = Tt({
                            type: L,
                            origin: this.url,
                            data: J
                        }),
                        Te = ke.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(J)), this
                }, T.prototype.send = function(L) {
                    return this.emit("message", L), this
                }, $.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        L = ke.serverLookup(this.url);
                    if (!L) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(te, _e) {
                            return L.emit(te, _e, {
                                websockets: ke.websocketsLookup(S.url, null, S)
                            }), S
                        },
                        to: function(te) {
                            return L.to(te, S)
                        },
                        in: function(te) {
                            return L.in(te, S)
                        }
                    }
                }, T.prototype.on = function(L, J) {
                    return this.addEventListener(L, J), this
                }, T.prototype.off = function(L, J) {
                    this.removeEventListener(L, J)
                }, T.prototype.hasListeners = function(L) {
                    var J = this.listeners[L];
                    return Array.isArray(J) ? !!J.length : !1
                }, T.prototype.join = function(L) {
                    ke.addMembershipToRoom(this, L)
                }, T.prototype.leave = function(L) {
                    ke.removeMembershipFromRoom(this, L)
                }, T.prototype.to = function(L) {
                    return this.broadcast.to(L)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(L) {
                    for (var J = this, te = [], _e = arguments.length - 1; _e-- > 0;) te[_e] = arguments[_e + 1];
                    var Te = L.type,
                        ut = this.listeners[Te];
                    if (!Array.isArray(ut)) return !1;
                    ut.forEach(function(sr) {
                        te.length > 0 ? sr.apply(J, te) : sr.call(J, L.data ? L.data : L)
                    })
                }, Object.defineProperties(T.prototype, $), T
            }(ye);
            j.CONNECTING = 0, j.OPEN = 1, j.CLOSING = 2, j.CLOSED = 3;
            var he = function(T, $) {
                return new j(T, $)
            };
            he.connect = function(T, $) {
                return he(T, $)
            };
            var pe = w,
                Re = V,
                Pe = he;
            r.Server = pe, r.WebSocket = Re, r.SocketIO = Pe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(fy, fy.exports);
    var WS = {
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
                    b = h.x - g,
                    R = h.y - y;
                if (b !== 0 || R !== 0) {
                    var P = ((u.x - g) * b + (u.y - y) * R) / (b * b + R * R);
                    P > 1 ? (g = h.x, y = h.y) : P > 0 && (g += b * P, y += R * P)
                }
                return b = u.x - g, R = u.y - y, b * b + R * R
            }

            function n(u, f) {
                for (var h = u[0], g = [h], y, b = 1, R = u.length; b < R; b++) y = u[b], t(y, h) > f && (g.push(y), h = y);
                return h !== y && g.push(y), g
            }

            function s(u, f, h, g, y) {
                for (var b = g, R, P = f + 1; P < h; P++) {
                    var x = r(u[P], u[f], u[h]);
                    x > b && (R = P, b = x)
                }
                b > g && (R - f > 1 && s(u, f, R, g, y), y.push(u[R]), h - R > 1 && s(u, R, h, g, y))
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
    })(WS);
    const jS = WS.exports;
    class HS {
        constructor(t, r, n) {
            Ee(this, "DEFAULT_WIDTH", 400);
            Ee(this, "DEFAULT_HEIGHT", 400);
            Ee(this, "canvas");
            Ee(this, "ctx");
            Ee(this, "doodle");
            Ee(this, "color", "#000");
            Ee(this, "layer", 0);
            Ee(this, "layers", 1);
            Ee(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            Ee(this, "points", []);
            Ee(this, "precision", 2);
            Ee(this, "scale", {
                width: 1,
                height: 1
            });
            Ee(this, "weight", 4);
            Ee(this, "weightScale", 1);
            Ee(this, "isInteracting", !1);
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
                points: jS(this.points, .5).map(r => ({
                    x: Wt.toPrecision(r.x, this.precision),
                    y: Wt.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class Hj {
        constructor(t, r, n, s) {
            Ee(this, "renderCanvas");
            Ee(this, "canvases", []);
            Ee(this, "maxPoints", Number.MAX_SAFE_INTEGER);
            Ee(this, "tolerance", 1);
            Ee(this, "lines", []);
            Ee(this, "lines2", []);
            Ee(this, "currentLine", {
                color: "#000",
                thickness: 0,
                points: []
            });
            Ee(this, "isSubmitting", !1);
            Ee(this, "isInteracting", !1);
            Ee(this, "currentColor", "#000");
            Ee(this, "currentThickness", 4);
            Ee(this, "currentFrame", 0);
            Ee(this, "width", 400);
            Ee(this, "height", 400);
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
                n = jS(this.currentLine.points);
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
    class fp {
        constructor(t, r) {
            Ee(this, "stageElement");
            Ee(this, "width", 400);
            Ee(this, "height", 400);
            Ee(this, "interactCanvas");
            Ee(this, "isDrawing", !1);
            Ee(this, "callbacks", {});
            Ee(this, "capturedPointer");
            Ee(this, "onPointerDown", t => {
                if (t.preventDefault(), !t.isPrimary || this.capturedPointer) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onDown(r), this.stageElement.setPointerCapture(t.pointerId), this.capturedPointer = {
                    pointerId: t.pointerId,
                    pointerType: t.pointerType
                }
            });
            Ee(this, "onPointerMove", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onMove(r)
            });
            Ee(this, "onLostPointerCapture", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            Ee(this, "onPointerEnd", t => {
                if (t.preventDefault(), !this.capturedPointer || !t.isPrimary || t.pointerType !== this.capturedPointer.pointerType) return;
                this.interactCanvas.onUp(), this.emit("up");
                const r = this.capturedPointer.pointerId;
                this.stageElement.hasPointerCapture(r) && this.stageElement.releasePointerCapture(r), this.capturedPointer = void 0
            });
            Ee(this, "onMouseDown", t => {
                t.preventDefault();
                const r = this.getEventPoint(t);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            Ee(this, "onMouseMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(t);
                this.interactCanvas.onMove(r)
            });
            Ee(this, "onMouseUp", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            Ee(this, "onTouchStart", t => {
                t.preventDefault();
                const r = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onDown(r), this.isDrawing = !0
            });
            Ee(this, "onTouchMove", t => {
                if (t.preventDefault(), !this.isDrawing) return;
                const r = this.getEventPoint(t.touches[0]);
                this.interactCanvas.onMove(r)
            });
            Ee(this, "onTouchCancel", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            Ee(this, "onTouchEnd", t => {
                t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
            });
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new Hj(t, this.width, this.height, r)
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
    class dy {
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
            const n = GS(r.room.appTag),
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
                const R = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(g)
                })).text();
                Wj("[Feedback] sendToSlack", R)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    const Kj = {
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
        Vj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        Yj = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        qj = "LOADING",
        zj = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        Xj = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        Jj = {
            AND: "AND",
            OR: "OR"
        },
        Zj = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        Qj = {
            NAME: "AUDIENCE"
        },
        e8 = {
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
        t8 = {
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
        r8 = {
            ACTION: Kj,
            ALT: Vj,
            ERROR: Yj,
            LOADING: qj,
            LOBBY: zj,
            POST_GAME: Xj,
            SEPARATOR: Jj,
            TUTORIAL: Zj,
            AUDIENCE: Qj,
            UGC: e8,
            TOAST: t8
        },
        n8 = {
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
        i8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        s8 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        a8 = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        o8 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        c8 = {
            AND: "ET",
            OR: "OU"
        },
        l8 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        u8 = {
            NAME: "SPECTATEURS"
        },
        f8 = {
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
        d8 = {
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
        h8 = {
            ACTION: n8,
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
        g8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        m8 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        v8 = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        _8 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        y8 = {
            AND: "E",
            OR: "O"
        },
        E8 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        b8 = {
            NAME: "PUBBLICO"
        },
        T8 = {
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
        S8 = {
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
        O8 = {
            ACTION: p8,
            ALT: g8,
            ERROR: m8,
            LOBBY: v8,
            POST_GAME: _8,
            SEPARATOR: y8,
            TUTORIAL: E8,
            AUDIENCE: b8,
            UGC: T8,
            TOAST: S8
        },
        A8 = {
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
        I8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        C8 = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        R8 = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        w8 = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        N8 = {
            AND: "UND",
            OR: "ODER"
        },
        $8 = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        L8 = {
            NAME: "PUBLIKUM"
        },
        P8 = {
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
        D8 = {
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
        k8 = {
            ACTION: A8,
            ALT: I8,
            ERROR: C8,
            LOBBY: R8,
            POST_GAME: w8,
            SEPARATOR: N8,
            TUTORIAL: $8,
            AUDIENCE: L8,
            UGC: P8,
            TOAST: D8
        },
        M8 = {
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
        x8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        U8 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
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
            ALT: x8,
            ERROR: U8,
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
        q8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        z8 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        X8 = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        J8 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        Z8 = {
            AND: "Y",
            OR: "O"
        },
        Q8 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        e4 = {
            NAME: "P\xDABLICO"
        },
        t4 = {
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
        r4 = {
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
        n4 = {
            ACTION: Y8,
            ALT: q8,
            ERROR: z8,
            LOBBY: X8,
            POST_GAME: J8,
            SEPARATOR: Z8,
            TUTORIAL: Q8,
            AUDIENCE: e4,
            UGC: t4,
            TOAST: r4
        },
        i4 = {
            en: r8,
            fr: h8,
            it: O8,
            de: k8,
            es: V8,
            "es-XL": n4
        },
        s4 = {
            LABEL: "BRANCH",
            REFRESH_REQUIRED: "Refresh Required",
            PREFERRED: "PREFERRED BRANCH",
            SELECT: "Select a Branch",
            WAITING: "Waiting for Room"
        },
        a4 = {
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
        o4 = {
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
        c4 = "Link to Jackbox Games Homepage",
        l4 = {
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
        u4 = {
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
        f4 = {
            EMPTY: "No Past Games Yet",
            MANAGE: "MANAGE",
            TITLE: "YOUR PAST GAMES"
        },
        d4 = {
            TITLE: "RECENT GAMES",
            VIEW_ALL: {
                BUTTON: "VIEW ALL",
                LINK: "VIEW ALL PAST GAMES"
            }
        },
        h4 = {
            GAME_FULL: "Game is full",
            GAME_STARTED: "Game has started",
            ROOM_NOT_FOUND: "Room not found"
        },
        p4 = {
            GAME_FULL: "GAME IS FULL",
            GAME_STARTED: "GAME HAS STARTED",
            JOIN_AUDIENCE: "JOIN AUDIENCE",
            RECONNECT: "RECONNECT",
            TWITCH_LOGIN: "LOGIN WITH TWITCH"
        },
        g4 = {
            CAMERA: "[b]HEADS UP:[/b] We\u2019re not detecting a camera, but you can still play the game without a photo. If this seems wrong, try joining with a different browser.",
            STYLE: "[b]HEADS UP:[/b] Your browser seems a bit outdated, and will have some issues displaying this game.",
            TOS: "By clicking {submit}, you agree to our [tos]Terms of Service[/tos]"
        },
        m4 = {
            BRANCH: s4,
            ERROR: a4,
            FORM: o4,
            HOMEPAGE_LINK: c4,
            MENU: l4,
            PAST_GAME: u4,
            PAST_GAMES: f4,
            RECENT_GAMES: d4,
            STATUS: h4,
            SUBMIT: p4,
            WARNING: g4
        },
        v4 = {
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
        _4 = {
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
        y4 = {
            APPEARANCE: "APPEARANCE",
            HELP: "AIDE",
            TWITCH: "TWITCH",
            LOGOUT: "D\xC9CONNEXION",
            MERCH: "MERCH",
            PAST_GAMES: "ANCIENS JEU",
            MAILING_LIST: "LISTE DE DIFFUSION",
            MODERATOR: "MOD\xC9RATEUR"
        },
        E4 = {
            GAME_FULL: "La salle est pleine",
            GAME_STARTED: "La partie a commenc\xE9",
            ROOM_NOT_FOUND: "Salle introuvable"
        },
        b4 = {
            GAME_FULL: "LA SALLE EST PLEINE",
            GAME_STARTED: "LA PARTIE A COMMENC\xC9",
            JOIN_AUDIENCE: "REJOINDRE EN TANT QUE SPECTATEUR",
            RECONNECT: "SE RECONNECTER",
            TWITCH_LOGIN: "SE CONNECTER AVEC TWITCH"
        },
        T4 = {
            CAMERA: "[b]ATTENTION\xA0:[/b] Nous ne d\xE9tectons aucune cam\xE9ra, mais vous pouvez jouer sans afficher votre photo. Si vous pensez qu'il s'agit d'une erreur, essayez de rejoindre en utilisant un autre navigateur.",
            STYLE: "[b]ATTENTION\xA0:[/b] Votre navigateur semble obsol\xE8te. Vous risquez de rencontrer des probl\xE8mes d'affichage avec ce jeu.",
            TOS: "En cliquant sur {submit}, vous acceptez nos [tos]Conditions de service[/tos]."
        },
        S4 = {
            ERROR: v4,
            FORM: _4,
            MENU: y4,
            STATUS: E4,
            SUBMIT: b4,
            WARNING: T4
        },
        O4 = {
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
        A4 = {
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
        I4 = {
            APPEARANCE: "APPEARANCE",
            HELP: "AIUTO",
            TWITCH: "TWITCH",
            LOGOUT: "ESCI",
            MERCH: "NEGOZIO",
            PAST_GAMES: "PARTITE PRECEDENTI",
            MAILING_LIST: "NEWSLETTER",
            MODERATOR: "MODERATORE"
        },
        C4 = {
            GAME_FULL: "La partita \xE8 al completo",
            GAME_STARTED: "La partita \xE8 gi\xE0 iniziata",
            ROOM_NOT_FOUND: "Impossibile trovare la sala"
        },
        R4 = {
            GAME_FULL: "LA PARTITA \xC8 AL COMPLETO",
            GAME_STARTED: "LA PARTITA \xC8 GI\xC0 INIZIATA",
            JOIN_AUDIENCE: "PARTECIPA COME PUBBLICO",
            RECONNECT: "RICOLLEGATI",
            TWITCH_LOGIN: "ACCEDI CON TWITCH"
        },
        w4 = {
            CAMERA: "[b]AVVISO:[/b] Non rileviamo la telecamera, ma puoi giocare anche senza aggiungere una foto. Se la cosa non ti torna, prova ad accedere usando un altro browser.",
            STYLE: "[b]AVVISO:[/b] Il tuo browser \xE8 obsoleto e avr\xE0 dei problemi a visualizzare il gioco.",
            TOS: "Selezionando {submit}, accetti le [tos]Condizioni del servizio[/tos]"
        },
        N4 = {
            ERROR: O4,
            FORM: A4,
            MENU: I4,
            STATUS: C4,
            SUBMIT: R4,
            WARNING: w4
        },
        $4 = {
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
        L4 = {
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
        P4 = {
            APPEARANCE: "APPEARANCE",
            HELP: "HILFE",
            TWITCH: "TWITCH",
            LOGOUT: "ABMELDEN",
            MERCH: "MERCH",
            PAST_GAMES: "ANDERE SPIELE",
            MAILING_LIST: "MAILINGLISTE",
            MODERATOR: "MODERATOR"
        },
        D4 = {
            GAME_FULL: "Spiel ist voll",
            GAME_STARTED: "Spiel hat bereits begonnen",
            ROOM_NOT_FOUND: "Raum nicht gefunden"
        },
        k4 = {
            GAME_FULL: "SPIEL IST VOLL",
            GAME_STARTED: "SPIEL HAT BEREITS BEGONNEN",
            JOIN_AUDIENCE: "INS PUBLIKUM SETZEN",
            RECONNECT: "NEU VERBINDEN",
            TWITCH_LOGIN: "MIT TWITCH ANMELDEN"
        },
        M4 = {
            CAMERA: "[b]ACHTUNG:[/b] Es wurde keine Kamera erkannt, aber du kannst das Spiel auch ohne Foto spielen. Falls eine Kamera vorhanden ist, probiere es mit einem anderen Browser.",
            STYLE: "[b]ACHTUNG:[/b] Dein Browser scheint etwas veraltet zu sein. Es k\xF6nnte Probleme bei der Anzeige dieses Spiels geben.",
            TOS: "Wenn du auf {submit} klickst, erkl\xE4rst du dich mit unseren [tos]Nutzungsbedingungen[/tos] einverstanden"
        },
        x4 = {
            ERROR: $4,
            FORM: L4,
            MENU: P4,
            STATUS: D4,
            SUBMIT: k4,
            WARNING: M4
        },
        U4 = {
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
        F4 = {
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
        B4 = {
            APPEARANCE: "APPEARANCE",
            HELP: "AYUDA",
            TWITCH: "TWITCH",
            LOGOUT: "CERRAR SESI\xD3N",
            MERCH: "MERCHANDISING",
            PAST_GAMES: "PARTIDAS ANTERIORES",
            MAILING_LIST: "LISTA DE CORREO",
            MODERATOR: "MODERADOR"
        },
        G4 = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        W4 = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE COMO P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        j4 = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        H4 = {
            ERROR: U4,
            FORM: F4,
            MENU: B4,
            STATUS: G4,
            SUBMIT: W4,
            WARNING: j4
        },
        K4 = {
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
        V4 = {
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
        Y4 = {
            APPEARANCE: "APPEARANCE",
            HELP: "AYUDA",
            TWITCH: "TWITCH",
            LOGOUT: "CERRAR SESI\xD3N",
            MERCH: "MERCHANDISING",
            PAST_GAMES: "PARTIDAS ANTERIORES",
            MAILING_LIST: "LISTA DE CORREO",
            MODERATOR: "MODERADOR"
        },
        q4 = {
            GAME_FULL: "La partida est\xE1 completa",
            GAME_STARTED: "La partida ha empezado",
            ROOM_NOT_FOUND: "No se encuentra la sala"
        },
        z4 = {
            GAME_FULL: "LA PARTIDA EST\xC1 COMPLETA",
            GAME_STARTED: "LA PARTIDA HA EMPEZADO",
            JOIN_AUDIENCE: "UNIRSE AL P\xDABLICO",
            RECONNECT: "RECONECTAR",
            TWITCH_LOGIN: "INICIAR SESI\xD3N CON TWITCH"
        },
        X4 = {
            CAMERA: "[b]AVISO:[/b] No se detecta ninguna c\xE1mara, pero puedes jugar sin hacerte una foto. Si crees que se trata de un error, cambia de navegador.",
            STYLE: "[b]AVISO:[/b] Tu navegador est\xE1 un poco desactualizado, as\xED que es posible que el juego no se vea del todo bien.",
            TOS: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]"
        },
        J4 = {
            ERROR: K4,
            FORM: V4,
            MENU: Y4,
            STATUS: q4,
            SUBMIT: z4,
            WARNING: X4
        },
        Z4 = {
            en: m4,
            fr: S4,
            it: N4,
            de: x4,
            es: H4,
            "es-XL": J4
        },
        Q4 = tt({
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
        gt = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        eH = {
            class: "choices"
        },
        tH = {
            class: "constrain"
        },
        rH = {
            key: 0
        },
        nH = ["disabled", "onClick"];

    function iH(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", eH, [X("div", tH, [e.player.prompt ? Ke((ne(), oe("p", rH, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), (ne(!0), oe(Ot, null, fo(e.player.choices, (u, f) => (ne(), oe("button", {
            key: f,
            class: Ge({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Jr(h => e.onChoiceClick(f), ["prevent"])
        }, Xe(u.text), 11, nH))), 128))])])
    }
    const sH = gt(Q4, [
            ["render", iH]
        ]),
        aH = tt({
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
                    this.canvas = Bn(new HS(e, this.player.doodle, this.canvasOptions))
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
        oH = {
            class: "doodle"
        },
        cH = {
            ref: "canvas"
        },
        lH = ["disabled"],
        uH = ["disabled"];

    function fH(e, t, r, n, s, o) {
        const c = Ht("pointerbox-translate"),
            u = Ht("pointerbox"),
            f = Ht("t");
        return ne(), oe("div", oH, [Ke((ne(), oe("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ke(X("canvas", cH, null, 512), [
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
        }, null, 8, lH)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? We("", !0) : Ke((ne(), oe("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Jr((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, uH)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const dH = gt(aH, [
        ["render", fH]
    ]);
    var Fd = {
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
                y = 1,
                b = 2,
                R = 4,
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
                Ce = 30,
                Ie = "...",
                fe = 800,
                Ae = 16,
                F = 1,
                re = 2,
                de = 3,
                ye = 1 / 0,
                me = 9007199254740991,
                Se = 17976931348623157e292,
                ke = 0 / 0,
                Fe = 4294967295,
                et = Fe - 1,
                wt = Fe >>> 1,
                Ar = [
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
                vr = "[object Array]",
                at = "[object AsyncFunction]",
                Tt = "[object Boolean]",
                ot = "[object Date]",
                Mt = "[object DOMException]",
                Yt = "[object Error]",
                xt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                M = "[object Null]",
                B = "[object Object]",
                V = "[object Promise]",
                le = "[object Proxy]",
                ie = "[object RegExp]",
                ee = "[object Set]",
                w = "[object String]",
                j = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Re = "[object WeakSet]",
                Pe = "[object ArrayBuffer]",
                A = "[object DataView]",
                T = "[object Float32Array]",
                $ = "[object Float64Array]",
                S = "[object Int8Array]",
                L = "[object Int16Array]",
                J = "[object Int32Array]",
                te = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ut = "[object Uint32Array]",
                sr = /\b__p \+= '';/g,
                De = /\b(__p \+=) '' \+/g,
                fa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Gp = /&(?:amp|lt|gt|quot|#39);/g,
                Wp = /[&<>"']/g,
                A1 = RegExp(Gp.source),
                I1 = RegExp(Wp.source),
                C1 = /<%-([\s\S]+?)%>/g,
                R1 = /<%([\s\S]+?)%>/g,
                jp = /<%=([\s\S]+?)%>/g,
                w1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                N1 = /^\w*$/,
                $1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Zl = /[\\^$.*+?()[\]{}|]/g,
                L1 = RegExp(Zl.source),
                Ql = /^\s+/,
                P1 = /\s/,
                D1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                k1 = /\{\n\/\* \[wrapped with (.+)\] \*/,
                M1 = /,? & /,
                x1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                U1 = /[()=,{}\[\]\/\s]/,
                F1 = /\\(\\)?/g,
                B1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Hp = /\w*$/,
                G1 = /^[-+]0x[0-9a-f]+$/i,
                W1 = /^0b[01]+$/i,
                j1 = /^\[object .+?Constructor\]$/,
                H1 = /^0o[0-7]+$/i,
                K1 = /^(?:0|[1-9]\d*)$/,
                V1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Co = /($^)/,
                Y1 = /['\n\r\u2028\u2029\\]/g,
                Ro = "\\ud800-\\udfff",
                q1 = "\\u0300-\\u036f",
                z1 = "\\ufe20-\\ufe2f",
                X1 = "\\u20d0-\\u20ff",
                Kp = q1 + z1 + X1,
                Vp = "\\u2700-\\u27bf",
                Yp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                J1 = "\\xac\\xb1\\xd7\\xf7",
                Z1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                Q1 = "\\u2000-\\u206f",
                eA = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                qp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                zp = "\\ufe0e\\ufe0f",
                Xp = J1 + Z1 + Q1 + eA,
                eu = "['\u2019]",
                tA = "[" + Ro + "]",
                Jp = "[" + Xp + "]",
                wo = "[" + Kp + "]",
                Zp = "\\d+",
                rA = "[" + Vp + "]",
                Qp = "[" + Yp + "]",
                eg = "[^" + Ro + Xp + Zp + Vp + Yp + qp + "]",
                tu = "\\ud83c[\\udffb-\\udfff]",
                nA = "(?:" + wo + "|" + tu + ")",
                tg = "[^" + Ro + "]",
                ru = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                nu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                cs = "[" + qp + "]",
                rg = "\\u200d",
                ng = "(?:" + Qp + "|" + eg + ")",
                iA = "(?:" + cs + "|" + eg + ")",
                ig = "(?:" + eu + "(?:d|ll|m|re|s|t|ve))?",
                sg = "(?:" + eu + "(?:D|LL|M|RE|S|T|VE))?",
                ag = nA + "?",
                og = "[" + zp + "]?",
                sA = "(?:" + rg + "(?:" + [tg, ru, nu].join("|") + ")" + og + ag + ")*",
                aA = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                oA = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                cg = og + ag + sA,
                cA = "(?:" + [rA, ru, nu].join("|") + ")" + cg,
                lA = "(?:" + [tg + wo + "?", wo, ru, nu, tA].join("|") + ")",
                uA = RegExp(eu, "g"),
                fA = RegExp(wo, "g"),
                iu = RegExp(tu + "(?=" + tu + ")|" + lA + cg, "g"),
                dA = RegExp([cs + "?" + Qp + "+" + ig + "(?=" + [Jp, cs, "$"].join("|") + ")", iA + "+" + sg + "(?=" + [Jp, cs + ng, "$"].join("|") + ")", cs + "?" + ng + "+" + ig, cs + "+" + sg, oA, aA, Zp, cA].join("|"), "g"),
                hA = RegExp("[" + rg + Ro + Kp + zp + "]"),
                pA = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                gA = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                mA = -1,
                Et = {};
            Et[T] = Et[$] = Et[S] = Et[L] = Et[J] = Et[te] = Et[_e] = Et[Te] = Et[ut] = !0, Et[ir] = Et[vr] = Et[Pe] = Et[Tt] = Et[A] = Et[ot] = Et[Yt] = Et[xt] = Et[p] = Et[O] = Et[B] = Et[ie] = Et[ee] = Et[w] = Et[pe] = !1;
            var mt = {};
            mt[ir] = mt[vr] = mt[Pe] = mt[A] = mt[Tt] = mt[ot] = mt[T] = mt[$] = mt[S] = mt[L] = mt[J] = mt[p] = mt[O] = mt[B] = mt[ie] = mt[ee] = mt[w] = mt[j] = mt[te] = mt[_e] = mt[Te] = mt[ut] = !0, mt[Yt] = mt[xt] = mt[pe] = !1;
            var vA = {
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
                _A = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                yA = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                EA = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                bA = parseFloat,
                TA = parseInt,
                lg = typeof kt == "object" && kt && kt.Object === Object && kt,
                SA = typeof self == "object" && self && self.Object === Object && self,
                Qt = lg || SA || Function("return this")(),
                su = t && !t.nodeType && t,
                Ii = su && !0 && e && !e.nodeType && e,
                ug = Ii && Ii.exports === su,
                au = ug && lg.process,
                xr = function() {
                    try {
                        var D = Ii && Ii.require && Ii.require("util").types;
                        return D || au && au.binding && au.binding("util")
                    } catch {}
                }(),
                fg = xr && xr.isArrayBuffer,
                dg = xr && xr.isDate,
                hg = xr && xr.isMap,
                pg = xr && xr.isRegExp,
                gg = xr && xr.isSet,
                mg = xr && xr.isTypedArray;

            function Ir(D, q, K) {
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

            function OA(D, q, K, be) {
                for (var Me = -1, it = D == null ? 0 : D.length; ++Me < it;) {
                    var Ft = D[Me];
                    q(be, Ft, K(Ft), D)
                }
                return be
            }

            function Ur(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length; ++K < be && q(D[K], K, D) !== !1;);
                return D
            }

            function AA(D, q) {
                for (var K = D == null ? 0 : D.length; K-- && q(D[K], K, D) !== !1;);
                return D
            }

            function vg(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length; ++K < be;)
                    if (!q(D[K], K, D)) return !1;
                return !0
            }

            function Wn(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length, Me = 0, it = []; ++K < be;) {
                    var Ft = D[K];
                    q(Ft, K, D) && (it[Me++] = Ft)
                }
                return it
            }

            function No(D, q) {
                var K = D == null ? 0 : D.length;
                return !!K && ls(D, q, 0) > -1
            }

            function ou(D, q, K) {
                for (var be = -1, Me = D == null ? 0 : D.length; ++be < Me;)
                    if (K(q, D[be])) return !0;
                return !1
            }

            function St(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length, Me = Array(be); ++K < be;) Me[K] = q(D[K], K, D);
                return Me
            }

            function jn(D, q) {
                for (var K = -1, be = q.length, Me = D.length; ++K < be;) D[Me + K] = q[K];
                return D
            }

            function cu(D, q, K, be) {
                var Me = -1,
                    it = D == null ? 0 : D.length;
                for (be && it && (K = D[++Me]); ++Me < it;) K = q(K, D[Me], Me, D);
                return K
            }

            function IA(D, q, K, be) {
                var Me = D == null ? 0 : D.length;
                for (be && Me && (K = D[--Me]); Me--;) K = q(K, D[Me], Me, D);
                return K
            }

            function lu(D, q) {
                for (var K = -1, be = D == null ? 0 : D.length; ++K < be;)
                    if (q(D[K], K, D)) return !0;
                return !1
            }
            var CA = uu("length");

            function RA(D) {
                return D.split("")
            }

            function wA(D) {
                return D.match(x1) || []
            }

            function _g(D, q, K) {
                var be;
                return K(D, function(Me, it, Ft) {
                    if (q(Me, it, Ft)) return be = it, !1
                }), be
            }

            function $o(D, q, K, be) {
                for (var Me = D.length, it = K + (be ? 1 : -1); be ? it-- : ++it < Me;)
                    if (q(D[it], it, D)) return it;
                return -1
            }

            function ls(D, q, K) {
                return q === q ? GA(D, q, K) : $o(D, yg, K)
            }

            function NA(D, q, K, be) {
                for (var Me = K - 1, it = D.length; ++Me < it;)
                    if (be(D[Me], q)) return Me;
                return -1
            }

            function yg(D) {
                return D !== D
            }

            function Eg(D, q) {
                var K = D == null ? 0 : D.length;
                return K ? du(D, q) / K : ke
            }

            function uu(D) {
                return function(q) {
                    return q == null ? r : q[D]
                }
            }

            function fu(D) {
                return function(q) {
                    return D == null ? r : D[q]
                }
            }

            function bg(D, q, K, be, Me) {
                return Me(D, function(it, Ft, ht) {
                    K = be ? (be = !1, it) : q(K, it, Ft, ht)
                }), K
            }

            function $A(D, q) {
                var K = D.length;
                for (D.sort(q); K--;) D[K] = D[K].value;
                return D
            }

            function du(D, q) {
                for (var K, be = -1, Me = D.length; ++be < Me;) {
                    var it = q(D[be]);
                    it !== r && (K = K === r ? it : K + it)
                }
                return K
            }

            function hu(D, q) {
                for (var K = -1, be = Array(D); ++K < D;) be[K] = q(K);
                return be
            }

            function LA(D, q) {
                return St(q, function(K) {
                    return [K, D[K]]
                })
            }

            function Tg(D) {
                return D && D.slice(0, Ig(D) + 1).replace(Ql, "")
            }

            function Cr(D) {
                return function(q) {
                    return D(q)
                }
            }

            function pu(D, q) {
                return St(q, function(K) {
                    return D[K]
                })
            }

            function da(D, q) {
                return D.has(q)
            }

            function Sg(D, q) {
                for (var K = -1, be = D.length; ++K < be && ls(q, D[K], 0) > -1;);
                return K
            }

            function Og(D, q) {
                for (var K = D.length; K-- && ls(q, D[K], 0) > -1;);
                return K
            }

            function PA(D, q) {
                for (var K = D.length, be = 0; K--;) D[K] === q && ++be;
                return be
            }
            var DA = fu(vA),
                kA = fu(_A);

            function MA(D) {
                return "\\" + EA[D]
            }

            function xA(D, q) {
                return D == null ? r : D[q]
            }

            function us(D) {
                return hA.test(D)
            }

            function UA(D) {
                return pA.test(D)
            }

            function FA(D) {
                for (var q, K = []; !(q = D.next()).done;) K.push(q.value);
                return K
            }

            function gu(D) {
                var q = -1,
                    K = Array(D.size);
                return D.forEach(function(be, Me) {
                    K[++q] = [Me, be]
                }), K
            }

            function Ag(D, q) {
                return function(K) {
                    return D(q(K))
                }
            }

            function Hn(D, q) {
                for (var K = -1, be = D.length, Me = 0, it = []; ++K < be;) {
                    var Ft = D[K];
                    (Ft === q || Ft === g) && (D[K] = g, it[Me++] = K)
                }
                return it
            }

            function Lo(D) {
                var q = -1,
                    K = Array(D.size);
                return D.forEach(function(be) {
                    K[++q] = be
                }), K
            }

            function BA(D) {
                var q = -1,
                    K = Array(D.size);
                return D.forEach(function(be) {
                    K[++q] = [be, be]
                }), K
            }

            function GA(D, q, K) {
                for (var be = K - 1, Me = D.length; ++be < Me;)
                    if (D[be] === q) return be;
                return -1
            }

            function WA(D, q, K) {
                for (var be = K + 1; be--;)
                    if (D[be] === q) return be;
                return be
            }

            function fs(D) {
                return us(D) ? HA(D) : CA(D)
            }

            function Qr(D) {
                return us(D) ? KA(D) : RA(D)
            }

            function Ig(D) {
                for (var q = D.length; q-- && P1.test(D.charAt(q)););
                return q
            }
            var jA = fu(yA);

            function HA(D) {
                for (var q = iu.lastIndex = 0; iu.test(D);) ++q;
                return q
            }

            function KA(D) {
                return D.match(iu) || []
            }

            function VA(D) {
                return D.match(dA) || []
            }
            var YA = function D(q) {
                    q = q == null ? Qt : ds.defaults(Qt.Object(), q, ds.pick(Qt, gA));
                    var K = q.Array,
                        be = q.Date,
                        Me = q.Error,
                        it = q.Function,
                        Ft = q.Math,
                        ht = q.Object,
                        mu = q.RegExp,
                        qA = q.String,
                        Fr = q.TypeError,
                        Po = K.prototype,
                        zA = it.prototype,
                        hs = ht.prototype,
                        Do = q["__core-js_shared__"],
                        ko = zA.toString,
                        ft = hs.hasOwnProperty,
                        XA = 0,
                        Cg = function() {
                            var i = /[^.]+$/.exec(Do && Do.keys && Do.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Mo = hs.toString,
                        JA = ko.call(ht),
                        ZA = Qt._,
                        QA = mu("^" + ko.call(ft).replace(Zl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        xo = ug ? q.Buffer : r,
                        Kn = q.Symbol,
                        Uo = q.Uint8Array,
                        Rg = xo ? xo.allocUnsafe : r,
                        Fo = Ag(ht.getPrototypeOf, ht),
                        wg = ht.create,
                        Ng = hs.propertyIsEnumerable,
                        Bo = Po.splice,
                        $g = Kn ? Kn.isConcatSpreadable : r,
                        ha = Kn ? Kn.iterator : r,
                        Ci = Kn ? Kn.toStringTag : r,
                        Go = function() {
                            try {
                                var i = Li(ht, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        eI = q.clearTimeout !== Qt.clearTimeout && q.clearTimeout,
                        tI = be && be.now !== Qt.Date.now && be.now,
                        rI = q.setTimeout !== Qt.setTimeout && q.setTimeout,
                        Wo = Ft.ceil,
                        jo = Ft.floor,
                        vu = ht.getOwnPropertySymbols,
                        nI = xo ? xo.isBuffer : r,
                        Lg = q.isFinite,
                        iI = Po.join,
                        sI = Ag(ht.keys, ht),
                        Bt = Ft.max,
                        ar = Ft.min,
                        aI = be.now,
                        oI = q.parseInt,
                        Pg = Ft.random,
                        cI = Po.reverse,
                        _u = Li(q, "DataView"),
                        pa = Li(q, "Map"),
                        yu = Li(q, "Promise"),
                        ps = Li(q, "Set"),
                        ga = Li(q, "WeakMap"),
                        ma = Li(ht, "create"),
                        Ho = ga && new ga,
                        gs = {},
                        lI = Pi(_u),
                        uI = Pi(pa),
                        fI = Pi(yu),
                        dI = Pi(ps),
                        hI = Pi(ga),
                        Ko = Kn ? Kn.prototype : r,
                        va = Ko ? Ko.valueOf : r,
                        Dg = Ko ? Ko.toString : r;

                    function _(i) {
                        if (Nt(i) && !Ue(i) && !(i instanceof qe)) {
                            if (i instanceof Br) return i;
                            if (ft.call(i, "__wrapped__")) return km(i)
                        }
                        return new Br(i)
                    }
                    var ms = function() {
                        function i() {}
                        return function(a) {
                            if (!It(a)) return {};
                            if (wg) return wg(a);
                            i.prototype = a;
                            var l = new i;
                            return i.prototype = r, l
                        }
                    }();

                    function Vo() {}

                    function Br(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: C1,
                        evaluate: R1,
                        interpolate: jp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = Vo.prototype, _.prototype.constructor = _, Br.prototype = ms(Vo.prototype), Br.prototype.constructor = Br;

                    function qe(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Fe, this.__views__ = []
                    }

                    function pI() {
                        var i = new qe(this.__wrapped__);
                        return i.__actions__ = _r(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = _r(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = _r(this.__views__), i
                    }

                    function gI() {
                        if (this.__filtered__) {
                            var i = new qe(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function mI() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            l = Ue(i),
                            d = a < 0,
                            v = l ? i.length : 0,
                            E = RC(0, v, this.__views__),
                            C = E.start,
                            N = E.end,
                            k = N - C,
                            Z = d ? N : C - 1,
                            Q = this.__iteratees__,
                            se = Q.length,
                            ge = 0,
                            Oe = ar(k, this.__takeCount__);
                        if (!l || !d && v == k && Oe == k) return im(i, this.__actions__);
                        var Ne = [];
                        e: for (; k-- && ge < Oe;) {
                            Z += a;
                            for (var He = -1, $e = i[Z]; ++He < se;) {
                                var Ye = Q[He],
                                    ze = Ye.iteratee,
                                    Nr = Ye.type,
                                    hr = ze($e);
                                if (Nr == re) $e = hr;
                                else if (!hr) {
                                    if (Nr == F) continue e;
                                    break e
                                }
                            }
                            Ne[ge++] = $e
                        }
                        return Ne
                    }
                    qe.prototype = ms(Vo.prototype), qe.prototype.constructor = qe;

                    function Ri(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function vI() {
                        this.__data__ = ma ? ma(null) : {}, this.size = 0
                    }

                    function _I(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function yI(i) {
                        var a = this.__data__;
                        if (ma) {
                            var l = a[i];
                            return l === f ? r : l
                        }
                        return ft.call(a, i) ? a[i] : r
                    }

                    function EI(i) {
                        var a = this.__data__;
                        return ma ? a[i] !== r : ft.call(a, i)
                    }

                    function bI(i, a) {
                        var l = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, l[i] = ma && a === r ? f : a, this
                    }
                    Ri.prototype.clear = vI, Ri.prototype.delete = _I, Ri.prototype.get = yI, Ri.prototype.has = EI, Ri.prototype.set = bI;

                    function On(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function TI() {
                        this.__data__ = [], this.size = 0
                    }

                    function SI(i) {
                        var a = this.__data__,
                            l = Yo(a, i);
                        if (l < 0) return !1;
                        var d = a.length - 1;
                        return l == d ? a.pop() : Bo.call(a, l, 1), --this.size, !0
                    }

                    function OI(i) {
                        var a = this.__data__,
                            l = Yo(a, i);
                        return l < 0 ? r : a[l][1]
                    }

                    function AI(i) {
                        return Yo(this.__data__, i) > -1
                    }

                    function II(i, a) {
                        var l = this.__data__,
                            d = Yo(l, i);
                        return d < 0 ? (++this.size, l.push([i, a])) : l[d][1] = a, this
                    }
                    On.prototype.clear = TI, On.prototype.delete = SI, On.prototype.get = OI, On.prototype.has = AI, On.prototype.set = II;

                    function An(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function CI() {
                        this.size = 0, this.__data__ = {
                            hash: new Ri,
                            map: new(pa || On),
                            string: new Ri
                        }
                    }

                    function RI(i) {
                        var a = sc(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function wI(i) {
                        return sc(this, i).get(i)
                    }

                    function NI(i) {
                        return sc(this, i).has(i)
                    }

                    function $I(i, a) {
                        var l = sc(this, i),
                            d = l.size;
                        return l.set(i, a), this.size += l.size == d ? 0 : 1, this
                    }
                    An.prototype.clear = CI, An.prototype.delete = RI, An.prototype.get = wI, An.prototype.has = NI, An.prototype.set = $I;

                    function wi(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.__data__ = new An; ++a < l;) this.add(i[a])
                    }

                    function LI(i) {
                        return this.__data__.set(i, f), this
                    }

                    function PI(i) {
                        return this.__data__.has(i)
                    }
                    wi.prototype.add = wi.prototype.push = LI, wi.prototype.has = PI;

                    function en(i) {
                        var a = this.__data__ = new On(i);
                        this.size = a.size
                    }

                    function DI() {
                        this.__data__ = new On, this.size = 0
                    }

                    function kI(i) {
                        var a = this.__data__,
                            l = a.delete(i);
                        return this.size = a.size, l
                    }

                    function MI(i) {
                        return this.__data__.get(i)
                    }

                    function xI(i) {
                        return this.__data__.has(i)
                    }

                    function UI(i, a) {
                        var l = this.__data__;
                        if (l instanceof On) {
                            var d = l.__data__;
                            if (!pa || d.length < s - 1) return d.push([i, a]), this.size = ++l.size, this;
                            l = this.__data__ = new An(d)
                        }
                        return l.set(i, a), this.size = l.size, this
                    }
                    en.prototype.clear = DI, en.prototype.delete = kI, en.prototype.get = MI, en.prototype.has = xI, en.prototype.set = UI;

                    function kg(i, a) {
                        var l = Ue(i),
                            d = !l && Di(i),
                            v = !l && !d && Xn(i),
                            E = !l && !d && !v && Es(i),
                            C = l || d || v || E,
                            N = C ? hu(i.length, qA) : [],
                            k = N.length;
                        for (var Z in i)(a || ft.call(i, Z)) && !(C && (Z == "length" || v && (Z == "offset" || Z == "parent") || E && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || wn(Z, k))) && N.push(Z);
                        return N
                    }

                    function Mg(i) {
                        var a = i.length;
                        return a ? i[Nu(0, a - 1)] : r
                    }

                    function FI(i, a) {
                        return ac(_r(i), Ni(a, 0, i.length))
                    }

                    function BI(i) {
                        return ac(_r(i))
                    }

                    function Eu(i, a, l) {
                        (l !== r && !tn(i[a], l) || l === r && !(a in i)) && In(i, a, l)
                    }

                    function _a(i, a, l) {
                        var d = i[a];
                        (!(ft.call(i, a) && tn(d, l)) || l === r && !(a in i)) && In(i, a, l)
                    }

                    function Yo(i, a) {
                        for (var l = i.length; l--;)
                            if (tn(i[l][0], a)) return l;
                        return -1
                    }

                    function GI(i, a, l, d) {
                        return Vn(i, function(v, E, C) {
                            a(d, v, l(v), C)
                        }), d
                    }

                    function xg(i, a) {
                        return i && pn(a, qt(a), i)
                    }

                    function WI(i, a) {
                        return i && pn(a, Er(a), i)
                    }

                    function In(i, a, l) {
                        a == "__proto__" && Go ? Go(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : i[a] = l
                    }

                    function bu(i, a) {
                        for (var l = -1, d = a.length, v = K(d), E = i == null; ++l < d;) v[l] = E ? r : tf(i, a[l]);
                        return v
                    }

                    function Ni(i, a, l) {
                        return i === i && (l !== r && (i = i <= l ? i : l), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Gr(i, a, l, d, v, E) {
                        var C, N = a & y,
                            k = a & b,
                            Z = a & R;
                        if (l && (C = v ? l(i, d, v, E) : l(i)), C !== r) return C;
                        if (!It(i)) return i;
                        var Q = Ue(i);
                        if (Q) {
                            if (C = NC(i), !N) return _r(i, C)
                        } else {
                            var se = or(i),
                                ge = se == xt || se == m;
                            if (Xn(i)) return om(i, N);
                            if (se == B || se == ir || ge && !v) {
                                if (C = k || ge ? {} : Im(i), !N) return k ? yC(i, WI(C, i)) : _C(i, xg(C, i))
                            } else {
                                if (!mt[se]) return v ? i : {};
                                C = $C(i, se, N)
                            }
                        }
                        E || (E = new en);
                        var Oe = E.get(i);
                        if (Oe) return Oe;
                        E.set(i, C), tv(i) ? i.forEach(function($e) {
                            C.add(Gr($e, a, l, $e, i, E))
                        }) : Qm(i) && i.forEach(function($e, Ye) {
                            C.set(Ye, Gr($e, a, l, Ye, i, E))
                        });
                        var Ne = Z ? k ? Gu : Bu : k ? Er : qt,
                            He = Q ? r : Ne(i);
                        return Ur(He || i, function($e, Ye) {
                            He && (Ye = $e, $e = i[Ye]), _a(C, Ye, Gr($e, a, l, Ye, i, E))
                        }), C
                    }

                    function jI(i) {
                        var a = qt(i);
                        return function(l) {
                            return Ug(l, i, a)
                        }
                    }

                    function Ug(i, a, l) {
                        var d = l.length;
                        if (i == null) return !d;
                        for (i = ht(i); d--;) {
                            var v = l[d],
                                E = a[v],
                                C = i[v];
                            if (C === r && !(v in i) || !E(C)) return !1
                        }
                        return !0
                    }

                    function Fg(i, a, l) {
                        if (typeof i != "function") throw new Fr(c);
                        return Aa(function() {
                            i.apply(r, l)
                        }, a)
                    }

                    function ya(i, a, l, d) {
                        var v = -1,
                            E = No,
                            C = !0,
                            N = i.length,
                            k = [],
                            Z = a.length;
                        if (!N) return k;
                        l && (a = St(a, Cr(l))), d ? (E = ou, C = !1) : a.length >= s && (E = da, C = !1, a = new wi(a));
                        e: for (; ++v < N;) {
                            var Q = i[v],
                                se = l == null ? Q : l(Q);
                            if (Q = d || Q !== 0 ? Q : 0, C && se === se) {
                                for (var ge = Z; ge--;)
                                    if (a[ge] === se) continue e;
                                k.push(Q)
                            } else E(a, se, d) || k.push(Q)
                        }
                        return k
                    }
                    var Vn = dm(hn),
                        Bg = dm(Su, !0);

                    function HI(i, a) {
                        var l = !0;
                        return Vn(i, function(d, v, E) {
                            return l = !!a(d, v, E), l
                        }), l
                    }

                    function qo(i, a, l) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var E = i[d],
                                C = a(E);
                            if (C != null && (N === r ? C === C && !wr(C) : l(C, N))) var N = C,
                                k = E
                        }
                        return k
                    }

                    function KI(i, a, l, d) {
                        var v = i.length;
                        for (l = Be(l), l < 0 && (l = -l > v ? 0 : v + l), d = d === r || d > v ? v : Be(d), d < 0 && (d += v), d = l > d ? 0 : nv(d); l < d;) i[l++] = a;
                        return i
                    }

                    function Gg(i, a) {
                        var l = [];
                        return Vn(i, function(d, v, E) {
                            a(d, v, E) && l.push(d)
                        }), l
                    }

                    function er(i, a, l, d, v) {
                        var E = -1,
                            C = i.length;
                        for (l || (l = PC), v || (v = []); ++E < C;) {
                            var N = i[E];
                            a > 0 && l(N) ? a > 1 ? er(N, a - 1, l, d, v) : jn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var Tu = hm(),
                        Wg = hm(!0);

                    function hn(i, a) {
                        return i && Tu(i, a, qt)
                    }

                    function Su(i, a) {
                        return i && Wg(i, a, qt)
                    }

                    function zo(i, a) {
                        return Wn(a, function(l) {
                            return Nn(i[l])
                        })
                    }

                    function $i(i, a) {
                        a = qn(a, i);
                        for (var l = 0, d = a.length; i != null && l < d;) i = i[gn(a[l++])];
                        return l && l == d ? i : r
                    }

                    function jg(i, a, l) {
                        var d = a(i);
                        return Ue(i) ? d : jn(d, l(i))
                    }

                    function fr(i) {
                        return i == null ? i === r ? he : M : Ci && Ci in ht(i) ? CC(i) : BC(i)
                    }

                    function Ou(i, a) {
                        return i > a
                    }

                    function VI(i, a) {
                        return i != null && ft.call(i, a)
                    }

                    function YI(i, a) {
                        return i != null && a in ht(i)
                    }

                    function qI(i, a, l) {
                        return i >= ar(a, l) && i < Bt(a, l)
                    }

                    function Au(i, a, l) {
                        for (var d = l ? ou : No, v = i[0].length, E = i.length, C = E, N = K(E), k = 1 / 0, Z = []; C--;) {
                            var Q = i[C];
                            C && a && (Q = St(Q, Cr(a))), k = ar(Q.length, k), N[C] = !l && (a || v >= 120 && Q.length >= 120) ? new wi(C && Q) : r
                        }
                        Q = i[0];
                        var se = -1,
                            ge = N[0];
                        e: for (; ++se < v && Z.length < k;) {
                            var Oe = Q[se],
                                Ne = a ? a(Oe) : Oe;
                            if (Oe = l || Oe !== 0 ? Oe : 0, !(ge ? da(ge, Ne) : d(Z, Ne, l))) {
                                for (C = E; --C;) {
                                    var He = N[C];
                                    if (!(He ? da(He, Ne) : d(i[C], Ne, l))) continue e
                                }
                                ge && ge.push(Ne), Z.push(Oe)
                            }
                        }
                        return Z
                    }

                    function zI(i, a, l, d) {
                        return hn(i, function(v, E, C) {
                            a(d, l(v), E, C)
                        }), d
                    }

                    function Ea(i, a, l) {
                        a = qn(a, i), i = Nm(i, a);
                        var d = i == null ? i : i[gn(jr(a))];
                        return d == null ? r : Ir(d, i, l)
                    }

                    function Hg(i) {
                        return Nt(i) && fr(i) == ir
                    }

                    function XI(i) {
                        return Nt(i) && fr(i) == Pe
                    }

                    function JI(i) {
                        return Nt(i) && fr(i) == ot
                    }

                    function ba(i, a, l, d, v) {
                        return i === a ? !0 : i == null || a == null || !Nt(i) && !Nt(a) ? i !== i && a !== a : ZI(i, a, l, d, ba, v)
                    }

                    function ZI(i, a, l, d, v, E) {
                        var C = Ue(i),
                            N = Ue(a),
                            k = C ? vr : or(i),
                            Z = N ? vr : or(a);
                        k = k == ir ? B : k, Z = Z == ir ? B : Z;
                        var Q = k == B,
                            se = Z == B,
                            ge = k == Z;
                        if (ge && Xn(i)) {
                            if (!Xn(a)) return !1;
                            C = !0, Q = !1
                        }
                        if (ge && !Q) return E || (E = new en), C || Es(i) ? Sm(i, a, l, d, v, E) : AC(i, a, k, l, d, v, E);
                        if (!(l & P)) {
                            var Oe = Q && ft.call(i, "__wrapped__"),
                                Ne = se && ft.call(a, "__wrapped__");
                            if (Oe || Ne) {
                                var He = Oe ? i.value() : i,
                                    $e = Ne ? a.value() : a;
                                return E || (E = new en), v(He, $e, l, d, E)
                            }
                        }
                        return ge ? (E || (E = new en), IC(i, a, l, d, v, E)) : !1
                    }

                    function QI(i) {
                        return Nt(i) && or(i) == p
                    }

                    function Iu(i, a, l, d) {
                        var v = l.length,
                            E = v,
                            C = !d;
                        if (i == null) return !E;
                        for (i = ht(i); v--;) {
                            var N = l[v];
                            if (C && N[2] ? N[1] !== i[N[0]] : !(N[0] in i)) return !1
                        }
                        for (; ++v < E;) {
                            N = l[v];
                            var k = N[0],
                                Z = i[k],
                                Q = N[1];
                            if (C && N[2]) {
                                if (Z === r && !(k in i)) return !1
                            } else {
                                var se = new en;
                                if (d) var ge = d(Z, Q, k, i, a, se);
                                if (!(ge === r ? ba(Q, Z, P | x, d, se) : ge)) return !1
                            }
                        }
                        return !0
                    }

                    function Kg(i) {
                        if (!It(i) || kC(i)) return !1;
                        var a = Nn(i) ? QA : j1;
                        return a.test(Pi(i))
                    }

                    function eC(i) {
                        return Nt(i) && fr(i) == ie
                    }

                    function tC(i) {
                        return Nt(i) && or(i) == ee
                    }

                    function rC(i) {
                        return Nt(i) && dc(i.length) && !!Et[fr(i)]
                    }

                    function Vg(i) {
                        return typeof i == "function" ? i : i == null ? br : typeof i == "object" ? Ue(i) ? zg(i[0], i[1]) : qg(i) : pv(i)
                    }

                    function Cu(i) {
                        if (!Oa(i)) return sI(i);
                        var a = [];
                        for (var l in ht(i)) ft.call(i, l) && l != "constructor" && a.push(l);
                        return a
                    }

                    function nC(i) {
                        if (!It(i)) return FC(i);
                        var a = Oa(i),
                            l = [];
                        for (var d in i) d == "constructor" && (a || !ft.call(i, d)) || l.push(d);
                        return l
                    }

                    function Ru(i, a) {
                        return i < a
                    }

                    function Yg(i, a) {
                        var l = -1,
                            d = yr(i) ? K(i.length) : [];
                        return Vn(i, function(v, E, C) {
                            d[++l] = a(v, E, C)
                        }), d
                    }

                    function qg(i) {
                        var a = ju(i);
                        return a.length == 1 && a[0][2] ? Rm(a[0][0], a[0][1]) : function(l) {
                            return l === i || Iu(l, i, a)
                        }
                    }

                    function zg(i, a) {
                        return Ku(i) && Cm(a) ? Rm(gn(i), a) : function(l) {
                            var d = tf(l, i);
                            return d === r && d === a ? rf(l, i) : ba(a, d, P | x)
                        }
                    }

                    function Xo(i, a, l, d, v) {
                        i !== a && Tu(a, function(E, C) {
                            if (v || (v = new en), It(E)) iC(i, a, C, l, Xo, d, v);
                            else {
                                var N = d ? d(Yu(i, C), E, C + "", i, a, v) : r;
                                N === r && (N = E), Eu(i, C, N)
                            }
                        }, Er)
                    }

                    function iC(i, a, l, d, v, E, C) {
                        var N = Yu(i, l),
                            k = Yu(a, l),
                            Z = C.get(k);
                        if (Z) {
                            Eu(i, l, Z);
                            return
                        }
                        var Q = E ? E(N, k, l + "", i, a, C) : r,
                            se = Q === r;
                        if (se) {
                            var ge = Ue(k),
                                Oe = !ge && Xn(k),
                                Ne = !ge && !Oe && Es(k);
                            Q = k, ge || Oe || Ne ? Ue(N) ? Q = N : Lt(N) ? Q = _r(N) : Oe ? (se = !1, Q = om(k, !0)) : Ne ? (se = !1, Q = cm(k, !0)) : Q = [] : Ia(k) || Di(k) ? (Q = N, Di(N) ? Q = iv(N) : (!It(N) || Nn(N)) && (Q = Im(k))) : se = !1
                        }
                        se && (C.set(k, Q), v(Q, k, d, E, C), C.delete(k)), Eu(i, l, Q)
                    }

                    function Xg(i, a) {
                        var l = i.length;
                        if (!!l) return a += a < 0 ? l : 0, wn(a, l) ? i[a] : r
                    }

                    function Jg(i, a, l) {
                        a.length ? a = St(a, function(E) {
                            return Ue(E) ? function(C) {
                                return $i(C, E.length === 1 ? E[0] : E)
                            } : E
                        }) : a = [br];
                        var d = -1;
                        a = St(a, Cr(we()));
                        var v = Yg(i, function(E, C, N) {
                            var k = St(a, function(Z) {
                                return Z(E)
                            });
                            return {
                                criteria: k,
                                index: ++d,
                                value: E
                            }
                        });
                        return $A(v, function(E, C) {
                            return vC(E, C, l)
                        })
                    }

                    function sC(i, a) {
                        return Zg(i, a, function(l, d) {
                            return rf(i, d)
                        })
                    }

                    function Zg(i, a, l) {
                        for (var d = -1, v = a.length, E = {}; ++d < v;) {
                            var C = a[d],
                                N = $i(i, C);
                            l(N, C) && Ta(E, qn(C, i), N)
                        }
                        return E
                    }

                    function aC(i) {
                        return function(a) {
                            return $i(a, i)
                        }
                    }

                    function wu(i, a, l, d) {
                        var v = d ? NA : ls,
                            E = -1,
                            C = a.length,
                            N = i;
                        for (i === a && (a = _r(a)), l && (N = St(i, Cr(l))); ++E < C;)
                            for (var k = 0, Z = a[E], Q = l ? l(Z) : Z;
                                (k = v(N, Q, k, d)) > -1;) N !== i && Bo.call(N, k, 1), Bo.call(i, k, 1);
                        return i
                    }

                    function Qg(i, a) {
                        for (var l = i ? a.length : 0, d = l - 1; l--;) {
                            var v = a[l];
                            if (l == d || v !== E) {
                                var E = v;
                                wn(v) ? Bo.call(i, v, 1) : Pu(i, v)
                            }
                        }
                        return i
                    }

                    function Nu(i, a) {
                        return i + jo(Pg() * (a - i + 1))
                    }

                    function oC(i, a, l, d) {
                        for (var v = -1, E = Bt(Wo((a - i) / (l || 1)), 0), C = K(E); E--;) C[d ? E : ++v] = i, i += l;
                        return C
                    }

                    function $u(i, a) {
                        var l = "";
                        if (!i || a < 1 || a > me) return l;
                        do a % 2 && (l += i), a = jo(a / 2), a && (i += i); while (a);
                        return l
                    }

                    function Ve(i, a) {
                        return qu(wm(i, a, br), i + "")
                    }

                    function cC(i) {
                        return Mg(bs(i))
                    }

                    function lC(i, a) {
                        var l = bs(i);
                        return ac(l, Ni(a, 0, l.length))
                    }

                    function Ta(i, a, l, d) {
                        if (!It(i)) return i;
                        a = qn(a, i);
                        for (var v = -1, E = a.length, C = E - 1, N = i; N != null && ++v < E;) {
                            var k = gn(a[v]),
                                Z = l;
                            if (k === "__proto__" || k === "constructor" || k === "prototype") return i;
                            if (v != C) {
                                var Q = N[k];
                                Z = d ? d(Q, k, N) : r, Z === r && (Z = It(Q) ? Q : wn(a[v + 1]) ? [] : {})
                            }
                            _a(N, k, Z), N = N[k]
                        }
                        return i
                    }
                    var em = Ho ? function(i, a) {
                            return Ho.set(i, a), i
                        } : br,
                        uC = Go ? function(i, a) {
                            return Go(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: sf(a),
                                writable: !0
                            })
                        } : br;

                    function fC(i) {
                        return ac(bs(i))
                    }

                    function Wr(i, a, l) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), l = l > v ? v : l, l < 0 && (l += v), v = a > l ? 0 : l - a >>> 0, a >>>= 0;
                        for (var E = K(v); ++d < v;) E[d] = i[d + a];
                        return E
                    }

                    function dC(i, a) {
                        var l;
                        return Vn(i, function(d, v, E) {
                            return l = a(d, v, E), !l
                        }), !!l
                    }

                    function Jo(i, a, l) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= wt) {
                            for (; d < v;) {
                                var E = d + v >>> 1,
                                    C = i[E];
                                C !== null && !wr(C) && (l ? C <= a : C < a) ? d = E + 1 : v = E
                            }
                            return v
                        }
                        return Lu(i, a, br, l)
                    }

                    function Lu(i, a, l, d) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        a = l(a);
                        for (var C = a !== a, N = a === null, k = wr(a), Z = a === r; v < E;) {
                            var Q = jo((v + E) / 2),
                                se = l(i[Q]),
                                ge = se !== r,
                                Oe = se === null,
                                Ne = se === se,
                                He = wr(se);
                            if (C) var $e = d || Ne;
                            else Z ? $e = Ne && (d || ge) : N ? $e = Ne && ge && (d || !Oe) : k ? $e = Ne && ge && !Oe && (d || !He) : Oe || He ? $e = !1 : $e = d ? se <= a : se < a;
                            $e ? v = Q + 1 : E = Q
                        }
                        return ar(E, et)
                    }

                    function tm(i, a) {
                        for (var l = -1, d = i.length, v = 0, E = []; ++l < d;) {
                            var C = i[l],
                                N = a ? a(C) : C;
                            if (!l || !tn(N, k)) {
                                var k = N;
                                E[v++] = C === 0 ? 0 : C
                            }
                        }
                        return E
                    }

                    function rm(i) {
                        return typeof i == "number" ? i : wr(i) ? ke : +i
                    }

                    function Rr(i) {
                        if (typeof i == "string") return i;
                        if (Ue(i)) return St(i, Rr) + "";
                        if (wr(i)) return Dg ? Dg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -ye ? "-0" : a
                    }

                    function Yn(i, a, l) {
                        var d = -1,
                            v = No,
                            E = i.length,
                            C = !0,
                            N = [],
                            k = N;
                        if (l) C = !1, v = ou;
                        else if (E >= s) {
                            var Z = a ? null : SC(i);
                            if (Z) return Lo(Z);
                            C = !1, v = da, k = new wi
                        } else k = a ? [] : N;
                        e: for (; ++d < E;) {
                            var Q = i[d],
                                se = a ? a(Q) : Q;
                            if (Q = l || Q !== 0 ? Q : 0, C && se === se) {
                                for (var ge = k.length; ge--;)
                                    if (k[ge] === se) continue e;
                                a && k.push(se), N.push(Q)
                            } else v(k, se, l) || (k !== N && k.push(se), N.push(Q))
                        }
                        return N
                    }

                    function Pu(i, a) {
                        return a = qn(a, i), i = Nm(i, a), i == null || delete i[gn(jr(a))]
                    }

                    function nm(i, a, l, d) {
                        return Ta(i, a, l($i(i, a)), d)
                    }

                    function Zo(i, a, l, d) {
                        for (var v = i.length, E = d ? v : -1;
                            (d ? E-- : ++E < v) && a(i[E], E, i););
                        return l ? Wr(i, d ? 0 : E, d ? E + 1 : v) : Wr(i, d ? E + 1 : 0, d ? v : E)
                    }

                    function im(i, a) {
                        var l = i;
                        return l instanceof qe && (l = l.value()), cu(a, function(d, v) {
                            return v.func.apply(v.thisArg, jn([d], v.args))
                        }, l)
                    }

                    function Du(i, a, l) {
                        var d = i.length;
                        if (d < 2) return d ? Yn(i[0]) : [];
                        for (var v = -1, E = K(d); ++v < d;)
                            for (var C = i[v], N = -1; ++N < d;) N != v && (E[v] = ya(E[v] || C, i[N], a, l));
                        return Yn(er(E, 1), a, l)
                    }

                    function sm(i, a, l) {
                        for (var d = -1, v = i.length, E = a.length, C = {}; ++d < v;) {
                            var N = d < E ? a[d] : r;
                            l(C, i[d], N)
                        }
                        return C
                    }

                    function ku(i) {
                        return Lt(i) ? i : []
                    }

                    function Mu(i) {
                        return typeof i == "function" ? i : br
                    }

                    function qn(i, a) {
                        return Ue(i) ? i : Ku(i, a) ? [i] : Dm(ct(i))
                    }
                    var hC = Ve;

                    function zn(i, a, l) {
                        var d = i.length;
                        return l = l === r ? d : l, !a && l >= d ? i : Wr(i, a, l)
                    }
                    var am = eI || function(i) {
                        return Qt.clearTimeout(i)
                    };

                    function om(i, a) {
                        if (a) return i.slice();
                        var l = i.length,
                            d = Rg ? Rg(l) : new i.constructor(l);
                        return i.copy(d), d
                    }

                    function xu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Uo(a).set(new Uo(i)), a
                    }

                    function pC(i, a) {
                        var l = a ? xu(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.byteLength)
                    }

                    function gC(i) {
                        var a = new i.constructor(i.source, Hp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function mC(i) {
                        return va ? ht(va.call(i)) : {}
                    }

                    function cm(i, a) {
                        var l = a ? xu(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.length)
                    }

                    function lm(i, a) {
                        if (i !== a) {
                            var l = i !== r,
                                d = i === null,
                                v = i === i,
                                E = wr(i),
                                C = a !== r,
                                N = a === null,
                                k = a === a,
                                Z = wr(a);
                            if (!N && !Z && !E && i > a || E && C && k && !N && !Z || d && C && k || !l && k || !v) return 1;
                            if (!d && !E && !Z && i < a || Z && l && v && !d && !E || N && l && v || !C && v || !k) return -1
                        }
                        return 0
                    }

                    function vC(i, a, l) {
                        for (var d = -1, v = i.criteria, E = a.criteria, C = v.length, N = l.length; ++d < C;) {
                            var k = lm(v[d], E[d]);
                            if (k) {
                                if (d >= N) return k;
                                var Z = l[d];
                                return k * (Z == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function um(i, a, l, d) {
                        for (var v = -1, E = i.length, C = l.length, N = -1, k = a.length, Z = Bt(E - C, 0), Q = K(k + Z), se = !d; ++N < k;) Q[N] = a[N];
                        for (; ++v < C;)(se || v < E) && (Q[l[v]] = i[v]);
                        for (; Z--;) Q[N++] = i[v++];
                        return Q
                    }

                    function fm(i, a, l, d) {
                        for (var v = -1, E = i.length, C = -1, N = l.length, k = -1, Z = a.length, Q = Bt(E - N, 0), se = K(Q + Z), ge = !d; ++v < Q;) se[v] = i[v];
                        for (var Oe = v; ++k < Z;) se[Oe + k] = a[k];
                        for (; ++C < N;)(ge || v < E) && (se[Oe + l[C]] = i[v++]);
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
                        for (var E = -1, C = a.length; ++E < C;) {
                            var N = a[E],
                                k = d ? d(l[N], i[N], N, l, i) : r;
                            k === r && (k = i[N]), v ? In(l, N, k) : _a(l, N, k)
                        }
                        return l
                    }

                    function _C(i, a) {
                        return pn(i, Hu(i), a)
                    }

                    function yC(i, a) {
                        return pn(i, Om(i), a)
                    }

                    function Qo(i, a) {
                        return function(l, d) {
                            var v = Ue(l) ? OA : GI,
                                E = a ? a() : {};
                            return v(l, i, we(d, 2), E)
                        }
                    }

                    function vs(i) {
                        return Ve(function(a, l) {
                            var d = -1,
                                v = l.length,
                                E = v > 1 ? l[v - 1] : r,
                                C = v > 2 ? l[2] : r;
                            for (E = i.length > 3 && typeof E == "function" ? (v--, E) : r, C && dr(l[0], l[1], C) && (E = v < 3 ? r : E, v = 1), a = ht(a); ++d < v;) {
                                var N = l[d];
                                N && i(a, N, d, E)
                            }
                            return a
                        })
                    }

                    function dm(i, a) {
                        return function(l, d) {
                            if (l == null) return l;
                            if (!yr(l)) return i(l, d);
                            for (var v = l.length, E = a ? v : -1, C = ht(l);
                                (a ? E-- : ++E < v) && d(C[E], E, C) !== !1;);
                            return l
                        }
                    }

                    function hm(i) {
                        return function(a, l, d) {
                            for (var v = -1, E = ht(a), C = d(a), N = C.length; N--;) {
                                var k = C[i ? N : ++v];
                                if (l(E[k], k, E) === !1) break
                            }
                            return a
                        }
                    }

                    function EC(i, a, l) {
                        var d = a & U,
                            v = Sa(i);

                        function E() {
                            var C = this && this !== Qt && this instanceof E ? v : i;
                            return C.apply(d ? l : this, arguments)
                        }
                        return E
                    }

                    function pm(i) {
                        return function(a) {
                            a = ct(a);
                            var l = us(a) ? Qr(a) : r,
                                d = l ? l[0] : a.charAt(0),
                                v = l ? zn(l, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function _s(i) {
                        return function(a) {
                            return cu(dv(fv(a).replace(uA, "")), i, "")
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
                            var l = ms(i.prototype),
                                d = i.apply(l, a);
                            return It(d) ? d : l
                        }
                    }

                    function bC(i, a, l) {
                        var d = Sa(i);

                        function v() {
                            for (var E = arguments.length, C = K(E), N = E, k = ys(v); N--;) C[N] = arguments[N];
                            var Z = E < 3 && C[0] !== k && C[E - 1] !== k ? [] : Hn(C, k);
                            if (E -= Z.length, E < l) return ym(i, a, ec, v.placeholder, r, C, Z, r, r, l - E);
                            var Q = this && this !== Qt && this instanceof v ? d : i;
                            return Ir(Q, this, C)
                        }
                        return v
                    }

                    function gm(i) {
                        return function(a, l, d) {
                            var v = ht(a);
                            if (!yr(a)) {
                                var E = we(l, 3);
                                a = qt(a), l = function(N) {
                                    return E(v[N], N, v)
                                }
                            }
                            var C = i(a, l, d);
                            return C > -1 ? v[E ? a[C] : C] : r
                        }
                    }

                    function mm(i) {
                        return Rn(function(a) {
                            var l = a.length,
                                d = l,
                                v = Br.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var E = a[d];
                                if (typeof E != "function") throw new Fr(c);
                                if (v && !C && ic(E) == "wrapper") var C = new Br([], !0)
                            }
                            for (d = C ? d : l; ++d < l;) {
                                E = a[d];
                                var N = ic(E),
                                    k = N == "wrapper" ? Wu(E) : r;
                                k && Vu(k[0]) && k[1] == (ae | Y | G | ce) && !k[4].length && k[9] == 1 ? C = C[ic(k[0])].apply(C, k[3]) : C = E.length == 1 && Vu(E) ? C[N]() : C.thru(E)
                            }
                            return function() {
                                var Z = arguments,
                                    Q = Z[0];
                                if (C && Z.length == 1 && Ue(Q)) return C.plant(Q).value();
                                for (var se = 0, ge = l ? a[se].apply(this, Z) : Q; ++se < l;) ge = a[se].call(this, ge);
                                return ge
                            }
                        })
                    }

                    function ec(i, a, l, d, v, E, C, N, k, Z) {
                        var Q = a & ae,
                            se = a & U,
                            ge = a & I,
                            Oe = a & (Y | W),
                            Ne = a & ue,
                            He = ge ? r : Sa(i);

                        function $e() {
                            for (var Ye = arguments.length, ze = K(Ye), Nr = Ye; Nr--;) ze[Nr] = arguments[Nr];
                            if (Oe) var hr = ys($e),
                                $r = PA(ze, hr);
                            if (d && (ze = um(ze, d, v, Oe)), E && (ze = fm(ze, E, C, Oe)), Ye -= $r, Oe && Ye < Z) {
                                var Pt = Hn(ze, hr);
                                return ym(i, a, ec, $e.placeholder, l, ze, Pt, N, k, Z - Ye)
                            }
                            var rn = se ? l : this,
                                Ln = ge ? rn[i] : i;
                            return Ye = ze.length, N ? ze = GC(ze, N) : Ne && Ye > 1 && ze.reverse(), Q && k < Ye && (ze.length = k), this && this !== Qt && this instanceof $e && (Ln = He || Sa(Ln)), Ln.apply(rn, ze)
                        }
                        return $e
                    }

                    function vm(i, a) {
                        return function(l, d) {
                            return zI(l, i, a(d), {})
                        }
                    }

                    function tc(i, a) {
                        return function(l, d) {
                            var v;
                            if (l === r && d === r) return a;
                            if (l !== r && (v = l), d !== r) {
                                if (v === r) return d;
                                typeof l == "string" || typeof d == "string" ? (l = Rr(l), d = Rr(d)) : (l = rm(l), d = rm(d)), v = i(l, d)
                            }
                            return v
                        }
                    }

                    function Uu(i) {
                        return Rn(function(a) {
                            return a = St(a, Cr(we())), Ve(function(l) {
                                var d = this;
                                return i(a, function(v) {
                                    return Ir(v, d, l)
                                })
                            })
                        })
                    }

                    function rc(i, a) {
                        a = a === r ? " " : Rr(a);
                        var l = a.length;
                        if (l < 2) return l ? $u(a, i) : a;
                        var d = $u(a, Wo(i / fs(a)));
                        return us(a) ? zn(Qr(d), 0, i).join("") : d.slice(0, i)
                    }

                    function TC(i, a, l, d) {
                        var v = a & U,
                            E = Sa(i);

                        function C() {
                            for (var N = -1, k = arguments.length, Z = -1, Q = d.length, se = K(Q + k), ge = this && this !== Qt && this instanceof C ? E : i; ++Z < Q;) se[Z] = d[Z];
                            for (; k--;) se[Z++] = arguments[++N];
                            return Ir(ge, v ? l : this, se)
                        }
                        return C
                    }

                    function _m(i) {
                        return function(a, l, d) {
                            return d && typeof d != "number" && dr(a, l, d) && (l = d = r), a = $n(a), l === r ? (l = a, a = 0) : l = $n(l), d = d === r ? a < l ? 1 : -1 : $n(d), oC(a, l, d, i)
                        }
                    }

                    function nc(i) {
                        return function(a, l) {
                            return typeof a == "string" && typeof l == "string" || (a = Hr(a), l = Hr(l)), i(a, l)
                        }
                    }

                    function ym(i, a, l, d, v, E, C, N, k, Z) {
                        var Q = a & Y,
                            se = Q ? C : r,
                            ge = Q ? r : C,
                            Oe = Q ? E : r,
                            Ne = Q ? r : E;
                        a |= Q ? G : z, a &= ~(Q ? z : G), a & H || (a &= ~(U | I));
                        var He = [i, a, v, Oe, se, Ne, ge, N, k, Z],
                            $e = l.apply(r, He);
                        return Vu(i) && $m($e, He), $e.placeholder = d, Lm($e, i, a)
                    }

                    function Fu(i) {
                        var a = Ft[i];
                        return function(l, d) {
                            if (l = Hr(l), d = d == null ? 0 : ar(Be(d), 292), d && Lg(l)) {
                                var v = (ct(l) + "e").split("e"),
                                    E = a(v[0] + "e" + (+v[1] + d));
                                return v = (ct(E) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(l)
                        }
                    }
                    var SC = ps && 1 / Lo(new ps([, -0]))[1] == ye ? function(i) {
                        return new ps(i)
                    } : cf;

                    function Em(i) {
                        return function(a) {
                            var l = or(a);
                            return l == p ? gu(a) : l == ee ? BA(a) : LA(a, i(a))
                        }
                    }

                    function Cn(i, a, l, d, v, E, C, N) {
                        var k = a & I;
                        if (!k && typeof i != "function") throw new Fr(c);
                        var Z = d ? d.length : 0;
                        if (Z || (a &= ~(G | z), d = v = r), C = C === r ? C : Bt(Be(C), 0), N = N === r ? N : Be(N), Z -= v ? v.length : 0, a & z) {
                            var Q = d,
                                se = v;
                            d = v = r
                        }
                        var ge = k ? r : Wu(i),
                            Oe = [i, a, l, d, v, Q, se, E, C, N];
                        if (ge && UC(Oe, ge), i = Oe[0], a = Oe[1], l = Oe[2], d = Oe[3], v = Oe[4], N = Oe[9] = Oe[9] === r ? k ? 0 : i.length : Bt(Oe[9] - Z, 0), !N && a & (Y | W) && (a &= ~(Y | W)), !a || a == U) var Ne = EC(i, a, l);
                        else a == Y || a == W ? Ne = bC(i, a, N) : (a == G || a == (U | G)) && !v.length ? Ne = TC(i, a, l, d) : Ne = ec.apply(r, Oe);
                        var He = ge ? em : $m;
                        return Lm(He(Ne, Oe), i, a)
                    }

                    function bm(i, a, l, d) {
                        return i === r || tn(i, hs[l]) && !ft.call(d, l) ? a : i
                    }

                    function Tm(i, a, l, d, v, E) {
                        return It(i) && It(a) && (E.set(a, i), Xo(i, a, r, Tm, E), E.delete(a)), i
                    }

                    function OC(i) {
                        return Ia(i) ? r : i
                    }

                    function Sm(i, a, l, d, v, E) {
                        var C = l & P,
                            N = i.length,
                            k = a.length;
                        if (N != k && !(C && k > N)) return !1;
                        var Z = E.get(i),
                            Q = E.get(a);
                        if (Z && Q) return Z == a && Q == i;
                        var se = -1,
                            ge = !0,
                            Oe = l & x ? new wi : r;
                        for (E.set(i, a), E.set(a, i); ++se < N;) {
                            var Ne = i[se],
                                He = a[se];
                            if (d) var $e = C ? d(He, Ne, se, a, i, E) : d(Ne, He, se, i, a, E);
                            if ($e !== r) {
                                if ($e) continue;
                                ge = !1;
                                break
                            }
                            if (Oe) {
                                if (!lu(a, function(Ye, ze) {
                                        if (!da(Oe, ze) && (Ne === Ye || v(Ne, Ye, l, d, E))) return Oe.push(ze)
                                    })) {
                                    ge = !1;
                                    break
                                }
                            } else if (!(Ne === He || v(Ne, He, l, d, E))) {
                                ge = !1;
                                break
                            }
                        }
                        return E.delete(i), E.delete(a), ge
                    }

                    function AC(i, a, l, d, v, E, C) {
                        switch (l) {
                            case A:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case Pe:
                                return !(i.byteLength != a.byteLength || !E(new Uo(i), new Uo(a)));
                            case Tt:
                            case ot:
                            case O:
                                return tn(+i, +a);
                            case Yt:
                                return i.name == a.name && i.message == a.message;
                            case ie:
                            case w:
                                return i == a + "";
                            case p:
                                var N = gu;
                            case ee:
                                var k = d & P;
                                if (N || (N = Lo), i.size != a.size && !k) return !1;
                                var Z = C.get(i);
                                if (Z) return Z == a;
                                d |= x, C.set(i, a);
                                var Q = Sm(N(i), N(a), d, v, E, C);
                                return C.delete(i), Q;
                            case j:
                                if (va) return va.call(i) == va.call(a)
                        }
                        return !1
                    }

                    function IC(i, a, l, d, v, E) {
                        var C = l & P,
                            N = Bu(i),
                            k = N.length,
                            Z = Bu(a),
                            Q = Z.length;
                        if (k != Q && !C) return !1;
                        for (var se = k; se--;) {
                            var ge = N[se];
                            if (!(C ? ge in a : ft.call(a, ge))) return !1
                        }
                        var Oe = E.get(i),
                            Ne = E.get(a);
                        if (Oe && Ne) return Oe == a && Ne == i;
                        var He = !0;
                        E.set(i, a), E.set(a, i);
                        for (var $e = C; ++se < k;) {
                            ge = N[se];
                            var Ye = i[ge],
                                ze = a[ge];
                            if (d) var Nr = C ? d(ze, Ye, ge, a, i, E) : d(Ye, ze, ge, i, a, E);
                            if (!(Nr === r ? Ye === ze || v(Ye, ze, l, d, E) : Nr)) {
                                He = !1;
                                break
                            }
                            $e || ($e = ge == "constructor")
                        }
                        if (He && !$e) {
                            var hr = i.constructor,
                                $r = a.constructor;
                            hr != $r && "constructor" in i && "constructor" in a && !(typeof hr == "function" && hr instanceof hr && typeof $r == "function" && $r instanceof $r) && (He = !1)
                        }
                        return E.delete(i), E.delete(a), He
                    }

                    function Rn(i) {
                        return qu(wm(i, r, Um), i + "")
                    }

                    function Bu(i) {
                        return jg(i, qt, Hu)
                    }

                    function Gu(i) {
                        return jg(i, Er, Om)
                    }
                    var Wu = Ho ? function(i) {
                        return Ho.get(i)
                    } : cf;

                    function ic(i) {
                        for (var a = i.name + "", l = gs[a], d = ft.call(gs, a) ? l.length : 0; d--;) {
                            var v = l[d],
                                E = v.func;
                            if (E == null || E == i) return v.name
                        }
                        return a
                    }

                    function ys(i) {
                        var a = ft.call(_, "placeholder") ? _ : i;
                        return a.placeholder
                    }

                    function we() {
                        var i = _.iteratee || af;
                        return i = i === af ? Vg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function sc(i, a) {
                        var l = i.__data__;
                        return DC(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map
                    }

                    function ju(i) {
                        for (var a = qt(i), l = a.length; l--;) {
                            var d = a[l],
                                v = i[d];
                            a[l] = [d, v, Cm(v)]
                        }
                        return a
                    }

                    function Li(i, a) {
                        var l = xA(i, a);
                        return Kg(l) ? l : r
                    }

                    function CC(i) {
                        var a = ft.call(i, Ci),
                            l = i[Ci];
                        try {
                            i[Ci] = r;
                            var d = !0
                        } catch {}
                        var v = Mo.call(i);
                        return d && (a ? i[Ci] = l : delete i[Ci]), v
                    }
                    var Hu = vu ? function(i) {
                            return i == null ? [] : (i = ht(i), Wn(vu(i), function(a) {
                                return Ng.call(i, a)
                            }))
                        } : lf,
                        Om = vu ? function(i) {
                            for (var a = []; i;) jn(a, Hu(i)), i = Fo(i);
                            return a
                        } : lf,
                        or = fr;
                    (_u && or(new _u(new ArrayBuffer(1))) != A || pa && or(new pa) != p || yu && or(yu.resolve()) != V || ps && or(new ps) != ee || ga && or(new ga) != pe) && (or = function(i) {
                        var a = fr(i),
                            l = a == B ? i.constructor : r,
                            d = l ? Pi(l) : "";
                        if (d) switch (d) {
                            case lI:
                                return A;
                            case uI:
                                return p;
                            case fI:
                                return V;
                            case dI:
                                return ee;
                            case hI:
                                return pe
                        }
                        return a
                    });

                    function RC(i, a, l) {
                        for (var d = -1, v = l.length; ++d < v;) {
                            var E = l[d],
                                C = E.size;
                            switch (E.type) {
                                case "drop":
                                    i += C;
                                    break;
                                case "dropRight":
                                    a -= C;
                                    break;
                                case "take":
                                    a = ar(a, i + C);
                                    break;
                                case "takeRight":
                                    i = Bt(i, a - C);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function wC(i) {
                        var a = i.match(k1);
                        return a ? a[1].split(M1) : []
                    }

                    function Am(i, a, l) {
                        a = qn(a, i);
                        for (var d = -1, v = a.length, E = !1; ++d < v;) {
                            var C = gn(a[d]);
                            if (!(E = i != null && l(i, C))) break;
                            i = i[C]
                        }
                        return E || ++d != v ? E : (v = i == null ? 0 : i.length, !!v && dc(v) && wn(C, v) && (Ue(i) || Di(i)))
                    }

                    function NC(i) {
                        var a = i.length,
                            l = new i.constructor(a);
                        return a && typeof i[0] == "string" && ft.call(i, "index") && (l.index = i.index, l.input = i.input), l
                    }

                    function Im(i) {
                        return typeof i.constructor == "function" && !Oa(i) ? ms(Fo(i)) : {}
                    }

                    function $C(i, a, l) {
                        var d = i.constructor;
                        switch (a) {
                            case Pe:
                                return xu(i);
                            case Tt:
                            case ot:
                                return new d(+i);
                            case A:
                                return pC(i, l);
                            case T:
                            case $:
                            case S:
                            case L:
                            case J:
                            case te:
                            case _e:
                            case Te:
                            case ut:
                                return cm(i, l);
                            case p:
                                return new d;
                            case O:
                            case w:
                                return new d(i);
                            case ie:
                                return gC(i);
                            case ee:
                                return new d;
                            case j:
                                return mC(i)
                        }
                    }

                    function LC(i, a) {
                        var l = a.length;
                        if (!l) return i;
                        var d = l - 1;
                        return a[d] = (l > 1 ? "& " : "") + a[d], a = a.join(l > 2 ? ", " : " "), i.replace(D1, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function PC(i) {
                        return Ue(i) || Di(i) || !!($g && i && i[$g])
                    }

                    function wn(i, a) {
                        var l = typeof i;
                        return a = a == null ? me : a, !!a && (l == "number" || l != "symbol" && K1.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function dr(i, a, l) {
                        if (!It(l)) return !1;
                        var d = typeof a;
                        return (d == "number" ? yr(l) && wn(a, l.length) : d == "string" && a in l) ? tn(l[a], i) : !1
                    }

                    function Ku(i, a) {
                        if (Ue(i)) return !1;
                        var l = typeof i;
                        return l == "number" || l == "symbol" || l == "boolean" || i == null || wr(i) ? !0 : N1.test(i) || !w1.test(i) || a != null && i in ht(a)
                    }

                    function DC(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Vu(i) {
                        var a = ic(i),
                            l = _[a];
                        if (typeof l != "function" || !(a in qe.prototype)) return !1;
                        if (i === l) return !0;
                        var d = Wu(l);
                        return !!d && i === d[0]
                    }

                    function kC(i) {
                        return !!Cg && Cg in i
                    }
                    var MC = Do ? Nn : uf;

                    function Oa(i) {
                        var a = i && i.constructor,
                            l = typeof a == "function" && a.prototype || hs;
                        return i === l
                    }

                    function Cm(i) {
                        return i === i && !It(i)
                    }

                    function Rm(i, a) {
                        return function(l) {
                            return l == null ? !1 : l[i] === a && (a !== r || i in ht(l))
                        }
                    }

                    function xC(i) {
                        var a = uc(i, function(d) {
                                return l.size === h && l.clear(), d
                            }),
                            l = a.cache;
                        return a
                    }

                    function UC(i, a) {
                        var l = i[1],
                            d = a[1],
                            v = l | d,
                            E = v < (U | I | ae),
                            C = d == ae && l == Y || d == ae && l == ce && i[7].length <= a[8] || d == (ae | ce) && a[7].length <= a[8] && l == Y;
                        if (!(E || C)) return i;
                        d & U && (i[2] = a[2], v |= l & U ? 0 : H);
                        var N = a[3];
                        if (N) {
                            var k = i[3];
                            i[3] = k ? um(k, N, a[4]) : N, i[4] = k ? Hn(i[3], g) : a[4]
                        }
                        return N = a[5], N && (k = i[5], i[5] = k ? fm(k, N, a[6]) : N, i[6] = k ? Hn(i[5], g) : a[6]), N = a[7], N && (i[7] = N), d & ae && (i[8] = i[8] == null ? a[8] : ar(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function FC(i) {
                        var a = [];
                        if (i != null)
                            for (var l in ht(i)) a.push(l);
                        return a
                    }

                    function BC(i) {
                        return Mo.call(i)
                    }

                    function wm(i, a, l) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, E = Bt(d.length - a, 0), C = K(E); ++v < E;) C[v] = d[a + v];
                                v = -1;
                                for (var N = K(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = l(C), Ir(i, this, N)
                            }
                    }

                    function Nm(i, a) {
                        return a.length < 2 ? i : $i(i, Wr(a, 0, -1))
                    }

                    function GC(i, a) {
                        for (var l = i.length, d = ar(a.length, l), v = _r(i); d--;) {
                            var E = a[d];
                            i[d] = wn(E, l) ? v[E] : r
                        }
                        return i
                    }

                    function Yu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var $m = Pm(em),
                        Aa = rI || function(i, a) {
                            return Qt.setTimeout(i, a)
                        },
                        qu = Pm(uC);

                    function Lm(i, a, l) {
                        var d = a + "";
                        return qu(i, LC(d, WC(wC(d), l)))
                    }

                    function Pm(i) {
                        var a = 0,
                            l = 0;
                        return function() {
                            var d = aI(),
                                v = Ae - (d - l);
                            if (l = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function ac(i, a) {
                        var l = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === r ? d : a; ++l < a;) {
                            var E = Nu(l, v),
                                C = i[E];
                            i[E] = i[l], i[l] = C
                        }
                        return i.length = a, i
                    }
                    var Dm = xC(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace($1, function(l, d, v, E) {
                            a.push(v ? E.replace(F1, "$1") : d || l)
                        }), a
                    });

                    function gn(i) {
                        if (typeof i == "string" || wr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -ye ? "-0" : a
                    }

                    function Pi(i) {
                        if (i != null) {
                            try {
                                return ko.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function WC(i, a) {
                        return Ur(Ar, function(l) {
                            var d = "_." + l[0];
                            a & l[1] && !No(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function km(i) {
                        if (i instanceof qe) return i.clone();
                        var a = new Br(i.__wrapped__, i.__chain__);
                        return a.__actions__ = _r(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function jC(i, a, l) {
                        (l ? dr(i, a, l) : a === r) ? a = 1: a = Bt(Be(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, E = 0, C = K(Wo(d / a)); v < d;) C[E++] = Wr(i, v, v += a);
                        return C
                    }

                    function HC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = 0, v = []; ++a < l;) {
                            var E = i[a];
                            E && (v[d++] = E)
                        }
                        return v
                    }

                    function KC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = K(i - 1), l = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return jn(Ue(l) ? _r(l) : [l], er(a, 1))
                    }
                    var VC = Ve(function(i, a) {
                            return Lt(i) ? ya(i, er(a, 1, Lt, !0)) : []
                        }),
                        YC = Ve(function(i, a) {
                            var l = jr(a);
                            return Lt(l) && (l = r), Lt(i) ? ya(i, er(a, 1, Lt, !0), we(l, 2)) : []
                        }),
                        qC = Ve(function(i, a) {
                            var l = jr(a);
                            return Lt(l) && (l = r), Lt(i) ? ya(i, er(a, 1, Lt, !0), r, l) : []
                        });

                    function zC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), Wr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function XC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), a = d - a, Wr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function JC(i, a) {
                        return i && i.length ? Zo(i, we(a, 3), !0, !0) : []
                    }

                    function ZC(i, a) {
                        return i && i.length ? Zo(i, we(a, 3), !0) : []
                    }

                    function QC(i, a, l, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (l && typeof l != "number" && dr(i, a, l) && (l = 0, d = v), KI(i, a, l, d)) : []
                    }

                    function Mm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : Be(l);
                        return v < 0 && (v = Bt(d + v, 0)), $o(i, we(a, 3), v)
                    }

                    function xm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return l !== r && (v = Be(l), v = l < 0 ? Bt(d + v, 0) : ar(v, d - 1)), $o(i, we(a, 3), v, !0)
                    }

                    function Um(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? er(i, 1) : []
                    }

                    function e0(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? er(i, ye) : []
                    }

                    function t0(i, a) {
                        var l = i == null ? 0 : i.length;
                        return l ? (a = a === r ? 1 : Be(a), er(i, a)) : []
                    }

                    function r0(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = {}; ++a < l;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Fm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function n0(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : Be(l);
                        return v < 0 && (v = Bt(d + v, 0)), ls(i, a, v)
                    }

                    function i0(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Wr(i, 0, -1) : []
                    }
                    var s0 = Ve(function(i) {
                            var a = St(i, ku);
                            return a.length && a[0] === i[0] ? Au(a) : []
                        }),
                        a0 = Ve(function(i) {
                            var a = jr(i),
                                l = St(i, ku);
                            return a === jr(l) ? a = r : l.pop(), l.length && l[0] === i[0] ? Au(l, we(a, 2)) : []
                        }),
                        o0 = Ve(function(i) {
                            var a = jr(i),
                                l = St(i, ku);
                            return a = typeof a == "function" ? a : r, a && l.pop(), l.length && l[0] === i[0] ? Au(l, r, a) : []
                        });

                    function c0(i, a) {
                        return i == null ? "" : iI.call(i, a)
                    }

                    function jr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function l0(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return l !== r && (v = Be(l), v = v < 0 ? Bt(d + v, 0) : ar(v, d - 1)), a === a ? WA(i, a, v) : $o(i, yg, v, !0)
                    }

                    function u0(i, a) {
                        return i && i.length ? Xg(i, Be(a)) : r
                    }
                    var f0 = Ve(Bm);

                    function Bm(i, a) {
                        return i && i.length && a && a.length ? wu(i, a) : i
                    }

                    function d0(i, a, l) {
                        return i && i.length && a && a.length ? wu(i, a, we(l, 2)) : i
                    }

                    function h0(i, a, l) {
                        return i && i.length && a && a.length ? wu(i, a, r, l) : i
                    }
                    var p0 = Rn(function(i, a) {
                        var l = i == null ? 0 : i.length,
                            d = bu(i, a);
                        return Qg(i, St(a, function(v) {
                            return wn(v, l) ? +v : v
                        }).sort(lm)), d
                    });

                    function g0(i, a) {
                        var l = [];
                        if (!(i && i.length)) return l;
                        var d = -1,
                            v = [],
                            E = i.length;
                        for (a = we(a, 3); ++d < E;) {
                            var C = i[d];
                            a(C, d, i) && (l.push(C), v.push(d))
                        }
                        return Qg(i, v), l
                    }

                    function zu(i) {
                        return i == null ? i : cI.call(i)
                    }

                    function m0(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (l && typeof l != "number" && dr(i, a, l) ? (a = 0, l = d) : (a = a == null ? 0 : Be(a), l = l === r ? d : Be(l)), Wr(i, a, l)) : []
                    }

                    function v0(i, a) {
                        return Jo(i, a)
                    }

                    function _0(i, a, l) {
                        return Lu(i, a, we(l, 2))
                    }

                    function y0(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Jo(i, a);
                            if (d < l && tn(i[d], a)) return d
                        }
                        return -1
                    }

                    function E0(i, a) {
                        return Jo(i, a, !0)
                    }

                    function b0(i, a, l) {
                        return Lu(i, a, we(l, 2), !0)
                    }

                    function T0(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Jo(i, a, !0) - 1;
                            if (tn(i[d], a)) return d
                        }
                        return -1
                    }

                    function S0(i) {
                        return i && i.length ? tm(i) : []
                    }

                    function O0(i, a) {
                        return i && i.length ? tm(i, we(a, 2)) : []
                    }

                    function A0(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Wr(i, 1, a) : []
                    }

                    function I0(i, a, l) {
                        return i && i.length ? (a = l || a === r ? 1 : Be(a), Wr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function C0(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : Be(a), a = d - a, Wr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function R0(i, a) {
                        return i && i.length ? Zo(i, we(a, 3), !1, !0) : []
                    }

                    function w0(i, a) {
                        return i && i.length ? Zo(i, we(a, 3)) : []
                    }
                    var N0 = Ve(function(i) {
                            return Yn(er(i, 1, Lt, !0))
                        }),
                        $0 = Ve(function(i) {
                            var a = jr(i);
                            return Lt(a) && (a = r), Yn(er(i, 1, Lt, !0), we(a, 2))
                        }),
                        L0 = Ve(function(i) {
                            var a = jr(i);
                            return a = typeof a == "function" ? a : r, Yn(er(i, 1, Lt, !0), r, a)
                        });

                    function P0(i) {
                        return i && i.length ? Yn(i) : []
                    }

                    function D0(i, a) {
                        return i && i.length ? Yn(i, we(a, 2)) : []
                    }

                    function k0(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? Yn(i, r, a) : []
                    }

                    function Xu(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Wn(i, function(l) {
                            if (Lt(l)) return a = Bt(l.length, a), !0
                        }), hu(a, function(l) {
                            return St(i, uu(l))
                        })
                    }

                    function Gm(i, a) {
                        if (!(i && i.length)) return [];
                        var l = Xu(i);
                        return a == null ? l : St(l, function(d) {
                            return Ir(a, r, d)
                        })
                    }
                    var M0 = Ve(function(i, a) {
                            return Lt(i) ? ya(i, a) : []
                        }),
                        x0 = Ve(function(i) {
                            return Du(Wn(i, Lt))
                        }),
                        U0 = Ve(function(i) {
                            var a = jr(i);
                            return Lt(a) && (a = r), Du(Wn(i, Lt), we(a, 2))
                        }),
                        F0 = Ve(function(i) {
                            var a = jr(i);
                            return a = typeof a == "function" ? a : r, Du(Wn(i, Lt), r, a)
                        }),
                        B0 = Ve(Xu);

                    function G0(i, a) {
                        return sm(i || [], a || [], _a)
                    }

                    function W0(i, a) {
                        return sm(i || [], a || [], Ta)
                    }
                    var j0 = Ve(function(i) {
                        var a = i.length,
                            l = a > 1 ? i[a - 1] : r;
                        return l = typeof l == "function" ? (i.pop(), l) : r, Gm(i, l)
                    });

                    function Wm(i) {
                        var a = _(i);
                        return a.__chain__ = !0, a
                    }

                    function H0(i, a) {
                        return a(i), i
                    }

                    function oc(i, a) {
                        return a(i)
                    }
                    var K0 = Rn(function(i) {
                        var a = i.length,
                            l = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(E) {
                                return bu(E, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof qe) || !wn(l) ? this.thru(v) : (d = d.slice(l, +l + (a ? 1 : 0)), d.__actions__.push({
                            func: oc,
                            args: [v],
                            thisArg: r
                        }), new Br(d, this.__chain__).thru(function(E) {
                            return a && !E.length && E.push(r), E
                        }))
                    });

                    function V0() {
                        return Wm(this)
                    }

                    function Y0() {
                        return new Br(this.value(), this.__chain__)
                    }

                    function q0() {
                        this.__values__ === r && (this.__values__ = rv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function z0() {
                        return this
                    }

                    function X0(i) {
                        for (var a, l = this; l instanceof Vo;) {
                            var d = km(l);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            l = l.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function J0() {
                        var i = this.__wrapped__;
                        if (i instanceof qe) {
                            var a = i;
                            return this.__actions__.length && (a = new qe(this)), a = a.reverse(), a.__actions__.push({
                                func: oc,
                                args: [zu],
                                thisArg: r
                            }), new Br(a, this.__chain__)
                        }
                        return this.thru(zu)
                    }

                    function Z0() {
                        return im(this.__wrapped__, this.__actions__)
                    }
                    var Q0 = Qo(function(i, a, l) {
                        ft.call(i, l) ? ++i[l] : In(i, l, 1)
                    });

                    function eR(i, a, l) {
                        var d = Ue(i) ? vg : HI;
                        return l && dr(i, a, l) && (a = r), d(i, we(a, 3))
                    }

                    function tR(i, a) {
                        var l = Ue(i) ? Wn : Gg;
                        return l(i, we(a, 3))
                    }
                    var rR = gm(Mm),
                        nR = gm(xm);

                    function iR(i, a) {
                        return er(cc(i, a), 1)
                    }

                    function sR(i, a) {
                        return er(cc(i, a), ye)
                    }

                    function aR(i, a, l) {
                        return l = l === r ? 1 : Be(l), er(cc(i, a), l)
                    }

                    function jm(i, a) {
                        var l = Ue(i) ? Ur : Vn;
                        return l(i, we(a, 3))
                    }

                    function Hm(i, a) {
                        var l = Ue(i) ? AA : Bg;
                        return l(i, we(a, 3))
                    }
                    var oR = Qo(function(i, a, l) {
                        ft.call(i, l) ? i[l].push(a) : In(i, l, [a])
                    });

                    function cR(i, a, l, d) {
                        i = yr(i) ? i : bs(i), l = l && !d ? Be(l) : 0;
                        var v = i.length;
                        return l < 0 && (l = Bt(v + l, 0)), hc(i) ? l <= v && i.indexOf(a, l) > -1 : !!v && ls(i, a, l) > -1
                    }
                    var lR = Ve(function(i, a, l) {
                            var d = -1,
                                v = typeof a == "function",
                                E = yr(i) ? K(i.length) : [];
                            return Vn(i, function(C) {
                                E[++d] = v ? Ir(a, C, l) : Ea(C, a, l)
                            }), E
                        }),
                        uR = Qo(function(i, a, l) {
                            In(i, l, a)
                        });

                    function cc(i, a) {
                        var l = Ue(i) ? St : Yg;
                        return l(i, we(a, 3))
                    }

                    function fR(i, a, l, d) {
                        return i == null ? [] : (Ue(a) || (a = a == null ? [] : [a]), l = d ? r : l, Ue(l) || (l = l == null ? [] : [l]), Jg(i, a, l))
                    }
                    var dR = Qo(function(i, a, l) {
                        i[l ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function hR(i, a, l) {
                        var d = Ue(i) ? cu : bg,
                            v = arguments.length < 3;
                        return d(i, we(a, 4), l, v, Vn)
                    }

                    function pR(i, a, l) {
                        var d = Ue(i) ? IA : bg,
                            v = arguments.length < 3;
                        return d(i, we(a, 4), l, v, Bg)
                    }

                    function gR(i, a) {
                        var l = Ue(i) ? Wn : Gg;
                        return l(i, fc(we(a, 3)))
                    }

                    function mR(i) {
                        var a = Ue(i) ? Mg : cC;
                        return a(i)
                    }

                    function vR(i, a, l) {
                        (l ? dr(i, a, l) : a === r) ? a = 1: a = Be(a);
                        var d = Ue(i) ? FI : lC;
                        return d(i, a)
                    }

                    function _R(i) {
                        var a = Ue(i) ? BI : fC;
                        return a(i)
                    }

                    function yR(i) {
                        if (i == null) return 0;
                        if (yr(i)) return hc(i) ? fs(i) : i.length;
                        var a = or(i);
                        return a == p || a == ee ? i.size : Cu(i).length
                    }

                    function ER(i, a, l) {
                        var d = Ue(i) ? lu : dC;
                        return l && dr(i, a, l) && (a = r), d(i, we(a, 3))
                    }
                    var bR = Ve(function(i, a) {
                            if (i == null) return [];
                            var l = a.length;
                            return l > 1 && dr(i, a[0], a[1]) ? a = [] : l > 2 && dr(a[0], a[1], a[2]) && (a = [a[0]]), Jg(i, er(a, 1), [])
                        }),
                        lc = tI || function() {
                            return Qt.Date.now()
                        };

                    function TR(i, a) {
                        if (typeof a != "function") throw new Fr(c);
                        return i = Be(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Km(i, a, l) {
                        return a = l ? r : a, a = i && a == null ? i.length : a, Cn(i, ae, r, r, r, r, a)
                    }

                    function Vm(i, a) {
                        var l;
                        if (typeof a != "function") throw new Fr(c);
                        return i = Be(i),
                            function() {
                                return --i > 0 && (l = a.apply(this, arguments)), i <= 1 && (a = r), l
                            }
                    }
                    var Ju = Ve(function(i, a, l) {
                            var d = U;
                            if (l.length) {
                                var v = Hn(l, ys(Ju));
                                d |= G
                            }
                            return Cn(i, d, a, l, v)
                        }),
                        Ym = Ve(function(i, a, l) {
                            var d = U | I;
                            if (l.length) {
                                var v = Hn(l, ys(Ym));
                                d |= G
                            }
                            return Cn(a, d, i, l, v)
                        });

                    function qm(i, a, l) {
                        a = l ? r : a;
                        var d = Cn(i, Y, r, r, r, r, r, a);
                        return d.placeholder = qm.placeholder, d
                    }

                    function zm(i, a, l) {
                        a = l ? r : a;
                        var d = Cn(i, W, r, r, r, r, r, a);
                        return d.placeholder = zm.placeholder, d
                    }

                    function Xm(i, a, l) {
                        var d, v, E, C, N, k, Z = 0,
                            Q = !1,
                            se = !1,
                            ge = !0;
                        if (typeof i != "function") throw new Fr(c);
                        a = Hr(a) || 0, It(l) && (Q = !!l.leading, se = "maxWait" in l, E = se ? Bt(Hr(l.maxWait) || 0, a) : E, ge = "trailing" in l ? !!l.trailing : ge);

                        function Oe(Pt) {
                            var rn = d,
                                Ln = v;
                            return d = v = r, Z = Pt, C = i.apply(Ln, rn), C
                        }

                        function Ne(Pt) {
                            return Z = Pt, N = Aa(Ye, a), Q ? Oe(Pt) : C
                        }

                        function He(Pt) {
                            var rn = Pt - k,
                                Ln = Pt - Z,
                                gv = a - rn;
                            return se ? ar(gv, E - Ln) : gv
                        }

                        function $e(Pt) {
                            var rn = Pt - k,
                                Ln = Pt - Z;
                            return k === r || rn >= a || rn < 0 || se && Ln >= E
                        }

                        function Ye() {
                            var Pt = lc();
                            if ($e(Pt)) return ze(Pt);
                            N = Aa(Ye, He(Pt))
                        }

                        function ze(Pt) {
                            return N = r, ge && d ? Oe(Pt) : (d = v = r, C)
                        }

                        function Nr() {
                            N !== r && am(N), Z = 0, d = k = v = N = r
                        }

                        function hr() {
                            return N === r ? C : ze(lc())
                        }

                        function $r() {
                            var Pt = lc(),
                                rn = $e(Pt);
                            if (d = arguments, v = this, k = Pt, rn) {
                                if (N === r) return Ne(k);
                                if (se) return am(N), N = Aa(Ye, a), Oe(k)
                            }
                            return N === r && (N = Aa(Ye, a)), C
                        }
                        return $r.cancel = Nr, $r.flush = hr, $r
                    }
                    var SR = Ve(function(i, a) {
                            return Fg(i, 1, a)
                        }),
                        OR = Ve(function(i, a, l) {
                            return Fg(i, Hr(a) || 0, l)
                        });

                    function AR(i) {
                        return Cn(i, ue)
                    }

                    function uc(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new Fr(c);
                        var l = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                E = l.cache;
                            if (E.has(v)) return E.get(v);
                            var C = i.apply(this, d);
                            return l.cache = E.set(v, C) || E, C
                        };
                        return l.cache = new(uc.Cache || An), l
                    }
                    uc.Cache = An;

                    function fc(i) {
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

                    function IR(i) {
                        return Vm(2, i)
                    }
                    var CR = hC(function(i, a) {
                            a = a.length == 1 && Ue(a[0]) ? St(a[0], Cr(we())) : St(er(a, 1), Cr(we()));
                            var l = a.length;
                            return Ve(function(d) {
                                for (var v = -1, E = ar(d.length, l); ++v < E;) d[v] = a[v].call(this, d[v]);
                                return Ir(i, this, d)
                            })
                        }),
                        Zu = Ve(function(i, a) {
                            var l = Hn(a, ys(Zu));
                            return Cn(i, G, r, a, l)
                        }),
                        Jm = Ve(function(i, a) {
                            var l = Hn(a, ys(Jm));
                            return Cn(i, z, r, a, l)
                        }),
                        RR = Rn(function(i, a) {
                            return Cn(i, ce, r, r, r, a)
                        });

                    function wR(i, a) {
                        if (typeof i != "function") throw new Fr(c);
                        return a = a === r ? a : Be(a), Ve(i, a)
                    }

                    function NR(i, a) {
                        if (typeof i != "function") throw new Fr(c);
                        return a = a == null ? 0 : Bt(Be(a), 0), Ve(function(l) {
                            var d = l[a],
                                v = zn(l, 0, a);
                            return d && jn(v, d), Ir(i, this, v)
                        })
                    }

                    function $R(i, a, l) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new Fr(c);
                        return It(l) && (d = "leading" in l ? !!l.leading : d, v = "trailing" in l ? !!l.trailing : v), Xm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function LR(i) {
                        return Km(i, 1)
                    }

                    function PR(i, a) {
                        return Zu(Mu(a), i)
                    }

                    function DR() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Ue(i) ? i : [i]
                    }

                    function kR(i) {
                        return Gr(i, R)
                    }

                    function MR(i, a) {
                        return a = typeof a == "function" ? a : r, Gr(i, R, a)
                    }

                    function xR(i) {
                        return Gr(i, y | R)
                    }

                    function UR(i, a) {
                        return a = typeof a == "function" ? a : r, Gr(i, y | R, a)
                    }

                    function FR(i, a) {
                        return a == null || Ug(i, a, qt(a))
                    }

                    function tn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var BR = nc(Ou),
                        GR = nc(function(i, a) {
                            return i >= a
                        }),
                        Di = Hg(function() {
                            return arguments
                        }()) ? Hg : function(i) {
                            return Nt(i) && ft.call(i, "callee") && !Ng.call(i, "callee")
                        },
                        Ue = K.isArray,
                        WR = fg ? Cr(fg) : XI;

                    function yr(i) {
                        return i != null && dc(i.length) && !Nn(i)
                    }

                    function Lt(i) {
                        return Nt(i) && yr(i)
                    }

                    function jR(i) {
                        return i === !0 || i === !1 || Nt(i) && fr(i) == Tt
                    }
                    var Xn = nI || uf,
                        HR = dg ? Cr(dg) : JI;

                    function KR(i) {
                        return Nt(i) && i.nodeType === 1 && !Ia(i)
                    }

                    function VR(i) {
                        if (i == null) return !0;
                        if (yr(i) && (Ue(i) || typeof i == "string" || typeof i.splice == "function" || Xn(i) || Es(i) || Di(i))) return !i.length;
                        var a = or(i);
                        if (a == p || a == ee) return !i.size;
                        if (Oa(i)) return !Cu(i).length;
                        for (var l in i)
                            if (ft.call(i, l)) return !1;
                        return !0
                    }

                    function YR(i, a) {
                        return ba(i, a)
                    }

                    function qR(i, a, l) {
                        l = typeof l == "function" ? l : r;
                        var d = l ? l(i, a) : r;
                        return d === r ? ba(i, a, r, l) : !!d
                    }

                    function Qu(i) {
                        if (!Nt(i)) return !1;
                        var a = fr(i);
                        return a == Yt || a == Mt || typeof i.message == "string" && typeof i.name == "string" && !Ia(i)
                    }

                    function zR(i) {
                        return typeof i == "number" && Lg(i)
                    }

                    function Nn(i) {
                        if (!It(i)) return !1;
                        var a = fr(i);
                        return a == xt || a == m || a == at || a == le
                    }

                    function Zm(i) {
                        return typeof i == "number" && i == Be(i)
                    }

                    function dc(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= me
                    }

                    function It(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Nt(i) {
                        return i != null && typeof i == "object"
                    }
                    var Qm = hg ? Cr(hg) : QI;

                    function XR(i, a) {
                        return i === a || Iu(i, a, ju(a))
                    }

                    function JR(i, a, l) {
                        return l = typeof l == "function" ? l : r, Iu(i, a, ju(a), l)
                    }

                    function ZR(i) {
                        return ev(i) && i != +i
                    }

                    function QR(i) {
                        if (MC(i)) throw new Me(o);
                        return Kg(i)
                    }

                    function ew(i) {
                        return i === null
                    }

                    function tw(i) {
                        return i == null
                    }

                    function ev(i) {
                        return typeof i == "number" || Nt(i) && fr(i) == O
                    }

                    function Ia(i) {
                        if (!Nt(i) || fr(i) != B) return !1;
                        var a = Fo(i);
                        if (a === null) return !0;
                        var l = ft.call(a, "constructor") && a.constructor;
                        return typeof l == "function" && l instanceof l && ko.call(l) == JA
                    }
                    var ef = pg ? Cr(pg) : eC;

                    function rw(i) {
                        return Zm(i) && i >= -me && i <= me
                    }
                    var tv = gg ? Cr(gg) : tC;

                    function hc(i) {
                        return typeof i == "string" || !Ue(i) && Nt(i) && fr(i) == w
                    }

                    function wr(i) {
                        return typeof i == "symbol" || Nt(i) && fr(i) == j
                    }
                    var Es = mg ? Cr(mg) : rC;

                    function nw(i) {
                        return i === r
                    }

                    function iw(i) {
                        return Nt(i) && or(i) == pe
                    }

                    function sw(i) {
                        return Nt(i) && fr(i) == Re
                    }
                    var aw = nc(Ru),
                        ow = nc(function(i, a) {
                            return i <= a
                        });

                    function rv(i) {
                        if (!i) return [];
                        if (yr(i)) return hc(i) ? Qr(i) : _r(i);
                        if (ha && i[ha]) return FA(i[ha]());
                        var a = or(i),
                            l = a == p ? gu : a == ee ? Lo : bs;
                        return l(i)
                    }

                    function $n(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Hr(i), i === ye || i === -ye) {
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

                    function nv(i) {
                        return i ? Ni(Be(i), 0, Fe) : 0
                    }

                    function Hr(i) {
                        if (typeof i == "number") return i;
                        if (wr(i)) return ke;
                        if (It(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = It(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Tg(i);
                        var l = W1.test(i);
                        return l || H1.test(i) ? TA(i.slice(2), l ? 2 : 8) : G1.test(i) ? ke : +i
                    }

                    function iv(i) {
                        return pn(i, Er(i))
                    }

                    function cw(i) {
                        return i ? Ni(Be(i), -me, me) : i === 0 ? i : 0
                    }

                    function ct(i) {
                        return i == null ? "" : Rr(i)
                    }
                    var lw = vs(function(i, a) {
                            if (Oa(a) || yr(a)) {
                                pn(a, qt(a), i);
                                return
                            }
                            for (var l in a) ft.call(a, l) && _a(i, l, a[l])
                        }),
                        sv = vs(function(i, a) {
                            pn(a, Er(a), i)
                        }),
                        pc = vs(function(i, a, l, d) {
                            pn(a, Er(a), i, d)
                        }),
                        uw = vs(function(i, a, l, d) {
                            pn(a, qt(a), i, d)
                        }),
                        fw = Rn(bu);

                    function dw(i, a) {
                        var l = ms(i);
                        return a == null ? l : xg(l, a)
                    }
                    var hw = Ve(function(i, a) {
                            i = ht(i);
                            var l = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && dr(a[0], a[1], v) && (d = 1); ++l < d;)
                                for (var E = a[l], C = Er(E), N = -1, k = C.length; ++N < k;) {
                                    var Z = C[N],
                                        Q = i[Z];
                                    (Q === r || tn(Q, hs[Z]) && !ft.call(i, Z)) && (i[Z] = E[Z])
                                }
                            return i
                        }),
                        pw = Ve(function(i) {
                            return i.push(r, Tm), Ir(av, r, i)
                        });

                    function gw(i, a) {
                        return _g(i, we(a, 3), hn)
                    }

                    function mw(i, a) {
                        return _g(i, we(a, 3), Su)
                    }

                    function vw(i, a) {
                        return i == null ? i : Tu(i, we(a, 3), Er)
                    }

                    function _w(i, a) {
                        return i == null ? i : Wg(i, we(a, 3), Er)
                    }

                    function yw(i, a) {
                        return i && hn(i, we(a, 3))
                    }

                    function Ew(i, a) {
                        return i && Su(i, we(a, 3))
                    }

                    function bw(i) {
                        return i == null ? [] : zo(i, qt(i))
                    }

                    function Tw(i) {
                        return i == null ? [] : zo(i, Er(i))
                    }

                    function tf(i, a, l) {
                        var d = i == null ? r : $i(i, a);
                        return d === r ? l : d
                    }

                    function Sw(i, a) {
                        return i != null && Am(i, a, VI)
                    }

                    function rf(i, a) {
                        return i != null && Am(i, a, YI)
                    }
                    var Ow = vm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Mo.call(a)), i[a] = l
                        }, sf(br)),
                        Aw = vm(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Mo.call(a)), ft.call(i, a) ? i[a].push(l) : i[a] = [l]
                        }, we),
                        Iw = Ve(Ea);

                    function qt(i) {
                        return yr(i) ? kg(i) : Cu(i)
                    }

                    function Er(i) {
                        return yr(i) ? kg(i, !0) : nC(i)
                    }

                    function Cw(i, a) {
                        var l = {};
                        return a = we(a, 3), hn(i, function(d, v, E) {
                            In(l, a(d, v, E), d)
                        }), l
                    }

                    function Rw(i, a) {
                        var l = {};
                        return a = we(a, 3), hn(i, function(d, v, E) {
                            In(l, v, a(d, v, E))
                        }), l
                    }
                    var ww = vs(function(i, a, l) {
                            Xo(i, a, l)
                        }),
                        av = vs(function(i, a, l, d) {
                            Xo(i, a, l, d)
                        }),
                        Nw = Rn(function(i, a) {
                            var l = {};
                            if (i == null) return l;
                            var d = !1;
                            a = St(a, function(E) {
                                return E = qn(E, i), d || (d = E.length > 1), E
                            }), pn(i, Gu(i), l), d && (l = Gr(l, y | b | R, OC));
                            for (var v = a.length; v--;) Pu(l, a[v]);
                            return l
                        });

                    function $w(i, a) {
                        return ov(i, fc(we(a)))
                    }
                    var Lw = Rn(function(i, a) {
                        return i == null ? {} : sC(i, a)
                    });

                    function ov(i, a) {
                        if (i == null) return {};
                        var l = St(Gu(i), function(d) {
                            return [d]
                        });
                        return a = we(a), Zg(i, l, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function Pw(i, a, l) {
                        a = qn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var E = i == null ? r : i[gn(a[d])];
                            E === r && (d = v, E = l), i = Nn(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function Dw(i, a, l) {
                        return i == null ? i : Ta(i, a, l)
                    }

                    function kw(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Ta(i, a, l, d)
                    }
                    var cv = Em(qt),
                        lv = Em(Er);

                    function Mw(i, a, l) {
                        var d = Ue(i),
                            v = d || Xn(i) || Es(i);
                        if (a = we(a, 4), l == null) {
                            var E = i && i.constructor;
                            v ? l = d ? new E : [] : It(i) ? l = Nn(E) ? ms(Fo(i)) : {} : l = {}
                        }
                        return (v ? Ur : hn)(i, function(C, N, k) {
                            return a(l, C, N, k)
                        }), l
                    }

                    function xw(i, a) {
                        return i == null ? !0 : Pu(i, a)
                    }

                    function Uw(i, a, l) {
                        return i == null ? i : nm(i, a, Mu(l))
                    }

                    function Fw(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : nm(i, a, Mu(l), d)
                    }

                    function bs(i) {
                        return i == null ? [] : pu(i, qt(i))
                    }

                    function Bw(i) {
                        return i == null ? [] : pu(i, Er(i))
                    }

                    function Gw(i, a, l) {
                        return l === r && (l = a, a = r), l !== r && (l = Hr(l), l = l === l ? l : 0), a !== r && (a = Hr(a), a = a === a ? a : 0), Ni(Hr(i), a, l)
                    }

                    function Ww(i, a, l) {
                        return a = $n(a), l === r ? (l = a, a = 0) : l = $n(l), i = Hr(i), qI(i, a, l)
                    }

                    function jw(i, a, l) {
                        if (l && typeof l != "boolean" && dr(i, a, l) && (a = l = r), l === r && (typeof a == "boolean" ? (l = a, a = r) : typeof i == "boolean" && (l = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = $n(i), a === r ? (a = i, i = 0) : a = $n(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (l || i % 1 || a % 1) {
                            var v = Pg();
                            return ar(i + v * (a - i + bA("1e-" + ((v + "").length - 1))), a)
                        }
                        return Nu(i, a)
                    }
                    var Hw = _s(function(i, a, l) {
                        return a = a.toLowerCase(), i + (l ? uv(a) : a)
                    });

                    function uv(i) {
                        return nf(ct(i).toLowerCase())
                    }

                    function fv(i) {
                        return i = ct(i), i && i.replace(V1, DA).replace(fA, "")
                    }

                    function Kw(i, a, l) {
                        i = ct(i), a = Rr(a);
                        var d = i.length;
                        l = l === r ? d : Ni(Be(l), 0, d);
                        var v = l;
                        return l -= a.length, l >= 0 && i.slice(l, v) == a
                    }

                    function Vw(i) {
                        return i = ct(i), i && I1.test(i) ? i.replace(Wp, kA) : i
                    }

                    function Yw(i) {
                        return i = ct(i), i && L1.test(i) ? i.replace(Zl, "\\$&") : i
                    }
                    var qw = _s(function(i, a, l) {
                            return i + (l ? "-" : "") + a.toLowerCase()
                        }),
                        zw = _s(function(i, a, l) {
                            return i + (l ? " " : "") + a.toLowerCase()
                        }),
                        Xw = pm("toLowerCase");

                    function Jw(i, a, l) {
                        i = ct(i), a = Be(a);
                        var d = a ? fs(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return rc(jo(v), l) + i + rc(Wo(v), l)
                    }

                    function Zw(i, a, l) {
                        i = ct(i), a = Be(a);
                        var d = a ? fs(i) : 0;
                        return a && d < a ? i + rc(a - d, l) : i
                    }

                    function Qw(i, a, l) {
                        i = ct(i), a = Be(a);
                        var d = a ? fs(i) : 0;
                        return a && d < a ? rc(a - d, l) + i : i
                    }

                    function eN(i, a, l) {
                        return l || a == null ? a = 0 : a && (a = +a), oI(ct(i).replace(Ql, ""), a || 0)
                    }

                    function tN(i, a, l) {
                        return (l ? dr(i, a, l) : a === r) ? a = 1 : a = Be(a), $u(ct(i), a)
                    }

                    function rN() {
                        var i = arguments,
                            a = ct(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var nN = _s(function(i, a, l) {
                        return i + (l ? "_" : "") + a.toLowerCase()
                    });

                    function iN(i, a, l) {
                        return l && typeof l != "number" && dr(i, a, l) && (a = l = r), l = l === r ? Fe : l >>> 0, l ? (i = ct(i), i && (typeof a == "string" || a != null && !ef(a)) && (a = Rr(a), !a && us(i)) ? zn(Qr(i), 0, l) : i.split(a, l)) : []
                    }
                    var sN = _s(function(i, a, l) {
                        return i + (l ? " " : "") + nf(a)
                    });

                    function aN(i, a, l) {
                        return i = ct(i), l = l == null ? 0 : Ni(Be(l), 0, i.length), a = Rr(a), i.slice(l, l + a.length) == a
                    }

                    function oN(i, a, l) {
                        var d = _.templateSettings;
                        l && dr(i, a, l) && (a = r), i = ct(i), a = pc({}, a, d, bm);
                        var v = pc({}, a.imports, d.imports, bm),
                            E = qt(v),
                            C = pu(v, E),
                            N, k, Z = 0,
                            Q = a.interpolate || Co,
                            se = "__p += '",
                            ge = mu((a.escape || Co).source + "|" + Q.source + "|" + (Q === jp ? B1 : Co).source + "|" + (a.evaluate || Co).source + "|$", "g"),
                            Oe = "//# sourceURL=" + (ft.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++mA + "]") + `
`;
                        i.replace(ge, function($e, Ye, ze, Nr, hr, $r) {
                            return ze || (ze = Nr), se += i.slice(Z, $r).replace(Y1, MA), Ye && (N = !0, se += `' +
__e(` + Ye + `) +
'`), hr && (k = !0, se += `';
` + hr + `;
__p += '`), ze && (se += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`), Z = $r + $e.length, $e
                        }), se += `';
`;
                        var Ne = ft.call(a, "variable") && a.variable;
                        if (!Ne) se = `with (obj) {
` + se + `
}
`;
                        else if (U1.test(Ne)) throw new Me(u);
                        se = (k ? se.replace(sr, "") : se).replace(De, "$1").replace(fa, "$1;"), se = "function(" + (Ne || "obj") + `) {
` + (Ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + se + `return __p
}`;
                        var He = hv(function() {
                            return it(E, Oe + "return " + se).apply(r, C)
                        });
                        if (He.source = se, Qu(He)) throw He;
                        return He
                    }

                    function cN(i) {
                        return ct(i).toLowerCase()
                    }

                    function lN(i) {
                        return ct(i).toUpperCase()
                    }

                    function uN(i, a, l) {
                        if (i = ct(i), i && (l || a === r)) return Tg(i);
                        if (!i || !(a = Rr(a))) return i;
                        var d = Qr(i),
                            v = Qr(a),
                            E = Sg(d, v),
                            C = Og(d, v) + 1;
                        return zn(d, E, C).join("")
                    }

                    function fN(i, a, l) {
                        if (i = ct(i), i && (l || a === r)) return i.slice(0, Ig(i) + 1);
                        if (!i || !(a = Rr(a))) return i;
                        var d = Qr(i),
                            v = Og(d, Qr(a)) + 1;
                        return zn(d, 0, v).join("")
                    }

                    function dN(i, a, l) {
                        if (i = ct(i), i && (l || a === r)) return i.replace(Ql, "");
                        if (!i || !(a = Rr(a))) return i;
                        var d = Qr(i),
                            v = Sg(d, Qr(a));
                        return zn(d, v).join("")
                    }

                    function hN(i, a) {
                        var l = Ce,
                            d = Ie;
                        if (It(a)) {
                            var v = "separator" in a ? a.separator : v;
                            l = "length" in a ? Be(a.length) : l, d = "omission" in a ? Rr(a.omission) : d
                        }
                        i = ct(i);
                        var E = i.length;
                        if (us(i)) {
                            var C = Qr(i);
                            E = C.length
                        }
                        if (l >= E) return i;
                        var N = l - fs(d);
                        if (N < 1) return d;
                        var k = C ? zn(C, 0, N).join("") : i.slice(0, N);
                        if (v === r) return k + d;
                        if (C && (N += k.length - N), ef(v)) {
                            if (i.slice(N).search(v)) {
                                var Z, Q = k;
                                for (v.global || (v = mu(v.source, ct(Hp.exec(v)) + "g")), v.lastIndex = 0; Z = v.exec(Q);) var se = Z.index;
                                k = k.slice(0, se === r ? N : se)
                            }
                        } else if (i.indexOf(Rr(v), N) != N) {
                            var ge = k.lastIndexOf(v);
                            ge > -1 && (k = k.slice(0, ge))
                        }
                        return k + d
                    }

                    function pN(i) {
                        return i = ct(i), i && A1.test(i) ? i.replace(Gp, jA) : i
                    }
                    var gN = _s(function(i, a, l) {
                            return i + (l ? " " : "") + a.toUpperCase()
                        }),
                        nf = pm("toUpperCase");

                    function dv(i, a, l) {
                        return i = ct(i), a = l ? r : a, a === r ? UA(i) ? VA(i) : wA(i) : i.match(a) || []
                    }
                    var hv = Ve(function(i, a) {
                            try {
                                return Ir(i, r, a)
                            } catch (l) {
                                return Qu(l) ? l : new Me(l)
                            }
                        }),
                        mN = Rn(function(i, a) {
                            return Ur(a, function(l) {
                                l = gn(l), In(i, l, Ju(i[l], i))
                            }), i
                        });

                    function vN(i) {
                        var a = i == null ? 0 : i.length,
                            l = we();
                        return i = a ? St(i, function(d) {
                            if (typeof d[1] != "function") throw new Fr(c);
                            return [l(d[0]), d[1]]
                        }) : [], Ve(function(d) {
                            for (var v = -1; ++v < a;) {
                                var E = i[v];
                                if (Ir(E[0], this, d)) return Ir(E[1], this, d)
                            }
                        })
                    }

                    function _N(i) {
                        return jI(Gr(i, y))
                    }

                    function sf(i) {
                        return function() {
                            return i
                        }
                    }

                    function yN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var EN = mm(),
                        bN = mm(!0);

                    function br(i) {
                        return i
                    }

                    function af(i) {
                        return Vg(typeof i == "function" ? i : Gr(i, y))
                    }

                    function TN(i) {
                        return qg(Gr(i, y))
                    }

                    function SN(i, a) {
                        return zg(i, Gr(a, y))
                    }
                    var ON = Ve(function(i, a) {
                            return function(l) {
                                return Ea(l, i, a)
                            }
                        }),
                        AN = Ve(function(i, a) {
                            return function(l) {
                                return Ea(i, l, a)
                            }
                        });

                    function of(i, a, l) {
                        var d = qt(a),
                            v = zo(a, d);
                        l == null && !(It(a) && (v.length || !d.length)) && (l = a, a = i, i = this, v = zo(a, qt(a)));
                        var E = !(It(l) && "chain" in l) || !!l.chain,
                            C = Nn(i);
                        return Ur(v, function(N) {
                            var k = a[N];
                            i[N] = k, C && (i.prototype[N] = function() {
                                var Z = this.__chain__;
                                if (E || Z) {
                                    var Q = i(this.__wrapped__),
                                        se = Q.__actions__ = _r(this.__actions__);
                                    return se.push({
                                        func: k,
                                        args: arguments,
                                        thisArg: i
                                    }), Q.__chain__ = Z, Q
                                }
                                return k.apply(i, jn([this.value()], arguments))
                            })
                        }), i
                    }

                    function IN() {
                        return Qt._ === this && (Qt._ = ZA), this
                    }

                    function cf() {}

                    function CN(i) {
                        return i = Be(i), Ve(function(a) {
                            return Xg(a, i)
                        })
                    }
                    var RN = Uu(St),
                        wN = Uu(vg),
                        NN = Uu(lu);

                    function pv(i) {
                        return Ku(i) ? uu(gn(i)) : aC(i)
                    }

                    function $N(i) {
                        return function(a) {
                            return i == null ? r : $i(i, a)
                        }
                    }
                    var LN = _m(),
                        PN = _m(!0);

                    function lf() {
                        return []
                    }

                    function uf() {
                        return !1
                    }

                    function DN() {
                        return {}
                    }

                    function kN() {
                        return ""
                    }

                    function MN() {
                        return !0
                    }

                    function xN(i, a) {
                        if (i = Be(i), i < 1 || i > me) return [];
                        var l = Fe,
                            d = ar(i, Fe);
                        a = we(a), i -= Fe;
                        for (var v = hu(d, a); ++l < i;) a(l);
                        return v
                    }

                    function UN(i) {
                        return Ue(i) ? St(i, gn) : wr(i) ? [i] : _r(Dm(ct(i)))
                    }

                    function FN(i) {
                        var a = ++XA;
                        return ct(i) + a
                    }
                    var BN = tc(function(i, a) {
                            return i + a
                        }, 0),
                        GN = Fu("ceil"),
                        WN = tc(function(i, a) {
                            return i / a
                        }, 1),
                        jN = Fu("floor");

                    function HN(i) {
                        return i && i.length ? qo(i, br, Ou) : r
                    }

                    function KN(i, a) {
                        return i && i.length ? qo(i, we(a, 2), Ou) : r
                    }

                    function VN(i) {
                        return Eg(i, br)
                    }

                    function YN(i, a) {
                        return Eg(i, we(a, 2))
                    }

                    function qN(i) {
                        return i && i.length ? qo(i, br, Ru) : r
                    }

                    function zN(i, a) {
                        return i && i.length ? qo(i, we(a, 2), Ru) : r
                    }
                    var XN = tc(function(i, a) {
                            return i * a
                        }, 1),
                        JN = Fu("round"),
                        ZN = tc(function(i, a) {
                            return i - a
                        }, 0);

                    function QN(i) {
                        return i && i.length ? du(i, br) : 0
                    }

                    function e$(i, a) {
                        return i && i.length ? du(i, we(a, 2)) : 0
                    }
                    return _.after = TR, _.ary = Km, _.assign = lw, _.assignIn = sv, _.assignInWith = pc, _.assignWith = uw, _.at = fw, _.before = Vm, _.bind = Ju, _.bindAll = mN, _.bindKey = Ym, _.castArray = DR, _.chain = Wm, _.chunk = jC, _.compact = HC, _.concat = KC, _.cond = vN, _.conforms = _N, _.constant = sf, _.countBy = Q0, _.create = dw, _.curry = qm, _.curryRight = zm, _.debounce = Xm, _.defaults = hw, _.defaultsDeep = pw, _.defer = SR, _.delay = OR, _.difference = VC, _.differenceBy = YC, _.differenceWith = qC, _.drop = zC, _.dropRight = XC, _.dropRightWhile = JC, _.dropWhile = ZC, _.fill = QC, _.filter = tR, _.flatMap = iR, _.flatMapDeep = sR, _.flatMapDepth = aR, _.flatten = Um, _.flattenDeep = e0, _.flattenDepth = t0, _.flip = AR, _.flow = EN, _.flowRight = bN, _.fromPairs = r0, _.functions = bw, _.functionsIn = Tw, _.groupBy = oR, _.initial = i0, _.intersection = s0, _.intersectionBy = a0, _.intersectionWith = o0, _.invert = Ow, _.invertBy = Aw, _.invokeMap = lR, _.iteratee = af, _.keyBy = uR, _.keys = qt, _.keysIn = Er, _.map = cc, _.mapKeys = Cw, _.mapValues = Rw, _.matches = TN, _.matchesProperty = SN, _.memoize = uc, _.merge = ww, _.mergeWith = av, _.method = ON, _.methodOf = AN, _.mixin = of, _.negate = fc, _.nthArg = CN, _.omit = Nw, _.omitBy = $w, _.once = IR, _.orderBy = fR, _.over = RN, _.overArgs = CR, _.overEvery = wN, _.overSome = NN, _.partial = Zu, _.partialRight = Jm, _.partition = dR, _.pick = Lw, _.pickBy = ov, _.property = pv, _.propertyOf = $N, _.pull = f0, _.pullAll = Bm, _.pullAllBy = d0, _.pullAllWith = h0, _.pullAt = p0, _.range = LN, _.rangeRight = PN, _.rearg = RR, _.reject = gR, _.remove = g0, _.rest = wR, _.reverse = zu, _.sampleSize = vR, _.set = Dw, _.setWith = kw, _.shuffle = _R, _.slice = m0, _.sortBy = bR, _.sortedUniq = S0, _.sortedUniqBy = O0, _.split = iN, _.spread = NR, _.tail = A0, _.take = I0, _.takeRight = C0, _.takeRightWhile = R0, _.takeWhile = w0, _.tap = H0, _.throttle = $R, _.thru = oc, _.toArray = rv, _.toPairs = cv, _.toPairsIn = lv, _.toPath = UN, _.toPlainObject = iv, _.transform = Mw, _.unary = LR, _.union = N0, _.unionBy = $0, _.unionWith = L0, _.uniq = P0, _.uniqBy = D0, _.uniqWith = k0, _.unset = xw, _.unzip = Xu, _.unzipWith = Gm, _.update = Uw, _.updateWith = Fw, _.values = bs, _.valuesIn = Bw, _.without = M0, _.words = dv, _.wrap = PR, _.xor = x0, _.xorBy = U0, _.xorWith = F0, _.zip = B0, _.zipObject = G0, _.zipObjectDeep = W0, _.zipWith = j0, _.entries = cv, _.entriesIn = lv, _.extend = sv, _.extendWith = pc, of(_, _), _.add = BN, _.attempt = hv, _.camelCase = Hw, _.capitalize = uv, _.ceil = GN, _.clamp = Gw, _.clone = kR, _.cloneDeep = xR, _.cloneDeepWith = UR, _.cloneWith = MR, _.conformsTo = FR, _.deburr = fv, _.defaultTo = yN, _.divide = WN, _.endsWith = Kw, _.eq = tn, _.escape = Vw, _.escapeRegExp = Yw, _.every = eR, _.find = rR, _.findIndex = Mm, _.findKey = gw, _.findLast = nR, _.findLastIndex = xm, _.findLastKey = mw, _.floor = jN, _.forEach = jm, _.forEachRight = Hm, _.forIn = vw, _.forInRight = _w, _.forOwn = yw, _.forOwnRight = Ew, _.get = tf, _.gt = BR, _.gte = GR, _.has = Sw, _.hasIn = rf, _.head = Fm, _.identity = br, _.includes = cR, _.indexOf = n0, _.inRange = Ww, _.invoke = Iw, _.isArguments = Di, _.isArray = Ue, _.isArrayBuffer = WR, _.isArrayLike = yr, _.isArrayLikeObject = Lt, _.isBoolean = jR, _.isBuffer = Xn, _.isDate = HR, _.isElement = KR, _.isEmpty = VR, _.isEqual = YR, _.isEqualWith = qR, _.isError = Qu, _.isFinite = zR, _.isFunction = Nn, _.isInteger = Zm, _.isLength = dc, _.isMap = Qm, _.isMatch = XR, _.isMatchWith = JR, _.isNaN = ZR, _.isNative = QR, _.isNil = tw, _.isNull = ew, _.isNumber = ev, _.isObject = It, _.isObjectLike = Nt, _.isPlainObject = Ia, _.isRegExp = ef, _.isSafeInteger = rw, _.isSet = tv, _.isString = hc, _.isSymbol = wr, _.isTypedArray = Es, _.isUndefined = nw, _.isWeakMap = iw, _.isWeakSet = sw, _.join = c0, _.kebabCase = qw, _.last = jr, _.lastIndexOf = l0, _.lowerCase = zw, _.lowerFirst = Xw, _.lt = aw, _.lte = ow, _.max = HN, _.maxBy = KN, _.mean = VN, _.meanBy = YN, _.min = qN, _.minBy = zN, _.stubArray = lf, _.stubFalse = uf, _.stubObject = DN, _.stubString = kN, _.stubTrue = MN, _.multiply = XN, _.nth = u0, _.noConflict = IN, _.noop = cf, _.now = lc, _.pad = Jw, _.padEnd = Zw, _.padStart = Qw, _.parseInt = eN, _.random = jw, _.reduce = hR, _.reduceRight = pR, _.repeat = tN, _.replace = rN, _.result = Pw, _.round = JN, _.runInContext = D, _.sample = mR, _.size = yR, _.snakeCase = nN, _.some = ER, _.sortedIndex = v0, _.sortedIndexBy = _0, _.sortedIndexOf = y0, _.sortedLastIndex = E0, _.sortedLastIndexBy = b0, _.sortedLastIndexOf = T0, _.startCase = sN, _.startsWith = aN, _.subtract = ZN, _.sum = QN, _.sumBy = e$, _.template = oN, _.times = xN, _.toFinite = $n, _.toInteger = Be, _.toLength = nv, _.toLower = cN, _.toNumber = Hr, _.toSafeInteger = cw, _.toString = ct, _.toUpper = lN, _.trim = uN, _.trimEnd = fN, _.trimStart = dN, _.truncate = hN, _.unescape = pN, _.uniqueId = FN, _.upperCase = gN, _.upperFirst = nf, _.each = jm, _.eachRight = Hm, _.first = Fm, of(_, function() {
                        var i = {};
                        return hn(_, function(a, l) {
                            ft.call(_.prototype, l) || (i[l] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), _.VERSION = n, Ur(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        _[i].placeholder = _
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
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: we(v, 3),
                                type: l
                            }), E.__filtered__ = E.__filtered__ || d, E
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
                        return this.filter(br)
                    }, qe.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, qe.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, qe.prototype.invokeMap = Ve(function(i, a) {
                        return typeof i == "function" ? new qe(this) : this.map(function(l) {
                            return Ea(l, i, a)
                        })
                    }), qe.prototype.reject = function(i) {
                        return this.filter(fc(we(i)))
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
                            v = _[d ? "take" + (a == "last" ? "Right" : "") : a],
                            E = d || /^find/.test(a);
                        !v || (_.prototype[a] = function() {
                            var C = this.__wrapped__,
                                N = d ? [1] : arguments,
                                k = C instanceof qe,
                                Z = N[0],
                                Q = k || Ue(C),
                                se = function(Ye) {
                                    var ze = v.apply(_, jn([Ye], N));
                                    return d && ge ? ze[0] : ze
                                };
                            Q && l && typeof Z == "function" && Z.length != 1 && (k = Q = !1);
                            var ge = this.__chain__,
                                Oe = !!this.__actions__.length,
                                Ne = E && !ge,
                                He = k && !Oe;
                            if (!E && Q) {
                                C = He ? C : new qe(this);
                                var $e = i.apply(C, N);
                                return $e.__actions__.push({
                                    func: oc,
                                    args: [se],
                                    thisArg: r
                                }), new Br($e, ge)
                            }
                            return Ne && He ? i.apply(this, N) : ($e = this.thru(se), Ne ? d ? $e.value()[0] : $e.value() : $e)
                        })
                    }), Ur(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Po[i],
                            l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        _.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var E = this.value();
                                return a.apply(Ue(E) ? E : [], v)
                            }
                            return this[l](function(C) {
                                return a.apply(Ue(C) ? C : [], v)
                            })
                        }
                    }), hn(qe.prototype, function(i, a) {
                        var l = _[a];
                        if (l) {
                            var d = l.name + "";
                            ft.call(gs, d) || (gs[d] = []), gs[d].push({
                                name: a,
                                func: l
                            })
                        }
                    }), gs[ec(r, I).name] = [{
                        name: "wrapper",
                        func: r
                    }], qe.prototype.clone = pI, qe.prototype.reverse = gI, qe.prototype.value = mI, _.prototype.at = K0, _.prototype.chain = V0, _.prototype.commit = Y0, _.prototype.next = q0, _.prototype.plant = X0, _.prototype.reverse = J0, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = Z0, _.prototype.first = _.prototype.head, ha && (_.prototype[ha] = z0), _
                },
                ds = YA();
            Ii ? ((Ii.exports = ds)._ = ds, su._ = ds) : Qt._ = ds
        }).call(kt)
    })(Fd, Fd.exports);
    const hH = tt({
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
                        y = f * h;
                    return {
                        width: `${g}px`,
                        height: `${y}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Fd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new fp(e, t);
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
        pH = {
            class: "draw"
        },
        gH = {
            ref: "content",
            class: "content"
        },
        mH = {
            class: "constrain"
        },
        vH = {
            key: 0
        };

    function _H(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", pH, [X("div", gH, [X("div", mH, [e.player.prompt ? Ke((ne(), oe("div", vH, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), X("div", {
            ref: "stage",
            class: "stage",
            style: lo(e.stageDimensions)
        }, null, 4), X("button", {
            onClick: t[0] || (t[0] = Jr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, Xe(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const yH = gt(hH, [
            ["render", _H]
        ]),
        EH = tt({
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, ns.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        bH = ["textContent"],
        TH = ["textContent"],
        SH = ["textContent"],
        OH = ["textContent"];

    function AH(e, t, r, n, s, o) {
        const c = Ht("t");
        return ne(), oe("div", {
            class: Ge(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (ne(), oe("p", {
            key: 0,
            class: Ge(e.localClasses.message),
            textContent: Xe(e.joinedCountText)
        }, null, 10, bH)) : We("", !0), e.player.hasControls ? (ne(), oe(Ot, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (ne(), oe("p", {
            key: 0,
            class: Ge(e.localClasses.status)
        }, Xe(e.neededText), 3)) : We("", !0), e.player.status === "canStart" ? (ne(), oe("button", {
            key: 1,
            class: Ge(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: Xe(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, TH)) : We("", !0), e.player.status === "countdown" ? (ne(), oe("button", {
            key: 2,
            class: Ge(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: Xe(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, SH)) : We("", !0)], 64)) : e.player.gamepadStart ? (ne(), oe(Ot, {
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
        ]) : We("", !0)], 64)) : (ne(), oe(Ot, {
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
        }, null, 10, OH)) : We("", !0)], 2)
    }
    const IH = gt(EH, [
            ["render", AH]
        ]),
        CH = tt({
            components: {
                LobbyActions: IH
            },
            props: {
                player: Object
            }
        }),
        RH = {
            class: "lobby"
        },
        wH = {
            class: "constrain"
        };

    function NH(e, t, r, n, s, o) {
        const c = Rt("LobbyActions");
        return ne(), oe("div", RH, [X("div", wH, [st(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const $H = gt(CH, [
            ["render", NH]
        ]),
        LH = tt({
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, ns.gameStarted(this.$ecastRoom.appTag, e)
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

    function PH(e, t, r, n, s, o) {
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
        ]) : We("", !0), e.player.hasControls ? (ne(), oe(Ot, {
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
    const DH = gt(LH, [
            ["render", PH]
        ]),
        kH = tt({
            components: {
                PostGameActions: DH
            },
            props: {
                player: Object
            }
        }),
        MH = {
            class: "post-game"
        },
        xH = {
            class: "constrain"
        };

    function UH(e, t, r, n, s, o) {
        const c = Rt("PostGameActions");
        return ne(), oe("div", MH, [X("div", xH, [st(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const FH = gt(kH, [
            ["render", UH]
        ]),
        BH = tt({
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
                        if (e && e instanceof Un.ObjectEntity) return !0
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
        GH = {
            class: "single-text-entry"
        },
        WH = {
            class: "constrain"
        },
        jH = {
            key: 0
        },
        HH = {
            key: 1,
            for: "input"
        },
        KH = ["value", "rows", "placeholder", "disabled"],
        VH = ["value", "placeholder", "disabled"];

    function YH(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", GH, [X("div", WH, [e.player.prompt ? Ke((ne(), oe("p", jH, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), e.player.label ? Ke((ne(), oe("label", HH, null, 512)), [
            [c, e.player.label]
        ]) : We("", !0), e.player.isMultiline ? (ne(), oe("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, KH)) : (ne(), oe("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, VH)), Ke(X("button", {
            onClick: t[2] || (t[2] = Jr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const qH = gt(BH, [
            ["render", YH]
        ]),
        zH = tt({
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
                        if (e && e instanceof Un.ObjectEntity) return !0
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
        XH = {
            class: "multi-text-entry"
        },
        JH = {
            class: "constrain"
        },
        ZH = {
            key: 0
        },
        QH = ["for"],
        e5 = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        t5 = ["id", "value", "placeholder", "disabled", "onInput"];

    function r5(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", XH, [X("div", JH, [e.player.prompt ? Ke((ne(), oe("p", ZH, null, 512)), [
            [c, e.player.prompt]
        ]) : We("", !0), (ne(!0), oe(Ot, null, fo(e.player.inputs, (u, f) => (ne(), oe(Ot, null, [u.label ? Ke((ne(), oe("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, QH)), [
            [c, u.label]
        ]) : We("", !0), u.isMultiline ? (ne(), oe("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, e5)) : (ne(), oe("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, t5))], 64))), 256)), Ke(X("button", {
            onClick: t[0] || (t[0] = Jr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const n5 = gt(zH, [
            ["render", r5]
        ]),
        i5 = tt({
            props: {
                player: Object
            }
        }),
        s5 = {
            class: "waiting"
        },
        a5 = {
            class: "constrain"
        },
        o5 = {
            key: 0
        };

    function c5(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", s5, [X("div", a5, [e.player.message ? Ke((ne(), oe("p", o5, null, 512)), [
            [c, e.player.message]
        ]) : We("", !0)])])
    }
    const l5 = gt(i5, [
        ["render", c5]
    ]);
    tt({
        components: {
            Choices: sH,
            Doodle: dH,
            Draw: yH,
            Lobby: $H,
            PostGame: FH,
            SingleTextEntry: qH,
            MultiTextEntry: n5,
            Waiting: l5
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
            ns.galleryImpression(this.artifact.categoryId, "post_game")
        },
        methods: {
            onLinkClick() {
                ns.galleryClick(this.artifact.categoryId, "post_game"), io.setAsViewed(0)
            }
        }
    });
    const u5 = tt({
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
        f5 = ["value"];

    function d5(e, t, r, n, s, o) {
        return ne(), oe("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
        }, null, 40, f5)
    }
    const h5 = gt(u5, [
        ["render", d5]
    ]);
    var Ui, Oc, Ha = typeof Map == "function" ? new Map : (Ui = [], Oc = [], {
            has: function(e) {
                return Ui.indexOf(e) > -1
            },
            get: function(e) {
                return Oc[Ui.indexOf(e)]
            },
            set: function(e, t) {
                Ui.indexOf(e) === -1 && (Ui.push(e), Oc.push(t))
            },
            delete: function(e) {
                var t = Ui.indexOf(e);
                t > -1 && (Ui.splice(t, 1), Oc.splice(t, 1))
            }
        }),
        KS = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        KS = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function p5(e) {
        var t = Ha.get(e);
        t && t.destroy()
    }

    function g5(e) {
        var t = Ha.get(e);
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
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ha.has(n)) {
                    var s, o = null,
                        c = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== c && b()
                        },
                        h = function(R) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", b, !1), n.removeEventListener("keyup", b, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", b, !1), Object.keys(R).forEach(function(P) {
                                n.style[P] = R[P]
                            }), Ha.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", b, !1), n.addEventListener("autosize:update", b, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ha.set(n, {
                        destroy: h,
                        update: b
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), b()
                }

                function g(R) {
                    var P = n.style.width;
                    n.style.width = "0px", n.style.width = P, n.style.overflowY = R
                }

                function y() {
                    if (n.scrollHeight !== 0) {
                        var R = function(x) {
                                for (var U = []; x && x.parentNode && x.parentNode instanceof Element;) x.parentNode.scrollTop && U.push({
                                    node: x.parentNode,
                                    scrollTop: x.parentNode.scrollTop
                                }), x = x.parentNode;
                                return U
                            }(n),
                            P = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", c = n.clientWidth, R.forEach(function(x) {
                            x.node.scrollTop = x.scrollTop
                        }), P && (document.documentElement.scrollTop = P)
                    }
                }

                function b() {
                    y();
                    var R = Math.round(parseFloat(n.style.height)),
                        P = window.getComputedStyle(n, null),
                        x = P.boxSizing === "content-box" ? Math.round(parseFloat(P.height)) : n.offsetHeight;
                    if (x < R ? P.overflowY === "hidden" && (g("scroll"), y(), x = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : P.overflowY !== "hidden" && (g("hidden"), y(), x = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== x) {
                        u = x;
                        var U = KS("autosize:resized");
                        try {
                            n.dispatchEvent(U)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], p5), e
    }, Da.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], g5), e
    });
    var m5 = Da,
        v5 = {
            exports: {}
        },
        Ac = function(e) {
            return e && e.Math == Math && e
        },
        kr = Ac(typeof globalThis == "object" && globalThis) || Ac(typeof window == "object" && window) || Ac(typeof self == "object" && self) || Ac(typeof kt == "object" && kt) || function() {
            return this
        }() || Function("return this")(),
        dp = {},
        Mr = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        _5 = Mr,
        Ti = !_5(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        y5 = Mr,
        hp = !y5(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        E5 = hp,
        Ic = Function.prototype.call,
        Si = E5 ? Ic.bind(Ic) : function() {
            return Ic.apply(Ic, arguments)
        },
        VS = {},
        YS = {}.propertyIsEnumerable,
        qS = Object.getOwnPropertyDescriptor,
        b5 = qS && !YS.call({
            1: 2
        }, 1);
    VS.f = b5 ? function(t) {
        var r = qS(this, t);
        return !!r && r.enumerable
    } : YS;
    var zS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        XS = hp,
        JS = Function.prototype,
        T5 = JS.bind,
        Bd = JS.call,
        S5 = XS && T5.bind(Bd, Bd),
        ur = XS ? function(e) {
            return e && S5(e)
        } : function(e) {
            return e && function() {
                return Bd.apply(e, arguments)
            }
        },
        ZS = ur,
        O5 = ZS({}.toString),
        A5 = ZS("".slice),
        xl = function(e) {
            return A5(O5(e), 8, -1)
        },
        I5 = ur,
        C5 = Mr,
        R5 = xl,
        $f = Object,
        w5 = I5("".split),
        N5 = C5(function() {
            return !$f("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return R5(e) == "String" ? w5(e, "") : $f(e)
        } : $f,
        $5 = TypeError,
        _o = function(e) {
            if (e == null) throw $5("Can't call method on " + e);
            return e
        },
        L5 = N5,
        P5 = _o,
        Ul = function(e) {
            return L5(P5(e))
        },
        Or = function(e) {
            return typeof e == "function"
        },
        D5 = Or,
        ca = function(e) {
            return typeof e == "object" ? e !== null : D5(e)
        },
        Lf = kr,
        k5 = Or,
        M5 = function(e) {
            return k5(e) ? e : void 0
        },
        Fl = function(e, t) {
            return arguments.length < 2 ? M5(Lf[e]) : Lf[e] && Lf[e][t]
        },
        x5 = ur,
        QS = x5({}.isPrototypeOf),
        U5 = Fl,
        F5 = U5("navigator", "userAgent") || "",
        eO = kr,
        Pf = F5,
        hy = eO.process,
        py = eO.Deno,
        gy = hy && hy.versions || py && py.version,
        my = gy && gy.v8,
        nn, tl;
    my && (nn = my.split("."), tl = nn[0] > 0 && nn[0] < 4 ? 1 : +(nn[0] + nn[1]));
    !tl && Pf && (nn = Pf.match(/Edge\/(\d+)/), (!nn || nn[1] >= 74) && (nn = Pf.match(/Chrome\/(\d+)/), nn && (tl = +nn[1])));
    var B5 = tl,
        vy = B5,
        G5 = Mr,
        tO = !!Object.getOwnPropertySymbols && !G5(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && vy && vy < 41
        }),
        W5 = tO,
        rO = W5 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        j5 = Fl,
        H5 = Or,
        K5 = QS,
        V5 = rO,
        Y5 = Object,
        nO = V5 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = j5("Symbol");
            return H5(t) && K5(t.prototype, Y5(e))
        },
        q5 = String,
        z5 = function(e) {
            try {
                return q5(e)
            } catch {
                return "Object"
            }
        },
        X5 = Or,
        J5 = z5,
        Z5 = TypeError,
        Q5 = function(e) {
            if (X5(e)) return e;
            throw Z5(J5(e) + " is not a function")
        },
        e6 = Q5,
        pp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : e6(r)
        },
        Df = Si,
        kf = Or,
        Mf = ca,
        t6 = TypeError,
        r6 = function(e, t) {
            var r, n;
            if (t === "string" && kf(r = e.toString) && !Mf(n = Df(r, e)) || kf(r = e.valueOf) && !Mf(n = Df(r, e)) || t !== "string" && kf(r = e.toString) && !Mf(n = Df(r, e))) return n;
            throw t6("Can't convert object to primitive value")
        },
        Bl = {
            exports: {}
        },
        _y = kr,
        n6 = Object.defineProperty,
        gp = function(e, t) {
            try {
                n6(_y, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                _y[e] = t
            }
            return t
        },
        i6 = kr,
        s6 = gp,
        yy = "__core-js_shared__",
        a6 = i6[yy] || s6(yy, {}),
        mp = a6,
        Ey = mp;
    (Bl.exports = function(e, t) {
        return Ey[e] || (Ey[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var o6 = _o,
        c6 = Object,
        iO = function(e) {
            return c6(o6(e))
        },
        l6 = ur,
        u6 = iO,
        f6 = l6({}.hasOwnProperty),
        Oi = Object.hasOwn || function(t, r) {
            return f6(u6(t), r)
        },
        d6 = ur,
        h6 = 0,
        p6 = Math.random(),
        g6 = d6(1 .toString),
        sO = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + g6(++h6 + p6, 36)
        },
        m6 = kr,
        v6 = Bl.exports,
        by = Oi,
        _6 = sO,
        Ty = tO,
        aO = rO,
        Ss = v6("wks"),
        ts = m6.Symbol,
        Sy = ts && ts.for,
        y6 = aO ? ts : ts && ts.withoutSetter || _6,
        as = function(e) {
            if (!by(Ss, e) || !(Ty || typeof Ss[e] == "string")) {
                var t = "Symbol." + e;
                Ty && by(ts, e) ? Ss[e] = ts[e] : aO && Sy ? Ss[e] = Sy(t) : Ss[e] = y6(t)
            }
            return Ss[e]
        },
        E6 = Si,
        Oy = ca,
        Ay = nO,
        b6 = pp,
        T6 = r6,
        S6 = as,
        O6 = TypeError,
        A6 = S6("toPrimitive"),
        I6 = function(e, t) {
            if (!Oy(e) || Ay(e)) return e;
            var r = b6(e, A6),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = E6(r, e, t), !Oy(n) || Ay(n)) return n;
                throw O6("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), T6(e, t)
        },
        C6 = I6,
        R6 = nO,
        oO = function(e) {
            var t = C6(e, "string");
            return R6(t) ? t : t + ""
        },
        w6 = kr,
        Iy = ca,
        Gd = w6.document,
        N6 = Iy(Gd) && Iy(Gd.createElement),
        cO = function(e) {
            return N6 ? Gd.createElement(e) : {}
        },
        $6 = Ti,
        L6 = Mr,
        P6 = cO,
        lO = !$6 && !L6(function() {
            return Object.defineProperty(P6("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        D6 = Ti,
        k6 = Si,
        M6 = VS,
        x6 = zS,
        U6 = Ul,
        F6 = oO,
        B6 = Oi,
        G6 = lO,
        Cy = Object.getOwnPropertyDescriptor;
    dp.f = D6 ? Cy : function(t, r) {
        if (t = U6(t), r = F6(r), G6) try {
            return Cy(t, r)
        } catch {}
        if (B6(t, r)) return x6(!k6(M6.f, t, r), t[r])
    };
    var yo = {},
        W6 = Ti,
        j6 = Mr,
        uO = W6 && j6(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        H6 = ca,
        K6 = String,
        V6 = TypeError,
        os = function(e) {
            if (H6(e)) return e;
            throw V6(K6(e) + " is not an object")
        },
        Y6 = Ti,
        q6 = lO,
        z6 = uO,
        Cc = os,
        Ry = oO,
        X6 = TypeError,
        xf = Object.defineProperty,
        J6 = Object.getOwnPropertyDescriptor,
        Uf = "enumerable",
        Ff = "configurable",
        Bf = "writable";
    yo.f = Y6 ? z6 ? function(t, r, n) {
        if (Cc(t), r = Ry(r), Cc(n), typeof t == "function" && r === "prototype" && "value" in n && Bf in n && !n[Bf]) {
            var s = J6(t, r);
            s && s[Bf] && (t[r] = n.value, n = {
                configurable: Ff in n ? n[Ff] : s[Ff],
                enumerable: Uf in n ? n[Uf] : s[Uf],
                writable: !1
            })
        }
        return xf(t, r, n)
    } : xf : function(t, r, n) {
        if (Cc(t), r = Ry(r), Cc(n), q6) try {
            return xf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw X6("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var Z6 = Ti,
        Q6 = yo,
        eK = zS,
        vp = Z6 ? function(e, t, r) {
            return Q6.f(e, t, eK(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        fO = {
            exports: {}
        },
        Wd = Ti,
        tK = Oi,
        dO = Function.prototype,
        rK = Wd && Object.getOwnPropertyDescriptor,
        _p = tK(dO, "name"),
        nK = _p && function() {}.name === "something",
        iK = _p && (!Wd || Wd && rK(dO, "name").configurable),
        sK = {
            EXISTS: _p,
            PROPER: nK,
            CONFIGURABLE: iK
        },
        aK = ur,
        oK = Or,
        jd = mp,
        cK = aK(Function.toString);
    oK(jd.inspectSource) || (jd.inspectSource = function(e) {
        return cK(e)
    });
    var hO = jd.inspectSource,
        lK = kr,
        uK = Or,
        fK = hO,
        wy = lK.WeakMap,
        dK = uK(wy) && /native code/.test(fK(wy)),
        hK = Bl.exports,
        pK = sO,
        Ny = hK("keys"),
        pO = function(e) {
            return Ny[e] || (Ny[e] = pK(e))
        },
        yp = {},
        gK = dK,
        gO = kr,
        Gf = ur,
        mK = ca,
        vK = vp,
        Wf = Oi,
        jf = mp,
        _K = pO,
        yK = yp,
        $y = "Object already initialized",
        Hd = gO.TypeError,
        EK = gO.WeakMap,
        rl, so, nl, bK = function(e) {
            return nl(e) ? so(e) : rl(e, {})
        },
        TK = function(e) {
            return function(t) {
                var r;
                if (!mK(t) || (r = so(t)).type !== e) throw Hd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (gK || jf.state) {
        var Fi = jf.state || (jf.state = new EK),
            SK = Gf(Fi.get),
            Ly = Gf(Fi.has),
            OK = Gf(Fi.set);
        rl = function(e, t) {
            if (Ly(Fi, e)) throw new Hd($y);
            return t.facade = e, OK(Fi, e, t), t
        }, so = function(e) {
            return SK(Fi, e) || {}
        }, nl = function(e) {
            return Ly(Fi, e)
        }
    } else {
        var Os = _K("state");
        yK[Os] = !0, rl = function(e, t) {
            if (Wf(e, Os)) throw new Hd($y);
            return t.facade = e, vK(e, Os, t), t
        }, so = function(e) {
            return Wf(e, Os) ? e[Os] : {}
        }, nl = function(e) {
            return Wf(e, Os)
        }
    }
    var mO = {
            set: rl,
            get: so,
            has: nl,
            enforce: bK,
            getterFor: TK
        },
        AK = Mr,
        IK = Or,
        Rc = Oi,
        Kd = Ti,
        CK = sK.CONFIGURABLE,
        RK = hO,
        vO = mO,
        wK = vO.enforce,
        NK = vO.get,
        Fc = Object.defineProperty,
        $K = Kd && !AK(function() {
            return Fc(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        LK = String(String).split("String"),
        PK = fO.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Rc(e, "name") || CK && e.name !== t) && (Kd ? Fc(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), $K && r && Rc(r, "arity") && e.length !== r.arity && Fc(e, "length", {
                value: r.arity
            });
            try {
                r && Rc(r, "constructor") && r.constructor ? Kd && Fc(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = wK(e);
            return Rc(n, "source") || (n.source = LK.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = PK(function() {
        return IK(this) && NK(this).source || RK(this)
    }, "toString");
    var DK = Or,
        kK = yo,
        MK = fO.exports,
        xK = gp,
        _O = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (DK(r) && MK(r, o, n), n.global) s ? e[t] = r : xK(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : kK.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        yO = {},
        UK = Math.ceil,
        FK = Math.floor,
        BK = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? FK : UK)(r)
        },
        GK = BK,
        Gl = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : GK(t)
        },
        WK = Gl,
        jK = Math.max,
        HK = Math.min,
        KK = function(e, t) {
            var r = WK(e);
            return r < 0 ? jK(r + t, 0) : HK(r, t)
        },
        VK = Gl,
        YK = Math.min,
        EO = function(e) {
            return e > 0 ? YK(VK(e), 9007199254740991) : 0
        },
        qK = EO,
        zK = function(e) {
            return qK(e.length)
        },
        XK = Ul,
        JK = KK,
        ZK = zK,
        Py = function(e) {
            return function(t, r, n) {
                var s = XK(t),
                    o = ZK(s),
                    c = JK(n, o),
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
        QK = {
            includes: Py(!0),
            indexOf: Py(!1)
        },
        eV = ur,
        Hf = Oi,
        tV = Ul,
        rV = QK.indexOf,
        nV = yp,
        Dy = eV([].push),
        bO = function(e, t) {
            var r = tV(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Hf(nV, o) && Hf(r, o) && Dy(s, o);
            for (; t.length > n;) Hf(r, o = t[n++]) && (~rV(s, o) || Dy(s, o));
            return s
        },
        Ep = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        iV = bO,
        sV = Ep,
        aV = sV.concat("length", "prototype");
    yO.f = Object.getOwnPropertyNames || function(t) {
        return iV(t, aV)
    };
    var TO = {};
    TO.f = Object.getOwnPropertySymbols;
    var oV = Fl,
        cV = ur,
        lV = yO,
        uV = TO,
        fV = os,
        dV = cV([].concat),
        hV = oV("Reflect", "ownKeys") || function(t) {
            var r = lV.f(fV(t)),
                n = uV.f;
            return n ? dV(r, n(t)) : r
        },
        ky = Oi,
        pV = hV,
        gV = dp,
        mV = yo,
        vV = function(e, t, r) {
            for (var n = pV(t), s = mV.f, o = gV.f, c = 0; c < n.length; c++) {
                var u = n[c];
                !ky(e, u) && !(r && ky(r, u)) && s(e, u, o(t, u))
            }
        },
        _V = Mr,
        yV = Or,
        EV = /#|\.prototype\./,
        Eo = function(e, t) {
            var r = TV[bV(e)];
            return r == OV ? !0 : r == SV ? !1 : yV(t) ? _V(t) : !!t
        },
        bV = Eo.normalize = function(e) {
            return String(e).replace(EV, ".").toLowerCase()
        },
        TV = Eo.data = {},
        SV = Eo.NATIVE = "N",
        OV = Eo.POLYFILL = "P",
        AV = Eo,
        Kf = kr,
        IV = dp.f,
        CV = vp,
        RV = _O,
        wV = gp,
        NV = vV,
        $V = AV,
        SO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, c, u, f, h, g;
            if (n ? c = Kf : s ? c = Kf[r] || wV(r, {}) : c = (Kf[r] || {}).prototype, c)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = IV(c, u), f = g && g.value) : f = c[u], o = $V(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        NV(h, f)
                    }(e.sham || f && f.sham) && CV(h, "sham", !0), RV(c, u, h, e)
                }
        },
        LV = ca,
        PV = xl,
        DV = as,
        kV = DV("match"),
        MV = function(e) {
            var t;
            return LV(e) && ((t = e[kV]) !== void 0 ? !!t : PV(e) == "RegExp")
        },
        xV = as,
        UV = xV("toStringTag"),
        OO = {};
    OO[UV] = "z";
    var FV = String(OO) === "[object z]",
        BV = FV,
        GV = Or,
        Bc = xl,
        WV = as,
        jV = WV("toStringTag"),
        HV = Object,
        KV = Bc(function() {
            return arguments
        }()) == "Arguments",
        VV = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        YV = BV ? Bc : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = VV(t = HV(e), jV)) == "string" ? r : KV ? Bc(t) : (n = Bc(t)) == "Object" && GV(t.callee) ? "Arguments" : n
        },
        qV = YV,
        zV = String,
        Wl = function(e) {
            if (qV(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return zV(e)
        },
        XV = os,
        AO = function() {
            var e = XV(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        JV = Si,
        ZV = Oi,
        QV = QS,
        e7 = AO,
        My = RegExp.prototype,
        t7 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in My) && !ZV(e, "flags") && QV(My, e) ? JV(e7, e) : t
        },
        bp = ur,
        r7 = iO,
        n7 = Math.floor,
        Vf = bp("".charAt),
        i7 = bp("".replace),
        Yf = bp("".slice),
        s7 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        a7 = /\$([$&'`]|\d{1,2})/g,
        IO = function(e, t, r, n, s, o) {
            var c = r + e.length,
                u = n.length,
                f = a7;
            return s !== void 0 && (s = r7(s), f = s7), i7(o, f, function(h, g) {
                var y;
                switch (Vf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Yf(t, 0, r);
                    case "'":
                        return Yf(t, c);
                    case "<":
                        y = s[Yf(g, 1, -1)];
                        break;
                    default:
                        var b = +g;
                        if (b === 0) return h;
                        if (b > u) {
                            var R = n7(b / 10);
                            return R === 0 ? h : R <= u ? n[R - 1] === void 0 ? Vf(g, 1) : n[R - 1] + Vf(g, 1) : h
                        }
                        y = n[b - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        o7 = SO,
        c7 = Si,
        Tp = ur,
        xy = _o,
        l7 = Or,
        u7 = MV,
        $a = Wl,
        f7 = pp,
        d7 = t7,
        h7 = IO,
        p7 = as,
        g7 = p7("replace"),
        m7 = TypeError,
        CO = Tp("".indexOf);
    Tp("".replace);
    var Uy = Tp("".slice),
        v7 = Math.max,
        Fy = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : CO(e, t, r)
        };
    o7({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = xy(this),
                s, o, c, u, f, h, g, y, b, R = 0,
                P = 0,
                x = "";
            if (t != null) {
                if (s = u7(t), s && (o = $a(xy(d7(t))), !~CO(o, "g"))) throw m7("`.replaceAll` does not allow non-global regexes");
                if (c = f7(t, g7), c) return c7(c, t, n, r)
            }
            for (u = $a(n), f = $a(t), h = l7(r), h || (r = $a(r)), g = f.length, y = v7(1, g), R = Fy(u, f, 0); R !== -1;) b = h ? $a(r(f, R, u)) : h7(f, u, R, [], void 0, r), x += Uy(u, P, R) + b, P = R + g, R = Fy(u, f, R + y);
            return P < u.length && (x += Uy(u, P)), x
        }
    });
    var Sp = Mr,
        _7 = kr,
        Op = _7.RegExp,
        Ap = Sp(function() {
            var e = Op("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        y7 = Ap || Sp(function() {
            return !Op("a", "y").sticky
        }),
        E7 = Ap || Sp(function() {
            var e = Op("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        b7 = {
            BROKEN_CARET: E7,
            MISSED_STICKY: y7,
            UNSUPPORTED_Y: Ap
        },
        RO = {},
        T7 = bO,
        S7 = Ep,
        O7 = Object.keys || function(t) {
            return T7(t, S7)
        },
        A7 = Ti,
        I7 = uO,
        C7 = yo,
        R7 = os,
        w7 = Ul,
        N7 = O7;
    RO.f = A7 && !I7 ? Object.defineProperties : function(t, r) {
        R7(t);
        for (var n = w7(r), s = N7(r), o = s.length, c = 0, u; o > c;) C7.f(t, u = s[c++], n[u]);
        return t
    };
    var $7 = Fl,
        L7 = $7("document", "documentElement"),
        P7 = os,
        D7 = RO,
        By = Ep,
        k7 = yp,
        M7 = L7,
        x7 = cO,
        U7 = pO,
        Gy = ">",
        Wy = "<",
        Vd = "prototype",
        Yd = "script",
        wO = U7("IE_PROTO"),
        qf = function() {},
        NO = function(e) {
            return Wy + Yd + Gy + e + Wy + "/" + Yd + Gy
        },
        jy = function(e) {
            e.write(NO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        F7 = function() {
            var e = x7("iframe"),
                t = "java" + Yd + ":",
                r;
            return e.style.display = "none", M7.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(NO("document.F=Object")), r.close(), r.F
        },
        wc, Gc = function() {
            try {
                wc = new ActiveXObject("htmlfile")
            } catch {}
            Gc = typeof document < "u" ? document.domain && wc ? jy(wc) : F7() : jy(wc);
            for (var e = By.length; e--;) delete Gc[Vd][By[e]];
            return Gc()
        };
    k7[wO] = !0;
    var B7 = Object.create || function(t, r) {
            var n;
            return t !== null ? (qf[Vd] = P7(t), n = new qf, qf[Vd] = null, n[wO] = t) : n = Gc(), r === void 0 ? n : D7.f(n, r)
        },
        G7 = Mr,
        W7 = kr,
        j7 = W7.RegExp,
        H7 = G7(function() {
            var e = j7(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        K7 = Mr,
        V7 = kr,
        Y7 = V7.RegExp,
        q7 = K7(function() {
            var e = Y7("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Ls = Si,
        jl = ur,
        z7 = Wl,
        X7 = AO,
        J7 = b7,
        Z7 = Bl.exports,
        Q7 = B7,
        eY = mO.get,
        tY = H7,
        rY = q7,
        nY = Z7("native-string-replace", String.prototype.replace),
        il = RegExp.prototype.exec,
        qd = il,
        iY = jl("".charAt),
        sY = jl("".indexOf),
        aY = jl("".replace),
        zf = jl("".slice),
        zd = function() {
            var e = /a/,
                t = /b*/g;
            return Ls(il, e, "a"), Ls(il, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        $O = J7.BROKEN_CARET,
        Xd = /()??/.exec("")[1] !== void 0,
        oY = zd || Xd || $O || tY || rY;
    oY && (qd = function(t) {
        var r = this,
            n = eY(r),
            s = z7(t),
            o = n.raw,
            c, u, f, h, g, y, b;
        if (o) return o.lastIndex = r.lastIndex, c = Ls(qd, o, s), r.lastIndex = o.lastIndex, c;
        var R = n.groups,
            P = $O && r.sticky,
            x = Ls(X7, r),
            U = r.source,
            I = 0,
            H = s;
        if (P && (x = aY(x, "y", ""), sY(x, "g") === -1 && (x += "g"), H = zf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && iY(s, r.lastIndex - 1) !== `
`) && (U = "(?: " + U + ")", H = " " + H, I++), u = new RegExp("^(?:" + U + ")", x)), Xd && (u = new RegExp("^" + U + "$(?!\\s)", x)), zd && (f = r.lastIndex), h = Ls(il, P ? u : r, H), P ? h ? (h.input = zf(h.input, I), h[0] = zf(h[0], I), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : zd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), Xd && h && h.length > 1 && Ls(nY, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && R)
            for (h.groups = y = Q7(null), g = 0; g < R.length; g++) b = R[g], y[b[0]] = h[b[1]];
        return h
    });
    var Ip = qd,
        cY = SO,
        Hy = Ip;
    cY({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Hy
    }, {
        exec: Hy
    });
    var lY = hp,
        LO = Function.prototype,
        Ky = LO.apply,
        Vy = LO.call,
        uY = typeof Reflect == "object" && Reflect.apply || (lY ? Vy.bind(Ky) : function() {
            return Vy.apply(Ky, arguments)
        }),
        Yy = ur,
        qy = _O,
        fY = Ip,
        zy = Mr,
        PO = as,
        dY = vp,
        hY = PO("species"),
        Xf = RegExp.prototype,
        pY = function(e, t, r, n) {
            var s = PO(e),
                o = !zy(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                c = o && !zy(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[hY] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !c || r) {
                var u = Yy(/./ [s]),
                    f = t(s, "" [e], function(h, g, y, b, R) {
                        var P = Yy(h),
                            x = g.exec;
                        return x === fY || x === Xf.exec ? o && !R ? {
                            done: !0,
                            value: u(g, y, b)
                        } : {
                            done: !0,
                            value: P(y, g, b)
                        } : {
                            done: !1
                        }
                    });
                qy(String.prototype, e, f[0]), qy(Xf, s, f[1])
            }
            n && dY(Xf[s], "sham", !0)
        },
        Cp = ur,
        gY = Gl,
        mY = Wl,
        vY = _o,
        _Y = Cp("".charAt),
        Xy = Cp("".charCodeAt),
        yY = Cp("".slice),
        Jy = function(e) {
            return function(t, r) {
                var n = mY(vY(t)),
                    s = gY(r),
                    o = n.length,
                    c, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (c = Xy(n, s), c < 55296 || c > 56319 || s + 1 === o || (u = Xy(n, s + 1)) < 56320 || u > 57343 ? e ? _Y(n, s) : c : e ? yY(n, s, s + 2) : (c - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        EY = {
            codeAt: Jy(!1),
            charAt: Jy(!0)
        },
        bY = EY.charAt,
        TY = function(e, t, r) {
            return t + (r ? bY(e, t).length : 1)
        },
        Zy = Si,
        SY = os,
        OY = Or,
        AY = xl,
        IY = Ip,
        CY = TypeError,
        RY = function(e, t) {
            var r = e.exec;
            if (OY(r)) {
                var n = Zy(r, e, t);
                return n !== null && SY(n), n
            }
            if (AY(e) === "RegExp") return Zy(IY, e, t);
            throw CY("RegExp#exec called on incompatible receiver")
        },
        wY = uY,
        Qy = Si,
        Hl = ur,
        NY = pY,
        $Y = Mr,
        LY = os,
        PY = Or,
        DY = Gl,
        kY = EO,
        As = Wl,
        MY = _o,
        xY = TY,
        UY = pp,
        FY = IO,
        BY = RY,
        GY = as,
        Jd = GY("replace"),
        WY = Math.max,
        jY = Math.min,
        HY = Hl([].concat),
        Jf = Hl([].push),
        eE = Hl("".indexOf),
        tE = Hl("".slice),
        KY = function(e) {
            return e === void 0 ? e : String(e)
        },
        VY = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        rE = function() {
            return /./ [Jd] ? /./ [Jd]("a", "$0") === "" : !1
        }(),
        YY = !$Y(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    NY("replace", function(e, t, r) {
        var n = rE ? "$" : "$0";
        return [function(o, c) {
            var u = MY(this),
                f = o == null ? void 0 : UY(o, Jd);
            return f ? Qy(f, o, u, c) : Qy(t, As(u), o, c)
        }, function(s, o) {
            var c = LY(this),
                u = As(s);
            if (typeof o == "string" && eE(o, n) === -1 && eE(o, "$<") === -1) {
                var f = r(t, c, u, o);
                if (f.done) return f.value
            }
            var h = PY(o);
            h || (o = As(o));
            var g = c.global;
            if (g) {
                var y = c.unicode;
                c.lastIndex = 0
            }
            for (var b = [];;) {
                var R = BY(c, u);
                if (R === null || (Jf(b, R), !g)) break;
                var P = As(R[0]);
                P === "" && (c.lastIndex = xY(u, kY(c.lastIndex), y))
            }
            for (var x = "", U = 0, I = 0; I < b.length; I++) {
                R = b[I];
                for (var H = As(R[0]), Y = WY(jY(DY(R.index), u.length), 0), W = [], G = 1; G < R.length; G++) Jf(W, KY(R[G]));
                var z = R.groups;
                if (h) {
                    var ae = HY([H], W, Y, u);
                    z !== void 0 && Jf(ae, z);
                    var ce = As(wY(o, void 0, ae))
                } else ce = FY(H, u, Y, W, z, o);
                Y >= U && (x += tE(u, U, Y) + ce, U = Y + H.length)
            }
            return x + tE(u, U)
        }]
    }, !YY || !VY || rE);
    var qY = kr,
        zY = ur,
        XY = function(e, t) {
            return zY(qY[e].prototype[t])
        },
        JY = XY,
        ZY = JY("String", "replaceAll"),
        QY = ZY,
        eq = QY,
        tq = eq,
        rq = tq,
        nq = rq,
        iq = nq;
    (function(e) {
        e.exports = iq
    })(v5);
    tt({
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
            this.autosize && m5(this.$refs.textarea)
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
        Kl = {},
        DO = {},
        Vl = {},
        Rp = {};
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
    })(Rp);
    Object.defineProperty(Vl, "__esModule", {
        value: !0
    });
    Vl.Tokenizer = void 0;
    var ei = Rp,
        sq = function() {
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
                    !h && !o ? f.convertToTextToken() : o ? f.type === ei.Token.Type.endTag && f.content === c ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, g = !1) : h.noNesting && f.type === ei.Token.Type.startTag && (o = !0, c = f.content, u = ""), g && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], o = n.exec(t), c = 0; o;) {
                    var u = o.index - c;
                    u > 0 && s.push(e.createTextToken(t.substr(c, u))), s.push(e.createTagToken(o)), c = n.lastIndex, o = n.exec(t)
                }
                var f = t.length - c;
                return f > 0 && s.push(e.createTextToken(t.substr(c, f))), s
            }, e.createTextToken = function(t) {
                return new ei.Token(ei.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + r.length, t[0].length - 2 - r.length), c = s.exec(o); c;) c[1] ? n[c[1]] = c[3] : n[r] = c[3], c = s.exec(o);
                    return new ei.Token(ei.Token.Type.startTag, r, n, t[0])
                }
                return new ei.Token(ei.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    Vl.Tokenizer = sq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Vl,
            r = Rp,
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
                            y = s.buildTreeFromTokens(h, c, g);
                        if (!y) return null;
                        o.subTrees.push(y)
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
    })(DO);
    var bo = {};
    Object.defineProperty(bo, "__esModule", {
        value: !0
    });
    bo.Tag = void 0;
    var aq = function() {
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
    bo.Tag = aq;
    Object.defineProperty(Kl, "__esModule", {
        value: !0
    });
    Kl.BBCodeParser = void 0;
    var nE = DO,
        iE = bo,
        oq = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: iE.Tag.create("b"),
                        i: iE.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = nE.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === nE.ParseTree.Type.text) {
                        var g = f.content;
                        n && (g = o.escapeHTML ? e.escapeHTML(g) : g), r && !u && (g = g.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), c += g
                    } else {
                        var y = o.tags[f.content],
                            b = o.treeToHtml(f.subTrees, y.insertLineBreaks, n, s);
                        s ? c += b : c += y.markupGenerator(y, b, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = y.suppressLineBreaks
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
    Kl.BBCodeParser = oq;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Kl;
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
    })(Wi);
    const cq = {
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
    var lq = {
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
    })(lq);
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

    function uq(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var fq = uq,
        dq = TT,
        hq = dq(Object.keys, Object),
        pq = hq,
        gq = Hh,
        mq = pq,
        vq = Object.prototype,
        _q = vq.hasOwnProperty;

    function yq(e) {
        if (!gq(e)) return mq(e);
        var t = [];
        for (var r in Object(e)) _q.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var Eq = yq,
        bq = NT,
        Tq = Eq,
        Sq = Pl;

    function Oq(e) {
        return Sq(e) ? bq(e) : Tq(e)
    }
    var Yl = Oq,
        Aq = po,
        Iq = Yl;

    function Cq(e, t) {
        return e && Aq(t, Iq(t), e)
    }
    var Rq = Cq,
        wq = po,
        Nq = go;

    function $q(e, t) {
        return e && wq(t, Nq(t), e)
    }
    var Lq = $q;

    function Pq(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var c = e[r];
            t(c, r, e) && (o[s++] = c)
        }
        return o
    }
    var Dq = Pq;

    function kq() {
        return []
    }
    var kO = kq,
        Mq = Dq,
        xq = kO,
        Uq = Object.prototype,
        Fq = Uq.propertyIsEnumerable,
        sE = Object.getOwnPropertySymbols,
        Bq = sE ? function(e) {
            return e == null ? [] : (e = Object(e), Mq(sE(e), function(t) {
                return Fq.call(e, t)
            }))
        } : xq,
        wp = Bq,
        Gq = po,
        Wq = wp;

    function jq(e, t) {
        return Gq(e, Wq(e), t)
    }
    var Hq = jq;

    function Kq(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var MO = Kq,
        Vq = MO,
        Yq = jh,
        qq = wp,
        zq = kO,
        Xq = Object.getOwnPropertySymbols,
        Jq = Xq ? function(e) {
            for (var t = []; e;) Vq(t, qq(e)), e = Yq(e);
            return t
        } : zq,
        xO = Jq,
        Zq = po,
        Qq = xO;

    function e9(e, t) {
        return Zq(e, Qq(e), t)
    }
    var t9 = e9,
        r9 = MO,
        n9 = Ei;

    function i9(e, t, r) {
        var n = t(e);
        return n9(e) ? n : r9(n, r(e))
    }
    var UO = i9,
        s9 = UO,
        a9 = wp,
        o9 = Yl;

    function c9(e) {
        return s9(e, o9, a9)
    }
    var l9 = c9,
        u9 = UO,
        f9 = xO,
        d9 = go;

    function h9(e) {
        return u9(e, d9, f9)
    }
    var p9 = h9,
        g9 = ss,
        m9 = fn,
        v9 = g9(m9, "DataView"),
        _9 = v9,
        y9 = ss,
        E9 = fn,
        b9 = y9(E9, "Promise"),
        T9 = b9,
        S9 = ss,
        O9 = fn,
        A9 = S9(O9, "Set"),
        I9 = A9,
        C9 = ss,
        R9 = fn,
        w9 = C9(R9, "WeakMap"),
        N9 = w9,
        Zd = _9,
        Qd = Bh,
        eh = T9,
        th = I9,
        rh = N9,
        FO = na,
        la = gT,
        aE = "[object Map]",
        $9 = "[object Object]",
        oE = "[object Promise]",
        cE = "[object Set]",
        lE = "[object WeakMap]",
        uE = "[object DataView]",
        L9 = la(Zd),
        P9 = la(Qd),
        D9 = la(eh),
        k9 = la(th),
        M9 = la(rh),
        ji = FO;
    (Zd && ji(new Zd(new ArrayBuffer(1))) != uE || Qd && ji(new Qd) != aE || eh && ji(eh.resolve()) != oE || th && ji(new th) != cE || rh && ji(new rh) != lE) && (ji = function(e) {
        var t = FO(e),
            r = t == $9 ? e.constructor : void 0,
            n = r ? la(r) : "";
        if (n) switch (n) {
            case L9:
                return uE;
            case P9:
                return aE;
            case D9:
                return oE;
            case k9:
                return cE;
            case M9:
                return lE
        }
        return t
    });
    var Np = ji,
        x9 = Object.prototype,
        U9 = x9.hasOwnProperty;

    function F9(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && U9.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var B9 = F9,
        G9 = Wh;

    function W9(e, t) {
        var r = t ? G9(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var j9 = W9,
        H9 = /\w*$/;

    function K9(e) {
        var t = new e.constructor(e.source, H9.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var V9 = K9,
        fE = Nl,
        dE = fE ? fE.prototype : void 0,
        hE = dE ? dE.valueOf : void 0;

    function Y9(e) {
        return hE ? Object(hE.call(e)) : {}
    }
    var q9 = Y9,
        z9 = Wh,
        X9 = j9,
        J9 = V9,
        Z9 = q9,
        Q9 = ET,
        ez = "[object Boolean]",
        tz = "[object Date]",
        rz = "[object Map]",
        nz = "[object Number]",
        iz = "[object RegExp]",
        sz = "[object Set]",
        az = "[object String]",
        oz = "[object Symbol]",
        cz = "[object ArrayBuffer]",
        lz = "[object DataView]",
        uz = "[object Float32Array]",
        fz = "[object Float64Array]",
        dz = "[object Int8Array]",
        hz = "[object Int16Array]",
        pz = "[object Int32Array]",
        gz = "[object Uint8Array]",
        mz = "[object Uint8ClampedArray]",
        vz = "[object Uint16Array]",
        _z = "[object Uint32Array]";

    function yz(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case cz:
                return z9(e);
            case ez:
            case tz:
                return new n(+e);
            case lz:
                return X9(e, r);
            case uz:
            case fz:
            case dz:
            case hz:
            case pz:
            case gz:
            case mz:
            case vz:
            case _z:
                return Q9(e, r);
            case rz:
                return new n;
            case nz:
            case az:
                return new n(e);
            case iz:
                return J9(e);
            case sz:
                return new n;
            case oz:
                return Z9(e)
        }
    }
    var Ez = yz,
        bz = Np,
        Tz = yi,
        Sz = "[object Map]";

    function Oz(e) {
        return Tz(e) && bz(e) == Sz
    }
    var Az = Oz,
        Iz = Az,
        Cz = Kh,
        pE = no.exports,
        gE = pE && pE.isMap,
        Rz = gE ? Cz(gE) : Iz,
        wz = Rz,
        Nz = Np,
        $z = yi,
        Lz = "[object Set]";

    function Pz(e) {
        return $z(e) && Nz(e) == Lz
    }
    var Dz = Pz,
        kz = Dz,
        Mz = Kh,
        mE = no.exports,
        vE = mE && mE.isSet,
        xz = vE ? Mz(vE) : kz,
        Uz = xz,
        Fz = vT,
        Bz = fq,
        Gz = Vh,
        Wz = Rq,
        jz = Lq,
        Hz = Xc.exports,
        Kz = bT,
        Vz = Hq,
        Yz = t9,
        qz = l9,
        zz = p9,
        Xz = Np,
        Jz = B9,
        Zz = Ez,
        Qz = ST,
        eX = Ei,
        tX = ro.exports,
        rX = wz,
        nX = dn,
        iX = Uz,
        sX = Yl,
        aX = go,
        oX = 1,
        cX = 2,
        lX = 4,
        BO = "[object Arguments]",
        uX = "[object Array]",
        fX = "[object Boolean]",
        dX = "[object Date]",
        hX = "[object Error]",
        GO = "[object Function]",
        pX = "[object GeneratorFunction]",
        gX = "[object Map]",
        mX = "[object Number]",
        WO = "[object Object]",
        vX = "[object RegExp]",
        _X = "[object Set]",
        yX = "[object String]",
        EX = "[object Symbol]",
        bX = "[object WeakMap]",
        TX = "[object ArrayBuffer]",
        SX = "[object DataView]",
        OX = "[object Float32Array]",
        AX = "[object Float64Array]",
        IX = "[object Int8Array]",
        CX = "[object Int16Array]",
        RX = "[object Int32Array]",
        wX = "[object Uint8Array]",
        NX = "[object Uint8ClampedArray]",
        $X = "[object Uint16Array]",
        LX = "[object Uint32Array]",
        vt = {};
    vt[BO] = vt[uX] = vt[TX] = vt[SX] = vt[fX] = vt[dX] = vt[OX] = vt[AX] = vt[IX] = vt[CX] = vt[RX] = vt[gX] = vt[mX] = vt[WO] = vt[vX] = vt[_X] = vt[yX] = vt[EX] = vt[wX] = vt[NX] = vt[$X] = vt[LX] = !0;
    vt[hX] = vt[GO] = vt[bX] = !1;

    function Wc(e, t, r, n, s, o) {
        var c, u = t & oX,
            f = t & cX,
            h = t & lX;
        if (r && (c = s ? r(e, n, s, o) : r(e)), c !== void 0) return c;
        if (!nX(e)) return e;
        var g = eX(e);
        if (g) {
            if (c = Jz(e), !u) return Kz(e, c)
        } else {
            var y = Xz(e),
                b = y == GO || y == pX;
            if (tX(e)) return Hz(e, u);
            if (y == WO || y == BO || b && !s) {
                if (c = f || b ? {} : Qz(e), !u) return f ? Yz(e, jz(c, e)) : Vz(e, Wz(c, e))
            } else {
                if (!vt[y]) return s ? e : {};
                c = Zz(e, y, u)
            }
        }
        o || (o = new Fz);
        var R = o.get(e);
        if (R) return R;
        o.set(e, c), iX(e) ? e.forEach(function(U) {
            c.add(Wc(U, t, r, U, e, o))
        }) : rX(e) && e.forEach(function(U, I) {
            c.set(I, Wc(U, t, r, I, e, o))
        });
        var P = h ? f ? zz : qz : f ? aX : sX,
            x = g ? void 0 : P(e);
        return Bz(x || e, function(U, I) {
            x && (I = U, U = e[I]), Gz(c, I, Wc(U, t, r, I, e, o))
        }), c
    }
    var PX = Wc,
        DX = PX,
        kX = 1,
        MX = 4;

    function xX(e) {
        return DX(e, kX | MX)
    }
    var jO = xX;
    const UX = tt({
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
                !e || (this.values = jO(this.$ecastValues), this.content = (n = dy.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await dy.send({
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
        HO = "main/@moderator/assets/ad9172fc.png",
        KO = "main/@moderator/assets/dc131b16.png",
        FX = "main/@moderator/assets/38715b18.png",
        BX = "main/@moderator/assets/b0d7c822.png",
        GX = "main/@moderator/assets/06150f24.png",
        Zr = e => (ea("data-v-c4b66a33"), e = e(), ta(), e),
        WX = {
            class: "jbg"
        },
        jX = {
            key: 0,
            class: "options"
        },
        HX = Zr(() => X("img", {
            src: HO,
            alt: "Leave Feedback"
        }, null, -1)),
        KX = Zr(() => X("span", null, [mr("LEAVE"), X("br"), mr("FEEDBACK")], -1)),
        VX = [HX, KX],
        YX = Zr(() => X("img", {
            src: KO,
            alt: "Send Debug"
        }, null, -1)),
        qX = Zr(() => X("span", null, [mr("SEND A"), X("br"), mr("DEBUG")], -1)),
        zX = [YX, qX],
        XX = {
            key: 1,
            class: "feedback"
        },
        JX = Zr(() => X("img", {
            class: "image",
            src: HO,
            alt: "Feedback"
        }, null, -1)),
        ZX = Zr(() => X("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        QX = Zr(() => X("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        eJ = {
            class: "buttons"
        },
        tJ = Zr(() => X("img", {
            src: FX,
            alt: "good"
        }, null, -1)),
        rJ = [tJ],
        nJ = Zr(() => X("img", {
            src: BX,
            alt: "good"
        }, null, -1)),
        iJ = [nJ],
        sJ = Zr(() => X("img", {
            src: GX,
            alt: "bad"
        }, null, -1)),
        aJ = [sJ],
        oJ = {
            class: "actions"
        },
        cJ = {
            key: 0,
            class: "content-guess"
        },
        lJ = mr("Feedback is about: "),
        uJ = {
            key: 2,
            class: "debug"
        },
        fJ = Zr(() => X("img", {
            class: "image",
            src: KO,
            alt: "Debug"
        }, null, -1)),
        dJ = Zr(() => X("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        hJ = {
            class: "actions"
        };

    function pJ(e, t, r, n, s, o) {
        return ne(), oe("div", WX, [e.screen === "options" ? (ne(), oe("div", jX, [X("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, VX), X("button", {
            onClick: t[1] || (t[1] = (...c) => e.onDebugClick && e.onDebugClick(...c))
        }, zX)])) : e.screen === "feedback" ? (ne(), oe("div", XX, [JX, ZX, X("div", {
            class: Ge(["vibes", {
                "has-selected": e.vibe
            }])
        }, [QX, X("div", eJ, [X("button", {
            class: Ge({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = c => e.onVibeClick("good"))
        }, rJ, 2), X("button", {
            class: Ge({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = c => e.onVibeClick("meh"))
        }, iJ, 2), X("button", {
            class: Ge({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = c => e.onVibeClick("bad"))
        }, aJ, 2)])], 2), X("div", oJ, [e.content ? (ne(), oe("div", cJ, [Ke(X("input", {
            "onUpdate:modelValue": t[5] || (t[5] = c => e.isContent = c),
            type: "checkbox"
        }, null, 512), [
            [RP, e.isContent]
        ]), X("span", null, [lJ, X("em", null, Xe(e.content), 1)])])) : We("", !0), Ke(X("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = c => e.message = c),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [Xv, e.message]
        ]), X("button", {
            onClick: t[7] || (t[7] = Jr((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Xe(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (ne(), oe("div", uJ, [fJ, dJ, X("div", hJ, [Ke(X("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = c => e.message = c),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [Xv, e.message]
        ]), X("button", {
            onClick: t[9] || (t[9] = Jr((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Xe(e.$t("ACTION.OK")), 1)])])) : We("", !0)])
    }
    const gJ = gt(UX, [
        ["render", pJ],
        ["__scopeId", "data-v-c4b66a33"]
    ]);
    tt({
        methods: {
            onFeedbackClick() {
                this.$showModal(gJ)
            }
        }
    });
    var mJ = fn,
        vJ = function() {
            return mJ.Date.now()
        },
        _J = vJ,
        yJ = /\s/;

    function EJ(e) {
        for (var t = e.length; t-- && yJ.test(e.charAt(t)););
        return t
    }
    var bJ = EJ,
        TJ = bJ,
        SJ = /^\s+/;

    function OJ(e) {
        return e && e.slice(0, TJ(e) + 1).replace(SJ, "")
    }
    var AJ = OJ,
        IJ = na,
        CJ = yi,
        RJ = "[object Symbol]";

    function wJ(e) {
        return typeof e == "symbol" || CJ(e) && IJ(e) == RJ
    }
    var ql = wJ,
        NJ = AJ,
        _E = dn,
        $J = ql,
        yE = 0 / 0,
        LJ = /^[-+]0x[0-9a-f]+$/i,
        PJ = /^0b[01]+$/i,
        DJ = /^0o[0-7]+$/i,
        kJ = parseInt;

    function MJ(e) {
        if (typeof e == "number") return e;
        if ($J(e)) return yE;
        if (_E(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = _E(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = NJ(e);
        var r = PJ.test(e);
        return r || DJ.test(e) ? kJ(e.slice(2), r ? 2 : 8) : LJ.test(e) ? yE : +e
    }
    var xJ = MJ,
        UJ = dn,
        Zf = _J,
        EE = xJ,
        FJ = "Expected a function",
        BJ = Math.max,
        GJ = Math.min;

    function WJ(e, t, r) {
        var n, s, o, c, u, f, h = 0,
            g = !1,
            y = !1,
            b = !0;
        if (typeof e != "function") throw new TypeError(FJ);
        t = EE(t) || 0, UJ(r) && (g = !!r.leading, y = "maxWait" in r, o = y ? BJ(EE(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b);

        function R(z) {
            var ae = n,
                ce = s;
            return n = s = void 0, h = z, c = e.apply(ce, ae), c
        }

        function P(z) {
            return h = z, u = setTimeout(I, t), g ? R(z) : c
        }

        function x(z) {
            var ae = z - f,
                ce = z - h,
                ue = t - ae;
            return y ? GJ(ue, o - ce) : ue
        }

        function U(z) {
            var ae = z - f,
                ce = z - h;
            return f === void 0 || ae >= t || ae < 0 || y && ce >= o
        }

        function I() {
            var z = Zf();
            if (U(z)) return H(z);
            u = setTimeout(I, x(z))
        }

        function H(z) {
            return u = void 0, b && n ? R(z) : (n = s = void 0, c)
        }

        function Y() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function W() {
            return u === void 0 ? c : H(Zf())
        }

        function G() {
            var z = Zf(),
                ae = U(z);
            if (n = arguments, s = this, f = z, ae) {
                if (u === void 0) return P(f);
                if (y) return clearTimeout(u), u = setTimeout(I, t), R(f)
            }
            return u === void 0 && (u = setTimeout(I, t)), c
        }
        return G.cancel = Y, G.flush = W, G
    }
    var jJ = WJ,
        HJ = Ei,
        KJ = ql,
        VJ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        YJ = /^\w*$/;

    function qJ(e, t) {
        if (HJ(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || KJ(e) ? !0 : YJ.test(e) || !VJ.test(e) || t != null && e in Object(t)
    }
    var zJ = qJ,
        VO = mT,
        XJ = "Expected a function";

    function $p(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(XJ);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var c = e.apply(this, n);
            return r.cache = o.set(s, c) || o, c
        };
        return r.cache = new($p.Cache || VO), r
    }
    $p.Cache = VO;
    var JJ = $p,
        ZJ = JJ,
        QJ = 500;

    function eZ(e) {
        var t = ZJ(e, function(n) {
                return r.size === QJ && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var tZ = eZ,
        rZ = tZ,
        nZ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        iZ = /\\(\\)?/g,
        sZ = rZ(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(nZ, function(r, n, s, o) {
                t.push(s ? o.replace(iZ, "$1") : n || r)
            }), t
        }),
        aZ = sZ;

    function oZ(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var YO = oZ,
        bE = Nl,
        cZ = YO,
        lZ = Ei,
        uZ = ql,
        fZ = 1 / 0,
        TE = bE ? bE.prototype : void 0,
        SE = TE ? TE.toString : void 0;

    function qO(e) {
        if (typeof e == "string") return e;
        if (lZ(e)) return cZ(e, qO) + "";
        if (uZ(e)) return SE ? SE.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -fZ ? "-0" : t
    }
    var dZ = qO,
        hZ = dZ;

    function pZ(e) {
        return e == null ? "" : hZ(e)
    }
    var gZ = pZ,
        mZ = Ei,
        vZ = zJ,
        _Z = aZ,
        yZ = gZ;

    function EZ(e, t) {
        return mZ(e) ? e : vZ(e, t) ? [e] : _Z(yZ(e))
    }
    var zO = EZ,
        bZ = ql,
        TZ = 1 / 0;

    function SZ(e) {
        if (typeof e == "string" || bZ(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -TZ ? "-0" : t
    }
    var XO = SZ,
        OZ = Vh,
        AZ = zO,
        IZ = Yh,
        OE = dn,
        CZ = XO;

    function RZ(e, t, r, n) {
        if (!OE(e)) return e;
        t = AZ(t, e);
        for (var s = -1, o = t.length, c = o - 1, u = e; u != null && ++s < o;) {
            var f = CZ(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != c) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = OE(g) ? g : IZ(t[s + 1]) ? [] : {})
            }
            OZ(u, f, h), u = u[f]
        }
        return e
    }
    var wZ = RZ,
        NZ = wZ;

    function $Z(e, t, r) {
        return e == null ? e : NZ(e, t, r)
    }
    var LZ = $Z;
    class PZ {
        constructor() {
            Ee(this, "wsClient");
            Ee(this, "keyMap");
            Ee(this, "providerMap");
            Ee(this, "mappedValues", Bn({}));
            Ee(this, "shouldParseBlobcast", !1);
            Ee(this, "pausedKeys", null);
            Ee(this, "keyMapKeys");
            Ee(this, "providerMapKeys");
            Ee(this, "hotValues");
            Ee(this, "newValues");
            Ee(this, "pause", (t = []) => {
                this.pausedKeys = t
            });
            Ee(this, "resume", () => {
                this.pausedKeys = null, this.sync()
            });
            Ee(this, "sync", jJ(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Bn(this.wsClient.entities), Ji(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof Un.ArtifactEntity || t instanceof Un.DoodleEntity ? t : t instanceof Un.ObjectEntity ? jO(t.val) : t instanceof Un.TextEntity ? t.text : t instanceof Un.NumberEntity ? t.val : null
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
                    LZ(this.newValues, n, u)
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
    const Vr = new PZ,
        DZ = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Vr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => io.add(n)), r.wsClient.on("connection", n => {
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
        To = {
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

    function kZ() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Lp() {
        return !kZ() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function MZ(e, t) {
        return e.require(t)
    }
    var xZ = {};

    function Zt() {
        return Lp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : xZ
    }

    function Pp(e, t, r) {
        var n = r || Zt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var JO = Object.prototype.toString;

    function ZO(e) {
        switch (JO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ai(e, Error)
        }
    }

    function ua(e, t) {
        return JO.call(e) === `[object ${t}]`
    }

    function QO(e) {
        return ua(e, "ErrorEvent")
    }

    function AE(e) {
        return ua(e, "DOMError")
    }

    function UZ(e) {
        return ua(e, "DOMException")
    }

    function Xs(e) {
        return ua(e, "String")
    }

    function FZ(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function zl(e) {
        return ua(e, "Object")
    }

    function Dp(e) {
        return typeof Event < "u" && Ai(e, Event)
    }

    function BZ(e) {
        return typeof Element < "u" && Ai(e, Element)
    }

    function GZ(e) {
        return ua(e, "RegExp")
    }

    function e1(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function WZ(e) {
        return zl(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function jZ(e) {
        return typeof e == "number" && e !== e
    }

    function Ai(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function nh(e, t) {
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
            for (; u && f++ < r && (g = HZ(u, t), !(g === "html" || f > 1 && h + s.length * c + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function HZ(e, t) {
        var r = e,
            n = [];
        let s, o, c, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (h && h.length) h.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Xs(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) c = g[f], u = r.getAttribute(c), u && n.push(`[${c}="${u}"]`);
        return n.join("")
    }

    function KZ() {
        var e = Zt();
        try {
            return e.document.location.href
        } catch {
            return ""
        }
    }
    class ka extends Error {
        constructor(t, r = "warn") {
            super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    var VZ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function YZ(e) {
        return e === "http" || e === "https"
    }

    function qZ(e, t = !1) {
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

    function zZ(e) {
        var t = VZ.exec(e);
        if (!t) throw new ka(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, c = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var y = h.match(/^\d+/);
            y && (h = y[0])
        }
        return t1({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: c,
            protocol: r,
            publicKey: n
        })
    }

    function t1(e) {
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

    function XZ(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: t,
            projectId: r,
            protocol: n
        } = e;
        var s = ["protocol", "publicKey", "host", "projectId"];
        if (s.forEach(o => {
                if (!e[o]) throw new ka(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new ka(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!YZ(n)) throw new ka(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new ka(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function JZ(e) {
        var t = typeof e == "string" ? zZ(e) : t1(e);
        return XZ(t), t
    }
    var ZZ = Zt(),
        QZ = "Sentry Logger ",
        sl = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function r1(e) {
        var t = Zt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        sl.forEach(s => {
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
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? sl.forEach(r => {
            t[r] = (...n) => {
                e && r1(() => {
                    ZZ.console[r](`${QZ}[${r}]:`, ...n)
                })
            }
        }) : sl.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let jt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? jt = Pp("logger", IE) : jt = IE();

    function CE(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function RE(e, t) {
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

    function kp(e, t) {
        return Xs(e) ? GZ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function cr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                i1(s, n)
            } catch {}
            e[t] = s
        }
    }

    function n1(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function i1(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, n1(e, "__sentry_original__", t)
    }

    function Mp(e) {
        return e.__sentry_original__
    }

    function s1(e) {
        if (ZO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...NE(e)
        };
        if (Dp(e)) {
            var t = {
                type: e.type,
                target: wE(e.target),
                currentTarget: wE(e.currentTarget),
                ...NE(e)
            };
            return typeof CustomEvent < "u" && Ai(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function wE(e) {
        try {
            return BZ(e) ? nh(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function NE(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function eQ(e, t = 40) {
        var r = Object.keys(s1(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return CE(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : CE(n, t)
        }
        return ""
    }

    function tQ(e) {
        var t = new Map;
        return ih(e, t)
    }

    function ih(e, t) {
        if (zl(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = ih(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(u => {
                n.push(ih(u, t))
            }), n
        }
        return e
    }
    var Qf = "<anonymous>";

    function mi(e) {
        try {
            return !e || typeof e != "function" ? Qf : e.name || Qf
        } catch {
            return Qf
        }
    }

    function rQ() {
        if (!("fetch" in Zt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function $E(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function nQ() {
        if (!rQ()) return !1;
        var e = Zt();
        if ($E(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = $E(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function iQ() {
        var e = Zt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var At = Zt(),
        Ka = {},
        LE = {};

    function sQ(e) {
        if (!LE[e]) switch (LE[e] = !0, e) {
            case "console":
                aQ();
                break;
            case "dom":
                gQ();
                break;
            case "xhr":
                uQ();
                break;
            case "fetch":
                oQ();
                break;
            case "history":
                fQ();
                break;
            case "error":
                mQ();
                break;
            case "unhandledrejection":
                vQ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function qi(e, t) {
        Ka[e] = Ka[e] || [], Ka[e].push(t), sQ(e)
    }

    function un(e, t) {
        if (!(!e || !Ka[e]))
            for (var r of Ka[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${mi(r)}
Error:`, n)
            }
    }

    function aQ() {
        "console" in At && sl.forEach(function(e) {
            e in At.console && cr(At.console, e, function(t) {
                return function(...r) {
                    un("console", {
                        args: r,
                        level: e
                    }), t && t.apply(At.console, r)
                }
            })
        })
    }

    function oQ() {
        !nQ() || cr(At, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: cQ(t),
                        url: lQ(t)
                    },
                    startTimestamp: Date.now()
                };
                return un("fetch", {
                    ...r
                }), e.apply(At, t).then(n => (un("fetch", {
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

    function cQ(e = []) {
        return "Request" in At && Ai(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function lQ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in At && Ai(e[0], Request) ? e[0].url : String(e[0])
    }

    function uQ() {
        if ("XMLHttpRequest" in At) {
            var e = XMLHttpRequest.prototype;
            cr(e, "open", function(t) {
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
                            return c(), u.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", c), t.apply(n, r)
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
    let Nc;

    function fQ() {
        if (!iQ()) return;
        var e = At.onpopstate;
        At.onpopstate = function(...r) {
            var n = At.location.href,
                s = Nc;
            if (Nc = n, un("history", {
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
                    var o = Nc,
                        c = String(s);
                    Nc = c, un("history", {
                        from: o,
                        to: c
                    })
                }
                return r.apply(this, n)
            }
        }
        cr(At.history, "pushState", t), cr(At.history, "replaceState", t)
    }
    var dQ = 1e3;
    let $c, Lc;

    function hQ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function pQ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function PE(e, t = !1) {
        return r => {
            if (!(!r || Lc === r) && !pQ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                $c === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Lc = r) : hQ(Lc, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Lc = r), clearTimeout($c), $c = At.setTimeout(() => {
                    $c = void 0
                }, dQ)
            }
        }
    }

    function gQ() {
        if ("document" in At) {
            var e = un.bind(null, "dom"),
                t = PE(e, !0);
            At.document.addEventListener("click", t, !1), At.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = At[r] && At[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (cr(n, "addEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var y = PE(e);
                                g.handler = y, s.call(this, o, y, u)
                            }
                            g.refCount += 1
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }), cr(n, "removeEventListener", function(s) {
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
    let ed = null;

    function mQ() {
        ed = At.onerror, At.onerror = function(e, t, r, n, s) {
            return un("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), ed ? ed.apply(this, arguments) : !1
        }
    }
    let td = null;

    function vQ() {
        td = At.onunhandledrejection, At.onunhandledrejection = function(e) {
            return un("unhandledrejection", e), td ? td.apply(this, arguments) : !0
        }
    }

    function _Q() {
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
        var e = Zt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function a1(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ps(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = a1(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function sh(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function al(e, t) {
        var r = a1(e);
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

    function yQ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return ah("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function o1(e, t = 3, r = 100 * 1024) {
        var n = yQ(e, t);
        return TQ(n) > r ? o1(e, t - 1, r) : n
    }

    function ah(e, t, r = 1 / 0, n = 1 / 0, s = _Q()) {
        const [o, c] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !jZ(t)) return t;
        var u = EQ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return ah("", h, r - 1, n, s)
        } catch {}
        var g = Array.isArray(t) ? [] : {};
        let y = 0;
        var b = s1(t);
        for (var R in b)
            if (!!Object.prototype.hasOwnProperty.call(b, R)) {
                if (y >= n) {
                    g[R] = "[MaxProperties ~]";
                    break
                }
                var P = b[R];
                g[R] = ah(R, P, r - 1, n, s), y += 1
            } return c(t), g
    }

    function EQ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : WZ(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${mi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function bQ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function TQ(e) {
        return bQ(JSON.stringify(e))
    }
    var kn;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var r = 1;
        e[e.RESOLVED = r] = "RESOLVED";
        var n = 2;
        e[e.REJECTED = n] = "REJECTED"
    })(kn || (kn = {}));
    class En {
        __init() {
            this._state = kn.PENDING
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
            return new En((r, n) => {
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
                this._setResult(kn.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(kn.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, r) => {
                if (this._state === kn.PENDING) {
                    if (e1(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== kn.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(r => {
                        r[0] || (this._state === kn.RESOLVED && r[1](this._value), this._state === kn.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function rd(e) {
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
    var SQ = ["fatal", "error", "warning", "log", "info", "debug"];

    function OQ(e) {
        return e === "warn" ? "warning" : SQ.includes(e) ? e : "log"
    }
    var oh = {
        nowSeconds: () => Date.now() / 1e3
    };

    function AQ() {
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

    function IQ() {
        try {
            var e = MZ(O1, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var nd = Lp() ? IQ() : AQ(),
        DE = nd === void 0 ? oh : {
            nowSeconds: () => (nd.timeOrigin + nd.now()) / 1e3
        },
        c1 = oh.nowSeconds.bind(oh),
        l1 = DE.nowSeconds.bind(DE);
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

    function CQ(e) {
        var t = l1(),
            r = {
                sid: Va(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => wQ(r)
            };
        return e && Xl(r, e), r
    }

    function Xl(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || l1(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Va()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function RQ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Xl(e, r)
    }

    function wQ(e) {
        return tQ({
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
    var kE = 100;
    class rs {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            var r = new rs;
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
                return r instanceof rs ? r : this
            }
            return t instanceof rs ? (this._tags = {
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
            var n = typeof r == "number" ? Math.min(r, kE) : kE;
            if (n <= 0) return this;
            var s = {
                timestamp: c1(),
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
            }, this._notifyEventProcessors([...u1(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, s = 0) {
            return new En((o, c) => {
                var u = t[s];
                if (r === null || typeof u != "function") o(r);
                else {
                    var f = u({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && jt.log(`Event processor "${u.id}" dropped event`), e1(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, c) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, c)
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

    function u1() {
        return Pp("globalEventProcessors", () => [])
    }

    function f1(e) {
        u1().push(e)
    }
    var xp = 4,
        NQ = 100;
    class So {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new rs, n = xp) {
            this._version = n, So.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            var r = this.getStackTop();
            r.client = t, t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            var t = rs.clone(this.getScope());
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
                maxBreadcrumbs: c = NQ
            } = s.getOptions && s.getOptions() || {};
            if (!(c <= 0)) {
                var u = c1(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? r1(() => o(f, r)) : f;
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
            var r = ME(this);
            try {
                t(this)
            } finally {
                ME(r)
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
            n && RQ(n), this._sendSessionUpdate(), r && r.setSession()
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
            var f = CQ({
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
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function Jl() {
        var e = Zt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function ME(e) {
        var t = Jl(),
            r = ai(t);
        return Up(t, e), r
    }

    function Dr() {
        var e = Jl();
        return (!d1(e) || ai(e).isOlderThan(xp)) && Up(e, new So), Lp() ? $Q(e) : ai(e)
    }

    function $Q(e) {
        try {
            var t = Jl().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!d1(r) || ai(r).isOlderThan(xp)) {
                var n = ai(e).getStackTop();
                Up(r, new So(n.client, rs.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function d1(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return Pp("hub", () => new So, e)
    }

    function Up(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function LQ(e, t) {
        return Dr().captureException(e, {
            captureContext: t
        })
    }

    function PQ(e) {
        Dr().withScope(e)
    }

    function DQ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function kQ(e, t) {
        var r = JZ(e),
            n = `${DQ(r)}embed/error-page/`;
        let s = `dsn=${qZ(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var c = t.user;
                    if (!c) continue;
                    c.name && (s += `&name=${encodeURIComponent(c.name)}`), c.email && (s += `&email=${encodeURIComponent(c.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let xE;
    class ao {
        constructor() {
            ao.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = ao.id
        }
        setupOnce() {
            xE = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Mp(this) || this;
                return xE.apply(r, t)
            }
        }
    }
    ao.__initStatic();
    var MQ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            h = xQ(c._options, f);
                        return UQ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Gs.__initStatic();

    function xQ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...MQ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function UQ(e, t) {
        return t.ignoreInternal && jQ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ps(e)}`), !0) : FQ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ps(e)}`), !0) : BQ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ps(e)}.
Url: ${ol(e)}`), !0) : GQ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ps(e)}.
Url: ${ol(e)}`), !0)
    }

    function FQ(e, t) {
        return !t || !t.length ? !1 : WQ(e).some(r => t.some(n => kp(r, n)))
    }

    function BQ(e, t) {
        if (!t || !t.length) return !1;
        var r = ol(e);
        return r ? t.some(n => kp(r, n)) : !1
    }

    function GQ(e, t) {
        if (!t || !t.length) return !0;
        var r = ol(e);
        return r ? t.some(n => kp(r, n)) : !0
    }

    function WQ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract message for event ${Ps(e)}`), []
        }
        return []
    }

    function jQ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function HQ(e = []) {
        for (let r = e.length - 1; r >= 0; r--) {
            var t = e[r];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function ol(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? HQ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract url for event ${Ps(e)}`), null
        }
    }

    function h1(e, t) {
        var r = Fp(e, t),
            n = {
                type: t && t.name,
                value: qQ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function KQ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Dp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${eQ(t)}`
                }]
            },
            extra: {
                __serialized__: o1(t)
            }
        };
        if (r) {
            var o = Fp(e, r);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function id(e, t) {
        return {
            exception: {
                values: [h1(e, t)]
            }
        }
    }

    function Fp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = YQ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var VQ = /Minified React error #\d+;/i;

    function YQ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (VQ.test(e.message)) return 1
        }
        return 0
    }

    function qQ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function p1(e, t, r, n, s) {
        let o;
        if (QO(t) && t.error) {
            var c = t;
            return id(e, c.error)
        }
        if (AE(t) || UZ(t)) {
            var u = t;
            if ("stack" in t) o = id(e, t);
            else {
                var f = u.name || (AE(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = UE(e, h, r, n), sh(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (ZO(t)) return id(e, t);
        if (zl(t) || Dp(t)) {
            var g = t;
            return o = KQ(e, g, r, s), al(o, {
                synthetic: !0
            }), o
        }
        return o = UE(e, t, r, n), sh(o, `${t}`, void 0), al(o, {
            synthetic: !0
        }), o
    }

    function UE(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var o = Fp(e, r);
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
    var zQ = "Breadcrumbs";
    class oo {
        static __initStatic() {
            this.id = zQ
        }
        __init() {
            this.name = oo.id
        }
        constructor(t) {
            oo.prototype.__init.call(this), this.options = {
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
            this.options.console && qi("console", JQ), this.options.dom && qi("dom", XQ(this.options.dom)), this.options.xhr && qi("xhr", ZQ), this.options.fetch && qi("fetch", QQ), this.options.history && qi("history", eee)
        }
    }
    oo.__initStatic();

    function XQ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? nh(r.event.target, s) : nh(r.event, s)
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

    function JQ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: OQ(e.level),
            message: RE(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${RE(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Dr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function ZQ(e) {
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

    function QQ(e) {
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

    function eee(e) {
        var t = Zt();
        let r = e.from,
            n = e.to;
        var s = rd(t.location.href);
        let o = rd(r);
        var c = rd(n);
        o.path || (o = s), s.protocol === c.protocol && s.host === c.host && (n = c.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Dr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let ch = 0;

    function g1() {
        return ch > 0
    }

    function tee() {
        ch += 1, setTimeout(() => {
            ch -= 1
        })
    }

    function Js(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (Mp(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = u.map(h => Js(h, t));
                return e.apply(this, f)
            } catch (h) {
                throw tee(), PQ(g => {
                    g.addEventProcessor(y => (t.mechanism && (sh(y, void 0, void 0), al(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: u
                    }, y)), LQ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        i1(s, e), n1(e, "__sentry_wrapped__", s);
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
                onerror: ree,
                onunhandledrejection: nee
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
                n && t[r] && (aee(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    fi.__initStatic();

    function ree() {
        qi("error", e => {
            const [t, r, n] = _1();
            if (!t.getIntegration(fi)) return;
            const {
                msg: s,
                url: o,
                line: c,
                column: u,
                error: f
            } = e;
            if (!(g1() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Xs(s) ? see(s, o, c, u) : m1(p1(r, f || s, void 0, n, !1), o, c, u);
                h.level = "error", v1(t, f, h, "onerror")
            }
        })
    }

    function nee() {
        qi("unhandledrejection", e => {
            const [t, r, n] = _1();
            if (!t.getIntegration(fi)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (g1() || s && s.__sentry_own_request__) return !0;
            var o = FZ(s) ? iee(s) : p1(r, s, void 0, n, !0);
            o.level = "error", v1(t, s, o, "onunhandledrejection")
        })
    }

    function iee(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function see(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = QO(e) ? e.message : e,
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
        return m1(f, t, r, n)
    }

    function m1(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            c = o[0] = o[0] || {},
            u = c.stacktrace = c.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Xs(t) && t.length > 0 ? t : KZ();
        return f.length === 0 && f.push({
            colno: h,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function aee(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.log(`Global Handler attached: ${e}`)
    }

    function v1(e, t, r, n) {
        al(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function _1() {
        var e = Dr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var oee = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class co {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = co.id
        }
        constructor(t) {
            co.prototype.__init.call(this), this._options = {
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
            this._options.setTimeout && cr(t, "setTimeout", FE), this._options.setInterval && cr(t, "setInterval", FE), this._options.requestAnimationFrame && cr(t, "requestAnimationFrame", cee), this._options.XMLHttpRequest && "XMLHttpRequest" in t && cr(XMLHttpRequest.prototype, "send", lee);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : oee;
                n.forEach(uee)
            }
        }
    }
    co.__initStatic();

    function FE(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = Js(r, {
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

    function cee(e) {
        return function(t) {
            return e.apply(this, [Js(t, {
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

    function lee(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && cr(r, s, function(o) {
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
                        u = Mp(o);
                    return u && (c.mechanism.data.handler = mi(u)), Js(o, c)
                })
            }), e.apply(this, t)
        }
    }

    function uee(e) {
        var t = Zt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (cr(r, "addEventListener", function(n) {
            return function(s, o, c) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = Js(o.handleEvent, {
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
                return n.apply(this, [s, Js(o, {
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
        }), cr(r, "removeEventListener", function(n) {
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
    var fee = "cause",
        dee = 5;
    class Ws {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Ws.id
        }
        constructor(t = {}) {
            Ws.prototype.__init.call(this), this._key = t.key || fee, this._limit = t.limit || dee
        }
        setupOnce() {
            var t = Dr().getClient();
            !t || f1((r, n) => {
                var s = Dr().getIntegration(Ws);
                return s ? hee(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Ws.__initStatic();

    function hee(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ai(s.originalException, Error)) return n;
        var o = y1(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function y1(e, t, r, n, s = []) {
        if (!Ai(r[n], Error) || s.length + 1 >= t) return s;
        var o = h1(e, r[n]);
        return y1(e, t, r[n], n, [o, ...s])
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
            f1(t => {
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
                        if (pee(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function pee(e, t) {
        return t ? !!(gee(e, t) || mee(e, t)) : !1
    }

    function gee(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !b1(e, t) || !E1(e, t))
    }

    function mee(e, t) {
        var r = BE(t),
            n = BE(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !b1(e, t) || !E1(e, t))
    }

    function E1(e, t) {
        let r = GE(e),
            n = GE(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let c = 0; c < n.length; c++) {
            var s = n[c],
                o = r[c];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function b1(e, t) {
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

    function BE(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function GE(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Gs, new ao, new co, new oo, new fi, new Ws, new Hs, new js;

    function vee(e = {}, t = Dr()) {
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
        c.async = !0, c.src = kQ(o, e), e.onLoad && (c.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(c) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const _ee = tt({
            setup() {
                return {
                    fatalError: ui(To.fatal.error)
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
                    vee({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        Oo = e => (ea("data-v-d0abff79"), e = e(), ta(), e),
        yee = {
            class: "jbg fatal"
        },
        Eee = {
            class: "constrain"
        },
        bee = Oo(() => X("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        Tee = {
            class: "content"
        },
        See = Oo(() => X("h1", null, "You have encountered an error", -1)),
        Oee = Oo(() => X("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        Aee = Oo(() => X("ul", null, [X("li", null, "Refresh the page"), X("li", null, "Turn off adblockers or other browser extensions."), X("li", null, "Check your connection to the Internet."), X("li", null, "Make sure you're using an up-to-date browser."), X("li", null, "If that doesn't work, let us know.")], -1)),
        Iee = Oo(() => X("hr", null, null, -1)),
        Cee = {
            class: "error"
        };

    function Ree(e, t, r, n, s, o) {
        return ne(), oe("div", yee, [X("div", Eee, [bee, X("div", Tee, [See, Oee, Aee, X("button", {
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "Tell us what happened"), Iee, X("pre", Cee, Xe(e.message), 1)])])])
    }
    const wee = gt(_ee, [
            ["render", Ree],
            ["__scopeId", "data-v-d0abff79"]
        ]),
        Pc = Bn({
            hasCrashed: !1
        }),
        Nee = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(To.fatal.error, qr(() => Pc));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof ja.EcastEntityNotFound || r instanceof ja.EcastFilterError || r instanceof ja.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Pc.hasCrashed = !0, Pc.event = r, Pc.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", wee), e.config.globalProperties.$handleEcastError = t
            }
        };
    var $ee = zO,
        Lee = XO;

    function Pee(e, t) {
        t = $ee(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[Lee(t[r++])];
        return r && r == n ? e : void 0
    }
    var Dee = Pee,
        kee = Dee;

    function Mee(e, t, r) {
        var n = e == null ? void 0 : kee(e, t);
        return n === void 0 ? r : n
    }
    var xee = Mee,
        Uee = Math.floor,
        Fee = Math.random;

    function Bee(e, t) {
        return e + Uee(Fee() * (t - e + 1))
    }
    var Gee = Bee,
        Wee = Gee;

    function jee(e) {
        var t = e.length;
        return t ? e[Wee(0, t - 1)] : void 0
    }
    var T1 = jee,
        Hee = YO;

    function Kee(e, t) {
        return Hee(t, function(r) {
            return e[r]
        })
    }
    var Vee = Kee,
        Yee = Vee,
        qee = Yl;

    function zee(e) {
        return e == null ? [] : Yee(e, qee(e))
    }
    var Xee = zee,
        Jee = T1,
        Zee = Xee;

    function Qee(e) {
        return Jee(Zee(e))
    }
    var ete = Qee,
        tte = T1,
        rte = ete,
        nte = Ei;

    function ite(e) {
        var t = nte(e) ? tte : rte;
        return t(e)
    }
    var ste = ite;

    function WE(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = xee(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), ste(s)
    }
    const ate = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = WE(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return WE(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        ote = tt({
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
        cte = "main/@moderator/assets/928ef0da.png",
        lte = "main/@moderator/assets/0bb76a2d.png",
        ute = "main/@moderator/assets/ed4469b3.png",
        fte = {
            key: 0,
            class: "image",
            src: cte,
            alt: "Kicked"
        },
        dte = {
            key: 1,
            class: "image",
            src: lte,
            alt: "Thank You"
        },
        hte = {
            key: 2,
            class: "image",
            src: ute,
            alt: "Error"
        },
        pte = {
            class: "text"
        },
        gte = {
            key: 3,
            class: "subtext"
        },
        mte = {
            class: "actions"
        };

    function vte(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["error-model", e.classes])
        }, [e.image === "tear" ? (ne(), oe("img", fte)) : e.image === "moon" ? (ne(), oe("img", dte)) : (ne(), oe("img", hte)), Ke(X("h3", pte, null, 512), [
            [c, e.text]
        ]), e.subtext ? Ke((ne(), oe("h3", gte, null, 512)), [
            [c, e.subtext]
        ]) : We("", !0), X("div", mte, [Ke(X("button", {
            onClick: t[0] || (t[0] = Jr(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, e.dismissText]
        ])])], 2)
    }
    const _te = gt(ote, [
            ["render", vte],
            ["__scopeId", "data-v-420dd700"]
        ]),
        yte = tt({
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
        Ete = {
            class: "text"
        },
        bte = {
            key: 0,
            class: "subtext"
        },
        Tte = {
            class: "actions"
        },
        Ste = ["onClick"];

    function Ote(e, t, r, n, s, o) {
        const c = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["options-modal", e.classes])
        }, [Ke(X("h3", Ete, null, 512), [
            [c, e.text]
        ]), e.subtext ? Ke((ne(), oe("h3", bte, null, 512)), [
            [c, e.subtext]
        ]) : We("", !0), X("div", Tte, [(ne(!0), oe(Ot, null, fo(e.options, (u, f) => Ke((ne(), oe("button", {
            key: f,
            class: Ge(u.classes),
            onClick: Jr(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, Ste)), [
            [c, u.text]
        ])), 128))])], 2)
    }
    const Ate = gt(yte, [
            ["render", Ote],
            ["__scopeId", "data-v-f5303469"]
        ]),
        Ite = tt({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = _te : e === "Options" ? this.content = Ate : this.content = e, new Promise(n => {
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

    function Cte(e, t, r, n, s, o) {
        return ne(), Yr($h, {
            name: "modal-transition"
        }, {
            default: bh(() => [e.props ? (ne(), oe("div", {
                key: 0,
                class: Ge(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = PP((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["esc"])),
                onClick: t[1] || (t[1] = Jr((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["self"]))
            }, [e.content ? (ne(), Yr(SL(e.content), wh({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : We("", !0)], 34)) : We("", !0)]),
            _: 1
        })
    }
    const Rte = gt(Ite, [
            ["render", Cte],
            ["__scopeId", "data-v-e6feb9c0"]
        ]),
        wte = {
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
                e.component("Modal", Rte), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        };
    tt({
        setup() {
            return {
                announcment: ui(To.textDescriptions.announcement)
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
                fatalError: ui(To.fatal.error)
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
    const Nte = {
            GAME: "Game",
            PASSWORD: "PASSWORD"
        },
        $te = {
            KICK: "Kick?",
            KICK_PLAYERS: "KICK PLAYERS",
            MODERATE: "Moderate",
            APPROVE_ALL: "Approve All",
            REJECT_ALL: "Reject All"
        },
        Lte = {
            ROOM_DESTROYED: "Thanks for helping out!"
        },
        Pte = {
            DISABLED: "Moderation Disabled",
            KICKED: "KICKED",
            UNSUPPORTED: "Moderation Unsupported",
            WAITING_FOR_SUBMISSIONS: "Waiting for submissions"
        },
        Dte = {
            DISABLED: "The moderation setting for this game is turned off. Turn it on and restart the game to moderate content.",
            UNSUPPORTED: "{gameName} doesn't have anything to moderate, but thanks for wanting to help out!"
        },
        kte = "Submitted by:",
        Mte = {
            FORM: Nte,
            ACTION: $te,
            ERROR: Lte,
            STATUS: Pte,
            WARNING: Dte,
            SUBMITTED_BY: kte
        },
        xte = {
            GAME: "Jeu",
            PASSWORD: "MOT DE PASSE"
        },
        Ute = {
            MODERATE: "Mod\xE9r\xE9",
            APPROVE_ALL: "Tout accepter",
            REJECT_ALL: "Tout refuser"
        },
        Fte = {
            WAITING_FOR_SUBMISSIONS: "En attente de propositions"
        },
        Bte = {
            DISABLED: "Le param\xE8tre de mod\xE9ration est d\xE9sactiv\xE9 pour cette partie. Activez-le et relancez le jeu pour mod\xE9rer le contenu.",
            UNSUPPORTED: "Il n'y a rien \xE0 mod\xE9rer dans {gameName}, mais merci d'avoir voulu aider\xA0!"
        },
        Gte = "Envoy\xE9e par:",
        Wte = {
            FORM: xte,
            ACTION: Ute,
            STATUS: Fte,
            WARNING: Bte,
            SUBMITTED_BY: Gte
        },
        jte = {
            GAME: "Gioco",
            PASSWORD: "PASSWORD"
        },
        Hte = {
            MODERATE: "Modera",
            APPROVE_ALL: "Approva tutto",
            REJECT_ALL: "Rifiuta tutto"
        },
        Kte = {
            WAITING_FOR_SUBMISSIONS: "In attesa di invii"
        },
        Vte = {
            DISABLED: "La moderazione \xE8 disattivata per questo gioco. Per moderare i contenuti, attivala e riavvia il gioco.",
            UNSUPPORTED: "{gameName} non ha nulla da moderare, ma grazie per l'aiuto!"
        },
        Yte = "Inviato da:",
        qte = {
            FORM: jte,
            ACTION: Hte,
            STATUS: Kte,
            WARNING: Vte,
            SUBMITTED_BY: Yte
        },
        zte = {
            GAME: "Spiel",
            PASSWORD: "PASSWORT"
        },
        Xte = {
            MODERATE: "Moderieren",
            APPROVE_ALL: "Alles erlauben",
            REJECT_ALL: "Alles zur\xFCckweisen"
        },
        Jte = {
            WAITING_FOR_SUBMISSIONS: "Warte auf Einreichungen"
        },
        Zte = {
            DISABLED: "Moderation f\xFCr dieses Spiel ist ausgeschaltet Schalte sie ein und starte das Spiel erneut, um Inhalte moderieren zu k\xF6nnen.",
            UNSUPPORTED: "{gameName} hat keine zu moderierenden Inhalte, aber danke, dass du helfen wolltest!"
        },
        Qte = "Gesendet von:",
        ere = {
            FORM: zte,
            ACTION: Xte,
            STATUS: Jte,
            WARNING: Zte,
            SUBMITTED_BY: Qte
        },
        tre = {
            GAME: "Juego",
            PASSWORD: "CONTRASE\xD1A"
        },
        rre = {
            MODERATE: "Moderar",
            APPROVE_ALL: "Aprobar todo",
            REJECT_ALL: "Rechazar todo"
        },
        nre = {
            WAITING_FOR_SUBMISSIONS: "Esperando aportaciones"
        },
        ire = {
            DISABLED: "La moderaci\xF3n para este juego est\xE1 desactivada. Act\xEDvala y reinicia el juego para moderar el contenido.",
            UNSUPPORTED: "{gameName} no tiene nada que moderar, \xA1pero \xA1gracias por querer ayudar!"
        },
        sre = "Enviado por:",
        are = {
            FORM: tre,
            ACTION: rre,
            STATUS: nre,
            WARNING: ire,
            SUBMITTED_BY: sre
        },
        ore = {
            GAME: "Juego",
            PASSWORD: "CONTRASE\xD1A"
        },
        cre = {
            MODERATE: "Moderar",
            APPROVE_ALL: "Aprobar todo",
            REJECT_ALL: "Rechazar todo"
        },
        lre = {
            WAITING_FOR_SUBMISSIONS: "Esperando aportaciones"
        },
        ure = {
            DISABLED: "La moderaci\xF3n para esta partida est\xE1 desactivada. Act\xEDvala y reinicia el juego para moderar el contenido.",
            UNSUPPORTED: "{gameName} no tiene nada que moderar, pero \xA1gracias por querer ayudar!"
        },
        fre = "Enviado por:",
        dre = {
            FORM: ore,
            ACTION: cre,
            STATUS: lre,
            WARNING: ure,
            SUBMITTED_BY: fre
        },
        hre = {
            en: Mte,
            fr: Wte,
            it: qte,
            de: ere,
            es: are,
            "es-XL": dre
        },
        pre = tt({
            components: {
                Input: h5
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
                    api: new Un.APIClient({
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
                        t = new Un.WSClient(e);
                    try {
                        this.isConnecting = !0;
                        const r = await t.connect();
                        this.$setupEcast({
                            room: this.room,
                            wsClient: t,
                            welcome: r
                        }), Ct.set("moderator-code", this.code), Ct.set("moderator-password", this.password), ns.moderatorConnected(this.room.appTag), this.$emit("connectionDidChange", !0)
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
        gre = e => (ea("data-v-aab5a2d0"), e = e(), ta(), e),
        mre = {
            class: "constrain"
        },
        vre = {
            for: "roomcode"
        },
        _re = {
            key: 0,
            class: "status"
        },
        yre = {
            key: 1,
            class: "status"
        },
        Ere = {
            for: "password"
        },
        bre = ["disabled"],
        Tre = gre(() => X("div", {
            class: "loading"
        }, null, -1)),
        Sre = {
            key: 0,
            class: "warning"
        },
        Ore = {
            key: 1,
            class: "warning"
        };

    function Are(e, t, r, n, s, o) {
        var f, h;
        const c = Rt("Input"),
            u = Ht("t");
        return ne(), oe("div", mre, [X("form", {
            autocomplete: "off",
            onSubmit: t[2] || (t[2] = Jr((...g) => e.onFormSubmit && e.onFormSubmit(...g), ["prevent"]))
        }, [X("fieldset", null, [X("label", vre, [mr(Xe(e.$t("FORM.ROOM_CODE")) + " ", 1), e.state.statusKey ? Ke((ne(), oe("span", _re, null, 512)), [
            [u, e.state.statusKey]
        ]) : e.state.statusText ? (ne(), oe("span", yre, Xe(e.state.statusText), 1)) : We("", !0)]), st(c, {
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
        }, null, 8, ["modelValue", "placeholder", "maxlength", "onInput"]), Ke(X("label", Ere, null, 512), [
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
        ]), Tre], 10, bre)])], 32), e.room && !e.state.isSupported ? (ne(), oe("p", Sre, Xe(e.$t("WARNING.UNSUPPORTED", {
            gameName: (h = (f = e.game) == null ? void 0 : f.name) != null ? h : "This game"
        })), 1)) : e.room && !e.state.isEnabled ? (ne(), oe("p", Ore, Xe(e.$t("WARNING.DISABLED")), 1)) : We("", !0)])
    }
    const Ire = gt(pre, [
            ["render", Are],
            ["__scopeId", "data-v-aab5a2d0"]
        ]),
        Cre = {},
        Rre = {
            viewBox: "0 0 250 250"
        },
        wre = X("path", {
            class: "blast",
            d: `M66.19,181a5.82,5.82,0,0,0-3-11.16l-24.4,3.66,11.34-27.75-26.6-13.83L49,116.09,35.61,89.27l29.9,2.21L70.44,61.9
           l22.9,19.37,21.37-21,5.87,24a5.82,5.82,0,1,0,11.3-2.77L121.13,37.6,92.74,65.53,62.33,39.81,55.78,79.1,16.07,76.16
           l17.79,35.63L0,132.76l35.34,18.37L20.27,188l44.64-6.7A5.36,5.36,0,0,0,66.19,181Z`
        }, null, -1),
        Nre = X("path", {
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
        $re = [wre, Nre];

    function Lre(e, t) {
        return ne(), oe("svg", Rre, $re)
    }
    const Pre = gt(Cre, [
            ["render", Lre]
        ]),
        Dre = tt({
            components: {
                KickSVG: Pre
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
                        await this.$ecast.kick(e.id, !0), ns.playerKicked(this.$ecastRoom.appTag, !this.hasStarted)
                    } catch (t) {
                        e.isKicked = !1, this.$handleEcastError(t)
                    }
                }
            }
        }),
        S1 = e => (ea("data-v-23c5a82b"), e = e(), ta(), e),
        kre = ["disabled"],
        Mre = S1(() => X("svg", {
            viewBox: "0 0 23 40",
            class: "tab left"
        }, [X("path", {
            "vector-effect": "non-scaling-stroke",
            d: "M23,0A16.41,16.41,0,0,0,7.18,12.08L0,40"
        })], -1)),
        xre = S1(() => X("svg", {
            viewBox: "0 0 23 40",
            class: "tab right"
        }, [X("path", {
            "vector-effect": "non-scaling-stroke",
            d: "M23,0A16.41,16.41,0,0,0,7.18,12.08L0,40"
        })], -1)),
        Ure = {
            class: "players"
        },
        Fre = {
            class: "name"
        },
        Bre = ["onClick"],
        Gre = {
            key: 1,
            class: "kick-message"
        };

    function Wre(e, t, r, n, s, o) {
        const c = Rt("KickSVG"),
            u = Ht("t");
        return ne(), oe("div", {
            class: Ge(["kicking", {
                showing: e.shouldShow
            }])
        }, [X("button", {
            class: "kick-toggle",
            disabled: !e.players.length,
            onClick: t[0] || (t[0] = (...f) => e.onKickToggleClick && e.onKickToggleClick(...f))
        }, [Mre, st(c, {
            class: "icon"
        }), mr(" " + Xe(e.$t("ACTION.KICK_PLAYERS")) + " ", 1), xre], 8, kre), X("div", Ure, [(ne(!0), oe(Ot, null, fo(e.players, f => (ne(), oe("div", {
            key: f.id,
            class: Ge(["player", {
                kicked: f.isKicked
            }])
        }, [X("span", Fre, Xe(f.name), 1), f.isKicked ? Ke((ne(), oe("span", Gre, null, 512)), [
            [u, "STATUS.KICKED"]
        ]) : (ne(), oe("button", {
            key: 0,
            class: "kick-button",
            onClick: h => e.onKickClick(f)
        }, Xe(e.$t("ACTION.KICK")), 9, Bre))], 2))), 128))])], 2)
    }
    const jre = gt(Dre, [
            ["render", Wre],
            ["__scopeId", "data-v-23c5a82b"]
        ]),
        Hre = {},
        Kre = {
            viewBox: "0 0 180 180"
        },
        Vre = X("path", {
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
        Yre = [Vre];

    function qre(e, t) {
        return ne(), oe("svg", Kre, Yre)
    }
    const Ao = gt(Hre, [
            ["render", qre]
        ]),
        zre = {},
        Xre = {
            viewBox: "0 0 180 180"
        },
        Jre = X("path", {
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
        Zre = [Jre];

    function Qre(e, t) {
        return ne(), oe("svg", Xre, Zre)
    }
    const Io = gt(zre, [
            ["render", Qre]
        ]),
        ene = tt({
            components: {
                ApproveSVG: Ao,
                RejectSVG: Io
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
                    n = new fp(e, {
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
        tne = {
            key: 0,
            class: "context"
        },
        rne = {
            ref: "stage",
            class: "stage"
        },
        nne = {
            class: "name"
        },
        ine = {
            class: "item-buttons"
        },
        sne = ["disabled"],
        ane = ["disabled"];

    function one(e, t, r, n, s, o) {
        const c = Rt("ApproveSVG"),
            u = Rt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", tne, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("div", rne, null, 512), X("p", nne, [mr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", ine, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, sne), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, ane)])], 2)
    }
    const cne = gt(ene, [
            ["render", one],
            ["__scopeId", "data-v-81255e80"]
        ]),
        lne = tt({
            components: {
                ApproveSVG: Ao,
                RejectSVG: Io
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
                this.canvas = new HS(document.createElement("canvas"), this.item.value.doodle)
            },
            methods: {
                htmlUnescape(e) {
                    return Wt.htmlUnescape(e)
                }
            }
        }),
        une = {
            key: 0,
            class: "context"
        },
        fne = ["src"],
        dne = {
            class: "name"
        },
        hne = {
            class: "item-buttons"
        },
        pne = ["disabled"],
        gne = ["disabled"];

    function mne(e, t, r, n, s, o) {
        const c = Rt("ApproveSVG"),
            u = Rt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", une, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("div", {
            class: "stage",
            style: lo({
                background: e.item.value.background
            })
        }, [X("img", {
            src: e.itemSrc,
            alt: ""
        }, null, 8, fne)], 4), X("p", dne, [mr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", hne, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, pne), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, gne)])], 2)
    }
    const vne = gt(lne, [
            ["render", mne],
            ["__scopeId", "data-v-09bf813f"]
        ]),
        _ne = tt({
            components: {
                ApproveSVG: Ao,
                RejectSVG: Io
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
                    t = new fp(e, {
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
        yne = {
            key: 0,
            class: "context"
        },
        Ene = {
            ref: "stage",
            class: "stage"
        },
        bne = {
            class: "name"
        },
        Tne = {
            class: "item-buttons"
        },
        Sne = ["disabled"],
        One = ["disabled"];

    function Ane(e, t, r, n, s, o) {
        const c = Rt("ApproveSVG"),
            u = Rt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", yne, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("div", Ene, null, 512), X("p", bne, [mr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", Tne, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, Sne), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, One)])], 2)
    }
    const Ine = gt(_ne, [
            ["render", Ane],
            ["__scopeId", "data-v-77cd0c4a"]
        ]),
        Cne = tt({
            components: {
                ApproveSVG: Ao,
                RejectSVG: Io
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
        Rne = {
            key: 0,
            class: "context"
        },
        wne = {
            class: "value"
        },
        Nne = {
            class: "name"
        },
        $ne = {
            class: "item-buttons"
        },
        Lne = ["disabled"],
        Pne = ["disabled"];

    function Dne(e, t, r, n, s, o) {
        const c = Rt("ApproveSVG"),
            u = Rt("RejectSVG"),
            f = Ht("bb");
        return ne(), oe("div", {
            class: Ge(["item text", e.item.status])
        }, [e.item.context ? Ke((ne(), oe("p", Rne, null, 512)), [
            [f, e.htmlUnescape(e.item.context)]
        ]) : We("", !0), X("p", wne, Xe(e.htmlUnescape(e.item.value)), 1), X("p", Nne, [mr(Xe(e.$t("SUBMITTED_BY")) + " ", 1), X("span", null, Xe(e.item.name), 1)]), X("div", $ne, [X("button", {
            "aria-label": "accept",
            class: "accept",
            disabled: e.item.status !== "pending",
            onClick: t[0] || (t[0] = h => e.$emit("acceptWasClicked", e.item))
        }, [st(c, {
            class: "icon"
        })], 8, Lne), X("button", {
            "aria-label": "reject",
            class: "reject",
            disabled: e.item.status === "rejected",
            onClick: t[1] || (t[1] = h => e.$emit("rejectWasClicked", e.item))
        }, [st(u, {
            class: "icon"
        })], 8, Pne)])], 2)
    }
    const kne = gt(Cne, [
            ["render", Dne]
        ]),
        Mne = tt({
            components: {
                Kicking: jre,
                AnimationItem: cne,
                DoodleItem: vne,
                DrawingItem: Ine,
                TextItem: kne,
                ApproveSVG: Ao,
                RejectSVG: Io
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
                        ns.itemModerated(this.room.appTag, t === "rejected")
                    }), this.$syncEcast()
                }
            }
        }),
        xne = e => (ea("data-v-1d96aa57"), e = e(), ta(), e),
        Une = {
            class: "constrain"
        },
        Fne = {
            class: "top"
        },
        Bne = {
            class: "alls"
        },
        Gne = ["disabled"],
        Wne = ["disabled"],
        jne = {
            key: 0,
            class: "empty"
        },
        Hne = {
            class: "empty-text"
        },
        Kne = xne(() => X("div", {
            class: "loading disabled"
        }, null, -1));

    function Vne(e, t, r, n, s, o) {
        var P, x;
        const c = Rt("Kicking"),
            u = Rt("ApproveSVG"),
            f = Rt("RejectSVG"),
            h = Rt("AnimationItem"),
            g = Rt("DoodleItem"),
            y = Rt("DrawingItem"),
            b = Rt("TextItem"),
            R = Ht("t");
        return ne(), oe("div", Une, [X("div", Fne, [X("p", null, [X("span", null, Xe(e.$t("FORM.GAME")) + ":", 1), mr(Xe((x = (P = e.game) == null ? void 0 : P.name) != null ? x : "???"), 1)])]), e.hasKicking ? (ne(), Yr(c, {
            key: 0,
            class: Ge({
                expand: !e.hasModeration
            }),
            "has-started": e.hasStarted
        }, null, 8, ["class", "has-started"])) : We("", !0), e.hasModeration ? (ne(), oe(Ot, {
            key: 1
        }, [X("div", Bne, [X("button", {
            class: "all accept",
            disabled: !e.pendingItems.length,
            onClick: t[0] || (t[0] = (...U) => e.onAcceptAllClick && e.onAcceptAllClick(...U))
        }, [st(u, {
            class: "icon"
        }), mr(" " + Xe(e.$t("ACTION.APPROVE_ALL")), 1)], 8, Gne), X("button", {
            class: "all reject",
            disabled: !e.pendingItems.length,
            onClick: t[1] || (t[1] = (...U) => e.onRejectAllClick && e.onRejectAllClick(...U))
        }, [st(f, {
            class: "icon"
        }), mr(" " + Xe(e.$t("ACTION.REJECT_ALL")), 1)], 8, Wne)]), e.items.length ? (ne(), Yr(TP, {
            key: 1,
            name: "items",
            tag: "div",
            class: "items"
        }, {
            default: bh(() => [(ne(!0), oe(Ot, null, fo(e.items, U => (ne(), oe(Ot, null, [U.type === "animation" ? (ne(), Yr(h, {
                key: `animation-${U.key}`,
                item: U,
                onAcceptWasClicked: e.onAcceptClick,
                onRejectWasClicked: e.onRejectClick
            }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : U.type === "doodle" ? (ne(), Yr(g, {
                key: `doodle-${U.key}`,
                item: U,
                onAcceptWasClicked: e.onAcceptClick,
                onRejectWasClicked: e.onRejectClick
            }, null, 8, ["item", "onAcceptWasClicked", "onRejectWasClicked"])) : U.type === "drawing" ? (ne(), Yr(y, {
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
        })) : (ne(), oe("div", jne, [Ke(X("p", Hne, null, 512), [
            [R, "STATUS.WAITING_FOR_SUBMISSIONS"]
        ]), Kne]))], 64)) : We("", !0)])
    }
    const Yne = gt(Mne, [
            ["render", Vne],
            ["__scopeId", "data-v-1d96aa57"]
        ]),
        qne = tt({
            name: "@moderator",
            components: {
                Connect: Ire,
                Moderate: Yne
            },
            props: {
                items: {
                    default: () => [],
                    type: Array
                }
            },
            setup() {
                return {
                    fatalError: ui(To.fatal.error)
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
                    return this.room && (e = GS(this.room.appTag)) != null ? e : null
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
        zne = e => (ea("data-v-fd5cfd89"), e = e(), ta(), e),
        Xne = zne(() => X("header", {
            class: "header"
        }, [X("div", {
            class: "logo"
        })], -1));

    function Jne(e, t, r, n, s, o) {
        const c = Rt("Fatal"),
            u = Rt("Connect"),
            f = Rt("Moderate"),
            h = Rt("Modal");
        return e.shouldShowFatal ? (ne(), Yr(c, {
            key: 0
        })) : (ne(), oe("div", {
            key: 1,
            class: Ge(["jbg schemable moderator", e.classes])
        }, [Xne, e.hasConnected ? (ne(), Yr(f, wh({
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
    const Zne = gt(qne, [
        ["render", Jne],
        ["__scopeId", "data-v-fd5cfd89"]
    ]);
    window.tv.register({
        mount: e => {
            var s, o, c;
            let t = MP(Zne);
            t.config.unwrapInjectedRef = !0;
            let r;
            (s = e.room) != null && s.locale && (r = e.room.locale), (c = (o = e.match) == null ? void 0 : o.params) != null && c.locale && (r = e.match.params.locale), xs.set(r);
            const n = nk({
                fallbackLocale: "en",
                locale: xs.locale,
                messages: xs.mergeMessages(i4, hre, Z4)
            });
            return t.use(cq), t.use(DZ), t.use(Nee), t.use(n), t.use(ate, {
                i18n: n
            }), t.use(wte), t.mount("#app"), () => {
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
export default Qne();
//# sourceMappingURL=5d89b812.js.map