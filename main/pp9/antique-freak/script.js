var tR = Object.defineProperty;
var rR = (e, t, r) => t in e ? tR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var nR = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (rR(e, typeof t != "symbol" ? t + "" : t, r), r);
var Sie = nR((wie, Ow) => {
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
    const iR = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        sR = uh(iR);

    function VE(e) {
        return !!e || e === ""
    }

    function ao(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Wt(n) ? lR(n) : ao(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Wt(e)) return e;
            if (mt(e)) return e
        }
    }
    const aR = /;(?![^(]*\))/g,
        oR = /:(.+)/;

    function lR(e) {
        const t = {};
        return e.split(aR).forEach(r => {
            if (r) {
                const n = r.split(oR);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function De(e) {
        let t = "";
        if (Wt(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = De(e[r]);
                n && (t += n + " ")
            } else if (mt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function cR(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = lc(e[n], t[n]);
        return r
    }

    function lc(e, t) {
        if (e === t) return !0;
        let r = mv(e),
            n = mv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Va(e), n = Va(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? cR(e, t) : !1;
        if (r = mt(e), n = mt(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const l in e) {
                const u = e.hasOwnProperty(l),
                    f = t.hasOwnProperty(l);
                if (u && !f || !u && f || !lc(e[l], t[l])) return !1
            }
        }
        return String(e) === String(t)
    }

    function qE(e, t) {
        return e.findIndex(r => lc(r, t))
    }
    const et = e => Wt(e) ? e : e == null ? "" : ke(e) || mt(e) && (e.toString === XE || !He(e.toString)) ? JSON.stringify(e, YE, 2) : String(e),
        YE = (e, t) => t && t.__v_isRef ? YE(e, t.value) : xs(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : uc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : mt(t) && !ke(t) && !JE(t) ? String(t) : t,
        gt = {},
        Ds = [],
        cn = () => {},
        uR = () => !1,
        fR = /^on[^a-z]/,
        cc = e => fR.test(e),
        fh = e => e.startsWith("onUpdate:"),
        rr = Object.assign,
        dh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        dR = Object.prototype.hasOwnProperty,
        Ze = (e, t) => dR.call(e, t),
        ke = Array.isArray,
        xs = e => oo(e) === "[object Map]",
        uc = e => oo(e) === "[object Set]",
        mv = e => oo(e) === "[object Date]",
        He = e => typeof e == "function",
        Wt = e => typeof e == "string",
        Va = e => typeof e == "symbol",
        mt = e => e !== null && typeof e == "object",
        zE = e => mt(e) && He(e.then) && He(e.catch),
        XE = Object.prototype.toString,
        oo = e => XE.call(e),
        hR = e => oo(e).slice(8, -1),
        JE = e => oo(e) === "[object Object]",
        hh = e => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Pl = uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        fc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        pR = /-(\w)/g,
        On = fc(e => e.replace(pR, (t, r) => r ? r.toUpperCase() : "")),
        gR = /\B([A-Z])/g,
        os = fc(e => e.replace(gR, "-$1").toLowerCase()),
        dc = fc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        df = fc(e => e ? `on${dc(e)}` : ""),
        qa = (e, t) => !Object.is(e, t),
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
        Gl = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let vv;
    const mR = () => vv || (vv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let _n;
    class QE {
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

    function vR(e) {
        return new QE(e)
    }

    function yR(e, t = _n) {
        t && t.active && t.effects.push(e)
    }
    const ph = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        ZE = e => (e.w & di) > 0,
        eb = e => (e.n & di) > 0,
        _R = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= di
        },
        ER = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    ZE(s) && !eb(s) ? s.delete(e) : t[r++] = s, s.w &= ~di, s.n &= ~di
                }
                t.length = r
            }
        },
        ad = new WeakMap;
    let ka = 0,
        di = 1;
    const od = 30;
    let an;
    const Qi = Symbol(""),
        ld = Symbol("");
    class gh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, yR(this, n)
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
                return this.parent = an, an = this, li = !0, di = 1 << ++ka, ka <= od ? _R(this) : yv(this), this.fn()
            } finally {
                ka <= od && ER(this), di = 1 << --ka, an = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
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
    const tb = [];

    function ta() {
        tb.push(li), li = !1
    }

    function ra() {
        const e = tb.pop();
        li = e === void 0 ? !0 : e
    }

    function xr(e, t, r) {
        if (li && an) {
            let n = ad.get(e);
            n || ad.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ph()), rb(s)
        }
    }

    function rb(e, t) {
        let r = !1;
        ka <= od ? eb(e) || (e.n |= di, r = !ZE(e)) : r = !e.has(an), r && (e.add(an), an.deps.push(e))
    }

    function Bn(e, t, r, n, s, o) {
        const l = ad.get(e);
        if (!l) return;
        let u = [];
        if (t === "clear") u = [...l.values()];
        else if (r === "length" && ke(e)) l.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(l.get(r)), t) {
            case "add":
                ke(e) ? hh(r) && u.push(l.get("length")) : (u.push(l.get(Qi)), xs(e) && u.push(l.get(ld)));
                break;
            case "delete":
                ke(e) || (u.push(l.get(Qi)), xs(e) && u.push(l.get(ld)));
                break;
            case "set":
                xs(e) && u.push(l.get(Qi));
                break
        }
        if (u.length === 1) u[0] && cd(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            cd(ph(f))
        }
    }

    function cd(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && _v(n);
        for (const n of r) n.computed || _v(n)
    }

    function _v(e, t) {
        (e !== an || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const bR = uh("__proto__,__v_isRef,__isVue"),
        nb = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Va)),
        TR = mh(),
        SR = mh(!1, !0),
        OR = mh(!0),
        Ev = wR();

    function wR() {
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
            if (s === "__v_raw" && o === (e ? t ? GR : lb : t ? ob : ab).get(n)) return n;
            const l = ke(n);
            if (!e && l && Ze(Ev, s)) return Reflect.get(Ev, s, o);
            const u = Reflect.get(n, s, o);
            return (Va(s) ? nb.has(s) : bR(s)) || (e || xr(n, "get", s), t) ? u : er(u) ? l && hh(s) ? u : u.value : mt(u) ? e ? cb(u) : Un(u) : u
        }
    }
    const $R = ib(),
        CR = ib(!0);

    function ib(e = !1) {
        return function(r, n, s, o) {
            let l = r[n];
            if (qs(l) && er(l) && !er(s)) return !1;
            if (!e && (!jl(s) && !qs(s) && (l = st(l), s = st(s)), !ke(r) && er(l) && !er(s))) return l.value = s, !0;
            const u = ke(r) && hh(n) ? Number(n) < r.length : Ze(r, n),
                f = Reflect.set(r, n, s, o);
            return r === st(o) && (u ? qa(s, l) && Bn(r, "set", n, s) : Bn(r, "add", n, s)), f
        }
    }

    function IR(e, t) {
        const r = Ze(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Bn(e, "delete", t, void 0), n
    }

    function AR(e, t) {
        const r = Reflect.has(e, t);
        return (!Va(t) || !nb.has(t)) && xr(e, "has", t), r
    }

    function NR(e) {
        return xr(e, "iterate", ke(e) ? "length" : Qi), Reflect.ownKeys(e)
    }
    const sb = {
            get: TR,
            set: $R,
            deleteProperty: IR,
            has: AR,
            ownKeys: NR
        },
        RR = {
            get: OR,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        PR = rr({}, sb, {
            get: SR,
            set: CR
        }),
        vh = e => e,
        hc = e => Reflect.getPrototypeOf(e);

    function hl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = st(e),
            o = st(t);
        r || (t !== o && xr(s, "get", t), xr(s, "get", o));
        const {
            has: l
        } = hc(s), u = n ? vh : r ? Eh : Ya;
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
        return e = e.__v_raw, !t && xr(st(e), "iterate", Qi), Reflect.get(e, "size", e)
    }

    function bv(e) {
        e = st(e);
        const t = st(this);
        return hc(t).has.call(t, e) || (t.add(e), Bn(t, "add", e, e)), this
    }

    function Tv(e, t) {
        t = st(t);
        const r = st(this),
            {
                has: n,
                get: s
            } = hc(r);
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
            } = hc(t);
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

    function ml(e, t) {
        return function(n, s) {
            const o = this,
                l = o.__v_raw,
                u = st(l),
                f = t ? vh : e ? Eh : Ya;
            return !e && xr(u, "iterate", Qi), l.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function vl(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = st(s),
                l = xs(o),
                u = e === "entries" || e === Symbol.iterator && l,
                f = e === "keys" && l,
                h = s[e](...n),
                g = r ? vh : t ? Eh : Ya;
            return !t && xr(o, "iterate", f ? ld : Qi), {
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

    function Qn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function LR() {
        const e = {
                get(o) {
                    return hl(this, o)
                },
                get size() {
                    return gl(this)
                },
                has: pl,
                add: bv,
                set: Tv,
                delete: Sv,
                clear: Ov,
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
                add: bv,
                set: Tv,
                delete: Sv,
                clear: Ov,
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
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
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
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
                forEach: ml(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = vl(o, !1, !1), r[o] = vl(o, !0, !1), t[o] = vl(o, !1, !0), n[o] = vl(o, !0, !0)
        }), [e, r, t, n]
    }
    const [kR, DR, xR, MR] = LR();

    function yh(e, t) {
        const r = t ? e ? MR : xR : e ? DR : kR;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Ze(r, s) && s in n ? r : n, s, o)
    }
    const FR = {
            get: yh(!1, !1)
        },
        BR = {
            get: yh(!1, !0)
        },
        UR = {
            get: yh(!0, !1)
        },
        ab = new WeakMap,
        ob = new WeakMap,
        lb = new WeakMap,
        GR = new WeakMap;

    function jR(e) {
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

    function WR(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : jR(hR(e))
    }

    function Un(e) {
        return qs(e) ? e : _h(e, !1, sb, FR, ab)
    }

    function HR(e) {
        return _h(e, !1, PR, BR, ob)
    }

    function cb(e) {
        return _h(e, !0, RR, UR, lb)
    }

    function _h(e, t, r, n, s) {
        if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const l = WR(e);
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

    function jl(e) {
        return !!(e && e.__v_isShallow)
    }

    function ub(e) {
        return Ms(e) || qs(e)
    }

    function st(e) {
        const t = e && e.__v_raw;
        return t ? st(t) : e
    }

    function fb(e) {
        return Ul(e, "__v_skip", !0), e
    }
    const Ya = e => mt(e) ? Un(e) : e,
        Eh = e => mt(e) ? cb(e) : e;

    function db(e) {
        li && an && (e = st(e), rb(e.dep || (e.dep = ph())))
    }

    function hb(e, t) {
        e = st(e), e.dep && cd(e.dep)
    }

    function er(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function on(e) {
        return pb(e, !1)
    }

    function KR(e) {
        return pb(e, !0)
    }

    function pb(e, t) {
        return er(e) ? e : new VR(e, t)
    }
    class VR {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : st(t), this._value = r ? t : Ya(t)
        }
        get value() {
            return db(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || jl(t) || qs(t);
            t = r ? t : st(t), qa(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Ya(t), hb(this))
        }
    }

    function qR(e) {
        return er(e) ? e.value : e
    }
    const YR = {
        get: (e, t, r) => qR(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return er(s) && !er(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function gb(e) {
        return Ms(e) ? e : new Proxy(e, YR)
    }
    var mb;
    class zR {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[mb] = !1, this._dirty = !0, this.effect = new gh(t, () => {
                this._dirty || (this._dirty = !0, hb(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = st(this);
            return db(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    mb = "__v_isReadonly";

    function XR(e, t, r = !1) {
        let n, s;
        const o = He(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new zR(n, s, o || !s, r)
    }

    function ci(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            pc(o, t, r)
        }
        return s
    }

    function Jr(e, t, r, n) {
        if (He(e)) {
            const o = ci(e, t, r, n);
            return o && zE(o) && o.catch(l => {
                pc(l, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Jr(e[o], t, r, n));
        return s
    }

    function pc(e, t, r, n = !0) {
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
        JR(e, r, s, n)
    }

    function JR(e, t, r, n = !0) {
        console.error(e)
    }
    let za = !1,
        ud = !1;
    const or = [];
    let Sn = 0;
    const Fs = [];
    let xn = null,
        Ki = 0;
    const vb = Promise.resolve();
    let bh = null;

    function QR(e) {
        const t = bh || vb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function ZR(e) {
        let t = Sn + 1,
            r = or.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Xa(or[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function Th(e) {
        (!or.length || !or.includes(e, za && e.allowRecurse ? Sn + 1 : Sn)) && (e.id == null ? or.push(e) : or.splice(ZR(e.id), 0, e), yb())
    }

    function yb() {
        !za && !ud && (ud = !0, bh = vb.then(Eb))
    }

    function eP(e) {
        const t = or.indexOf(e);
        t > Sn && or.splice(t, 1)
    }

    function tP(e) {
        ke(e) ? Fs.push(...e) : (!xn || !xn.includes(e, e.allowRecurse ? Ki + 1 : Ki)) && Fs.push(e), yb()
    }

    function wv(e, t = za ? Sn + 1 : 0) {
        for (; t < or.length; t++) {
            const r = or[t];
            r && r.pre && (or.splice(t, 1), t--, r())
        }
    }

    function _b(e) {
        if (Fs.length) {
            const t = [...new Set(Fs)];
            if (Fs.length = 0, xn) {
                xn.push(...t);
                return
            }
            for (xn = t, xn.sort((r, n) => Xa(r) - Xa(n)), Ki = 0; Ki < xn.length; Ki++) xn[Ki]();
            xn = null, Ki = 0
        }
    }
    const Xa = e => e.id == null ? 1 / 0 : e.id,
        rP = (e, t) => {
            const r = Xa(e) - Xa(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function Eb(e) {
        ud = !1, za = !0, or.sort(rP);
        const t = cn;
        try {
            for (Sn = 0; Sn < or.length; Sn++) {
                const r = or[Sn];
                r && r.active !== !1 && ci(r, null, 14)
            }
        } finally {
            Sn = 0, or.length = 0, _b(), za = !1, bh = null, (or.length || Fs.length) && Eb()
        }
    }

    function nP(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || gt;
        let s = r;
        const o = t.startsWith("update:"),
            l = o && t.slice(7);
        if (l && l in n) {
            const g = `${l==="modelValue"?"model":l}Modifiers`,
                {
                    number: _,
                    trim: b
                } = n[g] || gt;
            b && (s = r.map($ => $.trim())), _ && (s = r.map(Gl))
        }
        let u, f = n[u = df(t)] || n[u = df(On(t))];
        !f && o && (f = n[u = df(os(t))]), f && Jr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Jr(h, e, 6, s)
        }
    }

    function bb(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let l = {},
            u = !1;
        if (!He(e)) {
            const f = h => {
                const g = bb(h, t, !0);
                g && (u = !0, rr(l, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (mt(e) && n.set(e, null), null) : (ke(o) ? o.forEach(f => l[f] = null) : rr(l, o), mt(e) && n.set(e, l), l)
    }

    function gc(e, t) {
        return !e || !cc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, os(t)) || Ze(e, t))
    }
    let lr = null,
        mc = null;

    function Wl(e) {
        const t = lr;
        return lr = e, mc = e && e.type.__scopeId || null, t
    }

    function lo(e) {
        mc = e
    }

    function co() {
        mc = null
    }

    function Sh(e, t = lr, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && xv(-1);
            const o = Wl(t),
                l = e(...s);
            return Wl(o), n._d && xv(1), l
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
            renderCache: _,
            data: b,
            setupState: $,
            ctx: P,
            inheritAttrs: M
        } = e;
        let U, C;
        const q = Wl(e);
        try {
            if (r.shapeFlag & 4) {
                const W = s || n;
                U = bn(g.call(W, W, _, o, $, b, P)), C = f
            } else {
                const W = t;
                U = bn(W.length > 1 ? W(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : W(o, null)), C = t.props ? f : iP(f)
            }
        } catch (W) {
            Fa.length = 0, pc(W, e, 1), U = St(Qr)
        }
        let X = U;
        if (C && M !== !1) {
            const W = Object.keys(C),
                {
                    shapeFlag: j
                } = X;
            W.length && j & 7 && (l && W.some(fh) && (C = sP(C, l)), X = hi(X, C))
        }
        return r.dirs && (X = hi(X), X.dirs = X.dirs ? X.dirs.concat(r.dirs) : r.dirs), r.transition && (X.transition = r.transition), U = X, Wl(q), U
    }
    const iP = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || cc(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        sP = (e, t) => {
            const r = {};
            for (const n in e)(!fh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function aP(e, t, r) {
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
                    const b = g[_];
                    if (l[b] !== n[b] && !gc(h, b)) return !0
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
            if (t[o] !== e[o] && !gc(r, o)) return !0
        }
        return !1
    }

    function oP({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const lP = e => e.__isSuspense;

    function cP(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : tP(e)
    }

    function uP(e, t) {
        if (qt) {
            let r = qt.provides;
            const n = qt.parent && qt.parent.provides;
            n === r && (r = qt.provides = Object.create(n)), r[e] = t
        }
    }

    function Zi(e, t, r = !1) {
        const n = qt || lr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && He(t) ? t.call(n.proxy) : t
        }
    }
    const Cv = {};

    function es(e, t, r) {
        return Tb(e, t, r)
    }

    function Tb(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: l
    } = gt) {
        const u = qt;
        let f, h = !1,
            g = !1;
        if (er(e) ? (f = () => e.value, h = jl(e)) : Ms(e) ? (f = () => e, n = !0) : ke(e) ? (g = !0, h = e.some(C => Ms(C) || jl(C)), f = () => e.map(C => {
                if (er(C)) return C.value;
                if (Ms(C)) return Ji(C);
                if (He(C)) return ci(C, u, 2)
            })) : He(e) ? t ? f = () => ci(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return _ && _(), Jr(e, u, 3, [b])
            } : f = cn, t && n) {
            const C = f;
            f = () => Ji(C())
        }
        let _, b = C => {
            _ = U.onStop = () => {
                ci(C, u, 4)
            }
        };
        if (Qa) return b = cn, t ? r && Jr(t, u, 3, [f(), g ? [] : void 0, b]) : f(), cn;
        let $ = g ? [] : Cv;
        const P = () => {
            if (!!U.active)
                if (t) {
                    const C = U.run();
                    (n || h || (g ? C.some((q, X) => qa(q, $[X])) : qa(C, $))) && (_ && _(), Jr(t, u, 3, [C, $ === Cv ? void 0 : $, b]), $ = C)
                } else U.run()
        };
        P.allowRecurse = !!t;
        let M;
        s === "sync" ? M = P : s === "post" ? M = () => Sr(P, u && u.suspense) : (P.pre = !0, u && (P.id = u.uid), M = () => Th(P));
        const U = new gh(f, M);
        return t ? r ? P() : $ = U.run() : s === "post" ? Sr(U.run.bind(U), u && u.suspense) : U.run(), () => {
            U.stop(), u && u.scope && dh(u.scope.effects, U)
        }
    }

    function fP(e, t, r) {
        const n = this.proxy,
            s = Wt(e) ? e.includes(".") ? Sb(n, e) : () => n[e] : e.bind(n, n);
        let o;
        He(t) ? o = t : (o = t.handler, r = t);
        const l = qt;
        Ys(this);
        const u = Tb(s, o.bind(n), r);
        return l ? Ys(l) : ts(), u
    }

    function Sb(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Ji(e, t) {
        if (!mt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), er(e)) Ji(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Ji(e[r], t);
        else if (uc(e) || xs(e)) e.forEach(r => {
            Ji(r, t)
        });
        else if (JE(e))
            for (const r in e) Ji(e[r], t);
        return e
    }

    function dP() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Oh(() => {
            e.isMounted = !0
        }), Ab(() => {
            e.isUnmounting = !0
        }), e
    }
    const Yr = [Function, Array],
        hP = {
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
                const r = as(),
                    n = dP();
                let s;
                return () => {
                    const o = t.default && $b(t.default(), !0);
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
                    if (n.isLeaving) return pf(l);
                    const h = Iv(l);
                    if (!h) return pf(l);
                    const g = fd(h, u, n, r);
                    dd(h, g);
                    const _ = r.subTree,
                        b = _ && Iv(_);
                    let $ = !1;
                    const {
                        getTransitionKey: P
                    } = h.type;
                    if (P) {
                        const M = P();
                        s === void 0 ? s = M : M !== s && (s = M, $ = !0)
                    }
                    if (b && b.type !== Qr && (!Vi(h, b) || $)) {
                        const M = fd(b, u, n, r);
                        if (dd(b, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, pf(l);
                        f === "in-out" && h.type !== Qr && (M.delayLeave = (U, C, q) => {
                            const X = wb(n, b);
                            X[String(b.key)] = b, U._leaveCb = () => {
                                C(), U._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = q
                        })
                    }
                    return l
                }
            }
        },
        Ob = hP;

    function wb(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function fd(e, t, r, n) {
        const {
            appear: s,
            mode: o,
            persisted: l = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: h,
            onEnterCancelled: g,
            onBeforeLeave: _,
            onLeave: b,
            onAfterLeave: $,
            onLeaveCancelled: P,
            onBeforeAppear: M,
            onAppear: U,
            onAfterAppear: C,
            onAppearCancelled: q
        } = t, X = String(e.key), W = wb(r, e), j = (le, ue) => {
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
                Ae && Vi(e, Ae) && Ae.el._leaveCb && Ae.el._leaveCb(), j(ue, [le])
            },
            enter(le) {
                let ue = f,
                    Ae = h,
                    Ce = g;
                if (!r.isMounted)
                    if (s) ue = U || f, Ae = C || h, Ce = q || g;
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
                    Ce || (Ce = !0, ue(), $e ? j(P, [le]) : j($, [le]), le._leaveCb = void 0, W[Ae] === e && delete W[Ae])
                };
                W[Ae] = e, b ? Q(b, [le, fe]) : fe()
            },
            clone(le) {
                return fd(le, t, r, n)
            }
        };
        return oe
    }

    function pf(e) {
        if (vc(e)) return e = hi(e), e.children = null, e
    }

    function Iv(e) {
        return vc(e) ? e.children ? e.children[0] : void 0 : e
    }

    function dd(e, t) {
        e.shapeFlag & 6 && e.component ? dd(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function $b(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let l = e[o];
            const u = r == null ? l.key : String(r) + String(l.key != null ? l.key : o);
            l.type === ze ? (l.patchFlag & 128 && s++, n = n.concat($b(l.children, t, u))) : (t || l.type !== Qr) && n.push(u != null ? hi(l, {
                key: u
            }) : l)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function tt(e) {
        return He(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Ma = e => !!e.type.__asyncLoader,
        vc = e => e.type.__isKeepAlive;

    function pP(e, t) {
        Cb(e, "a", t)
    }

    function gP(e, t) {
        Cb(e, "da", t)
    }

    function Cb(e, t, r = qt) {
        const n = e.__wdc || (e.__wdc = () => {
            let s = r;
            for (; s;) {
                if (s.isDeactivated) return;
                s = s.parent
            }
            return e()
        });
        if (yc(t, n, r), r) {
            let s = r.parent;
            for (; s && s.parent;) vc(s.parent.vnode) && mP(n, t, r, s), s = s.parent
        }
    }

    function mP(e, t, r, n) {
        const s = yc(t, e, n, !0);
        wh(() => {
            dh(n[t], s)
        }, r)
    }

    function yc(e, t, r = qt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    ta(), Ys(r);
                    const u = Jr(t, r, e, l);
                    return ts(), ra(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Gn = e => (t, r = qt) => (!Qa || e === "sp") && yc(e, t, r),
        Ib = Gn("bm"),
        Oh = Gn("m"),
        vP = Gn("bu"),
        yP = Gn("u"),
        Ab = Gn("bum"),
        wh = Gn("um"),
        _P = Gn("sp"),
        EP = Gn("rtg"),
        bP = Gn("rtc");

    function TP(e, t = qt) {
        yc("ec", e, t)
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
            f && (ta(), Jr(f, r, 8, [e.el, u, e, t]), ra())
        }
    }
    const $h = "components",
        SP = "directives";

    function kr(e, t) {
        return Ih($h, e, !0, t) || e
    }
    const Nb = Symbol();

    function Ch(e) {
        return Wt(e) ? Ih($h, e, !1) || e : e || Nb
    }

    function xt(e) {
        return Ih(SP, e)
    }

    function Ih(e, t, r = !0, n = !1) {
        const s = lr || qt;
        if (s) {
            const o = s.type;
            if (e === $h) {
                const u = QP(o, !1);
                if (u && (u === t || u === On(t) || u === dc(On(t)))) return o
            }
            const l = Av(s[e] || o[e], t) || Av(s.appContext[e], t);
            return !l && n ? o : l
        }
    }

    function Av(e, t) {
        return e && (e[t] || e[On(t)] || e[dc(On(t))])
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

    function OP(e, t, r = {}, n, s) {
        if (lr.isCE || lr.parent && Ma(lr.parent) && lr.parent.isCE) return St("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), G();
        const l = o && Rb(o(r)),
            u = wn(ze, {
                key: r.key || l && l.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function Rb(e) {
        return e.some(t => Vl(t) ? !(t.type === Qr || t.type === ze && !Rb(t.children)) : !0) ? e : null
    }
    const hd = e => e ? jb(e) ? bc(e) || e.proxy : hd(e.parent) : null,
        Hl = rr(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => hd(e.parent),
            $root: e => hd(e.root),
            $emit: e => e.emit,
            $options: e => Ah(e),
            $forceUpdate: e => e.f || (e.f = () => Th(e.update)),
            $nextTick: e => e.n || (e.n = QR.bind(e.proxy)),
            $watch: e => fP.bind(e)
        }),
        wP = {
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
                        pd && (l[t] = 0)
                    }
                }
                const g = Hl[t];
                let _, b;
                if (g) return t === "$attrs" && xr(e, "get", t), g(e);
                if ((_ = u.__cssModules) && (_ = _[t])) return _;
                if (r !== gt && Ze(r, t)) return l[t] = 4, r[t];
                if (b = f.config.globalProperties, Ze(b, t)) return b[t]
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
    let pd = !0;

    function $P(e) {
        const t = Ah(e),
            r = e.proxy,
            n = e.ctx;
        pd = !1, t.beforeCreate && Nv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: l,
            watch: u,
            provide: f,
            inject: h,
            created: g,
            beforeMount: _,
            mounted: b,
            beforeUpdate: $,
            updated: P,
            activated: M,
            deactivated: U,
            beforeDestroy: C,
            beforeUnmount: q,
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
        if (h && CP(h, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const be in l) {
                const ve = l[be];
                He(ve) && (n[be] = ve.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            mt(be) && (e.data = Un(be))
        }
        if (pd = !0, o)
            for (const be in o) {
                const ve = o[be],
                    Oe = He(ve) ? ve.bind(r, r) : He(ve.get) ? ve.get.bind(r, r) : cn,
                    Fe = !He(ve) && He(ve.set) ? ve.set.bind(r) : cn,
                    je = Dr({
                        get: Oe,
                        set: Fe
                    });
                Object.defineProperty(n, be, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => je.value,
                    set: rt => je.value = rt
                })
            }
        if (u)
            for (const be in u) Pb(u[be], n, r, be);
        if (f) {
            const be = He(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ve => {
                uP(ve, be[ve])
            })
        }
        g && Nv(g, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Oe => be(Oe.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(Ib, _), de(Oh, b), de(vP, $), de(yP, P), de(pP, M), de(gP, U), de(TP, le), de(bP, Q), de(EP, oe), de(Ab, q), de(wh, W), de(_P, ue), ke(Ae))
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

    function CP(e, t, r = cn, n = !1) {
        ke(e) && (e = gd(e));
        for (const s in e) {
            const o = e[s];
            let l;
            mt(o) ? "default" in o ? l = Zi(o.from || s, o.default, !0) : l = Zi(o.from || s) : l = Zi(o), er(l) && n ? Object.defineProperty(t, s, {
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

    function Pb(e, t, r, n) {
        const s = n.includes(".") ? Sb(r, n) : () => r[n];
        if (Wt(e)) {
            const o = t[e];
            He(o) && es(s, o)
        } else if (He(e)) es(s, e.bind(r));
        else if (mt(e))
            if (ke(e)) e.forEach(o => Pb(o, t, r, n));
            else {
                const o = He(e.handler) ? e.handler.bind(r) : t[e.handler];
                He(o) && es(s, o, e)
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
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => Kl(f, h, l, !0)), Kl(f, t, l)), mt(t) && o.set(t, f), f
    }

    function Kl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && Kl(e, o, r, !0), s && s.forEach(l => Kl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const u = IP[l] || r && r[l];
                e[l] = u ? u(e[l], t[l]) : t[l]
            } return e
    }
    const IP = {
        data: Rv,
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
        watch: NP,
        provide: Rv,
        inject: AP
    };

    function Rv(e, t) {
        return t ? e ? function() {
            return rr(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t)
        } : t : e
    }

    function AP(e, t) {
        return ji(gd(e), gd(t))
    }

    function gd(e) {
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

    function NP(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = rr(Object.create(null), e);
        for (const n in t) r[n] = gr(e[n], t[n]);
        return r
    }

    function RP(e, t, r, n = !1) {
        const s = {},
            o = {};
        Ul(o, Ec, 1), e.propsDefaults = Object.create(null), Lb(e, t, s, o);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : HR(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function PP(e, t, r, n) {
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
                    let b = g[_];
                    if (gc(e.emitsOptions, b)) continue;
                    const $ = t[b];
                    if (f)
                        if (Ze(o, b)) $ !== o[b] && (o[b] = $, h = !0);
                        else {
                            const P = On(b);
                            s[P] = md(f, u, P, $, e, !1)
                        }
                    else $ !== o[b] && (o[b] = $, h = !0)
                }
            }
        } else {
            Lb(e, t, s, o) && (h = !0);
            let g;
            for (const _ in u)(!t || !Ze(t, _) && ((g = os(_)) === _ || !Ze(t, g))) && (f ? r && (r[_] !== void 0 || r[g] !== void 0) && (s[_] = md(f, u, _, void 0, e, !0)) : delete s[_]);
            if (o !== u)
                for (const _ in o)(!t || !Ze(t, _) && !0) && (delete o[_], h = !0)
        }
        h && Bn(e, "set", "$attrs")
    }

    function Lb(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let l = !1,
            u;
        if (t)
            for (let f in t) {
                if (Pl(f)) continue;
                const h = t[f];
                let g;
                s && Ze(s, g = On(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : gc(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0)
            }
        if (o) {
            const f = st(r),
                h = u || gt;
            for (let g = 0; g < o.length; g++) {
                const _ = o[g];
                r[_] = md(s, f, _, h[_], e, !Ze(h, _))
            }
        }
        return l
    }

    function md(e, t, r, n, s, o) {
        const l = e[r];
        if (l != null) {
            const u = Ze(l, "default");
            if (u && n === void 0) {
                const f = l.default;
                if (l.type !== Function && He(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (Ys(s), n = h[r] = f.call(null, t), ts())
                } else n = f
            }
            l[0] && (o && !u ? n = !1 : l[1] && (n === "" || n === os(r)) && (n = !0))
        }
        return n
    }

    function kb(e, t, r = !1) {
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
                const [b, $] = kb(_, t, !0);
                rr(l, b), $ && u.push(...$)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return mt(e) && n.set(e, Ds), Ds;
        if (ke(o))
            for (let g = 0; g < o.length; g++) {
                const _ = On(o[g]);
                Pv(_) && (l[_] = gt)
            } else if (o)
                for (const g in o) {
                    const _ = On(g);
                    if (Pv(_)) {
                        const b = o[g],
                            $ = l[_] = ke(b) || He(b) ? {
                                type: b
                            } : b;
                        if ($) {
                            const P = Dv(Boolean, $.type),
                                M = Dv(String, $.type);
                            $[0] = P > -1, $[1] = M < 0 || P < M, (P > -1 || Ze($, "default")) && u.push(_)
                        }
                    }
                }
        const h = [l, u];
        return mt(e) && n.set(e, h), h
    }

    function Pv(e) {
        return e[0] !== "$"
    }

    function Lv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function kv(e, t) {
        return Lv(e) === Lv(t)
    }

    function Dv(e, t) {
        return ke(t) ? t.findIndex(r => kv(r, e)) : He(t) && kv(t, e) ? 0 : -1
    }
    const Db = e => e[0] === "_" || e === "$stable",
        Nh = e => ke(e) ? e.map(bn) : [bn(e)],
        LP = (e, t, r) => {
            if (t._n) return t;
            const n = Sh((...s) => Nh(t(...s)), r);
            return n._c = !1, n
        },
        xb = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (Db(s)) continue;
                const o = e[s];
                if (He(o)) t[s] = LP(s, o, n);
                else if (o != null) {
                    const l = Nh(o);
                    t[s] = () => l
                }
            }
        },
        Mb = (e, t) => {
            const r = Nh(t);
            e.slots.default = () => r
        },
        kP = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = st(t), Ul(t, "_", r)) : xb(t, e.slots = {})
            } else e.slots = {}, t && Mb(e, t);
            Ul(e.slots, Ec, 1)
        },
        DP = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                l = gt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (rr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, xb(t, s)), l = t
            } else t && (Mb(e, t), l = {
                default: 1
            });
            if (o)
                for (const u in s) !Db(u) && !(u in l) && delete s[u]
        };

    function Fb() {
        return {
            app: null,
            config: {
                isNativeTag: uR,
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
    let xP = 0;

    function MP(e, t) {
        return function(n, s = null) {
            He(n) || (n = Object.assign({}, n)), s != null && !mt(s) && (s = null);
            const o = Fb(),
                l = new Set;
            let u = !1;
            const f = o.app = {
                _uid: xP++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: eL,
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
                        const b = St(n, s);
                        return b.appContext = o, g && t ? t(b, h) : e(b, h, _), u = !0, f._container = h, h.__vue_app__ = f, bc(b.component) || b.component.proxy
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

    function vd(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((b, $) => vd(b, t && (ke(t) ? t[$] : t), r, n, s));
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
            const b = Wt(f),
                $ = er(f);
            if (b || $) {
                const P = () => {
                    if (e.f) {
                        const M = b ? g[f] : f.value;
                        s ? ke(M) && dh(M, o) : ke(M) ? M.includes(o) || M.push(o) : b ? (g[f] = [o], Ze(_, f) && (_[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else b ? (g[f] = l, Ze(_, f) && (_[f] = l)) : $ && (f.value = l, e.k && (g[e.k] = l))
                };
                l ? (P.id = -1, Sr(P, r)) : P()
            }
        }
    }
    const Sr = cP;

    function FP(e) {
        return BP(e)
    }

    function BP(e, t) {
        const r = mR();
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
            nextSibling: b,
            setScopeId: $ = cn,
            cloneNode: P,
            insertStaticContent: M
        } = e, U = (m, p, O, x = null, B = null, z = null, ce = !1, se = null, re = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Vi(m, p) && (x = Ot(m), It(m, B, z, !0), m = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: V,
                shapeFlag: he
            } = p;
            switch (A) {
                case _c:
                    C(m, p, O, x);
                    break;
                case Qr:
                    q(m, p, O, x);
                    break;
                case gf:
                    m == null && X(p, O, x, ce);
                    break;
                case ze:
                    $e(m, p, O, x, B, z, ce, se, re);
                    break;
                default:
                    he & 1 ? Q(m, p, O, x, B, z, ce, se, re) : he & 6 ? F(m, p, O, x, B, z, ce, se, re) : (he & 64 || he & 128) && A.process(m, p, O, x, B, z, ce, se, re, kt)
            }
            V != null && B && vd(V, m && m.ref, z, p || m, !p)
        }, C = (m, p, O, x) => {
            if (m == null) n(p.el = u(p.children), O, x);
            else {
                const B = p.el = m.el;
                p.children !== m.children && h(B, p.children)
            }
        }, q = (m, p, O, x) => {
            m == null ? n(p.el = f(p.children || ""), O, x) : p.el = m.el
        }, X = (m, p, O, x) => {
            [m.el, m.anchor] = M(m.children, p, O, x, m.el, m.anchor)
        }, W = ({
            el: m,
            anchor: p
        }, O, x) => {
            let B;
            for (; m && m !== p;) B = b(m), n(m, O, x), m = B;
            n(p, O, x)
        }, j = ({
            el: m,
            anchor: p
        }) => {
            let O;
            for (; m && m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, Q = (m, p, O, x, B, z, ce, se, re) => {
            ce = ce || p.type === "svg", m == null ? oe(p, O, x, B, z, ce, se, re) : Ae(m, p, B, z, ce, se, re)
        }, oe = (m, p, O, x, B, z, ce, se) => {
            let re, A;
            const {
                type: V,
                props: he,
                shapeFlag: pe,
                transition: Ne,
                patchFlag: xe,
                dirs: w
            } = m;
            if (m.el && P !== void 0 && xe === -1) re = m.el = P(m.el);
            else {
                if (re = m.el = l(m.type, z, he && he.is, he), pe & 8 ? g(re, m.children) : pe & 16 && ue(m.children, re, null, x, B, z && V !== "foreignObject", ce, se), w && Di(m, null, x, "created"), he) {
                    for (const R in he) R !== "value" && !Pl(R) && o(re, R, null, he[R], z, m.children, x, B, ot);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && mn(A, x, m)
                }
                le(re, m, m.scopeId, ce, x)
            }
            w && Di(m, null, x, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ne && !Ne.persisted;
            T && Ne.beforeEnter(re), n(re, p, O), ((A = he && he.onVnodeMounted) || T || w) && Sr(() => {
                A && mn(A, x, m), T && Ne.enter(re), w && Di(m, null, x, "mounted")
            }, B)
        }, le = (m, p, O, x, B) => {
            if (O && $(m, O), x)
                for (let z = 0; z < x.length; z++) $(m, x[z]);
            if (B) {
                let z = B.subTree;
                if (p === z) {
                    const ce = B.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, p, O, x, B, z, ce, se, re = 0) => {
            for (let A = re; A < m.length; A++) {
                const V = m[A] = se ? ni(m[A]) : bn(m[A]);
                U(null, V, p, O, x, B, z, ce, se)
            }
        }, Ae = (m, p, O, x, B, z, ce) => {
            const se = p.el = m.el;
            let {
                patchFlag: re,
                dynamicChildren: A,
                dirs: V
            } = p;
            re |= m.patchFlag & 16;
            const he = m.props || gt,
                pe = p.props || gt;
            let Ne;
            O && xi(O, !1), (Ne = pe.onVnodeBeforeUpdate) && mn(Ne, O, p, m), V && Di(p, m, O, "beforeUpdate"), O && xi(O, !0);
            const xe = B && p.type !== "foreignObject";
            if (A ? Ce(m.dynamicChildren, A, se, O, x, xe, z) : ce || Oe(m, p, se, null, O, x, xe, z, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, O, x, B);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, B), re & 4 && o(se, "style", he.style, pe.style, B), re & 8) {
                    const w = p.dynamicProps;
                    for (let T = 0; T < w.length; T++) {
                        const R = w[T],
                            S = he[R],
                            L = pe[R];
                        (L !== S || R === "value") && o(se, R, S, L, B, m.children, O, x, ot)
                    }
                }
                re & 1 && m.children !== p.children && g(se, p.children)
            } else !ce && A == null && fe(se, p, he, pe, O, x, B);
            ((Ne = pe.onVnodeUpdated) || V) && Sr(() => {
                Ne && mn(Ne, O, p, m), V && Di(p, m, O, "updated")
            }, x)
        }, Ce = (m, p, O, x, B, z, ce) => {
            for (let se = 0; se < p.length; se++) {
                const re = m[se],
                    A = p[se],
                    V = re.el && (re.type === ze || !Vi(re, A) || re.shapeFlag & 70) ? _(re.el) : O;
                U(re, A, V, null, x, B, z, ce, !0)
            }
        }, fe = (m, p, O, x, B, z, ce) => {
            if (O !== x) {
                for (const se in x) {
                    if (Pl(se)) continue;
                    const re = x[se],
                        A = O[se];
                    re !== A && se !== "value" && o(m, se, A, re, ce, p.children, B, z, ot)
                }
                if (O !== gt)
                    for (const se in O) !Pl(se) && !(se in x) && o(m, se, O[se], null, ce, p.children, B, z, ot);
                "value" in x && o(m, "value", O.value, x.value)
            }
        }, $e = (m, p, O, x, B, z, ce, se, re) => {
            const A = p.el = m ? m.el : u(""),
                V = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ne
            } = p;
            Ne && (se = se ? se.concat(Ne) : Ne), m == null ? (n(A, O, x), n(V, O, x), ue(p.children, O, V, B, z, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ce(m.dynamicChildren, pe, O, B, z, ce, se), (p.key != null || B && p === B.subTree) && Bb(m, p, !0)) : Oe(m, p, O, V, B, z, ce, se, re)
        }, F = (m, p, O, x, B, z, ce, se, re) => {
            p.slotScopeIds = se, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, x, ce, re) : ie(p, O, x, B, z, ce, re) : de(m, p, re)
        }, ie = (m, p, O, x, B, z, ce) => {
            const se = m.component = qP(m, x, B);
            if (vc(m) && (se.ctx.renderer = kt), YP(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !m.el) {
                    const re = se.subTree = St(Qr);
                    q(null, re, p, O)
                }
                return
            }
            be(se, m, p, O, B, z, ce)
        }, de = (m, p, O) => {
            const x = p.component = m.component;
            if (aP(m, p, O))
                if (x.asyncDep && !x.asyncResolved) {
                    ve(x, p, O);
                    return
                } else x.next = p, eP(x.update), x.update();
            else p.el = m.el, x.vnode = p
        }, be = (m, p, O, x, B, z, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: V,
                            bu: he,
                            u: pe,
                            parent: Ne,
                            vnode: xe
                        } = m, w = V, T;
                        xi(m, !1), V ? (V.el = xe.el, ve(m, V, ce)) : V = xe, he && Ll(he), (T = V.props && V.props.onVnodeBeforeUpdate) && mn(T, Ne, V, xe), xi(m, !0);
                        const R = hf(m),
                            S = m.subTree;
                        m.subTree = R, U(S, R, _(S.el), Ot(S), m, B, z), V.el = R.el, w === null && oP(m, R.el), pe && Sr(pe, B), (T = V.props && V.props.onVnodeUpdated) && Sr(() => mn(T, Ne, V, xe), B)
                    } else {
                        let V;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ne,
                            m: xe,
                            parent: w
                        } = m, T = Ma(p);
                        if (xi(m, !1), Ne && Ll(Ne), !T && (V = pe && pe.onVnodeBeforeMount) && mn(V, w, p), xi(m, !0), he && Dt) {
                            const R = () => {
                                m.subTree = hf(m), Dt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && R()) : R()
                        } else {
                            const R = m.subTree = hf(m);
                            U(null, R, O, x, m, B, z), p.el = R.el
                        }
                        if (xe && Sr(xe, B), !T && (V = pe && pe.onVnodeMounted)) {
                            const R = p;
                            Sr(() => mn(V, w, R), B)
                        }(p.shapeFlag & 256 || w && Ma(w.vnode) && w.vnode.shapeFlag & 256) && m.a && Sr(m.a, B), m.isMounted = !0, p = O = x = null
                    }
                },
                re = m.effect = new gh(se, () => Th(A), m.scope),
                A = m.update = () => re.run();
            A.id = m.uid, xi(m, !0), A()
        }, ve = (m, p, O) => {
            p.component = m;
            const x = m.vnode.props;
            m.vnode = p, m.next = null, PP(m, p.props, x, O), DP(m, p.children, O), ta(), wv(), ra()
        }, Oe = (m, p, O, x, B, z, ce, se, re = !1) => {
            const A = m && m.children,
                V = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ne
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    je(A, he, O, x, B, z, ce, se, re);
                    return
                } else if (pe & 256) {
                    Fe(A, he, O, x, B, z, ce, se, re);
                    return
                }
            }
            Ne & 8 ? (V & 16 && ot(A, B, z), he !== A && g(O, he)) : V & 16 ? Ne & 16 ? je(A, he, O, x, B, z, ce, se, re) : ot(A, B, z, !0) : (V & 8 && g(O, ""), Ne & 16 && ue(he, O, x, B, z, ce, se, re))
        }, Fe = (m, p, O, x, B, z, ce, se, re) => {
            m = m || Ds, p = p || Ds;
            const A = m.length,
                V = p.length,
                he = Math.min(A, V);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ne = p[pe] = re ? ni(p[pe]) : bn(p[pe]);
                U(m[pe], Ne, O, null, B, z, ce, se, re)
            }
            A > V ? ot(m, B, z, !0, !1, he) : ue(p, O, x, B, z, ce, se, re, he)
        }, je = (m, p, O, x, B, z, ce, se, re) => {
            let A = 0;
            const V = p.length;
            let he = m.length - 1,
                pe = V - 1;
            for (; A <= he && A <= pe;) {
                const Ne = m[A],
                    xe = p[A] = re ? ni(p[A]) : bn(p[A]);
                if (Vi(Ne, xe)) U(Ne, xe, O, null, B, z, ce, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Ne = m[he],
                    xe = p[pe] = re ? ni(p[pe]) : bn(p[pe]);
                if (Vi(Ne, xe)) U(Ne, xe, O, null, B, z, ce, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Ne = pe + 1,
                        xe = Ne < V ? p[Ne].el : x;
                    for (; A <= pe;) U(null, p[A] = re ? ni(p[A]) : bn(p[A]), O, xe, B, z, ce, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) It(m[A], B, z, !0), A++;
            else {
                const Ne = A,
                    xe = A,
                    w = new Map;
                for (A = xe; A <= pe; A++) {
                    const Se = p[A] = re ? ni(p[A]) : bn(p[A]);
                    Se.key != null && w.set(Se.key, A)
                }
                let T, R = 0;
                const S = pe - xe + 1;
                let L = !1,
                    Z = 0;
                const ne = new Array(S);
                for (A = 0; A < S; A++) ne[A] = 0;
                for (A = Ne; A <= he; A++) {
                    const Se = m[A];
                    if (R >= S) {
                        It(Se, B, z, !0);
                        continue
                    }
                    let ft;
                    if (Se.key != null) ft = w.get(Se.key);
                    else
                        for (T = xe; T <= pe; T++)
                            if (ne[T - xe] === 0 && Vi(Se, p[T])) {
                                ft = T;
                                break
                            } ft === void 0 ? It(Se, B, z, !0) : (ne[ft - xe] = A + 1, ft >= Z ? Z = ft : L = !0, U(Se, p[ft], O, null, B, z, ce, se, re), R++)
                }
                const _e = L ? UP(ne) : Ds;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Se = xe + A,
                        ft = p[Se],
                        ir = Se + 1 < V ? p[Se + 1].el : x;
                    ne[A] === 0 ? U(null, ft, O, ir, B, z, ce, se, re) : L && (T < 0 || A !== _e[T] ? rt(ft, O, ir, 2) : T--)
                }
            }
        }, rt = (m, p, O, x, B = null) => {
            const {
                el: z,
                type: ce,
                transition: se,
                children: re,
                shapeFlag: A
            } = m;
            if (A & 6) {
                rt(m.component.subTree, p, O, x);
                return
            }
            if (A & 128) {
                m.suspense.move(p, O, x);
                return
            }
            if (A & 64) {
                ce.move(m, p, O, kt);
                return
            }
            if (ce === ze) {
                n(z, p, O);
                for (let he = 0; he < re.length; he++) rt(re[he], p, O, x);
                n(m.anchor, p, O);
                return
            }
            if (ce === gf) {
                W(m, p, O);
                return
            }
            if (x !== 2 && A & 1 && se)
                if (x === 0) se.beforeEnter(z), n(z, p, O), Sr(() => se.enter(z), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ne
                    } = se, xe = () => n(z, p, O), w = () => {
                        he(z, () => {
                            xe(), Ne && Ne()
                        })
                    };
                    pe ? pe(z, xe, w) : w()
                }
            else n(z, p, O)
        }, It = (m, p, O, x = !1, B = !1) => {
            const {
                type: z,
                props: ce,
                ref: se,
                children: re,
                dynamicChildren: A,
                shapeFlag: V,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && vd(se, null, O, m, !0), V & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ne = V & 1 && pe,
                xe = !Ma(m);
            let w;
            if (xe && (w = ce && ce.onVnodeBeforeUnmount) && mn(w, p, m), V & 6) vr(m.component, O, x);
            else {
                if (V & 128) {
                    m.suspense.unmount(O, x);
                    return
                }
                Ne && Di(m, null, p, "beforeUnmount"), V & 64 ? m.type.remove(m, p, O, B, kt, x) : A && (z !== ze || he > 0 && he & 64) ? ot(A, p, O, !1, !0) : (z === ze && he & 384 || !B && V & 16) && ot(re, p, O), x && Cr(m)
            }(xe && (w = ce && ce.onVnodeUnmounted) || Ne) && Sr(() => {
                w && mn(w, p, m), Ne && Di(m, null, p, "unmounted")
            }, O)
        }, Cr = m => {
            const {
                type: p,
                el: O,
                anchor: x,
                transition: B
            } = m;
            if (p === ze) {
                nr(O, x);
                return
            }
            if (p === gf) {
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
            for (; m !== p;) O = b(m), s(m), m = O;
            s(p)
        }, vr = (m, p, O) => {
            const {
                bum: x,
                scope: B,
                update: z,
                subTree: ce,
                um: se
            } = m;
            x && Ll(x), B.stop(), z && (z.active = !1, It(ce, m, p, O)), se && Sr(se, p), Sr(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, ot = (m, p, O, x = !1, B = !1, z = 0) => {
            for (let ce = z; ce < m.length; ce++) It(m[ce], p, O, x, B)
        }, Ot = m => m.shapeFlag & 6 ? Ot(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), lt = (m, p, O) => {
            m == null ? p._vnode && It(p._vnode, null, null, !0) : U(p._vnode || null, m, p, null, null, null, O), wv(), _b(), p._vnode = m
        }, kt = {
            p: U,
            um: It,
            m: rt,
            r: Cr,
            mt: ie,
            mc: ue,
            pc: Oe,
            pbc: Ce,
            n: Ot,
            o: e
        };
        let Ht, Dt;
        return t && ([Ht, Dt] = t(kt)), {
            render: lt,
            hydrate: Ht,
            createApp: MP(lt, Ht)
        }
    }

    function xi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function Bb(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let o = 0; o < n.length; o++) {
                const l = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ni(s[o]), u.el = l.el), r || Bb(l, u))
            }
    }

    function UP(e) {
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
    const GP = e => e.__isTeleport,
        ze = Symbol(void 0),
        _c = Symbol(void 0),
        Qr = Symbol(void 0),
        gf = Symbol(void 0),
        Fa = [];
    let ln = null;

    function G(e = !1) {
        Fa.push(ln = e ? null : [])
    }

    function jP() {
        Fa.pop(), ln = Fa[Fa.length - 1] || null
    }
    let Ja = 1;

    function xv(e) {
        Ja += e
    }

    function Ub(e) {
        return e.dynamicChildren = Ja > 0 ? ln || Ds : null, jP(), Ja > 0 && ln && ln.push(e), e
    }

    function K(e, t, r, n, s, o) {
        return Ub(H(e, t, r, n, s, o, !0))
    }

    function wn(e, t, r, n, s) {
        return Ub(St(e, t, r, n, s, !0))
    }

    function Vl(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Vi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Ec = "__vInternal",
        Gb = ({
            key: e
        }) => e != null ? e : null,
        kl = ({
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
            key: t && Gb(t),
            ref: t && kl(t),
            scopeId: mc,
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
        return u ? (Rh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Wt(r) ? 8 : 16), Ja > 0 && !l && ln && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ln.push(f), f
    }
    const St = WP;

    function WP(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === Nb) && (e = Qr), Vl(e)) {
            const u = hi(e, t, !0);
            return r && Rh(u, r), Ja > 0 && !o && ln && (u.shapeFlag & 6 ? ln[ln.indexOf(e)] = u : ln.push(u)), u.patchFlag |= -2, u
        }
        if (ZP(e) && (e = e.__vccOpts), t) {
            t = HP(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Wt(u) && (t.class = De(u)), mt(f) && (ub(f) && !ke(f) && (f = rr({}, f)), t.style = ao(f))
        }
        const l = Wt(e) ? 1 : lP(e) ? 128 : GP(e) ? 64 : mt(e) ? 4 : He(e) ? 2 : 0;
        return H(e, t, r, n, s, l, o, !0)
    }

    function HP(e) {
        return e ? ub(e) || Ec in e ? rr({}, e) : e : null
    }

    function hi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: l
        } = e, u = t ? uo(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && Gb(u),
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
            ssContent: e.ssContent && hi(e.ssContent),
            ssFallback: e.ssFallback && hi(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function pi(e = " ", t = 0) {
        return St(_c, null, e, t)
    }

    function Ee(e = "", t = !1) {
        return t ? (G(), wn(Qr, null, e)) : St(Qr, null, e)
    }

    function bn(e) {
        return e == null || typeof e == "boolean" ? St(Qr) : ke(e) ? St(ze, null, e.slice()) : typeof e == "object" ? ni(e) : St(_c, null, String(e))
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
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Rh(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(Ec in t) ? t._ctx = lr : s === 3 && lr && (lr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else He(t) ? (t = {
            default: t,
            _ctx: lr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [pi(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function uo(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = De([t.class, n.class]));
                else if (s === "style") t.style = ao([t.style, n.style]);
            else if (cc(s)) {
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
    const KP = Fb();
    let VP = 0;

    function qP(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || KP,
            o = {
                uid: VP++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new QE(!0),
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
                propsOptions: kb(n, s),
                emitsOptions: bb(n, s),
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
        }, o.root = t ? t.root : o, o.emit = nP.bind(null, o), e.ce && e.ce(o), o
    }
    let qt = null;
    const as = () => qt || lr,
        Ys = e => {
            qt = e, e.scope.on()
        },
        ts = () => {
            qt && qt.scope.off(), qt = null
        };

    function jb(e) {
        return e.vnode.shapeFlag & 4
    }
    let Qa = !1;

    function YP(e, t = !1) {
        Qa = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = jb(e);
        RP(e, r, s, t), kP(e, n);
        const o = s ? zP(e, t) : void 0;
        return Qa = !1, o
    }

    function zP(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = fb(new Proxy(e.ctx, wP));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? JP(e) : null;
            Ys(e), ta();
            const o = ci(n, e, 0, [e.props, s]);
            if (ra(), ts(), zE(o)) {
                if (o.then(ts, ts), t) return o.then(l => {
                    Mv(e, l, t)
                }).catch(l => {
                    pc(l, e, 0)
                });
                e.asyncDep = o
            } else Mv(e, o, t)
        } else Wb(e, t)
    }

    function Mv(e, t, r) {
        He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) && (e.setupState = gb(t)), Wb(e, r)
    }
    let Fv;

    function Wb(e, t, r) {
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
        Ys(e), ta(), $P(e), ra(), ts()
    }

    function XP(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return xr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function JP(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = XP(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function bc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(gb(fb(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Hl) return Hl[r](e)
            }
        }))
    }

    function QP(e, t = !0) {
        return He(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function ZP(e) {
        return He(e) && "__vccOpts" in e
    }
    const Dr = (e, t) => XR(e, t, Qa);

    function Ph(e, t, r) {
        const n = arguments.length;
        return n === 2 ? mt(t) && !ke(t) ? Vl(t) ? St(e, null, [t]) : St(e, t) : St(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Vl(r) && (r = [r]), St(e, t, r))
    }
    const eL = "3.2.39",
        tL = "http://www.w3.org/2000/svg",
        qi = typeof document < "u" ? document : null,
        Bv = qi && qi.createElement("template"),
        rL = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? qi.createElementNS(tL, e) : qi.createElement(e, r ? {
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

    function nL(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function iL(e, t, r) {
        const n = e.style,
            s = Wt(r);
        if (r && !s) {
            for (const o in r) yd(n, o, r[o]);
            if (t && !Wt(t))
                for (const o in t) r[o] == null && yd(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const Uv = /\s*!important$/;

    function yd(e, t, r) {
        if (ke(r)) r.forEach(n => yd(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = sL(e, t);
            Uv.test(r) ? e.setProperty(os(n), r.replace(Uv, ""), "important") : e[n] = r
        }
    }
    const Gv = ["Webkit", "Moz", "ms"],
        mf = {};

    function sL(e, t) {
        const r = mf[t];
        if (r) return r;
        let n = On(t);
        if (n !== "filter" && n in e) return mf[t] = n;
        n = dc(n);
        for (let s = 0; s < Gv.length; s++) {
            const o = Gv[s] + n;
            if (o in e) return mf[t] = o
        }
        return t
    }
    const jv = "http://www.w3.org/1999/xlink";

    function aL(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(jv, t.slice(6, t.length)) : e.setAttributeNS(jv, t, r);
        else {
            const o = sR(t);
            r == null || o && !VE(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function oL(e, t, r, n, s, o, l) {
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
    const [Hb, lL] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let _d = 0;
    const cL = Promise.resolve(),
        uL = () => {
            _d = 0
        },
        fL = () => _d || (cL.then(uL), _d = Hb());

    function Yi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function dL(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function hL(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            l = o[t];
        if (n && l) l.value = n;
        else {
            const [u, f] = pL(t);
            if (n) {
                const h = o[t] = gL(n, s);
                Yi(e, u, h, f)
            } else l && (dL(e, u, l, f), o[t] = void 0)
        }
    }
    const Wv = /(?:Once|Passive|Capture)$/;

    function pL(e) {
        let t;
        if (Wv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Wv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : os(e.slice(2)), t]
    }

    function gL(e, t) {
        const r = n => {
            const s = n.timeStamp || Hb();
            (lL || s >= r.attached - 1) && Jr(mL(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = fL(), r
    }

    function mL(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Hv = /^on[a-z]/,
        vL = (e, t, r, n, s = !1, o, l, u, f) => {
            t === "class" ? nL(e, n, s) : t === "style" ? iL(e, r, n) : cc(t) ? fh(t) || hL(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yL(e, t, n, s)) ? oL(e, t, n, o, l, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), aL(e, t, n, s))
        };

    function yL(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Hv.test(t) && He(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hv.test(t) && Wt(r) ? !1 : t in e
    }
    const Zn = "transition",
        Ia = "animation",
        Tc = (e, {
            slots: t
        }) => Ph(Ob, _L(e), t);
    Tc.displayName = "Transition";
    const Kb = {
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
    Tc.props = rr({}, Ob.props, Kb);
    const Mi = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        Kv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function _L(e) {
        const t = {};
        for (const fe in e) fe in Kb || (t[fe] = e[fe]);
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
            leaveActiveClass: b = `${r}-leave-active`,
            leaveToClass: $ = `${r}-leave-to`
        } = e, P = EL(s), M = P && P[0], U = P && P[1], {
            onBeforeEnter: C,
            onEnter: q,
            onEnterCancelled: X,
            onLeave: W,
            onLeaveCancelled: j,
            onBeforeAppear: Q = C,
            onAppear: oe = q,
            onAppearCancelled: le = X
        } = t, ue = (fe, $e, F) => {
            Fi(fe, $e ? g : u), Fi(fe, $e ? h : l), F && F()
        }, Ae = (fe, $e) => {
            fe._isLeaving = !1, Fi(fe, _), Fi(fe, $), Fi(fe, b), $e && $e()
        }, Ce = fe => ($e, F) => {
            const ie = fe ? oe : q,
                de = () => ue($e, fe, F);
            Mi(ie, [$e, de]), Vv(() => {
                Fi($e, fe ? f : o), ei($e, fe ? g : u), Kv(ie) || qv($e, n, M, de)
            })
        };
        return rr(t, {
            onBeforeEnter(fe) {
                Mi(C, [fe]), ei(fe, o), ei(fe, l)
            },
            onBeforeAppear(fe) {
                Mi(Q, [fe]), ei(fe, f), ei(fe, h)
            },
            onEnter: Ce(!1),
            onAppear: Ce(!0),
            onLeave(fe, $e) {
                fe._isLeaving = !0;
                const F = () => Ae(fe, $e);
                ei(fe, _), SL(), ei(fe, b), Vv(() => {
                    !fe._isLeaving || (Fi(fe, _), ei(fe, $), Kv(W) || qv(fe, n, U, F))
                }), Mi(W, [fe, F])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Mi(X, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Mi(le, [fe])
            },
            onLeaveCancelled(fe) {
                Ae(fe), Mi(j, [fe])
            }
        })
    }

    function EL(e) {
        if (e == null) return null;
        if (mt(e)) return [vf(e.enter), vf(e.leave)]; {
            const t = vf(e);
            return [t, t]
        }
    }

    function vf(e) {
        return Gl(e)
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
    let bL = 0;

    function qv(e, t, r, n) {
        const s = e._endId = ++bL,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: l,
            timeout: u,
            propCount: f
        } = TL(e, t);
        if (!l) return n();
        const h = l + "end";
        let g = 0;
        const _ = () => {
                e.removeEventListener(h, b), o()
            },
            b = $ => {
                $.target === e && ++g >= f && _()
            };
        setTimeout(() => {
            g < f && _()
        }, u + 1), e.addEventListener(h, b)
    }

    function TL(e, t) {
        const r = window.getComputedStyle(e),
            n = P => (r[P] || "").split(", "),
            s = n(Zn + "Delay"),
            o = n(Zn + "Duration"),
            l = Yv(s, o),
            u = n(Ia + "Delay"),
            f = n(Ia + "Duration"),
            h = Yv(u, f);
        let g = null,
            _ = 0,
            b = 0;
        t === Zn ? l > 0 && (g = Zn, _ = l, b = o.length) : t === Ia ? h > 0 && (g = Ia, _ = h, b = f.length) : (_ = Math.max(l, h), g = _ > 0 ? l > h ? Zn : Ia : null, b = g ? g === Zn ? o.length : f.length : 0);
        const $ = g === Zn && /\b(transform|all)(,|$)/.test(r[Zn + "Property"]);
        return {
            type: g,
            timeout: _,
            propCount: b,
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

    function SL() {
        return document.body.offsetHeight
    }
    const ql = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Ll(t, r) : t
    };

    function OL(e) {
        e.target.composing = !0
    }

    function Xv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const Jv = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = ql(s);
                const o = n || s.props && s.props.type === "number";
                Yi(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Gl(u)), e._assign(u)
                }), r && Yi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Yi(e, "compositionstart", OL), Yi(e, "compositionend", Xv), Yi(e, "change", Xv))
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
                if (e._assign = ql(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Gl(e.value) === t)) return;
                const l = t == null ? "" : t;
                e.value !== l && (e.value = l)
            }
        },
        wL = {
            deep: !0,
            created(e, t, r) {
                e._assign = ql(r), Yi(e, "change", () => {
                    const n = e._modelValue,
                        s = $L(e),
                        o = e.checked,
                        l = e._assign;
                    if (ke(n)) {
                        const u = qE(n, s),
                            f = u !== -1;
                        if (o && !f) l(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), l(h)
                        }
                    } else if (uc(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), l(u)
                    } else l(Vb(e, o))
                })
            },
            mounted: Qv,
            beforeUpdate(e, t, r) {
                e._assign = ql(r), Qv(e, t, r)
            }
        };

    function Qv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = qE(t, n.props.value) > -1 : uc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = lc(t, Vb(e, !0)))
    }

    function $L(e) {
        return "_value" in e ? e._value : e.value
    }

    function Vb(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const CL = ["ctrl", "shift", "alt", "meta"],
        IL = {
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
            exact: (e, t) => CL.some(r => e[`${r}Key`] && !t.includes(r))
        },
        zt = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = IL[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        AL = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        fo = (e, t) => r => {
            if (!("key" in r)) return;
            const n = os(r.key);
            if (t.some(s => s === n || AL[s] === n)) return e(r)
        },
        qb = {
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
    const NL = rr({
        patchProp: vL
    }, rL);
    let Zv;

    function RL() {
        return Zv || (Zv = FP(NL))
    }
    const PL = (...e) => {
        const t = RL().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = LL(n);
            if (!s) return;
            const o = t._component;
            !He(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function LL(e) {
        return Wt(e) ? document.querySelector(e) : e
    }
    const kL = tt({
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
        at = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        DL = {
            class: "choices"
        },
        xL = {
            class: "constrain"
        },
        ML = {
            key: 0
        },
        FL = ["disabled", "onClick"];

    function BL(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", DL, [H("div", xL, [e.player.prompt ? Ie((G(), K("p", ML, null, 512)), [
            [l, e.player.prompt]
        ]) : Ee("", !0), (G(!0), K(ze, null, wr(e.player.choices, (u, f) => (G(), K("button", {
            key: f,
            class: De({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: zt(h => e.onChoiceClick(f), ["prevent"])
        }, et(u.text), 11, FL))), 128))])])
    }
    const UL = at(kL, [
        ["render", BL]
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

    function GL(e) {
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

    function jL() {
        this.__data__ = [], this.size = 0
    }
    var WL = jL;

    function HL(e, t) {
        return e === t || e !== e && t !== t
    }
    var Sc = HL,
        KL = Sc;

    function VL(e, t) {
        for (var r = e.length; r--;)
            if (KL(e[r][0], t)) return r;
        return -1
    }
    var Oc = VL,
        qL = Oc,
        YL = Array.prototype,
        zL = YL.splice;

    function XL(e) {
        var t = this.__data__,
            r = qL(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : zL.call(t, r, 1), --this.size, !0
    }
    var JL = XL,
        QL = Oc;

    function ZL(e) {
        var t = this.__data__,
            r = QL(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var ek = ZL,
        tk = Oc;

    function rk(e) {
        return tk(this.__data__, e) > -1
    }
    var nk = rk,
        ik = Oc;

    function sk(e, t) {
        var r = this.__data__,
            n = ik(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var ak = sk,
        ok = WL,
        lk = JL,
        ck = ek,
        uk = nk,
        fk = ak;

    function na(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    na.prototype.clear = ok;
    na.prototype.delete = lk;
    na.prototype.get = ck;
    na.prototype.has = uk;
    na.prototype.set = fk;
    var wc = na,
        dk = wc;

    function hk() {
        this.__data__ = new dk, this.size = 0
    }
    var pk = hk;

    function gk(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var mk = gk;

    function vk(e) {
        return this.__data__.get(e)
    }
    var yk = vk;

    function _k(e) {
        return this.__data__.has(e)
    }
    var Ek = _k,
        bk = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
        Yb = bk,
        Tk = Yb,
        Sk = typeof self == "object" && self && self.Object === Object && self,
        Ok = Tk || Sk || Function("return this")(),
        fn = Ok,
        wk = fn,
        $k = wk.Symbol,
        $c = $k,
        ey = $c,
        zb = Object.prototype,
        Ck = zb.hasOwnProperty,
        Ik = zb.toString,
        Na = ey ? ey.toStringTag : void 0;

    function Ak(e) {
        var t = Ck.call(e, Na),
            r = e[Na];
        try {
            e[Na] = void 0;
            var n = !0
        } catch {}
        var s = Ik.call(e);
        return n && (t ? e[Na] = r : delete e[Na]), s
    }
    var Nk = Ak,
        Rk = Object.prototype,
        Pk = Rk.toString;

    function Lk(e) {
        return Pk.call(e)
    }
    var kk = Lk,
        ty = $c,
        Dk = Nk,
        xk = kk,
        Mk = "[object Null]",
        Fk = "[object Undefined]",
        ry = ty ? ty.toStringTag : void 0;

    function Bk(e) {
        return e == null ? e === void 0 ? Fk : Mk : ry && ry in Object(e) ? Dk(e) : xk(e)
    }
    var ia = Bk;

    function Uk(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var dn = Uk,
        Gk = ia,
        jk = dn,
        Wk = "[object AsyncFunction]",
        Hk = "[object Function]",
        Kk = "[object GeneratorFunction]",
        Vk = "[object Proxy]";

    function qk(e) {
        if (!jk(e)) return !1;
        var t = Gk(e);
        return t == Hk || t == Kk || t == Wk || t == Vk
    }
    var Lh = qk,
        Yk = fn,
        zk = Yk["__core-js_shared__"],
        Xk = zk,
        yf = Xk,
        ny = function() {
            var e = /[^.]+$/.exec(yf && yf.keys && yf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function Jk(e) {
        return !!ny && ny in e
    }
    var Qk = Jk,
        Zk = Function.prototype,
        eD = Zk.toString;

    function tD(e) {
        if (e != null) {
            try {
                return eD.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var Xb = tD,
        rD = Lh,
        nD = Qk,
        iD = dn,
        sD = Xb,
        aD = /[\\^$.*+?()[\]{}|]/g,
        oD = /^\[object .+?Constructor\]$/,
        lD = Function.prototype,
        cD = Object.prototype,
        uD = lD.toString,
        fD = cD.hasOwnProperty,
        dD = RegExp("^" + uD.call(fD).replace(aD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function hD(e) {
        if (!iD(e) || nD(e)) return !1;
        var t = rD(e) ? dD : oD;
        return t.test(sD(e))
    }
    var pD = hD;

    function gD(e, t) {
        return e == null ? void 0 : e[t]
    }
    var mD = gD,
        vD = pD,
        yD = mD;

    function _D(e, t) {
        var r = yD(e, t);
        return vD(r) ? r : void 0
    }
    var ls = _D,
        ED = ls,
        bD = fn,
        TD = ED(bD, "Map"),
        kh = TD,
        SD = ls,
        OD = SD(Object, "create"),
        Cc = OD,
        iy = Cc;

    function wD() {
        this.__data__ = iy ? iy(null) : {}, this.size = 0
    }
    var $D = wD;

    function CD(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var ID = CD,
        AD = Cc,
        ND = "__lodash_hash_undefined__",
        RD = Object.prototype,
        PD = RD.hasOwnProperty;

    function LD(e) {
        var t = this.__data__;
        if (AD) {
            var r = t[e];
            return r === ND ? void 0 : r
        }
        return PD.call(t, e) ? t[e] : void 0
    }
    var kD = LD,
        DD = Cc,
        xD = Object.prototype,
        MD = xD.hasOwnProperty;

    function FD(e) {
        var t = this.__data__;
        return DD ? t[e] !== void 0 : MD.call(t, e)
    }
    var BD = FD,
        UD = Cc,
        GD = "__lodash_hash_undefined__";

    function jD(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = UD && t === void 0 ? GD : t, this
    }
    var WD = jD,
        HD = $D,
        KD = ID,
        VD = kD,
        qD = BD,
        YD = WD;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = HD;
    sa.prototype.delete = KD;
    sa.prototype.get = VD;
    sa.prototype.has = qD;
    sa.prototype.set = YD;
    var zD = sa,
        sy = zD,
        XD = wc,
        JD = kh;

    function QD() {
        this.size = 0, this.__data__ = {
            hash: new sy,
            map: new(JD || XD),
            string: new sy
        }
    }
    var ZD = QD;

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
    var Ic = nx,
        ix = Ic;

    function sx(e) {
        var t = ix(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var ax = sx,
        ox = Ic;

    function lx(e) {
        return ox(this, e).get(e)
    }
    var cx = lx,
        ux = Ic;

    function fx(e) {
        return ux(this, e).has(e)
    }
    var dx = fx,
        hx = Ic;

    function px(e, t) {
        var r = hx(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var gx = px,
        mx = ZD,
        vx = ax,
        yx = cx,
        _x = dx,
        Ex = gx;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = mx;
    aa.prototype.delete = vx;
    aa.prototype.get = yx;
    aa.prototype.has = _x;
    aa.prototype.set = Ex;
    var Jb = aa,
        bx = wc,
        Tx = kh,
        Sx = Jb,
        Ox = 200;

    function wx(e, t) {
        var r = this.__data__;
        if (r instanceof bx) {
            var n = r.__data__;
            if (!Tx || n.length < Ox - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Sx(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var $x = wx,
        Cx = wc,
        Ix = pk,
        Ax = mk,
        Nx = yk,
        Rx = Ek,
        Px = $x;

    function oa(e) {
        var t = this.__data__ = new Cx(e);
        this.size = t.size
    }
    oa.prototype.clear = Ix;
    oa.prototype.delete = Ax;
    oa.prototype.get = Nx;
    oa.prototype.has = Rx;
    oa.prototype.set = Px;
    var Qb = oa,
        Lx = ls,
        kx = function() {
            try {
                var e = Lx(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        Zb = kx,
        ay = Zb;

    function Dx(e, t, r) {
        t == "__proto__" && ay ? ay(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Dh = Dx,
        xx = Dh,
        Mx = Sc;

    function Fx(e, t, r) {
        (r !== void 0 && !Mx(e[t], r) || r === void 0 && !(t in e)) && xx(e, t, r)
    }
    var eT = Fx;

    function Bx(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), l = n(t), u = l.length; u--;) {
                var f = l[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var Ux = Bx,
        Gx = Ux,
        jx = Gx(),
        Wx = jx,
        zl = {
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
                b = u ? u(_) : new h.constructor(_);
            return h.copy(b), b
        }
        e.exports = f
    })(zl, zl.exports);
    var Hx = fn,
        Kx = Hx.Uint8Array,
        Vx = Kx,
        oy = Vx;

    function qx(e) {
        var t = new e.constructor(e.byteLength);
        return new oy(t).set(new oy(e)), t
    }
    var xh = qx,
        Yx = xh;

    function zx(e, t) {
        var r = t ? Yx(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var tT = zx;

    function Xx(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var rT = Xx,
        Jx = dn,
        ly = Object.create,
        Qx = function() {
            function e() {}
            return function(t) {
                if (!Jx(t)) return {};
                if (ly) return ly(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        Zx = Qx;

    function eM(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var nT = eM,
        tM = nT,
        rM = tM(Object.getPrototypeOf, Object),
        Mh = rM,
        nM = Object.prototype;

    function iM(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || nM;
        return e === r
    }
    var Fh = iM,
        sM = Zx,
        aM = Mh,
        oM = Fh;

    function lM(e) {
        return typeof e.constructor == "function" && !oM(e) ? sM(aM(e)) : {}
    }
    var iT = lM;

    function cM(e) {
        return e != null && typeof e == "object"
    }
    var vi = cM,
        uM = ia,
        fM = vi,
        dM = "[object Arguments]";

    function hM(e) {
        return fM(e) && uM(e) == dM
    }
    var pM = hM,
        cy = pM,
        gM = vi,
        sT = Object.prototype,
        mM = sT.hasOwnProperty,
        vM = sT.propertyIsEnumerable,
        yM = cy(function() {
            return arguments
        }()) ? cy : function(e) {
            return gM(e) && mM.call(e, "callee") && !vM.call(e, "callee")
        },
        aT = yM,
        _M = Array.isArray,
        yi = _M,
        EM = 9007199254740991;

    function bM(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= EM
    }
    var oT = bM,
        TM = Lh,
        SM = oT;

    function OM(e) {
        return e != null && SM(e.length) && !TM(e)
    }
    var Ac = OM,
        wM = Ac,
        $M = vi;

    function CM(e) {
        return $M(e) && wM(e)
    }
    var IM = CM,
        Za = {
            exports: {}
        };

    function AM() {
        return !1
    }
    var NM = AM;
    (function(e, t) {
        var r = fn,
            n = NM,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            l = o && o.exports === s,
            u = l ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(Za, Za.exports);
    var RM = ia,
        PM = Mh,
        LM = vi,
        kM = "[object Object]",
        DM = Function.prototype,
        xM = Object.prototype,
        lT = DM.toString,
        MM = xM.hasOwnProperty,
        FM = lT.call(Object);

    function BM(e) {
        if (!LM(e) || RM(e) != kM) return !1;
        var t = PM(e);
        if (t === null) return !0;
        var r = MM.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && lT.call(r) == FM
    }
    var UM = BM,
        GM = ia,
        jM = oT,
        WM = vi,
        HM = "[object Arguments]",
        KM = "[object Array]",
        VM = "[object Boolean]",
        qM = "[object Date]",
        YM = "[object Error]",
        zM = "[object Function]",
        XM = "[object Map]",
        JM = "[object Number]",
        QM = "[object Object]",
        ZM = "[object RegExp]",
        e2 = "[object Set]",
        t2 = "[object String]",
        r2 = "[object WeakMap]",
        n2 = "[object ArrayBuffer]",
        i2 = "[object DataView]",
        s2 = "[object Float32Array]",
        a2 = "[object Float64Array]",
        o2 = "[object Int8Array]",
        l2 = "[object Int16Array]",
        c2 = "[object Int32Array]",
        u2 = "[object Uint8Array]",
        f2 = "[object Uint8ClampedArray]",
        d2 = "[object Uint16Array]",
        h2 = "[object Uint32Array]",
        Tt = {};
    Tt[s2] = Tt[a2] = Tt[o2] = Tt[l2] = Tt[c2] = Tt[u2] = Tt[f2] = Tt[d2] = Tt[h2] = !0;
    Tt[HM] = Tt[KM] = Tt[n2] = Tt[VM] = Tt[i2] = Tt[qM] = Tt[YM] = Tt[zM] = Tt[XM] = Tt[JM] = Tt[QM] = Tt[ZM] = Tt[e2] = Tt[t2] = Tt[r2] = !1;

    function p2(e) {
        return WM(e) && jM(e.length) && !!Tt[GM(e)]
    }
    var g2 = p2;

    function m2(e) {
        return function(t) {
            return e(t)
        }
    }
    var Bh = m2,
        eo = {
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
    })(eo, eo.exports);
    var v2 = g2,
        y2 = Bh,
        uy = eo.exports,
        fy = uy && uy.isTypedArray,
        _2 = fy ? y2(fy) : v2,
        cT = _2;

    function E2(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var uT = E2,
        b2 = Dh,
        T2 = Sc,
        S2 = Object.prototype,
        O2 = S2.hasOwnProperty;

    function w2(e, t, r) {
        var n = e[t];
        (!(O2.call(e, t) && T2(n, r)) || r === void 0 && !(t in e)) && b2(e, t, r)
    }
    var Uh = w2,
        $2 = Uh,
        C2 = Dh;

    function I2(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? C2(r, u, f) : $2(r, u, f)
        }
        return r
    }
    var ho = I2;

    function A2(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var N2 = A2,
        R2 = 9007199254740991,
        P2 = /^(?:0|[1-9]\d*)$/;

    function L2(e, t) {
        var r = typeof e;
        return t = t == null ? R2 : t, !!t && (r == "number" || r != "symbol" && P2.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Gh = L2,
        k2 = N2,
        D2 = aT,
        x2 = yi,
        M2 = Za.exports,
        F2 = Gh,
        B2 = cT,
        U2 = Object.prototype,
        G2 = U2.hasOwnProperty;

    function j2(e, t) {
        var r = x2(e),
            n = !r && D2(e),
            s = !r && !n && M2(e),
            o = !r && !n && !s && B2(e),
            l = r || n || s || o,
            u = l ? k2(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || G2.call(e, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || F2(h, f))) && u.push(h);
        return u
    }
    var fT = j2;

    function W2(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var H2 = W2,
        K2 = dn,
        V2 = Fh,
        q2 = H2,
        Y2 = Object.prototype,
        z2 = Y2.hasOwnProperty;

    function X2(e) {
        if (!K2(e)) return q2(e);
        var t = V2(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !z2.call(e, n)) || r.push(n);
        return r
    }
    var J2 = X2,
        Q2 = fT,
        Z2 = J2,
        eF = Ac;

    function tF(e) {
        return eF(e) ? Q2(e, !0) : Z2(e)
    }
    var po = tF,
        rF = ho,
        nF = po;

    function iF(e) {
        return rF(e, nF(e))
    }
    var sF = iF,
        dy = eT,
        aF = zl.exports,
        oF = tT,
        lF = rT,
        cF = iT,
        hy = aT,
        py = yi,
        uF = IM,
        fF = Za.exports,
        dF = Lh,
        hF = dn,
        pF = UM,
        gF = cT,
        gy = uT,
        mF = sF;

    function vF(e, t, r, n, s, o, l) {
        var u = gy(e, r),
            f = gy(t, r),
            h = l.get(f);
        if (h) {
            dy(e, r, h);
            return
        }
        var g = o ? o(u, f, r + "", e, t, l) : void 0,
            _ = g === void 0;
        if (_) {
            var b = py(f),
                $ = !b && fF(f),
                P = !b && !$ && gF(f);
            g = f, b || $ || P ? py(u) ? g = u : uF(u) ? g = lF(u) : $ ? (_ = !1, g = aF(f, !0)) : P ? (_ = !1, g = oF(f, !0)) : g = [] : pF(f) || hy(f) ? (g = u, hy(u) ? g = mF(u) : (!hF(u) || dF(u)) && (g = cF(f))) : _ = !1
        }
        _ && (l.set(f, g), s(g, f, n, o, l), l.delete(f)), dy(e, r, g)
    }
    var yF = vF,
        _F = Qb,
        EF = eT,
        bF = Wx,
        TF = yF,
        SF = dn,
        OF = po,
        wF = uT;

    function dT(e, t, r, n, s) {
        e !== t && bF(t, function(o, l) {
            if (s || (s = new _F), SF(o)) TF(e, t, l, r, dT, n, s);
            else {
                var u = n ? n(wF(e, l), o, l + "", e, t, s) : void 0;
                u === void 0 && (u = o), EF(e, l, u)
            }
        }, OF)
    }
    var $F = dT;

    function CF(e) {
        return e
    }
    var hT = CF;

    function IF(e, t, r) {
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
    var AF = IF,
        NF = AF,
        my = Math.max;

    function RF(e, t, r) {
        return t = my(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = my(n.length - t, 0), l = Array(o); ++s < o;) l[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(l), NF(e, this, u)
            }
    }
    var PF = RF;

    function LF(e) {
        return function() {
            return e
        }
    }
    var kF = LF,
        DF = kF,
        vy = Zb,
        xF = hT,
        MF = vy ? function(e, t) {
            return vy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: DF(t),
                writable: !0
            })
        } : xF,
        FF = MF,
        BF = 800,
        UF = 16,
        GF = Date.now;

    function jF(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = GF(),
                s = UF - (n - r);
            if (r = n, s > 0) {
                if (++t >= BF) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var WF = jF,
        HF = FF,
        KF = WF,
        VF = KF(HF),
        qF = VF,
        YF = hT,
        zF = PF,
        XF = qF;

    function JF(e, t) {
        return XF(zF(e, t, YF), e + "")
    }
    var QF = JF,
        ZF = Sc,
        eB = Ac,
        tB = Gh,
        rB = dn;

    function nB(e, t, r) {
        if (!rB(r)) return !1;
        var n = typeof t;
        return (n == "number" ? eB(r) && tB(t, r.length) : n == "string" && t in r) ? ZF(r[t], e) : !1
    }
    var iB = nB,
        sB = QF,
        aB = iB;

    function oB(e) {
        return sB(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, l && aB(r[0], r[1], l) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var lB = oB,
        cB = $F,
        uB = lB,
        fB = uB(function(e, t, r) {
            cB(e, t, r)
        }),
        dB = fB;
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
            return dB(t[0], ...t)
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
    let Yt = Up;
    ge(Yt, "queryParams", new URLSearchParams(window.location.search)), ge(Yt, "getQueryParam", t => Up.queryParams.get(t)), ge(Yt, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class Xr {
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
    ge(Xr, "defaultNamespace", "tv");
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
            if (!Xr.isSupported) return;
            const n = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${n}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                l = Xr.get("galleries") || "[]";
            try {
                const u = JSON.parse(l) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), Xr.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!Xr.isSupported) return;
            const r = Xr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(t, 1), Xr.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            to.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!Xr.isSupported) return;
            const r = Xr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[t].viewed = !0), Xr.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var r;
            return ((r = t == null ? void 0 : t.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!Xr.isSupported) return [];
            const t = new Intl.DateTimeFormat(Bs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = Xr.get("galleries") || "[]",
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
    var Ed = {
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

                function b(F) {
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
                    F = _(F), ie = b(ie);
                    var de = this.map[F];
                    this.map[F] = de ? de + ", " + ie : ie
                }, P.prototype.delete = function(F) {
                    delete this.map[_(F)]
                }, P.prototype.get = function(F) {
                    return F = _(F), this.has(F) ? this.map[F] : null
                }, P.prototype.has = function(F) {
                    return this.map.hasOwnProperty(_(F))
                }, P.prototype.set = function(F, ie) {
                    this.map[_(F)] = b(ie)
                }, P.prototype.forEach = function(F, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && F.call(ie, this.map[de], de, this)
                }, P.prototype.keys = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push(de)
                    }), $(F)
                }, P.prototype.values = function() {
                    var F = [];
                    return this.forEach(function(ie) {
                        F.push(ie)
                    }), $(F)
                }, P.prototype.entries = function() {
                    var F = [];
                    return this.forEach(function(ie, de) {
                        F.push([de, ie])
                    }), $(F)
                }, u.iterable && (P.prototype[Symbol.iterator] = P.prototype.entries);

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

                function q(F) {
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
                        if (this._bodyBlob) return q(this._bodyBlob);
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

                function Ce(F, ie) {
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new P(ie.headers), this.url = ie.url || "", this._initBody(F)
                }
                j.call(Ce.prototype), Ce.prototype.clone = function() {
                    return new Ce(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new P(this.headers),
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
                            var je = {
                                status: Oe.status,
                                statusText: Oe.statusText,
                                headers: Ae(Oe.getAllResponseHeaders() || "")
                            };
                            je.url = "responseURL" in Oe ? Oe.responseURL : je.headers.get("X-Request-URL");
                            var rt = "response" in Oe ? Oe.response : Oe.responseText;
                            de(new Ce(rt, je))
                        }, Oe.onerror = function() {
                            be(new TypeError("Network request failed"))
                        }, Oe.ontimeout = function() {
                            be(new TypeError("Network request failed"))
                        }, Oe.onabort = function() {
                            be(new l.DOMException("Aborted", "AbortError"))
                        }, Oe.open(ve.method, ve.url, !0), ve.credentials === "include" ? Oe.withCredentials = !0 : ve.credentials === "omit" && (Oe.withCredentials = !1), "responseType" in Oe && u.blob && (Oe.responseType = "blob"), ve.headers.forEach(function(je, rt) {
                            Oe.setRequestHeader(rt, je)
                        }), ve.signal && (ve.signal.addEventListener("abort", Fe), Oe.onreadystatechange = function() {
                            Oe.readyState === 4 && ve.signal.removeEventListener("abort", Fe)
                        }), Oe.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                    })
                }
                return $e.polyfill = !0, o.fetch || (o.fetch = $e, o.Headers = P, o.Request = le, o.Response = Ce), l.Headers = P, l.Request = le, l.Response = Ce, l.fetch = $e, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(Ed, Ed.exports);
    var hB = function() {
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
        yy = typeof Symbol < "u" && Symbol,
        pB = hB,
        gB = function() {
            return typeof yy != "function" || typeof Symbol != "function" || typeof yy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : pB()
        },
        mB = "Function.prototype.bind called on incompatible ",
        _f = Array.prototype.slice,
        vB = Object.prototype.toString,
        yB = "[object Function]",
        _B = function(t) {
            var r = this;
            if (typeof r != "function" || vB.call(r) !== yB) throw new TypeError(mB + r);
            for (var n = _f.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var g = r.apply(this, n.concat(_f.call(arguments)));
                        return Object(g) === g ? g : this
                    } else return r.apply(t, n.concat(_f.call(arguments)))
                }, l = Math.max(0, r.length - n.length), u = [], f = 0; f < l; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        EB = _B,
        jh = Function.prototype.bind || EB,
        bB = jh,
        TB = bB.call(Function.call, Object.prototype.hasOwnProperty),
        Qe, zs = SyntaxError,
        pT = Function,
        Us = TypeError,
        Ef = function(e) {
            try {
                return pT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        rs = Object.getOwnPropertyDescriptor;
    if (rs) try {
        rs({}, "")
    } catch {
        rs = null
    }
    var bf = function() {
            throw new Us
        },
        SB = rs ? function() {
            try {
                return arguments.callee, bf
            } catch {
                try {
                    return rs(arguments, "callee").get
                } catch {
                    return bf
                }
            }
        }() : bf,
        ws = gB(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        As = {},
        OB = typeof Uint8Array > "u" ? Qe : ii(Uint8Array),
        Gs = {
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
            "%Function%": pT,
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
            "%ThrowTypeError%": SB,
            "%TypedArray%": OB,
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
        wB = function e(t) {
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
            return Gs[t] = r, r
        },
        _y = {
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
        go = jh,
        Xl = TB,
        $B = go.call(Function.call, Array.prototype.concat),
        CB = go.call(Function.apply, Array.prototype.splice),
        Ey = go.call(Function.call, String.prototype.replace),
        Jl = go.call(Function.call, String.prototype.slice),
        IB = go.call(Function.call, RegExp.prototype.exec),
        AB = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        NB = /\\(\\)?/g,
        RB = function(t) {
            var r = Jl(t, 0, 1),
                n = Jl(t, -1);
            if (r === "%" && n !== "%") throw new zs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new zs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return Ey(t, AB, function(o, l, u, f) {
                s[s.length] = u ? Ey(f, NB, "$1") : l || o
            }), s
        },
        PB = function(t, r) {
            var n = t,
                s;
            if (Xl(_y, n) && (s = _y[n], n = "%" + s[0] + "%"), Xl(Gs, n)) {
                var o = Gs[n];
                if (o === As && (o = wB(n)), typeof o > "u" && !r) throw new Us("intrinsic " + t + " exists, but is not available. Please file an issue!");
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
            if (IB(/^%?[^%]*%?$/g, t) === null) throw new zs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = RB(t),
                s = n.length > 0 ? n[0] : "",
                o = PB("%" + s + "%", r),
                l = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], CB(n, $B([0, 1], h)));
            for (var g = 1, _ = !0; g < n.length; g += 1) {
                var b = n[g],
                    $ = Jl(b, 0, 1),
                    P = Jl(b, -1);
                if (($ === '"' || $ === "'" || $ === "`" || P === '"' || P === "'" || P === "`") && $ !== P) throw new zs("property names with quotes must have matching quotes");
                if ((b === "constructor" || !_) && (f = !0), s += "." + b, l = "%" + s + "%", Xl(Gs, l)) u = Gs[l];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!r) throw new Us("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (rs && g + 1 >= n.length) {
                        var M = rs(u, b);
                        _ = !!M, _ && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[b]
                    } else _ = Xl(u, b), u = u[b];
                    _ && !f && (Gs[l] = u)
                }
            }
            return u
        },
        gT = {
            exports: {}
        };
    (function(e) {
        var t = jh,
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
            var b = o(t, s, arguments);
            if (l && u) {
                var $ = l(b, "length");
                $.configurable && u(b, "length", {
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
    })(gT);
    var mT = Wh,
        vT = gT.exports,
        LB = vT(mT("String.prototype.indexOf")),
        kB = function(t, r) {
            var n = mT(t, !!r);
            return typeof n == "function" && LB(t, ".prototype.") > -1 ? vT(n) : n
        };
    const DB = {},
        xB = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: DB
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        MB = GL(xB);
    var Hh = typeof Map == "function" && Map.prototype,
        Tf = Object.getOwnPropertyDescriptor && Hh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Ql = Hh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        FB = Hh && Map.prototype.forEach,
        Kh = typeof Set == "function" && Set.prototype,
        Sf = Object.getOwnPropertyDescriptor && Kh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Zl = Kh && Sf && typeof Sf.get == "function" ? Sf.get : null,
        BB = Kh && Set.prototype.forEach,
        UB = typeof WeakMap == "function" && WeakMap.prototype,
        Ba = UB ? WeakMap.prototype.has : null,
        GB = typeof WeakSet == "function" && WeakSet.prototype,
        Ua = GB ? WeakSet.prototype.has : null,
        jB = typeof WeakRef == "function" && WeakRef.prototype,
        by = jB ? WeakRef.prototype.deref : null,
        WB = Boolean.prototype.valueOf,
        HB = Object.prototype.toString,
        KB = Function.prototype.toString,
        VB = String.prototype.match,
        Vh = String.prototype.slice,
        oi = String.prototype.replace,
        qB = String.prototype.toUpperCase,
        Ty = String.prototype.toLowerCase,
        yT = RegExp.prototype.test,
        Sy = Array.prototype.concat,
        Tn = Array.prototype.join,
        YB = Array.prototype.slice,
        Oy = Math.floor,
        bd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Of = Object.getOwnPropertySymbols,
        Td = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Xs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        ur = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Xs ? "object" : "symbol") ? Symbol.toStringTag : null,
        _T = Object.prototype.propertyIsEnumerable,
        wy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function $y(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || yT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -Oy(-e) : Oy(e);
            if (n !== e) {
                var s = String(n),
                    o = Vh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var Sd = MB,
        Cy = Sd.custom,
        Iy = bT(Cy) ? Cy : null,
        zB = function e(t, r, n, s) {
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
            if (typeof t == "string") return ST(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? $y(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? $y(t, h) : h
            }
            var g = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return Od(t) ? "[Array]" : "[Object]";
            var _ = hU(o, n);
            if (typeof s > "u") s = [];
            else if (TT(s, t) >= 0) return "[Circular]";

            function b($e, F, ie) {
                if (F && (s = YB.call(s), s.push(F)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e($e, de, n + 1, s)
                }
                return e($e, o, n + 1, s)
            }
            if (typeof t == "function" && !Ay(t)) {
                var $ = iU(t),
                    P = yl(t, b);
                return "[Function" + ($ ? ": " + $ : " (anonymous)") + "]" + (P.length > 0 ? " { " + Tn.call(P, ", ") + " }" : "")
            }
            if (bT(t)) {
                var M = Xs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Td.call(t);
                return typeof t == "object" && !Xs ? Ra(M) : M
            }
            if (uU(t)) {
                for (var U = "<" + Ty.call(String(t.nodeName)), C = t.attributes || [], q = 0; q < C.length; q++) U += " " + C[q].name + "=" + ET(XB(C[q].value), "double", o);
                return U += ">", t.childNodes && t.childNodes.length && (U += "..."), U += "</" + Ty.call(String(t.nodeName)) + ">", U
            }
            if (Od(t)) {
                if (t.length === 0) return "[]";
                var X = yl(t, b);
                return _ && !dU(X) ? "[" + wd(X, _) + "]" : "[ " + Tn.call(X, ", ") + " ]"
            }
            if (QB(t)) {
                var W = yl(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !_T.call(t, "cause") ? "{ [" + String(t) + "] " + Tn.call(Sy.call("[cause]: " + b(t.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Tn.call(W, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Iy && typeof t[Iy] == "function" && Sd) return Sd(t, {
                    depth: g - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (sU(t)) {
                var j = [];
                return FB.call(t, function($e, F) {
                    j.push(b(F, t, !0) + " => " + b($e, t))
                }), Ny("Map", Ql.call(t), j, _)
            }
            if (lU(t)) {
                var Q = [];
                return BB.call(t, function($e) {
                    Q.push(b($e, t))
                }), Ny("Set", Zl.call(t), Q, _)
            }
            if (aU(t)) return wf("WeakMap");
            if (cU(t)) return wf("WeakSet");
            if (oU(t)) return wf("WeakRef");
            if (eU(t)) return Ra(b(Number(t)));
            if (rU(t)) return Ra(b(bd.call(t)));
            if (tU(t)) return Ra(WB.call(t));
            if (ZB(t)) return Ra(b(String(t)));
            if (!JB(t) && !Ay(t)) {
                var oe = yl(t, b),
                    le = wy ? wy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ae = !le && ur && Object(t) === t && ur in t ? Vh.call(_i(t), 8, -1) : ue ? "Object" : "",
                    Ce = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ce + (Ae || ue ? "[" + Tn.call(Sy.call([], Ae || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : _ ? fe + "{" + wd(oe, _) + "}" : fe + "{ " + Tn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function ET(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function XB(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Od(e) {
        return _i(e) === "[object Array]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function JB(e) {
        return _i(e) === "[object Date]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function Ay(e) {
        return _i(e) === "[object RegExp]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function QB(e) {
        return _i(e) === "[object Error]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function ZB(e) {
        return _i(e) === "[object String]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function eU(e) {
        return _i(e) === "[object Number]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function tU(e) {
        return _i(e) === "[object Boolean]" && (!ur || !(typeof e == "object" && ur in e))
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

    function rU(e) {
        if (!e || typeof e != "object" || !bd) return !1;
        try {
            return bd.call(e), !0
        } catch {}
        return !1
    }
    var nU = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return nU.call(e, t)
    }

    function _i(e) {
        return HB.call(e)
    }

    function iU(e) {
        if (e.name) return e.name;
        var t = VB.call(KB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function TT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function sU(e) {
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

    function aU(e) {
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

    function oU(e) {
        if (!by || !e || typeof e != "object") return !1;
        try {
            return by.call(e), !0
        } catch {}
        return !1
    }

    function lU(e) {
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

    function cU(e) {
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

    function uU(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function ST(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return ST(Vh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, fU);
        return ET(s, "single", t)
    }

    function fU(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + qB.call(t.toString(16))
    }

    function Ra(e) {
        return "Object(" + e + ")"
    }

    function wf(e) {
        return e + " { ? }"
    }

    function Ny(e, t, r, n) {
        var s = n ? wd(r, n) : Tn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function dU(e) {
        for (var t = 0; t < e.length; t++)
            if (TT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function hU(e, t) {
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

    function yl(e, t) {
        var r = Od(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = si(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Of == "function" ? Of(e) : [],
            l;
        if (Xs) {
            l = {};
            for (var u = 0; u < o.length; u++) l["$" + o[u]] = o[u]
        }
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || Xs && l["$" + f] instanceof Symbol || (yT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Of == "function")
            for (var h = 0; h < o.length; h++) _T.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var qh = Wh,
        la = kB,
        pU = zB,
        gU = qh("%TypeError%"),
        _l = qh("%WeakMap%", !0),
        El = qh("%Map%", !0),
        mU = la("WeakMap.prototype.get", !0),
        vU = la("WeakMap.prototype.set", !0),
        yU = la("WeakMap.prototype.has", !0),
        _U = la("Map.prototype.get", !0),
        EU = la("Map.prototype.set", !0),
        bU = la("Map.prototype.has", !0),
        Yh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        TU = function(e, t) {
            var r = Yh(e, t);
            return r && r.value
        },
        SU = function(e, t, r) {
            var n = Yh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        OU = function(e, t) {
            return !!Yh(e, t)
        },
        wU = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new gU("Side channel does not contain " + pU(o))
                },
                get: function(o) {
                    if (_l && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return mU(t, o)
                    } else if (El) {
                        if (r) return _U(r, o)
                    } else if (n) return TU(n, o)
                },
                has: function(o) {
                    if (_l && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return yU(t, o)
                    } else if (El) {
                        if (r) return bU(r, o)
                    } else if (n) return OU(n, o);
                    return !1
                },
                set: function(o, l) {
                    _l && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new _l), vU(t, o, l)) : El ? (r || (r = new El), EU(r, o, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), SU(n, o, l))
                }
            };
            return s
        },
        $U = String.prototype.replace,
        CU = /%20/g,
        $f = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        zh = {
            default: $f.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return $U.call(e, CU, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: $f.RFC1738,
            RFC3986: $f.RFC3986
        },
        IU = zh,
        Cf = Object.prototype.hasOwnProperty,
        zi = Array.isArray,
        vn = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        AU = function(t) {
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
        NU = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (zi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Cf.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return zi(t) && !zi(r) && (s = OT(t, n)), zi(t) && zi(r) ? (r.forEach(function(o, l) {
                if (Cf.call(t, l)) {
                    var u = t[l];
                    u && typeof u == "object" && o && typeof o == "object" ? t[l] = e(u, o, n) : t.push(o)
                } else t[l] = o
            }), t) : Object.keys(r).reduce(function(o, l) {
                var u = r[l];
                return Cf.call(o, l) ? o[l] = e(o[l], u, n) : o[l] = u, o
            }, s)
        },
        RU = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        PU = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        LU = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < l.length; ++f) {
                var h = l.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === IU.RFC1738 && (h === 40 || h === 41)) {
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
        kU = function(t) {
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
            return AU(r), t
        },
        DU = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        xU = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        MU = function(t, r) {
            return [].concat(t, r)
        },
        FU = function(t, r) {
            if (zi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        wT = {
            arrayToObject: OT,
            assign: RU,
            combine: MU,
            compact: kU,
            decode: PU,
            encode: LU,
            isBuffer: xU,
            isRegExp: DU,
            maybeMap: FU,
            merge: NU
        },
        $T = wU,
        $d = wT,
        Ga = zh,
        BU = Object.prototype.hasOwnProperty,
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
        Fn = Array.isArray,
        UU = String.prototype.split,
        GU = Array.prototype.push,
        CT = function(e, t) {
            GU.apply(e, Fn(t) ? t : [t])
        },
        jU = Date.prototype.toISOString,
        Py = Ga.default,
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
            formatter: Ga.formatters[Py],
            indices: !1,
            serializeDate: function(t) {
                return jU.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        WU = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        If = {},
        HU = function e(t, r, n, s, o, l, u, f, h, g, _, b, $, P, M, U) {
            for (var C = t, q = U, X = 0, W = !1;
                (q = q.get(If)) !== void 0 && !W;) {
                var j = q.get(t);
                if (X += 1, typeof j < "u") {
                    if (j === X) throw new RangeError("Cyclic object value");
                    W = !0
                }
                typeof q.get(If) > "u" && (X = 0)
            }
            if (typeof f == "function" ? C = f(r, C) : C instanceof Date ? C = _(C) : n === "comma" && Fn(C) && (C = $d.maybeMap(C, function(Oe) {
                    return Oe instanceof Date ? _(Oe) : Oe
                })), C === null) {
                if (o) return u && !P ? u(r, Zt.encoder, M, "key", b) : r;
                C = ""
            }
            if (WU(C) || $d.isBuffer(C)) {
                if (u) {
                    var Q = P ? r : u(r, Zt.encoder, M, "key", b);
                    if (n === "comma" && P) {
                        for (var oe = UU.call(String(C), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + $(u(oe[ue], Zt.encoder, M, "value", b));
                        return [$(Q) + (s && Fn(C) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [$(Q) + "=" + $(u(C, Zt.encoder, M, "value", b))]
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
                    var ve = $T();
                    ve.set(If, U), CT(Ae, e(de, be, n, s, o, l, u, f, h, g, _, b, $, P, M, ve))
                }
            }
            return Ae
        },
        KU = function(t) {
            if (!t) return Zt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Zt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Ga.default;
            if (typeof t.format < "u") {
                if (!BU.call(Ga.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Ga.formatters[n],
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
        VU = function(e, t) {
            var r = e,
                n = KU(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Fn(n.filter) && (o = n.filter, s = o);
            var l = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in Ry ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = Ry[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var g = $T(), _ = 0; _ < s.length; ++_) {
                var b = s[_];
                n.skipNulls && r[b] === null || CT(l, HU(r[b], b, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var $ = l.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), $.length > 0 ? P + $ : ""
        },
        Js = wT,
        Cd = Object.prototype.hasOwnProperty,
        qU = Array.isArray,
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
        YU = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        IT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        zU = "utf8=%26%2310003%3B",
        XU = "utf8=%E2%9C%93",
        JU = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === XU ? h = "utf-8" : l[f] === zU && (h = "iso-8859-1"), u = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== u) {
                    var g = l[f],
                        _ = g.indexOf("]="),
                        b = _ === -1 ? g.indexOf("=") : _ + 1,
                        $, P;
                    b === -1 ? ($ = r.decoder(g, Vt.decoder, h, "key"), P = r.strictNullHandling ? null : "") : ($ = r.decoder(g.slice(0, b), Vt.decoder, h, "key"), P = Js.maybeMap(IT(g.slice(b + 1), r), function(M) {
                        return r.decoder(M, Vt.decoder, h, "value")
                    })), P && r.interpretNumericEntities && h === "iso-8859-1" && (P = YU(P)), g.indexOf("[]=") > -1 && (P = qU(P) ? [P] : P), Cd.call(n, $) ? n[$] = Js.combine(n[$], P) : n[$] = P
                } return n
        },
        QU = function(e, t, r, n) {
            for (var s = n ? t : IT(t, r), o = e.length - 1; o >= 0; --o) {
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
        ZU = function(t, r, n, s) {
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
                return f && g.push("[" + o.slice(f.index) + "]"), QU(g, r, n, s)
            }
        },
        eG = function(t) {
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
        tG = function(e, t) {
            var r = eG(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? JU(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), l = 0; l < o.length; ++l) {
                var u = o[l],
                    f = ZU(u, n[u], r, typeof e == "string");
                s = Js.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Js.compact(s)
        },
        rG = VU,
        nG = tG,
        iG = zh,
        AT = {
            formats: iG,
            parse: nG,
            stringify: rG
        };
    class sG {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class aG {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class oG {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class lG {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class cG {}
    var Nc = {
        CreateRoomReply: sG,
        GetRoomReply: aG,
        GetAudienceReply: oG,
        RoomExit: lG,
        RoomLock: cG
    };
    const Ly = Ed.exports,
        uG = AT,
        {
            CreateRoomReply: fG,
            GetRoomReply: dG
        } = Nc;
    class hG {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = uG.stringify(r);
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
                l = await (await Ly(n, {
                    method: "POST"
                })).json();
            if (!l.ok) throw new Error(`failed to create room: ${l.error}`);
            let u = l.body;
            return new fG({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await Ly(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new dG({
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
    var pG = {
            APIClient: hG
        },
        Ns = null;
    typeof WebSocket < "u" ? Ns = WebSocket : typeof MozWebSocket < "u" ? Ns = MozWebSocket : typeof Lt < "u" ? Ns = Lt.WebSocket || Lt.MozWebSocket : typeof window < "u" ? Ns = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ns = self.WebSocket || self.MozWebSocket);
    var gG = Ns,
        Xh = {
            exports: {}
        },
        js = typeof Reflect == "object" ? Reflect : null,
        ky = js && typeof js.apply == "function" ? js.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        Dl;
    js && typeof js.ownKeys == "function" ? Dl = js.ownKeys : Object.getOwnPropertySymbols ? Dl = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Dl = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function mG(e) {
        console && console.warn && console.warn(e)
    }
    var NT = Number.isNaN || function(t) {
        return t !== t
    };

    function ht() {
        ht.init.call(this)
    }
    Xh.exports = ht;
    Xh.exports.once = EG;
    ht.EventEmitter = ht;
    ht.prototype._events = void 0;
    ht.prototype._eventsCount = 0;
    ht.prototype._maxListeners = void 0;
    var Dy = 10;

    function Rc(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(ht, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Dy
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || NT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Dy = e
        }
    });
    ht.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    ht.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || NT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function RT(e) {
        return e._maxListeners === void 0 ? ht.defaultMaxListeners : e._maxListeners
    }
    ht.prototype.getMaxListeners = function() {
        return RT(this)
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
        if (typeof f == "function") ky(f, this, r);
        else
            for (var h = f.length, g = xT(f, h), n = 0; n < h; ++n) ky(g[n], this, r);
        return !0
    };

    function PT(e, t, r, n) {
        var s, o, l;
        if (Rc(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === void 0) l = o[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = RT(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, mG(u)
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

    function vG() {
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
            s = vG.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    ht.prototype.once = function(t, r) {
        return Rc(r), this.on(t, LT(this, t, r)), this
    };
    ht.prototype.prependOnceListener = function(t, r) {
        return Rc(r), this.prependListener(t, LT(this, t, r)), this
    };
    ht.prototype.removeListener = function(t, r) {
        var n, s, o, l, u;
        if (Rc(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, l = n.length - 1; l >= 0; l--)
                if (n[l] === r || n[l].listener === r) {
                    u = n[l].listener, o = l;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : yG(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
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

    function kT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? _G(s) : xT(s, s.length)
    }
    ht.prototype.listeners = function(t) {
        return kT(this, t, !0)
    };
    ht.prototype.rawListeners = function(t) {
        return kT(this, t, !1)
    };
    ht.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : DT.call(e, t)
    };
    ht.prototype.listenerCount = DT;

    function DT(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    ht.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Dl(this._events) : []
    };

    function xT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function yG(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function _G(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function EG(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, o), n(l)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            MT(e, t, o, {
                once: !0
            }), t !== "error" && bG(e, s, {
                once: !0
            })
        })
    }

    function bG(e, t, r) {
        typeof e.on == "function" && MT(e, "error", t, r)
    }

    function MT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class TG {
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
    class mo extends Pc {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class FT extends mo {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class BT extends mo {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class UT extends mo {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ut extends Pc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class GT extends ut {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class jT extends ut {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class WT extends ut {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class HT extends ut {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class KT extends ut {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class VT extends ut {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class qT extends ut {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class YT extends ut {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class zT extends ut {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class XT extends ut {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class JT extends ut {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class QT extends ut {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class ZT extends ut {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class eS extends ut {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class tS extends ut {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class rS extends ut {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class nS extends ut {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class iS extends ut {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class sS extends ut {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class aS extends ut {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class oS extends ut {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class lS extends ut {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class cS extends ut {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class uS extends ut {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class fS extends ut {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class dS extends ut {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class hS extends ut {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class pS extends ut {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function SG({
        code: e,
        message: t
    }) {
        const r = OG[e];
        return r ? new r({
            message: t
        }) : new Pc({
            message: t
        })
    }
    var ui = {
        createError: SG,
        CallError: Pc,
        EcastServerError: mo,
        EcastCreateRoomFailed: FT,
        EcastDialRoomFailed: BT,
        EcastServerIsShuttingDown: UT,
        EcastClientError: ut,
        EcastParseError: GT,
        EcastRequestIsMissingOpcode: jT,
        EcastRequestHasInvalidOpcode: WT,
        EcastRequestHasInvalidArguments: HT,
        EcastEntityNotFound: KT,
        EcastEntityAlreadyExists: VT,
        EcastEntityTypeError: qT,
        EcastNoSuchClient: YT,
        EcastRoomIsLocked: zT,
        EcastRoomIsFull: XT,
        EcastLicenseNotFound: JT,
        EcastLicenseCheckFailed: QT,
        EcastRoomNotFound: ZT,
        EcastInvalidRole: eS,
        EcastTwitchLoginRequired: tS,
        EcastInvalidOption: rS,
        EcastPasswordRequired: nS,
        EcastInvalidPassword: iS,
        EcastNameRequired: sS,
        EcastFilterError: aS,
        EcastNoSuchFilter: oS,
        EcastPermissionDenied: lS,
        EcastNotConnected: cS,
        EcastIllegalOperation: uS,
        EcastACLChangeDenied: fS,
        EcastRoomHasEnded: dS,
        EcastEntityLocked: hS,
        EcastRateLimitExceeded: pS,
        ObservedError: TG
    };
    const OG = {
        1e3: mo,
        1001: FT,
        1002: BT,
        1003: UT,
        2e3: ut,
        2001: GT,
        2002: jT,
        2003: WT,
        2004: HT,
        2005: KT,
        2006: VT,
        2007: qT,
        2008: YT,
        2009: zT,
        2010: XT,
        2011: JT,
        2012: QT,
        2013: ZT,
        2014: eS,
        2015: tS,
        2016: rS,
        2017: nS,
        2018: iS,
        2019: sS,
        2021: aS,
        2022: oS,
        2023: lS,
        2024: cS,
        2025: uS,
        2026: fS,
        2027: dS,
        2028: hS,
        2420: pS
    };
    class wG {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class $G {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class CG {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class IG {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class AG {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var Jh = {
        ClientConnected: $G,
        ClientDisconnected: CG,
        ClientKicked: AG,
        ClientSend: IG,
        ClientWelcome: wG
    };
    class NG {
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
        CountGroup: NG
    };
    class RG {
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
        GCounter: RG
    };
    class PG {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var gS = {
        Notification: PG
    };
    class LG {
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
    class kG {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var ep = {
        ObjectEntity: LG,
        ObjectEcho: kG
    };
    class DG {
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
        PNCounter: DG
    };
    class xG {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var mS = {
        Reply: xG
    };
    class MG {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var FG = {
        Request: MG
    };
    class BG {
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
    class UG {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var rp = {
        TextEntity: BG,
        TextEcho: UG
    };
    class GG {
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
        TextRing: GG
    };
    class jG {
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
    var vS = {
        ArtifactEntity: jG
    };
    class WG {
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
    class HG {
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
    class KG {
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
        DoodleEntity: WG,
        DoodleLine: HG,
        DoodleLineRemoved: KG
    };
    class VG {
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
    class qG {
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
    class YG {
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
    var yS = {
        StackEntity: VG,
        StackElement: qG,
        StackElements: YG
    };
    class zG {
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
    var _S = {
        DropEntity: zG
    };
    class XG {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var JG = {
        Echo: XG
    };
    class QG {
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
    var ZG = {
        LockEntity: QG
    };
    class ej {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var ES = {
        OK: ej
    };
    class tj {
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
        NumberEntity: tj
    };
    const {
        ArtifactEntity: rj
    } = vS, {
        ClientWelcome: nj,
        ClientConnected: ij,
        ClientDisconnected: sj,
        ClientKicked: aj,
        ClientSend: oj
    } = Jh, {
        CountGroup: lj
    } = Qh, {
        DoodleEntity: cj,
        DoodleLine: uj,
        DoodleLineRemoved: fj
    } = ip, {
        StackEntity: dj,
        StackElement: hj,
        StackElements: pj
    } = yS, {
        DropEntity: gj
    } = _S, {
        Echo: mj
    } = JG, {
        LockEntity: vj
    } = ZG, {
        GCounter: yj
    } = Zh, {
        GetAudienceReply: _j,
        RoomExit: Ej,
        RoomLock: bj
    } = Nc, {
        Notification: Tj
    } = gS, {
        OK: Sj
    } = ES, {
        NumberEntity: Oj
    } = bS, {
        ObjectEcho: wj,
        ObjectEntity: $j
    } = ep, {
        PNCounter: xy
    } = tp, {
        Reply: Cj
    } = mS, {
        TextEcho: Ij,
        TextEntity: Aj
    } = rp, {
        TextRing: Nj
    } = np, {
        createError: My,
        ObservedError: Rj
    } = ui;

    function Id(e, t, r) {
        switch (e) {
            case "ok":
                return new Sj;
            case "echo":
                return new mj({
                    message: t.message
                });
            case "lock":
                return new vj({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return My({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new Rj({
                    to: t.to,
                    error: My({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new Aj({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new Ij({
                    message: t.message
                });
            case "object":
                return new $j({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new wj({
                    message: t.message
                });
            case "drop":
                return new gj({
                    key: t.key
                });
            case "artifact":
                return new rj({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new ij({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new sj({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new aj({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new oj({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new nj({
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
                return new cj({
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
                return new uj({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new fj({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new dj({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new hj({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new pj({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new Oj({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new Ej({
                    cause: t.cause
                });
            case "room/lock":
                return new bj;
            case "room/get-audience":
                return new _j({
                    connections: t.connections
                });
            case "audience":
                return new xy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new lj({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new Nj({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new yj({
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

    function Pj(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new Cj({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Id(r, t.result)
        }) : new Tj({
            pc: t.pc,
            opcode: r,
            result: Id(r, t.result)
        })
    }
    var Lj = {
        parseResponseMessage: Pj
    };
    const Fy = gG,
        kj = AT,
        Dj = Xh.exports,
        {
            CallError: xj
        } = ui,
        {
            ClientWelcome: Mj
        } = Jh,
        {
            CountGroup: Fj
        } = Qh,
        {
            GCounter: Bj
        } = Zh,
        {
            Notification: By
        } = gS,
        {
            ObjectEntity: Af
        } = ep,
        {
            PNCounter: Uj
        } = tp,
        {
            Reply: Gj
        } = mS,
        {
            Request: jj
        } = FG,
        {
            TextEntity: Nf
        } = rp,
        {
            TextRing: Wj
        } = np,
        {
            parseResponseMessage: Hj
        } = Lj,
        {
            DoodleEntity: Kj
        } = ip,
        {
            StackEntity: Vj
        } = yS,
        qj = 1e3 + Math.floor(Math.random() * 500),
        Uy = 13e3;
    class Yj extends Dj {
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
            const r = kj.stringify(t),
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
                this.conn = new Fy(n, "ecast-v0"), this.conn.onmessage = g => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(g.data),null,2)}`);
                    const _ = Hj(g);
                    if (_ instanceof Gj) this.onReply(_);
                    else if (_ instanceof By) {
                        if (_.result instanceof Mj) u = !0, this.id = _.result.id, this.deviceId = _.result.deviceId, this.entities = _.result.entities, this.secret = _.result.secret, _.result.name && (this.name = _.result.name), f(_.result);
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
                r = qj;
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
                if (r >= Uy) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(Uy, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new By(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof xj ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== Fy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new jj({
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
            return this.entities[t] = new Af({
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
            return this.entities[t] = new Af({
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
            return this.entities[t] = new Af({
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
            return this.entities[t] = new Kj({
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
            return this.entities[t] = new Vj({
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
            return this.entities[t] = new Fj({
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
            return this.entities[t] = new Bj({
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
            return this.entities[t] = new Uj({
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
            return this.entities[t] = new Wj({
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
    var zj = {
        WSClient: Yj
    };
    const {
        APIClient: Xj
    } = pG, {
        WSClient: Jj
    } = zj, {
        CreateRoomReply: Qj,
        GetRoomReply: Zj
    } = Nc, {
        ClientWelcome: e3,
        ClientDisconnected: t3
    } = Jh, {
        ArtifactEntity: r3
    } = vS, {
        GCounter: n3
    } = Zh, {
        NumberEntity: i3
    } = bS, {
        TextEntity: s3
    } = rp, {
        DoodleEntity: a3
    } = ip, {
        ObjectEntity: o3
    } = ep, {
        CountGroup: l3
    } = Qh, {
        DropEntity: c3
    } = _S, {
        OK: u3
    } = ES, {
        RoomExit: f3
    } = Nc, {
        TextRing: d3
    } = np, {
        PNCounter: h3
    } = tp;
    var Or = {
        APIClient: Xj,
        WSClient: Jj,
        ClientWelcome: e3,
        CreateRoomReply: Qj,
        DropEntity: c3,
        GetRoomReply: Zj,
        ClientDisconnected: t3,
        RoomExit: f3,
        OK: u3,
        ArtifactEntity: r3,
        DoodleEntity: a3,
        NumberEntity: i3,
        CountGroup: l3,
        GCounter: n3,
        ObjectEntity: o3,
        PNCounter: h3,
        TextEntity: s3,
        TextRing: d3
    };
    const p3 = [{
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
        Ad = e => p3.find(t => t.tag === e || t.categoryId === e);

    function Nd(...e) {
        console.log(...e)
    }
    class g3 {
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
                        blocks: b
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

    function m3(e) {
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
                s = function(T, R) {
                    if (R = R.split(":")[0], T = +T, !T) return !1;
                    switch (R) {
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
                for (var T = /([^=?#&]+)=?([^&]*)/g, R = {}, S; S = T.exec(w);) {
                    var L = u(S[1]),
                        Z = u(S[2]);
                    L === null || Z === null || L in R || (R[L] = Z)
                }
                return R
            }

            function g(w, T) {
                T = T || "";
                var R = [],
                    S, L;
                typeof T != "string" && (T = "?");
                for (L in w)
                    if (o.call(w, L)) {
                        if (S = w[L], !S && (S === null || S === l || isNaN(S)) && (S = ""), L = f(L), S = f(S), L === null || S === null) continue;
                        R.push(L + "=" + S)
                    } return R.length ? T + R.join("&") : ""
            }
            var _ = g,
                b = h,
                $ = {
                    stringify: _,
                    parse: b
                },
                P = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                U = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                C = new RegExp("^" + U + "+");

            function q(w) {
                return (w || "").toString().replace(C, "")
            }
            var X = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, R) {
                        return Q(R.protocol) ? T.replace(/\\/g, "/") : T
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
                var R = T.location || {};
                w = w || R;
                var S = {},
                    L = typeof w,
                    Z;
                if (w.protocol === "blob:") S = new ue(unescape(w.pathname), {});
                else if (L === "string") {
                    S = new ue(w, {});
                    for (Z in W) delete S[Z]
                } else if (L === "object") {
                    for (Z in w) Z in W || (S[Z] = w[Z]);
                    S.slashes === void 0 && (S.slashes = P.test(w.href))
                }
                return S
            }

            function Q(w) {
                return w === "file:" || w === "ftp:" || w === "http:" || w === "https:" || w === "ws:" || w === "wss:"
            }

            function oe(w, T) {
                w = q(w), T = T || {};
                var R = M.exec(w),
                    S = R[1] ? R[1].toLowerCase() : "",
                    L = !!R[2],
                    Z = !!R[3],
                    ne = 0,
                    _e;
                return L ? Z ? (_e = R[2] + R[3] + R[4], ne = R[2].length + R[3].length) : (_e = R[2] + R[4], ne = R[2].length) : Z ? (_e = R[3] + R[4], ne = R[3].length) : _e = R[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : Q(S) ? _e = R[4] : S ? L && (_e = _e.slice(2)) : ne >= 2 && Q(T.protocol) && (_e = R[4]), {
                    protocol: S,
                    slashes: L || Q(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function le(w, T) {
                if (w === "") return T;
                for (var R = (T || "/").split("/").slice(0, -1).concat(w.split("/")), S = R.length, L = R[S - 1], Z = !1, ne = 0; S--;) R[S] === "." ? R.splice(S, 1) : R[S] === ".." ? (R.splice(S, 1), ne++) : ne && (S === 0 && (Z = !0), R.splice(S, 1), ne--);
                return Z && R.unshift(""), (L === "." || L === "..") && R.push(""), R.join("/")
            }

            function ue(w, T, R) {
                if (w = q(w), !(this instanceof ue)) return new ue(w, T, R);
                var S, L, Z, ne, _e, Se, ft = X.slice(),
                    ir = typeof T,
                    Me = this,
                    da = 0;
                for (ir !== "object" && ir !== "string" && (R = T, T = null), R && typeof R != "function" && (R = $.parse), T = j(T), L = oe(w || "", T), S = !L.protocol && !L.slashes, Me.slashes = L.slashes || S && T.slashes, Me.protocol = L.protocol || T.protocol || "", w = L.rest, (Me.protocol === "file:" || !L.slashes && (L.protocol || L.slashesCount < 2 || !Q(Me.protocol))) && (ft[3] = [/(.*)/, "pathname"]); da < ft.length; da++) {
                    if (ne = ft[da], typeof ne == "function") {
                        w = ne(w, Me);
                        continue
                    }
                    Z = ne[0], Se = ne[1], Z !== Z ? Me[Se] = w : typeof Z == "string" ? ~(_e = w.indexOf(Z)) && (typeof ne[2] == "number" ? (Me[Se] = w.slice(0, _e), w = w.slice(_e + ne[2])) : (Me[Se] = w.slice(_e), w = w.slice(0, _e))) : (_e = Z.exec(w)) && (Me[Se] = _e[1], w = w.slice(0, _e.index)), Me[Se] = Me[Se] || S && ne[3] && T[Se] || "", ne[4] && (Me[Se] = Me[Se].toLowerCase())
                }
                R && (Me.query = R(Me.query)), S && T.slashes && Me.pathname.charAt(0) !== "/" && (Me.pathname !== "" || T.pathname !== "") && (Me.pathname = le(Me.pathname, T.pathname)), Me.pathname.charAt(0) !== "/" && Q(Me.protocol) && (Me.pathname = "/" + Me.pathname), s(Me.port, Me.protocol) || (Me.host = Me.hostname, Me.port = ""), Me.username = Me.password = "", Me.auth && (ne = Me.auth.split(":"), Me.username = ne[0] || "", Me.password = ne[1] || ""), Me.origin = Me.protocol !== "file:" && Q(Me.protocol) && Me.host ? Me.protocol + "//" + Me.host : "null", Me.href = Me.toString()
            }

            function Ae(w, T, R) {
                var S = this;
                switch (w) {
                    case "query":
                        typeof T == "string" && T.length && (T = (R || $.parse)(T)), S[w] = T;
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
                        S.protocol = T.toLowerCase(), S.slashes = !R;
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
                var T, R = this,
                    S = R.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var L = S + (R.slashes || Q(R.protocol) ? "//" : "");
                return R.username && (L += R.username, R.password && (L += ":" + R.password), L += "@"), L += R.host + R.pathname, T = typeof R.query == "object" ? w(R.query) : R.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), R.hash && (L += R.hash), L
            }
            ue.prototype = {
                set: Ae,
                toString: Ce
            }, ue.extractProtocol = oe, ue.location = j, ue.trimLeft = q, ue.qs = $;
            var fe = ue;

            function $e(w, T) {
                setTimeout(function(R) {
                    return w.call(R)
                }, 4, T)
            }

            function F(w, T) {
                typeof process < "u" && console[w].call(null, T)
            }

            function ie(w, T) {
                w === void 0 && (w = []);
                var R = [];
                return w.forEach(function(S) {
                    T(S) || R.push(S)
                }), R
            }

            function de(w, T) {
                w === void 0 && (w = []);
                var R = [];
                return w.forEach(function(S) {
                    T(S) && R.push(S)
                }), R
            }
            var be = function() {
                this.listeners = {}
            };
            be.prototype.addEventListener = function(T, R) {
                typeof R == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(S) {
                    return S === R
                }).length === 0 && this.listeners[T].push(R))
            }, be.prototype.removeEventListener = function(T, R) {
                var S = this.listeners[T];
                this.listeners[T] = ie(S, function(L) {
                    return L === R
                })
            }, be.prototype.dispatchEvent = function(T) {
                for (var R = this, S = [], L = arguments.length - 1; L-- > 0;) S[L] = arguments[L + 1];
                var Z = T.type,
                    ne = this.listeners[Z];
                return Array.isArray(ne) ? (ne.forEach(function(_e) {
                    S.length > 0 ? _e.apply(R, S) : _e.call(R, T)
                }), !0) : !1
            };

            function ve(w) {
                var T = w.indexOf("?");
                return T >= 0 ? w.slice(0, T) : w
            }
            var Oe = function() {
                this.urlMap = {}
            };
            Oe.prototype.attachWebSocket = function(T, R) {
                var S = ve(R),
                    L = this.urlMap[S];
                if (L && L.server && L.websockets.indexOf(T) === -1) return L.websockets.push(T), L.server
            }, Oe.prototype.addMembershipToRoom = function(T, R) {
                var S = this.urlMap[ve(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[R] || (S.roomMemberships[R] = []), S.roomMemberships[R].push(T))
            }, Oe.prototype.attachServer = function(T, R) {
                var S = ve(R),
                    L = this.urlMap[S];
                if (!L) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Oe.prototype.serverLookup = function(T) {
                var R = ve(T),
                    S = this.urlMap[R];
                if (S) return S.server
            }, Oe.prototype.websocketsLookup = function(T, R, S) {
                var L = ve(T),
                    Z, ne = this.urlMap[L];
                if (Z = ne ? ne.websockets : [], R) {
                    var _e = ne.roomMemberships[R];
                    Z = _e || []
                }
                return S ? Z.filter(function(Se) {
                    return Se !== S
                }) : Z
            }, Oe.prototype.removeServer = function(T) {
                delete this.urlMap[ve(T)]
            }, Oe.prototype.removeWebSocket = function(T, R) {
                var S = ve(R),
                    L = this.urlMap[S];
                L && (L.websockets = ie(L.websockets, function(Z) {
                    return Z === T
                }))
            }, Oe.prototype.removeMembershipFromRoom = function(T, R) {
                var S = this.urlMap[ve(T.url)],
                    L = S.roomMemberships[R];
                S && L !== null && (S.roomMemberships[R] = ie(L, function(Z) {
                    return Z === T
                }))
            };
            var Fe = new Oe,
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
                rt = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                It = function() {};
            It.prototype.stopPropagation = function() {}, It.prototype.stopImmediatePropagation = function() {}, It.prototype.initEvent = function(T, R, S) {
                T === void 0 && (T = "undefined"), R === void 0 && (R = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(R), this.cancelable = Boolean(S)
            };
            var Cr = function(w) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), w.call(this), !R) throw new TypeError(rt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(rt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var L = S.bubbles,
                            Z = S.cancelable;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It),
                nr = function(w) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), w.call(this), !R) throw new TypeError(rt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(rt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Z = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Se = S.lastEventId,
                            ft = S.ports;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.canncelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.origin = "" + _e, this.ports = typeof ft > "u" ? null : ft, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Se || "")
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It),
                vr = function(w) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), w.call(this), !R) throw new TypeError(rt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(rt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Z = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Se = S.wasClean;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Se ? Boolean(Se) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }(It);

            function ot(w) {
                var T = w.type,
                    R = w.target,
                    S = new Cr(T);
                return R && (S.target = R, S.srcElement = R, S.currentTarget = R), S
            }

            function Ot(w) {
                var T = w.type,
                    R = w.origin,
                    S = w.data,
                    L = w.target,
                    Z = new nr(T, {
                        data: S,
                        origin: R
                    });
                return L && (Z.target = L, Z.srcElement = L, Z.currentTarget = L), Z
            }

            function lt(w) {
                var T = w.code,
                    R = w.reason,
                    S = w.type,
                    L = w.target,
                    Z = w.wasClean;
                Z || (Z = T === je.CLOSE_NORMAL || T === je.CLOSE_NO_STATUS);
                var ne = new vr(S, {
                    code: T,
                    reason: R,
                    wasClean: Z
                });
                return L && (ne.target = L, ne.srcElement = L, ne.currentTarget = L), ne
            }

            function kt(w, T, R) {
                w.readyState = z.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = lt({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: R
                    }),
                    Z = lt({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: R
                    });
                $e(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = z.CLOSED, w.dispatchEvent(L), w.dispatchEvent(Z), S && S.dispatchEvent(L, S)
                }, w)
            }

            function Ht(w, T, R) {
                w.readyState = z.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = lt({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: R,
                        wasClean: !1
                    }),
                    Z = lt({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: R,
                        wasClean: !1
                    }),
                    ne = ot({
                        type: "error",
                        target: w.target
                    });
                $e(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = z.CLOSED, w.dispatchEvent(ne), w.dispatchEvent(L), w.dispatchEvent(Z), S && S.dispatchEvent(L, S)
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
                            var _e = ne.code || je.CLOSE_NORMAL,
                                Se = ne.reason || "";
                            kt(T, _e, Se)
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

            function x(w) {
                var T = new fe(w),
                    R = T.pathname,
                    S = T.protocol,
                    L = T.hash;
                if (!w) throw new TypeError(rt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (R || (T.pathname = "/"), S === "") throw new SyntaxError(rt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(rt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (L !== "") throw new SyntaxError(rt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + L + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(w) {
                if (w === void 0 && (w = []), !Array.isArray(w) && typeof w != "string") throw new SyntaxError(rt.CONSTRUCTOR_ERROR + " The subprotocol '" + w.toString() + "' is invalid.");
                typeof w == "string" && (w = [w]);
                var T = w.map(function(S) {
                        return {
                            count: 1,
                            protocol: S
                        }
                    }).reduce(function(S, L) {
                        return S[L.protocol] = (S[L.protocol] || 0) + L.count, S
                    }, {}),
                    R = Object.keys(T).filter(function(S) {
                        return T[S] > 1
                    });
                if (R.length > 0) throw new SyntaxError(rt.CONSTRUCTOR_ERROR + " The subprotocol '" + R[0] + "' is duplicated.");
                return w
            }
            var z = function(w) {
                function T(S, L) {
                    w.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = x(S), L = B(L), this.protocol = L[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var Z = p(this),
                        ne = Fe.attachWebSocket(Z, this.url);
                    $e(function() {
                        if (ne)
                            if (ne.options.verifyClient && typeof ne.options.verifyClient == "function" && !ne.options.verifyClient()) this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Fe.removeWebSocket(Z, this.url), this.dispatchEvent(ot({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(lt({
                                type: "close",
                                target: this,
                                code: je.CLOSE_NORMAL
                            }));
                            else {
                                if (ne.options.selectProtocol && typeof ne.options.selectProtocol == "function") {
                                    var Se = ne.options.selectProtocol(L),
                                        ft = Se !== "",
                                        ir = L.indexOf(Se) !== -1;
                                    if (ft && !ir) {
                                        this.readyState = T.CLOSED, F("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Fe.removeWebSocket(Z, this.url), this.dispatchEvent(ot({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(lt({
                                            type: "close",
                                            target: this,
                                            code: je.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Se
                                }
                                this.readyState = T.OPEN, this.dispatchEvent(ot({
                                    type: "open",
                                    target: this
                                })), ne.dispatchEvent(ot({
                                    type: "connection"
                                }), Z)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(ot({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), F("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var R = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return R.onopen.get = function() {
                    return this._onopen
                }, R.onmessage.get = function() {
                    return this._onmessage
                }, R.onclose.get = function() {
                    return this._onclose
                }, R.onerror.get = function() {
                    return this._onerror
                }, R.onopen.set = function(S) {
                    this.removeEventListener("open", this._onopen), this._onopen = S, this.addEventListener("open", S)
                }, R.onmessage.set = function(S) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = S, this.addEventListener("message", S)
                }, R.onclose.set = function(S) {
                    this.removeEventListener("close", this._onclose), this._onclose = S, this.addEventListener("close", S)
                }, R.onerror.set = function(S) {
                    this.removeEventListener("error", this._onerror), this._onerror = S, this.addEventListener("error", S)
                }, T.prototype.send = function(L) {
                    var Z = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = Ot({
                            type: "server::message",
                            origin: this.url,
                            data: Dt(L)
                        }),
                        _e = Fe.serverLookup(this.url);
                    _e && $e(function() {
                        Z.dispatchEvent(ne, L)
                    }, _e)
                }, T.prototype.close = function(L, Z) {
                    if (L !== void 0 && (typeof L != "number" || L !== 1e3 && (L < 3e3 || L > 4999))) throw new TypeError(rt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + L + " is neither.");
                    if (Z !== void 0) {
                        var ne = O(Z);
                        if (ne > 123) throw new SyntaxError(rt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? Ht(_e, L || je.CLOSE_ABNORMAL, Z) : kt(_e, L || je.CLOSE_NO_STATUS, Z)
                    }
                }, Object.defineProperties(T.prototype, R), T
            }(be);
            z.CONNECTING = 0, z.prototype.CONNECTING = z.CONNECTING, z.OPEN = 1, z.prototype.OPEN = z.OPEN, z.CLOSING = 2, z.prototype.CLOSING = z.CLOSING, z.CLOSED = 3, z.prototype.CLOSED = z.CLOSED;
            var ce = function(w) {
                return w.reduce(function(T, R) {
                    return T.indexOf(R) > -1 ? T : T.concat(R)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof m3 == "function" && typeof Lt == "object" ? Lt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                A = function(w) {
                    function T(R, S) {
                        S === void 0 && (S = re), w.call(this);
                        var L = new fe(R);
                        L.pathname || (L.pathname = "/"), this.url = L.toString(), this.originalWebSocket = null;
                        var Z = Fe.attachServer(this, this.url);
                        if (!Z) throw this.dispatchEvent(ot({
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
                        Fe.removeServer(this.url), _e.forEach(function(Se) {
                            Se.readyState = z.CLOSED, Se.dispatchEvent(lt({
                                type: "close",
                                target: Se.target,
                                code: L || je.CLOSE_NORMAL,
                                reason: Z || "",
                                wasClean: ne
                            }))
                        }), this.dispatchEvent(lt({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(S, L, Z) {
                        var ne = this;
                        Z === void 0 && (Z = {});
                        var _e = Z.websockets;
                        _e || (_e = Fe.websocketsLookup(this.url)), typeof Z != "object" || arguments.length > 3 ? (L = Array.prototype.slice.call(arguments, 1, arguments.length), L = L.map(function(Se) {
                            return Dt(Se)
                        })) : L = Dt(L), _e.forEach(function(Se) {
                            Array.isArray(L) ? Se.dispatchEvent.apply(Se, [Ot({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Se.target
                            })].concat(L)) : Se.dispatchEvent(Ot({
                                type: S,
                                data: L,
                                origin: ne.url,
                                target: Se.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Fe.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, L, Z) {
                        var ne = this;
                        Z === void 0 && (Z = []);
                        var _e = this,
                            Se = ce(Z.concat(Fe.websocketsLookup(this.url, S, L)));
                        return {
                            to: function(ft, ir) {
                                return ne.to.call(ne, ft, ir, Se)
                            },
                            emit: function(ir, Me) {
                                _e.emit(ir, Me, {
                                    websockets: Se
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], L = arguments.length; L--;) S[L] = arguments[L];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var L = Fe.websocketsLookup(this.url);
                        S === "error" && L.forEach(function(Z) {
                            Z.readyState = z.CLOSED, Z.dispatchEvent(ot({
                                type: "error"
                            }))
                        })
                    }, T
                }(be);
            A.of = function(T) {
                return new A(T)
            };
            var V = function(w) {
                function T(S, L) {
                    var Z = this;
                    S === void 0 && (S = "socket.io"), L === void 0 && (L = ""), w.call(this), this.binaryType = "blob";
                    var ne = new fe(S);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof L == "string" || typeof L == "object" && L !== null ? this.protocol = L : Array.isArray(L) && L.length > 0 && (this.protocol = L[0]);
                    var _e = Fe.attachWebSocket(this, this.url);
                    $e(function() {
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
                            code: je.CLOSE_NORMAL
                        })), F("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Se) {
                        Z.dispatchEvent(lt({
                            type: "disconnect",
                            target: Se.target,
                            code: Se.code
                        }))
                    })
                }
                w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T;
                var R = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var L = Fe.serverLookup(this.url);
                        return Fe.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), L && L.dispatchEvent(lt({
                            type: "disconnect",
                            target: this,
                            code: je.CLOSE_NORMAL
                        }), L), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(L) {
                    for (var Z = [], ne = arguments.length - 1; ne-- > 0;) Z[ne] = arguments[ne + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var _e = Ot({
                            type: L,
                            origin: this.url,
                            data: Z
                        }),
                        Se = Fe.serverLookup(this.url);
                    return Se && Se.dispatchEvent.apply(Se, [_e].concat(Z)), this
                }, T.prototype.send = function(L) {
                    return this.emit("message", L), this
                }, R.broadcast.get = function() {
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
                    var Se = L.type,
                        ft = this.listeners[Se];
                    if (!Array.isArray(ft)) return !1;
                    ft.forEach(function(ir) {
                        ne.length > 0 ? ir.apply(Z, ne) : ir.call(Z, L.data ? L.data : L)
                    })
                }, Object.defineProperties(T.prototype, R), T
            }(be);
            V.CONNECTING = 0, V.OPEN = 1, V.CLOSING = 2, V.CLOSED = 3;
            var he = function(T, R) {
                return new V(T, R)
            };
            he.connect = function(T, R) {
                return he(T, R)
            };
            var pe = A,
                Ne = z,
                xe = he;
            r.Server = pe, r.WebSocket = Ne, r.SocketIO = xe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Gy, Gy.exports);
    var TS = {
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
                    $ = h.y - _;
                if (b !== 0 || $ !== 0) {
                    var P = ((u.x - g) * b + (u.y - _) * $) / (b * b + $ * $);
                    P > 1 ? (g = h.x, _ = h.y) : P > 0 && (g += b * P, _ += $ * P)
                }
                return b = u.x - g, $ = u.y - _, b * b + $ * $
            }

            function n(u, f) {
                for (var h = u[0], g = [h], _, b = 1, $ = u.length; b < $; b++) _ = u[b], t(_, h) > f && (g.push(_), h = _);
                return h !== _ && g.push(_), g
            }

            function s(u, f, h, g, _) {
                for (var b = g, $, P = f + 1; P < h; P++) {
                    var M = r(u[P], u[f], u[h]);
                    M > b && ($ = P, b = M)
                }
                b > g && ($ - f > 1 && s(u, f, $, g, _), _.push(u[$]), h - $ > 1 && s(u, $, h, g, _))
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
    })(TS);
    const SS = TS.exports;
    class v3 {
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
                points: SS(this.points, .5).map(r => ({
                    x: Yt.toPrecision(r.x, this.precision),
                    y: Yt.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class y3 {
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
                n = SS(this.currentLine.points);
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
    class _3 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new y3(t, this.width, this.height, r)
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
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    class OS {
        static withTypes(t, r) {
            let n = t;
            return r.forEach(s => {
                s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
            }), n
        }
        static html(t) {
            if (String(t).match(/<fart>/g)) {
                const n = new Audio(new URL("main/pp9/antique-freak/assets/4af6cbea.wav", self.location).href);
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
    const E3 = {
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
        b3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        T3 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        S3 = "LOADING",
        O3 = {
            JOINED_COUNT: "{count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "1 player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        w3 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        $3 = {
            AND: "AND",
            OR: "OR"
        },
        C3 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        I3 = {
            NAME: "AUDIENCE"
        },
        A3 = {
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
        N3 = {
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
        R3 = {
            ACTION: E3,
            ALT: b3,
            ERROR: T3,
            LOADING: S3,
            LOBBY: O3,
            POST_GAME: w3,
            SEPARATOR: $3,
            TUTORIAL: C3,
            AUDIENCE: I3,
            UGC: A3,
            TOAST: N3
        },
        P3 = {
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
        L3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        k3 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        D3 = "CHARGEMENT",
        x3 = {
            JOINED_COUNT: "1\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "1\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        M3 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        F3 = {
            AND: "ET",
            OR: "OU"
        },
        B3 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        U3 = {
            NAME: "SPECTATEURS"
        },
        G3 = {
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
        j3 = {
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
        W3 = {
            ACTION: P3,
            ALT: L3,
            ERROR: k3,
            LOADING: D3,
            LOBBY: x3,
            POST_GAME: M3,
            SEPARATOR: F3,
            TUTORIAL: B3,
            AUDIENCE: U3,
            UGC: G3,
            TOAST: j3
        },
        H3 = {
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
        K3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        V3 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        q3 = "CARICAMENTO",
        Y3 = {
            JOINED_COUNT: "Sta partecipando 1 giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "Manca 1 giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        z3 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        X3 = {
            AND: "E",
            OR: "O"
        },
        J3 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        Q3 = {
            NAME: "PUBBLICO"
        },
        Z3 = {
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
        eW = {
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
        tW = {
            ACTION: H3,
            ALT: K3,
            ERROR: V3,
            LOADING: q3,
            LOBBY: Y3,
            POST_GAME: z3,
            SEPARATOR: X3,
            TUTORIAL: J3,
            AUDIENCE: Q3,
            UGC: Z3,
            TOAST: eW
        },
        rW = {
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
        nW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        iW = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        sW = "LADE",
        aW = {
            JOINED_COUNT: "{count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "{count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        oW = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        lW = {
            AND: "UND",
            OR: "ODER"
        },
        cW = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        uW = {
            NAME: "PUBLIKUM"
        },
        fW = {
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
        dW = {
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
        hW = {
            ACTION: rW,
            ALT: nW,
            ERROR: iW,
            LOADING: sW,
            LOBBY: aW,
            POST_GAME: oW,
            SEPARATOR: lW,
            TUTORIAL: cW,
            AUDIENCE: uW,
            UGC: fW,
            TOAST: dW
        },
        pW = {
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
        gW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        mW = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        vW = "CARGANDO",
        yW = {
            JOINED_COUNT: "Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
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
        EW = {
            AND: "Y",
            OR: "O"
        },
        bW = {
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
            ACTION: pW,
            ALT: gW,
            ERROR: mW,
            LOADING: vW,
            LOBBY: yW,
            POST_GAME: _W,
            SEPARATOR: EW,
            TUTORIAL: bW,
            AUDIENCE: TW,
            UGC: SW,
            TOAST: OW
        },
        $W = {
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
        CW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        IW = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        AW = "CARGANDO",
        NW = {
            JOINED_COUNT: "Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        RW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        PW = {
            AND: "Y",
            OR: "O"
        },
        LW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        kW = {
            NAME: "P\xDABLICO"
        },
        DW = {
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
        xW = {
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
        MW = {
            ACTION: $W,
            ALT: CW,
            ERROR: IW,
            LOADING: AW,
            LOBBY: NW,
            POST_GAME: RW,
            SEPARATOR: PW,
            TUTORIAL: LW,
            AUDIENCE: kW,
            UGC: DW,
            TOAST: xW
        },
        FW = {
            en: R3,
            fr: W3,
            it: tW,
            de: hW,
            es: wW,
            "es-XL": MW
        },
        BW = tt({
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
                    this.canvas = Un(new v3(e, this.player.doodle, this.canvasOptions))
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
        UW = {
            class: "doodle"
        },
        GW = {
            ref: "canvas"
        },
        jW = ["disabled"],
        WW = ["disabled"];

    function HW(e, t, r, n, s, o) {
        const l = xt("pointerbox-translate"),
            u = xt("pointerbox"),
            f = xt("t");
        return G(), K("div", UW, [Ie((G(), K("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ie(H("canvas", GW, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Ee("", !0) : Ie((G(), K("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = zt((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, jW)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Ee("", !0) : Ie((G(), K("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = zt((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, WW)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const KW = at(BW, [
        ["render", HW]
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
                b = 2,
                $ = 4,
                P = 1,
                M = 2,
                U = 1,
                C = 2,
                q = 4,
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
                je = 4294967295,
                rt = je - 1,
                It = je >>> 1,
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
                ot = "[object AsyncFunction]",
                Ot = "[object Boolean]",
                lt = "[object Date]",
                kt = "[object DOMException]",
                Ht = "[object Error]",
                Dt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                x = "[object Null]",
                B = "[object Object]",
                z = "[object Promise]",
                ce = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                A = "[object String]",
                V = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ne = "[object WeakSet]",
                xe = "[object ArrayBuffer]",
                w = "[object DataView]",
                T = "[object Float32Array]",
                R = "[object Float64Array]",
                S = "[object Int8Array]",
                L = "[object Int16Array]",
                Z = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Se = "[object Uint16Array]",
                ft = "[object Uint32Array]",
                ir = /\b__p \+= '';/g,
                Me = /\b(__p \+=) '' \+/g,
                da = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Gp = /&(?:amp|lt|gt|quot|#39);/g,
                jp = /[&<>"']/g,
                ww = RegExp(Gp.source),
                $w = RegExp(jp.source),
                Cw = /<%-([\s\S]+?)%>/g,
                Iw = /<%([\s\S]+?)%>/g,
                Wp = /<%=([\s\S]+?)%>/g,
                Aw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Nw = /^\w*$/,
                Rw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Zc = /[\\^$.*+?()[\]{}|]/g,
                Pw = RegExp(Zc.source),
                eu = /^\s+/,
                Lw = /\s/,
                kw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Dw = /\{\n\/\* \[wrapped with (.+)\] \*/,
                xw = /,? & /,
                Mw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Fw = /[()=,{}\[\]\/\s]/,
                Bw = /\\(\\)?/g,
                Uw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Hp = /\w*$/,
                Gw = /^[-+]0x[0-9a-f]+$/i,
                jw = /^0b[01]+$/i,
                Ww = /^\[object .+?Constructor\]$/,
                Hw = /^0o[0-7]+$/i,
                Kw = /^(?:0|[1-9]\d*)$/,
                Vw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                wo = /($^)/,
                qw = /['\n\r\u2028\u2029\\]/g,
                $o = "\\ud800-\\udfff",
                Yw = "\\u0300-\\u036f",
                zw = "\\ufe20-\\ufe2f",
                Xw = "\\u20d0-\\u20ff",
                Kp = Yw + zw + Xw,
                Vp = "\\u2700-\\u27bf",
                qp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                Jw = "\\xac\\xb1\\xd7\\xf7",
                Qw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                Zw = "\\u2000-\\u206f",
                e0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Yp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                zp = "\\ufe0e\\ufe0f",
                Xp = Jw + Qw + Zw + e0,
                tu = "['\u2019]",
                t0 = "[" + $o + "]",
                Jp = "[" + Xp + "]",
                Co = "[" + Kp + "]",
                Qp = "\\d+",
                r0 = "[" + Vp + "]",
                Zp = "[" + qp + "]",
                eg = "[^" + $o + Xp + Qp + Vp + qp + Yp + "]",
                ru = "\\ud83c[\\udffb-\\udfff]",
                n0 = "(?:" + Co + "|" + ru + ")",
                tg = "[^" + $o + "]",
                nu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                iu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                fs = "[" + Yp + "]",
                rg = "\\u200d",
                ng = "(?:" + Zp + "|" + eg + ")",
                i0 = "(?:" + fs + "|" + eg + ")",
                ig = "(?:" + tu + "(?:d|ll|m|re|s|t|ve))?",
                sg = "(?:" + tu + "(?:D|LL|M|RE|S|T|VE))?",
                ag = n0 + "?",
                og = "[" + zp + "]?",
                s0 = "(?:" + rg + "(?:" + [tg, nu, iu].join("|") + ")" + og + ag + ")*",
                a0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                o0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                lg = og + ag + s0,
                l0 = "(?:" + [r0, nu, iu].join("|") + ")" + lg,
                c0 = "(?:" + [tg + Co + "?", Co, nu, iu, t0].join("|") + ")",
                u0 = RegExp(tu, "g"),
                f0 = RegExp(Co, "g"),
                su = RegExp(ru + "(?=" + ru + ")|" + c0 + lg, "g"),
                d0 = RegExp([fs + "?" + Zp + "+" + ig + "(?=" + [Jp, fs, "$"].join("|") + ")", i0 + "+" + sg + "(?=" + [Jp, fs + ng, "$"].join("|") + ")", fs + "?" + ng + "+" + ig, fs + "+" + sg, o0, a0, Qp, l0].join("|"), "g"),
                h0 = RegExp("[" + rg + $o + Kp + zp + "]"),
                p0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                g0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                m0 = -1,
                bt = {};
            bt[T] = bt[R] = bt[S] = bt[L] = bt[Z] = bt[ne] = bt[_e] = bt[Se] = bt[ft] = !0, bt[nr] = bt[vr] = bt[xe] = bt[Ot] = bt[w] = bt[lt] = bt[Ht] = bt[Dt] = bt[p] = bt[O] = bt[B] = bt[se] = bt[re] = bt[A] = bt[pe] = !1;
            var vt = {};
            vt[nr] = vt[vr] = vt[xe] = vt[w] = vt[Ot] = vt[lt] = vt[T] = vt[R] = vt[S] = vt[L] = vt[Z] = vt[p] = vt[O] = vt[B] = vt[se] = vt[re] = vt[A] = vt[V] = vt[ne] = vt[_e] = vt[Se] = vt[ft] = !0, vt[Ht] = vt[Dt] = vt[pe] = !1;
            var v0 = {
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
                y0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                _0 = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                E0 = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                b0 = parseFloat,
                T0 = parseInt,
                cg = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
                S0 = typeof self == "object" && self && self.Object === Object && self,
                Jt = cg || S0 || Function("return this")(),
                au = t && !t.nodeType && t,
                $i = au && !0 && e && !e.nodeType && e,
                ug = $i && $i.exports === au,
                ou = ug && cg.process,
                Ur = function() {
                    try {
                        var k = $i && $i.require && $i.require("util").types;
                        return k || ou && ou.binding && ou.binding("util")
                    } catch {}
                }(),
                fg = Ur && Ur.isArrayBuffer,
                dg = Ur && Ur.isDate,
                hg = Ur && Ur.isMap,
                pg = Ur && Ur.isRegExp,
                gg = Ur && Ur.isSet,
                mg = Ur && Ur.isTypedArray;

            function Ir(k, J, Y) {
                switch (Y.length) {
                    case 0:
                        return k.call(J);
                    case 1:
                        return k.call(J, Y[0]);
                    case 2:
                        return k.call(J, Y[0], Y[1]);
                    case 3:
                        return k.call(J, Y[0], Y[1], Y[2])
                }
                return k.apply(J, Y)
            }

            function O0(k, J, Y, Te) {
                for (var Be = -1, it = k == null ? 0 : k.length; ++Be < it;) {
                    var Ft = k[Be];
                    J(Te, Ft, Y(Ft), k)
                }
                return Te
            }

            function Gr(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length; ++Y < Te && J(k[Y], Y, k) !== !1;);
                return k
            }

            function w0(k, J) {
                for (var Y = k == null ? 0 : k.length; Y-- && J(k[Y], Y, k) !== !1;);
                return k
            }

            function vg(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length; ++Y < Te;)
                    if (!J(k[Y], Y, k)) return !1;
                return !0
            }

            function Wn(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length, Be = 0, it = []; ++Y < Te;) {
                    var Ft = k[Y];
                    J(Ft, Y, k) && (it[Be++] = Ft)
                }
                return it
            }

            function Io(k, J) {
                var Y = k == null ? 0 : k.length;
                return !!Y && ds(k, J, 0) > -1
            }

            function lu(k, J, Y) {
                for (var Te = -1, Be = k == null ? 0 : k.length; ++Te < Be;)
                    if (Y(J, k[Te])) return !0;
                return !1
            }

            function wt(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length, Be = Array(Te); ++Y < Te;) Be[Y] = J(k[Y], Y, k);
                return Be
            }

            function Hn(k, J) {
                for (var Y = -1, Te = J.length, Be = k.length; ++Y < Te;) k[Be + Y] = J[Y];
                return k
            }

            function cu(k, J, Y, Te) {
                var Be = -1,
                    it = k == null ? 0 : k.length;
                for (Te && it && (Y = k[++Be]); ++Be < it;) Y = J(Y, k[Be], Be, k);
                return Y
            }

            function $0(k, J, Y, Te) {
                var Be = k == null ? 0 : k.length;
                for (Te && Be && (Y = k[--Be]); Be--;) Y = J(Y, k[Be], Be, k);
                return Y
            }

            function uu(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length; ++Y < Te;)
                    if (J(k[Y], Y, k)) return !0;
                return !1
            }
            var C0 = fu("length");

            function I0(k) {
                return k.split("")
            }

            function A0(k) {
                return k.match(Mw) || []
            }

            function yg(k, J, Y) {
                var Te;
                return Y(k, function(Be, it, Ft) {
                    if (J(Be, it, Ft)) return Te = it, !1
                }), Te
            }

            function Ao(k, J, Y, Te) {
                for (var Be = k.length, it = Y + (Te ? 1 : -1); Te ? it-- : ++it < Be;)
                    if (J(k[it], it, k)) return it;
                return -1
            }

            function ds(k, J, Y) {
                return J === J ? G0(k, J, Y) : Ao(k, _g, Y)
            }

            function N0(k, J, Y, Te) {
                for (var Be = Y - 1, it = k.length; ++Be < it;)
                    if (Te(k[Be], J)) return Be;
                return -1
            }

            function _g(k) {
                return k !== k
            }

            function Eg(k, J) {
                var Y = k == null ? 0 : k.length;
                return Y ? hu(k, J) / Y : Fe
            }

            function fu(k) {
                return function(J) {
                    return J == null ? r : J[k]
                }
            }

            function du(k) {
                return function(J) {
                    return k == null ? r : k[J]
                }
            }

            function bg(k, J, Y, Te, Be) {
                return Be(k, function(it, Ft, pt) {
                    Y = Te ? (Te = !1, it) : J(Y, it, Ft, pt)
                }), Y
            }

            function R0(k, J) {
                var Y = k.length;
                for (k.sort(J); Y--;) k[Y] = k[Y].value;
                return k
            }

            function hu(k, J) {
                for (var Y, Te = -1, Be = k.length; ++Te < Be;) {
                    var it = J(k[Te]);
                    it !== r && (Y = Y === r ? it : Y + it)
                }
                return Y
            }

            function pu(k, J) {
                for (var Y = -1, Te = Array(k); ++Y < k;) Te[Y] = J(Y);
                return Te
            }

            function P0(k, J) {
                return wt(J, function(Y) {
                    return [Y, k[Y]]
                })
            }

            function Tg(k) {
                return k && k.slice(0, $g(k) + 1).replace(eu, "")
            }

            function Ar(k) {
                return function(J) {
                    return k(J)
                }
            }

            function gu(k, J) {
                return wt(J, function(Y) {
                    return k[Y]
                })
            }

            function ha(k, J) {
                return k.has(J)
            }

            function Sg(k, J) {
                for (var Y = -1, Te = k.length; ++Y < Te && ds(J, k[Y], 0) > -1;);
                return Y
            }

            function Og(k, J) {
                for (var Y = k.length; Y-- && ds(J, k[Y], 0) > -1;);
                return Y
            }

            function L0(k, J) {
                for (var Y = k.length, Te = 0; Y--;) k[Y] === J && ++Te;
                return Te
            }
            var k0 = du(v0),
                D0 = du(y0);

            function x0(k) {
                return "\\" + E0[k]
            }

            function M0(k, J) {
                return k == null ? r : k[J]
            }

            function hs(k) {
                return h0.test(k)
            }

            function F0(k) {
                return p0.test(k)
            }

            function B0(k) {
                for (var J, Y = []; !(J = k.next()).done;) Y.push(J.value);
                return Y
            }

            function mu(k) {
                var J = -1,
                    Y = Array(k.size);
                return k.forEach(function(Te, Be) {
                    Y[++J] = [Be, Te]
                }), Y
            }

            function wg(k, J) {
                return function(Y) {
                    return k(J(Y))
                }
            }

            function Kn(k, J) {
                for (var Y = -1, Te = k.length, Be = 0, it = []; ++Y < Te;) {
                    var Ft = k[Y];
                    (Ft === J || Ft === g) && (k[Y] = g, it[Be++] = Y)
                }
                return it
            }

            function No(k) {
                var J = -1,
                    Y = Array(k.size);
                return k.forEach(function(Te) {
                    Y[++J] = Te
                }), Y
            }

            function U0(k) {
                var J = -1,
                    Y = Array(k.size);
                return k.forEach(function(Te) {
                    Y[++J] = [Te, Te]
                }), Y
            }

            function G0(k, J, Y) {
                for (var Te = Y - 1, Be = k.length; ++Te < Be;)
                    if (k[Te] === J) return Te;
                return -1
            }

            function j0(k, J, Y) {
                for (var Te = Y + 1; Te--;)
                    if (k[Te] === J) return Te;
                return Te
            }

            function ps(k) {
                return hs(k) ? H0(k) : C0(k)
            }

            function en(k) {
                return hs(k) ? K0(k) : I0(k)
            }

            function $g(k) {
                for (var J = k.length; J-- && Lw.test(k.charAt(J)););
                return J
            }
            var W0 = du(_0);

            function H0(k) {
                for (var J = su.lastIndex = 0; su.test(k);) ++J;
                return J
            }

            function K0(k) {
                return k.match(su) || []
            }

            function V0(k) {
                return k.match(d0) || []
            }
            var q0 = function k(J) {
                    J = J == null ? Jt : gs.defaults(Jt.Object(), J, gs.pick(Jt, g0));
                    var Y = J.Array,
                        Te = J.Date,
                        Be = J.Error,
                        it = J.Function,
                        Ft = J.Math,
                        pt = J.Object,
                        vu = J.RegExp,
                        Y0 = J.String,
                        jr = J.TypeError,
                        Ro = Y.prototype,
                        z0 = it.prototype,
                        ms = pt.prototype,
                        Po = J["__core-js_shared__"],
                        Lo = z0.toString,
                        dt = ms.hasOwnProperty,
                        X0 = 0,
                        Cg = function() {
                            var i = /[^.]+$/.exec(Po && Po.keys && Po.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        ko = ms.toString,
                        J0 = Lo.call(pt),
                        Q0 = Jt._,
                        Z0 = vu("^" + Lo.call(dt).replace(Zc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Do = ug ? J.Buffer : r,
                        Vn = J.Symbol,
                        xo = J.Uint8Array,
                        Ig = Do ? Do.allocUnsafe : r,
                        Mo = wg(pt.getPrototypeOf, pt),
                        Ag = pt.create,
                        Ng = ms.propertyIsEnumerable,
                        Fo = Ro.splice,
                        Rg = Vn ? Vn.isConcatSpreadable : r,
                        pa = Vn ? Vn.iterator : r,
                        Ci = Vn ? Vn.toStringTag : r,
                        Bo = function() {
                            try {
                                var i = Pi(pt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        e1 = J.clearTimeout !== Jt.clearTimeout && J.clearTimeout,
                        t1 = Te && Te.now !== Jt.Date.now && Te.now,
                        r1 = J.setTimeout !== Jt.setTimeout && J.setTimeout,
                        Uo = Ft.ceil,
                        Go = Ft.floor,
                        yu = pt.getOwnPropertySymbols,
                        n1 = Do ? Do.isBuffer : r,
                        Pg = J.isFinite,
                        i1 = Ro.join,
                        s1 = wg(pt.keys, pt),
                        Bt = Ft.max,
                        sr = Ft.min,
                        a1 = Te.now,
                        o1 = J.parseInt,
                        Lg = Ft.random,
                        l1 = Ro.reverse,
                        _u = Pi(J, "DataView"),
                        ga = Pi(J, "Map"),
                        Eu = Pi(J, "Promise"),
                        vs = Pi(J, "Set"),
                        ma = Pi(J, "WeakMap"),
                        va = Pi(pt, "create"),
                        jo = ma && new ma,
                        ys = {},
                        c1 = Li(_u),
                        u1 = Li(ga),
                        f1 = Li(Eu),
                        d1 = Li(vs),
                        h1 = Li(ma),
                        Wo = Vn ? Vn.prototype : r,
                        ya = Wo ? Wo.valueOf : r,
                        kg = Wo ? Wo.toString : r;

                    function y(i) {
                        if (At(i) && !Ge(i) && !(i instanceof Ye)) {
                            if (i instanceof Wr) return i;
                            if (dt.call(i, "__wrapped__")) return Dm(i)
                        }
                        return new Wr(i)
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

                    function Ho() {}

                    function Wr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    y.templateSettings = {
                        escape: Cw,
                        evaluate: Iw,
                        interpolate: Wp,
                        variable: "",
                        imports: {
                            _: y
                        }
                    }, y.prototype = Ho.prototype, y.prototype.constructor = y, Wr.prototype = _s(Ho.prototype), Wr.prototype.constructor = Wr;

                    function Ye(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = []
                    }

                    function p1() {
                        var i = new Ye(this.__wrapped__);
                        return i.__actions__ = yr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = yr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = yr(this.__views__), i
                    }

                    function g1() {
                        if (this.__filtered__) {
                            var i = new Ye(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function m1() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            c = Ge(i),
                            d = a < 0,
                            v = c ? i.length : 0,
                            E = I$(0, v, this.__views__),
                            I = E.start,
                            N = E.end,
                            D = N - I,
                            ee = d ? N : I - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = sr(D, this.__takeCount__);
                        if (!c || !d && v == D && we == D) return im(i, this.__actions__);
                        var Pe = [];
                        e: for (; D-- && me < we;) {
                            ee += a;
                            for (var Ke = -1, Le = i[ee]; ++Ke < ae;) {
                                var qe = te[Ke],
                                    Xe = qe.iteratee,
                                    Pr = qe.type,
                                    pr = Xe(Le);
                                if (Pr == ie) Le = pr;
                                else if (!pr) {
                                    if (Pr == F) continue e;
                                    break e
                                }
                            }
                            Pe[me++] = Le
                        }
                        return Pe
                    }
                    Ye.prototype = _s(Ho.prototype), Ye.prototype.constructor = Ye;

                    function Ii(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function v1() {
                        this.__data__ = va ? va(null) : {}, this.size = 0
                    }

                    function y1(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function _1(i) {
                        var a = this.__data__;
                        if (va) {
                            var c = a[i];
                            return c === f ? r : c
                        }
                        return dt.call(a, i) ? a[i] : r
                    }

                    function E1(i) {
                        var a = this.__data__;
                        return va ? a[i] !== r : dt.call(a, i)
                    }

                    function b1(i, a) {
                        var c = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, c[i] = va && a === r ? f : a, this
                    }
                    Ii.prototype.clear = v1, Ii.prototype.delete = y1, Ii.prototype.get = _1, Ii.prototype.has = E1, Ii.prototype.set = b1;

                    function $n(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function T1() {
                        this.__data__ = [], this.size = 0
                    }

                    function S1(i) {
                        var a = this.__data__,
                            c = Ko(a, i);
                        if (c < 0) return !1;
                        var d = a.length - 1;
                        return c == d ? a.pop() : Fo.call(a, c, 1), --this.size, !0
                    }

                    function O1(i) {
                        var a = this.__data__,
                            c = Ko(a, i);
                        return c < 0 ? r : a[c][1]
                    }

                    function w1(i) {
                        return Ko(this.__data__, i) > -1
                    }

                    function $1(i, a) {
                        var c = this.__data__,
                            d = Ko(c, i);
                        return d < 0 ? (++this.size, c.push([i, a])) : c[d][1] = a, this
                    }
                    $n.prototype.clear = T1, $n.prototype.delete = S1, $n.prototype.get = O1, $n.prototype.has = w1, $n.prototype.set = $1;

                    function Cn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function C1() {
                        this.size = 0, this.__data__ = {
                            hash: new Ii,
                            map: new(ga || $n),
                            string: new Ii
                        }
                    }

                    function I1(i) {
                        var a = nl(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function A1(i) {
                        return nl(this, i).get(i)
                    }

                    function N1(i) {
                        return nl(this, i).has(i)
                    }

                    function R1(i, a) {
                        var c = nl(this, i),
                            d = c.size;
                        return c.set(i, a), this.size += c.size == d ? 0 : 1, this
                    }
                    Cn.prototype.clear = C1, Cn.prototype.delete = I1, Cn.prototype.get = A1, Cn.prototype.has = N1, Cn.prototype.set = R1;

                    function Ai(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.__data__ = new Cn; ++a < c;) this.add(i[a])
                    }

                    function P1(i) {
                        return this.__data__.set(i, f), this
                    }

                    function L1(i) {
                        return this.__data__.has(i)
                    }
                    Ai.prototype.add = Ai.prototype.push = P1, Ai.prototype.has = L1;

                    function tn(i) {
                        var a = this.__data__ = new $n(i);
                        this.size = a.size
                    }

                    function k1() {
                        this.__data__ = new $n, this.size = 0
                    }

                    function D1(i) {
                        var a = this.__data__,
                            c = a.delete(i);
                        return this.size = a.size, c
                    }

                    function x1(i) {
                        return this.__data__.get(i)
                    }

                    function M1(i) {
                        return this.__data__.has(i)
                    }

                    function F1(i, a) {
                        var c = this.__data__;
                        if (c instanceof $n) {
                            var d = c.__data__;
                            if (!ga || d.length < s - 1) return d.push([i, a]), this.size = ++c.size, this;
                            c = this.__data__ = new Cn(d)
                        }
                        return c.set(i, a), this.size = c.size, this
                    }
                    tn.prototype.clear = k1, tn.prototype.delete = D1, tn.prototype.get = x1, tn.prototype.has = M1, tn.prototype.set = F1;

                    function Dg(i, a) {
                        var c = Ge(i),
                            d = !c && ki(i),
                            v = !c && !d && Jn(i),
                            E = !c && !d && !v && Ss(i),
                            I = c || d || v || E,
                            N = I ? pu(i.length, Y0) : [],
                            D = N.length;
                        for (var ee in i)(a || dt.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || E && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Rn(ee, D))) && N.push(ee);
                        return N
                    }

                    function xg(i) {
                        var a = i.length;
                        return a ? i[Ru(0, a - 1)] : r
                    }

                    function B1(i, a) {
                        return il(yr(i), Ni(a, 0, i.length))
                    }

                    function U1(i) {
                        return il(yr(i))
                    }

                    function bu(i, a, c) {
                        (c !== r && !rn(i[a], c) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function _a(i, a, c) {
                        var d = i[a];
                        (!(dt.call(i, a) && rn(d, c)) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function Ko(i, a) {
                        for (var c = i.length; c--;)
                            if (rn(i[c][0], a)) return c;
                        return -1
                    }

                    function G1(i, a, c, d) {
                        return qn(i, function(v, E, I) {
                            a(d, v, c(v), I)
                        }), d
                    }

                    function Mg(i, a) {
                        return i && pn(a, Kt(a), i)
                    }

                    function j1(i, a) {
                        return i && pn(a, Er(a), i)
                    }

                    function In(i, a, c) {
                        a == "__proto__" && Bo ? Bo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: c,
                            writable: !0
                        }) : i[a] = c
                    }

                    function Tu(i, a) {
                        for (var c = -1, d = a.length, v = Y(d), E = i == null; ++c < d;) v[c] = E ? r : rf(i, a[c]);
                        return v
                    }

                    function Ni(i, a, c) {
                        return i === i && (c !== r && (i = i <= c ? i : c), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Hr(i, a, c, d, v, E) {
                        var I, N = a & _,
                            D = a & b,
                            ee = a & $;
                        if (c && (I = v ? c(i, d, v, E) : c(i)), I !== r) return I;
                        if (!Ct(i)) return i;
                        var te = Ge(i);
                        if (te) {
                            if (I = N$(i), !N) return yr(i, I)
                        } else {
                            var ae = ar(i),
                                me = ae == Dt || ae == m;
                            if (Jn(i)) return om(i, N);
                            if (ae == B || ae == nr || me && !v) {
                                if (I = D || me ? {} : $m(i), !N) return D ? _$(i, j1(I, i)) : y$(i, Mg(I, i))
                            } else {
                                if (!vt[ae]) return v ? i : {};
                                I = R$(i, ae, N)
                            }
                        }
                        E || (E = new tn);
                        var we = E.get(i);
                        if (we) return we;
                        E.set(i, I), tv(i) ? i.forEach(function(Le) {
                            I.add(Hr(Le, a, c, Le, i, E))
                        }) : Zm(i) && i.forEach(function(Le, qe) {
                            I.set(qe, Hr(Le, a, c, qe, i, E))
                        });
                        var Pe = ee ? D ? ju : Gu : D ? Er : Kt,
                            Ke = te ? r : Pe(i);
                        return Gr(Ke || i, function(Le, qe) {
                            Ke && (qe = Le, Le = i[qe]), _a(I, qe, Hr(Le, a, c, qe, i, E))
                        }), I
                    }

                    function W1(i) {
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
                                E = a[v],
                                I = i[v];
                            if (I === r && !(v in i) || !E(I)) return !1
                        }
                        return !0
                    }

                    function Bg(i, a, c) {
                        if (typeof i != "function") throw new jr(l);
                        return $a(function() {
                            i.apply(r, c)
                        }, a)
                    }

                    function Ea(i, a, c, d) {
                        var v = -1,
                            E = Io,
                            I = !0,
                            N = i.length,
                            D = [],
                            ee = a.length;
                        if (!N) return D;
                        c && (a = wt(a, Ar(c))), d ? (E = lu, I = !1) : a.length >= s && (E = ha, I = !1, a = new Ai(a));
                        e: for (; ++v < N;) {
                            var te = i[v],
                                ae = c == null ? te : c(te);
                            if (te = d || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = ee; me--;)
                                    if (a[me] === ae) continue e;
                                D.push(te)
                            } else E(a, ae, d) || D.push(te)
                        }
                        return D
                    }
                    var qn = dm(hn),
                        Ug = dm(Ou, !0);

                    function H1(i, a) {
                        var c = !0;
                        return qn(i, function(d, v, E) {
                            return c = !!a(d, v, E), c
                        }), c
                    }

                    function Vo(i, a, c) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var E = i[d],
                                I = a(E);
                            if (I != null && (N === r ? I === I && !Rr(I) : c(I, N))) var N = I,
                                D = E
                        }
                        return D
                    }

                    function K1(i, a, c, d) {
                        var v = i.length;
                        for (c = We(c), c < 0 && (c = -c > v ? 0 : v + c), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = c > d ? 0 : nv(d); c < d;) i[c++] = a;
                        return i
                    }

                    function Gg(i, a) {
                        var c = [];
                        return qn(i, function(d, v, E) {
                            a(d, v, E) && c.push(d)
                        }), c
                    }

                    function Qt(i, a, c, d, v) {
                        var E = -1,
                            I = i.length;
                        for (c || (c = L$), v || (v = []); ++E < I;) {
                            var N = i[E];
                            a > 0 && c(N) ? a > 1 ? Qt(N, a - 1, c, d, v) : Hn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var Su = hm(),
                        jg = hm(!0);

                    function hn(i, a) {
                        return i && Su(i, a, Kt)
                    }

                    function Ou(i, a) {
                        return i && jg(i, a, Kt)
                    }

                    function qo(i, a) {
                        return Wn(a, function(c) {
                            return Pn(i[c])
                        })
                    }

                    function Ri(i, a) {
                        a = zn(a, i);
                        for (var c = 0, d = a.length; i != null && c < d;) i = i[gn(a[c++])];
                        return c && c == d ? i : r
                    }

                    function Wg(i, a, c) {
                        var d = a(i);
                        return Ge(i) ? d : Hn(d, c(i))
                    }

                    function dr(i) {
                        return i == null ? i === r ? he : x : Ci && Ci in pt(i) ? C$(i) : U$(i)
                    }

                    function wu(i, a) {
                        return i > a
                    }

                    function V1(i, a) {
                        return i != null && dt.call(i, a)
                    }

                    function q1(i, a) {
                        return i != null && a in pt(i)
                    }

                    function Y1(i, a, c) {
                        return i >= sr(a, c) && i < Bt(a, c)
                    }

                    function $u(i, a, c) {
                        for (var d = c ? lu : Io, v = i[0].length, E = i.length, I = E, N = Y(E), D = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && a && (te = wt(te, Ar(a))), D = sr(te.length, D), N[I] = !c && (a || v >= 120 && te.length >= 120) ? new Ai(I && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = N[0];
                        e: for (; ++ae < v && ee.length < D;) {
                            var we = te[ae],
                                Pe = a ? a(we) : we;
                            if (we = c || we !== 0 ? we : 0, !(me ? ha(me, Pe) : d(ee, Pe, c))) {
                                for (I = E; --I;) {
                                    var Ke = N[I];
                                    if (!(Ke ? ha(Ke, Pe) : d(i[I], Pe, c))) continue e
                                }
                                me && me.push(Pe), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function z1(i, a, c, d) {
                        return hn(i, function(v, E, I) {
                            a(d, c(v), E, I)
                        }), d
                    }

                    function ba(i, a, c) {
                        a = zn(a, i), i = Nm(i, a);
                        var d = i == null ? i : i[gn(Vr(a))];
                        return d == null ? r : Ir(d, i, c)
                    }

                    function Hg(i) {
                        return At(i) && dr(i) == nr
                    }

                    function X1(i) {
                        return At(i) && dr(i) == xe
                    }

                    function J1(i) {
                        return At(i) && dr(i) == lt
                    }

                    function Ta(i, a, c, d, v) {
                        return i === a ? !0 : i == null || a == null || !At(i) && !At(a) ? i !== i && a !== a : Q1(i, a, c, d, Ta, v)
                    }

                    function Q1(i, a, c, d, v, E) {
                        var I = Ge(i),
                            N = Ge(a),
                            D = I ? vr : ar(i),
                            ee = N ? vr : ar(a);
                        D = D == nr ? B : D, ee = ee == nr ? B : ee;
                        var te = D == B,
                            ae = ee == B,
                            me = D == ee;
                        if (me && Jn(i)) {
                            if (!Jn(a)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return E || (E = new tn), I || Ss(i) ? Sm(i, a, c, d, v, E) : w$(i, a, D, c, d, v, E);
                        if (!(c & P)) {
                            var we = te && dt.call(i, "__wrapped__"),
                                Pe = ae && dt.call(a, "__wrapped__");
                            if (we || Pe) {
                                var Ke = we ? i.value() : i,
                                    Le = Pe ? a.value() : a;
                                return E || (E = new tn), v(Ke, Le, c, d, E)
                            }
                        }
                        return me ? (E || (E = new tn), $$(i, a, c, d, v, E)) : !1
                    }

                    function Z1(i) {
                        return At(i) && ar(i) == p
                    }

                    function Cu(i, a, c, d) {
                        var v = c.length,
                            E = v,
                            I = !d;
                        if (i == null) return !E;
                        for (i = pt(i); v--;) {
                            var N = c[v];
                            if (I && N[2] ? N[1] !== i[N[0]] : !(N[0] in i)) return !1
                        }
                        for (; ++v < E;) {
                            N = c[v];
                            var D = N[0],
                                ee = i[D],
                                te = N[1];
                            if (I && N[2]) {
                                if (ee === r && !(D in i)) return !1
                            } else {
                                var ae = new tn;
                                if (d) var me = d(ee, te, D, i, a, ae);
                                if (!(me === r ? Ta(te, ee, P | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Kg(i) {
                        if (!Ct(i) || D$(i)) return !1;
                        var a = Pn(i) ? Z0 : Ww;
                        return a.test(Li(i))
                    }

                    function e$(i) {
                        return At(i) && dr(i) == se
                    }

                    function t$(i) {
                        return At(i) && ar(i) == re
                    }

                    function r$(i) {
                        return At(i) && ul(i.length) && !!bt[dr(i)]
                    }

                    function Vg(i) {
                        return typeof i == "function" ? i : i == null ? br : typeof i == "object" ? Ge(i) ? zg(i[0], i[1]) : Yg(i) : pv(i)
                    }

                    function Iu(i) {
                        if (!wa(i)) return s1(i);
                        var a = [];
                        for (var c in pt(i)) dt.call(i, c) && c != "constructor" && a.push(c);
                        return a
                    }

                    function n$(i) {
                        if (!Ct(i)) return B$(i);
                        var a = wa(i),
                            c = [];
                        for (var d in i) d == "constructor" && (a || !dt.call(i, d)) || c.push(d);
                        return c
                    }

                    function Au(i, a) {
                        return i < a
                    }

                    function qg(i, a) {
                        var c = -1,
                            d = _r(i) ? Y(i.length) : [];
                        return qn(i, function(v, E, I) {
                            d[++c] = a(v, E, I)
                        }), d
                    }

                    function Yg(i) {
                        var a = Hu(i);
                        return a.length == 1 && a[0][2] ? Im(a[0][0], a[0][1]) : function(c) {
                            return c === i || Cu(c, i, a)
                        }
                    }

                    function zg(i, a) {
                        return Vu(i) && Cm(a) ? Im(gn(i), a) : function(c) {
                            var d = rf(c, i);
                            return d === r && d === a ? nf(c, i) : Ta(a, d, P | M)
                        }
                    }

                    function Yo(i, a, c, d, v) {
                        i !== a && Su(a, function(E, I) {
                            if (v || (v = new tn), Ct(E)) i$(i, a, I, c, Yo, d, v);
                            else {
                                var N = d ? d(Yu(i, I), E, I + "", i, a, v) : r;
                                N === r && (N = E), bu(i, I, N)
                            }
                        }, Er)
                    }

                    function i$(i, a, c, d, v, E, I) {
                        var N = Yu(i, c),
                            D = Yu(a, c),
                            ee = I.get(D);
                        if (ee) {
                            bu(i, c, ee);
                            return
                        }
                        var te = E ? E(N, D, c + "", i, a, I) : r,
                            ae = te === r;
                        if (ae) {
                            var me = Ge(D),
                                we = !me && Jn(D),
                                Pe = !me && !we && Ss(D);
                            te = D, me || we || Pe ? Ge(N) ? te = N : Nt(N) ? te = yr(N) : we ? (ae = !1, te = om(D, !0)) : Pe ? (ae = !1, te = lm(D, !0)) : te = [] : Ca(D) || ki(D) ? (te = N, ki(N) ? te = iv(N) : (!Ct(N) || Pn(N)) && (te = $m(D))) : ae = !1
                        }
                        ae && (I.set(D, te), v(te, D, d, E, I), I.delete(D)), bu(i, c, te)
                    }

                    function Xg(i, a) {
                        var c = i.length;
                        if (!!c) return a += a < 0 ? c : 0, Rn(a, c) ? i[a] : r
                    }

                    function Jg(i, a, c) {
                        a.length ? a = wt(a, function(E) {
                            return Ge(E) ? function(I) {
                                return Ri(I, E.length === 1 ? E[0] : E)
                            } : E
                        }) : a = [br];
                        var d = -1;
                        a = wt(a, Ar(Re()));
                        var v = qg(i, function(E, I, N) {
                            var D = wt(a, function(ee) {
                                return ee(E)
                            });
                            return {
                                criteria: D,
                                index: ++d,
                                value: E
                            }
                        });
                        return R0(v, function(E, I) {
                            return v$(E, I, c)
                        })
                    }

                    function s$(i, a) {
                        return Qg(i, a, function(c, d) {
                            return nf(i, d)
                        })
                    }

                    function Qg(i, a, c) {
                        for (var d = -1, v = a.length, E = {}; ++d < v;) {
                            var I = a[d],
                                N = Ri(i, I);
                            c(N, I) && Sa(E, zn(I, i), N)
                        }
                        return E
                    }

                    function a$(i) {
                        return function(a) {
                            return Ri(a, i)
                        }
                    }

                    function Nu(i, a, c, d) {
                        var v = d ? N0 : ds,
                            E = -1,
                            I = a.length,
                            N = i;
                        for (i === a && (a = yr(a)), c && (N = wt(i, Ar(c))); ++E < I;)
                            for (var D = 0, ee = a[E], te = c ? c(ee) : ee;
                                (D = v(N, te, D, d)) > -1;) N !== i && Fo.call(N, D, 1), Fo.call(i, D, 1);
                        return i
                    }

                    function Zg(i, a) {
                        for (var c = i ? a.length : 0, d = c - 1; c--;) {
                            var v = a[c];
                            if (c == d || v !== E) {
                                var E = v;
                                Rn(v) ? Fo.call(i, v, 1) : ku(i, v)
                            }
                        }
                        return i
                    }

                    function Ru(i, a) {
                        return i + Go(Lg() * (a - i + 1))
                    }

                    function o$(i, a, c, d) {
                        for (var v = -1, E = Bt(Uo((a - i) / (c || 1)), 0), I = Y(E); E--;) I[d ? E : ++v] = i, i += c;
                        return I
                    }

                    function Pu(i, a) {
                        var c = "";
                        if (!i || a < 1 || a > ve) return c;
                        do a % 2 && (c += i), a = Go(a / 2), a && (i += i); while (a);
                        return c
                    }

                    function Ve(i, a) {
                        return zu(Am(i, a, br), i + "")
                    }

                    function l$(i) {
                        return xg(Os(i))
                    }

                    function c$(i, a) {
                        var c = Os(i);
                        return il(c, Ni(a, 0, c.length))
                    }

                    function Sa(i, a, c, d) {
                        if (!Ct(i)) return i;
                        a = zn(a, i);
                        for (var v = -1, E = a.length, I = E - 1, N = i; N != null && ++v < E;) {
                            var D = gn(a[v]),
                                ee = c;
                            if (D === "__proto__" || D === "constructor" || D === "prototype") return i;
                            if (v != I) {
                                var te = N[D];
                                ee = d ? d(te, D, N) : r, ee === r && (ee = Ct(te) ? te : Rn(a[v + 1]) ? [] : {})
                            }
                            _a(N, D, ee), N = N[D]
                        }
                        return i
                    }
                    var em = jo ? function(i, a) {
                            return jo.set(i, a), i
                        } : br,
                        u$ = Bo ? function(i, a) {
                            return Bo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: af(a),
                                writable: !0
                            })
                        } : br;

                    function f$(i) {
                        return il(Os(i))
                    }

                    function Kr(i, a, c) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), c = c > v ? v : c, c < 0 && (c += v), v = a > c ? 0 : c - a >>> 0, a >>>= 0;
                        for (var E = Y(v); ++d < v;) E[d] = i[d + a];
                        return E
                    }

                    function d$(i, a) {
                        var c;
                        return qn(i, function(d, v, E) {
                            return c = a(d, v, E), !c
                        }), !!c
                    }

                    function zo(i, a, c) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= It) {
                            for (; d < v;) {
                                var E = d + v >>> 1,
                                    I = i[E];
                                I !== null && !Rr(I) && (c ? I <= a : I < a) ? d = E + 1 : v = E
                            }
                            return v
                        }
                        return Lu(i, a, br, c)
                    }

                    function Lu(i, a, c, d) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        a = c(a);
                        for (var I = a !== a, N = a === null, D = Rr(a), ee = a === r; v < E;) {
                            var te = Go((v + E) / 2),
                                ae = c(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Pe = ae === ae,
                                Ke = Rr(ae);
                            if (I) var Le = d || Pe;
                            else ee ? Le = Pe && (d || me) : N ? Le = Pe && me && (d || !we) : D ? Le = Pe && me && !we && (d || !Ke) : we || Ke ? Le = !1 : Le = d ? ae <= a : ae < a;
                            Le ? v = te + 1 : E = te
                        }
                        return sr(E, rt)
                    }

                    function tm(i, a) {
                        for (var c = -1, d = i.length, v = 0, E = []; ++c < d;) {
                            var I = i[c],
                                N = a ? a(I) : I;
                            if (!c || !rn(N, D)) {
                                var D = N;
                                E[v++] = I === 0 ? 0 : I
                            }
                        }
                        return E
                    }

                    function rm(i) {
                        return typeof i == "number" ? i : Rr(i) ? Fe : +i
                    }

                    function Nr(i) {
                        if (typeof i == "string") return i;
                        if (Ge(i)) return wt(i, Nr) + "";
                        if (Rr(i)) return kg ? kg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Yn(i, a, c) {
                        var d = -1,
                            v = Io,
                            E = i.length,
                            I = !0,
                            N = [],
                            D = N;
                        if (c) I = !1, v = lu;
                        else if (E >= s) {
                            var ee = a ? null : S$(i);
                            if (ee) return No(ee);
                            I = !1, v = ha, D = new Ai
                        } else D = a ? [] : N;
                        e: for (; ++d < E;) {
                            var te = i[d],
                                ae = a ? a(te) : te;
                            if (te = c || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = D.length; me--;)
                                    if (D[me] === ae) continue e;
                                a && D.push(ae), N.push(te)
                            } else v(D, ae, c) || (D !== N && D.push(ae), N.push(te))
                        }
                        return N
                    }

                    function ku(i, a) {
                        return a = zn(a, i), i = Nm(i, a), i == null || delete i[gn(Vr(a))]
                    }

                    function nm(i, a, c, d) {
                        return Sa(i, a, c(Ri(i, a)), d)
                    }

                    function Xo(i, a, c, d) {
                        for (var v = i.length, E = d ? v : -1;
                            (d ? E-- : ++E < v) && a(i[E], E, i););
                        return c ? Kr(i, d ? 0 : E, d ? E + 1 : v) : Kr(i, d ? E + 1 : 0, d ? v : E)
                    }

                    function im(i, a) {
                        var c = i;
                        return c instanceof Ye && (c = c.value()), cu(a, function(d, v) {
                            return v.func.apply(v.thisArg, Hn([d], v.args))
                        }, c)
                    }

                    function Du(i, a, c) {
                        var d = i.length;
                        if (d < 2) return d ? Yn(i[0]) : [];
                        for (var v = -1, E = Y(d); ++v < d;)
                            for (var I = i[v], N = -1; ++N < d;) N != v && (E[v] = Ea(E[v] || I, i[N], a, c));
                        return Yn(Qt(E, 1), a, c)
                    }

                    function sm(i, a, c) {
                        for (var d = -1, v = i.length, E = a.length, I = {}; ++d < v;) {
                            var N = d < E ? a[d] : r;
                            c(I, i[d], N)
                        }
                        return I
                    }

                    function xu(i) {
                        return Nt(i) ? i : []
                    }

                    function Mu(i) {
                        return typeof i == "function" ? i : br
                    }

                    function zn(i, a) {
                        return Ge(i) ? i : Vu(i, a) ? [i] : km(ct(i))
                    }
                    var h$ = Ve;

                    function Xn(i, a, c) {
                        var d = i.length;
                        return c = c === r ? d : c, !a && c >= d ? i : Kr(i, a, c)
                    }
                    var am = e1 || function(i) {
                        return Jt.clearTimeout(i)
                    };

                    function om(i, a) {
                        if (a) return i.slice();
                        var c = i.length,
                            d = Ig ? Ig(c) : new i.constructor(c);
                        return i.copy(d), d
                    }

                    function Fu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new xo(a).set(new xo(i)), a
                    }

                    function p$(i, a) {
                        var c = a ? Fu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.byteLength)
                    }

                    function g$(i) {
                        var a = new i.constructor(i.source, Hp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function m$(i) {
                        return ya ? pt(ya.call(i)) : {}
                    }

                    function lm(i, a) {
                        var c = a ? Fu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.length)
                    }

                    function cm(i, a) {
                        if (i !== a) {
                            var c = i !== r,
                                d = i === null,
                                v = i === i,
                                E = Rr(i),
                                I = a !== r,
                                N = a === null,
                                D = a === a,
                                ee = Rr(a);
                            if (!N && !ee && !E && i > a || E && I && D && !N && !ee || d && I && D || !c && D || !v) return 1;
                            if (!d && !E && !ee && i < a || ee && c && v && !d && !E || N && c && v || !I && v || !D) return -1
                        }
                        return 0
                    }

                    function v$(i, a, c) {
                        for (var d = -1, v = i.criteria, E = a.criteria, I = v.length, N = c.length; ++d < I;) {
                            var D = cm(v[d], E[d]);
                            if (D) {
                                if (d >= N) return D;
                                var ee = c[d];
                                return D * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function um(i, a, c, d) {
                        for (var v = -1, E = i.length, I = c.length, N = -1, D = a.length, ee = Bt(E - I, 0), te = Y(D + ee), ae = !d; ++N < D;) te[N] = a[N];
                        for (; ++v < I;)(ae || v < E) && (te[c[v]] = i[v]);
                        for (; ee--;) te[N++] = i[v++];
                        return te
                    }

                    function fm(i, a, c, d) {
                        for (var v = -1, E = i.length, I = -1, N = c.length, D = -1, ee = a.length, te = Bt(E - N, 0), ae = Y(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++D < ee;) ae[we + D] = a[D];
                        for (; ++I < N;)(me || v < E) && (ae[we + c[I]] = i[v++]);
                        return ae
                    }

                    function yr(i, a) {
                        var c = -1,
                            d = i.length;
                        for (a || (a = Y(d)); ++c < d;) a[c] = i[c];
                        return a
                    }

                    function pn(i, a, c, d) {
                        var v = !c;
                        c || (c = {});
                        for (var E = -1, I = a.length; ++E < I;) {
                            var N = a[E],
                                D = d ? d(c[N], i[N], N, c, i) : r;
                            D === r && (D = i[N]), v ? In(c, N, D) : _a(c, N, D)
                        }
                        return c
                    }

                    function y$(i, a) {
                        return pn(i, Ku(i), a)
                    }

                    function _$(i, a) {
                        return pn(i, Om(i), a)
                    }

                    function Jo(i, a) {
                        return function(c, d) {
                            var v = Ge(c) ? O0 : G1,
                                E = a ? a() : {};
                            return v(c, i, Re(d, 2), E)
                        }
                    }

                    function Es(i) {
                        return Ve(function(a, c) {
                            var d = -1,
                                v = c.length,
                                E = v > 1 ? c[v - 1] : r,
                                I = v > 2 ? c[2] : r;
                            for (E = i.length > 3 && typeof E == "function" ? (v--, E) : r, I && hr(c[0], c[1], I) && (E = v < 3 ? r : E, v = 1), a = pt(a); ++d < v;) {
                                var N = c[d];
                                N && i(a, N, d, E)
                            }
                            return a
                        })
                    }

                    function dm(i, a) {
                        return function(c, d) {
                            if (c == null) return c;
                            if (!_r(c)) return i(c, d);
                            for (var v = c.length, E = a ? v : -1, I = pt(c);
                                (a ? E-- : ++E < v) && d(I[E], E, I) !== !1;);
                            return c
                        }
                    }

                    function hm(i) {
                        return function(a, c, d) {
                            for (var v = -1, E = pt(a), I = d(a), N = I.length; N--;) {
                                var D = I[i ? N : ++v];
                                if (c(E[D], D, E) === !1) break
                            }
                            return a
                        }
                    }

                    function E$(i, a, c) {
                        var d = a & U,
                            v = Oa(i);

                        function E() {
                            var I = this && this !== Jt && this instanceof E ? v : i;
                            return I.apply(d ? c : this, arguments)
                        }
                        return E
                    }

                    function pm(i) {
                        return function(a) {
                            a = ct(a);
                            var c = hs(a) ? en(a) : r,
                                d = c ? c[0] : a.charAt(0),
                                v = c ? Xn(c, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function bs(i) {
                        return function(a) {
                            return cu(dv(fv(a).replace(u0, "")), i, "")
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

                    function b$(i, a, c) {
                        var d = Oa(i);

                        function v() {
                            for (var E = arguments.length, I = Y(E), N = E, D = Ts(v); N--;) I[N] = arguments[N];
                            var ee = E < 3 && I[0] !== D && I[E - 1] !== D ? [] : Kn(I, D);
                            if (E -= ee.length, E < c) return _m(i, a, Qo, v.placeholder, r, I, ee, r, r, c - E);
                            var te = this && this !== Jt && this instanceof v ? d : i;
                            return Ir(te, this, I)
                        }
                        return v
                    }

                    function gm(i) {
                        return function(a, c, d) {
                            var v = pt(a);
                            if (!_r(a)) {
                                var E = Re(c, 3);
                                a = Kt(a), c = function(N) {
                                    return E(v[N], N, v)
                                }
                            }
                            var I = i(a, c, d);
                            return I > -1 ? v[E ? a[I] : I] : r
                        }
                    }

                    function mm(i) {
                        return Nn(function(a) {
                            var c = a.length,
                                d = c,
                                v = Wr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var E = a[d];
                                if (typeof E != "function") throw new jr(l);
                                if (v && !I && rl(E) == "wrapper") var I = new Wr([], !0)
                            }
                            for (d = I ? d : c; ++d < c;) {
                                E = a[d];
                                var N = rl(E),
                                    D = N == "wrapper" ? Wu(E) : r;
                                D && qu(D[0]) && D[1] == (oe | X | j | le) && !D[4].length && D[9] == 1 ? I = I[rl(D[0])].apply(I, D[3]) : I = E.length == 1 && qu(E) ? I[N]() : I.thru(E)
                            }
                            return function() {
                                var ee = arguments,
                                    te = ee[0];
                                if (I && ee.length == 1 && Ge(te)) return I.plant(te).value();
                                for (var ae = 0, me = c ? a[ae].apply(this, ee) : te; ++ae < c;) me = a[ae].call(this, me);
                                return me
                            }
                        })
                    }

                    function Qo(i, a, c, d, v, E, I, N, D, ee) {
                        var te = a & oe,
                            ae = a & U,
                            me = a & C,
                            we = a & (X | W),
                            Pe = a & ue,
                            Ke = me ? r : Oa(i);

                        function Le() {
                            for (var qe = arguments.length, Xe = Y(qe), Pr = qe; Pr--;) Xe[Pr] = arguments[Pr];
                            if (we) var pr = Ts(Le),
                                Lr = L0(Xe, pr);
                            if (d && (Xe = um(Xe, d, v, we)), E && (Xe = fm(Xe, E, I, we)), qe -= Lr, we && qe < ee) {
                                var Rt = Kn(Xe, pr);
                                return _m(i, a, Qo, Le.placeholder, c, Xe, Rt, N, D, ee - qe)
                            }
                            var nn = ae ? c : this,
                                kn = me ? nn[i] : i;
                            return qe = Xe.length, N ? Xe = G$(Xe, N) : Pe && qe > 1 && Xe.reverse(), te && D < qe && (Xe.length = D), this && this !== Jt && this instanceof Le && (kn = Ke || Oa(kn)), kn.apply(nn, Xe)
                        }
                        return Le
                    }

                    function vm(i, a) {
                        return function(c, d) {
                            return z1(c, i, a(d), {})
                        }
                    }

                    function Zo(i, a) {
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

                    function Bu(i) {
                        return Nn(function(a) {
                            return a = wt(a, Ar(Re())), Ve(function(c) {
                                var d = this;
                                return i(a, function(v) {
                                    return Ir(v, d, c)
                                })
                            })
                        })
                    }

                    function el(i, a) {
                        a = a === r ? " " : Nr(a);
                        var c = a.length;
                        if (c < 2) return c ? Pu(a, i) : a;
                        var d = Pu(a, Uo(i / ps(a)));
                        return hs(a) ? Xn(en(d), 0, i).join("") : d.slice(0, i)
                    }

                    function T$(i, a, c, d) {
                        var v = a & U,
                            E = Oa(i);

                        function I() {
                            for (var N = -1, D = arguments.length, ee = -1, te = d.length, ae = Y(te + D), me = this && this !== Jt && this instanceof I ? E : i; ++ee < te;) ae[ee] = d[ee];
                            for (; D--;) ae[ee++] = arguments[++N];
                            return Ir(me, v ? c : this, ae)
                        }
                        return I
                    }

                    function ym(i) {
                        return function(a, c, d) {
                            return d && typeof d != "number" && hr(a, c, d) && (c = d = r), a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), d = d === r ? a < c ? 1 : -1 : Ln(d), o$(a, c, d, i)
                        }
                    }

                    function tl(i) {
                        return function(a, c) {
                            return typeof a == "string" && typeof c == "string" || (a = qr(a), c = qr(c)), i(a, c)
                        }
                    }

                    function _m(i, a, c, d, v, E, I, N, D, ee) {
                        var te = a & X,
                            ae = te ? I : r,
                            me = te ? r : I,
                            we = te ? E : r,
                            Pe = te ? r : E;
                        a |= te ? j : Q, a &= ~(te ? Q : j), a & q || (a &= ~(U | C));
                        var Ke = [i, a, v, we, ae, Pe, me, N, D, ee],
                            Le = c.apply(r, Ke);
                        return qu(i) && Rm(Le, Ke), Le.placeholder = d, Pm(Le, i, a)
                    }

                    function Uu(i) {
                        var a = Ft[i];
                        return function(c, d) {
                            if (c = qr(c), d = d == null ? 0 : sr(We(d), 292), d && Pg(c)) {
                                var v = (ct(c) + "e").split("e"),
                                    E = a(v[0] + "e" + (+v[1] + d));
                                return v = (ct(E) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(c)
                        }
                    }
                    var S$ = vs && 1 / No(new vs([, -0]))[1] == be ? function(i) {
                        return new vs(i)
                    } : cf;

                    function Em(i) {
                        return function(a) {
                            var c = ar(a);
                            return c == p ? mu(a) : c == re ? U0(a) : P0(a, i(a))
                        }
                    }

                    function An(i, a, c, d, v, E, I, N) {
                        var D = a & C;
                        if (!D && typeof i != "function") throw new jr(l);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(j | Q), d = v = r), I = I === r ? I : Bt(We(I), 0), N = N === r ? N : We(N), ee -= v ? v.length : 0, a & Q) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = D ? r : Wu(i),
                            we = [i, a, c, d, v, te, ae, E, I, N];
                        if (me && F$(we, me), i = we[0], a = we[1], c = we[2], d = we[3], v = we[4], N = we[9] = we[9] === r ? D ? 0 : i.length : Bt(we[9] - ee, 0), !N && a & (X | W) && (a &= ~(X | W)), !a || a == U) var Pe = E$(i, a, c);
                        else a == X || a == W ? Pe = b$(i, a, N) : (a == j || a == (U | j)) && !v.length ? Pe = T$(i, a, c, d) : Pe = Qo.apply(r, we);
                        var Ke = me ? em : Rm;
                        return Pm(Ke(Pe, we), i, a)
                    }

                    function bm(i, a, c, d) {
                        return i === r || rn(i, ms[c]) && !dt.call(d, c) ? a : i
                    }

                    function Tm(i, a, c, d, v, E) {
                        return Ct(i) && Ct(a) && (E.set(a, i), Yo(i, a, r, Tm, E), E.delete(a)), i
                    }

                    function O$(i) {
                        return Ca(i) ? r : i
                    }

                    function Sm(i, a, c, d, v, E) {
                        var I = c & P,
                            N = i.length,
                            D = a.length;
                        if (N != D && !(I && D > N)) return !1;
                        var ee = E.get(i),
                            te = E.get(a);
                        if (ee && te) return ee == a && te == i;
                        var ae = -1,
                            me = !0,
                            we = c & M ? new Ai : r;
                        for (E.set(i, a), E.set(a, i); ++ae < N;) {
                            var Pe = i[ae],
                                Ke = a[ae];
                            if (d) var Le = I ? d(Ke, Pe, ae, a, i, E) : d(Pe, Ke, ae, i, a, E);
                            if (Le !== r) {
                                if (Le) continue;
                                me = !1;
                                break
                            }
                            if (we) {
                                if (!uu(a, function(qe, Xe) {
                                        if (!ha(we, Xe) && (Pe === qe || v(Pe, qe, c, d, E))) return we.push(Xe)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Pe === Ke || v(Pe, Ke, c, d, E))) {
                                me = !1;
                                break
                            }
                        }
                        return E.delete(i), E.delete(a), me
                    }

                    function w$(i, a, c, d, v, E, I) {
                        switch (c) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case xe:
                                return !(i.byteLength != a.byteLength || !E(new xo(i), new xo(a)));
                            case Ot:
                            case lt:
                            case O:
                                return rn(+i, +a);
                            case Ht:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case A:
                                return i == a + "";
                            case p:
                                var N = mu;
                            case re:
                                var D = d & P;
                                if (N || (N = No), i.size != a.size && !D) return !1;
                                var ee = I.get(i);
                                if (ee) return ee == a;
                                d |= M, I.set(i, a);
                                var te = Sm(N(i), N(a), d, v, E, I);
                                return I.delete(i), te;
                            case V:
                                if (ya) return ya.call(i) == ya.call(a)
                        }
                        return !1
                    }

                    function $$(i, a, c, d, v, E) {
                        var I = c & P,
                            N = Gu(i),
                            D = N.length,
                            ee = Gu(a),
                            te = ee.length;
                        if (D != te && !I) return !1;
                        for (var ae = D; ae--;) {
                            var me = N[ae];
                            if (!(I ? me in a : dt.call(a, me))) return !1
                        }
                        var we = E.get(i),
                            Pe = E.get(a);
                        if (we && Pe) return we == a && Pe == i;
                        var Ke = !0;
                        E.set(i, a), E.set(a, i);
                        for (var Le = I; ++ae < D;) {
                            me = N[ae];
                            var qe = i[me],
                                Xe = a[me];
                            if (d) var Pr = I ? d(Xe, qe, me, a, i, E) : d(qe, Xe, me, i, a, E);
                            if (!(Pr === r ? qe === Xe || v(qe, Xe, c, d, E) : Pr)) {
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
                        return E.delete(i), E.delete(a), Ke
                    }

                    function Nn(i) {
                        return zu(Am(i, r, Fm), i + "")
                    }

                    function Gu(i) {
                        return Wg(i, Kt, Ku)
                    }

                    function ju(i) {
                        return Wg(i, Er, Om)
                    }
                    var Wu = jo ? function(i) {
                        return jo.get(i)
                    } : cf;

                    function rl(i) {
                        for (var a = i.name + "", c = ys[a], d = dt.call(ys, a) ? c.length : 0; d--;) {
                            var v = c[d],
                                E = v.func;
                            if (E == null || E == i) return v.name
                        }
                        return a
                    }

                    function Ts(i) {
                        var a = dt.call(y, "placeholder") ? y : i;
                        return a.placeholder
                    }

                    function Re() {
                        var i = y.iteratee || of;
                        return i = i === of ? Vg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function nl(i, a) {
                        var c = i.__data__;
                        return k$(a) ? c[typeof a == "string" ? "string" : "hash"] : c.map
                    }

                    function Hu(i) {
                        for (var a = Kt(i), c = a.length; c--;) {
                            var d = a[c],
                                v = i[d];
                            a[c] = [d, v, Cm(v)]
                        }
                        return a
                    }

                    function Pi(i, a) {
                        var c = M0(i, a);
                        return Kg(c) ? c : r
                    }

                    function C$(i) {
                        var a = dt.call(i, Ci),
                            c = i[Ci];
                        try {
                            i[Ci] = r;
                            var d = !0
                        } catch {}
                        var v = ko.call(i);
                        return d && (a ? i[Ci] = c : delete i[Ci]), v
                    }
                    var Ku = yu ? function(i) {
                            return i == null ? [] : (i = pt(i), Wn(yu(i), function(a) {
                                return Ng.call(i, a)
                            }))
                        } : uf,
                        Om = yu ? function(i) {
                            for (var a = []; i;) Hn(a, Ku(i)), i = Mo(i);
                            return a
                        } : uf,
                        ar = dr;
                    (_u && ar(new _u(new ArrayBuffer(1))) != w || ga && ar(new ga) != p || Eu && ar(Eu.resolve()) != z || vs && ar(new vs) != re || ma && ar(new ma) != pe) && (ar = function(i) {
                        var a = dr(i),
                            c = a == B ? i.constructor : r,
                            d = c ? Li(c) : "";
                        if (d) switch (d) {
                            case c1:
                                return w;
                            case u1:
                                return p;
                            case f1:
                                return z;
                            case d1:
                                return re;
                            case h1:
                                return pe
                        }
                        return a
                    });

                    function I$(i, a, c) {
                        for (var d = -1, v = c.length; ++d < v;) {
                            var E = c[d],
                                I = E.size;
                            switch (E.type) {
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

                    function A$(i) {
                        var a = i.match(Dw);
                        return a ? a[1].split(xw) : []
                    }

                    function wm(i, a, c) {
                        a = zn(a, i);
                        for (var d = -1, v = a.length, E = !1; ++d < v;) {
                            var I = gn(a[d]);
                            if (!(E = i != null && c(i, I))) break;
                            i = i[I]
                        }
                        return E || ++d != v ? E : (v = i == null ? 0 : i.length, !!v && ul(v) && Rn(I, v) && (Ge(i) || ki(i)))
                    }

                    function N$(i) {
                        var a = i.length,
                            c = new i.constructor(a);
                        return a && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c
                    }

                    function $m(i) {
                        return typeof i.constructor == "function" && !wa(i) ? _s(Mo(i)) : {}
                    }

                    function R$(i, a, c) {
                        var d = i.constructor;
                        switch (a) {
                            case xe:
                                return Fu(i);
                            case Ot:
                            case lt:
                                return new d(+i);
                            case w:
                                return p$(i, c);
                            case T:
                            case R:
                            case S:
                            case L:
                            case Z:
                            case ne:
                            case _e:
                            case Se:
                            case ft:
                                return lm(i, c);
                            case p:
                                return new d;
                            case O:
                            case A:
                                return new d(i);
                            case se:
                                return g$(i);
                            case re:
                                return new d;
                            case V:
                                return m$(i)
                        }
                    }

                    function P$(i, a) {
                        var c = a.length;
                        if (!c) return i;
                        var d = c - 1;
                        return a[d] = (c > 1 ? "& " : "") + a[d], a = a.join(c > 2 ? ", " : " "), i.replace(kw, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function L$(i) {
                        return Ge(i) || ki(i) || !!(Rg && i && i[Rg])
                    }

                    function Rn(i, a) {
                        var c = typeof i;
                        return a = a == null ? ve : a, !!a && (c == "number" || c != "symbol" && Kw.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function hr(i, a, c) {
                        if (!Ct(c)) return !1;
                        var d = typeof a;
                        return (d == "number" ? _r(c) && Rn(a, c.length) : d == "string" && a in c) ? rn(c[a], i) : !1
                    }

                    function Vu(i, a) {
                        if (Ge(i)) return !1;
                        var c = typeof i;
                        return c == "number" || c == "symbol" || c == "boolean" || i == null || Rr(i) ? !0 : Nw.test(i) || !Aw.test(i) || a != null && i in pt(a)
                    }

                    function k$(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function qu(i) {
                        var a = rl(i),
                            c = y[a];
                        if (typeof c != "function" || !(a in Ye.prototype)) return !1;
                        if (i === c) return !0;
                        var d = Wu(c);
                        return !!d && i === d[0]
                    }

                    function D$(i) {
                        return !!Cg && Cg in i
                    }
                    var x$ = Po ? Pn : ff;

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

                    function M$(i) {
                        var a = ll(i, function(d) {
                                return c.size === h && c.clear(), d
                            }),
                            c = a.cache;
                        return a
                    }

                    function F$(i, a) {
                        var c = i[1],
                            d = a[1],
                            v = c | d,
                            E = v < (U | C | oe),
                            I = d == oe && c == X || d == oe && c == le && i[7].length <= a[8] || d == (oe | le) && a[7].length <= a[8] && c == X;
                        if (!(E || I)) return i;
                        d & U && (i[2] = a[2], v |= c & U ? 0 : q);
                        var N = a[3];
                        if (N) {
                            var D = i[3];
                            i[3] = D ? um(D, N, a[4]) : N, i[4] = D ? Kn(i[3], g) : a[4]
                        }
                        return N = a[5], N && (D = i[5], i[5] = D ? fm(D, N, a[6]) : N, i[6] = D ? Kn(i[5], g) : a[6]), N = a[7], N && (i[7] = N), d & oe && (i[8] = i[8] == null ? a[8] : sr(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function B$(i) {
                        var a = [];
                        if (i != null)
                            for (var c in pt(i)) a.push(c);
                        return a
                    }

                    function U$(i) {
                        return ko.call(i)
                    }

                    function Am(i, a, c) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, E = Bt(d.length - a, 0), I = Y(E); ++v < E;) I[v] = d[a + v];
                                v = -1;
                                for (var N = Y(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = c(I), Ir(i, this, N)
                            }
                    }

                    function Nm(i, a) {
                        return a.length < 2 ? i : Ri(i, Kr(a, 0, -1))
                    }

                    function G$(i, a) {
                        for (var c = i.length, d = sr(a.length, c), v = yr(i); d--;) {
                            var E = a[d];
                            i[d] = Rn(E, c) ? v[E] : r
                        }
                        return i
                    }

                    function Yu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Rm = Lm(em),
                        $a = r1 || function(i, a) {
                            return Jt.setTimeout(i, a)
                        },
                        zu = Lm(u$);

                    function Pm(i, a, c) {
                        var d = a + "";
                        return zu(i, P$(d, j$(A$(d), c)))
                    }

                    function Lm(i) {
                        var a = 0,
                            c = 0;
                        return function() {
                            var d = a1(),
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
                            var E = Ru(c, v),
                                I = i[E];
                            i[E] = i[c], i[c] = I
                        }
                        return i.length = a, i
                    }
                    var km = M$(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(Rw, function(c, d, v, E) {
                            a.push(v ? E.replace(Bw, "$1") : d || c)
                        }), a
                    });

                    function gn(i) {
                        if (typeof i == "string" || Rr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Li(i) {
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

                    function j$(i, a) {
                        return Gr(Cr, function(c) {
                            var d = "_." + c[0];
                            a & c[1] && !Io(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Dm(i) {
                        if (i instanceof Ye) return i.clone();
                        var a = new Wr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = yr(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function W$(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = Bt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, E = 0, I = Y(Uo(d / a)); v < d;) I[E++] = Kr(i, v, v += a);
                        return I
                    }

                    function H$(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = 0, v = []; ++a < c;) {
                            var E = i[a];
                            E && (v[d++] = E)
                        }
                        return v
                    }

                    function K$() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = Y(i - 1), c = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Hn(Ge(c) ? yr(c) : [c], Qt(a, 1))
                    }
                    var V$ = Ve(function(i, a) {
                            return Nt(i) ? Ea(i, Qt(a, 1, Nt, !0)) : []
                        }),
                        q$ = Ve(function(i, a) {
                            var c = Vr(a);
                            return Nt(c) && (c = r), Nt(i) ? Ea(i, Qt(a, 1, Nt, !0), Re(c, 2)) : []
                        }),
                        Y$ = Ve(function(i, a) {
                            var c = Vr(a);
                            return Nt(c) && (c = r), Nt(i) ? Ea(i, Qt(a, 1, Nt, !0), r, c) : []
                        });

                    function z$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), Kr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function X$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Kr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function J$(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3), !0, !0) : []
                    }

                    function Q$(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3), !0) : []
                    }

                    function Z$(i, a, c, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (c && typeof c != "number" && hr(i, a, c) && (c = 0, d = v), K1(i, a, c, d)) : []
                    }

                    function xm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), Ao(i, Re(a, 3), v)
                    }

                    function Mm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return c !== r && (v = We(c), v = c < 0 ? Bt(d + v, 0) : sr(v, d - 1)), Ao(i, Re(a, 3), v, !0)
                    }

                    function Fm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, 1) : []
                    }

                    function eC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, be) : []
                    }

                    function tC(i, a) {
                        var c = i == null ? 0 : i.length;
                        return c ? (a = a === r ? 1 : We(a), Qt(i, a)) : []
                    }

                    function rC(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = {}; ++a < c;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Bm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function nC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), ds(i, a, v)
                    }

                    function iC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Kr(i, 0, -1) : []
                    }
                    var sC = Ve(function(i) {
                            var a = wt(i, xu);
                            return a.length && a[0] === i[0] ? $u(a) : []
                        }),
                        aC = Ve(function(i) {
                            var a = Vr(i),
                                c = wt(i, xu);
                            return a === Vr(c) ? a = r : c.pop(), c.length && c[0] === i[0] ? $u(c, Re(a, 2)) : []
                        }),
                        oC = Ve(function(i) {
                            var a = Vr(i),
                                c = wt(i, xu);
                            return a = typeof a == "function" ? a : r, a && c.pop(), c.length && c[0] === i[0] ? $u(c, r, a) : []
                        });

                    function lC(i, a) {
                        return i == null ? "" : i1.call(i, a)
                    }

                    function Vr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function cC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return c !== r && (v = We(c), v = v < 0 ? Bt(d + v, 0) : sr(v, d - 1)), a === a ? j0(i, a, v) : Ao(i, _g, v, !0)
                    }

                    function uC(i, a) {
                        return i && i.length ? Xg(i, We(a)) : r
                    }
                    var fC = Ve(Um);

                    function Um(i, a) {
                        return i && i.length && a && a.length ? Nu(i, a) : i
                    }

                    function dC(i, a, c) {
                        return i && i.length && a && a.length ? Nu(i, a, Re(c, 2)) : i
                    }

                    function hC(i, a, c) {
                        return i && i.length && a && a.length ? Nu(i, a, r, c) : i
                    }
                    var pC = Nn(function(i, a) {
                        var c = i == null ? 0 : i.length,
                            d = Tu(i, a);
                        return Zg(i, wt(a, function(v) {
                            return Rn(v, c) ? +v : v
                        }).sort(cm)), d
                    });

                    function gC(i, a) {
                        var c = [];
                        if (!(i && i.length)) return c;
                        var d = -1,
                            v = [],
                            E = i.length;
                        for (a = Re(a, 3); ++d < E;) {
                            var I = i[d];
                            a(I, d, i) && (c.push(I), v.push(d))
                        }
                        return Zg(i, v), c
                    }

                    function Xu(i) {
                        return i == null ? i : l1.call(i)
                    }

                    function mC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (c && typeof c != "number" && hr(i, a, c) ? (a = 0, c = d) : (a = a == null ? 0 : We(a), c = c === r ? d : We(c)), Kr(i, a, c)) : []
                    }

                    function vC(i, a) {
                        return zo(i, a)
                    }

                    function yC(i, a, c) {
                        return Lu(i, a, Re(c, 2))
                    }

                    function _C(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = zo(i, a);
                            if (d < c && rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function EC(i, a) {
                        return zo(i, a, !0)
                    }

                    function bC(i, a, c) {
                        return Lu(i, a, Re(c, 2), !0)
                    }

                    function TC(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = zo(i, a, !0) - 1;
                            if (rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function SC(i) {
                        return i && i.length ? tm(i) : []
                    }

                    function OC(i, a) {
                        return i && i.length ? tm(i, Re(a, 2)) : []
                    }

                    function wC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Kr(i, 1, a) : []
                    }

                    function $C(i, a, c) {
                        return i && i.length ? (a = c || a === r ? 1 : We(a), Kr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function CC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Kr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function IC(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3), !1, !0) : []
                    }

                    function AC(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3)) : []
                    }
                    var NC = Ve(function(i) {
                            return Yn(Qt(i, 1, Nt, !0))
                        }),
                        RC = Ve(function(i) {
                            var a = Vr(i);
                            return Nt(a) && (a = r), Yn(Qt(i, 1, Nt, !0), Re(a, 2))
                        }),
                        PC = Ve(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, Yn(Qt(i, 1, Nt, !0), r, a)
                        });

                    function LC(i) {
                        return i && i.length ? Yn(i) : []
                    }

                    function kC(i, a) {
                        return i && i.length ? Yn(i, Re(a, 2)) : []
                    }

                    function DC(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? Yn(i, r, a) : []
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

                    function Gm(i, a) {
                        if (!(i && i.length)) return [];
                        var c = Ju(i);
                        return a == null ? c : wt(c, function(d) {
                            return Ir(a, r, d)
                        })
                    }
                    var xC = Ve(function(i, a) {
                            return Nt(i) ? Ea(i, a) : []
                        }),
                        MC = Ve(function(i) {
                            return Du(Wn(i, Nt))
                        }),
                        FC = Ve(function(i) {
                            var a = Vr(i);
                            return Nt(a) && (a = r), Du(Wn(i, Nt), Re(a, 2))
                        }),
                        BC = Ve(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, Du(Wn(i, Nt), r, a)
                        }),
                        UC = Ve(Ju);

                    function GC(i, a) {
                        return sm(i || [], a || [], _a)
                    }

                    function jC(i, a) {
                        return sm(i || [], a || [], Sa)
                    }
                    var WC = Ve(function(i) {
                        var a = i.length,
                            c = a > 1 ? i[a - 1] : r;
                        return c = typeof c == "function" ? (i.pop(), c) : r, Gm(i, c)
                    });

                    function jm(i) {
                        var a = y(i);
                        return a.__chain__ = !0, a
                    }

                    function HC(i, a) {
                        return a(i), i
                    }

                    function sl(i, a) {
                        return a(i)
                    }
                    var KC = Nn(function(i) {
                        var a = i.length,
                            c = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(E) {
                                return Tu(E, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof Ye) || !Rn(c) ? this.thru(v) : (d = d.slice(c, +c + (a ? 1 : 0)), d.__actions__.push({
                            func: sl,
                            args: [v],
                            thisArg: r
                        }), new Wr(d, this.__chain__).thru(function(E) {
                            return a && !E.length && E.push(r), E
                        }))
                    });

                    function VC() {
                        return jm(this)
                    }

                    function qC() {
                        return new Wr(this.value(), this.__chain__)
                    }

                    function YC() {
                        this.__values__ === r && (this.__values__ = rv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function zC() {
                        return this
                    }

                    function XC(i) {
                        for (var a, c = this; c instanceof Ho;) {
                            var d = Dm(c);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            c = c.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function JC() {
                        var i = this.__wrapped__;
                        if (i instanceof Ye) {
                            var a = i;
                            return this.__actions__.length && (a = new Ye(this)), a = a.reverse(), a.__actions__.push({
                                func: sl,
                                args: [Xu],
                                thisArg: r
                            }), new Wr(a, this.__chain__)
                        }
                        return this.thru(Xu)
                    }

                    function QC() {
                        return im(this.__wrapped__, this.__actions__)
                    }
                    var ZC = Jo(function(i, a, c) {
                        dt.call(i, c) ? ++i[c] : In(i, c, 1)
                    });

                    function eI(i, a, c) {
                        var d = Ge(i) ? vg : H1;
                        return c && hr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }

                    function tI(i, a) {
                        var c = Ge(i) ? Wn : Gg;
                        return c(i, Re(a, 3))
                    }
                    var rI = gm(xm),
                        nI = gm(Mm);

                    function iI(i, a) {
                        return Qt(al(i, a), 1)
                    }

                    function sI(i, a) {
                        return Qt(al(i, a), be)
                    }

                    function aI(i, a, c) {
                        return c = c === r ? 1 : We(c), Qt(al(i, a), c)
                    }

                    function Wm(i, a) {
                        var c = Ge(i) ? Gr : qn;
                        return c(i, Re(a, 3))
                    }

                    function Hm(i, a) {
                        var c = Ge(i) ? w0 : Ug;
                        return c(i, Re(a, 3))
                    }
                    var oI = Jo(function(i, a, c) {
                        dt.call(i, c) ? i[c].push(a) : In(i, c, [a])
                    });

                    function lI(i, a, c, d) {
                        i = _r(i) ? i : Os(i), c = c && !d ? We(c) : 0;
                        var v = i.length;
                        return c < 0 && (c = Bt(v + c, 0)), fl(i) ? c <= v && i.indexOf(a, c) > -1 : !!v && ds(i, a, c) > -1
                    }
                    var cI = Ve(function(i, a, c) {
                            var d = -1,
                                v = typeof a == "function",
                                E = _r(i) ? Y(i.length) : [];
                            return qn(i, function(I) {
                                E[++d] = v ? Ir(a, I, c) : ba(I, a, c)
                            }), E
                        }),
                        uI = Jo(function(i, a, c) {
                            In(i, c, a)
                        });

                    function al(i, a) {
                        var c = Ge(i) ? wt : qg;
                        return c(i, Re(a, 3))
                    }

                    function fI(i, a, c, d) {
                        return i == null ? [] : (Ge(a) || (a = a == null ? [] : [a]), c = d ? r : c, Ge(c) || (c = c == null ? [] : [c]), Jg(i, a, c))
                    }
                    var dI = Jo(function(i, a, c) {
                        i[c ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function hI(i, a, c) {
                        var d = Ge(i) ? cu : bg,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, qn)
                    }

                    function pI(i, a, c) {
                        var d = Ge(i) ? $0 : bg,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, Ug)
                    }

                    function gI(i, a) {
                        var c = Ge(i) ? Wn : Gg;
                        return c(i, cl(Re(a, 3)))
                    }

                    function mI(i) {
                        var a = Ge(i) ? xg : l$;
                        return a(i)
                    }

                    function vI(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = We(a);
                        var d = Ge(i) ? B1 : c$;
                        return d(i, a)
                    }

                    function yI(i) {
                        var a = Ge(i) ? U1 : f$;
                        return a(i)
                    }

                    function _I(i) {
                        if (i == null) return 0;
                        if (_r(i)) return fl(i) ? ps(i) : i.length;
                        var a = ar(i);
                        return a == p || a == re ? i.size : Iu(i).length
                    }

                    function EI(i, a, c) {
                        var d = Ge(i) ? uu : d$;
                        return c && hr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }
                    var bI = Ve(function(i, a) {
                            if (i == null) return [];
                            var c = a.length;
                            return c > 1 && hr(i, a[0], a[1]) ? a = [] : c > 2 && hr(a[0], a[1], a[2]) && (a = [a[0]]), Jg(i, Qt(a, 1), [])
                        }),
                        ol = t1 || function() {
                            return Jt.Date.now()
                        };

                    function TI(i, a) {
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
                    var Qu = Ve(function(i, a, c) {
                            var d = U;
                            if (c.length) {
                                var v = Kn(c, Ts(Qu));
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
                        var d, v, E, I, N, D, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new jr(l);
                        a = qr(a) || 0, Ct(c) && (te = !!c.leading, ae = "maxWait" in c, E = ae ? Bt(qr(c.maxWait) || 0, a) : E, me = "trailing" in c ? !!c.trailing : me);

                        function we(Rt) {
                            var nn = d,
                                kn = v;
                            return d = v = r, ee = Rt, I = i.apply(kn, nn), I
                        }

                        function Pe(Rt) {
                            return ee = Rt, N = $a(qe, a), te ? we(Rt) : I
                        }

                        function Ke(Rt) {
                            var nn = Rt - D,
                                kn = Rt - ee,
                                gv = a - nn;
                            return ae ? sr(gv, E - kn) : gv
                        }

                        function Le(Rt) {
                            var nn = Rt - D,
                                kn = Rt - ee;
                            return D === r || nn >= a || nn < 0 || ae && kn >= E
                        }

                        function qe() {
                            var Rt = ol();
                            if (Le(Rt)) return Xe(Rt);
                            N = $a(qe, Ke(Rt))
                        }

                        function Xe(Rt) {
                            return N = r, me && d ? we(Rt) : (d = v = r, I)
                        }

                        function Pr() {
                            N !== r && am(N), ee = 0, d = D = v = N = r
                        }

                        function pr() {
                            return N === r ? I : Xe(ol())
                        }

                        function Lr() {
                            var Rt = ol(),
                                nn = Le(Rt);
                            if (d = arguments, v = this, D = Rt, nn) {
                                if (N === r) return Pe(D);
                                if (ae) return am(N), N = $a(qe, a), we(D)
                            }
                            return N === r && (N = $a(qe, a)), I
                        }
                        return Lr.cancel = Pr, Lr.flush = pr, Lr
                    }
                    var SI = Ve(function(i, a) {
                            return Bg(i, 1, a)
                        }),
                        OI = Ve(function(i, a, c) {
                            return Bg(i, qr(a) || 0, c)
                        });

                    function wI(i) {
                        return An(i, ue)
                    }

                    function ll(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new jr(l);
                        var c = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                E = c.cache;
                            if (E.has(v)) return E.get(v);
                            var I = i.apply(this, d);
                            return c.cache = E.set(v, I) || E, I
                        };
                        return c.cache = new(ll.Cache || Cn), c
                    }
                    ll.Cache = Cn;

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

                    function $I(i) {
                        return Vm(2, i)
                    }
                    var CI = h$(function(i, a) {
                            a = a.length == 1 && Ge(a[0]) ? wt(a[0], Ar(Re())) : wt(Qt(a, 1), Ar(Re()));
                            var c = a.length;
                            return Ve(function(d) {
                                for (var v = -1, E = sr(d.length, c); ++v < E;) d[v] = a[v].call(this, d[v]);
                                return Ir(i, this, d)
                            })
                        }),
                        Zu = Ve(function(i, a) {
                            var c = Kn(a, Ts(Zu));
                            return An(i, j, r, a, c)
                        }),
                        Jm = Ve(function(i, a) {
                            var c = Kn(a, Ts(Jm));
                            return An(i, Q, r, a, c)
                        }),
                        II = Nn(function(i, a) {
                            return An(i, le, r, r, r, a)
                        });

                    function AI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a === r ? a : We(a), Ve(i, a)
                    }

                    function NI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a == null ? 0 : Bt(We(a), 0), Ve(function(c) {
                            var d = c[a],
                                v = Xn(c, 0, a);
                            return d && Hn(v, d), Ir(i, this, v)
                        })
                    }

                    function RI(i, a, c) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new jr(l);
                        return Ct(c) && (d = "leading" in c ? !!c.leading : d, v = "trailing" in c ? !!c.trailing : v), Xm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function PI(i) {
                        return Km(i, 1)
                    }

                    function LI(i, a) {
                        return Zu(Mu(a), i)
                    }

                    function kI() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Ge(i) ? i : [i]
                    }

                    function DI(i) {
                        return Hr(i, $)
                    }

                    function xI(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, $, a)
                    }

                    function MI(i) {
                        return Hr(i, _ | $)
                    }

                    function FI(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, _ | $, a)
                    }

                    function BI(i, a) {
                        return a == null || Fg(i, a, Kt(a))
                    }

                    function rn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var UI = tl(wu),
                        GI = tl(function(i, a) {
                            return i >= a
                        }),
                        ki = Hg(function() {
                            return arguments
                        }()) ? Hg : function(i) {
                            return At(i) && dt.call(i, "callee") && !Ng.call(i, "callee")
                        },
                        Ge = Y.isArray,
                        jI = fg ? Ar(fg) : X1;

                    function _r(i) {
                        return i != null && ul(i.length) && !Pn(i)
                    }

                    function Nt(i) {
                        return At(i) && _r(i)
                    }

                    function WI(i) {
                        return i === !0 || i === !1 || At(i) && dr(i) == Ot
                    }
                    var Jn = n1 || ff,
                        HI = dg ? Ar(dg) : J1;

                    function KI(i) {
                        return At(i) && i.nodeType === 1 && !Ca(i)
                    }

                    function VI(i) {
                        if (i == null) return !0;
                        if (_r(i) && (Ge(i) || typeof i == "string" || typeof i.splice == "function" || Jn(i) || Ss(i) || ki(i))) return !i.length;
                        var a = ar(i);
                        if (a == p || a == re) return !i.size;
                        if (wa(i)) return !Iu(i).length;
                        for (var c in i)
                            if (dt.call(i, c)) return !1;
                        return !0
                    }

                    function qI(i, a) {
                        return Ta(i, a)
                    }

                    function YI(i, a, c) {
                        c = typeof c == "function" ? c : r;
                        var d = c ? c(i, a) : r;
                        return d === r ? Ta(i, a, r, c) : !!d
                    }

                    function ef(i) {
                        if (!At(i)) return !1;
                        var a = dr(i);
                        return a == Ht || a == kt || typeof i.message == "string" && typeof i.name == "string" && !Ca(i)
                    }

                    function zI(i) {
                        return typeof i == "number" && Pg(i)
                    }

                    function Pn(i) {
                        if (!Ct(i)) return !1;
                        var a = dr(i);
                        return a == Dt || a == m || a == ot || a == ce
                    }

                    function Qm(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function ul(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function Ct(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function At(i) {
                        return i != null && typeof i == "object"
                    }
                    var Zm = hg ? Ar(hg) : Z1;

                    function XI(i, a) {
                        return i === a || Cu(i, a, Hu(a))
                    }

                    function JI(i, a, c) {
                        return c = typeof c == "function" ? c : r, Cu(i, a, Hu(a), c)
                    }

                    function QI(i) {
                        return ev(i) && i != +i
                    }

                    function ZI(i) {
                        if (x$(i)) throw new Be(o);
                        return Kg(i)
                    }

                    function eA(i) {
                        return i === null
                    }

                    function tA(i) {
                        return i == null
                    }

                    function ev(i) {
                        return typeof i == "number" || At(i) && dr(i) == O
                    }

                    function Ca(i) {
                        if (!At(i) || dr(i) != B) return !1;
                        var a = Mo(i);
                        if (a === null) return !0;
                        var c = dt.call(a, "constructor") && a.constructor;
                        return typeof c == "function" && c instanceof c && Lo.call(c) == J0
                    }
                    var tf = pg ? Ar(pg) : e$;

                    function rA(i) {
                        return Qm(i) && i >= -ve && i <= ve
                    }
                    var tv = gg ? Ar(gg) : t$;

                    function fl(i) {
                        return typeof i == "string" || !Ge(i) && At(i) && dr(i) == A
                    }

                    function Rr(i) {
                        return typeof i == "symbol" || At(i) && dr(i) == V
                    }
                    var Ss = mg ? Ar(mg) : r$;

                    function nA(i) {
                        return i === r
                    }

                    function iA(i) {
                        return At(i) && ar(i) == pe
                    }

                    function sA(i) {
                        return At(i) && dr(i) == Ne
                    }
                    var aA = tl(Au),
                        oA = tl(function(i, a) {
                            return i <= a
                        });

                    function rv(i) {
                        if (!i) return [];
                        if (_r(i)) return fl(i) ? en(i) : yr(i);
                        if (pa && i[pa]) return B0(i[pa]());
                        var a = ar(i),
                            c = a == p ? mu : a == re ? No : Os;
                        return c(i)
                    }

                    function Ln(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = qr(i), i === be || i === -be) {
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
                        return i ? Ni(We(i), 0, je) : 0
                    }

                    function qr(i) {
                        if (typeof i == "number") return i;
                        if (Rr(i)) return Fe;
                        if (Ct(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Ct(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Tg(i);
                        var c = jw.test(i);
                        return c || Hw.test(i) ? T0(i.slice(2), c ? 2 : 8) : Gw.test(i) ? Fe : +i
                    }

                    function iv(i) {
                        return pn(i, Er(i))
                    }

                    function lA(i) {
                        return i ? Ni(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function ct(i) {
                        return i == null ? "" : Nr(i)
                    }
                    var cA = Es(function(i, a) {
                            if (wa(a) || _r(a)) {
                                pn(a, Kt(a), i);
                                return
                            }
                            for (var c in a) dt.call(a, c) && _a(i, c, a[c])
                        }),
                        sv = Es(function(i, a) {
                            pn(a, Er(a), i)
                        }),
                        dl = Es(function(i, a, c, d) {
                            pn(a, Er(a), i, d)
                        }),
                        uA = Es(function(i, a, c, d) {
                            pn(a, Kt(a), i, d)
                        }),
                        fA = Nn(Tu);

                    function dA(i, a) {
                        var c = _s(i);
                        return a == null ? c : Mg(c, a)
                    }
                    var hA = Ve(function(i, a) {
                            i = pt(i);
                            var c = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && hr(a[0], a[1], v) && (d = 1); ++c < d;)
                                for (var E = a[c], I = Er(E), N = -1, D = I.length; ++N < D;) {
                                    var ee = I[N],
                                        te = i[ee];
                                    (te === r || rn(te, ms[ee]) && !dt.call(i, ee)) && (i[ee] = E[ee])
                                }
                            return i
                        }),
                        pA = Ve(function(i) {
                            return i.push(r, Tm), Ir(av, r, i)
                        });

                    function gA(i, a) {
                        return yg(i, Re(a, 3), hn)
                    }

                    function mA(i, a) {
                        return yg(i, Re(a, 3), Ou)
                    }

                    function vA(i, a) {
                        return i == null ? i : Su(i, Re(a, 3), Er)
                    }

                    function yA(i, a) {
                        return i == null ? i : jg(i, Re(a, 3), Er)
                    }

                    function _A(i, a) {
                        return i && hn(i, Re(a, 3))
                    }

                    function EA(i, a) {
                        return i && Ou(i, Re(a, 3))
                    }

                    function bA(i) {
                        return i == null ? [] : qo(i, Kt(i))
                    }

                    function TA(i) {
                        return i == null ? [] : qo(i, Er(i))
                    }

                    function rf(i, a, c) {
                        var d = i == null ? r : Ri(i, a);
                        return d === r ? c : d
                    }

                    function SA(i, a) {
                        return i != null && wm(i, a, V1)
                    }

                    function nf(i, a) {
                        return i != null && wm(i, a, q1)
                    }
                    var OA = vm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = ko.call(a)), i[a] = c
                        }, af(br)),
                        wA = vm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = ko.call(a)), dt.call(i, a) ? i[a].push(c) : i[a] = [c]
                        }, Re),
                        $A = Ve(ba);

                    function Kt(i) {
                        return _r(i) ? Dg(i) : Iu(i)
                    }

                    function Er(i) {
                        return _r(i) ? Dg(i, !0) : n$(i)
                    }

                    function CA(i, a) {
                        var c = {};
                        return a = Re(a, 3), hn(i, function(d, v, E) {
                            In(c, a(d, v, E), d)
                        }), c
                    }

                    function IA(i, a) {
                        var c = {};
                        return a = Re(a, 3), hn(i, function(d, v, E) {
                            In(c, v, a(d, v, E))
                        }), c
                    }
                    var AA = Es(function(i, a, c) {
                            Yo(i, a, c)
                        }),
                        av = Es(function(i, a, c, d) {
                            Yo(i, a, c, d)
                        }),
                        NA = Nn(function(i, a) {
                            var c = {};
                            if (i == null) return c;
                            var d = !1;
                            a = wt(a, function(E) {
                                return E = zn(E, i), d || (d = E.length > 1), E
                            }), pn(i, ju(i), c), d && (c = Hr(c, _ | b | $, O$));
                            for (var v = a.length; v--;) ku(c, a[v]);
                            return c
                        });

                    function RA(i, a) {
                        return ov(i, cl(Re(a)))
                    }
                    var PA = Nn(function(i, a) {
                        return i == null ? {} : s$(i, a)
                    });

                    function ov(i, a) {
                        if (i == null) return {};
                        var c = wt(ju(i), function(d) {
                            return [d]
                        });
                        return a = Re(a), Qg(i, c, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function LA(i, a, c) {
                        a = zn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var E = i == null ? r : i[gn(a[d])];
                            E === r && (d = v, E = c), i = Pn(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function kA(i, a, c) {
                        return i == null ? i : Sa(i, a, c)
                    }

                    function DA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Sa(i, a, c, d)
                    }
                    var lv = Em(Kt),
                        cv = Em(Er);

                    function xA(i, a, c) {
                        var d = Ge(i),
                            v = d || Jn(i) || Ss(i);
                        if (a = Re(a, 4), c == null) {
                            var E = i && i.constructor;
                            v ? c = d ? new E : [] : Ct(i) ? c = Pn(E) ? _s(Mo(i)) : {} : c = {}
                        }
                        return (v ? Gr : hn)(i, function(I, N, D) {
                            return a(c, I, N, D)
                        }), c
                    }

                    function MA(i, a) {
                        return i == null ? !0 : ku(i, a)
                    }

                    function FA(i, a, c) {
                        return i == null ? i : nm(i, a, Mu(c))
                    }

                    function BA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : nm(i, a, Mu(c), d)
                    }

                    function Os(i) {
                        return i == null ? [] : gu(i, Kt(i))
                    }

                    function UA(i) {
                        return i == null ? [] : gu(i, Er(i))
                    }

                    function GA(i, a, c) {
                        return c === r && (c = a, a = r), c !== r && (c = qr(c), c = c === c ? c : 0), a !== r && (a = qr(a), a = a === a ? a : 0), Ni(qr(i), a, c)
                    }

                    function jA(i, a, c) {
                        return a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), i = qr(i), Y1(i, a, c)
                    }

                    function WA(i, a, c) {
                        if (c && typeof c != "boolean" && hr(i, a, c) && (a = c = r), c === r && (typeof a == "boolean" ? (c = a, a = r) : typeof i == "boolean" && (c = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Ln(i), a === r ? (a = i, i = 0) : a = Ln(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (c || i % 1 || a % 1) {
                            var v = Lg();
                            return sr(i + v * (a - i + b0("1e-" + ((v + "").length - 1))), a)
                        }
                        return Ru(i, a)
                    }
                    var HA = bs(function(i, a, c) {
                        return a = a.toLowerCase(), i + (c ? uv(a) : a)
                    });

                    function uv(i) {
                        return sf(ct(i).toLowerCase())
                    }

                    function fv(i) {
                        return i = ct(i), i && i.replace(Vw, k0).replace(f0, "")
                    }

                    function KA(i, a, c) {
                        i = ct(i), a = Nr(a);
                        var d = i.length;
                        c = c === r ? d : Ni(We(c), 0, d);
                        var v = c;
                        return c -= a.length, c >= 0 && i.slice(c, v) == a
                    }

                    function VA(i) {
                        return i = ct(i), i && $w.test(i) ? i.replace(jp, D0) : i
                    }

                    function qA(i) {
                        return i = ct(i), i && Pw.test(i) ? i.replace(Zc, "\\$&") : i
                    }
                    var YA = bs(function(i, a, c) {
                            return i + (c ? "-" : "") + a.toLowerCase()
                        }),
                        zA = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toLowerCase()
                        }),
                        XA = pm("toLowerCase");

                    function JA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return el(Go(v), c) + i + el(Uo(v), c)
                    }

                    function QA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? i + el(a - d, c) : i
                    }

                    function ZA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? el(a - d, c) + i : i
                    }

                    function eN(i, a, c) {
                        return c || a == null ? a = 0 : a && (a = +a), o1(ct(i).replace(eu, ""), a || 0)
                    }

                    function tN(i, a, c) {
                        return (c ? hr(i, a, c) : a === r) ? a = 1 : a = We(a), Pu(ct(i), a)
                    }

                    function rN() {
                        var i = arguments,
                            a = ct(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var nN = bs(function(i, a, c) {
                        return i + (c ? "_" : "") + a.toLowerCase()
                    });

                    function iN(i, a, c) {
                        return c && typeof c != "number" && hr(i, a, c) && (a = c = r), c = c === r ? je : c >>> 0, c ? (i = ct(i), i && (typeof a == "string" || a != null && !tf(a)) && (a = Nr(a), !a && hs(i)) ? Xn(en(i), 0, c) : i.split(a, c)) : []
                    }
                    var sN = bs(function(i, a, c) {
                        return i + (c ? " " : "") + sf(a)
                    });

                    function aN(i, a, c) {
                        return i = ct(i), c = c == null ? 0 : Ni(We(c), 0, i.length), a = Nr(a), i.slice(c, c + a.length) == a
                    }

                    function oN(i, a, c) {
                        var d = y.templateSettings;
                        c && hr(i, a, c) && (a = r), i = ct(i), a = dl({}, a, d, bm);
                        var v = dl({}, a.imports, d.imports, bm),
                            E = Kt(v),
                            I = gu(v, E),
                            N, D, ee = 0,
                            te = a.interpolate || wo,
                            ae = "__p += '",
                            me = vu((a.escape || wo).source + "|" + te.source + "|" + (te === Wp ? Uw : wo).source + "|" + (a.evaluate || wo).source + "|$", "g"),
                            we = "//# sourceURL=" + (dt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++m0 + "]") + `
`;
                        i.replace(me, function(Le, qe, Xe, Pr, pr, Lr) {
                            return Xe || (Xe = Pr), ae += i.slice(ee, Lr).replace(qw, x0), qe && (N = !0, ae += `' +
__e(` + qe + `) +
'`), pr && (D = !0, ae += `';
` + pr + `;
__p += '`), Xe && (ae += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), ee = Lr + Le.length, Le
                        }), ae += `';
`;
                        var Pe = dt.call(a, "variable") && a.variable;
                        if (!Pe) ae = `with (obj) {
` + ae + `
}
`;
                        else if (Fw.test(Pe)) throw new Be(u);
                        ae = (D ? ae.replace(ir, "") : ae).replace(Me, "$1").replace(da, "$1;"), ae = "function(" + (Pe || "obj") + `) {
` + (Pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var Ke = hv(function() {
                            return it(E, we + "return " + ae).apply(r, I)
                        });
                        if (Ke.source = ae, ef(Ke)) throw Ke;
                        return Ke
                    }

                    function lN(i) {
                        return ct(i).toLowerCase()
                    }

                    function cN(i) {
                        return ct(i).toUpperCase()
                    }

                    function uN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return Tg(i);
                        if (!i || !(a = Nr(a))) return i;
                        var d = en(i),
                            v = en(a),
                            E = Sg(d, v),
                            I = Og(d, v) + 1;
                        return Xn(d, E, I).join("")
                    }

                    function fN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.slice(0, $g(i) + 1);
                        if (!i || !(a = Nr(a))) return i;
                        var d = en(i),
                            v = Og(d, en(a)) + 1;
                        return Xn(d, 0, v).join("")
                    }

                    function dN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.replace(eu, "");
                        if (!i || !(a = Nr(a))) return i;
                        var d = en(i),
                            v = Sg(d, en(a));
                        return Xn(d, v).join("")
                    }

                    function hN(i, a) {
                        var c = Ae,
                            d = Ce;
                        if (Ct(a)) {
                            var v = "separator" in a ? a.separator : v;
                            c = "length" in a ? We(a.length) : c, d = "omission" in a ? Nr(a.omission) : d
                        }
                        i = ct(i);
                        var E = i.length;
                        if (hs(i)) {
                            var I = en(i);
                            E = I.length
                        }
                        if (c >= E) return i;
                        var N = c - ps(d);
                        if (N < 1) return d;
                        var D = I ? Xn(I, 0, N).join("") : i.slice(0, N);
                        if (v === r) return D + d;
                        if (I && (N += D.length - N), tf(v)) {
                            if (i.slice(N).search(v)) {
                                var ee, te = D;
                                for (v.global || (v = vu(v.source, ct(Hp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                D = D.slice(0, ae === r ? N : ae)
                            }
                        } else if (i.indexOf(Nr(v), N) != N) {
                            var me = D.lastIndexOf(v);
                            me > -1 && (D = D.slice(0, me))
                        }
                        return D + d
                    }

                    function pN(i) {
                        return i = ct(i), i && ww.test(i) ? i.replace(Gp, W0) : i
                    }
                    var gN = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toUpperCase()
                        }),
                        sf = pm("toUpperCase");

                    function dv(i, a, c) {
                        return i = ct(i), a = c ? r : a, a === r ? F0(i) ? V0(i) : A0(i) : i.match(a) || []
                    }
                    var hv = Ve(function(i, a) {
                            try {
                                return Ir(i, r, a)
                            } catch (c) {
                                return ef(c) ? c : new Be(c)
                            }
                        }),
                        mN = Nn(function(i, a) {
                            return Gr(a, function(c) {
                                c = gn(c), In(i, c, Qu(i[c], i))
                            }), i
                        });

                    function vN(i) {
                        var a = i == null ? 0 : i.length,
                            c = Re();
                        return i = a ? wt(i, function(d) {
                            if (typeof d[1] != "function") throw new jr(l);
                            return [c(d[0]), d[1]]
                        }) : [], Ve(function(d) {
                            for (var v = -1; ++v < a;) {
                                var E = i[v];
                                if (Ir(E[0], this, d)) return Ir(E[1], this, d)
                            }
                        })
                    }

                    function yN(i) {
                        return W1(Hr(i, _))
                    }

                    function af(i) {
                        return function() {
                            return i
                        }
                    }

                    function _N(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var EN = mm(),
                        bN = mm(!0);

                    function br(i) {
                        return i
                    }

                    function of(i) {
                        return Vg(typeof i == "function" ? i : Hr(i, _))
                    }

                    function TN(i) {
                        return Yg(Hr(i, _))
                    }

                    function SN(i, a) {
                        return zg(i, Hr(a, _))
                    }
                    var ON = Ve(function(i, a) {
                            return function(c) {
                                return ba(c, i, a)
                            }
                        }),
                        wN = Ve(function(i, a) {
                            return function(c) {
                                return ba(i, c, a)
                            }
                        });

                    function lf(i, a, c) {
                        var d = Kt(a),
                            v = qo(a, d);
                        c == null && !(Ct(a) && (v.length || !d.length)) && (c = a, a = i, i = this, v = qo(a, Kt(a)));
                        var E = !(Ct(c) && "chain" in c) || !!c.chain,
                            I = Pn(i);
                        return Gr(v, function(N) {
                            var D = a[N];
                            i[N] = D, I && (i.prototype[N] = function() {
                                var ee = this.__chain__;
                                if (E || ee) {
                                    var te = i(this.__wrapped__),
                                        ae = te.__actions__ = yr(this.__actions__);
                                    return ae.push({
                                        func: D,
                                        args: arguments,
                                        thisArg: i
                                    }), te.__chain__ = ee, te
                                }
                                return D.apply(i, Hn([this.value()], arguments))
                            })
                        }), i
                    }

                    function $N() {
                        return Jt._ === this && (Jt._ = Q0), this
                    }

                    function cf() {}

                    function CN(i) {
                        return i = We(i), Ve(function(a) {
                            return Xg(a, i)
                        })
                    }
                    var IN = Bu(wt),
                        AN = Bu(vg),
                        NN = Bu(uu);

                    function pv(i) {
                        return Vu(i) ? fu(gn(i)) : a$(i)
                    }

                    function RN(i) {
                        return function(a) {
                            return i == null ? r : Ri(i, a)
                        }
                    }
                    var PN = ym(),
                        LN = ym(!0);

                    function uf() {
                        return []
                    }

                    function ff() {
                        return !1
                    }

                    function kN() {
                        return {}
                    }

                    function DN() {
                        return ""
                    }

                    function xN() {
                        return !0
                    }

                    function MN(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var c = je,
                            d = sr(i, je);
                        a = Re(a), i -= je;
                        for (var v = pu(d, a); ++c < i;) a(c);
                        return v
                    }

                    function FN(i) {
                        return Ge(i) ? wt(i, gn) : Rr(i) ? [i] : yr(km(ct(i)))
                    }

                    function BN(i) {
                        var a = ++X0;
                        return ct(i) + a
                    }
                    var UN = Zo(function(i, a) {
                            return i + a
                        }, 0),
                        GN = Uu("ceil"),
                        jN = Zo(function(i, a) {
                            return i / a
                        }, 1),
                        WN = Uu("floor");

                    function HN(i) {
                        return i && i.length ? Vo(i, br, wu) : r
                    }

                    function KN(i, a) {
                        return i && i.length ? Vo(i, Re(a, 2), wu) : r
                    }

                    function VN(i) {
                        return Eg(i, br)
                    }

                    function qN(i, a) {
                        return Eg(i, Re(a, 2))
                    }

                    function YN(i) {
                        return i && i.length ? Vo(i, br, Au) : r
                    }

                    function zN(i, a) {
                        return i && i.length ? Vo(i, Re(a, 2), Au) : r
                    }
                    var XN = Zo(function(i, a) {
                            return i * a
                        }, 1),
                        JN = Uu("round"),
                        QN = Zo(function(i, a) {
                            return i - a
                        }, 0);

                    function ZN(i) {
                        return i && i.length ? hu(i, br) : 0
                    }

                    function eR(i, a) {
                        return i && i.length ? hu(i, Re(a, 2)) : 0
                    }
                    return y.after = TI, y.ary = Km, y.assign = cA, y.assignIn = sv, y.assignInWith = dl, y.assignWith = uA, y.at = fA, y.before = Vm, y.bind = Qu, y.bindAll = mN, y.bindKey = qm, y.castArray = kI, y.chain = jm, y.chunk = W$, y.compact = H$, y.concat = K$, y.cond = vN, y.conforms = yN, y.constant = af, y.countBy = ZC, y.create = dA, y.curry = Ym, y.curryRight = zm, y.debounce = Xm, y.defaults = hA, y.defaultsDeep = pA, y.defer = SI, y.delay = OI, y.difference = V$, y.differenceBy = q$, y.differenceWith = Y$, y.drop = z$, y.dropRight = X$, y.dropRightWhile = J$, y.dropWhile = Q$, y.fill = Z$, y.filter = tI, y.flatMap = iI, y.flatMapDeep = sI, y.flatMapDepth = aI, y.flatten = Fm, y.flattenDeep = eC, y.flattenDepth = tC, y.flip = wI, y.flow = EN, y.flowRight = bN, y.fromPairs = rC, y.functions = bA, y.functionsIn = TA, y.groupBy = oI, y.initial = iC, y.intersection = sC, y.intersectionBy = aC, y.intersectionWith = oC, y.invert = OA, y.invertBy = wA, y.invokeMap = cI, y.iteratee = of, y.keyBy = uI, y.keys = Kt, y.keysIn = Er, y.map = al, y.mapKeys = CA, y.mapValues = IA, y.matches = TN, y.matchesProperty = SN, y.memoize = ll, y.merge = AA, y.mergeWith = av, y.method = ON, y.methodOf = wN, y.mixin = lf, y.negate = cl, y.nthArg = CN, y.omit = NA, y.omitBy = RA, y.once = $I, y.orderBy = fI, y.over = IN, y.overArgs = CI, y.overEvery = AN, y.overSome = NN, y.partial = Zu, y.partialRight = Jm, y.partition = dI, y.pick = PA, y.pickBy = ov, y.property = pv, y.propertyOf = RN, y.pull = fC, y.pullAll = Um, y.pullAllBy = dC, y.pullAllWith = hC, y.pullAt = pC, y.range = PN, y.rangeRight = LN, y.rearg = II, y.reject = gI, y.remove = gC, y.rest = AI, y.reverse = Xu, y.sampleSize = vI, y.set = kA, y.setWith = DA, y.shuffle = yI, y.slice = mC, y.sortBy = bI, y.sortedUniq = SC, y.sortedUniqBy = OC, y.split = iN, y.spread = NI, y.tail = wC, y.take = $C, y.takeRight = CC, y.takeRightWhile = IC, y.takeWhile = AC, y.tap = HC, y.throttle = RI, y.thru = sl, y.toArray = rv, y.toPairs = lv, y.toPairsIn = cv, y.toPath = FN, y.toPlainObject = iv, y.transform = xA, y.unary = PI, y.union = NC, y.unionBy = RC, y.unionWith = PC, y.uniq = LC, y.uniqBy = kC, y.uniqWith = DC, y.unset = MA, y.unzip = Ju, y.unzipWith = Gm, y.update = FA, y.updateWith = BA, y.values = Os, y.valuesIn = UA, y.without = xC, y.words = dv, y.wrap = LI, y.xor = MC, y.xorBy = FC, y.xorWith = BC, y.zip = UC, y.zipObject = GC, y.zipObjectDeep = jC, y.zipWith = WC, y.entries = lv, y.entriesIn = cv, y.extend = sv, y.extendWith = dl, lf(y, y), y.add = UN, y.attempt = hv, y.camelCase = HA, y.capitalize = uv, y.ceil = GN, y.clamp = GA, y.clone = DI, y.cloneDeep = MI, y.cloneDeepWith = FI, y.cloneWith = xI, y.conformsTo = BI, y.deburr = fv, y.defaultTo = _N, y.divide = jN, y.endsWith = KA, y.eq = rn, y.escape = VA, y.escapeRegExp = qA, y.every = eI, y.find = rI, y.findIndex = xm, y.findKey = gA, y.findLast = nI, y.findLastIndex = Mm, y.findLastKey = mA, y.floor = WN, y.forEach = Wm, y.forEachRight = Hm, y.forIn = vA, y.forInRight = yA, y.forOwn = _A, y.forOwnRight = EA, y.get = rf, y.gt = UI, y.gte = GI, y.has = SA, y.hasIn = nf, y.head = Bm, y.identity = br, y.includes = lI, y.indexOf = nC, y.inRange = jA, y.invoke = $A, y.isArguments = ki, y.isArray = Ge, y.isArrayBuffer = jI, y.isArrayLike = _r, y.isArrayLikeObject = Nt, y.isBoolean = WI, y.isBuffer = Jn, y.isDate = HI, y.isElement = KI, y.isEmpty = VI, y.isEqual = qI, y.isEqualWith = YI, y.isError = ef, y.isFinite = zI, y.isFunction = Pn, y.isInteger = Qm, y.isLength = ul, y.isMap = Zm, y.isMatch = XI, y.isMatchWith = JI, y.isNaN = QI, y.isNative = ZI, y.isNil = tA, y.isNull = eA, y.isNumber = ev, y.isObject = Ct, y.isObjectLike = At, y.isPlainObject = Ca, y.isRegExp = tf, y.isSafeInteger = rA, y.isSet = tv, y.isString = fl, y.isSymbol = Rr, y.isTypedArray = Ss, y.isUndefined = nA, y.isWeakMap = iA, y.isWeakSet = sA, y.join = lC, y.kebabCase = YA, y.last = Vr, y.lastIndexOf = cC, y.lowerCase = zA, y.lowerFirst = XA, y.lt = aA, y.lte = oA, y.max = HN, y.maxBy = KN, y.mean = VN, y.meanBy = qN, y.min = YN, y.minBy = zN, y.stubArray = uf, y.stubFalse = ff, y.stubObject = kN, y.stubString = DN, y.stubTrue = xN, y.multiply = XN, y.nth = uC, y.noConflict = $N, y.noop = cf, y.now = ol, y.pad = JA, y.padEnd = QA, y.padStart = ZA, y.parseInt = eN, y.random = WA, y.reduce = hI, y.reduceRight = pI, y.repeat = tN, y.replace = rN, y.result = LA, y.round = JN, y.runInContext = k, y.sample = mI, y.size = _I, y.snakeCase = nN, y.some = EI, y.sortedIndex = vC, y.sortedIndexBy = yC, y.sortedIndexOf = _C, y.sortedLastIndex = EC, y.sortedLastIndexBy = bC, y.sortedLastIndexOf = TC, y.startCase = sN, y.startsWith = aN, y.subtract = QN, y.sum = ZN, y.sumBy = eR, y.template = oN, y.times = MN, y.toFinite = Ln, y.toInteger = We, y.toLength = nv, y.toLower = lN, y.toNumber = qr, y.toSafeInteger = lA, y.toString = ct, y.toUpper = cN, y.trim = uN, y.trimEnd = fN, y.trimStart = dN, y.truncate = hN, y.unescape = pN, y.uniqueId = BN, y.upperCase = gN, y.upperFirst = sf, y.each = Wm, y.eachRight = Hm, y.first = Bm, lf(y, function() {
                        var i = {};
                        return hn(y, function(a, c) {
                            dt.call(y.prototype, c) || (i[c] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), y.VERSION = n, Gr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        y[i].placeholder = y
                    }), Gr(["drop", "take"], function(i, a) {
                        Ye.prototype[i] = function(c) {
                            c = c === r ? 1 : Bt(We(c), 0);
                            var d = this.__filtered__ && !a ? new Ye(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = sr(c, d.__takeCount__) : d.__views__.push({
                                size: sr(c, je),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, Ye.prototype[i + "Right"] = function(c) {
                            return this.reverse()[i](c).reverse()
                        }
                    }), Gr(["filter", "map", "takeWhile"], function(i, a) {
                        var c = a + 1,
                            d = c == F || c == de;
                        Ye.prototype[i] = function(v) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: Re(v, 3),
                                type: c
                            }), E.__filtered__ = E.__filtered__ || d, E
                        }
                    }), Gr(["head", "last"], function(i, a) {
                        var c = "take" + (a ? "Right" : "");
                        Ye.prototype[i] = function() {
                            return this[c](1).value()[0]
                        }
                    }), Gr(["initial", "tail"], function(i, a) {
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
                        return this.filter(cl(Re(i)))
                    }, Ye.prototype.slice = function(i, a) {
                        i = We(i);
                        var c = this;
                        return c.__filtered__ && (i > 0 || a < 0) ? new Ye(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), a !== r && (a = We(a), c = a < 0 ? c.dropRight(-a) : c.take(a - i)), c)
                    }, Ye.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Ye.prototype.toArray = function() {
                        return this.take(je)
                    }, hn(Ye.prototype, function(i, a) {
                        var c = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = y[d ? "take" + (a == "last" ? "Right" : "") : a],
                            E = d || /^find/.test(a);
                        !v || (y.prototype[a] = function() {
                            var I = this.__wrapped__,
                                N = d ? [1] : arguments,
                                D = I instanceof Ye,
                                ee = N[0],
                                te = D || Ge(I),
                                ae = function(qe) {
                                    var Xe = v.apply(y, Hn([qe], N));
                                    return d && me ? Xe[0] : Xe
                                };
                            te && c && typeof ee == "function" && ee.length != 1 && (D = te = !1);
                            var me = this.__chain__,
                                we = !!this.__actions__.length,
                                Pe = E && !me,
                                Ke = D && !we;
                            if (!E && te) {
                                I = Ke ? I : new Ye(this);
                                var Le = i.apply(I, N);
                                return Le.__actions__.push({
                                    func: sl,
                                    args: [ae],
                                    thisArg: r
                                }), new Wr(Le, me)
                            }
                            return Pe && Ke ? i.apply(this, N) : (Le = this.thru(ae), Pe ? d ? Le.value()[0] : Le.value() : Le)
                        })
                    }), Gr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Ro[i],
                            c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        y.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var E = this.value();
                                return a.apply(Ge(E) ? E : [], v)
                            }
                            return this[c](function(I) {
                                return a.apply(Ge(I) ? I : [], v)
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
                    }), ys[Qo(r, C).name] = [{
                        name: "wrapper",
                        func: r
                    }], Ye.prototype.clone = p1, Ye.prototype.reverse = g1, Ye.prototype.value = m1, y.prototype.at = KC, y.prototype.chain = VC, y.prototype.commit = qC, y.prototype.next = YC, y.prototype.plant = XC, y.prototype.reverse = JC, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = QC, y.prototype.first = y.prototype.head, pa && (y.prototype[pa] = zC), y
                },
                gs = q0();
            $i ? (($i.exports = gs)._ = gs, au._ = gs) : Jt._ = gs
        }).call(Lt)
    })(ec, ec.exports);
    const VW = tt({
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
                    const r = new _3(e, t);
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
        qW = {
            class: "draw"
        },
        YW = {
            ref: "content",
            class: "content"
        },
        zW = {
            class: "constrain"
        },
        XW = {
            key: 0
        };

    function JW(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", qW, [H("div", YW, [H("div", zW, [e.player.prompt ? Ie((G(), K("div", XW, null, 512)), [
            [l, e.player.prompt]
        ]) : Ee("", !0), H("div", {
            ref: "stage",
            class: "stage",
            style: ao(e.stageDimensions)
        }, null, 4), H("button", {
            onClick: t[0] || (t[0] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, et(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const QW = at(VW, [
            ["render", JW]
        ]),
        ZW = tt({
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
        eH = ["textContent"],
        tH = ["textContent"],
        rH = ["textContent"],
        nH = ["textContent"];

    function iH(e, t, r, n, s, o) {
        const l = xt("t");
        return G(), K("div", {
            class: De(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (G(), K("p", {
            key: 0,
            class: De(e.localClasses.message),
            textContent: et(e.joinedCountText)
        }, null, 10, eH)) : Ee("", !0), e.player.hasControls ? (G(), K(ze, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (G(), K("p", {
            key: 0,
            class: De(e.localClasses.status)
        }, et(e.neededText), 3)) : Ee("", !0), e.player.status === "canStart" ? (G(), K("button", {
            key: 1,
            class: De(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: et(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, tH)) : Ee("", !0), e.player.status === "countdown" ? (G(), K("button", {
            key: 2,
            class: De(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: et(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, rH)) : Ee("", !0)], 64)) : e.player.gamepadStart ? (G(), K(ze, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (G(), K("p", {
            key: 0,
            class: De(e.localClasses.status)
        }, et(e.neededText), 3)) : Ee("", !0), e.player.status === "canStart" ? Ie((G(), K("p", {
            key: 1,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Ee("", !0), e.player.status === "countdown" ? Ie((G(), K("p", {
            key: 2,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Ee("", !0)], 64)) : (G(), K(ze, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (G(), K("p", {
            key: 0,
            class: De(e.localClasses.status)
        }, et(e.neededText), 3)) : Ee("", !0), e.player.status === "canStart" ? (G(), K("p", {
            key: 1,
            class: De(e.localClasses.status)
        }, et(e.waitingForVIPText), 3)) : Ee("", !0), e.player.status === "countdown" ? Ie((G(), K("p", {
            key: 2,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Ee("", !0)], 64)), e.messageLocation === "bottom" ? (G(), K("p", {
            key: 4,
            class: De(e.localClasses.message),
            textContent: et(e.joinedCountText)
        }, null, 10, nH)) : Ee("", !0)], 2)
    }
    const wS = at(ZW, [
            ["render", iH]
        ]),
        sH = tt({
            components: {
                LobbyActions: wS
            },
            props: {
                player: Object
            }
        }),
        aH = {
            class: "lobby"
        },
        oH = {
            class: "constrain"
        };

    function lH(e, t, r, n, s, o) {
        const l = kr("LobbyActions");
        return G(), K("div", aH, [H("div", oH, [St(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const cH = at(sH, [
            ["render", lH]
        ]),
        uH = tt({
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

    function fH(e, t, r, n, s, o) {
        const l = xt("t");
        return e.player && e.player.status ? (G(), K("div", {
            key: 0,
            class: De(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ie((G(), K("p", {
            key: 0,
            class: De(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Ee("", !0), e.player.hasControls ? (G(), K(ze, {
            key: 1
        }, [e.player.status === "waiting" ? Ie((G(), K("button", {
            key: 0,
            class: De(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Ee("", !0), e.player.status === "waiting" ? Ie((G(), K("button", {
            key: 1,
            class: De(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Ee("", !0), e.player.status === "countdown" ? Ie((G(), K("button", {
            key: 2,
            class: De(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : Ee("", !0)], 64)) : e.player.gamepadStart ? Ie((G(), K("p", {
            key: 2,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (G(), K("p", {
            key: 3,
            class: De(e.localClasses.status)
        }, et(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ie((G(), K("p", {
            key: 4,
            class: De(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Ee("", !0)], 2)) : Ee("", !0)
    }
    const $S = at(uH, [
            ["render", fH]
        ]),
        dH = tt({
            components: {
                PostGameActions: $S
            },
            props: {
                player: Object
            }
        }),
        hH = {
            class: "post-game"
        },
        pH = {
            class: "constrain"
        };

    function gH(e, t, r, n, s, o) {
        const l = kr("PostGameActions");
        return G(), K("div", hH, [H("div", pH, [St(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const mH = at(dH, [
            ["render", gH]
        ]),
        vH = tt({
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
        yH = {
            class: "single-text-entry"
        },
        _H = {
            class: "constrain"
        },
        EH = {
            key: 0
        },
        bH = {
            key: 1,
            for: "input"
        },
        TH = ["value", "rows", "placeholder", "disabled"],
        SH = ["value", "placeholder", "disabled"];

    function OH(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", yH, [H("div", _H, [e.player.prompt ? Ie((G(), K("p", EH, null, 512)), [
            [l, e.player.prompt]
        ]) : Ee("", !0), e.player.label ? Ie((G(), K("label", bH, null, 512)), [
            [l, e.player.label]
        ]) : Ee("", !0), e.player.isMultiline ? (G(), K("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, TH)) : (G(), K("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, SH)), Ie(H("button", {
            onClick: t[2] || (t[2] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const wH = at(vH, [
            ["render", OH]
        ]),
        $H = tt({
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
        CH = {
            class: "multi-text-entry"
        },
        IH = {
            class: "constrain"
        },
        AH = {
            key: 0
        },
        NH = ["for"],
        RH = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        PH = ["id", "value", "placeholder", "disabled", "onInput"];

    function LH(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", CH, [H("div", IH, [e.player.prompt ? Ie((G(), K("p", AH, null, 512)), [
            [l, e.player.prompt]
        ]) : Ee("", !0), (G(!0), K(ze, null, wr(e.player.inputs, (u, f) => (G(), K(ze, null, [u.label ? Ie((G(), K("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, NH)), [
            [l, u.label]
        ]) : Ee("", !0), u.isMultiline ? (G(), K("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, RH)) : (G(), K("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, PH))], 64))), 256)), Ie(H("button", {
            onClick: t[0] || (t[0] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const kH = at($H, [
            ["render", LH]
        ]),
        DH = tt({
            props: {
                player: Object
            }
        }),
        xH = {
            class: "waiting"
        },
        MH = {
            class: "constrain"
        },
        FH = {
            key: 0
        };

    function BH(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", xH, [H("div", MH, [e.player.message ? Ie((G(), K("p", FH, null, 512)), [
            [l, e.player.message]
        ]) : Ee("", !0)])])
    }
    const CS = at(DH, [
        ["render", BH]
    ]);
    tt({
        components: {
            Choices: UL,
            Doodle: KW,
            Draw: QW,
            Lobby: cH,
            PostGame: mH,
            SingleTextEntry: wH,
            MultiTextEntry: kH,
            Waiting: CS
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    const UH = tt({
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
                    Yl.galleryClick(this.artifact.categoryId, "post_game"), to.setAsViewed(0)
                }
            }
        }),
        GH = ["href", "aria-label"];

    function jH(e, t, r, n, s, o) {
        return e.link ? (G(), K("a", {
            key: 0,
            class: De([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [OP(e.$slots, "default")], 10, GH)) : Ee("", !0)
    }
    const WH = at(UH, [
        ["render", jH]
    ]);
    tt({
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
                if (this.sanitizers && (t.value = OS.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                    t.value = t.value.substring(0, r);
                    return
                }
                this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
            }
        }
    });
    var Bi, bl, ja = typeof Map == "function" ? new Map : (Bi = [], bl = [], {
            has: function(e) {
                return Bi.indexOf(e) > -1
            },
            get: function(e) {
                return bl[Bi.indexOf(e)]
            },
            set: function(e, t) {
                Bi.indexOf(e) === -1 && (Bi.push(e), bl.push(t))
            },
            delete: function(e) {
                var t = Bi.indexOf(e);
                t > -1 && (Bi.splice(t, 1), bl.splice(t, 1))
            }
        }),
        IS = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        IS = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function HH(e) {
        var t = ja.get(e);
        t && t.destroy()
    }

    function KH(e) {
        var t = ja.get(e);
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
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !ja.has(n)) {
                    var s, o = null,
                        l = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== l && b()
                        },
                        h = function($) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", b, !1), n.removeEventListener("keyup", b, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", b, !1), Object.keys($).forEach(function(P) {
                                n.style[P] = $[P]
                            }), ja.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", b, !1), n.addEventListener("autosize:update", b, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", ja.set(n, {
                        destroy: h,
                        update: b
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), o = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), b()
                }

                function g($) {
                    var P = n.style.width;
                    n.style.width = "0px", n.style.width = P, n.style.overflowY = $
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
                            P = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", l = n.clientWidth, $.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), P && (document.documentElement.scrollTop = P)
                    }
                }

                function b() {
                    _();
                    var $ = Math.round(parseFloat(n.style.height)),
                        P = window.getComputedStyle(n, null),
                        M = P.boxSizing === "content-box" ? Math.round(parseFloat(P.height)) : n.offsetHeight;
                    if (M < $ ? P.overflowY === "hidden" && (g("scroll"), _(), M = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : P.overflowY !== "hidden" && (g("hidden"), _(), M = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== M) {
                        u = M;
                        var U = IS("autosize:resized");
                        try {
                            n.dispatchEvent(U)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], HH), e
    }, Da.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], KH), e
    });
    var VH = Da,
        qH = {
            exports: {}
        },
        Tl = function(e) {
            return e && e.Math == Math && e
        },
        Fr = Tl(typeof globalThis == "object" && globalThis) || Tl(typeof window == "object" && window) || Tl(typeof self == "object" && self) || Tl(typeof Lt == "object" && Lt) || function() {
            return this
        }() || Function("return this")(),
        sp = {},
        Br = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        YH = Br,
        Ei = !YH(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        zH = Br,
        ap = !zH(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        XH = ap,
        Sl = Function.prototype.call,
        bi = XH ? Sl.bind(Sl) : function() {
            return Sl.apply(Sl, arguments)
        },
        AS = {},
        NS = {}.propertyIsEnumerable,
        RS = Object.getOwnPropertyDescriptor,
        JH = RS && !NS.call({
            1: 2
        }, 1);
    AS.f = JH ? function(t) {
        var r = RS(this, t);
        return !!r && r.enumerable
    } : NS;
    var PS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        LS = ap,
        kS = Function.prototype,
        QH = kS.bind,
        Rd = kS.call,
        ZH = LS && QH.bind(Rd, Rd),
        fr = LS ? function(e) {
            return e && ZH(e)
        } : function(e) {
            return e && function() {
                return Rd.apply(e, arguments)
            }
        },
        DS = fr,
        eK = DS({}.toString),
        tK = DS("".slice),
        Lc = function(e) {
            return tK(eK(e), 8, -1)
        },
        rK = fr,
        nK = Br,
        iK = Lc,
        Rf = Object,
        sK = rK("".split),
        aK = nK(function() {
            return !Rf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return iK(e) == "String" ? sK(e, "") : Rf(e)
        } : Rf,
        oK = TypeError,
        vo = function(e) {
            if (e == null) throw oK("Can't call method on " + e);
            return e
        },
        lK = aK,
        cK = vo,
        kc = function(e) {
            return lK(cK(e))
        },
        $r = function(e) {
            return typeof e == "function"
        },
        uK = $r,
        ca = function(e) {
            return typeof e == "object" ? e !== null : uK(e)
        },
        Pf = Fr,
        fK = $r,
        dK = function(e) {
            return fK(e) ? e : void 0
        },
        Dc = function(e, t) {
            return arguments.length < 2 ? dK(Pf[e]) : Pf[e] && Pf[e][t]
        },
        hK = fr,
        xS = hK({}.isPrototypeOf),
        pK = Dc,
        gK = pK("navigator", "userAgent") || "",
        MS = Fr,
        Lf = gK,
        Wy = MS.process,
        Hy = MS.Deno,
        Ky = Wy && Wy.versions || Hy && Hy.version,
        Vy = Ky && Ky.v8,
        sn, tc;
    Vy && (sn = Vy.split("."), tc = sn[0] > 0 && sn[0] < 4 ? 1 : +(sn[0] + sn[1]));
    !tc && Lf && (sn = Lf.match(/Edge\/(\d+)/), (!sn || sn[1] >= 74) && (sn = Lf.match(/Chrome\/(\d+)/), sn && (tc = +sn[1])));
    var mK = tc,
        qy = mK,
        vK = Br,
        FS = !!Object.getOwnPropertySymbols && !vK(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && qy && qy < 41
        }),
        yK = FS,
        BS = yK && !Symbol.sham && typeof Symbol.iterator == "symbol",
        _K = Dc,
        EK = $r,
        bK = xS,
        TK = BS,
        SK = Object,
        US = TK ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = _K("Symbol");
            return EK(t) && bK(t.prototype, SK(e))
        },
        OK = String,
        wK = function(e) {
            try {
                return OK(e)
            } catch {
                return "Object"
            }
        },
        $K = $r,
        CK = wK,
        IK = TypeError,
        AK = function(e) {
            if ($K(e)) return e;
            throw IK(CK(e) + " is not a function")
        },
        NK = AK,
        op = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : NK(r)
        },
        kf = bi,
        Df = $r,
        xf = ca,
        RK = TypeError,
        PK = function(e, t) {
            var r, n;
            if (t === "string" && Df(r = e.toString) && !xf(n = kf(r, e)) || Df(r = e.valueOf) && !xf(n = kf(r, e)) || t !== "string" && Df(r = e.toString) && !xf(n = kf(r, e))) return n;
            throw RK("Can't convert object to primitive value")
        },
        xc = {
            exports: {}
        },
        Yy = Fr,
        LK = Object.defineProperty,
        lp = function(e, t) {
            try {
                LK(Yy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Yy[e] = t
            }
            return t
        },
        kK = Fr,
        DK = lp,
        zy = "__core-js_shared__",
        xK = kK[zy] || DK(zy, {}),
        cp = xK,
        Xy = cp;
    (xc.exports = function(e, t) {
        return Xy[e] || (Xy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var MK = vo,
        FK = Object,
        GS = function(e) {
            return FK(MK(e))
        },
        BK = fr,
        UK = GS,
        GK = BK({}.hasOwnProperty),
        Ti = Object.hasOwn || function(t, r) {
            return GK(UK(t), r)
        },
        jK = fr,
        WK = 0,
        HK = Math.random(),
        KK = jK(1 .toString),
        jS = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + KK(++WK + HK, 36)
        },
        VK = Fr,
        qK = xc.exports,
        Jy = Ti,
        YK = jS,
        Qy = FS,
        WS = BS,
        $s = qK("wks"),
        ns = VK.Symbol,
        Zy = ns && ns.for,
        zK = WS ? ns : ns && ns.withoutSetter || YK,
        cs = function(e) {
            if (!Jy($s, e) || !(Qy || typeof $s[e] == "string")) {
                var t = "Symbol." + e;
                Qy && Jy(ns, e) ? $s[e] = ns[e] : WS && Zy ? $s[e] = Zy(t) : $s[e] = zK(t)
            }
            return $s[e]
        },
        XK = bi,
        e_ = ca,
        t_ = US,
        JK = op,
        QK = PK,
        ZK = cs,
        e8 = TypeError,
        t8 = ZK("toPrimitive"),
        r8 = function(e, t) {
            if (!e_(e) || t_(e)) return e;
            var r = JK(e, t8),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = XK(r, e, t), !e_(n) || t_(n)) return n;
                throw e8("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), QK(e, t)
        },
        n8 = r8,
        i8 = US,
        HS = function(e) {
            var t = n8(e, "string");
            return i8(t) ? t : t + ""
        },
        s8 = Fr,
        r_ = ca,
        Pd = s8.document,
        a8 = r_(Pd) && r_(Pd.createElement),
        KS = function(e) {
            return a8 ? Pd.createElement(e) : {}
        },
        o8 = Ei,
        l8 = Br,
        c8 = KS,
        VS = !o8 && !l8(function() {
            return Object.defineProperty(c8("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        u8 = Ei,
        f8 = bi,
        d8 = AS,
        h8 = PS,
        p8 = kc,
        g8 = HS,
        m8 = Ti,
        v8 = VS,
        n_ = Object.getOwnPropertyDescriptor;
    sp.f = u8 ? n_ : function(t, r) {
        if (t = p8(t), r = g8(r), v8) try {
            return n_(t, r)
        } catch {}
        if (m8(t, r)) return h8(!f8(d8.f, t, r), t[r])
    };
    var yo = {},
        y8 = Ei,
        _8 = Br,
        qS = y8 && _8(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        E8 = ca,
        b8 = String,
        T8 = TypeError,
        us = function(e) {
            if (E8(e)) return e;
            throw T8(b8(e) + " is not an object")
        },
        S8 = Ei,
        O8 = VS,
        w8 = qS,
        Ol = us,
        i_ = HS,
        $8 = TypeError,
        Mf = Object.defineProperty,
        C8 = Object.getOwnPropertyDescriptor,
        Ff = "enumerable",
        Bf = "configurable",
        Uf = "writable";
    yo.f = S8 ? w8 ? function(t, r, n) {
        if (Ol(t), r = i_(r), Ol(n), typeof t == "function" && r === "prototype" && "value" in n && Uf in n && !n[Uf]) {
            var s = C8(t, r);
            s && s[Uf] && (t[r] = n.value, n = {
                configurable: Bf in n ? n[Bf] : s[Bf],
                enumerable: Ff in n ? n[Ff] : s[Ff],
                writable: !1
            })
        }
        return Mf(t, r, n)
    } : Mf : function(t, r, n) {
        if (Ol(t), r = i_(r), Ol(n), O8) try {
            return Mf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw $8("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var I8 = Ei,
        A8 = yo,
        N8 = PS,
        up = I8 ? function(e, t, r) {
            return A8.f(e, t, N8(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        YS = {
            exports: {}
        },
        Ld = Ei,
        R8 = Ti,
        zS = Function.prototype,
        P8 = Ld && Object.getOwnPropertyDescriptor,
        fp = R8(zS, "name"),
        L8 = fp && function() {}.name === "something",
        k8 = fp && (!Ld || Ld && P8(zS, "name").configurable),
        D8 = {
            EXISTS: fp,
            PROPER: L8,
            CONFIGURABLE: k8
        },
        x8 = fr,
        M8 = $r,
        kd = cp,
        F8 = x8(Function.toString);
    M8(kd.inspectSource) || (kd.inspectSource = function(e) {
        return F8(e)
    });
    var XS = kd.inspectSource,
        B8 = Fr,
        U8 = $r,
        G8 = XS,
        s_ = B8.WeakMap,
        j8 = U8(s_) && /native code/.test(G8(s_)),
        W8 = xc.exports,
        H8 = jS,
        a_ = W8("keys"),
        JS = function(e) {
            return a_[e] || (a_[e] = H8(e))
        },
        dp = {},
        K8 = j8,
        QS = Fr,
        Gf = fr,
        V8 = ca,
        q8 = up,
        jf = Ti,
        Wf = cp,
        Y8 = JS,
        z8 = dp,
        o_ = "Object already initialized",
        Dd = QS.TypeError,
        X8 = QS.WeakMap,
        rc, ro, nc, J8 = function(e) {
            return nc(e) ? ro(e) : rc(e, {})
        },
        Q8 = function(e) {
            return function(t) {
                var r;
                if (!V8(t) || (r = ro(t)).type !== e) throw Dd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (K8 || Wf.state) {
        var Ui = Wf.state || (Wf.state = new X8),
            Z8 = Gf(Ui.get),
            l_ = Gf(Ui.has),
            eV = Gf(Ui.set);
        rc = function(e, t) {
            if (l_(Ui, e)) throw new Dd(o_);
            return t.facade = e, eV(Ui, e, t), t
        }, ro = function(e) {
            return Z8(Ui, e) || {}
        }, nc = function(e) {
            return l_(Ui, e)
        }
    } else {
        var Cs = Y8("state");
        z8[Cs] = !0, rc = function(e, t) {
            if (jf(e, Cs)) throw new Dd(o_);
            return t.facade = e, q8(e, Cs, t), t
        }, ro = function(e) {
            return jf(e, Cs) ? e[Cs] : {}
        }, nc = function(e) {
            return jf(e, Cs)
        }
    }
    var ZS = {
            set: rc,
            get: ro,
            has: nc,
            enforce: J8,
            getterFor: Q8
        },
        tV = Br,
        rV = $r,
        wl = Ti,
        xd = Ei,
        nV = D8.CONFIGURABLE,
        iV = XS,
        eO = ZS,
        sV = eO.enforce,
        aV = eO.get,
        xl = Object.defineProperty,
        oV = xd && !tV(function() {
            return xl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        lV = String(String).split("String"),
        cV = YS.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!wl(e, "name") || nV && e.name !== t) && (xd ? xl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), oV && r && wl(r, "arity") && e.length !== r.arity && xl(e, "length", {
                value: r.arity
            });
            try {
                r && wl(r, "constructor") && r.constructor ? xd && xl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = sV(e);
            return wl(n, "source") || (n.source = lV.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = cV(function() {
        return rV(this) && aV(this).source || iV(this)
    }, "toString");
    var uV = $r,
        fV = yo,
        dV = YS.exports,
        hV = lp,
        tO = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (uV(r) && dV(r, o, n), n.global) s ? e[t] = r : hV(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : fV.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        rO = {},
        pV = Math.ceil,
        gV = Math.floor,
        mV = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? gV : pV)(r)
        },
        vV = mV,
        Mc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : vV(t)
        },
        yV = Mc,
        _V = Math.max,
        EV = Math.min,
        bV = function(e, t) {
            var r = yV(e);
            return r < 0 ? _V(r + t, 0) : EV(r, t)
        },
        TV = Mc,
        SV = Math.min,
        nO = function(e) {
            return e > 0 ? SV(TV(e), 9007199254740991) : 0
        },
        OV = nO,
        wV = function(e) {
            return OV(e.length)
        },
        $V = kc,
        CV = bV,
        IV = wV,
        c_ = function(e) {
            return function(t, r, n) {
                var s = $V(t),
                    o = IV(s),
                    l = CV(n, o),
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
        AV = {
            includes: c_(!0),
            indexOf: c_(!1)
        },
        NV = fr,
        Hf = Ti,
        RV = kc,
        PV = AV.indexOf,
        LV = dp,
        u_ = NV([].push),
        iO = function(e, t) {
            var r = RV(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Hf(LV, o) && Hf(r, o) && u_(s, o);
            for (; t.length > n;) Hf(r, o = t[n++]) && (~PV(s, o) || u_(s, o));
            return s
        },
        hp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        kV = iO,
        DV = hp,
        xV = DV.concat("length", "prototype");
    rO.f = Object.getOwnPropertyNames || function(t) {
        return kV(t, xV)
    };
    var sO = {};
    sO.f = Object.getOwnPropertySymbols;
    var MV = Dc,
        FV = fr,
        BV = rO,
        UV = sO,
        GV = us,
        jV = FV([].concat),
        WV = MV("Reflect", "ownKeys") || function(t) {
            var r = BV.f(GV(t)),
                n = UV.f;
            return n ? jV(r, n(t)) : r
        },
        f_ = Ti,
        HV = WV,
        KV = sp,
        VV = yo,
        qV = function(e, t, r) {
            for (var n = HV(t), s = VV.f, o = KV.f, l = 0; l < n.length; l++) {
                var u = n[l];
                !f_(e, u) && !(r && f_(r, u)) && s(e, u, o(t, u))
            }
        },
        YV = Br,
        zV = $r,
        XV = /#|\.prototype\./,
        _o = function(e, t) {
            var r = QV[JV(e)];
            return r == e4 ? !0 : r == ZV ? !1 : zV(t) ? YV(t) : !!t
        },
        JV = _o.normalize = function(e) {
            return String(e).replace(XV, ".").toLowerCase()
        },
        QV = _o.data = {},
        ZV = _o.NATIVE = "N",
        e4 = _o.POLYFILL = "P",
        t4 = _o,
        Kf = Fr,
        r4 = sp.f,
        n4 = up,
        i4 = tO,
        s4 = lp,
        a4 = qV,
        o4 = t4,
        aO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, l, u, f, h, g;
            if (n ? l = Kf : s ? l = Kf[r] || s4(r, {}) : l = (Kf[r] || {}).prototype, l)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = r4(l, u), f = g && g.value) : f = l[u], o = o4(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        a4(h, f)
                    }(e.sham || f && f.sham) && n4(h, "sham", !0), i4(l, u, h, e)
                }
        },
        l4 = ca,
        c4 = Lc,
        u4 = cs,
        f4 = u4("match"),
        d4 = function(e) {
            var t;
            return l4(e) && ((t = e[f4]) !== void 0 ? !!t : c4(e) == "RegExp")
        },
        h4 = cs,
        p4 = h4("toStringTag"),
        oO = {};
    oO[p4] = "z";
    var g4 = String(oO) === "[object z]",
        m4 = g4,
        v4 = $r,
        Ml = Lc,
        y4 = cs,
        _4 = y4("toStringTag"),
        E4 = Object,
        b4 = Ml(function() {
            return arguments
        }()) == "Arguments",
        T4 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        S4 = m4 ? Ml : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = T4(t = E4(e), _4)) == "string" ? r : b4 ? Ml(t) : (n = Ml(t)) == "Object" && v4(t.callee) ? "Arguments" : n
        },
        O4 = S4,
        w4 = String,
        Fc = function(e) {
            if (O4(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return w4(e)
        },
        $4 = us,
        lO = function() {
            var e = $4(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        C4 = bi,
        I4 = Ti,
        A4 = xS,
        N4 = lO,
        d_ = RegExp.prototype,
        R4 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in d_) && !I4(e, "flags") && A4(d_, e) ? C4(N4, e) : t
        },
        pp = fr,
        P4 = GS,
        L4 = Math.floor,
        Vf = pp("".charAt),
        k4 = pp("".replace),
        qf = pp("".slice),
        D4 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        x4 = /\$([$&'`]|\d{1,2})/g,
        cO = function(e, t, r, n, s, o) {
            var l = r + e.length,
                u = n.length,
                f = x4;
            return s !== void 0 && (s = P4(s), f = D4), k4(o, f, function(h, g) {
                var _;
                switch (Vf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return qf(t, 0, r);
                    case "'":
                        return qf(t, l);
                    case "<":
                        _ = s[qf(g, 1, -1)];
                        break;
                    default:
                        var b = +g;
                        if (b === 0) return h;
                        if (b > u) {
                            var $ = L4(b / 10);
                            return $ === 0 ? h : $ <= u ? n[$ - 1] === void 0 ? Vf(g, 1) : n[$ - 1] + Vf(g, 1) : h
                        }
                        _ = n[b - 1]
                }
                return _ === void 0 ? "" : _
            })
        },
        M4 = aO,
        F4 = bi,
        gp = fr,
        h_ = vo,
        B4 = $r,
        U4 = d4,
        Pa = Fc,
        G4 = op,
        j4 = R4,
        W4 = cO,
        H4 = cs,
        K4 = H4("replace"),
        V4 = TypeError,
        uO = gp("".indexOf);
    gp("".replace);
    var p_ = gp("".slice),
        q4 = Math.max,
        g_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : uO(e, t, r)
        };
    M4({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = h_(this),
                s, o, l, u, f, h, g, _, b, $ = 0,
                P = 0,
                M = "";
            if (t != null) {
                if (s = U4(t), s && (o = Pa(h_(j4(t))), !~uO(o, "g"))) throw V4("`.replaceAll` does not allow non-global regexes");
                if (l = G4(t, K4), l) return F4(l, t, n, r)
            }
            for (u = Pa(n), f = Pa(t), h = B4(r), h || (r = Pa(r)), g = f.length, _ = q4(1, g), $ = g_(u, f, 0); $ !== -1;) b = h ? Pa(r(f, $, u)) : W4(f, u, $, [], void 0, r), M += p_(u, P, $) + b, P = $ + g, $ = g_(u, f, $ + _);
            return P < u.length && (M += p_(u, P)), M
        }
    });
    var mp = Br,
        Y4 = Fr,
        vp = Y4.RegExp,
        yp = mp(function() {
            var e = vp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        z4 = yp || mp(function() {
            return !vp("a", "y").sticky
        }),
        X4 = yp || mp(function() {
            var e = vp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        J4 = {
            BROKEN_CARET: X4,
            MISSED_STICKY: z4,
            UNSUPPORTED_Y: yp
        },
        fO = {},
        Q4 = iO,
        Z4 = hp,
        eq = Object.keys || function(t) {
            return Q4(t, Z4)
        },
        tq = Ei,
        rq = qS,
        nq = yo,
        iq = us,
        sq = kc,
        aq = eq;
    fO.f = tq && !rq ? Object.defineProperties : function(t, r) {
        iq(t);
        for (var n = sq(r), s = aq(r), o = s.length, l = 0, u; o > l;) nq.f(t, u = s[l++], n[u]);
        return t
    };
    var oq = Dc,
        lq = oq("document", "documentElement"),
        cq = us,
        uq = fO,
        m_ = hp,
        fq = dp,
        dq = lq,
        hq = KS,
        pq = JS,
        v_ = ">",
        y_ = "<",
        Md = "prototype",
        Fd = "script",
        dO = pq("IE_PROTO"),
        Yf = function() {},
        hO = function(e) {
            return y_ + Fd + v_ + e + y_ + "/" + Fd + v_
        },
        __ = function(e) {
            e.write(hO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        gq = function() {
            var e = hq("iframe"),
                t = "java" + Fd + ":",
                r;
            return e.style.display = "none", dq.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(hO("document.F=Object")), r.close(), r.F
        },
        $l, Fl = function() {
            try {
                $l = new ActiveXObject("htmlfile")
            } catch {}
            Fl = typeof document < "u" ? document.domain && $l ? __($l) : gq() : __($l);
            for (var e = m_.length; e--;) delete Fl[Md][m_[e]];
            return Fl()
        };
    fq[dO] = !0;
    var mq = Object.create || function(t, r) {
            var n;
            return t !== null ? (Yf[Md] = cq(t), n = new Yf, Yf[Md] = null, n[dO] = t) : n = Fl(), r === void 0 ? n : uq.f(n, r)
        },
        vq = Br,
        yq = Fr,
        _q = yq.RegExp,
        Eq = vq(function() {
            var e = _q(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        bq = Br,
        Tq = Fr,
        Sq = Tq.RegExp,
        Oq = bq(function() {
            var e = Sq("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Rs = bi,
        Bc = fr,
        wq = Fc,
        $q = lO,
        Cq = J4,
        Iq = xc.exports,
        Aq = mq,
        Nq = ZS.get,
        Rq = Eq,
        Pq = Oq,
        Lq = Iq("native-string-replace", String.prototype.replace),
        ic = RegExp.prototype.exec,
        Bd = ic,
        kq = Bc("".charAt),
        Dq = Bc("".indexOf),
        xq = Bc("".replace),
        zf = Bc("".slice),
        Ud = function() {
            var e = /a/,
                t = /b*/g;
            return Rs(ic, e, "a"), Rs(ic, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        pO = Cq.BROKEN_CARET,
        Gd = /()??/.exec("")[1] !== void 0,
        Mq = Ud || Gd || pO || Rq || Pq;
    Mq && (Bd = function(t) {
        var r = this,
            n = Nq(r),
            s = wq(t),
            o = n.raw,
            l, u, f, h, g, _, b;
        if (o) return o.lastIndex = r.lastIndex, l = Rs(Bd, o, s), r.lastIndex = o.lastIndex, l;
        var $ = n.groups,
            P = pO && r.sticky,
            M = Rs($q, r),
            U = r.source,
            C = 0,
            q = s;
        if (P && (M = xq(M, "y", ""), Dq(M, "g") === -1 && (M += "g"), q = zf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && kq(s, r.lastIndex - 1) !== `
`) && (U = "(?: " + U + ")", q = " " + q, C++), u = new RegExp("^(?:" + U + ")", M)), Gd && (u = new RegExp("^" + U + "$(?!\\s)", M)), Ud && (f = r.lastIndex), h = Rs(ic, P ? u : r, q), P ? h ? (h.input = zf(h.input, C), h[0] = zf(h[0], C), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Ud && h && (r.lastIndex = r.global ? h.index + h[0].length : f), Gd && h && h.length > 1 && Rs(Lq, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && $)
            for (h.groups = _ = Aq(null), g = 0; g < $.length; g++) b = $[g], _[b[0]] = h[b[1]];
        return h
    });
    var _p = Bd,
        Fq = aO,
        E_ = _p;
    Fq({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== E_
    }, {
        exec: E_
    });
    var Bq = ap,
        gO = Function.prototype,
        b_ = gO.apply,
        T_ = gO.call,
        Uq = typeof Reflect == "object" && Reflect.apply || (Bq ? T_.bind(b_) : function() {
            return T_.apply(b_, arguments)
        }),
        S_ = fr,
        O_ = tO,
        Gq = _p,
        w_ = Br,
        mO = cs,
        jq = up,
        Wq = mO("species"),
        Xf = RegExp.prototype,
        Hq = function(e, t, r, n) {
            var s = mO(e),
                o = !w_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                l = o && !w_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[Wq] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !l || r) {
                var u = S_(/./ [s]),
                    f = t(s, "" [e], function(h, g, _, b, $) {
                        var P = S_(h),
                            M = g.exec;
                        return M === Gq || M === Xf.exec ? o && !$ ? {
                            done: !0,
                            value: u(g, _, b)
                        } : {
                            done: !0,
                            value: P(_, g, b)
                        } : {
                            done: !1
                        }
                    });
                O_(String.prototype, e, f[0]), O_(Xf, s, f[1])
            }
            n && jq(Xf[s], "sham", !0)
        },
        Ep = fr,
        Kq = Mc,
        Vq = Fc,
        qq = vo,
        Yq = Ep("".charAt),
        $_ = Ep("".charCodeAt),
        zq = Ep("".slice),
        C_ = function(e) {
            return function(t, r) {
                var n = Vq(qq(t)),
                    s = Kq(r),
                    o = n.length,
                    l, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (l = $_(n, s), l < 55296 || l > 56319 || s + 1 === o || (u = $_(n, s + 1)) < 56320 || u > 57343 ? e ? Yq(n, s) : l : e ? zq(n, s, s + 2) : (l - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        Xq = {
            codeAt: C_(!1),
            charAt: C_(!0)
        },
        Jq = Xq.charAt,
        Qq = function(e, t, r) {
            return t + (r ? Jq(e, t).length : 1)
        },
        I_ = bi,
        Zq = us,
        eY = $r,
        tY = Lc,
        rY = _p,
        nY = TypeError,
        iY = function(e, t) {
            var r = e.exec;
            if (eY(r)) {
                var n = I_(r, e, t);
                return n !== null && Zq(n), n
            }
            if (tY(e) === "RegExp") return I_(rY, e, t);
            throw nY("RegExp#exec called on incompatible receiver")
        },
        sY = Uq,
        A_ = bi,
        Uc = fr,
        aY = Hq,
        oY = Br,
        lY = us,
        cY = $r,
        uY = Mc,
        fY = nO,
        Is = Fc,
        dY = vo,
        hY = Qq,
        pY = op,
        gY = cO,
        mY = iY,
        vY = cs,
        jd = vY("replace"),
        yY = Math.max,
        _Y = Math.min,
        EY = Uc([].concat),
        Jf = Uc([].push),
        N_ = Uc("".indexOf),
        R_ = Uc("".slice),
        bY = function(e) {
            return e === void 0 ? e : String(e)
        },
        TY = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        P_ = function() {
            return /./ [jd] ? /./ [jd]("a", "$0") === "" : !1
        }(),
        SY = !oY(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    aY("replace", function(e, t, r) {
        var n = P_ ? "$" : "$0";
        return [function(o, l) {
            var u = dY(this),
                f = o == null ? void 0 : pY(o, jd);
            return f ? A_(f, o, u, l) : A_(t, Is(u), o, l)
        }, function(s, o) {
            var l = lY(this),
                u = Is(s);
            if (typeof o == "string" && N_(o, n) === -1 && N_(o, "$<") === -1) {
                var f = r(t, l, u, o);
                if (f.done) return f.value
            }
            var h = cY(o);
            h || (o = Is(o));
            var g = l.global;
            if (g) {
                var _ = l.unicode;
                l.lastIndex = 0
            }
            for (var b = [];;) {
                var $ = mY(l, u);
                if ($ === null || (Jf(b, $), !g)) break;
                var P = Is($[0]);
                P === "" && (l.lastIndex = hY(u, fY(l.lastIndex), _))
            }
            for (var M = "", U = 0, C = 0; C < b.length; C++) {
                $ = b[C];
                for (var q = Is($[0]), X = yY(_Y(uY($.index), u.length), 0), W = [], j = 1; j < $.length; j++) Jf(W, bY($[j]));
                var Q = $.groups;
                if (h) {
                    var oe = EY([q], W, X, u);
                    Q !== void 0 && Jf(oe, Q);
                    var le = Is(sY(o, void 0, oe))
                } else le = gY(q, u, X, W, Q, o);
                X >= U && (M += R_(u, U, X) + le, U = X + q.length)
            }
            return M + R_(u, U)
        }]
    }, !SY || !TY || P_);
    var OY = Fr,
        wY = fr,
        $Y = function(e, t) {
            return wY(OY[e].prototype[t])
        },
        CY = $Y,
        IY = CY("String", "replaceAll"),
        AY = IY,
        NY = AY,
        RY = NY,
        PY = RY,
        LY = PY,
        kY = LY;
    (function(e) {
        e.exports = kY
    })(qH);
    const DY = tt({
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
                this.autosize && VH(this.$refs.textarea)
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
`, ""), this.sanitizers && (t.value = OS.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                },
                onKeypressEnter(e) {
                    this.$emit("keypress", e)
                }
            }
        }),
        xY = ["value"];

    function MY(e, t, r, n, s, o) {
        return G(), K("textarea", {
            ref: "textarea",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l)),
            onKeypress: t[1] || (t[1] = fo((...l) => e.onKeypressEnter && e.onKeypressEnter(...l), ["enter"]))
        }, null, 40, xY)
    }
    const FY = at(DY, [
        ["render", MY]
    ]);
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
    var Wi = {},
        Gc = {},
        vO = {},
        jc = {},
        bp = {};
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
    })(bp);
    Object.defineProperty(jc, "__esModule", {
        value: !0
    });
    jc.Tokenizer = void 0;
    var ti = bp,
        BY = function() {
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
    jc.Tokenizer = BY;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = jc,
            r = bp,
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
    })(vO);
    var Eo = {};
    Object.defineProperty(Eo, "__esModule", {
        value: !0
    });
    Eo.Tag = void 0;
    var UY = function() {
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
    Eo.Tag = UY;
    Object.defineProperty(Gc, "__esModule", {
        value: !0
    });
    Gc.BBCodeParser = void 0;
    var L_ = vO,
        k_ = Eo,
        GY = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: k_.Tag.create("b"),
                        i: k_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = L_.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === L_.ParseTree.Type.text) {
                        var g = f.content;
                        n && (g = o.escapeHTML ? e.escapeHTML(g) : g), r && !u && (g = g.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), l += g
                    } else {
                        var _ = o.tags[f.content],
                            b = o.treeToHtml(f.subTrees, _.insertLineBreaks, n, s);
                        s ? l += b : l += _.markupGenerator(_, b, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = _.suppressLineBreaks
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
    Gc.BBCodeParser = GY;
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
        var r = Eo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Wi);
    const jY = {
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
    var yO = {
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
    })(yO);
    const WY = yO.exports,
        HY = tt({
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
        jn = e => (lo("data-v-220ec4c0"), e = e(), co(), e),
        KY = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        VY = {
            key: 0,
            class: "power-nav"
        },
        qY = jn(() => H("p", null, "MARKERS", -1)),
        YY = ["onClick"],
        zY = pi("KILL"),
        XY = jn(() => H("br", null, null, -1)),
        JY = pi("ROOM"),
        QY = [zY, XY, JY],
        ZY = jn(() => H("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        e6 = {
            key: 1,
            class: "title focused"
        },
        t6 = {
            key: 2,
            class: "title focused"
        },
        r6 = jn(() => H("svg", {
            viewBox: "0 0 20 10"
        }, [H("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        n6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
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
        }, "Previous", -1)),
        o6 = [s6, a6],
        l6 = jn(() => H("svg", {
            viewBox: "0 0 60 50"
        }, [H("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), H("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        c6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        u6 = [l6, c6];

    function f6(e, t, r, n, s, o) {
        return e.replayer ? (G(), K("div", KY, [e.showPowerNav ? (G(), K("div", VY, [H("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), qY, H("ul", null, [(G(!0), K(ze, null, wr(e.replayer.markerMap, (l, u) => (G(), K("li", {
            key: u,
            class: De({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, et(l[1].marker), 11, YY))), 128))]), H("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, QY), H("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : Ee("", !0), ZY, e.replayer.markerMap.length ? (G(), K("p", t6, et(e.replayer.currentMarkerItemIndex) + " : " + et(e.replayer.currentMarkerItem[1].marker) + " (" + et(e.replayer.currentEntityItemIndex) + ") ", 1)) : (G(), K("p", e6, "Item #" + et(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Ee("", !0) : (G(), K("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, i6)), H("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, o6), H("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, u6)], 512)) : Ee("", !0)
    }
    const d6 = at(HY, [
        ["render", f6],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function h6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var p6 = h6,
        g6 = nT,
        m6 = g6(Object.keys, Object),
        v6 = m6,
        y6 = Fh,
        _6 = v6,
        E6 = Object.prototype,
        b6 = E6.hasOwnProperty;

    function T6(e) {
        if (!y6(e)) return _6(e);
        var t = [];
        for (var r in Object(e)) b6.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var S6 = T6,
        O6 = fT,
        w6 = S6,
        $6 = Ac;

    function C6(e) {
        return $6(e) ? O6(e) : w6(e)
    }
    var Wc = C6,
        I6 = ho,
        A6 = Wc;

    function N6(e, t) {
        return e && I6(t, A6(t), e)
    }
    var R6 = N6,
        P6 = ho,
        L6 = po;

    function k6(e, t) {
        return e && P6(t, L6(t), e)
    }
    var D6 = k6;

    function x6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (o[s++] = l)
        }
        return o
    }
    var M6 = x6;

    function F6() {
        return []
    }
    var _O = F6,
        B6 = M6,
        U6 = _O,
        G6 = Object.prototype,
        j6 = G6.propertyIsEnumerable,
        D_ = Object.getOwnPropertySymbols,
        W6 = D_ ? function(e) {
            return e == null ? [] : (e = Object(e), B6(D_(e), function(t) {
                return j6.call(e, t)
            }))
        } : U6,
        Tp = W6,
        H6 = ho,
        K6 = Tp;

    function V6(e, t) {
        return H6(e, K6(e), t)
    }
    var q6 = V6;

    function Y6(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var EO = Y6,
        z6 = EO,
        X6 = Mh,
        J6 = Tp,
        Q6 = _O,
        Z6 = Object.getOwnPropertySymbols,
        e5 = Z6 ? function(e) {
            for (var t = []; e;) z6(t, J6(e)), e = X6(e);
            return t
        } : Q6,
        bO = e5,
        t5 = ho,
        r5 = bO;

    function n5(e, t) {
        return t5(e, r5(e), t)
    }
    var i5 = n5,
        s5 = EO,
        a5 = yi;

    function o5(e, t, r) {
        var n = t(e);
        return a5(e) ? n : s5(n, r(e))
    }
    var TO = o5,
        l5 = TO,
        c5 = Tp,
        u5 = Wc;

    function f5(e) {
        return l5(e, u5, c5)
    }
    var d5 = f5,
        h5 = TO,
        p5 = bO,
        g5 = po;

    function m5(e) {
        return h5(e, g5, p5)
    }
    var v5 = m5,
        y5 = ls,
        _5 = fn,
        E5 = y5(_5, "DataView"),
        b5 = E5,
        T5 = ls,
        S5 = fn,
        O5 = T5(S5, "Promise"),
        w5 = O5,
        $5 = ls,
        C5 = fn,
        I5 = $5(C5, "Set"),
        A5 = I5,
        N5 = ls,
        R5 = fn,
        P5 = N5(R5, "WeakMap"),
        L5 = P5,
        Wd = b5,
        Hd = kh,
        Kd = w5,
        Vd = A5,
        qd = L5,
        SO = ia,
        ua = Xb,
        x_ = "[object Map]",
        k5 = "[object Object]",
        M_ = "[object Promise]",
        F_ = "[object Set]",
        B_ = "[object WeakMap]",
        U_ = "[object DataView]",
        D5 = ua(Wd),
        x5 = ua(Hd),
        M5 = ua(Kd),
        F5 = ua(Vd),
        B5 = ua(qd),
        Hi = SO;
    (Wd && Hi(new Wd(new ArrayBuffer(1))) != U_ || Hd && Hi(new Hd) != x_ || Kd && Hi(Kd.resolve()) != M_ || Vd && Hi(new Vd) != F_ || qd && Hi(new qd) != B_) && (Hi = function(e) {
        var t = SO(e),
            r = t == k5 ? e.constructor : void 0,
            n = r ? ua(r) : "";
        if (n) switch (n) {
            case D5:
                return U_;
            case x5:
                return x_;
            case M5:
                return M_;
            case F5:
                return F_;
            case B5:
                return B_
        }
        return t
    });
    var Sp = Hi,
        U5 = Object.prototype,
        G5 = U5.hasOwnProperty;

    function j5(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && G5.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var W5 = j5,
        H5 = xh;

    function K5(e, t) {
        var r = t ? H5(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var V5 = K5,
        q5 = /\w*$/;

    function Y5(e) {
        var t = new e.constructor(e.source, q5.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var z5 = Y5,
        G_ = $c,
        j_ = G_ ? G_.prototype : void 0,
        W_ = j_ ? j_.valueOf : void 0;

    function X5(e) {
        return W_ ? Object(W_.call(e)) : {}
    }
    var J5 = X5,
        Q5 = xh,
        Z5 = V5,
        ez = z5,
        tz = J5,
        rz = tT,
        nz = "[object Boolean]",
        iz = "[object Date]",
        sz = "[object Map]",
        az = "[object Number]",
        oz = "[object RegExp]",
        lz = "[object Set]",
        cz = "[object String]",
        uz = "[object Symbol]",
        fz = "[object ArrayBuffer]",
        dz = "[object DataView]",
        hz = "[object Float32Array]",
        pz = "[object Float64Array]",
        gz = "[object Int8Array]",
        mz = "[object Int16Array]",
        vz = "[object Int32Array]",
        yz = "[object Uint8Array]",
        _z = "[object Uint8ClampedArray]",
        Ez = "[object Uint16Array]",
        bz = "[object Uint32Array]";

    function Tz(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case fz:
                return Q5(e);
            case nz:
            case iz:
                return new n(+e);
            case dz:
                return Z5(e, r);
            case hz:
            case pz:
            case gz:
            case mz:
            case vz:
            case yz:
            case _z:
            case Ez:
            case bz:
                return rz(e, r);
            case sz:
                return new n;
            case az:
            case cz:
                return new n(e);
            case oz:
                return ez(e);
            case lz:
                return new n;
            case uz:
                return tz(e)
        }
    }
    var Sz = Tz,
        Oz = Sp,
        wz = vi,
        $z = "[object Map]";

    function Cz(e) {
        return wz(e) && Oz(e) == $z
    }
    var Iz = Cz,
        Az = Iz,
        Nz = Bh,
        H_ = eo.exports,
        K_ = H_ && H_.isMap,
        Rz = K_ ? Nz(K_) : Az,
        Pz = Rz,
        Lz = Sp,
        kz = vi,
        Dz = "[object Set]";

    function xz(e) {
        return kz(e) && Lz(e) == Dz
    }
    var Mz = xz,
        Fz = Mz,
        Bz = Bh,
        V_ = eo.exports,
        q_ = V_ && V_.isSet,
        Uz = q_ ? Bz(q_) : Fz,
        Gz = Uz,
        jz = Qb,
        Wz = p6,
        Hz = Uh,
        Kz = R6,
        Vz = D6,
        qz = zl.exports,
        Yz = rT,
        zz = q6,
        Xz = i5,
        Jz = d5,
        Qz = v5,
        Zz = Sp,
        e9 = W5,
        t9 = Sz,
        r9 = iT,
        n9 = yi,
        i9 = Za.exports,
        s9 = Pz,
        a9 = dn,
        o9 = Gz,
        l9 = Wc,
        c9 = po,
        u9 = 1,
        f9 = 2,
        d9 = 4,
        OO = "[object Arguments]",
        h9 = "[object Array]",
        p9 = "[object Boolean]",
        g9 = "[object Date]",
        m9 = "[object Error]",
        wO = "[object Function]",
        v9 = "[object GeneratorFunction]",
        y9 = "[object Map]",
        _9 = "[object Number]",
        $O = "[object Object]",
        E9 = "[object RegExp]",
        b9 = "[object Set]",
        T9 = "[object String]",
        S9 = "[object Symbol]",
        O9 = "[object WeakMap]",
        w9 = "[object ArrayBuffer]",
        $9 = "[object DataView]",
        C9 = "[object Float32Array]",
        I9 = "[object Float64Array]",
        A9 = "[object Int8Array]",
        N9 = "[object Int16Array]",
        R9 = "[object Int32Array]",
        P9 = "[object Uint8Array]",
        L9 = "[object Uint8ClampedArray]",
        k9 = "[object Uint16Array]",
        D9 = "[object Uint32Array]",
        yt = {};
    yt[OO] = yt[h9] = yt[w9] = yt[$9] = yt[p9] = yt[g9] = yt[C9] = yt[I9] = yt[A9] = yt[N9] = yt[R9] = yt[y9] = yt[_9] = yt[$O] = yt[E9] = yt[b9] = yt[T9] = yt[S9] = yt[P9] = yt[L9] = yt[k9] = yt[D9] = !0;
    yt[m9] = yt[wO] = yt[O9] = !1;

    function Bl(e, t, r, n, s, o) {
        var l, u = t & u9,
            f = t & f9,
            h = t & d9;
        if (r && (l = s ? r(e, n, s, o) : r(e)), l !== void 0) return l;
        if (!a9(e)) return e;
        var g = n9(e);
        if (g) {
            if (l = e9(e), !u) return Yz(e, l)
        } else {
            var _ = Zz(e),
                b = _ == wO || _ == v9;
            if (i9(e)) return qz(e, u);
            if (_ == $O || _ == OO || b && !s) {
                if (l = f || b ? {} : r9(e), !u) return f ? Xz(e, Vz(l, e)) : zz(e, Kz(l, e))
            } else {
                if (!yt[_]) return s ? e : {};
                l = t9(e, _, u)
            }
        }
        o || (o = new jz);
        var $ = o.get(e);
        if ($) return $;
        o.set(e, l), o9(e) ? e.forEach(function(U) {
            l.add(Bl(U, t, r, U, e, o))
        }) : s9(e) && e.forEach(function(U, C) {
            l.set(C, Bl(U, t, r, C, e, o))
        });
        var P = h ? f ? Qz : Jz : f ? c9 : l9,
            M = g ? void 0 : P(e);
        return Wz(M || e, function(U, C) {
            M && (C = U, U = e[C]), Hz(l, C, Bl(U, t, r, C, e, o))
        }), l
    }
    var x9 = Bl,
        M9 = x9,
        F9 = 1,
        B9 = 4;

    function U9(e) {
        return M9(e, F9 | B9)
    }
    var CO = U9;
    const G9 = tt({
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
                !e || (this.values = CO(this.$ecastValues), this.content = (n = jy.getPromptGuess(this.values, e)) != null ? n : null)
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
        IO = "main/pp9/antique-freak/assets/ad9172fc.png",
        AO = "main/pp9/antique-freak/assets/dc131b16.png",
        j9 = "main/pp9/antique-freak/assets/38715b18.png",
        W9 = "main/pp9/antique-freak/assets/b0d7c822.png",
        H9 = "main/pp9/antique-freak/assets/06150f24.png",
        Zr = e => (lo("data-v-2c53389f"), e = e(), co(), e),
        K9 = {
            class: "jbg"
        },
        V9 = {
            key: 0,
            class: "options"
        },
        q9 = Zr(() => H("img", {
            src: IO,
            alt: "Leave Feedback"
        }, null, -1)),
        Y9 = Zr(() => H("span", null, [pi("LEAVE"), H("br"), pi("FEEDBACK")], -1)),
        z9 = [q9, Y9],
        X9 = Zr(() => H("img", {
            src: AO,
            alt: "Send Debug"
        }, null, -1)),
        J9 = Zr(() => H("span", null, [pi("SEND A"), H("br"), pi("DEBUG")], -1)),
        Q9 = [X9, J9],
        Z9 = {
            key: 1,
            class: "feedback"
        },
        eX = Zr(() => H("img", {
            class: "image",
            src: IO,
            alt: "Feedback"
        }, null, -1)),
        tX = Zr(() => H("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        rX = Zr(() => H("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        nX = {
            class: "buttons"
        },
        iX = Zr(() => H("img", {
            src: j9,
            alt: "good"
        }, null, -1)),
        sX = [iX],
        aX = Zr(() => H("img", {
            src: W9,
            alt: "good"
        }, null, -1)),
        oX = [aX],
        lX = Zr(() => H("img", {
            src: H9,
            alt: "bad"
        }, null, -1)),
        cX = [lX],
        uX = {
            class: "actions"
        },
        fX = {
            key: 0,
            class: "content-guess"
        },
        dX = pi("Feedback is about: "),
        hX = {
            key: 2,
            class: "debug"
        },
        pX = Zr(() => H("img", {
            class: "image",
            src: AO,
            alt: "Debug"
        }, null, -1)),
        gX = Zr(() => H("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        mX = {
            class: "actions"
        };

    function vX(e, t, r, n, s, o) {
        return G(), K("div", K9, [e.screen === "options" ? (G(), K("div", V9, [H("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, z9), H("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, Q9)])) : e.screen === "feedback" ? (G(), K("div", Z9, [eX, tX, H("div", {
            class: De(["vibes", {
                "has-selected": e.vibe
            }])
        }, [rX, H("div", nX, [H("button", {
            class: De({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, sX, 2), H("button", {
            class: De({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, oX, 2), H("button", {
            class: De({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, cX, 2)])], 2), H("div", uX, [e.content ? (G(), K("div", fX, [Ie(H("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [wL, e.isContent]
        ]), H("span", null, [dX, H("em", null, et(e.content), 1)])])) : Ee("", !0), Ie(H("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [Jv, e.message]
        ]), H("button", {
            onClick: t[7] || (t[7] = zt((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, et(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (G(), K("div", hX, [pX, gX, H("div", mX, [Ie(H("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [Jv, e.message]
        ]), H("button", {
            onClick: t[9] || (t[9] = zt((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, et(e.$t("ACTION.OK")), 1)])])) : Ee("", !0)])
    }
    const NO = at(G9, [
            ["render", vX],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        yX = tt({
            methods: {
                onFeedbackClick() {
                    this.$showModal(NO)
                }
            }
        });

    function _X(e, t, r, n, s, o) {
        return G(), K("div", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "SEND FEEDBACK")
    }
    const EX = at(yX, [
            ["render", _X],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        bX = {
            install: (e, t) => {
                if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                    if (t.replayer) {
                        e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", d6);
                        return
                    }
                    if (e.config.globalProperties.$debugRecorder = new g3(t.client, t.room), !e.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!Yt.isProduction || Yt.getQueryParam("feedback")) && e.component("Debug", EX), new WY(() => {
                        e.config.globalProperties.$showModal(NO)
                    })
                }
            }
        };
    var TX = fn,
        SX = function() {
            return TX.Date.now()
        },
        OX = SX,
        wX = /\s/;

    function $X(e) {
        for (var t = e.length; t-- && wX.test(e.charAt(t)););
        return t
    }
    var CX = $X,
        IX = CX,
        AX = /^\s+/;

    function NX(e) {
        return e && e.slice(0, IX(e) + 1).replace(AX, "")
    }
    var RX = NX,
        PX = ia,
        LX = vi,
        kX = "[object Symbol]";

    function DX(e) {
        return typeof e == "symbol" || LX(e) && PX(e) == kX
    }
    var Hc = DX,
        xX = RX,
        Y_ = dn,
        MX = Hc,
        z_ = 0 / 0,
        FX = /^[-+]0x[0-9a-f]+$/i,
        BX = /^0b[01]+$/i,
        UX = /^0o[0-7]+$/i,
        GX = parseInt;

    function jX(e) {
        if (typeof e == "number") return e;
        if (MX(e)) return z_;
        if (Y_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Y_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = xX(e);
        var r = BX.test(e);
        return r || UX.test(e) ? GX(e.slice(2), r ? 2 : 8) : FX.test(e) ? z_ : +e
    }
    var WX = jX,
        HX = dn,
        Qf = OX,
        X_ = WX,
        KX = "Expected a function",
        VX = Math.max,
        qX = Math.min;

    function YX(e, t, r) {
        var n, s, o, l, u, f, h = 0,
            g = !1,
            _ = !1,
            b = !0;
        if (typeof e != "function") throw new TypeError(KX);
        t = X_(t) || 0, HX(r) && (g = !!r.leading, _ = "maxWait" in r, o = _ ? VX(X_(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b);

        function $(Q) {
            var oe = n,
                le = s;
            return n = s = void 0, h = Q, l = e.apply(le, oe), l
        }

        function P(Q) {
            return h = Q, u = setTimeout(C, t), g ? $(Q) : l
        }

        function M(Q) {
            var oe = Q - f,
                le = Q - h,
                ue = t - oe;
            return _ ? qX(ue, o - le) : ue
        }

        function U(Q) {
            var oe = Q - f,
                le = Q - h;
            return f === void 0 || oe >= t || oe < 0 || _ && le >= o
        }

        function C() {
            var Q = Qf();
            if (U(Q)) return q(Q);
            u = setTimeout(C, M(Q))
        }

        function q(Q) {
            return u = void 0, b && n ? $(Q) : (n = s = void 0, l)
        }

        function X() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function W() {
            return u === void 0 ? l : q(Qf())
        }

        function j() {
            var Q = Qf(),
                oe = U(Q);
            if (n = arguments, s = this, f = Q, oe) {
                if (u === void 0) return P(f);
                if (_) return clearTimeout(u), u = setTimeout(C, t), $(f)
            }
            return u === void 0 && (u = setTimeout(C, t)), l
        }
        return j.cancel = X, j.flush = W, j
    }
    var zX = YX,
        XX = yi,
        JX = Hc,
        QX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        ZX = /^\w*$/;

    function e7(e, t) {
        if (XX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || JX(e) ? !0 : ZX.test(e) || !QX.test(e) || t != null && e in Object(t)
    }
    var t7 = e7,
        RO = Jb,
        r7 = "Expected a function";

    function Op(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(r7);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var l = e.apply(this, n);
            return r.cache = o.set(s, l) || o, l
        };
        return r.cache = new(Op.Cache || RO), r
    }
    Op.Cache = RO;
    var n7 = Op,
        i7 = n7,
        s7 = 500;

    function a7(e) {
        var t = i7(e, function(n) {
                return r.size === s7 && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var o7 = a7,
        l7 = o7,
        c7 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        u7 = /\\(\\)?/g,
        f7 = l7(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(c7, function(r, n, s, o) {
                t.push(s ? o.replace(u7, "$1") : n || r)
            }), t
        }),
        d7 = f7;

    function h7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var PO = h7,
        J_ = $c,
        p7 = PO,
        g7 = yi,
        m7 = Hc,
        v7 = 1 / 0,
        Q_ = J_ ? J_.prototype : void 0,
        Z_ = Q_ ? Q_.toString : void 0;

    function LO(e) {
        if (typeof e == "string") return e;
        if (g7(e)) return p7(e, LO) + "";
        if (m7(e)) return Z_ ? Z_.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -v7 ? "-0" : t
    }
    var y7 = LO,
        _7 = y7;

    function E7(e) {
        return e == null ? "" : _7(e)
    }
    var b7 = E7,
        T7 = yi,
        S7 = t7,
        O7 = d7,
        w7 = b7;

    function $7(e, t) {
        return T7(e) ? e : S7(e, t) ? [e] : O7(w7(e))
    }
    var kO = $7,
        C7 = Hc,
        I7 = 1 / 0;

    function A7(e) {
        if (typeof e == "string" || C7(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -I7 ? "-0" : t
    }
    var DO = A7,
        N7 = Uh,
        R7 = kO,
        P7 = Gh,
        eE = dn,
        L7 = DO;

    function k7(e, t, r, n) {
        if (!eE(e)) return e;
        t = R7(t, e);
        for (var s = -1, o = t.length, l = o - 1, u = e; u != null && ++s < o;) {
            var f = L7(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = eE(g) ? g : P7(t[s + 1]) ? [] : {})
            }
            N7(u, f, h), u = u[f]
        }
        return e
    }
    var D7 = k7,
        x7 = D7;

    function M7(e, t, r) {
        return e == null ? e : x7(e, t, r)
    }
    var F7 = M7;
    class B7 {
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
            ge(this, "sync", zX(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = Un(this.wsClient.entities), es(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof Or.ArtifactEntity || t instanceof Or.DoodleEntity ? t : t instanceof Or.ObjectEntity ? CO(t.val) : t instanceof Or.TextEntity ? t.text : t instanceof Or.NumberEntity ? t.val : null
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
                    F7(this.newValues, n, u)
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
    const zr = new B7,
        U7 = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    zr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => to.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && zr.setupWatcher()
                    }), zr.sync(), e.config.globalProperties.$ecast = zr.wsClient, e.config.globalProperties.$ecastValues = zr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = zr.sync, e.config.globalProperties.$pauseEcastUpdates = zr.pause, e.config.globalProperties.$resumeEcastUpdates = zr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && zr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && zr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && zr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && zr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, t != null && t.wsClient && e.config.globalProperties.$setupEcast(t)
            }
        },
        bo = {
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

    function G7() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function wp() {
        return !G7() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function j7(e, t) {
        return e.require(t)
    }
    var W7 = {};

    function Xt() {
        return wp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : W7
    }

    function $p(e, t, r) {
        var n = r || Xt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var xO = Object.prototype.toString;

    function MO(e) {
        switch (xO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Si(e, Error)
        }
    }

    function fa(e, t) {
        return xO.call(e) === `[object ${t}]`
    }

    function FO(e) {
        return fa(e, "ErrorEvent")
    }

    function tE(e) {
        return fa(e, "DOMError")
    }

    function H7(e) {
        return fa(e, "DOMException")
    }

    function Qs(e) {
        return fa(e, "String")
    }

    function K7(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Kc(e) {
        return fa(e, "Object")
    }

    function Cp(e) {
        return typeof Event < "u" && Si(e, Event)
    }

    function V7(e) {
        return typeof Element < "u" && Si(e, Element)
    }

    function q7(e) {
        return fa(e, "RegExp")
    }

    function BO(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function Y7(e) {
        return Kc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function z7(e) {
        return typeof e == "number" && e !== e
    }

    function Si(e, t) {
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
            for (; u && f++ < r && (g = X7(u, t), !(g === "html" || f > 1 && h + s.length * l + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function X7(e, t) {
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

    function J7() {
        var e = Xt();
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
    var Q7 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function Z7(e) {
        return e === "http" || e === "https"
    }

    function eJ(e, t = !1) {
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

    function tJ(e) {
        var t = Q7.exec(e);
        if (!t) throw new xa(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, l = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var _ = h.match(/^\d+/);
            _ && (h = _[0])
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

    function rJ(e) {
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
        if (!Z7(n)) throw new xa(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new xa(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function nJ(e) {
        var t = typeof e == "string" ? tJ(e) : UO(e);
        return rJ(t), t
    }
    var iJ = Xt(),
        sJ = "Sentry Logger ",
        sc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function GO(e) {
        var t = Xt();
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

    function rE() {
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
                e && GO(() => {
                    iJ.console[r](`${sJ}[${r}]:`, ...n)
                })
            }
        }) : sc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let Gt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Gt = $p("logger", rE) : Gt = rE();

    function nE(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function iE(e, t) {
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
        return Qs(e) ? q7(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function cr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                WO(s, n)
            } catch {}
            e[t] = s
        }
    }

    function jO(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function WO(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, jO(e, "__sentry_original__", t)
    }

    function Ap(e) {
        return e.__sentry_original__
    }

    function HO(e) {
        if (MO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...aE(e)
        };
        if (Cp(e)) {
            var t = {
                type: e.type,
                target: sE(e.target),
                currentTarget: sE(e.currentTarget),
                ...aE(e)
            };
            return typeof CustomEvent < "u" && Si(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function sE(e) {
        try {
            return V7(e) ? Yd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function aE(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function aJ(e, t = 40) {
        var r = Object.keys(HO(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return nE(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : nE(n, t)
        }
        return ""
    }

    function oJ(e) {
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

    function lJ() {
        if (!("fetch" in Xt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function oE(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function cJ() {
        if (!lJ()) return !1;
        var e = Xt();
        if (oE(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = oE(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function uJ() {
        var e = Xt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var $t = Xt(),
        Wa = {},
        lE = {};

    function fJ(e) {
        if (!lE[e]) switch (lE[e] = !0, e) {
            case "console":
                dJ();
                break;
            case "dom":
                bJ();
                break;
            case "xhr":
                mJ();
                break;
            case "fetch":
                hJ();
                break;
            case "history":
                vJ();
                break;
            case "error":
                TJ();
                break;
            case "unhandledrejection":
                SJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Xi(e, t) {
        Wa[e] = Wa[e] || [], Wa[e].push(t), fJ(e)
    }

    function un(e, t) {
        if (!(!e || !Wa[e]))
            for (var r of Wa[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${gi(r)}
Error:`, n)
            }
    }

    function dJ() {
        "console" in $t && sc.forEach(function(e) {
            e in $t.console && cr($t.console, e, function(t) {
                return function(...r) {
                    un("console", {
                        args: r,
                        level: e
                    }), t && t.apply($t.console, r)
                }
            })
        })
    }

    function hJ() {
        !cJ() || cr($t, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: pJ(t),
                        url: gJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return un("fetch", {
                    ...r
                }), e.apply($t, t).then(n => (un("fetch", {
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

    function pJ(e = []) {
        return "Request" in $t && Si(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function gJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in $t && Si(e[0], Request) ? e[0].url : String(e[0])
    }

    function mJ() {
        if ("XMLHttpRequest" in $t) {
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
    let Cl;

    function vJ() {
        if (!uJ()) return;
        var e = $t.onpopstate;
        $t.onpopstate = function(...r) {
            var n = $t.location.href,
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
        cr($t.history, "pushState", t), cr($t.history, "replaceState", t)
    }
    var yJ = 1e3;
    let Il, Al;

    function _J(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function EJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function cE(e, t = !1) {
        return r => {
            if (!(!r || Al === r) && !EJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Il === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r) : _J(Al, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r), clearTimeout(Il), Il = $t.setTimeout(() => {
                    Il = void 0
                }, yJ)
            }
        }
    }

    function bJ() {
        if ("document" in $t) {
            var e = un.bind(null, "dom"),
                t = cE(e, !0);
            $t.document.addEventListener("click", t, !1), $t.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = $t[r] && $t[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (cr(n, "addEventListener", function(s) {
                    return function(o, l, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var _ = cE(e);
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
    let ed = null;

    function TJ() {
        ed = $t.onerror, $t.onerror = function(e, t, r, n, s) {
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

    function SJ() {
        td = $t.onunhandledrejection, $t.onunhandledrejection = function(e) {
            return un("unhandledrejection", e), td ? td.apply(this, arguments) : !0
        }
    }

    function OJ() {
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

    function KO(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ps(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = KO(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Xd(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function ac(e, t) {
        var r = KO(e);
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

    function wJ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return Jd("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function VO(e, t = 3, r = 100 * 1024) {
        var n = wJ(e, t);
        return IJ(n) > r ? VO(e, t - 1, r) : n
    }

    function Jd(e, t, r = 1 / 0, n = 1 / 0, s = OJ()) {
        const [o, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !z7(t)) return t;
        var u = $J(e, t);
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
        var b = HO(t);
        for (var $ in b)
            if (!!Object.prototype.hasOwnProperty.call(b, $)) {
                if (_ >= n) {
                    g[$] = "[MaxProperties ~]";
                    break
                }
                var P = b[$];
                g[$] = Jd($, P, r - 1, n, s), _ += 1
            } return l(t), g
    }

    function $J(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : Y7(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${gi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function CJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function IJ(e) {
        return CJ(JSON.stringify(e))
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
                    if (BO(r)) {
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
    var AJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function NJ(e) {
        return e === "warn" ? "warning" : AJ.includes(e) ? e : "log"
    }
    var Qd = {
        nowSeconds: () => Date.now() / 1e3
    };

    function RJ() {
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

    function PJ() {
        try {
            var e = j7(Ow, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var nd = wp() ? PJ() : RJ(),
        uE = nd === void 0 ? Qd : {
            nowSeconds: () => (nd.timeOrigin + nd.now()) / 1e3
        },
        qO = Qd.nowSeconds.bind(Qd),
        YO = uE.nowSeconds.bind(uE);
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

    function LJ(e) {
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
                toJSON: () => DJ(r)
            };
        return e && Vc(r, e), r
    }

    function Vc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || YO(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ha()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function kJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Vc(e, r)
    }

    function DJ(e) {
        return oJ({
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
    var fE = 100;
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
            var n = typeof r == "number" ? Math.min(r, fE) : fE;
            if (n <= 0) return this;
            var s = {
                timestamp: qO(),
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
            }, this._notifyEventProcessors([...zO(), ...this._eventProcessors], t, r)
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && Gt.log(`Event processor "${u.id}" dropped event`), BO(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, l)
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

    function zO() {
        return $p("globalEventProcessors", () => [])
    }

    function XO(e) {
        zO().push(e)
    }
    var Np = 4,
        xJ = 100;
    class To {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new is, n = Np) {
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
                maxBreadcrumbs: l = xJ
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var u = qO(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? GO(() => o(f, r)) : f;
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
            var r = dE(this);
            try {
                t(this)
            } finally {
                dE(r)
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
            n && kJ(n), this._sendSessionUpdate(), r && r.setSession()
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
            var f = LJ({
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
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function qc() {
        var e = Xt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function dE(e) {
        var t = qc(),
            r = ai(t);
        return Rp(t, e), r
    }

    function Mr() {
        var e = qc();
        return (!JO(e) || ai(e).isOlderThan(Np)) && Rp(e, new To), wp() ? MJ(e) : ai(e)
    }

    function MJ(e) {
        try {
            var t = qc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!JO(r) || ai(r).isOlderThan(Np)) {
                var n = ai(e).getStackTop();
                Rp(r, new To(n.client, is.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function JO(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return $p("hub", () => new To, e)
    }

    function Rp(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function FJ(e, t) {
        return Mr().captureException(e, {
            captureContext: t
        })
    }

    function BJ(e) {
        Mr().withScope(e)
    }

    function UJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function GJ(e, t) {
        var r = nJ(e),
            n = `${UJ(r)}embed/error-page/`;
        let s = `dsn=${eJ(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let hE;
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
            hE = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Ap(this) || this;
                return hE.apply(r, t)
            }
        }
    }
    no.__initStatic();
    var jJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            h = WJ(l._options, f);
                        return HJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Ws.__initStatic();

    function WJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...jJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function HJ(e, t) {
        return t.ignoreInternal && zJ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ps(e)}`), !0) : KJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ps(e)}`), !0) : VJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ps(e)}.
Url: ${oc(e)}`), !0) : qJ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ps(e)}.
Url: ${oc(e)}`), !0)
    }

    function KJ(e, t) {
        return !t || !t.length ? !1 : YJ(e).some(r => t.some(n => Ip(r, n)))
    }

    function VJ(e, t) {
        if (!t || !t.length) return !1;
        var r = oc(e);
        return r ? t.some(n => Ip(r, n)) : !1
    }

    function qJ(e, t) {
        if (!t || !t.length) return !0;
        var r = oc(e);
        return r ? t.some(n => Ip(r, n)) : !0
    }

    function YJ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error(`Cannot extract message for event ${Ps(e)}`), []
        }
        return []
    }

    function zJ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function XJ(e = []) {
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
            return t ? XJ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error(`Cannot extract url for event ${Ps(e)}`), null
        }
    }

    function QO(e, t) {
        var r = Pp(e, t),
            n = {
                type: t && t.name,
                value: eQ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function JJ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Cp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${aJ(t)}`
                }]
            },
            extra: {
                __serialized__: VO(t)
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

    function id(e, t) {
        return {
            exception: {
                values: [QO(e, t)]
            }
        }
    }

    function Pp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = ZJ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var QJ = /Minified React error #\d+;/i;

    function ZJ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (QJ.test(e.message)) return 1
        }
        return 0
    }

    function eQ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function ZO(e, t, r, n, s) {
        let o;
        if (FO(t) && t.error) {
            var l = t;
            return id(e, l.error)
        }
        if (tE(t) || H7(t)) {
            var u = t;
            if ("stack" in t) o = id(e, t);
            else {
                var f = u.name || (tE(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = pE(e, h, r, n), Xd(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (MO(t)) return id(e, t);
        if (Kc(t) || Cp(t)) {
            var g = t;
            return o = JJ(e, g, r, s), ac(o, {
                synthetic: !0
            }), o
        }
        return o = pE(e, t, r, n), Xd(o, `${t}`, void 0), ac(o, {
            synthetic: !0
        }), o
    }

    function pE(e, t, r, n) {
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
    var tQ = "Breadcrumbs";
    class io {
        static __initStatic() {
            this.id = tQ
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
            this.options.console && Xi("console", nQ), this.options.dom && Xi("dom", rQ(this.options.dom)), this.options.xhr && Xi("xhr", iQ), this.options.fetch && Xi("fetch", sQ), this.options.history && Xi("history", aQ)
        }
    }
    io.__initStatic();

    function rQ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Yd(r.event.target, s) : Yd(r.event, s)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && Mr().addBreadcrumb({
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

    function nQ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: NJ(e.level),
            message: iE(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${iE(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Mr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function iQ(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: r,
                status_code: n,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            Mr().addBreadcrumb({
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

    function sQ(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? Mr().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Mr().addBreadcrumb({
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

    function aQ(e) {
        var t = Xt();
        let r = e.from,
            n = e.to;
        var s = rd(t.location.href);
        let o = rd(r);
        var l = rd(n);
        o.path || (o = s), s.protocol === l.protocol && s.host === l.host && (n = l.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Mr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let Zd = 0;

    function ew() {
        return Zd > 0
    }

    function oQ() {
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
                throw oQ(), BJ(g => {
                    g.addEventProcessor(_ => (t.mechanism && (Xd(_, void 0, void 0), ac(_, t.mechanism)), _.extra = {
                        ..._.extra,
                        arguments: u
                    }, _)), FJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        WO(s, e), jO(e, "__sentry_wrapped__", s);
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
                onerror: lQ,
                onunhandledrejection: cQ
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
                n && t[r] && (dQ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    fi.__initStatic();

    function lQ() {
        Xi("error", e => {
            const [t, r, n] = nw();
            if (!t.getIntegration(fi)) return;
            const {
                msg: s,
                url: o,
                line: l,
                column: u,
                error: f
            } = e;
            if (!(ew() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Qs(s) ? fQ(s, o, l, u) : tw(ZO(r, f || s, void 0, n, !1), o, l, u);
                h.level = "error", rw(t, f, h, "onerror")
            }
        })
    }

    function cQ() {
        Xi("unhandledrejection", e => {
            const [t, r, n] = nw();
            if (!t.getIntegration(fi)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (ew() || s && s.__sentry_own_request__) return !0;
            var o = K7(s) ? uQ(s) : ZO(r, s, void 0, n, !0);
            o.level = "error", rw(t, s, o, "onunhandledrejection")
        })
    }

    function uQ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function fQ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = FO(e) ? e.message : e,
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
        return tw(f, t, r, n)
    }

    function tw(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            l = o[0] = o[0] || {},
            u = l.stacktrace = l.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            _ = Qs(t) && t.length > 0 ? t : J7();
        return f.length === 0 && f.push({
            colno: h,
            filename: _,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function dQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.log(`Global Handler attached: ${e}`)
    }

    function rw(e, t, r, n) {
        ac(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function nw() {
        var e = Mr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var hQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            this._options.setTimeout && cr(t, "setTimeout", gE), this._options.setInterval && cr(t, "setInterval", gE), this._options.requestAnimationFrame && cr(t, "requestAnimationFrame", pQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && cr(XMLHttpRequest.prototype, "send", gQ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : hQ;
                n.forEach(mQ)
            }
        }
    }
    so.__initStatic();

    function gE(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = Zs(r, {
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

    function pQ(e) {
        return function(t) {
            return e.apply(this, [Zs(t, {
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

    function gQ(e) {
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
                        u = Ap(o);
                    return u && (l.mechanism.data.handler = gi(u)), Zs(o, l)
                })
            }), e.apply(this, t)
        }
    }

    function mQ(e) {
        var t = Xt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (cr(r, "addEventListener", function(n) {
            return function(s, o, l) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = Zs(o.handleEvent, {
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
                return n.apply(this, [s, Zs(o, {
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
    var vQ = "cause",
        yQ = 5;
    class Hs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Hs.id
        }
        constructor(t = {}) {
            Hs.prototype.__init.call(this), this._key = t.key || vQ, this._limit = t.limit || yQ
        }
        setupOnce() {
            var t = Mr().getClient();
            !t || XO((r, n) => {
                var s = Mr().getIntegration(Hs);
                return s ? _Q(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Hs.__initStatic();

    function _Q(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Si(s.originalException, Error)) return n;
        var o = iw(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function iw(e, t, r, n, s = []) {
        if (!Si(r[n], Error) || s.length + 1 >= t) return s;
        var o = QO(e, r[n]);
        return iw(e, t, r[n], n, [o, ...s])
    }
    var Gi = Xt();
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
            XO(t => {
                if (Mr().getIntegration(Ks)) {
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
                        if (EQ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function EQ(e, t) {
        return t ? !!(bQ(e, t) || TQ(e, t)) : !1
    }

    function bQ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !aw(e, t) || !sw(e, t))
    }

    function TQ(e, t) {
        var r = mE(t),
            n = mE(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !aw(e, t) || !sw(e, t))
    }

    function sw(e, t) {
        let r = vE(e),
            n = vE(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                o = r[l];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function aw(e, t) {
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

    function mE(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function vE(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Ws, new no, new so, new io, new fi, new Hs, new Vs, new Ks;

    function SQ(e = {}, t = Mr()) {
        var r = Xt();
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
        l.async = !0, l.src = GJ(o, e), e.onLoad && (l.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const OQ = tt({
            setup() {
                return {
                    fatalError: Zi(bo.fatal.error)
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
                    SQ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        So = e => (lo("data-v-a7272d53"), e = e(), co(), e),
        wQ = {
            class: "jbg fatal"
        },
        $Q = {
            class: "constrain"
        },
        CQ = So(() => H("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        IQ = {
            class: "content"
        },
        AQ = So(() => H("h1", null, "You have encountered an error", -1)),
        NQ = So(() => H("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        RQ = So(() => H("ul", null, [H("li", null, "Refresh the page"), H("li", null, "Turn off adblockers or other browser extensions."), H("li", null, "Check your connection to the Internet."), H("li", null, "Make sure you're using an up-to-date browser."), H("li", null, "If that doesn't work, let us know.")], -1)),
        PQ = So(() => H("hr", null, null, -1)),
        LQ = {
            class: "error"
        };

    function kQ(e, t, r, n, s, o) {
        return G(), K("div", wQ, [H("div", $Q, [CQ, H("div", IQ, [AQ, NQ, RQ, H("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), PQ, H("pre", LQ, et(e.message), 1)])])])
    }
    const DQ = at(OQ, [
            ["render", kQ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Nl = Un({
            hasCrashed: !1
        }),
        xQ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(bo.fatal.error, Dr(() => Nl));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof ui.EcastEntityNotFound || r instanceof ui.EcastFilterError || r instanceof ui.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Nl.hasCrashed = !0, Nl.event = r, Nl.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", DQ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var MQ = kO,
        FQ = DO;

    function BQ(e, t) {
        t = MQ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[FQ(t[r++])];
        return r && r == n ? e : void 0
    }
    var UQ = BQ,
        GQ = UQ;

    function jQ(e, t, r) {
        var n = e == null ? void 0 : GQ(e, t);
        return n === void 0 ? r : n
    }
    var WQ = jQ,
        HQ = Math.floor,
        KQ = Math.random;

    function VQ(e, t) {
        return e + HQ(KQ() * (t - e + 1))
    }
    var qQ = VQ,
        YQ = qQ;

    function zQ(e) {
        var t = e.length;
        return t ? e[YQ(0, t - 1)] : void 0
    }
    var ow = zQ,
        XQ = PO;

    function JQ(e, t) {
        return XQ(t, function(r) {
            return e[r]
        })
    }
    var QQ = JQ,
        ZQ = QQ,
        eZ = Wc;

    function tZ(e) {
        return e == null ? [] : ZQ(e, eZ(e))
    }
    var rZ = tZ,
        nZ = ow,
        iZ = rZ;

    function sZ(e) {
        return nZ(iZ(e))
    }
    var aZ = sZ,
        oZ = ow,
        lZ = aZ,
        cZ = yi;

    function uZ(e) {
        var t = cZ(e) ? oZ : lZ;
        return t(e)
    }
    var fZ = uZ;

    function yE(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = WQ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), fZ(s)
    }
    const dZ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = yE(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return yE(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        hZ = tt({
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
        pZ = "main/pp9/antique-freak/assets/928ef0da.png",
        gZ = "main/pp9/antique-freak/assets/0bb76a2d.png",
        mZ = "main/pp9/antique-freak/assets/ed4469b3.png",
        vZ = {
            key: 0,
            class: "image",
            src: pZ,
            alt: "Kicked"
        },
        yZ = {
            key: 1,
            class: "image",
            src: gZ,
            alt: "Thank You"
        },
        _Z = {
            key: 2,
            class: "image",
            src: mZ,
            alt: "Error"
        },
        EZ = {
            class: "text"
        },
        bZ = {
            key: 3,
            class: "subtext"
        },
        TZ = {
            class: "actions"
        };

    function SZ(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", {
            class: De(["error-model", e.classes])
        }, [e.image === "tear" ? (G(), K("img", vZ)) : e.image === "moon" ? (G(), K("img", yZ)) : (G(), K("img", _Z)), Ie(H("h3", EZ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((G(), K("h3", bZ, null, 512)), [
            [l, e.subtext]
        ]) : Ee("", !0), H("div", TZ, [Ie(H("button", {
            onClick: t[0] || (t[0] = zt(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const OZ = at(hZ, [
            ["render", SZ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        wZ = tt({
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
        $Z = {
            class: "text"
        },
        CZ = {
            key: 0,
            class: "subtext"
        },
        IZ = {
            class: "actions"
        },
        AZ = ["onClick"];

    function NZ(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", {
            class: De(["options-modal", e.classes])
        }, [Ie(H("h3", $Z, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((G(), K("h3", CZ, null, 512)), [
            [l, e.subtext]
        ]) : Ee("", !0), H("div", IZ, [(G(!0), K(ze, null, wr(e.options, (u, f) => Ie((G(), K("button", {
            key: f,
            class: De(u.classes),
            onClick: zt(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, AZ)), [
            [l, u.text]
        ])), 128))])], 2)
    }
    const RZ = at(wZ, [
            ["render", NZ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        PZ = tt({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = OZ : e === "Options" ? this.content = RZ : this.content = e, new Promise(n => {
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

    function LZ(e, t, r, n, s, o) {
        return G(), wn(Tc, {
            name: "modal-transition"
        }, {
            default: Sh(() => [e.props ? (G(), K("div", {
                key: 0,
                class: De(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = fo((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = zt((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (G(), wn(Ch(e.content), uo({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Ee("", !0)], 34)) : Ee("", !0)]),
            _: 1
        })
    }
    const kZ = at(PZ, [
            ["render", LZ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        DZ = {
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
                e.component("Modal", kZ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        xZ = tt({
            setup() {
                return {
                    announcment: Zi(bo.textDescriptions.announcement)
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
        MZ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function FZ(e, t, r, n, s, o) {
        return G(), K("div", MZ, [(G(!0), K(ze, null, wr(e.lines, l => (G(), K("p", {
            key: l.id
        }, et(l.text), 1))), 128))])
    }
    const BZ = at(xZ, [
            ["render", FZ]
        ]),
        _E = on(""),
        UZ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(bo.textDescriptions.announcement, Dr(() => _E.value));
                const t = r => {
                    _E.value = r
                };
                e.component("TextDescriptions", BZ), e.config.globalProperties.$announce = t
            }
        },
        GZ = {
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
        jZ = {
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
        WZ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Oi = e => WZ ? Symbol(e) : e,
        HZ = (e, t, r) => KZ({
            l: e,
            k: t,
            s: r
        }),
        KZ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Ut = e => typeof e == "number" && isFinite(e),
        VZ = e => kp(e) === "[object Date]",
        mi = e => kp(e) === "[object RegExp]",
        Yc = e => Ue(e) && Object.keys(e).length === 0;

    function qZ(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const tr = Object.assign;

    function EE(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const YZ = Object.prototype.hasOwnProperty;

    function Lp(e, t) {
        return YZ.call(e, t)
    }
    const _t = Array.isArray,
        Pt = e => typeof e == "function",
        ye = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        Et = e => e !== null && typeof e == "object",
        lw = Object.prototype.toString,
        kp = e => lw.call(e),
        Ue = e => kp(e) === "[object Object]",
        zZ = e => e == null ? "" : _t(e) || Ue(e) && e.toString === lw ? JSON.stringify(e, null, 2) : String(e);
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

    function zc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, l = e, u = new SyntaxError(String(l));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function XZ(e) {
        throw e
    }

    function JZ(e, t, r) {
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
        QZ = "\r",
        mr = `
`,
        ZZ = String.fromCharCode(8232),
        eee = String.fromCharCode(8233);

    function tee(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const l = oe => t[oe] === QZ && t[oe + 1] === mr,
            u = oe => t[oe] === mr,
            f = oe => t[oe] === eee,
            h = oe => t[oe] === ZZ,
            g = oe => l(oe) || u(oe) || f(oe) || h(oe),
            _ = () => r,
            b = () => n,
            $ = () => s,
            P = () => o,
            M = oe => l(oe) || f(oe) || h(oe) ? mr : t[oe],
            U = () => M(r),
            C = () => M(r + o);

        function q() {
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
            for (; oe !== r;) q();
            o = 0
        }
        return {
            index: _,
            line: b,
            column: $,
            peekOffset: P,
            charAt: M,
            currentChar: U,
            currentPeek: C,
            next: q,
            peek: X,
            reset: W,
            resetPeek: j,
            skipToPeek: Q
        }
    }
    const ri = void 0,
        bE = "'",
        ree = "tokenizer";

    function nee(e, t = {}) {
        const r = t.location !== !1,
            n = tee(e),
            s = () => n.index(),
            o = () => JZ(n.line(), n.column(), n.index()),
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

        function _(m, p, O, ...x) {
            const B = h();
            if (p.column += O, p.offset += O, g) {
                const z = th(B.startLoc, p),
                    ce = zc(m, z, {
                        domain: ree,
                        args: x
                    });
                g(ce)
            }
        }

        function b(m, p, O) {
            m.endLoc = o(), m.currentType = p;
            const x = {
                type: p
            };
            return r && (x.loc = th(m.startLoc, m.endLoc)), O != null && (x.value = O), x
        }
        const $ = m => b(m, 14);

        function P(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (_(nt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(m) {
            let p = "";
            for (; m.currentPeek() === Dn || m.currentPeek() === mr;) p += m.currentPeek(), m.peek();
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

        function q(m) {
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
            const x = C(m.currentPeek());
            return m.resetPeek(), x
        }

        function W(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = q(x);
            return m.resetPeek(), B
        }

        function j(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === bE;
            return m.resetPeek(), x
        }

        function Q(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 8) return !1;
            M(m);
            const x = m.currentPeek() === ".";
            return m.resetPeek(), x
        }

        function oe(m, p) {
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
                    const z = m.currentPeek();
                    return z === "{" ? C(m.peek()) : z === "@" || z === "%" || z === "|" || z === ":" || z === "." || z === Dn || !z ? !1 : z === mr ? (m.peek(), x()) : C(z)
                },
                B = x();
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
                    return se === "{" ? z === "%" ? !1 : B : se === "@" || !se ? z === "%" ? !0 : B : se === "%" ? (m.peek(), O(B, "%", !0)) : se === "|" ? z === "%" || ce ? !0 : !(z === Dn || z === mr) : se === Dn ? (m.peek(), O(!0, Dn, ce)) : se === mr ? (m.peek(), O(!0, mr, ce)) : !0
                },
                x = O();
            return p && m.resetPeek(), x
        }

        function $e(m, p) {
            const O = m.currentChar();
            return O === ri ? ri : p(O) ? (m.next(), O) : null
        }

        function F(m) {
            return $e(m, O => {
                const x = O.charCodeAt(0);
                return x >= 97 && x <= 122 || x >= 65 && x <= 90 || x >= 48 && x <= 57 || x === 95 || x === 36
            })
        }

        function ie(m) {
            return $e(m, O => {
                const x = O.charCodeAt(0);
                return x >= 48 && x <= 57
            })
        }

        function de(m) {
            return $e(m, O => {
                const x = O.charCodeAt(0);
                return x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102
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
                else if (O === Dn || O === mr)
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
            return m.currentChar() === ri && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function je(m) {
            U(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${be(m)}`) : p += be(m), m.currentChar() === ri && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function rt(m) {
            U(m), P(m, "'");
            let p = "",
                O = "";
            const x = z => z !== bE && z !== mr;
            for (; p = $e(m, x);) p === "\\" ? O += It(m) : O += p;
            const B = m.currentChar();
            return B === mr || B === ri ? (_(nt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === mr && (m.next(), P(m, "'")), O) : (P(m, "'"), O)
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
                    return _(nt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Cr(m, p, O) {
            P(m, p);
            let x = "";
            for (let B = 0; B < O; B++) {
                const z = de(m);
                if (!z) {
                    _(nt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${x}${m.currentChar()}`);
                    break
                }
                x += z
            }
            return `\\${p}${x}`
        }

        function nr(m) {
            U(m);
            let p = "",
                O = "";
            const x = B => B !== "{" && B !== "}" && B !== Dn && B !== mr;
            for (; p = $e(m, x);) O += p;
            return O
        }

        function vr(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function ot(m) {
            const p = (O = !1, x) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Dn ? x : B === mr ? (x += B, m.next(), p(O, x)) : (x += B, m.next(), p(!0, x))
            };
            return p(!1, "")
        }

        function Ot(m) {
            U(m);
            const p = P(m, "|");
            return U(m), p
        }

        function lt(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && _(nt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = b(p, 2, "{"), U(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && _(nt.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && U(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = kt(m, p) || $(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        z = !0,
                        ce = !0;
                    if (Ae(m)) return p.braceNest > 0 && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = b(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Ht(m, p);
                    if (B = X(m, p)) return O = b(p, 5, Fe(m)), U(m), O;
                    if (z = W(m, p)) return O = b(p, 6, je(m)), U(m), O;
                    if (ce = j(m, p)) return O = b(p, 7, rt(m)), U(m), O;
                    if (!B && !z && !ce) return O = b(p, 13, nr(m)), _(nt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), U(m), O;
                    break
            }
            return O
        }

        function kt(m, p) {
            const {
                currentType: O
            } = p;
            let x = null;
            const B = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === mr || B === Dn) && _(nt.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return m.next(), x = b(p, 8, "@"), p.inLinked = !0, x;
                case ".":
                    return U(m), m.next(), b(p, 9, ".");
                case ":":
                    return U(m), m.next(), b(p, 10, ":");
                default:
                    return Ae(m) ? (x = b(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, x) : Q(m, p) || le(m, p) ? (U(m), kt(m, p)) : oe(m, p) ? (U(m), b(p, 12, vr(m))) : ue(m, p) ? (U(m), B === "{" ? lt(m, p) || x : b(p, 11, ot(m))) : (O === 8 && _(nt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Ht(m, p))
            }
        }

        function Ht(m, p) {
            let O = {
                type: 14
            };
            if (p.braceNest > 0) return lt(m, p) || $(p);
            if (p.inLinked) return kt(m, p) || $(p);
            switch (m.currentChar()) {
                case "{":
                    return lt(m, p) || $(p);
                case "}":
                    return _(nt.UNBALANCED_CLOSING_BRACE, o(), 0), m.next(), b(p, 3, "}");
                case "@":
                    return kt(m, p) || $(p);
                default:
                    if (Ae(m)) return O = b(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: B, hasSpace: z
                    } = Ce(m);
                    if (B) return z ? b(p, 0, Oe(m)) : b(p, 4, ve(m));
                    if (fe(m)) return b(p, 0, Oe(m));
                    break
            }
            return O
        }

        function Dt() {
            const {
                currentType: m,
                offset: p,
                startLoc: O,
                endLoc: x
            } = f;
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = x, f.offset = s(), f.startLoc = o(), n.currentChar() === ri ? b(f, 14) : Ht(n, f)
        }
        return {
            nextToken: Dt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const iee = "parser",
        see = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function aee(e, t, r) {
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

    function oee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, q, X, W, ...j) {
            const Q = C.currentPosition();
            if (Q.offset += W, Q.column += W, r) {
                const oe = th(X, Q),
                    le = zc(q, oe, {
                        domain: iee,
                        args: j
                    });
                r(le)
            }
        }

        function s(C, q, X) {
            const W = {
                type: C,
                start: q,
                end: q
            };
            return t && (W.loc = {
                start: X,
                end: X
            }), W
        }

        function o(C, q, X, W) {
            C.end = q, W && (C.type = W), t && C.loc && (C.loc.end = X)
        }

        function l(C, q) {
            const X = C.context(),
                W = s(3, X.offset, X.startLoc);
            return W.value = q, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function u(C, q) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(5, W, j);
            return Q.index = parseInt(q, 10), C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function f(C, q) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(4, W, j);
            return Q.key = q, C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function h(C, q) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(9, W, j);
            return Q.value = q.replace(see, aee), C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function g(C) {
            const q = C.nextToken(),
                X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: j
                } = X,
                Q = s(8, W, j);
            return q.type !== 12 ? (n(C, nt.UNEXPECTED_EMPTY_LINKED_MODIFIER, X.lastStartLoc, 0), Q.value = "", o(Q, W, j), {
                nextConsumeToken: q,
                node: Q
            }) : (q.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, yn(q)), Q.value = q.value || "", o(Q, C.currentOffset(), C.currentPosition()), {
                node: Q
            })
        }

        function _(C, q) {
            const X = C.context(),
                W = s(7, X.offset, X.startLoc);
            return W.value = q, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function b(C) {
            const q = C.context(),
                X = s(6, q.offset, q.startLoc);
            let W = C.nextToken();
            if (W.type === 9) {
                const j = g(C);
                X.modifier = j.node, W = j.nextConsumeToken || C.nextToken()
            }
            switch (W.type !== 10 && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(W)), W = C.nextToken(), W.type === 2 && (W = C.nextToken()), W.type) {
                case 11:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(W)), X.key = _(C, W.value || "");
                    break;
                case 5:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(W)), X.key = f(C, W.value || "");
                    break;
                case 6:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(W)), X.key = u(C, W.value || "");
                    break;
                case 7:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(W)), X.key = h(C, W.value || "");
                    break;
                default:
                    n(C, nt.UNEXPECTED_EMPTY_LINKED_KEY, q.lastStartLoc, 0);
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
            const q = C.context(),
                X = q.currentType === 1 ? C.currentOffset() : q.offset,
                W = q.currentType === 1 ? q.endLoc : q.startLoc,
                j = s(2, X, W);
            j.items = [];
            let Q = null;
            do {
                const ue = Q || C.nextToken();
                switch (Q = null, ue.type) {
                    case 0:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(ue)), j.items.push(l(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(ue)), j.items.push(u(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(ue)), j.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, yn(ue)), j.items.push(h(C, ue.value || ""));
                        break;
                    case 8:
                        const Ae = b(C);
                        j.items.push(Ae.node), Q = Ae.nextConsumeToken || null;
                        break
                }
            } while (q.currentType !== 14 && q.currentType !== 1);
            const oe = q.currentType === 1 ? q.lastOffset : C.currentOffset(),
                le = q.currentType === 1 ? q.lastEndLoc : C.currentPosition();
            return o(j, oe, le), j
        }

        function P(C, q, X, W) {
            const j = C.context();
            let Q = W.items.length === 0;
            const oe = s(1, q, X);
            oe.cases = [], oe.cases.push(W);
            do {
                const le = $(C);
                Q || (Q = le.items.length === 0), oe.cases.push(le)
            } while (j.currentType !== 14);
            return Q && n(C, nt.MUST_HAVE_MESSAGES_IN_PLURAL, X, 0), o(oe, C.currentOffset(), C.currentPosition()), oe
        }

        function M(C) {
            const q = C.context(),
                {
                    offset: X,
                    startLoc: W
                } = q,
                j = $(C);
            return q.currentType === 14 ? j : P(C, X, W, j)
        }

        function U(C) {
            const q = nee(C, tr({}, e)),
                X = q.context(),
                W = s(0, X.offset, X.startLoc);
            return t && W.loc && (W.loc.source = C), W.body = M(q), X.currentType !== 14 && n(q, nt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, C[X.offset] || ""), o(W, q.currentOffset(), q.currentPosition()), W
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

    function lee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function TE(e, t) {
        for (let r = 0; r < e.length; r++) Dp(e[r], t)
    }

    function Dp(e, t) {
        switch (e.type) {
            case 1:
                TE(e.cases, t), t.helper("plural");
                break;
            case 2:
                TE(e.items, t);
                break;
            case 6:
                Dp(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function cee(e, t = {}) {
        const r = lee(e);
        r.helper("normalize"), e.body && Dp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function uee(e, t) {
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

        function b() {
            h(l.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: g,
            deindent: _,
            newline: b,
            helper: M => `_${M}`,
            needIndent: () => l.needIndent
        }
    }

    function fee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ea(e, t.key), t.modifier ? (e.push(", "), ea(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function dee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (ea(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function hee(e, t) {
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

    function pee(e, t) {
        t.body ? ea(e, t.body) : e.push("null")
    }

    function ea(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                pee(e, t);
                break;
            case 1:
                hee(e, t);
                break;
            case 2:
                dee(e, t);
                break;
            case 6:
                fee(e, t);
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
    const gee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = uee(e, {
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

    function mee(e, t = {}) {
        const r = tr({}, t),
            s = oee(r).parse(e);
        return cee(s, r), gee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const vee = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const wi = [];
    wi[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    wi[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    wi[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    wi[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    wi[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    wi[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    wi[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const yee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function _ee(e) {
        return yee.test(e)
    }

    function Eee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function bee(e) {
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

    function Tee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : _ee(t) ? Eee(t) : "*" + t
    }

    function See(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            o, l, u, f, h, g, _;
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
                if (s = 0, l === void 0 || (l = Tee(l), l === !1)) return !1;
                b[1]()
            }
        };

        function $() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, u = "\\" + P, b[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && $())) {
                if (f = bee(o), _ = wi[n], h = _[f] || _.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = b[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const SE = new Map;

    function Oee(e, t) {
        return Et(e) ? e[t] : null
    }

    function wee(e, t) {
        if (!Et(e)) return null;
        let r = SE.get(t);
        if (r || (r = See(t), r && SE.set(t, r)), !r) return null;
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
    const $ee = e => e,
        Cee = e => "",
        Iee = "text",
        Aee = e => e.length === 0 ? "" : e.join(""),
        Nee = zZ;

    function OE(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function Ree(e) {
        const t = Ut(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Ut(e.named.count) || Ut(e.named.n)) ? Ut(e.named.count) ? e.named.count : Ut(e.named.n) ? e.named.n : t : t
    }

    function Pee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Lee(e = {}) {
        const t = e.locale,
            r = Ree(e),
            n = Et(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? e.pluralRules[t] : OE,
            s = Et(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? OE : void 0,
            o = C => C[n(r, C.length, s)],
            l = e.list || [],
            u = C => l[C],
            f = e.named || {};
        Ut(e.pluralIndex) && Pee(r, f);
        const h = C => f[C];

        function g(C) {
            const q = Pt(e.messages) ? e.messages(C) : Et(e.messages) ? e.messages[C] : !1;
            return q || (e.parent ? e.parent.message(C) : Cee)
        }
        const _ = C => e.modifiers ? e.modifiers[C] : $ee,
            b = Ue(e.processor) && Pt(e.processor.normalize) ? e.processor.normalize : Aee,
            $ = Ue(e.processor) && Pt(e.processor.interpolate) ? e.processor.interpolate : Nee,
            P = Ue(e.processor) && ye(e.processor.type) ? e.processor.type : Iee,
            U = {
                list: u,
                named: h,
                plural: o,
                linked: (C, ...q) => {
                    const [X, W] = q;
                    let j = "text",
                        Q = "";
                    q.length === 1 ? Et(X) ? (Q = X.modifier || Q, j = X.type || j) : ye(X) && (Q = X || Q) : q.length === 2 && (ye(X) && (Q = X || Q), ye(W) && (j = W || j));
                    let oe = g(C)(U);
                    return j === "vnode" && _t(oe) && Q && (oe = oe[0]), Q ? _(Q)(oe, j) : oe
                },
                message: g,
                type: P,
                interpolate: $,
                normalize: b
            };
        return U
    }
    let kee = null;
    vee.FunctionTranslate;

    function Dee(e) {
        return t => kee
    }
    const xee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Mee(e, t, r) {
        return [...new Set([r, ..._t(t) ? t : Et(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function cw(e, t, r) {
        const n = ye(r) ? r : Oo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let l = [r];
            for (; _t(l);) l = wE(o, l, t);
            const u = _t(t) || !Ue(t) ? t : t.default ? t.default : null;
            l = ye(u) ? [u] : u, _t(l) && wE(o, l, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function wE(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Je(n); s++) {
            const o = t[s];
            ye(o) && (n = Fee(e, t[s], r))
        }
        return n
    }

    function Fee(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = Bee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Bee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (_t(r) || Ue(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const Uee = "9.2.2",
        Xc = -1,
        Oo = "en-US",
        $E = "",
        CE = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Gee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? CE(e) : t === "vnode" && Et(e) && "__v_isVNode" in e ? CE(e.children) : e
        }
    }
    let uw;

    function jee(e) {
        uw = e
    }
    let fw;

    function Wee(e) {
        fw = e
    }
    let dw;

    function Hee(e) {
        dw = e
    }
    let IE = 0;

    function Kee(e = {}) {
        const t = ye(e.version) ? e.version : Uee,
            r = ye(e.locale) ? e.locale : Oo,
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
            u = tr({}, e.modifiers || {}, Gee()),
            f = e.pluralRules || {},
            h = Pt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            _ = Je(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            $ = !!e.unresolving,
            P = Pt(e.postTranslation) ? e.postTranslation : null,
            M = Ue(e.processor) ? e.processor : null,
            U = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            q = Pt(e.messageCompiler) ? e.messageCompiler : uw,
            X = Pt(e.messageResolver) ? e.messageResolver : fw || Oee,
            W = Pt(e.localeFallbacker) ? e.localeFallbacker : dw || Mee,
            j = Et(e.fallbackContext) ? e.fallbackContext : void 0,
            Q = Pt(e.onWarn) ? e.onWarn : qZ,
            oe = e,
            le = Et(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = Et(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            Ae = Et(oe.__meta) ? oe.__meta : {};
        IE++;
        const Ce = {
            version: t,
            cid: IE,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: g,
            fallbackWarn: _,
            fallbackFormat: b,
            unresolving: $,
            postTranslation: P,
            processor: M,
            warnHtmlMessage: U,
            escapeParameter: C,
            messageCompiler: q,
            messageResolver: X,
            localeFallbacker: W,
            fallbackContext: j,
            onWarn: Q,
            __meta: Ae
        };
        return Ce.datetimeFormats = o, Ce.numberFormats = l, Ce.__datetimeFormatters = le, Ce.__numberFormatters = ue, Ce
    }

    function xp(e, t, r, n, s) {
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
    const Vee = e => e;
    let AE = Object.create(null);

    function qee(e, t = {}) {
        {
            const n = (t.onCacheKey || Vee)(e),
                s = AE[n];
            if (s) return s;
            let o = !1;
            const l = t.onError || XZ;
            t.onError = h => {
                o = !0, l(h)
            };
            const {
                code: u
            } = mee(e, t), f = new Function(`return ${u}`)();
            return o ? f : AE[n] = f
        }
    }
    let hw = nt.__EXTEND_POINT__;
    const sd = () => ++hw,
        Ls = {
            INVALID_ARGUMENT: hw,
            INVALID_DATE_ARGUMENT: sd(),
            INVALID_ISO_DATE_ARGUMENT: sd(),
            __EXTEND_POINT__: sd()
        };

    function ks(e) {
        return zc(e, null, void 0)
    }
    const NE = () => "",
        ss = e => Pt(e);

    function RE(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: l,
            messages: u
        } = e, [f, h] = rh(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, _ = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, b = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, $ = !!h.resolvedMessage, P = ye(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || P !== "", U = ye(h.locale) ? h.locale : e.locale;
        b && Yee(h);
        let [C, q, X] = $ ? [f, U, u[U] || {}] : pw(e, f, U, l, _, g), W = C, j = f;
        if (!$ && !(ye(W) || ss(W)) && M && (W = P, j = W), !$ && (!(ye(W) || ss(W)) || !ye(q))) return s ? Xc : f;
        let Q = !1;
        const oe = () => {
                Q = !0
            },
            le = ss(W) ? W : gw(e, f, q, W, j, oe);
        if (Q) return W;
        const ue = Jee(e, q, X, h),
            Ae = Lee(ue),
            Ce = zee(e, le, Ae);
        return n ? n(Ce, f) : Ce
    }

    function Yee(e) {
        _t(e.list) ? e.list = e.list.map(t => ye(t) ? EE(t) : t) : Et(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = EE(e.named[t]))
        })
    }

    function pw(e, t, r, n, s, o) {
        const {
            messages: l,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, g = h(e, n, r);
        let _ = {},
            b, $ = null;
        const P = "translate";
        for (let M = 0; M < g.length && (b = g[M], _ = l[b] || {}, ($ = f(_, t)) === null && ($ = _[t]), !(ye($) || Pt($))); M++) {
            const U = xp(e, t, b, o, P);
            U !== t && ($ = U)
        }
        return [$, b, _]
    }

    function gw(e, t, r, n, s, o) {
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
        const f = l(n, Xee(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function zee(e, t, r) {
        return t(r)
    }

    function rh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Ut(t) && !ss(t)) throw ks(Ls.INVALID_ARGUMENT);
        const o = Ut(t) ? String(t) : (ss(t), t);
        return Ut(r) ? s.plural = r : ye(r) ? s.default = r : Ue(r) && !Yc(r) ? s.named = r : _t(r) && (s.list = r), Ut(n) ? s.plural = n : ye(n) ? s.default = n : Ue(n) && tr(s, n), [o, s]
    }

    function Xee(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw o && o(l), l
            },
            onCacheKey: l => HZ(t, r, l)
        }
    }

    function Jee(e, t, r, n) {
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
            messages: $ => {
                let P = l(r, $);
                if (P == null && g) {
                    const [, , M] = pw(g, $, t, u, f, h);
                    P = l(M, $)
                }
                if (ye(P)) {
                    let M = !1;
                    const C = gw(e, $, t, P, $, () => {
                        M = !0
                    });
                    return M ? NE : C
                } else return ss(P) ? P : NE
            }
        };
        return e.processor && (b.processor = e.processor), n.list && (b.list = n.list), n.named && (b.named = n.named), Ut(n.plural) && (b.pluralIndex = n.plural), b
    }

    function PE(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, g, _] = nh(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const $ = !!g.part,
            P = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, P);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(P, _).format(h);
        let U = {},
            C, q = null;
        const X = "datetime format";
        for (let Q = 0; Q < M.length && (C = M[Q], U = r[C] || {}, q = U[f], !Ue(q)); Q++) xp(e, f, C, b, X);
        if (!Ue(q) || !ye(C)) return n ? Xc : f;
        let W = `${C}__${f}`;
        Yc(_) || (W = `${W}__${JSON.stringify(_)}`);
        let j = u.get(W);
        return j || (j = new Intl.DateTimeFormat(C, tr({}, q, _)), u.set(W, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const mw = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

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
        } else if (VZ(t)) {
            if (isNaN(t.getTime())) throw ks(Ls.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Ut(t)) u = t;
        else throw ks(Ls.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            mw.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Ue(n) && (l = n), Ue(s) && (l = s), [o.key || "", u, o, l]
    }

    function LE(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function kE(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, _] = ih(...t), b = Je(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Je(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const $ = !!g.part,
            P = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, P);
        if (!ye(f) || f === "") return new Intl.NumberFormat(P, _).format(h);
        let U = {},
            C, q = null;
        const X = "number format";
        for (let Q = 0; Q < M.length && (C = M[Q], U = r[C] || {}, q = U[f], !Ue(q)); Q++) xp(e, f, C, b, X);
        if (!Ue(q) || !ye(C)) return n ? Xc : f;
        let W = `${C}__${f}`;
        Yc(_) || (W = `${W}__${JSON.stringify(_)}`);
        let j = u.get(W);
        return j || (j = new Intl.NumberFormat(C, tr({}, q, _)), u.set(W, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const vw = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ih(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {};
        if (!Ut(t)) throw ks(Ls.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            vw.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Ue(n) && (l = n), Ue(s) && (l = s), [o.key || "", u, o, l]
    }

    function DE(e, t, r) {
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
    const Qee = "9.2.2";
    xee.__EXTEND_POINT__;
    let yw = nt.__EXTEND_POINT__;
    const Tr = () => ++yw,
        Mt = {
            UNEXPECTED_RETURN_TYPE: yw,
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

    function jt(e, ...t) {
        return zc(e, null, void 0)
    }
    const sh = Oi("__transrateVNode"),
        ah = Oi("__datetimeParts"),
        oh = Oi("__numberParts"),
        _w = Oi("__setPluralRules");
    Oi("__intlifyMeta");
    const Ew = Oi("__injectWithOption");

    function lh(e) {
        if (!Et(e)) return e;
        for (const t in e)
            if (!!Lp(e, t))
                if (!t.includes(".")) Et(e[t]) && lh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], Et(s[r[n]]) && lh(s[r[n]])
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
    const Rl = e => !Et(e) || _t(e);

    function Ka(e, t) {
        if (Rl(e) || Rl(t)) throw jt(Mt.INVALID_VALUE);
        for (const r in e) Lp(e, r) && (Rl(e[r]) || Rl(t[r]) ? t[r] = e[r] : Ka(e[r], t[r]))
    }

    function Zee(e) {
        return e.type
    }

    function bw(e, t, r) {
        let n = Et(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Jc(e.locale.value, {
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

    function xE(e) {
        return St(_c, null, e, 0)
    }
    let ME = 0;

    function FE(e) {
        return (t, r, n, s) => e(r, n, as() || void 0, s)
    }

    function Mp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Je(e.inheritLocale) ? e.inheritLocale : !0;
        const o = on(r && s ? r.locale.value : ye(e.locale) ? e.locale : Oo),
            l = on(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || _t(e.fallbackLocale) || Ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = on(Jc(o.value, e)),
            f = on(Ue(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = on(Ue(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Je(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            _ = r ? r.fallbackWarn : Je(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = r ? r.fallbackRoot : Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            $ = !!e.fallbackFormat,
            P = Pt(e.missing) ? e.missing : null,
            M = Pt(e.missing) ? FE(e.missing) : null,
            U = Pt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            q = !!e.escapeParameter;
        const X = r ? r.modifiers : Ue(e.modifiers) ? e.modifiers : {};
        let W = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const A = {
                version: Qee,
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
                escapeParameter: q,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Ue(j) ? j.__datetimeFormatters : void 0, A.__numberFormatters = Ue(j) ? j.__numberFormatters : void 0, Kee(A)
        })(), La(j, o.value, l.value);

        function oe() {
            return [o.value, l.value, u.value, f.value, h.value]
        }
        const le = Dr({
                get: () => o.value,
                set: A => {
                    o.value = A, j.locale = o.value
                }
            }),
            ue = Dr({
                get: () => l.value,
                set: A => {
                    l.value = A, j.fallbackLocale = l.value, La(j, o.value, A)
                }
            }),
            Ae = Dr(() => u.value),
            Ce = Dr(() => f.value),
            fe = Dr(() => h.value);

        function $e() {
            return Pt(U) ? U : null
        }

        function F(A) {
            U = A, j.postTranslation = A
        }

        function ie() {
            return P
        }

        function de(A) {
            A !== null && (M = FE(A)), P = A, j.missing = M
        }
        const be = (A, V, he, pe, Ne, xe) => {
            oe();
            let w;
            if (w = A(j), Ut(w) && w === Xc) {
                const [T, R] = V();
                return r && b ? pe(r) : Ne(T)
            } else {
                if (xe(w)) return w;
                throw jt(Mt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(V => Reflect.apply(RE, null, [V, ...A]), () => rh(...A), "translate", V => Reflect.apply(V.t, V, [...A]), V => V, V => ye(V))
        }

        function Oe(...A) {
            const [V, he, pe] = A;
            if (pe && !Et(pe)) throw jt(Mt.INVALID_ARGUMENT);
            return ve(V, he, tr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Fe(...A) {
            return be(V => Reflect.apply(PE, null, [V, ...A]), () => nh(...A), "datetime format", V => Reflect.apply(V.d, V, [...A]), () => $E, V => ye(V))
        }

        function je(...A) {
            return be(V => Reflect.apply(kE, null, [V, ...A]), () => ih(...A), "number format", V => Reflect.apply(V.n, V, [...A]), () => $E, V => ye(V))
        }

        function rt(A) {
            return A.map(V => ye(V) || Ut(V) || Je(V) ? xE(String(V)) : V)
        }
        const Cr = {
            normalize: rt,
            interpolate: A => A,
            type: "vnode"
        };

        function nr(...A) {
            return be(V => {
                let he;
                const pe = V;
                try {
                    pe.processor = Cr, he = Reflect.apply(RE, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => rh(...A), "translate", V => V[sh](...A), V => [xE(V)], V => _t(V))
        }

        function vr(...A) {
            return be(V => Reflect.apply(kE, null, [V, ...A]), () => ih(...A), "number format", V => V[oh](...A), () => [], V => ye(V) || _t(V))
        }

        function ot(...A) {
            return be(V => Reflect.apply(PE, null, [V, ...A]), () => nh(...A), "datetime format", V => V[ah](...A), () => [], V => ye(V) || _t(V))
        }

        function Ot(A) {
            W = A, j.pluralRules = W
        }

        function lt(A, V) {
            const he = ye(V) ? V : o.value,
                pe = Dt(he);
            return j.messageResolver(pe, A) !== null
        }

        function kt(A) {
            let V = null;
            const he = cw(j, l.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ne = u.value[he[pe]] || {},
                    xe = j.messageResolver(Ne, A);
                if (xe != null) {
                    V = xe;
                    break
                }
            }
            return V
        }

        function Ht(A) {
            const V = kt(A);
            return V != null ? V : r ? r.tm(A) || {} : {}
        }

        function Dt(A) {
            return u.value[A] || {}
        }

        function m(A, V) {
            u.value[A] = V, j.messages = u.value
        }

        function p(A, V) {
            u.value[A] = u.value[A] || {}, Ka(V, u.value[A]), j.messages = u.value
        }

        function O(A) {
            return f.value[A] || {}
        }

        function x(A, V) {
            f.value[A] = V, j.datetimeFormats = f.value, LE(j, A, V)
        }

        function B(A, V) {
            f.value[A] = tr(f.value[A] || {}, V), j.datetimeFormats = f.value, LE(j, A, V)
        }

        function z(A) {
            return h.value[A] || {}
        }

        function ce(A, V) {
            h.value[A] = V, j.numberFormats = h.value, DE(j, A, V)
        }

        function se(A, V) {
            h.value[A] = tr(h.value[A] || {}, V), j.numberFormats = h.value, DE(j, A, V)
        }
        ME++, r && eh && (es(r.locale, A => {
            s && (o.value = A, j.locale = A, La(j, o.value, l.value))
        }), es(r.fallbackLocale, A => {
            s && (l.value = A, j.fallbackLocale = A, La(j, o.value, l.value))
        }));
        const re = {
            id: ME,
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
                return b
            },
            set fallbackRoot(A) {
                b = A
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
                return q
            },
            set escapeParameter(A) {
                q = A, j.escapeParameter = A
            },
            t: ve,
            getLocaleMessage: Dt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: $e,
            setPostTranslationHandler: F,
            getMissingHandler: ie,
            setMissingHandler: de,
            [_w]: Ot
        };
        return re.datetimeFormats = Ce, re.numberFormats = fe, re.rt = Oe, re.te = lt, re.tm = Ht, re.d = Fe, re.n = je, re.getDateTimeFormat = O, re.setDateTimeFormat = x, re.mergeDateTimeFormat = B, re.getNumberFormat = z, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[Ew] = e.__injectWithOption, re[sh] = nr, re[ah] = ot, re[oh] = vr, re
    }

    function ete(e) {
        const t = ye(e.locale) ? e.locale : Oo,
            r = ye(e.fallbackLocale) || _t(e.fallbackLocale) || Ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = Pt(e.missing) ? e.missing : void 0,
            s = Je(e.silentTranslationWarn) || mi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = Je(e.silentFallbackWarn) || mi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            l = Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Ue(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = Pt(e.postTranslation) ? e.postTranslation : void 0,
            _ = ye(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            b = !!e.escapeParameterHtml,
            $ = Je(e.sync) ? e.sync : !0;
        let P = e.messages;
        if (Ue(e.sharedMessages)) {
            const j = e.sharedMessages;
            P = Object.keys(j).reduce((oe, le) => {
                const ue = oe[le] || (oe[le] = {});
                return tr(ue, j[le]), oe
            }, P || {})
        }
        const {
            __i18n: M,
            __root: U,
            __injectWithOption: C
        } = e, q = e.datetimeFormats, X = e.numberFormats, W = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: P,
            flatJson: W,
            datetimeFormats: q,
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
            escapeParameter: b,
            messageResolver: e.messageResolver,
            inheritLocale: $,
            __i18n: M,
            __root: U,
            __injectWithOption: C
        }
    }

    function ch(e = {}, t) {
        {
            const r = Mp(ete(e)),
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
                        if (!ye(o)) throw jt(Mt.INVALID_ARGUMENT);
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
                        if (!ye(o)) throw jt(Mt.INVALID_ARGUMENT);
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

    function tte({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ..._t(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function Tw(e) {
        return ze
    }
    const BE = {
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
                const u = tte(t, o),
                    f = s[sh](e.keypath, u, l),
                    h = tr({}, n),
                    g = ye(e.tag) || Et(e.tag) ? e.tag : Tw();
                return Ph(g, h, f)
            }
        }
    };

    function rte(e) {
        return _t(e) && !ye(e[0])
    }

    function Sw(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let u = {};
            e.locale && (l.locale = e.locale), ye(e.format) ? l.key = e.format : Et(e.format) && (ye(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((b, $) => r.includes($) ? tr({}, b, {
                [$]: e.format[$]
            }) : b, {}));
            const f = n(e.value, l, u);
            let h = [l.key];
            _t(f) ? h = f.map((b, $) => {
                const P = s[b.type],
                    M = P ? P({
                        [b.type]: b.value,
                        index: $,
                        parts: f
                    }) : [b.value];
                return rte(M) && (M[0].key = `${b.type}-${$}`), M
            }) : ye(f) && (h = [f]);
            const g = tr({}, o),
                _ = ye(e.tag) || Et(e.tag) ? e.tag : Tw();
            return Ph(_, g, h)
        }
    }
    const UE = {
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
                return Sw(e, t, vw, (...n) => r[oh](...n))
            }
        },
        GE = {
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
                return Sw(e, t, mw, (...n) => r[ah](...n))
            }
        };

    function nte(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function ite(e) {
        const t = l => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = l;
            if (!u || !u.$) throw jt(Mt.UNEXPECTED_ERROR);
            const g = nte(e, u.$),
                _ = jE(h);
            return [Reflect.apply(g.t, g, [...WE(_)]), g]
        };
        return {
            created: (l, u) => {
                const [f, h] = t(u);
                eh && e.global === h && (l.__i18nWatcher = es(h.locale, () => {
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
                        h = jE(u);
                    l.textContent = Reflect.apply(f.t, f, [...WE(h)])
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

    function jE(e) {
        if (ye(e)) return {
            path: e
        };
        if (Ue(e)) {
            if (!("path" in e)) throw jt(Mt.REQUIRED_VALUE, "path");
            return e
        } else throw jt(Mt.INVALID_VALUE)
    }

    function WE(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, l = {}, u = n || {};
        return ye(r) && (l.locale = r), Ut(s) && (l.plural = s), Ut(o) && (l.plural = o), [t, u, l]
    }

    function ste(e, t, ...r) {
        const n = Ue(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : BE.name, BE), e.component(UE.name, UE), e.component(GE.name, GE)), e.directive("t", ite(t))
    }

    function ate(e, t, r) {
        return {
            beforeCreate() {
                const n = as();
                if (!n) throw jt(Mt.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = HE(e, o) : (o.__injectWithOption = !0, this.$i18n = ch(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = HE(e, s) : this.$i18n = ch({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && bw(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, l) => this.$i18n.te(o, l), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = as();
                if (!n) throw jt(Mt.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function HE(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[_w](t.pluralizationRules || e.pluralizationRules);
        const r = Jc(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const ote = Oi("global-vue-i18n");

    function lte(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [l, u] = cte(e, r),
            f = Oi("");

        function h(b) {
            return o.get(b) || null
        }

        function g(b, $) {
            o.set(b, $)
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
                async install($, ...P) {
                    $.__VUE_I18N_SYMBOL__ = f, $.provide($.__VUE_I18N_SYMBOL__, b), !r && n && yte($, b.global), ste($, b, ...P), r && $.mixin(ate(u, u.__composer, b));
                    const M = $.unmount;
                    $.unmount = () => {
                        b.dispose(), M()
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
            return b
        }
    }

    function Bp(e = {}) {
        const t = as();
        if (t == null) throw jt(Mt.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw jt(Mt.NOT_INSLALLED);
        const r = ute(t),
            n = dte(r),
            s = Zee(t),
            o = fte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw jt(Mt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return gte(t, o, n, e)
        }
        if (o === "global") return bw(n, e, s), n;
        if (o === "parent") {
            let f = hte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let u = l.__getInstance(t);
        if (u == null) {
            const f = tr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Mp(f), pte(l, t), l.__setInstance(t, u)
        }
        return u
    }

    function cte(e, t, r) {
        const n = vR(); {
            const s = t ? n.run(() => ch(e)) : n.run(() => Mp(e));
            if (s == null) throw jt(Mt.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function ute(e) {
        {
            const t = Zi(e.isCE ? ote : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw jt(e.isCE ? Mt.NOT_INSLALLED_WITH_PROVIDE : Mt.UNEXPECTED_ERROR);
            return t
        }
    }

    function fte(e, t) {
        return Yc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function dte(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function hte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(o);
            else {
                const u = l.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[Ew] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function pte(e, t, r) {
        Oh(() => {}, t), wh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function gte(e, t, r, n = {}) {
        const s = t === "local",
            o = KR(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw jt(Mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = on(s && l ? r.locale.value : ye(n.locale) ? n.locale : Oo),
            f = on(s && l ? r.fallbackLocale.value : ye(n.fallbackLocale) || _t(n.fallbackLocale) || Ue(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = on(Jc(u.value, n)),
            g = on(Ue(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            _ = on(Ue(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            b = s ? r.missingWarn : Je(n.missingWarn) || mi(n.missingWarn) ? n.missingWarn : !0,
            $ = s ? r.fallbackWarn : Je(n.fallbackWarn) || mi(n.fallbackWarn) ? n.fallbackWarn : !0,
            P = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            U = Pt(n.missing) ? n.missing : null,
            C = Pt(n.postTranslation) ? n.postTranslation : null,
            q = s ? r.warnHtmlMessage : Je(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            X = !!n.escapeParameter,
            W = s ? r.modifiers : Ue(n.modifiers) ? n.modifiers : {},
            j = n.pluralRules || s && r.pluralRules;

        function Q() {
            return [u.value, f.value, h.value, g.value, _.value]
        }
        const oe = Dr({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            le = Dr({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = Dr(() => o.value ? o.value.messages.value : h.value),
            Ae = Dr(() => g.value),
            Ce = Dr(() => _.value);

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

        function je(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function rt(p, O) {
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

        function ot(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), g.value[p] = O)
        }

        function Ot(p, O) {
            o.value && o.value.mergeDateTimeFormat(p, O)
        }

        function lt(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function kt(p, O) {
            o.value && (o.value.setNumberFormat(p, O), _.value[p] = O)
        }

        function Ht(p, O) {
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
                return o.value ? o.value.missingWarn : b
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
                return o.value ? o.value.warnHtmlMessage : q
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
            tm: je,
            te: rt,
            getLocaleMessage: It,
            setLocaleMessage: Cr,
            mergeLocaleMessage: nr,
            getDateTimeFormat: vr,
            setDateTimeFormat: ot,
            mergeDateTimeFormat: Ot,
            getNumberFormat: lt,
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
            }), p.escapeParameter = X, p.fallbackFormat = M, p.fallbackRoot = P, p.fallbackWarn = $, p.missingWarn = b, p.warnHtmlMessage = q
        }
        return Ib(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw jt(Mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, _.value = p.numberFormats.value) : s && m(p)
        }), Dt
    }
    const mte = ["locale", "fallbackLocale", "availableLocales"],
        vte = ["t", "rt", "d", "n", "tm"];

    function yte(e, t) {
        const r = Object.create(null);
        mte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw jt(Mt.UNEXPECTED_ERROR);
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
        }), e.config.globalProperties.$i18n = r, vte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw jt(Mt.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    jee(qee);
    Wee(wee);
    Hee(cw);
    const _te = tt({
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
        Ete = "main/pp9/antique-freak/assets/c8afd972.svg",
        bte = {
            class: "constrain"
        },
        Tte = {
            class: "text"
        },
        Ste = {
            class: "subtext"
        },
        Ote = {
            key: 0,
            class: "warning"
        },
        wte = {
            key: 1,
            class: "spinner"
        };

    function $te(e, t, r, n, s, o) {
        return G(), wn(Tc, {
            name: "toast-transition"
        }, {
            default: Sh(() => [e.isVisible && e.options ? (G(), K("div", {
                key: 0,
                class: De([e.options.type, "jbg toast"])
            }, [H("div", bte, [H("img", {
                class: "close",
                alt: "close",
                src: Ete,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = fo((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), H("p", Tte, et(e.options.text), 1), H("p", Ste, et(e.options.subtext), 1), e.options.warning ? (G(), K("p", Ote, et(e.options.warning), 1)) : Ee("", !0), e.options.type === "reconnecting" ? (G(), K("div", wte)) : Ee("", !0)])], 2)) : Ee("", !0)]),
            _: 1
        })
    }
    const Cte = at(_te, [
            ["render", $te],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        Ite = {
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
                e.component("Toast", Cte), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        Ate = tt({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Zi(bo.fatal.error)
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

    function Nte(e, t, r, n, s, o) {
        const l = kr("Fatal"),
            u = kr("TextDescriptions"),
            f = kr("Debug"),
            h = kr("Modal"),
            g = kr("Toast");
        return e.shouldShowFatal ? (G(), wn(l, {
            key: 0
        })) : (G(), K(ze, {
            key: 1
        }, [St(u), (G(), wn(Ch(e.mainView), uo({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), St(f), St(h), St(g)], 64))
    }
    const KE = at(Ate, [
            ["render", Nte]
        ]),
        Rte = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Or.WSClient(r), t.connect()),
                mount: r => {
                    var l, u, f, h;
                    KE.name = r.app;
                    let n = PL(KE, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const o = lte({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(FW, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(jY), n.use(DZ), n.use(bX, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(U7, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(xQ), n.use(o), n.use(dZ, {
                            i18n: o
                        }), n.use(UZ), n.use(GZ), n.use(Ite), n.use(jZ), e.plugins) {
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
        Pte = {
            AUDIENCE_THANKS: "Thanks!"
        },
        Lte = {
            INFO: "Fact {current}/{max}",
            PLACEHOLDER: "write here",
            WRITE_SOMETHING: "You need to write something!",
            FILTER_ERROR: "Your entry contains prohibited language. Try again!"
        },
        kte = {
            AVATAR_SELECT_PROMPT: "Choose your accessory!",
            PRESENTATION_CHOICE_YES: "Manually Present",
            PRESENTATION_CHOICE_NO: "Auto-Present",
            PRESENTATION_MODE: "Presentation Mode:",
            PRESENTATION_PROMPT: "How does your group want to showcase their writing?",
            ON: "On",
            OFF: "Off"
        },
        Dte = {
            UP_NEXT: "Up next"
        },
        xte = {
            CHOOSING: Pte,
            FACT: Lte,
            LOBBY: kte,
            RANKING: Dte
        },
        Mte = {
            AUDIENCE_THANKS: "Merci\xA0!"
        },
        Fte = {
            INFO: "Fait {current}/{max}",
            PLACEHOLDER: "\xE9crivez ici",
            WRITE_SOMETHING: "Vous devez \xE9crire quelque chose\xA0!",
            FILTER_ERROR: "Votre r\xE9ponse contient des mots interdits. R\xE9essayez encore\xA0!"
        },
        Bte = {
            AVATAR_SELECT_PROMPT: "Choisissez votre accessoire\xA0!",
            PRESENTATION_CHOICE_YES: "Pr\xE9sentation manuelle",
            PRESENTATION_CHOICE_NO: "Pr\xE9sentation automatique",
            PRESENTATION_MODE: "Mode de pr\xE9sentation\xA0:",
            PRESENTATION_PROMPT: "Comment votre groupe souhaite-t-il montrer son \u0153uvre\xA0?",
            ON: "On",
            OFF: "Off"
        },
        Ute = {
            UP_NEXT: "Suivant"
        },
        Gte = {
            CHOOSING: Mte,
            FACT: Fte,
            LOBBY: Bte,
            RANKING: Ute
        },
        jte = {
            AUDIENCE_THANKS: "Grazie!"
        },
        Wte = {
            INFO: "Info {current}/{max}",
            PLACEHOLDER: "scrivi qui",
            WRITE_SOMETHING: "Devi scrivere qualcosa!",
            FILTER_ERROR: "La voce inserita contiene parole vietate. Riprova!"
        },
        Hte = {
            AVATAR_SELECT_PROMPT: "Scegli il tuo accessorio!",
            PRESENTATION_CHOICE_YES: "Presenta manualmente",
            PRESENTATION_CHOICE_NO: "Presenta in automatico",
            PRESENTATION_MODE: "Modalit\xE0 di presentazione:",
            PRESENTATION_PROMPT: "Il tuo gruppo in che modalit\xE0 vuole presentare il suo testo?",
            ON: "On",
            OFF: "Off"
        },
        Kte = {
            UP_NEXT: "Prossimo"
        },
        Vte = {
            CHOOSING: jte,
            FACT: Wte,
            LOBBY: Hte,
            RANKING: Kte
        },
        qte = {
            AUDIENCE_THANKS: "Danke!"
        },
        Yte = {
            INFO: "Fakt {current} / {max}",
            PLACEHOLDER: "hier schreiben",
            WRITE_SOMETHING: "Du musst etwas schreiben!",
            FILTER_ERROR: "Deine Eingabe enth\xE4lt verbotene W\xF6rter Versuche es noch mal!"
        },
        zte = {
            AVATAR_SELECT_PROMPT: "W\xE4hle dein Accessoire aus!",
            PRESENTATION_CHOICE_YES: "Selbst pr\xE4sentieren",
            PRESENTATION_CHOICE_NO: "Auto-Pr\xE4sentation",
            PRESENTATION_MODE: "Pr\xE4sentationsmodus:",
            PRESENTATION_PROMPT: "Wie m\xF6chte deine Gruppe ihr Geschriebenes pr\xE4sentieren?",
            ON: "An",
            OFF: "Aus"
        },
        Xte = {
            UP_NEXT: "Als n\xE4chstes"
        },
        Jte = {
            CHOOSING: qte,
            FACT: Yte,
            LOBBY: zte,
            RANKING: Xte
        },
        Qte = {
            AUDIENCE_THANKS: "\xA1Gracias!"
        },
        Zte = {
            INFO: "Dato {current}/{max}",
            PLACEHOLDER: "escribe aqu\xED",
            WRITE_SOMETHING: "\xA1Tienes que escribir algo!",
            FILTER_ERROR: "Tu texto contiene palabras no permitidas. \xA1Vuelve a intentarlo!"
        },
        ere = {
            AVATAR_SELECT_PROMPT: "\xA1Elige tu accesorio!",
            PRESENTATION_CHOICE_YES: "Presentaci\xF3n manual",
            PRESENTATION_CHOICE_NO: "Presentaci\xF3n autom\xE1tica",
            PRESENTATION_MODE: "Modo de presentaci\xF3n:",
            PRESENTATION_PROMPT: "\xBFC\xF3mo quiere presentar sus escritos tu grupo?",
            ON: "S\xED",
            OFF: "No"
        },
        tre = {
            UP_NEXT: "A continuaci\xF3n"
        },
        rre = {
            CHOOSING: Qte,
            FACT: Zte,
            LOBBY: ere,
            RANKING: tre
        },
        nre = {
            AUDIENCE_THANKS: "\xA1Gracias!"
        },
        ire = {
            INFO: "Hecho {current}/{max}",
            PLACEHOLDER: "escribe aqu\xED",
            WRITE_SOMETHING: "\xA1Debes escribir algo!",
            FILTER_ERROR: "Tu texto contiene lenguaje prohibido. \xA1Vuelve a intentarlo!"
        },
        sre = {
            AVATAR_SELECT_PROMPT: "\xA1Elige tu accesorio!",
            PRESENTATION_CHOICE_YES: "Presentar manualmente",
            PRESENTATION_CHOICE_NO: "Presentar autom\xE1ticamente",
            PRESENTATION_MODE: "Modo de presentaci\xF3n:",
            PRESENTATION_PROMPT: "\xBFC\xF3mo quiere demostrar sus escrituras tu grupo?",
            ON: "S\xED",
            OFF: "No"
        },
        are = {
            UP_NEXT: "A continuaci\xF3n"
        },
        ore = {
            CHOOSING: nre,
            FACT: ire,
            LOBBY: sre,
            RANKING: are
        },
        lre = {
            en: xte,
            fr: Gte,
            it: Vte,
            de: Jte,
            es: rre,
            "es-XL": ore
        },
        cre = tt({
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
        ure = {
            class: "haggleOverlay",
            "aria-modal": "true",
            role: "dialog"
        },
        fre = {
            key: 0,
            class: "haggleDialog constrain"
        },
        dre = {
            class: "prompt"
        },
        hre = {
            class: "choices"
        },
        pre = ["onClick"],
        gre = {
            class: "text"
        };

    function mre(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", ure, [e.player.haggle ? (G(), K("div", fre, [H("button", {
            class: "haggleClose",
            "aria-label": "cancel",
            onClick: t[0] || (t[0] = zt((...u) => e.haggleClose && e.haggleClose(...u), ["prevent"]))
        }), Ie(H("div", dre, null, 512), [
            [l, e.player.haggle.prompt]
        ]), H("div", hre, [(G(!0), K(ze, null, wr(e.player.haggle.choices, (u, f) => (G(), K("button", {
            key: `haggle_${e.player.choiceId}_${f}`,
            class: "choice gold-button",
            onClick: h => e.clickHaggleChoice(h, f)
        }, [Ie(H("span", gre, null, 512), [
            [l, u.text]
        ])], 8, pre))), 128))])])) : Ee("", !0)])
    }
    const vre = at(cre, [
            ["render", mre]
        ]),
        Qc = e => {
            var n;
            if (!e) return "";
            const t = e.id.split("_")[0],
                r = (n = e.type) != null ? n : "png";
            return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${t}.${r}`
        },
        yre = tt({
            components: {
                HaggleDialog: vre
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
                    return Qc(e)
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
                        if (t instanceof ui.EcastServerError && t.message.startsWith("no entity found")) return this.isSubmitting = !1, console.warn("unhandled ecast error: ", t);
                        this.$handleEcastError(t), this.isSubmitting = !1
                    }
                }
            }
        }),
        _re = {
            class: "choosing scrollable"
        },
        Ere = ["disabled"],
        bre = {
            class: "prompt-text"
        },
        Tre = H("div", {
            class: "hr"
        }, null, -1),
        Sre = {
            key: 0,
            class: "prompt"
        },
        Ore = {
            class: "photo-banner"
        },
        wre = ["alt", "src"],
        $re = ["disabled", "onClick"],
        Cre = ["alt", "src"],
        Ire = {
            key: 1
        },
        Are = ["alt", "src"],
        Nre = {
            key: 2
        };

    function Rre(e, t, r, n, s, o) {
        const l = kr("HaggleDialog"),
            u = xt("bb"),
            f = xt("t");
        return G(), K("div", _re, [H("div", {
            class: De(["constrain content", e.isShopping ? "shopping" : ""])
        }, [H("fieldset", {
            disabled: e.isSubmitting || e.chosenIndex !== -1
        }, [Ie(H("div", bre, null, 512), [
            [u, e.player.prompt]
        ]), Tre, e.player.photo ? (G(), K("div", Sre, [H("div", Ore, [H("img", {
            class: "photo",
            alt: e.player.photo.alt,
            src: e.getItemImage(e.player.photo)
        }, null, 8, wre)])])) : Ee("", !0), e.player.price ? Ie((G(), K("div", {
            key: 1,
            class: De(["price-tag", e.player.price.category])
        }, null, 2)), [
            [u, e.player.price.text]
        ]) : Ee("", !0), Ie(H("div", {
            class: De(["choices", e.isPrePresenting && "pre-presenting"])
        }, [(G(!0), K(ze, null, wr(e.player.choices, (h, g) => (G(), K("button", {
            key: `choice_${e.player.choiceId}_${g}`,
            class: De(["choice", [{
                chosen: e.chosenIndex === g,
                "photo-button": h.photo,
                "gold-button": !h.photo,
                selected: h.selected,
                disabled: h.disabled,
                "collection-banner": h.photo && Array.isArray(h.photo),
                "fact-button": !e.audience && e.isPresenting && !h.photo && g !== 3
            }, h.category]]),
            disabled: h.disabled,
            onClick: _ => e.clickChoice(_, g)
        }, [h.photo && !Array.isArray(h.photo) ? (G(), K("img", {
            key: 0,
            class: "photo",
            alt: `${h.photo.alt}`,
            src: e.getItemImage(h.photo)
        }, null, 8, Cre)) : Ee("", !0), h.photo && Array.isArray(h.photo) ? (G(), K("span", Ire, [(G(!0), K(ze, null, wr(h.photo, (_, b) => (G(), K("img", {
            key: `photo_${g}_${b}`,
            class: "photo half",
            alt: `${_.alt}`,
            src: e.getItemImage(_)
        }, null, 8, Are))), 128))])) : Ee("", !0), Ie(H("span", null, null, 512), [
            [u, h.text]
        ])], 10, $re))), 128))], 2), [
            [qb, !(e.audience && e.chosenIndex !== -1)]
        ]), e.audience && e.chosenIndex !== -1 ? Ie((G(), K("div", Nre, null, 512)), [
            [f, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Ee("", !0)], 8, Ere)], 2), e.showHaggle ? (G(), wn(l, {
            key: 0,
            player: e.player,
            "haggle-close": e.haggleClose,
            "click-haggle-choice": e.clickHaggleChoice
        }, null, 8, ["player", "haggle-close", "click-haggle-choice"])) : Ee("", !0)])
    }
    const Pre = at(yre, [
            ["render", Rre]
        ]),
        Lre = tt({
            components: {
                TextArea: FY
            },
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
                    submitOffset: 0,
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
                    this.answer = "", this.chosenIndex = null, this.isSubmitting = !1
                },
                answer: function() {
                    if (!this.$refs.textarea) return;
                    const t = document.getElementById("textinput");
                    !t || (this.submitOffset = t.scrollHeight)
                }
            },
            mounted() {
                this.autoSubmitter = ec.exports.throttle(this.autoSubmit.bind(this), 400), this.player.textKey && this.restoreText()
            },
            beforeUnmount() {
                var e;
                (e = this.autoSubmitter) == null || e.cancel()
            },
            methods: {
                getItemImage(e) {
                    return Qc(e)
                },
                async restoreText() {
                    const e = await this.$ecast.getText(this.player.textKey);
                    this.answer = e.text
                },
                async autoSubmit() {
                    if (!this.isSubmitting) try {
                        await this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer)
                    } catch (e) {
                        if (e.message === "the entity is locked") return !1;
                        e instanceof ui.EcastFilterError || this.$handleEcastError(e), await this.$ecast.updateText(this.player.textKey, "")
                    }
                },
                onKeypress(e) {
                    e.key === "Enter" && this.onSubmit()
                },
                onInput(e) {
                    const t = e.target;
                    this.answer = Yt.sanitizeInput(t.value), this.filterError = !1, this.autoSubmitter && this.autoSubmitter()
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
                            if (this.isSubmitting = !1, t.message === "the entity is locked") return !1;
                            t instanceof ui.EcastFilterError || this.$handleEcastError(t), this.filterError = !0, setTimeout(() => {
                                this.$refs.textarea instanceof HTMLTextAreaElement && this.$refs.textarea.focus()
                            }, 0)
                        }
                    }
                }
            }
        }),
        kre = {
            class: "fact-view scrollable"
        },
        Dre = {
            class: "constrain content"
        },
        xre = {
            for: "textinput"
        },
        Mre = {
            class: "prompt"
        },
        Fre = {
            class: "input-container"
        },
        Bre = ["textContent"],
        Ure = {
            key: 1,
            class: "prompt"
        },
        Gre = {
            class: "photo-banner"
        },
        jre = ["alt", "src"],
        Wre = {
            key: 2,
            class: "prompt"
        },
        Hre = {
            class: "photoBanner"
        },
        Kre = ["alt", "src"],
        Vre = {
            key: 3,
            class: "inputLine"
        },
        qre = ["disabled"],
        Yre = {
            key: 0,
            class: "errors"
        },
        zre = {
            key: 0,
            class: "error"
        },
        Xre = {
            key: 1,
            class: "error"
        },
        Jre = {
            key: 2,
            class: "error"
        },
        Qre = {
            key: 4
        },
        Zre = {
            class: "choices"
        },
        ene = ["disabled", "onClick"],
        tne = {
            class: "text"
        },
        rne = {
            key: 5,
            class: "fact-info"
        };

    function nne(e, t, r, n, s, o) {
        const l = kr("TextArea"),
            u = xt("bb");
        return G(), K("div", kre, [H("div", Dre, [H("form", {
            autocomplete: "off",
            onSubmit: t[1] || (t[1] = zt((...f) => e.onSubmit && e.onSubmit(...f), ["prevent"]))
        }, [e.showInput ? Ee("", !0) : Ie((G(), K("div", {
            key: 0,
            class: De(["prompt", !e.writing && "item-title"])
        }, null, 2)), [
            [u, e.player.prompt]
        ]), H("label", xre, [Ie(H("div", Mre, null, 512), [
            [u, e.inputPrompt]
        ])]), Ie(H("div", Fre, [H("div", {
            class: De(["character-count", {
                "too-long": e.player.maxLength - e.sanitizedAnswer.length < 0
            }]),
            textContent: et(e.remainingCharacters)
        }, null, 10, Bre), St(l, {
            id: "textinput",
            ref: "textarea",
            modelValue: e.answer,
            "onUpdate:modelValue": t[0] || (t[0] = f => e.answer = f),
            autosize: "",
            enterkeyhint: "done",
            autocapitalize: "off",
            maxlength: e.player.maxLength,
            placeholder: e.$t("FACT.PLACEHOLDER"),
            rows: "1",
            onInput: e.onInput,
            onKeydown: fo(zt(e.onSubmit, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "maxlength", "placeholder", "onInput", "onKeydown"])], 512), [
            [qb, e.showInput]
        ]), e.hasPhoto ? (G(), K("div", Ure, [H("div", Gre, [H("img", {
            class: "photo",
            alt: `${e.player.photo.alt}`,
            src: e.getItemImage(e.player.photo)
        }, null, 8, jre)])])) : Ee("", !0), e.hasPhotos ? (G(), K("div", Wre, [H("div", Hre, [(G(!0), K(ze, null, wr(e.player.photo, (f, h) => (G(), K("img", {
            key: `photo_${e.player.choiceId}_${h}`,
            class: "photo half",
            alt: f.alt,
            src: e.getItemImage(f)
        }, null, 8, Kre))), 128))])])) : Ee("", !0), e.showInput ? (G(), K("div", Vre, [H("button", {
            class: "submit gold-button",
            type: "submit",
            value: "Submit",
            disabled: !e.canSubmit,
            style: ao(`--textheight:${e.submitOffset}px`)
        }, et(e.$t("ACTION.SUBMIT")), 13, qre), e.player.error || e.validationError || e.filterError ? (G(), K("div", Yre, [e.player.error ? Ie((G(), K("span", zre, null, 512)), [
            [u, e.player.error]
        ]) : Ee("", !0), e.validationError ? (G(), K("span", Xre, et(e.validationError), 1)) : Ee("", !0), e.filterError ? (G(), K("span", Jre, et(e.$t("FACT.FILTER_ERROR")), 1)) : Ee("", !0)])) : Ee("", !0)])) : (G(), K("div", Qre, [H("div", Zre, [(G(!0), K(ze, null, wr(e.player.choices, (f, h) => (G(), K("button", {
            key: `choice_${e.player.choiceId}_${h}`,
            class: De(["choice gold-button", {
                chosen: e.chosenIndex === h,
                selected: f.selected,
                disabled: f.disabled
            }]),
            disabled: f.disabled,
            onClick: zt(g => e.voteClicked(g, h), ["prevent"])
        }, [Ie(H("span", tne, null, 512), [
            [u, f.text]
        ])], 10, ene))), 128))])])), e.writing && !!e.player.factIndex ? (G(), K("div", rne, et(e.$t("FACT.INFO", {
            current: e.player.factIndex + 1,
            max: e.player.factCount
        })), 1)) : Ee("", !0)], 32)])])
    }
    const ine = at(Lre, [
            ["render", nne]
        ]),
        sne = tt({
            name: "Switch",
            props: {
                checked: {
                    type: Boolean,
                    required: !0
                }
            }
        }),
        ane = e => (lo("data-v-e61fc9b8"), e = e(), co(), e),
        one = {
            id: "toggleMode",
            class: "switchContainer"
        },
        lne = ["checked"],
        cne = ane(() => H("span", {
            class: "switch"
        }, null, -1));

    function une(e, t, r, n, s, o) {
        return G(), K("label", one, [H("input", uo(e.$attrs, {
            class: "input",
            type: "checkbox",
            checked: e.checked,
            onChange: t[0] || (t[0] = l => e.$emit("update:checked", l.target.checked))
        }), null, 16, lne), cne])
    }
    const fne = at(sne, [
            ["render", une],
            ["__scopeId", "data-v-e61fc9b8"]
        ]),
        dne = tt({
            components: {
                LobbyActions: wS,
                Switch: fne
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
        hne = {
            class: "lobby scrollable"
        },
        pne = {
            class: "constrain content"
        },
        gne = {
            class: "prompt"
        },
        mne = H("div", {
            class: "hr"
        }, null, -1),
        vne = {
            class: "mode-choice"
        },
        yne = {
            class: "avatar-prompt prompt"
        },
        _ne = H("div", {
            class: "hr"
        }, null, -1),
        Ene = {
            class: "avatars"
        },
        bne = ["aria-label", "disabled", "onClick"],
        Tne = {
            key: 0,
            class: "toggle-action"
        },
        Sne = {
            class: "current-mode"
        },
        One = {
            for: "toggleMode"
        },
        wne = {
            key: 0
        },
        $ne = {
            key: 1
        };

    function Cne(e, t, r, n, s, o) {
        var h, g, _, b;
        const l = kr("Switch"),
            u = kr("LobbyActions"),
            f = xt("t");
        return G(), K("div", hne, [H("div", pne, [e.player && e.player.canChooseMode && e.player.presentationModeOn === void 0 ? (G(), K(ze, {
            key: 0
        }, [H("div", gne, et(e.$t("LOBBY.PRESENTATION_PROMPT")), 1), mne, H("div", vne, [H("button", {
            class: "gold-button modeButton",
            onClick: t[0] || (t[0] = zt($ => e.onModeClick(!1), ["prevent"]))
        }, et(e.$t("LOBBY.PRESENTATION_CHOICE_NO")), 1), H("button", {
            class: "gold-button modeButton manual",
            onClick: t[1] || (t[1] = zt($ => e.onModeClick(!0), ["prevent"]))
        }, et(e.$t("LOBBY.PRESENTATION_CHOICE_YES")), 1)])], 64)) : e.info && !e.info.avatarName ? (G(), K(ze, {
            key: 1
        }, [Ie(H("div", yne, null, 512), [
            [f, "LOBBY.AVATAR_SELECT_PROMPT"]
        ]), _ne, H("div", Ene, [(G(!0), K(ze, null, wr(e.player.avatars, ($, P) => (G(), K("div", {
            key: $.name,
            class: "avatarContainer"
        }, [H("button", {
            "aria-label": $.alt,
            disabled: !$.available || e.info.avatarName === $.name,
            class: De(["avatar", `avatar_${$.name}`, {
                active: parseInt(P) === e.activeIndex,
                chosen: !$.available,
                selected: e.info && $.available && e.info.avatarName === $.name
            }]),
            onClick: zt(M => e.onAvatarClick(M, parseInt(P)), ["prevent"])
        }, null, 10, bne)]))), 128))])], 64)) : (G(), K(ze, {
            key: 2
        }, [e.player.canChooseMode ? (G(), K("div", Tne, [H("div", Sne, [Ie(H("label", One, null, 512), [
            [f, "LOBBY.PRESENTATION_MODE"]
        ]), (h = e.player) != null && h.presentationModeOn ? (G(), K("span", wne, et(e.$t("LOBBY.ON")), 1)) : (G(), K("span", $ne, et(e.$t("LOBBY.OFF")), 1))]), H("div", {
            class: De(["modeIcon", {
                manual: (g = e.player) == null ? void 0 : g.presentationModeOn
            }])
        }, null, 2), St(l, {
            "aria-label": "change presentation mode",
            checked: (_ = e.player) == null ? void 0 : _.presentationModeOn,
            "onUpdate:checked": e.onModeToggle
        }, null, 8, ["checked", "onUpdate:checked"])])) : Ee("", !0), H("div", {
            class: De(["hr", (b = e.player) != null && b.canChooseMode ? "" : "top"])
        }, null, 2), St(u, {
            player: e.player,
            classes: {
                message: "message",
                action: "action gold-button",
                status: "status"
            }
        }, null, 8, ["player"])], 64))])])
    }
    const Ine = at(dne, [
            ["render", Cne]
        ]),
        Ane = tt({
            components: {
                GalleryLink: WH,
                PostGameActions: $S
            },
            props: {
                artifact: Object,
                player: {
                    type: Object,
                    required: !0
                }
            }
        }),
        Nne = e => (lo("data-v-cc0a3df4"), e = e(), co(), e),
        Rne = {
            class: "post-game scrollable"
        },
        Pne = {
            class: "constrain"
        },
        Lne = Nne(() => H("div", {
            class: "hr"
        }, null, -1));

    function kne(e, t, r, n, s, o) {
        const l = kr("PostGameActions"),
            u = kr("GalleryLink");
        return G(), K("div", Rne, [H("div", Pne, [St(l, {
            player: e.player,
            classes: {
                message: "message",
                action: "action gold-button",
                status: "status"
            }
        }, null, 8, ["player"]), Lne, e.artifact ? (G(), wn(u, {
            key: 0,
            artifact: e.artifact
        }, null, 8, ["artifact"])) : Ee("", !0)])])
    }
    const Dne = at(Ane, [
            ["render", kne],
            ["__scopeId", "data-v-cc0a3df4"]
        ]),
        xne = tt({
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
                    return Qc(e)
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
        Mne = {
            class: "ranking scrollable"
        },
        Fne = {
            class: "constrain content"
        },
        Bne = {
            class: "prompt"
        },
        Une = {
            key: 0
        },
        Gne = ["disabled"],
        jne = {
            key: 0
        },
        Wne = {
            class: "prompt"
        },
        Hne = H("div", {
            class: "hr"
        }, null, -1),
        Kne = {
            class: "choices"
        },
        Vne = ["disabled", "aria-labelledby", "onClick"],
        qne = ["alt", "src"],
        Yne = ["id"],
        zne = {
            key: 0,
            class: "up-next"
        },
        Xne = {
            class: "up-next-header"
        },
        Jne = ["alt", "src"],
        Qne = {
            key: 0,
            class: "footer"
        },
        Zne = {
            class: "constrain"
        };

    function eie(e, t, r, n, s, o) {
        const l = xt("bb"),
            u = xt("t");
        return G(), K("div", Mne, [H("div", Fne, [Ie(H("div", Bne, null, 512), [
            [l, e.player.prompt]
        ]), e.audience && e.questionsDone ? Ie((G(), K("div", Une, null, 512)), [
            [u, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Ee("", !0), H("fieldset", {
            disabled: e.isSubmitting || e.questionsDone
        }, [e.currentQuestion ? (G(), K("div", jne, [Ie(H("div", Wne, null, 512), [
            [l, e.currentQuestion.prompt]
        ]), Hne, H("div", Kne, [(G(!0), K(ze, null, wr(e.currentQuestion.choices, (f, h) => (G(), K("div", {
            key: `choice_${e.currentQuestion.choiceId}_${h}`,
            class: "choice"
        }, [H("button", {
            class: De({
                "photo-button": f.photo,
                selected: f.selected,
                disabled: f.disabled
            }),
            disabled: f.disabled,
            "aria-labelledby": `title_${e.questionIndex}_${h}`,
            onClick: g => e.clickChoice(g, h)
        }, [f.photo ? (G(), K("img", {
            key: 0,
            class: "photo",
            alt: f.photo.alt,
            src: e.getItemImage(f.photo)
        }, null, 8, qne)) : Ee("", !0)], 10, Vne), Ie(H("span", {
            id: `title_${e.questionIndex}_${h}`,
            class: "text"
        }, null, 8, Yne), [
            [l, f.text]
        ])]))), 128))]), e.nextPhotos ? (G(), K("div", zne, [H("div", Xne, [Ie(H("span", null, null, 512), [
            [u, "RANKING.UP_NEXT"]
        ])]), (G(!0), K(ze, null, wr(e.nextPhotos, (f, h) => (G(), K("div", {
            key: `choice_${h}`,
            class: "choice photo-banner half"
        }, [f.photo ? (G(), K("img", {
            key: 0,
            class: "photo",
            alt: f.photo.alt,
            src: e.getItemImage(f.photo)
        }, null, 8, Jne)) : Ee("", !0)]))), 128))])) : Ee("", !0)])) : Ee("", !0)], 8, Gne)]), e.player.footer ? (G(), K("div", Qne, [H("div", Zne, [Ie(H("span", null, null, 512), [
            [l, e.player.footer]
        ])])])) : Ee("", !0)])
    }
    const tie = at(xne, [
            ["render", eie]
        ]),
        rie = tt({
            extends: CS,
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
                getItemImage(e) {
                    return Qc(e)
                },
                getPromptClass() {
                    return this.player.price ? this.player.price.category ? this.player.price.category : "empty" : ""
                }
            }
        }),
        nie = "main/pp9/antique-freak/assets/d288368c.svg",
        iie = "main/pp9/antique-freak/assets/0808df59.png",
        sie = "main/pp9/antique-freak/assets/2be78b61.png",
        aie = {
            class: "waiting scrollable"
        },
        oie = {
            class: "constrain content"
        },
        lie = {
            key: 1,
            class: "hr"
        },
        cie = {
            key: 2,
            class: "prompt"
        },
        uie = {
            class: "photo-banner"
        },
        fie = ["alt", "src"],
        die = {
            key: 3,
            class: "prompt"
        },
        hie = {
            class: "collection-banner"
        },
        pie = ["alt", "src"],
        gie = {
            key: 0,
            src: iie,
            class: "logo-fly buzz",
            alt: "The fly is hovering!"
        },
        mie = {
            key: 1,
            src: sie,
            class: "logo-fly",
            alt: "A fly, minding its business."
        };

    function vie(e, t, r, n, s, o) {
        const l = xt("bb");
        return G(), K("div", aie, [H("div", oie, [e.player.message ? Ie((G(), K("p", {
            key: 0,
            class: De(["prompt", e.getPromptClass()])
        }, null, 2)), [
            [l, e.player.message]
        ]) : Ee("", !0), e.hasPhoto ? (G(), K("div", lie)) : Ee("", !0), e.hasPhoto ? (G(), K("div", cie, [H("div", uie, [H("img", {
            class: "photo",
            alt: e.player.photo.alt,
            src: e.getItemImage(e.player.photo)
        }, null, 8, fie)])])) : Ee("", !0), e.hasPhotos ? (G(), K("div", die, [H("div", hie, [(G(!0), K(ze, null, wr(e.player.photo, (u, f) => (G(), K("img", {
            key: `photo_${e.player.choiceId}_${f}`,
            class: "photo half",
            alt: u.alt,
            src: e.getItemImage(u)
        }, null, 8, pie))), 128))])])) : Ee("", !0), e.player.price ? Ie((G(), K("div", {
            key: 4,
            class: De(`${e.player.price.category} price-tag`)
        }, null, 2)), [
            [l, e.player.price.text]
        ]) : Ee("", !0), e.player.photo ? Ee("", !0) : (G(), K("div", {
            key: 5,
            class: "logo-interactive",
            tabIndex: "0",
            onClick: t[0] || (t[0] = (...u) => e.buzzFly && e.buzzFly(...u)),
            onKeypress: t[1] || (t[1] = fo((...u) => e.buzzFly && e.buzzFly(...u), ["enter"]))
        }, [H("img", {
            src: nie,
            class: De(["logo-body", e.bumpLogo && "bump"]),
            alt: "The word 'Junktopia'. The 'K' wears a wizard hat. The 'i' is dotted with a fly."
        }, null, 2), e.flyBuzzing ? (G(), K("img", gie)) : (G(), K("img", mie))], 32))])])
    }
    const yie = at(rie, [
            ["render", vie]
        ]),
        _ie = tt({
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
                Choosing: Pre,
                Fact: ine,
                Lobby: Ine,
                PostGame: Dne,
                Ranking: tie,
                Waiting: yie
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
        Eie = {
            class: "antiquegame"
        };

    function bie(e, t, r, n, s, o) {
        return G(), K("div", Eie, [e.isReady && e.screen ? (G(), wn(Ch(e.screen[0]), uo({
            key: 0,
            role: "main"
        }, e.screen[1]), null, 16)) : Ee("", !0)])
    }
    const Tie = at(_ie, [
        ["render", bie]
    ]);
    Rte({
        MainView: Tie,
        messages: lre
    })
});
export default Sie();
//# sourceMappingURL=0e2223c5.js.map