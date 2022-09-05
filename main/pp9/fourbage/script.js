var nR = Object.defineProperty;
var iR = (e, t, r) => t in e ? nR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var sR = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (iR(e, typeof t != "symbol" ? t + "" : t, r), r);
var Lne = sR((kne, CS) => {
    const aR = function() {
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
    aR();

    function hh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const oR = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        lR = hh(oR);

    function Kb(e) {
        return !!e || e === ""
    }

    function ac(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Wt(n) ? fR(n) : ac(n);
                if (s)
                    for (const o in s) t[o] = s[o]
            }
            return t
        } else {
            if (Wt(e)) return e;
            if (Nt(e)) return e
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
        if (Wt(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = Me(e[r]);
                n && (t += n + " ")
            } else if (Nt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function dR(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = oc(e[n], t[n]);
        return r
    }

    function oc(e, t) {
        if (e === t) return !0;
        let r = vv(e),
            n = vv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = za(e), n = za(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? dR(e, t) : !1;
        if (r = Nt(e), n = Nt(t), r || n) {
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

    function Yb(e, t) {
        return e.findIndex(r => oc(r, t))
    }
    const yt = e => Wt(e) ? e : e == null ? "" : ke(e) || Nt(e) && (e.toString === Xb || !He(e.toString)) ? JSON.stringify(e, qb, 2) : String(e),
        qb = (e, t) => t && t.__v_isRef ? qb(e, t.value) : Ds(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : cc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : Nt(t) && !ke(t) && !Jb(t) ? String(t) : t,
        gt = {},
        xs = [],
        cn = () => {},
        hR = () => !1,
        pR = /^on[^a-z]/,
        lc = e => pR.test(e),
        ph = e => e.startsWith("onUpdate:"),
        tr = Object.assign,
        gh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        gR = Object.prototype.hasOwnProperty,
        Ze = (e, t) => gR.call(e, t),
        ke = Array.isArray,
        Ds = e => co(e) === "[object Map]",
        cc = e => co(e) === "[object Set]",
        vv = e => co(e) === "[object Date]",
        He = e => typeof e == "function",
        Wt = e => typeof e == "string",
        za = e => typeof e == "symbol",
        Nt = e => e !== null && typeof e == "object",
        zb = e => Nt(e) && He(e.then) && He(e.catch),
        Xb = Object.prototype.toString,
        co = e => Xb.call(e),
        mR = e => co(e).slice(8, -1),
        Jb = e => co(e) === "[object Object]",
        mh = e => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Nl = hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        uc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        vR = /-(\w)/g,
        On = uc(e => e.replace(vR, (t, r) => r ? r.toUpperCase() : "")),
        yR = /\B([A-Z])/g,
        ss = uc(e => e.replace(yR, "-$1").toLowerCase()),
        fc = uc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        hf = uc(e => e ? `on${fc(e)}` : ""),
        Xa = (e, t) => !Object.is(e, t),
        Rl = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Ul = (e, t, r) => {
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
    let yv;
    const _R = () => yv || (yv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
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

    function bR(e) {
        return new Zb(e)
    }

    function ER(e, t = bn) {
        t && t.active && t.effects.push(e)
    }
    const vh = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        Qb = e => (e.w & fi) > 0,
        eE = e => (e.n & fi) > 0,
        TR = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= fi
        },
        SR = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    Qb(s) && !eE(s) ? s.delete(e) : t[r++] = s, s.w &= ~fi, s.n &= ~fi
                }
                t.length = r
            }
        },
        ad = new WeakMap;
    let Pa = 0,
        fi = 1;
    const od = 30;
    let an;
    const Xi = Symbol(""),
        ld = Symbol("");
    class yh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, ER(this, n)
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
                return this.parent = an, an = this, li = !0, fi = 1 << ++Pa, Pa <= od ? TR(this) : _v(this), this.fn()
            } finally {
                Pa <= od && SR(this), fi = 1 << --Pa, an = this.parent, li = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            an === this ? this.deferStop = !0 : this.active && (_v(this), this.onStop && this.onStop(), this.active = !1)
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
    const tE = [];

    function ta() {
        tE.push(li), li = !1
    }

    function ra() {
        const e = tE.pop();
        li = e === void 0 ? !0 : e
    }

    function xr(e, t, r) {
        if (li && an) {
            let n = ad.get(e);
            n || ad.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = vh()), rE(s)
        }
    }

    function rE(e, t) {
        let r = !1;
        Pa <= od ? eE(e) || (e.n |= fi, r = !Qb(e)) : r = !e.has(an), r && (e.add(an), an.deps.push(e))
    }

    function Fn(e, t, r, n, s, o) {
        const l = ad.get(e);
        if (!l) return;
        let u = [];
        if (t === "clear") u = [...l.values()];
        else if (r === "length" && ke(e)) l.forEach((f, h) => {
            (h === "length" || h >= n) && u.push(f)
        });
        else switch (r !== void 0 && u.push(l.get(r)), t) {
            case "add":
                ke(e) ? mh(r) && u.push(l.get("length")) : (u.push(l.get(Xi)), Ds(e) && u.push(l.get(ld)));
                break;
            case "delete":
                ke(e) || (u.push(l.get(Xi)), Ds(e) && u.push(l.get(ld)));
                break;
            case "set":
                Ds(e) && u.push(l.get(Xi));
                break
        }
        if (u.length === 1) u[0] && cd(u[0]);
        else {
            const f = [];
            for (const h of u) h && f.push(...h);
            cd(vh(f))
        }
    }

    function cd(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && bv(n);
        for (const n of r) n.computed || bv(n)
    }

    function bv(e, t) {
        (e !== an || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const OR = hh("__proto__,__v_isRef,__isVue"),
        nE = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(za)),
        wR = _h(),
        CR = _h(!1, !0),
        $R = _h(!0),
        Ev = IR();

    function IR() {
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

    function _h(e = !1, t = !1) {
        return function(n, s, o) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && o === (e ? t ? HR : lE : t ? oE : aE).get(n)) return n;
            const l = ke(n);
            if (!e && l && Ze(Ev, s)) return Reflect.get(Ev, s, o);
            const u = Reflect.get(n, s, o);
            return (za(s) ? nE.has(s) : OR(s)) || (e || xr(n, "get", s), t) ? u : Qt(u) ? l && mh(s) ? u : u.value : Nt(u) ? e ? cE(u) : Un(u) : u
        }
    }
    const AR = iE(),
        NR = iE(!0);

    function iE(e = !1) {
        return function(r, n, s, o) {
            let l = r[n];
            if (Ja(l) && Qt(l) && !Qt(s)) return !1;
            if (!e && !Ja(s) && (ud(s) || (s = st(s), l = st(l)), !ke(r) && Qt(l) && !Qt(s))) return l.value = s, !0;
            const u = ke(r) && mh(n) ? Number(n) < r.length : Ze(r, n),
                f = Reflect.set(r, n, s, o);
            return r === st(o) && (u ? Xa(s, l) && Fn(r, "set", n, s) : Fn(r, "add", n, s)), f
        }
    }

    function RR(e, t) {
        const r = Ze(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Fn(e, "delete", t, void 0), n
    }

    function LR(e, t) {
        const r = Reflect.has(e, t);
        return (!za(t) || !nE.has(t)) && xr(e, "has", t), r
    }

    function PR(e) {
        return xr(e, "iterate", ke(e) ? "length" : Xi), Reflect.ownKeys(e)
    }
    const sE = {
            get: wR,
            set: AR,
            deleteProperty: RR,
            has: LR,
            ownKeys: PR
        },
        kR = {
            get: $R,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        xR = tr({}, sE, {
            get: CR,
            set: NR
        }),
        bh = e => e,
        dc = e => Reflect.getPrototypeOf(e);

    function fl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = st(e),
            o = st(t);
        r || (t !== o && xr(s, "get", t), xr(s, "get", o));
        const {
            has: l
        } = dc(s), u = n ? bh : r ? Sh : Za;
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
        return e = e.__v_raw, !t && xr(st(e), "iterate", Xi), Reflect.get(e, "size", e)
    }

    function Tv(e) {
        e = st(e);
        const t = st(this);
        return dc(t).has.call(t, e) || (t.add(e), Fn(t, "add", e, e)), this
    }

    function Sv(e, t) {
        t = st(t);
        const r = st(this),
            {
                has: n,
                get: s
            } = dc(r);
        let o = n.call(r, e);
        o || (e = st(e), o = n.call(r, e));
        const l = s.call(r, e);
        return r.set(e, t), o ? Xa(t, l) && Fn(r, "set", e, t) : Fn(r, "add", e, t), this
    }

    function Ov(e) {
        const t = st(this),
            {
                has: r,
                get: n
            } = dc(t);
        let s = r.call(t, e);
        s || (e = st(e), s = r.call(t, e)), n && n.call(t, e);
        const o = t.delete(e);
        return s && Fn(t, "delete", e, void 0), o
    }

    function wv() {
        const e = st(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Fn(e, "clear", void 0, void 0), r
    }

    function pl(e, t) {
        return function(n, s) {
            const o = this,
                l = o.__v_raw,
                u = st(l),
                f = t ? bh : e ? Sh : Za;
            return !e && xr(u, "iterate", Xi), l.forEach((h, g) => n.call(s, f(h), f(g), o))
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
                g = r ? bh : t ? Sh : Za;
            return !t && xr(o, "iterate", f ? ld : Xi), {
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

    function Jn(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function DR() {
        const e = {
                get(o) {
                    return fl(this, o)
                },
                get size() {
                    return hl(this)
                },
                has: dl,
                add: Tv,
                set: Sv,
                delete: Ov,
                clear: wv,
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
                add: Tv,
                set: Sv,
                delete: Ov,
                clear: wv,
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
                add: Jn("add"),
                set: Jn("set"),
                delete: Jn("delete"),
                clear: Jn("clear"),
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
                add: Jn("add"),
                set: Jn("set"),
                delete: Jn("delete"),
                clear: Jn("clear"),
                forEach: pl(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
            e[o] = gl(o, !1, !1), r[o] = gl(o, !0, !1), t[o] = gl(o, !1, !0), n[o] = gl(o, !0, !0)
        }), [e, r, t, n]
    }
    const [MR, FR, UR, BR] = DR();

    function Eh(e, t) {
        const r = t ? e ? BR : UR : e ? FR : MR;
        return (n, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(Ze(r, s) && s in n ? r : n, s, o)
    }
    const jR = {
            get: Eh(!1, !1)
        },
        GR = {
            get: Eh(!1, !0)
        },
        WR = {
            get: Eh(!0, !1)
        },
        aE = new WeakMap,
        oE = new WeakMap,
        lE = new WeakMap,
        HR = new WeakMap;

    function VR(e) {
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
        return e.__v_skip || !Object.isExtensible(e) ? 0 : VR(mR(e))
    }

    function Un(e) {
        return Ja(e) ? e : Th(e, !1, sE, jR, aE)
    }

    function YR(e) {
        return Th(e, !1, xR, GR, oE)
    }

    function cE(e) {
        return Th(e, !0, kR, WR, lE)
    }

    function Th(e, t, r, n, s) {
        if (!Nt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const o = s.get(e);
        if (o) return o;
        const l = KR(e);
        if (l === 0) return e;
        const u = new Proxy(e, l === 2 ? n : r);
        return s.set(e, u), u
    }

    function Ms(e) {
        return Ja(e) ? Ms(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function Ja(e) {
        return !!(e && e.__v_isReadonly)
    }

    function ud(e) {
        return !!(e && e.__v_isShallow)
    }

    function uE(e) {
        return Ms(e) || Ja(e)
    }

    function st(e) {
        const t = e && e.__v_raw;
        return t ? st(t) : e
    }

    function fE(e) {
        return Ul(e, "__v_skip", !0), e
    }
    const Za = e => Nt(e) ? Un(e) : e,
        Sh = e => Nt(e) ? cE(e) : e;

    function dE(e) {
        li && an && (e = st(e), rE(e.dep || (e.dep = vh())))
    }

    function hE(e, t) {
        e = st(e), e.dep && cd(e.dep)
    }

    function Qt(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function on(e) {
        return pE(e, !1)
    }

    function qR(e) {
        return pE(e, !0)
    }

    function pE(e, t) {
        return Qt(e) ? e : new zR(e, t)
    }
    class zR {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : st(t), this._value = r ? t : Za(t)
        }
        get value() {
            return dE(this), this._value
        }
        set value(t) {
            t = this.__v_isShallow ? t : st(t), Xa(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Za(t), hE(this))
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

    function gE(e) {
        return Ms(e) ? e : new Proxy(e, JR)
    }
    class ZR {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new yh(t, () => {
                this._dirty || (this._dirty = !0, hE(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = st(this);
            return dE(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }

    function QR(e, t, r = !1) {
        let n, s;
        const o = He(e);
        return o ? (n = e, s = cn) : (n = e.get, s = e.set), new ZR(n, s, o || !s, r)
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

    function Xr(e, t, r, n) {
        if (He(e)) {
            const o = ci(e, t, r, n);
            return o && zb(o) && o.catch(l => {
                hc(l, t, r)
            }), o
        }
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(Xr(e[o], t, r, n));
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
        eL(e, r, s, n)
    }

    function eL(e, t, r, n = !0) {
        console.error(e)
    }
    let jl = !1,
        fd = !1;
    const Pr = [];
    let Mn = 0;
    const Ma = [];
    let ka = null,
        $s = 0;
    const Fa = [];
    let ri = null,
        Is = 0;
    const mE = Promise.resolve();
    let Oh = null,
        dd = null;

    function tL(e) {
        const t = Oh || mE;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function rL(e) {
        let t = Mn + 1,
            r = Pr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Qa(Pr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function vE(e) {
        (!Pr.length || !Pr.includes(e, jl && e.allowRecurse ? Mn + 1 : Mn)) && e !== dd && (e.id == null ? Pr.push(e) : Pr.splice(rL(e.id), 0, e), yE())
    }

    function yE() {
        !jl && !fd && (fd = !0, Oh = mE.then(EE))
    }

    function nL(e) {
        const t = Pr.indexOf(e);
        t > Mn && Pr.splice(t, 1)
    }

    function _E(e, t, r, n) {
        ke(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e), yE()
    }

    function iL(e) {
        _E(e, ka, Ma, $s)
    }

    function sL(e) {
        _E(e, ri, Fa, Is)
    }

    function pc(e, t = null) {
        if (Ma.length) {
            for (dd = t, ka = [...new Set(Ma)], Ma.length = 0, $s = 0; $s < ka.length; $s++) ka[$s]();
            ka = null, $s = 0, dd = null, pc(e, t)
        }
    }

    function bE(e) {
        if (pc(), Fa.length) {
            const t = [...new Set(Fa)];
            if (Fa.length = 0, ri) {
                ri.push(...t);
                return
            }
            for (ri = t, ri.sort((r, n) => Qa(r) - Qa(n)), Is = 0; Is < ri.length; Is++) ri[Is]();
            ri = null, Is = 0
        }
    }
    const Qa = e => e.id == null ? 1 / 0 : e.id;

    function EE(e) {
        fd = !1, jl = !0, pc(e), Pr.sort((r, n) => Qa(r) - Qa(n));
        const t = cn;
        try {
            for (Mn = 0; Mn < Pr.length; Mn++) {
                const r = Pr[Mn];
                r && r.active !== !1 && ci(r, null, 14)
            }
        } finally {
            Mn = 0, Pr.length = 0, bE(), jl = !1, Oh = null, (Pr.length || Ma.length || Fa.length) && EE(e)
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
                    trim: E
                } = n[g] || gt;
            E && (s = r.map(C => C.trim())), y && (s = r.map(Bl))
        }
        let u, f = n[u = hf(t)] || n[u = hf(On(t))];
        !f && o && (f = n[u = hf(ss(t))]), f && Xr(f, e, 6, s);
        const h = n[u + "Once"];
        if (h) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[u]) return;
            e.emitted[u] = !0, Xr(h, e, 6, s)
        }
    }

    function TE(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const o = e.emits;
        let l = {},
            u = !1;
        if (!He(e)) {
            const f = h => {
                const g = TE(h, t, !0);
                g && (u = !0, tr(l, g))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !o && !u ? (n.set(e, null), null) : (ke(o) ? o.forEach(f => l[f] = null) : tr(l, o), n.set(e, l), l)
    }

    function gc(e, t) {
        return !e || !lc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, ss(t)) || Ze(e, t))
    }
    let or = null,
        mc = null;

    function Gl(e) {
        const t = or;
        return or = e, mc = e && e.type.__scopeId || null, t
    }

    function wh(e) {
        mc = e
    }

    function Ch() {
        mc = null
    }

    function Fs(e, t = or, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && Dv(-1);
            const o = Gl(t),
                l = e(...s);
            return Gl(o), n._d && Dv(1), l
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function pf(e) {
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
        const H = Gl(e);
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
                }) : G(o, null)), $ = t.props ? f : oL(f)
            }
        } catch (G) {
            Ba.length = 0, hc(G, e, 1), B = nt(Jr)
        }
        let q = B;
        if ($ && M !== !1) {
            const G = Object.keys($),
                {
                    shapeFlag: j
                } = q;
            G.length && j & 7 && (l && G.some(ph) && ($ = lL($, l)), q = di(q, $))
        }
        return r.dirs && (q = di(q), q.dirs = q.dirs ? q.dirs.concat(r.dirs) : r.dirs), r.transition && (q.transition = r.transition), B = q, Gl(H), B
    }
    const oL = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || lc(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        lL = (e, t) => {
            const r = {};
            for (const n in e)(!ph(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
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
            if (f & 16) return n ? Cv(n, l, h) : !!l;
            if (f & 8) {
                const g = t.dynamicProps;
                for (let y = 0; y < g.length; y++) {
                    const E = g[y];
                    if (l[E] !== n[E] && !gc(h, E)) return !0
                }
            }
        } else return (s || u) && (!u || !u.$stable) ? !0 : n === l ? !1 : n ? l ? Cv(n, l, h) : !0 : !!l;
        return !1
    }

    function Cv(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const o = n[s];
            if (t[o] !== e[o] && !gc(r, o)) return !0
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
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : sL(e)
    }

    function hL(e, t) {
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
    const $v = {};

    function Zi(e, t, r) {
        return SE(e, t, r)
    }

    function SE(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: o,
        onTrigger: l
    } = gt) {
        const u = qt;
        let f, h = !1,
            g = !1;
        if (Qt(e) ? (f = () => e.value, h = ud(e)) : Ms(e) ? (f = () => e, n = !0) : ke(e) ? (g = !0, h = e.some($ => Ms($) || ud($)), f = () => e.map($ => {
                if (Qt($)) return $.value;
                if (Ms($)) return zi($);
                if (He($)) return ci($, u, 2)
            })) : He(e) ? t ? f = () => ci(e, u, 2) : f = () => {
                if (!(u && u.isUnmounted)) return y && y(), Xr(e, u, 3, [E])
            } : f = cn, t && n) {
            const $ = f;
            f = () => zi($())
        }
        let y, E = $ => {
            y = B.onStop = () => {
                ci($, u, 4)
            }
        };
        if (to) return E = cn, t ? r && Xr(t, u, 3, [f(), g ? [] : void 0, E]) : f(), cn;
        let C = g ? [] : $v;
        const P = () => {
            if (!!B.active)
                if (t) {
                    const $ = B.run();
                    (n || h || (g ? $.some((H, q) => Xa(H, C[q])) : Xa($, C))) && (y && y(), Xr(t, u, 3, [$, C === $v ? void 0 : C, E]), C = $)
                } else B.run()
        };
        P.allowRecurse = !!t;
        let M;
        s === "sync" ? M = P : s === "post" ? M = () => Tr(P, u && u.suspense) : M = () => iL(P);
        const B = new yh(f, M);
        return t ? r ? P() : C = B.run() : s === "post" ? Tr(B.run.bind(B), u && u.suspense) : B.run(), () => {
            B.stop(), u && u.scope && gh(u.scope.effects, B)
        }
    }

    function pL(e, t, r) {
        const n = this.proxy,
            s = Wt(e) ? e.includes(".") ? OE(n, e) : () => n[e] : e.bind(n, n);
        let o;
        He(t) ? o = t : (o = t.handler, r = t);
        const l = qt;
        qs(this);
        const u = SE(s, o.bind(n), r);
        return l ? qs(l) : Qi(), u
    }

    function OE(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function zi(e, t) {
        if (!Nt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), Qt(e)) zi(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) zi(e[r], t);
        else if (cc(e) || Ds(e)) e.forEach(r => {
            zi(r, t)
        });
        else if (Jb(e))
            for (const r in e) zi(e[r], t);
        return e
    }

    function gL() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return $h(() => {
            e.isMounted = !0
        }), NE(() => {
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
                const r = is(),
                    n = gL();
                let s;
                return () => {
                    const o = t.default && $E(t.default(), !0);
                    if (!o || !o.length) return;
                    let l = o[0];
                    if (o.length > 1) {
                        for (const M of o)
                            if (M.type !== Jr) {
                                l = M;
                                break
                            }
                    }
                    const u = st(e),
                        {
                            mode: f
                        } = u;
                    if (n.isLeaving) return gf(l);
                    const h = Iv(l);
                    if (!h) return gf(l);
                    const g = hd(h, u, n, r);
                    pd(h, g);
                    const y = r.subTree,
                        E = y && Iv(y);
                    let C = !1;
                    const {
                        getTransitionKey: P
                    } = h.type;
                    if (P) {
                        const M = P();
                        s === void 0 ? s = M : M !== s && (s = M, C = !0)
                    }
                    if (E && E.type !== Jr && (!Hi(h, E) || C)) {
                        const M = hd(E, u, n, r);
                        if (pd(E, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, gf(l);
                        f === "in-out" && h.type !== Jr && (M.delayLeave = (B, $, H) => {
                            const q = CE(n, E);
                            q[String(E.key)] = E, B._leaveCb = () => {
                                $(), B._leaveCb = void 0, delete g.delayedLeave
                            }, g.delayedLeave = H
                        })
                    }
                    return l
                }
            }
        },
        wE = mL;

    function CE(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function hd(e, t, r, n) {
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
            onAppearCancelled: H
        } = t, q = String(e.key), G = CE(r, e), j = (le, ue) => {
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
                Ae && Hi(e, Ae) && Ae.el._leaveCb && Ae.el._leaveCb(), j(ue, [le])
            },
            enter(le) {
                let ue = f,
                    Ae = h,
                    $e = g;
                if (!r.isMounted)
                    if (s) ue = B || f, Ae = $ || h, $e = H || g;
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
                return hd(le, t, r, n)
            }
        };
        return oe
    }

    function gf(e) {
        if (vc(e)) return e = di(e), e.children = null, e
    }

    function Iv(e) {
        return vc(e) ? e.children ? e.children[0] : void 0 : e
    }

    function pd(e, t) {
        e.shapeFlag & 6 && e.component ? pd(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function $E(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let o = 0; o < e.length; o++) {
            let l = e[o];
            const u = r == null ? l.key : String(r) + String(l.key != null ? l.key : o);
            l.type === Qe ? (l.patchFlag & 128 && s++, n = n.concat($E(l.children, t, u))) : (t || l.type !== Jr) && n.push(u != null ? di(l, {
                key: u
            }) : l)
        }
        if (s > 1)
            for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
        return n
    }

    function at(e) {
        return He(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Ua = e => !!e.type.__asyncLoader,
        vc = e => e.type.__isKeepAlive;

    function vL(e, t) {
        IE(e, "a", t)
    }

    function yL(e, t) {
        IE(e, "da", t)
    }

    function IE(e, t, r = qt) {
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
            for (; s && s.parent;) vc(s.parent.vnode) && _L(n, t, r, s), s = s.parent
        }
    }

    function _L(e, t, r, n) {
        const s = yc(t, e, n, !0);
        Ih(() => {
            gh(n[t], s)
        }, r)
    }

    function yc(e, t, r = qt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                o = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    ta(), qs(r);
                    const u = Xr(t, r, e, l);
                    return Qi(), ra(), u
                });
            return n ? s.unshift(o) : s.push(o), o
        }
    }
    const Bn = e => (t, r = qt) => (!to || e === "sp") && yc(e, t, r),
        AE = Bn("bm"),
        $h = Bn("m"),
        bL = Bn("bu"),
        EL = Bn("u"),
        NE = Bn("bum"),
        Ih = Bn("um"),
        TL = Bn("sp"),
        SL = Bn("rtg"),
        OL = Bn("rtc");

    function wL(e, t = qt) {
        yc("ec", e, t)
    }

    function Ie(e, t) {
        const r = or;
        if (r === null) return e;
        const n = Sc(r) || r.proxy,
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
            f && (ta(), Xr(f, r, 8, [e.el, u, e, t]), ra())
        }
    }
    const Ah = "components",
        CL = "directives";

    function Yt(e, t) {
        return Nh(Ah, e, !0, t) || e
    }
    const RE = Symbol();

    function _c(e) {
        return Wt(e) ? Nh(Ah, e, !1) || e : e || RE
    }

    function At(e) {
        return Nh(CL, e)
    }

    function Nh(e, t, r = !0, n = !1) {
        const s = or || qt;
        if (s) {
            const o = s.type;
            if (e === Ah) {
                const u = t2(o, !1);
                if (u && (u === t || u === On(t) || u === fc(On(t)))) return o
            }
            const l = Av(s[e] || o[e], t) || Av(s.appContext[e], t);
            return !l && n ? o : l
        }
    }

    function Av(e, t) {
        return e && (e[t] || e[On(t)] || e[fc(On(t))])
    }

    function un(e, t, r, n) {
        let s;
        const o = r && r[n];
        if (ke(e) || Wt(e)) {
            s = new Array(e.length);
            for (let l = 0, u = e.length; l < u; l++) s[l] = t(e[l], l, void 0, o && o[l])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, o && o[l])
        } else if (Nt(e))
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

    function $L(e, t, r = {}, n, s) {
        if (or.isCE || or.parent && Ua(or.parent) && or.parent.isCE) return nt("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let o = e[t];
        o && o._c && (o._d = !1), Y();
        const l = o && LE(o(r)),
            u = Or(Qe, {
                key: r.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), o && o._c && (o._d = !0), u
    }

    function LE(e) {
        return e.some(t => Vl(t) ? !(t.type === Jr || t.type === Qe && !LE(t.children)) : !0) ? e : null
    }
    const gd = e => e ? VE(e) ? Sc(e) || e.proxy : gd(e.parent) : null,
        Wl = tr(Object.create(null), {
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
            $options: e => kE(e),
            $forceUpdate: e => e.f || (e.f = () => vE(e.update)),
            $nextTick: e => e.n || (e.n = tL.bind(e.proxy)),
            $watch: e => pL.bind(e)
        }),
        IL = {
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
                        if (n !== gt && Ze(n, t)) return l[t] = 1, n[t];
                        if (s !== gt && Ze(s, t)) return l[t] = 2, s[t];
                        if ((h = e.propsOptions[0]) && Ze(h, t)) return l[t] = 3, o[t];
                        if (r !== gt && Ze(r, t)) return l[t] = 4, r[t];
                        md && (l[t] = 0)
                    }
                }
                const g = Wl[t];
                let y, E;
                if (g) return t === "$attrs" && xr(e, "get", t), g(e);
                if ((y = u.__cssModules) && (y = y[t])) return y;
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
                return !!r[l] || e !== gt && Ze(e, l) || t !== gt && Ze(t, l) || (u = o[0]) && Ze(u, l) || Ze(n, l) || Ze(Wl, l) || Ze(s.config.globalProperties, l)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : Ze(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let md = !0;

    function AL(e) {
        const t = kE(e),
            r = e.proxy,
            n = e.ctx;
        md = !1, t.beforeCreate && Nv(t.beforeCreate, e, "bc");
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
            beforeUnmount: H,
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
        if (h && NL(h, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const be in l) {
                const ve = l[be];
                He(ve) && (n[be] = ve.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            Nt(be) && (e.data = Un(be))
        }
        if (md = !0, o)
            for (const be in o) {
                const ve = o[be],
                    Se = He(ve) ? ve.bind(r, r) : He(ve.get) ? ve.get.bind(r, r) : cn,
                    Fe = !He(ve) && He(ve.set) ? ve.set.bind(r) : cn,
                    Ge = kr({
                        get: Se,
                        set: Fe
                    });
                Object.defineProperty(n, be, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => Ge.value,
                    set: et => Ge.value = et
                })
            }
        if (u)
            for (const be in u) PE(u[be], n, r, be);
        if (f) {
            const be = He(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ve => {
                hL(ve, be[ve])
            })
        }
        g && Nv(g, e, "c");

        function de(be, ve) {
            ke(ve) ? ve.forEach(Se => be(Se.bind(r))) : ve && be(ve.bind(r))
        }
        if (de(AE, y), de($h, E), de(bL, C), de(EL, P), de(vL, M), de(yL, B), de(wL, le), de(OL, J), de(SL, oe), de(NE, H), de(Ih, G), de(TL, ue), ke(Ae))
            if (Ae.length) {
                const be = e.exposed || (e.exposed = {});
                Ae.forEach(ve => {
                    Object.defineProperty(be, ve, {
                        get: () => r[ve],
                        set: Se => r[ve] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        j && e.render === cn && (e.render = j), $e != null && (e.inheritAttrs = $e), fe && (e.components = fe), Ce && (e.directives = Ce)
    }

    function NL(e, t, r = cn, n = !1) {
        ke(e) && (e = vd(e));
        for (const s in e) {
            const o = e[s];
            let l;
            Nt(o) ? "default" in o ? l = Ji(o.from || s, o.default, !0) : l = Ji(o.from || s) : l = Ji(o), Qt(l) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => l.value,
                set: u => l.value = u
            }) : t[s] = l
        }
    }

    function Nv(e, t, r) {
        Xr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function PE(e, t, r, n) {
        const s = n.includes(".") ? OE(r, n) : () => r[n];
        if (Wt(e)) {
            const o = t[e];
            He(o) && Zi(s, o)
        } else if (He(e)) Zi(s, e.bind(r));
        else if (Nt(e))
            if (ke(e)) e.forEach(o => PE(o, t, r, n));
            else {
                const o = He(e.handler) ? e.handler.bind(r) : t[e.handler];
                He(o) && Zi(s, o, e)
            }
    }

    function kE(e) {
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
        return u ? f = u : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(h => Hl(f, h, l, !0)), Hl(f, t, l)), o.set(t, f), f
    }

    function Hl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: o
        } = t;
        o && Hl(e, o, r, !0), s && s.forEach(l => Hl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const u = RL[l] || r && r[l];
                e[l] = u ? u(e[l], t[l]) : t[l]
            } return e
    }
    const RL = {
        data: Rv,
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
        watch: PL,
        provide: Rv,
        inject: LL
    };

    function Rv(e, t) {
        return t ? e ? function() {
            return tr(He(e) ? e.call(this, this) : e, He(t) ? t.call(this, this) : t)
        } : t : e
    }

    function LL(e, t) {
        return ji(vd(e), vd(t))
    }

    function vd(e) {
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

    function PL(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = tr(Object.create(null), e);
        for (const n in t) r[n] = pr(e[n], t[n]);
        return r
    }

    function kL(e, t, r, n = !1) {
        const s = {},
            o = {};
        Ul(o, Ec, 1), e.propsDefaults = Object.create(null), xE(e, t, s, o);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : YR(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
    }

    function xL(e, t, r, n) {
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
                for (let y = 0; y < g.length; y++) {
                    let E = g[y];
                    if (gc(e.emitsOptions, E)) continue;
                    const C = t[E];
                    if (f)
                        if (Ze(o, E)) C !== o[E] && (o[E] = C, h = !0);
                        else {
                            const P = On(E);
                            s[P] = yd(f, u, P, C, e, !1)
                        }
                    else C !== o[E] && (o[E] = C, h = !0)
                }
            }
        } else {
            xE(e, t, s, o) && (h = !0);
            let g;
            for (const y in u)(!t || !Ze(t, y) && ((g = ss(y)) === y || !Ze(t, g))) && (f ? r && (r[y] !== void 0 || r[g] !== void 0) && (s[y] = yd(f, u, y, void 0, e, !0)) : delete s[y]);
            if (o !== u)
                for (const y in o)(!t || !Ze(t, y) && !0) && (delete o[y], h = !0)
        }
        h && Fn(e, "set", "$attrs")
    }

    function xE(e, t, r, n) {
        const [s, o] = e.propsOptions;
        let l = !1,
            u;
        if (t)
            for (let f in t) {
                if (Nl(f)) continue;
                const h = t[f];
                let g;
                s && Ze(s, g = On(f)) ? !o || !o.includes(g) ? r[g] = h : (u || (u = {}))[g] = h : gc(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, l = !0)
            }
        if (o) {
            const f = st(r),
                h = u || gt;
            for (let g = 0; g < o.length; g++) {
                const y = o[g];
                r[y] = yd(s, f, y, h[y], e, !Ze(h, y))
            }
        }
        return l
    }

    function yd(e, t, r, n, s, o) {
        const l = e[r];
        if (l != null) {
            const u = Ze(l, "default");
            if (u && n === void 0) {
                const f = l.default;
                if (l.type !== Function && He(f)) {
                    const {
                        propsDefaults: h
                    } = s;
                    r in h ? n = h[r] : (qs(s), n = h[r] = f.call(null, t), Qi())
                } else n = f
            }
            l[0] && (o && !u ? n = !1 : l[1] && (n === "" || n === ss(r)) && (n = !0))
        }
        return n
    }

    function DE(e, t, r = !1) {
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
                const [E, C] = DE(y, t, !0);
                tr(l, E), C && u.push(...C)
            };
            !r && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
        }
        if (!o && !f) return n.set(e, xs), xs;
        if (ke(o))
            for (let g = 0; g < o.length; g++) {
                const y = On(o[g]);
                Lv(y) && (l[y] = gt)
            } else if (o)
                for (const g in o) {
                    const y = On(g);
                    if (Lv(y)) {
                        const E = o[g],
                            C = l[y] = ke(E) || He(E) ? {
                                type: E
                            } : E;
                        if (C) {
                            const P = xv(Boolean, C.type),
                                M = xv(String, C.type);
                            C[0] = P > -1, C[1] = M < 0 || P < M, (P > -1 || Ze(C, "default")) && u.push(y)
                        }
                    }
                }
        const h = [l, u];
        return n.set(e, h), h
    }

    function Lv(e) {
        return e[0] !== "$"
    }

    function Pv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function kv(e, t) {
        return Pv(e) === Pv(t)
    }

    function xv(e, t) {
        return ke(t) ? t.findIndex(r => kv(r, e)) : He(t) && kv(t, e) ? 0 : -1
    }
    const ME = e => e[0] === "_" || e === "$stable",
        Rh = e => ke(e) ? e.map(Tn) : [Tn(e)],
        DL = (e, t, r) => {
            if (t._n) return t;
            const n = Fs((...s) => Rh(t(...s)), r);
            return n._c = !1, n
        },
        FE = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (ME(s)) continue;
                const o = e[s];
                if (He(o)) t[s] = DL(s, o, n);
                else if (o != null) {
                    const l = Rh(o);
                    t[s] = () => l
                }
            }
        },
        UE = (e, t) => {
            const r = Rh(t);
            e.slots.default = () => r
        },
        ML = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = st(t), Ul(t, "_", r)) : FE(t, e.slots = {})
            } else e.slots = {}, t && UE(e, t);
            Ul(e.slots, Ec, 1)
        },
        FL = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let o = !0,
                l = gt;
            if (n.shapeFlag & 32) {
                const u = t._;
                u ? r && u === 1 ? o = !1 : (tr(s, t), !r && u === 1 && delete s._) : (o = !t.$stable, FE(t, s)), l = t
            } else t && (UE(e, t), l = {
                default: 1
            });
            if (o)
                for (const u in s) !ME(u) && !(u in l) && delete s[u]
        };

    function BE() {
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
    let UL = 0;

    function BL(e, t) {
        return function(n, s = null) {
            He(n) || (n = Object.assign({}, n)), s != null && !Nt(s) && (s = null);
            const o = BE(),
                l = new Set;
            let u = !1;
            const f = o.app = {
                _uid: UL++,
                _component: n,
                _props: s,
                _container: null,
                _context: o,
                _instance: null,
                version: n2,
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
                        return E.appContext = o, g && t ? t(E, h) : e(E, h, y), u = !0, f._container = h, h.__vue_app__ = f, Sc(E.component) || E.component.proxy
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

    function _d(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((E, C) => _d(E, t && (ke(t) ? t[C] : t), r, n, s));
            return
        }
        if (Ua(n) && !s) return;
        const o = n.shapeFlag & 4 ? Sc(n.component) || n.component.proxy : n.el,
            l = s ? null : o,
            {
                i: u,
                r: f
            } = e,
            h = t && t.r,
            g = u.refs === gt ? u.refs = {} : u.refs,
            y = u.setupState;
        if (h != null && h !== f && (Wt(h) ? (g[h] = null, Ze(y, h) && (y[h] = null)) : Qt(h) && (h.value = null)), He(f)) ci(f, u, 12, [l, g]);
        else {
            const E = Wt(f),
                C = Qt(f);
            if (E || C) {
                const P = () => {
                    if (e.f) {
                        const M = E ? g[f] : f.value;
                        s ? ke(M) && gh(M, o) : ke(M) ? M.includes(o) || M.push(o) : E ? (g[f] = [o], Ze(y, f) && (y[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                    } else E ? (g[f] = l, Ze(y, f) && (y[f] = l)) : C && (f.value = l, e.k && (g[e.k] = l))
                };
                l ? (P.id = -1, Tr(P, r)) : P()
            }
        }
    }
    const Tr = dL;

    function jL(e) {
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
            nextSibling: E,
            setScopeId: C = cn,
            cloneNode: P,
            insertStaticContent: M
        } = e, B = (m, p, O, D = null, U = null, K = null, ce = !1, se = null, re = !!p.dynamicChildren) => {
            if (m === p) return;
            m && !Hi(m, p) && (D = St(m), $t(m, U, K, !0), m = null), p.patchFlag === -2 && (re = !1, p.dynamicChildren = null);
            const {
                type: A,
                ref: W,
                shapeFlag: he
            } = p;
            switch (A) {
                case bc:
                    $(m, p, O, D);
                    break;
                case Jr:
                    H(m, p, O, D);
                    break;
                case Ll:
                    m == null && q(p, O, D, ce);
                    break;
                case Qe:
                    Ce(m, p, O, D, U, K, ce, se, re);
                    break;
                default:
                    he & 1 ? J(m, p, O, D, U, K, ce, se, re) : he & 6 ? F(m, p, O, D, U, K, ce, se, re) : (he & 64 || he & 128) && A.process(m, p, O, D, U, K, ce, se, re, xt)
            }
            W != null && U && _d(W, m && m.ref, K, p || m, !p)
        }, $ = (m, p, O, D) => {
            if (m == null) n(p.el = u(p.children), O, D);
            else {
                const U = p.el = m.el;
                p.children !== m.children && h(U, p.children)
            }
        }, H = (m, p, O, D) => {
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
        }, J = (m, p, O, D, U, K, ce, se, re) => {
            ce = ce || p.type === "svg", m == null ? oe(p, O, D, U, K, ce, se, re) : Ae(m, p, U, K, ce, se, re)
        }, oe = (m, p, O, D, U, K, ce, se) => {
            let re, A;
            const {
                type: W,
                props: he,
                shapeFlag: pe,
                transition: Ne,
                patchFlag: xe,
                dirs: w
            } = m;
            if (m.el && P !== void 0 && xe === -1) re = m.el = P(m.el);
            else {
                if (re = m.el = l(m.type, K, he && he.is, he), pe & 8 ? g(re, m.children) : pe & 16 && ue(m.children, re, null, D, U, K && W !== "foreignObject", ce, se), w && ki(m, null, D, "created"), he) {
                    for (const R in he) R !== "value" && !Nl(R) && o(re, R, null, he[R], K, m.children, D, U, ot);
                    "value" in he && o(re, "value", null, he.value), (A = he.onVnodeBeforeMount) && vn(A, D, m)
                }
                le(re, m, m.scopeId, ce, D)
            }
            w && ki(m, null, D, "beforeMount");
            const T = (!U || U && !U.pendingBranch) && Ne && !Ne.persisted;
            T && Ne.beforeEnter(re), n(re, p, O), ((A = he && he.onVnodeMounted) || T || w) && Tr(() => {
                A && vn(A, D, m), T && Ne.enter(re), w && ki(m, null, D, "mounted")
            }, U)
        }, le = (m, p, O, D, U) => {
            if (O && C(m, O), D)
                for (let K = 0; K < D.length; K++) C(m, D[K]);
            if (U) {
                let K = U.subTree;
                if (p === K) {
                    const ce = U.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, U.parent)
                }
            }
        }, ue = (m, p, O, D, U, K, ce, se, re = 0) => {
            for (let A = re; A < m.length; A++) {
                const W = m[A] = se ? ni(m[A]) : Tn(m[A]);
                B(null, W, p, O, D, U, K, ce, se)
            }
        }, Ae = (m, p, O, D, U, K, ce) => {
            const se = p.el = m.el;
            let {
                patchFlag: re,
                dynamicChildren: A,
                dirs: W
            } = p;
            re |= m.patchFlag & 16;
            const he = m.props || gt,
                pe = p.props || gt;
            let Ne;
            O && xi(O, !1), (Ne = pe.onVnodeBeforeUpdate) && vn(Ne, O, p, m), W && ki(p, m, O, "beforeUpdate"), O && xi(O, !0);
            const xe = U && p.type !== "foreignObject";
            if (A ? $e(m.dynamicChildren, A, se, O, D, xe, K) : ce || Se(m, p, se, null, O, D, xe, K, !1), re > 0) {
                if (re & 16) fe(se, p, he, pe, O, D, U);
                else if (re & 2 && he.class !== pe.class && o(se, "class", null, pe.class, U), re & 4 && o(se, "style", he.style, pe.style, U), re & 8) {
                    const w = p.dynamicProps;
                    for (let T = 0; T < w.length; T++) {
                        const R = w[T],
                            S = he[R],
                            L = pe[R];
                        (L !== S || R === "value") && o(se, R, S, L, U, m.children, O, D, ot)
                    }
                }
                re & 1 && m.children !== p.children && g(se, p.children)
            } else !ce && A == null && fe(se, p, he, pe, O, D, U);
            ((Ne = pe.onVnodeUpdated) || W) && Tr(() => {
                Ne && vn(Ne, O, p, m), W && ki(p, m, O, "updated")
            }, D)
        }, $e = (m, p, O, D, U, K, ce) => {
            for (let se = 0; se < p.length; se++) {
                const re = m[se],
                    A = p[se],
                    W = re.el && (re.type === Qe || !Hi(re, A) || re.shapeFlag & 70) ? y(re.el) : O;
                B(re, A, W, null, D, U, K, ce, !0)
            }
        }, fe = (m, p, O, D, U, K, ce) => {
            if (O !== D) {
                for (const se in D) {
                    if (Nl(se)) continue;
                    const re = D[se],
                        A = O[se];
                    re !== A && se !== "value" && o(m, se, A, re, ce, p.children, U, K, ot)
                }
                if (O !== gt)
                    for (const se in O) !Nl(se) && !(se in D) && o(m, se, O[se], null, ce, p.children, U, K, ot);
                "value" in D && o(m, "value", O.value, D.value)
            }
        }, Ce = (m, p, O, D, U, K, ce, se, re) => {
            const A = p.el = m ? m.el : u(""),
                W = p.anchor = m ? m.anchor : u("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Ne
            } = p;
            Ne && (se = se ? se.concat(Ne) : Ne), m == null ? (n(A, O, D), n(W, O, D), ue(p.children, O, W, U, K, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? ($e(m.dynamicChildren, pe, O, U, K, ce, se), (p.key != null || U && p === U.subTree) && jE(m, p, !0)) : Se(m, p, O, W, U, K, ce, se, re)
        }, F = (m, p, O, D, U, K, ce, se, re) => {
            p.slotScopeIds = se, m == null ? p.shapeFlag & 512 ? U.ctx.activate(p, O, D, ce, re) : ie(p, O, D, U, K, ce, re) : de(m, p, re)
        }, ie = (m, p, O, D, U, K, ce) => {
            const se = m.component = XL(m, D, U);
            if (vc(m) && (se.ctx.renderer = xt), JL(se), se.asyncDep) {
                if (U && U.registerDep(se, be), !m.el) {
                    const re = se.subTree = nt(Jr);
                    H(null, re, p, O)
                }
                return
            }
            be(se, m, p, O, U, K, ce)
        }, de = (m, p, O) => {
            const D = p.component = m.component;
            if (cL(m, p, O))
                if (D.asyncDep && !D.asyncResolved) {
                    ve(D, p, O);
                    return
                } else D.next = p, nL(D.update), D.update();
            else p.el = m.el, D.vnode = p
        }, be = (m, p, O, D, U, K, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: W,
                            bu: he,
                            u: pe,
                            parent: Ne,
                            vnode: xe
                        } = m, w = W, T;
                        xi(m, !1), W ? (W.el = xe.el, ve(m, W, ce)) : W = xe, he && Rl(he), (T = W.props && W.props.onVnodeBeforeUpdate) && vn(T, Ne, W, xe), xi(m, !0);
                        const R = pf(m),
                            S = m.subTree;
                        m.subTree = R, B(S, R, y(S.el), St(S), m, U, K), W.el = R.el, w === null && uL(m, R.el), pe && Tr(pe, U), (T = W.props && W.props.onVnodeUpdated) && Tr(() => vn(T, Ne, W, xe), U)
                    } else {
                        let W;
                        const {
                            el: he,
                            props: pe
                        } = p, {
                            bm: Ne,
                            m: xe,
                            parent: w
                        } = m, T = Ua(p);
                        if (xi(m, !1), Ne && Rl(Ne), !T && (W = pe && pe.onVnodeBeforeMount) && vn(W, w, p), xi(m, !0), he && Dt) {
                            const R = () => {
                                m.subTree = pf(m), Dt(he, m.subTree, m, U, null)
                            };
                            T ? p.type.__asyncLoader().then(() => !m.isUnmounted && R()) : R()
                        } else {
                            const R = m.subTree = pf(m);
                            B(null, R, O, D, m, U, K), p.el = R.el
                        }
                        if (xe && Tr(xe, U), !T && (W = pe && pe.onVnodeMounted)) {
                            const R = p;
                            Tr(() => vn(W, w, R), U)
                        }(p.shapeFlag & 256 || w && Ua(w.vnode) && w.vnode.shapeFlag & 256) && m.a && Tr(m.a, U), m.isMounted = !0, p = O = D = null
                    }
                },
                re = m.effect = new yh(se, () => vE(A), m.scope),
                A = m.update = () => re.run();
            A.id = m.uid, xi(m, !0), A()
        }, ve = (m, p, O) => {
            p.component = m;
            const D = m.vnode.props;
            m.vnode = p, m.next = null, xL(m, p.props, D, O), FL(m, p.children, O), ta(), pc(void 0, m.update), ra()
        }, Se = (m, p, O, D, U, K, ce, se, re = !1) => {
            const A = m && m.children,
                W = m ? m.shapeFlag : 0,
                he = p.children,
                {
                    patchFlag: pe,
                    shapeFlag: Ne
                } = p;
            if (pe > 0) {
                if (pe & 128) {
                    Ge(A, he, O, D, U, K, ce, se, re);
                    return
                } else if (pe & 256) {
                    Fe(A, he, O, D, U, K, ce, se, re);
                    return
                }
            }
            Ne & 8 ? (W & 16 && ot(A, U, K), he !== A && g(O, he)) : W & 16 ? Ne & 16 ? Ge(A, he, O, D, U, K, ce, se, re) : ot(A, U, K, !0) : (W & 8 && g(O, ""), Ne & 16 && ue(he, O, D, U, K, ce, se, re))
        }, Fe = (m, p, O, D, U, K, ce, se, re) => {
            m = m || xs, p = p || xs;
            const A = m.length,
                W = p.length,
                he = Math.min(A, W);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Ne = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                B(m[pe], Ne, O, null, U, K, ce, se, re)
            }
            A > W ? ot(m, U, K, !0, !1, he) : ue(p, O, D, U, K, ce, se, re, he)
        }, Ge = (m, p, O, D, U, K, ce, se, re) => {
            let A = 0;
            const W = p.length;
            let he = m.length - 1,
                pe = W - 1;
            for (; A <= he && A <= pe;) {
                const Ne = m[A],
                    xe = p[A] = re ? ni(p[A]) : Tn(p[A]);
                if (Hi(Ne, xe)) B(Ne, xe, O, null, U, K, ce, se, re);
                else break;
                A++
            }
            for (; A <= he && A <= pe;) {
                const Ne = m[he],
                    xe = p[pe] = re ? ni(p[pe]) : Tn(p[pe]);
                if (Hi(Ne, xe)) B(Ne, xe, O, null, U, K, ce, se, re);
                else break;
                he--, pe--
            }
            if (A > he) {
                if (A <= pe) {
                    const Ne = pe + 1,
                        xe = Ne < W ? p[Ne].el : D;
                    for (; A <= pe;) B(null, p[A] = re ? ni(p[A]) : Tn(p[A]), O, xe, U, K, ce, se, re), A++
                }
            } else if (A > pe)
                for (; A <= he;) $t(m[A], U, K, !0), A++;
            else {
                const Ne = A,
                    xe = A,
                    w = new Map;
                for (A = xe; A <= pe; A++) {
                    const Te = p[A] = re ? ni(p[A]) : Tn(p[A]);
                    Te.key != null && w.set(Te.key, A)
                }
                let T, R = 0;
                const S = pe - xe + 1;
                let L = !1,
                    Q = 0;
                const ne = new Array(S);
                for (A = 0; A < S; A++) ne[A] = 0;
                for (A = Ne; A <= he; A++) {
                    const Te = m[A];
                    if (R >= S) {
                        $t(Te, U, K, !0);
                        continue
                    }
                    let ft;
                    if (Te.key != null) ft = w.get(Te.key);
                    else
                        for (T = xe; T <= pe; T++)
                            if (ne[T - xe] === 0 && Hi(Te, p[T])) {
                                ft = T;
                                break
                            } ft === void 0 ? $t(Te, U, K, !0) : (ne[ft - xe] = A + 1, ft >= Q ? Q = ft : L = !0, B(Te, p[ft], O, null, U, K, ce, se, re), R++)
                }
                const _e = L ? WL(ne) : xs;
                for (T = _e.length - 1, A = S - 1; A >= 0; A--) {
                    const Te = xe + A,
                        ft = p[Te],
                        nr = Te + 1 < W ? p[Te + 1].el : D;
                    ne[A] === 0 ? B(null, ft, O, nr, U, K, ce, se, re) : L && (T < 0 || A !== _e[T] ? et(ft, O, nr, 2) : T--)
                }
            }
        }, et = (m, p, O, D, U = null) => {
            const {
                el: K,
                type: ce,
                transition: se,
                children: re,
                shapeFlag: A
            } = m;
            if (A & 6) {
                et(m.component.subTree, p, O, D);
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
            if (ce === Qe) {
                n(K, p, O);
                for (let he = 0; he < re.length; he++) et(re[he], p, O, D);
                n(m.anchor, p, O);
                return
            }
            if (ce === Ll) {
                G(m, p, O);
                return
            }
            if (D !== 2 && A & 1 && se)
                if (D === 0) se.beforeEnter(K), n(K, p, O), Tr(() => se.enter(K), U);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Ne
                    } = se, xe = () => n(K, p, O), w = () => {
                        he(K, () => {
                            xe(), Ne && Ne()
                        })
                    };
                    pe ? pe(K, xe, w) : w()
                }
            else n(K, p, O)
        }, $t = (m, p, O, D = !1, U = !1) => {
            const {
                type: K,
                props: ce,
                ref: se,
                children: re,
                dynamicChildren: A,
                shapeFlag: W,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && _d(se, null, O, m, !0), W & 256) {
                p.ctx.deactivate(m);
                return
            }
            const Ne = W & 1 && pe,
                xe = !Ua(m);
            let w;
            if (xe && (w = ce && ce.onVnodeBeforeUnmount) && vn(w, p, m), W & 6) mr(m.component, O, D);
            else {
                if (W & 128) {
                    m.suspense.unmount(O, D);
                    return
                }
                Ne && ki(m, null, p, "beforeUnmount"), W & 64 ? m.type.remove(m, p, O, U, xt, D) : A && (K !== Qe || he > 0 && he & 64) ? ot(A, p, O, !1, !0) : (K === Qe && he & 384 || !U && W & 16) && ot(re, p, O), D && Cr(m)
            }(xe && (w = ce && ce.onVnodeUnmounted) || Ne) && Tr(() => {
                w && vn(w, p, m), Ne && ki(m, null, p, "unmounted")
            }, O)
        }, Cr = m => {
            const {
                type: p,
                el: O,
                anchor: D,
                transition: U
            } = m;
            if (p === Qe) {
                rr(O, D);
                return
            }
            if (p === Ll) {
                j(m);
                return
            }
            const K = () => {
                s(O), U && !U.persisted && U.afterLeave && U.afterLeave()
            };
            if (m.shapeFlag & 1 && U && !U.persisted) {
                const {
                    leave: ce,
                    delayLeave: se
                } = U, re = () => ce(O, K);
                se ? se(m.el, K, re) : re()
            } else K()
        }, rr = (m, p) => {
            let O;
            for (; m !== p;) O = E(m), s(m), m = O;
            s(p)
        }, mr = (m, p, O) => {
            const {
                bum: D,
                scope: U,
                update: K,
                subTree: ce,
                um: se
            } = m;
            D && Rl(D), U.stop(), K && (K.active = !1, $t(ce, m, p, O)), se && Tr(se, p), Tr(() => {
                m.isUnmounted = !0
            }, p), p && p.pendingBranch && !p.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
        }, ot = (m, p, O, D = !1, U = !1, K = 0) => {
            for (let ce = K; ce < m.length; ce++) $t(m[ce], p, O, D, U)
        }, St = m => m.shapeFlag & 6 ? St(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : E(m.anchor || m.el), lt = (m, p, O) => {
            m == null ? p._vnode && $t(p._vnode, null, null, !0) : B(p._vnode || null, m, p, null, null, null, O), bE(), p._vnode = m
        }, xt = {
            p: B,
            um: $t,
            m: et,
            r: Cr,
            mt: ie,
            mc: ue,
            pc: Se,
            pbc: $e,
            n: St,
            o: e
        };
        let Ht, Dt;
        return t && ([Ht, Dt] = t(xt)), {
            render: lt,
            hydrate: Ht,
            createApp: BL(lt, Ht)
        }
    }

    function xi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function jE(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let o = 0; o < n.length; o++) {
                const l = n[o];
                let u = s[o];
                u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[o] = ni(s[o]), u.el = l.el), r || jE(l, u))
            }
    }

    function WL(e) {
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
    const HL = e => e.__isTeleport,
        Qe = Symbol(void 0),
        bc = Symbol(void 0),
        Jr = Symbol(void 0),
        Ll = Symbol(void 0),
        Ba = [];
    let ln = null;

    function Y(e = !1) {
        Ba.push(ln = e ? null : [])
    }

    function VL() {
        Ba.pop(), ln = Ba[Ba.length - 1] || null
    }
    let eo = 1;

    function Dv(e) {
        eo += e
    }

    function GE(e) {
        return e.dynamicChildren = eo > 0 ? ln || xs : null, VL(), eo > 0 && ln && ln.push(e), e
    }

    function X(e, t, r, n, s, o) {
        return GE(Z(e, t, r, n, s, o, !0))
    }

    function Or(e, t, r, n, s) {
        return GE(nt(e, t, r, n, s, !0))
    }

    function Vl(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Hi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Ec = "__vInternal",
        WE = ({
            key: e
        }) => e != null ? e : null,
        Pl = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Wt(e) || Qt(e) || He(e) ? {
            i: or,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function Z(e, t = null, r = null, n = 0, s = null, o = e === Qe ? 0 : 1, l = !1, u = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && WE(t),
            ref: t && Pl(t),
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
        return u ? (Lh(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Wt(r) ? 8 : 16), eo > 0 && !l && ln && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && ln.push(f), f
    }
    const nt = KL;

    function KL(e, t = null, r = null, n = 0, s = null, o = !1) {
        if ((!e || e === RE) && (e = Jr), Vl(e)) {
            const u = di(e, t, !0);
            return r && Lh(u, r), eo > 0 && !o && ln && (u.shapeFlag & 6 ? ln[ln.indexOf(e)] = u : ln.push(u)), u.patchFlag |= -2, u
        }
        if (r2(e) && (e = e.__vccOpts), t) {
            t = YL(t);
            let {
                class: u,
                style: f
            } = t;
            u && !Wt(u) && (t.class = Me(u)), Nt(f) && (uE(f) && !ke(f) && (f = tr({}, f)), t.style = ac(f))
        }
        const l = Wt(e) ? 1 : fL(e) ? 128 : HL(e) ? 64 : Nt(e) ? 4 : He(e) ? 2 : 0;
        return Z(e, t, r, n, s, l, o, !0)
    }

    function YL(e) {
        return e ? uE(e) || Ec in e ? tr({}, e) : e : null
    }

    function di(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: o,
            children: l
        } = e, u = t ? Tc(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && WE(u),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(Pl(t)) : [s, Pl(t)] : Pl(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Qe ? o === -1 ? 16 : o | 16 : o,
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
        return nt(bc, null, e, t)
    }

    function HE(e, t) {
        const r = nt(Ll, null, e);
        return r.staticCount = t, r
    }

    function we(e = "", t = !1) {
        return t ? (Y(), Or(Jr, null, e)) : nt(Jr, null, e)
    }

    function Tn(e) {
        return e == null || typeof e == "boolean" ? nt(Jr) : ke(e) ? nt(Qe, null, e.slice()) : typeof e == "object" ? ni(e) : nt(bc, null, String(e))
    }

    function ni(e) {
        return e.el === null || e.memo ? e : di(e)
    }

    function Lh(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Lh(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(Ec in t) ? t._ctx = or : s === 3 && or && (or.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else He(t) ? (t = {
            default: t,
            _ctx: or
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [hi(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function Tc(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Me([t.class, n.class]));
                else if (s === "style") t.style = ac([t.style, n.style]);
            else if (lc(s)) {
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
    const qL = BE();
    let zL = 0;

    function XL(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || qL,
            o = {
                uid: zL++,
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
                propsOptions: DE(n, s),
                emitsOptions: TE(n, s),
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
    const is = () => qt || or,
        qs = e => {
            qt = e, e.scope.on()
        },
        Qi = () => {
            qt && qt.scope.off(), qt = null
        };

    function VE(e) {
        return e.vnode.shapeFlag & 4
    }
    let to = !1;

    function JL(e, t = !1) {
        to = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = VE(e);
        kL(e, r, s, t), ML(e, n);
        const o = s ? ZL(e, t) : void 0;
        return to = !1, o
    }

    function ZL(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = fE(new Proxy(e.ctx, IL));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? e2(e) : null;
            qs(e), ta();
            const o = ci(n, e, 0, [e.props, s]);
            if (ra(), Qi(), zb(o)) {
                if (o.then(Qi, Qi), t) return o.then(l => {
                    Mv(e, l, t)
                }).catch(l => {
                    hc(l, e, 0)
                });
                e.asyncDep = o
            } else Mv(e, o, t)
        } else KE(e, t)
    }

    function Mv(e, t, r) {
        He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Nt(t) && (e.setupState = gE(t)), KE(e, r)
    }
    let Fv;

    function KE(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && Fv && !n.render) {
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
                    n.render = Fv(s, h)
                }
            }
            e.render = n.render || cn
        }
        qs(e), ta(), AL(e), ra(), Qi()
    }

    function QL(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return xr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function e2(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = QL(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Sc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(gE(fE(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Wl) return Wl[r](e)
            }
        }))
    }

    function t2(e, t = !0) {
        return He(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function r2(e) {
        return He(e) && "__vccOpts" in e
    }
    const kr = (e, t) => QR(e, t, to);

    function Ph(e, t, r) {
        const n = arguments.length;
        return n === 2 ? Nt(t) && !ke(t) ? Vl(t) ? nt(e, null, [t]) : nt(e, t) : nt(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Vl(r) && (r = [r]), nt(e, t, r))
    }
    const n2 = "3.2.37",
        i2 = "http://www.w3.org/2000/svg",
        Vi = typeof document < "u" ? document : null,
        Uv = Vi && Vi.createElement("template"),
        s2 = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Vi.createElementNS(i2, e) : Vi.createElement(e, r ? {
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
                    Uv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const u = Uv.content;
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

    function a2(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function o2(e, t, r) {
        const n = e.style,
            s = Wt(r);
        if (r && !s) {
            for (const o in r) bd(n, o, r[o]);
            if (t && !Wt(t))
                for (const o in t) r[o] == null && bd(n, o, "")
        } else {
            const o = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = o)
        }
    }
    const Bv = /\s*!important$/;

    function bd(e, t, r) {
        if (ke(r)) r.forEach(n => bd(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = l2(e, t);
            Bv.test(r) ? e.setProperty(ss(n), r.replace(Bv, ""), "important") : e[n] = r
        }
    }
    const jv = ["Webkit", "Moz", "ms"],
        mf = {};

    function l2(e, t) {
        const r = mf[t];
        if (r) return r;
        let n = On(t);
        if (n !== "filter" && n in e) return mf[t] = n;
        n = fc(n);
        for (let s = 0; s < jv.length; s++) {
            const o = jv[s] + n;
            if (o in e) return mf[t] = o
        }
        return t
    }
    const Gv = "http://www.w3.org/1999/xlink";

    function c2(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Gv, t.slice(6, t.length)) : e.setAttributeNS(Gv, t, r);
        else {
            const o = lR(t);
            r == null || o && !Kb(r) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : r)
        }
    }

    function u2(e, t, r, n, s, o, l) {
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
    const [YE, f2] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let Ed = 0;
    const d2 = Promise.resolve(),
        h2 = () => {
            Ed = 0
        },
        p2 = () => Ed || (d2.then(h2), Ed = YE());

    function Ki(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function g2(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function m2(e, t, r, n, s = null) {
        const o = e._vei || (e._vei = {}),
            l = o[t];
        if (n && l) l.value = n;
        else {
            const [u, f] = v2(t);
            if (n) {
                const h = o[t] = y2(n, s);
                Ki(e, u, h, f)
            } else l && (g2(e, u, l, f), o[t] = void 0)
        }
    }
    const Wv = /(?:Once|Passive|Capture)$/;

    function v2(e) {
        let t;
        if (Wv.test(e)) {
            t = {};
            let r;
            for (; r = e.match(Wv);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
        }
        return [ss(e.slice(2)), t]
    }

    function y2(e, t) {
        const r = n => {
            const s = n.timeStamp || YE();
            (f2 || s >= r.attached - 1) && Xr(_2(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = p2(), r
    }

    function _2(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const Hv = /^on[a-z]/,
        b2 = (e, t, r, n, s = !1, o, l, u, f) => {
            t === "class" ? a2(e, n, s) : t === "style" ? o2(e, r, n) : lc(t) ? ph(t) || m2(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : E2(e, t, n, s)) ? u2(e, t, n, o, l, u, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), c2(e, t, n, s))
        };

    function E2(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && Hv.test(t) && He(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hv.test(t) && Wt(r) ? !1 : t in e
    }
    const Zn = "transition",
        Ia = "animation",
        Oc = (e, {
            slots: t
        }) => Ph(wE, T2(e), t);
    Oc.displayName = "Transition";
    const qE = {
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
    Oc.props = tr({}, wE.props, qE);
    const Di = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        Vv = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function T2(e) {
        const t = {};
        for (const fe in e) fe in qE || (t[fe] = e[fe]);
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
        } = e, P = S2(s), M = P && P[0], B = P && P[1], {
            onBeforeEnter: $,
            onEnter: H,
            onEnterCancelled: q,
            onLeave: G,
            onLeaveCancelled: j,
            onBeforeAppear: J = $,
            onAppear: oe = H,
            onAppearCancelled: le = q
        } = t, ue = (fe, Ce, F) => {
            Mi(fe, Ce ? g : u), Mi(fe, Ce ? h : l), F && F()
        }, Ae = (fe, Ce) => {
            fe._isLeaving = !1, Mi(fe, y), Mi(fe, C), Mi(fe, E), Ce && Ce()
        }, $e = fe => (Ce, F) => {
            const ie = fe ? oe : H,
                de = () => ue(Ce, fe, F);
            Di(ie, [Ce, de]), Kv(() => {
                Mi(Ce, fe ? f : o), Qn(Ce, fe ? g : u), Vv(ie) || Yv(Ce, n, M, de)
            })
        };
        return tr(t, {
            onBeforeEnter(fe) {
                Di($, [fe]), Qn(fe, o), Qn(fe, l)
            },
            onBeforeAppear(fe) {
                Di(J, [fe]), Qn(fe, f), Qn(fe, h)
            },
            onEnter: $e(!1),
            onAppear: $e(!0),
            onLeave(fe, Ce) {
                fe._isLeaving = !0;
                const F = () => Ae(fe, Ce);
                Qn(fe, y), C2(), Qn(fe, E), Kv(() => {
                    !fe._isLeaving || (Mi(fe, y), Qn(fe, C), Vv(G) || Yv(fe, n, B, F))
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

    function S2(e) {
        if (e == null) return null;
        if (Nt(e)) return [vf(e.enter), vf(e.leave)]; {
            const t = vf(e);
            return [t, t]
        }
    }

    function vf(e) {
        return Bl(e)
    }

    function Qn(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Mi(e, t) {
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
    let O2 = 0;

    function Yv(e, t, r, n) {
        const s = e._endId = ++O2,
            o = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(o, r);
        const {
            type: l,
            timeout: u,
            propCount: f
        } = w2(e, t);
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

    function w2(e, t) {
        const r = window.getComputedStyle(e),
            n = P => (r[P] || "").split(", "),
            s = n(Zn + "Delay"),
            o = n(Zn + "Duration"),
            l = qv(s, o),
            u = n(Ia + "Delay"),
            f = n(Ia + "Duration"),
            h = qv(u, f);
        let g = null,
            y = 0,
            E = 0;
        t === Zn ? l > 0 && (g = Zn, y = l, E = o.length) : t === Ia ? h > 0 && (g = Ia, y = h, E = f.length) : (y = Math.max(l, h), g = y > 0 ? l > h ? Zn : Ia : null, E = g ? g === Zn ? o.length : f.length : 0);
        const C = g === Zn && /\b(transform|all)(,|$)/.test(r[Zn + "Property"]);
        return {
            type: g,
            timeout: y,
            propCount: E,
            hasTransform: C
        }
    }

    function qv(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => zv(r) + zv(e[n])))
    }

    function zv(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function C2() {
        return document.body.offsetHeight
    }
    const Kl = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Rl(t, r) : t
    };

    function $2(e) {
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
                e._assign = Kl(s);
                const o = n || s.props && s.props.type === "number";
                Ki(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let u = e.value;
                    r && (u = u.trim()), o && (u = Bl(u)), e._assign(u)
                }), r && Ki(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Ki(e, "compositionstart", $2), Ki(e, "compositionend", Xv), Ki(e, "change", Xv))
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
        I2 = {
            deep: !0,
            created(e, t, r) {
                e._assign = Kl(r), Ki(e, "change", () => {
                    const n = e._modelValue,
                        s = A2(e),
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
                    } else if (cc(n)) {
                        const u = new Set(n);
                        o ? u.add(s) : u.delete(s), l(u)
                    } else l(zE(e, o))
                })
            },
            mounted: Zv,
            beforeUpdate(e, t, r) {
                e._assign = Kl(r), Zv(e, t, r)
            }
        };

    function Zv(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = Yb(t, n.props.value) > -1 : cc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = oc(t, zE(e, !0)))
    }

    function A2(e) {
        return "_value" in e ? e._value : e.value
    }

    function zE(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const N2 = ["ctrl", "shift", "alt", "meta"],
        R2 = {
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
                const o = R2[t[s]];
                if (o && o(r, t)) return
            }
            return e(r, ...n)
        },
        L2 = {
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
            const n = ss(r.key);
            if (t.some(s => s === n || L2[s] === n)) return e(r)
        },
        P2 = tr({
            patchProp: b2
        }, s2);
    let Qv;

    function k2() {
        return Qv || (Qv = jL(P2))
    }
    const x2 = (...e) => {
        const t = k2().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = D2(n);
            if (!s) return;
            const o = t._component;
            !He(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function D2(e) {
        return Wt(e) ? document.querySelector(e) : e
    }
    const M2 = at({
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
        tt = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        F2 = {
            class: "choices"
        },
        U2 = {
            class: "constrain"
        },
        B2 = {
            key: 0
        },
        j2 = ["disabled", "onClick"];

    function G2(e, t, r, n, s, o) {
        const l = At("bb");
        return Y(), X("div", F2, [Z("div", U2, [e.player.prompt ? Ie((Y(), X("p", B2, null, 512)), [
            [l, e.player.prompt]
        ]) : we("", !0), (Y(!0), X(Qe, null, un(e.player.choices, (u, f) => (Y(), X("button", {
            key: f,
            class: Me({
                selected: u.isSelected
            }),
            disabled: u.isDisabled,
            onClick: Zr(h => e.onChoiceClick(f), ["prevent"])
        }, yt(u.text), 11, j2))), 128))])])
    }
    const W2 = tt(M2, [
        ["render", G2]
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
    var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function H2(e) {
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
    var K2 = V2;

    function Y2(e, t) {
        return e === t || e !== e && t !== t
    }
    var wc = Y2,
        q2 = wc;

    function z2(e, t) {
        for (var r = e.length; r--;)
            if (q2(e[r][0], t)) return r;
        return -1
    }
    var Cc = z2,
        X2 = Cc,
        J2 = Array.prototype,
        Z2 = J2.splice;

    function Q2(e) {
        var t = this.__data__,
            r = X2(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : Z2.call(t, r, 1), --this.size, !0
    }
    var eP = Q2,
        tP = Cc;

    function rP(e) {
        var t = this.__data__,
            r = tP(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var nP = rP,
        iP = Cc;

    function sP(e) {
        return iP(this.__data__, e) > -1
    }
    var aP = sP,
        oP = Cc;

    function lP(e, t) {
        var r = this.__data__,
            n = oP(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var cP = lP,
        uP = K2,
        fP = eP,
        dP = nP,
        hP = aP,
        pP = cP;

    function na(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    na.prototype.clear = uP;
    na.prototype.delete = fP;
    na.prototype.get = dP;
    na.prototype.has = hP;
    na.prototype.set = pP;
    var $c = na,
        gP = $c;

    function mP() {
        this.__data__ = new gP, this.size = 0
    }
    var vP = mP;

    function yP(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var _P = yP;

    function bP(e) {
        return this.__data__.get(e)
    }
    var EP = bP;

    function TP(e) {
        return this.__data__.has(e)
    }
    var SP = TP,
        OP = typeof kt == "object" && kt && kt.Object === Object && kt,
        XE = OP,
        wP = XE,
        CP = typeof self == "object" && self && self.Object === Object && self,
        $P = wP || CP || Function("return this")(),
        dn = $P,
        IP = dn,
        AP = IP.Symbol,
        Ic = AP,
        ey = Ic,
        JE = Object.prototype,
        NP = JE.hasOwnProperty,
        RP = JE.toString,
        Aa = ey ? ey.toStringTag : void 0;

    function LP(e) {
        var t = NP.call(e, Aa),
            r = e[Aa];
        try {
            e[Aa] = void 0;
            var n = !0
        } catch {}
        var s = RP.call(e);
        return n && (t ? e[Aa] = r : delete e[Aa]), s
    }
    var PP = LP,
        kP = Object.prototype,
        xP = kP.toString;

    function DP(e) {
        return xP.call(e)
    }
    var MP = DP,
        ty = Ic,
        FP = PP,
        UP = MP,
        BP = "[object Null]",
        jP = "[object Undefined]",
        ry = ty ? ty.toStringTag : void 0;

    function GP(e) {
        return e == null ? e === void 0 ? jP : BP : ry && ry in Object(e) ? FP(e) : UP(e)
    }
    var ia = GP;

    function WP(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var hn = WP,
        HP = ia,
        VP = hn,
        KP = "[object AsyncFunction]",
        YP = "[object Function]",
        qP = "[object GeneratorFunction]",
        zP = "[object Proxy]";

    function XP(e) {
        if (!VP(e)) return !1;
        var t = HP(e);
        return t == YP || t == qP || t == KP || t == zP
    }
    var kh = XP,
        JP = dn,
        ZP = JP["__core-js_shared__"],
        QP = ZP,
        yf = QP,
        ny = function() {
            var e = /[^.]+$/.exec(yf && yf.keys && yf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function ek(e) {
        return !!ny && ny in e
    }
    var tk = ek,
        rk = Function.prototype,
        nk = rk.toString;

    function ik(e) {
        if (e != null) {
            try {
                return nk.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var ZE = ik,
        sk = kh,
        ak = tk,
        ok = hn,
        lk = ZE,
        ck = /[\\^$.*+?()[\]{}|]/g,
        uk = /^\[object .+?Constructor\]$/,
        fk = Function.prototype,
        dk = Object.prototype,
        hk = fk.toString,
        pk = dk.hasOwnProperty,
        gk = RegExp("^" + hk.call(pk).replace(ck, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function mk(e) {
        if (!ok(e) || ak(e)) return !1;
        var t = sk(e) ? gk : uk;
        return t.test(lk(e))
    }
    var vk = mk;

    function yk(e, t) {
        return e == null ? void 0 : e[t]
    }
    var _k = yk,
        bk = vk,
        Ek = _k;

    function Tk(e, t) {
        var r = Ek(e, t);
        return bk(r) ? r : void 0
    }
    var as = Tk,
        Sk = as,
        Ok = dn,
        wk = Sk(Ok, "Map"),
        xh = wk,
        Ck = as,
        $k = Ck(Object, "create"),
        Ac = $k,
        iy = Ac;

    function Ik() {
        this.__data__ = iy ? iy(null) : {}, this.size = 0
    }
    var Ak = Ik;

    function Nk(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var Rk = Nk,
        Lk = Ac,
        Pk = "__lodash_hash_undefined__",
        kk = Object.prototype,
        xk = kk.hasOwnProperty;

    function Dk(e) {
        var t = this.__data__;
        if (Lk) {
            var r = t[e];
            return r === Pk ? void 0 : r
        }
        return xk.call(t, e) ? t[e] : void 0
    }
    var Mk = Dk,
        Fk = Ac,
        Uk = Object.prototype,
        Bk = Uk.hasOwnProperty;

    function jk(e) {
        var t = this.__data__;
        return Fk ? t[e] !== void 0 : Bk.call(t, e)
    }
    var Gk = jk,
        Wk = Ac,
        Hk = "__lodash_hash_undefined__";

    function Vk(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = Wk && t === void 0 ? Hk : t, this
    }
    var Kk = Vk,
        Yk = Ak,
        qk = Rk,
        zk = Mk,
        Xk = Gk,
        Jk = Kk;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = Yk;
    sa.prototype.delete = qk;
    sa.prototype.get = zk;
    sa.prototype.has = Xk;
    sa.prototype.set = Jk;
    var Zk = sa,
        sy = Zk,
        Qk = $c,
        ex = xh;

    function tx() {
        this.size = 0, this.__data__ = {
            hash: new sy,
            map: new(ex || Qk),
            string: new sy
        }
    }
    var rx = tx;

    function nx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var ix = nx,
        sx = ix;

    function ax(e, t) {
        var r = e.__data__;
        return sx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Nc = ax,
        ox = Nc;

    function lx(e) {
        var t = ox(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var cx = lx,
        ux = Nc;

    function fx(e) {
        return ux(this, e).get(e)
    }
    var dx = fx,
        hx = Nc;

    function px(e) {
        return hx(this, e).has(e)
    }
    var gx = px,
        mx = Nc;

    function vx(e, t) {
        var r = mx(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var yx = vx,
        _x = rx,
        bx = cx,
        Ex = dx,
        Tx = gx,
        Sx = yx;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = _x;
    aa.prototype.delete = bx;
    aa.prototype.get = Ex;
    aa.prototype.has = Tx;
    aa.prototype.set = Sx;
    var QE = aa,
        Ox = $c,
        wx = xh,
        Cx = QE,
        $x = 200;

    function Ix(e, t) {
        var r = this.__data__;
        if (r instanceof Ox) {
            var n = r.__data__;
            if (!wx || n.length < $x - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Cx(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var Ax = Ix,
        Nx = $c,
        Rx = vP,
        Lx = _P,
        Px = EP,
        kx = SP,
        xx = Ax;

    function oa(e) {
        var t = this.__data__ = new Nx(e);
        this.size = t.size
    }
    oa.prototype.clear = Rx;
    oa.prototype.delete = Lx;
    oa.prototype.get = Px;
    oa.prototype.has = kx;
    oa.prototype.set = xx;
    var e1 = oa,
        Dx = as,
        Mx = function() {
            try {
                var e = Dx(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        t1 = Mx,
        ay = t1;

    function Fx(e, t, r) {
        t == "__proto__" && ay ? ay(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Dh = Fx,
        Ux = Dh,
        Bx = wc;

    function jx(e, t, r) {
        (r !== void 0 && !Bx(e[t], r) || r === void 0 && !(t in e)) && Ux(e, t, r)
    }
    var r1 = jx;

    function Gx(e) {
        return function(t, r, n) {
            for (var s = -1, o = Object(t), l = n(t), u = l.length; u--;) {
                var f = l[e ? u : ++s];
                if (r(o[f], f, o) === !1) break
            }
            return t
        }
    }
    var Wx = Gx,
        Hx = Wx,
        Vx = Hx(),
        Kx = Vx,
        ql = {
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
    })(ql, ql.exports);
    var Yx = dn,
        qx = Yx.Uint8Array,
        zx = qx,
        oy = zx;

    function Xx(e) {
        var t = new e.constructor(e.byteLength);
        return new oy(t).set(new oy(e)), t
    }
    var Mh = Xx,
        Jx = Mh;

    function Zx(e, t) {
        var r = t ? Jx(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var n1 = Zx;

    function Qx(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var i1 = Qx,
        eD = hn,
        ly = Object.create,
        tD = function() {
            function e() {}
            return function(t) {
                if (!eD(t)) return {};
                if (ly) return ly(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        rD = tD;

    function nD(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var s1 = nD,
        iD = s1,
        sD = iD(Object.getPrototypeOf, Object),
        Fh = sD,
        aD = Object.prototype;

    function oD(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || aD;
        return e === r
    }
    var Uh = oD,
        lD = rD,
        cD = Fh,
        uD = Uh;

    function fD(e) {
        return typeof e.constructor == "function" && !uD(e) ? lD(cD(e)) : {}
    }
    var a1 = fD;

    function dD(e) {
        return e != null && typeof e == "object"
    }
    var mi = dD,
        hD = ia,
        pD = mi,
        gD = "[object Arguments]";

    function mD(e) {
        return pD(e) && hD(e) == gD
    }
    var vD = mD,
        cy = vD,
        yD = mi,
        o1 = Object.prototype,
        _D = o1.hasOwnProperty,
        bD = o1.propertyIsEnumerable,
        ED = cy(function() {
            return arguments
        }()) ? cy : function(e) {
            return yD(e) && _D.call(e, "callee") && !bD.call(e, "callee")
        },
        l1 = ED,
        TD = Array.isArray,
        vi = TD,
        SD = 9007199254740991;

    function OD(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= SD
    }
    var c1 = OD,
        wD = kh,
        CD = c1;

    function $D(e) {
        return e != null && CD(e.length) && !wD(e)
    }
    var Rc = $D,
        ID = Rc,
        AD = mi;

    function ND(e) {
        return AD(e) && ID(e)
    }
    var RD = ND,
        ro = {
            exports: {}
        };

    function LD() {
        return !1
    }
    var PD = LD;
    (function(e, t) {
        var r = dn,
            n = PD,
            s = t && !t.nodeType && t,
            o = s && !0 && e && !e.nodeType && e,
            l = o && o.exports === s,
            u = l ? r.Buffer : void 0,
            f = u ? u.isBuffer : void 0,
            h = f || n;
        e.exports = h
    })(ro, ro.exports);
    var kD = ia,
        xD = Fh,
        DD = mi,
        MD = "[object Object]",
        FD = Function.prototype,
        UD = Object.prototype,
        u1 = FD.toString,
        BD = UD.hasOwnProperty,
        jD = u1.call(Object);

    function GD(e) {
        if (!DD(e) || kD(e) != MD) return !1;
        var t = xD(e);
        if (t === null) return !0;
        var r = BD.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && u1.call(r) == jD
    }
    var WD = GD,
        HD = ia,
        VD = c1,
        KD = mi,
        YD = "[object Arguments]",
        qD = "[object Array]",
        zD = "[object Boolean]",
        XD = "[object Date]",
        JD = "[object Error]",
        ZD = "[object Function]",
        QD = "[object Map]",
        e3 = "[object Number]",
        t3 = "[object Object]",
        r3 = "[object RegExp]",
        n3 = "[object Set]",
        i3 = "[object String]",
        s3 = "[object WeakMap]",
        a3 = "[object ArrayBuffer]",
        o3 = "[object DataView]",
        l3 = "[object Float32Array]",
        c3 = "[object Float64Array]",
        u3 = "[object Int8Array]",
        f3 = "[object Int16Array]",
        d3 = "[object Int32Array]",
        h3 = "[object Uint8Array]",
        p3 = "[object Uint8ClampedArray]",
        g3 = "[object Uint16Array]",
        m3 = "[object Uint32Array]",
        Tt = {};
    Tt[l3] = Tt[c3] = Tt[u3] = Tt[f3] = Tt[d3] = Tt[h3] = Tt[p3] = Tt[g3] = Tt[m3] = !0;
    Tt[YD] = Tt[qD] = Tt[a3] = Tt[zD] = Tt[o3] = Tt[XD] = Tt[JD] = Tt[ZD] = Tt[QD] = Tt[e3] = Tt[t3] = Tt[r3] = Tt[n3] = Tt[i3] = Tt[s3] = !1;

    function v3(e) {
        return KD(e) && VD(e.length) && !!Tt[HD(e)]
    }
    var y3 = v3;

    function _3(e) {
        return function(t) {
            return e(t)
        }
    }
    var Bh = _3,
        no = {
            exports: {}
        };
    (function(e, t) {
        var r = XE,
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
    })(no, no.exports);
    var b3 = y3,
        E3 = Bh,
        uy = no.exports,
        fy = uy && uy.isTypedArray,
        T3 = fy ? E3(fy) : b3,
        f1 = T3;

    function S3(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var d1 = S3,
        O3 = Dh,
        w3 = wc,
        C3 = Object.prototype,
        $3 = C3.hasOwnProperty;

    function I3(e, t, r) {
        var n = e[t];
        (!($3.call(e, t) && w3(n, r)) || r === void 0 && !(t in e)) && O3(e, t, r)
    }
    var jh = I3,
        A3 = jh,
        N3 = Dh;

    function R3(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var o = -1, l = t.length; ++o < l;) {
            var u = t[o],
                f = n ? n(r[u], e[u], u, r, e) : void 0;
            f === void 0 && (f = e[u]), s ? N3(r, u, f) : A3(r, u, f)
        }
        return r
    }
    var uo = R3;

    function L3(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var P3 = L3,
        k3 = 9007199254740991,
        x3 = /^(?:0|[1-9]\d*)$/;

    function D3(e, t) {
        var r = typeof e;
        return t = t == null ? k3 : t, !!t && (r == "number" || r != "symbol" && x3.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Gh = D3,
        M3 = P3,
        F3 = l1,
        U3 = vi,
        B3 = ro.exports,
        j3 = Gh,
        G3 = f1,
        W3 = Object.prototype,
        H3 = W3.hasOwnProperty;

    function V3(e, t) {
        var r = U3(e),
            n = !r && F3(e),
            s = !r && !n && B3(e),
            o = !r && !n && !s && G3(e),
            l = r || n || s || o,
            u = l ? M3(e.length, String) : [],
            f = u.length;
        for (var h in e)(t || H3.call(e, h)) && !(l && (h == "length" || s && (h == "offset" || h == "parent") || o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || j3(h, f))) && u.push(h);
        return u
    }
    var h1 = V3;

    function K3(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var Y3 = K3,
        q3 = hn,
        z3 = Uh,
        X3 = Y3,
        J3 = Object.prototype,
        Z3 = J3.hasOwnProperty;

    function Q3(e) {
        if (!q3(e)) return X3(e);
        var t = z3(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !Z3.call(e, n)) || r.push(n);
        return r
    }
    var eM = Q3,
        tM = h1,
        rM = eM,
        nM = Rc;

    function iM(e) {
        return nM(e) ? tM(e, !0) : rM(e)
    }
    var fo = iM,
        sM = uo,
        aM = fo;

    function oM(e) {
        return sM(e, aM(e))
    }
    var lM = oM,
        dy = r1,
        cM = ql.exports,
        uM = n1,
        fM = i1,
        dM = a1,
        hy = l1,
        py = vi,
        hM = RD,
        pM = ro.exports,
        gM = kh,
        mM = hn,
        vM = WD,
        yM = f1,
        gy = d1,
        _M = lM;

    function bM(e, t, r, n, s, o, l) {
        var u = gy(e, r),
            f = gy(t, r),
            h = l.get(f);
        if (h) {
            dy(e, r, h);
            return
        }
        var g = o ? o(u, f, r + "", e, t, l) : void 0,
            y = g === void 0;
        if (y) {
            var E = py(f),
                C = !E && pM(f),
                P = !E && !C && yM(f);
            g = f, E || C || P ? py(u) ? g = u : hM(u) ? g = fM(u) : C ? (y = !1, g = cM(f, !0)) : P ? (y = !1, g = uM(f, !0)) : g = [] : vM(f) || hy(f) ? (g = u, hy(u) ? g = _M(u) : (!mM(u) || gM(u)) && (g = dM(f))) : y = !1
        }
        y && (l.set(f, g), s(g, f, n, o, l), l.delete(f)), dy(e, r, g)
    }
    var EM = bM,
        TM = e1,
        SM = r1,
        OM = Kx,
        wM = EM,
        CM = hn,
        $M = fo,
        IM = d1;

    function p1(e, t, r, n, s) {
        e !== t && OM(t, function(o, l) {
            if (s || (s = new TM), CM(o)) wM(e, t, l, r, p1, n, s);
            else {
                var u = n ? n(IM(e, l), o, l + "", e, t, s) : void 0;
                u === void 0 && (u = o), SM(e, l, u)
            }
        }, $M)
    }
    var AM = p1;

    function NM(e) {
        return e
    }
    var g1 = NM;

    function RM(e, t, r) {
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
    var LM = RM,
        PM = LM,
        my = Math.max;

    function kM(e, t, r) {
        return t = my(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, o = my(n.length - t, 0), l = Array(o); ++s < o;) l[s] = n[t + s];
                s = -1;
                for (var u = Array(t + 1); ++s < t;) u[s] = n[s];
                return u[t] = r(l), PM(e, this, u)
            }
    }
    var xM = kM;

    function DM(e) {
        return function() {
            return e
        }
    }
    var MM = DM,
        FM = MM,
        vy = t1,
        UM = g1,
        BM = vy ? function(e, t) {
            return vy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: FM(t),
                writable: !0
            })
        } : UM,
        jM = BM,
        GM = 800,
        WM = 16,
        HM = Date.now;

    function VM(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = HM(),
                s = WM - (n - r);
            if (r = n, s > 0) {
                if (++t >= GM) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var KM = VM,
        YM = jM,
        qM = KM,
        zM = qM(YM),
        XM = zM,
        JM = g1,
        ZM = xM,
        QM = XM;

    function eF(e, t) {
        return QM(ZM(e, t, JM), e + "")
    }
    var tF = eF,
        rF = wc,
        nF = Rc,
        iF = Gh,
        sF = hn;

    function aF(e, t, r) {
        if (!sF(r)) return !1;
        var n = typeof t;
        return (n == "number" ? nF(r) && iF(t, r.length) : n == "string" && t in r) ? rF(r[t], e) : !1
    }
    var oF = aF,
        lF = tF,
        cF = oF;

    function uF(e) {
        return lF(function(t, r) {
            var n = -1,
                s = r.length,
                o = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : void 0, l && cF(r[0], r[1], l) && (o = s < 3 ? void 0 : o, s = 1), t = Object(t); ++n < s;) {
                var u = r[n];
                u && e(t, u, n, o)
            }
            return t
        })
    }
    var fF = uF,
        dF = AM,
        hF = fF,
        pF = hF(function(e, t, r) {
            dF(e, t, r)
        }),
        gF = pF;
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
            return gF(t[0], ...t)
        }
    }
    ge(Bs, "locale"), ge(Bs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
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
    let ar = jp;
    ge(ar, "queryParams", new URLSearchParams(window.location.search)), ge(ar, "getQueryParam", t => jp.queryParams.get(t)), ge(ar, "sleep", t => new Promise(r => {
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
    class io {
        constructor() {
            ge(this, "artifacts");
            this.artifacts = this.list()
        }
        get hasUnviewed() {
            return this.artifacts.some(t => !t.viewed)
        }
        add(t, r) {
            io.add(t, r), this.artifacts = this.list()
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
            io.setAsViewed(t), this.artifacts = this.list()
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
    var Td = {
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

                function H(F) {
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
                                Se = be.join("=").replace(/\+/g, " ");
                            ie.append(decodeURIComponent(ve), decodeURIComponent(Se))
                        }
                    }), ie
                }

                function Ae(F) {
                    var ie = new P,
                        de = F.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(be) {
                        var ve = be.split(":"),
                            Se = ve.shift().trim();
                        if (Se) {
                            var Fe = ve.join(":").trim();
                            ie.append(Se, Fe)
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
                        var Se = new XMLHttpRequest;

                        function Fe() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var Ge = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: Ae(Se.getAllResponseHeaders() || "")
                            };
                            Ge.url = "responseURL" in Se ? Se.responseURL : Ge.headers.get("X-Request-URL");
                            var et = "response" in Se ? Se.response : Se.responseText;
                            de(new $e(et, Ge))
                        }, Se.onerror = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            be(new l.DOMException("Aborted", "AbortError"))
                        }, Se.open(ve.method, ve.url, !0), ve.credentials === "include" ? Se.withCredentials = !0 : ve.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && u.blob && (Se.responseType = "blob"), ve.headers.forEach(function(Ge, et) {
                            Se.setRequestHeader(et, Ge)
                        }), ve.signal && (ve.signal.addEventListener("abort", Fe), Se.onreadystatechange = function() {
                            Se.readyState === 4 && ve.signal.removeEventListener("abort", Fe)
                        }), Se.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                    })
                }
                return Ce.polyfill = !0, o.fetch || (o.fetch = Ce, o.Headers = P, o.Request = le, o.Response = $e), l.Headers = P, l.Request = le, l.Response = $e, l.fetch = Ce, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(Td, Td.exports);
    var mF = function() {
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
        vF = mF,
        yF = function() {
            return typeof yy != "function" || typeof Symbol != "function" || typeof yy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : vF()
        },
        _F = "Function.prototype.bind called on incompatible ",
        _f = Array.prototype.slice,
        bF = Object.prototype.toString,
        EF = "[object Function]",
        TF = function(t) {
            var r = this;
            if (typeof r != "function" || bF.call(r) !== EF) throw new TypeError(_F + r);
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
        SF = TF,
        Wh = Function.prototype.bind || SF,
        OF = Wh,
        wF = OF.call(Function.call, Object.prototype.hasOwnProperty),
        Je, zs = SyntaxError,
        m1 = Function,
        js = TypeError,
        bf = function(e) {
            try {
                return m1('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        es = Object.getOwnPropertyDescriptor;
    if (es) try {
        es({}, "")
    } catch {
        es = null
    }
    var Ef = function() {
            throw new js
        },
        CF = es ? function() {
            try {
                return arguments.callee, Ef
            } catch {
                try {
                    return es(arguments, "callee").get
                } catch {
                    return Ef
                }
            }
        }() : Ef,
        Ss = yF(),
        ii = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        As = {},
        $F = typeof Uint8Array > "u" ? Je : ii(Uint8Array),
        Gs = {
            "%AggregateError%": typeof AggregateError > "u" ? Je : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Je : ArrayBuffer,
            "%ArrayIteratorPrototype%": Ss ? ii([][Symbol.iterator]()) : Je,
            "%AsyncFromSyncIteratorPrototype%": Je,
            "%AsyncFunction%": As,
            "%AsyncGenerator%": As,
            "%AsyncGeneratorFunction%": As,
            "%AsyncIteratorPrototype%": As,
            "%Atomics%": typeof Atomics > "u" ? Je : Atomics,
            "%BigInt%": typeof BigInt > "u" ? Je : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? Je : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? Je : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? Je : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Je : FinalizationRegistry,
            "%Function%": m1,
            "%GeneratorFunction%": As,
            "%Int8Array%": typeof Int8Array > "u" ? Je : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? Je : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? Je : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Ss ? ii(ii([][Symbol.iterator]())) : Je,
            "%JSON%": typeof JSON == "object" ? JSON : Je,
            "%Map%": typeof Map > "u" ? Je : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Ss ? Je : ii(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? Je : Promise,
            "%Proxy%": typeof Proxy > "u" ? Je : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? Je : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? Je : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Ss ? Je : ii(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Je : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Ss ? ii("" [Symbol.iterator]()) : Je,
            "%Symbol%": Ss ? Symbol : Je,
            "%SyntaxError%": zs,
            "%ThrowTypeError%": CF,
            "%TypedArray%": $F,
            "%TypeError%": js,
            "%Uint8Array%": typeof Uint8Array > "u" ? Je : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Je : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? Je : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? Je : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? Je : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? Je : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? Je : WeakSet
        },
        IF = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = bf("async function () {}");
            else if (t === "%GeneratorFunction%") r = bf("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = bf("async function* () {}");
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
        ho = Wh,
        zl = wF,
        AF = ho.call(Function.call, Array.prototype.concat),
        NF = ho.call(Function.apply, Array.prototype.splice),
        by = ho.call(Function.call, String.prototype.replace),
        Xl = ho.call(Function.call, String.prototype.slice),
        RF = ho.call(Function.call, RegExp.prototype.exec),
        LF = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        PF = /\\(\\)?/g,
        kF = function(t) {
            var r = Xl(t, 0, 1),
                n = Xl(t, -1);
            if (r === "%" && n !== "%") throw new zs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new zs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return by(t, LF, function(o, l, u, f) {
                s[s.length] = u ? by(f, PF, "$1") : l || o
            }), s
        },
        xF = function(t, r) {
            var n = t,
                s;
            if (zl(_y, n) && (s = _y[n], n = "%" + s[0] + "%"), zl(Gs, n)) {
                var o = Gs[n];
                if (o === As && (o = IF(n)), typeof o > "u" && !r) throw new js("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: o
                }
            }
            throw new zs("intrinsic " + t + " does not exist!")
        },
        Hh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new js("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new js('"allowMissing" argument must be a boolean');
            if (RF(/^%?[^%]*%?$/g, t) === null) throw new zs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = kF(t),
                s = n.length > 0 ? n[0] : "",
                o = xF("%" + s + "%", r),
                l = o.name,
                u = o.value,
                f = !1,
                h = o.alias;
            h && (s = h[0], NF(n, AF([0, 1], h)));
            for (var g = 1, y = !0; g < n.length; g += 1) {
                var E = n[g],
                    C = Xl(E, 0, 1),
                    P = Xl(E, -1);
                if ((C === '"' || C === "'" || C === "`" || P === '"' || P === "'" || P === "`") && C !== P) throw new zs("property names with quotes must have matching quotes");
                if ((E === "constructor" || !y) && (f = !0), s += "." + E, l = "%" + s + "%", zl(Gs, l)) u = Gs[l];
                else if (u != null) {
                    if (!(E in u)) {
                        if (!r) throw new js("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (es && g + 1 >= n.length) {
                        var M = es(u, E);
                        y = !!M, y && "get" in M && !("originalValue" in M.get) ? u = M.get : u = u[E]
                    } else y = zl(u, E), u = u[E];
                    y && !f && (Gs[l] = u)
                }
            }
            return u
        },
        v1 = {
            exports: {}
        };
    (function(e) {
        var t = Wh,
            r = Hh,
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
    })(v1);
    var y1 = Hh,
        _1 = v1.exports,
        DF = _1(y1("String.prototype.indexOf")),
        MF = function(t, r) {
            var n = y1(t, !!r);
            return typeof n == "function" && DF(t, ".prototype.") > -1 ? _1(n) : n
        };
    const FF = {},
        UF = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: FF
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        BF = H2(UF);
    var Vh = typeof Map == "function" && Map.prototype,
        Tf = Object.getOwnPropertyDescriptor && Vh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Jl = Vh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        jF = Vh && Map.prototype.forEach,
        Kh = typeof Set == "function" && Set.prototype,
        Sf = Object.getOwnPropertyDescriptor && Kh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Zl = Kh && Sf && typeof Sf.get == "function" ? Sf.get : null,
        GF = Kh && Set.prototype.forEach,
        WF = typeof WeakMap == "function" && WeakMap.prototype,
        ja = WF ? WeakMap.prototype.has : null,
        HF = typeof WeakSet == "function" && WeakSet.prototype,
        Ga = HF ? WeakSet.prototype.has : null,
        VF = typeof WeakRef == "function" && WeakRef.prototype,
        Ey = VF ? WeakRef.prototype.deref : null,
        KF = Boolean.prototype.valueOf,
        YF = Object.prototype.toString,
        qF = Function.prototype.toString,
        zF = String.prototype.match,
        Yh = String.prototype.slice,
        oi = String.prototype.replace,
        XF = String.prototype.toUpperCase,
        Ty = String.prototype.toLowerCase,
        b1 = RegExp.prototype.test,
        Sy = Array.prototype.concat,
        Sn = Array.prototype.join,
        JF = Array.prototype.slice,
        Oy = Math.floor,
        Sd = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Of = Object.getOwnPropertySymbols,
        Od = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Xs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        cr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Xs ? "object" : "symbol") ? Symbol.toStringTag : null,
        E1 = Object.prototype.propertyIsEnumerable,
        wy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function Cy(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || b1.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -Oy(-e) : Oy(e);
            if (n !== e) {
                var s = String(n),
                    o = Yh.call(t, s.length + 1);
                return oi.call(s, r, "$&_") + "." + oi.call(oi.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return oi.call(t, r, "$&_")
    }
    var wd = BF,
        $y = wd.custom,
        Iy = S1($y) ? $y : null,
        ZF = function e(t, r, n, s) {
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
            if (typeof t == "string") return w1(t, o);
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
            if (typeof n > "u" && (n = 0), n >= g && g > 0 && typeof t == "object") return Cd(t) ? "[Array]" : "[Object]";
            var y = m4(o, n);
            if (typeof s > "u") s = [];
            else if (O1(s, t) >= 0) return "[Circular]";

            function E(Ce, F, ie) {
                if (F && (s = JF.call(s), s.push(F)), ie) {
                    var de = {
                        depth: o.depth
                    };
                    return si(o, "quoteStyle") && (de.quoteStyle = o.quoteStyle), e(Ce, de, n + 1, s)
                }
                return e(Ce, o, n + 1, s)
            }
            if (typeof t == "function" && !Ay(t)) {
                var C = o4(t),
                    P = ml(t, E);
                return "[Function" + (C ? ": " + C : " (anonymous)") + "]" + (P.length > 0 ? " { " + Sn.call(P, ", ") + " }" : "")
            }
            if (S1(t)) {
                var M = Xs ? oi.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Od.call(t);
                return typeof t == "object" && !Xs ? Na(M) : M
            }
            if (h4(t)) {
                for (var B = "<" + Ty.call(String(t.nodeName)), $ = t.attributes || [], H = 0; H < $.length; H++) B += " " + $[H].name + "=" + T1(QF($[H].value), "double", o);
                return B += ">", t.childNodes && t.childNodes.length && (B += "..."), B += "</" + Ty.call(String(t.nodeName)) + ">", B
            }
            if (Cd(t)) {
                if (t.length === 0) return "[]";
                var q = ml(t, E);
                return y && !g4(q) ? "[" + $d(q, y) + "]" : "[ " + Sn.call(q, ", ") + " ]"
            }
            if (t4(t)) {
                var G = ml(t, E);
                return !("cause" in Error.prototype) && "cause" in t && !E1.call(t, "cause") ? "{ [" + String(t) + "] " + Sn.call(Sy.call("[cause]: " + E(t.cause), G), ", ") + " }" : G.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Sn.call(G, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Iy && typeof t[Iy] == "function" && wd) return wd(t, {
                    depth: g - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (l4(t)) {
                var j = [];
                return jF.call(t, function(Ce, F) {
                    j.push(E(F, t, !0) + " => " + E(Ce, t))
                }), Ny("Map", Jl.call(t), j, y)
            }
            if (f4(t)) {
                var J = [];
                return GF.call(t, function(Ce) {
                    J.push(E(Ce, t))
                }), Ny("Set", Zl.call(t), J, y)
            }
            if (c4(t)) return wf("WeakMap");
            if (d4(t)) return wf("WeakSet");
            if (u4(t)) return wf("WeakRef");
            if (n4(t)) return Na(E(Number(t)));
            if (s4(t)) return Na(E(Sd.call(t)));
            if (i4(t)) return Na(KF.call(t));
            if (r4(t)) return Na(E(String(t)));
            if (!e4(t) && !Ay(t)) {
                var oe = ml(t, E),
                    le = wy ? wy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    Ae = !le && cr && Object(t) === t && cr in t ? Yh.call(yi(t), 8, -1) : ue ? "Object" : "",
                    $e = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = $e + (Ae || ue ? "[" + Sn.call(Sy.call([], Ae || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : y ? fe + "{" + $d(oe, y) + "}" : fe + "{ " + Sn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function T1(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function QF(e) {
        return oi.call(String(e), /"/g, "&quot;")
    }

    function Cd(e) {
        return yi(e) === "[object Array]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function e4(e) {
        return yi(e) === "[object Date]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function Ay(e) {
        return yi(e) === "[object RegExp]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function t4(e) {
        return yi(e) === "[object Error]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function r4(e) {
        return yi(e) === "[object String]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function n4(e) {
        return yi(e) === "[object Number]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function i4(e) {
        return yi(e) === "[object Boolean]" && (!cr || !(typeof e == "object" && cr in e))
    }

    function S1(e) {
        if (Xs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Od) return !1;
        try {
            return Od.call(e), !0
        } catch {}
        return !1
    }

    function s4(e) {
        if (!e || typeof e != "object" || !Sd) return !1;
        try {
            return Sd.call(e), !0
        } catch {}
        return !1
    }
    var a4 = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function si(e, t) {
        return a4.call(e, t)
    }

    function yi(e) {
        return YF.call(e)
    }

    function o4(e) {
        if (e.name) return e.name;
        var t = zF.call(qF.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function O1(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function l4(e) {
        if (!Jl || !e || typeof e != "object") return !1;
        try {
            Jl.call(e);
            try {
                Zl.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function c4(e) {
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

    function u4(e) {
        if (!Ey || !e || typeof e != "object") return !1;
        try {
            return Ey.call(e), !0
        } catch {}
        return !1
    }

    function f4(e) {
        if (!Zl || !e || typeof e != "object") return !1;
        try {
            Zl.call(e);
            try {
                Jl.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function d4(e) {
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

    function h4(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function w1(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return w1(Yh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = oi.call(oi.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, p4);
        return T1(s, "single", t)
    }

    function p4(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + XF.call(t.toString(16))
    }

    function Na(e) {
        return "Object(" + e + ")"
    }

    function wf(e) {
        return e + " { ? }"
    }

    function Ny(e, t, r, n) {
        var s = n ? $d(r, n) : Sn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function g4(e) {
        for (var t = 0; t < e.length; t++)
            if (O1(e[t], `
`) >= 0) return !1;
        return !0
    }

    function m4(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Sn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Sn.call(Array(t + 1), r)
        }
    }

    function $d(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Sn.call(e, "," + r) + `
` + t.prev
    }

    function ml(e, t) {
        var r = Cd(e),
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
        for (var f in e) !si(e, f) || r && String(Number(f)) === f && f < e.length || Xs && l["$" + f] instanceof Symbol || (b1.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Of == "function")
            for (var h = 0; h < o.length; h++) E1.call(e, o[h]) && n.push("[" + t(o[h]) + "]: " + t(e[o[h]], e));
        return n
    }
    var qh = Hh,
        la = MF,
        v4 = ZF,
        y4 = qh("%TypeError%"),
        vl = qh("%WeakMap%", !0),
        yl = qh("%Map%", !0),
        _4 = la("WeakMap.prototype.get", !0),
        b4 = la("WeakMap.prototype.set", !0),
        E4 = la("WeakMap.prototype.has", !0),
        T4 = la("Map.prototype.get", !0),
        S4 = la("Map.prototype.set", !0),
        O4 = la("Map.prototype.has", !0),
        zh = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        w4 = function(e, t) {
            var r = zh(e, t);
            return r && r.value
        },
        C4 = function(e, t, r) {
            var n = zh(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        $4 = function(e, t) {
            return !!zh(e, t)
        },
        I4 = function() {
            var t, r, n, s = {
                assert: function(o) {
                    if (!s.has(o)) throw new y4("Side channel does not contain " + v4(o))
                },
                get: function(o) {
                    if (vl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return _4(t, o)
                    } else if (yl) {
                        if (r) return T4(r, o)
                    } else if (n) return w4(n, o)
                },
                has: function(o) {
                    if (vl && o && (typeof o == "object" || typeof o == "function")) {
                        if (t) return E4(t, o)
                    } else if (yl) {
                        if (r) return O4(r, o)
                    } else if (n) return $4(n, o);
                    return !1
                },
                set: function(o, l) {
                    vl && o && (typeof o == "object" || typeof o == "function") ? (t || (t = new vl), b4(t, o, l)) : yl ? (r || (r = new yl), S4(r, o, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), C4(n, o, l))
                }
            };
            return s
        },
        A4 = String.prototype.replace,
        N4 = /%20/g,
        Cf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Xh = {
            default: Cf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return A4.call(e, N4, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: Cf.RFC1738,
            RFC3986: Cf.RFC3986
        },
        R4 = Xh,
        $f = Object.prototype.hasOwnProperty,
        Yi = Array.isArray,
        yn = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        L4 = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (Yi(n)) {
                    for (var s = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && s.push(n[o]);
                    r.obj[r.prop] = s
                }
            }
        },
        C1 = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        P4 = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (Yi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !$f.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return Yi(t) && !Yi(r) && (s = C1(t, n)), Yi(t) && Yi(r) ? (r.forEach(function(o, l) {
                if ($f.call(t, l)) {
                    var u = t[l];
                    u && typeof u == "object" && o && typeof o == "object" ? t[l] = e(u, o, n) : t.push(o)
                } else t[l] = o
            }), t) : Object.keys(r).reduce(function(o, l) {
                var u = r[l];
                return $f.call(o, l) ? o[l] = e(o[l], u, n) : o[l] = u, o
            }, s)
        },
        k4 = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        x4 = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        D4 = function(t, r, n, s, o) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(g) {
                return "%26%23" + parseInt(g.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < l.length; ++f) {
                var h = l.charCodeAt(f);
                if (h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || o === R4.RFC1738 && (h === 40 || h === 41)) {
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
        M4 = function(t) {
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
            return L4(r), t
        },
        F4 = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        U4 = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        B4 = function(t, r) {
            return [].concat(t, r)
        },
        j4 = function(t, r) {
            if (Yi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        $1 = {
            arrayToObject: C1,
            assign: k4,
            combine: B4,
            compact: M4,
            decode: x4,
            encode: D4,
            isBuffer: U4,
            isRegExp: F4,
            maybeMap: j4,
            merge: P4
        },
        I1 = I4,
        Id = $1,
        Wa = Xh,
        G4 = Object.prototype.hasOwnProperty,
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
        W4 = String.prototype.split,
        H4 = Array.prototype.push,
        A1 = function(e, t) {
            H4.apply(e, Dn(t) ? t : [t])
        },
        V4 = Date.prototype.toISOString,
        Ly = Wa.default,
        Zt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Id.encode,
            encodeValuesOnly: !1,
            format: Ly,
            formatter: Wa.formatters[Ly],
            indices: !1,
            serializeDate: function(t) {
                return V4.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        K4 = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        If = {},
        Y4 = function e(t, r, n, s, o, l, u, f, h, g, y, E, C, P, M, B) {
            for (var $ = t, H = B, q = 0, G = !1;
                (H = H.get(If)) !== void 0 && !G;) {
                var j = H.get(t);
                if (q += 1, typeof j < "u") {
                    if (j === q) throw new RangeError("Cyclic object value");
                    G = !0
                }
                typeof H.get(If) > "u" && (q = 0)
            }
            if (typeof f == "function" ? $ = f(r, $) : $ instanceof Date ? $ = y($) : n === "comma" && Dn($) && ($ = Id.maybeMap($, function(Se) {
                    return Se instanceof Date ? y(Se) : Se
                })), $ === null) {
                if (o) return u && !P ? u(r, Zt.encoder, M, "key", E) : r;
                $ = ""
            }
            if (K4($) || Id.isBuffer($)) {
                if (u) {
                    var J = P ? r : u(r, Zt.encoder, M, "key", E);
                    if (n === "comma" && P) {
                        for (var oe = W4.call(String($), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + C(u(oe[ue], Zt.encoder, M, "value", E));
                        return [C(J) + (s && Dn($) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [C(J) + "=" + C(u($, Zt.encoder, M, "value", E))]
                }
                return [C(r) + "=" + C(String($))]
            }
            var Ae = [];
            if (typeof $ > "u") return Ae;
            var $e;
            if (n === "comma" && Dn($)) $e = [{
                value: $.length > 0 ? $.join(",") || null : void 0
            }];
            else if (Dn(f)) $e = f;
            else {
                var fe = Object.keys($);
                $e = h ? fe.sort(h) : fe
            }
            for (var Ce = s && Dn($) && $.length === 1 ? r + "[]" : r, F = 0; F < $e.length; ++F) {
                var ie = $e[F],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : $[ie];
                if (!(l && de === null)) {
                    var be = Dn($) ? typeof n == "function" ? n(Ce, ie) : Ce : Ce + (g ? "." + ie : "[" + ie + "]");
                    B.set(t, q);
                    var ve = I1();
                    ve.set(If, B), A1(Ae, e(de, be, n, s, o, l, u, f, h, g, y, E, C, P, M, ve))
                }
            }
            return Ae
        },
        q4 = function(t) {
            if (!t) return Zt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Zt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Wa.default;
            if (typeof t.format < "u") {
                if (!G4.call(Wa.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Wa.formatters[n],
                o = Zt.filter;
            return (typeof t.filter == "function" || Dn(t.filter)) && (o = t.filter), {
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
        z4 = function(e, t) {
            var r = e,
                n = q4(t),
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
            for (var g = I1(), y = 0; y < s.length; ++y) {
                var E = s[y];
                n.skipNulls && r[E] === null || A1(l, Y4(r[E], E, f, h, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, g))
            }
            var C = l.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), C.length > 0 ? P + C : ""
        },
        Js = $1,
        Ad = Object.prototype.hasOwnProperty,
        X4 = Array.isArray,
        Kt = {
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
        J4 = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        N1 = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        Z4 = "utf8=%26%2310003%3B",
        Q4 = "utf8=%E2%9C%93",
        eU = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, o),
                u = -1,
                f, h = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === Q4 ? h = "utf-8" : l[f] === Z4 && (h = "iso-8859-1"), u = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== u) {
                    var g = l[f],
                        y = g.indexOf("]="),
                        E = y === -1 ? g.indexOf("=") : y + 1,
                        C, P;
                    E === -1 ? (C = r.decoder(g, Kt.decoder, h, "key"), P = r.strictNullHandling ? null : "") : (C = r.decoder(g.slice(0, E), Kt.decoder, h, "key"), P = Js.maybeMap(N1(g.slice(E + 1), r), function(M) {
                        return r.decoder(M, Kt.decoder, h, "value")
                    })), P && r.interpretNumericEntities && h === "iso-8859-1" && (P = J4(P)), g.indexOf("[]=") > -1 && (P = X4(P) ? [P] : P), Ad.call(n, C) ? n[C] = Js.combine(n[C], P) : n[C] = P
                } return n
        },
        tU = function(e, t, r, n) {
            for (var s = n ? t : N1(t, r), o = e.length - 1; o >= 0; --o) {
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
        rU = function(t, r, n, s) {
            if (!!t) {
                var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    l = /(\[[^[\]]*])/,
                    u = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && l.exec(o),
                    h = f ? o.slice(0, f.index) : o,
                    g = [];
                if (h) {
                    if (!n.plainObjects && Ad.call(Object.prototype, h) && !n.allowPrototypes) return;
                    g.push(h)
                }
                for (var y = 0; n.depth > 0 && (f = u.exec(o)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && Ad.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    g.push(f[1])
                }
                return f && g.push("[" + o.slice(f.index) + "]"), tU(g, r, n, s)
            }
        },
        nU = function(t) {
            if (!t) return Kt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof t.charset > "u" ? Kt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? Kt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : Kt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : Kt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : Kt.arrayLimit,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Kt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : Kt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : Kt.decoder,
                delimiter: typeof t.delimiter == "string" || Js.isRegExp(t.delimiter) ? t.delimiter : Kt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : Kt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : Kt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : Kt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : Kt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Kt.strictNullHandling
            }
        },
        iU = function(e, t) {
            var r = nU(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? eU(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, o = Object.keys(n), l = 0; l < o.length; ++l) {
                var u = o[l],
                    f = rU(u, n[u], r, typeof e == "string");
                s = Js.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Js.compact(s)
        },
        sU = z4,
        aU = iU,
        oU = Xh,
        R1 = {
            formats: oU,
            parse: aU,
            stringify: sU
        };
    class lU {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class cU {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class uU {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class fU {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class dU {}
    var Lc = {
        CreateRoomReply: lU,
        GetRoomReply: cU,
        GetAudienceReply: uU,
        RoomExit: fU,
        RoomLock: dU
    };
    const Py = Td.exports,
        hU = R1,
        {
            CreateRoomReply: pU,
            GetRoomReply: gU
        } = Lc;
    class mU {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = hU.stringify(r);
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
                l = await (await Py(n, {
                    method: "POST"
                })).json();
            if (!l.ok) throw new Error(`failed to create room: ${l.error}`);
            let u = l.body;
            return new pU({
                code: u.code,
                token: u.token,
                host: u.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await Py(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let o = s.body;
            return new gU({
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
    var vU = {
            APIClient: mU
        },
        Ns = null;
    typeof WebSocket < "u" ? Ns = WebSocket : typeof MozWebSocket < "u" ? Ns = MozWebSocket : typeof kt < "u" ? Ns = kt.WebSocket || kt.MozWebSocket : typeof window < "u" ? Ns = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ns = self.WebSocket || self.MozWebSocket);
    var yU = Ns,
        Jh = {
            exports: {}
        },
        Ws = typeof Reflect == "object" ? Reflect : null,
        ky = Ws && typeof Ws.apply == "function" ? Ws.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        kl;
    Ws && typeof Ws.ownKeys == "function" ? kl = Ws.ownKeys : Object.getOwnPropertySymbols ? kl = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : kl = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function _U(e) {
        console && console.warn && console.warn(e)
    }
    var L1 = Number.isNaN || function(t) {
        return t !== t
    };

    function ht() {
        ht.init.call(this)
    }
    Jh.exports = ht;
    Jh.exports.once = SU;
    ht.EventEmitter = ht;
    ht.prototype._events = void 0;
    ht.prototype._eventsCount = 0;
    ht.prototype._maxListeners = void 0;
    var xy = 10;

    function Pc(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(ht, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return xy
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || L1(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            xy = e
        }
    });
    ht.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    ht.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || L1(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function P1(e) {
        return e._maxListeners === void 0 ? ht.defaultMaxListeners : e._maxListeners
    }
    ht.prototype.getMaxListeners = function() {
        return P1(this)
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
            for (var h = f.length, g = F1(f, h), n = 0; n < h; ++n) ky(g[n], this, r);
        return !0
    };

    function k1(e, t, r, n) {
        var s, o, l;
        if (Pc(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), l = o[t]), l === void 0) l = o[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = o[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = P1(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = l.length, _U(u)
        }
        return e
    }
    ht.prototype.addListener = function(t, r) {
        return k1(this, t, r, !1)
    };
    ht.prototype.on = ht.prototype.addListener;
    ht.prototype.prependListener = function(t, r) {
        return k1(this, t, r, !0)
    };

    function bU() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function x1(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = bU.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    ht.prototype.once = function(t, r) {
        return Pc(r), this.on(t, x1(this, t, r)), this
    };
    ht.prototype.prependOnceListener = function(t, r) {
        return Pc(r), this.prependListener(t, x1(this, t, r)), this
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
            o === 0 ? n.shift() : EU(n, o), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, u || r)
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

    function D1(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? TU(s) : F1(s, s.length)
    }
    ht.prototype.listeners = function(t) {
        return D1(this, t, !0)
    };
    ht.prototype.rawListeners = function(t) {
        return D1(this, t, !1)
    };
    ht.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : M1.call(e, t)
    };
    ht.prototype.listenerCount = M1;

    function M1(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    ht.prototype.eventNames = function() {
        return this._eventsCount > 0 ? kl(this._events) : []
    };

    function F1(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function EU(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function TU(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function SU(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, o), n(l)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            U1(e, t, o, {
                once: !0
            }), t !== "error" && OU(e, s, {
                once: !0
            })
        })
    }

    function OU(e, t, r) {
        typeof e.on == "function" && U1(e, "error", t, r)
    }

    function U1(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(o) {
            n.once && e.removeEventListener(t, s), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class wU {
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
    class kc extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class po extends kc {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class B1 extends po {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class j1 extends po {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class G1 extends po {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ut extends kc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class W1 extends ut {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class H1 extends ut {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class V1 extends ut {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class K1 extends ut {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class Y1 extends ut {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class q1 extends ut {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class z1 extends ut {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class X1 extends ut {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class J1 extends ut {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class Z1 extends ut {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class Q1 extends ut {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class eT extends ut {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class tT extends ut {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class rT extends ut {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class nT extends ut {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class iT extends ut {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class sT extends ut {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class aT extends ut {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class oT extends ut {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class lT extends ut {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class cT extends ut {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class uT extends ut {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class fT extends ut {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class dT extends ut {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class hT extends ut {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class pT extends ut {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class gT extends ut {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class mT extends ut {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function CU({
        code: e,
        message: t
    }) {
        const r = $U[e];
        return r ? new r({
            message: t
        }) : new kc({
            message: t
        })
    }
    var Ha = {
        createError: CU,
        CallError: kc,
        EcastServerError: po,
        EcastCreateRoomFailed: B1,
        EcastDialRoomFailed: j1,
        EcastServerIsShuttingDown: G1,
        EcastClientError: ut,
        EcastParseError: W1,
        EcastRequestIsMissingOpcode: H1,
        EcastRequestHasInvalidOpcode: V1,
        EcastRequestHasInvalidArguments: K1,
        EcastEntityNotFound: Y1,
        EcastEntityAlreadyExists: q1,
        EcastEntityTypeError: z1,
        EcastNoSuchClient: X1,
        EcastRoomIsLocked: J1,
        EcastRoomIsFull: Z1,
        EcastLicenseNotFound: Q1,
        EcastLicenseCheckFailed: eT,
        EcastRoomNotFound: tT,
        EcastInvalidRole: rT,
        EcastTwitchLoginRequired: nT,
        EcastInvalidOption: iT,
        EcastPasswordRequired: sT,
        EcastInvalidPassword: aT,
        EcastNameRequired: oT,
        EcastFilterError: lT,
        EcastNoSuchFilter: cT,
        EcastPermissionDenied: uT,
        EcastNotConnected: fT,
        EcastIllegalOperation: dT,
        EcastACLChangeDenied: hT,
        EcastRoomHasEnded: pT,
        EcastEntityLocked: gT,
        EcastRateLimitExceeded: mT,
        ObservedError: wU
    };
    const $U = {
        1e3: po,
        1001: B1,
        1002: j1,
        1003: G1,
        2e3: ut,
        2001: W1,
        2002: H1,
        2003: V1,
        2004: K1,
        2005: Y1,
        2006: q1,
        2007: z1,
        2008: X1,
        2009: J1,
        2010: Z1,
        2011: Q1,
        2012: eT,
        2013: tT,
        2014: rT,
        2015: nT,
        2016: iT,
        2017: sT,
        2018: aT,
        2019: oT,
        2021: lT,
        2022: cT,
        2023: uT,
        2024: fT,
        2025: dT,
        2026: hT,
        2027: pT,
        2028: gT,
        2420: mT
    };
    class IU {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class AU {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class NU {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class RU {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class LU {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var Zh = {
        ClientConnected: AU,
        ClientDisconnected: NU,
        ClientKicked: LU,
        ClientSend: RU,
        ClientWelcome: IU
    };
    class PU {
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
        CountGroup: PU
    };
    class kU {
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
    var ep = {
        GCounter: kU
    };
    class xU {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var vT = {
        Notification: xU
    };
    class DU {
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
    class MU {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var tp = {
        ObjectEntity: DU,
        ObjectEcho: MU
    };
    class FU {
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
    var rp = {
        PNCounter: FU
    };
    class UU {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var yT = {
        Reply: UU
    };
    class BU {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var jU = {
        Request: BU
    };
    class GU {
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
    class WU {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var np = {
        TextEntity: GU,
        TextEcho: WU
    };
    class HU {
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
    var ip = {
        TextRing: HU
    };
    class VU {
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
    var _T = {
        ArtifactEntity: VU
    };
    class KU {
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
    class YU {
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
    class qU {
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
    var sp = {
        DoodleEntity: KU,
        DoodleLine: YU,
        DoodleLineRemoved: qU
    };
    class zU {
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
    class XU {
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
    class JU {
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
    var bT = {
        StackEntity: zU,
        StackElement: XU,
        StackElements: JU
    };
    class ZU {
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
    var ET = {
        DropEntity: ZU
    };
    class QU {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var e8 = {
        Echo: QU
    };
    class t8 {
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
    var r8 = {
        LockEntity: t8
    };
    class n8 {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var TT = {
        OK: n8
    };
    class i8 {
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
    var ST = {
        NumberEntity: i8
    };
    const {
        ArtifactEntity: s8
    } = _T, {
        ClientWelcome: a8,
        ClientConnected: o8,
        ClientDisconnected: l8,
        ClientKicked: c8,
        ClientSend: u8
    } = Zh, {
        CountGroup: f8
    } = Qh, {
        DoodleEntity: d8,
        DoodleLine: h8,
        DoodleLineRemoved: p8
    } = sp, {
        StackEntity: g8,
        StackElement: m8,
        StackElements: v8
    } = bT, {
        DropEntity: y8
    } = ET, {
        Echo: _8
    } = e8, {
        LockEntity: b8
    } = r8, {
        GCounter: E8
    } = ep, {
        GetAudienceReply: T8,
        RoomExit: S8,
        RoomLock: O8
    } = Lc, {
        Notification: w8
    } = vT, {
        OK: C8
    } = TT, {
        NumberEntity: $8
    } = ST, {
        ObjectEcho: I8,
        ObjectEntity: A8
    } = tp, {
        PNCounter: Dy
    } = rp, {
        Reply: N8
    } = yT, {
        TextEcho: R8,
        TextEntity: L8
    } = np, {
        TextRing: P8
    } = ip, {
        createError: My,
        ObservedError: k8
    } = Ha;

    function Nd(e, t, r) {
        switch (e) {
            case "ok":
                return new C8;
            case "echo":
                return new _8({
                    message: t.message
                });
            case "lock":
                return new b8({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return My({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new k8({
                    to: t.to,
                    error: My({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new L8({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new R8({
                    message: t.message
                });
            case "object":
                return new A8({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new I8({
                    message: t.message
                });
            case "drop":
                return new y8({
                    key: t.key
                });
            case "artifact":
                return new s8({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new o8({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new l8({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new c8({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new u8({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new a8({
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
                        s[o] = Nd(l[0], l[1], l[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new d8({
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
                return new h8({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new p8({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new g8({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new m8({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new v8({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new $8({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new S8({
                    cause: t.cause
                });
            case "room/lock":
                return new O8;
            case "room/get-audience":
                return new T8({
                    connections: t.connections
                });
            case "audience":
                return new Dy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new f8({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new P8({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new E8({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new Dy({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function x8(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new N8({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Nd(r, t.result)
        }) : new w8({
            pc: t.pc,
            opcode: r,
            result: Nd(r, t.result)
        })
    }
    var D8 = {
        parseResponseMessage: x8
    };
    const Fy = yU,
        M8 = R1,
        F8 = Jh.exports,
        {
            CallError: U8
        } = Ha,
        {
            ClientWelcome: B8
        } = Zh,
        {
            CountGroup: j8
        } = Qh,
        {
            GCounter: G8
        } = ep,
        {
            Notification: Uy
        } = vT,
        {
            ObjectEntity: Af
        } = tp,
        {
            PNCounter: W8
        } = rp,
        {
            Reply: H8
        } = yT,
        {
            Request: V8
        } = jU,
        {
            TextEntity: Nf
        } = np,
        {
            TextRing: K8
        } = ip,
        {
            parseResponseMessage: Y8
        } = D8,
        {
            DoodleEntity: q8
        } = sp,
        {
            StackEntity: z8
        } = bT,
        X8 = 1e3 + Math.floor(Math.random() * 500),
        By = 13e3;
    class J8 extends F8 {
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
            const r = M8.stringify(t),
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
                    const y = Y8(g);
                    if (y instanceof H8) this.onReply(y);
                    else if (y instanceof Uy) {
                        if (y.result instanceof B8) u = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
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
                r = X8;
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
                const s = new Uy(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof U8 ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== Fy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new V8({
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
            return this.entities[t] = new q8({
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
            return this.entities[t] = new z8({
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
            return this.entities[t] = new j8({
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
            return this.entities[t] = new G8({
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
            return this.entities[t] = new W8({
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
            return this.entities[t] = new K8({
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
    var Z8 = {
        WSClient: J8
    };
    const {
        APIClient: Q8
    } = vU, {
        WSClient: e5
    } = Z8, {
        CreateRoomReply: t5,
        GetRoomReply: r5
    } = Lc, {
        ClientWelcome: n5,
        ClientDisconnected: i5
    } = Zh, {
        ArtifactEntity: s5
    } = _T, {
        GCounter: a5
    } = ep, {
        NumberEntity: o5
    } = ST, {
        TextEntity: l5
    } = np, {
        DoodleEntity: c5
    } = sp, {
        ObjectEntity: u5
    } = tp, {
        CountGroup: f5
    } = Qh, {
        DropEntity: d5
    } = ET, {
        OK: h5
    } = TT, {
        RoomExit: p5
    } = Lc, {
        TextRing: g5
    } = ip, {
        PNCounter: m5
    } = rp;
    var Sr = {
        APIClient: Q8,
        WSClient: e5,
        ClientWelcome: n5,
        CreateRoomReply: t5,
        DropEntity: d5,
        GetRoomReply: r5,
        ClientDisconnected: i5,
        RoomExit: p5,
        OK: h5,
        ArtifactEntity: s5,
        DoodleEntity: c5,
        NumberEntity: o5,
        CountGroup: f5,
        GCounter: a5,
        ObjectEntity: u5,
        PNCounter: m5,
        TextEntity: l5,
        TextRing: g5
    };
    const v5 = [{
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
        Rd = e => v5.find(t => t.tag === e || t.categoryId === e);

    function Ld(...e) {
        console.log(...e)
    }
    class y5 {
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
            Ld("[Debug] pushEntity", t), t instanceof Sr.ArtifactEntity ? this.items.push({
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
            const n = Rd(this.room.appTag),
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
                    const B = Rd(this.room.appTag);
                    C.username = `DebugRecorder ${B?B.name:this.room.appTag}`
                }
                const M = await (await fetch(h, {
                    method: "POST",
                    body: JSON.stringify(C)
                })).text();
                Ld("[Debug] sendToSlack", M)
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

    function _5(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var jy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(kt, function(r) {
            var n = typeof window < "u" ? window : typeof kt < "u" ? kt : typeof self < "u" ? self : {},
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
                        Q = u(S[2]);
                    L === null || Q === null || L in R || (R[L] = Q)
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

            function H(w) {
                return (w || "").toString().replace($, "")
            }
            var q = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, R) {
                        return J(R.protocol) ? T.replace(/\\/g, "/") : T
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
                var R = T.location || {};
                w = w || R;
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
                w = H(w), T = T || {};
                var R = M.exec(w),
                    S = R[1] ? R[1].toLowerCase() : "",
                    L = !!R[2],
                    Q = !!R[3],
                    ne = 0,
                    _e;
                return L ? Q ? (_e = R[2] + R[3] + R[4], ne = R[2].length + R[3].length) : (_e = R[2] + R[4], ne = R[2].length) : Q ? (_e = R[3] + R[4], ne = R[3].length) : _e = R[4], S === "file:" ? ne >= 2 && (_e = _e.slice(2)) : J(S) ? _e = R[4] : S ? L && (_e = _e.slice(2)) : ne >= 2 && J(T.protocol) && (_e = R[4]), {
                    protocol: S,
                    slashes: L || J(S),
                    slashesCount: ne,
                    rest: _e
                }
            }

            function le(w, T) {
                if (w === "") return T;
                for (var R = (T || "/").split("/").slice(0, -1).concat(w.split("/")), S = R.length, L = R[S - 1], Q = !1, ne = 0; S--;) R[S] === "." ? R.splice(S, 1) : R[S] === ".." ? (R.splice(S, 1), ne++) : ne && (S === 0 && (Q = !0), R.splice(S, 1), ne--);
                return Q && R.unshift(""), (L === "." || L === "..") && R.push(""), R.join("/")
            }

            function ue(w, T, R) {
                if (w = H(w), !(this instanceof ue)) return new ue(w, T, R);
                var S, L, Q, ne, _e, Te, ft = q.slice(),
                    nr = typeof T,
                    De = this,
                    da = 0;
                for (nr !== "object" && nr !== "string" && (R = T, T = null), R && typeof R != "function" && (R = C.parse), T = j(T), L = oe(w || "", T), S = !L.protocol && !L.slashes, De.slashes = L.slashes || S && T.slashes, De.protocol = L.protocol || T.protocol || "", w = L.rest, (De.protocol === "file:" || !L.slashes && (L.protocol || L.slashesCount < 2 || !J(De.protocol))) && (ft[3] = [/(.*)/, "pathname"]); da < ft.length; da++) {
                    if (ne = ft[da], typeof ne == "function") {
                        w = ne(w, De);
                        continue
                    }
                    Q = ne[0], Te = ne[1], Q !== Q ? De[Te] = w : typeof Q == "string" ? ~(_e = w.indexOf(Q)) && (typeof ne[2] == "number" ? (De[Te] = w.slice(0, _e), w = w.slice(_e + ne[2])) : (De[Te] = w.slice(_e), w = w.slice(0, _e))) : (_e = Q.exec(w)) && (De[Te] = _e[1], w = w.slice(0, _e.index)), De[Te] = De[Te] || S && ne[3] && T[Te] || "", ne[4] && (De[Te] = De[Te].toLowerCase())
                }
                R && (De.query = R(De.query)), S && T.slashes && De.pathname.charAt(0) !== "/" && (De.pathname !== "" || T.pathname !== "") && (De.pathname = le(De.pathname, T.pathname)), De.pathname.charAt(0) !== "/" && J(De.protocol) && (De.pathname = "/" + De.pathname), s(De.port, De.protocol) || (De.host = De.hostname, De.port = ""), De.username = De.password = "", De.auth && (ne = De.auth.split(":"), De.username = ne[0] || "", De.password = ne[1] || ""), De.origin = De.protocol !== "file:" && J(De.protocol) && De.host ? De.protocol + "//" + De.host : "null", De.href = De.toString()
            }

            function Ae(w, T, R) {
                var S = this;
                switch (w) {
                    case "query":
                        typeof T == "string" && T.length && (T = (R || C.parse)(T)), S[w] = T;
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
                for (var Q = 0; Q < q.length; Q++) {
                    var ne = q[Q];
                    ne[4] && (S[ne[1]] = S[ne[1]].toLowerCase())
                }
                return S.origin = S.protocol !== "file:" && J(S.protocol) && S.host ? S.protocol + "//" + S.host : "null", S.href = S.toString(), S
            }

            function $e(w) {
                (!w || typeof w != "function") && (w = C.stringify);
                var T, R = this,
                    S = R.protocol;
                S && S.charAt(S.length - 1) !== ":" && (S += ":");
                var L = S + (R.slashes || J(R.protocol) ? "//" : "");
                return R.username && (L += R.username, R.password && (L += ":" + R.password), L += "@"), L += R.host + R.pathname, T = typeof R.query == "object" ? w(R.query) : R.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), R.hash && (L += R.hash), L
            }
            ue.prototype = {
                set: Ae,
                toString: $e
            }, ue.extractProtocol = oe, ue.location = j, ue.trimLeft = H, ue.qs = C;
            var fe = ue;

            function Ce(w, T) {
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
                var Q = T.type,
                    ne = this.listeners[Q];
                return Array.isArray(ne) ? (ne.forEach(function(_e) {
                    S.length > 0 ? _e.apply(R, S) : _e.call(R, T)
                }), !0) : !1
            };

            function ve(w) {
                var T = w.indexOf("?");
                return T >= 0 ? w.slice(0, T) : w
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
            var Fe = new Se,
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
                et = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                $t = function() {};
            $t.prototype.stopPropagation = function() {}, $t.prototype.stopImmediatePropagation = function() {}, $t.prototype.initEvent = function(T, R, S) {
                T === void 0 && (T = "undefined"), R === void 0 && (R = !1), S === void 0 && (S = !1), this.type = "" + T, this.bubbles = Boolean(R), this.cancelable = Boolean(S)
            };
            var Cr = function(w) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), w.call(this), !R) throw new TypeError(et.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var L = S.bubbles,
                            Q = S.cancelable;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }($t),
                rr = function(w) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), w.call(this), !R) throw new TypeError(et.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.data,
                            _e = S.origin,
                            Te = S.lastEventId,
                            ft = S.ports;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.canncelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.origin = "" + _e, this.ports = typeof ft > "u" ? null : ft, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Te || "")
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }($t),
                mr = function(w) {
                    function T(R, S) {
                        if (S === void 0 && (S = {}), w.call(this), !R) throw new TypeError(et.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof S != "object") throw new TypeError(et.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var L = S.bubbles,
                            Q = S.cancelable,
                            ne = S.code,
                            _e = S.reason,
                            Te = S.wasClean;
                        this.type = "" + R, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Q ? Boolean(Q) : !1, this.cancelBubble = !1, this.bubbles = L ? Boolean(L) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (_e || ""), this.wasClean = Te ? Boolean(Te) : !1
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T
                }($t);

            function ot(w) {
                var T = w.type,
                    R = w.target,
                    S = new Cr(T);
                return R && (S.target = R, S.srcElement = R, S.currentTarget = R), S
            }

            function St(w) {
                var T = w.type,
                    R = w.origin,
                    S = w.data,
                    L = w.target,
                    Q = new rr(T, {
                        data: S,
                        origin: R
                    });
                return L && (Q.target = L, Q.srcElement = L, Q.currentTarget = L), Q
            }

            function lt(w) {
                var T = w.code,
                    R = w.reason,
                    S = w.type,
                    L = w.target,
                    Q = w.wasClean;
                Q || (Q = T === Ge.CLOSE_NORMAL || T === Ge.CLOSE_NO_STATUS);
                var ne = new mr(S, {
                    code: T,
                    reason: R,
                    wasClean: Q
                });
                return L && (ne.target = L, ne.srcElement = L, ne.currentTarget = L), ne
            }

            function xt(w, T, R) {
                w.readyState = K.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = lt({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: R
                    }),
                    Q = lt({
                        type: "server::close",
                        target: w,
                        code: T,
                        reason: R
                    });
                Ce(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = K.CLOSED, w.dispatchEvent(L), w.dispatchEvent(Q), S && S.dispatchEvent(L, S)
                }, w)
            }

            function Ht(w, T, R) {
                w.readyState = K.CLOSING;
                var S = Fe.serverLookup(w.url),
                    L = lt({
                        type: "close",
                        target: w.target,
                        code: T,
                        reason: R,
                        wasClean: !1
                    }),
                    Q = lt({
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
                Ce(function() {
                    Fe.removeWebSocket(w, w.url), w.readyState = K.CLOSED, w.dispatchEvent(ne), w.dispatchEvent(L), w.dispatchEvent(Q), S && S.dispatchEvent(L, S)
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
                            ne = Dt(ne), w.dispatchEvent(St({
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
                    R = T.pathname,
                    S = T.protocol,
                    L = T.hash;
                if (!w) throw new TypeError(et.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (R || (T.pathname = "/"), S === "") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (S !== "ws:" && S !== "wss:") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + S + "' is not allowed.");
                if (L !== "") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + L + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function U(w) {
                if (w === void 0 && (w = []), !Array.isArray(w) && typeof w != "string") throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The subprotocol '" + w.toString() + "' is invalid.");
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
                if (R.length > 0) throw new SyntaxError(et.CONSTRUCTOR_ERROR + " The subprotocol '" + R[0] + "' is duplicated.");
                return w
            }
            var K = function(w) {
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
                    var ne = St({
                            type: "server::message",
                            origin: this.url,
                            data: Dt(L)
                        }),
                        _e = Fe.serverLookup(this.url);
                    _e && Ce(function() {
                        Q.dispatchEvent(ne, L)
                    }, _e)
                }, T.prototype.close = function(L, Q) {
                    if (L !== void 0 && (typeof L != "number" || L !== 1e3 && (L < 3e3 || L > 4999))) throw new TypeError(et.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + L + " is neither.");
                    if (Q !== void 0) {
                        var ne = O(Q);
                        if (ne > 123) throw new SyntaxError(et.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var _e = p(this);
                        this.readyState === T.CONNECTING ? Ht(_e, L || Ge.CLOSE_ABNORMAL, Q) : xt(_e, L || Ge.CLOSE_NO_STATUS, Q)
                    }
                }, Object.defineProperties(T.prototype, R), T
            }(be);
            K.CONNECTING = 0, K.prototype.CONNECTING = K.CONNECTING, K.OPEN = 1, K.prototype.OPEN = K.OPEN, K.CLOSING = 2, K.prototype.CLOSING = K.CLOSING, K.CLOSED = 3, K.prototype.CLOSED = K.CLOSED;
            var ce = function(w) {
                return w.reduce(function(T, R) {
                    return T.indexOf(R) > -1 ? T : T.concat(R)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof _5 == "function" && typeof kt == "object" ? kt : this
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
                        var Q = Fe.attachServer(this, this.url);
                        if (!Q) throw this.dispatchEvent(ot({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, S), this.options.mock && this.mockWebsocket()
                    }
                    return w && (T.__proto__ = w), T.prototype = Object.create(w && w.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var S = se();
                        this.originalWebSocket = S.WebSocket, S.WebSocket = K
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
                            Te.readyState = K.CLOSED, Te.dispatchEvent(lt({
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
                            Q.readyState = K.CLOSED, Q.dispatchEvent(ot({
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
                var R = {
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
                    var _e = St({
                            type: L,
                            origin: this.url,
                            data: Q
                        }),
                        Te = Fe.serverLookup(this.url);
                    return Te && Te.dispatchEvent.apply(Te, [_e].concat(Q)), this
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
                }, Object.defineProperties(T.prototype, R), T
            }(be);
            W.CONNECTING = 0, W.OPEN = 1, W.CLOSING = 2, W.CLOSED = 3;
            var he = function(T, R) {
                return new W(T, R)
            };
            he.connect = function(T, R) {
                return he(T, R)
            };
            var pe = A,
                Ne = K,
                xe = he;
            r.Server = pe, r.WebSocket = Ne, r.SocketIO = xe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(jy, jy.exports);
    var OT = {
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
    })(OT);
    const wT = OT.exports;
    class b5 {
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
                points: wT(this.points, .5).map(r => ({
                    x: ar.toPrecision(r.x, this.precision),
                    y: ar.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class E5 {
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
                n = wT(this.currentLine.points);
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
    class T5 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new E5(t, this.width, this.height, r)
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
    class Gy {
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
            const n = Rd(r.room.appTag),
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
                Ld("[Feedback] sendToSlack", C)
            } catch (E) {
                console.error("[Feedback] sendToSlack", E)
            }
        }
    }
    const S5 = {
            BACK: "Back",
            CANCEL: "Cancel",
            CLOSE: "Close",
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
        O5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        w5 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        C5 = "LOADING",
        $5 = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        I5 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        A5 = {
            AND: "AND",
            OR: "OR"
        },
        N5 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        R5 = {
            NAME: "AUDIENCE"
        },
        L5 = {
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
        P5 = {
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
        k5 = {
            ACTION: S5,
            ALT: O5,
            ERROR: w5,
            LOADING: C5,
            LOBBY: $5,
            POST_GAME: I5,
            SEPARATOR: A5,
            TUTORIAL: N5,
            AUDIENCE: R5,
            UGC: L5,
            TOAST: P5
        },
        x5 = {
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
        D5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        M5 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        F5 = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        U5 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        B5 = {
            AND: "ET",
            OR: "OU"
        },
        j5 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        G5 = {
            NAME: "SPECTATEURS"
        },
        W5 = {
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
        H5 = {
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
        V5 = {
            ACTION: x5,
            ALT: D5,
            ERROR: M5,
            LOBBY: F5,
            POST_GAME: U5,
            SEPARATOR: B5,
            TUTORIAL: j5,
            AUDIENCE: G5,
            UGC: W5,
            TOAST: H5
        },
        K5 = {
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
        Y5 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        q5 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        z5 = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        X5 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        J5 = {
            AND: "E",
            OR: "O"
        },
        Z5 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        Q5 = {
            NAME: "PUBBLICO"
        },
        eB = {
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
        tB = {
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
        rB = {
            ACTION: K5,
            ALT: Y5,
            ERROR: q5,
            LOBBY: z5,
            POST_GAME: X5,
            SEPARATOR: J5,
            TUTORIAL: Z5,
            AUDIENCE: Q5,
            UGC: eB,
            TOAST: tB
        },
        nB = {
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
        iB = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        sB = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        aB = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        oB = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        lB = {
            AND: "UND",
            OR: "ODER"
        },
        cB = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        uB = {
            NAME: "PUBLIKUM"
        },
        fB = {
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
        dB = {
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
        hB = {
            ACTION: nB,
            ALT: iB,
            ERROR: sB,
            LOBBY: aB,
            POST_GAME: oB,
            SEPARATOR: lB,
            TUTORIAL: cB,
            AUDIENCE: uB,
            UGC: fB,
            TOAST: dB
        },
        pB = {
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
        gB = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        mB = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        vB = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        yB = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        _B = {
            AND: "Y",
            OR: "O"
        },
        bB = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        EB = {
            NAME: "P\xDABLICO"
        },
        TB = {
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
        SB = {
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
        OB = {
            ACTION: pB,
            ALT: gB,
            ERROR: mB,
            LOBBY: vB,
            POST_GAME: yB,
            SEPARATOR: _B,
            TUTORIAL: bB,
            AUDIENCE: EB,
            UGC: TB,
            TOAST: SB
        },
        wB = {
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
        CB = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        $B = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        IB = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        AB = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        NB = {
            AND: "Y",
            OR: "O"
        },
        RB = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        LB = {
            NAME: "P\xDABLICO"
        },
        PB = {
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
        kB = {
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
        xB = {
            ACTION: wB,
            ALT: CB,
            ERROR: $B,
            LOBBY: IB,
            POST_GAME: AB,
            SEPARATOR: NB,
            TUTORIAL: RB,
            AUDIENCE: LB,
            UGC: PB,
            TOAST: kB
        },
        DB = {
            en: k5,
            fr: V5,
            it: rB,
            de: hB,
            es: OB,
            "es-XL": xB
        },
        MB = at({
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
                const e = is();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = Un(new b5(e, this.player.doodle, this.canvasOptions))
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
        FB = {
            class: "doodle"
        },
        UB = {
            ref: "canvas"
        },
        BB = ["disabled"],
        jB = ["disabled"];

    function GB(e, t, r, n, s, o) {
        const l = At("pointerbox-translate"),
            u = At("pointerbox"),
            f = At("t");
        return Y(), X("div", FB, [Ie((Y(), X("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...h) => e.onPointerBoxStart && e.onPointerBoxStart(...h)),
            "onPointerbox:move": t[1] || (t[1] = (...h) => e.onPointerBoxMove && e.onPointerBoxMove(...h)),
            "onPointerbox:end": t[2] || (t[2] = (...h) => e.onPointerBoxEnd && e.onPointerBoxEnd(...h))
        }, [Ie(Z("canvas", UB, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [u]
        ]), e.hideUndo ? we("", !0) : Ie((Y(), X("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = Zr((...h) => e.onUndo && e.onUndo(...h), ["prevent"]))
        }, null, 8, BB)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? we("", !0) : Ie((Y(), X("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = Zr((...h) => e.onSubmit && e.onSubmit(...h), ["prevent"]))
        }, null, 8, jB)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const WB = tt(MB, [
        ["render", GB]
    ]);
    var Pd = {
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
                H = 4,
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
                Se = 17976931348623157e292,
                Fe = 0 / 0,
                Ge = 4294967295,
                et = Ge - 1,
                $t = Ge >>> 1,
                Cr = [
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
                mr = "[object Array]",
                ot = "[object AsyncFunction]",
                St = "[object Boolean]",
                lt = "[object Date]",
                xt = "[object DOMException]",
                Ht = "[object Error]",
                Dt = "[object Function]",
                m = "[object GeneratorFunction]",
                p = "[object Map]",
                O = "[object Number]",
                D = "[object Null]",
                U = "[object Object]",
                K = "[object Promise]",
                ce = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                A = "[object String]",
                W = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Ne = "[object WeakSet]",
                xe = "[object ArrayBuffer]",
                w = "[object DataView]",
                T = "[object Float32Array]",
                R = "[object Float64Array]",
                S = "[object Int8Array]",
                L = "[object Int16Array]",
                Q = "[object Int32Array]",
                ne = "[object Uint8Array]",
                _e = "[object Uint8ClampedArray]",
                Te = "[object Uint16Array]",
                ft = "[object Uint32Array]",
                nr = /\b__p \+= '';/g,
                De = /\b(__p \+=) '' \+/g,
                da = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Gp = /&(?:amp|lt|gt|quot|#39);/g,
                Wp = /[&<>"']/g,
                $S = RegExp(Gp.source),
                IS = RegExp(Wp.source),
                AS = /<%-([\s\S]+?)%>/g,
                NS = /<%([\s\S]+?)%>/g,
                Hp = /<%=([\s\S]+?)%>/g,
                RS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                LS = /^\w*$/,
                PS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                eu = /[\\^$.*+?()[\]{}|]/g,
                kS = RegExp(eu.source),
                tu = /^\s+/,
                xS = /\s/,
                DS = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                MS = /\{\n\/\* \[wrapped with (.+)\] \*/,
                FS = /,? & /,
                US = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                BS = /[()=,{}\[\]\/\s]/,
                jS = /\\(\\)?/g,
                GS = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Vp = /\w*$/,
                WS = /^[-+]0x[0-9a-f]+$/i,
                HS = /^0b[01]+$/i,
                VS = /^\[object .+?Constructor\]$/,
                KS = /^0o[0-7]+$/i,
                YS = /^(?:0|[1-9]\d*)$/,
                qS = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                So = /($^)/,
                zS = /['\n\r\u2028\u2029\\]/g,
                Oo = "\\ud800-\\udfff",
                XS = "\\u0300-\\u036f",
                JS = "\\ufe20-\\ufe2f",
                ZS = "\\u20d0-\\u20ff",
                Kp = XS + JS + ZS,
                Yp = "\\u2700-\\u27bf",
                qp = "a-z\\xdf-\\xf6\\xf8-\\xff",
                QS = "\\xac\\xb1\\xd7\\xf7",
                eO = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                tO = "\\u2000-\\u206f",
                rO = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                zp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                Xp = "\\ufe0e\\ufe0f",
                Jp = QS + eO + tO + rO,
                ru = "['\u2019]",
                nO = "[" + Oo + "]",
                Zp = "[" + Jp + "]",
                wo = "[" + Kp + "]",
                Qp = "\\d+",
                iO = "[" + Yp + "]",
                eg = "[" + qp + "]",
                tg = "[^" + Oo + Jp + Qp + Yp + qp + zp + "]",
                nu = "\\ud83c[\\udffb-\\udfff]",
                sO = "(?:" + wo + "|" + nu + ")",
                rg = "[^" + Oo + "]",
                iu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                su = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                cs = "[" + zp + "]",
                ng = "\\u200d",
                ig = "(?:" + eg + "|" + tg + ")",
                aO = "(?:" + cs + "|" + tg + ")",
                sg = "(?:" + ru + "(?:d|ll|m|re|s|t|ve))?",
                ag = "(?:" + ru + "(?:D|LL|M|RE|S|T|VE))?",
                og = sO + "?",
                lg = "[" + Xp + "]?",
                oO = "(?:" + ng + "(?:" + [rg, iu, su].join("|") + ")" + lg + og + ")*",
                lO = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                cO = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                cg = lg + og + oO,
                uO = "(?:" + [iO, iu, su].join("|") + ")" + cg,
                fO = "(?:" + [rg + wo + "?", wo, iu, su, nO].join("|") + ")",
                dO = RegExp(ru, "g"),
                hO = RegExp(wo, "g"),
                au = RegExp(nu + "(?=" + nu + ")|" + fO + cg, "g"),
                pO = RegExp([cs + "?" + eg + "+" + sg + "(?=" + [Zp, cs, "$"].join("|") + ")", aO + "+" + ag + "(?=" + [Zp, cs + ig, "$"].join("|") + ")", cs + "?" + ig + "+" + sg, cs + "+" + ag, cO, lO, Qp, uO].join("|"), "g"),
                gO = RegExp("[" + ng + Oo + Kp + Xp + "]"),
                mO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                vO = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                yO = -1,
                Et = {};
            Et[T] = Et[R] = Et[S] = Et[L] = Et[Q] = Et[ne] = Et[_e] = Et[Te] = Et[ft] = !0, Et[rr] = Et[mr] = Et[xe] = Et[St] = Et[w] = Et[lt] = Et[Ht] = Et[Dt] = Et[p] = Et[O] = Et[U] = Et[se] = Et[re] = Et[A] = Et[pe] = !1;
            var mt = {};
            mt[rr] = mt[mr] = mt[xe] = mt[w] = mt[St] = mt[lt] = mt[T] = mt[R] = mt[S] = mt[L] = mt[Q] = mt[p] = mt[O] = mt[U] = mt[se] = mt[re] = mt[A] = mt[W] = mt[ne] = mt[_e] = mt[Te] = mt[ft] = !0, mt[Ht] = mt[Dt] = mt[pe] = !1;
            var _O = {
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
                bO = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                EO = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                TO = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                SO = parseFloat,
                OO = parseInt,
                ug = typeof kt == "object" && kt && kt.Object === Object && kt,
                wO = typeof self == "object" && self && self.Object === Object && self,
                Xt = ug || wO || Function("return this")(),
                ou = t && !t.nodeType && t,
                wi = ou && !0 && e && !e.nodeType && e,
                fg = wi && wi.exports === ou,
                lu = fg && ug.process,
                Ur = function() {
                    try {
                        var k = wi && wi.require && wi.require("util").types;
                        return k || lu && lu.binding && lu.binding("util")
                    } catch {}
                }(),
                dg = Ur && Ur.isArrayBuffer,
                hg = Ur && Ur.isDate,
                pg = Ur && Ur.isMap,
                gg = Ur && Ur.isRegExp,
                mg = Ur && Ur.isSet,
                vg = Ur && Ur.isTypedArray;

            function $r(k, z, V) {
                switch (V.length) {
                    case 0:
                        return k.call(z);
                    case 1:
                        return k.call(z, V[0]);
                    case 2:
                        return k.call(z, V[0], V[1]);
                    case 3:
                        return k.call(z, V[0], V[1], V[2])
                }
                return k.apply(z, V)
            }

            function CO(k, z, V, Ee) {
                for (var Ue = -1, it = k == null ? 0 : k.length; ++Ue < it;) {
                    var Ft = k[Ue];
                    z(Ee, Ft, V(Ft), k)
                }
                return Ee
            }

            function Br(k, z) {
                for (var V = -1, Ee = k == null ? 0 : k.length; ++V < Ee && z(k[V], V, k) !== !1;);
                return k
            }

            function $O(k, z) {
                for (var V = k == null ? 0 : k.length; V-- && z(k[V], V, k) !== !1;);
                return k
            }

            function yg(k, z) {
                for (var V = -1, Ee = k == null ? 0 : k.length; ++V < Ee;)
                    if (!z(k[V], V, k)) return !1;
                return !0
            }

            function Gn(k, z) {
                for (var V = -1, Ee = k == null ? 0 : k.length, Ue = 0, it = []; ++V < Ee;) {
                    var Ft = k[V];
                    z(Ft, V, k) && (it[Ue++] = Ft)
                }
                return it
            }

            function Co(k, z) {
                var V = k == null ? 0 : k.length;
                return !!V && us(k, z, 0) > -1
            }

            function cu(k, z, V) {
                for (var Ee = -1, Ue = k == null ? 0 : k.length; ++Ee < Ue;)
                    if (V(z, k[Ee])) return !0;
                return !1
            }

            function Ot(k, z) {
                for (var V = -1, Ee = k == null ? 0 : k.length, Ue = Array(Ee); ++V < Ee;) Ue[V] = z(k[V], V, k);
                return Ue
            }

            function Wn(k, z) {
                for (var V = -1, Ee = z.length, Ue = k.length; ++V < Ee;) k[Ue + V] = z[V];
                return k
            }

            function uu(k, z, V, Ee) {
                var Ue = -1,
                    it = k == null ? 0 : k.length;
                for (Ee && it && (V = k[++Ue]); ++Ue < it;) V = z(V, k[Ue], Ue, k);
                return V
            }

            function IO(k, z, V, Ee) {
                var Ue = k == null ? 0 : k.length;
                for (Ee && Ue && (V = k[--Ue]); Ue--;) V = z(V, k[Ue], Ue, k);
                return V
            }

            function fu(k, z) {
                for (var V = -1, Ee = k == null ? 0 : k.length; ++V < Ee;)
                    if (z(k[V], V, k)) return !0;
                return !1
            }
            var AO = du("length");

            function NO(k) {
                return k.split("")
            }

            function RO(k) {
                return k.match(US) || []
            }

            function _g(k, z, V) {
                var Ee;
                return V(k, function(Ue, it, Ft) {
                    if (z(Ue, it, Ft)) return Ee = it, !1
                }), Ee
            }

            function $o(k, z, V, Ee) {
                for (var Ue = k.length, it = V + (Ee ? 1 : -1); Ee ? it-- : ++it < Ue;)
                    if (z(k[it], it, k)) return it;
                return -1
            }

            function us(k, z, V) {
                return z === z ? WO(k, z, V) : $o(k, bg, V)
            }

            function LO(k, z, V, Ee) {
                for (var Ue = V - 1, it = k.length; ++Ue < it;)
                    if (Ee(k[Ue], z)) return Ue;
                return -1
            }

            function bg(k) {
                return k !== k
            }

            function Eg(k, z) {
                var V = k == null ? 0 : k.length;
                return V ? pu(k, z) / V : Fe
            }

            function du(k) {
                return function(z) {
                    return z == null ? r : z[k]
                }
            }

            function hu(k) {
                return function(z) {
                    return k == null ? r : k[z]
                }
            }

            function Tg(k, z, V, Ee, Ue) {
                return Ue(k, function(it, Ft, pt) {
                    V = Ee ? (Ee = !1, it) : z(V, it, Ft, pt)
                }), V
            }

            function PO(k, z) {
                var V = k.length;
                for (k.sort(z); V--;) k[V] = k[V].value;
                return k
            }

            function pu(k, z) {
                for (var V, Ee = -1, Ue = k.length; ++Ee < Ue;) {
                    var it = z(k[Ee]);
                    it !== r && (V = V === r ? it : V + it)
                }
                return V
            }

            function gu(k, z) {
                for (var V = -1, Ee = Array(k); ++V < k;) Ee[V] = z(V);
                return Ee
            }

            function kO(k, z) {
                return Ot(z, function(V) {
                    return [V, k[V]]
                })
            }

            function Sg(k) {
                return k && k.slice(0, $g(k) + 1).replace(tu, "")
            }

            function Ir(k) {
                return function(z) {
                    return k(z)
                }
            }

            function mu(k, z) {
                return Ot(z, function(V) {
                    return k[V]
                })
            }

            function ha(k, z) {
                return k.has(z)
            }

            function Og(k, z) {
                for (var V = -1, Ee = k.length; ++V < Ee && us(z, k[V], 0) > -1;);
                return V
            }

            function wg(k, z) {
                for (var V = k.length; V-- && us(z, k[V], 0) > -1;);
                return V
            }

            function xO(k, z) {
                for (var V = k.length, Ee = 0; V--;) k[V] === z && ++Ee;
                return Ee
            }
            var DO = hu(_O),
                MO = hu(bO);

            function FO(k) {
                return "\\" + TO[k]
            }

            function UO(k, z) {
                return k == null ? r : k[z]
            }

            function fs(k) {
                return gO.test(k)
            }

            function BO(k) {
                return mO.test(k)
            }

            function jO(k) {
                for (var z, V = []; !(z = k.next()).done;) V.push(z.value);
                return V
            }

            function vu(k) {
                var z = -1,
                    V = Array(k.size);
                return k.forEach(function(Ee, Ue) {
                    V[++z] = [Ue, Ee]
                }), V
            }

            function Cg(k, z) {
                return function(V) {
                    return k(z(V))
                }
            }

            function Hn(k, z) {
                for (var V = -1, Ee = k.length, Ue = 0, it = []; ++V < Ee;) {
                    var Ft = k[V];
                    (Ft === z || Ft === g) && (k[V] = g, it[Ue++] = V)
                }
                return it
            }

            function Io(k) {
                var z = -1,
                    V = Array(k.size);
                return k.forEach(function(Ee) {
                    V[++z] = Ee
                }), V
            }

            function GO(k) {
                var z = -1,
                    V = Array(k.size);
                return k.forEach(function(Ee) {
                    V[++z] = [Ee, Ee]
                }), V
            }

            function WO(k, z, V) {
                for (var Ee = V - 1, Ue = k.length; ++Ee < Ue;)
                    if (k[Ee] === z) return Ee;
                return -1
            }

            function HO(k, z, V) {
                for (var Ee = V + 1; Ee--;)
                    if (k[Ee] === z) return Ee;
                return Ee
            }

            function ds(k) {
                return fs(k) ? KO(k) : AO(k)
            }

            function en(k) {
                return fs(k) ? YO(k) : NO(k)
            }

            function $g(k) {
                for (var z = k.length; z-- && xS.test(k.charAt(z)););
                return z
            }
            var VO = hu(EO);

            function KO(k) {
                for (var z = au.lastIndex = 0; au.test(k);) ++z;
                return z
            }

            function YO(k) {
                return k.match(au) || []
            }

            function qO(k) {
                return k.match(pO) || []
            }
            var zO = function k(z) {
                    z = z == null ? Xt : hs.defaults(Xt.Object(), z, hs.pick(Xt, vO));
                    var V = z.Array,
                        Ee = z.Date,
                        Ue = z.Error,
                        it = z.Function,
                        Ft = z.Math,
                        pt = z.Object,
                        yu = z.RegExp,
                        XO = z.String,
                        jr = z.TypeError,
                        Ao = V.prototype,
                        JO = it.prototype,
                        ps = pt.prototype,
                        No = z["__core-js_shared__"],
                        Ro = JO.toString,
                        dt = ps.hasOwnProperty,
                        ZO = 0,
                        Ig = function() {
                            var i = /[^.]+$/.exec(No && No.keys && No.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Lo = ps.toString,
                        QO = Ro.call(pt),
                        ew = Xt._,
                        tw = yu("^" + Ro.call(dt).replace(eu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Po = fg ? z.Buffer : r,
                        Vn = z.Symbol,
                        ko = z.Uint8Array,
                        Ag = Po ? Po.allocUnsafe : r,
                        xo = Cg(pt.getPrototypeOf, pt),
                        Ng = pt.create,
                        Rg = ps.propertyIsEnumerable,
                        Do = Ao.splice,
                        Lg = Vn ? Vn.isConcatSpreadable : r,
                        pa = Vn ? Vn.iterator : r,
                        Ci = Vn ? Vn.toStringTag : r,
                        Mo = function() {
                            try {
                                var i = Ri(pt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        rw = z.clearTimeout !== Xt.clearTimeout && z.clearTimeout,
                        nw = Ee && Ee.now !== Xt.Date.now && Ee.now,
                        iw = z.setTimeout !== Xt.setTimeout && z.setTimeout,
                        Fo = Ft.ceil,
                        Uo = Ft.floor,
                        _u = pt.getOwnPropertySymbols,
                        sw = Po ? Po.isBuffer : r,
                        Pg = z.isFinite,
                        aw = Ao.join,
                        ow = Cg(pt.keys, pt),
                        Ut = Ft.max,
                        ir = Ft.min,
                        lw = Ee.now,
                        cw = z.parseInt,
                        kg = Ft.random,
                        uw = Ao.reverse,
                        bu = Ri(z, "DataView"),
                        ga = Ri(z, "Map"),
                        Eu = Ri(z, "Promise"),
                        gs = Ri(z, "Set"),
                        ma = Ri(z, "WeakMap"),
                        va = Ri(pt, "create"),
                        Bo = ma && new ma,
                        ms = {},
                        fw = Li(bu),
                        dw = Li(ga),
                        hw = Li(Eu),
                        pw = Li(gs),
                        gw = Li(ma),
                        jo = Vn ? Vn.prototype : r,
                        ya = jo ? jo.valueOf : r,
                        xg = jo ? jo.toString : r;

                    function _(i) {
                        if (It(i) && !je(i) && !(i instanceof qe)) {
                            if (i instanceof Gr) return i;
                            if (dt.call(i, "__wrapped__")) return Dm(i)
                        }
                        return new Gr(i)
                    }
                    var vs = function() {
                        function i() {}
                        return function(a) {
                            if (!Ct(a)) return {};
                            if (Ng) return Ng(a);
                            i.prototype = a;
                            var c = new i;
                            return i.prototype = r, c
                        }
                    }();

                    function Go() {}

                    function Gr(i, a) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: AS,
                        evaluate: NS,
                        interpolate: Hp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = Go.prototype, _.prototype.constructor = _, Gr.prototype = vs(Go.prototype), Gr.prototype.constructor = Gr;

                    function qe(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ge, this.__views__ = []
                    }

                    function mw() {
                        var i = new qe(this.__wrapped__);
                        return i.__actions__ = vr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = vr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = vr(this.__views__), i
                    }

                    function vw() {
                        if (this.__filtered__) {
                            var i = new qe(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function yw() {
                        var i = this.__wrapped__.value(),
                            a = this.__dir__,
                            c = je(i),
                            d = a < 0,
                            v = c ? i.length : 0,
                            b = NC(0, v, this.__views__),
                            I = b.start,
                            N = b.end,
                            x = N - I,
                            ee = d ? N : I - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            Oe = ir(x, this.__takeCount__);
                        if (!c || !d && v == x && Oe == x) return sm(i, this.__actions__);
                        var Le = [];
                        e: for (; x-- && me < Oe;) {
                            ee += a;
                            for (var Ve = -1, Pe = i[ee]; ++Ve < ae;) {
                                var Ye = te[Ve],
                                    ze = Ye.iteratee,
                                    Rr = Ye.type,
                                    hr = ze(Pe);
                                if (Rr == ie) Pe = hr;
                                else if (!hr) {
                                    if (Rr == F) continue e;
                                    break e
                                }
                            }
                            Le[me++] = Pe
                        }
                        return Le
                    }
                    qe.prototype = vs(Go.prototype), qe.prototype.constructor = qe;

                    function $i(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function _w() {
                        this.__data__ = va ? va(null) : {}, this.size = 0
                    }

                    function bw(i) {
                        var a = this.has(i) && delete this.__data__[i];
                        return this.size -= a ? 1 : 0, a
                    }

                    function Ew(i) {
                        var a = this.__data__;
                        if (va) {
                            var c = a[i];
                            return c === f ? r : c
                        }
                        return dt.call(a, i) ? a[i] : r
                    }

                    function Tw(i) {
                        var a = this.__data__;
                        return va ? a[i] !== r : dt.call(a, i)
                    }

                    function Sw(i, a) {
                        var c = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, c[i] = va && a === r ? f : a, this
                    }
                    $i.prototype.clear = _w, $i.prototype.delete = bw, $i.prototype.get = Ew, $i.prototype.has = Tw, $i.prototype.set = Sw;

                    function wn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function Ow() {
                        this.__data__ = [], this.size = 0
                    }

                    function ww(i) {
                        var a = this.__data__,
                            c = Wo(a, i);
                        if (c < 0) return !1;
                        var d = a.length - 1;
                        return c == d ? a.pop() : Do.call(a, c, 1), --this.size, !0
                    }

                    function Cw(i) {
                        var a = this.__data__,
                            c = Wo(a, i);
                        return c < 0 ? r : a[c][1]
                    }

                    function $w(i) {
                        return Wo(this.__data__, i) > -1
                    }

                    function Iw(i, a) {
                        var c = this.__data__,
                            d = Wo(c, i);
                        return d < 0 ? (++this.size, c.push([i, a])) : c[d][1] = a, this
                    }
                    wn.prototype.clear = Ow, wn.prototype.delete = ww, wn.prototype.get = Cw, wn.prototype.has = $w, wn.prototype.set = Iw;

                    function Cn(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.clear(); ++a < c;) {
                            var d = i[a];
                            this.set(d[0], d[1])
                        }
                    }

                    function Aw() {
                        this.size = 0, this.__data__ = {
                            hash: new $i,
                            map: new(ga || wn),
                            string: new $i
                        }
                    }

                    function Nw(i) {
                        var a = tl(this, i).delete(i);
                        return this.size -= a ? 1 : 0, a
                    }

                    function Rw(i) {
                        return tl(this, i).get(i)
                    }

                    function Lw(i) {
                        return tl(this, i).has(i)
                    }

                    function Pw(i, a) {
                        var c = tl(this, i),
                            d = c.size;
                        return c.set(i, a), this.size += c.size == d ? 0 : 1, this
                    }
                    Cn.prototype.clear = Aw, Cn.prototype.delete = Nw, Cn.prototype.get = Rw, Cn.prototype.has = Lw, Cn.prototype.set = Pw;

                    function Ii(i) {
                        var a = -1,
                            c = i == null ? 0 : i.length;
                        for (this.__data__ = new Cn; ++a < c;) this.add(i[a])
                    }

                    function kw(i) {
                        return this.__data__.set(i, f), this
                    }

                    function xw(i) {
                        return this.__data__.has(i)
                    }
                    Ii.prototype.add = Ii.prototype.push = kw, Ii.prototype.has = xw;

                    function tn(i) {
                        var a = this.__data__ = new wn(i);
                        this.size = a.size
                    }

                    function Dw() {
                        this.__data__ = new wn, this.size = 0
                    }

                    function Mw(i) {
                        var a = this.__data__,
                            c = a.delete(i);
                        return this.size = a.size, c
                    }

                    function Fw(i) {
                        return this.__data__.get(i)
                    }

                    function Uw(i) {
                        return this.__data__.has(i)
                    }

                    function Bw(i, a) {
                        var c = this.__data__;
                        if (c instanceof wn) {
                            var d = c.__data__;
                            if (!ga || d.length < s - 1) return d.push([i, a]), this.size = ++c.size, this;
                            c = this.__data__ = new Cn(d)
                        }
                        return c.set(i, a), this.size = c.size, this
                    }
                    tn.prototype.clear = Dw, tn.prototype.delete = Mw, tn.prototype.get = Fw, tn.prototype.has = Uw, tn.prototype.set = Bw;

                    function Dg(i, a) {
                        var c = je(i),
                            d = !c && Pi(i),
                            v = !c && !d && Xn(i),
                            b = !c && !d && !v && Es(i),
                            I = c || d || v || b,
                            N = I ? gu(i.length, XO) : [],
                            x = N.length;
                        for (var ee in i)(a || dt.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || b && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Nn(ee, x))) && N.push(ee);
                        return N
                    }

                    function Mg(i) {
                        var a = i.length;
                        return a ? i[Lu(0, a - 1)] : r
                    }

                    function jw(i, a) {
                        return rl(vr(i), Ai(a, 0, i.length))
                    }

                    function Gw(i) {
                        return rl(vr(i))
                    }

                    function Tu(i, a, c) {
                        (c !== r && !rn(i[a], c) || c === r && !(a in i)) && $n(i, a, c)
                    }

                    function _a(i, a, c) {
                        var d = i[a];
                        (!(dt.call(i, a) && rn(d, c)) || c === r && !(a in i)) && $n(i, a, c)
                    }

                    function Wo(i, a) {
                        for (var c = i.length; c--;)
                            if (rn(i[c][0], a)) return c;
                        return -1
                    }

                    function Ww(i, a, c, d) {
                        return Kn(i, function(v, b, I) {
                            a(d, v, c(v), I)
                        }), d
                    }

                    function Fg(i, a) {
                        return i && gn(a, Vt(a), i)
                    }

                    function Hw(i, a) {
                        return i && gn(a, _r(a), i)
                    }

                    function $n(i, a, c) {
                        a == "__proto__" && Mo ? Mo(i, a, {
                            configurable: !0,
                            enumerable: !0,
                            value: c,
                            writable: !0
                        }) : i[a] = c
                    }

                    function Su(i, a) {
                        for (var c = -1, d = a.length, v = V(d), b = i == null; ++c < d;) v[c] = b ? r : nf(i, a[c]);
                        return v
                    }

                    function Ai(i, a, c) {
                        return i === i && (c !== r && (i = i <= c ? i : c), a !== r && (i = i >= a ? i : a)), i
                    }

                    function Wr(i, a, c, d, v, b) {
                        var I, N = a & y,
                            x = a & E,
                            ee = a & C;
                        if (c && (I = v ? c(i, d, v, b) : c(i)), I !== r) return I;
                        if (!Ct(i)) return i;
                        var te = je(i);
                        if (te) {
                            if (I = LC(i), !N) return vr(i, I)
                        } else {
                            var ae = sr(i),
                                me = ae == Dt || ae == m;
                            if (Xn(i)) return lm(i, N);
                            if (ae == U || ae == rr || me && !v) {
                                if (I = x || me ? {} : $m(i), !N) return x ? EC(i, Hw(I, i)) : bC(i, Fg(I, i))
                            } else {
                                if (!mt[ae]) return v ? i : {};
                                I = PC(i, ae, N)
                            }
                        }
                        b || (b = new tn);
                        var Oe = b.get(i);
                        if (Oe) return Oe;
                        b.set(i, I), rv(i) ? i.forEach(function(Pe) {
                            I.add(Wr(Pe, a, c, Pe, i, b))
                        }) : ev(i) && i.forEach(function(Pe, Ye) {
                            I.set(Ye, Wr(Pe, a, c, Ye, i, b))
                        });
                        var Le = ee ? x ? Wu : Gu : x ? _r : Vt,
                            Ve = te ? r : Le(i);
                        return Br(Ve || i, function(Pe, Ye) {
                            Ve && (Ye = Pe, Pe = i[Ye]), _a(I, Ye, Wr(Pe, a, c, Ye, i, b))
                        }), I
                    }

                    function Vw(i) {
                        var a = Vt(i);
                        return function(c) {
                            return Ug(c, i, a)
                        }
                    }

                    function Ug(i, a, c) {
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
                        return Ca(function() {
                            i.apply(r, c)
                        }, a)
                    }

                    function ba(i, a, c, d) {
                        var v = -1,
                            b = Co,
                            I = !0,
                            N = i.length,
                            x = [],
                            ee = a.length;
                        if (!N) return x;
                        c && (a = Ot(a, Ir(c))), d ? (b = cu, I = !1) : a.length >= s && (b = ha, I = !1, a = new Ii(a));
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
                    var Kn = hm(pn),
                        jg = hm(wu, !0);

                    function Kw(i, a) {
                        var c = !0;
                        return Kn(i, function(d, v, b) {
                            return c = !!a(d, v, b), c
                        }), c
                    }

                    function Ho(i, a, c) {
                        for (var d = -1, v = i.length; ++d < v;) {
                            var b = i[d],
                                I = a(b);
                            if (I != null && (N === r ? I === I && !Nr(I) : c(I, N))) var N = I,
                                x = b
                        }
                        return x
                    }

                    function Yw(i, a, c, d) {
                        var v = i.length;
                        for (c = We(c), c < 0 && (c = -c > v ? 0 : v + c), d = d === r || d > v ? v : We(d), d < 0 && (d += v), d = c > d ? 0 : iv(d); c < d;) i[c++] = a;
                        return i
                    }

                    function Gg(i, a) {
                        var c = [];
                        return Kn(i, function(d, v, b) {
                            a(d, v, b) && c.push(d)
                        }), c
                    }

                    function Jt(i, a, c, d, v) {
                        var b = -1,
                            I = i.length;
                        for (c || (c = xC), v || (v = []); ++b < I;) {
                            var N = i[b];
                            a > 0 && c(N) ? a > 1 ? Jt(N, a - 1, c, d, v) : Wn(v, N) : d || (v[v.length] = N)
                        }
                        return v
                    }
                    var Ou = pm(),
                        Wg = pm(!0);

                    function pn(i, a) {
                        return i && Ou(i, a, Vt)
                    }

                    function wu(i, a) {
                        return i && Wg(i, a, Vt)
                    }

                    function Vo(i, a) {
                        return Gn(a, function(c) {
                            return Rn(i[c])
                        })
                    }

                    function Ni(i, a) {
                        a = qn(a, i);
                        for (var c = 0, d = a.length; i != null && c < d;) i = i[mn(a[c++])];
                        return c && c == d ? i : r
                    }

                    function Hg(i, a, c) {
                        var d = a(i);
                        return je(i) ? d : Wn(d, c(i))
                    }

                    function fr(i) {
                        return i == null ? i === r ? he : D : Ci && Ci in pt(i) ? AC(i) : GC(i)
                    }

                    function Cu(i, a) {
                        return i > a
                    }

                    function qw(i, a) {
                        return i != null && dt.call(i, a)
                    }

                    function zw(i, a) {
                        return i != null && a in pt(i)
                    }

                    function Xw(i, a, c) {
                        return i >= ir(a, c) && i < Ut(a, c)
                    }

                    function $u(i, a, c) {
                        for (var d = c ? cu : Co, v = i[0].length, b = i.length, I = b, N = V(b), x = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && a && (te = Ot(te, Ir(a))), x = ir(te.length, x), N[I] = !c && (a || v >= 120 && te.length >= 120) ? new Ii(I && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = N[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var Oe = te[ae],
                                Le = a ? a(Oe) : Oe;
                            if (Oe = c || Oe !== 0 ? Oe : 0, !(me ? ha(me, Le) : d(ee, Le, c))) {
                                for (I = b; --I;) {
                                    var Ve = N[I];
                                    if (!(Ve ? ha(Ve, Le) : d(i[I], Le, c))) continue e
                                }
                                me && me.push(Le), ee.push(Oe)
                            }
                        }
                        return ee
                    }

                    function Jw(i, a, c, d) {
                        return pn(i, function(v, b, I) {
                            a(d, c(v), b, I)
                        }), d
                    }

                    function Ea(i, a, c) {
                        a = qn(a, i), i = Rm(i, a);
                        var d = i == null ? i : i[mn(Vr(a))];
                        return d == null ? r : $r(d, i, c)
                    }

                    function Vg(i) {
                        return It(i) && fr(i) == rr
                    }

                    function Zw(i) {
                        return It(i) && fr(i) == xe
                    }

                    function Qw(i) {
                        return It(i) && fr(i) == lt
                    }

                    function Ta(i, a, c, d, v) {
                        return i === a ? !0 : i == null || a == null || !It(i) && !It(a) ? i !== i && a !== a : eC(i, a, c, d, Ta, v)
                    }

                    function eC(i, a, c, d, v, b) {
                        var I = je(i),
                            N = je(a),
                            x = I ? mr : sr(i),
                            ee = N ? mr : sr(a);
                        x = x == rr ? U : x, ee = ee == rr ? U : ee;
                        var te = x == U,
                            ae = ee == U,
                            me = x == ee;
                        if (me && Xn(i)) {
                            if (!Xn(a)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return b || (b = new tn), I || Es(i) ? Om(i, a, c, d, v, b) : $C(i, a, x, c, d, v, b);
                        if (!(c & P)) {
                            var Oe = te && dt.call(i, "__wrapped__"),
                                Le = ae && dt.call(a, "__wrapped__");
                            if (Oe || Le) {
                                var Ve = Oe ? i.value() : i,
                                    Pe = Le ? a.value() : a;
                                return b || (b = new tn), v(Ve, Pe, c, d, b)
                            }
                        }
                        return me ? (b || (b = new tn), IC(i, a, c, d, v, b)) : !1
                    }

                    function tC(i) {
                        return It(i) && sr(i) == p
                    }

                    function Iu(i, a, c, d) {
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
                                if (!(me === r ? Ta(te, ee, P | M, d, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Kg(i) {
                        if (!Ct(i) || MC(i)) return !1;
                        var a = Rn(i) ? tw : VS;
                        return a.test(Li(i))
                    }

                    function rC(i) {
                        return It(i) && fr(i) == se
                    }

                    function nC(i) {
                        return It(i) && sr(i) == re
                    }

                    function iC(i) {
                        return It(i) && ll(i.length) && !!Et[fr(i)]
                    }

                    function Yg(i) {
                        return typeof i == "function" ? i : i == null ? br : typeof i == "object" ? je(i) ? Xg(i[0], i[1]) : zg(i) : gv(i)
                    }

                    function Au(i) {
                        if (!wa(i)) return ow(i);
                        var a = [];
                        for (var c in pt(i)) dt.call(i, c) && c != "constructor" && a.push(c);
                        return a
                    }

                    function sC(i) {
                        if (!Ct(i)) return jC(i);
                        var a = wa(i),
                            c = [];
                        for (var d in i) d == "constructor" && (a || !dt.call(i, d)) || c.push(d);
                        return c
                    }

                    function Nu(i, a) {
                        return i < a
                    }

                    function qg(i, a) {
                        var c = -1,
                            d = yr(i) ? V(i.length) : [];
                        return Kn(i, function(v, b, I) {
                            d[++c] = a(v, b, I)
                        }), d
                    }

                    function zg(i) {
                        var a = Vu(i);
                        return a.length == 1 && a[0][2] ? Am(a[0][0], a[0][1]) : function(c) {
                            return c === i || Iu(c, i, a)
                        }
                    }

                    function Xg(i, a) {
                        return Yu(i) && Im(a) ? Am(mn(i), a) : function(c) {
                            var d = nf(c, i);
                            return d === r && d === a ? sf(c, i) : Ta(a, d, P | M)
                        }
                    }

                    function Ko(i, a, c, d, v) {
                        i !== a && Ou(a, function(b, I) {
                            if (v || (v = new tn), Ct(b)) aC(i, a, I, c, Ko, d, v);
                            else {
                                var N = d ? d(zu(i, I), b, I + "", i, a, v) : r;
                                N === r && (N = b), Tu(i, I, N)
                            }
                        }, _r)
                    }

                    function aC(i, a, c, d, v, b, I) {
                        var N = zu(i, c),
                            x = zu(a, c),
                            ee = I.get(x);
                        if (ee) {
                            Tu(i, c, ee);
                            return
                        }
                        var te = b ? b(N, x, c + "", i, a, I) : r,
                            ae = te === r;
                        if (ae) {
                            var me = je(x),
                                Oe = !me && Xn(x),
                                Le = !me && !Oe && Es(x);
                            te = x, me || Oe || Le ? je(N) ? te = N : Rt(N) ? te = vr(N) : Oe ? (ae = !1, te = lm(x, !0)) : Le ? (ae = !1, te = cm(x, !0)) : te = [] : $a(x) || Pi(x) ? (te = N, Pi(N) ? te = sv(N) : (!Ct(N) || Rn(N)) && (te = $m(x))) : ae = !1
                        }
                        ae && (I.set(x, te), v(te, x, d, b, I), I.delete(x)), Tu(i, c, te)
                    }

                    function Jg(i, a) {
                        var c = i.length;
                        if (!!c) return a += a < 0 ? c : 0, Nn(a, c) ? i[a] : r
                    }

                    function Zg(i, a, c) {
                        a.length ? a = Ot(a, function(b) {
                            return je(b) ? function(I) {
                                return Ni(I, b.length === 1 ? b[0] : b)
                            } : b
                        }) : a = [br];
                        var d = -1;
                        a = Ot(a, Ir(Re()));
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
                        return PO(v, function(b, I) {
                            return _C(b, I, c)
                        })
                    }

                    function oC(i, a) {
                        return Qg(i, a, function(c, d) {
                            return sf(i, d)
                        })
                    }

                    function Qg(i, a, c) {
                        for (var d = -1, v = a.length, b = {}; ++d < v;) {
                            var I = a[d],
                                N = Ni(i, I);
                            c(N, I) && Sa(b, qn(I, i), N)
                        }
                        return b
                    }

                    function lC(i) {
                        return function(a) {
                            return Ni(a, i)
                        }
                    }

                    function Ru(i, a, c, d) {
                        var v = d ? LO : us,
                            b = -1,
                            I = a.length,
                            N = i;
                        for (i === a && (a = vr(a)), c && (N = Ot(i, Ir(c))); ++b < I;)
                            for (var x = 0, ee = a[b], te = c ? c(ee) : ee;
                                (x = v(N, te, x, d)) > -1;) N !== i && Do.call(N, x, 1), Do.call(i, x, 1);
                        return i
                    }

                    function em(i, a) {
                        for (var c = i ? a.length : 0, d = c - 1; c--;) {
                            var v = a[c];
                            if (c == d || v !== b) {
                                var b = v;
                                Nn(v) ? Do.call(i, v, 1) : xu(i, v)
                            }
                        }
                        return i
                    }

                    function Lu(i, a) {
                        return i + Uo(kg() * (a - i + 1))
                    }

                    function cC(i, a, c, d) {
                        for (var v = -1, b = Ut(Fo((a - i) / (c || 1)), 0), I = V(b); b--;) I[d ? b : ++v] = i, i += c;
                        return I
                    }

                    function Pu(i, a) {
                        var c = "";
                        if (!i || a < 1 || a > ve) return c;
                        do a % 2 && (c += i), a = Uo(a / 2), a && (i += i); while (a);
                        return c
                    }

                    function Ke(i, a) {
                        return Xu(Nm(i, a, br), i + "")
                    }

                    function uC(i) {
                        return Mg(Ts(i))
                    }

                    function fC(i, a) {
                        var c = Ts(i);
                        return rl(c, Ai(a, 0, c.length))
                    }

                    function Sa(i, a, c, d) {
                        if (!Ct(i)) return i;
                        a = qn(a, i);
                        for (var v = -1, b = a.length, I = b - 1, N = i; N != null && ++v < b;) {
                            var x = mn(a[v]),
                                ee = c;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != I) {
                                var te = N[x];
                                ee = d ? d(te, x, N) : r, ee === r && (ee = Ct(te) ? te : Nn(a[v + 1]) ? [] : {})
                            }
                            _a(N, x, ee), N = N[x]
                        }
                        return i
                    }
                    var tm = Bo ? function(i, a) {
                            return Bo.set(i, a), i
                        } : br,
                        dC = Mo ? function(i, a) {
                            return Mo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: of(a),
                                writable: !0
                            })
                        } : br;

                    function hC(i) {
                        return rl(Ts(i))
                    }

                    function Hr(i, a, c) {
                        var d = -1,
                            v = i.length;
                        a < 0 && (a = -a > v ? 0 : v + a), c = c > v ? v : c, c < 0 && (c += v), v = a > c ? 0 : c - a >>> 0, a >>>= 0;
                        for (var b = V(v); ++d < v;) b[d] = i[d + a];
                        return b
                    }

                    function pC(i, a) {
                        var c;
                        return Kn(i, function(d, v, b) {
                            return c = a(d, v, b), !c
                        }), !!c
                    }

                    function Yo(i, a, c) {
                        var d = 0,
                            v = i == null ? d : i.length;
                        if (typeof a == "number" && a === a && v <= $t) {
                            for (; d < v;) {
                                var b = d + v >>> 1,
                                    I = i[b];
                                I !== null && !Nr(I) && (c ? I <= a : I < a) ? d = b + 1 : v = b
                            }
                            return v
                        }
                        return ku(i, a, br, c)
                    }

                    function ku(i, a, c, d) {
                        var v = 0,
                            b = i == null ? 0 : i.length;
                        if (b === 0) return 0;
                        a = c(a);
                        for (var I = a !== a, N = a === null, x = Nr(a), ee = a === r; v < b;) {
                            var te = Uo((v + b) / 2),
                                ae = c(i[te]),
                                me = ae !== r,
                                Oe = ae === null,
                                Le = ae === ae,
                                Ve = Nr(ae);
                            if (I) var Pe = d || Le;
                            else ee ? Pe = Le && (d || me) : N ? Pe = Le && me && (d || !Oe) : x ? Pe = Le && me && !Oe && (d || !Ve) : Oe || Ve ? Pe = !1 : Pe = d ? ae <= a : ae < a;
                            Pe ? v = te + 1 : b = te
                        }
                        return ir(b, et)
                    }

                    function rm(i, a) {
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

                    function nm(i) {
                        return typeof i == "number" ? i : Nr(i) ? Fe : +i
                    }

                    function Ar(i) {
                        if (typeof i == "string") return i;
                        if (je(i)) return Ot(i, Ar) + "";
                        if (Nr(i)) return xg ? xg.call(i) : "";
                        var a = i + "";
                        return a == "0" && 1 / i == -be ? "-0" : a
                    }

                    function Yn(i, a, c) {
                        var d = -1,
                            v = Co,
                            b = i.length,
                            I = !0,
                            N = [],
                            x = N;
                        if (c) I = !1, v = cu;
                        else if (b >= s) {
                            var ee = a ? null : wC(i);
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

                    function xu(i, a) {
                        return a = qn(a, i), i = Rm(i, a), i == null || delete i[mn(Vr(a))]
                    }

                    function im(i, a, c, d) {
                        return Sa(i, a, c(Ni(i, a)), d)
                    }

                    function qo(i, a, c, d) {
                        for (var v = i.length, b = d ? v : -1;
                            (d ? b-- : ++b < v) && a(i[b], b, i););
                        return c ? Hr(i, d ? 0 : b, d ? b + 1 : v) : Hr(i, d ? b + 1 : 0, d ? v : b)
                    }

                    function sm(i, a) {
                        var c = i;
                        return c instanceof qe && (c = c.value()), uu(a, function(d, v) {
                            return v.func.apply(v.thisArg, Wn([d], v.args))
                        }, c)
                    }

                    function Du(i, a, c) {
                        var d = i.length;
                        if (d < 2) return d ? Yn(i[0]) : [];
                        for (var v = -1, b = V(d); ++v < d;)
                            for (var I = i[v], N = -1; ++N < d;) N != v && (b[v] = ba(b[v] || I, i[N], a, c));
                        return Yn(Jt(b, 1), a, c)
                    }

                    function am(i, a, c) {
                        for (var d = -1, v = i.length, b = a.length, I = {}; ++d < v;) {
                            var N = d < b ? a[d] : r;
                            c(I, i[d], N)
                        }
                        return I
                    }

                    function Mu(i) {
                        return Rt(i) ? i : []
                    }

                    function Fu(i) {
                        return typeof i == "function" ? i : br
                    }

                    function qn(i, a) {
                        return je(i) ? i : Yu(i, a) ? [i] : xm(ct(i))
                    }
                    var gC = Ke;

                    function zn(i, a, c) {
                        var d = i.length;
                        return c = c === r ? d : c, !a && c >= d ? i : Hr(i, a, c)
                    }
                    var om = rw || function(i) {
                        return Xt.clearTimeout(i)
                    };

                    function lm(i, a) {
                        if (a) return i.slice();
                        var c = i.length,
                            d = Ag ? Ag(c) : new i.constructor(c);
                        return i.copy(d), d
                    }

                    function Uu(i) {
                        var a = new i.constructor(i.byteLength);
                        return new ko(a).set(new ko(i)), a
                    }

                    function mC(i, a) {
                        var c = a ? Uu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.byteLength)
                    }

                    function vC(i) {
                        var a = new i.constructor(i.source, Vp.exec(i));
                        return a.lastIndex = i.lastIndex, a
                    }

                    function yC(i) {
                        return ya ? pt(ya.call(i)) : {}
                    }

                    function cm(i, a) {
                        var c = a ? Uu(i.buffer) : i.buffer;
                        return new i.constructor(c, i.byteOffset, i.length)
                    }

                    function um(i, a) {
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

                    function _C(i, a, c) {
                        for (var d = -1, v = i.criteria, b = a.criteria, I = v.length, N = c.length; ++d < I;) {
                            var x = um(v[d], b[d]);
                            if (x) {
                                if (d >= N) return x;
                                var ee = c[d];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - a.index
                    }

                    function fm(i, a, c, d) {
                        for (var v = -1, b = i.length, I = c.length, N = -1, x = a.length, ee = Ut(b - I, 0), te = V(x + ee), ae = !d; ++N < x;) te[N] = a[N];
                        for (; ++v < I;)(ae || v < b) && (te[c[v]] = i[v]);
                        for (; ee--;) te[N++] = i[v++];
                        return te
                    }

                    function dm(i, a, c, d) {
                        for (var v = -1, b = i.length, I = -1, N = c.length, x = -1, ee = a.length, te = Ut(b - N, 0), ae = V(te + ee), me = !d; ++v < te;) ae[v] = i[v];
                        for (var Oe = v; ++x < ee;) ae[Oe + x] = a[x];
                        for (; ++I < N;)(me || v < b) && (ae[Oe + c[I]] = i[v++]);
                        return ae
                    }

                    function vr(i, a) {
                        var c = -1,
                            d = i.length;
                        for (a || (a = V(d)); ++c < d;) a[c] = i[c];
                        return a
                    }

                    function gn(i, a, c, d) {
                        var v = !c;
                        c || (c = {});
                        for (var b = -1, I = a.length; ++b < I;) {
                            var N = a[b],
                                x = d ? d(c[N], i[N], N, c, i) : r;
                            x === r && (x = i[N]), v ? $n(c, N, x) : _a(c, N, x)
                        }
                        return c
                    }

                    function bC(i, a) {
                        return gn(i, Ku(i), a)
                    }

                    function EC(i, a) {
                        return gn(i, wm(i), a)
                    }

                    function zo(i, a) {
                        return function(c, d) {
                            var v = je(c) ? CO : Ww,
                                b = a ? a() : {};
                            return v(c, i, Re(d, 2), b)
                        }
                    }

                    function ys(i) {
                        return Ke(function(a, c) {
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

                    function hm(i, a) {
                        return function(c, d) {
                            if (c == null) return c;
                            if (!yr(c)) return i(c, d);
                            for (var v = c.length, b = a ? v : -1, I = pt(c);
                                (a ? b-- : ++b < v) && d(I[b], b, I) !== !1;);
                            return c
                        }
                    }

                    function pm(i) {
                        return function(a, c, d) {
                            for (var v = -1, b = pt(a), I = d(a), N = I.length; N--;) {
                                var x = I[i ? N : ++v];
                                if (c(b[x], x, b) === !1) break
                            }
                            return a
                        }
                    }

                    function TC(i, a, c) {
                        var d = a & B,
                            v = Oa(i);

                        function b() {
                            var I = this && this !== Xt && this instanceof b ? v : i;
                            return I.apply(d ? c : this, arguments)
                        }
                        return b
                    }

                    function gm(i) {
                        return function(a) {
                            a = ct(a);
                            var c = fs(a) ? en(a) : r,
                                d = c ? c[0] : a.charAt(0),
                                v = c ? zn(c, 1).join("") : a.slice(1);
                            return d[i]() + v
                        }
                    }

                    function _s(i) {
                        return function(a) {
                            return uu(hv(dv(a).replace(dO, "")), i, "")
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
                            var c = vs(i.prototype),
                                d = i.apply(c, a);
                            return Ct(d) ? d : c
                        }
                    }

                    function SC(i, a, c) {
                        var d = Oa(i);

                        function v() {
                            for (var b = arguments.length, I = V(b), N = b, x = bs(v); N--;) I[N] = arguments[N];
                            var ee = b < 3 && I[0] !== x && I[b - 1] !== x ? [] : Hn(I, x);
                            if (b -= ee.length, b < c) return bm(i, a, Xo, v.placeholder, r, I, ee, r, r, c - b);
                            var te = this && this !== Xt && this instanceof v ? d : i;
                            return $r(te, this, I)
                        }
                        return v
                    }

                    function mm(i) {
                        return function(a, c, d) {
                            var v = pt(a);
                            if (!yr(a)) {
                                var b = Re(c, 3);
                                a = Vt(a), c = function(N) {
                                    return b(v[N], N, v)
                                }
                            }
                            var I = i(a, c, d);
                            return I > -1 ? v[b ? a[I] : I] : r
                        }
                    }

                    function vm(i) {
                        return An(function(a) {
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
                                    x = N == "wrapper" ? Hu(b) : r;
                                x && qu(x[0]) && x[1] == (oe | q | j | le) && !x[4].length && x[9] == 1 ? I = I[el(x[0])].apply(I, x[3]) : I = b.length == 1 && qu(b) ? I[N]() : I.thru(b)
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
                            ae = a & B,
                            me = a & $,
                            Oe = a & (q | G),
                            Le = a & ue,
                            Ve = me ? r : Oa(i);

                        function Pe() {
                            for (var Ye = arguments.length, ze = V(Ye), Rr = Ye; Rr--;) ze[Rr] = arguments[Rr];
                            if (Oe) var hr = bs(Pe),
                                Lr = xO(ze, hr);
                            if (d && (ze = fm(ze, d, v, Oe)), b && (ze = dm(ze, b, I, Oe)), Ye -= Lr, Oe && Ye < ee) {
                                var Lt = Hn(ze, hr);
                                return bm(i, a, Xo, Pe.placeholder, c, ze, Lt, N, x, ee - Ye)
                            }
                            var nn = ae ? c : this,
                                Pn = me ? nn[i] : i;
                            return Ye = ze.length, N ? ze = WC(ze, N) : Le && Ye > 1 && ze.reverse(), te && x < Ye && (ze.length = x), this && this !== Xt && this instanceof Pe && (Pn = Ve || Oa(Pn)), Pn.apply(nn, ze)
                        }
                        return Pe
                    }

                    function ym(i, a) {
                        return function(c, d) {
                            return Jw(c, i, a(d), {})
                        }
                    }

                    function Jo(i, a) {
                        return function(c, d) {
                            var v;
                            if (c === r && d === r) return a;
                            if (c !== r && (v = c), d !== r) {
                                if (v === r) return d;
                                typeof c == "string" || typeof d == "string" ? (c = Ar(c), d = Ar(d)) : (c = nm(c), d = nm(d)), v = i(c, d)
                            }
                            return v
                        }
                    }

                    function Bu(i) {
                        return An(function(a) {
                            return a = Ot(a, Ir(Re())), Ke(function(c) {
                                var d = this;
                                return i(a, function(v) {
                                    return $r(v, d, c)
                                })
                            })
                        })
                    }

                    function Zo(i, a) {
                        a = a === r ? " " : Ar(a);
                        var c = a.length;
                        if (c < 2) return c ? Pu(a, i) : a;
                        var d = Pu(a, Fo(i / ds(a)));
                        return fs(a) ? zn(en(d), 0, i).join("") : d.slice(0, i)
                    }

                    function OC(i, a, c, d) {
                        var v = a & B,
                            b = Oa(i);

                        function I() {
                            for (var N = -1, x = arguments.length, ee = -1, te = d.length, ae = V(te + x), me = this && this !== Xt && this instanceof I ? b : i; ++ee < te;) ae[ee] = d[ee];
                            for (; x--;) ae[ee++] = arguments[++N];
                            return $r(me, v ? c : this, ae)
                        }
                        return I
                    }

                    function _m(i) {
                        return function(a, c, d) {
                            return d && typeof d != "number" && dr(a, c, d) && (c = d = r), a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), d = d === r ? a < c ? 1 : -1 : Ln(d), cC(a, c, d, i)
                        }
                    }

                    function Qo(i) {
                        return function(a, c) {
                            return typeof a == "string" && typeof c == "string" || (a = Kr(a), c = Kr(c)), i(a, c)
                        }
                    }

                    function bm(i, a, c, d, v, b, I, N, x, ee) {
                        var te = a & q,
                            ae = te ? I : r,
                            me = te ? r : I,
                            Oe = te ? b : r,
                            Le = te ? r : b;
                        a |= te ? j : J, a &= ~(te ? J : j), a & H || (a &= ~(B | $));
                        var Ve = [i, a, v, Oe, ae, Le, me, N, x, ee],
                            Pe = c.apply(r, Ve);
                        return qu(i) && Lm(Pe, Ve), Pe.placeholder = d, Pm(Pe, i, a)
                    }

                    function ju(i) {
                        var a = Ft[i];
                        return function(c, d) {
                            if (c = Kr(c), d = d == null ? 0 : ir(We(d), 292), d && Pg(c)) {
                                var v = (ct(c) + "e").split("e"),
                                    b = a(v[0] + "e" + (+v[1] + d));
                                return v = (ct(b) + "e").split("e"), +(v[0] + "e" + (+v[1] - d))
                            }
                            return a(c)
                        }
                    }
                    var wC = gs && 1 / Io(new gs([, -0]))[1] == be ? function(i) {
                        return new gs(i)
                    } : uf;

                    function Em(i) {
                        return function(a) {
                            var c = sr(a);
                            return c == p ? vu(a) : c == re ? GO(a) : kO(a, i(a))
                        }
                    }

                    function In(i, a, c, d, v, b, I, N) {
                        var x = a & $;
                        if (!x && typeof i != "function") throw new jr(l);
                        var ee = d ? d.length : 0;
                        if (ee || (a &= ~(j | J), d = v = r), I = I === r ? I : Ut(We(I), 0), N = N === r ? N : We(N), ee -= v ? v.length : 0, a & J) {
                            var te = d,
                                ae = v;
                            d = v = r
                        }
                        var me = x ? r : Hu(i),
                            Oe = [i, a, c, d, v, te, ae, b, I, N];
                        if (me && BC(Oe, me), i = Oe[0], a = Oe[1], c = Oe[2], d = Oe[3], v = Oe[4], N = Oe[9] = Oe[9] === r ? x ? 0 : i.length : Ut(Oe[9] - ee, 0), !N && a & (q | G) && (a &= ~(q | G)), !a || a == B) var Le = TC(i, a, c);
                        else a == q || a == G ? Le = SC(i, a, N) : (a == j || a == (B | j)) && !v.length ? Le = OC(i, a, c, d) : Le = Xo.apply(r, Oe);
                        var Ve = me ? tm : Lm;
                        return Pm(Ve(Le, Oe), i, a)
                    }

                    function Tm(i, a, c, d) {
                        return i === r || rn(i, ps[c]) && !dt.call(d, c) ? a : i
                    }

                    function Sm(i, a, c, d, v, b) {
                        return Ct(i) && Ct(a) && (b.set(a, i), Ko(i, a, r, Sm, b), b.delete(a)), i
                    }

                    function CC(i) {
                        return $a(i) ? r : i
                    }

                    function Om(i, a, c, d, v, b) {
                        var I = c & P,
                            N = i.length,
                            x = a.length;
                        if (N != x && !(I && x > N)) return !1;
                        var ee = b.get(i),
                            te = b.get(a);
                        if (ee && te) return ee == a && te == i;
                        var ae = -1,
                            me = !0,
                            Oe = c & M ? new Ii : r;
                        for (b.set(i, a), b.set(a, i); ++ae < N;) {
                            var Le = i[ae],
                                Ve = a[ae];
                            if (d) var Pe = I ? d(Ve, Le, ae, a, i, b) : d(Le, Ve, ae, i, a, b);
                            if (Pe !== r) {
                                if (Pe) continue;
                                me = !1;
                                break
                            }
                            if (Oe) {
                                if (!fu(a, function(Ye, ze) {
                                        if (!ha(Oe, ze) && (Le === Ye || v(Le, Ye, c, d, b))) return Oe.push(ze)
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

                    function $C(i, a, c, d, v, b, I) {
                        switch (c) {
                            case w:
                                if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset) return !1;
                                i = i.buffer, a = a.buffer;
                            case xe:
                                return !(i.byteLength != a.byteLength || !b(new ko(i), new ko(a)));
                            case St:
                            case lt:
                            case O:
                                return rn(+i, +a);
                            case Ht:
                                return i.name == a.name && i.message == a.message;
                            case se:
                            case A:
                                return i == a + "";
                            case p:
                                var N = vu;
                            case re:
                                var x = d & P;
                                if (N || (N = Io), i.size != a.size && !x) return !1;
                                var ee = I.get(i);
                                if (ee) return ee == a;
                                d |= M, I.set(i, a);
                                var te = Om(N(i), N(a), d, v, b, I);
                                return I.delete(i), te;
                            case W:
                                if (ya) return ya.call(i) == ya.call(a)
                        }
                        return !1
                    }

                    function IC(i, a, c, d, v, b) {
                        var I = c & P,
                            N = Gu(i),
                            x = N.length,
                            ee = Gu(a),
                            te = ee.length;
                        if (x != te && !I) return !1;
                        for (var ae = x; ae--;) {
                            var me = N[ae];
                            if (!(I ? me in a : dt.call(a, me))) return !1
                        }
                        var Oe = b.get(i),
                            Le = b.get(a);
                        if (Oe && Le) return Oe == a && Le == i;
                        var Ve = !0;
                        b.set(i, a), b.set(a, i);
                        for (var Pe = I; ++ae < x;) {
                            me = N[ae];
                            var Ye = i[me],
                                ze = a[me];
                            if (d) var Rr = I ? d(ze, Ye, me, a, i, b) : d(Ye, ze, me, i, a, b);
                            if (!(Rr === r ? Ye === ze || v(Ye, ze, c, d, b) : Rr)) {
                                Ve = !1;
                                break
                            }
                            Pe || (Pe = me == "constructor")
                        }
                        if (Ve && !Pe) {
                            var hr = i.constructor,
                                Lr = a.constructor;
                            hr != Lr && "constructor" in i && "constructor" in a && !(typeof hr == "function" && hr instanceof hr && typeof Lr == "function" && Lr instanceof Lr) && (Ve = !1)
                        }
                        return b.delete(i), b.delete(a), Ve
                    }

                    function An(i) {
                        return Xu(Nm(i, r, Um), i + "")
                    }

                    function Gu(i) {
                        return Hg(i, Vt, Ku)
                    }

                    function Wu(i) {
                        return Hg(i, _r, wm)
                    }
                    var Hu = Bo ? function(i) {
                        return Bo.get(i)
                    } : uf;

                    function el(i) {
                        for (var a = i.name + "", c = ms[a], d = dt.call(ms, a) ? c.length : 0; d--;) {
                            var v = c[d],
                                b = v.func;
                            if (b == null || b == i) return v.name
                        }
                        return a
                    }

                    function bs(i) {
                        var a = dt.call(_, "placeholder") ? _ : i;
                        return a.placeholder
                    }

                    function Re() {
                        var i = _.iteratee || lf;
                        return i = i === lf ? Yg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function tl(i, a) {
                        var c = i.__data__;
                        return DC(a) ? c[typeof a == "string" ? "string" : "hash"] : c.map
                    }

                    function Vu(i) {
                        for (var a = Vt(i), c = a.length; c--;) {
                            var d = a[c],
                                v = i[d];
                            a[c] = [d, v, Im(v)]
                        }
                        return a
                    }

                    function Ri(i, a) {
                        var c = UO(i, a);
                        return Kg(c) ? c : r
                    }

                    function AC(i) {
                        var a = dt.call(i, Ci),
                            c = i[Ci];
                        try {
                            i[Ci] = r;
                            var d = !0
                        } catch {}
                        var v = Lo.call(i);
                        return d && (a ? i[Ci] = c : delete i[Ci]), v
                    }
                    var Ku = _u ? function(i) {
                            return i == null ? [] : (i = pt(i), Gn(_u(i), function(a) {
                                return Rg.call(i, a)
                            }))
                        } : ff,
                        wm = _u ? function(i) {
                            for (var a = []; i;) Wn(a, Ku(i)), i = xo(i);
                            return a
                        } : ff,
                        sr = fr;
                    (bu && sr(new bu(new ArrayBuffer(1))) != w || ga && sr(new ga) != p || Eu && sr(Eu.resolve()) != K || gs && sr(new gs) != re || ma && sr(new ma) != pe) && (sr = function(i) {
                        var a = fr(i),
                            c = a == U ? i.constructor : r,
                            d = c ? Li(c) : "";
                        if (d) switch (d) {
                            case fw:
                                return w;
                            case dw:
                                return p;
                            case hw:
                                return K;
                            case pw:
                                return re;
                            case gw:
                                return pe
                        }
                        return a
                    });

                    function NC(i, a, c) {
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
                                    i = Ut(i, a - I);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: a
                        }
                    }

                    function RC(i) {
                        var a = i.match(MS);
                        return a ? a[1].split(FS) : []
                    }

                    function Cm(i, a, c) {
                        a = qn(a, i);
                        for (var d = -1, v = a.length, b = !1; ++d < v;) {
                            var I = mn(a[d]);
                            if (!(b = i != null && c(i, I))) break;
                            i = i[I]
                        }
                        return b || ++d != v ? b : (v = i == null ? 0 : i.length, !!v && ll(v) && Nn(I, v) && (je(i) || Pi(i)))
                    }

                    function LC(i) {
                        var a = i.length,
                            c = new i.constructor(a);
                        return a && typeof i[0] == "string" && dt.call(i, "index") && (c.index = i.index, c.input = i.input), c
                    }

                    function $m(i) {
                        return typeof i.constructor == "function" && !wa(i) ? vs(xo(i)) : {}
                    }

                    function PC(i, a, c) {
                        var d = i.constructor;
                        switch (a) {
                            case xe:
                                return Uu(i);
                            case St:
                            case lt:
                                return new d(+i);
                            case w:
                                return mC(i, c);
                            case T:
                            case R:
                            case S:
                            case L:
                            case Q:
                            case ne:
                            case _e:
                            case Te:
                            case ft:
                                return cm(i, c);
                            case p:
                                return new d;
                            case O:
                            case A:
                                return new d(i);
                            case se:
                                return vC(i);
                            case re:
                                return new d;
                            case W:
                                return yC(i)
                        }
                    }

                    function kC(i, a) {
                        var c = a.length;
                        if (!c) return i;
                        var d = c - 1;
                        return a[d] = (c > 1 ? "& " : "") + a[d], a = a.join(c > 2 ? ", " : " "), i.replace(DS, `{
/* [wrapped with ` + a + `] */
`)
                    }

                    function xC(i) {
                        return je(i) || Pi(i) || !!(Lg && i && i[Lg])
                    }

                    function Nn(i, a) {
                        var c = typeof i;
                        return a = a == null ? ve : a, !!a && (c == "number" || c != "symbol" && YS.test(i)) && i > -1 && i % 1 == 0 && i < a
                    }

                    function dr(i, a, c) {
                        if (!Ct(c)) return !1;
                        var d = typeof a;
                        return (d == "number" ? yr(c) && Nn(a, c.length) : d == "string" && a in c) ? rn(c[a], i) : !1
                    }

                    function Yu(i, a) {
                        if (je(i)) return !1;
                        var c = typeof i;
                        return c == "number" || c == "symbol" || c == "boolean" || i == null || Nr(i) ? !0 : LS.test(i) || !RS.test(i) || a != null && i in pt(a)
                    }

                    function DC(i) {
                        var a = typeof i;
                        return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
                    }

                    function qu(i) {
                        var a = el(i),
                            c = _[a];
                        if (typeof c != "function" || !(a in qe.prototype)) return !1;
                        if (i === c) return !0;
                        var d = Hu(c);
                        return !!d && i === d[0]
                    }

                    function MC(i) {
                        return !!Ig && Ig in i
                    }
                    var FC = No ? Rn : df;

                    function wa(i) {
                        var a = i && i.constructor,
                            c = typeof a == "function" && a.prototype || ps;
                        return i === c
                    }

                    function Im(i) {
                        return i === i && !Ct(i)
                    }

                    function Am(i, a) {
                        return function(c) {
                            return c == null ? !1 : c[i] === a && (a !== r || i in pt(c))
                        }
                    }

                    function UC(i) {
                        var a = al(i, function(d) {
                                return c.size === h && c.clear(), d
                            }),
                            c = a.cache;
                        return a
                    }

                    function BC(i, a) {
                        var c = i[1],
                            d = a[1],
                            v = c | d,
                            b = v < (B | $ | oe),
                            I = d == oe && c == q || d == oe && c == le && i[7].length <= a[8] || d == (oe | le) && a[7].length <= a[8] && c == q;
                        if (!(b || I)) return i;
                        d & B && (i[2] = a[2], v |= c & B ? 0 : H);
                        var N = a[3];
                        if (N) {
                            var x = i[3];
                            i[3] = x ? fm(x, N, a[4]) : N, i[4] = x ? Hn(i[3], g) : a[4]
                        }
                        return N = a[5], N && (x = i[5], i[5] = x ? dm(x, N, a[6]) : N, i[6] = x ? Hn(i[5], g) : a[6]), N = a[7], N && (i[7] = N), d & oe && (i[8] = i[8] == null ? a[8] : ir(i[8], a[8])), i[9] == null && (i[9] = a[9]), i[0] = a[0], i[1] = v, i
                    }

                    function jC(i) {
                        var a = [];
                        if (i != null)
                            for (var c in pt(i)) a.push(c);
                        return a
                    }

                    function GC(i) {
                        return Lo.call(i)
                    }

                    function Nm(i, a, c) {
                        return a = Ut(a === r ? i.length - 1 : a, 0),
                            function() {
                                for (var d = arguments, v = -1, b = Ut(d.length - a, 0), I = V(b); ++v < b;) I[v] = d[a + v];
                                v = -1;
                                for (var N = V(a + 1); ++v < a;) N[v] = d[v];
                                return N[a] = c(I), $r(i, this, N)
                            }
                    }

                    function Rm(i, a) {
                        return a.length < 2 ? i : Ni(i, Hr(a, 0, -1))
                    }

                    function WC(i, a) {
                        for (var c = i.length, d = ir(a.length, c), v = vr(i); d--;) {
                            var b = a[d];
                            i[d] = Nn(b, c) ? v[b] : r
                        }
                        return i
                    }

                    function zu(i, a) {
                        if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__") return i[a]
                    }
                    var Lm = km(tm),
                        Ca = iw || function(i, a) {
                            return Xt.setTimeout(i, a)
                        },
                        Xu = km(dC);

                    function Pm(i, a, c) {
                        var d = a + "";
                        return Xu(i, kC(d, HC(RC(d), c)))
                    }

                    function km(i) {
                        var a = 0,
                            c = 0;
                        return function() {
                            var d = lw(),
                                v = Ce - (d - c);
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
                            var b = Lu(c, v),
                                I = i[b];
                            i[b] = i[c], i[c] = I
                        }
                        return i.length = a, i
                    }
                    var xm = UC(function(i) {
                        var a = [];
                        return i.charCodeAt(0) === 46 && a.push(""), i.replace(PS, function(c, d, v, b) {
                            a.push(v ? b.replace(jS, "$1") : d || c)
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
                                return Ro.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function HC(i, a) {
                        return Br(Cr, function(c) {
                            var d = "_." + c[0];
                            a & c[1] && !Co(i, d) && i.push(d)
                        }), i.sort()
                    }

                    function Dm(i) {
                        if (i instanceof qe) return i.clone();
                        var a = new Gr(i.__wrapped__, i.__chain__);
                        return a.__actions__ = vr(i.__actions__), a.__index__ = i.__index__, a.__values__ = i.__values__, a
                    }

                    function VC(i, a, c) {
                        (c ? dr(i, a, c) : a === r) ? a = 1: a = Ut(We(a), 0);
                        var d = i == null ? 0 : i.length;
                        if (!d || a < 1) return [];
                        for (var v = 0, b = 0, I = V(Fo(d / a)); v < d;) I[b++] = Hr(i, v, v += a);
                        return I
                    }

                    function KC(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = 0, v = []; ++a < c;) {
                            var b = i[a];
                            b && (v[d++] = b)
                        }
                        return v
                    }

                    function YC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var a = V(i - 1), c = arguments[0], d = i; d--;) a[d - 1] = arguments[d];
                        return Wn(je(c) ? vr(c) : [c], Jt(a, 1))
                    }
                    var qC = Ke(function(i, a) {
                            return Rt(i) ? ba(i, Jt(a, 1, Rt, !0)) : []
                        }),
                        zC = Ke(function(i, a) {
                            var c = Vr(a);
                            return Rt(c) && (c = r), Rt(i) ? ba(i, Jt(a, 1, Rt, !0), Re(c, 2)) : []
                        }),
                        XC = Ke(function(i, a) {
                            var c = Vr(a);
                            return Rt(c) && (c = r), Rt(i) ? ba(i, Jt(a, 1, Rt, !0), r, c) : []
                        });

                    function JC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function ZC(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function QC(i, a) {
                        return i && i.length ? qo(i, Re(a, 3), !0, !0) : []
                    }

                    function e$(i, a) {
                        return i && i.length ? qo(i, Re(a, 3), !0) : []
                    }

                    function t$(i, a, c, d) {
                        var v = i == null ? 0 : i.length;
                        return v ? (c && typeof c != "number" && dr(i, a, c) && (c = 0, d = v), Yw(i, a, c, d)) : []
                    }

                    function Mm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Ut(d + v, 0)), $o(i, Re(a, 3), v)
                    }

                    function Fm(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d - 1;
                        return c !== r && (v = We(c), v = c < 0 ? Ut(d + v, 0) : ir(v, d - 1)), $o(i, Re(a, 3), v, !0)
                    }

                    function Um(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jt(i, 1) : []
                    }

                    function r$(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Jt(i, be) : []
                    }

                    function n$(i, a) {
                        var c = i == null ? 0 : i.length;
                        return c ? (a = a === r ? 1 : We(a), Jt(i, a)) : []
                    }

                    function i$(i) {
                        for (var a = -1, c = i == null ? 0 : i.length, d = {}; ++a < c;) {
                            var v = i[a];
                            d[v[0]] = v[1]
                        }
                        return d
                    }

                    function Bm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function s$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = c == null ? 0 : We(c);
                        return v < 0 && (v = Ut(d + v, 0)), us(i, a, v)
                    }

                    function a$(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 0, -1) : []
                    }
                    var o$ = Ke(function(i) {
                            var a = Ot(i, Mu);
                            return a.length && a[0] === i[0] ? $u(a) : []
                        }),
                        l$ = Ke(function(i) {
                            var a = Vr(i),
                                c = Ot(i, Mu);
                            return a === Vr(c) ? a = r : c.pop(), c.length && c[0] === i[0] ? $u(c, Re(a, 2)) : []
                        }),
                        c$ = Ke(function(i) {
                            var a = Vr(i),
                                c = Ot(i, Mu);
                            return a = typeof a == "function" ? a : r, a && c.pop(), c.length && c[0] === i[0] ? $u(c, r, a) : []
                        });

                    function u$(i, a) {
                        return i == null ? "" : aw.call(i, a)
                    }

                    function Vr(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? i[a - 1] : r
                    }

                    function f$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        if (!d) return -1;
                        var v = d;
                        return c !== r && (v = We(c), v = v < 0 ? Ut(d + v, 0) : ir(v, d - 1)), a === a ? HO(i, a, v) : $o(i, bg, v, !0)
                    }

                    function d$(i, a) {
                        return i && i.length ? Jg(i, We(a)) : r
                    }
                    var h$ = Ke(jm);

                    function jm(i, a) {
                        return i && i.length && a && a.length ? Ru(i, a) : i
                    }

                    function p$(i, a, c) {
                        return i && i.length && a && a.length ? Ru(i, a, Re(c, 2)) : i
                    }

                    function g$(i, a, c) {
                        return i && i.length && a && a.length ? Ru(i, a, r, c) : i
                    }
                    var m$ = An(function(i, a) {
                        var c = i == null ? 0 : i.length,
                            d = Su(i, a);
                        return em(i, Ot(a, function(v) {
                            return Nn(v, c) ? +v : v
                        }).sort(um)), d
                    });

                    function v$(i, a) {
                        var c = [];
                        if (!(i && i.length)) return c;
                        var d = -1,
                            v = [],
                            b = i.length;
                        for (a = Re(a, 3); ++d < b;) {
                            var I = i[d];
                            a(I, d, i) && (c.push(I), v.push(d))
                        }
                        return em(i, v), c
                    }

                    function Ju(i) {
                        return i == null ? i : uw.call(i)
                    }

                    function y$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (c && typeof c != "number" && dr(i, a, c) ? (a = 0, c = d) : (a = a == null ? 0 : We(a), c = c === r ? d : We(c)), Hr(i, a, c)) : []
                    }

                    function _$(i, a) {
                        return Yo(i, a)
                    }

                    function b$(i, a, c) {
                        return ku(i, a, Re(c, 2))
                    }

                    function E$(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = Yo(i, a);
                            if (d < c && rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function T$(i, a) {
                        return Yo(i, a, !0)
                    }

                    function S$(i, a, c) {
                        return ku(i, a, Re(c, 2), !0)
                    }

                    function O$(i, a) {
                        var c = i == null ? 0 : i.length;
                        if (c) {
                            var d = Yo(i, a, !0) - 1;
                            if (rn(i[d], a)) return d
                        }
                        return -1
                    }

                    function w$(i) {
                        return i && i.length ? rm(i) : []
                    }

                    function C$(i, a) {
                        return i && i.length ? rm(i, Re(a, 2)) : []
                    }

                    function $$(i) {
                        var a = i == null ? 0 : i.length;
                        return a ? Hr(i, 1, a) : []
                    }

                    function I$(i, a, c) {
                        return i && i.length ? (a = c || a === r ? 1 : We(a), Hr(i, 0, a < 0 ? 0 : a)) : []
                    }

                    function A$(i, a, c) {
                        var d = i == null ? 0 : i.length;
                        return d ? (a = c || a === r ? 1 : We(a), a = d - a, Hr(i, a < 0 ? 0 : a, d)) : []
                    }

                    function N$(i, a) {
                        return i && i.length ? qo(i, Re(a, 3), !1, !0) : []
                    }

                    function R$(i, a) {
                        return i && i.length ? qo(i, Re(a, 3)) : []
                    }
                    var L$ = Ke(function(i) {
                            return Yn(Jt(i, 1, Rt, !0))
                        }),
                        P$ = Ke(function(i) {
                            var a = Vr(i);
                            return Rt(a) && (a = r), Yn(Jt(i, 1, Rt, !0), Re(a, 2))
                        }),
                        k$ = Ke(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, Yn(Jt(i, 1, Rt, !0), r, a)
                        });

                    function x$(i) {
                        return i && i.length ? Yn(i) : []
                    }

                    function D$(i, a) {
                        return i && i.length ? Yn(i, Re(a, 2)) : []
                    }

                    function M$(i, a) {
                        return a = typeof a == "function" ? a : r, i && i.length ? Yn(i, r, a) : []
                    }

                    function Zu(i) {
                        if (!(i && i.length)) return [];
                        var a = 0;
                        return i = Gn(i, function(c) {
                            if (Rt(c)) return a = Ut(c.length, a), !0
                        }), gu(a, function(c) {
                            return Ot(i, du(c))
                        })
                    }

                    function Gm(i, a) {
                        if (!(i && i.length)) return [];
                        var c = Zu(i);
                        return a == null ? c : Ot(c, function(d) {
                            return $r(a, r, d)
                        })
                    }
                    var F$ = Ke(function(i, a) {
                            return Rt(i) ? ba(i, a) : []
                        }),
                        U$ = Ke(function(i) {
                            return Du(Gn(i, Rt))
                        }),
                        B$ = Ke(function(i) {
                            var a = Vr(i);
                            return Rt(a) && (a = r), Du(Gn(i, Rt), Re(a, 2))
                        }),
                        j$ = Ke(function(i) {
                            var a = Vr(i);
                            return a = typeof a == "function" ? a : r, Du(Gn(i, Rt), r, a)
                        }),
                        G$ = Ke(Zu);

                    function W$(i, a) {
                        return am(i || [], a || [], _a)
                    }

                    function H$(i, a) {
                        return am(i || [], a || [], Sa)
                    }
                    var V$ = Ke(function(i) {
                        var a = i.length,
                            c = a > 1 ? i[a - 1] : r;
                        return c = typeof c == "function" ? (i.pop(), c) : r, Gm(i, c)
                    });

                    function Wm(i) {
                        var a = _(i);
                        return a.__chain__ = !0, a
                    }

                    function K$(i, a) {
                        return a(i), i
                    }

                    function nl(i, a) {
                        return a(i)
                    }
                    var Y$ = An(function(i) {
                        var a = i.length,
                            c = a ? i[0] : 0,
                            d = this.__wrapped__,
                            v = function(b) {
                                return Su(b, i)
                            };
                        return a > 1 || this.__actions__.length || !(d instanceof qe) || !Nn(c) ? this.thru(v) : (d = d.slice(c, +c + (a ? 1 : 0)), d.__actions__.push({
                            func: nl,
                            args: [v],
                            thisArg: r
                        }), new Gr(d, this.__chain__).thru(function(b) {
                            return a && !b.length && b.push(r), b
                        }))
                    });

                    function q$() {
                        return Wm(this)
                    }

                    function z$() {
                        return new Gr(this.value(), this.__chain__)
                    }

                    function X$() {
                        this.__values__ === r && (this.__values__ = nv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            a = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: a
                        }
                    }

                    function J$() {
                        return this
                    }

                    function Z$(i) {
                        for (var a, c = this; c instanceof Go;) {
                            var d = Dm(c);
                            d.__index__ = 0, d.__values__ = r, a ? v.__wrapped__ = d : a = d;
                            var v = d;
                            c = c.__wrapped__
                        }
                        return v.__wrapped__ = i, a
                    }

                    function Q$() {
                        var i = this.__wrapped__;
                        if (i instanceof qe) {
                            var a = i;
                            return this.__actions__.length && (a = new qe(this)), a = a.reverse(), a.__actions__.push({
                                func: nl,
                                args: [Ju],
                                thisArg: r
                            }), new Gr(a, this.__chain__)
                        }
                        return this.thru(Ju)
                    }

                    function eI() {
                        return sm(this.__wrapped__, this.__actions__)
                    }
                    var tI = zo(function(i, a, c) {
                        dt.call(i, c) ? ++i[c] : $n(i, c, 1)
                    });

                    function rI(i, a, c) {
                        var d = je(i) ? yg : Kw;
                        return c && dr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }

                    function nI(i, a) {
                        var c = je(i) ? Gn : Gg;
                        return c(i, Re(a, 3))
                    }
                    var iI = mm(Mm),
                        sI = mm(Fm);

                    function aI(i, a) {
                        return Jt(il(i, a), 1)
                    }

                    function oI(i, a) {
                        return Jt(il(i, a), be)
                    }

                    function lI(i, a, c) {
                        return c = c === r ? 1 : We(c), Jt(il(i, a), c)
                    }

                    function Hm(i, a) {
                        var c = je(i) ? Br : Kn;
                        return c(i, Re(a, 3))
                    }

                    function Vm(i, a) {
                        var c = je(i) ? $O : jg;
                        return c(i, Re(a, 3))
                    }
                    var cI = zo(function(i, a, c) {
                        dt.call(i, c) ? i[c].push(a) : $n(i, c, [a])
                    });

                    function uI(i, a, c, d) {
                        i = yr(i) ? i : Ts(i), c = c && !d ? We(c) : 0;
                        var v = i.length;
                        return c < 0 && (c = Ut(v + c, 0)), cl(i) ? c <= v && i.indexOf(a, c) > -1 : !!v && us(i, a, c) > -1
                    }
                    var fI = Ke(function(i, a, c) {
                            var d = -1,
                                v = typeof a == "function",
                                b = yr(i) ? V(i.length) : [];
                            return Kn(i, function(I) {
                                b[++d] = v ? $r(a, I, c) : Ea(I, a, c)
                            }), b
                        }),
                        dI = zo(function(i, a, c) {
                            $n(i, c, a)
                        });

                    function il(i, a) {
                        var c = je(i) ? Ot : qg;
                        return c(i, Re(a, 3))
                    }

                    function hI(i, a, c, d) {
                        return i == null ? [] : (je(a) || (a = a == null ? [] : [a]), c = d ? r : c, je(c) || (c = c == null ? [] : [c]), Zg(i, a, c))
                    }
                    var pI = zo(function(i, a, c) {
                        i[c ? 0 : 1].push(a)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function gI(i, a, c) {
                        var d = je(i) ? uu : Tg,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, Kn)
                    }

                    function mI(i, a, c) {
                        var d = je(i) ? IO : Tg,
                            v = arguments.length < 3;
                        return d(i, Re(a, 4), c, v, jg)
                    }

                    function vI(i, a) {
                        var c = je(i) ? Gn : Gg;
                        return c(i, ol(Re(a, 3)))
                    }

                    function yI(i) {
                        var a = je(i) ? Mg : uC;
                        return a(i)
                    }

                    function _I(i, a, c) {
                        (c ? dr(i, a, c) : a === r) ? a = 1: a = We(a);
                        var d = je(i) ? jw : fC;
                        return d(i, a)
                    }

                    function bI(i) {
                        var a = je(i) ? Gw : hC;
                        return a(i)
                    }

                    function EI(i) {
                        if (i == null) return 0;
                        if (yr(i)) return cl(i) ? ds(i) : i.length;
                        var a = sr(i);
                        return a == p || a == re ? i.size : Au(i).length
                    }

                    function TI(i, a, c) {
                        var d = je(i) ? fu : pC;
                        return c && dr(i, a, c) && (a = r), d(i, Re(a, 3))
                    }
                    var SI = Ke(function(i, a) {
                            if (i == null) return [];
                            var c = a.length;
                            return c > 1 && dr(i, a[0], a[1]) ? a = [] : c > 2 && dr(a[0], a[1], a[2]) && (a = [a[0]]), Zg(i, Jt(a, 1), [])
                        }),
                        sl = nw || function() {
                            return Xt.Date.now()
                        };

                    function OI(i, a) {
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                if (--i < 1) return a.apply(this, arguments)
                            }
                    }

                    function Km(i, a, c) {
                        return a = c ? r : a, a = i && a == null ? i.length : a, In(i, oe, r, r, r, r, a)
                    }

                    function Ym(i, a) {
                        var c;
                        if (typeof a != "function") throw new jr(l);
                        return i = We(i),
                            function() {
                                return --i > 0 && (c = a.apply(this, arguments)), i <= 1 && (a = r), c
                            }
                    }
                    var Qu = Ke(function(i, a, c) {
                            var d = B;
                            if (c.length) {
                                var v = Hn(c, bs(Qu));
                                d |= j
                            }
                            return In(i, d, a, c, v)
                        }),
                        qm = Ke(function(i, a, c) {
                            var d = B | $;
                            if (c.length) {
                                var v = Hn(c, bs(qm));
                                d |= j
                            }
                            return In(a, d, i, c, v)
                        });

                    function zm(i, a, c) {
                        a = c ? r : a;
                        var d = In(i, q, r, r, r, r, r, a);
                        return d.placeholder = zm.placeholder, d
                    }

                    function Xm(i, a, c) {
                        a = c ? r : a;
                        var d = In(i, G, r, r, r, r, r, a);
                        return d.placeholder = Xm.placeholder, d
                    }

                    function Jm(i, a, c) {
                        var d, v, b, I, N, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new jr(l);
                        a = Kr(a) || 0, Ct(c) && (te = !!c.leading, ae = "maxWait" in c, b = ae ? Ut(Kr(c.maxWait) || 0, a) : b, me = "trailing" in c ? !!c.trailing : me);

                        function Oe(Lt) {
                            var nn = d,
                                Pn = v;
                            return d = v = r, ee = Lt, I = i.apply(Pn, nn), I
                        }

                        function Le(Lt) {
                            return ee = Lt, N = Ca(Ye, a), te ? Oe(Lt) : I
                        }

                        function Ve(Lt) {
                            var nn = Lt - x,
                                Pn = Lt - ee,
                                mv = a - nn;
                            return ae ? ir(mv, b - Pn) : mv
                        }

                        function Pe(Lt) {
                            var nn = Lt - x,
                                Pn = Lt - ee;
                            return x === r || nn >= a || nn < 0 || ae && Pn >= b
                        }

                        function Ye() {
                            var Lt = sl();
                            if (Pe(Lt)) return ze(Lt);
                            N = Ca(Ye, Ve(Lt))
                        }

                        function ze(Lt) {
                            return N = r, me && d ? Oe(Lt) : (d = v = r, I)
                        }

                        function Rr() {
                            N !== r && om(N), ee = 0, d = x = v = N = r
                        }

                        function hr() {
                            return N === r ? I : ze(sl())
                        }

                        function Lr() {
                            var Lt = sl(),
                                nn = Pe(Lt);
                            if (d = arguments, v = this, x = Lt, nn) {
                                if (N === r) return Le(x);
                                if (ae) return om(N), N = Ca(Ye, a), Oe(x)
                            }
                            return N === r && (N = Ca(Ye, a)), I
                        }
                        return Lr.cancel = Rr, Lr.flush = hr, Lr
                    }
                    var wI = Ke(function(i, a) {
                            return Bg(i, 1, a)
                        }),
                        CI = Ke(function(i, a, c) {
                            return Bg(i, Kr(a) || 0, c)
                        });

                    function $I(i) {
                        return In(i, ue)
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

                    function II(i) {
                        return Ym(2, i)
                    }
                    var AI = gC(function(i, a) {
                            a = a.length == 1 && je(a[0]) ? Ot(a[0], Ir(Re())) : Ot(Jt(a, 1), Ir(Re()));
                            var c = a.length;
                            return Ke(function(d) {
                                for (var v = -1, b = ir(d.length, c); ++v < b;) d[v] = a[v].call(this, d[v]);
                                return $r(i, this, d)
                            })
                        }),
                        ef = Ke(function(i, a) {
                            var c = Hn(a, bs(ef));
                            return In(i, j, r, a, c)
                        }),
                        Zm = Ke(function(i, a) {
                            var c = Hn(a, bs(Zm));
                            return In(i, J, r, a, c)
                        }),
                        NI = An(function(i, a) {
                            return In(i, le, r, r, r, a)
                        });

                    function RI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a === r ? a : We(a), Ke(i, a)
                    }

                    function LI(i, a) {
                        if (typeof i != "function") throw new jr(l);
                        return a = a == null ? 0 : Ut(We(a), 0), Ke(function(c) {
                            var d = c[a],
                                v = zn(c, 0, a);
                            return d && Wn(v, d), $r(i, this, v)
                        })
                    }

                    function PI(i, a, c) {
                        var d = !0,
                            v = !0;
                        if (typeof i != "function") throw new jr(l);
                        return Ct(c) && (d = "leading" in c ? !!c.leading : d, v = "trailing" in c ? !!c.trailing : v), Jm(i, a, {
                            leading: d,
                            maxWait: a,
                            trailing: v
                        })
                    }

                    function kI(i) {
                        return Km(i, 1)
                    }

                    function xI(i, a) {
                        return ef(Fu(a), i)
                    }

                    function DI() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return je(i) ? i : [i]
                    }

                    function MI(i) {
                        return Wr(i, C)
                    }

                    function FI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, C, a)
                    }

                    function UI(i) {
                        return Wr(i, y | C)
                    }

                    function BI(i, a) {
                        return a = typeof a == "function" ? a : r, Wr(i, y | C, a)
                    }

                    function jI(i, a) {
                        return a == null || Ug(i, a, Vt(a))
                    }

                    function rn(i, a) {
                        return i === a || i !== i && a !== a
                    }
                    var GI = Qo(Cu),
                        WI = Qo(function(i, a) {
                            return i >= a
                        }),
                        Pi = Vg(function() {
                            return arguments
                        }()) ? Vg : function(i) {
                            return It(i) && dt.call(i, "callee") && !Rg.call(i, "callee")
                        },
                        je = V.isArray,
                        HI = dg ? Ir(dg) : Zw;

                    function yr(i) {
                        return i != null && ll(i.length) && !Rn(i)
                    }

                    function Rt(i) {
                        return It(i) && yr(i)
                    }

                    function VI(i) {
                        return i === !0 || i === !1 || It(i) && fr(i) == St
                    }
                    var Xn = sw || df,
                        KI = hg ? Ir(hg) : Qw;

                    function YI(i) {
                        return It(i) && i.nodeType === 1 && !$a(i)
                    }

                    function qI(i) {
                        if (i == null) return !0;
                        if (yr(i) && (je(i) || typeof i == "string" || typeof i.splice == "function" || Xn(i) || Es(i) || Pi(i))) return !i.length;
                        var a = sr(i);
                        if (a == p || a == re) return !i.size;
                        if (wa(i)) return !Au(i).length;
                        for (var c in i)
                            if (dt.call(i, c)) return !1;
                        return !0
                    }

                    function zI(i, a) {
                        return Ta(i, a)
                    }

                    function XI(i, a, c) {
                        c = typeof c == "function" ? c : r;
                        var d = c ? c(i, a) : r;
                        return d === r ? Ta(i, a, r, c) : !!d
                    }

                    function tf(i) {
                        if (!It(i)) return !1;
                        var a = fr(i);
                        return a == Ht || a == xt || typeof i.message == "string" && typeof i.name == "string" && !$a(i)
                    }

                    function JI(i) {
                        return typeof i == "number" && Pg(i)
                    }

                    function Rn(i) {
                        if (!Ct(i)) return !1;
                        var a = fr(i);
                        return a == Dt || a == m || a == ot || a == ce
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

                    function It(i) {
                        return i != null && typeof i == "object"
                    }
                    var ev = pg ? Ir(pg) : tC;

                    function ZI(i, a) {
                        return i === a || Iu(i, a, Vu(a))
                    }

                    function QI(i, a, c) {
                        return c = typeof c == "function" ? c : r, Iu(i, a, Vu(a), c)
                    }

                    function eA(i) {
                        return tv(i) && i != +i
                    }

                    function tA(i) {
                        if (FC(i)) throw new Ue(o);
                        return Kg(i)
                    }

                    function rA(i) {
                        return i === null
                    }

                    function nA(i) {
                        return i == null
                    }

                    function tv(i) {
                        return typeof i == "number" || It(i) && fr(i) == O
                    }

                    function $a(i) {
                        if (!It(i) || fr(i) != U) return !1;
                        var a = xo(i);
                        if (a === null) return !0;
                        var c = dt.call(a, "constructor") && a.constructor;
                        return typeof c == "function" && c instanceof c && Ro.call(c) == QO
                    }
                    var rf = gg ? Ir(gg) : rC;

                    function iA(i) {
                        return Qm(i) && i >= -ve && i <= ve
                    }
                    var rv = mg ? Ir(mg) : nC;

                    function cl(i) {
                        return typeof i == "string" || !je(i) && It(i) && fr(i) == A
                    }

                    function Nr(i) {
                        return typeof i == "symbol" || It(i) && fr(i) == W
                    }
                    var Es = vg ? Ir(vg) : iC;

                    function sA(i) {
                        return i === r
                    }

                    function aA(i) {
                        return It(i) && sr(i) == pe
                    }

                    function oA(i) {
                        return It(i) && fr(i) == Ne
                    }
                    var lA = Qo(Nu),
                        cA = Qo(function(i, a) {
                            return i <= a
                        });

                    function nv(i) {
                        if (!i) return [];
                        if (yr(i)) return cl(i) ? en(i) : vr(i);
                        if (pa && i[pa]) return jO(i[pa]());
                        var a = sr(i),
                            c = a == p ? vu : a == re ? Io : Ts;
                        return c(i)
                    }

                    function Ln(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Kr(i), i === be || i === -be) {
                            var a = i < 0 ? -1 : 1;
                            return a * Se
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var a = Ln(i),
                            c = a % 1;
                        return a === a ? c ? a - c : a : 0
                    }

                    function iv(i) {
                        return i ? Ai(We(i), 0, Ge) : 0
                    }

                    function Kr(i) {
                        if (typeof i == "number") return i;
                        if (Nr(i)) return Fe;
                        if (Ct(i)) {
                            var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Ct(a) ? a + "" : a
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Sg(i);
                        var c = HS.test(i);
                        return c || KS.test(i) ? OO(i.slice(2), c ? 2 : 8) : WS.test(i) ? Fe : +i
                    }

                    function sv(i) {
                        return gn(i, _r(i))
                    }

                    function uA(i) {
                        return i ? Ai(We(i), -ve, ve) : i === 0 ? i : 0
                    }

                    function ct(i) {
                        return i == null ? "" : Ar(i)
                    }
                    var fA = ys(function(i, a) {
                            if (wa(a) || yr(a)) {
                                gn(a, Vt(a), i);
                                return
                            }
                            for (var c in a) dt.call(a, c) && _a(i, c, a[c])
                        }),
                        av = ys(function(i, a) {
                            gn(a, _r(a), i)
                        }),
                        ul = ys(function(i, a, c, d) {
                            gn(a, _r(a), i, d)
                        }),
                        dA = ys(function(i, a, c, d) {
                            gn(a, Vt(a), i, d)
                        }),
                        hA = An(Su);

                    function pA(i, a) {
                        var c = vs(i);
                        return a == null ? c : Fg(c, a)
                    }
                    var gA = Ke(function(i, a) {
                            i = pt(i);
                            var c = -1,
                                d = a.length,
                                v = d > 2 ? a[2] : r;
                            for (v && dr(a[0], a[1], v) && (d = 1); ++c < d;)
                                for (var b = a[c], I = _r(b), N = -1, x = I.length; ++N < x;) {
                                    var ee = I[N],
                                        te = i[ee];
                                    (te === r || rn(te, ps[ee]) && !dt.call(i, ee)) && (i[ee] = b[ee])
                                }
                            return i
                        }),
                        mA = Ke(function(i) {
                            return i.push(r, Sm), $r(ov, r, i)
                        });

                    function vA(i, a) {
                        return _g(i, Re(a, 3), pn)
                    }

                    function yA(i, a) {
                        return _g(i, Re(a, 3), wu)
                    }

                    function _A(i, a) {
                        return i == null ? i : Ou(i, Re(a, 3), _r)
                    }

                    function bA(i, a) {
                        return i == null ? i : Wg(i, Re(a, 3), _r)
                    }

                    function EA(i, a) {
                        return i && pn(i, Re(a, 3))
                    }

                    function TA(i, a) {
                        return i && wu(i, Re(a, 3))
                    }

                    function SA(i) {
                        return i == null ? [] : Vo(i, Vt(i))
                    }

                    function OA(i) {
                        return i == null ? [] : Vo(i, _r(i))
                    }

                    function nf(i, a, c) {
                        var d = i == null ? r : Ni(i, a);
                        return d === r ? c : d
                    }

                    function wA(i, a) {
                        return i != null && Cm(i, a, qw)
                    }

                    function sf(i, a) {
                        return i != null && Cm(i, a, zw)
                    }
                    var CA = ym(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = Lo.call(a)), i[a] = c
                        }, of(br)),
                        $A = ym(function(i, a, c) {
                            a != null && typeof a.toString != "function" && (a = Lo.call(a)), dt.call(i, a) ? i[a].push(c) : i[a] = [c]
                        }, Re),
                        IA = Ke(Ea);

                    function Vt(i) {
                        return yr(i) ? Dg(i) : Au(i)
                    }

                    function _r(i) {
                        return yr(i) ? Dg(i, !0) : sC(i)
                    }

                    function AA(i, a) {
                        var c = {};
                        return a = Re(a, 3), pn(i, function(d, v, b) {
                            $n(c, a(d, v, b), d)
                        }), c
                    }

                    function NA(i, a) {
                        var c = {};
                        return a = Re(a, 3), pn(i, function(d, v, b) {
                            $n(c, v, a(d, v, b))
                        }), c
                    }
                    var RA = ys(function(i, a, c) {
                            Ko(i, a, c)
                        }),
                        ov = ys(function(i, a, c, d) {
                            Ko(i, a, c, d)
                        }),
                        LA = An(function(i, a) {
                            var c = {};
                            if (i == null) return c;
                            var d = !1;
                            a = Ot(a, function(b) {
                                return b = qn(b, i), d || (d = b.length > 1), b
                            }), gn(i, Wu(i), c), d && (c = Wr(c, y | E | C, CC));
                            for (var v = a.length; v--;) xu(c, a[v]);
                            return c
                        });

                    function PA(i, a) {
                        return lv(i, ol(Re(a)))
                    }
                    var kA = An(function(i, a) {
                        return i == null ? {} : oC(i, a)
                    });

                    function lv(i, a) {
                        if (i == null) return {};
                        var c = Ot(Wu(i), function(d) {
                            return [d]
                        });
                        return a = Re(a), Qg(i, c, function(d, v) {
                            return a(d, v[0])
                        })
                    }

                    function xA(i, a, c) {
                        a = qn(a, i);
                        var d = -1,
                            v = a.length;
                        for (v || (v = 1, i = r); ++d < v;) {
                            var b = i == null ? r : i[mn(a[d])];
                            b === r && (d = v, b = c), i = Rn(b) ? b.call(i) : b
                        }
                        return i
                    }

                    function DA(i, a, c) {
                        return i == null ? i : Sa(i, a, c)
                    }

                    function MA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : Sa(i, a, c, d)
                    }
                    var cv = Em(Vt),
                        uv = Em(_r);

                    function FA(i, a, c) {
                        var d = je(i),
                            v = d || Xn(i) || Es(i);
                        if (a = Re(a, 4), c == null) {
                            var b = i && i.constructor;
                            v ? c = d ? new b : [] : Ct(i) ? c = Rn(b) ? vs(xo(i)) : {} : c = {}
                        }
                        return (v ? Br : pn)(i, function(I, N, x) {
                            return a(c, I, N, x)
                        }), c
                    }

                    function UA(i, a) {
                        return i == null ? !0 : xu(i, a)
                    }

                    function BA(i, a, c) {
                        return i == null ? i : im(i, a, Fu(c))
                    }

                    function jA(i, a, c, d) {
                        return d = typeof d == "function" ? d : r, i == null ? i : im(i, a, Fu(c), d)
                    }

                    function Ts(i) {
                        return i == null ? [] : mu(i, Vt(i))
                    }

                    function GA(i) {
                        return i == null ? [] : mu(i, _r(i))
                    }

                    function WA(i, a, c) {
                        return c === r && (c = a, a = r), c !== r && (c = Kr(c), c = c === c ? c : 0), a !== r && (a = Kr(a), a = a === a ? a : 0), Ai(Kr(i), a, c)
                    }

                    function HA(i, a, c) {
                        return a = Ln(a), c === r ? (c = a, a = 0) : c = Ln(c), i = Kr(i), Xw(i, a, c)
                    }

                    function VA(i, a, c) {
                        if (c && typeof c != "boolean" && dr(i, a, c) && (a = c = r), c === r && (typeof a == "boolean" ? (c = a, a = r) : typeof i == "boolean" && (c = i, i = r)), i === r && a === r ? (i = 0, a = 1) : (i = Ln(i), a === r ? (a = i, i = 0) : a = Ln(a)), i > a) {
                            var d = i;
                            i = a, a = d
                        }
                        if (c || i % 1 || a % 1) {
                            var v = kg();
                            return ir(i + v * (a - i + SO("1e-" + ((v + "").length - 1))), a)
                        }
                        return Lu(i, a)
                    }
                    var KA = _s(function(i, a, c) {
                        return a = a.toLowerCase(), i + (c ? fv(a) : a)
                    });

                    function fv(i) {
                        return af(ct(i).toLowerCase())
                    }

                    function dv(i) {
                        return i = ct(i), i && i.replace(qS, DO).replace(hO, "")
                    }

                    function YA(i, a, c) {
                        i = ct(i), a = Ar(a);
                        var d = i.length;
                        c = c === r ? d : Ai(We(c), 0, d);
                        var v = c;
                        return c -= a.length, c >= 0 && i.slice(c, v) == a
                    }

                    function qA(i) {
                        return i = ct(i), i && IS.test(i) ? i.replace(Wp, MO) : i
                    }

                    function zA(i) {
                        return i = ct(i), i && kS.test(i) ? i.replace(eu, "\\$&") : i
                    }
                    var XA = _s(function(i, a, c) {
                            return i + (c ? "-" : "") + a.toLowerCase()
                        }),
                        JA = _s(function(i, a, c) {
                            return i + (c ? " " : "") + a.toLowerCase()
                        }),
                        ZA = gm("toLowerCase");

                    function QA(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ds(i) : 0;
                        if (!a || d >= a) return i;
                        var v = (a - d) / 2;
                        return Zo(Uo(v), c) + i + Zo(Fo(v), c)
                    }

                    function eN(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ds(i) : 0;
                        return a && d < a ? i + Zo(a - d, c) : i
                    }

                    function tN(i, a, c) {
                        i = ct(i), a = We(a);
                        var d = a ? ds(i) : 0;
                        return a && d < a ? Zo(a - d, c) + i : i
                    }

                    function rN(i, a, c) {
                        return c || a == null ? a = 0 : a && (a = +a), cw(ct(i).replace(tu, ""), a || 0)
                    }

                    function nN(i, a, c) {
                        return (c ? dr(i, a, c) : a === r) ? a = 1 : a = We(a), Pu(ct(i), a)
                    }

                    function iN() {
                        var i = arguments,
                            a = ct(i[0]);
                        return i.length < 3 ? a : a.replace(i[1], i[2])
                    }
                    var sN = _s(function(i, a, c) {
                        return i + (c ? "_" : "") + a.toLowerCase()
                    });

                    function aN(i, a, c) {
                        return c && typeof c != "number" && dr(i, a, c) && (a = c = r), c = c === r ? Ge : c >>> 0, c ? (i = ct(i), i && (typeof a == "string" || a != null && !rf(a)) && (a = Ar(a), !a && fs(i)) ? zn(en(i), 0, c) : i.split(a, c)) : []
                    }
                    var oN = _s(function(i, a, c) {
                        return i + (c ? " " : "") + af(a)
                    });

                    function lN(i, a, c) {
                        return i = ct(i), c = c == null ? 0 : Ai(We(c), 0, i.length), a = Ar(a), i.slice(c, c + a.length) == a
                    }

                    function cN(i, a, c) {
                        var d = _.templateSettings;
                        c && dr(i, a, c) && (a = r), i = ct(i), a = ul({}, a, d, Tm);
                        var v = ul({}, a.imports, d.imports, Tm),
                            b = Vt(v),
                            I = mu(v, b),
                            N, x, ee = 0,
                            te = a.interpolate || So,
                            ae = "__p += '",
                            me = yu((a.escape || So).source + "|" + te.source + "|" + (te === Hp ? GS : So).source + "|" + (a.evaluate || So).source + "|$", "g"),
                            Oe = "//# sourceURL=" + (dt.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++yO + "]") + `
`;
                        i.replace(me, function(Pe, Ye, ze, Rr, hr, Lr) {
                            return ze || (ze = Rr), ae += i.slice(ee, Lr).replace(zS, FO), Ye && (N = !0, ae += `' +
__e(` + Ye + `) +
'`), hr && (x = !0, ae += `';
` + hr + `;
__p += '`), ze && (ae += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`), ee = Lr + Pe.length, Pe
                        }), ae += `';
`;
                        var Le = dt.call(a, "variable") && a.variable;
                        if (!Le) ae = `with (obj) {
` + ae + `
}
`;
                        else if (BS.test(Le)) throw new Ue(u);
                        ae = (x ? ae.replace(nr, "") : ae).replace(De, "$1").replace(da, "$1;"), ae = "function(" + (Le || "obj") + `) {
` + (Le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var Ve = pv(function() {
                            return it(b, Oe + "return " + ae).apply(r, I)
                        });
                        if (Ve.source = ae, tf(Ve)) throw Ve;
                        return Ve
                    }

                    function uN(i) {
                        return ct(i).toLowerCase()
                    }

                    function fN(i) {
                        return ct(i).toUpperCase()
                    }

                    function dN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return Sg(i);
                        if (!i || !(a = Ar(a))) return i;
                        var d = en(i),
                            v = en(a),
                            b = Og(d, v),
                            I = wg(d, v) + 1;
                        return zn(d, b, I).join("")
                    }

                    function hN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.slice(0, $g(i) + 1);
                        if (!i || !(a = Ar(a))) return i;
                        var d = en(i),
                            v = wg(d, en(a)) + 1;
                        return zn(d, 0, v).join("")
                    }

                    function pN(i, a, c) {
                        if (i = ct(i), i && (c || a === r)) return i.replace(tu, "");
                        if (!i || !(a = Ar(a))) return i;
                        var d = en(i),
                            v = Og(d, en(a));
                        return zn(d, v).join("")
                    }

                    function gN(i, a) {
                        var c = Ae,
                            d = $e;
                        if (Ct(a)) {
                            var v = "separator" in a ? a.separator : v;
                            c = "length" in a ? We(a.length) : c, d = "omission" in a ? Ar(a.omission) : d
                        }
                        i = ct(i);
                        var b = i.length;
                        if (fs(i)) {
                            var I = en(i);
                            b = I.length
                        }
                        if (c >= b) return i;
                        var N = c - ds(d);
                        if (N < 1) return d;
                        var x = I ? zn(I, 0, N).join("") : i.slice(0, N);
                        if (v === r) return x + d;
                        if (I && (N += x.length - N), rf(v)) {
                            if (i.slice(N).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = yu(v.source, ct(Vp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? N : ae)
                            }
                        } else if (i.indexOf(Ar(v), N) != N) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + d
                    }

                    function mN(i) {
                        return i = ct(i), i && $S.test(i) ? i.replace(Gp, VO) : i
                    }
                    var vN = _s(function(i, a, c) {
                            return i + (c ? " " : "") + a.toUpperCase()
                        }),
                        af = gm("toUpperCase");

                    function hv(i, a, c) {
                        return i = ct(i), a = c ? r : a, a === r ? BO(i) ? qO(i) : RO(i) : i.match(a) || []
                    }
                    var pv = Ke(function(i, a) {
                            try {
                                return $r(i, r, a)
                            } catch (c) {
                                return tf(c) ? c : new Ue(c)
                            }
                        }),
                        yN = An(function(i, a) {
                            return Br(a, function(c) {
                                c = mn(c), $n(i, c, Qu(i[c], i))
                            }), i
                        });

                    function _N(i) {
                        var a = i == null ? 0 : i.length,
                            c = Re();
                        return i = a ? Ot(i, function(d) {
                            if (typeof d[1] != "function") throw new jr(l);
                            return [c(d[0]), d[1]]
                        }) : [], Ke(function(d) {
                            for (var v = -1; ++v < a;) {
                                var b = i[v];
                                if ($r(b[0], this, d)) return $r(b[1], this, d)
                            }
                        })
                    }

                    function bN(i) {
                        return Vw(Wr(i, y))
                    }

                    function of(i) {
                        return function() {
                            return i
                        }
                    }

                    function EN(i, a) {
                        return i == null || i !== i ? a : i
                    }
                    var TN = vm(),
                        SN = vm(!0);

                    function br(i) {
                        return i
                    }

                    function lf(i) {
                        return Yg(typeof i == "function" ? i : Wr(i, y))
                    }

                    function ON(i) {
                        return zg(Wr(i, y))
                    }

                    function wN(i, a) {
                        return Xg(i, Wr(a, y))
                    }
                    var CN = Ke(function(i, a) {
                            return function(c) {
                                return Ea(c, i, a)
                            }
                        }),
                        $N = Ke(function(i, a) {
                            return function(c) {
                                return Ea(i, c, a)
                            }
                        });

                    function cf(i, a, c) {
                        var d = Vt(a),
                            v = Vo(a, d);
                        c == null && !(Ct(a) && (v.length || !d.length)) && (c = a, a = i, i = this, v = Vo(a, Vt(a)));
                        var b = !(Ct(c) && "chain" in c) || !!c.chain,
                            I = Rn(i);
                        return Br(v, function(N) {
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

                    function IN() {
                        return Xt._ === this && (Xt._ = ew), this
                    }

                    function uf() {}

                    function AN(i) {
                        return i = We(i), Ke(function(a) {
                            return Jg(a, i)
                        })
                    }
                    var NN = Bu(Ot),
                        RN = Bu(yg),
                        LN = Bu(fu);

                    function gv(i) {
                        return Yu(i) ? du(mn(i)) : lC(i)
                    }

                    function PN(i) {
                        return function(a) {
                            return i == null ? r : Ni(i, a)
                        }
                    }
                    var kN = _m(),
                        xN = _m(!0);

                    function ff() {
                        return []
                    }

                    function df() {
                        return !1
                    }

                    function DN() {
                        return {}
                    }

                    function MN() {
                        return ""
                    }

                    function FN() {
                        return !0
                    }

                    function UN(i, a) {
                        if (i = We(i), i < 1 || i > ve) return [];
                        var c = Ge,
                            d = ir(i, Ge);
                        a = Re(a), i -= Ge;
                        for (var v = gu(d, a); ++c < i;) a(c);
                        return v
                    }

                    function BN(i) {
                        return je(i) ? Ot(i, mn) : Nr(i) ? [i] : vr(xm(ct(i)))
                    }

                    function jN(i) {
                        var a = ++ZO;
                        return ct(i) + a
                    }
                    var GN = Jo(function(i, a) {
                            return i + a
                        }, 0),
                        WN = ju("ceil"),
                        HN = Jo(function(i, a) {
                            return i / a
                        }, 1),
                        VN = ju("floor");

                    function KN(i) {
                        return i && i.length ? Ho(i, br, Cu) : r
                    }

                    function YN(i, a) {
                        return i && i.length ? Ho(i, Re(a, 2), Cu) : r
                    }

                    function qN(i) {
                        return Eg(i, br)
                    }

                    function zN(i, a) {
                        return Eg(i, Re(a, 2))
                    }

                    function XN(i) {
                        return i && i.length ? Ho(i, br, Nu) : r
                    }

                    function JN(i, a) {
                        return i && i.length ? Ho(i, Re(a, 2), Nu) : r
                    }
                    var ZN = Jo(function(i, a) {
                            return i * a
                        }, 1),
                        QN = ju("round"),
                        eR = Jo(function(i, a) {
                            return i - a
                        }, 0);

                    function tR(i) {
                        return i && i.length ? pu(i, br) : 0
                    }

                    function rR(i, a) {
                        return i && i.length ? pu(i, Re(a, 2)) : 0
                    }
                    return _.after = OI, _.ary = Km, _.assign = fA, _.assignIn = av, _.assignInWith = ul, _.assignWith = dA, _.at = hA, _.before = Ym, _.bind = Qu, _.bindAll = yN, _.bindKey = qm, _.castArray = DI, _.chain = Wm, _.chunk = VC, _.compact = KC, _.concat = YC, _.cond = _N, _.conforms = bN, _.constant = of, _.countBy = tI, _.create = pA, _.curry = zm, _.curryRight = Xm, _.debounce = Jm, _.defaults = gA, _.defaultsDeep = mA, _.defer = wI, _.delay = CI, _.difference = qC, _.differenceBy = zC, _.differenceWith = XC, _.drop = JC, _.dropRight = ZC, _.dropRightWhile = QC, _.dropWhile = e$, _.fill = t$, _.filter = nI, _.flatMap = aI, _.flatMapDeep = oI, _.flatMapDepth = lI, _.flatten = Um, _.flattenDeep = r$, _.flattenDepth = n$, _.flip = $I, _.flow = TN, _.flowRight = SN, _.fromPairs = i$, _.functions = SA, _.functionsIn = OA, _.groupBy = cI, _.initial = a$, _.intersection = o$, _.intersectionBy = l$, _.intersectionWith = c$, _.invert = CA, _.invertBy = $A, _.invokeMap = fI, _.iteratee = lf, _.keyBy = dI, _.keys = Vt, _.keysIn = _r, _.map = il, _.mapKeys = AA, _.mapValues = NA, _.matches = ON, _.matchesProperty = wN, _.memoize = al, _.merge = RA, _.mergeWith = ov, _.method = CN, _.methodOf = $N, _.mixin = cf, _.negate = ol, _.nthArg = AN, _.omit = LA, _.omitBy = PA, _.once = II, _.orderBy = hI, _.over = NN, _.overArgs = AI, _.overEvery = RN, _.overSome = LN, _.partial = ef, _.partialRight = Zm, _.partition = pI, _.pick = kA, _.pickBy = lv, _.property = gv, _.propertyOf = PN, _.pull = h$, _.pullAll = jm, _.pullAllBy = p$, _.pullAllWith = g$, _.pullAt = m$, _.range = kN, _.rangeRight = xN, _.rearg = NI, _.reject = vI, _.remove = v$, _.rest = RI, _.reverse = Ju, _.sampleSize = _I, _.set = DA, _.setWith = MA, _.shuffle = bI, _.slice = y$, _.sortBy = SI, _.sortedUniq = w$, _.sortedUniqBy = C$, _.split = aN, _.spread = LI, _.tail = $$, _.take = I$, _.takeRight = A$, _.takeRightWhile = N$, _.takeWhile = R$, _.tap = K$, _.throttle = PI, _.thru = nl, _.toArray = nv, _.toPairs = cv, _.toPairsIn = uv, _.toPath = BN, _.toPlainObject = sv, _.transform = FA, _.unary = kI, _.union = L$, _.unionBy = P$, _.unionWith = k$, _.uniq = x$, _.uniqBy = D$, _.uniqWith = M$, _.unset = UA, _.unzip = Zu, _.unzipWith = Gm, _.update = BA, _.updateWith = jA, _.values = Ts, _.valuesIn = GA, _.without = F$, _.words = hv, _.wrap = xI, _.xor = U$, _.xorBy = B$, _.xorWith = j$, _.zip = G$, _.zipObject = W$, _.zipObjectDeep = H$, _.zipWith = V$, _.entries = cv, _.entriesIn = uv, _.extend = av, _.extendWith = ul, cf(_, _), _.add = GN, _.attempt = pv, _.camelCase = KA, _.capitalize = fv, _.ceil = WN, _.clamp = WA, _.clone = MI, _.cloneDeep = UI, _.cloneDeepWith = BI, _.cloneWith = FI, _.conformsTo = jI, _.deburr = dv, _.defaultTo = EN, _.divide = HN, _.endsWith = YA, _.eq = rn, _.escape = qA, _.escapeRegExp = zA, _.every = rI, _.find = iI, _.findIndex = Mm, _.findKey = vA, _.findLast = sI, _.findLastIndex = Fm, _.findLastKey = yA, _.floor = VN, _.forEach = Hm, _.forEachRight = Vm, _.forIn = _A, _.forInRight = bA, _.forOwn = EA, _.forOwnRight = TA, _.get = nf, _.gt = GI, _.gte = WI, _.has = wA, _.hasIn = sf, _.head = Bm, _.identity = br, _.includes = uI, _.indexOf = s$, _.inRange = HA, _.invoke = IA, _.isArguments = Pi, _.isArray = je, _.isArrayBuffer = HI, _.isArrayLike = yr, _.isArrayLikeObject = Rt, _.isBoolean = VI, _.isBuffer = Xn, _.isDate = KI, _.isElement = YI, _.isEmpty = qI, _.isEqual = zI, _.isEqualWith = XI, _.isError = tf, _.isFinite = JI, _.isFunction = Rn, _.isInteger = Qm, _.isLength = ll, _.isMap = ev, _.isMatch = ZI, _.isMatchWith = QI, _.isNaN = eA, _.isNative = tA, _.isNil = nA, _.isNull = rA, _.isNumber = tv, _.isObject = Ct, _.isObjectLike = It, _.isPlainObject = $a, _.isRegExp = rf, _.isSafeInteger = iA, _.isSet = rv, _.isString = cl, _.isSymbol = Nr, _.isTypedArray = Es, _.isUndefined = sA, _.isWeakMap = aA, _.isWeakSet = oA, _.join = u$, _.kebabCase = XA, _.last = Vr, _.lastIndexOf = f$, _.lowerCase = JA, _.lowerFirst = ZA, _.lt = lA, _.lte = cA, _.max = KN, _.maxBy = YN, _.mean = qN, _.meanBy = zN, _.min = XN, _.minBy = JN, _.stubArray = ff, _.stubFalse = df, _.stubObject = DN, _.stubString = MN, _.stubTrue = FN, _.multiply = ZN, _.nth = d$, _.noConflict = IN, _.noop = uf, _.now = sl, _.pad = QA, _.padEnd = eN, _.padStart = tN, _.parseInt = rN, _.random = VA, _.reduce = gI, _.reduceRight = mI, _.repeat = nN, _.replace = iN, _.result = xA, _.round = QN, _.runInContext = k, _.sample = yI, _.size = EI, _.snakeCase = sN, _.some = TI, _.sortedIndex = _$, _.sortedIndexBy = b$, _.sortedIndexOf = E$, _.sortedLastIndex = T$, _.sortedLastIndexBy = S$, _.sortedLastIndexOf = O$, _.startCase = oN, _.startsWith = lN, _.subtract = eR, _.sum = tR, _.sumBy = rR, _.template = cN, _.times = UN, _.toFinite = Ln, _.toInteger = We, _.toLength = iv, _.toLower = uN, _.toNumber = Kr, _.toSafeInteger = uA, _.toString = ct, _.toUpper = fN, _.trim = dN, _.trimEnd = hN, _.trimStart = pN, _.truncate = gN, _.unescape = mN, _.uniqueId = jN, _.upperCase = vN, _.upperFirst = af, _.each = Hm, _.eachRight = Vm, _.first = Bm, cf(_, function() {
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
                            c = c === r ? 1 : Ut(We(c), 0);
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
                                iteratee: Re(v, 3),
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
                        return this.filter(br)
                    }, qe.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, qe.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, qe.prototype.invokeMap = Ke(function(i, a) {
                        return typeof i == "function" ? new qe(this) : this.map(function(c) {
                            return Ea(c, i, a)
                        })
                    }), qe.prototype.reject = function(i) {
                        return this.filter(ol(Re(i)))
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
                                N = d ? [1] : arguments,
                                x = I instanceof qe,
                                ee = N[0],
                                te = x || je(I),
                                ae = function(Ye) {
                                    var ze = v.apply(_, Wn([Ye], N));
                                    return d && me ? ze[0] : ze
                                };
                            te && c && typeof ee == "function" && ee.length != 1 && (x = te = !1);
                            var me = this.__chain__,
                                Oe = !!this.__actions__.length,
                                Le = b && !me,
                                Ve = x && !Oe;
                            if (!b && te) {
                                I = Ve ? I : new qe(this);
                                var Pe = i.apply(I, N);
                                return Pe.__actions__.push({
                                    func: nl,
                                    args: [ae],
                                    thisArg: r
                                }), new Gr(Pe, me)
                            }
                            return Le && Ve ? i.apply(this, N) : (Pe = this.thru(ae), Le ? d ? Pe.value()[0] : Pe.value() : Pe)
                        })
                    }), Br(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var a = Ao[i],
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
                            dt.call(ms, d) || (ms[d] = []), ms[d].push({
                                name: a,
                                func: c
                            })
                        }
                    }), ms[Xo(r, $).name] = [{
                        name: "wrapper",
                        func: r
                    }], qe.prototype.clone = mw, qe.prototype.reverse = vw, qe.prototype.value = yw, _.prototype.at = Y$, _.prototype.chain = q$, _.prototype.commit = z$, _.prototype.next = X$, _.prototype.plant = Z$, _.prototype.reverse = Q$, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = eI, _.prototype.first = _.prototype.head, pa && (_.prototype[pa] = J$), _
                },
                hs = zO();
            wi ? ((wi.exports = hs)._ = hs, ou._ = hs) : Xt._ = hs
        }).call(kt)
    })(Pd, Pd.exports);
    const HB = at({
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
                this.onResizeWithContext = Pd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new T5(e, t);
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
        VB = {
            class: "draw"
        },
        KB = {
            ref: "content",
            class: "content"
        },
        YB = {
            class: "constrain"
        },
        qB = {
            key: 0
        };

    function zB(e, t, r, n, s, o) {
        const l = At("bb");
        return Y(), X("div", VB, [Z("div", KB, [Z("div", YB, [e.player.prompt ? Ie((Y(), X("div", qB, null, 512)), [
            [l, e.player.prompt]
        ]) : we("", !0), Z("div", {
            ref: "stage",
            class: "stage",
            style: ac(e.stageDimensions)
        }, null, 4), Z("button", {
            onClick: t[0] || (t[0] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, yt(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const XB = tt(HB, [
            ["render", zB]
        ]),
        JB = at({
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
        ZB = ["textContent"],
        QB = ["textContent"],
        e6 = ["textContent"],
        t6 = ["textContent"];

    function r6(e, t, r, n, s, o) {
        const l = At("t");
        return Y(), X("div", {
            class: Me(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (Y(), X("p", {
            key: 0,
            class: Me(e.localClasses.message),
            textContent: yt(e.joinedCountText)
        }, null, 10, ZB)) : we("", !0), e.player.hasControls ? (Y(), X(Qe, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (Y(), X("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, yt(e.neededText), 3)) : we("", !0), e.player.status === "canStart" ? (Y(), X("button", {
            key: 1,
            class: Me(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onStartClick && e.onStartClick(...u)),
            textContent: yt(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, QB)) : we("", !0), e.player.status === "countdown" ? (Y(), X("button", {
            key: 2,
            class: Me(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onCancelClick && e.onCancelClick(...u)),
            textContent: yt(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, e6)) : we("", !0)], 64)) : e.player.gamepadStart ? (Y(), X(Qe, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (Y(), X("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, yt(e.neededText), 3)) : we("", !0), e.player.status === "canStart" ? Ie((Y(), X("p", {
            key: 1,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : we("", !0), e.player.status === "countdown" ? Ie((Y(), X("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : we("", !0)], 64)) : (Y(), X(Qe, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (Y(), X("p", {
            key: 0,
            class: Me(e.localClasses.status)
        }, yt(e.neededText), 3)) : we("", !0), e.player.status === "canStart" ? (Y(), X("p", {
            key: 1,
            class: Me(e.localClasses.status)
        }, yt(e.waitingForVIPText), 3)) : we("", !0), e.player.status === "countdown" ? Ie((Y(), X("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : we("", !0)], 64)), e.messageLocation === "bottom" ? (Y(), X("p", {
            key: 4,
            class: Me(e.localClasses.message),
            textContent: yt(e.joinedCountText)
        }, null, 10, t6)) : we("", !0)], 2)
    }
    const CT = tt(JB, [
            ["render", r6]
        ]),
        n6 = at({
            components: {
                LobbyActions: CT
            },
            props: {
                player: Object
            }
        }),
        i6 = {
            class: "lobby"
        },
        s6 = {
            class: "constrain"
        };

    function a6(e, t, r, n, s, o) {
        const l = Yt("LobbyActions");
        return Y(), X("div", i6, [Z("div", s6, [nt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const o6 = tt(n6, [
            ["render", a6]
        ]),
        l6 = at({
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

    function c6(e, t, r, n, s, o) {
        const l = At("t");
        return e.player && e.player.status ? (Y(), X("div", {
            key: 0,
            class: Me(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Ie((Y(), X("p", {
            key: 0,
            class: Me(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : we("", !0), e.player.hasControls ? (Y(), X(Qe, {
            key: 1
        }, [e.player.status === "waiting" ? Ie((Y(), X("button", {
            key: 0,
            class: Me(e.localClasses.action),
            onClick: t[0] || (t[0] = (...u) => e.onSamePlayersClick && e.onSamePlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : we("", !0), e.player.status === "waiting" ? Ie((Y(), X("button", {
            key: 1,
            class: Me(e.localClasses.action),
            onClick: t[1] || (t[1] = (...u) => e.onNewPlayersClick && e.onNewPlayersClick(...u))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : we("", !0), e.player.status === "countdown" ? Ie((Y(), X("button", {
            key: 2,
            class: Me(e.localClasses.action),
            onClick: t[2] || (t[2] = (...u) => e.onCancelClick && e.onCancelClick(...u))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : we("", !0)], 64)) : e.player.gamepadStart ? Ie((Y(), X("p", {
            key: 2,
            class: Me(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (Y(), X("p", {
            key: 3,
            class: Me(e.localClasses.status)
        }, yt(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Ie((Y(), X("p", {
            key: 4,
            class: Me(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : we("", !0)], 2)) : we("", !0)
    }
    const u6 = tt(l6, [
            ["render", c6]
        ]),
        f6 = at({
            components: {
                PostGameActions: u6
            },
            props: {
                player: Object
            }
        }),
        d6 = {
            class: "post-game"
        },
        h6 = {
            class: "constrain"
        };

    function p6(e, t, r, n, s, o) {
        const l = Yt("PostGameActions");
        return Y(), X("div", d6, [Z("div", h6, [nt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const g6 = tt(f6, [
            ["render", p6]
        ]),
        m6 = at({
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
        v6 = {
            class: "single-text-entry"
        },
        y6 = {
            class: "constrain"
        },
        _6 = {
            key: 0
        },
        b6 = {
            key: 1,
            for: "input"
        },
        E6 = ["value", "rows", "placeholder", "disabled"],
        T6 = ["value", "placeholder", "disabled"];

    function S6(e, t, r, n, s, o) {
        const l = At("bb");
        return Y(), X("div", v6, [Z("div", y6, [e.player.prompt ? Ie((Y(), X("p", _6, null, 512)), [
            [l, e.player.prompt]
        ]) : we("", !0), e.player.label ? Ie((Y(), X("label", b6, null, 512)), [
            [l, e.player.label]
        ]) : we("", !0), e.player.isMultiline ? (Y(), X("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, E6)) : (Y(), X("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...u) => e.onValueInput && e.onValueInput(...u))
        }, null, 40, T6)), Ie(Z("button", {
            onClick: t[2] || (t[2] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const O6 = tt(m6, [
            ["render", S6]
        ]),
        w6 = at({
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
        C6 = {
            class: "multi-text-entry"
        },
        $6 = {
            class: "constrain"
        },
        I6 = {
            key: 0
        },
        A6 = ["for"],
        N6 = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        R6 = ["id", "value", "placeholder", "disabled", "onInput"];

    function L6(e, t, r, n, s, o) {
        const l = At("bb");
        return Y(), X("div", C6, [Z("div", $6, [e.player.prompt ? Ie((Y(), X("p", I6, null, 512)), [
            [l, e.player.prompt]
        ]) : we("", !0), (Y(!0), X(Qe, null, un(e.player.inputs, (u, f) => (Y(), X(Qe, null, [u.label ? Ie((Y(), X("label", {
            key: `label-${u.key}`,
            for: `input-${f}`
        }, null, 8, A6)), [
            [l, u.label]
        ]) : we("", !0), u.isMultiline ? (Y(), X("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: u.lines || 2,
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, N6)) : (Y(), X("input", {
            id: `input-${f}`,
            key: `input-${u.key}`,
            type: "text",
            value: e.values[f],
            placeholder: u.placeholder,
            disabled: u.isDisabled,
            onInput: h => e.onValueInput(h, f)
        }, null, 40, R6))], 64))), 256)), Ie(Z("button", {
            onClick: t[0] || (t[0] = Zr((...u) => e.onSubmitClick && e.onSubmitClick(...u), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const P6 = tt(w6, [
            ["render", L6]
        ]),
        k6 = at({
            props: {
                player: Object
            }
        }),
        x6 = {
            class: "waiting"
        },
        D6 = {
            class: "constrain"
        },
        M6 = {
            key: 0
        };

    function F6(e, t, r, n, s, o) {
        const l = At("bb");
        return Y(), X("div", x6, [Z("div", D6, [e.player.message ? Ie((Y(), X("p", M6, null, 512)), [
            [l, e.player.message]
        ]) : we("", !0)])])
    }
    const U6 = tt(k6, [
            ["render", F6]
        ]),
        B6 = at({
            components: {
                Choices: W2,
                Doodle: WB,
                Draw: XB,
                Lobby: o6,
                PostGame: g6,
                SingleTextEntry: O6,
                MultiTextEntry: P6,
                Waiting: U6
            },
            props: {
                applyStyling: {
                    type: Boolean,
                    default: !0
                },
                player: Object
            }
        });

    function j6(e, t, r, n, s, o) {
        return e.player ? (Y(), Or(_c(e.player.kind), {
            key: 0,
            player: e.player,
            class: Me({
                fallback: e.applyStyling
            })
        }, null, 8, ["player", "class"])) : we("", !0)
    }
    const G6 = tt(B6, [
        ["render", j6]
    ]);
    at({
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
                Yl.galleryClick(this.artifact.categoryId, "post_game"), io.setAsViewed(0)
            }
        }
    });
    const W6 = at({
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
        H6 = ["value"];

    function V6(e, t, r, n, s, o) {
        return Y(), X("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l))
        }, null, 40, H6)
    }
    const $T = tt(W6, [
        ["render", V6]
    ]);
    var Fi, _l, Va = typeof Map == "function" ? new Map : (Fi = [], _l = [], {
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
        IT = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        IT = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function K6(e) {
        var t = Va.get(e);
        t && t.destroy()
    }

    function Y6(e) {
        var t = Va.get(e);
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
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Va.has(n)) {
                    var s, o = null,
                        l = null,
                        u = null,
                        f = function() {
                            n.clientWidth !== l && E()
                        },
                        h = function(C) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", E, !1), n.removeEventListener("keyup", E, !1), n.removeEventListener("autosize:destroy", h, !1), n.removeEventListener("autosize:update", E, !1), Object.keys(C).forEach(function(P) {
                                n.style[P] = C[P]
                            }), Va.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", h, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", E, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", E, !1), n.addEventListener("autosize:update", E, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Va.set(n, {
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
                        var B = IT("autosize:resized");
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
        bl = function(e) {
            return e && e.Math == Math && e
        },
        Mr = bl(typeof globalThis == "object" && globalThis) || bl(typeof window == "object" && window) || bl(typeof self == "object" && self) || bl(typeof kt == "object" && kt) || function() {
            return this
        }() || Function("return this")(),
        ap = {},
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
        op = !J6(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        Z6 = op,
        El = Function.prototype.call,
        bi = Z6 ? El.bind(El) : function() {
            return El.apply(El, arguments)
        },
        AT = {},
        NT = {}.propertyIsEnumerable,
        RT = Object.getOwnPropertyDescriptor,
        Q6 = RT && !NT.call({
            1: 2
        }, 1);
    AT.f = Q6 ? function(t) {
        var r = RT(this, t);
        return !!r && r.enumerable
    } : NT;
    var LT = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        PT = op,
        kT = Function.prototype,
        e7 = kT.bind,
        kd = kT.call,
        t7 = PT && e7.bind(kd, kd),
        ur = PT ? function(e) {
            return e && t7(e)
        } : function(e) {
            return e && function() {
                return kd.apply(e, arguments)
            }
        },
        xT = ur,
        r7 = xT({}.toString),
        n7 = xT("".slice),
        xc = function(e) {
            return n7(r7(e), 8, -1)
        },
        i7 = ur,
        s7 = Fr,
        a7 = xc,
        Rf = Object,
        o7 = i7("".split),
        l7 = s7(function() {
            return !Rf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return a7(e) == "String" ? o7(e, "") : Rf(e)
        } : Rf,
        c7 = TypeError,
        go = function(e) {
            if (e == null) throw c7("Can't call method on " + e);
            return e
        },
        u7 = l7,
        f7 = go,
        Dc = function(e) {
            return u7(f7(e))
        },
        wr = function(e) {
            return typeof e == "function"
        },
        d7 = wr,
        ca = function(e) {
            return typeof e == "object" ? e !== null : d7(e)
        },
        Lf = Mr,
        h7 = wr,
        p7 = function(e) {
            return h7(e) ? e : void 0
        },
        Mc = function(e, t) {
            return arguments.length < 2 ? p7(Lf[e]) : Lf[e] && Lf[e][t]
        },
        g7 = ur,
        DT = g7({}.isPrototypeOf),
        m7 = Mc,
        v7 = m7("navigator", "userAgent") || "",
        MT = Mr,
        Pf = v7,
        Wy = MT.process,
        Hy = MT.Deno,
        Vy = Wy && Wy.versions || Hy && Hy.version,
        Ky = Vy && Vy.v8,
        sn, Ql;
    Ky && (sn = Ky.split("."), Ql = sn[0] > 0 && sn[0] < 4 ? 1 : +(sn[0] + sn[1]));
    !Ql && Pf && (sn = Pf.match(/Edge\/(\d+)/), (!sn || sn[1] >= 74) && (sn = Pf.match(/Chrome\/(\d+)/), sn && (Ql = +sn[1])));
    var y7 = Ql,
        Yy = y7,
        _7 = Fr,
        FT = !!Object.getOwnPropertySymbols && !_7(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Yy && Yy < 41
        }),
        b7 = FT,
        UT = b7 && !Symbol.sham && typeof Symbol.iterator == "symbol",
        E7 = Mc,
        T7 = wr,
        S7 = DT,
        O7 = UT,
        w7 = Object,
        BT = O7 ? function(e) {
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
        I7 = wr,
        A7 = $7,
        N7 = TypeError,
        R7 = function(e) {
            if (I7(e)) return e;
            throw N7(A7(e) + " is not a function")
        },
        L7 = R7,
        lp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : L7(r)
        },
        kf = bi,
        xf = wr,
        Df = ca,
        P7 = TypeError,
        k7 = function(e, t) {
            var r, n;
            if (t === "string" && xf(r = e.toString) && !Df(n = kf(r, e)) || xf(r = e.valueOf) && !Df(n = kf(r, e)) || t !== "string" && xf(r = e.toString) && !Df(n = kf(r, e))) return n;
            throw P7("Can't convert object to primitive value")
        },
        Fc = {
            exports: {}
        },
        qy = Mr,
        x7 = Object.defineProperty,
        cp = function(e, t) {
            try {
                x7(qy, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                qy[e] = t
            }
            return t
        },
        D7 = Mr,
        M7 = cp,
        zy = "__core-js_shared__",
        F7 = D7[zy] || M7(zy, {}),
        up = F7,
        Xy = up;
    (Fc.exports = function(e, t) {
        return Xy[e] || (Xy[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var U7 = go,
        B7 = Object,
        jT = function(e) {
            return B7(U7(e))
        },
        j7 = ur,
        G7 = jT,
        W7 = j7({}.hasOwnProperty),
        Ei = Object.hasOwn || function(t, r) {
            return W7(G7(t), r)
        },
        H7 = ur,
        V7 = 0,
        K7 = Math.random(),
        Y7 = H7(1 .toString),
        GT = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Y7(++V7 + K7, 36)
        },
        q7 = Mr,
        z7 = Fc.exports,
        Jy = Ei,
        X7 = GT,
        Zy = FT,
        WT = UT,
        Os = z7("wks"),
        ts = q7.Symbol,
        Qy = ts && ts.for,
        J7 = WT ? ts : ts && ts.withoutSetter || X7,
        os = function(e) {
            if (!Jy(Os, e) || !(Zy || typeof Os[e] == "string")) {
                var t = "Symbol." + e;
                Zy && Jy(ts, e) ? Os[e] = ts[e] : WT && Qy ? Os[e] = Qy(t) : Os[e] = J7(t)
            }
            return Os[e]
        },
        Z7 = bi,
        e_ = ca,
        t_ = BT,
        Q7 = lp,
        ej = k7,
        tj = os,
        rj = TypeError,
        nj = tj("toPrimitive"),
        ij = function(e, t) {
            if (!e_(e) || t_(e)) return e;
            var r = Q7(e, nj),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = Z7(r, e, t), !e_(n) || t_(n)) return n;
                throw rj("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), ej(e, t)
        },
        sj = ij,
        aj = BT,
        HT = function(e) {
            var t = sj(e, "string");
            return aj(t) ? t : t + ""
        },
        oj = Mr,
        r_ = ca,
        xd = oj.document,
        lj = r_(xd) && r_(xd.createElement),
        VT = function(e) {
            return lj ? xd.createElement(e) : {}
        },
        cj = _i,
        uj = Fr,
        fj = VT,
        KT = !cj && !uj(function() {
            return Object.defineProperty(fj("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        dj = _i,
        hj = bi,
        pj = AT,
        gj = LT,
        mj = Dc,
        vj = HT,
        yj = Ei,
        _j = KT,
        n_ = Object.getOwnPropertyDescriptor;
    ap.f = dj ? n_ : function(t, r) {
        if (t = mj(t), r = vj(r), _j) try {
            return n_(t, r)
        } catch {}
        if (yj(t, r)) return gj(!hj(pj.f, t, r), t[r])
    };
    var mo = {},
        bj = _i,
        Ej = Fr,
        YT = bj && Ej(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        Tj = ca,
        Sj = String,
        Oj = TypeError,
        ls = function(e) {
            if (Tj(e)) return e;
            throw Oj(Sj(e) + " is not an object")
        },
        wj = _i,
        Cj = KT,
        $j = YT,
        Tl = ls,
        i_ = HT,
        Ij = TypeError,
        Mf = Object.defineProperty,
        Aj = Object.getOwnPropertyDescriptor,
        Ff = "enumerable",
        Uf = "configurable",
        Bf = "writable";
    mo.f = wj ? $j ? function(t, r, n) {
        if (Tl(t), r = i_(r), Tl(n), typeof t == "function" && r === "prototype" && "value" in n && Bf in n && !n[Bf]) {
            var s = Aj(t, r);
            s && s[Bf] && (t[r] = n.value, n = {
                configurable: Uf in n ? n[Uf] : s[Uf],
                enumerable: Ff in n ? n[Ff] : s[Ff],
                writable: !1
            })
        }
        return Mf(t, r, n)
    } : Mf : function(t, r, n) {
        if (Tl(t), r = i_(r), Tl(n), Cj) try {
            return Mf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw Ij("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var Nj = _i,
        Rj = mo,
        Lj = LT,
        fp = Nj ? function(e, t, r) {
            return Rj.f(e, t, Lj(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        qT = {
            exports: {}
        },
        Dd = _i,
        Pj = Ei,
        zT = Function.prototype,
        kj = Dd && Object.getOwnPropertyDescriptor,
        dp = Pj(zT, "name"),
        xj = dp && function() {}.name === "something",
        Dj = dp && (!Dd || Dd && kj(zT, "name").configurable),
        Mj = {
            EXISTS: dp,
            PROPER: xj,
            CONFIGURABLE: Dj
        },
        Fj = ur,
        Uj = wr,
        Md = up,
        Bj = Fj(Function.toString);
    Uj(Md.inspectSource) || (Md.inspectSource = function(e) {
        return Bj(e)
    });
    var XT = Md.inspectSource,
        jj = Mr,
        Gj = wr,
        Wj = XT,
        s_ = jj.WeakMap,
        Hj = Gj(s_) && /native code/.test(Wj(s_)),
        Vj = Fc.exports,
        Kj = GT,
        a_ = Vj("keys"),
        JT = function(e) {
            return a_[e] || (a_[e] = Kj(e))
        },
        hp = {},
        Yj = Hj,
        ZT = Mr,
        jf = ur,
        qj = ca,
        zj = fp,
        Gf = Ei,
        Wf = up,
        Xj = JT,
        Jj = hp,
        o_ = "Object already initialized",
        Fd = ZT.TypeError,
        Zj = ZT.WeakMap,
        ec, so, tc, Qj = function(e) {
            return tc(e) ? so(e) : ec(e, {})
        },
        eG = function(e) {
            return function(t) {
                var r;
                if (!qj(t) || (r = so(t)).type !== e) throw Fd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (Yj || Wf.state) {
        var Ui = Wf.state || (Wf.state = new Zj),
            tG = jf(Ui.get),
            l_ = jf(Ui.has),
            rG = jf(Ui.set);
        ec = function(e, t) {
            if (l_(Ui, e)) throw new Fd(o_);
            return t.facade = e, rG(Ui, e, t), t
        }, so = function(e) {
            return tG(Ui, e) || {}
        }, tc = function(e) {
            return l_(Ui, e)
        }
    } else {
        var ws = Xj("state");
        Jj[ws] = !0, ec = function(e, t) {
            if (Gf(e, ws)) throw new Fd(o_);
            return t.facade = e, zj(e, ws, t), t
        }, so = function(e) {
            return Gf(e, ws) ? e[ws] : {}
        }, tc = function(e) {
            return Gf(e, ws)
        }
    }
    var QT = {
            set: ec,
            get: so,
            has: tc,
            enforce: Qj,
            getterFor: eG
        },
        nG = Fr,
        iG = wr,
        Sl = Ei,
        Ud = _i,
        sG = Mj.CONFIGURABLE,
        aG = XT,
        e0 = QT,
        oG = e0.enforce,
        lG = e0.get,
        xl = Object.defineProperty,
        cG = Ud && !nG(function() {
            return xl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        uG = String(String).split("String"),
        fG = qT.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Sl(e, "name") || sG && e.name !== t) && (Ud ? xl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), cG && r && Sl(r, "arity") && e.length !== r.arity && xl(e, "length", {
                value: r.arity
            });
            try {
                r && Sl(r, "constructor") && r.constructor ? Ud && xl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = oG(e);
            return Sl(n, "source") || (n.source = uG.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = fG(function() {
        return iG(this) && lG(this).source || aG(this)
    }, "toString");
    var dG = wr,
        hG = mo,
        pG = qT.exports,
        gG = cp,
        t0 = function(e, t, r, n) {
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
        r0 = {},
        mG = Math.ceil,
        vG = Math.floor,
        yG = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? vG : mG)(r)
        },
        _G = yG,
        Uc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : _G(t)
        },
        bG = Uc,
        EG = Math.max,
        TG = Math.min,
        SG = function(e, t) {
            var r = bG(e);
            return r < 0 ? EG(r + t, 0) : TG(r, t)
        },
        OG = Uc,
        wG = Math.min,
        n0 = function(e) {
            return e > 0 ? wG(OG(e), 9007199254740991) : 0
        },
        CG = n0,
        $G = function(e) {
            return CG(e.length)
        },
        IG = Dc,
        AG = SG,
        NG = $G,
        c_ = function(e) {
            return function(t, r, n) {
                var s = IG(t),
                    o = NG(s),
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
        RG = {
            includes: c_(!0),
            indexOf: c_(!1)
        },
        LG = ur,
        Hf = Ei,
        PG = Dc,
        kG = RG.indexOf,
        xG = hp,
        u_ = LG([].push),
        i0 = function(e, t) {
            var r = PG(e),
                n = 0,
                s = [],
                o;
            for (o in r) !Hf(xG, o) && Hf(r, o) && u_(s, o);
            for (; t.length > n;) Hf(r, o = t[n++]) && (~kG(s, o) || u_(s, o));
            return s
        },
        pp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        DG = i0,
        MG = pp,
        FG = MG.concat("length", "prototype");
    r0.f = Object.getOwnPropertyNames || function(t) {
        return DG(t, FG)
    };
    var s0 = {};
    s0.f = Object.getOwnPropertySymbols;
    var UG = Mc,
        BG = ur,
        jG = r0,
        GG = s0,
        WG = ls,
        HG = BG([].concat),
        VG = UG("Reflect", "ownKeys") || function(t) {
            var r = jG.f(WG(t)),
                n = GG.f;
            return n ? HG(r, n(t)) : r
        },
        f_ = Ei,
        KG = VG,
        YG = ap,
        qG = mo,
        zG = function(e, t, r) {
            for (var n = KG(t), s = qG.f, o = YG.f, l = 0; l < n.length; l++) {
                var u = n[l];
                !f_(e, u) && !(r && f_(r, u)) && s(e, u, o(t, u))
            }
        },
        XG = Fr,
        JG = wr,
        ZG = /#|\.prototype\./,
        vo = function(e, t) {
            var r = e9[QG(e)];
            return r == r9 ? !0 : r == t9 ? !1 : JG(t) ? XG(t) : !!t
        },
        QG = vo.normalize = function(e) {
            return String(e).replace(ZG, ".").toLowerCase()
        },
        e9 = vo.data = {},
        t9 = vo.NATIVE = "N",
        r9 = vo.POLYFILL = "P",
        n9 = vo,
        Vf = Mr,
        i9 = ap.f,
        s9 = fp,
        a9 = t0,
        o9 = cp,
        l9 = zG,
        c9 = n9,
        a0 = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                o, l, u, f, h, g;
            if (n ? l = Vf : s ? l = Vf[r] || o9(r, {}) : l = (Vf[r] || {}).prototype, l)
                for (u in t) {
                    if (h = t[u], e.dontCallGetSet ? (g = i9(l, u), f = g && g.value) : f = l[u], o = c9(n ? u : r + (s ? "." : "#") + u, e.forced), !o && f !== void 0) {
                        if (typeof h == typeof f) continue;
                        l9(h, f)
                    }(e.sham || f && f.sham) && s9(h, "sham", !0), a9(l, u, h, e)
                }
        },
        u9 = ca,
        f9 = xc,
        d9 = os,
        h9 = d9("match"),
        p9 = function(e) {
            var t;
            return u9(e) && ((t = e[h9]) !== void 0 ? !!t : f9(e) == "RegExp")
        },
        g9 = os,
        m9 = g9("toStringTag"),
        o0 = {};
    o0[m9] = "z";
    var v9 = String(o0) === "[object z]",
        y9 = v9,
        _9 = wr,
        Dl = xc,
        b9 = os,
        E9 = b9("toStringTag"),
        T9 = Object,
        S9 = Dl(function() {
            return arguments
        }()) == "Arguments",
        O9 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        w9 = y9 ? Dl : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = O9(t = T9(e), E9)) == "string" ? r : S9 ? Dl(t) : (n = Dl(t)) == "Object" && _9(t.callee) ? "Arguments" : n
        },
        C9 = w9,
        $9 = String,
        Bc = function(e) {
            if (C9(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return $9(e)
        },
        I9 = ls,
        l0 = function() {
            var e = I9(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        A9 = bi,
        N9 = Ei,
        R9 = DT,
        L9 = l0,
        d_ = RegExp.prototype,
        P9 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in d_) && !N9(e, "flags") && R9(d_, e) ? A9(L9, e) : t
        },
        gp = ur,
        k9 = jT,
        x9 = Math.floor,
        Kf = gp("".charAt),
        D9 = gp("".replace),
        Yf = gp("".slice),
        M9 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        F9 = /\$([$&'`]|\d{1,2})/g,
        c0 = function(e, t, r, n, s, o) {
            var l = r + e.length,
                u = n.length,
                f = F9;
            return s !== void 0 && (s = k9(s), f = M9), D9(o, f, function(h, g) {
                var y;
                switch (Kf(g, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Yf(t, 0, r);
                    case "'":
                        return Yf(t, l);
                    case "<":
                        y = s[Yf(g, 1, -1)];
                        break;
                    default:
                        var E = +g;
                        if (E === 0) return h;
                        if (E > u) {
                            var C = x9(E / 10);
                            return C === 0 ? h : C <= u ? n[C - 1] === void 0 ? Kf(g, 1) : n[C - 1] + Kf(g, 1) : h
                        }
                        y = n[E - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        U9 = a0,
        B9 = bi,
        mp = ur,
        h_ = go,
        j9 = wr,
        G9 = p9,
        Ra = Bc,
        W9 = lp,
        H9 = P9,
        V9 = c0,
        K9 = os,
        Y9 = K9("replace"),
        q9 = TypeError,
        u0 = mp("".indexOf);
    mp("".replace);
    var p_ = mp("".slice),
        z9 = Math.max,
        g_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : u0(e, t, r)
        };
    U9({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = h_(this),
                s, o, l, u, f, h, g, y, E, C = 0,
                P = 0,
                M = "";
            if (t != null) {
                if (s = G9(t), s && (o = Ra(h_(H9(t))), !~u0(o, "g"))) throw q9("`.replaceAll` does not allow non-global regexes");
                if (l = W9(t, Y9), l) return B9(l, t, n, r)
            }
            for (u = Ra(n), f = Ra(t), h = j9(r), h || (r = Ra(r)), g = f.length, y = z9(1, g), C = g_(u, f, 0); C !== -1;) E = h ? Ra(r(f, C, u)) : V9(f, u, C, [], void 0, r), M += p_(u, P, C) + E, P = C + g, C = g_(u, f, C + y);
            return P < u.length && (M += p_(u, P)), M
        }
    });
    var vp = Fr,
        X9 = Mr,
        yp = X9.RegExp,
        _p = vp(function() {
            var e = yp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        J9 = _p || vp(function() {
            return !yp("a", "y").sticky
        }),
        Z9 = _p || vp(function() {
            var e = yp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        Q9 = {
            BROKEN_CARET: Z9,
            MISSED_STICKY: J9,
            UNSUPPORTED_Y: _p
        },
        f0 = {},
        eW = i0,
        tW = pp,
        rW = Object.keys || function(t) {
            return eW(t, tW)
        },
        nW = _i,
        iW = YT,
        sW = mo,
        aW = ls,
        oW = Dc,
        lW = rW;
    f0.f = nW && !iW ? Object.defineProperties : function(t, r) {
        aW(t);
        for (var n = oW(r), s = lW(r), o = s.length, l = 0, u; o > l;) sW.f(t, u = s[l++], n[u]);
        return t
    };
    var cW = Mc,
        uW = cW("document", "documentElement"),
        fW = ls,
        dW = f0,
        m_ = pp,
        hW = hp,
        pW = uW,
        gW = VT,
        mW = JT,
        v_ = ">",
        y_ = "<",
        Bd = "prototype",
        jd = "script",
        d0 = mW("IE_PROTO"),
        qf = function() {},
        h0 = function(e) {
            return y_ + jd + v_ + e + y_ + "/" + jd + v_
        },
        __ = function(e) {
            e.write(h0("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        vW = function() {
            var e = gW("iframe"),
                t = "java" + jd + ":",
                r;
            return e.style.display = "none", pW.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(h0("document.F=Object")), r.close(), r.F
        },
        Ol, Ml = function() {
            try {
                Ol = new ActiveXObject("htmlfile")
            } catch {}
            Ml = typeof document < "u" ? document.domain && Ol ? __(Ol) : vW() : __(Ol);
            for (var e = m_.length; e--;) delete Ml[Bd][m_[e]];
            return Ml()
        };
    hW[d0] = !0;
    var yW = Object.create || function(t, r) {
            var n;
            return t !== null ? (qf[Bd] = fW(t), n = new qf, qf[Bd] = null, n[d0] = t) : n = Ml(), r === void 0 ? n : dW.f(n, r)
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
        jc = ur,
        $W = Bc,
        IW = l0,
        AW = Q9,
        NW = Fc.exports,
        RW = yW,
        LW = QT.get,
        PW = TW,
        kW = CW,
        xW = NW("native-string-replace", String.prototype.replace),
        rc = RegExp.prototype.exec,
        Gd = rc,
        DW = jc("".charAt),
        MW = jc("".indexOf),
        FW = jc("".replace),
        zf = jc("".slice),
        Wd = function() {
            var e = /a/,
                t = /b*/g;
            return Rs(rc, e, "a"), Rs(rc, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        p0 = AW.BROKEN_CARET,
        Hd = /()??/.exec("")[1] !== void 0,
        UW = Wd || Hd || p0 || PW || kW;
    UW && (Gd = function(t) {
        var r = this,
            n = LW(r),
            s = $W(t),
            o = n.raw,
            l, u, f, h, g, y, E;
        if (o) return o.lastIndex = r.lastIndex, l = Rs(Gd, o, s), r.lastIndex = o.lastIndex, l;
        var C = n.groups,
            P = p0 && r.sticky,
            M = Rs(IW, r),
            B = r.source,
            $ = 0,
            H = s;
        if (P && (M = FW(M, "y", ""), MW(M, "g") === -1 && (M += "g"), H = zf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && DW(s, r.lastIndex - 1) !== `
`) && (B = "(?: " + B + ")", H = " " + H, $++), u = new RegExp("^(?:" + B + ")", M)), Hd && (u = new RegExp("^" + B + "$(?!\\s)", M)), Wd && (f = r.lastIndex), h = Rs(rc, P ? u : r, H), P ? h ? (h.input = zf(h.input, $), h[0] = zf(h[0], $), h.index = r.lastIndex, r.lastIndex += h[0].length) : r.lastIndex = 0 : Wd && h && (r.lastIndex = r.global ? h.index + h[0].length : f), Hd && h && h.length > 1 && Rs(xW, h[0], u, function() {
                for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0)
            }), h && C)
            for (h.groups = y = RW(null), g = 0; g < C.length; g++) E = C[g], y[E[0]] = h[E[1]];
        return h
    });
    var bp = Gd,
        BW = a0,
        b_ = bp;
    BW({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== b_
    }, {
        exec: b_
    });
    var jW = op,
        g0 = Function.prototype,
        E_ = g0.apply,
        T_ = g0.call,
        GW = typeof Reflect == "object" && Reflect.apply || (jW ? T_.bind(E_) : function() {
            return T_.apply(E_, arguments)
        }),
        S_ = ur,
        O_ = t0,
        WW = bp,
        w_ = Fr,
        m0 = os,
        HW = fp,
        VW = m0("species"),
        Xf = RegExp.prototype,
        KW = function(e, t, r, n) {
            var s = m0(e),
                o = !w_(function() {
                    var h = {};
                    return h[s] = function() {
                        return 7
                    }, "" [e](h) != 7
                }),
                l = o && !w_(function() {
                    var h = !1,
                        g = /a/;
                    return e === "split" && (g = {}, g.constructor = {}, g.constructor[VW] = function() {
                        return g
                    }, g.flags = "", g[s] = /./ [s]), g.exec = function() {
                        return h = !0, null
                    }, g[s](""), !h
                });
            if (!o || !l || r) {
                var u = S_(/./ [s]),
                    f = t(s, "" [e], function(h, g, y, E, C) {
                        var P = S_(h),
                            M = g.exec;
                        return M === WW || M === Xf.exec ? o && !C ? {
                            done: !0,
                            value: u(g, y, E)
                        } : {
                            done: !0,
                            value: P(y, g, E)
                        } : {
                            done: !1
                        }
                    });
                O_(String.prototype, e, f[0]), O_(Xf, s, f[1])
            }
            n && HW(Xf[s], "sham", !0)
        },
        Ep = ur,
        YW = Uc,
        qW = Bc,
        zW = go,
        XW = Ep("".charAt),
        C_ = Ep("".charCodeAt),
        JW = Ep("".slice),
        $_ = function(e) {
            return function(t, r) {
                var n = qW(zW(t)),
                    s = YW(r),
                    o = n.length,
                    l, u;
                return s < 0 || s >= o ? e ? "" : void 0 : (l = C_(n, s), l < 55296 || l > 56319 || s + 1 === o || (u = C_(n, s + 1)) < 56320 || u > 57343 ? e ? XW(n, s) : l : e ? JW(n, s, s + 2) : (l - 55296 << 10) + (u - 56320) + 65536)
            }
        },
        ZW = {
            codeAt: $_(!1),
            charAt: $_(!0)
        },
        QW = ZW.charAt,
        eH = function(e, t, r) {
            return t + (r ? QW(e, t).length : 1)
        },
        I_ = bi,
        tH = ls,
        rH = wr,
        nH = xc,
        iH = bp,
        sH = TypeError,
        aH = function(e, t) {
            var r = e.exec;
            if (rH(r)) {
                var n = I_(r, e, t);
                return n !== null && tH(n), n
            }
            if (nH(e) === "RegExp") return I_(iH, e, t);
            throw sH("RegExp#exec called on incompatible receiver")
        },
        oH = GW,
        A_ = bi,
        Gc = ur,
        lH = KW,
        cH = Fr,
        uH = ls,
        fH = wr,
        dH = Uc,
        hH = n0,
        Cs = Bc,
        pH = go,
        gH = eH,
        mH = lp,
        vH = c0,
        yH = aH,
        _H = os,
        Vd = _H("replace"),
        bH = Math.max,
        EH = Math.min,
        TH = Gc([].concat),
        Jf = Gc([].push),
        N_ = Gc("".indexOf),
        R_ = Gc("".slice),
        SH = function(e) {
            return e === void 0 ? e : String(e)
        },
        OH = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        L_ = function() {
            return /./ [Vd] ? /./ [Vd]("a", "$0") === "" : !1
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
        var n = L_ ? "$" : "$0";
        return [function(o, l) {
            var u = pH(this),
                f = o == null ? void 0 : mH(o, Vd);
            return f ? A_(f, o, u, l) : A_(t, Cs(u), o, l)
        }, function(s, o) {
            var l = uH(this),
                u = Cs(s);
            if (typeof o == "string" && N_(o, n) === -1 && N_(o, "$<") === -1) {
                var f = r(t, l, u, o);
                if (f.done) return f.value
            }
            var h = fH(o);
            h || (o = Cs(o));
            var g = l.global;
            if (g) {
                var y = l.unicode;
                l.lastIndex = 0
            }
            for (var E = [];;) {
                var C = yH(l, u);
                if (C === null || (Jf(E, C), !g)) break;
                var P = Cs(C[0]);
                P === "" && (l.lastIndex = gH(u, hH(l.lastIndex), y))
            }
            for (var M = "", B = 0, $ = 0; $ < E.length; $++) {
                C = E[$];
                for (var H = Cs(C[0]), q = bH(EH(dH(C.index), u.length), 0), G = [], j = 1; j < C.length; j++) Jf(G, SH(C[j]));
                var J = C.groups;
                if (h) {
                    var oe = TH([H], G, q, u);
                    J !== void 0 && Jf(oe, J);
                    var le = Cs(oH(o, void 0, oe))
                } else le = vH(H, u, q, G, J, o);
                q >= B && (M += R_(u, B, q) + le, B = q + H.length)
            }
            return M + R_(u, B)
        }]
    }, !wH || !OH || L_);
    var CH = Mr,
        $H = ur,
        IH = function(e, t) {
            return $H(CH[e].prototype[t])
        },
        AH = IH,
        NH = AH("String", "replaceAll"),
        RH = NH,
        LH = RH,
        PH = LH,
        kH = PH,
        xH = kH,
        DH = xH;
    (function(e) {
        e.exports = DH
    })(z6);
    at({
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
    at({
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
            const e = is();
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
        Wc = {},
        v0 = {},
        Hc = {},
        Tp = {};
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
    })(Tp);
    Object.defineProperty(Hc, "__esModule", {
        value: !0
    });
    Hc.Tokenizer = void 0;
    var ei = Tp,
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
    Hc.Tokenizer = MH;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Hc,
            r = Tp,
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
    })(v0);
    var yo = {};
    Object.defineProperty(yo, "__esModule", {
        value: !0
    });
    yo.Tag = void 0;
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
    yo.Tag = FH;
    Object.defineProperty(Wc, "__esModule", {
        value: !0
    });
    Wc.BBCodeParser = void 0;
    var P_ = v0,
        k_ = yo,
        UH = function() {
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
                var o = P_.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === P_.ParseTree.Type.text) {
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
    Wc.BBCodeParser = UH;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Wc;
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
    var y0 = {
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
    })(y0);
    const jH = y0.exports,
        GH = at({
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
        jn = e => (wh("data-v-220ec4c0"), e = e(), Ch(), e),
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
        VH = jn(() => Z("p", null, "MARKERS", -1)),
        KH = ["onClick"],
        YH = hi("KILL"),
        qH = jn(() => Z("br", null, null, -1)),
        zH = hi("ROOM"),
        XH = [YH, qH, zH],
        JH = jn(() => Z("p", {
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
        eV = jn(() => Z("svg", {
            viewBox: "0 0 20 10"
        }, [Z("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        tV = jn(() => Z("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        rV = [eV, tV],
        nV = jn(() => Z("svg", {
            viewBox: "0 0 60 50"
        }, [Z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), Z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        iV = jn(() => Z("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        sV = [nV, iV],
        aV = jn(() => Z("svg", {
            viewBox: "0 0 60 50"
        }, [Z("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), Z("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        oV = jn(() => Z("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        lV = [aV, oV];

    function cV(e, t, r, n, s, o) {
        return e.replayer ? (Y(), X("div", WH, [e.showPowerNav ? (Y(), X("div", HH, [Z("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), VH, Z("ul", null, [(Y(!0), X(Qe, null, un(e.replayer.markerMap, (l, u) => (Y(), X("li", {
            key: u,
            class: Me({
                active: u === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(u)
        }, yt(l[1].marker), 11, KH))), 128))]), Z("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, XH), Z("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : we("", !0), JH, e.replayer.markerMap.length ? (Y(), X("p", QH, yt(e.replayer.currentMarkerItemIndex) + " : " + yt(e.replayer.currentMarkerItem[1].marker) + " (" + yt(e.replayer.currentEntityItemIndex) + ") ", 1)) : (Y(), X("p", ZH, "Item #" + yt(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? we("", !0) : (Y(), X("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, rV)), Z("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, sV), Z("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, lV)], 512)) : we("", !0)
    }
    const uV = tt(GH, [
        ["render", cV],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function fV(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var dV = fV,
        hV = s1,
        pV = hV(Object.keys, Object),
        gV = pV,
        mV = Uh,
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
        TV = h1,
        SV = EV,
        OV = Rc;

    function wV(e) {
        return OV(e) ? TV(e) : SV(e)
    }
    var Vc = wV,
        CV = uo,
        $V = Vc;

    function IV(e, t) {
        return e && CV(t, $V(t), e)
    }
    var AV = IV,
        NV = uo,
        RV = fo;

    function LV(e, t) {
        return e && NV(t, RV(t), e)
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
    var _0 = DV,
        MV = xV,
        FV = _0,
        UV = Object.prototype,
        BV = UV.propertyIsEnumerable,
        x_ = Object.getOwnPropertySymbols,
        jV = x_ ? function(e) {
            return e == null ? [] : (e = Object(e), MV(x_(e), function(t) {
                return BV.call(e, t)
            }))
        } : FV,
        Sp = jV,
        GV = uo,
        WV = Sp;

    function HV(e, t) {
        return GV(e, WV(e), t)
    }
    var VV = HV;

    function KV(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var b0 = KV,
        YV = b0,
        qV = Fh,
        zV = Sp,
        XV = _0,
        JV = Object.getOwnPropertySymbols,
        ZV = JV ? function(e) {
            for (var t = []; e;) YV(t, zV(e)), e = qV(e);
            return t
        } : XV,
        E0 = ZV,
        QV = uo,
        eK = E0;

    function tK(e, t) {
        return QV(e, eK(e), t)
    }
    var rK = tK,
        nK = b0,
        iK = vi;

    function sK(e, t, r) {
        var n = t(e);
        return iK(e) ? n : nK(n, r(e))
    }
    var T0 = sK,
        aK = T0,
        oK = Sp,
        lK = Vc;

    function cK(e) {
        return aK(e, lK, oK)
    }
    var uK = cK,
        fK = T0,
        dK = E0,
        hK = fo;

    function pK(e) {
        return fK(e, hK, dK)
    }
    var gK = pK,
        mK = as,
        vK = dn,
        yK = mK(vK, "DataView"),
        _K = yK,
        bK = as,
        EK = dn,
        TK = bK(EK, "Promise"),
        SK = TK,
        OK = as,
        wK = dn,
        CK = OK(wK, "Set"),
        $K = CK,
        IK = as,
        AK = dn,
        NK = IK(AK, "WeakMap"),
        RK = NK,
        Kd = _K,
        Yd = xh,
        qd = SK,
        zd = $K,
        Xd = RK,
        S0 = ia,
        ua = ZE,
        D_ = "[object Map]",
        LK = "[object Object]",
        M_ = "[object Promise]",
        F_ = "[object Set]",
        U_ = "[object WeakMap]",
        B_ = "[object DataView]",
        PK = ua(Kd),
        kK = ua(Yd),
        xK = ua(qd),
        DK = ua(zd),
        MK = ua(Xd),
        Wi = S0;
    (Kd && Wi(new Kd(new ArrayBuffer(1))) != B_ || Yd && Wi(new Yd) != D_ || qd && Wi(qd.resolve()) != M_ || zd && Wi(new zd) != F_ || Xd && Wi(new Xd) != U_) && (Wi = function(e) {
        var t = S0(e),
            r = t == LK ? e.constructor : void 0,
            n = r ? ua(r) : "";
        if (n) switch (n) {
            case PK:
                return B_;
            case kK:
                return D_;
            case xK:
                return M_;
            case DK:
                return F_;
            case MK:
                return U_
        }
        return t
    });
    var Op = Wi,
        FK = Object.prototype,
        UK = FK.hasOwnProperty;

    function BK(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && UK.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var jK = BK,
        GK = Mh;

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
        j_ = Ic,
        G_ = j_ ? j_.prototype : void 0,
        W_ = G_ ? G_.valueOf : void 0;

    function qK(e) {
        return W_ ? Object(W_.call(e)) : {}
    }
    var zK = qK,
        XK = Mh,
        JK = HK,
        ZK = YK,
        QK = zK,
        eY = n1,
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
        TY = Op,
        SY = mi,
        OY = "[object Map]";

    function wY(e) {
        return SY(e) && TY(e) == OY
    }
    var CY = wY,
        $Y = CY,
        IY = Bh,
        H_ = no.exports,
        V_ = H_ && H_.isMap,
        AY = V_ ? IY(V_) : $Y,
        NY = AY,
        RY = Op,
        LY = mi,
        PY = "[object Set]";

    function kY(e) {
        return LY(e) && RY(e) == PY
    }
    var xY = kY,
        DY = xY,
        MY = Bh,
        K_ = no.exports,
        Y_ = K_ && K_.isSet,
        FY = Y_ ? MY(Y_) : DY,
        UY = FY,
        BY = e1,
        jY = dV,
        GY = jh,
        WY = AV,
        HY = PV,
        VY = ql.exports,
        KY = i1,
        YY = VV,
        qY = rK,
        zY = uK,
        XY = gK,
        JY = Op,
        ZY = jK,
        QY = EY,
        eq = a1,
        tq = vi,
        rq = ro.exports,
        nq = NY,
        iq = hn,
        sq = UY,
        aq = Vc,
        oq = fo,
        lq = 1,
        cq = 2,
        uq = 4,
        O0 = "[object Arguments]",
        fq = "[object Array]",
        dq = "[object Boolean]",
        hq = "[object Date]",
        pq = "[object Error]",
        w0 = "[object Function]",
        gq = "[object GeneratorFunction]",
        mq = "[object Map]",
        vq = "[object Number]",
        C0 = "[object Object]",
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
        Nq = "[object Uint8Array]",
        Rq = "[object Uint8ClampedArray]",
        Lq = "[object Uint16Array]",
        Pq = "[object Uint32Array]",
        vt = {};
    vt[O0] = vt[fq] = vt[Sq] = vt[Oq] = vt[dq] = vt[hq] = vt[wq] = vt[Cq] = vt[$q] = vt[Iq] = vt[Aq] = vt[mq] = vt[vq] = vt[C0] = vt[yq] = vt[_q] = vt[bq] = vt[Eq] = vt[Nq] = vt[Rq] = vt[Lq] = vt[Pq] = !0;
    vt[pq] = vt[w0] = vt[Tq] = !1;

    function Fl(e, t, r, n, s, o) {
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
                E = y == w0 || y == gq;
            if (rq(e)) return VY(e, u);
            if (y == C0 || y == O0 || E && !s) {
                if (l = f || E ? {} : eq(e), !u) return f ? qY(e, HY(l, e)) : YY(e, WY(l, e))
            } else {
                if (!vt[y]) return s ? e : {};
                l = QY(e, y, u)
            }
        }
        o || (o = new BY);
        var C = o.get(e);
        if (C) return C;
        o.set(e, l), sq(e) ? e.forEach(function(B) {
            l.add(Fl(B, t, r, B, e, o))
        }) : nq(e) && e.forEach(function(B, $) {
            l.set($, Fl(B, t, r, $, e, o))
        });
        var P = h ? f ? XY : zY : f ? oq : aq,
            M = g ? void 0 : P(e);
        return jY(M || e, function(B, $) {
            M && ($ = B, B = e[$]), GY(l, $, Fl(B, t, r, $, e, o))
        }), l
    }
    var kq = Fl,
        xq = kq,
        Dq = 1,
        Mq = 4;

    function Fq(e) {
        return xq(e, Dq | Mq)
    }
    var $0 = Fq;
    const Uq = at({
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
                !e || (this.values = $0(this.$ecastValues), this.content = (n = Gy.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await Gy.send({
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
        I0 = "main/pp9/fourbage/assets/ad9172fc.png",
        A0 = "main/pp9/fourbage/assets/dc131b16.png",
        Bq = "main/pp9/fourbage/assets/38715b18.png",
        jq = "main/pp9/fourbage/assets/b0d7c822.png",
        Gq = "main/pp9/fourbage/assets/06150f24.png",
        Qr = e => (wh("data-v-2c53389f"), e = e(), Ch(), e),
        Wq = {
            class: "jbg"
        },
        Hq = {
            key: 0,
            class: "options"
        },
        Vq = Qr(() => Z("img", {
            src: I0,
            alt: "Leave Feedback"
        }, null, -1)),
        Kq = Qr(() => Z("span", null, [hi("LEAVE"), Z("br"), hi("FEEDBACK")], -1)),
        Yq = [Vq, Kq],
        qq = Qr(() => Z("img", {
            src: A0,
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
            src: I0,
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
            src: A0,
            alt: "Debug"
        }, null, -1)),
        hz = Qr(() => Z("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        pz = {
            class: "actions"
        };

    function gz(e, t, r, n, s, o) {
        return Y(), X("div", Wq, [e.screen === "options" ? (Y(), X("div", Hq, [Z("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, Yq), Z("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, Xq)])) : e.screen === "feedback" ? (Y(), X("div", Jq, [Zq, Qq, Z("div", {
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
        }, oz, 2)])], 2), Z("div", lz, [e.content ? (Y(), X("div", cz, [Ie(Z("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [I2, e.isContent]
        ]), Z("span", null, [uz, Z("em", null, yt(e.content), 1)])])) : we("", !0), Ie(Z("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [Jv, e.message]
        ]), Z("button", {
            onClick: t[7] || (t[7] = Zr((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, yt(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (Y(), X("div", fz, [dz, hz, Z("div", pz, [Ie(Z("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [Jv, e.message]
        ]), Z("button", {
            onClick: t[9] || (t[9] = Zr((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, yt(e.$t("ACTION.OK")), 1)])])) : we("", !0)])
    }
    const N0 = tt(Uq, [
        ["render", gz],
        ["__scopeId", "data-v-2c53389f"]
    ]);
    at({
        methods: {
            onFeedbackClick() {
                this.$showModal(N0)
            }
        }
    });
    const mz = {
        install: (e, t) => {
            if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                if (t.replayer) {
                    e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", uV);
                    return
                }
                if (e.config.globalProperties.$debugRecorder = new y5(t.client, t.room), !e.config.globalProperties.$showModal) {
                    console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                    return
                }
                new jH(() => {
                    e.config.globalProperties.$showModal(N0)
                })
            }
        }
    };
    var vz = dn,
        yz = function() {
            return vz.Date.now()
        },
        _z = yz,
        bz = /\s/;

    function Ez(e) {
        for (var t = e.length; t-- && bz.test(e.charAt(t)););
        return t
    }
    var Tz = Ez,
        Sz = Tz,
        Oz = /^\s+/;

    function wz(e) {
        return e && e.slice(0, Sz(e) + 1).replace(Oz, "")
    }
    var Cz = wz,
        $z = ia,
        Iz = mi,
        Az = "[object Symbol]";

    function Nz(e) {
        return typeof e == "symbol" || Iz(e) && $z(e) == Az
    }
    var Kc = Nz,
        Rz = Cz,
        q_ = hn,
        Lz = Kc,
        z_ = 0 / 0,
        Pz = /^[-+]0x[0-9a-f]+$/i,
        kz = /^0b[01]+$/i,
        xz = /^0o[0-7]+$/i,
        Dz = parseInt;

    function Mz(e) {
        if (typeof e == "number") return e;
        if (Lz(e)) return z_;
        if (q_(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = q_(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = Rz(e);
        var r = kz.test(e);
        return r || xz.test(e) ? Dz(e.slice(2), r ? 2 : 8) : Pz.test(e) ? z_ : +e
    }
    var Fz = Mz,
        Uz = hn,
        Zf = _z,
        X_ = Fz,
        Bz = "Expected a function",
        jz = Math.max,
        Gz = Math.min;

    function Wz(e, t, r) {
        var n, s, o, l, u, f, h = 0,
            g = !1,
            y = !1,
            E = !0;
        if (typeof e != "function") throw new TypeError(Bz);
        t = X_(t) || 0, Uz(r) && (g = !!r.leading, y = "maxWait" in r, o = y ? jz(X_(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

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
            return y ? Gz(ue, o - le) : ue
        }

        function B(J) {
            var oe = J - f,
                le = J - h;
            return f === void 0 || oe >= t || oe < 0 || y && le >= o
        }

        function $() {
            var J = Zf();
            if (B(J)) return H(J);
            u = setTimeout($, M(J))
        }

        function H(J) {
            return u = void 0, E && n ? C(J) : (n = s = void 0, l)
        }

        function q() {
            u !== void 0 && clearTimeout(u), h = 0, n = f = s = u = void 0
        }

        function G() {
            return u === void 0 ? l : H(Zf())
        }

        function j() {
            var J = Zf(),
                oe = B(J);
            if (n = arguments, s = this, f = J, oe) {
                if (u === void 0) return P(f);
                if (y) return clearTimeout(u), u = setTimeout($, t), C(f)
            }
            return u === void 0 && (u = setTimeout($, t)), l
        }
        return j.cancel = q, j.flush = G, j
    }
    var Hz = Wz,
        Vz = vi,
        Kz = Kc,
        Yz = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        qz = /^\w*$/;

    function zz(e, t) {
        if (Vz(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || Kz(e) ? !0 : qz.test(e) || !Yz.test(e) || t != null && e in Object(t)
    }
    var Xz = zz,
        R0 = QE,
        Jz = "Expected a function";

    function wp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Jz);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(s)) return o.get(s);
            var l = e.apply(this, n);
            return r.cache = o.set(s, l) || o, l
        };
        return r.cache = new(wp.Cache || R0), r
    }
    wp.Cache = R0;
    var Zz = wp,
        Qz = Zz,
        eX = 500;

    function tX(e) {
        var t = Qz(e, function(n) {
                return r.size === eX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var rX = tX,
        nX = rX,
        iX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        sX = /\\(\\)?/g,
        aX = nX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(iX, function(r, n, s, o) {
                t.push(s ? o.replace(sX, "$1") : n || r)
            }), t
        }),
        oX = aX;

    function lX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var L0 = lX,
        J_ = Ic,
        cX = L0,
        uX = vi,
        fX = Kc,
        dX = 1 / 0,
        Z_ = J_ ? J_.prototype : void 0,
        Q_ = Z_ ? Z_.toString : void 0;

    function P0(e) {
        if (typeof e == "string") return e;
        if (uX(e)) return cX(e, P0) + "";
        if (fX(e)) return Q_ ? Q_.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -dX ? "-0" : t
    }
    var hX = P0,
        pX = hX;

    function gX(e) {
        return e == null ? "" : pX(e)
    }
    var mX = gX,
        vX = vi,
        yX = Xz,
        _X = oX,
        bX = mX;

    function EX(e, t) {
        return vX(e) ? e : yX(e, t) ? [e] : _X(bX(e))
    }
    var k0 = EX,
        TX = Kc,
        SX = 1 / 0;

    function OX(e) {
        if (typeof e == "string" || TX(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -SX ? "-0" : t
    }
    var x0 = OX,
        wX = jh,
        CX = k0,
        $X = Gh,
        eb = hn,
        IX = x0;

    function AX(e, t, r, n) {
        if (!eb(e)) return e;
        t = CX(t, e);
        for (var s = -1, o = t.length, l = o - 1, u = e; u != null && ++s < o;) {
            var f = IX(t[s]),
                h = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var g = u[f];
                h = n ? n(g, f, u) : void 0, h === void 0 && (h = eb(g) ? g : $X(t[s + 1]) ? [] : {})
            }
            wX(u, f, h), u = u[f]
        }
        return e
    }
    var NX = AX,
        RX = NX;

    function LX(e, t, r) {
        return e == null ? e : RX(e, t, r)
    }
    var PX = LX;
    class kX {
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
            ge(this, "sync", Hz(() => {
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
            return t instanceof Sr.ArtifactEntity || t instanceof Sr.DoodleEntity ? t : t instanceof Sr.ObjectEntity ? $0(t.val) : t instanceof Sr.TextEntity ? t.text : t instanceof Sr.NumberEntity ? t.val : null
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
                    PX(this.newValues, n, u)
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
    const qr = new kX,
        xX = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    qr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => io.add(n)), r.wsClient.on("connection", n => {
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

    function DX() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Cp() {
        return !DX() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function MX(e, t) {
        return e.require(t)
    }
    var FX = {};

    function zt() {
        return Cp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : FX
    }

    function $p(e, t, r) {
        var n = r || zt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            o = s[e] || (s[e] = t());
        return o
    }
    var D0 = Object.prototype.toString;

    function M0(e) {
        switch (D0.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ti(e, Error)
        }
    }

    function fa(e, t) {
        return D0.call(e) === `[object ${t}]`
    }

    function F0(e) {
        return fa(e, "ErrorEvent")
    }

    function tb(e) {
        return fa(e, "DOMError")
    }

    function UX(e) {
        return fa(e, "DOMException")
    }

    function Zs(e) {
        return fa(e, "String")
    }

    function BX(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Yc(e) {
        return fa(e, "Object")
    }

    function Ip(e) {
        return typeof Event < "u" && Ti(e, Event)
    }

    function jX(e) {
        return typeof Element < "u" && Ti(e, Element)
    }

    function GX(e) {
        return fa(e, "RegExp")
    }

    function U0(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function WX(e) {
        return Yc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function HX(e) {
        return typeof e == "number" && e !== e
    }

    function Ti(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function Jd(e, t) {
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
            for (; u && f++ < r && (g = VX(u, t), !(g === "html" || f > 1 && h + s.length * l + g.length >= n));) s.push(g), h += g.length, u = u.parentNode;
            return s.reverse().join(o)
        } catch {
            return "<unknown>"
        }
    }

    function VX(e, t) {
        var r = e,
            n = [];
        let s, o, l, u, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var h = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (h && h.length) h.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Zs(s))
            for (o = s.split(/\s+/), f = 0; f < o.length; f++) n.push(`.${o[f]}`);
        var g = ["type", "name", "title", "alt"];
        for (f = 0; f < g.length; f++) l = g[f], u = r.getAttribute(l), u && n.push(`[${l}="${u}"]`);
        return n.join("")
    }

    function KX() {
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
    var YX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function qX(e) {
        return e === "http" || e === "https"
    }

    function zX(e, t = !1) {
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

    function XX(e) {
        var t = YX.exec(e);
        if (!t) throw new Da(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", o, l = "", u] = t.slice(1);
        let f = "",
            h = u;
        var g = h.split("/");
        if (g.length > 1 && (f = g.slice(0, -1).join("/"), h = g.pop()), h) {
            var y = h.match(/^\d+/);
            y && (h = y[0])
        }
        return B0({
            host: o,
            pass: s,
            path: f,
            projectId: h,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function B0(e) {
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

    function JX(e) {
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
        if (!qX(n)) throw new Da(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Da(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function ZX(e) {
        var t = typeof e == "string" ? XX(e) : B0(e);
        return JX(t), t
    }
    var QX = zt(),
        eJ = "Sentry Logger ",
        nc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function j0(e) {
        var t = zt();
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

    function rb() {
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
                e && j0(() => {
                    QX.console[r](`${eJ}[${r}]:`, ...n)
                })
            }
        }) : nc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let jt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? jt = $p("logger", rb) : jt = rb();

    function nb(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function ib(e, t) {
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

    function Ap(e, t) {
        return Zs(e) ? GX(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function lr(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                W0(s, n)
            } catch {}
            e[t] = s
        }
    }

    function G0(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function W0(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, G0(e, "__sentry_original__", t)
    }

    function Np(e) {
        return e.__sentry_original__
    }

    function H0(e) {
        if (M0(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...ab(e)
        };
        if (Ip(e)) {
            var t = {
                type: e.type,
                target: sb(e.target),
                currentTarget: sb(e.currentTarget),
                ...ab(e)
            };
            return typeof CustomEvent < "u" && Ti(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function sb(e) {
        try {
            return jX(e) ? Jd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function ab(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function tJ(e, t = 40) {
        var r = Object.keys(H0(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return nb(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : nb(n, t)
        }
        return ""
    }

    function rJ(e) {
        var t = new Map;
        return Zd(e, t)
    }

    function Zd(e, t) {
        if (Yc(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = Zd(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(u => {
                n.push(Zd(u, t))
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

    function nJ() {
        if (!("fetch" in zt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function ob(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function iJ() {
        if (!nJ()) return !1;
        var e = zt();
        if (ob(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = ob(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function sJ() {
        var e = zt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var wt = zt(),
        Ka = {},
        lb = {};

    function aJ(e) {
        if (!lb[e]) switch (lb[e] = !0, e) {
            case "console":
                oJ();
                break;
            case "dom":
                mJ();
                break;
            case "xhr":
                fJ();
                break;
            case "fetch":
                lJ();
                break;
            case "history":
                dJ();
                break;
            case "error":
                vJ();
                break;
            case "unhandledrejection":
                yJ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function qi(e, t) {
        Ka[e] = Ka[e] || [], Ka[e].push(t), aJ(e)
    }

    function fn(e, t) {
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

    function oJ() {
        "console" in wt && nc.forEach(function(e) {
            e in wt.console && lr(wt.console, e, function(t) {
                return function(...r) {
                    fn("console", {
                        args: r,
                        level: e
                    }), t && t.apply(wt.console, r)
                }
            })
        })
    }

    function lJ() {
        !iJ() || lr(wt, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: cJ(t),
                        url: uJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return fn("fetch", {
                    ...r
                }), e.apply(wt, t).then(n => (fn("fetch", {
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

    function cJ(e = []) {
        return "Request" in wt && Ti(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function uJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in wt && Ti(e[0], Request) ? e[0].url : String(e[0])
    }

    function fJ() {
        if ("XMLHttpRequest" in wt) {
            var e = XMLHttpRequest.prototype;
            lr(e, "open", function(t) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        o = n.__sentry_xhr__ = {
                            method: Zs(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    Zs(s) && o.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
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
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? lr(n, "onreadystatechange", function(u) {
                        return function(...f) {
                            return l(), u.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", l), t.apply(n, r)
                }
            }), lr(e, "send", function(t) {
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
    let wl;

    function dJ() {
        if (!sJ()) return;
        var e = wt.onpopstate;
        wt.onpopstate = function(...r) {
            var n = wt.location.href,
                s = wl;
            if (wl = n, fn("history", {
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
                    wl = l, fn("history", {
                        from: o,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        lr(wt.history, "pushState", t), lr(wt.history, "replaceState", t)
    }
    var hJ = 1e3;
    let Cl, $l;

    function pJ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function gJ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function cb(e, t = !1) {
        return r => {
            if (!(!r || $l === r) && !gJ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Cl === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), $l = r) : pJ($l, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), $l = r), clearTimeout(Cl), Cl = wt.setTimeout(() => {
                    Cl = void 0
                }, hJ)
            }
        }
    }

    function mJ() {
        if ("document" in wt) {
            var e = fn.bind(null, "dom"),
                t = cb(e, !0);
            wt.document.addEventListener("click", t, !1), wt.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = wt[r] && wt[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (lr(n, "addEventListener", function(s) {
                    return function(o, l, u) {
                        if (o === "click" || o == "keypress") try {
                            var f = this,
                                h = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                g = h[o] = h[o] || {
                                    refCount: 0
                                };
                            if (!g.handler) {
                                var y = cb(e);
                                g.handler = y, s.call(this, o, y, u)
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
    let ed = null;

    function vJ() {
        ed = wt.onerror, wt.onerror = function(e, t, r, n, s) {
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

    function yJ() {
        td = wt.onunhandledrejection, wt.onunhandledrejection = function(e) {
            return fn("unhandledrejection", e), td ? td.apply(this, arguments) : !0
        }
    }

    function _J() {
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

    function Ya() {
        var e = zt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function V0(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ls(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = V0(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Qd(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            o = s[0] = s[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function ic(e, t) {
        var r = V0(e);
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

    function bJ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return eh("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function K0(e, t = 3, r = 100 * 1024) {
        var n = bJ(e, t);
        return SJ(n) > r ? K0(e, t - 1, r) : n
    }

    function eh(e, t, r = 1 / 0, n = 1 / 0, s = _J()) {
        const [o, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !HX(t)) return t;
        var u = EJ(e, t);
        if (!u.startsWith("[object ")) return u;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return u.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var h = f.toJSON();
            return eh("", h, r - 1, n, s)
        } catch {}
        var g = Array.isArray(t) ? [] : {};
        let y = 0;
        var E = H0(t);
        for (var C in E)
            if (!!Object.prototype.hasOwnProperty.call(E, C)) {
                if (y >= n) {
                    g[C] = "[MaxProperties ~]";
                    break
                }
                var P = E[C];
                g[C] = eh(C, P, r - 1, n, s), y += 1
            } return l(t), g
    }

    function EJ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : WX(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${pi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function TJ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function SJ(e) {
        return TJ(JSON.stringify(e))
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
                    if (U0(r)) {
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
    var OJ = ["fatal", "error", "warning", "log", "info", "debug"];

    function wJ(e) {
        return e === "warn" ? "warning" : OJ.includes(e) ? e : "log"
    }
    var th = {
        nowSeconds: () => Date.now() / 1e3
    };

    function CJ() {
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

    function $J() {
        try {
            var e = MX(CS, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var nd = Cp() ? $J() : CJ(),
        ub = nd === void 0 ? th : {
            nowSeconds: () => (nd.timeOrigin + nd.now()) / 1e3
        },
        Y0 = th.nowSeconds.bind(th),
        q0 = ub.nowSeconds.bind(ub);
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

    function IJ(e) {
        var t = q0(),
            r = {
                sid: Ya(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => NJ(r)
            };
        return e && qc(r, e), r
    }

    function qc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || q0(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ya()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function AJ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), qc(e, r)
    }

    function NJ(e) {
        return rJ({
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
    var fb = 100;
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
            return this._user = t || {}, this._session && qc(this._session, {
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
            var n = typeof r == "number" ? Math.min(r, fb) : fb;
            if (n <= 0) return this;
            var s = {
                timestamp: Y0(),
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
            }, this._notifyEventProcessors([...z0(), ...this._eventProcessors], t, r)
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && u.id && f === null && jt.log(`Event processor "${u.id}" dropped event`), U0(f) ? f.then(h => this._notifyEventProcessors(t, h, n, s + 1).then(o)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(o).then(null, l)
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

    function z0() {
        return $p("globalEventProcessors", () => [])
    }

    function X0(e) {
        z0().push(e)
    }
    var Rp = 4,
        RJ = 100;
    class bo {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new rs, n = Rp) {
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
            var n = this._lastEventId = r && r.event_id ? r.event_id : Ya(),
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
            var s = this._lastEventId = n && n.event_id ? n.event_id : Ya(),
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
            var n = r && r.event_id ? r.event_id : Ya();
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
                maxBreadcrumbs: l = RJ
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var u = Y0(),
                    f = {
                        timestamp: u,
                        ...t
                    },
                    h = o ? j0(() => o(f, r)) : f;
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
            var r = db(this);
            try {
                t(this)
            } finally {
                db(r)
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
            n && AJ(n), this._sendSessionUpdate(), r && r.setSession()
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
            var f = IJ({
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
                h && h.status === "ok" && qc(h, {
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
            var n = zc(),
                s = n.__SENTRY__;
            if (s && s.extensions && typeof s.extensions[t] == "function") return s.extensions[t].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function zc() {
        var e = zt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function db(e) {
        var t = zc(),
            r = ai(t);
        return Lp(t, e), r
    }

    function Dr() {
        var e = zc();
        return (!J0(e) || ai(e).isOlderThan(Rp)) && Lp(e, new bo), Cp() ? LJ(e) : ai(e)
    }

    function LJ(e) {
        try {
            var t = zc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return ai(e);
            if (!J0(r) || ai(r).isOlderThan(Rp)) {
                var n = ai(e).getStackTop();
                Lp(r, new bo(n.client, rs.clone(n.scope)))
            }
            return ai(r)
        } catch {
            return ai(e)
        }
    }

    function J0(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function ai(e) {
        return $p("hub", () => new bo, e)
    }

    function Lp(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function PJ(e, t) {
        return Dr().captureException(e, {
            captureContext: t
        })
    }

    function kJ(e) {
        Dr().withScope(e)
    }

    function xJ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function DJ(e, t) {
        var r = ZX(e),
            n = `${xJ(r)}embed/error-page/`;
        let s = `dsn=${zX(r)}`;
        for (var o in t)
            if (o !== "dsn")
                if (o === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(o)}=${encodeURIComponent(t[o])}`;
        return `${n}?${s}`
    }
    let hb;
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
            hb = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Np(this) || this;
                return hb.apply(r, t)
            }
        }
    }
    ao.__initStatic();
    var MJ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            h = FJ(l._options, f);
                        return UJ(s, h) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Hs.__initStatic();

    function FJ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...MJ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function UJ(e, t) {
        return t.ignoreInternal && HJ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ls(e)}`), !0) : BJ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ls(e)}`), !0) : jJ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ls(e)}.
Url: ${sc(e)}`), !0) : GJ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ls(e)}.
Url: ${sc(e)}`), !0)
    }

    function BJ(e, t) {
        return !t || !t.length ? !1 : WJ(e).some(r => t.some(n => Ap(r, n)))
    }

    function jJ(e, t) {
        if (!t || !t.length) return !1;
        var r = sc(e);
        return r ? t.some(n => Ap(r, n)) : !1
    }

    function GJ(e, t) {
        if (!t || !t.length) return !0;
        var r = sc(e);
        return r ? t.some(n => Ap(r, n)) : !0
    }

    function WJ(e) {
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

    function HJ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function VJ(e = []) {
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
            return t ? VJ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error(`Cannot extract url for event ${Ls(e)}`), null
        }
    }

    function Z0(e, t) {
        var r = Pp(e, t),
            n = {
                type: t && t.name,
                value: zJ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function KJ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Ip(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${tJ(t)}`
                }]
            },
            extra: {
                __serialized__: K0(t)
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
                values: [Z0(e, t)]
            }
        }
    }

    function Pp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = qJ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var YJ = /Minified React error #\d+;/i;

    function qJ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (YJ.test(e.message)) return 1
        }
        return 0
    }

    function zJ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function Q0(e, t, r, n, s) {
        let o;
        if (F0(t) && t.error) {
            var l = t;
            return id(e, l.error)
        }
        if (tb(t) || UX(t)) {
            var u = t;
            if ("stack" in t) o = id(e, t);
            else {
                var f = u.name || (tb(u) ? "DOMError" : "DOMException"),
                    h = u.message ? `${f}: ${u.message}` : f;
                o = pb(e, h, r, n), Qd(o, h)
            }
            return "code" in u && (o.tags = {
                ...o.tags,
                "DOMException.code": `${u.code}`
            }), o
        }
        if (M0(t)) return id(e, t);
        if (Yc(t) || Ip(t)) {
            var g = t;
            return o = KJ(e, g, r, s), ic(o, {
                synthetic: !0
            }), o
        }
        return o = pb(e, t, r, n), Qd(o, `${t}`, void 0), ic(o, {
            synthetic: !0
        }), o
    }

    function pb(e, t, r, n) {
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
    var XJ = "Breadcrumbs";
    class oo {
        static __initStatic() {
            this.id = XJ
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
            this.options.console && qi("console", ZJ), this.options.dom && qi("dom", JJ(this.options.dom)), this.options.xhr && qi("xhr", QJ), this.options.fetch && qi("fetch", eZ), this.options.history && qi("history", tZ)
        }
    }
    oo.__initStatic();

    function JJ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Jd(r.event.target, s) : Jd(r.event, s)
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

    function ZJ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: wJ(e.level),
            message: ib(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${ib(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
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

    function eZ(e) {
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

    function tZ(e) {
        var t = zt();
        let r = e.from,
            n = e.to;
        var s = rd(t.location.href);
        let o = rd(r);
        var l = rd(n);
        o.path || (o = s), s.protocol === l.protocol && s.host === l.host && (n = l.relative), s.protocol === o.protocol && s.host === o.host && (r = o.relative), Dr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let rh = 0;

    function eS() {
        return rh > 0
    }

    function rZ() {
        rh += 1, setTimeout(() => {
            rh -= 1
        })
    }

    function Qs(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (Np(e)) return e
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
                throw rZ(), kJ(g => {
                    g.addEventProcessor(y => (t.mechanism && (Qd(y, void 0, void 0), ic(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: u
                    }, y)), PJ(h)
                }), h
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (s[o] = e[o])
        } catch {}
        W0(s, e), G0(e, "__sentry_wrapped__", s);
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
                onerror: nZ,
                onunhandledrejection: iZ
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
                n && t[r] && (oZ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    ui.__initStatic();

    function nZ() {
        qi("error", e => {
            const [t, r, n] = nS();
            if (!t.getIntegration(ui)) return;
            const {
                msg: s,
                url: o,
                line: l,
                column: u,
                error: f
            } = e;
            if (!(eS() || f && f.__sentry_own_request__)) {
                var h = f === void 0 && Zs(s) ? aZ(s, o, l, u) : tS(Q0(r, f || s, void 0, n, !1), o, l, u);
                h.level = "error", rS(t, f, h, "onerror")
            }
        })
    }

    function iZ() {
        qi("unhandledrejection", e => {
            const [t, r, n] = nS();
            if (!t.getIntegration(ui)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (eS() || s && s.__sentry_own_request__) return !0;
            var o = BX(s) ? sZ(s) : Q0(r, s, void 0, n, !0);
            o.level = "error", rS(t, s, o, "onunhandledrejection")
        })
    }

    function sZ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function aZ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = F0(e) ? e.message : e,
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
        return tS(f, t, r, n)
    }

    function tS(e, t, r, n) {
        var s = e.exception = e.exception || {},
            o = s.values = s.values || [],
            l = o[0] = o[0] || {},
            u = l.stacktrace = l.stacktrace || {},
            f = u.frames = u.frames || [],
            h = isNaN(parseInt(n, 10)) ? void 0 : n,
            g = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Zs(t) && t.length > 0 ? t : KX();
        return f.length === 0 && f.push({
            colno: h,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: g
        }), e
    }

    function oZ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.log(`Global Handler attached: ${e}`)
    }

    function rS(e, t, r, n) {
        ic(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function nS() {
        var e = Dr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var lZ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class lo {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = lo.id
        }
        constructor(t) {
            lo.prototype.__init.call(this), this._options = {
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
            this._options.setTimeout && lr(t, "setTimeout", gb), this._options.setInterval && lr(t, "setInterval", gb), this._options.requestAnimationFrame && lr(t, "requestAnimationFrame", cZ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && lr(XMLHttpRequest.prototype, "send", uZ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : lZ;
                n.forEach(fZ)
            }
        }
    }
    lo.__initStatic();

    function gb(e) {
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

    function cZ(e) {
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

    function uZ(e) {
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
                        u = Np(o);
                    return u && (l.mechanism.data.handler = pi(u)), Qs(o, l)
                })
            }), e.apply(this, t)
        }
    }

    function fZ(e) {
        var t = zt(),
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
    var dZ = "cause",
        hZ = 5;
    class Vs {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Vs.id
        }
        constructor(t = {}) {
            Vs.prototype.__init.call(this), this._key = t.key || dZ, this._limit = t.limit || hZ
        }
        setupOnce() {
            var t = Dr().getClient();
            !t || X0((r, n) => {
                var s = Dr().getIntegration(Vs);
                return s ? pZ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Vs.__initStatic();

    function pZ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ti(s.originalException, Error)) return n;
        var o = iS(e, r, s.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function iS(e, t, r, n, s = []) {
        if (!Ti(r[n], Error) || s.length + 1 >= t) return s;
        var o = Z0(e, r[n]);
        return iS(e, t, r[n], n, [o, ...s])
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
            X0(t => {
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
                        if (gZ(s, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function gZ(e, t) {
        return t ? !!(mZ(e, t) || vZ(e, t)) : !1
    }

    function mZ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !aS(e, t) || !sS(e, t))
    }

    function vZ(e, t) {
        var r = mb(t),
            n = mb(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !aS(e, t) || !sS(e, t))
    }

    function sS(e, t) {
        let r = vb(e),
            n = vb(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                o = r[l];
            if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1
        }
        return !0
    }

    function aS(e, t) {
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

    function mb(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function vb(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Hs, new ao, new lo, new oo, new ui, new Vs, new Ys, new Ks;

    function yZ(e = {}, t = Dr()) {
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
        l.async = !0, l.src = DJ(o, e), e.onLoad && (l.onload = e.onLoad);
        var u = r.document.head || r.document.body;
        u ? u.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && jt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const _Z = at({
            setup() {
                return {
                    fatalError: Ji(_o.fatal.error)
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
                    yZ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        Eo = e => (wh("data-v-a7272d53"), e = e(), Ch(), e),
        bZ = {
            class: "jbg fatal"
        },
        EZ = {
            class: "constrain"
        },
        TZ = Eo(() => Z("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        SZ = {
            class: "content"
        },
        OZ = Eo(() => Z("h1", null, "You have encountered an error", -1)),
        wZ = Eo(() => Z("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        CZ = Eo(() => Z("ul", null, [Z("li", null, "Refresh the page"), Z("li", null, "Turn off adblockers or other browser extensions."), Z("li", null, "Check your connection to the Internet."), Z("li", null, "Make sure you're using an up-to-date browser."), Z("li", null, "If that doesn't work, let us know.")], -1)),
        $Z = Eo(() => Z("hr", null, null, -1)),
        IZ = {
            class: "error"
        };

    function AZ(e, t, r, n, s, o) {
        return Y(), X("div", bZ, [Z("div", EZ, [TZ, Z("div", SZ, [OZ, wZ, CZ, Z("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), $Z, Z("pre", IZ, yt(e.message), 1)])])])
    }
    const NZ = tt(_Z, [
            ["render", AZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Il = Un({
            hasCrashed: !1
        }),
        RZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(_o.fatal.error, kr(() => Il));
                const t = (r, n) => {
                    var s, o;
                    if (r instanceof Ha.EcastEntityNotFound || r instanceof Ha.EcastFilterError || r instanceof Ha.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((o = r.message) == null ? void 0 : o.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Il.hasCrashed = !0, Il.event = r, Il.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", NZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var LZ = k0,
        PZ = x0;

    function kZ(e, t) {
        t = LZ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[PZ(t[r++])];
        return r && r == n ? e : void 0
    }
    var xZ = kZ,
        DZ = xZ;

    function MZ(e, t, r) {
        var n = e == null ? void 0 : DZ(e, t);
        return n === void 0 ? r : n
    }
    var FZ = MZ,
        UZ = Math.floor,
        BZ = Math.random;

    function jZ(e, t) {
        return e + UZ(BZ() * (t - e + 1))
    }
    var GZ = jZ,
        WZ = GZ;

    function HZ(e) {
        var t = e.length;
        return t ? e[WZ(0, t - 1)] : void 0
    }
    var oS = HZ,
        VZ = L0;

    function KZ(e, t) {
        return VZ(t, function(r) {
            return e[r]
        })
    }
    var YZ = KZ,
        qZ = YZ,
        zZ = Vc;

    function XZ(e) {
        return e == null ? [] : qZ(e, zZ(e))
    }
    var JZ = XZ,
        ZZ = oS,
        QZ = JZ;

    function eQ(e) {
        return ZZ(QZ(e))
    }
    var tQ = eQ,
        rQ = oS,
        nQ = tQ,
        iQ = vi;

    function sQ(e) {
        var t = iQ(e) ? rQ : nQ;
        return t(e)
    }
    var aQ = sQ;

    function yb(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = FZ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), aQ(s)
    }
    const oQ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = yb(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return yb(t.i18n, n) || ""
                }
            }
        },
        lQ = at({
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
        cQ = "main/pp9/fourbage/assets/928ef0da.png",
        uQ = "main/pp9/fourbage/assets/0bb76a2d.png",
        fQ = "main/pp9/fourbage/assets/ed4469b3.png",
        dQ = {
            key: 0,
            class: "image",
            src: cQ,
            alt: "Kicked"
        },
        hQ = {
            key: 1,
            class: "image",
            src: uQ,
            alt: "Thank You"
        },
        pQ = {
            key: 2,
            class: "image",
            src: fQ,
            alt: "Error"
        },
        gQ = {
            class: "text"
        },
        mQ = {
            key: 3,
            class: "subtext"
        },
        vQ = {
            class: "actions"
        };

    function yQ(e, t, r, n, s, o) {
        const l = At("bb");
        return Y(), X("div", {
            class: Me(["error-model", e.classes])
        }, [e.image === "tear" ? (Y(), X("img", dQ)) : e.image === "moon" ? (Y(), X("img", hQ)) : (Y(), X("img", pQ)), Ie(Z("h3", gQ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((Y(), X("h3", mQ, null, 512)), [
            [l, e.subtext]
        ]) : we("", !0), Z("div", vQ, [Ie(Z("button", {
            onClick: t[0] || (t[0] = Zr(u => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const _Q = tt(lQ, [
            ["render", yQ],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        bQ = at({
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
        EQ = {
            class: "text"
        },
        TQ = {
            key: 0,
            class: "subtext"
        },
        SQ = {
            class: "actions"
        },
        OQ = ["onClick"];

    function wQ(e, t, r, n, s, o) {
        const l = At("bb");
        return Y(), X("div", {
            class: Me(["options-modal", e.classes])
        }, [Ie(Z("h3", EQ, null, 512), [
            [l, e.text]
        ]), e.subtext ? Ie((Y(), X("h3", TQ, null, 512)), [
            [l, e.subtext]
        ]) : we("", !0), Z("div", SQ, [(Y(!0), X(Qe, null, un(e.options, (u, f) => Ie((Y(), X("button", {
            key: f,
            class: Me(u.classes),
            onClick: Zr(h => e.$emit("resolve", u.value), ["prevent"])
        }, null, 10, OQ)), [
            [l, u.text]
        ])), 128))])], 2)
    }
    const CQ = tt(bQ, [
            ["render", wQ],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        $Q = at({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = _Q : e === "Options" ? this.content = CQ : this.content = e, new Promise(n => {
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

    function IQ(e, t, r, n, s, o) {
        return Y(), Or(Oc, {
            name: "modal-transition"
        }, {
            default: Fs(() => [e.props ? (Y(), X("div", {
                key: 0,
                class: Me(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = Us((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = Zr((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (Y(), Or(_c(e.content), Tc({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : we("", !0)], 34)) : we("", !0)]),
            _: 1
        })
    }
    const AQ = tt($Q, [
            ["render", IQ],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        NQ = {
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
                e.component("Modal", AQ), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        RQ = at({
            setup() {
                return {
                    announcment: Ji(_o.textDescriptions.announcement)
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
        LQ = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function PQ(e, t, r, n, s, o) {
        return Y(), X("div", LQ, [(Y(!0), X(Qe, null, un(e.lines, l => (Y(), X("p", {
            key: l.id
        }, yt(l.text), 1))), 128))])
    }
    const kQ = tt(RQ, [
            ["render", PQ]
        ]),
        _b = on(""),
        xQ = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(_o.textDescriptions.announcement, kr(() => _b.value));
                const t = r => {
                    _b.value = r
                };
                e.component("TextDescriptions", kQ), e.config.globalProperties.$announce = t
            }
        },
        DQ = {
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
        MQ = {
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
    const nh = typeof window < "u",
        FQ = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Si = e => FQ ? Symbol(e) : e,
        UQ = (e, t, r) => BQ({
            l: e,
            k: t,
            s: r
        }),
        BQ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        Bt = e => typeof e == "number" && isFinite(e),
        jQ = e => xp(e) === "[object Date]",
        gi = e => xp(e) === "[object RegExp]",
        Xc = e => Be(e) && Object.keys(e).length === 0;

    function GQ(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const er = Object.assign;

    function bb(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const WQ = Object.prototype.hasOwnProperty;

    function kp(e, t) {
        return WQ.call(e, t)
    }
    const _t = Array.isArray,
        Pt = e => typeof e == "function",
        ye = e => typeof e == "string",
        Xe = e => typeof e == "boolean",
        bt = e => e !== null && typeof e == "object",
        lS = Object.prototype.toString,
        xp = e => lS.call(e),
        Be = e => xp(e) === "[object Object]",
        HQ = e => e == null ? "" : _t(e) || Be(e) && e.toString === lS ? JSON.stringify(e, null, 2) : String(e);
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

    function Jc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: o
        } = r, l = e, u = new SyntaxError(String(l));
        return u.code = e, t && (u.location = t), u.domain = n, u
    }

    function VQ(e) {
        throw e
    }

    function KQ(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function ih(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const kn = " ",
        YQ = "\r",
        gr = `
`,
        qQ = String.fromCharCode(8232),
        zQ = String.fromCharCode(8233);

    function XQ(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            o = 0;
        const l = oe => t[oe] === YQ && t[oe + 1] === gr,
            u = oe => t[oe] === gr,
            f = oe => t[oe] === zQ,
            h = oe => t[oe] === qQ,
            g = oe => l(oe) || u(oe) || f(oe) || h(oe),
            y = () => r,
            E = () => n,
            C = () => s,
            P = () => o,
            M = oe => l(oe) || f(oe) || h(oe) ? gr : t[oe],
            B = () => M(r),
            $ = () => M(r + o);

        function H() {
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
            for (; oe !== r;) H();
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
            next: H,
            peek: q,
            reset: G,
            resetPeek: j,
            skipToPeek: J
        }
    }
    const ti = void 0,
        Eb = "'",
        JQ = "tokenizer";

    function ZQ(e, t = {}) {
        const r = t.location !== !1,
            n = XQ(e),
            s = () => n.index(),
            o = () => KQ(n.line(), n.column(), n.index()),
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
                const K = ih(U.startLoc, p),
                    ce = Jc(m, K, {
                        domain: JQ,
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
            return r && (D.loc = ih(m.startLoc, m.endLoc)), O != null && (D.value = O), D
        }
        const C = m => E(m, 14);

        function P(m, p) {
            return m.currentChar() === p ? (m.next(), p) : (y(rt.EXPECTED_TOKEN, o(), 0, p), "")
        }

        function M(m) {
            let p = "";
            for (; m.currentPeek() === kn || m.currentPeek() === gr;) p += m.currentPeek(), m.peek();
            return p
        }

        function B(m) {
            const p = M(m);
            return m.skipToPeek(), p
        }

        function $(m) {
            if (m === ti) return !1;
            const p = m.charCodeAt(0);
            return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
        }

        function H(m) {
            if (m === ti) return !1;
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
                U = H(D);
            return m.resetPeek(), U
        }

        function j(m, p) {
            const {
                currentType: O
            } = p;
            if (O !== 2) return !1;
            M(m);
            const D = m.currentPeek() === Eb;
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
                    const K = m.currentPeek();
                    return K === "{" ? $(m.peek()) : K === "@" || K === "%" || K === "|" || K === ":" || K === "." || K === kn || !K ? !1 : K === gr ? (m.peek(), D()) : $(K)
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
            const O = (U = !1, K = "", ce = !1) => {
                    const se = m.currentPeek();
                    return se === "{" ? K === "%" ? !1 : U : se === "@" || !se ? K === "%" ? !0 : U : se === "%" ? (m.peek(), O(U, "%", !0)) : se === "|" ? K === "%" || ce ? !0 : !(K === kn || K === gr) : se === kn ? (m.peek(), O(!0, kn, ce)) : se === gr ? (m.peek(), O(!0, gr, ce)) : !0
                },
                D = O();
            return p && m.resetPeek(), D
        }

        function Ce(m, p) {
            const O = m.currentChar();
            return O === ti ? ti : p(O) ? (m.next(), O) : null
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

        function Se(m) {
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
            B(m);
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return m.currentChar() === ti && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O
        }

        function Ge(m) {
            B(m);
            let p = "";
            return m.currentChar() === "-" ? (m.next(), p += `-${be(m)}`) : p += be(m), m.currentChar() === ti && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p
        }

        function et(m) {
            B(m), P(m, "'");
            let p = "",
                O = "";
            const D = K => K !== Eb && K !== gr;
            for (; p = Ce(m, D);) p === "\\" ? O += $t(m) : O += p;
            const U = m.currentChar();
            return U === gr || U === ti ? (y(rt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), U === gr && (m.next(), P(m, "'")), O) : (P(m, "'"), O)
        }

        function $t(m) {
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
                    return y(rt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, p), ""
            }
        }

        function Cr(m, p, O) {
            P(m, p);
            let D = "";
            for (let U = 0; U < O; U++) {
                const K = de(m);
                if (!K) {
                    y(rt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${p}${D}${m.currentChar()}`);
                    break
                }
                D += K
            }
            return `\\${p}${D}`
        }

        function rr(m) {
            B(m);
            let p = "",
                O = "";
            const D = U => U !== "{" && U !== "}" && U !== kn && U !== gr;
            for (; p = Ce(m, D);) O += p;
            return O
        }

        function mr(m) {
            let p = "",
                O = "";
            for (; p = F(m);) O += p;
            return O
        }

        function ot(m) {
            const p = (O = !1, D) => {
                const U = m.currentChar();
                return U === "{" || U === "%" || U === "@" || U === "|" || !U || U === kn ? D : U === gr ? (D += U, m.next(), p(O, D)) : (D += U, m.next(), p(!0, D))
            };
            return p(!1, "")
        }

        function St(m) {
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
                        K = !0,
                        ce = !0;
                    if (Ae(m)) return p.braceNest > 0 && y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), O = E(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, O;
                    if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7)) return y(rt.UNTERMINATED_CLOSING_BRACE, o(), 0), p.braceNest = 0, Ht(m, p);
                    if (U = q(m, p)) return O = E(p, 5, Fe(m)), B(m), O;
                    if (K = G(m, p)) return O = E(p, 6, Ge(m)), B(m), O;
                    if (ce = j(m, p)) return O = E(p, 7, et(m)), B(m), O;
                    if (!U && !K && !ce) return O = E(p, 13, rr(m)), y(rt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, O.value), B(m), O;
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
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (U === gr || U === kn) && y(rt.INVALID_LINKED_FORMAT, o(), 0), U) {
                case "@":
                    return m.next(), D = E(p, 8, "@"), p.inLinked = !0, D;
                case ".":
                    return B(m), m.next(), E(p, 9, ".");
                case ":":
                    return B(m), m.next(), E(p, 10, ":");
                default:
                    return Ae(m) ? (D = E(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, D) : J(m, p) || le(m, p) ? (B(m), xt(m, p)) : oe(m, p) ? (B(m), E(p, 12, mr(m))) : ue(m, p) ? (B(m), U === "{" ? lt(m, p) || D : E(p, 11, ot(m))) : (O === 8 && y(rt.INVALID_LINKED_FORMAT, o(), 0), p.braceNest = 0, p.inLinked = !1, Ht(m, p))
            }
        }

        function Ht(m, p) {
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
                    if (Ae(m)) return O = E(p, 1, St(m)), p.braceNest = 0, p.inLinked = !1, O;
                    const {
                        isModulo: U, hasSpace: K
                    } = $e(m);
                    if (U) return K ? E(p, 0, Se(m)) : E(p, 4, ve(m));
                    if (fe(m)) return E(p, 0, Se(m));
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
            return f.lastType = m, f.lastOffset = p, f.lastStartLoc = O, f.lastEndLoc = D, f.offset = s(), f.startLoc = o(), n.currentChar() === ti ? E(f, 14) : Ht(n, f)
        }
        return {
            nextToken: Dt,
            currentOffset: s,
            currentPosition: o,
            context: h
        }
    }
    const QQ = "parser",
        eee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function tee(e, t, r) {
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

    function ree(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n($, H, q, G, ...j) {
            const J = $.currentPosition();
            if (J.offset += G, J.column += G, r) {
                const oe = ih(q, J),
                    le = Jc(H, oe, {
                        domain: QQ,
                        args: j
                    });
                r(le)
            }
        }

        function s($, H, q) {
            const G = {
                type: $,
                start: H,
                end: H
            };
            return t && (G.loc = {
                start: q,
                end: q
            }), G
        }

        function o($, H, q, G) {
            $.end = H, G && ($.type = G), t && $.loc && ($.loc.end = q)
        }

        function l($, H) {
            const q = $.context(),
                G = s(3, q.offset, q.startLoc);
            return G.value = H, o(G, $.currentOffset(), $.currentPosition()), G
        }

        function u($, H) {
            const q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(5, G, j);
            return J.index = parseInt(H, 10), $.nextToken(), o(J, $.currentOffset(), $.currentPosition()), J
        }

        function f($, H) {
            const q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(4, G, j);
            return J.key = H, $.nextToken(), o(J, $.currentOffset(), $.currentPosition()), J
        }

        function h($, H) {
            const q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(9, G, j);
            return J.value = H.replace(eee, tee), $.nextToken(), o(J, $.currentOffset(), $.currentPosition()), J
        }

        function g($) {
            const H = $.nextToken(),
                q = $.context(),
                {
                    lastOffset: G,
                    lastStartLoc: j
                } = q,
                J = s(8, G, j);
            return H.type !== 12 ? (n($, rt.UNEXPECTED_EMPTY_LINKED_MODIFIER, q.lastStartLoc, 0), J.value = "", o(J, G, j), {
                nextConsumeToken: H,
                node: J
            }) : (H.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, _n(H)), J.value = H.value || "", o(J, $.currentOffset(), $.currentPosition()), {
                node: J
            })
        }

        function y($, H) {
            const q = $.context(),
                G = s(7, q.offset, q.startLoc);
            return G.value = H, o(G, $.currentOffset(), $.currentPosition()), G
        }

        function E($) {
            const H = $.context(),
                q = s(6, H.offset, H.startLoc);
            let G = $.nextToken();
            if (G.type === 9) {
                const j = g($);
                q.modifier = j.node, G = j.nextConsumeToken || $.nextToken()
            }
            switch (G.type !== 10 && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(G)), G = $.nextToken(), G.type === 2 && (G = $.nextToken()), G.type) {
                case 11:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(G)), q.key = y($, G.value || "");
                    break;
                case 5:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(G)), q.key = f($, G.value || "");
                    break;
                case 6:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(G)), q.key = u($, G.value || "");
                    break;
                case 7:
                    G.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(G)), q.key = h($, G.value || "");
                    break;
                default:
                    n($, rt.UNEXPECTED_EMPTY_LINKED_KEY, H.lastStartLoc, 0);
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
            const H = $.context(),
                q = H.currentType === 1 ? $.currentOffset() : H.offset,
                G = H.currentType === 1 ? H.endLoc : H.startLoc,
                j = s(2, q, G);
            j.items = [];
            let J = null;
            do {
                const ue = J || $.nextToken();
                switch (J = null, ue.type) {
                    case 0:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), j.items.push(l($, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), j.items.push(u($, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), j.items.push(f($, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n($, rt.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, _n(ue)), j.items.push(h($, ue.value || ""));
                        break;
                    case 8:
                        const Ae = E($);
                        j.items.push(Ae.node), J = Ae.nextConsumeToken || null;
                        break
                }
            } while (H.currentType !== 14 && H.currentType !== 1);
            const oe = H.currentType === 1 ? H.lastOffset : $.currentOffset(),
                le = H.currentType === 1 ? H.lastEndLoc : $.currentPosition();
            return o(j, oe, le), j
        }

        function P($, H, q, G) {
            const j = $.context();
            let J = G.items.length === 0;
            const oe = s(1, H, q);
            oe.cases = [], oe.cases.push(G);
            do {
                const le = C($);
                J || (J = le.items.length === 0), oe.cases.push(le)
            } while (j.currentType !== 14);
            return J && n($, rt.MUST_HAVE_MESSAGES_IN_PLURAL, q, 0), o(oe, $.currentOffset(), $.currentPosition()), oe
        }

        function M($) {
            const H = $.context(),
                {
                    offset: q,
                    startLoc: G
                } = H,
                j = C($);
            return H.currentType === 14 ? j : P($, q, G, j)
        }

        function B($) {
            const H = ZQ($, er({}, e)),
                q = H.context(),
                G = s(0, q.offset, q.startLoc);
            return t && G.loc && (G.loc.source = $), G.body = M(H), q.currentType !== 14 && n(H, rt.UNEXPECTED_LEXICAL_ANALYSIS, q.lastStartLoc, 0, $[q.offset] || ""), o(G, H.currentOffset(), H.currentPosition()), G
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

    function nee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: o => (r.helpers.add(o), o)
        }
    }

    function Tb(e, t) {
        for (let r = 0; r < e.length; r++) Dp(e[r], t)
    }

    function Dp(e, t) {
        switch (e.type) {
            case 1:
                Tb(e.cases, t), t.helper("plural");
                break;
            case 2:
                Tb(e.items, t);
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

    function iee(e, t = {}) {
        const r = nee(e);
        r.helper("normalize"), e.body && Dp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function see(e, t) {
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

    function aee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ea(e, t.key), t.modifier ? (e.push(", "), ea(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function oee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let o = 0; o < s && (ea(e, t.items[o]), o !== s - 1); o++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function lee(e, t) {
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

    function cee(e, t) {
        t.body ? ea(e, t.body) : e.push("null")
    }

    function ea(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                cee(e, t);
                break;
            case 1:
                lee(e, t);
                break;
            case 2:
                oee(e, t);
                break;
            case 6:
                aee(e, t);
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
    const uee = (e, t = {}) => {
        const r = ye(t.mode) ? t.mode : "normal",
            n = ye(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            o = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            u = e.helpers || [],
            f = see(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: o,
                needIndent: l
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${u.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ea(f, e), f.deindent(l), f.push("}");
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

    function fee(e, t = {}) {
        const r = er({}, t),
            s = ree(r).parse(e);
        return iee(s, r), uee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const dee = {
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
    const hee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function pee(e) {
        return hee.test(e)
    }

    function gee(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function mee(e) {
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

    function vee(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : pee(t) ? gee(t) : "*" + t
    }

    function yee(e) {
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
                if (s = 0, l === void 0 || (l = vee(l), l === !1)) return !1;
                E[1]()
            }
        };

        function C() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, u = "\\" + P, E[0](), !0
        }
        for (; n !== null;)
            if (r++, o = e[r], !(o === "\\" && C())) {
                if (f = mee(o), y = Oi[n], h = y[f] || y.l || 8, h === 8 || (n = h[0], h[1] !== void 0 && (g = E[h[1]], g && (u = o, g() === !1)))) return;
                if (n === 7) return t
            }
    }
    const Sb = new Map;

    function _ee(e, t) {
        return bt(e) ? e[t] : null
    }

    function bee(e, t) {
        if (!bt(e)) return null;
        let r = Sb.get(t);
        if (r || (r = yee(t), r && Sb.set(t, r)), !r) return null;
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
    const Eee = e => e,
        Tee = e => "",
        See = "text",
        Oee = e => e.length === 0 ? "" : e.join(""),
        wee = HQ;

    function Ob(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function Cee(e) {
        const t = Bt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (Bt(e.named.count) || Bt(e.named.n)) ? Bt(e.named.count) ? e.named.count : Bt(e.named.n) ? e.named.n : t : t
    }

    function $ee(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function Iee(e = {}) {
        const t = e.locale,
            r = Cee(e),
            n = bt(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? e.pluralRules[t] : Ob,
            s = bt(e.pluralRules) && ye(t) && Pt(e.pluralRules[t]) ? Ob : void 0,
            o = $ => $[n(r, $.length, s)],
            l = e.list || [],
            u = $ => l[$],
            f = e.named || {};
        Bt(e.pluralIndex) && $ee(r, f);
        const h = $ => f[$];

        function g($) {
            const H = Pt(e.messages) ? e.messages($) : bt(e.messages) ? e.messages[$] : !1;
            return H || (e.parent ? e.parent.message($) : Tee)
        }
        const y = $ => e.modifiers ? e.modifiers[$] : Eee,
            E = Be(e.processor) && Pt(e.processor.normalize) ? e.processor.normalize : Oee,
            C = Be(e.processor) && Pt(e.processor.interpolate) ? e.processor.interpolate : wee,
            P = Be(e.processor) && ye(e.processor.type) ? e.processor.type : See,
            B = {
                list: u,
                named: h,
                plural: o,
                linked: ($, ...H) => {
                    const [q, G] = H;
                    let j = "text",
                        J = "";
                    H.length === 1 ? bt(q) ? (J = q.modifier || J, j = q.type || j) : ye(q) && (J = q || J) : H.length === 2 && (ye(q) && (J = q || J), ye(G) && (j = G || j));
                    let oe = g($)(B);
                    return j === "vnode" && _t(oe) && J && (oe = oe[0]), J ? y(J)(oe, j) : oe
                },
                message: g,
                type: P,
                interpolate: C,
                normalize: E
            };
        return B
    }
    let Aee = null;
    dee.FunctionTranslate;

    function Nee(e) {
        return t => Aee
    }
    const Ree = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Lee(e, t, r) {
        return [...new Set([r, ..._t(t) ? t : bt(t) ? Object.keys(t) : ye(t) ? [t] : [r]])]
    }

    function cS(e, t, r) {
        const n = ye(r) ? r : To,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let o = s.__localeChainCache.get(n);
        if (!o) {
            o = [];
            let l = [r];
            for (; _t(l);) l = wb(o, l, t);
            const u = _t(t) || !Be(t) ? t : t.default ? t.default : null;
            l = ye(u) ? [u] : u, _t(l) && wb(o, l, !1), s.__localeChainCache.set(n, o)
        }
        return o
    }

    function wb(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Xe(n); s++) {
            const o = t[s];
            ye(o) && (n = Pee(e, t[s], r))
        }
        return n
    }

    function Pee(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const o = s.join("-");
            n = kee(e, o, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function kee(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (_t(r) || Be(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const xee = "9.2.2",
        Zc = -1,
        To = "en-US",
        Cb = "",
        $b = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Dee() {
        return {
            upper: (e, t) => t === "text" && ye(e) ? e.toUpperCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && ye(e) ? e.toLowerCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && ye(e) ? $b(e) : t === "vnode" && bt(e) && "__v_isVNode" in e ? $b(e.children) : e
        }
    }
    let uS;

    function Mee(e) {
        uS = e
    }
    let fS;

    function Fee(e) {
        fS = e
    }
    let dS;

    function Uee(e) {
        dS = e
    }
    let Ib = 0;

    function Bee(e = {}) {
        const t = ye(e.version) ? e.version : xee,
            r = ye(e.locale) ? e.locale : To,
            n = _t(e.fallbackLocale) || Be(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Be(e.messages) ? e.messages : {
                [r]: {}
            },
            o = Be(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            l = Be(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            u = er({}, e.modifiers || {}, Dee()),
            f = e.pluralRules || {},
            h = Pt(e.missing) ? e.missing : null,
            g = Xe(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            y = Xe(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = !!e.fallbackFormat,
            C = !!e.unresolving,
            P = Pt(e.postTranslation) ? e.postTranslation : null,
            M = Be(e.processor) ? e.processor : null,
            B = Xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            $ = !!e.escapeParameter,
            H = Pt(e.messageCompiler) ? e.messageCompiler : uS,
            q = Pt(e.messageResolver) ? e.messageResolver : fS || _ee,
            G = Pt(e.localeFallbacker) ? e.localeFallbacker : dS || Lee,
            j = bt(e.fallbackContext) ? e.fallbackContext : void 0,
            J = Pt(e.onWarn) ? e.onWarn : GQ,
            oe = e,
            le = bt(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = bt(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            Ae = bt(oe.__meta) ? oe.__meta : {};
        Ib++;
        const $e = {
            version: t,
            cid: Ib,
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
            messageCompiler: H,
            messageResolver: q,
            localeFallbacker: G,
            fallbackContext: j,
            onWarn: J,
            __meta: Ae
        };
        return $e.datetimeFormats = o, $e.numberFormats = l, $e.__datetimeFormatters = le, $e.__numberFormatters = ue, $e
    }

    function Mp(e, t, r, n, s) {
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
    const jee = e => e;
    let Ab = Object.create(null);

    function Gee(e, t = {}) {
        {
            const n = (t.onCacheKey || jee)(e),
                s = Ab[n];
            if (s) return s;
            let o = !1;
            const l = t.onError || VQ;
            t.onError = h => {
                o = !0, l(h)
            };
            const {
                code: u
            } = fee(e, t), f = new Function(`return ${u}`)();
            return o ? f : Ab[n] = f
        }
    }
    let hS = rt.__EXTEND_POINT__;
    const sd = () => ++hS,
        Ps = {
            INVALID_ARGUMENT: hS,
            INVALID_DATE_ARGUMENT: sd(),
            INVALID_ISO_DATE_ARGUMENT: sd(),
            __EXTEND_POINT__: sd()
        };

    function ks(e) {
        return Jc(e, null, void 0)
    }
    const Nb = () => "",
        ns = e => Pt(e);

    function Rb(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: o,
            fallbackLocale: l,
            messages: u
        } = e, [f, h] = sh(...t), g = Xe(h.missingWarn) ? h.missingWarn : e.missingWarn, y = Xe(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, E = Xe(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, C = !!h.resolvedMessage, P = ye(h.default) || Xe(h.default) ? Xe(h.default) ? o ? f : () => f : h.default : r ? o ? f : () => f : "", M = r || P !== "", B = ye(h.locale) ? h.locale : e.locale;
        E && Wee(h);
        let [$, H, q] = C ? [f, B, u[B] || {}] : pS(e, f, B, l, y, g), G = $, j = f;
        if (!C && !(ye(G) || ns(G)) && M && (G = P, j = G), !C && (!(ye(G) || ns(G)) || !ye(H))) return s ? Zc : f;
        let J = !1;
        const oe = () => {
                J = !0
            },
            le = ns(G) ? G : gS(e, f, H, G, j, oe);
        if (J) return G;
        const ue = Kee(e, H, q, h),
            Ae = Iee(ue),
            $e = Hee(e, le, Ae);
        return n ? n($e, f) : $e
    }

    function Wee(e) {
        _t(e.list) ? e.list = e.list.map(t => ye(t) ? bb(t) : t) : bt(e.named) && Object.keys(e.named).forEach(t => {
            ye(e.named[t]) && (e.named[t] = bb(e.named[t]))
        })
    }

    function pS(e, t, r, n, s, o) {
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
            const B = Mp(e, t, E, o, P);
            B !== t && (C = B)
        }
        return [C, E, y]
    }

    function gS(e, t, r, n, s, o) {
        const {
            messageCompiler: l,
            warnHtmlMessage: u
        } = e;
        if (ns(n)) {
            const h = n;
            return h.locale = h.locale || r, h.key = h.key || t, h
        }
        if (l == null) {
            const h = () => n;
            return h.locale = r, h.key = t, h
        }
        const f = l(n, Vee(e, r, s, n, u, o));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function Hee(e, t, r) {
        return t(r)
    }

    function sh(...e) {
        const [t, r, n] = e, s = {};
        if (!ye(t) && !Bt(t) && !ns(t)) throw ks(Ps.INVALID_ARGUMENT);
        const o = Bt(t) ? String(t) : (ns(t), t);
        return Bt(r) ? s.plural = r : ye(r) ? s.default = r : Be(r) && !Xc(r) ? s.named = r : _t(r) && (s.list = r), Bt(n) ? s.plural = n : ye(n) ? s.default = n : Be(n) && er(s, n), [o, s]
    }

    function Vee(e, t, r, n, s, o) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw o && o(l), l
            },
            onCacheKey: l => UQ(t, r, l)
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
            messages: C => {
                let P = l(r, C);
                if (P == null && g) {
                    const [, , M] = pS(g, C, t, u, f, h);
                    P = l(M, C)
                }
                if (ye(P)) {
                    let M = !1;
                    const $ = gS(e, C, t, P, C, () => {
                        M = !0
                    });
                    return M ? Nb : $
                } else return ns(P) ? P : Nb
            }
        };
        return e.processor && (E.processor = e.processor), n.list && (E.list = n.list), n.named && (E.named = n.named), Bt(n.plural) && (E.pluralIndex = n.plural), E
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
        } = e, [f, h, g, y] = ah(...t), E = Xe(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Xe(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            P = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, P);
        if (!ye(f) || f === "") return new Intl.DateTimeFormat(P, y).format(h);
        let B = {},
            $, H = null;
        const q = "datetime format";
        for (let J = 0; J < M.length && ($ = M[J], B = r[$] || {}, H = B[f], !Be(H)); J++) Mp(e, f, $, E, q);
        if (!Be(H) || !ye($)) return n ? Zc : f;
        let G = `${$}__${f}`;
        Xc(y) || (G = `${G}__${JSON.stringify(y)}`);
        let j = u.get(G);
        return j || (j = new Intl.DateTimeFormat($, er({}, H, y)), u.set(G, j)), C ? j.formatToParts(h) : j.format(h)
    }
    const mS = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function ah(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {},
            u;
        if (ye(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw ks(Ps.INVALID_ISO_DATE_ARGUMENT);
            const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            u = new Date(h);
            try {
                u.toISOString()
            } catch {
                throw ks(Ps.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (jQ(t)) {
            if (isNaN(t.getTime())) throw ks(Ps.INVALID_DATE_ARGUMENT);
            u = t
        } else if (Bt(t)) u = t;
        else throw ks(Ps.INVALID_ARGUMENT);
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            mS.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (l = n), Be(s) && (l = s), [o.key || "", u, o, l]
    }

    function Pb(e, t, r) {
        const n = e;
        for (const s in r) {
            const o = `${t}__${s}`;
            !n.__datetimeFormatters.has(o) || n.__datetimeFormatters.delete(o)
        }
    }

    function kb(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: o,
            localeFallbacker: l
        } = e, {
            __numberFormatters: u
        } = e, [f, h, g, y] = oh(...t), E = Xe(g.missingWarn) ? g.missingWarn : e.missingWarn;
        Xe(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn;
        const C = !!g.part,
            P = ye(g.locale) ? g.locale : e.locale,
            M = l(e, s, P);
        if (!ye(f) || f === "") return new Intl.NumberFormat(P, y).format(h);
        let B = {},
            $, H = null;
        const q = "number format";
        for (let J = 0; J < M.length && ($ = M[J], B = r[$] || {}, H = B[f], !Be(H)); J++) Mp(e, f, $, E, q);
        if (!Be(H) || !ye($)) return n ? Zc : f;
        let G = `${$}__${f}`;
        Xc(y) || (G = `${G}__${JSON.stringify(y)}`);
        let j = u.get(G);
        return j || (j = new Intl.NumberFormat($, er({}, H, y)), u.set(G, j)), C ? j.formatToParts(h) : j.format(h)
    }
    const vS = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function oh(...e) {
        const [t, r, n, s] = e, o = {};
        let l = {};
        if (!Bt(t)) throw ks(Ps.INVALID_ARGUMENT);
        const u = t;
        return ye(r) ? o.key = r : Be(r) && Object.keys(r).forEach(f => {
            vS.includes(f) ? l[f] = r[f] : o[f] = r[f]
        }), ye(n) ? o.locale = n : Be(n) && (l = n), Be(s) && (l = s), [o.key || "", u, o, l]
    }

    function xb(e, t, r) {
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
    const Yee = "9.2.2";
    Ree.__EXTEND_POINT__;
    let yS = rt.__EXTEND_POINT__;
    const Er = () => ++yS,
        Mt = {
            UNEXPECTED_RETURN_TYPE: yS,
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
        return Jc(e, null, void 0)
    }
    const lh = Si("__transrateVNode"),
        ch = Si("__datetimeParts"),
        uh = Si("__numberParts"),
        _S = Si("__setPluralRules");
    Si("__intlifyMeta");
    const bS = Si("__injectWithOption");

    function fh(e) {
        if (!bt(e)) return e;
        for (const t in e)
            if (!!kp(e, t))
                if (!t.includes(".")) bt(e[t]) && fh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let o = 0; o < n; o++) r[o] in s || (s[r[o]] = {}), s = s[r[o]];
                    s[r[n]] = e[t], delete e[t], bt(s[r[n]]) && fh(s[r[n]])
                } return e
    }

    function Qc(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: o
        } = t, l = Be(r) ? r : _t(n) ? {} : {
            [e]: {}
        };
        if (_t(n) && n.forEach(u => {
                if ("locale" in u && "resource" in u) {
                    const {
                        locale: f,
                        resource: h
                    } = u;
                    f ? (l[f] = l[f] || {}, qa(h, l[f])) : qa(h, l)
                } else ye(u) && qa(JSON.parse(u), l)
            }), s == null && o)
            for (const u in l) kp(l, u) && fh(l[u]);
        return l
    }
    const Al = e => !bt(e) || _t(e);

    function qa(e, t) {
        if (Al(e) || Al(t)) throw Gt(Mt.INVALID_VALUE);
        for (const r in e) kp(e, r) && (Al(e[r]) || Al(t[r]) ? t[r] = e[r] : qa(e[r], t[r]))
    }

    function qee(e) {
        return e.type
    }

    function ES(e, t, r) {
        let n = bt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Qc(e.locale.value, {
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

    function Db(e) {
        return nt(bc, null, e, 0)
    }
    let Mb = 0;

    function Fb(e) {
        return (t, r, n, s) => e(r, n, is() || void 0, s)
    }

    function Fp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Xe(e.inheritLocale) ? e.inheritLocale : !0;
        const o = on(r && s ? r.locale.value : ye(e.locale) ? e.locale : To),
            l = on(r && s ? r.fallbackLocale.value : ye(e.fallbackLocale) || _t(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value),
            u = on(Qc(o.value, e)),
            f = on(Be(e.datetimeFormats) ? e.datetimeFormats : {
                [o.value]: {}
            }),
            h = on(Be(e.numberFormats) ? e.numberFormats : {
                [o.value]: {}
            });
        let g = r ? r.missingWarn : Xe(e.missingWarn) || gi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : Xe(e.fallbackWarn) || gi(e.fallbackWarn) ? e.fallbackWarn : !0,
            E = r ? r.fallbackRoot : Xe(e.fallbackRoot) ? e.fallbackRoot : !0,
            C = !!e.fallbackFormat,
            P = Pt(e.missing) ? e.missing : null,
            M = Pt(e.missing) ? Fb(e.missing) : null,
            B = Pt(e.postTranslation) ? e.postTranslation : null,
            $ = r ? r.warnHtmlMessage : Xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const q = r ? r.modifiers : Be(e.modifiers) ? e.modifiers : {};
        let G = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const A = {
                version: Yee,
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
                escapeParameter: H,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return A.datetimeFormats = f.value, A.numberFormats = h.value, A.__datetimeFormatters = Be(j) ? j.__datetimeFormatters : void 0, A.__numberFormatters = Be(j) ? j.__numberFormatters : void 0, Bee(A)
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
            A !== null && (M = Fb(A)), P = A, j.missing = M
        }
        const be = (A, W, he, pe, Ne, xe) => {
            oe();
            let w;
            if (w = A(j), Bt(w) && w === Zc) {
                const [T, R] = W();
                return r && E ? pe(r) : Ne(T)
            } else {
                if (xe(w)) return w;
                throw Gt(Mt.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ve(...A) {
            return be(W => Reflect.apply(Rb, null, [W, ...A]), () => sh(...A), "translate", W => Reflect.apply(W.t, W, [...A]), W => W, W => ye(W))
        }

        function Se(...A) {
            const [W, he, pe] = A;
            if (pe && !bt(pe)) throw Gt(Mt.INVALID_ARGUMENT);
            return ve(W, he, er({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Fe(...A) {
            return be(W => Reflect.apply(Lb, null, [W, ...A]), () => ah(...A), "datetime format", W => Reflect.apply(W.d, W, [...A]), () => Cb, W => ye(W))
        }

        function Ge(...A) {
            return be(W => Reflect.apply(kb, null, [W, ...A]), () => oh(...A), "number format", W => Reflect.apply(W.n, W, [...A]), () => Cb, W => ye(W))
        }

        function et(A) {
            return A.map(W => ye(W) || Bt(W) || Xe(W) ? Db(String(W)) : W)
        }
        const Cr = {
            normalize: et,
            interpolate: A => A,
            type: "vnode"
        };

        function rr(...A) {
            return be(W => {
                let he;
                const pe = W;
                try {
                    pe.processor = Cr, he = Reflect.apply(Rb, null, [pe, ...A])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => sh(...A), "translate", W => W[lh](...A), W => [Db(W)], W => _t(W))
        }

        function mr(...A) {
            return be(W => Reflect.apply(kb, null, [W, ...A]), () => oh(...A), "number format", W => W[uh](...A), () => [], W => ye(W) || _t(W))
        }

        function ot(...A) {
            return be(W => Reflect.apply(Lb, null, [W, ...A]), () => ah(...A), "datetime format", W => W[ch](...A), () => [], W => ye(W) || _t(W))
        }

        function St(A) {
            G = A, j.pluralRules = G
        }

        function lt(A, W) {
            const he = ye(W) ? W : o.value,
                pe = Dt(he);
            return j.messageResolver(pe, A) !== null
        }

        function xt(A) {
            let W = null;
            const he = cS(j, l.value, o.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Ne = u.value[he[pe]] || {},
                    xe = j.messageResolver(Ne, A);
                if (xe != null) {
                    W = xe;
                    break
                }
            }
            return W
        }

        function Ht(A) {
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
            u.value[A] = u.value[A] || {}, qa(W, u.value[A]), j.messages = u.value
        }

        function O(A) {
            return f.value[A] || {}
        }

        function D(A, W) {
            f.value[A] = W, j.datetimeFormats = f.value, Pb(j, A, W)
        }

        function U(A, W) {
            f.value[A] = er(f.value[A] || {}, W), j.datetimeFormats = f.value, Pb(j, A, W)
        }

        function K(A) {
            return h.value[A] || {}
        }

        function ce(A, W) {
            h.value[A] = W, j.numberFormats = h.value, xb(j, A, W)
        }

        function se(A, W) {
            h.value[A] = er(h.value[A] || {}, W), j.numberFormats = h.value, xb(j, A, W)
        }
        Mb++, r && nh && (Zi(r.locale, A => {
            s && (o.value = A, j.locale = A, La(j, o.value, l.value))
        }), Zi(r.fallbackLocale, A => {
            s && (l.value = A, j.fallbackLocale = A, La(j, o.value, l.value))
        }));
        const re = {
            id: Mb,
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
                return H
            },
            set escapeParameter(A) {
                H = A, j.escapeParameter = A
            },
            t: ve,
            getLocaleMessage: Dt,
            setLocaleMessage: m,
            mergeLocaleMessage: p,
            getPostTranslationHandler: Ce,
            setPostTranslationHandler: F,
            getMissingHandler: ie,
            setMissingHandler: de,
            [_S]: St
        };
        return re.datetimeFormats = $e, re.numberFormats = fe, re.rt = Se, re.te = lt, re.tm = Ht, re.d = Fe, re.n = Ge, re.getDateTimeFormat = O, re.setDateTimeFormat = D, re.mergeDateTimeFormat = U, re.getNumberFormat = K, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[bS] = e.__injectWithOption, re[lh] = rr, re[ch] = ot, re[uh] = mr, re
    }

    function zee(e) {
        const t = ye(e.locale) ? e.locale : To,
            r = ye(e.fallbackLocale) || _t(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = Pt(e.missing) ? e.missing : void 0,
            s = Xe(e.silentTranslationWarn) || gi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            o = Xe(e.silentFallbackWarn) || gi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            l = Xe(e.fallbackRoot) ? e.fallbackRoot : !0,
            u = !!e.formatFallbackMessages,
            f = Be(e.modifiers) ? e.modifiers : {},
            h = e.pluralizationRules,
            g = Pt(e.postTranslation) ? e.postTranslation : void 0,
            y = ye(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            E = !!e.escapeParameterHtml,
            C = Xe(e.sync) ? e.sync : !0;
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
        } = e, H = e.datetimeFormats, q = e.numberFormats, G = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: P,
            flatJson: G,
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
            escapeParameter: E,
            messageResolver: e.messageResolver,
            inheritLocale: C,
            __i18n: M,
            __root: B,
            __injectWithOption: $
        }
    }

    function dh(e = {}, t) {
        {
            const r = Fp(zee(e)),
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
                        return Xe(r.missingWarn) ? !r.missingWarn : r.missingWarn
                    },
                    set silentTranslationWarn(s) {
                        r.missingWarn = Xe(s) ? !s : s
                    },
                    get silentFallbackWarn() {
                        return Xe(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn
                    },
                    set silentFallbackWarn(s) {
                        r.fallbackWarn = Xe(s) ? !s : s
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
                        const y = o;
                        return ye(l) ? f.locale = l : _t(l) ? h = l : Be(l) && (g = l), _t(u) ? h = u : Be(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
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
                        const y = o;
                        return ye(l) ? f.locale = l : Bt(l) ? f.plural = l : _t(l) ? h = l : Be(l) && (g = l), ye(u) ? f.locale = u : _t(u) ? h = u : Be(u) && (g = u), Reflect.apply(r.t, r, [y, h || g || {}, f])
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
    const Up = {
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

    function Xee({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ..._t(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function TS(e) {
        return Qe
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
                validator: e => Bt(e) || !isNaN(e)
            }
        }, Up),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Bp({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const o = Object.keys(r).filter(y => y !== "_"),
                    l = {};
                e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = ye(e.plural) ? +e.plural : e.plural);
                const u = Xee(t, o),
                    f = s[lh](e.keypath, u, l),
                    h = er({}, n),
                    g = ye(e.tag) || bt(e.tag) ? e.tag : TS();
                return Ph(g, h, f)
            }
        }
    };

    function Jee(e) {
        return _t(e) && !ye(e[0])
    }

    function SS(e, t, r, n) {
        const {
            slots: s,
            attrs: o
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let u = {};
            e.locale && (l.locale = e.locale), ye(e.format) ? l.key = e.format : bt(e.format) && (ye(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((E, C) => r.includes(C) ? er({}, E, {
                [C]: e.format[C]
            }) : E, {}));
            const f = n(e.value, l, u);
            let h = [l.key];
            _t(f) ? h = f.map((E, C) => {
                const P = s[E.type],
                    M = P ? P({
                        [E.type]: E.value,
                        index: C,
                        parts: f
                    }) : [E.value];
                return Jee(M) && (M[0].key = `${E.type}-${C}`), M
            }) : ye(f) && (h = [f]);
            const g = er({}, o),
                y = ye(e.tag) || bt(e.tag) ? e.tag : TS();
            return Ph(y, g, h)
        }
    }
    const Bb = {
            name: "i18n-n",
            props: er({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Up),
            setup(e, t) {
                const r = e.i18n || Bp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return SS(e, t, vS, (...n) => r[uh](...n))
            }
        },
        jb = {
            name: "i18n-d",
            props: er({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Up),
            setup(e, t) {
                const r = e.i18n || Bp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return SS(e, t, mS, (...n) => r[ch](...n))
            }
        };

    function Zee(e, t) {
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
            const g = Zee(e, u.$),
                y = Gb(h);
            return [Reflect.apply(g.t, g, [...Wb(y)]), g]
        };
        return {
            created: (l, u) => {
                const [f, h] = t(u);
                nh && e.global === h && (l.__i18nWatcher = Zi(h.locale, () => {
                    u.instance && u.instance.$forceUpdate()
                })), l.__composer = h, l.textContent = f
            },
            unmounted: l => {
                nh && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer)
            },
            beforeUpdate: (l, {
                value: u
            }) => {
                if (l.__composer) {
                    const f = l.__composer,
                        h = Gb(u);
                    l.textContent = Reflect.apply(f.t, f, [...Wb(h)])
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

    function Gb(e) {
        if (ye(e)) return {
            path: e
        };
        if (Be(e)) {
            if (!("path" in e)) throw Gt(Mt.REQUIRED_VALUE, "path");
            return e
        } else throw Gt(Mt.INVALID_VALUE)
    }

    function Wb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: o
        } = e, l = {}, u = n || {};
        return ye(r) && (l.locale = r), Bt(s) && (l.plural = s), Bt(o) && (l.plural = o), [t, u, l]
    }

    function ete(e, t, ...r) {
        const n = Be(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Xe(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : Ub.name, Ub), e.component(Bb.name, Bb), e.component(jb.name, jb)), e.directive("t", Qee(t))
    }

    function tte(e, t, r) {
        return {
            beforeCreate() {
                const n = is();
                if (!n) throw Gt(Mt.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const o = s.i18n;
                    s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root ? this.$i18n = Hb(e, o) : (o.__injectWithOption = !0, this.$i18n = dh(o))
                } else s.__i18n ? this === this.$root ? this.$i18n = Hb(e, s) : this.$i18n = dh({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && ES(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, l) => this.$i18n.te(o, l), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = o => this.$i18n.tm(o)
            },
            mounted() {},
            unmounted() {
                const n = is();
                if (!n) throw Gt(Mt.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function Hb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[_S](t.pluralizationRules || e.pluralizationRules);
        const r = Qc(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const rte = Si("global-vue-i18n");

    function nte(e = {}, t) {
        const r = Xe(e.legacy) ? e.legacy : !0,
            n = Xe(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            o = new Map,
            [l, u] = ite(e, r),
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
                    C.__VUE_I18N_SYMBOL__ = f, C.provide(C.__VUE_I18N_SYMBOL__, E), !r && n && hte(C, E.global), ete(C, E, ...P), r && C.mixin(tte(u, u.__composer, E));
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

    function Bp(e = {}) {
        const t = is();
        if (t == null) throw Gt(Mt.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Gt(Mt.NOT_INSLALLED);
        const r = ste(t),
            n = ote(r),
            s = qee(t),
            o = ate(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Gt(Mt.NOT_AVAILABLE_IN_LEGACY_MODE);
            return ute(t, o, n, e)
        }
        if (o === "global") return ES(n, e, s), n;
        if (o === "parent") {
            let f = lte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let u = l.__getInstance(t);
        if (u == null) {
            const f = er({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), u = Fp(f), cte(l, t), l.__setInstance(t, u)
        }
        return u
    }

    function ite(e, t, r) {
        const n = bR(); {
            const s = t ? n.run(() => dh(e)) : n.run(() => Fp(e));
            if (s == null) throw Gt(Mt.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function ste(e) {
        {
            const t = Ji(e.isCE ? rte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Gt(e.isCE ? Mt.NOT_INSLALLED_WITH_PROVIDE : Mt.UNEXPECTED_ERROR);
            return t
        }
    }

    function ate(e, t) {
        return Xc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function ote(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function lte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let o = t.parent;
        for (; o != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(o);
            else {
                const u = l.__getInstance(o);
                u != null && (n = u.__composer, r && n && !n[bS] && (n = null))
            }
            if (n != null || s === o) break;
            o = o.parent
        }
        return n
    }

    function cte(e, t, r) {
        $h(() => {}, t), Ih(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function ute(e, t, r, n = {}) {
        const s = t === "local",
            o = qR(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Gt(Mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Xe(n.inheritLocale) ? n.inheritLocale : !0,
            u = on(s && l ? r.locale.value : ye(n.locale) ? n.locale : To),
            f = on(s && l ? r.fallbackLocale.value : ye(n.fallbackLocale) || _t(n.fallbackLocale) || Be(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : u.value),
            h = on(Qc(u.value, n)),
            g = on(Be(n.datetimeFormats) ? n.datetimeFormats : {
                [u.value]: {}
            }),
            y = on(Be(n.numberFormats) ? n.numberFormats : {
                [u.value]: {}
            }),
            E = s ? r.missingWarn : Xe(n.missingWarn) || gi(n.missingWarn) ? n.missingWarn : !0,
            C = s ? r.fallbackWarn : Xe(n.fallbackWarn) || gi(n.fallbackWarn) ? n.fallbackWarn : !0,
            P = s ? r.fallbackRoot : Xe(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            B = Pt(n.missing) ? n.missing : null,
            $ = Pt(n.postTranslation) ? n.postTranslation : null,
            H = s ? r.warnHtmlMessage : Xe(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
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

        function Se(...p) {
            return o.value ? de(() => Reflect.apply(o.value.d, null, [...p])) : de(() => "")
        }

        function Fe(...p) {
            return o.value ? de(() => Reflect.apply(o.value.n, null, [...p])) : de(() => "")
        }

        function Ge(p) {
            return o.value ? o.value.tm(p) : {}
        }

        function et(p, O) {
            return o.value ? o.value.te(p, O) : !1
        }

        function $t(p) {
            return o.value ? o.value.getLocaleMessage(p) : {}
        }

        function Cr(p, O) {
            o.value && (o.value.setLocaleMessage(p, O), h.value[p] = O)
        }

        function rr(p, O) {
            o.value && o.value.mergeLocaleMessage(p, O)
        }

        function mr(p) {
            return o.value ? o.value.getDateTimeFormat(p) : {}
        }

        function ot(p, O) {
            o.value && (o.value.setDateTimeFormat(p, O), g.value[p] = O)
        }

        function St(p, O) {
            o.value && o.value.mergeDateTimeFormat(p, O)
        }

        function lt(p) {
            return o.value ? o.value.getNumberFormat(p) : {}
        }

        function xt(p, O) {
            o.value && (o.value.setNumberFormat(p, O), y.value[p] = O)
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
            t: be,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Ce,
            getMissingHandler: F,
            setMissingHandler: ie,
            rt: ve,
            d: Se,
            n: Fe,
            tm: Ge,
            te: et,
            getLocaleMessage: $t,
            setLocaleMessage: Cr,
            mergeLocaleMessage: rr,
            getDateTimeFormat: mr,
            setDateTimeFormat: ot,
            mergeDateTimeFormat: St,
            getNumberFormat: lt,
            setNumberFormat: xt,
            mergeNumberFormat: Ht
        };

        function m(p) {
            p.locale.value = u.value, p.fallbackLocale.value = f.value, Object.keys(h.value).forEach(O => {
                p.mergeLocaleMessage(O, h.value[O])
            }), Object.keys(g.value).forEach(O => {
                p.mergeDateTimeFormat(O, g.value[O])
            }), Object.keys(y.value).forEach(O => {
                p.mergeNumberFormat(O, y.value[O])
            }), p.escapeParameter = q, p.fallbackFormat = M, p.fallbackRoot = P, p.fallbackWarn = C, p.missingWarn = E, p.warnHtmlMessage = H
        }
        return AE(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Gt(Mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const p = o.value = e.proxy.$i18n.__composer;
            t === "global" ? (u.value = p.locale.value, f.value = p.fallbackLocale.value, h.value = p.messages.value, g.value = p.datetimeFormats.value, y.value = p.numberFormats.value) : s && m(p)
        }), Dt
    }
    const fte = ["locale", "fallbackLocale", "availableLocales"],
        dte = ["t", "rt", "d", "n", "tm"];

    function hte(e, t) {
        const r = Object.create(null);
        fte.forEach(n => {
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
        }), e.config.globalProperties.$i18n = r, dte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Gt(Mt.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Mee(Gee);
    Fee(bee);
    Uee(cS);
    const pte = at({
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
        gte = "main/pp9/fourbage/assets/c8afd972.svg",
        mte = {
            class: "constrain"
        },
        vte = {
            class: "text"
        },
        yte = {
            class: "subtext"
        },
        _te = {
            key: 0,
            class: "warning"
        },
        bte = {
            key: 1,
            class: "spinner"
        };

    function Ete(e, t, r, n, s, o) {
        return Y(), Or(Oc, {
            name: "toast-transition"
        }, {
            default: Fs(() => [e.isVisible && e.options ? (Y(), X("div", {
                key: 0,
                class: Me([e.options.type, "jbg toast"])
            }, [Z("div", mte, [Z("img", {
                class: "close",
                alt: "close",
                src: gte,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = Us((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), Z("p", vte, yt(e.options.text), 1), Z("p", yte, yt(e.options.subtext), 1), e.options.warning ? (Y(), X("p", _te, yt(e.options.warning), 1)) : we("", !0), e.options.type === "reconnecting" ? (Y(), X("div", bte)) : we("", !0)])], 2)) : we("", !0)]),
            _: 1
        })
    }
    const Tte = tt(pte, [
            ["render", Ete],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        Ste = {
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
                e.component("Toast", Tte), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        Ote = at({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Ji(_o.fatal.error)
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

    function wte(e, t, r, n, s, o) {
        const l = Yt("Fatal"),
            u = Yt("TextDescriptions"),
            f = Yt("Debug"),
            h = Yt("Modal"),
            g = Yt("Toast");
        return e.shouldShowFatal ? (Y(), Or(l, {
            key: 0
        })) : (Y(), X(Qe, {
            key: 1
        }, [nt(u), (Y(), Or(_c(e.mainView), Tc({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), nt(f), nt(h), nt(g)], 64))
    }
    const Vb = tt(Ote, [
            ["render", wte]
        ]),
        Cte = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Sr.WSClient(r), t.connect()),
                mount: r => {
                    var l, u, f, h;
                    Vb.name = r.app;
                    let n = x2(Vb, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (u = r.match) == null ? void 0 : u.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const o = nte({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(DB, (h = e.messages) != null ? h : {})
                    });
                    if (n.use(BH), n.use(NQ), n.use(mz, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(xX, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(RZ), n.use(o), n.use(oQ, {
                            i18n: o
                        }), n.use(xQ), n.use(DQ), n.use(Ste), n.use(MQ), e.plugins) {
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
        $te = {
            SUBMIT: "SUBMIT",
            SUBMIT_BUTTON: "submit button",
            NEXT_INSTRUCTION: "QUESTION 1/2",
            PREVIOUS_INSTRUCTION: "QUESTION 2/2",
            NEXT_TEXT: "NEXT",
            PREVIOUS_TEXT: "PREVIOUS",
            CHOICE_BUTTON: "choice button"
        },
        Ite = {
            AVATAR_INSTRUCTION: "PICK YOUR CREATURE",
            PLAYER_NAME_INSTRUCTION: "YOU MAY WANT TO USE YOUR REAL NAME FOR ENOUGH ABOUT YOU MODE, YOU CAN CHANGE IT HERE",
            SUBMIT_NAME: "SUBMIT NAME",
            NAME_ENTRY: "name entry box",
            NAME_SUBMIT: "name submit button"
        },
        Ate = {
            SINGLE_INSTRUCTION: "ENTER A LIE",
            DOUBLE_INSTRUCTION: "ENTER A LIE FOR EACH",
            FINALROUND_INSTRUCTION: "ENTER A LIE THAT FITS BOTH",
            LIE_FOR_ME_INSTRUCTION: "PICK A LIE",
            JOINING_PHRASE: "OR",
            LIE_FOR_ME: "LIE FOR ME",
            SEPARATOR: "&",
            TEXT_INPUT_1: "text input",
            TEXT_INPUT_2: "second text input",
            LIE_BUTTON: "lie for me button",
            PROHIBITED_LANGUAGE: "Your entry contains prohibited language. Try again!"
        },
        Nte = {
            PICK_TRUTH: "PICK THE TRUTH",
            PICK_CATEGORY: "PICK A CATEGORY",
            AWARD_LIKES: "AWARD LIKES"
        },
        Rte = {
            WAITING: "WAITING"
        },
        Lte = {
            VOTE_INSTRUCTION: "VOTE FOR YOUR FAVORITE",
            LIKE_INSTRUCTION: "AWARD A LIKE",
            AUDIENCE: "AUDIENCE"
        },
        Pte = {
            RABBIT_WAITING: "an image of manmade horrors beyond comprehension",
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
            AVATAR7_ON: "eyeball avatar - available"
        },
        kte = {
            SHARED: $te,
            LOBBY: Ite,
            WRITING: Ate,
            CHOOSING: Nte,
            WAITING: Rte,
            VOTING: Lte,
            ALT: Pte
        },
        xte = {
            en: kte
        },
        Dte = {},
        Mte = {
            viewBox: "0 0 299 58",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Fte = HE('<path d="M51.0001 56.64V2.89375H51.9608C58.6312 2.89375 65.2999 2.83284 71.9738 2.9303C74.0301 2.94923 76.0762 3.22398 78.0647 3.74822C82.2779 4.89332 84.9979 7.72472 86.1656 11.9275C87.1297 15.408 87.2446 18.9042 85.9637 22.3534C85.0797 24.7341 83.6927 26.704 81.1502 27.9222C81.7575 28.0667 82.1682 28.1624 82.5789 28.2703C88.1077 29.6277 91.0853 33.0838 91.8267 38.9642C92.1956 41.8878 91.8754 44.7558 90.7268 47.4915C88.8874 51.8212 85.4156 54.2419 81.0753 55.5976C78.8598 56.2944 76.5516 56.6517 74.2291 56.6574C66.7193 56.6748 59.2089 56.6806 51.698 56.6748C51.4978 56.6748 51.296 56.6557 51.0001 56.64ZM64.9675 45.7982C66.0743 45.7982 67.1097 45.8191 68.1435 45.7982C70.3414 45.7442 72.5533 45.7529 74.6538 44.9629C76.8239 44.1449 77.8872 42.4499 77.8089 40.0014C77.7271 37.4171 76.6394 35.7986 74.3945 35.1408C71.3159 34.2376 68.1522 34.6066 64.9675 34.5352V45.7982ZM64.9675 24.0745C66.257 24.0745 67.4508 24.1598 68.622 24.0466C69.5706 23.9652 70.5016 23.7417 71.3838 23.3836C73.2389 22.604 74.036 21.0395 74.0795 19.0973C74.123 17.1552 73.6079 15.4654 71.7493 14.4978C69.5966 13.3788 67.282 13.6625 64.9622 13.6851L64.9675 24.0745Z" fill="white"></path><path d="M142.193 2.67622H157.471C164.2 20.5499 170.936 38.4485 177.677 56.372H162.756L159.471 47.4358H139.952C138.751 50.4151 137.542 53.4101 136.346 56.3755H121.589C128.47 38.4369 135.321 20.5853 142.193 2.67622ZM149.711 19.3532L143.854 36.6931H155.731C153.735 30.9381 151.767 25.2718 149.711 19.3532Z" fill="white"></path><path d="M89.4547 28.9055V3.07126C89.6202 3.02397 89.7898 2.99193 89.9611 2.97555C97.4982 2.99817 105.039 2.94596 112.574 3.09041C116.082 3.15654 119.286 4.32077 121.797 6.93987C123.901 9.12738 124.839 11.8387 125.174 14.771C125.539 17.9644 125.28 21.0795 123.714 23.9805C122.854 25.5746 121.716 26.8902 120.09 27.7395C119.974 27.8004 119.869 27.8857 119.662 28.0266C123.038 28.6879 125.976 29.8904 128.035 32.7497C125.102 40.3895 122.17 48.0292 119.159 55.8952C117.52 56.1388 115.79 56.5756 114.05 56.6209C109.038 56.7497 104.021 56.727 99.0053 56.7514C96.1652 56.7653 93.3233 56.7514 90.478 56.7514H89.4808V53.652C96.0503 47.6046 96.0068 34.5004 89.4547 28.9055ZM103.441 45.7529C105.436 45.7529 107.376 45.8208 109.308 45.7268C110.462 45.6665 111.605 45.4697 112.713 45.1404C115.183 44.4129 116.356 42.6501 116.265 40.0362C116.171 37.2866 114.962 35.6977 112.4 35.0782C109.466 34.3681 106.474 34.617 103.438 34.5561L103.441 45.7529ZM103.431 24.1406C105.519 24.1041 107.545 24.3738 109.497 23.6185C111.575 22.8163 112.616 21.1369 112.55 18.6849C112.489 16.4069 111.377 14.8563 109.297 14.1776C107.383 13.5529 105.436 13.6834 103.431 13.7199V24.1406Z" fill="white"></path><path d="M189.212 24.7532L215.766 32.7584C215.629 33.2091 215.512 33.6164 215.382 34.0184C213.816 38.8754 211.886 43.5724 208.421 47.4184C202.781 53.6694 195.733 56.5426 187.289 55.8412C184.619 55.6202 182.038 54.9937 179.442 54.1462C174.329 40.5617 169.21 26.9604 164.086 13.3423C165.914 10.1568 168.375 7.37962 171.318 5.1822C177.127 0.882012 183.674 -0.60069 190.785 0.213753C196.018 0.814144 200.878 2.47609 205.318 5.34231C211.297 9.21265 214.367 14.9329 215.716 21.7443C215.747 21.9983 215.764 22.254 215.765 22.51L201.646 23.9022C201.314 22.6301 201.098 21.398 200.673 20.2477C197.607 11.884 187.78 10.5231 182.132 14.4126C177.82 17.3832 175.41 21.612 174.507 26.7023C173.861 30.3394 174.332 33.8374 176.073 37.1647C179.143 43.0538 186.963 45.0307 191.182 43.6037C193.773 42.7336 196.133 40.7149 196.935 38.463L186.079 35.1791C187.122 31.6968 188.152 28.272 189.212 24.7532Z" fill="white"></path><path d="M217.686 56.607V2.94074H248.141V14.7154H231.658V23.709H247.251V35.5306H231.653V44.8097H248.165V56.607H217.686Z" fill="white"></path><path d="M0.00173665 3.22614H30.6895V15.0077H13.9743V23.9405H29.1685V35.7969H13.9221V56.9028H0L0.00173665 3.22614Z" fill="white"></path><path d="M48.5237 56.1301L41.775 57.3083C38.6808 39.6342 35.597 22.0245 32.5011 4.33469L46.2352 1.92965C46.5294 3.56376 46.8148 5.11955 47.0862 6.67534C47.5213 9.15696 47.9564 11.6386 48.3688 14.1237C48.4672 14.7231 48.516 15.3296 48.515 15.937C48.5231 29.0969 48.5231 42.2579 48.515 55.4201L48.5237 56.1301Z" fill="white"></path><path d="M292.242 35.7812H298.747V46.4752H292.235V56.607H279.37V46.4752H253.405V37.5511L274.07 2.97555H292.242V35.7812ZM279.376 35.7812V13.9114L266.753 35.7812H279.376Z" fill="#4EFF94"></path>', 8),
        Ute = [Fte];

    function Bte(e, t) {
        return Y(), X("svg", Mte, Ute)
    }
    const OS = tt(Dte, [
            ["render", Bte]
        ]),
        jte = at({
            components: {
                FourbageLogo: OS,
                Input: $T,
                LobbyActions: CT
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
                    this.playerName = this.playerName.toUpperCase(), this.playerName = ar.sanitizeEmoji(this.playerName);
                    try {
                        this.player.playerNameTextKey && await this.$ecast.updateText(this.player.playerNameTextKey, this.playerName)
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                "info.avatar": function() {
                    this.selectedIndex = this.info.avatar
                }
            },
            mounted() {
                this.selectedIndex = this.info.avatar
            },
            methods: {
                async submitName() {
                    if (!this.player.responseKey || !this.player.playerNameTextKey) console.error("missing response key or keys");
                    else if (!this.isSubmittingName) {
                        this.isSubmittingName = !0;
                        try {
                            await this.$ecast.lock(this.player.playerNameTextKey).then(async () => {
                                await this.$ecast.updateObject(this.player.responseKey, {
                                    action: "name"
                                })
                            })
                        } catch (e) {
                            this.$handleEcastError(e)
                        }
                    }
                },
                async submitAvatar(e) {
                    var t;
                    if (!this.player.responseKey) console.error("missing response key");
                    else if (!this.isSubmitting && ((t = this.player.avatars.find(r => r.name.toLowerCase() === `avatar${e}`.toLowerCase())) == null ? void 0 : t.available)) {
                        this.isSubmitting = !0, this.selectedIndex = e;
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
        Gte = {
            class: "lobby"
        },
        Wte = {
            class: "instruction avatar-instruction"
        },
        Hte = {
            key: 0,
            class: "avatar-container"
        },
        Vte = {
            class: "avatar-row"
        },
        Kte = ["onClick"],
        Yte = ["src", "alt"],
        qte = ["src", "alt"],
        zte = {
            class: "avatar-row"
        },
        Xte = ["onClick"],
        Jte = ["src", "alt"],
        Zte = ["src", "alt"],
        Qte = {
            class: "avatar-row"
        },
        ere = ["onClick"],
        tre = ["src", "alt"],
        rre = ["src", "alt"],
        nre = {
            key: 1,
            class: "instruction eay-instruction"
        },
        ire = {
            key: 2,
            class: "eay-name-change-container"
        },
        sre = ["disabled", "aria-label"];

    function are(e, t, r, n, s, o) {
        const l = Yt("FourbageLogo"),
            u = Yt("LobbyActions"),
            f = Yt("Input"),
            h = At("t");
        return Y(), X("div", Gte, [nt(l, {
            class: "logo lobby-logo"
        }), Ie(Z("span", Wte, null, 512), [
            [h, "LOBBY.AVATAR_INSTRUCTION"]
        ]), e.player.avatars ? (Y(), X("div", Hte, [Z("div", Vte, [(Y(), X(Qe, null, un(3, (g, y) => {
            var E;
            return Z("button", {
                key: `button${y}`,
                class: Me(["avatar-button", y === e.selectedIndex ? "selected" : ""]),
                onClick: C => e.submitAvatar(y)
            }, [e.images[`avatar${y}On`] && (((E = e.player.avatars.find(C => C.name.toLowerCase() === `avatar${y}`.toLowerCase())) == null ? void 0 : E.available) || e.selectedIndex === y) ? (Y(), X("img", {
                key: 0,
                class: Me(["avatar-image", y === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${y}On`].src,
                alt: e.images[`avatar${y}On`].alt
            }, null, 10, Yte)) : e.images[`avatar${y}Off`] ? (Y(), X("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${y}Off`].src,
                alt: e.images[`avatar${y}Off`].alt
            }, null, 8, qte)) : we("", !0)], 10, Kte)
        }), 64))]), Z("div", zte, [(Y(), X(Qe, null, un(2, (g, y) => {
            var E;
            return Z("button", {
                key: `button${y+3}`,
                class: Me(["avatar-button", y + 3 === e.selectedIndex ? "selected" : ""]),
                onClick: C => e.submitAvatar(y + 3)
            }, [e.images[`avatar${y+3}On`] && (((E = e.player.avatars.find(C => C.name.toLowerCase() === `avatar${y+3}`.toLowerCase())) == null ? void 0 : E.available) || e.selectedIndex === y + 3) ? (Y(), X("img", {
                key: 0,
                class: Me(["avatar-image", y + 3 === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${y+3}On`].src,
                alt: e.images[`avatar${y+3}On`].alt
            }, null, 10, Jte)) : e.images[`avatar${y+3}Off`] ? (Y(), X("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${y+3}Off`].src,
                alt: e.images[`avatar${y+3}Off`].alt
            }, null, 8, Zte)) : we("", !0)], 10, Xte)
        }), 64))]), Z("div", Qte, [(Y(), X(Qe, null, un(3, (g, y) => {
            var E;
            return Z("button", {
                key: `button${y+5}`,
                class: Me(["avatar-button", y + 5 === e.selectedIndex ? "selected" : ""]),
                onClick: C => e.submitAvatar(y + 5)
            }, [e.images[`avatar${y+5}On`] && (((E = e.player.avatars.find(C => C.name.toLowerCase() === `avatar${y+5}`.toLowerCase())) == null ? void 0 : E.available) || e.selectedIndex === y + 5) ? (Y(), X("img", {
                key: 0,
                class: Me(["avatar-image", y + 5 === e.selectedIndex ? "selected" : ""]),
                src: e.images[`avatar${y+5}On`].src,
                alt: e.images[`avatar${y+5}On`].alt
            }, null, 10, tre)) : e.images[`avatar${y+5}Off`] ? (Y(), X("img", {
                key: 1,
                class: "avatar-image unavailable",
                src: e.images[`avatar${y+5}Off`].src,
                alt: e.images[`avatar${y+5}Off`].alt
            }, null, 8, rre)) : we("", !0)], 10, ere)
        }), 64))])])) : we("", !0), nt(u, {
            player: e.player,
            class: "controls"
        }, null, 8, ["player"]), e.player.playerNameTextKey ? Ie((Y(), X("span", nre, null, 512)), [
            [h, "LOBBY.PLAYER_NAME_INSTRUCTION"]
        ]) : we("", !0), e.player.playerNameTextKey ? (Y(), X("div", ire, [nt(f, {
            modelValue: e.playerName,
            "onUpdate:modelValue": t[0] || (t[0] = g => e.playerName = g),
            maxlength: 12,
            class: "answer-box eay-name-box",
            disabled: e.isSubmittingName,
            "aria-label": e.$t("LOBBY.NAME_ENTRY"),
            onKeypress: t[1] || (t[1] = Us(g => e.submitName(), ["enter"]))
        }, null, 8, ["modelValue", "disabled", "aria-label"]), Ie(Z("button", {
            class: "primary-button eay-name-submit",
            disabled: e.isSubmittingName,
            "aria-label": e.$t("LOBBY.NAME_SUBMIT"),
            onClick: t[2] || (t[2] = g => e.submitName())
        }, null, 8, sre), [
            [h, "ACTION.SUBMIT"]
        ])])) : we("", !0)])
    }
    const ore = tt(jte, [
            ["render", are],
            ["__scopeId", "data-v-463b5fe3"]
        ]),
        lre = at({
            components: {
                FourbageLogo: OS
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
                            alt: this.$t("ALT.RABBIT_WAITING"),
                            src: new URL("main/pp9/fourbage/assets/713863da.png", self.location).href
                        }
                    }
                }
            }
        }),
        cre = {
            class: "waiting"
        },
        ure = ["src", "alt"],
        fre = {
            class: "waiting-text"
        };

    function dre(e, t, r, n, s, o) {
        const l = Yt("FourbageLogo"),
            u = At("t");
        return Y(), X("div", cre, [nt(l, {
            class: "logo waiting-logo"
        }), e.images.rabbitWaiting ? (Y(), X("img", {
            key: 0,
            class: "bg-image",
            src: e.images.rabbitWaiting.src,
            alt: e.images.rabbitWaiting.alt
        }, null, 8, ure)) : we("", !0), Ie(Z("span", fre, null, 512), [
            [u, "WAITING.WAITING"]
        ])])
    }
    const wS = tt(lre, [
            ["render", dre]
        ]),
        hre = {},
        pre = {
            width: "27",
            height: "33",
            viewBox: "0 0 27 33",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        gre = HE('<path fill-rule="evenodd" clip-rule="evenodd" d="M23.7302 13.9775H17.0561C16.1749 13.9775 15.4606 14.6919 15.4606 15.573C15.4606 16.4542 16.1749 17.1686 17.0561 17.1686H23.7302C24.6114 17.1686 25.3257 16.4542 25.3257 15.573C25.3257 14.6919 24.6114 13.9775 23.7302 13.9775Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.8427 18.7978H18.5394C17.6582 18.7978 16.9438 19.5121 16.9438 20.3933C16.9438 21.2744 17.6582 21.9888 18.5394 21.9888H24.8427C25.7239 21.9888 26.4382 21.2744 26.4382 20.3933C26.4382 19.5121 25.7239 18.7978 24.8427 18.7978Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5448 23.618H17.2415C16.2579 23.618 15.4606 24.4153 15.4606 25.3989C15.4606 26.3825 16.2579 27.1798 17.2415 27.1798H23.5448C24.5284 27.1798 25.3257 26.3825 25.3257 25.3989C25.3257 24.4153 24.5284 23.618 23.5448 23.618Z" fill="#000000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2471 28.809H15.9438C15.0626 28.809 14.3483 29.5233 14.3483 30.4045C14.3483 31.2857 15.0626 32 15.9438 32H22.2471C23.1283 32 23.8427 31.2857 23.8427 30.4045C23.8427 29.5233 23.1283 28.809 22.2471 28.809Z" fill="#000000"></path><path d="M15.2396 13.7191H14.2978C13.5209 13.7191 13.0156 12.9015 13.363 12.2065L15.59 7.7527C16.0665 6.79958 16.3146 5.7486 16.3146 4.68298V2.87364C16.3146 1.28657 15.028 0 13.441 0C13.3838 0 13.3311 0.0310026 13.3033 0.0809906L12.2017 2.06391C10.5143 5.10118 8.18761 7.73585 5.38233 9.78587L2.4599 11.9215C0.913917 13.0512 0 14.851 0 16.7658V26.8146C0 30.1283 2.68629 32.8146 6 32.8146H14.9786C14.0231 32.4316 13.3483 31.4969 13.3483 30.4045C13.3483 29.0005 14.463 27.8569 15.8557 27.8105C15.0219 27.3303 14.4606 26.4302 14.4606 25.3989C14.4606 23.8762 15.6843 22.6393 17.2021 22.6183C16.4481 22.1642 15.9438 21.3376 15.9438 20.3933C15.9438 19.4491 16.4479 18.6227 17.2017 18.1686H17.056C15.6226 18.1686 14.4606 17.0065 14.4606 15.573C14.4606 14.8468 14.7588 14.1902 15.2396 13.7191Z" fill="#000000"></path>', 5),
        mre = [gre];

    function vre(e, t) {
        return Y(), X("svg", pre, mre)
    }
    const yre = tt(hre, [
            ["render", vre]
        ]),
        _re = {},
        bre = {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Ere = Z("circle", {
            cx: "11.3872",
            cy: "10.5772",
            r: "9",
            transform: "rotate(-0.181627 11.3872 10.5772)",
            stroke: "black",
            "stroke-width": "3"
        }, null, -1),
        Tre = [Ere];

    function Sre(e, t) {
        return Y(), X("svg", bre, Tre)
    }
    const Ore = tt(_re, [
            ["render", Sre]
        ]),
        wre = at({
            components: {
                FullLike: yre,
                EmptyLike: Ore
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
        Cre = {
            class: "choosing"
        },
        $re = {
            class: "instruction"
        },
        Ire = {
            key: 0,
            class: "prompt"
        },
        Are = ["disabled", "aria-label", "onClick"],
        Nre = {
            class: "choice-text"
        };

    function Rre(e, t, r, n, s, o) {
        const l = Yt("FullLike"),
            u = Yt("EmptyLike"),
            f = At("t"),
            h = At("bb");
        return Y(), X("div", Cre, [Ie(Z("span", $re, null, 512), [
            [f, e.instruction]
        ]), e.player.context !== "pick-likes" ? Ie((Y(), X("span", Ire, null, 512)), [
            [h, e.player.prompt]
        ]) : we("", !0), (Y(!0), X(Qe, null, un(e.player.choices, (g, y) => (Y(), X("button", {
            key: `${e.player.context}-${y}`,
            class: Me([{
                disabled: g.disabled,
                "like-button": e.player.context === "pick-likes",
                selected: e.selected.indexOf(y) !== -1 && e.player.context !== "pick-likes",
                unselected: e.selected.length > 0 && e.selected.indexOf(y) === -1 && e.player.context !== "pick-likes"
            }, "primary-button choice-button"]),
            disabled: g.disabled,
            "aria-label": e.$t("SHARED.CHOICE_BUTTON"),
            onClick: E => e.chooseOption(y)
        }, [Z("span", Nre, yt(e.$bb(g.text)), 1), e.player.context === "pick-likes" ? (Y(), X(Qe, {
            key: 0
        }, [nt(l, {
            class: Me(["like-image full-like", e.selected.indexOf(y) === -1 ? "hidden" : "shown"])
        }, null, 8, ["class"]), nt(u, {
            class: Me(["like-image empty-like", e.selected.indexOf(y) !== -1 ? "hidden" : "shown"])
        }, null, 8, ["class"])], 64)) : we("", !0)], 10, Are))), 128))])
    }
    const Lre = tt(wre, [
            ["render", Rre],
            ["__scopeId", "data-v-c8bdf038"]
        ]),
        Pre = at({
            components: {
                Waiting: wS
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
                        if (this.state === "voting" ? (t = this.player.voteCountGroup, this.player.likesCountGroup ? this.state = "liking" : this.state = "waiting") : (this.selection = e.key, t = this.player.likesCountGroup, this.state = "waiting"), this.hasSubmitted = !0, t) try {
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
        kre = {
            class: "voting"
        },
        xre = {
            class: "instruction"
        },
        Dre = {
            key: 0,
            class: "prompt"
        },
        Mre = ["aria-label", "onClick"],
        Fre = {
            class: "choice-text"
        };

    function Ure(e, t, r, n, s, o) {
        const l = Yt("Waiting"),
            u = At("t"),
            f = At("bb");
        return Y(), X("div", kre, [e.state !== "waiting" ? (Y(), X(Qe, {
            key: 0
        }, [Ie(Z("span", xre, null, 512), [
            [u, e.state === "liking" ? "VOTING.LIKE_INSTRUCTION" : "VOTING.VOTE_INSTRUCTION"]
        ]), !e.hasSubmitted && e.state !== "liking" ? Ie((Y(), X("span", Dre, null, 512)), [
            [f, e.player.prompt]
        ]) : we("", !0), e.hasSubmitted ? we("", !0) : (Y(!0), X(Qe, {
            key: 1
        }, un(e.player.choices, (h, g) => (Y(), X("button", {
            key: `${e.state}-${g}`,
            class: Me([{
                "like-button": e.state === "liking",
                selected: e.selection === h.key
            }, "primary-button choice-button"]),
            "aria-label": e.$t("SHARED.CHOICE_BUTTON"),
            onClick: y => e.submitVote(h)
        }, [Ie(Z("span", Fre, null, 512), [
            [f, h.text]
        ])], 10, Mre))), 128))], 64)) : (Y(), Or(l, {
            key: 1
        }))])
    }
    const Bre = tt(Pre, [
            ["render", Ure]
        ]),
        jre = {},
        Gre = {
            viewBox: "0 0 305 96",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        Wre = Z("path", {
            d: "M41 21V2L55.4762 21H267C287.435 21 304 37.5655 304 58C304 78.4345 287.435 95 267 95H38C17.5655 95 1 78.4345 1 58C1 37.5655 17.5655 21 38 21H41Z",
            fill: "black",
            stroke: "black"
        }, null, -1),
        Hre = {
            width: "305",
            height: "76",
            y: "20"
        };

    function Vre(e, t) {
        return Y(), X("svg", Gre, [Wre, (Y(), X("foreignObject", Hre, [$L(e.$slots, "default")]))])
    }
    const Kre = tt(jre, [
            ["render", Vre]
        ]),
        Yre = {},
        qre = {
            viewBox: "0 0 56 50",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        zre = Z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M52.442 43.1411L30.095 4.43507C29.1639 2.82231 26.8361 2.82232 25.905 4.43507L3.55803 43.1411C2.6269 44.7539 3.79081 46.7698 5.65305 46.7698L50.3469 46.7698C52.2092 46.7698 53.3731 44.7539 52.442 43.1411ZM32.8884 2.82231C30.7158 -0.940771 25.2842 -0.940772 23.1116 2.82231L0.764659 41.5284C-1.40796 45.2914 1.30781 49.9953 5.65305 49.9953L50.3469 49.9953C54.6922 49.9953 57.4079 45.2914 55.2353 41.5283L32.8884 2.82231Z",
            fill: "#FF3E4E"
        }, null, -1),
        Xre = Z("path", {
            d: "M28.4032 16.1275C26.4656 16.1275 24.9565 17.8088 25.1651 19.7351L26.5117 32.1701C26.6163 33.1359 27.4317 33.8678 28.4032 33.8678V33.8678C29.3746 33.8678 30.19 33.1359 30.2946 32.1701L31.6412 19.7351C31.8498 17.8088 30.3407 16.1275 28.4032 16.1275V16.1275Z",
            fill: "#FF3E4E"
        }, null, -1),
        Jre = Z("circle", {
            cx: "28.4032",
            cy: "38.3028",
            r: "2.82231",
            fill: "#FF3E4E"
        }, null, -1),
        Zre = [zre, Xre, Jre];

    function Qre(e, t) {
        return Y(), X("svg", qre, Zre)
    }
    const ene = tt(Yre, [
            ["render", Qre]
        ]),
        tne = {},
        rne = {
            viewBox: "0 0 37 37",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        },
        nne = Z("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28275 28.7173 0 18.5 0C8.28273 0 0 8.28275 0 18.5C0 28.7173 8.28273 37 18.5 37ZM11.5 11C12.8807 11 14 12.1193 14 13.5C14 14.8807 12.8807 16 11.5 16C10.1193 16 9 14.8807 9 13.5C9 12.1193 10.1193 11 11.5 11ZM27 13.5C27 12.1193 25.8807 11 24.5 11C23.1193 11 22 12.1193 22 13.5C22 14.8807 23.1193 16 24.5 16C25.8807 16 27 14.8807 27 13.5ZM18.5 21C21.5376 21 24 23.2386 24 26C24 28.7614 21.5376 30 18.5 30C15.4624 30 13 28.7614 13 26C13 23.2386 15.4624 21 18.5 21Z",
            fill: "#FFD233"
        }, null, -1),
        ine = [nne];

    function sne(e, t) {
        return Y(), X("svg", rne, ine)
    }
    const ane = tt(tne, [
            ["render", sne]
        ]),
        one = at({
            components: {
                Input: $T,
                SadFace: ane,
                SpeechBubble: Kre,
                WarningSymbol: ene
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
                    this.currentText1 = this.currentText1.toUpperCase(), this.currentText1 = ar.sanitizeEmoji(this.currentText1), this.isTruthError = !1, this.isProfanityError1 = !1;
                    try {
                        await this.$ecast.updateText(this.player.textKey1, this.currentText1)
                    } catch (e) {
                        this.isProfanityError1 = !0, this.$handleEcastError(e)
                    }
                },
                async currentText2() {
                    if (this.player.textKey2) {
                        this.currentText1 = this.currentText1.toUpperCase(), this.currentText2 = ar.sanitizeEmoji(this.currentText2), this.isTruthError = !1, this.isProfanityError2 = !1;
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
        lne = {
            class: "writing"
        },
        cne = {
            class: "instruction"
        },
        une = {
            class: "prompt"
        },
        fne = {
            key: 0,
            class: "separator"
        },
        dne = {
            key: 1,
            class: "prompt"
        },
        hne = {
            class: "error-container"
        },
        pne = {
            class: "error-text profanity-error"
        },
        gne = {
            class: "error-container"
        },
        mne = {
            class: "error-text truth-error"
        },
        vne = {
            key: 2,
            class: "joiner"
        },
        yne = {
            class: "error-container"
        },
        _ne = {
            class: "error-text profanity-error"
        },
        bne = ["disabled", "aria-label"],
        Ene = {
            class: "button-separator"
        },
        Tne = ["disabled", "aria-label"],
        Sne = ["disabled", "aria-label", "onClick"];

    function One(e, t, r, n, s, o) {
        const l = Yt("Input"),
            u = Yt("WarningSymbol"),
            f = Yt("SpeechBubble"),
            h = Yt("SadFace"),
            g = At("t"),
            y = At("bb");
        return Y(), X("div", lne, [Ie(Z("span", cne, null, 512), [
            [g, e.instruction]
        ]), Ie(Z("span", une, null, 512), [
            [y, e.player.prompt1]
        ]), e.player.prompt2 ? Ie((Y(), X("span", fne, null, 512)), [
            [g, "WRITING.SEPARATOR"]
        ]) : we("", !0), e.player.prompt2 ? Ie((Y(), X("span", dne, null, 512)), [
            [y, e.player.prompt2]
        ]) : we("", !0), e.isLieForMe ? (Y(!0), X(Qe, {
            key: 3
        }, un(e.player.suggestions, (E, C) => Ie((Y(), X("button", {
            key: `lie-${C}`,
            class: "primary-button",
            disabled: e.isSubmitting,
            "aria-label": e.$t("SHARED.CHOICE_BUTTON"),
            onClick: P => e.parseAndSubmitLie(E)
        }, null, 8, Sne)), [
            [y, E.replace("|", " " + e.player.joiningPhrase + " ")]
        ])), 128)) : (Y(), X(Qe, {
            key: 2
        }, [nt(l, {
            modelValue: e.currentText1,
            "onUpdate:modelValue": t[0] || (t[0] = E => e.currentText1 = E),
            placeholder: e.player.placeholder,
            maxlength: e.player.maxLength,
            class: "answer-box",
            disabled: e.isSubmitting,
            "aria-label": e.$t("WRITING.TEXT_INPUT_1"),
            onKeypress: t[1] || (t[1] = Us(E => e.onSubmit(), ["enter"]))
        }, null, 8, ["modelValue", "placeholder", "maxlength", "disabled", "aria-label"]), e.isProfanityError1 ? (Y(), Or(f, {
            key: 0,
            class: "error-bubble"
        }, {
            default: Fs(() => [Z("div", hne, [nt(u, {
                class: "warning-icon"
            }), Ie(Z("span", pne, null, 512), [
                [g, "WRITING.PROHIBITED_LANGUAGE"]
            ])])]),
            _: 1
        })) : e.isTruthError ? (Y(), Or(f, {
            key: 1,
            class: "error-bubble"
        }, {
            default: Fs(() => [Z("div", gne, [nt(h, {
                class: "warning-icon"
            }), Z("span", mne, yt(e.player.error), 1)])]),
            _: 1
        })) : we("", !0), e.player.textKey2 && e.player.joiningPhrase ? Ie((Y(), X("span", vne, null, 512)), [
            [g, e.player.joiningPhrase.toUpperCase()]
        ]) : we("", !0), e.player.textKey2 ? (Y(), Or(l, {
            key: 3,
            modelValue: e.currentText2,
            "onUpdate:modelValue": t[2] || (t[2] = E => e.currentText2 = E),
            placeholder: e.player.placeholder,
            maxlength: e.player.maxLength,
            class: "answer-box",
            disabled: e.isSubmitting,
            "aria-label": e.$t("WRITING.TEXT_INPUT_2"),
            onKeypress: Us(Zr(e.onSubmit, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "placeholder", "maxlength", "disabled", "aria-label", "onKeypress"])) : we("", !0), e.isProfanityError2 ? (Y(), Or(f, {
            key: 4,
            class: "error-bubble"
        }, {
            default: Fs(() => [Z("div", yne, [nt(u, {
                class: "warning-icon"
            }), Ie(Z("span", _ne, null, 512), [
                [g, "WRITING.PROHIBITED_LANGUAGE"]
            ])])]),
            _: 1
        })) : we("", !0), Ie(Z("button", {
            class: "primary-button",
            disabled: e.currentText1.length <= 0 || e.player.textKey2 && e.currentText2.length <= 0 || e.isSubmitting || e.isTruthError || e.isProfanityError1 || e.isProfanityError2,
            "aria-label": e.$t("SHARED.SUBMIT_BUTTON"),
            onClick: t[3] || (t[3] = E => e.onSubmit()),
            onKeydownCapture: t[4] || (t[4] = Us(E => e.onSubmit(), ["enter"]))
        }, null, 40, bne), [
            [g, "ACTION.SUBMIT"]
        ]), e.player.suggestions && e.player.suggestions.length > 0 ? (Y(), X(Qe, {
            key: 5
        }, [Ie(Z("span", Ene, null, 512), [
            [g, "SEPARATOR.OR"]
        ]), Ie(Z("button", {
            class: "secondary-button",
            disabled: e.isSubmitting,
            "aria-label": e.$t("WRITING.LIE_BUTTON"),
            onClick: t[5] || (t[5] = E => e.lieForMe())
        }, null, 8, Tne), [
            [g, "WRITING.LIE_FOR_ME"]
        ])], 64)) : we("", !0)], 64))])
    }
    const wne = tt(one, [
            ["render", One],
            ["__scopeId", "data-v-4e469b8b"]
        ]),
        Cne = at({
            bb: {
                blank: (e, t, r) => '<span class="blank">________</span>'
            },
            components: {
                Lobby: ore,
                Waiting: wS,
                Choosing: Lre,
                Writing: wne,
                Voting: Bre,
                Fallbacks: G6
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
                            }]
                    }
                    if (this.player) switch (this.player.kind) {
                        case "lobby":
                            return ["Lobby", {
                                player: this.player,
                                info: this.info
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
        $ne = {
            class: "constrain"
        },
        Ine = {
            key: 0,
            class: "name-header"
        },
        Ane = {
            key: 1,
            class: "name-header"
        };

    function Nne(e, t, r, n, s, o) {
        const l = At("bb"),
            u = At("t");
        return Y(), X("div", {
            class: Me([e.alternateBackgroundClass, "fourbage"])
        }, [Z("div", $ne, [e.screen ? (Y(), Or(_c(e.screen[0]), Tc({
            key: 0,
            role: "main"
        }, e.screen[1]), null, 16)) : we("", !0)]), e.info ? Ie((Y(), X("span", Ine, null, 512)), [
            [l, e.info.name]
        ]) : we("", !0), e.audience ? Ie((Y(), X("span", Ane, null, 512)), [
            [u, "AUDIENCE.NAME"]
        ]) : we("", !0)], 2)
    }
    const Rne = tt(Cne, [
        ["render", Nne]
    ]);
    Cte({
        MainView: Rne,
        messages: xte
    })
});
export default Lne();
//# sourceMappingURL=ad47ef17.js.map