var TL = Object.defineProperty;
var AL = (e, t, r) => t in e ? TL(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var OL = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var ge = (e, t, r) => (AL(e, typeof t != "symbol" ? t + "" : t, r), r);
var Die = OL((Mie, KS) => {
    (function() {
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
    })();
    /*!
     * maska v1.5.0
     * (c) 2019-2021 Alexander Shabunevich
     * Released under the MIT License.
     */
    function SL(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function wL(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function CL(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function Av(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(s) {
                return Object.getOwnPropertyDescriptor(e, s).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function $l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t] != null ? arguments[t] : {};
            t % 2 ? Av(Object(r), !0).forEach(function(n) {
                CL(e, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Av(Object(r)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
            })
        }
        return e
    }
    var sb = {
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

    function Ov(e, t) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : sb,
            n = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
        return ab(t).length > 1 ? IL(t)(e, t, r, n) : od(e, t, r, n)
    }

    function ab(e) {
        try {
            return JSON.parse(e)
        } catch {
            return [e]
        }
    }

    function IL(e) {
        var t = ab(e).sort(function(n, s) {
            return n.length - s.length
        });
        return function(n, s, a) {
            var l = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3],
                c = t.map(function(p) {
                    return od(n, p, a, !1)
                }),
                f = c.pop();
            for (var d in t)
                if (r(f, t[d], a)) return od(n, t[d], a, l);
            return ""
        };

        function r(n, s, a) {
            for (var l in a) a[l].escape && (s = s.replace(new RegExp(l + ".{1}", "g"), ""));
            return s.split("").filter(function(c) {
                return a[c] && a[c].pattern
            }).length >= n.length
        }
    }

    function od(e, t, r) {
        for (var n = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], s = 0, a = 0, l = "", c = ""; s < t.length && a < e.length;) {
            var f = t[s],
                d = e[a],
                p = r[f];
            if (p && p.pattern) p.pattern.test(d) && (l += $L(d, p), s++, n && t[s] && (r[t[s]] ? r[t[s]] && r[t[s]].escape && (l += t[s + 1], s += 2) : (l += t[s], s++))), a++;
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

    function $L(e, t) {
        return t.transform && (e = t.transform(e)), t.uppercase ? e.toLocaleUpperCase() : t.lowercase ? e.toLocaleLowerCase() : e
    }

    function Sv(e) {
        return e instanceof HTMLInputElement ? e : e.querySelector("input") || e
    }

    function ld(e) {
        return Object.prototype.toString.call(e) === "[object String]"
    }
    var RL = function() {
            function e(n) {
                var s = this,
                    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (SL(this, e), !n) throw new Error("Maska: no element for mask");
                if (a.preprocessor != null && typeof a.preprocessor != "function") throw new Error("Maska: preprocessor must be a function");
                if (a.tokens)
                    for (var l in a.tokens) a.tokens[l] = $l({}, a.tokens[l]), a.tokens[l].pattern && ld(a.tokens[l].pattern) && (a.tokens[l].pattern = new RegExp(a.tokens[l].pattern));
                this._opts = {
                    mask: a.mask,
                    tokens: $l($l({}, sb), a.tokens),
                    preprocessor: a.preprocessor
                }, this._el = ld(n) ? document.querySelectorAll(n) : n.length ? n : [n], this.inputEvent = function(c) {
                    return s.updateValue(c.target, c)
                }, this.init()
            }
            var t, r;
            return t = e, (r = [{
                key: "init",
                value: function() {
                    for (var n = this, s = function(l) {
                            var c = Sv(n._el[l]);
                            !n._opts.mask || c.dataset.mask && c.dataset.mask === n._opts.mask || (c.dataset.mask = n._opts.mask), setTimeout(function() {
                                return n.updateValue(c)
                            }, 0), c.dataset.maskInited || (c.dataset.maskInited = !0, c.addEventListener("input", n.inputEvent), c.addEventListener("beforeinput", n.beforeInput))
                        }, a = 0; a < this._el.length; a++) s(a)
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var n = 0; n < this._el.length; n++) {
                        var s = Sv(this._el[n]);
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
                        n.dataset.maskRawValue = Ov(n.value, n.dataset.mask, this._opts.tokens, !1);
                        var d = n.value;
                        this._opts.preprocessor && (d = this._opts.preprocessor(d)), n.value = Ov(d, n.dataset.mask, this._opts.tokens), s && s.inputType === "insertText" && l === c.length && (l = n.value.length),
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
            }]) && wL(t.prototype, r), e
        }(),
        ff, LL = (ff = new WeakMap, function(e, t) {
            t.value && (ff.has(e) && ! function(r) {
                return !(ld(r.value) && r.value === r.oldValue || Array.isArray(r.value) && JSON.stringify(r.value) === JSON.stringify(r.oldValue) || r.value && r.value.mask && r.oldValue && r.oldValue.mask && r.value.mask === r.oldValue.mask)
            }(t) || ff.set(e, new RL(e, function(r) {
                var n = {};
                return r.mask ? (n.mask = Array.isArray(r.mask) ? JSON.stringify(r.mask) : r.mask, n.tokens = r.tokens ? $l({}, r.tokens) : {}, n.preprocessor = r.preprocessor) : n.mask = Array.isArray(r) ? JSON.stringify(r) : r, n
            }(t.value))))
        });

    function ob(e) {
        e.directive("maska", LL)
    }
    typeof window < "u" && window.Vue && window.Vue.use && window.Vue.use(ob);

    function gh(e, t) {
        const r = Object.create(null),
            n = e.split(",");
        for (let s = 0; s < n.length; s++) r[n[s]] = !0;
        return t ? s => !!r[s.toLowerCase()] : s => !!r[s]
    }
    const NL = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
        PL = gh(NL);

    function lb(e) {
        return !!e || e === ""
    }

    function oo(e) {
        if (ke(e)) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
                const n = e[r],
                    s = Ft(n) ? xL(n) : oo(n);
                if (s)
                    for (const a in s) t[a] = s[a]
            }
            return t
        } else {
            if (Ft(e)) return e;
            if (yt(e)) return e
        }
    }
    const kL = /;(?![^(]*\))/g,
        DL = /:(.+)/;

    function xL(e) {
        const t = {};
        return e.split(kL).forEach(r => {
            if (r) {
                const n = r.split(DL);
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
            } else if (yt(e))
                for (const r in e) e[r] && (t += r + " ");
        return t.trim()
    }

    function ML(e) {
        if (!e) return null;
        let {
            class: t,
            style: r
        } = e;
        return t && !Ft(t) && (e.class = Ve(t)), r && (e.style = oo(r)), e
    }

    function UL(e, t) {
        if (e.length !== t.length) return !1;
        let r = !0;
        for (let n = 0; r && n < e.length; n++) r = ac(e[n], t[n]);
        return r
    }

    function ac(e, t) {
        if (e === t) return !0;
        let r = wv(e),
            n = wv(t);
        if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
        if (r = qa(e), n = qa(t), r || n) return e === t;
        if (r = ke(e), n = ke(t), r || n) return r && n ? UL(e, t) : !1;
        if (r = yt(e), n = yt(t), r || n) {
            if (!r || !n) return !1;
            const s = Object.keys(e).length,
                a = Object.keys(t).length;
            if (s !== a) return !1;
            for (const l in e) {
                const c = e.hasOwnProperty(l),
                    f = t.hasOwnProperty(l);
                if (c && !f || !c && f || !ac(e[l], t[l])) return !1
            }
        }
        return String(e) === String(t)
    }

    function cb(e, t) {
        return e.findIndex(r => ac(r, t))
    }
    const Me = e => Ft(e) ? e : e == null ? "" : ke(e) || yt(e) && (e.toString === db || !Ke(e.toString)) ? JSON.stringify(e, ub, 2) : String(e),
        ub = (e, t) => t && t.__v_isRef ? ub(e, t.value) : Ms(t) ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, s]) => (r[`${n} =>`] = s, r), {})
        } : lc(t) ? {
            [`Set(${t.size})`]: [...t.values()]
        } : yt(t) && !ke(t) && !hb(t) ? String(t) : t,
        vt = {},
        xs = [],
        fn = () => {},
        FL = () => !1,
        BL = /^on[^a-z]/,
        oc = e => BL.test(e),
        mh = e => e.startsWith("onUpdate:"),
        nr = Object.assign,
        vh = (e, t) => {
            const r = e.indexOf(t);
            r > -1 && e.splice(r, 1)
        },
        GL = Object.prototype.hasOwnProperty,
        tt = (e, t) => GL.call(e, t),
        ke = Array.isArray,
        Ms = e => lo(e) === "[object Map]",
        lc = e => lo(e) === "[object Set]",
        wv = e => lo(e) === "[object Date]",
        Ke = e => typeof e == "function",
        Ft = e => typeof e == "string",
        qa = e => typeof e == "symbol",
        yt = e => e !== null && typeof e == "object",
        fb = e => yt(e) && Ke(e.then) && Ke(e.catch),
        db = Object.prototype.toString,
        lo = e => db.call(e),
        jL = e => lo(e).slice(8, -1),
        hb = e => lo(e) === "[object Object]",
        yh = e => Ft(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Rl = gh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        cc = e => {
            const t = Object.create(null);
            return r => t[r] || (t[r] = e(r))
        },
        WL = /-(\w)/g,
        Cn = cc(e => e.replace(WL, (t, r) => r ? r.toUpperCase() : "")),
        VL = /\B([A-Z])/g,
        ls = cc(e => e.replace(VL, "-$1").toLowerCase()),
        uc = cc(e => e.charAt(0).toUpperCase() + e.slice(1)),
        df = cc(e => e ? `on${uc(e)}` : ""),
        Ya = (e, t) => !Object.is(e, t),
        Ll = (e, t) => {
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
    let Cv;
    const KL = () => Cv || (Cv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
    let Tn;
    class pb {
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

    function HL(e) {
        return new pb(e)
    }

    function qL(e, t = Tn) {
        t && t.active && t.effects.push(e)
    }
    const _h = e => {
            const t = new Set(e);
            return t.w = 0, t.n = 0, t
        },
        gb = e => (e.w & hi) > 0,
        mb = e => (e.n & hi) > 0,
        YL = ({
            deps: e
        }) => {
            if (e.length)
                for (let t = 0; t < e.length; t++) e[t].w |= hi
        },
        zL = e => {
            const {
                deps: t
            } = e;
            if (t.length) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = t[n];
                    gb(s) && !mb(s) ? s.delete(e) : t[r++] = s, s.w &= ~hi, s.n &= ~hi
                }
                t.length = r
            }
        },
        cd = new WeakMap;
    let Da = 0,
        hi = 1;
    const ud = 30;
    let ln;
    const Qi = Symbol(""),
        fd = Symbol("");
    class Eh {
        constructor(t, r = null, n) {
            this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, qL(this, n)
        }
        run() {
            if (!this.active) return this.fn();
            let t = ln,
                r = ui;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = ln, ln = this, ui = !0, hi = 1 << ++Da, Da <= ud ? YL(this) : Iv(this), this.fn()
            } finally {
                Da <= ud && zL(this), hi = 1 << --Da, ln = this.parent, ui = r, this.parent = void 0, this.deferStop && this.stop()
            }
        }
        stop() {
            ln === this ? this.deferStop = !0 : this.active && (Iv(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function Iv(e) {
        const {
            deps: t
        } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0
        }
    }
    let ui = !0;
    const vb = [];

    function na() {
        vb.push(ui), ui = !1
    }

    function ia() {
        const e = vb.pop();
        ui = e === void 0 ? !0 : e
    }

    function Mr(e, t, r) {
        if (ui && ln) {
            let n = cd.get(e);
            n || cd.set(e, n = new Map);
            let s = n.get(r);
            s || n.set(r, s = _h()), yb(s)
        }
    }

    function yb(e, t) {
        let r = !1;
        Da <= ud ? mb(e) || (e.n |= hi, r = !gb(e)) : r = !e.has(ln), r && (e.add(ln), ln.deps.push(e))
    }

    function Gn(e, t, r, n, s, a) {
        const l = cd.get(e);
        if (!l) return;
        let c = [];
        if (t === "clear") c = [...l.values()];
        else if (r === "length" && ke(e)) l.forEach((f, d) => {
            (d === "length" || d >= n) && c.push(f)
        });
        else switch (r !== void 0 && c.push(l.get(r)), t) {
            case "add":
                ke(e) ? yh(r) && c.push(l.get("length")) : (c.push(l.get(Qi)), Ms(e) && c.push(l.get(fd)));
                break;
            case "delete":
                ke(e) || (c.push(l.get(Qi)), Ms(e) && c.push(l.get(fd)));
                break;
            case "set":
                Ms(e) && c.push(l.get(Qi));
                break
        }
        if (c.length === 1) c[0] && dd(c[0]);
        else {
            const f = [];
            for (const d of c) d && f.push(...d);
            dd(_h(f))
        }
    }

    function dd(e, t) {
        const r = ke(e) ? e : [...e];
        for (const n of r) n.computed && $v(n);
        for (const n of r) n.computed || $v(n)
    }

    function $v(e, t) {
        (e !== ln || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }
    const XL = gh("__proto__,__v_isRef,__isVue"),
        _b = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(qa)),
        JL = bh(),
        QL = bh(!1, !0),
        ZL = bh(!0),
        Rv = eN();

    function eN() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function(...r) {
                const n = ot(this);
                for (let a = 0, l = this.length; a < l; a++) Mr(n, "get", a + "");
                const s = n[t](...r);
                return s === -1 || s === !1 ? n[t](...r.map(ot)) : s
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function(...r) {
                na();
                const n = ot(this)[t].apply(this, r);
                return ia(), n
            }
        }), e
    }

    function bh(e = !1, t = !1) {
        return function(n, s, a) {
            if (s === "__v_isReactive") return !e;
            if (s === "__v_isReadonly") return e;
            if (s === "__v_isShallow") return t;
            if (s === "__v_raw" && a === (e ? t ? mN : Ob : t ? Ab : Tb).get(n)) return n;
            const l = ke(n);
            if (!e && l && tt(Rv, s)) return Reflect.get(Rv, s, a);
            const c = Reflect.get(n, s, a);
            return (qa(s) ? _b.has(s) : XL(s)) || (e || Mr(n, "get", s), t) ? c : tr(c) ? l && yh(s) ? c : c.value : yt(c) ? e ? Sb(c) : jn(c) : c
        }
    }
    const tN = Eb(),
        rN = Eb(!0);

    function Eb(e = !1) {
        return function(r, n, s, a) {
            let l = r[n];
            if (Ys(l) && tr(l) && !tr(s)) return !1;
            if (!e && (!Gl(s) && !Ys(s) && (l = ot(l), s = ot(s)), !ke(r) && tr(l) && !tr(s))) return l.value = s, !0;
            const c = ke(r) && yh(n) ? Number(n) < r.length : tt(r, n),
                f = Reflect.set(r, n, s, a);
            return r === ot(a) && (c ? Ya(s, l) && Gn(r, "set", n, s) : Gn(r, "add", n, s)), f
        }
    }

    function nN(e, t) {
        const r = tt(e, t);
        e[t];
        const n = Reflect.deleteProperty(e, t);
        return n && r && Gn(e, "delete", t, void 0), n
    }

    function iN(e, t) {
        const r = Reflect.has(e, t);
        return (!qa(t) || !_b.has(t)) && Mr(e, "has", t), r
    }

    function sN(e) {
        return Mr(e, "iterate", ke(e) ? "length" : Qi), Reflect.ownKeys(e)
    }
    const bb = {
            get: JL,
            set: tN,
            deleteProperty: nN,
            has: iN,
            ownKeys: sN
        },
        aN = {
            get: ZL,
            set(e, t) {
                return !0
            },
            deleteProperty(e, t) {
                return !0
            }
        },
        oN = nr({}, bb, {
            get: QL,
            set: rN
        }),
        Th = e => e,
        fc = e => Reflect.getPrototypeOf(e);

    function ul(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        const s = ot(e),
            a = ot(t);
        r || (t !== a && Mr(s, "get", t), Mr(s, "get", a));
        const {
            has: l
        } = fc(s), c = n ? Th : r ? Sh : za;
        if (l.call(s, t)) return c(e.get(t));
        if (l.call(s, a)) return c(e.get(a));
        e !== s && e.get(t)
    }

    function fl(e, t = !1) {
        const r = this.__v_raw,
            n = ot(r),
            s = ot(e);
        return t || (e !== s && Mr(n, "has", e), Mr(n, "has", s)), e === s ? r.has(e) : r.has(e) || r.has(s)
    }

    function dl(e, t = !1) {
        return e = e.__v_raw, !t && Mr(ot(e), "iterate", Qi), Reflect.get(e, "size", e)
    }

    function Lv(e) {
        e = ot(e);
        const t = ot(this);
        return fc(t).has.call(t, e) || (t.add(e), Gn(t, "add", e, e)), this
    }

    function Nv(e, t) {
        t = ot(t);
        const r = ot(this),
            {
                has: n,
                get: s
            } = fc(r);
        let a = n.call(r, e);
        a || (e = ot(e), a = n.call(r, e));
        const l = s.call(r, e);
        return r.set(e, t), a ? Ya(t, l) && Gn(r, "set", e, t) : Gn(r, "add", e, t), this
    }

    function Pv(e) {
        const t = ot(this),
            {
                has: r,
                get: n
            } = fc(t);
        let s = r.call(t, e);
        s || (e = ot(e), s = r.call(t, e)), n && n.call(t, e);
        const a = t.delete(e);
        return s && Gn(t, "delete", e, void 0), a
    }

    function kv() {
        const e = ot(this),
            t = e.size !== 0,
            r = e.clear();
        return t && Gn(e, "clear", void 0, void 0), r
    }

    function hl(e, t) {
        return function(n, s) {
            const a = this,
                l = a.__v_raw,
                c = ot(l),
                f = t ? Th : e ? Sh : za;
            return !e && Mr(c, "iterate", Qi), l.forEach((d, p) => n.call(s, f(d), f(p), a))
        }
    }

    function pl(e, t, r) {
        return function(...n) {
            const s = this.__v_raw,
                a = ot(s),
                l = Ms(a),
                c = e === "entries" || e === Symbol.iterator && l,
                f = e === "keys" && l,
                d = s[e](...n),
                p = r ? Th : t ? Sh : za;
            return !t && Mr(a, "iterate", f ? fd : Qi), {
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

    function ei(e) {
        return function(...t) {
            return e === "delete" ? !1 : this
        }
    }

    function lN() {
        const e = {
                get(a) {
                    return ul(this, a)
                },
                get size() {
                    return dl(this)
                },
                has: fl,
                add: Lv,
                set: Nv,
                delete: Pv,
                clear: kv,
                forEach: hl(!1, !1)
            },
            t = {
                get(a) {
                    return ul(this, a, !1, !0)
                },
                get size() {
                    return dl(this)
                },
                has: fl,
                add: Lv,
                set: Nv,
                delete: Pv,
                clear: kv,
                forEach: hl(!1, !0)
            },
            r = {
                get(a) {
                    return ul(this, a, !0)
                },
                get size() {
                    return dl(this, !0)
                },
                has(a) {
                    return fl.call(this, a, !0)
                },
                add: ei("add"),
                set: ei("set"),
                delete: ei("delete"),
                clear: ei("clear"),
                forEach: hl(!0, !1)
            },
            n = {
                get(a) {
                    return ul(this, a, !0, !0)
                },
                get size() {
                    return dl(this, !0)
                },
                has(a) {
                    return fl.call(this, a, !0)
                },
                add: ei("add"),
                set: ei("set"),
                delete: ei("delete"),
                clear: ei("clear"),
                forEach: hl(!0, !0)
            };
        return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
            e[a] = pl(a, !1, !1), r[a] = pl(a, !0, !1), t[a] = pl(a, !1, !0), n[a] = pl(a, !0, !0)
        }), [e, r, t, n]
    }
    const [cN, uN, fN, dN] = lN();

    function Ah(e, t) {
        const r = t ? e ? dN : fN : e ? uN : cN;
        return (n, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? n : Reflect.get(tt(r, s) && s in n ? r : n, s, a)
    }
    const hN = {
            get: Ah(!1, !1)
        },
        pN = {
            get: Ah(!1, !0)
        },
        gN = {
            get: Ah(!0, !1)
        },
        Tb = new WeakMap,
        Ab = new WeakMap,
        Ob = new WeakMap,
        mN = new WeakMap;

    function vN(e) {
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

    function yN(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : vN(jL(e))
    }

    function jn(e) {
        return Ys(e) ? e : Oh(e, !1, bb, hN, Tb)
    }

    function _N(e) {
        return Oh(e, !1, oN, pN, Ab)
    }

    function Sb(e) {
        return Oh(e, !0, aN, gN, Ob)
    }

    function Oh(e, t, r, n, s) {
        if (!yt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const a = s.get(e);
        if (a) return a;
        const l = yN(e);
        if (l === 0) return e;
        const c = new Proxy(e, l === 2 ? n : r);
        return s.set(e, c), c
    }

    function Us(e) {
        return Ys(e) ? Us(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function Ys(e) {
        return !!(e && e.__v_isReadonly)
    }

    function Gl(e) {
        return !!(e && e.__v_isShallow)
    }

    function wb(e) {
        return Us(e) || Ys(e)
    }

    function ot(e) {
        const t = e && e.__v_raw;
        return t ? ot(t) : e
    }

    function Cb(e) {
        return Fl(e, "__v_skip", !0), e
    }
    const za = e => yt(e) ? jn(e) : e,
        Sh = e => yt(e) ? Sb(e) : e;

    function Ib(e) {
        ui && ln && (e = ot(e), yb(e.dep || (e.dep = _h())))
    }

    function $b(e, t) {
        e = ot(e), e.dep && dd(e.dep)
    }

    function tr(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function cn(e) {
        return Rb(e, !1)
    }

    function EN(e) {
        return Rb(e, !0)
    }

    function Rb(e, t) {
        return tr(e) ? e : new bN(e, t)
    }
    class bN {
        constructor(t, r) {
            this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : ot(t), this._value = r ? t : za(t)
        }
        get value() {
            return Ib(this), this._value
        }
        set value(t) {
            const r = this.__v_isShallow || Gl(t) || Ys(t);
            t = r ? t : ot(t), Ya(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : za(t), $b(this))
        }
    }

    function TN(e) {
        return tr(e) ? e.value : e
    }
    const AN = {
        get: (e, t, r) => TN(Reflect.get(e, t, r)),
        set: (e, t, r, n) => {
            const s = e[t];
            return tr(s) && !tr(r) ? (s.value = r, !0) : Reflect.set(e, t, r, n)
        }
    };

    function Lb(e) {
        return Us(e) ? e : new Proxy(e, AN)
    }
    var Nb;
    class ON {
        constructor(t, r, n, s) {
            this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[Nb] = !1, this._dirty = !0, this.effect = new Eh(t, () => {
                this._dirty || (this._dirty = !0, $b(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
        }
        get value() {
            const t = ot(this);
            return Ib(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }
        set value(t) {
            this._setter(t)
        }
    }
    Nb = "__v_isReadonly";

    function SN(e, t, r = !1) {
        let n, s;
        const a = Ke(e);
        return a ? (n = e, s = fn) : (n = e.get, s = e.set), new ON(n, s, a || !s, r)
    }

    function fi(e, t, r, n) {
        let s;
        try {
            s = n ? e(...n) : e()
        } catch (a) {
            dc(a, t, r)
        }
        return s
    }

    function Qr(e, t, r, n) {
        if (Ke(e)) {
            const a = fi(e, t, r, n);
            return a && fb(a) && a.catch(l => {
                dc(l, t, r)
            }), a
        }
        const s = [];
        for (let a = 0; a < e.length; a++) s.push(Qr(e[a], t, r, n));
        return s
    }

    function dc(e, t, r, n = !0) {
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
        wN(e, r, s, n)
    }

    function wN(e, t, r, n = !0) {
        console.error(e)
    }
    let Xa = !1,
        hd = !1;
    const lr = [];
    let wn = 0;
    const Fs = [];
    let Un = null,
        Ki = 0;
    const Pb = Promise.resolve();
    let wh = null;

    function CN(e) {
        const t = wh || Pb;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function IN(e) {
        let t = wn + 1,
            r = lr.length;
        for (; t < r;) {
            const n = t + r >>> 1;
            Ja(lr[n]) < e ? t = n + 1 : r = n
        }
        return t
    }

    function Ch(e) {
        (!lr.length || !lr.includes(e, Xa && e.allowRecurse ? wn + 1 : wn)) && (e.id == null ? lr.push(e) : lr.splice(IN(e.id), 0, e), kb())
    }

    function kb() {
        !Xa && !hd && (hd = !0, wh = Pb.then(xb))
    }

    function $N(e) {
        const t = lr.indexOf(e);
        t > wn && lr.splice(t, 1)
    }

    function RN(e) {
        ke(e) ? Fs.push(...e) : (!Un || !Un.includes(e, e.allowRecurse ? Ki + 1 : Ki)) && Fs.push(e), kb()
    }

    function Dv(e, t = Xa ? wn + 1 : 0) {
        for (; t < lr.length; t++) {
            const r = lr[t];
            r && r.pre && (lr.splice(t, 1), t--, r())
        }
    }

    function Db(e) {
        if (Fs.length) {
            const t = [...new Set(Fs)];
            if (Fs.length = 0, Un) {
                Un.push(...t);
                return
            }
            for (Un = t, Un.sort((r, n) => Ja(r) - Ja(n)), Ki = 0; Ki < Un.length; Ki++) Un[Ki]();
            Un = null, Ki = 0
        }
    }
    const Ja = e => e.id == null ? 1 / 0 : e.id,
        LN = (e, t) => {
            const r = Ja(e) - Ja(t);
            if (r === 0) {
                if (e.pre && !t.pre) return -1;
                if (t.pre && !e.pre) return 1
            }
            return r
        };

    function xb(e) {
        hd = !1, Xa = !0, lr.sort(LN);
        const t = fn;
        try {
            for (wn = 0; wn < lr.length; wn++) {
                const r = lr[wn];
                r && r.active !== !1 && fi(r, null, 14)
            }
        } finally {
            wn = 0, lr.length = 0, Db(), Xa = !1, wh = null, (lr.length || Fs.length) && xb()
        }
    }

    function NN(e, t, ...r) {
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
            b && (s = r.map(w => w.trim())), y && (s = r.map(Bl))
        }
        let c, f = n[c = df(t)] || n[c = df(Cn(t))];
        !f && a && (f = n[c = df(ls(t))]), f && Qr(f, e, 6, s);
        const d = n[c + "Once"];
        if (d) {
            if (!e.emitted) e.emitted = {};
            else if (e.emitted[c]) return;
            e.emitted[c] = !0, Qr(d, e, 6, s)
        }
    }

    function Mb(e, t, r = !1) {
        const n = t.emitsCache,
            s = n.get(e);
        if (s !== void 0) return s;
        const a = e.emits;
        let l = {},
            c = !1;
        if (!Ke(e)) {
            const f = d => {
                const p = Mb(d, t, !0);
                p && (c = !0, nr(l, p))
            };
            !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        return !a && !c ? (yt(e) && n.set(e, null), null) : (ke(a) ? a.forEach(f => l[f] = null) : nr(l, a), yt(e) && n.set(e, l), l)
    }

    function hc(e, t) {
        return !e || !oc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), tt(e, t[0].toLowerCase() + t.slice(1)) || tt(e, ls(t)) || tt(e, t))
    }
    let cr = null,
        pc = null;

    function jl(e) {
        const t = cr;
        return cr = e, pc = e && e.type.__scopeId || null, t
    }

    function gc(e) {
        pc = e
    }

    function mc() {
        pc = null
    }

    function Ih(e, t = cr, r) {
        if (!t || e._n) return e;
        const n = (...s) => {
            n._d && Hv(-1);
            const a = jl(t),
                l = e(...s);
            return jl(a), n._d && Hv(1), l
        };
        return n._n = !0, n._c = !0, n._d = !0, n
    }

    function hf(e) {
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
        const H = jl(e);
        try {
            if (r.shapeFlag & 4) {
                const V = s || n;
                G = On(p.call(V, V, y, a, w, b, P)), C = f
            } else {
                const V = t;
                G = On(V.length > 1 ? V(a, {
                    attrs: f,
                    slots: c,
                    emit: d
                }) : V(a, null)), C = t.props ? f : PN(f)
            }
        } catch (V) {
            Fa.length = 0, dc(V, e, 1), G = pt(Zr)
        }
        let z = G;
        if (C && M !== !1) {
            const V = Object.keys(C),
                {
                    shapeFlag: j
                } = z;
            V.length && j & 7 && (l && V.some(mh) && (C = kN(C, l)), z = pi(z, C))
        }
        return r.dirs && (z = pi(z), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && (z.transition = r.transition), G = z, jl(H), G
    }
    const PN = e => {
            let t;
            for (const r in e)(r === "class" || r === "style" || oc(r)) && ((t || (t = {}))[r] = e[r]);
            return t
        },
        kN = (e, t) => {
            const r = {};
            for (const n in e)(!mh(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
            return r
        };

    function DN(e, t, r) {
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
            if (f & 16) return n ? xv(n, l, d) : !!l;
            if (f & 8) {
                const p = t.dynamicProps;
                for (let y = 0; y < p.length; y++) {
                    const b = p[y];
                    if (l[b] !== n[b] && !hc(d, b)) return !0
                }
            }
        } else return (s || c) && (!c || !c.$stable) ? !0 : n === l ? !1 : n ? l ? xv(n, l, d) : !0 : !!l;
        return !1
    }

    function xv(e, t, r) {
        const n = Object.keys(t);
        if (n.length !== Object.keys(e).length) return !0;
        for (let s = 0; s < n.length; s++) {
            const a = n[s];
            if (t[a] !== e[a] && !hc(r, a)) return !0
        }
        return !1
    }

    function xN({
        vnode: e,
        parent: t
    }, r) {
        for (; t && t.subTree === e;)(e = t.vnode).el = r, t = t.parent
    }
    const MN = e => e.__isSuspense;

    function UN(e, t) {
        t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : RN(e)
    }

    function FN(e, t) {
        if (Yt) {
            let r = Yt.provides;
            const n = Yt.parent && Yt.parent.provides;
            n === r && (r = Yt.provides = Object.create(n)), r[e] = t
        }
    }

    function Zi(e, t, r = !1) {
        const n = Yt || cr;
        if (n) {
            const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
            if (s && e in s) return s[e];
            if (arguments.length > 1) return r && Ke(t) ? t.call(n.proxy) : t
        }
    }
    const Mv = {};

    function es(e, t, r) {
        return Ub(e, t, r)
    }

    function Ub(e, t, {
        immediate: r,
        deep: n,
        flush: s,
        onTrack: a,
        onTrigger: l
    } = vt) {
        const c = Yt;
        let f, d = !1,
            p = !1;
        if (tr(e) ? (f = () => e.value, d = Gl(e)) : Us(e) ? (f = () => e, n = !0) : ke(e) ? (p = !0, d = e.some(C => Us(C) || Gl(C)), f = () => e.map(C => {
                if (tr(C)) return C.value;
                if (Us(C)) return Ji(C);
                if (Ke(C)) return fi(C, c, 2)
            })) : Ke(e) ? t ? f = () => fi(e, c, 2) : f = () => {
                if (!(c && c.isUnmounted)) return y && y(), Qr(e, c, 3, [b])
            } : f = fn, t && n) {
            const C = f;
            f = () => Ji(C())
        }
        let y, b = C => {
            y = G.onStop = () => {
                fi(C, c, 4)
            }
        };
        if (Za) return b = fn, t ? r && Qr(t, c, 3, [f(), p ? [] : void 0, b]) : f(), fn;
        let w = p ? [] : Mv;
        const P = () => {
            if (!!G.active)
                if (t) {
                    const C = G.run();
                    (n || d || (p ? C.some((H, z) => Ya(H, w[z])) : Ya(C, w))) && (y && y(), Qr(t, c, 3, [C, w === Mv ? void 0 : w, b]), w = C)
                } else G.run()
        };
        P.allowRecurse = !!t;
        let M;
        s === "sync" ? M = P : s === "post" ? M = () => Or(P, c && c.suspense) : (P.pre = !0, c && (P.id = c.uid), M = () => Ch(P));
        const G = new Eh(f, M);
        return t ? r ? P() : w = G.run() : s === "post" ? Or(G.run.bind(G), c && c.suspense) : G.run(), () => {
            G.stop(), c && c.scope && vh(c.scope.effects, G)
        }
    }

    function BN(e, t, r) {
        const n = this.proxy,
            s = Ft(e) ? e.includes(".") ? Fb(n, e) : () => n[e] : e.bind(n, n);
        let a;
        Ke(t) ? a = t : (a = t.handler, r = t);
        const l = Yt;
        zs(this);
        const c = Ub(s, a.bind(n), r);
        return l ? zs(l) : ts(), c
    }

    function Fb(e, t) {
        const r = t.split(".");
        return () => {
            let n = e;
            for (let s = 0; s < r.length && n; s++) n = n[r[s]];
            return n
        }
    }

    function Ji(e, t) {
        if (!yt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), tr(e)) Ji(e.value, t);
        else if (ke(e))
            for (let r = 0; r < e.length; r++) Ji(e[r], t);
        else if (lc(e) || Ms(e)) e.forEach(r => {
            Ji(r, t)
        });
        else if (hb(e))
            for (const r in e) Ji(e[r], t);
        return e
    }

    function GN() {
        const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map
        };
        return $h(() => {
            e.isMounted = !0
        }), Kb(() => {
            e.isUnmounting = !0
        }), e
    }
    const Xr = [Function, Array],
        jN = {
            name: "BaseTransition",
            props: {
                mode: String,
                appear: Boolean,
                persisted: Boolean,
                onBeforeEnter: Xr,
                onEnter: Xr,
                onAfterEnter: Xr,
                onEnterCancelled: Xr,
                onBeforeLeave: Xr,
                onLeave: Xr,
                onAfterLeave: Xr,
                onLeaveCancelled: Xr,
                onBeforeAppear: Xr,
                onAppear: Xr,
                onAfterAppear: Xr,
                onAppearCancelled: Xr
            },
            setup(e, {
                slots: t
            }) {
                const r = os(),
                    n = GN();
                let s;
                return () => {
                    const a = t.default && jb(t.default(), !0);
                    if (!a || !a.length) return;
                    let l = a[0];
                    if (a.length > 1) {
                        for (const M of a)
                            if (M.type !== Zr) {
                                l = M;
                                break
                            }
                    }
                    const c = ot(e),
                        {
                            mode: f
                        } = c;
                    if (n.isLeaving) return pf(l);
                    const d = Uv(l);
                    if (!d) return pf(l);
                    const p = pd(d, c, n, r);
                    gd(d, p);
                    const y = r.subTree,
                        b = y && Uv(y);
                    let w = !1;
                    const {
                        getTransitionKey: P
                    } = d.type;
                    if (P) {
                        const M = P();
                        s === void 0 ? s = M : M !== s && (s = M, w = !0)
                    }
                    if (b && b.type !== Zr && (!Hi(d, b) || w)) {
                        const M = pd(b, c, n, r);
                        if (gd(b, M), f === "out-in") return n.isLeaving = !0, M.afterLeave = () => {
                            n.isLeaving = !1, r.update()
                        }, pf(l);
                        f === "in-out" && d.type !== Zr && (M.delayLeave = (G, C, H) => {
                            const z = Gb(n, b);
                            z[String(b.key)] = b, G._leaveCb = () => {
                                C(), G._leaveCb = void 0, delete p.delayedLeave
                            }, p.delayedLeave = H
                        })
                    }
                    return l
                }
            }
        },
        Bb = jN;

    function Gb(e, t) {
        const {
            leavingVNodes: r
        } = e;
        let n = r.get(t.type);
        return n || (n = Object.create(null), r.set(t.type, n)), n
    }

    function pd(e, t, r, n) {
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
        } = t, z = String(e.key), V = Gb(r, e), j = (le, ue) => {
            le && Qr(le, n, 9, ue)
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
                $e && Hi(e, $e) && $e.el._leaveCb && $e.el._leaveCb(), j(ue, [le])
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
                return pd(le, t, r, n)
            }
        };
        return oe
    }

    function pf(e) {
        if (vc(e)) return e = pi(e), e.children = null, e
    }

    function Uv(e) {
        return vc(e) ? e.children ? e.children[0] : void 0 : e
    }

    function gd(e, t) {
        e.shapeFlag & 6 && e.component ? gd(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function jb(e, t = !1, r) {
        let n = [],
            s = 0;
        for (let a = 0; a < e.length; a++) {
            let l = e[a];
            const c = r == null ? l.key : String(r) + String(l.key != null ? l.key : a);
            l.type === qe ? (l.patchFlag & 128 && s++, n = n.concat(jb(l.children, t, c))) : (t || l.type !== Zr) && n.push(c != null ? pi(l, {
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
    const Ua = e => !!e.type.__asyncLoader,
        vc = e => e.type.__isKeepAlive;

    function WN(e, t) {
        Wb(e, "a", t)
    }

    function VN(e, t) {
        Wb(e, "da", t)
    }

    function Wb(e, t, r = Yt) {
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
            for (; s && s.parent;) vc(s.parent.vnode) && KN(n, t, r, s), s = s.parent
        }
    }

    function KN(e, t, r, n) {
        const s = yc(t, e, n, !0);
        Rh(() => {
            vh(n[t], s)
        }, r)
    }

    function yc(e, t, r = Yt, n = !1) {
        if (r) {
            const s = r[e] || (r[e] = []),
                a = t.__weh || (t.__weh = (...l) => {
                    if (r.isUnmounted) return;
                    na(), zs(r);
                    const c = Qr(t, r, e, l);
                    return ts(), ia(), c
                });
            return n ? s.unshift(a) : s.push(a), a
        }
    }
    const Wn = e => (t, r = Yt) => (!Za || e === "sp") && yc(e, t, r),
        Vb = Wn("bm"),
        $h = Wn("m"),
        HN = Wn("bu"),
        qN = Wn("u"),
        Kb = Wn("bum"),
        Rh = Wn("um"),
        YN = Wn("sp"),
        zN = Wn("rtg"),
        XN = Wn("rtc");

    function JN(e, t = Yt) {
        yc("ec", e, t)
    }

    function Oe(e, t) {
        const r = cr;
        if (r === null) return e;
        const n = bc(r) || r.proxy,
            s = e.dirs || (e.dirs = []);
        for (let a = 0; a < t.length; a++) {
            let [l, c, f, d = vt] = t[a];
            Ke(l) && (l = {
                mounted: l,
                updated: l
            }), l.deep && Ji(c), s.push({
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

    function Di(e, t, r, n) {
        const s = e.dirs,
            a = t && t.dirs;
        for (let l = 0; l < s.length; l++) {
            const c = s[l];
            a && (c.oldValue = a[l].value);
            let f = c.dir[n];
            f && (na(), Qr(f, r, 8, [e.el, c, e, t]), ia())
        }
    }
    const Lh = "components",
        QN = "directives";

    function Zt(e, t) {
        return Ph(Lh, e, !0, t) || e
    }
    const Hb = Symbol();

    function Nh(e) {
        return Ft(e) ? Ph(Lh, e, !1) || e : e || Hb
    }

    function Mt(e) {
        return Ph(QN, e)
    }

    function Ph(e, t, r = !0, n = !1) {
        const s = cr || Yt;
        if (s) {
            const a = s.type;
            if (e === Lh) {
                const c = wP(a, !1);
                if (c && (c === t || c === Cn(t) || c === uc(Cn(t)))) return a
            }
            const l = Fv(s[e] || a[e], t) || Fv(s.appContext[e], t);
            return !l && n ? a : l
        }
    }

    function Fv(e, t) {
        return e && (e[t] || e[Cn(t)] || e[uc(Cn(t))])
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
        } else if (yt(e))
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

    function ZN(e, t, r = {}, n, s) {
        if (cr.isCE || cr.parent && Ua(cr.parent) && cr.parent.isCE) return pt("slot", t === "default" ? null : {
            name: t
        }, n && n());
        let a = e[t];
        a && a._c && (a._d = !1), F();
        const l = a && qb(a(r)),
            c = xr(qe, {
                key: r.key || l && l.key || `_${t}`
            }, l || (n ? n() : []), l && e._ === 1 ? 64 : -2);
        return !s && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c
    }

    function qb(e) {
        return e.some(t => Kl(t) ? !(t.type === Zr || t.type === qe && !qb(t.children)) : !0) ? e : null
    }
    const md = e => e ? sT(e) ? bc(e) || e.proxy : md(e.parent) : null,
        Wl = nr(Object.create(null), {
            $: e => e,
            $el: e => e.vnode.el,
            $data: e => e.data,
            $props: e => e.props,
            $attrs: e => e.attrs,
            $slots: e => e.slots,
            $refs: e => e.refs,
            $parent: e => md(e.parent),
            $root: e => md(e.root),
            $emit: e => e.emit,
            $options: e => kh(e),
            $forceUpdate: e => e.f || (e.f = () => Ch(e.update)),
            $nextTick: e => e.n || (e.n = CN.bind(e.proxy)),
            $watch: e => BN.bind(e)
        }),
        eP = {
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
                        vd && (l[t] = 0)
                    }
                }
                const p = Wl[t];
                let y, b;
                if (p) return t === "$attrs" && Mr(e, "get", t), p(e);
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
                return !!r[l] || e !== vt && tt(e, l) || t !== vt && tt(t, l) || (c = a[0]) && tt(c, l) || tt(n, l) || tt(Wl, l) || tt(s.config.globalProperties, l)
            },
            defineProperty(e, t, r) {
                return r.get != null ? e._.accessCache[t] = 0 : tt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
            }
        };
    let vd = !0;

    function tP(e) {
        const t = kh(e),
            r = e.proxy,
            n = e.ctx;
        vd = !1, t.beforeCreate && Bv(t.beforeCreate, e, "bc");
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
        if (d && rP(d, n, null, e.appContext.config.unwrapInjectedRef), l)
            for (const be in l) {
                const ye = l[be];
                Ke(ye) && (n[be] = ye.bind(r))
            }
        if (s) {
            const be = s.call(r, r);
            yt(be) && (e.data = jn(be))
        }
        if (vd = !0, a)
            for (const be in a) {
                const ye = a[be],
                    Se = Ke(ye) ? ye.bind(r, r) : Ke(ye.get) ? ye.get.bind(r, r) : fn,
                    Ue = !Ke(ye) && Ke(ye.set) ? ye.set.bind(r) : fn,
                    je = Dr({
                        get: Se,
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
            for (const be in c) Yb(c[be], n, r, be);
        if (f) {
            const be = Ke(f) ? f.call(r) : f;
            Reflect.ownKeys(be).forEach(ye => {
                FN(ye, be[ye])
            })
        }
        p && Bv(p, e, "c");

        function de(be, ye) {
            ke(ye) ? ye.forEach(Se => be(Se.bind(r))) : ye && be(ye.bind(r))
        }
        if (de(Vb, y), de($h, b), de(HN, w), de(qN, P), de(WN, M), de(VN, G), de(JN, le), de(XN, Q), de(zN, oe), de(Kb, H), de(Rh, V), de(YN, ue), ke($e))
            if ($e.length) {
                const be = e.exposed || (e.exposed = {});
                $e.forEach(ye => {
                    Object.defineProperty(be, ye, {
                        get: () => r[ye],
                        set: Se => r[ye] = Se
                    })
                })
            } else e.exposed || (e.exposed = {});
        j && e.render === fn && (e.render = j), Ie != null && (e.inheritAttrs = Ie), fe && (e.components = fe), Ce && (e.directives = Ce)
    }

    function rP(e, t, r = fn, n = !1) {
        ke(e) && (e = yd(e));
        for (const s in e) {
            const a = e[s];
            let l;
            yt(a) ? "default" in a ? l = Zi(a.from || s, a.default, !0) : l = Zi(a.from || s) : l = Zi(a), tr(l) && n ? Object.defineProperty(t, s, {
                enumerable: !0,
                configurable: !0,
                get: () => l.value,
                set: c => l.value = c
            }) : t[s] = l
        }
    }

    function Bv(e, t, r) {
        Qr(ke(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
    }

    function Yb(e, t, r, n) {
        const s = n.includes(".") ? Fb(r, n) : () => r[n];
        if (Ft(e)) {
            const a = t[e];
            Ke(a) && es(s, a)
        } else if (Ke(e)) es(s, e.bind(r));
        else if (yt(e))
            if (ke(e)) e.forEach(a => Yb(a, t, r, n));
            else {
                const a = Ke(e.handler) ? e.handler.bind(r) : t[e.handler];
                Ke(a) && es(s, a, e)
            }
    }

    function kh(e) {
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
        return c ? f = c : !s.length && !r && !n ? f = t : (f = {}, s.length && s.forEach(d => Vl(f, d, l, !0)), Vl(f, t, l)), yt(t) && a.set(t, f), f
    }

    function Vl(e, t, r, n = !1) {
        const {
            mixins: s,
            extends: a
        } = t;
        a && Vl(e, a, r, !0), s && s.forEach(l => Vl(e, l, r, !0));
        for (const l in t)
            if (!(n && l === "expose")) {
                const c = nP[l] || r && r[l];
                e[l] = c ? c(e[l], t[l]) : t[l]
            } return e
    }
    const nP = {
        data: Gv,
        props: ji,
        emits: ji,
        methods: ji,
        computed: ji,
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
        components: ji,
        directives: ji,
        watch: sP,
        provide: Gv,
        inject: iP
    };

    function Gv(e, t) {
        return t ? e ? function() {
            return nr(Ke(e) ? e.call(this, this) : e, Ke(t) ? t.call(this, this) : t)
        } : t : e
    }

    function iP(e, t) {
        return ji(yd(e), yd(t))
    }

    function yd(e) {
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

    function ji(e, t) {
        return e ? nr(nr(Object.create(null), e), t) : t
    }

    function sP(e, t) {
        if (!e) return t;
        if (!t) return e;
        const r = nr(Object.create(null), e);
        for (const n in t) r[n] = mr(e[n], t[n]);
        return r
    }

    function aP(e, t, r, n = !1) {
        const s = {},
            a = {};
        Fl(a, Ec, 1), e.propsDefaults = Object.create(null), zb(e, t, s, a);
        for (const l in e.propsOptions[0]) l in s || (s[l] = void 0);
        r ? e.props = n ? s : _N(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a
    }

    function oP(e, t, r, n) {
        const {
            props: s,
            attrs: a,
            vnode: {
                patchFlag: l
            }
        } = e, c = ot(s), [f] = e.propsOptions;
        let d = !1;
        if ((n || l > 0) && !(l & 16)) {
            if (l & 8) {
                const p = e.vnode.dynamicProps;
                for (let y = 0; y < p.length; y++) {
                    let b = p[y];
                    if (hc(e.emitsOptions, b)) continue;
                    const w = t[b];
                    if (f)
                        if (tt(a, b)) w !== a[b] && (a[b] = w, d = !0);
                        else {
                            const P = Cn(b);
                            s[P] = _d(f, c, P, w, e, !1)
                        }
                    else w !== a[b] && (a[b] = w, d = !0)
                }
            }
        } else {
            zb(e, t, s, a) && (d = !0);
            let p;
            for (const y in c)(!t || !tt(t, y) && ((p = ls(y)) === y || !tt(t, p))) && (f ? r && (r[y] !== void 0 || r[p] !== void 0) && (s[y] = _d(f, c, y, void 0, e, !0)) : delete s[y]);
            if (a !== c)
                for (const y in a)(!t || !tt(t, y) && !0) && (delete a[y], d = !0)
        }
        d && Gn(e, "set", "$attrs")
    }

    function zb(e, t, r, n) {
        const [s, a] = e.propsOptions;
        let l = !1,
            c;
        if (t)
            for (let f in t) {
                if (Rl(f)) continue;
                const d = t[f];
                let p;
                s && tt(s, p = Cn(f)) ? !a || !a.includes(p) ? r[p] = d : (c || (c = {}))[p] = d : hc(e.emitsOptions, f) || (!(f in n) || d !== n[f]) && (n[f] = d, l = !0)
            }
        if (a) {
            const f = ot(r),
                d = c || vt;
            for (let p = 0; p < a.length; p++) {
                const y = a[p];
                r[y] = _d(s, f, y, d[y], e, !tt(d, y))
            }
        }
        return l
    }

    function _d(e, t, r, n, s, a) {
        const l = e[r];
        if (l != null) {
            const c = tt(l, "default");
            if (c && n === void 0) {
                const f = l.default;
                if (l.type !== Function && Ke(f)) {
                    const {
                        propsDefaults: d
                    } = s;
                    r in d ? n = d[r] : (zs(s), n = d[r] = f.call(null, t), ts())
                } else n = f
            }
            l[0] && (a && !c ? n = !1 : l[1] && (n === "" || n === ls(r)) && (n = !0))
        }
        return n
    }

    function Xb(e, t, r = !1) {
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
                const [b, w] = Xb(y, t, !0);
                nr(l, b), w && c.push(...w)
            };
            !r && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p)
        }
        if (!a && !f) return yt(e) && n.set(e, xs), xs;
        if (ke(a))
            for (let p = 0; p < a.length; p++) {
                const y = Cn(a[p]);
                jv(y) && (l[y] = vt)
            } else if (a)
                for (const p in a) {
                    const y = Cn(p);
                    if (jv(y)) {
                        const b = a[p],
                            w = l[y] = ke(b) || Ke(b) ? {
                                type: b
                            } : b;
                        if (w) {
                            const P = Kv(Boolean, w.type),
                                M = Kv(String, w.type);
                            w[0] = P > -1, w[1] = M < 0 || P < M, (P > -1 || tt(w, "default")) && c.push(y)
                        }
                    }
                }
        const d = [l, c];
        return yt(e) && n.set(e, d), d
    }

    function jv(e) {
        return e[0] !== "$"
    }

    function Wv(e) {
        const t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : e === null ? "null" : ""
    }

    function Vv(e, t) {
        return Wv(e) === Wv(t)
    }

    function Kv(e, t) {
        return ke(t) ? t.findIndex(r => Vv(r, e)) : Ke(t) && Vv(t, e) ? 0 : -1
    }
    const Jb = e => e[0] === "_" || e === "$stable",
        Dh = e => ke(e) ? e.map(On) : [On(e)],
        lP = (e, t, r) => {
            if (t._n) return t;
            const n = Ih((...s) => Dh(t(...s)), r);
            return n._c = !1, n
        },
        Qb = (e, t, r) => {
            const n = e._ctx;
            for (const s in e) {
                if (Jb(s)) continue;
                const a = e[s];
                if (Ke(a)) t[s] = lP(s, a, n);
                else if (a != null) {
                    const l = Dh(a);
                    t[s] = () => l
                }
            }
        },
        Zb = (e, t) => {
            const r = Dh(t);
            e.slots.default = () => r
        },
        cP = (e, t) => {
            if (e.vnode.shapeFlag & 32) {
                const r = t._;
                r ? (e.slots = ot(t), Fl(t, "_", r)) : Qb(t, e.slots = {})
            } else e.slots = {}, t && Zb(e, t);
            Fl(e.slots, Ec, 1)
        },
        uP = (e, t, r) => {
            const {
                vnode: n,
                slots: s
            } = e;
            let a = !0,
                l = vt;
            if (n.shapeFlag & 32) {
                const c = t._;
                c ? r && c === 1 ? a = !1 : (nr(s, t), !r && c === 1 && delete s._) : (a = !t.$stable, Qb(t, s)), l = t
            } else t && (Zb(e, t), l = {
                default: 1
            });
            if (a)
                for (const c in s) !Jb(c) && !(c in l) && delete s[c]
        };

    function eT() {
        return {
            app: null,
            config: {
                isNativeTag: FL,
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
    let fP = 0;

    function dP(e, t) {
        return function(n, s = null) {
            Ke(n) || (n = Object.assign({}, n)), s != null && !yt(s) && (s = null);
            const a = eT(),
                l = new Set;
            let c = !1;
            const f = a.app = {
                _uid: fP++,
                _component: n,
                _props: s,
                _container: null,
                _context: a,
                _instance: null,
                version: IP,
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
                        return b.appContext = a, p && t ? t(b, d) : e(b, d, y), c = !0, f._container = d, d.__vue_app__ = f, bc(b.component) || b.component.proxy
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

    function Ed(e, t, r, n, s = !1) {
        if (ke(e)) {
            e.forEach((b, w) => Ed(b, t && (ke(t) ? t[w] : t), r, n, s));
            return
        }
        if (Ua(n) && !s) return;
        const a = n.shapeFlag & 4 ? bc(n.component) || n.component.proxy : n.el,
            l = s ? null : a,
            {
                i: c,
                r: f
            } = e,
            d = t && t.r,
            p = c.refs === vt ? c.refs = {} : c.refs,
            y = c.setupState;
        if (d != null && d !== f && (Ft(d) ? (p[d] = null, tt(y, d) && (y[d] = null)) : tr(d) && (d.value = null)), Ke(f)) fi(f, c, 12, [l, p]);
        else {
            const b = Ft(f),
                w = tr(f);
            if (b || w) {
                const P = () => {
                    if (e.f) {
                        const M = b ? p[f] : f.value;
                        s ? ke(M) && vh(M, a) : ke(M) ? M.includes(a) || M.push(a) : b ? (p[f] = [a], tt(y, f) && (y[f] = p[f])) : (f.value = [a], e.k && (p[e.k] = f.value))
                    } else b ? (p[f] = l, tt(y, f) && (y[f] = l)) : w && (f.value = l, e.k && (p[e.k] = l))
                };
                l ? (P.id = -1, Or(P, r)) : P()
            }
        }
    }
    const Or = UN;

    function hP(e) {
        return pP(e)
    }

    function pP(e, t) {
        const r = KL();
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
            setScopeId: w = fn,
            cloneNode: P,
            insertStaticContent: M
        } = e, G = (m, g, O, x = null, B = null, Y = null, ce = !1, se = null, re = !!g.dynamicChildren) => {
            if (m === g) return;
            m && !Hi(m, g) && (x = St(m), $t(m, B, Y, !0), m = null), g.patchFlag === -2 && (re = !1, g.dynamicChildren = null);
            const {
                type: $,
                ref: K,
                shapeFlag: he
            } = g;
            switch ($) {
                case _c:
                    C(m, g, O, x);
                    break;
                case Zr:
                    H(m, g, O, x);
                    break;
                case gf:
                    m == null && z(g, O, x, ce);
                    break;
                case qe:
                    Ce(m, g, O, x, B, Y, ce, se, re);
                    break;
                default:
                    he & 1 ? Q(m, g, O, x, B, Y, ce, se, re) : he & 6 ? U(m, g, O, x, B, Y, ce, se, re) : (he & 64 || he & 128) && $.process(m, g, O, x, B, Y, ce, se, re, Dt)
            }
            K != null && B && Ed(K, m && m.ref, Y, g || m, !g)
        }, C = (m, g, O, x) => {
            if (m == null) n(g.el = c(g.children), O, x);
            else {
                const B = g.el = m.el;
                g.children !== m.children && d(B, g.children)
            }
        }, H = (m, g, O, x) => {
            m == null ? n(g.el = f(g.children || ""), O, x) : g.el = m.el
        }, z = (m, g, O, x) => {
            [m.el, m.anchor] = M(m.children, g, O, x, m.el, m.anchor)
        }, V = ({
            el: m,
            anchor: g
        }, O, x) => {
            let B;
            for (; m && m !== g;) B = b(m), n(m, O, x), m = B;
            n(g, O, x)
        }, j = ({
            el: m,
            anchor: g
        }) => {
            let O;
            for (; m && m !== g;) O = b(m), s(m), m = O;
            s(g)
        }, Q = (m, g, O, x, B, Y, ce, se, re) => {
            ce = ce || g.type === "svg", m == null ? oe(g, O, x, B, Y, ce, se, re) : $e(m, g, B, Y, ce, se, re)
        }, oe = (m, g, O, x, B, Y, ce, se) => {
            let re, $;
            const {
                type: K,
                props: he,
                shapeFlag: pe,
                transition: Re,
                patchFlag: De,
                dirs: S
            } = m;
            if (m.el && P !== void 0 && De === -1) re = m.el = P(m.el);
            else {
                if (re = m.el = l(m.type, Y, he && he.is, he), pe & 8 ? p(re, m.children) : pe & 16 && ue(m.children, re, null, x, B, Y && K !== "foreignObject", ce, se), S && Di(m, null, x, "created"), he) {
                    for (const L in he) L !== "value" && !Rl(L) && a(re, L, null, he[L], Y, m.children, x, B, lt);
                    "value" in he && a(re, "value", null, he.value), ($ = he.onVnodeBeforeMount) && _n($, x, m)
                }
                le(re, m, m.scopeId, ce, x)
            }
            S && Di(m, null, x, "beforeMount");
            const T = (!B || B && !B.pendingBranch) && Re && !Re.persisted;
            T && Re.beforeEnter(re), n(re, g, O), (($ = he && he.onVnodeMounted) || T || S) && Or(() => {
                $ && _n($, x, m), T && Re.enter(re), S && Di(m, null, x, "mounted")
            }, B)
        }, le = (m, g, O, x, B) => {
            if (O && w(m, O), x)
                for (let Y = 0; Y < x.length; Y++) w(m, x[Y]);
            if (B) {
                let Y = B.subTree;
                if (g === Y) {
                    const ce = B.vnode;
                    le(m, ce, ce.scopeId, ce.slotScopeIds, B.parent)
                }
            }
        }, ue = (m, g, O, x, B, Y, ce, se, re = 0) => {
            for (let $ = re; $ < m.length; $++) {
                const K = m[$] = se ? si(m[$]) : On(m[$]);
                G(null, K, g, O, x, B, Y, ce, se)
            }
        }, $e = (m, g, O, x, B, Y, ce) => {
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
            O && xi(O, !1), (Re = pe.onVnodeBeforeUpdate) && _n(Re, O, g, m), K && Di(g, m, O, "beforeUpdate"), O && xi(O, !0);
            const De = B && g.type !== "foreignObject";
            if ($ ? Ie(m.dynamicChildren, $, se, O, x, De, Y) : ce || Se(m, g, se, null, O, x, De, Y, !1), re > 0) {
                if (re & 16) fe(se, g, he, pe, O, x, B);
                else if (re & 2 && he.class !== pe.class && a(se, "class", null, pe.class, B), re & 4 && a(se, "style", he.style, pe.style, B), re & 8) {
                    const S = g.dynamicProps;
                    for (let T = 0; T < S.length; T++) {
                        const L = S[T],
                            A = he[L],
                            N = pe[L];
                        (N !== A || L === "value") && a(se, L, A, N, B, m.children, O, x, lt)
                    }
                }
                re & 1 && m.children !== g.children && p(se, g.children)
            } else !ce && $ == null && fe(se, g, he, pe, O, x, B);
            ((Re = pe.onVnodeUpdated) || K) && Or(() => {
                Re && _n(Re, O, g, m), K && Di(g, m, O, "updated")
            }, x)
        }, Ie = (m, g, O, x, B, Y, ce) => {
            for (let se = 0; se < g.length; se++) {
                const re = m[se],
                    $ = g[se],
                    K = re.el && (re.type === qe || !Hi(re, $) || re.shapeFlag & 70) ? y(re.el) : O;
                G(re, $, K, null, x, B, Y, ce, !0)
            }
        }, fe = (m, g, O, x, B, Y, ce) => {
            if (O !== x) {
                for (const se in x) {
                    if (Rl(se)) continue;
                    const re = x[se],
                        $ = O[se];
                    re !== $ && se !== "value" && a(m, se, $, re, ce, g.children, B, Y, lt)
                }
                if (O !== vt)
                    for (const se in O) !Rl(se) && !(se in x) && a(m, se, O[se], null, ce, g.children, B, Y, lt);
                "value" in x && a(m, "value", O.value, x.value)
            }
        }, Ce = (m, g, O, x, B, Y, ce, se, re) => {
            const $ = g.el = m ? m.el : c(""),
                K = g.anchor = m ? m.anchor : c("");
            let {
                patchFlag: he,
                dynamicChildren: pe,
                slotScopeIds: Re
            } = g;
            Re && (se = se ? se.concat(Re) : Re), m == null ? (n($, O, x), n(K, O, x), ue(g.children, O, K, B, Y, ce, se, re)) : he > 0 && he & 64 && pe && m.dynamicChildren ? (Ie(m.dynamicChildren, pe, O, B, Y, ce, se), (g.key != null || B && g === B.subTree) && tT(m, g, !0)) : Se(m, g, O, K, B, Y, ce, se, re)
        }, U = (m, g, O, x, B, Y, ce, se, re) => {
            g.slotScopeIds = se, m == null ? g.shapeFlag & 512 ? B.ctx.activate(g, O, x, ce, re) : ie(g, O, x, B, Y, ce, re) : de(m, g, re)
        }, ie = (m, g, O, x, B, Y, ce) => {
            const se = m.component = bP(m, x, B);
            if (vc(m) && (se.ctx.renderer = Dt), TP(se), se.asyncDep) {
                if (B && B.registerDep(se, be), !m.el) {
                    const re = se.subTree = pt(Zr);
                    H(null, re, g, O)
                }
                return
            }
            be(se, m, g, O, B, Y, ce)
        }, de = (m, g, O) => {
            const x = g.component = m.component;
            if (DN(m, g, O))
                if (x.asyncDep && !x.asyncResolved) {
                    ye(x, g, O);
                    return
                } else x.next = g, $N(x.update), x.update();
            else g.el = m.el, x.vnode = g
        }, be = (m, g, O, x, B, Y, ce) => {
            const se = () => {
                    if (m.isMounted) {
                        let {
                            next: K,
                            bu: he,
                            u: pe,
                            parent: Re,
                            vnode: De
                        } = m, S = K, T;
                        xi(m, !1), K ? (K.el = De.el, ye(m, K, ce)) : K = De, he && Ll(he), (T = K.props && K.props.onVnodeBeforeUpdate) && _n(T, Re, K, De), xi(m, !0);
                        const L = hf(m),
                            A = m.subTree;
                        m.subTree = L, G(A, L, y(A.el), St(A), m, B, Y), K.el = L.el, S === null && xN(m, L.el), pe && Or(pe, B), (T = K.props && K.props.onVnodeUpdated) && Or(() => _n(T, Re, K, De), B)
                    } else {
                        let K;
                        const {
                            el: he,
                            props: pe
                        } = g, {
                            bm: Re,
                            m: De,
                            parent: S
                        } = m, T = Ua(g);
                        if (xi(m, !1), Re && Ll(Re), !T && (K = pe && pe.onVnodeBeforeMount) && _n(K, S, g), xi(m, !0), he && xt) {
                            const L = () => {
                                m.subTree = hf(m), xt(he, m.subTree, m, B, null)
                            };
                            T ? g.type.__asyncLoader().then(() => !m.isUnmounted && L()) : L()
                        } else {
                            const L = m.subTree = hf(m);
                            G(null, L, O, x, m, B, Y), g.el = L.el
                        }
                        if (De && Or(De, B), !T && (K = pe && pe.onVnodeMounted)) {
                            const L = g;
                            Or(() => _n(K, S, L), B)
                        }(g.shapeFlag & 256 || S && Ua(S.vnode) && S.vnode.shapeFlag & 256) && m.a && Or(m.a, B), m.isMounted = !0, g = O = x = null
                    }
                },
                re = m.effect = new Eh(se, () => Ch($), m.scope),
                $ = m.update = () => re.run();
            $.id = m.uid, xi(m, !0), $()
        }, ye = (m, g, O) => {
            g.component = m;
            const x = m.vnode.props;
            m.vnode = g, m.next = null, oP(m, g.props, x, O), uP(m, g.children, O), na(), Dv(), ia()
        }, Se = (m, g, O, x, B, Y, ce, se, re = !1) => {
            const $ = m && m.children,
                K = m ? m.shapeFlag : 0,
                he = g.children,
                {
                    patchFlag: pe,
                    shapeFlag: Re
                } = g;
            if (pe > 0) {
                if (pe & 128) {
                    je($, he, O, x, B, Y, ce, se, re);
                    return
                } else if (pe & 256) {
                    Ue($, he, O, x, B, Y, ce, se, re);
                    return
                }
            }
            Re & 8 ? (K & 16 && lt($, B, Y), he !== $ && p(O, he)) : K & 16 ? Re & 16 ? je($, he, O, x, B, Y, ce, se, re) : lt($, B, Y, !0) : (K & 8 && p(O, ""), Re & 16 && ue(he, O, x, B, Y, ce, se, re))
        }, Ue = (m, g, O, x, B, Y, ce, se, re) => {
            m = m || xs, g = g || xs;
            const $ = m.length,
                K = g.length,
                he = Math.min($, K);
            let pe;
            for (pe = 0; pe < he; pe++) {
                const Re = g[pe] = re ? si(g[pe]) : On(g[pe]);
                G(m[pe], Re, O, null, B, Y, ce, se, re)
            }
            $ > K ? lt(m, B, Y, !0, !1, he) : ue(g, O, x, B, Y, ce, se, re, he)
        }, je = (m, g, O, x, B, Y, ce, se, re) => {
            let $ = 0;
            const K = g.length;
            let he = m.length - 1,
                pe = K - 1;
            for (; $ <= he && $ <= pe;) {
                const Re = m[$],
                    De = g[$] = re ? si(g[$]) : On(g[$]);
                if (Hi(Re, De)) G(Re, De, O, null, B, Y, ce, se, re);
                else break;
                $++
            }
            for (; $ <= he && $ <= pe;) {
                const Re = m[he],
                    De = g[pe] = re ? si(g[pe]) : On(g[pe]);
                if (Hi(Re, De)) G(Re, De, O, null, B, Y, ce, se, re);
                else break;
                he--, pe--
            }
            if ($ > he) {
                if ($ <= pe) {
                    const Re = pe + 1,
                        De = Re < K ? g[Re].el : x;
                    for (; $ <= pe;) G(null, g[$] = re ? si(g[$]) : On(g[$]), O, De, B, Y, ce, se, re), $++
                }
            } else if ($ > pe)
                for (; $ <= he;) $t(m[$], B, Y, !0), $++;
            else {
                const Re = $,
                    De = $,
                    S = new Map;
                for ($ = De; $ <= pe; $++) {
                    const Ae = g[$] = re ? si(g[$]) : On(g[$]);
                    Ae.key != null && S.set(Ae.key, $)
                }
                let T, L = 0;
                const A = pe - De + 1;
                let N = !1,
                    Z = 0;
                const ne = new Array(A);
                for ($ = 0; $ < A; $++) ne[$] = 0;
                for ($ = Re; $ <= he; $++) {
                    const Ae = m[$];
                    if (L >= A) {
                        $t(Ae, B, Y, !0);
                        continue
                    }
                    let dt;
                    if (Ae.key != null) dt = S.get(Ae.key);
                    else
                        for (T = De; T <= pe; T++)
                            if (ne[T - De] === 0 && Hi(Ae, g[T])) {
                                dt = T;
                                break
                            } dt === void 0 ? $t(Ae, B, Y, !0) : (ne[dt - De] = $ + 1, dt >= Z ? Z = dt : N = !0, G(Ae, g[dt], O, null, B, Y, ce, se, re), L++)
                }
                const Ee = N ? gP(ne) : xs;
                for (T = Ee.length - 1, $ = A - 1; $ >= 0; $--) {
                    const Ae = De + $,
                        dt = g[Ae],
                        sr = Ae + 1 < K ? g[Ae + 1].el : x;
                    ne[$] === 0 ? G(null, dt, O, sr, B, Y, ce, se, re) : N && (T < 0 || $ !== Ee[T] ? nt(dt, O, sr, 2) : T--)
                }
            }
        }, nt = (m, g, O, x, B = null) => {
            const {
                el: Y,
                type: ce,
                transition: se,
                children: re,
                shapeFlag: $
            } = m;
            if ($ & 6) {
                nt(m.component.subTree, g, O, x);
                return
            }
            if ($ & 128) {
                m.suspense.move(g, O, x);
                return
            }
            if ($ & 64) {
                ce.move(m, g, O, Dt);
                return
            }
            if (ce === qe) {
                n(Y, g, O);
                for (let he = 0; he < re.length; he++) nt(re[he], g, O, x);
                n(m.anchor, g, O);
                return
            }
            if (ce === gf) {
                V(m, g, O);
                return
            }
            if (x !== 2 && $ & 1 && se)
                if (x === 0) se.beforeEnter(Y), n(Y, g, O), Or(() => se.enter(Y), B);
                else {
                    const {
                        leave: he,
                        delayLeave: pe,
                        afterLeave: Re
                    } = se, De = () => n(Y, g, O), S = () => {
                        he(Y, () => {
                            De(), Re && Re()
                        })
                    };
                    pe ? pe(Y, De, S) : S()
                }
            else n(Y, g, O)
        }, $t = (m, g, O, x = !1, B = !1) => {
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
            if (se != null && Ed(se, null, O, m, !0), K & 256) {
                g.ctx.deactivate(m);
                return
            }
            const Re = K & 1 && pe,
                De = !Ua(m);
            let S;
            if (De && (S = ce && ce.onVnodeBeforeUnmount) && _n(S, g, m), K & 6) yr(m.component, O, x);
            else {
                if (K & 128) {
                    m.suspense.unmount(O, x);
                    return
                }
                Re && Di(m, null, g, "beforeUnmount"), K & 64 ? m.type.remove(m, g, O, B, Dt, x) : $ && (Y !== qe || he > 0 && he & 64) ? lt($, g, O, !1, !0) : (Y === qe && he & 384 || !B && K & 16) && lt(re, g, O), x && Cr(m)
            }(De && (S = ce && ce.onVnodeUnmounted) || Re) && Or(() => {
                S && _n(S, g, m), Re && Di(m, null, g, "unmounted")
            }, O)
        }, Cr = m => {
            const {
                type: g,
                el: O,
                anchor: x,
                transition: B
            } = m;
            if (g === qe) {
                ir(O, x);
                return
            }
            if (g === gf) {
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
        }, ir = (m, g) => {
            let O;
            for (; m !== g;) O = b(m), s(m), m = O;
            s(g)
        }, yr = (m, g, O) => {
            const {
                bum: x,
                scope: B,
                update: Y,
                subTree: ce,
                um: se
            } = m;
            x && Ll(x), B.stop(), Y && (Y.active = !1, $t(ce, m, g, O)), se && Or(se, g), Or(() => {
                m.isUnmounted = !0
            }, g), g && g.pendingBranch && !g.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === g.pendingId && (g.deps--, g.deps === 0 && g.resolve())
        }, lt = (m, g, O, x = !1, B = !1, Y = 0) => {
            for (let ce = Y; ce < m.length; ce++) $t(m[ce], g, O, x, B)
        }, St = m => m.shapeFlag & 6 ? St(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : b(m.anchor || m.el), ct = (m, g, O) => {
            m == null ? g._vnode && $t(g._vnode, null, null, !0) : G(g._vnode || null, m, g, null, null, null, O), Dv(), Db(), g._vnode = m
        }, Dt = {
            p: G,
            um: $t,
            m: nt,
            r: Cr,
            mt: ie,
            mc: ue,
            pc: Se,
            pbc: Ie,
            n: St,
            o: e
        };
        let Kt, xt;
        return t && ([Kt, xt] = t(Dt)), {
            render: ct,
            hydrate: Kt,
            createApp: dP(ct, Kt)
        }
    }

    function xi({
        effect: e,
        update: t
    }, r) {
        e.allowRecurse = t.allowRecurse = r
    }

    function tT(e, t, r = !1) {
        const n = e.children,
            s = t.children;
        if (ke(n) && ke(s))
            for (let a = 0; a < n.length; a++) {
                const l = n[a];
                let c = s[a];
                c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[a] = si(s[a]), c.el = l.el), r || tT(l, c))
            }
    }

    function gP(e) {
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
    const mP = e => e.__isTeleport,
        qe = Symbol(void 0),
        _c = Symbol(void 0),
        Zr = Symbol(void 0),
        gf = Symbol(void 0),
        Fa = [];
    let un = null;

    function F(e = !1) {
        Fa.push(un = e ? null : [])
    }

    function vP() {
        Fa.pop(), un = Fa[Fa.length - 1] || null
    }
    let Qa = 1;

    function Hv(e) {
        Qa += e
    }

    function rT(e) {
        return e.dynamicChildren = Qa > 0 ? un || xs : null, vP(), Qa > 0 && un && un.push(e), e
    }

    function W(e, t, r, n, s, a) {
        return rT(X(e, t, r, n, s, a, !0))
    }

    function xr(e, t, r, n, s) {
        return rT(pt(e, t, r, n, s, !0))
    }

    function Kl(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Hi(e, t) {
        return e.type === t.type && e.key === t.key
    }
    const Ec = "__vInternal",
        nT = ({
            key: e
        }) => e != null ? e : null,
        Nl = ({
            ref: e,
            ref_key: t,
            ref_for: r
        }) => e != null ? Ft(e) || tr(e) || Ke(e) ? {
            i: cr,
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
            key: t && nT(t),
            ref: t && Nl(t),
            scopeId: pc,
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
        return c ? (xh(f, r), a & 128 && e.normalize(f)) : r && (f.shapeFlag |= Ft(r) ? 8 : 16), Qa > 0 && !l && un && (f.patchFlag > 0 || a & 6) && f.patchFlag !== 32 && un.push(f), f
    }
    const pt = yP;

    function yP(e, t = null, r = null, n = 0, s = null, a = !1) {
        if ((!e || e === Hb) && (e = Zr), Kl(e)) {
            const c = pi(e, t, !0);
            return r && xh(c, r), Qa > 0 && !a && un && (c.shapeFlag & 6 ? un[un.indexOf(e)] = c : un.push(c)), c.patchFlag |= -2, c
        }
        if (CP(e) && (e = e.__vccOpts), t) {
            t = iT(t);
            let {
                class: c,
                style: f
            } = t;
            c && !Ft(c) && (t.class = Ve(c)), yt(f) && (wb(f) && !ke(f) && (f = nr({}, f)), t.style = oo(f))
        }
        const l = Ft(e) ? 1 : MN(e) ? 128 : mP(e) ? 64 : yt(e) ? 4 : Ke(e) ? 2 : 0;
        return X(e, t, r, n, s, l, a, !0)
    }

    function iT(e) {
        return e ? wb(e) || Ec in e ? nr({}, e) : e : null
    }

    function pi(e, t, r = !1) {
        const {
            props: n,
            ref: s,
            patchFlag: a,
            children: l
        } = e, c = t ? Mh(n || {}, t) : n;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: c,
            key: c && nT(c),
            ref: t && t.ref ? r && s ? ke(s) ? s.concat(Nl(t)) : [s, Nl(t)] : Nl(t) : s,
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

    function Ur(e = " ", t = 0) {
        return pt(_c, null, e, t)
    }

    function ve(e = "", t = !1) {
        return t ? (F(), xr(Zr, null, e)) : pt(Zr, null, e)
    }

    function On(e) {
        return e == null || typeof e == "boolean" ? pt(Zr) : ke(e) ? pt(qe, null, e.slice()) : typeof e == "object" ? si(e) : pt(_c, null, String(e))
    }

    function si(e) {
        return e.el === null || e.memo ? e : pi(e)
    }

    function xh(e, t) {
        let r = 0;
        const {
            shapeFlag: n
        } = e;
        if (t == null) t = null;
        else if (ke(t)) r = 16;
        else if (typeof t == "object")
            if (n & 65) {
                const s = t.default;
                s && (s._c && (s._d = !1), xh(e, s()), s._c && (s._d = !0));
                return
            } else {
                r = 32;
                const s = t._;
                !s && !(Ec in t) ? t._ctx = cr : s === 3 && cr && (cr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
            }
        else Ke(t) ? (t = {
            default: t,
            _ctx: cr
        }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Ur(t)]) : r = 8);
        e.children = t, e.shapeFlag |= r
    }

    function Mh(...e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r];
            for (const s in n)
                if (s === "class") t.class !== n.class && (t.class = Ve([t.class, n.class]));
                else if (s === "style") t.style = oo([t.style, n.style]);
            else if (oc(s)) {
                const a = t[s],
                    l = n[s];
                l && a !== l && !(ke(a) && a.includes(l)) && (t[s] = a ? [].concat(a, l) : l)
            } else s !== "" && (t[s] = n[s])
        }
        return t
    }

    function _n(e, t, r, n = null) {
        Qr(e, t, 7, [r, n])
    }
    const _P = eT();
    let EP = 0;

    function bP(e, t, r) {
        const n = e.type,
            s = (t ? t.appContext : e.appContext) || _P,
            a = {
                uid: EP++,
                vnode: e,
                type: n,
                parent: t,
                appContext: s,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new pb(!0),
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
                propsOptions: Xb(n, s),
                emitsOptions: Mb(n, s),
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
        }, a.root = t ? t.root : a, a.emit = NN.bind(null, a), e.ce && e.ce(a), a
    }
    let Yt = null;
    const os = () => Yt || cr,
        zs = e => {
            Yt = e, e.scope.on()
        },
        ts = () => {
            Yt && Yt.scope.off(), Yt = null
        };

    function sT(e) {
        return e.vnode.shapeFlag & 4
    }
    let Za = !1;

    function TP(e, t = !1) {
        Za = t;
        const {
            props: r,
            children: n
        } = e.vnode, s = sT(e);
        aP(e, r, s, t), cP(e, n);
        const a = s ? AP(e, t) : void 0;
        return Za = !1, a
    }

    function AP(e, t) {
        const r = e.type;
        e.accessCache = Object.create(null), e.proxy = Cb(new Proxy(e.ctx, eP));
        const {
            setup: n
        } = r;
        if (n) {
            const s = e.setupContext = n.length > 1 ? SP(e) : null;
            zs(e), na();
            const a = fi(n, e, 0, [e.props, s]);
            if (ia(), ts(), fb(a)) {
                if (a.then(ts, ts), t) return a.then(l => {
                    qv(e, l, t)
                }).catch(l => {
                    dc(l, e, 0)
                });
                e.asyncDep = a
            } else qv(e, a, t)
        } else aT(e, t)
    }

    function qv(e, t, r) {
        Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : yt(t) && (e.setupState = Lb(t)), aT(e, r)
    }
    let Yv;

    function aT(e, t, r) {
        const n = e.type;
        if (!e.render) {
            if (!t && Yv && !n.render) {
                const s = n.template || kh(e).template;
                if (s) {
                    const {
                        isCustomElement: a,
                        compilerOptions: l
                    } = e.appContext.config, {
                        delimiters: c,
                        compilerOptions: f
                    } = n, d = nr(nr({
                        isCustomElement: a,
                        delimiters: c
                    }, l), f);
                    n.render = Yv(s, d)
                }
            }
            e.render = n.render || fn
        }
        zs(e), na(), tP(e), ia(), ts()
    }

    function OP(e) {
        return new Proxy(e.attrs, {
            get(t, r) {
                return Mr(e, "get", "$attrs"), t[r]
            }
        })
    }

    function SP(e) {
        const t = n => {
            e.exposed = n || {}
        };
        let r;
        return {
            get attrs() {
                return r || (r = OP(e))
            },
            slots: e.slots,
            emit: e.emit,
            expose: t
        }
    }

    function bc(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Lb(Cb(e.exposed)), {
            get(t, r) {
                if (r in t) return t[r];
                if (r in Wl) return Wl[r](e)
            }
        }))
    }

    function wP(e, t = !0) {
        return Ke(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function CP(e) {
        return Ke(e) && "__vccOpts" in e
    }
    const Dr = (e, t) => SN(e, t, Za);

    function Uh(e, t, r) {
        const n = arguments.length;
        return n === 2 ? yt(t) && !ke(t) ? Kl(t) ? pt(e, null, [t]) : pt(e, t) : pt(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Kl(r) && (r = [r]), pt(e, t, r))
    }
    const IP = "3.2.39",
        $P = "http://www.w3.org/2000/svg",
        qi = typeof document < "u" ? document : null,
        zv = qi && qi.createElement("template"),
        RP = {
            insert: (e, t, r) => {
                t.insertBefore(e, r || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, r, n) => {
                const s = t ? qi.createElementNS($P, e) : qi.createElement(e, r ? {
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
            insertStaticContent(e, t, r, n, s, a) {
                const l = r ? r.previousSibling : t.lastChild;
                if (s && (s === a || s.nextSibling))
                    for (; t.insertBefore(s.cloneNode(!0), r), !(s === a || !(s = s.nextSibling)););
                else {
                    zv.innerHTML = n ? `<svg>${e}</svg>` : e;
                    const c = zv.content;
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

    function LP(e, t, r) {
        const n = e._vtc;
        n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
    }

    function NP(e, t, r) {
        const n = e.style,
            s = Ft(r);
        if (r && !s) {
            for (const a in r) bd(n, a, r[a]);
            if (t && !Ft(t))
                for (const a in t) r[a] == null && bd(n, a, "")
        } else {
            const a = n.display;
            s ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = a)
        }
    }
    const Xv = /\s*!important$/;

    function bd(e, t, r) {
        if (ke(r)) r.forEach(n => bd(e, t, n));
        else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
        else {
            const n = PP(e, t);
            Xv.test(r) ? e.setProperty(ls(n), r.replace(Xv, ""), "important") : e[n] = r
        }
    }
    const Jv = ["Webkit", "Moz", "ms"],
        mf = {};

    function PP(e, t) {
        const r = mf[t];
        if (r) return r;
        let n = Cn(t);
        if (n !== "filter" && n in e) return mf[t] = n;
        n = uc(n);
        for (let s = 0; s < Jv.length; s++) {
            const a = Jv[s] + n;
            if (a in e) return mf[t] = a
        }
        return t
    }
    const Qv = "http://www.w3.org/1999/xlink";

    function kP(e, t, r, n, s) {
        if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(Qv, t.slice(6, t.length)) : e.setAttributeNS(Qv, t, r);
        else {
            const a = PL(t);
            r == null || a && !lb(r) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : r)
        }
    }

    function DP(e, t, r, n, s, a, l) {
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
            f === "boolean" ? r = lb(r) : r == null && f === "string" ? (r = "", c = !0) : f === "number" && (r = 0, c = !0)
        }
        try {
            e[t] = r
        } catch {}
        c && e.removeAttribute(t)
    }
    const [oT, xP] = (() => {
        let e = Date.now,
            t = !1;
        if (typeof window < "u") {
            Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
            const r = navigator.userAgent.match(/firefox\/(\d+)/i);
            t = !!(r && Number(r[1]) <= 53)
        }
        return [e, t]
    })();
    let Td = 0;
    const MP = Promise.resolve(),
        UP = () => {
            Td = 0
        },
        FP = () => Td || (MP.then(UP), Td = oT());

    function Yi(e, t, r, n) {
        e.addEventListener(t, r, n)
    }

    function BP(e, t, r, n) {
        e.removeEventListener(t, r, n)
    }

    function GP(e, t, r, n, s = null) {
        const a = e._vei || (e._vei = {}),
            l = a[t];
        if (n && l) l.value = n;
        else {
            const [c, f] = jP(t);
            if (n) {
                const d = a[t] = WP(n, s);
                Yi(e, c, d, f)
            } else l && (BP(e, c, l, f), a[t] = void 0)
        }
    }
    const Zv = /(?:Once|Passive|Capture)$/;

    function jP(e) {
        let t;
        if (Zv.test(e)) {
            t = {};
            let n;
            for (; n = e.match(Zv);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : ls(e.slice(2)), t]
    }

    function WP(e, t) {
        const r = n => {
            const s = n.timeStamp || oT();
            (xP || s >= r.attached - 1) && Qr(VP(n, r.value), t, 5, [n])
        };
        return r.value = e, r.attached = FP(), r
    }

    function VP(e, t) {
        if (ke(t)) {
            const r = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                r.call(e), e._stopped = !0
            }, t.map(n => s => !s._stopped && n && n(s))
        } else return t
    }
    const ey = /^on[a-z]/,
        KP = (e, t, r, n, s = !1, a, l, c, f) => {
            t === "class" ? LP(e, n, s) : t === "style" ? NP(e, r, n) : oc(t) ? mh(t) || GP(e, t, r, n, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : HP(e, t, n, s)) ? DP(e, t, n, a, l, c, f) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), kP(e, t, n, s))
        };

    function HP(e, t, r, n) {
        return n ? !!(t === "innerHTML" || t === "textContent" || t in e && ey.test(t) && Ke(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ey.test(t) && Ft(r) ? !1 : t in e
    }
    const ti = "transition",
        Ra = "animation",
        Tc = (e, {
            slots: t
        }) => Uh(Bb, qP(e), t);
    Tc.displayName = "Transition";
    const lT = {
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
    Tc.props = nr({}, Bb.props, lT);
    const Mi = (e, t = []) => {
            ke(e) ? e.forEach(r => r(...t)) : e && e(...t)
        },
        ty = e => e ? ke(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function qP(e) {
        const t = {};
        for (const fe in e) fe in lT || (t[fe] = e[fe]);
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
        } = e, P = YP(s), M = P && P[0], G = P && P[1], {
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
            Mi(ie, [Ce, de]), ry(() => {
                Ui(Ce, fe ? f : a), ri(Ce, fe ? p : c), ty(ie) || ny(Ce, n, M, de)
            })
        };
        return nr(t, {
            onBeforeEnter(fe) {
                Mi(C, [fe]), ri(fe, a), ri(fe, l)
            },
            onBeforeAppear(fe) {
                Mi(Q, [fe]), ri(fe, f), ri(fe, d)
            },
            onEnter: Ie(!1),
            onAppear: Ie(!0),
            onLeave(fe, Ce) {
                fe._isLeaving = !0;
                const U = () => $e(fe, Ce);
                ri(fe, y), JP(), ri(fe, b), ry(() => {
                    !fe._isLeaving || (Ui(fe, y), ri(fe, w), ty(V) || ny(fe, n, G, U))
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

    function YP(e) {
        if (e == null) return null;
        if (yt(e)) return [vf(e.enter), vf(e.leave)]; {
            const t = vf(e);
            return [t, t]
        }
    }

    function vf(e) {
        return Bl(e)
    }

    function ri(e, t) {
        t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Ui(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.remove(n));
        const {
            _vtc: r
        } = e;
        r && (r.delete(t), r.size || (e._vtc = void 0))
    }

    function ry(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }
    let zP = 0;

    function ny(e, t, r, n) {
        const s = e._endId = ++zP,
            a = () => {
                s === e._endId && n()
            };
        if (r) return setTimeout(a, r);
        const {
            type: l,
            timeout: c,
            propCount: f
        } = XP(e, t);
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

    function XP(e, t) {
        const r = window.getComputedStyle(e),
            n = P => (r[P] || "").split(", "),
            s = n(ti + "Delay"),
            a = n(ti + "Duration"),
            l = iy(s, a),
            c = n(Ra + "Delay"),
            f = n(Ra + "Duration"),
            d = iy(c, f);
        let p = null,
            y = 0,
            b = 0;
        t === ti ? l > 0 && (p = ti, y = l, b = a.length) : t === Ra ? d > 0 && (p = Ra, y = d, b = f.length) : (y = Math.max(l, d), p = y > 0 ? l > d ? ti : Ra : null, b = p ? p === ti ? a.length : f.length : 0);
        const w = p === ti && /\b(transform|all)(,|$)/.test(r[ti + "Property"]);
        return {
            type: p,
            timeout: y,
            propCount: b,
            hasTransform: w
        }
    }

    function iy(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((r, n) => sy(r) + sy(e[n])))
    }

    function sy(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function JP() {
        return document.body.offsetHeight
    }
    const Hl = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ke(t) ? r => Ll(t, r) : t
    };

    function QP(e) {
        e.target.composing = !0
    }

    function ay(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }
    const oy = {
            created(e, {
                modifiers: {
                    lazy: t,
                    trim: r,
                    number: n
                }
            }, s) {
                e._assign = Hl(s);
                const a = n || s.props && s.props.type === "number";
                Yi(e, t ? "change" : "input", l => {
                    if (l.target.composing) return;
                    let c = e.value;
                    r && (c = c.trim()), a && (c = Bl(c)), e._assign(c)
                }), r && Yi(e, "change", () => {
                    e.value = e.value.trim()
                }), t || (Yi(e, "compositionstart", QP), Yi(e, "compositionend", ay), Yi(e, "change", ay))
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
                if (e._assign = Hl(a), e.composing || document.activeElement === e && e.type !== "range" && (r || n && e.value.trim() === t || (s || e.type === "number") && Bl(e.value) === t)) return;
                const l = t == null ? "" : t;
                e.value !== l && (e.value = l)
            }
        },
        cT = {
            deep: !0,
            created(e, t, r) {
                e._assign = Hl(r), Yi(e, "change", () => {
                    const n = e._modelValue,
                        s = ZP(e),
                        a = e.checked,
                        l = e._assign;
                    if (ke(n)) {
                        const c = cb(n, s),
                            f = c !== -1;
                        if (a && !f) l(n.concat(s));
                        else if (!a && f) {
                            const d = [...n];
                            d.splice(c, 1), l(d)
                        }
                    } else if (lc(n)) {
                        const c = new Set(n);
                        a ? c.add(s) : c.delete(s), l(c)
                    } else l(uT(e, a))
                })
            },
            mounted: ly,
            beforeUpdate(e, t, r) {
                e._assign = Hl(r), ly(e, t, r)
            }
        };

    function ly(e, {
        value: t,
        oldValue: r
    }, n) {
        e._modelValue = t, ke(t) ? e.checked = cb(t, n.props.value) > -1 : lc(t) ? e.checked = t.has(n.props.value) : t !== r && (e.checked = ac(t, uT(e, !0)))
    }

    function ZP(e) {
        return "_value" in e ? e._value : e.value
    }

    function uT(e, t) {
        const r = t ? "_trueValue" : "_falseValue";
        return r in e ? e[r] : t
    }
    const ek = ["ctrl", "shift", "alt", "meta"],
        tk = {
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
            exact: (e, t) => ek.some(r => e[`${r}Key`] && !t.includes(r))
        },
        ze = (e, t) => (r, ...n) => {
            for (let s = 0; s < t.length; s++) {
                const a = tk[t[s]];
                if (a && a(r, t)) return
            }
            return e(r, ...n)
        },
        rk = {
            esc: "escape",
            space: " ",
            up: "arrow-up",
            left: "arrow-left",
            right: "arrow-right",
            down: "arrow-down",
            delete: "backspace"
        },
        Xs = (e, t) => r => {
            if (!("key" in r)) return;
            const n = ls(r.key);
            if (t.some(s => s === n || rk[s] === n)) return e(r)
        },
        nk = nr({
            patchProp: KP
        }, RP);
    let cy;

    function ik() {
        return cy || (cy = hP(nk))
    }
    const sk = (...e) => {
        const t = ik().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const s = ak(n);
            if (!s) return;
            const a = t._component;
            !Ke(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
            const l = r(s, !1, s instanceof SVGElement);
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), l
        }, t
    };

    function ak(e) {
        return Ft(e) ? document.querySelector(e) : e
    }
    const ok = rt({
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
        st = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [n, s] of t) r[n] = s;
            return r
        },
        lk = {
            class: "choices"
        },
        ck = {
            class: "constrain"
        },
        uk = {
            key: 0
        },
        fk = ["disabled", "onClick"];

    function dk(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", lk, [X("div", ck, [e.player.prompt ? Oe((F(), W("p", uk, null, 512)), [
            [l, e.player.prompt]
        ]) : ve("", !0), (F(!0), W(qe, null, hn(e.player.choices, (c, f) => (F(), W("button", {
            key: f,
            class: Ve({
                selected: c.isSelected
            }),
            disabled: c.isDisabled,
            onClick: ze(d => e.onChoiceClick(f), ["prevent"])
        }, Me(c.text), 11, fk))), 128))])])
    }
    const hk = st(ok, [
        ["render", dk]
    ]);
    class ql {
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
    var Ac = vk,
        yk = Ac;

    function _k(e, t) {
        for (var r = e.length; r--;)
            if (yk(e[r][0], t)) return r;
        return -1
    }
    var Oc = _k,
        Ek = Oc,
        bk = Array.prototype,
        Tk = bk.splice;

    function Ak(e) {
        var t = this.__data__,
            r = Ek(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : Tk.call(t, r, 1), --this.size, !0
    }
    var Ok = Ak,
        Sk = Oc;

    function wk(e) {
        var t = this.__data__,
            r = Sk(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var Ck = wk,
        Ik = Oc;

    function $k(e) {
        return Ik(this.__data__, e) > -1
    }
    var Rk = $k,
        Lk = Oc;

    function Nk(e, t) {
        var r = this.__data__,
            n = Lk(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var Pk = Nk,
        kk = mk,
        Dk = Ok,
        xk = Ck,
        Mk = Rk,
        Uk = Pk;

    function sa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    sa.prototype.clear = kk;
    sa.prototype.delete = Dk;
    sa.prototype.get = xk;
    sa.prototype.has = Mk;
    sa.prototype.set = Uk;
    var Sc = sa,
        Fk = Sc;

    function Bk() {
        this.__data__ = new Fk, this.size = 0
    }
    var Gk = Bk;

    function jk(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var Wk = jk;

    function Vk(e) {
        return this.__data__.get(e)
    }
    var Kk = Vk;

    function Hk(e) {
        return this.__data__.has(e)
    }
    var qk = Hk,
        Yk = typeof kt == "object" && kt && kt.Object === Object && kt,
        fT = Yk,
        zk = fT,
        Xk = typeof self == "object" && self && self.Object === Object && self,
        Jk = zk || Xk || Function("return this")(),
        pn = Jk,
        Qk = pn,
        Zk = Qk.Symbol,
        wc = Zk,
        uy = wc,
        dT = Object.prototype,
        eD = dT.hasOwnProperty,
        tD = dT.toString,
        La = uy ? uy.toStringTag : void 0;

    function rD(e) {
        var t = eD.call(e, La),
            r = e[La];
        try {
            e[La] = void 0;
            var n = !0
        } catch {}
        var s = tD.call(e);
        return n && (t ? e[La] = r : delete e[La]), s
    }
    var nD = rD,
        iD = Object.prototype,
        sD = iD.toString;

    function aD(e) {
        return sD.call(e)
    }
    var oD = aD,
        fy = wc,
        lD = nD,
        cD = oD,
        uD = "[object Null]",
        fD = "[object Undefined]",
        dy = fy ? fy.toStringTag : void 0;

    function dD(e) {
        return e == null ? e === void 0 ? fD : uD : dy && dy in Object(e) ? lD(e) : cD(e)
    }
    var aa = dD;

    function hD(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var gn = hD,
        pD = aa,
        gD = gn,
        mD = "[object AsyncFunction]",
        vD = "[object Function]",
        yD = "[object GeneratorFunction]",
        _D = "[object Proxy]";

    function ED(e) {
        if (!gD(e)) return !1;
        var t = pD(e);
        return t == vD || t == yD || t == mD || t == _D
    }
    var Fh = ED,
        bD = pn,
        TD = bD["__core-js_shared__"],
        AD = TD,
        yf = AD,
        hy = function() {
            var e = /[^.]+$/.exec(yf && yf.keys && yf.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function OD(e) {
        return !!hy && hy in e
    }
    var SD = OD,
        wD = Function.prototype,
        CD = wD.toString;

    function ID(e) {
        if (e != null) {
            try {
                return CD.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var hT = ID,
        $D = Fh,
        RD = SD,
        LD = gn,
        ND = hT,
        PD = /[\\^$.*+?()[\]{}|]/g,
        kD = /^\[object .+?Constructor\]$/,
        DD = Function.prototype,
        xD = Object.prototype,
        MD = DD.toString,
        UD = xD.hasOwnProperty,
        FD = RegExp("^" + MD.call(UD).replace(PD, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function BD(e) {
        if (!LD(e) || RD(e)) return !1;
        var t = $D(e) ? FD : kD;
        return t.test(ND(e))
    }
    var GD = BD;

    function jD(e, t) {
        return e == null ? void 0 : e[t]
    }
    var WD = jD,
        VD = GD,
        KD = WD;

    function HD(e, t) {
        var r = KD(e, t);
        return VD(r) ? r : void 0
    }
    var cs = HD,
        qD = cs,
        YD = pn,
        zD = qD(YD, "Map"),
        Bh = zD,
        XD = cs,
        JD = XD(Object, "create"),
        Cc = JD,
        py = Cc;

    function QD() {
        this.__data__ = py ? py(null) : {}, this.size = 0
    }
    var ZD = QD;

    function ex(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var tx = ex,
        rx = Cc,
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
        lx = Cc,
        cx = Object.prototype,
        ux = cx.hasOwnProperty;

    function fx(e) {
        var t = this.__data__;
        return lx ? t[e] !== void 0 : ux.call(t, e)
    }
    var dx = fx,
        hx = Cc,
        px = "__lodash_hash_undefined__";

    function gx(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = hx && t === void 0 ? px : t, this
    }
    var mx = gx,
        vx = ZD,
        yx = tx,
        _x = ox,
        Ex = dx,
        bx = mx;

    function oa(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    oa.prototype.clear = vx;
    oa.prototype.delete = yx;
    oa.prototype.get = _x;
    oa.prototype.has = Ex;
    oa.prototype.set = bx;
    var Tx = oa,
        gy = Tx,
        Ax = Sc,
        Ox = Bh;

    function Sx() {
        this.size = 0, this.__data__ = {
            hash: new gy,
            map: new(Ox || Ax),
            string: new gy
        }
    }
    var wx = Sx;

    function Cx(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var Ix = Cx,
        $x = Ix;

    function Rx(e, t) {
        var r = e.__data__;
        return $x(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Ic = Rx,
        Lx = Ic;

    function Nx(e) {
        var t = Lx(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var Px = Nx,
        kx = Ic;

    function Dx(e) {
        return kx(this, e).get(e)
    }
    var xx = Dx,
        Mx = Ic;

    function Ux(e) {
        return Mx(this, e).has(e)
    }
    var Fx = Ux,
        Bx = Ic;

    function Gx(e, t) {
        var r = Bx(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var jx = Gx,
        Wx = wx,
        Vx = Px,
        Kx = xx,
        Hx = Fx,
        qx = jx;

    function la(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    la.prototype.clear = Wx;
    la.prototype.delete = Vx;
    la.prototype.get = Kx;
    la.prototype.has = Hx;
    la.prototype.set = qx;
    var pT = la,
        Yx = Sc,
        zx = Bh,
        Xx = pT,
        Jx = 200;

    function Qx(e, t) {
        var r = this.__data__;
        if (r instanceof Yx) {
            var n = r.__data__;
            if (!zx || n.length < Jx - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new Xx(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var Zx = Qx,
        eM = Sc,
        tM = Gk,
        rM = Wk,
        nM = Kk,
        iM = qk,
        sM = Zx;

    function ca(e) {
        var t = this.__data__ = new eM(e);
        this.size = t.size
    }
    ca.prototype.clear = tM;
    ca.prototype.delete = rM;
    ca.prototype.get = nM;
    ca.prototype.has = iM;
    ca.prototype.set = sM;
    var gT = ca,
        aM = cs,
        oM = function() {
            try {
                var e = aM(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        mT = oM,
        my = mT;

    function lM(e, t, r) {
        t == "__proto__" && my ? my(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Gh = lM,
        cM = Gh,
        uM = Ac;

    function fM(e, t, r) {
        (r !== void 0 && !uM(e[t], r) || r === void 0 && !(t in e)) && cM(e, t, r)
    }
    var vT = fM;

    function dM(e) {
        return function(t, r, n) {
            for (var s = -1, a = Object(t), l = n(t), c = l.length; c--;) {
                var f = l[e ? c : ++s];
                if (r(a[f], f, a) === !1) break
            }
            return t
        }
    }
    var hM = dM,
        pM = hM,
        gM = pM(),
        mM = gM,
        Yl = {
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
    })(Yl, Yl.exports);
    var vM = pn,
        yM = vM.Uint8Array,
        _M = yM,
        vy = _M;

    function EM(e) {
        var t = new e.constructor(e.byteLength);
        return new vy(t).set(new vy(e)), t
    }
    var jh = EM,
        bM = jh;

    function TM(e, t) {
        var r = t ? bM(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var yT = TM;

    function AM(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var _T = AM,
        OM = gn,
        yy = Object.create,
        SM = function() {
            function e() {}
            return function(t) {
                if (!OM(t)) return {};
                if (yy) return yy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        wM = SM;

    function CM(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var ET = CM,
        IM = ET,
        $M = IM(Object.getPrototypeOf, Object),
        Wh = $M,
        RM = Object.prototype;

    function LM(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || RM;
        return e === r
    }
    var Vh = LM,
        NM = wM,
        PM = Wh,
        kM = Vh;

    function DM(e) {
        return typeof e.constructor == "function" && !kM(e) ? NM(PM(e)) : {}
    }
    var bT = DM;

    function xM(e) {
        return e != null && typeof e == "object"
    }
    var vi = xM,
        MM = aa,
        UM = vi,
        FM = "[object Arguments]";

    function BM(e) {
        return UM(e) && MM(e) == FM
    }
    var GM = BM,
        _y = GM,
        jM = vi,
        TT = Object.prototype,
        WM = TT.hasOwnProperty,
        VM = TT.propertyIsEnumerable,
        KM = _y(function() {
            return arguments
        }()) ? _y : function(e) {
            return jM(e) && WM.call(e, "callee") && !VM.call(e, "callee")
        },
        AT = KM,
        HM = Array.isArray,
        yi = HM,
        qM = 9007199254740991;

    function YM(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qM
    }
    var OT = YM,
        zM = Fh,
        XM = OT;

    function JM(e) {
        return e != null && XM(e.length) && !zM(e)
    }
    var $c = JM,
        QM = $c,
        ZM = vi;

    function e2(e) {
        return ZM(e) && QM(e)
    }
    var t2 = e2,
        eo = {
            exports: {}
        };

    function r2() {
        return !1
    }
    var n2 = r2;
    (function(e, t) {
        var r = pn,
            n = n2,
            s = t && !t.nodeType && t,
            a = s && !0 && e && !e.nodeType && e,
            l = a && a.exports === s,
            c = l ? r.Buffer : void 0,
            f = c ? c.isBuffer : void 0,
            d = f || n;
        e.exports = d
    })(eo, eo.exports);
    var i2 = aa,
        s2 = Wh,
        a2 = vi,
        o2 = "[object Object]",
        l2 = Function.prototype,
        c2 = Object.prototype,
        ST = l2.toString,
        u2 = c2.hasOwnProperty,
        f2 = ST.call(Object);

    function d2(e) {
        if (!a2(e) || i2(e) != o2) return !1;
        var t = s2(e);
        if (t === null) return !0;
        var r = u2.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && ST.call(r) == f2
    }
    var h2 = d2,
        p2 = aa,
        g2 = OT,
        m2 = vi,
        v2 = "[object Arguments]",
        y2 = "[object Array]",
        _2 = "[object Boolean]",
        E2 = "[object Date]",
        b2 = "[object Error]",
        T2 = "[object Function]",
        A2 = "[object Map]",
        O2 = "[object Number]",
        S2 = "[object Object]",
        w2 = "[object RegExp]",
        C2 = "[object Set]",
        I2 = "[object String]",
        $2 = "[object WeakMap]",
        R2 = "[object ArrayBuffer]",
        L2 = "[object DataView]",
        N2 = "[object Float32Array]",
        P2 = "[object Float64Array]",
        k2 = "[object Int8Array]",
        D2 = "[object Int16Array]",
        x2 = "[object Int32Array]",
        M2 = "[object Uint8Array]",
        U2 = "[object Uint8ClampedArray]",
        F2 = "[object Uint16Array]",
        B2 = "[object Uint32Array]",
        Ot = {};
    Ot[N2] = Ot[P2] = Ot[k2] = Ot[D2] = Ot[x2] = Ot[M2] = Ot[U2] = Ot[F2] = Ot[B2] = !0;
    Ot[v2] = Ot[y2] = Ot[R2] = Ot[_2] = Ot[L2] = Ot[E2] = Ot[b2] = Ot[T2] = Ot[A2] = Ot[O2] = Ot[S2] = Ot[w2] = Ot[C2] = Ot[I2] = Ot[$2] = !1;

    function G2(e) {
        return m2(e) && g2(e.length) && !!Ot[p2(e)]
    }
    var j2 = G2;

    function W2(e) {
        return function(t) {
            return e(t)
        }
    }
    var Kh = W2,
        to = {
            exports: {}
        };
    (function(e, t) {
        var r = fT,
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
    })(to, to.exports);
    var V2 = j2,
        K2 = Kh,
        Ey = to.exports,
        by = Ey && Ey.isTypedArray,
        H2 = by ? K2(by) : V2,
        wT = H2;

    function q2(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var CT = q2,
        Y2 = Gh,
        z2 = Ac,
        X2 = Object.prototype,
        J2 = X2.hasOwnProperty;

    function Q2(e, t, r) {
        var n = e[t];
        (!(J2.call(e, t) && z2(n, r)) || r === void 0 && !(t in e)) && Y2(e, t, r)
    }
    var Hh = Q2,
        Z2 = Hh,
        eU = Gh;

    function tU(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var a = -1, l = t.length; ++a < l;) {
            var c = t[a],
                f = n ? n(r[c], e[c], c, r, e) : void 0;
            f === void 0 && (f = e[c]), s ? eU(r, c, f) : Z2(r, c, f)
        }
        return r
    }
    var co = tU;

    function rU(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var nU = rU,
        iU = 9007199254740991,
        sU = /^(?:0|[1-9]\d*)$/;

    function aU(e, t) {
        var r = typeof e;
        return t = t == null ? iU : t, !!t && (r == "number" || r != "symbol" && sU.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var qh = aU,
        oU = nU,
        lU = AT,
        cU = yi,
        uU = eo.exports,
        fU = qh,
        dU = wT,
        hU = Object.prototype,
        pU = hU.hasOwnProperty;

    function gU(e, t) {
        var r = cU(e),
            n = !r && lU(e),
            s = !r && !n && uU(e),
            a = !r && !n && !s && dU(e),
            l = r || n || s || a,
            c = l ? oU(e.length, String) : [],
            f = c.length;
        for (var d in e)(t || pU.call(e, d)) && !(l && (d == "length" || s && (d == "offset" || d == "parent") || a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || fU(d, f))) && c.push(d);
        return c
    }
    var IT = gU;

    function mU(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var vU = mU,
        yU = gn,
        _U = Vh,
        EU = vU,
        bU = Object.prototype,
        TU = bU.hasOwnProperty;

    function AU(e) {
        if (!yU(e)) return EU(e);
        var t = _U(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !TU.call(e, n)) || r.push(n);
        return r
    }
    var OU = AU,
        SU = IT,
        wU = OU,
        CU = $c;

    function IU(e) {
        return CU(e) ? SU(e, !0) : wU(e)
    }
    var uo = IU,
        $U = co,
        RU = uo;

    function LU(e) {
        return $U(e, RU(e))
    }
    var NU = LU,
        Ty = vT,
        PU = Yl.exports,
        kU = yT,
        DU = _T,
        xU = bT,
        Ay = AT,
        Oy = yi,
        MU = t2,
        UU = eo.exports,
        FU = Fh,
        BU = gn,
        GU = h2,
        jU = wT,
        Sy = CT,
        WU = NU;

    function VU(e, t, r, n, s, a, l) {
        var c = Sy(e, r),
            f = Sy(t, r),
            d = l.get(f);
        if (d) {
            Ty(e, r, d);
            return
        }
        var p = a ? a(c, f, r + "", e, t, l) : void 0,
            y = p === void 0;
        if (y) {
            var b = Oy(f),
                w = !b && UU(f),
                P = !b && !w && jU(f);
            p = f, b || w || P ? Oy(c) ? p = c : MU(c) ? p = DU(c) : w ? (y = !1, p = PU(f, !0)) : P ? (y = !1, p = kU(f, !0)) : p = [] : GU(f) || Ay(f) ? (p = c, Ay(c) ? p = WU(c) : (!BU(c) || FU(c)) && (p = xU(f))) : y = !1
        }
        y && (l.set(f, p), s(p, f, n, a, l), l.delete(f)), Ty(e, r, p)
    }
    var KU = VU,
        HU = gT,
        qU = vT,
        YU = mM,
        zU = KU,
        XU = gn,
        JU = uo,
        QU = CT;

    function $T(e, t, r, n, s) {
        e !== t && YU(t, function(a, l) {
            if (s || (s = new HU), XU(a)) zU(e, t, l, r, $T, n, s);
            else {
                var c = n ? n(QU(e, l), a, l + "", e, t, s) : void 0;
                c === void 0 && (c = a), qU(e, l, c)
            }
        }, JU)
    }
    var ZU = $T;

    function eF(e) {
        return e
    }
    var RT = eF;

    function tF(e, t, r) {
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
    var rF = tF,
        nF = rF,
        wy = Math.max;

    function iF(e, t, r) {
        return t = wy(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, s = -1, a = wy(n.length - t, 0), l = Array(a); ++s < a;) l[s] = n[t + s];
                s = -1;
                for (var c = Array(t + 1); ++s < t;) c[s] = n[s];
                return c[t] = r(l), nF(e, this, c)
            }
    }
    var sF = iF;

    function aF(e) {
        return function() {
            return e
        }
    }
    var oF = aF,
        lF = oF,
        Cy = mT,
        cF = RT,
        uF = Cy ? function(e, t) {
            return Cy(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: lF(t),
                writable: !0
            })
        } : cF,
        fF = uF,
        dF = 800,
        hF = 16,
        pF = Date.now;

    function gF(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = pF(),
                s = hF - (n - r);
            if (r = n, s > 0) {
                if (++t >= dF) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var mF = gF,
        vF = fF,
        yF = mF,
        _F = yF(vF),
        EF = _F,
        bF = RT,
        TF = sF,
        AF = EF;

    function OF(e, t) {
        return AF(TF(e, t, bF), e + "")
    }
    var SF = OF,
        wF = Ac,
        CF = $c,
        IF = qh,
        $F = gn;

    function RF(e, t, r) {
        if (!$F(r)) return !1;
        var n = typeof t;
        return (n == "number" ? CF(r) && IF(t, r.length) : n == "string" && t in r) ? wF(r[t], e) : !1
    }
    var LF = RF,
        NF = SF,
        PF = LF;

    function kF(e) {
        return NF(function(t, r) {
            var n = -1,
                s = r.length,
                a = s > 1 ? r[s - 1] : void 0,
                l = s > 2 ? r[2] : void 0;
            for (a = e.length > 3 && typeof a == "function" ? (s--, a) : void 0, l && PF(r[0], r[1], l) && (a = s < 3 ? void 0 : a, s = 1), t = Object(t); ++n < s;) {
                var c = r[n];
                c && e(t, c, n, a)
            }
            return t
        })
    }
    var DF = kF,
        xF = ZU,
        MF = DF,
        UF = MF(function(e, t, r) {
            xF(e, t, r)
        }),
        FF = UF;
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
            return FF(t[0], ...t)
        }
    }
    ge(Bs, "locale"), ge(Bs, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
    const qp = class {
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
    let er = qp;
    ge(er, "queryParams", new URLSearchParams(window.location.search)), ge(er, "getQueryParam", t => qp.queryParams.get(t)), ge(er, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class kr {
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
                namespace: (s = (n = er.getQueryParam("namespace")) != null ? n : er.getQueryParam("ns")) != null ? s : this.defaultNamespace,
                isDisabled: er.queryParams.has("incognito") || er.queryParams.has("nc")
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
    ge(kr, "defaultNamespace", "tv");
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
            if (!kr.isSupported) return;
            const n = this.isTestArtifact(t) ? "http" : "https",
                s = this.isTestArtifact(t) ? "games-test.jackbox.tv" : "games.jackbox.tv",
                a = `${n}://${s}/artifact/${t.categoryId}/${t.artifactId}/`,
                l = kr.get("galleries") || "[]";
            try {
                const c = JSON.parse(l) || [];
                if (c.some(f => f.url === a)) return;
                c.unshift({
                    url: a,
                    time: new Date().getTime(),
                    categoryId: t.categoryId,
                    viewed: !1
                }), kr.set("galleries", JSON.stringify(c.slice(0, 40)))
            } catch {
                console.warn("[Artifacts] Unable to add artifact to local storage")
            }
        }
        remove(t) {
            if (!kr.isSupported) return;
            const r = kr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.splice(t, 1), kr.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
            } catch {
                console.warn("[Artifacts] Unable to remove artifact")
            }
        }
        setAsViewed(t) {
            ro.setAsViewed(t), this.artifacts = this.list()
        }
        static setAsViewed(t) {
            if (!kr.isSupported) return;
            const r = kr.get("galleries") || "[]";
            try {
                const n = JSON.parse(r) || [];
                n.length && (n[t].viewed = !0), kr.set("galleries", JSON.stringify(n))
            } catch {
                console.warn(`[Artifacts] Unable to mark artifact ${t} as viewed`)
            }
        }
        static isTestArtifact(t) {
            var r;
            return ((r = t == null ? void 0 : t.rootId) == null ? void 0 : r.indexOf("test")) !== -1
        }
        list() {
            if (!kr.isSupported) return [];
            const t = new Intl.DateTimeFormat(Bs.locale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                r = kr.get("galleries") || "[]",
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
    var Ad = {
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
                                Se = be.join("=").replace(/\+/g, " ");
                            ie.append(decodeURIComponent(ye), decodeURIComponent(Se))
                        }
                    }), ie
                }

                function $e(U) {
                    var ie = new P,
                        de = U.replace(/\r?\n[\t ]+/g, " ");
                    return de.split(/\r?\n/).forEach(function(be) {
                        var ye = be.split(":"),
                            Se = ye.shift().trim();
                        if (Se) {
                            var Ue = ye.join(":").trim();
                            ie.append(Se, Ue)
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
                        var Se = new XMLHttpRequest;

                        function Ue() {
                            Se.abort()
                        }
                        Se.onload = function() {
                            var je = {
                                status: Se.status,
                                statusText: Se.statusText,
                                headers: $e(Se.getAllResponseHeaders() || "")
                            };
                            je.url = "responseURL" in Se ? Se.responseURL : je.headers.get("X-Request-URL");
                            var nt = "response" in Se ? Se.response : Se.responseText;
                            de(new Ie(nt, je))
                        }, Se.onerror = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.ontimeout = function() {
                            be(new TypeError("Network request failed"))
                        }, Se.onabort = function() {
                            be(new l.DOMException("Aborted", "AbortError"))
                        }, Se.open(ye.method, ye.url, !0), ye.credentials === "include" ? Se.withCredentials = !0 : ye.credentials === "omit" && (Se.withCredentials = !1), "responseType" in Se && c.blob && (Se.responseType = "blob"), ye.headers.forEach(function(je, nt) {
                            Se.setRequestHeader(nt, je)
                        }), ye.signal && (ye.signal.addEventListener("abort", Ue), Se.onreadystatechange = function() {
                            Se.readyState === 4 && ye.signal.removeEventListener("abort", Ue)
                        }), Se.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                    })
                }
                return Ce.polyfill = !0, a.fetch || (a.fetch = Ce, a.Headers = P, a.Request = le, a.Response = Ie), l.Headers = P, l.Request = le, l.Response = Ie, l.fetch = Ce, Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var s = n;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, e.exports = t
    })(Ad, Ad.exports);
    var BF = function() {
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
        Iy = typeof Symbol < "u" && Symbol,
        GF = BF,
        jF = function() {
            return typeof Iy != "function" || typeof Symbol != "function" || typeof Iy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : GF()
        },
        WF = "Function.prototype.bind called on incompatible ",
        _f = Array.prototype.slice,
        VF = Object.prototype.toString,
        KF = "[object Function]",
        HF = function(t) {
            var r = this;
            if (typeof r != "function" || VF.call(r) !== KF) throw new TypeError(WF + r);
            for (var n = _f.call(arguments, 1), s, a = function() {
                    if (this instanceof s) {
                        var p = r.apply(this, n.concat(_f.call(arguments)));
                        return Object(p) === p ? p : this
                    } else return r.apply(t, n.concat(_f.call(arguments)))
                }, l = Math.max(0, r.length - n.length), c = [], f = 0; f < l; f++) c.push("$" + f);
            if (s = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
                var d = function() {};
                d.prototype = r.prototype, s.prototype = new d, d.prototype = null
            }
            return s
        },
        qF = HF,
        Yh = Function.prototype.bind || qF,
        YF = Yh,
        zF = YF.call(Function.call, Object.prototype.hasOwnProperty),
        et, Js = SyntaxError,
        LT = Function,
        Gs = TypeError,
        Ef = function(e) {
            try {
                return LT('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        rs = Object.getOwnPropertyDescriptor;
    if (rs) try {
        rs({}, "")
    } catch {
        rs = null
    }
    var bf = function() {
            throw new Gs
        },
        XF = rs ? function() {
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
        ws = jF(),
        ai = Object.getPrototypeOf || function(e) {
            return e.__proto__
        },
        Rs = {},
        JF = typeof Uint8Array > "u" ? et : ai(Uint8Array),
        js = {
            "%AggregateError%": typeof AggregateError > "u" ? et : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? et : ArrayBuffer,
            "%ArrayIteratorPrototype%": ws ? ai([][Symbol.iterator]()) : et,
            "%AsyncFromSyncIteratorPrototype%": et,
            "%AsyncFunction%": Rs,
            "%AsyncGenerator%": Rs,
            "%AsyncGeneratorFunction%": Rs,
            "%AsyncIteratorPrototype%": Rs,
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
            "%Function%": LT,
            "%GeneratorFunction%": Rs,
            "%Int8Array%": typeof Int8Array > "u" ? et : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? et : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? et : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": ws ? ai(ai([][Symbol.iterator]())) : et,
            "%JSON%": typeof JSON == "object" ? JSON : et,
            "%Map%": typeof Map > "u" ? et : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !ws ? et : ai(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !ws ? et : ai(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? et : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": ws ? ai("" [Symbol.iterator]()) : et,
            "%Symbol%": ws ? Symbol : et,
            "%SyntaxError%": Js,
            "%ThrowTypeError%": XF,
            "%TypedArray%": JF,
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
        QF = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = Ef("async function () {}");
            else if (t === "%GeneratorFunction%") r = Ef("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = Ef("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var s = e("%AsyncGenerator%");
                s && (r = ai(s.prototype))
            }
            return js[t] = r, r
        },
        $y = {
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
        fo = Yh,
        zl = zF,
        ZF = fo.call(Function.call, Array.prototype.concat),
        eB = fo.call(Function.apply, Array.prototype.splice),
        Ry = fo.call(Function.call, String.prototype.replace),
        Xl = fo.call(Function.call, String.prototype.slice),
        tB = fo.call(Function.call, RegExp.prototype.exec),
        rB = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        nB = /\\(\\)?/g,
        iB = function(t) {
            var r = Xl(t, 0, 1),
                n = Xl(t, -1);
            if (r === "%" && n !== "%") throw new Js("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Js("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return Ry(t, rB, function(a, l, c, f) {
                s[s.length] = c ? Ry(f, nB, "$1") : l || a
            }), s
        },
        sB = function(t, r) {
            var n = t,
                s;
            if (zl($y, n) && (s = $y[n], n = "%" + s[0] + "%"), zl(js, n)) {
                var a = js[n];
                if (a === Rs && (a = QF(n)), typeof a > "u" && !r) throw new Gs("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: n,
                    value: a
                }
            }
            throw new Js("intrinsic " + t + " does not exist!")
        },
        zh = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new Gs("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Gs('"allowMissing" argument must be a boolean');
            if (tB(/^%?[^%]*%?$/g, t) === null) throw new Js("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = iB(t),
                s = n.length > 0 ? n[0] : "",
                a = sB("%" + s + "%", r),
                l = a.name,
                c = a.value,
                f = !1,
                d = a.alias;
            d && (s = d[0], eB(n, ZF([0, 1], d)));
            for (var p = 1, y = !0; p < n.length; p += 1) {
                var b = n[p],
                    w = Xl(b, 0, 1),
                    P = Xl(b, -1);
                if ((w === '"' || w === "'" || w === "`" || P === '"' || P === "'" || P === "`") && w !== P) throw new Js("property names with quotes must have matching quotes");
                if ((b === "constructor" || !y) && (f = !0), s += "." + b, l = "%" + s + "%", zl(js, l)) c = js[l];
                else if (c != null) {
                    if (!(b in c)) {
                        if (!r) throw new Gs("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (rs && p + 1 >= n.length) {
                        var M = rs(c, b);
                        y = !!M, y && "get" in M && !("originalValue" in M.get) ? c = M.get : c = c[b]
                    } else y = zl(c, b), c = c[b];
                    y && !f && (js[l] = c)
                }
            }
            return c
        },
        NT = {
            exports: {}
        };
    (function(e) {
        var t = Yh,
            r = zh,
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
    })(NT);
    var PT = zh,
        kT = NT.exports,
        aB = kT(PT("String.prototype.indexOf")),
        oB = function(t, r) {
            var n = PT(t, !!r);
            return typeof n == "function" && aB(t, ".prototype.") > -1 ? kT(n) : n
        };
    const lB = {},
        cB = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: lB
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        uB = pk(cB);
    var Xh = typeof Map == "function" && Map.prototype,
        Tf = Object.getOwnPropertyDescriptor && Xh ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Jl = Xh && Tf && typeof Tf.get == "function" ? Tf.get : null,
        fB = Xh && Map.prototype.forEach,
        Jh = typeof Set == "function" && Set.prototype,
        Af = Object.getOwnPropertyDescriptor && Jh ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        Ql = Jh && Af && typeof Af.get == "function" ? Af.get : null,
        dB = Jh && Set.prototype.forEach,
        hB = typeof WeakMap == "function" && WeakMap.prototype,
        Ba = hB ? WeakMap.prototype.has : null,
        pB = typeof WeakSet == "function" && WeakSet.prototype,
        Ga = pB ? WeakSet.prototype.has : null,
        gB = typeof WeakRef == "function" && WeakRef.prototype,
        Ly = gB ? WeakRef.prototype.deref : null,
        mB = Boolean.prototype.valueOf,
        vB = Object.prototype.toString,
        yB = Function.prototype.toString,
        _B = String.prototype.match,
        Qh = String.prototype.slice,
        ci = String.prototype.replace,
        EB = String.prototype.toUpperCase,
        Ny = String.prototype.toLowerCase,
        DT = RegExp.prototype.test,
        Py = Array.prototype.concat,
        Sn = Array.prototype.join,
        bB = Array.prototype.slice,
        ky = Math.floor,
        Od = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Of = Object.getOwnPropertySymbols,
        Sd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Qs = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        fr = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Qs ? "object" : "symbol") ? Symbol.toStringTag : null,
        xT = Object.prototype.propertyIsEnumerable,
        Dy = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function xy(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || DT.call(/e/, t)) return t;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof e == "number") {
            var n = e < 0 ? -ky(-e) : ky(e);
            if (n !== e) {
                var s = String(n),
                    a = Qh.call(t, s.length + 1);
                return ci.call(s, r, "$&_") + "." + ci.call(ci.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return ci.call(t, r, "$&_")
    }
    var wd = uB,
        My = wd.custom,
        Uy = UT(My) ? My : null,
        TB = function e(t, r, n, s) {
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
            if (typeof t == "string") return BT(t, a);
            if (typeof t == "number") {
                if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
                var f = String(t);
                return c ? xy(t, f) : f
            }
            if (typeof t == "bigint") {
                var d = String(t) + "n";
                return c ? xy(t, d) : d
            }
            var p = typeof a.depth > "u" ? 5 : a.depth;
            if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof t == "object") return Cd(t) ? "[Array]" : "[Object]";
            var y = BB(a, n);
            if (typeof s > "u") s = [];
            else if (FT(s, t) >= 0) return "[Circular]";

            function b(Ce, U, ie) {
                if (U && (s = bB.call(s), s.push(U)), ie) {
                    var de = {
                        depth: a.depth
                    };
                    return oi(a, "quoteStyle") && (de.quoteStyle = a.quoteStyle), e(Ce, de, n + 1, s)
                }
                return e(Ce, a, n + 1, s)
            }
            if (typeof t == "function" && !Fy(t)) {
                var w = LB(t),
                    P = gl(t, b);
                return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (P.length > 0 ? " { " + Sn.call(P, ", ") + " }" : "")
            }
            if (UT(t)) {
                var M = Qs ? ci.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Sd.call(t);
                return typeof t == "object" && !Qs ? Na(M) : M
            }
            if (MB(t)) {
                for (var G = "<" + Ny.call(String(t.nodeName)), C = t.attributes || [], H = 0; H < C.length; H++) G += " " + C[H].name + "=" + MT(AB(C[H].value), "double", a);
                return G += ">", t.childNodes && t.childNodes.length && (G += "..."), G += "</" + Ny.call(String(t.nodeName)) + ">", G
            }
            if (Cd(t)) {
                if (t.length === 0) return "[]";
                var z = gl(t, b);
                return y && !FB(z) ? "[" + Id(z, y) + "]" : "[ " + Sn.call(z, ", ") + " ]"
            }
            if (SB(t)) {
                var V = gl(t, b);
                return !("cause" in Error.prototype) && "cause" in t && !xT.call(t, "cause") ? "{ [" + String(t) + "] " + Sn.call(Py.call("[cause]: " + b(t.cause), V), ", ") + " }" : V.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Sn.call(V, ", ") + " }"
            }
            if (typeof t == "object" && l) {
                if (Uy && typeof t[Uy] == "function" && wd) return wd(t, {
                    depth: p - n
                });
                if (l !== "symbol" && typeof t.inspect == "function") return t.inspect()
            }
            if (NB(t)) {
                var j = [];
                return fB.call(t, function(Ce, U) {
                    j.push(b(U, t, !0) + " => " + b(Ce, t))
                }), By("Map", Jl.call(t), j, y)
            }
            if (DB(t)) {
                var Q = [];
                return dB.call(t, function(Ce) {
                    Q.push(b(Ce, t))
                }), By("Set", Ql.call(t), Q, y)
            }
            if (PB(t)) return Sf("WeakMap");
            if (xB(t)) return Sf("WeakSet");
            if (kB(t)) return Sf("WeakRef");
            if (CB(t)) return Na(b(Number(t)));
            if ($B(t)) return Na(b(Od.call(t)));
            if (IB(t)) return Na(mB.call(t));
            if (wB(t)) return Na(b(String(t)));
            if (!OB(t) && !Fy(t)) {
                var oe = gl(t, b),
                    le = Dy ? Dy(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                    ue = t instanceof Object ? "" : "null prototype",
                    $e = !le && fr && Object(t) === t && fr in t ? Qh.call(_i(t), 8, -1) : ue ? "Object" : "",
                    Ie = le || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                    fe = Ie + ($e || ue ? "[" + Sn.call(Py.call([], $e || [], ue || []), ": ") + "] " : "");
                return oe.length === 0 ? fe + "{}" : y ? fe + "{" + Id(oe, y) + "}" : fe + "{ " + Sn.call(oe, ", ") + " }"
            }
            return String(t)
        };

    function MT(e, t, r) {
        var n = (r.quoteStyle || t) === "double" ? '"' : "'";
        return n + e + n
    }

    function AB(e) {
        return ci.call(String(e), /"/g, "&quot;")
    }

    function Cd(e) {
        return _i(e) === "[object Array]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function OB(e) {
        return _i(e) === "[object Date]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function Fy(e) {
        return _i(e) === "[object RegExp]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function SB(e) {
        return _i(e) === "[object Error]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function wB(e) {
        return _i(e) === "[object String]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function CB(e) {
        return _i(e) === "[object Number]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function IB(e) {
        return _i(e) === "[object Boolean]" && (!fr || !(typeof e == "object" && fr in e))
    }

    function UT(e) {
        if (Qs) return e && typeof e == "object" && e instanceof Symbol;
        if (typeof e == "symbol") return !0;
        if (!e || typeof e != "object" || !Sd) return !1;
        try {
            return Sd.call(e), !0
        } catch {}
        return !1
    }

    function $B(e) {
        if (!e || typeof e != "object" || !Od) return !1;
        try {
            return Od.call(e), !0
        } catch {}
        return !1
    }
    var RB = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function oi(e, t) {
        return RB.call(e, t)
    }

    function _i(e) {
        return vB.call(e)
    }

    function LB(e) {
        if (e.name) return e.name;
        var t = _B.call(yB.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
    }

    function FT(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function NB(e) {
        if (!Jl || !e || typeof e != "object") return !1;
        try {
            Jl.call(e);
            try {
                Ql.call(e)
            } catch {
                return !0
            }
            return e instanceof Map
        } catch {}
        return !1
    }

    function PB(e) {
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

    function kB(e) {
        if (!Ly || !e || typeof e != "object") return !1;
        try {
            return Ly.call(e), !0
        } catch {}
        return !1
    }

    function DB(e) {
        if (!Ql || !e || typeof e != "object") return !1;
        try {
            Ql.call(e);
            try {
                Jl.call(e)
            } catch {
                return !0
            }
            return e instanceof Set
        } catch {}
        return !1
    }

    function xB(e) {
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

    function MB(e) {
        return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
    }

    function BT(e, t) {
        if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return BT(Qh.call(e, 0, t.maxStringLength), t) + n
        }
        var s = ci.call(ci.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, UB);
        return MT(s, "single", t)
    }

    function UB(e) {
        var t = e.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + EB.call(t.toString(16))
    }

    function Na(e) {
        return "Object(" + e + ")"
    }

    function Sf(e) {
        return e + " { ? }"
    }

    function By(e, t, r, n) {
        var s = n ? Id(r, n) : Sn.call(r, ", ");
        return e + " (" + t + ") {" + s + "}"
    }

    function FB(e) {
        for (var t = 0; t < e.length; t++)
            if (FT(e[t], `
`) >= 0) return !1;
        return !0
    }

    function BB(e, t) {
        var r;
        if (e.indent === "	") r = "	";
        else if (typeof e.indent == "number" && e.indent > 0) r = Sn.call(Array(e.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Sn.call(Array(t + 1), r)
        }
    }

    function Id(e, t) {
        if (e.length === 0) return "";
        var r = `
` + t.prev + t.base;
        return r + Sn.call(e, "," + r) + `
` + t.prev
    }

    function gl(e, t) {
        var r = Cd(e),
            n = [];
        if (r) {
            n.length = e.length;
            for (var s = 0; s < e.length; s++) n[s] = oi(e, s) ? t(e[s], e) : ""
        }
        var a = typeof Of == "function" ? Of(e) : [],
            l;
        if (Qs) {
            l = {};
            for (var c = 0; c < a.length; c++) l["$" + a[c]] = a[c]
        }
        for (var f in e) !oi(e, f) || r && String(Number(f)) === f && f < e.length || Qs && l["$" + f] instanceof Symbol || (DT.call(/[^\w$]/, f) ? n.push(t(f, e) + ": " + t(e[f], e)) : n.push(f + ": " + t(e[f], e)));
        if (typeof Of == "function")
            for (var d = 0; d < a.length; d++) xT.call(e, a[d]) && n.push("[" + t(a[d]) + "]: " + t(e[a[d]], e));
        return n
    }
    var Zh = zh,
        ua = oB,
        GB = TB,
        jB = Zh("%TypeError%"),
        ml = Zh("%WeakMap%", !0),
        vl = Zh("%Map%", !0),
        WB = ua("WeakMap.prototype.get", !0),
        VB = ua("WeakMap.prototype.set", !0),
        KB = ua("WeakMap.prototype.has", !0),
        HB = ua("Map.prototype.get", !0),
        qB = ua("Map.prototype.set", !0),
        YB = ua("Map.prototype.has", !0),
        ep = function(e, t) {
            for (var r = e, n;
                (n = r.next) !== null; r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        zB = function(e, t) {
            var r = ep(e, t);
            return r && r.value
        },
        XB = function(e, t, r) {
            var n = ep(e, t);
            n ? n.value = r : e.next = {
                key: t,
                next: e.next,
                value: r
            }
        },
        JB = function(e, t) {
            return !!ep(e, t)
        },
        QB = function() {
            var t, r, n, s = {
                assert: function(a) {
                    if (!s.has(a)) throw new jB("Side channel does not contain " + GB(a))
                },
                get: function(a) {
                    if (ml && a && (typeof a == "object" || typeof a == "function")) {
                        if (t) return WB(t, a)
                    } else if (vl) {
                        if (r) return HB(r, a)
                    } else if (n) return zB(n, a)
                },
                has: function(a) {
                    if (ml && a && (typeof a == "object" || typeof a == "function")) {
                        if (t) return KB(t, a)
                    } else if (vl) {
                        if (r) return YB(r, a)
                    } else if (n) return JB(n, a);
                    return !1
                },
                set: function(a, l) {
                    ml && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new ml), VB(t, a, l)) : vl ? (r || (r = new vl), qB(r, a, l)) : (n || (n = {
                        key: {},
                        next: null
                    }), XB(n, a, l))
                }
            };
            return s
        },
        ZB = String.prototype.replace,
        eG = /%20/g,
        wf = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        tp = {
            default: wf.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return ZB.call(e, eG, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            },
            RFC1738: wf.RFC1738,
            RFC3986: wf.RFC3986
        },
        tG = tp,
        Cf = Object.prototype.hasOwnProperty,
        zi = Array.isArray,
        En = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        rG = function(t) {
            for (; t.length > 1;) {
                var r = t.pop(),
                    n = r.obj[r.prop];
                if (zi(n)) {
                    for (var s = [], a = 0; a < n.length; ++a) typeof n[a] < "u" && s.push(n[a]);
                    r.obj[r.prop] = s
                }
            }
        },
        GT = function(t, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s) typeof t[s] < "u" && (n[s] = t[s]);
            return n
        },
        nG = function e(t, r, n) {
            if (!r) return t;
            if (typeof r != "object") {
                if (zi(t)) t.push(r);
                else if (t && typeof t == "object")(n && (n.plainObjects || n.allowPrototypes) || !Cf.call(Object.prototype, r)) && (t[r] = !0);
                else return [t, r];
                return t
            }
            if (!t || typeof t != "object") return [t].concat(r);
            var s = t;
            return zi(t) && !zi(r) && (s = GT(t, n)), zi(t) && zi(r) ? (r.forEach(function(a, l) {
                if (Cf.call(t, l)) {
                    var c = t[l];
                    c && typeof c == "object" && a && typeof a == "object" ? t[l] = e(c, a, n) : t.push(a)
                } else t[l] = a
            }), t) : Object.keys(r).reduce(function(a, l) {
                var c = r[l];
                return Cf.call(a, l) ? a[l] = e(a[l], c, n) : a[l] = c, a
            }, s)
        },
        iG = function(t, r) {
            return Object.keys(r).reduce(function(n, s) {
                return n[s] = r[s], n
            }, t)
        },
        sG = function(e, t, r) {
            var n = e.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        aG = function(t, r, n, s, a) {
            if (t.length === 0) return t;
            var l = t;
            if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), n === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(p) {
                return "%26%23" + parseInt(p.slice(2), 16) + "%3B"
            });
            for (var c = "", f = 0; f < l.length; ++f) {
                var d = l.charCodeAt(f);
                if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || a === tG.RFC1738 && (d === 40 || d === 41)) {
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
        oG = function(t) {
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
            return rG(r), t
        },
        lG = function(t) {
            return Object.prototype.toString.call(t) === "[object RegExp]"
        },
        cG = function(t) {
            return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        },
        uG = function(t, r) {
            return [].concat(t, r)
        },
        fG = function(t, r) {
            if (zi(t)) {
                for (var n = [], s = 0; s < t.length; s += 1) n.push(r(t[s]));
                return n
            }
            return r(t)
        },
        jT = {
            arrayToObject: GT,
            assign: iG,
            combine: uG,
            compact: oG,
            decode: sG,
            encode: aG,
            isBuffer: cG,
            isRegExp: lG,
            maybeMap: fG,
            merge: nG
        },
        WT = QB,
        $d = jT,
        ja = tp,
        dG = Object.prototype.hasOwnProperty,
        Gy = {
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
        Bn = Array.isArray,
        hG = String.prototype.split,
        pG = Array.prototype.push,
        VT = function(e, t) {
            pG.apply(e, Bn(t) ? t : [t])
        },
        gG = Date.prototype.toISOString,
        jy = ja.default,
        Qt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: $d.encode,
            encodeValuesOnly: !1,
            format: jy,
            formatter: ja.formatters[jy],
            indices: !1,
            serializeDate: function(t) {
                return gG.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        mG = function(t) {
            return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
        },
        If = {},
        vG = function e(t, r, n, s, a, l, c, f, d, p, y, b, w, P, M, G) {
            for (var C = t, H = G, z = 0, V = !1;
                (H = H.get(If)) !== void 0 && !V;) {
                var j = H.get(t);
                if (z += 1, typeof j < "u") {
                    if (j === z) throw new RangeError("Cyclic object value");
                    V = !0
                }
                typeof H.get(If) > "u" && (z = 0)
            }
            if (typeof f == "function" ? C = f(r, C) : C instanceof Date ? C = y(C) : n === "comma" && Bn(C) && (C = $d.maybeMap(C, function(Se) {
                    return Se instanceof Date ? y(Se) : Se
                })), C === null) {
                if (a) return c && !P ? c(r, Qt.encoder, M, "key", b) : r;
                C = ""
            }
            if (mG(C) || $d.isBuffer(C)) {
                if (c) {
                    var Q = P ? r : c(r, Qt.encoder, M, "key", b);
                    if (n === "comma" && P) {
                        for (var oe = hG.call(String(C), ","), le = "", ue = 0; ue < oe.length; ++ue) le += (ue === 0 ? "" : ",") + w(c(oe[ue], Qt.encoder, M, "value", b));
                        return [w(Q) + (s && Bn(C) && oe.length === 1 ? "[]" : "") + "=" + le]
                    }
                    return [w(Q) + "=" + w(c(C, Qt.encoder, M, "value", b))]
                }
                return [w(r) + "=" + w(String(C))]
            }
            var $e = [];
            if (typeof C > "u") return $e;
            var Ie;
            if (n === "comma" && Bn(C)) Ie = [{
                value: C.length > 0 ? C.join(",") || null : void 0
            }];
            else if (Bn(f)) Ie = f;
            else {
                var fe = Object.keys(C);
                Ie = d ? fe.sort(d) : fe
            }
            for (var Ce = s && Bn(C) && C.length === 1 ? r + "[]" : r, U = 0; U < Ie.length; ++U) {
                var ie = Ie[U],
                    de = typeof ie == "object" && typeof ie.value < "u" ? ie.value : C[ie];
                if (!(l && de === null)) {
                    var be = Bn(C) ? typeof n == "function" ? n(Ce, ie) : Ce : Ce + (p ? "." + ie : "[" + ie + "]");
                    G.set(t, z);
                    var ye = WT();
                    ye.set(If, G), VT($e, e(de, be, n, s, a, l, c, f, d, p, y, b, w, P, M, ye))
                }
            }
            return $e
        },
        yG = function(t) {
            if (!t) return Qt;
            if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = t.charset || Qt.charset;
            if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = ja.default;
            if (typeof t.format < "u") {
                if (!dG.call(ja.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format
            }
            var s = ja.formatters[n],
                a = Qt.filter;
            return (typeof t.filter == "function" || Bn(t.filter)) && (a = t.filter), {
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
        _G = function(e, t) {
            var r = e,
                n = yG(t),
                s, a;
            typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Bn(n.filter) && (a = n.filter, s = a);
            var l = [];
            if (typeof r != "object" || r === null) return "";
            var c;
            t && t.arrayFormat in Gy ? c = t.arrayFormat : t && "indices" in t ? c = t.indices ? "indices" : "repeat" : c = "indices";
            var f = Gy[c];
            if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var d = f === "comma" && t && t.commaRoundTrip;
            s || (s = Object.keys(r)), n.sort && s.sort(n.sort);
            for (var p = WT(), y = 0; y < s.length; ++y) {
                var b = s[y];
                n.skipNulls && r[b] === null || VT(l, vG(r[b], b, f, d, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, p))
            }
            var w = l.join(n.delimiter),
                P = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? P += "utf8=%26%2310003%3B&" : P += "utf8=%E2%9C%93&"), w.length > 0 ? P + w : ""
        },
        Zs = jT,
        Rd = Object.prototype.hasOwnProperty,
        EG = Array.isArray,
        qt = {
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
        bG = function(e) {
            return e.replace(/&#(\d+);/g, function(t, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        KT = function(e, t) {
            return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
        },
        TG = "utf8=%26%2310003%3B",
        AG = "utf8=%E2%9C%93",
        OG = function(t, r) {
            var n = {},
                s = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                l = s.split(r.delimiter, a),
                c = -1,
                f, d = r.charset;
            if (r.charsetSentinel)
                for (f = 0; f < l.length; ++f) l[f].indexOf("utf8=") === 0 && (l[f] === AG ? d = "utf-8" : l[f] === TG && (d = "iso-8859-1"), c = f, f = l.length);
            for (f = 0; f < l.length; ++f)
                if (f !== c) {
                    var p = l[f],
                        y = p.indexOf("]="),
                        b = y === -1 ? p.indexOf("=") : y + 1,
                        w, P;
                    b === -1 ? (w = r.decoder(p, qt.decoder, d, "key"), P = r.strictNullHandling ? null : "") : (w = r.decoder(p.slice(0, b), qt.decoder, d, "key"), P = Zs.maybeMap(KT(p.slice(b + 1), r), function(M) {
                        return r.decoder(M, qt.decoder, d, "value")
                    })), P && r.interpretNumericEntities && d === "iso-8859-1" && (P = bG(P)), p.indexOf("[]=") > -1 && (P = EG(P) ? [P] : P), Rd.call(n, w) ? n[w] = Zs.combine(n[w], P) : n[w] = P
                } return n
        },
        SG = function(e, t, r, n) {
            for (var s = n ? t : KT(t, r), a = e.length - 1; a >= 0; --a) {
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
        wG = function(t, r, n, s) {
            if (!!t) {
                var a = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                    l = /(\[[^[\]]*])/,
                    c = /(\[[^[\]]*])/g,
                    f = n.depth > 0 && l.exec(a),
                    d = f ? a.slice(0, f.index) : a,
                    p = [];
                if (d) {
                    if (!n.plainObjects && Rd.call(Object.prototype, d) && !n.allowPrototypes) return;
                    p.push(d)
                }
                for (var y = 0; n.depth > 0 && (f = c.exec(a)) !== null && y < n.depth;) {
                    if (y += 1, !n.plainObjects && Rd.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes) return;
                    p.push(f[1])
                }
                return f && p.push("[" + a.slice(f.index) + "]"), SG(p, r, n, s)
            }
        },
        CG = function(t) {
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
                delimiter: typeof t.delimiter == "string" || Zs.isRegExp(t.delimiter) ? t.delimiter : qt.delimiter,
                depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : qt.depth,
                ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : qt.interpretNumericEntities,
                parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : qt.parameterLimit,
                parseArrays: t.parseArrays !== !1,
                plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : qt.plainObjects,
                strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : qt.strictNullHandling
            }
        },
        IG = function(e, t) {
            var r = CG(t);
            if (e === "" || e === null || typeof e > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof e == "string" ? OG(e, r) : e, s = r.plainObjects ? Object.create(null) : {}, a = Object.keys(n), l = 0; l < a.length; ++l) {
                var c = a[l],
                    f = wG(c, n[c], r, typeof e == "string");
                s = Zs.merge(s, f, r)
            }
            return r.allowSparse === !0 ? s : Zs.compact(s)
        },
        $G = _G,
        RG = IG,
        LG = tp,
        HT = {
            formats: LG,
            parse: RG,
            stringify: $G
        };
    class NG {
        constructor(t) {
            this.code = t.code, this.token = t.token, this.host = t.host
        }
    }
    class PG {
        constructor(t) {
            this.appId = t.appId, this.appTag = t.appTag, this.audienceEnabled = t.audienceEnabled, this.code = t.code, this.host = t.host, this.audienceHost = t.audienceHost, this.locked = t.locked, this.full = t.full, this.moderationEnabled = t.moderationEnabled, this.passwordRequired = t.passwordRequired, this.twitchLocked = t.twitchLocked, this.locale = t.locale, this.keepalive = t.keepalive, this.controllerBranch = t.controllerBranch
        }
    }
    class kG {
        constructor(t) {
            this.connections = t.connections
        }
    }
    class DG {
        constructor(t) {
            this.cause = t.cause
        }
        whenReceived(t) {
            t.disconnect()
        }
    }
    class xG {}
    var Rc = {
        CreateRoomReply: NG,
        GetRoomReply: PG,
        GetAudienceReply: kG,
        RoomExit: DG,
        RoomLock: xG
    };
    const Wy = Ad.exports,
        MG = HT,
        {
            CreateRoomReply: UG,
            GetRoomReply: FG
        } = Rc;
    class BG {
        constructor(t) {
            if (!t.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = t.host, !t.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = t.scheme
        }
        url(t, r) {
            if (r) {
                let n = MG.stringify(r);
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
                l = await (await Wy(n, {
                    method: "POST"
                })).json();
            if (!l.ok) throw new Error(`failed to create room: ${l.error}`);
            let c = l.body;
            return new UG({
                code: c.code,
                token: c.token,
                host: c.host
            })
        }
        async getRoom(t) {
            let r = this.url(`/rooms/${t.code}`),
                s = await (await Wy(r)).json();
            if (!s.ok) throw new Error(`unable to get room with options ${JSON.stringify(t)}: ${s.error}`);
            let a = s.body;
            return new FG({
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
    var GG = {
            APIClient: BG
        },
        Ls = null;
    typeof WebSocket < "u" ? Ls = WebSocket : typeof MozWebSocket < "u" ? Ls = MozWebSocket : typeof kt < "u" ? Ls = kt.WebSocket || kt.MozWebSocket : typeof window < "u" ? Ls = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ls = self.WebSocket || self.MozWebSocket);
    var jG = Ls,
        rp = {
            exports: {}
        },
        Ws = typeof Reflect == "object" ? Reflect : null,
        Vy = Ws && typeof Ws.apply == "function" ? Ws.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        Pl;
    Ws && typeof Ws.ownKeys == "function" ? Pl = Ws.ownKeys : Object.getOwnPropertySymbols ? Pl = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Pl = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function WG(e) {
        console && console.warn && console.warn(e)
    }
    var qT = Number.isNaN || function(t) {
        return t !== t
    };

    function gt() {
        gt.init.call(this)
    }
    rp.exports = gt;
    rp.exports.once = qG;
    gt.EventEmitter = gt;
    gt.prototype._events = void 0;
    gt.prototype._eventsCount = 0;
    gt.prototype._maxListeners = void 0;
    var Ky = 10;

    function Lc(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(gt, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Ky
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || qT(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Ky = e
        }
    });
    gt.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    gt.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || qT(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function YT(e) {
        return e._maxListeners === void 0 ? gt.defaultMaxListeners : e._maxListeners
    }
    gt.prototype.getMaxListeners = function() {
        return YT(this)
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
        if (typeof f == "function") Vy(f, this, r);
        else
            for (var d = f.length, p = ZT(f, d), n = 0; n < d; ++n) Vy(p[n], this, r);
        return !0
    };

    function zT(e, t, r, n) {
        var s, a, l;
        if (Lc(r), a = e._events, a === void 0 ? (a = e._events = Object.create(null), e._eventsCount = 0) : (a.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), a = e._events), l = a[t]), l === void 0) l = a[t] = r, ++e._eventsCount;
        else if (typeof l == "function" ? l = a[t] = n ? [r, l] : [l, r] : n ? l.unshift(r) : l.push(r), s = YT(e), s > 0 && l.length > s && !l.warned) {
            l.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = l.length, WG(c)
        }
        return e
    }
    gt.prototype.addListener = function(t, r) {
        return zT(this, t, r, !1)
    };
    gt.prototype.on = gt.prototype.addListener;
    gt.prototype.prependListener = function(t, r) {
        return zT(this, t, r, !0)
    };

    function VG() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function XT(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            s = VG.bind(n);
        return s.listener = r, n.wrapFn = s, s
    }
    gt.prototype.once = function(t, r) {
        return Lc(r), this.on(t, XT(this, t, r)), this
    };
    gt.prototype.prependOnceListener = function(t, r) {
        return Lc(r), this.prependListener(t, XT(this, t, r)), this
    };
    gt.prototype.removeListener = function(t, r) {
        var n, s, a, l, c;
        if (Lc(r), s = this._events, s === void 0) return this;
        if (n = s[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (a = -1, l = n.length - 1; l >= 0; l--)
                if (n[l] === r || n[l].listener === r) {
                    c = n[l].listener, a = l;
                    break
                } if (a < 0) return this;
            a === 0 ? n.shift() : KG(n, a), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, c || r)
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

    function JT(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var s = n[t];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? HG(s) : ZT(s, s.length)
    }
    gt.prototype.listeners = function(t) {
        return JT(this, t, !0)
    };
    gt.prototype.rawListeners = function(t) {
        return JT(this, t, !1)
    };
    gt.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : QT.call(e, t)
    };
    gt.prototype.listenerCount = QT;

    function QT(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    gt.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Pl(this._events) : []
    };

    function ZT(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function KG(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function HG(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function qG(e, t) {
        return new Promise(function(r, n) {
            function s(l) {
                e.removeListener(t, a), n(l)
            }

            function a() {
                typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments))
            }
            eA(e, t, a, {
                once: !0
            }), t !== "error" && YG(e, s, {
                once: !0
            })
        })
    }

    function YG(e, t, r) {
        typeof e.on == "function" && eA(e, "error", t, r)
    }

    function eA(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function s(a) {
            n.once && e.removeEventListener(t, s), r(a)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
    class zG {
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
    class Nc extends Error {
        constructor(t) {
            super(t), t && (this.code = t.code, this.message = t.message)
        }
    }
    class ho extends Nc {
        constructor(t) {
            super(t), this.code = 1e3, this.message = t && t.message ? t.message : "ecast server error"
        }
    }
    class tA extends ho {
        constructor(t) {
            super(t), this.code = 1001, this.message = t && t.message ? t.message : "create room failed"
        }
    }
    class rA extends ho {
        constructor(t) {
            super(t), this.code = 1002, this.message = t && t.message ? t.message : "unable to connect to room"
        }
    }
    class nA extends ho {
        constructor(t) {
            super(t), this.code = 1003, this.message = t && t.message ? t.message : "server is shutting down"
        }
    }
    class ft extends Nc {
        constructor(t) {
            super(t), this.code = 2e3, this.message = t && t.message ? t.message : "ecast client error"
        }
    }
    class iA extends ft {
        constructor(t) {
            super(t), this.code = 2001, this.message = t && t.message ? t.message : "parse error in ecast protocol"
        }
    }
    class sA extends ft {
        constructor(t) {
            super(t), this.code = 2002, this.message = t && t.message ? t.message : "missing opcode"
        }
    }
    class aA extends ft {
        constructor(t) {
            super(t), this.code = 2003, this.message = t && t.message ? t.message : "invalid opcode"
        }
    }
    class oA extends ft {
        constructor(t) {
            super(t), this.code = 2004, this.message = t && t.message ? t.message : "invalid arguments"
        }
    }
    class lA extends ft {
        constructor(t) {
            super(t), this.code = 2005, this.message = t && t.message ? t.message : "entity not found"
        }
    }
    class cA extends ft {
        constructor(t) {
            super(t), this.code = 2006, this.message = t && t.message ? t.message : "an entity already exists with that key"
        }
    }
    class uA extends ft {
        constructor(t) {
            super(t), this.code = 2007, this.message = t && t.message ? t.message : "the entity is not of the expected type"
        }
    }
    class fA extends ft {
        constructor(t) {
            super(t), this.code = 2008, this.message = t && t.message ? t.message : "no such client"
        }
    }
    class dA extends ft {
        constructor(t) {
            super(t), this.code = 2009, this.message = t && t.message ? t.message : "room is locked"
        }
    }
    class hA extends ft {
        constructor(t) {
            super(t), this.code = 2010, this.message = t && t.message ? t.message : "room is full"
        }
    }
    class pA extends ft {
        constructor(t) {
            super(t), this.code = 2011, this.message = t && t.message ? t.message : "no such license"
        }
    }
    class gA extends ft {
        constructor(t) {
            super(t), this.code = 2012, this.message = t && t.message ? t.message : "invalid license"
        }
    }
    class mA extends ft {
        constructor(t) {
            super(t), this.code = 2013, this.message = t && t.message ? t.message : "room not found"
        }
    }
    class vA extends ft {
        constructor(t) {
            super(t), this.code = 2014, this.message = t && t.message ? t.message : "requested role does not exist"
        }
    }
    class yA extends ft {
        constructor(t) {
            super(t), this.code = 2015, this.message = t && t.message ? t.message : "twitch login required"
        }
    }
    class _A extends ft {
        constructor(t) {
            super(t), this.code = 2016, this.message = t && t.message ? t.message : "no such option"
        }
    }
    class EA extends ft {
        constructor(t) {
            super(t), this.code = 2017, this.message = t && t.message ? t.message : "password required"
        }
    }
    class bA extends ft {
        constructor(t) {
            super(t), this.code = 2018, this.message = t && t.message ? t.message : "invalid room password"
        }
    }
    class TA extends ft {
        constructor(t) {
            super(t), this.code = 2019, this.message = t && t.message ? t.message : "missing name"
        }
    }
    class AA extends ft {
        constructor(t) {
            super(t), this.code = 2021, this.message = t && t.message ? t.message : "text did not pass text filters"
        }
    }
    class OA extends ft {
        constructor(t) {
            super(t), this.code = 2022, this.message = t && t.message ? t.message : "no such filter"
        }
    }
    class SA extends ft {
        constructor(t) {
            super(t), this.code = 2023, this.message = t && t.message ? t.message : "permission denied"
        }
    }
    class wA extends ft {
        constructor(t) {
            super(t), this.code = 2024, this.message = t && t.message ? t.message : "not connected to a room"
        }
    }
    class CA extends ft {
        constructor(t) {
            super(t), this.code = 2025, this.message = t && t.message ? t.message : "illegal operation"
        }
    }
    class IA extends ft {
        constructor(t) {
            super(t), this.code = 2026, this.message = t && t.message ? t.message : "invalid ACL change"
        }
    }
    class $A extends ft {
        constructor(t) {
            super(t), this.code = 2027, this.message = t && t.message ? t.message : "room has already ended"
        }
    }
    class RA extends ft {
        constructor(t) {
            super(t), this.code = 2028, this.message = t && t.message ? t.message : "the entity is locked"
        }
    }
    class LA extends ft {
        constructor(t) {
            super(t), this.code = 2420, this.message = t && t.message ? t.message : "rate limit exceeded"
        }
    }

    function XG({
        code: e,
        message: t
    }) {
        const r = JG[e];
        return r ? new r({
            message: t
        }) : new Nc({
            message: t
        })
    }
    var ns = {
        createError: XG,
        CallError: Nc,
        EcastServerError: ho,
        EcastCreateRoomFailed: tA,
        EcastDialRoomFailed: rA,
        EcastServerIsShuttingDown: nA,
        EcastClientError: ft,
        EcastParseError: iA,
        EcastRequestIsMissingOpcode: sA,
        EcastRequestHasInvalidOpcode: aA,
        EcastRequestHasInvalidArguments: oA,
        EcastEntityNotFound: lA,
        EcastEntityAlreadyExists: cA,
        EcastEntityTypeError: uA,
        EcastNoSuchClient: fA,
        EcastRoomIsLocked: dA,
        EcastRoomIsFull: hA,
        EcastLicenseNotFound: pA,
        EcastLicenseCheckFailed: gA,
        EcastRoomNotFound: mA,
        EcastInvalidRole: vA,
        EcastTwitchLoginRequired: yA,
        EcastInvalidOption: _A,
        EcastPasswordRequired: EA,
        EcastInvalidPassword: bA,
        EcastNameRequired: TA,
        EcastFilterError: AA,
        EcastNoSuchFilter: OA,
        EcastPermissionDenied: SA,
        EcastNotConnected: wA,
        EcastIllegalOperation: CA,
        EcastACLChangeDenied: IA,
        EcastRoomHasEnded: $A,
        EcastEntityLocked: RA,
        EcastRateLimitExceeded: LA,
        ObservedError: zG
    };
    const JG = {
        1e3: ho,
        1001: tA,
        1002: rA,
        1003: nA,
        2e3: ft,
        2001: iA,
        2002: sA,
        2003: aA,
        2004: oA,
        2005: lA,
        2006: cA,
        2007: uA,
        2008: fA,
        2009: dA,
        2010: hA,
        2011: pA,
        2012: gA,
        2013: mA,
        2014: vA,
        2015: yA,
        2016: _A,
        2017: EA,
        2018: bA,
        2019: TA,
        2021: AA,
        2022: OA,
        2023: SA,
        2024: wA,
        2025: CA,
        2026: IA,
        2027: $A,
        2028: RA,
        2420: LA
    };
    class QG {
        constructor(t) {
            this.id = t.id, this.deviceId = t.deviceId, this.name = t.name, this.secret = t.secret, this.reconnect = t.reconnect, this.entities = t.entities, this.here = t.here, this.profile = t.profile, this.replayEnd = t.replayEnd
        }
    }
    class ZG {
        constructor(t) {
            this.id = t.id, this.userId = t.userId, this.name = t.name, this.role = t.role, this.reconnect = t.reconnect
        }
    }
    class ej {
        constructor(t) {
            this.id = t.id, this.role = t.role
        }
    }
    class tj {
        constructor(t) {
            this.to = t.to, this.from = t.from, this.body = t.body, this.userId = t.userId
        }
    }
    class rj {
        constructor(t) {
            this.id = t.id, this.banned = t.banned, this.reason = t.reason
        }
    }
    var np = {
        ClientConnected: ZG,
        ClientDisconnected: ej,
        ClientKicked: rj,
        ClientSend: tj,
        ClientWelcome: QG
    };
    class nj {
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
        CountGroup: nj
    };
    class ij {
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
        GCounter: ij
    };
    class sj {
        constructor(t) {
            this.pc = t.pc, this.opcode = t.opcode, this.result = t.result
        }
    }
    var NA = {
        Notification: sj
    };
    class aj {
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
    class oj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var ap = {
        ObjectEntity: aj,
        ObjectEcho: oj
    };
    class lj {
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
        PNCounter: lj
    };
    class cj {
        constructor(t) {
            this.pc = t.pc, this.re = t.re, this.opcode = t.opcode, this.result = t.result
        }
    }
    var PA = {
        Reply: cj
    };
    class uj {
        constructor(t) {
            this.seq = t.seq, this.opcode = t.opcode, this.params = t.params
        }
    }
    var fj = {
        Request: uj
    };
    class dj {
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
    class hj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var lp = {
        TextEntity: dj,
        TextEcho: hj
    };
    class pj {
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
    var cp = {
        TextRing: pj
    };
    class gj {
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
    var kA = {
        ArtifactEntity: gj
    };
    class mj {
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
    class vj {
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
    class yj {
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
        DoodleEntity: mj,
        DoodleLine: vj,
        DoodleLineRemoved: yj
    };
    class _j {
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
    class Ej {
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
    class bj {
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
    var DA = {
        StackEntity: _j,
        StackElement: Ej,
        StackElements: bj
    };
    class Tj {
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
    var xA = {
        DropEntity: Tj
    };
    class Aj {
        constructor(t) {
            this.message = t.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var Oj = {
        Echo: Aj
    };
    class Sj {
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
    var wj = {
        LockEntity: Sj
    };
    class Cj {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var MA = {
        OK: Cj
    };
    class Ij {
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
    var UA = {
        NumberEntity: Ij
    };
    const {
        ArtifactEntity: $j
    } = kA, {
        ClientWelcome: Rj,
        ClientConnected: Lj,
        ClientDisconnected: Nj,
        ClientKicked: Pj,
        ClientSend: kj
    } = np, {
        CountGroup: Dj
    } = ip, {
        DoodleEntity: xj,
        DoodleLine: Mj,
        DoodleLineRemoved: Uj
    } = up, {
        StackEntity: Fj,
        StackElement: Bj,
        StackElements: Gj
    } = DA, {
        DropEntity: jj
    } = xA, {
        Echo: Wj
    } = Oj, {
        LockEntity: Vj
    } = wj, {
        GCounter: Kj
    } = sp, {
        GetAudienceReply: Hj,
        RoomExit: qj,
        RoomLock: Yj
    } = Rc, {
        Notification: zj
    } = NA, {
        OK: Xj
    } = MA, {
        NumberEntity: Jj
    } = UA, {
        ObjectEcho: Qj,
        ObjectEntity: Zj
    } = ap, {
        PNCounter: Hy
    } = op, {
        Reply: e3
    } = PA, {
        TextEcho: t3,
        TextEntity: r3
    } = lp, {
        TextRing: n3
    } = cp, {
        createError: qy,
        ObservedError: i3
    } = ns;

    function Ld(e, t, r) {
        switch (e) {
            case "ok":
                return new Xj;
            case "echo":
                return new Wj({
                    message: t.message
                });
            case "lock":
                return new Vj({
                    key: t.key,
                    from: t.from
                });
            case "error":
                return qy({
                    code: t.code,
                    message: t.msg
                });
            case "error/observed":
                return new i3({
                    to: t.to,
                    error: qy({
                        code: t.error.code,
                        message: t.error.msg
                    })
                });
            case "string":
                return t;
            case "text":
                return new r3({
                    from: t.from,
                    key: t.key,
                    text: t.val,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "text/echo":
                return new t3({
                    message: t.message
                });
            case "object":
                return new Zj({
                    from: t.from,
                    key: t.key,
                    val: t.val,
                    meta: r,
                    acl: t.acl
                });
            case "object/echo":
                return new Qj({
                    message: t.message
                });
            case "drop":
                return new jj({
                    key: t.key
                });
            case "artifact":
                return new $j({
                    key: t.key,
                    artifactId: t.artifactId,
                    categoryId: t.categoryId,
                    rootId: t.rootId,
                    meta: r
                });
            case "client/connected":
                return new Lj({
                    id: t.id,
                    userId: t.userId,
                    name: t.name,
                    role: t.role,
                    reconnect: t.reconnect
                });
            case "client/disconnected":
                return new Nj({
                    id: t.id,
                    role: t.role
                });
            case "client/kicked":
                return new Pj({
                    id: t.id,
                    banned: t.banned,
                    reason: t.reason
                });
            case "client/send":
                return new kj({
                    to: t.to,
                    from: t.from,
                    body: t.body,
                    userId: t.userID
                });
            case "client/welcome": {
                let n = new Rj({
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
                        s[a] = Ld(l[0], l[1], l[2])
                    }), n.entities = s
                }
                return n
            }
            case "doodle":
                return new xj({
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
                return new Mj({
                    key: t.key,
                    line: t.val
                });
            case "doodle/line/removed":
                return new Uj({
                    key: t.key,
                    index: t.index
                });
            case "stack":
                return new Fj({
                    key: t.key,
                    size: t.size,
                    from: t.from,
                    version: t.version,
                    meta: t.meta,
                    acl: t.acl
                });
            case "stack/element":
                return new Bj({
                    key: t.key,
                    val: t.val
                });
            case "stack/elements":
                return new Gj({
                    key: t.key,
                    vals: t.vals
                });
            case "number":
                return new Jj({
                    key: t.key,
                    val: t.val,
                    restrictions: t.restrictions,
                    from: t.from,
                    version: t.version,
                    meta: r,
                    acl: t.acl
                });
            case "room/exit":
                return new qj({
                    cause: t.cause
                });
            case "room/lock":
                return new Yj;
            case "room/get-audience":
                return new Hj({
                    connections: t.connections
                });
            case "audience":
                return new Hy({
                    key: e,
                    count: t[1]
                });
            case "audience/count-group":
                return new Dj({
                    key: t.key,
                    choices: t.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new n3({
                    key: t.key,
                    elements: t.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new Kj({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new Hy({
                    key: t.key,
                    count: t.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${e}: ${JSON.stringify(t,null,2)}`), t
        }
    }

    function s3(e) {
        let t = JSON.parse(e.data),
            r = t.opcode || t.type;
        return t.re ? new e3({
            pc: t.pc,
            re: t.re,
            opcode: r,
            result: Ld(r, t.result)
        }) : new zj({
            pc: t.pc,
            opcode: r,
            result: Ld(r, t.result)
        })
    }
    var a3 = {
        parseResponseMessage: s3
    };
    const Yy = jG,
        o3 = HT,
        l3 = rp.exports,
        {
            CallError: c3
        } = ns,
        {
            ClientWelcome: u3
        } = np,
        {
            CountGroup: f3
        } = ip,
        {
            GCounter: d3
        } = sp,
        {
            Notification: zy
        } = NA,
        {
            ObjectEntity: $f
        } = ap,
        {
            PNCounter: h3
        } = op,
        {
            Reply: p3
        } = PA,
        {
            Request: g3
        } = fj,
        {
            TextEntity: Rf
        } = lp,
        {
            TextRing: m3
        } = cp,
        {
            parseResponseMessage: v3
        } = a3,
        {
            DoodleEntity: y3
        } = up,
        {
            StackEntity: _3
        } = DA,
        E3 = 1e3 + Math.floor(Math.random() * 500),
        Xy = 13e3;
    class b3 extends l3 {
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
            const r = o3.stringify(t),
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
                this.conn = new Yy(n, "ecast-v0"), this.conn.onmessage = p => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(p.data),null,2)}`);
                    const y = v3(p);
                    if (y instanceof p3) this.onReply(y);
                    else if (y instanceof zy) {
                        if (y.result instanceof u3) c = !0, this.id = y.result.id, this.deviceId = y.result.deviceId, this.entities = y.result.entities, this.secret = y.result.secret, y.result.name && (this.name = y.result.name), f(y.result);
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
                r = E3;
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
                if (r >= Xy) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                t += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: t
                }), await this.sleep(r), r = Math.min(Xy, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(t) {
            const r = t.re,
                n = this.pending[r];
            if (!n) {
                const s = new zy(t);
                s.re = r, this.emit("notification", s);
                return
            }
            delete this.pending[r], t.result instanceof c3 ? n.reject(t.result) : n.resolve(t.result)
        }
        onNotification(t) {
            typeof t.result.whenReceived == "function" && t.result.whenReceived(this), this.emit("notification", t), this.emit(t.opcode, t.result)
        }
        send(t, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== Yy.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                s = new g3({
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
            return this.entities[t] = new $f({
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
            return this.entities[t] = new $f({
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
            return this.entities[t] = new $f({
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
            const a = await this.send("text/set", s);
            return this.entities[t] = new Rf({
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
                colors: a,
                live: l,
                maxPoints: c,
                size: f,
                weights: d
            } = r;
            s && (n.acl = s), a && (n.colors = a), n.live = l, c != null && (n.maxPoints = c), f && (n.size = f), d && (n.weights = d);
            const p = await this.send("doodle/create", n);
            return this.entities[t] = new y3({
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
            return this.entities[t] = new _3({
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
            return this.entities[t] = new f3({
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
            return this.entities[t] = new d3({
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
            return this.entities[t] = new h3({
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
            return this.entities[t] = new m3({
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
    var T3 = {
        WSClient: b3
    };
    const {
        APIClient: A3
    } = GG, {
        WSClient: O3
    } = T3, {
        CreateRoomReply: S3,
        GetRoomReply: w3
    } = Rc, {
        ClientWelcome: C3,
        ClientDisconnected: I3
    } = np, {
        ArtifactEntity: $3
    } = kA, {
        GCounter: R3
    } = sp, {
        NumberEntity: L3
    } = UA, {
        TextEntity: N3
    } = lp, {
        DoodleEntity: P3
    } = up, {
        ObjectEntity: k3
    } = ap, {
        CountGroup: D3
    } = ip, {
        DropEntity: x3
    } = xA, {
        OK: M3
    } = MA, {
        RoomExit: U3
    } = Rc, {
        TextRing: F3
    } = cp, {
        PNCounter: B3
    } = op;
    var Sr = {
        APIClient: A3,
        WSClient: O3,
        ClientWelcome: C3,
        CreateRoomReply: S3,
        DropEntity: x3,
        GetRoomReply: w3,
        ClientDisconnected: I3,
        RoomExit: U3,
        OK: M3,
        ArtifactEntity: $3,
        DoodleEntity: P3,
        NumberEntity: L3,
        CountGroup: D3,
        GCounter: R3,
        ObjectEntity: k3,
        PNCounter: B3,
        TextEntity: N3,
        TextRing: F3
    };
    const G3 = [{
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
        Nd = e => G3.find(t => t.tag === e || t.categoryId === e);

    function Pd(...e) {
        console.log(...e)
    }
    class j3 {
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
            Pd("[Debug] pushEntity", t), t instanceof Sr.ArtifactEntity ? this.items.push({
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
            const n = Nd(this.room.appTag),
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
                    const G = Nd(this.room.appTag);
                    w.username = `DebugRecorder ${G?G.name:this.room.appTag}`
                }
                const M = await (await fetch(d, {
                    method: "POST",
                    body: JSON.stringify(w)
                })).text();
                Pd("[Debug] sendToSlack", M)
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

    function W3(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Jy = {
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

            function c(S) {
                try {
                    return decodeURIComponent(S.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function f(S) {
                try {
                    return encodeURIComponent(S)
                } catch {
                    return null
                }
            }

            function d(S) {
                for (var T = /([^=?#&]+)=?([^&]*)/g, L = {}, A; A = T.exec(S);) {
                    var N = c(A[1]),
                        Z = c(A[2]);
                    N === null || Z === null || N in L || (L[N] = Z)
                }
                return L
            }

            function p(S, T) {
                T = T || "";
                var L = [],
                    A, N;
                typeof T != "string" && (T = "?");
                for (N in S)
                    if (a.call(S, N)) {
                        if (A = S[N], !A && (A === null || A === l || isNaN(A)) && (A = ""), N = f(N), A = f(A), N === null || A === null) continue;
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

            function H(S) {
                return (S || "").toString().replace(C, "")
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

            function j(S) {
                var T;
                typeof window < "u" ? T = window : typeof n < "u" ? T = n : typeof self < "u" ? T = self : T = {};
                var L = T.location || {};
                S = S || L;
                var A = {},
                    N = typeof S,
                    Z;
                if (S.protocol === "blob:") A = new ue(unescape(S.pathname), {});
                else if (N === "string") {
                    A = new ue(S, {});
                    for (Z in V) delete A[Z]
                } else if (N === "object") {
                    for (Z in S) Z in V || (A[Z] = S[Z]);
                    A.slashes === void 0 && (A.slashes = P.test(S.href))
                }
                return A
            }

            function Q(S) {
                return S === "file:" || S === "ftp:" || S === "http:" || S === "https:" || S === "ws:" || S === "wss:"
            }

            function oe(S, T) {
                S = H(S), T = T || {};
                var L = M.exec(S),
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

            function le(S, T) {
                if (S === "") return T;
                for (var L = (T || "/").split("/").slice(0, -1).concat(S.split("/")), A = L.length, N = L[A - 1], Z = !1, ne = 0; A--;) L[A] === "." ? L.splice(A, 1) : L[A] === ".." ? (L.splice(A, 1), ne++) : ne && (A === 0 && (Z = !0), L.splice(A, 1), ne--);
                return Z && L.unshift(""), (N === "." || N === "..") && L.push(""), L.join("/")
            }

            function ue(S, T, L) {
                if (S = H(S), !(this instanceof ue)) return new ue(S, T, L);
                var A, N, Z, ne, Ee, Ae, dt = z.slice(),
                    sr = typeof T,
                    xe = this,
                    pa = 0;
                for (sr !== "object" && sr !== "string" && (L = T, T = null), L && typeof L != "function" && (L = w.parse), T = j(T), N = oe(S || "", T), A = !N.protocol && !N.slashes, xe.slashes = N.slashes || A && T.slashes, xe.protocol = N.protocol || T.protocol || "", S = N.rest, (xe.protocol === "file:" || !N.slashes && (N.protocol || N.slashesCount < 2 || !Q(xe.protocol))) && (dt[3] = [/(.*)/, "pathname"]); pa < dt.length; pa++) {
                    if (ne = dt[pa], typeof ne == "function") {
                        S = ne(S, xe);
                        continue
                    }
                    Z = ne[0], Ae = ne[1], Z !== Z ? xe[Ae] = S : typeof Z == "string" ? ~(Ee = S.indexOf(Z)) && (typeof ne[2] == "number" ? (xe[Ae] = S.slice(0, Ee), S = S.slice(Ee + ne[2])) : (xe[Ae] = S.slice(Ee), S = S.slice(0, Ee))) : (Ee = Z.exec(S)) && (xe[Ae] = Ee[1], S = S.slice(0, Ee.index)), xe[Ae] = xe[Ae] || A && ne[3] && T[Ae] || "", ne[4] && (xe[Ae] = xe[Ae].toLowerCase())
                }
                L && (xe.query = L(xe.query)), A && T.slashes && xe.pathname.charAt(0) !== "/" && (xe.pathname !== "" || T.pathname !== "") && (xe.pathname = le(xe.pathname, T.pathname)), xe.pathname.charAt(0) !== "/" && Q(xe.protocol) && (xe.pathname = "/" + xe.pathname), s(xe.port, xe.protocol) || (xe.host = xe.hostname, xe.port = ""), xe.username = xe.password = "", xe.auth && (ne = xe.auth.split(":"), xe.username = ne[0] || "", xe.password = ne[1] || ""), xe.origin = xe.protocol !== "file:" && Q(xe.protocol) && xe.host ? xe.protocol + "//" + xe.host : "null", xe.href = xe.toString()
            }

            function $e(S, T, L) {
                var A = this;
                switch (S) {
                    case "query":
                        typeof T == "string" && T.length && (T = (L || w.parse)(T)), A[S] = T;
                        break;
                    case "port":
                        A[S] = T, s(T, A.protocol) ? T && (A.host = A.hostname + ":" + T) : (A.host = A.hostname, A[S] = "");
                        break;
                    case "hostname":
                        A[S] = T, A.port && (T += ":" + A.port), A.host = T;
                        break;
                    case "host":
                        A[S] = T, /:\d+$/.test(T) ? (T = T.split(":"), A.port = T.pop(), A.hostname = T.join(":")) : (A.hostname = T, A.port = "");
                        break;
                    case "protocol":
                        A.protocol = T.toLowerCase(), A.slashes = !L;
                        break;
                    case "pathname":
                    case "hash":
                        if (T) {
                            var N = S === "pathname" ? "/" : "#";
                            A[S] = T.charAt(0) !== N ? N + T : T
                        } else A[S] = T;
                        break;
                    default:
                        A[S] = T
                }
                for (var Z = 0; Z < z.length; Z++) {
                    var ne = z[Z];
                    ne[4] && (A[ne[1]] = A[ne[1]].toLowerCase())
                }
                return A.origin = A.protocol !== "file:" && Q(A.protocol) && A.host ? A.protocol + "//" + A.host : "null", A.href = A.toString(), A
            }

            function Ie(S) {
                (!S || typeof S != "function") && (S = w.stringify);
                var T, L = this,
                    A = L.protocol;
                A && A.charAt(A.length - 1) !== ":" && (A += ":");
                var N = A + (L.slashes || Q(L.protocol) ? "//" : "");
                return L.username && (N += L.username, L.password && (N += ":" + L.password), N += "@"), N += L.host + L.pathname, T = typeof L.query == "object" ? S(L.query) : L.query, T && (N += T.charAt(0) !== "?" ? "?" + T : T), L.hash && (N += L.hash), N
            }
            ue.prototype = {
                set: $e,
                toString: Ie
            }, ue.extractProtocol = oe, ue.location = j, ue.trimLeft = H, ue.qs = w;
            var fe = ue;

            function Ce(S, T) {
                setTimeout(function(L) {
                    return S.call(L)
                }, 4, T)
            }

            function U(S, T) {
                typeof process < "u" && console[S].call(null, T)
            }

            function ie(S, T) {
                S === void 0 && (S = []);
                var L = [];
                return S.forEach(function(A) {
                    T(A) || L.push(A)
                }), L
            }

            function de(S, T) {
                S === void 0 && (S = []);
                var L = [];
                return S.forEach(function(A) {
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

            function ye(S) {
                var T = S.indexOf("?");
                return T >= 0 ? S.slice(0, T) : S
            }
            var Se = function() {
                this.urlMap = {}
            };
            Se.prototype.attachWebSocket = function(T, L) {
                var A = ye(L),
                    N = this.urlMap[A];
                if (N && N.server && N.websockets.indexOf(T) === -1) return N.websockets.push(T), N.server
            }, Se.prototype.addMembershipToRoom = function(T, L) {
                var A = this.urlMap[ye(T.url)];
                A && A.server && A.websockets.indexOf(T) !== -1 && (A.roomMemberships[L] || (A.roomMemberships[L] = []), A.roomMemberships[L].push(T))
            }, Se.prototype.attachServer = function(T, L) {
                var A = ye(L),
                    N = this.urlMap[A];
                if (!N) return this.urlMap[A] = {
                    server: T,
                    websockets: [],
                    roomMemberships: {}
                }, T
            }, Se.prototype.serverLookup = function(T) {
                var L = ye(T),
                    A = this.urlMap[L];
                if (A) return A.server
            }, Se.prototype.websocketsLookup = function(T, L, A) {
                var N = ye(T),
                    Z, ne = this.urlMap[N];
                if (Z = ne ? ne.websockets : [], L) {
                    var Ee = ne.roomMemberships[L];
                    Z = Ee || []
                }
                return A ? Z.filter(function(Ae) {
                    return Ae !== A
                }) : Z
            }, Se.prototype.removeServer = function(T) {
                delete this.urlMap[ye(T)]
            }, Se.prototype.removeWebSocket = function(T, L) {
                var A = ye(L),
                    N = this.urlMap[A];
                N && (N.websockets = ie(N.websockets, function(Z) {
                    return Z === T
                }))
            }, Se.prototype.removeMembershipFromRoom = function(T, L) {
                var A = this.urlMap[ye(T.url)],
                    N = A.roomMemberships[L];
                A && N !== null && (A.roomMemberships[L] = ie(N, function(Z) {
                    return Z === T
                }))
            };
            var Ue = new Se,
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
                $t = function() {};
            $t.prototype.stopPropagation = function() {}, $t.prototype.stopImmediatePropagation = function() {}, $t.prototype.initEvent = function(T, L, A) {
                T === void 0 && (T = "undefined"), L === void 0 && (L = !1), A === void 0 && (A = !1), this.type = "" + T, this.bubbles = Boolean(L), this.cancelable = Boolean(A)
            };
            var Cr = function(S) {
                    function T(L, A) {
                        if (A === void 0 && (A = {}), S.call(this), !L) throw new TypeError(nt.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(nt.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var N = A.bubbles,
                            Z = A.cancelable;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = N ? Boolean(N) : !1
                    }
                    return S && (T.__proto__ = S), T.prototype = Object.create(S && S.prototype), T.prototype.constructor = T, T
                }($t),
                ir = function(S) {
                    function T(L, A) {
                        if (A === void 0 && (A = {}), S.call(this), !L) throw new TypeError(nt.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(nt.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var N = A.bubbles,
                            Z = A.cancelable,
                            ne = A.data,
                            Ee = A.origin,
                            Ae = A.lastEventId,
                            dt = A.ports;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.canncelBubble = !1, this.bubbles = N ? Boolean(N) : !1, this.origin = "" + Ee, this.ports = typeof dt > "u" ? null : dt, this.data = typeof ne > "u" ? null : ne, this.lastEventId = "" + (Ae || "")
                    }
                    return S && (T.__proto__ = S), T.prototype = Object.create(S && S.prototype), T.prototype.constructor = T, T
                }($t),
                yr = function(S) {
                    function T(L, A) {
                        if (A === void 0 && (A = {}), S.call(this), !L) throw new TypeError(nt.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof A != "object") throw new TypeError(nt.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var N = A.bubbles,
                            Z = A.cancelable,
                            ne = A.code,
                            Ee = A.reason,
                            Ae = A.wasClean;
                        this.type = "" + L, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = Z ? Boolean(Z) : !1, this.cancelBubble = !1, this.bubbles = N ? Boolean(N) : !1, this.code = typeof ne == "number" ? parseInt(ne, 10) : 0, this.reason = "" + (Ee || ""), this.wasClean = Ae ? Boolean(Ae) : !1
                    }
                    return S && (T.__proto__ = S), T.prototype = Object.create(S && S.prototype), T.prototype.constructor = T, T
                }($t);

            function lt(S) {
                var T = S.type,
                    L = S.target,
                    A = new Cr(T);
                return L && (A.target = L, A.srcElement = L, A.currentTarget = L), A
            }

            function St(S) {
                var T = S.type,
                    L = S.origin,
                    A = S.data,
                    N = S.target,
                    Z = new ir(T, {
                        data: A,
                        origin: L
                    });
                return N && (Z.target = N, Z.srcElement = N, Z.currentTarget = N), Z
            }

            function ct(S) {
                var T = S.code,
                    L = S.reason,
                    A = S.type,
                    N = S.target,
                    Z = S.wasClean;
                Z || (Z = T === je.CLOSE_NORMAL || T === je.CLOSE_NO_STATUS);
                var ne = new yr(A, {
                    code: T,
                    reason: L,
                    wasClean: Z
                });
                return N && (ne.target = N, ne.srcElement = N, ne.currentTarget = N), ne
            }

            function Dt(S, T, L) {
                S.readyState = Y.CLOSING;
                var A = Ue.serverLookup(S.url),
                    N = ct({
                        type: "close",
                        target: S.target,
                        code: T,
                        reason: L
                    }),
                    Z = ct({
                        type: "server::close",
                        target: S,
                        code: T,
                        reason: L
                    });
                Ce(function() {
                    Ue.removeWebSocket(S, S.url), S.readyState = Y.CLOSED, S.dispatchEvent(N), S.dispatchEvent(Z), A && A.dispatchEvent(N, A)
                }, S)
            }

            function Kt(S, T, L) {
                S.readyState = Y.CLOSING;
                var A = Ue.serverLookup(S.url),
                    N = ct({
                        type: "close",
                        target: S.target,
                        code: T,
                        reason: L,
                        wasClean: !1
                    }),
                    Z = ct({
                        type: "server::close",
                        target: S,
                        code: T,
                        reason: L,
                        wasClean: !1
                    }),
                    ne = lt({
                        type: "error",
                        target: S.target
                    });
                Ce(function() {
                    Ue.removeWebSocket(S, S.url), S.readyState = Y.CLOSED, S.dispatchEvent(ne), S.dispatchEvent(N), S.dispatchEvent(Z), A && A.dispatchEvent(N, A)
                }, S)
            }

            function xt(S) {
                return Object.prototype.toString.call(S) !== "[object Blob]" && !(S instanceof ArrayBuffer) && (S = String(S)), S
            }
            var m = new WeakMap;

            function g(S) {
                if (m.has(S)) return m.get(S);
                var T = new Proxy(S, {
                    get: function(A, N) {
                        return N === "close" ? function(ne) {
                            ne === void 0 && (ne = {});
                            var Ee = ne.code || je.CLOSE_NORMAL,
                                Ae = ne.reason || "";
                            Dt(T, Ee, Ae)
                        } : N === "send" ? function(ne) {
                            ne = xt(ne), S.dispatchEvent(St({
                                type: "message",
                                data: ne,
                                origin: this.url,
                                target: S
                            }))
                        } : N === "on" ? function(ne, Ee) {
                            S.addEventListener("server::" + ne, Ee)
                        } : N === "target" ? S : A[N]
                    }
                });
                return m.set(S, T), T
            }

            function O(S) {
                var T = encodeURIComponent(S).match(/%[89ABab]/g);
                return S.length + (T ? T.length : 0)
            }

            function x(S) {
                var T = new fe(S),
                    L = T.pathname,
                    A = T.protocol,
                    N = T.hash;
                if (!S) throw new TypeError(nt.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (L || (T.pathname = "/"), A === "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL '" + T.toString() + "' is invalid.");
                if (A !== "ws:" && A !== "wss:") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + A + "' is not allowed.");
                if (N !== "") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + N + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return T.toString()
            }

            function B(S) {
                if (S === void 0 && (S = []), !Array.isArray(S) && typeof S != "string") throw new SyntaxError(nt.CONSTRUCTOR_ERROR + " The subprotocol '" + S.toString() + "' is invalid.");
                typeof S == "string" && (S = [S]);
                var T = S.map(function(A) {
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
                return S
            }
            var Y = function(S) {
                function T(A, N) {
                    S.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = x(A), N = B(N), this.protocol = N[0] || "", this.binaryType = "blob", this.readyState = T.CONNECTING;
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
                                        sr = N.indexOf(Ae) !== -1;
                                    if (dt && !sr) {
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
                S && (T.__proto__ = S), T.prototype = Object.create(S && S.prototype), T.prototype.constructor = T;
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
                            data: xt(N)
                        }),
                        Ee = Ue.serverLookup(this.url);
                    Ee && Ce(function() {
                        Z.dispatchEvent(ne, N)
                    }, Ee)
                }, T.prototype.close = function(N, Z) {
                    if (N !== void 0 && (typeof N != "number" || N !== 1e3 && (N < 3e3 || N > 4999))) throw new TypeError(nt.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + N + " is neither.");
                    if (Z !== void 0) {
                        var ne = O(Z);
                        if (ne > 123) throw new SyntaxError(nt.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === T.CLOSING || this.readyState === T.CLOSED)) {
                        var Ee = g(this);
                        this.readyState === T.CONNECTING ? Kt(Ee, N || je.CLOSE_ABNORMAL, Z) : Dt(Ee, N || je.CLOSE_NO_STATUS, Z)
                    }
                }, Object.defineProperties(T.prototype, L), T
            }(be);
            Y.CONNECTING = 0, Y.prototype.CONNECTING = Y.CONNECTING, Y.OPEN = 1, Y.prototype.OPEN = Y.OPEN, Y.CLOSING = 2, Y.prototype.CLOSING = Y.CLOSING, Y.CLOSED = 3, Y.prototype.CLOSED = Y.CLOSED;
            var ce = function(S) {
                return S.reduce(function(T, L) {
                    return T.indexOf(L) > -1 ? T : T.concat(L)
                }, [])
            };

            function se() {
                return typeof window < "u" ? window : typeof process == "object" && typeof W3 == "function" && typeof kt == "object" ? kt : this
            }
            var re = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                $ = function(S) {
                    function T(L, A) {
                        A === void 0 && (A = re), S.call(this);
                        var N = new fe(L);
                        N.pathname || (N.pathname = "/"), this.url = N.toString(), this.originalWebSocket = null;
                        var Z = Ue.attachServer(this, this.url);
                        if (!Z) throw this.dispatchEvent(lt({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, re, A), this.options.mock && this.mockWebsocket()
                    }
                    return S && (T.__proto__ = S), T.prototype = Object.create(S && S.prototype), T.prototype.constructor = T, T.prototype.mockWebsocket = function() {
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
                            return xt(Ae)
                        })) : N = xt(N), Ee.forEach(function(Ae) {
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
                            to: function(dt, sr) {
                                return ne.to.call(ne, dt, sr, Ae)
                            },
                            emit: function(sr, xe) {
                                Ee.emit(sr, xe, {
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
            var K = function(S) {
                function T(A, N) {
                    var Z = this;
                    A === void 0 && (A = "socket.io"), N === void 0 && (N = ""), S.call(this), this.binaryType = "blob";
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
                S && (T.__proto__ = S), T.prototype = Object.create(S && S.prototype), T.prototype.constructor = T;
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
                    dt.forEach(function(sr) {
                        ne.length > 0 ? sr.apply(Z, ne) : sr.call(Z, N.data ? N.data : N)
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
                De = he;
            r.Server = pe, r.WebSocket = Re, r.SocketIO = De, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Jy, Jy.exports);
    var FA = {
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
    })(FA);
    const BA = FA.exports;
    class V3 {
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
                x: er.toPrecision(n.x, this.precision),
                y: er.toPrecision(n.y, this.precision)
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
                points: BA(this.points, .5).map(r => ({
                    x: er.toPrecision(r.x, this.precision),
                    y: er.toPrecision(r.y, this.precision)
                })),
                weight: this.weight
            };
            return this.isInteracting = !1, this.points = [], t
        }
    }
    class K3 {
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
                n = BA(this.currentLine.points);
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
    class H3 {
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
            r.width && (this.width = r.width), r.height && (this.height = r.height), this.stageElement = t, this.setupElements(), this.setupEvents(), r.InteractCanvas ? this.interactCanvas = new r.InteractCanvas(t, this.width, this.height, r) : this.interactCanvas = new K3(t, this.width, this.height, r)
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
    const q3 = [169, 174, 8252, 8265, 8482, 8505, 8596, 8597, 8598, 8599, 8600, 8601, 8617, 8618, 9e3, 8986, 8987, 9167, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9209, 9210, 9410, 9642, 9643, 9654, 9664, 9723, 9724, 9725, 9726, 9728, 9729, 9730, 9731, 9732, 9742, 9745, 9748, 9749, 9752, 9757, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784, 9785, 9786, 9792, 9794, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9824, 9827, 9829, 9830, 9832, 9851, 9854, 9855, 9874, 9875, 9876, 9877, 9878, 9879, 9881, 9883, 9884, 9888, 9823, 9889, 9895, 9898, 9899, 9904, 9905, 9917, 9918, 9924, 9925, 9928, 9934, 9935, 9937, 9939, 9940, 9961, 9962, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9981, 9986, 9989, 9992, 9993, 9994, 9995, 9996, 9997, 9999, 10002, 10004, 10006, 10013, 10017, 10024, 10035, 10036, 10052, 10055, 10060, 10062, 10067, 10068, 10069, 10071, 10083, 10084, 10085, 10133, 10134, 10135, 10145, 10160, 10175, 10548, 10549, 11013, 11014, 11015, 11035, 11036, 11088, 11093, 12336, 12349, 12951, 12953, 58634],
        Y3 = [128104, 128105, 129489],
        GA = [127995, 127996, 127997, 127998, 127999, 129456, 129457, 129458, 129459],
        z3 = 9977,
        X3 = 8419,
        J3 = 8220,
        Q3 = 8221,
        Lf = 65039,
        Z3 = 127987,
        e8 = 127988,
        kl = 8205,
        kd = (e, t) => {
            const r = parseInt(e.charCodeAt(0).toString(16), 16),
                n = parseInt(t.charCodeAt(0).toString(16), 16),
                s = (r - 55296) * 1024 + n - 56320 + 65536;
            return parseInt(s.toString(16), 16)
        },
        t8 = e => {
            const t = parseInt(e.charCodeAt(0).toString(16), 16);
            return q3.includes(t)
        },
        an = (e, t) => e ? parseInt(e.charCodeAt(0).toString(16), 16) === t : !1,
        jA = e => /[\uD800-\uDB7F]/.test(e),
        r8 = e => /[\u0023\u002A\u0030-\u0039]/.test(e),
        Qy = e => {
            const t = parseInt(e.toString(16), 16);
            return t >= 127462 && t <= 127487
        },
        Zy = (e, t) => {
            let r = "",
                n = !0;
            for (; n && t < e.length;) {
                const s = e[t];
                if (jA(s)) {
                    const a = kd(s, e[t + 1]);
                    GA.includes(a) ? (r = r + s + e[t + 1], t += 2) : n = !1
                } else an(s, kl) ? (r = r + s + e[t + 1] + e[t + 2], t += 3) : n = !1
            }
            return {
                modifyingChars: r,
                newPosition: t
            }
        },
        n8 = (e, t) => {
            if (!/[^\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF\u2018-\u2019\u2026]/gi.test(e)) return t && e && e.length > t && (e = e.substring(0, t)), {
                result: e,
                charCount: e.length
            };
            const n = e.split("");
            let s = 0,
                a = "";
            for (let l = 0; l < n.length && (t ? s < t : !0); l += 1) {
                const c = n[l];
                if (/[\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF\u2018-\u2019\u2026]/gi.test(c)) a += c, s += 1;
                else if (t8(c)) {
                    if (a += c, an(c, z3)) {
                        l += 1;
                        const {
                            modifyingChars: d,
                            newPosition: p
                        } = Zy(n, l);
                        a += d, l = p - 1
                    }
                    s += 1;
                    continue
                } else if (an(c, J3) || an(c, Q3)) {
                    l += 1, a += '"', s += 1;
                    continue
                } else if (jA(c)) {
                    const d = n[l + 1];
                    a += c + d, l += 1;
                    const p = kd(c, d);
                    if (Y3.includes(p)) {
                        const {
                            modifyingChars: y,
                            newPosition: b
                        } = Zy(n, l + 1);
                        a += y, s += 1, l = b - 1;
                        continue
                    }
                    if (Qy(p)) {
                        const y = kd(n[l + 1], n[l + 2]);
                        Qy(y) && (a += n[l + 1] + n[l + 2], l += 1), s += 1;
                        continue
                    }
                    if (p === e8) {
                        const y = n[l + 1];
                        an(y, kl) && (a += y + n[l + 2] + n[l + 3], l += 3), s += 1;
                        continue
                    }
                    if (p === Z3) {
                        const y = n[l + 1];
                        an(y, Lf) && (l += 1, an(n[l + 1], kl) && (a += y + n[l + 1] + n[l + 2] + n[l + 3], l += 3)), s += 1;
                        continue
                    }
                    GA.includes(p) || (s += 1);
                    continue
                } else if (r8(c)) {
                    const d = n[l + 1];
                    d && an(d, Lf) ? (a += c + n[l + 1] + n[l + 2], l += 2) : a += c, s += 1;
                    continue
                } else(an(c, Lf) || an(c, kl) || an(c, X3)) && (a += c)
            }
            return {
                result: a,
                charCount: s
            }
        };
    class e_ {
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
            const n = Nd(r.room.appTag),
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
                Pd("[Feedback] sendToSlack", w)
            } catch (b) {
                console.error("[Feedback] sendToSlack", b)
            }
        }
    }
    class WA {
        static withTypes(t, r) {
            let n = t;
            return r.forEach(s => {
                s === "html" && (n = this.html(n)), s === "username" && (n = this.username(n)), s === "emoji" && (n = this.emoji(n)), s === "input" && (n = this.input(n))
            }), n
        }
        static html(t) {
            if (String(t).match(/<fart>/g)) {
                const n = new Audio(new URL("main/tjsp/quiplash3/assets/4af6cbea.wav", self.location).href);
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
    const i8 = {
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
        s8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "prompts hidden on players\u2019 devices",
                VISIBILITY_CONTROLLER_ON: "prompts shown on players\u2019 devices",
                VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                VISIBILITY_SCREEN_ON: "prompts shown on game screen"
            }
        },
        a8 = {
            DISCONNECTED: "You have been disconnected.",
            DRAWING_NOTHING: "You have to draw something!",
            PLAYER_KICKED: "You have been kicked from the game by a moderator.",
            ROOM_DESTROYED: "Thanks for playing!",
            ROOM_DISCONNECTED: "Disconnected",
            TEXT_NAUGHTY: "I\u2019m afraid you can\u2019t write that. Please be respectful of other players.",
            TEXT_NOTHING: "You can\u2019t enter nothing!",
            TITLE: "Error"
        },
        o8 = "LOADING",
        l8 = {
            JOINED_COUNT: "{count} of {maxPlayers} players joined",
            PLAYERS_NEEDED: "1 player needed to start | {count} players needed to start",
            WAITING_FOR_VIP: "Waiting for {name} to start the game",
            WAITING_FOR_GAMEPAD: "Waiting for the game to start",
            GAME_STARTING: "Game is starting",
            BUTTON_START: "Press to Start",
            BUTTON_CANCEL: "Press to Cancel"
        },
        c8 = {
            GALLERY_LINK: "Visit the Gallery",
            PLAY_AGAIN: "Play again?",
            BUTTON_SAME_PLAYERS: "Same Players",
            BUTTON_NEW_PLAYERS: "New Players"
        },
        u8 = {
            AND: "AND",
            OR: "OR"
        },
        f8 = {
            BUTTON_SKIP: "Skip",
            BUTTON_NEXT: "Next",
            BUTTON_DONE: "Let\u2019s Go!"
        },
        d8 = {
            NAME: "AUDIENCE"
        },
        h8 = {
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
        p8 = {
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
        g8 = {
            ACTION: i8,
            ALT: s8,
            ERROR: a8,
            LOADING: o8,
            LOBBY: l8,
            POST_GAME: c8,
            SEPARATOR: u8,
            TUTORIAL: f8,
            AUDIENCE: d8,
            UGC: h8,
            TOAST: p8
        },
        m8 = {
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
        v8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "sujets non affich\xE9s sur les appareils des joueurs",
                VISIBILITY_CONTROLLER_ON: "sujets affich\xE9s sur les appareils des joueurs",
                VISIBILITY_SCREEN_OFF: "sujets non affich\xE9s sur l'\xE9cran de jeu",
                VISIBILITY_SCREEN_ON: "sujets affich\xE9s sur l'\xE9cran de jeu"
            }
        },
        y8 = {
            DISCONNECTED: "Vous avez \xE9t\xE9 d\xE9connect\xE9(e).",
            DRAWING_NOTHING: "Vous devez dessiner quelque chose\xA0!",
            PLAYER_KICKED: "Vous avez \xE9t\xE9 \xE9ject\xE9(e) de la partie par un mod\xE9rateur.",
            ROOM_DESTROYED: "Merci d'avoir jou\xE9\xA0!",
            ROOM_DISCONNECTED: "D\xE9connexion",
            TEXT_NAUGHTY: "Je crains que vous ne puissiez pas \xE9crire \xE7a. Respectez les autres joueurs.",
            TEXT_NOTHING: "Vous ne pouvez pas ne rien entrer",
            TITLE: "Erreur"
        },
        _8 = "CHARGEMENT",
        E8 = {
            JOINED_COUNT: "1\xA0joueur sur {maxPlayers} a rejoint la partie | {count}\xA0joueurs sur {maxPlayers} ont rejoint la partie",
            PLAYERS_NEEDED: "1\xA0joueur n\xE9cessaire pour commencer | {count}\xA0joueurs n\xE9cessaires pour commencer",
            WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
            WAITING_FOR_GAMEPAD: "En attente du d\xE9but de la partie",
            GAME_STARTING: "La partie commence",
            BUTTON_START: "Appuyer pour commencer",
            BUTTON_CANCEL: "Appuyer pour annuler"
        },
        b8 = {
            GALLERY_LINK: "Visiter la galerie",
            PLAY_AGAIN: "Rejouer\xA0?",
            BUTTON_SAME_PLAYERS: "Les m\xEAmes joueurs",
            BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
        },
        T8 = {
            AND: "ET",
            OR: "OU"
        },
        A8 = {
            BUTTON_SKIP: "Passer",
            BUTTON_NEXT: "Suivant",
            BUTTON_DONE: "Allons-y\xA0!"
        },
        O8 = {
            NAME: "SPECTATEURS"
        },
        S8 = {
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
        w8 = {
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
        C8 = {
            ACTION: m8,
            ALT: v8,
            ERROR: y8,
            LOADING: _8,
            LOBBY: E8,
            POST_GAME: b8,
            SEPARATOR: T8,
            TUTORIAL: A8,
            AUDIENCE: O8,
            UGC: S8,
            TOAST: w8
        },
        I8 = {
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
        $8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "definizioni nascoste sui dispositivi dei giocatori",
                VISIBILITY_CONTROLLER_ON: "definizioni visualizzate sui dispositivi dei giocatori",
                VISIBILITY_SCREEN_OFF: "definizioni nascoste sullo schermo di gioco",
                VISIBILITY_SCREEN_ON: "definizioni visualizzate sullo schermo di gioco"
            }
        },
        R8 = {
            DISCONNECTED: "\xC8 stata effettuata la disconnessione.",
            DRAWING_NOTHING: "Devi disegnare qualcosa!",
            PLAYER_KICKED: "Un moderatore ti ha cacciato dalla partita.",
            ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
            ROOM_DISCONNECTED: "Disconnessione effettuata",
            TEXT_NAUGHTY: "Purtroppo non puoi scrivere questa cosa. Abbi rispetto per gli altri giocatori.",
            TEXT_NOTHING: "Devi per forza inserire qualcosa!",
            TITLE: "Errore"
        },
        L8 = "CARICAMENTO",
        N8 = {
            JOINED_COUNT: "Sta partecipando 1 giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
            PLAYERS_NEEDED: "Manca 1 giocatore per iniziare | Mancano {count} giocatori per iniziare",
            WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
            WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
            GAME_STARTING: "La partita sta per iniziare",
            BUTTON_START: "Premi per avviare",
            BUTTON_CANCEL: "Premi per annullare"
        },
        P8 = {
            GALLERY_LINK: "Visita la galleria",
            PLAY_AGAIN: "Vuoi giocare di nuovo?",
            BUTTON_SAME_PLAYERS: "Stessi giocatori",
            BUTTON_NEW_PLAYERS: "Nuovi giocatori"
        },
        k8 = {
            AND: "E",
            OR: "O"
        },
        D8 = {
            BUTTON_SKIP: "Salta",
            BUTTON_NEXT: "Avanti",
            BUTTON_DONE: "Iniziamo!"
        },
        x8 = {
            NAME: "PUBBLICO"
        },
        M8 = {
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
        U8 = {
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
        F8 = {
            ACTION: I8,
            ALT: $8,
            ERROR: R8,
            LOADING: L8,
            LOBBY: N8,
            POST_GAME: P8,
            SEPARATOR: k8,
            TUTORIAL: D8,
            AUDIENCE: x8,
            UGC: M8,
            TOAST: U8
        },
        B8 = {
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
        G8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "Prompts auf Spielerger\xE4ten verborgen",
                VISIBILITY_CONTROLLER_ON: "Prompts auf Spielerger\xE4ten angezeigt",
                VISIBILITY_SCREEN_OFF: "Prompts auf Spielbildschirm verborgen",
                VISIBILITY_SCREEN_ON: "Prompts auf Spielbildschirm angezeigt"
            }
        },
        j8 = {
            DISCONNECTED: "Deine Verbindung wurde getrennt.",
            DRAWING_NOTHING: "Du musst irgendwas zeichnen!",
            PLAYER_KICKED: "Du wurdest von einem Moderator gekickt.",
            ROOM_DESTROYED: "Danke f\xFCrs Spielen!",
            ROOM_DISCONNECTED: "Verbindung getrennt",
            TEXT_NAUGHTY: "Das kannst du leider nicht schreiben. Bitte nimm R\xFCcksicht auf deine Mitspieler.",
            TEXT_NOTHING: "Du musst etwas eingeben!",
            TITLE: "Fehler"
        },
        W8 = "LADE",
        V8 = {
            JOINED_COUNT: "{count} von {maxPlayers} Spielern sind beigetreten",
            PLAYERS_NEEDED: "{count} Spieler zum Starten ben\xF6tigt",
            WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
            WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
            GAME_STARTING: "Das Spiel beginnt",
            BUTTON_START: "Zum Starten dr\xFCcken",
            BUTTON_CANCEL: "Zum Abbrechen dr\xFCcken"
        },
        K8 = {
            GALLERY_LINK: "Galerie besuchen",
            PLAY_AGAIN: "Erneut spielen?",
            BUTTON_SAME_PLAYERS: "Selbe Spieler",
            BUTTON_NEW_PLAYERS: "Neue Spieler"
        },
        H8 = {
            AND: "UND",
            OR: "ODER"
        },
        q8 = {
            BUTTON_SKIP: "\xDCberspringen",
            BUTTON_NEXT: "Weiter",
            BUTTON_DONE: "Los geht's!"
        },
        Y8 = {
            NAME: "PUBLIKUM"
        },
        z8 = {
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
        X8 = {
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
        J8 = {
            ACTION: B8,
            ALT: G8,
            ERROR: j8,
            LOADING: W8,
            LOBBY: V8,
            POST_GAME: K8,
            SEPARATOR: H8,
            TUTORIAL: q8,
            AUDIENCE: Y8,
            UGC: z8,
            TOAST: X8
        },
        Q8 = {
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
        Z8 = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "los enunciados no se muestran en el dispositivo del jugador",
                VISIBILITY_CONTROLLER_ON: "los enunciados se muestran en el dispositivo del jugador",
                VISIBILITY_SCREEN_OFF: "los enunciados no se muestran en la pantalla",
                VISIBILITY_SCREEN_ON: "los enunciados se muestran en la pantalla"
            }
        },
        eW = {
            DISCONNECTED: "Te has desconectado.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te ha expulsado de la partida.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Hay que ser respetuoso con los dem\xE1s jugadores.",
            TEXT_NOTHING: "Tienes que escribir algo",
            TITLE: "Error"
        },
        tW = "CARGANDO",
        rW = {
            JOINED_COUNT: "Se han unido {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        nW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        iW = {
            AND: "Y",
            OR: "O"
        },
        sW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        aW = {
            NAME: "P\xDABLICO"
        },
        oW = {
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
        lW = {
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
        cW = {
            ACTION: Q8,
            ALT: Z8,
            ERROR: eW,
            LOADING: tW,
            LOBBY: rW,
            POST_GAME: nW,
            SEPARATOR: iW,
            TUTORIAL: sW,
            AUDIENCE: aW,
            UGC: oW,
            TOAST: lW
        },
        uW = {
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
        fW = {
            UGC: {
                VISIBILITY_CONTROLLER_OFF: "indicaciones ocultas en los dispositivos de los jugadores",
                VISIBILITY_CONTROLLER_ON: "indicaciones presentes en los dispositivos de los jugadores",
                VISIBILITY_SCREEN_OFF: "indicaciones ocultas en la pantalla del juego",
                VISIBILITY_SCREEN_ON: "indicaciones presentes en la pantalla del juego"
            }
        },
        dW = {
            DISCONNECTED: "Te desconectaste.",
            DRAWING_NOTHING: "\xA1Tienes que dibujar algo!",
            PLAYER_KICKED: "Un moderador te expuls\xF3 del juego.",
            ROOM_DESTROYED: "\xA1Gracias por jugar!",
            ROOM_DISCONNECTED: "Desconectado",
            TEXT_NAUGHTY: "Lo siento, no puedes escribir eso. Seamos respetuosos con los dem\xE1s jugadores.",
            TEXT_NOTHING: "\xA1Tienes que escribir algo!",
            TITLE: "Error"
        },
        hW = "CARGANDO",
        pW = {
            JOINED_COUNT: "Se unieron {count} de {maxPlayers} jugadores",
            PLAYERS_NEEDED: "Se necesita 1 jugador para empezar | Se necesitan {count} jugadores para empezar",
            WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
            WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
            GAME_STARTING: "La partida va a empezar",
            BUTTON_START: "Pulsa para empezar",
            BUTTON_CANCEL: "Pulsa para cancelar"
        },
        gW = {
            GALLERY_LINK: "Visita la galer\xEDa",
            PLAY_AGAIN: "\xBFJugar otra vez?",
            BUTTON_SAME_PLAYERS: "Los mismos jugadores",
            BUTTON_NEW_PLAYERS: "Otros jugadores"
        },
        mW = {
            AND: "Y",
            OR: "O"
        },
        vW = {
            BUTTON_SKIP: "Omitir",
            BUTTON_NEXT: "Siguiente",
            BUTTON_DONE: "\xA1Vamos!"
        },
        yW = {
            NAME: "P\xDABLICO"
        },
        _W = {
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
        EW = {
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
        bW = {
            ACTION: uW,
            ALT: fW,
            ERROR: dW,
            LOADING: hW,
            LOBBY: pW,
            POST_GAME: gW,
            SEPARATOR: mW,
            TUTORIAL: vW,
            AUDIENCE: yW,
            UGC: _W,
            TOAST: EW
        },
        TW = {
            en: g8,
            fr: C8,
            it: F8,
            de: J8,
            es: cW,
            "es-XL": bW
        },
        AW = rt({
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
                const e = os();
                if (!(e != null && e.appContext.directives.pointerbox)) throw new Error("Doodle.vue relies on PointerBoxPlugin. Please install it inside your main.ts file.")
            },
            mounted() {
                this.createCanvas()
            },
            methods: {
                createCanvas() {
                    const e = this.$refs.canvas;
                    this.canvas = jn(new V3(e, this.player.doodle, this.canvasOptions))
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
        OW = {
            class: "doodle"
        },
        SW = {
            ref: "canvas"
        },
        wW = ["disabled"],
        CW = ["disabled"];

    function IW(e, t, r, n, s, a) {
        const l = Mt("pointerbox-translate"),
            c = Mt("pointerbox"),
            f = Mt("t");
        return F(), W("div", OW, [Oe((F(), W("div", {
            class: "stage",
            "onPointerbox:start": t[0] || (t[0] = (...d) => e.onPointerBoxStart && e.onPointerBoxStart(...d)),
            "onPointerbox:move": t[1] || (t[1] = (...d) => e.onPointerBoxMove && e.onPointerBoxMove(...d)),
            "onPointerbox:end": t[2] || (t[2] = (...d) => e.onPointerBoxEnd && e.onPointerBoxEnd(...d))
        }, [Oe(X("canvas", SW, null, 512), [
            [l, {
                id: "doodleCanvas",
                width: e.pointerBoxWidth,
                height: e.pointerBoxHeight
            }]
        ])], 32)), [
            [c]
        ]), e.hideUndo ? ve("", !0) : Oe((F(), W("button", {
            key: 0,
            class: "doodle-action undo",
            disabled: !e.canSubmit,
            onClick: t[3] || (t[3] = ze((...d) => e.onUndo && e.onUndo(...d), ["prevent"]))
        }, null, 8, wW)), [
            [f, "ACTION.UNDO"]
        ]), e.hideSubmit ? ve("", !0) : Oe((F(), W("button", {
            key: 1,
            class: "doodle-action submit",
            disabled: !e.canSubmit,
            onClick: t[4] || (t[4] = ze((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, null, 8, CW)), [
            [f, "ACTION.SUBMIT"]
        ])])
    }
    const $W = st(AW, [
        ["render", IW]
    ]);
    var Dd = {
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
                Se = 17976931348623157e292,
                Ue = 0 / 0,
                je = 4294967295,
                nt = je - 1,
                $t = je >>> 1,
                Cr = [
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
                ir = "[object Arguments]",
                yr = "[object Array]",
                lt = "[object AsyncFunction]",
                St = "[object Boolean]",
                ct = "[object Date]",
                Dt = "[object DOMException]",
                Kt = "[object Error]",
                xt = "[object Function]",
                m = "[object GeneratorFunction]",
                g = "[object Map]",
                O = "[object Number]",
                x = "[object Null]",
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
                De = "[object ArrayBuffer]",
                S = "[object DataView]",
                T = "[object Float32Array]",
                L = "[object Float64Array]",
                A = "[object Int8Array]",
                N = "[object Int16Array]",
                Z = "[object Int32Array]",
                ne = "[object Uint8Array]",
                Ee = "[object Uint8ClampedArray]",
                Ae = "[object Uint16Array]",
                dt = "[object Uint32Array]",
                sr = /\b__p \+= '';/g,
                xe = /\b(__p \+=) '' \+/g,
                pa = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Yp = /&(?:amp|lt|gt|quot|#39);/g,
                zp = /[&<>"']/g,
                HS = RegExp(Yp.source),
                qS = RegExp(zp.source),
                YS = /<%-([\s\S]+?)%>/g,
                zS = /<%([\s\S]+?)%>/g,
                Xp = /<%=([\s\S]+?)%>/g,
                XS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                JS = /^\w*$/,
                QS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Qc = /[\\^$.*+?()[\]{}|]/g,
                ZS = RegExp(Qc.source),
                Zc = /^\s+/,
                e0 = /\s/,
                t0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                r0 = /\{\n\/\* \[wrapped with (.+)\] \*/,
                n0 = /,? & /,
                i0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                s0 = /[()=,{}\[\]\/\s]/,
                a0 = /\\(\\)?/g,
                o0 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Jp = /\w*$/,
                l0 = /^[-+]0x[0-9a-f]+$/i,
                c0 = /^0b[01]+$/i,
                u0 = /^\[object .+?Constructor\]$/,
                f0 = /^0o[0-7]+$/i,
                d0 = /^(?:0|[1-9]\d*)$/,
                h0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                To = /($^)/,
                p0 = /['\n\r\u2028\u2029\\]/g,
                Ao = "\\ud800-\\udfff",
                g0 = "\\u0300-\\u036f",
                m0 = "\\ufe20-\\ufe2f",
                v0 = "\\u20d0-\\u20ff",
                Qp = g0 + m0 + v0,
                Zp = "\\u2700-\\u27bf",
                eg = "a-z\\xdf-\\xf6\\xf8-\\xff",
                y0 = "\\xac\\xb1\\xd7\\xf7",
                _0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                E0 = "\\u2000-\\u206f",
                b0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                tg = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                rg = "\\ufe0e\\ufe0f",
                ng = y0 + _0 + E0 + b0,
                eu = "['\u2019]",
                T0 = "[" + Ao + "]",
                ig = "[" + ng + "]",
                Oo = "[" + Qp + "]",
                sg = "\\d+",
                A0 = "[" + Zp + "]",
                ag = "[" + eg + "]",
                og = "[^" + Ao + ng + sg + Zp + eg + tg + "]",
                tu = "\\ud83c[\\udffb-\\udfff]",
                O0 = "(?:" + Oo + "|" + tu + ")",
                lg = "[^" + Ao + "]",
                ru = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                nu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                ds = "[" + tg + "]",
                cg = "\\u200d",
                ug = "(?:" + ag + "|" + og + ")",
                S0 = "(?:" + ds + "|" + og + ")",
                fg = "(?:" + eu + "(?:d|ll|m|re|s|t|ve))?",
                dg = "(?:" + eu + "(?:D|LL|M|RE|S|T|VE))?",
                hg = O0 + "?",
                pg = "[" + rg + "]?",
                w0 = "(?:" + cg + "(?:" + [lg, ru, nu].join("|") + ")" + pg + hg + ")*",
                C0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                I0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                gg = pg + hg + w0,
                $0 = "(?:" + [A0, ru, nu].join("|") + ")" + gg,
                R0 = "(?:" + [lg + Oo + "?", Oo, ru, nu, T0].join("|") + ")",
                L0 = RegExp(eu, "g"),
                N0 = RegExp(Oo, "g"),
                iu = RegExp(tu + "(?=" + tu + ")|" + R0 + gg, "g"),
                P0 = RegExp([ds + "?" + ag + "+" + fg + "(?=" + [ig, ds, "$"].join("|") + ")", S0 + "+" + dg + "(?=" + [ig, ds + ug, "$"].join("|") + ")", ds + "?" + ug + "+" + fg, ds + "+" + dg, I0, C0, sg, $0].join("|"), "g"),
                k0 = RegExp("[" + cg + Ao + Qp + rg + "]"),
                D0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                x0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                M0 = -1,
                At = {};
            At[T] = At[L] = At[A] = At[N] = At[Z] = At[ne] = At[Ee] = At[Ae] = At[dt] = !0, At[ir] = At[yr] = At[De] = At[St] = At[S] = At[ct] = At[Kt] = At[xt] = At[g] = At[O] = At[B] = At[se] = At[re] = At[$] = At[pe] = !1;
            var _t = {};
            _t[ir] = _t[yr] = _t[De] = _t[S] = _t[St] = _t[ct] = _t[T] = _t[L] = _t[A] = _t[N] = _t[Z] = _t[g] = _t[O] = _t[B] = _t[se] = _t[re] = _t[$] = _t[K] = _t[ne] = _t[Ee] = _t[Ae] = _t[dt] = !0, _t[Kt] = _t[xt] = _t[pe] = !1;
            var U0 = {
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
                F0 = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                B0 = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                G0 = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                j0 = parseFloat,
                W0 = parseInt,
                mg = typeof kt == "object" && kt && kt.Object === Object && kt,
                V0 = typeof self == "object" && self && self.Object === Object && self,
                Xt = mg || V0 || Function("return this")(),
                su = t && !t.nodeType && t,
                wi = su && !0 && e && !e.nodeType && e,
                vg = wi && wi.exports === su,
                au = vg && mg.process,
                jr = function() {
                    try {
                        var k = wi && wi.require && wi.require("util").types;
                        return k || au && au.binding && au.binding("util")
                    } catch {}
                }(),
                yg = jr && jr.isArrayBuffer,
                _g = jr && jr.isDate,
                Eg = jr && jr.isMap,
                bg = jr && jr.isRegExp,
                Tg = jr && jr.isSet,
                Ag = jr && jr.isTypedArray;

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

            function K0(k, J, q, Te) {
                for (var Fe = -1, at = k == null ? 0 : k.length; ++Fe < at;) {
                    var Bt = k[Fe];
                    J(Te, Bt, q(Bt), k)
                }
                return Te
            }

            function Wr(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length; ++q < Te && J(k[q], q, k) !== !1;);
                return k
            }

            function H0(k, J) {
                for (var q = k == null ? 0 : k.length; q-- && J(k[q], q, k) !== !1;);
                return k
            }

            function Og(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length; ++q < Te;)
                    if (!J(k[q], q, k)) return !1;
                return !0
            }

            function Kn(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length, Fe = 0, at = []; ++q < Te;) {
                    var Bt = k[q];
                    J(Bt, q, k) && (at[Fe++] = Bt)
                }
                return at
            }

            function So(k, J) {
                var q = k == null ? 0 : k.length;
                return !!q && hs(k, J, 0) > -1
            }

            function ou(k, J, q) {
                for (var Te = -1, Fe = k == null ? 0 : k.length; ++Te < Fe;)
                    if (q(J, k[Te])) return !0;
                return !1
            }

            function wt(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length, Fe = Array(Te); ++q < Te;) Fe[q] = J(k[q], q, k);
                return Fe
            }

            function Hn(k, J) {
                for (var q = -1, Te = J.length, Fe = k.length; ++q < Te;) k[Fe + q] = J[q];
                return k
            }

            function lu(k, J, q, Te) {
                var Fe = -1,
                    at = k == null ? 0 : k.length;
                for (Te && at && (q = k[++Fe]); ++Fe < at;) q = J(q, k[Fe], Fe, k);
                return q
            }

            function q0(k, J, q, Te) {
                var Fe = k == null ? 0 : k.length;
                for (Te && Fe && (q = k[--Fe]); Fe--;) q = J(q, k[Fe], Fe, k);
                return q
            }

            function cu(k, J) {
                for (var q = -1, Te = k == null ? 0 : k.length; ++q < Te;)
                    if (J(k[q], q, k)) return !0;
                return !1
            }
            var Y0 = uu("length");

            function z0(k) {
                return k.split("")
            }

            function X0(k) {
                return k.match(i0) || []
            }

            function Sg(k, J, q) {
                var Te;
                return q(k, function(Fe, at, Bt) {
                    if (J(Fe, at, Bt)) return Te = at, !1
                }), Te
            }

            function wo(k, J, q, Te) {
                for (var Fe = k.length, at = q + (Te ? 1 : -1); Te ? at-- : ++at < Fe;)
                    if (J(k[at], at, k)) return at;
                return -1
            }

            function hs(k, J, q) {
                return J === J ? lw(k, J, q) : wo(k, wg, q)
            }

            function J0(k, J, q, Te) {
                for (var Fe = q - 1, at = k.length; ++Fe < at;)
                    if (Te(k[Fe], J)) return Fe;
                return -1
            }

            function wg(k) {
                return k !== k
            }

            function Cg(k, J) {
                var q = k == null ? 0 : k.length;
                return q ? du(k, J) / q : Ue
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

            function Ig(k, J, q, Te, Fe) {
                return Fe(k, function(at, Bt, mt) {
                    q = Te ? (Te = !1, at) : J(q, at, Bt, mt)
                }), q
            }

            function Q0(k, J) {
                var q = k.length;
                for (k.sort(J); q--;) k[q] = k[q].value;
                return k
            }

            function du(k, J) {
                for (var q, Te = -1, Fe = k.length; ++Te < Fe;) {
                    var at = J(k[Te]);
                    at !== r && (q = q === r ? at : q + at)
                }
                return q
            }

            function hu(k, J) {
                for (var q = -1, Te = Array(k); ++q < k;) Te[q] = J(q);
                return Te
            }

            function Z0(k, J) {
                return wt(J, function(q) {
                    return [q, k[q]]
                })
            }

            function $g(k) {
                return k && k.slice(0, Pg(k) + 1).replace(Zc, "")
            }

            function $r(k) {
                return function(J) {
                    return k(J)
                }
            }

            function pu(k, J) {
                return wt(J, function(q) {
                    return k[q]
                })
            }

            function ga(k, J) {
                return k.has(J)
            }

            function Rg(k, J) {
                for (var q = -1, Te = k.length; ++q < Te && hs(J, k[q], 0) > -1;);
                return q
            }

            function Lg(k, J) {
                for (var q = k.length; q-- && hs(J, k[q], 0) > -1;);
                return q
            }

            function ew(k, J) {
                for (var q = k.length, Te = 0; q--;) k[q] === J && ++Te;
                return Te
            }
            var tw = fu(U0),
                rw = fu(F0);

            function nw(k) {
                return "\\" + G0[k]
            }

            function iw(k, J) {
                return k == null ? r : k[J]
            }

            function ps(k) {
                return k0.test(k)
            }

            function sw(k) {
                return D0.test(k)
            }

            function aw(k) {
                for (var J, q = []; !(J = k.next()).done;) q.push(J.value);
                return q
            }

            function gu(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Te, Fe) {
                    q[++J] = [Fe, Te]
                }), q
            }

            function Ng(k, J) {
                return function(q) {
                    return k(J(q))
                }
            }

            function qn(k, J) {
                for (var q = -1, Te = k.length, Fe = 0, at = []; ++q < Te;) {
                    var Bt = k[q];
                    (Bt === J || Bt === p) && (k[q] = p, at[Fe++] = q)
                }
                return at
            }

            function Co(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Te) {
                    q[++J] = Te
                }), q
            }

            function ow(k) {
                var J = -1,
                    q = Array(k.size);
                return k.forEach(function(Te) {
                    q[++J] = [Te, Te]
                }), q
            }

            function lw(k, J, q) {
                for (var Te = q - 1, Fe = k.length; ++Te < Fe;)
                    if (k[Te] === J) return Te;
                return -1
            }

            function cw(k, J, q) {
                for (var Te = q + 1; Te--;)
                    if (k[Te] === J) return Te;
                return Te
            }

            function gs(k) {
                return ps(k) ? fw(k) : Y0(k)
            }

            function tn(k) {
                return ps(k) ? dw(k) : z0(k)
            }

            function Pg(k) {
                for (var J = k.length; J-- && e0.test(k.charAt(J)););
                return J
            }
            var uw = fu(B0);

            function fw(k) {
                for (var J = iu.lastIndex = 0; iu.test(k);) ++J;
                return J
            }

            function dw(k) {
                return k.match(iu) || []
            }

            function hw(k) {
                return k.match(P0) || []
            }
            var pw = function k(J) {
                    J = J == null ? Xt : ms.defaults(Xt.Object(), J, ms.pick(Xt, x0));
                    var q = J.Array,
                        Te = J.Date,
                        Fe = J.Error,
                        at = J.Function,
                        Bt = J.Math,
                        mt = J.Object,
                        mu = J.RegExp,
                        gw = J.String,
                        Vr = J.TypeError,
                        Io = q.prototype,
                        mw = at.prototype,
                        vs = mt.prototype,
                        $o = J["__core-js_shared__"],
                        Ro = mw.toString,
                        ht = vs.hasOwnProperty,
                        vw = 0,
                        kg = function() {
                            var i = /[^.]+$/.exec($o && $o.keys && $o.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        Lo = vs.toString,
                        yw = Ro.call(mt),
                        _w = Xt._,
                        Ew = mu("^" + Ro.call(ht).replace(Qc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        No = vg ? J.Buffer : r,
                        Yn = J.Symbol,
                        Po = J.Uint8Array,
                        Dg = No ? No.allocUnsafe : r,
                        ko = Ng(mt.getPrototypeOf, mt),
                        xg = mt.create,
                        Mg = vs.propertyIsEnumerable,
                        Do = Io.splice,
                        Ug = Yn ? Yn.isConcatSpreadable : r,
                        ma = Yn ? Yn.iterator : r,
                        Ci = Yn ? Yn.toStringTag : r,
                        xo = function() {
                            try {
                                var i = Ni(mt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        bw = J.clearTimeout !== Xt.clearTimeout && J.clearTimeout,
                        Tw = Te && Te.now !== Xt.Date.now && Te.now,
                        Aw = J.setTimeout !== Xt.setTimeout && J.setTimeout,
                        Mo = Bt.ceil,
                        Uo = Bt.floor,
                        vu = mt.getOwnPropertySymbols,
                        Ow = No ? No.isBuffer : r,
                        Fg = J.isFinite,
                        Sw = Io.join,
                        ww = Ng(mt.keys, mt),
                        Gt = Bt.max,
                        ar = Bt.min,
                        Cw = Te.now,
                        Iw = J.parseInt,
                        Bg = Bt.random,
                        $w = Io.reverse,
                        yu = Ni(J, "DataView"),
                        va = Ni(J, "Map"),
                        _u = Ni(J, "Promise"),
                        ys = Ni(J, "Set"),
                        ya = Ni(J, "WeakMap"),
                        _a = Ni(mt, "create"),
                        Fo = ya && new ya,
                        _s = {},
                        Rw = Pi(yu),
                        Lw = Pi(va),
                        Nw = Pi(_u),
                        Pw = Pi(ys),
                        kw = Pi(ya),
                        Bo = Yn ? Yn.prototype : r,
                        Ea = Bo ? Bo.valueOf : r,
                        Gg = Bo ? Bo.toString : r;

                    function _(i) {
                        if (Rt(i) && !Ge(i) && !(i instanceof Je)) {
                            if (i instanceof Kr) return i;
                            if (ht.call(i, "__wrapped__")) return jm(i)
                        }
                        return new Kr(i)
                    }
                    var Es = function() {
                        function i() {}
                        return function(o) {
                            if (!It(o)) return {};
                            if (xg) return xg(o);
                            i.prototype = o;
                            var u = new i;
                            return i.prototype = r, u
                        }
                    }();

                    function Go() {}

                    function Kr(i, o) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r
                    }
                    _.templateSettings = {
                        escape: YS,
                        evaluate: zS,
                        interpolate: Xp,
                        variable: "",
                        imports: {
                            _
                        }
                    }, _.prototype = Go.prototype, _.prototype.constructor = _, Kr.prototype = Es(Go.prototype), Kr.prototype.constructor = Kr;

                    function Je(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = je, this.__views__ = []
                    }

                    function Dw() {
                        var i = new Je(this.__wrapped__);
                        return i.__actions__ = _r(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = _r(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = _r(this.__views__), i
                    }

                    function xw() {
                        if (this.__filtered__) {
                            var i = new Je(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function Mw() {
                        var i = this.__wrapped__.value(),
                            o = this.__dir__,
                            u = Ge(i),
                            h = o < 0,
                            v = u ? i.length : 0,
                            E = z1(0, v, this.__views__),
                            I = E.start,
                            R = E.end,
                            D = R - I,
                            ee = h ? R : I - 1,
                            te = this.__iteratees__,
                            ae = te.length,
                            me = 0,
                            we = ar(D, this.__takeCount__);
                        if (!u || !h && v == D && we == D) return fm(i, this.__actions__);
                        var Ne = [];
                        e: for (; D-- && me < we;) {
                            ee += o;
                            for (var He = -1, Pe = i[ee]; ++He < ae;) {
                                var Xe = te[He],
                                    Qe = Xe.iteratee,
                                    Nr = Xe.type,
                                    gr = Qe(Pe);
                                if (Nr == ie) Pe = gr;
                                else if (!gr) {
                                    if (Nr == U) continue e;
                                    break e
                                }
                            }
                            Ne[me++] = Pe
                        }
                        return Ne
                    }
                    Je.prototype = Es(Go.prototype), Je.prototype.constructor = Je;

                    function Ii(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.clear(); ++o < u;) {
                            var h = i[o];
                            this.set(h[0], h[1])
                        }
                    }

                    function Uw() {
                        this.__data__ = _a ? _a(null) : {}, this.size = 0
                    }

                    function Fw(i) {
                        var o = this.has(i) && delete this.__data__[i];
                        return this.size -= o ? 1 : 0, o
                    }

                    function Bw(i) {
                        var o = this.__data__;
                        if (_a) {
                            var u = o[i];
                            return u === f ? r : u
                        }
                        return ht.call(o, i) ? o[i] : r
                    }

                    function Gw(i) {
                        var o = this.__data__;
                        return _a ? o[i] !== r : ht.call(o, i)
                    }

                    function jw(i, o) {
                        var u = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, u[i] = _a && o === r ? f : o, this
                    }
                    Ii.prototype.clear = Uw, Ii.prototype.delete = Fw, Ii.prototype.get = Bw, Ii.prototype.has = Gw, Ii.prototype.set = jw;

                    function In(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.clear(); ++o < u;) {
                            var h = i[o];
                            this.set(h[0], h[1])
                        }
                    }

                    function Ww() {
                        this.__data__ = [], this.size = 0
                    }

                    function Vw(i) {
                        var o = this.__data__,
                            u = jo(o, i);
                        if (u < 0) return !1;
                        var h = o.length - 1;
                        return u == h ? o.pop() : Do.call(o, u, 1), --this.size, !0
                    }

                    function Kw(i) {
                        var o = this.__data__,
                            u = jo(o, i);
                        return u < 0 ? r : o[u][1]
                    }

                    function Hw(i) {
                        return jo(this.__data__, i) > -1
                    }

                    function qw(i, o) {
                        var u = this.__data__,
                            h = jo(u, i);
                        return h < 0 ? (++this.size, u.push([i, o])) : u[h][1] = o, this
                    }
                    In.prototype.clear = Ww, In.prototype.delete = Vw, In.prototype.get = Kw, In.prototype.has = Hw, In.prototype.set = qw;

                    function $n(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.clear(); ++o < u;) {
                            var h = i[o];
                            this.set(h[0], h[1])
                        }
                    }

                    function Yw() {
                        this.size = 0, this.__data__ = {
                            hash: new Ii,
                            map: new(va || In),
                            string: new Ii
                        }
                    }

                    function zw(i) {
                        var o = el(this, i).delete(i);
                        return this.size -= o ? 1 : 0, o
                    }

                    function Xw(i) {
                        return el(this, i).get(i)
                    }

                    function Jw(i) {
                        return el(this, i).has(i)
                    }

                    function Qw(i, o) {
                        var u = el(this, i),
                            h = u.size;
                        return u.set(i, o), this.size += u.size == h ? 0 : 1, this
                    }
                    $n.prototype.clear = Yw, $n.prototype.delete = zw, $n.prototype.get = Xw, $n.prototype.has = Jw, $n.prototype.set = Qw;

                    function $i(i) {
                        var o = -1,
                            u = i == null ? 0 : i.length;
                        for (this.__data__ = new $n; ++o < u;) this.add(i[o])
                    }

                    function Zw(i) {
                        return this.__data__.set(i, f), this
                    }

                    function e1(i) {
                        return this.__data__.has(i)
                    }
                    $i.prototype.add = $i.prototype.push = Zw, $i.prototype.has = e1;

                    function rn(i) {
                        var o = this.__data__ = new In(i);
                        this.size = o.size
                    }

                    function t1() {
                        this.__data__ = new In, this.size = 0
                    }

                    function r1(i) {
                        var o = this.__data__,
                            u = o.delete(i);
                        return this.size = o.size, u
                    }

                    function n1(i) {
                        return this.__data__.get(i)
                    }

                    function i1(i) {
                        return this.__data__.has(i)
                    }

                    function s1(i, o) {
                        var u = this.__data__;
                        if (u instanceof In) {
                            var h = u.__data__;
                            if (!va || h.length < s - 1) return h.push([i, o]), this.size = ++u.size, this;
                            u = this.__data__ = new $n(h)
                        }
                        return u.set(i, o), this.size = u.size, this
                    }
                    rn.prototype.clear = t1, rn.prototype.delete = r1, rn.prototype.get = n1, rn.prototype.has = i1, rn.prototype.set = s1;

                    function jg(i, o) {
                        var u = Ge(i),
                            h = !u && ki(i),
                            v = !u && !h && Zn(i),
                            E = !u && !h && !v && Os(i),
                            I = u || h || v || E,
                            R = I ? hu(i.length, gw) : [],
                            D = R.length;
                        for (var ee in i)(o || ht.call(i, ee)) && !(I && (ee == "length" || v && (ee == "offset" || ee == "parent") || E && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || Pn(ee, D))) && R.push(ee);
                        return R
                    }

                    function Wg(i) {
                        var o = i.length;
                        return o ? i[Ru(0, o - 1)] : r
                    }

                    function a1(i, o) {
                        return tl(_r(i), Ri(o, 0, i.length))
                    }

                    function o1(i) {
                        return tl(_r(i))
                    }

                    function Eu(i, o, u) {
                        (u !== r && !nn(i[o], u) || u === r && !(o in i)) && Rn(i, o, u)
                    }

                    function ba(i, o, u) {
                        var h = i[o];
                        (!(ht.call(i, o) && nn(h, u)) || u === r && !(o in i)) && Rn(i, o, u)
                    }

                    function jo(i, o) {
                        for (var u = i.length; u--;)
                            if (nn(i[u][0], o)) return u;
                        return -1
                    }

                    function l1(i, o, u, h) {
                        return zn(i, function(v, E, I) {
                            o(h, v, u(v), I)
                        }), h
                    }

                    function Vg(i, o) {
                        return i && vn(o, Ht(o), i)
                    }

                    function c1(i, o) {
                        return i && vn(o, br(o), i)
                    }

                    function Rn(i, o, u) {
                        o == "__proto__" && xo ? xo(i, o, {
                            configurable: !0,
                            enumerable: !0,
                            value: u,
                            writable: !0
                        }) : i[o] = u
                    }

                    function bu(i, o) {
                        for (var u = -1, h = o.length, v = q(h), E = i == null; ++u < h;) v[u] = E ? r : tf(i, o[u]);
                        return v
                    }

                    function Ri(i, o, u) {
                        return i === i && (u !== r && (i = i <= u ? i : u), o !== r && (i = i >= o ? i : o)), i
                    }

                    function Hr(i, o, u, h, v, E) {
                        var I, R = o & y,
                            D = o & b,
                            ee = o & w;
                        if (u && (I = v ? u(i, h, v, E) : u(i)), I !== r) return I;
                        if (!It(i)) return i;
                        var te = Ge(i);
                        if (te) {
                            if (I = J1(i), !R) return _r(i, I)
                        } else {
                            var ae = or(i),
                                me = ae == xt || ae == m;
                            if (Zn(i)) return pm(i, R);
                            if (ae == B || ae == ir || me && !v) {
                                if (I = D || me ? {} : Pm(i), !R) return D ? B1(i, c1(I, i)) : F1(i, Vg(I, i))
                            } else {
                                if (!_t[ae]) return v ? i : {};
                                I = Q1(i, ae, R)
                            }
                        }
                        E || (E = new rn);
                        var we = E.get(i);
                        if (we) return we;
                        E.set(i, I), lv(i) ? i.forEach(function(Pe) {
                            I.add(Hr(Pe, o, u, Pe, i, E))
                        }) : av(i) && i.forEach(function(Pe, Xe) {
                            I.set(Xe, Hr(Pe, o, u, Xe, i, E))
                        });
                        var Ne = ee ? D ? Gu : Bu : D ? br : Ht,
                            He = te ? r : Ne(i);
                        return Wr(He || i, function(Pe, Xe) {
                            He && (Xe = Pe, Pe = i[Xe]), ba(I, Xe, Hr(Pe, o, u, Xe, i, E))
                        }), I
                    }

                    function u1(i) {
                        var o = Ht(i);
                        return function(u) {
                            return Kg(u, i, o)
                        }
                    }

                    function Kg(i, o, u) {
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

                    function Hg(i, o, u) {
                        if (typeof i != "function") throw new Vr(l);
                        return Ia(function() {
                            i.apply(r, u)
                        }, o)
                    }

                    function Ta(i, o, u, h) {
                        var v = -1,
                            E = So,
                            I = !0,
                            R = i.length,
                            D = [],
                            ee = o.length;
                        if (!R) return D;
                        u && (o = wt(o, $r(u))), h ? (E = ou, I = !1) : o.length >= s && (E = ga, I = !1, o = new $i(o));
                        e: for (; ++v < R;) {
                            var te = i[v],
                                ae = u == null ? te : u(te);
                            if (te = h || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = ee; me--;)
                                    if (o[me] === ae) continue e;
                                D.push(te)
                            } else E(o, ae, h) || D.push(te)
                        }
                        return D
                    }
                    var zn = _m(mn),
                        qg = _m(Au, !0);

                    function f1(i, o) {
                        var u = !0;
                        return zn(i, function(h, v, E) {
                            return u = !!o(h, v, E), u
                        }), u
                    }

                    function Wo(i, o, u) {
                        for (var h = -1, v = i.length; ++h < v;) {
                            var E = i[h],
                                I = o(E);
                            if (I != null && (R === r ? I === I && !Lr(I) : u(I, R))) var R = I,
                                D = E
                        }
                        return D
                    }

                    function d1(i, o, u, h) {
                        var v = i.length;
                        for (u = We(u), u < 0 && (u = -u > v ? 0 : v + u), h = h === r || h > v ? v : We(h), h < 0 && (h += v), h = u > h ? 0 : uv(h); u < h;) i[u++] = o;
                        return i
                    }

                    function Yg(i, o) {
                        var u = [];
                        return zn(i, function(h, v, E) {
                            o(h, v, E) && u.push(h)
                        }), u
                    }

                    function Jt(i, o, u, h, v) {
                        var E = -1,
                            I = i.length;
                        for (u || (u = eC), v || (v = []); ++E < I;) {
                            var R = i[E];
                            o > 0 && u(R) ? o > 1 ? Jt(R, o - 1, u, h, v) : Hn(v, R) : h || (v[v.length] = R)
                        }
                        return v
                    }
                    var Tu = Em(),
                        zg = Em(!0);

                    function mn(i, o) {
                        return i && Tu(i, o, Ht)
                    }

                    function Au(i, o) {
                        return i && zg(i, o, Ht)
                    }

                    function Vo(i, o) {
                        return Kn(o, function(u) {
                            return kn(i[u])
                        })
                    }

                    function Li(i, o) {
                        o = Jn(o, i);
                        for (var u = 0, h = o.length; i != null && u < h;) i = i[yn(o[u++])];
                        return u && u == h ? i : r
                    }

                    function Xg(i, o, u) {
                        var h = o(i);
                        return Ge(i) ? h : Hn(h, u(i))
                    }

                    function hr(i) {
                        return i == null ? i === r ? he : x : Ci && Ci in mt(i) ? Y1(i) : oC(i)
                    }

                    function Ou(i, o) {
                        return i > o
                    }

                    function h1(i, o) {
                        return i != null && ht.call(i, o)
                    }

                    function p1(i, o) {
                        return i != null && o in mt(i)
                    }

                    function g1(i, o, u) {
                        return i >= ar(o, u) && i < Gt(o, u)
                    }

                    function Su(i, o, u) {
                        for (var h = u ? ou : So, v = i[0].length, E = i.length, I = E, R = q(E), D = 1 / 0, ee = []; I--;) {
                            var te = i[I];
                            I && o && (te = wt(te, $r(o))), D = ar(te.length, D), R[I] = !u && (o || v >= 120 && te.length >= 120) ? new $i(I && te) : r
                        }
                        te = i[0];
                        var ae = -1,
                            me = R[0];
                        e: for (; ++ae < v && ee.length < D;) {
                            var we = te[ae],
                                Ne = o ? o(we) : we;
                            if (we = u || we !== 0 ? we : 0, !(me ? ga(me, Ne) : h(ee, Ne, u))) {
                                for (I = E; --I;) {
                                    var He = R[I];
                                    if (!(He ? ga(He, Ne) : h(i[I], Ne, u))) continue e
                                }
                                me && me.push(Ne), ee.push(we)
                            }
                        }
                        return ee
                    }

                    function m1(i, o, u, h) {
                        return mn(i, function(v, E, I) {
                            o(h, u(v), E, I)
                        }), h
                    }

                    function Aa(i, o, u) {
                        o = Jn(o, i), i = Mm(i, o);
                        var h = i == null ? i : i[yn(Yr(o))];
                        return h == null ? r : Ir(h, i, u)
                    }

                    function Jg(i) {
                        return Rt(i) && hr(i) == ir
                    }

                    function v1(i) {
                        return Rt(i) && hr(i) == De
                    }

                    function y1(i) {
                        return Rt(i) && hr(i) == ct
                    }

                    function Oa(i, o, u, h, v) {
                        return i === o ? !0 : i == null || o == null || !Rt(i) && !Rt(o) ? i !== i && o !== o : _1(i, o, u, h, Oa, v)
                    }

                    function _1(i, o, u, h, v, E) {
                        var I = Ge(i),
                            R = Ge(o),
                            D = I ? yr : or(i),
                            ee = R ? yr : or(o);
                        D = D == ir ? B : D, ee = ee == ir ? B : ee;
                        var te = D == B,
                            ae = ee == B,
                            me = D == ee;
                        if (me && Zn(i)) {
                            if (!Zn(o)) return !1;
                            I = !0, te = !1
                        }
                        if (me && !te) return E || (E = new rn), I || Os(i) ? Rm(i, o, u, h, v, E) : H1(i, o, D, u, h, v, E);
                        if (!(u & P)) {
                            var we = te && ht.call(i, "__wrapped__"),
                                Ne = ae && ht.call(o, "__wrapped__");
                            if (we || Ne) {
                                var He = we ? i.value() : i,
                                    Pe = Ne ? o.value() : o;
                                return E || (E = new rn), v(He, Pe, u, h, E)
                            }
                        }
                        return me ? (E || (E = new rn), q1(i, o, u, h, v, E)) : !1
                    }

                    function E1(i) {
                        return Rt(i) && or(i) == g
                    }

                    function wu(i, o, u, h) {
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
                            var D = R[0],
                                ee = i[D],
                                te = R[1];
                            if (I && R[2]) {
                                if (ee === r && !(D in i)) return !1
                            } else {
                                var ae = new rn;
                                if (h) var me = h(ee, te, D, i, o, ae);
                                if (!(me === r ? Oa(te, ee, P | M, h, ae) : me)) return !1
                            }
                        }
                        return !0
                    }

                    function Qg(i) {
                        if (!It(i) || rC(i)) return !1;
                        var o = kn(i) ? Ew : u0;
                        return o.test(Pi(i))
                    }

                    function b1(i) {
                        return Rt(i) && hr(i) == se
                    }

                    function T1(i) {
                        return Rt(i) && or(i) == re
                    }

                    function A1(i) {
                        return Rt(i) && ol(i.length) && !!At[hr(i)]
                    }

                    function Zg(i) {
                        return typeof i == "function" ? i : i == null ? Tr : typeof i == "object" ? Ge(i) ? rm(i[0], i[1]) : tm(i) : bv(i)
                    }

                    function Cu(i) {
                        if (!Ca(i)) return ww(i);
                        var o = [];
                        for (var u in mt(i)) ht.call(i, u) && u != "constructor" && o.push(u);
                        return o
                    }

                    function O1(i) {
                        if (!It(i)) return aC(i);
                        var o = Ca(i),
                            u = [];
                        for (var h in i) h == "constructor" && (o || !ht.call(i, h)) || u.push(h);
                        return u
                    }

                    function Iu(i, o) {
                        return i < o
                    }

                    function em(i, o) {
                        var u = -1,
                            h = Er(i) ? q(i.length) : [];
                        return zn(i, function(v, E, I) {
                            h[++u] = o(v, E, I)
                        }), h
                    }

                    function tm(i) {
                        var o = Wu(i);
                        return o.length == 1 && o[0][2] ? Dm(o[0][0], o[0][1]) : function(u) {
                            return u === i || wu(u, i, o)
                        }
                    }

                    function rm(i, o) {
                        return Ku(i) && km(o) ? Dm(yn(i), o) : function(u) {
                            var h = tf(u, i);
                            return h === r && h === o ? rf(u, i) : Oa(o, h, P | M)
                        }
                    }

                    function Ko(i, o, u, h, v) {
                        i !== o && Tu(o, function(E, I) {
                            if (v || (v = new rn), It(E)) S1(i, o, I, u, Ko, h, v);
                            else {
                                var R = h ? h(qu(i, I), E, I + "", i, o, v) : r;
                                R === r && (R = E), Eu(i, I, R)
                            }
                        }, br)
                    }

                    function S1(i, o, u, h, v, E, I) {
                        var R = qu(i, u),
                            D = qu(o, u),
                            ee = I.get(D);
                        if (ee) {
                            Eu(i, u, ee);
                            return
                        }
                        var te = E ? E(R, D, u + "", i, o, I) : r,
                            ae = te === r;
                        if (ae) {
                            var me = Ge(D),
                                we = !me && Zn(D),
                                Ne = !me && !we && Os(D);
                            te = D, me || we || Ne ? Ge(R) ? te = R : Lt(R) ? te = _r(R) : we ? (ae = !1, te = pm(D, !0)) : Ne ? (ae = !1, te = gm(D, !0)) : te = [] : $a(D) || ki(D) ? (te = R, ki(R) ? te = fv(R) : (!It(R) || kn(R)) && (te = Pm(D))) : ae = !1
                        }
                        ae && (I.set(D, te), v(te, D, h, E, I), I.delete(D)), Eu(i, u, te)
                    }

                    function nm(i, o) {
                        var u = i.length;
                        if (!!u) return o += o < 0 ? u : 0, Pn(o, u) ? i[o] : r
                    }

                    function im(i, o, u) {
                        o.length ? o = wt(o, function(E) {
                            return Ge(E) ? function(I) {
                                return Li(I, E.length === 1 ? E[0] : E)
                            } : E
                        }) : o = [Tr];
                        var h = -1;
                        o = wt(o, $r(Le()));
                        var v = em(i, function(E, I, R) {
                            var D = wt(o, function(ee) {
                                return ee(E)
                            });
                            return {
                                criteria: D,
                                index: ++h,
                                value: E
                            }
                        });
                        return Q0(v, function(E, I) {
                            return U1(E, I, u)
                        })
                    }

                    function w1(i, o) {
                        return sm(i, o, function(u, h) {
                            return rf(i, h)
                        })
                    }

                    function sm(i, o, u) {
                        for (var h = -1, v = o.length, E = {}; ++h < v;) {
                            var I = o[h],
                                R = Li(i, I);
                            u(R, I) && Sa(E, Jn(I, i), R)
                        }
                        return E
                    }

                    function C1(i) {
                        return function(o) {
                            return Li(o, i)
                        }
                    }

                    function $u(i, o, u, h) {
                        var v = h ? J0 : hs,
                            E = -1,
                            I = o.length,
                            R = i;
                        for (i === o && (o = _r(o)), u && (R = wt(i, $r(u))); ++E < I;)
                            for (var D = 0, ee = o[E], te = u ? u(ee) : ee;
                                (D = v(R, te, D, h)) > -1;) R !== i && Do.call(R, D, 1), Do.call(i, D, 1);
                        return i
                    }

                    function am(i, o) {
                        for (var u = i ? o.length : 0, h = u - 1; u--;) {
                            var v = o[u];
                            if (u == h || v !== E) {
                                var E = v;
                                Pn(v) ? Do.call(i, v, 1) : Pu(i, v)
                            }
                        }
                        return i
                    }

                    function Ru(i, o) {
                        return i + Uo(Bg() * (o - i + 1))
                    }

                    function I1(i, o, u, h) {
                        for (var v = -1, E = Gt(Mo((o - i) / (u || 1)), 0), I = q(E); E--;) I[h ? E : ++v] = i, i += u;
                        return I
                    }

                    function Lu(i, o) {
                        var u = "";
                        if (!i || o < 1 || o > ye) return u;
                        do o % 2 && (u += i), o = Uo(o / 2), o && (i += i); while (o);
                        return u
                    }

                    function Ye(i, o) {
                        return Yu(xm(i, o, Tr), i + "")
                    }

                    function $1(i) {
                        return Wg(Ss(i))
                    }

                    function R1(i, o) {
                        var u = Ss(i);
                        return tl(u, Ri(o, 0, u.length))
                    }

                    function Sa(i, o, u, h) {
                        if (!It(i)) return i;
                        o = Jn(o, i);
                        for (var v = -1, E = o.length, I = E - 1, R = i; R != null && ++v < E;) {
                            var D = yn(o[v]),
                                ee = u;
                            if (D === "__proto__" || D === "constructor" || D === "prototype") return i;
                            if (v != I) {
                                var te = R[D];
                                ee = h ? h(te, D, R) : r, ee === r && (ee = It(te) ? te : Pn(o[v + 1]) ? [] : {})
                            }
                            ba(R, D, ee), R = R[D]
                        }
                        return i
                    }
                    var om = Fo ? function(i, o) {
                            return Fo.set(i, o), i
                        } : Tr,
                        L1 = xo ? function(i, o) {
                            return xo(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: sf(o),
                                writable: !0
                            })
                        } : Tr;

                    function N1(i) {
                        return tl(Ss(i))
                    }

                    function qr(i, o, u) {
                        var h = -1,
                            v = i.length;
                        o < 0 && (o = -o > v ? 0 : v + o), u = u > v ? v : u, u < 0 && (u += v), v = o > u ? 0 : u - o >>> 0, o >>>= 0;
                        for (var E = q(v); ++h < v;) E[h] = i[h + o];
                        return E
                    }

                    function P1(i, o) {
                        var u;
                        return zn(i, function(h, v, E) {
                            return u = o(h, v, E), !u
                        }), !!u
                    }

                    function Ho(i, o, u) {
                        var h = 0,
                            v = i == null ? h : i.length;
                        if (typeof o == "number" && o === o && v <= $t) {
                            for (; h < v;) {
                                var E = h + v >>> 1,
                                    I = i[E];
                                I !== null && !Lr(I) && (u ? I <= o : I < o) ? h = E + 1 : v = E
                            }
                            return v
                        }
                        return Nu(i, o, Tr, u)
                    }

                    function Nu(i, o, u, h) {
                        var v = 0,
                            E = i == null ? 0 : i.length;
                        if (E === 0) return 0;
                        o = u(o);
                        for (var I = o !== o, R = o === null, D = Lr(o), ee = o === r; v < E;) {
                            var te = Uo((v + E) / 2),
                                ae = u(i[te]),
                                me = ae !== r,
                                we = ae === null,
                                Ne = ae === ae,
                                He = Lr(ae);
                            if (I) var Pe = h || Ne;
                            else ee ? Pe = Ne && (h || me) : R ? Pe = Ne && me && (h || !we) : D ? Pe = Ne && me && !we && (h || !He) : we || He ? Pe = !1 : Pe = h ? ae <= o : ae < o;
                            Pe ? v = te + 1 : E = te
                        }
                        return ar(E, nt)
                    }

                    function lm(i, o) {
                        for (var u = -1, h = i.length, v = 0, E = []; ++u < h;) {
                            var I = i[u],
                                R = o ? o(I) : I;
                            if (!u || !nn(R, D)) {
                                var D = R;
                                E[v++] = I === 0 ? 0 : I
                            }
                        }
                        return E
                    }

                    function cm(i) {
                        return typeof i == "number" ? i : Lr(i) ? Ue : +i
                    }

                    function Rr(i) {
                        if (typeof i == "string") return i;
                        if (Ge(i)) return wt(i, Rr) + "";
                        if (Lr(i)) return Gg ? Gg.call(i) : "";
                        var o = i + "";
                        return o == "0" && 1 / i == -be ? "-0" : o
                    }

                    function Xn(i, o, u) {
                        var h = -1,
                            v = So,
                            E = i.length,
                            I = !0,
                            R = [],
                            D = R;
                        if (u) I = !1, v = ou;
                        else if (E >= s) {
                            var ee = o ? null : V1(i);
                            if (ee) return Co(ee);
                            I = !1, v = ga, D = new $i
                        } else D = o ? [] : R;
                        e: for (; ++h < E;) {
                            var te = i[h],
                                ae = o ? o(te) : te;
                            if (te = u || te !== 0 ? te : 0, I && ae === ae) {
                                for (var me = D.length; me--;)
                                    if (D[me] === ae) continue e;
                                o && D.push(ae), R.push(te)
                            } else v(D, ae, u) || (D !== R && D.push(ae), R.push(te))
                        }
                        return R
                    }

                    function Pu(i, o) {
                        return o = Jn(o, i), i = Mm(i, o), i == null || delete i[yn(Yr(o))]
                    }

                    function um(i, o, u, h) {
                        return Sa(i, o, u(Li(i, o)), h)
                    }

                    function qo(i, o, u, h) {
                        for (var v = i.length, E = h ? v : -1;
                            (h ? E-- : ++E < v) && o(i[E], E, i););
                        return u ? qr(i, h ? 0 : E, h ? E + 1 : v) : qr(i, h ? E + 1 : 0, h ? v : E)
                    }

                    function fm(i, o) {
                        var u = i;
                        return u instanceof Je && (u = u.value()), lu(o, function(h, v) {
                            return v.func.apply(v.thisArg, Hn([h], v.args))
                        }, u)
                    }

                    function ku(i, o, u) {
                        var h = i.length;
                        if (h < 2) return h ? Xn(i[0]) : [];
                        for (var v = -1, E = q(h); ++v < h;)
                            for (var I = i[v], R = -1; ++R < h;) R != v && (E[v] = Ta(E[v] || I, i[R], o, u));
                        return Xn(Jt(E, 1), o, u)
                    }

                    function dm(i, o, u) {
                        for (var h = -1, v = i.length, E = o.length, I = {}; ++h < v;) {
                            var R = h < E ? o[h] : r;
                            u(I, i[h], R)
                        }
                        return I
                    }

                    function Du(i) {
                        return Lt(i) ? i : []
                    }

                    function xu(i) {
                        return typeof i == "function" ? i : Tr
                    }

                    function Jn(i, o) {
                        return Ge(i) ? i : Ku(i, o) ? [i] : Gm(ut(i))
                    }
                    var k1 = Ye;

                    function Qn(i, o, u) {
                        var h = i.length;
                        return u = u === r ? h : u, !o && u >= h ? i : qr(i, o, u)
                    }
                    var hm = bw || function(i) {
                        return Xt.clearTimeout(i)
                    };

                    function pm(i, o) {
                        if (o) return i.slice();
                        var u = i.length,
                            h = Dg ? Dg(u) : new i.constructor(u);
                        return i.copy(h), h
                    }

                    function Mu(i) {
                        var o = new i.constructor(i.byteLength);
                        return new Po(o).set(new Po(i)), o
                    }

                    function D1(i, o) {
                        var u = o ? Mu(i.buffer) : i.buffer;
                        return new i.constructor(u, i.byteOffset, i.byteLength)
                    }

                    function x1(i) {
                        var o = new i.constructor(i.source, Jp.exec(i));
                        return o.lastIndex = i.lastIndex, o
                    }

                    function M1(i) {
                        return Ea ? mt(Ea.call(i)) : {}
                    }

                    function gm(i, o) {
                        var u = o ? Mu(i.buffer) : i.buffer;
                        return new i.constructor(u, i.byteOffset, i.length)
                    }

                    function mm(i, o) {
                        if (i !== o) {
                            var u = i !== r,
                                h = i === null,
                                v = i === i,
                                E = Lr(i),
                                I = o !== r,
                                R = o === null,
                                D = o === o,
                                ee = Lr(o);
                            if (!R && !ee && !E && i > o || E && I && D && !R && !ee || h && I && D || !u && D || !v) return 1;
                            if (!h && !E && !ee && i < o || ee && u && v && !h && !E || R && u && v || !I && v || !D) return -1
                        }
                        return 0
                    }

                    function U1(i, o, u) {
                        for (var h = -1, v = i.criteria, E = o.criteria, I = v.length, R = u.length; ++h < I;) {
                            var D = mm(v[h], E[h]);
                            if (D) {
                                if (h >= R) return D;
                                var ee = u[h];
                                return D * (ee == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - o.index
                    }

                    function vm(i, o, u, h) {
                        for (var v = -1, E = i.length, I = u.length, R = -1, D = o.length, ee = Gt(E - I, 0), te = q(D + ee), ae = !h; ++R < D;) te[R] = o[R];
                        for (; ++v < I;)(ae || v < E) && (te[u[v]] = i[v]);
                        for (; ee--;) te[R++] = i[v++];
                        return te
                    }

                    function ym(i, o, u, h) {
                        for (var v = -1, E = i.length, I = -1, R = u.length, D = -1, ee = o.length, te = Gt(E - R, 0), ae = q(te + ee), me = !h; ++v < te;) ae[v] = i[v];
                        for (var we = v; ++D < ee;) ae[we + D] = o[D];
                        for (; ++I < R;)(me || v < E) && (ae[we + u[I]] = i[v++]);
                        return ae
                    }

                    function _r(i, o) {
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
                                D = h ? h(u[R], i[R], R, u, i) : r;
                            D === r && (D = i[R]), v ? Rn(u, R, D) : ba(u, R, D)
                        }
                        return u
                    }

                    function F1(i, o) {
                        return vn(i, Vu(i), o)
                    }

                    function B1(i, o) {
                        return vn(i, Lm(i), o)
                    }

                    function Yo(i, o) {
                        return function(u, h) {
                            var v = Ge(u) ? K0 : l1,
                                E = o ? o() : {};
                            return v(u, i, Le(h, 2), E)
                        }
                    }

                    function bs(i) {
                        return Ye(function(o, u) {
                            var h = -1,
                                v = u.length,
                                E = v > 1 ? u[v - 1] : r,
                                I = v > 2 ? u[2] : r;
                            for (E = i.length > 3 && typeof E == "function" ? (v--, E) : r, I && pr(u[0], u[1], I) && (E = v < 3 ? r : E, v = 1), o = mt(o); ++h < v;) {
                                var R = u[h];
                                R && i(o, R, h, E)
                            }
                            return o
                        })
                    }

                    function _m(i, o) {
                        return function(u, h) {
                            if (u == null) return u;
                            if (!Er(u)) return i(u, h);
                            for (var v = u.length, E = o ? v : -1, I = mt(u);
                                (o ? E-- : ++E < v) && h(I[E], E, I) !== !1;);
                            return u
                        }
                    }

                    function Em(i) {
                        return function(o, u, h) {
                            for (var v = -1, E = mt(o), I = h(o), R = I.length; R--;) {
                                var D = I[i ? R : ++v];
                                if (u(E[D], D, E) === !1) break
                            }
                            return o
                        }
                    }

                    function G1(i, o, u) {
                        var h = o & G,
                            v = wa(i);

                        function E() {
                            var I = this && this !== Xt && this instanceof E ? v : i;
                            return I.apply(h ? u : this, arguments)
                        }
                        return E
                    }

                    function bm(i) {
                        return function(o) {
                            o = ut(o);
                            var u = ps(o) ? tn(o) : r,
                                h = u ? u[0] : o.charAt(0),
                                v = u ? Qn(u, 1).join("") : o.slice(1);
                            return h[i]() + v
                        }
                    }

                    function Ts(i) {
                        return function(o) {
                            return lu(_v(yv(o).replace(L0, "")), i, "")
                        }
                    }

                    function wa(i) {
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
                            var u = Es(i.prototype),
                                h = i.apply(u, o);
                            return It(h) ? h : u
                        }
                    }

                    function j1(i, o, u) {
                        var h = wa(i);

                        function v() {
                            for (var E = arguments.length, I = q(E), R = E, D = As(v); R--;) I[R] = arguments[R];
                            var ee = E < 3 && I[0] !== D && I[E - 1] !== D ? [] : qn(I, D);
                            if (E -= ee.length, E < u) return wm(i, o, zo, v.placeholder, r, I, ee, r, r, u - E);
                            var te = this && this !== Xt && this instanceof v ? h : i;
                            return Ir(te, this, I)
                        }
                        return v
                    }

                    function Tm(i) {
                        return function(o, u, h) {
                            var v = mt(o);
                            if (!Er(o)) {
                                var E = Le(u, 3);
                                o = Ht(o), u = function(R) {
                                    return E(v[R], R, v)
                                }
                            }
                            var I = i(o, u, h);
                            return I > -1 ? v[E ? o[I] : I] : r
                        }
                    }

                    function Am(i) {
                        return Nn(function(o) {
                            var u = o.length,
                                h = u,
                                v = Kr.prototype.thru;
                            for (i && o.reverse(); h--;) {
                                var E = o[h];
                                if (typeof E != "function") throw new Vr(l);
                                if (v && !I && Zo(E) == "wrapper") var I = new Kr([], !0)
                            }
                            for (h = I ? h : u; ++h < u;) {
                                E = o[h];
                                var R = Zo(E),
                                    D = R == "wrapper" ? ju(E) : r;
                                D && Hu(D[0]) && D[1] == (oe | z | j | le) && !D[4].length && D[9] == 1 ? I = I[Zo(D[0])].apply(I, D[3]) : I = E.length == 1 && Hu(E) ? I[R]() : I.thru(E)
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

                    function zo(i, o, u, h, v, E, I, R, D, ee) {
                        var te = o & oe,
                            ae = o & G,
                            me = o & C,
                            we = o & (z | V),
                            Ne = o & ue,
                            He = me ? r : wa(i);

                        function Pe() {
                            for (var Xe = arguments.length, Qe = q(Xe), Nr = Xe; Nr--;) Qe[Nr] = arguments[Nr];
                            if (we) var gr = As(Pe),
                                Pr = ew(Qe, gr);
                            if (h && (Qe = vm(Qe, h, v, we)), E && (Qe = ym(Qe, E, I, we)), Xe -= Pr, we && Xe < ee) {
                                var Nt = qn(Qe, gr);
                                return wm(i, o, zo, Pe.placeholder, u, Qe, Nt, R, D, ee - Xe)
                            }
                            var sn = ae ? u : this,
                                xn = me ? sn[i] : i;
                            return Xe = Qe.length, R ? Qe = lC(Qe, R) : Ne && Xe > 1 && Qe.reverse(), te && D < Xe && (Qe.length = D), this && this !== Xt && this instanceof Pe && (xn = He || wa(xn)), xn.apply(sn, Qe)
                        }
                        return Pe
                    }

                    function Om(i, o) {
                        return function(u, h) {
                            return m1(u, i, o(h), {})
                        }
                    }

                    function Xo(i, o) {
                        return function(u, h) {
                            var v;
                            if (u === r && h === r) return o;
                            if (u !== r && (v = u), h !== r) {
                                if (v === r) return h;
                                typeof u == "string" || typeof h == "string" ? (u = Rr(u), h = Rr(h)) : (u = cm(u), h = cm(h)), v = i(u, h)
                            }
                            return v
                        }
                    }

                    function Uu(i) {
                        return Nn(function(o) {
                            return o = wt(o, $r(Le())), Ye(function(u) {
                                var h = this;
                                return i(o, function(v) {
                                    return Ir(v, h, u)
                                })
                            })
                        })
                    }

                    function Jo(i, o) {
                        o = o === r ? " " : Rr(o);
                        var u = o.length;
                        if (u < 2) return u ? Lu(o, i) : o;
                        var h = Lu(o, Mo(i / gs(o)));
                        return ps(o) ? Qn(tn(h), 0, i).join("") : h.slice(0, i)
                    }

                    function W1(i, o, u, h) {
                        var v = o & G,
                            E = wa(i);

                        function I() {
                            for (var R = -1, D = arguments.length, ee = -1, te = h.length, ae = q(te + D), me = this && this !== Xt && this instanceof I ? E : i; ++ee < te;) ae[ee] = h[ee];
                            for (; D--;) ae[ee++] = arguments[++R];
                            return Ir(me, v ? u : this, ae)
                        }
                        return I
                    }

                    function Sm(i) {
                        return function(o, u, h) {
                            return h && typeof h != "number" && pr(o, u, h) && (u = h = r), o = Dn(o), u === r ? (u = o, o = 0) : u = Dn(u), h = h === r ? o < u ? 1 : -1 : Dn(h), I1(o, u, h, i)
                        }
                    }

                    function Qo(i) {
                        return function(o, u) {
                            return typeof o == "string" && typeof u == "string" || (o = zr(o), u = zr(u)), i(o, u)
                        }
                    }

                    function wm(i, o, u, h, v, E, I, R, D, ee) {
                        var te = o & z,
                            ae = te ? I : r,
                            me = te ? r : I,
                            we = te ? E : r,
                            Ne = te ? r : E;
                        o |= te ? j : Q, o &= ~(te ? Q : j), o & H || (o &= ~(G | C));
                        var He = [i, o, v, we, ae, Ne, me, R, D, ee],
                            Pe = u.apply(r, He);
                        return Hu(i) && Um(Pe, He), Pe.placeholder = h, Fm(Pe, i, o)
                    }

                    function Fu(i) {
                        var o = Bt[i];
                        return function(u, h) {
                            if (u = zr(u), h = h == null ? 0 : ar(We(h), 292), h && Fg(u)) {
                                var v = (ut(u) + "e").split("e"),
                                    E = o(v[0] + "e" + (+v[1] + h));
                                return v = (ut(E) + "e").split("e"), +(v[0] + "e" + (+v[1] - h))
                            }
                            return o(u)
                        }
                    }
                    var V1 = ys && 1 / Co(new ys([, -0]))[1] == be ? function(i) {
                        return new ys(i)
                    } : lf;

                    function Cm(i) {
                        return function(o) {
                            var u = or(o);
                            return u == g ? gu(o) : u == re ? ow(o) : Z0(o, i(o))
                        }
                    }

                    function Ln(i, o, u, h, v, E, I, R) {
                        var D = o & C;
                        if (!D && typeof i != "function") throw new Vr(l);
                        var ee = h ? h.length : 0;
                        if (ee || (o &= ~(j | Q), h = v = r), I = I === r ? I : Gt(We(I), 0), R = R === r ? R : We(R), ee -= v ? v.length : 0, o & Q) {
                            var te = h,
                                ae = v;
                            h = v = r
                        }
                        var me = D ? r : ju(i),
                            we = [i, o, u, h, v, te, ae, E, I, R];
                        if (me && sC(we, me), i = we[0], o = we[1], u = we[2], h = we[3], v = we[4], R = we[9] = we[9] === r ? D ? 0 : i.length : Gt(we[9] - ee, 0), !R && o & (z | V) && (o &= ~(z | V)), !o || o == G) var Ne = G1(i, o, u);
                        else o == z || o == V ? Ne = j1(i, o, R) : (o == j || o == (G | j)) && !v.length ? Ne = W1(i, o, u, h) : Ne = zo.apply(r, we);
                        var He = me ? om : Um;
                        return Fm(He(Ne, we), i, o)
                    }

                    function Im(i, o, u, h) {
                        return i === r || nn(i, vs[u]) && !ht.call(h, u) ? o : i
                    }

                    function $m(i, o, u, h, v, E) {
                        return It(i) && It(o) && (E.set(o, i), Ko(i, o, r, $m, E), E.delete(o)), i
                    }

                    function K1(i) {
                        return $a(i) ? r : i
                    }

                    function Rm(i, o, u, h, v, E) {
                        var I = u & P,
                            R = i.length,
                            D = o.length;
                        if (R != D && !(I && D > R)) return !1;
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
                                if (!cu(o, function(Xe, Qe) {
                                        if (!ga(we, Qe) && (Ne === Xe || v(Ne, Xe, u, h, E))) return we.push(Qe)
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

                    function H1(i, o, u, h, v, E, I) {
                        switch (u) {
                            case S:
                                if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset) return !1;
                                i = i.buffer, o = o.buffer;
                            case De:
                                return !(i.byteLength != o.byteLength || !E(new Po(i), new Po(o)));
                            case St:
                            case ct:
                            case O:
                                return nn(+i, +o);
                            case Kt:
                                return i.name == o.name && i.message == o.message;
                            case se:
                            case $:
                                return i == o + "";
                            case g:
                                var R = gu;
                            case re:
                                var D = h & P;
                                if (R || (R = Co), i.size != o.size && !D) return !1;
                                var ee = I.get(i);
                                if (ee) return ee == o;
                                h |= M, I.set(i, o);
                                var te = Rm(R(i), R(o), h, v, E, I);
                                return I.delete(i), te;
                            case K:
                                if (Ea) return Ea.call(i) == Ea.call(o)
                        }
                        return !1
                    }

                    function q1(i, o, u, h, v, E) {
                        var I = u & P,
                            R = Bu(i),
                            D = R.length,
                            ee = Bu(o),
                            te = ee.length;
                        if (D != te && !I) return !1;
                        for (var ae = D; ae--;) {
                            var me = R[ae];
                            if (!(I ? me in o : ht.call(o, me))) return !1
                        }
                        var we = E.get(i),
                            Ne = E.get(o);
                        if (we && Ne) return we == o && Ne == i;
                        var He = !0;
                        E.set(i, o), E.set(o, i);
                        for (var Pe = I; ++ae < D;) {
                            me = R[ae];
                            var Xe = i[me],
                                Qe = o[me];
                            if (h) var Nr = I ? h(Qe, Xe, me, o, i, E) : h(Xe, Qe, me, i, o, E);
                            if (!(Nr === r ? Xe === Qe || v(Xe, Qe, u, h, E) : Nr)) {
                                He = !1;
                                break
                            }
                            Pe || (Pe = me == "constructor")
                        }
                        if (He && !Pe) {
                            var gr = i.constructor,
                                Pr = o.constructor;
                            gr != Pr && "constructor" in i && "constructor" in o && !(typeof gr == "function" && gr instanceof gr && typeof Pr == "function" && Pr instanceof Pr) && (He = !1)
                        }
                        return E.delete(i), E.delete(o), He
                    }

                    function Nn(i) {
                        return Yu(xm(i, r, Km), i + "")
                    }

                    function Bu(i) {
                        return Xg(i, Ht, Vu)
                    }

                    function Gu(i) {
                        return Xg(i, br, Lm)
                    }
                    var ju = Fo ? function(i) {
                        return Fo.get(i)
                    } : lf;

                    function Zo(i) {
                        for (var o = i.name + "", u = _s[o], h = ht.call(_s, o) ? u.length : 0; h--;) {
                            var v = u[h],
                                E = v.func;
                            if (E == null || E == i) return v.name
                        }
                        return o
                    }

                    function As(i) {
                        var o = ht.call(_, "placeholder") ? _ : i;
                        return o.placeholder
                    }

                    function Le() {
                        var i = _.iteratee || af;
                        return i = i === af ? Zg : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function el(i, o) {
                        var u = i.__data__;
                        return tC(o) ? u[typeof o == "string" ? "string" : "hash"] : u.map
                    }

                    function Wu(i) {
                        for (var o = Ht(i), u = o.length; u--;) {
                            var h = o[u],
                                v = i[h];
                            o[u] = [h, v, km(v)]
                        }
                        return o
                    }

                    function Ni(i, o) {
                        var u = iw(i, o);
                        return Qg(u) ? u : r
                    }

                    function Y1(i) {
                        var o = ht.call(i, Ci),
                            u = i[Ci];
                        try {
                            i[Ci] = r;
                            var h = !0
                        } catch {}
                        var v = Lo.call(i);
                        return h && (o ? i[Ci] = u : delete i[Ci]), v
                    }
                    var Vu = vu ? function(i) {
                            return i == null ? [] : (i = mt(i), Kn(vu(i), function(o) {
                                return Mg.call(i, o)
                            }))
                        } : cf,
                        Lm = vu ? function(i) {
                            for (var o = []; i;) Hn(o, Vu(i)), i = ko(i);
                            return o
                        } : cf,
                        or = hr;
                    (yu && or(new yu(new ArrayBuffer(1))) != S || va && or(new va) != g || _u && or(_u.resolve()) != Y || ys && or(new ys) != re || ya && or(new ya) != pe) && (or = function(i) {
                        var o = hr(i),
                            u = o == B ? i.constructor : r,
                            h = u ? Pi(u) : "";
                        if (h) switch (h) {
                            case Rw:
                                return S;
                            case Lw:
                                return g;
                            case Nw:
                                return Y;
                            case Pw:
                                return re;
                            case kw:
                                return pe
                        }
                        return o
                    });

                    function z1(i, o, u) {
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
                                    o = ar(o, i + I);
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

                    function X1(i) {
                        var o = i.match(r0);
                        return o ? o[1].split(n0) : []
                    }

                    function Nm(i, o, u) {
                        o = Jn(o, i);
                        for (var h = -1, v = o.length, E = !1; ++h < v;) {
                            var I = yn(o[h]);
                            if (!(E = i != null && u(i, I))) break;
                            i = i[I]
                        }
                        return E || ++h != v ? E : (v = i == null ? 0 : i.length, !!v && ol(v) && Pn(I, v) && (Ge(i) || ki(i)))
                    }

                    function J1(i) {
                        var o = i.length,
                            u = new i.constructor(o);
                        return o && typeof i[0] == "string" && ht.call(i, "index") && (u.index = i.index, u.input = i.input), u
                    }

                    function Pm(i) {
                        return typeof i.constructor == "function" && !Ca(i) ? Es(ko(i)) : {}
                    }

                    function Q1(i, o, u) {
                        var h = i.constructor;
                        switch (o) {
                            case De:
                                return Mu(i);
                            case St:
                            case ct:
                                return new h(+i);
                            case S:
                                return D1(i, u);
                            case T:
                            case L:
                            case A:
                            case N:
                            case Z:
                            case ne:
                            case Ee:
                            case Ae:
                            case dt:
                                return gm(i, u);
                            case g:
                                return new h;
                            case O:
                            case $:
                                return new h(i);
                            case se:
                                return x1(i);
                            case re:
                                return new h;
                            case K:
                                return M1(i)
                        }
                    }

                    function Z1(i, o) {
                        var u = o.length;
                        if (!u) return i;
                        var h = u - 1;
                        return o[h] = (u > 1 ? "& " : "") + o[h], o = o.join(u > 2 ? ", " : " "), i.replace(t0, `{
/* [wrapped with ` + o + `] */
`)
                    }

                    function eC(i) {
                        return Ge(i) || ki(i) || !!(Ug && i && i[Ug])
                    }

                    function Pn(i, o) {
                        var u = typeof i;
                        return o = o == null ? ye : o, !!o && (u == "number" || u != "symbol" && d0.test(i)) && i > -1 && i % 1 == 0 && i < o
                    }

                    function pr(i, o, u) {
                        if (!It(u)) return !1;
                        var h = typeof o;
                        return (h == "number" ? Er(u) && Pn(o, u.length) : h == "string" && o in u) ? nn(u[o], i) : !1
                    }

                    function Ku(i, o) {
                        if (Ge(i)) return !1;
                        var u = typeof i;
                        return u == "number" || u == "symbol" || u == "boolean" || i == null || Lr(i) ? !0 : JS.test(i) || !XS.test(i) || o != null && i in mt(o)
                    }

                    function tC(i) {
                        var o = typeof i;
                        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Hu(i) {
                        var o = Zo(i),
                            u = _[o];
                        if (typeof u != "function" || !(o in Je.prototype)) return !1;
                        if (i === u) return !0;
                        var h = ju(u);
                        return !!h && i === h[0]
                    }

                    function rC(i) {
                        return !!kg && kg in i
                    }
                    var nC = $o ? kn : uf;

                    function Ca(i) {
                        var o = i && i.constructor,
                            u = typeof o == "function" && o.prototype || vs;
                        return i === u
                    }

                    function km(i) {
                        return i === i && !It(i)
                    }

                    function Dm(i, o) {
                        return function(u) {
                            return u == null ? !1 : u[i] === o && (o !== r || i in mt(u))
                        }
                    }

                    function iC(i) {
                        var o = sl(i, function(h) {
                                return u.size === d && u.clear(), h
                            }),
                            u = o.cache;
                        return o
                    }

                    function sC(i, o) {
                        var u = i[1],
                            h = o[1],
                            v = u | h,
                            E = v < (G | C | oe),
                            I = h == oe && u == z || h == oe && u == le && i[7].length <= o[8] || h == (oe | le) && o[7].length <= o[8] && u == z;
                        if (!(E || I)) return i;
                        h & G && (i[2] = o[2], v |= u & G ? 0 : H);
                        var R = o[3];
                        if (R) {
                            var D = i[3];
                            i[3] = D ? vm(D, R, o[4]) : R, i[4] = D ? qn(i[3], p) : o[4]
                        }
                        return R = o[5], R && (D = i[5], i[5] = D ? ym(D, R, o[6]) : R, i[6] = D ? qn(i[5], p) : o[6]), R = o[7], R && (i[7] = R), h & oe && (i[8] = i[8] == null ? o[8] : ar(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = v, i
                    }

                    function aC(i) {
                        var o = [];
                        if (i != null)
                            for (var u in mt(i)) o.push(u);
                        return o
                    }

                    function oC(i) {
                        return Lo.call(i)
                    }

                    function xm(i, o, u) {
                        return o = Gt(o === r ? i.length - 1 : o, 0),
                            function() {
                                for (var h = arguments, v = -1, E = Gt(h.length - o, 0), I = q(E); ++v < E;) I[v] = h[o + v];
                                v = -1;
                                for (var R = q(o + 1); ++v < o;) R[v] = h[v];
                                return R[o] = u(I), Ir(i, this, R)
                            }
                    }

                    function Mm(i, o) {
                        return o.length < 2 ? i : Li(i, qr(o, 0, -1))
                    }

                    function lC(i, o) {
                        for (var u = i.length, h = ar(o.length, u), v = _r(i); h--;) {
                            var E = o[h];
                            i[h] = Pn(E, u) ? v[E] : r
                        }
                        return i
                    }

                    function qu(i, o) {
                        if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__") return i[o]
                    }
                    var Um = Bm(om),
                        Ia = Aw || function(i, o) {
                            return Xt.setTimeout(i, o)
                        },
                        Yu = Bm(L1);

                    function Fm(i, o, u) {
                        var h = o + "";
                        return Yu(i, Z1(h, cC(X1(h), u)))
                    }

                    function Bm(i) {
                        var o = 0,
                            u = 0;
                        return function() {
                            var h = Cw(),
                                v = Ce - (h - u);
                            if (u = h, v > 0) {
                                if (++o >= fe) return arguments[0]
                            } else o = 0;
                            return i.apply(r, arguments)
                        }
                    }

                    function tl(i, o) {
                        var u = -1,
                            h = i.length,
                            v = h - 1;
                        for (o = o === r ? h : o; ++u < o;) {
                            var E = Ru(u, v),
                                I = i[E];
                            i[E] = i[u], i[u] = I
                        }
                        return i.length = o, i
                    }
                    var Gm = iC(function(i) {
                        var o = [];
                        return i.charCodeAt(0) === 46 && o.push(""), i.replace(QS, function(u, h, v, E) {
                            o.push(v ? E.replace(a0, "$1") : h || u)
                        }), o
                    });

                    function yn(i) {
                        if (typeof i == "string" || Lr(i)) return i;
                        var o = i + "";
                        return o == "0" && 1 / i == -be ? "-0" : o
                    }

                    function Pi(i) {
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

                    function cC(i, o) {
                        return Wr(Cr, function(u) {
                            var h = "_." + u[0];
                            o & u[1] && !So(i, h) && i.push(h)
                        }), i.sort()
                    }

                    function jm(i) {
                        if (i instanceof Je) return i.clone();
                        var o = new Kr(i.__wrapped__, i.__chain__);
                        return o.__actions__ = _r(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o
                    }

                    function uC(i, o, u) {
                        (u ? pr(i, o, u) : o === r) ? o = 1: o = Gt(We(o), 0);
                        var h = i == null ? 0 : i.length;
                        if (!h || o < 1) return [];
                        for (var v = 0, E = 0, I = q(Mo(h / o)); v < h;) I[E++] = qr(i, v, v += o);
                        return I
                    }

                    function fC(i) {
                        for (var o = -1, u = i == null ? 0 : i.length, h = 0, v = []; ++o < u;) {
                            var E = i[o];
                            E && (v[h++] = E)
                        }
                        return v
                    }

                    function dC() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var o = q(i - 1), u = arguments[0], h = i; h--;) o[h - 1] = arguments[h];
                        return Hn(Ge(u) ? _r(u) : [u], Jt(o, 1))
                    }
                    var hC = Ye(function(i, o) {
                            return Lt(i) ? Ta(i, Jt(o, 1, Lt, !0)) : []
                        }),
                        pC = Ye(function(i, o) {
                            var u = Yr(o);
                            return Lt(u) && (u = r), Lt(i) ? Ta(i, Jt(o, 1, Lt, !0), Le(u, 2)) : []
                        }),
                        gC = Ye(function(i, o) {
                            var u = Yr(o);
                            return Lt(u) && (u = r), Lt(i) ? Ta(i, Jt(o, 1, Lt, !0), r, u) : []
                        });

                    function mC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (o = u || o === r ? 1 : We(o), qr(i, o < 0 ? 0 : o, h)) : []
                    }

                    function vC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (o = u || o === r ? 1 : We(o), o = h - o, qr(i, 0, o < 0 ? 0 : o)) : []
                    }

                    function yC(i, o) {
                        return i && i.length ? qo(i, Le(o, 3), !0, !0) : []
                    }

                    function _C(i, o) {
                        return i && i.length ? qo(i, Le(o, 3), !0) : []
                    }

                    function EC(i, o, u, h) {
                        var v = i == null ? 0 : i.length;
                        return v ? (u && typeof u != "number" && pr(i, o, u) && (u = 0, h = v), d1(i, o, u, h)) : []
                    }

                    function Wm(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = u == null ? 0 : We(u);
                        return v < 0 && (v = Gt(h + v, 0)), wo(i, Le(o, 3), v)
                    }

                    function Vm(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = h - 1;
                        return u !== r && (v = We(u), v = u < 0 ? Gt(h + v, 0) : ar(v, h - 1)), wo(i, Le(o, 3), v, !0)
                    }

                    function Km(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? Jt(i, 1) : []
                    }

                    function bC(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? Jt(i, be) : []
                    }

                    function TC(i, o) {
                        var u = i == null ? 0 : i.length;
                        return u ? (o = o === r ? 1 : We(o), Jt(i, o)) : []
                    }

                    function AC(i) {
                        for (var o = -1, u = i == null ? 0 : i.length, h = {}; ++o < u;) {
                            var v = i[o];
                            h[v[0]] = v[1]
                        }
                        return h
                    }

                    function Hm(i) {
                        return i && i.length ? i[0] : r
                    }

                    function OC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = u == null ? 0 : We(u);
                        return v < 0 && (v = Gt(h + v, 0)), hs(i, o, v)
                    }

                    function SC(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? qr(i, 0, -1) : []
                    }
                    var wC = Ye(function(i) {
                            var o = wt(i, Du);
                            return o.length && o[0] === i[0] ? Su(o) : []
                        }),
                        CC = Ye(function(i) {
                            var o = Yr(i),
                                u = wt(i, Du);
                            return o === Yr(u) ? o = r : u.pop(), u.length && u[0] === i[0] ? Su(u, Le(o, 2)) : []
                        }),
                        IC = Ye(function(i) {
                            var o = Yr(i),
                                u = wt(i, Du);
                            return o = typeof o == "function" ? o : r, o && u.pop(), u.length && u[0] === i[0] ? Su(u, r, o) : []
                        });

                    function $C(i, o) {
                        return i == null ? "" : Sw.call(i, o)
                    }

                    function Yr(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? i[o - 1] : r
                    }

                    function RC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        if (!h) return -1;
                        var v = h;
                        return u !== r && (v = We(u), v = v < 0 ? Gt(h + v, 0) : ar(v, h - 1)), o === o ? cw(i, o, v) : wo(i, wg, v, !0)
                    }

                    function LC(i, o) {
                        return i && i.length ? nm(i, We(o)) : r
                    }
                    var NC = Ye(qm);

                    function qm(i, o) {
                        return i && i.length && o && o.length ? $u(i, o) : i
                    }

                    function PC(i, o, u) {
                        return i && i.length && o && o.length ? $u(i, o, Le(u, 2)) : i
                    }

                    function kC(i, o, u) {
                        return i && i.length && o && o.length ? $u(i, o, r, u) : i
                    }
                    var DC = Nn(function(i, o) {
                        var u = i == null ? 0 : i.length,
                            h = bu(i, o);
                        return am(i, wt(o, function(v) {
                            return Pn(v, u) ? +v : v
                        }).sort(mm)), h
                    });

                    function xC(i, o) {
                        var u = [];
                        if (!(i && i.length)) return u;
                        var h = -1,
                            v = [],
                            E = i.length;
                        for (o = Le(o, 3); ++h < E;) {
                            var I = i[h];
                            o(I, h, i) && (u.push(I), v.push(h))
                        }
                        return am(i, v), u
                    }

                    function zu(i) {
                        return i == null ? i : $w.call(i)
                    }

                    function MC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (u && typeof u != "number" && pr(i, o, u) ? (o = 0, u = h) : (o = o == null ? 0 : We(o), u = u === r ? h : We(u)), qr(i, o, u)) : []
                    }

                    function UC(i, o) {
                        return Ho(i, o)
                    }

                    function FC(i, o, u) {
                        return Nu(i, o, Le(u, 2))
                    }

                    function BC(i, o) {
                        var u = i == null ? 0 : i.length;
                        if (u) {
                            var h = Ho(i, o);
                            if (h < u && nn(i[h], o)) return h
                        }
                        return -1
                    }

                    function GC(i, o) {
                        return Ho(i, o, !0)
                    }

                    function jC(i, o, u) {
                        return Nu(i, o, Le(u, 2), !0)
                    }

                    function WC(i, o) {
                        var u = i == null ? 0 : i.length;
                        if (u) {
                            var h = Ho(i, o, !0) - 1;
                            if (nn(i[h], o)) return h
                        }
                        return -1
                    }

                    function VC(i) {
                        return i && i.length ? lm(i) : []
                    }

                    function KC(i, o) {
                        return i && i.length ? lm(i, Le(o, 2)) : []
                    }

                    function HC(i) {
                        var o = i == null ? 0 : i.length;
                        return o ? qr(i, 1, o) : []
                    }

                    function qC(i, o, u) {
                        return i && i.length ? (o = u || o === r ? 1 : We(o), qr(i, 0, o < 0 ? 0 : o)) : []
                    }

                    function YC(i, o, u) {
                        var h = i == null ? 0 : i.length;
                        return h ? (o = u || o === r ? 1 : We(o), o = h - o, qr(i, o < 0 ? 0 : o, h)) : []
                    }

                    function zC(i, o) {
                        return i && i.length ? qo(i, Le(o, 3), !1, !0) : []
                    }

                    function XC(i, o) {
                        return i && i.length ? qo(i, Le(o, 3)) : []
                    }
                    var JC = Ye(function(i) {
                            return Xn(Jt(i, 1, Lt, !0))
                        }),
                        QC = Ye(function(i) {
                            var o = Yr(i);
                            return Lt(o) && (o = r), Xn(Jt(i, 1, Lt, !0), Le(o, 2))
                        }),
                        ZC = Ye(function(i) {
                            var o = Yr(i);
                            return o = typeof o == "function" ? o : r, Xn(Jt(i, 1, Lt, !0), r, o)
                        });

                    function eI(i) {
                        return i && i.length ? Xn(i) : []
                    }

                    function tI(i, o) {
                        return i && i.length ? Xn(i, Le(o, 2)) : []
                    }

                    function rI(i, o) {
                        return o = typeof o == "function" ? o : r, i && i.length ? Xn(i, r, o) : []
                    }

                    function Xu(i) {
                        if (!(i && i.length)) return [];
                        var o = 0;
                        return i = Kn(i, function(u) {
                            if (Lt(u)) return o = Gt(u.length, o), !0
                        }), hu(o, function(u) {
                            return wt(i, uu(u))
                        })
                    }

                    function Ym(i, o) {
                        if (!(i && i.length)) return [];
                        var u = Xu(i);
                        return o == null ? u : wt(u, function(h) {
                            return Ir(o, r, h)
                        })
                    }
                    var nI = Ye(function(i, o) {
                            return Lt(i) ? Ta(i, o) : []
                        }),
                        iI = Ye(function(i) {
                            return ku(Kn(i, Lt))
                        }),
                        sI = Ye(function(i) {
                            var o = Yr(i);
                            return Lt(o) && (o = r), ku(Kn(i, Lt), Le(o, 2))
                        }),
                        aI = Ye(function(i) {
                            var o = Yr(i);
                            return o = typeof o == "function" ? o : r, ku(Kn(i, Lt), r, o)
                        }),
                        oI = Ye(Xu);

                    function lI(i, o) {
                        return dm(i || [], o || [], ba)
                    }

                    function cI(i, o) {
                        return dm(i || [], o || [], Sa)
                    }
                    var uI = Ye(function(i) {
                        var o = i.length,
                            u = o > 1 ? i[o - 1] : r;
                        return u = typeof u == "function" ? (i.pop(), u) : r, Ym(i, u)
                    });

                    function zm(i) {
                        var o = _(i);
                        return o.__chain__ = !0, o
                    }

                    function fI(i, o) {
                        return o(i), i
                    }

                    function rl(i, o) {
                        return o(i)
                    }
                    var dI = Nn(function(i) {
                        var o = i.length,
                            u = o ? i[0] : 0,
                            h = this.__wrapped__,
                            v = function(E) {
                                return bu(E, i)
                            };
                        return o > 1 || this.__actions__.length || !(h instanceof Je) || !Pn(u) ? this.thru(v) : (h = h.slice(u, +u + (o ? 1 : 0)), h.__actions__.push({
                            func: rl,
                            args: [v],
                            thisArg: r
                        }), new Kr(h, this.__chain__).thru(function(E) {
                            return o && !E.length && E.push(r), E
                        }))
                    });

                    function hI() {
                        return zm(this)
                    }

                    function pI() {
                        return new Kr(this.value(), this.__chain__)
                    }

                    function gI() {
                        this.__values__ === r && (this.__values__ = cv(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            o = i ? r : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: o
                        }
                    }

                    function mI() {
                        return this
                    }

                    function vI(i) {
                        for (var o, u = this; u instanceof Go;) {
                            var h = jm(u);
                            h.__index__ = 0, h.__values__ = r, o ? v.__wrapped__ = h : o = h;
                            var v = h;
                            u = u.__wrapped__
                        }
                        return v.__wrapped__ = i, o
                    }

                    function yI() {
                        var i = this.__wrapped__;
                        if (i instanceof Je) {
                            var o = i;
                            return this.__actions__.length && (o = new Je(this)), o = o.reverse(), o.__actions__.push({
                                func: rl,
                                args: [zu],
                                thisArg: r
                            }), new Kr(o, this.__chain__)
                        }
                        return this.thru(zu)
                    }

                    function _I() {
                        return fm(this.__wrapped__, this.__actions__)
                    }
                    var EI = Yo(function(i, o, u) {
                        ht.call(i, u) ? ++i[u] : Rn(i, u, 1)
                    });

                    function bI(i, o, u) {
                        var h = Ge(i) ? Og : f1;
                        return u && pr(i, o, u) && (o = r), h(i, Le(o, 3))
                    }

                    function TI(i, o) {
                        var u = Ge(i) ? Kn : Yg;
                        return u(i, Le(o, 3))
                    }
                    var AI = Tm(Wm),
                        OI = Tm(Vm);

                    function SI(i, o) {
                        return Jt(nl(i, o), 1)
                    }

                    function wI(i, o) {
                        return Jt(nl(i, o), be)
                    }

                    function CI(i, o, u) {
                        return u = u === r ? 1 : We(u), Jt(nl(i, o), u)
                    }

                    function Xm(i, o) {
                        var u = Ge(i) ? Wr : zn;
                        return u(i, Le(o, 3))
                    }

                    function Jm(i, o) {
                        var u = Ge(i) ? H0 : qg;
                        return u(i, Le(o, 3))
                    }
                    var II = Yo(function(i, o, u) {
                        ht.call(i, u) ? i[u].push(o) : Rn(i, u, [o])
                    });

                    function $I(i, o, u, h) {
                        i = Er(i) ? i : Ss(i), u = u && !h ? We(u) : 0;
                        var v = i.length;
                        return u < 0 && (u = Gt(v + u, 0)), ll(i) ? u <= v && i.indexOf(o, u) > -1 : !!v && hs(i, o, u) > -1
                    }
                    var RI = Ye(function(i, o, u) {
                            var h = -1,
                                v = typeof o == "function",
                                E = Er(i) ? q(i.length) : [];
                            return zn(i, function(I) {
                                E[++h] = v ? Ir(o, I, u) : Aa(I, o, u)
                            }), E
                        }),
                        LI = Yo(function(i, o, u) {
                            Rn(i, u, o)
                        });

                    function nl(i, o) {
                        var u = Ge(i) ? wt : em;
                        return u(i, Le(o, 3))
                    }

                    function NI(i, o, u, h) {
                        return i == null ? [] : (Ge(o) || (o = o == null ? [] : [o]), u = h ? r : u, Ge(u) || (u = u == null ? [] : [u]), im(i, o, u))
                    }
                    var PI = Yo(function(i, o, u) {
                        i[u ? 0 : 1].push(o)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function kI(i, o, u) {
                        var h = Ge(i) ? lu : Ig,
                            v = arguments.length < 3;
                        return h(i, Le(o, 4), u, v, zn)
                    }

                    function DI(i, o, u) {
                        var h = Ge(i) ? q0 : Ig,
                            v = arguments.length < 3;
                        return h(i, Le(o, 4), u, v, qg)
                    }

                    function xI(i, o) {
                        var u = Ge(i) ? Kn : Yg;
                        return u(i, al(Le(o, 3)))
                    }

                    function MI(i) {
                        var o = Ge(i) ? Wg : $1;
                        return o(i)
                    }

                    function UI(i, o, u) {
                        (u ? pr(i, o, u) : o === r) ? o = 1: o = We(o);
                        var h = Ge(i) ? a1 : R1;
                        return h(i, o)
                    }

                    function FI(i) {
                        var o = Ge(i) ? o1 : N1;
                        return o(i)
                    }

                    function BI(i) {
                        if (i == null) return 0;
                        if (Er(i)) return ll(i) ? gs(i) : i.length;
                        var o = or(i);
                        return o == g || o == re ? i.size : Cu(i).length
                    }

                    function GI(i, o, u) {
                        var h = Ge(i) ? cu : P1;
                        return u && pr(i, o, u) && (o = r), h(i, Le(o, 3))
                    }
                    var jI = Ye(function(i, o) {
                            if (i == null) return [];
                            var u = o.length;
                            return u > 1 && pr(i, o[0], o[1]) ? o = [] : u > 2 && pr(o[0], o[1], o[2]) && (o = [o[0]]), im(i, Jt(o, 1), [])
                        }),
                        il = Tw || function() {
                            return Xt.Date.now()
                        };

                    function WI(i, o) {
                        if (typeof o != "function") throw new Vr(l);
                        return i = We(i),
                            function() {
                                if (--i < 1) return o.apply(this, arguments)
                            }
                    }

                    function Qm(i, o, u) {
                        return o = u ? r : o, o = i && o == null ? i.length : o, Ln(i, oe, r, r, r, r, o)
                    }

                    function Zm(i, o) {
                        var u;
                        if (typeof o != "function") throw new Vr(l);
                        return i = We(i),
                            function() {
                                return --i > 0 && (u = o.apply(this, arguments)), i <= 1 && (o = r), u
                            }
                    }
                    var Ju = Ye(function(i, o, u) {
                            var h = G;
                            if (u.length) {
                                var v = qn(u, As(Ju));
                                h |= j
                            }
                            return Ln(i, h, o, u, v)
                        }),
                        ev = Ye(function(i, o, u) {
                            var h = G | C;
                            if (u.length) {
                                var v = qn(u, As(ev));
                                h |= j
                            }
                            return Ln(o, h, i, u, v)
                        });

                    function tv(i, o, u) {
                        o = u ? r : o;
                        var h = Ln(i, z, r, r, r, r, r, o);
                        return h.placeholder = tv.placeholder, h
                    }

                    function rv(i, o, u) {
                        o = u ? r : o;
                        var h = Ln(i, V, r, r, r, r, r, o);
                        return h.placeholder = rv.placeholder, h
                    }

                    function nv(i, o, u) {
                        var h, v, E, I, R, D, ee = 0,
                            te = !1,
                            ae = !1,
                            me = !0;
                        if (typeof i != "function") throw new Vr(l);
                        o = zr(o) || 0, It(u) && (te = !!u.leading, ae = "maxWait" in u, E = ae ? Gt(zr(u.maxWait) || 0, o) : E, me = "trailing" in u ? !!u.trailing : me);

                        function we(Nt) {
                            var sn = h,
                                xn = v;
                            return h = v = r, ee = Nt, I = i.apply(xn, sn), I
                        }

                        function Ne(Nt) {
                            return ee = Nt, R = Ia(Xe, o), te ? we(Nt) : I
                        }

                        function He(Nt) {
                            var sn = Nt - D,
                                xn = Nt - ee,
                                Tv = o - sn;
                            return ae ? ar(Tv, E - xn) : Tv
                        }

                        function Pe(Nt) {
                            var sn = Nt - D,
                                xn = Nt - ee;
                            return D === r || sn >= o || sn < 0 || ae && xn >= E
                        }

                        function Xe() {
                            var Nt = il();
                            if (Pe(Nt)) return Qe(Nt);
                            R = Ia(Xe, He(Nt))
                        }

                        function Qe(Nt) {
                            return R = r, me && h ? we(Nt) : (h = v = r, I)
                        }

                        function Nr() {
                            R !== r && hm(R), ee = 0, h = D = v = R = r
                        }

                        function gr() {
                            return R === r ? I : Qe(il())
                        }

                        function Pr() {
                            var Nt = il(),
                                sn = Pe(Nt);
                            if (h = arguments, v = this, D = Nt, sn) {
                                if (R === r) return Ne(D);
                                if (ae) return hm(R), R = Ia(Xe, o), we(D)
                            }
                            return R === r && (R = Ia(Xe, o)), I
                        }
                        return Pr.cancel = Nr, Pr.flush = gr, Pr
                    }
                    var VI = Ye(function(i, o) {
                            return Hg(i, 1, o)
                        }),
                        KI = Ye(function(i, o, u) {
                            return Hg(i, zr(o) || 0, u)
                        });

                    function HI(i) {
                        return Ln(i, ue)
                    }

                    function sl(i, o) {
                        if (typeof i != "function" || o != null && typeof o != "function") throw new Vr(l);
                        var u = function() {
                            var h = arguments,
                                v = o ? o.apply(this, h) : h[0],
                                E = u.cache;
                            if (E.has(v)) return E.get(v);
                            var I = i.apply(this, h);
                            return u.cache = E.set(v, I) || E, I
                        };
                        return u.cache = new(sl.Cache || $n), u
                    }
                    sl.Cache = $n;

                    function al(i) {
                        if (typeof i != "function") throw new Vr(l);
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

                    function qI(i) {
                        return Zm(2, i)
                    }
                    var YI = k1(function(i, o) {
                            o = o.length == 1 && Ge(o[0]) ? wt(o[0], $r(Le())) : wt(Jt(o, 1), $r(Le()));
                            var u = o.length;
                            return Ye(function(h) {
                                for (var v = -1, E = ar(h.length, u); ++v < E;) h[v] = o[v].call(this, h[v]);
                                return Ir(i, this, h)
                            })
                        }),
                        Qu = Ye(function(i, o) {
                            var u = qn(o, As(Qu));
                            return Ln(i, j, r, o, u)
                        }),
                        iv = Ye(function(i, o) {
                            var u = qn(o, As(iv));
                            return Ln(i, Q, r, o, u)
                        }),
                        zI = Nn(function(i, o) {
                            return Ln(i, le, r, r, r, o)
                        });

                    function XI(i, o) {
                        if (typeof i != "function") throw new Vr(l);
                        return o = o === r ? o : We(o), Ye(i, o)
                    }

                    function JI(i, o) {
                        if (typeof i != "function") throw new Vr(l);
                        return o = o == null ? 0 : Gt(We(o), 0), Ye(function(u) {
                            var h = u[o],
                                v = Qn(u, 0, o);
                            return h && Hn(v, h), Ir(i, this, v)
                        })
                    }

                    function QI(i, o, u) {
                        var h = !0,
                            v = !0;
                        if (typeof i != "function") throw new Vr(l);
                        return It(u) && (h = "leading" in u ? !!u.leading : h, v = "trailing" in u ? !!u.trailing : v), nv(i, o, {
                            leading: h,
                            maxWait: o,
                            trailing: v
                        })
                    }

                    function ZI(i) {
                        return Qm(i, 1)
                    }

                    function e$(i, o) {
                        return Qu(xu(o), i)
                    }

                    function t$() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return Ge(i) ? i : [i]
                    }

                    function r$(i) {
                        return Hr(i, w)
                    }

                    function n$(i, o) {
                        return o = typeof o == "function" ? o : r, Hr(i, w, o)
                    }

                    function i$(i) {
                        return Hr(i, y | w)
                    }

                    function s$(i, o) {
                        return o = typeof o == "function" ? o : r, Hr(i, y | w, o)
                    }

                    function a$(i, o) {
                        return o == null || Kg(i, o, Ht(o))
                    }

                    function nn(i, o) {
                        return i === o || i !== i && o !== o
                    }
                    var o$ = Qo(Ou),
                        l$ = Qo(function(i, o) {
                            return i >= o
                        }),
                        ki = Jg(function() {
                            return arguments
                        }()) ? Jg : function(i) {
                            return Rt(i) && ht.call(i, "callee") && !Mg.call(i, "callee")
                        },
                        Ge = q.isArray,
                        c$ = yg ? $r(yg) : v1;

                    function Er(i) {
                        return i != null && ol(i.length) && !kn(i)
                    }

                    function Lt(i) {
                        return Rt(i) && Er(i)
                    }

                    function u$(i) {
                        return i === !0 || i === !1 || Rt(i) && hr(i) == St
                    }
                    var Zn = Ow || uf,
                        f$ = _g ? $r(_g) : y1;

                    function d$(i) {
                        return Rt(i) && i.nodeType === 1 && !$a(i)
                    }

                    function h$(i) {
                        if (i == null) return !0;
                        if (Er(i) && (Ge(i) || typeof i == "string" || typeof i.splice == "function" || Zn(i) || Os(i) || ki(i))) return !i.length;
                        var o = or(i);
                        if (o == g || o == re) return !i.size;
                        if (Ca(i)) return !Cu(i).length;
                        for (var u in i)
                            if (ht.call(i, u)) return !1;
                        return !0
                    }

                    function p$(i, o) {
                        return Oa(i, o)
                    }

                    function g$(i, o, u) {
                        u = typeof u == "function" ? u : r;
                        var h = u ? u(i, o) : r;
                        return h === r ? Oa(i, o, r, u) : !!h
                    }

                    function Zu(i) {
                        if (!Rt(i)) return !1;
                        var o = hr(i);
                        return o == Kt || o == Dt || typeof i.message == "string" && typeof i.name == "string" && !$a(i)
                    }

                    function m$(i) {
                        return typeof i == "number" && Fg(i)
                    }

                    function kn(i) {
                        if (!It(i)) return !1;
                        var o = hr(i);
                        return o == xt || o == m || o == lt || o == ce
                    }

                    function sv(i) {
                        return typeof i == "number" && i == We(i)
                    }

                    function ol(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ye
                    }

                    function It(i) {
                        var o = typeof i;
                        return i != null && (o == "object" || o == "function")
                    }

                    function Rt(i) {
                        return i != null && typeof i == "object"
                    }
                    var av = Eg ? $r(Eg) : E1;

                    function v$(i, o) {
                        return i === o || wu(i, o, Wu(o))
                    }

                    function y$(i, o, u) {
                        return u = typeof u == "function" ? u : r, wu(i, o, Wu(o), u)
                    }

                    function _$(i) {
                        return ov(i) && i != +i
                    }

                    function E$(i) {
                        if (nC(i)) throw new Fe(a);
                        return Qg(i)
                    }

                    function b$(i) {
                        return i === null
                    }

                    function T$(i) {
                        return i == null
                    }

                    function ov(i) {
                        return typeof i == "number" || Rt(i) && hr(i) == O
                    }

                    function $a(i) {
                        if (!Rt(i) || hr(i) != B) return !1;
                        var o = ko(i);
                        if (o === null) return !0;
                        var u = ht.call(o, "constructor") && o.constructor;
                        return typeof u == "function" && u instanceof u && Ro.call(u) == yw
                    }
                    var ef = bg ? $r(bg) : b1;

                    function A$(i) {
                        return sv(i) && i >= -ye && i <= ye
                    }
                    var lv = Tg ? $r(Tg) : T1;

                    function ll(i) {
                        return typeof i == "string" || !Ge(i) && Rt(i) && hr(i) == $
                    }

                    function Lr(i) {
                        return typeof i == "symbol" || Rt(i) && hr(i) == K
                    }
                    var Os = Ag ? $r(Ag) : A1;

                    function O$(i) {
                        return i === r
                    }

                    function S$(i) {
                        return Rt(i) && or(i) == pe
                    }

                    function w$(i) {
                        return Rt(i) && hr(i) == Re
                    }
                    var C$ = Qo(Iu),
                        I$ = Qo(function(i, o) {
                            return i <= o
                        });

                    function cv(i) {
                        if (!i) return [];
                        if (Er(i)) return ll(i) ? tn(i) : _r(i);
                        if (ma && i[ma]) return aw(i[ma]());
                        var o = or(i),
                            u = o == g ? gu : o == re ? Co : Ss;
                        return u(i)
                    }

                    function Dn(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = zr(i), i === be || i === -be) {
                            var o = i < 0 ? -1 : 1;
                            return o * Se
                        }
                        return i === i ? i : 0
                    }

                    function We(i) {
                        var o = Dn(i),
                            u = o % 1;
                        return o === o ? u ? o - u : o : 0
                    }

                    function uv(i) {
                        return i ? Ri(We(i), 0, je) : 0
                    }

                    function zr(i) {
                        if (typeof i == "number") return i;
                        if (Lr(i)) return Ue;
                        if (It(i)) {
                            var o = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = It(o) ? o + "" : o
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = $g(i);
                        var u = c0.test(i);
                        return u || f0.test(i) ? W0(i.slice(2), u ? 2 : 8) : l0.test(i) ? Ue : +i
                    }

                    function fv(i) {
                        return vn(i, br(i))
                    }

                    function $$(i) {
                        return i ? Ri(We(i), -ye, ye) : i === 0 ? i : 0
                    }

                    function ut(i) {
                        return i == null ? "" : Rr(i)
                    }
                    var R$ = bs(function(i, o) {
                            if (Ca(o) || Er(o)) {
                                vn(o, Ht(o), i);
                                return
                            }
                            for (var u in o) ht.call(o, u) && ba(i, u, o[u])
                        }),
                        dv = bs(function(i, o) {
                            vn(o, br(o), i)
                        }),
                        cl = bs(function(i, o, u, h) {
                            vn(o, br(o), i, h)
                        }),
                        L$ = bs(function(i, o, u, h) {
                            vn(o, Ht(o), i, h)
                        }),
                        N$ = Nn(bu);

                    function P$(i, o) {
                        var u = Es(i);
                        return o == null ? u : Vg(u, o)
                    }
                    var k$ = Ye(function(i, o) {
                            i = mt(i);
                            var u = -1,
                                h = o.length,
                                v = h > 2 ? o[2] : r;
                            for (v && pr(o[0], o[1], v) && (h = 1); ++u < h;)
                                for (var E = o[u], I = br(E), R = -1, D = I.length; ++R < D;) {
                                    var ee = I[R],
                                        te = i[ee];
                                    (te === r || nn(te, vs[ee]) && !ht.call(i, ee)) && (i[ee] = E[ee])
                                }
                            return i
                        }),
                        D$ = Ye(function(i) {
                            return i.push(r, $m), Ir(hv, r, i)
                        });

                    function x$(i, o) {
                        return Sg(i, Le(o, 3), mn)
                    }

                    function M$(i, o) {
                        return Sg(i, Le(o, 3), Au)
                    }

                    function U$(i, o) {
                        return i == null ? i : Tu(i, Le(o, 3), br)
                    }

                    function F$(i, o) {
                        return i == null ? i : zg(i, Le(o, 3), br)
                    }

                    function B$(i, o) {
                        return i && mn(i, Le(o, 3))
                    }

                    function G$(i, o) {
                        return i && Au(i, Le(o, 3))
                    }

                    function j$(i) {
                        return i == null ? [] : Vo(i, Ht(i))
                    }

                    function W$(i) {
                        return i == null ? [] : Vo(i, br(i))
                    }

                    function tf(i, o, u) {
                        var h = i == null ? r : Li(i, o);
                        return h === r ? u : h
                    }

                    function V$(i, o) {
                        return i != null && Nm(i, o, h1)
                    }

                    function rf(i, o) {
                        return i != null && Nm(i, o, p1)
                    }
                    var K$ = Om(function(i, o, u) {
                            o != null && typeof o.toString != "function" && (o = Lo.call(o)), i[o] = u
                        }, sf(Tr)),
                        H$ = Om(function(i, o, u) {
                            o != null && typeof o.toString != "function" && (o = Lo.call(o)), ht.call(i, o) ? i[o].push(u) : i[o] = [u]
                        }, Le),
                        q$ = Ye(Aa);

                    function Ht(i) {
                        return Er(i) ? jg(i) : Cu(i)
                    }

                    function br(i) {
                        return Er(i) ? jg(i, !0) : O1(i)
                    }

                    function Y$(i, o) {
                        var u = {};
                        return o = Le(o, 3), mn(i, function(h, v, E) {
                            Rn(u, o(h, v, E), h)
                        }), u
                    }

                    function z$(i, o) {
                        var u = {};
                        return o = Le(o, 3), mn(i, function(h, v, E) {
                            Rn(u, v, o(h, v, E))
                        }), u
                    }
                    var X$ = bs(function(i, o, u) {
                            Ko(i, o, u)
                        }),
                        hv = bs(function(i, o, u, h) {
                            Ko(i, o, u, h)
                        }),
                        J$ = Nn(function(i, o) {
                            var u = {};
                            if (i == null) return u;
                            var h = !1;
                            o = wt(o, function(E) {
                                return E = Jn(E, i), h || (h = E.length > 1), E
                            }), vn(i, Gu(i), u), h && (u = Hr(u, y | b | w, K1));
                            for (var v = o.length; v--;) Pu(u, o[v]);
                            return u
                        });

                    function Q$(i, o) {
                        return pv(i, al(Le(o)))
                    }
                    var Z$ = Nn(function(i, o) {
                        return i == null ? {} : w1(i, o)
                    });

                    function pv(i, o) {
                        if (i == null) return {};
                        var u = wt(Gu(i), function(h) {
                            return [h]
                        });
                        return o = Le(o), sm(i, u, function(h, v) {
                            return o(h, v[0])
                        })
                    }

                    function eR(i, o, u) {
                        o = Jn(o, i);
                        var h = -1,
                            v = o.length;
                        for (v || (v = 1, i = r); ++h < v;) {
                            var E = i == null ? r : i[yn(o[h])];
                            E === r && (h = v, E = u), i = kn(E) ? E.call(i) : E
                        }
                        return i
                    }

                    function tR(i, o, u) {
                        return i == null ? i : Sa(i, o, u)
                    }

                    function rR(i, o, u, h) {
                        return h = typeof h == "function" ? h : r, i == null ? i : Sa(i, o, u, h)
                    }
                    var gv = Cm(Ht),
                        mv = Cm(br);

                    function nR(i, o, u) {
                        var h = Ge(i),
                            v = h || Zn(i) || Os(i);
                        if (o = Le(o, 4), u == null) {
                            var E = i && i.constructor;
                            v ? u = h ? new E : [] : It(i) ? u = kn(E) ? Es(ko(i)) : {} : u = {}
                        }
                        return (v ? Wr : mn)(i, function(I, R, D) {
                            return o(u, I, R, D)
                        }), u
                    }

                    function iR(i, o) {
                        return i == null ? !0 : Pu(i, o)
                    }

                    function sR(i, o, u) {
                        return i == null ? i : um(i, o, xu(u))
                    }

                    function aR(i, o, u, h) {
                        return h = typeof h == "function" ? h : r, i == null ? i : um(i, o, xu(u), h)
                    }

                    function Ss(i) {
                        return i == null ? [] : pu(i, Ht(i))
                    }

                    function oR(i) {
                        return i == null ? [] : pu(i, br(i))
                    }

                    function lR(i, o, u) {
                        return u === r && (u = o, o = r), u !== r && (u = zr(u), u = u === u ? u : 0), o !== r && (o = zr(o), o = o === o ? o : 0), Ri(zr(i), o, u)
                    }

                    function cR(i, o, u) {
                        return o = Dn(o), u === r ? (u = o, o = 0) : u = Dn(u), i = zr(i), g1(i, o, u)
                    }

                    function uR(i, o, u) {
                        if (u && typeof u != "boolean" && pr(i, o, u) && (o = u = r), u === r && (typeof o == "boolean" ? (u = o, o = r) : typeof i == "boolean" && (u = i, i = r)), i === r && o === r ? (i = 0, o = 1) : (i = Dn(i), o === r ? (o = i, i = 0) : o = Dn(o)), i > o) {
                            var h = i;
                            i = o, o = h
                        }
                        if (u || i % 1 || o % 1) {
                            var v = Bg();
                            return ar(i + v * (o - i + j0("1e-" + ((v + "").length - 1))), o)
                        }
                        return Ru(i, o)
                    }
                    var fR = Ts(function(i, o, u) {
                        return o = o.toLowerCase(), i + (u ? vv(o) : o)
                    });

                    function vv(i) {
                        return nf(ut(i).toLowerCase())
                    }

                    function yv(i) {
                        return i = ut(i), i && i.replace(h0, tw).replace(N0, "")
                    }

                    function dR(i, o, u) {
                        i = ut(i), o = Rr(o);
                        var h = i.length;
                        u = u === r ? h : Ri(We(u), 0, h);
                        var v = u;
                        return u -= o.length, u >= 0 && i.slice(u, v) == o
                    }

                    function hR(i) {
                        return i = ut(i), i && qS.test(i) ? i.replace(zp, rw) : i
                    }

                    function pR(i) {
                        return i = ut(i), i && ZS.test(i) ? i.replace(Qc, "\\$&") : i
                    }
                    var gR = Ts(function(i, o, u) {
                            return i + (u ? "-" : "") + o.toLowerCase()
                        }),
                        mR = Ts(function(i, o, u) {
                            return i + (u ? " " : "") + o.toLowerCase()
                        }),
                        vR = bm("toLowerCase");

                    function yR(i, o, u) {
                        i = ut(i), o = We(o);
                        var h = o ? gs(i) : 0;
                        if (!o || h >= o) return i;
                        var v = (o - h) / 2;
                        return Jo(Uo(v), u) + i + Jo(Mo(v), u)
                    }

                    function _R(i, o, u) {
                        i = ut(i), o = We(o);
                        var h = o ? gs(i) : 0;
                        return o && h < o ? i + Jo(o - h, u) : i
                    }

                    function ER(i, o, u) {
                        i = ut(i), o = We(o);
                        var h = o ? gs(i) : 0;
                        return o && h < o ? Jo(o - h, u) + i : i
                    }

                    function bR(i, o, u) {
                        return u || o == null ? o = 0 : o && (o = +o), Iw(ut(i).replace(Zc, ""), o || 0)
                    }

                    function TR(i, o, u) {
                        return (u ? pr(i, o, u) : o === r) ? o = 1 : o = We(o), Lu(ut(i), o)
                    }

                    function AR() {
                        var i = arguments,
                            o = ut(i[0]);
                        return i.length < 3 ? o : o.replace(i[1], i[2])
                    }
                    var OR = Ts(function(i, o, u) {
                        return i + (u ? "_" : "") + o.toLowerCase()
                    });

                    function SR(i, o, u) {
                        return u && typeof u != "number" && pr(i, o, u) && (o = u = r), u = u === r ? je : u >>> 0, u ? (i = ut(i), i && (typeof o == "string" || o != null && !ef(o)) && (o = Rr(o), !o && ps(i)) ? Qn(tn(i), 0, u) : i.split(o, u)) : []
                    }
                    var wR = Ts(function(i, o, u) {
                        return i + (u ? " " : "") + nf(o)
                    });

                    function CR(i, o, u) {
                        return i = ut(i), u = u == null ? 0 : Ri(We(u), 0, i.length), o = Rr(o), i.slice(u, u + o.length) == o
                    }

                    function IR(i, o, u) {
                        var h = _.templateSettings;
                        u && pr(i, o, u) && (o = r), i = ut(i), o = cl({}, o, h, Im);
                        var v = cl({}, o.imports, h.imports, Im),
                            E = Ht(v),
                            I = pu(v, E),
                            R, D, ee = 0,
                            te = o.interpolate || To,
                            ae = "__p += '",
                            me = mu((o.escape || To).source + "|" + te.source + "|" + (te === Xp ? o0 : To).source + "|" + (o.evaluate || To).source + "|$", "g"),
                            we = "//# sourceURL=" + (ht.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++M0 + "]") + `
`;
                        i.replace(me, function(Pe, Xe, Qe, Nr, gr, Pr) {
                            return Qe || (Qe = Nr), ae += i.slice(ee, Pr).replace(p0, nw), Xe && (R = !0, ae += `' +
__e(` + Xe + `) +
'`), gr && (D = !0, ae += `';
` + gr + `;
__p += '`), Qe && (ae += `' +
((__t = (` + Qe + `)) == null ? '' : __t) +
'`), ee = Pr + Pe.length, Pe
                        }), ae += `';
`;
                        var Ne = ht.call(o, "variable") && o.variable;
                        if (!Ne) ae = `with (obj) {
` + ae + `
}
`;
                        else if (s0.test(Ne)) throw new Fe(c);
                        ae = (D ? ae.replace(sr, "") : ae).replace(xe, "$1").replace(pa, "$1;"), ae = "function(" + (Ne || "obj") + `) {
` + (Ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (D ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
                        var He = Ev(function() {
                            return at(E, we + "return " + ae).apply(r, I)
                        });
                        if (He.source = ae, Zu(He)) throw He;
                        return He
                    }

                    function $R(i) {
                        return ut(i).toLowerCase()
                    }

                    function RR(i) {
                        return ut(i).toUpperCase()
                    }

                    function LR(i, o, u) {
                        if (i = ut(i), i && (u || o === r)) return $g(i);
                        if (!i || !(o = Rr(o))) return i;
                        var h = tn(i),
                            v = tn(o),
                            E = Rg(h, v),
                            I = Lg(h, v) + 1;
                        return Qn(h, E, I).join("")
                    }

                    function NR(i, o, u) {
                        if (i = ut(i), i && (u || o === r)) return i.slice(0, Pg(i) + 1);
                        if (!i || !(o = Rr(o))) return i;
                        var h = tn(i),
                            v = Lg(h, tn(o)) + 1;
                        return Qn(h, 0, v).join("")
                    }

                    function PR(i, o, u) {
                        if (i = ut(i), i && (u || o === r)) return i.replace(Zc, "");
                        if (!i || !(o = Rr(o))) return i;
                        var h = tn(i),
                            v = Rg(h, tn(o));
                        return Qn(h, v).join("")
                    }

                    function kR(i, o) {
                        var u = $e,
                            h = Ie;
                        if (It(o)) {
                            var v = "separator" in o ? o.separator : v;
                            u = "length" in o ? We(o.length) : u, h = "omission" in o ? Rr(o.omission) : h
                        }
                        i = ut(i);
                        var E = i.length;
                        if (ps(i)) {
                            var I = tn(i);
                            E = I.length
                        }
                        if (u >= E) return i;
                        var R = u - gs(h);
                        if (R < 1) return h;
                        var D = I ? Qn(I, 0, R).join("") : i.slice(0, R);
                        if (v === r) return D + h;
                        if (I && (R += D.length - R), ef(v)) {
                            if (i.slice(R).search(v)) {
                                var ee, te = D;
                                for (v.global || (v = mu(v.source, ut(Jp.exec(v)) + "g")), v.lastIndex = 0; ee = v.exec(te);) var ae = ee.index;
                                D = D.slice(0, ae === r ? R : ae)
                            }
                        } else if (i.indexOf(Rr(v), R) != R) {
                            var me = D.lastIndexOf(v);
                            me > -1 && (D = D.slice(0, me))
                        }
                        return D + h
                    }

                    function DR(i) {
                        return i = ut(i), i && HS.test(i) ? i.replace(Yp, uw) : i
                    }
                    var xR = Ts(function(i, o, u) {
                            return i + (u ? " " : "") + o.toUpperCase()
                        }),
                        nf = bm("toUpperCase");

                    function _v(i, o, u) {
                        return i = ut(i), o = u ? r : o, o === r ? sw(i) ? hw(i) : X0(i) : i.match(o) || []
                    }
                    var Ev = Ye(function(i, o) {
                            try {
                                return Ir(i, r, o)
                            } catch (u) {
                                return Zu(u) ? u : new Fe(u)
                            }
                        }),
                        MR = Nn(function(i, o) {
                            return Wr(o, function(u) {
                                u = yn(u), Rn(i, u, Ju(i[u], i))
                            }), i
                        });

                    function UR(i) {
                        var o = i == null ? 0 : i.length,
                            u = Le();
                        return i = o ? wt(i, function(h) {
                            if (typeof h[1] != "function") throw new Vr(l);
                            return [u(h[0]), h[1]]
                        }) : [], Ye(function(h) {
                            for (var v = -1; ++v < o;) {
                                var E = i[v];
                                if (Ir(E[0], this, h)) return Ir(E[1], this, h)
                            }
                        })
                    }

                    function FR(i) {
                        return u1(Hr(i, y))
                    }

                    function sf(i) {
                        return function() {
                            return i
                        }
                    }

                    function BR(i, o) {
                        return i == null || i !== i ? o : i
                    }
                    var GR = Am(),
                        jR = Am(!0);

                    function Tr(i) {
                        return i
                    }

                    function af(i) {
                        return Zg(typeof i == "function" ? i : Hr(i, y))
                    }

                    function WR(i) {
                        return tm(Hr(i, y))
                    }

                    function VR(i, o) {
                        return rm(i, Hr(o, y))
                    }
                    var KR = Ye(function(i, o) {
                            return function(u) {
                                return Aa(u, i, o)
                            }
                        }),
                        HR = Ye(function(i, o) {
                            return function(u) {
                                return Aa(i, u, o)
                            }
                        });

                    function of(i, o, u) {
                        var h = Ht(o),
                            v = Vo(o, h);
                        u == null && !(It(o) && (v.length || !h.length)) && (u = o, o = i, i = this, v = Vo(o, Ht(o)));
                        var E = !(It(u) && "chain" in u) || !!u.chain,
                            I = kn(i);
                        return Wr(v, function(R) {
                            var D = o[R];
                            i[R] = D, I && (i.prototype[R] = function() {
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

                    function qR() {
                        return Xt._ === this && (Xt._ = _w), this
                    }

                    function lf() {}

                    function YR(i) {
                        return i = We(i), Ye(function(o) {
                            return nm(o, i)
                        })
                    }
                    var zR = Uu(wt),
                        XR = Uu(Og),
                        JR = Uu(cu);

                    function bv(i) {
                        return Ku(i) ? uu(yn(i)) : C1(i)
                    }

                    function QR(i) {
                        return function(o) {
                            return i == null ? r : Li(i, o)
                        }
                    }
                    var ZR = Sm(),
                        eL = Sm(!0);

                    function cf() {
                        return []
                    }

                    function uf() {
                        return !1
                    }

                    function tL() {
                        return {}
                    }

                    function rL() {
                        return ""
                    }

                    function nL() {
                        return !0
                    }

                    function iL(i, o) {
                        if (i = We(i), i < 1 || i > ye) return [];
                        var u = je,
                            h = ar(i, je);
                        o = Le(o), i -= je;
                        for (var v = hu(h, o); ++u < i;) o(u);
                        return v
                    }

                    function sL(i) {
                        return Ge(i) ? wt(i, yn) : Lr(i) ? [i] : _r(Gm(ut(i)))
                    }

                    function aL(i) {
                        var o = ++vw;
                        return ut(i) + o
                    }
                    var oL = Xo(function(i, o) {
                            return i + o
                        }, 0),
                        lL = Fu("ceil"),
                        cL = Xo(function(i, o) {
                            return i / o
                        }, 1),
                        uL = Fu("floor");

                    function fL(i) {
                        return i && i.length ? Wo(i, Tr, Ou) : r
                    }

                    function dL(i, o) {
                        return i && i.length ? Wo(i, Le(o, 2), Ou) : r
                    }

                    function hL(i) {
                        return Cg(i, Tr)
                    }

                    function pL(i, o) {
                        return Cg(i, Le(o, 2))
                    }

                    function gL(i) {
                        return i && i.length ? Wo(i, Tr, Iu) : r
                    }

                    function mL(i, o) {
                        return i && i.length ? Wo(i, Le(o, 2), Iu) : r
                    }
                    var vL = Xo(function(i, o) {
                            return i * o
                        }, 1),
                        yL = Fu("round"),
                        _L = Xo(function(i, o) {
                            return i - o
                        }, 0);

                    function EL(i) {
                        return i && i.length ? du(i, Tr) : 0
                    }

                    function bL(i, o) {
                        return i && i.length ? du(i, Le(o, 2)) : 0
                    }
                    return _.after = WI, _.ary = Qm, _.assign = R$, _.assignIn = dv, _.assignInWith = cl, _.assignWith = L$, _.at = N$, _.before = Zm, _.bind = Ju, _.bindAll = MR, _.bindKey = ev, _.castArray = t$, _.chain = zm, _.chunk = uC, _.compact = fC, _.concat = dC, _.cond = UR, _.conforms = FR, _.constant = sf, _.countBy = EI, _.create = P$, _.curry = tv, _.curryRight = rv, _.debounce = nv, _.defaults = k$, _.defaultsDeep = D$, _.defer = VI, _.delay = KI, _.difference = hC, _.differenceBy = pC, _.differenceWith = gC, _.drop = mC, _.dropRight = vC, _.dropRightWhile = yC, _.dropWhile = _C, _.fill = EC, _.filter = TI, _.flatMap = SI, _.flatMapDeep = wI, _.flatMapDepth = CI, _.flatten = Km, _.flattenDeep = bC, _.flattenDepth = TC, _.flip = HI, _.flow = GR, _.flowRight = jR, _.fromPairs = AC, _.functions = j$, _.functionsIn = W$, _.groupBy = II, _.initial = SC, _.intersection = wC, _.intersectionBy = CC, _.intersectionWith = IC, _.invert = K$, _.invertBy = H$, _.invokeMap = RI, _.iteratee = af, _.keyBy = LI, _.keys = Ht, _.keysIn = br, _.map = nl, _.mapKeys = Y$, _.mapValues = z$, _.matches = WR, _.matchesProperty = VR, _.memoize = sl, _.merge = X$, _.mergeWith = hv, _.method = KR, _.methodOf = HR, _.mixin = of, _.negate = al, _.nthArg = YR, _.omit = J$, _.omitBy = Q$, _.once = qI, _.orderBy = NI, _.over = zR, _.overArgs = YI, _.overEvery = XR, _.overSome = JR, _.partial = Qu, _.partialRight = iv, _.partition = PI, _.pick = Z$, _.pickBy = pv, _.property = bv, _.propertyOf = QR, _.pull = NC, _.pullAll = qm, _.pullAllBy = PC, _.pullAllWith = kC, _.pullAt = DC, _.range = ZR, _.rangeRight = eL, _.rearg = zI, _.reject = xI, _.remove = xC, _.rest = XI, _.reverse = zu, _.sampleSize = UI, _.set = tR, _.setWith = rR, _.shuffle = FI, _.slice = MC, _.sortBy = jI, _.sortedUniq = VC, _.sortedUniqBy = KC, _.split = SR, _.spread = JI, _.tail = HC, _.take = qC, _.takeRight = YC, _.takeRightWhile = zC, _.takeWhile = XC, _.tap = fI, _.throttle = QI, _.thru = rl, _.toArray = cv, _.toPairs = gv, _.toPairsIn = mv, _.toPath = sL, _.toPlainObject = fv, _.transform = nR, _.unary = ZI, _.union = JC, _.unionBy = QC, _.unionWith = ZC, _.uniq = eI, _.uniqBy = tI, _.uniqWith = rI, _.unset = iR, _.unzip = Xu, _.unzipWith = Ym, _.update = sR, _.updateWith = aR, _.values = Ss, _.valuesIn = oR, _.without = nI, _.words = _v, _.wrap = e$, _.xor = iI, _.xorBy = sI, _.xorWith = aI, _.zip = oI, _.zipObject = lI, _.zipObjectDeep = cI, _.zipWith = uI, _.entries = gv, _.entriesIn = mv, _.extend = dv, _.extendWith = cl, of(_, _), _.add = oL, _.attempt = Ev, _.camelCase = fR, _.capitalize = vv, _.ceil = lL, _.clamp = lR, _.clone = r$, _.cloneDeep = i$, _.cloneDeepWith = s$, _.cloneWith = n$, _.conformsTo = a$, _.deburr = yv, _.defaultTo = BR, _.divide = cL, _.endsWith = dR, _.eq = nn, _.escape = hR, _.escapeRegExp = pR, _.every = bI, _.find = AI, _.findIndex = Wm, _.findKey = x$, _.findLast = OI, _.findLastIndex = Vm, _.findLastKey = M$, _.floor = uL, _.forEach = Xm, _.forEachRight = Jm, _.forIn = U$, _.forInRight = F$, _.forOwn = B$, _.forOwnRight = G$, _.get = tf, _.gt = o$, _.gte = l$, _.has = V$, _.hasIn = rf, _.head = Hm, _.identity = Tr, _.includes = $I, _.indexOf = OC, _.inRange = cR, _.invoke = q$, _.isArguments = ki, _.isArray = Ge, _.isArrayBuffer = c$, _.isArrayLike = Er, _.isArrayLikeObject = Lt, _.isBoolean = u$, _.isBuffer = Zn, _.isDate = f$, _.isElement = d$, _.isEmpty = h$, _.isEqual = p$, _.isEqualWith = g$, _.isError = Zu, _.isFinite = m$, _.isFunction = kn, _.isInteger = sv, _.isLength = ol, _.isMap = av, _.isMatch = v$, _.isMatchWith = y$, _.isNaN = _$, _.isNative = E$, _.isNil = T$, _.isNull = b$, _.isNumber = ov, _.isObject = It, _.isObjectLike = Rt, _.isPlainObject = $a, _.isRegExp = ef, _.isSafeInteger = A$, _.isSet = lv, _.isString = ll, _.isSymbol = Lr, _.isTypedArray = Os, _.isUndefined = O$, _.isWeakMap = S$, _.isWeakSet = w$, _.join = $C, _.kebabCase = gR, _.last = Yr, _.lastIndexOf = RC, _.lowerCase = mR, _.lowerFirst = vR, _.lt = C$, _.lte = I$, _.max = fL, _.maxBy = dL, _.mean = hL, _.meanBy = pL, _.min = gL, _.minBy = mL, _.stubArray = cf, _.stubFalse = uf, _.stubObject = tL, _.stubString = rL, _.stubTrue = nL, _.multiply = vL, _.nth = LC, _.noConflict = qR, _.noop = lf, _.now = il, _.pad = yR, _.padEnd = _R, _.padStart = ER, _.parseInt = bR, _.random = uR, _.reduce = kI, _.reduceRight = DI, _.repeat = TR, _.replace = AR, _.result = eR, _.round = yL, _.runInContext = k, _.sample = MI, _.size = BI, _.snakeCase = OR, _.some = GI, _.sortedIndex = UC, _.sortedIndexBy = FC, _.sortedIndexOf = BC, _.sortedLastIndex = GC, _.sortedLastIndexBy = jC, _.sortedLastIndexOf = WC, _.startCase = wR, _.startsWith = CR, _.subtract = _L, _.sum = EL, _.sumBy = bL, _.template = IR, _.times = iL, _.toFinite = Dn, _.toInteger = We, _.toLength = uv, _.toLower = $R, _.toNumber = zr, _.toSafeInteger = $$, _.toString = ut, _.toUpper = RR, _.trim = LR, _.trimEnd = NR, _.trimStart = PR, _.truncate = kR, _.unescape = DR, _.uniqueId = aL, _.upperCase = xR, _.upperFirst = nf, _.each = Xm, _.eachRight = Jm, _.first = Hm, of(_, function() {
                        var i = {};
                        return mn(_, function(o, u) {
                            ht.call(_.prototype, u) || (i[u] = o)
                        }), i
                    }(), {
                        chain: !1
                    }), _.VERSION = n, Wr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        _[i].placeholder = _
                    }), Wr(["drop", "take"], function(i, o) {
                        Je.prototype[i] = function(u) {
                            u = u === r ? 1 : Gt(We(u), 0);
                            var h = this.__filtered__ && !o ? new Je(this) : this.clone();
                            return h.__filtered__ ? h.__takeCount__ = ar(u, h.__takeCount__) : h.__views__.push({
                                size: ar(u, je),
                                type: i + (h.__dir__ < 0 ? "Right" : "")
                            }), h
                        }, Je.prototype[i + "Right"] = function(u) {
                            return this.reverse()[i](u).reverse()
                        }
                    }), Wr(["filter", "map", "takeWhile"], function(i, o) {
                        var u = o + 1,
                            h = u == U || u == de;
                        Je.prototype[i] = function(v) {
                            var E = this.clone();
                            return E.__iteratees__.push({
                                iteratee: Le(v, 3),
                                type: u
                            }), E.__filtered__ = E.__filtered__ || h, E
                        }
                    }), Wr(["head", "last"], function(i, o) {
                        var u = "take" + (o ? "Right" : "");
                        Je.prototype[i] = function() {
                            return this[u](1).value()[0]
                        }
                    }), Wr(["initial", "tail"], function(i, o) {
                        var u = "drop" + (o ? "" : "Right");
                        Je.prototype[i] = function() {
                            return this.__filtered__ ? new Je(this) : this[u](1)
                        }
                    }), Je.prototype.compact = function() {
                        return this.filter(Tr)
                    }, Je.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, Je.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, Je.prototype.invokeMap = Ye(function(i, o) {
                        return typeof i == "function" ? new Je(this) : this.map(function(u) {
                            return Aa(u, i, o)
                        })
                    }), Je.prototype.reject = function(i) {
                        return this.filter(al(Le(i)))
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
                                D = I instanceof Je,
                                ee = R[0],
                                te = D || Ge(I),
                                ae = function(Xe) {
                                    var Qe = v.apply(_, Hn([Xe], R));
                                    return h && me ? Qe[0] : Qe
                                };
                            te && u && typeof ee == "function" && ee.length != 1 && (D = te = !1);
                            var me = this.__chain__,
                                we = !!this.__actions__.length,
                                Ne = E && !me,
                                He = D && !we;
                            if (!E && te) {
                                I = He ? I : new Je(this);
                                var Pe = i.apply(I, R);
                                return Pe.__actions__.push({
                                    func: rl,
                                    args: [ae],
                                    thisArg: r
                                }), new Kr(Pe, me)
                            }
                            return Ne && He ? i.apply(this, R) : (Pe = this.thru(ae), Ne ? h ? Pe.value()[0] : Pe.value() : Pe)
                        })
                    }), Wr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var o = Io[i],
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
                            ht.call(_s, h) || (_s[h] = []), _s[h].push({
                                name: o,
                                func: u
                            })
                        }
                    }), _s[zo(r, C).name] = [{
                        name: "wrapper",
                        func: r
                    }], Je.prototype.clone = Dw, Je.prototype.reverse = xw, Je.prototype.value = Mw, _.prototype.at = dI, _.prototype.chain = hI, _.prototype.commit = pI, _.prototype.next = gI, _.prototype.plant = vI, _.prototype.reverse = yI, _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = _I, _.prototype.first = _.prototype.head, ma && (_.prototype[ma] = mI), _
                },
                ms = pw();
            wi ? ((wi.exports = ms)._ = ms, su._ = ms) : Xt._ = ms
        }).call(kt)
    })(Dd, Dd.exports);
    const RW = rt({
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
                this.onResizeWithContext = Dd.exports.throttle(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
            },
            beforeUnmount() {
                window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
            },
            methods: {
                setupStage() {
                    const e = this.$refs.stage,
                        t = {};
                    this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints);
                    const r = new H3(e, t);
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
        LW = {
            class: "draw"
        },
        NW = {
            ref: "content",
            class: "content"
        },
        PW = {
            class: "constrain"
        },
        kW = {
            key: 0
        };

    function DW(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", LW, [X("div", NW, [X("div", PW, [e.player.prompt ? Oe((F(), W("div", kW, null, 512)), [
            [l, e.player.prompt]
        ]) : ve("", !0), X("div", {
            ref: "stage",
            class: "stage",
            style: oo(e.stageDimensions)
        }, null, 4), X("button", {
            onClick: t[0] || (t[0] = ze((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, Me(e.player.submitText || "SUBMIT"), 1)])], 512)])
    }
    const xW = st(RW, [
            ["render", DW]
        ]),
        MW = rt({
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
                            e.numberOfPlayer = this.player.joinedPlayers, e.locale = this.$ecastRoom.locale, ql.gameStarted(this.$ecastRoom.appTag, e)
                        }
                    } catch (e) {
                        this.$handleEcastError(e)
                    }
                }
            }
        }),
        UW = ["textContent"],
        FW = ["textContent"],
        BW = ["textContent"],
        GW = ["textContent"];

    function jW(e, t, r, n, s, a) {
        const l = Mt("t");
        return F(), W("div", {
            class: Ve(["lobby-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? (F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.message),
            textContent: Me(e.joinedCountText)
        }, null, 10, UW)) : ve("", !0), e.player.hasControls ? (F(), W(qe, {
            key: 1
        }, [e.player.status === "waitingForMore" ? (F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.status)
        }, Me(e.neededText), 3)) : ve("", !0), e.player.status === "canStart" ? (F(), W("button", {
            key: 1,
            class: Ve(e.localClasses.action),
            onClick: t[0] || (t[0] = (...c) => e.onStartClick && e.onStartClick(...c)),
            textContent: Me(e.startText || e.$t("LOBBY.BUTTON_START"))
        }, null, 10, FW)) : ve("", !0), e.player.status === "countdown" ? (F(), W("button", {
            key: 2,
            class: Ve(e.localClasses.action),
            onClick: t[1] || (t[1] = (...c) => e.onCancelClick && e.onCancelClick(...c)),
            textContent: Me(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
        }, null, 10, BW)) : ve("", !0)], 64)) : e.player.gamepadStart ? (F(), W(qe, {
            key: 2
        }, [e.player.status === "waitingForMore" ? (F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.status)
        }, Me(e.neededText), 3)) : ve("", !0), e.player.status === "canStart" ? Oe((F(), W("p", {
            key: 1,
            class: Ve(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : ve("", !0), e.player.status === "countdown" ? Oe((F(), W("p", {
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
        }, Me(e.waitingForVIPText), 3)) : ve("", !0), e.player.status === "countdown" ? Oe((F(), W("p", {
            key: 2,
            class: Ve(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.GAME_STARTING"]
        ]) : ve("", !0)], 64)), e.messageLocation === "bottom" ? (F(), W("p", {
            key: 4,
            class: Ve(e.localClasses.message),
            textContent: Me(e.joinedCountText)
        }, null, 10, GW)) : ve("", !0)], 2)
    }
    const VA = st(MW, [
            ["render", jW]
        ]),
        WW = rt({
            components: {
                LobbyActions: VA
            },
            props: {
                player: Object
            }
        }),
        VW = {
            class: "lobby"
        },
        KW = {
            class: "constrain"
        };

    function HW(e, t, r, n, s, a) {
        const l = Zt("LobbyActions");
        return F(), W("div", VW, [X("div", KW, [pt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const qW = st(WW, [
            ["render", HW]
        ]),
        YW = rt({
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
                            e.isSequal = !0, e.locale = this.$ecastRoom.locale, ql.gameStarted(this.$ecastRoom.appTag, e)
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

    function zW(e, t, r, n, s, a) {
        const l = Mt("t");
        return e.player && e.player.status ? (F(), W("div", {
            key: 0,
            class: Ve(["post-game-actions", {
                vip: e.player.hasControls
            }])
        }, [!e.messageLocation || e.messageLocation === "top" ? Oe((F(), W("p", {
            key: 0,
            class: Ve(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : ve("", !0), e.player.hasControls ? (F(), W(qe, {
            key: 1
        }, [e.player.status === "waiting" ? Oe((F(), W("button", {
            key: 0,
            class: Ve(e.localClasses.action),
            onClick: t[0] || (t[0] = (...c) => e.onSamePlayersClick && e.onSamePlayersClick(...c))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_SAME_PLAYERS"]
        ]) : ve("", !0), e.player.status === "waiting" ? Oe((F(), W("button", {
            key: 1,
            class: Ve(e.localClasses.action),
            onClick: t[1] || (t[1] = (...c) => e.onNewPlayersClick && e.onNewPlayersClick(...c))
        }, null, 2)), [
            [l, "POST_GAME.BUTTON_NEW_PLAYERS"]
        ]) : ve("", !0), e.player.status === "countdown" ? Oe((F(), W("button", {
            key: 2,
            class: Ve(e.localClasses.action),
            onClick: t[2] || (t[2] = (...c) => e.onCancelClick && e.onCancelClick(...c))
        }, null, 2)), [
            [l, "LOBBY.BUTTON_CANCEL"]
        ]) : ve("", !0)], 64)) : e.player.gamepadStart ? Oe((F(), W("p", {
            key: 2,
            class: Ve(e.localClasses.status)
        }, null, 2)), [
            [l, "LOBBY.WAITING_FOR_GAMEPAD"]
        ]) : (F(), W("p", {
            key: 3,
            class: Ve(e.localClasses.status)
        }, Me(e.waitingForVIPText), 3)), e.messageLocation === "bottom" ? Oe((F(), W("p", {
            key: 4,
            class: Ve(e.localClasses.message)
        }, null, 2)), [
            [l, "POST_GAME.PLAY_AGAIN"]
        ]) : ve("", !0)], 2)) : ve("", !0)
    }
    const KA = st(YW, [
            ["render", zW]
        ]),
        XW = rt({
            components: {
                PostGameActions: KA
            },
            props: {
                player: Object
            }
        }),
        JW = {
            class: "post-game"
        },
        QW = {
            class: "constrain"
        };

    function ZW(e, t, r, n, s, a) {
        const l = Zt("PostGameActions");
        return F(), W("div", JW, [X("div", QW, [pt(l, {
            player: e.player
        }, null, 8, ["player"])])])
    }
    const eV = st(XW, [
            ["render", ZW]
        ]),
        tV = rt({
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
                    if (this.sanitizers && (t.value = WA.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
                        t.value = t.value.substring(0, r);
                        return
                    }
                    this.$emit("update:modelValue", t.value), await this.$nextTick(), t.value !== this.modelValue && (t.value = this.modelValue)
                }
            }
        }),
        rV = ["value"];

    function nV(e, t, r, n, s, a) {
        return F(), W("input", {
            ref: "input",
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l))
        }, null, 40, rV)
    }
    const HA = st(tV, [
        ["render", nV]
    ]);
    var Fi, yl, Wa = typeof Map == "function" ? new Map : (Fi = [], yl = [], {
            has: function(e) {
                return Fi.indexOf(e) > -1
            },
            get: function(e) {
                return yl[Fi.indexOf(e)]
            },
            set: function(e, t) {
                Fi.indexOf(e) === -1 && (Fi.push(e), yl.push(t))
            },
            delete: function(e) {
                var t = Fi.indexOf(e);
                t > -1 && (Fi.splice(t, 1), yl.splice(t, 1))
            }
        }),
        qA = function(e) {
            return new Event(e, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch {
        qA = function(t) {
            var r = document.createEvent("Event");
            return r.initEvent(t, !0, !1), r
        }
    }

    function iV(e) {
        var t = Wa.get(e);
        t && t.destroy()
    }

    function sV(e) {
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
                    var s, a = null,
                        l = null,
                        c = null,
                        f = function() {
                            n.clientWidth !== l && b()
                        },
                        d = function(w) {
                            window.removeEventListener("resize", f, !1), n.removeEventListener("input", b, !1), n.removeEventListener("keyup", b, !1), n.removeEventListener("autosize:destroy", d, !1), n.removeEventListener("autosize:update", b, !1), Object.keys(w).forEach(function(P) {
                                n.style[P] = w[P]
                            }), Wa.delete(n)
                        }.bind(n, {
                            height: n.style.height,
                            resize: n.style.resize,
                            overflowY: n.style.overflowY,
                            overflowX: n.style.overflowX,
                            wordWrap: n.style.wordWrap
                        });
                    n.addEventListener("autosize:destroy", d, !1), "onpropertychange" in n && "oninput" in n && n.addEventListener("keyup", b, !1), window.addEventListener("resize", f, !1), n.addEventListener("input", b, !1), n.addEventListener("autosize:update", b, !1), n.style.overflowX = "hidden", n.style.wordWrap = "break-word", Wa.set(n, {
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
                        var G = qA("autosize:resized");
                        try {
                            n.dispatchEvent(G)
                        } catch {}
                    }
                }
            }(r)
        }), e
    }).destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], iV), e
    }, xa.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], sV), e
    });
    var YA = xa,
        aV = {
            exports: {}
        },
        _l = function(e) {
            return e && e.Math == Math && e
        },
        Br = _l(typeof globalThis == "object" && globalThis) || _l(typeof window == "object" && window) || _l(typeof self == "object" && self) || _l(typeof kt == "object" && kt) || function() {
            return this
        }() || Function("return this")(),
        fp = {},
        Gr = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        },
        oV = Gr,
        Ei = !oV(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        }),
        lV = Gr,
        dp = !lV(function() {
            var e = function() {}.bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        }),
        cV = dp,
        El = Function.prototype.call,
        bi = cV ? El.bind(El) : function() {
            return El.apply(El, arguments)
        },
        zA = {},
        XA = {}.propertyIsEnumerable,
        JA = Object.getOwnPropertyDescriptor,
        uV = JA && !XA.call({
            1: 2
        }, 1);
    zA.f = uV ? function(t) {
        var r = JA(this, t);
        return !!r && r.enumerable
    } : XA;
    var QA = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        },
        ZA = dp,
        eO = Function.prototype,
        fV = eO.bind,
        xd = eO.call,
        dV = ZA && fV.bind(xd, xd),
        dr = ZA ? function(e) {
            return e && dV(e)
        } : function(e) {
            return e && function() {
                return xd.apply(e, arguments)
            }
        },
        tO = dr,
        hV = tO({}.toString),
        pV = tO("".slice),
        Pc = function(e) {
            return pV(hV(e), 8, -1)
        },
        gV = dr,
        mV = Gr,
        vV = Pc,
        Nf = Object,
        yV = gV("".split),
        _V = mV(function() {
            return !Nf("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return vV(e) == "String" ? yV(e, "") : Nf(e)
        } : Nf,
        EV = TypeError,
        po = function(e) {
            if (e == null) throw EV("Can't call method on " + e);
            return e
        },
        bV = _V,
        TV = po,
        kc = function(e) {
            return bV(TV(e))
        },
        wr = function(e) {
            return typeof e == "function"
        },
        AV = wr,
        fa = function(e) {
            return typeof e == "object" ? e !== null : AV(e)
        },
        Pf = Br,
        OV = wr,
        SV = function(e) {
            return OV(e) ? e : void 0
        },
        Dc = function(e, t) {
            return arguments.length < 2 ? SV(Pf[e]) : Pf[e] && Pf[e][t]
        },
        wV = dr,
        rO = wV({}.isPrototypeOf),
        CV = Dc,
        IV = CV("navigator", "userAgent") || "",
        nO = Br,
        kf = IV,
        t_ = nO.process,
        r_ = nO.Deno,
        n_ = t_ && t_.versions || r_ && r_.version,
        i_ = n_ && n_.v8,
        on, Zl;
    i_ && (on = i_.split("."), Zl = on[0] > 0 && on[0] < 4 ? 1 : +(on[0] + on[1]));
    !Zl && kf && (on = kf.match(/Edge\/(\d+)/), (!on || on[1] >= 74) && (on = kf.match(/Chrome\/(\d+)/), on && (Zl = +on[1])));
    var $V = Zl,
        s_ = $V,
        RV = Gr,
        iO = !!Object.getOwnPropertySymbols && !RV(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && s_ && s_ < 41
        }),
        LV = iO,
        sO = LV && !Symbol.sham && typeof Symbol.iterator == "symbol",
        NV = Dc,
        PV = wr,
        kV = rO,
        DV = sO,
        xV = Object,
        aO = DV ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = NV("Symbol");
            return PV(t) && kV(t.prototype, xV(e))
        },
        MV = String,
        UV = function(e) {
            try {
                return MV(e)
            } catch {
                return "Object"
            }
        },
        FV = wr,
        BV = UV,
        GV = TypeError,
        jV = function(e) {
            if (FV(e)) return e;
            throw GV(BV(e) + " is not a function")
        },
        WV = jV,
        hp = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : WV(r)
        },
        Df = bi,
        xf = wr,
        Mf = fa,
        VV = TypeError,
        KV = function(e, t) {
            var r, n;
            if (t === "string" && xf(r = e.toString) && !Mf(n = Df(r, e)) || xf(r = e.valueOf) && !Mf(n = Df(r, e)) || t !== "string" && xf(r = e.toString) && !Mf(n = Df(r, e))) return n;
            throw VV("Can't convert object to primitive value")
        },
        xc = {
            exports: {}
        },
        a_ = Br,
        HV = Object.defineProperty,
        pp = function(e, t) {
            try {
                HV(a_, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                a_[e] = t
            }
            return t
        },
        qV = Br,
        YV = pp,
        o_ = "__core-js_shared__",
        zV = qV[o_] || YV(o_, {}),
        gp = zV,
        l_ = gp;
    (xc.exports = function(e, t) {
        return l_[e] || (l_[e] = t !== void 0 ? t : {})
    })("versions", []).push({
        version: "3.23.4",
        mode: "global",
        copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var XV = po,
        JV = Object,
        oO = function(e) {
            return JV(XV(e))
        },
        QV = dr,
        ZV = oO,
        eK = QV({}.hasOwnProperty),
        Ti = Object.hasOwn || function(t, r) {
            return eK(ZV(t), r)
        },
        tK = dr,
        rK = 0,
        nK = Math.random(),
        iK = tK(1 .toString),
        lO = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + iK(++rK + nK, 36)
        },
        sK = Br,
        aK = xc.exports,
        c_ = Ti,
        oK = lO,
        u_ = iO,
        cO = sO,
        Cs = aK("wks"),
        is = sK.Symbol,
        f_ = is && is.for,
        lK = cO ? is : is && is.withoutSetter || oK,
        us = function(e) {
            if (!c_(Cs, e) || !(u_ || typeof Cs[e] == "string")) {
                var t = "Symbol." + e;
                u_ && c_(is, e) ? Cs[e] = is[e] : cO && f_ ? Cs[e] = f_(t) : Cs[e] = lK(t)
            }
            return Cs[e]
        },
        cK = bi,
        d_ = fa,
        h_ = aO,
        uK = hp,
        fK = KV,
        dK = us,
        hK = TypeError,
        pK = dK("toPrimitive"),
        gK = function(e, t) {
            if (!d_(e) || h_(e)) return e;
            var r = uK(e, pK),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = cK(r, e, t), !d_(n) || h_(n)) return n;
                throw hK("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), fK(e, t)
        },
        mK = gK,
        vK = aO,
        uO = function(e) {
            var t = mK(e, "string");
            return vK(t) ? t : t + ""
        },
        yK = Br,
        p_ = fa,
        Md = yK.document,
        _K = p_(Md) && p_(Md.createElement),
        fO = function(e) {
            return _K ? Md.createElement(e) : {}
        },
        EK = Ei,
        bK = Gr,
        TK = fO,
        dO = !EK && !bK(function() {
            return Object.defineProperty(TK("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        }),
        AK = Ei,
        OK = bi,
        SK = zA,
        wK = QA,
        CK = kc,
        IK = uO,
        $K = Ti,
        RK = dO,
        g_ = Object.getOwnPropertyDescriptor;
    fp.f = AK ? g_ : function(t, r) {
        if (t = CK(t), r = IK(r), RK) try {
            return g_(t, r)
        } catch {}
        if ($K(t, r)) return wK(!OK(SK.f, t, r), t[r])
    };
    var go = {},
        LK = Ei,
        NK = Gr,
        hO = LK && NK(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        }),
        PK = fa,
        kK = String,
        DK = TypeError,
        fs = function(e) {
            if (PK(e)) return e;
            throw DK(kK(e) + " is not an object")
        },
        xK = Ei,
        MK = dO,
        UK = hO,
        bl = fs,
        m_ = uO,
        FK = TypeError,
        Uf = Object.defineProperty,
        BK = Object.getOwnPropertyDescriptor,
        Ff = "enumerable",
        Bf = "configurable",
        Gf = "writable";
    go.f = xK ? UK ? function(t, r, n) {
        if (bl(t), r = m_(r), bl(n), typeof t == "function" && r === "prototype" && "value" in n && Gf in n && !n[Gf]) {
            var s = BK(t, r);
            s && s[Gf] && (t[r] = n.value, n = {
                configurable: Bf in n ? n[Bf] : s[Bf],
                enumerable: Ff in n ? n[Ff] : s[Ff],
                writable: !1
            })
        }
        return Uf(t, r, n)
    } : Uf : function(t, r, n) {
        if (bl(t), r = m_(r), bl(n), MK) try {
            return Uf(t, r, n)
        } catch {}
        if ("get" in n || "set" in n) throw FK("Accessors not supported");
        return "value" in n && (t[r] = n.value), t
    };
    var GK = Ei,
        jK = go,
        WK = QA,
        mp = GK ? function(e, t, r) {
            return jK.f(e, t, WK(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        pO = {
            exports: {}
        },
        Ud = Ei,
        VK = Ti,
        gO = Function.prototype,
        KK = Ud && Object.getOwnPropertyDescriptor,
        vp = VK(gO, "name"),
        HK = vp && function() {}.name === "something",
        qK = vp && (!Ud || Ud && KK(gO, "name").configurable),
        YK = {
            EXISTS: vp,
            PROPER: HK,
            CONFIGURABLE: qK
        },
        zK = dr,
        XK = wr,
        Fd = gp,
        JK = zK(Function.toString);
    XK(Fd.inspectSource) || (Fd.inspectSource = function(e) {
        return JK(e)
    });
    var mO = Fd.inspectSource,
        QK = Br,
        ZK = wr,
        eH = mO,
        v_ = QK.WeakMap,
        tH = ZK(v_) && /native code/.test(eH(v_)),
        rH = xc.exports,
        nH = lO,
        y_ = rH("keys"),
        vO = function(e) {
            return y_[e] || (y_[e] = nH(e))
        },
        yp = {},
        iH = tH,
        yO = Br,
        jf = dr,
        sH = fa,
        aH = mp,
        Wf = Ti,
        Vf = gp,
        oH = vO,
        lH = yp,
        __ = "Object already initialized",
        Bd = yO.TypeError,
        cH = yO.WeakMap,
        ec, no, tc, uH = function(e) {
            return tc(e) ? no(e) : ec(e, {})
        },
        fH = function(e) {
            return function(t) {
                var r;
                if (!sH(t) || (r = no(t)).type !== e) throw Bd("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (iH || Vf.state) {
        var Bi = Vf.state || (Vf.state = new cH),
            dH = jf(Bi.get),
            E_ = jf(Bi.has),
            hH = jf(Bi.set);
        ec = function(e, t) {
            if (E_(Bi, e)) throw new Bd(__);
            return t.facade = e, hH(Bi, e, t), t
        }, no = function(e) {
            return dH(Bi, e) || {}
        }, tc = function(e) {
            return E_(Bi, e)
        }
    } else {
        var Is = oH("state");
        lH[Is] = !0, ec = function(e, t) {
            if (Wf(e, Is)) throw new Bd(__);
            return t.facade = e, aH(e, Is, t), t
        }, no = function(e) {
            return Wf(e, Is) ? e[Is] : {}
        }, tc = function(e) {
            return Wf(e, Is)
        }
    }
    var _O = {
            set: ec,
            get: no,
            has: tc,
            enforce: uH,
            getterFor: fH
        },
        pH = Gr,
        gH = wr,
        Tl = Ti,
        Gd = Ei,
        mH = YK.CONFIGURABLE,
        vH = mO,
        EO = _O,
        yH = EO.enforce,
        _H = EO.get,
        Dl = Object.defineProperty,
        EH = Gd && !pH(function() {
            return Dl(function() {}, "length", {
                value: 8
            }).length !== 8
        }),
        bH = String(String).split("String"),
        TH = pO.exports = function(e, t, r) {
            String(t).slice(0, 7) === "Symbol(" && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Tl(e, "name") || mH && e.name !== t) && (Gd ? Dl(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t), EH && r && Tl(r, "arity") && e.length !== r.arity && Dl(e, "length", {
                value: r.arity
            });
            try {
                r && Tl(r, "constructor") && r.constructor ? Gd && Dl(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch {}
            var n = yH(e);
            return Tl(n, "source") || (n.source = bH.join(typeof t == "string" ? t : "")), e
        };
    Function.prototype.toString = TH(function() {
        return gH(this) && _H(this).source || vH(this)
    }, "toString");
    var AH = wr,
        OH = go,
        SH = pO.exports,
        wH = pp,
        bO = function(e, t, r, n) {
            n || (n = {});
            var s = n.enumerable,
                a = n.name !== void 0 ? n.name : t;
            if (AH(r) && SH(r, a, n), n.global) s ? e[t] = r : wH(t, r);
            else {
                try {
                    n.unsafe ? e[t] && (s = !0) : delete e[t]
                } catch {}
                s ? e[t] = r : OH.f(e, t, {
                    value: r,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        },
        TO = {},
        CH = Math.ceil,
        IH = Math.floor,
        $H = Math.trunc || function(t) {
            var r = +t;
            return (r > 0 ? IH : CH)(r)
        },
        RH = $H,
        Mc = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : RH(t)
        },
        LH = Mc,
        NH = Math.max,
        PH = Math.min,
        kH = function(e, t) {
            var r = LH(e);
            return r < 0 ? NH(r + t, 0) : PH(r, t)
        },
        DH = Mc,
        xH = Math.min,
        AO = function(e) {
            return e > 0 ? xH(DH(e), 9007199254740991) : 0
        },
        MH = AO,
        UH = function(e) {
            return MH(e.length)
        },
        FH = kc,
        BH = kH,
        GH = UH,
        b_ = function(e) {
            return function(t, r, n) {
                var s = FH(t),
                    a = GH(s),
                    l = BH(n, a),
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
        jH = {
            includes: b_(!0),
            indexOf: b_(!1)
        },
        WH = dr,
        Kf = Ti,
        VH = kc,
        KH = jH.indexOf,
        HH = yp,
        T_ = WH([].push),
        OO = function(e, t) {
            var r = VH(e),
                n = 0,
                s = [],
                a;
            for (a in r) !Kf(HH, a) && Kf(r, a) && T_(s, a);
            for (; t.length > n;) Kf(r, a = t[n++]) && (~KH(s, a) || T_(s, a));
            return s
        },
        _p = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        qH = OO,
        YH = _p,
        zH = YH.concat("length", "prototype");
    TO.f = Object.getOwnPropertyNames || function(t) {
        return qH(t, zH)
    };
    var SO = {};
    SO.f = Object.getOwnPropertySymbols;
    var XH = Dc,
        JH = dr,
        QH = TO,
        ZH = SO,
        e9 = fs,
        t9 = JH([].concat),
        r9 = XH("Reflect", "ownKeys") || function(t) {
            var r = QH.f(e9(t)),
                n = ZH.f;
            return n ? t9(r, n(t)) : r
        },
        A_ = Ti,
        n9 = r9,
        i9 = fp,
        s9 = go,
        a9 = function(e, t, r) {
            for (var n = n9(t), s = s9.f, a = i9.f, l = 0; l < n.length; l++) {
                var c = n[l];
                !A_(e, c) && !(r && A_(r, c)) && s(e, c, a(t, c))
            }
        },
        o9 = Gr,
        l9 = wr,
        c9 = /#|\.prototype\./,
        mo = function(e, t) {
            var r = f9[u9(e)];
            return r == h9 ? !0 : r == d9 ? !1 : l9(t) ? o9(t) : !!t
        },
        u9 = mo.normalize = function(e) {
            return String(e).replace(c9, ".").toLowerCase()
        },
        f9 = mo.data = {},
        d9 = mo.NATIVE = "N",
        h9 = mo.POLYFILL = "P",
        p9 = mo,
        Hf = Br,
        g9 = fp.f,
        m9 = mp,
        v9 = bO,
        y9 = pp,
        _9 = a9,
        E9 = p9,
        wO = function(e, t) {
            var r = e.target,
                n = e.global,
                s = e.stat,
                a, l, c, f, d, p;
            if (n ? l = Hf : s ? l = Hf[r] || y9(r, {}) : l = (Hf[r] || {}).prototype, l)
                for (c in t) {
                    if (d = t[c], e.dontCallGetSet ? (p = g9(l, c), f = p && p.value) : f = l[c], a = E9(n ? c : r + (s ? "." : "#") + c, e.forced), !a && f !== void 0) {
                        if (typeof d == typeof f) continue;
                        _9(d, f)
                    }(e.sham || f && f.sham) && m9(d, "sham", !0), v9(l, c, d, e)
                }
        },
        b9 = fa,
        T9 = Pc,
        A9 = us,
        O9 = A9("match"),
        S9 = function(e) {
            var t;
            return b9(e) && ((t = e[O9]) !== void 0 ? !!t : T9(e) == "RegExp")
        },
        w9 = us,
        C9 = w9("toStringTag"),
        CO = {};
    CO[C9] = "z";
    var I9 = String(CO) === "[object z]",
        $9 = I9,
        R9 = wr,
        xl = Pc,
        L9 = us,
        N9 = L9("toStringTag"),
        P9 = Object,
        k9 = xl(function() {
            return arguments
        }()) == "Arguments",
        D9 = function(e, t) {
            try {
                return e[t]
            } catch {}
        },
        x9 = $9 ? xl : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = D9(t = P9(e), N9)) == "string" ? r : k9 ? xl(t) : (n = xl(t)) == "Object" && R9(t.callee) ? "Arguments" : n
        },
        M9 = x9,
        U9 = String,
        Uc = function(e) {
            if (M9(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return U9(e)
        },
        F9 = fs,
        IO = function() {
            var e = F9(this),
                t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        },
        B9 = bi,
        G9 = Ti,
        j9 = rO,
        W9 = IO,
        O_ = RegExp.prototype,
        V9 = function(e) {
            var t = e.flags;
            return t === void 0 && !("flags" in O_) && !G9(e, "flags") && j9(O_, e) ? B9(W9, e) : t
        },
        Ep = dr,
        K9 = oO,
        H9 = Math.floor,
        qf = Ep("".charAt),
        q9 = Ep("".replace),
        Yf = Ep("".slice),
        Y9 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        z9 = /\$([$&'`]|\d{1,2})/g,
        $O = function(e, t, r, n, s, a) {
            var l = r + e.length,
                c = n.length,
                f = z9;
            return s !== void 0 && (s = K9(s), f = Y9), q9(a, f, function(d, p) {
                var y;
                switch (qf(p, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return Yf(t, 0, r);
                    case "'":
                        return Yf(t, l);
                    case "<":
                        y = s[Yf(p, 1, -1)];
                        break;
                    default:
                        var b = +p;
                        if (b === 0) return d;
                        if (b > c) {
                            var w = H9(b / 10);
                            return w === 0 ? d : w <= c ? n[w - 1] === void 0 ? qf(p, 1) : n[w - 1] + qf(p, 1) : d
                        }
                        y = n[b - 1]
                }
                return y === void 0 ? "" : y
            })
        },
        X9 = wO,
        J9 = bi,
        bp = dr,
        S_ = po,
        Q9 = wr,
        Z9 = S9,
        Pa = Uc,
        e4 = hp,
        t4 = V9,
        r4 = $O,
        n4 = us,
        i4 = n4("replace"),
        s4 = TypeError,
        RO = bp("".indexOf);
    bp("".replace);
    var w_ = bp("".slice),
        a4 = Math.max,
        C_ = function(e, t, r) {
            return r > e.length ? -1 : t === "" ? r : RO(e, t, r)
        };
    X9({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(t, r) {
            var n = S_(this),
                s, a, l, c, f, d, p, y, b, w = 0,
                P = 0,
                M = "";
            if (t != null) {
                if (s = Z9(t), s && (a = Pa(S_(t4(t))), !~RO(a, "g"))) throw s4("`.replaceAll` does not allow non-global regexes");
                if (l = e4(t, i4), l) return J9(l, t, n, r)
            }
            for (c = Pa(n), f = Pa(t), d = Q9(r), d || (r = Pa(r)), p = f.length, y = a4(1, p), w = C_(c, f, 0); w !== -1;) b = d ? Pa(r(f, w, c)) : r4(f, c, w, [], void 0, r), M += w_(c, P, w) + b, P = w + p, w = C_(c, f, w + y);
            return P < c.length && (M += w_(c, P)), M
        }
    });
    var Tp = Gr,
        o4 = Br,
        Ap = o4.RegExp,
        Op = Tp(function() {
            var e = Ap("a", "y");
            return e.lastIndex = 2, e.exec("abcd") != null
        }),
        l4 = Op || Tp(function() {
            return !Ap("a", "y").sticky
        }),
        c4 = Op || Tp(function() {
            var e = Ap("^r", "gy");
            return e.lastIndex = 2, e.exec("str") != null
        }),
        u4 = {
            BROKEN_CARET: c4,
            MISSED_STICKY: l4,
            UNSUPPORTED_Y: Op
        },
        LO = {},
        f4 = OO,
        d4 = _p,
        h4 = Object.keys || function(t) {
            return f4(t, d4)
        },
        p4 = Ei,
        g4 = hO,
        m4 = go,
        v4 = fs,
        y4 = kc,
        _4 = h4;
    LO.f = p4 && !g4 ? Object.defineProperties : function(t, r) {
        v4(t);
        for (var n = y4(r), s = _4(r), a = s.length, l = 0, c; a > l;) m4.f(t, c = s[l++], n[c]);
        return t
    };
    var E4 = Dc,
        b4 = E4("document", "documentElement"),
        T4 = fs,
        A4 = LO,
        I_ = _p,
        O4 = yp,
        S4 = b4,
        w4 = fO,
        C4 = vO,
        $_ = ">",
        R_ = "<",
        jd = "prototype",
        Wd = "script",
        NO = C4("IE_PROTO"),
        zf = function() {},
        PO = function(e) {
            return R_ + Wd + $_ + e + R_ + "/" + Wd + $_
        },
        L_ = function(e) {
            e.write(PO("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        I4 = function() {
            var e = w4("iframe"),
                t = "java" + Wd + ":",
                r;
            return e.style.display = "none", S4.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(PO("document.F=Object")), r.close(), r.F
        },
        Al, Ml = function() {
            try {
                Al = new ActiveXObject("htmlfile")
            } catch {}
            Ml = typeof document < "u" ? document.domain && Al ? L_(Al) : I4() : L_(Al);
            for (var e = I_.length; e--;) delete Ml[jd][I_[e]];
            return Ml()
        };
    O4[NO] = !0;
    var $4 = Object.create || function(t, r) {
            var n;
            return t !== null ? (zf[jd] = T4(t), n = new zf, zf[jd] = null, n[NO] = t) : n = Ml(), r === void 0 ? n : A4.f(n, r)
        },
        R4 = Gr,
        L4 = Br,
        N4 = L4.RegExp,
        P4 = R4(function() {
            var e = N4(".", "s");
            return !(e.dotAll && e.exec(`
`) && e.flags === "s")
        }),
        k4 = Gr,
        D4 = Br,
        x4 = D4.RegExp,
        M4 = k4(function() {
            var e = x4("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        }),
        Ns = bi,
        Fc = dr,
        U4 = Uc,
        F4 = IO,
        B4 = u4,
        G4 = xc.exports,
        j4 = $4,
        W4 = _O.get,
        V4 = P4,
        K4 = M4,
        H4 = G4("native-string-replace", String.prototype.replace),
        rc = RegExp.prototype.exec,
        Vd = rc,
        q4 = Fc("".charAt),
        Y4 = Fc("".indexOf),
        z4 = Fc("".replace),
        Xf = Fc("".slice),
        Kd = function() {
            var e = /a/,
                t = /b*/g;
            return Ns(rc, e, "a"), Ns(rc, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0
        }(),
        kO = B4.BROKEN_CARET,
        Hd = /()??/.exec("")[1] !== void 0,
        X4 = Kd || Hd || kO || V4 || K4;
    X4 && (Vd = function(t) {
        var r = this,
            n = W4(r),
            s = U4(t),
            a = n.raw,
            l, c, f, d, p, y, b;
        if (a) return a.lastIndex = r.lastIndex, l = Ns(Vd, a, s), r.lastIndex = a.lastIndex, l;
        var w = n.groups,
            P = kO && r.sticky,
            M = Ns(F4, r),
            G = r.source,
            C = 0,
            H = s;
        if (P && (M = z4(M, "y", ""), Y4(M, "g") === -1 && (M += "g"), H = Xf(s, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && q4(s, r.lastIndex - 1) !== `
`) && (G = "(?: " + G + ")", H = " " + H, C++), c = new RegExp("^(?:" + G + ")", M)), Hd && (c = new RegExp("^" + G + "$(?!\\s)", M)), Kd && (f = r.lastIndex), d = Ns(rc, P ? c : r, H), P ? d ? (d.input = Xf(d.input, C), d[0] = Xf(d[0], C), d.index = r.lastIndex, r.lastIndex += d[0].length) : r.lastIndex = 0 : Kd && d && (r.lastIndex = r.global ? d.index + d[0].length : f), Hd && d && d.length > 1 && Ns(H4, d[0], c, function() {
                for (p = 1; p < arguments.length - 2; p++) arguments[p] === void 0 && (d[p] = void 0)
            }), d && w)
            for (d.groups = y = j4(null), p = 0; p < w.length; p++) b = w[p], y[b[0]] = d[b[1]];
        return d
    });
    var Sp = Vd,
        J4 = wO,
        N_ = Sp;
    J4({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== N_
    }, {
        exec: N_
    });
    var Q4 = dp,
        DO = Function.prototype,
        P_ = DO.apply,
        k_ = DO.call,
        Z4 = typeof Reflect == "object" && Reflect.apply || (Q4 ? k_.bind(P_) : function() {
            return k_.apply(P_, arguments)
        }),
        D_ = dr,
        x_ = bO,
        e6 = Sp,
        M_ = Gr,
        xO = us,
        t6 = mp,
        r6 = xO("species"),
        Jf = RegExp.prototype,
        n6 = function(e, t, r, n) {
            var s = xO(e),
                a = !M_(function() {
                    var d = {};
                    return d[s] = function() {
                        return 7
                    }, "" [e](d) != 7
                }),
                l = a && !M_(function() {
                    var d = !1,
                        p = /a/;
                    return e === "split" && (p = {}, p.constructor = {}, p.constructor[r6] = function() {
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
                        return M === e6 || M === Jf.exec ? a && !w ? {
                            done: !0,
                            value: c(p, y, b)
                        } : {
                            done: !0,
                            value: P(y, p, b)
                        } : {
                            done: !1
                        }
                    });
                x_(String.prototype, e, f[0]), x_(Jf, s, f[1])
            }
            n && t6(Jf[s], "sham", !0)
        },
        wp = dr,
        i6 = Mc,
        s6 = Uc,
        a6 = po,
        o6 = wp("".charAt),
        U_ = wp("".charCodeAt),
        l6 = wp("".slice),
        F_ = function(e) {
            return function(t, r) {
                var n = s6(a6(t)),
                    s = i6(r),
                    a = n.length,
                    l, c;
                return s < 0 || s >= a ? e ? "" : void 0 : (l = U_(n, s), l < 55296 || l > 56319 || s + 1 === a || (c = U_(n, s + 1)) < 56320 || c > 57343 ? e ? o6(n, s) : l : e ? l6(n, s, s + 2) : (l - 55296 << 10) + (c - 56320) + 65536)
            }
        },
        c6 = {
            codeAt: F_(!1),
            charAt: F_(!0)
        },
        u6 = c6.charAt,
        f6 = function(e, t, r) {
            return t + (r ? u6(e, t).length : 1)
        },
        B_ = bi,
        d6 = fs,
        h6 = wr,
        p6 = Pc,
        g6 = Sp,
        m6 = TypeError,
        v6 = function(e, t) {
            var r = e.exec;
            if (h6(r)) {
                var n = B_(r, e, t);
                return n !== null && d6(n), n
            }
            if (p6(e) === "RegExp") return B_(g6, e, t);
            throw m6("RegExp#exec called on incompatible receiver")
        },
        y6 = Z4,
        G_ = bi,
        Bc = dr,
        _6 = n6,
        E6 = Gr,
        b6 = fs,
        T6 = wr,
        A6 = Mc,
        O6 = AO,
        $s = Uc,
        S6 = po,
        w6 = f6,
        C6 = hp,
        I6 = $O,
        $6 = v6,
        R6 = us,
        qd = R6("replace"),
        L6 = Math.max,
        N6 = Math.min,
        P6 = Bc([].concat),
        Qf = Bc([].push),
        j_ = Bc("".indexOf),
        W_ = Bc("".slice),
        k6 = function(e) {
            return e === void 0 ? e : String(e)
        },
        D6 = function() {
            return "a".replace(/./, "$0") === "$0"
        }(),
        V_ = function() {
            return /./ [qd] ? /./ [qd]("a", "$0") === "" : !1
        }(),
        x6 = !E6(function() {
            var e = /./;
            return e.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "".replace(e, "$<a>") !== "7"
        });
    _6("replace", function(e, t, r) {
        var n = V_ ? "$" : "$0";
        return [function(a, l) {
            var c = S6(this),
                f = a == null ? void 0 : C6(a, qd);
            return f ? G_(f, a, c, l) : G_(t, $s(c), a, l)
        }, function(s, a) {
            var l = b6(this),
                c = $s(s);
            if (typeof a == "string" && j_(a, n) === -1 && j_(a, "$<") === -1) {
                var f = r(t, l, c, a);
                if (f.done) return f.value
            }
            var d = T6(a);
            d || (a = $s(a));
            var p = l.global;
            if (p) {
                var y = l.unicode;
                l.lastIndex = 0
            }
            for (var b = [];;) {
                var w = $6(l, c);
                if (w === null || (Qf(b, w), !p)) break;
                var P = $s(w[0]);
                P === "" && (l.lastIndex = w6(c, O6(l.lastIndex), y))
            }
            for (var M = "", G = 0, C = 0; C < b.length; C++) {
                w = b[C];
                for (var H = $s(w[0]), z = L6(N6(A6(w.index), c.length), 0), V = [], j = 1; j < w.length; j++) Qf(V, k6(w[j]));
                var Q = w.groups;
                if (d) {
                    var oe = P6([H], V, z, c);
                    Q !== void 0 && Qf(oe, Q);
                    var le = $s(y6(a, void 0, oe))
                } else le = I6(H, c, z, V, Q, a);
                z >= G && (M += W_(c, G, z) + le, G = z + H.length)
            }
            return M + W_(c, G)
        }]
    }, !x6 || !D6 || V_);
    var M6 = Br,
        U6 = dr,
        F6 = function(e, t) {
            return U6(M6[e].prototype[t])
        },
        B6 = F6,
        G6 = B6("String", "replaceAll"),
        j6 = G6,
        W6 = j6,
        V6 = W6,
        K6 = V6,
        H6 = K6,
        q6 = H6;
    (function(e) {
        e.exports = q6
    })(aV);
    const Y6 = rt({
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
                this.autosize && YA(this.$refs.textarea)
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
                        for (let a = 0; a < this.rows - 1; a++) s += `${n[a]}
`;
                        s += n.slice(this.rows - 1).join(" ").replaceAll(`
`, ""), t.value = s
                    }
                    if (this.sanitizers && (t.value = WA.withTypes(t.value, [...this.sanitizers])), t.value.length > r) {
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
        z6 = ["rows", "value"];

    function X6(e, t, r, n, s, a) {
        return F(), W("textarea", {
            ref: "textarea",
            rows: e.rows,
            value: e.modelValue,
            onInput: t[0] || (t[0] = (...l) => e.onInput && e.onInput(...l)),
            onKeypress: t[1] || (t[1] = Xs((...l) => e.onKeypressEnter && e.onKeypressEnter(...l), ["enter"]))
        }, null, 40, z6)
    }
    const Cp = st(Y6, [
            ["render", X6]
        ]),
        J6 = rt({
            components: {
                Input: HA,
                TextArea: Cp
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
                        if (e && e instanceof Sr.ObjectEntity) return !0
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
        Q6 = {
            class: "single-text-entry"
        },
        Z6 = {
            class: "constrain"
        },
        e5 = {
            key: 0
        },
        t5 = {
            key: 1,
            for: "input"
        };

    function r5(e, t, r, n, s, a) {
        const l = Zt("TextArea"),
            c = Zt("Input"),
            f = Mt("bb");
        return F(), W("div", Q6, [X("div", Z6, [e.player.prompt ? Oe((F(), W("p", e5, null, 512)), [
            [f, e.player.prompt]
        ]) : ve("", !0), e.player.label ? Oe((F(), W("label", t5, null, 512)), [
            [f, e.player.label]
        ]) : ve("", !0), e.player.isMultiline ? (F(), xr(l, {
            key: 2,
            id: "input",
            disabled: e.player.isDisabled,
            "model-value": e.value,
            placeholder: e.player.placeholder,
            rows: e.player.lines || 2,
            "onUpdate:modelValue": e.onWrite
        }, null, 8, ["disabled", "model-value", "placeholder", "rows", "onUpdate:modelValue"])) : (F(), xr(c, {
            key: 3,
            id: "input",
            type: "text",
            disabled: e.player.isDisabled,
            placeholder: e.player.placeholder,
            "model-value": e.value,
            "onUpdate:modelValue": e.onWrite
        }, null, 8, ["disabled", "placeholder", "model-value", "onUpdate:modelValue"])), Oe(X("button", {
            onClick: t[0] || (t[0] = ze((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, null, 512), [
            [f, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const n5 = st(J6, [
            ["render", r5]
        ]),
        i5 = rt({
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
        s5 = {
            class: "multi-text-entry"
        },
        a5 = {
            class: "constrain"
        },
        o5 = {
            key: 0
        },
        l5 = ["for"],
        c5 = ["id", "value", "rows", "placeholder", "disabled", "onInput"],
        u5 = ["id", "value", "placeholder", "disabled", "onInput"];

    function f5(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", s5, [X("div", a5, [e.player.prompt ? Oe((F(), W("p", o5, null, 512)), [
            [l, e.player.prompt]
        ]) : ve("", !0), (F(!0), W(qe, null, hn(e.player.inputs, (c, f) => (F(), W(qe, null, [c.label ? Oe((F(), W("label", {
            key: `label-${c.key}`,
            for: `input-${f}`
        }, null, 8, l5)), [
            [l, c.label]
        ]) : ve("", !0), c.isMultiline ? (F(), W("textarea", {
            id: `input-${f}`,
            key: `input-${f}`,
            value: e.values[f],
            rows: c.lines || 2,
            placeholder: c.placeholder,
            disabled: c.isDisabled,
            onInput: d => e.onValueInput(d, f)
        }, null, 40, c5)) : (F(), W("input", {
            id: `input-${f}`,
            key: `input-${c.key}`,
            type: "text",
            value: e.values[f],
            placeholder: c.placeholder,
            disabled: c.isDisabled,
            onInput: d => e.onValueInput(d, f)
        }, null, 40, u5))], 64))), 256)), Oe(X("button", {
            onClick: t[0] || (t[0] = ze((...c) => e.onSubmitClick && e.onSubmitClick(...c), ["prevent"]))
        }, null, 512), [
            [l, e.player.submitText || "SUBMIT"]
        ])])])
    }
    const d5 = st(i5, [
            ["render", f5]
        ]),
        h5 = rt({
            props: {
                player: Object
            }
        }),
        p5 = {
            class: "waiting"
        },
        g5 = {
            class: "constrain"
        },
        m5 = {
            key: 0
        };

    function v5(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", p5, [X("div", g5, [e.player.message ? Oe((F(), W("p", m5, null, 512)), [
            [l, e.player.message]
        ]) : ve("", !0)])])
    }
    const y5 = st(h5, [
        ["render", v5]
    ]);
    rt({
        components: {
            Choices: hk,
            Doodle: $W,
            Draw: xW,
            Lobby: qW,
            PostGame: eV,
            SingleTextEntry: n5,
            MultiTextEntry: d5,
            Waiting: y5
        },
        props: {
            applyStyling: {
                type: Boolean,
                default: !0
            },
            player: Object
        }
    });
    const _5 = rt({
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
                ql.galleryImpression(this.artifact.categoryId, "post_game")
            },
            methods: {
                onLinkClick() {
                    ql.galleryClick(this.artifact.categoryId, "post_game"), ro.setAsViewed(0)
                }
            }
        }),
        E5 = ["href", "aria-label"];

    function b5(e, t, r, n, s, a) {
        return e.link ? (F(), W("a", {
            key: 0,
            class: Ve([{
                "no-content": !e.hasProvidedContent
            }, "artifact-link"]),
            target: "_blank",
            href: e.link,
            "aria-label": e.$t("POST_GAME.GALLERY_LINK"),
            onClick: t[0] || (t[0] = (...l) => e.onLinkClick && e.onLinkClick(...l))
        }, [ZN(e.$slots, "default")], 10, E5)) : ve("", !0)
    }
    const MO = st(_5, [
        ["render", b5]
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
        Gc = {},
        UO = {},
        jc = {},
        Ip = {};
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
    })(Ip);
    Object.defineProperty(jc, "__esModule", {
        value: !0
    });
    jc.Tokenizer = void 0;
    var ni = Ip,
        T5 = function() {
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
                    !d && !a ? f.convertToTextToken() : a ? f.type === ni.Token.Type.endTag && f.content === l ? (a = !1, s.push(e.createTextToken(c))) : (f.convertToTextToken(), c += f.content, p = !1) : d.noNesting && f.type === ni.Token.Type.startTag && (a = !0, l = f.content, c = ""), p && s.push(f)
                }), s
            }, e.prototype.getTokens = function(t) {
                for (var r = '\\[(/\\w*)\\]|\\[(\\w*)+(=(["])' + e.valueChars + "*\\4)?( (" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\7)*\\]", n = new RegExp(r, "g"), s = [], a = n.exec(t), l = 0; a;) {
                    var c = a.index - l;
                    c > 0 && s.push(e.createTextToken(t.substr(l, c))), s.push(e.createTagToken(a)), l = n.lastIndex, a = n.exec(t)
                }
                var f = t.length - l;
                return f > 0 && s.push(e.createTextToken(t.substr(l, f))), s
            }, e.createTextToken = function(t) {
                return new ni.Token(ni.Token.Type.text, t)
            }, e.createTagToken = function(t) {
                if (!t[1]) {
                    for (var r = t[2], n = {}, s = new RegExp("(" + e.nameChars + '+)?=(["])(' + e.valueChars + "+)\\2", "g"), a = t[0].substr(1 + r.length, t[0].length - 2 - r.length), l = s.exec(a); l;) l[1] ? n[l[1]] = l[3] : n[r] = l[3], l = s.exec(a);
                    return new ni.Token(ni.Token.Type.startTag, r, n, t[0])
                }
                return new ni.Token(ni.Token.Type.endTag, t[1].substr(1, t[1].length - 1))
            }, e.nameChars = "[a-zA-Z0-9\\.\\-_:;/]", e.valueChars = "[a-zA-Z0-9\\.\\-_:;#/\\s]", e
        }();
    jc.Tokenizer = T5;
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ParseTree = void 0;
        var t = jc,
            r = Ip,
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
    })(UO);
    var vo = {};
    Object.defineProperty(vo, "__esModule", {
        value: !0
    });
    vo.Tag = void 0;
    var A5 = function() {
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
    vo.Tag = A5;
    Object.defineProperty(Gc, "__esModule", {
        value: !0
    });
    Gc.BBCodeParser = void 0;
    var K_ = UO,
        H_ = vo,
        O5 = function() {
            function e(t, r) {
                this.options = r, this.escapeHTML = !1, this.tags = t, r && (this.escapeHTML = r.escapeHTML)
            }
            return Object.defineProperty(e, "defaultTags", {
                get: function() {
                    return {
                        b: H_.Tag.create("b"),
                        i: H_.Tag.create("i")
                    }
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.parse = function(t, r, n, s) {
                r === void 0 && (r = !1), n === void 0 && (n = !0), s === void 0 && (s = !0);
                var a = K_.ParseTree.buildTree(t, this.tags);
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
                    if (f.type === K_.ParseTree.Type.text) {
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
    Gc.BBCodeParser = O5;
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
        var r = vo;
        Object.defineProperty(e, "Tag", {
            enumerable: !0,
            get: function() {
                return r.Tag
            }
        })
    })(Wi);
    const S5 = {
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
    var FO = {
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
    })(FO);
    const w5 = FO.exports,
        C5 = rt({
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
        Vn = e => (gc("data-v-220ec4c0"), e = e(), mc(), e),
        I5 = {
            key: 0,
            ref: "debugNav",
            class: "debug-nav",
            tabindex: "0"
        },
        $5 = {
            key: 0,
            class: "power-nav"
        },
        R5 = Vn(() => X("p", null, "MARKERS", -1)),
        L5 = ["onClick"],
        N5 = Ur("KILL"),
        P5 = Vn(() => X("br", null, null, -1)),
        k5 = Ur("ROOM"),
        D5 = [N5, P5, k5],
        x5 = Vn(() => X("p", {
            class: "title blurred"
        }, "DEBUG", -1)),
        M5 = {
            key: 1,
            class: "title focused"
        },
        U5 = {
            key: 2,
            class: "title focused"
        },
        F5 = Vn(() => X("svg", {
            viewBox: "0 0 20 10"
        }, [X("polygon", {
            points: "0,10 10,0 20,10"
        })], -1)),
        B5 = Vn(() => X("div", {
            class: "visually-hidden"
        }, "Open debug menu", -1)),
        G5 = [F5, B5],
        j5 = Vn(() => X("svg", {
            viewBox: "0 0 60 50"
        }, [X("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), X("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        W5 = Vn(() => X("div", {
            class: "visually-hidden"
        }, "Previous", -1)),
        V5 = [j5, W5],
        K5 = Vn(() => X("svg", {
            viewBox: "0 0 60 50"
        }, [X("polygon", {
            class: "outline",
            points: "40,35.6 20,25 40,14.4"
        }), X("polygon", {
            points: "40,35.6 20,25 40,14.4"
        })], -1)),
        H5 = Vn(() => X("div", {
            class: "visually-hidden"
        }, "Next", -1)),
        q5 = [K5, H5];

    function Y5(e, t, r, n, s, a) {
        return e.replayer ? (F(), W("div", I5, [e.showPowerNav ? (F(), W("div", $5, [X("button", {
            class: "close",
            onClick: t[0] || (t[0] = (...l) => e.onClosePowerNavClick && e.onClosePowerNavClick(...l))
        }, "X"), R5, X("ul", null, [(F(!0), W(qe, null, hn(e.replayer.markerMap, (l, c) => (F(), W("li", {
            key: c,
            class: Ve({
                active: c === e.replayer.currentMarkerItemIndex
            }),
            onClick: f => e.onMarkerClick(c)
        }, Me(l[1].marker), 11, L5))), 128))]), X("button", {
            class: "option",
            onClick: t[1] || (t[1] = (...l) => e.onKillClick && e.onKillClick(...l))
        }, D5), X("button", {
            class: "option",
            onClick: t[2] || (t[2] = (...l) => e.onDisconnectClick && e.onDisconnectClick(...l))
        }, "DISCONNECT")])) : ve("", !0), x5, e.replayer.markerMap.length ? (F(), W("p", U5, Me(e.replayer.currentMarkerItemIndex) + " : " + Me(e.replayer.currentMarkerItem[1].marker) + " (" + Me(e.replayer.currentEntityItemIndex) + ") ", 1)) : (F(), W("p", M5, "Item #" + Me(e.replayer.currentEntityItemIndex), 1)), e.showPowerNav ? ve("", !0) : (F(), W("button", {
            key: 3,
            class: "open-power-nav",
            onClick: t[3] || (t[3] = (...l) => e.onOpenPowerNavClick && e.onOpenPowerNavClick(...l))
        }, G5)), X("button", {
            class: "direction previous",
            onClick: t[4] || (t[4] = (...l) => e.onPreviousClick && e.onPreviousClick(...l))
        }, V5), X("button", {
            class: "direction next",
            onClick: t[5] || (t[5] = (...l) => e.onNextClick && e.onNextClick(...l))
        }, q5)], 512)) : ve("", !0)
    }
    const z5 = st(C5, [
        ["render", Y5],
        ["__scopeId", "data-v-220ec4c0"]
    ]);

    function X5(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
        return e
    }
    var J5 = X5,
        Q5 = ET,
        Z5 = Q5(Object.keys, Object),
        eq = Z5,
        tq = Vh,
        rq = eq,
        nq = Object.prototype,
        iq = nq.hasOwnProperty;

    function sq(e) {
        if (!tq(e)) return rq(e);
        var t = [];
        for (var r in Object(e)) iq.call(e, r) && r != "constructor" && t.push(r);
        return t
    }
    var aq = sq,
        oq = IT,
        lq = aq,
        cq = $c;

    function uq(e) {
        return cq(e) ? oq(e) : lq(e)
    }
    var Wc = uq,
        fq = co,
        dq = Wc;

    function hq(e, t) {
        return e && fq(t, dq(t), e)
    }
    var pq = hq,
        gq = co,
        mq = uo;

    function vq(e, t) {
        return e && gq(t, mq(t), e)
    }
    var yq = vq;

    function _q(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, a = []; ++r < n;) {
            var l = e[r];
            t(l, r, e) && (a[s++] = l)
        }
        return a
    }
    var Eq = _q;

    function bq() {
        return []
    }
    var BO = bq,
        Tq = Eq,
        Aq = BO,
        Oq = Object.prototype,
        Sq = Oq.propertyIsEnumerable,
        q_ = Object.getOwnPropertySymbols,
        wq = q_ ? function(e) {
            return e == null ? [] : (e = Object(e), Tq(q_(e), function(t) {
                return Sq.call(e, t)
            }))
        } : Aq,
        $p = wq,
        Cq = co,
        Iq = $p;

    function $q(e, t) {
        return Cq(e, Iq(e), t)
    }
    var Rq = $q;

    function Lq(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n;) e[s + r] = t[r];
        return e
    }
    var GO = Lq,
        Nq = GO,
        Pq = Wh,
        kq = $p,
        Dq = BO,
        xq = Object.getOwnPropertySymbols,
        Mq = xq ? function(e) {
            for (var t = []; e;) Nq(t, kq(e)), e = Pq(e);
            return t
        } : Dq,
        jO = Mq,
        Uq = co,
        Fq = jO;

    function Bq(e, t) {
        return Uq(e, Fq(e), t)
    }
    var Gq = Bq,
        jq = GO,
        Wq = yi;

    function Vq(e, t, r) {
        var n = t(e);
        return Wq(e) ? n : jq(n, r(e))
    }
    var WO = Vq,
        Kq = WO,
        Hq = $p,
        qq = Wc;

    function Yq(e) {
        return Kq(e, qq, Hq)
    }
    var zq = Yq,
        Xq = WO,
        Jq = jO,
        Qq = uo;

    function Zq(e) {
        return Xq(e, Qq, Jq)
    }
    var eY = Zq,
        tY = cs,
        rY = pn,
        nY = tY(rY, "DataView"),
        iY = nY,
        sY = cs,
        aY = pn,
        oY = sY(aY, "Promise"),
        lY = oY,
        cY = cs,
        uY = pn,
        fY = cY(uY, "Set"),
        dY = fY,
        hY = cs,
        pY = pn,
        gY = hY(pY, "WeakMap"),
        mY = gY,
        Yd = iY,
        zd = Bh,
        Xd = lY,
        Jd = dY,
        Qd = mY,
        VO = aa,
        da = hT,
        Y_ = "[object Map]",
        vY = "[object Object]",
        z_ = "[object Promise]",
        X_ = "[object Set]",
        J_ = "[object WeakMap]",
        Q_ = "[object DataView]",
        yY = da(Yd),
        _Y = da(zd),
        EY = da(Xd),
        bY = da(Jd),
        TY = da(Qd),
        Vi = VO;
    (Yd && Vi(new Yd(new ArrayBuffer(1))) != Q_ || zd && Vi(new zd) != Y_ || Xd && Vi(Xd.resolve()) != z_ || Jd && Vi(new Jd) != X_ || Qd && Vi(new Qd) != J_) && (Vi = function(e) {
        var t = VO(e),
            r = t == vY ? e.constructor : void 0,
            n = r ? da(r) : "";
        if (n) switch (n) {
            case yY:
                return Q_;
            case _Y:
                return Y_;
            case EY:
                return z_;
            case bY:
                return X_;
            case TY:
                return J_
        }
        return t
    });
    var Rp = Vi,
        AY = Object.prototype,
        OY = AY.hasOwnProperty;

    function SY(e) {
        var t = e.length,
            r = new e.constructor(t);
        return t && typeof e[0] == "string" && OY.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }
    var wY = SY,
        CY = jh;

    function IY(e, t) {
        var r = t ? CY(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    var $Y = IY,
        RY = /\w*$/;

    function LY(e) {
        var t = new e.constructor(e.source, RY.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var NY = LY,
        Z_ = wc,
        eE = Z_ ? Z_.prototype : void 0,
        tE = eE ? eE.valueOf : void 0;

    function PY(e) {
        return tE ? Object(tE.call(e)) : {}
    }
    var kY = PY,
        DY = jh,
        xY = $Y,
        MY = NY,
        UY = kY,
        FY = yT,
        BY = "[object Boolean]",
        GY = "[object Date]",
        jY = "[object Map]",
        WY = "[object Number]",
        VY = "[object RegExp]",
        KY = "[object Set]",
        HY = "[object String]",
        qY = "[object Symbol]",
        YY = "[object ArrayBuffer]",
        zY = "[object DataView]",
        XY = "[object Float32Array]",
        JY = "[object Float64Array]",
        QY = "[object Int8Array]",
        ZY = "[object Int16Array]",
        e7 = "[object Int32Array]",
        t7 = "[object Uint8Array]",
        r7 = "[object Uint8ClampedArray]",
        n7 = "[object Uint16Array]",
        i7 = "[object Uint32Array]";

    function s7(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case YY:
                return DY(e);
            case BY:
            case GY:
                return new n(+e);
            case zY:
                return xY(e, r);
            case XY:
            case JY:
            case QY:
            case ZY:
            case e7:
            case t7:
            case r7:
            case n7:
            case i7:
                return FY(e, r);
            case jY:
                return new n;
            case WY:
            case HY:
                return new n(e);
            case VY:
                return MY(e);
            case KY:
                return new n;
            case qY:
                return UY(e)
        }
    }
    var a7 = s7,
        o7 = Rp,
        l7 = vi,
        c7 = "[object Map]";

    function u7(e) {
        return l7(e) && o7(e) == c7
    }
    var f7 = u7,
        d7 = f7,
        h7 = Kh,
        rE = to.exports,
        nE = rE && rE.isMap,
        p7 = nE ? h7(nE) : d7,
        g7 = p7,
        m7 = Rp,
        v7 = vi,
        y7 = "[object Set]";

    function _7(e) {
        return v7(e) && m7(e) == y7
    }
    var E7 = _7,
        b7 = E7,
        T7 = Kh,
        iE = to.exports,
        sE = iE && iE.isSet,
        A7 = sE ? T7(sE) : b7,
        O7 = A7,
        S7 = gT,
        w7 = J5,
        C7 = Hh,
        I7 = pq,
        $7 = yq,
        R7 = Yl.exports,
        L7 = _T,
        N7 = Rq,
        P7 = Gq,
        k7 = zq,
        D7 = eY,
        x7 = Rp,
        M7 = wY,
        U7 = a7,
        F7 = bT,
        B7 = yi,
        G7 = eo.exports,
        j7 = g7,
        W7 = gn,
        V7 = O7,
        K7 = Wc,
        H7 = uo,
        q7 = 1,
        Y7 = 2,
        z7 = 4,
        KO = "[object Arguments]",
        X7 = "[object Array]",
        J7 = "[object Boolean]",
        Q7 = "[object Date]",
        Z7 = "[object Error]",
        HO = "[object Function]",
        ez = "[object GeneratorFunction]",
        tz = "[object Map]",
        rz = "[object Number]",
        qO = "[object Object]",
        nz = "[object RegExp]",
        iz = "[object Set]",
        sz = "[object String]",
        az = "[object Symbol]",
        oz = "[object WeakMap]",
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
        yz = "[object Uint32Array]",
        Et = {};
    Et[KO] = Et[X7] = Et[lz] = Et[cz] = Et[J7] = Et[Q7] = Et[uz] = Et[fz] = Et[dz] = Et[hz] = Et[pz] = Et[tz] = Et[rz] = Et[qO] = Et[nz] = Et[iz] = Et[sz] = Et[az] = Et[gz] = Et[mz] = Et[vz] = Et[yz] = !0;
    Et[Z7] = Et[HO] = Et[oz] = !1;

    function Ul(e, t, r, n, s, a) {
        var l, c = t & q7,
            f = t & Y7,
            d = t & z7;
        if (r && (l = s ? r(e, n, s, a) : r(e)), l !== void 0) return l;
        if (!W7(e)) return e;
        var p = B7(e);
        if (p) {
            if (l = M7(e), !c) return L7(e, l)
        } else {
            var y = x7(e),
                b = y == HO || y == ez;
            if (G7(e)) return R7(e, c);
            if (y == qO || y == KO || b && !s) {
                if (l = f || b ? {} : F7(e), !c) return f ? P7(e, $7(l, e)) : N7(e, I7(l, e))
            } else {
                if (!Et[y]) return s ? e : {};
                l = U7(e, y, c)
            }
        }
        a || (a = new S7);
        var w = a.get(e);
        if (w) return w;
        a.set(e, l), V7(e) ? e.forEach(function(G) {
            l.add(Ul(G, t, r, G, e, a))
        }) : j7(e) && e.forEach(function(G, C) {
            l.set(C, Ul(G, t, r, C, e, a))
        });
        var P = d ? f ? D7 : k7 : f ? H7 : K7,
            M = p ? void 0 : P(e);
        return w7(M || e, function(G, C) {
            M && (C = G, G = e[C]), C7(l, C, Ul(G, t, r, C, e, a))
        }), l
    }
    var _z = Ul,
        Ez = _z,
        bz = 1,
        Tz = 4;

    function Az(e) {
        return Ez(e, bz | Tz)
    }
    var YO = Az;
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
                !e || (this.values = YO(this.$ecastValues), this.content = (n = e_.getPromptGuess(this.values, e)) != null ? n : null)
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
                    !this.$debugRecorder || (this.screen === "debug" && (await this.$debugRecorder.send(this.message), this.$emit("resolve")), this.screen === "feedback" && (await e_.send({
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
        zO = "main/tjsp/quiplash3/assets/ad9172fc.png",
        XO = "main/tjsp/quiplash3/assets/dc131b16.png",
        Sz = "main/tjsp/quiplash3/assets/38715b18.png",
        wz = "main/tjsp/quiplash3/assets/b0d7c822.png",
        Cz = "main/tjsp/quiplash3/assets/06150f24.png",
        en = e => (gc("data-v-2c53389f"), e = e(), mc(), e),
        Iz = {
            class: "jbg"
        },
        $z = {
            key: 0,
            class: "options"
        },
        Rz = en(() => X("img", {
            src: zO,
            alt: "Leave Feedback"
        }, null, -1)),
        Lz = en(() => X("span", null, [Ur("LEAVE"), X("br"), Ur("FEEDBACK")], -1)),
        Nz = [Rz, Lz],
        Pz = en(() => X("img", {
            src: XO,
            alt: "Send Debug"
        }, null, -1)),
        kz = en(() => X("span", null, [Ur("SEND A"), X("br"), Ur("DEBUG")], -1)),
        Dz = [Pz, kz],
        xz = {
            key: 1,
            class: "feedback"
        },
        Mz = en(() => X("img", {
            class: "image",
            src: zO,
            alt: "Feedback"
        }, null, -1)),
        Uz = en(() => X("h3", {
            class: "text"
        }, "Send Feedback", -1)),
        Fz = en(() => X("p", {
            class: "cta"
        }, "CHOOSE A VIBE", -1)),
        Bz = {
            class: "buttons"
        },
        Gz = en(() => X("img", {
            src: Sz,
            alt: "good"
        }, null, -1)),
        jz = [Gz],
        Wz = en(() => X("img", {
            src: wz,
            alt: "good"
        }, null, -1)),
        Vz = [Wz],
        Kz = en(() => X("img", {
            src: Cz,
            alt: "bad"
        }, null, -1)),
        Hz = [Kz],
        qz = {
            class: "actions"
        },
        Yz = {
            key: 0,
            class: "content-guess"
        },
        zz = Ur("Feedback is about: "),
        Xz = {
            key: 2,
            class: "debug"
        },
        Jz = en(() => X("img", {
            class: "image",
            src: XO,
            alt: "Debug"
        }, null, -1)),
        Qz = en(() => X("h3", {
            class: "text"
        }, "What is Happening?", -1)),
        Zz = {
            class: "actions"
        };

    function eX(e, t, r, n, s, a) {
        return F(), W("div", Iz, [e.screen === "options" ? (F(), W("div", $z, [X("button", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, Nz), X("button", {
            onClick: t[1] || (t[1] = (...l) => e.onDebugClick && e.onDebugClick(...l))
        }, Dz)])) : e.screen === "feedback" ? (F(), W("div", xz, [Mz, Uz, X("div", {
            class: Ve(["vibes", {
                "has-selected": e.vibe
            }])
        }, [Fz, X("div", Bz, [X("button", {
            class: Ve({
                selected: e.vibe === "good"
            }),
            onClick: t[2] || (t[2] = l => e.onVibeClick("good"))
        }, jz, 2), X("button", {
            class: Ve({
                selected: e.vibe === "meh"
            }),
            onClick: t[3] || (t[3] = l => e.onVibeClick("meh"))
        }, Vz, 2), X("button", {
            class: Ve({
                selected: e.vibe === "bad"
            }),
            onClick: t[4] || (t[4] = l => e.onVibeClick("bad"))
        }, Hz, 2)])], 2), X("div", qz, [e.content ? (F(), W("div", Yz, [Oe(X("input", {
            "onUpdate:modelValue": t[5] || (t[5] = l => e.isContent = l),
            type: "checkbox"
        }, null, 512), [
            [cT, e.isContent]
        ]), X("span", null, [zz, X("em", null, Me(e.content), 1)])])) : ve("", !0), Oe(X("textarea", {
            "onUpdate:modelValue": t[6] || (t[6] = l => e.message = l),
            rows: "3",
            placeholder: "(optional) more details",
            "aria-label": "Details"
        }, null, 512), [
            [oy, e.message]
        ]), X("button", {
            onClick: t[7] || (t[7] = ze((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, Me(e.$t("ACTION.SUBMIT")), 1)])])) : e.screen === "debug" ? (F(), W("div", Xz, [Jz, Qz, X("div", Zz, [Oe(X("textarea", {
            "onUpdate:modelValue": t[8] || (t[8] = l => e.message = l),
            rows: "3",
            placeholder: "Enter details",
            "aria-label": "Details"
        }, null, 512), [
            [oy, e.message]
        ]), X("button", {
            onClick: t[9] || (t[9] = ze((...l) => e.onSubmitClick && e.onSubmitClick(...l), ["prevent"]))
        }, Me(e.$t("ACTION.OK")), 1)])])) : ve("", !0)])
    }
    const JO = st(Oz, [
            ["render", eX],
            ["__scopeId", "data-v-2c53389f"]
        ]),
        tX = rt({
            methods: {
                onFeedbackClick() {
                    this.$showModal(JO)
                }
            }
        });

    function rX(e, t, r, n, s, a) {
        return F(), W("div", {
            class: "feedback-button",
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "SEND FEEDBACK")
    }
    const nX = st(tX, [
            ["render", rX],
            ["__scopeId", "data-v-6f2f1788"]
        ]),
        iX = {
            install: (e, t) => {
                if (!e.config.globalProperties.$debugRecorder && !e.config.globalProperties.$debugReplayer) {
                    if (t.replayer) {
                        e.config.globalProperties.$debugReplayer = t.replayer, e.component("Debug", z5);
                        return
                    }
                    if (e.config.globalProperties.$debugRecorder = new j3(t.client, t.room), !e.config.globalProperties.$showModal) {
                        console.warn("[debugPlugin] Sending debug and feedback messages is disabled be the modalPlugin is not used.");
                        return
                    }(!er.isProduction || er.getQueryParam("feedback")) && e.component("Debug", nX), new w5(() => {
                        e.config.globalProperties.$showModal(JO)
                    })
                }
            }
        };
    var sX = pn,
        aX = function() {
            return sX.Date.now()
        },
        oX = aX,
        lX = /\s/;

    function cX(e) {
        for (var t = e.length; t-- && lX.test(e.charAt(t)););
        return t
    }
    var uX = cX,
        fX = uX,
        dX = /^\s+/;

    function hX(e) {
        return e && e.slice(0, fX(e) + 1).replace(dX, "")
    }
    var pX = hX,
        gX = aa,
        mX = vi,
        vX = "[object Symbol]";

    function yX(e) {
        return typeof e == "symbol" || mX(e) && gX(e) == vX
    }
    var Vc = yX,
        _X = pX,
        aE = gn,
        EX = Vc,
        oE = 0 / 0,
        bX = /^[-+]0x[0-9a-f]+$/i,
        TX = /^0b[01]+$/i,
        AX = /^0o[0-7]+$/i,
        OX = parseInt;

    function SX(e) {
        if (typeof e == "number") return e;
        if (EX(e)) return oE;
        if (aE(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = aE(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = _X(e);
        var r = TX.test(e);
        return r || AX.test(e) ? OX(e.slice(2), r ? 2 : 8) : bX.test(e) ? oE : +e
    }
    var wX = SX,
        CX = gn,
        Zf = oX,
        lE = wX,
        IX = "Expected a function",
        $X = Math.max,
        RX = Math.min;

    function LX(e, t, r) {
        var n, s, a, l, c, f, d = 0,
            p = !1,
            y = !1,
            b = !0;
        if (typeof e != "function") throw new TypeError(IX);
        t = lE(t) || 0, CX(r) && (p = !!r.leading, y = "maxWait" in r, a = y ? $X(lE(r.maxWait) || 0, t) : a, b = "trailing" in r ? !!r.trailing : b);

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
            return y ? RX(ue, a - le) : ue
        }

        function G(Q) {
            var oe = Q - f,
                le = Q - d;
            return f === void 0 || oe >= t || oe < 0 || y && le >= a
        }

        function C() {
            var Q = Zf();
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
            return c === void 0 ? l : H(Zf())
        }

        function j() {
            var Q = Zf(),
                oe = G(Q);
            if (n = arguments, s = this, f = Q, oe) {
                if (c === void 0) return P(f);
                if (y) return clearTimeout(c), c = setTimeout(C, t), w(f)
            }
            return c === void 0 && (c = setTimeout(C, t)), l
        }
        return j.cancel = z, j.flush = V, j
    }
    var NX = LX,
        PX = yi,
        kX = Vc,
        DX = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        xX = /^\w*$/;

    function MX(e, t) {
        if (PX(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || kX(e) ? !0 : xX.test(e) || !DX.test(e) || t != null && e in Object(t)
    }
    var UX = MX,
        QO = pT,
        FX = "Expected a function";

    function Lp(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(FX);
        var r = function() {
            var n = arguments,
                s = t ? t.apply(this, n) : n[0],
                a = r.cache;
            if (a.has(s)) return a.get(s);
            var l = e.apply(this, n);
            return r.cache = a.set(s, l) || a, l
        };
        return r.cache = new(Lp.Cache || QO), r
    }
    Lp.Cache = QO;
    var BX = Lp,
        GX = BX,
        jX = 500;

    function WX(e) {
        var t = GX(e, function(n) {
                return r.size === jX && r.clear(), n
            }),
            r = t.cache;
        return t
    }
    var VX = WX,
        KX = VX,
        HX = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        qX = /\\(\\)?/g,
        YX = KX(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(HX, function(r, n, s, a) {
                t.push(s ? a.replace(qX, "$1") : n || r)
            }), t
        }),
        zX = YX;

    function XX(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n;) s[r] = t(e[r], r, e);
        return s
    }
    var ZO = XX,
        cE = wc,
        JX = ZO,
        QX = yi,
        ZX = Vc,
        eJ = 1 / 0,
        uE = cE ? cE.prototype : void 0,
        fE = uE ? uE.toString : void 0;

    function eS(e) {
        if (typeof e == "string") return e;
        if (QX(e)) return JX(e, eS) + "";
        if (ZX(e)) return fE ? fE.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -eJ ? "-0" : t
    }
    var tJ = eS,
        rJ = tJ;

    function nJ(e) {
        return e == null ? "" : rJ(e)
    }
    var iJ = nJ,
        sJ = yi,
        aJ = UX,
        oJ = zX,
        lJ = iJ;

    function cJ(e, t) {
        return sJ(e) ? e : aJ(e, t) ? [e] : oJ(lJ(e))
    }
    var tS = cJ,
        uJ = Vc,
        fJ = 1 / 0;

    function dJ(e) {
        if (typeof e == "string" || uJ(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -fJ ? "-0" : t
    }
    var rS = dJ,
        hJ = Hh,
        pJ = tS,
        gJ = qh,
        dE = gn,
        mJ = rS;

    function vJ(e, t, r, n) {
        if (!dE(e)) return e;
        t = pJ(t, e);
        for (var s = -1, a = t.length, l = a - 1, c = e; c != null && ++s < a;) {
            var f = mJ(t[s]),
                d = r;
            if (f === "__proto__" || f === "constructor" || f === "prototype") return e;
            if (s != l) {
                var p = c[f];
                d = n ? n(p, f, c) : void 0, d === void 0 && (d = dE(p) ? p : gJ(t[s + 1]) ? [] : {})
            }
            hJ(c, f, d), c = c[f]
        }
        return e
    }
    var yJ = vJ,
        _J = yJ;

    function EJ(e, t, r) {
        return e == null ? e : _J(e, t, r)
    }
    var bJ = EJ;
    class TJ {
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
            ge(this, "sync", NX(() => {
                !this.wsClient || !this.keyMap && !this.providerMap || this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues)
            }, 50))
        }
        setWSClient(t) {
            this.wsClient = t, this.setupWatcher()
        }
        setupWatcher() {
            this.wsClient.entities = jn(this.wsClient.entities), es(this.wsClient.entities, (t, r) => {
                this.sync()
            })
        }
        valueForEntity(t) {
            return t instanceof Sr.ArtifactEntity || t instanceof Sr.DoodleEntity ? t : t instanceof Sr.ObjectEntity ? YO(t.val) : t instanceof Sr.TextEntity ? t.text : t instanceof Sr.NumberEntity ? t.val : null
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
                    bJ(this.newValues, n, c)
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
    const Jr = new TJ,
        AJ = {
            install: (e, t) => {
                e.config.globalProperties.$setupEcast = r => {
                    Jr.setWSClient(r.wsClient), r.wsClient.on("artifact", n => ro.add(n)), r.wsClient.on("connection", n => {
                        n.status === "connected" && Jr.setupWatcher()
                    }), Jr.sync(), e.config.globalProperties.$ecast = Jr.wsClient, e.config.globalProperties.$ecastValues = Jr.mappedValues, e.config.globalProperties.$ecastRoom = r.room, e.config.globalProperties.$ecastWelcome = r.welcome, e.config.globalProperties.$syncEcast = Jr.sync, e.config.globalProperties.$pauseEcastUpdates = Jr.pause, e.config.globalProperties.$resumeEcastUpdates = Jr.resume, e.mixin({
                        beforeCreate() {
                            this.$options.ecastKeys && Jr.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && Jr.addProviders(this.$options.ecastProviders)
                        },
                        beforeDestroy() {
                            this.$options.ecastKeys && Jr.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && Jr.purgeProviders(this.$options.ecastProviders)
                        }
                    })
                }, t != null && t.wsClient && e.config.globalProperties.$setupEcast(t)
            }
        },
        yo = {
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

    function OJ() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Np() {
        return !OJ() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function SJ(e, t) {
        return e.require(t)
    }
    var wJ = {};

    function zt() {
        return Np() ? global : typeof window < "u" ? window : typeof self < "u" ? self : wJ
    }

    function Pp(e, t, r) {
        var n = r || zt(),
            s = n.__SENTRY__ = n.__SENTRY__ || {},
            a = s[e] || (s[e] = t());
        return a
    }
    var nS = Object.prototype.toString;

    function iS(e) {
        switch (nS.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ai(e, Error)
        }
    }

    function ha(e, t) {
        return nS.call(e) === `[object ${t}]`
    }

    function sS(e) {
        return ha(e, "ErrorEvent")
    }

    function hE(e) {
        return ha(e, "DOMError")
    }

    function CJ(e) {
        return ha(e, "DOMException")
    }

    function ea(e) {
        return ha(e, "String")
    }

    function IJ(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function Kc(e) {
        return ha(e, "Object")
    }

    function kp(e) {
        return typeof Event < "u" && Ai(e, Event)
    }

    function $J(e) {
        return typeof Element < "u" && Ai(e, Element)
    }

    function RJ(e) {
        return ha(e, "RegExp")
    }

    function aS(e) {
        return Boolean(e && e.then && typeof e.then == "function")
    }

    function LJ(e) {
        return Kc(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function NJ(e) {
        return typeof e == "number" && e !== e
    }

    function Ai(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function Zd(e, t) {
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
            for (; c && f++ < r && (p = PJ(c, t), !(p === "html" || f > 1 && d + s.length * l + p.length >= n));) s.push(p), d += p.length, c = c.parentNode;
            return s.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function PJ(e, t) {
        var r = e,
            n = [];
        let s, a, l, c, f;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var d = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (d && d.length) d.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), s = r.className, s && ea(s))
            for (a = s.split(/\s+/), f = 0; f < a.length; f++) n.push(`.${a[f]}`);
        var p = ["type", "name", "title", "alt"];
        for (f = 0; f < p.length; f++) l = p[f], c = r.getAttribute(l), c && n.push(`[${l}="${c}"]`);
        return n.join("")
    }

    function kJ() {
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
    var DJ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function xJ(e) {
        return e === "http" || e === "https"
    }

    function MJ(e, t = !1) {
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

    function UJ(e) {
        var t = DJ.exec(e);
        if (!t) throw new Ma(`Invalid Sentry Dsn: ${e}`);
        const [r, n, s = "", a, l = "", c] = t.slice(1);
        let f = "",
            d = c;
        var p = d.split("/");
        if (p.length > 1 && (f = p.slice(0, -1).join("/"), d = p.pop()), d) {
            var y = d.match(/^\d+/);
            y && (d = y[0])
        }
        return oS({
            host: a,
            pass: s,
            path: f,
            projectId: d,
            port: l,
            protocol: r,
            publicKey: n
        })
    }

    function oS(e) {
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

    function FJ(e) {
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
        if (!xJ(n)) throw new Ma(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new Ma(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function BJ(e) {
        var t = typeof e == "string" ? UJ(e) : oS(e);
        return FJ(t), t
    }
    var GJ = zt(),
        jJ = "Sentry Logger ",
        nc = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function lS(e) {
        var t = zt();
        if (!("console" in t)) return e();
        var r = t.console,
            n = {};
        nc.forEach(s => {
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

    function pE() {
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
                e && lS(() => {
                    GJ.console[r](`${jJ}[${r}]:`, ...n)
                })
            }
        }) : nc.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let Wt;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Wt = Pp("logger", pE) : Wt = pE();

    function gE(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.substr(0,t)}...`
    }

    function mE(e, t) {
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

    function Dp(e, t) {
        return ea(e) ? RJ(t) ? t.test(e) : typeof t == "string" ? e.indexOf(t) !== -1 : !1 : !1
    }

    function ur(e, t, r) {
        if (t in e) {
            var n = e[t],
                s = r(n);
            if (typeof s == "function") try {
                uS(s, n)
            } catch {}
            e[t] = s
        }
    }

    function cS(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function uS(e, t) {
        var r = t.prototype || {};
        e.prototype = t.prototype = r, cS(e, "__sentry_original__", t)
    }

    function xp(e) {
        return e.__sentry_original__
    }

    function fS(e) {
        if (iS(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...yE(e)
        };
        if (kp(e)) {
            var t = {
                type: e.type,
                target: vE(e.target),
                currentTarget: vE(e.currentTarget),
                ...yE(e)
            };
            return typeof CustomEvent < "u" && Ai(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function vE(e) {
        try {
            return $J(e) ? Zd(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function yE(e) {
        if (typeof e == "object" && e !== null) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function WJ(e, t = 40) {
        var r = Object.keys(fS(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return gE(r[0], t);
        for (let s = r.length; s > 0; s--) {
            var n = r.slice(0, s).join(", ");
            if (!(n.length > t)) return s === r.length ? n : gE(n, t)
        }
        return ""
    }

    function VJ(e) {
        var t = new Map;
        return eh(e, t)
    }

    function eh(e, t) {
        if (Kc(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = {};
            t.set(e, n);
            for (var s of Object.keys(e)) typeof e[s] < "u" && (n[s] = eh(e[s], t));
            return n
        }
        if (Array.isArray(e)) {
            var r = t.get(e);
            if (r !== void 0) return r;
            var n = [];
            return t.set(e, n), e.forEach(c => {
                n.push(eh(c, t))
            }), n
        }
        return e
    }
    var ed = "<anonymous>";

    function gi(e) {
        try {
            return !e || typeof e != "function" ? ed : e.name || ed
        } catch {
            return ed
        }
    }

    function KJ() {
        if (!("fetch" in zt())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function _E(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function HJ() {
        if (!KJ()) return !1;
        var e = zt();
        if (_E(e.fetch)) return !0;
        let t = !1;
        var r = e.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = _E(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (s) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", s)
        }
        return t
    }

    function qJ() {
        var e = zt(),
            t = e.chrome,
            r = t && t.app && t.app.runtime,
            n = "history" in e && !!e.history.pushState && !!e.history.replaceState;
        return !r && n
    }
    var Ct = zt(),
        Va = {},
        EE = {};

    function YJ(e) {
        if (!EE[e]) switch (EE[e] = !0, e) {
            case "console":
                zJ();
                break;
            case "dom":
                iQ();
                break;
            case "xhr":
                ZJ();
                break;
            case "fetch":
                XJ();
                break;
            case "history":
                eQ();
                break;
            case "error":
                sQ();
                break;
            case "unhandledrejection":
                aQ();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Xi(e, t) {
        Va[e] = Va[e] || [], Va[e].push(t), YJ(e)
    }

    function dn(e, t) {
        if (!(!e || !Va[e]))
            for (var r of Va[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${gi(r)}
Error:`, n)
            }
    }

    function zJ() {
        "console" in Ct && nc.forEach(function(e) {
            e in Ct.console && ur(Ct.console, e, function(t) {
                return function(...r) {
                    dn("console", {
                        args: r,
                        level: e
                    }), t && t.apply(Ct.console, r)
                }
            })
        })
    }

    function XJ() {
        !HJ() || ur(Ct, "fetch", function(e) {
            return function(...t) {
                var r = {
                    args: t,
                    fetchData: {
                        method: JJ(t),
                        url: QJ(t)
                    },
                    startTimestamp: Date.now()
                };
                return dn("fetch", {
                    ...r
                }), e.apply(Ct, t).then(n => (dn("fetch", {
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

    function JJ(e = []) {
        return "Request" in Ct && Ai(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function QJ(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in Ct && Ai(e[0], Request) ? e[0].url : String(e[0])
    }

    function ZJ() {
        if ("XMLHttpRequest" in Ct) {
            var e = XMLHttpRequest.prototype;
            ur(e, "open", function(t) {
                return function(...r) {
                    var n = this,
                        s = r[1],
                        a = n.__sentry_xhr__ = {
                            method: ea(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    ea(s) && a.method === "POST" && s.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
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
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? ur(n, "onreadystatechange", function(c) {
                        return function(...f) {
                            return l(), c.apply(n, f)
                        }
                    }) : n.addEventListener("readystatechange", l), t.apply(n, r)
                }
            }), ur(e, "send", function(t) {
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
    let Ol;

    function eQ() {
        if (!qJ()) return;
        var e = Ct.onpopstate;
        Ct.onpopstate = function(...r) {
            var n = Ct.location.href,
                s = Ol;
            if (Ol = n, dn("history", {
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
                    var a = Ol,
                        l = String(s);
                    Ol = l, dn("history", {
                        from: a,
                        to: l
                    })
                }
                return r.apply(this, n)
            }
        }
        ur(Ct.history, "pushState", t), ur(Ct.history, "replaceState", t)
    }
    var tQ = 1e3;
    let Sl, wl;

    function rQ(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function nQ(e) {
        if (e.type !== "keypress") return !1;
        try {
            var t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function bE(e, t = !1) {
        return r => {
            if (!(!r || wl === r) && !nQ(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Sl === void 0 ? (e({
                    event: r,
                    name: n,
                    global: t
                }), wl = r) : rQ(wl, r) && (e({
                    event: r,
                    name: n,
                    global: t
                }), wl = r), clearTimeout(Sl), Sl = Ct.setTimeout(() => {
                    Sl = void 0
                }, tQ)
            }
        }
    }

    function iQ() {
        if ("document" in Ct) {
            var e = dn.bind(null, "dom"),
                t = bE(e, !0);
            Ct.document.addEventListener("click", t, !1), Ct.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
                var n = Ct[r] && Ct[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (ur(n, "addEventListener", function(s) {
                    return function(a, l, c) {
                        if (a === "click" || a == "keypress") try {
                            var f = this,
                                d = f.__sentry_instrumentation_handlers__ = f.__sentry_instrumentation_handlers__ || {},
                                p = d[a] = d[a] || {
                                    refCount: 0
                                };
                            if (!p.handler) {
                                var y = bE(e);
                                p.handler = y, s.call(this, a, y, c)
                            }
                            p.refCount += 1
                        } catch {}
                        return s.call(this, a, l, c)
                    }
                }), ur(n, "removeEventListener", function(s) {
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
    let td = null;

    function sQ() {
        td = Ct.onerror, Ct.onerror = function(e, t, r, n, s) {
            return dn("error", {
                column: n,
                error: s,
                line: r,
                msg: e,
                url: t
            }), td ? td.apply(this, arguments) : !1
        }
    }
    let rd = null;

    function aQ() {
        rd = Ct.onunhandledrejection, Ct.onunhandledrejection = function(e) {
            return dn("unhandledrejection", e), rd ? rd.apply(this, arguments) : !0
        }
    }

    function oQ() {
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

    function Ka() {
        var e = zt(),
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        var r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function dS(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function Ps(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        var n = dS(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function th(e, t, r) {
        var n = e.exception = e.exception || {},
            s = n.values = n.values || [],
            a = s[0] = s[0] || {};
        a.value || (a.value = t || ""), a.type || (a.type = r || "Error")
    }

    function ic(e, t) {
        var r = dS(e);
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

    function lQ(e, t = 1 / 0, r = 1 / 0) {
        try {
            return rh("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function hS(e, t = 3, r = 100 * 1024) {
        var n = lQ(e, t);
        return fQ(n) > r ? hS(e, t - 1, r) : n
    }

    function rh(e, t, r = 1 / 0, n = 1 / 0, s = oQ()) {
        const [a, l] = s;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !NJ(t)) return t;
        var c = cQ(e, t);
        if (!c.startsWith("[object ")) return c;
        if (t.__sentry_skip_normalization__) return t;
        if (r === 0) return c.replace("object ", "");
        if (a(t)) return "[Circular ~]";
        var f = t;
        if (f && typeof f.toJSON == "function") try {
            var d = f.toJSON();
            return rh("", d, r - 1, n, s)
        } catch {}
        var p = Array.isArray(t) ? [] : {};
        let y = 0;
        var b = fS(t);
        for (var w in b)
            if (!!Object.prototype.hasOwnProperty.call(b, w)) {
                if (y >= n) {
                    p[w] = "[MaxProperties ~]";
                    break
                }
                var P = b[w];
                p[w] = rh(w, P, r - 1, n, s), y += 1
            } return l(t), p
    }

    function cQ(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : LJ(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${gi(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${Object.getPrototypeOf(t).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function uQ(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function fQ(e) {
        return uQ(JSON.stringify(e))
    }
    var Fn;
    (function(e) {
        var t = 0;
        e[e.PENDING = t] = "PENDING";
        var r = 1;
        e[e.RESOLVED = r] = "RESOLVED";
        var n = 2;
        e[e.REJECTED = n] = "REJECTED"
    })(Fn || (Fn = {}));
    class An {
        __init() {
            this._state = Fn.PENDING
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
                this._setResult(Fn.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(Fn.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, r) => {
                if (this._state === Fn.PENDING) {
                    if (aS(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== Fn.PENDING) {
                    var t = this._handlers.slice();
                    this._handlers = [], t.forEach(r => {
                        r[0] || (this._state === Fn.RESOLVED && r[1](this._value), this._state === Fn.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function nd(e) {
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
    var dQ = ["fatal", "error", "warning", "log", "info", "debug"];

    function hQ(e) {
        return e === "warn" ? "warning" : dQ.includes(e) ? e : "log"
    }
    var nh = {
        nowSeconds: () => Date.now() / 1e3
    };

    function pQ() {
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

    function gQ() {
        try {
            var e = SJ(KS, "perf_hooks");
            return e.performance
        } catch {
            return
        }
    }
    var id = Np() ? gQ() : pQ(),
        TE = id === void 0 ? nh : {
            nowSeconds: () => (id.timeOrigin + id.now()) / 1e3
        },
        pS = nh.nowSeconds.bind(nh),
        gS = TE.nowSeconds.bind(TE);
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

    function mQ(e) {
        var t = gS(),
            r = {
                sid: Ka(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => yQ(r)
            };
        return e && Hc(r, e), r
    }

    function Hc(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || gS(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Ka()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            var r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function vQ(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Hc(e, r)
    }

    function yQ(e) {
        return VJ({
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
    var AE = 100;
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
            return this._user = t || {}, this._session && Hc(this._session, {
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
            var n = typeof r == "number" ? Math.min(r, AE) : AE;
            if (n <= 0) return this;
            var s = {
                timestamp: pS(),
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
            }, this._notifyEventProcessors([...mS(), ...this._eventProcessors], t, r)
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && c.id && f === null && Wt.log(`Event processor "${c.id}" dropped event`), aS(f) ? f.then(d => this._notifyEventProcessors(t, d, n, s + 1).then(a)).then(null, l) : this._notifyEventProcessors(t, f, n, s + 1).then(a).then(null, l)
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

    function mS() {
        return Pp("globalEventProcessors", () => [])
    }

    function vS(e) {
        mS().push(e)
    }
    var Mp = 4,
        _Q = 100;
    class _o {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new ss, n = Mp) {
            this._version = n, _o.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
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
            var s = this._lastEventId = n && n.event_id ? n.event_id : Ka(),
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
            var n = r && r.event_id ? r.event_id : Ka();
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
                maxBreadcrumbs: l = _Q
            } = s.getOptions && s.getOptions() || {};
            if (!(l <= 0)) {
                var c = pS(),
                    f = {
                        timestamp: c,
                        ...t
                    },
                    d = a ? lS(() => a(f, r)) : f;
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
            n && vQ(n), this._sendSessionUpdate(), r && r.setSession()
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
            var f = mQ({
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
                d && d.status === "ok" && Hc(d, {
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
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function qc() {
        var e = zt();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function OE(e) {
        var t = qc(),
            r = li(t);
        return Up(t, e), r
    }

    function Fr() {
        var e = qc();
        return (!yS(e) || li(e).isOlderThan(Mp)) && Up(e, new _o), Np() ? EQ(e) : li(e)
    }

    function EQ(e) {
        try {
            var t = qc().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return li(e);
            if (!yS(r) || li(r).isOlderThan(Mp)) {
                var n = li(e).getStackTop();
                Up(r, new _o(n.client, ss.clone(n.scope)))
            }
            return li(r)
        } catch {
            return li(e)
        }
    }

    function yS(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function li(e) {
        return Pp("hub", () => new _o, e)
    }

    function Up(e, t) {
        if (!e) return !1;
        var r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function bQ(e, t) {
        return Fr().captureException(e, {
            captureContext: t
        })
    }

    function TQ(e) {
        Fr().withScope(e)
    }

    function AQ(e) {
        var t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function OQ(e, t) {
        var r = BJ(e),
            n = `${AQ(r)}embed/error-page/`;
        let s = `dsn=${MJ(r)}`;
        for (var a in t)
            if (a !== "dsn")
                if (a === "user") {
                    var l = t.user;
                    if (!l) continue;
                    l.name && (s += `&name=${encodeURIComponent(l.name)}`), l.email && (s += `&email=${encodeURIComponent(l.email)}`)
                } else s += `&${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`;
        return `${n}?${s}`
    }
    let SE;
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
            SE = Function.prototype.toString, Function.prototype.toString = function(...t) {
                var r = xp(this) || this;
                return SE.apply(r, t)
            }
        }
    }
    io.__initStatic();
    var SQ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            d = wQ(l._options, f);
                        return CQ(s, d) ? null : s
                    }
                }
                return s
            };
            n.id = this.name, t(n)
        }
    }
    Vs.__initStatic();

    function wQ(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...SQ],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function CQ(e, t) {
        return t.ignoreInternal && NQ(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ps(e)}`), !0) : IQ(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ps(e)}`), !0) : $Q(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ps(e)}.
Url: ${sc(e)}`), !0) : RQ(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ps(e)}.
Url: ${sc(e)}`), !0)
    }

    function IQ(e, t) {
        return !t || !t.length ? !1 : LQ(e).some(r => t.some(n => Dp(r, n)))
    }

    function $Q(e, t) {
        if (!t || !t.length) return !1;
        var r = sc(e);
        return r ? t.some(n => Dp(r, n)) : !1
    }

    function RQ(e, t) {
        if (!t || !t.length) return !0;
        var r = sc(e);
        return r ? t.some(n => Dp(r, n)) : !0
    }

    function LQ(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract message for event ${Ps(e)}`), []
        }
        return []
    }

    function NQ(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function PQ(e = []) {
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
            return t ? PQ(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error(`Cannot extract url for event ${Ps(e)}`), null
        }
    }

    function _S(e, t) {
        var r = Fp(e, t),
            n = {
                type: t && t.name,
                value: MQ(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function kQ(e, t, r, n) {
        var s = {
            exception: {
                values: [{
                    type: kp(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${WJ(t)}`
                }]
            },
            extra: {
                __serialized__: hS(t)
            }
        };
        if (r) {
            var a = Fp(e, r);
            a.length && (s.exception.values[0].stacktrace = {
                frames: a
            })
        }
        return s
    }

    function sd(e, t) {
        return {
            exception: {
                values: [_S(e, t)]
            }
        }
    }

    function Fp(e, t) {
        var r = t.stacktrace || t.stack || "",
            n = xQ(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    var DQ = /Minified React error #\d+;/i;

    function xQ(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (DQ.test(e.message)) return 1
        }
        return 0
    }

    function MQ(e) {
        var t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function ES(e, t, r, n, s) {
        let a;
        if (sS(t) && t.error) {
            var l = t;
            return sd(e, l.error)
        }
        if (hE(t) || CJ(t)) {
            var c = t;
            if ("stack" in t) a = sd(e, t);
            else {
                var f = c.name || (hE(c) ? "DOMError" : "DOMException"),
                    d = c.message ? `${f}: ${c.message}` : f;
                a = wE(e, d, r, n), th(a, d)
            }
            return "code" in c && (a.tags = {
                ...a.tags,
                "DOMException.code": `${c.code}`
            }), a
        }
        if (iS(t)) return sd(e, t);
        if (Kc(t) || kp(t)) {
            var p = t;
            return a = kQ(e, p, r, s), ic(a, {
                synthetic: !0
            }), a
        }
        return a = wE(e, t, r, n), th(a, `${t}`, void 0), ic(a, {
            synthetic: !0
        }), a
    }

    function wE(e, t, r, n) {
        var s = {
            message: t
        };
        if (n && r) {
            var a = Fp(e, r);
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
    var UQ = "Breadcrumbs";
    class so {
        static __initStatic() {
            this.id = UQ
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
            this.options.console && Xi("console", BQ), this.options.dom && Xi("dom", FQ(this.options.dom)), this.options.xhr && Xi("xhr", GQ), this.options.fetch && Xi("fetch", jQ), this.options.history && Xi("history", WQ)
        }
    }
    so.__initStatic();

    function FQ(e) {
        function t(r) {
            let n, s = typeof e == "object" ? e.serializeAttribute : void 0;
            typeof s == "string" && (s = [s]);
            try {
                n = r.event.target ? Zd(r.event.target, s) : Zd(r.event, s)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && Fr().addBreadcrumb({
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

    function BQ(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: hQ(e.level),
            message: mE(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${mE(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        Fr().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function GQ(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: r,
                status_code: n,
                body: s
            } = e.xhr.__sentry_xhr__ || {};
            Fr().addBreadcrumb({
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

    function jQ(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? Fr().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Fr().addBreadcrumb({
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

    function WQ(e) {
        var t = zt();
        let r = e.from,
            n = e.to;
        var s = nd(t.location.href);
        let a = nd(r);
        var l = nd(n);
        a.path || (a = s), s.protocol === l.protocol && s.host === l.host && (n = l.relative), s.protocol === a.protocol && s.host === a.host && (r = a.relative), Fr().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    let ih = 0;

    function bS() {
        return ih > 0
    }

    function VQ() {
        ih += 1, setTimeout(() => {
            ih -= 1
        })
    }

    function ta(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            var n = e.__sentry_wrapped__;
            if (n) return n;
            if (xp(e)) return e
        } catch {
            return e
        }
        var s = function() {
            var c = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var f = c.map(d => ta(d, t));
                return e.apply(this, f)
            } catch (d) {
                throw VQ(), TQ(p => {
                    p.addEventProcessor(y => (t.mechanism && (th(y, void 0, void 0), ic(y, t.mechanism)), y.extra = {
                        ...y.extra,
                        arguments: c
                    }, y)), bQ(d)
                }), d
            }
        };
        try {
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (s[a] = e[a])
        } catch {}
        uS(s, e), cS(e, "__sentry_wrapped__", s);
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
                onerror: KQ,
                onunhandledrejection: HQ
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
                n && t[r] && (zQ(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    di.__initStatic();

    function KQ() {
        Xi("error", e => {
            const [t, r, n] = OS();
            if (!t.getIntegration(di)) return;
            const {
                msg: s,
                url: a,
                line: l,
                column: c,
                error: f
            } = e;
            if (!(bS() || f && f.__sentry_own_request__)) {
                var d = f === void 0 && ea(s) ? YQ(s, a, l, c) : TS(ES(r, f || s, void 0, n, !1), a, l, c);
                d.level = "error", AS(t, f, d, "onerror")
            }
        })
    }

    function HQ() {
        Xi("unhandledrejection", e => {
            const [t, r, n] = OS();
            if (!t.getIntegration(di)) return;
            let s = e;
            try {
                "reason" in e ? s = e.reason : "detail" in e && "reason" in e.detail && (s = e.detail.reason)
            } catch {}
            if (bS() || s && s.__sentry_own_request__) return !0;
            var a = IJ(s) ? qQ(s) : ES(r, s, void 0, n, !0);
            a.level = "error", AS(t, s, a, "onunhandledrejection")
        })
    }

    function qQ(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function YQ(e, t, r, n) {
        var s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let a = sS(e) ? e.message : e,
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
        return TS(f, t, r, n)
    }

    function TS(e, t, r, n) {
        var s = e.exception = e.exception || {},
            a = s.values = s.values || [],
            l = a[0] = a[0] || {},
            c = l.stacktrace = l.stacktrace || {},
            f = c.frames = c.frames || [],
            d = isNaN(parseInt(n, 10)) ? void 0 : n,
            p = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = ea(t) && t.length > 0 ? t : kJ();
        return f.length === 0 && f.push({
            colno: d,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: p
        }), e
    }

    function zQ(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.log(`Global Handler attached: ${e}`)
    }

    function AS(e, t, r, n) {
        ic(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function OS() {
        var e = Fr(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    var XQ = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            this._options.setTimeout && ur(t, "setTimeout", CE), this._options.setInterval && ur(t, "setInterval", CE), this._options.requestAnimationFrame && ur(t, "requestAnimationFrame", JQ), this._options.XMLHttpRequest && "XMLHttpRequest" in t && ur(XMLHttpRequest.prototype, "send", QQ);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : XQ;
                n.forEach(ZQ)
            }
        }
    }
    ao.__initStatic();

    function CE(e) {
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

    function JQ(e) {
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

    function QQ(e) {
        return function(...t) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(s => {
                s in r && typeof r[s] == "function" && ur(r, s, function(a) {
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
                        c = xp(a);
                    return c && (l.mechanism.data.handler = gi(c)), ta(a, l)
                })
            }), e.apply(this, t)
        }
    }

    function ZQ(e) {
        var t = zt(),
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (ur(r, "addEventListener", function(n) {
            return function(s, a, l) {
                try {
                    typeof a.handleEvent == "function" && (a.handleEvent = ta(a.handleEvent, {
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
                return n.apply(this, [s, ta(a, {
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
        }), ur(r, "removeEventListener", function(n) {
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
    var eZ = "cause",
        tZ = 5;
    class Ks {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = Ks.id
        }
        constructor(t = {}) {
            Ks.prototype.__init.call(this), this._key = t.key || eZ, this._limit = t.limit || tZ
        }
        setupOnce() {
            var t = Fr().getClient();
            !t || vS((r, n) => {
                var s = Fr().getIntegration(Ks);
                return s ? rZ(t.getOptions().stackParser, s._key, s._limit, r, n) : r
            })
        }
    }
    Ks.__initStatic();

    function rZ(e, t, r, n, s) {
        if (!n.exception || !n.exception.values || !s || !Ai(s.originalException, Error)) return n;
        var a = SS(e, r, s.originalException, t);
        return n.exception.values = [...a, ...n.exception.values], n
    }

    function SS(e, t, r, n, s = []) {
        if (!Ai(r[n], Error) || s.length + 1 >= t) return s;
        var a = _S(e, r[n]);
        return SS(e, t, r[n], n, [a, ...s])
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
            vS(t => {
                if (Fr().getIntegration(Hs)) {
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
                        if (nZ(s, a._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function nZ(e, t) {
        return t ? !!(iZ(e, t) || sZ(e, t)) : !1
    }

    function iZ(e, t) {
        var r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !CS(e, t) || !wS(e, t))
    }

    function sZ(e, t) {
        var r = IE(t),
            n = IE(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !CS(e, t) || !wS(e, t))
    }

    function wS(e, t) {
        let r = $E(e),
            n = $E(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let l = 0; l < n.length; l++) {
            var s = n[l],
                a = r[l];
            if (s.filename !== a.filename || s.lineno !== a.lineno || s.colno !== a.colno || s.function !== a.function) return !1
        }
        return !0
    }

    function CS(e, t) {
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

    function IE(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function $E(e) {
        var t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    new Vs, new io, new ao, new so, new di, new Ks, new qs, new Hs;

    function aZ(e = {}, t = Fr()) {
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
        l.async = !0, l.src = OQ(a, e), e.onLoad && (l.onload = e.onLoad);
        var c = r.document.head || r.document.body;
        c ? c.appendChild(l) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && Wt.error("Not injecting report dialog. No injection point found in HTML")
    }
    const oZ = rt({
            setup() {
                return {
                    fatalError: Zi(yo.fatal.error)
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
                    aZ({
                        id: (r = (t = (e = this.fatalError) == null ? void 0 : e.event) == null ? void 0 : t.event_id) != null ? r : "Unknown"
                    })
                }
            }
        }),
        Eo = e => (gc("data-v-a7272d53"), e = e(), mc(), e),
        lZ = {
            class: "jbg fatal"
        },
        cZ = {
            class: "constrain"
        },
        uZ = Eo(() => X("a", {
            class: "logo",
            href: "/",
            "aria-label": "Jackbox Games Logo"
        }, null, -1)),
        fZ = {
            class: "content"
        },
        dZ = Eo(() => X("h1", null, "You have encountered an error", -1)),
        hZ = Eo(() => X("p", null, "Something went wrong! But don't worry, you can try a few things to get going.", -1)),
        pZ = Eo(() => X("ul", null, [X("li", null, "Refresh the page"), X("li", null, "Turn off adblockers or other browser extensions."), X("li", null, "Check your connection to the Internet."), X("li", null, "Make sure you're using an up-to-date browser."), X("li", null, "If that doesn't work, let us know.")], -1)),
        gZ = Eo(() => X("hr", null, null, -1)),
        mZ = {
            class: "error"
        };

    function vZ(e, t, r, n, s, a) {
        return F(), W("div", lZ, [X("div", cZ, [uZ, X("div", fZ, [dZ, hZ, pZ, X("button", {
            onClick: t[0] || (t[0] = (...l) => e.onFeedbackClick && e.onFeedbackClick(...l))
        }, "Tell us what happened"), gZ, X("pre", mZ, Me(e.message), 1)])])])
    }
    const yZ = st(oZ, [
            ["render", vZ],
            ["__scopeId", "data-v-a7272d53"]
        ]),
        Cl = jn({
            hasCrashed: !1
        }),
        _Z = {
            install: e => {
                if (e.config.globalProperties.$handleEcastError) return;
                e.provide(yo.fatal.error, Dr(() => Cl));
                const t = (r, n) => {
                    var s, a;
                    if (r instanceof ns.EcastEntityNotFound || r instanceof ns.EcastFilterError || r instanceof ns.EcastRateLimitExceeded || r instanceof Error && ((s = r.message) == null ? void 0 : s.includes("Socket not ready to send")) || r instanceof Error && ((a = r.message) == null ? void 0 : a.includes("No connection available"))) return console.warn(r);
                    throw n ? console.error(n, r) : console.error(r), r
                };
                window.tv.onError = async (r, n) => {
                    if (r.level === "error" && (Cl.hasCrashed = !0, Cl.event = r, Cl.hint = n), e.config.globalProperties.$debugRecorder) return await e.config.globalProperties.$debugRecorder.sendToEcast()
                }, e.component("Fatal", yZ), e.config.globalProperties.$handleEcastError = t
            }
        };
    var EZ = tS,
        bZ = rS;

    function TZ(e, t) {
        t = EZ(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[bZ(t[r++])];
        return r && r == n ? e : void 0
    }
    var AZ = TZ,
        OZ = AZ;

    function SZ(e, t, r) {
        var n = e == null ? void 0 : OZ(e, t);
        return n === void 0 ? r : n
    }
    var wZ = SZ,
        CZ = Math.floor,
        IZ = Math.random;

    function $Z(e, t) {
        return e + CZ(IZ() * (t - e + 1))
    }
    var RZ = $Z,
        LZ = RZ;

    function NZ(e) {
        var t = e.length;
        return t ? e[LZ(0, t - 1)] : void 0
    }
    var IS = NZ,
        PZ = ZO;

    function kZ(e, t) {
        return PZ(t, function(r) {
            return e[r]
        })
    }
    var DZ = kZ,
        xZ = DZ,
        MZ = Wc;

    function UZ(e) {
        return e == null ? [] : xZ(e, MZ(e))
    }
    var FZ = UZ,
        BZ = IS,
        GZ = FZ;

    function jZ(e) {
        return BZ(GZ(e))
    }
    var WZ = jZ,
        VZ = IS,
        KZ = WZ,
        HZ = yi;

    function qZ(e) {
        var t = HZ(e) ? VZ : KZ;
        return t(e)
    }
    var YZ = qZ;

    function RE(e, t) {
        const r = e.global.locale,
            n = e.global.messages[r],
            s = wZ(n, t);
        return Array.isArray(s) || console.warn(`[i18nPlugin] Translation with key ${t} is not an array`), YZ(s)
    }
    const zZ = {
            install: (e, t) => {
                e.directive("ts", (r, n) => {
                    const s = RE(t.i18n, n.value);
                    r.textContent = s || ""
                }), e.config.globalProperties.$ts = function(n) {
                    return RE(t.i18n, n) || ""
                }, e.config.globalProperties.$t = t.i18n.global.t, e.config.globalProperties.$tc = t.i18n.global.tc, e.config.globalProperties.$te = t.i18n.global.te, e.config.globalProperties.$tm = t.i18n.global.tm
            }
        },
        XZ = rt({
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
        JZ = "main/tjsp/quiplash3/assets/928ef0da.png",
        QZ = "main/tjsp/quiplash3/assets/0bb76a2d.png",
        ZZ = "main/tjsp/quiplash3/assets/ed4469b3.png",
        eee = {
            key: 0,
            class: "image",
            src: JZ,
            alt: "Kicked"
        },
        tee = {
            key: 1,
            class: "image",
            src: QZ,
            alt: "Thank You"
        },
        ree = {
            key: 2,
            class: "image",
            src: ZZ,
            alt: "Error"
        },
        nee = {
            class: "text"
        },
        iee = {
            key: 3,
            class: "subtext"
        },
        see = {
            class: "actions"
        };

    function aee(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", {
            class: Ve(["error-model", e.classes])
        }, [e.image === "tear" ? (F(), W("img", eee)) : e.image === "moon" ? (F(), W("img", tee)) : (F(), W("img", ree)), Oe(X("h3", nee, null, 512), [
            [l, e.text]
        ]), e.subtext ? Oe((F(), W("h3", iee, null, 512)), [
            [l, e.subtext]
        ]) : ve("", !0), X("div", see, [Oe(X("button", {
            onClick: t[0] || (t[0] = ze(c => e.$emit("resolve"), ["prevent"]))
        }, null, 512), [
            [l, e.dismissText]
        ])])], 2)
    }
    const oee = st(XZ, [
            ["render", aee],
            ["__scopeId", "data-v-39debcb6"]
        ]),
        lee = rt({
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
        cee = {
            class: "text"
        },
        uee = {
            key: 0,
            class: "subtext"
        },
        fee = {
            class: "actions"
        },
        dee = ["onClick"];

    function hee(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", {
            class: Ve(["options-modal", e.classes])
        }, [Oe(X("h3", cee, null, 512), [
            [l, e.text]
        ]), e.subtext ? Oe((F(), W("h3", uee, null, 512)), [
            [l, e.subtext]
        ]) : ve("", !0), X("div", fee, [(F(!0), W(qe, null, hn(e.options, (c, f) => Oe((F(), W("button", {
            key: f,
            class: Ve(c.classes),
            onClick: ze(d => e.$emit("resolve", c.value), ["prevent"])
        }, null, 10, dee)), [
            [l, c.text]
        ])), 128))])], 2)
    }
    const pee = st(lee, [
            ["render", hee],
            ["__scopeId", "data-v-fdbdeb06"]
        ]),
        gee = rt({
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
                    return this.props = t, this.classes = r.classes || "jbg", e === "Error" ? this.content = oee : e === "Options" ? this.content = pee : this.content = e, new Promise(n => {
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

    function mee(e, t, r, n, s, a) {
        return F(), xr(Tc, {
            name: "modal-transition"
        }, {
            default: Ih(() => [e.props ? (F(), W("div", {
                key: 0,
                class: Ve(["modal", e.classes]),
                onKeyup: t[0] || (t[0] = Xs((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["esc"])),
                onClick: t[1] || (t[1] = ze((...l) => e.onBackgroundClick && e.onBackgroundClick(...l), ["self"]))
            }, [e.content ? (F(), xr(Nh(e.content), Mh({
                key: 0,
                class: "content"
            }, e.props, {
                onResolve: e.onResolve
            }), null, 16, ["onResolve"])) : ve("", !0)], 34)) : ve("", !0)]),
            _: 1
        })
    }
    const vee = st(gee, [
            ["render", mee],
            ["__scopeId", "data-v-dc92e8d3"]
        ]),
        yee = {
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
                e.component("Modal", vee), e.config.globalProperties.$showModal = r, e.config.globalProperties.$registerModal = n
            }
        },
        _ee = rt({
            setup() {
                return {
                    announcment: Zi(yo.textDescriptions.announcement)
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
        Eee = {
            class: "text-descriptions",
            role: "log",
            "aria-atomic": "false",
            "aria-relevant": "additions",
            "aria-live": "polite"
        };

    function bee(e, t, r, n, s, a) {
        return F(), W("div", Eee, [(F(!0), W(qe, null, hn(e.lines, l => (F(), W("p", {
            key: l.id
        }, Me(l.text), 1))), 128))])
    }
    const Tee = st(_ee, [
            ["render", bee]
        ]),
        LE = cn(""),
        Aee = {
            install: e => {
                if (e.config.globalProperties.$announce) return;
                e.provide(yo.textDescriptions.announcement, Dr(() => LE.value));
                const t = r => {
                    LE.value = r
                };
                e.component("TextDescriptions", Tee), e.config.globalProperties.$announce = t
            }
        },
        Oee = {
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
        See = {
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
    const sh = typeof window < "u",
        wee = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
        Oi = e => wee ? Symbol(e) : e,
        Cee = (e, t, r) => Iee({
            l: e,
            k: t,
            s: r
        }),
        Iee = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
        jt = e => typeof e == "number" && isFinite(e),
        $ee = e => Gp(e) === "[object Date]",
        mi = e => Gp(e) === "[object RegExp]",
        Yc = e => Be(e) && Object.keys(e).length === 0;

    function Ree(e, t) {
        typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
    }
    const rr = Object.assign;

    function NE(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    const Lee = Object.prototype.hasOwnProperty;

    function Bp(e, t) {
        return Lee.call(e, t)
    }
    const bt = Array.isArray,
        Pt = e => typeof e == "function",
        _e = e => typeof e == "string",
        Ze = e => typeof e == "boolean",
        Tt = e => e !== null && typeof e == "object",
        $S = Object.prototype.toString,
        Gp = e => $S.call(e),
        Be = e => Gp(e) === "[object Object]",
        Nee = e => e == null ? "" : bt(e) || Be(e) && e.toString === $S ? JSON.stringify(e, null, 2) : String(e);
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

    function zc(e, t, r = {}) {
        const {
            domain: n,
            messages: s,
            args: a
        } = r, l = e, c = new SyntaxError(String(l));
        return c.code = e, t && (c.location = t), c.domain = n, c
    }

    function Pee(e) {
        throw e
    }

    function kee(e, t, r) {
        return {
            line: e,
            column: t,
            offset: r
        }
    }

    function ah(e, t, r) {
        const n = {
            start: e,
            end: t
        };
        return r != null && (n.source = r), n
    }
    const Mn = " ",
        Dee = "\r",
        vr = `
`,
        xee = String.fromCharCode(8232),
        Mee = String.fromCharCode(8233);

    function Uee(e) {
        const t = e;
        let r = 0,
            n = 1,
            s = 1,
            a = 0;
        const l = oe => t[oe] === Dee && t[oe + 1] === vr,
            c = oe => t[oe] === vr,
            f = oe => t[oe] === Mee,
            d = oe => t[oe] === xee,
            p = oe => l(oe) || c(oe) || f(oe) || d(oe),
            y = () => r,
            b = () => n,
            w = () => s,
            P = () => a,
            M = oe => l(oe) || f(oe) || d(oe) ? vr : t[oe],
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
    const ii = void 0,
        PE = "'",
        Fee = "tokenizer";

    function Bee(e, t = {}) {
        const r = t.location !== !1,
            n = Uee(e),
            s = () => n.index(),
            a = () => kee(n.line(), n.column(), n.index()),
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

        function y(m, g, O, ...x) {
            const B = d();
            if (g.column += O, g.offset += O, p) {
                const Y = ah(B.startLoc, g),
                    ce = zc(m, Y, {
                        domain: Fee,
                        args: x
                    });
                p(ce)
            }
        }

        function b(m, g, O) {
            m.endLoc = a(), m.currentType = g;
            const x = {
                type: g
            };
            return r && (x.loc = ah(m.startLoc, m.endLoc)), O != null && (x.value = O), x
        }
        const w = m => b(m, 14);

        function P(m, g) {
            return m.currentChar() === g ? (m.next(), g) : (y(it.EXPECTED_TOKEN, a(), 0, g), "")
        }

        function M(m) {
            let g = "";
            for (; m.currentPeek() === Mn || m.currentPeek() === vr;) g += m.currentPeek(), m.peek();
            return g
        }

        function G(m) {
            const g = M(m);
            return m.skipToPeek(), g
        }

        function C(m) {
            if (m === ii) return !1;
            const g = m.charCodeAt(0);
            return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g === 95
        }

        function H(m) {
            if (m === ii) return !1;
            const g = m.charCodeAt(0);
            return g >= 48 && g <= 57
        }

        function z(m, g) {
            const {
                currentType: O
            } = g;
            if (O !== 2) return !1;
            M(m);
            const x = C(m.currentPeek());
            return m.resetPeek(), x
        }

        function V(m, g) {
            const {
                currentType: O
            } = g;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === "-" ? m.peek() : m.currentPeek(),
                B = H(x);
            return m.resetPeek(), B
        }

        function j(m, g) {
            const {
                currentType: O
            } = g;
            if (O !== 2) return !1;
            M(m);
            const x = m.currentPeek() === PE;
            return m.resetPeek(), x
        }

        function Q(m, g) {
            const {
                currentType: O
            } = g;
            if (O !== 8) return !1;
            M(m);
            const x = m.currentPeek() === ".";
            return m.resetPeek(), x
        }

        function oe(m, g) {
            const {
                currentType: O
            } = g;
            if (O !== 9) return !1;
            M(m);
            const x = C(m.currentPeek());
            return m.resetPeek(), x
        }

        function le(m, g) {
            const {
                currentType: O
            } = g;
            if (!(O === 8 || O === 12)) return !1;
            M(m);
            const x = m.currentPeek() === ":";
            return m.resetPeek(), x
        }

        function ue(m, g) {
            const {
                currentType: O
            } = g;
            if (O !== 10) return !1;
            const x = () => {
                    const Y = m.currentPeek();
                    return Y === "{" ? C(m.peek()) : Y === "@" || Y === "%" || Y === "|" || Y === ":" || Y === "." || Y === Mn || !Y ? !1 : Y === vr ? (m.peek(), x()) : C(Y)
                },
                B = x();
            return m.resetPeek(), B
        }

        function $e(m) {
            M(m);
            const g = m.currentPeek() === "|";
            return m.resetPeek(), g
        }

        function Ie(m) {
            const g = M(m),
                O = m.currentPeek() === "%" && m.peek() === "{";
            return m.resetPeek(), {
                isModulo: O,
                hasSpace: g.length > 0
            }
        }

        function fe(m, g = !0) {
            const O = (B = !1, Y = "", ce = !1) => {
                    const se = m.currentPeek();
                    return se === "{" ? Y === "%" ? !1 : B : se === "@" || !se ? Y === "%" ? !0 : B : se === "%" ? (m.peek(), O(B, "%", !0)) : se === "|" ? Y === "%" || ce ? !0 : !(Y === Mn || Y === vr) : se === Mn ? (m.peek(), O(!0, Mn, ce)) : se === vr ? (m.peek(), O(!0, vr, ce)) : !0
                },
                x = O();
            return g && m.resetPeek(), x
        }

        function Ce(m, g) {
            const O = m.currentChar();
            return O === ii ? ii : g(O) ? (m.next(), O) : null
        }

        function U(m) {
            return Ce(m, O => {
                const x = O.charCodeAt(0);
                return x >= 97 && x <= 122 || x >= 65 && x <= 90 || x >= 48 && x <= 57 || x === 95 || x === 36
            })
        }

        function ie(m) {
            return Ce(m, O => {
                const x = O.charCodeAt(0);
                return x >= 48 && x <= 57
            })
        }

        function de(m) {
            return Ce(m, O => {
                const x = O.charCodeAt(0);
                return x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102
            })
        }

        function be(m) {
            let g = "",
                O = "";
            for (; g = ie(m);) O += g;
            return O
        }

        function ye(m) {
            G(m);
            const g = m.currentChar();
            return g !== "%" && y(it.EXPECTED_TOKEN, a(), 0, g), m.next(), "%"
        }

        function Se(m) {
            let g = "";
            for (;;) {
                const O = m.currentChar();
                if (O === "{" || O === "}" || O === "@" || O === "|" || !O) break;
                if (O === "%")
                    if (fe(m)) g += O, m.next();
                    else break;
                else if (O === Mn || O === vr)
                    if (fe(m)) g += O, m.next();
                    else {
                        if ($e(m)) break;
                        g += O, m.next()
                    }
                else g += O, m.next()
            }
            return g
        }

        function Ue(m) {
            G(m);
            let g = "",
                O = "";
            for (; g = U(m);) O += g;
            return m.currentChar() === ii && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), O
        }

        function je(m) {
            G(m);
            let g = "";
            return m.currentChar() === "-" ? (m.next(), g += `-${be(m)}`) : g += be(m), m.currentChar() === ii && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), g
        }

        function nt(m) {
            G(m), P(m, "'");
            let g = "",
                O = "";
            const x = Y => Y !== PE && Y !== vr;
            for (; g = Ce(m, x);) g === "\\" ? O += $t(m) : O += g;
            const B = m.currentChar();
            return B === vr || B === ii ? (y(it.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), B === vr && (m.next(), P(m, "'")), O) : (P(m, "'"), O)
        }

        function $t(m) {
            const g = m.currentChar();
            switch (g) {
                case "\\":
                case "'":
                    return m.next(), `\\${g}`;
                case "u":
                    return Cr(m, g, 4);
                case "U":
                    return Cr(m, g, 6);
                default:
                    return y(it.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, g), ""
            }
        }

        function Cr(m, g, O) {
            P(m, g);
            let x = "";
            for (let B = 0; B < O; B++) {
                const Y = de(m);
                if (!Y) {
                    y(it.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${g}${x}${m.currentChar()}`);
                    break
                }
                x += Y
            }
            return `\\${g}${x}`
        }

        function ir(m) {
            G(m);
            let g = "",
                O = "";
            const x = B => B !== "{" && B !== "}" && B !== Mn && B !== vr;
            for (; g = Ce(m, x);) O += g;
            return O
        }

        function yr(m) {
            let g = "",
                O = "";
            for (; g = U(m);) O += g;
            return O
        }

        function lt(m) {
            const g = (O = !1, x) => {
                const B = m.currentChar();
                return B === "{" || B === "%" || B === "@" || B === "|" || !B || B === Mn ? x : B === vr ? (x += B, m.next(), g(O, x)) : (x += B, m.next(), g(!0, x))
            };
            return g(!1, "")
        }

        function St(m) {
            G(m);
            const g = P(m, "|");
            return G(m), g
        }

        function ct(m, g) {
            let O = null;
            switch (m.currentChar()) {
                case "{":
                    return g.braceNest >= 1 && y(it.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), m.next(), O = b(g, 2, "{"), G(m), g.braceNest++, O;
                case "}":
                    return g.braceNest > 0 && g.currentType === 2 && y(it.EMPTY_PLACEHOLDER, a(), 0), m.next(), O = b(g, 3, "}"), g.braceNest--, g.braceNest > 0 && G(m), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), O;
                case "@":
                    return g.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), O = Dt(m, g) || w(g), g.braceNest = 0, O;
                default:
                    let B = !0,
                        Y = !0,
                        ce = !0;
                    if ($e(m)) return g.braceNest > 0 && y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), O = b(g, 1, St(m)), g.braceNest = 0, g.inLinked = !1, O;
                    if (g.braceNest > 0 && (g.currentType === 5 || g.currentType === 6 || g.currentType === 7)) return y(it.UNTERMINATED_CLOSING_BRACE, a(), 0), g.braceNest = 0, Kt(m, g);
                    if (B = z(m, g)) return O = b(g, 5, Ue(m)), G(m), O;
                    if (Y = V(m, g)) return O = b(g, 6, je(m)), G(m), O;
                    if (ce = j(m, g)) return O = b(g, 7, nt(m)), G(m), O;
                    if (!B && !Y && !ce) return O = b(g, 13, ir(m)), y(it.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, O.value), G(m), O;
                    break
            }
            return O
        }

        function Dt(m, g) {
            const {
                currentType: O
            } = g;
            let x = null;
            const B = m.currentChar();
            switch ((O === 8 || O === 9 || O === 12 || O === 10) && (B === vr || B === Mn) && y(it.INVALID_LINKED_FORMAT, a(), 0), B) {
                case "@":
                    return m.next(), x = b(g, 8, "@"), g.inLinked = !0, x;
                case ".":
                    return G(m), m.next(), b(g, 9, ".");
                case ":":
                    return G(m), m.next(), b(g, 10, ":");
                default:
                    return $e(m) ? (x = b(g, 1, St(m)), g.braceNest = 0, g.inLinked = !1, x) : Q(m, g) || le(m, g) ? (G(m), Dt(m, g)) : oe(m, g) ? (G(m), b(g, 12, yr(m))) : ue(m, g) ? (G(m), B === "{" ? ct(m, g) || x : b(g, 11, lt(m))) : (O === 8 && y(it.INVALID_LINKED_FORMAT, a(), 0), g.braceNest = 0, g.inLinked = !1, Kt(m, g))
            }
        }

        function Kt(m, g) {
            let O = {
                type: 14
            };
            if (g.braceNest > 0) return ct(m, g) || w(g);
            if (g.inLinked) return Dt(m, g) || w(g);
            switch (m.currentChar()) {
                case "{":
                    return ct(m, g) || w(g);
                case "}":
                    return y(it.UNBALANCED_CLOSING_BRACE, a(), 0), m.next(), b(g, 3, "}");
                case "@":
                    return Dt(m, g) || w(g);
                default:
                    if ($e(m)) return O = b(g, 1, St(m)), g.braceNest = 0, g.inLinked = !1, O;
                    const {
                        isModulo: B, hasSpace: Y
                    } = Ie(m);
                    if (B) return Y ? b(g, 0, Se(m)) : b(g, 4, ye(m));
                    if (fe(m)) return b(g, 0, Se(m));
                    break
            }
            return O
        }

        function xt() {
            const {
                currentType: m,
                offset: g,
                startLoc: O,
                endLoc: x
            } = f;
            return f.lastType = m, f.lastOffset = g, f.lastStartLoc = O, f.lastEndLoc = x, f.offset = s(), f.startLoc = a(), n.currentChar() === ii ? b(f, 14) : Kt(n, f)
        }
        return {
            nextToken: xt,
            currentOffset: s,
            currentPosition: a,
            context: d
        }
    }
    const Gee = "parser",
        jee = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

    function Wee(e, t, r) {
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

    function Vee(e = {}) {
        const t = e.location !== !1,
            {
                onError: r
            } = e;

        function n(C, H, z, V, ...j) {
            const Q = C.currentPosition();
            if (Q.offset += V, Q.column += V, r) {
                const oe = ah(z, Q),
                    le = zc(H, oe, {
                        domain: Gee,
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
            return Q.value = H.replace(jee, Wee), C.nextToken(), a(Q, C.currentOffset(), C.currentPosition()), Q
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
            const H = Bee(C, rr({}, e)),
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

    function Kee(e, t = {}) {
        const r = {
            ast: e,
            helpers: new Set
        };
        return {
            context: () => r,
            helper: a => (r.helpers.add(a), a)
        }
    }

    function kE(e, t) {
        for (let r = 0; r < e.length; r++) jp(e[r], t)
    }

    function jp(e, t) {
        switch (e.type) {
            case 1:
                kE(e.cases, t), t.helper("plural");
                break;
            case 2:
                kE(e.items, t);
                break;
            case 6:
                jp(e.key, t), t.helper("linked"), t.helper("type");
                break;
            case 5:
                t.helper("interpolate"), t.helper("list");
                break;
            case 4:
                t.helper("interpolate"), t.helper("named");
                break
        }
    }

    function Hee(e, t = {}) {
        const r = Kee(e);
        r.helper("normalize"), e.body && jp(e.body, r);
        const n = r.context();
        e.helpers = Array.from(n.helpers)
    }

    function qee(e, t) {
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

    function Yee(e, t) {
        const {
            helper: r
        } = e;
        e.push(`${r("linked")}(`), ra(e, t.key), t.modifier ? (e.push(", "), ra(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
    }

    function zee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        e.push(`${r("normalize")}([`), e.indent(n());
        const s = t.items.length;
        for (let a = 0; a < s && (ra(e, t.items[a]), a !== s - 1); a++) e.push(", ");
        e.deindent(n()), e.push("])")
    }

    function Xee(e, t) {
        const {
            helper: r,
            needIndent: n
        } = e;
        if (t.cases.length > 1) {
            e.push(`${r("plural")}([`), e.indent(n());
            const s = t.cases.length;
            for (let a = 0; a < s && (ra(e, t.cases[a]), a !== s - 1); a++) e.push(", ");
            e.deindent(n()), e.push("])")
        }
    }

    function Jee(e, t) {
        t.body ? ra(e, t.body) : e.push("null")
    }

    function ra(e, t) {
        const {
            helper: r
        } = e;
        switch (t.type) {
            case 0:
                Jee(e, t);
                break;
            case 1:
                Xee(e, t);
                break;
            case 2:
                zee(e, t);
                break;
            case 6:
                Yee(e, t);
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
    const Qee = (e, t = {}) => {
        const r = _e(t.mode) ? t.mode : "normal",
            n = _e(t.filename) ? t.filename : "message.intl",
            s = !!t.sourceMap,
            a = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`,
            l = t.needIndent ? t.needIndent : r !== "arrow",
            c = e.helpers || [],
            f = qee(e, {
                mode: r,
                filename: n,
                sourceMap: s,
                breakLineCode: a,
                needIndent: l
            });
        f.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), c.length > 0 && (f.push(`const { ${c.map(y=>`${y}: _${y}`).join(", ")} } = ctx`), f.newline()), f.push("return "), ra(f, e), f.deindent(l), f.push("}");
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

    function Zee(e, t = {}) {
        const r = rr({}, t),
            s = Vee(r).parse(e);
        return Hee(s, r), Qee(s, r)
    }
    /*!
     * devtools-if v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const ete = {
        I18nInit: "i18n:init",
        FunctionTranslate: "function:translate"
    };
    /*!
     * core-base v9.2.2
     * (c) 2022 kazuya kawaguchi
     * Released under the MIT License.
     */
    const Si = [];
    Si[0] = {
        w: [0],
        i: [3, 0],
        ["["]: [4],
        o: [7]
    };
    Si[1] = {
        w: [1],
        ["."]: [2],
        ["["]: [4],
        o: [7]
    };
    Si[2] = {
        w: [2],
        i: [3, 0],
        [0]: [3, 0]
    };
    Si[3] = {
        i: [3, 0],
        [0]: [3, 0],
        w: [1, 1],
        ["."]: [2, 1],
        ["["]: [4, 1],
        o: [7, 1]
    };
    Si[4] = {
        ["'"]: [5, 0],
        ['"']: [6, 0],
        ["["]: [4, 2],
        ["]"]: [1, 3],
        o: 8,
        l: [4, 0]
    };
    Si[5] = {
        ["'"]: [4, 0],
        o: 8,
        l: [5, 0]
    };
    Si[6] = {
        ['"']: [4, 0],
        o: 8,
        l: [6, 0]
    };
    const tte = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function rte(e) {
        return tte.test(e)
    }

    function nte(e) {
        const t = e.charCodeAt(0),
            r = e.charCodeAt(e.length - 1);
        return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e
    }

    function ite(e) {
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

    function ste(e) {
        const t = e.trim();
        return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : rte(t) ? nte(t) : "*" + t
    }

    function ate(e) {
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
                if (s = 0, l === void 0 || (l = ste(l), l === !1)) return !1;
                b[1]()
            }
        };

        function w() {
            const P = e[r + 1];
            if (n === 5 && P === "'" || n === 6 && P === '"') return r++, c = "\\" + P, b[0](), !0
        }
        for (; n !== null;)
            if (r++, a = e[r], !(a === "\\" && w())) {
                if (f = ite(a), y = Si[n], d = y[f] || y.l || 8, d === 8 || (n = d[0], d[1] !== void 0 && (p = b[d[1]], p && (c = a, p() === !1)))) return;
                if (n === 7) return t
            }
    }
    const DE = new Map;

    function ote(e, t) {
        return Tt(e) ? e[t] : null
    }

    function lte(e, t) {
        if (!Tt(e)) return null;
        let r = DE.get(t);
        if (r || (r = ate(t), r && DE.set(t, r)), !r) return null;
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
    const cte = e => e,
        ute = e => "",
        fte = "text",
        dte = e => e.length === 0 ? "" : e.join(""),
        hte = Nee;

    function xE(e, t) {
        return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
    }

    function pte(e) {
        const t = jt(e.pluralIndex) ? e.pluralIndex : -1;
        return e.named && (jt(e.named.count) || jt(e.named.n)) ? jt(e.named.count) ? e.named.count : jt(e.named.n) ? e.named.n : t : t
    }

    function gte(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }

    function mte(e = {}) {
        const t = e.locale,
            r = pte(e),
            n = Tt(e.pluralRules) && _e(t) && Pt(e.pluralRules[t]) ? e.pluralRules[t] : xE,
            s = Tt(e.pluralRules) && _e(t) && Pt(e.pluralRules[t]) ? xE : void 0,
            a = C => C[n(r, C.length, s)],
            l = e.list || [],
            c = C => l[C],
            f = e.named || {};
        jt(e.pluralIndex) && gte(r, f);
        const d = C => f[C];

        function p(C) {
            const H = Pt(e.messages) ? e.messages(C) : Tt(e.messages) ? e.messages[C] : !1;
            return H || (e.parent ? e.parent.message(C) : ute)
        }
        const y = C => e.modifiers ? e.modifiers[C] : cte,
            b = Be(e.processor) && Pt(e.processor.normalize) ? e.processor.normalize : dte,
            w = Be(e.processor) && Pt(e.processor.interpolate) ? e.processor.interpolate : hte,
            P = Be(e.processor) && _e(e.processor.type) ? e.processor.type : fte,
            G = {
                list: c,
                named: d,
                plural: a,
                linked: (C, ...H) => {
                    const [z, V] = H;
                    let j = "text",
                        Q = "";
                    H.length === 1 ? Tt(z) ? (Q = z.modifier || Q, j = z.type || j) : _e(z) && (Q = z || Q) : H.length === 2 && (_e(z) && (Q = z || Q), _e(V) && (j = V || j));
                    let oe = p(C)(G);
                    return j === "vnode" && bt(oe) && Q && (oe = oe[0]), Q ? y(Q)(oe, j) : oe
                },
                message: p,
                type: P,
                interpolate: w,
                normalize: b
            };
        return G
    }
    let vte = null;
    ete.FunctionTranslate;

    function yte(e) {
        return t => vte
    }
    const _te = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    };

    function Ete(e, t, r) {
        return [...new Set([r, ...bt(t) ? t : Tt(t) ? Object.keys(t) : _e(t) ? [t] : [r]])]
    }

    function RS(e, t, r) {
        const n = _e(r) ? r : bo,
            s = e;
        s.__localeChainCache || (s.__localeChainCache = new Map);
        let a = s.__localeChainCache.get(n);
        if (!a) {
            a = [];
            let l = [r];
            for (; bt(l);) l = ME(a, l, t);
            const c = bt(t) || !Be(t) ? t : t.default ? t.default : null;
            l = _e(c) ? [c] : c, bt(l) && ME(a, l, !1), s.__localeChainCache.set(n, a)
        }
        return a
    }

    function ME(e, t, r) {
        let n = !0;
        for (let s = 0; s < t.length && Ze(n); s++) {
            const a = t[s];
            _e(a) && (n = bte(e, t[s], r))
        }
        return n
    }

    function bte(e, t, r) {
        let n;
        const s = t.split("-");
        do {
            const a = s.join("-");
            n = Tte(e, a, r), s.splice(-1, 1)
        } while (s.length && n === !0);
        return n
    }

    function Tte(e, t, r) {
        let n = !1;
        if (!e.includes(t) && (n = !0, t)) {
            n = t[t.length - 1] !== "!";
            const s = t.replace(/!/g, "");
            e.push(s), (bt(r) || Be(r)) && r[s] && (n = r[s])
        }
        return n
    }
    const Ate = "9.2.2",
        Xc = -1,
        bo = "en-US",
        UE = "",
        FE = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

    function Ote() {
        return {
            upper: (e, t) => t === "text" && _e(e) ? e.toUpperCase() : t === "vnode" && Tt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => t === "text" && _e(e) ? e.toLowerCase() : t === "vnode" && Tt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => t === "text" && _e(e) ? FE(e) : t === "vnode" && Tt(e) && "__v_isVNode" in e ? FE(e.children) : e
        }
    }
    let LS;

    function Ste(e) {
        LS = e
    }
    let NS;

    function wte(e) {
        NS = e
    }
    let PS;

    function Cte(e) {
        PS = e
    }
    let BE = 0;

    function Ite(e = {}) {
        const t = _e(e.version) ? e.version : Ate,
            r = _e(e.locale) ? e.locale : bo,
            n = bt(e.fallbackLocale) || Be(e.fallbackLocale) || _e(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r,
            s = Be(e.messages) ? e.messages : {
                [r]: {}
            },
            a = Be(e.datetimeFormats) ? e.datetimeFormats : {
                [r]: {}
            },
            l = Be(e.numberFormats) ? e.numberFormats : {
                [r]: {}
            },
            c = rr({}, e.modifiers || {}, Ote()),
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
            H = Pt(e.messageCompiler) ? e.messageCompiler : LS,
            z = Pt(e.messageResolver) ? e.messageResolver : NS || ote,
            V = Pt(e.localeFallbacker) ? e.localeFallbacker : PS || Ete,
            j = Tt(e.fallbackContext) ? e.fallbackContext : void 0,
            Q = Pt(e.onWarn) ? e.onWarn : Ree,
            oe = e,
            le = Tt(oe.__datetimeFormatters) ? oe.__datetimeFormatters : new Map,
            ue = Tt(oe.__numberFormatters) ? oe.__numberFormatters : new Map,
            $e = Tt(oe.__meta) ? oe.__meta : {};
        BE++;
        const Ie = {
            version: t,
            cid: BE,
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

    function Wp(e, t, r, n, s) {
        const {
            missing: a,
            onWarn: l
        } = e;
        if (a !== null) {
            const c = a(e, r, t, s);
            return _e(c) ? c : t
        } else return t
    }

    function ka(e, t, r) {
        const n = e;
        n.__localeChainCache = new Map, e.localeFallbacker(e, r, t)
    }
    const $te = e => e;
    let GE = Object.create(null);

    function Rte(e, t = {}) {
        {
            const n = (t.onCacheKey || $te)(e),
                s = GE[n];
            if (s) return s;
            let a = !1;
            const l = t.onError || Pee;
            t.onError = d => {
                a = !0, l(d)
            };
            const {
                code: c
            } = Zee(e, t), f = new Function(`return ${c}`)();
            return a ? f : GE[n] = f
        }
    }
    let kS = it.__EXTEND_POINT__;
    const ad = () => ++kS,
        ks = {
            INVALID_ARGUMENT: kS,
            INVALID_DATE_ARGUMENT: ad(),
            INVALID_ISO_DATE_ARGUMENT: ad(),
            __EXTEND_POINT__: ad()
        };

    function Ds(e) {
        return zc(e, null, void 0)
    }
    const jE = () => "",
        as = e => Pt(e);

    function WE(e, ...t) {
        const {
            fallbackFormat: r,
            postTranslation: n,
            unresolving: s,
            messageCompiler: a,
            fallbackLocale: l,
            messages: c
        } = e, [f, d] = oh(...t), p = Ze(d.missingWarn) ? d.missingWarn : e.missingWarn, y = Ze(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, b = Ze(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, w = !!d.resolvedMessage, P = _e(d.default) || Ze(d.default) ? Ze(d.default) ? a ? f : () => f : d.default : r ? a ? f : () => f : "", M = r || P !== "", G = _e(d.locale) ? d.locale : e.locale;
        b && Lte(d);
        let [C, H, z] = w ? [f, G, c[G] || {}] : DS(e, f, G, l, y, p), V = C, j = f;
        if (!w && !(_e(V) || as(V)) && M && (V = P, j = V), !w && (!(_e(V) || as(V)) || !_e(H))) return s ? Xc : f;
        let Q = !1;
        const oe = () => {
                Q = !0
            },
            le = as(V) ? V : xS(e, f, H, V, j, oe);
        if (Q) return V;
        const ue = kte(e, H, z, d),
            $e = mte(ue),
            Ie = Nte(e, le, $e);
        return n ? n(Ie, f) : Ie
    }

    function Lte(e) {
        bt(e.list) ? e.list = e.list.map(t => _e(t) ? NE(t) : t) : Tt(e.named) && Object.keys(e.named).forEach(t => {
            _e(e.named[t]) && (e.named[t] = NE(e.named[t]))
        })
    }

    function DS(e, t, r, n, s, a) {
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
            const G = Wp(e, t, b, a, P);
            G !== t && (w = G)
        }
        return [w, b, y]
    }

    function xS(e, t, r, n, s, a) {
        const {
            messageCompiler: l,
            warnHtmlMessage: c
        } = e;
        if (as(n)) {
            const d = n;
            return d.locale = d.locale || r, d.key = d.key || t, d
        }
        if (l == null) {
            const d = () => n;
            return d.locale = r, d.key = t, d
        }
        const f = l(n, Pte(e, r, s, n, c, a));
        return f.locale = r, f.key = t, f.source = n, f
    }

    function Nte(e, t, r) {
        return t(r)
    }

    function oh(...e) {
        const [t, r, n] = e, s = {};
        if (!_e(t) && !jt(t) && !as(t)) throw Ds(ks.INVALID_ARGUMENT);
        const a = jt(t) ? String(t) : (as(t), t);
        return jt(r) ? s.plural = r : _e(r) ? s.default = r : Be(r) && !Yc(r) ? s.named = r : bt(r) && (s.list = r), jt(n) ? s.plural = n : _e(n) ? s.default = n : Be(n) && rr(s, n), [a, s]
    }

    function Pte(e, t, r, n, s, a) {
        return {
            warnHtmlMessage: s,
            onError: l => {
                throw a && a(l), l
            },
            onCacheKey: l => Cee(t, r, l)
        }
    }

    function kte(e, t, r, n) {
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
                    const [, , M] = DS(p, w, t, c, f, d);
                    P = l(M, w)
                }
                if (_e(P)) {
                    let M = !1;
                    const C = xS(e, w, t, P, w, () => {
                        M = !0
                    });
                    return M ? jE : C
                } else return as(P) ? P : jE
            }
        };
        return e.processor && (b.processor = e.processor), n.list && (b.list = n.list), n.named && (b.named = n.named), jt(n.plural) && (b.pluralIndex = n.plural), b
    }

    function VE(e, ...t) {
        const {
            datetimeFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: a,
            localeFallbacker: l
        } = e, {
            __datetimeFormatters: c
        } = e, [f, d, p, y] = lh(...t), b = Ze(p.missingWarn) ? p.missingWarn : e.missingWarn;
        Ze(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
        const w = !!p.part,
            P = _e(p.locale) ? p.locale : e.locale,
            M = l(e, s, P);
        if (!_e(f) || f === "") return new Intl.DateTimeFormat(P, y).format(d);
        let G = {},
            C, H = null;
        const z = "datetime format";
        for (let Q = 0; Q < M.length && (C = M[Q], G = r[C] || {}, H = G[f], !Be(H)); Q++) Wp(e, f, C, b, z);
        if (!Be(H) || !_e(C)) return n ? Xc : f;
        let V = `${C}__${f}`;
        Yc(y) || (V = `${V}__${JSON.stringify(y)}`);
        let j = c.get(V);
        return j || (j = new Intl.DateTimeFormat(C, rr({}, H, y)), c.set(V, j)), w ? j.formatToParts(d) : j.format(d)
    }
    const MS = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

    function lh(...e) {
        const [t, r, n, s] = e, a = {};
        let l = {},
            c;
        if (_e(t)) {
            const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
            if (!f) throw Ds(ks.INVALID_ISO_DATE_ARGUMENT);
            const d = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
            c = new Date(d);
            try {
                c.toISOString()
            } catch {
                throw Ds(ks.INVALID_ISO_DATE_ARGUMENT)
            }
        } else if ($ee(t)) {
            if (isNaN(t.getTime())) throw Ds(ks.INVALID_DATE_ARGUMENT);
            c = t
        } else if (jt(t)) c = t;
        else throw Ds(ks.INVALID_ARGUMENT);
        return _e(r) ? a.key = r : Be(r) && Object.keys(r).forEach(f => {
            MS.includes(f) ? l[f] = r[f] : a[f] = r[f]
        }), _e(n) ? a.locale = n : Be(n) && (l = n), Be(s) && (l = s), [a.key || "", c, a, l]
    }

    function KE(e, t, r) {
        const n = e;
        for (const s in r) {
            const a = `${t}__${s}`;
            !n.__datetimeFormatters.has(a) || n.__datetimeFormatters.delete(a)
        }
    }

    function HE(e, ...t) {
        const {
            numberFormats: r,
            unresolving: n,
            fallbackLocale: s,
            onWarn: a,
            localeFallbacker: l
        } = e, {
            __numberFormatters: c
        } = e, [f, d, p, y] = ch(...t), b = Ze(p.missingWarn) ? p.missingWarn : e.missingWarn;
        Ze(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
        const w = !!p.part,
            P = _e(p.locale) ? p.locale : e.locale,
            M = l(e, s, P);
        if (!_e(f) || f === "") return new Intl.NumberFormat(P, y).format(d);
        let G = {},
            C, H = null;
        const z = "number format";
        for (let Q = 0; Q < M.length && (C = M[Q], G = r[C] || {}, H = G[f], !Be(H)); Q++) Wp(e, f, C, b, z);
        if (!Be(H) || !_e(C)) return n ? Xc : f;
        let V = `${C}__${f}`;
        Yc(y) || (V = `${V}__${JSON.stringify(y)}`);
        let j = c.get(V);
        return j || (j = new Intl.NumberFormat(C, rr({}, H, y)), c.set(V, j)), w ? j.formatToParts(d) : j.format(d)
    }
    const US = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

    function ch(...e) {
        const [t, r, n, s] = e, a = {};
        let l = {};
        if (!jt(t)) throw Ds(ks.INVALID_ARGUMENT);
        const c = t;
        return _e(r) ? a.key = r : Be(r) && Object.keys(r).forEach(f => {
            US.includes(f) ? l[f] = r[f] : a[f] = r[f]
        }), _e(n) ? a.locale = n : Be(n) && (l = n), Be(s) && (l = s), [a.key || "", c, a, l]
    }

    function qE(e, t, r) {
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
    const Dte = "9.2.2";
    _te.__EXTEND_POINT__;
    let FS = it.__EXTEND_POINT__;
    const Ar = () => ++FS,
        Ut = {
            UNEXPECTED_RETURN_TYPE: FS,
            INVALID_ARGUMENT: Ar(),
            MUST_BE_CALL_SETUP_TOP: Ar(),
            NOT_INSLALLED: Ar(),
            NOT_AVAILABLE_IN_LEGACY_MODE: Ar(),
            REQUIRED_VALUE: Ar(),
            INVALID_VALUE: Ar(),
            CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ar(),
            NOT_INSLALLED_WITH_PROVIDE: Ar(),
            UNEXPECTED_ERROR: Ar(),
            NOT_COMPATIBLE_LEGACY_VUE_I18N: Ar(),
            BRIDGE_SUPPORT_VUE_2_ONLY: Ar(),
            MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ar(),
            NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ar(),
            __EXTEND_POINT__: Ar()
        };

    function Vt(e, ...t) {
        return zc(e, null, void 0)
    }
    const uh = Oi("__transrateVNode"),
        fh = Oi("__datetimeParts"),
        dh = Oi("__numberParts"),
        BS = Oi("__setPluralRules");
    Oi("__intlifyMeta");
    const GS = Oi("__injectWithOption");

    function hh(e) {
        if (!Tt(e)) return e;
        for (const t in e)
            if (!!Bp(e, t))
                if (!t.includes(".")) Tt(e[t]) && hh(e[t]);
                else {
                    const r = t.split("."),
                        n = r.length - 1;
                    let s = e;
                    for (let a = 0; a < n; a++) r[a] in s || (s[r[a]] = {}), s = s[r[a]];
                    s[r[n]] = e[t], delete e[t], Tt(s[r[n]]) && hh(s[r[n]])
                } return e
    }

    function Jc(e, t) {
        const {
            messages: r,
            __i18n: n,
            messageResolver: s,
            flatJson: a
        } = t, l = Be(r) ? r : bt(n) ? {} : {
            [e]: {}
        };
        if (bt(n) && n.forEach(c => {
                if ("locale" in c && "resource" in c) {
                    const {
                        locale: f,
                        resource: d
                    } = c;
                    f ? (l[f] = l[f] || {}, Ha(d, l[f])) : Ha(d, l)
                } else _e(c) && Ha(JSON.parse(c), l)
            }), s == null && a)
            for (const c in l) Bp(l, c) && hh(l[c]);
        return l
    }
    const Il = e => !Tt(e) || bt(e);

    function Ha(e, t) {
        if (Il(e) || Il(t)) throw Vt(Ut.INVALID_VALUE);
        for (const r in e) Bp(e, r) && (Il(e[r]) || Il(t[r]) ? t[r] = e[r] : Ha(e[r], t[r]))
    }

    function xte(e) {
        return e.type
    }

    function jS(e, t, r) {
        let n = Tt(t.messages) ? t.messages : {};
        "__i18nGlobal" in r && (n = Jc(e.locale.value, {
            messages: n,
            __i18n: r.__i18nGlobal
        }));
        const s = Object.keys(n);
        s.length && s.forEach(a => {
            e.mergeLocaleMessage(a, n[a])
        }); {
            if (Tt(t.datetimeFormats)) {
                const a = Object.keys(t.datetimeFormats);
                a.length && a.forEach(l => {
                    e.mergeDateTimeFormat(l, t.datetimeFormats[l])
                })
            }
            if (Tt(t.numberFormats)) {
                const a = Object.keys(t.numberFormats);
                a.length && a.forEach(l => {
                    e.mergeNumberFormat(l, t.numberFormats[l])
                })
            }
        }
    }

    function YE(e) {
        return pt(_c, null, e, 0)
    }
    let zE = 0;

    function XE(e) {
        return (t, r, n, s) => e(r, n, os() || void 0, s)
    }

    function Vp(e = {}, t) {
        const {
            __root: r
        } = e, n = r === void 0;
        let s = Ze(e.inheritLocale) ? e.inheritLocale : !0;
        const a = cn(r && s ? r.locale.value : _e(e.locale) ? e.locale : bo),
            l = cn(r && s ? r.fallbackLocale.value : _e(e.fallbackLocale) || bt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value),
            c = cn(Jc(a.value, e)),
            f = cn(Be(e.datetimeFormats) ? e.datetimeFormats : {
                [a.value]: {}
            }),
            d = cn(Be(e.numberFormats) ? e.numberFormats : {
                [a.value]: {}
            });
        let p = r ? r.missingWarn : Ze(e.missingWarn) || mi(e.missingWarn) ? e.missingWarn : !0,
            y = r ? r.fallbackWarn : Ze(e.fallbackWarn) || mi(e.fallbackWarn) ? e.fallbackWarn : !0,
            b = r ? r.fallbackRoot : Ze(e.fallbackRoot) ? e.fallbackRoot : !0,
            w = !!e.fallbackFormat,
            P = Pt(e.missing) ? e.missing : null,
            M = Pt(e.missing) ? XE(e.missing) : null,
            G = Pt(e.postTranslation) ? e.postTranslation : null,
            C = r ? r.warnHtmlMessage : Ze(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
            H = !!e.escapeParameter;
        const z = r ? r.modifiers : Be(e.modifiers) ? e.modifiers : {};
        let V = e.pluralRules || r && r.pluralRules,
            j;
        j = (() => {
            const $ = {
                version: Dte,
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
            return $.datetimeFormats = f.value, $.numberFormats = d.value, $.__datetimeFormatters = Be(j) ? j.__datetimeFormatters : void 0, $.__numberFormatters = Be(j) ? j.__numberFormatters : void 0, Ite($)
        })(), ka(j, a.value, l.value);

        function oe() {
            return [a.value, l.value, c.value, f.value, d.value]
        }
        const le = Dr({
                get: () => a.value,
                set: $ => {
                    a.value = $, j.locale = a.value
                }
            }),
            ue = Dr({
                get: () => l.value,
                set: $ => {
                    l.value = $, j.fallbackLocale = l.value, ka(j, a.value, $)
                }
            }),
            $e = Dr(() => c.value),
            Ie = Dr(() => f.value),
            fe = Dr(() => d.value);

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
            $ !== null && (M = XE($)), P = $, j.missing = M
        }
        const be = ($, K, he, pe, Re, De) => {
            oe();
            let S;
            if (S = $(j), jt(S) && S === Xc) {
                const [T, L] = K();
                return r && b ? pe(r) : Re(T)
            } else {
                if (De(S)) return S;
                throw Vt(Ut.UNEXPECTED_RETURN_TYPE)
            }
        };

        function ye(...$) {
            return be(K => Reflect.apply(WE, null, [K, ...$]), () => oh(...$), "translate", K => Reflect.apply(K.t, K, [...$]), K => K, K => _e(K))
        }

        function Se(...$) {
            const [K, he, pe] = $;
            if (pe && !Tt(pe)) throw Vt(Ut.INVALID_ARGUMENT);
            return ye(K, he, rr({
                resolvedMessage: !0
            }, pe || {}))
        }

        function Ue(...$) {
            return be(K => Reflect.apply(VE, null, [K, ...$]), () => lh(...$), "datetime format", K => Reflect.apply(K.d, K, [...$]), () => UE, K => _e(K))
        }

        function je(...$) {
            return be(K => Reflect.apply(HE, null, [K, ...$]), () => ch(...$), "number format", K => Reflect.apply(K.n, K, [...$]), () => UE, K => _e(K))
        }

        function nt($) {
            return $.map(K => _e(K) || jt(K) || Ze(K) ? YE(String(K)) : K)
        }
        const Cr = {
            normalize: nt,
            interpolate: $ => $,
            type: "vnode"
        };

        function ir(...$) {
            return be(K => {
                let he;
                const pe = K;
                try {
                    pe.processor = Cr, he = Reflect.apply(WE, null, [pe, ...$])
                } finally {
                    pe.processor = null
                }
                return he
            }, () => oh(...$), "translate", K => K[uh](...$), K => [YE(K)], K => bt(K))
        }

        function yr(...$) {
            return be(K => Reflect.apply(HE, null, [K, ...$]), () => ch(...$), "number format", K => K[dh](...$), () => [], K => _e(K) || bt(K))
        }

        function lt(...$) {
            return be(K => Reflect.apply(VE, null, [K, ...$]), () => lh(...$), "datetime format", K => K[fh](...$), () => [], K => _e(K) || bt(K))
        }

        function St($) {
            V = $, j.pluralRules = V
        }

        function ct($, K) {
            const he = _e(K) ? K : a.value,
                pe = xt(he);
            return j.messageResolver(pe, $) !== null
        }

        function Dt($) {
            let K = null;
            const he = RS(j, l.value, a.value);
            for (let pe = 0; pe < he.length; pe++) {
                const Re = c.value[he[pe]] || {},
                    De = j.messageResolver(Re, $);
                if (De != null) {
                    K = De;
                    break
                }
            }
            return K
        }

        function Kt($) {
            const K = Dt($);
            return K != null ? K : r ? r.tm($) || {} : {}
        }

        function xt($) {
            return c.value[$] || {}
        }

        function m($, K) {
            c.value[$] = K, j.messages = c.value
        }

        function g($, K) {
            c.value[$] = c.value[$] || {}, Ha(K, c.value[$]), j.messages = c.value
        }

        function O($) {
            return f.value[$] || {}
        }

        function x($, K) {
            f.value[$] = K, j.datetimeFormats = f.value, KE(j, $, K)
        }

        function B($, K) {
            f.value[$] = rr(f.value[$] || {}, K), j.datetimeFormats = f.value, KE(j, $, K)
        }

        function Y($) {
            return d.value[$] || {}
        }

        function ce($, K) {
            d.value[$] = K, j.numberFormats = d.value, qE(j, $, K)
        }

        function se($, K) {
            d.value[$] = rr(d.value[$] || {}, K), j.numberFormats = d.value, qE(j, $, K)
        }
        zE++, r && sh && (es(r.locale, $ => {
            s && (a.value = $, j.locale = $, ka(j, a.value, l.value))
        }), es(r.fallbackLocale, $ => {
            s && (l.value = $, j.fallbackLocale = $, ka(j, a.value, l.value))
        }));
        const re = {
            id: zE,
            locale: le,
            fallbackLocale: ue,
            get inheritLocale() {
                return s
            },
            set inheritLocale($) {
                s = $, $ && r && (a.value = r.locale.value, l.value = r.fallbackLocale.value, ka(j, a.value, l.value))
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
            getLocaleMessage: xt,
            setLocaleMessage: m,
            mergeLocaleMessage: g,
            getPostTranslationHandler: Ce,
            setPostTranslationHandler: U,
            getMissingHandler: ie,
            setMissingHandler: de,
            [BS]: St
        };
        return re.datetimeFormats = Ie, re.numberFormats = fe, re.rt = Se, re.te = ct, re.tm = Kt, re.d = Ue, re.n = je, re.getDateTimeFormat = O, re.setDateTimeFormat = x, re.mergeDateTimeFormat = B, re.getNumberFormat = Y, re.setNumberFormat = ce, re.mergeNumberFormat = se, re[GS] = e.__injectWithOption, re[uh] = ir, re[fh] = lt, re[dh] = yr, re
    }

    function Mte(e) {
        const t = _e(e.locale) ? e.locale : bo,
            r = _e(e.fallbackLocale) || bt(e.fallbackLocale) || Be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
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
                return rr(ue, j[le]), oe
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

    function ph(e = {}, t) {
        {
            const r = Vp(Mte(e)),
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
                        return _e(l) ? f.locale = l : bt(l) ? d = l : Be(l) && (p = l), bt(c) ? d = c : Be(c) && (p = c), Reflect.apply(r.t, r, [y, d || p || {}, f])
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
                        return _e(l) ? f.locale = l : jt(l) ? f.plural = l : bt(l) ? d = l : Be(l) && (p = l), _e(c) ? f.locale = c : bt(c) ? d = c : Be(c) && (p = c), Reflect.apply(r.t, r, [y, d || p || {}, f])
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
    const Kp = {
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

    function Ute({
        slots: e
    }, t) {
        return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, s) => n = [...n, ...bt(s.children) ? s.children : [s]], []) : t.reduce((r, n) => {
            const s = e[n];
            return s && (r[n] = s()), r
        }, {})
    }

    function WS(e) {
        return qe
    }
    const JE = {
        name: "i18n-t",
        props: rr({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => jt(e) || !isNaN(e)
            }
        }, Kp),
        setup(e, t) {
            const {
                slots: r,
                attrs: n
            } = t, s = e.i18n || Hp({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const a = Object.keys(r).filter(y => y !== "_"),
                    l = {};
                e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = _e(e.plural) ? +e.plural : e.plural);
                const c = Ute(t, a),
                    f = s[uh](e.keypath, c, l),
                    d = rr({}, n),
                    p = _e(e.tag) || Tt(e.tag) ? e.tag : WS();
                return Uh(p, d, f)
            }
        }
    };

    function Fte(e) {
        return bt(e) && !_e(e[0])
    }

    function VS(e, t, r, n) {
        const {
            slots: s,
            attrs: a
        } = t;
        return () => {
            const l = {
                part: !0
            };
            let c = {};
            e.locale && (l.locale = e.locale), _e(e.format) ? l.key = e.format : Tt(e.format) && (_e(e.format.key) && (l.key = e.format.key), c = Object.keys(e.format).reduce((b, w) => r.includes(w) ? rr({}, b, {
                [w]: e.format[w]
            }) : b, {}));
            const f = n(e.value, l, c);
            let d = [l.key];
            bt(f) ? d = f.map((b, w) => {
                const P = s[b.type],
                    M = P ? P({
                        [b.type]: b.value,
                        index: w,
                        parts: f
                    }) : [b.value];
                return Fte(M) && (M[0].key = `${b.type}-${w}`), M
            }) : _e(f) && (d = [f]);
            const p = rr({}, a),
                y = _e(e.tag) || Tt(e.tag) ? e.tag : WS();
            return Uh(y, p, d)
        }
    }
    const QE = {
            name: "i18n-n",
            props: rr({
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Kp),
            setup(e, t) {
                const r = e.i18n || Hp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return VS(e, t, US, (...n) => r[dh](...n))
            }
        },
        ZE = {
            name: "i18n-d",
            props: rr({
                value: {
                    type: [Number, Date],
                    required: !0
                },
                format: {
                    type: [String, Object]
                }
            }, Kp),
            setup(e, t) {
                const r = e.i18n || Hp({
                    useScope: "parent",
                    __useComponent: !0
                });
                return VS(e, t, MS, (...n) => r[fh](...n))
            }
        };

    function Bte(e, t) {
        const r = e;
        if (e.mode === "composition") return r.__getInstance(t) || e.global; {
            const n = r.__getInstance(t);
            return n != null ? n.__composer : e.global.__composer
        }
    }

    function Gte(e) {
        const t = l => {
            const {
                instance: c,
                modifiers: f,
                value: d
            } = l;
            if (!c || !c.$) throw Vt(Ut.UNEXPECTED_ERROR);
            const p = Bte(e, c.$),
                y = eb(d);
            return [Reflect.apply(p.t, p, [...tb(y)]), p]
        };
        return {
            created: (l, c) => {
                const [f, d] = t(c);
                sh && e.global === d && (l.__i18nWatcher = es(d.locale, () => {
                    c.instance && c.instance.$forceUpdate()
                })), l.__composer = d, l.textContent = f
            },
            unmounted: l => {
                sh && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer)
            },
            beforeUpdate: (l, {
                value: c
            }) => {
                if (l.__composer) {
                    const f = l.__composer,
                        d = eb(c);
                    l.textContent = Reflect.apply(f.t, f, [...tb(d)])
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

    function eb(e) {
        if (_e(e)) return {
            path: e
        };
        if (Be(e)) {
            if (!("path" in e)) throw Vt(Ut.REQUIRED_VALUE, "path");
            return e
        } else throw Vt(Ut.INVALID_VALUE)
    }

    function tb(e) {
        const {
            path: t,
            locale: r,
            args: n,
            choice: s,
            plural: a
        } = e, l = {}, c = n || {};
        return _e(r) && (l.locale = r), jt(s) && (l.plural = s), jt(a) && (l.plural = a), [t, c, l]
    }

    function jte(e, t, ...r) {
        const n = Be(r[0]) ? r[0] : {},
            s = !!n.useI18nComponentName;
        (Ze(n.globalInstall) ? n.globalInstall : !0) && (e.component(s ? "i18n" : JE.name, JE), e.component(QE.name, QE), e.component(ZE.name, ZE)), e.directive("t", Gte(t))
    }

    function Wte(e, t, r) {
        return {
            beforeCreate() {
                const n = os();
                if (!n) throw Vt(Ut.UNEXPECTED_ERROR);
                const s = this.$options;
                if (s.i18n) {
                    const a = s.i18n;
                    s.__i18n && (a.__i18n = s.__i18n), a.__root = t, this === this.$root ? this.$i18n = rb(e, a) : (a.__injectWithOption = !0, this.$i18n = ph(a))
                } else s.__i18n ? this === this.$root ? this.$i18n = rb(e, s) : this.$i18n = ph({
                    __i18n: s.__i18n,
                    __injectWithOption: !0,
                    __root: t
                }) : this.$i18n = e;
                s.__i18nGlobal && jS(t, s, s), e.__onComponentInstanceCreated(this.$i18n), r.__setInstance(n, this.$i18n), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, l) => this.$i18n.te(a, l), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = a => this.$i18n.tm(a)
            },
            mounted() {},
            unmounted() {
                const n = os();
                if (!n) throw Vt(Ut.UNEXPECTED_ERROR);
                delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, r.__deleteInstance(n), delete this.$i18n
            }
        }
    }

    function rb(e, t) {
        e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[BS](t.pluralizationRules || e.pluralizationRules);
        const r = Jc(e.locale, {
            messages: t.messages,
            __i18n: t.__i18n
        });
        return Object.keys(r).forEach(n => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(n => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach(n => e.mergeNumberFormat(n, t.numberFormats[n])), e
    }
    const Vte = Oi("global-vue-i18n");

    function Kte(e = {}, t) {
        const r = Ze(e.legacy) ? e.legacy : !0,
            n = Ze(e.globalInjection) ? e.globalInjection : !0,
            s = r ? !!e.allowComposition : !0,
            a = new Map,
            [l, c] = Hte(e, r),
            f = Oi("");

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
                    w.__VUE_I18N_SYMBOL__ = f, w.provide(w.__VUE_I18N_SYMBOL__, b), !r && n && tre(w, b.global), jte(w, b, ...P), r && w.mixin(Wte(c, c.__composer, b));
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

    function Hp(e = {}) {
        const t = os();
        if (t == null) throw Vt(Ut.MUST_BE_CALL_SETUP_TOP);
        if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Vt(Ut.NOT_INSLALLED);
        const r = qte(t),
            n = zte(r),
            s = xte(t),
            a = Yte(e, s);
        if (r.mode === "legacy" && !e.__useComponent) {
            if (!r.allowComposition) throw Vt(Ut.NOT_AVAILABLE_IN_LEGACY_MODE);
            return Qte(t, a, n, e)
        }
        if (a === "global") return jS(n, e, s), n;
        if (a === "parent") {
            let f = Xte(r, t, e.__useComponent);
            return f == null && (f = n), f
        }
        const l = r;
        let c = l.__getInstance(t);
        if (c == null) {
            const f = rr({}, e);
            "__i18n" in s && (f.__i18n = s.__i18n), n && (f.__root = n), c = Vp(f), Jte(l, t), l.__setInstance(t, c)
        }
        return c
    }

    function Hte(e, t, r) {
        const n = HL(); {
            const s = t ? n.run(() => ph(e)) : n.run(() => Vp(e));
            if (s == null) throw Vt(Ut.UNEXPECTED_ERROR);
            return [n, s]
        }
    }

    function qte(e) {
        {
            const t = Zi(e.isCE ? Vte : e.appContext.app.__VUE_I18N_SYMBOL__);
            if (!t) throw Vt(e.isCE ? Ut.NOT_INSLALLED_WITH_PROVIDE : Ut.UNEXPECTED_ERROR);
            return t
        }
    }

    function Yte(e, t) {
        return Yc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
    }

    function zte(e) {
        return e.mode === "composition" ? e.global : e.global.__composer
    }

    function Xte(e, t, r = !1) {
        let n = null;
        const s = t.root;
        let a = t.parent;
        for (; a != null;) {
            const l = e;
            if (e.mode === "composition") n = l.__getInstance(a);
            else {
                const c = l.__getInstance(a);
                c != null && (n = c.__composer, r && n && !n[GS] && (n = null))
            }
            if (n != null || s === a) break;
            a = a.parent
        }
        return n
    }

    function Jte(e, t, r) {
        $h(() => {}, t), Rh(() => {
            e.__deleteInstance(t)
        }, t)
    }

    function Qte(e, t, r, n = {}) {
        const s = t === "local",
            a = EN(null);
        if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Vt(Ut.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
        const l = Ze(n.inheritLocale) ? n.inheritLocale : !0,
            c = cn(s && l ? r.locale.value : _e(n.locale) ? n.locale : bo),
            f = cn(s && l ? r.fallbackLocale.value : _e(n.fallbackLocale) || bt(n.fallbackLocale) || Be(n.fallbackLocale) || n.fallbackLocale === !1 ? n.fallbackLocale : c.value),
            d = cn(Jc(c.value, n)),
            p = cn(Be(n.datetimeFormats) ? n.datetimeFormats : {
                [c.value]: {}
            }),
            y = cn(Be(n.numberFormats) ? n.numberFormats : {
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
        const oe = Dr({
                get: () => a.value ? a.value.locale.value : c.value,
                set: g => {
                    a.value && (a.value.locale.value = g), c.value = g
                }
            }),
            le = Dr({
                get: () => a.value ? a.value.fallbackLocale.value : f.value,
                set: g => {
                    a.value && (a.value.fallbackLocale.value = g), f.value = g
                }
            }),
            ue = Dr(() => a.value ? a.value.messages.value : d.value),
            $e = Dr(() => p.value),
            Ie = Dr(() => y.value);

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

        function Se(...g) {
            return a.value ? de(() => Reflect.apply(a.value.d, null, [...g])) : de(() => "")
        }

        function Ue(...g) {
            return a.value ? de(() => Reflect.apply(a.value.n, null, [...g])) : de(() => "")
        }

        function je(g) {
            return a.value ? a.value.tm(g) : {}
        }

        function nt(g, O) {
            return a.value ? a.value.te(g, O) : !1
        }

        function $t(g) {
            return a.value ? a.value.getLocaleMessage(g) : {}
        }

        function Cr(g, O) {
            a.value && (a.value.setLocaleMessage(g, O), d.value[g] = O)
        }

        function ir(g, O) {
            a.value && a.value.mergeLocaleMessage(g, O)
        }

        function yr(g) {
            return a.value ? a.value.getDateTimeFormat(g) : {}
        }

        function lt(g, O) {
            a.value && (a.value.setDateTimeFormat(g, O), p.value[g] = O)
        }

        function St(g, O) {
            a.value && a.value.mergeDateTimeFormat(g, O)
        }

        function ct(g) {
            return a.value ? a.value.getNumberFormat(g) : {}
        }

        function Dt(g, O) {
            a.value && (a.value.setNumberFormat(g, O), y.value[g] = O)
        }

        function Kt(g, O) {
            a.value && a.value.mergeNumberFormat(g, O)
        }
        const xt = {
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
            d: Se,
            n: Ue,
            tm: je,
            te: nt,
            getLocaleMessage: $t,
            setLocaleMessage: Cr,
            mergeLocaleMessage: ir,
            getDateTimeFormat: yr,
            setDateTimeFormat: lt,
            mergeDateTimeFormat: St,
            getNumberFormat: ct,
            setNumberFormat: Dt,
            mergeNumberFormat: Kt
        };

        function m(g) {
            g.locale.value = c.value, g.fallbackLocale.value = f.value, Object.keys(d.value).forEach(O => {
                g.mergeLocaleMessage(O, d.value[O])
            }), Object.keys(p.value).forEach(O => {
                g.mergeDateTimeFormat(O, p.value[O])
            }), Object.keys(y.value).forEach(O => {
                g.mergeNumberFormat(O, y.value[O])
            }), g.escapeParameter = z, g.fallbackFormat = M, g.fallbackRoot = P, g.fallbackWarn = w, g.missingWarn = b, g.warnHtmlMessage = H
        }
        return Vb(() => {
            if (e.proxy == null || e.proxy.$i18n == null) throw Vt(Ut.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
            const g = a.value = e.proxy.$i18n.__composer;
            t === "global" ? (c.value = g.locale.value, f.value = g.fallbackLocale.value, d.value = g.messages.value, p.value = g.datetimeFormats.value, y.value = g.numberFormats.value) : s && m(g)
        }), xt
    }
    const Zte = ["locale", "fallbackLocale", "availableLocales"],
        ere = ["t", "rt", "d", "n", "tm"];

    function tre(e, t) {
        const r = Object.create(null);
        Zte.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s) throw Vt(Ut.UNEXPECTED_ERROR);
            const a = tr(s.value) ? {
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
        }), e.config.globalProperties.$i18n = r, ere.forEach(n => {
            const s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !s.value) throw Vt(Ut.UNEXPECTED_ERROR);
            Object.defineProperty(e.config.globalProperties, `$${n}`, s)
        })
    }
    Ste(Rte);
    wte(lte);
    Cte(RS);
    const rre = rt({
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
        nre = "main/tjsp/quiplash3/assets/c8afd972.svg",
        ire = {
            class: "constrain"
        },
        sre = {
            class: "text"
        },
        are = {
            class: "subtext"
        },
        ore = {
            key: 0,
            class: "warning"
        },
        lre = {
            key: 1,
            class: "spinner"
        };

    function cre(e, t, r, n, s, a) {
        return F(), xr(Tc, {
            name: "toast-transition"
        }, {
            default: Ih(() => [e.isVisible && e.options ? (F(), W("div", {
                key: 0,
                class: Ve([e.options.type, "jbg toast"])
            }, [X("div", ire, [X("img", {
                class: "close",
                alt: "close",
                src: nre,
                onClick: t[0] || (t[0] = (...l) => e.hide && e.hide(...l)),
                onKeydown: t[1] || (t[1] = Xs((...l) => e.hide && e.hide(...l), ["esc"]))
            }, null, 32), X("p", sre, Me(e.options.text), 1), X("p", are, Me(e.options.subtext), 1), e.options.warning ? (F(), W("p", ore, Me(e.options.warning), 1)) : ve("", !0), e.options.type === "reconnecting" ? (F(), W("div", lre)) : ve("", !0)])], 2)) : ve("", !0)]),
            _: 1
        })
    }
    const ure = st(rre, [
            ["render", cre],
            ["__scopeId", "data-v-0a136edf"]
        ]),
        fre = {
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
                e.component("Toast", ure), e.config.globalProperties.$showToast = r, e.config.globalProperties.$hideToast = n, e.config.globalProperties.$registerToast = s
            }
        },
        dre = rt({
            props: {
                options: Object,
                mainView: Object
            },
            setup() {
                return {
                    fatalError: Zi(yo.fatal.error)
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

    function hre(e, t, r, n, s, a) {
        const l = Zt("Fatal"),
            c = Zt("TextDescriptions"),
            f = Zt("Debug"),
            d = Zt("Modal"),
            p = Zt("Toast");
        return e.shouldShowFatal ? (F(), xr(l, {
            key: 0
        })) : (F(), W(qe, {
            key: 1
        }, [pt(c), (F(), xr(Nh(e.mainView), Mh({
            id: "game",
            class: e.classes
        }, e.ecastValues), null, 16, ["class"])), pt(f), pt(d), pt(p)], 64))
    }
    const nb = st(dre, [
            ["render", hre]
        ]),
        pre = e => {
            let t;
            window.tv.register({
                connect: r => (t = new Sr.WSClient(r), t.connect()),
                mount: r => {
                    var l, c, f, d;
                    nb.name = r.app;
                    let n = sk(nb, {
                        options: r,
                        mainView: e.MainView
                    });
                    r.client && (t = r.client);
                    let s;
                    (l = r.room) != null && l.locale && (s = r.room.locale), (f = (c = r.match) == null ? void 0 : c.params) != null && f.locale && (s = r.match.params.locale), Bs.set(s);
                    const a = Kte({
                        fallbackLocale: "en",
                        locale: Bs.locale,
                        messages: Bs.mergeMessages(TW, (d = e.messages) != null ? d : {})
                    });
                    if (n.use(S5), n.use(yee), n.use(iX, {
                            replayer: r.replayer,
                            client: t,
                            room: r.room
                        }), n.use(AJ, {
                            wsClient: t,
                            room: r.room,
                            welcome: r.welcome
                        }), n.use(_Z), n.use(a), n.use(zZ, {
                            i18n: a
                        }), n.use(Aee), n.use(Oee), n.use(fre), n.use(See), e.plugins) {
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
        gre = {
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
        mre = {
            AVATAR_SELECT: "Select your character"
        },
        vre = {
            INSTRUCTION: "Vote for your favorite",
            THANKS: "Thank you. Your choice:"
        },
        yre = {
            ANSWER_PLACEHOLDER: "ANSWER HERE",
            PROMPT_COUNTER: "Prompt {current} of {total}",
            PROMPT_FINAL: "Final prompt",
            SAFETY_QUIP_LABEL: "Stuck? Try a safety quip",
            SAFETY_QUIP_SUBMIT: "Submit a Safety Quip"
        },
        _re = {
            ALT: gre,
            LOBBY: mre,
            VOTING: vre,
            WRITING: yre
        },
        Ere = {
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
        bre = {
            AVATAR_SELECT: "Choisissez votre personnage"
        },
        Tre = {
            INSTRUCTION: "Votez pour la r\xE9ponse pr\xE9f\xE9r\xE9e",
            THANKS: "Merci. Votre choix\xA0:"
        },
        Are = {
            ANSWER_PLACEHOLDER: "R\xC9PONSE ICI",
            PROMPT_COUNTER: "Sujet {current} sur {total}",
            PROMPT_FINAL: "Dernier sujet",
            SAFETY_QUIP_LABEL: "Bloqu\xE9\xA0? Essayez un quip de sauvetage",
            SAFETY_QUIP_SUBMIT: "Envoyez un quip de sauvetage"
        },
        Ore = {
            ALT: Ere,
            LOBBY: bre,
            VOTING: Tre,
            WRITING: Are
        },
        Sre = {
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
        wre = {
            AVATAR_SELECT: "Scegli il tuo personaggio"
        },
        Cre = {
            INSTRUCTION: "Vota la tua preferita",
            THANKS: "Grazie. La tua scelta:"
        },
        Ire = {
            ANSWER_PLACEHOLDER: "RISPONDI QUI",
            PROMPT_COUNTER: "Definizione {current} di {total}",
            PROMPT_FINAL: "Ultima definizione",
            SAFETY_QUIP_LABEL: "Non sai che scrivere? Prova una frase di sicurezza",
            SAFETY_QUIP_SUBMIT: "Invia una frase di sicurezza"
        },
        $re = {
            ALT: Sre,
            LOBBY: wre,
            VOTING: Cre,
            WRITING: Ire
        },
        Rre = {
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
        Lre = {
            AVATAR_SELECT: "W\xE4hle deinen Charakter aus"
        },
        Nre = {
            INSTRUCTION: "Stimme f\xFCr deinen Favoriten ab",
            THANKS: "Vielen Dank. Deine Wahl:"
        },
        Pre = {
            ANSWER_PLACEHOLDER: "HIER SCHREIBEN",
            PROMPT_COUNTER: "Prompt {current} von {total}",
            PROMPT_FINAL: "Letzter Prompt",
            SAFETY_QUIP_LABEL: "Keine Idee? Versuch's mit einem Notfall-Quip",
            SAFETY_QUIP_SUBMIT: "Schicke einen Notfall-Quip ab"
        },
        kre = {
            ALT: Rre,
            LOBBY: Lre,
            VOTING: Nre,
            WRITING: Pre
        },
        Dre = {
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
        xre = {
            AVATAR_SELECT: "Elige a tu personaje"
        },
        Mre = {
            INSTRUCTION: "Vota a tu favorito",
            THANKS: "Gracias. Tu elecci\xF3n:"
        },
        Ure = {
            ANSWER_PLACEHOLDER: "RESPONDE AQU\xCD",
            PROMPT_COUNTER: "Entrada {current} de {total}",
            PROMPT_FINAL: "Entrada final",
            SAFETY_QUIP_LABEL: "\xBFTe has atascado? Prueba con un zasca de emergencia",
            SAFETY_QUIP_SUBMIT: "Env\xEDa un zasca de emergencia"
        },
        Fre = {
            ALT: Dre,
            LOBBY: xre,
            VOTING: Mre,
            WRITING: Ure
        },
        Bre = {
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
        Gre = {
            AVATAR_SELECT: "Elige tu personaje"
        },
        jre = {
            INSTRUCTION: "Vota tu favorito",
            THANKS: "Gracias. Tu elecci\xF3n:"
        },
        Wre = {
            ANSWER_PLACEHOLDER: "RESPONDE AQU\xCD",
            PROMPT_COUNTER: "Enunciado {current} de {total}",
            PROMPT_FINAL: "Enunciado final",
            SAFETY_QUIP_LABEL: "\xBFAtascado? Prueba una ocurrencia de emergencia",
            SAFETY_QUIP_SUBMIT: "Env\xEDa una ocurrencia de emergencia"
        },
        Vre = {
            ALT: Bre,
            LOBBY: Gre,
            VOTING: jre,
            WRITING: Wre
        },
        Kre = {
            en: _re,
            fr: Ore,
            it: $re,
            de: kre,
            es: Fre,
            "es-XL": Vre
        },
        Hre = rt({
            components: {
                Input: HA
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
        qre = {
            class: "episodes"
        },
        Yre = {
            class: "loader"
        },
        zre = {
            class: "inline-input"
        },
        Xre = {
            class: "warning"
        },
        Jre = ["onClick"],
        Qre = {
            key: 0,
            class: "episode-id"
        };

    function Zre(e, t, r, n, s, a) {
        const l = Zt("Input"),
            c = Mt("t"),
            f = Mt("maska");
        return F(), W("div", qre, [X("button", {
            class: "back",
            onClick: t[0] || (t[0] = ze((...d) => e.onClose && e.onClose(...d), ["prevent"]))
        }, Me(e.$t("ACTION.BACK")), 1), Oe(X("div", null, null, 512), [
            [c, "UGC.EPISODES_LOAD"]
        ]), X("fieldset", Yre, [X("button", {
            class: "submit",
            onClick: t[1] || (t[1] = ze((...d) => e.onLoadId && e.onLoadId(...d), ["prevent"]))
        }, Me(e.$t("ACTION.SUBMIT")), 1), X("div", zre, [Oe(pt(l, {
            modelValue: e.id,
            "onUpdate:modelValue": t[2] || (t[2] = d => e.id = d),
            placeholder: "???-????"
        }, null, 8, ["modelValue"]), [
            [f, "AAA-AAAA"]
        ])])]), Oe(X("div", Xre, null, 512), [
            [c, "UGC.EPISODES_WARNING"]
        ]), e.episodes.length ? (F(), W(qe, {
            key: 0
        }, [Oe(X("div", null, null, 512), [
            [c, "UGC.EPISODES_SELECT"]
        ]), (F(!0), W(qe, null, hn(e.episodes, (d, p) => (F(), W("button", {
            key: d.remoteContentId || d.localContentId,
            class: "episode",
            onClick: ze(y => e.onLoadSelection(p), ["prevent"])
        }, [Ur(Me(d.metadata.title) + " ", 1), d.remoteContentId ? (F(), W("span", Qre, Me(d.formattedRemoteContentId), 1)) : ve("", !0)], 8, Jre))), 128))], 64)) : ve("", !0)])
    }
    const ene = st(Hre, [
            ["render", Zre],
            ["__scopeId", "data-v-229122ba"]
        ]),
        tne = rt({
            components: {
                LobbyActions: VA
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
                    const e = await this.$showModal(ene, {
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
        rne = {
            class: "lobby"
        },
        nne = {
            class: "instructions"
        },
        ine = {
            class: "avatars"
        },
        sne = ["disabled", "onClick"],
        ane = ["src", "alt"],
        one = {
            key: 0,
            class: "episodes"
        },
        lne = ["textContent"];

    function cne(e, t, r, n, s, a) {
        const l = Zt("LobbyActions"),
            c = Mt("t");
        return F(), W("div", rne, [Oe(X("span", nne, null, 512), [
            [c, "LOBBY.AVATAR_SELECT"]
        ]), X("div", ine, [(F(!0), W(qe, null, hn(e.player.avatars, (f, d) => (F(), W("button", {
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
        }, null, 8, ane)) : ve("", !0)], 10, sne))), 128))]), pt(l, {
            player: e.player
        }, null, 8, ["player"]), e.player.canDoEpisodes ? (F(), W("div", one, [e.player.activeContentId ? (F(), W(qe, {
            key: 0
        }, [X("div", {
            class: "episode-title",
            textContent: Me(e.player.episodeTitle)
        }, null, 8, lne), e.player.activeContentId ? Oe((F(), W("button", {
            key: 0,
            onClick: t[0] || (t[0] = ze((...f) => e.onEpisodeUnload && e.onEpisodeUnload(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODE_UNLOAD"]
        ]) : ve("", !0), e.player.canReport ? Oe((F(), W("button", {
            key: 1,
            onClick: t[1] || (t[1] = ze((...f) => e.onEpisodeReport && e.onEpisodeReport(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODE_REPORT"]
        ]) : ve("", !0), e.player.canViewAuthor ? Oe((F(), W("button", {
            key: 2,
            onClick: t[2] || (t[2] = ze((...f) => e.onEpisodeViewAuthor && e.onEpisodeViewAuthor(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODE_VIEW_AUTHOR"]
        ]) : ve("", !0)], 64)) : Oe((F(), W("button", {
            key: 1,
            onClick: t[3] || (t[3] = ze((...f) => e.onEpisodeViewMenu && e.onEpisodeViewMenu(...f), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.EPISODES_MENU"]
        ])])) : ve("", !0)])
    }
    const une = st(tne, [
            ["render", cne],
            ["__scopeId", "data-v-7ba4877c"]
        ]),
        fne = rt({
            props: {
                avatar: Object,
                name: String
            }
        }),
        dne = {
            class: "header",
            "aria-label": "player name section"
        },
        hne = ["src", "alt"],
        pne = ["textContent"];

    function gne(e, t, r, n, s, a) {
        return F(), W("div", dne, [e.avatar ? (F(), W("img", {
            key: 0,
            class: "avatar",
            src: e.avatar.src,
            alt: e.avatar.alt
        }, null, 8, hne)) : ve("", !0), X("span", {
            class: "name",
            textContent: Me(e.name)
        }, null, 8, pne)])
    }
    const mne = st(fne, [
            ["render", gne],
            ["__scopeId", "data-v-3526fc00"]
        ]),
        vne = rt({
            components: {
                GalleryLink: MO,
                PostGameActions: KA
            },
            props: {
                artifact: Object,
                player: Object
            }
        }),
        yne = {
            class: "post-game"
        };

    function _ne(e, t, r, n, s, a) {
        const l = Zt("PostGameActions"),
            c = Zt("GalleryLink");
        return F(), W("div", yne, [pt(l, {
            player: e.player
        }, null, 8, ["player"]), pt(c, {
            artifact: e.artifact
        }, null, 8, ["artifact"])])
    }
    const Ene = st(vne, [
            ["render", _ne],
            ["__scopeId", "data-v-6b027004"]
        ]),
        bne = rt({
            components: {
                TextArea: Cp
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
                    return kr.get("uuid")
                }
            },
            mounted() {
                YA([this.$refs.prompt, this.$refs.title])
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
                    this.promptText = er.sanitizeInput(this.promptText)
                },
                onInputTitle() {
                    this.titleText = er.sanitizeInput(this.titleText)
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
        Tne = "main/tjsp/quiplash3/assets/c3d54796.png",
        Ane = "main/tjsp/quiplash3/assets/7399ad7c.png",
        One = "main/tjsp/quiplash3/assets/eb2e4e77.png",
        Sne = "main/tjsp/quiplash3/assets/ace297d4.png",
        wne = {
            class: "ugc"
        },
        Cne = ["textContent"],
        Ine = ["alt"],
        $ne = ["alt"],
        Rne = ["alt"],
        Lne = ["alt"],
        Nne = {
            key: 2,
            class: "episodes-list"
        },
        Pne = ["onClick"],
        kne = ["textContent"],
        Dne = ["textContent"],
        xne = ["textContent"],
        Mne = ["v-text"],
        Une = {
            key: 0,
            id: "prompt"
        },
        Fne = ["textContent"],
        Bne = ["aria-label"],
        Gne = ["disabled"],
        jne = ["textContent"],
        Wne = {
            for: "title"
        },
        Vne = {
            id: "title"
        },
        Kne = ["textContent"],
        Hne = {
            key: 10,
            class: "prompts-list"
        },
        qne = ["textContent"],
        Yne = ["onClick", "textContent"];

    function zne(e, t, r, n, s, a) {
        const l = Zt("TextArea"),
            c = Mt("t");
        return F(), W("div", wne, [X("div", {
            class: "instruction",
            textContent: Me(e.instruction)
        }, null, 8, Cne), e.player.validActions.length > 0 ? (F(), W(qe, {
            key: 0
        }, [e.player.validActions.includes("toggle-visibility") ? (F(), W(qe, {
            key: 0
        }, [Oe(X("div", null, null, 512), [
            [c, "UGC.INSTRUCTION.TOGGLE_VISIBILITY"]
        ]), X("button", {
            class: "toggle-visibility controller",
            onClick: t[0] || (t[0] = ze(f => e.onToggleVisibility("controller"), ["prevent"]))
        }, [e.player.controllerVisibility ? (F(), W("img", {
            key: 0,
            src: Tne,
            alt: e.$t("ALT.UGC.VISIBILITY_CONTROLLER_ON")
        }, null, 8, Ine)) : (F(), W("img", {
            key: 1,
            src: Ane,
            alt: e.$t("ALT.UGC.VISIBILITY_CONTROLLER_OFF")
        }, null, 8, $ne))]), X("button", {
            class: "toggle-visibility screen",
            onClick: t[1] || (t[1] = ze(f => e.onToggleVisibility("screen"), ["prevent"]))
        }, [e.player.screenVisibility ? (F(), W("img", {
            key: 0,
            src: One,
            alt: e.$t("ALT.UGC.VISIBILITY_SCREEN_ON")
        }, null, 8, Rne)) : (F(), W("img", {
            key: 1,
            src: Sne,
            alt: e.$t("ALT.UGC.VISIBILITY_SCREEN_OFF")
        }, null, 8, Lne))])], 64)) : ve("", !0), e.player.validActions.includes("new") ? Oe((F(), W("button", {
            key: 1,
            class: "action-button",
            onClick: t[2] || (t[2] = ze(f => e.onAction("new"), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.CREATE_NEW_EPISODE"]
        ]) : ve("", !0), e.player.validActions.includes("load") && e.player.episodes.length > 0 ? (F(), W("div", Nne, [Oe(X("span", null, null, 512), [
            [c, "UGC.PREVIOUS_EPISODES"]
        ]), (F(!0), W(qe, null, hn(e.player.episodes, (f, d) => (F(), W("div", {
            key: f.remoteContentId || f.localContentId
        }, [X("button", {
            class: "action-button",
            onClick: ze(p => e.onEpisodeClick(d), ["prevent"])
        }, [X("span", {
            textContent: Me(f.metadata.title)
        }, null, 8, kne), f.remoteContentId != null ? (F(), W("span", {
            key: 0,
            class: "id",
            textContent: Me(f.formattedRemoteContentId)
        }, null, 8, Dne)) : ve("", !0)], 8, Pne)]))), 128))])) : ve("", !0)], 64)) : (F(), W("div", {
            key: 1,
            textContent: Me(e.player.noActionsText)
        }, null, 8, xne)), e.player.text ? (F(), W("div", {
            key: 2,
            id: "prompt",
            "v-text": e.player.text,
            class: "prompt ugc-text"
        }, null, 8, Mne)) : ve("", !0), e.player.validActions.length > 0 ? (F(), W(qe, {
            key: 3
        }, [e.player.validActions.includes("add") ? (F(), W("div", Une, [e.promptCharacterCount != null ? (F(), W("div", {
            key: 0,
            textContent: Me(e.promptCharacterCount)
        }, null, 8, Fne)) : ve("", !0), Oe(X("input", {
            "onUpdate:modelValue": t[3] || (t[3] = f => e.isThriplash = f),
            "aria-label": e.isThriplash ? e.$t("ALT.UGC.TOGGLE_THRIPLASH_OFF") : e.$t("ALT.UGC.TOGGLE_THRIPLASH_ON"),
            class: "toggle-thriplash",
            type: "checkbox"
        }, null, 8, Bne), [
            [cT, e.isThriplash]
        ]), pt(l, {
            ref: "prompt",
            modelValue: e.promptText,
            "onUpdate:modelValue": [t[4] || (t[4] = f => e.promptText = f), e.onInputPrompt],
            class: "prompt",
            "aria-label": e.$t("UGC.PROMPT_PLACEHOLDER"),
            autosize: "",
            maxlength: e.player.maxContentLength,
            placeholder: e.$t("UGC.PROMPT_PLACEHOLDER"),
            onKeydown: Xs(ze(e.createNewPrompt, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "aria-label", "maxlength", "placeholder", "onKeydown", "onUpdate:modelValue"]), Oe(X("button", {
            class: "create",
            disabled: e.player.count === e.player.maxCount,
            onClick: t[5] || (t[5] = ze((...f) => e.createNewPrompt && e.createNewPrompt(...f), ["prevent"]))
        }, null, 8, Gne), [
            [c, "UGC.PROMPT_ADD"]
        ]), e.player.error ? (F(), W("div", {
            key: 1,
            class: "error",
            textContent: Me(e.player.error)
        }, null, 8, jne)) : ve("", !0)])) : ve("", !0), e.player.validActions.includes("title") ? (F(), W(qe, {
            key: 1
        }, [X("label", Wne, [Oe(X("span", null, null, 512), [
            [c, "UGC.INSTRUCTION.CREATE_TITLE"]
        ])]), X("div", Vne, [e.titleCharacterCount != null ? (F(), W("div", {
            key: 0,
            textContent: Me(e.titleCharacterCount)
        }, null, 8, Kne)) : ve("", !0), pt(l, {
            ref: "title",
            modelValue: e.titleText,
            "onUpdate:modelValue": [t[6] || (t[6] = f => e.titleText = f), e.onInputTitle],
            maxlength: e.player.maxTitleLength,
            placeholder: e.$t("UGC.TITLE_PLACEHOLDER"),
            onKeydown: Xs(ze(e.createNewEpisode, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "maxlength", "placeholder", "onKeydown", "onUpdate:modelValue"]), Oe(X("button", {
            class: "create",
            onClick: t[7] || (t[7] = ze((...f) => e.createNewEpisode && e.createNewEpisode(...f), ["prevent"]))
        }, null, 512), [
            [c, "ACTION.CREATE"]
        ])])], 64)) : ve("", !0), e.player.validActions.includes("close") ? Oe((F(), W("button", {
            key: 2,
            class: "action-button close",
            onClick: t[8] || (t[8] = ze(f => e.onAction("close"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.CLOSE"]
        ]) : ve("", !0), e.player.validActions.includes("unlock") ? Oe((F(), W("button", {
            key: 3,
            class: "action-button unlock",
            onClick: t[9] || (t[9] = ze(f => e.onAction("unlock"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.EDIT"]
        ]) : ve("", !0), e.player.validActions.includes("done") ? Oe((F(), W("button", {
            key: 4,
            class: "action-button done",
            onClick: t[10] || (t[10] = ze(f => e.onAction("done"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.DONE"]
        ]) : ve("", !0), e.player.validActions.includes("submit") ? Oe((F(), W("button", {
            key: 5,
            class: "action-button submit",
            onClick: t[11] || (t[11] = ze((...f) => e.showTermsOfService && e.showTermsOfService(...f), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.PUBLISH"]
        ]) : ve("", !0), e.player.validActions.includes("play") ? Oe((F(), W("button", {
            key: 6,
            class: "action-button play",
            onClick: t[12] || (t[12] = ze(f => e.onAction("play"), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.PLAY"]
        ]) : ve("", !0), e.player.validActions.includes("remove-content") ? Oe((F(), W("button", {
            key: 7,
            class: "action-button delete",
            onClick: t[13] || (t[13] = ze((...f) => e.confirmDeleteEpisode && e.confirmDeleteEpisode(...f), ["prevent"]))
        }, null, 512)), [
            [c, "ACTION.DELETE"]
        ]) : ve("", !0), e.player.validActions.includes("exit") ? Oe((F(), W("button", {
            key: 8,
            class: "action-button back",
            onClick: t[14] || (t[14] = ze(f => e.onAction("exit"), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.BACK_TO_MENU"]
        ]) : ve("", !0), e.player.validActions.includes("episodes") ? Oe((F(), W("button", {
            key: 9,
            class: "action-button back",
            onClick: t[15] || (t[15] = ze(f => e.onAction("episodes"), ["prevent"]))
        }, null, 512)), [
            [c, "UGC.BACK_TO_EPISODES"]
        ]) : ve("", !0), e.player.validActions.includes("remove") ? (F(), W("div", Hne, [X("span", {
            textContent: Me(e.promptsCount)
        }, null, 8, qne), (F(!0), W(qe, null, hn(e.player.prompts, (f, d) => (F(), W("div", {
            key: d
        }, [X("button", {
            class: Ve(["player-prompt", {
                other: f.author !== e.userId,
                thriplash: f.type === "thriplash"
            }]),
            onClick: ze(p => e.onPromptClick(d), ["prevent"]),
            textContent: Me(f.text)
        }, null, 10, Yne)]))), 128))])) : ve("", !0)], 64)) : ve("", !0)])
    }
    const Xne = st(bne, [
            ["render", zne]
        ]),
        Jne = rt({
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
        Qne = e => (gc("data-v-22c1566a"), e = e(), mc(), e),
        Zne = {
            class: "voting"
        },
        eie = {
            class: "prompt"
        },
        tie = {
            class: "instructions"
        },
        rie = Qne(() => X("br", null, null, -1)),
        nie = ["disabled", "onClick"];

    function iie(e, t, r, n, s, a) {
        const l = Mt("bb");
        return F(), W("div", Zne, [Oe(X("div", eie, null, 512), [
            [l, e.player.prompt]
        ]), X("div", tie, [e.hasSubmit && e.selected ? (F(), W(qe, {
            key: 0
        }, [Ur(Me(e.$t("VOTING.THANKS")) + " ", 1), rie, Oe(X("span", null, null, 512), [
            [l, e.selected.text]
        ])], 64)) : (F(), W(qe, {
            key: 1
        }, [Ur(Me(e.$t("VOTING.INSTRUCTION")), 1)], 64))]), e.hasSubmit ? ve("", !0) : (F(!0), W(qe, {
            key: 0
        }, hn(e.player.choices, c => Oe((F(), W("button", {
            key: `choice-${c.choiceIndex}`,
            type: "submit",
            class: Ve(["choice", {
                selected: e.selected && e.selected.choiceIndex === c.choiceIndex
            }]),
            disabled: e.isSubmitting,
            onClick: ze(f => e.onChoose(c), ["prevent"])
        }, null, 10, nie)), [
            [l, c.text]
        ])), 128))])
    }
    const sie = st(Jne, [
            ["render", iie],
            ["__scopeId", "data-v-22c1566a"]
        ]),
        aie = rt({
            components: {
                GalleryLink: MO
            },
            props: {
                artifact: Object,
                player: Object
            }
        }),
        oie = "main/tjsp/quiplash3/assets/88bd6ad9.png",
        lie = "main/tjsp/quiplash3/assets/4382ada0.png",
        cie = "main/tjsp/quiplash3/assets/f0aa81d5.png",
        uie = "main/tjsp/quiplash3/assets/4da08de2.png",
        fie = {
            class: "waiting"
        },
        die = {
            class: "logo"
        },
        hie = ["alt"],
        pie = ["alt"],
        gie = ["alt"],
        mie = ["alt"],
        vie = {
            key: 0,
            class: "message"
        };

    function yie(e, t, r, n, s, a) {
        var f, d, p, y;
        const l = Zt("GalleryLink"),
            c = Mt("bb");
        return F(), W("div", fie, [X("div", die, [((f = e.player) == null ? void 0 : f.round) === 1 ? (F(), W("img", {
            key: 0,
            class: "round",
            alt: e.$t("ALT.LOGO_1"),
            src: oie
        }, null, 8, hie)) : ((d = e.player) == null ? void 0 : d.round) === 2 ? (F(), W("img", {
            key: 1,
            class: "round",
            alt: e.$t("ALT.LOGO_2"),
            src: lie
        }, null, 8, pie)) : ((p = e.player) == null ? void 0 : p.round) === 3 ? (F(), W("img", {
            key: 2,
            class: "round",
            alt: e.$t("ALT.LOGO_3"),
            src: cie
        }, null, 8, gie)) : (F(), W("img", {
            key: 3,
            alt: e.$t("ALT.LOGO_GAME"),
            src: uie
        }, null, 8, mie))]), (y = e.player) != null && y.message ? Oe((F(), W("p", vie, null, 512)), [
            [c, e.player.message]
        ]) : ve("", !0), e.artifact ? (F(), xr(l, {
            key: 1,
            artifact: e.artifact
        }, null, 8, ["artifact"])) : ve("", !0)])
    }
    const _ie = st(aie, [
            ["render", yie],
            ["__scopeId", "data-v-44332b15"]
        ]),
        Eie = rt({
            components: {
                TextArea: Cp
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
                        e instanceof ns.EcastFilterError || this.$handleEcastError(e)
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
                    } = n8(e, this.player.maxLength);
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
                        if (this.isSubmitting = !1, e instanceof ns.EcastFilterError) {
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
        bie = {
            class: "writing"
        },
        Tie = {
            class: "prompt-counter"
        },
        Aie = {
            for: "textarea",
            class: "prompt"
        },
        Oie = {
            class: "character-counter"
        },
        Sie = ["textContent"],
        wie = ["disabled"],
        Cie = {
            key: 0,
            class: "safety-quip"
        },
        Iie = ["disabled"];

    function $ie(e, t, r, n, s, a) {
        const l = Zt("TextArea"),
            c = Mt("bb"),
            f = Mt("t");
        return F(), W("div", bie, [X("div", Tie, [e.player.isThriplash ? (F(), W(qe, {
            key: 0
        }, [Ur(Me(e.$t("WRITING.PROMPT_FINAL")), 1)], 64)) : (F(), W(qe, {
            key: 1
        }, [Ur(Me(e.$t("WRITING.PROMPT_COUNTER", {
            current: e.player.promptNumber,
            total: e.player.promptTotal
        })), 1)], 64))]), X("form", {
            onSubmit: t[0] || (t[0] = ze((...d) => e.onSubmit && e.onSubmit(...d), ["prevent"]))
        }, [Oe(X("label", Aie, null, 512), [
            [c, e.player.prompt]
        ]), (F(!0), W(qe, null, hn(e.answers, (d, p) => (F(), W("div", {
            key: `answer${p}`,
            class: "answer"
        }, [X("div", Oie, Me(e.answers[p].charCount) + "/" + Me(e.player.maxLength), 1), pt(l, {
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
            spellcheck: "false",
            onKeydown: Xs(ze(y => e.focusNext(p), ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "enterkeyhint", "placeholder", "onKeydown"])]))), 128)), e.error ? (F(), W("span", {
            key: 0,
            textContent: Me(e.error)
        }, null, 8, Sie)) : ve("", !0), Oe(X("button", {
            class: "submit",
            type: "submit",
            disabled: e.isSubmitting
        }, null, 8, wie), [
            [f, "ACTION.SUBMIT"]
        ])], 32), e.player.isThriplash ? ve("", !0) : (F(), W("div", Cie, [Oe(X("span", null, null, 512), [
            [f, "WRITING.SAFETY_QUIP_LABEL"]
        ]), Oe(X("button", {
            type: "submit",
            disabled: e.isSubmitting,
            onClick: t[1] || (t[1] = ze((...d) => e.onSafetyQuip && e.onSafetyQuip(...d), ["prevent"]))
        }, null, 8, Iie), [
            [f, "WRITING.SAFETY_QUIP_SUBMIT"]
        ])]))])
    }
    const Rie = st(Eie, [
            ["render", $ie],
            ["__scopeId", "data-v-2bcc023a"]
        ]),
        ib = {
            isWaiting(e) {
                return e.kind === "waiting"
            }
        },
        Lie = rt({
            components: {
                NameHeader: mne,
                Lobby: une,
                PostGame: Ene,
                Ugc: Xne,
                Voting: sie,
                Waiting: _ie,
                Writing: Rie
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
                    return e ? ib.isWaiting(e) ? e.round == null ? "logo" : "round" : this.theme : ""
                },
                guards: () => ib,
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
        Nie = {
            class: "constrain"
        };

    function Pie(e, t, r, n, s, a) {
        const l = Zt("NameHeader");
        return F(), W("div", {
            class: Ve(["quiplash3", e.theme])
        }, [e.info ? (F(), xr(l, {
            key: 0,
            class: "name-header",
            avatar: e.info.avatar && e.avatarImages[e.avatarName],
            name: e.info.name
        }, null, 8, ["avatar", "name"])) : e.audience ? (F(), xr(l, {
            key: 1,
            class: "name-header",
            name: e.$t("AUDIENCE.NAME")
        }, null, 8, ["name"])) : ve("", !0), X("div", {
            class: Ve(["stage", e.background])
        }, [X("div", Nie, [(F(), xr(Nh(e.screen.name), ML(iT(e.screen.props)), null, 16))])], 2)], 2)
    }
    const kie = st(Lie, [
        ["render", Pie]
    ]);
    pre({
        MainView: kie,
        messages: Kre,
        plugins: [ob]
    })
});
export default Die();
//# sourceMappingURL=2393ad9e.js.map