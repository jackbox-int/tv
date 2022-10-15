var SL = Object.defineProperty;
var OL = (e, t, r) => t in e ? SL(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var wL = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (OL(e, typeof t != "symbol" ? t + "" : t, r), r);
var Pie = wL((xie, qO) => {
    const CL = function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
        new MutationObserver(s => {
            for (const a of s)
                if (a.type === "childList")
                    for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function r(s) {
            const a = {};
            return s.integrity && (a.integrity = s.integrity), s.referrerpolicy && (a.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? a.credentials = "include" : s.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
        }

        function n(s) {
            if (s.ep) return;
            s.ep = !0;
            const a = r(s);
            fetch(s.href, a)
        }
    };
    CL();
    /*!
     * maska v1.5.0
     * (c) 2019-2021 Alexander Shabunevich
     * Released under the MIT License.
     */
    function IL(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function $L(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function RL(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function Ov(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(s) {
                return Object.getOwnPropertyDescriptor(e, s).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function Ll(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Ov(Object(r), !0).forEach(function(n) {
                RL(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ov(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var ab = {
        "#": {
            pattern: /[0-9]/
        },
        X: {
            pattern: /[0-9a-zA-Z]/
        },
        S: {
            pattern: /[a-zA-Z]/
        },
        A: {
            pattern: /[a-zA-Z]/,
            uppercase: !0
        },
        a: {
            pattern: /[a-zA-Z]/,
            lowercase: !0
        },
        "!": {
            escape: !0
        },
        "*": {
            repeat: !0
        }
    };

    function wv(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ab,
            n = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
        return ob(t).length > 1 ? LL(t)(e, t, r, n) : ud(e, t, r, n)
    }

    function ob(e) {
        try {
            return JSON.parse(e)
        } catch {
            return [e]
        }
    }

    function LL(e) {
        var t = ob(e).sort(function(n, s) {
            return n.length - s.length
        });
        return function(n, s, a) {
            var l = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3],
                c = t.map(function(p) {
                    return ud(n, p, a, !1)
                }),
                f = c.pop();
            for (var d in t)
                if (r(f, t[d], a)) return ud(n, t[d], a, l);
            return ""
        };

        function r(n, s, a) {
            for (var l in a) a[l].escape && (s = s.replace(new RegExp(l + ".{1}", "g"), ""));
            return s.split("").filter(function(c) {
                return a[c] && a[c].pattern
            }).length >= n.length
        }
    }

    function ud(e, t, r) {
        for (var n = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], s = 0, a = 0, l = "", c = ""; s < t.length && a < e.length;) {
            var f = t[s],
                d = e[a],
                p = r[f];
            if (p && p.pattern) p.pattern.test(d) && (l += NL(d, p), s++, n && t[s] && (r[t[s]] ? r[t[s]] && r[t[s]].escape && (l += t[s + 1], s += 2) : (l += t[s], s++))), a++;
            else if (p && p.repeat) {
                var y = r[t[s - 1]];
                y && !y.pattern.test(d) ? s++ : s--
            } else p && p.escape && (f = t[++s]), n && (l += f), d === f && a++, s++
        }
        for (; n && s < t.length;) {
            var b = t[s];
            if (r[b]) {
                c = "";
                break
            }
            c += b, s++
        }
        return l + c
    }

    function NL(e, t) {
        return t.transform && (e = t.transform(e)), t.uppercase ? e.toLocaleUpperCase() : t.lowercase ? e.toLocaleLowerCase() : e
    }

    function Cv(e) {
        return e instanceof HTMLInputElement ? e : e.querySelector("input") || e
    }

    function fd(e) {
        return Object.prototype.toString.call(e) === "[object String]"
    }
    var PL = function() {
            function e(n) {
                var s = this,
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (IL(this, e), !n) throw new Error("Maska: no element for mask");
                if (a.preprocessor != null && typeof a.preprocessor != "function") throw new Error("Maska: preprocessor must be a function");
                if (a.tokens)
                    for (var l in a.tokens) a.tokens[l] = Ll({}, a.tokens[l]), a.tokens[l].pattern && fd(a.tokens[l].pattern) && (a.tokens[l].pattern = new RegExp(a.tokens[l].pattern));
                this._opts = {
                    mask: a.mask,
                    tokens: Ll(Ll({}, ab), a.tokens),
                    preprocessor: a.preprocessor
                }, this._el = fd(n) ? document.querySelectorAll(n) : n.length ? n : [n], this.inputEvent = function(c) {
                    return s.updateValue(c.target, c)
                }, this.init()
            }
            var t, r;
            return t = e, (r = [{
                key: "init",
                value: function() {
                    for (var n = this, s = function(l) {
                            var c = Cv(n._el[l]);
                            !n._opts.mask || c.dataset.mask && c.dataset.mask === n._opts.mask || (c.dataset.mask = n._opts.mask), setTimeout(function() {
                                return n.updateValue(c)
                            }, 0), c.dataset.maskInited || (c.dataset.maskInited = !0, c.addEventListener("input", n.inputEvent), c.addEventListener("beforeinput", n.beforeInput))
                        }, a = 0; a < this._el.length; a++) s(a)
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var n = 0; n < this._el.length; n++) {
                        var s = Cv(this._el[n]);
                        s.removeEventListener("input", this.inputEvent), s.removeEventListener("beforeinput", this.beforeInput), delete s.dataset.mask, delete s.dataset.maskInited
                    }
                }
            }, {
                key: "updateValue",
                value: function(n, s) {
                    if (n && n.type) {
                        var a = n.type.match(/^number$/i) && n.validity.badInput;
                        if (!n.value && !a || !n.dataset.mask) return n.dataset.maskRawValue = "", void this.dispatch("maska", n, s);
                        var l = n.selectionEnd,
                            c = n.value,
                            f = c[l - 1];
                        n.dataset.maskRawValue = wv(n.value, n.dataset.mask, this._opts.tokens, !1);
                        var d = n.value;
                        this._opts.preprocessor && (d = this._opts.preprocessor(d)), n.value = wv(d, n.dataset.mask, this._opts.tokens), s && s.inputType === "insertText" && l === c.length && (l = n.value.length),
                            function(p, y, b) {
                                for (; y && y < p.value.length && p.value.charAt(y - 1) !== b;) y++;
                                (p.type ? p.type.match(/^(text|search|password|tel|url)$/i) : !p.type) && p === document.activeElement && (p.setSelectionRange(y, y), setTimeout(function() {
                                    p.setSelectionRange(y, y)
                                }, 0))
                            }(n, l, f), this.dispatch("maska", n, s), n.value !== c && this.dispatch("input", n, s)
                    }
                }
            }, {
                key: "beforeInput",
                value: function(n) {
                    n && n.target && n.target.type && n.target.type.match(/^number$/i) && n.data && isNaN(n.target.value + n.data) && n.preventDefault()
                }
            }, {
                key: "dispatch",
                value: function(n, s, a) {
                    s.dispatchEvent(function(l) {
                        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                            f = document.createEvent("Event");
                        return f.initEvent(l, !0, !0), c && (f.inputType = c), f
                    }(n, a && a.inputType || null))
                }
            }]) && $L(t.prototype, r), e
        }(),
        pf, kL = (pf = new WeakMap, function(e, t) {
            t.value && (pf.has(e) && ! function(r) {
                return !(fd(r.value) && r.value === r.oldValue || Array.isArray(r.value) && JSON.stringify(r.value) === JSON.stringify(r.oldValue) || r.value && r.value.mask && r.oldValue && r.oldValue.mask && r.value.mask === r.oldValue.mask)
            }(t) || pf.set(e, new PL(e, function(r) {
                var n = {};
                return r.mask ? (n.mask = Array.isArray(r.mask) ? JSON.stringify(r.mask) : r.mask, n.tokens = r.tokens ? Ll({}, r.tokens) : {}, n.preprocessor = r.preprocessor) : n.mask = Array.isArray(r) ? JSON.stringify(r) : r, n
            }(t.value))))
        });

    function lb(e) {
        e.directive("maska", kL)
    }
    typeof window < "u" && window.Vue && window.Vue.use && window.Vue.use(lb);

    function Eh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const xL = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        DL = Eh(xL);

    function cb(e) {
        return !!e || e === ""
    }

    function co(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Ft(n) ? FL(n) : co(n);
                if (s)
                    for (const a in s) t[a] = s[a]
            }
            return t
        } else {
            if (Ft(e)) return e;
            if (Rt(e)) return e
        }
    }
    const ML = /;(?![^(]*\))/g,
        UL = /:(.+)/;

    function FL(e) {
        const t = {};
        return e.split(ML).forEach(r => {
            if (r) {
                const n = r.split(UL);
                n.length > 1 && (t[n[0].trim()] = n[1].trim())
            }
        }), t
    }

    function Ve(e) {
        let t = "";
        if (Ft(e)) t = e;
        else if (ke(e))
            for (let r = 0; r < e.length; r++) {
                const n = Ve(e[r]);
                n && (t += n + " ")
            } else if (Rt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function BL(e) {
        if (!e) return null;
        let {
            class: t,
            style: r
        } = e;
        return t && !Ft(t) && (e.class = Ve(t)), r && (e.style = co(r)), e
    }

    function GL(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = lc(e[n], t[n]);
        return r
    }

    function lc(e, t) {
        if (e === t) return !0;
        let r = Iv(e),
            n = Iv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = za(e), n = za(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? GL(e, t) : !1;
        if (r = Rt(e), n = Rt(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                a = Object.keys(t).length;
            if (s !== a) return !1;
            for (const l in e) {
                const c = e.hasOwnProperty(l),
                    f = t.hasOwnProperty(l);
                if (c && !f || !c && f || !lc(e[l], t[l])) return !1
            }
        }
        return String(e) === String(t)
    }

    function ub(e, t) {
        return e.findIndex(r => lc(r, t))
    }
    const Me = e => Ft(e) ? e : e == null ? "" : ke(e) || Rt(e) && (e.toString === hb || !Ke(e.toString)) ? JSON.stringify(e, fb, 2) : String(e),
        fb = (e, t) => t && t.__v_isRef ? fb(e, t.value) : Us(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : uc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : Rt(t) && !ke(t) && !pb(t) ? String(t) : t,
        vt = {},
        Ms = [],
        un = () => {},
        jL = () => !1,
        WL = /^on[^a-z]/,
        cc = e => WL.test(e),
        bh = e => e.startsWith("onUpdate:"),
        tr = Object.assign,
        Th = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        VL = Object.prototype.hasOwnProperty,
        tt = (e, t) => VL.call(e, t),
        ke = Array.isArray,
        Us = e => uo(e) === "[object Map]",
        uc = e => uo(e) === "[object Set]",
        Iv = e => uo(e) === "[object Date]",
        Ke = e => typeof e == "function",
        Ft = e => typeof e == "string",
        za = e => typeof e == "symbol",
        Rt = e => e !== null && typeof e == "object",
        db = e => Rt(e) && Ke(e.then) && Ke(e.catch),
        hb = Object.prototype.toString,
        uo = e => hb.call(e),
        KL = e => uo(e).slice(8, -1),
        pb = e => uo(e) === "[object Object]",
        Ah = e => Ft(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Nl = Eh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        fc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        HL = /-(\w)/g,
        wn = fc(e => e.replace(HL, (t, r) => r ? r.toUpperCase() : "")),
        qL = /\B([A-Z])/g,
        os = fc(e => e.replace(qL, "-$1").toLowerCase()),
        dc = fc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        gf = fc(e => e ? `on${dc(e)}` : ""),
        Xa = (e, t) => !Object.is(e, t),
        Pl = (e, t) => {
            for (let r = 0; r < e.length; r++) e[r](t)
        },
        Gl = (e, t, r) => {
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
    let $v;
    const YL = () => $v || ($v = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let Tn;
    class gb {
        constructor(t = !1) {
            this.active = !0, this.effects = [], this.cleanups = [], !t && Tn && (this.parent = Tn, this.index = (Tn.scopes || (Tn.scopes = [])).push(this) - 1)
        }
        run(t) {
            if (this.active) {
                const r = Tn;
                try {
                    return Tn = this, t()
                } finally {
                    Tn = r
                }
            }
        }
        on() {
            Tn = this
        }
        off() {
            Tn = this.parent
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

    function zL(e) {
        return new gb(e)
    }

    function XL(e, t = Tn) {
        t && t.active && t.effects.push(e)
    }
    const Sh = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        mb = e => (e.w & hi) > 0,
        vb = e => (e.n & hi) > 0,
        JL = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= hi
        },
        QL = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    mb(s) && !vb(s) ? s.delete(e) : t[r++] = s, s.w &= ~hi, s.n &= ~hi
                }
                t.length = r
            }
        },
        dd = new WeakMap;
    let ka = 0,
        hi = 1;
    const hd = 30;
    let on;
    const Ji = Symbol(""),
        pd = Symbol("");
    class Oh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, XL(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let t = on,
                r = ui;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = on, on = this, ui = !0, hi = 1 << ++ka, ka <= hd ? JL(this) : Rv(this), this.fn()
            } finally {
                ka <= hd && QL(this), hi = 1 << --ka, on = this.parent, ui = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            on === this ? this.deferStop = !0 : this.active && (Rv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function Rv(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let ui = !0;
    const yb = [];

    function ra() {
        yb.push(ui), ui = !1
    }

    function na() {
        const e = yb.pop();
        ui = e === void 0 ? !0 : e
    }

    function Dr(e, t, r) {
        if (ui && on) {
            let n = dd.get(e);
            n || dd.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = Sh()), _b(s)
        }
    }

    function _b(e, t) {
        let r = !1;
        ka <= hd ? vb(e) || (e.n |= hi, r = !mb(e)) : r = !e.has(on), r && (e.add(on), on.deps.push(e))
    }

    function Bn(e, t, r, n, s, a) {
        const l = dd.get(e);
        if (!l) return;
        let c = [];
        if (t === "clear") c = [...l.values()];
        else if (r === "length" && ke(e)) l.forEach((f, d) => {
            (d === "length" || d >= n) && c.push(f)
        });
        else switch (r !== void 0 && c.push(l.get(r)), t) {
            case "add":
                ke(e) ? Ah(r) && c.push(l.get("length")) : (c.push(l.get(Ji)), Us(e) && c.push(l.get(pd)));
                break;
            case "delete":
                ke(e) || (c.push(l.get(Ji)), Us(e) && c.push(l.get(pd)));
                break;
            case "set":
                Us(e) && c.push(l.get(Ji));
                break
        }
        if (c.length === 1) c[0] && gd(c[0]);
        else {
            const f = [];
            for (const d of c) d && f.push(...d);
            gd(Sh(f))
        }
    }

    function gd(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && Lv(n);
        for (const n of r) n.computed || Lv(n)
    }

    function Lv(e, t) {
        (e !== on || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const ZL = Eh("__proto__,__v_isRef,__isVue"),
        Eb = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(za)),
        eN = wh(),
        tN = wh(!1, !0),
        rN = wh(!0),
        Nv = nN();

    function nN() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = at(this);
                for (let a = 0, l = this.length; a < l; a++) Dr(n, "get", a + "");
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

    function wh(e = !1, t = !1) {
        return function(n, s, a) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && a === (e ? t ? _N : Ob : t ? Sb : Ab).get(n)) return n;
            const l = ke(n);
            if (!e && l && tt(Nv, s)) return Reflect.get(Nv, s, a);
            const c = Reflect.get(n, s, a);
            return (za(s) ? Eb.has(s) : ZL(s)) || (e || Dr(n, "get", s), t) ? c : Zt(c) ? l && Ah(s) ? c : c.value : Rt(c) ? e ? wb(c) : Gn(c) : c
        }
    }
    const iN = bb(),
        sN = bb(!0);

    function bb(e = !1) {
        return function(r, n, s, a) {
            let l = r[n];
            if (Ja(l) && Zt(l) && !Zt(s)) return !1;
            if (!e && !Ja(s) && (md(s) || (s = at(s), l = at(l)), !ke(r) && Zt(l) && !Zt(s))) return l.value = s, !0;
            const c = ke(r) && Ah(n) ? Number(n) < r.length : tt(r, n),
                f = Reflect.set(r, n, s, a);
            return r === at(a) && (c ? Xa(s, l) && Bn(r, "set", n, s) : Bn(r, "add", n, s)), f
        }
    }

    function aN(e, t) {
        const r = tt(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Bn(e, "delete", t, void 0), n
    }

    function oN(e, t) {
        const r = Reflect.has(e, t);
        return (!za(t) || !Eb.has(t)) && Dr(e, "has", t), r
    }

    function lN(e) {
        return Dr(e, "iterate", ke(e) ? "length" : Ji), Reflect.ownKeys(e)
    }
    const Tb = {
            get: eN,
            set: iN,
            deleteProperty: aN,
            has: oN,
            ownKeys: lN
        },
        cN = {
            get: rN,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        uN = tr({}, Tb, {
            get: tN,
            set: sN
        }),
        Ch = e => e,
        hc = e => Reflect.getPrototypeOf(e);

    function dl(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = at(e),
            a = at(t);
        r || (t !== a && Dr(s, "get", t), Dr(s, "get", a));
        const {
            has: l
        } = hc(s), c = n ? Ch : r ? Rh : Qa;
        if (l.call(s, t)) return c(e.get(t));
        if (l.call(s, a)) return c(e.get(a));
        e !== s && e.get(t)
    }

    function hl(e, t = !1) {
        const r = this.__v_raw,
            n = at(r),
            s = at(e);
        return t || (e !== s && Dr(n, "has", e), Dr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function pl(e, t = !1) {
        return e = e.__v_raw, !t && Dr(at(e), "iterate", Ji), Reflect.get(e, "size", e)
    }

    function Pv(e) {
        e = at(e);
        const t = at(this);
        return hc(t).has.call(t, e) || (t.add(e), Bn(t, "add", e, e)), this
    }

    function kv(e, t) {
        t = at(t);
        const r = at(this),
            {
                has: n,
                get: s
            } = hc(r);
        let a = n.call(r, e);
        a || (e = at(e), a = n.call(r, e));
        const l = s.call(r, e);
        return r.set(e, t), a ? Xa(t, l) && Bn(r, "set", e, t) : Bn(r, "add", e, t), this
    }

    function xv(e) {
        const t = at(this),
            {
                has: r,
                get: n
            } = hc(t);
        let s = r.call(t, e);
        s || (e = at(e), s = r.call(t, e)), n && n.call(t, e);
        const a = t.delete(e);
        return s && Bn(t, "delete", e, void 0), a
    }

    function Dv() {
        const e = at(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Bn(e, "clear", void 0, void 0), r
    }

    function gl(e, t) {
        return function(n, s) {
            const a = this,
                l = a.__v_raw,
                c = at(l),
                f = t ? Ch : e ? Rh : Qa;
            return !e && Dr(c, "iterate", Ji), l.forEach((d, p) => n.call(s, f(d), f(p), a))
        }
    }

    function ml(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                a = at(s),
                l = Us(a),
                c = e === "entries" || e === Symbol.iterator && l,
                f = e === "keys" && l,
                d = s[e](...n),
                p = r ? Ch : t ? Rh : Qa;
            return !t && Dr(a, "iterate", f ? pd : Ji), {
                next() {
                    const {
                        value: y,
                        done: b
                    } = d.next();
                    return b ? {
                        value: y,
                        done: b
                    } : {
                        value: c ? [p(y[0]), p(y[1])] : p(y),
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

    function fN() {
        const e = {
                get(a) {
                    return dl(this, a)
                },
                get size() {
                    return pl(this)
                },
                has: hl,
                add: Pv,
                set: kv,
                delete: xv,
                clear: Dv,
                forEach: gl(!1, !1)
            },
            t = {
                get(a) {
                    return dl(this, a, !1, !0)
                },
                get size() {
                    return pl(this)
                },
                has: hl,
                add: Pv,
                set: kv,
                delete: xv,
                clear: Dv,
                forEach: gl(!1, !0)
            },
            r = {
                get(a) {
                    return dl(this, a, !0)
                },
                get size() {
                    return pl(this, !0)
                },
                has(a) {
                    return hl.call(this, a, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: gl(!0, !1)
            },
            n = {
                get(a) {
                    return dl(this, a, !0, !0)
                },
                get size() {
                    return pl(this, !0)
                },
                has(a) {
                    return hl.call(this, a, !0)
                },
                add: Zn("add"),
                set: Zn("set"),
                delete: Zn("delete"),
                clear: Zn("clear"),
                forEach: gl(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
            e[a] = ml(a, !1, !1), r[a] = ml(a, !0, !1), t[a] = ml(a, !1, !0), n[a] = ml(a, !0, !0)
        }), [e, r, t, n]
    }
    const [dN, hN, pN, gN] = fN();

    function Ih(e, t) {
        const r = t ? e ? gN : pN : e ? hN : dN;
        return (n, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(tt(r, s) && s in n ? r : n, s, a)
    }
    const mN = {
            get: Ih(!1, !1)
        },
        vN = {
            get: Ih(!1, !0)
        },
        yN = {
            get: Ih(!0, !1)
        },
        Ab = new WeakMap,
        Sb = new WeakMap,
        Ob = new WeakMap,
        _N = new WeakMap;

    function EN(e) {
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

    function bN(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : EN(KL(e))
    }

    function Gn(e) {
        return Ja(e) ? e : $h(e, !1, Tb, mN, Ab)
    }

    function TN(e) {
        return $h(e, !1, uN, vN, Sb)
    }

    function wb(e) {
        return $h(e, !0, cN, yN, Ob)
    }

    function $h(e, t, r, n, s) {
        if (!Rt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const a = s.get(e);
        if (a) return a;
        const l = bN(e);
        if (l === 0) return e;
        const c = new Proxy(e, l === 2 ? n : r);
        return s.set(e, c), c
    }

    function Fs(e) {
        return Ja(e) ? Fs(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function Ja(e) {
        return !!(e && e.__v_isReadonly)
    }

    function md(e) {
        return !!(e && e.__v_isShallow)
    }

    function Cb(e) {
        return Fs(e) || Ja(e)
    }

    function at(e) {
        const t = e && e.__v_raw;
        return t ? at(t) : e
    }

    function Ib(e) {
        return Gl(e, "__v_skip", !0), e
    }
    const Qa = e => Rt(e) ? Gn(e) : e,
        Rh = e => Rt(e) ? wb(e) : e;

    function $b(e) {
        ui && on && (e = at(e), _b(e.dep || (e.dep = Sh())))
    }

    function Rb(e, t) {
        e = at(e), e.dep && gd(e.dep)
    }

    function Zt(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function ln(e) {
        return Lb(e, !1)
    }

    function AN(e) {
        return Lb(e, !0)
    }

    function Lb(e, t) {
        return Zt(e) ? e : new SN(e, t)
    }
    class SN {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : at(t), this._value = r ? t : Qa(t)
        }
        get value() {
            return $b(this), this._value
        }
        set value(t) {
            t = this.__v_isShallow ? t : at(t), Xa(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Qa(t), Rb(this))
        }
    }

    function ON(e) {
        return Zt(e) ? e.value : e
    }
    const wN = {
        get: (e, t, r) => ON(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return Zt(s) && !Zt(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function Nb(e) {
        return Fs(e) ? e : new Proxy(e, wN)
    }
    class CN {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new Oh(t, () => {
                this._dirty || (this._dirty = !0, Rb(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = at(this);
            return $b(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }

    function IN(e, t, r = !1) {
        let n, s;
        const a = Ke(e);
        return a ? (n = e, s = un) : (n = e.get, s = e.set), new CN(n, s, a || !s, r)
    }

    function fi(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (a) {
            pc(a, t, r)
        }
        return s
    }

    function Jr(e, t, r, n) {
        if (Ke(e)) {
            const a = fi(e, t, r, n);
            return a && db(a) && a.catch(l => {
                pc(l, t, r)
            }), a
        }
        const s = [];
        for (let a = 0; a < e.length; a++) s.push(Jr(e[a], t, r, n));
        return s
    }

    function pc(e, t, r, n = !0) {
        const s = t ? t.vnode : null;
        if (t) {
            let a = t.parent;
            const l = t.proxy,
                c = r;
            for (; a;) {
                const d = a.ec;
                if (d) {
                    for (let p = 0; p < d.length; p++)
                        if (d[p](e, l, c) === !1) return
                }
                a = a.parent
            }
            const f = t.appContext.config.errorHandler;
            if (f) {
                fi(f, null, 10, [e, l, c]);
                return
            }
        }
        $N(e, r, s, n)
    }

    function $N(e, t, r, n = !0) {
        console.error(e)
    }
    let Wl = !1,
        vd = !1;
    const kr = [];
    let Fn = 0;
    const Ua = [];
    let xa = null,
        $s = 0;
    const Fa = [];
    let ii = null,
        Rs = 0;
    const Pb = Promise.resolve();
    let Lh = null,
        yd = null;

    function RN(e) {
        const t = Lh || Pb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function LN(e) {
        let t = Fn + 1,
            r = kr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Za(kr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function kb(e) {
        (!kr.length || !kr.includes(e, Wl && e.allowRecurse ? Fn + 1 : Fn)) && e !== yd && (e.id == null ? kr.push(e) : kr.splice(LN(e.id), 0, e), xb())
    }

    function xb() {
        !Wl && !vd && (vd = !0, Lh = Pb.then(Ub))
    }

    function NN(e) {
        const t = kr.indexOf(e);
        t > Fn && kr.splice(t, 1)
    }

    function Db(e, t, r, n) {
        ke(e) ? r.push(...e) : (!t || !t.includes(e, e.allowRecurse ? n + 1 : n)) && r.push(e), xb()
    }

    function PN(e) {
        Db(e, xa, Ua, $s)
    }

    function kN(e) {
        Db(e, ii, Fa, Rs)
    }

    function gc(e, t = null) {
        if (Ua.length) {
            for (yd = t, xa = [...new Set(Ua)], Ua.length = 0, $s = 0; $s < xa.length; $s++) xa[$s]();
            xa = null, $s = 0, yd = null, gc(e, t)
        }
    }

    function Mb(e) {
        if (gc(), Fa.length) {
            const t = [...new Set(Fa)];
            if (Fa.length = 0, ii) {
                ii.push(...t);
                return
            }
            for (ii = t, ii.sort((r, n) => Za(r) - Za(n)), Rs = 0; Rs < ii.length; Rs++) ii[Rs]();
            ii = null, Rs = 0
        }
    }
    const Za = e => e.id == null ? 1 / 0 : e.id;

    function Ub(e) {
        vd = !1, Wl = !0, gc(e), kr.sort((r, n) => Za(r) - Za(n));
        const t = un;
        try {
            for (Fn = 0; Fn < kr.length; Fn++) {
                const r = kr[Fn];
                r && r.active !== !1 && fi(r, null, 14)
            }
        } finally {
            Fn = 0, kr.length = 0, Mb(), Wl = !1, Lh = null, (kr.length || Ua.length || Fa.length) && Ub(e)
        }
    }

    function xN(e, t, ...r) {
        if (e.isUnmounted) return;
        const n = e.vnode.props || vt;
        let s = r;
        const a = t.startsWith("update:"),
            l = a && t.slice(7);
        if (l && l in n) {
            const p = `${l==="modelValue"?"model":l}Modifiers`,
                {
                    number: y,
                    trim: b
                } = n[p] || vt;
            b && (s = r.map(w => w.trim())), y && (s = r.map(jl))
        }
        let c, f = n[c = gf(t)] || n[c = gf(wn(t))];
        !f && a && (f = n[c = gf(os(t))]), f && Jr(f, e, 6, s);
        const d = n[c + "Once"];
        if (d) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[c]) return;
            e.emitted[c] = !0, Jr(d, e, 6, s)
        }
    }

    function Fb(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const a = e.emits;
        let l = {},
            c = !1;
        if (!Ke(e)) {
            const f = d => {
                const p = Fb(d, t, !0);
                p && (c = !0, tr(l, p))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !a && !c ? (n.set(e, null), null) : (ke(a) ? a.forEach(f => l[f] = null) : tr(l, a), n.set(e, l), l)
    }

    function mc(e, t) {
        return !e || !cc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), tt(e, t[0].toLowerCase() + t.slice(1)) || tt(e, os(t)) || tt(e, t))
    }
    let ar = null,
        vc = null;

    function Vl(e) {
        const t = ar;
        return ar = e, vc = e && e.type.__scopeId || null, t
    }

    function yc(e) {
        vc = e
    }

    function _c() {
        vc = null
    }

    function Nh(e, t = ar, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && qv(-1);
            const a = Vl(t),
                l = e(...s);
            return Vl(a), n._d && qv(1), l
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function mf(e) {
        const {
            type: t,
            vnode: r,
            proxy: n,
            withProxy: s,
            props: a,
            propsOptions: [l],
            slots: c,
            attrs: f,
            emit: d,
            render: p,
            renderCache: y,
            data: b,
            setupState: w,
            ctx: P,
            inheritAttrs: M
        } = e;
        let G, C;
        const H = Vl(e);
        try {
            if (r.shapeFlag & 4) {
                const V = s || n;
                G = Sn(p.call(V, V, y, a, w, b, P)), C = f
            } else {
                const V = t;
                G = Sn(V.length > 1 ? V(a, {
                    attrs: f,
                    slots: c,
                    emit: d
                }) : V(a, null)), C = t.props ? f : DN(f)
            }
        } catch (V) {
            Ga.length = 0, pc(V, e, 1), G = pt(Qr)
        }
        let z = G;
        if (C && M !== !1) {
            const V = Object.keys(C),
                {
                    shapeFlag: j
                } = z;
            V.length && j & 7 && (l && V.some(bh) && (C = MN(C, l)), z = pi(z, C))
        }
        return r.dirs && (z = pi(z), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && (z.transition = r.transition), G = z, Vl(H), G
    }
    const DN = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || cc(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        MN = (e, t) => {
            const r = {};
            for (const n in e)(!bh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function UN(e, t, r) {
        const {
            props: n,
            children: s,
            component: a
        } = e, {
            props: l,
            children: c,
            patchFlag: f
        } = t, d = a.emitsOptions;
        if (t.dirs || t.transition) return !0;
        if (r && f >= 0) {
            if (f & 1024) return !0;
            if (f & 16) return n ? Mv(n, l, d) : !!l;
            if (f & 8) {
                const p = t.dynamicProps;
                for (let y = 0; y < p.length; y++) {
                    const b = p[y];
                    if (l[b] !== n[b] && !mc(d, b)) return !0
                }
            }
        } else return (s || c) && (!c || !c.$stable) ? !0 : n === l ? !1 : n ? l ? Mv(n, l, d) : !0 : !!l;
        return !1
    }

    function Mv(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const a = n[s];
            if (t[a] !== e[a] && !mc(r, a)) return !0
        }
        return !1
    }

    function FN({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const BN = e => e.__isSuspense;

    function GN(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : kN(e)
    }

    function jN(e, t) {
        if (Yt) {
            let r = Yt.provides;
            const n = Yt.parent && Yt.parent.provides;
            n === r && (r = Yt.provides = Object.create(n)), r[e] = t
        }
    }

    function Qi(e, t, r = !1) {
        const n = Yt || ar;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && Ke(t) ? t.call(n.proxy) : t
        }
    }
    const Uv = {};

    function Zi(e, t, r) {
        return Bb(e, t, r)
    }

    function Bb(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: a,
        onTrigger: l
    } = vt) {
        const c = Yt;
        let f, d = !1,
            p = !1;
        if (Zt(e) ? (f = () => e.value, d = md(e)) : Fs(e) ? (f = () => e, n = !0) : ke(e) ? (p = !0, d = e.some(C => Fs(C) || md(C)), f = () => e.map(C => {
                if (Zt(C)) return C.value;
                if (Fs(C)) return Xi(C);
                if (Ke(C)) return fi(C, c, 2)
            })) : Ke(e) ? t ? f = () => fi(e, c, 2) : f = () => {
                if (!(c && c.isUnmounted)) return y && y(), Jr(e, c, 3, [b])
            } : f = un, t && n) {
            const C = f;
            f = () => Xi(C())
        }
        let y, b = C => {
            y = G.onStop = () => {
                fi(C, c, 4)
            }
        };
        if (to) return b = un, t ? r && Jr(t, c, 3, [f(), p ? [] : void 0, b]) : f(), un;
        let w = p ? [] : Uv;
        const P = () => {
            if (!!G.active)
                if (t) {
                    const C = G.run();
                    (n || d || (p ? C.some((H, z) => Xa(H, w[z])) : Xa(C, w))) && (y && y(), Jr(t, c, 3, [C, w === Uv ? void 0 : w, b]), w = C)
                } else G.run()
        };
        P.allowRecurse = !!t;
        let M;
        s === "sync" ? M = P : s === "post" ? M = () => Ar(P, c && c.suspense) : M = () => PN(P);
        const G = new Oh(f, M);
        return t ? r ? P() : w = G.run() : s === "post" ? Ar(G.run.bind(G), c && c.suspense) : G.run(), () => {
            G.stop(), c && c.scope && Th(c.scope.effects, G)
        }
    }

    function WN(e, t, r) {
        const n = this.proxy,
            s = Ft(e) ? e.includes(".") ? Gb(n, e) : () => n[e] : e.bind(n, n);
        let a;
        Ke(t) ? a = t : (a = t.handler, r = t);
        const l = Yt;
        Ys(this);
        const c = Bb(s, a.bind(n), r);
        return l ? Ys(l) : es(), c
    }

    function Gb(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Xi(e, t) {
        if (!Rt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), Zt(e)) Xi(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Xi(e[r], t);
        else if (uc(e) || Us(e)) e.forEach(r => {
            Xi(r, t)
        });
        else if (pb(e))
            for (const r in e) Xi(e[r], t);
        return e
    }

    function VN() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return Ph(() => {
            e.isMounted = !0
        }), qb(() => {
            e.isUnmounting = !0
        }), e
    }
    const zr = [Function, Array],
        KN = {
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
                const r = as(),
                    n = VN();
                let s;
                return () => {
                    const a = t.default && Vb(t.default(), !0);
                    if (!a || !a.length) return;
                    let l = a[0];
                    if (a.length > 1) {
                        for (const M of a)
                            if (M.type !== Qr) {
                                l = M;
                                break
                            }
                    }
                    const c = at(e),
                        {
                            mode: f
                        } = c;
                    if (n.isLeaving) return vf(l);
                    const d = Fv(l);
                    if (!d) return vf(l);
                    const p = _d(d, c, n, r);
                    Ed(d, p);
                    const y = r.subTree,
                        b = y && Fv(y);
                    let w = !1;
                    const {
                        getTransitionKey: P
                    } = d.type;
                    if (P) {
                        const M = P();
                        s === void 0 ? s = M : M !== s && (s = M, w = !0)
                    }
                    if (b && b.type !== Qr && (!Ki(d, b) || w)) {
                        const M = _d(b, c, n, r);
                        if (Ed(b, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, vf(l);
                        f === "in-out" && d.type !== Qr && (M.delayLeave = (G, C, H) => {
                            const z = Wb(n, b);
                            z[String(b.key)] = b, G._leaveCb = () => {
                                C(), G._leaveCb = void 0, delete p.delayedLeave
                            }, p.delayedLeave = H
                        })
                    }
                    return l
                }
            }
        },
        jb = KN;

    function Wb(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function _d(e, t, r, n) {
        const {
            appear: s,
            mode: a,
            persisted: l = !1,
            onBeforeEnter: c,
            onEnter: f,
            onAfterEnter: d,
            onEnterCancelled: p,
            onBeforeLeave: y,
            onLeave: b,
            onAfterLeave: w,
            onLeaveCancelled: P,
            onBeforeAppear: M,
            onAppear: G,
            onAfterAppear: C,
            onAppearCancelled: H
        } = t, z = String(e.key), V = Wb(r, e), j = (le, ue) => {
            le && Jr(le, n, 9, ue)
        }, Q = (le, ue) => {
            const $e = ue[1];
            j(le, ue), ke(le) ? le.every(Ie => Ie.length <= 1) && $e() : le.length <= 1 && $e()
        }, oe = {
            mode: a,
            persisted: l,
            beforeEnter(le) {
                let ue = c;
                if (!r.isMounted)
                    if (s) ue = M || c;
                    else return;
                le._leaveCb && le._leaveCb(!0);
                const $e = V[z];
                $e && Ki(e, $e) && $e.el._leaveCb && $e.el._leaveCb(), j(ue, [le])
            },
            enter(le) {
                let ue = f,
                    $e = d,
                    Ie = p;
                if (!r.isMounted)
                    if (s) ue = G || f, $e = C || d, Ie = H || p;
                    else return;
                let fe = !1;
                const Ce = le._enterCb = U => {
                    fe || (fe = !0, U ? j(Ie, [le]) : j($e, [le]), oe.delayedLeave && oe.delayedLeave(), le._enterCb = void 0)
                };
                ue ? Q(ue, [le, Ce]) : Ce()
            },
            leave(le, ue) {
                const $e = String(e.key);
                if (le._enterCb && le._enterCb(!0), r.isUnmounting) return ue();
                j(y, [le]);
                let Ie = !1;
                const fe = le._leaveCb = Ce => {
                    Ie || (Ie = !0, ue(), Ce ? j(P, [le]) : j(w, [le]), le._leaveCb = void 0, V[$e] === e && delete V[$e])
                };
                V[$e] = e, b ? Q(b, [le, fe]) : fe()
            },
            clone(le) {
                return _d(le, t, r, n)
            }
        };
        return oe
    }

    function vf(e) {
        if (Ec(e)) return e = pi(e), e.children = null, e
    }

    function Fv(e) {
        return Ec(e) ? e.children ? e.children[0] : void 0 : e
    }

    function Ed(e, t) {
        e.shapeFlag & 6 && e.component ? Ed(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function Vb(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let a = 0; a < e.length; a++) {
            let l = e[a];
            const c = r == null ? l.key : String(r) + String(l.key != null ? l.key : a);
            l.type === qe ? (l.patchFlag & 128 && s++, n = n.concat(Vb(l.children, t, c))) : (t || l.type !== Qr) && n.push(c != null ? pi(l, {
                key: c
            }) : l)
        }
        if (s > 1)
            for (let a = 0; a < n.length; a++) n[a].patchFlag = -2;
        return n
    }

    function rt(e) {
        return Ke(e) ? {
            setup: e,
            name: e.name
        } : e
    }
    const Ba = e => !!e.type.__asyncLoader,
        Ec = e => e.type.__isKeepAlive;

    function HN(e, t) {
        Kb(e, "a", t)
    }

    function qN(e, t) {
        Kb(e, "da", t)
    }

    function Kb(e, t, r = Yt) {
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
            for (; s && s.parent;) Ec(s.parent.vnode) && YN(n, t, r, s), s = s.parent
        }
    }

    function YN(e, t, r, n) {
        const s = bc(t, e, n, !0);
        kh(() => {
            Th(n[t], s)
        }, r)
    }

    function bc(e, t, r = Yt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                a = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    ra(), Ys(r);
                    const c = Jr(t, r, e, l);
                    return es(), na(), c
                });
            return n ? s.unshift(a) : s.push(a), a
        }
    }
    const jn = e => (t, r = Yt) => (!to || e === "sp") && bc(e, t, r),
        Hb = jn("bm"),
        Ph = jn("m"),
        zN = jn("bu"),
        XN = jn("u"),
        qb = jn("bum"),
        kh = jn("um"),
        JN = jn("sp"),
        QN = jn("rtg"),
        ZN = jn("rtc");

    function eP(e, t = Yt) {
        bc("ec", e, t)
    }

    function Se(e, t) {
        const r = ar;
        if (r === null) return e;
        const n = Sc(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let a = 0; a < t.length; a++) {
            let [l, c, f, d = vt] = t[a];
            Ke(l) && (l = {
                mounted: l,
                updated: l
            }), l.deep && Xi(c), s.push({
                dir: l,
                instance: n,
                value: c,
                oldValue: void 0,
                arg: f,
                modifiers: d
            })
        }
        return e
    }

    function xi(e, t, r, n) {
        const s = e.dirs,
            a = t && t.dirs;
        for (let l = 0; l < s.length; l++) {
            const c = s[l];
            a && (c.oldValue = a[l].value);
            let f = c.dir[n];
            f && (ra(), Jr(f, r, 8, [e.el, c, e, t]), na())
        }
    }
    const xh = "components",
        tP = "directives";

    function gr(e, t) {
        return Mh(xh, e, !0, t) || e
    }
    const Yb = Symbol();

    function Dh(e) {
        return Ft(e) ? Mh(xh, e, !1) || e : e || Yb
    }

    function Mt(e) {
        return Mh(tP, e)
    }

    function Mh(e, t, r = !0, n = !1) {
        const s = ar || Yt;
        if (s) {
            const a = s.type;
            if (e === xh) {
                const c = $P(a, !1);
                if (c && (c === t || c === wn(t) || c === dc(wn(t)))) return a
            }
            const l = Bv(s[e] || a[e], t) || Bv(s.appContext[e], t);
            return !l && n ? a : l
        }
    }

    function Bv(e, t) {
        return e && (e[t] || e[wn(t)] || e[dc(wn(t))])
    }

    function hn(e, t, r, n) {
        let s;
        const a = r && r[n];
        if (ke(e) || Ft(e)) {
            s = new Array(e.length);
            for (let l = 0, c = e.length; l < c; l++) s[l] = t(e[l], l, void 0, a && a[l])
        } else if (typeof e == "number") {
            s = new Array(e);
            for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, a && a[l])
        } else if (Rt(e))
            if (e[Symbol.iterator]) s = Array.from(e, (l, c) => t(l, c, void 0, a && a[c]));
            else {
                const l = Object.keys(e);
                s = new Array(l.length);
                for (let c = 0, f = l.length; c < f; c++) {
                    const d = l[c];
                    s[c] = t(e[d], d, c, a && a[c])
                }
            }
        else s = [];
        return r && (r[n] = s), s
    }

    function rP(e, t, r = {}, n, s) {
        if (ar.isCE || ar.parent && Ba(ar.parent) && ar.parent.isCE) return pt("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let a = e[t];
        a && a._c && (a._d = !1), F();
        const l = a && zb(a(r)),
            c = fn(qe, {
                key: r.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c
    }

    function zb(e) {
        return e.some(t => ql(t) ? !(t.type === Qr || t.type === qe && !zb(t.children)) : !0) ? e : null
    }
    const bd = e => e ? lT(e) ? Sc(e) || e.proxy : bd(e.parent) : null,
        Kl = tr(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => bd(e.parent),
            $root: e => bd(e.root),
            $emit: e => e.emit,
            $options: e => Jb(e),
            $forceUpdate: e => e.f || (e.f = () => kb(e.update)),
            $nextTick: e => e.n || (e.n = RN.bind(e.proxy)),
            $watch: e => WN.bind(e)
        }),
        nP = {
            get({
                _: e
            }, t) {
                const {
                    ctx: r,
                    setupState: n,
                    data: s,
                    props: a,
                    accessCache: l,
                    type: c,
                    appContext: f
                } = e;
                let d;
                if (t[0] !== "$") {
                    const w = l[t];
                    if (w !== void 0) switch (w) {
                        case 1:
                            return n[t];
                        case 2:
                            return s[t];
                        case 4:
                            return r[t];
                        case 3:
                            return a[t]
                    } else {
                        if (n !== vt && tt(n, t)) return l[t] = 1, n[t];
                        if (s !== vt && tt(s, t)) return l[t] = 2, s[t];
                        if ((d = e.propsOptions[0]) && tt(d, t)) return l[t] = 3, a[t];
                        if (r !== vt && tt(r, t)) return l[t] = 4, r[t];
                        Td && (l[t] = 0)
                    }
                }
                const p = Kl[t];
                let y, b;
                if (p) return t === "$attrs" && Dr(e, "get", t), p(e);
                if ((y = c.__cssModules) && (y = y[t])) return y;
                if (r !== vt && tt(r, t)) return l[t] = 4, r[t];
                if (b = f.config.globalProperties, tt(b, t)) return b[t]
            },
            set({
                _: e
            }, t, r) {
                const {
                    data: n,
                    setupState: s,
                    ctx: a
                } = e;
                return s !== vt && tt(s, t) ? (s[t] = r, !0) : n !== vt && tt(n, t) ? (n[t] = r, !0) : tt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0)
            },
            has({
                _: {
                    data: e,
                    setupState: t,
                    accessCache: r,
                    ctx: n,
                    appContext: s,
                    propsOptions: a
                }
            }, l) {
                let c;
                return !!r[l] || e !== vt && tt(e, l) || t !== vt && tt(t, l) || (c = a[0]) && tt(c, l) || tt(n, l) || tt(Kl, l) || tt(s.config.globalProperties, l)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : tt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let Td = !0;

    function iP(e) {
        const t = Jb(e),
            r = e.proxy,
            n = e.ctx;
        Td = !1, t.beforeCreate && Gv(t.beforeCreate, e, "bc");
        const {
            data: s,
            computed: a,
            methods: l,
            watch: c,
            provide: f,
            inject: d,
            created: p,
            beforeMount: y,
            mounted: b,
            beforeUpdate: w,
            updated: P,
            activated: M,
            deactivated: G,
            beforeDestroy: C,
            beforeUnmount: H,
            destroyed: z,
            unmounted: V,
            render: j,
            renderTracked: Q,
            renderTriggered: oe,
            errorCaptured: le,
            serverPrefetch: ue,
            expose: $e,
            inheritAttrs: Ie,
            components: fe,
            directives: Ce,
            filters: U
        } = t;
        if (d && sP(d, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const be in l) {
                const ye = l[be];
                Ke(ye) && (n[be] = ye.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            Rt(be) && (e.data = Gn(be))
        }
        if (Td = !0, a)
            for (const be in a) {
                const ye = a[be],
                    Oe = Ke(ye) ? ye.bind(r, r) : Ke(ye.get) ? ye.get.bind(r, r) : un,
                    Ue = !Ke(ye) && Ke(ye.set) ? ye.set.bind(r) : un,
                    je = xr({
                        get: Oe,
                        set: Ue
                    });
                Object.defineProperty(n, be, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => je.value,
                    set: nt => je.value = nt
                })
            }
        if (c)
            for (const be in c) Xb(c[be], n, r, be);
        if (f) {
            const be = Ke(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ye => {
                jN(ye, be[ye])
            })
        }
        p && Gv(p, e, "c");

        function de(be, ye) {
            ke(ye) ? ye.forEach(Oe => be(Oe.bind(r))) : ye && be(ye.bind(r))
        }
        if (de(Hb, y), de(Ph, b), de(zN, w), de(XN, P), de(HN, M), de(qN, G), de(eP, le), de(ZN, Q), de(QN, oe), de(qb, H), de(kh, V), de(JN, ue), ke($e))
            if ($e.length) {
                const be = e.exposed || (e.exposed = {});
                $e.forEach(ye => {
                    Object.defineProperty(be, ye, {
                        get: () => r[ye],
                        set: Oe => r[ye] = Oe
                    })
                })
            } else e.exposed || (e.exposed = {});
        j && e.render === un && (e.render = j), Ie != null && (e.inheritAttrs = Ie), fe && (e.components = fe), Ce && (e.directives = Ce)
    }

    function sP(e, t, r = un, n = !1) {
        ke(e) && (e = Ad(e));
        for (const s in e) {
            const a = e[s];
            let l;
            Rt(a) ? "default" in a ? l = Qi(a.from || s, a.default, !0) : l = Qi(a.from || s) : l = Qi(a), Zt(l) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => l.value,
                set: c => l.value = c
            }) : t[s] = l
        }
    }

    function Gv(e, t, r) {
        Jr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function Xb(e, t, r, n) {
        const s = n.includes(".") ? Gb(r, n) : () => r[n];
        if (Ft(e)) {
            const a = t[e];
            Ke(a) && Zi(s, a)
        } else if (Ke(e)) Zi(s, e.bind(r));
        else if (Rt(e))
            if (ke(e)) e.forEach(a => Xb(a, t, r, n));
            else {
                const a = Ke(e.handler) ? e.handler.bind(r) : t[e.handler];
                Ke(a) && Zi(s, a, e)
            }
    }

    function Jb(e) {
        const t = e.type,
            {
                mixins: r,
                extends: n
            } = t,
            {
                mixins: s,
                optionsCache: a,
                config: {
                    optionMergeStrategies: l
                }
            } = e.appContext,
            c = a.get(t);
        let f;
        return c ? f = c : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(d => Hl(f, d, l, !0)), Hl(f, t, l)), a.set(t, f), f
    }

    function Hl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: a
        } = t;
        a && Hl(e, a, r, !0), s && s.forEach(l => Hl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const c = aP[l] || r && r[l];
                e[l] = c ? c(e[l], t[l]) : t[l]
            } return e
    }
    const aP = {
        data: jv,
        props: ji,
        emits: ji,
        methods: ji,
        computed: ji,
        beforeCreate: hr,
        created: hr,
        beforeMount: hr,
        mounted: hr,
        beforeUpdate: hr,
        updated: hr,
        beforeDestroy: hr,
        beforeUnmount: hr,
        destroyed: hr,
        unmounted: hr,
        activated: hr,
        deactivated: hr,
        errorCaptured: hr,
        serverPrefetch: hr,
        components: ji,
        directives: ji,
        watch: lP,
        provide: jv,
        inject: oP
    };

    function jv(e, t) {
        return t ? e ? function() {
            return tr(Ke(e) ? e.call(this, this) : e, Ke(t) ? t.call(this, this) : t)
        } : t : e
    }

    function oP(e, t) {
        return ji(Ad(e), Ad(t))
    }

    function Ad(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
            return t
        }
        return e
    }

    function hr(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function ji(e, t) {
        return e ? tr(tr(Object.create(null), e), t) : t
    }

    function lP(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = tr(Object.create(null), e);
        for (const n in t) r[n] = hr(e[n], t[n]);
        return r
    }

    function cP(e, t, r, n = !1) {
        const s = {},
            a = {};
        Gl(a, Ac, 1), e.propsDefaults = Object.create(null), Qb(e, t, s, a);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : TN(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a
    }

    function uP(e, t, r, n) {
        const {
            props: s,
            attrs: a,
            vnode: {
                patchFlag: l
            }
        } = e, c = at(s), [f] = e.propsOptions;
        let d = !1;
        if ((n || l > 0) && !(l & 16)) {
            if (l & 8) {
                const p = e.vnode.dynamicProps;
                for (let y = 0; y < p.length; y++) {
                    let b = p[y];
                    if (mc(e.emitsOptions, b)) continue;
                    const w = t[b];
                    if (f)
                        if (tt(a, b)) w !== a[b] && (a[b] = w, d = !0);
                        else {
                            const P = wn(b);
                            s[P] = Sd(f, c, P, w, e, !1)
                        }
                    else w !== a[b] && (a[b] = w, d = !0)
                }
            }
        } else {
            Qb(e, t, s, a) && (d = !0);
            let p;
            for (const y in c)(!t || !tt(t, y) && ((p = os(y)) === y || !tt(t, p))) && (f ? r && (r[y] !== void 0 || r[p] !== void 0) && (s[y] = Sd(f, c, y, void 0, e, !0)) : delete s[y]);
            if (a !== c)
                for (const y in a)(!t || !tt(t, y) && !0) && (delete a[y], d = !0)
        }
        d && Bn(e, "set", "$attrs")
    }

    function Qb(e, t, r, n) {
        const [s, a] = e.propsOptions;
        let l = !1,
            c;
        if (t)
            for (let f in t) {
                if (Nl(f)) continue;
                const d = t[f];
                let p;
                s && tt(s, p = wn(f)) ? !a || !a.includes(p) ? r[p] = d : (c || (c = {}))[p] = d : mc(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, l = !0)
            }
        if (a) {
            const f = at(r),
                d = c || vt;
            for (let p = 0; p < a.length; p++) {
                const y = a[p];
                r[y] = Sd(s, f, y, d[y], e, !tt(d, y))
            }
        }
        return l
    }

    function Sd(e, t, r, n, s, a) {
        const l = e[r];
        if (l != null) {
            const c = tt(l, "default");
            if (c && n === void 0) {
                const f = l.default;
                if (l.type !== Function && Ke(f)) {
                    const {
                        propsDefaults: d
                    } = s;
                    r in d ? n = d[r] : (Ys(s), n = d[r] = f.call(null, t), es())
                } else n = f
            }
            l[0] && (a && !c ? n = !1 : l[1] && (n === "" || n === os(r)) && (n = !0))
        }
        return n
    }

    function Zb(e, t, r = !1) {
        const n = t.propsCache,
            s = n.get(e);
        if (s) return s;
        const a = e.props,
            l = {},
            c = [];
        let f = !1;
        if (!Ke(e)) {
            const p = y => {
                f = !0;
                const [b, w] = Zb(y, t, !0);
                tr(l, b), w && c.push(...w)
            };
            !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p)
        }
        if (!a && !f) return n.set(e, Ms), Ms;
        if (ke(a))
            for (let p = 0; p < a.length; p++) {
                const y = wn(a[p]);
                Wv(y) && (l[y] = vt)
            } else if (a)
                for (const p in a) {
                    const y = wn(p);
                    if (Wv(y)) {
                        const b = a[p],
                            w = l[y] = ke(b) || Ke(b) ? {
                                type: b
                            } : b;
                        if (w) {
                            const P = Hv(Boolean, w.type),
                                M = Hv(String, w.type);
                            w[0] = P > -1, w[1] = M < 0 || P < M, (P > -1 || tt(w, "default")) && c.push(y)
                        }
                    }
                }
        const d = [l, c];
        return n.set(e, d), d
    }

    function Wv(e) {
        return e[0] !== "$"
    }

    function Vv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Kv(e, t) {
        return Vv(e) === Vv(t)
    }

    function Hv(e, t) {
        return ke(t) ? t.findIndex(r => Kv(r, e)) : Ke(t) && Kv(t, e) ? 0 : -1
    }
    const eT = e => e[0] === "_" || e === "$stable",
        Uh = e => ke(e) ? e.map(Sn) : [Sn(e)],
        fP = (e, t, r) => {
            if (t._n) return t;
            const n = Nh((...s) => Uh(t(...s)), r);
            return n._c = !1, n
        },
        tT = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (eT(s)) continue;
                const a = e[s];
                if (Ke(a)) t[s] = fP(s, a, n);
                else if (a != null) {
                    const l = Uh(a);
                    t[s] = () => l
                }
            }
        },
        rT = (e, t) => {
            const r = Uh(t);
            e.slots.default = () => r
        },
        dP = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = at(t), Gl(t, "_", r)) : tT(t, e.slots = {})
            } else e.slots = {}, t && rT(e, t);
            Gl(e.slots, Ac, 1)
        },
        hP = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let a = !0,
                l = vt;
            if (n.shapeFlag & 32) {
                const c = t._;
                c ? r && c === 1 ? a = !1 : (tr(s, t), !r && c === 1 && delete s._) : (a = !t.$stable, tT(t, s)), l = t
            } else t && (rT(e, t), l = {
                default: 1
            });
            if (a)
                for (const c in s) !eT(c) && !(c in l) && delete s[c]
        };

    function nT() {
        return {
            app: null,
            config: {
                isNativeTag: jL,
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
    let pP = 0;

    function gP(e, t) {
        return function(n, s = null) {
            Ke(n) || (n = Object.assign({}, n)), s != null && !Rt(s) && (s = null);
            const a = nT(),
                l = new Set;
            let c = !1;
            const f = a.app = {
                _uid: pP++,
                _component: n,
                _props: s,
                _container: null,
                _context: a,
                _instance: null,
                version: LP,
                get config() {
                    return a.config
                },
                set config(d) {},
                use(d, ...p) {
                    return l.has(d) || (d && Ke(d.install) ? (l.add(d), d.install(f, ...p)) : Ke(d) && (l.add(d), d(f, ...p))), f
                },
                mixin(d) {
                    return a.mixins.includes(d) || a.mixins.push(d), f
                },
                component(d, p) {
                    return p ? (a.components[d] = p, f) : a.components[d]
                },
                directive(d, p) {
                    return p ? (a.directives[d] = p, f) : a.directives[d]
                },
                mount(d, p, y) {
                    if (!c) {
                        const b = pt(n, s);
                        return b.appContext = a, p && t ? t(b, d) : e(b, d, y), c = !0, f._container = d, d.__vue_app__ = f, Sc(b.component) || b.component.proxy
                    }
                },
                unmount() {
                    c && (e(null, f._container), delete f._container.__vue_app__)
                },
                provide(d, p) {
                    return a.provides[d] = p, f
                }
            };
            return f
        }
    }

    function Od(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((b, w) => Od(b, t && (ke(t) ? t[w] : t), r, n, s));
            return
        }
        if (Ba(n) && !s) return;
        const a = n.shapeFlag & 4 ? Sc(n.component) || n.component.proxy : n.el,
            l = s ? null : a,
            {
                i: c,
                r: f
            } = e,
            d = t && t.r,
            p = c.refs === vt ? c.refs = {} : c.refs,
            y = c.setupState;
        if (d != null && d !== f && (Ft(d) ? (p[d] = null, tt(y, d) && (y[d] = null)) : Zt(d) && (d.value = null)), Ke(f)) fi(f, c, 12, [l, p]);
        else {
            const b = Ft(f),
                w = Zt(f);
            if (b || w) {
                const P = () => {
                    if (e.f) {
                        const M = b ? p[f] : f.value;
                        s ? ke(M) && Th(M, a) : ke(M) ? M.includes(a) || M.push(a) : b ? (p[f] = [a], tt(y, f) && (y[f] = p[f])) : (f.value = [a], e.k && (p[e.k] = f.value))
                    } else b ? (p[f] = l, tt(y, f) && (y[f] = l)) : w && (f.value = l, e.k && (p[e.k] = l))
                };
                l ? (P.id = -1, Ar(P, r)) : P()
            }
        }
    }
    const Ar = GN;

    function mP(e) {
        return vP(e)
    }

    function vP(e, t) {
        const r = YL();
        r.__VUE__ = !0;
        const {
            insert: n,
            remove: s,
            patchProp: a,
            createElement: l,
            createText: c,
            createComment: f,
            setText: d,
            setElementText: p,
            parentNode: y,
            nextSibling: b,
            setScopeId: w = un,
            cloneNode: P,
            insertStaticContent: M
        } = e, G = (m, g, S, D = null, B = null, Y = null, ce = !1, se = null, re = !!g.dynamicChildren) => {
            if (m === g) return;
            m && !Ki(m, g) && (D = St(m), It(m, B, Y, !0), m = null), g.patchFlag === -2 && (re = !1, g.dynamicChildren = null);
            const {
                type: $,
                ref: K,
                shapeFlag: he
            } = g;
            switch ($) {
                case Tc:
                    C(m, g, S, D);
                    break;
                case Qr:
                    H(m, g, S, D);
                    break;
                case yf:
                    m == null && z(g, S, D, ce);
                    break;
                case qe:
                    Ce(m, g, S, D, B, Y, ce, se, re);
                    break;
                default:
                    he & 1 ? Q(m, g, S, D, B, Y, ce, se, re) : he & 6 ? U(m, g, S, D, B, Y, ce, se, re) : (he & 64 || he & 128) && $.process(m, g, S, D, B, Y, ce, se, re, xt)
            }
            K != null && B && Od(K, m && m.ref, Y, g || m, !g)
        }, C = (m, g, S, D) => {
            if (m == null) n(g.el = c(g.children), S, D);
            else {
                const B = g.el = m.el;
                g.children !== m.children && d(B, g.children)
            }
        }, H = (m, g, S, D) => {
            m == null ? n(g.el = f(g.children || ""), S, D) : g.el = m.el
        }, z = (m, g, S, D) => {
            [m.el, m.anchor] = M(m.children, g, S, D, m.el, m.anchor)
        }, V = ({
            el: m,
            anchor: g
        }, S, D) => {
            let B;
            for (; m && m !== g;) B = b(m), n(m, S, D), m = B;
            n(g, S, D)
        }, j = ({
            el: m,
            anchor: g
        }) => {
            let S;
            for (; m && m !== g;) S = b(m), s(m), m = S;
            s(g)
        }, Q = (m, g, S, D, B, Y, ce, se, re) => {
            ce = ce || g.type === "svg", m == null ? oe(g, S, D, B, Y, ce, se, re) : $e(m, g, B, Y, ce, se, re)
        }, oe = (m, g, S, D, B, Y, ce, se) => {
            let re, $;
            const {
                type: K,
                props: he,
                shapeFlag: pe,
                transition: Re,
                patchFlag: xe,
                dirs: O
            } = m;
            if (m.el && P !== void 0 && xe === -1) re = m.el = P(m.el);
            else {
                if (re = m.el = l(m.type, Y, he && he.is, he), pe & 8 ? p(re, m.children) : pe & 16 && ue(m.children, re, null, D, B, Y && K !== "foreignObject", ce, se), O && xi(m, null, D, "created"), he) {
                    for (const L in he) L !== "value" && !Nl(L) && a(re, L, null, he[L], Y, m.children, D, B, lt);
                    "value" in he && a(re, "value", null, he.value), ($ = he.onVnodeBeforeMount) && _n($, D, m)
                }
                le(re, m, m.scopeId, ce, D)
            }
            O && xi(m, null, D, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Re && !Re.persisted;
            T && Re.beforeEnter(re), n(re, g, S), (($ = he && he.onVnodeMounted) || T || O) && Ar(() => {
                $ && _n($, D, m), T && Re.enter(re), O && xi(m, null, D, "mounted")
            }, B)
        }, le = (m, g, S, D, B) => {
            if (S && w(m, S), D)
                for (let Y = 0; Y < D.length; Y++) w(m, D[Y]);
            if (B) {
                let Y = B.subTree;
                if (g === Y) {
                    const ce = B.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, g, S, D, B, Y, ce, se, re = 0) => {
            for (let $ = re; $ < m.length; $++) {
                const K = m[$] = se ? si(m[$]) : Sn(m[$]);
                G(null, K, g, S, D, B, Y, ce, se)
            }
        }, $e = (m, g, S, D, B, Y, ce) => {
            const se = g.el = m.el;
            let {
                patchFlag: re,
                dynamicChildren: $,
                dirs: K
            } = g;
            re |= m.patchFlag & 16;
            const he = m.props || vt,
                pe = g.props || vt;
            let Re;
            S && Di(S, !1), (Re = pe.onVnodeBeforeUpdate) && _n(Re, S, g, m), K && xi(g, m, S, "beforeUpdate"), S && Di(S, !0);
            const xe = B && g.type !== "foreignObject";
            if ($ ? Ie(m.dynamicChildren, $, se, S, D, xe, Y) : ce || Oe(m, g, se, null, S, D, xe, Y, !1), re > 0) {
                if (re & 16) fe(se, g, he, pe, S, D, B);
                else if (re & 2 && he.class !== pe.class && a(se, "class", null, pe.class, B), re & 4 && a(se, "style", he.style, pe.style, B), re & 8) {
                    const O = g.dynamicProps;
                    for (let T = 0; T < O.length; T++) {
                        const L = O[T],
                            A = he[L],
                            N = pe[L];
                        (N !== A || L === "value") && a(se, L, A, N, B, m.children, S, D, lt)
                    }
                }
                re & 1 && m.children !== g.children && p(se, g.children)
            } else !ce && $ == null && fe(se, g, he, pe, S, D, B);
            ((Re = pe.onVnodeUpdated) || K) && Ar(() => {
                Re && _n(Re, S, g, m), K && xi(g, m, S, "updated")
            }, D)
        }, Ie = (m, g, S, D, B, Y, ce) => {
            for (let se = 0; se < g.length; se++) {
                const re = m[se],
                    $ = g[se],
                    K = re.el && (re.type === qe || !Ki(re, $) || re.shapeFlag & 70) ? y(re.el) : S;
                G(re, $, K, null, D, B, Y, ce, !0)
            }
        }, fe = (m, g, S, D, B, Y, ce) => {
            if (S !== D) {
                for (const se in D) {
                    if (Nl(se)) continue;
                    const re = D[se],
                        $ = S[se];
                    re !== $ && se !== "value" && a(m, se, $, re, ce, g.children, B, Y, lt)
                }
                if (S !== vt)
                    for (const se in S) !Nl(se) && !(se in D) && a(m, se, S[se], null, ce, g.children, B, Y, lt);
                "value" in D && a(m, "value", S.value, D.value)
            }
        }, Ce = (m, g, S, D, B, Y, ce, se, re) => {
            const $ = g.el = m ? m.el : c(""),
                K = g.anchor = m ? m.anchor : c("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Re
            } = g;
            Re && (se = se ? se.concat(Re) : Re), m == null ? (n($, S, D), n(K, S, D), ue(g.children, S, K, B, Y, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ie(m.dynamicChildren, pe, S, B, Y, ce, se), (g.key != null || B && g === B.subTree) && iT(m, g, !0)) : Oe(m, g, S, K, B, Y, ce, se, re)
        }, U = (m, g, S, D, B, Y, ce, se, re) => {
            g.slotScopeIds = se, m == null ? g.shapeFlag & 512 ? B.ctx.activate(g, S, D, ce, re) : ie(g, S, D, B, Y, ce, re) : de(m, g, re)
        }, ie = (m, g, S, D, B, Y, ce) => {
            const se = m.component = SP(m, D, B);
            if (Ec(m) && (se.ctx.renderer = xt), OP(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !m.el) {
                    const re = se.subTree = pt(Qr);
                    H(null, re, g, S)
                }
                return
            }
            be(se, m, g, S, B, Y, ce)
        }, de = (m, g, S) => {
            const D = g.component = m.component;
            if (UN(m, g, S))
                if (D.asyncDep && !D.asyncResolved) {
                    ye(D, g, S);
                    return
                } else D.next = g, NN(D.update), D.update();
            else g.el = m.el, D.vnode = g
        }, be = (m, g, S, D, B, Y, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: K,
                            bu: he,
                            u: pe,
                            parent: Re,
                            vnode: xe
                        } = m, O = K, T;
                        Di(m, !1), K ? (K.el = xe.el, ye(m, K, ce)) : K = xe, he && Pl(he), (T = K.props && K.props.onVnodeBeforeUpdate) && _n(T, Re, K, xe), Di(m, !0);
                        const L = mf(m),
                            A = m.subTree;
                        m.subTree = L, G(A, L, y(A.el), St(A), m, B, Y), K.el = L.el, O === null && FN(m, L.el), pe && Ar(pe, B), (T = K.props && K.props.onVnodeUpdated) && Ar(() => _n(T, Re, K, xe), B)
                    } else {
                        let K;
                        const {
                            el: he,
                            props: pe
                        } = g, {
                            bm: Re,
                            m: xe,
                            parent: O
                        } = m, T = Ba(g);
                        if (Di(m, !1), Re && Pl(Re), !T && (K = pe && pe.onVnodeBeforeMount) && _n(K, O, g), Di(m, !0), he && Dt) {
                            const L = () => {
                                m.subTree = mf(m), Dt(he, m.subTree, m, B, null)
                            };
                            T ? g.type.__asyncLoader().then(() => !m.isUnmounted && L()) : L()
                        } else {
                            const L = m.subTree = mf(m);
                            G(null, L, S, D, m, B, Y), g.el = L.el
                        }
                        if (xe && Ar(xe, B), !T && (K = pe && pe.onVnodeMounted)) {
                            const L = g;
                            Ar(() => _n(K, O, L), B)
                        }(g.shapeFlag & 256 || O && Ba(O.vnode) && O.vnode.shapeFlag & 256) && m.a && Ar(m.a, B), m.isMounted = !0, g = S = D = null
                    }
                },
                re = m.effect = new Oh(se, () => kb($), m.scope),
                $ = m.update = () => re.run();
            $.id = m.uid, Di(m, !0), $()
        }, ye = (m, g, S) => {
            g.component = m;
            const D = m.vnode.props;
            m.vnode = g, m.next = null, uP(m, g.props, D, S), hP(m, g.children, S), ra(), gc(void 0, m.update), na()
        }, Oe = (m, g, S, D, B, Y, ce, se, re = !1) => {
            const $ = m && m.children,
                K = m ? m.shapeFlag : 0,
                he = g.children,
                {
                    patchFlag: pe,
                    shapeFlag: Re
                } = g;
            if (pe > 0) {
                if (pe & 128) {
                    je($, he, S, D, B, Y, ce, se, re);
                    return
                } else if (pe & 256) {
                    Ue($, he, S, D, B, Y, ce, se, re);
                    return
                }
            }
            Re & 8 ? (K & 16 && lt($, B, Y), he !== $ && p(S, he)) : K & 16 ? Re & 16 ? je($, he, S, D, B, Y, ce, se, re) : lt($, B, Y, !0) : (K & 8 && p(S, ""), Re & 16 && ue(he, S, D, B, Y, ce, se, re))
        }, Ue = (m, g, S, D, B, Y, ce, se, re) => {
            m = m || Ms, g = g || Ms;
            const $ = m.length,
                K = g.length,
                he = Math.min($, K);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Re = g[pe] = re ? si(g[pe]) : Sn(g[pe]);
                G(m[pe], Re, S, null, B, Y, ce, se, re)
            }
            $ > K ? lt(m, B, Y, !0, !1, he) : ue(g, S, D, B, Y, ce, se, re, he)
        }, je = (m, g, S, D, B, Y, ce, se, re) => {
            let $ = 0;
            const K = g.length;
            let he = m.length - 1,
                pe = K - 1;
            for (; $ <= he && $ <= pe;) {
                const Re = m[$],
                    xe = g[$] = re ? si(g[$]) : Sn(g[$]);
                if (Ki(Re, xe)) G(Re, xe, S, null, B, Y, ce, se, re);
                else break;
                $++
            }
            for (; $ <= he && $ <= pe;) {
                const Re = m[he],
                    xe = g[pe] = re ? si(g[pe]) : Sn(g[pe]);
                if (Ki(Re, xe)) G(Re, xe, S, null, B, Y, ce, se, re);
                else break;
                he--, pe--
            }
            if ($ > he) {
                if ($ <= pe) {
                    const Re = pe + 1,
                        xe = Re < K ? g[Re].el : D;
                    for (; $ <= pe;) G(null, g[$] = re ? si(g[$]) : Sn(g[$]), S, xe, B, Y, ce, se, re), $++
                }
            } else if ($ > pe)
                for (; $ <= he;) It(m[$], B, Y, !0), $++;
            else {
                const Re = $,
                    xe = $,
                    O = new Map;
                for ($ = xe; $ <= pe; $++) {
                    const Ae = g[$] = re ? si(g[$]) : Sn(g[$]);
                    Ae.key != null && O.set(Ae.key, $)
                }
                let T, L = 0;
                const A = pe - xe + 1;
                let N = !1,
                    Z = 0;
                const ne = new Array(A);
                for ($ = 0; $ < A; $++) ne[$] = 0;
                for ($ = Re; $ <= he; $++) {
                    const Ae = m[$];
                    if (L >= A) {
                        It(Ae, B, Y, !0);
                        continue
                    }
                    let dt;
                    if (Ae.key != null) dt = O.get(Ae.key);
                    else
                        for (T = xe; T <= pe; T++)
                            if (ne[T - xe] === 0 && Ki(Ae, g[T])) {
                                dt = T;
                                break
                            } dt === void 0 ? It(Ae, B, Y, !0) : (ne[dt - xe] = $ + 1, dt >= Z ? Z = dt : N = !0, G(Ae, g[dt], S, null, B, Y, ce, se, re), L++)
                }
                const Ee = N ? yP(ne) : Ms;
                for (T = Ee.length - 1, $ = A - 1; $ >= 0; $--) {
                    const Ae = xe + $,
                        dt = g[Ae],
                        nr = Ae + 1 < K ? g[Ae + 1].el : D;
                    ne[$] === 0 ? G(null, dt, S, nr, B, Y, ce, se, re) : N && (T < 0 || $ !== Ee[T] ? nt(dt, S, nr, 2) : T--)
                }
            }
        }, nt = (m, g, S, D, B = null) => {
            const {
                el: Y,
                type: ce,
                transition: se,
                children: re,
                shapeFlag: $
            } = m;
            if ($ & 6) {
                nt(m.component.subTree, g, S, D);
                return
            }
            if ($ & 128) {
                m.suspense.move(g, S, D);
                return
            }
            if ($ & 64) {
                ce.move(m, g, S, xt);
                return
            }
            if (ce === qe) {
                n(Y, g, S);
                for (let he = 0; he < re.length; he++) nt(re[he], g, S, D);
                n(m.anchor, g, S);
                return
            }
            if (ce === yf) {
                V(m, g, S);
                return
            }
            if (D !== 2 && $ & 1 && se)
                if (D === 0) se.beforeEnter(Y), n(Y, g, S), Ar(() => se.enter(Y), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Re
                    } = se, xe = () => n(Y, g, S), O = () => {
                        he(Y, () => {
                            xe(), Re && Re()
                        })
                    };
                    pe ? pe(Y, xe, O) : O()
                }
            else n(Y, g, S)
        }, It = (m, g, S, D = !1, B = !1) => {
            const {
                type: Y,
                props: ce,
                ref: se,
                children: re,
                dynamicChildren: $,
                shapeFlag: K,
                patchFlag: he,
                dirs: pe
            } = m;
            if (se != null && Od(se, null, S, m, !0), K & 256) {
                g.ctx.deactivate(m);
                return
            }
            const Re = K & 1 && pe,
                xe = !Ba(m);
            let O;
            if (xe && (O = ce && ce.onVnodeBeforeUnmount) && _n(O, g, m), K & 6) vr(m.component, S, D);
            else {
                if (K & 128) {
                    m.suspense.unmount(S, D);
                    return
                }
                Re && xi(m, null, g, "beforeUnmount"), K & 64 ? m.type.remove(m, g, S, B, xt, D) : $ && (Y !== qe || he > 0 && he & 64) ? lt($, g, S, !1, !0) : (Y === qe && he & 384 || !B && K & 16) && lt(re, g, S), D && wr(m)
            }(xe && (O = ce && ce.onVnodeUnmounted) || Re) && Ar(() => {
                O && _n(O, g, m), Re && xi(m, null, g, "unmounted")
            }, S)
        }, wr = m => {
            const {
                type: g,
                el: S,
                anchor: D,
                transition: B
            } = m;
            if (g === qe) {
                rr(S, D);
                return
            }
            if (g === yf) {
                j(m);
                return
            }
            const Y = () => {
                s(S), B && !B.persisted && B.afterLeave && B.afterLeave()
            };
            if (m.shapeFlag & 1 && B && !B.persisted) {
                const {
                    leave: ce,
                    delayLeave: se
                } = B, re = () => ce(S, Y);
                se ? se(m.el, Y, re) : re()
            } else Y()
        }, rr = (m, g) => {
            let S;
            for (; m !== g;) S = b(m), s(m), m = S;
            s(g)
        }, vr = (m, g, S) => {
            const {
                bum: D,
                scope: B,
                update: Y,
                subTree: ce,
                um: se
            } = m;
            D && Pl(D), B.stop(), Y && (Y.active = !1, It(ce, m, g, S)), se && Ar(se, g), Ar(() => {
                m.isUnmounted = !0
            }, g), g && g.pendingBranch && !g.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve())
        }, lt = (m, g, S, D = !1, B = !1, Y = 0) => {
            for (let ce = Y; ce < m.length; ce++) It(m[ce], g, S, D, B)
        }, St = m => m.shapeFlag & 6 ? St(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), ct = (m, g, S) => {
            m == null ? g._vnode && It(g._vnode, null, null, !0) : G(g._vnode || null, m, g, null, null, null, S), Mb(), g._vnode = m
        }, xt = {
            p: G,
            um: It,
            m: nt,
            r: wr,
            mt: ie,
            mc: ue,
            pc: Oe,
            pbc: Ie,
            n: St,
            o: e
        };
        let Kt, Dt;
        return t && ([Kt, Dt] = t(xt)), {
            render: ct,
            hydrate: Kt,
            createApp: gP(ct, Kt)
        }
    }

    function Di({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function iT(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let a = 0; a < n.length; a++) {
                const l = n[a];
                let c = s[a];
                c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[a] = si(s[a]), c.el = l.el), r || iT(l, c))
            }
    }

    function yP(e) {
        const t = e.slice(),
            r = [0];
        let n, s, a, l, c;
        const f = e.length;
        for (n = 0; n < f; n++) {
            const d = e[n];
            if (d !== 0) {
                if (s = r[r.length - 1], e[s] < d) {
                    t[n] = s, r.push(n);
                    continue
                }
                for (a = 0, l = r.length - 1; a < l;) c = a + l >> 1, e[r[c]] < d ? a = c + 1 : l = c;
                d < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n)
            }
        }
        for (a = r.length, l = r[a - 1]; a-- > 0;) r[a] = l, l = t[l];
        return r
    }
    const _P = e => e.__isTeleport,
        qe = Symbol(void 0),
        Tc = Symbol(void 0),
        Qr = Symbol(void 0),
        yf = Symbol(void 0),
        Ga = [];
    let cn = null;

    function F(e = !1) {
        Ga.push(cn = e ? null : [])
    }

    function EP() {
        Ga.pop(), cn = Ga[Ga.length - 1] || null
    }
    let eo = 1;

    function qv(e) {
        eo += e
    }

    function sT(e) {
        return e.dynamicChildren = eo > 0 ? cn || Ms : null, EP(), eo > 0 && cn && cn.push(e), e
    }

    function W(e, t, r, n, s, a) {
        return sT(X(e, t, r, n, s, a, !0))
    }

    function fn(e, t, r, n, s) {
        return sT(pt(e, t, r, n, s, !0))
    }

    function ql(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Ki(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Ac = "__vInternal",
        aT = ({
            key: e
        }) => e != null ? e : null,
        kl = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Ft(e) || Zt(e) || Ke(e) ? {
            i: ar,
            r: e,
            k: t,
            f: !!r
        } : e : null;

    function X(e, t = null, r = null, n = 0, s = null, a = e === qe ? 0 : 1, l = !1, c = !1) {
        const f = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && aT(t),
            ref: t && kl(t),
            scopeId: vc,
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
            shapeFlag: a,
            patchFlag: n,
            dynamicProps: s,
            dynamicChildren: null,
            appContext: null
        };
        return c ? (Fh(f, r), a & 128 && e.normalize(f)) : r && (f.shapeFlag |= Ft(r) ? 8 : 16), eo > 0 && !l && cn && (f.patchFlag > 0 || a & 6) && f.patchFlag !== 32 && cn.push(f), f
    }
    const pt = bP;

    function bP(e, t = null, r = null, n = 0, s = null, a = !1) {
        if ((!e || e === Yb) && (e = Qr), ql(e)) {
            const c = pi(e, t, !0);
            return r && Fh(c, r), eo > 0 && !a && cn && (c.shapeFlag & 6 ? cn[cn.indexOf(e)] = c : cn.push(c)), c.patchFlag |= -2, c
        }
        if (RP(e) && (e = e.__vccOpts), t) {
            t = oT(t);
            let {
                class: c,
                style: f
            } = t;
            c && !Ft(c) && (t.class = Ve(c)), Rt(f) && (Cb(f) && !ke(f) && (f = tr({}, f)), t.style = co(f))
        }
        const l = Ft(e) ? 1 : BN(e) ? 128 : _P(e) ? 64 : Rt(e) ? 4 : Ke(e) ? 2 : 0;
        return X(e, t, r, n, s, l, a, !0)
    }

    function oT(e) {
        return e ? Cb(e) || Ac in e ? tr({}, e) : e : null
    }

    function pi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: a,
            children: l
        } = e, c = t ? Bh(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: c,
            key: c && aT(c),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(kl(t)) : [s, kl(t)] : kl(t) : s,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== qe ? a === -1 ? 16 : a | 16 : a,
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

    function Mr(e = " ", t = 0) {
        return pt(Tc, null, e, t)
    }

    function ve(e = "", t = !1) {
        return t ? (F(), fn(Qr, null, e)) : pt(Qr, null, e)
    }

    function Sn(e) {
        return e == null || typeof e == "boolean" ? pt(Qr) : ke(e) ? pt(qe, null, e.slice()) : typeof e == "object" ? si(e) : pt(Tc, null, String(e))
    }

    function si(e) {
        return e.el === null || e.memo ? e : pi(e)
    }

    function Fh(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), Fh(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(Ac in t) ? t._ctx = ar : s === 3 && ar && (ar.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else Ke(t) ? (t = {
            default: t,
            _ctx: ar
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Mr(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function Bh(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Ve([t.class, n.class]));
                else if (s === "style") t.style = co([t.style, n.style]);
            else if (cc(s)) {
                const a = t[s],
                    l = n[s];
                l && a !== l && !(ke(a) && a.includes(l)) && (t[s] = a ? [].concat(a, l) : l)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function _n(e, t, r, n = null) {
        Jr(e, t, 7, [r, n])
    }
    const TP = nT();
    let AP = 0;

    function SP(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || TP,
            a = {
                uid: AP++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new gb(!0),
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
                propsOptions: Zb(n, s),
                emitsOptions: Fb(n, s),
                emit: null,
                emitted: null,
                propsDefaults: vt,
                inheritAttrs: n.inheritAttrs,
                ctx: vt,
                data: vt,
                props: vt,
                attrs: vt,
                slots: vt,
                refs: vt,
                setupState: vt,
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
        return a.ctx = {
            _: a
        }, a.root = t ? t.root : a, a.emit = xN.bind(null, a), e.ce && e.ce(a), a
    }
    let Yt = null;
    const as = () => Yt || ar,
        Ys = e => {
            Yt = e, e.scope.on()
        },
        es = () => {
            Yt && Yt.scope.off(), Yt = null
        };

    function lT(e) {
        return e.vnode.shapeFlag & 4
    }
    let to = !1;

    function OP(e, t = !1) {
        to = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = lT(e);
        cP(e, r, s, t), dP(e, n);
        const a = s ? wP(e, t) : void 0;
        return to = !1, a
    }

    function wP(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = Ib(new Proxy(e.ctx, nP));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? IP(e) : null;
            Ys(e), ra();
            const a = fi(n, e, 0, [e.props, s]);
            if (na(), es(), db(a)) {
                if (a.then(es, es), t) return a.then(l => {
                    Yv(e, l, t)
                }).catch(l => {
                    pc(l, e, 0)
                });
                e.asyncDep = a
            } else Yv(e, a, t)
        } else cT(e, t)
    }

    function Yv(e, t, r) {
        Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Rt(t) && (e.setupState = Nb(t)), cT(e, r)
    }
    let zv;

    function cT(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && zv && !n.render) {
                const s = n.template;
                if (s) {
                    const {
                        isCustomElement: a,
                        compilerOptions: l
                    } = e.appContext.config, {
                        delimiters: c,
                        compilerOptions: f
                    } = n, d = tr(tr({
                        isCustomElement: a,
                        delimiters: c
                    }, l), f);
                    n.render = zv(s, d)
                }
            }
            e.render = n.render || un
        }
        Ys(e), ra(), iP(e), na(), es()
    }

    function CP(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return Dr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function IP(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = CP(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function Sc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Nb(Ib(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Kl) return Kl[r](e)
            }
        }))
    }

    function $P(e, t = !0) {
        return Ke(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function RP(e) {
        return Ke(e) && "__vccOpts" in e
    }
    const xr = (e, t) => IN(e, t, to);

    function Gh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? Rt(t) && !ke(t) ? ql(t) ? pt(e, null, [t]) : pt(e, t) : pt(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && ql(r) && (r = [r]), pt(e, t, r))
    }
    const LP = "3.2.37",
        NP = "http://www.w3.org/2000/svg",
        Hi = typeof document < "u" ? document : null,
        Xv = Hi && Hi.createElement("template"),
        PP = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? Hi.createElementNS(NP, e) : Hi.createElement(e, r ? {
                    is: r
                } : void 0);
                return e === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
            },
            createText: e => Hi.createTextNode(e),
            createComment: e => Hi.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => Hi.querySelector(e),
            setScopeId(e, t) {
                e.setAttribute(t, "")
            },
            cloneNode(e) {
                const t = e.cloneNode(!0);
                return "_value" in e && (t._value = e._value), t
            },
            insertStaticContent(e, t, r, n, s, a) {
                const l = r ? r.previousSibling : t.lastChild;
                if (s && (s === a || s.nextSibling))
                    for (; t.insertBefore(s.cloneNode(!0), r), !(s === a || !(s = s.nextSibling)););
                else {
                    Xv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const c = Xv.content;
                    if (n) {
                        const f = c.firstChild;
                        for (; f.firstChild;) c.appendChild(f.firstChild);
                        c.removeChild(f)
                    }
                    t.insertBefore(c, r)
                }
                return [l ? l.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
            }
        };

    function kP(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function xP(e, t, r) {
        const n = e.style,
            s = Ft(r);
        if (r && !s) {
            for (const a in r) wd(n, a, r[a]);
            if (t && !Ft(t))
                for (const a in t) r[a] == null && wd(n, a, "")
        } else {
            const a = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = a)
        }
    }
    const Jv = /\s*!important$/;

    function wd(e, t, r) {
        if (ke(r)) r.forEach(n => wd(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = DP(e, t);
            Jv.test(r) ? e.setProperty(os(n), r.replace(Jv, ""), "important") : e[n] = r
        }
    }
    const Qv = ["Webkit", "Moz", "ms"],
        _f = {};

    function DP(e, t) {
        const r = _f[t];
        if (r) return r;
        let n = wn(t);
        if (n !== "filter" && n in e) return _f[t] = n;
        n = dc(n);
        for (let s = 0; s < Qv.length; s++) {
            const a = Qv[s] + n;
            if (a in e) return _f[t] = a
        }
        return t
    }
    const Zv = "http://www.w3.org/1999/xlink";

    function MP(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Zv, t.slice(6, t.length)) : e.setAttributeNS(Zv, t, r);
        else {
            const a = DL(t);
            r == null || a && !cb(r) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : r)
        }
    }

    function UP(e, t, r, n, s, a, l) {
        if (t === "innerHTML" || t === "textContent") {
            n && l(n, s, a), e[t] = r == null ? "" : r;
            return
        }
        if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
            e._value = r;
            const f = r == null ? "" : r;
            (e.value !== f || e.tagName === "OPTION") && (e.value = f), r == null && e.removeAttribute(t);
            return
        }
        let c = !1;
        if (r === "" || r == null) {
            const f = typeof e[t];
            f === "boolean" ? r = cb(r) : r == null && f === "string" ? (r = "", c = !0) : f === "number" && (r = 0, c = !0)
        }
        try {
            e[t] = r
        } catch {}
        c && e.removeAttribute(t)
    }
    const [uT, FP] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let Cd = 0;
    const BP = Promise.resolve(),
        GP = () => {
            Cd = 0
        },
        jP = () => Cd || (BP.then(GP), Cd = uT());

    function qi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function WP(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function VP(e, t, r, n, s = null) {
        const a = e._vei || (e._vei = {}),
            l = a[t];
        if (n && l) l.value = n;
        else {
            const [c, f] = KP(t);
            if (n) {
                const d = a[t] = HP(n, s);
                qi(e, c, d, f)
            } else l && (WP(e, c, l, f), a[t] = void 0)
        }
    }
    const ey = /(?:Once|Passive|Capture)$/;

    function KP(e) {
        let t;
        if (ey.test(e)) {
            t = {};
            let r;
            for (; r = e.match(ey);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
        }
        return [os(e.slice(2)), t]
    }

    function HP(e, t) {
        const r = n => {
            const s = n.timeStamp || uT();
            (FP || s >= r.attached - 1) && Jr(qP(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = jP(), r
    }

    function qP(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const ty = /^on[a-z]/,
        YP = (e, t, r, n, s = !1, a, l, c, f) => {
            t === "class" ? kP(e, n, s) : t === "style" ? xP(e, r, n) : cc(t) ? bh(t) || VP(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zP(e, t, n, s)) ? UP(e, t, n, a, l, c, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), MP(e, t, n, s))
        };

    function zP(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && ty.test(t) && Ke(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ty.test(t) && Ft(r) ? !1 : t in e
    }
    const ei = "transition",
        $a = "animation",
        Oc = (e, {
            slots: t
        }) => Gh(jb, XP(e), t);
    Oc.displayName = "Transition";
    const fT = {
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
    Oc.props = tr({}, jb.props, fT);
    const Mi = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        ry = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function XP(e) {
        const t = {};
        for (const fe in e) fe in fT || (t[fe] = e[fe]);
        if (e.css === !1) return t;
        const {
            name: r = "v",
            type: n,
            duration: s,
            enterFromClass: a = `${r}-enter-from`,
            enterActiveClass: l = `${r}-enter-active`,
            enterToClass: c = `${r}-enter-to`,
            appearFromClass: f = a,
            appearActiveClass: d = l,
            appearToClass: p = c,
            leaveFromClass: y = `${r}-leave-from`,
            leaveActiveClass: b = `${r}-leave-active`,
            leaveToClass: w = `${r}-leave-to`
        } = e, P = JP(s), M = P && P[0], G = P && P[1], {
            onBeforeEnter: C,
            onEnter: H,
            onEnterCancelled: z,
            onLeave: V,
            onLeaveCancelled: j,
            onBeforeAppear: Q = C,
            onAppear: oe = H,
            onAppearCancelled: le = z
        } = t, ue = (fe, Ce, U) => {
            Ui(fe, Ce ? p : c), Ui(fe, Ce ? d : l), U && U()
        }, $e = (fe, Ce) => {
            fe._isLeaving = !1, Ui(fe, y), Ui(fe, w), Ui(fe, b), Ce && Ce()
        }, Ie = fe => (Ce, U) => {
            const ie = fe ? oe : H,
                de = () => ue(Ce, fe, U);
            Mi(ie, [Ce, de]), ny(() => {
                Ui(Ce, fe ? f : a), ti(Ce, fe ? p : c), ry(ie) || iy(Ce, n, M, de)
            })
        };
        return tr(t, {
            onBeforeEnter(fe) {
                Mi(C, [fe]), ti(fe, a), ti(fe, l)
            },
            onBeforeAppear(fe) {
                Mi(Q, [fe]), ti(fe, f), ti(fe, d)
            },
            onEnter: Ie(!1),
            onAppear: Ie(!0),
            onLeave(fe, Ce) {
                fe._isLeaving = !0;
                const U = () => $e(fe, Ce);
                ti(fe, y), ek(), ti(fe, b), ny(() => {
                    !fe._isLeaving || (Ui(fe, y), ti(fe, w), ry(V) || iy(fe, n, G, U))
                }), Mi(V, [fe, U])
            },
            onEnterCancelled(fe) {
                ue(fe, !1), Mi(z, [fe])
            },
            onAppearCancelled(fe) {
                ue(fe, !0), Mi(le, [fe])
            },
            onLeaveCancelled(fe) {
                $e(fe), Mi(j, [fe])
            }
        })
    }

    function JP(e) {
        if (e == null) return null;
        if (Rt(e)) return [Ef(e.enter), Ef(e.leave)]; {
            const t = Ef(e);
            return [t, t]
        }
    }

    function Ef(e) {
        return jl(e)
    }

    function ti(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Ui(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.remove(n));
        const {
            _vtc: r
        } = e;
        r && (r.delete(t), r.size || (e._vtc = void 0))
    }

    function ny(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let QP = 0;

    function iy(e, t, r, n) {
        const s = e._endId = ++QP,
            a = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(a, r);
        const {
            type: l,
            timeout: c,
            propCount: f
        } = ZP(e, t);
        if (!l) return n();
        const d = l + "end";
        let p = 0;
        const y = () => {
                e.removeEventListener(d, b), a()
            },
            b = w => {
                w.target === e && ++p >= f && y()
            };
        setTimeout(() => {
            p < f && y()
        }, c + 1), e.addEventListener(d, b)
    }

    function ZP(e, t) {
        const r = window.getComputedStyle(e),
            n = P => (r[P] || "").split(", "),
            s = n(ei + "Delay"),
            a = n(ei + "Duration"),
            l = sy(s, a),
            c = n($a + "Delay"),
            f = n($a + "Duration"),
            d = sy(c, f);
        let p = null,
            y = 0,
            b = 0;
        t === ei ? l > 0 && (p = ei, y = l, b = a.length) : t === $a ? d > 0 && (p = $a, y = d, b = f.length) : (y = Math.max(l, d), p = y > 0 ? l > d ? ei : $a : null, b = p ? p === ei ? a.length : f.length : 0);
        const w = p === ei && /\b(transform|all)(,|$)/.test(r[ei + "Property"]);
        return {
            type: p,
            timeout: y,
            propCount: b,
            hasTransform: w
        }
    }

    function sy(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => ay(r) + ay(e[n])))
    }

    function ay(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function ek() {
        return document.body.offsetHeight
    }
    const Yl = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Pl(t, r) : t
    };

    function tk(e) {
        e.target.composing = !0
    }

    function oy(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const ly = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = Yl(s);
                const a = n || s.props && s.props.type === "number";
                qi(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let c = e.value;
                    r && (c = c.trim()), a && (c = jl(c)), e._assign(c)
                }), r && qi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (qi(e, "compositionstart", tk), qi(e, "compositionend", oy), qi(e, "change", oy))
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
            }, a) {
                if (e._assign = Yl(a), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && jl(e.value) === t)) return;
                const l = t == null ? "" : t;
                e.value !== l && (e.value = l)
            }
        },
        dT = {
            deep: !0,
            created(e, t, r) {
                e._assign = Yl(r), qi(e, "change", () => {
                    const n = e._modelValue,
                        s = rk(e),
                        a = e.checked,
                        l = e._assign;
                    if (ke(n)) {
                        const c = ub(n, s),
                            f = c !== -1;
                        if (a && !f) l(n.concat(s));
                        else if (!a && f) {
                            const d = [...n];
                            d.splice(c, 1), l(d)
                        }
                    } else if (uc(n)) {
                        const c = new Set(n);
                        a ? c.add(s) : c.delete(s), l(c)
                    } else l(hT(e, a))
                })
            },
            mounted: cy,
            beforeUpdate(e, t, r) {
                e._assign = Yl(r), cy(e, t, r)
            }
        };

    function cy(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = ub(t, n.props.value) > -1 : uc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = lc(t, hT(e, !0)))
    }

    function rk(e) {
        return "_value" in e ? e._value : e.value
    }

    function hT(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const nk = ["ctrl", "shift", "alt", "meta"],
        ik = {
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
            exact: (e, t) => nk.some(r => e[`${r}Key`] && !t.includes(r))
        },
        ze = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const a = ik[t[s]];
                if (a && a(r, t)) return
            }
            return e(r, ...n)
        },
        sk = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        zs = (e, t) => r => {
            if (!("key" in r)) return;
            const n = os(r.key);
            if (t.some(s => s === n || sk[s] === n)) return e(r)
        },
        ak = tr({
            patchProp: YP
        }, PP);
    let uy;

    function ok() {
        return uy || (uy = mP(ak))
    }
    const lk = (...e) => {
        const t = ok().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = ck(n);
            if (!s) return;
            const a = t._component;
            !Ke(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function ck(e) {
        return Ft(e) ? document.querySelector(e) : e
    }
    const uk = rt({
            props: {
                player: Object
            },
            methods: {
                onChoiceClick(e) {
                    var l, c, f;
                    const t = this.player.choices[e];
                    if (t.send) {
                        this.$ecast.updateObject(this.player.responseKey, t.send).catch(this.$handleEcastError);
                        return
                    }
                    const r = (l = this.player.action) != null ? l : "choice",
                        n = (c = this.player.key) != null ? c : "value",
                        s = (f = t.value) != null ? f : e,
                        a = {
                            action: r,
                            [n]: s
                        };
                    this.$ecast.updateObject(this.player.responseKey, a).catch(this.$handleEcastError)
                }
            }
        }),
        ot = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        fk = {
            class: "choices"
        },
        dk = {
            class: "constrain"
        },
        hk = {
            key: 0
        },
        pk = ["disabled", "onClick"];

    function gk(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", fk, [X("div", dk, [e.player.prompt ? Se((F(), W("p", hk, null, 512)), [
            [l, e.player.prompt]
        ]) : ve("", !0), (F(!0), W(qe, null, hn(e.player.choices, (c, f) => (F(), W("button", {
            key: f,
            class: Ve({
                selected: c.isSelected
            }),
            disabled: c.isDisabled,
            onClick: ze(d => e.onChoiceClick(f), ["prevent"])
        }, Me(c.text), 11, pk))), 128))])])
    }
    const mk = ot(uk, [
        ["render", gk]
    ]);
    class zl {
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

    function vk(e) {
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

    function yk() {
        this.__data__ = [], this.size = 0
    }
    var _k = yk;

    function Ek(e, t) {
        return e === t || e !== e && t !== t
    }
    var wc = Ek,
        bk = wc;

    function Tk(e, t) {
        for (var r = e.length; r--;)
            if (bk(e[r][0], t)) return r;
        return -1
    }
    var Cc = Tk,
        Ak = Cc,
        Sk = Array.prototype,
        Ok = Sk.splice;

    function wk(e) {
        var t = this.__data__,
            r = Ak(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : Ok.call(t, r, 1), --this.size, !0
    }
    var Ck = wk,
        Ik = Cc;

    function $k(e) {
        var t = this.__data__,
            r = Ik(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var Rk = $k,
        Lk = Cc;

    function Nk(e) {
        return Lk(this.__data__, e) > -1
    }
    var Pk = Nk,
        kk = Cc;

    function xk(e, t) {
        var r = this.__data__,
            n = kk(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var Dk = xk,
        Mk = _k,
        Uk = Ck,
        Fk = Rk,
        Bk = Pk,
        Gk = Dk;

    function ia(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    ia.prototype.clear = Mk;
    ia.prototype.delete = Uk;
    ia.prototype.get = Fk;
    ia.prototype.has = Bk;
    ia.prototype.set = Gk;
    var Ic = ia,
        jk = Ic;

    function Wk() {
        this.__data__ = new jk, this.size = 0
    }
    var Vk = Wk;

    function Kk(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var Hk = Kk;

    function qk(e) {
        return this.__data__.get(e)
    }
    var Yk = qk;

    function zk(e) {
        return this.__data__.has(e)
    }
    var Xk = zk,
        Jk = typeof kt == "object" && kt && kt.Object === Object && kt,
        pT = Jk,
        Qk = pT,
        Zk = typeof self == "object" && self && self.Object === Object && self,
        ex = Qk || Zk || Function("return this")(),
        pn = ex,
        tx = pn,
        rx = tx.Symbol,
        $c = rx,
        fy = $c,
        gT = Object.prototype,
        nx = gT.hasOwnProperty,
        ix = gT.toString,
        Ra = fy ? fy.toStringTag : void 0;

    function sx(e) {
        var t = nx.call(e, Ra),
            r = e[Ra];
        try {
            e[Ra] = void 0;
            var n = !0
        } catch {}
        var s = ix.call(e);
        return n && (t ? e[Ra] = r : delete e[Ra]), s
    }
    var ax = sx,
        ox = Object.prototype,
        lx = ox.toString;

    function cx(e) {
        return lx.call(e)
    }
    var ux = cx,
        dy = $c,
        fx = ax,
        dx = ux,
        hx = "[object Null]",
        px = "[object Undefined]",
        hy = dy ? dy.toStringTag : void 0;

    function gx(e) {
        return e == null ? e === void 0 ? px : hx : hy && hy in Object(e) ? fx(e) : dx(e)
    }
    var sa = gx;

    function mx(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var gn = mx,
        vx = sa,
        yx = gn,
        _x = "[object AsyncFunction]",
        Ex = "[object Function]",
        bx = "[object GeneratorFunction]",
        Tx = "[object Proxy]";

    function Ax(e) {
        if (!yx(e)) return !1;
        var t = vx(e);
        return t == Ex || t == bx || t == _x || t == Tx
    }
    var jh = Ax,
        Sx = pn,
        Ox = Sx["__core-js_shared__"],
        wx = Ox,
        bf = wx,
        py = function() {
            var e = /[^.]+$/.exec(bf && bf.keys && bf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function Cx(e) {
        return !!py && py in e
    }
    var Ix = Cx,
        $x = Function.prototype,
        Rx = $x.toString;

    function Lx(e) {
        if (e != null) {
            try {
                return Rx.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var mT = Lx,
        Nx = jh,
        Px = Ix,
        kx = gn,
        xx = mT,
        Dx = /[\\^$.*+?()[\]{}|]/g,
        Mx = /^\[object .+?Constructor\]$/,
        Ux = Function.prototype,
        Fx = Object.prototype,
        Bx = Ux.toString,
        Gx = Fx.hasOwnProperty,
        jx = RegExp("^" + Bx.call(Gx).replace(Dx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function Wx(e) {
        if (!kx(e) || Px(e)) return !1;
        var t = Nx(e) ? jx : Mx;
        return t.test(xx(e))
    }
    var Vx = Wx;

    function Kx(e, t) {
        return e == null ? void 0 : e[t]
    }
    var Hx = Kx,
        qx = Vx,
        Yx = Hx;

    function zx(e, t) {
        var r = Yx(e, t);
        return qx(r) ? r : void 0
    }
    var ls = zx,
        Xx = ls,
        Jx = pn,
        Qx = Xx(Jx, "Map"),
        Wh = Qx,
        Zx = ls,
        eD = Zx(Object, "create"),
        Rc = eD,
        gy = Rc;

    function tD() {
        this.__data__ = gy ? gy(null) : {}, this.size = 0
    }
    var rD = tD;

    function nD(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var iD = nD,
        sD = Rc,
        aD = "__lodash_hash_undefined__",
        oD = Object.prototype,
        lD = oD.hasOwnProperty;

    function cD(e) {
        var t = this.__data__;
        if (sD) {
            var r = t[e];
            return r === aD ? void 0 : r
        }
        return lD.call(t, e) ? t[e] : void 0
    }
    var uD = cD,
        fD = Rc,
        dD = Object.prototype,
        hD = dD.hasOwnProperty;

    function pD(e) {
        var t = this.__data__;
        return fD ? t[e] !== void 0 : hD.call(t, e)
    }
    var gD = pD,
        mD = Rc,
        vD = "__lodash_hash_undefined__";

    function yD(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = mD && t === void 0 ? vD : t, this
    }
    var _D = yD,
        ED = rD,
        bD = iD,
        TD = uD,
        AD = gD,
        SD = _D;

    function aa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    aa.prototype.clear = ED;
    aa.prototype.delete = bD;
    aa.prototype.get = TD;
    aa.prototype.has = AD;
    aa.prototype.set = SD;
    var OD = aa,
        my = OD,
        wD = Ic,
        CD = Wh;

    function ID() {
        this.size = 0, this.__data__ = {
            hash: new my,
            map: new(CD || wD),
            string: new my
        }
    }
    var $D = ID;

    function RD(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var LD = RD,
        ND = LD;

    function PD(e, t) {
        var r = e.__data__;
        return ND(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Lc = PD,
        kD = Lc;

    function xD(e) {
        var t = kD(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var DD = xD,
        MD = Lc;

    function UD(e) {
        return MD(this, e).get(e)
    }
    var FD = UD,
        BD = Lc;

    function GD(e) {
        return BD(this, e).has(e)
    }
    var jD = GD,
        WD = Lc;

    function VD(e, t) {
        var r = WD(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var KD = VD,
        HD = $D,
        qD = DD,
        YD = FD,
        zD = jD,
        XD = KD;

    function oa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    oa.prototype.clear = HD;
    oa.prototype.delete = qD;
    oa.prototype.get = YD;
    oa.prototype.has = zD;
    oa.prototype.set = XD;
    var vT = oa,
        JD = Ic,
        QD = Wh,
        ZD = vT,
        eM = 200;

    function tM(e, t) {
        var r = this.__data__;
        if (r instanceof JD) {
            var n = r.__data__;
            if (!QD || n.length < eM - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new ZD(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var rM = tM,
        nM = Ic,
        iM = Vk,
        sM = Hk,
        aM = Yk,
        oM = Xk,
        lM = rM;

    function la(e) {
        var t = this.__data__ = new nM(e);
        this.size = t.size
    }
    la.prototype.clear = iM;
    la.prototype.delete = sM;
    la.prototype.get = aM;
    la.prototype.has = oM;
    la.prototype.set = lM;
    var yT = la,
        cM = ls,
        uM = function() {
            try {
                var e = cM(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        _T = uM,
        vy = _T;

    function fM(e, t, r) {
        t == "__proto__" && vy ? vy(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Vh = fM,
        dM = Vh,
        hM = wc;

    function pM(e, t, r) {
        (r !== void 0 && !hM(e[t], r) || r === void 0 && !(t in e)) && dM(e, t, r)
    }
    var ET = pM;

    function gM(e) {
        return function(t, r, n) {
            for (var s = -1, a = Object(t), l = n(t), c = l.length; c--;) {
                var f = l[e ? c : ++s];
                if (r(a[f], f, a) === !1) break
            }
            return t
        }
    }
    var mM = gM,
        vM = mM,
        yM = vM(),
        _M = yM,
        Xl = {
            exports: {}
        };
    (function(e, t) {
        var r = pn,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            a = s && s.exports === n,
            l = a ? r.Buffer : void 0,
            c = l ? l.allocUnsafe : void 0;

        function f(d, p) {
            if (p) return d.slice();
            var y = d.length,
                b = c ? c(y) : new d.constructor(y);
            return d.copy(b), b
        }
        e.exports = f
    })(Xl, Xl.exports);
    var EM = pn,
        bM = EM.Uint8Array,
        TM = bM,
        yy = TM;

    function AM(e) {
        var t = new e.constructor(e.byteLength);
        return new yy(t).set(new yy(e)), t
    }
    var Kh = AM,
        SM = Kh;

    function OM(e, t) {
        var r = t ? SM(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var bT = OM;

    function wM(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var TT = wM,
        CM = gn,
        _y = Object.create,
        IM = function() {
            function e() {}
            return function(t) {
                if (!CM(t)) return {};
                if (_y) return _y(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        $M = IM;

    function RM(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var AT = RM,
        LM = AT,
        NM = LM(Object.getPrototypeOf, Object),
        Hh = NM,
        PM = Object.prototype;

    function kM(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || PM;
        return e === r
    }
    var qh = kM,
        xM = $M,
        DM = Hh,
        MM = qh;

    function UM(e) {
        return typeof e.constructor == "function" && !MM(e) ? xM(DM(e)) : {}
    }
    var ST = UM;

    function FM(e) {
        return e != null && typeof e == "object"
    }
    var vi = FM,
        BM = sa,
        GM = vi,
        jM = "[object Arguments]";

    function WM(e) {
        return GM(e) && BM(e) == jM
    }
    var VM = WM,
        Ey = VM,
        KM = vi,
        OT = Object.prototype,
        HM = OT.hasOwnProperty,
        qM = OT.propertyIsEnumerable,
        YM = Ey(function() {
            return arguments
        }()) ? Ey : function(e) {
            return KM(e) && HM.call(e, "callee") && !qM.call(e, "callee")
        },
        wT = YM,
        zM = Array.isArray,
        yi = zM,
        XM = 9007199254740991;

    function JM(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XM
    }
    var CT = JM,
        QM = jh,
        ZM = CT;

    function e2(e) {
        return e != null && ZM(e.length) && !QM(e)
    }
    var Nc = e2,
        t2 = Nc,
        r2 = vi;

    function n2(e) {
        return r2(e) && t2(e)
    }
    var i2 = n2,
        ro = {
            exports: {}
        };

    function s2() {
        return !1
    }
    var a2 = s2;
    (function(e, t) {
        var r = pn,
            n = a2,
            s = t && !t.nodeType && t,
            a = s && !0 && e && !e.nodeType && e,
            l = a && a.exports === s,
            c = l ? r.Buffer : void 0,
            f = c ? c.isBuffer : void 0,
            d = f || n;
        e.exports = d
    })(ro, ro.exports);
    var o2 = sa,
        l2 = Hh,
        c2 = vi,
        u2 = "[object Object]",
        f2 = Function.prototype,
        d2 = Object.prototype,
        IT = f2.toString,
        h2 = d2.hasOwnProperty,
        p2 = IT.call(Object);

    function g2(e) {
        if (!c2(e) || o2(e) != u2) return !1;
        var t = l2(e);
        if (t === null) return !0;
        var r = h2.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && IT.call(r) == p2
    }
    var m2 = g2,
        v2 = sa,
        y2 = CT,
        _2 = vi,
        E2 = "[object Arguments]",
        b2 = "[object Array]",
        T2 = "[object Boolean]",
        A2 = "[object Date]",
        S2 = "[object Error]",
        O2 = "[object Function]",
        w2 = "[object Map]",
        C2 = "[object Number]",
        I2 = "[object Object]",
        $2 = "[object RegExp]",
        R2 = "[object Set]",
        L2 = "[object String]",
        N2 = "[object WeakMap]",
        P2 = "[object ArrayBuffer]",
        k2 = "[object DataView]",
        x2 = "[object Float32Array]",
        D2 = "[object Float64Array]",
        M2 = "[object Int8Array]",
        U2 = "[object Int16Array]",
        F2 = "[object Int32Array]",
        B2 = "[object Uint8Array]",
        G2 = "[object Uint8ClampedArray]",
        j2 = "[object Uint16Array]",
        W2 = "[object Uint32Array]",
        At = {};
    At[x2] = At[D2] = At[M2] = At[U2] = At[F2] = At[B2] = At[G2] = At[j2] = At[W2] = !0;
    At[E2] = At[b2] = At[P2] = At[T2] = At[k2] = At[A2] = At[S2] = At[O2] = At[w2] = At[C2] = At[I2] = At[$2] = At[R2] = At[L2] = At[N2] = !1;

    function V2(e) {
        return _2(e) && y2(e.length) && !!At[v2(e)]
    }
    var K2 = V2;

    function H2(e) {
        return function(t) {
            return e(t)
        }
    }
    var Yh = H2,
        no = {
            exports: {}
        };
    (function(e, t) {
        var r = pT,
            n = t && !t.nodeType && t,
            s = n && !0 && e && !e.nodeType && e,
            a = s && s.exports === n,
            l = a && r.process,
            c = function() {
                try {
                    var f = s && s.require && s.require("util").types;
                    return f || l && l.binding && l.binding("util")
                } catch {}
            }();
        e.exports = c
    })(no, no.exports);
    var q2 = K2,
        Y2 = Yh,
        by = no.exports,
        Ty = by && by.isTypedArray,
        z2 = Ty ? Y2(Ty) : q2,
        $T = z2;

    function X2(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var RT = X2,
        J2 = Vh,
        Q2 = wc,
        Z2 = Object.prototype,
        eU = Z2.hasOwnProperty;

    function tU(e, t, r) {
        var n = e[t];
        (!(eU.call(e, t) && Q2(n, r)) || r === void 0 && !(t in e)) && J2(e, t, r)
    }
    var zh = tU,
        rU = zh,
        nU = Vh;

    function iU(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var a = -1, l = t.length; ++a < l;) {
            var c = t[a],
                f = n ? n(r[c], e[c], c, r, e) : void 0;
            f === void 0 && (f = e[c]), s ? nU(r, c, f) : rU(r, c, f)
        }
        return r
    }
    var fo = iU;

    function sU(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var aU = sU,
        oU = 9007199254740991,
        lU = /^(?:0|[1-9]\d*)$/;

    function cU(e, t) {
        var r = typeof e;
        return t = t == null ? oU : t, !!t && (r == "number" || r != "symbol" && lU.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Xh = cU,
        uU = aU,
        fU = wT,
        dU = yi,
        hU = ro.exports,
        pU = Xh,
        gU = $T,
        mU = Object.prototype,
        vU = mU.hasOwnProperty;

    function yU(e, t) {
        var r = dU(e),
            n = !r && fU(e),
            s = !r && !n && hU(e),
            a = !r && !n && !s && gU(e),
            l = r || n || s || a,
            c = l ? uU(e.length, String) : [],
            f = c.length;
        for (var d in e)(t || vU.call(e, d)) && !(l && (d == "length" || s && (d == "offset" || d == "parent") || a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || pU(d, f))) && c.push(d);
        return c
    }
    var LT = yU;

    function _U(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var EU = _U,
        bU = gn,
        TU = qh,
        AU = EU,
        SU = Object.prototype,
        OU = SU.hasOwnProperty;

    function wU(e) {
        if (!bU(e)) return AU(e);
        var t = TU(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !OU.call(e, n)) || r.push(n);
        return r
    }
    var CU = wU,
        IU = LT,
        $U = CU,
        RU = Nc;

    function LU(e) {
        return RU(e) ? IU(e, !0) : $U(e)
    }
    var ho = LU,
        NU = fo,
        PU = ho;

    function kU(e) {
        return NU(e, PU(e))
    }
    var xU = kU,
        Ay = ET,
        DU = Xl.exports,
        MU = bT,
        UU = TT,
        FU = ST,
        Sy = wT,
        Oy = yi,
        BU = i2,
        GU = ro.exports,
        jU = jh,
        WU = gn,
        VU = m2,
        KU = $T,
        wy = RT,
        HU = xU;

    function qU(e, t, r, n, s, a, l) {
        var c = wy(e, r),
            f = wy(t, r),
            d = l.get(f);
        if (d) {
            Ay(e, r, d);
            return
        }
        var p = a ? a(c, f, r + "", e, t, l) : void 0,
            y = p === void 0;
        if (y) {
            var b = Oy(f),
                w = !b && GU(f),
                P = !b && !w && KU(f);
            p = f, b || w || P ? Oy(c) ? p = c : BU(c) ? p = UU(c) : w ? (y = !1, p = DU(f, !0)) : P ? (y = !1, p = MU(f, !0)) : p = [] : VU(f) || Sy(f) ? (p = c, Sy(c) ? p = HU(c) : (!WU(c) || jU(c)) && (p = FU(f))) : y = !1
        }
        y && (l.set(f, p), s(p, f, n, a, l), l.delete(f)), Ay(e, r, p)
    }
    var YU = qU,
        zU = yT,
        XU = ET,
        JU = _M,
        QU = YU,
        ZU = gn,
        eF = ho,
        tF = RT;

    function NT(e, t, r, n, s) {
        e !== t && JU(t, function(a, l) {
            if (s || (s = new zU), ZU(a)) QU(e, t, l, r, NT, n, s);
            else {
                var c = n ? n(tF(e, l), a, l + "", e, t, s) : void 0;
                c === void 0 && (c = a), XU(e, l, c)
            }
        }, eF)
    }
    var rF = NT;

    function nF(e) {
        return e
    }
    var PT = nF;

    function iF(e, t, r) {
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
    var sF = iF,
        aF = sF,
        Cy = Math.max;

    function oF(e, t, r) {
        return t = Cy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, a = Cy(n.length - t, 0), l = Array(a); ++s < a;) l[s] = n[t + s];
                s = -1;
                for (var c = Array(t + 1); ++s < t;) c[s] = n[s];
                return c[t] = r(l), aF(e, this, c)
            }
    }
    var lF = oF;

    function cF(e) {
        return function() {
            return e
        }
    }
    var uF = cF,
        fF = uF,
        Iy = _T,
        dF = PT,
        hF = Iy ? function(e, t) {
            return Iy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: fF(t),
                writable: !0
            })
        } : dF,
        pF = hF,
        gF = 800,
        mF = 16,
        vF = Date.now;

    function yF(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = vF(),
                s = mF - (n - r);
            if (r = n, s > 0) {
                if (++t >= gF) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var _F = yF,
        EF = pF,
        bF = _F,
        TF = bF(EF),
        AF = TF,
        SF = PT,
        OF = lF,
        wF = AF;

    function CF(e, t) {
        return wF(OF(e, t, SF), e + "")
    }
    var IF = CF,
        $F = wc,
        RF = Nc,
        LF = Xh,
        NF = gn;

    function PF(e, t, r) {
        if (!NF(r)) return !1;
        var n = typeof t;
        return (n == "number" ? RF(r) && LF(t, r.length) : n == "string" && t in r) ? $F(r[t], e) : !1
    }
    var kF = PF,
        xF = IF,
        DF = kF;

    function MF(e) {
        return xF(function(t, r) {
            var n = -1,
                s = r.length,
                a = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (a = e.length > 3 && typeof a == "function" ? (s--, a) : void 0, l && DF(r[0], r[1], l) && (a = s < 3 ? void 0 : a, s = 1), t = Object(t); ++n < s;) {
                var c = r[n];
                c && e(t, c, n, a)
            }
            return t
        })
    }
    var UF = MF,
        FF = rF,
        BF = UF,
        GF = BF(function(e, t, r) {
            FF(e, t, r)
        }),
        jF = GF;
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
            return jF(t[0], ...t)
        }
    }
    ge(Bs, "locale"), ge(Bs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const zp = class {
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
            const a = parseInt(s, 16),
                l = Math.min(Math.max(0, (a >> 16) * r), 255),
                c = Math.min(Math.max(0, (a >> 8 & 255) * r), 255);
            let d = (Math.min(Math.max(0, (a & 255) * r), 255) | c << 8 | l << 16).toString(16);
            for (; d.length < s.length;) d = `0${d}`;
            return (n ? "#" : "") + d
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
    let mr = zp;
    ge(mr, "queryParams", new URLSearchParams(window.location.search)), ge(mr, "getQueryParam", t => zp.queryParams.get(t)), ge(mr, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class Pr {
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
                namespace: (s = (n = mr.getQueryParam("namespace")) != null ? n : mr.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: mr.queryParams.has("incognito") || mr.queryParams.has("nc")
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
            let a = JSON.parse(n);
            a = a.filter(c => {
                const f = c.split("-")[0];
                return s !== f
            }), a.push(r), this.set("tags", JSON.stringify(a))
        }
        static getScopedKey(t, r) {
            const n = `${this.namespace}:${t}`,
                s = this.tag ? `${this.namespace}:${t}:tag:${this.tag}` : null,
                a = this.code ? `${this.namespace}:${t}:code:${this.code}` : null;
            if (r === "none") return n;
            if (r === "tag") {
                if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
                return s
            }
            if (r === "code") {
                if (!a) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return a
            }
            return a && window.localStorage.getItem(a) !== null ? a : s && window.localStorage.getItem(s) !== null ? s : n
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
                    a = window.localStorage.getItem(n);
                !a || (window.localStorage.setItem(s, a), window.localStorage.removeItem(n))
            })
        }
    }
    ge(Pr, "defaultNamespace", "tv");
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
            if (!Pr.isSupported) return;
            const n = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                a = `${n}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                l = Pr.get("galleries") || "[]";
            try {
                const c = JSON.parse(l) || [];
                if (c.some(f => f.url === a)) return;
                c.unshift({
                    url: a,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), Pr.set("galleries", JSON.stringify(c.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!Pr.isSupported) return;
            const r = Pr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(t, 1), Pr.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            io.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!Pr.isSupported) return;
            const r = Pr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[t].viewed = !0), Pr.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var r;
            return ((r = t == null ? void 0 : t.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!Pr.isSupported) return [];
            const t = new Intl.DateTimeFormat(Bs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = Pr.get("galleries") || "[]",
                n = Date.now();
            try {
                return (JSON.parse(r) || []).filter(a => n - a.time < 525600 * 60 * 1e3).map(a => {
                    const l = new Date(a.time),
                        c = t.format(l),
                        f = a.url.split("/"),
                        d = f[f.length - 1] === "" ? f[f.length - 2] : f[f.length - 1];
                    let p = a.categoryId;
                    return p || (a.url.indexOf("Quiplash2") !== -1 ? p = "Quiplash2Game" : a.url.indexOf("Drawful") !== -1 ? p = "DrawfulGame" : a.url.indexOf("TeeKO") !== -1 ? p = "TeeKOGame" : a.url.indexOf("TriviaDeath") !== -1 && (p = "TriviaDeathResults")), {
                        id: d,
                        gameName: p,
                        date: c,
                        ...a
                    }
                })
            } catch {
                return console.warn("[Artifacts] Unable to parse artifacts array"), []
            }
        }
    }
    var Id = {
        exports: {}
    };
    (function(e, t) {
        var r = typeof self < "u" ? self : kt,
            n = function() {
                function a() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return a.prototype = r, new a
            }();
        (function(a) {
            (function(l) {
                var c = {
                    searchParams: "URLSearchParams" in a,
                    iterable: "Symbol" in a && "iterator" in Symbol,
                    blob: "FileReader" in a && "Blob" in a && function() {
                        try {
                            return new Blob, !0
                        } catch {
                            return !1
                        }
                    }(),
                    formData: "FormData" in a,
                    arrayBuffer: "ArrayBuffer" in a
                };

                function f(U) {
                    return U && DataView.prototype.isPrototypeOf(U)
                }
                if (c.arrayBuffer) var d = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    p = ArrayBuffer.isView || function(U) {
                        return U && d.indexOf(Object.prototype.toString.call(U)) > -1
                    };

                function y(U) {
                    if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                    return U.toLowerCase()
                }

                function b(U) {
                    return typeof U != "string" && (U = String(U)), U
                }

                function w(U) {
                    var ie = {
                        next: function() {
                            var de = U.shift();
                            return {
                                done: de === void 0,
                                value: de
                            }
                        }
                    };
                    return c.iterable && (ie[Symbol.iterator] = function() {
                        return ie
                    }), ie
                }

                function P(U) {
                    this.map = {}, U instanceof P ? U.forEach(function(ie, de) {
                        this.append(de, ie)
                    }, this) : Array.isArray(U) ? U.forEach(function(ie) {
                        this.append(ie[0], ie[1])
                    }, this) : U && Object.getOwnPropertyNames(U).forEach(function(ie) {
                        this.append(ie, U[ie])
                    }, this)
                }
                P.prototype.append = function(U, ie) {
                    U = y(U), ie = b(ie);
                    var de = this.map[U];
                    this.map[U] = de ? de + ", " + ie : ie
                }, P.prototype.delete = function(U) {
                    delete this.map[y(U)]
                }, P.prototype.get = function(U) {
                    return U = y(U), this.has(U) ? this.map[U] : null
                }, P.prototype.has = function(U) {
                    return this.map.hasOwnProperty(y(U))
                }, P.prototype.set = function(U, ie) {
                    this.map[y(U)] = b(ie)
                }, P.prototype.forEach = function(U, ie) {
                    for (var de in this.map) this.map.hasOwnProperty(de) && U.call(ie, this.map[de], de, this)
                }, P.prototype.keys = function() {
                    var U = [];
                    return this.forEach(function(ie, de) {
                        U.push(de)
                    }), w(U)
                }, P.prototype.values = function() {
                    var U = [];
                    return this.forEach(function(ie) {
                        U.push(ie)
                    }), w(U)
                }, P.prototype.entries = function() {
                    var U = [];
                    return this.forEach(function(ie, de) {
                        U.push([de, ie])
                    }), w(U)
                }, c.iterable && (P.prototype[Symbol.iterator] = P.prototype.entries);

                function M(U) {
                    if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    U.bodyUsed = !0
                }

                function G(U) {
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
                        de = G(ie);
                    return ie.readAsArrayBuffer(U), de
                }

                function H(U) {
                    var ie = new FileReader,
                        de = G(ie);
                    return ie.readAsText(U), de
                }

                function z(U) {
                    for (var ie = new Uint8Array(U), de = new Array(ie.length), be = 0; be < ie.length; be++) de[be] = String.fromCharCode(ie[be]);
                    return de.join("")
                }

                function V(U) {
                    if (U.slice) return U.slice(0);
                    var ie = new Uint8Array(U.byteLength);
                    return ie.set(new Uint8Array(U)), ie.buffer
                }

                function j() {
                    return this.bodyUsed = !1, this._initBody = function(U) {
                        this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : c.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : c.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : c.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : c.arrayBuffer && c.blob && f(U) ? (this._bodyArrayBuffer = V(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || p(U)) ? this._bodyArrayBuffer = V(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, c.blob && (this.blob = function() {
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
                        if (this._bodyArrayBuffer) return Promise.resolve(z(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, c.formData && (this.formData = function() {
                        return this.text().then(ue)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var Q = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function oe(U) {
                    var ie = U.toUpperCase();
                    return Q.indexOf(ie) > -1 ? ie : U
                }

                function le(U, ie) {
                    ie = ie || {};
                    var de = ie.body;
                    if (U instanceof le) {
                        if (U.bodyUsed) throw new TypeError("Already read");
                        this.url = U.url, this.credentials = U.credentials, ie.headers || (this.headers = new P(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !de && U._bodyInit != null && (de = U._bodyInit, U.bodyUsed = !0)
                    } else this.url = String(U);
                    if (this.credentials = ie.credentials || this.credentials || "same-origin", (ie.headers || !this.headers) && (this.headers = new P(ie.headers)), this.method = oe(ie.method || this.method || "GET"), this.mode = ie.mode || this.mode || null, this.signal = ie.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && de) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(de)
                }
                le.prototype.clone = function() {
                    return new le(this, {
                        body: this._bodyInit
                    })
                };

                function ue(U) {
                    var ie = new FormData;
                    return U.trim().split("&").forEach(function(de) {
                        if (de) {
                            var be = de.split("="),
                                ye = be.shift().replace(/\+/g, " "),
                                Oe = be.join("=").replace(/\+/g, " ");
                            ie.append(decodeURIComponent(ye), decodeURIComponent(Oe))
                        }
                    }), ie
                }

                function $e(U) {
                    var ie = new P,
                        de = U.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(be) {
                        var ye = be.split(":"),
                            Oe = ye.shift().trim();
                        if (Oe) {
                            var Ue = ye.join(":").trim();
                            ie.append(Oe, Ue)
                        }
                    }), ie
                }
                j.call(le.prototype);

                function Ie(U, ie) {
                    ie || (ie = {}), this.type = "default", this.status = ie.status === void 0 ? 200 : ie.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ie ? ie.statusText : "OK", this.headers = new P(ie.headers), this.url = ie.url || "", this._initBody(U)
                }
                j.call(Ie.prototype), Ie.prototype.clone = function() {
                    return new Ie(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new P(this.headers),
                        url: this.url
                    })
                }, Ie.error = function() {
                    var U = new Ie(null, {
                        status: 0,
                        statusText: ""
                    });
                    return U.type = "error", U
                };
                var fe = [301, 302, 303, 307, 308];
                Ie.redirect = function(U, ie) {
                    if (fe.indexOf(ie) === -1) throw new RangeError("Invalid status code");
                    return new Ie(null, {
                        status: ie,
                        headers: {
                            location: U
                        }
                    })
                }, l.DOMException = a.DOMException;
                try {
                    new l.DOMException
                } catch {
                    l.DOMException = function(ie, de) {
                        this.message = ie, this.name = de;
                        var be = Error(ie);
                        this.stack = be.stack
                    }, l.DOMException.prototype = Object.create(Error.prototype), l.DOMException.prototype.constructor = l.DOMException
                }

                function Ce(U, ie) {
                    return new Promise(function(de, be) {
                        var ye = new le(U, ie);
                        if (ye.signal && ye.signal.aborted) return be(new l.DOMException("Aborted", "AbortError"));
                        var Oe = new XMLHttpRequest;

                        function Ue() {
                            Oe.abort()
                        }
                        Oe.onload = function() {
                            var je = {
                                status: Oe.status,
                                statusText: Oe.statusText,
                                headers: $e(Oe.getAllResponseHeaders() || "")
                            };
                            je.url = "responseURL" in Oe ? Oe.responseURL : je.headers.get("X-Request-URL");
                            var nt = "response" in Oe ? Oe.response : Oe.responseText;
                            de(new Ie(nt, je))
                        }, Oe.onerror = function() {
                            be(new TypeError("Network request failed"))
                        }, Oe.ontimeout = function() {
                            be(new TypeError("Network request failed"))
                        }, Oe.onabort = function() {
                            be(new l.DOMException("Aborted", "AbortError"))
                        }, Oe.open(ye.method, ye.url, !0), ye.credentials === "include" ? Oe.withCredentials = !0 : ye.credentials === "omit" && (Oe.withCredentials = !1), "responseType" in Oe && c.blob && (Oe.responseType = "blob"), ye.headers.forEach(function(je, nt) {
                            Oe.setRequestHeader(nt, je)
                        }), ye.signal && (ye.signal.addEventListener("abort", Ue), Oe.onreadystatechange = function() {
                            Oe.readyState === 4 && ye.signal.removeEventListener("abort", Ue)
                        }), Oe.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                    })
                }
                return Ce.polyfill = !0, a.fetch || (a.fetch = Ce, a.Headers = P, a.Request = le, a.Response = Ie), l.Headers = P, l.Request = le, l.Response = Ie, l.fetch = Ce, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(Id, Id.exports);
    var WF = function() {
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
            var a = Object.getOwnPropertySymbols(t);
            if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var l = Object.getOwnPropertyDescriptor(t, r);
                if (l.value !== s || l.enumerable !== !0) return !1
            }
            return !0
        },
        $y = typeof Symbol < "u" && Symbol,
        VF = WF,
        KF = function() {
            return typeof $y != "function" || typeof Symbol != "function" || typeof $y("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : VF()
        },
        HF = "Function.prototype.bind called on incompatible ",
        Tf = Array.prototype.slice,
        qF = Object.prototype.toString,
        YF = "[object Function]",
        zF = function(t) {
            var r = this;
            if (typeof r != "function" || qF.call(r) !== YF) throw new TypeError(HF + r);
            for (var n = Tf.call(arguments, 1), s, a = function() {
                    if (this instanceof s) {
                        var p = r.apply(this, n.concat(Tf.call(arguments)));
                        return Object(p) === p ? p : this
                    } else return r.apply(t, n.concat(Tf.call(arguments)))
                }, l = Math.max(0, r.length - n.length), c = [], f = 0; f < l; f++) c.push("$" + f);
            if (s = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
                var d = function() {};
                d.prototype = r.prototype, s.prototype = new d, d.prototype = null
            }
            return s
        },
        XF = zF,
        Jh = Function.prototype.bind || XF,
        JF = Jh,
        QF = JF.call(Function.call, Object.prototype.hasOwnProperty),
        et, Xs = SyntaxError,
        kT = Function,
        Gs = TypeError,
        Af = function(e) {
            try {
                return kT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        ts = Object.getOwnPropertyDescriptor;
    if (ts) try {
        ts({}, "")
    } catch {
        ts = null
    }
    var Sf = function() {
            throw new Gs
        },
        ZF = ts ? function() {
            try {
                return arguments.callee, Sf
            } catch {
                try {
                    return ts(arguments, "callee").get
                } catch {
                    return Sf
                }
            }
        }() : Sf,
        Os = KF(),
        ai = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Ls = {},
        eB = typeof Uint8Array > "u" ? et : ai(Uint8Array),
        js = {
            "%AggregateError%": typeof AggregateError > "u" ? et : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? et : ArrayBuffer,
            "%ArrayIteratorPrototype%": Os ? ai([][Symbol.iterator]()) : et,
            "%AsyncFromSyncIteratorPrototype%": et,
            "%AsyncFunction%": Ls,
            "%AsyncGenerator%": Ls,
            "%AsyncGeneratorFunction%": Ls,
            "%AsyncIteratorPrototype%": Ls,
            "%Atomics%": typeof Atomics > "u" ? et : Atomics,
            "%BigInt%": typeof BigInt > "u" ? et : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? et : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? et : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? et : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? et : FinalizationRegistry,
            "%Function%": kT,
            "%GeneratorFunction%": Ls,
            "%Int8Array%": typeof Int8Array > "u" ? et : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? et : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? et : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Os ? ai(ai([][Symbol.iterator]())) : et,
            "%JSON%": typeof JSON == "object" ? JSON : et,
            "%Map%": typeof Map > "u" ? et : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Os ? et : ai(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? et : Promise,
            "%Proxy%": typeof Proxy > "u" ? et : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? et : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? et : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Os ? et : ai(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? et : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Os ? ai("" [Symbol.iterator]()) : et,
            "%Symbol%": Os ? Symbol : et,
            "%SyntaxError%": Xs,
            "%ThrowTypeError%": ZF,
            "%TypedArray%": eB,
            "%TypeError%": Gs,
            "%Uint8Array%": typeof Uint8Array > "u" ? et : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? et : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? et : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? et : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? et : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? et : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? et : WeakSet
        },
        tB = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = Af("async function () {}");
            else if (t === "%GeneratorFunction%") r = Af("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = Af("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = ai(s.prototype))
            }
            return js[t] = r, r
        },
        Ry = {
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
        po = Jh,
        Jl = QF,
        rB = po.call(Function.call, Array.prototype.concat),
        nB = po.call(Function.apply, Array.prototype.splice),
        Ly = po.call(Function.call, String.prototype.replace),
        Ql = po.call(Function.call, String.prototype.slice),
        iB = po.call(Function.call, RegExp.prototype.exec),
        sB = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        aB = /\\(\\)?/g,
        oB = function(t) {
            var r = Ql(t, 0, 1),
                n = Ql(t, -1);
            if (r === "%" && n !== "%") throw new Xs("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Xs("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return Ly(t, sB, function(a, l, c, f) {
                s[s.length] = c ? Ly(f, aB, "$1") : l || a
            }), s
        },
        lB = function(t, r) {
            var n = t,
                s;
            if (Jl(Ry, n) && (s = Ry[n], n = "%" + s[0] + "%"), Jl(js, n)) {
                var a = js[n];
                if (a === Ls && (a = tB(n)), typeof a > "u" && !r) throw new Gs("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: a
                }
            }
            throw new Xs("intrinsic " + t + " does not exist!")
        },
        Qh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Gs("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Gs('"allowMissing" argument must be a boolean');
            if (iB(/^%?[^%]*%?$/g, t) === null) throw new Xs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = oB(t),
                s = n.length > 0 ? n[0] : "",
                a = lB("%" + s + "%", r),
                l = a.name,
                c = a.value,
                f = !1,
                d = a.alias;
            d && (s = d[0], nB(n, rB([0, 1], d)));
            for (var p = 1, y = !0; p < n.length; p += 1) {
                var b = n[p],
                    w = Ql(b, 0, 1),
                    P = Ql(b, -1);
                if ((w === '"' || w === "'" || w === "`" || P === '"' || P === "'" || P === "`") && w !== P) throw new Xs("property names with quotes must have matching quotes");
                if ((b === "constructor" || !y) && (f = !0), s += "." + b, l = "%" + s + "%", Jl(js, l)) c = js[l];
                else if (c != null) {
                    if (!(b in c)) {
                        if (!r) throw new Gs("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (ts && p + 1 >= n.length) {
                        var M = ts(c, b);
                        y = !!M, y && "get" in M && !("originalValue" in M.get) ? c = M.get : c = c[b]
                    } else y = Jl(c, b), c = c[b];
                    y && !f && (js[l] = c)
                }
            }
            return c
        },
        xT = {
            exports: {}
        };
    (function(e) {
        var t = Jh,
            r = Qh,
            n = r("%Function.prototype.apply%"),
            s = r("%Function.prototype.call%"),
            a = r("%Reflect.apply%", !0) || t.call(s, n),
            l = r("%Object.getOwnPropertyDescriptor%", !0),
            c = r("%Object.defineProperty%", !0),
            f = r("%Math.max%");
        if (c) try {
            c({}, "a", {
                value: 1
            })
        } catch {
            c = null
        }
        e.exports = function(y) {
            var b = a(t, s, arguments);
            if (l && c) {
                var w = l(b, "length");
                w.configurable && c(b, "length", {
                    value: 1 + f(0, y.length - (arguments.length - 1))
                })
            }
            return b
        };
        var d = function() {
            return a(t, n, arguments)
        };
        c ? c(e.exports, "apply", {
            value: d
        }) : e.exports.apply = d
    })(xT);
    var DT = Qh,
        MT = xT.exports,
        cB = MT(DT("String.prototype.indexOf")),
        uB = function(t, r) {
            var n = DT(t, !!r);
            return typeof n == "function" && cB(t, ".prototype.") > -1 ? MT(n) : n
        };
    const fB = {},
        dB = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: fB
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        hB = vk(dB);
    var Zh = typeof Map == "function" && Map.prototype,
        Of = Object.getOwnPropertyDescriptor && Zh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Zl = Zh && Of && typeof Of.get == "function" ? Of.get : null,
        pB = Zh && Map.prototype.forEach,
        ep = typeof Set == "function" && Set.prototype,
        wf = Object.getOwnPropertyDescriptor && ep ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        ec = ep && wf && typeof wf.get == "function" ? wf.get : null,
        gB = ep && Set.prototype.forEach,
        mB = typeof WeakMap == "function" && WeakMap.prototype,
        ja = mB ? WeakMap.prototype.has : null,
        vB = typeof WeakSet == "function" && WeakSet.prototype,
        Wa = vB ? WeakSet.prototype.has : null,
        yB = typeof WeakRef == "function" && WeakRef.prototype,
        Ny = yB ? WeakRef.prototype.deref : null,
        _B = Boolean.prototype.valueOf,
        EB = Object.prototype.toString,
        bB = Function.prototype.toString,
        TB = String.prototype.match,
        tp = String.prototype.slice,
        ci = String.prototype.replace,
        AB = String.prototype.toUpperCase,
        Py = String.prototype.toLowerCase,
        UT = RegExp.prototype.test,
        ky = Array.prototype.concat,
        On = Array.prototype.join,
        SB = Array.prototype.slice,
        xy = Math.floor,
        $d = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Cf = Object.getOwnPropertySymbols,
        Rd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Js = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        lr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Js ? "object" : "symbol") ? Symbol.toStringTag : null,
        FT = Object.prototype.propertyIsEnumerable,
        Dy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function My(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || UT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -xy(-e) : xy(e);
            if (n !== e) {
                var s = String(n),
                    a = tp.call(t, s.length + 1);
                return ci.call(s, r, "$&_") + "." + ci.call(ci.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return ci.call(t, r, "$&_")
    }
    var Ld = hB,
        Uy = Ld.custom,
        Fy = GT(Uy) ? Uy : null,
        OB = function e(t, r, n, s) {
            var a = r || {};
            if (oi(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (oi(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var l = oi(a, "customInspect") ? a.customInspect : !0;
            if (typeof l != "boolean" && l !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (oi(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (oi(a, "numericSeparator") && typeof a.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var c = a.numericSeparator;
            if (typeof t > "u") return "undefined";
            if (t === null) return "null";
            if (typeof t == "boolean") return t ? "true" : "false";
            if (typeof t == "string") return WT(t, a);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return c ? My(t, f) : f
            }
            if (typeof t == "bigint") {
                var d = String(t) + "n";
                return c ? My(t, d) : d
            }
            var p = typeof a.depth > "u" ? 5 : a.depth;
            if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof t == "object") return Nd(t) ? "[Array]" : "[Object]";
            var y = WB(a, n);
            if (typeof s > "u") s = [];
            else if (jT(s, t) >= 0) return "[Circular]";

            function b(Ce, U, ie) {
                if (U && (s = SB.call(s), s.push(U)), ie) {
                    var de = {
                        depth: a.depth
                    };
                    return oi(a, "quoteStyle") && (de.quoteStyle = a.quoteStyle), e(Ce, de, n + 1, s)
                }
                return e(Ce, a, n + 1, s)
            }
            if (typeof t == "function" && !By(t)) {
                var w = kB(t),
                    P = vl(t, b);
                return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (P.length > 0 ? " { " + On.call(P, ", ") + " }" : "")
            }
            if (GT(t)) {
                var M = Js ? ci.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Rd.call(t);
                return typeof t == "object" && !Js ? La(M) : M
            }
            if (BB(t)) {
                for (var G = "<" + Py.call(String(t.nodeName)), C = t.attributes || [], H = 0; H < C.length; H++) G += " " + C[H].name + "=" + BT(wB(C[H].value), "double", a);
                return G += ">", t.childNodes && t.childNodes.length && (G += "..."), G += "</" + Py.call(String(t.nodeName)) + ">", G
            }
            if (Nd(t)) {
                if (t.length === 0) return "[]";
                var z = vl(t, b);
                return y && !jB(z) ? "[" + Pd(z, y) + "]" : "[ " + On.call(z, ", ") + " ]"
            }
            if (IB(t)) {
                var V = vl(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !FT.call(t, "cause") ? "{ [" + String(t) + "] " + On.call(ky.call("[cause]: " + b(t.cause), V), ", ") + " }" : V.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + On.call(V, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Fy && typeof t[Fy] == "function" && Ld) return Ld(t, {
                    depth: p - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (xB(t)) {
                var j = [];
                return pB.call(t, function(Ce, U) {
                    j.push(b(U, t, !0) + " => " + b(Ce, t))
                }), Gy("Map", Zl.call(t), j, y)
            }
            if (UB(t)) {
                var Q = [];
                return gB.call(t, function(Ce) {
                    Q.push(b(Ce, t))
                }), Gy("Set", ec.call(t), Q, y)
            }
            if (DB(t)) return If("WeakMap");
            if (FB(t)) return If("WeakSet");
            if (MB(t)) return If("WeakRef");
            if (RB(t)) return La(b(Number(t)));
            if (NB(t)) return La(b($d.call(t)));
            if (LB(t)) return La(_B.call(t));
            if ($B(t)) return La(b(String(t)));
            if (!CB(t) && !By(t)) {
                var oe = vl(t, b),
                    le = Dy ? Dy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    $e = !le && lr && Object(t) === t && lr in t ? tp.call(_i(t), 8, -1) : ue ? "Object" : "",
                    Ie = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ie + ($e || ue ? "[" + On.call(ky.call([], $e || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : y ? fe + "{" + Pd(oe, y) + "}" : fe + "{ " + On.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function BT(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function wB(e) {
        return ci.call(String(e), /"/g, "&quot;")
    }

    function Nd(e) {
        return _i(e) === "[object Array]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function CB(e) {
        return _i(e) === "[object Date]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function By(e) {
        return _i(e) === "[object RegExp]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function IB(e) {
        return _i(e) === "[object Error]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function $B(e) {
        return _i(e) === "[object String]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function RB(e) {
        return _i(e) === "[object Number]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function LB(e) {
        return _i(e) === "[object Boolean]" && (!lr || !(typeof e == "object" && lr in e))
    }

    function GT(e) {
        if (Js) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Rd) return !1;
        try {
            return Rd.call(e), !0
        } catch {}
        return !1
    }

    function NB(e) {
        if (!e || typeof e != "object" || !$d) return !1;
        try {
            return $d.call(e), !0
        } catch {}
        return !1
    }
    var PB = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function oi(e, t) {
        return PB.call(e, t)
    }

    function _i(e) {
        return EB.call(e)
    }

    function kB(e) {
        if (e.name) return e.name;
        var t = TB.call(bB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function jT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function xB(e) {
        if (!Zl || !e || typeof e != "object") return !1;
        try {
            Zl.call(e);
            try {
                ec.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function DB(e) {
        if (!ja || !e || typeof e != "object") return !1;
        try {
            ja.call(e, ja);
            try {
                Wa.call(e, Wa)
            } catch {
                return !0
            }
            return e instanceof WeakMap
        } catch {}
        return !1
    }

    function MB(e) {
        if (!Ny || !e || typeof e != "object") return !1;
        try {
            return Ny.call(e), !0
        } catch {}
        return !1
    }

    function UB(e) {
        if (!ec || !e || typeof e != "object") return !1;
        try {
            ec.call(e);
            try {
                Zl.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function FB(e) {
        if (!Wa || !e || typeof e != "object") return !1;
        try {
            Wa.call(e, Wa);
            try {
                ja.call(e, ja)
            } catch {
                return !0
            }
            return e instanceof WeakSet
        } catch {}
        return !1
    }

    function BB(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function WT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return WT(tp.call(e, 0, t.maxStringLength), t) + n
        }
        var s = ci.call(ci.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, GB);
        return BT(s, "single", t)
    }

    function GB(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + AB.call(t.toString(16))
    }

    function La(e) {
        return "Object(" + e + ")"
    }

    function If(e) {
        return e + " { ? }"
    }

    function Gy(e, t, r, n) {
        var s = n ? Pd(r, n) : On.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function jB(e) {
        for (var t = 0; t < e.length; t++)
            if (jT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function WB(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = On.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: On.call(Array(t + 1), r)
        }
    }

    function Pd(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + On.call(e, "," + r) + `
` + t.prev
    }

    function vl(e, t) {
        var r = Nd(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = oi(e, s) ? t(e[s], e) : ""
        }
        var a = typeof Cf == "function" ? Cf(e) : [],
            l;
        if (Js) {
            l = {};
            for (var c = 0; c < a.length; c++) l["$" + a[c]] = a[c]
        }
        for (var f in e) !oi(e, f) || r && String(Number(f)) === f && f < e.length || Js && l["$" + f] instanceof Symbol || (UT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Cf == "function")
            for (var d = 0; d < a.length; d++) FT.call(e, a[d]) && n.push("[" + t(a[d]) + "]: " + t(e[a[d]], e));
        return n
    }
    var rp = Qh,
        ca = uB,
        VB = OB,
        KB = rp("%TypeError%"),
        yl = rp("%WeakMap%", !0),
        _l = rp("%Map%", !0),
        HB = ca("WeakMap.prototype.get", !0),
        qB = ca("WeakMap.prototype.set", !0),
        YB = ca("WeakMap.prototype.has", !0),
        zB = ca("Map.prototype.get", !0),
        XB = ca("Map.prototype.set", !0),
        JB = ca("Map.prototype.has", !0),
        np = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        QB = function(e, t) {
            var r = np(e, t);
            return r && r.value
        },
        ZB = function(e, t, r) {
            var n = np(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        eG = function(e, t) {
            return !!np(e, t)
        },
        tG = function() {
            var t, r, n, s = {
                assert: function(a) {
                    if (!s.has(a)) throw new KB("Side channel does not contain " + VB(a))
                },
                get: function(a) {
                    if (yl && a && (typeof a == "object" || typeof a == "function")) {
                        if (t) return HB(t, a)
                    } else if (_l) {
                        if (r) return zB(r, a)
                    } else if (n) return QB(n, a)
                },
                has: function(a) {
                    if (yl && a && (typeof a == "object" || typeof a == "function")) {
                        if (t) return YB(t, a)
                    } else if (_l) {
                        if (r) return JB(r, a)
                    } else if (n) return eG(n, a);
                    return !1
                },
                set: function(a, l) {
                    yl && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new yl), qB(t, a, l)) : _l ? (r || (r = new _l), XB(r, a, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), ZB(n, a, l))
                }
            };
            return s
        },
        rG = String.prototype.replace,
        nG = /%20/g,
        $f = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        ip = {
            default: $f.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return rG.call(e, nG, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: $f.RFC1738,
            RFC3986: $f.RFC3986
        },
        iG = ip,
        Rf = Object.prototype.hasOwnProperty,
        Yi = Array.isArray,
        En = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        sG = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (Yi(n)) {
                    for (var s = [], a = 0; a < n.length; ++a) typeof n[a] < "u" && s.push(n[a]);
                    r.obj[r.prop] = s
                }
            }
        },
        VT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        aG = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (Yi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Rf.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return Yi(t) && !Yi(r) && (s = VT(t, n)), Yi(t) && Yi(r) ? (r.forEach(function(a, l) {
                if (Rf.call(t, l)) {
                    var c = t[l];
                    c && typeof c == "object" && a && typeof a == "object" ? t[l] = e(c, a, n) : t.push(a)
                } else t[l] = a
            }), t) : Object.keys(r).reduce(function(a, l) {
                var c = r[l];
                return Rf.call(a, l) ? a[l] = e(a[l], c, n) : a[l] = c, a
            }, s)
        },
        oG = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        lG = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        cG = function(t, r, n, s, a) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(p) {
                return "%26%23" + parseInt(p.slice(2), 16) + "%3B"
            });
            for (var c = "", f = 0; f < l.length; ++f) {
                var d = l.charCodeAt(f);
                if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || a === iG.RFC1738 && (d === 40 || d === 41)) {
                    c += l.charAt(f);
                    continue
                }
                if (d < 128) {
                    c = c + En[d];
                    continue
                }
                if (d < 2048) {
                    c = c + (En[192 | d >> 6] + En[128 | d & 63]);
                    continue
                }
                if (d < 55296 || d >= 57344) {
                    c = c + (En[224 | d >> 12] + En[128 | d >> 6 & 63] + En[128 | d & 63]);
                    continue
                }
                f += 1, d = 65536 + ((d & 1023) << 10 | l.charCodeAt(f) & 1023), c += En[240 | d >> 18] + En[128 | d >> 12 & 63] + En[128 | d >> 6 & 63] + En[128 | d & 63]
            }
            return c
        },
        uG = function(t) {
            for (var r = [{
                    obj: {
                        o: t
                    },
                    prop: "o"
                }], n = [], s = 0; s < r.length; ++s)
                for (var a = r[s], l = a.obj[a.prop], c = Object.keys(l), f = 0; f < c.length; ++f) {
                    var d = c[f],
                        p = l[d];
                    typeof p == "object" && p !== null && n.indexOf(p) === -1 && (r.push({
                        obj: l,
                        prop: d
                    }), n.push(p))
                }
            return sG(r), t
        },
        fG = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        dG = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        hG = function(t, r) {
            return [].concat(t, r)
        },
        pG = function(t, r) {
            if (Yi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        KT = {
            arrayToObject: VT,
            assign: oG,
            combine: hG,
            compact: uG,
            decode: lG,
            encode: cG,
            isBuffer: dG,
            isRegExp: fG,
            maybeMap: pG,
            merge: aG
        },
        HT = tG,
        kd = KT,
        Va = ip,
        gG = Object.prototype.hasOwnProperty,
        jy = {
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
        mG = String.prototype.split,
        vG = Array.prototype.push,
        qT = function(e, t) {
            vG.apply(e, Un(t) ? t : [t])
        },
        yG = Date.prototype.toISOString,
        Wy = Va.default,
        Qt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: kd.encode,
            encodeValuesOnly: !1,
            format: Wy,
            formatter: Va.formatters[Wy],
            indices: !1,
            serializeDate: function(t) {
                return yG.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        _G = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        Lf = {},
        EG = function e(t, r, n, s, a, l, c, f, d, p, y, b, w, P, M, G) {
            for (var C = t, H = G, z = 0, V = !1;
                (H = H.get(Lf)) !== void 0 && !V;) {
                var j = H.get(t);
                if (z += 1, typeof j < "u") {
                    if (j === z) throw new RangeError("Cyclic object value");
                    V = !0
                }
                typeof H.get(Lf) > "u" && (z = 0)
            }
            if (typeof f == "function" ? C = f(r, C) : C instanceof Date ? C = y(C) : n === "comma" && Un(C) && (C = kd.maybeMap(C, function(Oe) {
                    return Oe instanceof Date ? y(Oe) : Oe
                })), C === null) {
                if (a) return c && !P ? c(r, Qt.encoder, M, "key", b) : r;
                C = ""
            }
            if (_G(C) || kd.isBuffer(C)) {
                if (c) {
                    var Q = P ? r : c(r, Qt.encoder, M, "key", b);
                    if (n === "comma" && P) {
                        for (var oe = mG.call(String(C), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + w(c(oe[ue], Qt.encoder, M, "value", b));
                        return [w(Q) + (s && Un(C) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [w(Q) + "=" + w(c(C, Qt.encoder, M, "value", b))]
                }
                return [w(r) + "=" + w(String(C))]
            }
            var $e = [];
            if (typeof C > "u") return $e;
            var Ie;
            if (n === "comma" && Un(C)) Ie = [{
                value: C.length > 0 ? C.join(",") || null : void 0
            }];
            else if (Un(f)) Ie = f;
            else {
                var fe = Object.keys(C);
                Ie = d ? fe.sort(d) : fe
            }
            for (var Ce = s && Un(C) && C.length === 1 ? r + "[]" : r, U = 0; U < Ie.length; ++U) {
                var ie = Ie[U],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : C[ie];
                if (!(l && de === null)) {
                    var be = Un(C) ? typeof n == "function" ? n(Ce, ie) : Ce : Ce + (p ? "." + ie : "[" + ie + "]");
                    G.set(t, z);
                    var ye = HT();
                    ye.set(Lf, G), qT($e, e(de, be, n, s, a, l, c, f, d, p, y, b, w, P, M, ye))
                }
            }
            return $e
        },
        bG = function(t) {
            if (!t) return Qt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Qt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = Va.default;
            if (typeof t.format < "u") {
                if (!gG.call(Va.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = Va.formatters[n],
                a = Qt.filter;
            return (typeof t.filter == "function" || Un(t.filter)) && (a = t.filter), {
                addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Qt.addQueryPrefix,
                allowDots: typeof t.allowDots > "u" ? Qt.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Qt.charsetSentinel,
                delimiter: typeof t.delimiter > "u" ? Qt.delimiter : t.delimiter,
                encode: typeof t.encode == "boolean" ? t.encode : Qt.encode,
                encoder: typeof t.encoder == "function" ? t.encoder : Qt.encoder,
                encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Qt.encodeValuesOnly,
                filter: a,
                format: n,
                formatter: s,
                serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Qt.serializeDate,
                skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Qt.skipNulls,
                sort: typeof t.sort == "function" ? t.sort : null,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Qt.strictNullHandling
            }
        },
        TG = function(e, t) {
            var r = e,
                n = bG(t),
                s, a;
            typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Un(n.filter) && (a = n.filter, s = a);
            var l = [];
            if (typeof r != "object" || r === null) return "";
            var c;
            t && t.arrayFormat in jy ? c = t.arrayFormat : t && "indices" in t ? c = t.indices ? "indices" : "repeat" : c = "indices";
            var f = jy[c];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var d = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var p = HT(), y = 0; y < s.length; ++y) {
                var b = s[y];
                n.skipNulls && r[b] === null || qT(l, EG(r[b], b, f, d, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, p))
            }
            var w = l.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), w.length > 0 ? P + w : ""
        },
        Qs = KT,
        xd = Object.prototype.hasOwnProperty,
        AG = Array.isArray,
        qt = {
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
        SG = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        YT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        OG = "utf8=%26%2310003%3B",
        wG = "utf8=%E2%9C%93",
        CG = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, a),
                c = -1,
                f, d = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === wG ? d = "utf-8" : l[f] === OG && (d = "iso-8859-1"), c = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== c) {
                    var p = l[f],
                        y = p.indexOf("]="),
                        b = y === -1 ? p.indexOf("=") : y + 1,
                        w, P;
                    b === -1 ? (w = r.decoder(p, qt.decoder, d, "key"), P = r.strictNullHandling ? null : "") : (w = r.decoder(p.slice(0, b), qt.decoder, d, "key"), P = Qs.maybeMap(YT(p.slice(b + 1), r), function(M) {
                        return r.decoder(M, qt.decoder, d, "value")
                    })), P && r.interpretNumericEntities && d === "iso-8859-1" && (P = SG(P)), p.indexOf("[]=") > -1 && (P = AG(P) ? [P] : P), xd.call(n, w) ? n[w] = Qs.combine(n[w], P) : n[w] = P
                } return n
        },
        IG = function(e, t, r, n) {
            for (var s = n ? t : YT(t, r), a = e.length - 1; a >= 0; --a) {
                var l, c = e[a];
                if (c === "[]" && r.parseArrays) l = [].concat(s);
                else {
                    l = r.plainObjects ? Object.create(null) : {};
                    var f = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c,
                        d = parseInt(f, 10);
                    !r.parseArrays && f === "" ? l = {
                        0: s
                    } : !isNaN(d) && c !== f && String(d) === f && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (l = [], l[d] = s) : f !== "__proto__" && (l[f] = s)
                }
                s = l
            }
            return s
        },
        $G = function(t, r, n, s) {
            if (!!t) {
                var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    l = /(\[[^[\]]*])/,
                    c = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && l.exec(a),
                    d = f ? a.slice(0, f.index) : a,
                    p = [];
                if (d) {
                    if (!n.plainObjects && xd.call(Object.prototype, d) && !n.allowPrototypes) return;
                    p.push(d)
                }
                for (var y = 0; n.depth > 0 && (f = c.exec(a)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && xd.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    p.push(f[1])
                }
                return f && p.push("[" + a.slice(f.index) + "]"), IG(p, r, n, s)
            }
        },
        RG = function(t) {
            if (!t) return qt;
            if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof t.charset > "u" ? qt.charset : t.charset;
            return {
                allowDots: typeof t.allowDots > "u" ? qt.allowDots : !!t.allowDots,
                allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : qt.allowPrototypes,
                allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : qt.allowSparse,
                arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : qt.arrayLimit,
                charset: r,
                charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : qt.charsetSentinel,
                comma: typeof t.comma == "boolean" ? t.comma : qt.comma,
                decoder: typeof t.decoder == "function" ? t.decoder : qt.decoder,
                delimiter: typeof t.delimiter == "string" || Qs.isRegExp(t.delimiter) ? t.delimiter : qt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : qt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : qt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : qt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : qt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : qt.strictNullHandling
            }
        },
        LG = function(e, t) {
            var r = RG(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? CG(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, a = Object.keys(n), l = 0; l < a.length; ++l) {
                var c = a[l],
                    f = $G(c, n[c], r, typeof e == "string");
                s = Qs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Qs.compact(s)
        },
        NG = TG,
        PG = LG,
        kG = ip,
        zT = {
            formats: kG,
            parse: PG,
            stringify: NG
        };
    class xG {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class DG {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class MG {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class UG {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class FG {}
    var Pc = {
        CreateRoomReply: xG,
        GetRoomReply: DG,
        GetAudienceReply: MG,
        RoomExit: UG,
        RoomLock: FG
    };
    const Vy = Id.exports,
        BG = zT,
        {
            CreateRoomReply: GG,
            GetRoomReply: jG
        } = Pc;
    class WG {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = BG.stringify(r);
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
                l = await (await Vy(n, {
                    method: "POST"
                })).json();
            if (!l.ok) throw new Error(`failed to create room: ${l.error}`);
            let c = l.body;
            return new GG({
                code: c.code,
                token: c.token,
                host: c.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await Vy(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let a = s.body;
            return new jG({
                appId: a.appId,
                appTag: a.appTag,
                audienceEnabled: a.audienceEnabled,
                code: a.code,
                host: a.host,
                audienceHost: a.audienceHost,
                locked: a.locked,
                full: a.full,
                moderationEnabled: a.moderationEnabled,
                passwordRequired: a.passwordRequired,
                twitchLocked: a.twitchLocked,
                locale: a.locale,
                keepalive: a.keepalive,
                controllerBranch: a.controllerBranch
            })
        }
    }
    var VG = {
            APIClient: WG
        },
        Ns = null;
    typeof WebSocket < "u" ? Ns = WebSocket : typeof MozWebSocket < "u" ? Ns = MozWebSocket : typeof kt < "u" ? Ns = kt.WebSocket || kt.MozWebSocket : typeof window < "u" ? Ns = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ns = self.WebSocket || self.MozWebSocket);
    var KG = Ns,
        sp = {
            exports: {}
        },
        Ws = typeof Reflect == "object" ? Reflect : null,
        Ky = Ws && typeof Ws.apply == "function" ? Ws.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        xl;
    Ws && typeof Ws.ownKeys == "function" ? xl = Ws.ownKeys : Object.getOwnPropertySymbols ? xl = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : xl = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function HG(e) {
        console && console.warn && console.warn(e)
    }
    var XT = Number.isNaN || function(t) {
        return t !== t
    };

    function gt() {
        gt.init.call(this)
    }
    sp.exports = gt;
    sp.exports.once = XG;
    gt.EventEmitter = gt;
    gt.prototype._events = void 0;
    gt.prototype._eventsCount = 0;
    gt.prototype._maxListeners = void 0;
    var Hy = 10;

    function kc(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(gt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Hy
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || XT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Hy = e
        }
    });
    gt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    gt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || XT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function JT(e) {
        return e._maxListeners === void 0 ? gt.defaultMaxListeners : e._maxListeners
    }
    gt.prototype.getMaxListeners = function() {
        return JT(this)
    };
    gt.prototype.emit = function(t) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var s = t === "error",
            a = this._events;
        if (a !== void 0) s = s && a.error === void 0;
        else if (!s) return !1;
        if (s) {
            var l;
            if (r.length > 0 && (l = r[0]), l instanceof Error) throw l;
            var c = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
            throw c.context = l, c
        }
        var f = a[t];
        if (f === void 0) return !1;
        if (typeof f == "function") Ky(f, this, r);
        else
            for (var d = f.length, p = rA(f, d), n = 0; n < d; ++n) Ky(p[n], this, r);
        return !0
    };

    function QT(e, t, r, n) {
        var s, a, l;
        if (kc(r), a = e._events, a === void 0 ? (a = e._events = Object.create(null), e._eventsCount = 0) : (a.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), a = e._events), l = a[t]), l === void 0) l = a[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = a[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = JT(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = l.length, HG(c)
        }
        return e
    }
    gt.prototype.addListener = function(t, r) {
        return QT(this, t, r, !1)
    };
    gt.prototype.on = gt.prototype.addListener;
    gt.prototype.prependListener = function(t, r) {
        return QT(this, t, r, !0)
    };

    function qG() {
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
            s = qG.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    gt.prototype.once = function(t, r) {
        return kc(r), this.on(t, ZT(this, t, r)), this
    };
    gt.prototype.prependOnceListener = function(t, r) {
        return kc(r), this.prependListener(t, ZT(this, t, r)), this
    };
    gt.prototype.removeListener = function(t, r) {
        var n, s, a, l, c;
        if (kc(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (a = -1, l = n.length - 1; l >= 0; l--)
                if (n[l] === r || n[l].listener === r) {
                    c = n[l].listener, a = l;
                    break
                } if (a < 0) return this;
            a === 0 ? n.shift() : YG(n, a), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, c || r)
        }
        return this
    };
    gt.prototype.off = gt.prototype.removeListener;
    gt.prototype.removeAllListeners = function(t) {
        var r, n, s;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
        if (arguments.length === 0) {
            var a = Object.keys(n),
                l;
            for (s = 0; s < a.length; ++s) l = a[s], l !== "removeListener" && this.removeAllListeners(l);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[t], typeof r == "function") this.removeListener(t, r);
        else if (r !== void 0)
            for (s = r.length - 1; s >= 0; s--) this.removeListener(t, r[s]);
        return this
    };

    function eA(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? zG(s) : rA(s, s.length)
    }
    gt.prototype.listeners = function(t) {
        return eA(this, t, !0)
    };
    gt.prototype.rawListeners = function(t) {
        return eA(this, t, !1)
    };
    gt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : tA.call(e, t)
    };
    gt.prototype.listenerCount = tA;

    function tA(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    gt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? xl(this._events) : []
    };

    function rA(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function YG(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function zG(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function XG(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, a), n(l)
            }

            function a() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            nA(e, t, a, {
                once: !0
            }), t !== "error" && JG(e, s, {
                once: !0
            })
        })
    }

    function JG(e, t, r) {
        typeof e.on == "function" && nA(e, "error", t, r)
    }

    function nA(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(a) {
            n.once && e.removeEventListener(t, s), r(a)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class QG {
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
    class go extends xc {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class iA extends go {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class sA extends go {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class aA extends go {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ft extends xc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class oA extends ft {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class lA extends ft {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class cA extends ft {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class uA extends ft {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class fA extends ft {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class dA extends ft {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class hA extends ft {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class pA extends ft {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class gA extends ft {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class mA extends ft {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class vA extends ft {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class yA extends ft {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class _A extends ft {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class EA extends ft {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class bA extends ft {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class TA extends ft {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class AA extends ft {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class SA extends ft {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class OA extends ft {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class wA extends ft {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class CA extends ft {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class IA extends ft {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class $A extends ft {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class RA extends ft {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class LA extends ft {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class NA extends ft {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class PA extends ft {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class kA extends ft {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function ZG({
        code: e,
        message: t
    }) {
        const r = ej[e];
        return r ? new r({
            message: t
        }) : new xc({
            message: t
        })
    }
    var rs = {
        createError: ZG,
        CallError: xc,
        EcastServerError: go,
        EcastCreateRoomFailed: iA,
        EcastDialRoomFailed: sA,
        EcastServerIsShuttingDown: aA,
        EcastClientError: ft,
        EcastParseError: oA,
        EcastRequestIsMissingOpcode: lA,
        EcastRequestHasInvalidOpcode: cA,
        EcastRequestHasInvalidArguments: uA,
        EcastEntityNotFound: fA,
        EcastEntityAlreadyExists: dA,
        EcastEntityTypeError: hA,
        EcastNoSuchClient: pA,
        EcastRoomIsLocked: gA,
        EcastRoomIsFull: mA,
        EcastLicenseNotFound: vA,
        EcastLicenseCheckFailed: yA,
        EcastRoomNotFound: _A,
        EcastInvalidRole: EA,
        EcastTwitchLoginRequired: bA,
        EcastInvalidOption: TA,
        EcastPasswordRequired: AA,
        EcastInvalidPassword: SA,
        EcastNameRequired: OA,
        EcastFilterError: wA,
        EcastNoSuchFilter: CA,
        EcastPermissionDenied: IA,
        EcastNotConnected: $A,
        EcastIllegalOperation: RA,
        EcastACLChangeDenied: LA,
        EcastRoomHasEnded: NA,
        EcastEntityLocked: PA,
        EcastRateLimitExceeded: kA,
        ObservedError: QG
    };
    const ej = {
        1e3: go,
        1001: iA,
        1002: sA,
        1003: aA,
        2e3: ft,
        2001: oA,
        2002: lA,
        2003: cA,
        2004: uA,
        2005: fA,
        2006: dA,
        2007: hA,
        2008: pA,
        2009: gA,
        2010: mA,
        2011: vA,
        2012: yA,
        2013: _A,
        2014: EA,
        2015: bA,
        2016: TA,
        2017: AA,
        2018: SA,
        2019: OA,
        2021: wA,
        2022: CA,
        2023: IA,
        2024: $A,
        2025: RA,
        2026: LA,
        2027: NA,
        2028: PA,
        2420: kA
    };
    class tj {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class rj {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class nj {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class ij {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class sj {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var ap = {
        ClientConnected: rj,
        ClientDisconnected: nj,
        ClientKicked: sj,
        ClientSend: ij,
        ClientWelcome: tj
    };
    class aj {
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
    var op = {
        CountGroup: aj
    };
    class oj {
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
    var lp = {
        GCounter: oj
    };
    class lj {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var xA = {
        Notification: lj
    };
    class cj {
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
    class uj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var cp = {
        ObjectEntity: cj,
        ObjectEcho: uj
    };
    class fj {
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
    var up = {
        PNCounter: fj
    };
    class dj {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var DA = {
        Reply: dj
    };
    class hj {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var pj = {
        Request: hj
    };
    class gj {
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
    class mj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var fp = {
        TextEntity: gj,
        TextEcho: mj
    };
    class vj {
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
    var dp = {
        TextRing: vj
    };
    class yj {
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
    var MA = {
        ArtifactEntity: yj
    };
    class _j {
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
    class Ej {
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
    class bj {
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
    var hp = {
        DoodleEntity: _j,
        DoodleLine: Ej,
        DoodleLineRemoved: bj
    };
    class Tj {
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
    class Aj {
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
    class Sj {
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
    var UA = {
        StackEntity: Tj,
        StackElement: Aj,
        StackElements: Sj
    };
    class Oj {
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
    var FA = {
        DropEntity: Oj
    };
    class wj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var Cj = {
        Echo: wj
    };
    class Ij {
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
    var $j = {
        LockEntity: Ij
    };
    class Rj {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var BA = {
        OK: Rj
    };
    class Lj {
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
    var GA = {
        NumberEntity: Lj
    };
    const {
        ArtifactEntity: Nj
    } = MA, {
        ClientWelcome: Pj,
        ClientConnected: kj,
        ClientDisconnected: xj,
        ClientKicked: Dj,
        ClientSend: Mj
    } = ap, {
        CountGroup: Uj
    } = op, {
        DoodleEntity: Fj,
        DoodleLine: Bj,
        DoodleLineRemoved: Gj
    } = hp, {
        StackEntity: jj,
        StackElement: Wj,
        StackElements: Vj
    } = UA, {
        DropEntity: Kj
    } = FA, {
        Echo: Hj
    } = Cj, {
        LockEntity: qj
    } = $j, {
        GCounter: Yj
    } = lp, {
        GetAudienceReply: zj,
        RoomExit: Xj,
        RoomLock: Jj
    } = Pc, {
        Notification: Qj
    } = xA, {
        OK: Zj
    } = BA, {
        NumberEntity: e3
    } = GA, {
        ObjectEcho: t3,
        ObjectEntity: r3
    } = cp, {
        PNCounter: qy
    } = up, {
        Reply: n3
    } = DA, {
        TextEcho: i3,
        TextEntity: s3
    } = fp, {
        TextRing: a3
    } = dp, {
        createError: Yy,
        ObservedError: o3
    } = rs;

    function Dd(e, t, r) {
        switch (e) {
            case "ok":
                return new Zj;
            case "echo":
                return new Hj({
                    message: t.message
                });
            case "lock":
                return new qj({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return Yy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new o3({
                    to: t.to,
                    error: Yy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new s3({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new i3({
                    message: t.message
                });
            case "object":
                return new r3({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new t3({
                    message: t.message
                });
            case "drop":
                return new Kj({
                    key: t.key
                });
            case "artifact":
                return new Nj({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new kj({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new xj({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new Dj({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new Mj({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new Pj({
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
                    Object.entries(t.entities).forEach(([a, l]) => {
                        s[a] = Dd(l[0], l[1], l[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new Fj({
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
                return new Bj({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new Gj({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new jj({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new Wj({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new Vj({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new e3({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new Xj({
                    cause: t.cause
                });
            case "room/lock":
                return new Jj;
            case "room/get-audience":
                return new zj({
                    connections: t.connections
                });
            case "audience":
                return new qy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new Uj({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new a3({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new Yj({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new qy({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function l3(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new n3({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Dd(r, t.result)
        }) : new Qj({
            pc: t.pc,
            opcode: r,
            result: Dd(r, t.result)
        })
    }
    var c3 = {
        parseResponseMessage: l3
    };
    const zy = KG,
        u3 = zT,
        f3 = sp.exports,
        {
            CallError: d3
        } = rs,
        {
            ClientWelcome: h3
        } = ap,
        {
            CountGroup: p3
        } = op,
        {
            GCounter: g3
        } = lp,
        {
            Notification: Xy
        } = xA,
        {
            ObjectEntity: Nf
        } = cp,
        {
            PNCounter: m3
        } = up,
        {
            Reply: v3
        } = DA,
        {
            Request: y3
        } = pj,
        {
            TextEntity: Pf
        } = fp,
        {
            TextRing: _3
        } = dp,
        {
            parseResponseMessage: E3
        } = c3,
        {
            DoodleEntity: b3
        } = hp,
        {
            StackEntity: T3
        } = UA,
        A3 = 1e3 + Math.floor(Math.random() * 500),
        Jy = 13e3;
    class S3 extends f3 {
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
            const r = u3.stringify(t),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((s, a) => {
                let l = !1,
                    c = !1,
                    f = p => {
                        s(p), l = !0
                    },
                    d = p => {
                        a(p), l = !0
                    };
                this.conn = new zy(n, "ecast-v0"), this.conn.onmessage = p => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(p.data),null,2)}`);
                    const y = E3(p);
                    if (y instanceof v3) this.onReply(y);
                    else if (y instanceof Xy) {
                        if (y.result instanceof h3) c = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
                        else if (!l) {
                            d(y.result);
                            return
                        }
                        this.onNotification(y)
                    } else console.error(`failed to parse response messsage: ${y}`)
                }, this.conn.onerror = p => {
                    l ? this.emit("socketError", p) : d(p)
                }, this.conn.onclose = p => {
                    this.debugLog("onclose", p.code), c && p.code === 1006 ? this.reconnect() : this.emit("socketClose", p)
                }, this.conn.onopen = p => {
                    this.emit("socketOpen", p)
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
                r = A3;
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
                if (r >= Jy) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(Jy, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new Xy(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof d3 ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== zy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new y3({
                    seq: n,
                    opcode: t,
                    params: r
                }),
                a = new Promise((c, f) => {
                    this.pending[n] = {
                        resolve: c,
                        reject: f,
                        request: s
                    }
                }),
                l = JSON.stringify(s);
            return this.debugLog(`send -> ${l}`), this.conn.send(l), a
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
            const a = await this.send("object/create", s);
            return this.entities[t] = new Nf({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), a
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
            const a = await this.send("object/set", s);
            return this.entities[t] = new Nf({
                key: t,
                val: r,
                meta: {
                    locked: !1
                }
            }), a
        }
        async updateObject(t, r) {
            const n = await this.send("object/update", {
                key: t,
                val: r
            });
            return this.entities[t] = new Nf({
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
                    acl: a,
                    accept: l,
                    reject: c
                } = n;
            a && (s.acl = a), l && (s.accept = l), c && (s.reject = c);
            const f = await this.send("text/create", s);
            return this.entities[t] = new Pf({
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
            const a = await this.send("text/set", s);
            return this.entities[t] = new Pf({
                key: t,
                text: r,
                meta: {
                    locked: !1
                }
            }), a
        }
        async updateText(t, r) {
            const n = await this.send("text/update", {
                key: t,
                val: r
            });
            return this.entities[t] = new Pf({
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
                colors: a,
                live: l,
                maxPoints: c,
                size: f,
                weights: d
            } = r;
            s && (n.acl = s), a && (n.colors = a), n.live = l, c != null && (n.maxPoints = c), f && (n.size = f), d && (n.weights = d);
            const p = await this.send("doodle/create", n);
            return this.entities[t] = new b3({
                key: t,
                colors: a,
                lines: [],
                live: l,
                locked: !1,
                maxPoints: n.maxPoints || 0,
                size: f,
                weights: d,
                meta: {
                    locked: !1
                }
            }), p
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
                weight: a,
                points: l
            } = r, c = await this.send("doodle/stroke", {
                key: t,
                layer: n,
                color: s,
                weight: a,
                points: l
            }), f = {
                layer: n,
                color: s,
                weight: a,
                points: l
            };
            return this.entities[t].lines.push(f), c
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
            return this.entities[t] = new T3({
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
            return this.entities[t] = new p3({
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
            return this.entities[t] = new g3({
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
            return this.entities[t] = new m3({
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
                    accept: a,
                    reject: l
                } = r;
            s && (n.limit = s), a && (n.accept = a), l && (n.reject = l);
            const c = await this.send("audience/text-ring/create", n);
            return this.entities[t] = new _3({
                key: t,
                elements: [],
                limit: s,
                meta: {
                    locked: !1
                }
            }), c
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
    var O3 = {
        WSClient: S3
    };
    const {
        APIClient: w3
    } = VG, {
        WSClient: C3
    } = O3, {
        CreateRoomReply: I3,
        GetRoomReply: $3
    } = Pc, {
        ClientWelcome: R3,
        ClientDisconnected: L3
    } = ap, {
        ArtifactEntity: N3
    } = MA, {
        GCounter: P3
    } = lp, {
        NumberEntity: k3
    } = GA, {
        TextEntity: x3
    } = fp, {
        DoodleEntity: D3
    } = hp, {
        ObjectEntity: M3
    } = cp, {
        CountGroup: U3
    } = op, {
        DropEntity: F3
    } = FA, {
        OK: B3
    } = BA, {
        RoomExit: G3
    } = Pc, {
        TextRing: j3
    } = dp, {
        PNCounter: W3
    } = up;
    var Sr = {
        APIClient: w3,
        WSClient: C3,
        ClientWelcome: R3,
        CreateRoomReply: I3,
        DropEntity: F3,
        GetRoomReply: $3,
        ClientDisconnected: L3,
        RoomExit: G3,
        OK: B3,
        ArtifactEntity: N3,
        DoodleEntity: D3,
        NumberEntity: k3,
        CountGroup: U3,
        GCounter: P3,
        ObjectEntity: M3,
        PNCounter: W3,
        TextEntity: x3,
        TextRing: j3
    };
    const V3 = [{
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
        Md = e => V3.find(t => t.tag === e || t.categoryId === e);

    function Ud(...e) {
        console.log(...e)
    }
    class K3 {
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
            Ud("[Debug] pushEntity", t), t instanceof Sr.ArtifactEntity ? this.items.push({
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
                    a = s[s.length - 1].replace(".json", ""),
                    l = s[s.length - 2];
                return {
                    json: n.body.url,
                    dev: `https://dev.jackbox.tv/debug/cloud/${l}/${a}/`,
                    local: `http://localhost:9090/debug/cloud/${l}/${a}/`
                }
            } catch (r) {
                return console.error("[Debug] sendToEcast", r), null
            }
        }
        async sendToSlack(t, r) {
            var f;
            if (!this.room || !this.client) return;
            const n = Md(this.room.appTag),
                s = this.items.length - this.markerCount,
                a = `${this.markerCount} ${this.markerCount===1?"marker":"markers"}`,
                l = `${s} ${s===1?"entity":"entities"}`,
                c = [{
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
                const d = "https://hooks.slack.com/services/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",
                    y = `*${(f=n==null?void 0:n.name)!=null?f:this.room.appTag} :${this.room.appTag}:* (${a}, ${l}) 

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
                        elements: c
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
                    w = {
                        unfurl_links: !1,
                        blocks: b
                    };
                if (this.room) {
                    w.icon_emoji = this.room.appTag;
                    const G = Md(this.room.appTag);
                    w.username = `DebugRecorder ${G?G.name:this.room.appTag}`
                }
                const M = await (await fetch(d, {
                    method: "POST",
                    body: JSON.stringify(w)
                })).text();
                Ud("[Debug] sendToSlack", M)
            } catch (d) {
                console.error("[Debug] sendToSlack", d)
            }
        }
        download(t) {
            var l, c;
            const r = t != null ? t : `${(c=(l=this.room)==null?void 0:l.appTag)!=null?c:"unknown"}-debug`,
                n = this.getSendData().state,
                s = JSON.stringify(n, null, 4),
                a = document.createElement("a");
            a.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(s)}`), a.setAttribute("download", `${r}.json`), a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a)
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

    function H3(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Qy = {
        exports: {}
    };
    (function(e, t) {
        (function(r, n) {
            n(t)
        })(kt, function(r) {
            var n = typeof window < "u" ? window : typeof kt < "u" ? kt : typeof self < "u" ? self : {},
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
                a = Object.prototype.hasOwnProperty,
                l;

            function c(O) {
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

            function d(O) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, L = {}, A; A = T.exec(O);) {
                    var N = c(A[1]),
                        Z = c(A[2]);
                    N === null || Z === null || N in L || (L[N] = Z)
                }
                return L
            }

            function p(O, T) {
                T = T || "";
                var L = [],
                    A, N;
                typeof T != "string" && (T = "?");
                for (N in O)
                    if (a.call(O, N)) {
                        if (A = O[N], !A && (A === null || A === l || isNaN(A)) && (A = ""), N = f(N), A = f(A), N === null || A === null) continue;
                        L.push(N + "=" + A)
                    } return L.length ? T + L.join("&") : ""
            }
            var y = p,
                b = d,
                w = {
                    stringify: y,
                    parse: b
                },
                P = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                M = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                G = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                C = new RegExp("^" + G + "+");

            function H(O) {
                return (O || "").toString().replace(C, "")
            }
            var z = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(T, L) {
                        return Q(L.protocol) ? T.replace(/\\/g, "/") : T
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                V = {
                    hash: 1,
                    query: 1
                };

            function j(O) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var L = T.location || {};
                O = O || L;
                var A = {},
                    N = typeof O,
                    Z;
                if (O.protocol === "blob:") A = new ue(unescape(O.pathname), {});
                else if (N === "string") {
                    A = new ue(O, {});
                    for (Z in V) delete A[Z]
                } else if (N === "object") {
                    for (Z in O) Z in V || (A[Z] = O[Z]);
                    A.slashes === void 0 && (A.slashes = P.test(O.href))
                }
                return A
            }

            function Q(O) {
                return O === "file:" || O === "ftp:" || O === "http:" || O === "https:" || O === "ws:" || O === "wss:"
            }

            function oe(O, T) {
                O = H(O), T = T || {};
                var L = M.exec(O),
                    A = L[1] ? L[1].toLowerCase() : "",
                    N = !!L[2],
                    Z = !!L[3],
                    ne = 0,
                    Ee;
                return N ? Z ? (Ee = L[2] + L[3] + L[4], ne = L[2].length + L[3].length) : (Ee = L[2] + L[4], ne = L[2].length) : Z ? (Ee = L[3] + L[4], ne = L[3].length) : Ee = L[4], A === "file:" ? ne >= 2 && (Ee = Ee.slice(2)) : Q(A) ? Ee = L[4] : A ? N && (Ee = Ee.slice(2)) : ne >= 2 && Q(T.protocol) && (Ee = L[4]), {
                    protocol: A,
                    slashes: N || Q(A),
                    slashesCount: ne,
                    rest: Ee
                }
            }

            function le(O, T) {
                if (O === "") return T;
                for (var L = (T || "/").split("/").slice(0, -1).concat(O.split("/")), A = L.length, N = L[A - 1], Z = !1, ne = 0; A--;) L[A] === "." ? L.splice(A, 1) : L[A] === ".." ? (L.splice(A, 1), ne++) : ne && (A === 0 && (Z = !0), L.splice(A, 1), ne--);
                return Z && L.unshift(""), (N === "." || N === "..") && L.push(""), L.join("/")
            }

            function ue(O, T, L) {
                if (O = H(O), !(this instanceof ue)) return new ue(O, T, L);
                var A, N, Z, ne, Ee, Ae, dt = z.slice(),
                    nr = typeof T,
                    De = this,
                    ha = 0;
                for (nr !== "object" && nr !== "string" && (L = T, T = null), L && typeof L != "function" && (L = w.parse), T = j(T), N = oe(O || "", T), A = !N.protocol && !N.slashes, De.slashes = N.slashes || A && T.slashes, De.protocol = N.protocol || T.protocol || "", O = N.rest, (De.protocol === "file:" || !N.slashes && (N.protocol || N.slashesCount < 2 || !Q(De.protocol))) && (dt[3] = [/(.*)/, "pathname"]); ha < dt.length; ha++) {
                    if (ne = dt[ha], typeof ne == "function") {
                        O = ne(O, De);
                        continue
                    }
                    Z = ne[0], Ae = ne[1], Z !== Z ? De[Ae] = O : typeof Z == "string" ? ~(Ee = O.indexOf(Z)) && (typeof ne[2] == "number" ? (De[Ae] = O.slice(0, Ee), O = O.slice(Ee + ne[2])) : (De[Ae] = O.slice(Ee), O = O.slice(0, Ee))) : (Ee = Z.exec(O)) && (De[Ae] = Ee[1], O = O.slice(0, Ee.index)), De[Ae] = De[Ae] || A && ne[3] && T[Ae] || "", ne[4] && (De[Ae] = De[Ae].toLowerCase())
                }
                L && (De.query = L(De.query)), A && T.slashes && De.pathname.charAt(0) !== "/" && (De.pathname !== "" || T.pathname !== "") && (De.pathname = le(De.pathname, T.pathname)), De.pathname.charAt(0) !== "/" && Q(De.protocol) && (De.pathname = "/" + De.pathname), s(De.port, De.protocol) || (De.host = De.hostname, De.port = ""), De.username = De.password = "", De.auth && (ne = De.auth.split(":"), De.username = ne[0] || "", De.password = ne[1] || ""), De.origin = De.protocol !== "file:" && Q(De.protocol) && De.host ? De.protocol + "//" + De.host : "null", De.href = De.toString()
            }

            function $e(O, T, L) {
                var A = this;
                switch (O) {
                    case "query":
                        typeof T == "string" && T.length && (T = (L || w.parse)(T)), A[O] = T;
                        break;
                    case "port":
                        A[O] = T, s(T, A.protocol) ? T && (A.host = A.hostname + ":" + T) : (A.host = A.hostname, A[O] = "");
                        break;
                    case "hostname":
                        A[O] = T, A.port && (T += ":" + A.port), A.host = T;
                        break;
                    case "host":
                        A[O] = T, /:\d+$/.test(T) ? (T = T.split(":"), A.port = T.pop(), A.hostname = T.join(":")) : (A.hostname = T, A.port = "");
                        break;
                    case "protocol":
                        A.protocol = T.toLowerCase(), A.slashes = !L;
                        break;
                    case "pathname":
                    case "hash":
                        if (T) {
                            var N = O === "pathname" ? "/" : "#";
                            A[O] = T.charAt(0) !== N ? N + T : T
                        } else A[O] = T;
                        break;
                    default:
                        A[O] = T
                }
                for (var Z = 0; Z < z.length; Z++) {
                    var ne = z[Z];
                    ne[4] && (A[ne[1]] = A[ne[1]].toLowerCase())
                }
                return A.origin = A.protocol !== "file:" && Q(A.protocol) && A.host ? A.protocol + "//" + A.host : "null", A.href = A.toString(), A
            }

            function Ie(O) {
                (!O || typeof O != "function") && (O = w.stringify);
                var T, L = this,
                    A = L.protocol;
                A && A.charAt(A.length - 1) !== ":" && (A += ":");
                var N = A + (L.slashes || Q(L.protocol) ? "//" : "");
                return L.username && (N += L.username, L.password && (N += ":" + L.password), N += "@"), N += L.host + L.pathname, T = typeof L.query == "object" ? O(L.query) : L.query, T && (N += T.charAt(0) !== "?" ? "?" + T : T), L.hash && (N += L.hash), N
            }
            ue.prototype = {
                set: $e,
                toString: Ie
            }, ue.extractProtocol = oe, ue.location = j, ue.trimLeft = H, ue.qs = w;
            var fe = ue;

            function Ce(O, T) {
                setTimeout(function(L) {
                    return O.call(L)
                }, 4, T)
            }

            function U(O, T) {
                typeof process < "u" && console[O].call(null, T)
            }

            function ie(O, T) {
                O === void 0 && (O = []);
                var L = [];
                return O.forEach(function(A) {
                    T(A) || L.push(A)
                }), L
            }

            function de(O, T) {
                O === void 0 && (O = []);
                var L = [];
                return O.forEach(function(A) {
                    T(A) && L.push(A)
                }), L
            }
            var be = function() {
                this.listeners = {}
            };
            be.prototype.addEventListener = function(T, L) {
                typeof L == "function" && (Array.isArray(this.listeners[T]) || (this.listeners[T] = []), de(this.listeners[T], function(A) {
                    return A === L
                }).length === 0 && this.listeners[T].push(L))
            }, be.prototype.removeEventListener = function(T, L) {
                var A = this.listeners[T];
                this.listeners[T] = ie(A, function(N) {
                    return N === L
                })
            }, be.prototype.dispatchEvent = function(T) {
                for (var L = this, A = [], N = arguments.length - 1; N-- > 0;) A[N] = arguments[N + 1];
                var Z = T.type,
                    ne = this.listeners[Z];
                return Array.isArray(ne) ? (ne.forEach(function(Ee) {
                    A.length > 0 ? Ee.apply(L, A) : Ee.call(L, T)
                }), !0) : !1
            };

            function ye(O) {
                var T = O.indexOf("?");
                return T >= 0 ? O.slice(0, T) : O
            }
            var Oe = function() {
                this.urlMap = {}
            };
            Oe.prototype.attachWebSocket = function(T, L) {
                var A = ye(L),
                    N = this.urlMap[A];
                if (N && N.server && N.websockets.indexOf(T) === -1) return N.websockets.push(T), N.server
            }, Oe.prototype.addMembershipToRoom = function(T, L) {
                var A = this.urlMap[ye(T.url)];
                A && A.server && A.websockets.indexOf(T) !== -1 && (A.roomMemberships[L] || (A.roomMemberships[L] = []), A.roomMemberships[L].push(T))
            }, Oe.prototype.attachServer = function(T, L) {
                var A = ye(L),
                    N = this.urlMap[A];
                if (!N) return this.urlMap[A] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Oe.prototype.serverLookup = function(T) {
                var L = ye(T),
                    A = this.urlMap[L];
                if (A) return A.server
            }, Oe.prototype.websocketsLookup = function(T, L, A) {
                var N = ye(T),
                    Z, ne = this.urlMap[N];
                if (Z = ne ? ne.websockets : [], L) {
                    var Ee = ne.roomMemberships[L];
                    Z = Ee || []
                }
                return A ? Z.filter(function(Ae) {
                    return Ae !== A
                }) : Z
            }, Oe.prototype.removeServer = function(T) {
                delete this.urlMap[ye(T)]
            }, Oe.prototype.removeWebSocket = function(T, L) {
                var A = ye(L),
                    N = this.urlMap[A];
                N && (N.websockets = ie(N.websockets, function(Z) {
                    return Z === T
                }))
            }, Oe.prototype.removeMembershipFromRoom = function(T, L) {
                var A = this.urlMap[ye(T.url)],
                    N = A.roomMemberships[L];
                A && N !== null && (A.roomMemberships[L] = ie(N, function(Z) {
                    return Z === T
                }))
            };
            var Ue = new Oe,
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
                nt = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                It = function() {};
            It.prototype.stopPropagation = function() {}, It.prototype.stopImmediatePropagation = function() {}, It.prototype.initEvent = function(T, L, A) {
                T === void 0 && (T = "undefined"), L === void 0 && (L = !1), A === void 0 && (A = !1), this.type = "" + T, this.bubbles = Boolean(L), this.cancelable = Boolean(A)
            };
            var wr = function(O) {
                    function T(L, A) {
                        if (A === void 0 && (A = {}), O.call(this), !L) throw new TypeError(nt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(nt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var N = A.bubbles,
                            Z = A.cancelable;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = N ? Boolean(N) : !1
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(It),
                rr = function(O) {
                    function T(L, A) {
                        if (A === void 0 && (A = {}), O.call(this), !L) throw new TypeError(nt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(nt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var N = A.bubbles,
                            Z = A.cancelable,
                            ne = A.data,
                            Ee = A.origin,
                            Ae = A.lastEventId,
                            dt = A.ports;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.canncelBubble = !1, this.bubbles = N ? Boolean(N) : !1, this.origin = "" + Ee, this.ports = typeof dt > "u" ? null : dt, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Ae || "")
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(It),
                vr = function(O) {
                    function T(L, A) {
                        if (A === void 0 && (A = {}), O.call(this), !L) throw new TypeError(nt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(nt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var N = A.bubbles,
                            Z = A.cancelable,
                            ne = A.code,
                            Ee = A.reason,
                            Ae = A.wasClean;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = N ? Boolean(N) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (Ee || ""), this.wasClean = Ae ? Boolean(Ae) : !1
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T
                }(It);

            function lt(O) {
                var T = O.type,
                    L = O.target,
                    A = new wr(T);
                return L && (A.target = L, A.srcElement = L, A.currentTarget = L), A
            }

            function St(O) {
                var T = O.type,
                    L = O.origin,
                    A = O.data,
                    N = O.target,
                    Z = new rr(T, {
                        data: A,
                        origin: L
                    });
                return N && (Z.target = N, Z.srcElement = N, Z.currentTarget = N), Z
            }

            function ct(O) {
                var T = O.code,
                    L = O.reason,
                    A = O.type,
                    N = O.target,
                    Z = O.wasClean;
                Z || (Z = T === je.CLOSE_NORMAL || T === je.CLOSE_NO_STATUS);
                var ne = new vr(A, {
                    code: T,
                    reason: L,
                    wasClean: Z
                });
                return N && (ne.target = N, ne.srcElement = N, ne.currentTarget = N), ne
            }

            function xt(O, T, L) {
                O.readyState = Y.CLOSING;
                var A = Ue.serverLookup(O.url),
                    N = ct({
                        type: "close",
                        target: O.target,
                        code: T,
                        reason: L
                    }),
                    Z = ct({
                        type: "server::close",
                        target: O,
                        code: T,
                        reason: L
                    });
                Ce(function() {
                    Ue.removeWebSocket(O, O.url), O.readyState = Y.CLOSED, O.dispatchEvent(N), O.dispatchEvent(Z), A && A.dispatchEvent(N, A)
                }, O)
            }

            function Kt(O, T, L) {
                O.readyState = Y.CLOSING;
                var A = Ue.serverLookup(O.url),
                    N = ct({
                        type: "close",
                        target: O.target,
                        code: T,
                        reason: L,
                        wasClean: !1
                    }),
                    Z = ct({
                        type: "server::close",
                        target: O,
                        code: T,
                        reason: L,
                        wasClean: !1
                    }),
                    ne = lt({
                        type: "error",
                        target: O.target
                    });
                Ce(function() {
                    Ue.removeWebSocket(O, O.url), O.readyState = Y.CLOSED, O.dispatchEvent(ne), O.dispatchEvent(N), O.dispatchEvent(Z), A && A.dispatchEvent(N, A)
                }, O)
            }

            function Dt(O) {
                return Object.prototype.toString.call(O) !== "[object Blob]" && !(O instanceof ArrayBuffer) && (O = String(O)), O
            }
            var m = new WeakMap;

            function g(O) {
                if (m.has(O)) return m.get(O);
                var T = new Proxy(O, {
                    get: function(A, N) {
                        return N === "close" ? function(ne) {
                            ne === void 0 && (ne = {});
                            var Ee = ne.code || je.CLOSE_NORMAL,
                                Ae = ne.reason || "";
                            xt(T, Ee, Ae)
                        } : N === "send" ? function(ne) {
                            ne = Dt(ne), O.dispatchEvent(St({
                                type: "message",
                                data: ne,
                                origin: this.url,
                                target: O
                            }))
                        } : N === "on" ? function(ne, Ee) {
                            O.addEventListener("server::" + ne, Ee)
                        } : N === "target" ? O : A[N]
                    }
                });
                return m.set(O, T), T
            }

            function S(O) {
                var T = encodeURIComponent(O).match(/%[89ABab]/g);
                return O.length + (T ? T.length : 0)
            }

            function D(O) {
                var T = new fe(O),
                    L = T.pathname,
                    A = T.protocol,
                    N = T.hash;
                if (!O) throw new TypeError(nt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (L || (T.pathname = "/"), A === "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (A !== "ws:" && A !== "wss:") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + A + "' is not allowed.");
                if (N !== "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + N + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(O) {
                if (O === void 0 && (O = []), !Array.isArray(O) && typeof O != "string") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The subprotocol '" + O.toString() + "' is invalid.");
                typeof O == "string" && (O = [O]);
                var T = O.map(function(A) {
                        return {
                            count: 1,
                            protocol: A
                        }
                    }).reduce(function(A, N) {
                        return A[N.protocol] = (A[N.protocol] || 0) + N.count, A
                    }, {}),
                    L = Object.keys(T).filter(function(A) {
                        return T[A] > 1
                    });
                if (L.length > 0) throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The subprotocol '" + L[0] + "' is duplicated.");
                return O
            }
            var Y = function(O) {
                function T(A, N) {
                    O.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = D(A), N = B(N), this.protocol = N[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
                    var Z = g(this),
                        ne = Ue.attachWebSocket(Z, this.url);
                    Ce(function() {
                        if (ne)
                            if (ne.options.verifyClient && typeof ne.options.verifyClient == "function" && !ne.options.verifyClient()) this.readyState = T.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Ue.removeWebSocket(Z, this.url), this.dispatchEvent(lt({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(ct({
                                type: "close",
                                target: this,
                                code: je.CLOSE_NORMAL
                            }));
                            else {
                                if (ne.options.selectProtocol && typeof ne.options.selectProtocol == "function") {
                                    var Ae = ne.options.selectProtocol(N),
                                        dt = Ae !== "",
                                        nr = N.indexOf(Ae) !== -1;
                                    if (dt && !nr) {
                                        this.readyState = T.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Ue.removeWebSocket(Z, this.url), this.dispatchEvent(lt({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(ct({
                                            type: "close",
                                            target: this,
                                            code: je.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = Ae
                                }
                                this.readyState = T.OPEN, this.dispatchEvent(lt({
                                    type: "open",
                                    target: this
                                })), ne.dispatchEvent(lt({
                                    type: "connection"
                                }), Z)
                            }
                        else this.readyState = T.CLOSED, this.dispatchEvent(lt({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ct({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), U("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T;
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
                }, L.onopen.set = function(A) {
                    this.removeEventListener("open", this._onopen), this._onopen = A, this.addEventListener("open", A)
                }, L.onmessage.set = function(A) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = A, this.addEventListener("message", A)
                }, L.onclose.set = function(A) {
                    this.removeEventListener("close", this._onclose), this._onclose = A, this.addEventListener("close", A)
                }, L.onerror.set = function(A) {
                    this.removeEventListener("error", this._onerror), this._onerror = A, this.addEventListener("error", A)
                }, T.prototype.send = function(N) {
                    var Z = this;
                    if (this.readyState === T.CLOSING || this.readyState === T.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var ne = St({
                            type: "server::message",
                            origin: this.url,
                            data: Dt(N)
                        }),
                        Ee = Ue.serverLookup(this.url);
                    Ee && Ce(function() {
                        Z.dispatchEvent(ne, N)
                    }, Ee)
                }, T.prototype.close = function(N, Z) {
                    if (N !== void 0 && (typeof N != "number" || N !== 1e3 && (N < 3e3 || N > 4999))) throw new TypeError(nt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + N + " is neither.");
                    if (Z !== void 0) {
                        var ne = S(Z);
                        if (ne > 123) throw new SyntaxError(nt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var Ee = g(this);
                        this.readyState === T.CONNECTING ? Kt(Ee, N || je.CLOSE_ABNORMAL, Z) : xt(Ee, N || je.CLOSE_NO_STATUS, Z)
                    }
                }, Object.defineProperties(T.prototype, L), T
            }(be);
            Y.CONNECTING = 0, Y.prototype.CONNECTING = Y.CONNECTING, Y.OPEN = 1, Y.prototype.OPEN = Y.OPEN, Y.CLOSING = 2, Y.prototype.CLOSING = Y.CLOSING, Y.CLOSED = 3, Y.prototype.CLOSED = Y.CLOSED;
            var ce = function(O) {
                return O.reduce(function(T, L) {
                    return T.indexOf(L) > -1 ? T : T.concat(L)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof H3 == "function" && typeof kt == "object" ? kt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                $ = function(O) {
                    function T(L, A) {
                        A === void 0 && (A = re), O.call(this);
                        var N = new fe(L);
                        N.pathname || (N.pathname = "/"), this.url = N.toString(), this.originalWebSocket = null;
                        var Z = Ue.attachServer(this, this.url);
                        if (!Z) throw this.dispatchEvent(lt({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, A), this.options.mock && this.mockWebsocket()
                    }
                    return O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
                        var A = se();
                        this.originalWebSocket = A.WebSocket, A.WebSocket = Y
                    }, T.prototype.restoreWebsocket = function() {
                        var A = se();
                        this.originalWebSocket !== null && (A.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, T.prototype.stop = function(A) {
                        A === void 0 && (A = function() {}), this.options.mock && this.restoreWebsocket(), Ue.removeServer(this.url), typeof A == "function" && A()
                    }, T.prototype.on = function(A, N) {
                        this.addEventListener(A, N)
                    }, T.prototype.close = function(A) {
                        A === void 0 && (A = {});
                        var N = A.code,
                            Z = A.reason,
                            ne = A.wasClean,
                            Ee = Ue.websocketsLookup(this.url);
                        Ue.removeServer(this.url), Ee.forEach(function(Ae) {
                            Ae.readyState = Y.CLOSED, Ae.dispatchEvent(ct({
                                type: "close",
                                target: Ae.target,
                                code: N || je.CLOSE_NORMAL,
                                reason: Z || "",
                                wasClean: ne
                            }))
                        }), this.dispatchEvent(ct({
                            type: "close"
                        }), this)
                    }, T.prototype.emit = function(A, N, Z) {
                        var ne = this;
                        Z === void 0 && (Z = {});
                        var Ee = Z.websockets;
                        Ee || (Ee = Ue.websocketsLookup(this.url)), typeof Z != "object" || arguments.length > 3 ? (N = Array.prototype.slice.call(arguments, 1, arguments.length), N = N.map(function(Ae) {
                            return Dt(Ae)
                        })) : N = Dt(N), Ee.forEach(function(Ae) {
                            Array.isArray(N) ? Ae.dispatchEvent.apply(Ae, [St({
                                type: A,
                                data: N,
                                origin: ne.url,
                                target: Ae.target
                            })].concat(N)) : Ae.dispatchEvent(St({
                                type: A,
                                data: N,
                                origin: ne.url,
                                target: Ae.target
                            }))
                        })
                    }, T.prototype.clients = function() {
                        return Ue.websocketsLookup(this.url)
                    }, T.prototype.to = function(A, N, Z) {
                        var ne = this;
                        Z === void 0 && (Z = []);
                        var Ee = this,
                            Ae = ce(Z.concat(Ue.websocketsLookup(this.url, A, N)));
                        return {
                            to: function(dt, nr) {
                                return ne.to.call(ne, dt, nr, Ae)
                            },
                            emit: function(nr, De) {
                                Ee.emit(nr, De, {
                                    websockets: Ae
                                })
                            }
                        }
                    }, T.prototype.in = function() {
                        for (var A = [], N = arguments.length; N--;) A[N] = arguments[N];
                        return this.to.apply(null, A)
                    }, T.prototype.simulate = function(A) {
                        var N = Ue.websocketsLookup(this.url);
                        A === "error" && N.forEach(function(Z) {
                            Z.readyState = Y.CLOSED, Z.dispatchEvent(lt({
                                type: "error"
                            }))
                        })
                    }, T
                }(be);
            $.of = function(T) {
                return new $(T)
            };
            var K = function(O) {
                function T(A, N) {
                    var Z = this;
                    A === void 0 && (A = "socket.io"), N === void 0 && (N = ""), O.call(this), this.binaryType = "blob";
                    var ne = new fe(A);
                    ne.pathname || (ne.pathname = "/"), this.url = ne.toString(), this.readyState = T.CONNECTING, this.protocol = "", this.target = this, typeof N == "string" || typeof N == "object" && N !== null ? this.protocol = N : Array.isArray(N) && N.length > 0 && (this.protocol = N[0]);
                    var Ee = Ue.attachWebSocket(this, this.url);
                    Ce(function() {
                        Ee ? (this.readyState = T.OPEN, Ee.dispatchEvent(lt({
                            type: "connection"
                        }), Ee, this), Ee.dispatchEvent(lt({
                            type: "connect"
                        }), Ee, this), this.dispatchEvent(lt({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = T.CLOSED, this.dispatchEvent(lt({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ct({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(Ae) {
                        Z.dispatchEvent(ct({
                            type: "disconnect",
                            target: Ae.target,
                            code: Ae.code
                        }))
                    })
                }
                O && (T.__proto__ = O), T.prototype = Object.create(O && O.prototype), T.prototype.constructor = T;
                var L = {
                    broadcast: {}
                };
                return T.prototype.close = function() {
                    if (this.readyState === T.OPEN) {
                        var N = Ue.serverLookup(this.url);
                        return Ue.removeWebSocket(this, this.url), this.readyState = T.CLOSED, this.dispatchEvent(ct({
                            type: "close",
                            target: this,
                            code: je.CLOSE_NORMAL
                        })), N && N.dispatchEvent(ct({
                            type: "disconnect",
                            target: this,
                            code: je.CLOSE_NORMAL
                        }), N), this
                    }
                }, T.prototype.disconnect = function() {
                    return this.close()
                }, T.prototype.emit = function(N) {
                    for (var Z = [], ne = arguments.length - 1; ne-- > 0;) Z[ne] = arguments[ne + 1];
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var Ee = St({
                            type: N,
                            origin: this.url,
                            data: Z
                        }),
                        Ae = Ue.serverLookup(this.url);
                    return Ae && Ae.dispatchEvent.apply(Ae, [Ee].concat(Z)), this
                }, T.prototype.send = function(N) {
                    return this.emit("message", N), this
                }, L.broadcast.get = function() {
                    if (this.readyState !== T.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var A = this,
                        N = Ue.serverLookup(this.url);
                    if (!N) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(ne, Ee) {
                            return N.emit(ne, Ee, {
                                websockets: Ue.websocketsLookup(A.url, null, A)
                            }), A
                        },
                        to: function(ne) {
                            return N.to(ne, A)
                        },
                        in: function(ne) {
                            return N.in(ne, A)
                        }
                    }
                }, T.prototype.on = function(N, Z) {
                    return this.addEventListener(N, Z), this
                }, T.prototype.off = function(N, Z) {
                    this.removeEventListener(N, Z)
                }, T.prototype.hasListeners = function(N) {
                    var Z = this.listeners[N];
                    return Array.isArray(Z) ? !!Z.length : !1
                }, T.prototype.join = function(N) {
                    Ue.addMembershipToRoom(this, N)
                }, T.prototype.leave = function(N) {
                    Ue.removeMembershipFromRoom(this, N)
                }, T.prototype.to = function(N) {
                    return this.broadcast.to(N)
                }, T.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, T.prototype.dispatchEvent = function(N) {
                    for (var Z = this, ne = [], Ee = arguments.length - 1; Ee-- > 0;) ne[Ee] = arguments[Ee + 1];
                    var Ae = N.type,
                        dt = this.listeners[Ae];
                    if (!Array.isArray(dt)) return !1;
                    dt.forEach(function(nr) {
                        ne.length > 0 ? nr.apply(Z, ne) : nr.call(Z, N.data ? N.data : N)
                    })
                }, Object.defineProperties(T.prototype, L), T
            }(be);
            K.CONNECTING = 0, K.OPEN = 1, K.CLOSING = 2, K.CLOSED = 3;
            var he = function(T, L) {
                return new K(T, L)
            };
            he.connect = function(T, L) {
                return he(T, L)
            };
            var pe = $,
                Re = Y,
                xe = he;
            r.Server = pe, r.WebSocket = Re, r.SocketIO = xe, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Qy, Qy.exports);
    var jA = {
        exports: {}
    };
    (function(e) {
        (function() {
            function t(c, f) {
                var d = c.x - f.x,
                    p = c.y - f.y;
                return d * d + p * p
            }

            function r(c, f, d) {
                var p = f.x,
                    y = f.y,
                    b = d.x - p,
                    w = d.y - y;
                if (b !== 0 || w !== 0) {
                    var P = ((c.x - p) * b + (c.y - y) * w) / (b * b + w * w);
                    P > 1 ? (p = d.x, y = d.y) : P > 0 && (p += b * P, y += w * P)
                }
                return b = c.x - p, w = c.y - y, b * b + w * w
            }

            function n(c, f) {
                for (var d = c[0], p = [d], y, b = 1, w = c.length; b < w; b++) y = c[b], t(y, d) > f && (p.push(y), d = y);
                return d !== y && p.push(y), p
            }

            function s(c, f, d, p, y) {
                for (var b = p, w, P = f + 1; P < d; P++) {
                    var M = r(c[P], c[f], c[d]);
                    M > b && (w = P, b = M)
                }
                b > p && (w - f > 1 && s(c, f, w, p, y), y.push(c[w]), d - w > 1 && s(c, w, d, p, y))
            }

            function a(c, f) {
                var d = c.length - 1,
                    p = [c[0]];
                return s(c, 0, d, f, p), p.push(c[d]), p
            }

            function l(c, f, d) {
                if (c.length <= 2) return c;
                var p = f !== void 0 ? f * f : 1;
                return c = d ? c : n(c, p), c = a(c, p), c
            }
            e.exports = l, e.exports.default = l
        })()
    })(jA);
    const WA = jA.exports;
    class q3 {
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
            var s, a, l, c, f;
            n != null && n.color && (this.color = n.color), n != null && n.layer && (this.layer = n.layer), n != null && n.layers && (this.layers = n.layers), n != null && n.maxPoints && (this.maxPoints = n.maxPoints), n != null && n.precision && (this.precision = n.precision), n != null && n.scale && (this.scale = n.scale), n != null && n.weight && (this.weight = n.weight), n != null && n.weightScale && (this.weightScale = n.weightScale), t.width = ((a = (s = r.size) == null ? void 0 : s.width) != null ? a : this.DEFAULT_WIDTH) * this.scale.width, t.height = ((c = (l = r.size) == null ? void 0 : l.height) != null ? c : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), (f = this.ctx) == null || f.scale(this.scale.width, this.scale.height), this.doodle = r, this.drawLines()
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
                x: mr.toPrecision(n.x, this.precision),
                y: mr.toPrecision(n.y, this.precision)
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
                a = Math.sqrt(s.x ** 2 + s.y ** 2);
            if (a > n) {
                const l = (a - n) / a,
                    c = {
                        x: s.x * l,
                        y: s.y * l
                    },
                    f = {
                        x: r.x + c.x,
                        y: r.y + c.y
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
                points: WA(this.points, .5).map(r => ({
                    x: mr.toPrecision(r.x, this.precision),
                    y: mr.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class Y3 {
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
                a = Math.sqrt(s.x ** 2 + s.y ** 2);
            if (a > n) {
                const l = (a - n) / a,
                    c = {
                        x: s.x * l,
                        y: s.y * l
                    },
                    f = {
                        x: r.x + c.x,
                        y: r.y + c.y
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
                n = WA(this.currentLine.points);
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
                let a = [];
                return typeof s.points == "string" ? a = s.points.split("|").map(l => {
                    const [c, f] = l.split(",");
                    return {
                        x: parseInt(c, 10),
                        y: parseInt(f, 10)
                    }
                }) : a = s.points, s.color && s.color !== r && (r = s.color), s.thickness && s.thickness !== n && (n = s.thickness), {
                    color: r,
                    thickness: n,
                    points: a
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
                const a = r.element.getContext("2d");
                a.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines2 : this.lines).forEach(c => this.drawLine(a, c)), r.dirty = !1
            }
            t.save(), t.globalAlpha = .1, t.drawImage(r.element, 0, 0), t.restore();
            const n = this.getCanvasObject("active");
            if (n.dirty) {
                const a = n.element.getContext("2d");
                a.clearRect(0, 0, this.width, this.height), (this.currentFrame === 0 ? this.lines : this.lines2).forEach(c => this.drawLine(a, c)), n.dirty = !1
            }
            t.drawImage(n.element, 0, 0);
            const s = this.getCanvasObject("line");
            if (s.dirty) {
                const a = s.element.getContext("2d");
                a.clearRect(0, 0, this.width, this.height), this.drawLine(a, this.currentLine), s.dirty = !1
            }
            t.drawImage(s.element, 0, 0)
        }
        drawLine(t, r) {
            t.strokeStyle = r.color, t.lineWidth = r.thickness, t.lineCap = "round", t.lineJoin = "round", t.fillStyle = r.color, t.strokeStyle = r.color, t.beginPath(), r.points.forEach((n, s) => {
                s === 0 && (t.save(), t.arc(n.x, n.y, r.thickness / 2, 0, 2 * Math.PI), t.fill(), t.restore(), t.beginPath(), t.moveTo(n.x, n.y)), t.lineTo(n.x, n.y)
            }), t.stroke()
        }
    }
    class z3 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new Y3(t, this.width, this.height, r)
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
                a = parseFloat(s[0]),
                l = parseFloat(s[3]),
                c = (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "border-right-width")) * a,
                f = (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "border-bottom-width")) * l,
                d = (this.getPropValue(r, "padding-left") + this.getPropValue(r, "padding-right")) * a,
                p = (this.getPropValue(r, "padding-top") + this.getPropValue(r, "padding-bottom")) * l;
            return {
                scaleX: (n.width - c - d) / t.width,
                scaleY: (n.height - f - p) / t.height,
                offsetX: n.left + (this.getPropValue(r, "border-left-width") + this.getPropValue(r, "padding-left")) * a,
                offsetY: n.top + (this.getPropValue(r, "border-top-width") + this.getPropValue(r, "padding-top")) * l
            }
        }
        getEventPoint(t) {
            const {
                scaleX: r,
                scaleY: n,
                offsetX: s,
                offsetY: a
            } = this.getCanvasOffset(), l = t.clientX, c = t.clientY;
            let f = (l - s) / r,
                d = (c - a) / n;
            return f = Math.max(0, Math.min(this.width, f)), d = Math.max(0, Math.min(this.height, d)), f = Math.round(f), d = Math.round(d), {
                x: f,
                y: d
            }
        }
    }
    const X3 = [169, 174, 8252, 8265, 8482, 8505, 8596, 8597, 8598, 8599, 8600, 8601, 8617, 8618, 9e3, 8986, 8987, 9167, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9209, 9210, 9410, 9642, 9643, 9654, 9664, 9723, 9724, 9725, 9726, 9728, 9729, 9730, 9731, 9732, 9742, 9745, 9748, 9749, 9752, 9757, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784, 9785, 9786, 9792, 9794, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9824, 9827, 9829, 9830, 9832, 9851, 9854, 9855, 9874, 9875, 9876, 9877, 9878, 9879, 9881, 9883, 9884, 9888, 9823, 9889, 9895, 9898, 9899, 9904, 9905, 9917, 9918, 9924, 9925, 9928, 9934, 9935, 9937, 9939, 9940, 9961, 9962, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9981, 9986, 9989, 9992, 9993, 9994, 9995, 9996, 9997, 9999, 10002, 10004, 10006, 10013, 10017, 10024, 10035, 10036, 10052, 10055, 10060, 10062, 10067, 10068, 10069, 10071, 10083, 10084, 10085, 10133, 10134, 10135, 10145, 10160, 10175, 10548, 10549, 11013, 11014, 11015, 11035, 11036, 11088, 11093, 12336, 12349, 12951, 12953, 58634],
        J3 = [128104, 128105, 129489],
        VA = [127995, 127996, 127997, 127998, 127999, 129456, 129457, 129458, 129459],
        Q3 = 9977,
        Z3 = 8419,
        eW = 8220,
        tW = 8221,
        kf = 65039,
        rW = 127987,
        nW = 127988,
        Dl = 8205,
        Fd = (e, t) => {
            const r = parseInt(e.charCodeAt(0).toString(16), 16),
                n = parseInt(t.charCodeAt(0).toString(16), 16),
                s = (r - 55296) * 1024 + n - 56320 + 65536;
            return parseInt(s.toString(16), 16)
        },
        iW = e => {
            const t = parseInt(e.charCodeAt(0).toString(16), 16);
            return X3.includes(t)
        },
        sn = (e, t) => e ? parseInt(e.charCodeAt(0).toString(16), 16) === t : !1,
        KA = e => /[\uD800-\uDB7F]/.test(e),
        sW = e => /[\u0023\u002A\u0030-\u0039]/.test(e),
        Zy = e => {
            const t = parseInt(e.toString(16), 16);
            return t >= 127462 && t <= 127487
        },
        e_ = (e, t) => {
            let r = "",
                n = !0;
            for (; n && t < e.length;) {
                const s = e[t];
                if (KA(s)) {
                    const a = Fd(s, e[t + 1]);
                    VA.includes(a) ? (r = r + s + e[t + 1], t += 2) : n = !1
                } else sn(s, Dl) ? (r = r + s + e[t + 1] + e[t + 2], t += 3) : n = !1
            }
            return {
                modifyingChars: r,
                newPosition: t
            }
        },
        aW = (e, t) => {
            if (!/[^\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(e)) return t && e && e.length > t && (e = e.substring(0, t)), {
                result: e,
                charCount: e.length
            };
            const n = e.split("");
            let s = 0,
                a = "";
            for (let l = 0; l < n.length && (t ? s < t : !0); l += 1) {
                const c = n[l];
                if (/[\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(c)) a += c, s += 1;
                else if (iW(c)) {
                    if (a += c, sn(c, Q3)) {
                        l += 1;
                        const {
                            modifyingChars: d,
                            newPosition: p
                        } = e_(n, l);
                        a += d, l = p - 1
                    }
                    s += 1;
                    continue
                } else if (sn(c, eW) || sn(c, tW)) {
                    l += 1, a = `${a}"`, s += 1;
                    continue
                } else if (KA(c)) {
                    const d = n[l + 1];
                    a = a + c + d, l += 1;
                    const p = Fd(c, d);
                    if (J3.includes(p)) {
                        const {
                            modifyingChars: y,
                            newPosition: b
                        } = e_(n, l + 1);
                        a += y, s += 1, l = b - 1;
                        continue
                    }
                    if (Zy(p)) {
                        const y = Fd(n[l + 1], n[l + 2]);
                        Zy(y) && (a = a + n[l + 1] + n[l + 2], l += 1), s += 1;
                        continue
                    }
                    if (p === nW) {
                        const y = n[l + 1];
                        sn(y, Dl) && (a = a + y + n[l + 2] + n[l + 3], l += 3), s += 1;
                        continue
                    }
                    if (p === rW) {
                        const y = n[l + 1];
                        sn(y, kf) && (l += 1, sn(n[l + 1], Dl) && (a = a + y + n[l + 1] + n[l + 2] + n[l + 3], l += 3)), s += 1;
                        continue
                    }
                    VA.includes(p) || (s += 1);
                    continue
                } else if (sW(c)) {
                    const d = n[l + 1];
                    d && sn(d, kf) ? (a = a + c + n[l + 1] + n[l + 2], l += 2) : a += c, s += 1;
                    continue
                } else(sn(c, kf) || sn(c, Dl) || sn(c, Z3)) && (a += c)
            }
            return {
                result: a,
                charCount: s
            }
        };
    class t_ {
        static getPromptGuess(t, r) {
            var n, s, a;
            if ((n = t.player) != null && n.prompt) return t.player.prompt;
            if ((s = t.audience) != null && s.prompt) return t.audience.prompt;
            if ((a = t.audiencePlayer) != null && a.prompt) return t.audiencePlayer.prompt;
            if (t.prompt) return t.prompt;
            if (r === "range-game") return this.getRangeGameGuess(t)
        }
        static getRangeGameGuess(t) {
            var r, n, s, a, l, c, f, d;
            if ((n = (r = t.player) == null ? void 0 : r.content) != null && n.text) return (a = (s = t.player) == null ? void 0 : s.content) == null ? void 0 : a.text;
            if ((c = (l = t.content) == null ? void 0 : l.content) != null && c.text) return (d = (f = t.content) == null ? void 0 : f.content) == null ? void 0 : d.text
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
            const n = Md(r.room.appTag),
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
                    BASE_URL: "https://bundles.jackbox.tv/main/tjsp-quiplash3/",
                    MODE: "production",
                    DEV: !1,
                    PROD: !0
                }.TV_SLACK_FEEDBACK;
            if (!s) return;
            const a = {
                    good: ":large_green_circle:",
                    meh: ":large_yellow_circle:",
                    bad: ":red_circle:"
                },
                c = `${(y=n==null?void 0:n.name)!=null?y:r.room.appTag} :${r.room.appTag}: 

 From: ${r.name},
${r.message}`,
                f = [];
            r.vibe && r.vibe !== "none" && f.push({
                type: "plain_text",
                text: `${a[r.vibe]} ${r.vibe.toUpperCase()} Vibes`,
                emoji: !0
            }), r.content && f.push({
                type: "plain_text",
                text: `Content: ${r.content}`,
                emoji: !0
            });
            const p = {
                blocks: [{
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: c
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
                const w = await (await fetch(s, {
                    method: "POST",
                    body: JSON.stringify(p)
                })).text();
                Ud("[Feedback] sendToSlack", w)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    const oW = {
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
        lW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        cW = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        uW = "LOADING",
        fW = {
            JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        dW = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        hW = {
            AND: "AND",
            OR: "OR"
        },
        pW = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        gW = {
            NAME: "AUDIENCE"
        },
        mW = {
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
        vW = {
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
        yW = {
            ACTION: oW,
            ALT: lW,
            ERROR: cW,
            LOADING: uW,
            LOBBY: fW,
            POST_GAME: dW,
            SEPARATOR: hW,
            TUTORIAL: pW,
            AUDIENCE: gW,
            UGC: mW,
            TOAST: vW
        },
        _W = {
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
        EW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        bW = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9.",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Soyez respectueux des autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez rien entrer\xA0!",
            TITLE: "Erreur"
        },
        TW = {
            JOINED_COUNT: "x | {count} joueur sur {maxPlayers} \xE0 rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "x | {count} joueur n\xE9cessaire pour commencer | {count} joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        AW = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        SW = {
            AND: "ET",
            OR: "OU"
        },
        OW = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        wW = {
            NAME: "SPECTATEURS"
        },
        CW = {
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
        IW = {
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
        $W = {
            ACTION: _W,
            ALT: EW,
            ERROR: bW,
            LOBBY: TW,
            POST_GAME: AW,
            SEPARATOR: SW,
            TUTORIAL: OW,
            AUDIENCE: wW,
            UGC: CW,
            TOAST: IW
        },
        RW = {
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
        LW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        NW = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        PW = {
            JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        kW = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        xW = {
            AND: "E",
            OR: "O"
        },
        DW = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        MW = {
            NAME: "PUBBLICO"
        },
        UW = {
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
        FW = {
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
        BW = {
            ACTION: RW,
            ALT: LW,
            ERROR: NW,
            LOBBY: PW,
            POST_GAME: kW,
            SEPARATOR: xW,
            TUTORIAL: DW,
            AUDIENCE: MW,
            UGC: UW,
            TOAST: FW
        },
        GW = {
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
        jW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        WW = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        VW = {
            JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "x | {count} Spieler zum Starten ben\xF6tigt | {count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        KW = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        HW = {
            AND: "UND",
            OR: "ODER"
        },
        qW = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        YW = {
            NAME: "PUBLIKUM"
        },
        zW = {
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
        XW = {
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
        JW = {
            ACTION: GW,
            ALT: jW,
            ERROR: WW,
            LOBBY: VW,
            POST_GAME: KW,
            SEPARATOR: HW,
            TUTORIAL: qW,
            AUDIENCE: YW,
            UGC: zW,
            TOAST: XW
        },
        QW = {
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
        ZW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        e8 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        t8 = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        r8 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        n8 = {
            AND: "Y",
            OR: "O"
        },
        i8 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        s8 = {
            NAME: "P\xDABLICO"
        },
        a8 = {
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
        o8 = {
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
        l8 = {
            ACTION: QW,
            ALT: ZW,
            ERROR: e8,
            LOBBY: t8,
            POST_GAME: r8,
            SEPARATOR: n8,
            TUTORIAL: i8,
            AUDIENCE: s8,
            UGC: a8,
            TOAST: o8
        },
        c8 = {
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
        u8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones se muestran en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones se muestran en la pantalla del juego"
            }
        },
        f8 = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        d8 = {
            JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        h8 = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        p8 = {
            AND: "Y",
            OR: "O"
        },
        g8 = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        m8 = {
            NAME: "P\xDABLICO"
        },
        v8 = {
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
        y8 = {
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
        _8 = {
            ACTION: c8,
            ALT: u8,
            ERROR: f8,
            LOBBY: d8,
            POST_GAME: h8,
            SEPARATOR: p8,
            TUTORIAL: g8,
            AUDIENCE: m8,
            UGC: v8,
            TOAST: y8
        },
        E8 = {
            en: yW,
            fr: $W,
            it: BW,
            de: JW,
            es: l8,
            "es-XL": _8
        },
        b8 = rt({
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
                    var r, n, s, a, l, c, f;
                    !this.canvas || (this.canvas.color = (r = t.color) != null ? r : "#000000", this.canvas.layer = (n = t.layer) != null ? n : 0, this.canvas.layers = (s = t.layers) != null ? s : 1, this.canvas.maxPoints = (a = t.maxPoints) != null ? a : Number.MAX_SAFE_INTEGER, this.canvas.precision = (l = t.precision) != null ? l : 2, this.canvas.scale = (c = t.scale) != null ? c : {
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
                    this.canvas = Gn(new q3(e, this.player.doodle, this.canvasOptions))
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
        T8 = {
            class: "doodle"
        },
        A8 = {
            ref: "canvas"
        },
        S8 = ["disabled"],
        O8 = ["disabled"];

    function w8(e, t, r, n, s, a) {
        const l = Mt("pointerbox-translate"),
            c = Mt("pointerbox"),
            f = Mt("t");
        return F(), W("div", T8, [Se((F(), W("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...d) => e.onPointerBoxStart && e.onPointerBoxStart(...d)),
            "onPointerbox:move": t[1] || (t[1] = (...d) => e.onPointerBoxMove && e.onPointerBoxMove(...d)),
            "onPointerbox:end": t[2] || (t[2] = (...d) => e.onPointerBoxEnd && e.onPointerBoxEnd(...d))
        }, [Se(X("canvas", A8, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [c]
        ]), e.hideUndo ? ve("", !0) : Se((F(), W("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = ze((...d) => e.onUndo && e.onUndo(...d), ["prevent"]))
        }, null, 8, S8)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? ve("", !0) : Se((F(), W("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = ze((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, null, 8, O8)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const C8 = ot(b8, [
        ["render", w8]
    ]);
    var Bd = {
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
                a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                l = "Expected a function",
                c = "Invalid `variable` option passed into `_.template`",
                f = "__lodash_hash_undefined__",
                d = 500,
                p = "__lodash_placeholder__",
                y = 1,
                b = 2,
                w = 4,
                P = 1,
                M = 2,
                G = 1,
                C = 2,
                H = 4,
                z = 8,
                V = 16,
                j = 32,
                Q = 64,
                oe = 128,
                le = 256,
                ue = 512,
                $e = 30,
                Ie = "...",
                fe = 800,
                Ce = 16,
                U = 1,
                ie = 2,
                de = 3,
                be = 1 / 0,
                ye = 9007199254740991,
                Oe = 17976931348623157e292,
                Ue = 0 / 0,
                je = 4294967295,
                nt = je - 1,
                It = je >>> 1,
                wr = [
                    ["ary", oe],
                    ["bind", G],
                    ["bindKey", C],
                    ["curry", z],
                    ["curryRight", V],
                    ["flip", ue],
                    ["partial", j],
                    ["partialRight", Q],
                    ["rearg", le]
                ],
                rr = "[object Arguments]",
                vr = "[object Array]",
                lt = "[object AsyncFunction]",
                St = "[object Boolean]",
                ct = "[object Date]",
                xt = "[object DOMException]",
                Kt = "[object Error]",
                Dt = "[object Function]",
                m = "[object GeneratorFunction]",
                g = "[object Map]",
                S = "[object Number]",
                D = "[object Null]",
                B = "[object Object]",
                Y = "[object Promise]",
                ce = "[object Proxy]",
                se = "[object RegExp]",
                re = "[object Set]",
                $ = "[object String]",
                K = "[object Symbol]",
                he = "[object Undefined]",
                pe = "[object WeakMap]",
                Re = "[object WeakSet]",
                xe = "[object ArrayBuffer]",
                O = "[object DataView]",
                T = "[object Float32Array]",
                L = "[object Float64Array]",
                A = "[object Int8Array]",
                N = "[object Int16Array]",
                Z = "[object Int32Array]",
                ne = "[object Uint8Array]",
                Ee = "[object Uint8ClampedArray]",
                Ae = "[object Uint16Array]",
                dt = "[object Uint32Array]",
                nr = /\b__p \+= '';/g,
                De = /\b(__p \+=) '' \+/g,
                ha = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Xp = /&(?:amp|lt|gt|quot|#39);/g,
                Jp = /[&<>"']/g,
                YO = RegExp(Xp.source),
                zO = RegExp(Jp.source),
                XO = /<%-([\s\S]+?)%>/g,
                JO = /<%([\s\S]+?)%>/g,
                Qp = /<%=([\s\S]+?)%>/g,
                QO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                ZO = /^\w*$/,
                e0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                tu = /[\\^$.*+?()[\]{}|]/g,
                t0 = RegExp(tu.source),
                ru = /^\s+/,
                r0 = /\s/,
                n0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                i0 = /\{\n\/\* \[wrapped with (.+)\] \*/,
                s0 = /,? & /,
                a0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                o0 = /[()=,{}\[\]\/\s]/,
                l0 = /\\(\\)?/g,
                c0 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Zp = /\w*$/,
                u0 = /^[-+]0x[0-9a-f]+$/i,
                f0 = /^0b[01]+$/i,
                d0 = /^\[object .+?Constructor\]$/,
                h0 = /^0o[0-7]+$/i,
                p0 = /^(?:0|[1-9]\d*)$/,
                g0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                So = /($^)/,
                m0 = /['\n\r\u2028\u2029\\]/g,
                Oo = "\\ud800-\\udfff",
                v0 = "\\u0300-\\u036f",
                y0 = "\\ufe20-\\ufe2f",
                _0 = "\\u20d0-\\u20ff",
                eg = v0 + y0 + _0,
                tg = "\\u2700-\\u27bf",
                rg = "a-z\\xdf-\\xf6\\xf8-\\xff",
                E0 = "\\xac\\xb1\\xd7\\xf7",
                b0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                T0 = "\\u2000-\\u206f",
                A0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                ng = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                ig = "\\ufe0e\\ufe0f",
                sg = E0 + b0 + T0 + A0,
                nu = "['\u2019]",
                S0 = "[" + Oo + "]",
                ag = "[" + sg + "]",
                wo = "[" + eg + "]",
                og = "\\d+",
                O0 = "[" + tg + "]",
                lg = "[" + rg + "]",
                cg = "[^" + Oo + sg + og + tg + rg + ng + "]",
                iu = "\\ud83c[\\udffb-\\udfff]",
                w0 = "(?:" + wo + "|" + iu + ")",
                ug = "[^" + Oo + "]",
                su = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                au = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                fs = "[" + ng + "]",
                fg = "\\u200d",
                dg = "(?:" + lg + "|" + cg + ")",
                C0 = "(?:" + fs + "|" + cg + ")",
                hg = "(?:" + nu + "(?:d|ll|m|re|s|t|ve))?",
                pg = "(?:" + nu + "(?:D|LL|M|RE|S|T|VE))?",
                gg = w0 + "?",
                mg = "[" + ig + "]?",
                I0 = "(?:" + fg + "(?:" + [ug, su, au].join("|") + ")" + mg + gg + ")*",
                $0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                R0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                vg = mg + gg + I0,
                L0 = "(?:" + [O0, su, au].join("|") + ")" + vg,
                N0 = "(?:" + [ug + wo + "?", wo, su, au, S0].join("|") + ")",
                P0 = RegExp(nu, "g"),
                k0 = RegExp(wo, "g"),
                ou = RegExp(iu + "(?=" + iu + ")|" + N0 + vg, "g"),
                x0 = RegExp([fs + "?" + lg + "+" + hg + "(?=" + [ag, fs, "$"].join("|") + ")", C0 + "+" + pg + "(?=" + [ag, fs + dg, "$"].join("|") + ")", fs + "?" + dg + "+" + hg, fs + "+" + pg, R0, $0, og, L0].join("|"), "g"),
                D0 = RegExp("[" + fg + Oo + eg + ig + "]"),
                M0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                U0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                F0 = -1,
                Tt = {};
            Tt[T] = Tt[L] = Tt[A] = Tt[N] = Tt[Z] = Tt[ne] = Tt[Ee] = Tt[Ae] = Tt[dt] = !0, Tt[rr] = Tt[vr] = Tt[xe] = Tt[St] = Tt[O] = Tt[ct] = Tt[Kt] = Tt[Dt] = Tt[g] = Tt[S] = Tt[B] = Tt[se] = Tt[re] = Tt[$] = Tt[pe] = !1;
            var yt = {};
            yt[rr] = yt[vr] = yt[xe] = yt[O] = yt[St] = yt[ct] = yt[T] = yt[L] = yt[A] = yt[N] = yt[Z] = yt[g] = yt[S] = yt[B] = yt[se] = yt[re] = yt[$] = yt[K] = yt[ne] = yt[Ee] = yt[Ae] = yt[dt] = !0, yt[Kt] = yt[Dt] = yt[pe] = !1;
            var B0 = {
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
                G0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                j0 = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                W0 = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                V0 = parseFloat,
                K0 = parseInt,
                yg = typeof kt == "object" && kt && kt.Object === Object && kt,
                H0 = typeof self == "object" && self && self.Object === Object && self,
                Xt = yg || H0 || Function("return this")(),
                lu = t && !t.nodeType && t,
                wi = lu && !0 && e && !e.nodeType && e,
                _g = wi && wi.exports === lu,
                cu = _g && yg.process,
                Gr = function() {
                    try {
                        var k = wi && wi.require && wi.require("util").types;
                        return k || cu && cu.binding && cu.binding("util")
                    } catch {}
                }(),
                Eg = Gr && Gr.isArrayBuffer,
                bg = Gr && Gr.isDate,
                Tg = Gr && Gr.isMap,
                Ag = Gr && Gr.isRegExp,
                Sg = Gr && Gr.isSet,
                Og = Gr && Gr.isTypedArray;

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

            function q0(k, J, q, Te) {
                for (var Fe = -1, st = k == null ? 0 : k.length; ++Fe < st;) {
                    var Bt = k[Fe];
                    J(Te, Bt, q(Bt), k)
                }
                return Te
            }

            function jr(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length; ++q < Te && J(k[q], q, k) !== !1;);
                return k
            }

            function Y0(k, J) {
                for (var q = k == null ? 0 : k.length; q-- && J(k[q], q, k) !== !1;);
                return k
            }

            function wg(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length; ++q < Te;)
                    if (!J(k[q], q, k)) return !1;
                return !0
            }

            function Vn(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length, Fe = 0, st = []; ++q < Te;) {
                    var Bt = k[q];
                    J(Bt, q, k) && (st[Fe++] = Bt)
                }
                return st
            }

            function Co(k, J) {
                var q = k == null ? 0 : k.length;
                return !!q && ds(k, J, 0) > -1
            }

            function uu(k, J, q) {
                for (var Te = -1, Fe = k == null ? 0 : k.length; ++Te < Fe;)
                    if (q(J, k[Te])) return !0;
                return !1
            }

            function Ot(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length, Fe = Array(Te); ++q < Te;) Fe[q] = J(k[q], q, k);
                return Fe
            }

            function Kn(k, J) {
                for (var q = -1, Te = J.length, Fe = k.length; ++q < Te;) k[Fe + q] = J[q];
                return k
            }

            function fu(k, J, q, Te) {
                var Fe = -1,
                    st = k == null ? 0 : k.length;
                for (Te && st && (q = k[++Fe]); ++Fe < st;) q = J(q, k[Fe], Fe, k);
                return q
            }

            function z0(k, J, q, Te) {
                var Fe = k == null ? 0 : k.length;
                for (Te && Fe && (q = k[--Fe]); Fe--;) q = J(q, k[Fe], Fe, k);
                return q
            }

            function du(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length; ++q < Te;)
                    if (J(k[q], q, k)) return !0;
                return !1
            }
            var X0 = hu("length");

            function J0(k) {
                return k.split("")
            }

            function Q0(k) {
                return k.match(a0) || []
            }

            function Cg(k, J, q) {
                var Te;
                return q(k, function(Fe, st, Bt) {
                    if (J(Fe, st, Bt)) return Te = st, !1
                }), Te
            }

            function Io(k, J, q, Te) {
                for (var Fe = k.length, st = q + (Te ? 1 : -1); Te ? st-- : ++st < Fe;)
                    if (J(k[st], st, k)) return st;
                return -1
            }

            function ds(k, J, q) {
                return J === J ? uw(k, J, q) : Io(k, Ig, q)
            }

            function Z0(k, J, q, Te) {
                for (var Fe = q - 1, st = k.length; ++Fe < st;)
                    if (Te(k[Fe], J)) return Fe;
                return -1
            }

            function Ig(k) {
                return k !== k
            }

            function $g(k, J) {
                var q = k == null ? 0 : k.length;
                return q ? gu(k, J) / q : Ue
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

            function Rg(k, J, q, Te, Fe) {
                return Fe(k, function(st, Bt, mt) {
                    q = Te ? (Te = !1, st) : J(q, st, Bt, mt)
                }), q
            }

            function ew(k, J) {
                var q = k.length;
                for (k.sort(J); q--;) k[q] = k[q].value;
                return k
            }

            function gu(k, J) {
                for (var q, Te = -1, Fe = k.length; ++Te < Fe;) {
                    var st = J(k[Te]);
                    st !== r && (q = q === r ? st : q + st)
                }
                return q
            }

            function mu(k, J) {
                for (var q = -1, Te = Array(k); ++q < k;) Te[q] = J(q);
                return Te
            }

            function tw(k, J) {
                return Ot(J, function(q) {
                    return [q, k[q]]
                })
            }

            function Lg(k) {
                return k && k.slice(0, xg(k) + 1).replace(ru, "")
            }

            function Ir(k) {
                return function(J) {
                    return k(J)
                }
            }

            function vu(k, J) {
                return Ot(J, function(q) {
                    return k[q]
                })
            }

            function pa(k, J) {
                return k.has(J)
            }

            function Ng(k, J) {
                for (var q = -1, Te = k.length; ++q < Te && ds(J, k[q], 0) > -1;);
                return q
            }

            function Pg(k, J) {
                for (var q = k.length; q-- && ds(J, k[q], 0) > -1;);
                return q
            }

            function rw(k, J) {
                for (var q = k.length, Te = 0; q--;) k[q] === J && ++Te;
                return Te
            }
            var nw = pu(B0),
                iw = pu(G0);

            function sw(k) {
                return "\\" + W0[k]
            }

            function aw(k, J) {
                return k == null ? r : k[J]
            }

            function hs(k) {
                return D0.test(k)
            }

            function ow(k) {
                return M0.test(k)
            }

            function lw(k) {
                for (var J, q = []; !(J = k.next()).done;) q.push(J.value);
                return q
            }

            function yu(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Te, Fe) {
                    q[++J] = [Fe, Te]
                }), q
            }

            function kg(k, J) {
                return function(q) {
                    return k(J(q))
                }
            }

            function Hn(k, J) {
                for (var q = -1, Te = k.length, Fe = 0, st = []; ++q < Te;) {
                    var Bt = k[q];
                    (Bt === J || Bt === p) && (k[q] = p, st[Fe++] = q)
                }
                return st
            }

            function $o(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Te) {
                    q[++J] = Te
                }), q
            }

            function cw(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Te) {
                    q[++J] = [Te, Te]
                }), q
            }

            function uw(k, J, q) {
                for (var Te = q - 1, Fe = k.length; ++Te < Fe;)
                    if (k[Te] === J) return Te;
                return -1
            }

            function fw(k, J, q) {
                for (var Te = q + 1; Te--;)
                    if (k[Te] === J) return Te;
                return Te
            }

            function ps(k) {
                return hs(k) ? hw(k) : X0(k)
            }

            function en(k) {
                return hs(k) ? pw(k) : J0(k)
            }

            function xg(k) {
                for (var J = k.length; J-- && r0.test(k.charAt(J)););
                return J
            }
            var dw = pu(j0);

            function hw(k) {
                for (var J = ou.lastIndex = 0; ou.test(k);) ++J;
                return J
            }

            function pw(k) {
                return k.match(ou) || []
            }

            function gw(k) {
                return k.match(x0) || []
            }
            var mw = function k(J) {
                    J = J == null ? Xt : gs.defaults(Xt.Object(), J, gs.pick(Xt, U0));
                    var q = J.Array,
                        Te = J.Date,
                        Fe = J.Error,
                        st = J.Function,
                        Bt = J.Math,
                        mt = J.Object,
                        _u = J.RegExp,
                        vw = J.String,
                        Wr = J.TypeError,
                        Ro = q.prototype,
                        yw = st.prototype,
                        ms = mt.prototype,
                        Lo = J["__core-js_shared__"],
                        No = yw.toString,
                        ht = ms.hasOwnProperty,
                        _w = 0,
                        Dg = function() {
                            var i = /[^.]+$/.exec(Lo && Lo.keys && Lo.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Po = ms.toString,
                        Ew = No.call(mt),
                        bw = Xt._,
                        Tw = _u("^" + No.call(ht).replace(tu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        ko = _g ? J.Buffer : r,
                        qn = J.Symbol,
                        xo = J.Uint8Array,
                        Mg = ko ? ko.allocUnsafe : r,
                        Do = kg(mt.getPrototypeOf, mt),
                        Ug = mt.create,
                        Fg = ms.propertyIsEnumerable,
                        Mo = Ro.splice,
                        Bg = qn ? qn.isConcatSpreadable : r,
                        ga = qn ? qn.iterator : r,
                        Ci = qn ? qn.toStringTag : r,
                        Uo = function() {
                            try {
                                var i = Ni(mt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        Aw = J.clearTimeout !== Xt.clearTimeout && J.clearTimeout,
                        Sw = Te && Te.now !== Xt.Date.now && Te.now,
                        Ow = J.setTimeout !== Xt.setTimeout && J.setTimeout,
                        Fo = Bt.ceil,
                        Bo = Bt.floor,
                        Eu = mt.getOwnPropertySymbols,
                        ww = ko ? ko.isBuffer : r,
                        Gg = J.isFinite,
                        Cw = Ro.join,
                        Iw = kg(mt.keys, mt),
                        Gt = Bt.max,
                        ir = Bt.min,
                        $w = Te.now,
                        Rw = J.parseInt,
                        jg = Bt.random,
                        Lw = Ro.reverse,
                        bu = Ni(J, "DataView"),
                        ma = Ni(J, "Map"),
                        Tu = Ni(J, "Promise"),
                        vs = Ni(J, "Set"),
                        va = Ni(J, "WeakMap"),
                        ya = Ni(mt, "create"),
                        Go = va && new va,
                        ys = {},
                        Nw = Pi(bu),
                        Pw = Pi(ma),
                        kw = Pi(Tu),
                        xw = Pi(vs),
                        Dw = Pi(va),
                        jo = qn ? qn.prototype : r,
                        _a = jo ? jo.valueOf : r,
                        Wg = jo ? jo.toString : r;

                    function _(i) {
                        if ($t(i) && !Ge(i) && !(i instanceof Je)) {
                            if (i instanceof Vr) return i;
                            if (ht.call(i, "__wrapped__")) return Vm(i)
                        }
                        return new Vr(i)
                    }
                    var _s = function() {
                        function i() {}
                        return function(o) {
                            if (!Ct(o)) return {};
                            if (Ug) return Ug(o);
                            i.prototype = o;
                            var u = new i;
                            return i.prototype = r, u
                        }
                    }();

                    function Wo() {}

                    function Vr(i, o) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: XO,
                        evaluate: JO,
                        interpolate: Qp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = Wo.prototype, _.prototype.constructor = _, Vr.prototype = _s(Wo.prototype), Vr.prototype.constructor = Vr;

                    function Je(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = []
                    }

                    function Mw() {
                        var i = new Je(this.__wrapped__);
                        return i.__actions__ = yr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = yr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = yr(this.__views__), i
                    }

                    function Uw() {
                        if (this.__filtered__) {
                            var i = new Je(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function Fw() {
                        var i = this.__wrapped__.value(),
                            o = this.__dir__,
                            u = Ge(i),
                            h = o < 0,
                            v = u ? i.length : 0,
                            E = J1(0, v, this.__views__),
                            I = E.start,
                            R = E.end,
                            x = R - I,
                            ee = h ? R : I - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = ir(x, this.__takeCount__);
                        if (!u || !h && v == x && we == x) return hm(i, this.__actions__);
                        var Ne = [];
                        e: for (; x-- && me < we;) {
                            ee += o;
                            for (var He = -1, Pe = i[ee]; ++He < ae;) {
                                var Xe = te[He],
                                    Qe = Xe.iteratee,
                                    Lr = Xe.type,
                                    dr = Qe(Pe);
                                if (Lr == ie) Pe = dr;
                                else if (!dr) {
                                    if (Lr == U) continue e;
                                    break e
                                }
                            }
                            Ne[me++] = Pe
                        }
                        return Ne
                    }
                    Je.prototype = _s(Wo.prototype), Je.prototype.constructor = Je;

                    function Ii(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.clear(); ++o < u;) {
                            var h = i[o];
                            this.set(h[0], h[1])
                        }
                    }

                    function Bw() {
                        this.__data__ = ya ? ya(null) : {}, this.size = 0
                    }

                    function Gw(i) {
                        var o = this.has(i) && delete this.__data__[i];
                        return this.size -= o ? 1 : 0, o
                    }

                    function jw(i) {
                        var o = this.__data__;
                        if (ya) {
                            var u = o[i];
                            return u === f ? r : u
                        }
                        return ht.call(o, i) ? o[i] : r
                    }

                    function Ww(i) {
                        var o = this.__data__;
                        return ya ? o[i] !== r : ht.call(o, i)
                    }

                    function Vw(i, o) {
                        var u = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, u[i] = ya && o === r ? f : o, this
                    }
                    Ii.prototype.clear = Bw, Ii.prototype.delete = Gw, Ii.prototype.get = jw, Ii.prototype.has = Ww, Ii.prototype.set = Vw;

                    function Cn(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.clear(); ++o < u;) {
                            var h = i[o];
                            this.set(h[0], h[1])
                        }
                    }

                    function Kw() {
                        this.__data__ = [], this.size = 0
                    }

                    function Hw(i) {
                        var o = this.__data__,
                            u = Vo(o, i);
                        if (u < 0) return !1;
                        var h = o.length - 1;
                        return u == h ? o.pop() : Mo.call(o, u, 1), --this.size, !0
                    }

                    function qw(i) {
                        var o = this.__data__,
                            u = Vo(o, i);
                        return u < 0 ? r : o[u][1]
                    }

                    function Yw(i) {
                        return Vo(this.__data__, i) > -1
                    }

                    function zw(i, o) {
                        var u = this.__data__,
                            h = Vo(u, i);
                        return h < 0 ? (++this.size, u.push([i, o])) : u[h][1] = o, this
                    }
                    Cn.prototype.clear = Kw, Cn.prototype.delete = Hw, Cn.prototype.get = qw, Cn.prototype.has = Yw, Cn.prototype.set = zw;

                    function In(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.clear(); ++o < u;) {
                            var h = i[o];
                            this.set(h[0], h[1])
                        }
                    }

                    function Xw() {
                        this.size = 0, this.__data__ = {
                            hash: new Ii,
                            map: new(ma || Cn),
                            string: new Ii
                        }
                    }

                    function Jw(i) {
                        var o = rl(this, i).delete(i);
                        return this.size -= o ? 1 : 0, o
                    }

                    function Qw(i) {
                        return rl(this, i).get(i)
                    }

                    function Zw(i) {
                        return rl(this, i).has(i)
                    }

                    function e1(i, o) {
                        var u = rl(this, i),
                            h = u.size;
                        return u.set(i, o), this.size += u.size == h ? 0 : 1, this
                    }
                    In.prototype.clear = Xw, In.prototype.delete = Jw, In.prototype.get = Qw, In.prototype.has = Zw, In.prototype.set = e1;

                    function $i(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.__data__ = new In; ++o < u;) this.add(i[o])
                    }

                    function t1(i) {
                        return this.__data__.set(i, f), this
                    }

                    function r1(i) {
                        return this.__data__.has(i)
                    }
                    $i.prototype.add = $i.prototype.push = t1, $i.prototype.has = r1;

                    function tn(i) {
                        var o = this.__data__ = new Cn(i);
                        this.size = o.size
                    }

                    function n1() {
                        this.__data__ = new Cn, this.size = 0
                    }

                    function i1(i) {
                        var o = this.__data__,
                            u = o.delete(i);
                        return this.size = o.size, u
                    }

                    function s1(i) {
                        return this.__data__.get(i)
                    }

                    function a1(i) {
                        return this.__data__.has(i)
                    }

                    function o1(i, o) {
                        var u = this.__data__;
                        if (u instanceof Cn) {
                            var h = u.__data__;
                            if (!ma || h.length < s - 1) return h.push([i, o]), this.size = ++u.size, this;
                            u = this.__data__ = new In(h)
                        }
                        return u.set(i, o), this.size = u.size, this
                    }
                    tn.prototype.clear = n1, tn.prototype.delete = i1, tn.prototype.get = s1, tn.prototype.has = a1, tn.prototype.set = o1;

                    function Vg(i, o) {
                        var u = Ge(i),
                            h = !u && ki(i),
                            v = !u && !h && Qn(i),
                            E = !u && !h && !v && As(i),
                            I = u || h || v || E,
                            R = I ? mu(i.length, vw) : [],
                            x = R.length;
                        for (var ee in i)(o || ht.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || E && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Nn(ee, x))) && R.push(ee);
                        return R
                    }

                    function Kg(i) {
                        var o = i.length;
                        return o ? i[Pu(0, o - 1)] : r
                    }

                    function l1(i, o) {
                        return nl(yr(i), Ri(o, 0, i.length))
                    }

                    function c1(i) {
                        return nl(yr(i))
                    }

                    function Au(i, o, u) {
                        (u !== r && !rn(i[o], u) || u === r && !(o in i)) && $n(i, o, u)
                    }

                    function Ea(i, o, u) {
                        var h = i[o];
                        (!(ht.call(i, o) && rn(h, u)) || u === r && !(o in i)) && $n(i, o, u)
                    }

                    function Vo(i, o) {
                        for (var u = i.length; u--;)
                            if (rn(i[u][0], o)) return u;
                        return -1
                    }

                    function u1(i, o, u, h) {
                        return Yn(i, function(v, E, I) {
                            o(h, v, u(v), I)
                        }), h
                    }

                    function Hg(i, o) {
                        return i && vn(o, Ht(o), i)
                    }

                    function f1(i, o) {
                        return i && vn(o, Er(o), i)
                    }

                    function $n(i, o, u) {
                        o == "__proto__" && Uo ? Uo(i, o, {
                            configurable: !0,
                            enumerable: !0,
                            value: u,
                            writable: !0
                        }) : i[o] = u
                    }

                    function Su(i, o) {
                        for (var u = -1, h = o.length, v = q(h), E = i == null; ++u < h;) v[u] = E ? r : sf(i, o[u]);
                        return v
                    }

                    function Ri(i, o, u) {
                        return i === i && (u !== r && (i = i <= u ? i : u), o !== r && (i = i >= o ? i : o)), i
                    }

                    function Kr(i, o, u, h, v, E) {
                        var I, R = o & y,
                            x = o & b,
                            ee = o & w;
                        if (u && (I = v ? u(i, h, v, E) : u(i)), I !== r) return I;
                        if (!Ct(i)) return i;
                        var te = Ge(i);
                        if (te) {
                            if (I = Z1(i), !R) return yr(i, I)
                        } else {
                            var ae = sr(i),
                                me = ae == Dt || ae == m;
                            if (Qn(i)) return mm(i, R);
                            if (ae == B || ae == rr || me && !v) {
                                if (I = x || me ? {} : xm(i), !R) return x ? j1(i, f1(I, i)) : G1(i, Hg(I, i))
                            } else {
                                if (!yt[ae]) return v ? i : {};
                                I = eC(i, ae, R)
                            }
                        }
                        E || (E = new tn);
                        var we = E.get(i);
                        if (we) return we;
                        E.set(i, I), uv(i) ? i.forEach(function(Pe) {
                            I.add(Kr(Pe, o, u, Pe, i, E))
                        }) : lv(i) && i.forEach(function(Pe, Xe) {
                            I.set(Xe, Kr(Pe, o, u, Xe, i, E))
                        });
                        var Ne = ee ? x ? Vu : Wu : x ? Er : Ht,
                            He = te ? r : Ne(i);
                        return jr(He || i, function(Pe, Xe) {
                            He && (Xe = Pe, Pe = i[Xe]), Ea(I, Xe, Kr(Pe, o, u, Xe, i, E))
                        }), I
                    }

                    function d1(i) {
                        var o = Ht(i);
                        return function(u) {
                            return qg(u, i, o)
                        }
                    }

                    function qg(i, o, u) {
                        var h = u.length;
                        if (i == null) return !h;
                        for (i = mt(i); h--;) {
                            var v = u[h],
                                E = o[v],
                                I = i[v];
                            if (I === r && !(v in i) || !E(I)) return !1
                        }
                        return !0
                    }

                    function Yg(i, o, u) {
                        if (typeof i != "function") throw new Wr(l);
                        return Ca(function() {
                            i.apply(r, u)
                        }, o)
                    }

                    function ba(i, o, u, h) {
                        var v = -1,
                            E = Co,
                            I = !0,
                            R = i.length,
                            x = [],
                            ee = o.length;
                        if (!R) return x;
                        u && (o = Ot(o, Ir(u))), h ? (E = uu, I = !1) : o.length >= s && (E = pa, I = !1, o = new $i(o));
                        e: for (; ++v < R;) {
                            var te = i[v],
                                ae = u == null ? te : u(te);
                            if (te = h || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = ee; me--;)
                                    if (o[me] === ae) continue e;
                                x.push(te)
                            } else E(o, ae, h) || x.push(te)
                        }
                        return x
                    }
                    var Yn = bm(mn),
                        zg = bm(wu, !0);

                    function h1(i, o) {
                        var u = !0;
                        return Yn(i, function(h, v, E) {
                            return u = !!o(h, v, E), u
                        }), u
                    }

                    function Ko(i, o, u) {
                        for (var h = -1, v = i.length; ++h < v;) {
                            var E = i[h],
                                I = o(E);
                            if (I != null && (R === r ? I === I && !Rr(I) : u(I, R))) var R = I,
                                x = E
                        }
                        return x
                    }

                    function p1(i, o, u, h) {
                        var v = i.length;
                        for (u = We(u), u < 0 && (u = -u > v ? 0 : v + u), h = h === r || h > v ? v : We(h), h < 0 && (h += v), h = u > h ? 0 : dv(h); u < h;) i[u++] = o;
                        return i
                    }

                    function Xg(i, o) {
                        var u = [];
                        return Yn(i, function(h, v, E) {
                            o(h, v, E) && u.push(h)
                        }), u
                    }

                    function Jt(i, o, u, h, v) {
                        var E = -1,
                            I = i.length;
                        for (u || (u = rC), v || (v = []); ++E < I;) {
                            var R = i[E];
                            o > 0 && u(R) ? o > 1 ? Jt(R, o - 1, u, h, v) : Kn(v, R) : h || (v[v.length] = R)
                        }
                        return v
                    }
                    var Ou = Tm(),
                        Jg = Tm(!0);

                    function mn(i, o) {
                        return i && Ou(i, o, Ht)
                    }

                    function wu(i, o) {
                        return i && Jg(i, o, Ht)
                    }

                    function Ho(i, o) {
                        return Vn(o, function(u) {
                            return Pn(i[u])
                        })
                    }

                    function Li(i, o) {
                        o = Xn(o, i);
                        for (var u = 0, h = o.length; i != null && u < h;) i = i[yn(o[u++])];
                        return u && u == h ? i : r
                    }

                    function Qg(i, o, u) {
                        var h = o(i);
                        return Ge(i) ? h : Kn(h, u(i))
                    }

                    function ur(i) {
                        return i == null ? i === r ? he : D : Ci && Ci in mt(i) ? X1(i) : cC(i)
                    }

                    function Cu(i, o) {
                        return i > o
                    }

                    function g1(i, o) {
                        return i != null && ht.call(i, o)
                    }

                    function m1(i, o) {
                        return i != null && o in mt(i)
                    }

                    function v1(i, o, u) {
                        return i >= ir(o, u) && i < Gt(o, u)
                    }

                    function Iu(i, o, u) {
                        for (var h = u ? uu : Co, v = i[0].length, E = i.length, I = E, R = q(E), x = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && o && (te = Ot(te, Ir(o))), x = ir(te.length, x), R[I] = !u && (o || v >= 120 && te.length >= 120) ? new $i(I && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = R[0];
                        e: for (; ++ae < v && ee.length < x;) {
                            var we = te[ae],
                                Ne = o ? o(we) : we;
                            if (we = u || we !== 0 ? we : 0, !(me ? pa(me, Ne) : h(ee, Ne, u))) {
                                for (I = E; --I;) {
                                    var He = R[I];
                                    if (!(He ? pa(He, Ne) : h(i[I], Ne, u))) continue e
                                }
                                me && me.push(Ne), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function y1(i, o, u, h) {
                        return mn(i, function(v, E, I) {
                            o(h, u(v), E, I)
                        }), h
                    }

                    function Ta(i, o, u) {
                        o = Xn(o, i), i = Fm(i, o);
                        var h = i == null ? i : i[yn(qr(o))];
                        return h == null ? r : Cr(h, i, u)
                    }

                    function Zg(i) {
                        return $t(i) && ur(i) == rr
                    }

                    function _1(i) {
                        return $t(i) && ur(i) == xe
                    }

                    function E1(i) {
                        return $t(i) && ur(i) == ct
                    }

                    function Aa(i, o, u, h, v) {
                        return i === o ? !0 : i == null || o == null || !$t(i) && !$t(o) ? i !== i && o !== o : b1(i, o, u, h, Aa, v)
                    }

                    function b1(i, o, u, h, v, E) {
                        var I = Ge(i),
                            R = Ge(o),
                            x = I ? vr : sr(i),
                            ee = R ? vr : sr(o);
                        x = x == rr ? B : x, ee = ee == rr ? B : ee;
                        var te = x == B,
                            ae = ee == B,
                            me = x == ee;
                        if (me && Qn(i)) {
                            if (!Qn(o)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return E || (E = new tn), I || As(i) ? Nm(i, o, u, h, v, E) : Y1(i, o, x, u, h, v, E);
                        if (!(u & P)) {
                            var we = te && ht.call(i, "__wrapped__"),
                                Ne = ae && ht.call(o, "__wrapped__");
                            if (we || Ne) {
                                var He = we ? i.value() : i,
                                    Pe = Ne ? o.value() : o;
                                return E || (E = new tn), v(He, Pe, u, h, E)
                            }
                        }
                        return me ? (E || (E = new tn), z1(i, o, u, h, v, E)) : !1
                    }

                    function T1(i) {
                        return $t(i) && sr(i) == g
                    }

                    function $u(i, o, u, h) {
                        var v = u.length,
                            E = v,
                            I = !h;
                        if (i == null) return !E;
                        for (i = mt(i); v--;) {
                            var R = u[v];
                            if (I && R[2] ? R[1] !== i[R[0]] : !(R[0] in i)) return !1
                        }
                        for (; ++v < E;) {
                            R = u[v];
                            var x = R[0],
                                ee = i[x],
                                te = R[1];
                            if (I && R[2]) {
                                if (ee === r && !(x in i)) return !1
                            } else {
                                var ae = new tn;
                                if (h) var me = h(ee, te, x, i, o, ae);
                                if (!(me === r ? Aa(te, ee, P | M, h, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function em(i) {
                        if (!Ct(i) || iC(i)) return !1;
                        var o = Pn(i) ? Tw : d0;
                        return o.test(Pi(i))
                    }

                    function A1(i) {
                        return $t(i) && ur(i) == se
                    }

                    function S1(i) {
                        return $t(i) && sr(i) == re
                    }

                    function O1(i) {
                        return $t(i) && cl(i.length) && !!Tt[ur(i)]
                    }

                    function tm(i) {
                        return typeof i == "function" ? i : i == null ? br : typeof i == "object" ? Ge(i) ? im(i[0], i[1]) : nm(i) : Av(i)
                    }

                    function Ru(i) {
                        if (!wa(i)) return Iw(i);
                        var o = [];
                        for (var u in mt(i)) ht.call(i, u) && u != "constructor" && o.push(u);
                        return o
                    }

                    function w1(i) {
                        if (!Ct(i)) return lC(i);
                        var o = wa(i),
                            u = [];
                        for (var h in i) h == "constructor" && (o || !ht.call(i, h)) || u.push(h);
                        return u
                    }

                    function Lu(i, o) {
                        return i < o
                    }

                    function rm(i, o) {
                        var u = -1,
                            h = _r(i) ? q(i.length) : [];
                        return Yn(i, function(v, E, I) {
                            h[++u] = o(v, E, I)
                        }), h
                    }

                    function nm(i) {
                        var o = Hu(i);
                        return o.length == 1 && o[0][2] ? Mm(o[0][0], o[0][1]) : function(u) {
                            return u === i || $u(u, i, o)
                        }
                    }

                    function im(i, o) {
                        return Yu(i) && Dm(o) ? Mm(yn(i), o) : function(u) {
                            var h = sf(u, i);
                            return h === r && h === o ? af(u, i) : Aa(o, h, P | M)
                        }
                    }

                    function qo(i, o, u, h, v) {
                        i !== o && Ou(o, function(E, I) {
                            if (v || (v = new tn), Ct(E)) C1(i, o, I, u, qo, h, v);
                            else {
                                var R = h ? h(Xu(i, I), E, I + "", i, o, v) : r;
                                R === r && (R = E), Au(i, I, R)
                            }
                        }, Er)
                    }

                    function C1(i, o, u, h, v, E, I) {
                        var R = Xu(i, u),
                            x = Xu(o, u),
                            ee = I.get(x);
                        if (ee) {
                            Au(i, u, ee);
                            return
                        }
                        var te = E ? E(R, x, u + "", i, o, I) : r,
                            ae = te === r;
                        if (ae) {
                            var me = Ge(x),
                                we = !me && Qn(x),
                                Ne = !me && !we && As(x);
                            te = x, me || we || Ne ? Ge(R) ? te = R : Lt(R) ? te = yr(R) : we ? (ae = !1, te = mm(x, !0)) : Ne ? (ae = !1, te = vm(x, !0)) : te = [] : Ia(x) || ki(x) ? (te = R, ki(R) ? te = hv(R) : (!Ct(R) || Pn(R)) && (te = xm(x))) : ae = !1
                        }
                        ae && (I.set(x, te), v(te, x, h, E, I), I.delete(x)), Au(i, u, te)
                    }

                    function sm(i, o) {
                        var u = i.length;
                        if (!!u) return o += o < 0 ? u : 0, Nn(o, u) ? i[o] : r
                    }

                    function am(i, o, u) {
                        o.length ? o = Ot(o, function(E) {
                            return Ge(E) ? function(I) {
                                return Li(I, E.length === 1 ? E[0] : E)
                            } : E
                        }) : o = [br];
                        var h = -1;
                        o = Ot(o, Ir(Le()));
                        var v = rm(i, function(E, I, R) {
                            var x = Ot(o, function(ee) {
                                return ee(E)
                            });
                            return {
                                criteria: x,
                                index: ++h,
                                value: E
                            }
                        });
                        return ew(v, function(E, I) {
                            return B1(E, I, u)
                        })
                    }

                    function I1(i, o) {
                        return om(i, o, function(u, h) {
                            return af(i, h)
                        })
                    }

                    function om(i, o, u) {
                        for (var h = -1, v = o.length, E = {}; ++h < v;) {
                            var I = o[h],
                                R = Li(i, I);
                            u(R, I) && Sa(E, Xn(I, i), R)
                        }
                        return E
                    }

                    function $1(i) {
                        return function(o) {
                            return Li(o, i)
                        }
                    }

                    function Nu(i, o, u, h) {
                        var v = h ? Z0 : ds,
                            E = -1,
                            I = o.length,
                            R = i;
                        for (i === o && (o = yr(o)), u && (R = Ot(i, Ir(u))); ++E < I;)
                            for (var x = 0, ee = o[E], te = u ? u(ee) : ee;
                                (x = v(R, te, x, h)) > -1;) R !== i && Mo.call(R, x, 1), Mo.call(i, x, 1);
                        return i
                    }

                    function lm(i, o) {
                        for (var u = i ? o.length : 0, h = u - 1; u--;) {
                            var v = o[u];
                            if (u == h || v !== E) {
                                var E = v;
                                Nn(v) ? Mo.call(i, v, 1) : Du(i, v)
                            }
                        }
                        return i
                    }

                    function Pu(i, o) {
                        return i + Bo(jg() * (o - i + 1))
                    }

                    function R1(i, o, u, h) {
                        for (var v = -1, E = Gt(Fo((o - i) / (u || 1)), 0), I = q(E); E--;) I[h ? E : ++v] = i, i += u;
                        return I
                    }

                    function ku(i, o) {
                        var u = "";
                        if (!i || o < 1 || o > ye) return u;
                        do o % 2 && (u += i), o = Bo(o / 2), o && (i += i); while (o);
                        return u
                    }

                    function Ye(i, o) {
                        return Ju(Um(i, o, br), i + "")
                    }

                    function L1(i) {
                        return Kg(Ss(i))
                    }

                    function N1(i, o) {
                        var u = Ss(i);
                        return nl(u, Ri(o, 0, u.length))
                    }

                    function Sa(i, o, u, h) {
                        if (!Ct(i)) return i;
                        o = Xn(o, i);
                        for (var v = -1, E = o.length, I = E - 1, R = i; R != null && ++v < E;) {
                            var x = yn(o[v]),
                                ee = u;
                            if (x === "__proto__" || x === "constructor" || x === "prototype") return i;
                            if (v != I) {
                                var te = R[x];
                                ee = h ? h(te, x, R) : r, ee === r && (ee = Ct(te) ? te : Nn(o[v + 1]) ? [] : {})
                            }
                            Ea(R, x, ee), R = R[x]
                        }
                        return i
                    }
                    var cm = Go ? function(i, o) {
                            return Go.set(i, o), i
                        } : br,
                        P1 = Uo ? function(i, o) {
                            return Uo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: lf(o),
                                writable: !0
                            })
                        } : br;

                    function k1(i) {
                        return nl(Ss(i))
                    }

                    function Hr(i, o, u) {
                        var h = -1,
                            v = i.length;
                        o < 0 && (o = -o > v ? 0 : v + o), u = u > v ? v : u, u < 0 && (u += v), v = o > u ? 0 : u - o >>> 0, o >>>= 0;
                        for (var E = q(v); ++h < v;) E[h] = i[h + o];
                        return E
                    }

                    function x1(i, o) {
                        var u;
                        return Yn(i, function(h, v, E) {
                            return u = o(h, v, E), !u
                        }), !!u
                    }

                    function Yo(i, o, u) {
                        var h = 0,
                            v = i == null ? h : i.length;
                        if (typeof o == "number" && o === o && v <= It) {
                            for (; h < v;) {
                                var E = h + v >>> 1,
                                    I = i[E];
                                I !== null && !Rr(I) && (u ? I <= o : I < o) ? h = E + 1 : v = E
                            }
                            return v
                        }
                        return xu(i, o, br, u)
                    }

                    function xu(i, o, u, h) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        o = u(o);
                        for (var I = o !== o, R = o === null, x = Rr(o), ee = o === r; v < E;) {
                            var te = Bo((v + E) / 2),
                                ae = u(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Ne = ae === ae,
                                He = Rr(ae);
                            if (I) var Pe = h || Ne;
                            else ee ? Pe = Ne && (h || me) : R ? Pe = Ne && me && (h || !we) : x ? Pe = Ne && me && !we && (h || !He) : we || He ? Pe = !1 : Pe = h ? ae <= o : ae < o;
                            Pe ? v = te + 1 : E = te
                        }
                        return ir(E, nt)
                    }

                    function um(i, o) {
                        for (var u = -1, h = i.length, v = 0, E = []; ++u < h;) {
                            var I = i[u],
                                R = o ? o(I) : I;
                            if (!u || !rn(R, x)) {
                                var x = R;
                                E[v++] = I === 0 ? 0 : I
                            }
                        }
                        return E
                    }

                    function fm(i) {
                        return typeof i == "number" ? i : Rr(i) ? Ue : +i
                    }

                    function $r(i) {
                        if (typeof i == "string") return i;
                        if (Ge(i)) return Ot(i, $r) + "";
                        if (Rr(i)) return Wg ? Wg.call(i) : "";
                        var o = i + "";
                        return o == "0" && 1 / i == -be ? "-0" : o
                    }

                    function zn(i, o, u) {
                        var h = -1,
                            v = Co,
                            E = i.length,
                            I = !0,
                            R = [],
                            x = R;
                        if (u) I = !1, v = uu;
                        else if (E >= s) {
                            var ee = o ? null : H1(i);
                            if (ee) return $o(ee);
                            I = !1, v = pa, x = new $i
                        } else x = o ? [] : R;
                        e: for (; ++h < E;) {
                            var te = i[h],
                                ae = o ? o(te) : te;
                            if (te = u || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = x.length; me--;)
                                    if (x[me] === ae) continue e;
                                o && x.push(ae), R.push(te)
                            } else v(x, ae, u) || (x !== R && x.push(ae), R.push(te))
                        }
                        return R
                    }

                    function Du(i, o) {
                        return o = Xn(o, i), i = Fm(i, o), i == null || delete i[yn(qr(o))]
                    }

                    function dm(i, o, u, h) {
                        return Sa(i, o, u(Li(i, o)), h)
                    }

                    function zo(i, o, u, h) {
                        for (var v = i.length, E = h ? v : -1;
                            (h ? E-- : ++E < v) && o(i[E], E, i););
                        return u ? Hr(i, h ? 0 : E, h ? E + 1 : v) : Hr(i, h ? E + 1 : 0, h ? v : E)
                    }

                    function hm(i, o) {
                        var u = i;
                        return u instanceof Je && (u = u.value()), fu(o, function(h, v) {
                            return v.func.apply(v.thisArg, Kn([h], v.args))
                        }, u)
                    }

                    function Mu(i, o, u) {
                        var h = i.length;
                        if (h < 2) return h ? zn(i[0]) : [];
                        for (var v = -1, E = q(h); ++v < h;)
                            for (var I = i[v], R = -1; ++R < h;) R != v && (E[v] = ba(E[v] || I, i[R], o, u));
                        return zn(Jt(E, 1), o, u)
                    }

                    function pm(i, o, u) {
                        for (var h = -1, v = i.length, E = o.length, I = {}; ++h < v;) {
                            var R = h < E ? o[h] : r;
                            u(I, i[h], R)
                        }
                        return I
                    }

                    function Uu(i) {
                        return Lt(i) ? i : []
                    }

                    function Fu(i) {
                        return typeof i == "function" ? i : br
                    }

                    function Xn(i, o) {
                        return Ge(i) ? i : Yu(i, o) ? [i] : Wm(ut(i))
                    }
                    var D1 = Ye;

                    function Jn(i, o, u) {
                        var h = i.length;
                        return u = u === r ? h : u, !o && u >= h ? i : Hr(i, o, u)
                    }
                    var gm = Aw || function(i) {
                        return Xt.clearTimeout(i)
                    };

                    function mm(i, o) {
                        if (o) return i.slice();
                        var u = i.length,
                            h = Mg ? Mg(u) : new i.constructor(u);
                        return i.copy(h), h
                    }

                    function Bu(i) {
                        var o = new i.constructor(i.byteLength);
                        return new xo(o).set(new xo(i)), o
                    }

                    function M1(i, o) {
                        var u = o ? Bu(i.buffer) : i.buffer;
                        return new i.constructor(u, i.byteOffset, i.byteLength)
                    }

                    function U1(i) {
                        var o = new i.constructor(i.source, Zp.exec(i));
                        return o.lastIndex = i.lastIndex, o
                    }

                    function F1(i) {
                        return _a ? mt(_a.call(i)) : {}
                    }

                    function vm(i, o) {
                        var u = o ? Bu(i.buffer) : i.buffer;
                        return new i.constructor(u, i.byteOffset, i.length)
                    }

                    function ym(i, o) {
                        if (i !== o) {
                            var u = i !== r,
                                h = i === null,
                                v = i === i,
                                E = Rr(i),
                                I = o !== r,
                                R = o === null,
                                x = o === o,
                                ee = Rr(o);
                            if (!R && !ee && !E && i > o || E && I && x && !R && !ee || h && I && x || !u && x || !v) return 1;
                            if (!h && !E && !ee && i < o || ee && u && v && !h && !E || R && u && v || !I && v || !x) return -1
                        }
                        return 0
                    }

                    function B1(i, o, u) {
                        for (var h = -1, v = i.criteria, E = o.criteria, I = v.length, R = u.length; ++h < I;) {
                            var x = ym(v[h], E[h]);
                            if (x) {
                                if (h >= R) return x;
                                var ee = u[h];
                                return x * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - o.index
                    }

                    function _m(i, o, u, h) {
                        for (var v = -1, E = i.length, I = u.length, R = -1, x = o.length, ee = Gt(E - I, 0), te = q(x + ee), ae = !h; ++R < x;) te[R] = o[R];
                        for (; ++v < I;)(ae || v < E) && (te[u[v]] = i[v]);
                        for (; ee--;) te[R++] = i[v++];
                        return te
                    }

                    function Em(i, o, u, h) {
                        for (var v = -1, E = i.length, I = -1, R = u.length, x = -1, ee = o.length, te = Gt(E - R, 0), ae = q(te + ee), me = !h; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++x < ee;) ae[we + x] = o[x];
                        for (; ++I < R;)(me || v < E) && (ae[we + u[I]] = i[v++]);
                        return ae
                    }

                    function yr(i, o) {
                        var u = -1,
                            h = i.length;
                        for (o || (o = q(h)); ++u < h;) o[u] = i[u];
                        return o
                    }

                    function vn(i, o, u, h) {
                        var v = !u;
                        u || (u = {});
                        for (var E = -1, I = o.length; ++E < I;) {
                            var R = o[E],
                                x = h ? h(u[R], i[R], R, u, i) : r;
                            x === r && (x = i[R]), v ? $n(u, R, x) : Ea(u, R, x)
                        }
                        return u
                    }

                    function G1(i, o) {
                        return vn(i, qu(i), o)
                    }

                    function j1(i, o) {
                        return vn(i, Pm(i), o)
                    }

                    function Xo(i, o) {
                        return function(u, h) {
                            var v = Ge(u) ? q0 : u1,
                                E = o ? o() : {};
                            return v(u, i, Le(h, 2), E)
                        }
                    }

                    function Es(i) {
                        return Ye(function(o, u) {
                            var h = -1,
                                v = u.length,
                                E = v > 1 ? u[v - 1] : r,
                                I = v > 2 ? u[2] : r;
                            for (E = i.length > 3 && typeof E == "function" ? (v--, E) : r, I && fr(u[0], u[1], I) && (E = v < 3 ? r : E, v = 1), o = mt(o); ++h < v;) {
                                var R = u[h];
                                R && i(o, R, h, E)
                            }
                            return o
                        })
                    }

                    function bm(i, o) {
                        return function(u, h) {
                            if (u == null) return u;
                            if (!_r(u)) return i(u, h);
                            for (var v = u.length, E = o ? v : -1, I = mt(u);
                                (o ? E-- : ++E < v) && h(I[E], E, I) !== !1;);
                            return u
                        }
                    }

                    function Tm(i) {
                        return function(o, u, h) {
                            for (var v = -1, E = mt(o), I = h(o), R = I.length; R--;) {
                                var x = I[i ? R : ++v];
                                if (u(E[x], x, E) === !1) break
                            }
                            return o
                        }
                    }

                    function W1(i, o, u) {
                        var h = o & G,
                            v = Oa(i);

                        function E() {
                            var I = this && this !== Xt && this instanceof E ? v : i;
                            return I.apply(h ? u : this, arguments)
                        }
                        return E
                    }

                    function Am(i) {
                        return function(o) {
                            o = ut(o);
                            var u = hs(o) ? en(o) : r,
                                h = u ? u[0] : o.charAt(0),
                                v = u ? Jn(u, 1).join("") : o.slice(1);
                            return h[i]() + v
                        }
                    }

                    function bs(i) {
                        return function(o) {
                            return fu(bv(Ev(o).replace(P0, "")), i, "")
                        }
                    }

                    function Oa(i) {
                        return function() {
                            var o = arguments;
                            switch (o.length) {
                                case 0:
                                    return new i;
                                case 1:
                                    return new i(o[0]);
                                case 2:
                                    return new i(o[0], o[1]);
                                case 3:
                                    return new i(o[0], o[1], o[2]);
                                case 4:
                                    return new i(o[0], o[1], o[2], o[3]);
                                case 5:
                                    return new i(o[0], o[1], o[2], o[3], o[4]);
                                case 6:
                                    return new i(o[0], o[1], o[2], o[3], o[4], o[5]);
                                case 7:
                                    return new i(o[0], o[1], o[2], o[3], o[4], o[5], o[6])
                            }
                            var u = _s(i.prototype),
                                h = i.apply(u, o);
                            return Ct(h) ? h : u
                        }
                    }

                    function V1(i, o, u) {
                        var h = Oa(i);

                        function v() {
                            for (var E = arguments.length, I = q(E), R = E, x = Ts(v); R--;) I[R] = arguments[R];
                            var ee = E < 3 && I[0] !== x && I[E - 1] !== x ? [] : Hn(I, x);
                            if (E -= ee.length, E < u) return Im(i, o, Jo, v.placeholder, r, I, ee, r, r, u - E);
                            var te = this && this !== Xt && this instanceof v ? h : i;
                            return Cr(te, this, I)
                        }
                        return v
                    }

                    function Sm(i) {
                        return function(o, u, h) {
                            var v = mt(o);
                            if (!_r(o)) {
                                var E = Le(u, 3);
                                o = Ht(o), u = function(R) {
                                    return E(v[R], R, v)
                                }
                            }
                            var I = i(o, u, h);
                            return I > -1 ? v[E ? o[I] : I] : r
                        }
                    }

                    function Om(i) {
                        return Ln(function(o) {
                            var u = o.length,
                                h = u,
                                v = Vr.prototype.thru;
                            for (i && o.reverse(); h--;) {
                                var E = o[h];
                                if (typeof E != "function") throw new Wr(l);
                                if (v && !I && tl(E) == "wrapper") var I = new Vr([], !0)
                            }
                            for (h = I ? h : u; ++h < u;) {
                                E = o[h];
                                var R = tl(E),
                                    x = R == "wrapper" ? Ku(E) : r;
                                x && zu(x[0]) && x[1] == (oe | z | j | le) && !x[4].length && x[9] == 1 ? I = I[tl(x[0])].apply(I, x[3]) : I = E.length == 1 && zu(E) ? I[R]() : I.thru(E)
                            }
                            return function() {
                                var ee = arguments,
                                    te = ee[0];
                                if (I && ee.length == 1 && Ge(te)) return I.plant(te).value();
                                for (var ae = 0, me = u ? o[ae].apply(this, ee) : te; ++ae < u;) me = o[ae].call(this, me);
                                return me
                            }
                        })
                    }

                    function Jo(i, o, u, h, v, E, I, R, x, ee) {
                        var te = o & oe,
                            ae = o & G,
                            me = o & C,
                            we = o & (z | V),
                            Ne = o & ue,
                            He = me ? r : Oa(i);

                        function Pe() {
                            for (var Xe = arguments.length, Qe = q(Xe), Lr = Xe; Lr--;) Qe[Lr] = arguments[Lr];
                            if (we) var dr = Ts(Pe),
                                Nr = rw(Qe, dr);
                            if (h && (Qe = _m(Qe, h, v, we)), E && (Qe = Em(Qe, E, I, we)), Xe -= Nr, we && Xe < ee) {
                                var Nt = Hn(Qe, dr);
                                return Im(i, o, Jo, Pe.placeholder, u, Qe, Nt, R, x, ee - Xe)
                            }
                            var nn = ae ? u : this,
                                xn = me ? nn[i] : i;
                            return Xe = Qe.length, R ? Qe = uC(Qe, R) : Ne && Xe > 1 && Qe.reverse(), te && x < Xe && (Qe.length = x), this && this !== Xt && this instanceof Pe && (xn = He || Oa(xn)), xn.apply(nn, Qe)
                        }
                        return Pe
                    }

                    function wm(i, o) {
                        return function(u, h) {
                            return y1(u, i, o(h), {})
                        }
                    }

                    function Qo(i, o) {
                        return function(u, h) {
                            var v;
                            if (u === r && h === r) return o;
                            if (u !== r && (v = u), h !== r) {
                                if (v === r) return h;
                                typeof u == "string" || typeof h == "string" ? (u = $r(u), h = $r(h)) : (u = fm(u), h = fm(h)), v = i(u, h)
                            }
                            return v
                        }
                    }

                    function Gu(i) {
                        return Ln(function(o) {
                            return o = Ot(o, Ir(Le())), Ye(function(u) {
                                var h = this;
                                return i(o, function(v) {
                                    return Cr(v, h, u)
                                })
                            })
                        })
                    }

                    function Zo(i, o) {
                        o = o === r ? " " : $r(o);
                        var u = o.length;
                        if (u < 2) return u ? ku(o, i) : o;
                        var h = ku(o, Fo(i / ps(o)));
                        return hs(o) ? Jn(en(h), 0, i).join("") : h.slice(0, i)
                    }

                    function K1(i, o, u, h) {
                        var v = o & G,
                            E = Oa(i);

                        function I() {
                            for (var R = -1, x = arguments.length, ee = -1, te = h.length, ae = q(te + x), me = this && this !== Xt && this instanceof I ? E : i; ++ee < te;) ae[ee] = h[ee];
                            for (; x--;) ae[ee++] = arguments[++R];
                            return Cr(me, v ? u : this, ae)
                        }
                        return I
                    }

                    function Cm(i) {
                        return function(o, u, h) {
                            return h && typeof h != "number" && fr(o, u, h) && (u = h = r), o = kn(o), u === r ? (u = o, o = 0) : u = kn(u), h = h === r ? o < u ? 1 : -1 : kn(h), R1(o, u, h, i)
                        }
                    }

                    function el(i) {
                        return function(o, u) {
                            return typeof o == "string" && typeof u == "string" || (o = Yr(o), u = Yr(u)), i(o, u)
                        }
                    }

                    function Im(i, o, u, h, v, E, I, R, x, ee) {
                        var te = o & z,
                            ae = te ? I : r,
                            me = te ? r : I,
                            we = te ? E : r,
                            Ne = te ? r : E;
                        o |= te ? j : Q, o &= ~(te ? Q : j), o & H || (o &= ~(G | C));
                        var He = [i, o, v, we, ae, Ne, me, R, x, ee],
                            Pe = u.apply(r, He);
                        return zu(i) && Bm(Pe, He), Pe.placeholder = h, Gm(Pe, i, o)
                    }

                    function ju(i) {
                        var o = Bt[i];
                        return function(u, h) {
                            if (u = Yr(u), h = h == null ? 0 : ir(We(h), 292), h && Gg(u)) {
                                var v = (ut(u) + "e").split("e"),
                                    E = o(v[0] + "e" + (+v[1] + h));
                                return v = (ut(E) + "e").split("e"), +(v[0] + "e" + (+v[1] - h))
                            }
                            return o(u)
                        }
                    }
                    var H1 = vs && 1 / $o(new vs([, -0]))[1] == be ? function(i) {
                        return new vs(i)
                    } : ff;

                    function $m(i) {
                        return function(o) {
                            var u = sr(o);
                            return u == g ? yu(o) : u == re ? cw(o) : tw(o, i(o))
                        }
                    }

                    function Rn(i, o, u, h, v, E, I, R) {
                        var x = o & C;
                        if (!x && typeof i != "function") throw new Wr(l);
                        var ee = h ? h.length : 0;
                        if (ee || (o &= ~(j | Q), h = v = r), I = I === r ? I : Gt(We(I), 0), R = R === r ? R : We(R), ee -= v ? v.length : 0, o & Q) {
                            var te = h,
                                ae = v;
                            h = v = r
                        }
                        var me = x ? r : Ku(i),
                            we = [i, o, u, h, v, te, ae, E, I, R];
                        if (me && oC(we, me), i = we[0], o = we[1], u = we[2], h = we[3], v = we[4], R = we[9] = we[9] === r ? x ? 0 : i.length : Gt(we[9] - ee, 0), !R && o & (z | V) && (o &= ~(z | V)), !o || o == G) var Ne = W1(i, o, u);
                        else o == z || o == V ? Ne = V1(i, o, R) : (o == j || o == (G | j)) && !v.length ? Ne = K1(i, o, u, h) : Ne = Jo.apply(r, we);
                        var He = me ? cm : Bm;
                        return Gm(He(Ne, we), i, o)
                    }

                    function Rm(i, o, u, h) {
                        return i === r || rn(i, ms[u]) && !ht.call(h, u) ? o : i
                    }

                    function Lm(i, o, u, h, v, E) {
                        return Ct(i) && Ct(o) && (E.set(o, i), qo(i, o, r, Lm, E), E.delete(o)), i
                    }

                    function q1(i) {
                        return Ia(i) ? r : i
                    }

                    function Nm(i, o, u, h, v, E) {
                        var I = u & P,
                            R = i.length,
                            x = o.length;
                        if (R != x && !(I && x > R)) return !1;
                        var ee = E.get(i),
                            te = E.get(o);
                        if (ee && te) return ee == o && te == i;
                        var ae = -1,
                            me = !0,
                            we = u & M ? new $i : r;
                        for (E.set(i, o), E.set(o, i); ++ae < R;) {
                            var Ne = i[ae],
                                He = o[ae];
                            if (h) var Pe = I ? h(He, Ne, ae, o, i, E) : h(Ne, He, ae, i, o, E);
                            if (Pe !== r) {
                                if (Pe) continue;
                                me = !1;
                                break
                            }
                            if (we) {
                                if (!du(o, function(Xe, Qe) {
                                        if (!pa(we, Qe) && (Ne === Xe || v(Ne, Xe, u, h, E))) return we.push(Qe)
                                    })) {
                                    me = !1;
                                    break
                                }
                            } else if (!(Ne === He || v(Ne, He, u, h, E))) {
                                me = !1;
                                break
                            }
                        }
                        return E.delete(i), E.delete(o), me
                    }

                    function Y1(i, o, u, h, v, E, I) {
                        switch (u) {
                            case O:
                                if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset) return !1;
                                i = i.buffer, o = o.buffer;
                            case xe:
                                return !(i.byteLength != o.byteLength || !E(new xo(i), new xo(o)));
                            case St:
                            case ct:
                            case S:
                                return rn(+i, +o);
                            case Kt:
                                return i.name == o.name && i.message == o.message;
                            case se:
                            case $:
                                return i == o + "";
                            case g:
                                var R = yu;
                            case re:
                                var x = h & P;
                                if (R || (R = $o), i.size != o.size && !x) return !1;
                                var ee = I.get(i);
                                if (ee) return ee == o;
                                h |= M, I.set(i, o);
                                var te = Nm(R(i), R(o), h, v, E, I);
                                return I.delete(i), te;
                            case K:
                                if (_a) return _a.call(i) == _a.call(o)
                        }
                        return !1
                    }

                    function z1(i, o, u, h, v, E) {
                        var I = u & P,
                            R = Wu(i),
                            x = R.length,
                            ee = Wu(o),
                            te = ee.length;
                        if (x != te && !I) return !1;
                        for (var ae = x; ae--;) {
                            var me = R[ae];
                            if (!(I ? me in o : ht.call(o, me))) return !1
                        }
                        var we = E.get(i),
                            Ne = E.get(o);
                        if (we && Ne) return we == o && Ne == i;
                        var He = !0;
                        E.set(i, o), E.set(o, i);
                        for (var Pe = I; ++ae < x;) {
                            me = R[ae];
                            var Xe = i[me],
                                Qe = o[me];
                            if (h) var Lr = I ? h(Qe, Xe, me, o, i, E) : h(Xe, Qe, me, i, o, E);
                            if (!(Lr === r ? Xe === Qe || v(Xe, Qe, u, h, E) : Lr)) {
                                He = !1;
                                break
                            }
                            Pe || (Pe = me == "constructor")
                        }
                        if (He && !Pe) {
                            var dr = i.constructor,
                                Nr = o.constructor;
                            dr != Nr && "constructor" in i && "constructor" in o && !(typeof dr == "function" && dr instanceof dr && typeof Nr == "function" && Nr instanceof Nr) && (He = !1)
                        }
                        return E.delete(i), E.delete(o), He
                    }

                    function Ln(i) {
                        return Ju(Um(i, r, qm), i + "")
                    }

                    function Wu(i) {
                        return Qg(i, Ht, qu)
                    }

                    function Vu(i) {
                        return Qg(i, Er, Pm)
                    }
                    var Ku = Go ? function(i) {
                        return Go.get(i)
                    } : ff;

                    function tl(i) {
                        for (var o = i.name + "", u = ys[o], h = ht.call(ys, o) ? u.length : 0; h--;) {
                            var v = u[h],
                                E = v.func;
                            if (E == null || E == i) return v.name
                        }
                        return o
                    }

                    function Ts(i) {
                        var o = ht.call(_, "placeholder") ? _ : i;
                        return o.placeholder
                    }

                    function Le() {
                        var i = _.iteratee || cf;
                        return i = i === cf ? tm : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function rl(i, o) {
                        var u = i.__data__;
                        return nC(o) ? u[typeof o == "string" ? "string" : "hash"] : u.map
                    }

                    function Hu(i) {
                        for (var o = Ht(i), u = o.length; u--;) {
                            var h = o[u],
                                v = i[h];
                            o[u] = [h, v, Dm(v)]
                        }
                        return o
                    }

                    function Ni(i, o) {
                        var u = aw(i, o);
                        return em(u) ? u : r
                    }

                    function X1(i) {
                        var o = ht.call(i, Ci),
                            u = i[Ci];
                        try {
                            i[Ci] = r;
                            var h = !0
                        } catch {}
                        var v = Po.call(i);
                        return h && (o ? i[Ci] = u : delete i[Ci]), v
                    }
                    var qu = Eu ? function(i) {
                            return i == null ? [] : (i = mt(i), Vn(Eu(i), function(o) {
                                return Fg.call(i, o)
                            }))
                        } : df,
                        Pm = Eu ? function(i) {
                            for (var o = []; i;) Kn(o, qu(i)), i = Do(i);
                            return o
                        } : df,
                        sr = ur;
                    (bu && sr(new bu(new ArrayBuffer(1))) != O || ma && sr(new ma) != g || Tu && sr(Tu.resolve()) != Y || vs && sr(new vs) != re || va && sr(new va) != pe) && (sr = function(i) {
                        var o = ur(i),
                            u = o == B ? i.constructor : r,
                            h = u ? Pi(u) : "";
                        if (h) switch (h) {
                            case Nw:
                                return O;
                            case Pw:
                                return g;
                            case kw:
                                return Y;
                            case xw:
                                return re;
                            case Dw:
                                return pe
                        }
                        return o
                    });

                    function J1(i, o, u) {
                        for (var h = -1, v = u.length; ++h < v;) {
                            var E = u[h],
                                I = E.size;
                            switch (E.type) {
                                case "drop":
                                    i += I;
                                    break;
                                case "dropRight":
                                    o -= I;
                                    break;
                                case "take":
                                    o = ir(o, i + I);
                                    break;
                                case "takeRight":
                                    i = Gt(i, o - I);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: o
                        }
                    }

                    function Q1(i) {
                        var o = i.match(i0);
                        return o ? o[1].split(s0) : []
                    }

                    function km(i, o, u) {
                        o = Xn(o, i);
                        for (var h = -1, v = o.length, E = !1; ++h < v;) {
                            var I = yn(o[h]);
                            if (!(E = i != null && u(i, I))) break;
                            i = i[I]
                        }
                        return E || ++h != v ? E : (v = i == null ? 0 : i.length, !!v && cl(v) && Nn(I, v) && (Ge(i) || ki(i)))
                    }

                    function Z1(i) {
                        var o = i.length,
                            u = new i.constructor(o);
                        return o && typeof i[0] == "string" && ht.call(i, "index") && (u.index = i.index, u.input = i.input), u
                    }

                    function xm(i) {
                        return typeof i.constructor == "function" && !wa(i) ? _s(Do(i)) : {}
                    }

                    function eC(i, o, u) {
                        var h = i.constructor;
                        switch (o) {
                            case xe:
                                return Bu(i);
                            case St:
                            case ct:
                                return new h(+i);
                            case O:
                                return M1(i, u);
                            case T:
                            case L:
                            case A:
                            case N:
                            case Z:
                            case ne:
                            case Ee:
                            case Ae:
                            case dt:
                                return vm(i, u);
                            case g:
                                return new h;
                            case S:
                            case $:
                                return new h(i);
                            case se:
                                return U1(i);
                            case re:
                                return new h;
                            case K:
                                return F1(i)
                        }
                    }

                    function tC(i, o) {
                        var u = o.length;
                        if (!u) return i;
                        var h = u - 1;
                        return o[h] = (u > 1 ? "& " : "") + o[h], o = o.join(u > 2 ? ", " : " "), i.replace(n0, `{
/* [wrapped with ` + o + `] */
`)
                    }

                    function rC(i) {
                        return Ge(i) || ki(i) || !!(Bg && i && i[Bg])
                    }

                    function Nn(i, o) {
                        var u = typeof i;
                        return o = o == null ? ye : o, !!o && (u == "number" || u != "symbol" && p0.test(i)) && i > -1 && i % 1 == 0 && i < o
                    }

                    function fr(i, o, u) {
                        if (!Ct(u)) return !1;
                        var h = typeof o;
                        return (h == "number" ? _r(u) && Nn(o, u.length) : h == "string" && o in u) ? rn(u[o], i) : !1
                    }

                    function Yu(i, o) {
                        if (Ge(i)) return !1;
                        var u = typeof i;
                        return u == "number" || u == "symbol" || u == "boolean" || i == null || Rr(i) ? !0 : ZO.test(i) || !QO.test(i) || o != null && i in mt(o)
                    }

                    function nC(i) {
                        var o = typeof i;
                        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null
                    }

                    function zu(i) {
                        var o = tl(i),
                            u = _[o];
                        if (typeof u != "function" || !(o in Je.prototype)) return !1;
                        if (i === u) return !0;
                        var h = Ku(u);
                        return !!h && i === h[0]
                    }

                    function iC(i) {
                        return !!Dg && Dg in i
                    }
                    var sC = Lo ? Pn : hf;

                    function wa(i) {
                        var o = i && i.constructor,
                            u = typeof o == "function" && o.prototype || ms;
                        return i === u
                    }

                    function Dm(i) {
                        return i === i && !Ct(i)
                    }

                    function Mm(i, o) {
                        return function(u) {
                            return u == null ? !1 : u[i] === o && (o !== r || i in mt(u))
                        }
                    }

                    function aC(i) {
                        var o = ol(i, function(h) {
                                return u.size === d && u.clear(), h
                            }),
                            u = o.cache;
                        return o
                    }

                    function oC(i, o) {
                        var u = i[1],
                            h = o[1],
                            v = u | h,
                            E = v < (G | C | oe),
                            I = h == oe && u == z || h == oe && u == le && i[7].length <= o[8] || h == (oe | le) && o[7].length <= o[8] && u == z;
                        if (!(E || I)) return i;
                        h & G && (i[2] = o[2], v |= u & G ? 0 : H);
                        var R = o[3];
                        if (R) {
                            var x = i[3];
                            i[3] = x ? _m(x, R, o[4]) : R, i[4] = x ? Hn(i[3], p) : o[4]
                        }
                        return R = o[5], R && (x = i[5], i[5] = x ? Em(x, R, o[6]) : R, i[6] = x ? Hn(i[5], p) : o[6]), R = o[7], R && (i[7] = R), h & oe && (i[8] = i[8] == null ? o[8] : ir(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = v, i
                    }

                    function lC(i) {
                        var o = [];
                        if (i != null)
                            for (var u in mt(i)) o.push(u);
                        return o
                    }

                    function cC(i) {
                        return Po.call(i)
                    }

                    function Um(i, o, u) {
                        return o = Gt(o === r ? i.length - 1 : o, 0),
                            function() {
                                for (var h = arguments, v = -1, E = Gt(h.length - o, 0), I = q(E); ++v < E;) I[v] = h[o + v];
                                v = -1;
                                for (var R = q(o + 1); ++v < o;) R[v] = h[v];
                                return R[o] = u(I), Cr(i, this, R)
                            }
                    }

                    function Fm(i, o) {
                        return o.length < 2 ? i : Li(i, Hr(o, 0, -1))
                    }

                    function uC(i, o) {
                        for (var u = i.length, h = ir(o.length, u), v = yr(i); h--;) {
                            var E = o[h];
                            i[h] = Nn(E, u) ? v[E] : r
                        }
                        return i
                    }

                    function Xu(i, o) {
                        if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__") return i[o]
                    }
                    var Bm = jm(cm),
                        Ca = Ow || function(i, o) {
                            return Xt.setTimeout(i, o)
                        },
                        Ju = jm(P1);

                    function Gm(i, o, u) {
                        var h = o + "";
                        return Ju(i, tC(h, fC(Q1(h), u)))
                    }

                    function jm(i) {
                        var o = 0,
                            u = 0;
                        return function() {
                            var h = $w(),
                                v = Ce - (h - u);
                            if (u = h, v > 0) {
                                if (++o >= fe) return arguments[0]
                            } else o = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function nl(i, o) {
                        var u = -1,
                            h = i.length,
                            v = h - 1;
                        for (o = o === r ? h : o; ++u < o;) {
                            var E = Pu(u, v),
                                I = i[E];
                            i[E] = i[u], i[u] = I
                        }
                        return i.length = o, i
                    }
                    var Wm = aC(function(i) {
                        var o = [];
                        return i.charCodeAt(0) === 46 && o.push(""), i.replace(e0, function(u, h, v, E) {
                            o.push(v ? E.replace(l0, "$1") : h || u)
                        }), o
                    });

                    function yn(i) {
                        if (typeof i == "string" || Rr(i)) return i;
                        var o = i + "";
                        return o == "0" && 1 / i == -be ? "-0" : o
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

                    function fC(i, o) {
                        return jr(wr, function(u) {
                            var h = "_." + u[0];
                            o & u[1] && !Co(i, h) && i.push(h)
                        }), i.sort()
                    }

                    function Vm(i) {
                        if (i instanceof Je) return i.clone();
                        var o = new Vr(i.__wrapped__, i.__chain__);
                        return o.__actions__ = yr(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o
                    }

                    function dC(i, o, u) {
                        (u ? fr(i, o, u) : o === r) ? o = 1: o = Gt(We(o), 0);
                        var h = i == null ? 0 : i.length;
                        if (!h || o < 1) return [];
                        for (var v = 0, E = 0, I = q(Fo(h / o)); v < h;) I[E++] = Hr(i, v, v += o);
                        return I
                    }

                    function hC(i) {
                        for (var o = -1, u = i == null ? 0 : i.length, h = 0, v = []; ++o < u;) {
                            var E = i[o];
                            E && (v[h++] = E)
                        }
                        return v
                    }

                    function pC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var o = q(i - 1), u = arguments[0], h = i; h--;) o[h - 1] = arguments[h];
                        return Kn(Ge(u) ? yr(u) : [u], Jt(o, 1))
                    }
                    var gC = Ye(function(i, o) {
                            return Lt(i) ? ba(i, Jt(o, 1, Lt, !0)) : []
                        }),
                        mC = Ye(function(i, o) {
                            var u = qr(o);
                            return Lt(u) && (u = r), Lt(i) ? ba(i, Jt(o, 1, Lt, !0), Le(u, 2)) : []
                        }),
                        vC = Ye(function(i, o) {
                            var u = qr(o);
                            return Lt(u) && (u = r), Lt(i) ? ba(i, Jt(o, 1, Lt, !0), r, u) : []
                        });

                    function yC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (o = u || o === r ? 1 : We(o), Hr(i, o < 0 ? 0 : o, h)) : []
                    }

                    function _C(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (o = u || o === r ? 1 : We(o), o = h - o, Hr(i, 0, o < 0 ? 0 : o)) : []
                    }

                    function EC(i, o) {
                        return i && i.length ? zo(i, Le(o, 3), !0, !0) : []
                    }

                    function bC(i, o) {
                        return i && i.length ? zo(i, Le(o, 3), !0) : []
                    }

                    function TC(i, o, u, h) {
                        var v = i == null ? 0 : i.length;
                        return v ? (u && typeof u != "number" && fr(i, o, u) && (u = 0, h = v), p1(i, o, u, h)) : []
                    }

                    function Km(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = u == null ? 0 : We(u);
                        return v < 0 && (v = Gt(h + v, 0)), Io(i, Le(o, 3), v)
                    }

                    function Hm(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = h - 1;
                        return u !== r && (v = We(u), v = u < 0 ? Gt(h + v, 0) : ir(v, h - 1)), Io(i, Le(o, 3), v, !0)
                    }

                    function qm(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? Jt(i, 1) : []
                    }

                    function AC(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? Jt(i, be) : []
                    }

                    function SC(i, o) {
                        var u = i == null ? 0 : i.length;
                        return u ? (o = o === r ? 1 : We(o), Jt(i, o)) : []
                    }

                    function OC(i) {
                        for (var o = -1, u = i == null ? 0 : i.length, h = {}; ++o < u;) {
                            var v = i[o];
                            h[v[0]] = v[1]
                        }
                        return h
                    }

                    function Ym(i) {
                        return i && i.length ? i[0] : r
                    }

                    function wC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = u == null ? 0 : We(u);
                        return v < 0 && (v = Gt(h + v, 0)), ds(i, o, v)
                    }

                    function CC(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? Hr(i, 0, -1) : []
                    }
                    var IC = Ye(function(i) {
                            var o = Ot(i, Uu);
                            return o.length && o[0] === i[0] ? Iu(o) : []
                        }),
                        $C = Ye(function(i) {
                            var o = qr(i),
                                u = Ot(i, Uu);
                            return o === qr(u) ? o = r : u.pop(), u.length && u[0] === i[0] ? Iu(u, Le(o, 2)) : []
                        }),
                        RC = Ye(function(i) {
                            var o = qr(i),
                                u = Ot(i, Uu);
                            return o = typeof o == "function" ? o : r, o && u.pop(), u.length && u[0] === i[0] ? Iu(u, r, o) : []
                        });

                    function LC(i, o) {
                        return i == null ? "" : Cw.call(i, o)
                    }

                    function qr(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? i[o - 1] : r
                    }

                    function NC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = h;
                        return u !== r && (v = We(u), v = v < 0 ? Gt(h + v, 0) : ir(v, h - 1)), o === o ? fw(i, o, v) : Io(i, Ig, v, !0)
                    }

                    function PC(i, o) {
                        return i && i.length ? sm(i, We(o)) : r
                    }
                    var kC = Ye(zm);

                    function zm(i, o) {
                        return i && i.length && o && o.length ? Nu(i, o) : i
                    }

                    function xC(i, o, u) {
                        return i && i.length && o && o.length ? Nu(i, o, Le(u, 2)) : i
                    }

                    function DC(i, o, u) {
                        return i && i.length && o && o.length ? Nu(i, o, r, u) : i
                    }
                    var MC = Ln(function(i, o) {
                        var u = i == null ? 0 : i.length,
                            h = Su(i, o);
                        return lm(i, Ot(o, function(v) {
                            return Nn(v, u) ? +v : v
                        }).sort(ym)), h
                    });

                    function UC(i, o) {
                        var u = [];
                        if (!(i && i.length)) return u;
                        var h = -1,
                            v = [],
                            E = i.length;
                        for (o = Le(o, 3); ++h < E;) {
                            var I = i[h];
                            o(I, h, i) && (u.push(I), v.push(h))
                        }
                        return lm(i, v), u
                    }

                    function Qu(i) {
                        return i == null ? i : Lw.call(i)
                    }

                    function FC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (u && typeof u != "number" && fr(i, o, u) ? (o = 0, u = h) : (o = o == null ? 0 : We(o), u = u === r ? h : We(u)), Hr(i, o, u)) : []
                    }

                    function BC(i, o) {
                        return Yo(i, o)
                    }

                    function GC(i, o, u) {
                        return xu(i, o, Le(u, 2))
                    }

                    function jC(i, o) {
                        var u = i == null ? 0 : i.length;
                        if (u) {
                            var h = Yo(i, o);
                            if (h < u && rn(i[h], o)) return h
                        }
                        return -1
                    }

                    function WC(i, o) {
                        return Yo(i, o, !0)
                    }

                    function VC(i, o, u) {
                        return xu(i, o, Le(u, 2), !0)
                    }

                    function KC(i, o) {
                        var u = i == null ? 0 : i.length;
                        if (u) {
                            var h = Yo(i, o, !0) - 1;
                            if (rn(i[h], o)) return h
                        }
                        return -1
                    }

                    function HC(i) {
                        return i && i.length ? um(i) : []
                    }

                    function qC(i, o) {
                        return i && i.length ? um(i, Le(o, 2)) : []
                    }

                    function YC(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? Hr(i, 1, o) : []
                    }

                    function zC(i, o, u) {
                        return i && i.length ? (o = u || o === r ? 1 : We(o), Hr(i, 0, o < 0 ? 0 : o)) : []
                    }

                    function XC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (o = u || o === r ? 1 : We(o), o = h - o, Hr(i, o < 0 ? 0 : o, h)) : []
                    }

                    function JC(i, o) {
                        return i && i.length ? zo(i, Le(o, 3), !1, !0) : []
                    }

                    function QC(i, o) {
                        return i && i.length ? zo(i, Le(o, 3)) : []
                    }
                    var ZC = Ye(function(i) {
                            return zn(Jt(i, 1, Lt, !0))
                        }),
                        eI = Ye(function(i) {
                            var o = qr(i);
                            return Lt(o) && (o = r), zn(Jt(i, 1, Lt, !0), Le(o, 2))
                        }),
                        tI = Ye(function(i) {
                            var o = qr(i);
                            return o = typeof o == "function" ? o : r, zn(Jt(i, 1, Lt, !0), r, o)
                        });

                    function rI(i) {
                        return i && i.length ? zn(i) : []
                    }

                    function nI(i, o) {
                        return i && i.length ? zn(i, Le(o, 2)) : []
                    }

                    function iI(i, o) {
                        return o = typeof o == "function" ? o : r, i && i.length ? zn(i, r, o) : []
                    }

                    function Zu(i) {
                        if (!(i && i.length)) return [];
                        var o = 0;
                        return i = Vn(i, function(u) {
                            if (Lt(u)) return o = Gt(u.length, o), !0
                        }), mu(o, function(u) {
                            return Ot(i, hu(u))
                        })
                    }

                    function Xm(i, o) {
                        if (!(i && i.length)) return [];
                        var u = Zu(i);
                        return o == null ? u : Ot(u, function(h) {
                            return Cr(o, r, h)
                        })
                    }
                    var sI = Ye(function(i, o) {
                            return Lt(i) ? ba(i, o) : []
                        }),
                        aI = Ye(function(i) {
                            return Mu(Vn(i, Lt))
                        }),
                        oI = Ye(function(i) {
                            var o = qr(i);
                            return Lt(o) && (o = r), Mu(Vn(i, Lt), Le(o, 2))
                        }),
                        lI = Ye(function(i) {
                            var o = qr(i);
                            return o = typeof o == "function" ? o : r, Mu(Vn(i, Lt), r, o)
                        }),
                        cI = Ye(Zu);

                    function uI(i, o) {
                        return pm(i || [], o || [], Ea)
                    }

                    function fI(i, o) {
                        return pm(i || [], o || [], Sa)
                    }
                    var dI = Ye(function(i) {
                        var o = i.length,
                            u = o > 1 ? i[o - 1] : r;
                        return u = typeof u == "function" ? (i.pop(), u) : r, Xm(i, u)
                    });

                    function Jm(i) {
                        var o = _(i);
                        return o.__chain__ = !0, o
                    }

                    function hI(i, o) {
                        return o(i), i
                    }

                    function il(i, o) {
                        return o(i)
                    }
                    var pI = Ln(function(i) {
                        var o = i.length,
                            u = o ? i[0] : 0,
                            h = this.__wrapped__,
                            v = function(E) {
                                return Su(E, i)
                            };
                        return o > 1 || this.__actions__.length || !(h instanceof Je) || !Nn(u) ? this.thru(v) : (h = h.slice(u, +u + (o ? 1 : 0)), h.__actions__.push({
                            func: il,
                            args: [v],
                            thisArg: r
                        }), new Vr(h, this.__chain__).thru(function(E) {
                            return o && !E.length && E.push(r), E
                        }))
                    });

                    function gI() {
                        return Jm(this)
                    }

                    function mI() {
                        return new Vr(this.value(), this.__chain__)
                    }

                    function vI() {
                        this.__values__ === r && (this.__values__ = fv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            o = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: o
                        }
                    }

                    function yI() {
                        return this
                    }

                    function _I(i) {
                        for (var o, u = this; u instanceof Wo;) {
                            var h = Vm(u);
                            h.__index__ = 0, h.__values__ = r, o ? v.__wrapped__ = h : o = h;
                            var v = h;
                            u = u.__wrapped__
                        }
                        return v.__wrapped__ = i, o
                    }

                    function EI() {
                        var i = this.__wrapped__;
                        if (i instanceof Je) {
                            var o = i;
                            return this.__actions__.length && (o = new Je(this)), o = o.reverse(), o.__actions__.push({
                                func: il,
                                args: [Qu],
                                thisArg: r
                            }), new Vr(o, this.__chain__)
                        }
                        return this.thru(Qu)
                    }

                    function bI() {
                        return hm(this.__wrapped__, this.__actions__)
                    }
                    var TI = Xo(function(i, o, u) {
                        ht.call(i, u) ? ++i[u] : $n(i, u, 1)
                    });

                    function AI(i, o, u) {
                        var h = Ge(i) ? wg : h1;
                        return u && fr(i, o, u) && (o = r), h(i, Le(o, 3))
                    }

                    function SI(i, o) {
                        var u = Ge(i) ? Vn : Xg;
                        return u(i, Le(o, 3))
                    }
                    var OI = Sm(Km),
                        wI = Sm(Hm);

                    function CI(i, o) {
                        return Jt(sl(i, o), 1)
                    }

                    function II(i, o) {
                        return Jt(sl(i, o), be)
                    }

                    function $I(i, o, u) {
                        return u = u === r ? 1 : We(u), Jt(sl(i, o), u)
                    }

                    function Qm(i, o) {
                        var u = Ge(i) ? jr : Yn;
                        return u(i, Le(o, 3))
                    }

                    function Zm(i, o) {
                        var u = Ge(i) ? Y0 : zg;
                        return u(i, Le(o, 3))
                    }
                    var RI = Xo(function(i, o, u) {
                        ht.call(i, u) ? i[u].push(o) : $n(i, u, [o])
                    });

                    function LI(i, o, u, h) {
                        i = _r(i) ? i : Ss(i), u = u && !h ? We(u) : 0;
                        var v = i.length;
                        return u < 0 && (u = Gt(v + u, 0)), ul(i) ? u <= v && i.indexOf(o, u) > -1 : !!v && ds(i, o, u) > -1
                    }
                    var NI = Ye(function(i, o, u) {
                            var h = -1,
                                v = typeof o == "function",
                                E = _r(i) ? q(i.length) : [];
                            return Yn(i, function(I) {
                                E[++h] = v ? Cr(o, I, u) : Ta(I, o, u)
                            }), E
                        }),
                        PI = Xo(function(i, o, u) {
                            $n(i, u, o)
                        });

                    function sl(i, o) {
                        var u = Ge(i) ? Ot : rm;
                        return u(i, Le(o, 3))
                    }

                    function kI(i, o, u, h) {
                        return i == null ? [] : (Ge(o) || (o = o == null ? [] : [o]), u = h ? r : u, Ge(u) || (u = u == null ? [] : [u]), am(i, o, u))
                    }
                    var xI = Xo(function(i, o, u) {
                        i[u ? 0 : 1].push(o)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function DI(i, o, u) {
                        var h = Ge(i) ? fu : Rg,
                            v = arguments.length < 3;
                        return h(i, Le(o, 4), u, v, Yn)
                    }

                    function MI(i, o, u) {
                        var h = Ge(i) ? z0 : Rg,
                            v = arguments.length < 3;
                        return h(i, Le(o, 4), u, v, zg)
                    }

                    function UI(i, o) {
                        var u = Ge(i) ? Vn : Xg;
                        return u(i, ll(Le(o, 3)))
                    }

                    function FI(i) {
                        var o = Ge(i) ? Kg : L1;
                        return o(i)
                    }

                    function BI(i, o, u) {
                        (u ? fr(i, o, u) : o === r) ? o = 1: o = We(o);
                        var h = Ge(i) ? l1 : N1;
                        return h(i, o)
                    }

                    function GI(i) {
                        var o = Ge(i) ? c1 : k1;
                        return o(i)
                    }

                    function jI(i) {
                        if (i == null) return 0;
                        if (_r(i)) return ul(i) ? ps(i) : i.length;
                        var o = sr(i);
                        return o == g || o == re ? i.size : Ru(i).length
                    }

                    function WI(i, o, u) {
                        var h = Ge(i) ? du : x1;
                        return u && fr(i, o, u) && (o = r), h(i, Le(o, 3))
                    }
                    var VI = Ye(function(i, o) {
                            if (i == null) return [];
                            var u = o.length;
                            return u > 1 && fr(i, o[0], o[1]) ? o = [] : u > 2 && fr(o[0], o[1], o[2]) && (o = [o[0]]), am(i, Jt(o, 1), [])
                        }),
                        al = Sw || function() {
                            return Xt.Date.now()
                        };

                    function KI(i, o) {
                        if (typeof o != "function") throw new Wr(l);
                        return i = We(i),
                            function() {
                                if (--i < 1) return o.apply(this, arguments)
                            }
                    }

                    function ev(i, o, u) {
                        return o = u ? r : o, o = i && o == null ? i.length : o, Rn(i, oe, r, r, r, r, o)
                    }

                    function tv(i, o) {
                        var u;
                        if (typeof o != "function") throw new Wr(l);
                        return i = We(i),
                            function() {
                                return --i > 0 && (u = o.apply(this, arguments)), i <= 1 && (o = r), u
                            }
                    }
                    var ef = Ye(function(i, o, u) {
                            var h = G;
                            if (u.length) {
                                var v = Hn(u, Ts(ef));
                                h |= j
                            }
                            return Rn(i, h, o, u, v)
                        }),
                        rv = Ye(function(i, o, u) {
                            var h = G | C;
                            if (u.length) {
                                var v = Hn(u, Ts(rv));
                                h |= j
                            }
                            return Rn(o, h, i, u, v)
                        });

                    function nv(i, o, u) {
                        o = u ? r : o;
                        var h = Rn(i, z, r, r, r, r, r, o);
                        return h.placeholder = nv.placeholder, h
                    }

                    function iv(i, o, u) {
                        o = u ? r : o;
                        var h = Rn(i, V, r, r, r, r, r, o);
                        return h.placeholder = iv.placeholder, h
                    }

                    function sv(i, o, u) {
                        var h, v, E, I, R, x, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new Wr(l);
                        o = Yr(o) || 0, Ct(u) && (te = !!u.leading, ae = "maxWait" in u, E = ae ? Gt(Yr(u.maxWait) || 0, o) : E, me = "trailing" in u ? !!u.trailing : me);

                        function we(Nt) {
                            var nn = h,
                                xn = v;
                            return h = v = r, ee = Nt, I = i.apply(xn, nn), I
                        }

                        function Ne(Nt) {
                            return ee = Nt, R = Ca(Xe, o), te ? we(Nt) : I
                        }

                        function He(Nt) {
                            var nn = Nt - x,
                                xn = Nt - ee,
                                Sv = o - nn;
                            return ae ? ir(Sv, E - xn) : Sv
                        }

                        function Pe(Nt) {
                            var nn = Nt - x,
                                xn = Nt - ee;
                            return x === r || nn >= o || nn < 0 || ae && xn >= E
                        }

                        function Xe() {
                            var Nt = al();
                            if (Pe(Nt)) return Qe(Nt);
                            R = Ca(Xe, He(Nt))
                        }

                        function Qe(Nt) {
                            return R = r, me && h ? we(Nt) : (h = v = r, I)
                        }

                        function Lr() {
                            R !== r && gm(R), ee = 0, h = x = v = R = r
                        }

                        function dr() {
                            return R === r ? I : Qe(al())
                        }

                        function Nr() {
                            var Nt = al(),
                                nn = Pe(Nt);
                            if (h = arguments, v = this, x = Nt, nn) {
                                if (R === r) return Ne(x);
                                if (ae) return gm(R), R = Ca(Xe, o), we(x)
                            }
                            return R === r && (R = Ca(Xe, o)), I
                        }
                        return Nr.cancel = Lr, Nr.flush = dr, Nr
                    }
                    var HI = Ye(function(i, o) {
                            return Yg(i, 1, o)
                        }),
                        qI = Ye(function(i, o, u) {
                            return Yg(i, Yr(o) || 0, u)
                        });

                    function YI(i) {
                        return Rn(i, ue)
                    }

                    function ol(i, o) {
                        if (typeof i != "function" || o != null && typeof o != "function") throw new Wr(l);
                        var u = function() {
                            var h = arguments,
                                v = o ? o.apply(this, h) : h[0],
                                E = u.cache;
                            if (E.has(v)) return E.get(v);
                            var I = i.apply(this, h);
                            return u.cache = E.set(v, I) || E, I
                        };
                        return u.cache = new(ol.Cache || In), u
                    }
                    ol.Cache = In;

                    function ll(i) {
                        if (typeof i != "function") throw new Wr(l);
                        return function() {
                            var o = arguments;
                            switch (o.length) {
                                case 0:
                                    return !i.call(this);
                                case 1:
                                    return !i.call(this, o[0]);
                                case 2:
                                    return !i.call(this, o[0], o[1]);
                                case 3:
                                    return !i.call(this, o[0], o[1], o[2])
                            }
                            return !i.apply(this, o)
                        }
                    }

                    function zI(i) {
                        return tv(2, i)
                    }
                    var XI = D1(function(i, o) {
                            o = o.length == 1 && Ge(o[0]) ? Ot(o[0], Ir(Le())) : Ot(Jt(o, 1), Ir(Le()));
                            var u = o.length;
                            return Ye(function(h) {
                                for (var v = -1, E = ir(h.length, u); ++v < E;) h[v] = o[v].call(this, h[v]);
                                return Cr(i, this, h)
                            })
                        }),
                        tf = Ye(function(i, o) {
                            var u = Hn(o, Ts(tf));
                            return Rn(i, j, r, o, u)
                        }),
                        av = Ye(function(i, o) {
                            var u = Hn(o, Ts(av));
                            return Rn(i, Q, r, o, u)
                        }),
                        JI = Ln(function(i, o) {
                            return Rn(i, le, r, r, r, o)
                        });

                    function QI(i, o) {
                        if (typeof i != "function") throw new Wr(l);
                        return o = o === r ? o : We(o), Ye(i, o)
                    }

                    function ZI(i, o) {
                        if (typeof i != "function") throw new Wr(l);
                        return o = o == null ? 0 : Gt(We(o), 0), Ye(function(u) {
                            var h = u[o],
                                v = Jn(u, 0, o);
                            return h && Kn(v, h), Cr(i, this, v)
                        })
                    }

                    function e$(i, o, u) {
                        var h = !0,
                            v = !0;
                        if (typeof i != "function") throw new Wr(l);
                        return Ct(u) && (h = "leading" in u ? !!u.leading : h, v = "trailing" in u ? !!u.trailing : v), sv(i, o, {
                            leading: h,
                            maxWait: o,
                            trailing: v
                        })
                    }

                    function t$(i) {
                        return ev(i, 1)
                    }

                    function r$(i, o) {
                        return tf(Fu(o), i)
                    }

                    function n$() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Ge(i) ? i : [i]
                    }

                    function i$(i) {
                        return Kr(i, w)
                    }

                    function s$(i, o) {
                        return o = typeof o == "function" ? o : r, Kr(i, w, o)
                    }

                    function a$(i) {
                        return Kr(i, y | w)
                    }

                    function o$(i, o) {
                        return o = typeof o == "function" ? o : r, Kr(i, y | w, o)
                    }

                    function l$(i, o) {
                        return o == null || qg(i, o, Ht(o))
                    }

                    function rn(i, o) {
                        return i === o || i !== i && o !== o
                    }
                    var c$ = el(Cu),
                        u$ = el(function(i, o) {
                            return i >= o
                        }),
                        ki = Zg(function() {
                            return arguments
                        }()) ? Zg : function(i) {
                            return $t(i) && ht.call(i, "callee") && !Fg.call(i, "callee")
                        },
                        Ge = q.isArray,
                        f$ = Eg ? Ir(Eg) : _1;

                    function _r(i) {
                        return i != null && cl(i.length) && !Pn(i)
                    }

                    function Lt(i) {
                        return $t(i) && _r(i)
                    }

                    function d$(i) {
                        return i === !0 || i === !1 || $t(i) && ur(i) == St
                    }
                    var Qn = ww || hf,
                        h$ = bg ? Ir(bg) : E1;

                    function p$(i) {
                        return $t(i) && i.nodeType === 1 && !Ia(i)
                    }

                    function g$(i) {
                        if (i == null) return !0;
                        if (_r(i) && (Ge(i) || typeof i == "string" || typeof i.splice == "function" || Qn(i) || As(i) || ki(i))) return !i.length;
                        var o = sr(i);
                        if (o == g || o == re) return !i.size;
                        if (wa(i)) return !Ru(i).length;
                        for (var u in i)
                            if (ht.call(i, u)) return !1;
                        return !0
                    }

                    function m$(i, o) {
                        return Aa(i, o)
                    }

                    function v$(i, o, u) {
                        u = typeof u == "function" ? u : r;
                        var h = u ? u(i, o) : r;
                        return h === r ? Aa(i, o, r, u) : !!h
                    }

                    function rf(i) {
                        if (!$t(i)) return !1;
                        var o = ur(i);
                        return o == Kt || o == xt || typeof i.message == "string" && typeof i.name == "string" && !Ia(i)
                    }

                    function y$(i) {
                        return typeof i == "number" && Gg(i)
                    }

                    function Pn(i) {
                        if (!Ct(i)) return !1;
                        var o = ur(i);
                        return o == Dt || o == m || o == lt || o == ce
                    }

                    function ov(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function cl(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ye
                    }

                    function Ct(i) {
                        var o = typeof i;
                        return i != null && (o == "object" || o == "function")
                    }

                    function $t(i) {
                        return i != null && typeof i == "object"
                    }
                    var lv = Tg ? Ir(Tg) : T1;

                    function _$(i, o) {
                        return i === o || $u(i, o, Hu(o))
                    }

                    function E$(i, o, u) {
                        return u = typeof u == "function" ? u : r, $u(i, o, Hu(o), u)
                    }

                    function b$(i) {
                        return cv(i) && i != +i
                    }

                    function T$(i) {
                        if (sC(i)) throw new Fe(a);
                        return em(i)
                    }

                    function A$(i) {
                        return i === null
                    }

                    function S$(i) {
                        return i == null
                    }

                    function cv(i) {
                        return typeof i == "number" || $t(i) && ur(i) == S
                    }

                    function Ia(i) {
                        if (!$t(i) || ur(i) != B) return !1;
                        var o = Do(i);
                        if (o === null) return !0;
                        var u = ht.call(o, "constructor") && o.constructor;
                        return typeof u == "function" && u instanceof u && No.call(u) == Ew
                    }
                    var nf = Ag ? Ir(Ag) : A1;

                    function O$(i) {
                        return ov(i) && i >= -ye && i <= ye
                    }
                    var uv = Sg ? Ir(Sg) : S1;

                    function ul(i) {
                        return typeof i == "string" || !Ge(i) && $t(i) && ur(i) == $
                    }

                    function Rr(i) {
                        return typeof i == "symbol" || $t(i) && ur(i) == K
                    }
                    var As = Og ? Ir(Og) : O1;

                    function w$(i) {
                        return i === r
                    }

                    function C$(i) {
                        return $t(i) && sr(i) == pe
                    }

                    function I$(i) {
                        return $t(i) && ur(i) == Re
                    }
                    var $$ = el(Lu),
                        R$ = el(function(i, o) {
                            return i <= o
                        });

                    function fv(i) {
                        if (!i) return [];
                        if (_r(i)) return ul(i) ? en(i) : yr(i);
                        if (ga && i[ga]) return lw(i[ga]());
                        var o = sr(i),
                            u = o == g ? yu : o == re ? $o : Ss;
                        return u(i)
                    }

                    function kn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Yr(i), i === be || i === -be) {
                            var o = i < 0 ? -1 : 1;
                            return o * Oe
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var o = kn(i),
                            u = o % 1;
                        return o === o ? u ? o - u : o : 0
                    }

                    function dv(i) {
                        return i ? Ri(We(i), 0, je) : 0
                    }

                    function Yr(i) {
                        if (typeof i == "number") return i;
                        if (Rr(i)) return Ue;
                        if (Ct(i)) {
                            var o = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Ct(o) ? o + "" : o
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Lg(i);
                        var u = f0.test(i);
                        return u || h0.test(i) ? K0(i.slice(2), u ? 2 : 8) : u0.test(i) ? Ue : +i
                    }

                    function hv(i) {
                        return vn(i, Er(i))
                    }

                    function L$(i) {
                        return i ? Ri(We(i), -ye, ye) : i === 0 ? i : 0
                    }

                    function ut(i) {
                        return i == null ? "" : $r(i)
                    }
                    var N$ = Es(function(i, o) {
                            if (wa(o) || _r(o)) {
                                vn(o, Ht(o), i);
                                return
                            }
                            for (var u in o) ht.call(o, u) && Ea(i, u, o[u])
                        }),
                        pv = Es(function(i, o) {
                            vn(o, Er(o), i)
                        }),
                        fl = Es(function(i, o, u, h) {
                            vn(o, Er(o), i, h)
                        }),
                        P$ = Es(function(i, o, u, h) {
                            vn(o, Ht(o), i, h)
                        }),
                        k$ = Ln(Su);

                    function x$(i, o) {
                        var u = _s(i);
                        return o == null ? u : Hg(u, o)
                    }
                    var D$ = Ye(function(i, o) {
                            i = mt(i);
                            var u = -1,
                                h = o.length,
                                v = h > 2 ? o[2] : r;
                            for (v && fr(o[0], o[1], v) && (h = 1); ++u < h;)
                                for (var E = o[u], I = Er(E), R = -1, x = I.length; ++R < x;) {
                                    var ee = I[R],
                                        te = i[ee];
                                    (te === r || rn(te, ms[ee]) && !ht.call(i, ee)) && (i[ee] = E[ee])
                                }
                            return i
                        }),
                        M$ = Ye(function(i) {
                            return i.push(r, Lm), Cr(gv, r, i)
                        });

                    function U$(i, o) {
                        return Cg(i, Le(o, 3), mn)
                    }

                    function F$(i, o) {
                        return Cg(i, Le(o, 3), wu)
                    }

                    function B$(i, o) {
                        return i == null ? i : Ou(i, Le(o, 3), Er)
                    }

                    function G$(i, o) {
                        return i == null ? i : Jg(i, Le(o, 3), Er)
                    }

                    function j$(i, o) {
                        return i && mn(i, Le(o, 3))
                    }

                    function W$(i, o) {
                        return i && wu(i, Le(o, 3))
                    }

                    function V$(i) {
                        return i == null ? [] : Ho(i, Ht(i))
                    }

                    function K$(i) {
                        return i == null ? [] : Ho(i, Er(i))
                    }

                    function sf(i, o, u) {
                        var h = i == null ? r : Li(i, o);
                        return h === r ? u : h
                    }

                    function H$(i, o) {
                        return i != null && km(i, o, g1)
                    }

                    function af(i, o) {
                        return i != null && km(i, o, m1)
                    }
                    var q$ = wm(function(i, o, u) {
                            o != null && typeof o.toString != "function" && (o = Po.call(o)), i[o] = u
                        }, lf(br)),
                        Y$ = wm(function(i, o, u) {
                            o != null && typeof o.toString != "function" && (o = Po.call(o)), ht.call(i, o) ? i[o].push(u) : i[o] = [u]
                        }, Le),
                        z$ = Ye(Ta);

                    function Ht(i) {
                        return _r(i) ? Vg(i) : Ru(i)
                    }

                    function Er(i) {
                        return _r(i) ? Vg(i, !0) : w1(i)
                    }

                    function X$(i, o) {
                        var u = {};
                        return o = Le(o, 3), mn(i, function(h, v, E) {
                            $n(u, o(h, v, E), h)
                        }), u
                    }

                    function J$(i, o) {
                        var u = {};
                        return o = Le(o, 3), mn(i, function(h, v, E) {
                            $n(u, v, o(h, v, E))
                        }), u
                    }
                    var Q$ = Es(function(i, o, u) {
                            qo(i, o, u)
                        }),
                        gv = Es(function(i, o, u, h) {
                            qo(i, o, u, h)
                        }),
                        Z$ = Ln(function(i, o) {
                            var u = {};
                            if (i == null) return u;
                            var h = !1;
                            o = Ot(o, function(E) {
                                return E = Xn(E, i), h || (h = E.length > 1), E
                            }), vn(i, Vu(i), u), h && (u = Kr(u, y | b | w, q1));
                            for (var v = o.length; v--;) Du(u, o[v]);
                            return u
                        });

                    function eR(i, o) {
                        return mv(i, ll(Le(o)))
                    }
                    var tR = Ln(function(i, o) {
                        return i == null ? {} : I1(i, o)
                    });

                    function mv(i, o) {
                        if (i == null) return {};
                        var u = Ot(Vu(i), function(h) {
                            return [h]
                        });
                        return o = Le(o), om(i, u, function(h, v) {
                            return o(h, v[0])
                        })
                    }

                    function rR(i, o, u) {
                        o = Xn(o, i);
                        var h = -1,
                            v = o.length;
                        for (v || (v = 1, i = r); ++h < v;) {
                            var E = i == null ? r : i[yn(o[h])];
                            E === r && (h = v, E = u), i = Pn(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function nR(i, o, u) {
                        return i == null ? i : Sa(i, o, u)
                    }

                    function iR(i, o, u, h) {
                        return h = typeof h == "function" ? h : r, i == null ? i : Sa(i, o, u, h)
                    }
                    var vv = $m(Ht),
                        yv = $m(Er);

                    function sR(i, o, u) {
                        var h = Ge(i),
                            v = h || Qn(i) || As(i);
                        if (o = Le(o, 4), u == null) {
                            var E = i && i.constructor;
                            v ? u = h ? new E : [] : Ct(i) ? u = Pn(E) ? _s(Do(i)) : {} : u = {}
                        }
                        return (v ? jr : mn)(i, function(I, R, x) {
                            return o(u, I, R, x)
                        }), u
                    }

                    function aR(i, o) {
                        return i == null ? !0 : Du(i, o)
                    }

                    function oR(i, o, u) {
                        return i == null ? i : dm(i, o, Fu(u))
                    }

                    function lR(i, o, u, h) {
                        return h = typeof h == "function" ? h : r, i == null ? i : dm(i, o, Fu(u), h)
                    }

                    function Ss(i) {
                        return i == null ? [] : vu(i, Ht(i))
                    }

                    function cR(i) {
                        return i == null ? [] : vu(i, Er(i))
                    }

                    function uR(i, o, u) {
                        return u === r && (u = o, o = r), u !== r && (u = Yr(u), u = u === u ? u : 0), o !== r && (o = Yr(o), o = o === o ? o : 0), Ri(Yr(i), o, u)
                    }

                    function fR(i, o, u) {
                        return o = kn(o), u === r ? (u = o, o = 0) : u = kn(u), i = Yr(i), v1(i, o, u)
                    }

                    function dR(i, o, u) {
                        if (u && typeof u != "boolean" && fr(i, o, u) && (o = u = r), u === r && (typeof o == "boolean" ? (u = o, o = r) : typeof i == "boolean" && (u = i, i = r)), i === r && o === r ? (i = 0, o = 1) : (i = kn(i), o === r ? (o = i, i = 0) : o = kn(o)), i > o) {
                            var h = i;
                            i = o, o = h
                        }
                        if (u || i % 1 || o % 1) {
                            var v = jg();
                            return ir(i + v * (o - i + V0("1e-" + ((v + "").length - 1))), o)
                        }
                        return Pu(i, o)
                    }
                    var hR = bs(function(i, o, u) {
                        return o = o.toLowerCase(), i + (u ? _v(o) : o)
                    });

                    function _v(i) {
                        return of(ut(i).toLowerCase())
                    }

                    function Ev(i) {
                        return i = ut(i), i && i.replace(g0, nw).replace(k0, "")
                    }

                    function pR(i, o, u) {
                        i = ut(i), o = $r(o);
                        var h = i.length;
                        u = u === r ? h : Ri(We(u), 0, h);
                        var v = u;
                        return u -= o.length, u >= 0 && i.slice(u, v) == o
                    }

                    function gR(i) {
                        return i = ut(i), i && zO.test(i) ? i.replace(Jp, iw) : i
                    }

                    function mR(i) {
                        return i = ut(i), i && t0.test(i) ? i.replace(tu, "\\$&") : i
                    }
                    var vR = bs(function(i, o, u) {
                            return i + (u ? "-" : "") + o.toLowerCase()
                        }),
                        yR = bs(function(i, o, u) {
                            return i + (u ? " " : "") + o.toLowerCase()
                        }),
                        _R = Am("toLowerCase");

                    function ER(i, o, u) {
                        i = ut(i), o = We(o);
                        var h = o ? ps(i) : 0;
                        if (!o || h >= o) return i;
                        var v = (o - h) / 2;
                        return Zo(Bo(v), u) + i + Zo(Fo(v), u)
                    }

                    function bR(i, o, u) {
                        i = ut(i), o = We(o);
                        var h = o ? ps(i) : 0;
                        return o && h < o ? i + Zo(o - h, u) : i
                    }

                    function TR(i, o, u) {
                        i = ut(i), o = We(o);
                        var h = o ? ps(i) : 0;
                        return o && h < o ? Zo(o - h, u) + i : i
                    }

                    function AR(i, o, u) {
                        return u || o == null ? o = 0 : o && (o = +o), Rw(ut(i).replace(ru, ""), o || 0)
                    }

                    function SR(i, o, u) {
                        return (u ? fr(i, o, u) : o === r) ? o = 1 : o = We(o), ku(ut(i), o)
                    }

                    function OR() {
                        var i = arguments,
                            o = ut(i[0]);
                        return i.length < 3 ? o : o.replace(i[1], i[2])
                    }
                    var wR = bs(function(i, o, u) {
                        return i + (u ? "_" : "") + o.toLowerCase()
                    });

                    function CR(i, o, u) {
                        return u && typeof u != "number" && fr(i, o, u) && (o = u = r), u = u === r ? je : u >>> 0, u ? (i = ut(i), i && (typeof o == "string" || o != null && !nf(o)) && (o = $r(o), !o && hs(i)) ? Jn(en(i), 0, u) : i.split(o, u)) : []
                    }
                    var IR = bs(function(i, o, u) {
                        return i + (u ? " " : "") + of(o)
                    });

                    function $R(i, o, u) {
                        return i = ut(i), u = u == null ? 0 : Ri(We(u), 0, i.length), o = $r(o), i.slice(u, u + o.length) == o
                    }

                    function RR(i, o, u) {
                        var h = _.templateSettings;
                        u && fr(i, o, u) && (o = r), i = ut(i), o = fl({}, o, h, Rm);
                        var v = fl({}, o.imports, h.imports, Rm),
                            E = Ht(v),
                            I = vu(v, E),
                            R, x, ee = 0,
                            te = o.interpolate || So,
                            ae = "__p += '",
                            me = _u((o.escape || So).source + "|" + te.source + "|" + (te === Qp ? c0 : So).source + "|" + (o.evaluate || So).source + "|$", "g"),
                            we = "//# sourceURL=" + (ht.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++F0 + "]") + `
`;
                        i.replace(me, function(Pe, Xe, Qe, Lr, dr, Nr) {
                            return Qe || (Qe = Lr), ae += i.slice(ee, Nr).replace(m0, sw), Xe && (R = !0, ae += `' +
__e(` + Xe + `) +
'`), dr && (x = !0, ae += `';
` + dr + `;
__p += '`), Qe && (ae += `' +
((__t = (` + Qe + `)) == null ? '' : __t) +
'`), ee = Nr + Pe.length, Pe
                        }), ae += `';
`;
                        var Ne = ht.call(o, "variable") && o.variable;
                        if (!Ne) ae = `with (obj) {
` + ae + `
}
`;
                        else if (o0.test(Ne)) throw new Fe(c);
                        ae = (x ? ae.replace(nr, "") : ae).replace(De, "$1").replace(ha, "$1;"), ae = "function(" + (Ne || "obj") + `) {
` + (Ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var He = Tv(function() {
                            return st(E, we + "return " + ae).apply(r, I)
                        });
                        if (He.source = ae, rf(He)) throw He;
                        return He
                    }

                    function LR(i) {
                        return ut(i).toLowerCase()
                    }

                    function NR(i) {
                        return ut(i).toUpperCase()
                    }

                    function PR(i, o, u) {
                        if (i = ut(i), i && (u || o === r)) return Lg(i);
                        if (!i || !(o = $r(o))) return i;
                        var h = en(i),
                            v = en(o),
                            E = Ng(h, v),
                            I = Pg(h, v) + 1;
                        return Jn(h, E, I).join("")
                    }

                    function kR(i, o, u) {
                        if (i = ut(i), i && (u || o === r)) return i.slice(0, xg(i) + 1);
                        if (!i || !(o = $r(o))) return i;
                        var h = en(i),
                            v = Pg(h, en(o)) + 1;
                        return Jn(h, 0, v).join("")
                    }

                    function xR(i, o, u) {
                        if (i = ut(i), i && (u || o === r)) return i.replace(ru, "");
                        if (!i || !(o = $r(o))) return i;
                        var h = en(i),
                            v = Ng(h, en(o));
                        return Jn(h, v).join("")
                    }

                    function DR(i, o) {
                        var u = $e,
                            h = Ie;
                        if (Ct(o)) {
                            var v = "separator" in o ? o.separator : v;
                            u = "length" in o ? We(o.length) : u, h = "omission" in o ? $r(o.omission) : h
                        }
                        i = ut(i);
                        var E = i.length;
                        if (hs(i)) {
                            var I = en(i);
                            E = I.length
                        }
                        if (u >= E) return i;
                        var R = u - ps(h);
                        if (R < 1) return h;
                        var x = I ? Jn(I, 0, R).join("") : i.slice(0, R);
                        if (v === r) return x + h;
                        if (I && (R += x.length - R), nf(v)) {
                            if (i.slice(R).search(v)) {
                                var ee, te = x;
                                for (v.global || (v = _u(v.source, ut(Zp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                x = x.slice(0, ae === r ? R : ae)
                            }
                        } else if (i.indexOf($r(v), R) != R) {
                            var me = x.lastIndexOf(v);
                            me > -1 && (x = x.slice(0, me))
                        }
                        return x + h
                    }

                    function MR(i) {
                        return i = ut(i), i && YO.test(i) ? i.replace(Xp, dw) : i
                    }
                    var UR = bs(function(i, o, u) {
                            return i + (u ? " " : "") + o.toUpperCase()
                        }),
                        of = Am("toUpperCase");

                    function bv(i, o, u) {
                        return i = ut(i), o = u ? r : o, o === r ? ow(i) ? gw(i) : Q0(i) : i.match(o) || []
                    }
                    var Tv = Ye(function(i, o) {
                            try {
                                return Cr(i, r, o)
                            } catch (u) {
                                return rf(u) ? u : new Fe(u)
                            }
                        }),
                        FR = Ln(function(i, o) {
                            return jr(o, function(u) {
                                u = yn(u), $n(i, u, ef(i[u], i))
                            }), i
                        });

                    function BR(i) {
                        var o = i == null ? 0 : i.length,
                            u = Le();
                        return i = o ? Ot(i, function(h) {
                            if (typeof h[1] != "function") throw new Wr(l);
                            return [u(h[0]), h[1]]
                        }) : [], Ye(function(h) {
                            for (var v = -1; ++v < o;) {
                                var E = i[v];
                                if (Cr(E[0], this, h)) return Cr(E[1], this, h)
                            }
                        })
                    }

                    function GR(i) {
                        return d1(Kr(i, y))
                    }

                    function lf(i) {
                        return function() {
                            return i
                        }
                    }

                    function jR(i, o) {
                        return i == null || i !== i ? o : i
                    }
                    var WR = Om(),
                        VR = Om(!0);

                    function br(i) {
                        return i
                    }

                    function cf(i) {
                        return tm(typeof i == "function" ? i : Kr(i, y))
                    }

                    function KR(i) {
                        return nm(Kr(i, y))
                    }

                    function HR(i, o) {
                        return im(i, Kr(o, y))
                    }
                    var qR = Ye(function(i, o) {
                            return function(u) {
                                return Ta(u, i, o)
                            }
                        }),
                        YR = Ye(function(i, o) {
                            return function(u) {
                                return Ta(i, u, o)
                            }
                        });

                    function uf(i, o, u) {
                        var h = Ht(o),
                            v = Ho(o, h);
                        u == null && !(Ct(o) && (v.length || !h.length)) && (u = o, o = i, i = this, v = Ho(o, Ht(o)));
                        var E = !(Ct(u) && "chain" in u) || !!u.chain,
                            I = Pn(i);
                        return jr(v, function(R) {
                            var x = o[R];
                            i[R] = x, I && (i.prototype[R] = function() {
                                var ee = this.__chain__;
                                if (E || ee) {
                                    var te = i(this.__wrapped__),
                                        ae = te.__actions__ = yr(this.__actions__);
                                    return ae.push({
                                        func: x,
                                        args: arguments,
                                        thisArg: i
                                    }), te.__chain__ = ee, te
                                }
                                return x.apply(i, Kn([this.value()], arguments))
                            })
                        }), i
                    }

                    function zR() {
                        return Xt._ === this && (Xt._ = bw), this
                    }

                    function ff() {}

                    function XR(i) {
                        return i = We(i), Ye(function(o) {
                            return sm(o, i)
                        })
                    }
                    var JR = Gu(Ot),
                        QR = Gu(wg),
                        ZR = Gu(du);

                    function Av(i) {
                        return Yu(i) ? hu(yn(i)) : $1(i)
                    }

                    function eL(i) {
                        return function(o) {
                            return i == null ? r : Li(i, o)
                        }
                    }
                    var tL = Cm(),
                        rL = Cm(!0);

                    function df() {
                        return []
                    }

                    function hf() {
                        return !1
                    }

                    function nL() {
                        return {}
                    }

                    function iL() {
                        return ""
                    }

                    function sL() {
                        return !0
                    }

                    function aL(i, o) {
                        if (i = We(i), i < 1 || i > ye) return [];
                        var u = je,
                            h = ir(i, je);
                        o = Le(o), i -= je;
                        for (var v = mu(h, o); ++u < i;) o(u);
                        return v
                    }

                    function oL(i) {
                        return Ge(i) ? Ot(i, yn) : Rr(i) ? [i] : yr(Wm(ut(i)))
                    }

                    function lL(i) {
                        var o = ++_w;
                        return ut(i) + o
                    }
                    var cL = Qo(function(i, o) {
                            return i + o
                        }, 0),
                        uL = ju("ceil"),
                        fL = Qo(function(i, o) {
                            return i / o
                        }, 1),
                        dL = ju("floor");

                    function hL(i) {
                        return i && i.length ? Ko(i, br, Cu) : r
                    }

                    function pL(i, o) {
                        return i && i.length ? Ko(i, Le(o, 2), Cu) : r
                    }

                    function gL(i) {
                        return $g(i, br)
                    }

                    function mL(i, o) {
                        return $g(i, Le(o, 2))
                    }

                    function vL(i) {
                        return i && i.length ? Ko(i, br, Lu) : r
                    }

                    function yL(i, o) {
                        return i && i.length ? Ko(i, Le(o, 2), Lu) : r
                    }
                    var _L = Qo(function(i, o) {
                            return i * o
                        }, 1),
                        EL = ju("round"),
                        bL = Qo(function(i, o) {
                            return i - o
                        }, 0);

                    function TL(i) {
                        return i && i.length ? gu(i, br) : 0
                    }

                    function AL(i, o) {
                        return i && i.length ? gu(i, Le(o, 2)) : 0
                    }
                    return _.after = KI, _.ary = ev, _.assign = N$, _.assignIn = pv, _.assignInWith = fl, _.assignWith = P$, _.at = k$, _.before = tv, _.bind = ef, _.bindAll = FR, _.bindKey = rv, _.castArray = n$, _.chain = Jm, _.chunk = dC, _.compact = hC, _.concat = pC, _.cond = BR, _.conforms = GR, _.constant = lf, _.countBy = TI, _.create = x$, _.curry = nv, _.curryRight = iv, _.debounce = sv, _.defaults = D$, _.defaultsDeep = M$, _.defer = HI, _.delay = qI, _.difference = gC, _.differenceBy = mC, _.differenceWith = vC, _.drop = yC, _.dropRight = _C, _.dropRightWhile = EC, _.dropWhile = bC, _.fill = TC, _.filter = SI, _.flatMap = CI, _.flatMapDeep = II, _.flatMapDepth = $I, _.flatten = qm, _.flattenDeep = AC, _.flattenDepth = SC, _.flip = YI, _.flow = WR, _.flowRight = VR, _.fromPairs = OC, _.functions = V$, _.functionsIn = K$, _.groupBy = RI, _.initial = CC, _.intersection = IC, _.intersectionBy = $C, _.intersectionWith = RC, _.invert = q$, _.invertBy = Y$, _.invokeMap = NI, _.iteratee = cf, _.keyBy = PI, _.keys = Ht, _.keysIn = Er, _.map = sl, _.mapKeys = X$, _.mapValues = J$, _.matches = KR, _.matchesProperty = HR, _.memoize = ol, _.merge = Q$, _.mergeWith = gv, _.method = qR, _.methodOf = YR, _.mixin = uf, _.negate = ll, _.nthArg = XR, _.omit = Z$, _.omitBy = eR, _.once = zI, _.orderBy = kI, _.over = JR, _.overArgs = XI, _.overEvery = QR, _.overSome = ZR, _.partial = tf, _.partialRight = av, _.partition = xI, _.pick = tR, _.pickBy = mv, _.property = Av, _.propertyOf = eL, _.pull = kC, _.pullAll = zm, _.pullAllBy = xC, _.pullAllWith = DC, _.pullAt = MC, _.range = tL, _.rangeRight = rL, _.rearg = JI, _.reject = UI, _.remove = UC, _.rest = QI, _.reverse = Qu, _.sampleSize = BI, _.set = nR, _.setWith = iR, _.shuffle = GI, _.slice = FC, _.sortBy = VI, _.sortedUniq = HC, _.sortedUniqBy = qC, _.split = CR, _.spread = ZI, _.tail = YC, _.take = zC, _.takeRight = XC, _.takeRightWhile = JC, _.takeWhile = QC, _.tap = hI, _.throttle = e$, _.thru = il, _.toArray = fv, _.toPairs = vv, _.toPairsIn = yv, _.toPath = oL, _.toPlainObject = hv, _.transform = sR, _.unary = t$, _.union = ZC, _.unionBy = eI, _.unionWith = tI, _.uniq = rI, _.uniqBy = nI, _.uniqWith = iI, _.unset = aR, _.unzip = Zu, _.unzipWith = Xm, _.update = oR, _.updateWith = lR, _.values = Ss, _.valuesIn = cR, _.without = sI, _.words = bv, _.wrap = r$, _.xor = aI, _.xorBy = oI, _.xorWith = lI, _.zip = cI, _.zipObject = uI, _.zipObjectDeep = fI, _.zipWith = dI, _.entries = vv, _.entriesIn = yv, _.extend = pv, _.extendWith = fl, uf(_, _), _.add = cL, _.attempt = Tv, _.camelCase = hR, _.capitalize = _v, _.ceil = uL, _.clamp = uR, _.clone = i$, _.cloneDeep = a$, _.cloneDeepWith = o$, _.cloneWith = s$, _.conformsTo = l$, _.deburr = Ev, _.defaultTo = jR, _.divide = fL, _.endsWith = pR, _.eq = rn, _.escape = gR, _.escapeRegExp = mR, _.every = AI, _.find = OI, _.findIndex = Km, _.findKey = U$, _.findLast = wI, _.findLastIndex = Hm, _.findLastKey = F$, _.floor = dL, _.forEach = Qm, _.forEachRight = Zm, _.forIn = B$, _.forInRight = G$, _.forOwn = j$, _.forOwnRight = W$, _.get = sf, _.gt = c$, _.gte = u$, _.has = H$, _.hasIn = af, _.head = Ym, _.identity = br, _.includes = LI, _.indexOf = wC, _.inRange = fR, _.invoke = z$, _.isArguments = ki, _.isArray = Ge, _.isArrayBuffer = f$, _.isArrayLike = _r, _.isArrayLikeObject = Lt, _.isBoolean = d$, _.isBuffer = Qn, _.isDate = h$, _.isElement = p$, _.isEmpty = g$, _.isEqual = m$, _.isEqualWith = v$, _.isError = rf, _.isFinite = y$, _.isFunction = Pn, _.isInteger = ov, _.isLength = cl, _.isMap = lv, _.isMatch = _$, _.isMatchWith = E$, _.isNaN = b$, _.isNative = T$, _.isNil = S$, _.isNull = A$, _.isNumber = cv, _.isObject = Ct, _.isObjectLike = $t, _.isPlainObject = Ia, _.isRegExp = nf, _.isSafeInteger = O$, _.isSet = uv, _.isString = ul, _.isSymbol = Rr, _.isTypedArray = As, _.isUndefined = w$, _.isWeakMap = C$, _.isWeakSet = I$, _.join = LC, _.kebabCase = vR, _.last = qr, _.lastIndexOf = NC, _.lowerCase = yR, _.lowerFirst = _R, _.lt = $$, _.lte = R$, _.max = hL, _.maxBy = pL, _.mean = gL, _.meanBy = mL, _.min = vL, _.minBy = yL, _.stubArray = df, _.stubFalse = hf, _.stubObject = nL, _.stubString = iL, _.stubTrue = sL, _.multiply = _L, _.nth = PC, _.noConflict = zR, _.noop = ff, _.now = al, _.pad = ER, _.padEnd = bR, _.padStart = TR, _.parseInt = AR, _.random = dR, _.reduce = DI, _.reduceRight = MI, _.repeat = SR, _.replace = OR, _.result = rR, _.round = EL, _.runInContext = k, _.sample = FI, _.size = jI, _.snakeCase = wR, _.some = WI, _.sortedIndex = BC, _.sortedIndexBy = GC, _.sortedIndexOf = jC, _.sortedLastIndex = WC, _.sortedLastIndexBy = VC, _.sortedLastIndexOf = KC, _.startCase = IR, _.startsWith = $R, _.subtract = bL, _.sum = TL, _.sumBy = AL, _.template = RR, _.times = aL, _.toFinite = kn, _.toInteger = We, _.toLength = dv, _.toLower = LR, _.toNumber = Yr, _.toSafeInteger = L$, _.toString = ut, _.toUpper = NR, _.trim = PR, _.trimEnd = kR, _.trimStart = xR, _.truncate = DR, _.unescape = MR, _.uniqueId = lL, _.upperCase = UR, _.upperFirst = of, _.each = Qm, _.eachRight = Zm, _.first = Ym, uf(_, function() {
                        var i = {};
                        return mn(_, function(o, u) {
                            ht.call(_.prototype, u) || (i[u] = o)
                        }), i
                    }(), {
                        chain: !1
                    }), _.VERSION = n, jr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        _[i].placeholder = _
                    }), jr(["drop", "take"], function(i, o) {
                        Je.prototype[i] = function(u) {
                            u = u === r ? 1 : Gt(We(u), 0);
                            var h = this.__filtered__ && !o ? new Je(this) : this.clone();
                            return h.__filtered__ ? h.__takeCount__ = ir(u, h.__takeCount__) : h.__views__.push({
                                size: ir(u, je),
                                type: i + (h.__dir__ < 0 ? "Right" : "")
                            }), h
                        }, Je.prototype[i + "Right"] = function(u) {
                            return this.reverse()[i](u).reverse()
                        }
                    }), jr(["filter", "map", "takeWhile"], function(i, o) {
                        var u = o + 1,
                            h = u == U || u == de;
                        Je.prototype[i] = function(v) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: Le(v, 3),
                                type: u
                            }), E.__filtered__ = E.__filtered__ || h, E
                        }
                    }), jr(["head", "last"], function(i, o) {
                        var u = "take" + (o ? "Right" : "");
                        Je.prototype[i] = function() {
                            return this[u](1).value()[0]
                        }
                    }), jr(["initial", "tail"], function(i, o) {
                        var u = "drop" + (o ? "" : "Right");
                        Je.prototype[i] = function() {
                            return this.__filtered__ ? new Je(this) : this[u](1)
                        }
                    }), Je.prototype.compact = function() {
                        return this.filter(br)
                    }, Je.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Je.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Je.prototype.invokeMap = Ye(function(i, o) {
                        return typeof i == "function" ? new Je(this) : this.map(function(u) {
                            return Ta(u, i, o)
                        })
                    }), Je.prototype.reject = function(i) {
                        return this.filter(ll(Le(i)))
                    }, Je.prototype.slice = function(i, o) {
                        i = We(i);
                        var u = this;
                        return u.__filtered__ && (i > 0 || o < 0) ? new Je(u) : (i < 0 ? u = u.takeRight(-i) : i && (u = u.drop(i)), o !== r && (o = We(o), u = o < 0 ? u.dropRight(-o) : u.take(o - i)), u)
                    }, Je.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, Je.prototype.toArray = function() {
                        return this.take(je)
                    }, mn(Je.prototype, function(i, o) {
                        var u = /^(?:filter|find|map|reject)|While$/.test(o),
                            h = /^(?:head|last)$/.test(o),
                            v = _[h ? "take" + (o == "last" ? "Right" : "") : o],
                            E = h || /^find/.test(o);
                        !v || (_.prototype[o] = function() {
                            var I = this.__wrapped__,
                                R = h ? [1] : arguments,
                                x = I instanceof Je,
                                ee = R[0],
                                te = x || Ge(I),
                                ae = function(Xe) {
                                    var Qe = v.apply(_, Kn([Xe], R));
                                    return h && me ? Qe[0] : Qe
                                };
                            te && u && typeof ee == "function" && ee.length != 1 && (x = te = !1);
                            var me = this.__chain__,
                                we = !!this.__actions__.length,
                                Ne = E && !me,
                                He = x && !we;
                            if (!E && te) {
                                I = He ? I : new Je(this);
                                var Pe = i.apply(I, R);
                                return Pe.__actions__.push({
                                    func: il,
                                    args: [ae],
                                    thisArg: r
                                }), new Vr(Pe, me)
                            }
                            return Ne && He ? i.apply(this, R) : (Pe = this.thru(ae), Ne ? h ? Pe.value()[0] : Pe.value() : Pe)
                        })
                    }), jr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var o = Ro[i],
                            u = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            h = /^(?:pop|shift)$/.test(i);
                        _.prototype[i] = function() {
                            var v = arguments;
                            if (h && !this.__chain__) {
                                var E = this.value();
                                return o.apply(Ge(E) ? E : [], v)
                            }
                            return this[u](function(I) {
                                return o.apply(Ge(I) ? I : [], v)
                            })
                        }
                    }), mn(Je.prototype, function(i, o) {
                        var u = _[o];
                        if (u) {
                            var h = u.name + "";
                            ht.call(ys, h) || (ys[h] = []), ys[h].push({
                                name: o,
                                func: u
                            })
                        }
                    }), ys[Jo(r, C).name] = [{
                        name: "wrapper",
                        func: r
                    }], Je.prototype.clone = Mw, Je.prototype.reverse = Uw, Je.prototype.value = Fw, _.prototype.at = pI, _.prototype.chain = gI, _.prototype.commit = mI, _.prototype.next = vI, _.prototype.plant = _I, _.prototype.reverse = EI, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = bI, _.prototype.first = _.prototype.head, ga && (_.prototype[ga] = yI), _
                },
                gs = mw();
            wi ? ((wi.exports = gs)._ = gs, lu._ = gs) : Xt._ = gs
        }).call(kt)
    })(Bd, Bd.exports);
    const I8 = rt({
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
                        a = Math.max(s.width * .9, 240),
                        l = Math.max(this.windowHeight - t.height + n.height, 240),
                        c = this.stage.canvas.width,
                        f = this.stage.canvas.height,
                        d = Math.min(a / c, l / f),
                        p = c * d,
                        y = f * d;
                    return {
                        width: `${p}px`,
                        height: `${y}px`
                    }
                }
            },
            mounted() {
                this.onResizeWithContext = Bd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new z3(e, t);
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
        $8 = {
            class: "draw"
        },
        R8 = {
            ref: "content",
            class: "content"
        },
        L8 = {
            class: "constrain"
        },
        N8 = {
            key: 0
        };

    function P8(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", $8, [X("div", R8, [X("div", L8, [e.player.prompt ? Se((F(), W("div", N8, null, 512)), [
            [l, e.player.prompt]
        ]) : ve("", !0), X("div", {
            ref: "stage",
            class: "stage",
            style: co(e.stageDimensions)
        }, null, 4), X("button", {
            onClick: t[0] || (t[0] = ze((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Me(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const k8 = ot(I8, [
            ["render", P8]
        ]),
        x8 = rt({
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
                    var e, t, r, n, s, a;
                    return {
                        message: (t = (e = this.classes) == null ? void 0 : e.message) != null ? t : "message",
                        status: (n = (r = this.classes) == null ? void 0 : r.status) != null ? n : "status",
                        action: (a = (s = this.classes) == null ? void 0 : s.action) != null ? a : "action"
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, zl.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        D8 = ["textContent"],
        M8 = ["textContent"],
        U8 = ["textContent"],
        F8 = ["textContent"];

    function B8(e, t, r, n, s, a) {
        const l = Mt("t");
        return F(), W("div", {
            class: Ve(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.message),
            textContent: Me(e.joinedCountText)
        }, null, 10, D8)) : ve("", !0), e.player.hasControls ? (F(), W(qe, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.status)
        }, Me(e.neededText), 3)) : ve("", !0), e.player.status === "canStart" ? (F(), W("button", {
            key: 1,
            class: Ve(e.localClasses.action),
            onClick: t[0] || (t[0] = (...c) => e.onStartClick && e.onStartClick(...c)),
            textContent: Me(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, M8)) : ve("", !0), e.player.status === "countdown" ? (F(), W("button", {
            key: 2,
            class: Ve(e.localClasses.action),
            onClick: t[1] || (t[1] = (...c) => e.onCancelClick && e.onCancelClick(...c)),
            textContent: Me(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, U8)) : ve("", !0)], 64)) : e.player.gamepadStart ? (F(), W(qe, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.status)
        }, Me(e.neededText), 3)) : ve("", !0), e.player.status === "canStart" ? Se((F(), W("p", {
            key: 1,
            class: Ve(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : ve("", !0), e.player.status === "countdown" ? Se((F(), W("p", {
            key: 2,
            class: Ve(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : ve("", !0)], 64)) : (F(), W(qe, {
            key: 3
        }, [e.player.status === "waitingForMore" ? (F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.status)
        }, Me(e.neededText), 3)) : ve("", !0), e.player.status === "canStart" ? (F(), W("p", {
            key: 1,
            class: Ve(e.localClasses.status)
        }, Me(e.waitingForVIPText), 3)) : ve("", !0), e.player.status === "countdown" ? Se((F(), W("p", {
            key: 2,
            class: Ve(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : ve("", !0)], 64)), e.messageLocation === "bottom" ? (F(), W("p", {
            key: 4,
            class: Ve(e.localClasses.message),
            textContent: Me(e.joinedCountText)
        }, null, 10, F8)) : ve("", !0)], 2)
    }
    const HA = ot(x8, [
            ["render", B8]
        ]),
        G8 = rt({
            components: {
                LobbyActions: HA
            },
            props: {
                player: Object
            }
        }),
        j8 = {
            class: "lobby"
        },
        W8 = {
            class: "constrain"
        };

    function V8(e, t, r, n, s, a) {
        const l = gr("LobbyActions");
        return F(), W("div", j8, [X("div", W8, [pt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const K8 = ot(G8, [
            ["render", V8]
        ]),
        H8 = rt({
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
                    var e, t, r, n, s, a;
                    return {
                        message: (t = (e = this.classes) == null ? void 0 : e.message) != null ? t : "message",
                        status: (n = (r = this.classes) == null ? void 0 : r.status) != null ? n : "status",
                        action: (a = (s = this.classes) == null ? void 0 : s.action) != null ? a : "action"
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, zl.gameStarted(this.$ecastRoom.appTag, e)
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

    function q8(e, t, r, n, s, a) {
        const l = Mt("t");
        return e.player && e.player.status ? (F(), W("div", {
            key: 0,
            class: Ve(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Se((F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : ve("", !0), e.player.hasControls ? (F(), W(qe, {
            key: 1
        }, [e.player.status === "waiting" ? Se((F(), W("button", {
            key: 0,
            class: Ve(e.localClasses.action),
            onClick: t[0] || (t[0] = (...c) => e.onSamePlayersClick && e.onSamePlayersClick(...c))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : ve("", !0), e.player.status === "waiting" ? Se((F(), W("button", {
            key: 1,
            class: Ve(e.localClasses.action),
            onClick: t[1] || (t[1] = (...c) => e.onNewPlayersClick && e.onNewPlayersClick(...c))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : ve("", !0), e.player.status === "countdown" ? Se((F(), W("button", {
            key: 2,
            class: Ve(e.localClasses.action),
            onClick: t[2] || (t[2] = (...c) => e.onCancelClick && e.onCancelClick(...c))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : ve("", !0)], 64)) : e.player.gamepadStart ? Se((F(), W("p", {
            key: 2,
            class: Ve(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (F(), W("p", {
            key: 3,
            class: Ve(e.localClasses.status)
        }, Me(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Se((F(), W("p", {
            key: 4,
            class: Ve(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : ve("", !0)], 2)) : ve("", !0)
    }
    const qA = ot(H8, [
            ["render", q8]
        ]),
        Y8 = rt({
            components: {
                PostGameActions: qA
            },
            props: {
                player: Object
            }
        }),
        z8 = {
            class: "post-game"
        },
        X8 = {
            class: "constrain"
        };

    function J8(e, t, r, n, s, a) {
        const l = gr("PostGameActions");
        return F(), W("div", z8, [X("div", X8, [pt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const Q8 = ot(Y8, [
            ["render", J8]
        ]),
        Z8 = rt({
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
        eV = {
            class: "single-text-entry"
        },
        tV = {
            class: "constrain"
        },
        rV = {
            key: 0
        },
        nV = {
            key: 1,
            for: "input"
        },
        iV = ["value", "rows", "placeholder", "disabled"],
        sV = ["value", "placeholder", "disabled"];

    function aV(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", eV, [X("div", tV, [e.player.prompt ? Se((F(), W("p", rV, null, 512)), [
            [l, e.player.prompt]
        ]) : ve("", !0), e.player.label ? Se((F(), W("label", nV, null, 512)), [
            [l, e.player.label]
        ]) : ve("", !0), e.player.isMultiline ? (F(), W("textarea", {
            key: 2,
            id: "input",
            value: e.value,
            rows: e.player.lines || 2,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[0] || (t[0] = (...c) => e.onValueInput && e.onValueInput(...c))
        }, null, 40, iV)) : (F(), W("input", {
            key: 3,
            id: "input",
            type: "text",
            value: e.value,
            placeholder: e.player.placeholder,
            disabled: e.player.isDisabled,
            onInput: t[1] || (t[1] = (...c) => e.onValueInput && e.onValueInput(...c))
        }, null, 40, sV)), Se(X("button", {
            onClick: t[2] || (t[2] = ze((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const oV = ot(Z8, [
            ["render", aV]
        ]),
        lV = rt({
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
        cV = {
            class: "multi-text-entry"
        },
        uV = {
            class: "constrain"
        },
        fV = {
            key: 0
        },
        dV = ["for"],
        hV = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        pV = ["id", "value", "placeholder", "disabled", "onInput"];

    function gV(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", cV, [X("div", uV, [e.player.prompt ? Se((F(), W("p", fV, null, 512)), [
            [l, e.player.prompt]
        ]) : ve("", !0), (F(!0), W(qe, null, hn(e.player.inputs, (c, f) => (F(), W(qe, null, [c.label ? Se((F(), W("label", {
            key: `label-${c.key}`,
            for: `input-${f}`
        }, null, 8, dV)), [
            [l, c.label]
        ]) : ve("", !0), c.isMultiline ? (F(), W("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: c.lines || 2,
            placeholder: c.placeholder,
            disabled: c.isDisabled,
            onInput: d => e.onValueInput(d, f)
        }, null, 40, hV)) : (F(), W("input", {
            id: `input-${f}`,
            key: `input-${c.key}`,
            type: "text",
            value: e.values[f],
            placeholder: c.placeholder,
            disabled: c.isDisabled,
            onInput: d => e.onValueInput(d, f)
        }, null, 40, pV))], 64))), 256)), Se(X("button", {
            onClick: t[0] || (t[0] = ze((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const mV = ot(lV, [
            ["render", gV]
        ]),
        vV = rt({
            props: {
                player: Object
            }
        }),
        yV = {
            class: "waiting"
        },
        _V = {
            class: "constrain"
        },
        EV = {
            key: 0
        };

    function bV(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", yV, [X("div", _V, [e.player.message ? Se((F(), W("p", EV, null, 512)), [
            [l, e.player.message]
        ]) : ve("", !0)])])
    }
    const TV = ot(vV, [
        ["render", bV]
    ]);
    rt({
        components: {
            Choices: mk,
            Doodle: C8,
            Draw: k8,
            Lobby: K8,
            PostGame: Q8,
            SingleTextEntry: oV,
            MultiTextEntry: mV,
            Waiting: TV
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    const AV = rt({
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
                zl.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    zl.galleryClick(this.artifact.categoryId, "post_game"), io.setAsViewed(0)
                }
            }
        }),
        SV = ["href", "aria-label"];

    function OV(e, t, r, n, s, a) {
        return e.link ? (F(), W("a", {
            key: 0,
            class: Ve([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [rP(e.$slots, "default")], 10, SV)) : ve("", !0)
    }
    const YA = ot(AV, [
            ["render", OV]
        ]),
        wV = rt({
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
        CV = ["value"];

    function IV(e, t, r, n, s, a) {
        return F(), W("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l))
        }, null, 40, CV)
    }
    const $V = ot(wV, [
        ["render", IV]
    ]);
    var Fi, El, Ka = typeof Map == "function" ? new Map : (Fi = [], El = [], {
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
        zA = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        zA = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function RV(e) {
        var t = Ka.get(e);
        t && t.destroy()
    }

    function LV(e) {
        var t = Ka.get(e);
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
                if (n && n.nodeName && n.nodeName === "TEXTAREA" && !Ka.has(n)) {
                    var s, a = null,
                        l = null,
                        c = null,
                        f = function() {
                            n.clientWidth !== l && b()
                        },
                        d = function(w) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", b, !1), n.removeEventListener("keyup", b, !1), n.removeEventListener("autosize:destroy", d, !1), n.removeEventListener("autosize:update", b, !1), Object.keys(w).forEach(function(P) {
                                n.style[P] = w[P]
                            }), Ka.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", d, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", b, !1), n.addEventListener("autosize:update", b, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Ka.set(n, {
                        destroy: d,
                        update: b
                    }), (s = window.getComputedStyle(n, null)).resize === "vertical" ? n.style.resize = "none" : s.resize === "both" && (n.style.resize = "horizontal"), a = s.boxSizing === "content-box" ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(a) && (a = 0), b()
                }

                function p(w) {
                    var P = n.style.width;
                    n.style.width = "0px", n.style.width = P, n.style.overflowY = w
                }

                function y() {
                    if (n.scrollHeight !== 0) {
                        var w = function(M) {
                                for (var G = []; M && M.parentNode && M.parentNode instanceof Element;) M.parentNode.scrollTop && G.push({
                                    node: M.parentNode,
                                    scrollTop: M.parentNode.scrollTop
                                }), M = M.parentNode;
                                return G
                            }(n),
                            P = document.documentElement && document.documentElement.scrollTop;
                        n.style.height = "", n.style.height = n.scrollHeight + a + "px", l = n.clientWidth, w.forEach(function(M) {
                            M.node.scrollTop = M.scrollTop
                        }), P && (document.documentElement.scrollTop = P)
                    }
                }

                function b() {
                    y();
                    var w = Math.round(parseFloat(n.style.height)),
                        P = window.getComputedStyle(n, null),
                        M = P.boxSizing === "content-box" ? Math.round(parseFloat(P.height)) : n.offsetHeight;
                    if (M < w ? P.overflowY === "hidden" && (p("scroll"), y(), M = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight) : P.overflowY !== "hidden" && (p("hidden"), y(), M = P.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(n, null).height)) : n.offsetHeight), c !== M) {
                        c = M;
                        var G = zA("autosize:resized");
                        try {
                            n.dispatchEvent(G)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], RV), e
    }, Da.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], LV), e
    });
    var XA = Da,
        NV = {
            exports: {}
        },
        bl = function(e) {
            return e && e.Math == Math && e
        },
        Fr = bl(typeof globalThis == "object" && globalThis) || bl(typeof window == "object" && window) || bl(typeof self == "object" && self) || bl(typeof kt == "object" && kt) || function() {
            return this
        }() || Function("return this")(),
        pp = {},
        Br = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        PV = Br,
        Ei = !PV(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        kV = Br,
        gp = !kV(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        xV = gp,
        Tl = Function.prototype.call,
        bi = xV ? Tl.bind(Tl) : function() {
            return Tl.apply(Tl, arguments)
        },
        JA = {},
        QA = {}.propertyIsEnumerable,
        ZA = Object.getOwnPropertyDescriptor,
        DV = ZA && !QA.call({
            1: 2
        }, 1);
    JA.f = DV ? function(t) {
        var r = ZA(this, t);
        return !!r && r.enumerable
    } : QA;
    var eS = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        tS = gp,
        rS = Function.prototype,
        MV = rS.bind,
        Gd = rS.call,
        UV = tS && MV.bind(Gd, Gd),
        cr = tS ? function(e) {
            return e && UV(e)
        } : function(e) {
            return e && function() {
                return Gd.apply(e, arguments)
            }
        },
        nS = cr,
        FV = nS({}.toString),
        BV = nS("".slice),
        Dc = function(e) {
            return BV(FV(e), 8, -1)
        },
        GV = cr,
        jV = Br,
        WV = Dc,
        xf = Object,
        VV = GV("".split),
        KV = jV(function() {
            return !xf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return WV(e) == "String" ? VV(e, "") : xf(e)
        } : xf,
        HV = TypeError,
        mo = function(e) {
            if (e == null) throw HV("Can't call method on " + e);
            return e
        },
        qV = KV,
        YV = mo,
        Mc = function(e) {
            return qV(YV(e))
        },
        Or = function(e) {
            return typeof e == "function"
        },
        zV = Or,
        ua = function(e) {
            return typeof e == "object" ? e !== null : zV(e)
        },
        Df = Fr,
        XV = Or,
        JV = function(e) {
            return XV(e) ? e : void 0
        },
        Uc = function(e, t) {
            return arguments.length < 2 ? JV(Df[e]) : Df[e] && Df[e][t]
        },
        QV = cr,
        iS = QV({}.isPrototypeOf),
        ZV = Uc,
        eK = ZV("navigator", "userAgent") || "",
        sS = Fr,
        Mf = eK,
        r_ = sS.process,
        n_ = sS.Deno,
        i_ = r_ && r_.versions || n_ && n_.version,
        s_ = i_ && i_.v8,
        an, tc;
    s_ && (an = s_.split("."), tc = an[0] > 0 && an[0] < 4 ? 1 : +(an[0] + an[1]));
    !tc && Mf && (an = Mf.match(/Edge\/(\d+)/), (!an || an[1] >= 74) && (an = Mf.match(/Chrome\/(\d+)/), an && (tc = +an[1])));
    var tK = tc,
        a_ = tK,
        rK = Br,
        aS = !!Object.getOwnPropertySymbols && !rK(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && a_ && a_ < 41
        }),
        nK = aS,
        oS = nK && !Symbol.sham && typeof Symbol.iterator == "symbol",
        iK = Uc,
        sK = Or,
        aK = iS,
        oK = oS,
        lK = Object,
        lS = oK ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = iK("Symbol");
            return sK(t) && aK(t.prototype, lK(e))
        },
        cK = String,
        uK = function(e) {
            try {
                return cK(e)
            } catch {
                return "Object"
            }
        },
        fK = Or,
        dK = uK,
        hK = TypeError,
        pK = function(e) {
            if (fK(e)) return e;
            throw hK(dK(e) + " is not a function")
        },
        gK = pK,
        mp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : gK(r)
        },
        Uf = bi,
        Ff = Or,
        Bf = ua,
        mK = TypeError,
        vK = function(e, t) {
            var r, n;
            if (t === "string" && Ff(r = e.toString) && !Bf(n = Uf(r, e)) || Ff(r = e.valueOf) && !Bf(n = Uf(r, e)) || t !== "string" && Ff(r = e.toString) && !Bf(n = Uf(r, e))) return n;
            throw mK("Can't convert object to primitive value")
        },
        Fc = {
            exports: {}
        },
        o_ = Fr,
        yK = Object.defineProperty,
        vp = function(e, t) {
            try {
                yK(o_, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                o_[e] = t
            }
            return t
        },
        _K = Fr,
        EK = vp,
        l_ = "__core-js_shared__",
        bK = _K[l_] || EK(l_, {}),
        yp = bK,
        c_ = yp;
    (Fc.exports = function(e, t) {
        return c_[e] || (c_[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var TK = mo,
        AK = Object,
        cS = function(e) {
            return AK(TK(e))
        },
        SK = cr,
        OK = cS,
        wK = SK({}.hasOwnProperty),
        Ti = Object.hasOwn || function(t, r) {
            return wK(OK(t), r)
        },
        CK = cr,
        IK = 0,
        $K = Math.random(),
        RK = CK(1 .toString),
        uS = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + RK(++IK + $K, 36)
        },
        LK = Fr,
        NK = Fc.exports,
        u_ = Ti,
        PK = uS,
        f_ = aS,
        fS = oS,
        ws = NK("wks"),
        ns = LK.Symbol,
        d_ = ns && ns.for,
        kK = fS ? ns : ns && ns.withoutSetter || PK,
        cs = function(e) {
            if (!u_(ws, e) || !(f_ || typeof ws[e] == "string")) {
                var t = "Symbol." + e;
                f_ && u_(ns, e) ? ws[e] = ns[e] : fS && d_ ? ws[e] = d_(t) : ws[e] = kK(t)
            }
            return ws[e]
        },
        xK = bi,
        h_ = ua,
        p_ = lS,
        DK = mp,
        MK = vK,
        UK = cs,
        FK = TypeError,
        BK = UK("toPrimitive"),
        GK = function(e, t) {
            if (!h_(e) || p_(e)) return e;
            var r = DK(e, BK),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = xK(r, e, t), !h_(n) || p_(n)) return n;
                throw FK("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), MK(e, t)
        },
        jK = GK,
        WK = lS,
        dS = function(e) {
            var t = jK(e, "string");
            return WK(t) ? t : t + ""
        },
        VK = Fr,
        g_ = ua,
        jd = VK.document,
        KK = g_(jd) && g_(jd.createElement),
        hS = function(e) {
            return KK ? jd.createElement(e) : {}
        },
        HK = Ei,
        qK = Br,
        YK = hS,
        pS = !HK && !qK(function() {
            return Object.defineProperty(YK("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        zK = Ei,
        XK = bi,
        JK = JA,
        QK = eS,
        ZK = Mc,
        eH = dS,
        tH = Ti,
        rH = pS,
        m_ = Object.getOwnPropertyDescriptor;
    pp.f = zK ? m_ : function(t, r) {
        if (t = ZK(t), r = eH(r), rH) try {
            return m_(t, r)
        } catch {}
        if (tH(t, r)) return QK(!XK(JK.f, t, r), t[r])
    };
    var vo = {},
        nH = Ei,
        iH = Br,
        gS = nH && iH(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        sH = ua,
        aH = String,
        oH = TypeError,
        us = function(e) {
            if (sH(e)) return e;
            throw oH(aH(e) + " is not an object")
        },
        lH = Ei,
        cH = pS,
        uH = gS,
        Al = us,
        v_ = dS,
        fH = TypeError,
        Gf = Object.defineProperty,
        dH = Object.getOwnPropertyDescriptor,
        jf = "enumerable",
        Wf = "configurable",
        Vf = "writable";
    vo.f = lH ? uH ? function(t, r, n) {
        if (Al(t), r = v_(r), Al(n), typeof t == "function" && r === "prototype" && "value" in n && Vf in n && !n[Vf]) {
            var s = dH(t, r);
            s && s[Vf] && (t[r] = n.value, n = {
                configurable: Wf in n ? n[Wf] : s[Wf],
                enumerable: jf in n ? n[jf] : s[jf],
                writable: !1
            })
        }
        return Gf(t, r, n)
    } : Gf : function(t, r, n) {
        if (Al(t), r = v_(r), Al(n), cH) try {
            return Gf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw fH("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var hH = Ei,
        pH = vo,
        gH = eS,
        _p = hH ? function(e, t, r) {
            return pH.f(e, t, gH(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        mS = {
            exports: {}
        },
        Wd = Ei,
        mH = Ti,
        vS = Function.prototype,
        vH = Wd && Object.getOwnPropertyDescriptor,
        Ep = mH(vS, "name"),
        yH = Ep && function() {}.name === "something",
        _H = Ep && (!Wd || Wd && vH(vS, "name").configurable),
        EH = {
            EXISTS: Ep,
            PROPER: yH,
            CONFIGURABLE: _H
        },
        bH = cr,
        TH = Or,
        Vd = yp,
        AH = bH(Function.toString);
    TH(Vd.inspectSource) || (Vd.inspectSource = function(e) {
        return AH(e)
    });
    var yS = Vd.inspectSource,
        SH = Fr,
        OH = Or,
        wH = yS,
        y_ = SH.WeakMap,
        CH = OH(y_) && /native code/.test(wH(y_)),
        IH = Fc.exports,
        $H = uS,
        __ = IH("keys"),
        _S = function(e) {
            return __[e] || (__[e] = $H(e))
        },
        bp = {},
        RH = CH,
        ES = Fr,
        Kf = cr,
        LH = ua,
        NH = _p,
        Hf = Ti,
        qf = yp,
        PH = _S,
        kH = bp,
        E_ = "Object already initialized",
        Kd = ES.TypeError,
        xH = ES.WeakMap,
        rc, so, nc, DH = function(e) {
            return nc(e) ? so(e) : rc(e, {})
        },
        MH = function(e) {
            return function(t) {
                var r;
                if (!LH(t) || (r = so(t)).type !== e) throw Kd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (RH || qf.state) {
        var Bi = qf.state || (qf.state = new xH),
            UH = Kf(Bi.get),
            b_ = Kf(Bi.has),
            FH = Kf(Bi.set);
        rc = function(e, t) {
            if (b_(Bi, e)) throw new Kd(E_);
            return t.facade = e, FH(Bi, e, t), t
        }, so = function(e) {
            return UH(Bi, e) || {}
        }, nc = function(e) {
            return b_(Bi, e)
        }
    } else {
        var Cs = PH("state");
        kH[Cs] = !0, rc = function(e, t) {
            if (Hf(e, Cs)) throw new Kd(E_);
            return t.facade = e, NH(e, Cs, t), t
        }, so = function(e) {
            return Hf(e, Cs) ? e[Cs] : {}
        }, nc = function(e) {
            return Hf(e, Cs)
        }
    }
    var bS = {
            set: rc,
            get: so,
            has: nc,
            enforce: DH,
            getterFor: MH
        },
        BH = Br,
        GH = Or,
        Sl = Ti,
        Hd = Ei,
        jH = EH.CONFIGURABLE,
        WH = yS,
        TS = bS,
        VH = TS.enforce,
        KH = TS.get,
        Ml = Object.defineProperty,
        HH = Hd && !BH(function() {
            return Ml(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        qH = String(String).split("String"),
        YH = mS.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Sl(e, "name") || jH && e.name !== t) && (Hd ? Ml(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), HH && r && Sl(r, "arity") && e.length !== r.arity && Ml(e, "length", {
                value: r.arity
            });
            try {
                r && Sl(r, "constructor") && r.constructor ? Hd && Ml(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = VH(e);
            return Sl(n, "source") || (n.source = qH.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = YH(function() {
        return GH(this) && KH(this).source || WH(this)
    }, "toString");
    var zH = Or,
        XH = vo,
        JH = mS.exports,
        QH = vp,
        AS = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                a = n.name !== void 0 ? n.name : t;
            if (zH(r) && JH(r, a, n), n.global) s ? e[t] = r : QH(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : XH.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        SS = {},
        ZH = Math.ceil,
        e4 = Math.floor,
        t4 = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? e4 : ZH)(r)
        },
        r4 = t4,
        Bc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : r4(t)
        },
        n4 = Bc,
        i4 = Math.max,
        s4 = Math.min,
        a4 = function(e, t) {
            var r = n4(e);
            return r < 0 ? i4(r + t, 0) : s4(r, t)
        },
        o4 = Bc,
        l4 = Math.min,
        OS = function(e) {
            return e > 0 ? l4(o4(e), 9007199254740991) : 0
        },
        c4 = OS,
        u4 = function(e) {
            return c4(e.length)
        },
        f4 = Mc,
        d4 = a4,
        h4 = u4,
        T_ = function(e) {
            return function(t, r, n) {
                var s = f4(t),
                    a = h4(s),
                    l = d4(n, a),
                    c;
                if (e && r != r) {
                    for (; a > l;)
                        if (c = s[l++], c != c) return !0
                } else
                    for (; a > l; l++)
                        if ((e || l in s) && s[l] === r) return e || l || 0;
                return !e && -1
            }
        },
        p4 = {
            includes: T_(!0),
            indexOf: T_(!1)
        },
        g4 = cr,
        Yf = Ti,
        m4 = Mc,
        v4 = p4.indexOf,
        y4 = bp,
        A_ = g4([].push),
        wS = function(e, t) {
            var r = m4(e),
                n = 0,
                s = [],
                a;
            for (a in r) !Yf(y4, a) && Yf(r, a) && A_(s, a);
            for (; t.length > n;) Yf(r, a = t[n++]) && (~v4(s, a) || A_(s, a));
            return s
        },
        Tp = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        _4 = wS,
        E4 = Tp,
        b4 = E4.concat("length", "prototype");
    SS.f = Object.getOwnPropertyNames || function(t) {
        return _4(t, b4)
    };
    var CS = {};
    CS.f = Object.getOwnPropertySymbols;
    var T4 = Uc,
        A4 = cr,
        S4 = SS,
        O4 = CS,
        w4 = us,
        C4 = A4([].concat),
        I4 = T4("Reflect", "ownKeys") || function(t) {
            var r = S4.f(w4(t)),
                n = O4.f;
            return n ? C4(r, n(t)) : r
        },
        S_ = Ti,
        $4 = I4,
        R4 = pp,
        L4 = vo,
        N4 = function(e, t, r) {
            for (var n = $4(t), s = L4.f, a = R4.f, l = 0; l < n.length; l++) {
                var c = n[l];
                !S_(e, c) && !(r && S_(r, c)) && s(e, c, a(t, c))
            }
        },
        P4 = Br,
        k4 = Or,
        x4 = /#|\.prototype\./,
        yo = function(e, t) {
            var r = M4[D4(e)];
            return r == F4 ? !0 : r == U4 ? !1 : k4(t) ? P4(t) : !!t
        },
        D4 = yo.normalize = function(e) {
            return String(e).replace(x4, ".").toLowerCase()
        },
        M4 = yo.data = {},
        U4 = yo.NATIVE = "N",
        F4 = yo.POLYFILL = "P",
        B4 = yo,
        zf = Fr,
        G4 = pp.f,
        j4 = _p,
        W4 = AS,
        V4 = vp,
        K4 = N4,
        H4 = B4,
        IS = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                a, l, c, f, d, p;
            if (n ? l = zf : s ? l = zf[r] || V4(r, {}) : l = (zf[r] || {}).prototype, l)
                for (c in t) {
                    if (d = t[c], e.dontCallGetSet ? (p = G4(l, c), f = p && p.value) : f = l[c], a = H4(n ? c : r + (s ? "." : "#") + c, e.forced), !a && f !== void 0) {
                        if (typeof d == typeof f) continue;
                        K4(d, f)
                    }(e.sham || f && f.sham) && j4(d, "sham", !0), W4(l, c, d, e)
                }
        },
        q4 = ua,
        Y4 = Dc,
        z4 = cs,
        X4 = z4("match"),
        J4 = function(e) {
            var t;
            return q4(e) && ((t = e[X4]) !== void 0 ? !!t : Y4(e) == "RegExp")
        },
        Q4 = cs,
        Z4 = Q4("toStringTag"),
        $S = {};
    $S[Z4] = "z";
    var e9 = String($S) === "[object z]",
        t9 = e9,
        r9 = Or,
        Ul = Dc,
        n9 = cs,
        i9 = n9("toStringTag"),
        s9 = Object,
        a9 = Ul(function() {
            return arguments
        }()) == "Arguments",
        o9 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        l9 = t9 ? Ul : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = o9(t = s9(e), i9)) == "string" ? r : a9 ? Ul(t) : (n = Ul(t)) == "Object" && r9(t.callee) ? "Arguments" : n
        },
        c9 = l9,
        u9 = String,
        Gc = function(e) {
            if (c9(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return u9(e)
        },
        f9 = us,
        RS = function() {
            var e = f9(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        d9 = bi,
        h9 = Ti,
        p9 = iS,
        g9 = RS,
        O_ = RegExp.prototype,
        m9 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in O_) && !h9(e, "flags") && p9(O_, e) ? d9(g9, e) : t
        },
        Ap = cr,
        v9 = cS,
        y9 = Math.floor,
        Xf = Ap("".charAt),
        _9 = Ap("".replace),
        Jf = Ap("".slice),
        E9 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        b9 = /\$([$&'`]|\d{1,2})/g,
        LS = function(e, t, r, n, s, a) {
            var l = r + e.length,
                c = n.length,
                f = b9;
            return s !== void 0 && (s = v9(s), f = E9), _9(a, f, function(d, p) {
                var y;
                switch (Xf(p, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Jf(t, 0, r);
                    case "'":
                        return Jf(t, l);
                    case "<":
                        y = s[Jf(p, 1, -1)];
                        break;
                    default:
                        var b = +p;
                        if (b === 0) return d;
                        if (b > c) {
                            var w = y9(b / 10);
                            return w === 0 ? d : w <= c ? n[w - 1] === void 0 ? Xf(p, 1) : n[w - 1] + Xf(p, 1) : d
                        }
                        y = n[b - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        T9 = IS,
        A9 = bi,
        Sp = cr,
        w_ = mo,
        S9 = Or,
        O9 = J4,
        Na = Gc,
        w9 = mp,
        C9 = m9,
        I9 = LS,
        $9 = cs,
        R9 = $9("replace"),
        L9 = TypeError,
        NS = Sp("".indexOf);
    Sp("".replace);
    var C_ = Sp("".slice),
        N9 = Math.max,
        I_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : NS(e, t, r)
        };
    T9({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = w_(this),
                s, a, l, c, f, d, p, y, b, w = 0,
                P = 0,
                M = "";
            if (t != null) {
                if (s = O9(t), s && (a = Na(w_(C9(t))), !~NS(a, "g"))) throw L9("`.replaceAll` does not allow non-global regexes");
                if (l = w9(t, R9), l) return A9(l, t, n, r)
            }
            for (c = Na(n), f = Na(t), d = S9(r), d || (r = Na(r)), p = f.length, y = N9(1, p), w = I_(c, f, 0); w !== -1;) b = d ? Na(r(f, w, c)) : I9(f, c, w, [], void 0, r), M += C_(c, P, w) + b, P = w + p, w = I_(c, f, w + y);
            return P < c.length && (M += C_(c, P)), M
        }
    });
    var Op = Br,
        P9 = Fr,
        wp = P9.RegExp,
        Cp = Op(function() {
            var e = wp("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        k9 = Cp || Op(function() {
            return !wp("a", "y").sticky
        }),
        x9 = Cp || Op(function() {
            var e = wp("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        D9 = {
            BROKEN_CARET: x9,
            MISSED_STICKY: k9,
            UNSUPPORTED_Y: Cp
        },
        PS = {},
        M9 = wS,
        U9 = Tp,
        F9 = Object.keys || function(t) {
            return M9(t, U9)
        },
        B9 = Ei,
        G9 = gS,
        j9 = vo,
        W9 = us,
        V9 = Mc,
        K9 = F9;
    PS.f = B9 && !G9 ? Object.defineProperties : function(t, r) {
        W9(t);
        for (var n = V9(r), s = K9(r), a = s.length, l = 0, c; a > l;) j9.f(t, c = s[l++], n[c]);
        return t
    };
    var H9 = Uc,
        q9 = H9("document", "documentElement"),
        Y9 = us,
        z9 = PS,
        $_ = Tp,
        X9 = bp,
        J9 = q9,
        Q9 = hS,
        Z9 = _S,
        R_ = ">",
        L_ = "<",
        qd = "prototype",
        Yd = "script",
        kS = Z9("IE_PROTO"),
        Qf = function() {},
        xS = function(e) {
            return L_ + Yd + R_ + e + L_ + "/" + Yd + R_
        },
        N_ = function(e) {
            e.write(xS("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        e6 = function() {
            var e = Q9("iframe"),
                t = "java" + Yd + ":",
                r;
            return e.style.display = "none", J9.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(xS("document.F=Object")), r.close(), r.F
        },
        Ol, Fl = function() {
            try {
                Ol = new ActiveXObject("htmlfile")
            } catch {}
            Fl = typeof document < "u" ? document.domain && Ol ? N_(Ol) : e6() : N_(Ol);
            for (var e = $_.length; e--;) delete Fl[qd][$_[e]];
            return Fl()
        };
    X9[kS] = !0;
    var t6 = Object.create || function(t, r) {
            var n;
            return t !== null ? (Qf[qd] = Y9(t), n = new Qf, Qf[qd] = null, n[kS] = t) : n = Fl(), r === void 0 ? n : z9.f(n, r)
        },
        r6 = Br,
        n6 = Fr,
        i6 = n6.RegExp,
        s6 = r6(function() {
            var e = i6(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        a6 = Br,
        o6 = Fr,
        l6 = o6.RegExp,
        c6 = a6(function() {
            var e = l6("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Ps = bi,
        jc = cr,
        u6 = Gc,
        f6 = RS,
        d6 = D9,
        h6 = Fc.exports,
        p6 = t6,
        g6 = bS.get,
        m6 = s6,
        v6 = c6,
        y6 = h6("native-string-replace", String.prototype.replace),
        ic = RegExp.prototype.exec,
        zd = ic,
        _6 = jc("".charAt),
        E6 = jc("".indexOf),
        b6 = jc("".replace),
        Zf = jc("".slice),
        Xd = function() {
            var e = /a/,
                t = /b*/g;
            return Ps(ic, e, "a"), Ps(ic, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        DS = d6.BROKEN_CARET,
        Jd = /()??/.exec("")[1] !== void 0,
        T6 = Xd || Jd || DS || m6 || v6;
    T6 && (zd = function(t) {
        var r = this,
            n = g6(r),
            s = u6(t),
            a = n.raw,
            l, c, f, d, p, y, b;
        if (a) return a.lastIndex = r.lastIndex, l = Ps(zd, a, s), r.lastIndex = a.lastIndex, l;
        var w = n.groups,
            P = DS && r.sticky,
            M = Ps(f6, r),
            G = r.source,
            C = 0,
            H = s;
        if (P && (M = b6(M, "y", ""), E6(M, "g") === -1 && (M += "g"), H = Zf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && _6(s, r.lastIndex - 1) !== `
`) && (G = "(?: " + G + ")", H = " " + H, C++), c = new RegExp("^(?:" + G + ")", M)), Jd && (c = new RegExp("^" + G + "$(?!\\s)", M)), Xd && (f = r.lastIndex), d = Ps(ic, P ? c : r, H), P ? d ? (d.input = Zf(d.input, C), d[0] = Zf(d[0], C), d.index = r.lastIndex, r.lastIndex += d[0].length) : r.lastIndex = 0 : Xd && d && (r.lastIndex = r.global ? d.index + d[0].length : f), Jd && d && d.length > 1 && Ps(y6, d[0], c, function() {
                for (p = 1; p < arguments.length - 2; p++) arguments[p] === void 0 && (d[p] = void 0)
            }), d && w)
            for (d.groups = y = p6(null), p = 0; p < w.length; p++) b = w[p], y[b[0]] = d[b[1]];
        return d
    });
    var Ip = zd,
        A6 = IS,
        P_ = Ip;
    A6({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== P_
    }, {
        exec: P_
    });
    var S6 = gp,
        MS = Function.prototype,
        k_ = MS.apply,
        x_ = MS.call,
        O6 = typeof Reflect == "object" && Reflect.apply || (S6 ? x_.bind(k_) : function() {
            return x_.apply(k_, arguments)
        }),
        D_ = cr,
        M_ = AS,
        w6 = Ip,
        U_ = Br,
        US = cs,
        C6 = _p,
        I6 = US("species"),
        ed = RegExp.prototype,
        $6 = function(e, t, r, n) {
            var s = US(e),
                a = !U_(function() {
                    var d = {};
                    return d[s] = function() {
                        return 7
                    }, "" [e](d) != 7
                }),
                l = a && !U_(function() {
                    var d = !1,
                        p = /a/;
                    return e === "split" && (p = {}, p.constructor = {}, p.constructor[I6] = function() {
                        return p
                    }, p.flags = "", p[s] = /./ [s]), p.exec = function() {
                        return d = !0, null
                    }, p[s](""), !d
                });
            if (!a || !l || r) {
                var c = D_(/./ [s]),
                    f = t(s, "" [e], function(d, p, y, b, w) {
                        var P = D_(d),
                            M = p.exec;
                        return M === w6 || M === ed.exec ? a && !w ? {
                            done: !0,
                            value: c(p, y, b)
                        } : {
                            done: !0,
                            value: P(y, p, b)
                        } : {
                            done: !1
                        }
                    });
                M_(String.prototype, e, f[0]), M_(ed, s, f[1])
            }
            n && C6(ed[s], "sham", !0)
        },
        $p = cr,
        R6 = Bc,
        L6 = Gc,
        N6 = mo,
        P6 = $p("".charAt),
        F_ = $p("".charCodeAt),
        k6 = $p("".slice),
        B_ = function(e) {
            return function(t, r) {
                var n = L6(N6(t)),
                    s = R6(r),
                    a = n.length,
                    l, c;
                return s < 0 || s >= a ? e ? "" : void 0 : (l = F_(n, s), l < 55296 || l > 56319 || s + 1 === a || (c = F_(n, s + 1)) < 56320 || c > 57343 ? e ? P6(n, s) : l : e ? k6(n, s, s + 2) : (l - 55296 << 10) + (c - 56320) + 65536)
            }
        },
        x6 = {
            codeAt: B_(!1),
            charAt: B_(!0)
        },
        D6 = x6.charAt,
        M6 = function(e, t, r) {
            return t + (r ? D6(e, t).length : 1)
        },
        G_ = bi,
        U6 = us,
        F6 = Or,
        B6 = Dc,
        G6 = Ip,
        j6 = TypeError,
        W6 = function(e, t) {
            var r = e.exec;
            if (F6(r)) {
                var n = G_(r, e, t);
                return n !== null && U6(n), n
            }
            if (B6(e) === "RegExp") return G_(G6, e, t);
            throw j6("RegExp#exec called on incompatible receiver")
        },
        V6 = O6,
        j_ = bi,
        Wc = cr,
        K6 = $6,
        H6 = Br,
        q6 = us,
        Y6 = Or,
        z6 = Bc,
        X6 = OS,
        Is = Gc,
        J6 = mo,
        Q6 = M6,
        Z6 = mp,
        e5 = LS,
        t5 = W6,
        r5 = cs,
        Qd = r5("replace"),
        n5 = Math.max,
        i5 = Math.min,
        s5 = Wc([].concat),
        td = Wc([].push),
        W_ = Wc("".indexOf),
        V_ = Wc("".slice),
        a5 = function(e) {
            return e === void 0 ? e : String(e)
        },
        o5 = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        K_ = function() {
            return /./ [Qd] ? /./ [Qd]("a", "$0") === "" : !1
        }(),
        l5 = !H6(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    K6("replace", function(e, t, r) {
        var n = K_ ? "$" : "$0";
        return [function(a, l) {
            var c = J6(this),
                f = a == null ? void 0 : Z6(a, Qd);
            return f ? j_(f, a, c, l) : j_(t, Is(c), a, l)
        }, function(s, a) {
            var l = q6(this),
                c = Is(s);
            if (typeof a == "string" && W_(a, n) === -1 && W_(a, "$<") === -1) {
                var f = r(t, l, c, a);
                if (f.done) return f.value
            }
            var d = Y6(a);
            d || (a = Is(a));
            var p = l.global;
            if (p) {
                var y = l.unicode;
                l.lastIndex = 0
            }
            for (var b = [];;) {
                var w = t5(l, c);
                if (w === null || (td(b, w), !p)) break;
                var P = Is(w[0]);
                P === "" && (l.lastIndex = Q6(c, X6(l.lastIndex), y))
            }
            for (var M = "", G = 0, C = 0; C < b.length; C++) {
                w = b[C];
                for (var H = Is(w[0]), z = n5(i5(z6(w.index), c.length), 0), V = [], j = 1; j < w.length; j++) td(V, a5(w[j]));
                var Q = w.groups;
                if (d) {
                    var oe = s5([H], V, z, c);
                    Q !== void 0 && td(oe, Q);
                    var le = Is(V6(a, void 0, oe))
                } else le = e5(H, c, z, V, Q, a);
                z >= G && (M += V_(c, G, z) + le, G = z + H.length)
            }
            return M + V_(c, G)
        }]
    }, !l5 || !o5 || K_);
    var c5 = Fr,
        u5 = cr,
        f5 = function(e, t) {
            return u5(c5[e].prototype[t])
        },
        d5 = f5,
        h5 = d5("String", "replaceAll"),
        p5 = h5,
        g5 = p5,
        m5 = g5,
        v5 = m5,
        y5 = v5,
        _5 = y5;
    (function(e) {
        e.exports = _5
    })(NV);
    const E5 = rt({
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
                this.autosize && XA(this.$refs.textarea)
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
        }),
        b5 = ["value"];

    function T5(e, t, r, n, s, a) {
        return F(), W("textarea", {
            ref: "textarea",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l)),
            onKeypress: t[1] || (t[1] = zs((...l) => e.onKeypressEnter && e.onKeypressEnter(...l), ["enter"]))
        }, null, 40, b5)
    }
    const FS = ot(E5, [
        ["render", T5]
    ]);
    rt({
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
        Vc = {},
        BS = {},
        Kc = {},
        Rp = {};
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Token = void 0;
        var t = function() {
            function r(n, s, a, l) {
                this.type = n, this.content = s, this.attributes = a, this.text = l
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
    Object.defineProperty(Kc, "__esModule", {
        value: !0
    });
    Kc.Tokenizer = void 0;
    var ri = Rp,
        A5 = function() {
            function e(t) {
                this.tags = t
            }
            return e.prototype.tokenizeString = function(t) {
                var r = this,
                    n = this.getTokens(t),
                    s = [],
                    a = !1,
                    l = "",
                    c = "";
                return n.forEach(function(f) {
                    var d = r.tags[f.content],
                        p = !0;
                    !d && !a ? f.convertToTextToken() : a ? f.type === ri.Token.Type.endTag && f.content === l ? (a = !1, s.push(e.createTextToken(c))) : (f.convertToTextToken(), c += f.content, p = !1) : d.noNesting && f.type === ri.Token.Type.startTag && (a = !0, l = f.content, c = ""), p && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], a = n.exec(t), l = 0; a;) {
                    var c = a.index - l;
                    c > 0 && s.push(e.createTextToken(t.substr(l, c))), s.push(e.createTagToken(a)), l = n.lastIndex, a = n.exec(t)
                }
                var f = t.length - l;
                return f > 0 && s.push(e.createTextToken(t.substr(l, f))), s
            }, e.createTextToken = function(t) {
                return new ri.Token(ri.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), a = t[0].substr(1 + r.length, t[0].length - 2 - r.length), l = s.exec(a); l;) l[1] ? n[l[1]] = l[3] : n[r] = l[3], l = s.exec(a);
                    return new ri.Token(ri.Token.Type.startTag, r, n, t[0])
                }
                return new ri.Token(ri.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    Kc.Tokenizer = A5;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = Kc,
            r = Rp,
            n = function() {
                function s(a) {
                    this.subTrees = [], this.type = a.type, this.content = a.content, a.attributes && (this.attributes = a.attributes), a.subTrees && (this.subTrees = a.subTrees)
                }
                return Object.defineProperty(s.prototype, "isValid", {
                    get: function() {
                        return this.subTrees.length ? this.subTrees.every(function(a) {
                            return a.isValid
                        }) : !0
                    },
                    enumerable: !1,
                    configurable: !0
                }), s.prototype.toString = function() {
                    return this.type + " - " + this.content
                }, s.buildTree = function(a, l) {
                    var c = new t.Tokenizer(l),
                        f = c.tokenizeString(a),
                        d = new s({
                            type: s.Type.root,
                            content: a
                        });
                    return this.buildTreeFromTokens(d, f.reverse())
                }, s.buildTreeFromTokens = function(a, l, c) {
                    if (c === void 0 && (c = ""), !a) return null;
                    if (!l.length) return a;
                    var f = l.pop();
                    if (!f) return null;
                    if (f.type === r.Token.Type.text) {
                        var d = new s({
                            type: s.Type.text,
                            content: f.content
                        });
                        a.subTrees.push(d)
                    }
                    if (f.type === r.Token.Type.startTag) {
                        var p = f.content,
                            d = new s({
                                type: s.Type.tag,
                                content: p,
                                attributes: f.attributes
                            }),
                            y = s.buildTreeFromTokens(d, l, p);
                        if (!y) return null;
                        a.subTrees.push(y)
                    }
                    if (f.type === r.Token.Type.endTag) {
                        var p = f.content;
                        return p === c ? a : null
                    }
                    return !l.length && c !== "" ? null : this.buildTreeFromTokens(a, l, c)
                }, s
            }();
        e.ParseTree = n,
            function(s) {
                (function(a) {
                    a[a.root = 0] = "root", a[a.text = 1] = "text", a[a.tag = 2] = "tag"
                })(s.Type || (s.Type = {}))
            }(n = e.ParseTree || (e.ParseTree = {})), e.ParseTree = n
    })(BS);
    var _o = {};
    Object.defineProperty(_o, "__esModule", {
        value: !0
    });
    _o.Tag = void 0;
    var S5 = function() {
        function e(t) {
            var r;
            this.tagName = t.tagName, this.insertLineBreaks = t.insertLineBreaks, this.suppressLineBreaks = t.suppressLineBreaks, this.noNesting = t.noNesting, this.markupGenerator = (r = t.markupGenerator) !== null && r !== void 0 ? r : function(n, s) {
                return "<" + n.tagName + ">" + s + "</" + n.tagName + ">"
            }
        }
        return e.create = function(t, r, n) {
            var s, a, l;
            return n === void 0 && (n = {}), new e({
                tagName: t,
                insertLineBreaks: (s = n.insertLineBreaks) !== null && s !== void 0 ? s : !0,
                suppressLineBreaks: (a = n.suppressLineBreaks) !== null && a !== void 0 ? a : !1,
                noNesting: (l = n.noNesting) !== null && l !== void 0 ? l : !1,
                markupGenerator: r
            })
        }, e
    }();
    _o.Tag = S5;
    Object.defineProperty(Vc, "__esModule", {
        value: !0
    });
    Vc.BBCodeParser = void 0;
    var H_ = BS,
        q_ = _o,
        O5 = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: q_.Tag.create("b"),
                        i: q_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var a = H_.ParseTree.buildTree(t, this.tags);
                return !a || !a.isValid ? t : this.treeToHtml(a.subTrees, n, s, r)
            }, e.prototype.addTag = function(t, r) {
                this.tags[t] = r
            }, e.prototype.treeToHtml = function(t, r, n, s) {
                var a = this;
                s === void 0 && (s = !1);
                var l = "",
                    c = !1;
                return t.forEach(function(f) {
                    var d;
                    if (f.type === H_.ParseTree.Type.text) {
                        var p = f.content;
                        n && (p = a.escapeHTML ? e.escapeHTML(p) : p), r && !c && (p = p.replace(/(\r\n|\n|\r)/gm, "<br>"), c = !1), l += p
                    } else {
                        var y = a.tags[f.content],
                            b = a.treeToHtml(f.subTrees, y.insertLineBreaks, n, s);
                        s ? l += b : l += y.markupGenerator(y, b, (d = f.attributes) !== null && d !== void 0 ? d : {}), c = y.suppressLineBreaks
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
    Vc.BBCodeParser = O5;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Tag = e.BBCodeParser = void 0;
        var t = Vc;
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
    const w5 = {
        install: e => {
            const t = {
                section: Wi.Tag.create("section", (a, l, {
                    section: c
                }) => `<div ${c?`class="section ${c}"`:'class="section"'}>${l}</div>`)
            };
            ["b", "bold", "B"].forEach(a => {
                t[a] = Wi.Tag.create(a, (l, c) => `<strong>${c}</strong>`)
            }), ["i", "italic", "I"].forEach(a => {
                t[a] = Wi.Tag.create(a, (l, c) => `<em>${c}</em>`)
            });
            const s = new Wi.BBCodeParser(t);
            e.directive("bb", {
                mounted(a, l) {
                    const c = document.createElement("div");
                    c.textContent = l.value, a.innerHTML = s.parse(c.innerHTML)
                },
                updated(a, l) {
                    const c = document.createElement("div");
                    c.textContent = l.value, a.innerHTML = s.parse(c.innerHTML)
                }
            }), e.mixin({
                beforeCreate() {
                    !this.$options.bb || Object.keys(this.$options.bb).forEach(a => {
                        const l = this.$options.bb[a];
                        if (l instanceof Function) {
                            s.addTag(a, Wi.Tag.create(a, l));
                            return
                        }
                        s.addTag(a, Wi.Tag.create(a, l.generator, l.options))
                    })
                }
            }), e.config.globalProperties.$bb = a => (typeof a != "string" && console.warn(`[BBCodePlugin] Received unexpected ${typeof a} with value ${a};converting to string before parsing.`), s.parse(String(a)))
        }
    };
    var GS = {
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
                a = t;
            a.getNumberOfInstance = function() {
                return a._numberOfInstance
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
                var c;
                l.touches.length === 1 && s.capture === !0 && (c = l.touches[0], s.stopX = c.pageX, s.stopY = c.pageY, s.tap = !1, s.capture = !1, s.checkIfCodeGestureIsValid())
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
                    c = Math.abs(s.startY - s.stopY),
                    f = s.startX - s.stopX < 0 ? "rt" : "lt",
                    d = s.startY - s.stopY < 0 ? "dn" : "up",
                    p = l > c ? f : d;
                p = s.tap === !0 ? "tp" : p, p === s.konamiCodeGesture.substr(0, 2) ? s.konamiCodeGesture = s.konamiCodeGesture.substr(2, s.konamiCodeGesture.length - 2) : s.konamiCodeGesture = s.originalCodeGesture, s.konamiCodeGesture.length === 0 && (s.konamiCodeGesture = s.originalCodeGesture, s.afterCodeSequenceCallback(n))
            }, s.checkDebugMode = function(l) {
                l && l.debug === !0 ? (s.debug = function(c, f) {
                    f !== void 0 ? console.log(c, f) : console.log(c)
                }, s.debug && s.debug("Debug Mode On.")) : s.debug = !1
            }, s.initOptions = function(l) {
                s.checkDebugMode(l), s.listener = l && l.listener || document, s.afterCodeSequenceCallback = typeof l == "function" && l || l && typeof l.callback == "function" && l.callback || s.defaultCallback
            }, s.init = function() {
                s.input = "", s.konamiCodeChar = "38384040373937396665", s.konamiCodeGesture = "upupdndnltrtltrttptp", s.startX = 0, s.startY = 0, s.stopX = 0, s.stopY = 0, s.tap = !1, s.capture = !1, a._numberOfInstance = a._numberOfInstance ? a._numberOfInstance + 1 : 1, s.initOptions(r), s.listenCodeCharSequence(), s.listenCodeGestureSequence()
            }, s.init()
        })
    })(GS);
    const C5 = GS.exports,
        I5 = rt({
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
        Wn = e => (yc("data-v-220ec4c0"), e = e(), _c(), e),
        $5 = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        R5 = {
            key: 0,
            class: "power-nav"
        },
        L5 = Wn(() => X("p", null, "MARKERS", -1)),
        N5 = ["onClick"],
        P5 = Mr("KILL"),
        k5 = Wn(() => X("br", null, null, -1)),
        x5 = Mr("ROOM"),
        D5 = [P5, k5, x5],
        M5 = Wn(() => X("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        U5 = {
            key: 1,
            class: "title focused"
        },
        F5 = {
            key: 2,
            class: "title focused"
        },
        B5 = Wn(() => X("svg", {
            viewBox: "0 0 20 10"
        }, [X("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        G5 = Wn(() => X("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        j5 = [B5, G5],
        W5 = Wn(() => X("svg", {
            viewBox: "0 0 60 50"
        }, [X("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), X("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        V5 = Wn(() => X("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        K5 = [W5, V5],
        H5 = Wn(() => X("svg", {
            viewBox: "0 0 60 50"
        }, [X("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), X("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        q5 = Wn(() => X("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        Y5 = [H5, q5];

    function z5(e, t, r, n, s, a) {
        return e.replayer ? (F(), W("div", $5, [e.showPowerNav ? (F(), W("div", R5, [X("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), L5, X("ul", null, [(F(!0), W(qe, null, hn(e.replayer.markerMap, (l, c) => (F(), W("li", {
            key: c,
            class: Ve({
                active: c === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(c)
        }, Me(l[1].marker), 11, N5))), 128))]), X("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, D5), X("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : ve("", !0), M5, e.replayer.markerMap.length ? (F(), W("p", F5, Me(e.replayer.currentMarkerItemIndex) + " : " + Me(e.replayer.currentMarkerItem[1].marker) + " (" + Me(e.replayer.currentEntityItemIndex) + ") ", 1)) : (F(), W("p", U5, "Item #" + Me(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? ve("", !0) : (F(), W("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, j5)), X("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, K5), X("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, Y5)], 512)) : ve("", !0)
    }
    const X5 = ot(I5, [
        ["render", z5],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function J5(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var Q5 = J5,
        Z5 = AT,
        eq = Z5(Object.keys, Object),
        tq = eq,
        rq = qh,
        nq = tq,
        iq = Object.prototype,
        sq = iq.hasOwnProperty;

    function aq(e) {
        if (!rq(e)) return nq(e);
        var t = [];
        for (var r in Object(e)) sq.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var oq = aq,
        lq = LT,
        cq = oq,
        uq = Nc;

    function fq(e) {
        return uq(e) ? lq(e) : cq(e)
    }
    var Hc = fq,
        dq = fo,
        hq = Hc;

    function pq(e, t) {
        return e && dq(t, hq(t), e)
    }
    var gq = pq,
        mq = fo,
        vq = ho;

    function yq(e, t) {
        return e && mq(t, vq(t), e)
    }
    var _q = yq;

    function Eq(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, a = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (a[s++] = l)
        }
        return a
    }
    var bq = Eq;

    function Tq() {
        return []
    }
    var jS = Tq,
        Aq = bq,
        Sq = jS,
        Oq = Object.prototype,
        wq = Oq.propertyIsEnumerable,
        Y_ = Object.getOwnPropertySymbols,
        Cq = Y_ ? function(e) {
            return e == null ? [] : (e = Object(e), Aq(Y_(e), function(t) {
                return wq.call(e, t)
            }))
        } : Sq,
        Lp = Cq,
        Iq = fo,
        $q = Lp;

    function Rq(e, t) {
        return Iq(e, $q(e), t)
    }
    var Lq = Rq;

    function Nq(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var WS = Nq,
        Pq = WS,
        kq = Hh,
        xq = Lp,
        Dq = jS,
        Mq = Object.getOwnPropertySymbols,
        Uq = Mq ? function(e) {
            for (var t = []; e;) Pq(t, xq(e)), e = kq(e);
            return t
        } : Dq,
        VS = Uq,
        Fq = fo,
        Bq = VS;

    function Gq(e, t) {
        return Fq(e, Bq(e), t)
    }
    var jq = Gq,
        Wq = WS,
        Vq = yi;

    function Kq(e, t, r) {
        var n = t(e);
        return Vq(e) ? n : Wq(n, r(e))
    }
    var KS = Kq,
        Hq = KS,
        qq = Lp,
        Yq = Hc;

    function zq(e) {
        return Hq(e, Yq, qq)
    }
    var Xq = zq,
        Jq = KS,
        Qq = VS,
        Zq = ho;

    function eY(e) {
        return Jq(e, Zq, Qq)
    }
    var tY = eY,
        rY = ls,
        nY = pn,
        iY = rY(nY, "DataView"),
        sY = iY,
        aY = ls,
        oY = pn,
        lY = aY(oY, "Promise"),
        cY = lY,
        uY = ls,
        fY = pn,
        dY = uY(fY, "Set"),
        hY = dY,
        pY = ls,
        gY = pn,
        mY = pY(gY, "WeakMap"),
        vY = mY,
        Zd = sY,
        eh = Wh,
        th = cY,
        rh = hY,
        nh = vY,
        HS = sa,
        fa = mT,
        z_ = "[object Map]",
        yY = "[object Object]",
        X_ = "[object Promise]",
        J_ = "[object Set]",
        Q_ = "[object WeakMap]",
        Z_ = "[object DataView]",
        _Y = fa(Zd),
        EY = fa(eh),
        bY = fa(th),
        TY = fa(rh),
        AY = fa(nh),
        Vi = HS;
    (Zd && Vi(new Zd(new ArrayBuffer(1))) != Z_ || eh && Vi(new eh) != z_ || th && Vi(th.resolve()) != X_ || rh && Vi(new rh) != J_ || nh && Vi(new nh) != Q_) && (Vi = function(e) {
        var t = HS(e),
            r = t == yY ? e.constructor : void 0,
            n = r ? fa(r) : "";
        if (n) switch (n) {
            case _Y:
                return Z_;
            case EY:
                return z_;
            case bY:
                return X_;
            case TY:
                return J_;
            case AY:
                return Q_
        }
        return t
    });
    var Np = Vi,
        SY = Object.prototype,
        OY = SY.hasOwnProperty;

    function wY(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && OY.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var CY = wY,
        IY = Kh;

    function $Y(e, t) {
        var r = t ? IY(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var RY = $Y,
        LY = /\w*$/;

    function NY(e) {
        var t = new e.constructor(e.source, LY.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var PY = NY,
        eE = $c,
        tE = eE ? eE.prototype : void 0,
        rE = tE ? tE.valueOf : void 0;

    function kY(e) {
        return rE ? Object(rE.call(e)) : {}
    }
    var xY = kY,
        DY = Kh,
        MY = RY,
        UY = PY,
        FY = xY,
        BY = bT,
        GY = "[object Boolean]",
        jY = "[object Date]",
        WY = "[object Map]",
        VY = "[object Number]",
        KY = "[object RegExp]",
        HY = "[object Set]",
        qY = "[object String]",
        YY = "[object Symbol]",
        zY = "[object ArrayBuffer]",
        XY = "[object DataView]",
        JY = "[object Float32Array]",
        QY = "[object Float64Array]",
        ZY = "[object Int8Array]",
        e7 = "[object Int16Array]",
        t7 = "[object Int32Array]",
        r7 = "[object Uint8Array]",
        n7 = "[object Uint8ClampedArray]",
        i7 = "[object Uint16Array]",
        s7 = "[object Uint32Array]";

    function a7(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case zY:
                return DY(e);
            case GY:
            case jY:
                return new n(+e);
            case XY:
                return MY(e, r);
            case JY:
            case QY:
            case ZY:
            case e7:
            case t7:
            case r7:
            case n7:
            case i7:
            case s7:
                return BY(e, r);
            case WY:
                return new n;
            case VY:
            case qY:
                return new n(e);
            case KY:
                return UY(e);
            case HY:
                return new n;
            case YY:
                return FY(e)
        }
    }
    var o7 = a7,
        l7 = Np,
        c7 = vi,
        u7 = "[object Map]";

    function f7(e) {
        return c7(e) && l7(e) == u7
    }
    var d7 = f7,
        h7 = d7,
        p7 = Yh,
        nE = no.exports,
        iE = nE && nE.isMap,
        g7 = iE ? p7(iE) : h7,
        m7 = g7,
        v7 = Np,
        y7 = vi,
        _7 = "[object Set]";

    function E7(e) {
        return y7(e) && v7(e) == _7
    }
    var b7 = E7,
        T7 = b7,
        A7 = Yh,
        sE = no.exports,
        aE = sE && sE.isSet,
        S7 = aE ? A7(aE) : T7,
        O7 = S7,
        w7 = yT,
        C7 = Q5,
        I7 = zh,
        $7 = gq,
        R7 = _q,
        L7 = Xl.exports,
        N7 = TT,
        P7 = Lq,
        k7 = jq,
        x7 = Xq,
        D7 = tY,
        M7 = Np,
        U7 = CY,
        F7 = o7,
        B7 = ST,
        G7 = yi,
        j7 = ro.exports,
        W7 = m7,
        V7 = gn,
        K7 = O7,
        H7 = Hc,
        q7 = ho,
        Y7 = 1,
        z7 = 2,
        X7 = 4,
        qS = "[object Arguments]",
        J7 = "[object Array]",
        Q7 = "[object Boolean]",
        Z7 = "[object Date]",
        ez = "[object Error]",
        YS = "[object Function]",
        tz = "[object GeneratorFunction]",
        rz = "[object Map]",
        nz = "[object Number]",
        zS = "[object Object]",
        iz = "[object RegExp]",
        sz = "[object Set]",
        az = "[object String]",
        oz = "[object Symbol]",
        lz = "[object WeakMap]",
        cz = "[object ArrayBuffer]",
        uz = "[object DataView]",
        fz = "[object Float32Array]",
        dz = "[object Float64Array]",
        hz = "[object Int8Array]",
        pz = "[object Int16Array]",
        gz = "[object Int32Array]",
        mz = "[object Uint8Array]",
        vz = "[object Uint8ClampedArray]",
        yz = "[object Uint16Array]",
        _z = "[object Uint32Array]",
        _t = {};
    _t[qS] = _t[J7] = _t[cz] = _t[uz] = _t[Q7] = _t[Z7] = _t[fz] = _t[dz] = _t[hz] = _t[pz] = _t[gz] = _t[rz] = _t[nz] = _t[zS] = _t[iz] = _t[sz] = _t[az] = _t[oz] = _t[mz] = _t[vz] = _t[yz] = _t[_z] = !0;
    _t[ez] = _t[YS] = _t[lz] = !1;

    function Bl(e, t, r, n, s, a) {
        var l, c = t & Y7,
            f = t & z7,
            d = t & X7;
        if (r && (l = s ? r(e, n, s, a) : r(e)), l !== void 0) return l;
        if (!V7(e)) return e;
        var p = G7(e);
        if (p) {
            if (l = U7(e), !c) return N7(e, l)
        } else {
            var y = M7(e),
                b = y == YS || y == tz;
            if (j7(e)) return L7(e, c);
            if (y == zS || y == qS || b && !s) {
                if (l = f || b ? {} : B7(e), !c) return f ? k7(e, R7(l, e)) : P7(e, $7(l, e))
            } else {
                if (!_t[y]) return s ? e : {};
                l = F7(e, y, c)
            }
        }
        a || (a = new w7);
        var w = a.get(e);
        if (w) return w;
        a.set(e, l), K7(e) ? e.forEach(function(G) {
            l.add(Bl(G, t, r, G, e, a))
        }) : W7(e) && e.forEach(function(G, C) {
            l.set(C, Bl(G, t, r, C, e, a))
        });
        var P = d ? f ? D7 : x7 : f ? q7 : H7,
            M = p ? void 0 : P(e);
        return C7(M || e, function(G, C) {
            M && (C = G, G = e[C]), I7(l, C, Bl(G, t, r, C, e, a))
        }), l
    }
    var Ez = Bl,
        bz = Ez,
        Tz = 1,
        Az = 4;

    function Sz(e) {
        return bz(e, Tz | Az)
    }
    var XS = Sz;
    const Oz = rt({
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
                !e || (this.values = XS(this.$ecastValues), this.content = (n = t_.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await t_.send({
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
        JS = "main/tjsp/quiplash3/assets/ad9172fc.png",
        QS = "main/tjsp/quiplash3/assets/dc131b16.png",
        wz = "main/tjsp/quiplash3/assets/38715b18.png",
        Cz = "main/tjsp/quiplash3/assets/b0d7c822.png",
        Iz = "main/tjsp/quiplash3/assets/06150f24.png",
        Zr = e => (yc("data-v-2c53389f"), e = e(), _c(), e),
        $z = {
            class: "jbg"
        },
        Rz = {
            key: 0,
            class: "options"
        },
        Lz = Zr(() => X("img", {
            src: JS,
            alt: "Leave Feedback"
        }, null, -1)),
        Nz = Zr(() => X("span", null, [Mr("LEAVE"), X("br"), Mr("FEEDBACK")], -1)),
        Pz = [Lz, Nz],
        kz = Zr(() => X("img", {
            src: QS,
            alt: "Send Debug"
        }, null, -1)),
        xz = Zr(() => X("span", null, [Mr("SEND A"), X("br"), Mr("DEBUG")], -1)),
        Dz = [kz, xz],
        Mz = {
            key: 1,
            class: "feedback"
        },
        Uz = Zr(() => X("img", {
            class: "image",
            src: JS,
            alt: "Feedback"
        }, null, -1)),
        Fz = Zr(() => X("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        Bz = Zr(() => X("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        Gz = {
            class: "buttons"
        },
        jz = Zr(() => X("img", {
            src: wz,
            alt: "good"
        }, null, -1)),
        Wz = [jz],
        Vz = Zr(() => X("img", {
            src: Cz,
            alt: "good"
        }, null, -1)),
        Kz = [Vz],
        Hz = Zr(() => X("img", {
            src: Iz,
            alt: "bad"
        }, null, -1)),
        qz = [Hz],
        Yz = {
            class: "actions"
        },
        zz = {
            key: 0,
            class: "content-guess"
        },
        Xz = Mr("Feedback is about: "),
        Jz = {
            key: 2,
            class: "debug"
        },
        Qz = Zr(() => X("img", {
            class: "image",
            src: QS,
            alt: "Debug"
        }, null, -1)),
        Zz = Zr(() => X("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        eX = {
            class: "actions"
        };

    function tX(e, t, r, n, s, a) {
        return F(), W("div", $z, [e.screen === "options" ? (F(), W("div", Rz, [X("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, Pz), X("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, Dz)])) : e.screen === "feedback" ? (F(), W("div", Mz, [Uz, Fz, X("div", {
            class: Ve(["vibes", {
                "has-selected": e.vibe
            }])
        }, [Bz, X("div", Gz, [X("button", {
            class: Ve({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, Wz, 2), X("button", {
            class: Ve({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, Kz, 2), X("button", {
            class: Ve({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, qz, 2)])], 2), X("div", Yz, [e.content ? (F(), W("div", zz, [Se(X("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [dT, e.isContent]
        ]), X("span", null, [Xz, X("em", null, Me(e.content), 1)])])) : ve("", !0), Se(X("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [ly, e.message]
        ]), X("button", {
            onClick: t[7] || (t[7] = ze((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, Me(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (F(), W("div", Jz, [Qz, Zz, X("div", eX, [Se(X("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [ly, e.message]
        ]), X("button", {
            onClick: t[9] || (t[9] = ze((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, Me(e.$t("ACTION.OK")), 1)])])) : ve("", !0)])
    }
    const ZS = ot(Oz, [
        ["render", tX],
        ["__scopeId", "data-v-2c53389f"]
    ]);
    rt({
        methods: {
            onFeedbackClick() {
                this.$showModal(ZS)
            }
        }
    });
    const rX = {
        install: (e, t) => {
            if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                if (t.replayer) {
                    e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", X5);
                    return
                }
                if (e.config.globalProperties.$debugRecorder = new K3(t.client, t.room), !e.config.globalProperties.$showModal) {
                    console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                    return
                }
                new C5(() => {
                    e.config.globalProperties.$showModal(ZS)
                })
            }
        }
    };
    var nX = pn,
        iX = function() {
            return nX.Date.now()
        },
        sX = iX,
        aX = /\s/;

    function oX(e) {
        for (var t = e.length; t-- && aX.test(e.charAt(t)););
        return t
    }
    var lX = oX,
        cX = lX,
        uX = /^\s+/;

    function fX(e) {
        return e && e.slice(0, cX(e) + 1).replace(uX, "")
    }
    var dX = fX,
        hX = sa,
        pX = vi,
        gX = "[object Symbol]";

    function mX(e) {
        return typeof e == "symbol" || pX(e) && hX(e) == gX
    }
    var qc = mX,
        vX = dX,
        oE = gn,
        yX = qc,
        lE = 0 / 0,
        _X = /^[-+]0x[0-9a-f]+$/i,
        EX = /^0b[01]+$/i,
        bX = /^0o[0-7]+$/i,
        TX = parseInt;

    function AX(e) {
        if (typeof e == "number") return e;
        if (yX(e)) return lE;
        if (oE(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = oE(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = vX(e);
        var r = EX.test(e);
        return r || bX.test(e) ? TX(e.slice(2), r ? 2 : 8) : _X.test(e) ? lE : +e
    }
    var SX = AX,
        OX = gn,
        rd = sX,
        cE = SX,
        wX = "Expected a function",
        CX = Math.max,
        IX = Math.min;

    function $X(e, t, r) {
        var n, s, a, l, c, f, d = 0,
            p = !1,
            y = !1,
            b = !0;
        if (typeof e != "function") throw new TypeError(wX);
        t = cE(t) || 0, OX(r) && (p = !!r.leading, y = "maxWait" in r, a = y ? CX(cE(r.maxWait) || 0, t) : a, b = "trailing" in r ? !!r.trailing : b);

        function w(Q) {
            var oe = n,
                le = s;
            return n = s = void 0, d = Q, l = e.apply(le, oe), l
        }

        function P(Q) {
            return d = Q, c = setTimeout(C, t), p ? w(Q) : l
        }

        function M(Q) {
            var oe = Q - f,
                le = Q - d,
                ue = t - oe;
            return y ? IX(ue, a - le) : ue
        }

        function G(Q) {
            var oe = Q - f,
                le = Q - d;
            return f === void 0 || oe >= t || oe < 0 || y && le >= a
        }

        function C() {
            var Q = rd();
            if (G(Q)) return H(Q);
            c = setTimeout(C, M(Q))
        }

        function H(Q) {
            return c = void 0, b && n ? w(Q) : (n = s = void 0, l)
        }

        function z() {
            c !== void 0 && clearTimeout(c), d = 0, n = f = s = c = void 0
        }

        function V() {
            return c === void 0 ? l : H(rd())
        }

        function j() {
            var Q = rd(),
                oe = G(Q);
            if (n = arguments, s = this, f = Q, oe) {
                if (c === void 0) return P(f);
                if (y) return clearTimeout(c), c = setTimeout(C, t), w(f)
            }
            return c === void 0 && (c = setTimeout(C, t)), l
        }
        return j.cancel = z, j.flush = V, j
    }
    var RX = $X,
        LX = yi,
        NX = qc,
        PX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        kX = /^\w*$/;

    function xX(e, t) {
        if (LX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || NX(e) ? !0 : kX.test(e) || !PX.test(e) || t != null && e in Object(t)
    }
    var DX = xX,
        eO = vT,
        MX = "Expected a function";

    function Pp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(MX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                a = r.cache;
            if (a.has(s)) return a.get(s);
            var l = e.apply(this, n);
            return r.cache = a.set(s, l) || a, l
        };
        return r.cache = new(Pp.Cache || eO), r
    }
    Pp.Cache = eO;
    var UX = Pp,
        FX = UX,
        BX = 500;

    function GX(e) {
        var t = FX(e, function(n) {
                return r.size === BX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var jX = GX,
        WX = jX,
        VX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        KX = /\\(\\)?/g,
        HX = WX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(VX, function(r, n, s, a) {
                t.push(s ? a.replace(KX, "$1") : n || r)
            }), t
        }),
        qX = HX;

    function YX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var tO = YX,
        uE = $c,
        zX = tO,
        XX = yi,
        JX = qc,
        QX = 1 / 0,
        fE = uE ? uE.prototype : void 0,
        dE = fE ? fE.toString : void 0;

    function rO(e) {
        if (typeof e == "string") return e;
        if (XX(e)) return zX(e, rO) + "";
        if (JX(e)) return dE ? dE.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -QX ? "-0" : t
    }
    var ZX = rO,
        eJ = ZX;

    function tJ(e) {
        return e == null ? "" : eJ(e)
    }
    var rJ = tJ,
        nJ = yi,
        iJ = DX,
        sJ = qX,
        aJ = rJ;

    function oJ(e, t) {
        return nJ(e) ? e : iJ(e, t) ? [e] : sJ(aJ(e))
    }
    var nO = oJ,
        lJ = qc,
        cJ = 1 / 0;

    function uJ(e) {
        if (typeof e == "string" || lJ(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -cJ ? "-0" : t
    }
    var iO = uJ,
        fJ = zh,
        dJ = nO,
        hJ = Xh,
        hE = gn,
        pJ = iO;

    function gJ(e, t, r, n) {
        if (!hE(e)) return e;
        t = dJ(t, e);
        for (var s = -1, a = t.length, l = a - 1, c = e; c != null && ++s < a;) {
            var f = pJ(t[s]),
                d = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var p = c[f];
                d = n ? n(p, f, c) : void 0, d === void 0 && (d = hE(p) ? p : hJ(t[s + 1]) ? [] : {})
            }
            fJ(c, f, d), c = c[f]
        }
        return e
    }
    var mJ = gJ,
        vJ = mJ;

    function yJ(e, t, r) {
        return e == null ? e : vJ(e, t, r)
    }
    var _J = yJ;
    class EJ {
        constructor() {
            ge(this, "wsClient");
            ge(this, "keyMap");
            ge(this, "providerMap");
            ge(this, "mappedValues", Gn({}));
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
            ge(this, "sync", RX(() => {
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
            return t instanceof Sr.ArtifactEntity || t instanceof Sr.DoodleEntity ? t : t instanceof Sr.ObjectEntity ? XS(t.val) : t instanceof Sr.TextEntity ? t.text : t instanceof Sr.NumberEntity ? t.val : null
        }
        normalize() {
            var r;
            const t = Object.keys(this.wsClient.entities);
            for (let n = 0; n < t.length; n++) {
                let s = t[n];
                if ((r = this.pausedKeys) != null && r.includes(s)) continue;
                const a = this.valueForEntity(this.wsClient.entities[s]);
                if (a != null) {
                    if (this.shouldParseBlobcast) {
                        const l = s.split(":");
                        if (l[0] === "bc")
                            if (l[1] === "customer") {
                                if (l[2] !== `${this.wsClient.id}`) continue;
                                s = "player"
                            } else l[1] === "room" && (s = "room")
                    }
                    this.hotValues[s] = a
                }
            }
            return this
        }
        hydrateRefs() {
            const t = (r, n, s = !1) => {
                var l;
                const a = (l = r.$ref) != null ? l : r.ref;
                if (a) {
                    const c = this.hotValues[a];
                    if (c === void 0) throw new Error(`[ecastPlugin] entity "${n}" referenced entity "${a}" but it does not exist`);
                    _J(this.newValues, n, c)
                } else s && Object.entries(r).forEach(([c, f]) => {
                    f !== null && typeof f == "object" && t(f, `${n}.${c}`, s)
                })
            };
            return Object.entries(this.newValues).forEach(([r, n]) => {
                !n || Object.entries(n).forEach(([s, a]) => {
                    a !== null && typeof a == "object" && t(a, `${r}.${s}`, this.keyHasDeepRefs(r))
                })
            }), this
        }
        keyHasDeepRefs(t) {
            var r, n, s, a;
            return !!((n = (r = this.keyMap) == null ? void 0 : r[t]) != null && n.hasDeepRefs || (a = (s = this.providerMap) == null ? void 0 : s[t]) != null && a.hasDeepRefs)
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
    const Xr = new EJ,
        bJ = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Xr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => io.add(n)), r.wsClient.on("connection", n => {
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

    function TJ() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function kp() {
        return !TJ() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function AJ(e, t) {
        return e.require(t)
    }
    var SJ = {};

    function zt() {
        return kp() ? global : typeof window < "u" ? window : typeof self < "u" ? self : SJ
    }

    function xp(e, t, r) {
        var n = r || zt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            a = s[e] || (s[e] = t());
        return a
    }
    var sO = Object.prototype.toString;

    function aO(e) {
        switch (sO.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ai(e, Error)
        }
    }

    function da(e, t) {
        return sO.call(e) === `[object ${t}]`
    }

    function oO(e) {
        return da(e, "ErrorEvent")
    }

    function pE(e) {
        return da(e, "DOMError")
    }

    function OJ(e) {
        return da(e, "DOMException")
    }

    function Zs(e) {
        return da(e, "String")
    }

    function wJ(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Yc(e) {
        return da(e, "Object")
    }

    function Dp(e) {
        return typeof Event < "u" && Ai(e, Event)
    }

    function CJ(e) {
        return typeof Element < "u" && Ai(e, Element)
    }

    function IJ(e) {
        return da(e, "RegExp")
    }

    function lO(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function $J(e) {
        return Yc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function RJ(e) {
        return typeof e == "number" && e !== e
    }

    function Ai(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function ih(e, t) {
        try {
            let c = e;
            var r = 5,
                n = 80,
                s = [];
            let f = 0,
                d = 0;
            var a = " > ",
                l = a.length;
            let p;
            for (; c && f++ < r && (p = LJ(c, t), !(p === "html" || f > 1 && d + s.length * l + p.length >= n));) s.push(p), d += p.length, c = c.parentNode;
            return s.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function LJ(e, t) {
        var r = e,
            n = [];
        let s, a, l, c, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var d = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (d && d.length) d.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && Zs(s))
            for (a = s.split(/\s+/), f = 0; f < a.length; f++) n.push(`.${a[f]}`);
        var p = ["type", "name", "title", "alt"];
        for (f = 0; f < p.length; f++) l = p[f], c = r.getAttribute(l), c && n.push(`[${l}="${c}"]`);
        return n.join("")
    }

    function NJ() {
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
    var PJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function kJ(e) {
        return e === "http" || e === "https"
    }

    function xJ(e, t = !1) {
        const {
            host: r,
            path: n,
            pass: s,
            port: a,
            projectId: l,
            protocol: c,
            publicKey: f
        } = e;
        return `${c}://${f}${t&&s?`:${s}`:""}@${r}${a?`:${a}`:""}/${n&&`${n}/`}${l}`
    }

    function DJ(e) {
        var t = PJ.exec(e);
        if (!t) throw new Ma(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", a, l = "", c] = t.slice(1);
        let f = "",
            d = c;
        var p = d.split("/");
        if (p.length > 1 && (f = p.slice(0, -1).join("/"), d = p.pop()), d) {
            var y = d.match(/^\d+/);
            y && (d = y[0])
        }
        return cO({
            host: a,
            pass: s,
            path: f,
            projectId: d,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function cO(e) {
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

    function MJ(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: t,
            projectId: r,
            protocol: n
        } = e;
        var s = ["protocol", "publicKey", "host", "projectId"];
        if (s.forEach(a => {
                if (!e[a]) throw new Ma(`Invalid Sentry Dsn: ${a} missing`)
            }), !r.match(/^\d+$/)) throw new Ma(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!kJ(n)) throw new Ma(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Ma(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function UJ(e) {
        var t = typeof e == "string" ? DJ(e) : cO(e);
        return MJ(t), t
    }
    var FJ = zt(),
        BJ = "Sentry Logger ",
        sc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function uO(e) {
        var t = zt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        sc.forEach(s => {
            var a = r[s] && r[s].__sentry_original__;
            s in t.console && a && (n[s] = r[s], r[s] = a)
        });
        try {
            return e()
        } finally {
            Object.keys(n).forEach(s => {
                r[s] = n[s]
            })
        }
    }

    function gE() {
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
                e && uO(() => {
                    FJ.console[r](`${BJ}[${r}]:`, ...n)
                })
            }
        }) : sc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let Wt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Wt = xp("logger", gE) : Wt = gE();

    function mE(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function vE(e, t) {
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

    function Mp(e, t) {
        return Zs(e) ? IJ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function or(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                dO(s, n)
            } catch {}
            e[t] = s
        }
    }

    function fO(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function dO(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, fO(e, "__sentry_original__", t)
    }

    function Up(e) {
        return e.__sentry_original__
    }

    function hO(e) {
        if (aO(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ..._E(e)
        };
        if (Dp(e)) {
            var t = {
                type: e.type,
                target: yE(e.target),
                currentTarget: yE(e.currentTarget),
                ..._E(e)
            };
            return typeof CustomEvent < "u" && Ai(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function yE(e) {
        try {
            return CJ(e) ? ih(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function _E(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function GJ(e, t = 40) {
        var r = Object.keys(hO(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return mE(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : mE(n, t)
        }
        return ""
    }

    function jJ(e) {
        var t = new Map;
        return sh(e, t)
    }

    function sh(e, t) {
        if (Yc(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = sh(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(c => {
                n.push(sh(c, t))
            }), n
        }
        return e
    }
    var nd = "<anonymous>";

    function gi(e) {
        try {
            return !e || typeof e != "function" ? nd : e.name || nd
        } catch {
            return nd
        }
    }

    function WJ() {
        if (!("fetch" in zt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function EE(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function VJ() {
        if (!WJ()) return !1;
        var e = zt();
        if (EE(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = EE(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function KJ() {
        var e = zt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var wt = zt(),
        Ha = {},
        bE = {};

    function HJ(e) {
        if (!bE[e]) switch (bE[e] = !0, e) {
            case "console":
                qJ();
                break;
            case "dom":
                rQ();
                break;
            case "xhr":
                JJ();
                break;
            case "fetch":
                YJ();
                break;
            case "history":
                QJ();
                break;
            case "error":
                nQ();
                break;
            case "unhandledrejection":
                iQ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function zi(e, t) {
        Ha[e] = Ha[e] || [], Ha[e].push(t), HJ(e)
    }

    function dn(e, t) {
        if (!(!e || !Ha[e]))
            for (var r of Ha[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${gi(r)}
Error:`, n)
            }
    }

    function qJ() {
        "console" in wt && sc.forEach(function(e) {
            e in wt.console && or(wt.console, e, function(t) {
                return function(...r) {
                    dn("console", {
                        args: r,
                        level: e
                    }), t && t.apply(wt.console, r)
                }
            })
        })
    }

    function YJ() {
        !VJ() || or(wt, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: zJ(t),
                        url: XJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return dn("fetch", {
                    ...r
                }), e.apply(wt, t).then(n => (dn("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw dn("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function zJ(e = []) {
        return "Request" in wt && Ai(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function XJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in wt && Ai(e[0], Request) ? e[0].url : String(e[0])
    }

    function JJ() {
        if ("XMLHttpRequest" in wt) {
            var e = XMLHttpRequest.prototype;
            or(e, "open", function(t) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        a = n.__sentry_xhr__ = {
                            method: Zs(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    Zs(s) && a.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                    var l = function() {
                        if (n.readyState === 4) {
                            try {
                                a.status_code = n.status
                            } catch {}
                            dn("xhr", {
                                args: r,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: n
                            })
                        }
                    };
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? or(n, "onreadystatechange", function(c) {
                        return function(...f) {
                            return l(), c.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", l), t.apply(n, r)
                }
            }), or(e, "send", function(t) {
                return function(...r) {
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), dn("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, r)
                }
            })
        }
    }
    let wl;

    function QJ() {
        if (!KJ()) return;
        var e = wt.onpopstate;
        wt.onpopstate = function(...r) {
            var n = wt.location.href,
                s = wl;
            if (wl = n, dn("history", {
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
                    var a = wl,
                        l = String(s);
                    wl = l, dn("history", {
                        from: a,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        or(wt.history, "pushState", t), or(wt.history, "replaceState", t)
    }
    var ZJ = 1e3;
    let Cl, Il;

    function eQ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function tQ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function TE(e, t = !1) {
        return r => {
            if (!(!r || Il === r) && !tQ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Cl === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), Il = r) : eQ(Il, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), Il = r), clearTimeout(Cl), Cl = wt.setTimeout(() => {
                    Cl = void 0
                }, ZJ)
            }
        }
    }

    function rQ() {
        if ("document" in wt) {
            var e = dn.bind(null, "dom"),
                t = TE(e, !0);
            wt.document.addEventListener("click", t, !1), wt.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = wt[r] && wt[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (or(n, "addEventListener", function(s) {
                    return function(a, l, c) {
                        if (a === "click" || a == "keypress") try {
                            var f = this,
                                d = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                p = d[a] = d[a] || {
                                    refCount: 0
                                };
                            if (!p.handler) {
                                var y = TE(e);
                                p.handler = y, s.call(this, a, y, c)
                            }
                            p.refCount += 1
                        } catch {}
                        return s.call(this, a, l, c)
                    }
                }), or(n, "removeEventListener", function(s) {
                    return function(a, l, c) {
                        if (a === "click" || a == "keypress") try {
                            var f = this,
                                d = f.__sentry_instrumentation_handlers__ || {},
                                p = d[a];
                            p && (p.refCount -= 1, p.refCount <= 0 && (s.call(this, a, p.handler, c), p.handler = void 0, delete d[a]), Object.keys(d).length === 0 && delete f.__sentry_instrumentation_handlers__)
                        } catch {}
                        return s.call(this, a, l, c)
                    }
                }))
            })
        }
    }
    let id = null;

    function nQ() {
        id = wt.onerror, wt.onerror = function(e, t, r, n, s) {
            return dn("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), id ? id.apply(this, arguments) : !1
        }
    }
    let sd = null;

    function iQ() {
        sd = wt.onunhandledrejection, wt.onunhandledrejection = function(e) {
            return dn("unhandledrejection", e), sd ? sd.apply(this, arguments) : !0
        }
    }

    function sQ() {
        var e = typeof WeakSet == "function",
            t = e ? new WeakSet : [];

        function r(s) {
            if (e) return t.has(s) ? !0 : (t.add(s), !1);
            for (let l = 0; l < t.length; l++) {
                var a = t[l];
                if (a === s) return !0
            }
            return t.push(s), !1
        }

        function n(s) {
            if (e) t.delete(s);
            else
                for (let a = 0; a < t.length; a++)
                    if (t[a] === s) {
                        t.splice(a, 1);
                        break
                    }
        }
        return [r, n]
    }

    function qa() {
        var e = zt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function pO(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function ks(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = pO(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function ah(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            a = s[0] = s[0] || {};
        a.value || (a.value = t || ""), a.type || (a.type = r || "Error")
    }

    function ac(e, t) {
        var r = pO(e);
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
                var a = {
                    ...s && s.data,
                    ...t.data
                };
                r.mechanism.data = a
            }
        }
    }

    function aQ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return oh("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function gO(e, t = 3, r = 100 * 1024) {
        var n = aQ(e, t);
        return cQ(n) > r ? gO(e, t - 1, r) : n
    }

    function oh(e, t, r = 1 / 0, n = 1 / 0, s = sQ()) {
        const [a, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !RJ(t)) return t;
        var c = oQ(e, t);
        if (!c.startsWith("[object ")) return c;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return c.replace("object ", "");
        if (a(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var d = f.toJSON();
            return oh("", d, r - 1, n, s)
        } catch {}
        var p = Array.isArray(t) ? [] : {};
        let y = 0;
        var b = hO(t);
        for (var w in b)
            if (!!Object.prototype.hasOwnProperty.call(b, w)) {
                if (y >= n) {
                    p[w] = "[MaxProperties ~]";
                    break
                }
                var P = b[w];
                p[w] = oh(w, P, r - 1, n, s), y += 1
            } return l(t), p
    }

    function oQ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : $J(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${gi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function lQ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function cQ(e) {
        return lQ(JSON.stringify(e))
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
    class An {
        __init() {
            this._state = Mn.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            An.prototype.__init.call(this), An.prototype.__init2.call(this), An.prototype.__init3.call(this), An.prototype.__init4.call(this), An.prototype.__init5.call(this), An.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(t, r) {
            return new An((n, s) => {
                this._handlers.push([!1, a => {
                    if (!t) n(a);
                    else try {
                        n(t(a))
                    } catch (l) {
                        s(l)
                    }
                }, a => {
                    if (!r) s(a);
                    else try {
                        n(r(a))
                    } catch (l) {
                        s(l)
                    }
                }]), this._executeHandlers()
            })
        } catch (t) {
            return this.then(r => r, t)
        } finally(t) {
            return new An((r, n) => {
                let s, a;
                return this.then(l => {
                    a = !1, s = l, t && t()
                }, l => {
                    a = !0, s = l, t && t()
                }).then(() => {
                    if (a) {
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
                    if (lO(r)) {
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

    function ad(e) {
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
    var uQ = ["fatal", "error", "warning", "log", "info", "debug"];

    function fQ(e) {
        return e === "warn" ? "warning" : uQ.includes(e) ? e : "log"
    }
    var lh = {
        nowSeconds: () => Date.now() / 1e3
    };

    function dQ() {
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

    function hQ() {
        try {
            var e = AJ(qO, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var od = kp() ? hQ() : dQ(),
        AE = od === void 0 ? lh : {
            nowSeconds: () => (od.timeOrigin + od.now()) / 1e3
        },
        mO = lh.nowSeconds.bind(lh),
        vO = AE.nowSeconds.bind(AE);
    (() => {
        const {
            performance: e
        } = zt();
        if (!(!e || !e.now)) {
            var t = 3600 * 1e3,
                r = e.now(),
                n = Date.now(),
                s = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
                a = s < t,
                l = e.timing && e.timing.navigationStart,
                c = typeof l == "number",
                f = c ? Math.abs(l + r - n) : t,
                d = f < t;
            return a || d ? s <= f ? e.timeOrigin : l : n
        }
    })();

    function pQ(e) {
        var t = vO(),
            r = {
                sid: qa(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => mQ(r)
            };
        return e && zc(r, e), r
    }

    function zc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || vO(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : qa()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function gQ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), zc(e, r)
    }

    function mQ(e) {
        return jJ({
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
    var SE = 100;
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
            var n = typeof r == "number" ? Math.min(r, SE) : SE;
            if (n <= 0) return this;
            var s = {
                timestamp: mO(),
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
            }, this._notifyEventProcessors([...yO(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, s = 0) {
            return new An((a, l) => {
                var c = t[s];
                if (r === null || typeof c != "function") a(r);
                else {
                    var f = c({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && c.id && f === null && Wt.log(`Event processor "${c.id}" dropped event`), lO(f) ? f.then(d => this._notifyEventProcessors(t, d, n, s + 1).then(a)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(a).then(null, l)
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

    function yO() {
        return xp("globalEventProcessors", () => [])
    }

    function _O(e) {
        yO().push(e)
    }
    var Fp = 4,
        vQ = 100;
    class bo {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new is, n = Fp) {
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
            var n = this._lastEventId = r && r.event_id ? r.event_id : qa(),
                s = new Error("Sentry syntheticException");
            return this._withClient((a, l) => {
                a.captureException(t, {
                    originalException: t,
                    syntheticException: s,
                    ...r,
                    event_id: n
                }, l)
            }), n
        }
        captureMessage(t, r, n) {
            var s = this._lastEventId = n && n.event_id ? n.event_id : qa(),
                a = new Error(t);
            return this._withClient((l, c) => {
                l.captureMessage(t, r, {
                    originalException: t,
                    syntheticException: a,
                    ...n,
                    event_id: s
                }, c)
            }), s
        }
        captureEvent(t, r) {
            var n = r && r.event_id ? r.event_id : qa();
            return t.type !== "transaction" && (this._lastEventId = n), this._withClient((s, a) => {
                s.captureEvent(t, {
                    ...r,
                    event_id: n
                }, a)
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
                beforeBreadcrumb: a = null,
                maxBreadcrumbs: l = vQ
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var c = mO(),
                    f = {
                        timestamp: c,
                        ...t
                    },
                    d = a ? uO(() => a(f, r)) : f;
                d !== null && n.addBreadcrumb(d, l)
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
            var r = OE(this);
            try {
                t(this)
            } finally {
                OE(r)
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
            n && gQ(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: s,
                environment: a
            } = n && n.getOptions() || {};
            var l = zt();
            const {
                userAgent: c
            } = l.navigator || {};
            var f = pQ({
                release: s,
                environment: a,
                ...r && {
                    user: r.getUser()
                },
                ...c && {
                    userAgent: c
                },
                ...t
            });
            if (r) {
                var d = r.getSession && r.getSession();
                d && d.status === "ok" && zc(d, {
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
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function Xc() {
        var e = zt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function OE(e) {
        var t = Xc(),
            r = li(t);
        return Bp(t, e), r
    }

    function Ur() {
        var e = Xc();
        return (!EO(e) || li(e).isOlderThan(Fp)) && Bp(e, new bo), kp() ? yQ(e) : li(e)
    }

    function yQ(e) {
        try {
            var t = Xc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return li(e);
            if (!EO(r) || li(r).isOlderThan(Fp)) {
                var n = li(e).getStackTop();
                Bp(r, new bo(n.client, is.clone(n.scope)))
            }
            return li(r)
        } catch {
            return li(e)
        }
    }

    function EO(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function li(e) {
        return xp("hub", () => new bo, e)
    }

    function Bp(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function _Q(e, t) {
        return Ur().captureException(e, {
            captureContext: t
        })
    }

    function EQ(e) {
        Ur().withScope(e)
    }

    function bQ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function TQ(e, t) {
        var r = UJ(e),
            n = `${bQ(r)}embed/error-page/`;
        let s = `dsn=${xJ(r)}`;
        for (var a in t)
            if (a !== "dsn")
                if (a === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`;
        return `${n}?${s}`
    }
    let wE;
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
            wE = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = Up(this) || this;
                return wE.apply(r, t)
            }
        }
    }
    ao.__initStatic();
    var AQ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class Vs {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = Vs.id
        }
        constructor(t = {}) {
            this._options = t, Vs.prototype.__init.call(this)
        }
        setupOnce(t, r) {
            var n = s => {
                var a = r();
                if (a) {
                    var l = a.getIntegration(Vs);
                    if (l) {
                        var c = a.getClient(),
                            f = c ? c.getOptions() : {},
                            d = SQ(l._options, f);
                        return OQ(s, d) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Vs.__initStatic();

    function SQ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...AQ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function OQ(e, t) {
        return t.ignoreInternal && RQ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being internal Sentry Error.
Event: ${ks(e)}`), !0) : wQ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ks(e)}`), !0) : CQ(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ks(e)}.
Url: ${oc(e)}`), !0) : IQ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ks(e)}.
Url: ${oc(e)}`), !0)
    }

    function wQ(e, t) {
        return !t || !t.length ? !1 : $Q(e).some(r => t.some(n => Mp(r, n)))
    }

    function CQ(e, t) {
        if (!t || !t.length) return !1;
        var r = oc(e);
        return r ? t.some(n => Mp(r, n)) : !1
    }

    function IQ(e, t) {
        if (!t || !t.length) return !0;
        var r = oc(e);
        return r ? t.some(n => Mp(r, n)) : !0
    }

    function $Q(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract message for event ${ks(e)}`), []
        }
        return []
    }

    function RQ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function LQ(e = []) {
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
            return t ? LQ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract url for event ${ks(e)}`), null
        }
    }

    function bO(e, t) {
        var r = Gp(e, t),
            n = {
                type: t && t.name,
                value: xQ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function NQ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: Dp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${GJ(t)}`
                }]
            },
            extra: {
                __serialized__: gO(t)
            }
        };
        if (r) {
            var a = Gp(e, r);
            a.length && (s.exception.values[0].stacktrace = {
                frames: a
            })
        }
        return s
    }

    function ld(e, t) {
        return {
            exception: {
                values: [bO(e, t)]
            }
        }
    }

    function Gp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = kQ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var PQ = /Minified React error #\d+;/i;

    function kQ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (PQ.test(e.message)) return 1
        }
        return 0
    }

    function xQ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function TO(e, t, r, n, s) {
        let a;
        if (oO(t) && t.error) {
            var l = t;
            return ld(e, l.error)
        }
        if (pE(t) || OJ(t)) {
            var c = t;
            if ("stack" in t) a = ld(e, t);
            else {
                var f = c.name || (pE(c) ? "DOMError" : "DOMException"),
                    d = c.message ? `${f}: ${c.message}` : f;
                a = CE(e, d, r, n), ah(a, d)
            }
            return "code" in c && (a.tags = {
                ...a.tags,
                "DOMException.code": `${c.code}`
            }), a
        }
        if (aO(t)) return ld(e, t);
        if (Yc(t) || Dp(t)) {
            var p = t;
            return a = NQ(e, p, r, s), ac(a, {
                synthetic: !0
            }), a
        }
        return a = CE(e, t, r, n), ah(a, `${t}`, void 0), ac(a, {
            synthetic: !0
        }), a
    }

    function CE(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var a = Gp(e, r);
            a.length && (s.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: a
                    }
                }]
            })
        }
        return s
    }
    var DQ = "Breadcrumbs";
    class oo {
        static __initStatic() {
            this.id = DQ
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
            this.options.console && zi("console", UQ), this.options.dom && zi("dom", MQ(this.options.dom)), this.options.xhr && zi("xhr", FQ), this.options.fetch && zi("fetch", BQ), this.options.history && zi("history", GQ)
        }
    }
    oo.__initStatic();

    function MQ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? ih(r.event.target, s) : ih(r.event, s)
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

    function UQ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: fQ(e.level),
            message: vE(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${vE(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Ur().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function FQ(e) {
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

    function BQ(e) {
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

    function GQ(e) {
        var t = zt();
        let r = e.from,
            n = e.to;
        var s = ad(t.location.href);
        let a = ad(r);
        var l = ad(n);
        a.path || (a = s), s.protocol === l.protocol && s.host === l.host && (n = l.relative), s.protocol === a.protocol && s.host === a.host && (r = a.relative), Ur().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let ch = 0;

    function AO() {
        return ch > 0
    }

    function jQ() {
        ch += 1, setTimeout(() => {
            ch -= 1
        })
    }

    function ea(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (Up(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var c = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = c.map(d => ea(d, t));
                return e.apply(this, f)
            } catch (d) {
                throw jQ(), EQ(p => {
                    p.addEventProcessor(y => (t.mechanism && (ah(y, void 0, void 0), ac(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: c
                    }, y)), _Q(d)
                }), d
            }
        };
        try {
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (s[a] = e[a])
        } catch {}
        dO(s, e), fO(e, "__sentry_wrapped__", s);
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
    class di {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = di.id
        }
        __init2() {
            this._installFunc = {
                onerror: WQ,
                onunhandledrejection: VQ
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
                n && t[r] && (qQ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    di.__initStatic();

    function WQ() {
        zi("error", e => {
            const [t, r, n] = wO();
            if (!t.getIntegration(di)) return;
            const {
                msg: s,
                url: a,
                line: l,
                column: c,
                error: f
            } = e;
            if (!(AO() || f && f.__sentry_own_request__)) {
                var d = f === void 0 && Zs(s) ? HQ(s, a, l, c) : SO(TO(r, f || s, void 0, n, !1), a, l, c);
                d.level = "error", OO(t, f, d, "onerror")
            }
        })
    }

    function VQ() {
        zi("unhandledrejection", e => {
            const [t, r, n] = wO();
            if (!t.getIntegration(di)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (AO() || s && s.__sentry_own_request__) return !0;
            var a = wJ(s) ? KQ(s) : TO(r, s, void 0, n, !0);
            a.level = "error", OO(t, s, a, "onunhandledrejection")
        })
    }

    function KQ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function HQ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let a = oO(e) ? e.message : e,
            l = "Error";
        var c = a.match(s);
        c && (l = c[1], a = c[2]);
        var f = {
            exception: {
                values: [{
                    type: l,
                    value: a
                }]
            }
        };
        return SO(f, t, r, n)
    }

    function SO(e, t, r, n) {
        var s = e.exception = e.exception || {},
            a = s.values = s.values || [],
            l = a[0] = a[0] || {},
            c = l.stacktrace = l.stacktrace || {},
            f = c.frames = c.frames || [],
            d = isNaN(parseInt(n, 10)) ? void 0 : n,
            p = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Zs(t) && t.length > 0 ? t : NJ();
        return f.length === 0 && f.push({
            colno: d,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: p
        }), e
    }

    function qQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.log(`Global Handler attached: ${e}`)
    }

    function OO(e, t, r, n) {
        ac(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function wO() {
        var e = Ur(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var YQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            this._options.setTimeout && or(t, "setTimeout", IE), this._options.setInterval && or(t, "setInterval", IE), this._options.requestAnimationFrame && or(t, "requestAnimationFrame", zQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && or(XMLHttpRequest.prototype, "send", XQ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : YQ;
                n.forEach(JQ)
            }
        }
    }
    lo.__initStatic();

    function IE(e) {
        return function(...t) {
            var r = t[0];
            return t[0] = ea(r, {
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

    function zQ(e) {
        return function(t) {
            return e.apply(this, [ea(t, {
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

    function XQ(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && or(r, s, function(a) {
                    var l = {
                            mechanism: {
                                data: {
                                    function: s,
                                    handler: gi(a)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        c = Up(a);
                    return c && (l.mechanism.data.handler = gi(c)), ea(a, l)
                })
            }), e.apply(this, t)
        }
    }

    function JQ(e) {
        var t = zt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (or(r, "addEventListener", function(n) {
            return function(s, a, l) {
                try {
                    typeof a.handleEvent == "function" && (a.handleEvent = ea(a.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: gi(a),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [s, ea(a, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: gi(a),
                            target: e
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), l])
            }
        }), or(r, "removeEventListener", function(n) {
            return function(s, a, l) {
                var c = a;
                try {
                    var f = c && c.__sentry_wrapped__;
                    f && n.call(this, s, f, l)
                } catch {}
                return n.call(this, s, c, l)
            }
        }))
    }
    var QQ = "cause",
        ZQ = 5;
    class Ks {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Ks.id
        }
        constructor(t = {}) {
            Ks.prototype.__init.call(this), this._key = t.key || QQ, this._limit = t.limit || ZQ
        }
        setupOnce() {
            var t = Ur().getClient();
            !t || _O((r, n) => {
                var s = Ur().getIntegration(Ks);
                return s ? eZ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Ks.__initStatic();

    function eZ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ai(s.originalException, Error)) return n;
        var a = CO(e, r, s.originalException, t);
        return n.exception.values = [...a, ...n.exception.values], n
    }

    function CO(e, t, r, n, s = []) {
        if (!Ai(r[n], Error) || s.length + 1 >= t) return s;
        var a = bO(e, r[n]);
        return CO(e, t, r[n], n, [a, ...s])
    }
    var Gi = zt();
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
            _O(t => {
                if (Ur().getIntegration(Hs)) {
                    if (!Gi.navigator && !Gi.location && !Gi.document) return t;
                    var r = t.request && t.request.url || Gi.location && Gi.location.href;
                    const {
                        referrer: a
                    } = Gi.document || {}, {
                        userAgent: l
                    } = Gi.navigator || {};
                    var n = {
                            ...t.request && t.request.headers,
                            ...a && {
                                Referer: a
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
    Hs.__initStatic();
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
                var a = r().getIntegration(qs);
                if (a) {
                    try {
                        if (tZ(s, a._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {
                        return a._previousEvent = s
                    }
                    return a._previousEvent = s
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    qs.__initStatic();

    function tZ(e, t) {
        return t ? !!(rZ(e, t) || nZ(e, t)) : !1
    }

    function rZ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !$O(e, t) || !IO(e, t))
    }

    function nZ(e, t) {
        var r = $E(t),
            n = $E(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !$O(e, t) || !IO(e, t))
    }

    function IO(e, t) {
        let r = RE(e),
            n = RE(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                a = r[l];
            if (s.filename !== a.filename || s.lineno !== a.lineno || s.colno !== a.colno || s.function !== a.function) return !1
        }
        return !0
    }

    function $O(e, t) {
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

    function $E(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function RE(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Vs, new ao, new lo, new oo, new di, new Ks, new qs, new Hs;

    function iZ(e = {}, t = Ur()) {
        var r = zt();
        if (!r.document) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("Global document not defined in showReportDialog call");
            return
        }
        const {
            client: n,
            scope: s
        } = t.getStackTop();
        var a = e.dsn || n && n.getDsn();
        if (!a) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("DSN not configured for showReportDialog call");
            return
        }
        s && (e.user = {
            ...s.getUser(),
            ...e.user
        }), e.eventId || (e.eventId = t.lastEventId());
        var l = r.document.createElement("script");
        l.async = !0, l.src = TQ(a, e), e.onLoad && (l.onload = e.onLoad);
        var c = r.document.head || r.document.body;
        c ? c.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const sZ = rt({
            setup() {
                return {
                    fatalError: Qi(Eo.fatal.error)
                }
            },
            computed: {
                message() {
                    var n, s, a, l, c;
                    const e = (a = (s = (n = this.fatalError) == null ? void 0 : n.event) == null ? void 0 : s.event_id) != null ? a : "Unknown";
                    let t = "";
                    const r = (c = (l = this.fatalError) == null ? void 0 : l.hint) == null ? void 0 : c.originalException;
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
                    iZ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        To = e => (yc("data-v-a7272d53"), e = e(), _c(), e),
        aZ = {
            class: "jbg fatal"
        },
        oZ = {
            class: "constrain"
        },
        lZ = To(() => X("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        cZ = {
            class: "content"
        },
        uZ = To(() => X("h1", null, "You have encountered an error", -1)),
        fZ = To(() => X("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        dZ = To(() => X("ul", null, [X("li", null, "Refresh the page"), X("li", null, "Turn off adblockers or other browser extensions."), X("li", null, "Check your connection to the Internet."), X("li", null, "Make sure you're using an up-to-date browser."), X("li", null, "If that doesn't work, let us know.")], -1)),
        hZ = To(() => X("hr", null, null, -1)),
        pZ = {
            class: "error"
        };

    function gZ(e, t, r, n, s, a) {
        return F(), W("div", aZ, [X("div", oZ, [lZ, X("div", cZ, [uZ, fZ, dZ, X("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), hZ, X("pre", pZ, Me(e.message), 1)])])])
    }
    const mZ = ot(sZ, [
            ["render", gZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        $l = Gn({
            hasCrashed: !1
        }),
        vZ = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(Eo.fatal.error, xr(() => $l));
                const t = (r, n) => {
                    var s, a;
                    if (r instanceof rs.EcastEntityNotFound || r instanceof rs.EcastFilterError || r instanceof rs.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((a = r.message) == null ? void 0 : a.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && ($l.hasCrashed = !0, $l.event = r, $l.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", mZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var yZ = nO,
        _Z = iO;

    function EZ(e, t) {
        t = yZ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[_Z(t[r++])];
        return r && r == n ? e : void 0
    }
    var bZ = EZ,
        TZ = bZ;

    function AZ(e, t, r) {
        var n = e == null ? void 0 : TZ(e, t);
        return n === void 0 ? r : n
    }
    var SZ = AZ,
        OZ = Math.floor,
        wZ = Math.random;

    function CZ(e, t) {
        return e + OZ(wZ() * (t - e + 1))
    }
    var IZ = CZ,
        $Z = IZ;

    function RZ(e) {
        var t = e.length;
        return t ? e[$Z(0, t - 1)] : void 0
    }
    var RO = RZ,
        LZ = tO;

    function NZ(e, t) {
        return LZ(t, function(r) {
            return e[r]
        })
    }
    var PZ = NZ,
        kZ = PZ,
        xZ = Hc;

    function DZ(e) {
        return e == null ? [] : kZ(e, xZ(e))
    }
    var MZ = DZ,
        UZ = RO,
        FZ = MZ;

    function BZ(e) {
        return UZ(FZ(e))
    }
    var GZ = BZ,
        jZ = RO,
        WZ = GZ,
        VZ = yi;

    function KZ(e) {
        var t = VZ(e) ? jZ : WZ;
        return t(e)
    }
    var HZ = KZ;

    function LE(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = SZ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), HZ(s)
    }
    const qZ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = LE(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return LE(t.i18n, n) || ""
                }
            }
        },
        YZ = rt({
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
        zZ = "main/tjsp/quiplash3/assets/928ef0da.png",
        XZ = "main/tjsp/quiplash3/assets/0bb76a2d.png",
        JZ = "main/tjsp/quiplash3/assets/ed4469b3.png",
        QZ = {
            key: 0,
            class: "image",
            src: zZ,
            alt: "Kicked"
        },
        ZZ = {
            key: 1,
            class: "image",
            src: XZ,
            alt: "Thank You"
        },
        eee = {
            key: 2,
            class: "image",
            src: JZ,
            alt: "Error"
        },
        tee = {
            class: "text"
        },
        ree = {
            key: 3,
            class: "subtext"
        },
        nee = {
            class: "actions"
        };

    function iee(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", {
            class: Ve(["error-model", e.classes])
        }, [e.image === "tear" ? (F(), W("img", QZ)) : e.image === "moon" ? (F(), W("img", ZZ)) : (F(), W("img", eee)), Se(X("h3", tee, null, 512), [
            [l, e.text]
        ]), e.subtext ? Se((F(), W("h3", ree, null, 512)), [
            [l, e.subtext]
        ]) : ve("", !0), X("div", nee, [Se(X("button", {
            onClick: t[0] || (t[0] = ze(c => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const see = ot(YZ, [
            ["render", iee],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        aee = rt({
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
        oee = {
            class: "text"
        },
        lee = {
            key: 0,
            class: "subtext"
        },
        cee = {
            class: "actions"
        },
        uee = ["onClick"];

    function fee(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", {
            class: Ve(["options-modal", e.classes])
        }, [Se(X("h3", oee, null, 512), [
            [l, e.text]
        ]), e.subtext ? Se((F(), W("h3", lee, null, 512)), [
            [l, e.subtext]
        ]) : ve("", !0), X("div", cee, [(F(!0), W(qe, null, hn(e.options, (c, f) => Se((F(), W("button", {
            key: f,
            class: Ve(c.classes),
            onClick: ze(d => e.$emit("resolve", c.value), ["prevent"])
        }, null, 10, uee)), [
            [l, c.text]
        ])), 128))])], 2)
    }
    const dee = ot(aee, [
            ["render", fee],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        hee = rt({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = see : e === "Options" ? this.content = dee : this.content = e, new Promise(n => {
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

    function pee(e, t, r, n, s, a) {
        return F(), fn(Oc, {
            name: "modal-transition"
        }, {
            default: Nh(() => [e.props ? (F(), W("div", {
                key: 0,
                class: Ve(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = zs((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = ze((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (F(), fn(Dh(e.content), Bh({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : ve("", !0)], 34)) : ve("", !0)]),
            _: 1
        })
    }
    const gee = ot(hee, [
            ["render", pee],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        mee = {
            install: e => {
                if (e.config.globalProperties.$showModal) return;
                let t;
                const r = (s, a, l) => {
                        if (!t) throw new Error("No ModalComponent is registered");
                        return t.show(s, a, l)
                    },
                    n = s => {
                        t = s
                    };
                e.component("Modal", gee), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        vee = rt({
            setup() {
                return {
                    announcment: Qi(Eo.textDescriptions.announcement)
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
        yee = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function _ee(e, t, r, n, s, a) {
        return F(), W("div", yee, [(F(!0), W(qe, null, hn(e.lines, l => (F(), W("p", {
            key: l.id
        }, Me(l.text), 1))), 128))])
    }
    const Eee = ot(vee, [
            ["render", _ee]
        ]),
        NE = ln(""),
        bee = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(Eo.textDescriptions.announcement, xr(() => NE.value));
                const t = r => {
                    NE.value = r
                };
                e.component("TextDescriptions", Eee), e.config.globalProperties.$announce = t
            }
        },
        Tee = {
            install: e => {
                let t = "",
                    r = "";
                const n = a => a instanceof Function ? a() : a,
                    s = a => {
                        const l = document.querySelector('meta[name="theme-color"]');
                        !l || (document.body && (document.body.style.background = a), l.setAttribute("content", a), r = a)
                    };
                e.config.globalProperties.$setThemeColor = function(l) {
                    this.$options.themeColor = l, s(l)
                }, e.mixin({
                    mounted() {
                        if (!this.$options.themeColor) return;
                        const a = n(this.$options.themeColor);
                        s(a), this.$attrs.name === "game" && (t = a)
                    },
                    beforeDestroy() {
                        !this.$options.themeColor || n(this.$options.themeColor) !== r || s(t)
                    }
                })
            }
        },
        Aee = {
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
    const uh = typeof window < "u",
        See = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Si = e => See ? Symbol(e) : e,
        Oee = (e, t, r) => wee({
            l: e,
            k: t,
            s: r
        }),
        wee = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        jt = e => typeof e == "number" && isFinite(e),
        Cee = e => Wp(e) === "[object Date]",
        mi = e => Wp(e) === "[object RegExp]",
        Jc = e => Be(e) && Object.keys(e).length === 0;

    function Iee(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const er = Object.assign;

    function PE(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const $ee = Object.prototype.hasOwnProperty;

    function jp(e, t) {
        return $ee.call(e, t)
    }
    const Et = Array.isArray,
        Pt = e => typeof e == "function",
        _e = e => typeof e == "string",
        Ze = e => typeof e == "boolean",
        bt = e => e !== null && typeof e == "object",
        LO = Object.prototype.toString,
        Wp = e => LO.call(e),
        Be = e => Wp(e) === "[object Object]",
        Ree = e => e == null ? "" : Et(e) || Be(e) && e.toString === LO ? JSON.stringify(e, null, 2) : String(e);
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

    function Qc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: a
        } = r, l = e, c = new SyntaxError(String(l));
        return c.code = e, t && (c.location = t), c.domain = n, c
    }

    function Lee(e) {
        throw e
    }

    function Nee(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function fh(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const Dn = " ",
        Pee = "\r",
        pr = `
`,
        kee = String.fromCharCode(8232),
        xee = String.fromCharCode(8233);

    function Dee(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            a = 0;
        const l = oe => t[oe] === Pee && t[oe + 1] === pr,
            c = oe => t[oe] === pr,
            f = oe => t[oe] === xee,
            d = oe => t[oe] === kee,
            p = oe => l(oe) || c(oe) || f(oe) || d(oe),
            y = () => r,
            b = () => n,
            w = () => s,
            P = () => a,
            M = oe => l(oe) || f(oe) || d(oe) ? pr : t[oe],
            G = () => M(r),
            C = () => M(r + a);

        function H() {
            return a = 0, p(r) && (n++, s = 0), l(r) && r++, r++, s++, t[r]
        }

        function z() {
            return l(r + a) && a++, a++, t[r + a]
        }

        function V() {
            r = 0, n = 1, s = 1, a = 0
        }

        function j(oe = 0) {
            a = oe
        }

        function Q() {
            const oe = r + a;
            for (; oe !== r;) H();
            a = 0
        }
        return {
            index: y,
            line: b,
            column: w,
            peekOffset: P,
            charAt: M,
            currentChar: G,
            currentPeek: C,
            next: H,
            peek: z,
            reset: V,
            resetPeek: j,
            skipToPeek: Q
        }
    }
    const ni = void 0,
        kE = "'",
        Mee = "tokenizer";

    function Uee(e, t = {}) {
        const r = t.location !== !1,
            n = Dee(e),
            s = () => n.index(),
            a = () => Nee(n.line(), n.column(), n.index()),
            l = a(),
            c = s(),
            f = {
                currentType: 14,
                offset: c,
                startLoc: l,
                endLoc: l,
                lastType: 14,
                lastOffset: c,
                lastStartLoc: l,
                lastEndLoc: l,
                braceNest: 0,
                inLinked: !1,
                text: ""
            },
            d = () => f,
            {
                onError: p
            } = t;

        function y(m, g, S, ...D) {
            const B = d();
            if (g.column += S, g.offset += S, p) {
                const Y = fh(B.startLoc, g),
                    ce = Qc(m, Y, {
                        domain: Mee,
                        args: D
                    });
                p(ce)
            }
        }

        function b(m, g, S) {
            m.endLoc = a(), m.currentType = g;
            const D = {
                type: g
            };
            return r && (D.loc = fh(m.startLoc, m.endLoc)), S != null && (D.value = S), D
        }
        const w = m => b(m, 14);

        function P(m, g) {
            return m.currentChar() === g ? (m.next(), g) : (y(it.EXPECTED_TOKEN, a(), 0, g), "")
        }

        function M(m) {
            let g = "";
            for (; m.currentPeek() === Dn || m.currentPeek() === pr;) g += m.currentPeek(), m.peek();
            return g
        }

        function G(m) {
            const g = M(m);
            return m.skipToPeek(), g
        }

        function C(m) {
            if (m === ni) return !1;
            const g = m.charCodeAt(0);
            return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g === 95
        }

        function H(m) {
            if (m === ni) return !1;
            const g = m.charCodeAt(0);
            return g >= 48 && g <= 57
        }

        function z(m, g) {
            const {
                currentType: S
            } = g;
            if (S !== 2) return !1;
            M(m);
            const D = C(m.currentPeek());
            return m.resetPeek(), D
        }

        function V(m, g) {
            const {
                currentType: S
            } = g;
            if (S !== 2) return !1;
            M(m);
            const D = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = H(D);
            return m.resetPeek(), B
        }

        function j(m, g) {
            const {
                currentType: S
            } = g;
            if (S !== 2) return !1;
            M(m);
            const D = m.currentPeek() === kE;
            return m.resetPeek(), D
        }

        function Q(m, g) {
            const {
                currentType: S
            } = g;
            if (S !== 8) return !1;
            M(m);
            const D = m.currentPeek() === ".";
            return m.resetPeek(), D
        }

        function oe(m, g) {
            const {
                currentType: S
            } = g;
            if (S !== 9) return !1;
            M(m);
            const D = C(m.currentPeek());
            return m.resetPeek(), D
        }

        function le(m, g) {
            const {
                currentType: S
            } = g;
            if (!(S === 8 || S === 12)) return !1;
            M(m);
            const D = m.currentPeek() === ":";
            return m.resetPeek(), D
        }

        function ue(m, g) {
            const {
                currentType: S
            } = g;
            if (S !== 10) return !1;
            const D = () => {
                    const Y = m.currentPeek();
                    return Y === "{" ? C(m.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === Dn || !Y ? !1 : Y === pr ? (m.peek(), D()) : C(Y)
                },
                B = D();
            return m.resetPeek(), B
        }

        function $e(m) {
            M(m);
            const g = m.currentPeek() === "|";
            return m.resetPeek(), g
        }

        function Ie(m) {
            const g = M(m),
                S = m.currentPeek() === "%" && m.peek() === "{";
            return m.resetPeek(), {
                isModulo: S,
                hasSpace: g.length > 0
            }
        }

        function fe(m, g = !0) {
            const S = (B = !1, Y = "", ce = !1) => {
                    const se = m.currentPeek();
                    return se === "{" ? Y === "%" ? !1 : B : se === "@" || !se ? Y === "%" ? !0 : B : se === "%" ? (m.peek(), S(B, "%", !0)) : se === "|" ? Y === "%" || ce ? !0 : !(Y === Dn || Y === pr) : se === Dn ? (m.peek(), S(!0, Dn, ce)) : se === pr ? (m.peek(), S(!0, pr, ce)) : !0
                },
                D = S();
            return g && m.resetPeek(), D
        }

        function Ce(m, g) {
            const S = m.currentChar();
            return S === ni ? ni : g(S) ? (m.next(), S) : null
        }

        function U(m) {
            return Ce(m, S => {
                const D = S.charCodeAt(0);
                return D >= 97 && D <= 122 || D >= 65 && D <= 90 || D >= 48 && D <= 57 || D === 95 || D === 36
            })
        }

        function ie(m) {
            return Ce(m, S => {
                const D = S.charCodeAt(0);
                return D >= 48 && D <= 57
            })
        }

        function de(m) {
            return Ce(m, S => {
                const D = S.charCodeAt(0);
                return D >= 48 && D <= 57 || D >= 65 && D <= 70 || D >= 97 && D <= 102
            })
        }

        function be(m) {
            let g = "",
                S = "";
            for (; g = ie(m);) S += g;
            return S
        }

        function ye(m) {
            G(m);
            const g = m.currentChar();
            return g !== "%" && y(it.EXPECTED_TOKEN, a(), 0, g), m.next(), "%"
        }

        function Oe(m) {
            let g = "";
            for (;;) {
                const S = m.currentChar();
                if (S === "{" || S === "}" || S === "@" || S === "|" || !S) break;
                if (S === "%")
                    if (fe(m)) g += S, m.next();
                    else break;
                else if (S === Dn || S === pr)
                    if (fe(m)) g += S, m.next();
                    else {
                        if ($e(m)) break;
                        g += S, m.next()
                    }
                else g += S, m.next()
            }
            return g
        }

        function Ue(m) {
            G(m);
            let g = "",
                S = "";
            for (; g = U(m);) S += g;
            return m.currentChar() === ni && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), S
        }

        function je(m) {
            G(m);
            let g = "";
            return m.currentChar() === "-" ? (m.next(), g += `-${be(m)}`) : g += be(m), m.currentChar() === ni && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), g
        }

        function nt(m) {
            G(m), P(m, "'");
            let g = "",
                S = "";
            const D = Y => Y !== kE && Y !== pr;
            for (; g = Ce(m, D);) g === "\\" ? S += It(m) : S += g;
            const B = m.currentChar();
            return B === pr || B === ni ? (y(it.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), B === pr && (m.next(), P(m, "'")), S) : (P(m, "'"), S)
        }

        function It(m) {
            const g = m.currentChar();
            switch (g) {
                case "\\":
                case "'":
                    return m.next(), `\\${g}`;
                case "u":
                    return wr(m, g, 4);
                case "U":
                    return wr(m, g, 6);
                default:
                    return y(it.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, g), ""
            }
        }

        function wr(m, g, S) {
            P(m, g);
            let D = "";
            for (let B = 0; B < S; B++) {
                const Y = de(m);
                if (!Y) {
                    y(it.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${g}${D}${m.currentChar()}`);
                    break
                }
                D += Y
            }
            return `\\${g}${D}`
        }

        function rr(m) {
            G(m);
            let g = "",
                S = "";
            const D = B => B !== "{" && B !== "}" && B !== Dn && B !== pr;
            for (; g = Ce(m, D);) S += g;
            return S
        }

        function vr(m) {
            let g = "",
                S = "";
            for (; g = U(m);) S += g;
            return S
        }

        function lt(m) {
            const g = (S = !1, D) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Dn ? D : B === pr ? (D += B, m.next(), g(S, D)) : (D += B, m.next(), g(!0, D))
            };
            return g(!1, "")
        }

        function St(m) {
            G(m);
            const g = P(m, "|");
            return G(m), g
        }

        function ct(m, g) {
            let S = null;
            switch (m.currentChar()) {
                case "{":
                    return g.braceNest >= 1 && y(it.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), m.next(), S = b(g, 2, "{"), G(m), g.braceNest++, S;
                case "}":
                    return g.braceNest > 0 && g.currentType === 2 && y(it.EMPTY_PLACEHOLDER, a(), 0), m.next(), S = b(g, 3, "}"), g.braceNest--, g.braceNest > 0 && G(m), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), S;
                case "@":
                    return g.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), S = xt(m, g) || w(g), g.braceNest = 0, S;
                default:
                    let B = !0,
                        Y = !0,
                        ce = !0;
                    if ($e(m)) return g.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), S = b(g, 1, St(m)), g.braceNest = 0, g.inLinked = !1, S;
                    if (g.braceNest > 0 && (g.currentType === 5 || g.currentType === 6 || g.currentType === 7)) return y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), g.braceNest = 0, Kt(m, g);
                    if (B = z(m, g)) return S = b(g, 5, Ue(m)), G(m), S;
                    if (Y = V(m, g)) return S = b(g, 6, je(m)), G(m), S;
                    if (ce = j(m, g)) return S = b(g, 7, nt(m)), G(m), S;
                    if (!B && !Y && !ce) return S = b(g, 13, rr(m)), y(it.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, S.value), G(m), S;
                    break
            }
            return S
        }

        function xt(m, g) {
            const {
                currentType: S
            } = g;
            let D = null;
            const B = m.currentChar();
            switch ((S === 8 || S === 9 || S === 12 || S === 10) && (B === pr || B === Dn) && y(it.INVALID_LINKED_FORMAT, a(), 0), B) {
                case "@":
                    return m.next(), D = b(g, 8, "@"), g.inLinked = !0, D;
                case ".":
                    return G(m), m.next(), b(g, 9, ".");
                case ":":
                    return G(m), m.next(), b(g, 10, ":");
                default:
                    return $e(m) ? (D = b(g, 1, St(m)), g.braceNest = 0, g.inLinked = !1, D) : Q(m, g) || le(m, g) ? (G(m), xt(m, g)) : oe(m, g) ? (G(m), b(g, 12, vr(m))) : ue(m, g) ? (G(m), B === "{" ? ct(m, g) || D : b(g, 11, lt(m))) : (S === 8 && y(it.INVALID_LINKED_FORMAT, a(), 0), g.braceNest = 0, g.inLinked = !1, Kt(m, g))
            }
        }

        function Kt(m, g) {
            let S = {
                type: 14
            };
            if (g.braceNest > 0) return ct(m, g) || w(g);
            if (g.inLinked) return xt(m, g) || w(g);
            switch (m.currentChar()) {
                case "{":
                    return ct(m, g) || w(g);
                case "}":
                    return y(it.UNBALANCED_CLOSING_BRACE, a(), 0), m.next(), b(g, 3, "}");
                case "@":
                    return xt(m, g) || w(g);
                default:
                    if ($e(m)) return S = b(g, 1, St(m)), g.braceNest = 0, g.inLinked = !1, S;
                    const {
                        isModulo: B, hasSpace: Y
                    } = Ie(m);
                    if (B) return Y ? b(g, 0, Oe(m)) : b(g, 4, ye(m));
                    if (fe(m)) return b(g, 0, Oe(m));
                    break
            }
            return S
        }

        function Dt() {
            const {
                currentType: m,
                offset: g,
                startLoc: S,
                endLoc: D
            } = f;
            return f.lastType = m, f.lastOffset = g, f.lastStartLoc = S, f.lastEndLoc = D, f.offset = s(), f.startLoc = a(), n.currentChar() === ni ? b(f, 14) : Kt(n, f)
        }
        return {
            nextToken: Dt,
            currentOffset: s,
            currentPosition: a,
            context: d
        }
    }
    const Fee = "parser",
        Bee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function Gee(e, t, r) {
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

    function jee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, H, z, V, ...j) {
            const Q = C.currentPosition();
            if (Q.offset += V, Q.column += V, r) {
                const oe = fh(z, Q),
                    le = Qc(H, oe, {
                        domain: Fee,
                        args: j
                    });
                r(le)
            }
        }

        function s(C, H, z) {
            const V = {
                type: C,
                start: H,
                end: H
            };
            return t && (V.loc = {
                start: z,
                end: z
            }), V
        }

        function a(C, H, z, V) {
            C.end = H, V && (C.type = V), t && C.loc && (C.loc.end = z)
        }

        function l(C, H) {
            const z = C.context(),
                V = s(3, z.offset, z.startLoc);
            return V.value = H, a(V, C.currentOffset(), C.currentPosition()), V
        }

        function c(C, H) {
            const z = C.context(),
                {
                    lastOffset: V,
                    lastStartLoc: j
                } = z,
                Q = s(5, V, j);
            return Q.index = parseInt(H, 10), C.nextToken(), a(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function f(C, H) {
            const z = C.context(),
                {
                    lastOffset: V,
                    lastStartLoc: j
                } = z,
                Q = s(4, V, j);
            return Q.key = H, C.nextToken(), a(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function d(C, H) {
            const z = C.context(),
                {
                    lastOffset: V,
                    lastStartLoc: j
                } = z,
                Q = s(9, V, j);
            return Q.value = H.replace(Bee, Gee), C.nextToken(), a(Q, C.currentOffset(), C.currentPosition()), Q
        }

        function p(C) {
            const H = C.nextToken(),
                z = C.context(),
                {
                    lastOffset: V,
                    lastStartLoc: j
                } = z,
                Q = s(8, V, j);
            return H.type !== 12 ? (n(C, it.UNEXPECTED_EMPTY_LINKED_MODIFIER, z.lastStartLoc, 0), Q.value = "", a(Q, V, j), {
                nextConsumeToken: H,
                node: Q
            }) : (H.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, z.lastStartLoc, 0, bn(H)), Q.value = H.value || "", a(Q, C.currentOffset(), C.currentPosition()), {
                node: Q
            })
        }

        function y(C, H) {
            const z = C.context(),
                V = s(7, z.offset, z.startLoc);
            return V.value = H, a(V, C.currentOffset(), C.currentPosition()), V
        }

        function b(C) {
            const H = C.context(),
                z = s(6, H.offset, H.startLoc);
            let V = C.nextToken();
            if (V.type === 9) {
                const j = p(C);
                z.modifier = j.node, V = j.nextConsumeToken || C.nextToken()
            }
            switch (V.type !== 10 && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(V)), V = C.nextToken(), V.type === 2 && (V = C.nextToken()), V.type) {
                case 11:
                    V.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(V)), z.key = y(C, V.value || "");
                    break;
                case 5:
                    V.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(V)), z.key = f(C, V.value || "");
                    break;
                case 6:
                    V.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(V)), z.key = c(C, V.value || "");
                    break;
                case 7:
                    V.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(V)), z.key = d(C, V.value || "");
                    break;
                default:
                    n(C, it.UNEXPECTED_EMPTY_LINKED_KEY, H.lastStartLoc, 0);
                    const j = C.context(),
                        Q = s(7, j.offset, j.startLoc);
                    return Q.value = "", a(Q, j.offset, j.startLoc), z.key = Q, a(z, j.offset, j.startLoc), {
                        nextConsumeToken: V,
                        node: z
                    }
            }
            return a(z, C.currentOffset(), C.currentPosition()), {
                node: z
            }
        }

        function w(C) {
            const H = C.context(),
                z = H.currentType === 1 ? C.currentOffset() : H.offset,
                V = H.currentType === 1 ? H.endLoc : H.startLoc,
                j = s(2, z, V);
            j.items = [];
            let Q = null;
            do {
                const ue = Q || C.nextToken();
                switch (Q = null, ue.type) {
                    case 0:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), j.items.push(l(C, ue.value || ""));
                        break;
                    case 6:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), j.items.push(c(C, ue.value || ""));
                        break;
                    case 5:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), j.items.push(f(C, ue.value || ""));
                        break;
                    case 7:
                        ue.value == null && n(C, it.UNEXPECTED_LEXICAL_ANALYSIS, H.lastStartLoc, 0, bn(ue)), j.items.push(d(C, ue.value || ""));
                        break;
                    case 8:
                        const $e = b(C);
                        j.items.push($e.node), Q = $e.nextConsumeToken || null;
                        break
                }
            } while (H.currentType !== 14 && H.currentType !== 1);
            const oe = H.currentType === 1 ? H.lastOffset : C.currentOffset(),
                le = H.currentType === 1 ? H.lastEndLoc : C.currentPosition();
            return a(j, oe, le), j
        }

        function P(C, H, z, V) {
            const j = C.context();
            let Q = V.items.length === 0;
            const oe = s(1, H, z);
            oe.cases = [], oe.cases.push(V);
            do {
                const le = w(C);
                Q || (Q = le.items.length === 0), oe.cases.push(le)
            } while (j.currentType !== 14);
            return Q && n(C, it.MUST_HAVE_MESSAGES_IN_PLURAL, z, 0), a(oe, C.currentOffset(), C.currentPosition()), oe
        }

        function M(C) {
            const H = C.context(),
                {
                    offset: z,
                    startLoc: V
                } = H,
                j = w(C);
            return H.currentType === 14 ? j : P(C, z, V, j)
        }

        function G(C) {
            const H = Uee(C, er({}, e)),
                z = H.context(),
                V = s(0, z.offset, z.startLoc);
            return t && V.loc && (V.loc.source = C), V.body = M(H), z.currentType !== 14 && n(H, it.UNEXPECTED_LEXICAL_ANALYSIS, z.lastStartLoc, 0, C[z.offset] || ""), a(V, H.currentOffset(), H.currentPosition()), V
        }
        return {
            parse: G
        }
    }

    function bn(e) {
        if (e.type === 14) return "EOF";
        const t = (e.value || "").replace(/\r?\n/gu, "\\n");
        return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
    }

    function Wee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: a => (r.helpers.add(a), a)
        }
    }

    function xE(e, t) {
        for (let r = 0; r < e.length; r++) Vp(e[r], t)
    }

    function Vp(e, t) {
        switch (e.type) {
            case 1:
                xE(e.cases, t), t.helper("plural");
                break;
            case 2:
                xE(e.items, t);
                break;
            case 6:
                Vp(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function Vee(e, t = {}) {
        const r = Wee(e);
        r.helper("normalize"), e.body && Vp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function Kee(e, t) {
        const {
            sourceMap: r,
            filename: n,
            breakLineCode: s,
            needIndent: a
        } = t, l = {
            source: e.loc.source,
            filename: n,
            code: "",
            column: 1,
            line: 1,
            offset: 0,
            map: void 0,
            breakLineCode: s,
            needIndent: a,
            indentLevel: 0
        }, c = () => l;

        function f(M, G) {
            l.code += M
        }

        function d(M, G = !0) {
            const C = G ? s : "";
            f(a ? C + "  ".repeat(M) : C)
        }

        function p(M = !0) {
            const G = ++l.indentLevel;
            M && d(G)
        }

        function y(M = !0) {
            const G = --l.indentLevel;
            M && d(G)
        }

        function b() {
            d(l.indentLevel)
        }
        return {
            context: c,
            push: f,
            indent: p,
            deindent: y,
            newline: b,
            helper: M => `_${M}`,
            needIndent: () => l.needIndent
        }
    }

    function Hee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ta(e, t.key), t.modifier ? (e.push(", "), ta(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function qee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let a = 0; a < s && (ta(e, t.items[a]), a !== s - 1); a++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function Yee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let a = 0; a < s && (ta(e, t.cases[a]), a !== s - 1); a++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function zee(e, t) {
        t.body ? ta(e, t.body) : e.push("null")
    }

    function ta(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                zee(e, t);
                break;
            case 1:
                Yee(e, t);
                break;
            case 2:
                qee(e, t);
                break;
            case 6:
                Hee(e, t);
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
    const Xee = (e, t = {}) => {
        const r = _e(t.mode) ? t.mode : "normal",
            n = _e(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            a = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            c = e.helpers || [],
            f = Kee(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: a,
                needIndent: l
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), c.length > 0 && (f.push(`const { ${c.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ta(f, e), f.deindent(l), f.push("}");
        const {
            code: d,
            map: p
        } = f.context();
        return {
            ast: e,
            code: d,
            map: p ? p.toJSON() : void 0
        }
    };

    function Jee(e, t = {}) {
        const r = er({}, t),
            s = jee(r).parse(e);
        return Vee(s, r), Xee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Qee = {
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
    const Zee = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function ete(e) {
        return Zee.test(e)
    }

    function tte(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function rte(e) {
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

    function nte(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ete(t) ? tte(t) : "*" + t
    }

    function ite(e) {
        const t = [];
        let r = -1,
            n = 0,
            s = 0,
            a, l, c, f, d, p, y;
        const b = [];
        b[0] = () => {
            l === void 0 ? l = c : l += c
        }, b[1] = () => {
            l !== void 0 && (t.push(l), l = void 0)
        }, b[2] = () => {
            b[0](), s++
        }, b[3] = () => {
            if (s > 0) s--, n = 4, b[0]();
            else {
                if (s = 0, l === void 0 || (l = nte(l), l === !1)) return !1;
                b[1]()
            }
        };

        function w() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, c = "\\" + P, b[0](), !0
        }
        for (; n !== null;)
            if (r++, a = e[r], !(a === "\\" && w())) {
                if (f = rte(a), y = Oi[n], d = y[f] || y.l || 8, d === 8 || (n = d[0], d[1] !== void 0 && (p = b[d[1]], p && (c = a, p() === !1)))) return;
                if (n === 7) return t
            }
    }
    const DE = new Map;

    function ste(e, t) {
        return bt(e) ? e[t] : null
    }

    function ate(e, t) {
        if (!bt(e)) return null;
        let r = DE.get(t);
        if (r || (r = ite(t), r && DE.set(t, r)), !r) return null;
        const n = r.length;
        let s = e,
            a = 0;
        for (; a < n;) {
            const l = s[r[a]];
            if (l === void 0) return null;
            s = l, a++
        }
        return s
    }
    const ote = e => e,
        lte = e => "",
        cte = "text",
        ute = e => e.length === 0 ? "" : e.join(""),
        fte = Ree;

    function ME(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function dte(e) {
        const t = jt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (jt(e.named.count) || jt(e.named.n)) ? jt(e.named.count) ? e.named.count : jt(e.named.n) ? e.named.n : t : t
    }

    function hte(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function pte(e = {}) {
        const t = e.locale,
            r = dte(e),
            n = bt(e.pluralRules) && _e(t) && Pt(e.pluralRules[t]) ? e.pluralRules[t] : ME,
            s = bt(e.pluralRules) && _e(t) && Pt(e.pluralRules[t]) ? ME : void 0,
            a = C => C[n(r, C.length, s)],
            l = e.list || [],
            c = C => l[C],
            f = e.named || {};
        jt(e.pluralIndex) && hte(r, f);
        const d = C => f[C];

        function p(C) {
            const H = Pt(e.messages) ? e.messages(C) : bt(e.messages) ? e.messages[C] : !1;
            return H || (e.parent ? e.parent.message(C) : lte)
        }
        const y = C => e.modifiers ? e.modifiers[C] : ote,
            b = Be(e.processor) && Pt(e.processor.normalize) ? e.processor.normalize : ute,
            w = Be(e.processor) && Pt(e.processor.interpolate) ? e.processor.interpolate : fte,
            P = Be(e.processor) && _e(e.processor.type) ? e.processor.type : cte,
            G = {
                list: c,
                named: d,
                plural: a,
                linked: (C, ...H) => {
                    const [z, V] = H;
                    let j = "text",
                        Q = "";
                    H.length === 1 ? bt(z) ? (Q = z.modifier || Q, j = z.type || j) : _e(z) && (Q = z || Q) : H.length === 2 && (_e(z) && (Q = z || Q), _e(V) && (j = V || j));
                    let oe = p(C)(G);
                    return j === "vnode" && Et(oe) && Q && (oe = oe[0]), Q ? y(Q)(oe, j) : oe
                },
                message: p,
                type: P,
                interpolate: w,
                normalize: b
            };
        return G
    }
    let gte = null;
    Qee.FunctionTranslate;

    function mte(e) {
        return t => gte
    }
    const vte = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function yte(e, t, r) {
        return [...new Set([r, ...Et(t) ? t : bt(t) ? Object.keys(t) : _e(t) ? [t] : [r]])]
    }

    function NO(e, t, r) {
        const n = _e(r) ? r : Ao,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let a = s.__localeChainCache.get(n);
        if (!a) {
            a = [];
            let l = [r];
            for (; Et(l);) l = UE(a, l, t);
            const c = Et(t) || !Be(t) ? t : t.default ? t.default : null;
            l = _e(c) ? [c] : c, Et(l) && UE(a, l, !1), s.__localeChainCache.set(n, a)
        }
        return a
    }

    function UE(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Ze(n); s++) {
            const a = t[s];
            _e(a) && (n = _te(e, t[s], r))
        }
        return n
    }

    function _te(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const a = s.join("-");
            n = Ete(e, a, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Ete(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (Et(r) || Be(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const bte = "9.2.2",
        Zc = -1,
        Ao = "en-US",
        FE = "",
        BE = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Tte() {
        return {
            upper: (e, t) => t === "text" && _e(e) ? e.toUpperCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && _e(e) ? e.toLowerCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && _e(e) ? BE(e) : t === "vnode" && bt(e) && "__v_isVNode" in e ? BE(e.children) : e
        }
    }
    let PO;

    function Ate(e) {
        PO = e
    }
    let kO;

    function Ste(e) {
        kO = e
    }
    let xO;

    function Ote(e) {
        xO = e
    }
    let GE = 0;

    function wte(e = {}) {
        const t = _e(e.version) ? e.version : bte,
            r = _e(e.locale) ? e.locale : Ao,
            n = Et(e.fallbackLocale) || Be(e.fallbackLocale) || _e(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Be(e.messages) ? e.messages : {
                [r]: {}
            },
            a = Be(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            l = Be(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            c = er({}, e.modifiers || {}, Tte()),
            f = e.pluralRules || {},
            d = Pt(e.missing) ? e.missing : null,
            p = Ze(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            y = Ze(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = !!e.fallbackFormat,
            w = !!e.unresolving,
            P = Pt(e.postTranslation) ? e.postTranslation : null,
            M = Be(e.processor) ? e.processor : null,
            G = Ze(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            C = !!e.escapeParameter,
            H = Pt(e.messageCompiler) ? e.messageCompiler : PO,
            z = Pt(e.messageResolver) ? e.messageResolver : kO || ste,
            V = Pt(e.localeFallbacker) ? e.localeFallbacker : xO || yte,
            j = bt(e.fallbackContext) ? e.fallbackContext : void 0,
            Q = Pt(e.onWarn) ? e.onWarn : Iee,
            oe = e,
            le = bt(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = bt(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            $e = bt(oe.__meta) ? oe.__meta : {};
        GE++;
        const Ie = {
            version: t,
            cid: GE,
            locale: r,
            fallbackLocale: n,
            messages: s,
            modifiers: c,
            pluralRules: f,
            missing: d,
            missingWarn: p,
            fallbackWarn: y,
            fallbackFormat: b,
            unresolving: w,
            postTranslation: P,
            processor: M,
            warnHtmlMessage: G,
            escapeParameter: C,
            messageCompiler: H,
            messageResolver: z,
            localeFallbacker: V,
            fallbackContext: j,
            onWarn: Q,
            __meta: $e
        };
        return Ie.datetimeFormats = a, Ie.numberFormats = l, Ie.__datetimeFormatters = le, Ie.__numberFormatters = ue, Ie
    }

    function Kp(e, t, r, n, s) {
        const {
            missing: a,
            onWarn: l
        } = e;
        if (a !== null) {
            const c = a(e, r, t, s);
            return _e(c) ? c : t
        } else return t
    }

    function Pa(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const Cte = e => e;
    let jE = Object.create(null);

    function Ite(e, t = {}) {
        {
            const n = (t.onCacheKey || Cte)(e),
                s = jE[n];
            if (s) return s;
            let a = !1;
            const l = t.onError || Lee;
            t.onError = d => {
                a = !0, l(d)
            };
            const {
                code: c
            } = Jee(e, t), f = new Function(`return ${c}`)();
            return a ? f : jE[n] = f
        }
    }
    let DO = it.__EXTEND_POINT__;
    const cd = () => ++DO,
        xs = {
            INVALID_ARGUMENT: DO,
            INVALID_DATE_ARGUMENT: cd(),
            INVALID_ISO_DATE_ARGUMENT: cd(),
            __EXTEND_POINT__: cd()
        };

    function Ds(e) {
        return Qc(e, null, void 0)
    }
    const WE = () => "",
        ss = e => Pt(e);

    function VE(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: a,
            fallbackLocale: l,
            messages: c
        } = e, [f, d] = dh(...t), p = Ze(d.missingWarn) ? d.missingWarn : e.missingWarn, y = Ze(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, b = Ze(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, w = !!d.resolvedMessage, P = _e(d.default) || Ze(d.default) ? Ze(d.default) ? a ? f : () => f : d.default : r ? a ? f : () => f : "", M = r || P !== "", G = _e(d.locale) ? d.locale : e.locale;
        b && $te(d);
        let [C, H, z] = w ? [f, G, c[G] || {}] : MO(e, f, G, l, y, p), V = C, j = f;
        if (!w && !(_e(V) || ss(V)) && M && (V = P, j = V), !w && (!(_e(V) || ss(V)) || !_e(H))) return s ? Zc : f;
        let Q = !1;
        const oe = () => {
                Q = !0
            },
            le = ss(V) ? V : UO(e, f, H, V, j, oe);
        if (Q) return V;
        const ue = Nte(e, H, z, d),
            $e = pte(ue),
            Ie = Rte(e, le, $e);
        return n ? n(Ie, f) : Ie
    }

    function $te(e) {
        Et(e.list) ? e.list = e.list.map(t => _e(t) ? PE(t) : t) : bt(e.named) && Object.keys(e.named).forEach(t => {
            _e(e.named[t]) && (e.named[t] = PE(e.named[t]))
        })
    }

    function MO(e, t, r, n, s, a) {
        const {
            messages: l,
            onWarn: c,
            messageResolver: f,
            localeFallbacker: d
        } = e, p = d(e, n, r);
        let y = {},
            b, w = null;
        const P = "translate";
        for (let M = 0; M < p.length && (b = p[M], y = l[b] || {}, (w = f(y, t)) === null && (w = y[t]), !(_e(w) || Pt(w))); M++) {
            const G = Kp(e, t, b, a, P);
            G !== t && (w = G)
        }
        return [w, b, y]
    }

    function UO(e, t, r, n, s, a) {
        const {
            messageCompiler: l,
            warnHtmlMessage: c
        } = e;
        if (ss(n)) {
            const d = n;
            return d.locale = d.locale || r, d.key = d.key || t, d
        }
        if (l == null) {
            const d = () => n;
            return d.locale = r, d.key = t, d
        }
        const f = l(n, Lte(e, r, s, n, c, a));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function Rte(e, t, r) {
        return t(r)
    }

    function dh(...e) {
        const [t, r, n] = e, s = {};
        if (!_e(t) && !jt(t) && !ss(t)) throw Ds(xs.INVALID_ARGUMENT);
        const a = jt(t) ? String(t) : (ss(t), t);
        return jt(r) ? s.plural = r : _e(r) ? s.default = r : Be(r) && !Jc(r) ? s.named = r : Et(r) && (s.list = r), jt(n) ? s.plural = n : _e(n) ? s.default = n : Be(n) && er(s, n), [a, s]
    }

    function Lte(e, t, r, n, s, a) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw a && a(l), l
            },
            onCacheKey: l => Oee(t, r, l)
        }
    }

    function Nte(e, t, r, n) {
        const {
            modifiers: s,
            pluralRules: a,
            messageResolver: l,
            fallbackLocale: c,
            fallbackWarn: f,
            missingWarn: d,
            fallbackContext: p
        } = e, b = {
            locale: t,
            modifiers: s,
            pluralRules: a,
            messages: w => {
                let P = l(r, w);
                if (P == null && p) {
                    const [, , M] = MO(p, w, t, c, f, d);
                    P = l(M, w)
                }
                if (_e(P)) {
                    let M = !1;
                    const C = UO(e, w, t, P, w, () => {
                        M = !0
                    });
                    return M ? WE : C
                } else return ss(P) ? P : WE
            }
        };
        return e.processor && (b.processor = e.processor), n.list && (b.list = n.list), n.named && (b.named = n.named), jt(n.plural) && (b.pluralIndex = n.plural), b
    }

    function KE(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: a,
            localeFallbacker: l
        } = e, {
            __datetimeFormatters: c
        } = e, [f, d, p, y] = hh(...t), b = Ze(p.missingWarn) ? p.missingWarn : e.missingWarn;
        Ze(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
        const w = !!p.part,
            P = _e(p.locale) ? p.locale : e.locale,
            M = l(e, s, P);
        if (!_e(f) || f === "") return new Intl.DateTimeFormat(P, y).format(d);
        let G = {},
            C, H = null;
        const z = "datetime format";
        for (let Q = 0; Q < M.length && (C = M[Q], G = r[C] || {}, H = G[f], !Be(H)); Q++) Kp(e, f, C, b, z);
        if (!Be(H) || !_e(C)) return n ? Zc : f;
        let V = `${C}__${f}`;
        Jc(y) || (V = `${V}__${JSON.stringify(y)}`);
        let j = c.get(V);
        return j || (j = new Intl.DateTimeFormat(C, er({}, H, y)), c.set(V, j)), w ? j.formatToParts(d) : j.format(d)
    }
    const FO = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function hh(...e) {
        const [t, r, n, s] = e, a = {};
        let l = {},
            c;
        if (_e(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Ds(xs.INVALID_ISO_DATE_ARGUMENT);
            const d = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            c = new Date(d);
            try {
                c.toISOString()
            } catch {
                throw Ds(xs.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if (Cee(t)) {
            if (isNaN(t.getTime())) throw Ds(xs.INVALID_DATE_ARGUMENT);
            c = t
        } else if (jt(t)) c = t;
        else throw Ds(xs.INVALID_ARGUMENT);
        return _e(r) ? a.key = r : Be(r) && Object.keys(r).forEach(f => {
            FO.includes(f) ? l[f] = r[f] : a[f] = r[f]
        }), _e(n) ? a.locale = n : Be(n) && (l = n), Be(s) && (l = s), [a.key || "", c, a, l]
    }

    function HE(e, t, r) {
        const n = e;
        for (const s in r) {
            const a = `${t}__${s}`;
            !n.__datetimeFormatters.has(a) || n.__datetimeFormatters.delete(a)
        }
    }

    function qE(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: a,
            localeFallbacker: l
        } = e, {
            __numberFormatters: c
        } = e, [f, d, p, y] = ph(...t), b = Ze(p.missingWarn) ? p.missingWarn : e.missingWarn;
        Ze(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
        const w = !!p.part,
            P = _e(p.locale) ? p.locale : e.locale,
            M = l(e, s, P);
        if (!_e(f) || f === "") return new Intl.NumberFormat(P, y).format(d);
        let G = {},
            C, H = null;
        const z = "number format";
        for (let Q = 0; Q < M.length && (C = M[Q], G = r[C] || {}, H = G[f], !Be(H)); Q++) Kp(e, f, C, b, z);
        if (!Be(H) || !_e(C)) return n ? Zc : f;
        let V = `${C}__${f}`;
        Jc(y) || (V = `${V}__${JSON.stringify(y)}`);
        let j = c.get(V);
        return j || (j = new Intl.NumberFormat(C, er({}, H, y)), c.set(V, j)), w ? j.formatToParts(d) : j.format(d)
    }
    const BO = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ph(...e) {
        const [t, r, n, s] = e, a = {};
        let l = {};
        if (!jt(t)) throw Ds(xs.INVALID_ARGUMENT);
        const c = t;
        return _e(r) ? a.key = r : Be(r) && Object.keys(r).forEach(f => {
            BO.includes(f) ? l[f] = r[f] : a[f] = r[f]
        }), _e(n) ? a.locale = n : Be(n) && (l = n), Be(s) && (l = s), [a.key || "", c, a, l]
    }

    function YE(e, t, r) {
        const n = e;
        for (const s in r) {
            const a = `${t}__${s}`;
            !n.__numberFormatters.has(a) || n.__numberFormatters.delete(a)
        }
    }
    /*!
     * vue-i18n v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Pte = "9.2.2";
    vte.__EXTEND_POINT__;
    let GO = it.__EXTEND_POINT__;
    const Tr = () => ++GO,
        Ut = {
            UNEXPECTED_RETURN_TYPE: GO,
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

    function Vt(e, ...t) {
        return Qc(e, null, void 0)
    }
    const gh = Si("__transrateVNode"),
        mh = Si("__datetimeParts"),
        vh = Si("__numberParts"),
        jO = Si("__setPluralRules");
    Si("__intlifyMeta");
    const WO = Si("__injectWithOption");

    function yh(e) {
        if (!bt(e)) return e;
        for (const t in e)
            if (!!jp(e, t))
                if (!t.includes(".")) bt(e[t]) && yh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let a = 0; a < n; a++) r[a] in s || (s[r[a]] = {}), s = s[r[a]];
                    s[r[n]] = e[t], delete e[t], bt(s[r[n]]) && yh(s[r[n]])
                } return e
    }

    function eu(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: a
        } = t, l = Be(r) ? r : Et(n) ? {} : {
            [e]: {}
        };
        if (Et(n) && n.forEach(c => {
                if ("locale" in c && "resource" in c) {
                    const {
                        locale: f,
                        resource: d
                    } = c;
                    f ? (l[f] = l[f] || {}, Ya(d, l[f])) : Ya(d, l)
                } else _e(c) && Ya(JSON.parse(c), l)
            }), s == null && a)
            for (const c in l) jp(l, c) && yh(l[c]);
        return l
    }
    const Rl = e => !bt(e) || Et(e);

    function Ya(e, t) {
        if (Rl(e) || Rl(t)) throw Vt(Ut.INVALID_VALUE);
        for (const r in e) jp(e, r) && (Rl(e[r]) || Rl(t[r]) ? t[r] = e[r] : Ya(e[r], t[r]))
    }

    function kte(e) {
        return e.type
    }

    function VO(e, t, r) {
        let n = bt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = eu(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(a => {
            e.mergeLocaleMessage(a, n[a])
        }); {
            if (bt(t.datetimeFormats)) {
                const a = Object.keys(t.datetimeFormats);
                a.length && a.forEach(l => {
                    e.mergeDateTimeFormat(l, t.datetimeFormats[l])
                })
            }
            if (bt(t.numberFormats)) {
                const a = Object.keys(t.numberFormats);
                a.length && a.forEach(l => {
                    e.mergeNumberFormat(l, t.numberFormats[l])
                })
            }
        }
    }

    function zE(e) {
        return pt(Tc, null, e, 0)
    }
    let XE = 0;

    function JE(e) {
        return (t, r, n, s) => e(r, n, as() || void 0, s)
    }

    function Hp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Ze(e.inheritLocale) ? e.inheritLocale : !0;
        const a = ln(r && s ? r.locale.value : _e(e.locale) ? e.locale : Ao),
            l = ln(r && s ? r.fallbackLocale.value : _e(e.fallbackLocale) || Et(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value),
            c = ln(eu(a.value, e)),
            f = ln(Be(e.datetimeFormats) ? e.datetimeFormats : {
                [a.value]: {}
            }),
            d = ln(Be(e.numberFormats) ? e.numberFormats : {
                [a.value]: {}
            });
        let p = r ? r.missingWarn : Ze(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : Ze(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = r ? r.fallbackRoot : Ze(e.fallbackRoot) ? e.fallbackRoot : !0,
            w = !!e.fallbackFormat,
            P = Pt(e.missing) ? e.missing : null,
            M = Pt(e.missing) ? JE(e.missing) : null,
            G = Pt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : Ze(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const z = r ? r.modifiers : Be(e.modifiers) ? e.modifiers : {};
        let V = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const $ = {
                version: Pte,
                locale: a.value,
                fallbackLocale: l.value,
                messages: c.value,
                modifiers: z,
                pluralRules: V,
                missing: M === null ? void 0 : M,
                missingWarn: p,
                fallbackWarn: y,
                fallbackFormat: w,
                unresolving: !0,
                postTranslation: G === null ? void 0 : G,
                warnHtmlMessage: C,
                escapeParameter: H,
                messageResolver: e.messageResolver,
                __meta: {
                    framework: "vue"
                }
            };
            return $.datetimeFormats = f.value, $.numberFormats = d.value, $.__datetimeFormatters = Be(j) ? j.__datetimeFormatters : void 0, $.__numberFormatters = Be(j) ? j.__numberFormatters : void 0, wte($)
        })(), Pa(j, a.value, l.value);

        function oe() {
            return [a.value, l.value, c.value, f.value, d.value]
        }
        const le = xr({
                get: () => a.value,
                set: $ => {
                    a.value = $, j.locale = a.value
                }
            }),
            ue = xr({
                get: () => l.value,
                set: $ => {
                    l.value = $, j.fallbackLocale = l.value, Pa(j, a.value, $)
                }
            }),
            $e = xr(() => c.value),
            Ie = xr(() => f.value),
            fe = xr(() => d.value);

        function Ce() {
            return Pt(G) ? G : null
        }

        function U($) {
            G = $, j.postTranslation = $
        }

        function ie() {
            return P
        }

        function de($) {
            $ !== null && (M = JE($)), P = $, j.missing = M
        }
        const be = ($, K, he, pe, Re, xe) => {
            oe();
            let O;
            if (O = $(j), jt(O) && O === Zc) {
                const [T, L] = K();
                return r && b ? pe(r) : Re(T)
            } else {
                if (xe(O)) return O;
                throw Vt(Ut.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ye(...$) {
            return be(K => Reflect.apply(VE, null, [K, ...$]), () => dh(...$), "translate", K => Reflect.apply(K.t, K, [...$]), K => K, K => _e(K))
        }

        function Oe(...$) {
            const [K, he, pe] = $;
            if (pe && !bt(pe)) throw Vt(Ut.INVALID_ARGUMENT);
            return ye(K, he, er({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Ue(...$) {
            return be(K => Reflect.apply(KE, null, [K, ...$]), () => hh(...$), "datetime format", K => Reflect.apply(K.d, K, [...$]), () => FE, K => _e(K))
        }

        function je(...$) {
            return be(K => Reflect.apply(qE, null, [K, ...$]), () => ph(...$), "number format", K => Reflect.apply(K.n, K, [...$]), () => FE, K => _e(K))
        }

        function nt($) {
            return $.map(K => _e(K) || jt(K) || Ze(K) ? zE(String(K)) : K)
        }
        const wr = {
            normalize: nt,
            interpolate: $ => $,
            type: "vnode"
        };

        function rr(...$) {
            return be(K => {
                let he;
                const pe = K;
                try {
                    pe.processor = wr, he = Reflect.apply(VE, null, [pe, ...$])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => dh(...$), "translate", K => K[gh](...$), K => [zE(K)], K => Et(K))
        }

        function vr(...$) {
            return be(K => Reflect.apply(qE, null, [K, ...$]), () => ph(...$), "number format", K => K[vh](...$), () => [], K => _e(K) || Et(K))
        }

        function lt(...$) {
            return be(K => Reflect.apply(KE, null, [K, ...$]), () => hh(...$), "datetime format", K => K[mh](...$), () => [], K => _e(K) || Et(K))
        }

        function St($) {
            V = $, j.pluralRules = V
        }

        function ct($, K) {
            const he = _e(K) ? K : a.value,
                pe = Dt(he);
            return j.messageResolver(pe, $) !== null
        }

        function xt($) {
            let K = null;
            const he = NO(j, l.value, a.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Re = c.value[he[pe]] || {},
                    xe = j.messageResolver(Re, $);
                if (xe != null) {
                    K = xe;
                    break
                }
            }
            return K
        }

        function Kt($) {
            const K = xt($);
            return K != null ? K : r ? r.tm($) || {} : {}
        }

        function Dt($) {
            return c.value[$] || {}
        }

        function m($, K) {
            c.value[$] = K, j.messages = c.value
        }

        function g($, K) {
            c.value[$] = c.value[$] || {}, Ya(K, c.value[$]), j.messages = c.value
        }

        function S($) {
            return f.value[$] || {}
        }

        function D($, K) {
            f.value[$] = K, j.datetimeFormats = f.value, HE(j, $, K)
        }

        function B($, K) {
            f.value[$] = er(f.value[$] || {}, K), j.datetimeFormats = f.value, HE(j, $, K)
        }

        function Y($) {
            return d.value[$] || {}
        }

        function ce($, K) {
            d.value[$] = K, j.numberFormats = d.value, YE(j, $, K)
        }

        function se($, K) {
            d.value[$] = er(d.value[$] || {}, K), j.numberFormats = d.value, YE(j, $, K)
        }
        XE++, r && uh && (Zi(r.locale, $ => {
            s && (a.value = $, j.locale = $, Pa(j, a.value, l.value))
        }), Zi(r.fallbackLocale, $ => {
            s && (l.value = $, j.fallbackLocale = $, Pa(j, a.value, l.value))
        }));
        const re = {
            id: XE,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale($) {
                s = $, $ && r && (a.value = r.locale.value, l.value = r.fallbackLocale.value, Pa(j, a.value, l.value))
            },
            get availableLocales() {
                return Object.keys(c.value).sort()
            },
            messages: $e,
            get modifiers() {
                return z
            },
            get pluralRules() {
                return V || {}
            },
            get isGlobal() {
                return n
            },
            get missingWarn() {
                return p
            },
            set missingWarn($) {
                p = $, j.missingWarn = p
            },
            get fallbackWarn() {
                return y
            },
            set fallbackWarn($) {
                y = $, j.fallbackWarn = y
            },
            get fallbackRoot() {
                return b
            },
            set fallbackRoot($) {
                b = $
            },
            get fallbackFormat() {
                return w
            },
            set fallbackFormat($) {
                w = $, j.fallbackFormat = w
            },
            get warnHtmlMessage() {
                return C
            },
            set warnHtmlMessage($) {
                C = $, j.warnHtmlMessage = $
            },
            get escapeParameter() {
                return H
            },
            set escapeParameter($) {
                H = $, j.escapeParameter = $
            },
            t: ye,
            getLocaleMessage: Dt,
            setLocaleMessage: m,
            mergeLocaleMessage: g,
            getPostTranslationHandler: Ce,
            setPostTranslationHandler: U,
            getMissingHandler: ie,
            setMissingHandler: de,
            [jO]: St
        };
        return re.datetimeFormats = Ie, re.numberFormats = fe, re.rt = Oe, re.te = ct, re.tm = Kt, re.d = Ue, re.n = je, re.getDateTimeFormat = S, re.setDateTimeFormat = D, re.mergeDateTimeFormat = B, re.getNumberFormat = Y, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[WO] = e.__injectWithOption, re[gh] = rr, re[mh] = lt, re[vh] = vr, re
    }

    function xte(e) {
        const t = _e(e.locale) ? e.locale : Ao,
            r = _e(e.fallbackLocale) || Et(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
            n = Pt(e.missing) ? e.missing : void 0,
            s = Ze(e.silentTranslationWarn) || mi(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
            a = Ze(e.silentFallbackWarn) || mi(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
            l = Ze(e.fallbackRoot) ? e.fallbackRoot : !0,
            c = !!e.formatFallbackMessages,
            f = Be(e.modifiers) ? e.modifiers : {},
            d = e.pluralizationRules,
            p = Pt(e.postTranslation) ? e.postTranslation : void 0,
            y = _e(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
            b = !!e.escapeParameterHtml,
            w = Ze(e.sync) ? e.sync : !0;
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
            __root: G,
            __injectWithOption: C
        } = e, H = e.datetimeFormats, z = e.numberFormats, V = e.flatJson;
        return {
            locale: t,
            fallbackLocale: r,
            messages: P,
            flatJson: V,
            datetimeFormats: H,
            numberFormats: z,
            missing: n,
            missingWarn: s,
            fallbackWarn: a,
            fallbackRoot: l,
            fallbackFormat: c,
            modifiers: f,
            pluralRules: d,
            postTranslation: p,
            warnHtmlMessage: y,
            escapeParameter: b,
            messageResolver: e.messageResolver,
            inheritLocale: w,
            __i18n: M,
            __root: G,
            __injectWithOption: C
        }
    }

    function _h(e = {}, t) {
        {
            const r = Hp(xte(e)),
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
                        return Ze(r.missingWarn) ? !r.missingWarn : r.missingWarn
                    },
                    set silentTranslationWarn(s) {
                        r.missingWarn = Ze(s) ? !s : s
                    },
                    get silentFallbackWarn() {
                        return Ze(r.fallbackWarn) ? !r.fallbackWarn : r.fallbackWarn
                    },
                    set silentFallbackWarn(s) {
                        r.fallbackWarn = Ze(s) ? !s : s
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
                        const [a, l, c] = s, f = {};
                        let d = null,
                            p = null;
                        if (!_e(a)) throw Vt(Ut.INVALID_ARGUMENT);
                        const y = a;
                        return _e(l) ? f.locale = l : Et(l) ? d = l : Be(l) && (p = l), Et(c) ? d = c : Be(c) && (p = c), Reflect.apply(r.t, r, [y, d || p || {}, f])
                    },
                    rt(...s) {
                        return Reflect.apply(r.rt, r, [...s])
                    },
                    tc(...s) {
                        const [a, l, c] = s, f = {
                            plural: 1
                        };
                        let d = null,
                            p = null;
                        if (!_e(a)) throw Vt(Ut.INVALID_ARGUMENT);
                        const y = a;
                        return _e(l) ? f.locale = l : jt(l) ? f.plural = l : Et(l) ? d = l : Be(l) && (p = l), _e(c) ? f.locale = c : Et(c) ? d = c : Be(c) && (p = c), Reflect.apply(r.t, r, [y, d || p || {}, f])
                    },
                    te(s, a) {
                        return r.te(s, a)
                    },
                    tm(s) {
                        return r.tm(s)
                    },
                    getLocaleMessage(s) {
                        return r.getLocaleMessage(s)
                    },
                    setLocaleMessage(s, a) {
                        r.setLocaleMessage(s, a)
                    },
                    mergeLocaleMessage(s, a) {
                        r.mergeLocaleMessage(s, a)
                    },
                    d(...s) {
                        return Reflect.apply(r.d, r, [...s])
                    },
                    getDateTimeFormat(s) {
                        return r.getDateTimeFormat(s)
                    },
                    setDateTimeFormat(s, a) {
                        r.setDateTimeFormat(s, a)
                    },
                    mergeDateTimeFormat(s, a) {
                        r.mergeDateTimeFormat(s, a)
                    },
                    n(...s) {
                        return Reflect.apply(r.n, r, [...s])
                    },
                    getNumberFormat(s) {
                        return r.getNumberFormat(s)
                    },
                    setNumberFormat(s, a) {
                        r.setNumberFormat(s, a)
                    },
                    mergeNumberFormat(s, a) {
                        r.mergeNumberFormat(s, a)
                    },
                    getChoiceIndex(s, a) {
                        return -1
                    },
                    __onComponentInstanceCreated(s) {
                        const {
                            componentInstanceCreatedListener: a
                        } = e;
                        a && a(s, n)
                    }
                };
            return n
        }
    }
    const qp = {
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

    function Dte({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ...Et(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function KO(e) {
        return qe
    }
    const QE = {
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
        }, qp),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Yp({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const a = Object.keys(r).filter(y => y !== "_"),
                    l = {};
                e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = _e(e.plural) ? +e.plural : e.plural);
                const c = Dte(t, a),
                    f = s[gh](e.keypath, c, l),
                    d = er({}, n),
                    p = _e(e.tag) || bt(e.tag) ? e.tag : KO();
                return Gh(p, d, f)
            }
        }
    };

    function Mte(e) {
        return Et(e) && !_e(e[0])
    }

    function HO(e, t, r, n) {
        const {
            slots: s,
            attrs: a
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let c = {};
            e.locale && (l.locale = e.locale), _e(e.format) ? l.key = e.format : bt(e.format) && (_e(e.format.key) && (l.key = e.format.key), c = Object.keys(e.format).reduce((b, w) => r.includes(w) ? er({}, b, {
                [w]: e.format[w]
            }) : b, {}));
            const f = n(e.value, l, c);
            let d = [l.key];
            Et(f) ? d = f.map((b, w) => {
                const P = s[b.type],
                    M = P ? P({
                        [b.type]: b.value,
                        index: w,
                        parts: f
                    }) : [b.value];
                return Mte(M) && (M[0].key = `${b.type}-${w}`), M
            }) : _e(f) && (d = [f]);
            const p = er({}, a),
                y = _e(e.tag) || bt(e.tag) ? e.tag : KO();
            return Gh(y, p, d)
        }
    }
    const ZE = {
            name: "i18n-n",
            props: er({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, qp),
            setup(e, t) {
                const r = e.i18n || Yp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return HO(e, t, BO, (...n) => r[vh](...n))
            }
        },
        eb = {
            name: "i18n-d",
            props: er({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, qp),
            setup(e, t) {
                const r = e.i18n || Yp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return HO(e, t, FO, (...n) => r[mh](...n))
            }
        };

    function Ute(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function Fte(e) {
        const t = l => {
            const {
                instance: c,
                modifiers: f,
                value: d
            } = l;
            if (!c || !c.$) throw Vt(Ut.UNEXPECTED_ERROR);
            const p = Ute(e, c.$),
                y = tb(d);
            return [Reflect.apply(p.t, p, [...rb(y)]), p]
        };
        return {
            created: (l, c) => {
                const [f, d] = t(c);
                uh && e.global === d && (l.__i18nWatcher = Zi(d.locale, () => {
                    c.instance && c.instance.$forceUpdate()
                })), l.__composer = d, l.textContent = f
            },
            unmounted: l => {
                uh && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer)
            },
            beforeUpdate: (l, {
                value: c
            }) => {
                if (l.__composer) {
                    const f = l.__composer,
                        d = tb(c);
                    l.textContent = Reflect.apply(f.t, f, [...rb(d)])
                }
            },
            getSSRProps: l => {
                const [c] = t(l);
                return {
                    textContent: c
                }
            }
        }
    }

    function tb(e) {
        if (_e(e)) return {
            path: e
        };
        if (Be(e)) {
            if (!("path" in e)) throw Vt(Ut.REQUIRED_VALUE, "path");
            return e
        } else throw Vt(Ut.INVALID_VALUE)
    }

    function rb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: a
        } = e, l = {}, c = n || {};
        return _e(r) && (l.locale = r), jt(s) && (l.plural = s), jt(a) && (l.plural = a), [t, c, l]
    }

    function Bte(e, t, ...r) {
        const n = Be(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Ze(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : QE.name, QE), e.component(ZE.name, ZE), e.component(eb.name, eb)), e.directive("t", Fte(t))
    }

    function Gte(e, t, r) {
        return {
            beforeCreate() {
                const n = as();
                if (!n) throw Vt(Ut.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const a = s.i18n;
                    s.__i18n && (a.__i18n = s.__i18n), a.__root = t, this === this.$root ? this.$i18n = nb(e, a) : (a.__injectWithOption = !0, this.$i18n = _h(a))
                } else s.__i18n ? this === this.$root ? this.$i18n = nb(e, s) : this.$i18n = _h({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && VO(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, l) => this.$i18n.te(a, l), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = a => this.$i18n.tm(a)
            },
            mounted() {},
            unmounted() {
                const n = as();
                if (!n) throw Vt(Ut.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function nb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[jO](t.pluralizationRules || e.pluralizationRules);
        const r = eu(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const jte = Si("global-vue-i18n");

    function Wte(e = {}, t) {
        const r = Ze(e.legacy) ? e.legacy : !0,
            n = Ze(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            a = new Map,
            [l, c] = Vte(e, r),
            f = Si("");

        function d(b) {
            return a.get(b) || null
        }

        function p(b, w) {
            a.set(b, w)
        }

        function y(b) {
            a.delete(b)
        } {
            const b = {
                get mode() {
                    return r ? "legacy" : "composition"
                },
                get allowComposition() {
                    return s
                },
                async install(w, ...P) {
                    w.__VUE_I18N_SYMBOL__ = f, w.provide(w.__VUE_I18N_SYMBOL__, b), !r && n && Zte(w, b.global), Bte(w, b, ...P), r && w.mixin(Gte(c, c.__composer, b));
                    const M = w.unmount;
                    w.unmount = () => {
                        b.dispose(), M()
                    }
                },
                get global() {
                    return c
                },
                dispose() {
                    l.stop()
                },
                __instances: a,
                __getInstance: d,
                __setInstance: p,
                __deleteInstance: y
            };
            return b
        }
    }

    function Yp(e = {}) {
        const t = as();
        if (t == null) throw Vt(Ut.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Vt(Ut.NOT_INSLALLED);
        const r = Kte(t),
            n = qte(r),
            s = kte(t),
            a = Hte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Vt(Ut.NOT_AVAILABLE_IN_LEGACY_MODE);
            return Xte(t, a, n, e)
        }
        if (a === "global") return VO(n, e, s), n;
        if (a === "parent") {
            let f = Yte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let c = l.__getInstance(t);
        if (c == null) {
            const f = er({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), c = Hp(f), zte(l, t), l.__setInstance(t, c)
        }
        return c
    }

    function Vte(e, t, r) {
        const n = zL(); {
            const s = t ? n.run(() => _h(e)) : n.run(() => Hp(e));
            if (s == null) throw Vt(Ut.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function Kte(e) {
        {
            const t = Qi(e.isCE ? jte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Vt(e.isCE ? Ut.NOT_INSLALLED_WITH_PROVIDE : Ut.UNEXPECTED_ERROR);
            return t
        }
    }

    function Hte(e, t) {
        return Jc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function qte(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function Yte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let a = t.parent;
        for (; a != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(a);
            else {
                const c = l.__getInstance(a);
                c != null && (n = c.__composer, r && n && !n[WO] && (n = null))
            }
            if (n != null || s === a) break;
            a = a.parent
        }
        return n
    }

    function zte(e, t, r) {
        Ph(() => {}, t), kh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function Xte(e, t, r, n = {}) {
        const s = t === "local",
            a = AN(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Vt(Ut.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Ze(n.inheritLocale) ? n.inheritLocale : !0,
            c = ln(s && l ? r.locale.value : _e(n.locale) ? n.locale : Ao),
            f = ln(s && l ? r.fallbackLocale.value : _e(n.fallbackLocale) || Et(n.fallbackLocale) || Be(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : c.value),
            d = ln(eu(c.value, n)),
            p = ln(Be(n.datetimeFormats) ? n.datetimeFormats : {
                [c.value]: {}
            }),
            y = ln(Be(n.numberFormats) ? n.numberFormats : {
                [c.value]: {}
            }),
            b = s ? r.missingWarn : Ze(n.missingWarn) || mi(n.missingWarn) ? n.missingWarn : !0,
            w = s ? r.fallbackWarn : Ze(n.fallbackWarn) || mi(n.fallbackWarn) ? n.fallbackWarn : !0,
            P = s ? r.fallbackRoot : Ze(n.fallbackRoot) ? n.fallbackRoot : !0,
            M = !!n.fallbackFormat,
            G = Pt(n.missing) ? n.missing : null,
            C = Pt(n.postTranslation) ? n.postTranslation : null,
            H = s ? r.warnHtmlMessage : Ze(n.warnHtmlMessage) ? n.warnHtmlMessage : !0,
            z = !!n.escapeParameter,
            V = s ? r.modifiers : Be(n.modifiers) ? n.modifiers : {},
            j = n.pluralRules || s && r.pluralRules;

        function Q() {
            return [c.value, f.value, d.value, p.value, y.value]
        }
        const oe = xr({
                get: () => a.value ? a.value.locale.value : c.value,
                set: g => {
                    a.value && (a.value.locale.value = g), c.value = g
                }
            }),
            le = xr({
                get: () => a.value ? a.value.fallbackLocale.value : f.value,
                set: g => {
                    a.value && (a.value.fallbackLocale.value = g), f.value = g
                }
            }),
            ue = xr(() => a.value ? a.value.messages.value : d.value),
            $e = xr(() => p.value),
            Ie = xr(() => y.value);

        function fe() {
            return a.value ? a.value.getPostTranslationHandler() : C
        }

        function Ce(g) {
            a.value && a.value.setPostTranslationHandler(g)
        }

        function U() {
            return a.value ? a.value.getMissingHandler() : G
        }

        function ie(g) {
            a.value && a.value.setMissingHandler(g)
        }

        function de(g) {
            return Q(), g()
        }

        function be(...g) {
            return a.value ? de(() => Reflect.apply(a.value.t, null, [...g])) : de(() => "")
        }

        function ye(...g) {
            return a.value ? Reflect.apply(a.value.rt, null, [...g]) : ""
        }

        function Oe(...g) {
            return a.value ? de(() => Reflect.apply(a.value.d, null, [...g])) : de(() => "")
        }

        function Ue(...g) {
            return a.value ? de(() => Reflect.apply(a.value.n, null, [...g])) : de(() => "")
        }

        function je(g) {
            return a.value ? a.value.tm(g) : {}
        }

        function nt(g, S) {
            return a.value ? a.value.te(g, S) : !1
        }

        function It(g) {
            return a.value ? a.value.getLocaleMessage(g) : {}
        }

        function wr(g, S) {
            a.value && (a.value.setLocaleMessage(g, S), d.value[g] = S)
        }

        function rr(g, S) {
            a.value && a.value.mergeLocaleMessage(g, S)
        }

        function vr(g) {
            return a.value ? a.value.getDateTimeFormat(g) : {}
        }

        function lt(g, S) {
            a.value && (a.value.setDateTimeFormat(g, S), p.value[g] = S)
        }

        function St(g, S) {
            a.value && a.value.mergeDateTimeFormat(g, S)
        }

        function ct(g) {
            return a.value ? a.value.getNumberFormat(g) : {}
        }

        function xt(g, S) {
            a.value && (a.value.setNumberFormat(g, S), y.value[g] = S)
        }

        function Kt(g, S) {
            a.value && a.value.mergeNumberFormat(g, S)
        }
        const Dt = {
            get id() {
                return a.value ? a.value.id : -1
            },
            locale: oe,
            fallbackLocale: le,
            messages: ue,
            datetimeFormats: $e,
            numberFormats: Ie,
            get inheritLocale() {
                return a.value ? a.value.inheritLocale : l
            },
            set inheritLocale(g) {
                a.value && (a.value.inheritLocale = g)
            },
            get availableLocales() {
                return a.value ? a.value.availableLocales : Object.keys(d.value)
            },
            get modifiers() {
                return a.value ? a.value.modifiers : V
            },
            get pluralRules() {
                return a.value ? a.value.pluralRules : j
            },
            get isGlobal() {
                return a.value ? a.value.isGlobal : !1
            },
            get missingWarn() {
                return a.value ? a.value.missingWarn : b
            },
            set missingWarn(g) {
                a.value && (a.value.missingWarn = g)
            },
            get fallbackWarn() {
                return a.value ? a.value.fallbackWarn : w
            },
            set fallbackWarn(g) {
                a.value && (a.value.missingWarn = g)
            },
            get fallbackRoot() {
                return a.value ? a.value.fallbackRoot : P
            },
            set fallbackRoot(g) {
                a.value && (a.value.fallbackRoot = g)
            },
            get fallbackFormat() {
                return a.value ? a.value.fallbackFormat : M
            },
            set fallbackFormat(g) {
                a.value && (a.value.fallbackFormat = g)
            },
            get warnHtmlMessage() {
                return a.value ? a.value.warnHtmlMessage : H
            },
            set warnHtmlMessage(g) {
                a.value && (a.value.warnHtmlMessage = g)
            },
            get escapeParameter() {
                return a.value ? a.value.escapeParameter : z
            },
            set escapeParameter(g) {
                a.value && (a.value.escapeParameter = g)
            },
            t: be,
            getPostTranslationHandler: fe,
            setPostTranslationHandler: Ce,
            getMissingHandler: U,
            setMissingHandler: ie,
            rt: ye,
            d: Oe,
            n: Ue,
            tm: je,
            te: nt,
            getLocaleMessage: It,
            setLocaleMessage: wr,
            mergeLocaleMessage: rr,
            getDateTimeFormat: vr,
            setDateTimeFormat: lt,
            mergeDateTimeFormat: St,
            getNumberFormat: ct,
            setNumberFormat: xt,
            mergeNumberFormat: Kt
        };

        function m(g) {
            g.locale.value = c.value, g.fallbackLocale.value = f.value, Object.keys(d.value).forEach(S => {
                g.mergeLocaleMessage(S, d.value[S])
            }), Object.keys(p.value).forEach(S => {
                g.mergeDateTimeFormat(S, p.value[S])
            }), Object.keys(y.value).forEach(S => {
                g.mergeNumberFormat(S, y.value[S])
            }), g.escapeParameter = z, g.fallbackFormat = M, g.fallbackRoot = P, g.fallbackWarn = w, g.missingWarn = b, g.warnHtmlMessage = H
        }
        return Hb(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Vt(Ut.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const g = a.value = e.proxy.$i18n.__composer;
            t === "global" ? (c.value = g.locale.value, f.value = g.fallbackLocale.value, d.value = g.messages.value, p.value = g.datetimeFormats.value, y.value = g.numberFormats.value) : s && m(g)
        }), Dt
    }
    const Jte = ["locale", "fallbackLocale", "availableLocales"],
        Qte = ["t", "rt", "d", "n", "tm"];

    function Zte(e, t) {
        const r = Object.create(null);
        Jte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Vt(Ut.UNEXPECTED_ERROR);
            const a = Zt(s.value) ? {
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
            Object.defineProperty(r, n, a)
        }), e.config.globalProperties.$i18n = r, Qte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Vt(Ut.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Ate(Ite);
    Ste(ate);
    Ote(NO);
    const ere = rt({
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
        tre = "main/tjsp/quiplash3/assets/c8afd972.svg",
        rre = {
            class: "constrain"
        },
        nre = {
            class: "text"
        },
        ire = {
            class: "subtext"
        },
        sre = {
            key: 0,
            class: "warning"
        },
        are = {
            key: 1,
            class: "spinner"
        };

    function ore(e, t, r, n, s, a) {
        return F(), fn(Oc, {
            name: "toast-transition"
        }, {
            default: Nh(() => [e.isVisible && e.options ? (F(), W("div", {
                key: 0,
                class: Ve([e.options.type, "jbg toast"])
            }, [X("div", rre, [X("img", {
                class: "close",
                alt: "close",
                src: tre,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = zs((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), X("p", nre, Me(e.options.text), 1), X("p", ire, Me(e.options.subtext), 1), e.options.warning ? (F(), W("p", sre, Me(e.options.warning), 1)) : ve("", !0), e.options.type === "reconnecting" ? (F(), W("div", are)) : ve("", !0)])], 2)) : ve("", !0)]),
            _: 1
        })
    }
    const lre = ot(ere, [
            ["render", ore],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        cre = {
            install: e => {
                if (e.config.globalProperties.$showToast) return;
                let t;
                const r = a => {
                        if (!t) throw new Error("No ToastComponent is registered to show");
                        t.show(a)
                    },
                    n = () => {
                        if (!t) throw new Error("No ToastComponent is registered to hide");
                        t.hide()
                    },
                    s = a => {
                        t = a
                    };
                e.component("Toast", lre), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        ure = rt({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Qi(Eo.fatal.error)
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

    function fre(e, t, r, n, s, a) {
        const l = gr("Fatal"),
            c = gr("TextDescriptions"),
            f = gr("Debug"),
            d = gr("Modal"),
            p = gr("Toast");
        return e.shouldShowFatal ? (F(), fn(l, {
            key: 0
        })) : (F(), W(qe, {
            key: 1
        }, [pt(c), (F(), fn(Dh(e.mainView), Bh({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), pt(f), pt(d), pt(p)], 64))
    }
    const ib = ot(ure, [
            ["render", fre]
        ]),
        dre = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Sr.WSClient(r), t.connect()),
                mount: r => {
                    var l, c, f, d;
                    ib.name = r.app;
                    let n = lk(ib, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (c = r.match) == null ? void 0 : c.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const a = Wte({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(E8, (d = e.messages) != null ? d : {})
                    });
                    if (n.use(w5), n.use(mee), n.use(rX, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(bJ, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(vZ), n.use(a), n.use(qZ, {
                            i18n: a
                        }), n.use(bee), n.use(Tee), n.use(cre), n.use(Aee), e.plugins) {
                        const p = y => y.plugin === void 0;
                        e.plugins.forEach(y => {
                            if (p(y)) {
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
        hre = {
            AVATAR_BLUE: "blue quip",
            AVATAR_CACTUS: "cactus quip",
            AVATAR_COFFIN: "coffin-shaped quip",
            AVATAR_GREEN: "green quip",
            AVATAR_KITTEN: "kitten-shaped quip",
            AVATAR_MOON: "moon-shaped quip",
            AVATAR_ORANGE: "orange quip",
            AVATAR_PINK: "pink quip",
            AVATAR_POOP: "poop-shaped quip",
            AVATAR_PURPLE: "purple quip",
            AVATAR_RED: "red quip",
            AVATAR_STAR: "star-shaped quip",
            AVATAR_TEAL: "teal quip",
            AVATAR_TEAR: "teardrop-shaped quip",
            AVATAR_TRICLOPS: "three-eyed quip",
            AVATAR_YELLOW: "yellow quip",
            LOGO_GAME: "the Quiplash 3 logo",
            LOGO_1: "a clay number 1",
            LOGO_2: "a clay number 2",
            LOGO_3: "a clay number 3",
            UGC: {
                TOGGLE_THRIPLASH_OFF: "switch to regular prompt",
                TOGGLE_THRIPLASH_ON: "switch to Thriplash prompt"
            }
        },
        pre = {
            AVATAR_SELECT: "Select your character"
        },
        gre = {
            INSTRUCTION: "Vote for your favorite",
            THANKS: "Thank you. Your choice:"
        },
        mre = {
            ANSWER_PLACEHOLDER: "ANSWER HERE",
            PROMPT_COUNTER: "Prompt {current} of {total}",
            PROMPT_FINAL: "Final prompt",
            SAFETY_QUIP_LABEL: "Stuck? Try a safety quip",
            SAFETY_QUIP_SUBMIT: "Submit a Safety Quip"
        },
        vre = {
            ALT: hre,
            LOBBY: pre,
            VOTING: gre,
            WRITING: mre
        },
        yre = {
            AVATAR_BLUE: "quip bleu",
            AVATAR_CACTUS: "quip cactus",
            AVATAR_COFFIN: "quip en forme de cercueil",
            AVATAR_GREEN: "quip vert",
            AVATAR_KITTEN: "quip en forme de chaton",
            AVATAR_MOON: "quip en forme de lune",
            AVATAR_ORANGE: "quip orange",
            AVATAR_PINK: "quip rose",
            AVATAR_POOP: "quip en forme de crotte",
            AVATAR_PURPLE: "quip violet",
            AVATAR_RED: "quip rouge",
            AVATAR_STAR: "quip en forme d'\xE9toile",
            AVATAR_TEAL: "quip turquoise",
            AVATAR_TEAR: "quip en forme de goutte d'eau",
            AVATAR_TRICLOPS: "quip \xE0 trois yeux",
            AVATAR_YELLOW: "quip jaune",
            LOGO_GAME: "le logo de Quiplash 3",
            LOGO_1: "un num\xE9ro 1 en argile",
            LOGO_2: "un num\xE9ro 2 en argile",
            LOGO_3: "un num\xE9ro 3 en argile",
            UGC: {
                TOGGLE_THRIPLASH_OFF: "passer \xE0 un sujet normal",
                TOGGLE_THRIPLASH_ON: "passer \xE0 un sujet Thriplash"
            }
        },
        _re = {
            AVATAR_SELECT: "Choisissez votre personnage"
        },
        Ere = {
            INSTRUCTION: "Votez pour la r\xE9ponse pr\xE9f\xE9r\xE9e",
            THANKS: "Merci. Votre choix\xA0:"
        },
        bre = {
            ANSWER_PLACEHOLDER: "R\xC9PONSE ICI",
            PROMPT_COUNTER: "Sujet {current} sur {total}",
            PROMPT_FINAL: "Dernier sujet",
            SAFETY_QUIP_LABEL: "Bloqu\xE9\xA0? Essayez un quip de sauvetage",
            SAFETY_QUIP_SUBMIT: "Envoyez un quip de sauvetage"
        },
        Tre = {
            ALT: yre,
            LOBBY: _re,
            VOTING: Ere,
            WRITING: bre
        },
        Are = {
            AVATAR_BLUE: "frase blu",
            AVATAR_CACTUS: "frase a forma di cactus",
            AVATAR_COFFIN: "frase a forma di bara",
            AVATAR_GREEN: "frase verde",
            AVATAR_KITTEN: "frase a forma di gattino",
            AVATAR_MOON: "frase a forma di luna",
            AVATAR_ORANGE: "frase arancione",
            AVATAR_PINK: "frase rosa",
            AVATAR_POOP: "frase a forma di cacchina",
            AVATAR_PURPLE: "frase viola",
            AVATAR_RED: "frase rossa",
            AVATAR_STAR: "frase a forma di stella",
            AVATAR_TEAL: "frase ottanio",
            AVATAR_TEAR: "frase a forma di lacrima",
            AVATAR_TRICLOPS: "frase a forma di terzo occhio",
            AVATAR_YELLOW: "frase gialla",
            LOGO_GAME: "il logo di Quiplash 3",
            LOGO_1: "un numero 1 di argilla",
            LOGO_2: "un numero 2 di argilla",
            LOGO_3: "un numero 3 di argilla",
            UGC: {
                TOGGLE_THRIPLASH_OFF: "passa alla definizione normale",
                TOGGLE_THRIPLASH_ON: "passa alla definizione Triplash"
            }
        },
        Sre = {
            AVATAR_SELECT: "Scegli il tuo personaggio"
        },
        Ore = {
            INSTRUCTION: "Vota la tua preferita",
            THANKS: "Grazie. La tua scelta:"
        },
        wre = {
            ANSWER_PLACEHOLDER: "RISPONDI QUI",
            PROMPT_COUNTER: "Definizione {current} di {total}",
            PROMPT_FINAL: "Ultima definizione",
            SAFETY_QUIP_LABEL: "Non sai che scrivere? Prova una frase di sicurezza",
            SAFETY_QUIP_SUBMIT: "Invia una frase di sicurezza"
        },
        Cre = {
            ALT: Are,
            LOBBY: Sre,
            VOTING: Ore,
            WRITING: wre
        },
        Ire = {
            AVATAR_BLUE: "Blauer Quip",
            AVATAR_CACTUS: "Kaktus-Quip",
            AVATAR_COFFIN: "Sargf\xF6rmiger Quip",
            AVATAR_GREEN: "Gr\xFCner Quip",
            AVATAR_KITTEN: "Katzenartiger Quip",
            AVATAR_MOON: "Mondf\xF6rmiger Quip",
            AVATAR_ORANGE: "Oranger Quip",
            AVATAR_PINK: "Rosa Quip",
            AVATAR_POOP: "H\xE4ufchenf\xF6rmiger Quip",
            AVATAR_PURPLE: "Lila Quip",
            AVATAR_RED: "Roter Quip",
            AVATAR_STAR: "Sternf\xF6rmiger Quip",
            AVATAR_TEAL: "T\xFCrkiser Quip",
            AVATAR_TEAR: "Tr\xE4nenf\xF6rmiger Quip",
            AVATAR_TRICLOPS: "Dreiaugiger Quip",
            AVATAR_YELLOW: "Gelber Quip",
            LOGO_GAME: "das Quiplash 3 Logo",
            LOGO_1: "eine t\xF6nerne 1",
            LOGO_2: "eine t\xF6nerne 2",
            LOGO_3: "eine t\xF6nerne 3",
            UGC: {
                TOGGLE_THRIPLASH_OFF: "Zu regul\xE4rem Prompt wechseln",
                TOGGLE_THRIPLASH_ON: "Zu Thriplash-Prompt wechseln"
            }
        },
        $re = {
            AVATAR_SELECT: "W\xE4hle deinen Charakter aus"
        },
        Rre = {
            INSTRUCTION: "Stimme f\xFCr deinen Favoriten ab",
            THANKS: "Vielen Dank. Deine Wahl:"
        },
        Lre = {
            ANSWER_PLACEHOLDER: "HIER SCHREIBEN",
            PROMPT_COUNTER: "Prompt {current} von {total}",
            PROMPT_FINAL: "Letzter Prompt",
            SAFETY_QUIP_LABEL: "Keine Idee? Versuch's mit einem Notfall-Quip",
            SAFETY_QUIP_SUBMIT: "Schicke einen Notfall-Quip ab"
        },
        Nre = {
            ALT: Ire,
            LOBBY: $re,
            VOTING: Rre,
            WRITING: Lre
        },
        Pre = {
            AVATAR_BLUE: "zasca azul",
            AVATAR_CACTUS: "zasca cactus",
            AVATAR_COFFIN: "zasca con forma de ata\xFAd",
            AVATAR_GREEN: "zasca verde",
            AVATAR_KITTEN: "zasca con forma de gatito",
            AVATAR_MOON: "zasca con forma de luna",
            AVATAR_ORANGE: "zasca naranja",
            AVATAR_PINK: "zasca rosa",
            AVATAR_POOP: "zasca con forma de caca",
            AVATAR_PURPLE: "zasca morado",
            AVATAR_RED: "zasca rojo",
            AVATAR_STAR: "zasca con forma de estrella",
            AVATAR_TEAL: "zasca verde azulado",
            AVATAR_TEAR: "zasca con forma de l\xE1grima",
            AVATAR_TRICLOPS: "zasca de tres ojos",
            AVATAR_YELLOW: "zasca amarillo",
            LOGO_GAME: "el logotipo de Quiplash 3",
            LOGO_1: "un n\xFAmero 1 de arcilla",
            LOGO_2: "un n\xFAmero 2 de arcilla",
            LOGO_3: "un n\xFAmero 3 de arcilla",
            UGC: {
                TOGGLE_THRIPLASH_OFF: "cambiar a un enunciado normal",
                TOGGLE_THRIPLASH_ON: "cambiar a un enunciado Thriplash"
            }
        },
        kre = {
            AVATAR_SELECT: "Elige a tu personaje"
        },
        xre = {
            INSTRUCTION: "Vota a tu favorito",
            THANKS: "Gracias. Tu elecci\xF3n:"
        },
        Dre = {
            ANSWER_PLACEHOLDER: "RESPONDE AQU\xCD",
            PROMPT_COUNTER: "Entrada {current} de {total}",
            PROMPT_FINAL: "Entrada final",
            SAFETY_QUIP_LABEL: "\xBFTe has atascado? Prueba con un zasca de emergencia",
            SAFETY_QUIP_SUBMIT: "Env\xEDa un zasca de emergencia"
        },
        Mre = {
            ALT: Pre,
            LOBBY: kre,
            VOTING: xre,
            WRITING: Dre
        },
        Ure = {
            AVATAR_BLUE: "ocurrencia azul",
            AVATAR_CACTUS: "ocurrencia cactus",
            AVATAR_COFFIN: "ocurrencia con forma de ata\xFAd",
            AVATAR_GREEN: "ocurrencia verde",
            AVATAR_KITTEN: "ocurrencia con forma de gatito",
            AVATAR_MOON: "ocurrencia con forma de luna",
            AVATAR_ORANGE: "ocurrencia naranja",
            AVATAR_PINK: "ocurrencia rosa",
            AVATAR_POOP: "ocurrencia con forma de caca",
            AVATAR_PURPLE: "ocurrencia morada",
            AVATAR_RED: "ocurrencia roja",
            AVATAR_STAR: "ocurrencia con forma de estrella",
            AVATAR_TEAL: "ocurrencia verde azulada",
            AVATAR_TEAR: "ocurrencia con forma de l\xE1grima",
            AVATAR_TRICLOPS: "ocurrencia de tres ojos",
            AVATAR_YELLOW: "ocurrencia amarilla",
            LOGO_GAME: "el logotipo de Quiplash 3",
            LOGO_1: "arcilla n\xFAmero 1",
            LOGO_2: "arcilla n\xFAmero 2",
            LOGO_3: "arcilla n\xFAmero 3",
            UGC: {
                TOGGLE_THRIPLASH_OFF: "cambiar al indicador normal",
                TOGGLE_THRIPLASH_ON: "cambiar al indicador Thriplash"
            }
        },
        Fre = {
            AVATAR_SELECT: "Elige tu personaje"
        },
        Bre = {
            INSTRUCTION: "Vota tu favorito",
            THANKS: "Gracias. Tu elecci\xF3n:"
        },
        Gre = {
            ANSWER_PLACEHOLDER: "RESPONDE AQU\xCD",
            PROMPT_COUNTER: "Enunciado {current} de {total}",
            PROMPT_FINAL: "Enunciado final",
            SAFETY_QUIP_LABEL: "\xBFAtascado? Prueba una ocurrencia de emergencia",
            SAFETY_QUIP_SUBMIT: "Env\xEDa una ocurrencia de emergencia"
        },
        jre = {
            ALT: Ure,
            LOBBY: Fre,
            VOTING: Bre,
            WRITING: Gre
        },
        Wre = {
            en: vre,
            fr: Tre,
            it: Cre,
            de: Nre,
            es: Mre,
            "es-XL": jre
        },
        Vre = rt({
            components: {
                Input: $V
            },
            props: {
                episodes: {
                    type: Array,
                    required: !0
                }
            },
            emits: {
                resolve: e => !0
            },
            data() {
                return {
                    id: ""
                }
            },
            methods: {
                onClose() {
                    this.$emit("resolve", {
                        action: "close"
                    })
                },
                onLoadId() {
                    const e = this.id.replace(/[^A-Za-z]/gi, "").toUpperCase();
                    e.length === 7 && this.$emit("resolve", {
                        action: "ugc-load",
                        contentId: e
                    })
                },
                onLoadSelection(e) {
                    const t = this.episodes[e],
                        r = t.remoteContentId || t.localContentId;
                    this.$emit("resolve", {
                        action: "ugc-load",
                        contentId: r
                    })
                }
            }
        }),
        Kre = {
            class: "episodes"
        },
        Hre = {
            class: "loader"
        },
        qre = {
            class: "inline-input"
        },
        Yre = {
            class: "warning"
        },
        zre = ["onClick"],
        Xre = {
            key: 0,
            class: "episode-id"
        };

    function Jre(e, t, r, n, s, a) {
        const l = gr("Input"),
            c = Mt("t"),
            f = Mt("maska");
        return F(), W("div", Kre, [X("button", {
            class: "back",
            onClick: t[0] || (t[0] = ze((...d) => e.onClose && e.onClose(...d), ["prevent"]))
        }, Me(e.$t("ACTION.BACK")), 1), Se(X("div", null, null, 512), [
            [c, "UGC.EPISODES_LOAD"]
        ]), X("fieldset", Hre, [X("button", {
            class: "submit",
            onClick: t[1] || (t[1] = ze((...d) => e.onLoadId && e.onLoadId(...d), ["prevent"]))
        }, Me(e.$t("ACTION.SUBMIT")), 1), X("div", qre, [Se(pt(l, {
            modelValue: e.id,
            "onUpdate:modelValue": t[2] || (t[2] = d => e.id = d),
            placeholder: "???-????"
        }, null, 8, ["modelValue"]), [
            [f, "AAA-AAAA"]
        ])])]), Se(X("div", Yre, null, 512), [
            [c, "UGC.EPISODES_WARNING"]
        ]), e.episodes.length ? (F(), W(qe, {
            key: 0
        }, [Se(X("div", null, null, 512), [
            [c, "UGC.EPISODES_SELECT"]
        ]), (F(!0), W(qe, null, hn(e.episodes, (d, p) => (F(), W("button", {
            key: d.remoteContentId || d.localContentId,
            class: "episode",
            onClick: ze(y => e.onLoadSelection(p), ["prevent"])
        }, [Mr(Me(d.metadata.title) + " ", 1), d.remoteContentId ? (F(), W("span", Xre, Me(d.formattedRemoteContentId), 1)) : ve("", !0)], 8, zre))), 128))], 64)) : ve("", !0)])
    }
    const Qre = ot(Vre, [
            ["render", Jre],
            ["__scopeId", "data-v-229122ba"]
        ]),
        Zre = rt({
            components: {
                LobbyActions: HA
            },
            props: {
                avatarImages: {
                    type: Object,
                    required: !0
                },
                info: Object,
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    selectedAvatar: {}
                }
            },
            watch: {
                "player.avatars": function() {
                    var r;
                    if (!this.selectedAvatar.name) return;
                    const t = this.player.avatars.find(n => n.name === this.selectedAvatar.name);
                    !(t != null && t.available) && (t == null ? void 0 : t.name) !== ((r = this.info) == null ? void 0 : r.avatar) && (this.selectedAvatar = {})
                },
                "player.lastUGCResult": function() {
                    var t;
                    !((t = this.player.lastUGCResult) != null && t.error) || this.$showModal("Error", {
                        text: this.$t("ERROR.TITLE"),
                        subtext: this.player.lastUGCResult.error,
                        dismissText: this.$t("ACTION.OK")
                    })
                }
            },
            methods: {
                onEpisodeReport() {
                    window.location.href = `mailto:support@jackboxgames.com?subject=Report episode id ${this.player.formattedActiveContentId}`
                },
                async onEpisodeUnload() {
                    if (!!this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "ugc-unload"
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onEpisodeViewAuthor() {
                    if (!!this.player.responseKey) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "ugc-view-author"
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                },
                async onEpisodeViewMenu() {
                    if (!this.player.responseKey) return;
                    const e = await this.$showModal(Qre, {
                        episodes: this.player.history
                    });
                    if (!(!e || e.action === "close")) try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "ugc-load",
                            contentId: e.contentId
                        })
                    } catch (t) {
                        this.$handleEcastError(t)
                    }
                },
                async onSelectAvatar(e) {
                    if (!!this.player.responseKey) {
                        try {
                            await this.$ecast.updateObject(this.player.responseKey, {
                                action: "avatar",
                                avatar: e.name
                            })
                        } catch (t) {
                            this.$handleEcastError(t)
                        }
                        this.selectedAvatar = e
                    }
                }
            }
        }),
        ene = {
            class: "lobby"
        },
        tne = {
            class: "instructions"
        },
        rne = {
            class: "avatars"
        },
        nne = ["disabled", "onClick"],
        ine = ["src", "alt"],
        sne = {
            key: 0,
            class: "episodes"
        },
        ane = ["textContent"];

    function one(e, t, r, n, s, a) {
        const l = gr("LobbyActions"),
            c = Mt("t");
        return F(), W("div", ene, [Se(X("span", tne, null, 512), [
            [c, "LOBBY.AVATAR_SELECT"]
        ]), X("div", rne, [(F(!0), W(qe, null, hn(e.player.avatars, (f, d) => (F(), W("button", {
            key: `av${d}`,
            class: Ve(["avatar", {
                selected: f.name === e.selectedAvatar.name
            }]),
            disabled: !f.available,
            onClick: p => e.onSelectAvatar(f)
        }, [e.avatarImages[f.name] ? (F(), W("img", {
            key: 0,
            src: f.name === e.selectedAvatar.name ? e.avatarImages[f.name].selected : e.avatarImages[f.name].src,
            alt: e.avatarImages[f.name].alt
        }, null, 8, ine)) : ve("", !0)], 10, nne))), 128))]), pt(l, {
            player: e.player
        }, null, 8, ["player"]), e.player.canDoEpisodes ? (F(), W("div", sne, [e.player.activeContentId ? (F(), W(qe, {
            key: 0
        }, [X("div", {
            class: "episode-title",
            textContent: Me(e.player.episodeTitle)
        }, null, 8, ane), e.player.activeContentId ? Se((F(), W("button", {
            key: 0,
            onClick: t[0] || (t[0] = ze((...f) => e.onEpisodeUnload && e.onEpisodeUnload(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODE_UNLOAD"]
        ]) : ve("", !0), e.player.canReport ? Se((F(), W("button", {
            key: 1,
            onClick: t[1] || (t[1] = ze((...f) => e.onEpisodeReport && e.onEpisodeReport(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODE_REPORT"]
        ]) : ve("", !0), e.player.canViewAuthor ? Se((F(), W("button", {
            key: 2,
            onClick: t[2] || (t[2] = ze((...f) => e.onEpisodeViewAuthor && e.onEpisodeViewAuthor(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODE_VIEW_AUTHOR"]
        ]) : ve("", !0)], 64)) : Se((F(), W("button", {
            key: 1,
            onClick: t[3] || (t[3] = ze((...f) => e.onEpisodeViewMenu && e.onEpisodeViewMenu(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODES_MENU"]
        ])])) : ve("", !0)])
    }
    const lne = ot(Zre, [
            ["render", one],
            ["__scopeId", "data-v-7ba4877c"]
        ]),
        cne = rt({
            props: {
                avatar: Object,
                name: String
            }
        }),
        une = {
            class: "header",
            "aria-label": "player name section"
        },
        fne = ["src", "alt"],
        dne = ["textContent"];

    function hne(e, t, r, n, s, a) {
        return F(), W("div", une, [e.avatar ? (F(), W("img", {
            key: 0,
            class: "avatar",
            src: e.avatar.src,
            alt: e.avatar.alt
        }, null, 8, fne)) : ve("", !0), X("span", {
            class: "name",
            textContent: Me(e.name)
        }, null, 8, dne)])
    }
    const pne = ot(cne, [
            ["render", hne],
            ["__scopeId", "data-v-3526fc00"]
        ]),
        gne = rt({
            components: {
                GalleryLink: YA,
                PostGameActions: qA
            },
            props: {
                artifact: Object,
                player: Object
            }
        }),
        mne = {
            class: "post-game"
        };

    function vne(e, t, r, n, s, a) {
        const l = gr("PostGameActions"),
            c = gr("GalleryLink");
        return F(), W("div", mne, [pt(l, {
            player: e.player
        }, null, 8, ["player"]), pt(c, {
            artifact: e.artifact
        }, null, 8, ["artifact"])])
    }
    const yne = ot(gne, [
            ["render", vne],
            ["__scopeId", "data-v-6b027004"]
        ]),
        _ne = rt({
            components: {
                TextArea: FS
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            bb: {
                tos: (e, t) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${t}</a>`
            },
            data() {
                return {
                    isThriplash: !1,
                    promptText: "",
                    titleText: ""
                }
            },
            computed: {
                instruction() {
                    return this.player.validActions.includes("add") ? this.$t("UGC.INSTRUCTION.WRITE") : this.player.validActions.includes("load") ? this.$t("UGC.INSTRUCTION.LOAD") : this.player.validActions.includes("submit") ? this.$t("UGC.INSTRUCTION.PUBLISH") : this.player.validActions.includes("title") ? this.$t("UGC.INSTRUCTION.TITLE") : ""
                },
                promptCharacterCount() {
                    return this.player.maxContentLength ? this.player.maxContentLength - this.promptText.length : null
                },
                promptsCount() {
                    const {
                        count: e,
                        maxCount: t,
                        prompts: r
                    } = this.player;
                    let n = `${e}/${t}`;
                    return r.length < e && (n += ` ${this.$t("UGC.PROMPTS_COUNT_HIDDEN",{count:e-r.length})}`), n
                },
                titleCharacterCount() {
                    return this.player.maxTitleLength ? this.player.maxTitleLength - this.titleText.length : null
                },
                userId() {
                    return Pr.get("uuid")
                }
            },
            mounted() {
                XA([this.$refs.prompt, this.$refs.title])
            },
            methods: {
                async confirmDeleteEpisode() {
                    await this.$showModal("Options", {
                        text: this.$t("UGC.WARNING.DELETE"),
                        options: [{
                            text: this.$t("ACTION.YES"),
                            classes: ["confirm"],
                            value: "confirm"
                        }, {
                            text: this.$t("ACTION.NO"),
                            classes: ["cancel"],
                            value: "cancel"
                        }]
                    }) === "confirm" && this.$ecast.updateObject(this.player.responseKey, {
                        action: "remove-content"
                    }).catch(this.$handleEcastError)
                },
                async createNewEpisode() {
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "title",
                            text: this.titleText
                        })
                    } catch (e) {
                        this.$handleEcastError(e)
                    } finally {
                        this.titleText = ""
                    }
                },
                async createNewPrompt() {
                    if (!this.promptText || this.player.count === this.player.maxCount) return;
                    const e = {
                        action: "add",
                        text: this.promptText
                    };
                    this.isThriplash && (e.type = "thriplash");
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, e)
                    } catch (t) {
                        this.$handleEcastError(t)
                    } finally {
                        this.promptText = "", await this.$nextTick(), this.$refs.prompt.focus()
                    }
                },
                async showTermsOfService() {
                    await this.$showModal("Options", {
                        text: this.$t("UGC.WARNING.TOS"),
                        options: [{
                            text: this.$t("UGC.WARNING.TOS_AGREE"),
                            classes: ["confirm"],
                            value: "confirm"
                        }, {
                            text: this.$t("UGC.BACK_TO_MENU"),
                            classes: ["cancel"],
                            value: "cancel"
                        }]
                    }) === "confirm" && this.$ecast.updateObject(this.player.responseKey, {
                        action: "submit"
                    }).catch(this.$handleEcastError)
                },
                onAction(e) {
                    this.$ecast.updateObject(this.player.responseKey, {
                        action: e
                    }).catch(this.$handleEcastError)
                },
                onEpisodeClick(e) {
                    const t = this.player.episodes[e],
                        r = t.remoteContentId || t.localContentId;
                    this.$ecast.updateObject(this.player.responseKey, {
                        action: "load",
                        contentId: r
                    }).catch(this.$handleEcastError)
                },
                onInputPrompt() {
                    this.promptText = mr.sanitizeInput(this.promptText)
                },
                onInputTitle() {
                    this.titleText = mr.sanitizeInput(this.titleText)
                },
                onPromptClick(e) {
                    this.$ecast.updateObject(this.player.responseKey, {
                        action: "remove",
                        key: e
                    }).catch(this.$handleEcastError)
                },
                onToggleVisibility(e) {
                    this.$ecast.updateObject(this.player.responseKey, {
                        action: "toggle-visibility",
                        target: e
                    }).catch(this.$handleEcastError)
                }
            }
        }),
        Ene = "main/tjsp/quiplash3/assets/c3d54796.png",
        bne = "main/tjsp/quiplash3/assets/7399ad7c.png",
        Tne = "main/tjsp/quiplash3/assets/eb2e4e77.png",
        Ane = "main/tjsp/quiplash3/assets/ace297d4.png",
        Sne = {
            class: "ugc"
        },
        One = ["textContent"],
        wne = ["alt"],
        Cne = ["alt"],
        Ine = ["alt"],
        $ne = ["alt"],
        Rne = {
            key: 2,
            class: "episodes-list"
        },
        Lne = ["onClick"],
        Nne = ["textContent"],
        Pne = ["textContent"],
        kne = ["textContent"],
        xne = ["v-text"],
        Dne = {
            key: 0,
            id: "prompt"
        },
        Mne = ["textContent"],
        Une = ["aria-label"],
        Fne = ["disabled"],
        Bne = ["textContent"],
        Gne = {
            for: "title"
        },
        jne = {
            id: "title"
        },
        Wne = ["textContent"],
        Vne = {
            key: 10,
            class: "prompts-list"
        },
        Kne = ["textContent"],
        Hne = ["onClick", "textContent"];

    function qne(e, t, r, n, s, a) {
        const l = gr("TextArea"),
            c = Mt("t");
        return F(), W("div", Sne, [X("div", {
            class: "instruction",
            textContent: Me(e.instruction)
        }, null, 8, One), e.player.validActions.length > 0 ? (F(), W(qe, {
            key: 0
        }, [e.player.validActions.includes("toggle-visibility") ? (F(), W(qe, {
            key: 0
        }, [Se(X("div", null, null, 512), [
            [c, "UGC.INSTRUCTION.TOGGLE_VISIBILITY"]
        ]), X("button", {
            class: "toggle-visibility controller",
            onClick: t[0] || (t[0] = ze(f => e.onToggleVisibility("controller"), ["prevent"]))
        }, [e.player.controllerVisibility ? (F(), W("img", {
            key: 0,
            src: Ene,
            alt: e.$t("ALT.UGC.VISIBILITY_CONTROLLER_ON")
        }, null, 8, wne)) : (F(), W("img", {
            key: 1,
            src: bne,
            alt: e.$t("ALT.UGC.VISIBILITY_CONTROLLER_OFF")
        }, null, 8, Cne))]), X("button", {
            class: "toggle-visibility screen",
            onClick: t[1] || (t[1] = ze(f => e.onToggleVisibility("screen"), ["prevent"]))
        }, [e.player.screenVisibility ? (F(), W("img", {
            key: 0,
            src: Tne,
            alt: e.$t("ALT.UGC.VISIBILITY_SCREEN_ON")
        }, null, 8, Ine)) : (F(), W("img", {
            key: 1,
            src: Ane,
            alt: e.$t("ALT.UGC.VISIBILITY_SCREEN_OFF")
        }, null, 8, $ne))])], 64)) : ve("", !0), e.player.validActions.includes("new") ? Se((F(), W("button", {
            key: 1,
            class: "action-button",
            onClick: t[2] || (t[2] = ze(f => e.onAction("new"), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.CREATE_NEW_EPISODE"]
        ]) : ve("", !0), e.player.validActions.includes("load") && e.player.episodes.length > 0 ? (F(), W("div", Rne, [Se(X("span", null, null, 512), [
            [c, "UGC.PREVIOUS_EPISODES"]
        ]), (F(!0), W(qe, null, hn(e.player.episodes, (f, d) => (F(), W("div", {
            key: f.remoteContentId || f.localContentId
        }, [X("button", {
            class: "action-button",
            onClick: ze(p => e.onEpisodeClick(d), ["prevent"])
        }, [X("span", {
            textContent: Me(f.metadata.title)
        }, null, 8, Nne), f.remoteContentId != null ? (F(), W("span", {
            key: 0,
            class: "id",
            textContent: Me(f.formattedRemoteContentId)
        }, null, 8, Pne)) : ve("", !0)], 8, Lne)]))), 128))])) : ve("", !0)], 64)) : (F(), W("div", {
            key: 1,
            textContent: Me(e.player.noActionsText)
        }, null, 8, kne)), e.player.text ? (F(), W("div", {
            key: 2,
            id: "prompt",
            "v-text": e.player.text,
            class: "prompt ugc-text"
        }, null, 8, xne)) : ve("", !0), e.player.validActions.length > 0 ? (F(), W(qe, {
            key: 3
        }, [e.player.validActions.includes("add") ? (F(), W("div", Dne, [e.promptCharacterCount != null ? (F(), W("div", {
            key: 0,
            textContent: Me(e.promptCharacterCount)
        }, null, 8, Mne)) : ve("", !0), Se(X("input", {
            "onUpdate:modelValue": t[3] || (t[3] = f => e.isThriplash = f),
            "aria-label": e.isThriplash ? e.$t("ALT.UGC.TOGGLE_THRIPLASH_OFF") : e.$t("ALT.UGC.TOGGLE_THRIPLASH_ON"),
            class: "toggle-thriplash",
            type: "checkbox"
        }, null, 8, Une), [
            [dT, e.isThriplash]
        ]), pt(l, {
            ref: "prompt",
            modelValue: e.promptText,
            "onUpdate:modelValue": [t[4] || (t[4] = f => e.promptText = f), e.onInputPrompt],
            class: "prompt",
            "aria-label": e.$t("UGC.PROMPT_PLACEHOLDER"),
            autosize: "",
            maxlength: e.player.maxContentLength,
            placeholder: e.$t("UGC.PROMPT_PLACEHOLDER"),
            rows: "1",
            onKeydown: zs(ze(e.createNewPrompt, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "aria-label", "maxlength", "placeholder", "onKeydown", "onUpdate:modelValue"]), Se(X("button", {
            class: "create",
            disabled: e.player.count === e.player.maxCount,
            onClick: t[5] || (t[5] = ze((...f) => e.createNewPrompt && e.createNewPrompt(...f), ["prevent"]))
        }, null, 8, Fne), [
            [c, "UGC.PROMPT_ADD"]
        ]), e.player.error ? (F(), W("div", {
            key: 1,
            class: "error",
            textContent: Me(e.player.error)
        }, null, 8, Bne)) : ve("", !0)])) : ve("", !0), e.player.validActions.includes("title") ? (F(), W(qe, {
            key: 1
        }, [X("label", Gne, [Se(X("span", null, null, 512), [
            [c, "UGC.INSTRUCTION.CREATE_TITLE"]
        ])]), X("div", jne, [e.titleCharacterCount != null ? (F(), W("div", {
            key: 0,
            textContent: Me(e.titleCharacterCount)
        }, null, 8, Wne)) : ve("", !0), pt(l, {
            ref: "title",
            modelValue: e.titleText,
            "onUpdate:modelValue": [t[6] || (t[6] = f => e.titleText = f), e.onInputTitle],
            rows: "1",
            maxlength: e.player.maxTitleLength,
            placeholder: e.$t("UGC.TITLE_PLACEHOLDER"),
            onKeydown: zs(ze(e.createNewEpisode, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "maxlength", "placeholder", "onKeydown", "onUpdate:modelValue"]), Se(X("button", {
            class: "create",
            onClick: t[7] || (t[7] = ze((...f) => e.createNewEpisode && e.createNewEpisode(...f), ["prevent"]))
        }, null, 512), [
            [c, "ACTION.CREATE"]
        ])])], 64)) : ve("", !0), e.player.validActions.includes("close") ? Se((F(), W("button", {
            key: 2,
            class: "action-button close",
            onClick: t[8] || (t[8] = ze(f => e.onAction("close"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.CLOSE"]
        ]) : ve("", !0), e.player.validActions.includes("unlock") ? Se((F(), W("button", {
            key: 3,
            class: "action-button unlock",
            onClick: t[9] || (t[9] = ze(f => e.onAction("unlock"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.EDIT"]
        ]) : ve("", !0), e.player.validActions.includes("done") ? Se((F(), W("button", {
            key: 4,
            class: "action-button done",
            onClick: t[10] || (t[10] = ze(f => e.onAction("done"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.DONE"]
        ]) : ve("", !0), e.player.validActions.includes("submit") ? Se((F(), W("button", {
            key: 5,
            class: "action-button submit",
            onClick: t[11] || (t[11] = ze((...f) => e.showTermsOfService && e.showTermsOfService(...f), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.PUBLISH"]
        ]) : ve("", !0), e.player.validActions.includes("play") ? Se((F(), W("button", {
            key: 6,
            class: "action-button play",
            onClick: t[12] || (t[12] = ze(f => e.onAction("play"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.PLAY"]
        ]) : ve("", !0), e.player.validActions.includes("remove-content") ? Se((F(), W("button", {
            key: 7,
            class: "action-button delete",
            onClick: t[13] || (t[13] = ze((...f) => e.confirmDeleteEpisode && e.confirmDeleteEpisode(...f), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.DELETE"]
        ]) : ve("", !0), e.player.validActions.includes("exit") ? Se((F(), W("button", {
            key: 8,
            class: "action-button back",
            onClick: t[14] || (t[14] = ze(f => e.onAction("exit"), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.BACK_TO_MENU"]
        ]) : ve("", !0), e.player.validActions.includes("episodes") ? Se((F(), W("button", {
            key: 9,
            class: "action-button back",
            onClick: t[15] || (t[15] = ze(f => e.onAction("episodes"), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.BACK_TO_EPISODES"]
        ]) : ve("", !0), e.player.validActions.includes("remove") ? (F(), W("div", Vne, [X("span", {
            textContent: Me(e.promptsCount)
        }, null, 8, Kne), (F(!0), W(qe, null, hn(e.player.prompts, (f, d) => (F(), W("div", {
            key: d
        }, [X("button", {
            class: Ve(["player-prompt", {
                other: f.author !== e.userId,
                thriplash: f.type === "thriplash"
            }]),
            onClick: ze(p => e.onPromptClick(d), ["prevent"]),
            textContent: Me(f.text)
        }, null, 10, Hne)]))), 128))])) : ve("", !0)], 64)) : ve("", !0)])
    }
    const Yne = ot(_ne, [
            ["render", qne]
        ]),
        zne = rt({
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    hasSubmit: !1,
                    isSubmitting: !1,
                    selected: null
                }
            },
            methods: {
                async onChoose(e) {
                    this.isSubmitting = !0, this.selected = e;
                    try {
                        this.$ecast.role === "player" ? await this.$ecast.updateObject(this.player.responseKey, {
                            choiceIndex: e.choiceIndex
                        }) : this.$ecast.role === "audience" && await this.$ecast.incrementCountGroupCounter(this.player.countGroupName, String(e.choiceIndex))
                    } catch (t) {
                        this.isSubmitting = !1, this.selected = null, this.$handleEcastError(t)
                    }
                    this.hasSubmit = !0
                }
            }
        }),
        Xne = e => (yc("data-v-22c1566a"), e = e(), _c(), e),
        Jne = {
            class: "voting"
        },
        Qne = {
            class: "prompt"
        },
        Zne = {
            class: "instructions"
        },
        eie = Xne(() => X("br", null, null, -1)),
        tie = ["disabled", "onClick"];

    function rie(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", Jne, [Se(X("div", Qne, null, 512), [
            [l, e.player.prompt]
        ]), X("div", Zne, [e.hasSubmit && e.selected ? (F(), W(qe, {
            key: 0
        }, [Mr(Me(e.$t("VOTING.THANKS")) + " ", 1), eie, Se(X("span", null, null, 512), [
            [l, e.selected.text]
        ])], 64)) : (F(), W(qe, {
            key: 1
        }, [Mr(Me(e.$t("VOTING.INSTRUCTION")), 1)], 64))]), e.hasSubmit ? ve("", !0) : (F(!0), W(qe, {
            key: 0
        }, hn(e.player.choices, c => Se((F(), W("button", {
            key: `choice-${c.choiceIndex}`,
            type: "submit",
            class: Ve(["choice", {
                selected: e.selected && e.selected.choiceIndex === c.choiceIndex
            }]),
            disabled: e.isSubmitting,
            onClick: ze(f => e.onChoose(c), ["prevent"])
        }, null, 10, tie)), [
            [l, c.text]
        ])), 128))])
    }
    const nie = ot(zne, [
            ["render", rie],
            ["__scopeId", "data-v-22c1566a"]
        ]),
        iie = rt({
            components: {
                GalleryLink: YA
            },
            props: {
                artifact: Object,
                player: Object
            }
        }),
        sie = "main/tjsp/quiplash3/assets/88bd6ad9.png",
        aie = "main/tjsp/quiplash3/assets/4382ada0.png",
        oie = "main/tjsp/quiplash3/assets/f0aa81d5.png",
        lie = "main/tjsp/quiplash3/assets/4da08de2.png",
        cie = {
            class: "waiting"
        },
        uie = {
            class: "logo"
        },
        fie = ["alt"],
        die = ["alt"],
        hie = ["alt"],
        pie = ["alt"],
        gie = {
            key: 0,
            class: "message"
        };

    function mie(e, t, r, n, s, a) {
        var f, d, p, y;
        const l = gr("GalleryLink"),
            c = Mt("bb");
        return F(), W("div", cie, [X("div", uie, [((f = e.player) == null ? void 0 : f.round) === 1 ? (F(), W("img", {
            key: 0,
            class: "round",
            alt: e.$t("ALT.LOGO_1"),
            src: sie
        }, null, 8, fie)) : ((d = e.player) == null ? void 0 : d.round) === 2 ? (F(), W("img", {
            key: 1,
            class: "round",
            alt: e.$t("ALT.LOGO_2"),
            src: aie
        }, null, 8, die)) : ((p = e.player) == null ? void 0 : p.round) === 3 ? (F(), W("img", {
            key: 2,
            class: "round",
            alt: e.$t("ALT.LOGO_3"),
            src: oie
        }, null, 8, hie)) : (F(), W("img", {
            key: 3,
            alt: e.$t("ALT.LOGO_GAME"),
            src: lie
        }, null, 8, pie))]), (y = e.player) != null && y.message ? Se((F(), W("p", gie, null, 512)), [
            [c, e.player.message]
        ]) : ve("", !0), e.artifact ? (F(), fn(l, {
            key: 1,
            artifact: e.artifact
        }, null, 8, ["artifact"])) : ve("", !0)])
    }
    const vie = ot(iie, [
            ["render", mie],
            ["__scopeId", "data-v-44332b15"]
        ]),
        yie = rt({
            components: {
                TextArea: FS
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                }
            },
            data() {
                return {
                    answers: this.player.isThriplash ? Array(3).fill(null).map(() => ({
                        charCount: 0,
                        text: ""
                    })) : [{
                        charCount: 0,
                        text: ""
                    }],
                    error: "",
                    isSubmitting: !1
                }
            },
            computed: {
                answer() {
                    return this.answers.map(e => e.text).filter(e => e !== "").join(`
`)
                }
            },
            watch: {
                "player.promptNumber": function() {
                    this.answers = this.player.isThriplash ? Array(3).fill(null).map(() => ({
                        charCount: 0,
                        text: ""
                    })) : [{
                        charCount: 0,
                        text: ""
                    }], this.resetError(), this.isSubmitting = !1
                }
            },
            methods: {
                async autoSubmit() {
                    try {
                        await this.$ecast.updateText(this.player.textKey, this.answer)
                    } catch (e) {
                        e instanceof rs.EcastFilterError || this.$handleEcastError(e)
                    }
                },
                async focusNext(e) {
                    await this.$nextTick();
                    const t = this.$refs[`answer${e+1}`];
                    if (t) {
                        t[0].focus();
                        return
                    }
                    await this.onSubmit()
                },
                resetError() {
                    this.error && (this.error = "")
                },
                async onInput(e, t) {
                    this.resetError();
                    const {
                        charCount: r,
                        result: n
                    } = aW(e, this.player.maxLength);
                    this.answers[t] = {
                        charCount: r,
                        text: n
                    }, await this.autoSubmit()
                },
                async onSubmit() {
                    if (!this.answer.length) {
                        this.error = this.$t("ERROR.TEXT_NOTHING");
                        return
                    }
                    this.isSubmitting = !0;
                    try {
                        await this.$ecast.updateText(this.player.textKey, this.answer), await this.$ecast.updateObject(this.player.responseKey, {
                            action: "submit"
                        })
                    } catch (e) {
                        if (this.isSubmitting = !1, e instanceof rs.EcastFilterError) {
                            this.error = this.$t("ERROR.TEXT_NAUGHTY");
                            return
                        }
                        this.$handleEcastError(e)
                    }
                },
                async onSafetyQuip() {
                    this.isSubmitting = !0;
                    try {
                        await this.$ecast.updateObject(this.player.responseKey, {
                            action: "safetyQuip"
                        })
                    } catch (e) {
                        this.isSubmitting = !1, this.$handleEcastError(e)
                    }
                }
            }
        }),
        _ie = {
            class: "writing"
        },
        Eie = {
            class: "prompt-counter"
        },
        bie = {
            for: "textarea",
            class: "prompt"
        },
        Tie = {
            class: "character-counter"
        },
        Aie = ["textContent"],
        Sie = ["disabled"],
        Oie = {
            key: 0,
            class: "safety-quip"
        },
        wie = ["disabled"];

    function Cie(e, t, r, n, s, a) {
        const l = gr("TextArea"),
            c = Mt("bb"),
            f = Mt("t");
        return F(), W("div", _ie, [X("div", Eie, [e.player.isThriplash ? (F(), W(qe, {
            key: 0
        }, [Mr(Me(e.$t("WRITING.PROMPT_FINAL")), 1)], 64)) : (F(), W(qe, {
            key: 1
        }, [Mr(Me(e.$t("WRITING.PROMPT_COUNTER", {
            current: e.player.promptNumber,
            total: e.player.promptTotal
        })), 1)], 64))]), X("form", {
            onSubmit: t[0] || (t[0] = ze((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, [Se(X("label", bie, null, 512), [
            [c, e.player.prompt]
        ]), (F(!0), W(qe, null, hn(e.answers, (d, p) => (F(), W("div", {
            key: `answer${p}`,
            class: "answer"
        }, [X("div", Tie, Me(e.answers[p].charCount) + "/" + Me(e.player.maxLength), 1), pt(l, {
            ref_for: !0,
            ref: `answer${p}`,
            modelValue: e.answers[p].text,
            "onUpdate:modelValue": [y => e.answers[p].text = y, y => e.onInput(y, p)],
            autocomplete: "off",
            autocorrect: "off",
            autosize: "",
            disabled: e.isSubmitting,
            enterkeyhint: p === e.answers.length - 1 ? "done" : "next",
            placeholder: e.$t("WRITING.ANSWER_PLACEHOLDER"),
            rows: "1",
            spellcheck: "false",
            onKeydown: zs(ze(y => e.focusNext(p), ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "enterkeyhint", "placeholder", "onKeydown"])]))), 128)), e.error ? (F(), W("span", {
            key: 0,
            textContent: Me(e.error)
        }, null, 8, Aie)) : ve("", !0), Se(X("button", {
            class: "submit",
            type: "submit",
            disabled: e.isSubmitting
        }, null, 8, Sie), [
            [f, "ACTION.SUBMIT"]
        ])], 32), e.player.isThriplash ? ve("", !0) : (F(), W("div", Oie, [Se(X("span", null, null, 512), [
            [f, "WRITING.SAFETY_QUIP_LABEL"]
        ]), Se(X("button", {
            type: "submit",
            disabled: e.isSubmitting,
            onClick: t[1] || (t[1] = ze((...d) => e.onSafetyQuip && e.onSafetyQuip(...d), ["prevent"]))
        }, null, 8, wie), [
            [f, "WRITING.SAFETY_QUIP_SUBMIT"]
        ])]))])
    }
    const Iie = ot(yie, [
            ["render", Cie],
            ["__scopeId", "data-v-b2a6e3aa"]
        ]),
        sb = {
            isWaiting(e) {
                return e.kind === "waiting"
            }
        },
        $ie = rt({
            components: {
                NameHeader: pne,
                Lobby: lne,
                PostGame: yne,
                Ugc: Yne,
                Voting: nie,
                Waiting: vie,
                Writing: Iie
            },
            ecastKeys: {
                audience: "audiencePlayer",
                info: ({
                    id: e
                }) => `info:${e}`,
                player: ({
                    id: e
                }) => `player:${e}`
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
            bb: {
                answer: (e, t) => `<b>${t}</b><br>`,
                header: (e, t) => `${t}<br>`,
                line: (e, t) => `${t}<br>`
            },
            data() {
                return {
                    avatarImages: {
                        blue: {
                            alt: this.$t("ALT.AVATAR_BLUE"),
                            src: new URL("main/tjsp/quiplash3/assets/e04e096a.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/7dee360c.png", self.location).href
                        },
                        cactus: {
                            alt: this.$t("ALT.AVATAR_CACTUS"),
                            src: new URL("main/tjsp/quiplash3/assets/fdc077f7.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/4fa828db.png", self.location).href
                        },
                        coffin: {
                            alt: this.$t("ALT.AVATAR_COFFIN"),
                            src: new URL("main/tjsp/quiplash3/assets/280cf9a8.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/dcb6226c.png", self.location).href
                        },
                        green: {
                            alt: this.$t("ALT.AVATAR_GREEN"),
                            src: new URL("main/tjsp/quiplash3/assets/abd9f820.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/c187fd5c.png", self.location).href
                        },
                        kitten: {
                            alt: this.$t("ALT.AVATAR_KITTEN"),
                            src: new URL("main/tjsp/quiplash3/assets/8af52544.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/285dc300.png", self.location).href
                        },
                        moon: {
                            alt: this.$t("ALT.AVATAR_MOON"),
                            src: new URL("main/tjsp/quiplash3/assets/7af12aea.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/e17f5dd3.png", self.location).href
                        },
                        orange: {
                            alt: this.$t("ALT.AVATAR_ORANGE"),
                            src: new URL("main/tjsp/quiplash3/assets/09864db7.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/a18def0b.png", self.location).href
                        },
                        pink: {
                            alt: this.$t("ALT.AVATAR_PINK"),
                            src: new URL("main/tjsp/quiplash3/assets/4cabba82.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/95dc2016.png", self.location).href
                        },
                        poop: {
                            alt: this.$t("ALT.AVATAR_POOP"),
                            src: new URL("main/tjsp/quiplash3/assets/a2adde5a.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/bb504cb5.png", self.location).href
                        },
                        purple: {
                            alt: this.$t("ALT.AVATAR_PURPLE"),
                            src: new URL("main/tjsp/quiplash3/assets/02e8436e.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/29e8b1b6.png", self.location).href
                        },
                        red: {
                            alt: this.$t("ALT.AVATAR_RED"),
                            src: new URL("main/tjsp/quiplash3/assets/032168a9.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/51290d40.png", self.location).href
                        },
                        star: {
                            alt: this.$t("ALT.AVATAR_STAR"),
                            src: new URL("main/tjsp/quiplash3/assets/3fe9e19e.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/b6eb0724.png", self.location).href
                        },
                        teal: {
                            alt: this.$t("ALT.AVATAR_TEAL"),
                            src: new URL("main/tjsp/quiplash3/assets/2f432b5f.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/705fa0a3.png", self.location).href
                        },
                        tear: {
                            alt: this.$t("ALT.AVATAR_TEAR"),
                            src: new URL("main/tjsp/quiplash3/assets/928ef0da.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/87962b55.png", self.location).href
                        },
                        triclops: {
                            alt: this.$t("ALT.AVATAR_TRICLOPS"),
                            src: new URL("main/tjsp/quiplash3/assets/c8acb756.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/76bf77d1.png", self.location).href
                        },
                        yellow: {
                            alt: this.$t("ALT.AVATAR_YELLOW"),
                            src: new URL("main/tjsp/quiplash3/assets/b1eb80c8.png", self.location).href,
                            selected: new URL("main/tjsp/quiplash3/assets/443f3194.png", self.location).href
                        }
                    },
                    themeColors: {
                        audience: "#9d6dd2",
                        blue: "#415591",
                        cactus: "#2b391f",
                        coffin: "#636363",
                        default: "#636363",
                        green: "#35613b",
                        kitten: "#498c7e",
                        moon: "#684c30",
                        orange: "#785730",
                        pink: "#6e426b",
                        poop: "#3b2726",
                        purple: "#4a3396",
                        red: "#8a4545",
                        star: "#63802c",
                        teal: "#2e657a",
                        tear: "#202954",
                        triclops: "#6644a6",
                        ugc: "#6644a6",
                        yellow: "#73703a"
                    }
                }
            },
            computed: {
                avatarName() {
                    var e;
                    return (e = this.info) != null && e.avatar ? this.info.avatar : ""
                },
                background() {
                    const e = this.player || this.audience;
                    return e ? sb.isWaiting(e) ? e.round == null ? "logo" : "round" : this.theme : ""
                },
                guards: () => sb,
                screen() {
                    if (this.$ecast.role === "audience" && this.audience) switch (this.audience.kind) {
                        case "postGame":
                            return {
                                name: "PostGame", props: {
                                    artifact: this.artifact,
                                    player: this.audience
                                }
                            };
                        case "voting":
                            return {
                                name: "Voting", props: {
                                    player: this.audience
                                }
                            };
                        case "waiting":
                            return {
                                name: "Waiting", props: {
                                    artifact: this.artifact,
                                    player: this.audience
                                }
                            }
                    } else if (this.$ecast.role === "player" && this.player) switch (this.player.kind) {
                        case "lobby":
                            return {
                                name: "Lobby", props: {
                                    avatarImages: this.avatarImages,
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
                        case "ugc":
                            return {
                                name: "Ugc", props: {
                                    player: this.player
                                }
                            };
                        case "voting":
                            return {
                                name: "Voting", props: {
                                    player: this.player
                                }
                            };
                        case "waiting":
                            return {
                                name: "Waiting", props: {
                                    artifact: this.artifact,
                                    player: this.player
                                }
                            };
                        case "writing":
                            return {
                                name: "Writing", props: {
                                    player: this.player
                                }
                            }
                    }
                    return {
                        name: "Waiting"
                    }
                },
                theme() {
                    var e, t;
                    return this.$ecast.role === "audience" || ((e = this.player) == null ? void 0 : e.kind) === "ugc" ? "triclops" : (t = this.info) != null && t.avatar ? this.avatarName : "default"
                }
            },
            watch: {
                theme() {
                    this.$setThemeColor(this.themeColors[this.theme])
                }
            },
            mounted() {
                this.$setThemeColor(this.themeColors.default)
            }
        }),
        Rie = {
            class: "constrain"
        };

    function Lie(e, t, r, n, s, a) {
        const l = gr("NameHeader");
        return F(), W("div", {
            class: Ve(["quiplash3", e.theme])
        }, [e.info ? (F(), fn(l, {
            key: 0,
            class: "name-header",
            avatar: e.info.avatar && e.avatarImages[e.avatarName],
            name: e.info.name
        }, null, 8, ["avatar", "name"])) : e.audience ? (F(), fn(l, {
            key: 1,
            class: "name-header",
            name: e.$t("AUDIENCE.NAME")
        }, null, 8, ["name"])) : ve("", !0), X("div", {
            class: Ve(["stage", e.background])
        }, [X("div", Rie, [(F(), fn(Dh(e.screen.name), BL(oT(e.screen.props)), null, 16))])], 2)], 2)
    }
    const Nie = ot($ie, [
        ["render", Lie]
    ]);
    dre({
        MainView: Nie,
        messages: Wre,
        plugins: [lb]
    })
});
export default Pie();
//# sourceMappingURL=9620ce05.js.map