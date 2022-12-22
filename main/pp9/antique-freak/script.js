var rR = Object.defineProperty;
var nR = (e, t, r) => t in e ? rR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var iR = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (nR(e, typeof t != "symbol" ? t + "" : t, r), r);
var wie = iR((Cie, ww) => {
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
    const sR = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        aR = uh(sR);

    function VE(e) {
        return !!e || e === ""
    }

    function ao(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Wt(n) ? cR(n) : ao(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Wt(e)) return e;
            if (mt(e)) return e
        }
    }
    const oR = /;(?![^(]*\))/g,
        lR = /:(.+)/;

    function cR(e) {
        const t = {};
        return e.split(oR).forEach(r => {
            if (r) {
                const n = r.split(lR);
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

    function uR(e, t) {
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
        if (r = ke(e), n = ke(t), r || n) return r && n ? uR(e, t) : !1;
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
        un = () => {},
        fR = () => !1,
        dR = /^on[^a-z]/,
        cc = e => dR.test(e),
        fh = e => e.startsWith("onUpdate:"),
        rr = Object.assign,
        dh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        hR = Object.prototype.hasOwnProperty,
        Ze = (e, t) => hR.call(e, t),
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
        pR = e => oo(e).slice(8, -1),
        JE = e => oo(e) === "[object Object]",
        hh = e => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Pl = uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        fc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        gR = /-(\w)/g,
        wn = fc(e => e.replace(gR, (t, r) => r ? r.toUpperCase() : "")),
        mR = /\B([A-Z])/g,
        os = fc(e => e.replace(mR, "-$1").toLowerCase()),
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
    const vR = () => vv || (vv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let En;
    class QE {
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

    function yR(e) {
        return new QE(e)
    }

    function _R(e, t = En) {
        t && t.active && t.effects.push(e)
    }
    const ph = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        ZE = e => (e.w & di) > 0,
        eb = e => (e.n & di) > 0,
        ER = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= di
        },
        bR = e => {
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
    let on;
    const Qi = Symbol(""),
        ld = Symbol("");
    class gh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, _R(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let t = on,
                r = li;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = on, on = this, li = !0, di = 1 << ++ka, ka <= od ? ER(this) : yv(this), this.fn()
            } finally {
                ka <= od && bR(this), di = 1 << --ka, on = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            on === this ? this.deferStop = !0 : this.active && (yv(this), this.onStop && this.onStop(), this.active = !1)
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
        if (li && on) {
            let n = ad.get(e);
            n || ad.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ph()), rb(s)
        }
    }

    function rb(e, t) {
        let r = !1;
        ka <= od ? eb(e) || (e.n |= di, r = !ZE(e)) : r = !e.has(on), r && (e.add(on), on.deps.push(e))
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
        (e !== on || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const TR = uh("__proto__,__v_isRef,__isVue"),
        nb = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Va)),
        SR = mh(),
        OR = mh(!1, !0),
        wR = mh(!0),
        Ev = $R();

    function $R() {
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
                ta();
                const n = at(this)[t].apply(this, r);
                return ra(), n
            }
        }), e
    }

    function mh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? jR : lb : t ? ob : ab).get(n)) return n;
            const l = ke(n);
            if (!e && l && Ze(Ev, s)) return Reflect.get(Ev, s, o);
            const u = Reflect.get(n, s, o);
            return (Va(s) ? nb.has(s) : TR(s)) || (e || xr(n, "get", s), t) ? u : er(u) ? l && hh(s) ? u : u.value : mt(u) ? e ? cb(u) : Un(u) : u
        }
    }
    const CR = ib(),
        IR = ib(!0);

    function ib(e = !1) {
        return function(r, n, s, o) {
            let l = r[n];
            if (qs(l) && er(l) && !er(s)) return !1;
            if (!e && (!jl(s) && !qs(s) && (l = at(l), s = at(s)), !ke(r) && er(l) && !er(s))) return l.value = s, !0;
            const u = ke(r) && hh(n) ? Number(n) < r.length : Ze(r, n),
                f = Reflect.set(r, n, s, o);
            return r === at(o) && (u ? qa(s, l) && Bn(r, "set", n, s) : Bn(r, "add", n, s)), f
        }
    }

    function AR(e, t) {
        const r = Ze(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Bn(e, "delete", t, void 0), n
    }

    function NR(e, t) {
        const r = Reflect.has(e, t);
        return (!Va(t) || !nb.has(t)) && xr(e, "has", t), r
    }

    function RR(e) {
        return xr(e, "iterate", ke(e) ? "length" : Qi), Reflect.ownKeys(e)
    }
    const sb = {
            get: SR,
            set: CR,
            deleteProperty: AR,
            has: NR,
            ownKeys: RR
        },
        PR = {
            get: wR,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        LR = rr({}, sb, {
            get: OR,
            set: IR
        }),
        vh = e => e,
        hc = e => Reflect.getPrototypeOf(e);

    function hl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = at(e),
            o = at(t);
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
            n = at(r),
            s = at(e);
        return t || (e !== s && xr(n, "has", e), xr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function gl(e, t = !1) {
        return e = e.__v_raw, !t && xr(at(e), "iterate", Qi), Reflect.get(e, "size", e)
    }

    function bv(e) {
        e = at(e);
        const t = at(this);
        return hc(t).has.call(t, e) || (t.add(e), Bn(t, "add", e, e)), this
    }

    function Tv(e, t) {
        t = at(t);
        const r = at(this),
            {
                has: n,
                get: s
            } = hc(r);
        let o = n.call(r, e);
        o || (e = at(e), o = n.call(r, e));
        const l = s.call(r, e);
        return r.set(e, t), o ? qa(t, l) && Bn(r, "set", e, t) : Bn(r, "add", e, t), this
    }

    function Sv(e) {
        const t = at(this),
            {
                has: r,
                get: n
            } = hc(t);
        let s = r.call(t, e);
        s || (e = at(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Bn(t, "delete", e, void 0), o
    }

    function Ov() {
        const e = at(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Bn(e, "clear", void 0, void 0), r
    }

    function ml(e, t) {
        return function(n, s) {
            const o = this,
                l = o.__v_raw,
                u = at(l),
                f = t ? vh : e ? Eh : Ya;
            return !e && xr(u, "iterate", Qi), l.forEach((h, g) => n.call(s, f(h), f(g), o))
        }
    }

    function vl(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = at(s),
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

    function kR() {
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
    const [DR, xR, MR, FR] = kR();

    function yh(e, t) {
        const r = t ? e ? FR : MR : e ? xR : DR;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Ze(r, s) && s in n ? r : n, s, o)
    }
    const BR = {
            get: yh(!1, !1)
        },
        UR = {
            get: yh(!1, !0)
        },
        GR = {
            get: yh(!0, !1)
        },
        ab = new WeakMap,
        ob = new WeakMap,
        lb = new WeakMap,
        jR = new WeakMap;

    function WR(e) {
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

    function HR(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : WR(pR(e))
    }

    function Un(e) {
        return qs(e) ? e : _h(e, !1, sb, BR, ab)
    }

    function KR(e) {
        return _h(e, !1, LR, UR, ob)
    }

    function cb(e) {
        return _h(e, !0, PR, GR, lb)
    }

    function _h(e, t, r, n, s) {
        if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const l = HR(e);
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

    function at(e) {
        const t = e && e.__v_raw;
        return t ? at(t) : e
    }

    function fb(e) {
        return Ul(e, "__v_skip", !0), e
    }
    const Ya = e => mt(e) ? Un(e) : e,
        Eh = e => mt(e) ? cb(e) : e;

    function db(e) {
        li && on && (e = at(e), rb(e.dep || (e.dep = ph())))
    }

    function hb(e, t) {
        e = at(e), e.dep && cd(e.dep)
    }

    function er(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function ln(e) {
        return pb(e, !1)
    }

    function VR(e) {
        return pb(e, !0)
    }

    function pb(e, t) {
        return er(e) ? e : new qR(e, t)
    }
    class qR {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : at(t), this._value = r ? t : Ya(t)
        }
        get value() {
            return db(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || jl(t) || qs(t);
            t = r ? t : at(t), qa(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Ya(t), hb(this))
        }
    }

    function YR(e) {
        return er(e) ? e.value : e
    }
    const zR = {
        get: (e, t, r) => YR(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return er(s) && !er(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function gb(e) {
        return Ms(e) ? e : new Proxy(e, zR)
    }
    var mb;
    class XR {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[mb] = !1, this._dirty = !0, this.effect = new gh(t, () => {
                this._dirty || (this._dirty = !0, hb(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = at(this);
            return db(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    mb = "__v_isReadonly";

    function JR(e, t, r = !1) {
        let n, s;
        const o = He(e);
        return o ? (n = e, s = un) : (n = e.get, s = e.set), new XR(n, s, o || !s, r)
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
        QR(e, r, s, n)
    }

    function QR(e, t, r, n = !0) {
        console.error(e)
    }
    let za = !1,
        ud = !1;
    const or = [];
    let On = 0;
    const Fs = [];
    let xn = null,
        Ki = 0;
    const vb = Promise.resolve();
    let bh = null;

    function ZR(e) {
        const t = bh || vb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function eP(e) {
        let t = On + 1,
            r = or.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Xa(or[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function Th(e) {
        (!or.length || !or.includes(e, za && e.allowRecurse ? On + 1 : On)) && (e.id == null ? or.push(e) : or.splice(eP(e.id), 0, e), yb())
    }

    function yb() {
        !za && !ud && (ud = !0, bh = vb.then(Eb))
    }

    function tP(e) {
        const t = or.indexOf(e);
        t > On && or.splice(t, 1)
    }

    function rP(e) {
        ke(e) ? Fs.push(...e) : (!xn || !xn.includes(e, e.allowRecurse ? Ki + 1 : Ki)) && Fs.push(e), yb()
    }

    function wv(e, t = za ? On + 1 : 0) {
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
        nP = (e, t) => {
            const r = Xa(e) - Xa(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function Eb(e) {
        ud = !1, za = !0, or.sort(nP);
        const t = un;
        try {
            for (On = 0; On < or.length; On++) {
                const r = or[On];
                r && r.active !== !1 && ci(r, null, 14)
            }
        } finally {
            On = 0, or.length = 0, _b(), za = !1, bh = null, (or.length || Fs.length) && Eb()
        }
    }

    function iP(e, t, ...r) {
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
        let u, f = n[u = df(t)] || n[u = df(wn(t))];
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
        let G, C;
        const q = Wl(e);
        try {
            if (r.shapeFlag & 4) {
                const W = s || n;
                G = Tn(g.call(W, W, _, o, $, b, P)), C = f
            } else {
                const W = t;
                G = Tn(W.length > 1 ? W(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : W(o, null)), C = t.props ? f : sP(f)
            }
        } catch (W) {
            Fa.length = 0, pc(W, e, 1), G = St(Qr)
        }
        let X = G;
        if (C && M !== !1) {
            const W = Object.keys(C),
                {
                    shapeFlag: j
                } = X;
            W.length && j & 7 && (l && W.some(fh) && (C = aP(C, l)), X = hi(X, C))
        }
        return r.dirs && (X = hi(X), X.dirs = X.dirs ? X.dirs.concat(r.dirs) : r.dirs), r.transition && (X.transition = r.transition), G = X, Wl(q), G
    }
    const sP = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || cc(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        aP = (e, t) => {
            const r = {};
            for (const n in e)(!fh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function oP(e, t, r) {
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

    function lP({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const cP = e => e.__isSuspense;

    function uP(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : rP(e)
    }

    function fP(e, t) {
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
            } : f = un, t && n) {
            const C = f;
            f = () => Ji(C())
        }
        let _, b = C => {
            _ = G.onStop = () => {
                ci(C, u, 4)
            }
        };
        if (Qa) return b = un, t ? r && Jr(t, u, 3, [f(), g ? [] : void 0, b]) : f(), un;
        let $ = g ? [] : Cv;
        const P = () => {
            if (!!G.active)
                if (t) {
                    const C = G.run();
                    (n || h || (g ? C.some((q, X) => qa(q, $[X])) : qa(C, $))) && (_ && _(), Jr(t, u, 3, [C, $ === Cv ? void 0 : $, b]), $ = C)
                } else G.run()
        };
        P.allowRecurse = !!t;
        let M;
        s === "sync" ? M = P : s === "post" ? M = () => Or(P, u && u.suspense) : (P.pre = !0, u && (P.id = u.uid), M = () => Th(P));
        const G = new gh(f, M);
        return t ? r ? P() : $ = G.run() : s === "post" ? Or(G.run.bind(G), u && u.suspense) : G.run(), () => {
            G.stop(), u && u.scope && dh(u.scope.effects, G)
        }
    }

    function dP(e, t, r) {
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

    function hP() {
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
        pP = {
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
                    n = hP();
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
                    const u = at(e),
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
                        f === "in-out" && h.type !== Qr && (M.delayLeave = (G, C, q) => {
                            const X = wb(n, b);
                            X[String(b.key)] = b, G._leaveCb = () => {
                                C(), G._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = q
                        })
                    }
                    return l
                }
            }
        },
        Ob = pP;

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
            onAppear: G,
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
                    if (s) ue = G || f, Ae = C || h, Ce = q || g;
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

    function gP(e, t) {
        Cb(e, "a", t)
    }

    function mP(e, t) {
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
            for (; s && s.parent;) vc(s.parent.vnode) && vP(n, t, r, s), s = s.parent
        }
    }

    function vP(e, t, r, n) {
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
        yP = Gn("bu"),
        _P = Gn("u"),
        Ab = Gn("bum"),
        wh = Gn("um"),
        EP = Gn("sp"),
        bP = Gn("rtg"),
        TP = Gn("rtc");

    function SP(e, t = qt) {
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
        OP = "directives";

    function vr(e, t) {
        return Ih($h, e, !0, t) || e
    }
    const Nb = Symbol();

    function Ch(e) {
        return Wt(e) ? Ih($h, e, !1) || e : e || Nb
    }

    function xt(e) {
        return Ih(OP, e)
    }

    function Ih(e, t, r = !0, n = !1) {
        const s = lr || qt;
        if (s) {
            const o = s.type;
            if (e === $h) {
                const u = ZP(o, !1);
                if (u && (u === t || u === wn(t) || u === dc(wn(t)))) return o
            }
            const l = Av(s[e] || o[e], t) || Av(s.appContext[e], t);
            return !l && n ? o : l
        }
    }

    function Av(e, t) {
        return e && (e[t] || e[wn(t)] || e[dc(wn(t))])
    }

    function $r(e, t, r, n) {
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

    function wP(e, t, r = {}, n, s) {
        if (lr.isCE || lr.parent && Ma(lr.parent) && lr.parent.isCE) return St("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), U();
        const l = o && Rb(o(r)),
            u = Zr(ze, {
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
            $nextTick: e => e.n || (e.n = ZR.bind(e.proxy)),
            $watch: e => dP.bind(e)
        }),
        $P = {
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

    function CP(e) {
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
            deactivated: G,
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
        if (h && IP(h, n, null, e.appContext.config.unwrapInjectedRef), l)
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
                    Oe = He(ve) ? ve.bind(r, r) : He(ve.get) ? ve.get.bind(r, r) : un,
                    Fe = !He(ve) && He(ve.set) ? ve.set.bind(r) : un,
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
                fP(ve, be[ve])
            })
        }
        g && Nv(g, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Oe => be(Oe.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(Ib, _), de(Oh, b), de(yP, $), de(_P, P), de(gP, M), de(mP, G), de(SP, le), de(TP, Q), de(bP, oe), de(Ab, q), de(wh, W), de(EP, ue), ke(Ae))
            if (Ae.length) {
                const be = e.exposed || (e.exposed = {});
                Ae.forEach(ve => {
                    Object.defineProperty(be, ve, {
                        get: () => r[ve],
                        set: Oe => r[ve] = Oe
                    })
                })
            } else e.exposed || (e.exposed = {});
        j && e.render === un && (e.render = j), Ce != null && (e.inheritAttrs = Ce), fe && (e.components = fe), $e && (e.directives = $e)
    }

    function IP(e, t, r = un, n = !1) {
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
                const u = AP[l] || r && r[l];
                e[l] = u ? u(e[l], t[l]) : t[l]
            } return e
    }
    const AP = {
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
        watch: RP,
        provide: Rv,
        inject: NP
    };

    function Rv(e, t) {
        return t ? e ? function() {
            return rr(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t)
        } : t : e
    }

    function NP(e, t) {
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

    function RP(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = rr(Object.create(null), e);
        for (const n in t) r[n] = gr(e[n], t[n]);
        return r
    }

    function PP(e, t, r, n = !1) {
        const s = {},
            o = {};
        Ul(o, Ec, 1), e.propsDefaults = Object.create(null), Lb(e, t, s, o);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : KR(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function LP(e, t, r, n) {
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
                for (let _ = 0; _ < g.length; _++) {
                    let b = g[_];
                    if (gc(e.emitsOptions, b)) continue;
                    const $ = t[b];
                    if (f)
                        if (Ze(o, b)) $ !== o[b] && (o[b] = $, h = !0);
                        else {
                            const P = wn(b);
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
                s && Ze(s, g = wn(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : gc(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0)
            }
        if (o) {
            const f = at(r),
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
                const _ = wn(o[g]);
                Pv(_) && (l[_] = gt)
            } else if (o)
                for (const g in o) {
                    const _ = wn(g);
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
        Nh = e => ke(e) ? e.map(Tn) : [Tn(e)],
        kP = (e, t, r) => {
            if (t._n) return t;
            const n = Sh((...s) => Nh(t(...s)), r);
            return n._c = !1, n
        },
        xb = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (Db(s)) continue;
                const o = e[s];
                if (He(o)) t[s] = kP(s, o, n);
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
        DP = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = at(t), Ul(t, "_", r)) : xb(t, e.slots = {})
            } else e.slots = {}, t && Mb(e, t);
            Ul(e.slots, Ec, 1)
        },
        xP = (e, t, r) => {
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
                isNativeTag: fR,
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
    let MP = 0;

    function FP(e, t) {
        return function(n, s = null) {
            He(n) || (n = Object.assign({}, n)), s != null && !mt(s) && (s = null);
            const o = Fb(),
                l = new Set;
            let u = !1;
            const f = o.app = {
                _uid: MP++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: tL,
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
                l ? (P.id = -1, Or(P, r)) : P()
            }
        }
    }
    const Or = uP;

    function BP(e) {
        return UP(e)
    }

    function UP(e, t) {
        const r = vR();
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
            setScopeId: $ = un,
            cloneNode: P,
            insertStaticContent: M
        } = e, G = (m, p, O, x = null, B = null, z = null, ce = !1, se = null, re = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Vi(m, p) && (x = Ot(m), It(m, B, z, !0), m = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: K,
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
            K != null && B && vd(K, m && m.ref, z, p || m, !p)
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
                type: K,
                props: he,
                shapeFlag: pe,
                transition: Ne,
                patchFlag: xe,
                dirs: w
            } = m;
            if (m.el && P !== void 0 && xe === -1) re = m.el = P(m.el);
            else {
                if (re = m.el = l(m.type, z, he && he.is, he), pe & 8 ? g(re, m.children) : pe & 16 && ue(m.children, re, null, x, B, z && K !== "foreignObject", ce, se), w && Di(m, null, x, "created"), he) {
                    for (const R in he) R !== "value" && !Pl(R) && o(re, R, null, he[R], z, m.children, x, B, ot);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && vn(A, x, m)
                }
                le(re, m, m.scopeId, ce, x)
            }
            w && Di(m, null, x, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ne && !Ne.persisted;
            T && Ne.beforeEnter(re), n(re, p, O), ((A = he && he.onVnodeMounted) || T || w) && Or(() => {
                A && vn(A, x, m), T && Ne.enter(re), w && Di(m, null, x, "mounted")
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
                const K = m[A] = se ? ni(m[A]) : Tn(m[A]);
                G(null, K, p, O, x, B, z, ce, se)
            }
        }, Ae = (m, p, O, x, B, z, ce) => {
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
            O && xi(O, !1), (Ne = pe.onVnodeBeforeUpdate) && vn(Ne, O, p, m), K && Di(p, m, O, "beforeUpdate"), O && xi(O, !0);
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
            ((Ne = pe.onVnodeUpdated) || K) && Or(() => {
                Ne && vn(Ne, O, p, m), K && Di(p, m, O, "updated")
            }, x)
        }, Ce = (m, p, O, x, B, z, ce) => {
            for (let se = 0; se < p.length; se++) {
                const re = m[se],
                    A = p[se],
                    K = re.el && (re.type === ze || !Vi(re, A) || re.shapeFlag & 70) ? _(re.el) : O;
                G(re, A, K, null, x, B, z, ce, !0)
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
                K = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ne
            } = p;
            Ne && (se = se ? se.concat(Ne) : Ne), m == null ? (n(A, O, x), n(K, O, x), ue(p.children, O, K, B, z, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ce(m.dynamicChildren, pe, O, B, z, ce, se), (p.key != null || B && p === B.subTree) && Bb(m, p, !0)) : Oe(m, p, O, K, B, z, ce, se, re)
        }, F = (m, p, O, x, B, z, ce, se, re) => {
            p.slotScopeIds = se, m == null ? p.shapeFlag & 512 ? B.ctx.activate(p, O, x, ce, re) : ie(p, O, x, B, z, ce, re) : de(m, p, re)
        }, ie = (m, p, O, x, B, z, ce) => {
            const se = m.component = YP(m, x, B);
            if (vc(m) && (se.ctx.renderer = kt), zP(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !m.el) {
                    const re = se.subTree = St(Qr);
                    q(null, re, p, O)
                }
                return
            }
            be(se, m, p, O, B, z, ce)
        }, de = (m, p, O) => {
            const x = p.component = m.component;
            if (oP(m, p, O))
                if (x.asyncDep && !x.asyncResolved) {
                    ve(x, p, O);
                    return
                } else x.next = p, tP(x.update), x.update();
            else p.el = m.el, x.vnode = p
        }, be = (m, p, O, x, B, z, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: K,
                            bu: he,
                            u: pe,
                            parent: Ne,
                            vnode: xe
                        } = m, w = K, T;
                        xi(m, !1), K ? (K.el = xe.el, ve(m, K, ce)) : K = xe, he && Ll(he), (T = K.props && K.props.onVnodeBeforeUpdate) && vn(T, Ne, K, xe), xi(m, !0);
                        const R = hf(m),
                            S = m.subTree;
                        m.subTree = R, G(S, R, _(S.el), Ot(S), m, B, z), K.el = R.el, w === null && lP(m, R.el), pe && Or(pe, B), (T = K.props && K.props.onVnodeUpdated) && Or(() => vn(T, Ne, K, xe), B)
                    } else {
                        let K;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ne,
                            m: xe,
                            parent: w
                        } = m, T = Ma(p);
                        if (xi(m, !1), Ne && Ll(Ne), !T && (K = pe && pe.onVnodeBeforeMount) && vn(K, w, p), xi(m, !0), he && Dt) {
                            const R = () => {
                                m.subTree = hf(m), Dt(he, m.subTree, m, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && R()) : R()
                        } else {
                            const R = m.subTree = hf(m);
                            G(null, R, O, x, m, B, z), p.el = R.el
                        }
                        if (xe && Or(xe, B), !T && (K = pe && pe.onVnodeMounted)) {
                            const R = p;
                            Or(() => vn(K, w, R), B)
                        }(p.shapeFlag & 256 || w && Ma(w.vnode) && w.vnode.shapeFlag & 256) && m.a && Or(m.a, B), m.isMounted = !0, p = O = x = null
                    }
                },
                re = m.effect = new gh(se, () => Th(A), m.scope),
                A = m.update = () => re.run();
            A.id = m.uid, xi(m, !0), A()
        }, ve = (m, p, O) => {
            p.component = m;
            const x = m.vnode.props;
            m.vnode = p, m.next = null, LP(m, p.props, x, O), xP(m, p.children, O), ta(), wv(), ra()
        }, Oe = (m, p, O, x, B, z, ce, se, re = !1) => {
            const A = m && m.children,
                K = m ? m.shapeFlag : 0,
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
            Ne & 8 ? (K & 16 && ot(A, B, z), he !== A && g(O, he)) : K & 16 ? Ne & 16 ? je(A, he, O, x, B, z, ce, se, re) : ot(A, B, z, !0) : (K & 8 && g(O, ""), Ne & 16 && ue(he, O, x, B, z, ce, se, re))
        }, Fe = (m, p, O, x, B, z, ce, se, re) => {
            m = m || Ds, p = p || Ds;
            const A = m.length,
                K = p.length,
                he = Math.min(A, K);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ne = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                G(m[pe], Ne, O, null, B, z, ce, se, re)
            }
            A > K ? ot(m, B, z, !0, !1, he) : ue(p, O, x, B, z, ce, se, re, he)
        }, je = (m, p, O, x, B, z, ce, se, re) => {
            let A = 0;
            const K = p.length;
            let he = m.length - 1,
                pe = K - 1;
            for (; A <= he && A <= pe;) {
                const Ne = m[A],
                    xe = p[A] = re ? ni(p[A]) : Tn(p[A]);
                if (Vi(Ne, xe)) G(Ne, xe, O, null, B, z, ce, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Ne = m[he],
                    xe = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                if (Vi(Ne, xe)) G(Ne, xe, O, null, B, z, ce, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Ne = pe + 1,
                        xe = Ne < K ? p[Ne].el : x;
                    for (; A <= pe;) G(null, p[A] = re ? ni(p[A]) : Tn(p[A]), O, xe, B, z, ce, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) It(m[A], B, z, !0), A++;
            else {
                const Ne = A,
                    xe = A,
                    w = new Map;
                for (A = xe; A <= pe; A++) {
                    const Se = p[A] = re ? ni(p[A]) : Tn(p[A]);
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
                            } ft === void 0 ? It(Se, B, z, !0) : (ne[ft - xe] = A + 1, ft >= Z ? Z = ft : L = !0, G(Se, p[ft], O, null, B, z, ce, se, re), R++)
                }
                const _e = L ? GP(ne) : Ds;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Se = xe + A,
                        ft = p[Se],
                        ir = Se + 1 < K ? p[Se + 1].el : x;
                    ne[A] === 0 ? G(null, ft, O, ir, B, z, ce, se, re) : L && (T < 0 || A !== _e[T] ? rt(ft, O, ir, 2) : T--)
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
                if (x === 0) se.beforeEnter(z), n(z, p, O), Or(() => se.enter(z), B);
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
                shapeFlag: K,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && vd(se, null, O, m, !0), K & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ne = K & 1 && pe,
                xe = !Ma(m);
            let w;
            if (xe && (w = ce && ce.onVnodeBeforeUnmount) && vn(w, p, m), K & 6) yr(m.component, O, x);
            else {
                if (K & 128) {
                    m.suspense.unmount(O, x);
                    return
                }
                Ne && Di(m, null, p, "beforeUnmount"), K & 64 ? m.type.remove(m, p, O, B, kt, x) : A && (z !== ze || he > 0 && he & 64) ? ot(A, p, O, !1, !0) : (z === ze && he & 384 || !B && K & 16) && ot(re, p, O), x && Ir(m)
            }(xe && (w = ce && ce.onVnodeUnmounted) || Ne) && Or(() => {
                w && vn(w, p, m), Ne && Di(m, null, p, "unmounted")
            }, O)
        }, Ir = m => {
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
        }, yr = (m, p, O) => {
            const {
                bum: x,
                scope: B,
                update: z,
                subTree: ce,
                um: se
            } = m;
            x && Ll(x), B.stop(), z && (z.active = !1, It(ce, m, p, O)), se && Or(se, p), Or(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, ot = (m, p, O, x = !1, B = !1, z = 0) => {
            for (let ce = z; ce < m.length; ce++) It(m[ce], p, O, x, B)
        }, Ot = m => m.shapeFlag & 6 ? Ot(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), lt = (m, p, O) => {
            m == null ? p._vnode && It(p._vnode, null, null, !0) : G(p._vnode || null, m, p, null, null, null, O), wv(), _b(), p._vnode = m
        }, kt = {
            p: G,
            um: It,
            m: rt,
            r: Ir,
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
            createApp: FP(lt, Ht)
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

    function GP(e) {
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
    const jP = e => e.__isTeleport,
        ze = Symbol(void 0),
        _c = Symbol(void 0),
        Qr = Symbol(void 0),
        gf = Symbol(void 0),
        Fa = [];
    let cn = null;

    function U(e = !1) {
        Fa.push(cn = e ? null : [])
    }

    function WP() {
        Fa.pop(), cn = Fa[Fa.length - 1] || null
    }
    let Ja = 1;

    function xv(e) {
        Ja += e
    }

    function Ub(e) {
        return e.dynamicChildren = Ja > 0 ? cn || Ds : null, WP(), Ja > 0 && cn && cn.push(e), e
    }

    function V(e, t, r, n, s, o) {
        return Ub(H(e, t, r, n, s, o, !0))
    }

    function Zr(e, t, r, n, s) {
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
        return u ? (Rh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Wt(r) ? 8 : 16), Ja > 0 && !l && cn && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && cn.push(f), f
    }
    const St = HP;

    function HP(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === Nb) && (e = Qr), Vl(e)) {
            const u = hi(e, t, !0);
            return r && Rh(u, r), Ja > 0 && !o && cn && (u.shapeFlag & 6 ? cn[cn.indexOf(e)] = u : cn.push(u)), u.patchFlag |= -2, u
        }
        if (eL(e) && (e = e.__vccOpts), t) {
            t = KP(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Wt(u) && (t.class = De(u)), mt(f) && (ub(f) && !ke(f) && (f = rr({}, f)), t.style = ao(f))
        }
        const l = Wt(e) ? 1 : cP(e) ? 128 : jP(e) ? 64 : mt(e) ? 4 : He(e) ? 2 : 0;
        return H(e, t, r, n, s, l, o, !0)
    }

    function KP(e) {
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
        return t ? (U(), Zr(Qr, null, e)) : St(Qr, null, e)
    }

    function Tn(e) {
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

    function vn(e, t, r, n = null) {
        Jr(e, t, 7, [r, n])
    }
    const VP = Fb();
    let qP = 0;

    function YP(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || VP,
            o = {
                uid: qP++,
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
        }, o.root = t ? t.root : o, o.emit = iP.bind(null, o), e.ce && e.ce(o), o
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

    function zP(e, t = !1) {
        Qa = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = jb(e);
        PP(e, r, s, t), DP(e, n);
        const o = s ? XP(e, t) : void 0;
        return Qa = !1, o
    }

    function XP(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = fb(new Proxy(e.ctx, $P));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? QP(e) : null;
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
            e.render = n.render || un
        }
        Ys(e), ta(), CP(e), ra(), ts()
    }

    function JP(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return xr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function QP(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = JP(e))
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

    function ZP(e, t = !0) {
        return He(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function eL(e) {
        return He(e) && "__vccOpts" in e
    }
    const Dr = (e, t) => JR(e, t, Qa);

    function Ph(e, t, r) {
        const n = arguments.length;
        return n === 2 ? mt(t) && !ke(t) ? Vl(t) ? St(e, null, [t]) : St(e, t) : St(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Vl(r) && (r = [r]), St(e, t, r))
    }
    const tL = "3.2.39",
        rL = "http://www.w3.org/2000/svg",
        qi = typeof document < "u" ? document : null,
        Bv = qi && qi.createElement("template"),
        nL = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? qi.createElementNS(rL, e) : qi.createElement(e, r ? {
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

    function iL(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function sL(e, t, r) {
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
            const n = aL(e, t);
            Uv.test(r) ? e.setProperty(os(n), r.replace(Uv, ""), "important") : e[n] = r
        }
    }
    const Gv = ["Webkit", "Moz", "ms"],
        mf = {};

    function aL(e, t) {
        const r = mf[t];
        if (r) return r;
        let n = wn(t);
        if (n !== "filter" && n in e) return mf[t] = n;
        n = dc(n);
        for (let s = 0; s < Gv.length; s++) {
            const o = Gv[s] + n;
            if (o in e) return mf[t] = o
        }
        return t
    }
    const jv = "http://www.w3.org/1999/xlink";

    function oL(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(jv, t.slice(6, t.length)) : e.setAttributeNS(jv, t, r);
        else {
            const o = aR(t);
            r == null || o && !VE(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function lL(e, t, r, n, s, o, l) {
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
    const [Hb, cL] = (() => {
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
    const uL = Promise.resolve(),
        fL = () => {
            _d = 0
        },
        dL = () => _d || (uL.then(fL), _d = Hb());

    function Yi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function hL(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function pL(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            l = o[t];
        if (n && l) l.value = n;
        else {
            const [u, f] = gL(t);
            if (n) {
                const h = o[t] = mL(n, s);
                Yi(e, u, h, f)
            } else l && (hL(e, u, l, f), o[t] = void 0)
        }
    }
    const Wv = /(?:Once|Passive|Capture)$/;

    function gL(e) {
        let t;
        if (Wv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Wv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : os(e.slice(2)), t]
    }

    function mL(e, t) {
        const r = n => {
            const s = n.timeStamp || Hb();
            (cL || s >= r.attached - 1) && Jr(vL(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = dL(), r
    }

    function vL(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Hv = /^on[a-z]/,
        yL = (e, t, r, n, s = !1, o, l, u, f) => {
            t === "class" ? iL(e, n, s) : t === "style" ? sL(e, r, n) : cc(t) ? fh(t) || pL(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _L(e, t, n, s)) ? lL(e, t, n, o, l, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), oL(e, t, n, s))
        };

    function _L(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Hv.test(t) && He(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hv.test(t) && Wt(r) ? !1 : t in e
    }
    const Zn = "transition",
        Ia = "animation",
        Tc = (e, {
            slots: t
        }) => Ph(Ob, EL(e), t);
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

    function EL(e) {
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
        } = e, P = bL(s), M = P && P[0], G = P && P[1], {
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
                ei(fe, _), OL(), ei(fe, b), Vv(() => {
                    !fe._isLeaving || (Fi(fe, _), ei(fe, $), Kv(W) || qv(fe, n, G, F))
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

    function bL(e) {
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
    let TL = 0;

    function qv(e, t, r, n) {
        const s = e._endId = ++TL,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: l,
            timeout: u,
            propCount: f
        } = SL(e, t);
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

    function SL(e, t) {
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

    function OL() {
        return document.body.offsetHeight
    }
    const ql = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Ll(t, r) : t
    };

    function wL(e) {
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
                }), t || (Yi(e, "compositionstart", wL), Yi(e, "compositionend", Xv), Yi(e, "change", Xv))
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
        $L = {
            deep: !0,
            created(e, t, r) {
                e._assign = ql(r), Yi(e, "change", () => {
                    const n = e._modelValue,
                        s = CL(e),
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

    function CL(e) {
        return "_value" in e ? e._value : e.value
    }

    function Vb(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const IL = ["ctrl", "shift", "alt", "meta"],
        AL = {
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
            exact: (e, t) => IL.some(r => e[`${r}Key`] && !t.includes(r))
        },
        zt = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = AL[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        NL = {
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
            if (t.some(s => s === n || NL[s] === n)) return e(r)
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
    const RL = rr({
        patchProp: yL
    }, nL);
    let Zv;

    function PL() {
        return Zv || (Zv = BP(RL))
    }
    const LL = (...e) => {
        const t = PL().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = kL(n);
            if (!s) return;
            const o = t._component;
            !He(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function kL(e) {
        return Wt(e) ? document.querySelector(e) : e
    }
    const DL = tt({
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
        it = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        xL = {
            class: "choices"
        },
        ML = {
            class: "constrain"
        },
        FL = {
            key: 0
        },
        BL = ["disabled", "onClick"];

    function UL(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", xL, [H("div", ML, [e.player.prompt ? Ie((U(), V("p", FL, null, 512)), [
            [l, e.player.prompt]
        ]) : Ee("", !0), (U(!0), V(ze, null, $r(e.player.choices, (u, f) => (U(), V("button", {
            key: f,
            class: De({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: zt(h => e.onChoiceClick(f), ["prevent"])
        }, et(u.text), 11, BL))), 128))])])
    }
    const GL = it(DL, [
        ["render", UL]
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

    function jL(e) {
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

    function WL() {
        this.__data__ = [], this.size = 0
    }
    var HL = WL;

    function KL(e, t) {
        return e === t || e !== e && t !== t
    }
    var Sc = KL,
        VL = Sc;

    function qL(e, t) {
        for (var r = e.length; r--;)
            if (VL(e[r][0], t)) return r;
        return -1
    }
    var Oc = qL,
        YL = Oc,
        zL = Array.prototype,
        XL = zL.splice;

    function JL(e) {
        var t = this.__data__,
            r = YL(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : XL.call(t, r, 1), --this.size, !0
    }
    var QL = JL,
        ZL = Oc;

    function ek(e) {
        var t = this.__data__,
            r = ZL(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var tk = ek,
        rk = Oc;

    function nk(e) {
        return rk(this.__data__, e) > -1
    }
    var ik = nk,
        sk = Oc;

    function ak(e, t) {
        var r = this.__data__,
            n = sk(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var ok = ak,
        lk = HL,
        ck = QL,
        uk = tk,
        fk = ik,
        dk = ok;

    function na(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    na.prototype.clear = lk;
    na.prototype.delete = ck;
    na.prototype.get = uk;
    na.prototype.has = fk;
    na.prototype.set = dk;
    var wc = na,
        hk = wc;

    function pk() {
        this.__data__ = new hk, this.size = 0
    }
    var gk = pk;

    function mk(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var vk = mk;

    function yk(e) {
        return this.__data__.get(e)
    }
    var _k = yk;

    function Ek(e) {
        return this.__data__.has(e)
    }
    var bk = Ek,
        Tk = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
        Yb = Tk,
        Sk = Yb,
        Ok = typeof self == "object" && self && self.Object === Object && self,
        wk = Sk || Ok || Function("return this")(),
        dn = wk,
        $k = dn,
        Ck = $k.Symbol,
        $c = Ck,
        ey = $c,
        zb = Object.prototype,
        Ik = zb.hasOwnProperty,
        Ak = zb.toString,
        Na = ey ? ey.toStringTag : void 0;

    function Nk(e) {
        var t = Ik.call(e, Na),
            r = e[Na];
        try {
            e[Na] = void 0;
            var n = !0
        } catch {}
        var s = Ak.call(e);
        return n && (t ? e[Na] = r : delete e[Na]), s
    }
    var Rk = Nk,
        Pk = Object.prototype,
        Lk = Pk.toString;

    function kk(e) {
        return Lk.call(e)
    }
    var Dk = kk,
        ty = $c,
        xk = Rk,
        Mk = Dk,
        Fk = "[object Null]",
        Bk = "[object Undefined]",
        ry = ty ? ty.toStringTag : void 0;

    function Uk(e) {
        return e == null ? e === void 0 ? Bk : Fk : ry && ry in Object(e) ? xk(e) : Mk(e)
    }
    var ia = Uk;

    function Gk(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var hn = Gk,
        jk = ia,
        Wk = hn,
        Hk = "[object AsyncFunction]",
        Kk = "[object Function]",
        Vk = "[object GeneratorFunction]",
        qk = "[object Proxy]";

    function Yk(e) {
        if (!Wk(e)) return !1;
        var t = jk(e);
        return t == Kk || t == Vk || t == Hk || t == qk
    }
    var Lh = Yk,
        zk = dn,
        Xk = zk["__core-js_shared__"],
        Jk = Xk,
        yf = Jk,
        ny = function() {
            var e = /[^.]+$/.exec(yf && yf.keys && yf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function Qk(e) {
        return !!ny && ny in e
    }
    var Zk = Qk,
        eD = Function.prototype,
        tD = eD.toString;

    function rD(e) {
        if (e != null) {
            try {
                return tD.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var Xb = rD,
        nD = Lh,
        iD = Zk,
        sD = hn,
        aD = Xb,
        oD = /[\\^$.*+?()[\]{}|]/g,
        lD = /^\[object .+?Constructor\]$/,
        cD = Function.prototype,
        uD = Object.prototype,
        fD = cD.toString,
        dD = uD.hasOwnProperty,
        hD = RegExp("^" + fD.call(dD).replace(oD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function pD(e) {
        if (!sD(e) || iD(e)) return !1;
        var t = nD(e) ? hD : lD;
        return t.test(aD(e))
    }
    var gD = pD;

    function mD(e, t) {
        return e == null ? void 0 : e[t]
    }
    var vD = mD,
        yD = gD,
        _D = vD;

    function ED(e, t) {
        var r = _D(e, t);
        return yD(r) ? r : void 0
    }
    var ls = ED,
        bD = ls,
        TD = dn,
        SD = bD(TD, "Map"),
        kh = SD,
        OD = ls,
        wD = OD(Object, "create"),
        Cc = wD,
        iy = Cc;

    function $D() {
        this.__data__ = iy ? iy(null) : {}, this.size = 0
    }
    var CD = $D;

    function ID(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var AD = ID,
        ND = Cc,
        RD = "__lodash_hash_undefined__",
        PD = Object.prototype,
        LD = PD.hasOwnProperty;

    function kD(e) {
        var t = this.__data__;
        if (ND) {
            var r = t[e];
            return r === RD ? void 0 : r
        }
        return LD.call(t, e) ? t[e] : void 0
    }
    var DD = kD,
        xD = Cc,
        MD = Object.prototype,
        FD = MD.hasOwnProperty;

    function BD(e) {
        var t = this.__data__;
        return xD ? t[e] !== void 0 : FD.call(t, e)
    }
    var UD = BD,
        GD = Cc,
        jD = "__lodash_hash_undefined__";

    function WD(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = GD && t === void 0 ? jD : t, this
    }
    var HD = WD,
        KD = CD,
        VD = AD,
        qD = DD,
        YD = UD,
        zD = HD;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = KD;
    sa.prototype.delete = VD;
    sa.prototype.get = qD;
    sa.prototype.has = YD;
    sa.prototype.set = zD;
    var XD = sa,
        sy = XD,
        JD = wc,
        QD = kh;

    function ZD() {
        this.size = 0, this.__data__ = {
            hash: new sy,
            map: new(QD || JD),
            string: new sy
        }
    }
    var ex = ZD;

    function tx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var rx = tx,
        nx = rx;

    function ix(e, t) {
        var r = e.__data__;
        return nx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Ic = ix,
        sx = Ic;

    function ax(e) {
        var t = sx(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var ox = ax,
        lx = Ic;

    function cx(e) {
        return lx(this, e).get(e)
    }
    var ux = cx,
        fx = Ic;

    function dx(e) {
        return fx(this, e).has(e)
    }
    var hx = dx,
        px = Ic;

    function gx(e, t) {
        var r = px(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var mx = gx,
        vx = ex,
        yx = ox,
        _x = ux,
        Ex = hx,
        bx = mx;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = vx;
    aa.prototype.delete = yx;
    aa.prototype.get = _x;
    aa.prototype.has = Ex;
    aa.prototype.set = bx;
    var Jb = aa,
        Tx = wc,
        Sx = kh,
        Ox = Jb,
        wx = 200;

    function $x(e, t) {
        var r = this.__data__;
        if (r instanceof Tx) {
            var n = r.__data__;
            if (!Sx || n.length < wx - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Ox(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var Cx = $x,
        Ix = wc,
        Ax = gk,
        Nx = vk,
        Rx = _k,
        Px = bk,
        Lx = Cx;

    function oa(e) {
        var t = this.__data__ = new Ix(e);
        this.size = t.size
    }
    oa.prototype.clear = Ax;
    oa.prototype.delete = Nx;
    oa.prototype.get = Rx;
    oa.prototype.has = Px;
    oa.prototype.set = Lx;
    var Qb = oa,
        kx = ls,
        Dx = function() {
            try {
                var e = kx(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        Zb = Dx,
        ay = Zb;

    function xx(e, t, r) {
        t == "__proto__" && ay ? ay(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Dh = xx,
        Mx = Dh,
        Fx = Sc;

    function Bx(e, t, r) {
        (r !== void 0 && !Fx(e[t], r) || r === void 0 && !(t in e)) && Mx(e, t, r)
    }
    var eT = Bx;

    function Ux(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), l = n(t), u = l.length; u--;) {
                var f = l[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var Gx = Ux,
        jx = Gx,
        Wx = jx(),
        Hx = Wx,
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
                b = u ? u(_) : new h.constructor(_);
            return h.copy(b), b
        }
        e.exports = f
    })(zl, zl.exports);
    var Kx = dn,
        Vx = Kx.Uint8Array,
        qx = Vx,
        oy = qx;

    function Yx(e) {
        var t = new e.constructor(e.byteLength);
        return new oy(t).set(new oy(e)), t
    }
    var xh = Yx,
        zx = xh;

    function Xx(e, t) {
        var r = t ? zx(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var tT = Xx;

    function Jx(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var rT = Jx,
        Qx = hn,
        ly = Object.create,
        Zx = function() {
            function e() {}
            return function(t) {
                if (!Qx(t)) return {};
                if (ly) return ly(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        eM = Zx;

    function tM(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var nT = tM,
        rM = nT,
        nM = rM(Object.getPrototypeOf, Object),
        Mh = nM,
        iM = Object.prototype;

    function sM(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || iM;
        return e === r
    }
    var Fh = sM,
        aM = eM,
        oM = Mh,
        lM = Fh;

    function cM(e) {
        return typeof e.constructor == "function" && !lM(e) ? aM(oM(e)) : {}
    }
    var iT = cM;

    function uM(e) {
        return e != null && typeof e == "object"
    }
    var vi = uM,
        fM = ia,
        dM = vi,
        hM = "[object Arguments]";

    function pM(e) {
        return dM(e) && fM(e) == hM
    }
    var gM = pM,
        cy = gM,
        mM = vi,
        sT = Object.prototype,
        vM = sT.hasOwnProperty,
        yM = sT.propertyIsEnumerable,
        _M = cy(function() {
            return arguments
        }()) ? cy : function(e) {
            return mM(e) && vM.call(e, "callee") && !yM.call(e, "callee")
        },
        aT = _M,
        EM = Array.isArray,
        yi = EM,
        bM = 9007199254740991;

    function TM(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bM
    }
    var oT = TM,
        SM = Lh,
        OM = oT;

    function wM(e) {
        return e != null && OM(e.length) && !SM(e)
    }
    var Ac = wM,
        $M = Ac,
        CM = vi;

    function IM(e) {
        return CM(e) && $M(e)
    }
    var AM = IM,
        Za = {
            exports: {}
        };

    function NM() {
        return !1
    }
    var RM = NM;
    (function(e, t) {
        var r = dn,
            n = RM,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            l = o && o.exports === s,
            u = l ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(Za, Za.exports);
    var PM = ia,
        LM = Mh,
        kM = vi,
        DM = "[object Object]",
        xM = Function.prototype,
        MM = Object.prototype,
        lT = xM.toString,
        FM = MM.hasOwnProperty,
        BM = lT.call(Object);

    function UM(e) {
        if (!kM(e) || PM(e) != DM) return !1;
        var t = LM(e);
        if (t === null) return !0;
        var r = FM.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && lT.call(r) == BM
    }
    var GM = UM,
        jM = ia,
        WM = oT,
        HM = vi,
        KM = "[object Arguments]",
        VM = "[object Array]",
        qM = "[object Boolean]",
        YM = "[object Date]",
        zM = "[object Error]",
        XM = "[object Function]",
        JM = "[object Map]",
        QM = "[object Number]",
        ZM = "[object Object]",
        e2 = "[object RegExp]",
        t2 = "[object Set]",
        r2 = "[object String]",
        n2 = "[object WeakMap]",
        i2 = "[object ArrayBuffer]",
        s2 = "[object DataView]",
        a2 = "[object Float32Array]",
        o2 = "[object Float64Array]",
        l2 = "[object Int8Array]",
        c2 = "[object Int16Array]",
        u2 = "[object Int32Array]",
        f2 = "[object Uint8Array]",
        d2 = "[object Uint8ClampedArray]",
        h2 = "[object Uint16Array]",
        p2 = "[object Uint32Array]",
        Tt = {};
    Tt[a2] = Tt[o2] = Tt[l2] = Tt[c2] = Tt[u2] = Tt[f2] = Tt[d2] = Tt[h2] = Tt[p2] = !0;
    Tt[KM] = Tt[VM] = Tt[i2] = Tt[qM] = Tt[s2] = Tt[YM] = Tt[zM] = Tt[XM] = Tt[JM] = Tt[QM] = Tt[ZM] = Tt[e2] = Tt[t2] = Tt[r2] = Tt[n2] = !1;

    function g2(e) {
        return HM(e) && WM(e.length) && !!Tt[jM(e)]
    }
    var m2 = g2;

    function v2(e) {
        return function(t) {
            return e(t)
        }
    }
    var Bh = v2,
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
    var y2 = m2,
        _2 = Bh,
        uy = eo.exports,
        fy = uy && uy.isTypedArray,
        E2 = fy ? _2(fy) : y2,
        cT = E2;

    function b2(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var uT = b2,
        T2 = Dh,
        S2 = Sc,
        O2 = Object.prototype,
        w2 = O2.hasOwnProperty;

    function $2(e, t, r) {
        var n = e[t];
        (!(w2.call(e, t) && S2(n, r)) || r === void 0 && !(t in e)) && T2(e, t, r)
    }
    var Uh = $2,
        C2 = Uh,
        I2 = Dh;

    function A2(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? I2(r, u, f) : C2(r, u, f)
        }
        return r
    }
    var ho = A2;

    function N2(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var R2 = N2,
        P2 = 9007199254740991,
        L2 = /^(?:0|[1-9]\d*)$/;

    function k2(e, t) {
        var r = typeof e;
        return t = t == null ? P2 : t, !!t && (r == "number" || r != "symbol" && L2.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Gh = k2,
        D2 = R2,
        x2 = aT,
        M2 = yi,
        F2 = Za.exports,
        B2 = Gh,
        U2 = cT,
        G2 = Object.prototype,
        j2 = G2.hasOwnProperty;

    function W2(e, t) {
        var r = M2(e),
            n = !r && x2(e),
            s = !r && !n && F2(e),
            o = !r && !n && !s && U2(e),
            l = r || n || s || o,
            u = l ? D2(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || j2.call(e, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || B2(h, f))) && u.push(h);
        return u
    }
    var fT = W2;

    function H2(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var K2 = H2,
        V2 = hn,
        q2 = Fh,
        Y2 = K2,
        z2 = Object.prototype,
        X2 = z2.hasOwnProperty;

    function J2(e) {
        if (!V2(e)) return Y2(e);
        var t = q2(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !X2.call(e, n)) || r.push(n);
        return r
    }
    var Q2 = J2,
        Z2 = fT,
        eF = Q2,
        tF = Ac;

    function rF(e) {
        return tF(e) ? Z2(e, !0) : eF(e)
    }
    var po = rF,
        nF = ho,
        iF = po;

    function sF(e) {
        return nF(e, iF(e))
    }
    var aF = sF,
        dy = eT,
        oF = zl.exports,
        lF = tT,
        cF = rT,
        uF = iT,
        hy = aT,
        py = yi,
        fF = AM,
        dF = Za.exports,
        hF = Lh,
        pF = hn,
        gF = GM,
        mF = cT,
        gy = uT,
        vF = aF;

    function yF(e, t, r, n, s, o, l) {
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
                $ = !b && dF(f),
                P = !b && !$ && mF(f);
            g = f, b || $ || P ? py(u) ? g = u : fF(u) ? g = cF(u) : $ ? (_ = !1, g = oF(f, !0)) : P ? (_ = !1, g = lF(f, !0)) : g = [] : gF(f) || hy(f) ? (g = u, hy(u) ? g = vF(u) : (!pF(u) || hF(u)) && (g = uF(f))) : _ = !1
        }
        _ && (l.set(f, g), s(g, f, n, o, l), l.delete(f)), dy(e, r, g)
    }
    var _F = yF,
        EF = Qb,
        bF = eT,
        TF = Hx,
        SF = _F,
        OF = hn,
        wF = po,
        $F = uT;

    function dT(e, t, r, n, s) {
        e !== t && TF(t, function(o, l) {
            if (s || (s = new EF), OF(o)) SF(e, t, l, r, dT, n, s);
            else {
                var u = n ? n($F(e, l), o, l + "", e, t, s) : void 0;
                u === void 0 && (u = o), bF(e, l, u)
            }
        }, wF)
    }
    var CF = dT;

    function IF(e) {
        return e
    }
    var hT = IF;

    function AF(e, t, r) {
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
    var NF = AF,
        RF = NF,
        my = Math.max;

    function PF(e, t, r) {
        return t = my(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = my(n.length - t, 0), l = Array(o); ++s < o;) l[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(l), RF(e, this, u)
            }
    }
    var LF = PF;

    function kF(e) {
        return function() {
            return e
        }
    }
    var DF = kF,
        xF = DF,
        vy = Zb,
        MF = hT,
        FF = vy ? function(e, t) {
            return vy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: xF(t),
                writable: !0
            })
        } : MF,
        BF = FF,
        UF = 800,
        GF = 16,
        jF = Date.now;

    function WF(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = jF(),
                s = GF - (n - r);
            if (r = n, s > 0) {
                if (++t >= UF) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var HF = WF,
        KF = BF,
        VF = HF,
        qF = VF(KF),
        YF = qF,
        zF = hT,
        XF = LF,
        JF = YF;

    function QF(e, t) {
        return JF(XF(e, t, zF), e + "")
    }
    var ZF = QF,
        eB = Sc,
        tB = Ac,
        rB = Gh,
        nB = hn;

    function iB(e, t, r) {
        if (!nB(r)) return !1;
        var n = typeof t;
        return (n == "number" ? tB(r) && rB(t, r.length) : n == "string" && t in r) ? eB(r[t], e) : !1
    }
    var sB = iB,
        aB = ZF,
        oB = sB;

    function lB(e) {
        return aB(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, l && oB(r[0], r[1], l) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var cB = lB,
        uB = CF,
        fB = cB,
        dB = fB(function(e, t, r) {
            uB(e, t, r)
        }),
        hB = dB;
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
            return hB(t[0], ...t)
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

                function G(F) {
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
                        de = G(ie);
                    return ie.readAsArrayBuffer(F), de
                }

                function q(F) {
                    var ie = new FileReader,
                        de = G(ie);
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
    var pB = function() {
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
        gB = pB,
        mB = function() {
            return typeof yy != "function" || typeof Symbol != "function" || typeof yy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : gB()
        },
        vB = "Function.prototype.bind called on incompatible ",
        _f = Array.prototype.slice,
        yB = Object.prototype.toString,
        _B = "[object Function]",
        EB = function(t) {
            var r = this;
            if (typeof r != "function" || yB.call(r) !== _B) throw new TypeError(vB + r);
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
        bB = EB,
        jh = Function.prototype.bind || bB,
        TB = jh,
        SB = TB.call(Function.call, Object.prototype.hasOwnProperty),
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
        OB = rs ? function() {
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
        ws = mB(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        As = {},
        wB = typeof Uint8Array > "u" ? Qe : ii(Uint8Array),
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
            "%ThrowTypeError%": OB,
            "%TypedArray%": wB,
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
        $B = function e(t) {
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
        Xl = SB,
        CB = go.call(Function.call, Array.prototype.concat),
        IB = go.call(Function.apply, Array.prototype.splice),
        Ey = go.call(Function.call, String.prototype.replace),
        Jl = go.call(Function.call, String.prototype.slice),
        AB = go.call(Function.call, RegExp.prototype.exec),
        NB = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        RB = /\\(\\)?/g,
        PB = function(t) {
            var r = Jl(t, 0, 1),
                n = Jl(t, -1);
            if (r === "%" && n !== "%") throw new zs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new zs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return Ey(t, NB, function(o, l, u, f) {
                s[s.length] = u ? Ey(f, RB, "$1") : l || o
            }), s
        },
        LB = function(t, r) {
            var n = t,
                s;
            if (Xl(_y, n) && (s = _y[n], n = "%" + s[0] + "%"), Xl(Gs, n)) {
                var o = Gs[n];
                if (o === As && (o = $B(n)), typeof o > "u" && !r) throw new Us("intrinsic " + t + " exists, but is not available. Please file an issue!");
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
            if (AB(/^%?[^%]*%?$/g, t) === null) throw new zs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = PB(t),
                s = n.length > 0 ? n[0] : "",
                o = LB("%" + s + "%", r),
                l = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], IB(n, CB([0, 1], h)));
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
        kB = vT(mT("String.prototype.indexOf")),
        DB = function(t, r) {
            var n = mT(t, !!r);
            return typeof n == "function" && kB(t, ".prototype.") > -1 ? vT(n) : n
        };
    const xB = {},
        MB = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: xB
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        FB = jL(MB);
    var Hh = typeof Map == "function" && Map.prototype,
        Tf = Object.getOwnPropertyDescriptor && Hh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Ql = Hh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        BB = Hh && Map.prototype.forEach,
        Kh = typeof Set == "function" && Set.prototype,
        Sf = Object.getOwnPropertyDescriptor && Kh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Zl = Kh && Sf && typeof Sf.get == "function" ? Sf.get : null,
        UB = Kh && Set.prototype.forEach,
        GB = typeof WeakMap == "function" && WeakMap.prototype,
        Ba = GB ? WeakMap.prototype.has : null,
        jB = typeof WeakSet == "function" && WeakSet.prototype,
        Ua = jB ? WeakSet.prototype.has : null,
        WB = typeof WeakRef == "function" && WeakRef.prototype,
        by = WB ? WeakRef.prototype.deref : null,
        HB = Boolean.prototype.valueOf,
        KB = Object.prototype.toString,
        VB = Function.prototype.toString,
        qB = String.prototype.match,
        Vh = String.prototype.slice,
        oi = String.prototype.replace,
        YB = String.prototype.toUpperCase,
        Ty = String.prototype.toLowerCase,
        yT = RegExp.prototype.test,
        Sy = Array.prototype.concat,
        Sn = Array.prototype.join,
        zB = Array.prototype.slice,
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
    var Sd = FB,
        Cy = Sd.custom,
        Iy = bT(Cy) ? Cy : null,
        XB = function e(t, r, n, s) {
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
            var _ = pU(o, n);
            if (typeof s > "u") s = [];
            else if (TT(s, t) >= 0) return "[Circular]";

            function b($e, F, ie) {
                if (F && (s = zB.call(s), s.push(F)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e($e, de, n + 1, s)
                }
                return e($e, o, n + 1, s)
            }
            if (typeof t == "function" && !Ay(t)) {
                var $ = sU(t),
                    P = yl(t, b);
                return "[Function" + ($ ? ": " + $ : " (anonymous)") + "]" + (P.length > 0 ? " { " + Sn.call(P, ", ") + " }" : "")
            }
            if (bT(t)) {
                var M = Xs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Td.call(t);
                return typeof t == "object" && !Xs ? Ra(M) : M
            }
            if (fU(t)) {
                for (var G = "<" + Ty.call(String(t.nodeName)), C = t.attributes || [], q = 0; q < C.length; q++) G += " " + C[q].name + "=" + ET(JB(C[q].value), "double", o);
                return G += ">", t.childNodes && t.childNodes.length && (G += "..."), G += "</" + Ty.call(String(t.nodeName)) + ">", G
            }
            if (Od(t)) {
                if (t.length === 0) return "[]";
                var X = yl(t, b);
                return _ && !hU(X) ? "[" + wd(X, _) + "]" : "[ " + Sn.call(X, ", ") + " ]"
            }
            if (ZB(t)) {
                var W = yl(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !_T.call(t, "cause") ? "{ [" + String(t) + "] " + Sn.call(Sy.call("[cause]: " + b(t.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Sn.call(W, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Iy && typeof t[Iy] == "function" && Sd) return Sd(t, {
                    depth: g - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (aU(t)) {
                var j = [];
                return BB.call(t, function($e, F) {
                    j.push(b(F, t, !0) + " => " + b($e, t))
                }), Ny("Map", Ql.call(t), j, _)
            }
            if (cU(t)) {
                var Q = [];
                return UB.call(t, function($e) {
                    Q.push(b($e, t))
                }), Ny("Set", Zl.call(t), Q, _)
            }
            if (oU(t)) return wf("WeakMap");
            if (uU(t)) return wf("WeakSet");
            if (lU(t)) return wf("WeakRef");
            if (tU(t)) return Ra(b(Number(t)));
            if (nU(t)) return Ra(b(bd.call(t)));
            if (rU(t)) return Ra(HB.call(t));
            if (eU(t)) return Ra(b(String(t)));
            if (!QB(t) && !Ay(t)) {
                var oe = yl(t, b),
                    le = wy ? wy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ae = !le && ur && Object(t) === t && ur in t ? Vh.call(_i(t), 8, -1) : ue ? "Object" : "",
                    Ce = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ce + (Ae || ue ? "[" + Sn.call(Sy.call([], Ae || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : _ ? fe + "{" + wd(oe, _) + "}" : fe + "{ " + Sn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function ET(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function JB(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Od(e) {
        return _i(e) === "[object Array]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function QB(e) {
        return _i(e) === "[object Date]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function Ay(e) {
        return _i(e) === "[object RegExp]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function ZB(e) {
        return _i(e) === "[object Error]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function eU(e) {
        return _i(e) === "[object String]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function tU(e) {
        return _i(e) === "[object Number]" && (!ur || !(typeof e == "object" && ur in e))
    }

    function rU(e) {
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

    function nU(e) {
        if (!e || typeof e != "object" || !bd) return !1;
        try {
            return bd.call(e), !0
        } catch {}
        return !1
    }
    var iU = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return iU.call(e, t)
    }

    function _i(e) {
        return KB.call(e)
    }

    function sU(e) {
        if (e.name) return e.name;
        var t = qB.call(VB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function TT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function aU(e) {
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

    function oU(e) {
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

    function lU(e) {
        if (!by || !e || typeof e != "object") return !1;
        try {
            return by.call(e), !0
        } catch {}
        return !1
    }

    function cU(e) {
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

    function uU(e) {
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

    function fU(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function ST(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return ST(Vh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, dU);
        return ET(s, "single", t)
    }

    function dU(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + YB.call(t.toString(16))
    }

    function Ra(e) {
        return "Object(" + e + ")"
    }

    function wf(e) {
        return e + " { ? }"
    }

    function Ny(e, t, r, n) {
        var s = n ? wd(r, n) : Sn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function hU(e) {
        for (var t = 0; t < e.length; t++)
            if (TT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function pU(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Sn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Sn.call(Array(t + 1), r)
        }
    }

    function wd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Sn.call(e, "," + r) + `
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
        la = DB,
        gU = XB,
        mU = qh("%TypeError%"),
        _l = qh("%WeakMap%", !0),
        El = qh("%Map%", !0),
        vU = la("WeakMap.prototype.get", !0),
        yU = la("WeakMap.prototype.set", !0),
        _U = la("WeakMap.prototype.has", !0),
        EU = la("Map.prototype.get", !0),
        bU = la("Map.prototype.set", !0),
        TU = la("Map.prototype.has", !0),
        Yh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        SU = function(e, t) {
            var r = Yh(e, t);
            return r && r.value
        },
        OU = function(e, t, r) {
            var n = Yh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        wU = function(e, t) {
            return !!Yh(e, t)
        },
        $U = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new mU("Side channel does not contain " + gU(o))
                },
                get: function(o) {
                    if (_l && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return vU(t, o)
                    } else if (El) {
                        if (r) return EU(r, o)
                    } else if (n) return SU(n, o)
                },
                has: function(o) {
                    if (_l && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return _U(t, o)
                    } else if (El) {
                        if (r) return TU(r, o)
                    } else if (n) return wU(n, o);
                    return !1
                },
                set: function(o, l) {
                    _l && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new _l), yU(t, o, l)) : El ? (r || (r = new El), bU(r, o, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), OU(n, o, l))
                }
            };
            return s
        },
        CU = String.prototype.replace,
        IU = /%20/g,
        $f = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        zh = {
            default: $f.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return CU.call(e, IU, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: $f.RFC1738,
            RFC3986: $f.RFC3986
        },
        AU = zh,
        Cf = Object.prototype.hasOwnProperty,
        zi = Array.isArray,
        yn = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        NU = function(t) {
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
        RU = function e(t, r, n) {
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
        PU = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        LU = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        kU = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < l.length; ++f) {
                var h = l.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === AU.RFC1738 && (h === 40 || h === 41)) {
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
        DU = function(t) {
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
            return NU(r), t
        },
        xU = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        MU = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        FU = function(t, r) {
            return [].concat(t, r)
        },
        BU = function(t, r) {
            if (zi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        wT = {
            arrayToObject: OT,
            assign: PU,
            combine: FU,
            compact: DU,
            decode: LU,
            encode: kU,
            isBuffer: MU,
            isRegExp: xU,
            maybeMap: BU,
            merge: RU
        },
        $T = $U,
        $d = wT,
        Ga = zh,
        UU = Object.prototype.hasOwnProperty,
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
        GU = String.prototype.split,
        jU = Array.prototype.push,
        CT = function(e, t) {
            jU.apply(e, Fn(t) ? t : [t])
        },
        WU = Date.prototype.toISOString,
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
                return WU.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        HU = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        If = {},
        KU = function e(t, r, n, s, o, l, u, f, h, g, _, b, $, P, M, G) {
            for (var C = t, q = G, X = 0, W = !1;
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
            if (HU(C) || $d.isBuffer(C)) {
                if (u) {
                    var Q = P ? r : u(r, Zt.encoder, M, "key", b);
                    if (n === "comma" && P) {
                        for (var oe = GU.call(String(C), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + $(u(oe[ue], Zt.encoder, M, "value", b));
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
                    G.set(t, X);
                    var ve = $T();
                    ve.set(If, G), CT(Ae, e(de, be, n, s, o, l, u, f, h, g, _, b, $, P, M, ve))
                }
            }
            return Ae
        },
        VU = function(t) {
            if (!t) return Zt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Zt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Ga.default;
            if (typeof t.format < "u") {
                if (!UU.call(Ga.formatters, t.format)) throw new TypeError("Unknown format option provided.");
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
        qU = function(e, t) {
            var r = e,
                n = VU(t),
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
                n.skipNulls && r[b] === null || CT(l, KU(r[b], b, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var $ = l.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), $.length > 0 ? P + $ : ""
        },
        Js = wT,
        Cd = Object.prototype.hasOwnProperty,
        YU = Array.isArray,
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
        zU = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        IT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        XU = "utf8=%26%2310003%3B",
        JU = "utf8=%E2%9C%93",
        QU = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === JU ? h = "utf-8" : l[f] === XU && (h = "iso-8859-1"), u = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== u) {
                    var g = l[f],
                        _ = g.indexOf("]="),
                        b = _ === -1 ? g.indexOf("=") : _ + 1,
                        $, P;
                    b === -1 ? ($ = r.decoder(g, Vt.decoder, h, "key"), P = r.strictNullHandling ? null : "") : ($ = r.decoder(g.slice(0, b), Vt.decoder, h, "key"), P = Js.maybeMap(IT(g.slice(b + 1), r), function(M) {
                        return r.decoder(M, Vt.decoder, h, "value")
                    })), P && r.interpretNumericEntities && h === "iso-8859-1" && (P = zU(P)), g.indexOf("[]=") > -1 && (P = YU(P) ? [P] : P), Cd.call(n, $) ? n[$] = Js.combine(n[$], P) : n[$] = P
                } return n
        },
        ZU = function(e, t, r, n) {
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
        eG = function(t, r, n, s) {
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
                return f && g.push("[" + o.slice(f.index) + "]"), ZU(g, r, n, s)
            }
        },
        tG = function(t) {
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
        rG = function(e, t) {
            var r = tG(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? QU(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), l = 0; l < o.length; ++l) {
                var u = o[l],
                    f = eG(u, n[u], r, typeof e == "string");
                s = Js.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Js.compact(s)
        },
        nG = qU,
        iG = rG,
        sG = zh,
        AT = {
            formats: sG,
            parse: iG,
            stringify: nG
        };
    class aG {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class oG {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class lG {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class cG {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class uG {}
    var Nc = {
        CreateRoomReply: aG,
        GetRoomReply: oG,
        GetAudienceReply: lG,
        RoomExit: cG,
        RoomLock: uG
    };
    const Ly = Ed.exports,
        fG = AT,
        {
            CreateRoomReply: dG,
            GetRoomReply: hG
        } = Nc;
    class pG {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = fG.stringify(r);
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
            return new dG({
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
            return new hG({
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
    var gG = {
            APIClient: pG
        },
        Ns = null;
    typeof WebSocket < "u" ? Ns = WebSocket : typeof MozWebSocket < "u" ? Ns = MozWebSocket : typeof Lt < "u" ? Ns = Lt.WebSocket || Lt.MozWebSocket : typeof window < "u" ? Ns = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ns = self.WebSocket || self.MozWebSocket);
    var mG = Ns,
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

    function vG(e) {
        console && console.warn && console.warn(e)
    }
    var NT = Number.isNaN || function(t) {
        return t !== t
    };

    function ht() {
        ht.init.call(this)
    }
    Xh.exports = ht;
    Xh.exports.once = bG;
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
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, vG(u)
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

    function yG() {
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
            s = yG.bind(n);
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
            o === 0 ? n.shift() : _G(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
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
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? EG(s) : xT(s, s.length)
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

    function _G(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function EG(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function bG(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, o), n(l)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            MT(e, t, o, {
                once: !0
            }), t !== "error" && TG(e, s, {
                once: !0
            })
        })
    }

    function TG(e, t, r) {
        typeof e.on == "function" && MT(e, "error", t, r)
    }

    function MT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class SG {
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

    function OG({
        code: e,
        message: t
    }) {
        const r = wG[e];
        return r ? new r({
            message: t
        }) : new Pc({
            message: t
        })
    }
    var ui = {
        createError: OG,
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
        ObservedError: SG
    };
    const wG = {
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
    class $G {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class CG {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class IG {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class AG {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class NG {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var Jh = {
        ClientConnected: CG,
        ClientDisconnected: IG,
        ClientKicked: NG,
        ClientSend: AG,
        ClientWelcome: $G
    };
    class RG {
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
        CountGroup: RG
    };
    class PG {
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
        GCounter: PG
    };
    class LG {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var gS = {
        Notification: LG
    };
    class kG {
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
    class DG {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var ep = {
        ObjectEntity: kG,
        ObjectEcho: DG
    };
    class xG {
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
        PNCounter: xG
    };
    class MG {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var mS = {
        Reply: MG
    };
    class FG {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var BG = {
        Request: FG
    };
    class UG {
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
    class GG {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var rp = {
        TextEntity: UG,
        TextEcho: GG
    };
    class jG {
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
        TextRing: jG
    };
    class WG {
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
        ArtifactEntity: WG
    };
    class HG {
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
    class KG {
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
    class VG {
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
        DoodleEntity: HG,
        DoodleLine: KG,
        DoodleLineRemoved: VG
    };
    class qG {
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
    class YG {
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
    class zG {
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
        StackEntity: qG,
        StackElement: YG,
        StackElements: zG
    };
    class XG {
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
        DropEntity: XG
    };
    class JG {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var QG = {
        Echo: JG
    };
    class ZG {
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
    var ej = {
        LockEntity: ZG
    };
    class tj {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var ES = {
        OK: tj
    };
    class rj {
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
        NumberEntity: rj
    };
    const {
        ArtifactEntity: nj
    } = vS, {
        ClientWelcome: ij,
        ClientConnected: sj,
        ClientDisconnected: aj,
        ClientKicked: oj,
        ClientSend: lj
    } = Jh, {
        CountGroup: cj
    } = Qh, {
        DoodleEntity: uj,
        DoodleLine: fj,
        DoodleLineRemoved: dj
    } = ip, {
        StackEntity: hj,
        StackElement: pj,
        StackElements: gj
    } = yS, {
        DropEntity: mj
    } = _S, {
        Echo: vj
    } = QG, {
        LockEntity: yj
    } = ej, {
        GCounter: _j
    } = Zh, {
        GetAudienceReply: Ej,
        RoomExit: bj,
        RoomLock: Tj
    } = Nc, {
        Notification: Sj
    } = gS, {
        OK: Oj
    } = ES, {
        NumberEntity: wj
    } = bS, {
        ObjectEcho: $j,
        ObjectEntity: Cj
    } = ep, {
        PNCounter: xy
    } = tp, {
        Reply: Ij
    } = mS, {
        TextEcho: Aj,
        TextEntity: Nj
    } = rp, {
        TextRing: Rj
    } = np, {
        createError: My,
        ObservedError: Pj
    } = ui;

    function Id(e, t, r) {
        switch (e) {
            case "ok":
                return new Oj;
            case "echo":
                return new vj({
                    message: t.message
                });
            case "lock":
                return new yj({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return My({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new Pj({
                    to: t.to,
                    error: My({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new Nj({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new Aj({
                    message: t.message
                });
            case "object":
                return new Cj({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new $j({
                    message: t.message
                });
            case "drop":
                return new mj({
                    key: t.key
                });
            case "artifact":
                return new nj({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new sj({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new aj({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new oj({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new lj({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new ij({
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
                return new uj({
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
                return new fj({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new dj({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new hj({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new pj({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new gj({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new wj({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new bj({
                    cause: t.cause
                });
            case "room/lock":
                return new Tj;
            case "room/get-audience":
                return new Ej({
                    connections: t.connections
                });
            case "audience":
                return new xy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new cj({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new Rj({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new _j({
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

    function Lj(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new Ij({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Id(r, t.result)
        }) : new Sj({
            pc: t.pc,
            opcode: r,
            result: Id(r, t.result)
        })
    }
    var kj = {
        parseResponseMessage: Lj
    };
    const Fy = mG,
        Dj = AT,
        xj = Xh.exports,
        {
            CallError: Mj
        } = ui,
        {
            ClientWelcome: Fj
        } = Jh,
        {
            CountGroup: Bj
        } = Qh,
        {
            GCounter: Uj
        } = Zh,
        {
            Notification: By
        } = gS,
        {
            ObjectEntity: Af
        } = ep,
        {
            PNCounter: Gj
        } = tp,
        {
            Reply: jj
        } = mS,
        {
            Request: Wj
        } = BG,
        {
            TextEntity: Nf
        } = rp,
        {
            TextRing: Hj
        } = np,
        {
            parseResponseMessage: Kj
        } = kj,
        {
            DoodleEntity: Vj
        } = ip,
        {
            StackEntity: qj
        } = yS,
        Yj = 1e3 + Math.floor(Math.random() * 500),
        Uy = 13e3;
    class zj extends xj {
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
            const r = Dj.stringify(t),
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
                    const _ = Kj(g);
                    if (_ instanceof jj) this.onReply(_);
                    else if (_ instanceof By) {
                        if (_.result instanceof Fj) u = !0, this.id = _.result.id, this.deviceId = _.result.deviceId, this.entities = _.result.entities, this.secret = _.result.secret, _.result.name && (this.name = _.result.name), f(_.result);
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
                r = Yj;
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
            delete this.pending[r], t.result instanceof Mj ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== Fy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new Wj({
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
            return this.entities[t] = new Vj({
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
            return this.entities[t] = new qj({
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
            return this.entities[t] = new Bj({
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
            return this.entities[t] = new Uj({
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
            return this.entities[t] = new Gj({
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
            return this.entities[t] = new Hj({
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
    var Xj = {
        WSClient: zj
    };
    const {
        APIClient: Jj
    } = gG, {
        WSClient: Qj
    } = Xj, {
        CreateRoomReply: Zj,
        GetRoomReply: e3
    } = Nc, {
        ClientWelcome: t3,
        ClientDisconnected: r3
    } = Jh, {
        ArtifactEntity: n3
    } = vS, {
        GCounter: i3
    } = Zh, {
        NumberEntity: s3
    } = bS, {
        TextEntity: a3
    } = rp, {
        DoodleEntity: o3
    } = ip, {
        ObjectEntity: l3
    } = ep, {
        CountGroup: c3
    } = Qh, {
        DropEntity: u3
    } = _S, {
        OK: f3
    } = ES, {
        RoomExit: d3
    } = Nc, {
        TextRing: h3
    } = np, {
        PNCounter: p3
    } = tp;
    var wr = {
        APIClient: Jj,
        WSClient: Qj,
        ClientWelcome: t3,
        CreateRoomReply: Zj,
        DropEntity: u3,
        GetRoomReply: e3,
        ClientDisconnected: r3,
        RoomExit: d3,
        OK: f3,
        ArtifactEntity: n3,
        DoodleEntity: o3,
        NumberEntity: s3,
        CountGroup: c3,
        GCounter: i3,
        ObjectEntity: l3,
        PNCounter: p3,
        TextEntity: a3,
        TextRing: h3
    };
    const g3 = [{
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
        Ad = e => g3.find(t => t.tag === e || t.categoryId === e);

    function Nd(...e) {
        console.log(...e)
    }
    class m3 {
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
            Nd("[Debug] pushEntity", t), t instanceof wr.ArtifactEntity ? this.items.push({
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
                    const G = Ad(this.room.appTag);
                    $.username = `DebugRecorder ${G?G.name:this.room.appTag}`
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

    function v3(e) {
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
                G = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                C = new RegExp("^" + G + "+");

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
            var Ir = function(w) {
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
                yr = function(w) {
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
                    S = new Ir(T);
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
                var ne = new yr(S, {
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
                return typeof window < "u" ? window : typeof process == "object" && typeof v3 == "function" && typeof Lt == "object" ? Lt : this
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
            var K = function(w) {
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
            K.CONNECTING = 0, K.OPEN = 1, K.CLOSING = 2, K.CLOSED = 3;
            var he = function(T, R) {
                return new K(T, R)
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
    class y3 {
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
    class _3 {
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
    class E3 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new _3(t, this.width, this.height, r)
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
    const b3 = {
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
        T3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        S3 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        O3 = "LOADING",
        w3 = {
            JOINED_COUNT: "{count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "1 player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        $3 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        C3 = {
            AND: "AND",
            OR: "OR"
        },
        I3 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        A3 = {
            NAME: "AUDIENCE"
        },
        N3 = {
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
        R3 = {
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
        P3 = {
            ACTION: b3,
            ALT: T3,
            ERROR: S3,
            LOADING: O3,
            LOBBY: w3,
            POST_GAME: $3,
            SEPARATOR: C3,
            TUTORIAL: I3,
            AUDIENCE: A3,
            UGC: N3,
            TOAST: R3
        },
        L3 = {
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
        k3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        D3 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        x3 = "CHARGEMENT",
        M3 = {
            JOINED_COUNT: "1\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "1\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        F3 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        B3 = {
            AND: "ET",
            OR: "OU"
        },
        U3 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        G3 = {
            NAME: "SPECTATEURS"
        },
        j3 = {
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
        W3 = {
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
        H3 = {
            ACTION: L3,
            ALT: k3,
            ERROR: D3,
            LOADING: x3,
            LOBBY: M3,
            POST_GAME: F3,
            SEPARATOR: B3,
            TUTORIAL: U3,
            AUDIENCE: G3,
            UGC: j3,
            TOAST: W3
        },
        K3 = {
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
        V3 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        q3 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        Y3 = "CARICAMENTO",
        z3 = {
            JOINED_COUNT: "Sta partecipando 1 giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "Manca 1 giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        X3 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        J3 = {
            AND: "E",
            OR: "O"
        },
        Q3 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        Z3 = {
            NAME: "PUBBLICO"
        },
        eW = {
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
        tW = {
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
        rW = {
            ACTION: K3,
            ALT: V3,
            ERROR: q3,
            LOADING: Y3,
            LOBBY: z3,
            POST_GAME: X3,
            SEPARATOR: J3,
            TUTORIAL: Q3,
            AUDIENCE: Z3,
            UGC: eW,
            TOAST: tW
        },
        nW = {
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
        iW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        sW = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        aW = "LADE",
        oW = {
            JOINED_COUNT: "{count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "{count} Spieler zum Starten ben\xF6tigt",
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
            ACTION: nW,
            ALT: iW,
            ERROR: sW,
            LOADING: aW,
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
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        yW = "CARGANDO",
        _W = {
            JOINED_COUNT: "Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        EW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        bW = {
            AND: "Y",
            OR: "O"
        },
        TW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        SW = {
            NAME: "P\xDABLICO"
        },
        OW = {
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
        wW = {
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
        $W = {
            ACTION: gW,
            ALT: mW,
            ERROR: vW,
            LOADING: yW,
            LOBBY: _W,
            POST_GAME: EW,
            SEPARATOR: bW,
            TUTORIAL: TW,
            AUDIENCE: SW,
            UGC: OW,
            TOAST: wW
        },
        CW = {
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
        IW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        AW = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        NW = "CARGANDO",
        RW = {
            JOINED_COUNT: "Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        PW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        LW = {
            AND: "Y",
            OR: "O"
        },
        kW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        DW = {
            NAME: "P\xDABLICO"
        },
        xW = {
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
        MW = {
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
        FW = {
            ACTION: CW,
            ALT: IW,
            ERROR: AW,
            LOADING: NW,
            LOBBY: RW,
            POST_GAME: PW,
            SEPARATOR: LW,
            TUTORIAL: kW,
            AUDIENCE: DW,
            UGC: xW,
            TOAST: MW
        },
        BW = {
            en: P3,
            fr: H3,
            it: rW,
            de: pW,
            es: $W,
            "es-XL": FW
        },
        UW = tt({
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
                    this.canvas = Un(new y3(e, this.player.doodle, this.canvasOptions))
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
        GW = {
            class: "doodle"
        },
        jW = {
            ref: "canvas"
        },
        WW = ["disabled"],
        HW = ["disabled"];

    function KW(e, t, r, n, s, o) {
        const l = xt("pointerbox-translate"),
            u = xt("pointerbox"),
            f = xt("t");
        return U(), V("div", GW, [Ie((U(), V("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ie(H("canvas", jW, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Ee("", !0) : Ie((U(), V("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = zt((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, WW)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Ee("", !0) : Ie((U(), V("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = zt((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, HW)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const VW = it(UW, [
        ["render", KW]
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
                G = 1,
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
                Ir = [
                    ["ary", oe],
                    ["bind", G],
                    ["bindKey", C],
                    ["curry", X],
                    ["curryRight", W],
                    ["flip", ue],
                    ["partial", j],
                    ["partialRight", Q],
                    ["rearg", le]
                ],
                nr = "[object Arguments]",
                yr = "[object Array]",
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
                K = "[object Symbol]",
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
                $w = RegExp(Gp.source),
                Cw = RegExp(jp.source),
                Iw = /<%-([\s\S]+?)%>/g,
                Aw = /<%([\s\S]+?)%>/g,
                Wp = /<%=([\s\S]+?)%>/g,
                Nw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Rw = /^\w*$/,
                Pw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Zc = /[\\^$.*+?()[\]{}|]/g,
                Lw = RegExp(Zc.source),
                eu = /^\s+/,
                kw = /\s/,
                Dw = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                xw = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Mw = /,? & /,
                Fw = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Bw = /[()=,{}\[\]\/\s]/,
                Uw = /\\(\\)?/g,
                Gw = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Hp = /\w*$/,
                jw = /^[-+]0x[0-9a-f]+$/i,
                Ww = /^0b[01]+$/i,
                Hw = /^\[object .+?Constructor\]$/,
                Kw = /^0o[0-7]+$/i,
                Vw = /^(?:0|[1-9]\d*)$/,
                qw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                wo = /($^)/,
                Yw = /['\n\r\u2028\u2029\\]/g,
                $o = "\\ud800-\\udfff",
                zw = "\\u0300-\\u036f",
                Xw = "\\ufe20-\\ufe2f",
                Jw = "\\u20d0-\\u20ff",
                Kp = zw + Xw + Jw,
                Vp = "\\u2700-\\u27bf",
                qp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                Qw = "\\xac\\xb1\\xd7\\xf7",
                Zw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                e0 = "\\u2000-\\u206f",
                t0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                Yp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                zp = "\\ufe0e\\ufe0f",
                Xp = Qw + Zw + e0 + t0,
                tu = "['\u2019]",
                r0 = "[" + $o + "]",
                Jp = "[" + Xp + "]",
                Co = "[" + Kp + "]",
                Qp = "\\d+",
                n0 = "[" + Vp + "]",
                Zp = "[" + qp + "]",
                eg = "[^" + $o + Xp + Qp + Vp + qp + Yp + "]",
                ru = "\\ud83c[\\udffb-\\udfff]",
                i0 = "(?:" + Co + "|" + ru + ")",
                tg = "[^" + $o + "]",
                nu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                iu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                fs = "[" + Yp + "]",
                rg = "\\u200d",
                ng = "(?:" + Zp + "|" + eg + ")",
                s0 = "(?:" + fs + "|" + eg + ")",
                ig = "(?:" + tu + "(?:d|ll|m|re|s|t|ve))?",
                sg = "(?:" + tu + "(?:D|LL|M|RE|S|T|VE))?",
                ag = i0 + "?",
                og = "[" + zp + "]?",
                a0 = "(?:" + rg + "(?:" + [tg, nu, iu].join("|") + ")" + og + ag + ")*",
                o0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                l0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                lg = og + ag + a0,
                c0 = "(?:" + [n0, nu, iu].join("|") + ")" + lg,
                u0 = "(?:" + [tg + Co + "?", Co, nu, iu, r0].join("|") + ")",
                f0 = RegExp(tu, "g"),
                d0 = RegExp(Co, "g"),
                su = RegExp(ru + "(?=" + ru + ")|" + u0 + lg, "g"),
                h0 = RegExp([fs + "?" + Zp + "+" + ig + "(?=" + [Jp, fs, "$"].join("|") + ")", s0 + "+" + sg + "(?=" + [Jp, fs + ng, "$"].join("|") + ")", fs + "?" + ng + "+" + ig, fs + "+" + sg, l0, o0, Qp, c0].join("|"), "g"),
                p0 = RegExp("[" + rg + $o + Kp + zp + "]"),
                g0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                m0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                v0 = -1,
                bt = {};
            bt[T] = bt[R] = bt[S] = bt[L] = bt[Z] = bt[ne] = bt[_e] = bt[Se] = bt[ft] = !0, bt[nr] = bt[yr] = bt[xe] = bt[Ot] = bt[w] = bt[lt] = bt[Ht] = bt[Dt] = bt[p] = bt[O] = bt[B] = bt[se] = bt[re] = bt[A] = bt[pe] = !1;
            var vt = {};
            vt[nr] = vt[yr] = vt[xe] = vt[w] = vt[Ot] = vt[lt] = vt[T] = vt[R] = vt[S] = vt[L] = vt[Z] = vt[p] = vt[O] = vt[B] = vt[se] = vt[re] = vt[A] = vt[K] = vt[ne] = vt[_e] = vt[Se] = vt[ft] = !0, vt[Ht] = vt[Dt] = vt[pe] = !1;
            var y0 = {
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
                _0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                E0 = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                b0 = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                T0 = parseFloat,
                S0 = parseInt,
                cg = typeof Lt == "object" && Lt && Lt.Object === Object && Lt,
                O0 = typeof self == "object" && self && self.Object === Object && self,
                Jt = cg || O0 || Function("return this")(),
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

            function Ar(k, J, Y) {
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

            function w0(k, J, Y, Te) {
                for (var Be = -1, st = k == null ? 0 : k.length; ++Be < st;) {
                    var Ft = k[Be];
                    J(Te, Ft, Y(Ft), k)
                }
                return Te
            }

            function Gr(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length; ++Y < Te && J(k[Y], Y, k) !== !1;);
                return k
            }

            function $0(k, J) {
                for (var Y = k == null ? 0 : k.length; Y-- && J(k[Y], Y, k) !== !1;);
                return k
            }

            function vg(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length; ++Y < Te;)
                    if (!J(k[Y], Y, k)) return !1;
                return !0
            }

            function Wn(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length, Be = 0, st = []; ++Y < Te;) {
                    var Ft = k[Y];
                    J(Ft, Y, k) && (st[Be++] = Ft)
                }
                return st
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
                    st = k == null ? 0 : k.length;
                for (Te && st && (Y = k[++Be]); ++Be < st;) Y = J(Y, k[Be], Be, k);
                return Y
            }

            function C0(k, J, Y, Te) {
                var Be = k == null ? 0 : k.length;
                for (Te && Be && (Y = k[--Be]); Be--;) Y = J(Y, k[Be], Be, k);
                return Y
            }

            function uu(k, J) {
                for (var Y = -1, Te = k == null ? 0 : k.length; ++Y < Te;)
                    if (J(k[Y], Y, k)) return !0;
                return !1
            }
            var I0 = fu("length");

            function A0(k) {
                return k.split("")
            }

            function N0(k) {
                return k.match(Fw) || []
            }

            function yg(k, J, Y) {
                var Te;
                return Y(k, function(Be, st, Ft) {
                    if (J(Be, st, Ft)) return Te = st, !1
                }), Te
            }

            function Ao(k, J, Y, Te) {
                for (var Be = k.length, st = Y + (Te ? 1 : -1); Te ? st-- : ++st < Be;)
                    if (J(k[st], st, k)) return st;
                return -1
            }

            function ds(k, J, Y) {
                return J === J ? j0(k, J, Y) : Ao(k, _g, Y)
            }

            function R0(k, J, Y, Te) {
                for (var Be = Y - 1, st = k.length; ++Be < st;)
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
                return Be(k, function(st, Ft, pt) {
                    Y = Te ? (Te = !1, st) : J(Y, st, Ft, pt)
                }), Y
            }

            function P0(k, J) {
                var Y = k.length;
                for (k.sort(J); Y--;) k[Y] = k[Y].value;
                return k
            }

            function hu(k, J) {
                for (var Y, Te = -1, Be = k.length; ++Te < Be;) {
                    var st = J(k[Te]);
                    st !== r && (Y = Y === r ? st : Y + st)
                }
                return Y
            }

            function pu(k, J) {
                for (var Y = -1, Te = Array(k); ++Y < k;) Te[Y] = J(Y);
                return Te
            }

            function L0(k, J) {
                return wt(J, function(Y) {
                    return [Y, k[Y]]
                })
            }

            function Tg(k) {
                return k && k.slice(0, $g(k) + 1).replace(eu, "")
            }

            function Nr(k) {
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

            function k0(k, J) {
                for (var Y = k.length, Te = 0; Y--;) k[Y] === J && ++Te;
                return Te
            }
            var D0 = du(y0),
                x0 = du(_0);

            function M0(k) {
                return "\\" + b0[k]
            }

            function F0(k, J) {
                return k == null ? r : k[J]
            }

            function hs(k) {
                return p0.test(k)
            }

            function B0(k) {
                return g0.test(k)
            }

            function U0(k) {
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
                for (var Y = -1, Te = k.length, Be = 0, st = []; ++Y < Te;) {
                    var Ft = k[Y];
                    (Ft === J || Ft === g) && (k[Y] = g, st[Be++] = Y)
                }
                return st
            }

            function No(k) {
                var J = -1,
                    Y = Array(k.size);
                return k.forEach(function(Te) {
                    Y[++J] = Te
                }), Y
            }

            function G0(k) {
                var J = -1,
                    Y = Array(k.size);
                return k.forEach(function(Te) {
                    Y[++J] = [Te, Te]
                }), Y
            }

            function j0(k, J, Y) {
                for (var Te = Y - 1, Be = k.length; ++Te < Be;)
                    if (k[Te] === J) return Te;
                return -1
            }

            function W0(k, J, Y) {
                for (var Te = Y + 1; Te--;)
                    if (k[Te] === J) return Te;
                return Te
            }

            function ps(k) {
                return hs(k) ? K0(k) : I0(k)
            }

            function tn(k) {
                return hs(k) ? V0(k) : A0(k)
            }

            function $g(k) {
                for (var J = k.length; J-- && kw.test(k.charAt(J)););
                return J
            }
            var H0 = du(E0);

            function K0(k) {
                for (var J = su.lastIndex = 0; su.test(k);) ++J;
                return J
            }

            function V0(k) {
                return k.match(su) || []
            }

            function q0(k) {
                return k.match(h0) || []
            }
            var Y0 = function k(J) {
                    J = J == null ? Jt : gs.defaults(Jt.Object(), J, gs.pick(Jt, m0));
                    var Y = J.Array,
                        Te = J.Date,
                        Be = J.Error,
                        st = J.Function,
                        Ft = J.Math,
                        pt = J.Object,
                        vu = J.RegExp,
                        z0 = J.String,
                        jr = J.TypeError,
                        Ro = Y.prototype,
                        X0 = st.prototype,
                        ms = pt.prototype,
                        Po = J["__core-js_shared__"],
                        Lo = X0.toString,
                        dt = ms.hasOwnProperty,
                        J0 = 0,
                        Cg = function() {
                            var i = /[^.]+$/.exec(Po && Po.keys && Po.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        ko = ms.toString,
                        Q0 = Lo.call(pt),
                        Z0 = Jt._,
                        e1 = vu("^" + Lo.call(dt).replace(Zc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
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
                        t1 = J.clearTimeout !== Jt.clearTimeout && J.clearTimeout,
                        r1 = Te && Te.now !== Jt.Date.now && Te.now,
                        n1 = J.setTimeout !== Jt.setTimeout && J.setTimeout,
                        Uo = Ft.ceil,
                        Go = Ft.floor,
                        yu = pt.getOwnPropertySymbols,
                        i1 = Do ? Do.isBuffer : r,
                        Pg = J.isFinite,
                        s1 = Ro.join,
                        a1 = wg(pt.keys, pt),
                        Bt = Ft.max,
                        sr = Ft.min,
                        o1 = Te.now,
                        l1 = J.parseInt,
                        Lg = Ft.random,
                        c1 = Ro.reverse,
                        _u = Pi(J, "DataView"),
                        ga = Pi(J, "Map"),
                        Eu = Pi(J, "Promise"),
                        vs = Pi(J, "Set"),
                        ma = Pi(J, "WeakMap"),
                        va = Pi(pt, "create"),
                        jo = ma && new ma,
                        ys = {},
                        u1 = Li(_u),
                        f1 = Li(ga),
                        d1 = Li(Eu),
                        h1 = Li(vs),
                        p1 = Li(ma),
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
                        escape: Iw,
                        evaluate: Aw,
                        interpolate: Wp,
                        variable: "",
                        imports: {
                            _: y
                        }
                    }, y.prototype = Ho.prototype, y.prototype.constructor = y, Wr.prototype = _s(Ho.prototype), Wr.prototype.constructor = Wr;

                    function Ye(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = []
                    }

                    function g1() {
                        var i = new Ye(this.__wrapped__);
                        return i.__actions__ = _r(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = _r(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = _r(this.__views__), i
                    }

                    function m1() {
                        if (this.__filtered__) {
                            var i = new Ye(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function v1() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            c = Ge(i),
                            d = a < 0,
                            v = c ? i.length : 0,
                            E = A$(0, v, this.__views__),
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
                                    Lr = qe.type,
                                    pr = Xe(Le);
                                if (Lr == ie) Le = pr;
                                else if (!pr) {
                                    if (Lr == F) continue e;
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

                    function y1() {
                        this.__data__ = va ? va(null) : {}, this.size = 0
                    }

                    function _1(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function E1(i) {
                        var a = this.__data__;
                        if (va) {
                            var c = a[i];
                            return c === f ? r : c
                        }
                        return dt.call(a, i) ? a[i] : r
                    }

                    function b1(i) {
                        var a = this.__data__;
                        return va ? a[i] !== r : dt.call(a, i)
                    }

                    function T1(i, a) {
                        var c = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, c[i] = va && a === r ? f : a, this
                    }
                    Ii.prototype.clear = y1, Ii.prototype.delete = _1, Ii.prototype.get = E1, Ii.prototype.has = b1, Ii.prototype.set = T1;

                    function $n(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function S1() {
                        this.__data__ = [], this.size = 0
                    }

                    function O1(i) {
                        var a = this.__data__,
                            c = Ko(a, i);
                        if (c < 0) return !1;
                        var d = a.length - 1;
                        return c == d ? a.pop() : Fo.call(a, c, 1), --this.size, !0
                    }

                    function w1(i) {
                        var a = this.__data__,
                            c = Ko(a, i);
                        return c < 0 ? r : a[c][1]
                    }

                    function $1(i) {
                        return Ko(this.__data__, i) > -1
                    }

                    function C1(i, a) {
                        var c = this.__data__,
                            d = Ko(c, i);
                        return d < 0 ? (++this.size, c.push([i, a])) : c[d][1] = a, this
                    }
                    $n.prototype.clear = S1, $n.prototype.delete = O1, $n.prototype.get = w1, $n.prototype.has = $1, $n.prototype.set = C1;

                    function Cn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function I1() {
                        this.size = 0, this.__data__ = {
                            hash: new Ii,
                            map: new(ga || $n),
                            string: new Ii
                        }
                    }

                    function A1(i) {
                        var a = nl(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function N1(i) {
                        return nl(this, i).get(i)
                    }

                    function R1(i) {
                        return nl(this, i).has(i)
                    }

                    function P1(i, a) {
                        var c = nl(this, i),
                            d = c.size;
                        return c.set(i, a), this.size += c.size == d ? 0 : 1, this
                    }
                    Cn.prototype.clear = I1, Cn.prototype.delete = A1, Cn.prototype.get = N1, Cn.prototype.has = R1, Cn.prototype.set = P1;

                    function Ai(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.__data__ = new Cn; ++a < c;) this.add(i[a])
                    }

                    function L1(i) {
                        return this.__data__.set(i, f), this
                    }

                    function k1(i) {
                        return this.__data__.has(i)
                    }
                    Ai.prototype.add = Ai.prototype.push = L1, Ai.prototype.has = k1;

                    function rn(i) {
                        var a = this.__data__ = new $n(i);
                        this.size = a.size
                    }

                    function D1() {
                        this.__data__ = new $n, this.size = 0
                    }

                    function x1(i) {
                        var a = this.__data__,
                            c = a.delete(i);
                        return this.size = a.size, c
                    }

                    function M1(i) {
                        return this.__data__.get(i)
                    }

                    function F1(i) {
                        return this.__data__.has(i)
                    }

                    function B1(i, a) {
                        var c = this.__data__;
                        if (c instanceof $n) {
                            var d = c.__data__;
                            if (!ga || d.length < s - 1) return d.push([i, a]), this.size = ++c.size, this;
                            c = this.__data__ = new Cn(d)
                        }
                        return c.set(i, a), this.size = c.size, this
                    }
                    rn.prototype.clear = D1, rn.prototype.delete = x1, rn.prototype.get = M1, rn.prototype.has = F1, rn.prototype.set = B1;

                    function Dg(i, a) {
                        var c = Ge(i),
                            d = !c && ki(i),
                            v = !c && !d && Jn(i),
                            E = !c && !d && !v && Ss(i),
                            I = c || d || v || E,
                            N = I ? pu(i.length, z0) : [],
                            D = N.length;
                        for (var ee in i)(a || dt.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || E && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Rn(ee, D))) && N.push(ee);
                        return N
                    }

                    function xg(i) {
                        var a = i.length;
                        return a ? i[Ru(0, a - 1)] : r
                    }

                    function U1(i, a) {
                        return il(_r(i), Ni(a, 0, i.length))
                    }

                    function G1(i) {
                        return il(_r(i))
                    }

                    function bu(i, a, c) {
                        (c !== r && !nn(i[a], c) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function _a(i, a, c) {
                        var d = i[a];
                        (!(dt.call(i, a) && nn(d, c)) || c === r && !(a in i)) && In(i, a, c)
                    }

                    function Ko(i, a) {
                        for (var c = i.length; c--;)
                            if (nn(i[c][0], a)) return c;
                        return -1
                    }

                    function j1(i, a, c, d) {
                        return qn(i, function(v, E, I) {
                            a(d, v, c(v), I)
                        }), d
                    }

                    function Mg(i, a) {
                        return i && gn(a, Kt(a), i)
                    }

                    function W1(i, a) {
                        return i && gn(a, br(a), i)
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
                            if (I = R$(i), !N) return _r(i, I)
                        } else {
                            var ae = ar(i),
                                me = ae == Dt || ae == m;
                            if (Jn(i)) return om(i, N);
                            if (ae == B || ae == nr || me && !v) {
                                if (I = D || me ? {} : $m(i), !N) return D ? E$(i, W1(I, i)) : _$(i, Mg(I, i))
                            } else {
                                if (!vt[ae]) return v ? i : {};
                                I = P$(i, ae, N)
                            }
                        }
                        E || (E = new rn);
                        var we = E.get(i);
                        if (we) return we;
                        E.set(i, I), tv(i) ? i.forEach(function(Le) {
                            I.add(Hr(Le, a, c, Le, i, E))
                        }) : Zm(i) && i.forEach(function(Le, qe) {
                            I.set(qe, Hr(Le, a, c, qe, i, E))
                        });
                        var Pe = ee ? D ? ju : Gu : D ? br : Kt,
                            Ke = te ? r : Pe(i);
                        return Gr(Ke || i, function(Le, qe) {
                            Ke && (qe = Le, Le = i[qe]), _a(I, qe, Hr(Le, a, c, qe, i, E))
                        }), I
                    }

                    function H1(i) {
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
                        c && (a = wt(a, Nr(c))), d ? (E = lu, I = !1) : a.length >= s && (E = ha, I = !1, a = new Ai(a));
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
                    var qn = dm(pn),
                        Ug = dm(Ou, !0);

                    function K1(i, a) {
                        var c = !0;
                        return qn(i, function(d, v, E) {
                            return c = !!a(d, v, E), c
                        }), c
                    }

                    function Vo(i, a, c) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var E = i[d],
                                I = a(E);
                            if (I != null && (N === r ? I === I && !Pr(I) : c(I, N))) var N = I,
                                D = E
                        }
                        return D
                    }

                    function V1(i, a, c, d) {
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
                        for (c || (c = k$), v || (v = []); ++E < I;) {
                            var N = i[E];
                            a > 0 && c(N) ? a > 1 ? Qt(N, a - 1, c, d, v) : Hn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var Su = hm(),
                        jg = hm(!0);

                    function pn(i, a) {
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
                        for (var c = 0, d = a.length; i != null && c < d;) i = i[mn(a[c++])];
                        return c && c == d ? i : r
                    }

                    function Wg(i, a, c) {
                        var d = a(i);
                        return Ge(i) ? d : Hn(d, c(i))
                    }

                    function dr(i) {
                        return i == null ? i === r ? he : x : Ci && Ci in pt(i) ? I$(i) : G$(i)
                    }

                    function wu(i, a) {
                        return i > a
                    }

                    function q1(i, a) {
                        return i != null && dt.call(i, a)
                    }

                    function Y1(i, a) {
                        return i != null && a in pt(i)
                    }

                    function z1(i, a, c) {
                        return i >= sr(a, c) && i < Bt(a, c)
                    }

                    function $u(i, a, c) {
                        for (var d = c ? lu : Io, v = i[0].length, E = i.length, I = E, N = Y(E), D = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && a && (te = wt(te, Nr(a))), D = sr(te.length, D), N[I] = !c && (a || v >= 120 && te.length >= 120) ? new Ai(I && te) : r
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

                    function X1(i, a, c, d) {
                        return pn(i, function(v, E, I) {
                            a(d, c(v), E, I)
                        }), d
                    }

                    function ba(i, a, c) {
                        a = zn(a, i), i = Nm(i, a);
                        var d = i == null ? i : i[mn(Vr(a))];
                        return d == null ? r : Ar(d, i, c)
                    }

                    function Hg(i) {
                        return At(i) && dr(i) == nr
                    }

                    function J1(i) {
                        return At(i) && dr(i) == xe
                    }

                    function Q1(i) {
                        return At(i) && dr(i) == lt
                    }

                    function Ta(i, a, c, d, v) {
                        return i === a ? !0 : i == null || a == null || !At(i) && !At(a) ? i !== i && a !== a : Z1(i, a, c, d, Ta, v)
                    }

                    function Z1(i, a, c, d, v, E) {
                        var I = Ge(i),
                            N = Ge(a),
                            D = I ? yr : ar(i),
                            ee = N ? yr : ar(a);
                        D = D == nr ? B : D, ee = ee == nr ? B : ee;
                        var te = D == B,
                            ae = ee == B,
                            me = D == ee;
                        if (me && Jn(i)) {
                            if (!Jn(a)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return E || (E = new rn), I || Ss(i) ? Sm(i, a, c, d, v, E) : $$(i, a, D, c, d, v, E);
                        if (!(c & P)) {
                            var we = te && dt.call(i, "__wrapped__"),
                                Pe = ae && dt.call(a, "__wrapped__");
                            if (we || Pe) {
                                var Ke = we ? i.value() : i,
                                    Le = Pe ? a.value() : a;
                                return E || (E = new rn), v(Ke, Le, c, d, E)
                            }
                        }
                        return me ? (E || (E = new rn), C$(i, a, c, d, v, E)) : !1
                    }

                    function e$(i) {
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
                                var ae = new rn;
                                if (d) var me = d(ee, te, D, i, a, ae);
                                if (!(me === r ? Ta(te, ee, P | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Kg(i) {
                        if (!Ct(i) || x$(i)) return !1;
                        var a = Pn(i) ? e1 : Hw;
                        return a.test(Li(i))
                    }

                    function t$(i) {
                        return At(i) && dr(i) == se
                    }

                    function r$(i) {
                        return At(i) && ar(i) == re
                    }

                    function n$(i) {
                        return At(i) && ul(i.length) && !!bt[dr(i)]
                    }

                    function Vg(i) {
                        return typeof i == "function" ? i : i == null ? Tr : typeof i == "object" ? Ge(i) ? zg(i[0], i[1]) : Yg(i) : pv(i)
                    }

                    function Iu(i) {
                        if (!wa(i)) return a1(i);
                        var a = [];
                        for (var c in pt(i)) dt.call(i, c) && c != "constructor" && a.push(c);
                        return a
                    }

                    function i$(i) {
                        if (!Ct(i)) return U$(i);
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
                            d = Er(i) ? Y(i.length) : [];
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
                        return Vu(i) && Cm(a) ? Im(mn(i), a) : function(c) {
                            var d = rf(c, i);
                            return d === r && d === a ? nf(c, i) : Ta(a, d, P | M)
                        }
                    }

                    function Yo(i, a, c, d, v) {
                        i !== a && Su(a, function(E, I) {
                            if (v || (v = new rn), Ct(E)) s$(i, a, I, c, Yo, d, v);
                            else {
                                var N = d ? d(Yu(i, I), E, I + "", i, a, v) : r;
                                N === r && (N = E), bu(i, I, N)
                            }
                        }, br)
                    }

                    function s$(i, a, c, d, v, E, I) {
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
                            te = D, me || we || Pe ? Ge(N) ? te = N : Nt(N) ? te = _r(N) : we ? (ae = !1, te = om(D, !0)) : Pe ? (ae = !1, te = lm(D, !0)) : te = [] : Ca(D) || ki(D) ? (te = N, ki(N) ? te = iv(N) : (!Ct(N) || Pn(N)) && (te = $m(D))) : ae = !1
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
                        }) : a = [Tr];
                        var d = -1;
                        a = wt(a, Nr(Re()));
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
                        return P0(v, function(E, I) {
                            return y$(E, I, c)
                        })
                    }

                    function a$(i, a) {
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

                    function o$(i) {
                        return function(a) {
                            return Ri(a, i)
                        }
                    }

                    function Nu(i, a, c, d) {
                        var v = d ? R0 : ds,
                            E = -1,
                            I = a.length,
                            N = i;
                        for (i === a && (a = _r(a)), c && (N = wt(i, Nr(c))); ++E < I;)
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

                    function l$(i, a, c, d) {
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
                        return zu(Am(i, a, Tr), i + "")
                    }

                    function c$(i) {
                        return xg(Os(i))
                    }

                    function u$(i, a) {
                        var c = Os(i);
                        return il(c, Ni(a, 0, c.length))
                    }

                    function Sa(i, a, c, d) {
                        if (!Ct(i)) return i;
                        a = zn(a, i);
                        for (var v = -1, E = a.length, I = E - 1, N = i; N != null && ++v < E;) {
                            var D = mn(a[v]),
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
                        } : Tr,
                        f$ = Bo ? function(i, a) {
                            return Bo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: af(a),
                                writable: !0
                            })
                        } : Tr;

                    function d$(i) {
                        return il(Os(i))
                    }

                    function Kr(i, a, c) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), c = c > v ? v : c, c < 0 && (c += v), v = a > c ? 0 : c - a >>> 0, a >>>= 0;
                        for (var E = Y(v); ++d < v;) E[d] = i[d + a];
                        return E
                    }

                    function h$(i, a) {
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
                                I !== null && !Pr(I) && (c ? I <= a : I < a) ? d = E + 1 : v = E
                            }
                            return v
                        }
                        return Lu(i, a, Tr, c)
                    }

                    function Lu(i, a, c, d) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        a = c(a);
                        for (var I = a !== a, N = a === null, D = Pr(a), ee = a === r; v < E;) {
                            var te = Go((v + E) / 2),
                                ae = c(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Pe = ae === ae,
                                Ke = Pr(ae);
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
                            if (!c || !nn(N, D)) {
                                var D = N;
                                E[v++] = I === 0 ? 0 : I
                            }
                        }
                        return E
                    }

                    function rm(i) {
                        return typeof i == "number" ? i : Pr(i) ? Fe : +i
                    }

                    function Rr(i) {
                        if (typeof i == "string") return i;
                        if (Ge(i)) return wt(i, Rr) + "";
                        if (Pr(i)) return kg ? kg.call(i) : "";
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
                            var ee = a ? null : O$(i);
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
                        return a = zn(a, i), i = Nm(i, a), i == null || delete i[mn(Vr(a))]
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
                        return typeof i == "function" ? i : Tr
                    }

                    function zn(i, a) {
                        return Ge(i) ? i : Vu(i, a) ? [i] : km(ct(i))
                    }
                    var p$ = Ve;

                    function Xn(i, a, c) {
                        var d = i.length;
                        return c = c === r ? d : c, !a && c >= d ? i : Kr(i, a, c)
                    }
                    var am = t1 || function(i) {
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

                    function g$(i, a) {
                        var c = a ? Fu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.byteLength)
                    }

                    function m$(i) {
                        var a = new i.constructor(i.source, Hp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function v$(i) {
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
                                E = Pr(i),
                                I = a !== r,
                                N = a === null,
                                D = a === a,
                                ee = Pr(a);
                            if (!N && !ee && !E && i > a || E && I && D && !N && !ee || d && I && D || !c && D || !v) return 1;
                            if (!d && !E && !ee && i < a || ee && c && v && !d && !E || N && c && v || !I && v || !D) return -1
                        }
                        return 0
                    }

                    function y$(i, a, c) {
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

                    function _r(i, a) {
                        var c = -1,
                            d = i.length;
                        for (a || (a = Y(d)); ++c < d;) a[c] = i[c];
                        return a
                    }

                    function gn(i, a, c, d) {
                        var v = !c;
                        c || (c = {});
                        for (var E = -1, I = a.length; ++E < I;) {
                            var N = a[E],
                                D = d ? d(c[N], i[N], N, c, i) : r;
                            D === r && (D = i[N]), v ? In(c, N, D) : _a(c, N, D)
                        }
                        return c
                    }

                    function _$(i, a) {
                        return gn(i, Ku(i), a)
                    }

                    function E$(i, a) {
                        return gn(i, Om(i), a)
                    }

                    function Jo(i, a) {
                        return function(c, d) {
                            var v = Ge(c) ? w0 : j1,
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
                            if (!Er(c)) return i(c, d);
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

                    function b$(i, a, c) {
                        var d = a & G,
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
                            var c = hs(a) ? tn(a) : r,
                                d = c ? c[0] : a.charAt(0),
                                v = c ? Xn(c, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function bs(i) {
                        return function(a) {
                            return cu(dv(fv(a).replace(f0, "")), i, "")
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

                    function T$(i, a, c) {
                        var d = Oa(i);

                        function v() {
                            for (var E = arguments.length, I = Y(E), N = E, D = Ts(v); N--;) I[N] = arguments[N];
                            var ee = E < 3 && I[0] !== D && I[E - 1] !== D ? [] : Kn(I, D);
                            if (E -= ee.length, E < c) return _m(i, a, Qo, v.placeholder, r, I, ee, r, r, c - E);
                            var te = this && this !== Jt && this instanceof v ? d : i;
                            return Ar(te, this, I)
                        }
                        return v
                    }

                    function gm(i) {
                        return function(a, c, d) {
                            var v = pt(a);
                            if (!Er(a)) {
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
                            ae = a & G,
                            me = a & C,
                            we = a & (X | W),
                            Pe = a & ue,
                            Ke = me ? r : Oa(i);

                        function Le() {
                            for (var qe = arguments.length, Xe = Y(qe), Lr = qe; Lr--;) Xe[Lr] = arguments[Lr];
                            if (we) var pr = Ts(Le),
                                kr = k0(Xe, pr);
                            if (d && (Xe = um(Xe, d, v, we)), E && (Xe = fm(Xe, E, I, we)), qe -= kr, we && qe < ee) {
                                var Rt = Kn(Xe, pr);
                                return _m(i, a, Qo, Le.placeholder, c, Xe, Rt, N, D, ee - qe)
                            }
                            var sn = ae ? c : this,
                                kn = me ? sn[i] : i;
                            return qe = Xe.length, N ? Xe = j$(Xe, N) : Pe && qe > 1 && Xe.reverse(), te && D < qe && (Xe.length = D), this && this !== Jt && this instanceof Le && (kn = Ke || Oa(kn)), kn.apply(sn, Xe)
                        }
                        return Le
                    }

                    function vm(i, a) {
                        return function(c, d) {
                            return X1(c, i, a(d), {})
                        }
                    }

                    function Zo(i, a) {
                        return function(c, d) {
                            var v;
                            if (c === r && d === r) return a;
                            if (c !== r && (v = c), d !== r) {
                                if (v === r) return d;
                                typeof c == "string" || typeof d == "string" ? (c = Rr(c), d = Rr(d)) : (c = rm(c), d = rm(d)), v = i(c, d)
                            }
                            return v
                        }
                    }

                    function Bu(i) {
                        return Nn(function(a) {
                            return a = wt(a, Nr(Re())), Ve(function(c) {
                                var d = this;
                                return i(a, function(v) {
                                    return Ar(v, d, c)
                                })
                            })
                        })
                    }

                    function el(i, a) {
                        a = a === r ? " " : Rr(a);
                        var c = a.length;
                        if (c < 2) return c ? Pu(a, i) : a;
                        var d = Pu(a, Uo(i / ps(a)));
                        return hs(a) ? Xn(tn(d), 0, i).join("") : d.slice(0, i)
                    }

                    function S$(i, a, c, d) {
                        var v = a & G,
                            E = Oa(i);

                        function I() {
                            for (var N = -1, D = arguments.length, ee = -1, te = d.length, ae = Y(te + D), me = this && this !== Jt && this instanceof I ? E : i; ++ee < te;) ae[ee] = d[ee];
                            for (; D--;) ae[ee++] = arguments[++N];
                            return Ar(me, v ? c : this, ae)
                        }
                        return I
                    }

                    function ym(i) {
                        return function(a, c, d) {
                            return d && typeof d != "number" && hr(a, c, d) && (c = d = r), a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), d = d === r ? a < c ? 1 : -1 : Ln(d), l$(a, c, d, i)
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
                        a |= te ? j : Q, a &= ~(te ? Q : j), a & q || (a &= ~(G | C));
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
                    var O$ = vs && 1 / No(new vs([, -0]))[1] == be ? function(i) {
                        return new vs(i)
                    } : cf;

                    function Em(i) {
                        return function(a) {
                            var c = ar(a);
                            return c == p ? mu(a) : c == re ? G0(a) : L0(a, i(a))
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
                        if (me && B$(we, me), i = we[0], a = we[1], c = we[2], d = we[3], v = we[4], N = we[9] = we[9] === r ? D ? 0 : i.length : Bt(we[9] - ee, 0), !N && a & (X | W) && (a &= ~(X | W)), !a || a == G) var Pe = b$(i, a, c);
                        else a == X || a == W ? Pe = T$(i, a, N) : (a == j || a == (G | j)) && !v.length ? Pe = S$(i, a, c, d) : Pe = Qo.apply(r, we);
                        var Ke = me ? em : Rm;
                        return Pm(Ke(Pe, we), i, a)
                    }

                    function bm(i, a, c, d) {
                        return i === r || nn(i, ms[c]) && !dt.call(d, c) ? a : i
                    }

                    function Tm(i, a, c, d, v, E) {
                        return Ct(i) && Ct(a) && (E.set(a, i), Yo(i, a, r, Tm, E), E.delete(a)), i
                    }

                    function w$(i) {
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

                    function $$(i, a, c, d, v, E, I) {
                        switch (c) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case xe:
                                return !(i.byteLength != a.byteLength || !E(new xo(i), new xo(a)));
                            case Ot:
                            case lt:
                            case O:
                                return nn(+i, +a);
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
                            case K:
                                if (ya) return ya.call(i) == ya.call(a)
                        }
                        return !1
                    }

                    function C$(i, a, c, d, v, E) {
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
                            if (d) var Lr = I ? d(Xe, qe, me, a, i, E) : d(qe, Xe, me, i, a, E);
                            if (!(Lr === r ? qe === Xe || v(qe, Xe, c, d, E) : Lr)) {
                                Ke = !1;
                                break
                            }
                            Le || (Le = me == "constructor")
                        }
                        if (Ke && !Le) {
                            var pr = i.constructor,
                                kr = a.constructor;
                            pr != kr && "constructor" in i && "constructor" in a && !(typeof pr == "function" && pr instanceof pr && typeof kr == "function" && kr instanceof kr) && (Ke = !1)
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
                        return Wg(i, br, Om)
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
                        return D$(a) ? c[typeof a == "string" ? "string" : "hash"] : c.map
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
                        var c = F0(i, a);
                        return Kg(c) ? c : r
                    }

                    function I$(i) {
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
                            case u1:
                                return w;
                            case f1:
                                return p;
                            case d1:
                                return z;
                            case h1:
                                return re;
                            case p1:
                                return pe
                        }
                        return a
                    });

                    function A$(i, a, c) {
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

                    function N$(i) {
                        var a = i.match(xw);
                        return a ? a[1].split(Mw) : []
                    }

                    function wm(i, a, c) {
                        a = zn(a, i);
                        for (var d = -1, v = a.length, E = !1; ++d < v;) {
                            var I = mn(a[d]);
                            if (!(E = i != null && c(i, I))) break;
                            i = i[I]
                        }
                        return E || ++d != v ? E : (v = i == null ? 0 : i.length, !!v && ul(v) && Rn(I, v) && (Ge(i) || ki(i)))
                    }

                    function R$(i) {
                        var a = i.length,
                            c = new i.constructor(a);
                        return a && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c
                    }

                    function $m(i) {
                        return typeof i.constructor == "function" && !wa(i) ? _s(Mo(i)) : {}
                    }

                    function P$(i, a, c) {
                        var d = i.constructor;
                        switch (a) {
                            case xe:
                                return Fu(i);
                            case Ot:
                            case lt:
                                return new d(+i);
                            case w:
                                return g$(i, c);
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
                                return m$(i);
                            case re:
                                return new d;
                            case K:
                                return v$(i)
                        }
                    }

                    function L$(i, a) {
                        var c = a.length;
                        if (!c) return i;
                        var d = c - 1;
                        return a[d] = (c > 1 ? "& " : "") + a[d], a = a.join(c > 2 ? ", " : " "), i.replace(Dw, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function k$(i) {
                        return Ge(i) || ki(i) || !!(Rg && i && i[Rg])
                    }

                    function Rn(i, a) {
                        var c = typeof i;
                        return a = a == null ? ve : a, !!a && (c == "number" || c != "symbol" && Vw.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function hr(i, a, c) {
                        if (!Ct(c)) return !1;
                        var d = typeof a;
                        return (d == "number" ? Er(c) && Rn(a, c.length) : d == "string" && a in c) ? nn(c[a], i) : !1
                    }

                    function Vu(i, a) {
                        if (Ge(i)) return !1;
                        var c = typeof i;
                        return c == "number" || c == "symbol" || c == "boolean" || i == null || Pr(i) ? !0 : Rw.test(i) || !Nw.test(i) || a != null && i in pt(a)
                    }

                    function D$(i) {
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

                    function x$(i) {
                        return !!Cg && Cg in i
                    }
                    var M$ = Po ? Pn : ff;

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

                    function F$(i) {
                        var a = ll(i, function(d) {
                                return c.size === h && c.clear(), d
                            }),
                            c = a.cache;
                        return a
                    }

                    function B$(i, a) {
                        var c = i[1],
                            d = a[1],
                            v = c | d,
                            E = v < (G | C | oe),
                            I = d == oe && c == X || d == oe && c == le && i[7].length <= a[8] || d == (oe | le) && a[7].length <= a[8] && c == X;
                        if (!(E || I)) return i;
                        d & G && (i[2] = a[2], v |= c & G ? 0 : q);
                        var N = a[3];
                        if (N) {
                            var D = i[3];
                            i[3] = D ? um(D, N, a[4]) : N, i[4] = D ? Kn(i[3], g) : a[4]
                        }
                        return N = a[5], N && (D = i[5], i[5] = D ? fm(D, N, a[6]) : N, i[6] = D ? Kn(i[5], g) : a[6]), N = a[7], N && (i[7] = N), d & oe && (i[8] = i[8] == null ? a[8] : sr(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function U$(i) {
                        var a = [];
                        if (i != null)
                            for (var c in pt(i)) a.push(c);
                        return a
                    }

                    function G$(i) {
                        return ko.call(i)
                    }

                    function Am(i, a, c) {
                        return a = Bt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, E = Bt(d.length - a, 0), I = Y(E); ++v < E;) I[v] = d[a + v];
                                v = -1;
                                for (var N = Y(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = c(I), Ar(i, this, N)
                            }
                    }

                    function Nm(i, a) {
                        return a.length < 2 ? i : Ri(i, Kr(a, 0, -1))
                    }

                    function j$(i, a) {
                        for (var c = i.length, d = sr(a.length, c), v = _r(i); d--;) {
                            var E = a[d];
                            i[d] = Rn(E, c) ? v[E] : r
                        }
                        return i
                    }

                    function Yu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Rm = Lm(em),
                        $a = n1 || function(i, a) {
                            return Jt.setTimeout(i, a)
                        },
                        zu = Lm(f$);

                    function Pm(i, a, c) {
                        var d = a + "";
                        return zu(i, L$(d, W$(N$(d), c)))
                    }

                    function Lm(i) {
                        var a = 0,
                            c = 0;
                        return function() {
                            var d = o1(),
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
                    var km = F$(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(Pw, function(c, d, v, E) {
                            a.push(v ? E.replace(Uw, "$1") : d || c)
                        }), a
                    });

                    function mn(i) {
                        if (typeof i == "string" || Pr(i)) return i;
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

                    function W$(i, a) {
                        return Gr(Ir, function(c) {
                            var d = "_." + c[0];
                            a & c[1] && !Io(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Dm(i) {
                        if (i instanceof Ye) return i.clone();
                        var a = new Wr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = _r(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function H$(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = Bt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, E = 0, I = Y(Uo(d / a)); v < d;) I[E++] = Kr(i, v, v += a);
                        return I
                    }

                    function K$(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = 0, v = []; ++a < c;) {
                            var E = i[a];
                            E && (v[d++] = E)
                        }
                        return v
                    }

                    function V$() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = Y(i - 1), c = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Hn(Ge(c) ? _r(c) : [c], Qt(a, 1))
                    }
                    var q$ = Ve(function(i, a) {
                            return Nt(i) ? Ea(i, Qt(a, 1, Nt, !0)) : []
                        }),
                        Y$ = Ve(function(i, a) {
                            var c = Vr(a);
                            return Nt(c) && (c = r), Nt(i) ? Ea(i, Qt(a, 1, Nt, !0), Re(c, 2)) : []
                        }),
                        z$ = Ve(function(i, a) {
                            var c = Vr(a);
                            return Nt(c) && (c = r), Nt(i) ? Ea(i, Qt(a, 1, Nt, !0), r, c) : []
                        });

                    function X$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), Kr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function J$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Kr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function Q$(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3), !0, !0) : []
                    }

                    function Z$(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3), !0) : []
                    }

                    function eC(i, a, c, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (c && typeof c != "number" && hr(i, a, c) && (c = 0, d = v), V1(i, a, c, d)) : []
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

                    function tC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, be) : []
                    }

                    function rC(i, a) {
                        var c = i == null ? 0 : i.length;
                        return c ? (a = a === r ? 1 : We(a), Qt(i, a)) : []
                    }

                    function nC(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = {}; ++a < c;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Bm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function iC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Bt(d + v, 0)), ds(i, a, v)
                    }

                    function sC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Kr(i, 0, -1) : []
                    }
                    var aC = Ve(function(i) {
                            var a = wt(i, xu);
                            return a.length && a[0] === i[0] ? $u(a) : []
                        }),
                        oC = Ve(function(i) {
                            var a = Vr(i),
                                c = wt(i, xu);
                            return a === Vr(c) ? a = r : c.pop(), c.length && c[0] === i[0] ? $u(c, Re(a, 2)) : []
                        }),
                        lC = Ve(function(i) {
                            var a = Vr(i),
                                c = wt(i, xu);
                            return a = typeof a == "function" ? a : r, a && c.pop(), c.length && c[0] === i[0] ? $u(c, r, a) : []
                        });

                    function cC(i, a) {
                        return i == null ? "" : s1.call(i, a)
                    }

                    function Vr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function uC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return c !== r && (v = We(c), v = v < 0 ? Bt(d + v, 0) : sr(v, d - 1)), a === a ? W0(i, a, v) : Ao(i, _g, v, !0)
                    }

                    function fC(i, a) {
                        return i && i.length ? Xg(i, We(a)) : r
                    }
                    var dC = Ve(Um);

                    function Um(i, a) {
                        return i && i.length && a && a.length ? Nu(i, a) : i
                    }

                    function hC(i, a, c) {
                        return i && i.length && a && a.length ? Nu(i, a, Re(c, 2)) : i
                    }

                    function pC(i, a, c) {
                        return i && i.length && a && a.length ? Nu(i, a, r, c) : i
                    }
                    var gC = Nn(function(i, a) {
                        var c = i == null ? 0 : i.length,
                            d = Tu(i, a);
                        return Zg(i, wt(a, function(v) {
                            return Rn(v, c) ? +v : v
                        }).sort(cm)), d
                    });

                    function mC(i, a) {
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
                        return i == null ? i : c1.call(i)
                    }

                    function vC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (c && typeof c != "number" && hr(i, a, c) ? (a = 0, c = d) : (a = a == null ? 0 : We(a), c = c === r ? d : We(c)), Kr(i, a, c)) : []
                    }

                    function yC(i, a) {
                        return zo(i, a)
                    }

                    function _C(i, a, c) {
                        return Lu(i, a, Re(c, 2))
                    }

                    function EC(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = zo(i, a);
                            if (d < c && nn(i[d], a)) return d
                        }
                        return -1
                    }

                    function bC(i, a) {
                        return zo(i, a, !0)
                    }

                    function TC(i, a, c) {
                        return Lu(i, a, Re(c, 2), !0)
                    }

                    function SC(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = zo(i, a, !0) - 1;
                            if (nn(i[d], a)) return d
                        }
                        return -1
                    }

                    function OC(i) {
                        return i && i.length ? tm(i) : []
                    }

                    function wC(i, a) {
                        return i && i.length ? tm(i, Re(a, 2)) : []
                    }

                    function $C(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Kr(i, 1, a) : []
                    }

                    function CC(i, a, c) {
                        return i && i.length ? (a = c || a === r ? 1 : We(a), Kr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function IC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Kr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function AC(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3), !1, !0) : []
                    }

                    function NC(i, a) {
                        return i && i.length ? Xo(i, Re(a, 3)) : []
                    }
                    var RC = Ve(function(i) {
                            return Yn(Qt(i, 1, Nt, !0))
                        }),
                        PC = Ve(function(i) {
                            var a = Vr(i);
                            return Nt(a) && (a = r), Yn(Qt(i, 1, Nt, !0), Re(a, 2))
                        }),
                        LC = Ve(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, Yn(Qt(i, 1, Nt, !0), r, a)
                        });

                    function kC(i) {
                        return i && i.length ? Yn(i) : []
                    }

                    function DC(i, a) {
                        return i && i.length ? Yn(i, Re(a, 2)) : []
                    }

                    function xC(i, a) {
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
                            return Ar(a, r, d)
                        })
                    }
                    var MC = Ve(function(i, a) {
                            return Nt(i) ? Ea(i, a) : []
                        }),
                        FC = Ve(function(i) {
                            return Du(Wn(i, Nt))
                        }),
                        BC = Ve(function(i) {
                            var a = Vr(i);
                            return Nt(a) && (a = r), Du(Wn(i, Nt), Re(a, 2))
                        }),
                        UC = Ve(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, Du(Wn(i, Nt), r, a)
                        }),
                        GC = Ve(Ju);

                    function jC(i, a) {
                        return sm(i || [], a || [], _a)
                    }

                    function WC(i, a) {
                        return sm(i || [], a || [], Sa)
                    }
                    var HC = Ve(function(i) {
                        var a = i.length,
                            c = a > 1 ? i[a - 1] : r;
                        return c = typeof c == "function" ? (i.pop(), c) : r, Gm(i, c)
                    });

                    function jm(i) {
                        var a = y(i);
                        return a.__chain__ = !0, a
                    }

                    function KC(i, a) {
                        return a(i), i
                    }

                    function sl(i, a) {
                        return a(i)
                    }
                    var VC = Nn(function(i) {
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

                    function qC() {
                        return jm(this)
                    }

                    function YC() {
                        return new Wr(this.value(), this.__chain__)
                    }

                    function zC() {
                        this.__values__ === r && (this.__values__ = rv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function XC() {
                        return this
                    }

                    function JC(i) {
                        for (var a, c = this; c instanceof Ho;) {
                            var d = Dm(c);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            c = c.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function QC() {
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

                    function ZC() {
                        return im(this.__wrapped__, this.__actions__)
                    }
                    var eI = Jo(function(i, a, c) {
                        dt.call(i, c) ? ++i[c] : In(i, c, 1)
                    });

                    function tI(i, a, c) {
                        var d = Ge(i) ? vg : K1;
                        return c && hr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }

                    function rI(i, a) {
                        var c = Ge(i) ? Wn : Gg;
                        return c(i, Re(a, 3))
                    }
                    var nI = gm(xm),
                        iI = gm(Mm);

                    function sI(i, a) {
                        return Qt(al(i, a), 1)
                    }

                    function aI(i, a) {
                        return Qt(al(i, a), be)
                    }

                    function oI(i, a, c) {
                        return c = c === r ? 1 : We(c), Qt(al(i, a), c)
                    }

                    function Wm(i, a) {
                        var c = Ge(i) ? Gr : qn;
                        return c(i, Re(a, 3))
                    }

                    function Hm(i, a) {
                        var c = Ge(i) ? $0 : Ug;
                        return c(i, Re(a, 3))
                    }
                    var lI = Jo(function(i, a, c) {
                        dt.call(i, c) ? i[c].push(a) : In(i, c, [a])
                    });

                    function cI(i, a, c, d) {
                        i = Er(i) ? i : Os(i), c = c && !d ? We(c) : 0;
                        var v = i.length;
                        return c < 0 && (c = Bt(v + c, 0)), fl(i) ? c <= v && i.indexOf(a, c) > -1 : !!v && ds(i, a, c) > -1
                    }
                    var uI = Ve(function(i, a, c) {
                            var d = -1,
                                v = typeof a == "function",
                                E = Er(i) ? Y(i.length) : [];
                            return qn(i, function(I) {
                                E[++d] = v ? Ar(a, I, c) : ba(I, a, c)
                            }), E
                        }),
                        fI = Jo(function(i, a, c) {
                            In(i, c, a)
                        });

                    function al(i, a) {
                        var c = Ge(i) ? wt : qg;
                        return c(i, Re(a, 3))
                    }

                    function dI(i, a, c, d) {
                        return i == null ? [] : (Ge(a) || (a = a == null ? [] : [a]), c = d ? r : c, Ge(c) || (c = c == null ? [] : [c]), Jg(i, a, c))
                    }
                    var hI = Jo(function(i, a, c) {
                        i[c ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function pI(i, a, c) {
                        var d = Ge(i) ? cu : bg,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, qn)
                    }

                    function gI(i, a, c) {
                        var d = Ge(i) ? C0 : bg,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, Ug)
                    }

                    function mI(i, a) {
                        var c = Ge(i) ? Wn : Gg;
                        return c(i, cl(Re(a, 3)))
                    }

                    function vI(i) {
                        var a = Ge(i) ? xg : c$;
                        return a(i)
                    }

                    function yI(i, a, c) {
                        (c ? hr(i, a, c) : a === r) ? a = 1: a = We(a);
                        var d = Ge(i) ? U1 : u$;
                        return d(i, a)
                    }

                    function _I(i) {
                        var a = Ge(i) ? G1 : d$;
                        return a(i)
                    }

                    function EI(i) {
                        if (i == null) return 0;
                        if (Er(i)) return fl(i) ? ps(i) : i.length;
                        var a = ar(i);
                        return a == p || a == re ? i.size : Iu(i).length
                    }

                    function bI(i, a, c) {
                        var d = Ge(i) ? uu : h$;
                        return c && hr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }
                    var TI = Ve(function(i, a) {
                            if (i == null) return [];
                            var c = a.length;
                            return c > 1 && hr(i, a[0], a[1]) ? a = [] : c > 2 && hr(a[0], a[1], a[2]) && (a = [a[0]]), Jg(i, Qt(a, 1), [])
                        }),
                        ol = r1 || function() {
                            return Jt.Date.now()
                        };

                    function SI(i, a) {
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
                            var d = G;
                            if (c.length) {
                                var v = Kn(c, Ts(Qu));
                                d |= j
                            }
                            return An(i, d, a, c, v)
                        }),
                        qm = Ve(function(i, a, c) {
                            var d = G | C;
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
                            var sn = d,
                                kn = v;
                            return d = v = r, ee = Rt, I = i.apply(kn, sn), I
                        }

                        function Pe(Rt) {
                            return ee = Rt, N = $a(qe, a), te ? we(Rt) : I
                        }

                        function Ke(Rt) {
                            var sn = Rt - D,
                                kn = Rt - ee,
                                gv = a - sn;
                            return ae ? sr(gv, E - kn) : gv
                        }

                        function Le(Rt) {
                            var sn = Rt - D,
                                kn = Rt - ee;
                            return D === r || sn >= a || sn < 0 || ae && kn >= E
                        }

                        function qe() {
                            var Rt = ol();
                            if (Le(Rt)) return Xe(Rt);
                            N = $a(qe, Ke(Rt))
                        }

                        function Xe(Rt) {
                            return N = r, me && d ? we(Rt) : (d = v = r, I)
                        }

                        function Lr() {
                            N !== r && am(N), ee = 0, d = D = v = N = r
                        }

                        function pr() {
                            return N === r ? I : Xe(ol())
                        }

                        function kr() {
                            var Rt = ol(),
                                sn = Le(Rt);
                            if (d = arguments, v = this, D = Rt, sn) {
                                if (N === r) return Pe(D);
                                if (ae) return am(N), N = $a(qe, a), we(D)
                            }
                            return N === r && (N = $a(qe, a)), I
                        }
                        return kr.cancel = Lr, kr.flush = pr, kr
                    }
                    var OI = Ve(function(i, a) {
                            return Bg(i, 1, a)
                        }),
                        wI = Ve(function(i, a, c) {
                            return Bg(i, qr(a) || 0, c)
                        });

                    function $I(i) {
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

                    function CI(i) {
                        return Vm(2, i)
                    }
                    var II = p$(function(i, a) {
                            a = a.length == 1 && Ge(a[0]) ? wt(a[0], Nr(Re())) : wt(Qt(a, 1), Nr(Re()));
                            var c = a.length;
                            return Ve(function(d) {
                                for (var v = -1, E = sr(d.length, c); ++v < E;) d[v] = a[v].call(this, d[v]);
                                return Ar(i, this, d)
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
                        AI = Nn(function(i, a) {
                            return An(i, le, r, r, r, a)
                        });

                    function NI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a === r ? a : We(a), Ve(i, a)
                    }

                    function RI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a == null ? 0 : Bt(We(a), 0), Ve(function(c) {
                            var d = c[a],
                                v = Xn(c, 0, a);
                            return d && Hn(v, d), Ar(i, this, v)
                        })
                    }

                    function PI(i, a, c) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new jr(l);
                        return Ct(c) && (d = "leading" in c ? !!c.leading : d, v = "trailing" in c ? !!c.trailing : v), Xm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function LI(i) {
                        return Km(i, 1)
                    }

                    function kI(i, a) {
                        return Zu(Mu(a), i)
                    }

                    function DI() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Ge(i) ? i : [i]
                    }

                    function xI(i) {
                        return Hr(i, $)
                    }

                    function MI(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, $, a)
                    }

                    function FI(i) {
                        return Hr(i, _ | $)
                    }

                    function BI(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, _ | $, a)
                    }

                    function UI(i, a) {
                        return a == null || Fg(i, a, Kt(a))
                    }

                    function nn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var GI = tl(wu),
                        jI = tl(function(i, a) {
                            return i >= a
                        }),
                        ki = Hg(function() {
                            return arguments
                        }()) ? Hg : function(i) {
                            return At(i) && dt.call(i, "callee") && !Ng.call(i, "callee")
                        },
                        Ge = Y.isArray,
                        WI = fg ? Nr(fg) : J1;

                    function Er(i) {
                        return i != null && ul(i.length) && !Pn(i)
                    }

                    function Nt(i) {
                        return At(i) && Er(i)
                    }

                    function HI(i) {
                        return i === !0 || i === !1 || At(i) && dr(i) == Ot
                    }
                    var Jn = i1 || ff,
                        KI = dg ? Nr(dg) : Q1;

                    function VI(i) {
                        return At(i) && i.nodeType === 1 && !Ca(i)
                    }

                    function qI(i) {
                        if (i == null) return !0;
                        if (Er(i) && (Ge(i) || typeof i == "string" || typeof i.splice == "function" || Jn(i) || Ss(i) || ki(i))) return !i.length;
                        var a = ar(i);
                        if (a == p || a == re) return !i.size;
                        if (wa(i)) return !Iu(i).length;
                        for (var c in i)
                            if (dt.call(i, c)) return !1;
                        return !0
                    }

                    function YI(i, a) {
                        return Ta(i, a)
                    }

                    function zI(i, a, c) {
                        c = typeof c == "function" ? c : r;
                        var d = c ? c(i, a) : r;
                        return d === r ? Ta(i, a, r, c) : !!d
                    }

                    function ef(i) {
                        if (!At(i)) return !1;
                        var a = dr(i);
                        return a == Ht || a == kt || typeof i.message == "string" && typeof i.name == "string" && !Ca(i)
                    }

                    function XI(i) {
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
                    var Zm = hg ? Nr(hg) : e$;

                    function JI(i, a) {
                        return i === a || Cu(i, a, Hu(a))
                    }

                    function QI(i, a, c) {
                        return c = typeof c == "function" ? c : r, Cu(i, a, Hu(a), c)
                    }

                    function ZI(i) {
                        return ev(i) && i != +i
                    }

                    function eA(i) {
                        if (M$(i)) throw new Be(o);
                        return Kg(i)
                    }

                    function tA(i) {
                        return i === null
                    }

                    function rA(i) {
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
                        return typeof c == "function" && c instanceof c && Lo.call(c) == Q0
                    }
                    var tf = pg ? Nr(pg) : t$;

                    function nA(i) {
                        return Qm(i) && i >= -ve && i <= ve
                    }
                    var tv = gg ? Nr(gg) : r$;

                    function fl(i) {
                        return typeof i == "string" || !Ge(i) && At(i) && dr(i) == A
                    }

                    function Pr(i) {
                        return typeof i == "symbol" || At(i) && dr(i) == K
                    }
                    var Ss = mg ? Nr(mg) : n$;

                    function iA(i) {
                        return i === r
                    }

                    function sA(i) {
                        return At(i) && ar(i) == pe
                    }

                    function aA(i) {
                        return At(i) && dr(i) == Ne
                    }
                    var oA = tl(Au),
                        lA = tl(function(i, a) {
                            return i <= a
                        });

                    function rv(i) {
                        if (!i) return [];
                        if (Er(i)) return fl(i) ? tn(i) : _r(i);
                        if (pa && i[pa]) return U0(i[pa]());
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
                        if (Pr(i)) return Fe;
                        if (Ct(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Ct(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Tg(i);
                        var c = Ww.test(i);
                        return c || Kw.test(i) ? S0(i.slice(2), c ? 2 : 8) : jw.test(i) ? Fe : +i
                    }

                    function iv(i) {
                        return gn(i, br(i))
                    }

                    function cA(i) {
                        return i ? Ni(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function ct(i) {
                        return i == null ? "" : Rr(i)
                    }
                    var uA = Es(function(i, a) {
                            if (wa(a) || Er(a)) {
                                gn(a, Kt(a), i);
                                return
                            }
                            for (var c in a) dt.call(a, c) && _a(i, c, a[c])
                        }),
                        sv = Es(function(i, a) {
                            gn(a, br(a), i)
                        }),
                        dl = Es(function(i, a, c, d) {
                            gn(a, br(a), i, d)
                        }),
                        fA = Es(function(i, a, c, d) {
                            gn(a, Kt(a), i, d)
                        }),
                        dA = Nn(Tu);

                    function hA(i, a) {
                        var c = _s(i);
                        return a == null ? c : Mg(c, a)
                    }
                    var pA = Ve(function(i, a) {
                            i = pt(i);
                            var c = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && hr(a[0], a[1], v) && (d = 1); ++c < d;)
                                for (var E = a[c], I = br(E), N = -1, D = I.length; ++N < D;) {
                                    var ee = I[N],
                                        te = i[ee];
                                    (te === r || nn(te, ms[ee]) && !dt.call(i, ee)) && (i[ee] = E[ee])
                                }
                            return i
                        }),
                        gA = Ve(function(i) {
                            return i.push(r, Tm), Ar(av, r, i)
                        });

                    function mA(i, a) {
                        return yg(i, Re(a, 3), pn)
                    }

                    function vA(i, a) {
                        return yg(i, Re(a, 3), Ou)
                    }

                    function yA(i, a) {
                        return i == null ? i : Su(i, Re(a, 3), br)
                    }

                    function _A(i, a) {
                        return i == null ? i : jg(i, Re(a, 3), br)
                    }

                    function EA(i, a) {
                        return i && pn(i, Re(a, 3))
                    }

                    function bA(i, a) {
                        return i && Ou(i, Re(a, 3))
                    }

                    function TA(i) {
                        return i == null ? [] : qo(i, Kt(i))
                    }

                    function SA(i) {
                        return i == null ? [] : qo(i, br(i))
                    }

                    function rf(i, a, c) {
                        var d = i == null ? r : Ri(i, a);
                        return d === r ? c : d
                    }

                    function OA(i, a) {
                        return i != null && wm(i, a, q1)
                    }

                    function nf(i, a) {
                        return i != null && wm(i, a, Y1)
                    }
                    var wA = vm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = ko.call(a)), i[a] = c
                        }, af(Tr)),
                        $A = vm(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = ko.call(a)), dt.call(i, a) ? i[a].push(c) : i[a] = [c]
                        }, Re),
                        CA = Ve(ba);

                    function Kt(i) {
                        return Er(i) ? Dg(i) : Iu(i)
                    }

                    function br(i) {
                        return Er(i) ? Dg(i, !0) : i$(i)
                    }

                    function IA(i, a) {
                        var c = {};
                        return a = Re(a, 3), pn(i, function(d, v, E) {
                            In(c, a(d, v, E), d)
                        }), c
                    }

                    function AA(i, a) {
                        var c = {};
                        return a = Re(a, 3), pn(i, function(d, v, E) {
                            In(c, v, a(d, v, E))
                        }), c
                    }
                    var NA = Es(function(i, a, c) {
                            Yo(i, a, c)
                        }),
                        av = Es(function(i, a, c, d) {
                            Yo(i, a, c, d)
                        }),
                        RA = Nn(function(i, a) {
                            var c = {};
                            if (i == null) return c;
                            var d = !1;
                            a = wt(a, function(E) {
                                return E = zn(E, i), d || (d = E.length > 1), E
                            }), gn(i, ju(i), c), d && (c = Hr(c, _ | b | $, w$));
                            for (var v = a.length; v--;) ku(c, a[v]);
                            return c
                        });

                    function PA(i, a) {
                        return ov(i, cl(Re(a)))
                    }
                    var LA = Nn(function(i, a) {
                        return i == null ? {} : a$(i, a)
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

                    function kA(i, a, c) {
                        a = zn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var E = i == null ? r : i[mn(a[d])];
                            E === r && (d = v, E = c), i = Pn(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function DA(i, a, c) {
                        return i == null ? i : Sa(i, a, c)
                    }

                    function xA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Sa(i, a, c, d)
                    }
                    var lv = Em(Kt),
                        cv = Em(br);

                    function MA(i, a, c) {
                        var d = Ge(i),
                            v = d || Jn(i) || Ss(i);
                        if (a = Re(a, 4), c == null) {
                            var E = i && i.constructor;
                            v ? c = d ? new E : [] : Ct(i) ? c = Pn(E) ? _s(Mo(i)) : {} : c = {}
                        }
                        return (v ? Gr : pn)(i, function(I, N, D) {
                            return a(c, I, N, D)
                        }), c
                    }

                    function FA(i, a) {
                        return i == null ? !0 : ku(i, a)
                    }

                    function BA(i, a, c) {
                        return i == null ? i : nm(i, a, Mu(c))
                    }

                    function UA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : nm(i, a, Mu(c), d)
                    }

                    function Os(i) {
                        return i == null ? [] : gu(i, Kt(i))
                    }

                    function GA(i) {
                        return i == null ? [] : gu(i, br(i))
                    }

                    function jA(i, a, c) {
                        return c === r && (c = a, a = r), c !== r && (c = qr(c), c = c === c ? c : 0), a !== r && (a = qr(a), a = a === a ? a : 0), Ni(qr(i), a, c)
                    }

                    function WA(i, a, c) {
                        return a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), i = qr(i), z1(i, a, c)
                    }

                    function HA(i, a, c) {
                        if (c && typeof c != "boolean" && hr(i, a, c) && (a = c = r), c === r && (typeof a == "boolean" ? (c = a, a = r) : typeof i == "boolean" && (c = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Ln(i), a === r ? (a = i, i = 0) : a = Ln(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (c || i % 1 || a % 1) {
                            var v = Lg();
                            return sr(i + v * (a - i + T0("1e-" + ((v + "").length - 1))), a)
                        }
                        return Ru(i, a)
                    }
                    var KA = bs(function(i, a, c) {
                        return a = a.toLowerCase(), i + (c ? uv(a) : a)
                    });

                    function uv(i) {
                        return sf(ct(i).toLowerCase())
                    }

                    function fv(i) {
                        return i = ct(i), i && i.replace(qw, D0).replace(d0, "")
                    }

                    function VA(i, a, c) {
                        i = ct(i), a = Rr(a);
                        var d = i.length;
                        c = c === r ? d : Ni(We(c), 0, d);
                        var v = c;
                        return c -= a.length, c >= 0 && i.slice(c, v) == a
                    }

                    function qA(i) {
                        return i = ct(i), i && Cw.test(i) ? i.replace(jp, x0) : i
                    }

                    function YA(i) {
                        return i = ct(i), i && Lw.test(i) ? i.replace(Zc, "\\$&") : i
                    }
                    var zA = bs(function(i, a, c) {
                            return i + (c ? "-" : "") + a.toLowerCase()
                        }),
                        XA = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toLowerCase()
                        }),
                        JA = pm("toLowerCase");

                    function QA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return el(Go(v), c) + i + el(Uo(v), c)
                    }

                    function ZA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? i + el(a - d, c) : i
                    }

                    function eN(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? el(a - d, c) + i : i
                    }

                    function tN(i, a, c) {
                        return c || a == null ? a = 0 : a && (a = +a), l1(ct(i).replace(eu, ""), a || 0)
                    }

                    function rN(i, a, c) {
                        return (c ? hr(i, a, c) : a === r) ? a = 1 : a = We(a), Pu(ct(i), a)
                    }

                    function nN() {
                        var i = arguments,
                            a = ct(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var iN = bs(function(i, a, c) {
                        return i + (c ? "_" : "") + a.toLowerCase()
                    });

                    function sN(i, a, c) {
                        return c && typeof c != "number" && hr(i, a, c) && (a = c = r), c = c === r ? je : c >>> 0, c ? (i = ct(i), i && (typeof a == "string" || a != null && !tf(a)) && (a = Rr(a), !a && hs(i)) ? Xn(tn(i), 0, c) : i.split(a, c)) : []
                    }
                    var aN = bs(function(i, a, c) {
                        return i + (c ? " " : "") + sf(a)
                    });

                    function oN(i, a, c) {
                        return i = ct(i), c = c == null ? 0 : Ni(We(c), 0, i.length), a = Rr(a), i.slice(c, c + a.length) == a
                    }

                    function lN(i, a, c) {
                        var d = y.templateSettings;
                        c && hr(i, a, c) && (a = r), i = ct(i), a = dl({}, a, d, bm);
                        var v = dl({}, a.imports, d.imports, bm),
                            E = Kt(v),
                            I = gu(v, E),
                            N, D, ee = 0,
                            te = a.interpolate || wo,
                            ae = "__p += '",
                            me = vu((a.escape || wo).source + "|" + te.source + "|" + (te === Wp ? Gw : wo).source + "|" + (a.evaluate || wo).source + "|$", "g"),
                            we = "//# sourceURL=" + (dt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++v0 + "]") + `
`;
                        i.replace(me, function(Le, qe, Xe, Lr, pr, kr) {
                            return Xe || (Xe = Lr), ae += i.slice(ee, kr).replace(Yw, M0), qe && (N = !0, ae += `' +
__e(` + qe + `) +
'`), pr && (D = !0, ae += `';
` + pr + `;
__p += '`), Xe && (ae += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), ee = kr + Le.length, Le
                        }), ae += `';
`;
                        var Pe = dt.call(a, "variable") && a.variable;
                        if (!Pe) ae = `with (obj) {
` + ae + `
}
`;
                        else if (Bw.test(Pe)) throw new Be(u);
                        ae = (D ? ae.replace(ir, "") : ae).replace(Me, "$1").replace(da, "$1;"), ae = "function(" + (Pe || "obj") + `) {
` + (Pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var Ke = hv(function() {
                            return st(E, we + "return " + ae).apply(r, I)
                        });
                        if (Ke.source = ae, ef(Ke)) throw Ke;
                        return Ke
                    }

                    function cN(i) {
                        return ct(i).toLowerCase()
                    }

                    function uN(i) {
                        return ct(i).toUpperCase()
                    }

                    function fN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return Tg(i);
                        if (!i || !(a = Rr(a))) return i;
                        var d = tn(i),
                            v = tn(a),
                            E = Sg(d, v),
                            I = Og(d, v) + 1;
                        return Xn(d, E, I).join("")
                    }

                    function dN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.slice(0, $g(i) + 1);
                        if (!i || !(a = Rr(a))) return i;
                        var d = tn(i),
                            v = Og(d, tn(a)) + 1;
                        return Xn(d, 0, v).join("")
                    }

                    function hN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.replace(eu, "");
                        if (!i || !(a = Rr(a))) return i;
                        var d = tn(i),
                            v = Sg(d, tn(a));
                        return Xn(d, v).join("")
                    }

                    function pN(i, a) {
                        var c = Ae,
                            d = Ce;
                        if (Ct(a)) {
                            var v = "separator" in a ? a.separator : v;
                            c = "length" in a ? We(a.length) : c, d = "omission" in a ? Rr(a.omission) : d
                        }
                        i = ct(i);
                        var E = i.length;
                        if (hs(i)) {
                            var I = tn(i);
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
                        } else if (i.indexOf(Rr(v), N) != N) {
                            var me = D.lastIndexOf(v);
                            me > -1 && (D = D.slice(0, me))
                        }
                        return D + d
                    }

                    function gN(i) {
                        return i = ct(i), i && $w.test(i) ? i.replace(Gp, H0) : i
                    }
                    var mN = bs(function(i, a, c) {
                            return i + (c ? " " : "") + a.toUpperCase()
                        }),
                        sf = pm("toUpperCase");

                    function dv(i, a, c) {
                        return i = ct(i), a = c ? r : a, a === r ? B0(i) ? q0(i) : N0(i) : i.match(a) || []
                    }
                    var hv = Ve(function(i, a) {
                            try {
                                return Ar(i, r, a)
                            } catch (c) {
                                return ef(c) ? c : new Be(c)
                            }
                        }),
                        vN = Nn(function(i, a) {
                            return Gr(a, function(c) {
                                c = mn(c), In(i, c, Qu(i[c], i))
                            }), i
                        });

                    function yN(i) {
                        var a = i == null ? 0 : i.length,
                            c = Re();
                        return i = a ? wt(i, function(d) {
                            if (typeof d[1] != "function") throw new jr(l);
                            return [c(d[0]), d[1]]
                        }) : [], Ve(function(d) {
                            for (var v = -1; ++v < a;) {
                                var E = i[v];
                                if (Ar(E[0], this, d)) return Ar(E[1], this, d)
                            }
                        })
                    }

                    function _N(i) {
                        return H1(Hr(i, _))
                    }

                    function af(i) {
                        return function() {
                            return i
                        }
                    }

                    function EN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var bN = mm(),
                        TN = mm(!0);

                    function Tr(i) {
                        return i
                    }

                    function of(i) {
                        return Vg(typeof i == "function" ? i : Hr(i, _))
                    }

                    function SN(i) {
                        return Yg(Hr(i, _))
                    }

                    function ON(i, a) {
                        return zg(i, Hr(a, _))
                    }
                    var wN = Ve(function(i, a) {
                            return function(c) {
                                return ba(c, i, a)
                            }
                        }),
                        $N = Ve(function(i, a) {
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
                                        ae = te.__actions__ = _r(this.__actions__);
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

                    function CN() {
                        return Jt._ === this && (Jt._ = Z0), this
                    }

                    function cf() {}

                    function IN(i) {
                        return i = We(i), Ve(function(a) {
                            return Xg(a, i)
                        })
                    }
                    var AN = Bu(wt),
                        NN = Bu(vg),
                        RN = Bu(uu);

                    function pv(i) {
                        return Vu(i) ? fu(mn(i)) : o$(i)
                    }

                    function PN(i) {
                        return function(a) {
                            return i == null ? r : Ri(i, a)
                        }
                    }
                    var LN = ym(),
                        kN = ym(!0);

                    function uf() {
                        return []
                    }

                    function ff() {
                        return !1
                    }

                    function DN() {
                        return {}
                    }

                    function xN() {
                        return ""
                    }

                    function MN() {
                        return !0
                    }

                    function FN(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var c = je,
                            d = sr(i, je);
                        a = Re(a), i -= je;
                        for (var v = pu(d, a); ++c < i;) a(c);
                        return v
                    }

                    function BN(i) {
                        return Ge(i) ? wt(i, mn) : Pr(i) ? [i] : _r(km(ct(i)))
                    }

                    function UN(i) {
                        var a = ++J0;
                        return ct(i) + a
                    }
                    var GN = Zo(function(i, a) {
                            return i + a
                        }, 0),
                        jN = Uu("ceil"),
                        WN = Zo(function(i, a) {
                            return i / a
                        }, 1),
                        HN = Uu("floor");

                    function KN(i) {
                        return i && i.length ? Vo(i, Tr, wu) : r
                    }

                    function VN(i, a) {
                        return i && i.length ? Vo(i, Re(a, 2), wu) : r
                    }

                    function qN(i) {
                        return Eg(i, Tr)
                    }

                    function YN(i, a) {
                        return Eg(i, Re(a, 2))
                    }

                    function zN(i) {
                        return i && i.length ? Vo(i, Tr, Au) : r
                    }

                    function XN(i, a) {
                        return i && i.length ? Vo(i, Re(a, 2), Au) : r
                    }
                    var JN = Zo(function(i, a) {
                            return i * a
                        }, 1),
                        QN = Uu("round"),
                        ZN = Zo(function(i, a) {
                            return i - a
                        }, 0);

                    function eR(i) {
                        return i && i.length ? hu(i, Tr) : 0
                    }

                    function tR(i, a) {
                        return i && i.length ? hu(i, Re(a, 2)) : 0
                    }
                    return y.after = SI, y.ary = Km, y.assign = uA, y.assignIn = sv, y.assignInWith = dl, y.assignWith = fA, y.at = dA, y.before = Vm, y.bind = Qu, y.bindAll = vN, y.bindKey = qm, y.castArray = DI, y.chain = jm, y.chunk = H$, y.compact = K$, y.concat = V$, y.cond = yN, y.conforms = _N, y.constant = af, y.countBy = eI, y.create = hA, y.curry = Ym, y.curryRight = zm, y.debounce = Xm, y.defaults = pA, y.defaultsDeep = gA, y.defer = OI, y.delay = wI, y.difference = q$, y.differenceBy = Y$, y.differenceWith = z$, y.drop = X$, y.dropRight = J$, y.dropRightWhile = Q$, y.dropWhile = Z$, y.fill = eC, y.filter = rI, y.flatMap = sI, y.flatMapDeep = aI, y.flatMapDepth = oI, y.flatten = Fm, y.flattenDeep = tC, y.flattenDepth = rC, y.flip = $I, y.flow = bN, y.flowRight = TN, y.fromPairs = nC, y.functions = TA, y.functionsIn = SA, y.groupBy = lI, y.initial = sC, y.intersection = aC, y.intersectionBy = oC, y.intersectionWith = lC, y.invert = wA, y.invertBy = $A, y.invokeMap = uI, y.iteratee = of, y.keyBy = fI, y.keys = Kt, y.keysIn = br, y.map = al, y.mapKeys = IA, y.mapValues = AA, y.matches = SN, y.matchesProperty = ON, y.memoize = ll, y.merge = NA, y.mergeWith = av, y.method = wN, y.methodOf = $N, y.mixin = lf, y.negate = cl, y.nthArg = IN, y.omit = RA, y.omitBy = PA, y.once = CI, y.orderBy = dI, y.over = AN, y.overArgs = II, y.overEvery = NN, y.overSome = RN, y.partial = Zu, y.partialRight = Jm, y.partition = hI, y.pick = LA, y.pickBy = ov, y.property = pv, y.propertyOf = PN, y.pull = dC, y.pullAll = Um, y.pullAllBy = hC, y.pullAllWith = pC, y.pullAt = gC, y.range = LN, y.rangeRight = kN, y.rearg = AI, y.reject = mI, y.remove = mC, y.rest = NI, y.reverse = Xu, y.sampleSize = yI, y.set = DA, y.setWith = xA, y.shuffle = _I, y.slice = vC, y.sortBy = TI, y.sortedUniq = OC, y.sortedUniqBy = wC, y.split = sN, y.spread = RI, y.tail = $C, y.take = CC, y.takeRight = IC, y.takeRightWhile = AC, y.takeWhile = NC, y.tap = KC, y.throttle = PI, y.thru = sl, y.toArray = rv, y.toPairs = lv, y.toPairsIn = cv, y.toPath = BN, y.toPlainObject = iv, y.transform = MA, y.unary = LI, y.union = RC, y.unionBy = PC, y.unionWith = LC, y.uniq = kC, y.uniqBy = DC, y.uniqWith = xC, y.unset = FA, y.unzip = Ju, y.unzipWith = Gm, y.update = BA, y.updateWith = UA, y.values = Os, y.valuesIn = GA, y.without = MC, y.words = dv, y.wrap = kI, y.xor = FC, y.xorBy = BC, y.xorWith = UC, y.zip = GC, y.zipObject = jC, y.zipObjectDeep = WC, y.zipWith = HC, y.entries = lv, y.entriesIn = cv, y.extend = sv, y.extendWith = dl, lf(y, y), y.add = GN, y.attempt = hv, y.camelCase = KA, y.capitalize = uv, y.ceil = jN, y.clamp = jA, y.clone = xI, y.cloneDeep = FI, y.cloneDeepWith = BI, y.cloneWith = MI, y.conformsTo = UI, y.deburr = fv, y.defaultTo = EN, y.divide = WN, y.endsWith = VA, y.eq = nn, y.escape = qA, y.escapeRegExp = YA, y.every = tI, y.find = nI, y.findIndex = xm, y.findKey = mA, y.findLast = iI, y.findLastIndex = Mm, y.findLastKey = vA, y.floor = HN, y.forEach = Wm, y.forEachRight = Hm, y.forIn = yA, y.forInRight = _A, y.forOwn = EA, y.forOwnRight = bA, y.get = rf, y.gt = GI, y.gte = jI, y.has = OA, y.hasIn = nf, y.head = Bm, y.identity = Tr, y.includes = cI, y.indexOf = iC, y.inRange = WA, y.invoke = CA, y.isArguments = ki, y.isArray = Ge, y.isArrayBuffer = WI, y.isArrayLike = Er, y.isArrayLikeObject = Nt, y.isBoolean = HI, y.isBuffer = Jn, y.isDate = KI, y.isElement = VI, y.isEmpty = qI, y.isEqual = YI, y.isEqualWith = zI, y.isError = ef, y.isFinite = XI, y.isFunction = Pn, y.isInteger = Qm, y.isLength = ul, y.isMap = Zm, y.isMatch = JI, y.isMatchWith = QI, y.isNaN = ZI, y.isNative = eA, y.isNil = rA, y.isNull = tA, y.isNumber = ev, y.isObject = Ct, y.isObjectLike = At, y.isPlainObject = Ca, y.isRegExp = tf, y.isSafeInteger = nA, y.isSet = tv, y.isString = fl, y.isSymbol = Pr, y.isTypedArray = Ss, y.isUndefined = iA, y.isWeakMap = sA, y.isWeakSet = aA, y.join = cC, y.kebabCase = zA, y.last = Vr, y.lastIndexOf = uC, y.lowerCase = XA, y.lowerFirst = JA, y.lt = oA, y.lte = lA, y.max = KN, y.maxBy = VN, y.mean = qN, y.meanBy = YN, y.min = zN, y.minBy = XN, y.stubArray = uf, y.stubFalse = ff, y.stubObject = DN, y.stubString = xN, y.stubTrue = MN, y.multiply = JN, y.nth = fC, y.noConflict = CN, y.noop = cf, y.now = ol, y.pad = QA, y.padEnd = ZA, y.padStart = eN, y.parseInt = tN, y.random = HA, y.reduce = pI, y.reduceRight = gI, y.repeat = rN, y.replace = nN, y.result = kA, y.round = QN, y.runInContext = k, y.sample = vI, y.size = EI, y.snakeCase = iN, y.some = bI, y.sortedIndex = yC, y.sortedIndexBy = _C, y.sortedIndexOf = EC, y.sortedLastIndex = bC, y.sortedLastIndexBy = TC, y.sortedLastIndexOf = SC, y.startCase = aN, y.startsWith = oN, y.subtract = ZN, y.sum = eR, y.sumBy = tR, y.template = lN, y.times = FN, y.toFinite = Ln, y.toInteger = We, y.toLength = nv, y.toLower = cN, y.toNumber = qr, y.toSafeInteger = cA, y.toString = ct, y.toUpper = uN, y.trim = fN, y.trimEnd = dN, y.trimStart = hN, y.truncate = pN, y.unescape = gN, y.uniqueId = UN, y.upperCase = mN, y.upperFirst = sf, y.each = Wm, y.eachRight = Hm, y.first = Bm, lf(y, function() {
                        var i = {};
                        return pn(y, function(a, c) {
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
                        return this.filter(Tr)
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
                    }, pn(Ye.prototype, function(i, a) {
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
                    }), pn(Ye.prototype, function(i, a) {
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
                    }], Ye.prototype.clone = g1, Ye.prototype.reverse = m1, Ye.prototype.value = v1, y.prototype.at = VC, y.prototype.chain = qC, y.prototype.commit = YC, y.prototype.next = zC, y.prototype.plant = JC, y.prototype.reverse = QC, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = ZC, y.prototype.first = y.prototype.head, pa && (y.prototype[pa] = XC), y
                },
                gs = Y0();
            $i ? (($i.exports = gs)._ = gs, au._ = gs) : Jt._ = gs
        }).call(Lt)
    })(ec, ec.exports);
    const qW = tt({
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
                    const r = new E3(e, t);
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
        YW = {
            class: "draw"
        },
        zW = {
            ref: "content",
            class: "content"
        },
        XW = {
            class: "constrain"
        },
        JW = {
            key: 0
        };

    function QW(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", YW, [H("div", zW, [H("div", XW, [e.player.prompt ? Ie((U(), V("div", JW, null, 512)), [
            [l, e.player.prompt]
        ]) : Ee("", !0), H("div", {
            ref: "stage",
            class: "stage",
            style: ao(e.stageDimensions)
        }, null, 4), H("button", {
            onClick: t[0] || (t[0] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, et(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const ZW = it(qW, [
            ["render", QW]
        ]),
        eH = tt({
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
        tH = ["textContent"],
        rH = ["textContent"],
        nH = ["textContent"],
        iH = ["textContent"];

    function sH(e, t, r, n, s, o) {
        const l = xt("t");
        return U(), V("div", {
            class: De(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (U(), V("p", {
            key: 0,
            class: De(e.localClasses.message),
            textContent: et(e.joinedCountText)
        }, null, 10, tH)) : Ee("", !0), e.player.hasControls ? (U(), V(ze, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (U(), V("p", {
            key: 0,
            class: De(e.localClasses.status)
        }, et(e.neededText), 3)) : Ee("", !0), e.player.status === "canStart" ? (U(), V("button", {
            key: 1,
            class: De(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: et(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, rH)) : Ee("", !0), e.player.status === "countdown" ? (U(), V("button", {
            key: 2,
            class: De(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: et(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, nH)) : Ee("", !0)], 64)) : e.player.gamepadStart ? (U(), V(ze, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (U(), V("p", {
            key: 0,
            class: De(e.localClasses.status)
        }, et(e.neededText), 3)) : Ee("", !0), e.player.status === "canStart" ? Ie((U(), V("p", {
            key: 1,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Ee("", !0), e.player.status === "countdown" ? Ie((U(), V("p", {
            key: 2,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Ee("", !0)], 64)) : (U(), V(ze, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (U(), V("p", {
            key: 0,
            class: De(e.localClasses.status)
        }, et(e.neededText), 3)) : Ee("", !0), e.player.status === "canStart" ? (U(), V("p", {
            key: 1,
            class: De(e.localClasses.status)
        }, et(e.waitingForVIPText), 3)) : Ee("", !0), e.player.status === "countdown" ? Ie((U(), V("p", {
            key: 2,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : Ee("", !0)], 64)), e.messageLocation === "bottom" ? (U(), V("p", {
            key: 4,
            class: De(e.localClasses.message),
            textContent: et(e.joinedCountText)
        }, null, 10, iH)) : Ee("", !0)], 2)
    }
    const wS = it(eH, [
            ["render", sH]
        ]),
        aH = tt({
            components: {
                LobbyActions: wS
            },
            props: {
                player: Object
            }
        }),
        oH = {
            class: "lobby"
        },
        lH = {
            class: "constrain"
        };

    function cH(e, t, r, n, s, o) {
        const l = vr("LobbyActions");
        return U(), V("div", oH, [H("div", lH, [St(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const uH = it(aH, [
            ["render", cH]
        ]),
        fH = tt({
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

    function dH(e, t, r, n, s, o) {
        const l = xt("t");
        return e.player && e.player.status ? (U(), V("div", {
            key: 0,
            class: De(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ie((U(), V("p", {
            key: 0,
            class: De(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Ee("", !0), e.player.hasControls ? (U(), V(ze, {
            key: 1
        }, [e.player.status === "waiting" ? Ie((U(), V("button", {
            key: 0,
            class: De(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Ee("", !0), e.player.status === "waiting" ? Ie((U(), V("button", {
            key: 1,
            class: De(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Ee("", !0), e.player.status === "countdown" ? Ie((U(), V("button", {
            key: 2,
            class: De(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : Ee("", !0)], 64)) : e.player.gamepadStart ? Ie((U(), V("p", {
            key: 2,
            class: De(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (U(), V("p", {
            key: 3,
            class: De(e.localClasses.status)
        }, et(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ie((U(), V("p", {
            key: 4,
            class: De(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : Ee("", !0)], 2)) : Ee("", !0)
    }
    const $S = it(fH, [
            ["render", dH]
        ]),
        hH = tt({
            components: {
                PostGameActions: $S
            },
            props: {
                player: Object
            }
        }),
        pH = {
            class: "post-game"
        },
        gH = {
            class: "constrain"
        };

    function mH(e, t, r, n, s, o) {
        const l = vr("PostGameActions");
        return U(), V("div", pH, [H("div", gH, [St(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const vH = it(hH, [
            ["render", mH]
        ]),
        yH = tt({
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
        }),
        _H = ["value"];

    function EH(e, t, r, n, s, o) {
        return U(), V("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l))
        }, null, 40, _H)
    }
    const bH = it(yH, [
        ["render", EH]
    ]);
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
        CS = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        CS = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function TH(e) {
        var t = ja.get(e);
        t && t.destroy()
    }

    function SH(e) {
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
                                for (var G = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && G.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return G
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
                        var G = CS("autosize:resized");
                        try {
                            n.dispatchEvent(G)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], TH), e
    }, Da.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], SH), e
    });
    var OH = Da,
        wH = {
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
        $H = Br,
        Ei = !$H(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        CH = Br,
        ap = !CH(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        IH = ap,
        Sl = Function.prototype.call,
        bi = IH ? Sl.bind(Sl) : function() {
            return Sl.apply(Sl, arguments)
        },
        IS = {},
        AS = {}.propertyIsEnumerable,
        NS = Object.getOwnPropertyDescriptor,
        AH = NS && !AS.call({
            1: 2
        }, 1);
    IS.f = AH ? function(t) {
        var r = NS(this, t);
        return !!r && r.enumerable
    } : AS;
    var RS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        PS = ap,
        LS = Function.prototype,
        NH = LS.bind,
        Rd = LS.call,
        RH = PS && NH.bind(Rd, Rd),
        fr = PS ? function(e) {
            return e && RH(e)
        } : function(e) {
            return e && function() {
                return Rd.apply(e, arguments)
            }
        },
        kS = fr,
        PH = kS({}.toString),
        LH = kS("".slice),
        Lc = function(e) {
            return LH(PH(e), 8, -1)
        },
        kH = fr,
        DH = Br,
        xH = Lc,
        Rf = Object,
        MH = kH("".split),
        FH = DH(function() {
            return !Rf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return xH(e) == "String" ? MH(e, "") : Rf(e)
        } : Rf,
        BH = TypeError,
        vo = function(e) {
            if (e == null) throw BH("Can't call method on " + e);
            return e
        },
        UH = FH,
        GH = vo,
        kc = function(e) {
            return UH(GH(e))
        },
        Cr = function(e) {
            return typeof e == "function"
        },
        jH = Cr,
        ca = function(e) {
            return typeof e == "object" ? e !== null : jH(e)
        },
        Pf = Fr,
        WH = Cr,
        HH = function(e) {
            return WH(e) ? e : void 0
        },
        Dc = function(e, t) {
            return arguments.length < 2 ? HH(Pf[e]) : Pf[e] && Pf[e][t]
        },
        KH = fr,
        DS = KH({}.isPrototypeOf),
        VH = Dc,
        qH = VH("navigator", "userAgent") || "",
        xS = Fr,
        Lf = qH,
        Wy = xS.process,
        Hy = xS.Deno,
        Ky = Wy && Wy.versions || Hy && Hy.version,
        Vy = Ky && Ky.v8,
        an, tc;
    Vy && (an = Vy.split("."), tc = an[0] > 0 && an[0] < 4 ? 1 : +(an[0] + an[1]));
    !tc && Lf && (an = Lf.match(/Edge\/(\d+)/), (!an || an[1] >= 74) && (an = Lf.match(/Chrome\/(\d+)/), an && (tc = +an[1])));
    var YH = tc,
        qy = YH,
        zH = Br,
        MS = !!Object.getOwnPropertySymbols && !zH(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && qy && qy < 41
        }),
        XH = MS,
        FS = XH && !Symbol.sham && typeof Symbol.iterator == "symbol",
        JH = Dc,
        QH = Cr,
        ZH = DS,
        eK = FS,
        tK = Object,
        BS = eK ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = JH("Symbol");
            return QH(t) && ZH(t.prototype, tK(e))
        },
        rK = String,
        nK = function(e) {
            try {
                return rK(e)
            } catch {
                return "Object"
            }
        },
        iK = Cr,
        sK = nK,
        aK = TypeError,
        oK = function(e) {
            if (iK(e)) return e;
            throw aK(sK(e) + " is not a function")
        },
        lK = oK,
        op = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : lK(r)
        },
        kf = bi,
        Df = Cr,
        xf = ca,
        cK = TypeError,
        uK = function(e, t) {
            var r, n;
            if (t === "string" && Df(r = e.toString) && !xf(n = kf(r, e)) || Df(r = e.valueOf) && !xf(n = kf(r, e)) || t !== "string" && Df(r = e.toString) && !xf(n = kf(r, e))) return n;
            throw cK("Can't convert object to primitive value")
        },
        xc = {
            exports: {}
        },
        Yy = Fr,
        fK = Object.defineProperty,
        lp = function(e, t) {
            try {
                fK(Yy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Yy[e] = t
            }
            return t
        },
        dK = Fr,
        hK = lp,
        zy = "__core-js_shared__",
        pK = dK[zy] || hK(zy, {}),
        cp = pK,
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
    var gK = vo,
        mK = Object,
        US = function(e) {
            return mK(gK(e))
        },
        vK = fr,
        yK = US,
        _K = vK({}.hasOwnProperty),
        Ti = Object.hasOwn || function(t, r) {
            return _K(yK(t), r)
        },
        EK = fr,
        bK = 0,
        TK = Math.random(),
        SK = EK(1 .toString),
        GS = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + SK(++bK + TK, 36)
        },
        OK = Fr,
        wK = xc.exports,
        Jy = Ti,
        $K = GS,
        Qy = MS,
        jS = FS,
        $s = wK("wks"),
        ns = OK.Symbol,
        Zy = ns && ns.for,
        CK = jS ? ns : ns && ns.withoutSetter || $K,
        cs = function(e) {
            if (!Jy($s, e) || !(Qy || typeof $s[e] == "string")) {
                var t = "Symbol." + e;
                Qy && Jy(ns, e) ? $s[e] = ns[e] : jS && Zy ? $s[e] = Zy(t) : $s[e] = CK(t)
            }
            return $s[e]
        },
        IK = bi,
        e_ = ca,
        t_ = BS,
        AK = op,
        NK = uK,
        RK = cs,
        PK = TypeError,
        LK = RK("toPrimitive"),
        kK = function(e, t) {
            if (!e_(e) || t_(e)) return e;
            var r = AK(e, LK),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = IK(r, e, t), !e_(n) || t_(n)) return n;
                throw PK("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), NK(e, t)
        },
        DK = kK,
        xK = BS,
        WS = function(e) {
            var t = DK(e, "string");
            return xK(t) ? t : t + ""
        },
        MK = Fr,
        r_ = ca,
        Pd = MK.document,
        FK = r_(Pd) && r_(Pd.createElement),
        HS = function(e) {
            return FK ? Pd.createElement(e) : {}
        },
        BK = Ei,
        UK = Br,
        GK = HS,
        KS = !BK && !UK(function() {
            return Object.defineProperty(GK("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        jK = Ei,
        WK = bi,
        HK = IS,
        KK = RS,
        VK = kc,
        qK = WS,
        YK = Ti,
        zK = KS,
        n_ = Object.getOwnPropertyDescriptor;
    sp.f = jK ? n_ : function(t, r) {
        if (t = VK(t), r = qK(r), zK) try {
            return n_(t, r)
        } catch {}
        if (YK(t, r)) return KK(!WK(HK.f, t, r), t[r])
    };
    var yo = {},
        XK = Ei,
        JK = Br,
        VS = XK && JK(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        QK = ca,
        ZK = String,
        e8 = TypeError,
        us = function(e) {
            if (QK(e)) return e;
            throw e8(ZK(e) + " is not an object")
        },
        t8 = Ei,
        r8 = KS,
        n8 = VS,
        Ol = us,
        i_ = WS,
        i8 = TypeError,
        Mf = Object.defineProperty,
        s8 = Object.getOwnPropertyDescriptor,
        Ff = "enumerable",
        Bf = "configurable",
        Uf = "writable";
    yo.f = t8 ? n8 ? function(t, r, n) {
        if (Ol(t), r = i_(r), Ol(n), typeof t == "function" && r === "prototype" && "value" in n && Uf in n && !n[Uf]) {
            var s = s8(t, r);
            s && s[Uf] && (t[r] = n.value, n = {
                configurable: Bf in n ? n[Bf] : s[Bf],
                enumerable: Ff in n ? n[Ff] : s[Ff],
                writable: !1
            })
        }
        return Mf(t, r, n)
    } : Mf : function(t, r, n) {
        if (Ol(t), r = i_(r), Ol(n), r8) try {
            return Mf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw i8("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var a8 = Ei,
        o8 = yo,
        l8 = RS,
        up = a8 ? function(e, t, r) {
            return o8.f(e, t, l8(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        qS = {
            exports: {}
        },
        Ld = Ei,
        c8 = Ti,
        YS = Function.prototype,
        u8 = Ld && Object.getOwnPropertyDescriptor,
        fp = c8(YS, "name"),
        f8 = fp && function() {}.name === "something",
        d8 = fp && (!Ld || Ld && u8(YS, "name").configurable),
        h8 = {
            EXISTS: fp,
            PROPER: f8,
            CONFIGURABLE: d8
        },
        p8 = fr,
        g8 = Cr,
        kd = cp,
        m8 = p8(Function.toString);
    g8(kd.inspectSource) || (kd.inspectSource = function(e) {
        return m8(e)
    });
    var zS = kd.inspectSource,
        v8 = Fr,
        y8 = Cr,
        _8 = zS,
        s_ = v8.WeakMap,
        E8 = y8(s_) && /native code/.test(_8(s_)),
        b8 = xc.exports,
        T8 = GS,
        a_ = b8("keys"),
        XS = function(e) {
            return a_[e] || (a_[e] = T8(e))
        },
        dp = {},
        S8 = E8,
        JS = Fr,
        Gf = fr,
        O8 = ca,
        w8 = up,
        jf = Ti,
        Wf = cp,
        $8 = XS,
        C8 = dp,
        o_ = "Object already initialized",
        Dd = JS.TypeError,
        I8 = JS.WeakMap,
        rc, ro, nc, A8 = function(e) {
            return nc(e) ? ro(e) : rc(e, {})
        },
        N8 = function(e) {
            return function(t) {
                var r;
                if (!O8(t) || (r = ro(t)).type !== e) throw Dd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (S8 || Wf.state) {
        var Ui = Wf.state || (Wf.state = new I8),
            R8 = Gf(Ui.get),
            l_ = Gf(Ui.has),
            P8 = Gf(Ui.set);
        rc = function(e, t) {
            if (l_(Ui, e)) throw new Dd(o_);
            return t.facade = e, P8(Ui, e, t), t
        }, ro = function(e) {
            return R8(Ui, e) || {}
        }, nc = function(e) {
            return l_(Ui, e)
        }
    } else {
        var Cs = $8("state");
        C8[Cs] = !0, rc = function(e, t) {
            if (jf(e, Cs)) throw new Dd(o_);
            return t.facade = e, w8(e, Cs, t), t
        }, ro = function(e) {
            return jf(e, Cs) ? e[Cs] : {}
        }, nc = function(e) {
            return jf(e, Cs)
        }
    }
    var QS = {
            set: rc,
            get: ro,
            has: nc,
            enforce: A8,
            getterFor: N8
        },
        L8 = Br,
        k8 = Cr,
        wl = Ti,
        xd = Ei,
        D8 = h8.CONFIGURABLE,
        x8 = zS,
        ZS = QS,
        M8 = ZS.enforce,
        F8 = ZS.get,
        xl = Object.defineProperty,
        B8 = xd && !L8(function() {
            return xl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        U8 = String(String).split("String"),
        G8 = qS.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!wl(e, "name") || D8 && e.name !== t) && (xd ? xl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), B8 && r && wl(r, "arity") && e.length !== r.arity && xl(e, "length", {
                value: r.arity
            });
            try {
                r && wl(r, "constructor") && r.constructor ? xd && xl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = M8(e);
            return wl(n, "source") || (n.source = U8.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = G8(function() {
        return k8(this) && F8(this).source || x8(this)
    }, "toString");
    var j8 = Cr,
        W8 = yo,
        H8 = qS.exports,
        K8 = lp,
        eO = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (j8(r) && H8(r, o, n), n.global) s ? e[t] = r : K8(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : W8.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        tO = {},
        V8 = Math.ceil,
        q8 = Math.floor,
        Y8 = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? q8 : V8)(r)
        },
        z8 = Y8,
        Mc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : z8(t)
        },
        X8 = Mc,
        J8 = Math.max,
        Q8 = Math.min,
        Z8 = function(e, t) {
            var r = X8(e);
            return r < 0 ? J8(r + t, 0) : Q8(r, t)
        },
        eV = Mc,
        tV = Math.min,
        rO = function(e) {
            return e > 0 ? tV(eV(e), 9007199254740991) : 0
        },
        rV = rO,
        nV = function(e) {
            return rV(e.length)
        },
        iV = kc,
        sV = Z8,
        aV = nV,
        c_ = function(e) {
            return function(t, r, n) {
                var s = iV(t),
                    o = aV(s),
                    l = sV(n, o),
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
        oV = {
            includes: c_(!0),
            indexOf: c_(!1)
        },
        lV = fr,
        Hf = Ti,
        cV = kc,
        uV = oV.indexOf,
        fV = dp,
        u_ = lV([].push),
        nO = function(e, t) {
            var r = cV(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Hf(fV, o) && Hf(r, o) && u_(s, o);
            for (; t.length > n;) Hf(r, o = t[n++]) && (~uV(s, o) || u_(s, o));
            return s
        },
        hp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        dV = nO,
        hV = hp,
        pV = hV.concat("length", "prototype");
    tO.f = Object.getOwnPropertyNames || function(t) {
        return dV(t, pV)
    };
    var iO = {};
    iO.f = Object.getOwnPropertySymbols;
    var gV = Dc,
        mV = fr,
        vV = tO,
        yV = iO,
        _V = us,
        EV = mV([].concat),
        bV = gV("Reflect", "ownKeys") || function(t) {
            var r = vV.f(_V(t)),
                n = yV.f;
            return n ? EV(r, n(t)) : r
        },
        f_ = Ti,
        TV = bV,
        SV = sp,
        OV = yo,
        wV = function(e, t, r) {
            for (var n = TV(t), s = OV.f, o = SV.f, l = 0; l < n.length; l++) {
                var u = n[l];
                !f_(e, u) && !(r && f_(r, u)) && s(e, u, o(t, u))
            }
        },
        $V = Br,
        CV = Cr,
        IV = /#|\.prototype\./,
        _o = function(e, t) {
            var r = NV[AV(e)];
            return r == PV ? !0 : r == RV ? !1 : CV(t) ? $V(t) : !!t
        },
        AV = _o.normalize = function(e) {
            return String(e).replace(IV, ".").toLowerCase()
        },
        NV = _o.data = {},
        RV = _o.NATIVE = "N",
        PV = _o.POLYFILL = "P",
        LV = _o,
        Kf = Fr,
        kV = sp.f,
        DV = up,
        xV = eO,
        MV = lp,
        FV = wV,
        BV = LV,
        sO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, l, u, f, h, g;
            if (n ? l = Kf : s ? l = Kf[r] || MV(r, {}) : l = (Kf[r] || {}).prototype, l)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = kV(l, u), f = g && g.value) : f = l[u], o = BV(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        FV(h, f)
                    }(e.sham || f && f.sham) && DV(h, "sham", !0), xV(l, u, h, e)
                }
        },
        UV = ca,
        GV = Lc,
        jV = cs,
        WV = jV("match"),
        HV = function(e) {
            var t;
            return UV(e) && ((t = e[WV]) !== void 0 ? !!t : GV(e) == "RegExp")
        },
        KV = cs,
        VV = KV("toStringTag"),
        aO = {};
    aO[VV] = "z";
    var qV = String(aO) === "[object z]",
        YV = qV,
        zV = Cr,
        Ml = Lc,
        XV = cs,
        JV = XV("toStringTag"),
        QV = Object,
        ZV = Ml(function() {
            return arguments
        }()) == "Arguments",
        e4 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        t4 = YV ? Ml : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = e4(t = QV(e), JV)) == "string" ? r : ZV ? Ml(t) : (n = Ml(t)) == "Object" && zV(t.callee) ? "Arguments" : n
        },
        r4 = t4,
        n4 = String,
        Fc = function(e) {
            if (r4(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return n4(e)
        },
        i4 = us,
        oO = function() {
            var e = i4(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        s4 = bi,
        a4 = Ti,
        o4 = DS,
        l4 = oO,
        d_ = RegExp.prototype,
        c4 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in d_) && !a4(e, "flags") && o4(d_, e) ? s4(l4, e) : t
        },
        pp = fr,
        u4 = US,
        f4 = Math.floor,
        Vf = pp("".charAt),
        d4 = pp("".replace),
        qf = pp("".slice),
        h4 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        p4 = /\$([$&'`]|\d{1,2})/g,
        lO = function(e, t, r, n, s, o) {
            var l = r + e.length,
                u = n.length,
                f = p4;
            return s !== void 0 && (s = u4(s), f = h4), d4(o, f, function(h, g) {
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
                            var $ = f4(b / 10);
                            return $ === 0 ? h : $ <= u ? n[$ - 1] === void 0 ? Vf(g, 1) : n[$ - 1] + Vf(g, 1) : h
                        }
                        _ = n[b - 1]
                }
                return _ === void 0 ? "" : _
            })
        },
        g4 = sO,
        m4 = bi,
        gp = fr,
        h_ = vo,
        v4 = Cr,
        y4 = HV,
        Pa = Fc,
        _4 = op,
        E4 = c4,
        b4 = lO,
        T4 = cs,
        S4 = T4("replace"),
        O4 = TypeError,
        cO = gp("".indexOf);
    gp("".replace);
    var p_ = gp("".slice),
        w4 = Math.max,
        g_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : cO(e, t, r)
        };
    g4({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = h_(this),
                s, o, l, u, f, h, g, _, b, $ = 0,
                P = 0,
                M = "";
            if (t != null) {
                if (s = y4(t), s && (o = Pa(h_(E4(t))), !~cO(o, "g"))) throw O4("`.replaceAll` does not allow non-global regexes");
                if (l = _4(t, S4), l) return m4(l, t, n, r)
            }
            for (u = Pa(n), f = Pa(t), h = v4(r), h || (r = Pa(r)), g = f.length, _ = w4(1, g), $ = g_(u, f, 0); $ !== -1;) b = h ? Pa(r(f, $, u)) : b4(f, u, $, [], void 0, r), M += p_(u, P, $) + b, P = $ + g, $ = g_(u, f, $ + _);
            return P < u.length && (M += p_(u, P)), M
        }
    });
    var mp = Br,
        $4 = Fr,
        vp = $4.RegExp,
        yp = mp(function() {
            var e = vp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        C4 = yp || mp(function() {
            return !vp("a", "y").sticky
        }),
        I4 = yp || mp(function() {
            var e = vp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        A4 = {
            BROKEN_CARET: I4,
            MISSED_STICKY: C4,
            UNSUPPORTED_Y: yp
        },
        uO = {},
        N4 = nO,
        R4 = hp,
        P4 = Object.keys || function(t) {
            return N4(t, R4)
        },
        L4 = Ei,
        k4 = VS,
        D4 = yo,
        x4 = us,
        M4 = kc,
        F4 = P4;
    uO.f = L4 && !k4 ? Object.defineProperties : function(t, r) {
        x4(t);
        for (var n = M4(r), s = F4(r), o = s.length, l = 0, u; o > l;) D4.f(t, u = s[l++], n[u]);
        return t
    };
    var B4 = Dc,
        U4 = B4("document", "documentElement"),
        G4 = us,
        j4 = uO,
        m_ = hp,
        W4 = dp,
        H4 = U4,
        K4 = HS,
        V4 = XS,
        v_ = ">",
        y_ = "<",
        Md = "prototype",
        Fd = "script",
        fO = V4("IE_PROTO"),
        Yf = function() {},
        dO = function(e) {
            return y_ + Fd + v_ + e + y_ + "/" + Fd + v_
        },
        __ = function(e) {
            e.write(dO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        q4 = function() {
            var e = K4("iframe"),
                t = "java" + Fd + ":",
                r;
            return e.style.display = "none", H4.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(dO("document.F=Object")), r.close(), r.F
        },
        $l, Fl = function() {
            try {
                $l = new ActiveXObject("htmlfile")
            } catch {}
            Fl = typeof document < "u" ? document.domain && $l ? __($l) : q4() : __($l);
            for (var e = m_.length; e--;) delete Fl[Md][m_[e]];
            return Fl()
        };
    W4[fO] = !0;
    var Y4 = Object.create || function(t, r) {
            var n;
            return t !== null ? (Yf[Md] = G4(t), n = new Yf, Yf[Md] = null, n[fO] = t) : n = Fl(), r === void 0 ? n : j4.f(n, r)
        },
        z4 = Br,
        X4 = Fr,
        J4 = X4.RegExp,
        Q4 = z4(function() {
            var e = J4(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        Z4 = Br,
        eq = Fr,
        tq = eq.RegExp,
        rq = Z4(function() {
            var e = tq("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Rs = bi,
        Bc = fr,
        nq = Fc,
        iq = oO,
        sq = A4,
        aq = xc.exports,
        oq = Y4,
        lq = QS.get,
        cq = Q4,
        uq = rq,
        fq = aq("native-string-replace", String.prototype.replace),
        ic = RegExp.prototype.exec,
        Bd = ic,
        dq = Bc("".charAt),
        hq = Bc("".indexOf),
        pq = Bc("".replace),
        zf = Bc("".slice),
        Ud = function() {
            var e = /a/,
                t = /b*/g;
            return Rs(ic, e, "a"), Rs(ic, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        hO = sq.BROKEN_CARET,
        Gd = /()??/.exec("")[1] !== void 0,
        gq = Ud || Gd || hO || cq || uq;
    gq && (Bd = function(t) {
        var r = this,
            n = lq(r),
            s = nq(t),
            o = n.raw,
            l, u, f, h, g, _, b;
        if (o) return o.lastIndex = r.lastIndex, l = Rs(Bd, o, s), r.lastIndex = o.lastIndex, l;
        var $ = n.groups,
            P = hO && r.sticky,
            M = Rs(iq, r),
            G = r.source,
            C = 0,
            q = s;
        if (P && (M = pq(M, "y", ""), hq(M, "g") === -1 && (M += "g"), q = zf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && dq(s, r.lastIndex - 1) !== `
`) && (G = "(?: " + G + ")", q = " " + q, C++), u = new RegExp("^(?:" + G + ")", M)), Gd && (u = new RegExp("^" + G + "$(?!\\s)", M)), Ud && (f = r.lastIndex), h = Rs(ic, P ? u : r, q), P ? h ? (h.input = zf(h.input, C), h[0] = zf(h[0], C), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Ud && h && (r.lastIndex = r.global ? h.index + h[0].length : f), Gd && h && h.length > 1 && Rs(fq, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && $)
            for (h.groups = _ = oq(null), g = 0; g < $.length; g++) b = $[g], _[b[0]] = h[b[1]];
        return h
    });
    var _p = Bd,
        mq = sO,
        E_ = _p;
    mq({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== E_
    }, {
        exec: E_
    });
    var vq = ap,
        pO = Function.prototype,
        b_ = pO.apply,
        T_ = pO.call,
        yq = typeof Reflect == "object" && Reflect.apply || (vq ? T_.bind(b_) : function() {
            return T_.apply(b_, arguments)
        }),
        S_ = fr,
        O_ = eO,
        _q = _p,
        w_ = Br,
        gO = cs,
        Eq = up,
        bq = gO("species"),
        Xf = RegExp.prototype,
        Tq = function(e, t, r, n) {
            var s = gO(e),
                o = !w_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                l = o && !w_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[bq] = function() {
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
                        return M === _q || M === Xf.exec ? o && !$ ? {
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
            n && Eq(Xf[s], "sham", !0)
        },
        Ep = fr,
        Sq = Mc,
        Oq = Fc,
        wq = vo,
        $q = Ep("".charAt),
        $_ = Ep("".charCodeAt),
        Cq = Ep("".slice),
        C_ = function(e) {
            return function(t, r) {
                var n = Oq(wq(t)),
                    s = Sq(r),
                    o = n.length,
                    l, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (l = $_(n, s), l < 55296 || l > 56319 || s + 1 === o || (u = $_(n, s + 1)) < 56320 || u > 57343 ? e ? $q(n, s) : l : e ? Cq(n, s, s + 2) : (l - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        Iq = {
            codeAt: C_(!1),
            charAt: C_(!0)
        },
        Aq = Iq.charAt,
        Nq = function(e, t, r) {
            return t + (r ? Aq(e, t).length : 1)
        },
        I_ = bi,
        Rq = us,
        Pq = Cr,
        Lq = Lc,
        kq = _p,
        Dq = TypeError,
        xq = function(e, t) {
            var r = e.exec;
            if (Pq(r)) {
                var n = I_(r, e, t);
                return n !== null && Rq(n), n
            }
            if (Lq(e) === "RegExp") return I_(kq, e, t);
            throw Dq("RegExp#exec called on incompatible receiver")
        },
        Mq = yq,
        A_ = bi,
        Uc = fr,
        Fq = Tq,
        Bq = Br,
        Uq = us,
        Gq = Cr,
        jq = Mc,
        Wq = rO,
        Is = Fc,
        Hq = vo,
        Kq = Nq,
        Vq = op,
        qq = lO,
        Yq = xq,
        zq = cs,
        jd = zq("replace"),
        Xq = Math.max,
        Jq = Math.min,
        Qq = Uc([].concat),
        Jf = Uc([].push),
        N_ = Uc("".indexOf),
        R_ = Uc("".slice),
        Zq = function(e) {
            return e === void 0 ? e : String(e)
        },
        eY = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        P_ = function() {
            return /./ [jd] ? /./ [jd]("a", "$0") === "" : !1
        }(),
        tY = !Bq(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    Fq("replace", function(e, t, r) {
        var n = P_ ? "$" : "$0";
        return [function(o, l) {
            var u = Hq(this),
                f = o == null ? void 0 : Vq(o, jd);
            return f ? A_(f, o, u, l) : A_(t, Is(u), o, l)
        }, function(s, o) {
            var l = Uq(this),
                u = Is(s);
            if (typeof o == "string" && N_(o, n) === -1 && N_(o, "$<") === -1) {
                var f = r(t, l, u, o);
                if (f.done) return f.value
            }
            var h = Gq(o);
            h || (o = Is(o));
            var g = l.global;
            if (g) {
                var _ = l.unicode;
                l.lastIndex = 0
            }
            for (var b = [];;) {
                var $ = Yq(l, u);
                if ($ === null || (Jf(b, $), !g)) break;
                var P = Is($[0]);
                P === "" && (l.lastIndex = Kq(u, Wq(l.lastIndex), _))
            }
            for (var M = "", G = 0, C = 0; C < b.length; C++) {
                $ = b[C];
                for (var q = Is($[0]), X = Xq(Jq(jq($.index), u.length), 0), W = [], j = 1; j < $.length; j++) Jf(W, Zq($[j]));
                var Q = $.groups;
                if (h) {
                    var oe = Qq([q], W, X, u);
                    Q !== void 0 && Jf(oe, Q);
                    var le = Is(Mq(o, void 0, oe))
                } else le = qq(q, u, X, W, Q, o);
                X >= G && (M += R_(u, G, X) + le, G = X + q.length)
            }
            return M + R_(u, G)
        }]
    }, !tY || !eY || P_);
    var rY = Fr,
        nY = fr,
        iY = function(e, t) {
            return nY(rY[e].prototype[t])
        },
        sY = iY,
        aY = sY("String", "replaceAll"),
        oY = aY,
        lY = oY,
        cY = lY,
        uY = cY,
        fY = uY,
        dY = fY;
    (function(e) {
        e.exports = dY
    })(wH);
    const hY = tt({
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
                        const r = this.$refs.textarea;
                        r.value = e
                    }
                }
            },
            mounted() {
                this.autosize && OH(this.$refs.textarea)
            },
            methods: {
                focus() {
                    this.$refs.textarea.focus()
                },
                async onInput(e) {
                    const t = e.target;
                    if ((t == null ? void 0 : t.value) == null) return;
                    const r = t.maxLength === -1 ? Number.MAX_SAFE_INTEGER : t.maxLength,
                        n = t.value.split(`
`);
                    if (n.length > this.rows) {
                        let s = "";
                        for (let o = 0; o < this.rows - 1; o++) s += `${n[o]}
`;
                        s += n.slice(this.rows - 1).join(" ").replaceAll(`
`, ""), t.value = s
                    }
                    if (this.sanitizers && (t.value = OS.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
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
        pY = ["rows", "value"];

    function gY(e, t, r, n, s, o) {
        return U(), V("textarea", {
            ref: "textarea",
            rows: e.rows,
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l)),
            onKeypress: t[1] || (t[1] = fo((...l) => e.onKeypressEnter && e.onKeypressEnter(...l), ["enter"]))
        }, null, 40, pY)
    }
    const mO = it(hY, [
            ["render", gY]
        ]),
        mY = tt({
            components: {
                Input: bH,
                TextArea: mO
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
                        if (e && e instanceof wr.ObjectEntity) return !0
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
        vY = {
            class: "single-text-entry"
        },
        yY = {
            class: "constrain"
        },
        _Y = {
            key: 0
        },
        EY = {
            key: 1,
            for: "input"
        };

    function bY(e, t, r, n, s, o) {
        const l = vr("TextArea"),
            u = vr("Input"),
            f = xt("bb");
        return U(), V("div", vY, [H("div", yY, [e.player.prompt ? Ie((U(), V("p", _Y, null, 512)), [
            [f, e.player.prompt]
        ]) : Ee("", !0), e.player.label ? Ie((U(), V("label", EY, null, 512)), [
            [f, e.player.label]
        ]) : Ee("", !0), e.player.isMultiline ? (U(), Zr(l, {
            key: 2,
            id: "input",
            disabled: e.player.isDisabled,
            "model-value": e.value,
            placeholder: e.player.placeholder,
            rows: e.player.lines || 2,
            "onUpdate:modelValue": e.onWrite
        }, null, 8, ["disabled", "model-value", "placeholder", "rows", "onUpdate:modelValue"])) : (U(), Zr(u, {
            key: 3,
            id: "input",
            type: "text",
            disabled: e.player.isDisabled,
            placeholder: e.player.placeholder,
            "model-value": e.value,
            "onUpdate:modelValue": e.onWrite
        }, null, 8, ["disabled", "placeholder", "model-value", "onUpdate:modelValue"])), Ie(H("button", {
            onClick: t[0] || (t[0] = zt((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 512), [
            [f, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const TY = it(mY, [
            ["render", bY]
        ]),
        SY = tt({
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
        OY = {
            class: "multi-text-entry"
        },
        wY = {
            class: "constrain"
        },
        $Y = {
            key: 0
        },
        CY = ["for"],
        IY = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        AY = ["id", "value", "placeholder", "disabled", "onInput"];

    function NY(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", OY, [H("div", wY, [e.player.prompt ? Ie((U(), V("p", $Y, null, 512)), [
            [l, e.player.prompt]
        ]) : Ee("", !0), (U(!0), V(ze, null, $r(e.player.inputs, (u, f) => (U(), V(ze, null, [u.label ? Ie((U(), V("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, CY)), [
            [l, u.label]
        ]) : Ee("", !0), u.isMultiline ? (U(), V("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, IY)) : (U(), V("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, AY))], 64))), 256)), Ie(H("button", {
            onClick: t[0] || (t[0] = zt((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const RY = it(SY, [
            ["render", NY]
        ]),
        PY = tt({
            props: {
                player: Object
            }
        }),
        LY = {
            class: "waiting"
        },
        kY = {
            class: "constrain"
        },
        DY = {
            key: 0
        };

    function xY(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", LY, [H("div", kY, [e.player.message ? Ie((U(), V("p", DY, null, 512)), [
            [l, e.player.message]
        ]) : Ee("", !0)])])
    }
    const vO = it(PY, [
        ["render", xY]
    ]);
    tt({
        components: {
            Choices: GL,
            Doodle: VW,
            Draw: ZW,
            Lobby: uH,
            PostGame: vH,
            SingleTextEntry: TY,
            MultiTextEntry: RY,
            Waiting: vO
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    const MY = tt({
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
        FY = ["href", "aria-label"];

    function BY(e, t, r, n, s, o) {
        return e.link ? (U(), V("a", {
            key: 0,
            class: De([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [wP(e.$slots, "default")], 10, FY)) : Ee("", !0)
    }
    const UY = it(MY, [
        ["render", BY]
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
        yO = {},
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
        GY = function() {
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
    jc.Tokenizer = GY;
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
    })(yO);
    var Eo = {};
    Object.defineProperty(Eo, "__esModule", {
        value: !0
    });
    Eo.Tag = void 0;
    var jY = function() {
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
    Eo.Tag = jY;
    Object.defineProperty(Gc, "__esModule", {
        value: !0
    });
    Gc.BBCodeParser = void 0;
    var L_ = yO,
        k_ = Eo,
        WY = function() {
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
    Gc.BBCodeParser = WY;
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
    const HY = {
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
    var _O = {
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
    })(_O);
    const KY = _O.exports,
        VY = tt({
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
        qY = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        YY = {
            key: 0,
            class: "power-nav"
        },
        zY = jn(() => H("p", null, "MARKERS", -1)),
        XY = ["onClick"],
        JY = pi("KILL"),
        QY = jn(() => H("br", null, null, -1)),
        ZY = pi("ROOM"),
        e6 = [JY, QY, ZY],
        t6 = jn(() => H("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        r6 = {
            key: 1,
            class: "title focused"
        },
        n6 = {
            key: 2,
            class: "title focused"
        },
        i6 = jn(() => H("svg", {
            viewBox: "0 0 20 10"
        }, [H("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        s6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        a6 = [i6, s6],
        o6 = jn(() => H("svg", {
            viewBox: "0 0 60 50"
        }, [H("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), H("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        l6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        c6 = [o6, l6],
        u6 = jn(() => H("svg", {
            viewBox: "0 0 60 50"
        }, [H("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), H("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        f6 = jn(() => H("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        d6 = [u6, f6];

    function h6(e, t, r, n, s, o) {
        return e.replayer ? (U(), V("div", qY, [e.showPowerNav ? (U(), V("div", YY, [H("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), zY, H("ul", null, [(U(!0), V(ze, null, $r(e.replayer.markerMap, (l, u) => (U(), V("li", {
            key: u,
            class: De({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, et(l[1].marker), 11, XY))), 128))]), H("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, e6), H("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : Ee("", !0), t6, e.replayer.markerMap.length ? (U(), V("p", n6, et(e.replayer.currentMarkerItemIndex) + " : " + et(e.replayer.currentMarkerItem[1].marker) + " (" + et(e.replayer.currentEntityItemIndex) + ") ", 1)) : (U(), V("p", r6, "Item #" + et(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Ee("", !0) : (U(), V("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, a6)), H("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, c6), H("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, d6)], 512)) : Ee("", !0)
    }
    const p6 = it(VY, [
        ["render", h6],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function g6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var m6 = g6,
        v6 = nT,
        y6 = v6(Object.keys, Object),
        _6 = y6,
        E6 = Fh,
        b6 = _6,
        T6 = Object.prototype,
        S6 = T6.hasOwnProperty;

    function O6(e) {
        if (!E6(e)) return b6(e);
        var t = [];
        for (var r in Object(e)) S6.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var w6 = O6,
        $6 = fT,
        C6 = w6,
        I6 = Ac;

    function A6(e) {
        return I6(e) ? $6(e) : C6(e)
    }
    var Wc = A6,
        N6 = ho,
        R6 = Wc;

    function P6(e, t) {
        return e && N6(t, R6(t), e)
    }
    var L6 = P6,
        k6 = ho,
        D6 = po;

    function x6(e, t) {
        return e && k6(t, D6(t), e)
    }
    var M6 = x6;

    function F6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (o[s++] = l)
        }
        return o
    }
    var B6 = F6;

    function U6() {
        return []
    }
    var EO = U6,
        G6 = B6,
        j6 = EO,
        W6 = Object.prototype,
        H6 = W6.propertyIsEnumerable,
        D_ = Object.getOwnPropertySymbols,
        K6 = D_ ? function(e) {
            return e == null ? [] : (e = Object(e), G6(D_(e), function(t) {
                return H6.call(e, t)
            }))
        } : j6,
        Tp = K6,
        V6 = ho,
        q6 = Tp;

    function Y6(e, t) {
        return V6(e, q6(e), t)
    }
    var z6 = Y6;

    function X6(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var bO = X6,
        J6 = bO,
        Q6 = Mh,
        Z6 = Tp,
        e5 = EO,
        t5 = Object.getOwnPropertySymbols,
        r5 = t5 ? function(e) {
            for (var t = []; e;) J6(t, Z6(e)), e = Q6(e);
            return t
        } : e5,
        TO = r5,
        n5 = ho,
        i5 = TO;

    function s5(e, t) {
        return n5(e, i5(e), t)
    }
    var a5 = s5,
        o5 = bO,
        l5 = yi;

    function c5(e, t, r) {
        var n = t(e);
        return l5(e) ? n : o5(n, r(e))
    }
    var SO = c5,
        u5 = SO,
        f5 = Tp,
        d5 = Wc;

    function h5(e) {
        return u5(e, d5, f5)
    }
    var p5 = h5,
        g5 = SO,
        m5 = TO,
        v5 = po;

    function y5(e) {
        return g5(e, v5, m5)
    }
    var _5 = y5,
        E5 = ls,
        b5 = dn,
        T5 = E5(b5, "DataView"),
        S5 = T5,
        O5 = ls,
        w5 = dn,
        $5 = O5(w5, "Promise"),
        C5 = $5,
        I5 = ls,
        A5 = dn,
        N5 = I5(A5, "Set"),
        R5 = N5,
        P5 = ls,
        L5 = dn,
        k5 = P5(L5, "WeakMap"),
        D5 = k5,
        Wd = S5,
        Hd = kh,
        Kd = C5,
        Vd = R5,
        qd = D5,
        OO = ia,
        ua = Xb,
        x_ = "[object Map]",
        x5 = "[object Object]",
        M_ = "[object Promise]",
        F_ = "[object Set]",
        B_ = "[object WeakMap]",
        U_ = "[object DataView]",
        M5 = ua(Wd),
        F5 = ua(Hd),
        B5 = ua(Kd),
        U5 = ua(Vd),
        G5 = ua(qd),
        Hi = OO;
    (Wd && Hi(new Wd(new ArrayBuffer(1))) != U_ || Hd && Hi(new Hd) != x_ || Kd && Hi(Kd.resolve()) != M_ || Vd && Hi(new Vd) != F_ || qd && Hi(new qd) != B_) && (Hi = function(e) {
        var t = OO(e),
            r = t == x5 ? e.constructor : void 0,
            n = r ? ua(r) : "";
        if (n) switch (n) {
            case M5:
                return U_;
            case F5:
                return x_;
            case B5:
                return M_;
            case U5:
                return F_;
            case G5:
                return B_
        }
        return t
    });
    var Sp = Hi,
        j5 = Object.prototype,
        W5 = j5.hasOwnProperty;

    function H5(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && W5.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var K5 = H5,
        V5 = xh;

    function q5(e, t) {
        var r = t ? V5(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var Y5 = q5,
        z5 = /\w*$/;

    function X5(e) {
        var t = new e.constructor(e.source, z5.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var J5 = X5,
        G_ = $c,
        j_ = G_ ? G_.prototype : void 0,
        W_ = j_ ? j_.valueOf : void 0;

    function Q5(e) {
        return W_ ? Object(W_.call(e)) : {}
    }
    var Z5 = Q5,
        ez = xh,
        tz = Y5,
        rz = J5,
        nz = Z5,
        iz = tT,
        sz = "[object Boolean]",
        az = "[object Date]",
        oz = "[object Map]",
        lz = "[object Number]",
        cz = "[object RegExp]",
        uz = "[object Set]",
        fz = "[object String]",
        dz = "[object Symbol]",
        hz = "[object ArrayBuffer]",
        pz = "[object DataView]",
        gz = "[object Float32Array]",
        mz = "[object Float64Array]",
        vz = "[object Int8Array]",
        yz = "[object Int16Array]",
        _z = "[object Int32Array]",
        Ez = "[object Uint8Array]",
        bz = "[object Uint8ClampedArray]",
        Tz = "[object Uint16Array]",
        Sz = "[object Uint32Array]";

    function Oz(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case hz:
                return ez(e);
            case sz:
            case az:
                return new n(+e);
            case pz:
                return tz(e, r);
            case gz:
            case mz:
            case vz:
            case yz:
            case _z:
            case Ez:
            case bz:
            case Tz:
            case Sz:
                return iz(e, r);
            case oz:
                return new n;
            case lz:
            case fz:
                return new n(e);
            case cz:
                return rz(e);
            case uz:
                return new n;
            case dz:
                return nz(e)
        }
    }
    var wz = Oz,
        $z = Sp,
        Cz = vi,
        Iz = "[object Map]";

    function Az(e) {
        return Cz(e) && $z(e) == Iz
    }
    var Nz = Az,
        Rz = Nz,
        Pz = Bh,
        H_ = eo.exports,
        K_ = H_ && H_.isMap,
        Lz = K_ ? Pz(K_) : Rz,
        kz = Lz,
        Dz = Sp,
        xz = vi,
        Mz = "[object Set]";

    function Fz(e) {
        return xz(e) && Dz(e) == Mz
    }
    var Bz = Fz,
        Uz = Bz,
        Gz = Bh,
        V_ = eo.exports,
        q_ = V_ && V_.isSet,
        jz = q_ ? Gz(q_) : Uz,
        Wz = jz,
        Hz = Qb,
        Kz = m6,
        Vz = Uh,
        qz = L6,
        Yz = M6,
        zz = zl.exports,
        Xz = rT,
        Jz = z6,
        Qz = a5,
        Zz = p5,
        e9 = _5,
        t9 = Sp,
        r9 = K5,
        n9 = wz,
        i9 = iT,
        s9 = yi,
        a9 = Za.exports,
        o9 = kz,
        l9 = hn,
        c9 = Wz,
        u9 = Wc,
        f9 = po,
        d9 = 1,
        h9 = 2,
        p9 = 4,
        wO = "[object Arguments]",
        g9 = "[object Array]",
        m9 = "[object Boolean]",
        v9 = "[object Date]",
        y9 = "[object Error]",
        $O = "[object Function]",
        _9 = "[object GeneratorFunction]",
        E9 = "[object Map]",
        b9 = "[object Number]",
        CO = "[object Object]",
        T9 = "[object RegExp]",
        S9 = "[object Set]",
        O9 = "[object String]",
        w9 = "[object Symbol]",
        $9 = "[object WeakMap]",
        C9 = "[object ArrayBuffer]",
        I9 = "[object DataView]",
        A9 = "[object Float32Array]",
        N9 = "[object Float64Array]",
        R9 = "[object Int8Array]",
        P9 = "[object Int16Array]",
        L9 = "[object Int32Array]",
        k9 = "[object Uint8Array]",
        D9 = "[object Uint8ClampedArray]",
        x9 = "[object Uint16Array]",
        M9 = "[object Uint32Array]",
        yt = {};
    yt[wO] = yt[g9] = yt[C9] = yt[I9] = yt[m9] = yt[v9] = yt[A9] = yt[N9] = yt[R9] = yt[P9] = yt[L9] = yt[E9] = yt[b9] = yt[CO] = yt[T9] = yt[S9] = yt[O9] = yt[w9] = yt[k9] = yt[D9] = yt[x9] = yt[M9] = !0;
    yt[y9] = yt[$O] = yt[$9] = !1;

    function Bl(e, t, r, n, s, o) {
        var l, u = t & d9,
            f = t & h9,
            h = t & p9;
        if (r && (l = s ? r(e, n, s, o) : r(e)), l !== void 0) return l;
        if (!l9(e)) return e;
        var g = s9(e);
        if (g) {
            if (l = r9(e), !u) return Xz(e, l)
        } else {
            var _ = t9(e),
                b = _ == $O || _ == _9;
            if (a9(e)) return zz(e, u);
            if (_ == CO || _ == wO || b && !s) {
                if (l = f || b ? {} : i9(e), !u) return f ? Qz(e, Yz(l, e)) : Jz(e, qz(l, e))
            } else {
                if (!yt[_]) return s ? e : {};
                l = n9(e, _, u)
            }
        }
        o || (o = new Hz);
        var $ = o.get(e);
        if ($) return $;
        o.set(e, l), c9(e) ? e.forEach(function(G) {
            l.add(Bl(G, t, r, G, e, o))
        }) : o9(e) && e.forEach(function(G, C) {
            l.set(C, Bl(G, t, r, C, e, o))
        });
        var P = h ? f ? e9 : Zz : f ? f9 : u9,
            M = g ? void 0 : P(e);
        return Kz(M || e, function(G, C) {
            M && (C = G, G = e[C]), Vz(l, C, Bl(G, t, r, C, e, o))
        }), l
    }
    var F9 = Bl,
        B9 = F9,
        U9 = 1,
        G9 = 4;

    function j9(e) {
        return B9(e, U9 | G9)
    }
    var IO = j9;
    const W9 = tt({
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
                !e || (this.values = IO(this.$ecastValues), this.content = (n = jy.getPromptGuess(this.values, e)) != null ? n : null)
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
        AO = "main/pp9/antique-freak/assets/ad9172fc.png",
        NO = "main/pp9/antique-freak/assets/dc131b16.png",
        H9 = "main/pp9/antique-freak/assets/38715b18.png",
        K9 = "main/pp9/antique-freak/assets/b0d7c822.png",
        V9 = "main/pp9/antique-freak/assets/06150f24.png",
        en = e => (lo("data-v-2c53389f"), e = e(), co(), e),
        q9 = {
            class: "jbg"
        },
        Y9 = {
            key: 0,
            class: "options"
        },
        z9 = en(() => H("img", {
            src: AO,
            alt: "Leave Feedback"
        }, null, -1)),
        X9 = en(() => H("span", null, [pi("LEAVE"), H("br"), pi("FEEDBACK")], -1)),
        J9 = [z9, X9],
        Q9 = en(() => H("img", {
            src: NO,
            alt: "Send Debug"
        }, null, -1)),
        Z9 = en(() => H("span", null, [pi("SEND A"), H("br"), pi("DEBUG")], -1)),
        eX = [Q9, Z9],
        tX = {
            key: 1,
            class: "feedback"
        },
        rX = en(() => H("img", {
            class: "image",
            src: AO,
            alt: "Feedback"
        }, null, -1)),
        nX = en(() => H("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        iX = en(() => H("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        sX = {
            class: "buttons"
        },
        aX = en(() => H("img", {
            src: H9,
            alt: "good"
        }, null, -1)),
        oX = [aX],
        lX = en(() => H("img", {
            src: K9,
            alt: "good"
        }, null, -1)),
        cX = [lX],
        uX = en(() => H("img", {
            src: V9,
            alt: "bad"
        }, null, -1)),
        fX = [uX],
        dX = {
            class: "actions"
        },
        hX = {
            key: 0,
            class: "content-guess"
        },
        pX = pi("Feedback is about: "),
        gX = {
            key: 2,
            class: "debug"
        },
        mX = en(() => H("img", {
            class: "image",
            src: NO,
            alt: "Debug"
        }, null, -1)),
        vX = en(() => H("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        yX = {
            class: "actions"
        };

    function _X(e, t, r, n, s, o) {
        return U(), V("div", q9, [e.screen === "options" ? (U(), V("div", Y9, [H("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, J9), H("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, eX)])) : e.screen === "feedback" ? (U(), V("div", tX, [rX, nX, H("div", {
            class: De(["vibes", {
                "has-selected": e.vibe
            }])
        }, [iX, H("div", sX, [H("button", {
            class: De({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, oX, 2), H("button", {
            class: De({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, cX, 2), H("button", {
            class: De({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, fX, 2)])], 2), H("div", dX, [e.content ? (U(), V("div", hX, [Ie(H("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [$L, e.isContent]
        ]), H("span", null, [pX, H("em", null, et(e.content), 1)])])) : Ee("", !0), Ie(H("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [Jv, e.message]
        ]), H("button", {
            onClick: t[7] || (t[7] = zt((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, et(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (U(), V("div", gX, [mX, vX, H("div", yX, [Ie(H("textarea", {
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
    const RO = it(W9, [
            ["render", _X],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        EX = tt({
            methods: {
                onFeedbackClick() {
                    this.$showModal(RO)
                }
            }
        });

    function bX(e, t, r, n, s, o) {
        return U(), V("div", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "SEND FEEDBACK")
    }
    const TX = it(EX, [
            ["render", bX],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        SX = {
            install: (e, t) => {
                if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                    if (t.replayer) {
                        e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", p6);
                        return
                    }
                    if (e.config.globalProperties.$debugRecorder = new m3(t.client, t.room), !e.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!Yt.isProduction || Yt.getQueryParam("feedback")) && e.component("Debug", TX), new KY(() => {
                        e.config.globalProperties.$showModal(RO)
                    })
                }
            }
        };
    var OX = dn,
        wX = function() {
            return OX.Date.now()
        },
        $X = wX,
        CX = /\s/;

    function IX(e) {
        for (var t = e.length; t-- && CX.test(e.charAt(t)););
        return t
    }
    var AX = IX,
        NX = AX,
        RX = /^\s+/;

    function PX(e) {
        return e && e.slice(0, NX(e) + 1).replace(RX, "")
    }
    var LX = PX,
        kX = ia,
        DX = vi,
        xX = "[object Symbol]";

    function MX(e) {
        return typeof e == "symbol" || DX(e) && kX(e) == xX
    }
    var Hc = MX,
        FX = LX,
        Y_ = hn,
        BX = Hc,
        z_ = 0 / 0,
        UX = /^[-+]0x[0-9a-f]+$/i,
        GX = /^0b[01]+$/i,
        jX = /^0o[0-7]+$/i,
        WX = parseInt;

    function HX(e) {
        if (typeof e == "number") return e;
        if (BX(e)) return z_;
        if (Y_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Y_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = FX(e);
        var r = GX.test(e);
        return r || jX.test(e) ? WX(e.slice(2), r ? 2 : 8) : UX.test(e) ? z_ : +e
    }
    var KX = HX,
        VX = hn,
        Qf = $X,
        X_ = KX,
        qX = "Expected a function",
        YX = Math.max,
        zX = Math.min;

    function XX(e, t, r) {
        var n, s, o, l, u, f, h = 0,
            g = !1,
            _ = !1,
            b = !0;
        if (typeof e != "function") throw new TypeError(qX);
        t = X_(t) || 0, VX(r) && (g = !!r.leading, _ = "maxWait" in r, o = _ ? YX(X_(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b);

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
            return _ ? zX(ue, o - le) : ue
        }

        function G(Q) {
            var oe = Q - f,
                le = Q - h;
            return f === void 0 || oe >= t || oe < 0 || _ && le >= o
        }

        function C() {
            var Q = Qf();
            if (G(Q)) return q(Q);
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
                oe = G(Q);
            if (n = arguments, s = this, f = Q, oe) {
                if (u === void 0) return P(f);
                if (_) return clearTimeout(u), u = setTimeout(C, t), $(f)
            }
            return u === void 0 && (u = setTimeout(C, t)), l
        }
        return j.cancel = X, j.flush = W, j
    }
    var JX = XX,
        QX = yi,
        ZX = Hc,
        e7 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        t7 = /^\w*$/;

    function r7(e, t) {
        if (QX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || ZX(e) ? !0 : t7.test(e) || !e7.test(e) || t != null && e in Object(t)
    }
    var n7 = r7,
        PO = Jb,
        i7 = "Expected a function";

    function Op(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(i7);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var l = e.apply(this, n);
            return r.cache = o.set(s, l) || o, l
        };
        return r.cache = new(Op.Cache || PO), r
    }
    Op.Cache = PO;
    var s7 = Op,
        a7 = s7,
        o7 = 500;

    function l7(e) {
        var t = a7(e, function(n) {
                return r.size === o7 && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var c7 = l7,
        u7 = c7,
        f7 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        d7 = /\\(\\)?/g,
        h7 = u7(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(f7, function(r, n, s, o) {
                t.push(s ? o.replace(d7, "$1") : n || r)
            }), t
        }),
        p7 = h7;

    function g7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var LO = g7,
        J_ = $c,
        m7 = LO,
        v7 = yi,
        y7 = Hc,
        _7 = 1 / 0,
        Q_ = J_ ? J_.prototype : void 0,
        Z_ = Q_ ? Q_.toString : void 0;

    function kO(e) {
        if (typeof e == "string") return e;
        if (v7(e)) return m7(e, kO) + "";
        if (y7(e)) return Z_ ? Z_.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -_7 ? "-0" : t
    }
    var E7 = kO,
        b7 = E7;

    function T7(e) {
        return e == null ? "" : b7(e)
    }
    var S7 = T7,
        O7 = yi,
        w7 = n7,
        $7 = p7,
        C7 = S7;

    function I7(e, t) {
        return O7(e) ? e : w7(e, t) ? [e] : $7(C7(e))
    }
    var DO = I7,
        A7 = Hc,
        N7 = 1 / 0;

    function R7(e) {
        if (typeof e == "string" || A7(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -N7 ? "-0" : t
    }
    var xO = R7,
        P7 = Uh,
        L7 = DO,
        k7 = Gh,
        eE = hn,
        D7 = xO;

    function x7(e, t, r, n) {
        if (!eE(e)) return e;
        t = L7(t, e);
        for (var s = -1, o = t.length, l = o - 1, u = e; u != null && ++s < o;) {
            var f = D7(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = eE(g) ? g : k7(t[s + 1]) ? [] : {})
            }
            P7(u, f, h), u = u[f]
        }
        return e
    }
    var M7 = x7,
        F7 = M7;

    function B7(e, t, r) {
        return e == null ? e : F7(e, t, r)
    }
    var U7 = B7;
    class G7 {
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
            ge(this, "sync", JX(() => {
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
            return t instanceof wr.ArtifactEntity || t instanceof wr.DoodleEntity ? t : t instanceof wr.ObjectEntity ? IO(t.val) : t instanceof wr.TextEntity ? t.text : t instanceof wr.NumberEntity ? t.val : null
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
                    U7(this.newValues, n, u)
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
    const zr = new G7,
        j7 = {
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

    function W7() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function wp() {
        return !W7() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function H7(e, t) {
        return e.require(t)
    }
    var K7 = {};

    function Xt() {
        return wp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : K7
    }

    function $p(e, t, r) {
        var n = r || Xt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var MO = Object.prototype.toString;

    function FO(e) {
        switch (MO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Si(e, Error)
        }
    }

    function fa(e, t) {
        return MO.call(e) === `[object ${t}]`
    }

    function BO(e) {
        return fa(e, "ErrorEvent")
    }

    function tE(e) {
        return fa(e, "DOMError")
    }

    function V7(e) {
        return fa(e, "DOMException")
    }

    function Qs(e) {
        return fa(e, "String")
    }

    function q7(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Kc(e) {
        return fa(e, "Object")
    }

    function Cp(e) {
        return typeof Event < "u" && Si(e, Event)
    }

    function Y7(e) {
        return typeof Element < "u" && Si(e, Element)
    }

    function z7(e) {
        return fa(e, "RegExp")
    }

    function UO(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function X7(e) {
        return Kc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function J7(e) {
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
            for (; u && f++ < r && (g = Q7(u, t), !(g === "html" || f > 1 && h + s.length * l + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function Q7(e, t) {
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

    function Z7() {
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
    var eJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function tJ(e) {
        return e === "http" || e === "https"
    }

    function rJ(e, t = !1) {
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

    function nJ(e) {
        var t = eJ.exec(e);
        if (!t) throw new xa(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, l = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var _ = h.match(/^\d+/);
            _ && (h = _[0])
        }
        return GO({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function GO(e) {
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

    function iJ(e) {
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
        if (!tJ(n)) throw new xa(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new xa(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function sJ(e) {
        var t = typeof e == "string" ? nJ(e) : GO(e);
        return iJ(t), t
    }
    var aJ = Xt(),
        oJ = "Sentry Logger ",
        sc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function jO(e) {
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
                e && jO(() => {
                    aJ.console[r](`${oJ}[${r}]:`, ...n)
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
        return Qs(e) ? z7(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function cr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                HO(s, n)
            } catch {}
            e[t] = s
        }
    }

    function WO(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function HO(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, WO(e, "__sentry_original__", t)
    }

    function Ap(e) {
        return e.__sentry_original__
    }

    function KO(e) {
        if (FO(e)) return {
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
            return Y7(e) ? Yd(e) : Object.prototype.toString.call(e)
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

    function lJ(e, t = 40) {
        var r = Object.keys(KO(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return nE(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : nE(n, t)
        }
        return ""
    }

    function cJ(e) {
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

    function uJ() {
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

    function fJ() {
        if (!uJ()) return !1;
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

    function dJ() {
        var e = Xt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var $t = Xt(),
        Wa = {},
        lE = {};

    function hJ(e) {
        if (!lE[e]) switch (lE[e] = !0, e) {
            case "console":
                pJ();
                break;
            case "dom":
                SJ();
                break;
            case "xhr":
                yJ();
                break;
            case "fetch":
                gJ();
                break;
            case "history":
                _J();
                break;
            case "error":
                OJ();
                break;
            case "unhandledrejection":
                wJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Xi(e, t) {
        Wa[e] = Wa[e] || [], Wa[e].push(t), hJ(e)
    }

    function fn(e, t) {
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

    function pJ() {
        "console" in $t && sc.forEach(function(e) {
            e in $t.console && cr($t.console, e, function(t) {
                return function(...r) {
                    fn("console", {
                        args: r,
                        level: e
                    }), t && t.apply($t.console, r)
                }
            })
        })
    }

    function gJ() {
        !fJ() || cr($t, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: mJ(t),
                        url: vJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return fn("fetch", {
                    ...r
                }), e.apply($t, t).then(n => (fn("fetch", {
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

    function mJ(e = []) {
        return "Request" in $t && Si(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function vJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in $t && Si(e[0], Request) ? e[0].url : String(e[0])
    }

    function yJ() {
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
    let Cl;

    function _J() {
        if (!dJ()) return;
        var e = $t.onpopstate;
        $t.onpopstate = function(...r) {
            var n = $t.location.href,
                s = Cl;
            if (Cl = n, fn("history", {
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
                    Cl = l, fn("history", {
                        from: o,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        cr($t.history, "pushState", t), cr($t.history, "replaceState", t)
    }
    var EJ = 1e3;
    let Il, Al;

    function bJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function TJ(e) {
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
            if (!(!r || Al === r) && !TJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Il === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r) : bJ(Al, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Al = r), clearTimeout(Il), Il = $t.setTimeout(() => {
                    Il = void 0
                }, EJ)
            }
        }
    }

    function SJ() {
        if ("document" in $t) {
            var e = fn.bind(null, "dom"),
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

    function OJ() {
        ed = $t.onerror, $t.onerror = function(e, t, r, n, s) {
            return fn("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), ed ? ed.apply(this, arguments) : !1
        }
    }
    let td = null;

    function wJ() {
        td = $t.onunhandledrejection, $t.onunhandledrejection = function(e) {
            return fn("unhandledrejection", e), td ? td.apply(this, arguments) : !0
        }
    }

    function $J() {
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

    function ac(e, t) {
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

    function CJ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return Jd("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function qO(e, t = 3, r = 100 * 1024) {
        var n = CJ(e, t);
        return NJ(n) > r ? qO(e, t - 1, r) : n
    }

    function Jd(e, t, r = 1 / 0, n = 1 / 0, s = $J()) {
        const [o, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !J7(t)) return t;
        var u = IJ(e, t);
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
        var b = KO(t);
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

    function IJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : X7(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${gi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function AJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function NJ(e) {
        return AJ(JSON.stringify(e))
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
                    if (UO(r)) {
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
    var RJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function PJ(e) {
        return e === "warn" ? "warning" : RJ.includes(e) ? e : "log"
    }
    var Qd = {
        nowSeconds: () => Date.now() / 1e3
    };

    function LJ() {
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

    function kJ() {
        try {
            var e = H7(ww, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var nd = wp() ? kJ() : LJ(),
        uE = nd === void 0 ? Qd : {
            nowSeconds: () => (nd.timeOrigin + nd.now()) / 1e3
        },
        YO = Qd.nowSeconds.bind(Qd),
        zO = uE.nowSeconds.bind(uE);
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

    function DJ(e) {
        var t = zO(),
            r = {
                sid: Ha(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => MJ(r)
            };
        return e && Vc(r, e), r
    }

    function Vc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || zO(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ha()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function xJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Vc(e, r)
    }

    function MJ(e) {
        return cJ({
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
                timestamp: YO(),
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
            }, this._notifyEventProcessors([...XO(), ...this._eventProcessors], t, r)
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && Gt.log(`Event processor "${u.id}" dropped event`), UO(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, l)
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

    function XO() {
        return $p("globalEventProcessors", () => [])
    }

    function JO(e) {
        XO().push(e)
    }
    var Np = 4,
        FJ = 100;
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
                maxBreadcrumbs: l = FJ
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var u = YO(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? jO(() => o(f, r)) : f;
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
            n && xJ(n), this._sendSessionUpdate(), r && r.setSession()
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
            var f = DJ({
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
        return (!QO(e) || ai(e).isOlderThan(Np)) && Rp(e, new To), wp() ? BJ(e) : ai(e)
    }

    function BJ(e) {
        try {
            var t = qc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!QO(r) || ai(r).isOlderThan(Np)) {
                var n = ai(e).getStackTop();
                Rp(r, new To(n.client, is.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function QO(e) {
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

    function UJ(e, t) {
        return Mr().captureException(e, {
            captureContext: t
        })
    }

    function GJ(e) {
        Mr().withScope(e)
    }

    function jJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function WJ(e, t) {
        var r = sJ(e),
            n = `${jJ(r)}embed/error-page/`;
        let s = `dsn=${rJ(r)}`;
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
    var HJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            h = KJ(l._options, f);
                        return VJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Ws.__initStatic();

    function KJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...HJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function VJ(e, t) {
        return t.ignoreInternal && JJ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ps(e)}`), !0) : qJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ps(e)}`), !0) : YJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ps(e)}.
Url: ${oc(e)}`), !0) : zJ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ps(e)}.
Url: ${oc(e)}`), !0)
    }

    function qJ(e, t) {
        return !t || !t.length ? !1 : XJ(e).some(r => t.some(n => Ip(r, n)))
    }

    function YJ(e, t) {
        if (!t || !t.length) return !1;
        var r = oc(e);
        return r ? t.some(n => Ip(r, n)) : !1
    }

    function zJ(e, t) {
        if (!t || !t.length) return !0;
        var r = oc(e);
        return r ? t.some(n => Ip(r, n)) : !0
    }

    function XJ(e) {
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

    function JJ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function QJ(e = []) {
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
            return t ? QJ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error(`Cannot extract url for event ${Ps(e)}`), null
        }
    }

    function ZO(e, t) {
        var r = Pp(e, t),
            n = {
                type: t && t.name,
                value: rQ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function ZJ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Cp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${lJ(t)}`
                }]
            },
            extra: {
                __serialized__: qO(t)
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
                values: [ZO(e, t)]
            }
        }
    }

    function Pp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = tQ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var eQ = /Minified React error #\d+;/i;

    function tQ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (eQ.test(e.message)) return 1
        }
        return 0
    }

    function rQ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function ew(e, t, r, n, s) {
        let o;
        if (BO(t) && t.error) {
            var l = t;
            return id(e, l.error)
        }
        if (tE(t) || V7(t)) {
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
        if (FO(t)) return id(e, t);
        if (Kc(t) || Cp(t)) {
            var g = t;
            return o = ZJ(e, g, r, s), ac(o, {
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
    var nQ = "Breadcrumbs";
    class io {
        static __initStatic() {
            this.id = nQ
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
            this.options.console && Xi("console", sQ), this.options.dom && Xi("dom", iQ(this.options.dom)), this.options.xhr && Xi("xhr", aQ), this.options.fetch && Xi("fetch", oQ), this.options.history && Xi("history", lQ)
        }
    }
    io.__initStatic();

    function iQ(e) {
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

    function sQ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: PJ(e.level),
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

    function aQ(e) {
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

    function oQ(e) {
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

    function lQ(e) {
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

    function tw() {
        return Zd > 0
    }

    function cQ() {
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
                throw cQ(), GJ(g => {
                    g.addEventProcessor(_ => (t.mechanism && (Xd(_, void 0, void 0), ac(_, t.mechanism)), _.extra = {
                        ..._.extra,
                        arguments: u
                    }, _)), UJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        HO(s, e), WO(e, "__sentry_wrapped__", s);
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
                onerror: uQ,
                onunhandledrejection: fQ
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
                n && t[r] && (pQ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    fi.__initStatic();

    function uQ() {
        Xi("error", e => {
            const [t, r, n] = iw();
            if (!t.getIntegration(fi)) return;
            const {
                msg: s,
                url: o,
                line: l,
                column: u,
                error: f
            } = e;
            if (!(tw() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Qs(s) ? hQ(s, o, l, u) : rw(ew(r, f || s, void 0, n, !1), o, l, u);
                h.level = "error", nw(t, f, h, "onerror")
            }
        })
    }

    function fQ() {
        Xi("unhandledrejection", e => {
            const [t, r, n] = iw();
            if (!t.getIntegration(fi)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (tw() || s && s.__sentry_own_request__) return !0;
            var o = q7(s) ? dQ(s) : ew(r, s, void 0, n, !0);
            o.level = "error", nw(t, s, o, "onunhandledrejection")
        })
    }

    function dQ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function hQ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = BO(e) ? e.message : e,
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
        return rw(f, t, r, n)
    }

    function rw(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            l = o[0] = o[0] || {},
            u = l.stacktrace = l.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            _ = Qs(t) && t.length > 0 ? t : Z7();
        return f.length === 0 && f.push({
            colno: h,
            filename: _,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function pQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.log(`Global Handler attached: ${e}`)
    }

    function nw(e, t, r, n) {
        ac(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function iw() {
        var e = Mr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var gQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            this._options.setTimeout && cr(t, "setTimeout", gE), this._options.setInterval && cr(t, "setInterval", gE), this._options.requestAnimationFrame && cr(t, "requestAnimationFrame", mQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && cr(XMLHttpRequest.prototype, "send", vQ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : gQ;
                n.forEach(yQ)
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

    function mQ(e) {
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

    function vQ(e) {
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

    function yQ(e) {
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
    var _Q = "cause",
        EQ = 5;
    class Hs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Hs.id
        }
        constructor(t = {}) {
            Hs.prototype.__init.call(this), this._key = t.key || _Q, this._limit = t.limit || EQ
        }
        setupOnce() {
            var t = Mr().getClient();
            !t || JO((r, n) => {
                var s = Mr().getIntegration(Hs);
                return s ? bQ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Hs.__initStatic();

    function bQ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Si(s.originalException, Error)) return n;
        var o = sw(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function sw(e, t, r, n, s = []) {
        if (!Si(r[n], Error) || s.length + 1 >= t) return s;
        var o = ZO(e, r[n]);
        return sw(e, t, r[n], n, [o, ...s])
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
            JO(t => {
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
                        if (TQ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function TQ(e, t) {
        return t ? !!(SQ(e, t) || OQ(e, t)) : !1
    }

    function SQ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !ow(e, t) || !aw(e, t))
    }

    function OQ(e, t) {
        var r = mE(t),
            n = mE(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !ow(e, t) || !aw(e, t))
    }

    function aw(e, t) {
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

    function ow(e, t) {
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

    function wQ(e = {}, t = Mr()) {
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
        l.async = !0, l.src = WJ(o, e), e.onLoad && (l.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Gt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const $Q = tt({
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
                    wQ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        So = e => (lo("data-v-a7272d53"), e = e(), co(), e),
        CQ = {
            class: "jbg fatal"
        },
        IQ = {
            class: "constrain"
        },
        AQ = So(() => H("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        NQ = {
            class: "content"
        },
        RQ = So(() => H("h1", null, "You have encountered an error", -1)),
        PQ = So(() => H("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        LQ = So(() => H("ul", null, [H("li", null, "Refresh the page"), H("li", null, "Turn off adblockers or other browser extensions."), H("li", null, "Check your connection to the Internet."), H("li", null, "Make sure you're using an up-to-date browser."), H("li", null, "If that doesn't work, let us know.")], -1)),
        kQ = So(() => H("hr", null, null, -1)),
        DQ = {
            class: "error"
        };

    function xQ(e, t, r, n, s, o) {
        return U(), V("div", CQ, [H("div", IQ, [AQ, H("div", NQ, [RQ, PQ, LQ, H("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), kQ, H("pre", DQ, et(e.message), 1)])])])
    }
    const MQ = it($Q, [
            ["render", xQ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Nl = Un({
            hasCrashed: !1
        }),
        FQ = {
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
                }, e.component("Fatal", MQ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var BQ = DO,
        UQ = xO;

    function GQ(e, t) {
        t = BQ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[UQ(t[r++])];
        return r && r == n ? e : void 0
    }
    var jQ = GQ,
        WQ = jQ;

    function HQ(e, t, r) {
        var n = e == null ? void 0 : WQ(e, t);
        return n === void 0 ? r : n
    }
    var KQ = HQ,
        VQ = Math.floor,
        qQ = Math.random;

    function YQ(e, t) {
        return e + VQ(qQ() * (t - e + 1))
    }
    var zQ = YQ,
        XQ = zQ;

    function JQ(e) {
        var t = e.length;
        return t ? e[XQ(0, t - 1)] : void 0
    }
    var lw = JQ,
        QQ = LO;

    function ZQ(e, t) {
        return QQ(t, function(r) {
            return e[r]
        })
    }
    var eZ = ZQ,
        tZ = eZ,
        rZ = Wc;

    function nZ(e) {
        return e == null ? [] : tZ(e, rZ(e))
    }
    var iZ = nZ,
        sZ = lw,
        aZ = iZ;

    function oZ(e) {
        return sZ(aZ(e))
    }
    var lZ = oZ,
        cZ = lw,
        uZ = lZ,
        fZ = yi;

    function dZ(e) {
        var t = fZ(e) ? cZ : uZ;
        return t(e)
    }
    var hZ = dZ;

    function yE(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = KQ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), hZ(s)
    }
    const pZ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = yE(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return yE(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        gZ = tt({
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
        mZ = "main/pp9/antique-freak/assets/928ef0da.png",
        vZ = "main/pp9/antique-freak/assets/0bb76a2d.png",
        yZ = "main/pp9/antique-freak/assets/ed4469b3.png",
        _Z = {
            key: 0,
            class: "image",
            src: mZ,
            alt: "Kicked"
        },
        EZ = {
            key: 1,
            class: "image",
            src: vZ,
            alt: "Thank You"
        },
        bZ = {
            key: 2,
            class: "image",
            src: yZ,
            alt: "Error"
        },
        TZ = {
            class: "text"
        },
        SZ = {
            key: 3,
            class: "subtext"
        },
        OZ = {
            class: "actions"
        };

    function wZ(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", {
            class: De(["error-model", e.classes])
        }, [e.image === "tear" ? (U(), V("img", _Z)) : e.image === "moon" ? (U(), V("img", EZ)) : (U(), V("img", bZ)), Ie(H("h3", TZ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((U(), V("h3", SZ, null, 512)), [
            [l, e.subtext]
        ]) : Ee("", !0), H("div", OZ, [Ie(H("button", {
            onClick: t[0] || (t[0] = zt(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const $Z = it(gZ, [
            ["render", wZ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        CZ = tt({
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
        IZ = {
            class: "text"
        },
        AZ = {
            key: 0,
            class: "subtext"
        },
        NZ = {
            class: "actions"
        },
        RZ = ["onClick"];

    function PZ(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", {
            class: De(["options-modal", e.classes])
        }, [Ie(H("h3", IZ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((U(), V("h3", AZ, null, 512)), [
            [l, e.subtext]
        ]) : Ee("", !0), H("div", NZ, [(U(!0), V(ze, null, $r(e.options, (u, f) => Ie((U(), V("button", {
            key: f,
            class: De(u.classes),
            onClick: zt(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, RZ)), [
            [l, u.text]
        ])), 128))])], 2)
    }
    const LZ = it(CZ, [
            ["render", PZ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        kZ = tt({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = $Z : e === "Options" ? this.content = LZ : this.content = e, new Promise(n => {
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

    function DZ(e, t, r, n, s, o) {
        return U(), Zr(Tc, {
            name: "modal-transition"
        }, {
            default: Sh(() => [e.props ? (U(), V("div", {
                key: 0,
                class: De(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = fo((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = zt((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (U(), Zr(Ch(e.content), uo({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Ee("", !0)], 34)) : Ee("", !0)]),
            _: 1
        })
    }
    const xZ = it(kZ, [
            ["render", DZ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        MZ = {
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
                e.component("Modal", xZ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        FZ = tt({
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
        BZ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function UZ(e, t, r, n, s, o) {
        return U(), V("div", BZ, [(U(!0), V(ze, null, $r(e.lines, l => (U(), V("p", {
            key: l.id
        }, et(l.text), 1))), 128))])
    }
    const GZ = it(FZ, [
            ["render", UZ]
        ]),
        _E = ln(""),
        jZ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(bo.textDescriptions.announcement, Dr(() => _E.value));
                const t = r => {
                    _E.value = r
                };
                e.component("TextDescriptions", GZ), e.config.globalProperties.$announce = t
            }
        },
        WZ = {
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
        HZ = {
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
        KZ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Oi = e => KZ ? Symbol(e) : e,
        VZ = (e, t, r) => qZ({
            l: e,
            k: t,
            s: r
        }),
        qZ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Ut = e => typeof e == "number" && isFinite(e),
        YZ = e => kp(e) === "[object Date]",
        mi = e => kp(e) === "[object RegExp]",
        Yc = e => Ue(e) && Object.keys(e).length === 0;

    function zZ(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const tr = Object.assign;

    function EE(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const XZ = Object.prototype.hasOwnProperty;

    function Lp(e, t) {
        return XZ.call(e, t)
    }
    const _t = Array.isArray,
        Pt = e => typeof e == "function",
        ye = e => typeof e == "string",
        Je = e => typeof e == "boolean",
        Et = e => e !== null && typeof e == "object",
        cw = Object.prototype.toString,
        kp = e => cw.call(e),
        Ue = e => kp(e) === "[object Object]",
        JZ = e => e == null ? "" : _t(e) || Ue(e) && e.toString === cw ? JSON.stringify(e, null, 2) : String(e);
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

    function QZ(e) {
        throw e
    }

    function ZZ(e, t, r) {
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
        eee = "\r",
        mr = `
`,
        tee = String.fromCharCode(8232),
        ree = String.fromCharCode(8233);

    function nee(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const l = oe => t[oe] === eee && t[oe + 1] === mr,
            u = oe => t[oe] === mr,
            f = oe => t[oe] === ree,
            h = oe => t[oe] === tee,
            g = oe => l(oe) || u(oe) || f(oe) || h(oe),
            _ = () => r,
            b = () => n,
            $ = () => s,
            P = () => o,
            M = oe => l(oe) || f(oe) || h(oe) ? mr : t[oe],
            G = () => M(r),
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
            currentChar: G,
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
        iee = "tokenizer";

    function see(e, t = {}) {
        const r = t.location !== !1,
            n = nee(e),
            s = () => n.index(),
            o = () => ZZ(n.line(), n.column(), n.index()),
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
                        domain: iee,
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

        function G(m) {
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
            G(m);
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
            G(m);
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return m.currentChar() === ri && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function je(m) {
            G(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${be(m)}`) : p += be(m), m.currentChar() === ri && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function rt(m) {
            G(m), P(m, "'");
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
                    return Ir(m, p, 4);
                case "U":
                    return Ir(m, p, 6);
                default:
                    return _(nt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Ir(m, p, O) {
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
            G(m);
            let p = "",
                O = "";
            const x = B => B !== "{" && B !== "}" && B !== Dn && B !== mr;
            for (; p = $e(m, x);) O += p;
            return O
        }

        function yr(m) {
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
            G(m);
            const p = P(m, "|");
            return G(m), p
        }

        function lt(m, p) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && _(nt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), m.next(), O = b(p, 2, "{"), G(m), p.braceNest++, O;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && _(nt.EMPTY_PLACEHOLDER, o(), 0), m.next(), O = b(p, 3, "}"), p.braceNest--, p.braceNest > 0 && G(m), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), O;
                case "@":
                    return p.braceNest > 0 && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = kt(m, p) || $(p), p.braceNest = 0, O;
                default:
                    let B = !0,
                        z = !0,
                        ce = !0;
                    if (Ae(m)) return p.braceNest > 0 && _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = b(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return _(nt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Ht(m, p);
                    if (B = X(m, p)) return O = b(p, 5, Fe(m)), G(m), O;
                    if (z = W(m, p)) return O = b(p, 6, je(m)), G(m), O;
                    if (ce = j(m, p)) return O = b(p, 7, rt(m)), G(m), O;
                    if (!B && !z && !ce) return O = b(p, 13, nr(m)), _(nt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), G(m), O;
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
                    return G(m), m.next(), b(p, 9, ".");
                case ":":
                    return G(m), m.next(), b(p, 10, ":");
                default:
                    return Ae(m) ? (x = b(p, 1, Ot(m)), p.braceNest = 0, p.inLinked = !1, x) : Q(m, p) || le(m, p) ? (G(m), kt(m, p)) : oe(m, p) ? (G(m), b(p, 12, yr(m))) : ue(m, p) ? (G(m), B === "{" ? lt(m, p) || x : b(p, 11, ot(m))) : (O === 8 && _(nt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Ht(m, p))
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
    const aee = "parser",
        oee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function lee(e, t, r) {
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

    function cee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, q, X, W, ...j) {
            const Q = C.currentPosition();
            if (Q.offset += W, Q.column += W, r) {
                const oe = th(X, Q),
                    le = zc(q, oe, {
                        domain: aee,
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
            return Q.value = q.replace(oee, lee), C.nextToken(), o(Q, C.currentOffset(), C.currentPosition()), Q
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
            }) : (q.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, _n(q)), Q.value = q.value || "", o(Q, C.currentOffset(), C.currentPosition()), {
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
            switch (W.type !== 10 && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(W)), W = C.nextToken(), W.type === 2 && (W = C.nextToken()), W.type) {
                case 11:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(W)), X.key = _(C, W.value || "");
                    break;
                case 5:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(W)), X.key = f(C, W.value || "");
                    break;
                case 6:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(W)), X.key = u(C, W.value || "");
                    break;
                case 7:
                    W.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(W)), X.key = h(C, W.value || "");
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
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(ue)), j.items.push(l(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(ue)), j.items.push(u(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(ue)), j.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(C, nt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(ue)), j.items.push(h(C, ue.value || ""));
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

        function G(C) {
            const q = see(C, tr({}, e)),
                X = q.context(),
                W = s(0, X.offset, X.startLoc);
            return t && W.loc && (W.loc.source = C), W.body = M(q), X.currentType !== 14 && n(q, nt.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, C[X.offset] || ""), o(W, q.currentOffset(), q.currentPosition()), W
        }
        return {
            parse: G
        }
    }

    function _n(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function uee(e, t = {}) {
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

    function fee(e, t = {}) {
        const r = uee(e);
        r.helper("normalize"), e.body && Dp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function dee(e, t) {
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

        function f(M, G) {
            l.code += M
        }

        function h(M, G = !0) {
            const C = G ? s : "";
            f(o ? C + "  ".repeat(M) : C)
        }

        function g(M = !0) {
            const G = ++l.indentLevel;
            M && h(G)
        }

        function _(M = !0) {
            const G = --l.indentLevel;
            M && h(G)
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

    function hee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ea(e, t.key), t.modifier ? (e.push(", "), ea(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function pee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (ea(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function gee(e, t) {
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

    function mee(e, t) {
        t.body ? ea(e, t.body) : e.push("null")
    }

    function ea(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                mee(e, t);
                break;
            case 1:
                gee(e, t);
                break;
            case 2:
                pee(e, t);
                break;
            case 6:
                hee(e, t);
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
    const vee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = dee(e, {
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

    function yee(e, t = {}) {
        const r = tr({}, t),
            s = cee(r).parse(e);
        return fee(s, r), vee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const _ee = {
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
    const Eee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function bee(e) {
        return Eee.test(e)
    }

    function Tee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function See(e) {
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

    function Oee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : bee(t) ? Tee(t) : "*" + t
    }

    function wee(e) {
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
                if (s = 0, l === void 0 || (l = Oee(l), l === !1)) return !1;
                b[1]()
            }
        };

        function $() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, u = "\\" + P, b[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && $())) {
                if (f = See(o), _ = wi[n], h = _[f] || _.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = b[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const SE = new Map;

    function $ee(e, t) {
        return Et(e) ? e[t] : null
    }

    function Cee(e, t) {
        if (!Et(e)) return null;
        let r = SE.get(t);
        if (r || (r = wee(t), r && SE.set(t, r)), !r) return null;
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
    const Iee = e => e,
        Aee = e => "",
        Nee = "text",
        Ree = e => e.length === 0 ? "" : e.join(""),
        Pee = JZ;

    function OE(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function Lee(e) {
        const t = Ut(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Ut(e.named.count) || Ut(e.named.n)) ? Ut(e.named.count) ? e.named.count : Ut(e.named.n) ? e.named.n : t : t
    }

    function kee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Dee(e = {}) {
        const t = e.locale,
            r = Lee(e),
            n = Et(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? e.pluralRules[t] : OE,
            s = Et(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? OE : void 0,
            o = C => C[n(r, C.length, s)],
            l = e.list || [],
            u = C => l[C],
            f = e.named || {};
        Ut(e.pluralIndex) && kee(r, f);
        const h = C => f[C];

        function g(C) {
            const q = Pt(e.messages) ? e.messages(C) : Et(e.messages) ? e.messages[C] : !1;
            return q || (e.parent ? e.parent.message(C) : Aee)
        }
        const _ = C => e.modifiers ? e.modifiers[C] : Iee,
            b = Ue(e.processor) && Pt(e.processor.normalize) ? e.processor.normalize : Ree,
            $ = Ue(e.processor) && Pt(e.processor.interpolate) ? e.processor.interpolate : Pee,
            P = Ue(e.processor) && ye(e.processor.type) ? e.processor.type : Nee,
            G = {
                list: u,
                named: h,
                plural: o,
                linked: (C, ...q) => {
                    const [X, W] = q;
                    let j = "text",
                        Q = "";
                    q.length === 1 ? Et(X) ? (Q = X.modifier || Q, j = X.type || j) : ye(X) && (Q = X || Q) : q.length === 2 && (ye(X) && (Q = X || Q), ye(W) && (j = W || j));
                    let oe = g(C)(G);
                    return j === "vnode" && _t(oe) && Q && (oe = oe[0]), Q ? _(Q)(oe, j) : oe
                },
                message: g,
                type: P,
                interpolate: $,
                normalize: b
            };
        return G
    }
    let xee = null;
    _ee.FunctionTranslate;

    function Mee(e) {
        return t => xee
    }
    const Fee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Bee(e, t, r) {
        return [...new Set([r, ..._t(t) ? t : Et(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function uw(e, t, r) {
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
            ye(o) && (n = Uee(e, t[s], r))
        }
        return n
    }

    function Uee(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = Gee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Gee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (_t(r) || Ue(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const jee = "9.2.2",
        Xc = -1,
        Oo = "en-US",
        $E = "",
        CE = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Wee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && Et(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? CE(e) : t === "vnode" && Et(e) && "__v_isVNode" in e ? CE(e.children) : e
        }
    }
    let fw;

    function Hee(e) {
        fw = e
    }
    let dw;

    function Kee(e) {
        dw = e
    }
    let hw;

    function Vee(e) {
        hw = e
    }
    let IE = 0;

    function qee(e = {}) {
        const t = ye(e.version) ? e.version : jee,
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
            u = tr({}, e.modifiers || {}, Wee()),
            f = e.pluralRules || {},
            h = Pt(e.missing) ? e.missing : null,
            g = Je(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            _ = Je(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            $ = !!e.unresolving,
            P = Pt(e.postTranslation) ? e.postTranslation : null,
            M = Ue(e.processor) ? e.processor : null,
            G = Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            q = Pt(e.messageCompiler) ? e.messageCompiler : fw,
            X = Pt(e.messageResolver) ? e.messageResolver : dw || $ee,
            W = Pt(e.localeFallbacker) ? e.localeFallbacker : hw || Bee,
            j = Et(e.fallbackContext) ? e.fallbackContext : void 0,
            Q = Pt(e.onWarn) ? e.onWarn : zZ,
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
            warnHtmlMessage: G,
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
    const Yee = e => e;
    let AE = Object.create(null);

    function zee(e, t = {}) {
        {
            const n = (t.onCacheKey || Yee)(e),
                s = AE[n];
            if (s) return s;
            let o = !1;
            const l = t.onError || QZ;
            t.onError = h => {
                o = !0, l(h)
            };
            const {
                code: u
            } = yee(e, t), f = new Function(`return ${u}`)();
            return o ? f : AE[n] = f
        }
    }
    let pw = nt.__EXTEND_POINT__;
    const sd = () => ++pw,
        Ls = {
            INVALID_ARGUMENT: pw,
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
        } = e, [f, h] = rh(...t), g = Je(h.missingWarn) ? h.missingWarn : e.missingWarn, _ = Je(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, b = Je(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, $ = !!h.resolvedMessage, P = ye(h.default) || Je(h.default) ? Je(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || P !== "", G = ye(h.locale) ? h.locale : e.locale;
        b && Xee(h);
        let [C, q, X] = $ ? [f, G, u[G] || {}] : gw(e, f, G, l, _, g), W = C, j = f;
        if (!$ && !(ye(W) || ss(W)) && M && (W = P, j = W), !$ && (!(ye(W) || ss(W)) || !ye(q))) return s ? Xc : f;
        let Q = !1;
        const oe = () => {
                Q = !0
            },
            le = ss(W) ? W : mw(e, f, q, W, j, oe);
        if (Q) return W;
        const ue = Zee(e, q, X, h),
            Ae = Dee(ue),
            Ce = Jee(e, le, Ae);
        return n ? n(Ce, f) : Ce
    }

    function Xee(e) {
        _t(e.list) ? e.list = e.list.map(t => ye(t) ? EE(t) : t) : Et(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = EE(e.named[t]))
        })
    }

    function gw(e, t, r, n, s, o) {
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
            const G = xp(e, t, b, o, P);
            G !== t && ($ = G)
        }
        return [$, b, _]
    }

    function mw(e, t, r, n, s, o) {
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
        const f = l(n, Qee(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function Jee(e, t, r) {
        return t(r)
    }

    function rh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Ut(t) && !ss(t)) throw ks(Ls.INVALID_ARGUMENT);
        const o = Ut(t) ? String(t) : (ss(t), t);
        return Ut(r) ? s.plural = r : ye(r) ? s.default = r : Ue(r) && !Yc(r) ? s.named = r : _t(r) && (s.list = r), Ut(n) ? s.plural = n : ye(n) ? s.default = n : Ue(n) && tr(s, n), [o, s]
    }

    function Qee(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw o && o(l), l
            },
            onCacheKey: l => VZ(t, r, l)
        }
    }

    function Zee(e, t, r, n) {
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
                    const [, , M] = gw(g, $, t, u, f, h);
                    P = l(M, $)
                }
                if (ye(P)) {
                    let M = !1;
                    const C = mw(e, $, t, P, $, () => {
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
        let G = {},
            C, q = null;
        const X = "datetime format";
        for (let Q = 0; Q < M.length && (C = M[Q], G = r[C] || {}, q = G[f], !Ue(q)); Q++) xp(e, f, C, b, X);
        if (!Ue(q) || !ye(C)) return n ? Xc : f;
        let W = `${C}__${f}`;
        Yc(_) || (W = `${W}__${JSON.stringify(_)}`);
        let j = u.get(W);
        return j || (j = new Intl.DateTimeFormat(C, tr({}, q, _)), u.set(W, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const vw = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

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
        } else if (YZ(t)) {
            if (isNaN(t.getTime())) throw ks(Ls.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Ut(t)) u = t;
        else throw ks(Ls.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            vw.includes(f) ? l[f] = r[f] : o[f] = r[f]
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
        let G = {},
            C, q = null;
        const X = "number format";
        for (let Q = 0; Q < M.length && (C = M[Q], G = r[C] || {}, q = G[f], !Ue(q)); Q++) xp(e, f, C, b, X);
        if (!Ue(q) || !ye(C)) return n ? Xc : f;
        let W = `${C}__${f}`;
        Yc(_) || (W = `${W}__${JSON.stringify(_)}`);
        let j = u.get(W);
        return j || (j = new Intl.NumberFormat(C, tr({}, q, _)), u.set(W, j)), $ ? j.formatToParts(h) : j.format(h)
    }
    const yw = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ih(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {};
        if (!Ut(t)) throw ks(Ls.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Ue(r) && Object.keys(r).forEach(f => {
            yw.includes(f) ? l[f] = r[f] : o[f] = r[f]
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
    const ete = "9.2.2";
    Fee.__EXTEND_POINT__;
    let _w = nt.__EXTEND_POINT__;
    const Sr = () => ++_w,
        Mt = {
            UNEXPECTED_RETURN_TYPE: _w,
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

    function jt(e, ...t) {
        return zc(e, null, void 0)
    }
    const sh = Oi("__transrateVNode"),
        ah = Oi("__datetimeParts"),
        oh = Oi("__numberParts"),
        Ew = Oi("__setPluralRules");
    Oi("__intlifyMeta");
    const bw = Oi("__injectWithOption");

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

    function tte(e) {
        return e.type
    }

    function Tw(e, t, r) {
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
        const o = ln(r && s ? r.locale.value : ye(e.locale) ? e.locale : Oo),
            l = ln(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || _t(e.fallbackLocale) || Ue(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = ln(Jc(o.value, e)),
            f = ln(Ue(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = ln(Ue(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Je(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            _ = r ? r.fallbackWarn : Je(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = r ? r.fallbackRoot : Je(e.fallbackRoot) ? e.fallbackRoot : !0,
            $ = !!e.fallbackFormat,
            P = Pt(e.missing) ? e.missing : null,
            M = Pt(e.missing) ? FE(e.missing) : null,
            G = Pt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : Je(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            q = !!e.escapeParameter;
        const X = r ? r.modifiers : Ue(e.modifiers) ? e.modifiers : {};
        let W = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const A = {
                version: ete,
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
                postTranslation: G === null ? void 0 : G,
                warnHtmlMessage: C,
                escapeParameter: q,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Ue(j) ? j.__datetimeFormatters : void 0, A.__numberFormatters = Ue(j) ? j.__numberFormatters : void 0, qee(A)
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
            return Pt(G) ? G : null
        }

        function F(A) {
            G = A, j.postTranslation = A
        }

        function ie() {
            return P
        }

        function de(A) {
            A !== null && (M = FE(A)), P = A, j.missing = M
        }
        const be = (A, K, he, pe, Ne, xe) => {
            oe();
            let w;
            if (w = A(j), Ut(w) && w === Xc) {
                const [T, R] = K();
                return r && b ? pe(r) : Ne(T)
            } else {
                if (xe(w)) return w;
                throw jt(Mt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(K => Reflect.apply(RE, null, [K, ...A]), () => rh(...A), "translate", K => Reflect.apply(K.t, K, [...A]), K => K, K => ye(K))
        }

        function Oe(...A) {
            const [K, he, pe] = A;
            if (pe && !Et(pe)) throw jt(Mt.INVALID_ARGUMENT);
            return ve(K, he, tr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Fe(...A) {
            return be(K => Reflect.apply(PE, null, [K, ...A]), () => nh(...A), "datetime format", K => Reflect.apply(K.d, K, [...A]), () => $E, K => ye(K))
        }

        function je(...A) {
            return be(K => Reflect.apply(kE, null, [K, ...A]), () => ih(...A), "number format", K => Reflect.apply(K.n, K, [...A]), () => $E, K => ye(K))
        }

        function rt(A) {
            return A.map(K => ye(K) || Ut(K) || Je(K) ? xE(String(K)) : K)
        }
        const Ir = {
            normalize: rt,
            interpolate: A => A,
            type: "vnode"
        };

        function nr(...A) {
            return be(K => {
                let he;
                const pe = K;
                try {
                    pe.processor = Ir, he = Reflect.apply(RE, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => rh(...A), "translate", K => K[sh](...A), K => [xE(K)], K => _t(K))
        }

        function yr(...A) {
            return be(K => Reflect.apply(kE, null, [K, ...A]), () => ih(...A), "number format", K => K[oh](...A), () => [], K => ye(K) || _t(K))
        }

        function ot(...A) {
            return be(K => Reflect.apply(PE, null, [K, ...A]), () => nh(...A), "datetime format", K => K[ah](...A), () => [], K => ye(K) || _t(K))
        }

        function Ot(A) {
            W = A, j.pluralRules = W
        }

        function lt(A, K) {
            const he = ye(K) ? K : o.value,
                pe = Dt(he);
            return j.messageResolver(pe, A) !== null
        }

        function kt(A) {
            let K = null;
            const he = uw(j, l.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ne = u.value[he[pe]] || {},
                    xe = j.messageResolver(Ne, A);
                if (xe != null) {
                    K = xe;
                    break
                }
            }
            return K
        }

        function Ht(A) {
            const K = kt(A);
            return K != null ? K : r ? r.tm(A) || {} : {}
        }

        function Dt(A) {
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

        function x(A, K) {
            f.value[A] = K, j.datetimeFormats = f.value, LE(j, A, K)
        }

        function B(A, K) {
            f.value[A] = tr(f.value[A] || {}, K), j.datetimeFormats = f.value, LE(j, A, K)
        }

        function z(A) {
            return h.value[A] || {}
        }

        function ce(A, K) {
            h.value[A] = K, j.numberFormats = h.value, DE(j, A, K)
        }

        function se(A, K) {
            h.value[A] = tr(h.value[A] || {}, K), j.numberFormats = h.value, DE(j, A, K)
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
            [Ew]: Ot
        };
        return re.datetimeFormats = Ce, re.numberFormats = fe, re.rt = Oe, re.te = lt, re.tm = Ht, re.d = Fe, re.n = je, re.getDateTimeFormat = O, re.setDateTimeFormat = x, re.mergeDateTimeFormat = B, re.getNumberFormat = z, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[bw] = e.__injectWithOption, re[sh] = nr, re[ah] = ot, re[oh] = yr, re
    }

    function rte(e) {
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
            __root: G,
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
            __root: G,
            __injectWithOption: C
        }
    }

    function ch(e = {}, t) {
        {
            const r = Mp(rte(e)),
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

    function nte({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ..._t(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function Sw(e) {
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
                const u = nte(t, o),
                    f = s[sh](e.keypath, u, l),
                    h = tr({}, n),
                    g = ye(e.tag) || Et(e.tag) ? e.tag : Sw();
                return Ph(g, h, f)
            }
        }
    };

    function ite(e) {
        return _t(e) && !ye(e[0])
    }

    function Ow(e, t, r, n) {
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
                return ite(M) && (M[0].key = `${b.type}-${$}`), M
            }) : ye(f) && (h = [f]);
            const g = tr({}, o),
                _ = ye(e.tag) || Et(e.tag) ? e.tag : Sw();
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
                return Ow(e, t, yw, (...n) => r[oh](...n))
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
                return Ow(e, t, vw, (...n) => r[ah](...n))
            }
        };

    function ste(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function ate(e) {
        const t = l => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = l;
            if (!u || !u.$) throw jt(Mt.UNEXPECTED_ERROR);
            const g = ste(e, u.$),
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

    function ote(e, t, ...r) {
        const n = Ue(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Je(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : BE.name, BE), e.component(UE.name, UE), e.component(GE.name, GE)), e.directive("t", ate(t))
    }

    function lte(e, t, r) {
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
                s.__i18nGlobal && Tw(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, l) => this.$i18n.te(o, l), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
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
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Ew](t.pluralizationRules || e.pluralizationRules);
        const r = Jc(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const cte = Oi("global-vue-i18n");

    function ute(e = {}, t) {
        const r = Je(e.legacy) ? e.legacy : !0,
            n = Je(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [l, u] = fte(e, r),
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
                    $.__VUE_I18N_SYMBOL__ = f, $.provide($.__VUE_I18N_SYMBOL__, b), !r && n && Ete($, b.global), ote($, b, ...P), r && $.mixin(lte(u, u.__composer, b));
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
        const r = dte(t),
            n = pte(r),
            s = tte(t),
            o = hte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw jt(Mt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return vte(t, o, n, e)
        }
        if (o === "global") return Tw(n, e, s), n;
        if (o === "parent") {
            let f = gte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let u = l.__getInstance(t);
        if (u == null) {
            const f = tr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Mp(f), mte(l, t), l.__setInstance(t, u)
        }
        return u
    }

    function fte(e, t, r) {
        const n = yR(); {
            const s = t ? n.run(() => ch(e)) : n.run(() => Mp(e));
            if (s == null) throw jt(Mt.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function dte(e) {
        {
            const t = Zi(e.isCE ? cte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw jt(e.isCE ? Mt.NOT_INSLALLED_WITH_PROVIDE : Mt.UNEXPECTED_ERROR);
            return t
        }
    }

    function hte(e, t) {
        return Yc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function pte(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function gte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(o);
            else {
                const u = l.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[bw] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function mte(e, t, r) {
        Oh(() => {}, t), wh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function vte(e, t, r, n = {}) {
        const s = t === "local",
            o = VR(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw jt(Mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Je(n.inheritLocale) ? n.inheritLocale : !0,
            u = ln(s && l ? r.locale.value : ye(n.locale) ? n.locale : Oo),
            f = ln(s && l ? r.fallbackLocale.value : ye(n.fallbackLocale) || _t(n.fallbackLocale) || Ue(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = ln(Jc(u.value, n)),
            g = ln(Ue(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            _ = ln(Ue(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            b = s ? r.missingWarn : Je(n.missingWarn) || mi(n.missingWarn) ? n.missingWarn : !0,
            $ = s ? r.fallbackWarn : Je(n.fallbackWarn) || mi(n.fallbackWarn) ? n.fallbackWarn : !0,
            P = s ? r.fallbackRoot : Je(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            G = Pt(n.missing) ? n.missing : null,
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
            return o.value ? o.value.getMissingHandler() : G
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

        function Ir(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function nr(p, O) {
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
            setLocaleMessage: Ir,
            mergeLocaleMessage: nr,
            getDateTimeFormat: yr,
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
    const yte = ["locale", "fallbackLocale", "availableLocales"],
        _te = ["t", "rt", "d", "n", "tm"];

    function Ete(e, t) {
        const r = Object.create(null);
        yte.forEach(n => {
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
        }), e.config.globalProperties.$i18n = r, _te.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw jt(Mt.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Hee(zee);
    Kee(Cee);
    Vee(uw);
    const bte = tt({
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
        Tte = "main/pp9/antique-freak/assets/c8afd972.svg",
        Ste = {
            class: "constrain"
        },
        Ote = {
            class: "text"
        },
        wte = {
            class: "subtext"
        },
        $te = {
            key: 0,
            class: "warning"
        },
        Cte = {
            key: 1,
            class: "spinner"
        };

    function Ite(e, t, r, n, s, o) {
        return U(), Zr(Tc, {
            name: "toast-transition"
        }, {
            default: Sh(() => [e.isVisible && e.options ? (U(), V("div", {
                key: 0,
                class: De([e.options.type, "jbg toast"])
            }, [H("div", Ste, [H("img", {
                class: "close",
                alt: "close",
                src: Tte,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = fo((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), H("p", Ote, et(e.options.text), 1), H("p", wte, et(e.options.subtext), 1), e.options.warning ? (U(), V("p", $te, et(e.options.warning), 1)) : Ee("", !0), e.options.type === "reconnecting" ? (U(), V("div", Cte)) : Ee("", !0)])], 2)) : Ee("", !0)]),
            _: 1
        })
    }
    const Ate = it(bte, [
            ["render", Ite],
            ["__scopeId", "data-v-591e1c35"]
        ]),
        Nte = {
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
                e.component("Toast", Ate), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        Rte = tt({
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

    function Pte(e, t, r, n, s, o) {
        const l = vr("Fatal"),
            u = vr("TextDescriptions"),
            f = vr("Debug"),
            h = vr("Modal"),
            g = vr("Toast");
        return e.shouldShowFatal ? (U(), Zr(l, {
            key: 0
        })) : (U(), V(ze, {
            key: 1
        }, [St(u), (U(), Zr(Ch(e.mainView), uo({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), St(f), St(h), St(g)], 64))
    }
    const KE = it(Rte, [
            ["render", Pte]
        ]),
        Lte = e => {
            let t;
            window.tv.register({
                connect: r => (t = new wr.WSClient(r), t.connect()),
                mount: r => {
                    var l, u, f, h;
                    KE.name = r.app;
                    let n = LL(KE, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const o = ute({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(BW, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(HY), n.use(MZ), n.use(SX, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(j7, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(FQ), n.use(o), n.use(pZ, {
                            i18n: o
                        }), n.use(jZ), n.use(WZ), n.use(Nte), n.use(HZ), e.plugins) {
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
        kte = {
            AUDIENCE_THANKS: "Thanks!"
        },
        Dte = {
            INFO: "Fact {current}/{max}",
            PLACEHOLDER: "write here",
            WRITE_SOMETHING: "You need to write something!",
            FILTER_ERROR: "Your entry contains prohibited language. Try again!"
        },
        xte = {
            AVATAR_SELECT_PROMPT: "Choose your accessory!",
            PRESENTATION_CHOICE_YES: "Manually Present",
            PRESENTATION_CHOICE_NO: "Auto-Present",
            PRESENTATION_MODE: "Presentation Mode:",
            PRESENTATION_PROMPT: "How does your group want to showcase their writing?",
            ON: "On",
            OFF: "Off"
        },
        Mte = {
            UP_NEXT: "Up next"
        },
        Fte = {
            CHOOSING: kte,
            FACT: Dte,
            LOBBY: xte,
            RANKING: Mte
        },
        Bte = {
            AUDIENCE_THANKS: "Merci\xA0!"
        },
        Ute = {
            INFO: "Fait {current}/{max}",
            PLACEHOLDER: "\xE9crivez ici",
            WRITE_SOMETHING: "Vous devez \xE9crire quelque chose\xA0!",
            FILTER_ERROR: "Votre r\xE9ponse contient des mots interdits. R\xE9essayez encore\xA0!"
        },
        Gte = {
            AVATAR_SELECT_PROMPT: "Choisissez votre accessoire\xA0!",
            PRESENTATION_CHOICE_YES: "Pr\xE9sentation manuelle",
            PRESENTATION_CHOICE_NO: "Pr\xE9sentation automatique",
            PRESENTATION_MODE: "Mode de pr\xE9sentation\xA0:",
            PRESENTATION_PROMPT: "Comment votre groupe souhaite-t-il montrer son \u0153uvre\xA0?",
            ON: "On",
            OFF: "Off"
        },
        jte = {
            UP_NEXT: "Suivant"
        },
        Wte = {
            CHOOSING: Bte,
            FACT: Ute,
            LOBBY: Gte,
            RANKING: jte
        },
        Hte = {
            AUDIENCE_THANKS: "Grazie!"
        },
        Kte = {
            INFO: "Info {current}/{max}",
            PLACEHOLDER: "scrivi qui",
            WRITE_SOMETHING: "Devi scrivere qualcosa!",
            FILTER_ERROR: "La voce inserita contiene parole vietate. Riprova!"
        },
        Vte = {
            AVATAR_SELECT_PROMPT: "Scegli il tuo accessorio!",
            PRESENTATION_CHOICE_YES: "Presenta manualmente",
            PRESENTATION_CHOICE_NO: "Presenta in automatico",
            PRESENTATION_MODE: "Modalit\xE0 di presentazione:",
            PRESENTATION_PROMPT: "Il tuo gruppo in che modalit\xE0 vuole presentare il suo testo?",
            ON: "On",
            OFF: "Off"
        },
        qte = {
            UP_NEXT: "Prossimo"
        },
        Yte = {
            CHOOSING: Hte,
            FACT: Kte,
            LOBBY: Vte,
            RANKING: qte
        },
        zte = {
            AUDIENCE_THANKS: "Danke!"
        },
        Xte = {
            INFO: "Fakt {current} / {max}",
            PLACEHOLDER: "hier schreiben",
            WRITE_SOMETHING: "Du musst etwas schreiben!",
            FILTER_ERROR: "Deine Eingabe enth\xE4lt verbotene W\xF6rter Versuche es noch mal!"
        },
        Jte = {
            AVATAR_SELECT_PROMPT: "W\xE4hle dein Accessoire aus!",
            PRESENTATION_CHOICE_YES: "Selbst pr\xE4sentieren",
            PRESENTATION_CHOICE_NO: "Auto-Pr\xE4sentation",
            PRESENTATION_MODE: "Pr\xE4sentationsmodus:",
            PRESENTATION_PROMPT: "Wie m\xF6chte deine Gruppe ihr Geschriebenes pr\xE4sentieren?",
            ON: "An",
            OFF: "Aus"
        },
        Qte = {
            UP_NEXT: "Als n\xE4chstes"
        },
        Zte = {
            CHOOSING: zte,
            FACT: Xte,
            LOBBY: Jte,
            RANKING: Qte
        },
        ere = {
            AUDIENCE_THANKS: "\xA1Gracias!"
        },
        tre = {
            INFO: "Dato {current}/{max}",
            PLACEHOLDER: "escribe aqu\xED",
            WRITE_SOMETHING: "\xA1Tienes que escribir algo!",
            FILTER_ERROR: "Tu texto contiene palabras no permitidas. \xA1Vuelve a intentarlo!"
        },
        rre = {
            AVATAR_SELECT_PROMPT: "\xA1Elige tu accesorio!",
            PRESENTATION_CHOICE_YES: "Presentaci\xF3n manual",
            PRESENTATION_CHOICE_NO: "Presentaci\xF3n autom\xE1tica",
            PRESENTATION_MODE: "Modo de presentaci\xF3n:",
            PRESENTATION_PROMPT: "\xBFC\xF3mo quiere presentar sus escritos tu grupo?",
            ON: "S\xED",
            OFF: "No"
        },
        nre = {
            UP_NEXT: "A continuaci\xF3n"
        },
        ire = {
            CHOOSING: ere,
            FACT: tre,
            LOBBY: rre,
            RANKING: nre
        },
        sre = {
            AUDIENCE_THANKS: "\xA1Gracias!"
        },
        are = {
            INFO: "Hecho {current}/{max}",
            PLACEHOLDER: "escribe aqu\xED",
            WRITE_SOMETHING: "\xA1Debes escribir algo!",
            FILTER_ERROR: "Tu texto contiene lenguaje prohibido. \xA1Vuelve a intentarlo!"
        },
        ore = {
            AVATAR_SELECT_PROMPT: "\xA1Elige tu accesorio!",
            PRESENTATION_CHOICE_YES: "Presentar manualmente",
            PRESENTATION_CHOICE_NO: "Presentar autom\xE1ticamente",
            PRESENTATION_MODE: "Modo de presentaci\xF3n:",
            PRESENTATION_PROMPT: "\xBFC\xF3mo quiere demostrar sus escrituras tu grupo?",
            ON: "S\xED",
            OFF: "No"
        },
        lre = {
            UP_NEXT: "A continuaci\xF3n"
        },
        cre = {
            CHOOSING: sre,
            FACT: are,
            LOBBY: ore,
            RANKING: lre
        },
        ure = {
            en: Fte,
            fr: Wte,
            it: Yte,
            de: Zte,
            es: ire,
            "es-XL": cre
        },
        fre = tt({
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
        dre = {
            class: "haggleOverlay",
            "aria-modal": "true",
            role: "dialog"
        },
        hre = {
            key: 0,
            class: "haggleDialog constrain"
        },
        pre = {
            class: "prompt"
        },
        gre = {
            class: "choices"
        },
        mre = ["onClick"],
        vre = {
            class: "text"
        };

    function yre(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", dre, [e.player.haggle ? (U(), V("div", hre, [H("button", {
            class: "haggleClose",
            "aria-label": "cancel",
            onClick: t[0] || (t[0] = zt((...u) => e.haggleClose && e.haggleClose(...u), ["prevent"]))
        }), Ie(H("div", pre, null, 512), [
            [l, e.player.haggle.prompt]
        ]), H("div", gre, [(U(!0), V(ze, null, $r(e.player.haggle.choices, (u, f) => (U(), V("button", {
            key: `haggle_${e.player.choiceId}_${f}`,
            class: "choice gold-button",
            onClick: h => e.clickHaggleChoice(h, f)
        }, [Ie(H("span", vre, null, 512), [
            [l, u.text]
        ])], 8, mre))), 128))])])) : Ee("", !0)])
    }
    const _re = it(fre, [
            ["render", yre]
        ]),
        Qc = e => {
            var n;
            if (!e) return "";
            const t = e.id.split("_")[0],
                r = (n = e.type) != null ? n : "png";
            return `https://s3.amazonaws.com/static.jackboxgames.com/game-images/antique-game/${t}.${r}`
        },
        Ere = tt({
            components: {
                HaggleDialog: _re
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
        bre = {
            class: "choosing scrollable"
        },
        Tre = ["disabled"],
        Sre = {
            class: "prompt-text"
        },
        Ore = H("div", {
            class: "hr"
        }, null, -1),
        wre = {
            key: 0,
            class: "prompt"
        },
        $re = {
            class: "photo-banner"
        },
        Cre = ["alt", "src"],
        Ire = ["disabled", "onClick"],
        Are = ["alt", "src"],
        Nre = {
            key: 1
        },
        Rre = ["alt", "src"],
        Pre = {
            key: 2
        };

    function Lre(e, t, r, n, s, o) {
        const l = vr("HaggleDialog"),
            u = xt("bb"),
            f = xt("t");
        return U(), V("div", bre, [H("div", {
            class: De(["constrain content", e.isShopping ? "shopping" : ""])
        }, [H("fieldset", {
            disabled: e.isSubmitting || e.chosenIndex !== -1
        }, [Ie(H("div", Sre, null, 512), [
            [u, e.player.prompt]
        ]), Ore, e.player.photo ? (U(), V("div", wre, [H("div", $re, [H("img", {
            class: "photo",
            alt: e.player.photo.alt,
            src: e.getItemImage(e.player.photo)
        }, null, 8, Cre)])])) : Ee("", !0), e.player.price ? Ie((U(), V("div", {
            key: 1,
            class: De(["price-tag", e.player.price.category])
        }, null, 2)), [
            [u, e.player.price.text]
        ]) : Ee("", !0), Ie(H("div", {
            class: De(["choices", e.isPrePresenting && "pre-presenting"])
        }, [(U(!0), V(ze, null, $r(e.player.choices, (h, g) => (U(), V("button", {
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
        }, [h.photo && !Array.isArray(h.photo) ? (U(), V("img", {
            key: 0,
            class: "photo",
            alt: `${h.photo.alt}`,
            src: e.getItemImage(h.photo)
        }, null, 8, Are)) : Ee("", !0), h.photo && Array.isArray(h.photo) ? (U(), V("span", Nre, [(U(!0), V(ze, null, $r(h.photo, (_, b) => (U(), V("img", {
            key: `photo_${g}_${b}`,
            class: "photo half",
            alt: `${_.alt}`,
            src: e.getItemImage(_)
        }, null, 8, Rre))), 128))])) : Ee("", !0), Ie(H("span", null, null, 512), [
            [u, h.text]
        ])], 10, Ire))), 128))], 2), [
            [qb, !(e.audience && e.chosenIndex !== -1)]
        ]), e.audience && e.chosenIndex !== -1 ? Ie((U(), V("div", Pre, null, 512)), [
            [f, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Ee("", !0)], 8, Tre)], 2), e.showHaggle ? (U(), Zr(l, {
            key: 0,
            player: e.player,
            "haggle-close": e.haggleClose,
            "click-haggle-choice": e.clickHaggleChoice
        }, null, 8, ["player", "haggle-close", "click-haggle-choice"])) : Ee("", !0)])
    }
    const kre = it(Ere, [
            ["render", Lre]
        ]),
        Dre = tt({
            components: {
                TextArea: mO
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
        xre = {
            class: "fact-view scrollable"
        },
        Mre = {
            class: "constrain content"
        },
        Fre = {
            for: "textinput"
        },
        Bre = {
            class: "prompt"
        },
        Ure = {
            class: "input-container"
        },
        Gre = ["textContent"],
        jre = {
            key: 1,
            class: "prompt"
        },
        Wre = {
            class: "photo-banner"
        },
        Hre = ["alt", "src"],
        Kre = {
            key: 2,
            class: "prompt"
        },
        Vre = {
            class: "photoBanner"
        },
        qre = ["alt", "src"],
        Yre = {
            key: 3,
            class: "inputLine"
        },
        zre = ["disabled"],
        Xre = {
            key: 0,
            class: "errors"
        },
        Jre = {
            key: 0,
            class: "error"
        },
        Qre = {
            key: 1,
            class: "error"
        },
        Zre = {
            key: 2,
            class: "error"
        },
        ene = {
            key: 4
        },
        tne = {
            class: "choices"
        },
        rne = ["disabled", "onClick"],
        nne = {
            class: "text"
        },
        ine = {
            key: 5,
            class: "fact-info"
        };

    function sne(e, t, r, n, s, o) {
        const l = vr("TextArea"),
            u = xt("bb");
        return U(), V("div", xre, [H("div", Mre, [H("form", {
            autocomplete: "off",
            onSubmit: t[1] || (t[1] = zt((...f) => e.onSubmit && e.onSubmit(...f), ["prevent"]))
        }, [e.showInput ? Ee("", !0) : Ie((U(), V("div", {
            key: 0,
            class: De(["prompt", !e.writing && "item-title"])
        }, null, 2)), [
            [u, e.player.prompt]
        ]), H("label", Fre, [Ie(H("div", Bre, null, 512), [
            [u, e.inputPrompt]
        ])]), Ie(H("div", Ure, [H("div", {
            class: De(["character-count", {
                "too-long": e.player.maxLength - e.sanitizedAnswer.length < 0
            }]),
            textContent: et(e.remainingCharacters)
        }, null, 10, Gre), St(l, {
            id: "textinput",
            ref: "textarea",
            modelValue: e.answer,
            "onUpdate:modelValue": t[0] || (t[0] = f => e.answer = f),
            autosize: "",
            enterkeyhint: "done",
            autocapitalize: "off",
            maxlength: e.player.maxLength,
            placeholder: e.$t("FACT.PLACEHOLDER"),
            onInput: e.onInput,
            onKeydown: fo(zt(e.onSubmit, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "maxlength", "placeholder", "onInput", "onKeydown"])], 512), [
            [qb, e.showInput]
        ]), e.hasPhoto ? (U(), V("div", jre, [H("div", Wre, [H("img", {
            class: "photo",
            alt: `${e.player.photo.alt}`,
            src: e.getItemImage(e.player.photo)
        }, null, 8, Hre)])])) : Ee("", !0), e.hasPhotos ? (U(), V("div", Kre, [H("div", Vre, [(U(!0), V(ze, null, $r(e.player.photo, (f, h) => (U(), V("img", {
            key: `photo_${e.player.choiceId}_${h}`,
            class: "photo half",
            alt: f.alt,
            src: e.getItemImage(f)
        }, null, 8, qre))), 128))])])) : Ee("", !0), e.showInput ? (U(), V("div", Yre, [H("button", {
            class: "submit gold-button",
            type: "submit",
            value: "Submit",
            disabled: !e.canSubmit,
            style: ao(`--textheight:${e.submitOffset}px`)
        }, et(e.$t("ACTION.SUBMIT")), 13, zre), e.player.error || e.validationError || e.filterError ? (U(), V("div", Xre, [e.player.error ? Ie((U(), V("span", Jre, null, 512)), [
            [u, e.player.error]
        ]) : Ee("", !0), e.validationError ? (U(), V("span", Qre, et(e.validationError), 1)) : Ee("", !0), e.filterError ? (U(), V("span", Zre, et(e.$t("FACT.FILTER_ERROR")), 1)) : Ee("", !0)])) : Ee("", !0)])) : (U(), V("div", ene, [H("div", tne, [(U(!0), V(ze, null, $r(e.player.choices, (f, h) => (U(), V("button", {
            key: `choice_${e.player.choiceId}_${h}`,
            class: De(["choice gold-button", {
                chosen: e.chosenIndex === h,
                selected: f.selected,
                disabled: f.disabled
            }]),
            disabled: f.disabled,
            onClick: zt(g => e.voteClicked(g, h), ["prevent"])
        }, [Ie(H("span", nne, null, 512), [
            [u, f.text]
        ])], 10, rne))), 128))])])), e.writing && !!e.player.factIndex ? (U(), V("div", ine, et(e.$t("FACT.INFO", {
            current: e.player.factIndex + 1,
            max: e.player.factCount
        })), 1)) : Ee("", !0)], 32)])])
    }
    const ane = it(Dre, [
            ["render", sne]
        ]),
        one = tt({
            name: "Switch",
            props: {
                checked: {
                    type: Boolean,
                    required: !0
                }
            }
        }),
        lne = e => (lo("data-v-e61fc9b8"), e = e(), co(), e),
        cne = {
            id: "toggleMode",
            class: "switchContainer"
        },
        une = ["checked"],
        fne = lne(() => H("span", {
            class: "switch"
        }, null, -1));

    function dne(e, t, r, n, s, o) {
        return U(), V("label", cne, [H("input", uo(e.$attrs, {
            class: "input",
            type: "checkbox",
            checked: e.checked,
            onChange: t[0] || (t[0] = l => e.$emit("update:checked", l.target.checked))
        }), null, 16, une), fne])
    }
    const hne = it(one, [
            ["render", dne],
            ["__scopeId", "data-v-e61fc9b8"]
        ]),
        pne = tt({
            components: {
                LobbyActions: wS,
                Switch: hne
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
        gne = {
            class: "lobby scrollable"
        },
        mne = {
            class: "constrain content"
        },
        vne = {
            class: "prompt"
        },
        yne = H("div", {
            class: "hr"
        }, null, -1),
        _ne = {
            class: "mode-choice"
        },
        Ene = {
            class: "avatar-prompt prompt"
        },
        bne = H("div", {
            class: "hr"
        }, null, -1),
        Tne = {
            class: "avatars"
        },
        Sne = ["aria-label", "disabled", "onClick"],
        One = {
            key: 0,
            class: "toggle-action"
        },
        wne = {
            class: "current-mode"
        },
        $ne = {
            for: "toggleMode"
        },
        Cne = {
            key: 0
        },
        Ine = {
            key: 1
        };

    function Ane(e, t, r, n, s, o) {
        var h, g, _, b;
        const l = vr("Switch"),
            u = vr("LobbyActions"),
            f = xt("t");
        return U(), V("div", gne, [H("div", mne, [e.player && e.player.canChooseMode && e.player.presentationModeOn === void 0 ? (U(), V(ze, {
            key: 0
        }, [H("div", vne, et(e.$t("LOBBY.PRESENTATION_PROMPT")), 1), yne, H("div", _ne, [H("button", {
            class: "gold-button modeButton",
            onClick: t[0] || (t[0] = zt($ => e.onModeClick(!1), ["prevent"]))
        }, et(e.$t("LOBBY.PRESENTATION_CHOICE_NO")), 1), H("button", {
            class: "gold-button modeButton manual",
            onClick: t[1] || (t[1] = zt($ => e.onModeClick(!0), ["prevent"]))
        }, et(e.$t("LOBBY.PRESENTATION_CHOICE_YES")), 1)])], 64)) : e.info && !e.info.avatarName ? (U(), V(ze, {
            key: 1
        }, [Ie(H("div", Ene, null, 512), [
            [f, "LOBBY.AVATAR_SELECT_PROMPT"]
        ]), bne, H("div", Tne, [(U(!0), V(ze, null, $r(e.player.avatars, ($, P) => (U(), V("div", {
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
        }, null, 10, Sne)]))), 128))])], 64)) : (U(), V(ze, {
            key: 2
        }, [e.player.canChooseMode ? (U(), V("div", One, [H("div", wne, [Ie(H("label", $ne, null, 512), [
            [f, "LOBBY.PRESENTATION_MODE"]
        ]), (h = e.player) != null && h.presentationModeOn ? (U(), V("span", Cne, et(e.$t("LOBBY.ON")), 1)) : (U(), V("span", Ine, et(e.$t("LOBBY.OFF")), 1))]), H("div", {
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
    const Nne = it(pne, [
            ["render", Ane]
        ]),
        Rne = tt({
            components: {
                GalleryLink: UY,
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
        Pne = e => (lo("data-v-cc0a3df4"), e = e(), co(), e),
        Lne = {
            class: "post-game scrollable"
        },
        kne = {
            class: "constrain"
        },
        Dne = Pne(() => H("div", {
            class: "hr"
        }, null, -1));

    function xne(e, t, r, n, s, o) {
        const l = vr("PostGameActions"),
            u = vr("GalleryLink");
        return U(), V("div", Lne, [H("div", kne, [St(l, {
            player: e.player,
            classes: {
                message: "message",
                action: "action gold-button",
                status: "status"
            }
        }, null, 8, ["player"]), Dne, e.artifact ? (U(), Zr(u, {
            key: 0,
            artifact: e.artifact
        }, null, 8, ["artifact"])) : Ee("", !0)])])
    }
    const Mne = it(Rne, [
            ["render", xne],
            ["__scopeId", "data-v-cc0a3df4"]
        ]),
        Fne = tt({
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
        Bne = {
            class: "ranking scrollable"
        },
        Une = {
            class: "constrain content"
        },
        Gne = {
            class: "prompt"
        },
        jne = {
            key: 0
        },
        Wne = ["disabled"],
        Hne = {
            key: 0
        },
        Kne = {
            class: "prompt"
        },
        Vne = H("div", {
            class: "hr"
        }, null, -1),
        qne = {
            class: "choices"
        },
        Yne = ["disabled", "aria-labelledby", "onClick"],
        zne = ["alt", "src"],
        Xne = ["id"],
        Jne = {
            key: 0,
            class: "up-next"
        },
        Qne = {
            class: "up-next-header"
        },
        Zne = ["alt", "src"],
        eie = {
            key: 0,
            class: "footer"
        },
        tie = {
            class: "constrain"
        };

    function rie(e, t, r, n, s, o) {
        const l = xt("bb"),
            u = xt("t");
        return U(), V("div", Bne, [H("div", Une, [Ie(H("div", Gne, null, 512), [
            [l, e.player.prompt]
        ]), e.audience && e.questionsDone ? Ie((U(), V("div", jne, null, 512)), [
            [u, "CHOOSING.AUDIENCE_THANKS"]
        ]) : Ee("", !0), H("fieldset", {
            disabled: e.isSubmitting || e.questionsDone
        }, [e.currentQuestion ? (U(), V("div", Hne, [Ie(H("div", Kne, null, 512), [
            [l, e.currentQuestion.prompt]
        ]), Vne, H("div", qne, [(U(!0), V(ze, null, $r(e.currentQuestion.choices, (f, h) => (U(), V("div", {
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
        }, [f.photo ? (U(), V("img", {
            key: 0,
            class: "photo",
            alt: f.photo.alt,
            src: e.getItemImage(f.photo)
        }, null, 8, zne)) : Ee("", !0)], 10, Yne), Ie(H("span", {
            id: `title_${e.questionIndex}_${h}`,
            class: "text"
        }, null, 8, Xne), [
            [l, f.text]
        ])]))), 128))]), e.nextPhotos ? (U(), V("div", Jne, [H("div", Qne, [Ie(H("span", null, null, 512), [
            [u, "RANKING.UP_NEXT"]
        ])]), (U(!0), V(ze, null, $r(e.nextPhotos, (f, h) => (U(), V("div", {
            key: `choice_${h}`,
            class: "choice photo-banner half"
        }, [f.photo ? (U(), V("img", {
            key: 0,
            class: "photo",
            alt: f.photo.alt,
            src: e.getItemImage(f.photo)
        }, null, 8, Zne)) : Ee("", !0)]))), 128))])) : Ee("", !0)])) : Ee("", !0)], 8, Wne)]), e.player.footer ? (U(), V("div", eie, [H("div", tie, [Ie(H("span", null, null, 512), [
            [l, e.player.footer]
        ])])])) : Ee("", !0)])
    }
    const nie = it(Fne, [
            ["render", rie]
        ]),
        iie = tt({
            extends: vO,
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
        sie = "main/pp9/antique-freak/assets/d288368c.svg",
        aie = "main/pp9/antique-freak/assets/0808df59.png",
        oie = "main/pp9/antique-freak/assets/2be78b61.png",
        lie = {
            class: "waiting scrollable"
        },
        cie = {
            class: "constrain content"
        },
        uie = {
            key: 1,
            class: "hr"
        },
        fie = {
            key: 2,
            class: "prompt"
        },
        die = {
            class: "photo-banner"
        },
        hie = ["alt", "src"],
        pie = {
            key: 3,
            class: "prompt"
        },
        gie = {
            class: "collection-banner"
        },
        mie = ["alt", "src"],
        vie = {
            key: 0,
            src: aie,
            class: "logo-fly buzz",
            alt: "The fly is hovering!"
        },
        yie = {
            key: 1,
            src: oie,
            class: "logo-fly",
            alt: "A fly, minding its business."
        };

    function _ie(e, t, r, n, s, o) {
        const l = xt("bb");
        return U(), V("div", lie, [H("div", cie, [e.player.message ? Ie((U(), V("p", {
            key: 0,
            class: De(["prompt", e.getPromptClass()])
        }, null, 2)), [
            [l, e.player.message]
        ]) : Ee("", !0), e.hasPhoto ? (U(), V("div", uie)) : Ee("", !0), e.hasPhoto ? (U(), V("div", fie, [H("div", die, [H("img", {
            class: "photo",
            alt: e.player.photo.alt,
            src: e.getItemImage(e.player.photo)
        }, null, 8, hie)])])) : Ee("", !0), e.hasPhotos ? (U(), V("div", pie, [H("div", gie, [(U(!0), V(ze, null, $r(e.player.photo, (u, f) => (U(), V("img", {
            key: `photo_${e.player.choiceId}_${f}`,
            class: "photo half",
            alt: u.alt,
            src: e.getItemImage(u)
        }, null, 8, mie))), 128))])])) : Ee("", !0), e.player.price ? Ie((U(), V("div", {
            key: 4,
            class: De(`${e.player.price.category} price-tag`)
        }, null, 2)), [
            [l, e.player.price.text]
        ]) : Ee("", !0), e.player.photo ? Ee("", !0) : (U(), V("div", {
            key: 5,
            class: "logo-interactive",
            tabIndex: "0",
            onClick: t[0] || (t[0] = (...u) => e.buzzFly && e.buzzFly(...u)),
            onKeypress: t[1] || (t[1] = fo((...u) => e.buzzFly && e.buzzFly(...u), ["enter"]))
        }, [H("img", {
            src: sie,
            class: De(["logo-body", e.bumpLogo && "bump"]),
            alt: "The word 'Junktopia'. The 'K' wears a wizard hat. The 'i' is dotted with a fly."
        }, null, 2), e.flyBuzzing ? (U(), V("img", vie)) : (U(), V("img", yie))], 32))])])
    }
    const Eie = it(iie, [
            ["render", _ie]
        ]),
        bie = tt({
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
                Choosing: kre,
                Fact: ane,
                Lobby: Nne,
                PostGame: Mne,
                Ranking: nie,
                Waiting: Eie
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
        Tie = {
            class: "antiquegame"
        };

    function Sie(e, t, r, n, s, o) {
        return U(), V("div", Tie, [e.isReady && e.screen ? (U(), Zr(Ch(e.screen[0]), uo({
            key: 0,
            role: "main"
        }, e.screen[1]), null, 16)) : Ee("", !0)])
    }
    const Oie = it(bie, [
        ["render", Sie]
    ]);
    Lte({
        MainView: Oie,
        messages: ure
    })
});
export default wie();
//# sourceMappingURL=ec4322e6.js.map