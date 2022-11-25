var lR = Object.defineProperty;
var uR = (e, t, r) => t in e ? lR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var fR = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (uR(e, typeof t != "symbol" ? t + "" : t, r), r);
var Fie = fR((jie, LS) => {
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

    function uh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const dR = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        hR = uh(dR);

    function Jb(e) {
        return !!e || e === ""
    }

    function nl(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Vt(n) ? mR(n) : nl(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Vt(e)) return e;
            if (yt(e)) return e
        }
    }
    const pR = /;(?![^(]*\))/g,
        gR = /:(.+)/;

    function mR(e) {
        const t = {};
        return e.split(pR).forEach(r => {
            if (r) {
                const n = r.split(gR);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function Fe(e) {
        let t = "";
        if (Vt(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = Fe(e[r]);
                n && (t += n + " ")
            } else if (yt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function vR(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = il(e[n], t[n]);
        return r
    }

    function il(e, t) {
        if (e === t) return !0;
        let r = vv(e),
            n = vv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = Va(e), n = Va(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? vR(e, t) : !1;
        if (r = yt(e), n = yt(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                o = Object.keys(t).length;
            if (s !== o) return !1;
            for (const c in e) {
                const u = e.hasOwnProperty(c),
                    f = t.hasOwnProperty(c);
                if (u && !f || !u && f || !il(e[c], t[c])) return !1
            }
        }
        return String(e) === String(t)
    }

    function Zb(e, t) {
        return e.findIndex(r => il(r, t))
    }
    const De = e => Vt(e) ? e : e == null ? "" : ke(e) || yt(e) && (e.toString === tE || !Ke(e.toString)) ? JSON.stringify(e, Qb, 2) : String(e),
        Qb = (e, t) => t && t.__v_isRef ? Qb(e, t.value) : Ds(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : al(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : yt(t) && !ke(t) && !rE(t) ? String(t) : t,
        mt = {},
        xs = [],
        dn = () => {},
        yR = () => !1,
        _R = /^on[^a-z]/,
        sl = e => _R.test(e),
        fh = e => e.startsWith("onUpdate:"),
        nr = Object.assign,
        dh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        bR = Object.prototype.hasOwnProperty,
        rt = (e, t) => bR.call(e, t),
        ke = Array.isArray,
        Ds = e => ao(e) === "[object Map]",
        al = e => ao(e) === "[object Set]",
        vv = e => ao(e) === "[object Date]",
        Ke = e => typeof e == "function",
        Vt = e => typeof e == "string",
        Va = e => typeof e == "symbol",
        yt = e => e !== null && typeof e == "object",
        eE = e => yt(e) && Ke(e.then) && Ke(e.catch),
        tE = Object.prototype.toString,
        ao = e => tE.call(e),
        ER = e => ao(e).slice(8, -1),
        rE = e => ao(e) === "[object Object]",
        hh = e => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Cc = uh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        ol = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        TR = /-(\w)/g,
        In = ol(e => e.replace(TR, (t, r) => r ? r.toUpperCase() : "")),
        SR = /\B([A-Z])/g,
        os = ol(e => e.replace(SR, "-$1").toLowerCase()),
        cl = ol(e => e.charAt(0).toUpperCase() + e.slice(1)),
        $c = ol(e => e ? `on${cl(e)}` : ""),
        qa = (e, t) => !Object.is(e, t),
        Ac = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Dc = (e, t, r) => {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: r
            })
        },
        Mc = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        };
    let yv;
    const wR = () => yv || (yv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let En;
    class nE {
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

    function OR(e) {
        return new nE(e)
    }

    function IR(e, t = En) {
        t && t.active && t.effects.push(e)
    }
    const ph = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        iE = e => (e.w & hi) > 0,
        sE = e => (e.n & hi) > 0,
        CR = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= hi
        },
        $R = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    iE(s) && !sE(s) ? s.delete(e) : t[r++] = s, s.w &= ~hi, s.n &= ~hi
                }
                t.length = r
            }
        },
        id = new WeakMap;
    let ka = 0,
        hi = 1;
    const sd = 30;
    let ln;
    const Qi = Symbol(""),
        ad = Symbol("");
    class gh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, IR(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let t = ln,
                r = li;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = ln, ln = this, li = !0, hi = 1 << ++ka, ka <= sd ? CR(this) : _v(this), this.fn()
            } finally {
                ka <= sd && $R(this), hi = 1 << --ka, ln = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            ln === this ? this.deferStop = !0 : this.active && (_v(this), this.onStop && this.onStop(), this.active = !1)
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
    let li = !0;
    const aE = [];

    function ta() {
        aE.push(li), li = !1
    }

    function ra() {
        const e = aE.pop();
        li = e === void 0 ? !0 : e
    }

    function Mr(e, t, r) {
        if (li && ln) {
            let n = id.get(e);
            n || id.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = ph()), oE(s)
        }
    }

    function oE(e, t) {
        let r = !1;
        ka <= sd ? sE(e) || (e.n |= hi, r = !iE(e)) : r = !e.has(ln), r && (e.add(ln), ln.deps.push(e))
    }

    function Bn(e, t, r, n, s, o) {
        const c = id.get(e);
        if (!c) return;
        let u = [];
        if (t === "clear") u = [...c.values()];
        else if (r === "length" && ke(e)) c.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(c.get(r)), t) {
            case "add":
                ke(e) ? hh(r) && u.push(c.get("length")) : (u.push(c.get(Qi)), Ds(e) && u.push(c.get(ad)));
                break;
            case "delete":
                ke(e) || (u.push(c.get(Qi)), Ds(e) && u.push(c.get(ad)));
                break;
            case "set":
                Ds(e) && u.push(c.get(Qi));
                break
        }
        if (u.length === 1) u[0] && od(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            od(ph(f))
        }
    }

    function od(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && bv(n);
        for (const n of r) n.computed || bv(n)
    }

    function bv(e, t) {
        (e !== ln || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const AR = uh("__proto__,__v_isRef,__isVue"),
        cE = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Va)),
        NR = mh(),
        RR = mh(!1, !0),
        LR = mh(!0),
        Ev = kR();

    function kR() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = ot(this);
                for (let o = 0, c = this.length; o < c; o++) Mr(n, "get", o + "");
                const s = n[t](...r);
                return s === -1 || s === !1 ? n[t](...r.map(ot)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...r) {
                ta();
                const n = ot(this)[t].apply(this, r);
                return ra(), n
            }
        }), e
    }

    function mh(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? zR : hE : t ? dE : fE).get(n)) return n;
            const c = ke(n);
            if (!e && c && rt(Ev, s)) return Reflect.get(Ev, s, o);
            const u = Reflect.get(n, s, o);
            return (Va(s) ? cE.has(s) : AR(s)) || (e || Mr(n, "get", s), t) ? u : tr(u) ? c && hh(s) ? u : u.value : yt(u) ? e ? pE(u) : jn(u) : u
        }
    }
    const PR = lE(),
        xR = lE(!0);

    function lE(e = !1) {
        return function(r, n, s, o) {
            let c = r[n];
            if (qs(c) && tr(c) && !tr(s)) return !1;
            if (!e && (!Uc(s) && !qs(s) && (c = ot(c), s = ot(s)), !ke(r) && tr(c) && !tr(s))) return c.value = s, !0;
            const u = ke(r) && hh(n) ? Number(n) < r.length : rt(r, n),
                f = Reflect.set(r, n, s, o);
            return r === ot(o) && (u ? qa(s, c) && Bn(r, "set", n, s) : Bn(r, "add", n, s)), f
        }
    }

    function DR(e, t) {
        const r = rt(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Bn(e, "delete", t, void 0), n
    }

    function MR(e, t) {
        const r = Reflect.has(e, t);
        return (!Va(t) || !cE.has(t)) && Mr(e, "has", t), r
    }

    function UR(e) {
        return Mr(e, "iterate", ke(e) ? "length" : Qi), Reflect.ownKeys(e)
    }
    const uE = {
            get: NR,
            set: PR,
            deleteProperty: DR,
            has: MR,
            ownKeys: UR
        },
        FR = {
            get: LR,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        BR = nr({}, uE, {
            get: RR,
            set: xR
        }),
        vh = e => e,
        ll = e => Reflect.getPrototypeOf(e);

    function cc(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = ot(e),
            o = ot(t);
        r || (t !== o && Mr(s, "get", t), Mr(s, "get", o));
        const {
            has: c
        } = ll(s), u = n ? vh : r ? bh : Ya;
        if (c.call(s, t)) return u(e.get(t));
        if (c.call(s, o)) return u(e.get(o));
        e !== s && e.get(t)
    }

    function lc(e, t = !1) {
        const r = this.__v_raw,
            n = ot(r),
            s = ot(e);
        return t || (e !== s && Mr(n, "has", e), Mr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function uc(e, t = !1) {
        return e = e.__v_raw, !t && Mr(ot(e), "iterate", Qi), Reflect.get(e, "size", e)
    }

    function Tv(e) {
        e = ot(e);
        const t = ot(this);
        return ll(t).has.call(t, e) || (t.add(e), Bn(t, "add", e, e)), this
    }

    function Sv(e, t) {
        t = ot(t);
        const r = ot(this),
            {
                has: n,
                get: s
            } = ll(r);
        let o = n.call(r, e);
        o || (e = ot(e), o = n.call(r, e));
        const c = s.call(r, e);
        return r.set(e, t), o ? qa(t, c) && Bn(r, "set", e, t) : Bn(r, "add", e, t), this
    }

    function wv(e) {
        const t = ot(this),
            {
                has: r,
                get: n
            } = ll(t);
        let s = r.call(t, e);
        s || (e = ot(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Bn(t, "delete", e, void 0), o
    }

    function Ov() {
        const e = ot(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Bn(e, "clear", void 0, void 0), r
    }

    function fc(e, t) {
        return function(n, s) {
            const o = this,
                c = o.__v_raw,
                u = ot(c),
                f = t ? vh : e ? bh : Ya;
            return !e && Mr(u, "iterate", Qi), c.forEach((h, m) => n.call(s, f(h), f(m), o))
        }
    }

    function dc(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                o = ot(s),
                c = Ds(o),
                u = e === "entries" || e === Symbol.iterator && c,
                f = e === "keys" && c,
                h = s[e](...n),
                m = r ? vh : t ? bh : Ya;
            return !t && Mr(o, "iterate", f ? ad : Qi), {
                next() {
                    const {
                        value: y,
                        done: E
                    } = h.next();
                    return E ? {
                        value: y,
                        done: E
                    } : {
                        value: u ? [m(y[0]), m(y[1])] : m(y),
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

    function jR() {
        const e = {
                get(o) {
                    return cc(this, o)
                },
                get size() {
                    return uc(this)
                },
                has: lc,
                add: Tv,
                set: Sv,
                delete: wv,
                clear: Ov,
                forEach: fc(!1, !1)
            },
            t = {
                get(o) {
                    return cc(this, o, !1, !0)
                },
                get size() {
                    return uc(this)
                },
                has: lc,
                add: Tv,
                set: Sv,
                delete: wv,
                clear: Ov,
                forEach: fc(!1, !0)
            },
            r = {
                get(o) {
                    return cc(this, o, !0)
                },
                get size() {
                    return uc(this, !0)
                },
                has(o) {
                    return lc.call(this, o, !0)
                },
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
                forEach: fc(!0, !1)
            },
            n = {
                get(o) {
                    return cc(this, o, !0, !0)
                },
                get size() {
                    return uc(this, !0)
                },
                has(o) {
                    return lc.call(this, o, !0)
                },
                add: Qn("add"),
                set: Qn("set"),
                delete: Qn("delete"),
                clear: Qn("clear"),
                forEach: fc(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = dc(o, !1, !1), r[o] = dc(o, !0, !1), t[o] = dc(o, !1, !0), n[o] = dc(o, !0, !0)
        }), [e, r, t, n]
    }
    const [GR, WR, KR, HR] = jR();

    function yh(e, t) {
        const r = t ? e ? HR : KR : e ? WR : GR;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(rt(r, s) && s in n ? r : n, s, o)
    }
    const VR = {
            get: yh(!1, !1)
        },
        qR = {
            get: yh(!1, !0)
        },
        YR = {
            get: yh(!0, !1)
        },
        fE = new WeakMap,
        dE = new WeakMap,
        hE = new WeakMap,
        zR = new WeakMap;

    function XR(e) {
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

    function JR(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : XR(ER(e))
    }

    function jn(e) {
        return qs(e) ? e : _h(e, !1, uE, VR, fE)
    }

    function ZR(e) {
        return _h(e, !1, BR, qR, dE)
    }

    function pE(e) {
        return _h(e, !0, FR, YR, hE)
    }

    function _h(e, t, r, n, s) {
        if (!yt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const c = JR(e);
        if (c === 0) return e;
        const u = new Proxy(e, c === 2 ? n : r);
        return s.set(e, u), u
    }

    function Ms(e) {
        return qs(e) ? Ms(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function qs(e) {
        return !!(e && e.__v_isReadonly)
    }

    function Uc(e) {
        return !!(e && e.__v_isShallow)
    }

    function gE(e) {
        return Ms(e) || qs(e)
    }

    function ot(e) {
        const t = e && e.__v_raw;
        return t ? ot(t) : e
    }

    function mE(e) {
        return Dc(e, "__v_skip", !0), e
    }
    const Ya = e => yt(e) ? jn(e) : e,
        bh = e => yt(e) ? pE(e) : e;

    function vE(e) {
        li && ln && (e = ot(e), oE(e.dep || (e.dep = ph())))
    }

    function yE(e, t) {
        e = ot(e), e.dep && od(e.dep)
    }

    function tr(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function un(e) {
        return _E(e, !1)
    }

    function QR(e) {
        return _E(e, !0)
    }

    function _E(e, t) {
        return tr(e) ? e : new eL(e, t)
    }
    class eL {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : ot(t), this._value = r ? t : Ya(t)
        }
        get value() {
            return vE(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || Uc(t) || qs(t);
            t = r ? t : ot(t), qa(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Ya(t), yE(this))
        }
    }

    function tL(e) {
        return tr(e) ? e.value : e
    }
    const rL = {
        get: (e, t, r) => tL(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return tr(s) && !tr(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function bE(e) {
        return Ms(e) ? e : new Proxy(e, rL)
    }
    var EE;
    class nL {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[EE] = !1, this._dirty = !0, this.effect = new gh(t, () => {
                this._dirty || (this._dirty = !0, yE(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = ot(this);
            return vE(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    EE = "__v_isReadonly";

    function iL(e, t, r = !1) {
        let n, s;
        const o = Ke(e);
        return o ? (n = e, s = dn) : (n = e.get, s = e.set), new nL(n, s, o || !s, r)
    }

    function ui(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (o) {
            ul(o, t, r)
        }
        return s
    }

    function Jr(e, t, r, n) {
        if (Ke(e)) {
            const o = ui(e, t, r, n);
            return o && eE(o) && o.catch(c => {
                ul(c, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Jr(e[o], t, r, n));
        return s
    }

    function ul(e, t, r, n = !0) {
        const s = t ? t.vnode : null;
        if (t) {
            let o = t.parent;
            const c = t.proxy,
                u = r;
            for (; o;) {
                const h = o.ec;
                if (h) {
                    for (let m = 0; m < h.length; m++)
                        if (h[m](e, c, u) === !1) return
                }
                o = o.parent
            }
            const f = t.appContext.config.errorHandler;
            if (f) {
                ui(f, null, 10, [e, c, u]);
                return
            }
        }
        sL(e, r, s, n)
    }

    function sL(e, t, r, n = !0) {
        console.error(e)
    }
    let za = !1,
        cd = !1;
    const cr = [];
    let On = 0;
    const Us = [];
    let Mn = null,
        Vi = 0;
    const TE = Promise.resolve();
    let Eh = null;

    function aL(e) {
        const t = Eh || TE;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function oL(e) {
        let t = On + 1,
            r = cr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Xa(cr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function Th(e) {
        (!cr.length || !cr.includes(e, za && e.allowRecurse ? On + 1 : On)) && (e.id == null ? cr.push(e) : cr.splice(oL(e.id), 0, e), SE())
    }

    function SE() {
        !za && !cd && (cd = !0, Eh = TE.then(OE))
    }

    function cL(e) {
        const t = cr.indexOf(e);
        t > On && cr.splice(t, 1)
    }

    function lL(e) {
        ke(e) ? Us.push(...e) : (!Mn || !Mn.includes(e, e.allowRecurse ? Vi + 1 : Vi)) && Us.push(e), SE()
    }

    function Iv(e, t = za ? On + 1 : 0) {
        for (; t < cr.length; t++) {
            const r = cr[t];
            r && r.pre && (cr.splice(t, 1), t--, r())
        }
    }

    function wE(e) {
        if (Us.length) {
            const t = [...new Set(Us)];
            if (Us.length = 0, Mn) {
                Mn.push(...t);
                return
            }
            for (Mn = t, Mn.sort((r, n) => Xa(r) - Xa(n)), Vi = 0; Vi < Mn.length; Vi++) Mn[Vi]();
            Mn = null, Vi = 0
        }
    }
    const Xa = e => e.id == null ? 1 / 0 : e.id,
        uL = (e, t) => {
            const r = Xa(e) - Xa(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function OE(e) {
        cd = !1, za = !0, cr.sort(uL);
        const t = dn;
        try {
            for (On = 0; On < cr.length; On++) {
                const r = cr[On];
                r && r.active !== !1 && ui(r, null, 14)
            }
        } finally {
            On = 0, cr.length = 0, wE(), za = !1, Eh = null, (cr.length || Us.length) && OE()
        }
    }

    function fL(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || mt;
        let s = r;
        const o = t.startsWith("update:"),
            c = o && t.slice(7);
        if (c && c in n) {
            const m = `${c==="modelValue"?"model":c}Modifiers`,
                {
                    number: y,
                    trim: E
                } = n[m] || mt;
            E && (s = r.map(I => I.trim())), y && (s = r.map(Mc))
        }
        let u, f = n[u = $c(t)] || n[u = $c(In(t))];
        !f && o && (f = n[u = $c(os(t))]), f && Jr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Jr(h, e, 6, s)
        }
    }

    function IE(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let c = {},
            u = !1;
        if (!Ke(e)) {
            const f = h => {
                const m = IE(h, t, !0);
                m && (u = !0, nr(c, m))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (yt(e) && n.set(e, null), null) : (ke(o) ? o.forEach(f => c[f] = null) : nr(c, o), yt(e) && n.set(e, c), c)
    }

    function fl(e, t) {
        return !e || !sl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), rt(e, t[0].toLowerCase() + t.slice(1)) || rt(e, os(t)) || rt(e, t))
    }
    let lr = null,
        dl = null;

    function Fc(e) {
        const t = lr;
        return lr = e, dl = e && e.type.__scopeId || null, t
    }

    function hl(e) {
        dl = e
    }

    function pl() {
        dl = null
    }

    function Sh(e, t = lr, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && Mv(-1);
            const o = Fc(t),
                c = e(...s);
            return Fc(o), n._d && Mv(1), c
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
            render: m,
            renderCache: y,
            data: E,
            setupState: I,
            ctx: k,
            inheritAttrs: M
        } = e;
        let j, C;
        const H = Fc(e);
        try {
            if (r.shapeFlag & 4) {
                const W = s || n;
                j = Sn(m.call(W, W, y, o, I, E, k)), C = f
            } else {
                const W = t;
                j = Sn(W.length > 1 ? W(o, {
                    attrs: f,
                    slots: u,
                    emit: h
                }) : W(o, null)), C = t.props ? f : dL(f)
            }
        } catch (W) {
            Ua.length = 0, ul(W, e, 1), j = at(Zr)
        }
        let X = j;
        if (C && M !== !1) {
            const W = Object.keys(C),
                {
                    shapeFlag: G
                } = X;
            W.length && G & 7 && (c && W.some(fh) && (C = hL(C, c)), X = pi(X, C))
        }
        return r.dirs && (X = pi(X), X.dirs = X.dirs ? X.dirs.concat(r.dirs) : r.dirs), r.transition && (X.transition = r.transition), j = X, Fc(H), j
    }
    const dL = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || sl(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        hL = (e, t) => {
            const r = {};
            for (const n in e)(!fh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function pL(e, t, r) {
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
            if (f & 16) return n ? Cv(n, c, h) : !!c;
            if (f & 8) {
                const m = t.dynamicProps;
                for (let y = 0; y < m.length; y++) {
                    const E = m[y];
                    if (c[E] !== n[E] && !fl(h, E)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Cv(n, c, h) : !0 : !!c;
        return !1
    }

    function Cv(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !fl(r, o)) return !0
        }
        return !1
    }

    function gL({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const mL = e => e.__isSuspense;

    function vL(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : lL(e)
    }

    function yL(e, t) {
        if (Xt) {
            let r = Xt.provides;
            const n = Xt.parent && Xt.parent.provides;
            n === r && (r = Xt.provides = Object.create(n)), r[e] = t
        }
    }

    function es(e, t, r = !1) {
        const n = Xt || lr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && Ke(t) ? t.call(n.proxy) : t
        }
    }

    function _L(e, t) {
        return wh(e, null, {
            flush: "post"
        })
    }
    const $v = {};

    function ts(e, t, r) {
        return wh(e, t, r)
    }

    function wh(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: c
    } = mt) {
        const u = Xt;
        let f, h = !1,
            m = !1;
        if (tr(e) ? (f = () => e.value, h = Uc(e)) : Ms(e) ? (f = () => e, n = !0) : ke(e) ? (m = !0, h = e.some(C => Ms(C) || Uc(C)), f = () => e.map(C => {
                if (tr(C)) return C.value;
                if (Ms(C)) return Zi(C);
                if (Ke(C)) return ui(C, u, 2)
            })) : Ke(e) ? t ? f = () => ui(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return y && y(), Jr(e, u, 3, [E])
            } : f = dn, t && n) {
            const C = f;
            f = () => Zi(C())
        }
        let y, E = C => {
            y = j.onStop = () => {
                ui(C, u, 4)
            }
        };
        if (Za) return E = dn, t ? r && Jr(t, u, 3, [f(), m ? [] : void 0, E]) : f(), dn;
        let I = m ? [] : $v;
        const k = () => {
            if (!!j.active)
                if (t) {
                    const C = j.run();
                    (n || h || (m ? C.some((H, X) => qa(H, I[X])) : qa(C, I))) && (y && y(), Jr(t, u, 3, [C, I === $v ? void 0 : I, E]), I = C)
                } else j.run()
        };
        k.allowRecurse = !!t;
        let M;
        s === "sync" ? M = k : s === "post" ? M = () => Or(k, u && u.suspense) : (k.pre = !0, u && (k.id = u.uid), M = () => Th(k));
        const j = new gh(f, M);
        return t ? r ? k() : I = j.run() : s === "post" ? Or(j.run.bind(j), u && u.suspense) : j.run(), () => {
            j.stop(), u && u.scope && dh(u.scope.effects, j)
        }
    }

    function bL(e, t, r) {
        const n = this.proxy,
            s = Vt(e) ? e.includes(".") ? CE(n, e) : () => n[e] : e.bind(n, n);
        let o;
        Ke(t) ? o = t : (o = t.handler, r = t);
        const c = Xt;
        Ys(this);
        const u = wh(s, o.bind(n), r);
        return c ? Ys(c) : rs(), u
    }

    function CE(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Zi(e, t) {
        if (!yt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), tr(e)) Zi(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Zi(e[r], t);
        else if (al(e) || Ds(e)) e.forEach(r => {
            Zi(r, t)
        });
        else if (rE(e))
            for (const r in e) Zi(e[r], t);
        return e
    }

    function EL() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return vl(() => {
            e.isMounted = !0
        }), kE(() => {
            e.isUnmounting = !0
        }), e
    }
    const zr = [Function, Array],
        TL = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: zr,
                onEnter: zr,
                onAfterEnter: zr,
                onEnterCancelled: zr,
                onBeforeLeave: zr,
                onLeave: zr,
                onAfterLeave: zr,
                onLeaveCancelled: zr,
                onBeforeAppear: zr,
                onAppear: zr,
                onAfterAppear: zr,
                onAppearCancelled: zr
            },
            setup(e, {
                slots: t
            }) {
                const r = gi(),
                    n = EL();
                let s;
                return () => {
                    const o = t.default && NE(t.default(), !0);
                    if (!o || !o.length) return;
                    let c = o[0];
                    if (o.length > 1) {
                        for (const M of o)
                            if (M.type !== Zr) {
                                c = M;
                                break
                            }
                    }
                    const u = ot(e),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return hf(c);
                    const h = Av(c);
                    if (!h) return hf(c);
                    const m = ld(h, u, n, r);
                    ud(h, m);
                    const y = r.subTree,
                        E = y && Av(y);
                    let I = !1;
                    const {
                        getTransitionKey: k
                    } = h.type;
                    if (k) {
                        const M = k();
                        s === void 0 ? s = M : M !== s && (s = M, I = !0)
                    }
                    if (E && E.type !== Zr && (!qi(h, E) || I)) {
                        const M = ld(E, u, n, r);
                        if (ud(E, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, hf(c);
                        f === "in-out" && h.type !== Zr && (M.delayLeave = (j, C, H) => {
                            const X = AE(n, E);
                            X[String(E.key)] = E, j._leaveCb = () => {
                                C(), j._leaveCb = void 0, delete m.delayedLeave
                            }, m.delayedLeave = H
                        })
                    }
                    return c
                }
            }
        },
        $E = TL;

    function AE(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function ld(e, t, r, n) {
        const {
            appear: s,
            mode: o,
            persisted: c = !1,
            onBeforeEnter: u,
            onEnter: f,
            onAfterEnter: h,
            onEnterCancelled: m,
            onBeforeLeave: y,
            onLeave: E,
            onAfterLeave: I,
            onLeaveCancelled: k,
            onBeforeAppear: M,
            onAppear: j,
            onAfterAppear: C,
            onAppearCancelled: H
        } = t, X = String(e.key), W = AE(r, e), G = (ce, ue) => {
            ce && Jr(ce, n, 9, ue)
        }, Z = (ce, ue) => {
            const $e = ue[1];
            G(ce, ue), ke(ce) ? ce.every(Ce => Ce.length <= 1) && $e() : ce.length <= 1 && $e()
        }, oe = {
            mode: o,
            persisted: c,
            beforeEnter(ce) {
                let ue = u;
                if (!r.isMounted)
                    if (s) ue = M || u;
                    else return;
                ce._leaveCb && ce._leaveCb(!0);
                const $e = W[X];
                $e && qi(e, $e) && $e.el._leaveCb && $e.el._leaveCb(), G(ue, [ce])
            },
            enter(ce) {
                let ue = f,
                    $e = h,
                    Ce = m;
                if (!r.isMounted)
                    if (s) ue = j || f, $e = C || h, Ce = H || m;
                    else return;
                let fe = !1;
                const Ie = ce._enterCb = U => {
                    fe || (fe = !0, U ? G(Ce, [ce]) : G($e, [ce]), oe.delayedLeave && oe.delayedLeave(), ce._enterCb = void 0)
                };
                ue ? Z(ue, [ce, Ie]) : Ie()
            },
            leave(ce, ue) {
                const $e = String(e.key);
                if (ce._enterCb && ce._enterCb(!0), r.isUnmounting) return ue();
                G(y, [ce]);
                let Ce = !1;
                const fe = ce._leaveCb = Ie => {
                    Ce || (Ce = !0, ue(), Ie ? G(k, [ce]) : G(I, [ce]), ce._leaveCb = void 0, W[$e] === e && delete W[$e])
                };
                W[$e] = e, E ? Z(E, [ce, fe]) : fe()
            },
            clone(ce) {
                return ld(ce, t, r, n)
            }
        };
        return oe
    }

    function hf(e) {
        if (gl(e)) return e = pi(e), e.children = null, e
    }

    function Av(e) {
        return gl(e) ? e.children ? e.children[0] : void 0 : e
    }

    function ud(e, t) {
        e.shapeFlag & 6 && e.component ? ud(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function NE(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let c = e[o];
            const u = r == null ? c.key : String(r) + String(c.key != null ? c.key : o);
            c.type === ze ? (c.patchFlag & 128 && s++, n = n.concat(NE(c.children, t, u))) : (t || c.type !== Zr) && n.push(u != null ? pi(c, {
                key: u
            }) : c)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function Je(e) {
        return Ke(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Da = e => !!e.type.__asyncLoader,
        gl = e => e.type.__isKeepAlive;

    function SL(e, t) {
        RE(e, "a", t)
    }

    function wL(e, t) {
        RE(e, "da", t)
    }

    function RE(e, t, r = Xt) {
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
            for (; s && s.parent;) gl(s.parent.vnode) && OL(n, t, r, s), s = s.parent
        }
    }

    function OL(e, t, r, n) {
        const s = ml(t, e, n, !0);
        yl(() => {
            dh(n[t], s)
        }, r)
    }

    function ml(e, t, r = Xt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...c) => {
                    if (r.isUnmounted) return;
                    ta(), Ys(r);
                    const u = Jr(t, r, e, c);
                    return rs(), ra(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Gn = e => (t, r = Xt) => (!Za || e === "sp") && ml(e, t, r),
        LE = Gn("bm"),
        vl = Gn("m"),
        IL = Gn("bu"),
        CL = Gn("u"),
        kE = Gn("bum"),
        yl = Gn("um"),
        $L = Gn("sp"),
        AL = Gn("rtg"),
        NL = Gn("rtc");

    function RL(e, t = Xt) {
        ml("ec", e, t)
    }

    function qe(e, t) {
        const r = lr;
        if (r === null) return e;
        const n = Tl(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let o = 0; o < t.length; o++) {
            let [c, u, f, h = mt] = t[o];
            Ke(c) && (c = {
                mounted: c,
                updated: c
            }), c.deep && Zi(u), s.push({
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

    function Di(e, t, r, n) {
        const s = e.dirs,
            o = t && t.dirs;
        for (let c = 0; c < s.length; c++) {
            const u = s[c];
            o && (u.oldValue = o[c].value);
            let f = u.dir[n];
            f && (ta(), Jr(f, r, 8, [e.el, u, e, t]), ra())
        }
    }
    const Oh = "components",
        LL = "directives";

    function vt(e, t) {
        return Ch(Oh, e, !0, t) || e
    }
    const PE = Symbol();

    function Ih(e) {
        return Vt(e) ? Ch(Oh, e, !1) || e : e || PE
    }

    function Kt(e) {
        return Ch(LL, e)
    }

    function Ch(e, t, r = !0, n = !1) {
        const s = lr || Xt;
        if (s) {
            const o = s.type;
            if (e === Oh) {
                const u = ck(o, !1);
                if (u && (u === t || u === In(t) || u === cl(In(t)))) return o
            }
            const c = Nv(s[e] || o[e], t) || Nv(s.appContext[e], t);
            return !c && n ? o : c
        }
    }

    function Nv(e, t) {
        return e && (e[t] || e[In(t)] || e[cl(In(t))])
    }

    function Qr(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (ke(e) || Vt(e)) {
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
                    const h = c[u];
                    s[u] = t(e[h], h, u, o && o[u])
                }
            }
        else s = [];
        return r && (r[n] = s), s
    }

    function kL(e, t, r = {}, n, s) {
        if (lr.isCE || lr.parent && Da(lr.parent) && lr.parent.isCE) return at("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), F();
        const c = o && xE(o(r)),
            u = Nt(ze, {
                key: r.key || c && c.key || `_${t}`
            }, c || (n ? n() : []), c && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function xE(e) {
        return e.some(t => Gc(t) ? !(t.type === Zr || t.type === ze && !xE(t.children)) : !0) ? e : null
    }

    function PL(e, t) {
        const r = {};
        for (const n in e) r[t && /[A-Z]/.test(n) ? `on:${n}` : $c(n)] = e[n];
        return r
    }
    const fd = e => e ? qE(e) ? Tl(e) || e.proxy : fd(e.parent) : null,
        Bc = nr(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => fd(e.parent),
            $root: e => fd(e.root),
            $emit: e => e.emit,
            $options: e => $h(e),
            $forceUpdate: e => e.f || (e.f = () => Th(e.update)),
            $nextTick: e => e.n || (e.n = aL.bind(e.proxy)),
            $watch: e => bL.bind(e)
        }),
        xL = {
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
                    const I = c[t];
                    if (I !== void 0) switch (I) {
                        case 1:
                            return n[t];
                        case 2:
                            return s[t];
                        case 4:
                            return r[t];
                        case 3:
                            return o[t]
                    } else {
                        if (n !== mt && rt(n, t)) return c[t] = 1, n[t];
                        if (s !== mt && rt(s, t)) return c[t] = 2, s[t];
                        if ((h = e.propsOptions[0]) && rt(h, t)) return c[t] = 3, o[t];
                        if (r !== mt && rt(r, t)) return c[t] = 4, r[t];
                        dd && (c[t] = 0)
                    }
                }
                const m = Bc[t];
                let y, E;
                if (m) return t === "$attrs" && Mr(e, "get", t), m(e);
                if ((y = u.__cssModules) && (y = y[t])) return y;
                if (r !== mt && rt(r, t)) return c[t] = 4, r[t];
                if (E = f.config.globalProperties, rt(E, t)) return E[t]
            },
            set({
                _: e
            }, t, r) {
                const {
                    data: n,
                    setupState: s,
                    ctx: o
                } = e;
                return s !== mt && rt(s, t) ? (s[t] = r, !0) : n !== mt && rt(n, t) ? (n[t] = r, !0) : rt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0)
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
                return !!r[c] || e !== mt && rt(e, c) || t !== mt && rt(t, c) || (u = o[0]) && rt(u, c) || rt(n, c) || rt(Bc, c) || rt(s.config.globalProperties, c)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : rt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let dd = !0;

    function DL(e) {
        const t = $h(e),
            r = e.proxy,
            n = e.ctx;
        dd = !1, t.beforeCreate && Rv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: o,
            methods: c,
            watch: u,
            provide: f,
            inject: h,
            created: m,
            beforeMount: y,
            mounted: E,
            beforeUpdate: I,
            updated: k,
            activated: M,
            deactivated: j,
            beforeDestroy: C,
            beforeUnmount: H,
            destroyed: X,
            unmounted: W,
            render: G,
            renderTracked: Z,
            renderTriggered: oe,
            errorCaptured: ce,
            serverPrefetch: ue,
            expose: $e,
            inheritAttrs: Ce,
            components: fe,
            directives: Ie,
            filters: U
        } = t;
        if (h && ML(h, n, null, e.appContext.config.unwrapInjectedRef), c)
            for (const be in c) {
                const ve = c[be];
                Ke(ve) && (n[be] = ve.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            yt(be) && (e.data = jn(be))
        }
        if (dd = !0, o)
            for (const be in o) {
                const ve = o[be],
                    Se = Ke(ve) ? ve.bind(r, r) : Ke(ve.get) ? ve.get.bind(r, r) : dn,
                    Me = !Ke(ve) && Ke(ve.set) ? ve.set.bind(r) : dn,
                    Ge = Dr({
                        get: Se,
                        set: Me
                    });
                Object.defineProperty(n, be, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Ge.value,
                    set: nt => Ge.value = nt
                })
            }
        if (u)
            for (const be in u) DE(u[be], n, r, be);
        if (f) {
            const be = Ke(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ve => {
                yL(ve, be[ve])
            })
        }
        m && Rv(m, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Se => be(Se.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(LE, y), de(vl, E), de(IL, I), de(CL, k), de(SL, M), de(wL, j), de(RL, ce), de(NL, Z), de(AL, oe), de(kE, H), de(yl, W), de($L, ue), ke($e))
            if ($e.length) {
                const be = e.exposed || (e.exposed = {});
                $e.forEach(ve => {
                    Object.defineProperty(be, ve, {
                        get: () => r[ve],
                        set: Se => r[ve] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        G && e.render === dn && (e.render = G), Ce != null && (e.inheritAttrs = Ce), fe && (e.components = fe), Ie && (e.directives = Ie)
    }

    function ML(e, t, r = dn, n = !1) {
        ke(e) && (e = hd(e));
        for (const s in e) {
            const o = e[s];
            let c;
            yt(o) ? "default" in o ? c = es(o.from || s, o.default, !0) : c = es(o.from || s) : c = es(o), tr(c) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => c.value,
                set: u => c.value = u
            }) : t[s] = c
        }
    }

    function Rv(e, t, r) {
        Jr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function DE(e, t, r, n) {
        const s = n.includes(".") ? CE(r, n) : () => r[n];
        if (Vt(e)) {
            const o = t[e];
            Ke(o) && ts(s, o)
        } else if (Ke(e)) ts(s, e.bind(r));
        else if (yt(e))
            if (ke(e)) e.forEach(o => DE(o, t, r, n));
            else {
                const o = Ke(e.handler) ? e.handler.bind(r) : t[e.handler];
                Ke(o) && ts(s, o, e)
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
                    optionMergeStrategies: c
                }
            } = e.appContext,
            u = o.get(t);
        let f;
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => jc(f, h, c, !0)), jc(f, t, c)), yt(t) && o.set(t, f), f
    }

    function jc(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && jc(e, o, r, !0), s && s.forEach(c => jc(e, c, r, !0));
        for (const c in t)
            if (!(n && c === "expose")) {
                const u = UL[c] || r && r[c];
                e[c] = u ? u(e[c], t[c]) : t[c]
            } return e
    }
    const UL = {
        data: Lv,
        props: Wi,
        emits: Wi,
        methods: Wi,
        computed: Wi,
        beforeCreate: mr,
        created: mr,
        beforeMount: mr,
        mounted: mr,
        beforeUpdate: mr,
        updated: mr,
        beforeDestroy: mr,
        beforeUnmount: mr,
        destroyed: mr,
        unmounted: mr,
        activated: mr,
        deactivated: mr,
        errorCaptured: mr,
        serverPrefetch: mr,
        components: Wi,
        directives: Wi,
        watch: BL,
        provide: Lv,
        inject: FL
    };

    function Lv(e, t) {
        return t ? e ? function() {
            return nr(Ke(e) ? e.call(this, this) : e, Ke(t) ? t.call(this, this) : t)
        } : t : e
    }

    function FL(e, t) {
        return Wi(hd(e), hd(t))
    }

    function hd(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
            return t
        }
        return e
    }

    function mr(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function Wi(e, t) {
        return e ? nr(nr(Object.create(null), e), t) : t
    }

    function BL(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = nr(Object.create(null), e);
        for (const n in t) r[n] = mr(e[n], t[n]);
        return r
    }

    function jL(e, t, r, n = !1) {
        const s = {},
            o = {};
        Dc(o, bl, 1), e.propsDefaults = Object.create(null), ME(e, t, s, o);
        for (const c in e.propsOptions[0]) c in s || (s[c] = void 0);
        r ? e.props = n ? s : ZR(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function GL(e, t, r, n) {
        const {
            props: s,
            attrs: o,
            vnode: {
                patchFlag: c
            }
        } = e, u = ot(s), [f] = e.propsOptions;
        let h = !1;
        if ((n || c > 0) && !(c & 16)) {
            if (c & 8) {
                const m = e.vnode.dynamicProps;
                for (let y = 0; y < m.length; y++) {
                    let E = m[y];
                    if (fl(e.emitsOptions, E)) continue;
                    const I = t[E];
                    if (f)
                        if (rt(o, E)) I !== o[E] && (o[E] = I, h = !0);
                        else {
                            const k = In(E);
                            s[k] = pd(f, u, k, I, e, !1)
                        }
                    else I !== o[E] && (o[E] = I, h = !0)
                }
            }
        } else {
            ME(e, t, s, o) && (h = !0);
            let m;
            for (const y in u)(!t || !rt(t, y) && ((m = os(y)) === y || !rt(t, m))) && (f ? r && (r[y] !== void 0 || r[m] !== void 0) && (s[y] = pd(f, u, y, void 0, e, !0)) : delete s[y]);
            if (o !== u)
                for (const y in o)(!t || !rt(t, y) && !0) && (delete o[y], h = !0)
        }
        h && Bn(e, "set", "$attrs")
    }

    function ME(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let c = !1,
            u;
        if (t)
            for (let f in t) {
                if (Cc(f)) continue;
                const h = t[f];
                let m;
                s && rt(s, m = In(f)) ? !o || !o.includes(m) ? r[m] = h : (u || (u = {}))[m] = h : fl(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, c = !0)
            }
        if (o) {
            const f = ot(r),
                h = u || mt;
            for (let m = 0; m < o.length; m++) {
                const y = o[m];
                r[y] = pd(s, f, y, h[y], e, !rt(h, y))
            }
        }
        return c
    }

    function pd(e, t, r, n, s, o) {
        const c = e[r];
        if (c != null) {
            const u = rt(c, "default");
            if (u && n === void 0) {
                const f = c.default;
                if (c.type !== Function && Ke(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (Ys(s), n = h[r] = f.call(null, t), rs())
                } else n = f
            }
            c[0] && (o && !u ? n = !1 : c[1] && (n === "" || n === os(r)) && (n = !0))
        }
        return n
    }

    function UE(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const o = e.props,
            c = {},
            u = [];
        let f = !1;
        if (!Ke(e)) {
            const m = y => {
                f = !0;
                const [E, I] = UE(y, t, !0);
                nr(c, E), I && u.push(...I)
            };
            !r && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m)
        }
        if (!o && !f) return yt(e) && n.set(e, xs), xs;
        if (ke(o))
            for (let m = 0; m < o.length; m++) {
                const y = In(o[m]);
                kv(y) && (c[y] = mt)
            } else if (o)
                for (const m in o) {
                    const y = In(m);
                    if (kv(y)) {
                        const E = o[m],
                            I = c[y] = ke(E) || Ke(E) ? {
                                type: E
                            } : E;
                        if (I) {
                            const k = Dv(Boolean, I.type),
                                M = Dv(String, I.type);
                            I[0] = k > -1, I[1] = M < 0 || k < M, (k > -1 || rt(I, "default")) && u.push(y)
                        }
                    }
                }
        const h = [c, u];
        return yt(e) && n.set(e, h), h
    }

    function kv(e) {
        return e[0] !== "$"
    }

    function Pv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function xv(e, t) {
        return Pv(e) === Pv(t)
    }

    function Dv(e, t) {
        return ke(t) ? t.findIndex(r => xv(r, e)) : Ke(t) && xv(t, e) ? 0 : -1
    }
    const FE = e => e[0] === "_" || e === "$stable",
        Ah = e => ke(e) ? e.map(Sn) : [Sn(e)],
        WL = (e, t, r) => {
            if (t._n) return t;
            const n = Sh((...s) => Ah(t(...s)), r);
            return n._c = !1, n
        },
        BE = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (FE(s)) continue;
                const o = e[s];
                if (Ke(o)) t[s] = WL(s, o, n);
                else if (o != null) {
                    const c = Ah(o);
                    t[s] = () => c
                }
            }
        },
        jE = (e, t) => {
            const r = Ah(t);
            e.slots.default = () => r
        },
        KL = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = ot(t), Dc(t, "_", r)) : BE(t, e.slots = {})
            } else e.slots = {}, t && jE(e, t);
            Dc(e.slots, bl, 1)
        },
        HL = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                c = mt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (nr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, BE(t, s)), c = t
            } else t && (jE(e, t), c = {
                default: 1
            });
            if (o)
                for (const u in s) !FE(u) && !(u in c) && delete s[u]
        };

    function GE() {
        return {
            app: null,
            config: {
                isNativeTag: yR,
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
    let VL = 0;

    function qL(e, t) {
        return function(n, s = null) {
            Ke(n) || (n = Object.assign({}, n)), s != null && !yt(s) && (s = null);
            const o = GE(),
                c = new Set;
            let u = !1;
            const f = o.app = {
                _uid: VL++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: uk,
                get config() {
                    return o.config
                },
                set config(h) {},
                use(h, ...m) {
                    return c.has(h) || (h && Ke(h.install) ? (c.add(h), h.install(f, ...m)) : Ke(h) && (c.add(h), h(f, ...m))), f
                },
                mixin(h) {
                    return o.mixins.includes(h) || o.mixins.push(h), f
                },
                component(h, m) {
                    return m ? (o.components[h] = m, f) : o.components[h]
                },
                directive(h, m) {
                    return m ? (o.directives[h] = m, f) : o.directives[h]
                },
                mount(h, m, y) {
                    if (!u) {
                        const E = at(n, s);
                        return E.appContext = o, m && t ? t(E, h) : e(E, h, y), u = !0, f._container = h, h.__vue_app__ = f, Tl(E.component) || E.component.proxy
                    }
                },
                unmount() {
                    u && (e(null, f._container), delete f._container.__vue_app__)
                },
                provide(h, m) {
                    return o.provides[h] = m, f
                }
            };
            return f
        }
    }

    function gd(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((E, I) => gd(E, t && (ke(t) ? t[I] : t), r, n, s));
            return
        }
        if (Da(n) && !s) return;
        const o = n.shapeFlag & 4 ? Tl(n.component) || n.component.proxy : n.el,
            c = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            m = u.refs === mt ? u.refs = {} : u.refs,
            y = u.setupState;
        if (h != null && h !== f && (Vt(h) ? (m[h] = null, rt(y, h) && (y[h] = null)) : tr(h) && (h.value = null)), Ke(f)) ui(f, u, 12, [c, m]);
        else {
            const E = Vt(f),
                I = tr(f);
            if (E || I) {
                const k = () => {
                    if (e.f) {
                        const M = E ? m[f] : f.value;
                        s ? ke(M) && dh(M, o) : ke(M) ? M.includes(o) || M.push(o) : E ? (m[f] = [o], rt(y, f) && (y[f] = m[f])) : (f.value = [o], e.k && (m[e.k] = f.value))
                    } else E ? (m[f] = c, rt(y, f) && (y[f] = c)) : I && (f.value = c, e.k && (m[e.k] = c))
                };
                c ? (k.id = -1, Or(k, r)) : k()
            }
        }
    }
    const Or = vL;

    function YL(e) {
        return zL(e)
    }

    function zL(e, t) {
        const r = wR();
        r.__VUE__ = !0;
        const {
            insert: n,
            remove: s,
            patchProp: o,
            createElement: c,
            createText: u,
            createComment: f,
            setText: h,
            setElementText: m,
            parentNode: y,
            nextSibling: E,
            setScopeId: I = dn,
            cloneNode: k,
            insertStaticContent: M
        } = e, j = (g, p, w, D = null, B = null, Y = null, le = !1, se = null, re = !!p.dynamicChildren) => {
            if (g === p) return;
            g && !qi(g, p) && (D = Ot(g), Rt(g, B, Y, !0), g = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: K,
                shapeFlag: he
            } = p;
            switch (A) {
                case _l:
                    C(g, p, w, D);
                    break;
                case Zr:
                    H(g, p, w, D);
                    break;
                case Ma:
                    g == null && X(p, w, D, le);
                    break;
                case ze:
                    Ie(g, p, w, D, B, Y, le, se, re);
                    break;
                default:
                    he & 1 ? Z(g, p, w, D, B, Y, le, se, re) : he & 6 ? U(g, p, w, D, B, Y, le, se, re) : (he & 64 || he & 128) && A.process(g, p, w, D, B, Y, le, se, re, Mt)
            }
            K != null && B && gd(K, g && g.ref, Y, p || g, !p)
        }, C = (g, p, w, D) => {
            if (g == null) n(p.el = u(p.children), w, D);
            else {
                const B = p.el = g.el;
                p.children !== g.children && h(B, p.children)
            }
        }, H = (g, p, w, D) => {
            g == null ? n(p.el = f(p.children || ""), w, D) : p.el = g.el
        }, X = (g, p, w, D) => {
            [g.el, g.anchor] = M(g.children, p, w, D, g.el, g.anchor)
        }, W = ({
            el: g,
            anchor: p
        }, w, D) => {
            let B;
            for (; g && g !== p;) B = E(g), n(g, w, D), g = B;
            n(p, w, D)
        }, G = ({
            el: g,
            anchor: p
        }) => {
            let w;
            for (; g && g !== p;) w = E(g), s(g), g = w;
            s(p)
        }, Z = (g, p, w, D, B, Y, le, se, re) => {
            le = le || p.type === "svg", g == null ? oe(p, w, D, B, Y, le, se, re) : $e(g, p, B, Y, le, se, re)
        }, oe = (g, p, w, D, B, Y, le, se) => {
            let re, A;
            const {
                type: K,
                props: he,
                shapeFlag: pe,
                transition: Ae,
                patchFlag: Pe,
                dirs: O
            } = g;
            if (g.el && k !== void 0 && Pe === -1) re = g.el = k(g.el);
            else {
                if (re = g.el = c(g.type, Y, he && he.is, he), pe & 8 ? m(re, g.children) : pe & 16 && ue(g.children, re, null, D, B, Y && K !== "foreignObject", le, se), O && Di(g, null, D, "created"), he) {
                    for (const R in he) R !== "value" && !Cc(R) && o(re, R, null, he[R], Y, g.children, D, B, ct);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && yn(A, D, g)
                }
                ce(re, g, g.scopeId, le, D)
            }
            O && Di(g, null, D, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Ae && !Ae.persisted;
            T && Ae.beforeEnter(re), n(re, p, w), ((A = he && he.onVnodeMounted) || T || O) && Or(() => {
                A && yn(A, D, g), T && Ae.enter(re), O && Di(g, null, D, "mounted")
            }, B)
        }, ce = (g, p, w, D, B) => {
            if (w && I(g, w), D)
                for (let Y = 0; Y < D.length; Y++) I(g, D[Y]);
            if (B) {
                let Y = B.subTree;
                if (p === Y) {
                    const le = B.vnode;
                    ce(g, le, le.scopeId, le.slotScopeIds, B.parent)
                }
            }
        }, ue = (g, p, w, D, B, Y, le, se, re = 0) => {
            for (let A = re; A < g.length; A++) {
                const K = g[A] = se ? ii(g[A]) : Sn(g[A]);
                j(null, K, p, w, D, B, Y, le, se)
            }
        }, $e = (g, p, w, D, B, Y, le) => {
            const se = p.el = g.el;
            let {
                patchFlag: re,
                dynamicChildren: A,
                dirs: K
            } = p;
            re |= g.patchFlag & 16;
            const he = g.props || mt,
                pe = p.props || mt;
            let Ae;
            w && Mi(w, !1), (Ae = pe.onVnodeBeforeUpdate) && yn(Ae, w, p, g), K && Di(p, g, w, "beforeUpdate"), w && Mi(w, !0);
            const Pe = B && p.type !== "foreignObject";
            if (A ? Ce(g.dynamicChildren, A, se, w, D, Pe, Y) : le || Se(g, p, se, null, w, D, Pe, Y, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, w, D, B);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, B), re & 4 && o(se, "style", he.style, pe.style, B), re & 8) {
                    const O = p.dynamicProps;
                    for (let T = 0; T < O.length; T++) {
                        const R = O[T],
                            S = he[R],
                            L = pe[R];
                        (L !== S || R === "value") && o(se, R, S, L, B, g.children, w, D, ct)
                    }
                }
                re & 1 && g.children !== p.children && m(se, p.children)
            } else !le && A == null && fe(se, p, he, pe, w, D, B);
            ((Ae = pe.onVnodeUpdated) || K) && Or(() => {
                Ae && yn(Ae, w, p, g), K && Di(p, g, w, "updated")
            }, D)
        }, Ce = (g, p, w, D, B, Y, le) => {
            for (let se = 0; se < p.length; se++) {
                const re = g[se],
                    A = p[se],
                    K = re.el && (re.type === ze || !qi(re, A) || re.shapeFlag & 70) ? y(re.el) : w;
                j(re, A, K, null, D, B, Y, le, !0)
            }
        }, fe = (g, p, w, D, B, Y, le) => {
            if (w !== D) {
                for (const se in D) {
                    if (Cc(se)) continue;
                    const re = D[se],
                        A = w[se];
                    re !== A && se !== "value" && o(g, se, A, re, le, p.children, B, Y, ct)
                }
                if (w !== mt)
                    for (const se in w) !Cc(se) && !(se in D) && o(g, se, w[se], null, le, p.children, B, Y, ct);
                "value" in D && o(g, "value", w.value, D.value)
            }
        }, Ie = (g, p, w, D, B, Y, le, se, re) => {
            const A = p.el = g ? g.el : u(""),
                K = p.anchor = g ? g.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ae
            } = p;
            Ae && (se = se ? se.concat(Ae) : Ae), g == null ? (n(A, w, D), n(K, w, D), ue(p.children, w, K, B, Y, le, se, re)) : he > 0 && he & 64 && pe && g.dynamicChildren ? (Ce(g.dynamicChildren, pe, w, B, Y, le, se), (p.key != null || B && p === B.subTree) && WE(g, p, !0)) : Se(g, p, w, K, B, Y, le, se, re)
        }, U = (g, p, w, D, B, Y, le, se, re) => {
            p.slotScopeIds = se, g == null ? p.shapeFlag & 512 ? B.ctx.activate(p, w, D, le, re) : ie(p, w, D, B, Y, le, re) : de(g, p, re)
        }, ie = (g, p, w, D, B, Y, le) => {
            const se = g.component = nk(g, D, B);
            if (gl(g) && (se.ctx.renderer = Mt), ik(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !g.el) {
                    const re = se.subTree = at(Zr);
                    H(null, re, p, w)
                }
                return
            }
            be(se, g, p, w, B, Y, le)
        }, de = (g, p, w) => {
            const D = p.component = g.component;
            if (pL(g, p, w))
                if (D.asyncDep && !D.asyncResolved) {
                    ve(D, p, w);
                    return
                } else D.next = p, cL(D.update), D.update();
            else p.el = g.el, D.vnode = p
        }, be = (g, p, w, D, B, Y, le) => {
            const se = () => {
                    if (g.isMounted) {
                        let {
                            next: K,
                            bu: he,
                            u: pe,
                            parent: Ae,
                            vnode: Pe
                        } = g, O = K, T;
                        Mi(g, !1), K ? (K.el = Pe.el, ve(g, K, le)) : K = Pe, he && Ac(he), (T = K.props && K.props.onVnodeBeforeUpdate) && yn(T, Ae, K, Pe), Mi(g, !0);
                        const R = df(g),
                            S = g.subTree;
                        g.subTree = R, j(S, R, y(S.el), Ot(S), g, B, Y), K.el = R.el, O === null && gL(g, R.el), pe && Or(pe, B), (T = K.props && K.props.onVnodeUpdated) && Or(() => yn(T, Ae, K, Pe), B)
                    } else {
                        let K;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ae,
                            m: Pe,
                            parent: O
                        } = g, T = Da(p);
                        if (Mi(g, !1), Ae && Ac(Ae), !T && (K = pe && pe.onVnodeBeforeMount) && yn(K, O, p), Mi(g, !0), he && Ut) {
                            const R = () => {
                                g.subTree = df(g), Ut(he, g.subTree, g, B, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !g.isUnmounted && R()) : R()
                        } else {
                            const R = g.subTree = df(g);
                            j(null, R, w, D, g, B, Y), p.el = R.el
                        }
                        if (Pe && Or(Pe, B), !T && (K = pe && pe.onVnodeMounted)) {
                            const R = p;
                            Or(() => yn(K, O, R), B)
                        }(p.shapeFlag & 256 || O && Da(O.vnode) && O.vnode.shapeFlag & 256) && g.a && Or(g.a, B), g.isMounted = !0, p = w = D = null
                    }
                },
                re = g.effect = new gh(se, () => Th(A), g.scope),
                A = g.update = () => re.run();
            A.id = g.uid, Mi(g, !0), A()
        }, ve = (g, p, w) => {
            p.component = g;
            const D = g.vnode.props;
            g.vnode = p, g.next = null, GL(g, p.props, D, w), HL(g, p.children, w), ta(), Iv(), ra()
        }, Se = (g, p, w, D, B, Y, le, se, re = !1) => {
            const A = g && g.children,
                K = g ? g.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ae
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Ge(A, he, w, D, B, Y, le, se, re);
                    return
                } else if (pe & 256) {
                    Me(A, he, w, D, B, Y, le, se, re);
                    return
                }
            }
            Ae & 8 ? (K & 16 && ct(A, B, Y), he !== A && m(w, he)) : K & 16 ? Ae & 16 ? Ge(A, he, w, D, B, Y, le, se, re) : ct(A, B, Y, !0) : (K & 8 && m(w, ""), Ae & 16 && ue(he, w, D, B, Y, le, se, re))
        }, Me = (g, p, w, D, B, Y, le, se, re) => {
            g = g || xs, p = p || xs;
            const A = g.length,
                K = p.length,
                he = Math.min(A, K);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ae = p[pe] = re ? ii(p[pe]) : Sn(p[pe]);
                j(g[pe], Ae, w, null, B, Y, le, se, re)
            }
            A > K ? ct(g, B, Y, !0, !1, he) : ue(p, w, D, B, Y, le, se, re, he)
        }, Ge = (g, p, w, D, B, Y, le, se, re) => {
            let A = 0;
            const K = p.length;
            let he = g.length - 1,
                pe = K - 1;
            for (; A <= he && A <= pe;) {
                const Ae = g[A],
                    Pe = p[A] = re ? ii(p[A]) : Sn(p[A]);
                if (qi(Ae, Pe)) j(Ae, Pe, w, null, B, Y, le, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Ae = g[he],
                    Pe = p[pe] = re ? ii(p[pe]) : Sn(p[pe]);
                if (qi(Ae, Pe)) j(Ae, Pe, w, null, B, Y, le, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Ae = pe + 1,
                        Pe = Ae < K ? p[Ae].el : D;
                    for (; A <= pe;) j(null, p[A] = re ? ii(p[A]) : Sn(p[A]), w, Pe, B, Y, le, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) Rt(g[A], B, Y, !0), A++;
            else {
                const Ae = A,
                    Pe = A,
                    O = new Map;
                for (A = Pe; A <= pe; A++) {
                    const Te = p[A] = re ? ii(p[A]) : Sn(p[A]);
                    Te.key != null && O.set(Te.key, A)
                }
                let T, R = 0;
                const S = pe - Pe + 1;
                let L = !1,
                    Q = 0;
                const ne = new Array(S);
                for (A = 0; A < S; A++) ne[A] = 0;
                for (A = Ae; A <= he; A++) {
                    const Te = g[A];
                    if (R >= S) {
                        Rt(Te, B, Y, !0);
                        continue
                    }
                    let dt;
                    if (Te.key != null) dt = O.get(Te.key);
                    else
                        for (T = Pe; T <= pe; T++)
                            if (ne[T - Pe] === 0 && qi(Te, p[T])) {
                                dt = T;
                                break
                            } dt === void 0 ? Rt(Te, B, Y, !0) : (ne[dt - Pe] = A + 1, dt >= Q ? Q = dt : L = !0, j(Te, p[dt], w, null, B, Y, le, se, re), R++)
                }
                const _e = L ? XL(ne) : xs;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Te = Pe + A,
                        dt = p[Te],
                        sr = Te + 1 < K ? p[Te + 1].el : D;
                    ne[A] === 0 ? j(null, dt, w, sr, B, Y, le, se, re) : L && (T < 0 || A !== _e[T] ? nt(dt, w, sr, 2) : T--)
                }
            }
        }, nt = (g, p, w, D, B = null) => {
            const {
                el: Y,
                type: le,
                transition: se,
                children: re,
                shapeFlag: A
            } = g;
            if (A & 6) {
                nt(g.component.subTree, p, w, D);
                return
            }
            if (A & 128) {
                g.suspense.move(p, w, D);
                return
            }
            if (A & 64) {
                le.move(g, p, w, Mt);
                return
            }
            if (le === ze) {
                n(Y, p, w);
                for (let he = 0; he < re.length; he++) nt(re[he], p, w, D);
                n(g.anchor, p, w);
                return
            }
            if (le === Ma) {
                W(g, p, w);
                return
            }
            if (D !== 2 && A & 1 && se)
                if (D === 0) se.beforeEnter(Y), n(Y, p, w), Or(() => se.enter(Y), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ae
                    } = se, Pe = () => n(Y, p, w), O = () => {
                        he(Y, () => {
                            Pe(), Ae && Ae()
                        })
                    };
                    pe ? pe(Y, Pe, O) : O()
                }
            else n(Y, p, w)
        }, Rt = (g, p, w, D = !1, B = !1) => {
            const {
                type: Y,
                props: le,
                ref: se,
                children: re,
                dynamicChildren: A,
                shapeFlag: K,
                patchFlag: he,
                dirs: pe
            } = g;
            if (se != null && gd(se, null, w, g, !0), K & 256) {
                p.ctx.deactivate(g);
                return
            }
            const Ae = K & 1 && pe,
                Pe = !Da(g);
            let O;
            if (Pe && (O = le && le.onVnodeBeforeUnmount) && yn(O, p, g), K & 6) _r(g.component, w, D);
            else {
                if (K & 128) {
                    g.suspense.unmount(w, D);
                    return
                }
                Ae && Di(g, null, p, "beforeUnmount"), K & 64 ? g.type.remove(g, p, w, B, Mt, D) : A && (Y !== ze || he > 0 && he & 64) ? ct(A, p, w, !1, !0) : (Y === ze && he & 384 || !B && K & 16) && ct(re, p, w), D && Ar(g)
            }(Pe && (O = le && le.onVnodeUnmounted) || Ae) && Or(() => {
                O && yn(O, p, g), Ae && Di(g, null, p, "unmounted")
            }, w)
        }, Ar = g => {
            const {
                type: p,
                el: w,
                anchor: D,
                transition: B
            } = g;
            if (p === ze) {
                ir(w, D);
                return
            }
            if (p === Ma) {
                G(g);
                return
            }
            const Y = () => {
                s(w), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (g.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: le,
                    delayLeave: se
                } = B, re = () => le(w, Y);
                se ? se(g.el, Y, re) : re()
            } else Y()
        }, ir = (g, p) => {
            let w;
            for (; g !== p;) w = E(g), s(g), g = w;
            s(p)
        }, _r = (g, p, w) => {
            const {
                bum: D,
                scope: B,
                update: Y,
                subTree: le,
                um: se
            } = g;
            D && Ac(D), B.stop(), Y && (Y.active = !1, Rt(le, g, p, w)), se && Or(se, p), Or(() => {
                g.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, ct = (g, p, w, D = !1, B = !1, Y = 0) => {
            for (let le = Y; le < g.length; le++) Rt(g[le], p, w, D, B)
        }, Ot = g => g.shapeFlag & 6 ? Ot(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : E(g.anchor || g.el), lt = (g, p, w) => {
            g == null ? p._vnode && Rt(p._vnode, null, null, !0) : j(p._vnode || null, g, p, null, null, null, w), Iv(), wE(), p._vnode = g
        }, Mt = {
            p: j,
            um: Rt,
            m: nt,
            r: Ar,
            mt: ie,
            mc: ue,
            pc: Se,
            pbc: Ce,
            n: Ot,
            o: e
        };
        let qt, Ut;
        return t && ([qt, Ut] = t(Mt)), {
            render: lt,
            hydrate: qt,
            createApp: qL(lt, qt)
        }
    }

    function Mi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function WE(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let o = 0; o < n.length; o++) {
                const c = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ii(s[o]), u.el = c.el), r || WE(c, u))
            }
    }

    function XL(e) {
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
    const JL = e => e.__isTeleport,
        ze = Symbol(void 0),
        _l = Symbol(void 0),
        Zr = Symbol(void 0),
        Ma = Symbol(void 0),
        Ua = [];
    let fn = null;

    function F(e = !1) {
        Ua.push(fn = e ? null : [])
    }

    function ZL() {
        Ua.pop(), fn = Ua[Ua.length - 1] || null
    }
    let Ja = 1;

    function Mv(e) {
        Ja += e
    }

    function KE(e) {
        return e.dynamicChildren = Ja > 0 ? fn || xs : null, ZL(), Ja > 0 && fn && fn.push(e), e
    }

    function V(e, t, r, n, s, o) {
        return KE(z(e, t, r, n, s, o, !0))
    }

    function Nt(e, t, r, n, s) {
        return KE(at(e, t, r, n, s, !0))
    }

    function Gc(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function qi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const bl = "__vInternal",
        HE = ({
            key: e
        }) => e != null ? e : null,
        Nc = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Vt(e) || tr(e) || Ke(e) ? {
            i: lr,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function z(e, t = null, r = null, n = 0, s = null, o = e === ze ? 0 : 1, c = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && HE(t),
            ref: t && Nc(t),
            scopeId: dl,
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
        return u ? (Nh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Vt(r) ? 8 : 16), Ja > 0 && !c && fn && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && fn.push(f), f
    }
    const at = QL;

    function QL(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === PE) && (e = Zr), Gc(e)) {
            const u = pi(e, t, !0);
            return r && Nh(u, r), Ja > 0 && !o && fn && (u.shapeFlag & 6 ? fn[fn.indexOf(e)] = u : fn.push(u)), u.patchFlag |= -2, u
        }
        if (lk(e) && (e = e.__vccOpts), t) {
            t = ek(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Vt(u) && (t.class = Fe(u)), yt(f) && (gE(f) && !ke(f) && (f = nr({}, f)), t.style = nl(f))
        }
        const c = Vt(e) ? 1 : mL(e) ? 128 : JL(e) ? 64 : yt(e) ? 4 : Ke(e) ? 2 : 0;
        return z(e, t, r, n, s, c, o, !0)
    }

    function ek(e) {
        return e ? gE(e) || bl in e ? nr({}, e) : e : null
    }

    function pi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: c
        } = e, u = t ? El(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && HE(u),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(Nc(t)) : [s, Nc(t)] : Nc(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: c,
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
            ssContent: e.ssContent && pi(e.ssContent),
            ssFallback: e.ssFallback && pi(e.ssFallback),
            el: e.el,
            anchor: e.anchor
        }
    }

    function en(e = " ", t = 0) {
        return at(_l, null, e, t)
    }

    function VE(e, t) {
        const r = at(Ma, null, e);
        return r.staticCount = t, r
    }

    function Oe(e = "", t = !1) {
        return t ? (F(), Nt(Zr, null, e)) : at(Zr, null, e)
    }

    function Sn(e) {
        return e == null || typeof e == "boolean" ? at(Zr) : ke(e) ? at(ze, null, e.slice()) : typeof e == "object" ? ii(e) : at(_l, null, String(e))
    }

    function ii(e) {
        return e.el === null || e.memo ? e : pi(e)
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
                !s && !(bl in t) ? t._ctx = lr : s === 3 && lr && (lr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else Ke(t) ? (t = {
            default: t,
            _ctx: lr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [en(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function El(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Fe([t.class, n.class]));
                else if (s === "style") t.style = nl([t.style, n.style]);
            else if (sl(s)) {
                const o = t[s],
                    c = n[s];
                c && o !== c && !(ke(o) && o.includes(c)) && (t[s] = o ? [].concat(o, c) : c)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function yn(e, t, r, n = null) {
        Jr(e, t, 7, [r, n])
    }
    const tk = GE();
    let rk = 0;

    function nk(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || tk,
            o = {
                uid: rk++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new nE(!0),
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
                propsOptions: UE(n, s),
                emitsOptions: IE(n, s),
                emit: null,
                emitted: null,
                propsDefaults: mt,
                inheritAttrs: n.inheritAttrs,
                ctx: mt,
                data: mt,
                props: mt,
                attrs: mt,
                slots: mt,
                refs: mt,
                setupState: mt,
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
        }, o.root = t ? t.root : o, o.emit = fL.bind(null, o), e.ce && e.ce(o), o
    }
    let Xt = null;
    const gi = () => Xt || lr,
        Ys = e => {
            Xt = e, e.scope.on()
        },
        rs = () => {
            Xt && Xt.scope.off(), Xt = null
        };

    function qE(e) {
        return e.vnode.shapeFlag & 4
    }
    let Za = !1;

    function ik(e, t = !1) {
        Za = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = qE(e);
        jL(e, r, s, t), KL(e, n);
        const o = s ? sk(e, t) : void 0;
        return Za = !1, o
    }

    function sk(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = mE(new Proxy(e.ctx, xL));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? ok(e) : null;
            Ys(e), ta();
            const o = ui(n, e, 0, [e.props, s]);
            if (ra(), rs(), eE(o)) {
                if (o.then(rs, rs), t) return o.then(c => {
                    Uv(e, c, t)
                }).catch(c => {
                    ul(c, e, 0)
                });
                e.asyncDep = o
            } else Uv(e, o, t)
        } else YE(e, t)
    }

    function Uv(e, t, r) {
        Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : yt(t) && (e.setupState = bE(t)), YE(e, r)
    }
    let Fv;

    function YE(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && Fv && !n.render) {
                const s = n.template || $h(e).template;
                if (s) {
                    const {
                        isCustomElement: o,
                        compilerOptions: c
                    } = e.appContext.config, {
                        delimiters: u,
                        compilerOptions: f
                    } = n, h = nr(nr({
                        isCustomElement: o,
                        delimiters: u
                    }, c), f);
                    n.render = Fv(s, h)
                }
            }
            e.render = n.render || dn
        }
        Ys(e), ta(), DL(e), ra(), rs()
    }

    function ak(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return Mr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function ok(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = ak(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Tl(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(bE(mE(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Bc) return Bc[r](e)
            }
        }))
    }

    function ck(e, t = !0) {
        return Ke(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function lk(e) {
        return Ke(e) && "__vccOpts" in e
    }
    const Dr = (e, t) => iL(e, t, Za);

    function Rh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? yt(t) && !ke(t) ? Gc(t) ? at(e, null, [t]) : at(e, t) : at(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Gc(r) && (r = [r]), at(e, t, r))
    }
    const uk = "3.2.39",
        fk = "http://www.w3.org/2000/svg",
        Yi = typeof document < "u" ? document : null,
        Bv = Yi && Yi.createElement("template"),
        dk = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Yi.createElementNS(fk, e) : Yi.createElement(e, r ? {
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
                const c = r ? r.previousSibling : t.lastChild;
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
                return [c ? c.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
            }
        };

    function hk(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function pk(e, t, r) {
        const n = e.style,
            s = Vt(r);
        if (r && !s) {
            for (const o in r) md(n, o, r[o]);
            if (t && !Vt(t))
                for (const o in t) r[o] == null && md(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const jv = /\s*!important$/;

    function md(e, t, r) {
        if (ke(r)) r.forEach(n => md(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = gk(e, t);
            jv.test(r) ? e.setProperty(os(n), r.replace(jv, ""), "important") : e[n] = r
        }
    }
    const Gv = ["Webkit", "Moz", "ms"],
        pf = {};

    function gk(e, t) {
        const r = pf[t];
        if (r) return r;
        let n = In(t);
        if (n !== "filter" && n in e) return pf[t] = n;
        n = cl(n);
        for (let s = 0; s < Gv.length; s++) {
            const o = Gv[s] + n;
            if (o in e) return pf[t] = o
        }
        return t
    }
    const Wv = "http://www.w3.org/1999/xlink";

    function mk(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Wv, t.slice(6, t.length)) : e.setAttributeNS(Wv, t, r);
        else {
            const o = hR(t);
            r == null || o && !Jb(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function vk(e, t, r, n, s, o, c) {
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
            f === "boolean" ? r = Jb(r) : r == null && f === "string" ? (r = "", u = !0) : f === "number" && (r = 0, u = !0)
        }
        try {
            e[t] = r
        } catch {}
        u && e.removeAttribute(t)
    }
    const [zE, yk] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let vd = 0;
    const _k = Promise.resolve(),
        bk = () => {
            vd = 0
        },
        Ek = () => vd || (_k.then(bk), vd = zE());

    function zi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function Tk(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function Sk(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            c = o[t];
        if (n && c) c.value = n;
        else {
            const [u, f] = wk(t);
            if (n) {
                const h = o[t] = Ok(n, s);
                zi(e, u, h, f)
            } else c && (Tk(e, u, c, f), o[t] = void 0)
        }
    }
    const Kv = /(?:Once|Passive|Capture)$/;

    function wk(e) {
        let t;
        if (Kv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Kv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : os(e.slice(2)), t]
    }

    function Ok(e, t) {
        const r = n => {
            const s = n.timeStamp || zE();
            (yk || s >= r.attached - 1) && Jr(Ik(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = Ek(), r
    }

    function Ik(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Hv = /^on[a-z]/,
        Ck = (e, t, r, n, s = !1, o, c, u, f) => {
            t === "class" ? hk(e, n, s) : t === "style" ? pk(e, r, n) : sl(t) ? fh(t) || Sk(e, t, r, n, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $k(e, t, n, s)) ? vk(e, t, n, o, c, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), mk(e, t, n, s))
        };

    function $k(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Hv.test(t) && Ke(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hv.test(t) && Vt(r) ? !1 : t in e
    }

    function Ak(e) {
        const t = gi();
        if (!t) return;
        const r = () => yd(t.subTree, e(t.proxy));
        _L(r), vl(() => {
            const n = new MutationObserver(r);
            n.observe(t.subTree.el.parentNode, {
                childList: !0
            }), yl(() => n.disconnect())
        })
    }

    function yd(e, t) {
        if (e.shapeFlag & 128) {
            const r = e.suspense;
            e = r.activeBranch, r.pendingBranch && !r.isHydrating && r.effects.push(() => {
                yd(r.activeBranch, t)
            })
        }
        for (; e.component;) e = e.component.subTree;
        if (e.shapeFlag & 1 && e.el) Vv(e.el, t);
        else if (e.type === ze) e.children.forEach(r => yd(r, t));
        else if (e.type === Ma) {
            let {
                el: r,
                anchor: n
            } = e;
            for (; r && (Vv(r, t), r !== n);) r = r.nextSibling
        }
    }

    function Vv(e, t) {
        if (e.nodeType === 1) {
            const r = e.style;
            for (const n in t) r.setProperty(`--${n}`, t[n])
        }
    }
    const ei = "transition",
        $a = "animation",
        Sl = (e, {
            slots: t
        }) => Rh($E, Nk(e), t);
    Sl.displayName = "Transition";
    const XE = {
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
    Sl.props = nr({}, $E.props, XE);
    const Ui = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        qv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function Nk(e) {
        const t = {};
        for (const fe in e) fe in XE || (t[fe] = e[fe]);
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
            appearToClass: m = u,
            leaveFromClass: y = `${r}-leave-from`,
            leaveActiveClass: E = `${r}-leave-active`,
            leaveToClass: I = `${r}-leave-to`
        } = e, k = Rk(s), M = k && k[0], j = k && k[1], {
            onBeforeEnter: C,
            onEnter: H,
            onEnterCancelled: X,
            onLeave: W,
            onLeaveCancelled: G,
            onBeforeAppear: Z = C,
            onAppear: oe = H,
            onAppearCancelled: ce = X
        } = t, ue = (fe, Ie, U) => {
            Fi(fe, Ie ? m : u), Fi(fe, Ie ? h : c), U && U()
        }, $e = (fe, Ie) => {
            fe._isLeaving = !1, Fi(fe, y), Fi(fe, I), Fi(fe, E), Ie && Ie()
        }, Ce = fe => (Ie, U) => {
            const ie = fe ? oe : H,
                de = () => ue(Ie, fe, U);
            Ui(ie, [Ie, de]), Yv(() => {
                Fi(Ie, fe ? f : o), ti(Ie, fe ? m : u), qv(ie) || zv(Ie, n, M, de)
            })
        };
        return nr(t, {
            onBeforeEnter(fe) {
                Ui(C, [fe]), ti(fe, o), ti(fe, c)
            },
            onBeforeAppear(fe) {
                Ui(Z, [fe]), ti(fe, f), ti(fe, h)
            },
            onEnter: Ce(!1),
            onAppear: Ce(!0),
            onLeave(fe, Ie) {
                fe._isLeaving = !0;
                const U = () => $e(fe, Ie);
                ti(fe, y), Pk(), ti(fe, E), Yv(() => {
                    !fe._isLeaving || (Fi(fe, y), ti(fe, I), qv(W) || zv(fe, n, j, U))
                }), Ui(W, [fe, U])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Ui(X, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Ui(ce, [fe])
            },
            onLeaveCancelled(fe) {
                $e(fe), Ui(G, [fe])
            }
        })
    }

    function Rk(e) {
        if (e == null) return null;
        if (yt(e)) return [gf(e.enter), gf(e.leave)]; {
            const t = gf(e);
            return [t, t]
        }
    }

    function gf(e) {
        return Mc(e)
    }

    function ti(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Fi(e, t) {
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
    let Lk = 0;

    function zv(e, t, r, n) {
        const s = e._endId = ++Lk,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: c,
            timeout: u,
            propCount: f
        } = kk(e, t);
        if (!c) return n();
        const h = c + "end";
        let m = 0;
        const y = () => {
                e.removeEventListener(h, E), o()
            },
            E = I => {
                I.target === e && ++m >= f && y()
            };
        setTimeout(() => {
            m < f && y()
        }, u + 1), e.addEventListener(h, E)
    }

    function kk(e, t) {
        const r = window.getComputedStyle(e),
            n = k => (r[k] || "").split(", "),
            s = n(ei + "Delay"),
            o = n(ei + "Duration"),
            c = Xv(s, o),
            u = n($a + "Delay"),
            f = n($a + "Duration"),
            h = Xv(u, f);
        let m = null,
            y = 0,
            E = 0;
        t === ei ? c > 0 && (m = ei, y = c, E = o.length) : t === $a ? h > 0 && (m = $a, y = h, E = f.length) : (y = Math.max(c, h), m = y > 0 ? c > h ? ei : $a : null, E = m ? m === ei ? o.length : f.length : 0);
        const I = m === ei && /\b(transform|all)(,|$)/.test(r[ei + "Property"]);
        return {
            type: m,
            timeout: y,
            propCount: E,
            hasTransform: I
        }
    }

    function Xv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => Jv(r) + Jv(e[n])))
    }

    function Jv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function Pk() {
        return document.body.offsetHeight
    }
    const Wc = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Ac(t, r) : t
    };

    function xk(e) {
        e.target.composing = !0
    }

    function Zv(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const Qv = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = Wc(s);
                const o = n || s.props && s.props.type === "number";
                zi(e, t ? "change" : "input", c => {
                    if (c.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Mc(u)), e._assign(u)
                }), r && zi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (zi(e, "compositionstart", xk), zi(e, "compositionend", Zv), zi(e, "change", Zv))
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
                if (e._assign = Wc(o), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Mc(e.value) === t)) return;
                const c = t == null ? "" : t;
                e.value !== c && (e.value = c)
            }
        },
        Dk = {
            deep: !0,
            created(e, t, r) {
                e._assign = Wc(r), zi(e, "change", () => {
                    const n = e._modelValue,
                        s = Mk(e),
                        o = e.checked,
                        c = e._assign;
                    if (ke(n)) {
                        const u = Zb(n, s),
                            f = u !== -1;
                        if (o && !f) c(n.concat(s));
                        else if (!o && f) {
                            const h = [...n];
                            h.splice(u, 1), c(h)
                        }
                    } else if (al(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), c(u)
                    } else c(JE(e, o))
                })
            },
            mounted: ey,
            beforeUpdate(e, t, r) {
                e._assign = Wc(r), ey(e, t, r)
            }
        };

    function ey(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = Zb(t, n.props.value) > -1 : al(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = il(t, JE(e, !0)))
    }

    function Mk(e) {
        return "_value" in e ? e._value : e.value
    }

    function JE(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const Uk = ["ctrl", "shift", "alt", "meta"],
        Fk = {
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
            exact: (e, t) => Uk.some(r => e[`${r}Key`] && !t.includes(r))
        },
        Cr = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const o = Fk[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        Bk = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        ZE = (e, t) => r => {
            if (!("key" in r)) return;
            const n = os(r.key);
            if (t.some(s => s === n || Bk[s] === n)) return e(r)
        },
        jk = nr({
            patchProp: Ck
        }, dk);
    let ty;

    function Gk() {
        return ty || (ty = YL(jk))
    }
    const Wk = (...e) => {
        const t = Gk().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = Kk(n);
            if (!s) return;
            const o = t._component;
            !Ke(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const c = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), c
        }, t
    };

    function Kk(e) {
        return Vt(e) ? document.querySelector(e) : e
    }
    const Hk = Je({
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
        He = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        Vk = {
            class: "choices"
        },
        qk = {
            class: "constrain"
        },
        Yk = {
            key: 0
        },
        zk = ["disabled", "onClick"];

    function Xk(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), V("div", Vk, [z("div", qk, [e.player.prompt ? qe((F(), V("p", Yk, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), (F(!0), V(ze, null, Qr(e.player.choices, (u, f) => (F(), V("button", {
            key: f,
            class: Fe({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Cr(h => e.onChoiceClick(f), ["prevent"])
        }, De(u.text), 11, zk))), 128))])])
    }
    const Jk = He(Hk, [
        ["render", Xk]
    ]);
    class Kc {
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

    function Zk(e) {
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

    function Qk() {
        this.__data__ = [], this.size = 0
    }
    var eP = Qk;

    function tP(e, t) {
        return e === t || e !== e && t !== t
    }
    var wl = tP,
        rP = wl;

    function nP(e, t) {
        for (var r = e.length; r--;)
            if (rP(e[r][0], t)) return r;
        return -1
    }
    var Ol = nP,
        iP = Ol,
        sP = Array.prototype,
        aP = sP.splice;

    function oP(e) {
        var t = this.__data__,
            r = iP(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : aP.call(t, r, 1), --this.size, !0
    }
    var cP = oP,
        lP = Ol;

    function uP(e) {
        var t = this.__data__,
            r = lP(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var fP = uP,
        dP = Ol;

    function hP(e) {
        return dP(this.__data__, e) > -1
    }
    var pP = hP,
        gP = Ol;

    function mP(e, t) {
        var r = this.__data__,
            n = gP(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var vP = mP,
        yP = eP,
        _P = cP,
        bP = fP,
        EP = pP,
        TP = vP;

    function na(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    na.prototype.clear = yP;
    na.prototype.delete = _P;
    na.prototype.get = bP;
    na.prototype.has = EP;
    na.prototype.set = TP;
    var Il = na,
        SP = Il;

    function wP() {
        this.__data__ = new SP, this.size = 0
    }
    var OP = wP;

    function IP(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var CP = IP;

    function $P(e) {
        return this.__data__.get(e)
    }
    var AP = $P;

    function NP(e) {
        return this.__data__.has(e)
    }
    var RP = NP,
        LP = typeof Dt == "object" && Dt && Dt.Object === Object && Dt,
        QE = LP,
        kP = QE,
        PP = typeof self == "object" && self && self.Object === Object && self,
        xP = kP || PP || Function("return this")(),
        pn = xP,
        DP = pn,
        MP = DP.Symbol,
        Cl = MP,
        ry = Cl,
        eT = Object.prototype,
        UP = eT.hasOwnProperty,
        FP = eT.toString,
        Aa = ry ? ry.toStringTag : void 0;

    function BP(e) {
        var t = UP.call(e, Aa),
            r = e[Aa];
        try {
            e[Aa] = void 0;
            var n = !0
        } catch {}
        var s = FP.call(e);
        return n && (t ? e[Aa] = r : delete e[Aa]), s
    }
    var jP = BP,
        GP = Object.prototype,
        WP = GP.toString;

    function KP(e) {
        return WP.call(e)
    }
    var HP = KP,
        ny = Cl,
        VP = jP,
        qP = HP,
        YP = "[object Null]",
        zP = "[object Undefined]",
        iy = ny ? ny.toStringTag : void 0;

    function XP(e) {
        return e == null ? e === void 0 ? zP : YP : iy && iy in Object(e) ? VP(e) : qP(e)
    }
    var ia = XP;

    function JP(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var tn = JP,
        ZP = ia,
        QP = tn,
        e2 = "[object AsyncFunction]",
        t2 = "[object Function]",
        r2 = "[object GeneratorFunction]",
        n2 = "[object Proxy]";

    function i2(e) {
        if (!QP(e)) return !1;
        var t = ZP(e);
        return t == t2 || t == r2 || t == e2 || t == n2
    }
    var Lh = i2,
        s2 = pn,
        a2 = s2["__core-js_shared__"],
        o2 = a2,
        mf = o2,
        sy = function() {
            var e = /[^.]+$/.exec(mf && mf.keys && mf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function c2(e) {
        return !!sy && sy in e
    }
    var l2 = c2,
        u2 = Function.prototype,
        f2 = u2.toString;

    function d2(e) {
        if (e != null) {
            try {
                return f2.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var tT = d2,
        h2 = Lh,
        p2 = l2,
        g2 = tn,
        m2 = tT,
        v2 = /[\\^$.*+?()[\]{}|]/g,
        y2 = /^\[object .+?Constructor\]$/,
        _2 = Function.prototype,
        b2 = Object.prototype,
        E2 = _2.toString,
        T2 = b2.hasOwnProperty,
        S2 = RegExp("^" + E2.call(T2).replace(v2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function w2(e) {
        if (!g2(e) || p2(e)) return !1;
        var t = h2(e) ? S2 : y2;
        return t.test(m2(e))
    }
    var O2 = w2;

    function I2(e, t) {
        return e == null ? void 0 : e[t]
    }
    var C2 = I2,
        $2 = O2,
        A2 = C2;

    function N2(e, t) {
        var r = A2(e, t);
        return $2(r) ? r : void 0
    }
    var cs = N2,
        R2 = cs,
        L2 = pn,
        k2 = R2(L2, "Map"),
        kh = k2,
        P2 = cs,
        x2 = P2(Object, "create"),
        $l = x2,
        ay = $l;

    function D2() {
        this.__data__ = ay ? ay(null) : {}, this.size = 0
    }
    var M2 = D2;

    function U2(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var F2 = U2,
        B2 = $l,
        j2 = "__lodash_hash_undefined__",
        G2 = Object.prototype,
        W2 = G2.hasOwnProperty;

    function K2(e) {
        var t = this.__data__;
        if (B2) {
            var r = t[e];
            return r === j2 ? void 0 : r
        }
        return W2.call(t, e) ? t[e] : void 0
    }
    var H2 = K2,
        V2 = $l,
        q2 = Object.prototype,
        Y2 = q2.hasOwnProperty;

    function z2(e) {
        var t = this.__data__;
        return V2 ? t[e] !== void 0 : Y2.call(t, e)
    }
    var X2 = z2,
        J2 = $l,
        Z2 = "__lodash_hash_undefined__";

    function Q2(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = J2 && t === void 0 ? Z2 : t, this
    }
    var ex = Q2,
        tx = M2,
        rx = F2,
        nx = H2,
        ix = X2,
        sx = ex;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = tx;
    sa.prototype.delete = rx;
    sa.prototype.get = nx;
    sa.prototype.has = ix;
    sa.prototype.set = sx;
    var ax = sa,
        oy = ax,
        ox = Il,
        cx = kh;

    function lx() {
        this.size = 0, this.__data__ = {
            hash: new oy,
            map: new(cx || ox),
            string: new oy
        }
    }
    var ux = lx;

    function fx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var dx = fx,
        hx = dx;

    function px(e, t) {
        var r = e.__data__;
        return hx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Al = px,
        gx = Al;

    function mx(e) {
        var t = gx(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var vx = mx,
        yx = Al;

    function _x(e) {
        return yx(this, e).get(e)
    }
    var bx = _x,
        Ex = Al;

    function Tx(e) {
        return Ex(this, e).has(e)
    }
    var Sx = Tx,
        wx = Al;

    function Ox(e, t) {
        var r = wx(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var Ix = Ox,
        Cx = ux,
        $x = vx,
        Ax = bx,
        Nx = Sx,
        Rx = Ix;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = Cx;
    aa.prototype.delete = $x;
    aa.prototype.get = Ax;
    aa.prototype.has = Nx;
    aa.prototype.set = Rx;
    var rT = aa,
        Lx = Il,
        kx = kh,
        Px = rT,
        xx = 200;

    function Dx(e, t) {
        var r = this.__data__;
        if (r instanceof Lx) {
            var n = r.__data__;
            if (!kx || n.length < xx - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Px(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var Mx = Dx,
        Ux = Il,
        Fx = OP,
        Bx = CP,
        jx = AP,
        Gx = RP,
        Wx = Mx;

    function oa(e) {
        var t = this.__data__ = new Ux(e);
        this.size = t.size
    }
    oa.prototype.clear = Fx;
    oa.prototype.delete = Bx;
    oa.prototype.get = jx;
    oa.prototype.has = Gx;
    oa.prototype.set = Wx;
    var nT = oa,
        Kx = cs,
        Hx = function() {
            try {
                var e = Kx(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        iT = Hx,
        cy = iT;

    function Vx(e, t, r) {
        t == "__proto__" && cy ? cy(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Ph = Vx,
        qx = Ph,
        Yx = wl;

    function zx(e, t, r) {
        (r !== void 0 && !Yx(e[t], r) || r === void 0 && !(t in e)) && qx(e, t, r)
    }
    var sT = zx;

    function Xx(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), c = n(t), u = c.length; u--;) {
                var f = c[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var Jx = Xx,
        Zx = Jx,
        Qx = Zx(),
        eD = Qx,
        Hc = {
            exports: {}
        };
    (function(e, t) {
        var r = pn,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            o = s && s.exports === n,
            c = o ? r.Buffer : void 0,
            u = c ? c.allocUnsafe : void 0;

        function f(h, m) {
            if (m) return h.slice();
            var y = h.length,
                E = u ? u(y) : new h.constructor(y);
            return h.copy(E), E
        }
        e.exports = f
    })(Hc, Hc.exports);
    var tD = pn,
        rD = tD.Uint8Array,
        nD = rD,
        ly = nD;

    function iD(e) {
        var t = new e.constructor(e.byteLength);
        return new ly(t).set(new ly(e)), t
    }
    var xh = iD,
        sD = xh;

    function aD(e, t) {
        var r = t ? sD(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var aT = aD;

    function oD(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var oT = oD,
        cD = tn,
        uy = Object.create,
        lD = function() {
            function e() {}
            return function(t) {
                if (!cD(t)) return {};
                if (uy) return uy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        uD = lD;

    function fD(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var cT = fD,
        dD = cT,
        hD = dD(Object.getPrototypeOf, Object),
        Dh = hD,
        pD = Object.prototype;

    function gD(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || pD;
        return e === r
    }
    var Mh = gD,
        mD = uD,
        vD = Dh,
        yD = Mh;

    function _D(e) {
        return typeof e.constructor == "function" && !yD(e) ? mD(vD(e)) : {}
    }
    var lT = _D;

    function bD(e) {
        return e != null && typeof e == "object"
    }
    var yi = bD,
        ED = ia,
        TD = yi,
        SD = "[object Arguments]";

    function wD(e) {
        return TD(e) && ED(e) == SD
    }
    var OD = wD,
        fy = OD,
        ID = yi,
        uT = Object.prototype,
        CD = uT.hasOwnProperty,
        $D = uT.propertyIsEnumerable,
        AD = fy(function() {
            return arguments
        }()) ? fy : function(e) {
            return ID(e) && CD.call(e, "callee") && !$D.call(e, "callee")
        },
        fT = AD,
        ND = Array.isArray,
        _i = ND,
        RD = 9007199254740991;

    function LD(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= RD
    }
    var dT = LD,
        kD = Lh,
        PD = dT;

    function xD(e) {
        return e != null && PD(e.length) && !kD(e)
    }
    var Nl = xD,
        DD = Nl,
        MD = yi;

    function UD(e) {
        return MD(e) && DD(e)
    }
    var FD = UD,
        Qa = {
            exports: {}
        };

    function BD() {
        return !1
    }
    var jD = BD;
    (function(e, t) {
        var r = pn,
            n = jD,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            c = o && o.exports === s,
            u = c ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(Qa, Qa.exports);
    var GD = ia,
        WD = Dh,
        KD = yi,
        HD = "[object Object]",
        VD = Function.prototype,
        qD = Object.prototype,
        hT = VD.toString,
        YD = qD.hasOwnProperty,
        zD = hT.call(Object);

    function XD(e) {
        if (!KD(e) || GD(e) != HD) return !1;
        var t = WD(e);
        if (t === null) return !0;
        var r = YD.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && hT.call(r) == zD
    }
    var JD = XD,
        ZD = ia,
        QD = dT,
        eM = yi,
        tM = "[object Arguments]",
        rM = "[object Array]",
        nM = "[object Boolean]",
        iM = "[object Date]",
        sM = "[object Error]",
        aM = "[object Function]",
        oM = "[object Map]",
        cM = "[object Number]",
        lM = "[object Object]",
        uM = "[object RegExp]",
        fM = "[object Set]",
        dM = "[object String]",
        hM = "[object WeakMap]",
        pM = "[object ArrayBuffer]",
        gM = "[object DataView]",
        mM = "[object Float32Array]",
        vM = "[object Float64Array]",
        yM = "[object Int8Array]",
        _M = "[object Int16Array]",
        bM = "[object Int32Array]",
        EM = "[object Uint8Array]",
        TM = "[object Uint8ClampedArray]",
        SM = "[object Uint16Array]",
        wM = "[object Uint32Array]",
        wt = {};
    wt[mM] = wt[vM] = wt[yM] = wt[_M] = wt[bM] = wt[EM] = wt[TM] = wt[SM] = wt[wM] = !0;
    wt[tM] = wt[rM] = wt[pM] = wt[nM] = wt[gM] = wt[iM] = wt[sM] = wt[aM] = wt[oM] = wt[cM] = wt[lM] = wt[uM] = wt[fM] = wt[dM] = wt[hM] = !1;

    function OM(e) {
        return eM(e) && QD(e.length) && !!wt[ZD(e)]
    }
    var IM = OM;

    function CM(e) {
        return function(t) {
            return e(t)
        }
    }
    var Uh = CM,
        eo = {
            exports: {}
        };
    (function(e, t) {
        var r = QE,
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
    })(eo, eo.exports);
    var $M = IM,
        AM = Uh,
        dy = eo.exports,
        hy = dy && dy.isTypedArray,
        NM = hy ? AM(hy) : $M,
        pT = NM;

    function RM(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var gT = RM,
        LM = Ph,
        kM = wl,
        PM = Object.prototype,
        xM = PM.hasOwnProperty;

    function DM(e, t, r) {
        var n = e[t];
        (!(xM.call(e, t) && kM(n, r)) || r === void 0 && !(t in e)) && LM(e, t, r)
    }
    var Fh = DM,
        MM = Fh,
        UM = Ph;

    function FM(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, c = t.length; ++o < c;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? UM(r, u, f) : MM(r, u, f)
        }
        return r
    }
    var oo = FM;

    function BM(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var jM = BM,
        GM = 9007199254740991,
        WM = /^(?:0|[1-9]\d*)$/;

    function KM(e, t) {
        var r = typeof e;
        return t = t == null ? GM : t, !!t && (r == "number" || r != "symbol" && WM.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Bh = KM,
        HM = jM,
        VM = fT,
        qM = _i,
        YM = Qa.exports,
        zM = Bh,
        XM = pT,
        JM = Object.prototype,
        ZM = JM.hasOwnProperty;

    function QM(e, t) {
        var r = qM(e),
            n = !r && VM(e),
            s = !r && !n && YM(e),
            o = !r && !n && !s && XM(e),
            c = r || n || s || o,
            u = c ? HM(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || ZM.call(e, h)) && !(c && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || zM(h, f))) && u.push(h);
        return u
    }
    var mT = QM;

    function eU(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var tU = eU,
        rU = tn,
        nU = Mh,
        iU = tU,
        sU = Object.prototype,
        aU = sU.hasOwnProperty;

    function oU(e) {
        if (!rU(e)) return iU(e);
        var t = nU(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !aU.call(e, n)) || r.push(n);
        return r
    }
    var cU = oU,
        lU = mT,
        uU = cU,
        fU = Nl;

    function dU(e) {
        return fU(e) ? lU(e, !0) : uU(e)
    }
    var co = dU,
        hU = oo,
        pU = co;

    function gU(e) {
        return hU(e, pU(e))
    }
    var mU = gU,
        py = sT,
        vU = Hc.exports,
        yU = aT,
        _U = oT,
        bU = lT,
        gy = fT,
        my = _i,
        EU = FD,
        TU = Qa.exports,
        SU = Lh,
        wU = tn,
        OU = JD,
        IU = pT,
        vy = gT,
        CU = mU;

    function $U(e, t, r, n, s, o, c) {
        var u = vy(e, r),
            f = vy(t, r),
            h = c.get(f);
        if (h) {
            py(e, r, h);
            return
        }
        var m = o ? o(u, f, r + "", e, t, c) : void 0,
            y = m === void 0;
        if (y) {
            var E = my(f),
                I = !E && TU(f),
                k = !E && !I && IU(f);
            m = f, E || I || k ? my(u) ? m = u : EU(u) ? m = _U(u) : I ? (y = !1, m = vU(f, !0)) : k ? (y = !1, m = yU(f, !0)) : m = [] : OU(f) || gy(f) ? (m = u, gy(u) ? m = CU(u) : (!wU(u) || SU(u)) && (m = bU(f))) : y = !1
        }
        y && (c.set(f, m), s(m, f, n, o, c), c.delete(f)), py(e, r, m)
    }
    var AU = $U,
        NU = nT,
        RU = sT,
        LU = eD,
        kU = AU,
        PU = tn,
        xU = co,
        DU = gT;

    function vT(e, t, r, n, s) {
        e !== t && LU(t, function(o, c) {
            if (s || (s = new NU), PU(o)) kU(e, t, c, r, vT, n, s);
            else {
                var u = n ? n(DU(e, c), o, c + "", e, t, s) : void 0;
                u === void 0 && (u = o), RU(e, c, u)
            }
        }, xU)
    }
    var MU = vT;

    function UU(e) {
        return e
    }
    var yT = UU;

    function FU(e, t, r) {
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
    var BU = FU,
        jU = BU,
        yy = Math.max;

    function GU(e, t, r) {
        return t = yy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = yy(n.length - t, 0), c = Array(o); ++s < o;) c[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(c), jU(e, this, u)
            }
    }
    var WU = GU;

    function KU(e) {
        return function() {
            return e
        }
    }
    var HU = KU,
        VU = HU,
        _y = iT,
        qU = yT,
        YU = _y ? function(e, t) {
            return _y(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: VU(t),
                writable: !0
            })
        } : qU,
        zU = YU,
        XU = 800,
        JU = 16,
        ZU = Date.now;

    function QU(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = ZU(),
                s = JU - (n - r);
            if (r = n, s > 0) {
                if (++t >= XU) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var eF = QU,
        tF = zU,
        rF = eF,
        nF = rF(tF),
        iF = nF,
        sF = yT,
        aF = WU,
        oF = iF;

    function cF(e, t) {
        return oF(aF(e, t, sF), e + "")
    }
    var lF = cF,
        uF = wl,
        fF = Nl,
        dF = Bh,
        hF = tn;

    function pF(e, t, r) {
        if (!hF(r)) return !1;
        var n = typeof t;
        return (n == "number" ? fF(r) && dF(t, r.length) : n == "string" && t in r) ? uF(r[t], e) : !1
    }
    var gF = pF,
        mF = lF,
        vF = gF;

    function yF(e) {
        return mF(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                c = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, c && vF(r[0], r[1], c) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var _F = yF,
        bF = MU,
        EF = _F,
        TF = EF(function(e, t, r) {
            bF(e, t, r)
        }),
        SF = TF;
    class Fs {
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
            return SF(t[0], ...t)
        }
    }
    ge(Fs, "locale"), ge(Fs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const jp = class {
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
    let yr = jp;
    ge(yr, "queryParams", new URLSearchParams(window.location.search)), ge(yr, "getQueryParam", t => jp.queryParams.get(t)), ge(yr, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class At {
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
                namespace: (s = (n = yr.getQueryParam("namespace")) != null ? n : yr.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: yr.queryParams.has("incognito") || yr.queryParams.has("nc")
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
    ge(At, "defaultNamespace", "tv");
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
            if (!At.isSupported) return;
            const n = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                o = `${n}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                c = At.get("galleries") || "[]";
            try {
                const u = JSON.parse(c) || [];
                if (u.some(f => f.url === o)) return;
                u.unshift({
                    url: o,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), At.set("galleries", JSON.stringify(u.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!At.isSupported) return;
            const r = At.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(t, 1), At.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            to.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!At.isSupported) return;
            const r = At.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[t].viewed = !0), At.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var r;
            return ((r = t == null ? void 0 : t.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!At.isSupported) return [];
            const t = new Intl.DateTimeFormat(Fs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = At.get("galleries") || "[]",
                n = Date.now();
            try {
                return (JSON.parse(r) || []).filter(o => n - o.time < 525600 * 60 * 1e3).map(o => {
                    const c = new Date(o.time),
                        u = t.format(c),
                        f = o.url.split("/"),
                        h = f[f.length - 1] === "" ? f[f.length - 2] : f[f.length - 1];
                    let m = o.categoryId;
                    return m || (o.url.indexOf("Quiplash2") !== -1 ? m = "Quiplash2Game" : o.url.indexOf("Drawful") !== -1 ? m = "DrawfulGame" : o.url.indexOf("TeeKO") !== -1 ? m = "TeeKOGame" : o.url.indexOf("TriviaDeath") !== -1 && (m = "TriviaDeathResults")), {
                        id: h,
                        gameName: m,
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

                function f(U) {
                    return U && DataView.prototype.isPrototypeOf(U)
                }
                if (u.arrayBuffer) var h = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    m = ArrayBuffer.isView || function(U) {
                        return U && h.indexOf(Object.prototype.toString.call(U)) > -1
                    };

                function y(U) {
                    if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                    return U.toLowerCase()
                }

                function E(U) {
                    return typeof U != "string" && (U = String(U)), U
                }

                function I(U) {
                    var ie = {
                        next: function() {
                            var de = U.shift();
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

                function k(U) {
                    this.map = {}, U instanceof k ? U.forEach(function(ie, de) {
                        this.append(de, ie)
                    }, this) : Array.isArray(U) ? U.forEach(function(ie) {
                        this.append(ie[0], ie[1])
                    }, this) : U && Object.getOwnPropertyNames(U).forEach(function(ie) {
                        this.append(ie, U[ie])
                    }, this)
                }
                k.prototype.append = function(U, ie) {
                    U = y(U), ie = E(ie);
                    var de = this.map[U];
                    this.map[U] = de ? de + ", " + ie : ie
                }, k.prototype.delete = function(U) {
                    delete this.map[y(U)]
                }, k.prototype.get = function(U) {
                    return U = y(U), this.has(U) ? this.map[U] : null
                }, k.prototype.has = function(U) {
                    return this.map.hasOwnProperty(y(U))
                }, k.prototype.set = function(U, ie) {
                    this.map[y(U)] = E(ie)
                }, k.prototype.forEach = function(U, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && U.call(ie, this.map[de], de, this)
                }, k.prototype.keys = function() {
                    var U = [];
                    return this.forEach(function(ie, de) {
                        U.push(de)
                    }), I(U)
                }, k.prototype.values = function() {
                    var U = [];
                    return this.forEach(function(ie) {
                        U.push(ie)
                    }), I(U)
                }, k.prototype.entries = function() {
                    var U = [];
                    return this.forEach(function(ie, de) {
                        U.push([de, ie])
                    }), I(U)
                }, u.iterable && (k.prototype[Symbol.iterator] = k.prototype.entries);

                function M(U) {
                    if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    U.bodyUsed = !0
                }

                function j(U) {
                    return new Promise(function(ie, de) {
                        U.onload = function() {
                            ie(U.result)
                        }, U.onerror = function() {
                            de(U.error)
                        }
                    })
                }

                function C(U) {
                    var ie = new FileReader,
                        de = j(ie);
                    return ie.readAsArrayBuffer(U), de
                }

                function H(U) {
                    var ie = new FileReader,
                        de = j(ie);
                    return ie.readAsText(U), de
                }

                function X(U) {
                    for (var ie = new Uint8Array(U), de = new Array(ie.length), be = 0; be < ie.length; be++) de[be] = String.fromCharCode(ie[be]);
                    return de.join("")
                }

                function W(U) {
                    if (U.slice) return U.slice(0);
                    var ie = new Uint8Array(U.byteLength);
                    return ie.set(new Uint8Array(U)), ie.buffer
                }

                function G() {
                    return this.bodyUsed = !1, this._initBody = function(U) {
                        this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : u.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : u.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : u.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : u.arrayBuffer && u.blob && f(U) ? (this._bodyArrayBuffer = W(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || m(U)) ? this._bodyArrayBuffer = W(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var U = M(this);
                        if (U) return U;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? M(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(C)
                    }), this.text = function() {
                        var U = M(this);
                        if (U) return U;
                        if (this._bodyBlob) return H(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(X(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, u.formData && (this.formData = function() {
                        return this.text().then(ue)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var Z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function oe(U) {
                    var ie = U.toUpperCase();
                    return Z.indexOf(ie) > -1 ? ie : U
                }

                function ce(U, ie) {
                    ie = ie || {};
                    var de = ie.body;
                    if (U instanceof ce) {
                        if (U.bodyUsed) throw new TypeError("Already read");
                        this.url = U.url, this.credentials = U.credentials, ie.headers || (this.headers = new k(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !de && U._bodyInit != null && (de = U._bodyInit, U.bodyUsed = !0)
                    } else this.url = String(U);
                    if (this.credentials = ie.credentials || this.credentials || "same-origin", (ie.headers || !this.headers) && (this.headers = new k(ie.headers)), this.method = oe(ie.method || this.method || "GET"), this.mode = ie.mode || this.mode || null, this.signal = ie.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(de)
                }
                ce.prototype.clone = function() {
                    return new ce(this, {
                        body: this._bodyInit
                    })
                };

                function ue(U) {
                    var ie = new FormData;
                    return U.trim().split("&").forEach(function(de) {
                        if (de) {
                            var be = de.split("="),
                                ve = be.shift().replace(/\+/g, " "),
                                Se = be.join("=").replace(/\+/g, " ");
                            ie.append(decodeURIComponent(ve), decodeURIComponent(Se))
                        }
                    }), ie
                }

                function $e(U) {
                    var ie = new k,
                        de = U.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(be) {
                        var ve = be.split(":"),
                            Se = ve.shift().trim();
                        if (Se) {
                            var Me = ve.join(":").trim();
                            ie.append(Se, Me)
                        }
                    }), ie
                }
                G.call(ce.prototype);

                function Ce(U, ie) {
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new k(ie.headers), this.url = ie.url || "", this._initBody(U)
                }
                G.call(Ce.prototype), Ce.prototype.clone = function() {
                    return new Ce(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new k(this.headers),
                        url: this.url
                    })
                }, Ce.error = function() {
                    var U = new Ce(null, {
                        status: 0,
                        statusText: ""
                    });
                    return U.type = "error", U
                };
                var fe = [301, 302, 303, 307, 308];
                Ce.redirect = function(U, ie) {
                    if (fe.indexOf(ie) === -1) throw new RangeError("Invalid status code");
                    return new Ce(null, {
                        status: ie,
                        headers: {
                            location: U
                        }
                    })
                }, c.DOMException = o.DOMException;
                try {
                    new c.DOMException
                } catch {
                    c.DOMException = function(ie, de) {
                        this.message = ie, this.name = de;
                        var be = Error(ie);
                        this.stack = be.stack
                    }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
                }

                function Ie(U, ie) {
                    return new Promise(function(de, be) {
                        var ve = new ce(U, ie);
                        if (ve.signal && ve.signal.aborted) return be(new c.DOMException("Aborted", "AbortError"));
                        var Se = new XMLHttpRequest;

                        function Me() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Ge = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: $e(Se.getAllResponseHeaders() || "")
                            };
                            Ge.url = "responseURL" in Se ? Se.responseURL : Ge.headers.get("X-Request-URL");
                            var nt = "response" in Se ? Se.response : Se.responseText;
                            de(new Ce(nt, Ge))
                        }, Se.onerror = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            be(new c.DOMException("Aborted", "AbortError"))
                        }, Se.open(ve.method, ve.url, !0), ve.credentials === "include" ? Se.withCredentials = !0 : ve.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), ve.headers.forEach(function(Ge, nt) {
                            Se.setRequestHeader(nt, Ge)
                        }), ve.signal && (ve.signal.addEventListener("abort", Me), Se.onreadystatechange = function() {
                            Se.readyState === 4 && ve.signal.removeEventListener("abort", Me)
                        }), Se.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                    })
                }
                return Ie.polyfill = !0, o.fetch || (o.fetch = Ie, o.Headers = k, o.Request = ce, o.Response = Ce), c.Headers = k, c.Request = ce, c.Response = Ce, c.fetch = Ie, Object.defineProperty(c, "__esModule", {
                    value: !0
                }), c
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(_d, _d.exports);
    var wF = function() {
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
        by = typeof Symbol < "u" && Symbol,
        OF = wF,
        IF = function() {
            return typeof by != "function" || typeof Symbol != "function" || typeof by("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : OF()
        },
        CF = "Function.prototype.bind called on incompatible ",
        vf = Array.prototype.slice,
        $F = Object.prototype.toString,
        AF = "[object Function]",
        NF = function(t) {
            var r = this;
            if (typeof r != "function" || $F.call(r) !== AF) throw new TypeError(CF + r);
            for (var n = vf.call(arguments, 1), s, o = function() {
                    if (this instanceof s) {
                        var m = r.apply(this, n.concat(vf.call(arguments)));
                        return Object(m) === m ? m : this
                    } else return r.apply(t, n.concat(vf.call(arguments)))
                }, c = Math.max(0, r.length - n.length), u = [], f = 0; f < c; f++) u.push("$" + f);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var h = function() {};
                h.prototype = r.prototype, s.prototype = new h, h.prototype = null
            }
            return s
        },
        RF = NF,
        jh = Function.prototype.bind || RF,
        LF = jh,
        kF = LF.call(Function.call, Object.prototype.hasOwnProperty),
        tt, zs = SyntaxError,
        _T = Function,
        Bs = TypeError,
        yf = function(e) {
            try {
                return _T('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        ns = Object.getOwnPropertyDescriptor;
    if (ns) try {
        ns({}, "")
    } catch {
        ns = null
    }
    var _f = function() {
            throw new Bs
        },
        PF = ns ? function() {
            try {
                return arguments.callee, _f
            } catch {
                try {
                    return ns(arguments, "callee").get
                } catch {
                    return _f
                }
            }
        }() : _f,
        Os = IF(),
        si = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        As = {},
        xF = typeof Uint8Array > "u" ? tt : si(Uint8Array),
        js = {
            "%AggregateError%": typeof AggregateError > "u" ? tt : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? tt : ArrayBuffer,
            "%ArrayIteratorPrototype%": Os ? si([][Symbol.iterator]()) : tt,
            "%AsyncFromSyncIteratorPrototype%": tt,
            "%AsyncFunction%": As,
            "%AsyncGenerator%": As,
            "%AsyncGeneratorFunction%": As,
            "%AsyncIteratorPrototype%": As,
            "%Atomics%": typeof Atomics > "u" ? tt : Atomics,
            "%BigInt%": typeof BigInt > "u" ? tt : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? tt : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? tt : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? tt : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? tt : FinalizationRegistry,
            "%Function%": _T,
            "%GeneratorFunction%": As,
            "%Int8Array%": typeof Int8Array > "u" ? tt : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? tt : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? tt : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Os ? si(si([][Symbol.iterator]())) : tt,
            "%JSON%": typeof JSON == "object" ? JSON : tt,
            "%Map%": typeof Map > "u" ? tt : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Os ? tt : si(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? tt : Promise,
            "%Proxy%": typeof Proxy > "u" ? tt : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? tt : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? tt : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Os ? tt : si(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? tt : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Os ? si("" [Symbol.iterator]()) : tt,
            "%Symbol%": Os ? Symbol : tt,
            "%SyntaxError%": zs,
            "%ThrowTypeError%": PF,
            "%TypedArray%": xF,
            "%TypeError%": Bs,
            "%Uint8Array%": typeof Uint8Array > "u" ? tt : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? tt : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? tt : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? tt : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? tt : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? tt : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? tt : WeakSet
        },
        DF = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = yf("async function () {}");
            else if (t === "%GeneratorFunction%") r = yf("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = yf("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = si(s.prototype))
            }
            return js[t] = r, r
        },
        Ey = {
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
        lo = jh,
        Vc = kF,
        MF = lo.call(Function.call, Array.prototype.concat),
        UF = lo.call(Function.apply, Array.prototype.splice),
        Ty = lo.call(Function.call, String.prototype.replace),
        qc = lo.call(Function.call, String.prototype.slice),
        FF = lo.call(Function.call, RegExp.prototype.exec),
        BF = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        jF = /\\(\\)?/g,
        GF = function(t) {
            var r = qc(t, 0, 1),
                n = qc(t, -1);
            if (r === "%" && n !== "%") throw new zs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new zs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return Ty(t, BF, function(o, c, u, f) {
                s[s.length] = u ? Ty(f, jF, "$1") : c || o
            }), s
        },
        WF = function(t, r) {
            var n = t,
                s;
            if (Vc(Ey, n) && (s = Ey[n], n = "%" + s[0] + "%"), Vc(js, n)) {
                var o = js[n];
                if (o === As && (o = DF(n)), typeof o > "u" && !r) throw new Bs("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new zs("intrinsic " + t + " does not exist!")
        },
        Gh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Bs("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Bs('"allowMissing" argument must be a boolean');
            if (FF(/^%?[^%]*%?$/g, t) === null) throw new zs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = GF(t),
                s = n.length > 0 ? n[0] : "",
                o = WF("%" + s + "%", r),
                c = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], UF(n, MF([0, 1], h)));
            for (var m = 1, y = !0; m < n.length; m += 1) {
                var E = n[m],
                    I = qc(E, 0, 1),
                    k = qc(E, -1);
                if ((I === '"' || I === "'" || I === "`" || k === '"' || k === "'" || k === "`") && I !== k) throw new zs("property names with quotes must have matching quotes");
                if ((E === "constructor" || !y) && (f = !0), s += "." + E, c = "%" + s + "%", Vc(js, c)) u = js[c];
                else if (u != null) {
                    if (!(E in u)) {
                        if (!r) throw new Bs("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (ns && m + 1 >= n.length) {
                        var M = ns(u, E);
                        y = !!M, y && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[E]
                    } else y = Vc(u, E), u = u[E];
                    y && !f && (js[c] = u)
                }
            }
            return u
        },
        bT = {
            exports: {}
        };
    (function(e) {
        var t = jh,
            r = Gh,
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
            var E = o(t, s, arguments);
            if (c && u) {
                var I = c(E, "length");
                I.configurable && u(E, "length", {
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
    })(bT);
    var ET = Gh,
        TT = bT.exports,
        KF = TT(ET("String.prototype.indexOf")),
        HF = function(t, r) {
            var n = ET(t, !!r);
            return typeof n == "function" && KF(t, ".prototype.") > -1 ? TT(n) : n
        };
    const VF = {},
        qF = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: VF
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        YF = Zk(qF);
    var Wh = typeof Map == "function" && Map.prototype,
        bf = Object.getOwnPropertyDescriptor && Wh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Yc = Wh && bf && typeof bf.get == "function" ? bf.get : null,
        zF = Wh && Map.prototype.forEach,
        Kh = typeof Set == "function" && Set.prototype,
        Ef = Object.getOwnPropertyDescriptor && Kh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        zc = Kh && Ef && typeof Ef.get == "function" ? Ef.get : null,
        XF = Kh && Set.prototype.forEach,
        JF = typeof WeakMap == "function" && WeakMap.prototype,
        Fa = JF ? WeakMap.prototype.has : null,
        ZF = typeof WeakSet == "function" && WeakSet.prototype,
        Ba = ZF ? WeakSet.prototype.has : null,
        QF = typeof WeakRef == "function" && WeakRef.prototype,
        Sy = QF ? WeakRef.prototype.deref : null,
        eB = Boolean.prototype.valueOf,
        tB = Object.prototype.toString,
        rB = Function.prototype.toString,
        nB = String.prototype.match,
        Hh = String.prototype.slice,
        ci = String.prototype.replace,
        iB = String.prototype.toUpperCase,
        wy = String.prototype.toLowerCase,
        ST = RegExp.prototype.test,
        Oy = Array.prototype.concat,
        wn = Array.prototype.join,
        sB = Array.prototype.slice,
        Iy = Math.floor,
        bd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Tf = Object.getOwnPropertySymbols,
        Ed = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Xs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        fr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Xs ? "object" : "symbol") ? Symbol.toStringTag : null,
        wT = Object.prototype.propertyIsEnumerable,
        Cy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function $y(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || ST.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -Iy(-e) : Iy(e);
            if (n !== e) {
                var s = String(n),
                    o = Hh.call(t, s.length + 1);
                return ci.call(s, r, "$&_") + "." + ci.call(ci.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return ci.call(t, r, "$&_")
    }
    var Td = YF,
        Ay = Td.custom,
        Ny = IT(Ay) ? Ay : null,
        aB = function e(t, r, n, s) {
            var o = r || {};
            if (ai(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (ai(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var c = ai(o, "customInspect") ? o.customInspect : !0;
            if (typeof c != "boolean" && c !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (ai(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (ai(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var u = o.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return $T(t, o);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return u ? $y(t, f) : f
            }
            if (typeof t == "bigint") {
                var h = String(t) + "n";
                return u ? $y(t, h) : h
            }
            var m = typeof o.depth > "u" ? 5 : o.depth;
            if (typeof n > "u" && (n = 0), n >= m && m > 0 && typeof t == "object") return Sd(t) ? "[Array]" : "[Object]";
            var y = wB(o, n);
            if (typeof s > "u") s = [];
            else if (CT(s, t) >= 0) return "[Circular]";

            function E(Ie, U, ie) {
                if (U && (s = sB.call(s), s.push(U)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return ai(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Ie, de, n + 1, s)
                }
                return e(Ie, o, n + 1, s)
            }
            if (typeof t == "function" && !Ry(t)) {
                var I = gB(t),
                    k = hc(t, E);
                return "[Function" + (I ? ": " + I : " (anonymous)") + "]" + (k.length > 0 ? " { " + wn.call(k, ", ") + " }" : "")
            }
            if (IT(t)) {
                var M = Xs ? ci.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ed.call(t);
                return typeof t == "object" && !Xs ? Na(M) : M
            }
            if (EB(t)) {
                for (var j = "<" + wy.call(String(t.nodeName)), C = t.attributes || [], H = 0; H < C.length; H++) j += " " + C[H].name + "=" + OT(oB(C[H].value), "double", o);
                return j += ">", t.childNodes && t.childNodes.length && (j += "..."), j += "</" + wy.call(String(t.nodeName)) + ">", j
            }
            if (Sd(t)) {
                if (t.length === 0) return "[]";
                var X = hc(t, E);
                return y && !SB(X) ? "[" + wd(X, y) + "]" : "[ " + wn.call(X, ", ") + " ]"
            }
            if (lB(t)) {
                var W = hc(t, E);
                return !("cause" in Error.prototype) && "cause" in t && !wT.call(t, "cause") ? "{ [" + String(t) + "] " + wn.call(Oy.call("[cause]: " + E(t.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + wn.call(W, ", ") + " }"
            }
            if (typeof t == "object" && c) {
                if (Ny && typeof t[Ny] == "function" && Td) return Td(t, {
                    depth: m - n
                });
                if (c !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (mB(t)) {
                var G = [];
                return zF.call(t, function(Ie, U) {
                    G.push(E(U, t, !0) + " => " + E(Ie, t))
                }), Ly("Map", Yc.call(t), G, y)
            }
            if (_B(t)) {
                var Z = [];
                return XF.call(t, function(Ie) {
                    Z.push(E(Ie, t))
                }), Ly("Set", zc.call(t), Z, y)
            }
            if (vB(t)) return Sf("WeakMap");
            if (bB(t)) return Sf("WeakSet");
            if (yB(t)) return Sf("WeakRef");
            if (fB(t)) return Na(E(Number(t)));
            if (hB(t)) return Na(E(bd.call(t)));
            if (dB(t)) return Na(eB.call(t));
            if (uB(t)) return Na(E(String(t)));
            if (!cB(t) && !Ry(t)) {
                var oe = hc(t, E),
                    ce = Cy ? Cy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    $e = !ce && fr && Object(t) === t && fr in t ? Hh.call(bi(t), 8, -1) : ue ? "Object" : "",
                    Ce = ce || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ce + ($e || ue ? "[" + wn.call(Oy.call([], $e || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : y ? fe + "{" + wd(oe, y) + "}" : fe + "{ " + wn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function OT(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function oB(e) {
        return ci.call(String(e), /"/g, "&quot;")
    }

    function Sd(e) {
        return bi(e) === "[object Array]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function cB(e) {
        return bi(e) === "[object Date]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function Ry(e) {
        return bi(e) === "[object RegExp]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function lB(e) {
        return bi(e) === "[object Error]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function uB(e) {
        return bi(e) === "[object String]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function fB(e) {
        return bi(e) === "[object Number]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function dB(e) {
        return bi(e) === "[object Boolean]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function IT(e) {
        if (Xs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Ed) return !1;
        try {
            return Ed.call(e), !0
        } catch {}
        return !1
    }

    function hB(e) {
        if (!e || typeof e != "object" || !bd) return !1;
        try {
            return bd.call(e), !0
        } catch {}
        return !1
    }
    var pB = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function ai(e, t) {
        return pB.call(e, t)
    }

    function bi(e) {
        return tB.call(e)
    }

    function gB(e) {
        if (e.name) return e.name;
        var t = nB.call(rB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function CT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function mB(e) {
        if (!Yc || !e || typeof e != "object") return !1;
        try {
            Yc.call(e);
            try {
                zc.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function vB(e) {
        if (!Fa || !e || typeof e != "object") return !1;
        try {
            Fa.call(e, Fa);
            try {
                Ba.call(e, Ba)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function yB(e) {
        if (!Sy || !e || typeof e != "object") return !1;
        try {
            return Sy.call(e), !0
        } catch {}
        return !1
    }

    function _B(e) {
        if (!zc || !e || typeof e != "object") return !1;
        try {
            zc.call(e);
            try {
                Yc.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function bB(e) {
        if (!Ba || !e || typeof e != "object") return !1;
        try {
            Ba.call(e, Ba);
            try {
                Fa.call(e, Fa)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function EB(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function $T(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return $T(Hh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = ci.call(ci.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, TB);
        return OT(s, "single", t)
    }

    function TB(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + iB.call(t.toString(16))
    }

    function Na(e) {
        return "Object(" + e + ")"
    }

    function Sf(e) {
        return e + " { ? }"
    }

    function Ly(e, t, r, n) {
        var s = n ? wd(r, n) : wn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function SB(e) {
        for (var t = 0; t < e.length; t++)
            if (CT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function wB(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = wn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: wn.call(Array(t + 1), r)
        }
    }

    function wd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + wn.call(e, "," + r) + `
` + t.prev
    }

    function hc(e, t) {
        var r = Sd(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = ai(e, s) ? t(e[s], e) : ""
        }
        var o = typeof Tf == "function" ? Tf(e) : [],
            c;
        if (Xs) {
            c = {};
            for (var u = 0; u < o.length; u++) c["$" + o[u]] = o[u]
        }
        for (var f in e) !ai(e, f) || r && String(Number(f)) === f && f < e.length || Xs && c["$" + f] instanceof Symbol || (ST.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Tf == "function")
            for (var h = 0; h < o.length; h++) wT.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var Vh = Gh,
        ca = HF,
        OB = aB,
        IB = Vh("%TypeError%"),
        pc = Vh("%WeakMap%", !0),
        gc = Vh("%Map%", !0),
        CB = ca("WeakMap.prototype.get", !0),
        $B = ca("WeakMap.prototype.set", !0),
        AB = ca("WeakMap.prototype.has", !0),
        NB = ca("Map.prototype.get", !0),
        RB = ca("Map.prototype.set", !0),
        LB = ca("Map.prototype.has", !0),
        qh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        kB = function(e, t) {
            var r = qh(e, t);
            return r && r.value
        },
        PB = function(e, t, r) {
            var n = qh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        xB = function(e, t) {
            return !!qh(e, t)
        },
        DB = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new IB("Side channel does not contain " + OB(o))
                },
                get: function(o) {
                    if (pc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return CB(t, o)
                    } else if (gc) {
                        if (r) return NB(r, o)
                    } else if (n) return kB(n, o)
                },
                has: function(o) {
                    if (pc && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return AB(t, o)
                    } else if (gc) {
                        if (r) return LB(r, o)
                    } else if (n) return xB(n, o);
                    return !1
                },
                set: function(o, c) {
                    pc && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new pc), $B(t, o, c)) : gc ? (r || (r = new gc), RB(r, o, c)) : (n || (n = {
                        key: {},
                        next: null
                    }), PB(n, o, c))
                }
            };
            return s
        },
        MB = String.prototype.replace,
        UB = /%20/g,
        wf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Yh = {
            default: wf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return MB.call(e, UB, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: wf.RFC1738,
            RFC3986: wf.RFC3986
        },
        FB = Yh,
        Of = Object.prototype.hasOwnProperty,
        Xi = Array.isArray,
        _n = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        BB = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (Xi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        AT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        jB = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (Xi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Of.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return Xi(t) && !Xi(r) && (s = AT(t, n)), Xi(t) && Xi(r) ? (r.forEach(function(o, c) {
                if (Of.call(t, c)) {
                    var u = t[c];
                    u && typeof u == "object" && o && typeof o == "object" ? t[c] = e(u, o, n) : t.push(o)
                } else t[c] = o
            }), t) : Object.keys(r).reduce(function(o, c) {
                var u = r[c];
                return Of.call(o, c) ? o[c] = e(o[c], u, n) : o[c] = u, o
            }, s)
        },
        GB = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        WB = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        KB = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var c = t;
            if (typeof t == "symbol" ? c = Symbol.prototype.toString.call(t) : typeof t != "string" && (c = String(t)), n === "iso-8859-1") return escape(c).replace(/%u[0-9a-f]{4}/gi, function(m) {
                return "%26%23" + parseInt(m.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < c.length; ++f) {
                var h = c.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === FB.RFC1738 && (h === 40 || h === 41)) {
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
        HB = function(t) {
            for (var r = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], n = [], s = 0; s < r.length; ++s)
                for (var o = r[s], c = o.obj[o.prop], u = Object.keys(c), f = 0; f < u.length; ++f) {
                    var h = u[f],
                        m = c[h];
                    typeof m == "object" && m !== null && n.indexOf(m) === -1 && (r.push({
                        obj: c,
                        prop: h
                    }), n.push(m))
                }
            return BB(r), t
        },
        VB = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        qB = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        YB = function(t, r) {
            return [].concat(t, r)
        },
        zB = function(t, r) {
            if (Xi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        NT = {
            arrayToObject: AT,
            assign: GB,
            combine: YB,
            compact: HB,
            decode: WB,
            encode: KB,
            isBuffer: qB,
            isRegExp: VB,
            maybeMap: zB,
            merge: jB
        },
        RT = DB,
        Od = NT,
        ja = Yh,
        XB = Object.prototype.hasOwnProperty,
        ky = {
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
        JB = String.prototype.split,
        ZB = Array.prototype.push,
        LT = function(e, t) {
            ZB.apply(e, Fn(t) ? t : [t])
        },
        QB = Date.prototype.toISOString,
        Py = ja.default,
        er = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Od.encode,
            encodeValuesOnly: !1,
            format: Py,
            formatter: ja.formatters[Py],
            indices: !1,
            serializeDate: function(t) {
                return QB.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        e3 = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        If = {},
        t3 = function e(t, r, n, s, o, c, u, f, h, m, y, E, I, k, M, j) {
            for (var C = t, H = j, X = 0, W = !1;
                (H = H.get(If)) !== void 0 && !W;) {
                var G = H.get(t);
                if (X += 1, typeof G < "u") {
                    if (G === X) throw new RangeError("Cyclic object value");
                    W = !0
                }
                typeof H.get(If) > "u" && (X = 0)
            }
            if (typeof f == "function" ? C = f(r, C) : C instanceof Date ? C = y(C) : n === "comma" && Fn(C) && (C = Od.maybeMap(C, function(Se) {
                    return Se instanceof Date ? y(Se) : Se
                })), C === null) {
                if (o) return u && !k ? u(r, er.encoder, M, "key", E) : r;
                C = ""
            }
            if (e3(C) || Od.isBuffer(C)) {
                if (u) {
                    var Z = k ? r : u(r, er.encoder, M, "key", E);
                    if (n === "comma" && k) {
                        for (var oe = JB.call(String(C), ","), ce = "", ue = 0; ue < oe.length; ++ue) ce += (ue === 0 ? "" : ",") + I(u(oe[ue], er.encoder, M, "value", E));
                        return [I(Z) + (s && Fn(C) && oe.length === 1 ? "[]" : "") + "=" + ce]
                    }
                    return [I(Z) + "=" + I(u(C, er.encoder, M, "value", E))]
                }
                return [I(r) + "=" + I(String(C))]
            }
            var $e = [];
            if (typeof C > "u") return $e;
            var Ce;
            if (n === "comma" && Fn(C)) Ce = [{
                value: C.length > 0 ? C.join(",") || null : void 0
            }];
            else if (Fn(f)) Ce = f;
            else {
                var fe = Object.keys(C);
                Ce = h ? fe.sort(h) : fe
            }
            for (var Ie = s && Fn(C) && C.length === 1 ? r + "[]" : r, U = 0; U < Ce.length; ++U) {
                var ie = Ce[U],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : C[ie];
                if (!(c && de === null)) {
                    var be = Fn(C) ? typeof n == "function" ? n(Ie, ie) : Ie : Ie + (m ? "." + ie : "[" + ie + "]");
                    j.set(t, X);
                    var ve = RT();
                    ve.set(If, j), LT($e, e(de, be, n, s, o, c, u, f, h, m, y, E, I, k, M, ve))
                }
            }
            return $e
        },
        r3 = function(t) {
            if (!t) return er;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || er.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = ja.default;
            if (typeof t.format < "u") {
                if (!XB.call(ja.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = ja.formatters[n],
                o = er.filter;
            return (typeof t.filter == "function" || Fn(t.filter)) && (o = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : er.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? er.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : er.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? er.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : er.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : er.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : er.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : er.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : er.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : er.strictNullHandling
            }
        },
        n3 = function(e, t) {
            var r = e,
                n = r3(t),
                s, o;
            typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : Fn(n.filter) && (o = n.filter, s = o);
            var c = [];
            if (typeof r != "object" || r === null) return "";
            var u;
            t && t.arrayFormat in ky ? u = t.arrayFormat : t && "indices" in t ? u = t.indices ? "indices" : "repeat" : u = "indices";
            var f = ky[u];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var h = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var m = RT(), y = 0; y < s.length; ++y) {
                var E = s[y];
                n.skipNulls && r[E] === null || LT(c, t3(r[E], E, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, m))
            }
            var I = c.join(n.delimiter),
                k = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? k += "utf8=%26%2310003%3B&" : k += "utf8=%E2%9C%93&"), I.length > 0 ? k + I : ""
        },
        Js = NT,
        Id = Object.prototype.hasOwnProperty,
        i3 = Array.isArray,
        zt = {
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
        s3 = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        kT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        a3 = "utf8=%26%2310003%3B",
        o3 = "utf8=%E2%9C%93",
        c3 = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                c = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < c.length; ++f) c[f].indexOf("utf8=") === 0 && (c[f] === o3 ? h = "utf-8" : c[f] === a3 && (h = "iso-8859-1"), u = f, f = c.length);
            for (f = 0; f < c.length; ++f)
                if (f !== u) {
                    var m = c[f],
                        y = m.indexOf("]="),
                        E = y === -1 ? m.indexOf("=") : y + 1,
                        I, k;
                    E === -1 ? (I = r.decoder(m, zt.decoder, h, "key"), k = r.strictNullHandling ? null : "") : (I = r.decoder(m.slice(0, E), zt.decoder, h, "key"), k = Js.maybeMap(kT(m.slice(E + 1), r), function(M) {
                        return r.decoder(M, zt.decoder, h, "value")
                    })), k && r.interpretNumericEntities && h === "iso-8859-1" && (k = s3(k)), m.indexOf("[]=") > -1 && (k = i3(k) ? [k] : k), Id.call(n, I) ? n[I] = Js.combine(n[I], k) : n[I] = k
                } return n
        },
        l3 = function(e, t, r, n) {
            for (var s = n ? t : kT(t, r), o = e.length - 1; o >= 0; --o) {
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
        u3 = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    c = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && c.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    m = [];
                if (h) {
                    if (!n.plainObjects && Id.call(Object.prototype, h) && !n.allowPrototypes) return;
                    m.push(h)
                }
                for (var y = 0; n.depth > 0 && (f = u.exec(o)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && Id.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    m.push(f[1])
                }
                return f && m.push("[" + o.slice(f.index) + "]"), l3(m, r, n, s)
            }
        },
        f3 = function(t) {
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
                delimiter: typeof t.delimiter == "string" || Js.isRegExp(t.delimiter) ? t.delimiter : zt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : zt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : zt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : zt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : zt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : zt.strictNullHandling
            }
        },
        d3 = function(e, t) {
            var r = f3(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? c3(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), c = 0; c < o.length; ++c) {
                var u = o[c],
                    f = u3(u, n[u], r, typeof e == "string");
                s = Js.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Js.compact(s)
        },
        h3 = n3,
        p3 = d3,
        g3 = Yh,
        PT = {
            formats: g3,
            parse: p3,
            stringify: h3
        };
    class m3 {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class v3 {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class y3 {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class _3 {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class b3 {}
    var Rl = {
        CreateRoomReply: m3,
        GetRoomReply: v3,
        GetAudienceReply: y3,
        RoomExit: _3,
        RoomLock: b3
    };
    const xy = _d.exports,
        E3 = PT,
        {
            CreateRoomReply: T3,
            GetRoomReply: S3
        } = Rl;
    class w3 {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = E3.stringify(r);
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
                c = await (await xy(n, {
                    method: "POST"
                })).json();
            if (!c.ok) throw new Error(`failed to create room: ${c.error}`);
            let u = c.body;
            return new T3({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await xy(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new S3({
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
    var O3 = {
            APIClient: w3
        },
        Ns = null;
    typeof WebSocket < "u" ? Ns = WebSocket : typeof MozWebSocket < "u" ? Ns = MozWebSocket : typeof Dt < "u" ? Ns = Dt.WebSocket || Dt.MozWebSocket : typeof window < "u" ? Ns = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ns = self.WebSocket || self.MozWebSocket);
    var I3 = Ns,
        zh = {
            exports: {}
        },
        Gs = typeof Reflect == "object" ? Reflect : null,
        Dy = Gs && typeof Gs.apply == "function" ? Gs.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        Rc;
    Gs && typeof Gs.ownKeys == "function" ? Rc = Gs.ownKeys : Object.getOwnPropertySymbols ? Rc = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Rc = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function C3(e) {
        console && console.warn && console.warn(e)
    }
    var xT = Number.isNaN || function(t) {
        return t !== t
    };

    function pt() {
        pt.init.call(this)
    }
    zh.exports = pt;
    zh.exports.once = R3;
    pt.EventEmitter = pt;
    pt.prototype._events = void 0;
    pt.prototype._eventsCount = 0;
    pt.prototype._maxListeners = void 0;
    var My = 10;

    function Ll(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(pt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return My
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || xT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            My = e
        }
    });
    pt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    pt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || xT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function DT(e) {
        return e._maxListeners === void 0 ? pt.defaultMaxListeners : e._maxListeners
    }
    pt.prototype.getMaxListeners = function() {
        return DT(this)
    };
    pt.prototype.emit = function(t) {
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
        if (typeof f == "function") Dy(f, this, r);
        else
            for (var h = f.length, m = jT(f, h), n = 0; n < h; ++n) Dy(m[n], this, r);
        return !0
    };

    function MT(e, t, r, n) {
        var s, o, c;
        if (Ll(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), c = o[t]), c === void 0) c = o[t] = r, ++e._eventsCount;
        else if (typeof c == "function" ? c = o[t] = n ? [r, c] : [c, r] : n ? c.unshift(r) : c.push(r), s = DT(e), s > 0 && c.length > s && !c.warned) {
            c.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + c.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = c.length, C3(u)
        }
        return e
    }
    pt.prototype.addListener = function(t, r) {
        return MT(this, t, r, !1)
    };
    pt.prototype.on = pt.prototype.addListener;
    pt.prototype.prependListener = function(t, r) {
        return MT(this, t, r, !0)
    };

    function $3() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function UT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = $3.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    pt.prototype.once = function(t, r) {
        return Ll(r), this.on(t, UT(this, t, r)), this
    };
    pt.prototype.prependOnceListener = function(t, r) {
        return Ll(r), this.prependListener(t, UT(this, t, r)), this
    };
    pt.prototype.removeListener = function(t, r) {
        var n, s, o, c, u;
        if (Ll(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, c = n.length - 1; c >= 0; c--)
                if (n[c] === r || n[c].listener === r) {
                    u = n[c].listener, o = c;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : A3(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
        }
        return this
    };
    pt.prototype.off = pt.prototype.removeListener;
    pt.prototype.removeAllListeners = function(t) {
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

    function FT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? N3(s) : jT(s, s.length)
    }
    pt.prototype.listeners = function(t) {
        return FT(this, t, !0)
    };
    pt.prototype.rawListeners = function(t) {
        return FT(this, t, !1)
    };
    pt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : BT.call(e, t)
    };
    pt.prototype.listenerCount = BT;

    function BT(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    pt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Rc(this._events) : []
    };

    function jT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function A3(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function N3(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function R3(e, t) {
        return new Promise(function(r, n) {
            function s(c) {
                e.removeListener(t, o), n(c)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            GT(e, t, o, {
                once: !0
            }), t !== "error" && L3(e, s, {
                once: !0
            })
        })
    }

    function L3(e, t, r) {
        typeof e.on == "function" && GT(e, "error", t, r)
    }

    function GT(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class k3 {
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
    class kl extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class uo extends kl {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class WT extends uo {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class KT extends uo {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class HT extends uo {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ft extends kl {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class VT extends ft {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class qT extends ft {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class YT extends ft {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class zT extends ft {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class XT extends ft {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class JT extends ft {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class ZT extends ft {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class QT extends ft {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class e0 extends ft {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class t0 extends ft {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class r0 extends ft {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class n0 extends ft {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class i0 extends ft {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class s0 extends ft {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class a0 extends ft {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class o0 extends ft {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class c0 extends ft {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class l0 extends ft {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class u0 extends ft {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class f0 extends ft {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class d0 extends ft {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class h0 extends ft {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class p0 extends ft {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class g0 extends ft {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class m0 extends ft {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class v0 extends ft {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class y0 extends ft {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class _0 extends ft {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function P3({
        code: e,
        message: t
    }) {
        const r = x3[e];
        return r ? new r({
            message: t
        }) : new kl({
            message: t
        })
    }
    var fi = {
        createError: P3,
        CallError: kl,
        EcastServerError: uo,
        EcastCreateRoomFailed: WT,
        EcastDialRoomFailed: KT,
        EcastServerIsShuttingDown: HT,
        EcastClientError: ft,
        EcastParseError: VT,
        EcastRequestIsMissingOpcode: qT,
        EcastRequestHasInvalidOpcode: YT,
        EcastRequestHasInvalidArguments: zT,
        EcastEntityNotFound: XT,
        EcastEntityAlreadyExists: JT,
        EcastEntityTypeError: ZT,
        EcastNoSuchClient: QT,
        EcastRoomIsLocked: e0,
        EcastRoomIsFull: t0,
        EcastLicenseNotFound: r0,
        EcastLicenseCheckFailed: n0,
        EcastRoomNotFound: i0,
        EcastInvalidRole: s0,
        EcastTwitchLoginRequired: a0,
        EcastInvalidOption: o0,
        EcastPasswordRequired: c0,
        EcastInvalidPassword: l0,
        EcastNameRequired: u0,
        EcastFilterError: f0,
        EcastNoSuchFilter: d0,
        EcastPermissionDenied: h0,
        EcastNotConnected: p0,
        EcastIllegalOperation: g0,
        EcastACLChangeDenied: m0,
        EcastRoomHasEnded: v0,
        EcastEntityLocked: y0,
        EcastRateLimitExceeded: _0,
        ObservedError: k3
    };
    const x3 = {
        1e3: uo,
        1001: WT,
        1002: KT,
        1003: HT,
        2e3: ft,
        2001: VT,
        2002: qT,
        2003: YT,
        2004: zT,
        2005: XT,
        2006: JT,
        2007: ZT,
        2008: QT,
        2009: e0,
        2010: t0,
        2011: r0,
        2012: n0,
        2013: i0,
        2014: s0,
        2015: a0,
        2016: o0,
        2017: c0,
        2018: l0,
        2019: u0,
        2021: f0,
        2022: d0,
        2023: h0,
        2024: p0,
        2025: g0,
        2026: m0,
        2027: v0,
        2028: y0,
        2420: _0
    };
    class D3 {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class M3 {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class U3 {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class F3 {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class B3 {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var Xh = {
        ClientConnected: M3,
        ClientDisconnected: U3,
        ClientKicked: B3,
        ClientSend: F3,
        ClientWelcome: D3
    };
    class j3 {
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
    var Jh = {
        CountGroup: j3
    };
    class G3 {
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
        GCounter: G3
    };
    class W3 {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var b0 = {
        Notification: W3
    };
    class K3 {
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
    class H3 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var Qh = {
        ObjectEntity: K3,
        ObjectEcho: H3
    };
    class V3 {
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
    var ep = {
        PNCounter: V3
    };
    class q3 {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var E0 = {
        Reply: q3
    };
    class Y3 {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var z3 = {
        Request: Y3
    };
    class X3 {
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
    class J3 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var tp = {
        TextEntity: X3,
        TextEcho: J3
    };
    class Z3 {
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
    var rp = {
        TextRing: Z3
    };
    class Q3 {
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
    var T0 = {
        ArtifactEntity: Q3
    };
    class e8 {
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
    class t8 {
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
    class r8 {
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
    var np = {
        DoodleEntity: e8,
        DoodleLine: t8,
        DoodleLineRemoved: r8
    };
    class n8 {
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
    class i8 {
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
    class s8 {
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
    var S0 = {
        StackEntity: n8,
        StackElement: i8,
        StackElements: s8
    };
    class a8 {
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
    var w0 = {
        DropEntity: a8
    };
    class o8 {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var c8 = {
        Echo: o8
    };
    class l8 {
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
    var u8 = {
        LockEntity: l8
    };
    class f8 {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var O0 = {
        OK: f8
    };
    class d8 {
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
    var I0 = {
        NumberEntity: d8
    };
    const {
        ArtifactEntity: h8
    } = T0, {
        ClientWelcome: p8,
        ClientConnected: g8,
        ClientDisconnected: m8,
        ClientKicked: v8,
        ClientSend: y8
    } = Xh, {
        CountGroup: _8
    } = Jh, {
        DoodleEntity: b8,
        DoodleLine: E8,
        DoodleLineRemoved: T8
    } = np, {
        StackEntity: S8,
        StackElement: w8,
        StackElements: O8
    } = S0, {
        DropEntity: I8
    } = w0, {
        Echo: C8
    } = c8, {
        LockEntity: $8
    } = u8, {
        GCounter: A8
    } = Zh, {
        GetAudienceReply: N8,
        RoomExit: R8,
        RoomLock: L8
    } = Rl, {
        Notification: k8
    } = b0, {
        OK: P8
    } = O0, {
        NumberEntity: x8
    } = I0, {
        ObjectEcho: D8,
        ObjectEntity: M8
    } = Qh, {
        PNCounter: Uy
    } = ep, {
        Reply: U8
    } = E0, {
        TextEcho: F8,
        TextEntity: B8
    } = tp, {
        TextRing: j8
    } = rp, {
        createError: Fy,
        ObservedError: G8
    } = fi;

    function Cd(e, t, r) {
        switch (e) {
            case "ok":
                return new P8;
            case "echo":
                return new C8({
                    message: t.message
                });
            case "lock":
                return new $8({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return Fy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new G8({
                    to: t.to,
                    error: Fy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new B8({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new F8({
                    message: t.message
                });
            case "object":
                return new M8({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new D8({
                    message: t.message
                });
            case "drop":
                return new I8({
                    key: t.key
                });
            case "artifact":
                return new h8({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new g8({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new m8({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new v8({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new y8({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new p8({
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
                        s[o] = Cd(c[0], c[1], c[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new b8({
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
                return new E8({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new T8({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new S8({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new w8({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new O8({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new x8({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new R8({
                    cause: t.cause
                });
            case "room/lock":
                return new L8;
            case "room/get-audience":
                return new N8({
                    connections: t.connections
                });
            case "audience":
                return new Uy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new _8({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new j8({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new A8({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new Uy({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function W8(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new U8({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Cd(r, t.result)
        }) : new k8({
            pc: t.pc,
            opcode: r,
            result: Cd(r, t.result)
        })
    }
    var K8 = {
        parseResponseMessage: W8
    };
    const By = I3,
        H8 = PT,
        V8 = zh.exports,
        {
            CallError: q8
        } = fi,
        {
            ClientWelcome: Y8
        } = Xh,
        {
            CountGroup: z8
        } = Jh,
        {
            GCounter: X8
        } = Zh,
        {
            Notification: jy
        } = b0,
        {
            ObjectEntity: Cf
        } = Qh,
        {
            PNCounter: J8
        } = ep,
        {
            Reply: Z8
        } = E0,
        {
            Request: Q8
        } = z3,
        {
            TextEntity: $f
        } = tp,
        {
            TextRing: e4
        } = rp,
        {
            parseResponseMessage: t4
        } = K8,
        {
            DoodleEntity: r4
        } = np,
        {
            StackEntity: n4
        } = S0,
        i4 = 1e3 + Math.floor(Math.random() * 500),
        Gy = 13e3;
    class s4 extends V8 {
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
            const r = H8.stringify(t),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((s, o) => {
                let c = !1,
                    u = !1,
                    f = m => {
                        s(m), c = !0
                    },
                    h = m => {
                        o(m), c = !0
                    };
                this.conn = new By(n, "ecast-v0"), this.conn.onmessage = m => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(m.data),null,2)}`);
                    const y = t4(m);
                    if (y instanceof Z8) this.onReply(y);
                    else if (y instanceof jy) {
                        if (y.result instanceof Y8) u = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
                        else if (!c) {
                            h(y.result);
                            return
                        }
                        this.onNotification(y)
                    } else console.error(`failed to parse response messsage: ${y}`)
                }, this.conn.onerror = m => {
                    c ? this.emit("socketError", m) : h(m)
                }, this.conn.onclose = m => {
                    this.debugLog("onclose", m.code), u && m.code === 1006 ? this.reconnect() : this.emit("socketClose", m)
                }, this.conn.onopen = m => {
                    this.emit("socketOpen", m)
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
                r = i4;
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
                if (r >= Gy) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(Gy, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new jy(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof q8 ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== By.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new Q8({
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
                    accept: c,
                    reject: u
                } = n;
            o && (s.acl = o), c && (s.accept = c), u && (s.reject = u);
            const f = await this.send("text/create", s);
            return this.entities[t] = new $f({
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
            return this.entities[t] = new $f({
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
            return this.entities[t] = new $f({
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
            const m = await this.send("doodle/create", n);
            return this.entities[t] = new r4({
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
            }), m
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
            return this.entities[t] = new n4({
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
            return this.entities[t] = new z8({
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
            return this.entities[t] = new X8({
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
            return this.entities[t] = new J8({
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
            return this.entities[t] = new e4({
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
    var a4 = {
        WSClient: s4
    };
    const {
        APIClient: o4
    } = O3, {
        WSClient: c4
    } = a4, {
        CreateRoomReply: l4,
        GetRoomReply: u4
    } = Rl, {
        ClientWelcome: f4,
        ClientDisconnected: d4
    } = Xh, {
        ArtifactEntity: h4
    } = T0, {
        GCounter: p4
    } = Zh, {
        NumberEntity: g4
    } = I0, {
        TextEntity: m4
    } = tp, {
        DoodleEntity: v4
    } = np, {
        ObjectEntity: y4
    } = Qh, {
        CountGroup: _4
    } = Jh, {
        DropEntity: b4
    } = w0, {
        OK: E4
    } = O0, {
        RoomExit: T4
    } = Rl, {
        TextRing: S4
    } = rp, {
        PNCounter: w4
    } = ep;
    var Ir = {
        APIClient: o4,
        WSClient: c4,
        ClientWelcome: f4,
        CreateRoomReply: l4,
        DropEntity: b4,
        GetRoomReply: u4,
        ClientDisconnected: d4,
        RoomExit: T4,
        OK: E4,
        ArtifactEntity: h4,
        DoodleEntity: v4,
        NumberEntity: g4,
        CountGroup: _4,
        GCounter: p4,
        ObjectEntity: y4,
        PNCounter: w4,
        TextEntity: m4,
        TextRing: S4
    };
    const O4 = [{
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
        $d = e => O4.find(t => t.tag === e || t.categoryId === e);

    function Ad(...e) {
        console.log(...e)
    }
    class I4 {
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
            Ad("[Debug] pushEntity", t), t instanceof Ir.ArtifactEntity ? this.items.push({
                type: "artifact",
                ...t
            }) : t instanceof Ir.DoodleEntity ? this.items.push({
                type: "doodle",
                ...t
            }) : t instanceof Ir.DropEntity ? this.items.push({
                key: t.key,
                type: "drop"
            }) : t instanceof Ir.NumberEntity ? this.items.push({
                key: t.key,
                type: "number",
                value: t.val,
                meta: t.meta,
                restrictions: t.restrictions
            }) : t instanceof Ir.ObjectEntity ? (t.val.kind && (this.automarkPendingLabel = t.val.kind), this.items.push({
                key: t.key,
                type: "object",
                value: t.val,
                meta: t.meta
            })) : t instanceof Ir.TextEntity && this.items.push({
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
                    c = s[s.length - 2];
                return {
                    json: n.body.url,
                    dev: `https://dev.jackbox.tv/debug/cloud/${c}/${o}/`,
                    local: `http://localhost:9090/debug/cloud/${c}/${o}/`
                }
            } catch (r) {
                return console.error("[Debug] sendToEcast", r), null
            }
        }
        async sendToSlack(t, r) {
            var f;
            if (!this.room || !this.client) return;
            const n = $d(this.room.appTag),
                s = this.items.length - this.markerCount,
                o = `${this.markerCount} ${this.markerCount===1?"marker":"markers"}`,
                c = `${s} ${s===1?"entity":"entities"}`,
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
                    y = `*${(f=n==null?void 0:n.name)!=null?f:this.room.appTag} :${this.room.appTag}:* (${o}, ${c}) 

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
                    I = {
                        unfurl_links: !1,
                        blocks: E
                    };
                if (this.room) {
                    I.icon_emoji = this.room.appTag;
                    const j = $d(this.room.appTag);
                    I.username = `DebugRecorder ${j?j.name:this.room.appTag}`
                }
                const M = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify(I)
                })).text();
                Ad("[Debug] sendToSlack", M)
            } catch (h) {
                console.error("[Debug] sendToSlack", h)
            }
        }
        download(t) {
            var c, u;
            const r = t != null ? t : `${(u=(c=this.room)==null?void 0:c.appTag)!=null?u:"unknown"}-debug`,
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

    function C4(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Wy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(Dt, function(r) {
            var n = typeof window < "u" ? window : typeof Dt < "u" ? Dt : typeof self < "u" ? self : {},
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
                c;

            function u(O) {
                try {
                    return decodeURIComponent(O.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function f(O) {
                try {
                    return encodeURIComponent(O)
                } catch {
                    return null
                }
            }

            function h(O) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, R = {}, S; S = T.exec(O);) {
                    var L = u(S[1]),
                        Q = u(S[2]);
                    L === null || Q === null || L in R || (R[L] = Q)
                }
                return R
            }

            function m(O, T) {
                T = T || "";
                var R = [],
                    S, L;
                typeof T != "string" && (T = "?");
                for (L in O)
                    if (o.call(O, L)) {
                        if (S = O[L], !S && (S === null || S === c || isNaN(S)) && (S = ""), L = f(L), S = f(S), L === null || S === null) continue;
                        R.push(L + "=" + S)
                    } return R.length ? T + R.join("&") : ""
            }
            var y = m,
                E = h,
                I = {
                    stringify: y,
                    parse: E
                },
                k = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                j = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                C = new RegExp("^" + j + "+");

            function H(O) {
                return (O || "").toString().replace(C, "")
            }
            var X = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, R) {
                        return Z(R.protocol) ? T.replace(/\\/g, "/") : T
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

            function G(O) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var R = T.location || {};
                O = O || R;
                var S = {},
                    L = typeof O,
                    Q;
                if (O.protocol === "blob:") S = new ue(unescape(O.pathname), {});
                else if (L === "string") {
                    S = new ue(O, {});
                    for (Q in W) delete S[Q]
                } else if (L === "object") {
                    for (Q in O) Q in W || (S[Q] = O[Q]);
                    S.slashes === void 0 && (S.slashes = k.test(O.href))
                }
                return S
            }

            function Z(O) {
                return O === "file:" || O === "ftp:" || O === "http:" || O === "https:" || O === "ws:" || O === "wss:"
            }

            function oe(O, T) {
                O = H(O), T = T || {};
                var R = M.exec(O),
                    S = R[1] ? R[1].toLowerCase() : "",
                    L = !!R[2],
                    Q = !!R[3],
                    ne = 0,
                    _e;
                return L ? Q ? (_e = R[2] + R[3] + R[4], ne = R[2].length + R[3].length) : (_e = R[2] + R[4], ne = R[2].length) : Q ? (_e = R[3] + R[4], ne = R[3].length) : _e = R[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : Z(S) ? _e = R[4] : S ? L && (_e = _e.slice(2)) : ne >= 2 && Z(T.protocol) && (_e = R[4]), {
                    protocol: S,
                    slashes: L || Z(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function ce(O, T) {
                if (O === "") return T;
                for (var R = (T || "/").split("/").slice(0, -1).concat(O.split("/")), S = R.length, L = R[S - 1], Q = !1, ne = 0; S--;) R[S] === "." ? R.splice(S, 1) : R[S] === ".." ? (R.splice(S, 1), ne++) : ne && (S === 0 && (Q = !0), R.splice(S, 1), ne--);
                return Q && R.unshift(""), (L === "." || L === "..") && R.push(""), R.join("/")
            }

            function ue(O, T, R) {
                if (O = H(O), !(this instanceof ue)) return new ue(O, T, R);
                var S, L, Q, ne, _e, Te, dt = X.slice(),
                    sr = typeof T,
                    xe = this,
                    da = 0;
                for (sr !== "object" && sr !== "string" && (R = T, T = null), R && typeof R != "function" && (R = I.parse), T = G(T), L = oe(O || "", T), S = !L.protocol && !L.slashes, xe.slashes = L.slashes || S && T.slashes, xe.protocol = L.protocol || T.protocol || "", O = L.rest, (xe.protocol === "file:" || !L.slashes && (L.protocol || L.slashesCount < 2 || !Z(xe.protocol))) && (dt[3] = [/(.*)/, "pathname"]); da < dt.length; da++) {
                    if (ne = dt[da], typeof ne == "function") {
                        O = ne(O, xe);
                        continue
                    }
                    Q = ne[0], Te = ne[1], Q !== Q ? xe[Te] = O : typeof Q == "string" ? ~(_e = O.indexOf(Q)) && (typeof ne[2] == "number" ? (xe[Te] = O.slice(0, _e), O = O.slice(_e + ne[2])) : (xe[Te] = O.slice(_e), O = O.slice(0, _e))) : (_e = Q.exec(O)) && (xe[Te] = _e[1], O = O.slice(0, _e.index)), xe[Te] = xe[Te] || S && ne[3] && T[Te] || "", ne[4] && (xe[Te] = xe[Te].toLowerCase())
                }
                R && (xe.query = R(xe.query)), S && T.slashes && xe.pathname.charAt(0) !== "/" && (xe.pathname !== "" || T.pathname !== "") && (xe.pathname = ce(xe.pathname, T.pathname)), xe.pathname.charAt(0) !== "/" && Z(xe.protocol) && (xe.pathname = "/" + xe.pathname), s(xe.port, xe.protocol) || (xe.host = xe.hostname, xe.port = ""), xe.username = xe.password = "", xe.auth && (ne = xe.auth.split(":"), xe.username = ne[0] || "", xe.password = ne[1] || ""), xe.origin = xe.protocol !== "file:" && Z(xe.protocol) && xe.host ? xe.protocol + "//" + xe.host : "null", xe.href = xe.toString()
            }

            function $e(O, T, R) {
                var S = this;
                switch (O) {
                    case "query":
                        typeof T == "string" && T.length && (T = (R || I.parse)(T)), S[O] = T;
                        break;
                    case "port":
                        S[O] = T, s(T, S.protocol) ? T && (S.host = S.hostname + ":" + T) : (S.host = S.hostname, S[O] = "");
                        break;
                    case "hostname":
                        S[O] = T, S.port && (T += ":" + S.port), S.host = T;
                        break;
                    case "host":
                        S[O] = T, /:\d+$/.test(T) ? (T = T.split(":"), S.port = T.pop(), S.hostname = T.join(":")) : (S.hostname = T, S.port = "");
                        break;
                    case "protocol":
                        S.protocol = T.toLowerCase(), S.slashes = !R;
                        break;
                    case "pathname":
                    case "hash":
                        if (T) {
                            var L = O === "pathname" ? "/" : "#";
                            S[O] = T.charAt(0) !== L ? L + T : T
                        } else S[O] = T;
                        break;
                    default:
                        S[O] = T
                }
                for (var Q = 0; Q < X.length; Q++) {
                    var ne = X[Q];
                    ne[4] && (S[ne[1]] = S[ne[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && Z(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function Ce(O) {
                (!O || typeof O != "function") && (O = I.stringify);
                var T, R = this,
                    S = R.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var L = S + (R.slashes || Z(R.protocol) ? "//" : "");
                return R.username && (L += R.username, R.password && (L += ":" + R.password), L += "@"), L += R.host + R.pathname, T = typeof R.query == "object" ? O(R.query) : R.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), R.hash && (L += R.hash), L
            }
            ue.prototype = {
                set: $e,
                toString: Ce
            }, ue.extractProtocol = oe, ue.location = G, ue.trimLeft = H, ue.qs = I;
            var fe = ue;

            function Ie(O, T) {
                setTimeout(function(R) {
                    return O.call(R)
                }, 4, T)
            }

            function U(O, T) {
                typeof process < "u" && console[O].call(null, T)
            }

            function ie(O, T) {
                O === void 0 && (O = []);
                var R = [];
                return O.forEach(function(S) {
                    T(S) || R.push(S)
                }), R
            }

            function de(O, T) {
                O === void 0 && (O = []);
                var R = [];
                return O.forEach(function(S) {
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
                var Q = T.type,
                    ne = this.listeners[Q];
                return Array.isArray(ne) ? (ne.forEach(function(_e) {
                    S.length > 0 ? _e.apply(R, S) : _e.call(R, T)
                }), !0) : !1
            };

            function ve(O) {
                var T = O.indexOf("?");
                return T >= 0 ? O.slice(0, T) : O
            }
            var Se = function() {
                this.urlMap = {}
            };
            Se.prototype.attachWebSocket = function(T, R) {
                var S = ve(R),
                    L = this.urlMap[S];
                if (L && L.server && L.websockets.indexOf(T) === -1) return L.websockets.push(T), L.server
            }, Se.prototype.addMembershipToRoom = function(T, R) {
                var S = this.urlMap[ve(T.url)];
                S && S.server && S.websockets.indexOf(T) !== -1 && (S.roomMemberships[R] || (S.roomMemberships[R] = []), S.roomMemberships[R].push(T))
            }, Se.prototype.attachServer = function(T, R) {
                var S = ve(R),
                    L = this.urlMap[S];
                if (!L) return this.urlMap[S] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Se.prototype.serverLookup = function(T) {
                var R = ve(T),
                    S = this.urlMap[R];
                if (S) return S.server
            }, Se.prototype.websocketsLookup = function(T, R, S) {
                var L = ve(T),
                    Q, ne = this.urlMap[L];
                if (Q = ne ? ne.websockets : [], R) {
                    var _e = ne.roomMemberships[R];
                    Q = _e || []
                }
                return S ? Q.filter(function(Te) {
                    return Te !== S
                }) : Q
            }, Se.prototype.removeServer = function(T) {
                delete this.urlMap[ve(T)]
            }, Se.prototype.removeWebSocket = function(T, R) {
                var S = ve(R),
                    L = this.urlMap[S];
                L && (L.websockets = ie(L.websockets, function(Q) {
                    return Q === T
                }))
            }, Se.prototype.removeMembershipFromRoom = function(T, R) {
                var S = this.urlMap[ve(T.url)],
                    L = S.roomMemberships[R];
                S && L !== null && (S.roomMemberships[R] = ie(L, function(Q) {
                    return Q === T
                }))
            };
            var Me = new Se,
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
                nt = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                Rt = function() {};
            Rt.prototype.stopPropagation = function() {}, Rt.prototype.stopImmediatePropagation = function() {}, Rt.prototype.initEvent = function(T, R, S) {
                T === void 0 && (T = "undefined"), R === void 0 && (R = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(R), this.cancelable = Boolean(S)
            };
            var Ar = function(O) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), O.call(this), !R) throw new TypeError(nt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(nt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var L = S.bubbles,
                            Q = S.cancelable;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(Rt),
                ir = function(O) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), O.call(this), !R) throw new TypeError(nt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(nt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            dt = S.ports;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.canncelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.origin = "" + _e, this.ports = typeof dt > "u" ? null : dt, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Te || "")
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(Rt),
                _r = function(O) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), O.call(this), !R) throw new TypeError(nt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(nt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(Rt);

            function ct(O) {
                var T = O.type,
                    R = O.target,
                    S = new Ar(T);
                return R && (S.target = R, S.srcElement = R, S.currentTarget = R), S
            }

            function Ot(O) {
                var T = O.type,
                    R = O.origin,
                    S = O.data,
                    L = O.target,
                    Q = new ir(T, {
                        data: S,
                        origin: R
                    });
                return L && (Q.target = L, Q.srcElement = L, Q.currentTarget = L), Q
            }

            function lt(O) {
                var T = O.code,
                    R = O.reason,
                    S = O.type,
                    L = O.target,
                    Q = O.wasClean;
                Q || (Q = T === Ge.CLOSE_NORMAL || T === Ge.CLOSE_NO_STATUS);
                var ne = new _r(S, {
                    code: T,
                    reason: R,
                    wasClean: Q
                });
                return L && (ne.target = L, ne.srcElement = L, ne.currentTarget = L), ne
            }

            function Mt(O, T, R) {
                O.readyState = Y.CLOSING;
                var S = Me.serverLookup(O.url),
                    L = lt({
                        type: "close",
                        target: O.target,
                        code: T,
                        reason: R
                    }),
                    Q = lt({
                        type: "server::close",
                        target: O,
                        code: T,
                        reason: R
                    });
                Ie(function() {
                    Me.removeWebSocket(O, O.url), O.readyState = Y.CLOSED, O.dispatchEvent(L), O.dispatchEvent(Q), S && S.dispatchEvent(L, S)
                }, O)
            }

            function qt(O, T, R) {
                O.readyState = Y.CLOSING;
                var S = Me.serverLookup(O.url),
                    L = lt({
                        type: "close",
                        target: O.target,
                        code: T,
                        reason: R,
                        wasClean: !1
                    }),
                    Q = lt({
                        type: "server::close",
                        target: O,
                        code: T,
                        reason: R,
                        wasClean: !1
                    }),
                    ne = ct({
                        type: "error",
                        target: O.target
                    });
                Ie(function() {
                    Me.removeWebSocket(O, O.url), O.readyState = Y.CLOSED, O.dispatchEvent(ne), O.dispatchEvent(L), O.dispatchEvent(Q), S && S.dispatchEvent(L, S)
                }, O)
            }

            function Ut(O) {
                return Object.prototype.toString.call(O) !== "[object Blob]" && !(O instanceof ArrayBuffer) && (O = String(O)), O
            }
            var g = new WeakMap;

            function p(O) {
                if (g.has(O)) return g.get(O);
                var T = new Proxy(O, {
                    get: function(S, L) {
                        return L === "close" ? function(ne) {
                            ne === void 0 && (ne = {});
                            var _e = ne.code || Ge.CLOSE_NORMAL,
                                Te = ne.reason || "";
                            Mt(T, _e, Te)
                        } : L === "send" ? function(ne) {
                            ne = Ut(ne), O.dispatchEvent(Ot({
                                type: "message",
                                data: ne,
                                origin: this.url,
                                target: O
                            }))
                        } : L === "on" ? function(ne, _e) {
                            O.addEventListener("server::" + ne, _e)
                        } : L === "target" ? O : S[L]
                    }
                });
                return g.set(O, T), T
            }

            function w(O) {
                var T = encodeURIComponent(O).match(/%[89ABab]/g);
                return O.length + (T ? T.length : 0)
            }

            function D(O) {
                var T = new fe(O),
                    R = T.pathname,
                    S = T.protocol,
                    L = T.hash;
                if (!O) throw new TypeError(nt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (R || (T.pathname = "/"), S === "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (L !== "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + L + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(O) {
                if (O === void 0 && (O = []), !Array.isArray(O) && typeof O != "string") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The subprotocol '" + O.toString() + "' is invalid.");
                typeof O == "string" && (O = [O]);
                var T = O.map(function(S) {
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
                if (R.length > 0) throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The subprotocol '" + R[0] + "' is duplicated.");
                return O
            }
            var Y = function(O) {
                function T(S, L) {
                    O.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = D(S), L = B(L), this.protocol = L[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var Q = p(this),
                        ne = Me.attachWebSocket(Q, this.url);
                    Ie(function() {
                        if (ne)
                            if (ne.options.verifyClient && typeof ne.options.verifyClient == "function" && !ne.options.verifyClient()) this.readyState = T.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Me.removeWebSocket(Q, this.url), this.dispatchEvent(ct({
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
                                        dt = Te !== "",
                                        sr = L.indexOf(Te) !== -1;
                                    if (dt && !sr) {
                                        this.readyState = T.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Me.removeWebSocket(Q, this.url), this.dispatchEvent(ct({
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
                                this.readyState = T.OPEN, this.dispatchEvent(ct({
                                    type: "open",
                                    target: this
                                })), ne.dispatchEvent(ct({
                                    type: "connection"
                                }), Q)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(ct({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), U("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T;
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
                    var Q = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = Ot({
                            type: "server::message",
                            origin: this.url,
                            data: Ut(L)
                        }),
                        _e = Me.serverLookup(this.url);
                    _e && Ie(function() {
                        Q.dispatchEvent(ne, L)
                    }, _e)
                }, T.prototype.close = function(L, Q) {
                    if (L !== void 0 && (typeof L != "number" || L !== 1e3 && (L < 3e3 || L > 4999))) throw new TypeError(nt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + L + " is neither.");
                    if (Q !== void 0) {
                        var ne = w(Q);
                        if (ne > 123) throw new SyntaxError(nt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? qt(_e, L || Ge.CLOSE_ABNORMAL, Q) : Mt(_e, L || Ge.CLOSE_NO_STATUS, Q)
                    }
                }, Object.defineProperties(T.prototype, R), T
            }(be);
            Y.CONNECTING = 0, Y.prototype.CONNECTING = Y.CONNECTING, Y.OPEN = 1, Y.prototype.OPEN = Y.OPEN, Y.CLOSING = 2, Y.prototype.CLOSING = Y.CLOSING, Y.CLOSED = 3, Y.prototype.CLOSED = Y.CLOSED;
            var le = function(O) {
                return O.reduce(function(T, R) {
                    return T.indexOf(R) > -1 ? T : T.concat(R)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof C4 == "function" && typeof Dt == "object" ? Dt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                A = function(O) {
                    function T(R, S) {
                        S === void 0 && (S = re), O.call(this);
                        var L = new fe(R);
                        L.pathname || (L.pathname = "/"), this.url = L.toString(), this.originalWebSocket = null;
                        var Q = Me.attachServer(this, this.url);
                        if (!Q) throw this.dispatchEvent(ct({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, S), this.options.mock && this.mockWebsocket()
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = se();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = Y
                    }, T.prototype.restoreWebsocket = function() {
                        var S = se();
                        this.originalWebSocket !== null && (S.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, T.prototype.stop = function(S) {
                        S === void 0 && (S = function() {}), this.options.mock && this.restoreWebsocket(), Me.removeServer(this.url), typeof S == "function" && S()
                    }, T.prototype.on = function(S, L) {
                        this.addEventListener(S, L)
                    }, T.prototype.close = function(S) {
                        S === void 0 && (S = {});
                        var L = S.code,
                            Q = S.reason,
                            ne = S.wasClean,
                            _e = Me.websocketsLookup(this.url);
                        Me.removeServer(this.url), _e.forEach(function(Te) {
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
                        _e || (_e = Me.websocketsLookup(this.url)), typeof Q != "object" || arguments.length > 3 ? (L = Array.prototype.slice.call(arguments, 1, arguments.length), L = L.map(function(Te) {
                            return Ut(Te)
                        })) : L = Ut(L), _e.forEach(function(Te) {
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
                        return Me.websocketsLookup(this.url)
                    }, T.prototype.to = function(S, L, Q) {
                        var ne = this;
                        Q === void 0 && (Q = []);
                        var _e = this,
                            Te = le(Q.concat(Me.websocketsLookup(this.url, S, L)));
                        return {
                            to: function(dt, sr) {
                                return ne.to.call(ne, dt, sr, Te)
                            },
                            emit: function(sr, xe) {
                                _e.emit(sr, xe, {
                                    websockets: Te
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var S = [], L = arguments.length; L--;) S[L] = arguments[L];
                        return this.to.apply(null, S)
                    }, T.prototype.simulate = function(S) {
                        var L = Me.websocketsLookup(this.url);
                        S === "error" && L.forEach(function(Q) {
                            Q.readyState = Y.CLOSED, Q.dispatchEvent(ct({
                                type: "error"
                            }))
                        })
                    }, T
                }(be);
            A.of = function(T) {
                return new A(T)
            };
            var K = function(O) {
                function T(S, L) {
                    var Q = this;
                    S === void 0 && (S = "socket.io"), L === void 0 && (L = ""), O.call(this), this.binaryType = "blob";
                    var ne = new fe(S);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof L == "string" || typeof L == "object" && L !== null ? this.protocol = L : Array.isArray(L) && L.length > 0 && (this.protocol = L[0]);
                    var _e = Me.attachWebSocket(this, this.url);
                    Ie(function() {
                        _e ? (this.readyState = T.OPEN, _e.dispatchEvent(ct({
                            type: "connection"
                        }), _e, this), _e.dispatchEvent(ct({
                            type: "connect"
                        }), _e, this), this.dispatchEvent(ct({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(ct({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(lt({
                            type: "close",
                            target: this,
                            code: Ge.CLOSE_NORMAL
                        })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Te) {
                        Q.dispatchEvent(lt({
                            type: "disconnect",
                            target: Te.target,
                            code: Te.code
                        }))
                    })
                }
                O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T;
                var R = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var L = Me.serverLookup(this.url);
                        return Me.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(lt({
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
                        Te = Me.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(Q)), this
                }, T.prototype.send = function(L) {
                    return this.emit("message", L), this
                }, R.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var S = this,
                        L = Me.serverLookup(this.url);
                    if (!L) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ne, _e) {
                            return L.emit(ne, _e, {
                                websockets: Me.websocketsLookup(S.url, null, S)
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
                    Me.addMembershipToRoom(this, L)
                }, T.prototype.leave = function(L) {
                    Me.removeMembershipFromRoom(this, L)
                }, T.prototype.to = function(L) {
                    return this.broadcast.to(L)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(L) {
                    for (var Q = this, ne = [], _e = arguments.length - 1; _e-- > 0;) ne[_e] = arguments[_e + 1];
                    var Te = L.type,
                        dt = this.listeners[Te];
                    if (!Array.isArray(dt)) return !1;
                    dt.forEach(function(sr) {
                        ne.length > 0 ? sr.apply(Q, ne) : sr.call(Q, L.data ? L.data : L)
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
                Ae = Y,
                Pe = he;
            r.Server = pe, r.WebSocket = Ae, r.SocketIO = Pe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Wy, Wy.exports);
    var C0 = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(u, f) {
                var h = u.x - f.x,
                    m = u.y - f.y;
                return h * h + m * m
            }

            function r(u, f, h) {
                var m = f.x,
                    y = f.y,
                    E = h.x - m,
                    I = h.y - y;
                if (E !== 0 || I !== 0) {
                    var k = ((u.x - m) * E + (u.y - y) * I) / (E * E + I * I);
                    k > 1 ? (m = h.x, y = h.y) : k > 0 && (m += E * k, y += I * k)
                }
                return E = u.x - m, I = u.y - y, E * E + I * I
            }

            function n(u, f) {
                for (var h = u[0], m = [h], y, E = 1, I = u.length; E < I; E++) y = u[E], t(y, h) > f && (m.push(y), h = y);
                return h !== y && m.push(y), m
            }

            function s(u, f, h, m, y) {
                for (var E = m, I, k = f + 1; k < h; k++) {
                    var M = r(u[k], u[f], u[h]);
                    M > E && (I = k, E = M)
                }
                E > m && (I - f > 1 && s(u, f, I, m, y), y.push(u[I]), h - I > 1 && s(u, I, h, m, y))
            }

            function o(u, f) {
                var h = u.length - 1,
                    m = [u[0]];
                return s(u, 0, h, f, m), m.push(u[h]), m
            }

            function c(u, f, h) {
                if (u.length <= 2) return u;
                var m = f !== void 0 ? f * f : 1;
                return u = h ? u : n(u, m), u = o(u, m), u
            }
            e.exports = c, e.exports.default = c
        })()
    })(C0);
    const $0 = C0.exports;
    class $4 {
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
                x: yr.toPrecision(n.x, this.precision),
                y: yr.toPrecision(n.y, this.precision)
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
                points: $0(this.points, .5).map(r => ({
                    x: yr.toPrecision(r.x, this.precision),
                    y: yr.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class A4 {
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
                n = $0(this.currentLine.points);
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
    class N4 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new A4(t, this.width, this.height, r)
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
                m = (this.getPropValue(r, "padding-top") + this.getPropValue(r, "padding-bottom")) * c;
            return {
                scaleX: (n.width - u - h) / t.width,
                scaleY: (n.height - f - m) / t.height,
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
    class Ky {
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
            const n = $d(r.room.appTag),
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
                    BASE_URL: "https://bundles.jackbox.tv/main/pp8-survey-bomb/",
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
            const m = {
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
                    body: JSON.stringify(m)
                })).text();
                Ad("[Feedback] sendToSlack", I)
            } catch (E) {
                console.error("[Feedback] sendToSlack", E)
            }
        }
    }
    class A0 {
        static withTypes(t, r) {
            let n = t;
            return r.forEach(s => {
                s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
            }), n
        }
        static html(t) {
            if (String(t).match(/<fart>/g)) {
                const n = new Audio(new URL("main/pp8/survey-bomb/assets/4af6cbea.wav", self.location).href);
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
    const R4 = {
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
        L4 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        k4 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        P4 = "LOADING",
        x4 = {
            JOINED_COUNT: "{count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "1 player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        D4 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        M4 = {
            AND: "AND",
            OR: "OR"
        },
        U4 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        F4 = {
            NAME: "AUDIENCE"
        },
        B4 = {
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
        j4 = {
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
        G4 = {
            ACTION: R4,
            ALT: L4,
            ERROR: k4,
            LOADING: P4,
            LOBBY: x4,
            POST_GAME: D4,
            SEPARATOR: M4,
            TUTORIAL: U4,
            AUDIENCE: F4,
            UGC: B4,
            TOAST: j4
        },
        W4 = {
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
        K4 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        H4 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        V4 = "CHARGEMENT",
        q4 = {
            JOINED_COUNT: "1\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "1\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        Y4 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        z4 = {
            AND: "ET",
            OR: "OU"
        },
        X4 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        J4 = {
            NAME: "SPECTATEURS"
        },
        Z4 = {
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
        Q4 = {
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
        ej = {
            ACTION: W4,
            ALT: K4,
            ERROR: H4,
            LOADING: V4,
            LOBBY: q4,
            POST_GAME: Y4,
            SEPARATOR: z4,
            TUTORIAL: X4,
            AUDIENCE: J4,
            UGC: Z4,
            TOAST: Q4
        },
        tj = {
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
        rj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        nj = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        ij = "CARICAMENTO",
        sj = {
            JOINED_COUNT: "Sta partecipando 1 giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "Manca 1 giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        aj = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        oj = {
            AND: "E",
            OR: "O"
        },
        cj = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        lj = {
            NAME: "PUBBLICO"
        },
        uj = {
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
        fj = {
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
        dj = {
            ACTION: tj,
            ALT: rj,
            ERROR: nj,
            LOADING: ij,
            LOBBY: sj,
            POST_GAME: aj,
            SEPARATOR: oj,
            TUTORIAL: cj,
            AUDIENCE: lj,
            UGC: uj,
            TOAST: fj
        },
        hj = {
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
        pj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        gj = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        mj = "LADE",
        vj = {
            JOINED_COUNT: "{count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "{count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        yj = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        _j = {
            AND: "UND",
            OR: "ODER"
        },
        bj = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        Ej = {
            NAME: "PUBLIKUM"
        },
        Tj = {
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
        Sj = {
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
        wj = {
            ACTION: hj,
            ALT: pj,
            ERROR: gj,
            LOADING: mj,
            LOBBY: vj,
            POST_GAME: yj,
            SEPARATOR: _j,
            TUTORIAL: bj,
            AUDIENCE: Ej,
            UGC: Tj,
            TOAST: Sj
        },
        Oj = {
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
        Ij = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        Cj = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        $j = "CARGANDO",
        Aj = {
            JOINED_COUNT: "Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        Nj = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        Rj = {
            AND: "Y",
            OR: "O"
        },
        Lj = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        kj = {
            NAME: "P\xDABLICO"
        },
        Pj = {
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
        xj = {
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
        Dj = {
            ACTION: Oj,
            ALT: Ij,
            ERROR: Cj,
            LOADING: $j,
            LOBBY: Aj,
            POST_GAME: Nj,
            SEPARATOR: Rj,
            TUTORIAL: Lj,
            AUDIENCE: kj,
            UGC: Pj,
            TOAST: xj
        },
        Mj = {
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
        Uj = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        Fj = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        Bj = "CARGANDO",
        jj = {
            JOINED_COUNT: "Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        Gj = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        Wj = {
            AND: "Y",
            OR: "O"
        },
        Kj = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        Hj = {
            NAME: "P\xDABLICO"
        },
        Vj = {
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
        qj = {
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
        Yj = {
            ACTION: Mj,
            ALT: Uj,
            ERROR: Fj,
            LOADING: Bj,
            LOBBY: jj,
            POST_GAME: Gj,
            SEPARATOR: Wj,
            TUTORIAL: Kj,
            AUDIENCE: Hj,
            UGC: Vj,
            TOAST: qj
        },
        zj = {
            en: G4,
            fr: ej,
            it: dj,
            de: wj,
            es: Dj,
            "es-XL": Yj
        },
        Xj = Je({
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
                const e = gi();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = jn(new $4(e, this.player.doodle, this.canvasOptions))
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
        Jj = {
            class: "doodle"
        },
        Zj = {
            ref: "canvas"
        },
        Qj = ["disabled"],
        eG = ["disabled"];

    function tG(e, t, r, n, s, o) {
        const c = Kt("pointerbox-translate"),
            u = Kt("pointerbox"),
            f = Kt("t");
        return F(), V("div", Jj, [qe((F(), V("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [qe(z("canvas", Zj, null, 512), [
            [c, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? Oe("", !0) : qe((F(), V("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Cr((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, Qj)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? Oe("", !0) : qe((F(), V("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Cr((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, eG)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const rG = He(Xj, [
        ["render", tG]
    ]);
    var Nd = {
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
                m = "__lodash_placeholder__",
                y = 1,
                E = 2,
                I = 4,
                k = 1,
                M = 2,
                j = 1,
                C = 2,
                H = 4,
                X = 8,
                W = 16,
                G = 32,
                Z = 64,
                oe = 128,
                ce = 256,
                ue = 512,
                $e = 30,
                Ce = "...",
                fe = 800,
                Ie = 16,
                U = 1,
                ie = 2,
                de = 3,
                be = 1 / 0,
                ve = 9007199254740991,
                Se = 17976931348623157e292,
                Me = 0 / 0,
                Ge = 4294967295,
                nt = Ge - 1,
                Rt = Ge >>> 1,
                Ar = [
                    ["ary", oe],
                    ["bind", j],
                    ["bindKey", C],
                    ["curry", X],
                    ["curryRight", W],
                    ["flip", ue],
                    ["partial", G],
                    ["partialRight", Z],
                    ["rearg", ce]
                ],
                ir = "[object Arguments]",
                _r = "[object Array]",
                ct = "[object AsyncFunction]",
                Ot = "[object Boolean]",
                lt = "[object Date]",
                Mt = "[object DOMException]",
                qt = "[object Error]",
                Ut = "[object Function]",
                g = "[object GeneratorFunction]",
                p = "[object Map]",
                w = "[object Number]",
                D = "[object Null]",
                B = "[object Object]",
                Y = "[object Promise]",
                le = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                A = "[object String]",
                K = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ae = "[object WeakSet]",
                Pe = "[object ArrayBuffer]",
                O = "[object DataView]",
                T = "[object Float32Array]",
                R = "[object Float64Array]",
                S = "[object Int8Array]",
                L = "[object Int16Array]",
                Q = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                dt = "[object Uint32Array]",
                sr = /\b__p \+= '';/g,
                xe = /\b(__p \+=) '' \+/g,
                da = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Gp = /&(?:amp|lt|gt|quot|#39);/g,
                Wp = /[&<>"']/g,
                kS = RegExp(Gp.source),
                PS = RegExp(Wp.source),
                xS = /<%-([\s\S]+?)%>/g,
                DS = /<%([\s\S]+?)%>/g,
                Kp = /<%=([\s\S]+?)%>/g,
                MS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                US = /^\w*$/,
                FS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Ql = /[\\^$.*+?()[\]{}|]/g,
                BS = RegExp(Ql.source),
                eu = /^\s+/,
                jS = /\s/,
                GS = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                WS = /\{\n\/\* \[wrapped with (.+)\] \*/,
                KS = /,? & /,
                HS = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                VS = /[()=,{}\[\]\/\s]/,
                qS = /\\(\\)?/g,
                YS = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Hp = /\w*$/,
                zS = /^[-+]0x[0-9a-f]+$/i,
                XS = /^0b[01]+$/i,
                JS = /^\[object .+?Constructor\]$/,
                ZS = /^0o[0-7]+$/i,
                QS = /^(?:0|[1-9]\d*)$/,
                ew = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                bo = /($^)/,
                tw = /['\n\r\u2028\u2029\\]/g,
                Eo = "\\ud800-\\udfff",
                rw = "\\u0300-\\u036f",
                nw = "\\ufe20-\\ufe2f",
                iw = "\\u20d0-\\u20ff",
                Vp = rw + nw + iw,
                qp = "\\u2700-\\u27bf",
                Yp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                sw = "\\xac\\xb1\\xd7\\xf7",
                aw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                ow = "\\u2000-\\u206f",
                cw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                zp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Xp = "\\ufe0e\\ufe0f",
                Jp = sw + aw + ow + cw,
                tu = "['\u2019]",
                lw = "[" + Eo + "]",
                Zp = "[" + Jp + "]",
                To = "[" + Vp + "]",
                Qp = "\\d+",
                uw = "[" + qp + "]",
                eg = "[" + Yp + "]",
                tg = "[^" + Eo + Jp + Qp + qp + Yp + zp + "]",
                ru = "\\ud83c[\\udffb-\\udfff]",
                fw = "(?:" + To + "|" + ru + ")",
                rg = "[^" + Eo + "]",
                nu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                iu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                fs = "[" + zp + "]",
                ng = "\\u200d",
                ig = "(?:" + eg + "|" + tg + ")",
                dw = "(?:" + fs + "|" + tg + ")",
                sg = "(?:" + tu + "(?:d|ll|m|re|s|t|ve))?",
                ag = "(?:" + tu + "(?:D|LL|M|RE|S|T|VE))?",
                og = fw + "?",
                cg = "[" + Xp + "]?",
                hw = "(?:" + ng + "(?:" + [rg, nu, iu].join("|") + ")" + cg + og + ")*",
                pw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                gw = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                lg = cg + og + hw,
                mw = "(?:" + [uw, nu, iu].join("|") + ")" + lg,
                vw = "(?:" + [rg + To + "?", To, nu, iu, lw].join("|") + ")",
                yw = RegExp(tu, "g"),
                _w = RegExp(To, "g"),
                su = RegExp(ru + "(?=" + ru + ")|" + vw + lg, "g"),
                bw = RegExp([fs + "?" + eg + "+" + sg + "(?=" + [Zp, fs, "$"].join("|") + ")", dw + "+" + ag + "(?=" + [Zp, fs + ig, "$"].join("|") + ")", fs + "?" + ig + "+" + sg, fs + "+" + ag, gw, pw, Qp, mw].join("|"), "g"),
                Ew = RegExp("[" + ng + Eo + Vp + Xp + "]"),
                Tw = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Sw = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                ww = -1,
                St = {};
            St[T] = St[R] = St[S] = St[L] = St[Q] = St[ne] = St[_e] = St[Te] = St[dt] = !0, St[ir] = St[_r] = St[Pe] = St[Ot] = St[O] = St[lt] = St[qt] = St[Ut] = St[p] = St[w] = St[B] = St[se] = St[re] = St[A] = St[pe] = !1;
            var _t = {};
            _t[ir] = _t[_r] = _t[Pe] = _t[O] = _t[Ot] = _t[lt] = _t[T] = _t[R] = _t[S] = _t[L] = _t[Q] = _t[p] = _t[w] = _t[B] = _t[se] = _t[re] = _t[A] = _t[K] = _t[ne] = _t[_e] = _t[Te] = _t[dt] = !0, _t[qt] = _t[Ut] = _t[pe] = !1;
            var Ow = {
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
                Iw = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                Cw = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                $w = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Aw = parseFloat,
                Nw = parseInt,
                ug = typeof Dt == "object" && Dt && Dt.Object === Object && Dt,
                Rw = typeof self == "object" && self && self.Object === Object && self,
                Zt = ug || Rw || Function("return this")(),
                au = t && !t.nodeType && t,
                Ci = au && !0 && e && !e.nodeType && e,
                fg = Ci && Ci.exports === au,
                ou = fg && ug.process,
                jr = function() {
                    try {
                        var P = Ci && Ci.require && Ci.require("util").types;
                        return P || ou && ou.binding && ou.binding("util")
                    } catch {}
                }(),
                dg = jr && jr.isArrayBuffer,
                hg = jr && jr.isDate,
                pg = jr && jr.isMap,
                gg = jr && jr.isRegExp,
                mg = jr && jr.isSet,
                vg = jr && jr.isTypedArray;

            function Nr(P, J, q) {
                switch (q.length) {
                    case 0:
                        return P.call(J);
                    case 1:
                        return P.call(J, q[0]);
                    case 2:
                        return P.call(J, q[0], q[1]);
                    case 3:
                        return P.call(J, q[0], q[1], q[2])
                }
                return P.apply(J, q)
            }

            function Lw(P, J, q, Ee) {
                for (var Ue = -1, st = P == null ? 0 : P.length; ++Ue < st;) {
                    var Bt = P[Ue];
                    J(Ee, Bt, q(Bt), P)
                }
                return Ee
            }

            function Gr(P, J) {
                for (var q = -1, Ee = P == null ? 0 : P.length; ++q < Ee && J(P[q], q, P) !== !1;);
                return P
            }

            function kw(P, J) {
                for (var q = P == null ? 0 : P.length; q-- && J(P[q], q, P) !== !1;);
                return P
            }

            function yg(P, J) {
                for (var q = -1, Ee = P == null ? 0 : P.length; ++q < Ee;)
                    if (!J(P[q], q, P)) return !1;
                return !0
            }

            function Kn(P, J) {
                for (var q = -1, Ee = P == null ? 0 : P.length, Ue = 0, st = []; ++q < Ee;) {
                    var Bt = P[q];
                    J(Bt, q, P) && (st[Ue++] = Bt)
                }
                return st
            }

            function So(P, J) {
                var q = P == null ? 0 : P.length;
                return !!q && ds(P, J, 0) > -1
            }

            function cu(P, J, q) {
                for (var Ee = -1, Ue = P == null ? 0 : P.length; ++Ee < Ue;)
                    if (q(J, P[Ee])) return !0;
                return !1
            }

            function It(P, J) {
                for (var q = -1, Ee = P == null ? 0 : P.length, Ue = Array(Ee); ++q < Ee;) Ue[q] = J(P[q], q, P);
                return Ue
            }

            function Hn(P, J) {
                for (var q = -1, Ee = J.length, Ue = P.length; ++q < Ee;) P[Ue + q] = J[q];
                return P
            }

            function lu(P, J, q, Ee) {
                var Ue = -1,
                    st = P == null ? 0 : P.length;
                for (Ee && st && (q = P[++Ue]); ++Ue < st;) q = J(q, P[Ue], Ue, P);
                return q
            }

            function Pw(P, J, q, Ee) {
                var Ue = P == null ? 0 : P.length;
                for (Ee && Ue && (q = P[--Ue]); Ue--;) q = J(q, P[Ue], Ue, P);
                return q
            }

            function uu(P, J) {
                for (var q = -1, Ee = P == null ? 0 : P.length; ++q < Ee;)
                    if (J(P[q], q, P)) return !0;
                return !1
            }
            var xw = fu("length");

            function Dw(P) {
                return P.split("")
            }

            function Mw(P) {
                return P.match(HS) || []
            }

            function _g(P, J, q) {
                var Ee;
                return q(P, function(Ue, st, Bt) {
                    if (J(Ue, st, Bt)) return Ee = st, !1
                }), Ee
            }

            function wo(P, J, q, Ee) {
                for (var Ue = P.length, st = q + (Ee ? 1 : -1); Ee ? st-- : ++st < Ue;)
                    if (J(P[st], st, P)) return st;
                return -1
            }

            function ds(P, J, q) {
                return J === J ? zw(P, J, q) : wo(P, bg, q)
            }

            function Uw(P, J, q, Ee) {
                for (var Ue = q - 1, st = P.length; ++Ue < st;)
                    if (Ee(P[Ue], J)) return Ue;
                return -1
            }

            function bg(P) {
                return P !== P
            }

            function Eg(P, J) {
                var q = P == null ? 0 : P.length;
                return q ? hu(P, J) / q : Me
            }

            function fu(P) {
                return function(J) {
                    return J == null ? r : J[P]
                }
            }

            function du(P) {
                return function(J) {
                    return P == null ? r : P[J]
                }
            }

            function Tg(P, J, q, Ee, Ue) {
                return Ue(P, function(st, Bt, gt) {
                    q = Ee ? (Ee = !1, st) : J(q, st, Bt, gt)
                }), q
            }

            function Fw(P, J) {
                var q = P.length;
                for (P.sort(J); q--;) P[q] = P[q].value;
                return P
            }

            function hu(P, J) {
                for (var q, Ee = -1, Ue = P.length; ++Ee < Ue;) {
                    var st = J(P[Ee]);
                    st !== r && (q = q === r ? st : q + st)
                }
                return q
            }

            function pu(P, J) {
                for (var q = -1, Ee = Array(P); ++q < P;) Ee[q] = J(q);
                return Ee
            }

            function Bw(P, J) {
                return It(J, function(q) {
                    return [q, P[q]]
                })
            }

            function Sg(P) {
                return P && P.slice(0, Cg(P) + 1).replace(eu, "")
            }

            function Rr(P) {
                return function(J) {
                    return P(J)
                }
            }

            function gu(P, J) {
                return It(J, function(q) {
                    return P[q]
                })
            }

            function ha(P, J) {
                return P.has(J)
            }

            function wg(P, J) {
                for (var q = -1, Ee = P.length; ++q < Ee && ds(J, P[q], 0) > -1;);
                return q
            }

            function Og(P, J) {
                for (var q = P.length; q-- && ds(J, P[q], 0) > -1;);
                return q
            }

            function jw(P, J) {
                for (var q = P.length, Ee = 0; q--;) P[q] === J && ++Ee;
                return Ee
            }
            var Gw = du(Ow),
                Ww = du(Iw);

            function Kw(P) {
                return "\\" + $w[P]
            }

            function Hw(P, J) {
                return P == null ? r : P[J]
            }

            function hs(P) {
                return Ew.test(P)
            }

            function Vw(P) {
                return Tw.test(P)
            }

            function qw(P) {
                for (var J, q = []; !(J = P.next()).done;) q.push(J.value);
                return q
            }

            function mu(P) {
                var J = -1,
                    q = Array(P.size);
                return P.forEach(function(Ee, Ue) {
                    q[++J] = [Ue, Ee]
                }), q
            }

            function Ig(P, J) {
                return function(q) {
                    return P(J(q))
                }
            }

            function Vn(P, J) {
                for (var q = -1, Ee = P.length, Ue = 0, st = []; ++q < Ee;) {
                    var Bt = P[q];
                    (Bt === J || Bt === m) && (P[q] = m, st[Ue++] = q)
                }
                return st
            }

            function Oo(P) {
                var J = -1,
                    q = Array(P.size);
                return P.forEach(function(Ee) {
                    q[++J] = Ee
                }), q
            }

            function Yw(P) {
                var J = -1,
                    q = Array(P.size);
                return P.forEach(function(Ee) {
                    q[++J] = [Ee, Ee]
                }), q
            }

            function zw(P, J, q) {
                for (var Ee = q - 1, Ue = P.length; ++Ee < Ue;)
                    if (P[Ee] === J) return Ee;
                return -1
            }

            function Xw(P, J, q) {
                for (var Ee = q + 1; Ee--;)
                    if (P[Ee] === J) return Ee;
                return Ee
            }

            function ps(P) {
                return hs(P) ? Zw(P) : xw(P)
            }

            function nn(P) {
                return hs(P) ? Qw(P) : Dw(P)
            }

            function Cg(P) {
                for (var J = P.length; J-- && jS.test(P.charAt(J)););
                return J
            }
            var Jw = du(Cw);

            function Zw(P) {
                for (var J = su.lastIndex = 0; su.test(P);) ++J;
                return J
            }

            function Qw(P) {
                return P.match(su) || []
            }

            function eO(P) {
                return P.match(bw) || []
            }
            var tO = function P(J) {
                    J = J == null ? Zt : gs.defaults(Zt.Object(), J, gs.pick(Zt, Sw));
                    var q = J.Array,
                        Ee = J.Date,
                        Ue = J.Error,
                        st = J.Function,
                        Bt = J.Math,
                        gt = J.Object,
                        vu = J.RegExp,
                        rO = J.String,
                        Wr = J.TypeError,
                        Io = q.prototype,
                        nO = st.prototype,
                        ms = gt.prototype,
                        Co = J["__core-js_shared__"],
                        $o = nO.toString,
                        ht = ms.hasOwnProperty,
                        iO = 0,
                        $g = function() {
                            var i = /[^.]+$/.exec(Co && Co.keys && Co.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Ao = ms.toString,
                        sO = $o.call(gt),
                        aO = Zt._,
                        oO = vu("^" + $o.call(ht).replace(Ql, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        No = fg ? J.Buffer : r,
                        qn = J.Symbol,
                        Ro = J.Uint8Array,
                        Ag = No ? No.allocUnsafe : r,
                        Lo = Ig(gt.getPrototypeOf, gt),
                        Ng = gt.create,
                        Rg = ms.propertyIsEnumerable,
                        ko = Io.splice,
                        Lg = qn ? qn.isConcatSpreadable : r,
                        pa = qn ? qn.iterator : r,
                        $i = qn ? qn.toStringTag : r,
                        Po = function() {
                            try {
                                var i = ki(gt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        cO = J.clearTimeout !== Zt.clearTimeout && J.clearTimeout,
                        lO = Ee && Ee.now !== Zt.Date.now && Ee.now,
                        uO = J.setTimeout !== Zt.setTimeout && J.setTimeout,
                        xo = Bt.ceil,
                        Do = Bt.floor,
                        yu = gt.getOwnPropertySymbols,
                        fO = No ? No.isBuffer : r,
                        kg = J.isFinite,
                        dO = Io.join,
                        hO = Ig(gt.keys, gt),
                        jt = Bt.max,
                        ar = Bt.min,
                        pO = Ee.now,
                        gO = J.parseInt,
                        Pg = Bt.random,
                        mO = Io.reverse,
                        _u = ki(J, "DataView"),
                        ga = ki(J, "Map"),
                        bu = ki(J, "Promise"),
                        vs = ki(J, "Set"),
                        ma = ki(J, "WeakMap"),
                        va = ki(gt, "create"),
                        Mo = ma && new ma,
                        ys = {},
                        vO = Pi(_u),
                        yO = Pi(ga),
                        _O = Pi(bu),
                        bO = Pi(vs),
                        EO = Pi(ma),
                        Uo = qn ? qn.prototype : r,
                        ya = Uo ? Uo.valueOf : r,
                        xg = Uo ? Uo.toString : r;

                    function _(i) {
                        if (Lt(i) && !je(i) && !(i instanceof Ze)) {
                            if (i instanceof Kr) return i;
                            if (ht.call(i, "__wrapped__")) return Dm(i)
                        }
                        return new Kr(i)
                    }
                    var _s = function() {
                        function i() {}
                        return function(a) {
                            if (!$t(a)) return {};
                            if (Ng) return Ng(a);
                            i.prototype = a;
                            var l = new i;
                            return i.prototype = r, l
                        }
                    }();

                    function Fo() {}

                    function Kr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: xS,
                        evaluate: DS,
                        interpolate: Kp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = Fo.prototype, _.prototype.constructor = _, Kr.prototype = _s(Fo.prototype), Kr.prototype.constructor = Kr;

                    function Ze(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = []
                    }

                    function TO() {
                        var i = new Ze(this.__wrapped__);
                        return i.__actions__ = br(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = br(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = br(this.__views__), i
                    }

                    function SO() {
                        if (this.__filtered__) {
                            var i = new Ze(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function wO() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            l = je(i),
                            d = a < 0,
                            v = l ? i.length : 0,
                            b = DI(0, v, this.__views__),
                            $ = b.start,
                            N = b.end,
                            x = N - $,
                            ee = d ? N : $ - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = ar(x, this.__takeCount__);
                        if (!l || !d && v == x && we == x) return sm(i, this.__actions__);
                        var Re = [];
                        e: for (; x-- && me < we;) {
                            ee += a;
                            for (var Ve = -1, Le = i[ee]; ++Ve < ae;) {
                                var Xe = te[Ve],
                                    Qe = Xe.iteratee,
                                    Pr = Xe.type,
                                    gr = Qe(Le);
                                if (Pr == ie) Le = gr;
                                else if (!gr) {
                                    if (Pr == U) continue e;
                                    break e
                                }
                            }
                            Re[me++] = Le
                        }
                        return Re
                    }
                    Ze.prototype = _s(Fo.prototype), Ze.prototype.constructor = Ze;

                    function Ai(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function OO() {
                        this.__data__ = va ? va(null) : {}, this.size = 0
                    }

                    function IO(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function CO(i) {
                        var a = this.__data__;
                        if (va) {
                            var l = a[i];
                            return l === f ? r : l
                        }
                        return ht.call(a, i) ? a[i] : r
                    }

                    function $O(i) {
                        var a = this.__data__;
                        return va ? a[i] !== r : ht.call(a, i)
                    }

                    function AO(i, a) {
                        var l = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, l[i] = va && a === r ? f : a, this
                    }
                    Ai.prototype.clear = OO, Ai.prototype.delete = IO, Ai.prototype.get = CO, Ai.prototype.has = $O, Ai.prototype.set = AO;

                    function Cn(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function NO() {
                        this.__data__ = [], this.size = 0
                    }

                    function RO(i) {
                        var a = this.__data__,
                            l = Bo(a, i);
                        if (l < 0) return !1;
                        var d = a.length - 1;
                        return l == d ? a.pop() : ko.call(a, l, 1), --this.size, !0
                    }

                    function LO(i) {
                        var a = this.__data__,
                            l = Bo(a, i);
                        return l < 0 ? r : a[l][1]
                    }

                    function kO(i) {
                        return Bo(this.__data__, i) > -1
                    }

                    function PO(i, a) {
                        var l = this.__data__,
                            d = Bo(l, i);
                        return d < 0 ? (++this.size, l.push([i, a])) : l[d][1] = a, this
                    }
                    Cn.prototype.clear = NO, Cn.prototype.delete = RO, Cn.prototype.get = LO, Cn.prototype.has = kO, Cn.prototype.set = PO;

                    function $n(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.clear(); ++a < l;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function xO() {
                        this.size = 0, this.__data__ = {
                            hash: new Ai,
                            map: new(ga || Cn),
                            string: new Ai
                        }
                    }

                    function DO(i) {
                        var a = Zo(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function MO(i) {
                        return Zo(this, i).get(i)
                    }

                    function UO(i) {
                        return Zo(this, i).has(i)
                    }

                    function FO(i, a) {
                        var l = Zo(this, i),
                            d = l.size;
                        return l.set(i, a), this.size += l.size == d ? 0 : 1, this
                    }
                    $n.prototype.clear = xO, $n.prototype.delete = DO, $n.prototype.get = MO, $n.prototype.has = UO, $n.prototype.set = FO;

                    function Ni(i) {
                        var a = -1,
                            l = i == null ? 0 : i.length;
                        for (this.__data__ = new $n; ++a < l;) this.add(i[a])
                    }

                    function BO(i) {
                        return this.__data__.set(i, f), this
                    }

                    function jO(i) {
                        return this.__data__.has(i)
                    }
                    Ni.prototype.add = Ni.prototype.push = BO, Ni.prototype.has = jO;

                    function sn(i) {
                        var a = this.__data__ = new Cn(i);
                        this.size = a.size
                    }

                    function GO() {
                        this.__data__ = new Cn, this.size = 0
                    }

                    function WO(i) {
                        var a = this.__data__,
                            l = a.delete(i);
                        return this.size = a.size, l
                    }

                    function KO(i) {
                        return this.__data__.get(i)
                    }

                    function HO(i) {
                        return this.__data__.has(i)
                    }

                    function VO(i, a) {
                        var l = this.__data__;
                        if (l instanceof Cn) {
                            var d = l.__data__;
                            if (!ga || d.length < s - 1) return d.push([i, a]), this.size = ++l.size, this;
                            l = this.__data__ = new $n(d)
                        }
                        return l.set(i, a), this.size = l.size, this
                    }
                    sn.prototype.clear = GO, sn.prototype.delete = WO, sn.prototype.get = KO, sn.prototype.has = HO, sn.prototype.set = VO;

                    function Dg(i, a) {
                        var l = je(i),
                            d = !l && xi(i),
                            v = !l && !d && Zn(i),
                            b = !l && !d && !v && Ss(i),
                            $ = l || d || v || b,
                            N = $ ? pu(i.length, rO) : [],
                            x = N.length;
                        for (var ee in i)(a || ht.call(i, ee)) && !($ && (ee == "length" || v && (ee == "offset" || ee == "parent") || b && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Ln(ee, x))) && N.push(ee);
                        return N
                    }

                    function Mg(i) {
                        var a = i.length;
                        return a ? i[Ru(0, a - 1)] : r
                    }

                    function qO(i, a) {
                        return Qo(br(i), Ri(a, 0, i.length))
                    }

                    function YO(i) {
                        return Qo(br(i))
                    }

                    function Eu(i, a, l) {
                        (l !== r && !an(i[a], l) || l === r && !(a in i)) && An(i, a, l)
                    }

                    function _a(i, a, l) {
                        var d = i[a];
                        (!(ht.call(i, a) && an(d, l)) || l === r && !(a in i)) && An(i, a, l)
                    }

                    function Bo(i, a) {
                        for (var l = i.length; l--;)
                            if (an(i[l][0], a)) return l;
                        return -1
                    }

                    function zO(i, a, l, d) {
                        return Yn(i, function(v, b, $) {
                            a(d, v, l(v), $)
                        }), d
                    }

                    function Ug(i, a) {
                        return i && mn(a, Yt(a), i)
                    }

                    function XO(i, a) {
                        return i && mn(a, Tr(a), i)
                    }

                    function An(i, a, l) {
                        a == "__proto__" && Po ? Po(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: l,
                            writable: !0
                        }) : i[a] = l
                    }

                    function Tu(i, a) {
                        for (var l = -1, d = a.length, v = q(d), b = i == null; ++l < d;) v[l] = b ? r : rf(i, a[l]);
                        return v
                    }

                    function Ri(i, a, l) {
                        return i === i && (l !== r && (i = i <= l ? i : l), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Hr(i, a, l, d, v, b) {
                        var $, N = a & y,
                            x = a & E,
                            ee = a & I;
                        if (l && ($ = v ? l(i, d, v, b) : l(i)), $ !== r) return $;
                        if (!$t(i)) return i;
                        var te = je(i);
                        if (te) {
                            if ($ = UI(i), !N) return br(i, $)
                        } else {
                            var ae = or(i),
                                me = ae == Ut || ae == g;
                            if (Zn(i)) return cm(i, N);
                            if (ae == B || ae == ir || me && !v) {
                                if ($ = x || me ? {} : Cm(i), !N) return x ? CI(i, XO($, i)) : II(i, Ug($, i))
                            } else {
                                if (!_t[ae]) return v ? i : {};
                                $ = FI(i, ae, N)
                            }
                        }
                        b || (b = new sn);
                        var we = b.get(i);
                        if (we) return we;
                        b.set(i, $), rv(i) ? i.forEach(function(Le) {
                            $.add(Hr(Le, a, l, Le, i, b))
                        }) : ev(i) && i.forEach(function(Le, Xe) {
                            $.set(Xe, Hr(Le, a, l, Xe, i, b))
                        });
                        var Re = ee ? x ? Gu : ju : x ? Tr : Yt,
                            Ve = te ? r : Re(i);
                        return Gr(Ve || i, function(Le, Xe) {
                            Ve && (Xe = Le, Le = i[Xe]), _a($, Xe, Hr(Le, a, l, Xe, i, b))
                        }), $
                    }

                    function JO(i) {
                        var a = Yt(i);
                        return function(l) {
                            return Fg(l, i, a)
                        }
                    }

                    function Fg(i, a, l) {
                        var d = l.length;
                        if (i == null) return !d;
                        for (i = gt(i); d--;) {
                            var v = l[d],
                                b = a[v],
                                $ = i[v];
                            if ($ === r && !(v in i) || !b($)) return !1
                        }
                        return !0
                    }

                    function Bg(i, a, l) {
                        if (typeof i != "function") throw new Wr(c);
                        return Ia(function() {
                            i.apply(r, l)
                        }, a)
                    }

                    function ba(i, a, l, d) {
                        var v = -1,
                            b = So,
                            $ = !0,
                            N = i.length,
                            x = [],
                            ee = a.length;
                        if (!N) return x;
                        l && (a = It(a, Rr(l))), d ? (b = cu, $ = !1) : a.length >= s && (b = ha, $ = !1, a = new Ni(a));
                        e: for (; ++v < N;) {
                            var te = i[v],
                                ae = l == null ? te : l(te);
                            if (te = d || te !== 0 ? te : 0, $ && ae === ae) {
                                for (var me = ee; me--;)
                                    if (a[me] === ae) continue e;
                                x.push(te)
                            } else b(a, ae, d) || x.push(te)
                        }
                        return x
                    }
                    var Yn = hm(gn),
                        jg = hm(wu, !0);

                    function ZO(i, a) {
                        var l = !0;
                        return Yn(i, function(d, v, b) {
                            return l = !!a(d, v, b), l
                        }), l
                    }

                    function jo(i, a, l) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var b = i[d],
                                $ = a(b);
                            if ($ != null && (N === r ? $ === $ && !kr($) : l($, N))) var N = $,
                                x = b
                        }
                        return x
                    }

                    function QO(i, a, l, d) {
                        var v = i.length;
                        for (l = We(l), l < 0 && (l = -l > v ? 0 : v + l), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = l > d ? 0 : iv(d); l < d;) i[l++] = a;
                        return i
                    }

                    function Gg(i, a) {
                        var l = [];
                        return Yn(i, function(d, v, b) {
                            a(d, v, b) && l.push(d)
                        }), l
                    }

                    function Qt(i, a, l, d, v) {
                        var b = -1,
                            $ = i.length;
                        for (l || (l = jI), v || (v = []); ++b < $;) {
                            var N = i[b];
                            a > 0 && l(N) ? a > 1 ? Qt(N, a - 1, l, d, v) : Hn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var Su = pm(),
                        Wg = pm(!0);

                    function gn(i, a) {
                        return i && Su(i, a, Yt)
                    }

                    function wu(i, a) {
                        return i && Wg(i, a, Yt)
                    }

                    function Go(i, a) {
                        return Kn(a, function(l) {
                            return kn(i[l])
                        })
                    }

                    function Li(i, a) {
                        a = Xn(a, i);
                        for (var l = 0, d = a.length; i != null && l < d;) i = i[vn(a[l++])];
                        return l && l == d ? i : r
                    }

                    function Kg(i, a, l) {
                        var d = a(i);
                        return je(i) ? d : Hn(d, l(i))
                    }

                    function hr(i) {
                        return i == null ? i === r ? he : D : $i && $i in gt(i) ? xI(i) : YI(i)
                    }

                    function Ou(i, a) {
                        return i > a
                    }

                    function eI(i, a) {
                        return i != null && ht.call(i, a)
                    }

                    function tI(i, a) {
                        return i != null && a in gt(i)
                    }

                    function rI(i, a, l) {
                        return i >= ar(a, l) && i < jt(a, l)
                    }

                    function Iu(i, a, l) {
                        for (var d = l ? cu : So, v = i[0].length, b = i.length, $ = b, N = q(b), x = 1 / 0, ee = []; $--;) {
                            var te = i[$];
                            $ && a && (te = It(te, Rr(a))), x = ar(te.length, x), N[$] = !l && (a || v >= 120 && te.length >= 120) ? new Ni($ && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = N[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var we = te[ae],
                                Re = a ? a(we) : we;
                            if (we = l || we !== 0 ? we : 0, !(me ? ha(me, Re) : d(ee, Re, l))) {
                                for ($ = b; --$;) {
                                    var Ve = N[$];
                                    if (!(Ve ? ha(Ve, Re) : d(i[$], Re, l))) continue e
                                }
                                me && me.push(Re), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function nI(i, a, l, d) {
                        return gn(i, function(v, b, $) {
                            a(d, l(v), b, $)
                        }), d
                    }

                    function Ea(i, a, l) {
                        a = Xn(a, i), i = Rm(i, a);
                        var d = i == null ? i : i[vn(qr(a))];
                        return d == null ? r : Nr(d, i, l)
                    }

                    function Hg(i) {
                        return Lt(i) && hr(i) == ir
                    }

                    function iI(i) {
                        return Lt(i) && hr(i) == Pe
                    }

                    function sI(i) {
                        return Lt(i) && hr(i) == lt
                    }

                    function Ta(i, a, l, d, v) {
                        return i === a ? !0 : i == null || a == null || !Lt(i) && !Lt(a) ? i !== i && a !== a : aI(i, a, l, d, Ta, v)
                    }

                    function aI(i, a, l, d, v, b) {
                        var $ = je(i),
                            N = je(a),
                            x = $ ? _r : or(i),
                            ee = N ? _r : or(a);
                        x = x == ir ? B : x, ee = ee == ir ? B : ee;
                        var te = x == B,
                            ae = ee == B,
                            me = x == ee;
                        if (me && Zn(i)) {
                            if (!Zn(a)) return !1;
                            $ = !0, te = !1
                        }
                        if (me && !te) return b || (b = new sn), $ || Ss(i) ? wm(i, a, l, d, v, b) : kI(i, a, x, l, d, v, b);
                        if (!(l & k)) {
                            var we = te && ht.call(i, "__wrapped__"),
                                Re = ae && ht.call(a, "__wrapped__");
                            if (we || Re) {
                                var Ve = we ? i.value() : i,
                                    Le = Re ? a.value() : a;
                                return b || (b = new sn), v(Ve, Le, l, d, b)
                            }
                        }
                        return me ? (b || (b = new sn), PI(i, a, l, d, v, b)) : !1
                    }

                    function oI(i) {
                        return Lt(i) && or(i) == p
                    }

                    function Cu(i, a, l, d) {
                        var v = l.length,
                            b = v,
                            $ = !d;
                        if (i == null) return !b;
                        for (i = gt(i); v--;) {
                            var N = l[v];
                            if ($ && N[2] ? N[1] !== i[N[0]] : !(N[0] in i)) return !1
                        }
                        for (; ++v < b;) {
                            N = l[v];
                            var x = N[0],
                                ee = i[x],
                                te = N[1];
                            if ($ && N[2]) {
                                if (ee === r && !(x in i)) return !1
                            } else {
                                var ae = new sn;
                                if (d) var me = d(ee, te, x, i, a, ae);
                                if (!(me === r ? Ta(te, ee, k | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Vg(i) {
                        if (!$t(i) || WI(i)) return !1;
                        var a = kn(i) ? oO : JS;
                        return a.test(Pi(i))
                    }

                    function cI(i) {
                        return Lt(i) && hr(i) == se
                    }

                    function lI(i) {
                        return Lt(i) && or(i) == re
                    }

                    function uI(i) {
                        return Lt(i) && sc(i.length) && !!St[hr(i)]
                    }

                    function qg(i) {
                        return typeof i == "function" ? i : i == null ? Sr : typeof i == "object" ? je(i) ? Xg(i[0], i[1]) : zg(i) : gv(i)
                    }

                    function $u(i) {
                        if (!Oa(i)) return hO(i);
                        var a = [];
                        for (var l in gt(i)) ht.call(i, l) && l != "constructor" && a.push(l);
                        return a
                    }

                    function fI(i) {
                        if (!$t(i)) return qI(i);
                        var a = Oa(i),
                            l = [];
                        for (var d in i) d == "constructor" && (a || !ht.call(i, d)) || l.push(d);
                        return l
                    }

                    function Au(i, a) {
                        return i < a
                    }

                    function Yg(i, a) {
                        var l = -1,
                            d = Er(i) ? q(i.length) : [];
                        return Yn(i, function(v, b, $) {
                            d[++l] = a(v, b, $)
                        }), d
                    }

                    function zg(i) {
                        var a = Ku(i);
                        return a.length == 1 && a[0][2] ? Am(a[0][0], a[0][1]) : function(l) {
                            return l === i || Cu(l, i, a)
                        }
                    }

                    function Xg(i, a) {
                        return Vu(i) && $m(a) ? Am(vn(i), a) : function(l) {
                            var d = rf(l, i);
                            return d === r && d === a ? nf(l, i) : Ta(a, d, k | M)
                        }
                    }

                    function Wo(i, a, l, d, v) {
                        i !== a && Su(a, function(b, $) {
                            if (v || (v = new sn), $t(b)) dI(i, a, $, l, Wo, d, v);
                            else {
                                var N = d ? d(Yu(i, $), b, $ + "", i, a, v) : r;
                                N === r && (N = b), Eu(i, $, N)
                            }
                        }, Tr)
                    }

                    function dI(i, a, l, d, v, b, $) {
                        var N = Yu(i, l),
                            x = Yu(a, l),
                            ee = $.get(x);
                        if (ee) {
                            Eu(i, l, ee);
                            return
                        }
                        var te = b ? b(N, x, l + "", i, a, $) : r,
                            ae = te === r;
                        if (ae) {
                            var me = je(x),
                                we = !me && Zn(x),
                                Re = !me && !we && Ss(x);
                            te = x, me || we || Re ? je(N) ? te = N : kt(N) ? te = br(N) : we ? (ae = !1, te = cm(x, !0)) : Re ? (ae = !1, te = lm(x, !0)) : te = [] : Ca(x) || xi(x) ? (te = N, xi(N) ? te = sv(N) : (!$t(N) || kn(N)) && (te = Cm(x))) : ae = !1
                        }
                        ae && ($.set(x, te), v(te, x, d, b, $), $.delete(x)), Eu(i, l, te)
                    }

                    function Jg(i, a) {
                        var l = i.length;
                        if (!!l) return a += a < 0 ? l : 0, Ln(a, l) ? i[a] : r
                    }

                    function Zg(i, a, l) {
                        a.length ? a = It(a, function(b) {
                            return je(b) ? function($) {
                                return Li($, b.length === 1 ? b[0] : b)
                            } : b
                        }) : a = [Sr];
                        var d = -1;
                        a = It(a, Rr(Ne()));
                        var v = Yg(i, function(b, $, N) {
                            var x = It(a, function(ee) {
                                return ee(b)
                            });
                            return {
                                criteria: x,
                                index: ++d,
                                value: b
                            }
                        });
                        return Fw(v, function(b, $) {
                            return OI(b, $, l)
                        })
                    }

                    function hI(i, a) {
                        return Qg(i, a, function(l, d) {
                            return nf(i, d)
                        })
                    }

                    function Qg(i, a, l) {
                        for (var d = -1, v = a.length, b = {}; ++d < v;) {
                            var $ = a[d],
                                N = Li(i, $);
                            l(N, $) && Sa(b, Xn($, i), N)
                        }
                        return b
                    }

                    function pI(i) {
                        return function(a) {
                            return Li(a, i)
                        }
                    }

                    function Nu(i, a, l, d) {
                        var v = d ? Uw : ds,
                            b = -1,
                            $ = a.length,
                            N = i;
                        for (i === a && (a = br(a)), l && (N = It(i, Rr(l))); ++b < $;)
                            for (var x = 0, ee = a[b], te = l ? l(ee) : ee;
                                (x = v(N, te, x, d)) > -1;) N !== i && ko.call(N, x, 1), ko.call(i, x, 1);
                        return i
                    }

                    function em(i, a) {
                        for (var l = i ? a.length : 0, d = l - 1; l--;) {
                            var v = a[l];
                            if (l == d || v !== b) {
                                var b = v;
                                Ln(v) ? ko.call(i, v, 1) : Pu(i, v)
                            }
                        }
                        return i
                    }

                    function Ru(i, a) {
                        return i + Do(Pg() * (a - i + 1))
                    }

                    function gI(i, a, l, d) {
                        for (var v = -1, b = jt(xo((a - i) / (l || 1)), 0), $ = q(b); b--;) $[d ? b : ++v] = i, i += l;
                        return $
                    }

                    function Lu(i, a) {
                        var l = "";
                        if (!i || a < 1 || a > ve) return l;
                        do a % 2 && (l += i), a = Do(a / 2), a && (i += i); while (a);
                        return l
                    }

                    function Ye(i, a) {
                        return zu(Nm(i, a, Sr), i + "")
                    }

                    function mI(i) {
                        return Mg(ws(i))
                    }

                    function vI(i, a) {
                        var l = ws(i);
                        return Qo(l, Ri(a, 0, l.length))
                    }

                    function Sa(i, a, l, d) {
                        if (!$t(i)) return i;
                        a = Xn(a, i);
                        for (var v = -1, b = a.length, $ = b - 1, N = i; N != null && ++v < b;) {
                            var x = vn(a[v]),
                                ee = l;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != $) {
                                var te = N[x];
                                ee = d ? d(te, x, N) : r, ee === r && (ee = $t(te) ? te : Ln(a[v + 1]) ? [] : {})
                            }
                            _a(N, x, ee), N = N[x]
                        }
                        return i
                    }
                    var tm = Mo ? function(i, a) {
                            return Mo.set(i, a), i
                        } : Sr,
                        yI = Po ? function(i, a) {
                            return Po(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: af(a),
                                writable: !0
                            })
                        } : Sr;

                    function _I(i) {
                        return Qo(ws(i))
                    }

                    function Vr(i, a, l) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), l = l > v ? v : l, l < 0 && (l += v), v = a > l ? 0 : l - a >>> 0, a >>>= 0;
                        for (var b = q(v); ++d < v;) b[d] = i[d + a];
                        return b
                    }

                    function bI(i, a) {
                        var l;
                        return Yn(i, function(d, v, b) {
                            return l = a(d, v, b), !l
                        }), !!l
                    }

                    function Ko(i, a, l) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= Rt) {
                            for (; d < v;) {
                                var b = d + v >>> 1,
                                    $ = i[b];
                                $ !== null && !kr($) && (l ? $ <= a : $ < a) ? d = b + 1 : v = b
                            }
                            return v
                        }
                        return ku(i, a, Sr, l)
                    }

                    function ku(i, a, l, d) {
                        var v = 0,
                            b = i == null ? 0 : i.length;
                        if (b === 0) return 0;
                        a = l(a);
                        for (var $ = a !== a, N = a === null, x = kr(a), ee = a === r; v < b;) {
                            var te = Do((v + b) / 2),
                                ae = l(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Re = ae === ae,
                                Ve = kr(ae);
                            if ($) var Le = d || Re;
                            else ee ? Le = Re && (d || me) : N ? Le = Re && me && (d || !we) : x ? Le = Re && me && !we && (d || !Ve) : we || Ve ? Le = !1 : Le = d ? ae <= a : ae < a;
                            Le ? v = te + 1 : b = te
                        }
                        return ar(b, nt)
                    }

                    function rm(i, a) {
                        for (var l = -1, d = i.length, v = 0, b = []; ++l < d;) {
                            var $ = i[l],
                                N = a ? a($) : $;
                            if (!l || !an(N, x)) {
                                var x = N;
                                b[v++] = $ === 0 ? 0 : $
                            }
                        }
                        return b
                    }

                    function nm(i) {
                        return typeof i == "number" ? i : kr(i) ? Me : +i
                    }

                    function Lr(i) {
                        if (typeof i == "string") return i;
                        if (je(i)) return It(i, Lr) + "";
                        if (kr(i)) return xg ? xg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function zn(i, a, l) {
                        var d = -1,
                            v = So,
                            b = i.length,
                            $ = !0,
                            N = [],
                            x = N;
                        if (l) $ = !1, v = cu;
                        else if (b >= s) {
                            var ee = a ? null : RI(i);
                            if (ee) return Oo(ee);
                            $ = !1, v = ha, x = new Ni
                        } else x = a ? [] : N;
                        e: for (; ++d < b;) {
                            var te = i[d],
                                ae = a ? a(te) : te;
                            if (te = l || te !== 0 ? te : 0, $ && ae === ae) {
                                for (var me = x.length; me--;)
                                    if (x[me] === ae) continue e;
                                a && x.push(ae), N.push(te)
                            } else v(x, ae, l) || (x !== N && x.push(ae), N.push(te))
                        }
                        return N
                    }

                    function Pu(i, a) {
                        return a = Xn(a, i), i = Rm(i, a), i == null || delete i[vn(qr(a))]
                    }

                    function im(i, a, l, d) {
                        return Sa(i, a, l(Li(i, a)), d)
                    }

                    function Ho(i, a, l, d) {
                        for (var v = i.length, b = d ? v : -1;
                            (d ? b-- : ++b < v) && a(i[b], b, i););
                        return l ? Vr(i, d ? 0 : b, d ? b + 1 : v) : Vr(i, d ? b + 1 : 0, d ? v : b)
                    }

                    function sm(i, a) {
                        var l = i;
                        return l instanceof Ze && (l = l.value()), lu(a, function(d, v) {
                            return v.func.apply(v.thisArg, Hn([d], v.args))
                        }, l)
                    }

                    function xu(i, a, l) {
                        var d = i.length;
                        if (d < 2) return d ? zn(i[0]) : [];
                        for (var v = -1, b = q(d); ++v < d;)
                            for (var $ = i[v], N = -1; ++N < d;) N != v && (b[v] = ba(b[v] || $, i[N], a, l));
                        return zn(Qt(b, 1), a, l)
                    }

                    function am(i, a, l) {
                        for (var d = -1, v = i.length, b = a.length, $ = {}; ++d < v;) {
                            var N = d < b ? a[d] : r;
                            l($, i[d], N)
                        }
                        return $
                    }

                    function Du(i) {
                        return kt(i) ? i : []
                    }

                    function Mu(i) {
                        return typeof i == "function" ? i : Sr
                    }

                    function Xn(i, a) {
                        return je(i) ? i : Vu(i, a) ? [i] : xm(ut(i))
                    }
                    var EI = Ye;

                    function Jn(i, a, l) {
                        var d = i.length;
                        return l = l === r ? d : l, !a && l >= d ? i : Vr(i, a, l)
                    }
                    var om = cO || function(i) {
                        return Zt.clearTimeout(i)
                    };

                    function cm(i, a) {
                        if (a) return i.slice();
                        var l = i.length,
                            d = Ag ? Ag(l) : new i.constructor(l);
                        return i.copy(d), d
                    }

                    function Uu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new Ro(a).set(new Ro(i)), a
                    }

                    function TI(i, a) {
                        var l = a ? Uu(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.byteLength)
                    }

                    function SI(i) {
                        var a = new i.constructor(i.source, Hp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function wI(i) {
                        return ya ? gt(ya.call(i)) : {}
                    }

                    function lm(i, a) {
                        var l = a ? Uu(i.buffer) : i.buffer;
                        return new i.constructor(l, i.byteOffset, i.length)
                    }

                    function um(i, a) {
                        if (i !== a) {
                            var l = i !== r,
                                d = i === null,
                                v = i === i,
                                b = kr(i),
                                $ = a !== r,
                                N = a === null,
                                x = a === a,
                                ee = kr(a);
                            if (!N && !ee && !b && i > a || b && $ && x && !N && !ee || d && $ && x || !l && x || !v) return 1;
                            if (!d && !b && !ee && i < a || ee && l && v && !d && !b || N && l && v || !$ && v || !x) return -1
                        }
                        return 0
                    }

                    function OI(i, a, l) {
                        for (var d = -1, v = i.criteria, b = a.criteria, $ = v.length, N = l.length; ++d < $;) {
                            var x = um(v[d], b[d]);
                            if (x) {
                                if (d >= N) return x;
                                var ee = l[d];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function fm(i, a, l, d) {
                        for (var v = -1, b = i.length, $ = l.length, N = -1, x = a.length, ee = jt(b - $, 0), te = q(x + ee), ae = !d; ++N < x;) te[N] = a[N];
                        for (; ++v < $;)(ae || v < b) && (te[l[v]] = i[v]);
                        for (; ee--;) te[N++] = i[v++];
                        return te
                    }

                    function dm(i, a, l, d) {
                        for (var v = -1, b = i.length, $ = -1, N = l.length, x = -1, ee = a.length, te = jt(b - N, 0), ae = q(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++x < ee;) ae[we + x] = a[x];
                        for (; ++$ < N;)(me || v < b) && (ae[we + l[$]] = i[v++]);
                        return ae
                    }

                    function br(i, a) {
                        var l = -1,
                            d = i.length;
                        for (a || (a = q(d)); ++l < d;) a[l] = i[l];
                        return a
                    }

                    function mn(i, a, l, d) {
                        var v = !l;
                        l || (l = {});
                        for (var b = -1, $ = a.length; ++b < $;) {
                            var N = a[b],
                                x = d ? d(l[N], i[N], N, l, i) : r;
                            x === r && (x = i[N]), v ? An(l, N, x) : _a(l, N, x)
                        }
                        return l
                    }

                    function II(i, a) {
                        return mn(i, Hu(i), a)
                    }

                    function CI(i, a) {
                        return mn(i, Om(i), a)
                    }

                    function Vo(i, a) {
                        return function(l, d) {
                            var v = je(l) ? Lw : zO,
                                b = a ? a() : {};
                            return v(l, i, Ne(d, 2), b)
                        }
                    }

                    function bs(i) {
                        return Ye(function(a, l) {
                            var d = -1,
                                v = l.length,
                                b = v > 1 ? l[v - 1] : r,
                                $ = v > 2 ? l[2] : r;
                            for (b = i.length > 3 && typeof b == "function" ? (v--, b) : r, $ && pr(l[0], l[1], $) && (b = v < 3 ? r : b, v = 1), a = gt(a); ++d < v;) {
                                var N = l[d];
                                N && i(a, N, d, b)
                            }
                            return a
                        })
                    }

                    function hm(i, a) {
                        return function(l, d) {
                            if (l == null) return l;
                            if (!Er(l)) return i(l, d);
                            for (var v = l.length, b = a ? v : -1, $ = gt(l);
                                (a ? b-- : ++b < v) && d($[b], b, $) !== !1;);
                            return l
                        }
                    }

                    function pm(i) {
                        return function(a, l, d) {
                            for (var v = -1, b = gt(a), $ = d(a), N = $.length; N--;) {
                                var x = $[i ? N : ++v];
                                if (l(b[x], x, b) === !1) break
                            }
                            return a
                        }
                    }

                    function $I(i, a, l) {
                        var d = a & j,
                            v = wa(i);

                        function b() {
                            var $ = this && this !== Zt && this instanceof b ? v : i;
                            return $.apply(d ? l : this, arguments)
                        }
                        return b
                    }

                    function gm(i) {
                        return function(a) {
                            a = ut(a);
                            var l = hs(a) ? nn(a) : r,
                                d = l ? l[0] : a.charAt(0),
                                v = l ? Jn(l, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function Es(i) {
                        return function(a) {
                            return lu(hv(dv(a).replace(yw, "")), i, "")
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
                            var l = _s(i.prototype),
                                d = i.apply(l, a);
                            return $t(d) ? d : l
                        }
                    }

                    function AI(i, a, l) {
                        var d = wa(i);

                        function v() {
                            for (var b = arguments.length, $ = q(b), N = b, x = Ts(v); N--;) $[N] = arguments[N];
                            var ee = b < 3 && $[0] !== x && $[b - 1] !== x ? [] : Vn($, x);
                            if (b -= ee.length, b < l) return bm(i, a, qo, v.placeholder, r, $, ee, r, r, l - b);
                            var te = this && this !== Zt && this instanceof v ? d : i;
                            return Nr(te, this, $)
                        }
                        return v
                    }

                    function mm(i) {
                        return function(a, l, d) {
                            var v = gt(a);
                            if (!Er(a)) {
                                var b = Ne(l, 3);
                                a = Yt(a), l = function(N) {
                                    return b(v[N], N, v)
                                }
                            }
                            var $ = i(a, l, d);
                            return $ > -1 ? v[b ? a[$] : $] : r
                        }
                    }

                    function vm(i) {
                        return Rn(function(a) {
                            var l = a.length,
                                d = l,
                                v = Kr.prototype.thru;
                            for (i && a.reverse(); d--;) {
                                var b = a[d];
                                if (typeof b != "function") throw new Wr(c);
                                if (v && !$ && Jo(b) == "wrapper") var $ = new Kr([], !0)
                            }
                            for (d = $ ? d : l; ++d < l;) {
                                b = a[d];
                                var N = Jo(b),
                                    x = N == "wrapper" ? Wu(b) : r;
                                x && qu(x[0]) && x[1] == (oe | X | G | ce) && !x[4].length && x[9] == 1 ? $ = $[Jo(x[0])].apply($, x[3]) : $ = b.length == 1 && qu(b) ? $[N]() : $.thru(b)
                            }
                            return function() {
                                var ee = arguments,
                                    te = ee[0];
                                if ($ && ee.length == 1 && je(te)) return $.plant(te).value();
                                for (var ae = 0, me = l ? a[ae].apply(this, ee) : te; ++ae < l;) me = a[ae].call(this, me);
                                return me
                            }
                        })
                    }

                    function qo(i, a, l, d, v, b, $, N, x, ee) {
                        var te = a & oe,
                            ae = a & j,
                            me = a & C,
                            we = a & (X | W),
                            Re = a & ue,
                            Ve = me ? r : wa(i);

                        function Le() {
                            for (var Xe = arguments.length, Qe = q(Xe), Pr = Xe; Pr--;) Qe[Pr] = arguments[Pr];
                            if (we) var gr = Ts(Le),
                                xr = jw(Qe, gr);
                            if (d && (Qe = fm(Qe, d, v, we)), b && (Qe = dm(Qe, b, $, we)), Xe -= xr, we && Xe < ee) {
                                var Pt = Vn(Qe, gr);
                                return bm(i, a, qo, Le.placeholder, l, Qe, Pt, N, x, ee - Xe)
                            }
                            var on = ae ? l : this,
                                xn = me ? on[i] : i;
                            return Xe = Qe.length, N ? Qe = zI(Qe, N) : Re && Xe > 1 && Qe.reverse(), te && x < Xe && (Qe.length = x), this && this !== Zt && this instanceof Le && (xn = Ve || wa(xn)), xn.apply(on, Qe)
                        }
                        return Le
                    }

                    function ym(i, a) {
                        return function(l, d) {
                            return nI(l, i, a(d), {})
                        }
                    }

                    function Yo(i, a) {
                        return function(l, d) {
                            var v;
                            if (l === r && d === r) return a;
                            if (l !== r && (v = l), d !== r) {
                                if (v === r) return d;
                                typeof l == "string" || typeof d == "string" ? (l = Lr(l), d = Lr(d)) : (l = nm(l), d = nm(d)), v = i(l, d)
                            }
                            return v
                        }
                    }

                    function Fu(i) {
                        return Rn(function(a) {
                            return a = It(a, Rr(Ne())), Ye(function(l) {
                                var d = this;
                                return i(a, function(v) {
                                    return Nr(v, d, l)
                                })
                            })
                        })
                    }

                    function zo(i, a) {
                        a = a === r ? " " : Lr(a);
                        var l = a.length;
                        if (l < 2) return l ? Lu(a, i) : a;
                        var d = Lu(a, xo(i / ps(a)));
                        return hs(a) ? Jn(nn(d), 0, i).join("") : d.slice(0, i)
                    }

                    function NI(i, a, l, d) {
                        var v = a & j,
                            b = wa(i);

                        function $() {
                            for (var N = -1, x = arguments.length, ee = -1, te = d.length, ae = q(te + x), me = this && this !== Zt && this instanceof $ ? b : i; ++ee < te;) ae[ee] = d[ee];
                            for (; x--;) ae[ee++] = arguments[++N];
                            return Nr(me, v ? l : this, ae)
                        }
                        return $
                    }

                    function _m(i) {
                        return function(a, l, d) {
                            return d && typeof d != "number" && pr(a, l, d) && (l = d = r), a = Pn(a), l === r ? (l = a, a = 0) : l = Pn(l), d = d === r ? a < l ? 1 : -1 : Pn(d), gI(a, l, d, i)
                        }
                    }

                    function Xo(i) {
                        return function(a, l) {
                            return typeof a == "string" && typeof l == "string" || (a = Yr(a), l = Yr(l)), i(a, l)
                        }
                    }

                    function bm(i, a, l, d, v, b, $, N, x, ee) {
                        var te = a & X,
                            ae = te ? $ : r,
                            me = te ? r : $,
                            we = te ? b : r,
                            Re = te ? r : b;
                        a |= te ? G : Z, a &= ~(te ? Z : G), a & H || (a &= ~(j | C));
                        var Ve = [i, a, v, we, ae, Re, me, N, x, ee],
                            Le = l.apply(r, Ve);
                        return qu(i) && Lm(Le, Ve), Le.placeholder = d, km(Le, i, a)
                    }

                    function Bu(i) {
                        var a = Bt[i];
                        return function(l, d) {
                            if (l = Yr(l), d = d == null ? 0 : ar(We(d), 292), d && kg(l)) {
                                var v = (ut(l) + "e").split("e"),
                                    b = a(v[0] + "e" + (+v[1] + d));
                                return v = (ut(b) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(l)
                        }
                    }
                    var RI = vs && 1 / Oo(new vs([, -0]))[1] == be ? function(i) {
                        return new vs(i)
                    } : lf;

                    function Em(i) {
                        return function(a) {
                            var l = or(a);
                            return l == p ? mu(a) : l == re ? Yw(a) : Bw(a, i(a))
                        }
                    }

                    function Nn(i, a, l, d, v, b, $, N) {
                        var x = a & C;
                        if (!x && typeof i != "function") throw new Wr(c);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(G | Z), d = v = r), $ = $ === r ? $ : jt(We($), 0), N = N === r ? N : We(N), ee -= v ? v.length : 0, a & Z) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = x ? r : Wu(i),
                            we = [i, a, l, d, v, te, ae, b, $, N];
                        if (me && VI(we, me), i = we[0], a = we[1], l = we[2], d = we[3], v = we[4], N = we[9] = we[9] === r ? x ? 0 : i.length : jt(we[9] - ee, 0), !N && a & (X | W) && (a &= ~(X | W)), !a || a == j) var Re = $I(i, a, l);
                        else a == X || a == W ? Re = AI(i, a, N) : (a == G || a == (j | G)) && !v.length ? Re = NI(i, a, l, d) : Re = qo.apply(r, we);
                        var Ve = me ? tm : Lm;
                        return km(Ve(Re, we), i, a)
                    }

                    function Tm(i, a, l, d) {
                        return i === r || an(i, ms[l]) && !ht.call(d, l) ? a : i
                    }

                    function Sm(i, a, l, d, v, b) {
                        return $t(i) && $t(a) && (b.set(a, i), Wo(i, a, r, Sm, b), b.delete(a)), i
                    }

                    function LI(i) {
                        return Ca(i) ? r : i
                    }

                    function wm(i, a, l, d, v, b) {
                        var $ = l & k,
                            N = i.length,
                            x = a.length;
                        if (N != x && !($ && x > N)) return !1;
                        var ee = b.get(i),
                            te = b.get(a);
                        if (ee && te) return ee == a && te == i;
                        var ae = -1,
                            me = !0,
                            we = l & M ? new Ni : r;
                        for (b.set(i, a), b.set(a, i); ++ae < N;) {
                            var Re = i[ae],
                                Ve = a[ae];
                            if (d) var Le = $ ? d(Ve, Re, ae, a, i, b) : d(Re, Ve, ae, i, a, b);
                            if (Le !== r) {
                                if (Le) continue;
                                me = !1;
                                break
                            }
                            if (we) {
                                if (!uu(a, function(Xe, Qe) {
                                        if (!ha(we, Qe) && (Re === Xe || v(Re, Xe, l, d, b))) return we.push(Qe)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Re === Ve || v(Re, Ve, l, d, b))) {
                                me = !1;
                                break
                            }
                        }
                        return b.delete(i), b.delete(a), me
                    }

                    function kI(i, a, l, d, v, b, $) {
                        switch (l) {
                            case O:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case Pe:
                                return !(i.byteLength != a.byteLength || !b(new Ro(i), new Ro(a)));
                            case Ot:
                            case lt:
                            case w:
                                return an(+i, +a);
                            case qt:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case A:
                                return i == a + "";
                            case p:
                                var N = mu;
                            case re:
                                var x = d & k;
                                if (N || (N = Oo), i.size != a.size && !x) return !1;
                                var ee = $.get(i);
                                if (ee) return ee == a;
                                d |= M, $.set(i, a);
                                var te = wm(N(i), N(a), d, v, b, $);
                                return $.delete(i), te;
                            case K:
                                if (ya) return ya.call(i) == ya.call(a)
                        }
                        return !1
                    }

                    function PI(i, a, l, d, v, b) {
                        var $ = l & k,
                            N = ju(i),
                            x = N.length,
                            ee = ju(a),
                            te = ee.length;
                        if (x != te && !$) return !1;
                        for (var ae = x; ae--;) {
                            var me = N[ae];
                            if (!($ ? me in a : ht.call(a, me))) return !1
                        }
                        var we = b.get(i),
                            Re = b.get(a);
                        if (we && Re) return we == a && Re == i;
                        var Ve = !0;
                        b.set(i, a), b.set(a, i);
                        for (var Le = $; ++ae < x;) {
                            me = N[ae];
                            var Xe = i[me],
                                Qe = a[me];
                            if (d) var Pr = $ ? d(Qe, Xe, me, a, i, b) : d(Xe, Qe, me, i, a, b);
                            if (!(Pr === r ? Xe === Qe || v(Xe, Qe, l, d, b) : Pr)) {
                                Ve = !1;
                                break
                            }
                            Le || (Le = me == "constructor")
                        }
                        if (Ve && !Le) {
                            var gr = i.constructor,
                                xr = a.constructor;
                            gr != xr && "constructor" in i && "constructor" in a && !(typeof gr == "function" && gr instanceof gr && typeof xr == "function" && xr instanceof xr) && (Ve = !1)
                        }
                        return b.delete(i), b.delete(a), Ve
                    }

                    function Rn(i) {
                        return zu(Nm(i, r, Fm), i + "")
                    }

                    function ju(i) {
                        return Kg(i, Yt, Hu)
                    }

                    function Gu(i) {
                        return Kg(i, Tr, Om)
                    }
                    var Wu = Mo ? function(i) {
                        return Mo.get(i)
                    } : lf;

                    function Jo(i) {
                        for (var a = i.name + "", l = ys[a], d = ht.call(ys, a) ? l.length : 0; d--;) {
                            var v = l[d],
                                b = v.func;
                            if (b == null || b == i) return v.name
                        }
                        return a
                    }

                    function Ts(i) {
                        var a = ht.call(_, "placeholder") ? _ : i;
                        return a.placeholder
                    }

                    function Ne() {
                        var i = _.iteratee || of;
                        return i = i === of ? qg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function Zo(i, a) {
                        var l = i.__data__;
                        return GI(a) ? l[typeof a == "string" ? "string" : "hash"] : l.map
                    }

                    function Ku(i) {
                        for (var a = Yt(i), l = a.length; l--;) {
                            var d = a[l],
                                v = i[d];
                            a[l] = [d, v, $m(v)]
                        }
                        return a
                    }

                    function ki(i, a) {
                        var l = Hw(i, a);
                        return Vg(l) ? l : r
                    }

                    function xI(i) {
                        var a = ht.call(i, $i),
                            l = i[$i];
                        try {
                            i[$i] = r;
                            var d = !0
                        } catch {}
                        var v = Ao.call(i);
                        return d && (a ? i[$i] = l : delete i[$i]), v
                    }
                    var Hu = yu ? function(i) {
                            return i == null ? [] : (i = gt(i), Kn(yu(i), function(a) {
                                return Rg.call(i, a)
                            }))
                        } : uf,
                        Om = yu ? function(i) {
                            for (var a = []; i;) Hn(a, Hu(i)), i = Lo(i);
                            return a
                        } : uf,
                        or = hr;
                    (_u && or(new _u(new ArrayBuffer(1))) != O || ga && or(new ga) != p || bu && or(bu.resolve()) != Y || vs && or(new vs) != re || ma && or(new ma) != pe) && (or = function(i) {
                        var a = hr(i),
                            l = a == B ? i.constructor : r,
                            d = l ? Pi(l) : "";
                        if (d) switch (d) {
                            case vO:
                                return O;
                            case yO:
                                return p;
                            case _O:
                                return Y;
                            case bO:
                                return re;
                            case EO:
                                return pe
                        }
                        return a
                    });

                    function DI(i, a, l) {
                        for (var d = -1, v = l.length; ++d < v;) {
                            var b = l[d],
                                $ = b.size;
                            switch (b.type) {
                                case "drop":
                                    i += $;
                                    break;
                                case "dropRight":
                                    a -= $;
                                    break;
                                case "take":
                                    a = ar(a, i + $);
                                    break;
                                case "takeRight":
                                    i = jt(i, a - $);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function MI(i) {
                        var a = i.match(WS);
                        return a ? a[1].split(KS) : []
                    }

                    function Im(i, a, l) {
                        a = Xn(a, i);
                        for (var d = -1, v = a.length, b = !1; ++d < v;) {
                            var $ = vn(a[d]);
                            if (!(b = i != null && l(i, $))) break;
                            i = i[$]
                        }
                        return b || ++d != v ? b : (v = i == null ? 0 : i.length, !!v && sc(v) && Ln($, v) && (je(i) || xi(i)))
                    }

                    function UI(i) {
                        var a = i.length,
                            l = new i.constructor(a);
                        return a && typeof i[0] == "string" && ht.call(i, "index") && (l.index = i.index, l.input = i.input), l
                    }

                    function Cm(i) {
                        return typeof i.constructor == "function" && !Oa(i) ? _s(Lo(i)) : {}
                    }

                    function FI(i, a, l) {
                        var d = i.constructor;
                        switch (a) {
                            case Pe:
                                return Uu(i);
                            case Ot:
                            case lt:
                                return new d(+i);
                            case O:
                                return TI(i, l);
                            case T:
                            case R:
                            case S:
                            case L:
                            case Q:
                            case ne:
                            case _e:
                            case Te:
                            case dt:
                                return lm(i, l);
                            case p:
                                return new d;
                            case w:
                            case A:
                                return new d(i);
                            case se:
                                return SI(i);
                            case re:
                                return new d;
                            case K:
                                return wI(i)
                        }
                    }

                    function BI(i, a) {
                        var l = a.length;
                        if (!l) return i;
                        var d = l - 1;
                        return a[d] = (l > 1 ? "& " : "") + a[d], a = a.join(l > 2 ? ", " : " "), i.replace(GS, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function jI(i) {
                        return je(i) || xi(i) || !!(Lg && i && i[Lg])
                    }

                    function Ln(i, a) {
                        var l = typeof i;
                        return a = a == null ? ve : a, !!a && (l == "number" || l != "symbol" && QS.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function pr(i, a, l) {
                        if (!$t(l)) return !1;
                        var d = typeof a;
                        return (d == "number" ? Er(l) && Ln(a, l.length) : d == "string" && a in l) ? an(l[a], i) : !1
                    }

                    function Vu(i, a) {
                        if (je(i)) return !1;
                        var l = typeof i;
                        return l == "number" || l == "symbol" || l == "boolean" || i == null || kr(i) ? !0 : US.test(i) || !MS.test(i) || a != null && i in gt(a)
                    }

                    function GI(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function qu(i) {
                        var a = Jo(i),
                            l = _[a];
                        if (typeof l != "function" || !(a in Ze.prototype)) return !1;
                        if (i === l) return !0;
                        var d = Wu(l);
                        return !!d && i === d[0]
                    }

                    function WI(i) {
                        return !!$g && $g in i
                    }
                    var KI = Co ? kn : ff;

                    function Oa(i) {
                        var a = i && i.constructor,
                            l = typeof a == "function" && a.prototype || ms;
                        return i === l
                    }

                    function $m(i) {
                        return i === i && !$t(i)
                    }

                    function Am(i, a) {
                        return function(l) {
                            return l == null ? !1 : l[i] === a && (a !== r || i in gt(l))
                        }
                    }

                    function HI(i) {
                        var a = nc(i, function(d) {
                                return l.size === h && l.clear(), d
                            }),
                            l = a.cache;
                        return a
                    }

                    function VI(i, a) {
                        var l = i[1],
                            d = a[1],
                            v = l | d,
                            b = v < (j | C | oe),
                            $ = d == oe && l == X || d == oe && l == ce && i[7].length <= a[8] || d == (oe | ce) && a[7].length <= a[8] && l == X;
                        if (!(b || $)) return i;
                        d & j && (i[2] = a[2], v |= l & j ? 0 : H);
                        var N = a[3];
                        if (N) {
                            var x = i[3];
                            i[3] = x ? fm(x, N, a[4]) : N, i[4] = x ? Vn(i[3], m) : a[4]
                        }
                        return N = a[5], N && (x = i[5], i[5] = x ? dm(x, N, a[6]) : N, i[6] = x ? Vn(i[5], m) : a[6]), N = a[7], N && (i[7] = N), d & oe && (i[8] = i[8] == null ? a[8] : ar(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function qI(i) {
                        var a = [];
                        if (i != null)
                            for (var l in gt(i)) a.push(l);
                        return a
                    }

                    function YI(i) {
                        return Ao.call(i)
                    }

                    function Nm(i, a, l) {
                        return a = jt(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, b = jt(d.length - a, 0), $ = q(b); ++v < b;) $[v] = d[a + v];
                                v = -1;
                                for (var N = q(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = l($), Nr(i, this, N)
                            }
                    }

                    function Rm(i, a) {
                        return a.length < 2 ? i : Li(i, Vr(a, 0, -1))
                    }

                    function zI(i, a) {
                        for (var l = i.length, d = ar(a.length, l), v = br(i); d--;) {
                            var b = a[d];
                            i[d] = Ln(b, l) ? v[b] : r
                        }
                        return i
                    }

                    function Yu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Lm = Pm(tm),
                        Ia = uO || function(i, a) {
                            return Zt.setTimeout(i, a)
                        },
                        zu = Pm(yI);

                    function km(i, a, l) {
                        var d = a + "";
                        return zu(i, BI(d, XI(MI(d), l)))
                    }

                    function Pm(i) {
                        var a = 0,
                            l = 0;
                        return function() {
                            var d = pO(),
                                v = Ie - (d - l);
                            if (l = d, v > 0) {
                                if (++a >= fe) return arguments[0]
                            } else a = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function Qo(i, a) {
                        var l = -1,
                            d = i.length,
                            v = d - 1;
                        for (a = a === r ? d : a; ++l < a;) {
                            var b = Ru(l, v),
                                $ = i[b];
                            i[b] = i[l], i[l] = $
                        }
                        return i.length = a, i
                    }
                    var xm = HI(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(FS, function(l, d, v, b) {
                            a.push(v ? b.replace(qS, "$1") : d || l)
                        }), a
                    });

                    function vn(i) {
                        if (typeof i == "string" || kr(i)) return i;
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Pi(i) {
                        if (i != null) {
                            try {
                                return $o.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function XI(i, a) {
                        return Gr(Ar, function(l) {
                            var d = "_." + l[0];
                            a & l[1] && !So(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Dm(i) {
                        if (i instanceof Ze) return i.clone();
                        var a = new Kr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = br(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function JI(i, a, l) {
                        (l ? pr(i, a, l) : a === r) ? a = 1: a = jt(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, b = 0, $ = q(xo(d / a)); v < d;) $[b++] = Vr(i, v, v += a);
                        return $
                    }

                    function ZI(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = 0, v = []; ++a < l;) {
                            var b = i[a];
                            b && (v[d++] = b)
                        }
                        return v
                    }

                    function QI() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = q(i - 1), l = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Hn(je(l) ? br(l) : [l], Qt(a, 1))
                    }
                    var eC = Ye(function(i, a) {
                            return kt(i) ? ba(i, Qt(a, 1, kt, !0)) : []
                        }),
                        tC = Ye(function(i, a) {
                            var l = qr(a);
                            return kt(l) && (l = r), kt(i) ? ba(i, Qt(a, 1, kt, !0), Ne(l, 2)) : []
                        }),
                        rC = Ye(function(i, a) {
                            var l = qr(a);
                            return kt(l) && (l = r), kt(i) ? ba(i, Qt(a, 1, kt, !0), r, l) : []
                        });

                    function nC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : We(a), Vr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function iC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : We(a), a = d - a, Vr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function sC(i, a) {
                        return i && i.length ? Ho(i, Ne(a, 3), !0, !0) : []
                    }

                    function aC(i, a) {
                        return i && i.length ? Ho(i, Ne(a, 3), !0) : []
                    }

                    function oC(i, a, l, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (l && typeof l != "number" && pr(i, a, l) && (l = 0, d = v), QO(i, a, l, d)) : []
                    }

                    function Mm(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : We(l);
                        return v < 0 && (v = jt(d + v, 0)), wo(i, Ne(a, 3), v)
                    }

                    function Um(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return l !== r && (v = We(l), v = l < 0 ? jt(d + v, 0) : ar(v, d - 1)), wo(i, Ne(a, 3), v, !0)
                    }

                    function Fm(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, 1) : []
                    }

                    function cC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Qt(i, be) : []
                    }

                    function lC(i, a) {
                        var l = i == null ? 0 : i.length;
                        return l ? (a = a === r ? 1 : We(a), Qt(i, a)) : []
                    }

                    function uC(i) {
                        for (var a = -1, l = i == null ? 0 : i.length, d = {}; ++a < l;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Bm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function fC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = l == null ? 0 : We(l);
                        return v < 0 && (v = jt(d + v, 0)), ds(i, a, v)
                    }

                    function dC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Vr(i, 0, -1) : []
                    }
                    var hC = Ye(function(i) {
                            var a = It(i, Du);
                            return a.length && a[0] === i[0] ? Iu(a) : []
                        }),
                        pC = Ye(function(i) {
                            var a = qr(i),
                                l = It(i, Du);
                            return a === qr(l) ? a = r : l.pop(), l.length && l[0] === i[0] ? Iu(l, Ne(a, 2)) : []
                        }),
                        gC = Ye(function(i) {
                            var a = qr(i),
                                l = It(i, Du);
                            return a = typeof a == "function" ? a : r, a && l.pop(), l.length && l[0] === i[0] ? Iu(l, r, a) : []
                        });

                    function mC(i, a) {
                        return i == null ? "" : dO.call(i, a)
                    }

                    function qr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function vC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return l !== r && (v = We(l), v = v < 0 ? jt(d + v, 0) : ar(v, d - 1)), a === a ? Xw(i, a, v) : wo(i, bg, v, !0)
                    }

                    function yC(i, a) {
                        return i && i.length ? Jg(i, We(a)) : r
                    }
                    var _C = Ye(jm);

                    function jm(i, a) {
                        return i && i.length && a && a.length ? Nu(i, a) : i
                    }

                    function bC(i, a, l) {
                        return i && i.length && a && a.length ? Nu(i, a, Ne(l, 2)) : i
                    }

                    function EC(i, a, l) {
                        return i && i.length && a && a.length ? Nu(i, a, r, l) : i
                    }
                    var TC = Rn(function(i, a) {
                        var l = i == null ? 0 : i.length,
                            d = Tu(i, a);
                        return em(i, It(a, function(v) {
                            return Ln(v, l) ? +v : v
                        }).sort(um)), d
                    });

                    function SC(i, a) {
                        var l = [];
                        if (!(i && i.length)) return l;
                        var d = -1,
                            v = [],
                            b = i.length;
                        for (a = Ne(a, 3); ++d < b;) {
                            var $ = i[d];
                            a($, d, i) && (l.push($), v.push(d))
                        }
                        return em(i, v), l
                    }

                    function Xu(i) {
                        return i == null ? i : mO.call(i)
                    }

                    function wC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (l && typeof l != "number" && pr(i, a, l) ? (a = 0, l = d) : (a = a == null ? 0 : We(a), l = l === r ? d : We(l)), Vr(i, a, l)) : []
                    }

                    function OC(i, a) {
                        return Ko(i, a)
                    }

                    function IC(i, a, l) {
                        return ku(i, a, Ne(l, 2))
                    }

                    function CC(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Ko(i, a);
                            if (d < l && an(i[d], a)) return d
                        }
                        return -1
                    }

                    function $C(i, a) {
                        return Ko(i, a, !0)
                    }

                    function AC(i, a, l) {
                        return ku(i, a, Ne(l, 2), !0)
                    }

                    function NC(i, a) {
                        var l = i == null ? 0 : i.length;
                        if (l) {
                            var d = Ko(i, a, !0) - 1;
                            if (an(i[d], a)) return d
                        }
                        return -1
                    }

                    function RC(i) {
                        return i && i.length ? rm(i) : []
                    }

                    function LC(i, a) {
                        return i && i.length ? rm(i, Ne(a, 2)) : []
                    }

                    function kC(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Vr(i, 1, a) : []
                    }

                    function PC(i, a, l) {
                        return i && i.length ? (a = l || a === r ? 1 : We(a), Vr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function xC(i, a, l) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = l || a === r ? 1 : We(a), a = d - a, Vr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function DC(i, a) {
                        return i && i.length ? Ho(i, Ne(a, 3), !1, !0) : []
                    }

                    function MC(i, a) {
                        return i && i.length ? Ho(i, Ne(a, 3)) : []
                    }
                    var UC = Ye(function(i) {
                            return zn(Qt(i, 1, kt, !0))
                        }),
                        FC = Ye(function(i) {
                            var a = qr(i);
                            return kt(a) && (a = r), zn(Qt(i, 1, kt, !0), Ne(a, 2))
                        }),
                        BC = Ye(function(i) {
                            var a = qr(i);
                            return a = typeof a == "function" ? a : r, zn(Qt(i, 1, kt, !0), r, a)
                        });

                    function jC(i) {
                        return i && i.length ? zn(i) : []
                    }

                    function GC(i, a) {
                        return i && i.length ? zn(i, Ne(a, 2)) : []
                    }

                    function WC(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? zn(i, r, a) : []
                    }

                    function Ju(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Kn(i, function(l) {
                            if (kt(l)) return a = jt(l.length, a), !0
                        }), pu(a, function(l) {
                            return It(i, fu(l))
                        })
                    }

                    function Gm(i, a) {
                        if (!(i && i.length)) return [];
                        var l = Ju(i);
                        return a == null ? l : It(l, function(d) {
                            return Nr(a, r, d)
                        })
                    }
                    var KC = Ye(function(i, a) {
                            return kt(i) ? ba(i, a) : []
                        }),
                        HC = Ye(function(i) {
                            return xu(Kn(i, kt))
                        }),
                        VC = Ye(function(i) {
                            var a = qr(i);
                            return kt(a) && (a = r), xu(Kn(i, kt), Ne(a, 2))
                        }),
                        qC = Ye(function(i) {
                            var a = qr(i);
                            return a = typeof a == "function" ? a : r, xu(Kn(i, kt), r, a)
                        }),
                        YC = Ye(Ju);

                    function zC(i, a) {
                        return am(i || [], a || [], _a)
                    }

                    function XC(i, a) {
                        return am(i || [], a || [], Sa)
                    }
                    var JC = Ye(function(i) {
                        var a = i.length,
                            l = a > 1 ? i[a - 1] : r;
                        return l = typeof l == "function" ? (i.pop(), l) : r, Gm(i, l)
                    });

                    function Wm(i) {
                        var a = _(i);
                        return a.__chain__ = !0, a
                    }

                    function ZC(i, a) {
                        return a(i), i
                    }

                    function ec(i, a) {
                        return a(i)
                    }
                    var QC = Rn(function(i) {
                        var a = i.length,
                            l = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(b) {
                                return Tu(b, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof Ze) || !Ln(l) ? this.thru(v) : (d = d.slice(l, +l + (a ? 1 : 0)), d.__actions__.push({
                            func: ec,
                            args: [v],
                            thisArg: r
                        }), new Kr(d, this.__chain__).thru(function(b) {
                            return a && !b.length && b.push(r), b
                        }))
                    });

                    function e$() {
                        return Wm(this)
                    }

                    function t$() {
                        return new Kr(this.value(), this.__chain__)
                    }

                    function r$() {
                        this.__values__ === r && (this.__values__ = nv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function n$() {
                        return this
                    }

                    function i$(i) {
                        for (var a, l = this; l instanceof Fo;) {
                            var d = Dm(l);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            l = l.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function s$() {
                        var i = this.__wrapped__;
                        if (i instanceof Ze) {
                            var a = i;
                            return this.__actions__.length && (a = new Ze(this)), a = a.reverse(), a.__actions__.push({
                                func: ec,
                                args: [Xu],
                                thisArg: r
                            }), new Kr(a, this.__chain__)
                        }
                        return this.thru(Xu)
                    }

                    function a$() {
                        return sm(this.__wrapped__, this.__actions__)
                    }
                    var o$ = Vo(function(i, a, l) {
                        ht.call(i, l) ? ++i[l] : An(i, l, 1)
                    });

                    function c$(i, a, l) {
                        var d = je(i) ? yg : ZO;
                        return l && pr(i, a, l) && (a = r), d(i, Ne(a, 3))
                    }

                    function l$(i, a) {
                        var l = je(i) ? Kn : Gg;
                        return l(i, Ne(a, 3))
                    }
                    var u$ = mm(Mm),
                        f$ = mm(Um);

                    function d$(i, a) {
                        return Qt(tc(i, a), 1)
                    }

                    function h$(i, a) {
                        return Qt(tc(i, a), be)
                    }

                    function p$(i, a, l) {
                        return l = l === r ? 1 : We(l), Qt(tc(i, a), l)
                    }

                    function Km(i, a) {
                        var l = je(i) ? Gr : Yn;
                        return l(i, Ne(a, 3))
                    }

                    function Hm(i, a) {
                        var l = je(i) ? kw : jg;
                        return l(i, Ne(a, 3))
                    }
                    var g$ = Vo(function(i, a, l) {
                        ht.call(i, l) ? i[l].push(a) : An(i, l, [a])
                    });

                    function m$(i, a, l, d) {
                        i = Er(i) ? i : ws(i), l = l && !d ? We(l) : 0;
                        var v = i.length;
                        return l < 0 && (l = jt(v + l, 0)), ac(i) ? l <= v && i.indexOf(a, l) > -1 : !!v && ds(i, a, l) > -1
                    }
                    var v$ = Ye(function(i, a, l) {
                            var d = -1,
                                v = typeof a == "function",
                                b = Er(i) ? q(i.length) : [];
                            return Yn(i, function($) {
                                b[++d] = v ? Nr(a, $, l) : Ea($, a, l)
                            }), b
                        }),
                        y$ = Vo(function(i, a, l) {
                            An(i, l, a)
                        });

                    function tc(i, a) {
                        var l = je(i) ? It : Yg;
                        return l(i, Ne(a, 3))
                    }

                    function _$(i, a, l, d) {
                        return i == null ? [] : (je(a) || (a = a == null ? [] : [a]), l = d ? r : l, je(l) || (l = l == null ? [] : [l]), Zg(i, a, l))
                    }
                    var b$ = Vo(function(i, a, l) {
                        i[l ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function E$(i, a, l) {
                        var d = je(i) ? lu : Tg,
                            v = arguments.length < 3;
                        return d(i, Ne(a, 4), l, v, Yn)
                    }

                    function T$(i, a, l) {
                        var d = je(i) ? Pw : Tg,
                            v = arguments.length < 3;
                        return d(i, Ne(a, 4), l, v, jg)
                    }

                    function S$(i, a) {
                        var l = je(i) ? Kn : Gg;
                        return l(i, ic(Ne(a, 3)))
                    }

                    function w$(i) {
                        var a = je(i) ? Mg : mI;
                        return a(i)
                    }

                    function O$(i, a, l) {
                        (l ? pr(i, a, l) : a === r) ? a = 1: a = We(a);
                        var d = je(i) ? qO : vI;
                        return d(i, a)
                    }

                    function I$(i) {
                        var a = je(i) ? YO : _I;
                        return a(i)
                    }

                    function C$(i) {
                        if (i == null) return 0;
                        if (Er(i)) return ac(i) ? ps(i) : i.length;
                        var a = or(i);
                        return a == p || a == re ? i.size : $u(i).length
                    }

                    function $$(i, a, l) {
                        var d = je(i) ? uu : bI;
                        return l && pr(i, a, l) && (a = r), d(i, Ne(a, 3))
                    }
                    var A$ = Ye(function(i, a) {
                            if (i == null) return [];
                            var l = a.length;
                            return l > 1 && pr(i, a[0], a[1]) ? a = [] : l > 2 && pr(a[0], a[1], a[2]) && (a = [a[0]]), Zg(i, Qt(a, 1), [])
                        }),
                        rc = lO || function() {
                            return Zt.Date.now()
                        };

                    function N$(i, a) {
                        if (typeof a != "function") throw new Wr(c);
                        return i = We(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Vm(i, a, l) {
                        return a = l ? r : a, a = i && a == null ? i.length : a, Nn(i, oe, r, r, r, r, a)
                    }

                    function qm(i, a) {
                        var l;
                        if (typeof a != "function") throw new Wr(c);
                        return i = We(i),
                            function() {
                                return --i > 0 && (l = a.apply(this, arguments)), i <= 1 && (a = r), l
                            }
                    }
                    var Zu = Ye(function(i, a, l) {
                            var d = j;
                            if (l.length) {
                                var v = Vn(l, Ts(Zu));
                                d |= G
                            }
                            return Nn(i, d, a, l, v)
                        }),
                        Ym = Ye(function(i, a, l) {
                            var d = j | C;
                            if (l.length) {
                                var v = Vn(l, Ts(Ym));
                                d |= G
                            }
                            return Nn(a, d, i, l, v)
                        });

                    function zm(i, a, l) {
                        a = l ? r : a;
                        var d = Nn(i, X, r, r, r, r, r, a);
                        return d.placeholder = zm.placeholder, d
                    }

                    function Xm(i, a, l) {
                        a = l ? r : a;
                        var d = Nn(i, W, r, r, r, r, r, a);
                        return d.placeholder = Xm.placeholder, d
                    }

                    function Jm(i, a, l) {
                        var d, v, b, $, N, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new Wr(c);
                        a = Yr(a) || 0, $t(l) && (te = !!l.leading, ae = "maxWait" in l, b = ae ? jt(Yr(l.maxWait) || 0, a) : b, me = "trailing" in l ? !!l.trailing : me);

                        function we(Pt) {
                            var on = d,
                                xn = v;
                            return d = v = r, ee = Pt, $ = i.apply(xn, on), $
                        }

                        function Re(Pt) {
                            return ee = Pt, N = Ia(Xe, a), te ? we(Pt) : $
                        }

                        function Ve(Pt) {
                            var on = Pt - x,
                                xn = Pt - ee,
                                mv = a - on;
                            return ae ? ar(mv, b - xn) : mv
                        }

                        function Le(Pt) {
                            var on = Pt - x,
                                xn = Pt - ee;
                            return x === r || on >= a || on < 0 || ae && xn >= b
                        }

                        function Xe() {
                            var Pt = rc();
                            if (Le(Pt)) return Qe(Pt);
                            N = Ia(Xe, Ve(Pt))
                        }

                        function Qe(Pt) {
                            return N = r, me && d ? we(Pt) : (d = v = r, $)
                        }

                        function Pr() {
                            N !== r && om(N), ee = 0, d = x = v = N = r
                        }

                        function gr() {
                            return N === r ? $ : Qe(rc())
                        }

                        function xr() {
                            var Pt = rc(),
                                on = Le(Pt);
                            if (d = arguments, v = this, x = Pt, on) {
                                if (N === r) return Re(x);
                                if (ae) return om(N), N = Ia(Xe, a), we(x)
                            }
                            return N === r && (N = Ia(Xe, a)), $
                        }
                        return xr.cancel = Pr, xr.flush = gr, xr
                    }
                    var R$ = Ye(function(i, a) {
                            return Bg(i, 1, a)
                        }),
                        L$ = Ye(function(i, a, l) {
                            return Bg(i, Yr(a) || 0, l)
                        });

                    function k$(i) {
                        return Nn(i, ue)
                    }

                    function nc(i, a) {
                        if (typeof i != "function" || a != null && typeof a != "function") throw new Wr(c);
                        var l = function() {
                            var d = arguments,
                                v = a ? a.apply(this, d) : d[0],
                                b = l.cache;
                            if (b.has(v)) return b.get(v);
                            var $ = i.apply(this, d);
                            return l.cache = b.set(v, $) || b, $
                        };
                        return l.cache = new(nc.Cache || $n), l
                    }
                    nc.Cache = $n;

                    function ic(i) {
                        if (typeof i != "function") throw new Wr(c);
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

                    function P$(i) {
                        return qm(2, i)
                    }
                    var x$ = EI(function(i, a) {
                            a = a.length == 1 && je(a[0]) ? It(a[0], Rr(Ne())) : It(Qt(a, 1), Rr(Ne()));
                            var l = a.length;
                            return Ye(function(d) {
                                for (var v = -1, b = ar(d.length, l); ++v < b;) d[v] = a[v].call(this, d[v]);
                                return Nr(i, this, d)
                            })
                        }),
                        Qu = Ye(function(i, a) {
                            var l = Vn(a, Ts(Qu));
                            return Nn(i, G, r, a, l)
                        }),
                        Zm = Ye(function(i, a) {
                            var l = Vn(a, Ts(Zm));
                            return Nn(i, Z, r, a, l)
                        }),
                        D$ = Rn(function(i, a) {
                            return Nn(i, ce, r, r, r, a)
                        });

                    function M$(i, a) {
                        if (typeof i != "function") throw new Wr(c);
                        return a = a === r ? a : We(a), Ye(i, a)
                    }

                    function U$(i, a) {
                        if (typeof i != "function") throw new Wr(c);
                        return a = a == null ? 0 : jt(We(a), 0), Ye(function(l) {
                            var d = l[a],
                                v = Jn(l, 0, a);
                            return d && Hn(v, d), Nr(i, this, v)
                        })
                    }

                    function F$(i, a, l) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new Wr(c);
                        return $t(l) && (d = "leading" in l ? !!l.leading : d, v = "trailing" in l ? !!l.trailing : v), Jm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function B$(i) {
                        return Vm(i, 1)
                    }

                    function j$(i, a) {
                        return Qu(Mu(a), i)
                    }

                    function G$() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return je(i) ? i : [i]
                    }

                    function W$(i) {
                        return Hr(i, I)
                    }

                    function K$(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, I, a)
                    }

                    function H$(i) {
                        return Hr(i, y | I)
                    }

                    function V$(i, a) {
                        return a = typeof a == "function" ? a : r, Hr(i, y | I, a)
                    }

                    function q$(i, a) {
                        return a == null || Fg(i, a, Yt(a))
                    }

                    function an(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var Y$ = Xo(Ou),
                        z$ = Xo(function(i, a) {
                            return i >= a
                        }),
                        xi = Hg(function() {
                            return arguments
                        }()) ? Hg : function(i) {
                            return Lt(i) && ht.call(i, "callee") && !Rg.call(i, "callee")
                        },
                        je = q.isArray,
                        X$ = dg ? Rr(dg) : iI;

                    function Er(i) {
                        return i != null && sc(i.length) && !kn(i)
                    }

                    function kt(i) {
                        return Lt(i) && Er(i)
                    }

                    function J$(i) {
                        return i === !0 || i === !1 || Lt(i) && hr(i) == Ot
                    }
                    var Zn = fO || ff,
                        Z$ = hg ? Rr(hg) : sI;

                    function Q$(i) {
                        return Lt(i) && i.nodeType === 1 && !Ca(i)
                    }

                    function eA(i) {
                        if (i == null) return !0;
                        if (Er(i) && (je(i) || typeof i == "string" || typeof i.splice == "function" || Zn(i) || Ss(i) || xi(i))) return !i.length;
                        var a = or(i);
                        if (a == p || a == re) return !i.size;
                        if (Oa(i)) return !$u(i).length;
                        for (var l in i)
                            if (ht.call(i, l)) return !1;
                        return !0
                    }

                    function tA(i, a) {
                        return Ta(i, a)
                    }

                    function rA(i, a, l) {
                        l = typeof l == "function" ? l : r;
                        var d = l ? l(i, a) : r;
                        return d === r ? Ta(i, a, r, l) : !!d
                    }

                    function ef(i) {
                        if (!Lt(i)) return !1;
                        var a = hr(i);
                        return a == qt || a == Mt || typeof i.message == "string" && typeof i.name == "string" && !Ca(i)
                    }

                    function nA(i) {
                        return typeof i == "number" && kg(i)
                    }

                    function kn(i) {
                        if (!$t(i)) return !1;
                        var a = hr(i);
                        return a == Ut || a == g || a == ct || a == le
                    }

                    function Qm(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function sc(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ve
                    }

                    function $t(i) {
                        var a = typeof i;
                        return i != null && (a == "object" || a == "function")
                    }

                    function Lt(i) {
                        return i != null && typeof i == "object"
                    }
                    var ev = pg ? Rr(pg) : oI;

                    function iA(i, a) {
                        return i === a || Cu(i, a, Ku(a))
                    }

                    function sA(i, a, l) {
                        return l = typeof l == "function" ? l : r, Cu(i, a, Ku(a), l)
                    }

                    function aA(i) {
                        return tv(i) && i != +i
                    }

                    function oA(i) {
                        if (KI(i)) throw new Ue(o);
                        return Vg(i)
                    }

                    function cA(i) {
                        return i === null
                    }

                    function lA(i) {
                        return i == null
                    }

                    function tv(i) {
                        return typeof i == "number" || Lt(i) && hr(i) == w
                    }

                    function Ca(i) {
                        if (!Lt(i) || hr(i) != B) return !1;
                        var a = Lo(i);
                        if (a === null) return !0;
                        var l = ht.call(a, "constructor") && a.constructor;
                        return typeof l == "function" && l instanceof l && $o.call(l) == sO
                    }
                    var tf = gg ? Rr(gg) : cI;

                    function uA(i) {
                        return Qm(i) && i >= -ve && i <= ve
                    }
                    var rv = mg ? Rr(mg) : lI;

                    function ac(i) {
                        return typeof i == "string" || !je(i) && Lt(i) && hr(i) == A
                    }

                    function kr(i) {
                        return typeof i == "symbol" || Lt(i) && hr(i) == K
                    }
                    var Ss = vg ? Rr(vg) : uI;

                    function fA(i) {
                        return i === r
                    }

                    function dA(i) {
                        return Lt(i) && or(i) == pe
                    }

                    function hA(i) {
                        return Lt(i) && hr(i) == Ae
                    }
                    var pA = Xo(Au),
                        gA = Xo(function(i, a) {
                            return i <= a
                        });

                    function nv(i) {
                        if (!i) return [];
                        if (Er(i)) return ac(i) ? nn(i) : br(i);
                        if (pa && i[pa]) return qw(i[pa]());
                        var a = or(i),
                            l = a == p ? mu : a == re ? Oo : ws;
                        return l(i)
                    }

                    function Pn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Yr(i), i === be || i === -be) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var a = Pn(i),
                            l = a % 1;
                        return a === a ? l ? a - l : a : 0
                    }

                    function iv(i) {
                        return i ? Ri(We(i), 0, Ge) : 0
                    }

                    function Yr(i) {
                        if (typeof i == "number") return i;
                        if (kr(i)) return Me;
                        if ($t(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = $t(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Sg(i);
                        var l = XS.test(i);
                        return l || ZS.test(i) ? Nw(i.slice(2), l ? 2 : 8) : zS.test(i) ? Me : +i
                    }

                    function sv(i) {
                        return mn(i, Tr(i))
                    }

                    function mA(i) {
                        return i ? Ri(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function ut(i) {
                        return i == null ? "" : Lr(i)
                    }
                    var vA = bs(function(i, a) {
                            if (Oa(a) || Er(a)) {
                                mn(a, Yt(a), i);
                                return
                            }
                            for (var l in a) ht.call(a, l) && _a(i, l, a[l])
                        }),
                        av = bs(function(i, a) {
                            mn(a, Tr(a), i)
                        }),
                        oc = bs(function(i, a, l, d) {
                            mn(a, Tr(a), i, d)
                        }),
                        yA = bs(function(i, a, l, d) {
                            mn(a, Yt(a), i, d)
                        }),
                        _A = Rn(Tu);

                    function bA(i, a) {
                        var l = _s(i);
                        return a == null ? l : Ug(l, a)
                    }
                    var EA = Ye(function(i, a) {
                            i = gt(i);
                            var l = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && pr(a[0], a[1], v) && (d = 1); ++l < d;)
                                for (var b = a[l], $ = Tr(b), N = -1, x = $.length; ++N < x;) {
                                    var ee = $[N],
                                        te = i[ee];
                                    (te === r || an(te, ms[ee]) && !ht.call(i, ee)) && (i[ee] = b[ee])
                                }
                            return i
                        }),
                        TA = Ye(function(i) {
                            return i.push(r, Sm), Nr(ov, r, i)
                        });

                    function SA(i, a) {
                        return _g(i, Ne(a, 3), gn)
                    }

                    function wA(i, a) {
                        return _g(i, Ne(a, 3), wu)
                    }

                    function OA(i, a) {
                        return i == null ? i : Su(i, Ne(a, 3), Tr)
                    }

                    function IA(i, a) {
                        return i == null ? i : Wg(i, Ne(a, 3), Tr)
                    }

                    function CA(i, a) {
                        return i && gn(i, Ne(a, 3))
                    }

                    function $A(i, a) {
                        return i && wu(i, Ne(a, 3))
                    }

                    function AA(i) {
                        return i == null ? [] : Go(i, Yt(i))
                    }

                    function NA(i) {
                        return i == null ? [] : Go(i, Tr(i))
                    }

                    function rf(i, a, l) {
                        var d = i == null ? r : Li(i, a);
                        return d === r ? l : d
                    }

                    function RA(i, a) {
                        return i != null && Im(i, a, eI)
                    }

                    function nf(i, a) {
                        return i != null && Im(i, a, tI)
                    }
                    var LA = ym(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Ao.call(a)), i[a] = l
                        }, af(Sr)),
                        kA = ym(function(i, a, l) {
                            a != null && typeof a.toString != "function" && (a = Ao.call(a)), ht.call(i, a) ? i[a].push(l) : i[a] = [l]
                        }, Ne),
                        PA = Ye(Ea);

                    function Yt(i) {
                        return Er(i) ? Dg(i) : $u(i)
                    }

                    function Tr(i) {
                        return Er(i) ? Dg(i, !0) : fI(i)
                    }

                    function xA(i, a) {
                        var l = {};
                        return a = Ne(a, 3), gn(i, function(d, v, b) {
                            An(l, a(d, v, b), d)
                        }), l
                    }

                    function DA(i, a) {
                        var l = {};
                        return a = Ne(a, 3), gn(i, function(d, v, b) {
                            An(l, v, a(d, v, b))
                        }), l
                    }
                    var MA = bs(function(i, a, l) {
                            Wo(i, a, l)
                        }),
                        ov = bs(function(i, a, l, d) {
                            Wo(i, a, l, d)
                        }),
                        UA = Rn(function(i, a) {
                            var l = {};
                            if (i == null) return l;
                            var d = !1;
                            a = It(a, function(b) {
                                return b = Xn(b, i), d || (d = b.length > 1), b
                            }), mn(i, Gu(i), l), d && (l = Hr(l, y | E | I, LI));
                            for (var v = a.length; v--;) Pu(l, a[v]);
                            return l
                        });

                    function FA(i, a) {
                        return cv(i, ic(Ne(a)))
                    }
                    var BA = Rn(function(i, a) {
                        return i == null ? {} : hI(i, a)
                    });

                    function cv(i, a) {
                        if (i == null) return {};
                        var l = It(Gu(i), function(d) {
                            return [d]
                        });
                        return a = Ne(a), Qg(i, l, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function jA(i, a, l) {
                        a = Xn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var b = i == null ? r : i[vn(a[d])];
                            b === r && (d = v, b = l), i = kn(b) ? b.call(i) : b
                        }
                        return i
                    }

                    function GA(i, a, l) {
                        return i == null ? i : Sa(i, a, l)
                    }

                    function WA(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Sa(i, a, l, d)
                    }
                    var lv = Em(Yt),
                        uv = Em(Tr);

                    function KA(i, a, l) {
                        var d = je(i),
                            v = d || Zn(i) || Ss(i);
                        if (a = Ne(a, 4), l == null) {
                            var b = i && i.constructor;
                            v ? l = d ? new b : [] : $t(i) ? l = kn(b) ? _s(Lo(i)) : {} : l = {}
                        }
                        return (v ? Gr : gn)(i, function($, N, x) {
                            return a(l, $, N, x)
                        }), l
                    }

                    function HA(i, a) {
                        return i == null ? !0 : Pu(i, a)
                    }

                    function VA(i, a, l) {
                        return i == null ? i : im(i, a, Mu(l))
                    }

                    function qA(i, a, l, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : im(i, a, Mu(l), d)
                    }

                    function ws(i) {
                        return i == null ? [] : gu(i, Yt(i))
                    }

                    function YA(i) {
                        return i == null ? [] : gu(i, Tr(i))
                    }

                    function zA(i, a, l) {
                        return l === r && (l = a, a = r), l !== r && (l = Yr(l), l = l === l ? l : 0), a !== r && (a = Yr(a), a = a === a ? a : 0), Ri(Yr(i), a, l)
                    }

                    function XA(i, a, l) {
                        return a = Pn(a), l === r ? (l = a, a = 0) : l = Pn(l), i = Yr(i), rI(i, a, l)
                    }

                    function JA(i, a, l) {
                        if (l && typeof l != "boolean" && pr(i, a, l) && (a = l = r), l === r && (typeof a == "boolean" ? (l = a, a = r) : typeof i == "boolean" && (l = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Pn(i), a === r ? (a = i, i = 0) : a = Pn(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (l || i % 1 || a % 1) {
                            var v = Pg();
                            return ar(i + v * (a - i + Aw("1e-" + ((v + "").length - 1))), a)
                        }
                        return Ru(i, a)
                    }
                    var ZA = Es(function(i, a, l) {
                        return a = a.toLowerCase(), i + (l ? fv(a) : a)
                    });

                    function fv(i) {
                        return sf(ut(i).toLowerCase())
                    }

                    function dv(i) {
                        return i = ut(i), i && i.replace(ew, Gw).replace(_w, "")
                    }

                    function QA(i, a, l) {
                        i = ut(i), a = Lr(a);
                        var d = i.length;
                        l = l === r ? d : Ri(We(l), 0, d);
                        var v = l;
                        return l -= a.length, l >= 0 && i.slice(l, v) == a
                    }

                    function eN(i) {
                        return i = ut(i), i && PS.test(i) ? i.replace(Wp, Ww) : i
                    }

                    function tN(i) {
                        return i = ut(i), i && BS.test(i) ? i.replace(Ql, "\\$&") : i
                    }
                    var rN = Es(function(i, a, l) {
                            return i + (l ? "-" : "") + a.toLowerCase()
                        }),
                        nN = Es(function(i, a, l) {
                            return i + (l ? " " : "") + a.toLowerCase()
                        }),
                        iN = gm("toLowerCase");

                    function sN(i, a, l) {
                        i = ut(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return zo(Do(v), l) + i + zo(xo(v), l)
                    }

                    function aN(i, a, l) {
                        i = ut(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? i + zo(a - d, l) : i
                    }

                    function oN(i, a, l) {
                        i = ut(i), a = We(a);
                        var d = a ? ps(i) : 0;
                        return a && d < a ? zo(a - d, l) + i : i
                    }

                    function cN(i, a, l) {
                        return l || a == null ? a = 0 : a && (a = +a), gO(ut(i).replace(eu, ""), a || 0)
                    }

                    function lN(i, a, l) {
                        return (l ? pr(i, a, l) : a === r) ? a = 1 : a = We(a), Lu(ut(i), a)
                    }

                    function uN() {
                        var i = arguments,
                            a = ut(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var fN = Es(function(i, a, l) {
                        return i + (l ? "_" : "") + a.toLowerCase()
                    });

                    function dN(i, a, l) {
                        return l && typeof l != "number" && pr(i, a, l) && (a = l = r), l = l === r ? Ge : l >>> 0, l ? (i = ut(i), i && (typeof a == "string" || a != null && !tf(a)) && (a = Lr(a), !a && hs(i)) ? Jn(nn(i), 0, l) : i.split(a, l)) : []
                    }
                    var hN = Es(function(i, a, l) {
                        return i + (l ? " " : "") + sf(a)
                    });

                    function pN(i, a, l) {
                        return i = ut(i), l = l == null ? 0 : Ri(We(l), 0, i.length), a = Lr(a), i.slice(l, l + a.length) == a
                    }

                    function gN(i, a, l) {
                        var d = _.templateSettings;
                        l && pr(i, a, l) && (a = r), i = ut(i), a = oc({}, a, d, Tm);
                        var v = oc({}, a.imports, d.imports, Tm),
                            b = Yt(v),
                            $ = gu(v, b),
                            N, x, ee = 0,
                            te = a.interpolate || bo,
                            ae = "__p += '",
                            me = vu((a.escape || bo).source + "|" + te.source + "|" + (te === Kp ? YS : bo).source + "|" + (a.evaluate || bo).source + "|$", "g"),
                            we = "//# sourceURL=" + (ht.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ww + "]") + `
`;
                        i.replace(me, function(Le, Xe, Qe, Pr, gr, xr) {
                            return Qe || (Qe = Pr), ae += i.slice(ee, xr).replace(tw, Kw), Xe && (N = !0, ae += `' +
__e(` + Xe + `) +
'`), gr && (x = !0, ae += `';
` + gr + `;
__p += '`), Qe && (ae += `' +
((__t = (` + Qe + `)) == null ? '' : __t) +
'`), ee = xr + Le.length, Le
                        }), ae += `';
`;
                        var Re = ht.call(a, "variable") && a.variable;
                        if (!Re) ae = `with (obj) {
` + ae + `
}
`;
                        else if (VS.test(Re)) throw new Ue(u);
                        ae = (x ? ae.replace(sr, "") : ae).replace(xe, "$1").replace(da, "$1;"), ae = "function(" + (Re || "obj") + `) {
` + (Re ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var Ve = pv(function() {
                            return st(b, we + "return " + ae).apply(r, $)
                        });
                        if (Ve.source = ae, ef(Ve)) throw Ve;
                        return Ve
                    }

                    function mN(i) {
                        return ut(i).toLowerCase()
                    }

                    function vN(i) {
                        return ut(i).toUpperCase()
                    }

                    function yN(i, a, l) {
                        if (i = ut(i), i && (l || a === r)) return Sg(i);
                        if (!i || !(a = Lr(a))) return i;
                        var d = nn(i),
                            v = nn(a),
                            b = wg(d, v),
                            $ = Og(d, v) + 1;
                        return Jn(d, b, $).join("")
                    }

                    function _N(i, a, l) {
                        if (i = ut(i), i && (l || a === r)) return i.slice(0, Cg(i) + 1);
                        if (!i || !(a = Lr(a))) return i;
                        var d = nn(i),
                            v = Og(d, nn(a)) + 1;
                        return Jn(d, 0, v).join("")
                    }

                    function bN(i, a, l) {
                        if (i = ut(i), i && (l || a === r)) return i.replace(eu, "");
                        if (!i || !(a = Lr(a))) return i;
                        var d = nn(i),
                            v = wg(d, nn(a));
                        return Jn(d, v).join("")
                    }

                    function EN(i, a) {
                        var l = $e,
                            d = Ce;
                        if ($t(a)) {
                            var v = "separator" in a ? a.separator : v;
                            l = "length" in a ? We(a.length) : l, d = "omission" in a ? Lr(a.omission) : d
                        }
                        i = ut(i);
                        var b = i.length;
                        if (hs(i)) {
                            var $ = nn(i);
                            b = $.length
                        }
                        if (l >= b) return i;
                        var N = l - ps(d);
                        if (N < 1) return d;
                        var x = $ ? Jn($, 0, N).join("") : i.slice(0, N);
                        if (v === r) return x + d;
                        if ($ && (N += x.length - N), tf(v)) {
                            if (i.slice(N).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = vu(v.source, ut(Hp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? N : ae)
                            }
                        } else if (i.indexOf(Lr(v), N) != N) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function TN(i) {
                        return i = ut(i), i && kS.test(i) ? i.replace(Gp, Jw) : i
                    }
                    var SN = Es(function(i, a, l) {
                            return i + (l ? " " : "") + a.toUpperCase()
                        }),
                        sf = gm("toUpperCase");

                    function hv(i, a, l) {
                        return i = ut(i), a = l ? r : a, a === r ? Vw(i) ? eO(i) : Mw(i) : i.match(a) || []
                    }
                    var pv = Ye(function(i, a) {
                            try {
                                return Nr(i, r, a)
                            } catch (l) {
                                return ef(l) ? l : new Ue(l)
                            }
                        }),
                        wN = Rn(function(i, a) {
                            return Gr(a, function(l) {
                                l = vn(l), An(i, l, Zu(i[l], i))
                            }), i
                        });

                    function ON(i) {
                        var a = i == null ? 0 : i.length,
                            l = Ne();
                        return i = a ? It(i, function(d) {
                            if (typeof d[1] != "function") throw new Wr(c);
                            return [l(d[0]), d[1]]
                        }) : [], Ye(function(d) {
                            for (var v = -1; ++v < a;) {
                                var b = i[v];
                                if (Nr(b[0], this, d)) return Nr(b[1], this, d)
                            }
                        })
                    }

                    function IN(i) {
                        return JO(Hr(i, y))
                    }

                    function af(i) {
                        return function() {
                            return i
                        }
                    }

                    function CN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var $N = vm(),
                        AN = vm(!0);

                    function Sr(i) {
                        return i
                    }

                    function of(i) {
                        return qg(typeof i == "function" ? i : Hr(i, y))
                    }

                    function NN(i) {
                        return zg(Hr(i, y))
                    }

                    function RN(i, a) {
                        return Xg(i, Hr(a, y))
                    }
                    var LN = Ye(function(i, a) {
                            return function(l) {
                                return Ea(l, i, a)
                            }
                        }),
                        kN = Ye(function(i, a) {
                            return function(l) {
                                return Ea(i, l, a)
                            }
                        });

                    function cf(i, a, l) {
                        var d = Yt(a),
                            v = Go(a, d);
                        l == null && !($t(a) && (v.length || !d.length)) && (l = a, a = i, i = this, v = Go(a, Yt(a)));
                        var b = !($t(l) && "chain" in l) || !!l.chain,
                            $ = kn(i);
                        return Gr(v, function(N) {
                            var x = a[N];
                            i[N] = x, $ && (i.prototype[N] = function() {
                                var ee = this.__chain__;
                                if (b || ee) {
                                    var te = i(this.__wrapped__),
                                        ae = te.__actions__ = br(this.__actions__);
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

                    function PN() {
                        return Zt._ === this && (Zt._ = aO), this
                    }

                    function lf() {}

                    function xN(i) {
                        return i = We(i), Ye(function(a) {
                            return Jg(a, i)
                        })
                    }
                    var DN = Fu(It),
                        MN = Fu(yg),
                        UN = Fu(uu);

                    function gv(i) {
                        return Vu(i) ? fu(vn(i)) : pI(i)
                    }

                    function FN(i) {
                        return function(a) {
                            return i == null ? r : Li(i, a)
                        }
                    }
                    var BN = _m(),
                        jN = _m(!0);

                    function uf() {
                        return []
                    }

                    function ff() {
                        return !1
                    }

                    function GN() {
                        return {}
                    }

                    function WN() {
                        return ""
                    }

                    function KN() {
                        return !0
                    }

                    function HN(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var l = Ge,
                            d = ar(i, Ge);
                        a = Ne(a), i -= Ge;
                        for (var v = pu(d, a); ++l < i;) a(l);
                        return v
                    }

                    function VN(i) {
                        return je(i) ? It(i, vn) : kr(i) ? [i] : br(xm(ut(i)))
                    }

                    function qN(i) {
                        var a = ++iO;
                        return ut(i) + a
                    }
                    var YN = Yo(function(i, a) {
                            return i + a
                        }, 0),
                        zN = Bu("ceil"),
                        XN = Yo(function(i, a) {
                            return i / a
                        }, 1),
                        JN = Bu("floor");

                    function ZN(i) {
                        return i && i.length ? jo(i, Sr, Ou) : r
                    }

                    function QN(i, a) {
                        return i && i.length ? jo(i, Ne(a, 2), Ou) : r
                    }

                    function eR(i) {
                        return Eg(i, Sr)
                    }

                    function tR(i, a) {
                        return Eg(i, Ne(a, 2))
                    }

                    function rR(i) {
                        return i && i.length ? jo(i, Sr, Au) : r
                    }

                    function nR(i, a) {
                        return i && i.length ? jo(i, Ne(a, 2), Au) : r
                    }
                    var iR = Yo(function(i, a) {
                            return i * a
                        }, 1),
                        sR = Bu("round"),
                        aR = Yo(function(i, a) {
                            return i - a
                        }, 0);

                    function oR(i) {
                        return i && i.length ? hu(i, Sr) : 0
                    }

                    function cR(i, a) {
                        return i && i.length ? hu(i, Ne(a, 2)) : 0
                    }
                    return _.after = N$, _.ary = Vm, _.assign = vA, _.assignIn = av, _.assignInWith = oc, _.assignWith = yA, _.at = _A, _.before = qm, _.bind = Zu, _.bindAll = wN, _.bindKey = Ym, _.castArray = G$, _.chain = Wm, _.chunk = JI, _.compact = ZI, _.concat = QI, _.cond = ON, _.conforms = IN, _.constant = af, _.countBy = o$, _.create = bA, _.curry = zm, _.curryRight = Xm, _.debounce = Jm, _.defaults = EA, _.defaultsDeep = TA, _.defer = R$, _.delay = L$, _.difference = eC, _.differenceBy = tC, _.differenceWith = rC, _.drop = nC, _.dropRight = iC, _.dropRightWhile = sC, _.dropWhile = aC, _.fill = oC, _.filter = l$, _.flatMap = d$, _.flatMapDeep = h$, _.flatMapDepth = p$, _.flatten = Fm, _.flattenDeep = cC, _.flattenDepth = lC, _.flip = k$, _.flow = $N, _.flowRight = AN, _.fromPairs = uC, _.functions = AA, _.functionsIn = NA, _.groupBy = g$, _.initial = dC, _.intersection = hC, _.intersectionBy = pC, _.intersectionWith = gC, _.invert = LA, _.invertBy = kA, _.invokeMap = v$, _.iteratee = of, _.keyBy = y$, _.keys = Yt, _.keysIn = Tr, _.map = tc, _.mapKeys = xA, _.mapValues = DA, _.matches = NN, _.matchesProperty = RN, _.memoize = nc, _.merge = MA, _.mergeWith = ov, _.method = LN, _.methodOf = kN, _.mixin = cf, _.negate = ic, _.nthArg = xN, _.omit = UA, _.omitBy = FA, _.once = P$, _.orderBy = _$, _.over = DN, _.overArgs = x$, _.overEvery = MN, _.overSome = UN, _.partial = Qu, _.partialRight = Zm, _.partition = b$, _.pick = BA, _.pickBy = cv, _.property = gv, _.propertyOf = FN, _.pull = _C, _.pullAll = jm, _.pullAllBy = bC, _.pullAllWith = EC, _.pullAt = TC, _.range = BN, _.rangeRight = jN, _.rearg = D$, _.reject = S$, _.remove = SC, _.rest = M$, _.reverse = Xu, _.sampleSize = O$, _.set = GA, _.setWith = WA, _.shuffle = I$, _.slice = wC, _.sortBy = A$, _.sortedUniq = RC, _.sortedUniqBy = LC, _.split = dN, _.spread = U$, _.tail = kC, _.take = PC, _.takeRight = xC, _.takeRightWhile = DC, _.takeWhile = MC, _.tap = ZC, _.throttle = F$, _.thru = ec, _.toArray = nv, _.toPairs = lv, _.toPairsIn = uv, _.toPath = VN, _.toPlainObject = sv, _.transform = KA, _.unary = B$, _.union = UC, _.unionBy = FC, _.unionWith = BC, _.uniq = jC, _.uniqBy = GC, _.uniqWith = WC, _.unset = HA, _.unzip = Ju, _.unzipWith = Gm, _.update = VA, _.updateWith = qA, _.values = ws, _.valuesIn = YA, _.without = KC, _.words = hv, _.wrap = j$, _.xor = HC, _.xorBy = VC, _.xorWith = qC, _.zip = YC, _.zipObject = zC, _.zipObjectDeep = XC, _.zipWith = JC, _.entries = lv, _.entriesIn = uv, _.extend = av, _.extendWith = oc, cf(_, _), _.add = YN, _.attempt = pv, _.camelCase = ZA, _.capitalize = fv, _.ceil = zN, _.clamp = zA, _.clone = W$, _.cloneDeep = H$, _.cloneDeepWith = V$, _.cloneWith = K$, _.conformsTo = q$, _.deburr = dv, _.defaultTo = CN, _.divide = XN, _.endsWith = QA, _.eq = an, _.escape = eN, _.escapeRegExp = tN, _.every = c$, _.find = u$, _.findIndex = Mm, _.findKey = SA, _.findLast = f$, _.findLastIndex = Um, _.findLastKey = wA, _.floor = JN, _.forEach = Km, _.forEachRight = Hm, _.forIn = OA, _.forInRight = IA, _.forOwn = CA, _.forOwnRight = $A, _.get = rf, _.gt = Y$, _.gte = z$, _.has = RA, _.hasIn = nf, _.head = Bm, _.identity = Sr, _.includes = m$, _.indexOf = fC, _.inRange = XA, _.invoke = PA, _.isArguments = xi, _.isArray = je, _.isArrayBuffer = X$, _.isArrayLike = Er, _.isArrayLikeObject = kt, _.isBoolean = J$, _.isBuffer = Zn, _.isDate = Z$, _.isElement = Q$, _.isEmpty = eA, _.isEqual = tA, _.isEqualWith = rA, _.isError = ef, _.isFinite = nA, _.isFunction = kn, _.isInteger = Qm, _.isLength = sc, _.isMap = ev, _.isMatch = iA, _.isMatchWith = sA, _.isNaN = aA, _.isNative = oA, _.isNil = lA, _.isNull = cA, _.isNumber = tv, _.isObject = $t, _.isObjectLike = Lt, _.isPlainObject = Ca, _.isRegExp = tf, _.isSafeInteger = uA, _.isSet = rv, _.isString = ac, _.isSymbol = kr, _.isTypedArray = Ss, _.isUndefined = fA, _.isWeakMap = dA, _.isWeakSet = hA, _.join = mC, _.kebabCase = rN, _.last = qr, _.lastIndexOf = vC, _.lowerCase = nN, _.lowerFirst = iN, _.lt = pA, _.lte = gA, _.max = ZN, _.maxBy = QN, _.mean = eR, _.meanBy = tR, _.min = rR, _.minBy = nR, _.stubArray = uf, _.stubFalse = ff, _.stubObject = GN, _.stubString = WN, _.stubTrue = KN, _.multiply = iR, _.nth = yC, _.noConflict = PN, _.noop = lf, _.now = rc, _.pad = sN, _.padEnd = aN, _.padStart = oN, _.parseInt = cN, _.random = JA, _.reduce = E$, _.reduceRight = T$, _.repeat = lN, _.replace = uN, _.result = jA, _.round = sR, _.runInContext = P, _.sample = w$, _.size = C$, _.snakeCase = fN, _.some = $$, _.sortedIndex = OC, _.sortedIndexBy = IC, _.sortedIndexOf = CC, _.sortedLastIndex = $C, _.sortedLastIndexBy = AC, _.sortedLastIndexOf = NC, _.startCase = hN, _.startsWith = pN, _.subtract = aR, _.sum = oR, _.sumBy = cR, _.template = gN, _.times = HN, _.toFinite = Pn, _.toInteger = We, _.toLength = iv, _.toLower = mN, _.toNumber = Yr, _.toSafeInteger = mA, _.toString = ut, _.toUpper = vN, _.trim = yN, _.trimEnd = _N, _.trimStart = bN, _.truncate = EN, _.unescape = TN, _.uniqueId = qN, _.upperCase = SN, _.upperFirst = sf, _.each = Km, _.eachRight = Hm, _.first = Bm, cf(_, function() {
                        var i = {};
                        return gn(_, function(a, l) {
                            ht.call(_.prototype, l) || (i[l] = a)
                        }), i
                    }(), {
                        chain: !1
                    }), _.VERSION = n, Gr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        _[i].placeholder = _
                    }), Gr(["drop", "take"], function(i, a) {
                        Ze.prototype[i] = function(l) {
                            l = l === r ? 1 : jt(We(l), 0);
                            var d = this.__filtered__ && !a ? new Ze(this) : this.clone();
                            return d.__filtered__ ? d.__takeCount__ = ar(l, d.__takeCount__) : d.__views__.push({
                                size: ar(l, Ge),
                                type: i + (d.__dir__ < 0 ? "Right" : "")
                            }), d
                        }, Ze.prototype[i + "Right"] = function(l) {
                            return this.reverse()[i](l).reverse()
                        }
                    }), Gr(["filter", "map", "takeWhile"], function(i, a) {
                        var l = a + 1,
                            d = l == U || l == de;
                        Ze.prototype[i] = function(v) {
                            var b = this.clone();
                            return b.__iteratees__.push({
                                iteratee: Ne(v, 3),
                                type: l
                            }), b.__filtered__ = b.__filtered__ || d, b
                        }
                    }), Gr(["head", "last"], function(i, a) {
                        var l = "take" + (a ? "Right" : "");
                        Ze.prototype[i] = function() {
                            return this[l](1).value()[0]
                        }
                    }), Gr(["initial", "tail"], function(i, a) {
                        var l = "drop" + (a ? "" : "Right");
                        Ze.prototype[i] = function() {
                            return this.__filtered__ ? new Ze(this) : this[l](1)
                        }
                    }), Ze.prototype.compact = function() {
                        return this.filter(Sr)
                    }, Ze.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Ze.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Ze.prototype.invokeMap = Ye(function(i, a) {
                        return typeof i == "function" ? new Ze(this) : this.map(function(l) {
                            return Ea(l, i, a)
                        })
                    }), Ze.prototype.reject = function(i) {
                        return this.filter(ic(Ne(i)))
                    }, Ze.prototype.slice = function(i, a) {
                        i = We(i);
                        var l = this;
                        return l.__filtered__ && (i > 0 || a < 0) ? new Ze(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), a !== r && (a = We(a), l = a < 0 ? l.dropRight(-a) : l.take(a - i)), l)
                    }, Ze.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Ze.prototype.toArray = function() {
                        return this.take(Ge)
                    }, gn(Ze.prototype, function(i, a) {
                        var l = /^(?:filter|find|map|reject)|While$/.test(a),
                            d = /^(?:head|last)$/.test(a),
                            v = _[d ? "take" + (a == "last" ? "Right" : "") : a],
                            b = d || /^find/.test(a);
                        !v || (_.prototype[a] = function() {
                            var $ = this.__wrapped__,
                                N = d ? [1] : arguments,
                                x = $ instanceof Ze,
                                ee = N[0],
                                te = x || je($),
                                ae = function(Xe) {
                                    var Qe = v.apply(_, Hn([Xe], N));
                                    return d && me ? Qe[0] : Qe
                                };
                            te && l && typeof ee == "function" && ee.length != 1 && (x = te = !1);
                            var me = this.__chain__,
                                we = !!this.__actions__.length,
                                Re = b && !me,
                                Ve = x && !we;
                            if (!b && te) {
                                $ = Ve ? $ : new Ze(this);
                                var Le = i.apply($, N);
                                return Le.__actions__.push({
                                    func: ec,
                                    args: [ae],
                                    thisArg: r
                                }), new Kr(Le, me)
                            }
                            return Re && Ve ? i.apply(this, N) : (Le = this.thru(ae), Re ? d ? Le.value()[0] : Le.value() : Le)
                        })
                    }), Gr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Io[i],
                            l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            d = /^(?:pop|shift)$/.test(i);
                        _.prototype[i] = function() {
                            var v = arguments;
                            if (d && !this.__chain__) {
                                var b = this.value();
                                return a.apply(je(b) ? b : [], v)
                            }
                            return this[l](function($) {
                                return a.apply(je($) ? $ : [], v)
                            })
                        }
                    }), gn(Ze.prototype, function(i, a) {
                        var l = _[a];
                        if (l) {
                            var d = l.name + "";
                            ht.call(ys, d) || (ys[d] = []), ys[d].push({
                                name: a,
                                func: l
                            })
                        }
                    }), ys[qo(r, C).name] = [{
                        name: "wrapper",
                        func: r
                    }], Ze.prototype.clone = TO, Ze.prototype.reverse = SO, Ze.prototype.value = wO, _.prototype.at = QC, _.prototype.chain = e$, _.prototype.commit = t$, _.prototype.next = r$, _.prototype.plant = i$, _.prototype.reverse = s$, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = a$, _.prototype.first = _.prototype.head, pa && (_.prototype[pa] = n$), _
                },
                gs = tO();
            Ci ? ((Ci.exports = gs)._ = gs, au._ = gs) : Zt._ = gs
        }).call(Dt)
    })(Nd, Nd.exports);
    const nG = Je({
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
                        m = u * h,
                        y = f * h;
                    return {
                        width: `${m}px`,
                        height: `${y}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Nd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new N4(e, t);
                    r.canvas.lines = jn([]), r.canvas.lines2 = jn([]), this.stage = r, this.stage.on("up", () => {
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
        iG = {
            class: "draw"
        },
        sG = {
            ref: "content",
            class: "content"
        },
        aG = {
            class: "constrain"
        },
        oG = {
            key: 0
        };

    function cG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), V("div", iG, [z("div", sG, [z("div", aG, [e.player.prompt ? qe((F(), V("div", oG, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), z("div", {
            ref: "stage",
            class: "stage",
            style: nl(e.stageDimensions)
        }, null, 4), z("button", {
            onClick: t[0] || (t[0] = Cr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, De(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const lG = He(nG, [
            ["render", cG]
        ]),
        uG = Je({
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, Kc.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        fG = ["textContent"],
        dG = ["textContent"],
        hG = ["textContent"],
        pG = ["textContent"];

    function gG(e, t, r, n, s, o) {
        const c = Kt("t");
        return F(), V("div", {
            class: Fe(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (F(), V("p", {
            key: 0,
            class: Fe(e.localClasses.message),
            textContent: De(e.joinedCountText)
        }, null, 10, fG)) : Oe("", !0), e.player.hasControls ? (F(), V(ze, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (F(), V("p", {
            key: 0,
            class: Fe(e.localClasses.status)
        }, De(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? (F(), V("button", {
            key: 1,
            class: Fe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: De(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, dG)) : Oe("", !0), e.player.status === "countdown" ? (F(), V("button", {
            key: 2,
            class: Fe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: De(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, hG)) : Oe("", !0)], 64)) : e.player.gamepadStart ? (F(), V(ze, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (F(), V("p", {
            key: 0,
            class: Fe(e.localClasses.status)
        }, De(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? qe((F(), V("p", {
            key: 1,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : Oe("", !0), e.player.status === "countdown" ? qe((F(), V("p", {
            key: 2,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : Oe("", !0)], 64)) : (F(), V(ze, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (F(), V("p", {
            key: 0,
            class: Fe(e.localClasses.status)
        }, De(e.neededText), 3)) : Oe("", !0), e.player.status === "canStart" ? (F(), V("p", {
            key: 1,
            class: Fe(e.localClasses.status)
        }, De(e.waitingForVIPText), 3)) : Oe("", !0), e.player.status === "countdown" ? qe((F(), V("p", {
            key: 2,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.GAME_STARTING"]
        ]) : Oe("", !0)], 64)), e.messageLocation === "bottom" ? (F(), V("p", {
            key: 4,
            class: Fe(e.localClasses.message),
            textContent: De(e.joinedCountText)
        }, null, 10, pG)) : Oe("", !0)], 2)
    }
    const N0 = He(uG, [
            ["render", gG]
        ]),
        mG = Je({
            components: {
                LobbyActions: N0
            },
            props: {
                player: Object
            }
        }),
        vG = {
            class: "lobby"
        },
        yG = {
            class: "constrain"
        };

    function _G(e, t, r, n, s, o) {
        const c = vt("LobbyActions");
        return F(), V("div", vG, [z("div", yG, [at(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const bG = He(mG, [
            ["render", _G]
        ]),
        EG = Je({
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, Kc.gameStarted(this.$ecastRoom.appTag, e)
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

    function TG(e, t, r, n, s, o) {
        const c = Kt("t");
        return e.player && e.player.status ? (F(), V("div", {
            key: 0,
            class: Fe(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? qe((F(), V("p", {
            key: 0,
            class: Fe(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : Oe("", !0), e.player.hasControls ? (F(), V(ze, {
            key: 1
        }, [e.player.status === "waiting" ? qe((F(), V("button", {
            key: 0,
            class: Fe(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : Oe("", !0), e.player.status === "waiting" ? qe((F(), V("button", {
            key: 1,
            class: Fe(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [c, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : Oe("", !0), e.player.status === "countdown" ? qe((F(), V("button", {
            key: 2,
            class: Fe(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [c, "LOBBY.BUTTON_CANCEL"]
        ]) : Oe("", !0)], 64)) : e.player.gamepadStart ? qe((F(), V("p", {
            key: 2,
            class: Fe(e.localClasses.status)
        }, null, 2)), [
            [c, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (F(), V("p", {
            key: 3,
            class: Fe(e.localClasses.status)
        }, De(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? qe((F(), V("p", {
            key: 4,
            class: Fe(e.localClasses.message)
        }, null, 2)), [
            [c, "POST_GAME.PLAY_AGAIN"]
        ]) : Oe("", !0)], 2)) : Oe("", !0)
    }
    const R0 = He(EG, [
            ["render", TG]
        ]),
        SG = Je({
            components: {
                PostGameActions: R0
            },
            props: {
                player: Object
            }
        }),
        wG = {
            class: "post-game"
        },
        OG = {
            class: "constrain"
        };

    function IG(e, t, r, n, s, o) {
        const c = vt("PostGameActions");
        return F(), V("div", wG, [z("div", OG, [at(c, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const CG = He(SG, [
            ["render", IG]
        ]),
        $G = Je({
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
                        if (e && e instanceof Ir.ObjectEntity) return !0
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
        AG = {
            class: "single-text-entry"
        },
        NG = {
            class: "constrain"
        },
        RG = {
            key: 0
        },
        LG = {
            key: 1,
            for: "input"
        },
        kG = ["value", "rows", "placeholder", "disabled"],
        PG = ["value", "placeholder", "disabled"];

    function xG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), V("div", AG, [z("div", NG, [e.player.prompt ? qe((F(), V("p", RG, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), e.player.label ? qe((F(), V("label", LG, null, 512)), [
            [c, e.player.label]
        ]) : Oe("", !0), e.player.isMultiline ? (F(), V("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, kG)) : (F(), V("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, PG)), qe(z("button", {
            onClick: t[2] || (t[2] = Cr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const DG = He($G, [
            ["render", xG]
        ]),
        MG = Je({
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
                        if (e && e instanceof Ir.ObjectEntity) return !0
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
        UG = {
            class: "multi-text-entry"
        },
        FG = {
            class: "constrain"
        },
        BG = {
            key: 0
        },
        jG = ["for"],
        GG = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        WG = ["id", "value", "placeholder", "disabled", "onInput"];

    function KG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), V("div", UG, [z("div", FG, [e.player.prompt ? qe((F(), V("p", BG, null, 512)), [
            [c, e.player.prompt]
        ]) : Oe("", !0), (F(!0), V(ze, null, Qr(e.player.inputs, (u, f) => (F(), V(ze, null, [u.label ? qe((F(), V("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, jG)), [
            [c, u.label]
        ]) : Oe("", !0), u.isMultiline ? (F(), V("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, GG)) : (F(), V("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, WG))], 64))), 256)), qe(z("button", {
            onClick: t[0] || (t[0] = Cr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [c, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const HG = He(MG, [
            ["render", KG]
        ]),
        VG = Je({
            props: {
                player: Object
            }
        }),
        qG = {
            class: "waiting"
        },
        YG = {
            class: "constrain"
        },
        zG = {
            key: 0
        };

    function XG(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), V("div", qG, [z("div", YG, [e.player.message ? qe((F(), V("p", zG, null, 512)), [
            [c, e.player.message]
        ]) : Oe("", !0)])])
    }
    const JG = He(VG, [
        ["render", XG]
    ]);
    Je({
        components: {
            Choices: Jk,
            Doodle: rG,
            Draw: lG,
            Lobby: bG,
            PostGame: CG,
            SingleTextEntry: DG,
            MultiTextEntry: HG,
            Waiting: JG
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    const ZG = Je({
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
                Kc.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    Kc.galleryClick(this.artifact.categoryId, "post_game"), to.setAsViewed(0)
                }
            }
        }),
        QG = ["href", "aria-label"];

    function e5(e, t, r, n, s, o) {
        return e.link ? (F(), V("a", {
            key: 0,
            class: Fe([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...c) => e.onLinkClick && e.onLinkClick(...c))
        }, [kL(e.$slots, "default")], 10, QG)) : Oe("", !0)
    }
    const t5 = He(ZG, [
            ["render", e5]
        ]),
        r5 = Je({
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
                    if (this.sanitizers && (t.value = A0.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        n5 = ["value"];

    function i5(e, t, r, n, s, o) {
        return F(), V("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...c) => e.onInput && e.onInput(...c))
        }, null, 40, n5)
    }
    const s5 = He(r5, [
        ["render", i5]
    ]);
    var Bi, mc, Ga = typeof Map == "function" ? new Map : (Bi = [], mc = [], {
            has: function(e) {
                return Bi.indexOf(e) > -1
            },
            get: function(e) {
                return mc[Bi.indexOf(e)]
            },
            set: function(e, t) {
                Bi.indexOf(e) === -1 && (Bi.push(e), mc.push(t))
            },
            delete: function(e) {
                var t = Bi.indexOf(e);
                t > -1 && (Bi.splice(t, 1), mc.splice(t, 1))
            }
        }),
        L0 = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        L0 = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function a5(e) {
        var t = Ga.get(e);
        t && t.destroy()
    }

    function o5(e) {
        var t = Ga.get(e);
        t && t.update()
    }
    var Pa = null;
    typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Pa = function(e) {
        return e
    }).destroy = function(e) {
        return e
    }, Pa.update = function(e) {
        return e
    }) : ((Pa = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(r) {
            return function(n) {
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ga.has(n)) {
                    var s, o = null,
                        c = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== c && E()
                        },
                        h = function(I) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", E, !1), n.removeEventListener("keyup", E, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", E, !1), Object.keys(I).forEach(function(k) {
                                n.style[k] = I[k]
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

                function m(I) {
                    var k = n.style.width;
                    n.style.width = "0px", n.style.width = k, n.style.overflowY = I
                }

                function y() {
                    if (n.scrollHeight !== 0) {
                        var I = function(M) {
                                for (var j = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && j.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return j
                            }(n),
                            k = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + o + "px", c = n.clientWidth, I.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), k && (document.documentElement.scrollTop = k)
                    }
                }

                function E() {
                    y();
                    var I = Math.round(parseFloat(n.style.height)),
                        k = window.getComputedStyle(n, null),
                        M = k.boxSizing === "content-box" ? Math.round(parseFloat(k.height)) : n.offsetHeight;
                    if (M < I ? k.overflowY === "hidden" && (m("scroll"), y(), M = k.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : k.overflowY !== "hidden" && (m("hidden"), y(), M = k.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), u !== M) {
                        u = M;
                        var j = L0("autosize:resized");
                        try {
                            n.dispatchEvent(j)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], a5), e
    }, Pa.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], o5), e
    });
    var c5 = Pa,
        l5 = {
            exports: {}
        },
        vc = function(e) {
            return e && e.Math == Math && e
        },
        Fr = vc(typeof globalThis == "object" && globalThis) || vc(typeof window == "object" && window) || vc(typeof self == "object" && self) || vc(typeof Dt == "object" && Dt) || function() {
            return this
        }() || Function("return this")(),
        ip = {},
        Br = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        u5 = Br,
        Ei = !u5(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        f5 = Br,
        sp = !f5(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        d5 = sp,
        yc = Function.prototype.call,
        Ti = d5 ? yc.bind(yc) : function() {
            return yc.apply(yc, arguments)
        },
        k0 = {},
        P0 = {}.propertyIsEnumerable,
        x0 = Object.getOwnPropertyDescriptor,
        h5 = x0 && !P0.call({
            1: 2
        }, 1);
    k0.f = h5 ? function(t) {
        var r = x0(this, t);
        return !!r && r.enumerable
    } : P0;
    var D0 = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        M0 = sp,
        U0 = Function.prototype,
        p5 = U0.bind,
        Rd = U0.call,
        g5 = M0 && p5.bind(Rd, Rd),
        dr = M0 ? function(e) {
            return e && g5(e)
        } : function(e) {
            return e && function() {
                return Rd.apply(e, arguments)
            }
        },
        F0 = dr,
        m5 = F0({}.toString),
        v5 = F0("".slice),
        Pl = function(e) {
            return v5(m5(e), 8, -1)
        },
        y5 = dr,
        _5 = Br,
        b5 = Pl,
        Af = Object,
        E5 = y5("".split),
        T5 = _5(function() {
            return !Af("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return b5(e) == "String" ? E5(e, "") : Af(e)
        } : Af,
        S5 = TypeError,
        fo = function(e) {
            if (e == null) throw S5("Can't call method on " + e);
            return e
        },
        w5 = T5,
        O5 = fo,
        xl = function(e) {
            return w5(O5(e))
        },
        $r = function(e) {
            return typeof e == "function"
        },
        I5 = $r,
        la = function(e) {
            return typeof e == "object" ? e !== null : I5(e)
        },
        Nf = Fr,
        C5 = $r,
        $5 = function(e) {
            return C5(e) ? e : void 0
        },
        Dl = function(e, t) {
            return arguments.length < 2 ? $5(Nf[e]) : Nf[e] && Nf[e][t]
        },
        A5 = dr,
        B0 = A5({}.isPrototypeOf),
        N5 = Dl,
        R5 = N5("navigator", "userAgent") || "",
        j0 = Fr,
        Rf = R5,
        Hy = j0.process,
        Vy = j0.Deno,
        qy = Hy && Hy.versions || Vy && Vy.version,
        Yy = qy && qy.v8,
        cn, Xc;
    Yy && (cn = Yy.split("."), Xc = cn[0] > 0 && cn[0] < 4 ? 1 : +(cn[0] + cn[1]));
    !Xc && Rf && (cn = Rf.match(/Edge\/(\d+)/), (!cn || cn[1] >= 74) && (cn = Rf.match(/Chrome\/(\d+)/), cn && (Xc = +cn[1])));
    var L5 = Xc,
        zy = L5,
        k5 = Br,
        G0 = !!Object.getOwnPropertySymbols && !k5(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && zy && zy < 41
        }),
        P5 = G0,
        W0 = P5 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        x5 = Dl,
        D5 = $r,
        M5 = B0,
        U5 = W0,
        F5 = Object,
        K0 = U5 ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = x5("Symbol");
            return D5(t) && M5(t.prototype, F5(e))
        },
        B5 = String,
        j5 = function(e) {
            try {
                return B5(e)
            } catch {
                return "Object"
            }
        },
        G5 = $r,
        W5 = j5,
        K5 = TypeError,
        H5 = function(e) {
            if (G5(e)) return e;
            throw K5(W5(e) + " is not a function")
        },
        V5 = H5,
        ap = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : V5(r)
        },
        Lf = Ti,
        kf = $r,
        Pf = la,
        q5 = TypeError,
        Y5 = function(e, t) {
            var r, n;
            if (t === "string" && kf(r = e.toString) && !Pf(n = Lf(r, e)) || kf(r = e.valueOf) && !Pf(n = Lf(r, e)) || t !== "string" && kf(r = e.toString) && !Pf(n = Lf(r, e))) return n;
            throw q5("Can't convert object to primitive value")
        },
        Ml = {
            exports: {}
        },
        Xy = Fr,
        z5 = Object.defineProperty,
        op = function(e, t) {
            try {
                z5(Xy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Xy[e] = t
            }
            return t
        },
        X5 = Fr,
        J5 = op,
        Jy = "__core-js_shared__",
        Z5 = X5[Jy] || J5(Jy, {}),
        cp = Z5,
        Zy = cp;
    (Ml.exports = function(e, t) {
        return Zy[e] || (Zy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Q5 = fo,
        e6 = Object,
        H0 = function(e) {
            return e6(Q5(e))
        },
        t6 = dr,
        r6 = H0,
        n6 = t6({}.hasOwnProperty),
        Si = Object.hasOwn || function(t, r) {
            return n6(r6(t), r)
        },
        i6 = dr,
        s6 = 0,
        a6 = Math.random(),
        o6 = i6(1 .toString),
        V0 = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + o6(++s6 + a6, 36)
        },
        c6 = Fr,
        l6 = Ml.exports,
        Qy = Si,
        u6 = V0,
        e_ = G0,
        q0 = W0,
        Is = l6("wks"),
        is = c6.Symbol,
        t_ = is && is.for,
        f6 = q0 ? is : is && is.withoutSetter || u6,
        ls = function(e) {
            if (!Qy(Is, e) || !(e_ || typeof Is[e] == "string")) {
                var t = "Symbol." + e;
                e_ && Qy(is, e) ? Is[e] = is[e] : q0 && t_ ? Is[e] = t_(t) : Is[e] = f6(t)
            }
            return Is[e]
        },
        d6 = Ti,
        r_ = la,
        n_ = K0,
        h6 = ap,
        p6 = Y5,
        g6 = ls,
        m6 = TypeError,
        v6 = g6("toPrimitive"),
        y6 = function(e, t) {
            if (!r_(e) || n_(e)) return e;
            var r = h6(e, v6),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = d6(r, e, t), !r_(n) || n_(n)) return n;
                throw m6("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), p6(e, t)
        },
        _6 = y6,
        b6 = K0,
        Y0 = function(e) {
            var t = _6(e, "string");
            return b6(t) ? t : t + ""
        },
        E6 = Fr,
        i_ = la,
        Ld = E6.document,
        T6 = i_(Ld) && i_(Ld.createElement),
        z0 = function(e) {
            return T6 ? Ld.createElement(e) : {}
        },
        S6 = Ei,
        w6 = Br,
        O6 = z0,
        X0 = !S6 && !w6(function() {
            return Object.defineProperty(O6("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        I6 = Ei,
        C6 = Ti,
        $6 = k0,
        A6 = D0,
        N6 = xl,
        R6 = Y0,
        L6 = Si,
        k6 = X0,
        s_ = Object.getOwnPropertyDescriptor;
    ip.f = I6 ? s_ : function(t, r) {
        if (t = N6(t), r = R6(r), k6) try {
            return s_(t, r)
        } catch {}
        if (L6(t, r)) return A6(!C6($6.f, t, r), t[r])
    };
    var ho = {},
        P6 = Ei,
        x6 = Br,
        J0 = P6 && x6(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        D6 = la,
        M6 = String,
        U6 = TypeError,
        us = function(e) {
            if (D6(e)) return e;
            throw U6(M6(e) + " is not an object")
        },
        F6 = Ei,
        B6 = X0,
        j6 = J0,
        _c = us,
        a_ = Y0,
        G6 = TypeError,
        xf = Object.defineProperty,
        W6 = Object.getOwnPropertyDescriptor,
        Df = "enumerable",
        Mf = "configurable",
        Uf = "writable";
    ho.f = F6 ? j6 ? function(t, r, n) {
        if (_c(t), r = a_(r), _c(n), typeof t == "function" && r === "prototype" && "value" in n && Uf in n && !n[Uf]) {
            var s = W6(t, r);
            s && s[Uf] && (t[r] = n.value, n = {
                configurable: Mf in n ? n[Mf] : s[Mf],
                enumerable: Df in n ? n[Df] : s[Df],
                writable: !1
            })
        }
        return xf(t, r, n)
    } : xf : function(t, r, n) {
        if (_c(t), r = a_(r), _c(n), B6) try {
            return xf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw G6("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var K6 = Ei,
        H6 = ho,
        V6 = D0,
        lp = K6 ? function(e, t, r) {
            return H6.f(e, t, V6(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        Z0 = {
            exports: {}
        },
        kd = Ei,
        q6 = Si,
        Q0 = Function.prototype,
        Y6 = kd && Object.getOwnPropertyDescriptor,
        up = q6(Q0, "name"),
        z6 = up && function() {}.name === "something",
        X6 = up && (!kd || kd && Y6(Q0, "name").configurable),
        J6 = {
            EXISTS: up,
            PROPER: z6,
            CONFIGURABLE: X6
        },
        Z6 = dr,
        Q6 = $r,
        Pd = cp,
        eW = Z6(Function.toString);
    Q6(Pd.inspectSource) || (Pd.inspectSource = function(e) {
        return eW(e)
    });
    var e1 = Pd.inspectSource,
        tW = Fr,
        rW = $r,
        nW = e1,
        o_ = tW.WeakMap,
        iW = rW(o_) && /native code/.test(nW(o_)),
        sW = Ml.exports,
        aW = V0,
        c_ = sW("keys"),
        t1 = function(e) {
            return c_[e] || (c_[e] = aW(e))
        },
        fp = {},
        oW = iW,
        r1 = Fr,
        Ff = dr,
        cW = la,
        lW = lp,
        Bf = Si,
        jf = cp,
        uW = t1,
        fW = fp,
        l_ = "Object already initialized",
        xd = r1.TypeError,
        dW = r1.WeakMap,
        Jc, ro, Zc, hW = function(e) {
            return Zc(e) ? ro(e) : Jc(e, {})
        },
        pW = function(e) {
            return function(t) {
                var r;
                if (!cW(t) || (r = ro(t)).type !== e) throw xd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (oW || jf.state) {
        var ji = jf.state || (jf.state = new dW),
            gW = Ff(ji.get),
            u_ = Ff(ji.has),
            mW = Ff(ji.set);
        Jc = function(e, t) {
            if (u_(ji, e)) throw new xd(l_);
            return t.facade = e, mW(ji, e, t), t
        }, ro = function(e) {
            return gW(ji, e) || {}
        }, Zc = function(e) {
            return u_(ji, e)
        }
    } else {
        var Cs = uW("state");
        fW[Cs] = !0, Jc = function(e, t) {
            if (Bf(e, Cs)) throw new xd(l_);
            return t.facade = e, lW(e, Cs, t), t
        }, ro = function(e) {
            return Bf(e, Cs) ? e[Cs] : {}
        }, Zc = function(e) {
            return Bf(e, Cs)
        }
    }
    var n1 = {
            set: Jc,
            get: ro,
            has: Zc,
            enforce: hW,
            getterFor: pW
        },
        vW = Br,
        yW = $r,
        bc = Si,
        Dd = Ei,
        _W = J6.CONFIGURABLE,
        bW = e1,
        i1 = n1,
        EW = i1.enforce,
        TW = i1.get,
        Lc = Object.defineProperty,
        SW = Dd && !vW(function() {
            return Lc(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        wW = String(String).split("String"),
        OW = Z0.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!bc(e, "name") || _W && e.name !== t) && (Dd ? Lc(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), SW && r && bc(r, "arity") && e.length !== r.arity && Lc(e, "length", {
                value: r.arity
            });
            try {
                r && bc(r, "constructor") && r.constructor ? Dd && Lc(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = EW(e);
            return bc(n, "source") || (n.source = wW.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = OW(function() {
        return yW(this) && TW(this).source || bW(this)
    }, "toString");
    var IW = $r,
        CW = ho,
        $W = Z0.exports,
        AW = op,
        s1 = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                o = n.name !== void 0 ? n.name : t;
            if (IW(r) && $W(r, o, n), n.global) s ? e[t] = r : AW(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : CW.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        a1 = {},
        NW = Math.ceil,
        RW = Math.floor,
        LW = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? RW : NW)(r)
        },
        kW = LW,
        Ul = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : kW(t)
        },
        PW = Ul,
        xW = Math.max,
        DW = Math.min,
        MW = function(e, t) {
            var r = PW(e);
            return r < 0 ? xW(r + t, 0) : DW(r, t)
        },
        UW = Ul,
        FW = Math.min,
        o1 = function(e) {
            return e > 0 ? FW(UW(e), 9007199254740991) : 0
        },
        BW = o1,
        jW = function(e) {
            return BW(e.length)
        },
        GW = xl,
        WW = MW,
        KW = jW,
        f_ = function(e) {
            return function(t, r, n) {
                var s = GW(t),
                    o = KW(s),
                    c = WW(n, o),
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
        HW = {
            includes: f_(!0),
            indexOf: f_(!1)
        },
        VW = dr,
        Gf = Si,
        qW = xl,
        YW = HW.indexOf,
        zW = fp,
        d_ = VW([].push),
        c1 = function(e, t) {
            var r = qW(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Gf(zW, o) && Gf(r, o) && d_(s, o);
            for (; t.length > n;) Gf(r, o = t[n++]) && (~YW(s, o) || d_(s, o));
            return s
        },
        dp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        XW = c1,
        JW = dp,
        ZW = JW.concat("length", "prototype");
    a1.f = Object.getOwnPropertyNames || function(t) {
        return XW(t, ZW)
    };
    var l1 = {};
    l1.f = Object.getOwnPropertySymbols;
    var QW = Dl,
        eK = dr,
        tK = a1,
        rK = l1,
        nK = us,
        iK = eK([].concat),
        sK = QW("Reflect", "ownKeys") || function(t) {
            var r = tK.f(nK(t)),
                n = rK.f;
            return n ? iK(r, n(t)) : r
        },
        h_ = Si,
        aK = sK,
        oK = ip,
        cK = ho,
        lK = function(e, t, r) {
            for (var n = aK(t), s = cK.f, o = oK.f, c = 0; c < n.length; c++) {
                var u = n[c];
                !h_(e, u) && !(r && h_(r, u)) && s(e, u, o(t, u))
            }
        },
        uK = Br,
        fK = $r,
        dK = /#|\.prototype\./,
        po = function(e, t) {
            var r = pK[hK(e)];
            return r == mK ? !0 : r == gK ? !1 : fK(t) ? uK(t) : !!t
        },
        hK = po.normalize = function(e) {
            return String(e).replace(dK, ".").toLowerCase()
        },
        pK = po.data = {},
        gK = po.NATIVE = "N",
        mK = po.POLYFILL = "P",
        vK = po,
        Wf = Fr,
        yK = ip.f,
        _K = lp,
        bK = s1,
        EK = op,
        TK = lK,
        SK = vK,
        u1 = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, c, u, f, h, m;
            if (n ? c = Wf : s ? c = Wf[r] || EK(r, {}) : c = (Wf[r] || {}).prototype, c)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (m = yK(c, u), f = m && m.value) : f = c[u], o = SK(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        TK(h, f)
                    }(e.sham || f && f.sham) && _K(h, "sham", !0), bK(c, u, h, e)
                }
        },
        wK = la,
        OK = Pl,
        IK = ls,
        CK = IK("match"),
        $K = function(e) {
            var t;
            return wK(e) && ((t = e[CK]) !== void 0 ? !!t : OK(e) == "RegExp")
        },
        AK = ls,
        NK = AK("toStringTag"),
        f1 = {};
    f1[NK] = "z";
    var RK = String(f1) === "[object z]",
        LK = RK,
        kK = $r,
        kc = Pl,
        PK = ls,
        xK = PK("toStringTag"),
        DK = Object,
        MK = kc(function() {
            return arguments
        }()) == "Arguments",
        UK = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        FK = LK ? kc : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = UK(t = DK(e), xK)) == "string" ? r : MK ? kc(t) : (n = kc(t)) == "Object" && kK(t.callee) ? "Arguments" : n
        },
        BK = FK,
        jK = String,
        Fl = function(e) {
            if (BK(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return jK(e)
        },
        GK = us,
        d1 = function() {
            var e = GK(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        WK = Ti,
        KK = Si,
        HK = B0,
        VK = d1,
        p_ = RegExp.prototype,
        qK = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in p_) && !KK(e, "flags") && HK(p_, e) ? WK(VK, e) : t
        },
        hp = dr,
        YK = H0,
        zK = Math.floor,
        Kf = hp("".charAt),
        XK = hp("".replace),
        Hf = hp("".slice),
        JK = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        ZK = /\$([$&'`]|\d{1,2})/g,
        h1 = function(e, t, r, n, s, o) {
            var c = r + e.length,
                u = n.length,
                f = ZK;
            return s !== void 0 && (s = YK(s), f = JK), XK(o, f, function(h, m) {
                var y;
                switch (Kf(m, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Hf(t, 0, r);
                    case "'":
                        return Hf(t, c);
                    case "<":
                        y = s[Hf(m, 1, -1)];
                        break;
                    default:
                        var E = +m;
                        if (E === 0) return h;
                        if (E > u) {
                            var I = zK(E / 10);
                            return I === 0 ? h : I <= u ? n[I - 1] === void 0 ? Kf(m, 1) : n[I - 1] + Kf(m, 1) : h
                        }
                        y = n[E - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        QK = u1,
        eH = Ti,
        pp = dr,
        g_ = fo,
        tH = $r,
        rH = $K,
        Ra = Fl,
        nH = ap,
        iH = qK,
        sH = h1,
        aH = ls,
        oH = aH("replace"),
        cH = TypeError,
        p1 = pp("".indexOf);
    pp("".replace);
    var m_ = pp("".slice),
        lH = Math.max,
        v_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : p1(e, t, r)
        };
    QK({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = g_(this),
                s, o, c, u, f, h, m, y, E, I = 0,
                k = 0,
                M = "";
            if (t != null) {
                if (s = rH(t), s && (o = Ra(g_(iH(t))), !~p1(o, "g"))) throw cH("`.replaceAll` does not allow non-global regexes");
                if (c = nH(t, oH), c) return eH(c, t, n, r)
            }
            for (u = Ra(n), f = Ra(t), h = tH(r), h || (r = Ra(r)), m = f.length, y = lH(1, m), I = v_(u, f, 0); I !== -1;) E = h ? Ra(r(f, I, u)) : sH(f, u, I, [], void 0, r), M += m_(u, k, I) + E, k = I + m, I = v_(u, f, I + y);
            return k < u.length && (M += m_(u, k)), M
        }
    });
    var gp = Br,
        uH = Fr,
        mp = uH.RegExp,
        vp = gp(function() {
            var e = mp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        fH = vp || gp(function() {
            return !mp("a", "y").sticky
        }),
        dH = vp || gp(function() {
            var e = mp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        hH = {
            BROKEN_CARET: dH,
            MISSED_STICKY: fH,
            UNSUPPORTED_Y: vp
        },
        g1 = {},
        pH = c1,
        gH = dp,
        mH = Object.keys || function(t) {
            return pH(t, gH)
        },
        vH = Ei,
        yH = J0,
        _H = ho,
        bH = us,
        EH = xl,
        TH = mH;
    g1.f = vH && !yH ? Object.defineProperties : function(t, r) {
        bH(t);
        for (var n = EH(r), s = TH(r), o = s.length, c = 0, u; o > c;) _H.f(t, u = s[c++], n[u]);
        return t
    };
    var SH = Dl,
        wH = SH("document", "documentElement"),
        OH = us,
        IH = g1,
        y_ = dp,
        CH = fp,
        $H = wH,
        AH = z0,
        NH = t1,
        __ = ">",
        b_ = "<",
        Md = "prototype",
        Ud = "script",
        m1 = NH("IE_PROTO"),
        Vf = function() {},
        v1 = function(e) {
            return b_ + Ud + __ + e + b_ + "/" + Ud + __
        },
        E_ = function(e) {
            e.write(v1("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        RH = function() {
            var e = AH("iframe"),
                t = "java" + Ud + ":",
                r;
            return e.style.display = "none", $H.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(v1("document.F=Object")), r.close(), r.F
        },
        Ec, Pc = function() {
            try {
                Ec = new ActiveXObject("htmlfile")
            } catch {}
            Pc = typeof document < "u" ? document.domain && Ec ? E_(Ec) : RH() : E_(Ec);
            for (var e = y_.length; e--;) delete Pc[Md][y_[e]];
            return Pc()
        };
    CH[m1] = !0;
    var LH = Object.create || function(t, r) {
            var n;
            return t !== null ? (Vf[Md] = OH(t), n = new Vf, Vf[Md] = null, n[m1] = t) : n = Pc(), r === void 0 ? n : IH.f(n, r)
        },
        kH = Br,
        PH = Fr,
        xH = PH.RegExp,
        DH = kH(function() {
            var e = xH(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        MH = Br,
        UH = Fr,
        FH = UH.RegExp,
        BH = MH(function() {
            var e = FH("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Rs = Ti,
        Bl = dr,
        jH = Fl,
        GH = d1,
        WH = hH,
        KH = Ml.exports,
        HH = LH,
        VH = n1.get,
        qH = DH,
        YH = BH,
        zH = KH("native-string-replace", String.prototype.replace),
        Qc = RegExp.prototype.exec,
        Fd = Qc,
        XH = Bl("".charAt),
        JH = Bl("".indexOf),
        ZH = Bl("".replace),
        qf = Bl("".slice),
        Bd = function() {
            var e = /a/,
                t = /b*/g;
            return Rs(Qc, e, "a"), Rs(Qc, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        y1 = WH.BROKEN_CARET,
        jd = /()??/.exec("")[1] !== void 0,
        QH = Bd || jd || y1 || qH || YH;
    QH && (Fd = function(t) {
        var r = this,
            n = VH(r),
            s = jH(t),
            o = n.raw,
            c, u, f, h, m, y, E;
        if (o) return o.lastIndex = r.lastIndex, c = Rs(Fd, o, s), r.lastIndex = o.lastIndex, c;
        var I = n.groups,
            k = y1 && r.sticky,
            M = Rs(GH, r),
            j = r.source,
            C = 0,
            H = s;
        if (k && (M = ZH(M, "y", ""), JH(M, "g") === -1 && (M += "g"), H = qf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && XH(s, r.lastIndex - 1) !== `
`) && (j = "(?: " + j + ")", H = " " + H, C++), u = new RegExp("^(?:" + j + ")", M)), jd && (u = new RegExp("^" + j + "$(?!\\s)", M)), Bd && (f = r.lastIndex), h = Rs(Qc, k ? u : r, H), k ? h ? (h.input = qf(h.input, C), h[0] = qf(h[0], C), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Bd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), jd && h && h.length > 1 && Rs(zH, h[0], u, function() {
                for (m = 1; m < arguments.length - 2; m++) arguments[m] === void 0 && (h[m] = void 0)
            }), h && I)
            for (h.groups = y = HH(null), m = 0; m < I.length; m++) E = I[m], y[E[0]] = h[E[1]];
        return h
    });
    var yp = Fd,
        eV = u1,
        T_ = yp;
    eV({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== T_
    }, {
        exec: T_
    });
    var tV = sp,
        _1 = Function.prototype,
        S_ = _1.apply,
        w_ = _1.call,
        rV = typeof Reflect == "object" && Reflect.apply || (tV ? w_.bind(S_) : function() {
            return w_.apply(S_, arguments)
        }),
        O_ = dr,
        I_ = s1,
        nV = yp,
        C_ = Br,
        b1 = ls,
        iV = lp,
        sV = b1("species"),
        Yf = RegExp.prototype,
        aV = function(e, t, r, n) {
            var s = b1(e),
                o = !C_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                c = o && !C_(function() {
                    var h = !1,
                        m = /a/;
                    return e === "split" && (m = {}, m.constructor = {}, m.constructor[sV] = function() {
                        return m
                    }, m.flags = "", m[s] = /./ [s]), m.exec = function() {
                        return h = !0, null
                    }, m[s](""), !h
                });
            if (!o || !c || r) {
                var u = O_(/./ [s]),
                    f = t(s, "" [e], function(h, m, y, E, I) {
                        var k = O_(h),
                            M = m.exec;
                        return M === nV || M === Yf.exec ? o && !I ? {
                            done: !0,
                            value: u(m, y, E)
                        } : {
                            done: !0,
                            value: k(y, m, E)
                        } : {
                            done: !1
                        }
                    });
                I_(String.prototype, e, f[0]), I_(Yf, s, f[1])
            }
            n && iV(Yf[s], "sham", !0)
        },
        _p = dr,
        oV = Ul,
        cV = Fl,
        lV = fo,
        uV = _p("".charAt),
        $_ = _p("".charCodeAt),
        fV = _p("".slice),
        A_ = function(e) {
            return function(t, r) {
                var n = cV(lV(t)),
                    s = oV(r),
                    o = n.length,
                    c, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (c = $_(n, s), c < 55296 || c > 56319 || s + 1 === o || (u = $_(n, s + 1)) < 56320 || u > 57343 ? e ? uV(n, s) : c : e ? fV(n, s, s + 2) : (c - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        dV = {
            codeAt: A_(!1),
            charAt: A_(!0)
        },
        hV = dV.charAt,
        pV = function(e, t, r) {
            return t + (r ? hV(e, t).length : 1)
        },
        N_ = Ti,
        gV = us,
        mV = $r,
        vV = Pl,
        yV = yp,
        _V = TypeError,
        bV = function(e, t) {
            var r = e.exec;
            if (mV(r)) {
                var n = N_(r, e, t);
                return n !== null && gV(n), n
            }
            if (vV(e) === "RegExp") return N_(yV, e, t);
            throw _V("RegExp#exec called on incompatible receiver")
        },
        EV = rV,
        R_ = Ti,
        jl = dr,
        TV = aV,
        SV = Br,
        wV = us,
        OV = $r,
        IV = Ul,
        CV = o1,
        $s = Fl,
        $V = fo,
        AV = pV,
        NV = ap,
        RV = h1,
        LV = bV,
        kV = ls,
        Gd = kV("replace"),
        PV = Math.max,
        xV = Math.min,
        DV = jl([].concat),
        zf = jl([].push),
        L_ = jl("".indexOf),
        k_ = jl("".slice),
        MV = function(e) {
            return e === void 0 ? e : String(e)
        },
        UV = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        P_ = function() {
            return /./ [Gd] ? /./ [Gd]("a", "$0") === "" : !1
        }(),
        FV = !SV(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    TV("replace", function(e, t, r) {
        var n = P_ ? "$" : "$0";
        return [function(o, c) {
            var u = $V(this),
                f = o == null ? void 0 : NV(o, Gd);
            return f ? R_(f, o, u, c) : R_(t, $s(u), o, c)
        }, function(s, o) {
            var c = wV(this),
                u = $s(s);
            if (typeof o == "string" && L_(o, n) === -1 && L_(o, "$<") === -1) {
                var f = r(t, c, u, o);
                if (f.done) return f.value
            }
            var h = OV(o);
            h || (o = $s(o));
            var m = c.global;
            if (m) {
                var y = c.unicode;
                c.lastIndex = 0
            }
            for (var E = [];;) {
                var I = LV(c, u);
                if (I === null || (zf(E, I), !m)) break;
                var k = $s(I[0]);
                k === "" && (c.lastIndex = AV(u, CV(c.lastIndex), y))
            }
            for (var M = "", j = 0, C = 0; C < E.length; C++) {
                I = E[C];
                for (var H = $s(I[0]), X = PV(xV(IV(I.index), u.length), 0), W = [], G = 1; G < I.length; G++) zf(W, MV(I[G]));
                var Z = I.groups;
                if (h) {
                    var oe = DV([H], W, X, u);
                    Z !== void 0 && zf(oe, Z);
                    var ce = $s(EV(o, void 0, oe))
                } else ce = RV(H, u, X, W, Z, o);
                X >= j && (M += k_(u, j, X) + ce, j = X + H.length)
            }
            return M + k_(u, j)
        }]
    }, !FV || !UV || P_);
    var BV = Fr,
        jV = dr,
        GV = function(e, t) {
            return jV(BV[e].prototype[t])
        },
        WV = GV,
        KV = WV("String", "replaceAll"),
        HV = KV,
        VV = HV,
        qV = VV,
        YV = qV,
        zV = YV,
        XV = zV;
    (function(e) {
        e.exports = XV
    })(l5);
    Je({
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
            this.autosize && c5(this.$refs.textarea)
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
`, ""), this.sanitizers && (t.value = A0.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
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
    Je({
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
            const e = gi();
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
    var Ki = {},
        Gl = {},
        E1 = {},
        Wl = {},
        bp = {};
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
    })(bp);
    Object.defineProperty(Wl, "__esModule", {
        value: !0
    });
    Wl.Tokenizer = void 0;
    var ri = bp,
        JV = function() {
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
                        m = !0;
                    !h && !o ? f.convertToTextToken() : o ? f.type === ri.Token.Type.endTag && f.content === c ? (o = !1, s.push(e.createTextToken(u))) : (f.convertToTextToken(), u += f.content, m = !1) : h.noNesting && f.type === ri.Token.Type.startTag && (o = !0, c = f.content, u = ""), m && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], o = n.exec(t), c = 0; o;) {
                    var u = o.index - c;
                    u > 0 && s.push(e.createTextToken(t.substr(c, u))), s.push(e.createTagToken(o)), c = n.lastIndex, o = n.exec(t)
                }
                var f = t.length - c;
                return f > 0 && s.push(e.createTextToken(t.substr(c, f))), s
            }, e.createTextToken = function(t) {
                return new ri.Token(ri.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), o = t[0].substr(1 + r.length, t[0].length - 2 - r.length), c = s.exec(o); c;) c[1] ? n[c[1]] = c[3] : n[r] = c[3], c = s.exec(o);
                    return new ri.Token(ri.Token.Type.startTag, r, n, t[0])
                }
                return new ri.Token(ri.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    Wl.Tokenizer = JV;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Wl,
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
                        var m = f.content,
                            h = new s({
                                type: s.Type.tag,
                                content: m,
                                attributes: f.attributes
                            }),
                            y = s.buildTreeFromTokens(h, c, m);
                        if (!y) return null;
                        o.subTrees.push(y)
                    }
                    if (f.type === r.Token.Type.endTag) {
                        var m = f.content;
                        return m === u ? o : null
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
    })(E1);
    var go = {};
    Object.defineProperty(go, "__esModule", {
        value: !0
    });
    go.Tag = void 0;
    var ZV = function() {
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
    go.Tag = ZV;
    Object.defineProperty(Gl, "__esModule", {
        value: !0
    });
    Gl.BBCodeParser = void 0;
    var x_ = E1,
        D_ = go,
        QV = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: D_.Tag.create("b"),
                        i: D_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var o = x_.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === x_.ParseTree.Type.text) {
                        var m = f.content;
                        n && (m = o.escapeHTML ? e.escapeHTML(m) : m), r && !u && (m = m.replace(/(\r\n|\n|\r)/gm, "<br>"), u = !1), c += m
                    } else {
                        var y = o.tags[f.content],
                            E = o.treeToHtml(f.subTrees, y.insertLineBreaks, n, s);
                        s ? c += E : c += y.markupGenerator(y, E, (h = f.attributes) !== null && h !== void 0 ? h : {}), u = y.suppressLineBreaks
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
    Gl.BBCodeParser = QV;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Gl;
        Object.defineProperty(e, "BBCodeParser", {
            enumerable: !0,
            get: function() {
                return t.BBCodeParser
            }
        });
        var r = go;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Ki);
    const e7 = {
        install: e => {
            const t = {
                section: Ki.Tag.create("section", (o, c, {
                    section: u
                }) => `<div ${u?`class="section ${u}"`:'class="section"'}>${c}</div>`)
            };
            ["b", "bold", "B"].forEach(o => {
                t[o] = Ki.Tag.create(o, (c, u) => `<strong>${u}</strong>`)
            }), ["i", "italic", "I"].forEach(o => {
                t[o] = Ki.Tag.create(o, (c, u) => `<em>${u}</em>`)
            });
            const s = new Ki.BBCodeParser(t);
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
                            s.addTag(o, Ki.Tag.create(o, c));
                            return
                        }
                        s.addTag(o, Ki.Tag.create(o, c.generator, c.options))
                    })
                }
            }), e.config.globalProperties.$bb = o => (typeof o != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof o} with value ${o};converting to string before parsing.`), s.parse(String(o)))
        }
    };
    var T1 = {
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
                    m = c > u ? f : h;
                m = s.tap === !0 ? "tp" : m, m === s.konamiCodeGesture.substr(0, 2) ? s.konamiCodeGesture = s.konamiCodeGesture.substr(2, s.konamiCodeGesture.length - 2) : s.konamiCodeGesture = s.originalCodeGesture, s.konamiCodeGesture.length === 0 && (s.konamiCodeGesture = s.originalCodeGesture, s.afterCodeSequenceCallback(n))
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
    })(T1);
    const t7 = T1.exports,
        r7 = Je({
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
        Wn = e => (hl("data-v-220ec4c0"), e = e(), pl(), e),
        n7 = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        i7 = {
            key: 0,
            class: "power-nav"
        },
        s7 = Wn(() => z("p", null, "MARKERS", -1)),
        a7 = ["onClick"],
        o7 = en("KILL"),
        c7 = Wn(() => z("br", null, null, -1)),
        l7 = en("ROOM"),
        u7 = [o7, c7, l7],
        f7 = Wn(() => z("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        d7 = {
            key: 1,
            class: "title focused"
        },
        h7 = {
            key: 2,
            class: "title focused"
        },
        p7 = Wn(() => z("svg", {
            viewBox: "0 0 20 10"
        }, [z("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        g7 = Wn(() => z("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        m7 = [p7, g7],
        v7 = Wn(() => z("svg", {
            viewBox: "0 0 60 50"
        }, [z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        y7 = Wn(() => z("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        _7 = [v7, y7],
        b7 = Wn(() => z("svg", {
            viewBox: "0 0 60 50"
        }, [z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        E7 = Wn(() => z("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        T7 = [b7, E7];

    function S7(e, t, r, n, s, o) {
        return e.replayer ? (F(), V("div", n7, [e.showPowerNav ? (F(), V("div", i7, [z("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...c) => e.onClosePowerNavClick && e.onClosePowerNavClick(...c))
        }, "X"), s7, z("ul", null, [(F(!0), V(ze, null, Qr(e.replayer.markerMap, (c, u) => (F(), V("li", {
            key: u,
            class: Fe({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, De(c[1].marker), 11, a7))), 128))]), z("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...c) => e.onKillClick && e.onKillClick(...c))
        }, u7), z("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...c) => e.onDisconnectClick && e.onDisconnectClick(...c))
        }, "DISCONNECT")])) : Oe("", !0), f7, e.replayer.markerMap.length ? (F(), V("p", h7, De(e.replayer.currentMarkerItemIndex) + " : " + De(e.replayer.currentMarkerItem[1].marker) + " (" + De(e.replayer.currentEntityItemIndex) + ") ", 1)) : (F(), V("p", d7, "Item #" + De(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? Oe("", !0) : (F(), V("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...c) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...c))
        }, m7)), z("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...c) => e.onPreviousClick && e.onPreviousClick(...c))
        }, _7), z("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...c) => e.onNextClick && e.onNextClick(...c))
        }, T7)], 512)) : Oe("", !0)
    }
    const w7 = He(r7, [
        ["render", S7],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function O7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var I7 = O7,
        C7 = cT,
        $7 = C7(Object.keys, Object),
        A7 = $7,
        N7 = Mh,
        R7 = A7,
        L7 = Object.prototype,
        k7 = L7.hasOwnProperty;

    function P7(e) {
        if (!N7(e)) return R7(e);
        var t = [];
        for (var r in Object(e)) k7.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var x7 = P7,
        D7 = mT,
        M7 = x7,
        U7 = Nl;

    function F7(e) {
        return U7(e) ? D7(e) : M7(e)
    }
    var Kl = F7,
        B7 = oo,
        j7 = Kl;

    function G7(e, t) {
        return e && B7(t, j7(t), e)
    }
    var W7 = G7,
        K7 = oo,
        H7 = co;

    function V7(e, t) {
        return e && K7(t, H7(t), e)
    }
    var q7 = V7;

    function Y7(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n;) {
            var c = e[r];
            t(c, r, e) && (o[s++] = c)
        }
        return o
    }
    var z7 = Y7;

    function X7() {
        return []
    }
    var S1 = X7,
        J7 = z7,
        Z7 = S1,
        Q7 = Object.prototype,
        e9 = Q7.propertyIsEnumerable,
        M_ = Object.getOwnPropertySymbols,
        t9 = M_ ? function(e) {
            return e == null ? [] : (e = Object(e), J7(M_(e), function(t) {
                return e9.call(e, t)
            }))
        } : Z7,
        Ep = t9,
        r9 = oo,
        n9 = Ep;

    function i9(e, t) {
        return r9(e, n9(e), t)
    }
    var s9 = i9;

    function a9(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var w1 = a9,
        o9 = w1,
        c9 = Dh,
        l9 = Ep,
        u9 = S1,
        f9 = Object.getOwnPropertySymbols,
        d9 = f9 ? function(e) {
            for (var t = []; e;) o9(t, l9(e)), e = c9(e);
            return t
        } : u9,
        O1 = d9,
        h9 = oo,
        p9 = O1;

    function g9(e, t) {
        return h9(e, p9(e), t)
    }
    var m9 = g9,
        v9 = w1,
        y9 = _i;

    function _9(e, t, r) {
        var n = t(e);
        return y9(e) ? n : v9(n, r(e))
    }
    var I1 = _9,
        b9 = I1,
        E9 = Ep,
        T9 = Kl;

    function S9(e) {
        return b9(e, T9, E9)
    }
    var w9 = S9,
        O9 = I1,
        I9 = O1,
        C9 = co;

    function $9(e) {
        return O9(e, C9, I9)
    }
    var A9 = $9,
        N9 = cs,
        R9 = pn,
        L9 = N9(R9, "DataView"),
        k9 = L9,
        P9 = cs,
        x9 = pn,
        D9 = P9(x9, "Promise"),
        M9 = D9,
        U9 = cs,
        F9 = pn,
        B9 = U9(F9, "Set"),
        j9 = B9,
        G9 = cs,
        W9 = pn,
        K9 = G9(W9, "WeakMap"),
        H9 = K9,
        Wd = k9,
        Kd = kh,
        Hd = M9,
        Vd = j9,
        qd = H9,
        C1 = ia,
        ua = tT,
        U_ = "[object Map]",
        V9 = "[object Object]",
        F_ = "[object Promise]",
        B_ = "[object Set]",
        j_ = "[object WeakMap]",
        G_ = "[object DataView]",
        q9 = ua(Wd),
        Y9 = ua(Kd),
        z9 = ua(Hd),
        X9 = ua(Vd),
        J9 = ua(qd),
        Hi = C1;
    (Wd && Hi(new Wd(new ArrayBuffer(1))) != G_ || Kd && Hi(new Kd) != U_ || Hd && Hi(Hd.resolve()) != F_ || Vd && Hi(new Vd) != B_ || qd && Hi(new qd) != j_) && (Hi = function(e) {
        var t = C1(e),
            r = t == V9 ? e.constructor : void 0,
            n = r ? ua(r) : "";
        if (n) switch (n) {
            case q9:
                return G_;
            case Y9:
                return U_;
            case z9:
                return F_;
            case X9:
                return B_;
            case J9:
                return j_
        }
        return t
    });
    var Tp = Hi,
        Z9 = Object.prototype,
        Q9 = Z9.hasOwnProperty;

    function eq(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && Q9.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var tq = eq,
        rq = xh;

    function nq(e, t) {
        var r = t ? rq(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var iq = nq,
        sq = /\w*$/;

    function aq(e) {
        var t = new e.constructor(e.source, sq.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var oq = aq,
        W_ = Cl,
        K_ = W_ ? W_.prototype : void 0,
        H_ = K_ ? K_.valueOf : void 0;

    function cq(e) {
        return H_ ? Object(H_.call(e)) : {}
    }
    var lq = cq,
        uq = xh,
        fq = iq,
        dq = oq,
        hq = lq,
        pq = aT,
        gq = "[object Boolean]",
        mq = "[object Date]",
        vq = "[object Map]",
        yq = "[object Number]",
        _q = "[object RegExp]",
        bq = "[object Set]",
        Eq = "[object String]",
        Tq = "[object Symbol]",
        Sq = "[object ArrayBuffer]",
        wq = "[object DataView]",
        Oq = "[object Float32Array]",
        Iq = "[object Float64Array]",
        Cq = "[object Int8Array]",
        $q = "[object Int16Array]",
        Aq = "[object Int32Array]",
        Nq = "[object Uint8Array]",
        Rq = "[object Uint8ClampedArray]",
        Lq = "[object Uint16Array]",
        kq = "[object Uint32Array]";

    function Pq(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case Sq:
                return uq(e);
            case gq:
            case mq:
                return new n(+e);
            case wq:
                return fq(e, r);
            case Oq:
            case Iq:
            case Cq:
            case $q:
            case Aq:
            case Nq:
            case Rq:
            case Lq:
            case kq:
                return pq(e, r);
            case vq:
                return new n;
            case yq:
            case Eq:
                return new n(e);
            case _q:
                return dq(e);
            case bq:
                return new n;
            case Tq:
                return hq(e)
        }
    }
    var xq = Pq,
        Dq = Tp,
        Mq = yi,
        Uq = "[object Map]";

    function Fq(e) {
        return Mq(e) && Dq(e) == Uq
    }
    var Bq = Fq,
        jq = Bq,
        Gq = Uh,
        V_ = eo.exports,
        q_ = V_ && V_.isMap,
        Wq = q_ ? Gq(q_) : jq,
        Kq = Wq,
        Hq = Tp,
        Vq = yi,
        qq = "[object Set]";

    function Yq(e) {
        return Vq(e) && Hq(e) == qq
    }
    var zq = Yq,
        Xq = zq,
        Jq = Uh,
        Y_ = eo.exports,
        z_ = Y_ && Y_.isSet,
        Zq = z_ ? Jq(z_) : Xq,
        Qq = Zq,
        eY = nT,
        tY = I7,
        rY = Fh,
        nY = W7,
        iY = q7,
        sY = Hc.exports,
        aY = oT,
        oY = s9,
        cY = m9,
        lY = w9,
        uY = A9,
        fY = Tp,
        dY = tq,
        hY = xq,
        pY = lT,
        gY = _i,
        mY = Qa.exports,
        vY = Kq,
        yY = tn,
        _Y = Qq,
        bY = Kl,
        EY = co,
        TY = 1,
        SY = 2,
        wY = 4,
        $1 = "[object Arguments]",
        OY = "[object Array]",
        IY = "[object Boolean]",
        CY = "[object Date]",
        $Y = "[object Error]",
        A1 = "[object Function]",
        AY = "[object GeneratorFunction]",
        NY = "[object Map]",
        RY = "[object Number]",
        N1 = "[object Object]",
        LY = "[object RegExp]",
        kY = "[object Set]",
        PY = "[object String]",
        xY = "[object Symbol]",
        DY = "[object WeakMap]",
        MY = "[object ArrayBuffer]",
        UY = "[object DataView]",
        FY = "[object Float32Array]",
        BY = "[object Float64Array]",
        jY = "[object Int8Array]",
        GY = "[object Int16Array]",
        WY = "[object Int32Array]",
        KY = "[object Uint8Array]",
        HY = "[object Uint8ClampedArray]",
        VY = "[object Uint16Array]",
        qY = "[object Uint32Array]",
        bt = {};
    bt[$1] = bt[OY] = bt[MY] = bt[UY] = bt[IY] = bt[CY] = bt[FY] = bt[BY] = bt[jY] = bt[GY] = bt[WY] = bt[NY] = bt[RY] = bt[N1] = bt[LY] = bt[kY] = bt[PY] = bt[xY] = bt[KY] = bt[HY] = bt[VY] = bt[qY] = !0;
    bt[$Y] = bt[A1] = bt[DY] = !1;

    function xc(e, t, r, n, s, o) {
        var c, u = t & TY,
            f = t & SY,
            h = t & wY;
        if (r && (c = s ? r(e, n, s, o) : r(e)), c !== void 0) return c;
        if (!yY(e)) return e;
        var m = gY(e);
        if (m) {
            if (c = dY(e), !u) return aY(e, c)
        } else {
            var y = fY(e),
                E = y == A1 || y == AY;
            if (mY(e)) return sY(e, u);
            if (y == N1 || y == $1 || E && !s) {
                if (c = f || E ? {} : pY(e), !u) return f ? cY(e, iY(c, e)) : oY(e, nY(c, e))
            } else {
                if (!bt[y]) return s ? e : {};
                c = hY(e, y, u)
            }
        }
        o || (o = new eY);
        var I = o.get(e);
        if (I) return I;
        o.set(e, c), _Y(e) ? e.forEach(function(j) {
            c.add(xc(j, t, r, j, e, o))
        }) : vY(e) && e.forEach(function(j, C) {
            c.set(C, xc(j, t, r, C, e, o))
        });
        var k = h ? f ? uY : lY : f ? EY : bY,
            M = m ? void 0 : k(e);
        return tY(M || e, function(j, C) {
            M && (C = j, j = e[C]), rY(c, C, xc(j, t, r, C, e, o))
        }), c
    }
    var YY = xc,
        zY = YY,
        XY = 1,
        JY = 4;

    function ZY(e) {
        return zY(e, XY | JY)
    }
    var R1 = ZY;
    const QY = Je({
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
                !e || (this.values = R1(this.$ecastValues), this.content = (n = Ky.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await Ky.send({
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
        L1 = "main/pp8/survey-bomb/assets/ad9172fc.png",
        k1 = "main/pp8/survey-bomb/assets/dc131b16.png",
        ez = "main/pp8/survey-bomb/assets/38715b18.png",
        tz = "main/pp8/survey-bomb/assets/b0d7c822.png",
        rz = "main/pp8/survey-bomb/assets/06150f24.png",
        rn = e => (hl("data-v-2c53389f"), e = e(), pl(), e),
        nz = {
            class: "jbg"
        },
        iz = {
            key: 0,
            class: "options"
        },
        sz = rn(() => z("img", {
            src: L1,
            alt: "Leave Feedback"
        }, null, -1)),
        az = rn(() => z("span", null, [en("LEAVE"), z("br"), en("FEEDBACK")], -1)),
        oz = [sz, az],
        cz = rn(() => z("img", {
            src: k1,
            alt: "Send Debug"
        }, null, -1)),
        lz = rn(() => z("span", null, [en("SEND A"), z("br"), en("DEBUG")], -1)),
        uz = [cz, lz],
        fz = {
            key: 1,
            class: "feedback"
        },
        dz = rn(() => z("img", {
            class: "image",
            src: L1,
            alt: "Feedback"
        }, null, -1)),
        hz = rn(() => z("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        pz = rn(() => z("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        gz = {
            class: "buttons"
        },
        mz = rn(() => z("img", {
            src: ez,
            alt: "good"
        }, null, -1)),
        vz = [mz],
        yz = rn(() => z("img", {
            src: tz,
            alt: "good"
        }, null, -1)),
        _z = [yz],
        bz = rn(() => z("img", {
            src: rz,
            alt: "bad"
        }, null, -1)),
        Ez = [bz],
        Tz = {
            class: "actions"
        },
        Sz = {
            key: 0,
            class: "content-guess"
        },
        wz = en("Feedback is about: "),
        Oz = {
            key: 2,
            class: "debug"
        },
        Iz = rn(() => z("img", {
            class: "image",
            src: k1,
            alt: "Debug"
        }, null, -1)),
        Cz = rn(() => z("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        $z = {
            class: "actions"
        };

    function Az(e, t, r, n, s, o) {
        return F(), V("div", nz, [e.screen === "options" ? (F(), V("div", iz, [z("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, oz), z("button", {
            onClick: t[1] || (t[1] = (...c) => e.onDebugClick && e.onDebugClick(...c))
        }, uz)])) : e.screen === "feedback" ? (F(), V("div", fz, [dz, hz, z("div", {
            class: Fe(["vibes", {
                "has-selected": e.vibe
            }])
        }, [pz, z("div", gz, [z("button", {
            class: Fe({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = c => e.onVibeClick("good"))
        }, vz, 2), z("button", {
            class: Fe({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = c => e.onVibeClick("meh"))
        }, _z, 2), z("button", {
            class: Fe({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = c => e.onVibeClick("bad"))
        }, Ez, 2)])], 2), z("div", Tz, [e.content ? (F(), V("div", Sz, [qe(z("input", {
            "onUpdate:modelValue": t[5] || (t[5] = c => e.isContent = c),
            type: "checkbox"
        }, null, 512), [
            [Dk, e.isContent]
        ]), z("span", null, [wz, z("em", null, De(e.content), 1)])])) : Oe("", !0), qe(z("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = c => e.message = c),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [Qv, e.message]
        ]), z("button", {
            onClick: t[7] || (t[7] = Cr((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, De(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (F(), V("div", Oz, [Iz, Cz, z("div", $z, [qe(z("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = c => e.message = c),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [Qv, e.message]
        ]), z("button", {
            onClick: t[9] || (t[9] = Cr((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, De(e.$t("ACTION.OK")), 1)])])) : Oe("", !0)])
    }
    const P1 = He(QY, [
            ["render", Az],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        Nz = Je({
            methods: {
                onFeedbackClick() {
                    this.$showModal(P1)
                }
            }
        });

    function Rz(e, t, r, n, s, o) {
        return F(), V("div", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "SEND FEEDBACK")
    }
    const Lz = He(Nz, [
            ["render", Rz],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        kz = {
            install: (e, t) => {
                if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                    if (t.replayer) {
                        e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", w7);
                        return
                    }
                    if (e.config.globalProperties.$debugRecorder = new I4(t.client, t.room), !e.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!yr.isProduction || yr.getQueryParam("feedback")) && e.component("Debug", Lz), new t7(() => {
                        e.config.globalProperties.$showModal(P1)
                    })
                }
            }
        };
    var Pz = pn,
        xz = function() {
            return Pz.Date.now()
        },
        Dz = xz,
        Mz = /\s/;

    function Uz(e) {
        for (var t = e.length; t-- && Mz.test(e.charAt(t)););
        return t
    }
    var Fz = Uz,
        Bz = Fz,
        jz = /^\s+/;

    function Gz(e) {
        return e && e.slice(0, Bz(e) + 1).replace(jz, "")
    }
    var Wz = Gz,
        Kz = ia,
        Hz = yi,
        Vz = "[object Symbol]";

    function qz(e) {
        return typeof e == "symbol" || Hz(e) && Kz(e) == Vz
    }
    var Hl = qz,
        Yz = Wz,
        X_ = tn,
        zz = Hl,
        J_ = 0 / 0,
        Xz = /^[-+]0x[0-9a-f]+$/i,
        Jz = /^0b[01]+$/i,
        Zz = /^0o[0-7]+$/i,
        Qz = parseInt;

    function eX(e) {
        if (typeof e == "number") return e;
        if (zz(e)) return J_;
        if (X_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = X_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = Yz(e);
        var r = Jz.test(e);
        return r || Zz.test(e) ? Qz(e.slice(2), r ? 2 : 8) : Xz.test(e) ? J_ : +e
    }
    var tX = eX,
        rX = tn,
        Xf = Dz,
        Z_ = tX,
        nX = "Expected a function",
        iX = Math.max,
        sX = Math.min;

    function aX(e, t, r) {
        var n, s, o, c, u, f, h = 0,
            m = !1,
            y = !1,
            E = !0;
        if (typeof e != "function") throw new TypeError(nX);
        t = Z_(t) || 0, rX(r) && (m = !!r.leading, y = "maxWait" in r, o = y ? iX(Z_(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

        function I(Z) {
            var oe = n,
                ce = s;
            return n = s = void 0, h = Z, c = e.apply(ce, oe), c
        }

        function k(Z) {
            return h = Z, u = setTimeout(C, t), m ? I(Z) : c
        }

        function M(Z) {
            var oe = Z - f,
                ce = Z - h,
                ue = t - oe;
            return y ? sX(ue, o - ce) : ue
        }

        function j(Z) {
            var oe = Z - f,
                ce = Z - h;
            return f === void 0 || oe >= t || oe < 0 || y && ce >= o
        }

        function C() {
            var Z = Xf();
            if (j(Z)) return H(Z);
            u = setTimeout(C, M(Z))
        }

        function H(Z) {
            return u = void 0, E && n ? I(Z) : (n = s = void 0, c)
        }

        function X() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function W() {
            return u === void 0 ? c : H(Xf())
        }

        function G() {
            var Z = Xf(),
                oe = j(Z);
            if (n = arguments, s = this, f = Z, oe) {
                if (u === void 0) return k(f);
                if (y) return clearTimeout(u), u = setTimeout(C, t), I(f)
            }
            return u === void 0 && (u = setTimeout(C, t)), c
        }
        return G.cancel = X, G.flush = W, G
    }
    var x1 = aX,
        oX = _i,
        cX = Hl,
        lX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        uX = /^\w*$/;

    function fX(e, t) {
        if (oX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || cX(e) ? !0 : uX.test(e) || !lX.test(e) || t != null && e in Object(t)
    }
    var dX = fX,
        D1 = rT,
        hX = "Expected a function";

    function Sp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(hX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var c = e.apply(this, n);
            return r.cache = o.set(s, c) || o, c
        };
        return r.cache = new(Sp.Cache || D1), r
    }
    Sp.Cache = D1;
    var pX = Sp,
        gX = pX,
        mX = 500;

    function vX(e) {
        var t = gX(e, function(n) {
                return r.size === mX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var yX = vX,
        _X = yX,
        bX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        EX = /\\(\\)?/g,
        TX = _X(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(bX, function(r, n, s, o) {
                t.push(s ? o.replace(EX, "$1") : n || r)
            }), t
        }),
        SX = TX;

    function wX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var M1 = wX,
        Q_ = Cl,
        OX = M1,
        IX = _i,
        CX = Hl,
        $X = 1 / 0,
        eb = Q_ ? Q_.prototype : void 0,
        tb = eb ? eb.toString : void 0;

    function U1(e) {
        if (typeof e == "string") return e;
        if (IX(e)) return OX(e, U1) + "";
        if (CX(e)) return tb ? tb.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -$X ? "-0" : t
    }
    var AX = U1,
        NX = AX;

    function RX(e) {
        return e == null ? "" : NX(e)
    }
    var LX = RX,
        kX = _i,
        PX = dX,
        xX = SX,
        DX = LX;

    function MX(e, t) {
        return kX(e) ? e : PX(e, t) ? [e] : xX(DX(e))
    }
    var F1 = MX,
        UX = Hl,
        FX = 1 / 0;

    function BX(e) {
        if (typeof e == "string" || UX(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -FX ? "-0" : t
    }
    var B1 = BX,
        jX = Fh,
        GX = F1,
        WX = Bh,
        rb = tn,
        KX = B1;

    function HX(e, t, r, n) {
        if (!rb(e)) return e;
        t = GX(t, e);
        for (var s = -1, o = t.length, c = o - 1, u = e; u != null && ++s < o;) {
            var f = KX(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != c) {
                var m = u[f];
                h = n ? n(m, f, u) : void 0, h === void 0 && (h = rb(m) ? m : WX(t[s + 1]) ? [] : {})
            }
            jX(u, f, h), u = u[f]
        }
        return e
    }
    var VX = HX,
        qX = VX;

    function YX(e, t, r) {
        return e == null ? e : qX(e, t, r)
    }
    var zX = YX;
    class XX {
        constructor() {
            ge(this, "wsClient");
            ge(this, "keyMap");
            ge(this, "providerMap");
            ge(this, "mappedValues", jn({}));
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
            ge(this, "sync", x1(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = jn(this.wsClient.entities), ts(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof Ir.ArtifactEntity || t instanceof Ir.DoodleEntity ? t : t instanceof Ir.ObjectEntity ? R1(t.val) : t instanceof Ir.TextEntity ? t.text : t instanceof Ir.NumberEntity ? t.val : null
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
                    zX(this.newValues, n, u)
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
    const Xr = new XX,
        JX = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Xr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => to.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && Xr.setupWatcher()
                    }), Xr.sync(), e.config.globalProperties.$ecast = Xr.wsClient, e.config.globalProperties.$ecastValues = Xr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = Xr.sync, e.config.globalProperties.$pauseEcastUpdates = Xr.pause, e.config.globalProperties.$resumeEcastUpdates = Xr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && Xr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Xr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && Xr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Xr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, t != null && t.wsClient && e.config.globalProperties.$setupEcast(t)
            }
        },
        mo = {
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

    function ZX() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function wp() {
        return !ZX() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function QX(e, t) {
        return e.require(t)
    }
    var eJ = {};

    function Jt() {
        return wp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : eJ
    }

    function Op(e, t, r) {
        var n = r || Jt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var j1 = Object.prototype.toString;

    function G1(e) {
        switch (j1.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return wi(e, Error)
        }
    }

    function fa(e, t) {
        return j1.call(e) === `[object ${t}]`
    }

    function W1(e) {
        return fa(e, "ErrorEvent")
    }

    function nb(e) {
        return fa(e, "DOMError")
    }

    function tJ(e) {
        return fa(e, "DOMException")
    }

    function Zs(e) {
        return fa(e, "String")
    }

    function rJ(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Vl(e) {
        return fa(e, "Object")
    }

    function Ip(e) {
        return typeof Event < "u" && wi(e, Event)
    }

    function nJ(e) {
        return typeof Element < "u" && wi(e, Element)
    }

    function iJ(e) {
        return fa(e, "RegExp")
    }

    function K1(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function sJ(e) {
        return Vl(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function aJ(e) {
        return typeof e == "number" && e !== e
    }

    function wi(e, t) {
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
                c = o.length;
            let m;
            for (; u && f++ < r && (m = oJ(u, t), !(m === "html" || f > 1 && h + s.length * c + m.length >= n));) s.push(m), h += m.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function oJ(e, t) {
        var r = e,
            n = [];
        let s, o, c, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (h && h.length) h.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Zs(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var m = ["type", "name", "title", "alt"];
        for (f = 0; f < m.length; f++) c = m[f], u = r.getAttribute(c), u && n.push(`[${c}="${u}"]`);
        return n.join("")
    }

    function cJ() {
        var e = Jt();
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
    var lJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function uJ(e) {
        return e === "http" || e === "https"
    }

    function fJ(e, t = !1) {
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

    function dJ(e) {
        var t = lJ.exec(e);
        if (!t) throw new xa(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, c = "", u] = t.slice(1);
        let f = "",
            h = u;
        var m = h.split("/");
        if (m.length > 1 && (f = m.slice(0, -1).join("/"), h = m.pop()), h) {
            var y = h.match(/^\d+/);
            y && (h = y[0])
        }
        return H1({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: c,
            protocol: r,
            publicKey: n
        })
    }

    function H1(e) {
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

    function hJ(e) {
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
        if (!uJ(n)) throw new xa(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new xa(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function pJ(e) {
        var t = typeof e == "string" ? dJ(e) : H1(e);
        return hJ(t), t
    }
    var gJ = Jt(),
        mJ = "Sentry Logger ",
        el = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function V1(e) {
        var t = Jt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        el.forEach(s => {
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

    function ib() {
        let e = !1;
        var t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? el.forEach(r => {
            t[r] = (...n) => {
                e && V1(() => {
                    gJ.console[r](`${mJ}[${r}]:`, ...n)
                })
            }
        }) : el.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let Wt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Wt = Op("logger", ib) : Wt = ib();

    function sb(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function ab(e, t) {
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
        return Zs(e) ? iJ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function ur(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                Y1(s, n)
            } catch {}
            e[t] = s
        }
    }

    function q1(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function Y1(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, q1(e, "__sentry_original__", t)
    }

    function $p(e) {
        return e.__sentry_original__
    }

    function z1(e) {
        if (G1(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...cb(e)
        };
        if (Ip(e)) {
            var t = {
                type: e.type,
                target: ob(e.target),
                currentTarget: ob(e.currentTarget),
                ...cb(e)
            };
            return typeof CustomEvent < "u" && wi(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function ob(e) {
        try {
            return nJ(e) ? Yd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function cb(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function vJ(e, t = 40) {
        var r = Object.keys(z1(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return sb(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : sb(n, t)
        }
        return ""
    }

    function yJ(e) {
        var t = new Map;
        return zd(e, t)
    }

    function zd(e, t) {
        if (Vl(e)) {
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
    var Jf = "<anonymous>";

    function mi(e) {
        try {
            return !e || typeof e != "function" ? Jf : e.name || Jf
        } catch {
            return Jf
        }
    }

    function _J() {
        if (!("fetch" in Jt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function lb(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function bJ() {
        if (!_J()) return !1;
        var e = Jt();
        if (lb(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = lb(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function EJ() {
        var e = Jt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var Ct = Jt(),
        Wa = {},
        ub = {};

    function TJ(e) {
        if (!ub[e]) switch (ub[e] = !0, e) {
            case "console":
                SJ();
                break;
            case "dom":
                LJ();
                break;
            case "xhr":
                CJ();
                break;
            case "fetch":
                wJ();
                break;
            case "history":
                $J();
                break;
            case "error":
                kJ();
                break;
            case "unhandledrejection":
                PJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Ji(e, t) {
        Wa[e] = Wa[e] || [], Wa[e].push(t), TJ(e)
    }

    function hn(e, t) {
        if (!(!e || !Wa[e]))
            for (var r of Wa[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${mi(r)}
Error:`, n)
            }
    }

    function SJ() {
        "console" in Ct && el.forEach(function(e) {
            e in Ct.console && ur(Ct.console, e, function(t) {
                return function(...r) {
                    hn("console", {
                        args: r,
                        level: e
                    }), t && t.apply(Ct.console, r)
                }
            })
        })
    }

    function wJ() {
        !bJ() || ur(Ct, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: OJ(t),
                        url: IJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return hn("fetch", {
                    ...r
                }), e.apply(Ct, t).then(n => (hn("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw hn("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function OJ(e = []) {
        return "Request" in Ct && wi(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function IJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in Ct && wi(e[0], Request) ? e[0].url : String(e[0])
    }

    function CJ() {
        if ("XMLHttpRequest" in Ct) {
            var e = XMLHttpRequest.prototype;
            ur(e, "open", function(t) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        o = n.__sentry_xhr__ = {
                            method: Zs(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    Zs(s) && o.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                    var c = function() {
                        if (n.readyState === 4) {
                            try {
                                o.status_code = n.status
                            } catch {}
                            hn("xhr", {
                                args: r,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: n
                            })
                        }
                    };
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? ur(n, "onreadystatechange", function(u) {
                        return function(...f) {
                            return c(), u.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", c), t.apply(n, r)
                }
            }), ur(e, "send", function(t) {
                return function(...r) {
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), hn("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, r)
                }
            })
        }
    }
    let Tc;

    function $J() {
        if (!EJ()) return;
        var e = Ct.onpopstate;
        Ct.onpopstate = function(...r) {
            var n = Ct.location.href,
                s = Tc;
            if (Tc = n, hn("history", {
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
                    var o = Tc,
                        c = String(s);
                    Tc = c, hn("history", {
                        from: o,
                        to: c
                    })
                }
                return r.apply(this, n)
            }
        }
        ur(Ct.history, "pushState", t), ur(Ct.history, "replaceState", t)
    }
    var AJ = 1e3;
    let Sc, wc;

    function NJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function RJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function fb(e, t = !1) {
        return r => {
            if (!(!r || wc === r) && !RJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Sc === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), wc = r) : NJ(wc, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), wc = r), clearTimeout(Sc), Sc = Ct.setTimeout(() => {
                    Sc = void 0
                }, AJ)
            }
        }
    }

    function LJ() {
        if ("document" in Ct) {
            var e = hn.bind(null, "dom"),
                t = fb(e, !0);
            Ct.document.addEventListener("click", t, !1), Ct.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = Ct[r] && Ct[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (ur(n, "addEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                m = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!m.handler) {
                                var y = fb(e);
                                m.handler = y, s.call(this, o, y, u)
                            }
                            m.refCount += 1
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }), ur(n, "removeEventListener", function(s) {
                    return function(o, c, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ || {},
                                m = h[o];
                            m && (m.refCount -= 1, m.refCount <= 0 && (s.call(this, o, m.handler, u), m.handler = void 0, delete h[o]), Object.keys(h).length === 0 && delete f.__sentry_instrumentation_handlers__)
                        } catch {}
                        return s.call(this, o, c, u)
                    }
                }))
            })
        }
    }
    let Zf = null;

    function kJ() {
        Zf = Ct.onerror, Ct.onerror = function(e, t, r, n, s) {
            return hn("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), Zf ? Zf.apply(this, arguments) : !1
        }
    }
    let Qf = null;

    function PJ() {
        Qf = Ct.onunhandledrejection, Ct.onunhandledrejection = function(e) {
            return hn("unhandledrejection", e), Qf ? Qf.apply(this, arguments) : !0
        }
    }

    function xJ() {
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

    function Ka() {
        var e = Jt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function X1(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ls(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = X1(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Xd(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function tl(e, t) {
        var r = X1(e);
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

    function DJ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return Jd("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function J1(e, t = 3, r = 100 * 1024) {
        var n = DJ(e, t);
        return FJ(n) > r ? J1(e, t - 1, r) : n
    }

    function Jd(e, t, r = 1 / 0, n = 1 / 0, s = xJ()) {
        const [o, c] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !aJ(t)) return t;
        var u = MJ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return Jd("", h, r - 1, n, s)
        } catch {}
        var m = Array.isArray(t) ? [] : {};
        let y = 0;
        var E = z1(t);
        for (var I in E)
            if (!!Object.prototype.hasOwnProperty.call(E, I)) {
                if (y >= n) {
                    m[I] = "[MaxProperties ~]";
                    break
                }
                var k = E[I];
                m[I] = Jd(I, k, r - 1, n, s), y += 1
            } return c(t), m
    }

    function MJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : sJ(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${mi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function UJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function FJ(e) {
        return UJ(JSON.stringify(e))
    }
    var Un;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var r = 1;
        e[e.RESOLVED = r] = "RESOLVED";
        var n = 2;
        e[e.REJECTED = n] = "REJECTED"
    })(Un || (Un = {}));
    class Tn {
        __init() {
            this._state = Un.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            Tn.prototype.__init.call(this), Tn.prototype.__init2.call(this), Tn.prototype.__init3.call(this), Tn.prototype.__init4.call(this), Tn.prototype.__init5.call(this), Tn.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(t, r) {
            return new Tn((n, s) => {
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
            return new Tn((r, n) => {
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
                this._setResult(Un.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(Un.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, r) => {
                if (this._state === Un.PENDING) {
                    if (K1(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== Un.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(r => {
                        r[0] || (this._state === Un.RESOLVED && r[1](this._value), this._state === Un.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function ed(e) {
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
    var BJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function jJ(e) {
        return e === "warn" ? "warning" : BJ.includes(e) ? e : "log"
    }
    var Zd = {
        nowSeconds: () => Date.now() / 1e3
    };

    function GJ() {
        const {
            performance: e
        } = Jt();
        if (!(!e || !e.now)) {
            var t = Date.now() - e.now();
            return {
                now: () => e.now(),
                timeOrigin: t
            }
        }
    }

    function WJ() {
        try {
            var e = QX(LS, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var td = wp() ? WJ() : GJ(),
        db = td === void 0 ? Zd : {
            nowSeconds: () => (td.timeOrigin + td.now()) / 1e3
        },
        Z1 = Zd.nowSeconds.bind(Zd),
        Q1 = db.nowSeconds.bind(db);
    (() => {
        const {
            performance: e
        } = Jt();
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

    function KJ(e) {
        var t = Q1(),
            r = {
                sid: Ka(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => VJ(r)
            };
        return e && ql(r, e), r
    }

    function ql(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Q1(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ka()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function HJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), ql(e, r)
    }

    function VJ(e) {
        return yJ({
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
    var hb = 100;
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
            return this._user = t || {}, this._session && ql(this._session, {
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
            var n = typeof r == "number" ? Math.min(r, hb) : hb;
            if (n <= 0) return this;
            var s = {
                timestamp: Z1(),
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
            }, this._notifyEventProcessors([...eS(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, s = 0) {
            return new Tn((o, c) => {
                var u = t[s];
                if (r === null || typeof u != "function") o(r);
                else {
                    var f = u({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && Wt.log(`Event processor "${u.id}" dropped event`), K1(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, c) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, c)
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

    function eS() {
        return Op("globalEventProcessors", () => [])
    }

    function tS(e) {
        eS().push(e)
    }
    var Ap = 4,
        qJ = 100;
    class vo {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new ss, n = Ap) {
            this._version = n, vo.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
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
            var n = this._lastEventId = r && r.event_id ? r.event_id : Ka(),
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
            var s = this._lastEventId = n && n.event_id ? n.event_id : Ka(),
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
            var n = r && r.event_id ? r.event_id : Ka();
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
                maxBreadcrumbs: c = qJ
            } = s.getOptions && s.getOptions() || {};
            if (!(c <= 0)) {
                var u = Z1(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? V1(() => o(f, r)) : f;
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
            var r = pb(this);
            try {
                t(this)
            } finally {
                pb(r)
            }
        }
        getIntegration(t) {
            var r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
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
            n && HJ(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: o
            } = n && n.getOptions() || {};
            var c = Jt();
            const {
                userAgent: u
            } = c.navigator || {};
            var f = KJ({
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
                h && h.status === "ok" && ql(h, {
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
            var n = Yl(),
                s = n.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function Yl() {
        var e = Jt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function pb(e) {
        var t = Yl(),
            r = oi(t);
        return Np(t, e), r
    }

    function Ur() {
        var e = Yl();
        return (!rS(e) || oi(e).isOlderThan(Ap)) && Np(e, new vo), wp() ? YJ(e) : oi(e)
    }

    function YJ(e) {
        try {
            var t = Yl().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return oi(e);
            if (!rS(r) || oi(r).isOlderThan(Ap)) {
                var n = oi(e).getStackTop();
                Np(r, new vo(n.client, ss.clone(n.scope)))
            }
            return oi(r)
        } catch {
            return oi(e)
        }
    }

    function rS(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function oi(e) {
        return Op("hub", () => new vo, e)
    }

    function Np(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function zJ(e, t) {
        return Ur().captureException(e, {
            captureContext: t
        })
    }

    function XJ(e) {
        Ur().withScope(e)
    }

    function JJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function ZJ(e, t) {
        var r = pJ(e),
            n = `${JJ(r)}embed/error-page/`;
        let s = `dsn=${fJ(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var c = t.user;
                    if (!c) continue;
                    c.name && (s += `&name=${encodeURIComponent(c.name)}`), c.email && (s += `&email=${encodeURIComponent(c.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let gb;
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
            gb = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = $p(this) || this;
                return gb.apply(r, t)
            }
        }
    }
    no.__initStatic();
    var QJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                    var c = o.getIntegration(Ws);
                    if (c) {
                        var u = o.getClient(),
                            f = u ? u.getOptions() : {},
                            h = eZ(c._options, f);
                        return tZ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Ws.__initStatic();

    function eZ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...QJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function tZ(e, t) {
        return t.ignoreInternal && aZ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ls(e)}`), !0) : rZ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ls(e)}`), !0) : nZ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ls(e)}.
Url: ${rl(e)}`), !0) : iZ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ls(e)}.
Url: ${rl(e)}`), !0)
    }

    function rZ(e, t) {
        return !t || !t.length ? !1 : sZ(e).some(r => t.some(n => Cp(r, n)))
    }

    function nZ(e, t) {
        if (!t || !t.length) return !1;
        var r = rl(e);
        return r ? t.some(n => Cp(r, n)) : !1
    }

    function iZ(e, t) {
        if (!t || !t.length) return !0;
        var r = rl(e);
        return r ? t.some(n => Cp(r, n)) : !0
    }

    function sZ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract message for event ${Ls(e)}`), []
        }
        return []
    }

    function aZ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function oZ(e = []) {
        for (let r = e.length - 1; r >= 0; r--) {
            var t = e[r];
            if (t && t.filename !== "<anonymous>" && t.filename !== "[native code]") return t.filename || null
        }
        return null
    }

    function rl(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? oZ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract url for event ${Ls(e)}`), null
        }
    }

    function nS(e, t) {
        var r = Rp(e, t),
            n = {
                type: t && t.name,
                value: fZ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function cZ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Ip(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${vJ(t)}`
                }]
            },
            extra: {
                __serialized__: J1(t)
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

    function rd(e, t) {
        return {
            exception: {
                values: [nS(e, t)]
            }
        }
    }

    function Rp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = uZ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var lZ = /Minified React error #\d+;/i;

    function uZ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (lZ.test(e.message)) return 1
        }
        return 0
    }

    function fZ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function iS(e, t, r, n, s) {
        let o;
        if (W1(t) && t.error) {
            var c = t;
            return rd(e, c.error)
        }
        if (nb(t) || tJ(t)) {
            var u = t;
            if ("stack" in t) o = rd(e, t);
            else {
                var f = u.name || (nb(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = mb(e, h, r, n), Xd(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (G1(t)) return rd(e, t);
        if (Vl(t) || Ip(t)) {
            var m = t;
            return o = cZ(e, m, r, s), tl(o, {
                synthetic: !0
            }), o
        }
        return o = mb(e, t, r, n), Xd(o, `${t}`, void 0), tl(o, {
            synthetic: !0
        }), o
    }

    function mb(e, t, r, n) {
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
    var dZ = "Breadcrumbs";
    class io {
        static __initStatic() {
            this.id = dZ
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
            this.options.console && Ji("console", pZ), this.options.dom && Ji("dom", hZ(this.options.dom)), this.options.xhr && Ji("xhr", gZ), this.options.fetch && Ji("fetch", mZ), this.options.history && Ji("history", vZ)
        }
    }
    io.__initStatic();

    function hZ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Yd(r.event.target, s) : Yd(r.event, s)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && Ur().addBreadcrumb({
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

    function pZ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: jJ(e.level),
            message: ab(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${ab(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Ur().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function gZ(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: r,
                status_code: n,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            Ur().addBreadcrumb({
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

    function mZ(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? Ur().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Ur().addBreadcrumb({
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

    function vZ(e) {
        var t = Jt();
        let r = e.from,
            n = e.to;
        var s = ed(t.location.href);
        let o = ed(r);
        var c = ed(n);
        o.path || (o = s), s.protocol === c.protocol && s.host === c.host && (n = c.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Ur().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let Qd = 0;

    function sS() {
        return Qd > 0
    }

    function yZ() {
        Qd += 1, setTimeout(() => {
            Qd -= 1
        })
    }

    function Qs(e, t = {}, r) {
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
                var f = u.map(h => Qs(h, t));
                return e.apply(this, f)
            } catch (h) {
                throw yZ(), XJ(m => {
                    m.addEventProcessor(y => (t.mechanism && (Xd(y, void 0, void 0), tl(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: u
                    }, y)), zJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        Y1(s, e), q1(e, "__sentry_wrapped__", s);
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
    class di {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = di.id
        }
        __init2() {
            this._installFunc = {
                onerror: _Z,
                onunhandledrejection: bZ
            }
        }
        constructor(t) {
            di.prototype.__init.call(this), di.prototype.__init2.call(this), this._options = {
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
                n && t[r] && (SZ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    di.__initStatic();

    function _Z() {
        Ji("error", e => {
            const [t, r, n] = cS();
            if (!t.getIntegration(di)) return;
            const {
                msg: s,
                url: o,
                line: c,
                column: u,
                error: f
            } = e;
            if (!(sS() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Zs(s) ? TZ(s, o, c, u) : aS(iS(r, f || s, void 0, n, !1), o, c, u);
                h.level = "error", oS(t, f, h, "onerror")
            }
        })
    }

    function bZ() {
        Ji("unhandledrejection", e => {
            const [t, r, n] = cS();
            if (!t.getIntegration(di)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (sS() || s && s.__sentry_own_request__) return !0;
            var o = rJ(s) ? EZ(s) : iS(r, s, void 0, n, !0);
            o.level = "error", oS(t, s, o, "onunhandledrejection")
        })
    }

    function EZ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function TZ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = W1(e) ? e.message : e,
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
        return aS(f, t, r, n)
    }

    function aS(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            c = o[0] = o[0] || {},
            u = c.stacktrace = c.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            m = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Zs(t) && t.length > 0 ? t : cJ();
        return f.length === 0 && f.push({
            colno: h,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: m
        }), e
    }

    function SZ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.log(`Global Handler attached: ${e}`)
    }

    function oS(e, t, r, n) {
        tl(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function cS() {
        var e = Ur(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var wZ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            var t = Jt();
            this._options.setTimeout && ur(t, "setTimeout", vb), this._options.setInterval && ur(t, "setInterval", vb), this._options.requestAnimationFrame && ur(t, "requestAnimationFrame", OZ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && ur(XMLHttpRequest.prototype, "send", IZ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : wZ;
                n.forEach(CZ)
            }
        }
    }
    so.__initStatic();

    function vb(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = Qs(r, {
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

    function OZ(e) {
        return function(t) {
            return e.apply(this, [Qs(t, {
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

    function IZ(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && ur(r, s, function(o) {
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
                        u = $p(o);
                    return u && (c.mechanism.data.handler = mi(u)), Qs(o, c)
                })
            }), e.apply(this, t)
        }
    }

    function CZ(e) {
        var t = Jt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (ur(r, "addEventListener", function(n) {
            return function(s, o, c) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = Qs(o.handleEvent, {
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
                return n.apply(this, [s, Qs(o, {
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
        }), ur(r, "removeEventListener", function(n) {
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
    var $Z = "cause",
        AZ = 5;
    class Ks {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Ks.id
        }
        constructor(t = {}) {
            Ks.prototype.__init.call(this), this._key = t.key || $Z, this._limit = t.limit || AZ
        }
        setupOnce() {
            var t = Ur().getClient();
            !t || tS((r, n) => {
                var s = Ur().getIntegration(Ks);
                return s ? NZ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Ks.__initStatic();

    function NZ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !wi(s.originalException, Error)) return n;
        var o = lS(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function lS(e, t, r, n, s = []) {
        if (!wi(r[n], Error) || s.length + 1 >= t) return s;
        var o = nS(e, r[n]);
        return lS(e, t, r[n], n, [o, ...s])
    }
    var Gi = Jt();
    class Hs {
        constructor() {
            Hs.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Hs.id
        }
        setupOnce() {
            tS(t => {
                if (Ur().getIntegration(Hs)) {
                    if (!Gi.navigator && !Gi.location && !Gi.document) return t;
                    var r = t.request && t.request.url || Gi.location && Gi.location.href;
                    const {
                        referrer: o
                    } = Gi.document || {}, {
                        userAgent: c
                    } = Gi.navigator || {};
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
    Hs.__initStatic();
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
                        if (RZ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function RZ(e, t) {
        return t ? !!(LZ(e, t) || kZ(e, t)) : !1
    }

    function LZ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !fS(e, t) || !uS(e, t))
    }

    function kZ(e, t) {
        var r = yb(t),
            n = yb(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !fS(e, t) || !uS(e, t))
    }

    function uS(e, t) {
        let r = _b(e),
            n = _b(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let c = 0; c < n.length; c++) {
            var s = n[c],
                o = r[c];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function fS(e, t) {
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

    function yb(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function _b(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Ws, new no, new so, new io, new di, new Ks, new Vs, new Hs;

    function PZ(e = {}, t = Ur()) {
        var r = Jt();
        if (!r.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: n,
            scope: s
        } = t.getStackTop();
        var o = e.dsn || n && n.getDsn();
        if (!o) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (e.user = {
            ...s.getUser(),
            ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        var c = r.document.createElement("script");
        c.async = !0, c.src = ZJ(o, e), e.onLoad && (c.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(c) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const xZ = Je({
            setup() {
                return {
                    fatalError: es(mo.fatal.error)
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
                    PZ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        yo = e => (hl("data-v-a7272d53"), e = e(), pl(), e),
        DZ = {
            class: "jbg fatal"
        },
        MZ = {
            class: "constrain"
        },
        UZ = yo(() => z("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        FZ = {
            class: "content"
        },
        BZ = yo(() => z("h1", null, "You have encountered an error", -1)),
        jZ = yo(() => z("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        GZ = yo(() => z("ul", null, [z("li", null, "Refresh the page"), z("li", null, "Turn off adblockers or other browser extensions."), z("li", null, "Check your connection to the Internet."), z("li", null, "Make sure you're using an up-to-date browser."), z("li", null, "If that doesn't work, let us know.")], -1)),
        WZ = yo(() => z("hr", null, null, -1)),
        KZ = {
            class: "error"
        };

    function HZ(e, t, r, n, s, o) {
        return F(), V("div", DZ, [z("div", MZ, [UZ, z("div", FZ, [BZ, jZ, GZ, z("button", {
            onClick: t[0] || (t[0] = (...c) => e.onFeedbackClick && e.onFeedbackClick(...c))
        }, "Tell us what happened"), WZ, z("pre", KZ, De(e.message), 1)])])])
    }
    const VZ = He(xZ, [
            ["render", HZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Oc = jn({
            hasCrashed: !1
        }),
        qZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(mo.fatal.error, Dr(() => Oc));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof fi.EcastEntityNotFound || r instanceof fi.EcastFilterError || r instanceof fi.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Oc.hasCrashed = !0, Oc.event = r, Oc.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", VZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var YZ = F1,
        zZ = B1;

    function XZ(e, t) {
        t = YZ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[zZ(t[r++])];
        return r && r == n ? e : void 0
    }
    var JZ = XZ,
        ZZ = JZ;

    function QZ(e, t, r) {
        var n = e == null ? void 0 : ZZ(e, t);
        return n === void 0 ? r : n
    }
    var eQ = QZ,
        tQ = Math.floor,
        rQ = Math.random;

    function nQ(e, t) {
        return e + tQ(rQ() * (t - e + 1))
    }
    var iQ = nQ,
        sQ = iQ;

    function aQ(e) {
        var t = e.length;
        return t ? e[sQ(0, t - 1)] : void 0
    }
    var dS = aQ,
        oQ = M1;

    function cQ(e, t) {
        return oQ(t, function(r) {
            return e[r]
        })
    }
    var lQ = cQ,
        uQ = lQ,
        fQ = Kl;

    function dQ(e) {
        return e == null ? [] : uQ(e, fQ(e))
    }
    var hQ = dQ,
        pQ = dS,
        gQ = hQ;

    function mQ(e) {
        return pQ(gQ(e))
    }
    var vQ = mQ,
        yQ = dS,
        _Q = vQ,
        bQ = _i;

    function EQ(e) {
        var t = bQ(e) ? yQ : _Q;
        return t(e)
    }
    var TQ = EQ;

    function bb(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = eQ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), TQ(s)
    }
    const SQ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = bb(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return bb(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        wQ = Je({
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
        OQ = "main/pp8/survey-bomb/assets/928ef0da.png",
        IQ = "main/pp8/survey-bomb/assets/0bb76a2d.png",
        CQ = "main/pp8/survey-bomb/assets/ed4469b3.png",
        $Q = {
            key: 0,
            class: "image",
            src: OQ,
            alt: "Kicked"
        },
        AQ = {
            key: 1,
            class: "image",
            src: IQ,
            alt: "Thank You"
        },
        NQ = {
            key: 2,
            class: "image",
            src: CQ,
            alt: "Error"
        },
        RQ = {
            class: "text"
        },
        LQ = {
            key: 3,
            class: "subtext"
        },
        kQ = {
            class: "actions"
        };

    function PQ(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), V("div", {
            class: Fe(["error-model", e.classes])
        }, [e.image === "tear" ? (F(), V("img", $Q)) : e.image === "moon" ? (F(), V("img", AQ)) : (F(), V("img", NQ)), qe(z("h3", RQ, null, 512), [
            [c, e.text]
        ]), e.subtext ? qe((F(), V("h3", LQ, null, 512)), [
            [c, e.subtext]
        ]) : Oe("", !0), z("div", kQ, [qe(z("button", {
            onClick: t[0] || (t[0] = Cr(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [c, e.dismissText]
        ])])], 2)
    }
    const xQ = He(wQ, [
            ["render", PQ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        DQ = Je({
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
        MQ = {
            class: "text"
        },
        UQ = {
            key: 0,
            class: "subtext"
        },
        FQ = {
            class: "actions"
        },
        BQ = ["onClick"];

    function jQ(e, t, r, n, s, o) {
        const c = Kt("bb");
        return F(), V("div", {
            class: Fe(["options-modal", e.classes])
        }, [qe(z("h3", MQ, null, 512), [
            [c, e.text]
        ]), e.subtext ? qe((F(), V("h3", UQ, null, 512)), [
            [c, e.subtext]
        ]) : Oe("", !0), z("div", FQ, [(F(!0), V(ze, null, Qr(e.options, (u, f) => qe((F(), V("button", {
            key: f,
            class: Fe(u.classes),
            onClick: Cr(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, BQ)), [
            [c, u.text]
        ])), 128))])], 2)
    }
    const GQ = He(DQ, [
            ["render", jQ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        WQ = Je({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = xQ : e === "Options" ? this.content = GQ : this.content = e, new Promise(n => {
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

    function KQ(e, t, r, n, s, o) {
        return F(), Nt(Sl, {
            name: "modal-transition"
        }, {
            default: Sh(() => [e.props ? (F(), V("div", {
                key: 0,
                class: Fe(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = ZE((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["esc"])),
                onClick: t[1] || (t[1] = Cr((...c) => e.onBackgroundClick && e.onBackgroundClick(...c), ["self"]))
            }, [e.content ? (F(), Nt(Ih(e.content), El({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : Oe("", !0)], 34)) : Oe("", !0)]),
            _: 1
        })
    }
    const HQ = He(WQ, [
            ["render", KQ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        VQ = {
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
                e.component("Modal", HQ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        qQ = Je({
            setup() {
                return {
                    announcment: es(mo.textDescriptions.announcement)
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
        YQ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function zQ(e, t, r, n, s, o) {
        return F(), V("div", YQ, [(F(!0), V(ze, null, Qr(e.lines, c => (F(), V("p", {
            key: c.id
        }, De(c.text), 1))), 128))])
    }
    const XQ = He(qQ, [
            ["render", zQ]
        ]),
        Eb = un(""),
        JQ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(mo.textDescriptions.announcement, Dr(() => Eb.value));
                const t = r => {
                    Eb.value = r
                };
                e.component("TextDescriptions", XQ), e.config.globalProperties.$announce = t
            }
        },
        ZQ = {
            install: e => {
                let t = "",
                    r = "";
                const n = o => o instanceof Function ? o() : o,
                    s = o => {
                        const c = document.querySelector('meta[name="theme-color"]');
                        !c || (document.body && (document.body.style.background = o), c.setAttribute("content", o), r = o)
                    };
                e.config.globalProperties.$setThemeColor = function(c) {
                    this.$options.themeColor = c, s(c)
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
        QQ = {
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
        eee = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Oi = e => eee ? Symbol(e) : e,
        tee = (e, t, r) => ree({
            l: e,
            k: t,
            s: r
        }),
        ree = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Gt = e => typeof e == "number" && isFinite(e),
        nee = e => kp(e) === "[object Date]",
        vi = e => kp(e) === "[object RegExp]",
        zl = e => Be(e) && Object.keys(e).length === 0;

    function iee(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const rr = Object.assign;

    function Tb(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const see = Object.prototype.hasOwnProperty;

    function Lp(e, t) {
        return see.call(e, t)
    }
    const Et = Array.isArray,
        xt = e => typeof e == "function",
        ye = e => typeof e == "string",
        et = e => typeof e == "boolean",
        Tt = e => e !== null && typeof e == "object",
        hS = Object.prototype.toString,
        kp = e => hS.call(e),
        Be = e => kp(e) === "[object Object]",
        aee = e => e == null ? "" : Et(e) || Be(e) && e.toString === hS ? JSON.stringify(e, null, 2) : String(e);
    /*!
     * message-compiler v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const it = {
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

    function Xl(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, c = e, u = new SyntaxError(String(c));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function oee(e) {
        throw e
    }

    function cee(e, t, r) {
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
        lee = "\r",
        vr = `
`,
        uee = String.fromCharCode(8232),
        fee = String.fromCharCode(8233);

    function dee(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const c = oe => t[oe] === lee && t[oe + 1] === vr,
            u = oe => t[oe] === vr,
            f = oe => t[oe] === fee,
            h = oe => t[oe] === uee,
            m = oe => c(oe) || u(oe) || f(oe) || h(oe),
            y = () => r,
            E = () => n,
            I = () => s,
            k = () => o,
            M = oe => c(oe) || f(oe) || h(oe) ? vr : t[oe],
            j = () => M(r),
            C = () => M(r + o);

        function H() {
            return o = 0, m(r) && (n++, s = 0), c(r) && r++, r++, s++, t[r]
        }

        function X() {
            return c(r + o) && o++, o++, t[r + o]
        }

        function W() {
            r = 0, n = 1, s = 1, o = 0
        }

        function G(oe = 0) {
            o = oe
        }

        function Z() {
            const oe = r + o;
            for (; oe !== r;) H();
            o = 0
        }
        return {
            index: y,
            line: E,
            column: I,
            peekOffset: k,
            charAt: M,
            currentChar: j,
            currentPeek: C,
            next: H,
            peek: X,
            reset: W,
            resetPeek: G,
            skipToPeek: Z
        }
    }
    const ni = void 0,
        Sb = "'",
        hee = "tokenizer";

    function pee(e, t = {}) {
        const r = t.location !== !1,
            n = dee(e),
            s = () => n.index(),
            o = () => cee(n.line(), n.column(), n.index()),
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
                onError: m
            } = t;

        function y(g, p, w, ...D) {
            const B = h();
            if (p.column += w, p.offset += w, m) {
                const Y = th(B.startLoc, p),
                    le = Xl(g, Y, {
                        domain: hee,
                        args: D
                    });
                m(le)
            }
        }

        function E(g, p, w) {
            g.endLoc = o(), g.currentType = p;
            const D = {
                type: p
            };
            return r && (D.loc = th(g.startLoc, g.endLoc)), w != null && (D.value = w), D
        }
        const I = g => E(g, 14);

        function k(g, p) {
            return g.currentChar() === p ? (g.next(), p) : (y(it.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(g) {
            let p = "";
            for (; g.currentPeek() === Dn || g.currentPeek() === vr;) p += g.currentPeek(), g.peek();
            return p
        }

        function j(g) {
            const p = M(g);
            return g.skipToPeek(), p
        }

        function C(g) {
            if (g === ni) return !1;
            const p = g.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function H(g) {
            if (g === ni) return !1;
            const p = g.charCodeAt(0);
            return p >= 48 && p <= 57
        }

        function X(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 2) return !1;
            M(g);
            const D = C(g.currentPeek());
            return g.resetPeek(), D
        }

        function W(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 2) return !1;
            M(g);
            const D = g.currentPeek() === "-" ? g.peek() : g.currentPeek(),
                B = H(D);
            return g.resetPeek(), B
        }

        function G(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 2) return !1;
            M(g);
            const D = g.currentPeek() === Sb;
            return g.resetPeek(), D
        }

        function Z(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 8) return !1;
            M(g);
            const D = g.currentPeek() === ".";
            return g.resetPeek(), D
        }

        function oe(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 9) return !1;
            M(g);
            const D = C(g.currentPeek());
            return g.resetPeek(), D
        }

        function ce(g, p) {
            const {
                currentType: w
            } = p;
            if (!(w === 8 || w === 12)) return !1;
            M(g);
            const D = g.currentPeek() === ":";
            return g.resetPeek(), D
        }

        function ue(g, p) {
            const {
                currentType: w
            } = p;
            if (w !== 10) return !1;
            const D = () => {
                    const Y = g.currentPeek();
                    return Y === "{" ? C(g.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === Dn || !Y ? !1 : Y === vr ? (g.peek(), D()) : C(Y)
                },
                B = D();
            return g.resetPeek(), B
        }

        function $e(g) {
            M(g);
            const p = g.currentPeek() === "|";
            return g.resetPeek(), p
        }

        function Ce(g) {
            const p = M(g),
                w = g.currentPeek() === "%" && g.peek() === "{";
            return g.resetPeek(), {
                isModulo: w,
                hasSpace: p.length > 0
            }
        }

        function fe(g, p = !0) {
            const w = (B = !1, Y = "", le = !1) => {
                    const se = g.currentPeek();
                    return se === "{" ? Y === "%" ? !1 : B : se === "@" || !se ? Y === "%" ? !0 : B : se === "%" ? (g.peek(), w(B, "%", !0)) : se === "|" ? Y === "%" || le ? !0 : !(Y === Dn || Y === vr) : se === Dn ? (g.peek(), w(!0, Dn, le)) : se === vr ? (g.peek(), w(!0, vr, le)) : !0
                },
                D = w();
            return p && g.resetPeek(), D
        }

        function Ie(g, p) {
            const w = g.currentChar();
            return w === ni ? ni : p(w) ? (g.next(), w) : null
        }

        function U(g) {
            return Ie(g, w => {
                const D = w.charCodeAt(0);
                return D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57 || D === 95 || D === 36
            })
        }

        function ie(g) {
            return Ie(g, w => {
                const D = w.charCodeAt(0);
                return D >= 48 && D <= 57
            })
        }

        function de(g) {
            return Ie(g, w => {
                const D = w.charCodeAt(0);
                return D >= 48 && D <= 57 || D >= 65 && D <= 70 || D >= 97 && D <= 102
            })
        }

        function be(g) {
            let p = "",
                w = "";
            for (; p = ie(g);) w += p;
            return w
        }

        function ve(g) {
            j(g);
            const p = g.currentChar();
            return p !== "%" && y(it.EXPECTED_TOKEN, o(), 0, p), g.next(), "%"
        }

        function Se(g) {
            let p = "";
            for (;;) {
                const w = g.currentChar();
                if (w === "{" || w === "}" || w === "@" || w === "|" || !w) break;
                if (w === "%")
                    if (fe(g)) p += w, g.next();
                    else break;
                else if (w === Dn || w === vr)
                    if (fe(g)) p += w, g.next();
                    else {
                        if ($e(g)) break;
                        p += w, g.next()
                    }
                else p += w, g.next()
            }
            return p
        }

        function Me(g) {
            j(g);
            let p = "",
                w = "";
            for (; p = U(g);) w += p;
            return g.currentChar() === ni && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), w
        }

        function Ge(g) {
            j(g);
            let p = "";
            return g.currentChar() === "-" ? (g.next(), p += `-${be(g)}`) : p += be(g), g.currentChar() === ni && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function nt(g) {
            j(g), k(g, "'");
            let p = "",
                w = "";
            const D = Y => Y !== Sb && Y !== vr;
            for (; p = Ie(g, D);) p === "\\" ? w += Rt(g) : w += p;
            const B = g.currentChar();
            return B === vr || B === ni ? (y(it.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), B === vr && (g.next(), k(g, "'")), w) : (k(g, "'"), w)
        }

        function Rt(g) {
            const p = g.currentChar();
            switch (p) {
                case "\\":
                case "'":
                    return g.next(), `\\${p}`;
                case "u":
                    return Ar(g, p, 4);
                case "U":
                    return Ar(g, p, 6);
                default:
                    return y(it.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Ar(g, p, w) {
            k(g, p);
            let D = "";
            for (let B = 0; B < w; B++) {
                const Y = de(g);
                if (!Y) {
                    y(it.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${D}${g.currentChar()}`);
                    break
                }
                D += Y
            }
            return `\\${p}${D}`
        }

        function ir(g) {
            j(g);
            let p = "",
                w = "";
            const D = B => B !== "{" && B !== "}" && B !== Dn && B !== vr;
            for (; p = Ie(g, D);) w += p;
            return w
        }

        function _r(g) {
            let p = "",
                w = "";
            for (; p = U(g);) w += p;
            return w
        }

        function ct(g) {
            const p = (w = !1, D) => {
                const B = g.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Dn ? D : B === vr ? (D += B, g.next(), p(w, D)) : (D += B, g.next(), p(!0, D))
            };
            return p(!1, "")
        }

        function Ot(g) {
            j(g);
            const p = k(g, "|");
            return j(g), p
        }

        function lt(g, p) {
            let w = null;
            switch (g.currentChar()) {
                case "{":
                    return p.braceNest >= 1 && y(it.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), g.next(), w = E(p, 2, "{"), j(g), p.braceNest++, w;
                case "}":
                    return p.braceNest > 0 && p.currentType === 2 && y(it.EMPTY_PLACEHOLDER, o(), 0), g.next(), w = E(p, 3, "}"), p.braceNest--, p.braceNest > 0 && j(g), p.inLinked && p.braceNest === 0 && (p.inLinked = !1), w;
                case "@":
                    return p.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), w = Mt(g, p) || I(p), p.braceNest = 0, w;
                default:
                    let B = !0,
                        Y = !0,
                        le = !0;
                    if ($e(g)) return p.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), w = E(p, 1, Ot(g)), p.braceNest = 0, p.inLinked = !1, w;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return y(it.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, qt(g, p);
                    if (B = X(g, p)) return w = E(p, 5, Me(g)), j(g), w;
                    if (Y = W(g, p)) return w = E(p, 6, Ge(g)), j(g), w;
                    if (le = G(g, p)) return w = E(p, 7, nt(g)), j(g), w;
                    if (!B && !Y && !le) return w = E(p, 13, ir(g)), y(it.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, w.value), j(g), w;
                    break
            }
            return w
        }

        function Mt(g, p) {
            const {
                currentType: w
            } = p;
            let D = null;
            const B = g.currentChar();
            switch ((w === 8 || w === 9 || w === 12 || w === 10) && (B === vr || B === Dn) && y(it.INVALID_LINKED_FORMAT, o(), 0), B) {
                case "@":
                    return g.next(), D = E(p, 8, "@"), p.inLinked = !0, D;
                case ".":
                    return j(g), g.next(), E(p, 9, ".");
                case ":":
                    return j(g), g.next(), E(p, 10, ":");
                default:
                    return $e(g) ? (D = E(p, 1, Ot(g)), p.braceNest = 0, p.inLinked = !1, D) : Z(g, p) || ce(g, p) ? (j(g), Mt(g, p)) : oe(g, p) ? (j(g), E(p, 12, _r(g))) : ue(g, p) ? (j(g), B === "{" ? lt(g, p) || D : E(p, 11, ct(g))) : (w === 8 && y(it.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, qt(g, p))
            }
        }

        function qt(g, p) {
            let w = {
                type: 14
            };
            if (p.braceNest > 0) return lt(g, p) || I(p);
            if (p.inLinked) return Mt(g, p) || I(p);
            switch (g.currentChar()) {
                case "{":
                    return lt(g, p) || I(p);
                case "}":
                    return y(it.UNBALANCED_CLOSING_BRACE, o(), 0), g.next(), E(p, 3, "}");
                case "@":
                    return Mt(g, p) || I(p);
                default:
                    if ($e(g)) return w = E(p, 1, Ot(g)), p.braceNest = 0, p.inLinked = !1, w;
                    const {
                        isModulo: B, hasSpace: Y
                    } = Ce(g);
                    if (B) return Y ? E(p, 0, Se(g)) : E(p, 4, ve(g));
                    if (fe(g)) return E(p, 0, Se(g));
                    break
            }
            return w
        }

        function Ut() {
            const {
                currentType: g,
                offset: p,
                startLoc: w,
                endLoc: D
            } = f;
            return f.lastType = g, f.lastOffset = p, f.lastStartLoc = w, f.lastEndLoc = D, f.offset = s(), f.startLoc = o(), n.currentChar() === ni ? E(f, 14) : qt(n, f)
        }
        return {
            nextToken: Ut,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const gee = "parser",
        mee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function vee(e, t, r) {
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

    function yee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, H, X, W, ...G) {
            const Z = C.currentPosition();
            if (Z.offset += W, Z.column += W, r) {
                const oe = th(X, Z),
                    ce = Xl(H, oe, {
                        domain: gee,
                        args: G
                    });
                r(ce)
            }
        }

        function s(C, H, X) {
            const W = {
                type: C,
                start: H,
                end: H
            };
            return t && (W.loc = {
                start: X,
                end: X
            }), W
        }

        function o(C, H, X, W) {
            C.end = H, W && (C.type = W), t && C.loc && (C.loc.end = X)
        }

        function c(C, H) {
            const X = C.context(),
                W = s(3, X.offset, X.startLoc);
            return W.value = H, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function u(C, H) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(5, W, G);
            return Z.index = parseInt(H, 10), C.nextToken(), o(Z, C.currentOffset(), C.currentPosition()), Z
        }

        function f(C, H) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(4, W, G);
            return Z.key = H, C.nextToken(), o(Z, C.currentOffset(), C.currentPosition()), Z
        }

        function h(C, H) {
            const X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(9, W, G);
            return Z.value = H.replace(mee, vee), C.nextToken(), o(Z, C.currentOffset(), C.currentPosition()), Z
        }

        function m(C) {
            const H = C.nextToken(),
                X = C.context(),
                {
                    lastOffset: W,
                    lastStartLoc: G
                } = X,
                Z = s(8, W, G);
            return H.type !== 12 ? (n(C, it.UNEXPECTED_EMPTY_LINKED_MODIFIER, X.lastStartLoc, 0), Z.value = "", o(Z, W, G), {
                nextConsumeToken: H,
                node: Z
            }) : (H.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, bn(H)), Z.value = H.value || "", o(Z, C.currentOffset(), C.currentPosition()), {
                node: Z
            })
        }

        function y(C, H) {
            const X = C.context(),
                W = s(7, X.offset, X.startLoc);
            return W.value = H, o(W, C.currentOffset(), C.currentPosition()), W
        }

        function E(C) {
            const H = C.context(),
                X = s(6, H.offset, H.startLoc);
            let W = C.nextToken();
            if (W.type === 9) {
                const G = m(C);
                X.modifier = G.node, W = G.nextConsumeToken || C.nextToken()
            }
            switch (W.type !== 10 && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), W = C.nextToken(), W.type === 2 && (W = C.nextToken()), W.type) {
                case 11:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = y(C, W.value || "");
                    break;
                case 5:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = f(C, W.value || "");
                    break;
                case 6:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = u(C, W.value || "");
                    break;
                case 7:
                    W.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(W)), X.key = h(C, W.value || "");
                    break;
                default:
                    n(C, it.UNEXPECTED_EMPTY_LINKED_KEY, H.lastStartLoc, 0);
                    const G = C.context(),
                        Z = s(7, G.offset, G.startLoc);
                    return Z.value = "", o(Z, G.offset, G.startLoc), X.key = Z, o(X, G.offset, G.startLoc), {
                        nextConsumeToken: W,
                        node: X
                    }
            }
            return o(X, C.currentOffset(), C.currentPosition()), {
                node: X
            }
        }

        function I(C) {
            const H = C.context(),
                X = H.currentType === 1 ? C.currentOffset() : H.offset,
                W = H.currentType === 1 ? H.endLoc : H.startLoc,
                G = s(2, X, W);
            G.items = [];
            let Z = null;
            do {
                const ue = Z || C.nextToken();
                switch (Z = null, ue.type) {
                    case 0:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(c(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(u(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), G.items.push(h(C, ue.value || ""));
                        break;
                    case 8:
                        const $e = E(C);
                        G.items.push($e.node), Z = $e.nextConsumeToken || null;
                        break
                }
            } while (H.currentType !== 14 && H.currentType !== 1);
            const oe = H.currentType === 1 ? H.lastOffset : C.currentOffset(),
                ce = H.currentType === 1 ? H.lastEndLoc : C.currentPosition();
            return o(G, oe, ce), G
        }

        function k(C, H, X, W) {
            const G = C.context();
            let Z = W.items.length === 0;
            const oe = s(1, H, X);
            oe.cases = [], oe.cases.push(W);
            do {
                const ce = I(C);
                Z || (Z = ce.items.length === 0), oe.cases.push(ce)
            } while (G.currentType !== 14);
            return Z && n(C, it.MUST_HAVE_MESSAGES_IN_PLURAL, X, 0), o(oe, C.currentOffset(), C.currentPosition()), oe
        }

        function M(C) {
            const H = C.context(),
                {
                    offset: X,
                    startLoc: W
                } = H,
                G = I(C);
            return H.currentType === 14 ? G : k(C, X, W, G)
        }

        function j(C) {
            const H = pee(C, rr({}, e)),
                X = H.context(),
                W = s(0, X.offset, X.startLoc);
            return t && W.loc && (W.loc.source = C), W.body = M(H), X.currentType !== 14 && n(H, it.UNEXPECTED_LEXICAL_ANALYSIS, X.lastStartLoc, 0, C[X.offset] || ""), o(W, H.currentOffset(), H.currentPosition()), W
        }
        return {
            parse: j
        }
    }

    function bn(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function _ee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function wb(e, t) {
        for (let r = 0; r < e.length; r++) Pp(e[r], t)
    }

    function Pp(e, t) {
        switch (e.type) {
            case 1:
                wb(e.cases, t), t.helper("plural");
                break;
            case 2:
                wb(e.items, t);
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

    function bee(e, t = {}) {
        const r = _ee(e);
        r.helper("normalize"), e.body && Pp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function Eee(e, t) {
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

        function f(M, j) {
            c.code += M
        }

        function h(M, j = !0) {
            const C = j ? s : "";
            f(o ? C + "  ".repeat(M) : C)
        }

        function m(M = !0) {
            const j = ++c.indentLevel;
            M && h(j)
        }

        function y(M = !0) {
            const j = --c.indentLevel;
            M && h(j)
        }

        function E() {
            h(c.indentLevel)
        }
        return {
            context: u,
            push: f,
            indent: m,
            deindent: y,
            newline: E,
            helper: M => `_${M}`,
            needIndent: () => c.needIndent
        }
    }

    function Tee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ea(e, t.key), t.modifier ? (e.push(", "), ea(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function See(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (ea(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function wee(e, t) {
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

    function Oee(e, t) {
        t.body ? ea(e, t.body) : e.push("null")
    }

    function ea(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                Oee(e, t);
                break;
            case 1:
                wee(e, t);
                break;
            case 2:
                See(e, t);
                break;
            case 6:
                Tee(e, t);
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
    const Iee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            c = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = Eee(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: c
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(c), u.length > 0 && (f.push(`const { ${u.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ea(f, e), f.deindent(c), f.push("}");
        const {
            code: h,
            map: m
        } = f.context();
        return {
            ast: e,
            code: h,
            map: m ? m.toJSON() : void 0
        }
    };

    function Cee(e, t = {}) {
        const r = rr({}, t),
            s = yee(r).parse(e);
        return bee(s, r), Iee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const $ee = {
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
    const Aee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function Nee(e) {
        return Aee.test(e)
    }

    function Ree(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function Lee(e) {
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

    function kee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Nee(t) ? Ree(t) : "*" + t
    }

    function Pee(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            o, c, u, f, h, m, y;
        const E = [];
        E[0] = () => {
            c === void 0 ? c = u : c += u
        }, E[1] = () => {
            c !== void 0 && (t.push(c), c = void 0)
        }, E[2] = () => {
            E[0](), s++
        }, E[3] = () => {
            if (s > 0) s--, n = 4, E[0]();
            else {
                if (s = 0, c === void 0 || (c = kee(c), c === !1)) return !1;
                E[1]()
            }
        };

        function I() {
            const k = e[r + 1];
            if (n === 5 && k === "'" || n === 6 && k === '"') return r++, u = "\\" + k, E[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && I())) {
                if (f = Lee(o), y = Ii[n], h = y[f] || y.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (m = E[h[1]], m && (u = o, m() === !1)))) return;
                if (n === 7) return t
            }
    }
    const Ob = new Map;

    function xee(e, t) {
        return Tt(e) ? e[t] : null
    }

    function Dee(e, t) {
        if (!Tt(e)) return null;
        let r = Ob.get(t);
        if (r || (r = Pee(t), r && Ob.set(t, r)), !r) return null;
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
    const Mee = e => e,
        Uee = e => "",
        Fee = "text",
        Bee = e => e.length === 0 ? "" : e.join(""),
        jee = aee;

    function Ib(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function Gee(e) {
        const t = Gt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Gt(e.named.count) || Gt(e.named.n)) ? Gt(e.named.count) ? e.named.count : Gt(e.named.n) ? e.named.n : t : t
    }

    function Wee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Kee(e = {}) {
        const t = e.locale,
            r = Gee(e),
            n = Tt(e.pluralRules) && ye(t) && xt(e.pluralRules[t]) ? e.pluralRules[t] : Ib,
            s = Tt(e.pluralRules) && ye(t) && xt(e.pluralRules[t]) ? Ib : void 0,
            o = C => C[n(r, C.length, s)],
            c = e.list || [],
            u = C => c[C],
            f = e.named || {};
        Gt(e.pluralIndex) && Wee(r, f);
        const h = C => f[C];

        function m(C) {
            const H = xt(e.messages) ? e.messages(C) : Tt(e.messages) ? e.messages[C] : !1;
            return H || (e.parent ? e.parent.message(C) : Uee)
        }
        const y = C => e.modifiers ? e.modifiers[C] : Mee,
            E = Be(e.processor) && xt(e.processor.normalize) ? e.processor.normalize : Bee,
            I = Be(e.processor) && xt(e.processor.interpolate) ? e.processor.interpolate : jee,
            k = Be(e.processor) && ye(e.processor.type) ? e.processor.type : Fee,
            j = {
                list: u,
                named: h,
                plural: o,
                linked: (C, ...H) => {
                    const [X, W] = H;
                    let G = "text",
                        Z = "";
                    H.length === 1 ? Tt(X) ? (Z = X.modifier || Z, G = X.type || G) : ye(X) && (Z = X || Z) : H.length === 2 && (ye(X) && (Z = X || Z), ye(W) && (G = W || G));
                    let oe = m(C)(j);
                    return G === "vnode" && Et(oe) && Z && (oe = oe[0]), Z ? y(Z)(oe, G) : oe
                },
                message: m,
                type: k,
                interpolate: I,
                normalize: E
            };
        return j
    }
    let Hee = null;
    $ee.FunctionTranslate;

    function Vee(e) {
        return t => Hee
    }
    const qee = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Yee(e, t, r) {
        return [...new Set([r, ...Et(t) ? t : Tt(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function pS(e, t, r) {
        const n = ye(r) ? r : _o,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let c = [r];
            for (; Et(c);) c = Cb(o, c, t);
            const u = Et(t) || !Be(t) ? t : t.default ? t.default : null;
            c = ye(u) ? [u] : u, Et(c) && Cb(o, c, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function Cb(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && et(n); s++) {
            const o = t[s];
            ye(o) && (n = zee(e, t[s], r))
        }
        return n
    }

    function zee(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = Xee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Xee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (Et(r) || Be(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const Jee = "9.2.2",
        Jl = -1,
        _o = "en-US",
        $b = "",
        Ab = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Zee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && Tt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && Tt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? Ab(e) : t === "vnode" && Tt(e) && "__v_isVNode" in e ? Ab(e.children) : e
        }
    }
    let gS;

    function Qee(e) {
        gS = e
    }
    let mS;

    function ete(e) {
        mS = e
    }
    let vS;

    function tte(e) {
        vS = e
    }
    let Nb = 0;

    function rte(e = {}) {
        const t = ye(e.version) ? e.version : Jee,
            r = ye(e.locale) ? e.locale : _o,
            n = Et(e.fallbackLocale) || Be(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Be(e.messages) ? e.messages : {
                [r]: {}
            },
            o = Be(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            c = Be(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = rr({}, e.modifiers || {}, Zee()),
            f = e.pluralRules || {},
            h = xt(e.missing) ? e.missing : null,
            m = et(e.missingWarn) || vi(e.missingWarn) ? e.missingWarn : !0,
            y = et(e.fallbackWarn) || vi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = !!e.fallbackFormat,
            I = !!e.unresolving,
            k = xt(e.postTranslation) ? e.postTranslation : null,
            M = Be(e.processor) ? e.processor : null,
            j = et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            H = xt(e.messageCompiler) ? e.messageCompiler : gS,
            X = xt(e.messageResolver) ? e.messageResolver : mS || xee,
            W = xt(e.localeFallbacker) ? e.localeFallbacker : vS || Yee,
            G = Tt(e.fallbackContext) ? e.fallbackContext : void 0,
            Z = xt(e.onWarn) ? e.onWarn : iee,
            oe = e,
            ce = Tt(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = Tt(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            $e = Tt(oe.__meta) ? oe.__meta : {};
        Nb++;
        const Ce = {
            version: t,
            cid: Nb,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: u,
            pluralRules: f,
            missing: h,
            missingWarn: m,
            fallbackWarn: y,
            fallbackFormat: E,
            unresolving: I,
            postTranslation: k,
            processor: M,
            warnHtmlMessage: j,
            escapeParameter: C,
            messageCompiler: H,
            messageResolver: X,
            localeFallbacker: W,
            fallbackContext: G,
            onWarn: Z,
            __meta: $e
        };
        return Ce.datetimeFormats = o, Ce.numberFormats = c, Ce.__datetimeFormatters = ce, Ce.__numberFormatters = ue, Ce
    }

    function xp(e, t, r, n, s) {
        const {
            missing: o,
            onWarn: c
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
    const nte = e => e;
    let Rb = Object.create(null);

    function ite(e, t = {}) {
        {
            const n = (t.onCacheKey || nte)(e),
                s = Rb[n];
            if (s) return s;
            let o = !1;
            const c = t.onError || oee;
            t.onError = h => {
                o = !0, c(h)
            };
            const {
                code: u
            } = Cee(e, t), f = new Function(`return ${u}`)();
            return o ? f : Rb[n] = f
        }
    }
    let yS = it.__EXTEND_POINT__;
    const nd = () => ++yS,
        ks = {
            INVALID_ARGUMENT: yS,
            INVALID_DATE_ARGUMENT: nd(),
            INVALID_ISO_DATE_ARGUMENT: nd(),
            __EXTEND_POINT__: nd()
        };

    function Ps(e) {
        return Xl(e, null, void 0)
    }
    const Lb = () => "",
        as = e => xt(e);

    function kb(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: c,
            messages: u
        } = e, [f, h] = rh(...t), m = et(h.missingWarn) ? h.missingWarn : e.missingWarn, y = et(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = et(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, I = !!h.resolvedMessage, k = ye(h.default) || et(h.default) ? et(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || k !== "", j = ye(h.locale) ? h.locale : e.locale;
        E && ste(h);
        let [C, H, X] = I ? [f, j, u[j] || {}] : _S(e, f, j, c, y, m), W = C, G = f;
        if (!I && !(ye(W) || as(W)) && M && (W = k, G = W), !I && (!(ye(W) || as(W)) || !ye(H))) return s ? Jl : f;
        let Z = !1;
        const oe = () => {
                Z = !0
            },
            ce = as(W) ? W : bS(e, f, H, W, G, oe);
        if (Z) return W;
        const ue = cte(e, H, X, h),
            $e = Kee(ue),
            Ce = ate(e, ce, $e);
        return n ? n(Ce, f) : Ce
    }

    function ste(e) {
        Et(e.list) ? e.list = e.list.map(t => ye(t) ? Tb(t) : t) : Tt(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = Tb(e.named[t]))
        })
    }

    function _S(e, t, r, n, s, o) {
        const {
            messages: c,
            onWarn: u,
            messageResolver: f,
            localeFallbacker: h
        } = e, m = h(e, n, r);
        let y = {},
            E, I = null;
        const k = "translate";
        for (let M = 0; M < m.length && (E = m[M], y = c[E] || {}, (I = f(y, t)) === null && (I = y[t]), !(ye(I) || xt(I))); M++) {
            const j = xp(e, t, E, o, k);
            j !== t && (I = j)
        }
        return [I, E, y]
    }

    function bS(e, t, r, n, s, o) {
        const {
            messageCompiler: c,
            warnHtmlMessage: u
        } = e;
        if (as(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (c == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = c(n, ote(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function ate(e, t, r) {
        return t(r)
    }

    function rh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Gt(t) && !as(t)) throw Ps(ks.INVALID_ARGUMENT);
        const o = Gt(t) ? String(t) : (as(t), t);
        return Gt(r) ? s.plural = r : ye(r) ? s.default = r : Be(r) && !zl(r) ? s.named = r : Et(r) && (s.list = r), Gt(n) ? s.plural = n : ye(n) ? s.default = n : Be(n) && rr(s, n), [o, s]
    }

    function ote(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: c => {
                throw o && o(c), c
            },
            onCacheKey: c => tee(t, r, c)
        }
    }

    function cte(e, t, r, n) {
        const {
            modifiers: s,
            pluralRules: o,
            messageResolver: c,
            fallbackLocale: u,
            fallbackWarn: f,
            missingWarn: h,
            fallbackContext: m
        } = e, E = {
            locale: t,
            modifiers: s,
            pluralRules: o,
            messages: I => {
                let k = c(r, I);
                if (k == null && m) {
                    const [, , M] = _S(m, I, t, u, f, h);
                    k = c(M, I)
                }
                if (ye(k)) {
                    let M = !1;
                    const C = bS(e, I, t, k, I, () => {
                        M = !0
                    });
                    return M ? Lb : C
                } else return as(k) ? k : Lb
            }
        };
        return e.processor && (E.processor = e.processor), n.list && (E.list = n.list), n.named && (E.named = n.named), Gt(n.plural) && (E.pluralIndex = n.plural), E
    }

    function Pb(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __datetimeFormatters: u
        } = e, [f, h, m, y] = nh(...t), E = et(m.missingWarn) ? m.missingWarn : e.missingWarn;
        et(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn;
        const I = !!m.part,
            k = ye(m.locale) ? m.locale : e.locale,
            M = c(e, s, k);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(k, y).format(h);
        let j = {},
            C, H = null;
        const X = "datetime format";
        for (let Z = 0; Z < M.length && (C = M[Z], j = r[C] || {}, H = j[f], !Be(H)); Z++) xp(e, f, C, E, X);
        if (!Be(H) || !ye(C)) return n ? Jl : f;
        let W = `${C}__${f}`;
        zl(y) || (W = `${W}__${JSON.stringify(y)}`);
        let G = u.get(W);
        return G || (G = new Intl.DateTimeFormat(C, rr({}, H, y)), u.set(W, G)), I ? G.formatToParts(h) : G.format(h)
    }
    const ES = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function nh(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {},
            u;
        if (ye(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Ps(ks.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw Ps(ks.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (nee(t)) {
            if (isNaN(t.getTime())) throw Ps(ks.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Gt(t)) u = t;
        else throw Ps(ks.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            ES.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (c = n), Be(s) && (c = s), [o.key || "", u, o, c]
    }

    function xb(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function Db(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: c
        } = e, {
            __numberFormatters: u
        } = e, [f, h, m, y] = ih(...t), E = et(m.missingWarn) ? m.missingWarn : e.missingWarn;
        et(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn;
        const I = !!m.part,
            k = ye(m.locale) ? m.locale : e.locale,
            M = c(e, s, k);
        if (!ye(f) || f === "") return new Intl.NumberFormat(k, y).format(h);
        let j = {},
            C, H = null;
        const X = "number format";
        for (let Z = 0; Z < M.length && (C = M[Z], j = r[C] || {}, H = j[f], !Be(H)); Z++) xp(e, f, C, E, X);
        if (!Be(H) || !ye(C)) return n ? Jl : f;
        let W = `${C}__${f}`;
        zl(y) || (W = `${W}__${JSON.stringify(y)}`);
        let G = u.get(W);
        return G || (G = new Intl.NumberFormat(C, rr({}, H, y)), u.set(W, G)), I ? G.formatToParts(h) : G.format(h)
    }
    const TS = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ih(...e) {
        const [t, r, n, s] = e, o = {};
        let c = {};
        if (!Gt(t)) throw Ps(ks.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            TS.includes(f) ? c[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (c = n), Be(s) && (c = s), [o.key || "", u, o, c]
    }

    function Mb(e, t, r) {
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
    const lte = "9.2.2";
    qee.__EXTEND_POINT__;
    let SS = it.__EXTEND_POINT__;
    const wr = () => ++SS,
        Ft = {
            UNEXPECTED_RETURN_TYPE: SS,
            INVALID_ARGUMENT: wr(),
            MUST_BE_CALL_SETUP_TOP: wr(),
            NOT_INSLALLED: wr(),
            NOT_AVAILABLE_IN_LEGACY_MODE: wr(),
            REQUIRED_VALUE: wr(),
            INVALID_VALUE: wr(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: wr(),
            NOT_INSLALLED_WITH_PROVIDE: wr(),
            UNEXPECTED_ERROR: wr(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: wr(),
            BRIDGE_SUPPORT_VUE_2_ONLY: wr(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: wr(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: wr(),
            __EXTEND_POINT__: wr()
        };

    function Ht(e, ...t) {
        return Xl(e, null, void 0)
    }
    const sh = Oi("__transrateVNode"),
        ah = Oi("__datetimeParts"),
        oh = Oi("__numberParts"),
        wS = Oi("__setPluralRules");
    Oi("__intlifyMeta");
    const OS = Oi("__injectWithOption");

    function ch(e) {
        if (!Tt(e)) return e;
        for (const t in e)
            if (!!Lp(e, t))
                if (!t.includes(".")) Tt(e[t]) && ch(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], Tt(s[r[n]]) && ch(s[r[n]])
                } return e
    }

    function Zl(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, c = Be(r) ? r : Et(n) ? {} : {
            [e]: {}
        };
        if (Et(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (c[f] = c[f] || {}, Ha(h, c[f])) : Ha(h, c)
                } else ye(u) && Ha(JSON.parse(u), c)
            }), s == null && o)
            for (const u in c) Lp(c, u) && ch(c[u]);
        return c
    }
    const Ic = e => !Tt(e) || Et(e);

    function Ha(e, t) {
        if (Ic(e) || Ic(t)) throw Ht(Ft.INVALID_VALUE);
        for (const r in e) Lp(e, r) && (Ic(e[r]) || Ic(t[r]) ? t[r] = e[r] : Ha(e[r], t[r]))
    }

    function ute(e) {
        return e.type
    }

    function IS(e, t, r) {
        let n = Tt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Zl(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(o => {
            e.mergeLocaleMessage(o, n[o])
        }); {
            if (Tt(t.datetimeFormats)) {
                const o = Object.keys(t.datetimeFormats);
                o.length && o.forEach(c => {
                    e.mergeDateTimeFormat(c, t.datetimeFormats[c])
                })
            }
            if (Tt(t.numberFormats)) {
                const o = Object.keys(t.numberFormats);
                o.length && o.forEach(c => {
                    e.mergeNumberFormat(c, t.numberFormats[c])
                })
            }
        }
    }

    function Ub(e) {
        return at(_l, null, e, 0)
    }
    let Fb = 0;

    function Bb(e) {
        return (t, r, n, s) => e(r, n, gi() || void 0, s)
    }

    function Dp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = et(e.inheritLocale) ? e.inheritLocale : !0;
        const o = un(r && s ? r.locale.value : ye(e.locale) ? e.locale : _o),
            c = un(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || Et(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = un(Zl(o.value, e)),
            f = un(Be(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = un(Be(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let m = r ? r.missingWarn : et(e.missingWarn) || vi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : et(e.fallbackWarn) || vi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = r ? r.fallbackRoot : et(e.fallbackRoot) ? e.fallbackRoot : !0,
            I = !!e.fallbackFormat,
            k = xt(e.missing) ? e.missing : null,
            M = xt(e.missing) ? Bb(e.missing) : null,
            j = xt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const X = r ? r.modifiers : Be(e.modifiers) ? e.modifiers : {};
        let W = e.pluralRules || r && r.pluralRules,
            G;
        G = (() => {
            const A = {
                version: lte,
                locale: o.value,
                fallbackLocale: c.value,
                messages: u.value,
                modifiers: X,
                pluralRules: W,
                missing: M === null ? void 0 : M,
                missingWarn: m,
                fallbackWarn: y,
                fallbackFormat: I,
                unresolving: !0,
                postTranslation: j === null ? void 0 : j,
                warnHtmlMessage: C,
                escapeParameter: H,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Be(G) ? G.__datetimeFormatters : void 0, A.__numberFormatters = Be(G) ? G.__numberFormatters : void 0, rte(A)
        })(), La(G, o.value, c.value);

        function oe() {
            return [o.value, c.value, u.value, f.value, h.value]
        }
        const ce = Dr({
                get: () => o.value,
                set: A => {
                    o.value = A, G.locale = o.value
                }
            }),
            ue = Dr({
                get: () => c.value,
                set: A => {
                    c.value = A, G.fallbackLocale = c.value, La(G, o.value, A)
                }
            }),
            $e = Dr(() => u.value),
            Ce = Dr(() => f.value),
            fe = Dr(() => h.value);

        function Ie() {
            return xt(j) ? j : null
        }

        function U(A) {
            j = A, G.postTranslation = A
        }

        function ie() {
            return k
        }

        function de(A) {
            A !== null && (M = Bb(A)), k = A, G.missing = M
        }
        const be = (A, K, he, pe, Ae, Pe) => {
            oe();
            let O;
            if (O = A(G), Gt(O) && O === Jl) {
                const [T, R] = K();
                return r && E ? pe(r) : Ae(T)
            } else {
                if (Pe(O)) return O;
                throw Ht(Ft.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(K => Reflect.apply(kb, null, [K, ...A]), () => rh(...A), "translate", K => Reflect.apply(K.t, K, [...A]), K => K, K => ye(K))
        }

        function Se(...A) {
            const [K, he, pe] = A;
            if (pe && !Tt(pe)) throw Ht(Ft.INVALID_ARGUMENT);
            return ve(K, he, rr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Me(...A) {
            return be(K => Reflect.apply(Pb, null, [K, ...A]), () => nh(...A), "datetime format", K => Reflect.apply(K.d, K, [...A]), () => $b, K => ye(K))
        }

        function Ge(...A) {
            return be(K => Reflect.apply(Db, null, [K, ...A]), () => ih(...A), "number format", K => Reflect.apply(K.n, K, [...A]), () => $b, K => ye(K))
        }

        function nt(A) {
            return A.map(K => ye(K) || Gt(K) || et(K) ? Ub(String(K)) : K)
        }
        const Ar = {
            normalize: nt,
            interpolate: A => A,
            type: "vnode"
        };

        function ir(...A) {
            return be(K => {
                let he;
                const pe = K;
                try {
                    pe.processor = Ar, he = Reflect.apply(kb, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => rh(...A), "translate", K => K[sh](...A), K => [Ub(K)], K => Et(K))
        }

        function _r(...A) {
            return be(K => Reflect.apply(Db, null, [K, ...A]), () => ih(...A), "number format", K => K[oh](...A), () => [], K => ye(K) || Et(K))
        }

        function ct(...A) {
            return be(K => Reflect.apply(Pb, null, [K, ...A]), () => nh(...A), "datetime format", K => K[ah](...A), () => [], K => ye(K) || Et(K))
        }

        function Ot(A) {
            W = A, G.pluralRules = W
        }

        function lt(A, K) {
            const he = ye(K) ? K : o.value,
                pe = Ut(he);
            return G.messageResolver(pe, A) !== null
        }

        function Mt(A) {
            let K = null;
            const he = pS(G, c.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ae = u.value[he[pe]] || {},
                    Pe = G.messageResolver(Ae, A);
                if (Pe != null) {
                    K = Pe;
                    break
                }
            }
            return K
        }

        function qt(A) {
            const K = Mt(A);
            return K != null ? K : r ? r.tm(A) || {} : {}
        }

        function Ut(A) {
            return u.value[A] || {}
        }

        function g(A, K) {
            u.value[A] = K, G.messages = u.value
        }

        function p(A, K) {
            u.value[A] = u.value[A] || {}, Ha(K, u.value[A]), G.messages = u.value
        }

        function w(A) {
            return f.value[A] || {}
        }

        function D(A, K) {
            f.value[A] = K, G.datetimeFormats = f.value, xb(G, A, K)
        }

        function B(A, K) {
            f.value[A] = rr(f.value[A] || {}, K), G.datetimeFormats = f.value, xb(G, A, K)
        }

        function Y(A) {
            return h.value[A] || {}
        }

        function le(A, K) {
            h.value[A] = K, G.numberFormats = h.value, Mb(G, A, K)
        }

        function se(A, K) {
            h.value[A] = rr(h.value[A] || {}, K), G.numberFormats = h.value, Mb(G, A, K)
        }
        Fb++, r && eh && (ts(r.locale, A => {
            s && (o.value = A, G.locale = A, La(G, o.value, c.value))
        }), ts(r.fallbackLocale, A => {
            s && (c.value = A, G.fallbackLocale = A, La(G, o.value, c.value))
        }));
        const re = {
            id: Fb,
            locale: ce,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale(A) {
                s = A, A && r && (o.value = r.locale.value, c.value = r.fallbackLocale.value, La(G, o.value, c.value))
            },
            get availableLocales() {
                return Object.keys(u.value).sort()
            },
            messages: $e,
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
                return m
            },
            set missingWarn(A) {
                m = A, G.missingWarn = m
            },
            get fallbackWarn() {
                return y
            },
            set fallbackWarn(A) {
                y = A, G.fallbackWarn = y
            },
            get fallbackRoot() {
                return E
            },
            set fallbackRoot(A) {
                E = A
            },
            get fallbackFormat() {
                return I
            },
            set fallbackFormat(A) {
                I = A, G.fallbackFormat = I
            },
            get warnHtmlMessage() {
                return C
            },
            set warnHtmlMessage(A) {
                C = A, G.warnHtmlMessage = A
            },
            get escapeParameter() {
                return H
            },
            set escapeParameter(A) {
                H = A, G.escapeParameter = A
            },
            t: ve,
            getLocaleMessage: Ut,
            setLocaleMessage: g,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Ie,
            setPostTranslationHandler: U,
            getMissingHandler: ie,
            setMissingHandler: de,
            [wS]: Ot
        };
        return re.datetimeFormats = Ce, re.numberFormats = fe, re.rt = Se, re.te = lt, re.tm = qt, re.d = Me, re.n = Ge, re.getDateTimeFormat = w, re.setDateTimeFormat = D, re.mergeDateTimeFormat = B, re.getNumberFormat = Y, re.setNumberFormat = le, re.mergeNumberFormat = se, re[OS] = e.__injectWithOption, re[sh] = ir, re[ah] = ct, re[oh] = _r, re
    }

    function fte(e) {
        const t = ye(e.locale) ? e.locale : _o,
            r = ye(e.fallbackLocale) || Et(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = xt(e.missing) ? e.missing : void 0,
            s = et(e.silentTranslationWarn) || vi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = et(e.silentFallbackWarn) || vi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            c = et(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Be(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            m = xt(e.postTranslation) ? e.postTranslation : void 0,
            y = ye(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            E = !!e.escapeParameterHtml,
            I = et(e.sync) ? e.sync : !0;
        let k = e.messages;
        if (Be(e.sharedMessages)) {
            const G = e.sharedMessages;
            k = Object.keys(G).reduce((oe, ce) => {
                const ue = oe[ce] || (oe[ce] = {});
                return rr(ue, G[ce]), oe
            }, k || {})
        }
        const {
            __i18n: M,
            __root: j,
            __injectWithOption: C
        } = e, H = e.datetimeFormats, X = e.numberFormats, W = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: k,
            flatJson: W,
            datetimeFormats: H,
            numberFormats: X,
            missing: n,
            missingWarn: s,
            fallbackWarn: o,
            fallbackRoot: c,
            fallbackFormat: u,
            modifiers: f,
            pluralRules: h,
            postTranslation: m,
            warnHtmlMessage: y,
            escapeParameter: E,
            messageResolver: e.messageResolver,
            inheritLocale: I,
            __i18n: M,
            __root: j,
            __injectWithOption: C
        }
    }

    function lh(e = {}, t) {
        {
            const r = Dp(fte(e)),
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
                        return et(r.missingWarn) ? !r.missingWarn : r.missingWarn
                    },
                    set silentTranslationWarn(s) {
                        r.missingWarn = et(s) ? !s : s
                    },
                    get silentFallbackWarn() {
                        return et(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn
                    },
                    set silentFallbackWarn(s) {
                        r.fallbackWarn = et(s) ? !s : s
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
                            m = null;
                        if (!ye(o)) throw Ht(Ft.INVALID_ARGUMENT);
                        const y = o;
                        return ye(c) ? f.locale = c : Et(c) ? h = c : Be(c) && (m = c), Et(u) ? h = u : Be(u) && (m = u), Reflect.apply(r.t, r, [y, h || m || {}, f])
                    },
                    rt(...s) {
                        return Reflect.apply(r.rt, r, [...s])
                    },
                    tc(...s) {
                        const [o, c, u] = s, f = {
                            plural: 1
                        };
                        let h = null,
                            m = null;
                        if (!ye(o)) throw Ht(Ft.INVALID_ARGUMENT);
                        const y = o;
                        return ye(c) ? f.locale = c : Gt(c) ? f.plural = c : Et(c) ? h = c : Be(c) && (m = c), ye(u) ? f.locale = u : Et(u) ? h = u : Be(u) && (m = u), Reflect.apply(r.t, r, [y, h || m || {}, f])
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
    const Mp = {
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

    function dte({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ...Et(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function CS(e) {
        return ze
    }
    const jb = {
        name: "i18n-t",
        props: rr({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Gt(e) || !isNaN(e)
            }
        }, Mp),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Up({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(y => y !== "_"),
                    c = {};
                e.locale && (c.locale = e.locale), e.plural !== void 0 && (c.plural = ye(e.plural) ? +e.plural : e.plural);
                const u = dte(t, o),
                    f = s[sh](e.keypath, u, c),
                    h = rr({}, n),
                    m = ye(e.tag) || Tt(e.tag) ? e.tag : CS();
                return Rh(m, h, f)
            }
        }
    };

    function hte(e) {
        return Et(e) && !ye(e[0])
    }

    function $S(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const c = {
                part: !0
            };
            let u = {};
            e.locale && (c.locale = e.locale), ye(e.format) ? c.key = e.format : Tt(e.format) && (ye(e.format.key) && (c.key = e.format.key), u = Object.keys(e.format).reduce((E, I) => r.includes(I) ? rr({}, E, {
                [I]: e.format[I]
            }) : E, {}));
            const f = n(e.value, c, u);
            let h = [c.key];
            Et(f) ? h = f.map((E, I) => {
                const k = s[E.type],
                    M = k ? k({
                        [E.type]: E.value,
                        index: I,
                        parts: f
                    }) : [E.value];
                return hte(M) && (M[0].key = `${E.type}-${I}`), M
            }) : ye(f) && (h = [f]);
            const m = rr({}, o),
                y = ye(e.tag) || Tt(e.tag) ? e.tag : CS();
            return Rh(y, m, h)
        }
    }
    const Gb = {
            name: "i18n-n",
            props: rr({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Mp),
            setup(e, t) {
                const r = e.i18n || Up({
                    useScope: "parent",
                    __useComponent: !0
                });
                return $S(e, t, TS, (...n) => r[oh](...n))
            }
        },
        Wb = {
            name: "i18n-d",
            props: rr({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Mp),
            setup(e, t) {
                const r = e.i18n || Up({
                    useScope: "parent",
                    __useComponent: !0
                });
                return $S(e, t, ES, (...n) => r[ah](...n))
            }
        };

    function pte(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function gte(e) {
        const t = c => {
            const {
                instance: u,
                modifiers: f,
                value: h
            } = c;
            if (!u || !u.$) throw Ht(Ft.UNEXPECTED_ERROR);
            const m = pte(e, u.$),
                y = Kb(h);
            return [Reflect.apply(m.t, m, [...Hb(y)]), m]
        };
        return {
            created: (c, u) => {
                const [f, h] = t(u);
                eh && e.global === h && (c.__i18nWatcher = ts(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), c.__composer = h, c.textContent = f
            },
            unmounted: c => {
                eh && c.__i18nWatcher && (c.__i18nWatcher(), c.__i18nWatcher = void 0, delete c.__i18nWatcher), c.__composer && (c.__composer = void 0, delete c.__composer)
            },
            beforeUpdate: (c, {
                value: u
            }) => {
                if (c.__composer) {
                    const f = c.__composer,
                        h = Kb(u);
                    c.textContent = Reflect.apply(f.t, f, [...Hb(h)])
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

    function Kb(e) {
        if (ye(e)) return {
            path: e
        };
        if (Be(e)) {
            if (!("path" in e)) throw Ht(Ft.REQUIRED_VALUE, "path");
            return e
        } else throw Ht(Ft.INVALID_VALUE)
    }

    function Hb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, c = {}, u = n || {};
        return ye(r) && (c.locale = r), Gt(s) && (c.plural = s), Gt(o) && (c.plural = o), [t, u, c]
    }

    function mte(e, t, ...r) {
        const n = Be(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (et(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : jb.name, jb), e.component(Gb.name, Gb), e.component(Wb.name, Wb)), e.directive("t", gte(t))
    }

    function vte(e, t, r) {
        return {
            beforeCreate() {
                const n = gi();
                if (!n) throw Ht(Ft.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = Vb(e, o) : (o.__injectWithOption = !0, this.$i18n = lh(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = Vb(e, s) : this.$i18n = lh({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && IS(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, c) => this.$i18n.te(o, c), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = gi();
                if (!n) throw Ht(Ft.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function Vb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[wS](t.pluralizationRules || e.pluralizationRules);
        const r = Zl(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const yte = Oi("global-vue-i18n");

    function _te(e = {}, t) {
        const r = et(e.legacy) ? e.legacy : !0,
            n = et(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [c, u] = bte(e, r),
            f = Oi("");

        function h(E) {
            return o.get(E) || null
        }

        function m(E, I) {
            o.set(E, I)
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
                async install(I, ...k) {
                    I.__VUE_I18N_SYMBOL__ = f, I.provide(I.__VUE_I18N_SYMBOL__, E), !r && n && Ate(I, E.global), mte(I, E, ...k), r && I.mixin(vte(u, u.__composer, E));
                    const M = I.unmount;
                    I.unmount = () => {
                        E.dispose(), M()
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
                __setInstance: m,
                __deleteInstance: y
            };
            return E
        }
    }

    function Up(e = {}) {
        const t = gi();
        if (t == null) throw Ht(Ft.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Ht(Ft.NOT_INSLALLED);
        const r = Ete(t),
            n = Ste(r),
            s = ute(t),
            o = Tte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Ht(Ft.NOT_AVAILABLE_IN_LEGACY_MODE);
            return Ite(t, o, n, e)
        }
        if (o === "global") return IS(n, e, s), n;
        if (o === "parent") {
            let f = wte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const c = r;
        let u = c.__getInstance(t);
        if (u == null) {
            const f = rr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Dp(f), Ote(c, t), c.__setInstance(t, u)
        }
        return u
    }

    function bte(e, t, r) {
        const n = OR(); {
            const s = t ? n.run(() => lh(e)) : n.run(() => Dp(e));
            if (s == null) throw Ht(Ft.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function Ete(e) {
        {
            const t = es(e.isCE ? yte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Ht(e.isCE ? Ft.NOT_INSLALLED_WITH_PROVIDE : Ft.UNEXPECTED_ERROR);
            return t
        }
    }

    function Tte(e, t) {
        return zl(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function Ste(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function wte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const c = e;
            if (e.mode === "composition") n = c.__getInstance(o);
            else {
                const u = c.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[OS] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function Ote(e, t, r) {
        vl(() => {}, t), yl(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function Ite(e, t, r, n = {}) {
        const s = t === "local",
            o = QR(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Ht(Ft.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const c = et(n.inheritLocale) ? n.inheritLocale : !0,
            u = un(s && c ? r.locale.value : ye(n.locale) ? n.locale : _o),
            f = un(s && c ? r.fallbackLocale.value : ye(n.fallbackLocale) || Et(n.fallbackLocale) || Be(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = un(Zl(u.value, n)),
            m = un(Be(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            y = un(Be(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            E = s ? r.missingWarn : et(n.missingWarn) || vi(n.missingWarn) ? n.missingWarn : !0,
            I = s ? r.fallbackWarn : et(n.fallbackWarn) || vi(n.fallbackWarn) ? n.fallbackWarn : !0,
            k = s ? r.fallbackRoot : et(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            j = xt(n.missing) ? n.missing : null,
            C = xt(n.postTranslation) ? n.postTranslation : null,
            H = s ? r.warnHtmlMessage : et(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            X = !!n.escapeParameter,
            W = s ? r.modifiers : Be(n.modifiers) ? n.modifiers : {},
            G = n.pluralRules || s && r.pluralRules;

        function Z() {
            return [u.value, f.value, h.value, m.value, y.value]
        }
        const oe = Dr({
                get: () => o.value ? o.value.locale.value : u.value,
                set: p => {
                    o.value && (o.value.locale.value = p), u.value = p
                }
            }),
            ce = Dr({
                get: () => o.value ? o.value.fallbackLocale.value : f.value,
                set: p => {
                    o.value && (o.value.fallbackLocale.value = p), f.value = p
                }
            }),
            ue = Dr(() => o.value ? o.value.messages.value : h.value),
            $e = Dr(() => m.value),
            Ce = Dr(() => y.value);

        function fe() {
            return o.value ? o.value.getPostTranslationHandler() : C
        }

        function Ie(p) {
            o.value && o.value.setPostTranslationHandler(p)
        }

        function U() {
            return o.value ? o.value.getMissingHandler() : j
        }

        function ie(p) {
            o.value && o.value.setMissingHandler(p)
        }

        function de(p) {
            return Z(), p()
        }

        function be(...p) {
            return o.value ? de(() => Reflect.apply(o.value.t, null, [...p])) : de(() => "")
        }

        function ve(...p) {
            return o.value ? Reflect.apply(o.value.rt, null, [...p]) : ""
        }

        function Se(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function Me(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function Ge(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function nt(p, w) {
            return o.value ? o.value.te(p, w) : !1
        }

        function Rt(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function Ar(p, w) {
            o.value && (o.value.setLocaleMessage(p, w), h.value[p] = w)
        }

        function ir(p, w) {
            o.value && o.value.mergeLocaleMessage(p, w)
        }

        function _r(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function ct(p, w) {
            o.value && (o.value.setDateTimeFormat(p, w), m.value[p] = w)
        }

        function Ot(p, w) {
            o.value && o.value.mergeDateTimeFormat(p, w)
        }

        function lt(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function Mt(p, w) {
            o.value && (o.value.setNumberFormat(p, w), y.value[p] = w)
        }

        function qt(p, w) {
            o.value && o.value.mergeNumberFormat(p, w)
        }
        const Ut = {
            get id() {
                return o.value ? o.value.id : -1
            },
            locale: oe,
            fallbackLocale: ce,
            messages: ue,
            datetimeFormats: $e,
            numberFormats: Ce,
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
                return o.value ? o.value.missingWarn : E
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
                return o.value ? o.value.fallbackRoot : k
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
                return o.value ? o.value.warnHtmlMessage : H
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
            setPostTranslationHandler: Ie,
            getMissingHandler: U,
            setMissingHandler: ie,
            rt: ve,
            d: Se,
            n: Me,
            tm: Ge,
            te: nt,
            getLocaleMessage: Rt,
            setLocaleMessage: Ar,
            mergeLocaleMessage: ir,
            getDateTimeFormat: _r,
            setDateTimeFormat: ct,
            mergeDateTimeFormat: Ot,
            getNumberFormat: lt,
            setNumberFormat: Mt,
            mergeNumberFormat: qt
        };

        function g(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(w => {
                p.mergeLocaleMessage(w, h.value[w])
            }), Object.keys(m.value).forEach(w => {
                p.mergeDateTimeFormat(w, m.value[w])
            }), Object.keys(y.value).forEach(w => {
                p.mergeNumberFormat(w, y.value[w])
            }), p.escapeParameter = X, p.fallbackFormat = M, p.fallbackRoot = k, p.fallbackWarn = I, p.missingWarn = E, p.warnHtmlMessage = H
        }
        return LE(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Ht(Ft.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, m.value = p.datetimeFormats.value, y.value = p.numberFormats.value) : s && g(p)
        }), Ut
    }
    const Cte = ["locale", "fallbackLocale", "availableLocales"],
        $te = ["t", "rt", "d", "n", "tm"];

    function Ate(e, t) {
        const r = Object.create(null);
        Cte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Ht(Ft.UNEXPECTED_ERROR);
            const o = tr(s.value) ? {
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
        }), e.config.globalProperties.$i18n = r, $te.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Ht(Ft.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Qee(ite);
    ete(Dee);
    tte(pS);
    const Nte = Je({
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
        Rte = "main/pp8/survey-bomb/assets/c8afd972.svg",
        Lte = {
            class: "constrain"
        },
        kte = {
            class: "text"
        },
        Pte = {
            class: "subtext"
        },
        xte = {
            key: 0,
            class: "warning"
        },
        Dte = {
            key: 1,
            class: "spinner"
        };

    function Mte(e, t, r, n, s, o) {
        return F(), Nt(Sl, {
            name: "toast-transition"
        }, {
            default: Sh(() => [e.isVisible && e.options ? (F(), V("div", {
                key: 0,
                class: Fe([e.options.type, "jbg toast"])
            }, [z("div", Lte, [z("img", {
                class: "close",
                alt: "close",
                src: Rte,
                onClick: t[0] || (t[0] = (...c) => e.hide && e.hide(...c)),
                onKeydown: t[1] || (t[1] = ZE((...c) => e.hide && e.hide(...c), ["esc"]))
            }, null, 32), z("p", kte, De(e.options.text), 1), z("p", Pte, De(e.options.subtext), 1), e.options.warning ? (F(), V("p", xte, De(e.options.warning), 1)) : Oe("", !0), e.options.type === "reconnecting" ? (F(), V("div", Dte)) : Oe("", !0)])], 2)) : Oe("", !0)]),
            _: 1
        })
    }
    const Ute = He(Nte, [
            ["render", Mte],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        Fte = {
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
                e.component("Toast", Ute), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        Bte = Je({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: es(mo.fatal.error)
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

    function jte(e, t, r, n, s, o) {
        const c = vt("Fatal"),
            u = vt("TextDescriptions"),
            f = vt("Debug"),
            h = vt("Modal"),
            m = vt("Toast");
        return e.shouldShowFatal ? (F(), Nt(c, {
            key: 0
        })) : (F(), V(ze, {
            key: 1
        }, [at(u), (F(), Nt(Ih(e.mainView), El({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), at(f), at(h), at(m)], 64))
    }
    const qb = He(Bte, [
            ["render", jte]
        ]),
        Gte = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Ir.WSClient(r), t.connect()),
                mount: r => {
                    var c, u, f, h;
                    qb.name = r.app;
                    let n = Wk(qb, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (c = r.room) != null && c.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Fs.set(s);
                    const o = _te({
                        fallbackLocale: "en",
                        locale: Fs.locale,
                        messages: Fs.mergeMessages(zj, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(e7), n.use(VQ), n.use(kz, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(JX, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(qZ), n.use(o), n.use(SQ, {
                            i18n: o
                        }), n.use(JQ), n.use(ZQ), n.use(Fte), n.use(QQ), e.plugins) {
                        const m = y => y.plugin === void 0;
                        e.plugins.forEach(y => {
                            if (m(y)) {
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
        Wte = {
            INSTRUCTION: {
                ORDERED: "Choose the door you think is {rank}",
                UNORDERED: "Choose all {amount} correct doors"
            },
            REMAINING: "Remaining Choices: {remaining}"
        },
        Kte = {
            CHOOSE_ONE: "Choose a door",
            CHOOSE_THIS: "Choose this door"
        },
        Hte = {
            FILTER_ERROR: "That\u2019s not allowed, enter something else!",
            INSTRUCTION: {
                AVATAR: "Pick your avatar",
                NAME_TEAM: "Suggest a team name",
                RANK_TEAM: "Rank your favorite team names"
            }
        },
        Vte = "No torches",
        qte = {
            CONFIRM: "Yeah, yeah, I got it",
            SUBTEXT: {
                ATTENTION: "[b]YOU MUST HAVE THE AUDIENCE ON TO PLAY![/b]",
                BEST: "[b]BEST:[/b] Passwording the game and sharing the password with your desired team",
                GOOD: "[b]ALMOST AS GOOD:[/b] Hiding the room code and setting a max player limit",
                RECOMMEND: "We recommend the following settings to help create your desired team and audience.",
                RESTART: "So, if you haven\u2019t done that, maybe restart the game?"
            },
            TEXT: "Welcome to Streamer Mode!"
        },
        Yte = {
            INSTRUCTION: "Remember your choices",
            PICK_MORE: "Pick {amount} more"
        },
        zte = "Switch teams",
        Xte = "VS",
        Jte = {
            FINAL_CHANCE: {
                BOTH: "If either team gets the next choice right, the game is over!",
                CURRENT: "If their team gets their next choice right, the game is over!",
                HEADER: "Elimination Moment",
                RIVAL: "If your team gets your next choice right, the game is over!"
            },
            LOSE: {
                HEADER: "You\u2019re Trapped",
                TEXT: ["Don\u2019t worry, apparently you were tasty.", "At least the other team is happy.", "Learn more about your friends next time.", "Still, you learned a lot about each other.", "It is pitch black. You are likely to be eaten by a grue.", "Even worse, you\u2019re damp.", "Theivery doesn\u2019t pay!", "It\u2019s okay, Laverne will keep you company.", "Enjoy the musty air.", "At least your team name was cool."]
            },
            SKIP_TUTORIALS: "Skip Tutorials",
            UP_NEXT: {
                HEADER: "You\u2019re Up Next",
                TEXT: ["Get ready! You\u2019re choosing next.", "Pay attention because you\u2019re picking the next door.", "After this choice, it\u2019s your turn\u2026 so hope they fail!"]
            },
            WIN: {
                HEADER: "You Escaped",
                TEXT: ["Congratulations on a job well done!", "Teamwork made this dream work.", "Don\u2019t spend all that gold you stole earlier in one place.", "Enjoy the fresh air.", "Don\u2019t forget to rate your stay!", "I\u2019m sure the other team is just fine.", "You picked your friends\u2019 knows!", "Looking forward to your next visit.", "The real treasure was the friends we lost to the depths of this mine.", "Everyone is proud of you."]
            }
        },
        Zte = {
            AUDIENCE: Wte,
            CHOICES: Kte,
            LOBBY: Hte,
            NO_TORCHES: Vte,
            STREAMER_MODAL: qte,
            SURVEY: Yte,
            SWITCH_TEAMS: zte,
            VERSUS: Xte,
            WAITING: Jte
        },
        Qte = {
            en: Zte
        },
        ere = {},
        tre = {
            width: "13",
            height: "24",
            viewBox: "0 0 13 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        rre = z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M6.587 0L7.514 0.438C10.857 2.016 13 5.455 13 9.241V24H0V9.307C0 5.484 2.185 2.021 5.577 0.464L6.587 0ZM6.581 1.16L5.995 1.429C2.973 2.816 1.026 5.901 1.026 9.307V22.943H11.974V9.241C11.974 5.868 10.064 2.804 7.086 1.398L6.581 1.16Z",
            fill: "#89D510"
        }, null, -1),
        nre = z("path", {
            d: "M6.5 1V23.5",
            stroke: "#89D510"
        }, null, -1),
        ire = z("circle", {
            cx: "9",
            cy: "15",
            r: "1",
            fill: "#89D510"
        }, null, -1),
        sre = z("circle", {
            cx: "4",
            cy: "15",
            r: "1",
            fill: "#89D510"
        }, null, -1),
        are = [rre, nre, ire, sre];

    function ore(e, t) {
        return F(), V("svg", tre, are)
    }
    const cre = He(ere, [
            ["render", ore]
        ]),
        lre = {},
        ure = {
            width: "14",
            height: "15",
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        fre = z("path", {
            d: "M13 1.5L1 13.5",
            stroke: "#FF1515",
            "stroke-width": "2"
        }, null, -1),
        dre = z("path", {
            d: "M13 13.5L1 1.5",
            stroke: "#FF1515",
            "stroke-width": "2"
        }, null, -1),
        hre = [fre, dre];

    function pre(e, t) {
        return F(), V("svg", ure, hre)
    }
    const gre = He(lre, [
            ["render", pre]
        ]),
        mre = {},
        vre = {
            width: "21",
            height: "25",
            viewBox: "0 0 21 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        yre = z("path", {
            d: "m4.969 3.81.936-.644a8.1 8.1 0 0 1 9.19 0l1.053.725a7.988 7.988 0 0 1 3.09 8.965l-.054.175c-.137.436-.206.89-.206 1.347v.043c0 .289.03.577.09.86l.13.604a2.685 2.685 0 0 1-.43 2.108l-.144.206a2.202 2.202 0 0 1-1.8.934 2.202 2.202 0 0 0-2.202 2.202v.797a.7.7 0 0 1-.474.662l-.099.034a11.037 11.037 0 0 1-7.098 0l-.099-.034a.7.7 0 0 1-.474-.662v-.797a2.202 2.202 0 0 0-2.202-2.202 2.201 2.201 0 0 1-1.8-.934l-.145-.206a2.685 2.685 0 0 1-.43-2.108l.133-.62a3.959 3.959 0 0 0-.085-1.987l-.084-.275A8.237 8.237 0 0 1 4.969 3.81Z",
            fill: "#fff"
        }, null, -1),
        _re = z("path", {
            d: "M9.255 14.778a2.8 2.8 0 0 1-2.8 2.8c-1.546 0-2.489-.943-2.489-2.49 0-1.545.943-2.488 2.49-2.488 1.546 0 2.8.631 2.8 2.178ZM17.033 15.089c0 1.546-.943 2.489-2.489 2.489a2.8 2.8 0 0 1-2.8-2.8c0-1.547 1.254-2.178 2.8-2.178 1.546 0 2.489.943 2.489 2.489ZM8.95 18.748l.835-2.815a.745.745 0 0 1 1.43 0l.834 2.815a.674.674 0 0 1-1.117.675L10.5 19l-.433.422a.674.674 0 0 1-1.117-.675Z",
            fill: "#000"
        }, null, -1),
        bre = z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M8.089 23.022v-1.555h.622v1.555H8.09Zm4.355 0v-1.555h.623v1.555h-.623Zm-2.177.311v-1.555h.622v1.555h-.622Z",
            fill: "#000"
        }, null, -1),
        Ere = [yre, _re, bre];

    function Tre(e, t) {
        return F(), V("svg", vre, Ere)
    }
    const Sre = He(mre, [
            ["render", Tre]
        ]),
        wre = {},
        Ore = {
            width: "21",
            height: "25",
            viewBox: "0 0 21 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Ire = VE('<path d="m13.004.472.05 5.582 1.2 1.286A12.934 12.934 0 0 0 21 11.162v10.5l-3.122.568a10.36 10.36 0 0 1-6.472 2.27H3l-.23-.192A2.692 2.692 0 0 1 3 20a2.404 2.404 0 0 1 0-4l-.442-.295A2.295 2.295 0 0 1 3.83 11.5h4.134a1.303 1.303 0 0 0 1.13-1.952l-.365-.636a3.766 3.766 0 0 1-.5-1.876V4.394A4.386 4.386 0 0 1 12.528.01a.467.467 0 0 1 .476.463Z" fill="#89D510"></path><path d="M14.012 16.353a1.795 1.795 0 0 1 2.345-2.704l1.368 1.016a3.383 3.383 0 0 0 2.018.668H21v3.506h-1.488c-.688 0-1.358.219-1.914.625l-1.237.904a1.803 1.803 0 0 1-2.344-2.726l.637-.642-.642-.647ZM3.512 14.946l.404.303c.141.105.33.122.487.043a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"></path><path d="m9.78 12.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.043l.404-.303a1.281 1.281 0 0 0 0-2.05ZM10.743 7.909l-.13.44a.35.35 0 0 0 .135.396c.398.276.707.64.904 1.064l.42.906 1.814-.841-.42-.906a2.658 2.658 0 0 1-.23-1.378.35.35 0 0 0-.214-.358l-.42-.186c-.71-.314-1.64.118-1.86.863Z" fill="#fff"></path><path d="m14.856 11.905.13-.44a.35.35 0 0 0-.136-.396 2.657 2.657 0 0 1-.903-1.064l-.42-.907-1.815.842.42.906c.197.424.276.896.23 1.377a.35.35 0 0 0 .214.359l.42.185c.711.315 1.64-.117 1.86-.862ZM11.955 6.044l.27-.366a.41.41 0 0 0 .033-.435 3.114 3.114 0 0 1-.36-1.405V2.385a.909.909 0 1 0-1.817 0v1.48c.007.49-.101.974-.317 1.416a.41.41 0 0 0 .047.434l.28.358c.476.604 1.407.59 1.864-.029ZM3.512 18.946l.404.302c.141.106.33.123.487.044a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"></path><path d="m9.78 16.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.044l.404-.302a1.281 1.281 0 0 0 0-2.05ZM3.512 22.946l.404.302c.141.106.33.123.487.044a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"></path><path d="m9.78 20.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.044l.404-.302a1.281 1.281 0 0 0 0-2.05Z" fill="#fff"></path>', 6),
        Cre = [Ire];

    function $re(e, t) {
        return F(), V("svg", Ore, Cre)
    }
    const Are = He(wre, [
            ["render", $re]
        ]),
        AS = e => {
            const t = ["th", "st", "nd", "rd"],
                r = e % 100;
            return `${t[(r-20)%10]||t[r]||t[0]}`
        },
        Nre = e => `${e}${AS(e)}`,
        Fp = Je({
            components: {
                DoorSVG: cre,
                RemoveSVG: gre,
                SkullSVG: Sre,
                ThumbSVG: Are
            },
            props: {
                choice: {
                    type: Object,
                    required: !0
                },
                chosen: Boolean,
                correct: Boolean,
                disabled: Boolean,
                incorrect: Boolean,
                rank: Number,
                removable: Boolean
            },
            emits: ["choose"],
            computed: {
                scale() {
                    return this.choice.percent ? (this.choice.percent / 100).toFixed(2) : 0
                }
            },
            methods: {
                getOrdinal(e) {
                    return AS(e)
                }
            }
        }),
        Yb = () => {
            Ak(e => ({
                "10ba71f1": e.scale
            }))
        },
        zb = Fp.setup;
    Fp.setup = zb ? (e, t) => (Yb(), zb(e, t)) : Yb;
    const Rre = {
            key: 0,
            class: "rank"
        },
        Lre = ["id", "disabled"],
        kre = ["id", "disabled"],
        Pre = ["textContent"],
        xre = ["for"];

    function Dre(e, t, r, n, s, o) {
        const c = vt("RemoveSVG"),
            u = vt("ThumbSVG"),
            f = vt("SkullSVG"),
            h = vt("DoorSVG"),
            m = Kt("bb");
        return F(), V("div", {
            class: Fe(["choice", {
                chosen: e.chosen,
                correct: e.correct,
                disabled: e.disabled,
                incorrect: e.incorrect,
                progress: !!e.choice.percent
            }])
        }, [e.rank ? (F(), V("div", Rre, [en(De(e.rank), 1), z("sup", null, De(e.getOrdinal(e.rank)), 1)])) : Oe("", !0), e.removable ? (F(), V(ze, {
            key: 1
        }, [z("input", {
            id: e.choice.index.toString(),
            disabled: e.disabled,
            type: "checkbox",
            onClick: t[0] || (t[0] = y => e.$emit("choose"))
        }, null, 8, Lre), e.disabled ? Oe("", !0) : (F(), Nt(c, {
            key: 0,
            class: "remove"
        })), e.chosen ? (F(), V(ze, {
            key: 1
        }, [e.correct ? (F(), Nt(u, {
            key: 0,
            class: "result",
            "aria-label": "correct answer"
        })) : Oe("", !0), e.incorrect ? (F(), Nt(f, {
            key: 1,
            class: "result",
            "aria-label": "incorrect answer"
        })) : Oe("", !0)], 64)) : Oe("", !0)], 64)) : (F(), V(ze, {
            key: 2
        }, [at(h, {
            class: "door"
        }), z("input", {
            id: e.choice.index.toString(),
            disabled: e.disabled,
            name: "choices",
            type: "radio",
            onChange: t[1] || (t[1] = y => e.$emit("choose"))
        }, null, 40, kre), e.choice.percent ? (F(), V("div", {
            key: 0,
            class: "percent",
            textContent: De(`${e.choice.percent}%`)
        }, null, 8, Pre)) : Oe("", !0)], 64)), z("label", {
            for: e.choice.index.toString()
        }, [qe(z("span", null, null, 512), [
            [m, e.choice.text]
        ])], 8, xre)], 2)
    }
    const Bp = He(Fp, [
            ["render", Dre],
            ["__scopeId", "data-v-892612eb"]
        ]),
        Mre = Je({
            components: {
                ChoiceButton: Bp
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    chosenIndex: -1,
                    hasSubmit: !1,
                    isSubmitting: !1,
                    pollAudienceInterval: null
                }
            },
            computed: {
                choices() {
                    return this.player.choices.filter(e => e.rank == null)
                }
            },
            created() {
                this.player.countGroupName && (this.pollAudienceInterval = window.setInterval(async () => {
                    await this.pollAudience()
                }, 1e3))
            },
            mounted() {
                this.$vibrate()
            },
            beforeUnmount() {
                window.clearInterval(this.pollAudienceInterval), this.pollAudienceInterval = null
            },
            methods: {
                async pollAudience() {
                    let e;
                    try {
                        if ({
                                choices: e
                            } = await this.$ecast.getCountGroup(this.player.countGroupName), !e) throw new Error("missing choice data")
                    } catch (r) {
                        console.warn(`failed to get countgroup ${this.player.countGroupName} during poll: ${r}`);
                        return
                    }
                    const t = Object.values(e).reduce((r, n) => r + n, 0);
                    Object.values(this.choices).forEach((r, n) => {
                        const s = Object.keys(e).find(c => c.endsWith(`:${r.index}`)),
                            o = e[s];
                        this.choices[n].percent = Math.round(o / t * 100)
                    })
                },
                shouldDisableChoice(e) {
                    return !!(this.isSubmitting || !!e.rank)
                },
                async onChoose(e) {
                    if (this.chosenIndex = e, this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            choiceIndex: this.chosenIndex
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmitChoices() {
                    switch (this.$ecast.role) {
                        case "audience":
                            await this.onAudienceSubmit();
                            break;
                        case "player":
                            await this.onPlayerSubmit();
                            break
                    }
                    this.hasSubmit = !0
                },
                async onAudienceSubmit() {
                    if (!!this.player.countGroupName) {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.incrementCountGroupCounter(this.player.countGroupName, `${this.player.questionIndex}:${this.chosenIndex}`)
                        } catch (e) {
                            this.$handleEcastError(e)
                        }
                    }
                },
                async onPlayerSubmit() {
                    if (!!this.player.responseKey) {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit",
                                choiceIndex: this.chosenIndex
                            })
                        } catch (e) {
                            this.$handleEcastError(e)
                        }
                    }
                }
            }
        }),
        Ure = {
            class: "choices"
        },
        Fre = {
            class: "question"
        },
        Bre = {
            class: "actions"
        },
        jre = {
            key: 0,
            disabled: ""
        },
        Gre = ["disabled"],
        Wre = {
            class: "question"
        };

    function Kre(e, t, r, n, s, o) {
        const c = vt("ChoiceButton"),
            u = Kt("bb");
        return F(), V("div", Ure, [e.hasSubmit ? (F(), V(ze, {
            key: 1
        }, [qe(z("div", Wre, null, 512), [
            [u, e.player.question]
        ]), at(c, {
            class: "chosen",
            choice: e.player.choices.find(f => e.chosenIndex === f.index),
            disabled: ""
        }, null, 8, ["choice"])], 64)) : (F(), V("form", {
            key: 0,
            onSubmit: t[0] || (t[0] = Cr((...f) => e.onSubmitChoices && e.onSubmitChoices(...f), ["prevent"]))
        }, [z("fieldset", null, [qe(z("legend", Fre, null, 512), [
            [u, e.player.question]
        ]), (F(!0), V(ze, null, Qr(e.choices, f => (F(), Nt(c, {
            key: `choice${f.index}`,
            class: Fe({
                chosen: e.chosenIndex === f.index
            }),
            choice: f,
            disabled: e.shouldDisableChoice(f),
            rank: f.rank,
            onChoose: h => e.onChoose(f.index)
        }, null, 8, ["class", "choice", "disabled", "rank", "onChoose"]))), 128))]), z("div", Bre, [e.chosenIndex === -1 ? (F(), V("button", jre, De(e.$t("CHOICES.CHOOSE_ONE")), 1)) : (F(), V("button", {
            key: 1,
            disabled: e.isSubmitting
        }, De(e.$t("CHOICES.CHOOSE_THIS")), 9, Gre))])], 32))])
    }
    const Hre = He(Mre, [
            ["render", Kre],
            ["__scopeId", "data-v-a768c2e1"]
        ]),
        Vre = Je({
            components: {
                ChoiceButton: Bp
            },
            props: {
                choices: Array,
                disabled: Boolean,
                instructions: String,
                places: Number,
                question: String
            },
            emits: {
                choose: e => !0,
                submit: e => !0
            },
            data() {
                return {
                    nextRank: 1,
                    selections: new Array(this.places).fill(-1)
                }
            },
            watch: {
                places: function(t) {
                    for (let r = this.selections.length; r < t; r++) this.selections.push(-1), this.nextRank = this.getNextRank()
                }
            },
            methods: {
                getNextRank() {
                    return this.selections.findIndex(e => e === -1) + 1
                },
                getRank(e) {
                    return this.selections.includes(e) ? this.selections.findIndex(t => t === e) + 1 : 0
                },
                toggleSelection(e) {
                    if (this.selections.includes(e)) {
                        this.selections[this.selections.findIndex(r => r === e)] = -1;
                        const t = this.getNextRank();
                        t > 0 && (this.nextRank = t)
                    } else this.selections[this.nextRank - 1] = e, this.nextRank = this.getNextRank();
                    this.$emit("choose", this.selections.filter(t => t !== -1))
                }
            }
        }),
        qre = {
            class: "survey-form"
        },
        Yre = {
            key: 0,
            class: "instructions"
        },
        zre = {
            class: "question"
        },
        Xre = {
            key: 0,
            class: "actions"
        },
        Jre = {
            key: 0,
            disabled: ""
        },
        Zre = {
            key: 1
        };

    function Qre(e, t, r, n, s, o) {
        const c = vt("ChoiceButton"),
            u = Kt("bb");
        return F(), V("div", qre, [e.instructions ? (F(), V("div", Yre, [z("h1", null, De(e.instructions), 1)])) : Oe("", !0), z("form", {
            onSubmit: t[0] || (t[0] = Cr(f => e.$emit("submit", e.selections), ["prevent"]))
        }, [z("fieldset", null, [qe(z("legend", zre, null, 512), [
            [u, e.question]
        ]), (F(!0), V(ze, null, Qr(e.choices, f => (F(), Nt(c, {
            key: `choice${f.index}`,
            class: Fe({
                chosen: e.selections.includes(f.index)
            }),
            choice: f,
            disabled: e.disabled || !e.selections.includes(-1) && !e.selections.includes(f.index),
            rank: e.getRank(f.index),
            removable: "",
            onChoose: h => e.toggleSelection(f.index)
        }, null, 8, ["class", "choice", "disabled", "rank", "onChoose"]))), 128))]), e.disabled ? Oe("", !0) : (F(), V("div", Xre, [e.selections.includes(-1) && e.places != null ? (F(), V("button", Jre, De(e.$t("SURVEY.PICK_MORE", {
            amount: e.places - e.selections.filter(f => f !== -1).length
        })), 1)) : (F(), V("button", Zre, De(e.$t("ACTION.SUBMIT")), 1))]))], 32)])
    }
    const NS = He(Vre, [
            ["render", Qre],
            ["__scopeId", "data-v-627a585a"]
        ]),
        ene = {},
        tne = {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        rne = z("path", {
            d: "M26 13H6",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        nne = z("path", {
            d: "M15 2L4 13L15 24",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        ine = [rne, nne];

    function sne(e, t) {
        return F(), V("svg", tne, ine)
    }
    const ane = He(ene, [
            ["render", sne]
        ]),
        one = {},
        cne = {
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        lne = z("path", {
            d: "M0 13H20",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        une = z("path", {
            d: "M11 2L22 13L11 24",
            stroke: "black",
            "stroke-width": "5"
        }, null, -1),
        fne = [lne, une];

    function dne(e, t) {
        return F(), V("svg", cne, fne)
    }
    const hne = He(one, [
            ["render", dne]
        ]),
        pne = Je({
            components: {
                ArrowLeftSVG: ane,
                ArrowRightSVG: hne
            },
            props: {
                avatar: Object,
                canSwitch: Boolean,
                teamIndex: Number
            },
            emits: ["switch-teams"],
            data() {
                return {
                    isSwitching: !1
                }
            }
        }),
        gne = ["disabled"],
        mne = ["src", "alt"];

    function vne(e, t, r, n, s, o) {
        const c = vt("ArrowRightSVG"),
            u = vt("ArrowLeftSVG");
        return F(), V("div", {
            class: Fe(["team-switcher", {
                left: e.teamIndex === 1,
                right: e.teamIndex === 0
            }])
        }, [z("button", {
            disabled: !e.canSwitch || e.isSwitching,
            onClick: t[0] || (t[0] = f => e.$emit("switch-teams"))
        }, [e.avatar ? (F(), V("img", {
            key: 0,
            class: "avatar",
            src: e.avatar.on,
            alt: e.avatar.alt
        }, null, 8, mne)) : Oe("", !0), e.teamIndex === 0 ? (F(), Nt(c, {
            key: 1,
            class: "arrow"
        })) : (F(), Nt(u, {
            key: 2,
            class: "arrow"
        })), en(" " + De(e.$t("SWITCH_TEAMS")), 1)], 8, gne)], 2)
    }
    const yne = He(pne, [
            ["render", vne],
            ["__scopeId", "data-v-e617a953"]
        ]),
        _ne = Je({
            components: {
                LobbyActions: N0,
                Input: s5,
                SurveyForm: NS,
                TeamSwitcher: yne
            },
            props: {
                info: {
                    type: Object,
                    required: !0
                },
                player: {
                    type: Object,
                    required: !0
                }
            },
            bb: {
                section: (e, t) => `<div class="section">${t}</div>`
            },
            data() {
                return {
                    avatarImages: {
                        0: {
                            alt: "armored adventurer with sword",
                            off: new URL("main/pp8/survey-bomb/assets/a8c3a864.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/5d15f0d1.png", self.location).href
                        },
                        1: {
                            alt: "raven with large beak",
                            off: new URL("main/pp8/survey-bomb/assets/b3cc8796.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/53768559.png", self.location).href
                        },
                        2: {
                            alt: "rogue with dagger and feather cap",
                            off: new URL("main/pp8/survey-bomb/assets/8b8859b6.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/51d034a9.png", self.location).href
                        },
                        3: {
                            alt: "hooded thief flipping a coin",
                            off: new URL("main/pp8/survey-bomb/assets/8c4e5c69.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/b9a7e9a5.png", self.location).href
                        },
                        4: {
                            alt: "snail with pickaxe lashed to its shell",
                            off: new URL("main/pp8/survey-bomb/assets/5eeccce0.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/ba84c99e.png", self.location).href
                        },
                        5: {
                            alt: "royalty covered by long hair while holding gem",
                            off: new URL("main/pp8/survey-bomb/assets/dc10f07a.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/2bee22a7.png", self.location).href
                        },
                        6: {
                            alt: "skull-faced miner wielding shovel",
                            off: new URL("main/pp8/survey-bomb/assets/4c894246.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/11762825.png", self.location).href
                        },
                        7: {
                            alt: "cool kid with mace riding a turtle",
                            off: new URL("main/pp8/survey-bomb/assets/c3f7575c.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/7e72a908.png", self.location).href
                        },
                        8: {
                            alt: "angry flower in a boot",
                            off: new URL("main/pp8/survey-bomb/assets/27bc4eb8.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/0b736286.png", self.location).href
                        },
                        9: {
                            alt: "broad mountaineer gnome with large bedroll",
                            off: new URL("main/pp8/survey-bomb/assets/311e8e8e.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/d4fbb597.png", self.location).href
                        },
                        10: {
                            alt: "short brooding gnome with very tall hat",
                            off: new URL("main/pp8/survey-bomb/assets/ff043567.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/7a01f477.png", self.location).href
                        },
                        11: {
                            alt: "capped mushroom with legs",
                            off: new URL("main/pp8/survey-bomb/assets/b5ce96a7.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/cd733855.png", self.location).href
                        },
                        12: {
                            alt: "determined underling holding a sack",
                            off: new URL("main/pp8/survey-bomb/assets/9824e903.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/80e2faa9.png", self.location).href
                        },
                        13: {
                            alt: "frog knight",
                            off: new URL("main/pp8/survey-bomb/assets/4ba7fa02.png", self.location).href,
                            on: new URL("main/pp8/survey-bomb/assets/26546468.png", self.location).href
                        }
                    },
                    filterError: !1,
                    isSubmitting: !1,
                    selectedAvatar: {},
                    steps: ["avatar", "name", "rank", "start"],
                    teamName: ""
                }
            },
            computed: {
                choices() {
                    var e;
                    return (e = this.player.names) == null ? void 0 : e.map((t, r) => ({
                        index: r,
                        text: t
                    }))
                },
                gameStartedOptions() {
                    return {
                        mode: this.player.streamerMode ? "streamer" : "standard"
                    }
                }
            },
            watch: {
                "player.avatars": function() {
                    if (!this.selectedAvatar.name) return;
                    const t = this.player.avatars.find(r => r.name === this.selectedAvatar.name);
                    t != null && t.available || (this.selectedAvatar = {})
                },
                "player.stepIndex": function() {
                    this.isSubmitting = !1
                }
            },
            mounted() {
                this.player.streamerMode && this.player.vipName === this.info.name && this.$showModal("Options", {
                    text: this.$t("STREAMER_MODAL.TEXT"),
                    subtext: `${this.$t("STREAMER_MODAL.SUBTEXT.ATTENTION")}[section]${this.$t("STREAMER_MODAL.SUBTEXT.RECOMMEND")}[/section][section]${this.$t("STREAMER_MODAL.SUBTEXT.BEST")}[/section][section]${this.$t("STREAMER_MODAL.SUBTEXT.GOOD")}[/section][section]${this.$t("STREAMER_MODAL.SUBTEXT.RESTART")}[/section]`,
                    options: [{
                        text: this.$t("STREAMER_MODAL.CONFIRM"),
                        value: "confirm"
                    }]
                }, {
                    classes: "pm-streamer-mode"
                })
            },
            methods: {
                shouldEndAvatarRow(e) {
                    return (e + 3) % 7 === 0 || e % 7 === 0
                },
                onSelectAvatar(e) {
                    this.selectedAvatar = e
                },
                async onSubmitAvatar() {
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "avatar",
                            avatar: this.selectedAvatar.name
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onSubmitNameSurvey(e) {
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "rankNames",
                            answers: e
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmitTeamName() {
                    if (!!this.player.textKey) {
                        this.filterError = !1;
                        try {
                            await this.$ecast.updateText(this.player.textKey, this.teamName)
                        } catch (e) {
                            if (e instanceof fi.EcastFilterError) {
                                this.filterError = !0;
                                return
                            }
                            this.$handleEcastError(e)
                        }
                    }
                },
                async onSwitchTeams() {
                    if (!!this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "switchTeams"
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        bne = {
            class: "lobby"
        },
        Ene = {
            class: "dots"
        },
        Tne = {
            key: 1,
            class: "selecting"
        },
        Sne = {
            class: "instructions"
        },
        wne = {
            class: "avatars"
        },
        One = ["disabled", "onClick"],
        Ine = ["src", "alt"],
        Cne = {
            class: "actions"
        },
        $ne = ["disabled"],
        Ane = {
            key: 2,
            class: "naming"
        },
        Nne = {
            class: "instructions"
        },
        Rne = {
            key: 0,
            class: "error"
        },
        Lne = ["disabled"],
        kne = {
            key: 3,
            class: "ranking"
        };

    function Pne(e, t, r, n, s, o) {
        const c = vt("LobbyActions"),
            u = vt("Input"),
            f = vt("SurveyForm"),
            h = vt("TeamSwitcher"),
            m = Kt("t");
        return F(), V("div", bne, [e.player.hasControls || e.steps[e.player.stepIndex] === "start" ? (F(), Nt(c, {
            key: 0,
            player: e.player,
            "message-location": e.steps[e.player.stepIndex] === "start" ? "bottom" : "none",
            "game-started-options": e.gameStartedOptions
        }, null, 8, ["player", "message-location", "game-started-options"])) : Oe("", !0), z("div", Ene, [(F(!0), V(ze, null, Qr(e.steps, (y, E) => (F(), V("div", {
            key: E,
            class: Fe(["dot", {
                active: e.player.stepIndex >= E
            }])
        }, null, 2))), 128))]), e.steps[e.player.stepIndex] === "avatar" ? (F(), V("div", Tne, [z("span", Sne, De(e.$t("LOBBY.INSTRUCTION.AVATAR")), 1), z("div", wne, [(F(!0), V(ze, null, Qr(e.player.avatars, (y, E) => (F(), V(ze, {
            key: `av${E}`
        }, [z("button", {
            class: Fe(["avatar", {
                selected: y.name === e.selectedAvatar.name
            }]),
            disabled: !y.available,
            onClick: I => e.onSelectAvatar(y)
        }, [z("img", {
            src: y.available ? e.avatarImages[y.name] && e.avatarImages[y.name].on : e.avatarImages[y.name] && e.avatarImages[y.name].off,
            alt: e.avatarImages[y.name] && e.avatarImages[y.name].alt
        }, null, 8, Ine)], 10, One), e.shouldEndAvatarRow(E + 1) ? (F(), V("div", {
            key: `break${E}`,
            class: "row-break"
        })) : Oe("", !0)], 64))), 128))]), z("div", Cne, [z("button", {
            disabled: !e.selectedAvatar.name,
            onClick: t[0] || (t[0] = (...y) => e.onSubmitAvatar && e.onSubmitAvatar(...y))
        }, De(e.$t("ACTION.SUBMIT")), 9, $ne)])])) : e.steps[e.player.stepIndex] === "name" ? (F(), V("div", Ane, [z("span", Nne, De(e.$t("LOBBY.INSTRUCTION.NAME_TEAM")), 1), z("form", {
            onSubmit: t[2] || (t[2] = Cr((...y) => e.onSubmitTeamName && e.onSubmitTeamName(...y), ["prevent"]))
        }, [at(u, {
            modelValue: e.teamName,
            "onUpdate:modelValue": t[1] || (t[1] = y => e.teamName = y),
            maxlength: "21"
        }, null, 8, ["modelValue"]), e.filterError ? qe((F(), V("span", Rne, null, 512)), [
            [m, "LOBBY.FILTER_ERROR"]
        ]) : Oe("", !0), z("button", {
            class: "submit",
            disabled: !e.teamName
        }, De(e.$t("ACTION.SUBMIT")), 9, Lne)], 32)])) : e.steps[e.player.stepIndex] === "rank" ? (F(), V("div", kne, [at(f, {
            choices: e.choices,
            places: Math.min(e.player.names.length, 3),
            question: e.$t("LOBBY.INSTRUCTION.RANK_TEAM"),
            onSubmit: e.onSubmitNameSurvey
        }, null, 8, ["choices", "places", "question", "onSubmit"])])) : Oe("", !0), e.$ecast.role !== "audience" && e.steps[e.player.stepIndex] !== "avatar" ? (F(), Nt(h, {
            key: 4,
            avatar: e.avatarImages[e.info.avatarId],
            "can-switch": e.player.canSwitch,
            "team-index": e.player.teamIndex,
            onSwitchTeams: e.onSwitchTeams
        }, null, 8, ["avatar", "can-switch", "team-index", "onSwitchTeams"])) : Oe("", !0)])
    }
    const xne = He(_ne, [
            ["render", Pne],
            ["__scopeId", "data-v-3a5a7c69"]
        ]),
        Dne = {},
        Mne = {
            width: "12",
            height: "29",
            viewBox: "0 0 12 29",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Une = VE('<path d="M5.4 26.923L5.136 17.558C5.1126 16.717 5.787 16.023 6.628 16.023C7.469 16.023 8.143 16.717 8.120 17.558L7.855 26.923C7.837 27.587 7.293 28.116 6.628 28.116C5.963 28.116 5.419 27.587 5.400 26.923Z" fill="white"></path><path d="M1.86 11.678C0.69 13.893 0.214 16.362 3.42 19.061C4.98 20.169 8.1 20.169 9.66 19.061C11.22 17.954 12 16.597 12 14.262C12 11.678 10.83 10.202 9.66 8.725C8.49 7.249 6.54 5.403 7.71 2.08C5.76 3.188 4.98 4.665 4.98 6.51C4.98 8.161 5.76 11.309 4.2 12.417C5.158 10.202 4.59 8.725 3.42 7.618C3.81 9.094 3.03 9.463 1.86 11.678Z" fill="#FF4444"></path><path d="M12 0.973C11.22 1.342 9.646 2.078 10.036 4.293C10.188 5.155 10.83 5.772 12 6.51C11.22 4.295 11.61 2.819 12 0.973Z" fill="#FF4444"></path><path d="M8.242 9.897C8.671 11.848 6.75 13.71 5.892 14.686C5.057 15.635 4.38 17.109 5.567 18.108C7.067 19.373 9.154 17.456 9.529 15.75C9.958 13.799 9.1 11.848 8.242 9.897Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="7.286" y1="9.897" x2="7.286" y2="18.517" gradientUnits="userSpaceOnUse"><stop offset="0.469" stop-color="#FFD43D"></stop><stop offset="1" stop-color="#FFD43D" stop-opacity="0"></stop></linearGradient></defs>', 5),
        Fne = [Une];

    function Bne(e, t) {
        return F(), V("svg", Mne, Fne)
    }
    const RS = He(Dne, [
            ["render", Bne]
        ]),
        jne = Je({
            components: {
                TorchSVG: RS
            },
            props: {
                name: String,
                teamIndex: Number,
                torches: Number
            },
            themeColor: "#000"
        }),
        Gne = {
            class: "header",
            "aria-label": "name and torch section"
        },
        Wne = {
            class: "name"
        },
        Kne = {
            key: 1,
            class: "torches"
        },
        Hne = {
            key: 0,
            class: "torch-warning"
        };

    function Vne(e, t, r, n, s, o) {
        const c = vt("TorchSVG"),
            u = Kt("t");
        return F(), V("div", Gne, [e.name ? (F(), V("div", {
            key: 0,
            class: Fe(["banner", e.teamIndex != null ? `team-${e.teamIndex}` : ""])
        }, [z("span", Wne, De(e.name), 1)], 2)) : Oe("", !0), e.torches != null ? (F(), V("div", Kne, [e.torches === 0 ? qe((F(), V("span", Hne, null, 512)), [
            [u, "NO_TORCHES"]
        ]) : (F(!0), V(ze, {
            key: 1
        }, Qr(e.torches, f => (F(), Nt(c, {
            key: `torch${f}`,
            class: "torch"
        }))), 128))])) : Oe("", !0)])
    }
    const qne = He(jne, [
            ["render", Vne],
            ["__scopeId", "data-v-3e30cadd"]
        ]),
        Yne = Je({
            components: {
                GalleryLink: t5,
                PostGameActions: R0
            },
            props: {
                artifact: Object,
                player: {
                    type: Object,
                    required: !0
                }
            }
        }),
        zne = {
            class: "post-game"
        };

    function Xne(e, t, r, n, s, o) {
        const c = vt("PostGameActions"),
            u = vt("GalleryLink");
        return F(), V("div", zne, [at(c, {
            player: e.player
        }, null, 8, ["player"]), at(u, {
            artifact: e.artifact
        }, null, 8, ["artifact"])])
    }
    const Jne = He(Yne, [
            ["render", Xne],
            ["__scopeId", "data-v-4a3d7c49"]
        ]),
        Zne = Je({
            components: {
                SurveyForm: NS
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    answers: new Array(this.player.places).fill(-1),
                    hasSubmit: !1,
                    isSubmitting: !1
                }
            },
            created() {
                At.remove("pm-answers", "code")
            },
            mounted() {
                this.$vibrate()
            },
            methods: {
                async onChooseAnswer(e) {
                    if (this.answers = e, this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            answers: this.answers
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSubmitSurvey() {
                    switch (this.$ecast.role) {
                        case "audience":
                            this.onAudienceSubmit();
                            break;
                        case "player":
                            await this.onPlayerSubmit();
                            break
                    }
                    this.hasSubmit = !0
                },
                onAudienceSubmit() {
                    !this.player.countGroupName || (this.isSubmitting = !0, this.answers.forEach((e, t) => {
                        const r = t + 1;
                        this.$ecast.incrementCountGroupCounter(this.player.countGroupName, `${e.toString()}:${r}`).catch(this.$handleEcastError)
                    }))
                },
                async onPlayerSubmit() {
                    if (!!this.player.responseKey) {
                        this.isSubmitting = !0;
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit",
                                answers: this.answers
                            })
                        } catch (e) {
                            this.$handleEcastError(e)
                        }
                    }
                }
            }
        }),
        Qne = {
            class: "survey"
        };

    function eie(e, t, r, n, s, o) {
        const c = vt("SurveyForm");
        return F(), V("div", Qne, [e.hasSubmit ? (F(), Nt(c, {
            key: 1,
            class: "review",
            choices: e.answers.map(u => e.player.choices.find(f => u === f.index)),
            disabled: "",
            instructions: e.$t("SURVEY.INSTRUCTION"),
            question: e.player.question
        }, null, 8, ["choices", "instructions", "question"])) : (F(), Nt(c, {
            key: 0,
            choices: e.player.choices,
            disabled: e.isSubmitting,
            places: e.player.places,
            question: e.player.question,
            onChoose: e.onChooseAnswer,
            onSubmit: e.onSubmitSurvey
        }, null, 8, ["choices", "disabled", "places", "question", "onChoose", "onSubmit"]))])
    }
    const tie = He(Zne, [
            ["render", eie]
        ]),
        rie = "main/pp8/survey-bomb/assets/39dce078.png",
        nie = "main/pp8/survey-bomb/assets/2686fbda.png",
        iie = Je({
            components: {
                TorchSVG: RS
            },
            props: {
                teamIndex: Number,
                teamName: String,
                torches: Number
            },
            data() {
                return {
                    imgSrc: new URL(Object.assign({
                        "../assets/ribbon-team-0.png": rie,
                        "../assets/ribbon-team-1.png": nie
                    })[`../assets/ribbon-team-${this.teamIndex}.png`], self.location).href
                }
            }
        }),
        sie = {
            class: "info",
            "aria-label": "team section"
        },
        aie = {
            class: "torches"
        },
        oie = ["src"],
        cie = {
            class: "team"
        };

    function lie(e, t, r, n, s, o) {
        const c = vt("TorchSVG");
        return F(), V("div", sie, [z("div", aie, [(F(!0), V(ze, null, Qr(e.torches, u => (F(), Nt(c, {
            key: `torch${u}`,
            class: "torch"
        }))), 128))]), z("img", {
            class: "ribbon",
            src: e.imgSrc,
            alt: "team ribbon"
        }, null, 8, oie), z("span", cie, De(e.teamName), 1)])
    }
    const uie = He(iie, [
            ["render", lie],
            ["__scopeId", "data-v-c5a4fcff"]
        ]),
        fie = Je({
            components: {
                TeamInfo: uie
            },
            props: {
                avatar: Object,
                info: Object,
                player: Object,
                teams: Object
            },
            emits: ["reset"],
            data() {
                return {
                    loseMsg: this.$ts("WAITING.LOSE.TEXT"),
                    nextMsg: this.$ts("WAITING.UP_NEXT.TEXT"),
                    winMsg: this.$ts("WAITING.WIN.TEXT")
                }
            },
            computed: {
                finalChanceMsg() {
                    const e = this.isTeamFinalChance(this.teamIndexes.current),
                        t = this.isTeamFinalChance(this.teamIndexes.rival);
                    return e && t ? this.$t("WAITING.FINAL_CHANCE.BOTH") : t ? this.$t("WAITING.FINAL_CHANCE.RIVAL") : e ? this.$t("WAITING.FINAL_CHANCE.CURRENT") : "An unknown team may be doomed by the next choice!"
                },
                hasTeamData() {
                    return !(!this.teams || !this.teams[this.teamIndexes.current] || !this.teams[this.teamIndexes.rival])
                },
                message() {
                    var e, t;
                    if (this.$vibrate(), this.hasTeamData) {
                        if ((e = this.player) != null && e.over) return (this.info && this.info.teamIndex == null && this.info.torches != null ? this.info.torches > 0 : this.teams[this.teamIndexes.current].torches >= this.teams[this.teamIndexes.rival].torches) ? {
                            class: "win",
                            header: this.$t("WAITING.WIN.HEADER"),
                            text: this.winMsg
                        } : {
                            class: "lose",
                            header: this.$t("WAITING.LOSE.HEADER"),
                            text: this.loseMsg
                        };
                        if (this.isTeamFinalChance(this.teamIndexes.current) || this.isTeamFinalChance(this.teamIndexes.rival)) return {
                            class: "finalChance",
                            header: this.$t("WAITING.FINAL_CHANCE.HEADER"),
                            text: this.finalChanceMsg
                        }
                    }
                    return this.$ecast.role === "player" && ((t = this.player) == null ? void 0 : t.next) ? {
                        class: "next",
                        header: this.$t("WAITING.UP_NEXT.HEADER"),
                        text: this.nextMsg
                    } : null
                },
                teamIndexes() {
                    var e;
                    return ((e = this.info) == null ? void 0 : e.teamIndex) == null ? {
                        current: 0,
                        rival: 1
                    } : {
                        current: this.info.teamIndex,
                        rival: this.info.teamIndex === 0 ? 1 : 0
                    }
                }
            },
            watch: {
                "player.over": function(t) {
                    t && this.$ecast.role === "audience" && (this.$emit("reset"), At.remove("pm-answers", "code"), At.remove("pm-torches", "code"))
                }
            },
            methods: {
                isTeamFinalChance(e) {
                    var t;
                    return !this.hasTeamData || ((t = this.info) == null ? void 0 : t.teamIndex) == null ? !1 : this.teams[e].finalChance
                },
                async onSkip() {
                    var e;
                    if (!!((e = this.player) != null && e.responseKey)) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "skip"
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                }
            }
        }),
        die = e => (hl("data-v-a9953353"), e = e(), pl(), e),
        hie = {
            class: "waiting"
        },
        pie = die(() => z("div", {
            class: "logo"
        }, null, -1)),
        gie = {
            key: 0,
            class: "avatar"
        },
        mie = ["src", "alt"],
        vie = {
            key: 0,
            class: "name"
        },
        yie = {
            key: 1,
            class: "teams"
        },
        _ie = {
            class: "versus"
        },
        bie = ["textContent"],
        Eie = ["textContent"],
        Tie = {
            key: 3,
            class: "actions"
        };

    function Sie(e, t, r, n, s, o) {
        var f;
        const c = vt("TeamInfo"),
            u = Kt("t");
        return F(), V("div", hie, [pie, e.avatar ? (F(), V("div", gie, [z("img", {
            src: e.avatar.on,
            alt: e.avatar.alt
        }, null, 8, mie), e.info ? (F(), V("div", vie, De(e.info.name), 1)) : Oe("", !0)])) : Oe("", !0), e.hasTeamData ? (F(), V("div", yie, [at(c, {
            "team-index": e.teamIndexes.current,
            "team-name": e.teams[e.teamIndexes.current].name,
            torches: e.teams[e.teamIndexes.current].torches
        }, null, 8, ["team-index", "team-name", "torches"]), qe(z("div", _ie, null, 512), [
            [u, "VERSUS"]
        ]), at(c, {
            "team-index": e.teamIndexes.rival,
            "team-name": e.teams[e.teamIndexes.rival].name,
            torches: e.teams[e.teamIndexes.rival].torches
        }, null, 8, ["team-index", "team-name", "torches"])])) : Oe("", !0), e.message ? (F(), V("div", {
            key: 2,
            class: Fe(["message", e.message.class])
        }, [z("p", {
            class: "header",
            textContent: De(e.message.header)
        }, null, 8, bie), z("p", {
            class: "text",
            textContent: De(e.message.text)
        }, null, 8, Eie)], 2)) : (F(), V("div", Tie, [(f = e.player) != null && f.canSkip ? qe((F(), V("button", {
            key: 0,
            onClick: t[0] || (t[0] = (...h) => e.onSkip && e.onSkip(...h))
        }, null, 512)), [
            [u, "WAITING.SKIP_TUTORIALS"]
        ]) : Oe("", !0)]))])
    }
    const wie = He(fie, [
        ["render", Sie],
        ["__scopeId", "data-v-a9953353"]
    ]);
    var Oie = x1,
        Iie = tn,
        Cie = "Expected a function";

    function $ie(e, t, r) {
        var n = !0,
            s = !0;
        if (typeof e != "function") throw new TypeError(Cie);
        return Iie(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), Oie(e, t, {
            leading: n,
            maxWait: t,
            trailing: s
        })
    }
    var Xb = $ie;
    const Aie = Je({
            components: {
                ChoiceButton: Bp
            },
            props: {
                audience: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["correct", "incorrect"],
            data() {
                return {
                    answers: new Array(this.audience.ruleset.length).fill(-1),
                    nextRule: this.audience.ruleset[0],
                    decrementPNCounter: null,
                    incrementPNCounter: null
                }
            },
            computed: {
                correctAnswers() {
                    return this.correctChoices.filter(({
                        index: e
                    }) => this.answers.includes(e))
                },
                correctChoices() {
                    return this.audience.choices.filter(e => this.isCorrect(e))
                },
                pnCounterPrefix() {
                    return `${this.audience.voteID}:${this.audience.questionIndex}`
                },
                rankedRules() {
                    return this.audience.choices.filter(e => this.isRanked(e)).map(e => e.rank - 1).filter(e => this.audience.ruleset.includes(e))
                },
                remainingChoices() {
                    if (this.audience.ordered) return this.answers[this.rankedRules.length] === -1 ? 1 : 0;
                    const e = this.answers.filter(t => t !== -1 && !this.correctAnswers.some(({
                        index: r
                    }) => t === r));
                    return Math.max(0, this.audience.ruleset.length - this.correctChoices.length - e.length)
                }
            },
            watch: {
                "audience.choices": function(t, r) {
                    t.filter(s => !r.some(o => o.rank === s.rank)).forEach(s => {
                        let o = !1,
                            c = !1;
                        this.audience.ordered ? (c = this.isIncorrect(s), c && (this.answers[this.audience.ruleset[s.rank - 1]] = -1)) : this.isChosen(s) && (o = this.isCorrect(s), c = this.isIncorrect(s)), o && this.$emit("correct"), c && this.$emit("incorrect")
                    }), this.nextRule = this.getNextRule()
                },
                "audience.questionIndex": function() {
                    this.answers = new Array(this.audience.ruleset.length).fill(-1), At.remove("pm-answers", "code")
                },
                "audience.voteID": function() {
                    const t = this.answers[this.rankedRules.length];
                    t !== -1 && this.incrementPNCounter(`${this.pnCounterPrefix}:${t}`)
                }
            },
            created() {
                At.get("pm-answers", "code") && (this.answers = JSON.parse(At.get("pm-answers", "code"))), this.decrementPNCounter = Xb(this._decrementPNCounter.bind(this), 250), this.incrementPNCounter = Xb(this._incrementPNCounter.bind(this), 250), this.nextRule = this.getNextRule()
            },
            methods: {
                getNextRule() {
                    let e = this.answers.findIndex(t => t === -1);
                    return this.audience.ordered && (e = this.rankedRules.length), this.audience.ruleset[e]
                },
                getNumberWithOrdinal(e) {
                    return Nre(e)
                },
                getOrder(e) {
                    return this.audience.ordered && this.isChosen(e) ? this.audience.ruleset[this.rankedRules.length] + 1 : 0
                },
                isChosen(e) {
                    return this.answers.includes(e.index)
                },
                isCorrect(e) {
                    if (this.audience.ordered) {
                        const t = this.audience.ruleset.findIndex(r => r === e.rank - 1);
                        return t === -1 ? !1 : this.answers[t] === e.index
                    }
                    return this.isRanked(e) && this.audience.ruleset.includes(e.rank - 1)
                },
                isIncorrect(e) {
                    if (this.audience.ordered) {
                        const t = this.audience.ruleset.findIndex(r => r === e.rank - 1);
                        return t === -1 ? !1 : this.answers[t] !== e.index
                    }
                    return this.isRanked(e) && !this.audience.ruleset.includes(e.rank - 1)
                },
                isRanked(e) {
                    return !!e.rank
                },
                shouldDisable(e) {
                    return this.isRanked(e) ? !0 : !this.isChosen(e) && this.remainingChoices === 0
                },
                onChoose(e) {
                    const t = `${this.pnCounterPrefix}:${e}`;
                    if (this.answers.includes(e)) {
                        this.decrementPNCounter(t);
                        const r = this.answers.findIndex(n => n === e);
                        this.audience.ordered ? this.answers[r] = -1 : (this.answers.splice(r, 1), this.answers.push(-1))
                    } else this.incrementPNCounter(t), this.answers[this.audience.ruleset.findIndex(r => r === this.nextRule)] = e;
                    this.nextRule = this.getNextRule(), At.set("pm-answers", JSON.stringify(this.answers), "code")
                },
                async _decrementPNCounter(e) {
                    try {
                        await this.$ecast.decrementPNCounter(e)
                    } catch (t) {
                        t instanceof fi.EcastEntityNotFound ? console.warn(`PNCounter ${e} not found, can't subtract vote`) : this.$handleEcastError(t)
                    }
                },
                async _incrementPNCounter(e) {
                    try {
                        await this.$ecast.incrementPNCounter(e)
                    } catch (t) {
                        t instanceof fi.EcastEntityNotFound ? console.warn(`PNCounter ${e} not found, can't add vote`) : this.$handleEcastError(t)
                    }
                }
            }
        }),
        Nie = {
            class: "playalong"
        },
        Rie = {
            class: "instructions"
        },
        Lie = {
            class: "question"
        };

    function kie(e, t, r, n, s, o) {
        const c = vt("ChoiceButton"),
            u = Kt("bb");
        return F(), V("div", Nie, [z("h1", Rie, [e.audience.ordered ? (F(), V(ze, {
            key: 0
        }, [en(De(e.$t("AUDIENCE.INSTRUCTION.ORDERED", {
            rank: e.getNumberWithOrdinal(e.audience.ruleset[e.rankedRules.length] + 1)
        })), 1)], 64)) : (F(), V(ze, {
            key: 1
        }, [en(De(e.$t("AUDIENCE.INSTRUCTION.UNORDERED", {
            amount: e.audience.ruleset.length
        })), 1)], 64))]), qe(z("div", Lie, null, 512), [
            [u, e.audience.question]
        ]), (F(!0), V(ze, null, Qr(e.audience.choices, f => (F(), V("div", {
            key: `choice${f.index}`
        }, [at(c, {
            choice: f,
            chosen: e.isChosen(f) || e.audience.ordered && e.isIncorrect(f),
            correct: e.isCorrect(f),
            disabled: e.shouldDisable(f),
            incorrect: e.isIncorrect(f),
            rank: f.rank || e.getOrder(f),
            removable: "",
            onChoose: h => e.onChoose(f.index)
        }, null, 8, ["choice", "chosen", "correct", "disabled", "incorrect", "rank", "onChoose"])]))), 128)), z("div", null, De(e.$t("AUDIENCE.REMAINING", {
            remaining: e.remainingChoices
        })), 1)])
    }
    const Pie = He(Aie, [
            ["render", kie],
            ["__scopeId", "data-v-a31a81bf"]
        ]),
        xie = Je({
            components: {
                NameHeader: qne,
                Choices: Hre,
                Lobby: xne,
                PostGame: Jne,
                Survey: tie,
                Waiting: wie,
                Playalong: Pie
            },
            ecastKeys: {
                audience: "audiencePlayer",
                info: ({
                    id: e
                }) => `info:${e}`,
                player: ({
                    id: e
                }) => `player:${e}`,
                teams: "teams"
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
            themeColor: "#582664",
            props: {
                artifact: Object,
                audience: Object,
                info: Object,
                player: Object,
                teams: Object
            },
            data() {
                return {
                    audienceInfo: {
                        name: "AUDIENCE"
                    }
                }
            },
            computed: {
                background() {
                    var t, r;
                    if (!this.audience && !this.player) return "bg-fallback";
                    switch (((t = this.audience) == null ? void 0 : t.kind) || ((r = this.player) == null ? void 0 : r.kind)) {
                        case "choices":
                            return "bg-choices";
                        case "lobby":
                        case "survey":
                        case "waiting":
                            return "bg-game";
                        case "postGame":
                        default:
                            return "bg-fallback"
                    }
                },
                screen() {
                    var e;
                    if (this.$ecast.role === "audience" && this.audience) switch (this.audience.kind) {
                        case "choices":
                            return this.audience.streamerMode ? {
                                name: "Choices",
                                props: {
                                    player: this.audience
                                }
                            } : {
                                name: "Playalong",
                                props: {
                                    audience: this.audience
                                },
                                on: {
                                    correct: () => {
                                        this.audienceInfo.torches != null && this.setAudienceTorches(this.audienceInfo.torches + 1)
                                    },
                                    incorrect: () => {
                                        this.audienceInfo.torches != null && this.setAudienceTorches(this.audienceInfo.torches - 1)
                                    }
                                }
                            };
                        case "postGame":
                            return {
                                name: "PostGame", props: {
                                    artifact: this.artifact,
                                    player: this.audience
                                }
                            };
                        case "survey":
                            return {
                                name: "Survey", props: {
                                    player: this.audience
                                }
                            };
                        case "waiting":
                            return {
                                name: "Waiting", props: {
                                    info: this.audienceInfo,
                                    player: this.audience,
                                    teams: this.teams
                                }, on: {
                                    reset: () => {
                                        this.audienceInfo.torches != null && this.setAudienceTorches(1)
                                    }
                                }
                            }
                    } else if (this.$ecast.role === "player" && this.player) switch (this.player.kind) {
                        case "choices":
                            return {
                                name: "Choices", props: {
                                    player: this.player
                                }
                            };
                        case "lobby":
                            return {
                                name: "Lobby", props: {
                                    info: this.info,
                                    player: this.player
                                }
                            };
                        case "postGame":
                            return {
                                name: "PostGame", props: {
                                    artifact: this.artifact,
                                    player: this.player
                                }
                            };
                        case "survey":
                            return {
                                name: "Survey", props: {
                                    player: this.player
                                }
                            };
                        case "waiting":
                            return {
                                name: "Waiting", props: {
                                    avatar: (e = this.info) == null ? void 0 : e.avatar,
                                    info: this.info,
                                    player: this.player,
                                    teams: this.teams
                                }
                            }
                    }
                    return {
                        name: "Waiting",
                        props: {},
                        on: {}
                    }
                },
                showAudienceNameHeader() {
                    var e, t;
                    return ((e = this.audience) == null ? void 0 : e.kind) === "survey" || ((t = this.audience) == null ? void 0 : t.kind) === "choices" && !this.audience.streamerMode
                },
                showPlayerNameHeader() {
                    var e;
                    return !(!this.info || ((e = this.player) == null ? void 0 : e.kind) !== "survey")
                }
            },
            watch: {
                audience: function() {
                    var t;
                    (t = this.audience) != null && t.streamerMode ? (this.audienceInfo.teamIndex = 1, this.audienceInfo.torches = this.teams && this.teams[1].torches) : this.audienceInfo.torches = At.get("pm-torches", "code") ? JSON.parse(At.get("pm-torches", "code")) : 1
                },
                "player.kind": "setThemeColor",
                "audience.kind": "setThemeColor"
            },
            methods: {
                setAudienceTorches(e) {
                    this.audienceInfo.torches = Math.max(0, e), At.isSupported && At.set("pm-torches", JSON.stringify(this.audienceInfo.torches), "code")
                },
                setThemeColor(e) {
                    switch (e) {
                        case "choices":
                            break;
                        case "lobby":
                        case "survey":
                        case "waiting":
                            this.$setThemeColor("#5f2d60");
                            break;
                        case "postGame":
                        default:
                            this.$setThemeColor("#0e5767")
                    }
                }
            }
        }),
        Die = {
            class: "constrain"
        };

    function Mie(e, t, r, n, s, o) {
        var u;
        const c = vt("NameHeader");
        return F(), V("div", {
            class: Fe(["poll-mine", e.background])
        }, [z("div", Die, [e.showPlayerNameHeader ? (F(), Nt(c, {
            key: 0,
            name: e.info.name,
            "team-index": e.info.teamIndex,
            torches: e.teams && e.teams[e.info.teamIndex] && e.teams[e.info.teamIndex].torches
        }, null, 8, ["name", "team-index", "torches"])) : e.showAudienceNameHeader ? (F(), Nt(c, {
            key: 1,
            name: e.audienceInfo.name,
            "team-index": e.audienceInfo.teamIndex,
            torches: e.audienceInfo.torches
        }, null, 8, ["name", "team-index", "torches"])) : Oe("", !0), (F(), Nt(Ih(e.screen.name), El(e.screen.props, PL((u = e.screen.on) != null ? u : {})), null, 16))])], 2)
    }
    const Uie = He(xie, [
        ["render", Mie]
    ]);
    Gte({
        MainView: Uie,
        messages: Qte
    })
});
export default Fie();
//# sourceMappingURL=90f7c805.js.map