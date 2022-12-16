var iR = Object.defineProperty;
var sR = (e, t, r) => t in e ? iR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var aR = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (sR(e, typeof t != "symbol" ? t + "" : t, r), r);
var xie = aR((Fie, w0) => {
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
    const oR = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        lR = uh(oR);

    function VE(e) {
        return !!e || e === ""
    }

    function ic(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Vt(n) ? fR(n) : ic(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Vt(e)) return e;
            if (mt(e)) return e
        }
    }
    const cR = /;(?![^(]*\))/g,
        uR = /:(.+)/;

    function fR(e) {
        const t = {};
        return e.split(cR).forEach(r => {
            if (r) {
                const n = r.split(uR);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function Me(e) {
        let t = "";
        if (Vt(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = Me(e[r]);
                n && (t += n + " ")
            } else if (mt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function dR(e, t) {
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
        if (r = ke(e), n = ke(t), r || n) return r && n ? dR(e, t) : !1;
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

    function HE(e, t) {
        return e.findIndex(r => sc(r, t))
    }
    const _t = e => Vt(e) ? e : e == null ? "" : ke(e) || mt(e) && (e.toString === qE || !Ve(e.toString)) ? JSON.stringify(e, KE, 2) : String(e),
        KE = (e, t) => t && t.__v_isRef ? KE(e, t.value) : Ms(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : oc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : mt(t) && !ke(t) && !zE(t) ? String(t) : t,
        gt = {},
        xs = [],
        cn = () => {},
        hR = () => !1,
        pR = /^on[^a-z]/,
        ac = e => pR.test(e),
        fh = e => e.startsWith("onUpdate:"),
        rr = Object.assign,
        dh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        gR = Object.prototype.hasOwnProperty,
        Qe = (e, t) => gR.call(e, t),
        ke = Array.isArray,
        Ms = e => oo(e) === "[object Map]",
        oc = e => oo(e) === "[object Set]",
        pv = e => oo(e) === "[object Date]",
        Ve = e => typeof e == "function",
        Vt = e => typeof e == "string",
        Ya = e => typeof e == "symbol",
        mt = e => e !== null && typeof e == "object",
        YE = e => mt(e) && Ve(e.then) && Ve(e.catch),
        qE = Object.prototype.toString,
        oo = e => qE.call(e),
        mR = e => oo(e).slice(8, -1),
        zE = e => oo(e) === "[object Object]",
        hh = e => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Cl = uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        lc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        vR = /-(\w)/g,
        An = lc(e => e.replace(vR, (t, r) => r ? r.toUpperCase() : "")),
        yR = /\B([A-Z])/g,
        ls = lc(e => e.replace(yR, "-$1").toLowerCase()),
        cc = lc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        df = lc(e => e ? `on${cc(e)}` : ""),
        qa = (e, t) => !Object.is(e, t),
        Nl = (e, t) => {
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
    const _R = () => gv || (gv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let En;
    class XE {
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

    function ER(e) {
        return new XE(e)
    }

    function bR(e, t = En) {
        t && t.active && t.effects.push(e)
    }
    const ph = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        JE = e => (e.w & di) > 0,
        ZE = e => (e.n & di) > 0,
        TR = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= di
        },
        OR = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    JE(s) && !ZE(s) ? s.delete(e) : t[r++] = s, s.w &= ~di, s.n &= ~di
                }
                t.length = r
            }
        },
        sd = new WeakMap;
    let Da = 0,
        di = 1;
    const ad = 30;
    let an;
    const Zi = Symbol(""),
        od = Symbol("");
    class gh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, bR(this, n)
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
                return this.parent = an, an = this, li = !0, di = 1 << ++Da, Da <= ad ? TR(this) : mv(this), this.fn()
            } finally {
                Da <= ad && OR(this), di = 1 << --Da, an = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
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
    const QE = [];

    function na() {
        QE.push(li), li = !1
    }

    function ia() {
        const e = QE.pop();
        li = e === void 0 ? !0 : e
    }

    function Dr(e, t, r) {
        if (li && an) {
            let n = sd.get(e);
            n || sd.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ph()), eb(s)
        }
    }

    function eb(e, t) {
        let r = !1;
        Da <= ad ? ZE(e) || (e.n |= di, r = !JE(e)) : r = !e.has(an), r && (e.add(an), an.deps.push(e))
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
                ke(e) ? hh(r) && u.push(l.get("length")) : (u.push(l.get(Zi)), Ms(e) && u.push(l.get(od)));
                break;
            case "delete":
                ke(e) || (u.push(l.get(Zi)), Ms(e) && u.push(l.get(od)));
                break;
            case "set":
                Ms(e) && u.push(l.get(Zi));
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
    const SR = uh("__proto__,__v_isRef,__isVue"),
        tb = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ya)),
        AR = mh(),
        IR = mh(!1, !0),
        wR = mh(!0),
        yv = CR();

    function CR() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = at(this);
                for (let o = 0, l = this.length; o < l; o++) Dr(n, "get", o + "");
                const s = n[t](...r);
                return s === -1 || s === !1 ? n[t](...r.map(at)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...r) {
                na();
                const n = at(this)[t].apply(this, r);
                return ia(), n
            }
        }), e
    }

    function mh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? VR : ab : t ? sb : ib).get(n)) return n;
            const l = ke(n);
            if (!e && l && Qe(yv, s)) return Reflect.get(yv, s, o);
            const u = Reflect.get(n, s, o);
            return (Ya(s) ? tb.has(s) : SR(s)) || (e || Dr(n, "get", s), t) ? u : Qt(u) ? l && hh(s) ? u : u.value : mt(u) ? e ? ob(u) : Bn(u) : u
        }
    }
    const NR = rb(),
        $R = rb(!0);

    function rb(e = !1) {
        return function(r, n, s, o) {
            let l = r[n];
            if (zs(l) && Qt(l) && !Qt(s)) return !1;
            if (!e && (!Ul(s) && !zs(s) && (l = at(l), s = at(s)), !ke(r) && Qt(l) && !Qt(s))) return l.value = s, !0;
            const u = ke(r) && hh(n) ? Number(n) < r.length : Qe(r, n),
                f = Reflect.set(r, n, s, o);
            return r === at(o) && (u ? qa(s, l) && Un(r, "set", n, s) : Un(r, "add", n, s)), f
        }
    }

    function RR(e, t) {
        const r = Qe(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Un(e, "delete", t, void 0), n
    }

    function LR(e, t) {
        const r = Reflect.has(e, t);
        return (!Ya(t) || !tb.has(t)) && Dr(e, "has", t), r
    }

    function PR(e) {
        return Dr(e, "iterate", ke(e) ? "length" : Zi), Reflect.ownKeys(e)
    }
    const nb = {
            get: AR,
            set: NR,
            deleteProperty: RR,
            has: LR,
            ownKeys: PR
        },
        kR = {
            get: wR,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        DR = rr({}, nb, {
            get: IR,
            set: $R
        }),
        vh = e => e,
        uc = e => Reflect.getPrototypeOf(e);

    function cl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = at(e),
            o = at(t);
        r || (t !== o && Dr(s, "get", t), Dr(s, "get", o));
        const {
            has: l
        } = uc(s), u = n ? vh : r ? Eh : za;
        if (l.call(s, t)) return u(e.get(t));
        if (l.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function ul(e, t = !1) {
        const r = this.__v_raw,
            n = at(r),
            s = at(e);
        return t || (e !== s && Dr(n, "has", e), Dr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function fl(e, t = !1) {
        return e = e.__v_raw, !t && Dr(at(e), "iterate", Zi), Reflect.get(e, "size", e)
    }

    function _v(e) {
        e = at(e);
        const t = at(this);
        return uc(t).has.call(t, e) || (t.add(e), Un(t, "add", e, e)), this
    }

    function Ev(e, t) {
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

    function bv(e) {
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
                f = t ? vh : e ? Eh : za;
            return !e && Dr(u, "iterate", Zi), l.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function hl(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = at(s),
                l = Ms(o),
                u = e === "entries" || e === Symbol.iterator && l,
                f = e === "keys" && l,
                h = s[e](...n),
                g = r ? vh : t ? Eh : za;
            return !t && Dr(o, "iterate", f ? od : Zi), {
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

    function Zn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function xR() {
        const e = {
                get(o) {
                    return cl(this, o)
                },
                get size() {
                    return fl(this)
                },
                has: ul,
                add: _v,
                set: Ev,
                delete: bv,
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
                set: Ev,
                delete: bv,
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
    const [MR, FR, UR, BR] = xR();

    function yh(e, t) {
        const r = t ? e ? BR : UR : e ? FR : MR;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Qe(r, s) && s in n ? r : n, s, o)
    }
    const GR = {
            get: yh(!1, !1)
        },
        jR = {
            get: yh(!1, !0)
        },
        WR = {
            get: yh(!0, !1)
        },
        ib = new WeakMap,
        sb = new WeakMap,
        ab = new WeakMap,
        VR = new WeakMap;

    function HR(e) {
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

    function KR(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : HR(mR(e))
    }

    function Bn(e) {
        return zs(e) ? e : _h(e, !1, nb, GR, ib)
    }

    function YR(e) {
        return _h(e, !1, DR, jR, sb)
    }

    function ob(e) {
        return _h(e, !0, kR, WR, ab)
    }

    function _h(e, t, r, n, s) {
        if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const l = KR(e);
        if (l === 0) return e;
        const u = new Proxy(e, l === 2 ? n : r);
        return s.set(e, u), u
    }

    function Fs(e) {
        return zs(e) ? Fs(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function zs(e) {
        return !!(e && e.__v_isReadonly)
    }

    function Ul(e) {
        return !!(e && e.__v_isShallow)
    }

    function lb(e) {
        return Fs(e) || zs(e)
    }

    function at(e) {
        const t = e && e.__v_raw;
        return t ? at(t) : e
    }

    function cb(e) {
        return Ml(e, "__v_skip", !0), e
    }
    const za = e => mt(e) ? Bn(e) : e,
        Eh = e => mt(e) ? ob(e) : e;

    function ub(e) {
        li && an && (e = at(e), eb(e.dep || (e.dep = ph())))
    }

    function fb(e, t) {
        e = at(e), e.dep && ld(e.dep)
    }

    function Qt(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function on(e) {
        return db(e, !1)
    }

    function qR(e) {
        return db(e, !0)
    }

    function db(e, t) {
        return Qt(e) ? e : new zR(e, t)
    }
    class zR {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : at(t), this._value = r ? t : za(t)
        }
        get value() {
            return ub(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || Ul(t) || zs(t);
            t = r ? t : at(t), qa(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : za(t), fb(this))
        }
    }

    function XR(e) {
        return Qt(e) ? e.value : e
    }
    const JR = {
        get: (e, t, r) => XR(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return Qt(s) && !Qt(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function hb(e) {
        return Fs(e) ? e : new Proxy(e, JR)
    }
    var pb;
    class ZR {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[pb] = !1, this._dirty = !0, this.effect = new gh(t, () => {
                this._dirty || (this._dirty = !0, fb(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = at(this);
            return ub(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    pb = "__v_isReadonly";

    function QR(e, t, r = !1) {
        let n, s;
        const o = Ve(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new ZR(n, s, o || !s, r)
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
        if (Ve(e)) {
            const o = ci(e, t, r, n);
            return o && YE(o) && o.catch(l => {
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
        eL(e, r, s, n)
    }

    function eL(e, t, r, n = !0) {
        console.error(e)
    }
    let Xa = !1,
        cd = !1;
    const or = [];
    let Sn = 0;
    const Us = [];
    let xn = null,
        Hi = 0;
    const gb = Promise.resolve();
    let bh = null;

    function tL(e) {
        const t = bh || gb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function rL(e) {
        let t = Sn + 1,
            r = or.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Ja(or[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function Th(e) {
        (!or.length || !or.includes(e, Xa && e.allowRecurse ? Sn + 1 : Sn)) && (e.id == null ? or.push(e) : or.splice(rL(e.id), 0, e), mb())
    }

    function mb() {
        !Xa && !cd && (cd = !0, bh = gb.then(yb))
    }

    function nL(e) {
        const t = or.indexOf(e);
        t > Sn && or.splice(t, 1)
    }

    function iL(e) {
        ke(e) ? Us.push(...e) : (!xn || !xn.includes(e, e.allowRecurse ? Hi + 1 : Hi)) && Us.push(e), mb()
    }

    function Ov(e, t = Xa ? Sn + 1 : 0) {
        for (; t < or.length; t++) {
            const r = or[t];
            r && r.pre && (or.splice(t, 1), t--, r())
        }
    }

    function vb(e) {
        if (Us.length) {
            const t = [...new Set(Us)];
            if (Us.length = 0, xn) {
                xn.push(...t);
                return
            }
            for (xn = t, xn.sort((r, n) => Ja(r) - Ja(n)), Hi = 0; Hi < xn.length; Hi++) xn[Hi]();
            xn = null, Hi = 0
        }
    }
    const Ja = e => e.id == null ? 1 / 0 : e.id,
        sL = (e, t) => {
            const r = Ja(e) - Ja(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function yb(e) {
        cd = !1, Xa = !0, or.sort(sL);
        const t = cn;
        try {
            for (Sn = 0; Sn < or.length; Sn++) {
                const r = or[Sn];
                r && r.active !== !1 && ci(r, null, 14)
            }
        } finally {
            Sn = 0, or.length = 0, vb(), Xa = !1, bh = null, (or.length || Us.length) && yb()
        }
    }

    function aL(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || gt;
        let s = r;
        const o = t.startsWith("update:"),
            l = o && t.slice(7);
        if (l && l in n) {
            const g = `${l==="modelValue"?"model":l}Modifiers`,
                {
                    number: y,
                    trim: b
                } = n[g] || gt;
            b && (s = r.map(T => T.trim())), y && (s = r.map(Fl))
        }
        let u, f = n[u = df(t)] || n[u = df(An(t))];
        !f && o && (f = n[u = df(ls(t))]), f && Xr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Xr(h, e, 6, s)
        }
    }

    function _b(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let l = {},
            u = !1;
        if (!Ve(e)) {
            const f = h => {
                const g = _b(h, t, !0);
                g && (u = !0, rr(l, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (mt(e) && n.set(e, null), null) : (ke(o) ? o.forEach(f => l[f] = null) : rr(l, o), mt(e) && n.set(e, l), l)
    }

    function dc(e, t) {
        return !e || !ac(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Qe(e, t[0].toLowerCase() + t.slice(1)) || Qe(e, ls(t)) || Qe(e, t))
    }
    let lr = null,
        hc = null;

    function Bl(e) {
        const t = lr;
        return lr = e, hc = e && e.type.__scopeId || null, t
    }

    function pc(e) {
        hc = e
    }

    function gc() {
        hc = null
    }

    function Qi(e, t = lr, r) {
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
            data: b,
            setupState: T,
            ctx: R,
            inheritAttrs: D
        } = e;
        let B, w;
        const H = Bl(e);
        try {
            if (r.shapeFlag & 4) {
                const j = s || n;
                B = Tn(g.call(j, j, y, o, T, b, R)), w = f
            } else {
                const j = t;
                B = Tn(j.length > 1 ? j(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : j(o, null)), w = t.props ? f : oL(f)
            }
        } catch (j) {
            Ua.length = 0, fc(j, e, 1), B = rt(Jr)
        }
        let q = B;
        if (w && D !== !1) {
            const j = Object.keys(w),
                {
                    shapeFlag: G
                } = q;
            j.length && G & 7 && (l && j.some(fh) && (w = lL(w, l)), q = hi(q, w))
        }
        return r.dirs && (q = hi(q), q.dirs = q.dirs ? q.dirs.concat(r.dirs) : r.dirs), r.transition && (q.transition = r.transition), B = q, Bl(H), B
    }
    const oL = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || ac(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        lL = (e, t) => {
            const r = {};
            for (const n in e)(!fh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function cL(e, t, r) {
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
            if (f & 16) return n ? Sv(n, l, h) : !!l;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let y = 0; y < g.length; y++) {
                    const b = g[y];
                    if (l[b] !== n[b] && !dc(h, b)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === l ? !1 : n ? l ? Sv(n, l, h) : !0 : !!l;
        return !1
    }

    function Sv(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !dc(r, o)) return !0
        }
        return !1
    }

    function uL({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const fL = e => e.__isSuspense;

    function dL(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : iL(e)
    }

    function hL(e, t) {
        if (qt) {
            let r = qt.provides;
            const n = qt.parent && qt.parent.provides;
            n === r && (r = qt.provides = Object.create(n)), r[e] = t
        }
    }

    function es(e, t, r = !1) {
        const n = qt || lr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && Ve(t) ? t.call(n.proxy) : t
        }
    }
    const Av = {};

    function ts(e, t, r) {
        return Eb(e, t, r)
    }

    function Eb(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: l
    } = gt) {
        const u = qt;
        let f, h = !1,
            g = !1;
        if (Qt(e) ? (f = () => e.value, h = Ul(e)) : Fs(e) ? (f = () => e, n = !0) : ke(e) ? (g = !0, h = e.some(w => Fs(w) || Ul(w)), f = () => e.map(w => {
                if (Qt(w)) return w.value;
                if (Fs(w)) return Ji(w);
                if (Ve(w)) return ci(w, u, 2)
            })) : Ve(e) ? t ? f = () => ci(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return y && y(), Xr(e, u, 3, [b])
            } : f = cn, t && n) {
            const w = f;
            f = () => Ji(w())
        }
        let y, b = w => {
            y = B.onStop = () => {
                ci(w, u, 4)
            }
        };
        if (Qa) return b = cn, t ? r && Xr(t, u, 3, [f(), g ? [] : void 0, b]) : f(), cn;
        let T = g ? [] : Av;
        const R = () => {
            if (!!B.active)
                if (t) {
                    const w = B.run();
                    (n || h || (g ? w.some((H, q) => qa(H, T[q])) : qa(w, T))) && (y && y(), Xr(t, u, 3, [w, T === Av ? void 0 : T, b]), T = w)
                } else B.run()
        };
        R.allowRecurse = !!t;
        let D;
        s === "sync" ? D = R : s === "post" ? D = () => Sr(R, u && u.suspense) : (R.pre = !0, u && (R.id = u.uid), D = () => Th(R));
        const B = new gh(f, D);
        return t ? r ? R() : T = B.run() : s === "post" ? Sr(B.run.bind(B), u && u.suspense) : B.run(), () => {
            B.stop(), u && u.scope && dh(u.scope.effects, B)
        }
    }

    function pL(e, t, r) {
        const n = this.proxy,
            s = Vt(e) ? e.includes(".") ? bb(n, e) : () => n[e] : e.bind(n, n);
        let o;
        Ve(t) ? o = t : (o = t.handler, r = t);
        const l = qt;
        Xs(this);
        const u = Eb(s, o.bind(n), r);
        return l ? Xs(l) : rs(), u
    }

    function bb(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Ji(e, t) {
        if (!mt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), Qt(e)) Ji(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Ji(e[r], t);
        else if (oc(e) || Ms(e)) e.forEach(r => {
            Ji(r, t)
        });
        else if (zE(e))
            for (const r in e) Ji(e[r], t);
        return e
    }

    function gL() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Oh(() => {
            e.isMounted = !0
        }), wb(() => {
            e.isUnmounting = !0
        }), e
    }
    const Yr = [Function, Array],
        mL = {
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
                const r = os(),
                    n = gL();
                let s;
                return () => {
                    const o = t.default && Sb(t.default(), !0);
                    if (!o || !o.length) return;
                    let l = o[0];
                    if (o.length > 1) {
                        for (const D of o)
                            if (D.type !== Jr) {
                                l = D;
                                break
                            }
                    }
                    const u = at(e),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return pf(l);
                    const h = Iv(l);
                    if (!h) return pf(l);
                    const g = ud(h, u, n, r);
                    fd(h, g);
                    const y = r.subTree,
                        b = y && Iv(y);
                    let T = !1;
                    const {
                        getTransitionKey: R
                    } = h.type;
                    if (R) {
                        const D = R();
                        s === void 0 ? s = D : D !== s && (s = D, T = !0)
                    }
                    if (b && b.type !== Jr && (!Ki(h, b) || T)) {
                        const D = ud(b, u, n, r);
                        if (fd(b, D), f === "out-in") return n.isLeaving = !0, D.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, pf(l);
                        f === "in-out" && h.type !== Jr && (D.delayLeave = (B, w, H) => {
                            const q = Ob(n, b);
                            q[String(b.key)] = b, B._leaveCb = () => {
                                w(), B._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = H
                        })
                    }
                    return l
                }
            }
        },
        Tb = mL;

    function Ob(e, t) {
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
            onLeave: b,
            onAfterLeave: T,
            onLeaveCancelled: R,
            onBeforeAppear: D,
            onAppear: B,
            onAfterAppear: w,
            onAppearCancelled: H
        } = t, q = String(e.key), j = Ob(r, e), G = (le, ue) => {
            le && Xr(le, n, 9, ue)
        }, J = (le, ue) => {
            const Ne = ue[1];
            G(le, ue), ke(le) ? le.every(we => we.length <= 1) && Ne() : le.length <= 1 && Ne()
        }, oe = {
            mode: o,
            persisted: l,
            beforeEnter(le) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = D || u;
                    else return;
                le._leaveCb && le._leaveCb(!0);
                const Ne = j[q];
                Ne && Ki(e, Ne) && Ne.el._leaveCb && Ne.el._leaveCb(), G(ue, [le])
            },
            enter(le) {
                let ue = f,
                    Ne = h,
                    we = g;
                if (!r.isMounted)
                    if (s) ue = B || f, Ne = w || h, we = H || g;
                    else return;
                let fe = !1;
                const Ie = le._enterCb = F => {
                    fe || (fe = !0, F ? G(we, [le]) : G(Ne, [le]), oe.delayedLeave && oe.delayedLeave(), le._enterCb = void 0)
                };
                ue ? J(ue, [le, Ie]) : Ie()
            },
            leave(le, ue) {
                const Ne = String(e.key);
                if (le._enterCb && le._enterCb(!0), r.isUnmounting) return ue();
                G(y, [le]);
                let we = !1;
                const fe = le._leaveCb = Ie => {
                    we || (we = !0, ue(), Ie ? G(R, [le]) : G(T, [le]), le._leaveCb = void 0, j[Ne] === e && delete j[Ne])
                };
                j[Ne] = e, b ? J(b, [le, fe]) : fe()
            },
            clone(le) {
                return ud(le, t, r, n)
            }
        };
        return oe
    }

    function pf(e) {
        if (mc(e)) return e = hi(e), e.children = null, e
    }

    function Iv(e) {
        return mc(e) ? e.children ? e.children[0] : void 0 : e
    }

    function fd(e, t) {
        e.shapeFlag & 6 && e.component ? fd(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function Sb(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let l = e[o];
            const u = r == null ? l.key : String(r) + String(l.key != null ? l.key : o);
            l.type === et ? (l.patchFlag & 128 && s++, n = n.concat(Sb(l.children, t, u))) : (t || l.type !== Jr) && n.push(u != null ? hi(l, {
                key: u
            }) : l)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function it(e) {
        return Ve(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Fa = e => !!e.type.__asyncLoader,
        mc = e => e.type.__isKeepAlive;

    function vL(e, t) {
        Ab(e, "a", t)
    }

    function yL(e, t) {
        Ab(e, "da", t)
    }

    function Ab(e, t, r = qt) {
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
            for (; s && s.parent;) mc(s.parent.vnode) && _L(n, t, r, s), s = s.parent
        }
    }

    function _L(e, t, r, n) {
        const s = vc(t, e, n, !0);
        Sh(() => {
            dh(n[t], s)
        }, r)
    }

    function vc(e, t, r = qt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    na(), Xs(r);
                    const u = Xr(t, r, e, l);
                    return rs(), ia(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Gn = e => (t, r = qt) => (!Qa || e === "sp") && vc(e, t, r),
        Ib = Gn("bm"),
        Oh = Gn("m"),
        EL = Gn("bu"),
        bL = Gn("u"),
        wb = Gn("bum"),
        Sh = Gn("um"),
        TL = Gn("sp"),
        OL = Gn("rtg"),
        SL = Gn("rtc");

    function AL(e, t = qt) {
        vc("ec", e, t)
    }

    function Ce(e, t) {
        const r = lr;
        if (r === null) return e;
        const n = Tc(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [l, u, f, h = gt] = t[o];
            Ve(l) && (l = {
                mounted: l,
                updated: l
            }), l.deep && Ji(u), s.push({
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

    function Di(e, t, r, n) {
        const s = e.dirs,
            o = t && t.dirs;
        for (let l = 0; l < s.length; l++) {
            const u = s[l];
            o && (u.oldValue = o[l].value);
            let f = u.dir[n];
            f && (na(), Xr(f, r, 8, [e.el, u, e, t]), ia())
        }
    }
    const Ah = "components",
        IL = "directives";

    function $t(e, t) {
        return Ih(Ah, e, !0, t) || e
    }
    const Cb = Symbol();

    function yc(e) {
        return Vt(e) ? Ih(Ah, e, !1) || e : e || Cb
    }

    function Rt(e) {
        return Ih(IL, e)
    }

    function Ih(e, t, r = !0, n = !1) {
        const s = lr || qt;
        if (s) {
            const o = s.type;
            if (e === Ah) {
                const u = e2(o, !1);
                if (u && (u === t || u === An(t) || u === cc(An(t)))) return o
            }
            const l = wv(s[e] || o[e], t) || wv(s.appContext[e], t);
            return !l && n ? o : l
        }
    }

    function wv(e, t) {
        return e && (e[t] || e[An(t)] || e[cc(An(t))])
    }

    function un(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (ke(e) || Vt(e)) {
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

    function Nb(e, t, r = {}, n, s) {
        if (lr.isCE || lr.parent && Fa(lr.parent) && lr.parent.isCE) return rt("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), V();
        const l = o && $b(o(r)),
            u = er(et, {
                key: r.key || l && l.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function $b(e) {
        return e.some(t => Wl(t) ? !(t.type === Jr || t.type === et && !$b(t.children)) : !0) ? e : null
    }
    const dd = e => e ? jb(e) ? Tc(e) || e.proxy : dd(e.parent) : null,
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
            $options: e => wh(e),
            $forceUpdate: e => e.f || (e.f = () => Th(e.update)),
            $nextTick: e => e.n || (e.n = tL.bind(e.proxy)),
            $watch: e => pL.bind(e)
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
                    const T = l[t];
                    if (T !== void 0) switch (T) {
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
                const g = Gl[t];
                let y, b;
                if (g) return t === "$attrs" && Dr(e, "get", t), g(e);
                if ((y = u.__cssModules) && (y = y[t])) return y;
                if (r !== gt && Qe(r, t)) return l[t] = 4, r[t];
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
                return !!r[l] || e !== gt && Qe(e, l) || t !== gt && Qe(t, l) || (u = o[0]) && Qe(u, l) || Qe(n, l) || Qe(Gl, l) || Qe(s.config.globalProperties, l)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : Qe(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let hd = !0;

    function CL(e) {
        const t = wh(e),
            r = e.proxy,
            n = e.ctx;
        hd = !1, t.beforeCreate && Cv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: l,
            watch: u,
            provide: f,
            inject: h,
            created: g,
            beforeMount: y,
            mounted: b,
            beforeUpdate: T,
            updated: R,
            activated: D,
            deactivated: B,
            beforeDestroy: w,
            beforeUnmount: H,
            destroyed: q,
            unmounted: j,
            render: G,
            renderTracked: J,
            renderTriggered: oe,
            errorCaptured: le,
            serverPrefetch: ue,
            expose: Ne,
            inheritAttrs: we,
            components: fe,
            directives: Ie,
            filters: F
        } = t;
        if (h && NL(h, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const Ee in l) {
                const ve = l[Ee];
                Ve(ve) && (n[Ee] = ve.bind(r))
            }
        if (s) {
            const Ee = s.call(r, r);
            mt(Ee) && (e.data = Bn(Ee))
        }
        if (hd = !0, o)
            for (const Ee in o) {
                const ve = o[Ee],
                    Se = Ve(ve) ? ve.bind(r, r) : Ve(ve.get) ? ve.get.bind(r, r) : cn,
                    Fe = !Ve(ve) && Ve(ve.set) ? ve.set.bind(r) : cn,
                    je = kr({
                        get: Se,
                        set: Fe
                    });
                Object.defineProperty(n, Ee, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => je.value,
                    set: tt => je.value = tt
                })
            }
        if (u)
            for (const Ee in u) Rb(u[Ee], n, r, Ee);
        if (f) {
            const Ee = Ve(f) ? f.call(r) : f;
            Reflect.ownKeys(Ee).forEach(ve => {
                hL(ve, Ee[ve])
            })
        }
        g && Cv(g, e, "c");

        function de(Ee, ve) {
            ke(ve) ? ve.forEach(Se => Ee(Se.bind(r))) : ve && Ee(ve.bind(r))
        }
        if (de(Ib, y), de(Oh, b), de(EL, T), de(bL, R), de(vL, D), de(yL, B), de(AL, le), de(SL, J), de(OL, oe), de(wb, H), de(Sh, j), de(TL, ue), ke(Ne))
            if (Ne.length) {
                const Ee = e.exposed || (e.exposed = {});
                Ne.forEach(ve => {
                    Object.defineProperty(Ee, ve, {
                        get: () => r[ve],
                        set: Se => r[ve] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        G && e.render === cn && (e.render = G), we != null && (e.inheritAttrs = we), fe && (e.components = fe), Ie && (e.directives = Ie)
    }

    function NL(e, t, r = cn, n = !1) {
        ke(e) && (e = pd(e));
        for (const s in e) {
            const o = e[s];
            let l;
            mt(o) ? "default" in o ? l = es(o.from || s, o.default, !0) : l = es(o.from || s) : l = es(o), Qt(l) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => l.value,
                set: u => l.value = u
            }) : t[s] = l
        }
    }

    function Cv(e, t, r) {
        Xr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function Rb(e, t, r, n) {
        const s = n.includes(".") ? bb(r, n) : () => r[n];
        if (Vt(e)) {
            const o = t[e];
            Ve(o) && ts(s, o)
        } else if (Ve(e)) ts(s, e.bind(r));
        else if (mt(e))
            if (ke(e)) e.forEach(o => Rb(o, t, r, n));
            else {
                const o = Ve(e.handler) ? e.handler.bind(r) : t[e.handler];
                Ve(o) && ts(s, o, e)
            }
    }

    function wh(e) {
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
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => jl(f, h, l, !0)), jl(f, t, l)), mt(t) && o.set(t, f), f
    }

    function jl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && jl(e, o, r, !0), s && s.forEach(l => jl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const u = $L[l] || r && r[l];
                e[l] = u ? u(e[l], t[l]) : t[l]
            } return e
    }
    const $L = {
        data: Nv,
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
        watch: LL,
        provide: Nv,
        inject: RL
    };

    function Nv(e, t) {
        return t ? e ? function() {
            return rr(Ve(e) ? e.call(this, this) : e, Ve(t) ? t.call(this, this) : t)
        } : t : e
    }

    function RL(e, t) {
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

    function LL(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = rr(Object.create(null), e);
        for (const n in t) r[n] = gr(e[n], t[n]);
        return r
    }

    function PL(e, t, r, n = !1) {
        const s = {},
            o = {};
        Ml(o, Ec, 1), e.propsDefaults = Object.create(null), Lb(e, t, s, o);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : YR(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function kL(e, t, r, n) {
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
                    let b = g[y];
                    if (dc(e.emitsOptions, b)) continue;
                    const T = t[b];
                    if (f)
                        if (Qe(o, b)) T !== o[b] && (o[b] = T, h = !0);
                        else {
                            const R = An(b);
                            s[R] = gd(f, u, R, T, e, !1)
                        }
                    else T !== o[b] && (o[b] = T, h = !0)
                }
            }
        } else {
            Lb(e, t, s, o) && (h = !0);
            let g;
            for (const y in u)(!t || !Qe(t, y) && ((g = ls(y)) === y || !Qe(t, g))) && (f ? r && (r[y] !== void 0 || r[g] !== void 0) && (s[y] = gd(f, u, y, void 0, e, !0)) : delete s[y]);
            if (o !== u)
                for (const y in o)(!t || !Qe(t, y) && !0) && (delete o[y], h = !0)
        }
        h && Un(e, "set", "$attrs")
    }

    function Lb(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let l = !1,
            u;
        if (t)
            for (let f in t) {
                if (Cl(f)) continue;
                const h = t[f];
                let g;
                s && Qe(s, g = An(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : dc(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0)
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
                if (l.type !== Function && Ve(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (Xs(s), n = h[r] = f.call(null, t), rs())
                } else n = f
            }
            l[0] && (o && !u ? n = !1 : l[1] && (n === "" || n === ls(r)) && (n = !0))
        }
        return n
    }

    function Pb(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const o = e.props,
            l = {},
            u = [];
        let f = !1;
        if (!Ve(e)) {
            const g = y => {
                f = !0;
                const [b, T] = Pb(y, t, !0);
                rr(l, b), T && u.push(...T)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return mt(e) && n.set(e, xs), xs;
        if (ke(o))
            for (let g = 0; g < o.length; g++) {
                const y = An(o[g]);
                $v(y) && (l[y] = gt)
            } else if (o)
                for (const g in o) {
                    const y = An(g);
                    if ($v(y)) {
                        const b = o[g],
                            T = l[y] = ke(b) || Ve(b) ? {
                                type: b
                            } : b;
                        if (T) {
                            const R = Pv(Boolean, T.type),
                                D = Pv(String, T.type);
                            T[0] = R > -1, T[1] = D < 0 || R < D, (R > -1 || Qe(T, "default")) && u.push(y)
                        }
                    }
                }
        const h = [l, u];
        return mt(e) && n.set(e, h), h
    }

    function $v(e) {
        return e[0] !== "$"
    }

    function Rv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Lv(e, t) {
        return Rv(e) === Rv(t)
    }

    function Pv(e, t) {
        return ke(t) ? t.findIndex(r => Lv(r, e)) : Ve(t) && Lv(t, e) ? 0 : -1
    }
    const kb = e => e[0] === "_" || e === "$stable",
        Ch = e => ke(e) ? e.map(Tn) : [Tn(e)],
        DL = (e, t, r) => {
            if (t._n) return t;
            const n = Qi((...s) => Ch(t(...s)), r);
            return n._c = !1, n
        },
        Db = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (kb(s)) continue;
                const o = e[s];
                if (Ve(o)) t[s] = DL(s, o, n);
                else if (o != null) {
                    const l = Ch(o);
                    t[s] = () => l
                }
            }
        },
        xb = (e, t) => {
            const r = Ch(t);
            e.slots.default = () => r
        },
        xL = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = at(t), Ml(t, "_", r)) : Db(t, e.slots = {})
            } else e.slots = {}, t && xb(e, t);
            Ml(e.slots, Ec, 1)
        },
        ML = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                l = gt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (rr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, Db(t, s)), l = t
            } else t && (xb(e, t), l = {
                default: 1
            });
            if (o)
                for (const u in s) !kb(u) && !(u in l) && delete s[u]
        };

    function Mb() {
        return {
            app: null,
            config: {
                isNativeTag: hR,
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
    let FL = 0;

    function UL(e, t) {
        return function(n, s = null) {
            Ve(n) || (n = Object.assign({}, n)), s != null && !mt(s) && (s = null);
            const o = Mb(),
                l = new Set;
            let u = !1;
            const f = o.app = {
                _uid: FL++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: r2,
                get config() {
                    return o.config
                },
                set config(h) {},
                use(h, ...g) {
                    return l.has(h) || (h && Ve(h.install) ? (l.add(h), h.install(f, ...g)) : Ve(h) && (l.add(h), h(f, ...g))), f
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
                        const b = rt(n, s);
                        return b.appContext = o, g && t ? t(b, h) : e(b, h, y), u = !0, f._container = h, h.__vue_app__ = f, Tc(b.component) || b.component.proxy
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
            e.forEach((b, T) => md(b, t && (ke(t) ? t[T] : t), r, n, s));
            return
        }
        if (Fa(n) && !s) return;
        const o = n.shapeFlag & 4 ? Tc(n.component) || n.component.proxy : n.el,
            l = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === gt ? u.refs = {} : u.refs,
            y = u.setupState;
        if (h != null && h !== f && (Vt(h) ? (g[h] = null, Qe(y, h) && (y[h] = null)) : Qt(h) && (h.value = null)), Ve(f)) ci(f, u, 12, [l, g]);
        else {
            const b = Vt(f),
                T = Qt(f);
            if (b || T) {
                const R = () => {
                    if (e.f) {
                        const D = b ? g[f] : f.value;
                        s ? ke(D) && dh(D, o) : ke(D) ? D.includes(o) || D.push(o) : b ? (g[f] = [o], Qe(y, f) && (y[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else b ? (g[f] = l, Qe(y, f) && (y[f] = l)) : T && (f.value = l, e.k && (g[e.k] = l))
                };
                l ? (R.id = -1, Sr(R, r)) : R()
            }
        }
    }
    const Sr = dL;

    function BL(e) {
        return GL(e)
    }

    function GL(e, t) {
        const r = _R();
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
            nextSibling: b,
            setScopeId: T = cn,
            cloneNode: R,
            insertStaticContent: D
        } = e, B = (m, p, A, M = null, U = null, Y = null, ce = !1, se = null, re = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Ki(m, p) && (M = St(m), Ct(m, U, Y, !0), m = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: N,
                ref: W,
                shapeFlag: he
            } = p;
            switch (N) {
                case _c:
                    w(m, p, A, M);
                    break;
                case Jr:
                    H(m, p, A, M);
                    break;
                case $l:
                    m == null && q(p, A, M, ce);
                    break;
                case et:
                    Ie(m, p, A, M, U, Y, ce, se, re);
                    break;
                default:
                    he & 1 ? J(m, p, A, M, U, Y, ce, se, re) : he & 6 ? F(m, p, A, M, U, Y, ce, se, re) : (he & 64 || he & 128) && N.process(m, p, A, M, U, Y, ce, se, re, xt)
            }
            W != null && U && md(W, m && m.ref, Y, p || m, !p)
        }, w = (m, p, A, M) => {
            if (m == null) n(p.el = u(p.children), A, M);
            else {
                const U = p.el = m.el;
                p.children !== m.children && h(U, p.children)
            }
        }, H = (m, p, A, M) => {
            m == null ? n(p.el = f(p.children || ""), A, M) : p.el = m.el
        }, q = (m, p, A, M) => {
            [m.el, m.anchor] = D(m.children, p, A, M, m.el, m.anchor)
        }, j = ({
            el: m,
            anchor: p
        }, A, M) => {
            let U;
            for (; m && m !== p;) U = b(m), n(m, A, M), m = U;
            n(p, A, M)
        }, G = ({
            el: m,
            anchor: p
        }) => {
            let A;
            for (; m && m !== p;) A = b(m), s(m), m = A;
            s(p)
        }, J = (m, p, A, M, U, Y, ce, se, re) => {
            ce = ce || p.type === "svg", m == null ? oe(p, A, M, U, Y, ce, se, re) : Ne(m, p, U, Y, ce, se, re)
        }, oe = (m, p, A, M, U, Y, ce, se) => {
            let re, N;
            const {
                type: W,
                props: he,
                shapeFlag: pe,
                transition: $e,
                patchFlag: De,
                dirs: I
            } = m;
            if (m.el && R !== void 0 && De === -1) re = m.el = R(m.el);
            else {
                if (re = m.el = l(m.type, Y, he && he.is, he), pe & 8 ? g(re, m.children) : pe & 16 && ue(m.children, re, null, M, U, Y && W !== "foreignObject", ce, se), I && Di(m, null, M, "created"), he) {
                    for (const L in he) L !== "value" && !Cl(L) && o(re, L, null, he[L], Y, m.children, M, U, ot);
                    "value" in he && o(re, "value", null, he.value), (N = he.onVnodeBeforeMount) && vn(N, M, m)
                }
                le(re, m, m.scopeId, ce, M)
            }
            I && Di(m, null, M, "beforeMount");
            const O = (!U || U && !U.pendingBranch) && $e && !$e.persisted;
            O && $e.beforeEnter(re), n(re, p, A), ((N = he && he.onVnodeMounted) || O || I) && Sr(() => {
                N && vn(N, M, m), O && $e.enter(re), I && Di(m, null, M, "mounted")
            }, U)
        }, le = (m, p, A, M, U) => {
            if (A && T(m, A), M)
                for (let Y = 0; Y < M.length; Y++) T(m, M[Y]);
            if (U) {
                let Y = U.subTree;
                if (p === Y) {
                    const ce = U.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, U.parent)
                }
            }
        }, ue = (m, p, A, M, U, Y, ce, se, re = 0) => {
            for (let N = re; N < m.length; N++) {
                const W = m[N] = se ? ni(m[N]) : Tn(m[N]);
                B(null, W, p, A, M, U, Y, ce, se)
            }
        }, Ne = (m, p, A, M, U, Y, ce) => {
            const se = p.el = m.el;
            let {
                patchFlag: re,
                dynamicChildren: N,
                dirs: W
            } = p;
            re |= m.patchFlag & 16;
            const he = m.props || gt,
                pe = p.props || gt;
            let $e;
            A && xi(A, !1), ($e = pe.onVnodeBeforeUpdate) && vn($e, A, p, m), W && Di(p, m, A, "beforeUpdate"), A && xi(A, !0);
            const De = U && p.type !== "foreignObject";
            if (N ? we(m.dynamicChildren, N, se, A, M, De, Y) : ce || Se(m, p, se, null, A, M, De, Y, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, A, M, U);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, U), re & 4 && o(se, "style", he.style, pe.style, U), re & 8) {
                    const I = p.dynamicProps;
                    for (let O = 0; O < I.length; O++) {
                        const L = I[O],
                            S = he[L],
                            P = pe[L];
                        (P !== S || L === "value") && o(se, L, S, P, U, m.children, A, M, ot)
                    }
                }
                re & 1 && m.children !== p.children && g(se, p.children)
            } else !ce && N == null && fe(se, p, he, pe, A, M, U);
            (($e = pe.onVnodeUpdated) || W) && Sr(() => {
                $e && vn($e, A, p, m), W && Di(p, m, A, "updated")
            }, M)
        }, we = (m, p, A, M, U, Y, ce) => {
            for (let se = 0; se < p.length; se++) {
                const re = m[se],
                    N = p[se],
                    W = re.el && (re.type === et || !Ki(re, N) || re.shapeFlag & 70) ? y(re.el) : A;
                B(re, N, W, null, M, U, Y, ce, !0)
            }
        }, fe = (m, p, A, M, U, Y, ce) => {
            if (A !== M) {
                for (const se in M) {
                    if (Cl(se)) continue;
                    const re = M[se],
                        N = A[se];
                    re !== N && se !== "value" && o(m, se, N, re, ce, p.children, U, Y, ot)
                }
                if (A !== gt)
                    for (const se in A) !Cl(se) && !(se in M) && o(m, se, A[se], null, ce, p.children, U, Y, ot);
                "value" in M && o(m, "value", A.value, M.value)
            }
        }, Ie = (m, p, A, M, U, Y, ce, se, re) => {
            const N = p.el = m ? m.el : u(""),
                W = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: $e
            } = p;
            $e && (se = se ? se.concat($e) : $e), m == null ? (n(N, A, M), n(W, A, M), ue(p.children, A, W, U, Y, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (we(m.dynamicChildren, pe, A, U, Y, ce, se), (p.key != null || U && p === U.subTree) && Fb(m, p, !0)) : Se(m, p, A, W, U, Y, ce, se, re)
        }, F = (m, p, A, M, U, Y, ce, se, re) => {
            p.slotScopeIds = se, m == null ? p.shapeFlag & 512 ? U.ctx.activate(p, A, M, ce, re) : ie(p, A, M, U, Y, ce, re) : de(m, p, re)
        }, ie = (m, p, A, M, U, Y, ce) => {
            const se = m.component = zL(m, M, U);
            if (mc(m) && (se.ctx.renderer = xt), XL(se), se.asyncDep) {
                if (U && U.registerDep(se, Ee), !m.el) {
                    const re = se.subTree = rt(Jr);
                    H(null, re, p, A)
                }
                return
            }
            Ee(se, m, p, A, U, Y, ce)
        }, de = (m, p, A) => {
            const M = p.component = m.component;
            if (cL(m, p, A))
                if (M.asyncDep && !M.asyncResolved) {
                    ve(M, p, A);
                    return
                } else M.next = p, nL(M.update), M.update();
            else p.el = m.el, M.vnode = p
        }, Ee = (m, p, A, M, U, Y, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: W,
                            bu: he,
                            u: pe,
                            parent: $e,
                            vnode: De
                        } = m, I = W, O;
                        xi(m, !1), W ? (W.el = De.el, ve(m, W, ce)) : W = De, he && Nl(he), (O = W.props && W.props.onVnodeBeforeUpdate) && vn(O, $e, W, De), xi(m, !0);
                        const L = hf(m),
                            S = m.subTree;
                        m.subTree = L, B(S, L, y(S.el), St(S), m, U, Y), W.el = L.el, I === null && uL(m, L.el), pe && Sr(pe, U), (O = W.props && W.props.onVnodeUpdated) && Sr(() => vn(O, $e, W, De), U)
                    } else {
                        let W;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: $e,
                            m: De,
                            parent: I
                        } = m, O = Fa(p);
                        if (xi(m, !1), $e && Nl($e), !O && (W = pe && pe.onVnodeBeforeMount) && vn(W, I, p), xi(m, !0), he && Mt) {
                            const L = () => {
                                m.subTree = hf(m), Mt(he, m.subTree, m, U, null)
                            };
                            O ? p.type.__asyncLoader().then(() => !m.isUnmounted && L()) : L()
                        } else {
                            const L = m.subTree = hf(m);
                            B(null, L, A, M, m, U, Y), p.el = L.el
                        }
                        if (De && Sr(De, U), !O && (W = pe && pe.onVnodeMounted)) {
                            const L = p;
                            Sr(() => vn(W, I, L), U)
                        }(p.shapeFlag & 256 || I && Fa(I.vnode) && I.vnode.shapeFlag & 256) && m.a && Sr(m.a, U), m.isMounted = !0, p = A = M = null
                    }
                },
                re = m.effect = new gh(se, () => Th(N), m.scope),
                N = m.update = () => re.run();
            N.id = m.uid, xi(m, !0), N()
        }, ve = (m, p, A) => {
            p.component = m;
            const M = m.vnode.props;
            m.vnode = p, m.next = null, kL(m, p.props, M, A), ML(m, p.children, A), na(), Ov(), ia()
        }, Se = (m, p, A, M, U, Y, ce, se, re = !1) => {
            const N = m && m.children,
                W = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: $e
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    je(N, he, A, M, U, Y, ce, se, re);
                    return
                } else if (pe & 256) {
                    Fe(N, he, A, M, U, Y, ce, se, re);
                    return
                }
            }
            $e & 8 ? (W & 16 && ot(N, U, Y), he !== N && g(A, he)) : W & 16 ? $e & 16 ? je(N, he, A, M, U, Y, ce, se, re) : ot(N, U, Y, !0) : (W & 8 && g(A, ""), $e & 16 && ue(he, A, M, U, Y, ce, se, re))
        }, Fe = (m, p, A, M, U, Y, ce, se, re) => {
            m = m || xs, p = p || xs;
            const N = m.length,
                W = p.length,
                he = Math.min(N, W);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const $e = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                B(m[pe], $e, A, null, U, Y, ce, se, re)
            }
            N > W ? ot(m, U, Y, !0, !1, he) : ue(p, A, M, U, Y, ce, se, re, he)
        }, je = (m, p, A, M, U, Y, ce, se, re) => {
            let N = 0;
            const W = p.length;
            let he = m.length - 1,
                pe = W - 1;
            for (; N <= he && N <= pe;) {
                const $e = m[N],
                    De = p[N] = re ? ni(p[N]) : Tn(p[N]);
                if (Ki($e, De)) B($e, De, A, null, U, Y, ce, se, re);
                else break;
                N++
            }
            for (; N <= he && N <= pe;) {
                const $e = m[he],
                    De = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                if (Ki($e, De)) B($e, De, A, null, U, Y, ce, se, re);
                else break;
                he--, pe--
            }
            if (N > he) {
                if (N <= pe) {
                    const $e = pe + 1,
                        De = $e < W ? p[$e].el : M;
                    for (; N <= pe;) B(null, p[N] = re ? ni(p[N]) : Tn(p[N]), A, De, U, Y, ce, se, re), N++
                }
            } else if (N > pe)
                for (; N <= he;) Ct(m[N], U, Y, !0), N++;
            else {
                const $e = N,
                    De = N,
                    I = new Map;
                for (N = De; N <= pe; N++) {
                    const Te = p[N] = re ? ni(p[N]) : Tn(p[N]);
                    Te.key != null && I.set(Te.key, N)
                }
                let O, L = 0;
                const S = pe - De + 1;
                let P = !1,
                    Q = 0;
                const ne = new Array(S);
                for (N = 0; N < S; N++) ne[N] = 0;
                for (N = $e; N <= he; N++) {
                    const Te = m[N];
                    if (L >= S) {
                        Ct(Te, U, Y, !0);
                        continue
                    }
                    let ft;
                    if (Te.key != null) ft = I.get(Te.key);
                    else
                        for (O = De; O <= pe; O++)
                            if (ne[O - De] === 0 && Ki(Te, p[O])) {
                                ft = O;
                                break
                            } ft === void 0 ? Ct(Te, U, Y, !0) : (ne[ft - De] = N + 1, ft >= Q ? Q = ft : P = !0, B(Te, p[ft], A, null, U, Y, ce, se, re), L++)
                }
                const _e = P ? jL(ne) : xs;
                for (O = _e.length - 1, N = S - 1; N >= 0; N--) {
                    const Te = De + N,
                        ft = p[Te],
                        ir = Te + 1 < W ? p[Te + 1].el : M;
                    ne[N] === 0 ? B(null, ft, A, ir, U, Y, ce, se, re) : P && (O < 0 || N !== _e[O] ? tt(ft, A, ir, 2) : O--)
                }
            }
        }, tt = (m, p, A, M, U = null) => {
            const {
                el: Y,
                type: ce,
                transition: se,
                children: re,
                shapeFlag: N
            } = m;
            if (N & 6) {
                tt(m.component.subTree, p, A, M);
                return
            }
            if (N & 128) {
                m.suspense.move(p, A, M);
                return
            }
            if (N & 64) {
                ce.move(m, p, A, xt);
                return
            }
            if (ce === et) {
                n(Y, p, A);
                for (let he = 0; he < re.length; he++) tt(re[he], p, A, M);
                n(m.anchor, p, A);
                return
            }
            if (ce === $l) {
                j(m, p, A);
                return
            }
            if (M !== 2 && N & 1 && se)
                if (M === 0) se.beforeEnter(Y), n(Y, p, A), Sr(() => se.enter(Y), U);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: $e
                    } = se, De = () => n(Y, p, A), I = () => {
                        he(Y, () => {
                            De(), $e && $e()
                        })
                    };
                    pe ? pe(Y, De, I) : I()
                }
            else n(Y, p, A)
        }, Ct = (m, p, A, M = !1, U = !1) => {
            const {
                type: Y,
                props: ce,
                ref: se,
                children: re,
                dynamicChildren: N,
                shapeFlag: W,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && md(se, null, A, m, !0), W & 256) {
                p.ctx.deactivate(m);
                return
            }
            const $e = W & 1 && pe,
                De = !Fa(m);
            let I;
            if (De && (I = ce && ce.onVnodeBeforeUnmount) && vn(I, p, m), W & 6) yr(m.component, A, M);
            else {
                if (W & 128) {
                    m.suspense.unmount(A, M);
                    return
                }
                $e && Di(m, null, p, "beforeUnmount"), W & 64 ? m.type.remove(m, p, A, U, xt, M) : N && (Y !== et || he > 0 && he & 64) ? ot(N, p, A, !1, !0) : (Y === et && he & 384 || !U && W & 16) && ot(re, p, A), M && wr(m)
            }(De && (I = ce && ce.onVnodeUnmounted) || $e) && Sr(() => {
                I && vn(I, p, m), $e && Di(m, null, p, "unmounted")
            }, A)
        }, wr = m => {
            const {
                type: p,
                el: A,
                anchor: M,
                transition: U
            } = m;
            if (p === et) {
                nr(A, M);
                return
            }
            if (p === $l) {
                G(m);
                return
            }
            const Y = () => {
                s(A), U && !U.persisted && U.afterLeave && U.afterLeave()
            };
            if (m.shapeFlag & 1 && U && !U.persisted) {
                const {
                    leave: ce,
                    delayLeave: se
                } = U, re = () => ce(A, Y);
                se ? se(m.el, Y, re) : re()
            } else Y()
        }, nr = (m, p) => {
            let A;
            for (; m !== p;) A = b(m), s(m), m = A;
            s(p)
        }, yr = (m, p, A) => {
            const {
                bum: M,
                scope: U,
                update: Y,
                subTree: ce,
                um: se
            } = m;
            M && Nl(M), U.stop(), Y && (Y.active = !1, Ct(ce, m, p, A)), se && Sr(se, p), Sr(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, ot = (m, p, A, M = !1, U = !1, Y = 0) => {
            for (let ce = Y; ce < m.length; ce++) Ct(m[ce], p, A, M, U)
        }, St = m => m.shapeFlag & 6 ? St(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), lt = (m, p, A) => {
            m == null ? p._vnode && Ct(p._vnode, null, null, !0) : B(p._vnode || null, m, p, null, null, null, A), Ov(), vb(), p._vnode = m
        }, xt = {
            p: B,
            um: Ct,
            m: tt,
            r: wr,
            mt: ie,
            mc: ue,
            pc: Se,
            pbc: we,
            n: St,
            o: e
        };
        let Ht, Mt;
        return t && ([Ht, Mt] = t(xt)), {
            render: lt,
            hydrate: Ht,
            createApp: UL(lt, Ht)
        }
    }

    function xi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function Fb(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let o = 0; o < n.length; o++) {
                const l = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ni(s[o]), u.el = l.el), r || Fb(l, u))
            }
    }

    function jL(e) {
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
    const WL = e => e.__isTeleport,
        et = Symbol(void 0),
        _c = Symbol(void 0),
        Jr = Symbol(void 0),
        $l = Symbol(void 0),
        Ua = [];
    let ln = null;

    function V(e = !1) {
        Ua.push(ln = e ? null : [])
    }

    function VL() {
        Ua.pop(), ln = Ua[Ua.length - 1] || null
    }
    let Za = 1;

    function kv(e) {
        Za += e
    }

    function Ub(e) {
        return e.dynamicChildren = Za > 0 ? ln || xs : null, VL(), Za > 0 && ln && ln.push(e), e
    }

    function z(e, t, r, n, s, o) {
        return Ub(Z(e, t, r, n, s, o, !0))
    }

    function er(e, t, r, n, s) {
        return Ub(rt(e, t, r, n, s, !0))
    }

    function Wl(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Ki(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Ec = "__vInternal",
        Bb = ({
            key: e
        }) => e != null ? e : null,
        Rl = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Vt(e) || Qt(e) || Ve(e) ? {
            i: lr,
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
            key: t && Bb(t),
            ref: t && Rl(t),
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
        return u ? (Nh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Vt(r) ? 8 : 16), Za > 0 && !l && ln && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ln.push(f), f
    }
    const rt = HL;

    function HL(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === Cb) && (e = Jr), Wl(e)) {
            const u = hi(e, t, !0);
            return r && Nh(u, r), Za > 0 && !o && ln && (u.shapeFlag & 6 ? ln[ln.indexOf(e)] = u : ln.push(u)), u.patchFlag |= -2, u
        }
        if (t2(e) && (e = e.__vccOpts), t) {
            t = KL(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Vt(u) && (t.class = Me(u)), mt(f) && (lb(f) && !ke(f) && (f = rr({}, f)), t.style = ic(f))
        }
        const l = Vt(e) ? 1 : fL(e) ? 128 : WL(e) ? 64 : mt(e) ? 4 : Ve(e) ? 2 : 0;
        return Z(e, t, r, n, s, l, o, !0)
    }

    function KL(e) {
        return e ? lb(e) || Ec in e ? rr({}, e) : e : null
    }

    function hi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: l
        } = e, u = t ? bc(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && Bb(u),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(Rl(t)) : [s, Rl(t)] : Rl(t) : s,
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
            ssContent: e.ssContent && hi(e.ssContent),
            ssFallback: e.ssFallback && hi(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function pi(e = " ", t = 0) {
        return rt(_c, null, e, t)
    }

    function Gb(e, t) {
        const r = rt($l, null, e);
        return r.staticCount = t, r
    }

    function Oe(e = "", t = !1) {
        return t ? (V(), er(Jr, null, e)) : rt(Jr, null, e)
    }

    function Tn(e) {
        return e == null || typeof e == "boolean" ? rt(Jr) : ke(e) ? rt(et, null, e.slice()) : typeof e == "object" ? ni(e) : rt(_c, null, String(e))
    }

    function ni(e) {
        return e.el === null || e.memo ? e : hi(e)
    }

    function Nh(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Nh(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(Ec in t) ? t._ctx = lr : s === 3 && lr && (lr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else Ve(t) ? (t = {
            default: t,
            _ctx: lr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [pi(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function bc(...e) {
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
    const YL = Mb();
    let qL = 0;

    function zL(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || YL,
            o = {
                uid: qL++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new XE(!0),
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
                emitsOptions: _b(n, s),
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
        }, o.root = t ? t.root : o, o.emit = aL.bind(null, o), e.ce && e.ce(o), o
    }
    let qt = null;
    const os = () => qt || lr,
        Xs = e => {
            qt = e, e.scope.on()
        },
        rs = () => {
            qt && qt.scope.off(), qt = null
        };

    function jb(e) {
        return e.vnode.shapeFlag & 4
    }
    let Qa = !1;

    function XL(e, t = !1) {
        Qa = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = jb(e);
        PL(e, r, s, t), xL(e, n);
        const o = s ? JL(e, t) : void 0;
        return Qa = !1, o
    }

    function JL(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = cb(new Proxy(e.ctx, wL));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? QL(e) : null;
            Xs(e), na();
            const o = ci(n, e, 0, [e.props, s]);
            if (ia(), rs(), YE(o)) {
                if (o.then(rs, rs), t) return o.then(l => {
                    Dv(e, l, t)
                }).catch(l => {
                    fc(l, e, 0)
                });
                e.asyncDep = o
            } else Dv(e, o, t)
        } else Wb(e, t)
    }

    function Dv(e, t, r) {
        Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) && (e.setupState = hb(t)), Wb(e, r)
    }
    let xv;

    function Wb(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && xv && !n.render) {
                const s = n.template || wh(e).template;
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
                    n.render = xv(s, h)
                }
            }
            e.render = n.render || cn
        }
        Xs(e), na(), CL(e), ia(), rs()
    }

    function ZL(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return Dr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function QL(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = ZL(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Tc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(hb(cb(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Gl) return Gl[r](e)
            }
        }))
    }

    function e2(e, t = !0) {
        return Ve(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function t2(e) {
        return Ve(e) && "__vccOpts" in e
    }
    const kr = (e, t) => QR(e, t, Qa);

    function $h(e, t, r) {
        const n = arguments.length;
        return n === 2 ? mt(t) && !ke(t) ? Wl(t) ? rt(e, null, [t]) : rt(e, t) : rt(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Wl(r) && (r = [r]), rt(e, t, r))
    }
    const r2 = "3.2.39",
        n2 = "http://www.w3.org/2000/svg",
        Yi = typeof document < "u" ? document : null,
        Mv = Yi && Yi.createElement("template"),
        i2 = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Yi.createElementNS(n2, e) : Yi.createElement(e, r ? {
                    is: r
                } : void 0);
                return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
            },
            createText: e => Yi.createTextNode(e),
            createComment: e => Yi.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => Yi.querySelector(e),
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

    function s2(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function a2(e, t, r) {
        const n = e.style,
            s = Vt(r);
        if (r && !s) {
            for (const o in r) vd(n, o, r[o]);
            if (t && !Vt(t))
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
            const n = o2(e, t);
            Fv.test(r) ? e.setProperty(ls(n), r.replace(Fv, ""), "important") : e[n] = r
        }
    }
    const Uv = ["Webkit", "Moz", "ms"],
        gf = {};

    function o2(e, t) {
        const r = gf[t];
        if (r) return r;
        let n = An(t);
        if (n !== "filter" && n in e) return gf[t] = n;
        n = cc(n);
        for (let s = 0; s < Uv.length; s++) {
            const o = Uv[s] + n;
            if (o in e) return gf[t] = o
        }
        return t
    }
    const Bv = "http://www.w3.org/1999/xlink";

    function l2(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Bv, t.slice(6, t.length)) : e.setAttributeNS(Bv, t, r);
        else {
            const o = lR(t);
            r == null || o && !VE(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function c2(e, t, r, n, s, o, l) {
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
            f === "boolean" ? r = VE(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [Vb, u2] = (() => {
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
    const f2 = Promise.resolve(),
        d2 = () => {
            yd = 0
        },
        h2 = () => yd || (f2.then(d2), yd = Vb());

    function qi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function p2(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function g2(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            l = o[t];
        if (n && l) l.value = n;
        else {
            const [u, f] = m2(t);
            if (n) {
                const h = o[t] = v2(n, s);
                qi(e, u, h, f)
            } else l && (p2(e, u, l, f), o[t] = void 0)
        }
    }
    const Gv = /(?:Once|Passive|Capture)$/;

    function m2(e) {
        let t;
        if (Gv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Gv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : ls(e.slice(2)), t]
    }

    function v2(e, t) {
        const r = n => {
            const s = n.timeStamp || Vb();
            (u2 || s >= r.attached - 1) && Xr(y2(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = h2(), r
    }

    function y2(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const jv = /^on[a-z]/,
        _2 = (e, t, r, n, s = !1, o, l, u, f) => {
            t === "class" ? s2(e, n, s) : t === "style" ? a2(e, r, n) : ac(t) ? fh(t) || g2(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : E2(e, t, n, s)) ? c2(e, t, n, o, l, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), l2(e, t, n, s))
        };

    function E2(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && jv.test(t) && Ve(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || jv.test(t) && Vt(r) ? !1 : t in e
    }
    const Qn = "transition",
        $a = "animation",
        Oc = (e, {
            slots: t
        }) => $h(Tb, b2(e), t);
    Oc.displayName = "Transition";
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
    };
    Oc.props = rr({}, Tb.props, Hb);
    const Mi = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        Wv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function b2(e) {
        const t = {};
        for (const fe in e) fe in Hb || (t[fe] = e[fe]);
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
            leaveActiveClass: b = `${r}-leave-active`,
            leaveToClass: T = `${r}-leave-to`
        } = e, R = T2(s), D = R && R[0], B = R && R[1], {
            onBeforeEnter: w,
            onEnter: H,
            onEnterCancelled: q,
            onLeave: j,
            onLeaveCancelled: G,
            onBeforeAppear: J = w,
            onAppear: oe = H,
            onAppearCancelled: le = q
        } = t, ue = (fe, Ie, F) => {
            Fi(fe, Ie ? g : u), Fi(fe, Ie ? h : l), F && F()
        }, Ne = (fe, Ie) => {
            fe._isLeaving = !1, Fi(fe, y), Fi(fe, T), Fi(fe, b), Ie && Ie()
        }, we = fe => (Ie, F) => {
            const ie = fe ? oe : H,
                de = () => ue(Ie, fe, F);
            Mi(ie, [Ie, de]), Vv(() => {
                Fi(Ie, fe ? f : o), ei(Ie, fe ? g : u), Wv(ie) || Hv(Ie, n, D, de)
            })
        };
        return rr(t, {
            onBeforeEnter(fe) {
                Mi(w, [fe]), ei(fe, o), ei(fe, l)
            },
            onBeforeAppear(fe) {
                Mi(J, [fe]), ei(fe, f), ei(fe, h)
            },
            onEnter: we(!1),
            onAppear: we(!0),
            onLeave(fe, Ie) {
                fe._isLeaving = !0;
                const F = () => Ne(fe, Ie);
                ei(fe, y), A2(), ei(fe, b), Vv(() => {
                    !fe._isLeaving || (Fi(fe, y), ei(fe, T), Wv(j) || Hv(fe, n, B, F))
                }), Mi(j, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Mi(q, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Mi(le, [fe])
            },
            onLeaveCancelled(fe) {
                Ne(fe), Mi(G, [fe])
            }
        })
    }

    function T2(e) {
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

    function Fi(e, t) {
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
    let O2 = 0;

    function Hv(e, t, r, n) {
        const s = e._endId = ++O2,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: l,
            timeout: u,
            propCount: f
        } = S2(e, t);
        if (!l) return n();
        const h = l + "end";
        let g = 0;
        const y = () => {
                e.removeEventListener(h, b), o()
            },
            b = T => {
                T.target === e && ++g >= f && y()
            };
        setTimeout(() => {
            g < f && y()
        }, u + 1), e.addEventListener(h, b)
    }

    function S2(e, t) {
        const r = window.getComputedStyle(e),
            n = R => (r[R] || "").split(", "),
            s = n(Qn + "Delay"),
            o = n(Qn + "Duration"),
            l = Kv(s, o),
            u = n($a + "Delay"),
            f = n($a + "Duration"),
            h = Kv(u, f);
        let g = null,
            y = 0,
            b = 0;
        t === Qn ? l > 0 && (g = Qn, y = l, b = o.length) : t === $a ? h > 0 && (g = $a, y = h, b = f.length) : (y = Math.max(l, h), g = y > 0 ? l > h ? Qn : $a : null, b = g ? g === Qn ? o.length : f.length : 0);
        const T = g === Qn && /\b(transform|all)(,|$)/.test(r[Qn + "Property"]);
        return {
            type: g,
            timeout: y,
            propCount: b,
            hasTransform: T
        }
    }

    function Kv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => Yv(r) + Yv(e[n])))
    }

    function Yv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function A2() {
        return document.body.offsetHeight
    }
    const Vl = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Nl(t, r) : t
    };

    function I2(e) {
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
                e._assign = Vl(s);
                const o = n || s.props && s.props.type === "number";
                qi(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Fl(u)), e._assign(u)
                }), r && qi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (qi(e, "compositionstart", I2), qi(e, "compositionend", qv), qi(e, "change", qv))
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
                if (e._assign = Vl(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Fl(e.value) === t)) return;
                const l = t == null ? "" : t;
                e.value !== l && (e.value = l)
            }
        },
        w2 = {
            deep: !0,
            created(e, t, r) {
                e._assign = Vl(r), qi(e, "change", () => {
                    const n = e._modelValue,
                        s = C2(e),
                        o = e.checked,
                        l = e._assign;
                    if (ke(n)) {
                        const u = HE(n, s),
                            f = u !== -1;
                        if (o && !f) l(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), l(h)
                        }
                    } else if (oc(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), l(u)
                    } else l(Kb(e, o))
                })
            },
            mounted: Xv,
            beforeUpdate(e, t, r) {
                e._assign = Vl(r), Xv(e, t, r)
            }
        };

    function Xv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = HE(t, n.props.value) > -1 : oc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = sc(t, Kb(e, !0)))
    }

    function C2(e) {
        return "_value" in e ? e._value : e.value
    }

    function Kb(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const N2 = ["ctrl", "shift", "alt", "meta"],
        $2 = {
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
            exact: (e, t) => N2.some(r => e[`${r}Key`] && !t.includes(r))
        },
        Zr = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = $2[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        R2 = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        Bs = (e, t) => r => {
            if (!("key" in r)) return;
            const n = ls(r.key);
            if (t.some(s => s === n || R2[s] === n)) return e(r)
        },
        L2 = rr({
            patchProp: _2
        }, i2);
    let Jv;

    function P2() {
        return Jv || (Jv = BL(L2))
    }
    const k2 = (...e) => {
        const t = P2().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = D2(n);
            if (!s) return;
            const o = t._component;
            !Ve(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function D2(e) {
        return Vt(e) ? document.querySelector(e) : e
    }
    const x2 = it({
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
        M2 = {
            class: "choices"
        },
        F2 = {
            class: "constrain"
        },
        U2 = {
            key: 0
        },
        B2 = ["disabled", "onClick"];

    function G2(e, t, r, n, s, o) {
        const l = Rt("bb");
        return V(), z("div", M2, [Z("div", F2, [e.player.prompt ? Ce((V(), z("p", U2, null, 512)), [
            [l, e.player.prompt]
        ]) : Oe("", !0), (V(!0), z(et, null, un(e.player.choices, (u, f) => (V(), z("button", {
            key: f,
            class: Me({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Zr(h => e.onChoiceClick(f), ["prevent"])
        }, _t(u.text), 11, B2))), 128))])])
    }
    const j2 = ze(x2, [
        ["render", G2]
    ]);
    class Hl {
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

    function W2(e) {
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

    function V2() {
        this.__data__ = [], this.size = 0
    }
    var H2 = V2;

    function K2(e, t) {
        return e === t || e !== e && t !== t
    }
    var Sc = K2,
        Y2 = Sc;

    function q2(e, t) {
        for (var r = e.length; r--;)
            if (Y2(e[r][0], t)) return r;
        return -1
    }
    var Ac = q2,
        z2 = Ac,
        X2 = Array.prototype,
        J2 = X2.splice;

    function Z2(e) {
        var t = this.__data__,
            r = z2(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : J2.call(t, r, 1), --this.size, !0
    }
    var Q2 = Z2,
        eP = Ac;

    function tP(e) {
        var t = this.__data__,
            r = eP(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var rP = tP,
        nP = Ac;

    function iP(e) {
        return nP(this.__data__, e) > -1
    }
    var sP = iP,
        aP = Ac;

    function oP(e, t) {
        var r = this.__data__,
            n = aP(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var lP = oP,
        cP = H2,
        uP = Q2,
        fP = rP,
        dP = sP,
        hP = lP;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = cP;
    sa.prototype.delete = uP;
    sa.prototype.get = fP;
    sa.prototype.has = dP;
    sa.prototype.set = hP;
    var Ic = sa,
        pP = Ic;

    function gP() {
        this.__data__ = new pP, this.size = 0
    }
    var mP = gP;

    function vP(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var yP = vP;

    function _P(e) {
        return this.__data__.get(e)
    }
    var EP = _P;

    function bP(e) {
        return this.__data__.has(e)
    }
    var TP = bP,
        OP = typeof Dt == "object" && Dt && Dt.Object === Object && Dt,
        Yb = OP,
        SP = Yb,
        AP = typeof self == "object" && self && self.Object === Object && self,
        IP = SP || AP || Function("return this")(),
        dn = IP,
        wP = dn,
        CP = wP.Symbol,
        wc = CP,
        Zv = wc,
        qb = Object.prototype,
        NP = qb.hasOwnProperty,
        $P = qb.toString,
        Ra = Zv ? Zv.toStringTag : void 0;

    function RP(e) {
        var t = NP.call(e, Ra),
            r = e[Ra];
        try {
            e[Ra] = void 0;
            var n = !0
        } catch {}
        var s = $P.call(e);
        return n && (t ? e[Ra] = r : delete e[Ra]), s
    }
    var LP = RP,
        PP = Object.prototype,
        kP = PP.toString;

    function DP(e) {
        return kP.call(e)
    }
    var xP = DP,
        Qv = wc,
        MP = LP,
        FP = xP,
        UP = "[object Null]",
        BP = "[object Undefined]",
        ey = Qv ? Qv.toStringTag : void 0;

    function GP(e) {
        return e == null ? e === void 0 ? BP : UP : ey && ey in Object(e) ? MP(e) : FP(e)
    }
    var aa = GP;

    function jP(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var hn = jP,
        WP = aa,
        VP = hn,
        HP = "[object AsyncFunction]",
        KP = "[object Function]",
        YP = "[object GeneratorFunction]",
        qP = "[object Proxy]";

    function zP(e) {
        if (!VP(e)) return !1;
        var t = WP(e);
        return t == KP || t == YP || t == HP || t == qP
    }
    var Rh = zP,
        XP = dn,
        JP = XP["__core-js_shared__"],
        ZP = JP,
        vf = ZP,
        ty = function() {
            var e = /[^.]+$/.exec(vf && vf.keys && vf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function QP(e) {
        return !!ty && ty in e
    }
    var ek = QP,
        tk = Function.prototype,
        rk = tk.toString;

    function nk(e) {
        if (e != null) {
            try {
                return rk.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var zb = nk,
        ik = Rh,
        sk = ek,
        ak = hn,
        ok = zb,
        lk = /[\\^$.*+?()[\]{}|]/g,
        ck = /^\[object .+?Constructor\]$/,
        uk = Function.prototype,
        fk = Object.prototype,
        dk = uk.toString,
        hk = fk.hasOwnProperty,
        pk = RegExp("^" + dk.call(hk).replace(lk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function gk(e) {
        if (!ak(e) || sk(e)) return !1;
        var t = ik(e) ? pk : ck;
        return t.test(ok(e))
    }
    var mk = gk;

    function vk(e, t) {
        return e == null ? void 0 : e[t]
    }
    var yk = vk,
        _k = mk,
        Ek = yk;

    function bk(e, t) {
        var r = Ek(e, t);
        return _k(r) ? r : void 0
    }
    var cs = bk,
        Tk = cs,
        Ok = dn,
        Sk = Tk(Ok, "Map"),
        Lh = Sk,
        Ak = cs,
        Ik = Ak(Object, "create"),
        Cc = Ik,
        ry = Cc;

    function wk() {
        this.__data__ = ry ? ry(null) : {}, this.size = 0
    }
    var Ck = wk;

    function Nk(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var $k = Nk,
        Rk = Cc,
        Lk = "__lodash_hash_undefined__",
        Pk = Object.prototype,
        kk = Pk.hasOwnProperty;

    function Dk(e) {
        var t = this.__data__;
        if (Rk) {
            var r = t[e];
            return r === Lk ? void 0 : r
        }
        return kk.call(t, e) ? t[e] : void 0
    }
    var xk = Dk,
        Mk = Cc,
        Fk = Object.prototype,
        Uk = Fk.hasOwnProperty;

    function Bk(e) {
        var t = this.__data__;
        return Mk ? t[e] !== void 0 : Uk.call(t, e)
    }
    var Gk = Bk,
        jk = Cc,
        Wk = "__lodash_hash_undefined__";

    function Vk(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = jk && t === void 0 ? Wk : t, this
    }
    var Hk = Vk,
        Kk = Ck,
        Yk = $k,
        qk = xk,
        zk = Gk,
        Xk = Hk;

    function oa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    oa.prototype.clear = Kk;
    oa.prototype.delete = Yk;
    oa.prototype.get = qk;
    oa.prototype.has = zk;
    oa.prototype.set = Xk;
    var Jk = oa,
        ny = Jk,
        Zk = Ic,
        Qk = Lh;

    function eD() {
        this.size = 0, this.__data__ = {
            hash: new ny,
            map: new(Qk || Zk),
            string: new ny
        }
    }
    var tD = eD;

    function rD(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var nD = rD,
        iD = nD;

    function sD(e, t) {
        var r = e.__data__;
        return iD(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Nc = sD,
        aD = Nc;

    function oD(e) {
        var t = aD(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var lD = oD,
        cD = Nc;

    function uD(e) {
        return cD(this, e).get(e)
    }
    var fD = uD,
        dD = Nc;

    function hD(e) {
        return dD(this, e).has(e)
    }
    var pD = hD,
        gD = Nc;

    function mD(e, t) {
        var r = gD(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var vD = mD,
        yD = tD,
        _D = lD,
        ED = fD,
        bD = pD,
        TD = vD;

    function la(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    la.prototype.clear = yD;
    la.prototype.delete = _D;
    la.prototype.get = ED;
    la.prototype.has = bD;
    la.prototype.set = TD;
    var Xb = la,
        OD = Ic,
        SD = Lh,
        AD = Xb,
        ID = 200;

    function wD(e, t) {
        var r = this.__data__;
        if (r instanceof OD) {
            var n = r.__data__;
            if (!SD || n.length < ID - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new AD(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var CD = wD,
        ND = Ic,
        $D = mP,
        RD = yP,
        LD = EP,
        PD = TP,
        kD = CD;

    function ca(e) {
        var t = this.__data__ = new ND(e);
        this.size = t.size
    }
    ca.prototype.clear = $D;
    ca.prototype.delete = RD;
    ca.prototype.get = LD;
    ca.prototype.has = PD;
    ca.prototype.set = kD;
    var Jb = ca,
        DD = cs,
        xD = function() {
            try {
                var e = DD(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        Zb = xD,
        iy = Zb;

    function MD(e, t, r) {
        t == "__proto__" && iy ? iy(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Ph = MD,
        FD = Ph,
        UD = Sc;

    function BD(e, t, r) {
        (r !== void 0 && !UD(e[t], r) || r === void 0 && !(t in e)) && FD(e, t, r)
    }
    var Qb = BD;

    function GD(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), l = n(t), u = l.length; u--;) {
                var f = l[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var jD = GD,
        WD = jD,
        VD = WD(),
        HD = VD,
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
                b = u ? u(y) : new h.constructor(y);
            return h.copy(b), b
        }
        e.exports = f
    })(Kl, Kl.exports);
    var KD = dn,
        YD = KD.Uint8Array,
        qD = YD,
        sy = qD;

    function zD(e) {
        var t = new e.constructor(e.byteLength);
        return new sy(t).set(new sy(e)), t
    }
    var kh = zD,
        XD = kh;

    function JD(e, t) {
        var r = t ? XD(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var eT = JD;

    function ZD(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var tT = ZD,
        QD = hn,
        ay = Object.create,
        ex = function() {
            function e() {}
            return function(t) {
                if (!QD(t)) return {};
                if (ay) return ay(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        tx = ex;

    function rx(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var rT = rx,
        nx = rT,
        ix = nx(Object.getPrototypeOf, Object),
        Dh = ix,
        sx = Object.prototype;

    function ax(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || sx;
        return e === r
    }
    var xh = ax,
        ox = tx,
        lx = Dh,
        cx = xh;

    function ux(e) {
        return typeof e.constructor == "function" && !cx(e) ? ox(lx(e)) : {}
    }
    var nT = ux;

    function fx(e) {
        return e != null && typeof e == "object"
    }
    var vi = fx,
        dx = aa,
        hx = vi,
        px = "[object Arguments]";

    function gx(e) {
        return hx(e) && dx(e) == px
    }
    var mx = gx,
        oy = mx,
        vx = vi,
        iT = Object.prototype,
        yx = iT.hasOwnProperty,
        _x = iT.propertyIsEnumerable,
        Ex = oy(function() {
            return arguments
        }()) ? oy : function(e) {
            return vx(e) && yx.call(e, "callee") && !_x.call(e, "callee")
        },
        sT = Ex,
        bx = Array.isArray,
        yi = bx,
        Tx = 9007199254740991;

    function Ox(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Tx
    }
    var aT = Ox,
        Sx = Rh,
        Ax = aT;

    function Ix(e) {
        return e != null && Ax(e.length) && !Sx(e)
    }
    var $c = Ix,
        wx = $c,
        Cx = vi;

    function Nx(e) {
        return Cx(e) && wx(e)
    }
    var $x = Nx,
        eo = {
            exports: {}
        };

    function Rx() {
        return !1
    }
    var Lx = Rx;
    (function(e, t) {
        var r = dn,
            n = Lx,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            l = o && o.exports === s,
            u = l ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(eo, eo.exports);
    var Px = aa,
        kx = Dh,
        Dx = vi,
        xx = "[object Object]",
        Mx = Function.prototype,
        Fx = Object.prototype,
        oT = Mx.toString,
        Ux = Fx.hasOwnProperty,
        Bx = oT.call(Object);

    function Gx(e) {
        if (!Dx(e) || Px(e) != xx) return !1;
        var t = kx(e);
        if (t === null) return !0;
        var r = Ux.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && oT.call(r) == Bx
    }
    var jx = Gx,
        Wx = aa,
        Vx = aT,
        Hx = vi,
        Kx = "[object Arguments]",
        Yx = "[object Array]",
        qx = "[object Boolean]",
        zx = "[object Date]",
        Xx = "[object Error]",
        Jx = "[object Function]",
        Zx = "[object Map]",
        Qx = "[object Number]",
        eM = "[object Object]",
        tM = "[object RegExp]",
        rM = "[object Set]",
        nM = "[object String]",
        iM = "[object WeakMap]",
        sM = "[object ArrayBuffer]",
        aM = "[object DataView]",
        oM = "[object Float32Array]",
        lM = "[object Float64Array]",
        cM = "[object Int8Array]",
        uM = "[object Int16Array]",
        fM = "[object Int32Array]",
        dM = "[object Uint8Array]",
        hM = "[object Uint8ClampedArray]",
        pM = "[object Uint16Array]",
        gM = "[object Uint32Array]",
        Ot = {};
    Ot[oM] = Ot[lM] = Ot[cM] = Ot[uM] = Ot[fM] = Ot[dM] = Ot[hM] = Ot[pM] = Ot[gM] = !0;
    Ot[Kx] = Ot[Yx] = Ot[sM] = Ot[qx] = Ot[aM] = Ot[zx] = Ot[Xx] = Ot[Jx] = Ot[Zx] = Ot[Qx] = Ot[eM] = Ot[tM] = Ot[rM] = Ot[nM] = Ot[iM] = !1;

    function mM(e) {
        return Hx(e) && Vx(e.length) && !!Ot[Wx(e)]
    }
    var vM = mM;

    function yM(e) {
        return function(t) {
            return e(t)
        }
    }
    var Mh = yM,
        to = {
            exports: {}
        };
    (function(e, t) {
        var r = Yb,
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
    var _M = vM,
        EM = Mh,
        ly = to.exports,
        cy = ly && ly.isTypedArray,
        bM = cy ? EM(cy) : _M,
        lT = bM;

    function TM(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var cT = TM,
        OM = Ph,
        SM = Sc,
        AM = Object.prototype,
        IM = AM.hasOwnProperty;

    function wM(e, t, r) {
        var n = e[t];
        (!(IM.call(e, t) && SM(n, r)) || r === void 0 && !(t in e)) && OM(e, t, r)
    }
    var Fh = wM,
        CM = Fh,
        NM = Ph;

    function $M(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? NM(r, u, f) : CM(r, u, f)
        }
        return r
    }
    var lo = $M;

    function RM(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var LM = RM,
        PM = 9007199254740991,
        kM = /^(?:0|[1-9]\d*)$/;

    function DM(e, t) {
        var r = typeof e;
        return t = t == null ? PM : t, !!t && (r == "number" || r != "symbol" && kM.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Uh = DM,
        xM = LM,
        MM = sT,
        FM = yi,
        UM = eo.exports,
        BM = Uh,
        GM = lT,
        jM = Object.prototype,
        WM = jM.hasOwnProperty;

    function VM(e, t) {
        var r = FM(e),
            n = !r && MM(e),
            s = !r && !n && UM(e),
            o = !r && !n && !s && GM(e),
            l = r || n || s || o,
            u = l ? xM(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || WM.call(e, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || BM(h, f))) && u.push(h);
        return u
    }
    var uT = VM;

    function HM(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var KM = HM,
        YM = hn,
        qM = xh,
        zM = KM,
        XM = Object.prototype,
        JM = XM.hasOwnProperty;

    function ZM(e) {
        if (!YM(e)) return zM(e);
        var t = qM(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !JM.call(e, n)) || r.push(n);
        return r
    }
    var QM = ZM,
        e3 = uT,
        t3 = QM,
        r3 = $c;

    function n3(e) {
        return r3(e) ? e3(e, !0) : t3(e)
    }
    var co = n3,
        i3 = lo,
        s3 = co;

    function a3(e) {
        return i3(e, s3(e))
    }
    var o3 = a3,
        uy = Qb,
        l3 = Kl.exports,
        c3 = eT,
        u3 = tT,
        f3 = nT,
        fy = sT,
        dy = yi,
        d3 = $x,
        h3 = eo.exports,
        p3 = Rh,
        g3 = hn,
        m3 = jx,
        v3 = lT,
        hy = cT,
        y3 = o3;

    function _3(e, t, r, n, s, o, l) {
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
            var b = dy(f),
                T = !b && h3(f),
                R = !b && !T && v3(f);
            g = f, b || T || R ? dy(u) ? g = u : d3(u) ? g = u3(u) : T ? (y = !1, g = l3(f, !0)) : R ? (y = !1, g = c3(f, !0)) : g = [] : m3(f) || fy(f) ? (g = u, fy(u) ? g = y3(u) : (!g3(u) || p3(u)) && (g = f3(f))) : y = !1
        }
        y && (l.set(f, g), s(g, f, n, o, l), l.delete(f)), uy(e, r, g)
    }
    var E3 = _3,
        b3 = Jb,
        T3 = Qb,
        O3 = HD,
        S3 = E3,
        A3 = hn,
        I3 = co,
        w3 = cT;

    function fT(e, t, r, n, s) {
        e !== t && O3(t, function(o, l) {
            if (s || (s = new b3), A3(o)) S3(e, t, l, r, fT, n, s);
            else {
                var u = n ? n(w3(e, l), o, l + "", e, t, s) : void 0;
                u === void 0 && (u = o), T3(e, l, u)
            }
        }, I3)
    }
    var C3 = fT;

    function N3(e) {
        return e
    }
    var dT = N3;

    function $3(e, t, r) {
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
    var R3 = $3,
        L3 = R3,
        py = Math.max;

    function P3(e, t, r) {
        return t = py(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = py(n.length - t, 0), l = Array(o); ++s < o;) l[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(l), L3(e, this, u)
            }
    }
    var k3 = P3;

    function D3(e) {
        return function() {
            return e
        }
    }
    var x3 = D3,
        M3 = x3,
        gy = Zb,
        F3 = dT,
        U3 = gy ? function(e, t) {
            return gy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: M3(t),
                writable: !0
            })
        } : F3,
        B3 = U3,
        G3 = 800,
        j3 = 16,
        W3 = Date.now;

    function V3(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = W3(),
                s = j3 - (n - r);
            if (r = n, s > 0) {
                if (++t >= G3) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var H3 = V3,
        K3 = B3,
        Y3 = H3,
        q3 = Y3(K3),
        z3 = q3,
        X3 = dT,
        J3 = k3,
        Z3 = z3;

    function Q3(e, t) {
        return Z3(J3(e, t, X3), e + "")
    }
    var eF = Q3,
        tF = Sc,
        rF = $c,
        nF = Uh,
        iF = hn;

    function sF(e, t, r) {
        if (!iF(r)) return !1;
        var n = typeof t;
        return (n == "number" ? rF(r) && nF(t, r.length) : n == "string" && t in r) ? tF(r[t], e) : !1
    }
    var aF = sF,
        oF = eF,
        lF = aF;

    function cF(e) {
        return oF(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, l && lF(r[0], r[1], l) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var uF = cF,
        fF = C3,
        dF = uF,
        hF = dF(function(e, t, r) {
            fF(e, t, r)
        }),
        pF = hF;
    class Gs {
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
            return pF(t[0], ...t)
        }
    }
    ge(Gs, "locale"), ge(Gs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
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
            const t = new Intl.DateTimeFormat(Gs.locale, {
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
        var r = typeof self < "u" ? self : Dt,
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

                function b(F) {
                    return typeof F != "string" && (F = String(F)), F
                }

                function T(F) {
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
                    F = y(F), ie = b(ie);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + ie : ie
                }, R.prototype.delete = function(F) {
                    delete this.map[y(F)]
                }, R.prototype.get = function(F) {
                    return F = y(F), this.has(F) ? this.map[F] : null
                }, R.prototype.has = function(F) {
                    return this.map.hasOwnProperty(y(F))
                }, R.prototype.set = function(F, ie) {
                    this.map[y(F)] = b(ie)
                }, R.prototype.forEach = function(F, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(ie, this.map[de], de, this)
                }, R.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push(de)
                    }), T(F)
                }, R.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(ie) {
                        F.push(ie)
                    }), T(F)
                }, R.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push([de, ie])
                    }), T(F)
                }, u.iterable && (R.prototype[Symbol.iterator] = R.prototype.entries);

                function D(F) {
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

                function w(F) {
                    var ie = new FileReader,
                        de = B(ie);
                    return ie.readAsArrayBuffer(F), de
                }

                function H(F) {
                    var ie = new FileReader,
                        de = B(ie);
                    return ie.readAsText(F), de
                }

                function q(F) {
                    for (var ie = new Uint8Array(F), de = new Array(ie.length), Ee = 0; Ee < ie.length; Ee++) de[Ee] = String.fromCharCode(ie[Ee]);
                    return de.join("")
                }

                function j(F) {
                    if (F.slice) return F.slice(0);
                    var ie = new Uint8Array(F.byteLength);
                    return ie.set(new Uint8Array(F)), ie.buffer
                }

                function G() {
                    return this.bodyUsed = !1, this._initBody = function(F) {
                        this._bodyInit = F, F ? typeof F == "string" ? this._bodyText = F : u.blob && Blob.prototype.isPrototypeOf(F) ? this._bodyBlob = F : u.formData && FormData.prototype.isPrototypeOf(F) ? this._bodyFormData = F : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) ? this._bodyText = F.toString() : u.arrayBuffer && u.blob && f(F) ? (this._bodyArrayBuffer = j(F.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(F) || g(F)) ? this._bodyArrayBuffer = j(F) : this._bodyText = F = Object.prototype.toString.call(F) : this._bodyText = "", this.headers.get("content-type") || (typeof F == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(F) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var F = D(this);
                        if (F) return F;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? D(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(w)
                    }), this.text = function() {
                        var F = D(this);
                        if (F) return F;
                        if (this._bodyBlob) return H(this._bodyBlob);
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
                            var Ee = de.split("="),
                                ve = Ee.shift().replace(/\+/g, " "),
                                Se = Ee.join("=").replace(/\+/g, " ");
                            ie.append(decodeURIComponent(ve), decodeURIComponent(Se))
                        }
                    }), ie
                }

                function Ne(F) {
                    var ie = new R,
                        de = F.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(Ee) {
                        var ve = Ee.split(":"),
                            Se = ve.shift().trim();
                        if (Se) {
                            var Fe = ve.join(":").trim();
                            ie.append(Se, Fe)
                        }
                    }), ie
                }
                G.call(le.prototype);

                function we(F, ie) {
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new R(ie.headers), this.url = ie.url || "", this._initBody(F)
                }
                G.call(we.prototype), we.prototype.clone = function() {
                    return new we(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new R(this.headers),
                        url: this.url
                    })
                }, we.error = function() {
                    var F = new we(null, {
                        status: 0,
                        statusText: ""
                    });
                    return F.type = "error", F
                };
                var fe = [301, 302, 303, 307, 308];
                we.redirect = function(F, ie) {
                    if (fe.indexOf(ie) === -1) throw new RangeError("Invalid status code");
                    return new we(null, {
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
                        var Ee = Error(ie);
                        this.stack = Ee.stack
                    }, l.DOMException.prototype = Object.create(Error.prototype), l.DOMException.prototype.constructor = l.DOMException
                }

                function Ie(F, ie) {
                    return new Promise(function(de, Ee) {
                        var ve = new le(F, ie);
                        if (ve.signal && ve.signal.aborted) return Ee(new l.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function Fe() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var je = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: Ne(Se.getAllResponseHeaders() || "")
                            };
                            je.url = "responseURL" in Se ? Se.responseURL : je.headers.get("X-Request-URL");
                            var tt = "response" in Se ? Se.response : Se.responseText;
                            de(new we(tt, je))
                        }, Se.onerror = function() {
                            Ee(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            Ee(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            Ee(new l.DOMException("Aborted", "AbortError"))
                        }, Se.open(ve.method, ve.url, !0), ve.credentials === "include" ? Se.withCredentials = !0 : ve.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), ve.headers.forEach(function(je, tt) {
                            Se.setRequestHeader(tt, je)
                        }), ve.signal && (ve.signal.addEventListener("abort", Fe), Se.onreadystatechange = function() {
                            Se.readyState === 4 && ve.signal.removeEventListener("abort", Fe)
                        }), Se.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                    })
                }
                return Ie.polyfill = !0, o.fetch || (o.fetch = Ie, o.Headers = R, o.Request = le, o.Response = we), l.Headers = R, l.Request = le, l.Response = we, l.fetch = Ie, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(_d, _d.exports);
    var gF = function() {
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
        mF = gF,
        vF = function() {
            return typeof my != "function" || typeof Symbol != "function" || typeof my("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : mF()
        },
        yF = "Function.prototype.bind called on incompatible ",
        yf = Array.prototype.slice,
        _F = Object.prototype.toString,
        EF = "[object Function]",
        bF = function(t) {
            var r = this;
            if (typeof r != "function" || _F.call(r) !== EF) throw new TypeError(yF + r);
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
        TF = bF,
        Bh = Function.prototype.bind || TF,
        OF = Bh,
        SF = OF.call(Function.call, Object.prototype.hasOwnProperty),
        Ze, Js = SyntaxError,
        hT = Function,
        js = TypeError,
        _f = function(e) {
            try {
                return hT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        ns = Object.getOwnPropertyDescriptor;
    if (ns) try {
        ns({}, "")
    } catch {
        ns = null
    }
    var Ef = function() {
            throw new js
        },
        AF = ns ? function() {
            try {
                return arguments.callee, Ef
            } catch {
                try {
                    return ns(arguments, "callee").get
                } catch {
                    return Ef
                }
            }
        }() : Ef,
        Is = vF(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        $s = {},
        IF = typeof Uint8Array > "u" ? Ze : ii(Uint8Array),
        Ws = {
            "%AggregateError%": typeof AggregateError > "u" ? Ze : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Ze : ArrayBuffer,
            "%ArrayIteratorPrototype%": Is ? ii([][Symbol.iterator]()) : Ze,
            "%AsyncFromSyncIteratorPrototype%": Ze,
            "%AsyncFunction%": $s,
            "%AsyncGenerator%": $s,
            "%AsyncGeneratorFunction%": $s,
            "%AsyncIteratorPrototype%": $s,
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
            "%Function%": hT,
            "%GeneratorFunction%": $s,
            "%Int8Array%": typeof Int8Array > "u" ? Ze : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Ze : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Ze : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Is ? ii(ii([][Symbol.iterator]())) : Ze,
            "%JSON%": typeof JSON == "object" ? JSON : Ze,
            "%Map%": typeof Map > "u" ? Ze : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Is ? Ze : ii(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !Is ? Ze : ii(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Ze : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Is ? ii("" [Symbol.iterator]()) : Ze,
            "%Symbol%": Is ? Symbol : Ze,
            "%SyntaxError%": Js,
            "%ThrowTypeError%": AF,
            "%TypedArray%": IF,
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
            return Ws[t] = r, r
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
        Yl = SF,
        CF = uo.call(Function.call, Array.prototype.concat),
        NF = uo.call(Function.apply, Array.prototype.splice),
        yy = uo.call(Function.call, String.prototype.replace),
        ql = uo.call(Function.call, String.prototype.slice),
        $F = uo.call(Function.call, RegExp.prototype.exec),
        RF = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        LF = /\\(\\)?/g,
        PF = function(t) {
            var r = ql(t, 0, 1),
                n = ql(t, -1);
            if (r === "%" && n !== "%") throw new Js("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Js("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return yy(t, RF, function(o, l, u, f) {
                s[s.length] = u ? yy(f, LF, "$1") : l || o
            }), s
        },
        kF = function(t, r) {
            var n = t,
                s;
            if (Yl(vy, n) && (s = vy[n], n = "%" + s[0] + "%"), Yl(Ws, n)) {
                var o = Ws[n];
                if (o === $s && (o = wF(n)), typeof o > "u" && !r) throw new js("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new Js("intrinsic " + t + " does not exist!")
        },
        Gh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new js("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new js('"allowMissing" argument must be a boolean');
            if ($F(/^%?[^%]*%?$/g, t) === null) throw new Js("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = PF(t),
                s = n.length > 0 ? n[0] : "",
                o = kF("%" + s + "%", r),
                l = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], NF(n, CF([0, 1], h)));
            for (var g = 1, y = !0; g < n.length; g += 1) {
                var b = n[g],
                    T = ql(b, 0, 1),
                    R = ql(b, -1);
                if ((T === '"' || T === "'" || T === "`" || R === '"' || R === "'" || R === "`") && T !== R) throw new Js("property names with quotes must have matching quotes");
                if ((b === "constructor" || !y) && (f = !0), s += "." + b, l = "%" + s + "%", Yl(Ws, l)) u = Ws[l];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!r) throw new js("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (ns && g + 1 >= n.length) {
                        var D = ns(u, b);
                        y = !!D, y && "get" in D && !("originalValue" in D.get) ? u = D.get : u = u[b]
                    } else y = Yl(u, b), u = u[b];
                    y && !f && (Ws[l] = u)
                }
            }
            return u
        },
        pT = {
            exports: {}
        };
    (function(e) {
        var t = Bh,
            r = Gh,
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
            var b = o(t, s, arguments);
            if (l && u) {
                var T = l(b, "length");
                T.configurable && u(b, "length", {
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
    })(pT);
    var gT = Gh,
        mT = pT.exports,
        DF = mT(gT("String.prototype.indexOf")),
        xF = function(t, r) {
            var n = gT(t, !!r);
            return typeof n == "function" && DF(t, ".prototype.") > -1 ? mT(n) : n
        };
    const MF = {},
        FF = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: MF
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        UF = W2(FF);
    var jh = typeof Map == "function" && Map.prototype,
        bf = Object.getOwnPropertyDescriptor && jh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        zl = jh && bf && typeof bf.get == "function" ? bf.get : null,
        BF = jh && Map.prototype.forEach,
        Wh = typeof Set == "function" && Set.prototype,
        Tf = Object.getOwnPropertyDescriptor && Wh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Xl = Wh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        GF = Wh && Set.prototype.forEach,
        jF = typeof WeakMap == "function" && WeakMap.prototype,
        Ba = jF ? WeakMap.prototype.has : null,
        WF = typeof WeakSet == "function" && WeakSet.prototype,
        Ga = WF ? WeakSet.prototype.has : null,
        VF = typeof WeakRef == "function" && WeakRef.prototype,
        _y = VF ? WeakRef.prototype.deref : null,
        HF = Boolean.prototype.valueOf,
        KF = Object.prototype.toString,
        YF = Function.prototype.toString,
        qF = String.prototype.match,
        Vh = String.prototype.slice,
        oi = String.prototype.replace,
        zF = String.prototype.toUpperCase,
        Ey = String.prototype.toLowerCase,
        vT = RegExp.prototype.test,
        by = Array.prototype.concat,
        On = Array.prototype.join,
        XF = Array.prototype.slice,
        Ty = Math.floor,
        Ed = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Of = Object.getOwnPropertySymbols,
        bd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Zs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        ur = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Zs ? "object" : "symbol") ? Symbol.toStringTag : null,
        yT = Object.prototype.propertyIsEnumerable,
        Oy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function Sy(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || vT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -Ty(-e) : Ty(e);
            if (n !== e) {
                var s = String(n),
                    o = Vh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var Td = UF,
        Ay = Td.custom,
        Iy = ET(Ay) ? Ay : null,
        JF = function e(t, r, n, s) {
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
                return u ? Sy(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? Sy(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return Od(t) ? "[Array]" : "[Object]";
            var y = gU(o, n);
            if (typeof s > "u") s = [];
            else if (bT(s, t) >= 0) return "[Circular]";

            function b(Ie, F, ie) {
                if (F && (s = XF.call(s), s.push(F)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Ie, de, n + 1, s)
                }
                return e(Ie, o, n + 1, s)
            }
            if (typeof t == "function" && !wy(t)) {
                var T = aU(t),
                    R = pl(t, b);
                return "[Function" + (T ? ": " + T : " (anonymous)") + "]" + (R.length > 0 ? " { " + On.call(R, ", ") + " }" : "")
            }
            if (ET(t)) {
                var D = Zs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : bd.call(t);
                return typeof t == "object" && !Zs ? La(D) : D
            }
            if (dU(t)) {
                for (var B = "<" + Ey.call(String(t.nodeName)), w = t.attributes || [], H = 0; H < w.length; H++) B += " " + w[H].name + "=" + _T(ZF(w[H].value), "double", o);
                return B += ">", t.childNodes && t.childNodes.length && (B += "..."), B += "</" + Ey.call(String(t.nodeName)) + ">", B
            }
            if (Od(t)) {
                if (t.length === 0) return "[]";
                var q = pl(t, b);
                return y && !pU(q) ? "[" + Sd(q, y) + "]" : "[ " + On.call(q, ", ") + " ]"
            }
            if (eU(t)) {
                var j = pl(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !yT.call(t, "cause") ? "{ [" + String(t) + "] " + On.call(by.call("[cause]: " + b(t.cause), j), ", ") + " }" : j.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + On.call(j, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Iy && typeof t[Iy] == "function" && Td) return Td(t, {
                    depth: g - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (oU(t)) {
                var G = [];
                return BF.call(t, function(Ie, F) {
                    G.push(b(F, t, !0) + " => " + b(Ie, t))
                }), Cy("Map", zl.call(t), G, y)
            }
            if (uU(t)) {
                var J = [];
                return GF.call(t, function(Ie) {
                    J.push(b(Ie, t))
                }), Cy("Set", Xl.call(t), J, y)
            }
            if (lU(t)) return Sf("WeakMap");
            if (fU(t)) return Sf("WeakSet");
            if (cU(t)) return Sf("WeakRef");
            if (rU(t)) return La(b(Number(t)));
            if (iU(t)) return La(b(Ed.call(t)));
            if (nU(t)) return La(HF.call(t));
            if (tU(t)) return La(b(String(t)));
            if (!QF(t) && !wy(t)) {
                var oe = pl(t, b),
                    le = Oy ? Oy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ne = !le && ur && Object(t) === t && ur in t ? Vh.call(_i(t), 8, -1) : ue ? "Object" : "",
                    we = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = we + (Ne || ue ? "[" + On.call(by.call([], Ne || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : y ? fe + "{" + Sd(oe, y) + "}" : fe + "{ " + On.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function _T(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function ZF(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Od(e) {
        return _i(e) === "[object Array]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function QF(e) {
        return _i(e) === "[object Date]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function wy(e) {
        return _i(e) === "[object RegExp]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function eU(e) {
        return _i(e) === "[object Error]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function tU(e) {
        return _i(e) === "[object String]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function rU(e) {
        return _i(e) === "[object Number]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function nU(e) {
        return _i(e) === "[object Boolean]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function ET(e) {
        if (Zs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !bd) return !1;
        try {
            return bd.call(e), !0
        } catch {}
        return !1
    }

    function iU(e) {
        if (!e || typeof e != "object" || !Ed) return !1;
        try {
            return Ed.call(e), !0
        } catch {}
        return !1
    }
    var sU = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return sU.call(e, t)
    }

    function _i(e) {
        return KF.call(e)
    }

    function aU(e) {
        if (e.name) return e.name;
        var t = qF.call(YF.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function bT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function oU(e) {
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

    function lU(e) {
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

    function cU(e) {
        if (!_y || !e || typeof e != "object") return !1;
        try {
            return _y.call(e), !0
        } catch {}
        return !1
    }

    function uU(e) {
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

    function fU(e) {
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

    function dU(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function TT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return TT(Vh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, hU);
        return _T(s, "single", t)
    }

    function hU(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + zF.call(t.toString(16))
    }

    function La(e) {
        return "Object(" + e + ")"
    }

    function Sf(e) {
        return e + " { ? }"
    }

    function Cy(e, t, r, n) {
        var s = n ? Sd(r, n) : On.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function pU(e) {
        for (var t = 0; t < e.length; t++)
            if (bT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function gU(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = On.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: On.call(Array(t + 1), r)
        }
    }

    function Sd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + On.call(e, "," + r) + `
` + t.prev
    }

    function pl(e, t) {
        var r = Od(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = si(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Of == "function" ? Of(e) : [],
            l;
        if (Zs) {
            l = {};
            for (var u = 0; u < o.length; u++) l["$" + o[u]] = o[u]
        }
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || Zs && l["$" + f] instanceof Symbol || (vT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Of == "function")
            for (var h = 0; h < o.length; h++) yT.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var Hh = Gh,
        ua = xF,
        mU = JF,
        vU = Hh("%TypeError%"),
        gl = Hh("%WeakMap%", !0),
        ml = Hh("%Map%", !0),
        yU = ua("WeakMap.prototype.get", !0),
        _U = ua("WeakMap.prototype.set", !0),
        EU = ua("WeakMap.prototype.has", !0),
        bU = ua("Map.prototype.get", !0),
        TU = ua("Map.prototype.set", !0),
        OU = ua("Map.prototype.has", !0),
        Kh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        SU = function(e, t) {
            var r = Kh(e, t);
            return r && r.value
        },
        AU = function(e, t, r) {
            var n = Kh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        IU = function(e, t) {
            return !!Kh(e, t)
        },
        wU = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new vU("Side channel does not contain " + mU(o))
                },
                get: function(o) {
                    if (gl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return yU(t, o)
                    } else if (ml) {
                        if (r) return bU(r, o)
                    } else if (n) return SU(n, o)
                },
                has: function(o) {
                    if (gl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return EU(t, o)
                    } else if (ml) {
                        if (r) return OU(r, o)
                    } else if (n) return IU(n, o);
                    return !1
                },
                set: function(o, l) {
                    gl && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new gl), _U(t, o, l)) : ml ? (r || (r = new ml), TU(r, o, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), AU(n, o, l))
                }
            };
            return s
        },
        CU = String.prototype.replace,
        NU = /%20/g,
        Af = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Yh = {
            default: Af.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return CU.call(e, NU, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: Af.RFC1738,
            RFC3986: Af.RFC3986
        },
        $U = Yh,
        If = Object.prototype.hasOwnProperty,
        zi = Array.isArray,
        yn = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        RU = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (zi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        OT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        LU = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (zi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !If.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return zi(t) && !zi(r) && (s = OT(t, n)), zi(t) && zi(r) ? (r.forEach(function(o, l) {
                if (If.call(t, l)) {
                    var u = t[l];
                    u && typeof u == "object" && o && typeof o == "object" ? t[l] = e(u, o, n) : t.push(o)
                } else t[l] = o
            }), t) : Object.keys(r).reduce(function(o, l) {
                var u = r[l];
                return If.call(o, l) ? o[l] = e(o[l], u, n) : o[l] = u, o
            }, s)
        },
        PU = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        kU = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        DU = function(t, r, n, s, o) {
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
        xU = function(t) {
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
            return RU(r), t
        },
        MU = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        FU = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        UU = function(t, r) {
            return [].concat(t, r)
        },
        BU = function(t, r) {
            if (zi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        ST = {
            arrayToObject: OT,
            assign: PU,
            combine: UU,
            compact: xU,
            decode: kU,
            encode: DU,
            isBuffer: FU,
            isRegExp: MU,
            maybeMap: BU,
            merge: LU
        },
        AT = wU,
        Ad = ST,
        ja = Yh,
        GU = Object.prototype.hasOwnProperty,
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
        jU = String.prototype.split,
        WU = Array.prototype.push,
        IT = function(e, t) {
            WU.apply(e, Fn(t) ? t : [t])
        },
        VU = Date.prototype.toISOString,
        $y = ja.default,
        Zt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Ad.encode,
            encodeValuesOnly: !1,
            format: $y,
            formatter: ja.formatters[$y],
            indices: !1,
            serializeDate: function(t) {
                return VU.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        HU = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        wf = {},
        KU = function e(t, r, n, s, o, l, u, f, h, g, y, b, T, R, D, B) {
            for (var w = t, H = B, q = 0, j = !1;
                (H = H.get(wf)) !== void 0 && !j;) {
                var G = H.get(t);
                if (q += 1, typeof G < "u") {
                    if (G === q) throw new RangeError("Cyclic object value");
                    j = !0
                }
                typeof H.get(wf) > "u" && (q = 0)
            }
            if (typeof f == "function" ? w = f(r, w) : w instanceof Date ? w = y(w) : n === "comma" && Fn(w) && (w = Ad.maybeMap(w, function(Se) {
                    return Se instanceof Date ? y(Se) : Se
                })), w === null) {
                if (o) return u && !R ? u(r, Zt.encoder, D, "key", b) : r;
                w = ""
            }
            if (HU(w) || Ad.isBuffer(w)) {
                if (u) {
                    var J = R ? r : u(r, Zt.encoder, D, "key", b);
                    if (n === "comma" && R) {
                        for (var oe = jU.call(String(w), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + T(u(oe[ue], Zt.encoder, D, "value", b));
                        return [T(J) + (s && Fn(w) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [T(J) + "=" + T(u(w, Zt.encoder, D, "value", b))]
                }
                return [T(r) + "=" + T(String(w))]
            }
            var Ne = [];
            if (typeof w > "u") return Ne;
            var we;
            if (n === "comma" && Fn(w)) we = [{
                value: w.length > 0 ? w.join(",") || null : void 0
            }];
            else if (Fn(f)) we = f;
            else {
                var fe = Object.keys(w);
                we = h ? fe.sort(h) : fe
            }
            for (var Ie = s && Fn(w) && w.length === 1 ? r + "[]" : r, F = 0; F < we.length; ++F) {
                var ie = we[F],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : w[ie];
                if (!(l && de === null)) {
                    var Ee = Fn(w) ? typeof n == "function" ? n(Ie, ie) : Ie : Ie + (g ? "." + ie : "[" + ie + "]");
                    B.set(t, q);
                    var ve = AT();
                    ve.set(wf, B), IT(Ne, e(de, Ee, n, s, o, l, u, f, h, g, y, b, T, R, D, ve))
                }
            }
            return Ne
        },
        YU = function(t) {
            if (!t) return Zt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Zt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = ja.default;
            if (typeof t.format < "u") {
                if (!GU.call(ja.formatters, t.format)) throw new TypeError("Unknown format option provided.");
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
        qU = function(e, t) {
            var r = e,
                n = YU(t),
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
            for (var g = AT(), y = 0; y < s.length; ++y) {
                var b = s[y];
                n.skipNulls && r[b] === null || IT(l, KU(r[b], b, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var T = l.join(n.delimiter),
                R = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? R += "utf8=%26%2310003%3B&" : R += "utf8=%E2%9C%93&"), T.length > 0 ? R + T : ""
        },
        Qs = ST,
        Id = Object.prototype.hasOwnProperty,
        zU = Array.isArray,
        Yt = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: Qs.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        XU = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        wT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        JU = "utf8=%26%2310003%3B",
        ZU = "utf8=%E2%9C%93",
        QU = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === ZU ? h = "utf-8" : l[f] === JU && (h = "iso-8859-1"), u = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== u) {
                    var g = l[f],
                        y = g.indexOf("]="),
                        b = y === -1 ? g.indexOf("=") : y + 1,
                        T, R;
                    b === -1 ? (T = r.decoder(g, Yt.decoder, h, "key"), R = r.strictNullHandling ? null : "") : (T = r.decoder(g.slice(0, b), Yt.decoder, h, "key"), R = Qs.maybeMap(wT(g.slice(b + 1), r), function(D) {
                        return r.decoder(D, Yt.decoder, h, "value")
                    })), R && r.interpretNumericEntities && h === "iso-8859-1" && (R = XU(R)), g.indexOf("[]=") > -1 && (R = zU(R) ? [R] : R), Id.call(n, T) ? n[T] = Qs.combine(n[T], R) : n[T] = R
                } return n
        },
        eB = function(e, t, r, n) {
            for (var s = n ? t : wT(t, r), o = e.length - 1; o >= 0; --o) {
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
        tB = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    l = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && l.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    g = [];
                if (h) {
                    if (!n.plainObjects && Id.call(Object.prototype, h) && !n.allowPrototypes) return;
                    g.push(h)
                }
                for (var y = 0; n.depth > 0 && (f = u.exec(o)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && Id.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), eB(g, r, n, s)
            }
        },
        rB = function(t) {
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
                delimiter: typeof t.delimiter == "string" || Qs.isRegExp(t.delimiter) ? t.delimiter : Yt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Yt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Yt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Yt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Yt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Yt.strictNullHandling
            }
        },
        nB = function(e, t) {
            var r = rB(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? QU(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), l = 0; l < o.length; ++l) {
                var u = o[l],
                    f = tB(u, n[u], r, typeof e == "string");
                s = Qs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Qs.compact(s)
        },
        iB = qU,
        sB = nB,
        aB = Yh,
        CT = {
            formats: aB,
            parse: sB,
            stringify: iB
        };
    class oB {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class lB {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class cB {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class uB {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class fB {}
    var Rc = {
        CreateRoomReply: oB,
        GetRoomReply: lB,
        GetAudienceReply: cB,
        RoomExit: uB,
        RoomLock: fB
    };
    const Ry = _d.exports,
        dB = CT,
        {
            CreateRoomReply: hB,
            GetRoomReply: pB
        } = Rc;
    class gB {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = dB.stringify(r);
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
            return new hB({
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
            return new pB({
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
    var mB = {
            APIClient: gB
        },
        Rs = null;
    typeof WebSocket < "u" ? Rs = WebSocket : typeof MozWebSocket < "u" ? Rs = MozWebSocket : typeof Dt < "u" ? Rs = Dt.WebSocket || Dt.MozWebSocket : typeof window < "u" ? Rs = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Rs = self.WebSocket || self.MozWebSocket);
    var vB = Rs,
        qh = {
            exports: {}
        },
        Vs = typeof Reflect == "object" ? Reflect : null,
        Ly = Vs && typeof Vs.apply == "function" ? Vs.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        Ll;
    Vs && typeof Vs.ownKeys == "function" ? Ll = Vs.ownKeys : Object.getOwnPropertySymbols ? Ll = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Ll = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function yB(e) {
        console && console.warn && console.warn(e)
    }
    var NT = Number.isNaN || function(t) {
        return t !== t
    };

    function ht() {
        ht.init.call(this)
    }
    qh.exports = ht;
    qh.exports.once = TB;
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
            if (typeof e != "number" || e < 0 || NT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Py = e
        }
    });
    ht.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    ht.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || NT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function $T(e) {
        return e._maxListeners === void 0 ? ht.defaultMaxListeners : e._maxListeners
    }
    ht.prototype.getMaxListeners = function() {
        return $T(this)
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
            for (var h = f.length, g = DT(f, h), n = 0; n < h; ++n) Ly(g[n], this, r);
        return !0
    };

    function RT(e, t, r, n) {
        var s, o, l;
        if (Lc(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === void 0) l = o[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = $T(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, yB(u)
        }
        return e
    }
    ht.prototype.addListener = function(t, r) {
        return RT(this, t, r, !1)
    };
    ht.prototype.on = ht.prototype.addListener;
    ht.prototype.prependListener = function(t, r) {
        return RT(this, t, r, !0)
    };

    function _B() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function LT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = _B.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    ht.prototype.once = function(t, r) {
        return Lc(r), this.on(t, LT(this, t, r)), this
    };
    ht.prototype.prependOnceListener = function(t, r) {
        return Lc(r), this.prependListener(t, LT(this, t, r)), this
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
            o === 0 ? n.shift() : EB(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
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

    function PT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? bB(s) : DT(s, s.length)
    }
    ht.prototype.listeners = function(t) {
        return PT(this, t, !0)
    };
    ht.prototype.rawListeners = function(t) {
        return PT(this, t, !1)
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

    function DT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function EB(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function bB(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function TB(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, o), n(l)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            xT(e, t, o, {
                once: !0
            }), t !== "error" && OB(e, s, {
                once: !0
            })
        })
    }

    function OB(e, t, r) {
        typeof e.on == "function" && xT(e, "error", t, r)
    }

    function xT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class SB {
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
    class MT extends fo {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class FT extends fo {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class UT extends fo {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ut extends Pc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class BT extends ut {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class GT extends ut {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class jT extends ut {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class WT extends ut {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class VT extends ut {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class HT extends ut {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class KT extends ut {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class YT extends ut {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class qT extends ut {
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
    class ZT extends ut {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class QT extends ut {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class e1 extends ut {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class t1 extends ut {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class r1 extends ut {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class n1 extends ut {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class i1 extends ut {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class s1 extends ut {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class a1 extends ut {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class o1 extends ut {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class l1 extends ut {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class c1 extends ut {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class u1 extends ut {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class f1 extends ut {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class d1 extends ut {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class h1 extends ut {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function AB({
        code: e,
        message: t
    }) {
        const r = IB[e];
        return r ? new r({
            message: t
        }) : new Pc({
            message: t
        })
    }
    var ui = {
        createError: AB,
        CallError: Pc,
        EcastServerError: fo,
        EcastCreateRoomFailed: MT,
        EcastDialRoomFailed: FT,
        EcastServerIsShuttingDown: UT,
        EcastClientError: ut,
        EcastParseError: BT,
        EcastRequestIsMissingOpcode: GT,
        EcastRequestHasInvalidOpcode: jT,
        EcastRequestHasInvalidArguments: WT,
        EcastEntityNotFound: VT,
        EcastEntityAlreadyExists: HT,
        EcastEntityTypeError: KT,
        EcastNoSuchClient: YT,
        EcastRoomIsLocked: qT,
        EcastRoomIsFull: zT,
        EcastLicenseNotFound: XT,
        EcastLicenseCheckFailed: JT,
        EcastRoomNotFound: ZT,
        EcastInvalidRole: QT,
        EcastTwitchLoginRequired: e1,
        EcastInvalidOption: t1,
        EcastPasswordRequired: r1,
        EcastInvalidPassword: n1,
        EcastNameRequired: i1,
        EcastFilterError: s1,
        EcastNoSuchFilter: a1,
        EcastPermissionDenied: o1,
        EcastNotConnected: l1,
        EcastIllegalOperation: c1,
        EcastACLChangeDenied: u1,
        EcastRoomHasEnded: f1,
        EcastEntityLocked: d1,
        EcastRateLimitExceeded: h1,
        ObservedError: SB
    };
    const IB = {
        1e3: fo,
        1001: MT,
        1002: FT,
        1003: UT,
        2e3: ut,
        2001: BT,
        2002: GT,
        2003: jT,
        2004: WT,
        2005: VT,
        2006: HT,
        2007: KT,
        2008: YT,
        2009: qT,
        2010: zT,
        2011: XT,
        2012: JT,
        2013: ZT,
        2014: QT,
        2015: e1,
        2016: t1,
        2017: r1,
        2018: n1,
        2019: i1,
        2021: s1,
        2022: a1,
        2023: o1,
        2024: l1,
        2025: c1,
        2026: u1,
        2027: f1,
        2028: d1,
        2420: h1
    };
    class wB {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class CB {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class NB {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class $B {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class RB {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var zh = {
        ClientConnected: CB,
        ClientDisconnected: NB,
        ClientKicked: RB,
        ClientSend: $B,
        ClientWelcome: wB
    };
    class LB {
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
        CountGroup: LB
    };
    class PB {
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
        GCounter: PB
    };
    class kB {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var p1 = {
        Notification: kB
    };
    class DB {
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
    class xB {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var Zh = {
        ObjectEntity: DB,
        ObjectEcho: xB
    };
    class MB {
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
        PNCounter: MB
    };
    class FB {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var g1 = {
        Reply: FB
    };
    class UB {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var BB = {
        Request: UB
    };
    class GB {
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
    class jB {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var ep = {
        TextEntity: GB,
        TextEcho: jB
    };
    class WB {
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
        TextRing: WB
    };
    class VB {
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
    var m1 = {
        ArtifactEntity: VB
    };
    class HB {
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
    class KB {
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
    class YB {
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
        DoodleEntity: HB,
        DoodleLine: KB,
        DoodleLineRemoved: YB
    };
    class qB {
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
    class zB {
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
    class XB {
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
    var v1 = {
        StackEntity: qB,
        StackElement: zB,
        StackElements: XB
    };
    class JB {
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
    var y1 = {
        DropEntity: JB
    };
    class ZB {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var QB = {
        Echo: ZB
    };
    class e4 {
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
    var t4 = {
        LockEntity: e4
    };
    class r4 {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var _1 = {
        OK: r4
    };
    class n4 {
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
    var E1 = {
        NumberEntity: n4
    };
    const {
        ArtifactEntity: i4
    } = m1, {
        ClientWelcome: s4,
        ClientConnected: a4,
        ClientDisconnected: o4,
        ClientKicked: l4,
        ClientSend: c4
    } = zh, {
        CountGroup: u4
    } = Xh, {
        DoodleEntity: f4,
        DoodleLine: d4,
        DoodleLineRemoved: h4
    } = rp, {
        StackEntity: p4,
        StackElement: g4,
        StackElements: m4
    } = v1, {
        DropEntity: v4
    } = y1, {
        Echo: y4
    } = QB, {
        LockEntity: _4
    } = t4, {
        GCounter: E4
    } = Jh, {
        GetAudienceReply: b4,
        RoomExit: T4,
        RoomLock: O4
    } = Rc, {
        Notification: S4
    } = p1, {
        OK: A4
    } = _1, {
        NumberEntity: I4
    } = E1, {
        ObjectEcho: w4,
        ObjectEntity: C4
    } = Zh, {
        PNCounter: ky
    } = Qh, {
        Reply: N4
    } = g1, {
        TextEcho: $4,
        TextEntity: R4
    } = ep, {
        TextRing: L4
    } = tp, {
        createError: Dy,
        ObservedError: P4
    } = ui;

    function wd(e, t, r) {
        switch (e) {
            case "ok":
                return new A4;
            case "echo":
                return new y4({
                    message: t.message
                });
            case "lock":
                return new _4({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return Dy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new P4({
                    to: t.to,
                    error: Dy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new R4({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new $4({
                    message: t.message
                });
            case "object":
                return new C4({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new w4({
                    message: t.message
                });
            case "drop":
                return new v4({
                    key: t.key
                });
            case "artifact":
                return new i4({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new a4({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new o4({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new l4({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new c4({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new s4({
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
                        s[o] = wd(l[0], l[1], l[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new f4({
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
                return new d4({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new h4({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new p4({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new g4({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new m4({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new I4({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new T4({
                    cause: t.cause
                });
            case "room/lock":
                return new O4;
            case "room/get-audience":
                return new b4({
                    connections: t.connections
                });
            case "audience":
                return new ky({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new u4({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new L4({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new E4({
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

    function k4(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new N4({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: wd(r, t.result)
        }) : new S4({
            pc: t.pc,
            opcode: r,
            result: wd(r, t.result)
        })
    }
    var D4 = {
        parseResponseMessage: k4
    };
    const xy = vB,
        x4 = CT,
        M4 = qh.exports,
        {
            CallError: F4
        } = ui,
        {
            ClientWelcome: U4
        } = zh,
        {
            CountGroup: B4
        } = Xh,
        {
            GCounter: G4
        } = Jh,
        {
            Notification: My
        } = p1,
        {
            ObjectEntity: Cf
        } = Zh,
        {
            PNCounter: j4
        } = Qh,
        {
            Reply: W4
        } = g1,
        {
            Request: V4
        } = BB,
        {
            TextEntity: Nf
        } = ep,
        {
            TextRing: H4
        } = tp,
        {
            parseResponseMessage: K4
        } = D4,
        {
            DoodleEntity: Y4
        } = rp,
        {
            StackEntity: q4
        } = v1,
        z4 = 1e3 + Math.floor(Math.random() * 500),
        Fy = 13e3;
    class X4 extends M4 {
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
            const r = x4.stringify(t),
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
                this.conn = new xy(n, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const y = K4(g);
                    if (y instanceof W4) this.onReply(y);
                    else if (y instanceof My) {
                        if (y.result instanceof U4) u = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
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
                r = z4;
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
            delete this.pending[r], t.result instanceof F4 ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== xy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new V4({
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
            return this.entities[t] = new Cf({
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
            return this.entities[t] = new Cf({
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
            return this.entities[t] = new Cf({
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
                live: l,
                maxPoints: u,
                size: f,
                weights: h
            } = r;
            s && (n.acl = s), o && (n.colors = o), n.live = l, u != null && (n.maxPoints = u), f && (n.size = f), h && (n.weights = h);
            const g = await this.send("doodle/create", n);
            return this.entities[t] = new Y4({
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
            return this.entities[t] = new q4({
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
            return this.entities[t] = new B4({
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
            return this.entities[t] = new G4({
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
            return this.entities[t] = new j4({
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
            return this.entities[t] = new H4({
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
    var J4 = {
        WSClient: X4
    };
    const {
        APIClient: Z4
    } = mB, {
        WSClient: Q4
    } = J4, {
        CreateRoomReply: e8,
        GetRoomReply: t8
    } = Rc, {
        ClientWelcome: r8,
        ClientDisconnected: n8
    } = zh, {
        ArtifactEntity: i8
    } = m1, {
        GCounter: s8
    } = Jh, {
        NumberEntity: a8
    } = E1, {
        TextEntity: o8
    } = ep, {
        DoodleEntity: l8
    } = rp, {
        ObjectEntity: c8
    } = Zh, {
        CountGroup: u8
    } = Xh, {
        DropEntity: f8
    } = y1, {
        OK: d8
    } = _1, {
        RoomExit: h8
    } = Rc, {
        TextRing: p8
    } = tp, {
        PNCounter: g8
    } = Qh;
    var Ar = {
        APIClient: Z4,
        WSClient: Q4,
        ClientWelcome: r8,
        CreateRoomReply: e8,
        DropEntity: f8,
        GetRoomReply: t8,
        ClientDisconnected: n8,
        RoomExit: h8,
        OK: d8,
        ArtifactEntity: i8,
        DoodleEntity: l8,
        NumberEntity: a8,
        CountGroup: u8,
        GCounter: s8,
        ObjectEntity: c8,
        PNCounter: g8,
        TextEntity: o8,
        TextRing: p8
    };
    const m8 = [{
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
        Cd = e => m8.find(t => t.tag === e || t.categoryId === e);

    function Nd(...e) {
        console.log(...e)
    }
    class v8 {
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
            Nd("[Debug] pushEntity", t), t instanceof Ar.ArtifactEntity ? this.items.push({
                type: "artifact",
                ...t
            }) : t instanceof Ar.DoodleEntity ? this.items.push({
                type: "doodle",
                ...t
            }) : t instanceof Ar.DropEntity ? this.items.push({
                key: t.key,
                type: "drop"
            }) : t instanceof Ar.NumberEntity ? this.items.push({
                key: t.key,
                type: "number",
                value: t.val,
                meta: t.meta,
                restrictions: t.restrictions
            }) : t instanceof Ar.ObjectEntity ? (t.val.kind && (this.automarkPendingLabel = t.val.kind), this.items.push({
                key: t.key,
                type: "object",
                value: t.val,
                meta: t.meta
            })) : t instanceof Ar.TextEntity && this.items.push({
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
            const n = Cd(this.room.appTag),
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
                    b = [{
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
                    T = {
                        unfurl_links: !1,
                        blocks: b
                    };
                if (this.room) {
                    T.icon_emoji = this.room.appTag;
                    const B = Cd(this.room.appTag);
                    T.username = `DebugRecorder ${B?B.name:this.room.appTag}`
                }
                const D = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify(T)
                })).text();
                Nd("[Debug] sendToSlack", D)
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

    function y8(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Uy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(Dt, function(r) {
            var n = typeof window < "u" ? window : typeof Dt < "u" ? Dt : typeof self < "u" ? self : {},
                s = function(O, L) {
                    if (L = L.split(":")[0], O = +O, !O) return !1;
                    switch (L) {
                        case "http":
                        case "ws":
                            return O !== 80;
                        case "https":
                        case "wss":
                            return O !== 443;
                        case "ftp":
                            return O !== 21;
                        case "gopher":
                            return O !== 70;
                        case "file":
                            return !1
                    }
                    return O !== 0
                },
                o = Object.prototype.hasOwnProperty,
                l;

            function u(I) {
                try {
                    return decodeURIComponent(I.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function f(I) {
                try {
                    return encodeURIComponent(I)
                } catch {
                    return null
                }
            }

            function h(I) {
                for (var O = /([^=?#&]+)=?([^&]*)/g, L = {}, S; S = O.exec(I);) {
                    var P = u(S[1]),
                        Q = u(S[2]);
                    P === null || Q === null || P in L || (L[P] = Q)
                }
                return L
            }

            function g(I, O) {
                O = O || "";
                var L = [],
                    S, P;
                typeof O != "string" && (O = "?");
                for (P in I)
                    if (o.call(I, P)) {
                        if (S = I[P], !S && (S === null || S === l || isNaN(S)) && (S = ""), P = f(P), S = f(S), P === null || S === null) continue;
                        L.push(P + "=" + S)
                    } return L.length ? O + L.join("&") : ""
            }
            var y = g,
                b = h,
                T = {
                    stringify: y,
                    parse: b
                },
                R = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                D = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                B = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                w = new RegExp("^" + B + "+");

            function H(I) {
                return (I || "").toString().replace(w, "")
            }
            var q = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(O, L) {
                        return J(L.protocol) ? O.replace(/\\/g, "/") : O
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

            function G(I) {
                var O;
                typeof window < "u" ? O = window : typeof n < "u" ? O = n : typeof self < "u" ? O = self : O = {};
                var L = O.location || {};
                I = I || L;
                var S = {},
                    P = typeof I,
                    Q;
                if (I.protocol === "blob:") S = new ue(unescape(I.pathname), {});
                else if (P === "string") {
                    S = new ue(I, {});
                    for (Q in j) delete S[Q]
                } else if (P === "object") {
                    for (Q in I) Q in j || (S[Q] = I[Q]);
                    S.slashes === void 0 && (S.slashes = R.test(I.href))
                }
                return S
            }

            function J(I) {
                return I === "file:" || I === "ftp:" || I === "http:" || I === "https:" || I === "ws:" || I === "wss:"
            }

            function oe(I, O) {
                I = H(I), O = O || {};
                var L = D.exec(I),
                    S = L[1] ? L[1].toLowerCase() : "",
                    P = !!L[2],
                    Q = !!L[3],
                    ne = 0,
                    _e;
                return P ? Q ? (_e = L[2] + L[3] + L[4], ne = L[2].length + L[3].length) : (_e = L[2] + L[4], ne = L[2].length) : Q ? (_e = L[3] + L[4], ne = L[3].length) : _e = L[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : J(S) ? _e = L[4] : S ? P && (_e = _e.slice(2)) : ne >= 2 && J(O.protocol) && (_e = L[4]), {
                    protocol: S,
                    slashes: P || J(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function le(I, O) {
                if (I === "") return O;
                for (var L = (O || "/").split("/").slice(0, -1).concat(I.split("/")), S = L.length, P = L[S - 1], Q = !1, ne = 0; S--;) L[S] === "." ? L.splice(S, 1) : L[S] === ".." ? (L.splice(S, 1), ne++) : ne && (S === 0 && (Q = !0), L.splice(S, 1), ne--);
                return Q && L.unshift(""), (P === "." || P === "..") && L.push(""), L.join("/")
            }

            function ue(I, O, L) {
                if (I = H(I), !(this instanceof ue)) return new ue(I, O, L);
                var S, P, Q, ne, _e, Te, ft = q.slice(),
                    ir = typeof O,
                    xe = this,
                    pa = 0;
                for (ir !== "object" && ir !== "string" && (L = O, O = null), L && typeof L != "function" && (L = T.parse), O = G(O), P = oe(I || "", O), S = !P.protocol && !P.slashes, xe.slashes = P.slashes || S && O.slashes, xe.protocol = P.protocol || O.protocol || "", I = P.rest, (xe.protocol === "file:" || !P.slashes && (P.protocol || P.slashesCount < 2 || !J(xe.protocol))) && (ft[3] = [/(.*)/, "pathname"]); pa < ft.length; pa++) {
                    if (ne = ft[pa], typeof ne == "function") {
                        I = ne(I, xe);
                        continue
                    }
                    Q = ne[0], Te = ne[1], Q !== Q ? xe[Te] = I : typeof Q == "string" ? ~(_e = I.indexOf(Q)) && (typeof ne[2] == "number" ? (xe[Te] = I.slice(0, _e), I = I.slice(_e + ne[2])) : (xe[Te] = I.slice(_e), I = I.slice(0, _e))) : (_e = Q.exec(I)) && (xe[Te] = _e[1], I = I.slice(0, _e.index)), xe[Te] = xe[Te] || S && ne[3] && O[Te] || "", ne[4] && (xe[Te] = xe[Te].toLowerCase())
                }
                L && (xe.query = L(xe.query)), S && O.slashes && xe.pathname.charAt(0) !== "/" && (xe.pathname !== "" || O.pathname !== "") && (xe.pathname = le(xe.pathname, O.pathname)), xe.pathname.charAt(0) !== "/" && J(xe.protocol) && (xe.pathname = "/" + xe.pathname), s(xe.port, xe.protocol) || (xe.host = xe.hostname, xe.port = ""), xe.username = xe.password = "", xe.auth && (ne = xe.auth.split(":"), xe.username = ne[0] || "", xe.password = ne[1] || ""), xe.origin = xe.protocol !== "file:" && J(xe.protocol) && xe.host ? xe.protocol + "//" + xe.host : "null", xe.href = xe.toString()
            }

            function Ne(I, O, L) {
                var S = this;
                switch (I) {
                    case "query":
                        typeof O == "string" && O.length && (O = (L || T.parse)(O)), S[I] = O;
                        break;
                    case "port":
                        S[I] = O, s(O, S.protocol) ? O && (S.host = S.hostname + ":" + O) : (S.host = S.hostname, S[I] = "");
                        break;
                    case "hostname":
                        S[I] = O, S.port && (O += ":" + S.port), S.host = O;
                        break;
                    case "host":
                        S[I] = O, /:\d+$/.test(O) ? (O = O.split(":"), S.port = O.pop(), S.hostname = O.join(":")) : (S.hostname = O, S.port = "");
                        break;
                    case "protocol":
                        S.protocol = O.toLowerCase(), S.slashes = !L;
                        break;
                    case "pathname":
                    case "hash":
                        if (O) {
                            var P = I === "pathname" ? "/" : "#";
                            S[I] = O.charAt(0) !== P ? P + O : O
                        } else S[I] = O;
                        break;
                    default:
                        S[I] = O
                }
                for (var Q = 0; Q < q.length; Q++) {
                    var ne = q[Q];
                    ne[4] && (S[ne[1]] = S[ne[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && J(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function we(I) {
                (!I || typeof I != "function") && (I = T.stringify);
                var O, L = this,
                    S = L.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var P = S + (L.slashes || J(L.protocol) ? "//" : "");
                return L.username && (P += L.username, L.password && (P += ":" + L.password), P += "@"), P += L.host + L.pathname, O = typeof L.query == "object" ? I(L.query) : L.query, O && (P += O.charAt(0) !== "?" ? "?" + O : O), L.hash && (P += L.hash), P
            }
            ue.prototype = {
                set: Ne,
                toString: we
            }, ue.extractProtocol = oe, ue.location = G, ue.trimLeft = H, ue.qs = T;
            var fe = ue;

            function Ie(I, O) {
                setTimeout(function(L) {
                    return I.call(L)
                }, 4, O)
            }

            function F(I, O) {
                typeof process < "u" && console[I].call(null, O)
            }

            function ie(I, O) {
                I === void 0 && (I = []);
                var L = [];
                return I.forEach(function(S) {
                    O(S) || L.push(S)
                }), L
            }

            function de(I, O) {
                I === void 0 && (I = []);
                var L = [];
                return I.forEach(function(S) {
                    O(S) && L.push(S)
                }), L
            }
            var Ee = function() {
                this.listeners = {}
            };
            Ee.prototype.addEventListener = function(O, L) {
                typeof L == "function" && (Array.isArray(this.listeners[O]) || (this.listeners[O] = []), de(this.listeners[O], function(S) {
                    return S === L
                }).length === 0 && this.listeners[O].push(L))
            }, Ee.prototype.removeEventListener = function(O, L) {
                var S = this.listeners[O];
                this.listeners[O] = ie(S, function(P) {
                    return P === L
                })
            }, Ee.prototype.dispatchEvent = function(O) {
                for (var L = this, S = [], P = arguments.length - 1; P-- > 0;) S[P] = arguments[P + 1];
                var Q = O.type,
                    ne = this.listeners[Q];
                return Array.isArray(ne) ? (ne.forEach(function(_e) {
                    S.length > 0 ? _e.apply(L, S) : _e.call(L, O)
                }), !0) : !1
            };

            function ve(I) {
                var O = I.indexOf("?");
                return O >= 0 ? I.slice(0, O) : I
            }
            var Se = function() {
                this.urlMap = {}
            };
            Se.prototype.attachWebSocket = function(O, L) {
                var S = ve(L),
                    P = this.urlMap[S];
                if (P && P.server && P.websockets.indexOf(O) === -1) return P.websockets.push(O), P.server
            }, Se.prototype.addMembershipToRoom = function(O, L) {
                var S = this.urlMap[ve(O.url)];
                S && S.server && S.websockets.indexOf(O) !== -1 && (S.roomMemberships[L] || (S.roomMemberships[L] = []), S.roomMemberships[L].push(O))
            }, Se.prototype.attachServer = function(O, L) {
                var S = ve(L),
                    P = this.urlMap[S];
                if (!P) return this.urlMap[S] = {
                    server: O,
                    websockets: [],
                    roomMemberships: {}
                }, O
            }, Se.prototype.serverLookup = function(O) {
                var L = ve(O),
                    S = this.urlMap[L];
                if (S) return S.server
            }, Se.prototype.websocketsLookup = function(O, L, S) {
                var P = ve(O),
                    Q, ne = this.urlMap[P];
                if (Q = ne ? ne.websockets : [], L) {
                    var _e = ne.roomMemberships[L];
                    Q = _e || []
                }
                return S ? Q.filter(function(Te) {
                    return Te !== S
                }) : Q
            }, Se.prototype.removeServer = function(O) {
                delete this.urlMap[ve(O)]
            }, Se.prototype.removeWebSocket = function(O, L) {
                var S = ve(L),
                    P = this.urlMap[S];
                P && (P.websockets = ie(P.websockets, function(Q) {
                    return Q === O
                }))
            }, Se.prototype.removeMembershipFromRoom = function(O, L) {
                var S = this.urlMap[ve(O.url)],
                    P = S.roomMemberships[L];
                S && P !== null && (S.roomMemberships[L] = ie(P, function(Q) {
                    return Q === O
                }))
            };
            var Fe = new Se,
                je = {
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
            Ct.prototype.stopPropagation = function() {}, Ct.prototype.stopImmediatePropagation = function() {}, Ct.prototype.initEvent = function(O, L, S) {
                O === void 0 && (O = "undefined"), L === void 0 && (L = !1), S === void 0 && (S = !1), this.type = "" + O, this.bubbles = Boolean(L), this.cancelable = Boolean(S)
            };
            var wr = function(I) {
                    function O(L, S) {
                        if (S === void 0 && (S = {}), I.call(this), !L) throw new TypeError(tt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var P = S.bubbles,
                            Q = S.cancelable;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O
                }(Ct),
                nr = function(I) {
                    function O(L, S) {
                        if (S === void 0 && (S = {}), I.call(this), !L) throw new TypeError(tt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            Q = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ft = S.ports;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.canncelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.origin = "" + _e, this.ports = typeof ft > "u" ? null : ft, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Te || "")
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O
                }(Ct),
                yr = function(I) {
                    function O(L, S) {
                        if (S === void 0 && (S = {}), I.call(this), !L) throw new TypeError(tt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(tt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var P = S.bubbles,
                            Q = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = P ? Boolean(P) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O
                }(Ct);

            function ot(I) {
                var O = I.type,
                    L = I.target,
                    S = new wr(O);
                return L && (S.target = L, S.srcElement = L, S.currentTarget = L), S
            }

            function St(I) {
                var O = I.type,
                    L = I.origin,
                    S = I.data,
                    P = I.target,
                    Q = new nr(O, {
                        data: S,
                        origin: L
                    });
                return P && (Q.target = P, Q.srcElement = P, Q.currentTarget = P), Q
            }

            function lt(I) {
                var O = I.code,
                    L = I.reason,
                    S = I.type,
                    P = I.target,
                    Q = I.wasClean;
                Q || (Q = O === je.CLOSE_NORMAL || O === je.CLOSE_NO_STATUS);
                var ne = new yr(S, {
                    code: O,
                    reason: L,
                    wasClean: Q
                });
                return P && (ne.target = P, ne.srcElement = P, ne.currentTarget = P), ne
            }

            function xt(I, O, L) {
                I.readyState = Y.CLOSING;
                var S = Fe.serverLookup(I.url),
                    P = lt({
                        type: "close",
                        target: I.target,
                        code: O,
                        reason: L
                    }),
                    Q = lt({
                        type: "server::close",
                        target: I,
                        code: O,
                        reason: L
                    });
                Ie(function() {
                    Fe.removeWebSocket(I, I.url), I.readyState = Y.CLOSED, I.dispatchEvent(P), I.dispatchEvent(Q), S && S.dispatchEvent(P, S)
                }, I)
            }

            function Ht(I, O, L) {
                I.readyState = Y.CLOSING;
                var S = Fe.serverLookup(I.url),
                    P = lt({
                        type: "close",
                        target: I.target,
                        code: O,
                        reason: L,
                        wasClean: !1
                    }),
                    Q = lt({
                        type: "server::close",
                        target: I,
                        code: O,
                        reason: L,
                        wasClean: !1
                    }),
                    ne = ot({
                        type: "error",
                        target: I.target
                    });
                Ie(function() {
                    Fe.removeWebSocket(I, I.url), I.readyState = Y.CLOSED, I.dispatchEvent(ne), I.dispatchEvent(P), I.dispatchEvent(Q), S && S.dispatchEvent(P, S)
                }, I)
            }

            function Mt(I) {
                return Object.prototype.toString.call(I) !== "[object Blob]" && !(I instanceof ArrayBuffer) && (I = String(I)), I
            }
            var m = new WeakMap;

            function p(I) {
                if (m.has(I)) return m.get(I);
                var O = new Proxy(I, {
                    get: function(S, P) {
                        return P === "close" ? function(ne) {
                            ne === void 0 && (ne = {});
                            var _e = ne.code || je.CLOSE_NORMAL,
                                Te = ne.reason || "";
                            xt(O, _e, Te)
                        } : P === "send" ? function(ne) {
                            ne = Mt(ne), I.dispatchEvent(St({
                                type: "message",
                                data: ne,
                                origin: this.url,
                                target: I
                            }))
                        } : P === "on" ? function(ne, _e) {
                            I.addEventListener("server::" + ne, _e)
                        } : P === "target" ? I : S[P]
                    }
                });
                return m.set(I, O), O
            }

            function A(I) {
                var O = encodeURIComponent(I).match(/%[89ABab]/g);
                return I.length + (O ? O.length : 0)
            }

            function M(I) {
                var O = new fe(I),
                    L = O.pathname,
                    S = O.protocol,
                    P = O.hash;
                if (!I) throw new TypeError(tt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (L || (O.pathname = "/"), S === "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL '" + O.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (P !== "") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + P + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return O.toString()
            }

            function U(I) {
                if (I === void 0 && (I = []), !Array.isArray(I) && typeof I != "string") throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The subprotocol '" + I.toString() + "' is invalid.");
                typeof I == "string" && (I = [I]);
                var O = I.map(function(S) {
                        return {
                            count: 1,
                            protocol: S
                        }
                    }).reduce(function(S, P) {
                        return S[P.protocol] = (S[P.protocol] || 0) + P.count, S
                    }, {}),
                    L = Object.keys(O).filter(function(S) {
                        return O[S] > 1
                    });
                if (L.length > 0) throw new SyntaxError(tt.CONSTRUCTOR_ERROR + " The subprotocol '" + L[0] + "' is duplicated.");
                return I
            }
            var Y = function(I) {
                function O(S, P) {
                    I.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = M(S), P = U(P), this.protocol = P[0] || "", this.binaryType = "blob", this.readyState = O.CONNECTING;
                    var Q = p(this),
                        ne = Fe.attachWebSocket(Q, this.url);
                    Ie(function() {
                        if (ne)
                            if (ne.options.verifyClient && typeof ne.options.verifyClient == "function" && !ne.options.verifyClient()) this.readyState = O.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Fe.removeWebSocket(Q, this.url), this.dispatchEvent(ot({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(lt({
                                type: "close",
                                target: this,
                                code: je.CLOSE_NORMAL
                            }));
                            else {
                                if (ne.options.selectProtocol && typeof ne.options.selectProtocol == "function") {
                                    var Te = ne.options.selectProtocol(P),
                                        ft = Te !== "",
                                        ir = P.indexOf(Te) !== -1;
                                    if (ft && !ir) {
                                        this.readyState = O.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Fe.removeWebSocket(Q, this.url), this.dispatchEvent(ot({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(lt({
                                            type: "close",
                                            target: this,
                                            code: je.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Te
                                }
                                this.readyState = O.OPEN, this.dispatchEvent(ot({
                                    type: "open",
                                    target: this
                                })), ne.dispatchEvent(ot({
                                    type: "connection"
                                }), Q)
                            }
                        else this.readyState = O.CLOSED, this.dispatchEvent(ot({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), F("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O;
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
                }, O.prototype.send = function(P) {
                    var Q = this;
                    if (this.readyState === O.CLOSING || this.readyState === O.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = St({
                            type: "server::message",
                            origin: this.url,
                            data: Mt(P)
                        }),
                        _e = Fe.serverLookup(this.url);
                    _e && Ie(function() {
                        Q.dispatchEvent(ne, P)
                    }, _e)
                }, O.prototype.close = function(P, Q) {
                    if (P !== void 0 && (typeof P != "number" || P !== 1e3 && (P < 3e3 || P > 4999))) throw new TypeError(tt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + P + " is neither.");
                    if (Q !== void 0) {
                        var ne = A(Q);
                        if (ne > 123) throw new SyntaxError(tt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === O.CLOSING || this.readyState === O.CLOSED)) {
                        var _e = p(this);
                        this.readyState === O.CONNECTING ? Ht(_e, P || je.CLOSE_ABNORMAL, Q) : xt(_e, P || je.CLOSE_NO_STATUS, Q)
                    }
                }, Object.defineProperties(O.prototype, L), O
            }(Ee);
            Y.CONNECTING = 0, Y.prototype.CONNECTING = Y.CONNECTING, Y.OPEN = 1, Y.prototype.OPEN = Y.OPEN, Y.CLOSING = 2, Y.prototype.CLOSING = Y.CLOSING, Y.CLOSED = 3, Y.prototype.CLOSED = Y.CLOSED;
            var ce = function(I) {
                return I.reduce(function(O, L) {
                    return O.indexOf(L) > -1 ? O : O.concat(L)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof y8 == "function" && typeof Dt == "object" ? Dt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                N = function(I) {
                    function O(L, S) {
                        S === void 0 && (S = re), I.call(this);
                        var P = new fe(L);
                        P.pathname || (P.pathname = "/"), this.url = P.toString(), this.originalWebSocket = null;
                        var Q = Fe.attachServer(this, this.url);
                        if (!Q) throw this.dispatchEvent(ot({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, S), this.options.mock && this.mockWebsocket()
                    }
                    return I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O, O.prototype.mockWebsocket = function() {
                        var S = se();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = Y
                    }, O.prototype.restoreWebsocket = function() {
                        var S = se();
                        this.originalWebSocket !== null && (S.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, O.prototype.stop = function(S) {
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), Fe.removeServer(this.url), typeof S == "function" && S()
                    }, O.prototype.on = function(S, P) {
                        this.addEventListener(S, P)
                    }, O.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var P = S.code,
                            Q = S.reason,
                            ne = S.wasClean,
                            _e = Fe.websocketsLookup(this.url);
                        Fe.removeServer(this.url), _e.forEach(function(Te) {
                            Te.readyState = Y.CLOSED, Te.dispatchEvent(lt({
                                type: "close",
                                target: Te.target,
                                code: P || je.CLOSE_NORMAL,
                                reason: Q || "",
                                wasClean: ne
                            }))
                        }), this.dispatchEvent(lt({
                            type: "close"
                        }), this)
                    }, O.prototype.emit = function(S, P, Q) {
                        var ne = this;
                        Q === void 0 && (Q = {});
                        var _e = Q.websockets;
                        _e || (_e = Fe.websocketsLookup(this.url)), typeof Q != "object" || arguments.length > 3 ? (P = Array.prototype.slice.call(arguments, 1, arguments.length), P = P.map(function(Te) {
                            return Mt(Te)
                        })) : P = Mt(P), _e.forEach(function(Te) {
                            Array.isArray(P) ? Te.dispatchEvent.apply(Te, [St({
                                type: S,
                                data: P,
                                origin: ne.url,
                                target: Te.target
                            })].concat(P)) : Te.dispatchEvent(St({
                                type: S,
                                data: P,
                                origin: ne.url,
                                target: Te.target
                            }))
                        })
                    }, O.prototype.clients = function() {
                        return Fe.websocketsLookup(this.url)
                    }, O.prototype.to = function(S, P, Q) {
                        var ne = this;
                        Q === void 0 && (Q = []);
                        var _e = this,
                            Te = ce(Q.concat(Fe.websocketsLookup(this.url, S, P)));
                        return {
                            to: function(ft, ir) {
                                return ne.to.call(ne, ft, ir, Te)
                            },
                            emit: function(ir, xe) {
                                _e.emit(ir, xe, {
                                    websockets: Te
                                })
                            }
                        }
                    }, O.prototype.in = function() {
                        for (var S = [], P = arguments.length; P--;) S[P] = arguments[P];
                        return this.to.apply(null, S)
                    }, O.prototype.simulate = function(S) {
                        var P = Fe.websocketsLookup(this.url);
                        S === "error" && P.forEach(function(Q) {
                            Q.readyState = Y.CLOSED, Q.dispatchEvent(ot({
                                type: "error"
                            }))
                        })
                    }, O
                }(Ee);
            N.of = function(O) {
                return new N(O)
            };
            var W = function(I) {
                function O(S, P) {
                    var Q = this;
                    S === void 0 && (S = "socket.io"), P === void 0 && (P = ""), I.call(this), this.binaryType = "blob";
                    var ne = new fe(S);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = O.CONNECTING, this.protocol = "", this.target = this, typeof P == "string" || typeof P == "object" && P !== null ? this.protocol = P : Array.isArray(P) && P.length > 0 && (this.protocol = P[0]);
                    var _e = Fe.attachWebSocket(this, this.url);
                    Ie(function() {
                        _e ? (this.readyState = O.OPEN, _e.dispatchEvent(ot({
                            type: "connection"
                        }), _e, this), _e.dispatchEvent(ot({
                            type: "connect"
                        }), _e, this), this.dispatchEvent(ot({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = O.CLOSED, this.dispatchEvent(ot({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), F("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        Q.dispatchEvent(lt({
                            type: "disconnect",
                            target: Te.target,
                            code: Te.code
                        }))
                    })
                }
                I && (O.__proto__ = I), O.prototype = Object.create(I && I.prototype), O.prototype.constructor = O;
                var L = {
                    broadcast: {}
                };
                return O.prototype.close = function() {
                    if (this.readyState === O.OPEN) {
                        var P = Fe.serverLookup(this.url);
                        return Fe.removeWebSocket(this, this.url), this.readyState = O.CLOSED, this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), P && P.dispatchEvent(lt({
                            type: "disconnect",
                            target: this,
                            code: je.CLOSE_NORMAL
                        }), P), this
                    }
                }, O.prototype.disconnect = function() {
                    return this.close()
                }, O.prototype.emit = function(P) {
                    for (var Q = [], ne = arguments.length - 1; ne-- > 0;) Q[ne] = arguments[ne + 1];
                    if (this.readyState !== O.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var _e = St({
                            type: P,
                            origin: this.url,
                            data: Q
                        }),
                        Te = Fe.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(Q)), this
                }, O.prototype.send = function(P) {
                    return this.emit("message", P), this
                }, L.broadcast.get = function() {
                    if (this.readyState !== O.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        P = Fe.serverLookup(this.url);
                    if (!P) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ne, _e) {
                            return P.emit(ne, _e, {
                                websockets: Fe.websocketsLookup(S.url, null, S)
                            }), S
                        },
                        to: function(ne) {
                            return P.to(ne, S)
                        },
                        in: function(ne) {
                            return P.in(ne, S)
                        }
                    }
                }, O.prototype.on = function(P, Q) {
                    return this.addEventListener(P, Q), this
                }, O.prototype.off = function(P, Q) {
                    this.removeEventListener(P, Q)
                }, O.prototype.hasListeners = function(P) {
                    var Q = this.listeners[P];
                    return Array.isArray(Q) ? !!Q.length : !1
                }, O.prototype.join = function(P) {
                    Fe.addMembershipToRoom(this, P)
                }, O.prototype.leave = function(P) {
                    Fe.removeMembershipFromRoom(this, P)
                }, O.prototype.to = function(P) {
                    return this.broadcast.to(P)
                }, O.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, O.prototype.dispatchEvent = function(P) {
                    for (var Q = this, ne = [], _e = arguments.length - 1; _e-- > 0;) ne[_e] = arguments[_e + 1];
                    var Te = P.type,
                        ft = this.listeners[Te];
                    if (!Array.isArray(ft)) return !1;
                    ft.forEach(function(ir) {
                        ne.length > 0 ? ir.apply(Q, ne) : ir.call(Q, P.data ? P.data : P)
                    })
                }, Object.defineProperties(O.prototype, L), O
            }(Ee);
            W.CONNECTING = 0, W.OPEN = 1, W.CLOSING = 2, W.CLOSED = 3;
            var he = function(O, L) {
                return new W(O, L)
            };
            he.connect = function(O, L) {
                return he(O, L)
            };
            var pe = N,
                $e = Y,
                De = he;
            r.Server = pe, r.WebSocket = $e, r.SocketIO = De, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Uy, Uy.exports);
    var b1 = {
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
                    T = h.y - y;
                if (b !== 0 || T !== 0) {
                    var R = ((u.x - g) * b + (u.y - y) * T) / (b * b + T * T);
                    R > 1 ? (g = h.x, y = h.y) : R > 0 && (g += b * R, y += T * R)
                }
                return b = u.x - g, T = u.y - y, b * b + T * T
            }

            function n(u, f) {
                for (var h = u[0], g = [h], y, b = 1, T = u.length; b < T; b++) y = u[b], t(y, h) > f && (g.push(y), h = y);
                return h !== y && g.push(y), g
            }

            function s(u, f, h, g, y) {
                for (var b = g, T, R = f + 1; R < h; R++) {
                    var D = r(u[R], u[f], u[h]);
                    D > b && (T = R, b = D)
                }
                b > g && (T - f > 1 && s(u, f, T, g, y), y.push(u[T]), h - T > 1 && s(u, T, h, g, y))
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
    })(b1);
    const T1 = b1.exports;
    class _8 {
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
                points: T1(this.points, .5).map(r => ({
                    x: vr.toPrecision(r.x, this.precision),
                    y: vr.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class E8 {
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
                n = T1(this.currentLine.points);
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
    class b8 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new E8(t, this.width, this.height, r)
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
            const n = Cd(r.room.appTag),
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
                const T = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(g)
                })).text();
                Nd("[Feedback] sendToSlack", T)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    class O1 {
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
    const T8 = {
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
        O8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        S8 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        A8 = "LOADING",
        I8 = {
            JOINED_COUNT: "{count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "1 player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        w8 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        C8 = {
            AND: "AND",
            OR: "OR"
        },
        N8 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        $8 = {
            NAME: "AUDIENCE"
        },
        R8 = {
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
        L8 = {
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
        P8 = {
            ACTION: T8,
            ALT: O8,
            ERROR: S8,
            LOADING: A8,
            LOBBY: I8,
            POST_GAME: w8,
            SEPARATOR: C8,
            TUTORIAL: N8,
            AUDIENCE: $8,
            UGC: R8,
            TOAST: L8
        },
        k8 = {
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
        D8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        x8 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        M8 = "CHARGEMENT",
        F8 = {
            JOINED_COUNT: "1\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "1\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        U8 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        B8 = {
            AND: "ET",
            OR: "OU"
        },
        G8 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        j8 = {
            NAME: "SPECTATEURS"
        },
        W8 = {
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
        V8 = {
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
        H8 = {
            ACTION: k8,
            ALT: D8,
            ERROR: x8,
            LOADING: M8,
            LOBBY: F8,
            POST_GAME: U8,
            SEPARATOR: B8,
            TUTORIAL: G8,
            AUDIENCE: j8,
            UGC: W8,
            TOAST: V8
        },
        K8 = {
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
        Y8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        q8 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        z8 = "CARICAMENTO",
        X8 = {
            JOINED_COUNT: "Sta partecipando 1 giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "Manca 1 giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        J8 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        Z8 = {
            AND: "E",
            OR: "O"
        },
        Q8 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        e5 = {
            NAME: "PUBBLICO"
        },
        t5 = {
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
        r5 = {
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
        n5 = {
            ACTION: K8,
            ALT: Y8,
            ERROR: q8,
            LOADING: z8,
            LOBBY: X8,
            POST_GAME: J8,
            SEPARATOR: Z8,
            TUTORIAL: Q8,
            AUDIENCE: e5,
            UGC: t5,
            TOAST: r5
        },
        i5 = {
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
        s5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        a5 = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        o5 = "LADE",
        l5 = {
            JOINED_COUNT: "{count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "{count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        c5 = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        u5 = {
            AND: "UND",
            OR: "ODER"
        },
        f5 = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        d5 = {
            NAME: "PUBLIKUM"
        },
        h5 = {
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
        p5 = {
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
        g5 = {
            ACTION: i5,
            ALT: s5,
            ERROR: a5,
            LOADING: o5,
            LOBBY: l5,
            POST_GAME: c5,
            SEPARATOR: u5,
            TUTORIAL: f5,
            AUDIENCE: d5,
            UGC: h5,
            TOAST: p5
        },
        m5 = {
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
        v5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        y5 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        _5 = "CARGANDO",
        E5 = {
            JOINED_COUNT: "Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        b5 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        T5 = {
            AND: "Y",
            OR: "O"
        },
        O5 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        S5 = {
            NAME: "P\xDABLICO"
        },
        A5 = {
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
        I5 = {
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
        w5 = {
            ACTION: m5,
            ALT: v5,
            ERROR: y5,
            LOADING: _5,
            LOBBY: E5,
            POST_GAME: b5,
            SEPARATOR: T5,
            TUTORIAL: O5,
            AUDIENCE: S5,
            UGC: A5,
            TOAST: I5
        },
        C5 = {
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
        N5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        $5 = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        R5 = "CARGANDO",
        L5 = {
            JOINED_COUNT: "Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        P5 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        k5 = {
            AND: "Y",
            OR: "O"
        },
        D5 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        x5 = {
            NAME: "P\xDABLICO"
        },
        M5 = {
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
        F5 = {
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
        U5 = {
            ACTION: C5,
            ALT: N5,
            ERROR: $5,
            LOADING: R5,
            LOBBY: L5,
            POST_GAME: P5,
            SEPARATOR: k5,
            TUTORIAL: D5,
            AUDIENCE: x5,
            UGC: M5,
            TOAST: F5
        },
        B5 = {
            en: P8,
            fr: H8,
            it: n5,
            de: g5,
            es: w5,
            "es-XL": U5
        },
        G5 = it({
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
                const e = os();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = Bn(new _8(e, this.player.doodle, this.canvasOptions))
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
        j5 = {
            class: "doodle"
        },
        W5 = {
            ref: "canvas"
        },
        V5 = ["disabled"],
        H5 = ["disabled"];

    function K5(e, t, r, n, s, o) {
        const l = Rt("pointerbox-translate"),
            u = Rt("pointerbox"),
            f = Rt("t");
        return V(), z("div", j5, [Ce((V(), z("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ce(Z("canvas", W5, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Oe("", !0) : Ce((V(), z("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Zr((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, V5)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Oe("", !0) : Ce((V(), z("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Zr((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, H5)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const Y5 = ze(G5, [
        ["render", K5]
    ]);
    var $d = {
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
                b = 2,
                T = 4,
                R = 1,
                D = 2,
                B = 1,
                w = 2,
                H = 4,
                q = 8,
                j = 16,
                G = 32,
                J = 64,
                oe = 128,
                le = 256,
                ue = 512,
                Ne = 30,
                we = "...",
                fe = 800,
                Ie = 16,
                F = 1,
                ie = 2,
                de = 3,
                Ee = 1 / 0,
                ve = 9007199254740991,
                Se = 17976931348623157e292,
                Fe = 0 / 0,
                je = 4294967295,
                tt = je - 1,
                Ct = je >>> 1,
                wr = [
                    ["ary", oe],
                    ["bind", B],
                    ["bindKey", w],
                    ["curry", q],
                    ["curryRight", j],
                    ["flip", ue],
                    ["partial", G],
                    ["partialRight", J],
                    ["rearg", le]
                ],
                nr = "[object Arguments]",
                yr = "[object Array]",
                ot = "[object AsyncFunction]",
                St = "[object Boolean]",
                lt = "[object Date]",
                xt = "[object DOMException]",
                Ht = "[object Error]",
                Mt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                A = "[object Number]",
                M = "[object Null]",
                U = "[object Object]",
                Y = "[object Promise]",
                ce = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                N = "[object String]",
                W = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                $e = "[object WeakSet]",
                De = "[object ArrayBuffer]",
                I = "[object DataView]",
                O = "[object Float32Array]",
                L = "[object Float64Array]",
                S = "[object Int8Array]",
                P = "[object Int16Array]",
                Q = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ft = "[object Uint32Array]",
                ir = /\b__p \+= '';/g,
                xe = /\b(__p \+=) '' \+/g,
                pa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Up = /&(?:amp|lt|gt|quot|#39);/g,
                Bp = /[&<>"']/g,
                C0 = RegExp(Up.source),
                N0 = RegExp(Bp.source),
                $0 = /<%-([\s\S]+?)%>/g,
                R0 = /<%([\s\S]+?)%>/g,
                Gp = /<%=([\s\S]+?)%>/g,
                L0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                P0 = /^\w*$/,
                k0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Qc = /[\\^$.*+?()[\]{}|]/g,
                D0 = RegExp(Qc.source),
                eu = /^\s+/,
                x0 = /\s/,
                M0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                F0 = /\{\n\/\* \[wrapped with (.+)\] \*/,
                U0 = /,? & /,
                B0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                G0 = /[()=,{}\[\]\/\s]/,
                j0 = /\\(\\)?/g,
                W0 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                jp = /\w*$/,
                V0 = /^[-+]0x[0-9a-f]+$/i,
                H0 = /^0b[01]+$/i,
                K0 = /^\[object .+?Constructor\]$/,
                Y0 = /^0o[0-7]+$/i,
                q0 = /^(?:0|[1-9]\d*)$/,
                z0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                bo = /($^)/,
                X0 = /['\n\r\u2028\u2029\\]/g,
                To = "\\ud800-\\udfff",
                J0 = "\\u0300-\\u036f",
                Z0 = "\\ufe20-\\ufe2f",
                Q0 = "\\u20d0-\\u20ff",
                Wp = J0 + Z0 + Q0,
                Vp = "\\u2700-\\u27bf",
                Hp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                eS = "\\xac\\xb1\\xd7\\xf7",
                tS = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                rS = "\\u2000-\\u206f",
                nS = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Kp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Yp = "\\ufe0e\\ufe0f",
                qp = eS + tS + rS + nS,
                tu = "['\u2019]",
                iS = "[" + To + "]",
                zp = "[" + qp + "]",
                Oo = "[" + Wp + "]",
                Xp = "\\d+",
                sS = "[" + Vp + "]",
                Jp = "[" + Hp + "]",
                Zp = "[^" + To + qp + Xp + Vp + Hp + Kp + "]",
                ru = "\\ud83c[\\udffb-\\udfff]",
                aS = "(?:" + Oo + "|" + ru + ")",
                Qp = "[^" + To + "]",
                nu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                iu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                ds = "[" + Kp + "]",
                eg = "\\u200d",
                tg = "(?:" + Jp + "|" + Zp + ")",
                oS = "(?:" + ds + "|" + Zp + ")",
                rg = "(?:" + tu + "(?:d|ll|m|re|s|t|ve))?",
                ng = "(?:" + tu + "(?:D|LL|M|RE|S|T|VE))?",
                ig = aS + "?",
                sg = "[" + Yp + "]?",
                lS = "(?:" + eg + "(?:" + [Qp, nu, iu].join("|") + ")" + sg + ig + ")*",
                cS = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                uS = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                ag = sg + ig + lS,
                fS = "(?:" + [sS, nu, iu].join("|") + ")" + ag,
                dS = "(?:" + [Qp + Oo + "?", Oo, nu, iu, iS].join("|") + ")",
                hS = RegExp(tu, "g"),
                pS = RegExp(Oo, "g"),
                su = RegExp(ru + "(?=" + ru + ")|" + dS + ag, "g"),
                gS = RegExp([ds + "?" + Jp + "+" + rg + "(?=" + [zp, ds, "$"].join("|") + ")", oS + "+" + ng + "(?=" + [zp, ds + tg, "$"].join("|") + ")", ds + "?" + tg + "+" + rg, ds + "+" + ng, uS, cS, Xp, fS].join("|"), "g"),
                mS = RegExp("[" + eg + To + Wp + Yp + "]"),
                vS = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                yS = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                _S = -1,
                Tt = {};
            Tt[O] = Tt[L] = Tt[S] = Tt[P] = Tt[Q] = Tt[ne] = Tt[_e] = Tt[Te] = Tt[ft] = !0, Tt[nr] = Tt[yr] = Tt[De] = Tt[St] = Tt[I] = Tt[lt] = Tt[Ht] = Tt[Mt] = Tt[p] = Tt[A] = Tt[U] = Tt[se] = Tt[re] = Tt[N] = Tt[pe] = !1;
            var vt = {};
            vt[nr] = vt[yr] = vt[De] = vt[I] = vt[St] = vt[lt] = vt[O] = vt[L] = vt[S] = vt[P] = vt[Q] = vt[p] = vt[A] = vt[U] = vt[se] = vt[re] = vt[N] = vt[W] = vt[ne] = vt[_e] = vt[Te] = vt[ft] = !0, vt[Ht] = vt[Mt] = vt[pe] = !1;
            var ES = {
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
                bS = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                TS = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                OS = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                SS = parseFloat,
                AS = parseInt,
                og = typeof Dt == "object" && Dt && Dt.Object === Object && Dt,
                IS = typeof self == "object" && self && self.Object === Object && self,
                Xt = og || IS || Function("return this")(),
                au = t && !t.nodeType && t,
                Ii = au && !0 && e && !e.nodeType && e,
                lg = Ii && Ii.exports === au,
                ou = lg && og.process,
                Ur = function() {
                    try {
                        var k = Ii && Ii.require && Ii.require("util").types;
                        return k || ou && ou.binding && ou.binding("util")
                    } catch {}
                }(),
                cg = Ur && Ur.isArrayBuffer,
                ug = Ur && Ur.isDate,
                fg = Ur && Ur.isMap,
                dg = Ur && Ur.isRegExp,
                hg = Ur && Ur.isSet,
                pg = Ur && Ur.isTypedArray;

            function Cr(k, X, K) {
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

            function wS(k, X, K, be) {
                for (var Ue = -1, st = k == null ? 0 : k.length; ++Ue < st;) {
                    var Ut = k[Ue];
                    X(be, Ut, K(Ut), k)
                }
                return be
            }

            function Br(k, X) {
                for (var K = -1, be = k == null ? 0 : k.length; ++K < be && X(k[K], K, k) !== !1;);
                return k
            }

            function CS(k, X) {
                for (var K = k == null ? 0 : k.length; K-- && X(k[K], K, k) !== !1;);
                return k
            }

            function gg(k, X) {
                for (var K = -1, be = k == null ? 0 : k.length; ++K < be;)
                    if (!X(k[K], K, k)) return !1;
                return !0
            }

            function Wn(k, X) {
                for (var K = -1, be = k == null ? 0 : k.length, Ue = 0, st = []; ++K < be;) {
                    var Ut = k[K];
                    X(Ut, K, k) && (st[Ue++] = Ut)
                }
                return st
            }

            function So(k, X) {
                var K = k == null ? 0 : k.length;
                return !!K && hs(k, X, 0) > -1
            }

            function lu(k, X, K) {
                for (var be = -1, Ue = k == null ? 0 : k.length; ++be < Ue;)
                    if (K(X, k[be])) return !0;
                return !1
            }

            function At(k, X) {
                for (var K = -1, be = k == null ? 0 : k.length, Ue = Array(be); ++K < be;) Ue[K] = X(k[K], K, k);
                return Ue
            }

            function Vn(k, X) {
                for (var K = -1, be = X.length, Ue = k.length; ++K < be;) k[Ue + K] = X[K];
                return k
            }

            function cu(k, X, K, be) {
                var Ue = -1,
                    st = k == null ? 0 : k.length;
                for (be && st && (K = k[++Ue]); ++Ue < st;) K = X(K, k[Ue], Ue, k);
                return K
            }

            function NS(k, X, K, be) {
                var Ue = k == null ? 0 : k.length;
                for (be && Ue && (K = k[--Ue]); Ue--;) K = X(K, k[Ue], Ue, k);
                return K
            }

            function uu(k, X) {
                for (var K = -1, be = k == null ? 0 : k.length; ++K < be;)
                    if (X(k[K], K, k)) return !0;
                return !1
            }
            var $S = fu("length");

            function RS(k) {
                return k.split("")
            }

            function LS(k) {
                return k.match(B0) || []
            }

            function mg(k, X, K) {
                var be;
                return K(k, function(Ue, st, Ut) {
                    if (X(Ue, st, Ut)) return be = st, !1
                }), be
            }

            function Ao(k, X, K, be) {
                for (var Ue = k.length, st = K + (be ? 1 : -1); be ? st-- : ++st < Ue;)
                    if (X(k[st], st, k)) return st;
                return -1
            }

            function hs(k, X, K) {
                return X === X ? VS(k, X, K) : Ao(k, vg, K)
            }

            function PS(k, X, K, be) {
                for (var Ue = K - 1, st = k.length; ++Ue < st;)
                    if (be(k[Ue], X)) return Ue;
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

            function _g(k, X, K, be, Ue) {
                return Ue(k, function(st, Ut, pt) {
                    K = be ? (be = !1, st) : X(K, st, Ut, pt)
                }), K
            }

            function kS(k, X) {
                var K = k.length;
                for (k.sort(X); K--;) k[K] = k[K].value;
                return k
            }

            function hu(k, X) {
                for (var K, be = -1, Ue = k.length; ++be < Ue;) {
                    var st = X(k[be]);
                    st !== r && (K = K === r ? st : K + st)
                }
                return K
            }

            function pu(k, X) {
                for (var K = -1, be = Array(k); ++K < k;) be[K] = X(K);
                return be
            }

            function DS(k, X) {
                return At(X, function(K) {
                    return [K, k[K]]
                })
            }

            function Eg(k) {
                return k && k.slice(0, Sg(k) + 1).replace(eu, "")
            }

            function Nr(k) {
                return function(X) {
                    return k(X)
                }
            }

            function gu(k, X) {
                return At(X, function(K) {
                    return k[K]
                })
            }

            function ga(k, X) {
                return k.has(X)
            }

            function bg(k, X) {
                for (var K = -1, be = k.length; ++K < be && hs(X, k[K], 0) > -1;);
                return K
            }

            function Tg(k, X) {
                for (var K = k.length; K-- && hs(X, k[K], 0) > -1;);
                return K
            }

            function xS(k, X) {
                for (var K = k.length, be = 0; K--;) k[K] === X && ++be;
                return be
            }
            var MS = du(ES),
                FS = du(bS);

            function US(k) {
                return "\\" + OS[k]
            }

            function BS(k, X) {
                return k == null ? r : k[X]
            }

            function ps(k) {
                return mS.test(k)
            }

            function GS(k) {
                return vS.test(k)
            }

            function jS(k) {
                for (var X, K = []; !(X = k.next()).done;) K.push(X.value);
                return K
            }

            function mu(k) {
                var X = -1,
                    K = Array(k.size);
                return k.forEach(function(be, Ue) {
                    K[++X] = [Ue, be]
                }), K
            }

            function Og(k, X) {
                return function(K) {
                    return k(X(K))
                }
            }

            function Hn(k, X) {
                for (var K = -1, be = k.length, Ue = 0, st = []; ++K < be;) {
                    var Ut = k[K];
                    (Ut === X || Ut === g) && (k[K] = g, st[Ue++] = K)
                }
                return st
            }

            function Io(k) {
                var X = -1,
                    K = Array(k.size);
                return k.forEach(function(be) {
                    K[++X] = be
                }), K
            }

            function WS(k) {
                var X = -1,
                    K = Array(k.size);
                return k.forEach(function(be) {
                    K[++X] = [be, be]
                }), K
            }

            function VS(k, X, K) {
                for (var be = K - 1, Ue = k.length; ++be < Ue;)
                    if (k[be] === X) return be;
                return -1
            }

            function HS(k, X, K) {
                for (var be = K + 1; be--;)
                    if (k[be] === X) return be;
                return be
            }

            function gs(k) {
                return ps(k) ? YS(k) : $S(k)
            }

            function en(k) {
                return ps(k) ? qS(k) : RS(k)
            }

            function Sg(k) {
                for (var X = k.length; X-- && x0.test(k.charAt(X)););
                return X
            }
            var KS = du(TS);

            function YS(k) {
                for (var X = su.lastIndex = 0; su.test(k);) ++X;
                return X
            }

            function qS(k) {
                return k.match(su) || []
            }

            function zS(k) {
                return k.match(gS) || []
            }
            var XS = function k(X) {
                    X = X == null ? Xt : ms.defaults(Xt.Object(), X, ms.pick(Xt, yS));
                    var K = X.Array,
                        be = X.Date,
                        Ue = X.Error,
                        st = X.Function,
                        Ut = X.Math,
                        pt = X.Object,
                        vu = X.RegExp,
                        JS = X.String,
                        Gr = X.TypeError,
                        wo = K.prototype,
                        ZS = st.prototype,
                        vs = pt.prototype,
                        Co = X["__core-js_shared__"],
                        No = ZS.toString,
                        dt = vs.hasOwnProperty,
                        QS = 0,
                        Ag = function() {
                            var i = /[^.]+$/.exec(Co && Co.keys && Co.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        $o = vs.toString,
                        eA = No.call(pt),
                        tA = Xt._,
                        rA = vu("^" + No.call(dt).replace(Qc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Ro = lg ? X.Buffer : r,
                        Kn = X.Symbol,
                        Lo = X.Uint8Array,
                        Ig = Ro ? Ro.allocUnsafe : r,
                        Po = Og(pt.getPrototypeOf, pt),
                        wg = pt.create,
                        Cg = vs.propertyIsEnumerable,
                        ko = wo.splice,
                        Ng = Kn ? Kn.isConcatSpreadable : r,
                        ma = Kn ? Kn.iterator : r,
                        wi = Kn ? Kn.toStringTag : r,
                        Do = function() {
                            try {
                                var i = Li(pt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        nA = X.clearTimeout !== Xt.clearTimeout && X.clearTimeout,
                        iA = be && be.now !== Xt.Date.now && be.now,
                        sA = X.setTimeout !== Xt.setTimeout && X.setTimeout,
                        xo = Ut.ceil,
                        Mo = Ut.floor,
                        yu = pt.getOwnPropertySymbols,
                        aA = Ro ? Ro.isBuffer : r,
                        $g = X.isFinite,
                        oA = wo.join,
                        lA = Og(pt.keys, pt),
                        Bt = Ut.max,
                        sr = Ut.min,
                        cA = be.now,
                        uA = X.parseInt,
                        Rg = Ut.random,
                        fA = wo.reverse,
                        _u = Li(X, "DataView"),
                        va = Li(X, "Map"),
                        Eu = Li(X, "Promise"),
                        ys = Li(X, "Set"),
                        ya = Li(X, "WeakMap"),
                        _a = Li(pt, "create"),
                        Fo = ya && new ya,
                        _s = {},
                        dA = Pi(_u),
                        hA = Pi(va),
                        pA = Pi(Eu),
                        gA = Pi(ys),
                        mA = Pi(ya),
                        Uo = Kn ? Kn.prototype : r,
                        Ea = Uo ? Uo.valueOf : r,
                        Lg = Uo ? Uo.toString : r;

                    function _(i) {
                        if (Nt(i) && !Ge(i) && !(i instanceof qe)) {
                            if (i instanceof jr) return i;
                            if (dt.call(i, "__wrapped__")) return Pm(i)
                        }
                        return new jr(i)
                    }
                    var Es = function() {
                        function i() {}
                        return function(a) {
                            if (!wt(a)) return {};
                            if (wg) return wg(a);
                            i.prototype = a;
                            var c = new i;
                            return i.prototype = r, c
                        }
                    }();

                    function Bo() {}

                    function jr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: $0,
                        evaluate: R0,
                        interpolate: Gp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = Bo.prototype, _.prototype.constructor = _, jr.prototype = Es(Bo.prototype), jr.prototype.constructor = jr;

                    function qe(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = []
                    }

                    function vA() {
                        var i = new qe(this.__wrapped__);
                        return i.__actions__ = _r(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = _r(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = _r(this.__views__), i
                    }

                    function yA() {
                        if (this.__filtered__) {
                            var i = new qe(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function _A() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            c = Ge(i),
                            d = a < 0,
                            v = c ? i.length : 0,
                            E = RI(0, v, this.__views__),
                            C = E.start,
                            $ = E.end,
                            x = $ - C,
                            ee = d ? $ : C - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            Ae = sr(x, this.__takeCount__);
                        if (!c || !d && v == x && Ae == x) return rm(i, this.__actions__);
                        var Le = [];
                        e: for (; x-- && me < Ae;) {
                            ee += a;
                            for (var He = -1, Pe = i[ee]; ++He < ae;) {
                                var Ye = te[He],
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
                    qe.prototype = Es(Bo.prototype), qe.prototype.constructor = qe;

                    function Ci(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function EA() {
                        this.__data__ = _a ? _a(null) : {}, this.size = 0
                    }

                    function bA(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function TA(i) {
                        var a = this.__data__;
                        if (_a) {
                            var c = a[i];
                            return c === f ? r : c
                        }
                        return dt.call(a, i) ? a[i] : r
                    }

                    function OA(i) {
                        var a = this.__data__;
                        return _a ? a[i] !== r : dt.call(a, i)
                    }

                    function SA(i, a) {
                        var c = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, c[i] = _a && a === r ? f : a, this
                    }
                    Ci.prototype.clear = EA, Ci.prototype.delete = bA, Ci.prototype.get = TA, Ci.prototype.has = OA, Ci.prototype.set = SA;

                    function In(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function AA() {
                        this.__data__ = [], this.size = 0
                    }

                    function IA(i) {
                        var a = this.__data__,
                            c = Go(a, i);
                        if (c < 0) return !1;
                        var d = a.length - 1;
                        return c == d ? a.pop() : ko.call(a, c, 1), --this.size, !0
                    }

                    function wA(i) {
                        var a = this.__data__,
                            c = Go(a, i);
                        return c < 0 ? r : a[c][1]
                    }

                    function CA(i) {
                        return Go(this.__data__, i) > -1
                    }

                    function NA(i, a) {
                        var c = this.__data__,
                            d = Go(c, i);
                        return d < 0 ? (++this.size, c.push([i, a])) : c[d][1] = a, this
                    }
                    In.prototype.clear = AA, In.prototype.delete = IA, In.prototype.get = wA, In.prototype.has = CA, In.prototype.set = NA;

                    function wn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function $A() {
                        this.size = 0, this.__data__ = {
                            hash: new Ci,
                            map: new(va || In),
                            string: new Ci
                        }
                    }

                    function RA(i) {
                        var a = Qo(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function LA(i) {
                        return Qo(this, i).get(i)
                    }

                    function PA(i) {
                        return Qo(this, i).has(i)
                    }

                    function kA(i, a) {
                        var c = Qo(this, i),
                            d = c.size;
                        return c.set(i, a), this.size += c.size == d ? 0 : 1, this
                    }
                    wn.prototype.clear = $A, wn.prototype.delete = RA, wn.prototype.get = LA, wn.prototype.has = PA, wn.prototype.set = kA;

                    function Ni(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.__data__ = new wn; ++a < c;) this.add(i[a])
                    }

                    function DA(i) {
                        return this.__data__.set(i, f), this
                    }

                    function xA(i) {
                        return this.__data__.has(i)
                    }
                    Ni.prototype.add = Ni.prototype.push = DA, Ni.prototype.has = xA;

                    function tn(i) {
                        var a = this.__data__ = new In(i);
                        this.size = a.size
                    }

                    function MA() {
                        this.__data__ = new In, this.size = 0
                    }

                    function FA(i) {
                        var a = this.__data__,
                            c = a.delete(i);
                        return this.size = a.size, c
                    }

                    function UA(i) {
                        return this.__data__.get(i)
                    }

                    function BA(i) {
                        return this.__data__.has(i)
                    }

                    function GA(i, a) {
                        var c = this.__data__;
                        if (c instanceof In) {
                            var d = c.__data__;
                            if (!va || d.length < s - 1) return d.push([i, a]), this.size = ++c.size, this;
                            c = this.__data__ = new wn(d)
                        }
                        return c.set(i, a), this.size = c.size, this
                    }
                    tn.prototype.clear = MA, tn.prototype.delete = FA, tn.prototype.get = UA, tn.prototype.has = BA, tn.prototype.set = GA;

                    function Pg(i, a) {
                        var c = Ge(i),
                            d = !c && ki(i),
                            v = !c && !d && Jn(i),
                            E = !c && !d && !v && Ss(i),
                            C = c || d || v || E,
                            $ = C ? pu(i.length, JS) : [],
                            x = $.length;
                        for (var ee in i)(a || dt.call(i, ee)) && !(C && (ee == "length" || v && (ee == "offset" || ee == "parent") || E && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Rn(ee, x))) && $.push(ee);
                        return $
                    }

                    function kg(i) {
                        var a = i.length;
                        return a ? i[Ru(0, a - 1)] : r
                    }

                    function jA(i, a) {
                        return el(_r(i), $i(a, 0, i.length))
                    }

                    function WA(i) {
                        return el(_r(i))
                    }

                    function bu(i, a, c) {
                        (c !== r && !rn(i[a], c) || c === r && !(a in i)) && Cn(i, a, c)
                    }

                    function ba(i, a, c) {
                        var d = i[a];
                        (!(dt.call(i, a) && rn(d, c)) || c === r && !(a in i)) && Cn(i, a, c)
                    }

                    function Go(i, a) {
                        for (var c = i.length; c--;)
                            if (rn(i[c][0], a)) return c;
                        return -1
                    }

                    function VA(i, a, c, d) {
                        return Yn(i, function(v, E, C) {
                            a(d, v, c(v), C)
                        }), d
                    }

                    function Dg(i, a) {
                        return i && gn(a, Kt(a), i)
                    }

                    function HA(i, a) {
                        return i && gn(a, br(a), i)
                    }

                    function Cn(i, a, c) {
                        a == "__proto__" && Do ? Do(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: c,
                            writable: !0
                        }) : i[a] = c
                    }

                    function Tu(i, a) {
                        for (var c = -1, d = a.length, v = K(d), E = i == null; ++c < d;) v[c] = E ? r : rf(i, a[c]);
                        return v
                    }

                    function $i(i, a, c) {
                        return i === i && (c !== r && (i = i <= c ? i : c), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Wr(i, a, c, d, v, E) {
                        var C, $ = a & y,
                            x = a & b,
                            ee = a & T;
                        if (c && (C = v ? c(i, d, v, E) : c(i)), C !== r) return C;
                        if (!wt(i)) return i;
                        var te = Ge(i);
                        if (te) {
                            if (C = PI(i), !$) return _r(i, C)
                        } else {
                            var ae = ar(i),
                                me = ae == Mt || ae == m;
                            if (Jn(i)) return sm(i, $);
                            if (ae == U || ae == nr || me && !v) {
                                if (C = x || me ? {} : Sm(i), !$) return x ? TI(i, HA(C, i)) : bI(i, Dg(C, i))
                            } else {
                                if (!vt[ae]) return v ? i : {};
                                C = kI(i, ae, $)
                            }
                        }
                        E || (E = new tn);
                        var Ae = E.get(i);
                        if (Ae) return Ae;
                        E.set(i, C), Qm(i) ? i.forEach(function(Pe) {
                            C.add(Wr(Pe, a, c, Pe, i, E))
                        }) : Jm(i) && i.forEach(function(Pe, Ye) {
                            C.set(Ye, Wr(Pe, a, c, Ye, i, E))
                        });
                        var Le = ee ? x ? ju : Gu : x ? br : Kt,
                            He = te ? r : Le(i);
                        return Br(He || i, function(Pe, Ye) {
                            He && (Ye = Pe, Pe = i[Ye]), ba(C, Ye, Wr(Pe, a, c, Ye, i, E))
                        }), C
                    }

                    function KA(i) {
                        var a = Kt(i);
                        return function(c) {
                            return xg(c, i, a)
                        }
                    }

                    function xg(i, a, c) {
                        var d = c.length;
                        if (i == null) return !d;
                        for (i = pt(i); d--;) {
                            var v = c[d],
                                E = a[v],
                                C = i[v];
                            if (C === r && !(v in i) || !E(C)) return !1
                        }
                        return !0
                    }

                    function Mg(i, a, c) {
                        if (typeof i != "function") throw new Gr(l);
                        return Ca(function() {
                            i.apply(r, c)
                        }, a)
                    }

                    function Ta(i, a, c, d) {
                        var v = -1,
                            E = So,
                            C = !0,
                            $ = i.length,
                            x = [],
                            ee = a.length;
                        if (!$) return x;
                        c && (a = At(a, Nr(c))), d ? (E = lu, C = !1) : a.length >= s && (E = ga, C = !1, a = new Ni(a));
                        e: for (; ++v < $;) {
                            var te = i[v],
                                ae = c == null ? te : c(te);
                            if (te = d || te !== 0 ? te : 0, C && ae === ae) {
                                for (var me = ee; me--;)
                                    if (a[me] === ae) continue e;
                                x.push(te)
                            } else E(a, ae, d) || x.push(te)
                        }
                        return x
                    }
                    var Yn = um(pn),
                        Fg = um(Su, !0);

                    function YA(i, a) {
                        var c = !0;
                        return Yn(i, function(d, v, E) {
                            return c = !!a(d, v, E), c
                        }), c
                    }

                    function jo(i, a, c) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var E = i[d],
                                C = a(E);
                            if (C != null && ($ === r ? C === C && !Rr(C) : c(C, $))) var $ = C,
                                x = E
                        }
                        return x
                    }

                    function qA(i, a, c, d) {
                        var v = i.length;
                        for (c = We(c), c < 0 && (c = -c > v ? 0 : v + c), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = c > d ? 0 : tv(d); c < d;) i[c++] = a;
                        return i
                    }

                    function Ug(i, a) {
                        var c = [];
                        return Yn(i, function(d, v, E) {
                            a(d, v, E) && c.push(d)
                        }), c
                    }

                    function Jt(i, a, c, d, v) {
                        var E = -1,
                            C = i.length;
                        for (c || (c = xI), v || (v = []); ++E < C;) {
                            var $ = i[E];
                            a > 0 && c($) ? a > 1 ? Jt($, a - 1, c, d, v) : Vn(v, $) : d || (v[v.length] = $)
                        }
                        return v
                    }
                    var Ou = fm(),
                        Bg = fm(!0);

                    function pn(i, a) {
                        return i && Ou(i, a, Kt)
                    }

                    function Su(i, a) {
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

                    function Gg(i, a, c) {
                        var d = a(i);
                        return Ge(i) ? d : Vn(d, c(i))
                    }

                    function dr(i) {
                        return i == null ? i === r ? he : M : wi && wi in pt(i) ? $I(i) : WI(i)
                    }

                    function Au(i, a) {
                        return i > a
                    }

                    function zA(i, a) {
                        return i != null && dt.call(i, a)
                    }

                    function XA(i, a) {
                        return i != null && a in pt(i)
                    }

                    function JA(i, a, c) {
                        return i >= sr(a, c) && i < Bt(a, c)
                    }

                    function Iu(i, a, c) {
                        for (var d = c ? lu : So, v = i[0].length, E = i.length, C = E, $ = K(E), x = 1 / 0, ee = []; C--;) {
                            var te = i[C];
                            C && a && (te = At(te, Nr(a))), x = sr(te.length, x), $[C] = !c && (a || v >= 120 && te.length >= 120) ? new Ni(C && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = $[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var Ae = te[ae],
                                Le = a ? a(Ae) : Ae;
                            if (Ae = c || Ae !== 0 ? Ae : 0, !(me ? ga(me, Le) : d(ee, Le, c))) {
                                for (C = E; --C;) {
                                    var He = $[C];
                                    if (!(He ? ga(He, Le) : d(i[C], Le, c))) continue e
                                }
                                me && me.push(Le), ee.push(Ae)
                            }
                        }
                        return ee
                    }

                    function ZA(i, a, c, d) {
                        return pn(i, function(v, E, C) {
                            a(d, c(v), E, C)
                        }), d
                    }

                    function Oa(i, a, c) {
                        a = zn(a, i), i = Cm(i, a);
                        var d = i == null ? i : i[mn(Hr(a))];
                        return d == null ? r : Cr(d, i, c)
                    }

                    function jg(i) {
                        return Nt(i) && dr(i) == nr
                    }

                    function QA(i) {
                        return Nt(i) && dr(i) == De
                    }

                    function eI(i) {
                        return Nt(i) && dr(i) == lt
                    }

                    function Sa(i, a, c, d, v) {
                        return i === a ? !0 : i == null || a == null || !Nt(i) && !Nt(a) ? i !== i && a !== a : tI(i, a, c, d, Sa, v)
                    }

                    function tI(i, a, c, d, v, E) {
                        var C = Ge(i),
                            $ = Ge(a),
                            x = C ? yr : ar(i),
                            ee = $ ? yr : ar(a);
                        x = x == nr ? U : x, ee = ee == nr ? U : ee;
                        var te = x == U,
                            ae = ee == U,
                            me = x == ee;
                        if (me && Jn(i)) {
                            if (!Jn(a)) return !1;
                            C = !0, te = !1
                        }
                        if (me && !te) return E || (E = new tn), C || Ss(i) ? bm(i, a, c, d, v, E) : CI(i, a, x, c, d, v, E);
                        if (!(c & R)) {
                            var Ae = te && dt.call(i, "__wrapped__"),
                                Le = ae && dt.call(a, "__wrapped__");
                            if (Ae || Le) {
                                var He = Ae ? i.value() : i,
                                    Pe = Le ? a.value() : a;
                                return E || (E = new tn), v(He, Pe, c, d, E)
                            }
                        }
                        return me ? (E || (E = new tn), NI(i, a, c, d, v, E)) : !1
                    }

                    function rI(i) {
                        return Nt(i) && ar(i) == p
                    }

                    function wu(i, a, c, d) {
                        var v = c.length,
                            E = v,
                            C = !d;
                        if (i == null) return !E;
                        for (i = pt(i); v--;) {
                            var $ = c[v];
                            if (C && $[2] ? $[1] !== i[$[0]] : !($[0] in i)) return !1
                        }
                        for (; ++v < E;) {
                            $ = c[v];
                            var x = $[0],
                                ee = i[x],
                                te = $[1];
                            if (C && $[2]) {
                                if (ee === r && !(x in i)) return !1
                            } else {
                                var ae = new tn;
                                if (d) var me = d(ee, te, x, i, a, ae);
                                if (!(me === r ? Sa(te, ee, R | D, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Wg(i) {
                        if (!wt(i) || FI(i)) return !1;
                        var a = Ln(i) ? rA : K0;
                        return a.test(Pi(i))
                    }

                    function nI(i) {
                        return Nt(i) && dr(i) == se
                    }

                    function iI(i) {
                        return Nt(i) && ar(i) == re
                    }

                    function sI(i) {
                        return Nt(i) && al(i.length) && !!Tt[dr(i)]
                    }

                    function Vg(i) {
                        return typeof i == "function" ? i : i == null ? Tr : typeof i == "object" ? Ge(i) ? Yg(i[0], i[1]) : Kg(i) : dv(i)
                    }

                    function Cu(i) {
                        if (!wa(i)) return lA(i);
                        var a = [];
                        for (var c in pt(i)) dt.call(i, c) && c != "constructor" && a.push(c);
                        return a
                    }

                    function aI(i) {
                        if (!wt(i)) return jI(i);
                        var a = wa(i),
                            c = [];
                        for (var d in i) d == "constructor" && (a || !dt.call(i, d)) || c.push(d);
                        return c
                    }

                    function Nu(i, a) {
                        return i < a
                    }

                    function Hg(i, a) {
                        var c = -1,
                            d = Er(i) ? K(i.length) : [];
                        return Yn(i, function(v, E, C) {
                            d[++c] = a(v, E, C)
                        }), d
                    }

                    function Kg(i) {
                        var a = Vu(i);
                        return a.length == 1 && a[0][2] ? Im(a[0][0], a[0][1]) : function(c) {
                            return c === i || wu(c, i, a)
                        }
                    }

                    function Yg(i, a) {
                        return Ku(i) && Am(a) ? Im(mn(i), a) : function(c) {
                            var d = rf(c, i);
                            return d === r && d === a ? nf(c, i) : Sa(a, d, R | D)
                        }
                    }

                    function Vo(i, a, c, d, v) {
                        i !== a && Ou(a, function(E, C) {
                            if (v || (v = new tn), wt(E)) oI(i, a, C, c, Vo, d, v);
                            else {
                                var $ = d ? d(qu(i, C), E, C + "", i, a, v) : r;
                                $ === r && ($ = E), bu(i, C, $)
                            }
                        }, br)
                    }

                    function oI(i, a, c, d, v, E, C) {
                        var $ = qu(i, c),
                            x = qu(a, c),
                            ee = C.get(x);
                        if (ee) {
                            bu(i, c, ee);
                            return
                        }
                        var te = E ? E($, x, c + "", i, a, C) : r,
                            ae = te === r;
                        if (ae) {
                            var me = Ge(x),
                                Ae = !me && Jn(x),
                                Le = !me && !Ae && Ss(x);
                            te = x, me || Ae || Le ? Ge($) ? te = $ : Lt($) ? te = _r($) : Ae ? (ae = !1, te = sm(x, !0)) : Le ? (ae = !1, te = am(x, !0)) : te = [] : Na(x) || ki(x) ? (te = $, ki($) ? te = rv($) : (!wt($) || Ln($)) && (te = Sm(x))) : ae = !1
                        }
                        ae && (C.set(x, te), v(te, x, d, E, C), C.delete(x)), bu(i, c, te)
                    }

                    function qg(i, a) {
                        var c = i.length;
                        if (!!c) return a += a < 0 ? c : 0, Rn(a, c) ? i[a] : r
                    }

                    function zg(i, a, c) {
                        a.length ? a = At(a, function(E) {
                            return Ge(E) ? function(C) {
                                return Ri(C, E.length === 1 ? E[0] : E)
                            } : E
                        }) : a = [Tr];
                        var d = -1;
                        a = At(a, Nr(Re()));
                        var v = Hg(i, function(E, C, $) {
                            var x = At(a, function(ee) {
                                return ee(E)
                            });
                            return {
                                criteria: x,
                                index: ++d,
                                value: E
                            }
                        });
                        return kS(v, function(E, C) {
                            return EI(E, C, c)
                        })
                    }

                    function lI(i, a) {
                        return Xg(i, a, function(c, d) {
                            return nf(i, d)
                        })
                    }

                    function Xg(i, a, c) {
                        for (var d = -1, v = a.length, E = {}; ++d < v;) {
                            var C = a[d],
                                $ = Ri(i, C);
                            c($, C) && Aa(E, zn(C, i), $)
                        }
                        return E
                    }

                    function cI(i) {
                        return function(a) {
                            return Ri(a, i)
                        }
                    }

                    function $u(i, a, c, d) {
                        var v = d ? PS : hs,
                            E = -1,
                            C = a.length,
                            $ = i;
                        for (i === a && (a = _r(a)), c && ($ = At(i, Nr(c))); ++E < C;)
                            for (var x = 0, ee = a[E], te = c ? c(ee) : ee;
                                (x = v($, te, x, d)) > -1;) $ !== i && ko.call($, x, 1), ko.call(i, x, 1);
                        return i
                    }

                    function Jg(i, a) {
                        for (var c = i ? a.length : 0, d = c - 1; c--;) {
                            var v = a[c];
                            if (c == d || v !== E) {
                                var E = v;
                                Rn(v) ? ko.call(i, v, 1) : ku(i, v)
                            }
                        }
                        return i
                    }

                    function Ru(i, a) {
                        return i + Mo(Rg() * (a - i + 1))
                    }

                    function uI(i, a, c, d) {
                        for (var v = -1, E = Bt(xo((a - i) / (c || 1)), 0), C = K(E); E--;) C[d ? E : ++v] = i, i += c;
                        return C
                    }

                    function Lu(i, a) {
                        var c = "";
                        if (!i || a < 1 || a > ve) return c;
                        do a % 2 && (c += i), a = Mo(a / 2), a && (i += i); while (a);
                        return c
                    }

                    function Ke(i, a) {
                        return zu(wm(i, a, Tr), i + "")
                    }

                    function fI(i) {
                        return kg(As(i))
                    }

                    function dI(i, a) {
                        var c = As(i);
                        return el(c, $i(a, 0, c.length))
                    }

                    function Aa(i, a, c, d) {
                        if (!wt(i)) return i;
                        a = zn(a, i);
                        for (var v = -1, E = a.length, C = E - 1, $ = i; $ != null && ++v < E;) {
                            var x = mn(a[v]),
                                ee = c;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != C) {
                                var te = $[x];
                                ee = d ? d(te, x, $) : r, ee === r && (ee = wt(te) ? te : Rn(a[v + 1]) ? [] : {})
                            }
                            ba($, x, ee), $ = $[x]
                        }
                        return i
                    }
                    var Zg = Fo ? function(i, a) {
                            return Fo.set(i, a), i
                        } : Tr,
                        hI = Do ? function(i, a) {
                            return Do(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: af(a),
                                writable: !0
                            })
                        } : Tr;

                    function pI(i) {
                        return el(As(i))
                    }

                    function Vr(i, a, c) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), c = c > v ? v : c, c < 0 && (c += v), v = a > c ? 0 : c - a >>> 0, a >>>= 0;
                        for (var E = K(v); ++d < v;) E[d] = i[d + a];
                        return E
                    }

                    function gI(i, a) {
                        var c;
                        return Yn(i, function(d, v, E) {
                            return c = a(d, v, E), !c
                        }), !!c
                    }

                    function Ho(i, a, c) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= Ct) {
                            for (; d < v;) {
                                var E = d + v >>> 1,
                                    C = i[E];
                                C !== null && !Rr(C) && (c ? C <= a : C < a) ? d = E + 1 : v = E
                            }
                            return v
                        }
                        return Pu(i, a, Tr, c)
                    }

                    function Pu(i, a, c, d) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        a = c(a);
                        for (var C = a !== a, $ = a === null, x = Rr(a), ee = a === r; v < E;) {
                            var te = Mo((v + E) / 2),
                                ae = c(i[te]),
                                me = ae !== r,
                                Ae = ae === null,
                                Le = ae === ae,
                                He = Rr(ae);
                            if (C) var Pe = d || Le;
                            else ee ? Pe = Le && (d || me) : $ ? Pe = Le && me && (d || !Ae) : x ? Pe = Le && me && !Ae && (d || !He) : Ae || He ? Pe = !1 : Pe = d ? ae <= a : ae < a;
                            Pe ? v = te + 1 : E = te
                        }
                        return sr(E, tt)
                    }

                    function Qg(i, a) {
                        for (var c = -1, d = i.length, v = 0, E = []; ++c < d;) {
                            var C = i[c],
                                $ = a ? a(C) : C;
                            if (!c || !rn($, x)) {
                                var x = $;
                                E[v++] = C === 0 ? 0 : C
                            }
                        }
                        return E
                    }

                    function em(i) {
                        return typeof i == "number" ? i : Rr(i) ? Fe : +i
                    }

                    function $r(i) {
                        if (typeof i == "string") return i;
                        if (Ge(i)) return At(i, $r) + "";
                        if (Rr(i)) return Lg ? Lg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -Ee ? "-0" : a
                    }

                    function qn(i, a, c) {
                        var d = -1,
                            v = So,
                            E = i.length,
                            C = !0,
                            $ = [],
                            x = $;
                        if (c) C = !1, v = lu;
                        else if (E >= s) {
                            var ee = a ? null : II(i);
                            if (ee) return Io(ee);
                            C = !1, v = ga, x = new Ni
                        } else x = a ? [] : $;
                        e: for (; ++d < E;) {
                            var te = i[d],
                                ae = a ? a(te) : te;
                            if (te = c || te !== 0 ? te : 0, C && ae === ae) {
                                for (var me = x.length; me--;)
                                    if (x[me] === ae) continue e;
                                a && x.push(ae), $.push(te)
                            } else v(x, ae, c) || (x !== $ && x.push(ae), $.push(te))
                        }
                        return $
                    }

                    function ku(i, a) {
                        return a = zn(a, i), i = Cm(i, a), i == null || delete i[mn(Hr(a))]
                    }

                    function tm(i, a, c, d) {
                        return Aa(i, a, c(Ri(i, a)), d)
                    }

                    function Ko(i, a, c, d) {
                        for (var v = i.length, E = d ? v : -1;
                            (d ? E-- : ++E < v) && a(i[E], E, i););
                        return c ? Vr(i, d ? 0 : E, d ? E + 1 : v) : Vr(i, d ? E + 1 : 0, d ? v : E)
                    }

                    function rm(i, a) {
                        var c = i;
                        return c instanceof qe && (c = c.value()), cu(a, function(d, v) {
                            return v.func.apply(v.thisArg, Vn([d], v.args))
                        }, c)
                    }

                    function Du(i, a, c) {
                        var d = i.length;
                        if (d < 2) return d ? qn(i[0]) : [];
                        for (var v = -1, E = K(d); ++v < d;)
                            for (var C = i[v], $ = -1; ++$ < d;) $ != v && (E[v] = Ta(E[v] || C, i[$], a, c));
                        return qn(Jt(E, 1), a, c)
                    }

                    function nm(i, a, c) {
                        for (var d = -1, v = i.length, E = a.length, C = {}; ++d < v;) {
                            var $ = d < E ? a[d] : r;
                            c(C, i[d], $)
                        }
                        return C
                    }

                    function xu(i) {
                        return Lt(i) ? i : []
                    }

                    function Mu(i) {
                        return typeof i == "function" ? i : Tr
                    }

                    function zn(i, a) {
                        return Ge(i) ? i : Ku(i, a) ? [i] : Lm(ct(i))
                    }
                    var mI = Ke;

                    function Xn(i, a, c) {
                        var d = i.length;
                        return c = c === r ? d : c, !a && c >= d ? i : Vr(i, a, c)
                    }
                    var im = nA || function(i) {
                        return Xt.clearTimeout(i)
                    };

                    function sm(i, a) {
                        if (a) return i.slice();
                        var c = i.length,
                            d = Ig ? Ig(c) : new i.constructor(c);
                        return i.copy(d), d
                    }

                    function Fu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Lo(a).set(new Lo(i)), a
                    }

                    function vI(i, a) {
                        var c = a ? Fu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.byteLength)
                    }

                    function yI(i) {
                        var a = new i.constructor(i.source, jp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function _I(i) {
                        return Ea ? pt(Ea.call(i)) : {}
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
                                E = Rr(i),
                                C = a !== r,
                                $ = a === null,
                                x = a === a,
                                ee = Rr(a);
                            if (!$ && !ee && !E && i > a || E && C && x && !$ && !ee || d && C && x || !c && x || !v) return 1;
                            if (!d && !E && !ee && i < a || ee && c && v && !d && !E || $ && c && v || !C && v || !x) return -1
                        }
                        return 0
                    }

                    function EI(i, a, c) {
                        for (var d = -1, v = i.criteria, E = a.criteria, C = v.length, $ = c.length; ++d < C;) {
                            var x = om(v[d], E[d]);
                            if (x) {
                                if (d >= $) return x;
                                var ee = c[d];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function lm(i, a, c, d) {
                        for (var v = -1, E = i.length, C = c.length, $ = -1, x = a.length, ee = Bt(E - C, 0), te = K(x + ee), ae = !d; ++$ < x;) te[$] = a[$];
                        for (; ++v < C;)(ae || v < E) && (te[c[v]] = i[v]);
                        for (; ee--;) te[$++] = i[v++];
                        return te
                    }

                    function cm(i, a, c, d) {
                        for (var v = -1, E = i.length, C = -1, $ = c.length, x = -1, ee = a.length, te = Bt(E - $, 0), ae = K(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var Ae = v; ++x < ee;) ae[Ae + x] = a[x];
                        for (; ++C < $;)(me || v < E) && (ae[Ae + c[C]] = i[v++]);
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
                        for (var E = -1, C = a.length; ++E < C;) {
                            var $ = a[E],
                                x = d ? d(c[$], i[$], $, c, i) : r;
                            x === r && (x = i[$]), v ? Cn(c, $, x) : ba(c, $, x)
                        }
                        return c
                    }

                    function bI(i, a) {
                        return gn(i, Hu(i), a)
                    }

                    function TI(i, a) {
                        return gn(i, Tm(i), a)
                    }

                    function Yo(i, a) {
                        return function(c, d) {
                            var v = Ge(c) ? wS : VA,
                                E = a ? a() : {};
                            return v(c, i, Re(d, 2), E)
                        }
                    }

                    function bs(i) {
                        return Ke(function(a, c) {
                            var d = -1,
                                v = c.length,
                                E = v > 1 ? c[v - 1] : r,
                                C = v > 2 ? c[2] : r;
                            for (E = i.length > 3 && typeof E == "function" ? (v--, E) : r, C && hr(c[0], c[1], C) && (E = v < 3 ? r : E, v = 1), a = pt(a); ++d < v;) {
                                var $ = c[d];
                                $ && i(a, $, d, E)
                            }
                            return a
                        })
                    }

                    function um(i, a) {
                        return function(c, d) {
                            if (c == null) return c;
                            if (!Er(c)) return i(c, d);
                            for (var v = c.length, E = a ? v : -1, C = pt(c);
                                (a ? E-- : ++E < v) && d(C[E], E, C) !== !1;);
                            return c
                        }
                    }

                    function fm(i) {
                        return function(a, c, d) {
                            for (var v = -1, E = pt(a), C = d(a), $ = C.length; $--;) {
                                var x = C[i ? $ : ++v];
                                if (c(E[x], x, E) === !1) break
                            }
                            return a
                        }
                    }

                    function OI(i, a, c) {
                        var d = a & B,
                            v = Ia(i);

                        function E() {
                            var C = this && this !== Xt && this instanceof E ? v : i;
                            return C.apply(d ? c : this, arguments)
                        }
                        return E
                    }

                    function dm(i) {
                        return function(a) {
                            a = ct(a);
                            var c = ps(a) ? en(a) : r,
                                d = c ? c[0] : a.charAt(0),
                                v = c ? Xn(c, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function Ts(i) {
                        return function(a) {
                            return cu(uv(cv(a).replace(hS, "")), i, "")
                        }
                    }

                    function Ia(i) {
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
                            var c = Es(i.prototype),
                                d = i.apply(c, a);
                            return wt(d) ? d : c
                        }
                    }

                    function SI(i, a, c) {
                        var d = Ia(i);

                        function v() {
                            for (var E = arguments.length, C = K(E), $ = E, x = Os(v); $--;) C[$] = arguments[$];
                            var ee = E < 3 && C[0] !== x && C[E - 1] !== x ? [] : Hn(C, x);
                            if (E -= ee.length, E < c) return vm(i, a, qo, v.placeholder, r, C, ee, r, r, c - E);
                            var te = this && this !== Xt && this instanceof v ? d : i;
                            return Cr(te, this, C)
                        }
                        return v
                    }

                    function hm(i) {
                        return function(a, c, d) {
                            var v = pt(a);
                            if (!Er(a)) {
                                var E = Re(c, 3);
                                a = Kt(a), c = function($) {
                                    return E(v[$], $, v)
                                }
                            }
                            var C = i(a, c, d);
                            return C > -1 ? v[E ? a[C] : C] : r
                        }
                    }

                    function pm(i) {
                        return $n(function(a) {
                            var c = a.length,
                                d = c,
                                v = jr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var E = a[d];
                                if (typeof E != "function") throw new Gr(l);
                                if (v && !C && Zo(E) == "wrapper") var C = new jr([], !0)
                            }
                            for (d = C ? d : c; ++d < c;) {
                                E = a[d];
                                var $ = Zo(E),
                                    x = $ == "wrapper" ? Wu(E) : r;
                                x && Yu(x[0]) && x[1] == (oe | q | G | le) && !x[4].length && x[9] == 1 ? C = C[Zo(x[0])].apply(C, x[3]) : C = E.length == 1 && Yu(E) ? C[$]() : C.thru(E)
                            }
                            return function() {
                                var ee = arguments,
                                    te = ee[0];
                                if (C && ee.length == 1 && Ge(te)) return C.plant(te).value();
                                for (var ae = 0, me = c ? a[ae].apply(this, ee) : te; ++ae < c;) me = a[ae].call(this, me);
                                return me
                            }
                        })
                    }

                    function qo(i, a, c, d, v, E, C, $, x, ee) {
                        var te = a & oe,
                            ae = a & B,
                            me = a & w,
                            Ae = a & (q | j),
                            Le = a & ue,
                            He = me ? r : Ia(i);

                        function Pe() {
                            for (var Ye = arguments.length, Xe = K(Ye), Lr = Ye; Lr--;) Xe[Lr] = arguments[Lr];
                            if (Ae) var pr = Os(Pe),
                                Pr = xS(Xe, pr);
                            if (d && (Xe = lm(Xe, d, v, Ae)), E && (Xe = cm(Xe, E, C, Ae)), Ye -= Pr, Ae && Ye < ee) {
                                var Pt = Hn(Xe, pr);
                                return vm(i, a, qo, Pe.placeholder, c, Xe, Pt, $, x, ee - Ye)
                            }
                            var nn = ae ? c : this,
                                kn = me ? nn[i] : i;
                            return Ye = Xe.length, $ ? Xe = VI(Xe, $) : Le && Ye > 1 && Xe.reverse(), te && x < Ye && (Xe.length = x), this && this !== Xt && this instanceof Pe && (kn = He || Ia(kn)), kn.apply(nn, Xe)
                        }
                        return Pe
                    }

                    function gm(i, a) {
                        return function(c, d) {
                            return ZA(c, i, a(d), {})
                        }
                    }

                    function zo(i, a) {
                        return function(c, d) {
                            var v;
                            if (c === r && d === r) return a;
                            if (c !== r && (v = c), d !== r) {
                                if (v === r) return d;
                                typeof c == "string" || typeof d == "string" ? (c = $r(c), d = $r(d)) : (c = em(c), d = em(d)), v = i(c, d)
                            }
                            return v
                        }
                    }

                    function Uu(i) {
                        return $n(function(a) {
                            return a = At(a, Nr(Re())), Ke(function(c) {
                                var d = this;
                                return i(a, function(v) {
                                    return Cr(v, d, c)
                                })
                            })
                        })
                    }

                    function Xo(i, a) {
                        a = a === r ? " " : $r(a);
                        var c = a.length;
                        if (c < 2) return c ? Lu(a, i) : a;
                        var d = Lu(a, xo(i / gs(a)));
                        return ps(a) ? Xn(en(d), 0, i).join("") : d.slice(0, i)
                    }

                    function AI(i, a, c, d) {
                        var v = a & B,
                            E = Ia(i);

                        function C() {
                            for (var $ = -1, x = arguments.length, ee = -1, te = d.length, ae = K(te + x), me = this && this !== Xt && this instanceof C ? E : i; ++ee < te;) ae[ee] = d[ee];
                            for (; x--;) ae[ee++] = arguments[++$];
                            return Cr(me, v ? c : this, ae)
                        }
                        return C
                    }

                    function mm(i) {
                        return function(a, c, d) {
                            return d && typeof d != "number" && hr(a, c, d) && (c = d = r), a = Pn(a), c === r ? (c = a, a = 0) : c = Pn(c), d = d === r ? a < c ? 1 : -1 : Pn(d), uI(a, c, d, i)
                        }
                    }

                    function Jo(i) {
                        return function(a, c) {
                            return typeof a == "string" && typeof c == "string" || (a = Kr(a), c = Kr(c)), i(a, c)
                        }
                    }

                    function vm(i, a, c, d, v, E, C, $, x, ee) {
                        var te = a & q,
                            ae = te ? C : r,
                            me = te ? r : C,
                            Ae = te ? E : r,
                            Le = te ? r : E;
                        a |= te ? G : J, a &= ~(te ? J : G), a & H || (a &= ~(B | w));
                        var He = [i, a, v, Ae, ae, Le, me, $, x, ee],
                            Pe = c.apply(r, He);
                        return Yu(i) && Nm(Pe, He), Pe.placeholder = d, $m(Pe, i, a)
                    }

                    function Bu(i) {
                        var a = Ut[i];
                        return function(c, d) {
                            if (c = Kr(c), d = d == null ? 0 : sr(We(d), 292), d && $g(c)) {
                                var v = (ct(c) + "e").split("e"),
                                    E = a(v[0] + "e" + (+v[1] + d));
                                return v = (ct(E) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(c)
                        }
                    }
                    var II = ys && 1 / Io(new ys([, -0]))[1] == Ee ? function(i) {
                        return new ys(i)
                    } : cf;

                    function ym(i) {
                        return function(a) {
                            var c = ar(a);
                            return c == p ? mu(a) : c == re ? WS(a) : DS(a, i(a))
                        }
                    }

                    function Nn(i, a, c, d, v, E, C, $) {
                        var x = a & w;
                        if (!x && typeof i != "function") throw new Gr(l);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(G | J), d = v = r), C = C === r ? C : Bt(We(C), 0), $ = $ === r ? $ : We($), ee -= v ? v.length : 0, a & J) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = x ? r : Wu(i),
                            Ae = [i, a, c, d, v, te, ae, E, C, $];
                        if (me && GI(Ae, me), i = Ae[0], a = Ae[1], c = Ae[2], d = Ae[3], v = Ae[4], $ = Ae[9] = Ae[9] === r ? x ? 0 : i.length : Bt(Ae[9] - ee, 0), !$ && a & (q | j) && (a &= ~(q | j)), !a || a == B) var Le = OI(i, a, c);
                        else a == q || a == j ? Le = SI(i, a, $) : (a == G || a == (B | G)) && !v.length ? Le = AI(i, a, c, d) : Le = qo.apply(r, Ae);
                        var He = me ? Zg : Nm;
                        return $m(He(Le, Ae), i, a)
                    }

                    function _m(i, a, c, d) {
                        return i === r || rn(i, vs[c]) && !dt.call(d, c) ? a : i
                    }

                    function Em(i, a, c, d, v, E) {
                        return wt(i) && wt(a) && (E.set(a, i), Vo(i, a, r, Em, E), E.delete(a)), i
                    }

                    function wI(i) {
                        return Na(i) ? r : i
                    }

                    function bm(i, a, c, d, v, E) {
                        var C = c & R,
                            $ = i.length,
                            x = a.length;
                        if ($ != x && !(C && x > $)) return !1;
                        var ee = E.get(i),
                            te = E.get(a);
                        if (ee && te) return ee == a && te == i;
                        var ae = -1,
                            me = !0,
                            Ae = c & D ? new Ni : r;
                        for (E.set(i, a), E.set(a, i); ++ae < $;) {
                            var Le = i[ae],
                                He = a[ae];
                            if (d) var Pe = C ? d(He, Le, ae, a, i, E) : d(Le, He, ae, i, a, E);
                            if (Pe !== r) {
                                if (Pe) continue;
                                me = !1;
                                break
                            }
                            if (Ae) {
                                if (!uu(a, function(Ye, Xe) {
                                        if (!ga(Ae, Xe) && (Le === Ye || v(Le, Ye, c, d, E))) return Ae.push(Xe)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Le === He || v(Le, He, c, d, E))) {
                                me = !1;
                                break
                            }
                        }
                        return E.delete(i), E.delete(a), me
                    }

                    function CI(i, a, c, d, v, E, C) {
                        switch (c) {
                            case I:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case De:
                                return !(i.byteLength != a.byteLength || !E(new Lo(i), new Lo(a)));
                            case St:
                            case lt:
                            case A:
                                return rn(+i, +a);
                            case Ht:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case N:
                                return i == a + "";
                            case p:
                                var $ = mu;
                            case re:
                                var x = d & R;
                                if ($ || ($ = Io), i.size != a.size && !x) return !1;
                                var ee = C.get(i);
                                if (ee) return ee == a;
                                d |= D, C.set(i, a);
                                var te = bm($(i), $(a), d, v, E, C);
                                return C.delete(i), te;
                            case W:
                                if (Ea) return Ea.call(i) == Ea.call(a)
                        }
                        return !1
                    }

                    function NI(i, a, c, d, v, E) {
                        var C = c & R,
                            $ = Gu(i),
                            x = $.length,
                            ee = Gu(a),
                            te = ee.length;
                        if (x != te && !C) return !1;
                        for (var ae = x; ae--;) {
                            var me = $[ae];
                            if (!(C ? me in a : dt.call(a, me))) return !1
                        }
                        var Ae = E.get(i),
                            Le = E.get(a);
                        if (Ae && Le) return Ae == a && Le == i;
                        var He = !0;
                        E.set(i, a), E.set(a, i);
                        for (var Pe = C; ++ae < x;) {
                            me = $[ae];
                            var Ye = i[me],
                                Xe = a[me];
                            if (d) var Lr = C ? d(Xe, Ye, me, a, i, E) : d(Ye, Xe, me, i, a, E);
                            if (!(Lr === r ? Ye === Xe || v(Ye, Xe, c, d, E) : Lr)) {
                                He = !1;
                                break
                            }
                            Pe || (Pe = me == "constructor")
                        }
                        if (He && !Pe) {
                            var pr = i.constructor,
                                Pr = a.constructor;
                            pr != Pr && "constructor" in i && "constructor" in a && !(typeof pr == "function" && pr instanceof pr && typeof Pr == "function" && Pr instanceof Pr) && (He = !1)
                        }
                        return E.delete(i), E.delete(a), He
                    }

                    function $n(i) {
                        return zu(wm(i, r, xm), i + "")
                    }

                    function Gu(i) {
                        return Gg(i, Kt, Hu)
                    }

                    function ju(i) {
                        return Gg(i, br, Tm)
                    }
                    var Wu = Fo ? function(i) {
                        return Fo.get(i)
                    } : cf;

                    function Zo(i) {
                        for (var a = i.name + "", c = _s[a], d = dt.call(_s, a) ? c.length : 0; d--;) {
                            var v = c[d],
                                E = v.func;
                            if (E == null || E == i) return v.name
                        }
                        return a
                    }

                    function Os(i) {
                        var a = dt.call(_, "placeholder") ? _ : i;
                        return a.placeholder
                    }

                    function Re() {
                        var i = _.iteratee || of;
                        return i = i === of ? Vg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function Qo(i, a) {
                        var c = i.__data__;
                        return MI(a) ? c[typeof a == "string" ? "string" : "hash"] : c.map
                    }

                    function Vu(i) {
                        for (var a = Kt(i), c = a.length; c--;) {
                            var d = a[c],
                                v = i[d];
                            a[c] = [d, v, Am(v)]
                        }
                        return a
                    }

                    function Li(i, a) {
                        var c = BS(i, a);
                        return Wg(c) ? c : r
                    }

                    function $I(i) {
                        var a = dt.call(i, wi),
                            c = i[wi];
                        try {
                            i[wi] = r;
                            var d = !0
                        } catch {}
                        var v = $o.call(i);
                        return d && (a ? i[wi] = c : delete i[wi]), v
                    }
                    var Hu = yu ? function(i) {
                            return i == null ? [] : (i = pt(i), Wn(yu(i), function(a) {
                                return Cg.call(i, a)
                            }))
                        } : uf,
                        Tm = yu ? function(i) {
                            for (var a = []; i;) Vn(a, Hu(i)), i = Po(i);
                            return a
                        } : uf,
                        ar = dr;
                    (_u && ar(new _u(new ArrayBuffer(1))) != I || va && ar(new va) != p || Eu && ar(Eu.resolve()) != Y || ys && ar(new ys) != re || ya && ar(new ya) != pe) && (ar = function(i) {
                        var a = dr(i),
                            c = a == U ? i.constructor : r,
                            d = c ? Pi(c) : "";
                        if (d) switch (d) {
                            case dA:
                                return I;
                            case hA:
                                return p;
                            case pA:
                                return Y;
                            case gA:
                                return re;
                            case mA:
                                return pe
                        }
                        return a
                    });

                    function RI(i, a, c) {
                        for (var d = -1, v = c.length; ++d < v;) {
                            var E = c[d],
                                C = E.size;
                            switch (E.type) {
                                case "drop":
                                    i += C;
                                    break;
                                case "dropRight":
                                    a -= C;
                                    break;
                                case "take":
                                    a = sr(a, i + C);
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

                    function LI(i) {
                        var a = i.match(F0);
                        return a ? a[1].split(U0) : []
                    }

                    function Om(i, a, c) {
                        a = zn(a, i);
                        for (var d = -1, v = a.length, E = !1; ++d < v;) {
                            var C = mn(a[d]);
                            if (!(E = i != null && c(i, C))) break;
                            i = i[C]
                        }
                        return E || ++d != v ? E : (v = i == null ? 0 : i.length, !!v && al(v) && Rn(C, v) && (Ge(i) || ki(i)))
                    }

                    function PI(i) {
                        var a = i.length,
                            c = new i.constructor(a);
                        return a && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c
                    }

                    function Sm(i) {
                        return typeof i.constructor == "function" && !wa(i) ? Es(Po(i)) : {}
                    }

                    function kI(i, a, c) {
                        var d = i.constructor;
                        switch (a) {
                            case De:
                                return Fu(i);
                            case St:
                            case lt:
                                return new d(+i);
                            case I:
                                return vI(i, c);
                            case O:
                            case L:
                            case S:
                            case P:
                            case Q:
                            case ne:
                            case _e:
                            case Te:
                            case ft:
                                return am(i, c);
                            case p:
                                return new d;
                            case A:
                            case N:
                                return new d(i);
                            case se:
                                return yI(i);
                            case re:
                                return new d;
                            case W:
                                return _I(i)
                        }
                    }

                    function DI(i, a) {
                        var c = a.length;
                        if (!c) return i;
                        var d = c - 1;
                        return a[d] = (c > 1 ? "& " : "") + a[d], a = a.join(c > 2 ? ", " : " "), i.replace(M0, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function xI(i) {
                        return Ge(i) || ki(i) || !!(Ng && i && i[Ng])
                    }

                    function Rn(i, a) {
                        var c = typeof i;
                        return a = a == null ? ve : a, !!a && (c == "number" || c != "symbol" && q0.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function hr(i, a, c) {
                        if (!wt(c)) return !1;
                        var d = typeof a;
                        return (d == "number" ? Er(c) && Rn(a, c.length) : d == "string" && a in c) ? rn(c[a], i) : !1
                    }

                    function Ku(i, a) {
                        if (Ge(i)) return !1;
                        var c = typeof i;
                        return c == "number" || c == "symbol" || c == "boolean" || i == null || Rr(i) ? !0 : P0.test(i) || !L0.test(i) || a != null && i in pt(a)
                    }

                    function MI(i) {
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

                    function FI(i) {
                        return !!Ag && Ag in i
                    }
                    var UI = Co ? Ln : ff;

                    function wa(i) {
                        var a = i && i.constructor,
                            c = typeof a == "function" && a.prototype || vs;
                        return i === c
                    }

                    function Am(i) {
                        return i === i && !wt(i)
                    }

                    function Im(i, a) {
                        return function(c) {
                            return c == null ? !1 : c[i] === a && (a !== r || i in pt(c))
                        }
                    }

                    function BI(i) {
                        var a = il(i, function(d) {
                                return c.size === h && c.clear(), d
                            }),
                            c = a.cache;
                        return a
                    }

                    function GI(i, a) {
                        var c = i[1],
                            d = a[1],
                            v = c | d,
                            E = v < (B | w | oe),
                            C = d == oe && c == q || d == oe && c == le && i[7].length <= a[8] || d == (oe | le) && a[7].length <= a[8] && c == q;
                        if (!(E || C)) return i;
                        d & B && (i[2] = a[2], v |= c & B ? 0 : H);
                        var $ = a[3];
                        if ($) {
                            var x = i[3];
                            i[3] = x ? lm(x, $, a[4]) : $, i[4] = x ? Hn(i[3], g) : a[4]
                        }
                        return $ = a[5], $ && (x = i[5], i[5] = x ? cm(x, $, a[6]) : $, i[6] = x ? Hn(i[5], g) : a[6]), $ = a[7], $ && (i[7] = $), d & oe && (i[8] = i[8] == null ? a[8] : sr(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function jI(i) {
                        var a = [];
                        if (i != null)
                            for (var c in pt(i)) a.push(c);
                        return a
                    }

                    function WI(i) {
                        return $o.call(i)
                    }

                    function wm(i, a, c) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, E = Bt(d.length - a, 0), C = K(E); ++v < E;) C[v] = d[a + v];
                                v = -1;
                                for (var $ = K(a + 1); ++v < a;) $[v] = d[v];
                                return $[a] = c(C), Cr(i, this, $)
                            }
                    }

                    function Cm(i, a) {
                        return a.length < 2 ? i : Ri(i, Vr(a, 0, -1))
                    }

                    function VI(i, a) {
                        for (var c = i.length, d = sr(a.length, c), v = _r(i); d--;) {
                            var E = a[d];
                            i[d] = Rn(E, c) ? v[E] : r
                        }
                        return i
                    }

                    function qu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Nm = Rm(Zg),
                        Ca = sA || function(i, a) {
                            return Xt.setTimeout(i, a)
                        },
                        zu = Rm(hI);

                    function $m(i, a, c) {
                        var d = a + "";
                        return zu(i, DI(d, HI(LI(d), c)))
                    }

                    function Rm(i) {
                        var a = 0,
                            c = 0;
                        return function() {
                            var d = cA(),
                                v = Ie - (d - c);
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
                            var E = Ru(c, v),
                                C = i[E];
                            i[E] = i[c], i[c] = C
                        }
                        return i.length = a, i
                    }
                    var Lm = BI(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(k0, function(c, d, v, E) {
                            a.push(v ? E.replace(j0, "$1") : d || c)
                        }), a
                    });

                    function mn(i) {
                        if (typeof i == "string" || Rr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -Ee ? "-0" : a
                    }

                    function Pi(i) {
                        if (i != null) {
                            try {
                                return No.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function HI(i, a) {
                        return Br(wr, function(c) {
                            var d = "_." + c[0];
                            a & c[1] && !So(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Pm(i) {
                        if (i instanceof qe) return i.clone();
                        var a = new jr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = _r(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function KI(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = Bt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, E = 0, C = K(xo(d / a)); v < d;) C[E++] = Vr(i, v, v += a);
                        return C
                    }

                    function YI(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = 0, v = []; ++a < c;) {
                            var E = i[a];
                            E && (v[d++] = E)
                        }
                        return v
                    }

                    function qI() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = K(i - 1), c = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Vn(Ge(c) ? _r(c) : [c], Jt(a, 1))
                    }
                    var zI = Ke(function(i, a) {
                            return Lt(i) ? Ta(i, Jt(a, 1, Lt, !0)) : []
                        }),
                        XI = Ke(function(i, a) {
                            var c = Hr(a);
                            return Lt(c) && (c = r), Lt(i) ? Ta(i, Jt(a, 1, Lt, !0), Re(c, 2)) : []
                        }),
                        JI = Ke(function(i, a) {
                            var c = Hr(a);
                            return Lt(c) && (c = r), Lt(i) ? Ta(i, Jt(a, 1, Lt, !0), r, c) : []
                        });

                    function ZI(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), Vr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function QI(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Vr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function ew(i, a) {
                        return i && i.length ? Ko(i, Re(a, 3), !0, !0) : []
                    }

                    function tw(i, a) {
                        return i && i.length ? Ko(i, Re(a, 3), !0) : []
                    }

                    function rw(i, a, c, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (c && typeof c != "number" && hr(i, a, c) && (c = 0, d = v), qA(i, a, c, d)) : []
                    }

                    function km(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), Ao(i, Re(a, 3), v)
                    }

                    function Dm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return c !== r && (v = We(c), v = c < 0 ? Bt(d + v, 0) : sr(v, d - 1)), Ao(i, Re(a, 3), v, !0)
                    }

                    function xm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jt(i, 1) : []
                    }

                    function nw(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jt(i, Ee) : []
                    }

                    function iw(i, a) {
                        var c = i == null ? 0 : i.length;
                        return c ? (a = a === r ? 1 : We(a), Jt(i, a)) : []
                    }

                    function sw(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = {}; ++a < c;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Mm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function aw(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), hs(i, a, v)
                    }

                    function ow(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Vr(i, 0, -1) : []
                    }
                    var lw = Ke(function(i) {
                            var a = At(i, xu);
                            return a.length && a[0] === i[0] ? Iu(a) : []
                        }),
                        cw = Ke(function(i) {
                            var a = Hr(i),
                                c = At(i, xu);
                            return a === Hr(c) ? a = r : c.pop(), c.length && c[0] === i[0] ? Iu(c, Re(a, 2)) : []
                        }),
                        uw = Ke(function(i) {
                            var a = Hr(i),
                                c = At(i, xu);
                            return a = typeof a == "function" ? a : r, a && c.pop(), c.length && c[0] === i[0] ? Iu(c, r, a) : []
                        });

                    function fw(i, a) {
                        return i == null ? "" : oA.call(i, a)
                    }

                    function Hr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function dw(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return c !== r && (v = We(c), v = v < 0 ? Bt(d + v, 0) : sr(v, d - 1)), a === a ? HS(i, a, v) : Ao(i, vg, v, !0)
                    }

                    function hw(i, a) {
                        return i && i.length ? qg(i, We(a)) : r
                    }
                    var pw = Ke(Fm);

                    function Fm(i, a) {
                        return i && i.length && a && a.length ? $u(i, a) : i
                    }

                    function gw(i, a, c) {
                        return i && i.length && a && a.length ? $u(i, a, Re(c, 2)) : i
                    }

                    function mw(i, a, c) {
                        return i && i.length && a && a.length ? $u(i, a, r, c) : i
                    }
                    var vw = $n(function(i, a) {
                        var c = i == null ? 0 : i.length,
                            d = Tu(i, a);
                        return Jg(i, At(a, function(v) {
                            return Rn(v, c) ? +v : v
                        }).sort(om)), d
                    });

                    function yw(i, a) {
                        var c = [];
                        if (!(i && i.length)) return c;
                        var d = -1,
                            v = [],
                            E = i.length;
                        for (a = Re(a, 3); ++d < E;) {
                            var C = i[d];
                            a(C, d, i) && (c.push(C), v.push(d))
                        }
                        return Jg(i, v), c
                    }

                    function Xu(i) {
                        return i == null ? i : fA.call(i)
                    }

                    function _w(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (c && typeof c != "number" && hr(i, a, c) ? (a = 0, c = d) : (a = a == null ? 0 : We(a), c = c === r ? d : We(c)), Vr(i, a, c)) : []
                    }

                    function Ew(i, a) {
                        return Ho(i, a)
                    }

                    function bw(i, a, c) {
                        return Pu(i, a, Re(c, 2))
                    }

                    function Tw(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = Ho(i, a);
                            if (d < c && rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function Ow(i, a) {
                        return Ho(i, a, !0)
                    }

                    function Sw(i, a, c) {
                        return Pu(i, a, Re(c, 2), !0)
                    }

                    function Aw(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = Ho(i, a, !0) - 1;
                            if (rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function Iw(i) {
                        return i && i.length ? Qg(i) : []
                    }

                    function ww(i, a) {
                        return i && i.length ? Qg(i, Re(a, 2)) : []
                    }

                    function Cw(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Vr(i, 1, a) : []
                    }

                    function Nw(i, a, c) {
                        return i && i.length ? (a = c || a === r ? 1 : We(a), Vr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function $w(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Vr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function Rw(i, a) {
                        return i && i.length ? Ko(i, Re(a, 3), !1, !0) : []
                    }

                    function Lw(i, a) {
                        return i && i.length ? Ko(i, Re(a, 3)) : []
                    }
                    var Pw = Ke(function(i) {
                            return qn(Jt(i, 1, Lt, !0))
                        }),
                        kw = Ke(function(i) {
                            var a = Hr(i);
                            return Lt(a) && (a = r), qn(Jt(i, 1, Lt, !0), Re(a, 2))
                        }),
                        Dw = Ke(function(i) {
                            var a = Hr(i);
                            return a = typeof a == "function" ? a : r, qn(Jt(i, 1, Lt, !0), r, a)
                        });

                    function xw(i) {
                        return i && i.length ? qn(i) : []
                    }

                    function Mw(i, a) {
                        return i && i.length ? qn(i, Re(a, 2)) : []
                    }

                    function Fw(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? qn(i, r, a) : []
                    }

                    function Ju(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Wn(i, function(c) {
                            if (Lt(c)) return a = Bt(c.length, a), !0
                        }), pu(a, function(c) {
                            return At(i, fu(c))
                        })
                    }

                    function Um(i, a) {
                        if (!(i && i.length)) return [];
                        var c = Ju(i);
                        return a == null ? c : At(c, function(d) {
                            return Cr(a, r, d)
                        })
                    }
                    var Uw = Ke(function(i, a) {
                            return Lt(i) ? Ta(i, a) : []
                        }),
                        Bw = Ke(function(i) {
                            return Du(Wn(i, Lt))
                        }),
                        Gw = Ke(function(i) {
                            var a = Hr(i);
                            return Lt(a) && (a = r), Du(Wn(i, Lt), Re(a, 2))
                        }),
                        jw = Ke(function(i) {
                            var a = Hr(i);
                            return a = typeof a == "function" ? a : r, Du(Wn(i, Lt), r, a)
                        }),
                        Ww = Ke(Ju);

                    function Vw(i, a) {
                        return nm(i || [], a || [], ba)
                    }

                    function Hw(i, a) {
                        return nm(i || [], a || [], Aa)
                    }
                    var Kw = Ke(function(i) {
                        var a = i.length,
                            c = a > 1 ? i[a - 1] : r;
                        return c = typeof c == "function" ? (i.pop(), c) : r, Um(i, c)
                    });

                    function Bm(i) {
                        var a = _(i);
                        return a.__chain__ = !0, a
                    }

                    function Yw(i, a) {
                        return a(i), i
                    }

                    function tl(i, a) {
                        return a(i)
                    }
                    var qw = $n(function(i) {
                        var a = i.length,
                            c = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(E) {
                                return Tu(E, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof qe) || !Rn(c) ? this.thru(v) : (d = d.slice(c, +c + (a ? 1 : 0)), d.__actions__.push({
                            func: tl,
                            args: [v],
                            thisArg: r
                        }), new jr(d, this.__chain__).thru(function(E) {
                            return a && !E.length && E.push(r), E
                        }))
                    });

                    function zw() {
                        return Bm(this)
                    }

                    function Xw() {
                        return new jr(this.value(), this.__chain__)
                    }

                    function Jw() {
                        this.__values__ === r && (this.__values__ = ev(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function Zw() {
                        return this
                    }

                    function Qw(i) {
                        for (var a, c = this; c instanceof Bo;) {
                            var d = Pm(c);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            c = c.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function eC() {
                        var i = this.__wrapped__;
                        if (i instanceof qe) {
                            var a = i;
                            return this.__actions__.length && (a = new qe(this)), a = a.reverse(), a.__actions__.push({
                                func: tl,
                                args: [Xu],
                                thisArg: r
                            }), new jr(a, this.__chain__)
                        }
                        return this.thru(Xu)
                    }

                    function tC() {
                        return rm(this.__wrapped__, this.__actions__)
                    }
                    var rC = Yo(function(i, a, c) {
                        dt.call(i, c) ? ++i[c] : Cn(i, c, 1)
                    });

                    function nC(i, a, c) {
                        var d = Ge(i) ? gg : YA;
                        return c && hr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }

                    function iC(i, a) {
                        var c = Ge(i) ? Wn : Ug;
                        return c(i, Re(a, 3))
                    }
                    var sC = hm(km),
                        aC = hm(Dm);

                    function oC(i, a) {
                        return Jt(rl(i, a), 1)
                    }

                    function lC(i, a) {
                        return Jt(rl(i, a), Ee)
                    }

                    function cC(i, a, c) {
                        return c = c === r ? 1 : We(c), Jt(rl(i, a), c)
                    }

                    function Gm(i, a) {
                        var c = Ge(i) ? Br : Yn;
                        return c(i, Re(a, 3))
                    }

                    function jm(i, a) {
                        var c = Ge(i) ? CS : Fg;
                        return c(i, Re(a, 3))
                    }
                    var uC = Yo(function(i, a, c) {
                        dt.call(i, c) ? i[c].push(a) : Cn(i, c, [a])
                    });

                    function fC(i, a, c, d) {
                        i = Er(i) ? i : As(i), c = c && !d ? We(c) : 0;
                        var v = i.length;
                        return c < 0 && (c = Bt(v + c, 0)), ol(i) ? c <= v && i.indexOf(a, c) > -1 : !!v && hs(i, a, c) > -1
                    }
                    var dC = Ke(function(i, a, c) {
                            var d = -1,
                                v = typeof a == "function",
                                E = Er(i) ? K(i.length) : [];
                            return Yn(i, function(C) {
                                E[++d] = v ? Cr(a, C, c) : Oa(C, a, c)
                            }), E
                        }),
                        hC = Yo(function(i, a, c) {
                            Cn(i, c, a)
                        });

                    function rl(i, a) {
                        var c = Ge(i) ? At : Hg;
                        return c(i, Re(a, 3))
                    }

                    function pC(i, a, c, d) {
                        return i == null ? [] : (Ge(a) || (a = a == null ? [] : [a]), c = d ? r : c, Ge(c) || (c = c == null ? [] : [c]), zg(i, a, c))
                    }
                    var gC = Yo(function(i, a, c) {
                        i[c ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function mC(i, a, c) {
                        var d = Ge(i) ? cu : _g,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, Yn)
                    }

                    function vC(i, a, c) {
                        var d = Ge(i) ? NS : _g,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, Fg)
                    }

                    function yC(i, a) {
                        var c = Ge(i) ? Wn : Ug;
                        return c(i, sl(Re(a, 3)))
                    }

                    function _C(i) {
                        var a = Ge(i) ? kg : fI;
                        return a(i)
                    }

                    function EC(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = We(a);
                        var d = Ge(i) ? jA : dI;
                        return d(i, a)
                    }

                    function bC(i) {
                        var a = Ge(i) ? WA : pI;
                        return a(i)
                    }

                    function TC(i) {
                        if (i == null) return 0;
                        if (Er(i)) return ol(i) ? gs(i) : i.length;
                        var a = ar(i);
                        return a == p || a == re ? i.size : Cu(i).length
                    }

                    function OC(i, a, c) {
                        var d = Ge(i) ? uu : gI;
                        return c && hr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }
                    var SC = Ke(function(i, a) {
                            if (i == null) return [];
                            var c = a.length;
                            return c > 1 && hr(i, a[0], a[1]) ? a = [] : c > 2 && hr(a[0], a[1], a[2]) && (a = [a[0]]), zg(i, Jt(a, 1), [])
                        }),
                        nl = iA || function() {
                            return Xt.Date.now()
                        };

                    function AC(i, a) {
                        if (typeof a != "function") throw new Gr(l);
                        return i = We(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Wm(i, a, c) {
                        return a = c ? r : a, a = i && a == null ? i.length : a, Nn(i, oe, r, r, r, r, a)
                    }

                    function Vm(i, a) {
                        var c;
                        if (typeof a != "function") throw new Gr(l);
                        return i = We(i),
                            function() {
                                return --i > 0 && (c = a.apply(this, arguments)), i <= 1 && (a = r), c
                            }
                    }
                    var Zu = Ke(function(i, a, c) {
                            var d = B;
                            if (c.length) {
                                var v = Hn(c, Os(Zu));
                                d |= G
                            }
                            return Nn(i, d, a, c, v)
                        }),
                        Hm = Ke(function(i, a, c) {
                            var d = B | w;
                            if (c.length) {
                                var v = Hn(c, Os(Hm));
                                d |= G
                            }
                            return Nn(a, d, i, c, v)
                        });

                    function Km(i, a, c) {
                        a = c ? r : a;
                        var d = Nn(i, q, r, r, r, r, r, a);
                        return d.placeholder = Km.placeholder, d
                    }

                    function Ym(i, a, c) {
                        a = c ? r : a;
                        var d = Nn(i, j, r, r, r, r, r, a);
                        return d.placeholder = Ym.placeholder, d
                    }

                    function qm(i, a, c) {
                        var d, v, E, C, $, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new Gr(l);
                        a = Kr(a) || 0, wt(c) && (te = !!c.leading, ae = "maxWait" in c, E = ae ? Bt(Kr(c.maxWait) || 0, a) : E, me = "trailing" in c ? !!c.trailing : me);

                        function Ae(Pt) {
                            var nn = d,
                                kn = v;
                            return d = v = r, ee = Pt, C = i.apply(kn, nn), C
                        }

                        function Le(Pt) {
                            return ee = Pt, $ = Ca(Ye, a), te ? Ae(Pt) : C
                        }

                        function He(Pt) {
                            var nn = Pt - x,
                                kn = Pt - ee,
                                hv = a - nn;
                            return ae ? sr(hv, E - kn) : hv
                        }

                        function Pe(Pt) {
                            var nn = Pt - x,
                                kn = Pt - ee;
                            return x === r || nn >= a || nn < 0 || ae && kn >= E
                        }

                        function Ye() {
                            var Pt = nl();
                            if (Pe(Pt)) return Xe(Pt);
                            $ = Ca(Ye, He(Pt))
                        }

                        function Xe(Pt) {
                            return $ = r, me && d ? Ae(Pt) : (d = v = r, C)
                        }

                        function Lr() {
                            $ !== r && im($), ee = 0, d = x = v = $ = r
                        }

                        function pr() {
                            return $ === r ? C : Xe(nl())
                        }

                        function Pr() {
                            var Pt = nl(),
                                nn = Pe(Pt);
                            if (d = arguments, v = this, x = Pt, nn) {
                                if ($ === r) return Le(x);
                                if (ae) return im($), $ = Ca(Ye, a), Ae(x)
                            }
                            return $ === r && ($ = Ca(Ye, a)), C
                        }
                        return Pr.cancel = Lr, Pr.flush = pr, Pr
                    }
                    var IC = Ke(function(i, a) {
                            return Mg(i, 1, a)
                        }),
                        wC = Ke(function(i, a, c) {
                            return Mg(i, Kr(a) || 0, c)
                        });

                    function CC(i) {
                        return Nn(i, ue)
                    }

                    function il(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new Gr(l);
                        var c = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                E = c.cache;
                            if (E.has(v)) return E.get(v);
                            var C = i.apply(this, d);
                            return c.cache = E.set(v, C) || E, C
                        };
                        return c.cache = new(il.Cache || wn), c
                    }
                    il.Cache = wn;

                    function sl(i) {
                        if (typeof i != "function") throw new Gr(l);
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

                    function NC(i) {
                        return Vm(2, i)
                    }
                    var $C = mI(function(i, a) {
                            a = a.length == 1 && Ge(a[0]) ? At(a[0], Nr(Re())) : At(Jt(a, 1), Nr(Re()));
                            var c = a.length;
                            return Ke(function(d) {
                                for (var v = -1, E = sr(d.length, c); ++v < E;) d[v] = a[v].call(this, d[v]);
                                return Cr(i, this, d)
                            })
                        }),
                        Qu = Ke(function(i, a) {
                            var c = Hn(a, Os(Qu));
                            return Nn(i, G, r, a, c)
                        }),
                        zm = Ke(function(i, a) {
                            var c = Hn(a, Os(zm));
                            return Nn(i, J, r, a, c)
                        }),
                        RC = $n(function(i, a) {
                            return Nn(i, le, r, r, r, a)
                        });

                    function LC(i, a) {
                        if (typeof i != "function") throw new Gr(l);
                        return a = a === r ? a : We(a), Ke(i, a)
                    }

                    function PC(i, a) {
                        if (typeof i != "function") throw new Gr(l);
                        return a = a == null ? 0 : Bt(We(a), 0), Ke(function(c) {
                            var d = c[a],
                                v = Xn(c, 0, a);
                            return d && Vn(v, d), Cr(i, this, v)
                        })
                    }

                    function kC(i, a, c) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new Gr(l);
                        return wt(c) && (d = "leading" in c ? !!c.leading : d, v = "trailing" in c ? !!c.trailing : v), qm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function DC(i) {
                        return Wm(i, 1)
                    }

                    function xC(i, a) {
                        return Qu(Mu(a), i)
                    }

                    function MC() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Ge(i) ? i : [i]
                    }

                    function FC(i) {
                        return Wr(i, T)
                    }

                    function UC(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, T, a)
                    }

                    function BC(i) {
                        return Wr(i, y | T)
                    }

                    function GC(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, y | T, a)
                    }

                    function jC(i, a) {
                        return a == null || xg(i, a, Kt(a))
                    }

                    function rn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var WC = Jo(Au),
                        VC = Jo(function(i, a) {
                            return i >= a
                        }),
                        ki = jg(function() {
                            return arguments
                        }()) ? jg : function(i) {
                            return Nt(i) && dt.call(i, "callee") && !Cg.call(i, "callee")
                        },
                        Ge = K.isArray,
                        HC = cg ? Nr(cg) : QA;

                    function Er(i) {
                        return i != null && al(i.length) && !Ln(i)
                    }

                    function Lt(i) {
                        return Nt(i) && Er(i)
                    }

                    function KC(i) {
                        return i === !0 || i === !1 || Nt(i) && dr(i) == St
                    }
                    var Jn = aA || ff,
                        YC = ug ? Nr(ug) : eI;

                    function qC(i) {
                        return Nt(i) && i.nodeType === 1 && !Na(i)
                    }

                    function zC(i) {
                        if (i == null) return !0;
                        if (Er(i) && (Ge(i) || typeof i == "string" || typeof i.splice == "function" || Jn(i) || Ss(i) || ki(i))) return !i.length;
                        var a = ar(i);
                        if (a == p || a == re) return !i.size;
                        if (wa(i)) return !Cu(i).length;
                        for (var c in i)
                            if (dt.call(i, c)) return !1;
                        return !0
                    }

                    function XC(i, a) {
                        return Sa(i, a)
                    }

                    function JC(i, a, c) {
                        c = typeof c == "function" ? c : r;
                        var d = c ? c(i, a) : r;
                        return d === r ? Sa(i, a, r, c) : !!d
                    }

                    function ef(i) {
                        if (!Nt(i)) return !1;
                        var a = dr(i);
                        return a == Ht || a == xt || typeof i.message == "string" && typeof i.name == "string" && !Na(i)
                    }

                    function ZC(i) {
                        return typeof i == "number" && $g(i)
                    }

                    function Ln(i) {
                        if (!wt(i)) return !1;
                        var a = dr(i);
                        return a == Mt || a == m || a == ot || a == ce
                    }

                    function Xm(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function al(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function wt(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Nt(i) {
                        return i != null && typeof i == "object"
                    }
                    var Jm = fg ? Nr(fg) : rI;

                    function QC(i, a) {
                        return i === a || wu(i, a, Vu(a))
                    }

                    function eN(i, a, c) {
                        return c = typeof c == "function" ? c : r, wu(i, a, Vu(a), c)
                    }

                    function tN(i) {
                        return Zm(i) && i != +i
                    }

                    function rN(i) {
                        if (UI(i)) throw new Ue(o);
                        return Wg(i)
                    }

                    function nN(i) {
                        return i === null
                    }

                    function iN(i) {
                        return i == null
                    }

                    function Zm(i) {
                        return typeof i == "number" || Nt(i) && dr(i) == A
                    }

                    function Na(i) {
                        if (!Nt(i) || dr(i) != U) return !1;
                        var a = Po(i);
                        if (a === null) return !0;
                        var c = dt.call(a, "constructor") && a.constructor;
                        return typeof c == "function" && c instanceof c && No.call(c) == eA
                    }
                    var tf = dg ? Nr(dg) : nI;

                    function sN(i) {
                        return Xm(i) && i >= -ve && i <= ve
                    }
                    var Qm = hg ? Nr(hg) : iI;

                    function ol(i) {
                        return typeof i == "string" || !Ge(i) && Nt(i) && dr(i) == N
                    }

                    function Rr(i) {
                        return typeof i == "symbol" || Nt(i) && dr(i) == W
                    }
                    var Ss = pg ? Nr(pg) : sI;

                    function aN(i) {
                        return i === r
                    }

                    function oN(i) {
                        return Nt(i) && ar(i) == pe
                    }

                    function lN(i) {
                        return Nt(i) && dr(i) == $e
                    }
                    var cN = Jo(Nu),
                        uN = Jo(function(i, a) {
                            return i <= a
                        });

                    function ev(i) {
                        if (!i) return [];
                        if (Er(i)) return ol(i) ? en(i) : _r(i);
                        if (ma && i[ma]) return jS(i[ma]());
                        var a = ar(i),
                            c = a == p ? mu : a == re ? Io : As;
                        return c(i)
                    }

                    function Pn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Kr(i), i === Ee || i === -Ee) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var a = Pn(i),
                            c = a % 1;
                        return a === a ? c ? a - c : a : 0
                    }

                    function tv(i) {
                        return i ? $i(We(i), 0, je) : 0
                    }

                    function Kr(i) {
                        if (typeof i == "number") return i;
                        if (Rr(i)) return Fe;
                        if (wt(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = wt(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Eg(i);
                        var c = H0.test(i);
                        return c || Y0.test(i) ? AS(i.slice(2), c ? 2 : 8) : V0.test(i) ? Fe : +i
                    }

                    function rv(i) {
                        return gn(i, br(i))
                    }

                    function fN(i) {
                        return i ? $i(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function ct(i) {
                        return i == null ? "" : $r(i)
                    }
                    var dN = bs(function(i, a) {
                            if (wa(a) || Er(a)) {
                                gn(a, Kt(a), i);
                                return
                            }
                            for (var c in a) dt.call(a, c) && ba(i, c, a[c])
                        }),
                        nv = bs(function(i, a) {
                            gn(a, br(a), i)
                        }),
                        ll = bs(function(i, a, c, d) {
                            gn(a, br(a), i, d)
                        }),
                        hN = bs(function(i, a, c, d) {
                            gn(a, Kt(a), i, d)
                        }),
                        pN = $n(Tu);

                    function gN(i, a) {
                        var c = Es(i);
                        return a == null ? c : Dg(c, a)
                    }
                    var mN = Ke(function(i, a) {
                            i = pt(i);
                            var c = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && hr(a[0], a[1], v) && (d = 1); ++c < d;)
                                for (var E = a[c], C = br(E), $ = -1, x = C.length; ++$ < x;) {
                                    var ee = C[$],
                                        te = i[ee];
                                    (te === r || rn(te, vs[ee]) && !dt.call(i, ee)) && (i[ee] = E[ee])
                                }
                            return i
                        }),
                        vN = Ke(function(i) {
                            return i.push(r, Em), Cr(iv, r, i)
                        });

                    function yN(i, a) {
                        return mg(i, Re(a, 3), pn)
                    }

                    function _N(i, a) {
                        return mg(i, Re(a, 3), Su)
                    }

                    function EN(i, a) {
                        return i == null ? i : Ou(i, Re(a, 3), br)
                    }

                    function bN(i, a) {
                        return i == null ? i : Bg(i, Re(a, 3), br)
                    }

                    function TN(i, a) {
                        return i && pn(i, Re(a, 3))
                    }

                    function ON(i, a) {
                        return i && Su(i, Re(a, 3))
                    }

                    function SN(i) {
                        return i == null ? [] : Wo(i, Kt(i))
                    }

                    function AN(i) {
                        return i == null ? [] : Wo(i, br(i))
                    }

                    function rf(i, a, c) {
                        var d = i == null ? r : Ri(i, a);
                        return d === r ? c : d
                    }

                    function IN(i, a) {
                        return i != null && Om(i, a, zA)
                    }

                    function nf(i, a) {
                        return i != null && Om(i, a, XA)
                    }
                    var wN = gm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = $o.call(a)), i[a] = c
                        }, af(Tr)),
                        CN = gm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = $o.call(a)), dt.call(i, a) ? i[a].push(c) : i[a] = [c]
                        }, Re),
                        NN = Ke(Oa);

                    function Kt(i) {
                        return Er(i) ? Pg(i) : Cu(i)
                    }

                    function br(i) {
                        return Er(i) ? Pg(i, !0) : aI(i)
                    }

                    function $N(i, a) {
                        var c = {};
                        return a = Re(a, 3), pn(i, function(d, v, E) {
                            Cn(c, a(d, v, E), d)
                        }), c
                    }

                    function RN(i, a) {
                        var c = {};
                        return a = Re(a, 3), pn(i, function(d, v, E) {
                            Cn(c, v, a(d, v, E))
                        }), c
                    }
                    var LN = bs(function(i, a, c) {
                            Vo(i, a, c)
                        }),
                        iv = bs(function(i, a, c, d) {
                            Vo(i, a, c, d)
                        }),
                        PN = $n(function(i, a) {
                            var c = {};
                            if (i == null) return c;
                            var d = !1;
                            a = At(a, function(E) {
                                return E = zn(E, i), d || (d = E.length > 1), E
                            }), gn(i, ju(i), c), d && (c = Wr(c, y | b | T, wI));
                            for (var v = a.length; v--;) ku(c, a[v]);
                            return c
                        });

                    function kN(i, a) {
                        return sv(i, sl(Re(a)))
                    }
                    var DN = $n(function(i, a) {
                        return i == null ? {} : lI(i, a)
                    });

                    function sv(i, a) {
                        if (i == null) return {};
                        var c = At(ju(i), function(d) {
                            return [d]
                        });
                        return a = Re(a), Xg(i, c, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function xN(i, a, c) {
                        a = zn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var E = i == null ? r : i[mn(a[d])];
                            E === r && (d = v, E = c), i = Ln(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function MN(i, a, c) {
                        return i == null ? i : Aa(i, a, c)
                    }

                    function FN(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Aa(i, a, c, d)
                    }
                    var av = ym(Kt),
                        ov = ym(br);

                    function UN(i, a, c) {
                        var d = Ge(i),
                            v = d || Jn(i) || Ss(i);
                        if (a = Re(a, 4), c == null) {
                            var E = i && i.constructor;
                            v ? c = d ? new E : [] : wt(i) ? c = Ln(E) ? Es(Po(i)) : {} : c = {}
                        }
                        return (v ? Br : pn)(i, function(C, $, x) {
                            return a(c, C, $, x)
                        }), c
                    }

                    function BN(i, a) {
                        return i == null ? !0 : ku(i, a)
                    }

                    function GN(i, a, c) {
                        return i == null ? i : tm(i, a, Mu(c))
                    }

                    function jN(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : tm(i, a, Mu(c), d)
                    }

                    function As(i) {
                        return i == null ? [] : gu(i, Kt(i))
                    }

                    function WN(i) {
                        return i == null ? [] : gu(i, br(i))
                    }

                    function VN(i, a, c) {
                        return c === r && (c = a, a = r), c !== r && (c = Kr(c), c = c === c ? c : 0), a !== r && (a = Kr(a), a = a === a ? a : 0), $i(Kr(i), a, c)
                    }

                    function HN(i, a, c) {
                        return a = Pn(a), c === r ? (c = a, a = 0) : c = Pn(c), i = Kr(i), JA(i, a, c)
                    }

                    function KN(i, a, c) {
                        if (c && typeof c != "boolean" && hr(i, a, c) && (a = c = r), c === r && (typeof a == "boolean" ? (c = a, a = r) : typeof i == "boolean" && (c = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Pn(i), a === r ? (a = i, i = 0) : a = Pn(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (c || i % 1 || a % 1) {
                            var v = Rg();
                            return sr(i + v * (a - i + SS("1e-" + ((v + "").length - 1))), a)
                        }
                        return Ru(i, a)
                    }
                    var YN = Ts(function(i, a, c) {
                        return a = a.toLowerCase(), i + (c ? lv(a) : a)
                    });

                    function lv(i) {
                        return sf(ct(i).toLowerCase())
                    }

                    function cv(i) {
                        return i = ct(i), i && i.replace(z0, MS).replace(pS, "")
                    }

                    function qN(i, a, c) {
                        i = ct(i), a = $r(a);
                        var d = i.length;
                        c = c === r ? d : $i(We(c), 0, d);
                        var v = c;
                        return c -= a.length, c >= 0 && i.slice(c, v) == a
                    }

                    function zN(i) {
                        return i = ct(i), i && N0.test(i) ? i.replace(Bp, FS) : i
                    }

                    function XN(i) {
                        return i = ct(i), i && D0.test(i) ? i.replace(Qc, "\\$&") : i
                    }
                    var JN = Ts(function(i, a, c) {
                            return i + (c ? "-" : "") + a.toLowerCase()
                        }),
                        ZN = Ts(function(i, a, c) {
                            return i + (c ? " " : "") + a.toLowerCase()
                        }),
                        QN = dm("toLowerCase");

                    function e$(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? gs(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return Xo(Mo(v), c) + i + Xo(xo(v), c)
                    }

                    function t$(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? gs(i) : 0;
                        return a && d < a ? i + Xo(a - d, c) : i
                    }

                    function r$(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? gs(i) : 0;
                        return a && d < a ? Xo(a - d, c) + i : i
                    }

                    function n$(i, a, c) {
                        return c || a == null ? a = 0 : a && (a = +a), uA(ct(i).replace(eu, ""), a || 0)
                    }

                    function i$(i, a, c) {
                        return (c ? hr(i, a, c) : a === r) ? a = 1 : a = We(a), Lu(ct(i), a)
                    }

                    function s$() {
                        var i = arguments,
                            a = ct(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var a$ = Ts(function(i, a, c) {
                        return i + (c ? "_" : "") + a.toLowerCase()
                    });

                    function o$(i, a, c) {
                        return c && typeof c != "number" && hr(i, a, c) && (a = c = r), c = c === r ? je : c >>> 0, c ? (i = ct(i), i && (typeof a == "string" || a != null && !tf(a)) && (a = $r(a), !a && ps(i)) ? Xn(en(i), 0, c) : i.split(a, c)) : []
                    }
                    var l$ = Ts(function(i, a, c) {
                        return i + (c ? " " : "") + sf(a)
                    });

                    function c$(i, a, c) {
                        return i = ct(i), c = c == null ? 0 : $i(We(c), 0, i.length), a = $r(a), i.slice(c, c + a.length) == a
                    }

                    function u$(i, a, c) {
                        var d = _.templateSettings;
                        c && hr(i, a, c) && (a = r), i = ct(i), a = ll({}, a, d, _m);
                        var v = ll({}, a.imports, d.imports, _m),
                            E = Kt(v),
                            C = gu(v, E),
                            $, x, ee = 0,
                            te = a.interpolate || bo,
                            ae = "__p += '",
                            me = vu((a.escape || bo).source + "|" + te.source + "|" + (te === Gp ? W0 : bo).source + "|" + (a.evaluate || bo).source + "|$", "g"),
                            Ae = "//# sourceURL=" + (dt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++_S + "]") + `
`;
                        i.replace(me, function(Pe, Ye, Xe, Lr, pr, Pr) {
                            return Xe || (Xe = Lr), ae += i.slice(ee, Pr).replace(X0, US), Ye && ($ = !0, ae += `' +
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
                        else if (G0.test(Le)) throw new Ue(u);
                        ae = (x ? ae.replace(ir, "") : ae).replace(xe, "$1").replace(pa, "$1;"), ae = "function(" + (Le || "obj") + `) {
` + (Le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var He = fv(function() {
                            return st(E, Ae + "return " + ae).apply(r, C)
                        });
                        if (He.source = ae, ef(He)) throw He;
                        return He
                    }

                    function f$(i) {
                        return ct(i).toLowerCase()
                    }

                    function d$(i) {
                        return ct(i).toUpperCase()
                    }

                    function h$(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return Eg(i);
                        if (!i || !(a = $r(a))) return i;
                        var d = en(i),
                            v = en(a),
                            E = bg(d, v),
                            C = Tg(d, v) + 1;
                        return Xn(d, E, C).join("")
                    }

                    function p$(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.slice(0, Sg(i) + 1);
                        if (!i || !(a = $r(a))) return i;
                        var d = en(i),
                            v = Tg(d, en(a)) + 1;
                        return Xn(d, 0, v).join("")
                    }

                    function g$(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.replace(eu, "");
                        if (!i || !(a = $r(a))) return i;
                        var d = en(i),
                            v = bg(d, en(a));
                        return Xn(d, v).join("")
                    }

                    function m$(i, a) {
                        var c = Ne,
                            d = we;
                        if (wt(a)) {
                            var v = "separator" in a ? a.separator : v;
                            c = "length" in a ? We(a.length) : c, d = "omission" in a ? $r(a.omission) : d
                        }
                        i = ct(i);
                        var E = i.length;
                        if (ps(i)) {
                            var C = en(i);
                            E = C.length
                        }
                        if (c >= E) return i;
                        var $ = c - gs(d);
                        if ($ < 1) return d;
                        var x = C ? Xn(C, 0, $).join("") : i.slice(0, $);
                        if (v === r) return x + d;
                        if (C && ($ += x.length - $), tf(v)) {
                            if (i.slice($).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = vu(v.source, ct(jp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? $ : ae)
                            }
                        } else if (i.indexOf($r(v), $) != $) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function v$(i) {
                        return i = ct(i), i && C0.test(i) ? i.replace(Up, KS) : i
                    }
                    var y$ = Ts(function(i, a, c) {
                            return i + (c ? " " : "") + a.toUpperCase()
                        }),
                        sf = dm("toUpperCase");

                    function uv(i, a, c) {
                        return i = ct(i), a = c ? r : a, a === r ? GS(i) ? zS(i) : LS(i) : i.match(a) || []
                    }
                    var fv = Ke(function(i, a) {
                            try {
                                return Cr(i, r, a)
                            } catch (c) {
                                return ef(c) ? c : new Ue(c)
                            }
                        }),
                        _$ = $n(function(i, a) {
                            return Br(a, function(c) {
                                c = mn(c), Cn(i, c, Zu(i[c], i))
                            }), i
                        });

                    function E$(i) {
                        var a = i == null ? 0 : i.length,
                            c = Re();
                        return i = a ? At(i, function(d) {
                            if (typeof d[1] != "function") throw new Gr(l);
                            return [c(d[0]), d[1]]
                        }) : [], Ke(function(d) {
                            for (var v = -1; ++v < a;) {
                                var E = i[v];
                                if (Cr(E[0], this, d)) return Cr(E[1], this, d)
                            }
                        })
                    }

                    function b$(i) {
                        return KA(Wr(i, y))
                    }

                    function af(i) {
                        return function() {
                            return i
                        }
                    }

                    function T$(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var O$ = pm(),
                        S$ = pm(!0);

                    function Tr(i) {
                        return i
                    }

                    function of(i) {
                        return Vg(typeof i == "function" ? i : Wr(i, y))
                    }

                    function A$(i) {
                        return Kg(Wr(i, y))
                    }

                    function I$(i, a) {
                        return Yg(i, Wr(a, y))
                    }
                    var w$ = Ke(function(i, a) {
                            return function(c) {
                                return Oa(c, i, a)
                            }
                        }),
                        C$ = Ke(function(i, a) {
                            return function(c) {
                                return Oa(i, c, a)
                            }
                        });

                    function lf(i, a, c) {
                        var d = Kt(a),
                            v = Wo(a, d);
                        c == null && !(wt(a) && (v.length || !d.length)) && (c = a, a = i, i = this, v = Wo(a, Kt(a)));
                        var E = !(wt(c) && "chain" in c) || !!c.chain,
                            C = Ln(i);
                        return Br(v, function($) {
                            var x = a[$];
                            i[$] = x, C && (i.prototype[$] = function() {
                                var ee = this.__chain__;
                                if (E || ee) {
                                    var te = i(this.__wrapped__),
                                        ae = te.__actions__ = _r(this.__actions__);
                                    return ae.push({
                                        func: x,
                                        args: arguments,
                                        thisArg: i
                                    }), te.__chain__ = ee, te
                                }
                                return x.apply(i, Vn([this.value()], arguments))
                            })
                        }), i
                    }

                    function N$() {
                        return Xt._ === this && (Xt._ = tA), this
                    }

                    function cf() {}

                    function $$(i) {
                        return i = We(i), Ke(function(a) {
                            return qg(a, i)
                        })
                    }
                    var R$ = Uu(At),
                        L$ = Uu(gg),
                        P$ = Uu(uu);

                    function dv(i) {
                        return Ku(i) ? fu(mn(i)) : cI(i)
                    }

                    function k$(i) {
                        return function(a) {
                            return i == null ? r : Ri(i, a)
                        }
                    }
                    var D$ = mm(),
                        x$ = mm(!0);

                    function uf() {
                        return []
                    }

                    function ff() {
                        return !1
                    }

                    function M$() {
                        return {}
                    }

                    function F$() {
                        return ""
                    }

                    function U$() {
                        return !0
                    }

                    function B$(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var c = je,
                            d = sr(i, je);
                        a = Re(a), i -= je;
                        for (var v = pu(d, a); ++c < i;) a(c);
                        return v
                    }

                    function G$(i) {
                        return Ge(i) ? At(i, mn) : Rr(i) ? [i] : _r(Lm(ct(i)))
                    }

                    function j$(i) {
                        var a = ++QS;
                        return ct(i) + a
                    }
                    var W$ = zo(function(i, a) {
                            return i + a
                        }, 0),
                        V$ = Bu("ceil"),
                        H$ = zo(function(i, a) {
                            return i / a
                        }, 1),
                        K$ = Bu("floor");

                    function Y$(i) {
                        return i && i.length ? jo(i, Tr, Au) : r
                    }

                    function q$(i, a) {
                        return i && i.length ? jo(i, Re(a, 2), Au) : r
                    }

                    function z$(i) {
                        return yg(i, Tr)
                    }

                    function X$(i, a) {
                        return yg(i, Re(a, 2))
                    }

                    function J$(i) {
                        return i && i.length ? jo(i, Tr, Nu) : r
                    }

                    function Z$(i, a) {
                        return i && i.length ? jo(i, Re(a, 2), Nu) : r
                    }
                    var Q$ = zo(function(i, a) {
                            return i * a
                        }, 1),
                        eR = Bu("round"),
                        tR = zo(function(i, a) {
                            return i - a
                        }, 0);

                    function rR(i) {
                        return i && i.length ? hu(i, Tr) : 0
                    }

                    function nR(i, a) {
                        return i && i.length ? hu(i, Re(a, 2)) : 0
                    }
                    return _.after = AC, _.ary = Wm, _.assign = dN, _.assignIn = nv, _.assignInWith = ll, _.assignWith = hN, _.at = pN, _.before = Vm, _.bind = Zu, _.bindAll = _$, _.bindKey = Hm, _.castArray = MC, _.chain = Bm, _.chunk = KI, _.compact = YI, _.concat = qI, _.cond = E$, _.conforms = b$, _.constant = af, _.countBy = rC, _.create = gN, _.curry = Km, _.curryRight = Ym, _.debounce = qm, _.defaults = mN, _.defaultsDeep = vN, _.defer = IC, _.delay = wC, _.difference = zI, _.differenceBy = XI, _.differenceWith = JI, _.drop = ZI, _.dropRight = QI, _.dropRightWhile = ew, _.dropWhile = tw, _.fill = rw, _.filter = iC, _.flatMap = oC, _.flatMapDeep = lC, _.flatMapDepth = cC, _.flatten = xm, _.flattenDeep = nw, _.flattenDepth = iw, _.flip = CC, _.flow = O$, _.flowRight = S$, _.fromPairs = sw, _.functions = SN, _.functionsIn = AN, _.groupBy = uC, _.initial = ow, _.intersection = lw, _.intersectionBy = cw, _.intersectionWith = uw, _.invert = wN, _.invertBy = CN, _.invokeMap = dC, _.iteratee = of, _.keyBy = hC, _.keys = Kt, _.keysIn = br, _.map = rl, _.mapKeys = $N, _.mapValues = RN, _.matches = A$, _.matchesProperty = I$, _.memoize = il, _.merge = LN, _.mergeWith = iv, _.method = w$, _.methodOf = C$, _.mixin = lf, _.negate = sl, _.nthArg = $$, _.omit = PN, _.omitBy = kN, _.once = NC, _.orderBy = pC, _.over = R$, _.overArgs = $C, _.overEvery = L$, _.overSome = P$, _.partial = Qu, _.partialRight = zm, _.partition = gC, _.pick = DN, _.pickBy = sv, _.property = dv, _.propertyOf = k$, _.pull = pw, _.pullAll = Fm, _.pullAllBy = gw, _.pullAllWith = mw, _.pullAt = vw, _.range = D$, _.rangeRight = x$, _.rearg = RC, _.reject = yC, _.remove = yw, _.rest = LC, _.reverse = Xu, _.sampleSize = EC, _.set = MN, _.setWith = FN, _.shuffle = bC, _.slice = _w, _.sortBy = SC, _.sortedUniq = Iw, _.sortedUniqBy = ww, _.split = o$, _.spread = PC, _.tail = Cw, _.take = Nw, _.takeRight = $w, _.takeRightWhile = Rw, _.takeWhile = Lw, _.tap = Yw, _.throttle = kC, _.thru = tl, _.toArray = ev, _.toPairs = av, _.toPairsIn = ov, _.toPath = G$, _.toPlainObject = rv, _.transform = UN, _.unary = DC, _.union = Pw, _.unionBy = kw, _.unionWith = Dw, _.uniq = xw, _.uniqBy = Mw, _.uniqWith = Fw, _.unset = BN, _.unzip = Ju, _.unzipWith = Um, _.update = GN, _.updateWith = jN, _.values = As, _.valuesIn = WN, _.without = Uw, _.words = uv, _.wrap = xC, _.xor = Bw, _.xorBy = Gw, _.xorWith = jw, _.zip = Ww, _.zipObject = Vw, _.zipObjectDeep = Hw, _.zipWith = Kw, _.entries = av, _.entriesIn = ov, _.extend = nv, _.extendWith = ll, lf(_, _), _.add = W$, _.attempt = fv, _.camelCase = YN, _.capitalize = lv, _.ceil = V$, _.clamp = VN, _.clone = FC, _.cloneDeep = BC, _.cloneDeepWith = GC, _.cloneWith = UC, _.conformsTo = jC, _.deburr = cv, _.defaultTo = T$, _.divide = H$, _.endsWith = qN, _.eq = rn, _.escape = zN, _.escapeRegExp = XN, _.every = nC, _.find = sC, _.findIndex = km, _.findKey = yN, _.findLast = aC, _.findLastIndex = Dm, _.findLastKey = _N, _.floor = K$, _.forEach = Gm, _.forEachRight = jm, _.forIn = EN, _.forInRight = bN, _.forOwn = TN, _.forOwnRight = ON, _.get = rf, _.gt = WC, _.gte = VC, _.has = IN, _.hasIn = nf, _.head = Mm, _.identity = Tr, _.includes = fC, _.indexOf = aw, _.inRange = HN, _.invoke = NN, _.isArguments = ki, _.isArray = Ge, _.isArrayBuffer = HC, _.isArrayLike = Er, _.isArrayLikeObject = Lt, _.isBoolean = KC, _.isBuffer = Jn, _.isDate = YC, _.isElement = qC, _.isEmpty = zC, _.isEqual = XC, _.isEqualWith = JC, _.isError = ef, _.isFinite = ZC, _.isFunction = Ln, _.isInteger = Xm, _.isLength = al, _.isMap = Jm, _.isMatch = QC, _.isMatchWith = eN, _.isNaN = tN, _.isNative = rN, _.isNil = iN, _.isNull = nN, _.isNumber = Zm, _.isObject = wt, _.isObjectLike = Nt, _.isPlainObject = Na, _.isRegExp = tf, _.isSafeInteger = sN, _.isSet = Qm, _.isString = ol, _.isSymbol = Rr, _.isTypedArray = Ss, _.isUndefined = aN, _.isWeakMap = oN, _.isWeakSet = lN, _.join = fw, _.kebabCase = JN, _.last = Hr, _.lastIndexOf = dw, _.lowerCase = ZN, _.lowerFirst = QN, _.lt = cN, _.lte = uN, _.max = Y$, _.maxBy = q$, _.mean = z$, _.meanBy = X$, _.min = J$, _.minBy = Z$, _.stubArray = uf, _.stubFalse = ff, _.stubObject = M$, _.stubString = F$, _.stubTrue = U$, _.multiply = Q$, _.nth = hw, _.noConflict = N$, _.noop = cf, _.now = nl, _.pad = e$, _.padEnd = t$, _.padStart = r$, _.parseInt = n$, _.random = KN, _.reduce = mC, _.reduceRight = vC, _.repeat = i$, _.replace = s$, _.result = xN, _.round = eR, _.runInContext = k, _.sample = _C, _.size = TC, _.snakeCase = a$, _.some = OC, _.sortedIndex = Ew, _.sortedIndexBy = bw, _.sortedIndexOf = Tw, _.sortedLastIndex = Ow, _.sortedLastIndexBy = Sw, _.sortedLastIndexOf = Aw, _.startCase = l$, _.startsWith = c$, _.subtract = tR, _.sum = rR, _.sumBy = nR, _.template = u$, _.times = B$, _.toFinite = Pn, _.toInteger = We, _.toLength = tv, _.toLower = f$, _.toNumber = Kr, _.toSafeInteger = fN, _.toString = ct, _.toUpper = d$, _.trim = h$, _.trimEnd = p$, _.trimStart = g$, _.truncate = m$, _.unescape = v$, _.uniqueId = j$, _.upperCase = y$, _.upperFirst = sf, _.each = Gm, _.eachRight = jm, _.first = Mm, lf(_, function() {
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
                            return d.__filtered__ ? d.__takeCount__ = sr(c, d.__takeCount__) : d.__views__.push({
                                size: sr(c, je),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, qe.prototype[i + "Right"] = function(c) {
                            return this.reverse()[i](c).reverse()
                        }
                    }), Br(["filter", "map", "takeWhile"], function(i, a) {
                        var c = a + 1,
                            d = c == F || c == de;
                        qe.prototype[i] = function(v) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: Re(v, 3),
                                type: c
                            }), E.__filtered__ = E.__filtered__ || d, E
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
                            return Oa(c, i, a)
                        })
                    }), qe.prototype.reject = function(i) {
                        return this.filter(sl(Re(i)))
                    }, qe.prototype.slice = function(i, a) {
                        i = We(i);
                        var c = this;
                        return c.__filtered__ && (i > 0 || a < 0) ? new qe(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), a !== r && (a = We(a), c = a < 0 ? c.dropRight(-a) : c.take(a - i)), c)
                    }, qe.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, qe.prototype.toArray = function() {
                        return this.take(je)
                    }, pn(qe.prototype, function(i, a) {
                        var c = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = _[d ? "take" + (a == "last" ? "Right" : "") : a],
                            E = d || /^find/.test(a);
                        !v || (_.prototype[a] = function() {
                            var C = this.__wrapped__,
                                $ = d ? [1] : arguments,
                                x = C instanceof qe,
                                ee = $[0],
                                te = x || Ge(C),
                                ae = function(Ye) {
                                    var Xe = v.apply(_, Vn([Ye], $));
                                    return d && me ? Xe[0] : Xe
                                };
                            te && c && typeof ee == "function" && ee.length != 1 && (x = te = !1);
                            var me = this.__chain__,
                                Ae = !!this.__actions__.length,
                                Le = E && !me,
                                He = x && !Ae;
                            if (!E && te) {
                                C = He ? C : new qe(this);
                                var Pe = i.apply(C, $);
                                return Pe.__actions__.push({
                                    func: tl,
                                    args: [ae],
                                    thisArg: r
                                }), new jr(Pe, me)
                            }
                            return Le && He ? i.apply(this, $) : (Pe = this.thru(ae), Le ? d ? Pe.value()[0] : Pe.value() : Pe)
                        })
                    }), Br(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = wo[i],
                            c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        _.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var E = this.value();
                                return a.apply(Ge(E) ? E : [], v)
                            }
                            return this[c](function(C) {
                                return a.apply(Ge(C) ? C : [], v)
                            })
                        }
                    }), pn(qe.prototype, function(i, a) {
                        var c = _[a];
                        if (c) {
                            var d = c.name + "";
                            dt.call(_s, d) || (_s[d] = []), _s[d].push({
                                name: a,
                                func: c
                            })
                        }
                    }), _s[qo(r, w).name] = [{
                        name: "wrapper",
                        func: r
                    }], qe.prototype.clone = vA, qe.prototype.reverse = yA, qe.prototype.value = _A, _.prototype.at = qw, _.prototype.chain = zw, _.prototype.commit = Xw, _.prototype.next = Jw, _.prototype.plant = Qw, _.prototype.reverse = eC, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = tC, _.prototype.first = _.prototype.head, ma && (_.prototype[ma] = Zw), _
                },
                ms = XS();
            Ii ? ((Ii.exports = ms)._ = ms, au._ = ms) : Xt._ = ms
        }).call(Dt)
    })($d, $d.exports);
    const q5 = it({
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
                this.onResizeWithContext = $d.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new b8(e, t);
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
        z5 = {
            class: "draw"
        },
        X5 = {
            ref: "content",
            class: "content"
        },
        J5 = {
            class: "constrain"
        },
        Z5 = {
            key: 0
        };

    function Q5(e, t, r, n, s, o) {
        const l = Rt("bb");
        return V(), z("div", z5, [Z("div", X5, [Z("div", J5, [e.player.prompt ? Ce((V(), z("div", Z5, null, 512)), [
            [l, e.player.prompt]
        ]) : Oe("", !0), Z("div", {
            ref: "stage",
            class: "stage",
            style: ic(e.stageDimensions)
        }, null, 4), Z("button", {
            onClick: t[0] || (t[0] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, _t(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const e6 = ze(q5, [
            ["render", Q5]
        ]),
        t6 = it({
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, Hl.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        r6 = ["textContent"],
        n6 = ["textContent"],
        i6 = ["textContent"],
        s6 = ["textContent"];

    function a6(e, t, r, n, s, o) {
        const l = Rt("t");
        return V(), z("div", {
            class: Me(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (V(), z("p", {
            key: 0,
            class: Me(e.localClasses.message),
            textContent: _t(e.joinedCountText)
        }, null, 10, r6)) : Oe("", !0), e.player.hasControls ? (V(), z(et, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (V(), z("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, _t(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? (V(), z("button", {
            key: 1,
            class: Me(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: _t(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, n6)) : Oe("", !0), e.player.status === "countdown" ? (V(), z("button", {
            key: 2,
            class: Me(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: _t(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, i6)) : Oe("", !0)], 64)) : e.player.gamepadStart ? (V(), z(et, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (V(), z("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, _t(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? Ce((V(), z("p", {
            key: 1,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Oe("", !0), e.player.status === "countdown" ? Ce((V(), z("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Oe("", !0)], 64)) : (V(), z(et, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (V(), z("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, _t(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? (V(), z("p", {
            key: 1,
            class: Me(e.localClasses.status)
        }, _t(e.waitingForVIPText), 3)) : Oe("", !0), e.player.status === "countdown" ? Ce((V(), z("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Oe("", !0)], 64)), e.messageLocation === "bottom" ? (V(), z("p", {
            key: 4,
            class: Me(e.localClasses.message),
            textContent: _t(e.joinedCountText)
        }, null, 10, s6)) : Oe("", !0)], 2)
    }
    const S1 = ze(t6, [
            ["render", a6]
        ]),
        o6 = it({
            components: {
                LobbyActions: S1
            },
            props: {
                player: Object
            }
        }),
        l6 = {
            class: "lobby"
        },
        c6 = {
            class: "constrain"
        };

    function u6(e, t, r, n, s, o) {
        const l = $t("LobbyActions");
        return V(), z("div", l6, [Z("div", c6, [rt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const f6 = ze(o6, [
            ["render", u6]
        ]),
        d6 = it({
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, Hl.gameStarted(this.$ecastRoom.appTag, e)
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

    function h6(e, t, r, n, s, o) {
        const l = Rt("t");
        return e.player && e.player.status ? (V(), z("div", {
            key: 0,
            class: Me(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ce((V(), z("p", {
            key: 0,
            class: Me(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Oe("", !0), e.player.hasControls ? (V(), z(et, {
            key: 1
        }, [e.player.status === "waiting" ? Ce((V(), z("button", {
            key: 0,
            class: Me(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Oe("", !0), e.player.status === "waiting" ? Ce((V(), z("button", {
            key: 1,
            class: Me(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Oe("", !0), e.player.status === "countdown" ? Ce((V(), z("button", {
            key: 2,
            class: Me(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : Oe("", !0)], 64)) : e.player.gamepadStart ? Ce((V(), z("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (V(), z("p", {
            key: 3,
            class: Me(e.localClasses.status)
        }, _t(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ce((V(), z("p", {
            key: 4,
            class: Me(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Oe("", !0)], 2)) : Oe("", !0)
    }
    const A1 = ze(d6, [
            ["render", h6]
        ]),
        p6 = it({
            components: {
                PostGameActions: A1
            },
            props: {
                player: Object
            }
        }),
        g6 = {
            class: "post-game"
        },
        m6 = {
            class: "constrain"
        };

    function v6(e, t, r, n, s, o) {
        const l = $t("PostGameActions");
        return V(), z("div", g6, [Z("div", m6, [rt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const y6 = ze(p6, [
            ["render", v6]
        ]),
        _6 = it({
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
                        if (e && e instanceof Ar.ObjectEntity) return !0
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
        E6 = {
            class: "single-text-entry"
        },
        b6 = {
            class: "constrain"
        },
        T6 = {
            key: 0
        },
        O6 = {
            key: 1,
            for: "input"
        },
        S6 = ["value", "rows", "placeholder", "disabled"],
        A6 = ["value", "placeholder", "disabled"];

    function I6(e, t, r, n, s, o) {
        const l = Rt("bb");
        return V(), z("div", E6, [Z("div", b6, [e.player.prompt ? Ce((V(), z("p", T6, null, 512)), [
            [l, e.player.prompt]
        ]) : Oe("", !0), e.player.label ? Ce((V(), z("label", O6, null, 512)), [
            [l, e.player.label]
        ]) : Oe("", !0), e.player.isMultiline ? (V(), z("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, S6)) : (V(), z("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, A6)), Ce(Z("button", {
            onClick: t[2] || (t[2] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const w6 = ze(_6, [
            ["render", I6]
        ]),
        C6 = it({
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
                        if (e && e instanceof Ar.ObjectEntity) return !0
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
        N6 = {
            class: "multi-text-entry"
        },
        $6 = {
            class: "constrain"
        },
        R6 = {
            key: 0
        },
        L6 = ["for"],
        P6 = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        k6 = ["id", "value", "placeholder", "disabled", "onInput"];

    function D6(e, t, r, n, s, o) {
        const l = Rt("bb");
        return V(), z("div", N6, [Z("div", $6, [e.player.prompt ? Ce((V(), z("p", R6, null, 512)), [
            [l, e.player.prompt]
        ]) : Oe("", !0), (V(!0), z(et, null, un(e.player.inputs, (u, f) => (V(), z(et, null, [u.label ? Ce((V(), z("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, L6)), [
            [l, u.label]
        ]) : Oe("", !0), u.isMultiline ? (V(), z("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, P6)) : (V(), z("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, k6))], 64))), 256)), Ce(Z("button", {
            onClick: t[0] || (t[0] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const x6 = ze(C6, [
            ["render", D6]
        ]),
        M6 = it({
            props: {
                player: Object
            }
        }),
        F6 = {
            class: "waiting"
        },
        U6 = {
            class: "constrain"
        },
        B6 = {
            key: 0
        };

    function G6(e, t, r, n, s, o) {
        const l = Rt("bb");
        return V(), z("div", F6, [Z("div", U6, [e.player.message ? Ce((V(), z("p", B6, null, 512)), [
            [l, e.player.message]
        ]) : Oe("", !0)])])
    }
    const j6 = ze(M6, [
            ["render", G6]
        ]),
        W6 = it({
            components: {
                Choices: j2,
                Doodle: Y5,
                Draw: e6,
                Lobby: f6,
                PostGame: y6,
                SingleTextEntry: w6,
                MultiTextEntry: x6,
                Waiting: j6
            },
            props: {
                applyStyling: {
                    type: Boolean,
                    default: !0
                },
                player: Object
            }
        });

    function V6(e, t, r, n, s, o) {
        return e.player ? (V(), er(yc(e.player.kind), {
            key: 0,
            player: e.player,
            class: Me({
                fallback: e.applyStyling
            })
        }, null, 8, ["player", "class"])) : Oe("", !0)
    }
    const H6 = ze(W6, [
            ["render", V6]
        ]),
        K6 = it({
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
                Hl.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    Hl.galleryClick(this.artifact.categoryId, "post_game"), ro.setAsViewed(0)
                }
            }
        }),
        Y6 = ["href", "aria-label"];

    function q6(e, t, r, n, s, o) {
        return e.link ? (V(), z("a", {
            key: 0,
            class: Me([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [Nb(e.$slots, "default")], 10, Y6)) : Oe("", !0)
    }
    const z6 = ze(K6, [
            ["render", q6]
        ]),
        X6 = it({
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
                    if (this.sanitizers && (t.value = O1.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        J6 = ["value"];

    function Z6(e, t, r, n, s, o) {
        return V(), z("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l))
        }, null, 40, J6)
    }
    const I1 = ze(X6, [
        ["render", Z6]
    ]);
    var Ui, vl, Wa = typeof Map == "function" ? new Map : (Ui = [], vl = [], {
            has: function(e) {
                return Ui.indexOf(e) > -1
            },
            get: function(e) {
                return vl[Ui.indexOf(e)]
            },
            set: function(e, t) {
                Ui.indexOf(e) === -1 && (Ui.push(e), vl.push(t))
            },
            delete: function(e) {
                var t = Ui.indexOf(e);
                t > -1 && (Ui.splice(t, 1), vl.splice(t, 1))
            }
        }),
        w1 = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        w1 = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function Q6(e) {
        var t = Wa.get(e);
        t && t.destroy()
    }

    function eG(e) {
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
                            n.clientWidth !== l && b()
                        },
                        h = function(T) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", b, !1), n.removeEventListener("keyup", b, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", b, !1), Object.keys(T).forEach(function(R) {
                                n.style[R] = T[R]
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

                function g(T) {
                    var R = n.style.width;
                    n.style.width = "0px", n.style.width = R, n.style.overflowY = T
                }

                function y() {
                    if (n.scrollHeight !== 0) {
                        var T = function(D) {
                                for (var B = []; D && D.parentNode && D.parentNode instanceof Element;) D.parentNode.scrollTop && B.push({
                                    node: D.parentNode,
                                    scrollTop: D.parentNode.scrollTop
                                }), D = D.parentNode;
                                return B
                            }(n),
                            R = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", l = n.clientWidth, T.forEach(function(D) {
                            D.node.scrollTop = D.scrollTop
                        }), R && (document.documentElement.scrollTop = R)
                    }
                }

                function b() {
                    y();
                    var T = Math.round(parseFloat(n.style.height)),
                        R = window.getComputedStyle(n, null),
                        D = R.boxSizing === "content-box" ? Math.round(parseFloat(R.height)) : n.offsetHeight;
                    if (D < T ? R.overflowY === "hidden" && (g("scroll"), y(), D = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : R.overflowY !== "hidden" && (g("hidden"), y(), D = R.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== D) {
                        u = D;
                        var B = w1("autosize:resized");
                        try {
                            n.dispatchEvent(B)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], Q6), e
    }, xa.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], eG), e
    });
    var tG = xa,
        rG = {
            exports: {}
        },
        yl = function(e) {
            return e && e.Math == Math && e
        },
        Mr = yl(typeof globalThis == "object" && globalThis) || yl(typeof window == "object" && window) || yl(typeof self == "object" && self) || yl(typeof Dt == "object" && Dt) || function() {
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
        nG = Fr,
        Ei = !nG(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        iG = Fr,
        ip = !iG(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        sG = ip,
        _l = Function.prototype.call,
        bi = sG ? _l.bind(_l) : function() {
            return _l.apply(_l, arguments)
        },
        C1 = {},
        N1 = {}.propertyIsEnumerable,
        $1 = Object.getOwnPropertyDescriptor,
        aG = $1 && !N1.call({
            1: 2
        }, 1);
    C1.f = aG ? function(t) {
        var r = $1(this, t);
        return !!r && r.enumerable
    } : N1;
    var R1 = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        L1 = ip,
        P1 = Function.prototype,
        oG = P1.bind,
        Rd = P1.call,
        lG = L1 && oG.bind(Rd, Rd),
        fr = L1 ? function(e) {
            return e && lG(e)
        } : function(e) {
            return e && function() {
                return Rd.apply(e, arguments)
            }
        },
        k1 = fr,
        cG = k1({}.toString),
        uG = k1("".slice),
        kc = function(e) {
            return uG(cG(e), 8, -1)
        },
        fG = fr,
        dG = Fr,
        hG = kc,
        $f = Object,
        pG = fG("".split),
        gG = dG(function() {
            return !$f("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return hG(e) == "String" ? pG(e, "") : $f(e)
        } : $f,
        mG = TypeError,
        ho = function(e) {
            if (e == null) throw mG("Can't call method on " + e);
            return e
        },
        vG = gG,
        yG = ho,
        Dc = function(e) {
            return vG(yG(e))
        },
        Ir = function(e) {
            return typeof e == "function"
        },
        _G = Ir,
        fa = function(e) {
            return typeof e == "object" ? e !== null : _G(e)
        },
        Rf = Mr,
        EG = Ir,
        bG = function(e) {
            return EG(e) ? e : void 0
        },
        xc = function(e, t) {
            return arguments.length < 2 ? bG(Rf[e]) : Rf[e] && Rf[e][t]
        },
        TG = fr,
        D1 = TG({}.isPrototypeOf),
        OG = xc,
        SG = OG("navigator", "userAgent") || "",
        x1 = Mr,
        Lf = SG,
        Gy = x1.process,
        jy = x1.Deno,
        Wy = Gy && Gy.versions || jy && jy.version,
        Vy = Wy && Wy.v8,
        sn, Jl;
    Vy && (sn = Vy.split("."), Jl = sn[0] > 0 && sn[0] < 4 ? 1 : +(sn[0] + sn[1]));
    !Jl && Lf && (sn = Lf.match(/Edge\/(\d+)/), (!sn || sn[1] >= 74) && (sn = Lf.match(/Chrome\/(\d+)/), sn && (Jl = +sn[1])));
    var AG = Jl,
        Hy = AG,
        IG = Fr,
        M1 = !!Object.getOwnPropertySymbols && !IG(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Hy && Hy < 41
        }),
        wG = M1,
        F1 = wG && !Symbol.sham && typeof Symbol.iterator == "symbol",
        CG = xc,
        NG = Ir,
        $G = D1,
        RG = F1,
        LG = Object,
        U1 = RG ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = CG("Symbol");
            return NG(t) && $G(t.prototype, LG(e))
        },
        PG = String,
        kG = function(e) {
            try {
                return PG(e)
            } catch {
                return "Object"
            }
        },
        DG = Ir,
        xG = kG,
        MG = TypeError,
        FG = function(e) {
            if (DG(e)) return e;
            throw MG(xG(e) + " is not a function")
        },
        UG = FG,
        sp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : UG(r)
        },
        Pf = bi,
        kf = Ir,
        Df = fa,
        BG = TypeError,
        GG = function(e, t) {
            var r, n;
            if (t === "string" && kf(r = e.toString) && !Df(n = Pf(r, e)) || kf(r = e.valueOf) && !Df(n = Pf(r, e)) || t !== "string" && kf(r = e.toString) && !Df(n = Pf(r, e))) return n;
            throw BG("Can't convert object to primitive value")
        },
        Mc = {
            exports: {}
        },
        Ky = Mr,
        jG = Object.defineProperty,
        ap = function(e, t) {
            try {
                jG(Ky, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Ky[e] = t
            }
            return t
        },
        WG = Mr,
        VG = ap,
        Yy = "__core-js_shared__",
        HG = WG[Yy] || VG(Yy, {}),
        op = HG,
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
    var KG = ho,
        YG = Object,
        B1 = function(e) {
            return YG(KG(e))
        },
        qG = fr,
        zG = B1,
        XG = qG({}.hasOwnProperty),
        Ti = Object.hasOwn || function(t, r) {
            return XG(zG(t), r)
        },
        JG = fr,
        ZG = 0,
        QG = Math.random(),
        e7 = JG(1 .toString),
        G1 = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + e7(++ZG + QG, 36)
        },
        t7 = Mr,
        r7 = Mc.exports,
        zy = Ti,
        n7 = G1,
        Xy = M1,
        j1 = F1,
        ws = r7("wks"),
        is = t7.Symbol,
        Jy = is && is.for,
        i7 = j1 ? is : is && is.withoutSetter || n7,
        us = function(e) {
            if (!zy(ws, e) || !(Xy || typeof ws[e] == "string")) {
                var t = "Symbol." + e;
                Xy && zy(is, e) ? ws[e] = is[e] : j1 && Jy ? ws[e] = Jy(t) : ws[e] = i7(t)
            }
            return ws[e]
        },
        s7 = bi,
        Zy = fa,
        Qy = U1,
        a7 = sp,
        o7 = GG,
        l7 = us,
        c7 = TypeError,
        u7 = l7("toPrimitive"),
        f7 = function(e, t) {
            if (!Zy(e) || Qy(e)) return e;
            var r = a7(e, u7),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = s7(r, e, t), !Zy(n) || Qy(n)) return n;
                throw c7("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), o7(e, t)
        },
        d7 = f7,
        h7 = U1,
        W1 = function(e) {
            var t = d7(e, "string");
            return h7(t) ? t : t + ""
        },
        p7 = Mr,
        e_ = fa,
        Ld = p7.document,
        g7 = e_(Ld) && e_(Ld.createElement),
        V1 = function(e) {
            return g7 ? Ld.createElement(e) : {}
        },
        m7 = Ei,
        v7 = Fr,
        y7 = V1,
        H1 = !m7 && !v7(function() {
            return Object.defineProperty(y7("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        _7 = Ei,
        E7 = bi,
        b7 = C1,
        T7 = R1,
        O7 = Dc,
        S7 = W1,
        A7 = Ti,
        I7 = H1,
        t_ = Object.getOwnPropertyDescriptor;
    np.f = _7 ? t_ : function(t, r) {
        if (t = O7(t), r = S7(r), I7) try {
            return t_(t, r)
        } catch {}
        if (A7(t, r)) return T7(!E7(b7.f, t, r), t[r])
    };
    var po = {},
        w7 = Ei,
        C7 = Fr,
        K1 = w7 && C7(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        N7 = fa,
        $7 = String,
        R7 = TypeError,
        fs = function(e) {
            if (N7(e)) return e;
            throw R7($7(e) + " is not an object")
        },
        L7 = Ei,
        P7 = H1,
        k7 = K1,
        El = fs,
        r_ = W1,
        D7 = TypeError,
        xf = Object.defineProperty,
        x7 = Object.getOwnPropertyDescriptor,
        Mf = "enumerable",
        Ff = "configurable",
        Uf = "writable";
    po.f = L7 ? k7 ? function(t, r, n) {
        if (El(t), r = r_(r), El(n), typeof t == "function" && r === "prototype" && "value" in n && Uf in n && !n[Uf]) {
            var s = x7(t, r);
            s && s[Uf] && (t[r] = n.value, n = {
                configurable: Ff in n ? n[Ff] : s[Ff],
                enumerable: Mf in n ? n[Mf] : s[Mf],
                writable: !1
            })
        }
        return xf(t, r, n)
    } : xf : function(t, r, n) {
        if (El(t), r = r_(r), El(n), P7) try {
            return xf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw D7("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var M7 = Ei,
        F7 = po,
        U7 = R1,
        lp = M7 ? function(e, t, r) {
            return F7.f(e, t, U7(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        Y1 = {
            exports: {}
        },
        Pd = Ei,
        B7 = Ti,
        q1 = Function.prototype,
        G7 = Pd && Object.getOwnPropertyDescriptor,
        cp = B7(q1, "name"),
        j7 = cp && function() {}.name === "something",
        W7 = cp && (!Pd || Pd && G7(q1, "name").configurable),
        V7 = {
            EXISTS: cp,
            PROPER: j7,
            CONFIGURABLE: W7
        },
        H7 = fr,
        K7 = Ir,
        kd = op,
        Y7 = H7(Function.toString);
    K7(kd.inspectSource) || (kd.inspectSource = function(e) {
        return Y7(e)
    });
    var z1 = kd.inspectSource,
        q7 = Mr,
        z7 = Ir,
        X7 = z1,
        n_ = q7.WeakMap,
        J7 = z7(n_) && /native code/.test(X7(n_)),
        Z7 = Mc.exports,
        Q7 = G1,
        i_ = Z7("keys"),
        X1 = function(e) {
            return i_[e] || (i_[e] = Q7(e))
        },
        up = {},
        ej = J7,
        J1 = Mr,
        Bf = fr,
        tj = fa,
        rj = lp,
        Gf = Ti,
        jf = op,
        nj = X1,
        ij = up,
        s_ = "Object already initialized",
        Dd = J1.TypeError,
        sj = J1.WeakMap,
        Zl, no, Ql, aj = function(e) {
            return Ql(e) ? no(e) : Zl(e, {})
        },
        oj = function(e) {
            return function(t) {
                var r;
                if (!tj(t) || (r = no(t)).type !== e) throw Dd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (ej || jf.state) {
        var Bi = jf.state || (jf.state = new sj),
            lj = Bf(Bi.get),
            a_ = Bf(Bi.has),
            cj = Bf(Bi.set);
        Zl = function(e, t) {
            if (a_(Bi, e)) throw new Dd(s_);
            return t.facade = e, cj(Bi, e, t), t
        }, no = function(e) {
            return lj(Bi, e) || {}
        }, Ql = function(e) {
            return a_(Bi, e)
        }
    } else {
        var Cs = nj("state");
        ij[Cs] = !0, Zl = function(e, t) {
            if (Gf(e, Cs)) throw new Dd(s_);
            return t.facade = e, rj(e, Cs, t), t
        }, no = function(e) {
            return Gf(e, Cs) ? e[Cs] : {}
        }, Ql = function(e) {
            return Gf(e, Cs)
        }
    }
    var Z1 = {
            set: Zl,
            get: no,
            has: Ql,
            enforce: aj,
            getterFor: oj
        },
        uj = Fr,
        fj = Ir,
        bl = Ti,
        xd = Ei,
        dj = V7.CONFIGURABLE,
        hj = z1,
        Q1 = Z1,
        pj = Q1.enforce,
        gj = Q1.get,
        Pl = Object.defineProperty,
        mj = xd && !uj(function() {
            return Pl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        vj = String(String).split("String"),
        yj = Y1.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!bl(e, "name") || dj && e.name !== t) && (xd ? Pl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), mj && r && bl(r, "arity") && e.length !== r.arity && Pl(e, "length", {
                value: r.arity
            });
            try {
                r && bl(r, "constructor") && r.constructor ? xd && Pl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = pj(e);
            return bl(n, "source") || (n.source = vj.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = yj(function() {
        return fj(this) && gj(this).source || hj(this)
    }, "toString");
    var _j = Ir,
        Ej = po,
        bj = Y1.exports,
        Tj = ap,
        eO = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (_j(r) && bj(r, o, n), n.global) s ? e[t] = r : Tj(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : Ej.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        tO = {},
        Oj = Math.ceil,
        Sj = Math.floor,
        Aj = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? Sj : Oj)(r)
        },
        Ij = Aj,
        Fc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : Ij(t)
        },
        wj = Fc,
        Cj = Math.max,
        Nj = Math.min,
        $j = function(e, t) {
            var r = wj(e);
            return r < 0 ? Cj(r + t, 0) : Nj(r, t)
        },
        Rj = Fc,
        Lj = Math.min,
        rO = function(e) {
            return e > 0 ? Lj(Rj(e), 9007199254740991) : 0
        },
        Pj = rO,
        kj = function(e) {
            return Pj(e.length)
        },
        Dj = Dc,
        xj = $j,
        Mj = kj,
        o_ = function(e) {
            return function(t, r, n) {
                var s = Dj(t),
                    o = Mj(s),
                    l = xj(n, o),
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
        Fj = {
            includes: o_(!0),
            indexOf: o_(!1)
        },
        Uj = fr,
        Wf = Ti,
        Bj = Dc,
        Gj = Fj.indexOf,
        jj = up,
        l_ = Uj([].push),
        nO = function(e, t) {
            var r = Bj(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Wf(jj, o) && Wf(r, o) && l_(s, o);
            for (; t.length > n;) Wf(r, o = t[n++]) && (~Gj(s, o) || l_(s, o));
            return s
        },
        fp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Wj = nO,
        Vj = fp,
        Hj = Vj.concat("length", "prototype");
    tO.f = Object.getOwnPropertyNames || function(t) {
        return Wj(t, Hj)
    };
    var iO = {};
    iO.f = Object.getOwnPropertySymbols;
    var Kj = xc,
        Yj = fr,
        qj = tO,
        zj = iO,
        Xj = fs,
        Jj = Yj([].concat),
        Zj = Kj("Reflect", "ownKeys") || function(t) {
            var r = qj.f(Xj(t)),
                n = zj.f;
            return n ? Jj(r, n(t)) : r
        },
        c_ = Ti,
        Qj = Zj,
        e9 = np,
        t9 = po,
        r9 = function(e, t, r) {
            for (var n = Qj(t), s = t9.f, o = e9.f, l = 0; l < n.length; l++) {
                var u = n[l];
                !c_(e, u) && !(r && c_(r, u)) && s(e, u, o(t, u))
            }
        },
        n9 = Fr,
        i9 = Ir,
        s9 = /#|\.prototype\./,
        go = function(e, t) {
            var r = o9[a9(e)];
            return r == c9 ? !0 : r == l9 ? !1 : i9(t) ? n9(t) : !!t
        },
        a9 = go.normalize = function(e) {
            return String(e).replace(s9, ".").toLowerCase()
        },
        o9 = go.data = {},
        l9 = go.NATIVE = "N",
        c9 = go.POLYFILL = "P",
        u9 = go,
        Vf = Mr,
        f9 = np.f,
        d9 = lp,
        h9 = eO,
        p9 = ap,
        g9 = r9,
        m9 = u9,
        sO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, l, u, f, h, g;
            if (n ? l = Vf : s ? l = Vf[r] || p9(r, {}) : l = (Vf[r] || {}).prototype, l)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = f9(l, u), f = g && g.value) : f = l[u], o = m9(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        g9(h, f)
                    }(e.sham || f && f.sham) && d9(h, "sham", !0), h9(l, u, h, e)
                }
        },
        v9 = fa,
        y9 = kc,
        _9 = us,
        E9 = _9("match"),
        b9 = function(e) {
            var t;
            return v9(e) && ((t = e[E9]) !== void 0 ? !!t : y9(e) == "RegExp")
        },
        T9 = us,
        O9 = T9("toStringTag"),
        aO = {};
    aO[O9] = "z";
    var S9 = String(aO) === "[object z]",
        A9 = S9,
        I9 = Ir,
        kl = kc,
        w9 = us,
        C9 = w9("toStringTag"),
        N9 = Object,
        $9 = kl(function() {
            return arguments
        }()) == "Arguments",
        R9 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        L9 = A9 ? kl : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = R9(t = N9(e), C9)) == "string" ? r : $9 ? kl(t) : (n = kl(t)) == "Object" && I9(t.callee) ? "Arguments" : n
        },
        P9 = L9,
        k9 = String,
        Uc = function(e) {
            if (P9(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return k9(e)
        },
        D9 = fs,
        oO = function() {
            var e = D9(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        x9 = bi,
        M9 = Ti,
        F9 = D1,
        U9 = oO,
        u_ = RegExp.prototype,
        B9 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in u_) && !M9(e, "flags") && F9(u_, e) ? x9(U9, e) : t
        },
        dp = fr,
        G9 = B1,
        j9 = Math.floor,
        Hf = dp("".charAt),
        W9 = dp("".replace),
        Kf = dp("".slice),
        V9 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        H9 = /\$([$&'`]|\d{1,2})/g,
        lO = function(e, t, r, n, s, o) {
            var l = r + e.length,
                u = n.length,
                f = H9;
            return s !== void 0 && (s = G9(s), f = V9), W9(o, f, function(h, g) {
                var y;
                switch (Hf(g, 0)) {
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
                        var b = +g;
                        if (b === 0) return h;
                        if (b > u) {
                            var T = j9(b / 10);
                            return T === 0 ? h : T <= u ? n[T - 1] === void 0 ? Hf(g, 1) : n[T - 1] + Hf(g, 1) : h
                        }
                        y = n[b - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        K9 = sO,
        Y9 = bi,
        hp = fr,
        f_ = ho,
        q9 = Ir,
        z9 = b9,
        Pa = Uc,
        X9 = sp,
        J9 = B9,
        Z9 = lO,
        Q9 = us,
        eW = Q9("replace"),
        tW = TypeError,
        cO = hp("".indexOf);
    hp("".replace);
    var d_ = hp("".slice),
        rW = Math.max,
        h_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : cO(e, t, r)
        };
    K9({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = f_(this),
                s, o, l, u, f, h, g, y, b, T = 0,
                R = 0,
                D = "";
            if (t != null) {
                if (s = z9(t), s && (o = Pa(f_(J9(t))), !~cO(o, "g"))) throw tW("`.replaceAll` does not allow non-global regexes");
                if (l = X9(t, eW), l) return Y9(l, t, n, r)
            }
            for (u = Pa(n), f = Pa(t), h = q9(r), h || (r = Pa(r)), g = f.length, y = rW(1, g), T = h_(u, f, 0); T !== -1;) b = h ? Pa(r(f, T, u)) : Z9(f, u, T, [], void 0, r), D += d_(u, R, T) + b, R = T + g, T = h_(u, f, T + y);
            return R < u.length && (D += d_(u, R)), D
        }
    });
    var pp = Fr,
        nW = Mr,
        gp = nW.RegExp,
        mp = pp(function() {
            var e = gp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        iW = mp || pp(function() {
            return !gp("a", "y").sticky
        }),
        sW = mp || pp(function() {
            var e = gp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        aW = {
            BROKEN_CARET: sW,
            MISSED_STICKY: iW,
            UNSUPPORTED_Y: mp
        },
        uO = {},
        oW = nO,
        lW = fp,
        cW = Object.keys || function(t) {
            return oW(t, lW)
        },
        uW = Ei,
        fW = K1,
        dW = po,
        hW = fs,
        pW = Dc,
        gW = cW;
    uO.f = uW && !fW ? Object.defineProperties : function(t, r) {
        hW(t);
        for (var n = pW(r), s = gW(r), o = s.length, l = 0, u; o > l;) dW.f(t, u = s[l++], n[u]);
        return t
    };
    var mW = xc,
        vW = mW("document", "documentElement"),
        yW = fs,
        _W = uO,
        p_ = fp,
        EW = up,
        bW = vW,
        TW = V1,
        OW = X1,
        g_ = ">",
        m_ = "<",
        Md = "prototype",
        Fd = "script",
        fO = OW("IE_PROTO"),
        Yf = function() {},
        dO = function(e) {
            return m_ + Fd + g_ + e + m_ + "/" + Fd + g_
        },
        v_ = function(e) {
            e.write(dO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        SW = function() {
            var e = TW("iframe"),
                t = "java" + Fd + ":",
                r;
            return e.style.display = "none", bW.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(dO("document.F=Object")), r.close(), r.F
        },
        Tl, Dl = function() {
            try {
                Tl = new ActiveXObject("htmlfile")
            } catch {}
            Dl = typeof document < "u" ? document.domain && Tl ? v_(Tl) : SW() : v_(Tl);
            for (var e = p_.length; e--;) delete Dl[Md][p_[e]];
            return Dl()
        };
    EW[fO] = !0;
    var AW = Object.create || function(t, r) {
            var n;
            return t !== null ? (Yf[Md] = yW(t), n = new Yf, Yf[Md] = null, n[fO] = t) : n = Dl(), r === void 0 ? n : _W.f(n, r)
        },
        IW = Fr,
        wW = Mr,
        CW = wW.RegExp,
        NW = IW(function() {
            var e = CW(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        $W = Fr,
        RW = Mr,
        LW = RW.RegExp,
        PW = $W(function() {
            var e = LW("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Ls = bi,
        Bc = fr,
        kW = Uc,
        DW = oO,
        xW = aW,
        MW = Mc.exports,
        FW = AW,
        UW = Z1.get,
        BW = NW,
        GW = PW,
        jW = MW("native-string-replace", String.prototype.replace),
        ec = RegExp.prototype.exec,
        Ud = ec,
        WW = Bc("".charAt),
        VW = Bc("".indexOf),
        HW = Bc("".replace),
        qf = Bc("".slice),
        Bd = function() {
            var e = /a/,
                t = /b*/g;
            return Ls(ec, e, "a"), Ls(ec, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        hO = xW.BROKEN_CARET,
        Gd = /()??/.exec("")[1] !== void 0,
        KW = Bd || Gd || hO || BW || GW;
    KW && (Ud = function(t) {
        var r = this,
            n = UW(r),
            s = kW(t),
            o = n.raw,
            l, u, f, h, g, y, b;
        if (o) return o.lastIndex = r.lastIndex, l = Ls(Ud, o, s), r.lastIndex = o.lastIndex, l;
        var T = n.groups,
            R = hO && r.sticky,
            D = Ls(DW, r),
            B = r.source,
            w = 0,
            H = s;
        if (R && (D = HW(D, "y", ""), VW(D, "g") === -1 && (D += "g"), H = qf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && WW(s, r.lastIndex - 1) !== `
`) && (B = "(?: " + B + ")", H = " " + H, w++), u = new RegExp("^(?:" + B + ")", D)), Gd && (u = new RegExp("^" + B + "$(?!\\s)", D)), Bd && (f = r.lastIndex), h = Ls(ec, R ? u : r, H), R ? h ? (h.input = qf(h.input, w), h[0] = qf(h[0], w), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Bd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), Gd && h && h.length > 1 && Ls(jW, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && T)
            for (h.groups = y = FW(null), g = 0; g < T.length; g++) b = T[g], y[b[0]] = h[b[1]];
        return h
    });
    var vp = Ud,
        YW = sO,
        y_ = vp;
    YW({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== y_
    }, {
        exec: y_
    });
    var qW = ip,
        pO = Function.prototype,
        __ = pO.apply,
        E_ = pO.call,
        zW = typeof Reflect == "object" && Reflect.apply || (qW ? E_.bind(__) : function() {
            return E_.apply(__, arguments)
        }),
        b_ = fr,
        T_ = eO,
        XW = vp,
        O_ = Fr,
        gO = us,
        JW = lp,
        ZW = gO("species"),
        zf = RegExp.prototype,
        QW = function(e, t, r, n) {
            var s = gO(e),
                o = !O_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                l = o && !O_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[ZW] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !l || r) {
                var u = b_(/./ [s]),
                    f = t(s, "" [e], function(h, g, y, b, T) {
                        var R = b_(h),
                            D = g.exec;
                        return D === XW || D === zf.exec ? o && !T ? {
                            done: !0,
                            value: u(g, y, b)
                        } : {
                            done: !0,
                            value: R(y, g, b)
                        } : {
                            done: !1
                        }
                    });
                T_(String.prototype, e, f[0]), T_(zf, s, f[1])
            }
            n && JW(zf[s], "sham", !0)
        },
        yp = fr,
        eV = Fc,
        tV = Uc,
        rV = ho,
        nV = yp("".charAt),
        S_ = yp("".charCodeAt),
        iV = yp("".slice),
        A_ = function(e) {
            return function(t, r) {
                var n = tV(rV(t)),
                    s = eV(r),
                    o = n.length,
                    l, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (l = S_(n, s), l < 55296 || l > 56319 || s + 1 === o || (u = S_(n, s + 1)) < 56320 || u > 57343 ? e ? nV(n, s) : l : e ? iV(n, s, s + 2) : (l - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        sV = {
            codeAt: A_(!1),
            charAt: A_(!0)
        },
        aV = sV.charAt,
        oV = function(e, t, r) {
            return t + (r ? aV(e, t).length : 1)
        },
        I_ = bi,
        lV = fs,
        cV = Ir,
        uV = kc,
        fV = vp,
        dV = TypeError,
        hV = function(e, t) {
            var r = e.exec;
            if (cV(r)) {
                var n = I_(r, e, t);
                return n !== null && lV(n), n
            }
            if (uV(e) === "RegExp") return I_(fV, e, t);
            throw dV("RegExp#exec called on incompatible receiver")
        },
        pV = zW,
        w_ = bi,
        Gc = fr,
        gV = QW,
        mV = Fr,
        vV = fs,
        yV = Ir,
        _V = Fc,
        EV = rO,
        Ns = Uc,
        bV = ho,
        TV = oV,
        OV = sp,
        SV = lO,
        AV = hV,
        IV = us,
        jd = IV("replace"),
        wV = Math.max,
        CV = Math.min,
        NV = Gc([].concat),
        Xf = Gc([].push),
        C_ = Gc("".indexOf),
        N_ = Gc("".slice),
        $V = function(e) {
            return e === void 0 ? e : String(e)
        },
        RV = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        $_ = function() {
            return /./ [jd] ? /./ [jd]("a", "$0") === "" : !1
        }(),
        LV = !mV(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    gV("replace", function(e, t, r) {
        var n = $_ ? "$" : "$0";
        return [function(o, l) {
            var u = bV(this),
                f = o == null ? void 0 : OV(o, jd);
            return f ? w_(f, o, u, l) : w_(t, Ns(u), o, l)
        }, function(s, o) {
            var l = vV(this),
                u = Ns(s);
            if (typeof o == "string" && C_(o, n) === -1 && C_(o, "$<") === -1) {
                var f = r(t, l, u, o);
                if (f.done) return f.value
            }
            var h = yV(o);
            h || (o = Ns(o));
            var g = l.global;
            if (g) {
                var y = l.unicode;
                l.lastIndex = 0
            }
            for (var b = [];;) {
                var T = AV(l, u);
                if (T === null || (Xf(b, T), !g)) break;
                var R = Ns(T[0]);
                R === "" && (l.lastIndex = TV(u, EV(l.lastIndex), y))
            }
            for (var D = "", B = 0, w = 0; w < b.length; w++) {
                T = b[w];
                for (var H = Ns(T[0]), q = wV(CV(_V(T.index), u.length), 0), j = [], G = 1; G < T.length; G++) Xf(j, $V(T[G]));
                var J = T.groups;
                if (h) {
                    var oe = NV([H], j, q, u);
                    J !== void 0 && Xf(oe, J);
                    var le = Ns(pV(o, void 0, oe))
                } else le = SV(H, u, q, j, J, o);
                q >= B && (D += N_(u, B, q) + le, B = q + H.length)
            }
            return D + N_(u, B)
        }]
    }, !LV || !RV || $_);
    var PV = Mr,
        kV = fr,
        DV = function(e, t) {
            return kV(PV[e].prototype[t])
        },
        xV = DV,
        MV = xV("String", "replaceAll"),
        FV = MV,
        UV = FV,
        BV = UV,
        GV = BV,
        jV = GV,
        WV = jV;
    (function(e) {
        e.exports = WV
    })(rG);
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
            this.autosize && tG(this.$refs.textarea)
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
`, ""), this.sanitizers && (t.value = O1.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
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
            const e = os();
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
        jc = {},
        mO = {},
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
        VV = function() {
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
    Wc.Tokenizer = VV;
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
    })(mO);
    var mo = {};
    Object.defineProperty(mo, "__esModule", {
        value: !0
    });
    mo.Tag = void 0;
    var HV = function() {
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
    mo.Tag = HV;
    Object.defineProperty(jc, "__esModule", {
        value: !0
    });
    jc.BBCodeParser = void 0;
    var R_ = mO,
        L_ = mo,
        KV = function() {
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
                        var y = o.tags[f.content],
                            b = o.treeToHtml(f.subTrees, y.insertLineBreaks, n, s);
                        s ? l += b : l += y.markupGenerator(y, b, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = y.suppressLineBreaks
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
    jc.BBCodeParser = KV;
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
        var r = mo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Wi);
    const YV = {
        install: e => {
            const t = {
                section: Wi.Tag.create("section", (o, l, {
                    section: u
                }) => `<div ${u?`class="section ${u}"`:'class="section"'}>${l}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                t[o] = Wi.Tag.create(o, (l, u) => `<strong>${u}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                t[o] = Wi.Tag.create(o, (l, u) => `<em>${u}</em>`)
            });
            const s = new Wi.BBCodeParser(t);
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
                            s.addTag(o, Wi.Tag.create(o, l));
                            return
                        }
                        s.addTag(o, Wi.Tag.create(o, l.generator, l.options))
                    })
                }
            }), e.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };
    var vO = {
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
    })(vO);
    const qV = vO.exports,
        zV = it({
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
        jn = e => (pc("data-v-220ec4c0"), e = e(), gc(), e),
        XV = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        JV = {
            key: 0,
            class: "power-nav"
        },
        ZV = jn(() => Z("p", null, "MARKERS", -1)),
        QV = ["onClick"],
        eH = pi("KILL"),
        tH = jn(() => Z("br", null, null, -1)),
        rH = pi("ROOM"),
        nH = [eH, tH, rH],
        iH = jn(() => Z("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        sH = {
            key: 1,
            class: "title focused"
        },
        aH = {
            key: 2,
            class: "title focused"
        },
        oH = jn(() => Z("svg", {
            viewBox: "0 0 20 10"
        }, [Z("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        lH = jn(() => Z("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        cH = [oH, lH],
        uH = jn(() => Z("svg", {
            viewBox: "0 0 60 50"
        }, [Z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), Z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        fH = jn(() => Z("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        dH = [uH, fH],
        hH = jn(() => Z("svg", {
            viewBox: "0 0 60 50"
        }, [Z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), Z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        pH = jn(() => Z("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        gH = [hH, pH];

    function mH(e, t, r, n, s, o) {
        return e.replayer ? (V(), z("div", XV, [e.showPowerNav ? (V(), z("div", JV, [Z("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), ZV, Z("ul", null, [(V(!0), z(et, null, un(e.replayer.markerMap, (l, u) => (V(), z("li", {
            key: u,
            class: Me({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, _t(l[1].marker), 11, QV))), 128))]), Z("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, nH), Z("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : Oe("", !0), iH, e.replayer.markerMap.length ? (V(), z("p", aH, _t(e.replayer.currentMarkerItemIndex) + " : " + _t(e.replayer.currentMarkerItem[1].marker) + " (" + _t(e.replayer.currentEntityItemIndex) + ") ", 1)) : (V(), z("p", sH, "Item #" + _t(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Oe("", !0) : (V(), z("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, cH)), Z("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, dH), Z("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, gH)], 512)) : Oe("", !0)
    }
    const vH = ze(zV, [
        ["render", mH],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function yH(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var _H = yH,
        EH = rT,
        bH = EH(Object.keys, Object),
        TH = bH,
        OH = xh,
        SH = TH,
        AH = Object.prototype,
        IH = AH.hasOwnProperty;

    function wH(e) {
        if (!OH(e)) return SH(e);
        var t = [];
        for (var r in Object(e)) IH.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var CH = wH,
        NH = uT,
        $H = CH,
        RH = $c;

    function LH(e) {
        return RH(e) ? NH(e) : $H(e)
    }
    var Vc = LH,
        PH = lo,
        kH = Vc;

    function DH(e, t) {
        return e && PH(t, kH(t), e)
    }
    var xH = DH,
        MH = lo,
        FH = co;

    function UH(e, t) {
        return e && MH(t, FH(t), e)
    }
    var BH = UH;

    function GH(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (o[s++] = l)
        }
        return o
    }
    var jH = GH;

    function WH() {
        return []
    }
    var yO = WH,
        VH = jH,
        HH = yO,
        KH = Object.prototype,
        YH = KH.propertyIsEnumerable,
        P_ = Object.getOwnPropertySymbols,
        qH = P_ ? function(e) {
            return e == null ? [] : (e = Object(e), VH(P_(e), function(t) {
                return YH.call(e, t)
            }))
        } : HH,
        Ep = qH,
        zH = lo,
        XH = Ep;

    function JH(e, t) {
        return zH(e, XH(e), t)
    }
    var ZH = JH;

    function QH(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var _O = QH,
        eK = _O,
        tK = Dh,
        rK = Ep,
        nK = yO,
        iK = Object.getOwnPropertySymbols,
        sK = iK ? function(e) {
            for (var t = []; e;) eK(t, rK(e)), e = tK(e);
            return t
        } : nK,
        EO = sK,
        aK = lo,
        oK = EO;

    function lK(e, t) {
        return aK(e, oK(e), t)
    }
    var cK = lK,
        uK = _O,
        fK = yi;

    function dK(e, t, r) {
        var n = t(e);
        return fK(e) ? n : uK(n, r(e))
    }
    var bO = dK,
        hK = bO,
        pK = Ep,
        gK = Vc;

    function mK(e) {
        return hK(e, gK, pK)
    }
    var vK = mK,
        yK = bO,
        _K = EO,
        EK = co;

    function bK(e) {
        return yK(e, EK, _K)
    }
    var TK = bK,
        OK = cs,
        SK = dn,
        AK = OK(SK, "DataView"),
        IK = AK,
        wK = cs,
        CK = dn,
        NK = wK(CK, "Promise"),
        $K = NK,
        RK = cs,
        LK = dn,
        PK = RK(LK, "Set"),
        kK = PK,
        DK = cs,
        xK = dn,
        MK = DK(xK, "WeakMap"),
        FK = MK,
        Wd = IK,
        Vd = Lh,
        Hd = $K,
        Kd = kK,
        Yd = FK,
        TO = aa,
        da = zb,
        k_ = "[object Map]",
        UK = "[object Object]",
        D_ = "[object Promise]",
        x_ = "[object Set]",
        M_ = "[object WeakMap]",
        F_ = "[object DataView]",
        BK = da(Wd),
        GK = da(Vd),
        jK = da(Hd),
        WK = da(Kd),
        VK = da(Yd),
        Vi = TO;
    (Wd && Vi(new Wd(new ArrayBuffer(1))) != F_ || Vd && Vi(new Vd) != k_ || Hd && Vi(Hd.resolve()) != D_ || Kd && Vi(new Kd) != x_ || Yd && Vi(new Yd) != M_) && (Vi = function(e) {
        var t = TO(e),
            r = t == UK ? e.constructor : void 0,
            n = r ? da(r) : "";
        if (n) switch (n) {
            case BK:
                return F_;
            case GK:
                return k_;
            case jK:
                return D_;
            case WK:
                return x_;
            case VK:
                return M_
        }
        return t
    });
    var bp = Vi,
        HK = Object.prototype,
        KK = HK.hasOwnProperty;

    function YK(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && KK.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var qK = YK,
        zK = kh;

    function XK(e, t) {
        var r = t ? zK(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var JK = XK,
        ZK = /\w*$/;

    function QK(e) {
        var t = new e.constructor(e.source, ZK.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var eY = QK,
        U_ = wc,
        B_ = U_ ? U_.prototype : void 0,
        G_ = B_ ? B_.valueOf : void 0;

    function tY(e) {
        return G_ ? Object(G_.call(e)) : {}
    }
    var rY = tY,
        nY = kh,
        iY = JK,
        sY = eY,
        aY = rY,
        oY = eT,
        lY = "[object Boolean]",
        cY = "[object Date]",
        uY = "[object Map]",
        fY = "[object Number]",
        dY = "[object RegExp]",
        hY = "[object Set]",
        pY = "[object String]",
        gY = "[object Symbol]",
        mY = "[object ArrayBuffer]",
        vY = "[object DataView]",
        yY = "[object Float32Array]",
        _Y = "[object Float64Array]",
        EY = "[object Int8Array]",
        bY = "[object Int16Array]",
        TY = "[object Int32Array]",
        OY = "[object Uint8Array]",
        SY = "[object Uint8ClampedArray]",
        AY = "[object Uint16Array]",
        IY = "[object Uint32Array]";

    function wY(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case mY:
                return nY(e);
            case lY:
            case cY:
                return new n(+e);
            case vY:
                return iY(e, r);
            case yY:
            case _Y:
            case EY:
            case bY:
            case TY:
            case OY:
            case SY:
            case AY:
            case IY:
                return oY(e, r);
            case uY:
                return new n;
            case fY:
            case pY:
                return new n(e);
            case dY:
                return sY(e);
            case hY:
                return new n;
            case gY:
                return aY(e)
        }
    }
    var CY = wY,
        NY = bp,
        $Y = vi,
        RY = "[object Map]";

    function LY(e) {
        return $Y(e) && NY(e) == RY
    }
    var PY = LY,
        kY = PY,
        DY = Mh,
        j_ = to.exports,
        W_ = j_ && j_.isMap,
        xY = W_ ? DY(W_) : kY,
        MY = xY,
        FY = bp,
        UY = vi,
        BY = "[object Set]";

    function GY(e) {
        return UY(e) && FY(e) == BY
    }
    var jY = GY,
        WY = jY,
        VY = Mh,
        V_ = to.exports,
        H_ = V_ && V_.isSet,
        HY = H_ ? VY(H_) : WY,
        KY = HY,
        YY = Jb,
        qY = _H,
        zY = Fh,
        XY = xH,
        JY = BH,
        ZY = Kl.exports,
        QY = tT,
        eq = ZH,
        tq = cK,
        rq = vK,
        nq = TK,
        iq = bp,
        sq = qK,
        aq = CY,
        oq = nT,
        lq = yi,
        cq = eo.exports,
        uq = MY,
        fq = hn,
        dq = KY,
        hq = Vc,
        pq = co,
        gq = 1,
        mq = 2,
        vq = 4,
        OO = "[object Arguments]",
        yq = "[object Array]",
        _q = "[object Boolean]",
        Eq = "[object Date]",
        bq = "[object Error]",
        SO = "[object Function]",
        Tq = "[object GeneratorFunction]",
        Oq = "[object Map]",
        Sq = "[object Number]",
        AO = "[object Object]",
        Aq = "[object RegExp]",
        Iq = "[object Set]",
        wq = "[object String]",
        Cq = "[object Symbol]",
        Nq = "[object WeakMap]",
        $q = "[object ArrayBuffer]",
        Rq = "[object DataView]",
        Lq = "[object Float32Array]",
        Pq = "[object Float64Array]",
        kq = "[object Int8Array]",
        Dq = "[object Int16Array]",
        xq = "[object Int32Array]",
        Mq = "[object Uint8Array]",
        Fq = "[object Uint8ClampedArray]",
        Uq = "[object Uint16Array]",
        Bq = "[object Uint32Array]",
        yt = {};
    yt[OO] = yt[yq] = yt[$q] = yt[Rq] = yt[_q] = yt[Eq] = yt[Lq] = yt[Pq] = yt[kq] = yt[Dq] = yt[xq] = yt[Oq] = yt[Sq] = yt[AO] = yt[Aq] = yt[Iq] = yt[wq] = yt[Cq] = yt[Mq] = yt[Fq] = yt[Uq] = yt[Bq] = !0;
    yt[bq] = yt[SO] = yt[Nq] = !1;

    function xl(e, t, r, n, s, o) {
        var l, u = t & gq,
            f = t & mq,
            h = t & vq;
        if (r && (l = s ? r(e, n, s, o) : r(e)), l !== void 0) return l;
        if (!fq(e)) return e;
        var g = lq(e);
        if (g) {
            if (l = sq(e), !u) return QY(e, l)
        } else {
            var y = iq(e),
                b = y == SO || y == Tq;
            if (cq(e)) return ZY(e, u);
            if (y == AO || y == OO || b && !s) {
                if (l = f || b ? {} : oq(e), !u) return f ? tq(e, JY(l, e)) : eq(e, XY(l, e))
            } else {
                if (!yt[y]) return s ? e : {};
                l = aq(e, y, u)
            }
        }
        o || (o = new YY);
        var T = o.get(e);
        if (T) return T;
        o.set(e, l), dq(e) ? e.forEach(function(B) {
            l.add(xl(B, t, r, B, e, o))
        }) : uq(e) && e.forEach(function(B, w) {
            l.set(w, xl(B, t, r, w, e, o))
        });
        var R = h ? f ? nq : rq : f ? pq : hq,
            D = g ? void 0 : R(e);
        return qY(D || e, function(B, w) {
            D && (w = B, B = e[w]), zY(l, w, xl(B, t, r, w, e, o))
        }), l
    }
    var Gq = xl,
        jq = Gq,
        Wq = 1,
        Vq = 4;

    function Hq(e) {
        return jq(e, Wq | Vq)
    }
    var IO = Hq;
    const Kq = it({
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
                !e || (this.values = IO(this.$ecastValues), this.content = (n = By.getPromptGuess(this.values, e)) != null ? n : null)
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
        wO = "main/pp9/fourbage/assets/ad9172fc.png",
        CO = "main/pp9/fourbage/assets/dc131b16.png",
        Yq = "main/pp9/fourbage/assets/38715b18.png",
        qq = "main/pp9/fourbage/assets/b0d7c822.png",
        zq = "main/pp9/fourbage/assets/06150f24.png",
        Qr = e => (pc("data-v-2c53389f"), e = e(), gc(), e),
        Xq = {
            class: "jbg"
        },
        Jq = {
            key: 0,
            class: "options"
        },
        Zq = Qr(() => Z("img", {
            src: wO,
            alt: "Leave Feedback"
        }, null, -1)),
        Qq = Qr(() => Z("span", null, [pi("LEAVE"), Z("br"), pi("FEEDBACK")], -1)),
        ez = [Zq, Qq],
        tz = Qr(() => Z("img", {
            src: CO,
            alt: "Send Debug"
        }, null, -1)),
        rz = Qr(() => Z("span", null, [pi("SEND A"), Z("br"), pi("DEBUG")], -1)),
        nz = [tz, rz],
        iz = {
            key: 1,
            class: "feedback"
        },
        sz = Qr(() => Z("img", {
            class: "image",
            src: wO,
            alt: "Feedback"
        }, null, -1)),
        az = Qr(() => Z("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        oz = Qr(() => Z("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        lz = {
            class: "buttons"
        },
        cz = Qr(() => Z("img", {
            src: Yq,
            alt: "good"
        }, null, -1)),
        uz = [cz],
        fz = Qr(() => Z("img", {
            src: qq,
            alt: "good"
        }, null, -1)),
        dz = [fz],
        hz = Qr(() => Z("img", {
            src: zq,
            alt: "bad"
        }, null, -1)),
        pz = [hz],
        gz = {
            class: "actions"
        },
        mz = {
            key: 0,
            class: "content-guess"
        },
        vz = pi("Feedback is about: "),
        yz = {
            key: 2,
            class: "debug"
        },
        _z = Qr(() => Z("img", {
            class: "image",
            src: CO,
            alt: "Debug"
        }, null, -1)),
        Ez = Qr(() => Z("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        bz = {
            class: "actions"
        };

    function Tz(e, t, r, n, s, o) {
        return V(), z("div", Xq, [e.screen === "options" ? (V(), z("div", Jq, [Z("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, ez), Z("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, nz)])) : e.screen === "feedback" ? (V(), z("div", iz, [sz, az, Z("div", {
            class: Me(["vibes", {
                "has-selected": e.vibe
            }])
        }, [oz, Z("div", lz, [Z("button", {
            class: Me({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, uz, 2), Z("button", {
            class: Me({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, dz, 2), Z("button", {
            class: Me({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, pz, 2)])], 2), Z("div", gz, [e.content ? (V(), z("div", mz, [Ce(Z("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [w2, e.isContent]
        ]), Z("span", null, [vz, Z("em", null, _t(e.content), 1)])])) : Oe("", !0), Ce(Z("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [zv, e.message]
        ]), Z("button", {
            onClick: t[7] || (t[7] = Zr((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, _t(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (V(), z("div", yz, [_z, Ez, Z("div", bz, [Ce(Z("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [zv, e.message]
        ]), Z("button", {
            onClick: t[9] || (t[9] = Zr((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, _t(e.$t("ACTION.OK")), 1)])])) : Oe("", !0)])
    }
    const NO = ze(Kq, [
            ["render", Tz],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        Oz = it({
            methods: {
                onFeedbackClick() {
                    this.$showModal(NO)
                }
            }
        });

    function Sz(e, t, r, n, s, o) {
        return V(), z("div", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "SEND FEEDBACK")
    }
    const Az = ze(Oz, [
            ["render", Sz],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        Iz = {
            install: (e, t) => {
                if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                    if (t.replayer) {
                        e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", vH);
                        return
                    }
                    if (e.config.globalProperties.$debugRecorder = new v8(t.client, t.room), !e.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!vr.isProduction || vr.getQueryParam("feedback")) && e.component("Debug", Az), new qV(() => {
                        e.config.globalProperties.$showModal(NO)
                    })
                }
            }
        };
    var wz = dn,
        Cz = function() {
            return wz.Date.now()
        },
        Nz = Cz,
        $z = /\s/;

    function Rz(e) {
        for (var t = e.length; t-- && $z.test(e.charAt(t)););
        return t
    }
    var Lz = Rz,
        Pz = Lz,
        kz = /^\s+/;

    function Dz(e) {
        return e && e.slice(0, Pz(e) + 1).replace(kz, "")
    }
    var xz = Dz,
        Mz = aa,
        Fz = vi,
        Uz = "[object Symbol]";

    function Bz(e) {
        return typeof e == "symbol" || Fz(e) && Mz(e) == Uz
    }
    var Hc = Bz,
        Gz = xz,
        K_ = hn,
        jz = Hc,
        Y_ = 0 / 0,
        Wz = /^[-+]0x[0-9a-f]+$/i,
        Vz = /^0b[01]+$/i,
        Hz = /^0o[0-7]+$/i,
        Kz = parseInt;

    function Yz(e) {
        if (typeof e == "number") return e;
        if (jz(e)) return Y_;
        if (K_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = K_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = Gz(e);
        var r = Vz.test(e);
        return r || Hz.test(e) ? Kz(e.slice(2), r ? 2 : 8) : Wz.test(e) ? Y_ : +e
    }
    var qz = Yz,
        zz = hn,
        Jf = Nz,
        q_ = qz,
        Xz = "Expected a function",
        Jz = Math.max,
        Zz = Math.min;

    function Qz(e, t, r) {
        var n, s, o, l, u, f, h = 0,
            g = !1,
            y = !1,
            b = !0;
        if (typeof e != "function") throw new TypeError(Xz);
        t = q_(t) || 0, zz(r) && (g = !!r.leading, y = "maxWait" in r, o = y ? Jz(q_(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b);

        function T(J) {
            var oe = n,
                le = s;
            return n = s = void 0, h = J, l = e.apply(le, oe), l
        }

        function R(J) {
            return h = J, u = setTimeout(w, t), g ? T(J) : l
        }

        function D(J) {
            var oe = J - f,
                le = J - h,
                ue = t - oe;
            return y ? Zz(ue, o - le) : ue
        }

        function B(J) {
            var oe = J - f,
                le = J - h;
            return f === void 0 || oe >= t || oe < 0 || y && le >= o
        }

        function w() {
            var J = Jf();
            if (B(J)) return H(J);
            u = setTimeout(w, D(J))
        }

        function H(J) {
            return u = void 0, b && n ? T(J) : (n = s = void 0, l)
        }

        function q() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function j() {
            return u === void 0 ? l : H(Jf())
        }

        function G() {
            var J = Jf(),
                oe = B(J);
            if (n = arguments, s = this, f = J, oe) {
                if (u === void 0) return R(f);
                if (y) return clearTimeout(u), u = setTimeout(w, t), T(f)
            }
            return u === void 0 && (u = setTimeout(w, t)), l
        }
        return G.cancel = q, G.flush = j, G
    }
    var eX = Qz,
        tX = yi,
        rX = Hc,
        nX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        iX = /^\w*$/;

    function sX(e, t) {
        if (tX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || rX(e) ? !0 : iX.test(e) || !nX.test(e) || t != null && e in Object(t)
    }
    var aX = sX,
        $O = Xb,
        oX = "Expected a function";

    function Tp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(oX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var l = e.apply(this, n);
            return r.cache = o.set(s, l) || o, l
        };
        return r.cache = new(Tp.Cache || $O), r
    }
    Tp.Cache = $O;
    var lX = Tp,
        cX = lX,
        uX = 500;

    function fX(e) {
        var t = cX(e, function(n) {
                return r.size === uX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var dX = fX,
        hX = dX,
        pX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        gX = /\\(\\)?/g,
        mX = hX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(pX, function(r, n, s, o) {
                t.push(s ? o.replace(gX, "$1") : n || r)
            }), t
        }),
        vX = mX;

    function yX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var RO = yX,
        z_ = wc,
        _X = RO,
        EX = yi,
        bX = Hc,
        TX = 1 / 0,
        X_ = z_ ? z_.prototype : void 0,
        J_ = X_ ? X_.toString : void 0;

    function LO(e) {
        if (typeof e == "string") return e;
        if (EX(e)) return _X(e, LO) + "";
        if (bX(e)) return J_ ? J_.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -TX ? "-0" : t
    }
    var OX = LO,
        SX = OX;

    function AX(e) {
        return e == null ? "" : SX(e)
    }
    var IX = AX,
        wX = yi,
        CX = aX,
        NX = vX,
        $X = IX;

    function RX(e, t) {
        return wX(e) ? e : CX(e, t) ? [e] : NX($X(e))
    }
    var PO = RX,
        LX = Hc,
        PX = 1 / 0;

    function kX(e) {
        if (typeof e == "string" || LX(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -PX ? "-0" : t
    }
    var kO = kX,
        DX = Fh,
        xX = PO,
        MX = Uh,
        Z_ = hn,
        FX = kO;

    function UX(e, t, r, n) {
        if (!Z_(e)) return e;
        t = xX(t, e);
        for (var s = -1, o = t.length, l = o - 1, u = e; u != null && ++s < o;) {
            var f = FX(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = Z_(g) ? g : MX(t[s + 1]) ? [] : {})
            }
            DX(u, f, h), u = u[f]
        }
        return e
    }
    var BX = UX,
        GX = BX;

    function jX(e, t, r) {
        return e == null ? e : GX(e, t, r)
    }
    var WX = jX;
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
            ge(this, "sync", eX(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Bn(this.wsClient.entities), ts(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof Ar.ArtifactEntity || t instanceof Ar.DoodleEntity ? t : t instanceof Ar.ObjectEntity ? IO(t.val) : t instanceof Ar.TextEntity ? t.text : t instanceof Ar.NumberEntity ? t.val : null
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
                    WX(this.newValues, n, u)
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
    const qr = new VX,
        HX = {
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

    function KX() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Op() {
        return !KX() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function YX(e, t) {
        return e.require(t)
    }
    var qX = {};

    function zt() {
        return Op() ? global : typeof window < "u" ? window : typeof self < "u" ? self : qX
    }

    function Sp(e, t, r) {
        var n = r || zt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var DO = Object.prototype.toString;

    function xO(e) {
        switch (DO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Oi(e, Error)
        }
    }

    function ha(e, t) {
        return DO.call(e) === `[object ${t}]`
    }

    function MO(e) {
        return ha(e, "ErrorEvent")
    }

    function Q_(e) {
        return ha(e, "DOMError")
    }

    function zX(e) {
        return ha(e, "DOMException")
    }

    function ea(e) {
        return ha(e, "String")
    }

    function XX(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Kc(e) {
        return ha(e, "Object")
    }

    function Ap(e) {
        return typeof Event < "u" && Oi(e, Event)
    }

    function JX(e) {
        return typeof Element < "u" && Oi(e, Element)
    }

    function ZX(e) {
        return ha(e, "RegExp")
    }

    function FO(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function QX(e) {
        return Kc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function eJ(e) {
        return typeof e == "number" && e !== e
    }

    function Oi(e, t) {
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
            for (; u && f++ < r && (g = tJ(u, t), !(g === "html" || f > 1 && h + s.length * l + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function tJ(e, t) {
        var r = e,
            n = [];
        let s, o, l, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (h && h.length) h.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && ea(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) l = g[f], u = r.getAttribute(l), u && n.push(`[${l}="${u}"]`);
        return n.join("")
    }

    function rJ() {
        var e = zt();
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
    var nJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function iJ(e) {
        return e === "http" || e === "https"
    }

    function sJ(e, t = !1) {
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

    function aJ(e) {
        var t = nJ.exec(e);
        if (!t) throw new Ma(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, l = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var y = h.match(/^\d+/);
            y && (h = y[0])
        }
        return UO({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function UO(e) {
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

    function oJ(e) {
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
        if (!iJ(n)) throw new Ma(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Ma(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function lJ(e) {
        var t = typeof e == "string" ? aJ(e) : UO(e);
        return oJ(t), t
    }
    var cJ = zt(),
        uJ = "Sentry Logger ",
        tc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function BO(e) {
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

    function eE() {
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
                e && BO(() => {
                    cJ.console[r](`${uJ}[${r}]:`, ...n)
                })
            }
        }) : tc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let jt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? jt = Sp("logger", eE) : jt = eE();

    function tE(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function rE(e, t) {
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
        return ea(e) ? ZX(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
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

    function GO(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function jO(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, GO(e, "__sentry_original__", t)
    }

    function wp(e) {
        return e.__sentry_original__
    }

    function WO(e) {
        if (xO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...iE(e)
        };
        if (Ap(e)) {
            var t = {
                type: e.type,
                target: nE(e.target),
                currentTarget: nE(e.currentTarget),
                ...iE(e)
            };
            return typeof CustomEvent < "u" && Oi(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function nE(e) {
        try {
            return JX(e) ? qd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function iE(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function fJ(e, t = 40) {
        var r = Object.keys(WO(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return tE(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : tE(n, t)
        }
        return ""
    }

    function dJ(e) {
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

    function gi(e) {
        try {
            return !e || typeof e != "function" ? Zf : e.name || Zf
        } catch {
            return Zf
        }
    }

    function hJ() {
        if (!("fetch" in zt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function sE(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function pJ() {
        if (!hJ()) return !1;
        var e = zt();
        if (sE(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = sE(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function gJ() {
        var e = zt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var It = zt(),
        Va = {},
        aE = {};

    function mJ(e) {
        if (!aE[e]) switch (aE[e] = !0, e) {
            case "console":
                vJ();
                break;
            case "dom":
                IJ();
                break;
            case "xhr":
                bJ();
                break;
            case "fetch":
                yJ();
                break;
            case "history":
                TJ();
                break;
            case "error":
                wJ();
                break;
            case "unhandledrejection":
                CJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Xi(e, t) {
        Va[e] = Va[e] || [], Va[e].push(t), mJ(e)
    }

    function fn(e, t) {
        if (!(!e || !Va[e]))
            for (var r of Va[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${gi(r)}
Error:`, n)
            }
    }

    function vJ() {
        "console" in It && tc.forEach(function(e) {
            e in It.console && cr(It.console, e, function(t) {
                return function(...r) {
                    fn("console", {
                        args: r,
                        level: e
                    }), t && t.apply(It.console, r)
                }
            })
        })
    }

    function yJ() {
        !pJ() || cr(It, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: _J(t),
                        url: EJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return fn("fetch", {
                    ...r
                }), e.apply(It, t).then(n => (fn("fetch", {
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

    function _J(e = []) {
        return "Request" in It && Oi(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function EJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in It && Oi(e[0], Request) ? e[0].url : String(e[0])
    }

    function bJ() {
        if ("XMLHttpRequest" in It) {
            var e = XMLHttpRequest.prototype;
            cr(e, "open", function(t) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        o = n.__sentry_xhr__ = {
                            method: ea(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    ea(s) && o.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
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
    let Ol;

    function TJ() {
        if (!gJ()) return;
        var e = It.onpopstate;
        It.onpopstate = function(...r) {
            var n = It.location.href,
                s = Ol;
            if (Ol = n, fn("history", {
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
                    var o = Ol,
                        l = String(s);
                    Ol = l, fn("history", {
                        from: o,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        cr(It.history, "pushState", t), cr(It.history, "replaceState", t)
    }
    var OJ = 1e3;
    let Sl, Al;

    function SJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function AJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function oE(e, t = !1) {
        return r => {
            if (!(!r || Al === r) && !AJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Sl === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r) : SJ(Al, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r), clearTimeout(Sl), Sl = It.setTimeout(() => {
                    Sl = void 0
                }, OJ)
            }
        }
    }

    function IJ() {
        if ("document" in It) {
            var e = fn.bind(null, "dom"),
                t = oE(e, !0);
            It.document.addEventListener("click", t, !1), It.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = It[r] && It[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (cr(n, "addEventListener", function(s) {
                    return function(o, l, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var y = oE(e);
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

    function wJ() {
        Qf = It.onerror, It.onerror = function(e, t, r, n, s) {
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

    function CJ() {
        ed = It.onunhandledrejection, It.onunhandledrejection = function(e) {
            return fn("unhandledrejection", e), ed ? ed.apply(this, arguments) : !0
        }
    }

    function NJ() {
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
        var e = zt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function VO(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ps(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = VO(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Xd(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function rc(e, t) {
        var r = VO(e);
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

    function $J(e, t = 1 / 0, r = 1 / 0) {
        try {
            return Jd("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function HO(e, t = 3, r = 100 * 1024) {
        var n = $J(e, t);
        return PJ(n) > r ? HO(e, t - 1, r) : n
    }

    function Jd(e, t, r = 1 / 0, n = 1 / 0, s = NJ()) {
        const [o, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !eJ(t)) return t;
        var u = RJ(e, t);
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
        var b = WO(t);
        for (var T in b)
            if (!!Object.prototype.hasOwnProperty.call(b, T)) {
                if (y >= n) {
                    g[T] = "[MaxProperties ~]";
                    break
                }
                var R = b[T];
                g[T] = Jd(T, R, r - 1, n, s), y += 1
            } return l(t), g
    }

    function RJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : QX(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${gi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function LJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function PJ(e) {
        return LJ(JSON.stringify(e))
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
                    if (FO(r)) {
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
    var kJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function DJ(e) {
        return e === "warn" ? "warning" : kJ.includes(e) ? e : "log"
    }
    var Zd = {
        nowSeconds: () => Date.now() / 1e3
    };

    function xJ() {
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

    function MJ() {
        try {
            var e = YX(w0, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var rd = Op() ? MJ() : xJ(),
        lE = rd === void 0 ? Zd : {
            nowSeconds: () => (rd.timeOrigin + rd.now()) / 1e3
        },
        KO = Zd.nowSeconds.bind(Zd),
        YO = lE.nowSeconds.bind(lE);
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

    function FJ(e) {
        var t = YO(),
            r = {
                sid: Ha(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => BJ(r)
            };
        return e && Yc(r, e), r
    }

    function Yc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || YO(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ha()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function UJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Yc(e, r)
    }

    function BJ(e) {
        return dJ({
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
    var cE = 100;
    class ss {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            var r = new ss;
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
                return r instanceof ss ? r : this
            }
            return t instanceof ss ? (this._tags = {
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
            var n = typeof r == "number" ? Math.min(r, cE) : cE;
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && jt.log(`Event processor "${u.id}" dropped event`), FO(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, l)
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
        return Sp("globalEventProcessors", () => [])
    }

    function zO(e) {
        qO().push(e)
    }
    var Cp = 4,
        GJ = 100;
    class yo {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new ss, n = Cp) {
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
            var t = ss.clone(this.getScope());
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
                maxBreadcrumbs: l = GJ
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
            var r = uE(this);
            try {
                t(this)
            } finally {
                uE(r)
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
            n && UJ(n), this._sendSessionUpdate(), r && r.setSession()
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
            var f = FJ({
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
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function qc() {
        var e = zt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function uE(e) {
        var t = qc(),
            r = ai(t);
        return Np(t, e), r
    }

    function xr() {
        var e = qc();
        return (!XO(e) || ai(e).isOlderThan(Cp)) && Np(e, new yo), Op() ? jJ(e) : ai(e)
    }

    function jJ(e) {
        try {
            var t = qc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!XO(r) || ai(r).isOlderThan(Cp)) {
                var n = ai(e).getStackTop();
                Np(r, new yo(n.client, ss.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function XO(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return Sp("hub", () => new yo, e)
    }

    function Np(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function WJ(e, t) {
        return xr().captureException(e, {
            captureContext: t
        })
    }

    function VJ(e) {
        xr().withScope(e)
    }

    function HJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function KJ(e, t) {
        var r = lJ(e),
            n = `${HJ(r)}embed/error-page/`;
        let s = `dsn=${sJ(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let fE;
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
            fE = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = wp(this) || this;
                return fE.apply(r, t)
            }
        }
    }
    io.__initStatic();
    var YJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            h = qJ(l._options, f);
                        return zJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Hs.__initStatic();

    function qJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...YJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function zJ(e, t) {
        return t.ignoreInternal && eZ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ps(e)}`), !0) : XJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ps(e)}`), !0) : JJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ps(e)}.
Url: ${nc(e)}`), !0) : ZJ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ps(e)}.
Url: ${nc(e)}`), !0)
    }

    function XJ(e, t) {
        return !t || !t.length ? !1 : QJ(e).some(r => t.some(n => Ip(r, n)))
    }

    function JJ(e, t) {
        if (!t || !t.length) return !1;
        var r = nc(e);
        return r ? t.some(n => Ip(r, n)) : !1
    }

    function ZJ(e, t) {
        if (!t || !t.length) return !0;
        var r = nc(e);
        return r ? t.some(n => Ip(r, n)) : !0
    }

    function QJ(e) {
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

    function eZ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function tZ(e = []) {
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
            return t ? tZ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract url for event ${Ps(e)}`), null
        }
    }

    function JO(e, t) {
        var r = $p(e, t),
            n = {
                type: t && t.name,
                value: sZ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function rZ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Ap(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${fJ(t)}`
                }]
            },
            extra: {
                __serialized__: HO(t)
            }
        };
        if (r) {
            var o = $p(e, r);
            o.length && (s.exception.values[0].stacktrace = {
                frames: o
            })
        }
        return s
    }

    function nd(e, t) {
        return {
            exception: {
                values: [JO(e, t)]
            }
        }
    }

    function $p(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = iZ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var nZ = /Minified React error #\d+;/i;

    function iZ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (nZ.test(e.message)) return 1
        }
        return 0
    }

    function sZ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function ZO(e, t, r, n, s) {
        let o;
        if (MO(t) && t.error) {
            var l = t;
            return nd(e, l.error)
        }
        if (Q_(t) || zX(t)) {
            var u = t;
            if ("stack" in t) o = nd(e, t);
            else {
                var f = u.name || (Q_(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = dE(e, h, r, n), Xd(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (xO(t)) return nd(e, t);
        if (Kc(t) || Ap(t)) {
            var g = t;
            return o = rZ(e, g, r, s), rc(o, {
                synthetic: !0
            }), o
        }
        return o = dE(e, t, r, n), Xd(o, `${t}`, void 0), rc(o, {
            synthetic: !0
        }), o
    }

    function dE(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var o = $p(e, r);
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
    var aZ = "Breadcrumbs";
    class so {
        static __initStatic() {
            this.id = aZ
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
            this.options.console && Xi("console", lZ), this.options.dom && Xi("dom", oZ(this.options.dom)), this.options.xhr && Xi("xhr", cZ), this.options.fetch && Xi("fetch", uZ), this.options.history && Xi("history", fZ)
        }
    }
    so.__initStatic();

    function oZ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? qd(r.event.target, s) : qd(r.event, s)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && xr().addBreadcrumb({
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

    function lZ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: DJ(e.level),
            message: rE(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${rE(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        xr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function cZ(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: r,
                status_code: n,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            xr().addBreadcrumb({
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

    function uZ(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? xr().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : xr().addBreadcrumb({
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

    function fZ(e) {
        var t = zt();
        let r = e.from,
            n = e.to;
        var s = td(t.location.href);
        let o = td(r);
        var l = td(n);
        o.path || (o = s), s.protocol === l.protocol && s.host === l.host && (n = l.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), xr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let Qd = 0;

    function QO() {
        return Qd > 0
    }

    function dZ() {
        Qd += 1, setTimeout(() => {
            Qd -= 1
        })
    }

    function ta(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (wp(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var u = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = u.map(h => ta(h, t));
                return e.apply(this, f)
            } catch (h) {
                throw dZ(), VJ(g => {
                    g.addEventProcessor(y => (t.mechanism && (Xd(y, void 0, void 0), rc(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: u
                    }, y)), WJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        jO(s, e), GO(e, "__sentry_wrapped__", s);
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
    class fi {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = fi.id
        }
        __init2() {
            this._installFunc = {
                onerror: hZ,
                onunhandledrejection: pZ
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
                n && t[r] && (vZ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    fi.__initStatic();

    function hZ() {
        Xi("error", e => {
            const [t, r, n] = r0();
            if (!t.getIntegration(fi)) return;
            const {
                msg: s,
                url: o,
                line: l,
                column: u,
                error: f
            } = e;
            if (!(QO() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && ea(s) ? mZ(s, o, l, u) : e0(ZO(r, f || s, void 0, n, !1), o, l, u);
                h.level = "error", t0(t, f, h, "onerror")
            }
        })
    }

    function pZ() {
        Xi("unhandledrejection", e => {
            const [t, r, n] = r0();
            if (!t.getIntegration(fi)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (QO() || s && s.__sentry_own_request__) return !0;
            var o = XX(s) ? gZ(s) : ZO(r, s, void 0, n, !0);
            o.level = "error", t0(t, s, o, "onunhandledrejection")
        })
    }

    function gZ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function mZ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = MO(e) ? e.message : e,
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
        return e0(f, t, r, n)
    }

    function e0(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            l = o[0] = o[0] || {},
            u = l.stacktrace = l.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = ea(t) && t.length > 0 ? t : rJ();
        return f.length === 0 && f.push({
            colno: h,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function vZ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.log(`Global Handler attached: ${e}`)
    }

    function t0(e, t, r, n) {
        rc(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function r0() {
        var e = xr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var yZ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            this._options.setTimeout && cr(t, "setTimeout", hE), this._options.setInterval && cr(t, "setInterval", hE), this._options.requestAnimationFrame && cr(t, "requestAnimationFrame", _Z), this._options.XMLHttpRequest && "XMLHttpRequest" in t && cr(XMLHttpRequest.prototype, "send", EZ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : yZ;
                n.forEach(bZ)
            }
        }
    }
    ao.__initStatic();

    function hE(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = ta(r, {
                mechanism: {
                    data: {
                        function: gi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), e.apply(this, t)
        }
    }

    function _Z(e) {
        return function(t) {
            return e.apply(this, [ta(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: gi(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function EZ(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && cr(r, s, function(o) {
                    var l = {
                            mechanism: {
                                data: {
                                    function: s,
                                    handler: gi(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        u = wp(o);
                    return u && (l.mechanism.data.handler = gi(u)), ta(o, l)
                })
            }), e.apply(this, t)
        }
    }

    function bZ(e) {
        var t = zt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (cr(r, "addEventListener", function(n) {
            return function(s, o, l) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = ta(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: gi(o),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [s, ta(o, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: gi(o),
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
    var TZ = "cause",
        OZ = 5;
    class Ks {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Ks.id
        }
        constructor(t = {}) {
            Ks.prototype.__init.call(this), this._key = t.key || TZ, this._limit = t.limit || OZ
        }
        setupOnce() {
            var t = xr().getClient();
            !t || zO((r, n) => {
                var s = xr().getIntegration(Ks);
                return s ? SZ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Ks.__initStatic();

    function SZ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Oi(s.originalException, Error)) return n;
        var o = n0(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function n0(e, t, r, n, s = []) {
        if (!Oi(r[n], Error) || s.length + 1 >= t) return s;
        var o = JO(e, r[n]);
        return n0(e, t, r[n], n, [o, ...s])
    }
    var Gi = zt();
    class Ys {
        constructor() {
            Ys.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Ys.id
        }
        setupOnce() {
            zO(t => {
                if (xr().getIntegration(Ys)) {
                    if (!Gi.navigator && !Gi.location && !Gi.document) return t;
                    var r = t.request && t.request.url || Gi.location && Gi.location.href;
                    const {
                        referrer: o
                    } = Gi.document || {}, {
                        userAgent: l
                    } = Gi.navigator || {};
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
    Ys.__initStatic();
    class qs {
        constructor() {
            qs.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = qs.id
        }
        setupOnce(t, r) {
            var n = s => {
                var o = r().getIntegration(qs);
                if (o) {
                    try {
                        if (AZ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Event dropped due to being a duplicate of previously captured event."), null
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
    qs.__initStatic();

    function AZ(e, t) {
        return t ? !!(IZ(e, t) || wZ(e, t)) : !1
    }

    function IZ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !s0(e, t) || !i0(e, t))
    }

    function wZ(e, t) {
        var r = pE(t),
            n = pE(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !s0(e, t) || !i0(e, t))
    }

    function i0(e, t) {
        let r = gE(e),
            n = gE(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                o = r[l];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function s0(e, t) {
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

    function pE(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function gE(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Hs, new io, new ao, new so, new fi, new Ks, new qs, new Ys;

    function CZ(e = {}, t = xr()) {
        var r = zt();
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
        l.async = !0, l.src = KJ(o, e), e.onLoad && (l.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const NZ = it({
            setup() {
                return {
                    fatalError: es(vo.fatal.error)
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
                    CZ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        _o = e => (pc("data-v-a7272d53"), e = e(), gc(), e),
        $Z = {
            class: "jbg fatal"
        },
        RZ = {
            class: "constrain"
        },
        LZ = _o(() => Z("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        PZ = {
            class: "content"
        },
        kZ = _o(() => Z("h1", null, "You have encountered an error", -1)),
        DZ = _o(() => Z("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        xZ = _o(() => Z("ul", null, [Z("li", null, "Refresh the page"), Z("li", null, "Turn off adblockers or other browser extensions."), Z("li", null, "Check your connection to the Internet."), Z("li", null, "Make sure you're using an up-to-date browser."), Z("li", null, "If that doesn't work, let us know.")], -1)),
        MZ = _o(() => Z("hr", null, null, -1)),
        FZ = {
            class: "error"
        };

    function UZ(e, t, r, n, s, o) {
        return V(), z("div", $Z, [Z("div", RZ, [LZ, Z("div", PZ, [kZ, DZ, xZ, Z("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), MZ, Z("pre", FZ, _t(e.message), 1)])])])
    }
    const BZ = ze(NZ, [
            ["render", UZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Il = Bn({
            hasCrashed: !1
        }),
        GZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(vo.fatal.error, kr(() => Il));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof ui.EcastEntityNotFound || r instanceof ui.EcastFilterError || r instanceof ui.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Il.hasCrashed = !0, Il.event = r, Il.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", BZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var jZ = PO,
        WZ = kO;

    function VZ(e, t) {
        t = jZ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[WZ(t[r++])];
        return r && r == n ? e : void 0
    }
    var HZ = VZ,
        KZ = HZ;

    function YZ(e, t, r) {
        var n = e == null ? void 0 : KZ(e, t);
        return n === void 0 ? r : n
    }
    var qZ = YZ,
        zZ = Math.floor,
        XZ = Math.random;

    function JZ(e, t) {
        return e + zZ(XZ() * (t - e + 1))
    }
    var ZZ = JZ,
        QZ = ZZ;

    function eQ(e) {
        var t = e.length;
        return t ? e[QZ(0, t - 1)] : void 0
    }
    var a0 = eQ,
        tQ = RO;

    function rQ(e, t) {
        return tQ(t, function(r) {
            return e[r]
        })
    }
    var nQ = rQ,
        iQ = nQ,
        sQ = Vc;

    function aQ(e) {
        return e == null ? [] : iQ(e, sQ(e))
    }
    var oQ = aQ,
        lQ = a0,
        cQ = oQ;

    function uQ(e) {
        return lQ(cQ(e))
    }
    var fQ = uQ,
        dQ = a0,
        hQ = fQ,
        pQ = yi;

    function gQ(e) {
        var t = pQ(e) ? dQ : hQ;
        return t(e)
    }
    var mQ = gQ;

    function mE(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = qZ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), mQ(s)
    }
    const vQ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = mE(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return mE(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        yQ = it({
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
        _Q = "main/pp9/fourbage/assets/928ef0da.png",
        EQ = "main/pp9/fourbage/assets/0bb76a2d.png",
        bQ = "main/pp9/fourbage/assets/ed4469b3.png",
        TQ = {
            key: 0,
            class: "image",
            src: _Q,
            alt: "Kicked"
        },
        OQ = {
            key: 1,
            class: "image",
            src: EQ,
            alt: "Thank You"
        },
        SQ = {
            key: 2,
            class: "image",
            src: bQ,
            alt: "Error"
        },
        AQ = {
            class: "text"
        },
        IQ = {
            key: 3,
            class: "subtext"
        },
        wQ = {
            class: "actions"
        };

    function CQ(e, t, r, n, s, o) {
        const l = Rt("bb");
        return V(), z("div", {
            class: Me(["error-model", e.classes])
        }, [e.image === "tear" ? (V(), z("img", TQ)) : e.image === "moon" ? (V(), z("img", OQ)) : (V(), z("img", SQ)), Ce(Z("h3", AQ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ce((V(), z("h3", IQ, null, 512)), [
            [l, e.subtext]
        ]) : Oe("", !0), Z("div", wQ, [Ce(Z("button", {
            onClick: t[0] || (t[0] = Zr(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const NQ = ze(yQ, [
            ["render", CQ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        $Q = it({
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
        RQ = {
            class: "text"
        },
        LQ = {
            key: 0,
            class: "subtext"
        },
        PQ = {
            class: "actions"
        },
        kQ = ["onClick"];

    function DQ(e, t, r, n, s, o) {
        const l = Rt("bb");
        return V(), z("div", {
            class: Me(["options-modal", e.classes])
        }, [Ce(Z("h3", RQ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ce((V(), z("h3", LQ, null, 512)), [
            [l, e.subtext]
        ]) : Oe("", !0), Z("div", PQ, [(V(!0), z(et, null, un(e.options, (u, f) => Ce((V(), z("button", {
            key: f,
            class: Me(u.classes),
            onClick: Zr(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, kQ)), [
            [l, u.text]
        ])), 128))])], 2)
    }
    const xQ = ze($Q, [
            ["render", DQ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        MQ = it({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = NQ : e === "Options" ? this.content = xQ : this.content = e, new Promise(n => {
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

    function FQ(e, t, r, n, s, o) {
        return V(), er(Oc, {
            name: "modal-transition"
        }, {
            default: Qi(() => [e.props ? (V(), z("div", {
                key: 0,
                class: Me(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = Bs((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = Zr((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (V(), er(yc(e.content), bc({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Oe("", !0)], 34)) : Oe("", !0)]),
            _: 1
        })
    }
    const UQ = ze(MQ, [
            ["render", FQ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        BQ = {
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
                e.component("Modal", UQ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        GQ = it({
            setup() {
                return {
                    announcment: es(vo.textDescriptions.announcement)
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
        jQ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function WQ(e, t, r, n, s, o) {
        return V(), z("div", jQ, [(V(!0), z(et, null, un(e.lines, l => (V(), z("p", {
            key: l.id
        }, _t(l.text), 1))), 128))])
    }
    const VQ = ze(GQ, [
            ["render", WQ]
        ]),
        vE = on(""),
        HQ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(vo.textDescriptions.announcement, kr(() => vE.value));
                const t = r => {
                    vE.value = r
                };
                e.component("TextDescriptions", VQ), e.config.globalProperties.$announce = t
            }
        },
        KQ = {
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
        YQ = {
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
        qQ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Si = e => qQ ? Symbol(e) : e,
        zQ = (e, t, r) => XQ({
            l: e,
            k: t,
            s: r
        }),
        XQ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Gt = e => typeof e == "number" && isFinite(e),
        JQ = e => Lp(e) === "[object Date]",
        mi = e => Lp(e) === "[object RegExp]",
        zc = e => Be(e) && Object.keys(e).length === 0;

    function ZQ(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const tr = Object.assign;

    function yE(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const QQ = Object.prototype.hasOwnProperty;

    function Rp(e, t) {
        return QQ.call(e, t)
    }
    const Et = Array.isArray,
        kt = e => typeof e == "function",
        ye = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        bt = e => e !== null && typeof e == "object",
        o0 = Object.prototype.toString,
        Lp = e => o0.call(e),
        Be = e => Lp(e) === "[object Object]",
        eee = e => e == null ? "" : Et(e) || Be(e) && e.toString === o0 ? JSON.stringify(e, null, 2) : String(e);
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

    function Xc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, l = e, u = new SyntaxError(String(l));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function tee(e) {
        throw e
    }

    function ree(e, t, r) {
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
    const Dn = " ",
        nee = "\r",
        mr = `
`,
        iee = String.fromCharCode(8232),
        see = String.fromCharCode(8233);

    function aee(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const l = oe => t[oe] === nee && t[oe + 1] === mr,
            u = oe => t[oe] === mr,
            f = oe => t[oe] === see,
            h = oe => t[oe] === iee,
            g = oe => l(oe) || u(oe) || f(oe) || h(oe),
            y = () => r,
            b = () => n,
            T = () => s,
            R = () => o,
            D = oe => l(oe) || f(oe) || h(oe) ? mr : t[oe],
            B = () => D(r),
            w = () => D(r + o);

        function H() {
            return o = 0, g(r) && (n++, s = 0), l(r) && r++, r++, s++, t[r]
        }

        function q() {
            return l(r + o) && o++, o++, t[r + o]
        }

        function j() {
            r = 0, n = 1, s = 1, o = 0
        }

        function G(oe = 0) {
            o = oe
        }

        function J() {
            const oe = r + o;
            for (; oe !== r;) H();
            o = 0
        }
        return {
            index: y,
            line: b,
            column: T,
            peekOffset: R,
            charAt: D,
            currentChar: B,
            currentPeek: w,
            next: H,
            peek: q,
            reset: j,
            resetPeek: G,
            skipToPeek: J
        }
    }
    const ri = void 0,
        _E = "'",
        oee = "tokenizer";

    function lee(e, t = {}) {
        const r = t.location !== !1,
            n = aee(e),
            s = () => n.index(),
            o = () => ree(n.line(), n.column(), n.index()),
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

        function y(m, p, A, ...M) {
            const U = h();
            if (p.column += A, p.offset += A, g) {
                const Y = th(U.startLoc, p),
                    ce = Xc(m, Y, {
                        domain: oee,
                        args: M
                    });
                g(ce)
            }
        }

        function b(m, p, A) {
            m.endLoc = o(), m.currentType = p;
            const M = {
                type: p
            };
            return r && (M.loc = th(m.startLoc, m.endLoc)), A != null && (M.value = A), M
        }
        const T = m => b(m, 14);

        function R(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (y(nt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function D(m) {
            let p = "";
            for (; m.currentPeek() === Dn || m.currentPeek() === mr;) p += m.currentPeek(), m.peek();
            return p
        }

        function B(m) {
            const p = D(m);
            return m.skipToPeek(), p
        }

        function w(m) {
            if (m === ri) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function H(m) {
            if (m === ri) return !1;
            const p = m.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function q(m, p) {
            const {
                currentType: A
            } = p;
            if (A !== 2) return !1;
            D(m);
            const M = w(m.currentPeek());
            return m.resetPeek(), M
        }

        function j(m, p) {
            const {
                currentType: A
            } = p;
            if (A !== 2) return !1;
            D(m);
            const M = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                U = H(M);
            return m.resetPeek(), U
        }

        function G(m, p) {
            const {
                currentType: A
            } = p;
            if (A !== 2) return !1;
            D(m);
            const M = m.currentPeek() === _E;
            return m.resetPeek(), M
        }

        function J(m, p) {
            const {
                currentType: A
            } = p;
            if (A !== 8) return !1;
            D(m);
            const M = m.currentPeek() === ".";
            return m.resetPeek(), M
        }

        function oe(m, p) {
            const {
                currentType: A
            } = p;
            if (A !== 9) return !1;
            D(m);
            const M = w(m.currentPeek());
            return m.resetPeek(), M
        }

        function le(m, p) {
            const {
                currentType: A
            } = p;
            if (!(A === 8 || A === 12)) return !1;
            D(m);
            const M = m.currentPeek() === ":";
            return m.resetPeek(), M
        }

        function ue(m, p) {
            const {
                currentType: A
            } = p;
            if (A !== 10) return !1;
            const M = () => {
                    const Y = m.currentPeek();
                    return Y === "{" ? w(m.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === Dn || !Y ? !1 : Y === mr ? (m.peek(), M()) : w(Y)
                },
                U = M();
            return m.resetPeek(), U
        }

        function Ne(m) {
            D(m);
            const p = m.currentPeek() === "|";
            return m.resetPeek(), p
        }

        function we(m) {
            const p = D(m),
                A = m.currentPeek() === "%" && m.peek() === "{";
            return m.resetPeek(), {
                isModulo: A,
                hasSpace: p.length > 0
            }
        }

        function fe(m, p = !0) {
            const A = (U = !1, Y = "", ce = !1) => {
                    const se = m.currentPeek();
                    return se === "{" ? Y === "%" ? !1 : U : se === "@" || !se ? Y === "%" ? !0 : U : se === "%" ? (m.peek(), A(U, "%", !0)) : se === "|" ? Y === "%" || ce ? !0 : !(Y === Dn || Y === mr) : se === Dn ? (m.peek(), A(!0, Dn, ce)) : se === mr ? (m.peek(), A(!0, mr, ce)) : !0
                },
                M = A();
            return p && m.resetPeek(), M
        }

        function Ie(m, p) {
            const A = m.currentChar();
            return A === ri ? ri : p(A) ? (m.next(), A) : null
        }

        function F(m) {
            return Ie(m, A => {
                const M = A.charCodeAt(0);
                return M >= 97 && M <= 122 || M >= 65 && M <= 90 || M >= 48 && M <= 57 || M === 95 || M === 36
            })
        }

        function ie(m) {
            return Ie(m, A => {
                const M = A.charCodeAt(0);
                return M >= 48 && M <= 57
            })
        }

        function de(m) {
            return Ie(m, A => {
                const M = A.charCodeAt(0);
                return M >= 48 && M <= 57 || M >= 65 && M <= 70 || M >= 97 && M <= 102
            })
        }

        function Ee(m) {
            let p = "",
                A = "";
            for (; p = ie(m);) A += p;
            return A
        }

        function ve(m) {
            B(m);
            const p = m.currentChar();
            return p !== "%" && y(nt.EXPECTED_TOKEN, o(), 0, p), m.next(), "%"
        }

        function Se(m) {
            let p = "";
            for (;;) {
                const A = m.currentChar();
                if (A === "{" || A === "}" || A === "@" || A === "|" || !A) break;
                if (A === "%")
                    if (fe(m)) p += A, m.next();
                    else break;
                else if (A === Dn || A === mr)
                    if (fe(m)) p += A, m.next();
                    else {
                        if (Ne(m)) break;
                        p += A, m.next()
                    }
                else p += A, m.next()
            }
            return p
        }

        function Fe(m) {
            B(m);
            let p = "",
                A = "";
            for (; p = F(m);) A += p;
            return m.currentChar() === ri && y(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), A
        }

        function je(m) {
            B(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${Ee(m)}`) : p += Ee(m), m.currentChar() === ri && y(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function tt(m) {
            B(m), R(m, "'");
            let p = "",
                A = "";
            const M = Y => Y !== _E && Y !== mr;
            for (; p = Ie(m, M);) p === "\\" ? A += Ct(m) : A += p;
            const U = m.currentChar();
            return U === mr || U === ri ? (y(nt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), U === mr && (m.next(), R(m, "'")), A) : (R(m, "'"), A)
        }

        function Ct(m) {
            const p = m.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return m.next(), `\\${p}`;
                case "u":
                    return wr(m, p, 4);
                case "U":
                    return wr(m, p, 6);
                default:
                    return y(nt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function wr(m, p, A) {
            R(m, p);
            let M = "";
            for (let U = 0; U < A; U++) {
                const Y = de(m);
                if (!Y) {
                    y(nt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${M}${m.currentChar()}`);
                    break
                }
                M += Y
            }
            return `\\${p}${M}`
        }

        function nr(m) {
            B(m);
            let p = "",
                A = "";
            const M = U => U !== "{" && U !== "}" && U !== Dn && U !== mr;
            for (; p = Ie(m, M);) A += p;
            return A
        }

        function yr(m) {
            let p = "",
                A = "";
            for (; p = F(m);) A += p;
            return A
        }

        function ot(m) {
            const p = (A = !1, M) => {
                const U = m.currentChar();
                return U === "{" || U === "%" || U === "@" || U === "|" || !U || U === Dn ? M : U === mr ? (M += U, m.next(), p(A, M)) : (M += U, m.next(), p(!0, M))
            };
            return p(!1, "")
        }

        function St(m) {
            B(m);
            const p = R(m, "|");
            return B(m), p
        }

        function lt(m, p) {
            let A = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && y(nt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), A = b(p, 2, "{"), B(m), p.braceNest++, A;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && y(nt.EMPTY_PLACEHOLDER, o(), 0), m.next(), A = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && B(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), A;
                case "@":
                    return p.braceNest > 0 && y(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), A = xt(m, p) || T(p), p.braceNest = 0, A;
                default:
                    let U = !0,
                        Y = !0,
                        ce = !0;
                    if (Ne(m)) return p.braceNest > 0 && y(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), A = b(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, A;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return y(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Ht(m, p);
                    if (U = q(m, p)) return A = b(p, 5, Fe(m)), B(m), A;
                    if (Y = j(m, p)) return A = b(p, 6, je(m)), B(m), A;
                    if (ce = G(m, p)) return A = b(p, 7, tt(m)), B(m), A;
                    if (!U && !Y && !ce) return A = b(p, 13, nr(m)), y(nt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, A.value), B(m), A;
                    break
            }
            return A
        }

        function xt(m, p) {
            const {
                currentType: A
            } = p;
            let M = null;
            const U = m.currentChar();
            switch ((A === 8 || A === 9 || A === 12 || A === 10) && (U === mr || U === Dn) && y(nt.INVALID_LINKED_FORMAT, o(), 0), U) {
                case "@":
                    return m.next(), M = b(p, 8, "@"), p.inLinked = !0, M;
                case ".":
                    return B(m), m.next(), b(p, 9, ".");
                case ":":
                    return B(m), m.next(), b(p, 10, ":");
                default:
                    return Ne(m) ? (M = b(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, M) : J(m, p) || le(m, p) ? (B(m), xt(m, p)) : oe(m, p) ? (B(m), b(p, 12, yr(m))) : ue(m, p) ? (B(m), U === "{" ? lt(m, p) || M : b(p, 11, ot(m))) : (A === 8 && y(nt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Ht(m, p))
            }
        }

        function Ht(m, p) {
            let A = {
                type: 14
            };
            if (p.braceNest > 0) return lt(m, p) || T(p);
            if (p.inLinked) return xt(m, p) || T(p);
            switch (m.currentChar()) {
                case "{":
                    return lt(m, p) || T(p);
                case "}":
                    return y(nt.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), b(p, 3, "}");
                case "@":
                    return xt(m, p) || T(p);
                default:
                    if (Ne(m)) return A = b(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, A;
                    const {
                        isModulo: U, hasSpace: Y
                    } = we(m);
                    if (U) return Y ? b(p, 0, Se(m)) : b(p, 4, ve(m));
                    if (fe(m)) return b(p, 0, Se(m));
                    break
            }
            return A
        }

        function Mt() {
            const {
                currentType: m,
                offset: p,
                startLoc: A,
                endLoc: M
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = A, f.lastEndLoc = M, f.offset = s(), f.startLoc = o(), n.currentChar() === ri ? b(f, 14) : Ht(n, f)
        }
        return {
            nextToken: Mt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const cee = "parser",
        uee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function fee(e, t, r) {
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

    function dee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(w, H, q, j, ...G) {
            const J = w.currentPosition();
            if (J.offset += j, J.column += j, r) {
                const oe = th(q, J),
                    le = Xc(H, oe, {
                        domain: cee,
                        args: G
                    });
                r(le)
            }
        }

        function s(w, H, q) {
            const j = {
                type: w,
                start: H,
                end: H
            };
            return t && (j.loc = {
                start: q,
                end: q
            }), j
        }

        function o(w, H, q, j) {
            w.end = H, j && (w.type = j), t && w.loc && (w.loc.end = q)
        }

        function l(w, H) {
            const q = w.context(),
                j = s(3, q.offset, q.startLoc);
            return j.value = H, o(j, w.currentOffset(), w.currentPosition()), j
        }

        function u(w, H) {
            const q = w.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                J = s(5, j, G);
            return J.index = parseInt(H, 10), w.nextToken(), o(J, w.currentOffset(), w.currentPosition()), J
        }

        function f(w, H) {
            const q = w.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                J = s(4, j, G);
            return J.key = H, w.nextToken(), o(J, w.currentOffset(), w.currentPosition()), J
        }

        function h(w, H) {
            const q = w.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                J = s(9, j, G);
            return J.value = H.replace(uee, fee), w.nextToken(), o(J, w.currentOffset(), w.currentPosition()), J
        }

        function g(w) {
            const H = w.nextToken(),
                q = w.context(),
                {
                    lastOffset: j,
                    lastStartLoc: G
                } = q,
                J = s(8, j, G);
            return H.type !== 12 ? (n(w, nt.UNEXPECTED_EMPTY_LINKED_MODIFIER, q.lastStartLoc, 0), J.value = "", o(J, j, G), {
                nextConsumeToken: H,
                node: J
            }) : (H.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(H)), J.value = H.value || "", o(J, w.currentOffset(), w.currentPosition()), {
                node: J
            })
        }

        function y(w, H) {
            const q = w.context(),
                j = s(7, q.offset, q.startLoc);
            return j.value = H, o(j, w.currentOffset(), w.currentPosition()), j
        }

        function b(w) {
            const H = w.context(),
                q = s(6, H.offset, H.startLoc);
            let j = w.nextToken();
            if (j.type === 9) {
                const G = g(w);
                q.modifier = G.node, j = G.nextConsumeToken || w.nextToken()
            }
            switch (j.type !== 10 && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(j)), j = w.nextToken(), j.type === 2 && (j = w.nextToken()), j.type) {
                case 11:
                    j.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(j)), q.key = y(w, j.value || "");
                    break;
                case 5:
                    j.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(j)), q.key = f(w, j.value || "");
                    break;
                case 6:
                    j.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(j)), q.key = u(w, j.value || "");
                    break;
                case 7:
                    j.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(j)), q.key = h(w, j.value || "");
                    break;
                default:
                    n(w, nt.UNEXPECTED_EMPTY_LINKED_KEY, H.lastStartLoc, 0);
                    const G = w.context(),
                        J = s(7, G.offset, G.startLoc);
                    return J.value = "", o(J, G.offset, G.startLoc), q.key = J, o(q, G.offset, G.startLoc), {
                        nextConsumeToken: j,
                        node: q
                    }
            }
            return o(q, w.currentOffset(), w.currentPosition()), {
                node: q
            }
        }

        function T(w) {
            const H = w.context(),
                q = H.currentType === 1 ? w.currentOffset() : H.offset,
                j = H.currentType === 1 ? H.endLoc : H.startLoc,
                G = s(2, q, j);
            G.items = [];
            let J = null;
            do {
                const ue = J || w.nextToken();
                switch (J = null, ue.type) {
                    case 0:
                        ue.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), G.items.push(l(w, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), G.items.push(u(w, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), G.items.push(f(w, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(w, nt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), G.items.push(h(w, ue.value || ""));
                        break;
                    case 8:
                        const Ne = b(w);
                        G.items.push(Ne.node), J = Ne.nextConsumeToken || null;
                        break
                }
            } while (H.currentType !== 14 && H.currentType !== 1);
            const oe = H.currentType === 1 ? H.lastOffset : w.currentOffset(),
                le = H.currentType === 1 ? H.lastEndLoc : w.currentPosition();
            return o(G, oe, le), G
        }

        function R(w, H, q, j) {
            const G = w.context();
            let J = j.items.length === 0;
            const oe = s(1, H, q);
            oe.cases = [], oe.cases.push(j);
            do {
                const le = T(w);
                J || (J = le.items.length === 0), oe.cases.push(le)
            } while (G.currentType !== 14);
            return J && n(w, nt.MUST_HAVE_MESSAGES_IN_PLURAL, q, 0), o(oe, w.currentOffset(), w.currentPosition()), oe
        }

        function D(w) {
            const H = w.context(),
                {
                    offset: q,
                    startLoc: j
                } = H,
                G = T(w);
            return H.currentType === 14 ? G : R(w, q, j, G)
        }

        function B(w) {
            const H = lee(w, tr({}, e)),
                q = H.context(),
                j = s(0, q.offset, q.startLoc);
            return t && j.loc && (j.loc.source = w), j.body = D(H), q.currentType !== 14 && n(H, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, w[q.offset] || ""), o(j, H.currentOffset(), H.currentPosition()), j
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

    function hee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function EE(e, t) {
        for (let r = 0; r < e.length; r++) Pp(e[r], t)
    }

    function Pp(e, t) {
        switch (e.type) {
            case 1:
                EE(e.cases, t), t.helper("plural");
                break;
            case 2:
                EE(e.items, t);
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

    function pee(e, t = {}) {
        const r = hee(e);
        r.helper("normalize"), e.body && Pp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function gee(e, t) {
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

        function f(D, B) {
            l.code += D
        }

        function h(D, B = !0) {
            const w = B ? s : "";
            f(o ? w + "  ".repeat(D) : w)
        }

        function g(D = !0) {
            const B = ++l.indentLevel;
            D && h(B)
        }

        function y(D = !0) {
            const B = --l.indentLevel;
            D && h(B)
        }

        function b() {
            h(l.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: g,
            deindent: y,
            newline: b,
            helper: D => `_${D}`,
            needIndent: () => l.needIndent
        }
    }

    function mee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ra(e, t.key), t.modifier ? (e.push(", "), ra(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function vee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (ra(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function yee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let o = 0; o < s && (ra(e, t.cases[o]), o !== s - 1); o++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function _ee(e, t) {
        t.body ? ra(e, t.body) : e.push("null")
    }

    function ra(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                _ee(e, t);
                break;
            case 1:
                yee(e, t);
                break;
            case 2:
                vee(e, t);
                break;
            case 6:
                mee(e, t);
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
    const Eee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = gee(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: l
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${u.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ra(f, e), f.deindent(l), f.push("}");
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

    function bee(e, t = {}) {
        const r = tr({}, t),
            s = dee(r).parse(e);
        return pee(s, r), Eee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Tee = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Ai = [];
    Ai[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    Ai[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    Ai[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    Ai[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    Ai[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    Ai[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    Ai[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const Oee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function See(e) {
        return Oee.test(e)
    }

    function Aee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function Iee(e) {
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

    function wee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : See(t) ? Aee(t) : "*" + t
    }

    function Cee(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            o, l, u, f, h, g, y;
        const b = [];
        b[0] = () => {
            l === void 0 ? l = u : l += u
        }, b[1] = () => {
            l !== void 0 && (t.push(l), l = void 0)
        }, b[2] = () => {
            b[0](), s++
        }, b[3] = () => {
            if (s > 0) s--, n = 4, b[0]();
            else {
                if (s = 0, l === void 0 || (l = wee(l), l === !1)) return !1;
                b[1]()
            }
        };

        function T() {
            const R = e[r + 1];
            if (n === 5 && R === "'" || n === 6 && R === '"') return r++, u = "\\" + R, b[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && T())) {
                if (f = Iee(o), y = Ai[n], h = y[f] || y.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = b[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const bE = new Map;

    function Nee(e, t) {
        return bt(e) ? e[t] : null
    }

    function $ee(e, t) {
        if (!bt(e)) return null;
        let r = bE.get(t);
        if (r || (r = Cee(t), r && bE.set(t, r)), !r) return null;
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
    const Ree = e => e,
        Lee = e => "",
        Pee = "text",
        kee = e => e.length === 0 ? "" : e.join(""),
        Dee = eee;

    function TE(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function xee(e) {
        const t = Gt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Gt(e.named.count) || Gt(e.named.n)) ? Gt(e.named.count) ? e.named.count : Gt(e.named.n) ? e.named.n : t : t
    }

    function Mee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Fee(e = {}) {
        const t = e.locale,
            r = xee(e),
            n = bt(e.pluralRules) && ye(t) && kt(e.pluralRules[t]) ? e.pluralRules[t] : TE,
            s = bt(e.pluralRules) && ye(t) && kt(e.pluralRules[t]) ? TE : void 0,
            o = w => w[n(r, w.length, s)],
            l = e.list || [],
            u = w => l[w],
            f = e.named || {};
        Gt(e.pluralIndex) && Mee(r, f);
        const h = w => f[w];

        function g(w) {
            const H = kt(e.messages) ? e.messages(w) : bt(e.messages) ? e.messages[w] : !1;
            return H || (e.parent ? e.parent.message(w) : Lee)
        }
        const y = w => e.modifiers ? e.modifiers[w] : Ree,
            b = Be(e.processor) && kt(e.processor.normalize) ? e.processor.normalize : kee,
            T = Be(e.processor) && kt(e.processor.interpolate) ? e.processor.interpolate : Dee,
            R = Be(e.processor) && ye(e.processor.type) ? e.processor.type : Pee,
            B = {
                list: u,
                named: h,
                plural: o,
                linked: (w, ...H) => {
                    const [q, j] = H;
                    let G = "text",
                        J = "";
                    H.length === 1 ? bt(q) ? (J = q.modifier || J, G = q.type || G) : ye(q) && (J = q || J) : H.length === 2 && (ye(q) && (J = q || J), ye(j) && (G = j || G));
                    let oe = g(w)(B);
                    return G === "vnode" && Et(oe) && J && (oe = oe[0]), J ? y(J)(oe, G) : oe
                },
                message: g,
                type: R,
                interpolate: T,
                normalize: b
            };
        return B
    }
    let Uee = null;
    Tee.FunctionTranslate;

    function Bee(e) {
        return t => Uee
    }
    const Gee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function jee(e, t, r) {
        return [...new Set([r, ...Et(t) ? t : bt(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function l0(e, t, r) {
        const n = ye(r) ? r : Eo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let l = [r];
            for (; Et(l);) l = OE(o, l, t);
            const u = Et(t) || !Be(t) ? t : t.default ? t.default : null;
            l = ye(u) ? [u] : u, Et(l) && OE(o, l, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function OE(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Je(n); s++) {
            const o = t[s];
            ye(o) && (n = Wee(e, t[s], r))
        }
        return n
    }

    function Wee(e, t, r) {
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
            e.push(s), (Et(r) || Be(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const Hee = "9.2.2",
        Jc = -1,
        Eo = "en-US",
        SE = "",
        AE = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Kee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? AE(e) : t === "vnode" && bt(e) && "__v_isVNode" in e ? AE(e.children) : e
        }
    }
    let c0;

    function Yee(e) {
        c0 = e
    }
    let u0;

    function qee(e) {
        u0 = e
    }
    let f0;

    function zee(e) {
        f0 = e
    }
    let IE = 0;

    function Xee(e = {}) {
        const t = ye(e.version) ? e.version : Hee,
            r = ye(e.locale) ? e.locale : Eo,
            n = Et(e.fallbackLocale) || Be(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Be(e.messages) ? e.messages : {
                [r]: {}
            },
            o = Be(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            l = Be(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = tr({}, e.modifiers || {}, Kee()),
            f = e.pluralRules || {},
            h = kt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            y = Je(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            T = !!e.unresolving,
            R = kt(e.postTranslation) ? e.postTranslation : null,
            D = Be(e.processor) ? e.processor : null,
            B = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            w = !!e.escapeParameter,
            H = kt(e.messageCompiler) ? e.messageCompiler : c0,
            q = kt(e.messageResolver) ? e.messageResolver : u0 || Nee,
            j = kt(e.localeFallbacker) ? e.localeFallbacker : f0 || jee,
            G = bt(e.fallbackContext) ? e.fallbackContext : void 0,
            J = kt(e.onWarn) ? e.onWarn : ZQ,
            oe = e,
            le = bt(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = bt(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            Ne = bt(oe.__meta) ? oe.__meta : {};
        IE++;
        const we = {
            version: t,
            cid: IE,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: g,
            fallbackWarn: y,
            fallbackFormat: b,
            unresolving: T,
            postTranslation: R,
            processor: D,
            warnHtmlMessage: B,
            escapeParameter: w,
            messageCompiler: H,
            messageResolver: q,
            localeFallbacker: j,
            fallbackContext: G,
            onWarn: J,
            __meta: Ne
        };
        return we.datetimeFormats = o, we.numberFormats = l, we.__datetimeFormatters = le, we.__numberFormatters = ue, we
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

    function ka(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const Jee = e => e;
    let wE = Object.create(null);

    function Zee(e, t = {}) {
        {
            const n = (t.onCacheKey || Jee)(e),
                s = wE[n];
            if (s) return s;
            let o = !1;
            const l = t.onError || tee;
            t.onError = h => {
                o = !0, l(h)
            };
            const {
                code: u
            } = bee(e, t), f = new Function(`return ${u}`)();
            return o ? f : wE[n] = f
        }
    }
    let d0 = nt.__EXTEND_POINT__;
    const id = () => ++d0,
        ks = {
            INVALID_ARGUMENT: d0,
            INVALID_DATE_ARGUMENT: id(),
            INVALID_ISO_DATE_ARGUMENT: id(),
            __EXTEND_POINT__: id()
        };

    function Ds(e) {
        return Xc(e, null, void 0)
    }
    const CE = () => "",
        as = e => kt(e);

    function NE(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: l,
            messages: u
        } = e, [f, h] = rh(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, y = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, b = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, T = !!h.resolvedMessage, R = ye(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", D = r || R !== "", B = ye(h.locale) ? h.locale : e.locale;
        b && Qee(h);
        let [w, H, q] = T ? [f, B, u[B] || {}] : h0(e, f, B, l, y, g), j = w, G = f;
        if (!T && !(ye(j) || as(j)) && D && (j = R, G = j), !T && (!(ye(j) || as(j)) || !ye(H))) return s ? Jc : f;
        let J = !1;
        const oe = () => {
                J = !0
            },
            le = as(j) ? j : p0(e, f, H, j, G, oe);
        if (J) return j;
        const ue = rte(e, H, q, h),
            Ne = Fee(ue),
            we = ete(e, le, Ne);
        return n ? n(we, f) : we
    }

    function Qee(e) {
        Et(e.list) ? e.list = e.list.map(t => ye(t) ? yE(t) : t) : bt(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = yE(e.named[t]))
        })
    }

    function h0(e, t, r, n, s, o) {
        const {
            messages: l,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, n, r);
        let y = {},
            b, T = null;
        const R = "translate";
        for (let D = 0; D < g.length && (b = g[D], y = l[b] || {}, (T = f(y, t)) === null && (T = y[t]), !(ye(T) || kt(T))); D++) {
            const B = kp(e, t, b, o, R);
            B !== t && (T = B)
        }
        return [T, b, y]
    }

    function p0(e, t, r, n, s, o) {
        const {
            messageCompiler: l,
            warnHtmlMessage: u
        } = e;
        if (as(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (l == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = l(n, tte(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function ete(e, t, r) {
        return t(r)
    }

    function rh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Gt(t) && !as(t)) throw Ds(ks.INVALID_ARGUMENT);
        const o = Gt(t) ? String(t) : (as(t), t);
        return Gt(r) ? s.plural = r : ye(r) ? s.default = r : Be(r) && !zc(r) ? s.named = r : Et(r) && (s.list = r), Gt(n) ? s.plural = n : ye(n) ? s.default = n : Be(n) && tr(s, n), [o, s]
    }

    function tte(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw o && o(l), l
            },
            onCacheKey: l => zQ(t, r, l)
        }
    }

    function rte(e, t, r, n) {
        const {
            modifiers: s,
            pluralRules: o,
            messageResolver: l,
            fallbackLocale: u,
            fallbackWarn: f,
            missingWarn: h,
            fallbackContext: g
        } = e, b = {
            locale: t,
            modifiers: s,
            pluralRules: o,
            messages: T => {
                let R = l(r, T);
                if (R == null && g) {
                    const [, , D] = h0(g, T, t, u, f, h);
                    R = l(D, T)
                }
                if (ye(R)) {
                    let D = !1;
                    const w = p0(e, T, t, R, T, () => {
                        D = !0
                    });
                    return D ? CE : w
                } else return as(R) ? R : CE
            }
        };
        return e.processor && (b.processor = e.processor), n.list && (b.list = n.list), n.named && (b.named = n.named), Gt(n.plural) && (b.pluralIndex = n.plural), b
    }

    function $E(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, y] = nh(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const T = !!g.part,
            R = ye(g.locale) ? g.locale : e.locale,
            D = l(e, s, R);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(R, y).format(h);
        let B = {},
            w, H = null;
        const q = "datetime format";
        for (let J = 0; J < D.length && (w = D[J], B = r[w] || {}, H = B[f], !Be(H)); J++) kp(e, f, w, b, q);
        if (!Be(H) || !ye(w)) return n ? Jc : f;
        let j = `${w}__${f}`;
        zc(y) || (j = `${j}__${JSON.stringify(y)}`);
        let G = u.get(j);
        return G || (G = new Intl.DateTimeFormat(w, tr({}, H, y)), u.set(j, G)), T ? G.formatToParts(h) : G.format(h)
    }
    const g0 = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function nh(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {},
            u;
        if (ye(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Ds(ks.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw Ds(ks.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (JQ(t)) {
            if (isNaN(t.getTime())) throw Ds(ks.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Gt(t)) u = t;
        else throw Ds(ks.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            g0.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (l = n), Be(s) && (l = s), [o.key || "", u, o, l]
    }

    function RE(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function LE(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, y] = ih(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const T = !!g.part,
            R = ye(g.locale) ? g.locale : e.locale,
            D = l(e, s, R);
        if (!ye(f) || f === "") return new Intl.NumberFormat(R, y).format(h);
        let B = {},
            w, H = null;
        const q = "number format";
        for (let J = 0; J < D.length && (w = D[J], B = r[w] || {}, H = B[f], !Be(H)); J++) kp(e, f, w, b, q);
        if (!Be(H) || !ye(w)) return n ? Jc : f;
        let j = `${w}__${f}`;
        zc(y) || (j = `${j}__${JSON.stringify(y)}`);
        let G = u.get(j);
        return G || (G = new Intl.NumberFormat(w, tr({}, H, y)), u.set(j, G)), T ? G.formatToParts(h) : G.format(h)
    }
    const m0 = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ih(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {};
        if (!Gt(t)) throw Ds(ks.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            m0.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (l = n), Be(s) && (l = s), [o.key || "", u, o, l]
    }

    function PE(e, t, r) {
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
    const nte = "9.2.2";
    Gee.__EXTEND_POINT__;
    let v0 = nt.__EXTEND_POINT__;
    const Or = () => ++v0,
        Ft = {
            UNEXPECTED_RETURN_TYPE: v0,
            INVALID_ARGUMENT: Or(),
            MUST_BE_CALL_SETUP_TOP: Or(),
            NOT_INSLALLED: Or(),
            NOT_AVAILABLE_IN_LEGACY_MODE: Or(),
            REQUIRED_VALUE: Or(),
            INVALID_VALUE: Or(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Or(),
            NOT_INSLALLED_WITH_PROVIDE: Or(),
            UNEXPECTED_ERROR: Or(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: Or(),
            BRIDGE_SUPPORT_VUE_2_ONLY: Or(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Or(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Or(),
            __EXTEND_POINT__: Or()
        };

    function Wt(e, ...t) {
        return Xc(e, null, void 0)
    }
    const sh = Si("__transrateVNode"),
        ah = Si("__datetimeParts"),
        oh = Si("__numberParts"),
        y0 = Si("__setPluralRules");
    Si("__intlifyMeta");
    const _0 = Si("__injectWithOption");

    function lh(e) {
        if (!bt(e)) return e;
        for (const t in e)
            if (!!Rp(e, t))
                if (!t.includes(".")) bt(e[t]) && lh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], bt(s[r[n]]) && lh(s[r[n]])
                } return e
    }

    function Zc(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, l = Be(r) ? r : Et(n) ? {} : {
            [e]: {}
        };
        if (Et(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (l[f] = l[f] || {}, Ka(h, l[f])) : Ka(h, l)
                } else ye(u) && Ka(JSON.parse(u), l)
            }), s == null && o)
            for (const u in l) Rp(l, u) && lh(l[u]);
        return l
    }
    const wl = e => !bt(e) || Et(e);

    function Ka(e, t) {
        if (wl(e) || wl(t)) throw Wt(Ft.INVALID_VALUE);
        for (const r in e) Rp(e, r) && (wl(e[r]) || wl(t[r]) ? t[r] = e[r] : Ka(e[r], t[r]))
    }

    function ite(e) {
        return e.type
    }

    function E0(e, t, r) {
        let n = bt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Zc(e.locale.value, {
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

    function kE(e) {
        return rt(_c, null, e, 0)
    }
    let DE = 0;

    function xE(e) {
        return (t, r, n, s) => e(r, n, os() || void 0, s)
    }

    function Dp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Je(e.inheritLocale) ? e.inheritLocale : !0;
        const o = on(r && s ? r.locale.value : ye(e.locale) ? e.locale : Eo),
            l = on(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || Et(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = on(Zc(o.value, e)),
            f = on(Be(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = on(Be(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Je(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : Je(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = r ? r.fallbackRoot : Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            T = !!e.fallbackFormat,
            R = kt(e.missing) ? e.missing : null,
            D = kt(e.missing) ? xE(e.missing) : null,
            B = kt(e.postTranslation) ? e.postTranslation : null,
            w = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const q = r ? r.modifiers : Be(e.modifiers) ? e.modifiers : {};
        let j = e.pluralRules || r && r.pluralRules,
            G;
        G = (() => {
            const N = {
                version: nte,
                locale: o.value,
                fallbackLocale: l.value,
                messages: u.value,
                modifiers: q,
                pluralRules: j,
                missing: D === null ? void 0 : D,
                missingWarn: g,
                fallbackWarn: y,
                fallbackFormat: T,
                unresolving: !0,
                postTranslation: B === null ? void 0 : B,
                warnHtmlMessage: w,
                escapeParameter: H,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return N.datetimeFormats = f.value, N.numberFormats = h.value, N.__datetimeFormatters = Be(G) ? G.__datetimeFormatters : void 0, N.__numberFormatters = Be(G) ? G.__numberFormatters : void 0, Xee(N)
        })(), ka(G, o.value, l.value);

        function oe() {
            return [o.value, l.value, u.value, f.value, h.value]
        }
        const le = kr({
                get: () => o.value,
                set: N => {
                    o.value = N, G.locale = o.value
                }
            }),
            ue = kr({
                get: () => l.value,
                set: N => {
                    l.value = N, G.fallbackLocale = l.value, ka(G, o.value, N)
                }
            }),
            Ne = kr(() => u.value),
            we = kr(() => f.value),
            fe = kr(() => h.value);

        function Ie() {
            return kt(B) ? B : null
        }

        function F(N) {
            B = N, G.postTranslation = N
        }

        function ie() {
            return R
        }

        function de(N) {
            N !== null && (D = xE(N)), R = N, G.missing = D
        }
        const Ee = (N, W, he, pe, $e, De) => {
            oe();
            let I;
            if (I = N(G), Gt(I) && I === Jc) {
                const [O, L] = W();
                return r && b ? pe(r) : $e(O)
            } else {
                if (De(I)) return I;
                throw Wt(Ft.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...N) {
            return Ee(W => Reflect.apply(NE, null, [W, ...N]), () => rh(...N), "translate", W => Reflect.apply(W.t, W, [...N]), W => W, W => ye(W))
        }

        function Se(...N) {
            const [W, he, pe] = N;
            if (pe && !bt(pe)) throw Wt(Ft.INVALID_ARGUMENT);
            return ve(W, he, tr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Fe(...N) {
            return Ee(W => Reflect.apply($E, null, [W, ...N]), () => nh(...N), "datetime format", W => Reflect.apply(W.d, W, [...N]), () => SE, W => ye(W))
        }

        function je(...N) {
            return Ee(W => Reflect.apply(LE, null, [W, ...N]), () => ih(...N), "number format", W => Reflect.apply(W.n, W, [...N]), () => SE, W => ye(W))
        }

        function tt(N) {
            return N.map(W => ye(W) || Gt(W) || Je(W) ? kE(String(W)) : W)
        }
        const wr = {
            normalize: tt,
            interpolate: N => N,
            type: "vnode"
        };

        function nr(...N) {
            return Ee(W => {
                let he;
                const pe = W;
                try {
                    pe.processor = wr, he = Reflect.apply(NE, null, [pe, ...N])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => rh(...N), "translate", W => W[sh](...N), W => [kE(W)], W => Et(W))
        }

        function yr(...N) {
            return Ee(W => Reflect.apply(LE, null, [W, ...N]), () => ih(...N), "number format", W => W[oh](...N), () => [], W => ye(W) || Et(W))
        }

        function ot(...N) {
            return Ee(W => Reflect.apply($E, null, [W, ...N]), () => nh(...N), "datetime format", W => W[ah](...N), () => [], W => ye(W) || Et(W))
        }

        function St(N) {
            j = N, G.pluralRules = j
        }

        function lt(N, W) {
            const he = ye(W) ? W : o.value,
                pe = Mt(he);
            return G.messageResolver(pe, N) !== null
        }

        function xt(N) {
            let W = null;
            const he = l0(G, l.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const $e = u.value[he[pe]] || {},
                    De = G.messageResolver($e, N);
                if (De != null) {
                    W = De;
                    break
                }
            }
            return W
        }

        function Ht(N) {
            const W = xt(N);
            return W != null ? W : r ? r.tm(N) || {} : {}
        }

        function Mt(N) {
            return u.value[N] || {}
        }

        function m(N, W) {
            u.value[N] = W, G.messages = u.value
        }

        function p(N, W) {
            u.value[N] = u.value[N] || {}, Ka(W, u.value[N]), G.messages = u.value
        }

        function A(N) {
            return f.value[N] || {}
        }

        function M(N, W) {
            f.value[N] = W, G.datetimeFormats = f.value, RE(G, N, W)
        }

        function U(N, W) {
            f.value[N] = tr(f.value[N] || {}, W), G.datetimeFormats = f.value, RE(G, N, W)
        }

        function Y(N) {
            return h.value[N] || {}
        }

        function ce(N, W) {
            h.value[N] = W, G.numberFormats = h.value, PE(G, N, W)
        }

        function se(N, W) {
            h.value[N] = tr(h.value[N] || {}, W), G.numberFormats = h.value, PE(G, N, W)
        }
        DE++, r && eh && (ts(r.locale, N => {
            s && (o.value = N, G.locale = N, ka(G, o.value, l.value))
        }), ts(r.fallbackLocale, N => {
            s && (l.value = N, G.fallbackLocale = N, ka(G, o.value, l.value))
        }));
        const re = {
            id: DE,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(N) {
                s = N, N && r && (o.value = r.locale.value, l.value = r.fallbackLocale.value, ka(G, o.value, l.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: Ne,
            get modifiers() {
                return q
            },
            get pluralRules() {
                return j || {}
            },
            get isGlobal() {
                return n
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
                return T
            },
            set fallbackFormat(N) {
                T = N, G.fallbackFormat = T
            },
            get warnHtmlMessage() {
                return w
            },
            set warnHtmlMessage(N) {
                w = N, G.warnHtmlMessage = N
            },
            get escapeParameter() {
                return H
            },
            set escapeParameter(N) {
                H = N, G.escapeParameter = N
            },
            t: ve,
            getLocaleMessage: Mt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Ie,
            setPostTranslationHandler: F,
            getMissingHandler: ie,
            setMissingHandler: de,
            [y0]: St
        };
        return re.datetimeFormats = we, re.numberFormats = fe, re.rt = Se, re.te = lt, re.tm = Ht, re.d = Fe, re.n = je, re.getDateTimeFormat = A, re.setDateTimeFormat = M, re.mergeDateTimeFormat = U, re.getNumberFormat = Y, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[_0] = e.__injectWithOption, re[sh] = nr, re[ah] = ot, re[oh] = yr, re
    }

    function ste(e) {
        const t = ye(e.locale) ? e.locale : Eo,
            r = ye(e.fallbackLocale) || Et(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = kt(e.missing) ? e.missing : void 0,
            s = Je(e.silentTranslationWarn) || mi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = Je(e.silentFallbackWarn) || mi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            l = Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Be(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = kt(e.postTranslation) ? e.postTranslation : void 0,
            y = ye(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            b = !!e.escapeParameterHtml,
            T = Je(e.sync) ? e.sync : !0;
        let R = e.messages;
        if (Be(e.sharedMessages)) {
            const G = e.sharedMessages;
            R = Object.keys(G).reduce((oe, le) => {
                const ue = oe[le] || (oe[le] = {});
                return tr(ue, G[le]), oe
            }, R || {})
        }
        const {
            __i18n: D,
            __root: B,
            __injectWithOption: w
        } = e, H = e.datetimeFormats, q = e.numberFormats, j = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: R,
            flatJson: j,
            datetimeFormats: H,
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
            escapeParameter: b,
            messageResolver: e.messageResolver,
            inheritLocale: T,
            __i18n: D,
            __root: B,
            __injectWithOption: w
        }
    }

    function ch(e = {}, t) {
        {
            const r = Dp(ste(e)),
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
                        return ye(l) ? f.locale = l : Et(l) ? h = l : Be(l) && (g = l), Et(u) ? h = u : Be(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
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
                        return ye(l) ? f.locale = l : Gt(l) ? f.plural = l : Et(l) ? h = l : Be(l) && (g = l), ye(u) ? f.locale = u : Et(u) ? h = u : Be(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
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
    const xp = {
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

    function ate({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ...Et(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function b0(e) {
        return et
    }
    const ME = {
        name: "i18n-t",
        props: tr({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Gt(e) || !isNaN(e)
            }
        }, xp),
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
                const u = ate(t, o),
                    f = s[sh](e.keypath, u, l),
                    h = tr({}, n),
                    g = ye(e.tag) || bt(e.tag) ? e.tag : b0();
                return $h(g, h, f)
            }
        }
    };

    function ote(e) {
        return Et(e) && !ye(e[0])
    }

    function T0(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let u = {};
            e.locale && (l.locale = e.locale), ye(e.format) ? l.key = e.format : bt(e.format) && (ye(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((b, T) => r.includes(T) ? tr({}, b, {
                [T]: e.format[T]
            }) : b, {}));
            const f = n(e.value, l, u);
            let h = [l.key];
            Et(f) ? h = f.map((b, T) => {
                const R = s[b.type],
                    D = R ? R({
                        [b.type]: b.value,
                        index: T,
                        parts: f
                    }) : [b.value];
                return ote(D) && (D[0].key = `${b.type}-${T}`), D
            }) : ye(f) && (h = [f]);
            const g = tr({}, o),
                y = ye(e.tag) || bt(e.tag) ? e.tag : b0();
            return $h(y, g, h)
        }
    }
    const FE = {
            name: "i18n-n",
            props: tr({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, xp),
            setup(e, t) {
                const r = e.i18n || Mp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return T0(e, t, m0, (...n) => r[oh](...n))
            }
        },
        UE = {
            name: "i18n-d",
            props: tr({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, xp),
            setup(e, t) {
                const r = e.i18n || Mp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return T0(e, t, g0, (...n) => r[ah](...n))
            }
        };

    function lte(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function cte(e) {
        const t = l => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = l;
            if (!u || !u.$) throw Wt(Ft.UNEXPECTED_ERROR);
            const g = lte(e, u.$),
                y = BE(h);
            return [Reflect.apply(g.t, g, [...GE(y)]), g]
        };
        return {
            created: (l, u) => {
                const [f, h] = t(u);
                eh && e.global === h && (l.__i18nWatcher = ts(h.locale, () => {
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
                        h = BE(u);
                    l.textContent = Reflect.apply(f.t, f, [...GE(h)])
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

    function BE(e) {
        if (ye(e)) return {
            path: e
        };
        if (Be(e)) {
            if (!("path" in e)) throw Wt(Ft.REQUIRED_VALUE, "path");
            return e
        } else throw Wt(Ft.INVALID_VALUE)
    }

    function GE(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, l = {}, u = n || {};
        return ye(r) && (l.locale = r), Gt(s) && (l.plural = s), Gt(o) && (l.plural = o), [t, u, l]
    }

    function ute(e, t, ...r) {
        const n = Be(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : ME.name, ME), e.component(FE.name, FE), e.component(UE.name, UE)), e.directive("t", cte(t))
    }

    function fte(e, t, r) {
        return {
            beforeCreate() {
                const n = os();
                if (!n) throw Wt(Ft.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = jE(e, o) : (o.__injectWithOption = !0, this.$i18n = ch(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = jE(e, s) : this.$i18n = ch({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && E0(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, l) => this.$i18n.te(o, l), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = os();
                if (!n) throw Wt(Ft.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function jE(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[y0](t.pluralizationRules || e.pluralizationRules);
        const r = Zc(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const dte = Si("global-vue-i18n");

    function hte(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [l, u] = pte(e, r),
            f = Si("");

        function h(b) {
            return o.get(b) || null
        }

        function g(b, T) {
            o.set(b, T)
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
                async install(T, ...R) {
                    T.__VUE_I18N_SYMBOL__ = f, T.provide(T.__VUE_I18N_SYMBOL__, b), !r && n && Ote(T, b.global), ute(T, b, ...R), r && T.mixin(fte(u, u.__composer, b));
                    const D = T.unmount;
                    T.unmount = () => {
                        b.dispose(), D()
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
            return b
        }
    }

    function Mp(e = {}) {
        const t = os();
        if (t == null) throw Wt(Ft.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Wt(Ft.NOT_INSLALLED);
        const r = gte(t),
            n = vte(r),
            s = ite(t),
            o = mte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Wt(Ft.NOT_AVAILABLE_IN_LEGACY_MODE);
            return Ete(t, o, n, e)
        }
        if (o === "global") return E0(n, e, s), n;
        if (o === "parent") {
            let f = yte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let u = l.__getInstance(t);
        if (u == null) {
            const f = tr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Dp(f), _te(l, t), l.__setInstance(t, u)
        }
        return u
    }

    function pte(e, t, r) {
        const n = ER(); {
            const s = t ? n.run(() => ch(e)) : n.run(() => Dp(e));
            if (s == null) throw Wt(Ft.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function gte(e) {
        {
            const t = es(e.isCE ? dte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Wt(e.isCE ? Ft.NOT_INSLALLED_WITH_PROVIDE : Ft.UNEXPECTED_ERROR);
            return t
        }
    }

    function mte(e, t) {
        return zc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function vte(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function yte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(o);
            else {
                const u = l.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[_0] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function _te(e, t, r) {
        Oh(() => {}, t), Sh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function Ete(e, t, r, n = {}) {
        const s = t === "local",
            o = qR(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Wt(Ft.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = on(s && l ? r.locale.value : ye(n.locale) ? n.locale : Eo),
            f = on(s && l ? r.fallbackLocale.value : ye(n.fallbackLocale) || Et(n.fallbackLocale) || Be(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = on(Zc(u.value, n)),
            g = on(Be(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            y = on(Be(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            b = s ? r.missingWarn : Je(n.missingWarn) || mi(n.missingWarn) ? n.missingWarn : !0,
            T = s ? r.fallbackWarn : Je(n.fallbackWarn) || mi(n.fallbackWarn) ? n.fallbackWarn : !0,
            R = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            D = !!n.fallbackFormat,
            B = kt(n.missing) ? n.missing : null,
            w = kt(n.postTranslation) ? n.postTranslation : null,
            H = s ? r.warnHtmlMessage : Je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            q = !!n.escapeParameter,
            j = s ? r.modifiers : Be(n.modifiers) ? n.modifiers : {},
            G = n.pluralRules || s && r.pluralRules;

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
            Ne = kr(() => g.value),
            we = kr(() => y.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : w
        }

        function Ie(p) {
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

        function Ee(...p) {
            return o.value ? de(() => Reflect.apply(o.value.t, null, [...p])) : de(() => "")
        }

        function ve(...p) {
            return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
        }

        function Se(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function Fe(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function je(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function tt(p, A) {
            return o.value ? o.value.te(p, A) : !1
        }

        function Ct(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function wr(p, A) {
            o.value && (o.value.setLocaleMessage(p, A), h.value[p] = A)
        }

        function nr(p, A) {
            o.value && o.value.mergeLocaleMessage(p, A)
        }

        function yr(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function ot(p, A) {
            o.value && (o.value.setDateTimeFormat(p, A), g.value[p] = A)
        }

        function St(p, A) {
            o.value && o.value.mergeDateTimeFormat(p, A)
        }

        function lt(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function xt(p, A) {
            o.value && (o.value.setNumberFormat(p, A), y.value[p] = A)
        }

        function Ht(p, A) {
            o.value && o.value.mergeNumberFormat(p, A)
        }
        const Mt = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: oe,
            fallbackLocale: le,
            messages: ue,
            datetimeFormats: Ne,
            numberFormats: we,
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
                return o.value ? o.value.fallbackWarn : T
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
                return o.value ? o.value.fallbackFormat : D
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
                return o.value ? o.value.escapeParameter : q
            },
            set escapeParameter(p) {
                o.value && (o.value.escapeParameter = p)
            },
            t: Ee,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Ie,
            getMissingHandler: F,
            setMissingHandler: ie,
            rt: ve,
            d: Se,
            n: Fe,
            tm: je,
            te: tt,
            getLocaleMessage: Ct,
            setLocaleMessage: wr,
            mergeLocaleMessage: nr,
            getDateTimeFormat: yr,
            setDateTimeFormat: ot,
            mergeDateTimeFormat: St,
            getNumberFormat: lt,
            setNumberFormat: xt,
            mergeNumberFormat: Ht
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(A => {
                p.mergeLocaleMessage(A, h.value[A])
            }), Object.keys(g.value).forEach(A => {
                p.mergeDateTimeFormat(A, g.value[A])
            }), Object.keys(y.value).forEach(A => {
                p.mergeNumberFormat(A, y.value[A])
            }), p.escapeParameter = q, p.fallbackFormat = D, p.fallbackRoot = R, p.fallbackWarn = T, p.missingWarn = b, p.warnHtmlMessage = H
        }
        return Ib(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Wt(Ft.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, y.value = p.numberFormats.value) : s && m(p)
        }), Mt
    }
    const bte = ["locale", "fallbackLocale", "availableLocales"],
        Tte = ["t", "rt", "d", "n", "tm"];

    function Ote(e, t) {
        const r = Object.create(null);
        bte.forEach(n => {
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
        }), e.config.globalProperties.$i18n = r, Tte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Wt(Ft.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Yee(Zee);
    qee($ee);
    zee(l0);
    const Ste = it({
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
        Ate = "main/pp9/fourbage/assets/c8afd972.svg",
        Ite = {
            class: "constrain"
        },
        wte = {
            class: "text"
        },
        Cte = {
            class: "subtext"
        },
        Nte = {
            key: 0,
            class: "warning"
        },
        $te = {
            key: 1,
            class: "spinner"
        };

    function Rte(e, t, r, n, s, o) {
        return V(), er(Oc, {
            name: "toast-transition"
        }, {
            default: Qi(() => [e.isVisible && e.options ? (V(), z("div", {
                key: 0,
                class: Me([e.options.type, "jbg toast"])
            }, [Z("div", Ite, [Z("img", {
                class: "close",
                alt: "close",
                src: Ate,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = Bs((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), Z("p", wte, _t(e.options.text), 1), Z("p", Cte, _t(e.options.subtext), 1), e.options.warning ? (V(), z("p", Nte, _t(e.options.warning), 1)) : Oe("", !0), e.options.type === "reconnecting" ? (V(), z("div", $te)) : Oe("", !0)])], 2)) : Oe("", !0)]),
            _: 1
        })
    }
    const Lte = ze(Ste, [
            ["render", Rte],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        Pte = {
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
                e.component("Toast", Lte), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        kte = it({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: es(vo.fatal.error)
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

    function Dte(e, t, r, n, s, o) {
        const l = $t("Fatal"),
            u = $t("TextDescriptions"),
            f = $t("Debug"),
            h = $t("Modal"),
            g = $t("Toast");
        return e.shouldShowFatal ? (V(), er(l, {
            key: 0
        })) : (V(), z(et, {
            key: 1
        }, [rt(u), (V(), er(yc(e.mainView), bc({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), rt(f), rt(h), rt(g)], 64))
    }
    const WE = ze(kte, [
            ["render", Dte]
        ]),
        xte = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Ar.WSClient(r), t.connect()),
                mount: r => {
                    var l, u, f, h;
                    WE.name = r.app;
                    let n = k2(WE, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Gs.set(s);
                    const o = hte({
                        fallbackLocale: "en",
                        locale: Gs.locale,
                        messages: Gs.mergeMessages(B5, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(YV), n.use(BQ), n.use(Iz, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(HX, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(GZ), n.use(o), n.use(vQ, {
                            i18n: o
                        }), n.use(HQ), n.use(KQ), n.use(Pte), n.use(YQ), e.plugins) {
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
        Mte = {
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
        Fte = {
            CHOICE_BUTTON: "choice button",
            LIE_BUTTON: "lie for me button",
            LIE_INPUT_1: "lie entry box",
            LIE_INPUT_2: "second lie entry box",
            NAME_ENTRY: "name entry box",
            NAME_SUBMIT: "name submit button",
            SUBMIT_BUTTON: "submit button"
        },
        Ute = {
            AVATAR_INSTRUCTION: "PICK YOUR CREATURE",
            PLAYER_NAME_INSTRUCTION: "Fibbage Enough About You works best if you use your real name. Feel free to change it here.",
            SUBMIT_NAME: "SUBMIT NAME",
            START_TEXT: "START THE GAME"
        },
        Bte = {
            SINGLE_INSTRUCTION: "ENTER A LIE",
            DOUBLE_INSTRUCTION: "ENTER A LIE FOR EACH",
            FINALROUND_INSTRUCTION: "ENTER A LIE THAT FITS BOTH",
            LIE_FOR_ME_INSTRUCTION: "PICK A LIE",
            LIE_FOR_ME: "LIE FOR ME",
            SEPARATOR: "&",
            PROHIBITED_LANGUAGE: "Your entry contains prohibited language. Try again!"
        },
        Gte = {
            PICK_TRUTH: "PICK THE TRUTH",
            PICK_CATEGORY: "PICK A CATEGORY",
            AWARD_LIKES: "AWARD LIKES"
        },
        jte = "WAITING",
        Wte = {
            VOTE_INSTRUCTION: "VOTE FOR YOUR FAVORITE",
            LIKE_INSTRUCTION: "AWARD A LIKE"
        },
        Vte = {
            ALT: Mte,
            ARIA: Fte,
            LOBBY: Ute,
            WRITING: Bte,
            CHOOSING: Gte,
            WAITING: jte,
            VOTING: Wte
        },
        Hte = {
            AVATAR0_OFF: "avatar de h\xE9risson escargot - indisponible",
            AVATAR0_ON: "avatar de h\xE9risson escargot - disponible",
            AVATAR1_OFF: "avatar de tortue oie - indisponible",
            AVATAR1_ON: "avatar de tortue oie - disponible",
            AVATAR2_OFF: "avatar de cr\xE2ne de chat - indisponible",
            AVATAR2_ON: "avatar de cr\xE2ne de chat - disponible",
            AVATAR3_OFF: "avatar de crabe papillon de nuit - indisponible",
            AVATAR3_ON: "avatar de crabe papillon de nuit - disponible",
            AVATAR4_OFF: "avatar d'oiseau poisson-globe - indisponible",
            AVATAR4_ON: "avatar d'oiseau poisson-globe - disponible",
            AVATAR5_OFF: "avatar de chat bec-en-sabot - indisponible",
            AVATAR5_ON: "avatar de chat bec-en-sabot - disponible",
            AVATAR6_OFF: "avatar de grenouille chauve-souris - indisponible",
            AVATAR6_ON: "avatar de grenouille chauve-souris - disponible",
            AVATAR7_OFF: "avatar d'\u0153il - indisponible",
            AVATAR7_ON: "avatar d'\u0153il - disponible",
            CHAMELEON: "un cam\xE9l\xE9on discret",
            RABBIT: "une image d'horreurs indescriptibles commises par l'homme"
        },
        Kte = {
            CHOICE_BUTTON: "bouton de choix",
            LIE_BUTTON: "bouton mens pour moi",
            LIE_INPUT_1: "formulaire de saisie de mensonge",
            LIE_INPUT_2: "formulaire de saisie du second mensonge",
            NAME_ENTRY: "formulaire de saisie de nom",
            NAME_SUBMIT: "bouton de confirmation de nom",
            SUBMIT_BUTTON: "bouton de confirmation"
        },
        Yte = {
            AVATAR_INSTRUCTION: "CHOISISSEZ VOTRE CR\xC9ATURE",
            PLAYER_NAME_INSTRUCTION: "Le mode Enough About You de Fibbage fonctionne mieux lorsque vous utilisez votre vrai nom. Vous pouvez le changer ici.",
            SUBMIT_NAME: "SAISISSEZ UN NOM",
            START_TEXT: "LANCER LA PARTIE"
        },
        qte = {
            SINGLE_INSTRUCTION: "INDIQUEZ UN MENSONGE",
            DOUBLE_INSTRUCTION: "INDIQUEZ UN MENSONGE POUR CHAQUE",
            FINALROUND_INSTRUCTION: "INDIQUEZ UN MENSONGE QUI CORRESPOND AUX DEUX",
            LIE_FOR_ME_INSTRUCTION: "CHOISISSEZ UN MENSONGE",
            LIE_FOR_ME: "MENS POUR MOI",
            SEPARATOR: "&",
            PROHIBITED_LANGUAGE: "Votre r\xE9ponse contient des mots interdits. R\xE9essayez encore\xA0!"
        },
        zte = {
            PICK_TRUTH: "TROUVEZ LA V\xC9RIT\xC9",
            PICK_CATEGORY: "CHOISISSEZ UNE CAT\xC9GORIE",
            AWARD_LIKES: "DONNEZ DES LIKES"
        },
        Xte = "EN ATTENTE",
        Jte = {
            VOTE_INSTRUCTION: "VOTEZ POUR VOTRE R\xC9PONSE PR\xC9F\xC9R\xC9E",
            LIKE_INSTRUCTION: "DONNEZ UN LIKE"
        },
        Zte = {
            ALT: Hte,
            ARIA: Kte,
            LOBBY: Yte,
            WRITING: qte,
            CHOOSING: zte,
            WAITING: Xte,
            VOTING: Jte
        },
        Qte = {
            AVATAR0_OFF: "avatar lumaca riccio - non disponibile",
            AVATAR0_ON: "avatar lumaca riccio - disponibile",
            AVATAR1_OFF: "avatar oca tartaruga - non disponibile",
            AVATAR1_ON: "avatar oca tartaruga - disponibile",
            AVATAR2_OFF: "avatar teschio gatto - non disponibile",
            AVATAR2_ON: "avatar teschio gatto - disponibile",
            AVATAR3_OFF: "avatar falena granchio - non disponibile",
            AVATAR3_ON: "avatar falena granchio - disponibile",
            AVATAR4_OFF: "avatar pesce palla uccello - non disponibile",
            AVATAR4_ON: "avatar pesce palla uccello - disponibile",
            AVATAR5_OFF: "avatar gatto cicogna - non disponibile",
            AVATAR5_ON: "avatar gatto cicogna - disponibile",
            AVATAR6_OFF: "avatar rana pipistrello - non disponibile",
            AVATAR6_ON: "avatar rana pipistrello - disponibile",
            AVATAR7_OFF: "avatar bulbo oculare - non disponibile",
            AVATAR7_ON: "avatar bulbo oculare - disponibile",
            CHAMELEON: "un camaleonte dall'aspetto furtivo",
            RABBIT: "un'immagine di orrori fatti dall'uomo oltre la comprensione umana"
        },
        ere = {
            CHOICE_BUTTON: "tasto scelta",
            LIE_BUTTON: "tasto menti per me",
            LIE_INPUT_1: "casella inserzione bugia",
            LIE_INPUT_2: "seconda casella inserzione bugia",
            NAME_ENTRY: "casella inserzione nome",
            NAME_SUBMIT: "tasto invio nome",
            SUBMIT_BUTTON: "tasto invio"
        },
        tre = {
            AVATAR_INSTRUCTION: "SCEGLI LA TUA CREATURA",
            PLAYER_NAME_INSTRUCTION: "Fibbage Parliamo di voi funziona meglio se usi il tuo vero nome. Cambialo pure qui.",
            SUBMIT_NAME: "INVIA NOME",
            START_TEXT: "INIZIA LA PARTITA"
        },
        rre = {
            SINGLE_INSTRUCTION: "INSERISCI UNA BUGIA",
            DOUBLE_INSTRUCTION: "INSERISCI UNA BUGIA PER CIASCUNO",
            FINALROUND_INSTRUCTION: "INSERISCI UNA BUGIA ADATTA A ENTRAMBI",
            LIE_FOR_ME_INSTRUCTION: "SCEGLI UNA BUGIA",
            LIE_FOR_ME: "MENTI PER ME",
            SEPARATOR: "&",
            PROHIBITED_LANGUAGE: "La voce inserita contiene parole vietate. Riprova!"
        },
        nre = {
            PICK_TRUTH: "SCEGLI LA VERIT\xC0",
            PICK_CATEGORY: "SCEGLI UNA CATEGORIA",
            AWARD_LIKES: "PREMIA CON MI PIACE"
        },
        ire = "IN ATTESA",
        sre = {
            VOTE_INSTRUCTION: "VOTA LA TUA PREFERITA",
            LIKE_INSTRUCTION: "PREMIA CON UN MI PIACE"
        },
        are = {
            ALT: Qte,
            ARIA: ere,
            LOBBY: tre,
            WRITING: rre,
            CHOOSING: nre,
            WAITING: ire,
            VOTING: sre
        },
        ore = {
            AVATAR0_OFF: "Igelschnecken-Avatar - nicht verf\xFCgbar",
            AVATAR0_ON: "Igelschnecken-Avatar - verf\xFCgbar",
            AVATAR1_OFF: "Schildkr\xF6tengans-Avatar - nicht verf\xFCgbar",
            AVATAR1_ON: "Schildkr\xF6tengans-Avatar - verf\xFCgbar",
            AVATAR2_OFF: "Katzensch\xE4del-Avatar - nicht verf\xFCgbar",
            AVATAR2_ON: "Katzensch\xE4del-Avatar - verf\xFCgbar",
            AVATAR3_OFF: "Krebsmotten-Avatar - nicht verf\xFCgbar",
            AVATAR3_ON: "Krebsmotten-Avatar - verf\xFCgbar",
            AVATAR4_OFF: "Kugelfischvogel-Avatar - nicht verf\xFCgbar",
            AVATAR4_ON: "Kugelfischvogel-Avatar - verf\xFCgbar",
            AVATAR5_OFF: "Schnabeltierstorchkatzen-Avatar - nicht verf\xFCgbar",
            AVATAR5_ON: "Schnabeltierstorchkatzen-Avatar - verf\xFCgbar",
            AVATAR6_OFF: "Flederfrosch-Avatar - nicht verf\xFCgbar",
            AVATAR6_ON: "Flederfrosch-Avatar - verf\xFCgbar",
            AVATAR7_OFF: "Augapfel-Avatar - nicht verf\xFCgbar",
            AVATAR7_ON: "Augapfel-Avatar - verf\xFCgbar",
            CHAMELEON: "ein verstohlen dreinblickendes Cham\xE4leon",
            RABBIT: "ein Bild von menschengemachtem Horror jenseits der Vorstellungskraft"
        },
        lre = {
            CHOICE_BUTTON: "Auswahl-Knopf",
            LIE_BUTTON: "\u201EL\xFCge f\xFCr mich\u201C-Knopf",
            LIE_INPUT_1: "L\xFCgeneingabe-Kasten",
            LIE_INPUT_2: "zweiter L\xFCgeneingabe-Kasten",
            NAME_ENTRY: "Namenseingabe-Kasten",
            NAME_SUBMIT: "\u201ENamen abschicken\u201C-Knopf",
            SUBMIT_BUTTON: "Abschicken-Knopf"
        },
        cre = {
            AVATAR_INSTRUCTION: "W\xC4HLE DEINE KREATUR",
            PLAYER_NAME_INSTRUCTION: "\u201EFibbage - Genug von dir\u201C funktioniert am besten, wenn du deinen echten Namen verwendest. Du kannst ihn hier \xE4ndern.",
            SUBMIT_NAME: "NAMEN ABSCHICKEN",
            START_TEXT: "SPIEL STARTEN"
        },
        ure = {
            SINGLE_INSTRUCTION: "GIB EINE L\xDCGE EIN",
            DOUBLE_INSTRUCTION: "GIB JEWEILS EINE L\xDCGE EIN",
            FINALROUND_INSTRUCTION: "GIB EINE L\xDCGE EIN, DIE F\xDCR BEIDES PASST",
            LIE_FOR_ME_INSTRUCTION: "W\xC4HLE EINE L\xDCGE AUS",
            LIE_FOR_ME: "L\xDCGE F\xDCR MICH",
            SEPARATOR: "&",
            PROHIBITED_LANGUAGE: "Deine Eingabe enth\xE4lt verbotene W\xF6rter. Versuche es noch mal!"
        },
        fre = {
            PICK_TRUTH: "W\xC4HLE DIE WAHRHEIT AUS",
            PICK_CATEGORY: "W\xC4HLE EINE KATEGORIE",
            AWARD_LIKES: "LIKES VERGEBEN"
        },
        dre = "BITTE WARTEN",
        hre = {
            VOTE_INSTRUCTION: "STIMME F\xDCR DEINEN FAVORITEN AB",
            LIKE_INSTRUCTION: "VERGIB EIN LIKE"
        },
        pre = {
            ALT: ore,
            ARIA: lre,
            LOBBY: cre,
            WRITING: ure,
            CHOOSING: fre,
            WAITING: dre,
            VOTING: hre
        },
        gre = {
            AVATAR0_OFF: "avatar de caracol erizo: no disponible",
            AVATAR0_ON: "avatar de caracol erizo: disponible",
            AVATAR1_OFF: "avatar de ganso tortuga: no disponible",
            AVATAR1_ON: "avatar de ganso tortuga: disponible",
            AVATAR2_OFF: "avatar de cr\xE1neo de gato: no disponible",
            AVATAR2_ON: "avatar de cr\xE1neo de gato: disponible",
            AVATAR3_OFF: "avatar de polilla cangrejo: no disponible",
            AVATAR3_ON: "avatar de polilla cangrejo: disponible",
            AVATAR4_OFF: "avatar de pez globo p\xE1jaro: no disponible",
            AVATAR4_ON: "avatar de pez globo p\xE1jaro: disponible",
            AVATAR5_OFF: "avatar de cig\xFCe\xF1a picozapato: no disponible",
            AVATAR5_ON: "avatar de cig\xFCe\xF1a picozapato: disponible",
            AVATAR6_OFF: "avatar de murci\xE9lago rana: no disponible",
            AVATAR6_ON: "avatar de murci\xE9lago rana: disponible",
            AVATAR7_OFF: "avatar de ojo: no disponible",
            AVATAR7_ON: "avatar de ojo: disponible",
            CHAMELEON: "un camale\xF3n de mirada furtiva",
            RABBIT: "una imagen de horrores humanos m\xE1s all\xE1 de la comprensi\xF3n"
        },
        mre = {
            CHOICE_BUTTON: "bot\xF3n de elegir",
            LIE_BUTTON: "bot\xF3n de miente por m\xED",
            LIE_INPUT_1: "campo para la mentira",
            LIE_INPUT_2: "segundo campo para la mentira",
            NAME_ENTRY: "campo para el nombre",
            NAME_SUBMIT: "bot\xF3n de enviar nombre",
            SUBMIT_BUTTON: "bot\xF3n de enviar"
        },
        vre = {
            AVATAR_INSTRUCTION: "ELIGE TU CRIATURA",
            PLAYER_NAME_INSTRUCTION: "H\xE1blanos de ti funciona mejor si usas tu nombre real. Aqu\xED puedes cambiarlo si quieres.",
            SUBMIT_NAME: "ENVIAR NOMBRE",
            START_TEXT: "EMPEZAR LA PARTIDA"
        },
        yre = {
            SINGLE_INSTRUCTION: "ESCRIBE UNA MENTIRA",
            DOUBLE_INSTRUCTION: "ESCRIBE UNA MENTIRA PARA CADA UNO",
            FINALROUND_INSTRUCTION: "ESCRIBE UNA MENTIRA QUE SIRVA PARA AMBOS",
            LIE_FOR_ME_INSTRUCTION: "ELIGE UNA MENTIRA",
            LIE_FOR_ME: "MIENTE POR M\xCD",
            SEPARATOR: "y",
            PROHIBITED_LANGUAGE: "Tu texto contiene palabras no permitidas. \xA1Vuelve a intentarlo!"
        },
        _re = {
            PICK_TRUTH: "ELIGE LA VERDAD",
            PICK_CATEGORY: "ELIGE UNA CATEGOR\xCDA",
            AWARD_LIKES: "REGALAR ME GUSTA"
        },
        Ere = "ESPERANDO",
        bre = {
            VOTE_INSTRUCTION: "VOTA A TU FAVORITO",
            LIKE_INSTRUCTION: "REGALAR UN ME GUSTA"
        },
        Tre = {
            ALT: gre,
            ARIA: mre,
            LOBBY: vre,
            WRITING: yre,
            CHOOSING: _re,
            WAITING: Ere,
            VOTING: bre
        },
        Ore = {
            AVATAR0_OFF: "avatar de caracol erizo - no disponible",
            AVATAR0_ON: "avatar de caracol erizo - disponible",
            AVATAR1_OFF: "avatar de ganso tortuga - no disponible",
            AVATAR1_ON: "avatar de ganso tortuga - disponible",
            AVATAR2_OFF: "avatar de cr\xE1neo felino - no disponible",
            AVATAR2_ON: "avatar de cr\xE1neo felino - disponible",
            AVATAR3_OFF: "avatar de polilla cangrejo - no disponible",
            AVATAR3_ON: "avatar de polilla cangrejo - disponible",
            AVATAR4_OFF: "avatar de pez globo ave - no disponible",
            AVATAR4_ON: "avatar de pez globo ave - disponible",
            AVATAR5_OFF: "avatar de gato picozapato - no disponible",
            AVATAR5_ON: "avatar de gato picozapato - disponible",
            AVATAR6_OFF: "avatar de rana murci\xE9lago - no disponible",
            AVATAR6_ON: "avatar de rana murci\xE9lago - disponible",
            AVATAR7_OFF: "avatar de globo ocular - no disponible",
            AVATAR7_ON: "avatar de globo ocular - disponible",
            CHAMELEON: "un camale\xF3n de mirada furtiva",
            RABBIT: "una imagen de aberraciones humanas incomprensibles"
        },
        Sre = {
            CHOICE_BUTTON: "bot\xF3n de elecci\xF3n",
            LIE_BUTTON: 'bot\xF3n "miente por m\xED"',
            LIE_INPUT_1: "caja de mentiras",
            LIE_INPUT_2: "segunda caja de mentiras",
            NAME_ENTRY: "caja de nombres",
            NAME_SUBMIT: "bot\xF3n para ingresar nombre",
            SUBMIT_BUTTON: "bot\xF3n para ingresar/enviar"
        },
        Are = {
            AVATAR_INSTRUCTION: "ELIGE A TU CRIATURA",
            PLAYER_NAME_INSTRUCTION: "Enough About You de Fibbage funciona mejor si usas tu nombre real. Puedes cambiarlo aqu\xED.",
            SUBMIT_NAME: "INGRESAR NOMBRE",
            START_TEXT: "EMPEZAR EL JUEGO"
        },
        Ire = {
            SINGLE_INSTRUCTION: "INGRESA UNA MENTIRA",
            DOUBLE_INSTRUCTION: "INGRESA UNA MENTIRA POR CADA UNO",
            FINALROUND_INSTRUCTION: "INGRESA UNA MENTIRA QUE SE ADAPTE A AMBOS",
            LIE_FOR_ME_INSTRUCTION: "ELIGE UNA MENTIRA",
            LIE_FOR_ME: "MIENTE POR M\xCD",
            SEPARATOR: "Y",
            PROHIBITED_LANGUAGE: "Tu texto contiene lenguaje prohibido. \xA1Vuelve a intentarlo!"
        },
        wre = {
            PICK_TRUTH: "ELIGE LA VERDAD",
            PICK_CATEGORY: "ELIGE UNA CATEGOR\xCDA",
            AWARD_LIKES: "DA UN ME GUSTA"
        },
        Cre = "ESPERANDO",
        Nre = {
            VOTE_INSTRUCTION: "VOTA A TU FAVORITO",
            LIKE_INSTRUCTION: "DAR UN ME GUSTA"
        },
        $re = {
            ALT: Ore,
            ARIA: Sre,
            LOBBY: Are,
            WRITING: Ire,
            CHOOSING: wre,
            WAITING: Cre,
            VOTING: Nre
        },
        Rre = {
            en: Vte,
            fr: Zte,
            it: are,
            de: pre,
            es: Tre,
            "es-XL": $re
        },
        Lre = {},
        Pre = {
            viewBox: "0 0 299 58",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        kre = Gb('<path d="M51.0001 56.64V2.89375H51.9608C58.6312 2.89375 65.2999 2.83284 71.9738 2.9303C74.0301 2.94923 76.0762 3.22398 78.0647 3.74822C82.2779 4.89332 84.9979 7.72472 86.1656 11.9275C87.1297 15.408 87.2446 18.9042 85.9637 22.3534C85.0797 24.7341 83.6927 26.704 81.1502 27.9222C81.7575 28.0667 82.1682 28.1624 82.5789 28.2703C88.1077 29.6277 91.0853 33.0838 91.8267 38.9642C92.1956 41.8878 91.8754 44.7558 90.7268 47.4915C88.8874 51.8212 85.4156 54.2419 81.0753 55.5976C78.8598 56.2944 76.5516 56.6517 74.2291 56.6574C66.7193 56.6748 59.2089 56.6806 51.698 56.6748C51.4978 56.6748 51.296 56.6557 51.0001 56.64ZM64.9675 45.7982C66.0743 45.7982 67.1097 45.8191 68.1435 45.7982C70.3414 45.7442 72.5533 45.7529 74.6538 44.9629C76.8239 44.1449 77.8872 42.4499 77.8089 40.0014C77.7271 37.4171 76.6394 35.7986 74.3945 35.1408C71.3159 34.2376 68.1522 34.6066 64.9675 34.5352V45.7982ZM64.9675 24.0745C66.257 24.0745 67.4508 24.1598 68.622 24.0466C69.5706 23.9652 70.5016 23.7417 71.3838 23.3836C73.2389 22.604 74.036 21.0395 74.0795 19.0973C74.123 17.1552 73.6079 15.4654 71.7493 14.4978C69.5966 13.3788 67.282 13.6625 64.9622 13.6851L64.9675 24.0745Z" fill="white"></path><path d="M142.193 2.67622H157.471C164.2 20.5499 170.936 38.4485 177.677 56.372H162.756L159.471 47.4358H139.952C138.751 50.4151 137.542 53.4101 136.346 56.3755H121.589C128.47 38.4369 135.321 20.5853 142.193 2.67622ZM149.711 19.3532L143.854 36.6931H155.731C153.735 30.9381 151.767 25.2718 149.711 19.3532Z" fill="white"></path><path d="M89.4547 28.9055V3.07126C89.6202 3.02397 89.7898 2.99193 89.9611 2.97555C97.4982 2.99817 105.039 2.94596 112.574 3.09041C116.082 3.15654 119.286 4.32077 121.797 6.93987C123.901 9.12738 124.839 11.8387 125.174 14.771C125.539 17.9644 125.28 21.0795 123.714 23.9805C122.854 25.5746 121.716 26.8902 120.09 27.7395C119.974 27.8004 119.869 27.8857 119.662 28.0266C123.038 28.6879 125.976 29.8904 128.035 32.7497C125.102 40.3895 122.17 48.0292 119.159 55.8952C117.52 56.1388 115.79 56.5756 114.05 56.6209C109.038 56.7497 104.021 56.727 99.0053 56.7514C96.1652 56.7653 93.3233 56.7514 90.478 56.7514H89.4808V53.652C96.0503 47.6046 96.0068 34.5004 89.4547 28.9055ZM103.441 45.7529C105.436 45.7529 107.376 45.8208 109.308 45.7268C110.462 45.6665 111.605 45.4697 112.713 45.1404C115.183 44.4129 116.356 42.6501 116.265 40.0362C116.171 37.2866 114.962 35.6977 112.4 35.0782C109.466 34.3681 106.474 34.617 103.438 34.5561L103.441 45.7529ZM103.431 24.1406C105.519 24.1041 107.545 24.3738 109.497 23.6185C111.575 22.8163 112.616 21.1369 112.55 18.6849C112.489 16.4069 111.377 14.8563 109.297 14.1776C107.383 13.5529 105.436 13.6834 103.431 13.7199V24.1406Z" fill="white"></path><path d="M189.212 24.7532L215.766 32.7584C215.629 33.2091 215.512 33.6164 215.382 34.0184C213.816 38.8754 211.886 43.5724 208.421 47.4184C202.781 53.6694 195.733 56.5426 187.289 55.8412C184.619 55.6202 182.038 54.9937 179.442 54.1462C174.329 40.5617 169.21 26.9604 164.086 13.3423C165.914 10.1568 168.375 7.37962 171.318 5.1822C177.127 0.882012 183.674 -0.60069 190.785 0.213753C196.018 0.814144 200.878 2.47609 205.318 5.34231C211.297 9.21265 214.367 14.9329 215.716 21.7443C215.747 21.9983 215.764 22.254 215.765 22.51L201.646 23.9022C201.314 22.6301 201.098 21.398 200.673 20.2477C197.607 11.884 187.78 10.5231 182.132 14.4126C177.82 17.3832 175.41 21.612 174.507 26.7023C173.861 30.3394 174.332 33.8374 176.073 37.1647C179.143 43.0538 186.963 45.0307 191.182 43.6037C193.773 42.7336 196.133 40.7149 196.935 38.463L186.079 35.1791C187.122 31.6968 188.152 28.272 189.212 24.7532Z" fill="white"></path><path d="M217.686 56.607V2.94074H248.141V14.7154H231.658V23.709H247.251V35.5306H231.653V44.8097H248.165V56.607H217.686Z" fill="white"></path><path d="M0.00173665 3.22614H30.6895V15.0077H13.9743V23.9405H29.1685V35.7969H13.9221V56.9028H0L0.00173665 3.22614Z" fill="white"></path><path d="M48.5237 56.1301L41.775 57.3083C38.6808 39.6342 35.597 22.0245 32.5011 4.33469L46.2352 1.92965C46.5294 3.56376 46.8148 5.11955 47.0862 6.67534C47.5213 9.15696 47.9564 11.6386 48.3688 14.1237C48.4672 14.7231 48.516 15.3296 48.515 15.937C48.5231 29.0969 48.5231 42.2579 48.515 55.4201L48.5237 56.1301Z" fill="white"></path><path d="M292.242 35.7812H298.747V46.4752H292.235V56.607H279.37V46.4752H253.405V37.5511L274.07 2.97555H292.242V35.7812ZM279.376 35.7812V13.9114L266.753 35.7812H279.376Z" fill="#4EFF94"></path>', 8),
        Dre = [kre];

    function xre(e, t) {
        return V(), z("svg", Pre, Dre)
    }
    const O0 = ze(Lre, [
            ["render", xre]
        ]),
        Mre = {},
        Fre = {
            viewBox: "0 0 305 96",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Ure = Z("path", {
            d: "M41 21V2L55.4762 21H267C287.435 21 304 37.5655 304 58C304 78.4345 287.435 95 267 95H38C17.5655 95 1 78.4345 1 58C1 37.5655 17.5655 21 38 21H41Z",
            fill: "black",
            stroke: "black"
        }, null, -1),
        Bre = {
            width: "305",
            height: "76",
            y: "20"
        };

    function Gre(e, t) {
        return V(), z("svg", Fre, [Ure, (V(), z("foreignObject", Bre, [Nb(e.$slots, "default")]))])
    }
    const S0 = ze(Mre, [
            ["render", Gre]
        ]),
        jre = {},
        Wre = {
            viewBox: "0 0 56 50",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Vre = Z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M52.442 43.1411L30.095 4.43507C29.1639 2.82231 26.8361 2.82232 25.905 4.43507L3.55803 43.1411C2.6269 44.7539 3.79081 46.7698 5.65305 46.7698L50.3469 46.7698C52.2092 46.7698 53.3731 44.7539 52.442 43.1411ZM32.8884 2.82231C30.7158 -0.940771 25.2842 -0.940772 23.1116 2.82231L0.764659 41.5284C-1.40796 45.2914 1.30781 49.9953 5.65305 49.9953L50.3469 49.9953C54.6922 49.9953 57.4079 45.2914 55.2353 41.5283L32.8884 2.82231Z",
            fill: "#FF3E4E"
        }, null, -1),
        Hre = Z("path", {
            d: "M28.4032 16.1275C26.4656 16.1275 24.9565 17.8088 25.1651 19.7351L26.5117 32.1701C26.6163 33.1359 27.4317 33.8678 28.4032 33.8678V33.8678C29.3746 33.8678 30.19 33.1359 30.2946 32.1701L31.6412 19.7351C31.8498 17.8088 30.3407 16.1275 28.4032 16.1275V16.1275Z",
            fill: "#FF3E4E"
        }, null, -1),
        Kre = Z("circle", {
            cx: "28.4032",
            cy: "38.3028",
            r: "2.82231",
            fill: "#FF3E4E"
        }, null, -1),
        Yre = [Vre, Hre, Kre];

    function qre(e, t) {
        return V(), z("svg", Wre, Yre)
    }
    const A0 = ze(jre, [
            ["render", qre]
        ]),
        zre = it({
            components: {
                FourbageLogo: O0,
                Input: I1,
                LobbyActions: S1,
                SpeechBubble: S0,
                WarningSymbol: A0
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
                    playerName: "",
                    isNameProfanityError: !1,
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
                    }
                }
            },
            watch: {
                async playerName() {
                    this.isNameProfanityError = !1;
                    try {
                        this.player.playerNameTextKey && await this.$ecast.updateText(this.player.playerNameTextKey, this.playerName.toUpperCase())
                    } catch (e) {
                        e instanceof ui.EcastFilterError && (this.isNameProfanityError = !0), this.$handleEcastError(e)
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
                    else if (this.isNameProfanityError) console.error("can't submit disallowed text");
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
        Xre = e => (pc("data-v-fb506f32"), e = e(), gc(), e),
        Jre = {
            class: "lobby"
        },
        Zre = {
            class: "lobby-content"
        },
        Qre = {
            key: 0,
            class: "instruction eay-instruction"
        },
        ene = {
            key: 1,
            class: "eay-name-change-container"
        },
        tne = ["disabled", "aria-label"],
        rne = {
            class: "error-container"
        },
        nne = {
            class: "error-text profanity-error"
        },
        ine = {
            class: "instruction avatar-instruction"
        },
        sne = {
            key: 3,
            class: "avatar-container"
        },
        ane = {
            class: "avatar-row"
        },
        one = ["onClick"],
        lne = ["src", "alt"],
        cne = ["src", "alt"],
        une = {
            class: "avatar-row"
        },
        fne = ["onClick"],
        dne = ["src", "alt"],
        hne = ["src", "alt"],
        pne = {
            class: "avatar-row"
        },
        gne = ["onClick"],
        mne = ["src", "alt"],
        vne = ["src", "alt"],
        yne = Xre(() => Z("div", {
            class: "fader"
        }, null, -1));

    function _ne(e, t, r, n, s, o) {
        const l = $t("FourbageLogo"),
            u = $t("Input"),
            f = $t("WarningSymbol"),
            h = $t("SpeechBubble"),
            g = $t("LobbyActions"),
            y = Rt("t");
        return V(), z("div", Jre, [Z("div", Zre, [rt(l, {
            class: "logo lobby-logo"
        }), e.player.playerNameTextKey && e.showNameChange ? Ce((V(), z("span", Qre, null, 512)), [
            [y, "LOBBY.PLAYER_NAME_INSTRUCTION"]
        ]) : Oe("", !0), e.player.playerNameTextKey && e.showNameChange ? (V(), z("div", ene, [rt(u, {
            modelValue: e.playerName,
            "onUpdate:modelValue": t[0] || (t[0] = b => e.playerName = b),
            maxlength: 12,
            class: "eay-name-box",
            disabled: e.isSubmittingName,
            "aria-label": e.$t("ARIA.NAME_ENTRY"),
            sanitizers: ["html", "emoji"],
            onKeypress: t[1] || (t[1] = Bs(b => e.submitName(), ["enter"]))
        }, null, 8, ["modelValue", "disabled", "aria-label"]), Ce(Z("button", {
            class: "primary-button eay-name-submit",
            disabled: e.isSubmittingName || e.playerName.length <= 0 || e.isNameProfanityError,
            "aria-label": e.$t("ARIA.NAME_SUBMIT"),
            onClick: t[2] || (t[2] = b => e.submitName())
        }, null, 8, tne), [
            [y, "ACTION.SUBMIT"]
        ])])) : Oe("", !0), e.showNameChange && e.isNameProfanityError ? (V(), er(h, {
            key: 2,
            class: "error-bubble"
        }, {
            default: Qi(() => [Z("div", rne, [rt(f, {
                class: "warning-icon"
            }), Ce(Z("span", nne, null, 512), [
                [y, "WRITING.PROHIBITED_LANGUAGE"]
            ])])]),
            _: 1
        })) : Oe("", !0), Ce(Z("span", ine, null, 512), [
            [y, "LOBBY.AVATAR_INSTRUCTION"]
        ]), e.player.avatars ? (V(), z("div", sne, [Z("div", ane, [(V(), z(et, null, un(3, (b, T) => {
            var R;
            return Z("button", {
                key: `button${T}`,
                class: Me(["avatar-button", T === e.selectedIndex ? "selected" : ""]),
                onClick: D => e.submitAvatar(T)
            }, [e.images[`avatar${T}On`] && (((R = e.player.avatars.find(D => D.name.toLowerCase() === `avatar${T}`.toLowerCase())) == null ? void 0 : R.available) || e.selectedIndex === T || e.prevSelectedIndex === T) ? (V(), z("img", {
                key: 0,
                class: Me(["avatar-image", T === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${T}On`].src,
                alt: e.images[`avatar${T}On`].alt
            }, null, 10, lne)) : e.images[`avatar${T}Off`] ? (V(), z("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${T}Off`].src,
                alt: e.images[`avatar${T}Off`].alt
            }, null, 8, cne)) : Oe("", !0)], 10, one)
        }), 64))]), Z("div", une, [(V(), z(et, null, un(2, (b, T) => {
            var R;
            return Z("button", {
                key: `button${T+3}`,
                class: Me(["avatar-button", T + 3 === e.selectedIndex ? "selected" : ""]),
                onClick: D => e.submitAvatar(T + 3)
            }, [e.images[`avatar${T+3}On`] && (((R = e.player.avatars.find(D => D.name.toLowerCase() === `avatar${T+3}`.toLowerCase())) == null ? void 0 : R.available) || e.selectedIndex === T + 3 || e.prevSelectedIndex === T + 3) ? (V(), z("img", {
                key: 0,
                class: Me(["avatar-image", T + 3 === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${T+3}On`].src,
                alt: e.images[`avatar${T+3}On`].alt
            }, null, 10, dne)) : e.images[`avatar${T+3}Off`] ? (V(), z("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${T+3}Off`].src,
                alt: e.images[`avatar${T+3}Off`].alt
            }, null, 8, hne)) : Oe("", !0)], 10, fne)
        }), 64))]), Z("div", pne, [(V(), z(et, null, un(3, (b, T) => {
            var R;
            return Z("button", {
                key: `button${T+5}`,
                class: Me(["avatar-button", T + 5 === e.selectedIndex ? "selected" : ""]),
                onClick: D => e.submitAvatar(T + 5)
            }, [e.images[`avatar${T+5}On`] && (((R = e.player.avatars.find(D => D.name.toLowerCase() === `avatar${T+5}`.toLowerCase())) == null ? void 0 : R.available) || e.selectedIndex === T + 5 || e.prevSelectedIndex === T + 5) ? (V(), z("img", {
                key: 0,
                class: Me(["avatar-image", T + 5 === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${T+5}On`].src,
                alt: e.images[`avatar${T+5}On`].alt
            }, null, 10, mne)) : e.images[`avatar${T+5}Off`] ? (V(), z("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${T+5}Off`].src,
                alt: e.images[`avatar${T+5}Off`].alt
            }, null, 8, vne)) : Oe("", !0)], 10, gne)
        }), 64))])])) : Oe("", !0)]), yne, rt(g, {
            player: e.player,
            class: "controls",
            "start-text": e.$t("LOBBY.START_TEXT")
        }, null, 8, ["player", "start-text"])])
    }
    const Ene = ze(zre, [
            ["render", _ne],
            ["__scopeId", "data-v-fb506f32"]
        ]),
        bne = it({
            components: {
                GalleryLink: z6,
                PostGameActions: A1
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
        Tne = {
            class: "post-game"
        },
        One = ["src", "alt"];

    function Sne(e, t, r, n, s, o) {
        const l = $t("PostGameActions"),
            u = $t("GalleryLink");
        return V(), z("div", Tne, [rt(l, {
            player: e.player,
            class: "postgame-controls"
        }, null, 8, ["player"]), rt(u, {
            artifact: e.artifact
        }, null, 8, ["artifact"]), e.images.chameleon ? (V(), z("img", {
            key: 0,
            class: "flavor-image",
            src: e.images.chameleon.src,
            alt: e.images.chameleon.alt
        }, null, 8, One)) : Oe("", !0)])
    }
    const Ane = ze(bne, [
            ["render", Sne],
            ["__scopeId", "data-v-4318246e"]
        ]),
        Ine = it({
            components: {
                FourbageLogo: O0
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
        wne = {
            class: "waiting"
        },
        Cne = ["src", "alt"],
        Nne = {
            class: "waiting-text"
        };

    function $ne(e, t, r, n, s, o) {
        const l = $t("FourbageLogo"),
            u = Rt("t");
        return V(), z("div", wne, [rt(l, {
            class: "logo waiting-logo"
        }), e.images.rabbitWaiting ? (V(), z("img", {
            key: 0,
            class: "bg-image",
            src: e.images.rabbitWaiting.src,
            alt: e.images.rabbitWaiting.alt
        }, null, 8, Cne)) : Oe("", !0), Ce(Z("span", Nne, null, 512), [
            [u, "WAITING"]
        ])])
    }
    const I0 = ze(Ine, [
            ["render", $ne]
        ]),
        Rne = {},
        Lne = {
            width: "27",
            height: "33",
            viewBox: "0 0 27 33",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Pne = Gb('<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7302 13.9775H17.0561C16.1749 13.9775 15.4606 14.6919 15.4606 15.573C15.4606 16.4542 16.1749 17.1686 17.0561 17.1686H23.7302C24.6114 17.1686 25.3257 16.4542 25.3257 15.573C25.3257 14.6919 24.6114 13.9775 23.7302 13.9775Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.8427 18.7978H18.5394C17.6582 18.7978 16.9438 19.5121 16.9438 20.3933C16.9438 21.2744 17.6582 21.9888 18.5394 21.9888H24.8427C25.7239 21.9888 26.4382 21.2744 26.4382 20.3933C26.4382 19.5121 25.7239 18.7978 24.8427 18.7978Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5448 23.618H17.2415C16.2579 23.618 15.4606 24.4153 15.4606 25.3989C15.4606 26.3825 16.2579 27.1798 17.2415 27.1798H23.5448C24.5284 27.1798 25.3257 26.3825 25.3257 25.3989C25.3257 24.4153 24.5284 23.618 23.5448 23.618Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2471 28.809H15.9438C15.0626 28.809 14.3483 29.5233 14.3483 30.4045C14.3483 31.2857 15.0626 32 15.9438 32H22.2471C23.1283 32 23.8427 31.2857 23.8427 30.4045C23.8427 29.5233 23.1283 28.809 22.2471 28.809Z" fill="#000000"></path><path d="M15.2396 13.7191H14.2978C13.5209 13.7191 13.0156 12.9015 13.363 12.2065L15.59 7.7527C16.0665 6.79958 16.3146 5.7486 16.3146 4.68298V2.87364C16.3146 1.28657 15.028 0 13.441 0C13.3838 0 13.3311 0.0310026 13.3033 0.0809906L12.2017 2.06391C10.5143 5.10118 8.18761 7.73585 5.38233 9.78587L2.4599 11.9215C0.913917 13.0512 0 14.851 0 16.7658V26.8146C0 30.1283 2.68629 32.8146 6 32.8146H14.9786C14.0231 32.4316 13.3483 31.4969 13.3483 30.4045C13.3483 29.0005 14.463 27.8569 15.8557 27.8105C15.0219 27.3303 14.4606 26.4302 14.4606 25.3989C14.4606 23.8762 15.6843 22.6393 17.2021 22.6183C16.4481 22.1642 15.9438 21.3376 15.9438 20.3933C15.9438 19.4491 16.4479 18.6227 17.2017 18.1686H17.056C15.6226 18.1686 14.4606 17.0065 14.4606 15.573C14.4606 14.8468 14.7588 14.1902 15.2396 13.7191Z" fill="#000000"></path>', 5),
        kne = [Pne];

    function Dne(e, t) {
        return V(), z("svg", Lne, kne)
    }
    const xne = ze(Rne, [
            ["render", Dne]
        ]),
        Mne = {},
        Fne = {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Une = Z("circle", {
            cx: "11.3872",
            cy: "10.5772",
            r: "9",
            transform: "rotate(-0.181627 11.3872 10.5772)",
            stroke: "black",
            "stroke-width": "3"
        }, null, -1),
        Bne = [Une];

    function Gne(e, t) {
        return V(), z("svg", Fne, Bne)
    }
    const jne = ze(Mne, [
            ["render", Gne]
        ]),
        Wne = it({
            components: {
                FullLike: xne,
                EmptyLike: jne
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
        Vne = {
            class: "choosing"
        },
        Hne = {
            class: "instruction"
        },
        Kne = {
            key: 0,
            class: "prompt"
        },
        Yne = ["disabled", "aria-label", "onClick"],
        qne = {
            class: "choice-text"
        };

    function zne(e, t, r, n, s, o) {
        const l = $t("FullLike"),
            u = $t("EmptyLike"),
            f = Rt("t"),
            h = Rt("bb");
        return V(), z("div", Vne, [Ce(Z("span", Hne, null, 512), [
            [f, e.instruction]
        ]), e.player.context !== "pick-likes" ? Ce((V(), z("span", Kne, null, 512)), [
            [h, e.player.prompt]
        ]) : Oe("", !0), (V(!0), z(et, null, un(e.player.choices, (g, y) => (V(), z("button", {
            key: `${e.player.context}-${y}`,
            class: Me([{
                disabled: g.disabled,
                "like-button": e.player.context === "pick-likes",
                selected: e.selected.indexOf(y) !== -1 && e.player.context !== "pick-likes",
                unselected: e.selected.length > 0 && e.selected.indexOf(y) === -1 && e.player.context !== "pick-likes"
            }, "primary-button choice-button"]),
            disabled: g.disabled,
            "aria-label": g.text,
            onClick: b => e.chooseOption(y)
        }, [Z("span", qne, _t(e.$bb(g.text)), 1), e.player.context === "pick-likes" ? (V(), z(et, {
            key: 0
        }, [e.selected.indexOf(y) !== -1 ? (V(), er(l, {
            key: 0,
            class: "like-image full-like"
        })) : (V(), er(u, {
            key: 1,
            class: "like-image empty-like"
        }))], 64)) : Oe("", !0)], 10, Yne))), 128))])
    }
    const Xne = ze(Wne, [
            ["render", zne],
            ["__scopeId", "data-v-404f1f35"]
        ]),
        Jne = it({
            components: {
                Waiting: I0
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
            computed: {
                prompt() {
                    return this.player.prompt.includes("FINAL_ROUND_AND_FORMAT") ? "" : this.player.prompt
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
        Zne = {
            class: "voting"
        },
        Qne = {
            class: "instruction"
        },
        eie = {
            key: 0,
            class: "prompt"
        },
        tie = ["aria-label", "onClick"],
        rie = {
            class: "choice-text"
        };

    function nie(e, t, r, n, s, o) {
        const l = $t("Waiting"),
            u = Rt("t"),
            f = Rt("bb");
        return V(), z("div", Zne, [e.state !== "waiting" ? (V(), z(et, {
            key: 0
        }, [Ce(Z("span", Qne, null, 512), [
            [u, e.state === "liking" ? "VOTING.LIKE_INSTRUCTION" : "VOTING.VOTE_INSTRUCTION"]
        ]), !e.hasSubmitted && e.state !== "liking" ? Ce((V(), z("span", eie, null, 512)), [
            [f, e.prompt]
        ]) : Oe("", !0), e.hasSubmitted ? Oe("", !0) : (V(!0), z(et, {
            key: 1
        }, un(e.player.choices, (h, g) => (V(), z("button", {
            key: `${e.state}-${g}`,
            class: Me([{
                "like-button": e.state === "liking",
                selected: e.selection === h.key
            }, "primary-button choice-button"]),
            "aria-label": h.text,
            onClick: y => e.submitVote(h)
        }, [Ce(Z("span", rie, null, 512), [
            [f, h.text]
        ])], 10, tie))), 128))], 64)) : (V(), er(l, {
            key: 1
        }))])
    }
    const iie = ze(Jne, [
            ["render", nie]
        ]),
        sie = {},
        aie = {
            viewBox: "0 0 37 37",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        oie = Z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28275 28.7173 0 18.5 0C8.28273 0 0 8.28275 0 18.5C0 28.7173 8.28273 37 18.5 37ZM11.5 11C12.8807 11 14 12.1193 14 13.5C14 14.8807 12.8807 16 11.5 16C10.1193 16 9 14.8807 9 13.5C9 12.1193 10.1193 11 11.5 11ZM27 13.5C27 12.1193 25.8807 11 24.5 11C23.1193 11 22 12.1193 22 13.5C22 14.8807 23.1193 16 24.5 16C25.8807 16 27 14.8807 27 13.5ZM18.5 21C21.5376 21 24 23.2386 24 26C24 28.7614 21.5376 30 18.5 30C15.4624 30 13 28.7614 13 26C13 23.2386 15.4624 21 18.5 21Z",
            fill: "#FFD233"
        }, null, -1),
        lie = [oie];

    function cie(e, t) {
        return V(), z("svg", aie, lie)
    }
    const uie = ze(sie, [
            ["render", cie]
        ]),
        fie = it({
            components: {
                Input: I1,
                SadFace: uie,
                SpeechBubble: S0,
                WarningSymbol: A0
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
                        e instanceof ui.EcastFilterError && (this.isProfanityError1 = !0), this.$handleEcastError(e)
                    }
                },
                async currentText2() {
                    if (this.player.textKey2) {
                        this.isTruthError = !1, this.isProfanityError2 = !1;
                        try {
                            await this.$ecast.updateText(this.player.textKey2, this.currentText2)
                        } catch (e) {
                            e instanceof ui.EcastFilterError && (this.isProfanityError2 = !0), this.$handleEcastError(e)
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
                    else if (!this.isLieForMe && (this.currentText1.trim().length <= 0 || this.player.textKey2 && this.currentText2.trim().length <= 0)) console.error("cant submit blanks text");
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
        die = {
            class: "writing"
        },
        hie = {
            class: "instruction"
        },
        pie = {
            class: "prompt"
        },
        gie = {
            key: 0,
            class: "separator"
        },
        mie = {
            key: 1,
            class: "prompt"
        },
        vie = {
            class: "error-container"
        },
        yie = {
            class: "error-text profanity-error"
        },
        _ie = {
            class: "error-container"
        },
        Eie = {
            class: "error-text truth-error"
        },
        bie = {
            key: 2,
            class: "joiner"
        },
        Tie = {
            class: "error-container"
        },
        Oie = {
            class: "error-text profanity-error"
        },
        Sie = ["disabled", "aria-label"],
        Aie = {
            class: "button-separator"
        },
        Iie = ["disabled", "aria-label"],
        wie = ["disabled", "aria-label", "onClick"];

    function Cie(e, t, r, n, s, o) {
        const l = $t("Input"),
            u = $t("WarningSymbol"),
            f = $t("SpeechBubble"),
            h = $t("SadFace"),
            g = Rt("t"),
            y = Rt("bb");
        return V(), z("div", die, [Ce(Z("span", hie, null, 512), [
            [g, e.instruction]
        ]), Ce(Z("span", pie, null, 512), [
            [y, e.player.prompt1]
        ]), e.player.prompt2 ? Ce((V(), z("span", gie, null, 512)), [
            [g, "WRITING.SEPARATOR"]
        ]) : Oe("", !0), e.player.prompt2 ? Ce((V(), z("span", mie, null, 512)), [
            [y, e.player.prompt2]
        ]) : Oe("", !0), e.isLieForMe ? (V(!0), z(et, {
            key: 3
        }, un(e.player.suggestions, (b, T) => Ce((V(), z("button", {
            key: `lie-${T}`,
            class: "primary-button",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.CHOICE_BUTTON"),
            onClick: R => e.parseAndSubmitLie(b)
        }, null, 8, wie)), [
            [y, b.replace("|", " " + e.player.joiningPhrase + " ")]
        ])), 128)) : (V(), z(et, {
            key: 2
        }, [rt(l, {
            modelValue: e.currentText1,
            "onUpdate:modelValue": t[0] || (t[0] = b => e.currentText1 = b),
            placeholder: e.player.placeholder,
            maxlength: e.player.maxLength,
            class: "answer-box",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.LIE_INPUT_1"),
            sanitizers: ["html", "emoji"],
            onKeypress: t[1] || (t[1] = Bs(b => e.onSubmit(), ["enter"]))
        }, null, 8, ["modelValue", "placeholder", "maxlength", "disabled", "aria-label"]), e.isProfanityError1 ? (V(), er(f, {
            key: 0,
            class: "error-bubble"
        }, {
            default: Qi(() => [Z("div", vie, [rt(u, {
                class: "warning-icon"
            }), Ce(Z("span", yie, null, 512), [
                [g, "WRITING.PROHIBITED_LANGUAGE"]
            ])])]),
            _: 1
        })) : e.isTruthError ? (V(), er(f, {
            key: 1,
            class: "error-bubble"
        }, {
            default: Qi(() => [Z("div", _ie, [rt(h, {
                class: "warning-icon"
            }), Z("span", Eie, _t(e.player.error), 1)])]),
            _: 1
        })) : Oe("", !0), e.player.textKey2 && e.player.joiningPhrase ? Ce((V(), z("span", bie, null, 512)), [
            [g, e.player.joiningPhrase.toUpperCase()]
        ]) : Oe("", !0), e.player.textKey2 ? (V(), er(l, {
            key: 3,
            modelValue: e.currentText2,
            "onUpdate:modelValue": t[2] || (t[2] = b => e.currentText2 = b),
            placeholder: e.player.placeholder,
            maxlength: e.player.maxLength,
            class: "answer-box",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.LIE_INPUT_2"),
            sanitizers: ["html", "emoji"],
            onKeypress: Bs(Zr(e.onSubmit, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "placeholder", "maxlength", "disabled", "aria-label", "onKeypress"])) : Oe("", !0), e.isProfanityError2 ? (V(), er(f, {
            key: 4,
            class: "error-bubble"
        }, {
            default: Qi(() => [Z("div", Tie, [rt(u, {
                class: "warning-icon"
            }), Ce(Z("span", Oie, null, 512), [
                [g, "WRITING.PROHIBITED_LANGUAGE"]
            ])])]),
            _: 1
        })) : Oe("", !0), Ce(Z("button", {
            class: "primary-button",
            disabled: e.currentText1.trim().length <= 0 || e.player.textKey2 && e.currentText2.trim().length <= 0 || e.isSubmitting || e.isTruthError || e.isProfanityError1 || e.isProfanityError2,
            "aria-label": e.$t("ARIA.SUBMIT_BUTTON"),
            onClick: t[3] || (t[3] = b => e.onSubmit()),
            onKeydownCapture: t[4] || (t[4] = Bs(b => e.onSubmit(), ["enter"]))
        }, null, 40, Sie), [
            [g, "ACTION.SUBMIT"]
        ]), e.player.suggestions && e.player.suggestions.length > 0 ? (V(), z(et, {
            key: 5
        }, [Ce(Z("span", Aie, null, 512), [
            [g, "SEPARATOR.OR"]
        ]), Ce(Z("button", {
            class: "secondary-button",
            disabled: e.isSubmitting,
            "aria-label": e.$t("ARIA.LIE_BUTTON"),
            onClick: t[5] || (t[5] = b => e.lieForMe())
        }, null, 8, Iie), [
            [g, "WRITING.LIE_FOR_ME"]
        ])], 64)) : Oe("", !0)], 64))])
    }
    const Nie = ze(fie, [
            ["render", Cie],
            ["__scopeId", "data-v-4db5bb6d"]
        ]),
        $ie = it({
            bb: {
                blank: (e, t, r) => '<span class="blank">________</span>'
            },
            components: {
                Lobby: Ene,
                PostGame: Ane,
                Waiting: I0,
                Choosing: Xne,
                Writing: Nie,
                Voting: iie,
                Fallbacks: H6
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
                            return ["PostGame", {
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
                            return ["PostGame", {
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
        Rie = {
            class: "constrain"
        },
        Lie = {
            key: 0,
            class: "name-header"
        },
        Pie = {
            key: 1,
            class: "name-header"
        };

    function kie(e, t, r, n, s, o) {
        const l = Rt("bb"),
            u = Rt("t");
        return V(), z("div", {
            class: Me([e.alternateBackgroundClass, "fourbage"])
        }, [Z("div", Rie, [e.screen ? (V(), er(yc(e.screen[0]), bc({
            key: 0,
            role: "main"
        }, e.screen[1]), null, 16)) : Oe("", !0)]), e.info ? Ce((V(), z("span", Lie, null, 512)), [
            [l, e.info.name]
        ]) : Oe("", !0), e.audience ? Ce((V(), z("span", Pie, null, 512)), [
            [u, "AUDIENCE.NAME"]
        ]) : Oe("", !0)], 2)
    }
    const Die = ze($ie, [
        ["render", kie]
    ]);
    xte({
        MainView: Die,
        messages: Rre
    })
});
export default xie();
//# sourceMappingURL=d31d0040.js.map