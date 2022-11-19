var Ko = Object.defineProperty;
var Xo = (t, e, r) => e in t ? Ko(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var Qo = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var G = (t, e, r) => (Xo(t, typeof e != "symbol" ? e + "" : e, r), r);
var ow = Qo((uw, Fo) => {
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
        new MutationObserver(i => {
            for (const a of i)
                if (a.type === "childList")
                    for (const s of a.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function r(i) {
            const a = {};
            return i.integrity && (a.integrity = i.integrity), i.referrerpolicy && (a.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? a.credentials = "include" : i.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
        }

        function n(i) {
            if (i.ep) return;
            i.ep = !0;
            const a = r(i);
            fetch(i.href, a)
        }
    })();
    class Ta {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            })
        }
        static pageView(e) {
            gtag("event", "page_view", {
                page_title: e,
                page_location: `https://jackbox.tv/${e}`
            })
        }
        static gameStarted(e, r) {
            const n = {
                tag: e
            };
            r.isUGC !== void 0 && (n.is_ugc = r.isUGC), r.isSequel !== void 0 && (n.is_sequel = r.isSequel), r.locale !== void 0 && (n.locale = r.locale), r.mode !== void 0 && (n.mode = r.mode), r.numberOfPlayer !== void 0 && (n.number_of_players = r.numberOfPlayer), gtag("event", "game_start", n)
        }
        static bannerClick(e, r) {
            gtag("event", "banner_click", {
                url: e,
                location: r
            })
        }
        static externalLinkClick(e, r) {
            gtag("event", "external_link_click", {
                url: e,
                location: r
            })
        }
        static galleryClick(e, r) {
            gtag("event", "gallery_click", {
                category_id: e,
                location: r
            })
        }
        static galleryImpression(e, r) {
            gtag("event", "gallery_impression", {
                category_id: e,
                location: r
            })
        }
        static moderatorConnected(e) {
            gtag("event", "moderator_connected", {
                tag: e
            })
        }
        static itemModerated(e, r) {
            gtag("event", "item_moderated", {
                tag: e,
                was_rejected: r
            })
        }
        static playerKicked(e, r) {
            gtag("event", "player_kicked", {
                tag: e,
                is_lobby: r
            })
        }
    }
    var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Zo(t) {
        var e = t.default;
        if (typeof e == "function") {
            var r = function() {
                return e.apply(this, arguments)
            };
            r.prototype = e.prototype
        } else r = {};
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.keys(t).forEach(function(n) {
            var i = Object.getOwnPropertyDescriptor(t, n);
            Object.defineProperty(r, n, i.get ? i : {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }), r
    }

    function ec() {
        this.__data__ = [], this.size = 0
    }
    var tc = ec;

    function rc(t, e) {
        return t === e || t !== t && e !== e
    }
    var cr = rc,
        nc = cr;

    function ic(t, e) {
        for (var r = t.length; r--;)
            if (nc(t[r][0], e)) return r;
        return -1
    }
    var ur = ic,
        ac = ur,
        sc = Array.prototype,
        oc = sc.splice;

    function cc(t) {
        var e = this.__data__,
            r = ac(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : oc.call(e, r, 1), --this.size, !0
    }
    var uc = cc,
        lc = ur;

    function fc(t) {
        var e = this.__data__,
            r = lc(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var dc = fc,
        hc = ur;

    function pc(t) {
        return hc(this.__data__, t) > -1
    }
    var yc = pc,
        vc = ur;

    function mc(t, e) {
        var r = this.__data__,
            n = vc(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var gc = mc,
        _c = tc,
        bc = uc,
        Ec = dc,
        wc = yc,
        Sc = gc;

    function yt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    yt.prototype.clear = _c;
    yt.prototype.delete = bc;
    yt.prototype.get = Ec;
    yt.prototype.has = wc;
    yt.prototype.set = Sc;
    var lr = yt,
        Oc = lr;

    function kc() {
        this.__data__ = new Oc, this.size = 0
    }
    var Rc = kc;

    function Tc(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var $c = Tc;

    function Pc(t) {
        return this.__data__.get(t)
    }
    var Ic = Pc;

    function Ac(t) {
        return this.__data__.has(t)
    }
    var xc = Ac,
        Nc = typeof ve == "object" && ve && ve.Object === Object && ve,
        $a = Nc,
        Lc = $a,
        Cc = typeof self == "object" && self && self.Object === Object && self,
        Dc = Lc || Cc || Function("return this")(),
        vt = Dc,
        jc = vt,
        Mc = jc.Symbol,
        Pa = Mc,
        ci = Pa,
        Ia = Object.prototype,
        Bc = Ia.hasOwnProperty,
        Uc = Ia.toString,
        St = ci ? ci.toStringTag : void 0;

    function Fc(t) {
        var e = Bc.call(t, St),
            r = t[St];
        try {
            t[St] = void 0;
            var n = !0
        } catch {}
        var i = Uc.call(t);
        return n && (e ? t[St] = r : delete t[St]), i
    }
    var Gc = Fc,
        qc = Object.prototype,
        Hc = qc.toString;

    function Wc(t) {
        return Hc.call(t)
    }
    var Yc = Wc,
        ui = Pa,
        zc = Gc,
        Jc = Yc,
        Vc = "[object Null]",
        Kc = "[object Undefined]",
        li = ui ? ui.toStringTag : void 0;

    function Xc(t) {
        return t == null ? t === void 0 ? Kc : Vc : li && li in Object(t) ? zc(t) : Jc(t)
    }
    var fr = Xc;

    function Qc(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var Ye = Qc,
        Zc = fr,
        eu = Ye,
        tu = "[object AsyncFunction]",
        ru = "[object Function]",
        nu = "[object GeneratorFunction]",
        iu = "[object Proxy]";

    function au(t) {
        if (!eu(t)) return !1;
        var e = Zc(t);
        return e == ru || e == nu || e == tu || e == iu
    }
    var gn = au,
        su = vt,
        ou = su["__core-js_shared__"],
        cu = ou,
        kr = cu,
        fi = function() {
            var t = /[^.]+$/.exec(kr && kr.keys && kr.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function uu(t) {
        return !!fi && fi in t
    }
    var lu = uu,
        fu = Function.prototype,
        du = fu.toString;

    function hu(t) {
        if (t != null) {
            try {
                return du.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var pu = hu,
        yu = gn,
        vu = lu,
        mu = Ye,
        gu = pu,
        _u = /[\\^$.*+?()[\]{}|]/g,
        bu = /^\[object .+?Constructor\]$/,
        Eu = Function.prototype,
        wu = Object.prototype,
        Su = Eu.toString,
        Ou = wu.hasOwnProperty,
        ku = RegExp("^" + Su.call(Ou).replace(_u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function Ru(t) {
        if (!mu(t) || vu(t)) return !1;
        var e = yu(t) ? ku : bu;
        return e.test(gu(t))
    }
    var Tu = Ru;

    function $u(t, e) {
        return t == null ? void 0 : t[e]
    }
    var Pu = $u,
        Iu = Tu,
        Au = Pu;

    function xu(t, e) {
        var r = Au(t, e);
        return Iu(r) ? r : void 0
    }
    var _n = xu,
        Nu = _n,
        Lu = vt,
        Cu = Nu(Lu, "Map"),
        Aa = Cu,
        Du = _n,
        ju = Du(Object, "create"),
        dr = ju,
        di = dr;

    function Mu() {
        this.__data__ = di ? di(null) : {}, this.size = 0
    }
    var Bu = Mu;

    function Uu(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var Fu = Uu,
        Gu = dr,
        qu = "__lodash_hash_undefined__",
        Hu = Object.prototype,
        Wu = Hu.hasOwnProperty;

    function Yu(t) {
        var e = this.__data__;
        if (Gu) {
            var r = e[t];
            return r === qu ? void 0 : r
        }
        return Wu.call(e, t) ? e[t] : void 0
    }
    var zu = Yu,
        Ju = dr,
        Vu = Object.prototype,
        Ku = Vu.hasOwnProperty;

    function Xu(t) {
        var e = this.__data__;
        return Ju ? e[t] !== void 0 : Ku.call(e, t)
    }
    var Qu = Xu,
        Zu = dr,
        el = "__lodash_hash_undefined__";

    function tl(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Zu && e === void 0 ? el : e, this
    }
    var rl = tl,
        nl = Bu,
        il = Fu,
        al = zu,
        sl = Qu,
        ol = rl;

    function mt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    mt.prototype.clear = nl;
    mt.prototype.delete = il;
    mt.prototype.get = al;
    mt.prototype.has = sl;
    mt.prototype.set = ol;
    var cl = mt,
        hi = cl,
        ul = lr,
        ll = Aa;

    function fl() {
        this.size = 0, this.__data__ = {
            hash: new hi,
            map: new(ll || ul),
            string: new hi
        }
    }
    var dl = fl;

    function hl(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var pl = hl,
        yl = pl;

    function vl(t, e) {
        var r = t.__data__;
        return yl(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var hr = vl,
        ml = hr;

    function gl(t) {
        var e = ml(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var _l = gl,
        bl = hr;

    function El(t) {
        return bl(this, t).get(t)
    }
    var wl = El,
        Sl = hr;

    function Ol(t) {
        return Sl(this, t).has(t)
    }
    var kl = Ol,
        Rl = hr;

    function Tl(t, e) {
        var r = Rl(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var $l = Tl,
        Pl = dl,
        Il = _l,
        Al = wl,
        xl = kl,
        Nl = $l;

    function gt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    gt.prototype.clear = Pl;
    gt.prototype.delete = Il;
    gt.prototype.get = Al;
    gt.prototype.has = xl;
    gt.prototype.set = Nl;
    var Ll = gt,
        Cl = lr,
        Dl = Aa,
        jl = Ll,
        Ml = 200;

    function Bl(t, e) {
        var r = this.__data__;
        if (r instanceof Cl) {
            var n = r.__data__;
            if (!Dl || n.length < Ml - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new jl(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var Ul = Bl,
        Fl = lr,
        Gl = Rc,
        ql = $c,
        Hl = Ic,
        Wl = xc,
        Yl = Ul;

    function _t(t) {
        var e = this.__data__ = new Fl(t);
        this.size = e.size
    }
    _t.prototype.clear = Gl;
    _t.prototype.delete = ql;
    _t.prototype.get = Hl;
    _t.prototype.has = Wl;
    _t.prototype.set = Yl;
    var zl = _t,
        Jl = _n,
        Vl = function() {
            try {
                var t = Jl(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        xa = Vl,
        pi = xa;

    function Kl(t, e, r) {
        e == "__proto__" && pi ? pi(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var bn = Kl,
        Xl = bn,
        Ql = cr;

    function Zl(t, e, r) {
        (r !== void 0 && !Ql(t[e], r) || r === void 0 && !(e in t)) && Xl(t, e, r)
    }
    var Na = Zl;

    function ef(t) {
        return function(e, r, n) {
            for (var i = -1, a = Object(e), s = n(e), o = s.length; o--;) {
                var c = s[t ? o : ++i];
                if (r(a[c], c, a) === !1) break
            }
            return e
        }
    }
    var tf = ef,
        rf = tf,
        nf = rf(),
        af = nf,
        Jr = {
            exports: {}
        };
    (function(t, e) {
        var r = vt,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            a = i && i.exports === n,
            s = a ? r.Buffer : void 0,
            o = s ? s.allocUnsafe : void 0;

        function c(f, y) {
            if (y) return f.slice();
            var m = f.length,
                w = o ? o(m) : new f.constructor(m);
            return f.copy(w), w
        }
        t.exports = c
    })(Jr, Jr.exports);
    var sf = vt,
        of = sf.Uint8Array,
        cf = of,
        yi = cf;

    function uf(t) {
        var e = new t.constructor(t.byteLength);
        return new yi(e).set(new yi(t)), e
    }
    var lf = uf,
        ff = lf;

    function df(t, e) {
        var r = e ? ff(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var hf = df;

    function pf(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var yf = pf,
        vf = Ye,
        vi = Object.create,
        mf = function() {
            function t() {}
            return function(e) {
                if (!vf(e)) return {};
                if (vi) return vi(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        gf = mf;

    function _f(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var bf = _f,
        Ef = bf,
        wf = Ef(Object.getPrototypeOf, Object),
        La = wf,
        Sf = Object.prototype;

    function Of(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || Sf;
        return t === r
    }
    var Ca = Of,
        kf = gf,
        Rf = La,
        Tf = Ca;

    function $f(t) {
        return typeof t.constructor == "function" && !Tf(t) ? kf(Rf(t)) : {}
    }
    var Pf = $f;

    function If(t) {
        return t != null && typeof t == "object"
    }
    var Ct = If,
        Af = fr,
        xf = Ct,
        Nf = "[object Arguments]";

    function Lf(t) {
        return xf(t) && Af(t) == Nf
    }
    var Cf = Lf,
        mi = Cf,
        Df = Ct,
        Da = Object.prototype,
        jf = Da.hasOwnProperty,
        Mf = Da.propertyIsEnumerable,
        Bf = mi(function() {
            return arguments
        }()) ? mi : function(t) {
            return Df(t) && jf.call(t, "callee") && !Mf.call(t, "callee")
        },
        ja = Bf,
        Uf = Array.isArray,
        Ma = Uf,
        Ff = 9007199254740991;

    function Gf(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ff
    }
    var Ba = Gf,
        qf = gn,
        Hf = Ba;

    function Wf(t) {
        return t != null && Hf(t.length) && !qf(t)
    }
    var En = Wf,
        Yf = En,
        zf = Ct;

    function Jf(t) {
        return zf(t) && Yf(t)
    }
    var Vf = Jf,
        Vt = {
            exports: {}
        };

    function Kf() {
        return !1
    }
    var Xf = Kf;
    (function(t, e) {
        var r = vt,
            n = Xf,
            i = e && !e.nodeType && e,
            a = i && !0 && t && !t.nodeType && t,
            s = a && a.exports === i,
            o = s ? r.Buffer : void 0,
            c = o ? o.isBuffer : void 0,
            f = c || n;
        t.exports = f
    })(Vt, Vt.exports);
    var Qf = fr,
        Zf = La,
        ed = Ct,
        td = "[object Object]",
        rd = Function.prototype,
        nd = Object.prototype,
        Ua = rd.toString,
        id = nd.hasOwnProperty,
        ad = Ua.call(Object);

    function sd(t) {
        if (!ed(t) || Qf(t) != td) return !1;
        var e = Zf(t);
        if (e === null) return !0;
        var r = id.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && Ua.call(r) == ad
    }
    var od = sd,
        cd = fr,
        ud = Ba,
        ld = Ct,
        fd = "[object Arguments]",
        dd = "[object Array]",
        hd = "[object Boolean]",
        pd = "[object Date]",
        yd = "[object Error]",
        vd = "[object Function]",
        md = "[object Map]",
        gd = "[object Number]",
        _d = "[object Object]",
        bd = "[object RegExp]",
        Ed = "[object Set]",
        wd = "[object String]",
        Sd = "[object WeakMap]",
        Od = "[object ArrayBuffer]",
        kd = "[object DataView]",
        Rd = "[object Float32Array]",
        Td = "[object Float64Array]",
        $d = "[object Int8Array]",
        Pd = "[object Int16Array]",
        Id = "[object Int32Array]",
        Ad = "[object Uint8Array]",
        xd = "[object Uint8ClampedArray]",
        Nd = "[object Uint16Array]",
        Ld = "[object Uint32Array]",
        q = {};
    q[Rd] = q[Td] = q[$d] = q[Pd] = q[Id] = q[Ad] = q[xd] = q[Nd] = q[Ld] = !0;
    q[fd] = q[dd] = q[Od] = q[hd] = q[kd] = q[pd] = q[yd] = q[vd] = q[md] = q[gd] = q[_d] = q[bd] = q[Ed] = q[wd] = q[Sd] = !1;

    function Cd(t) {
        return ld(t) && ud(t.length) && !!q[cd(t)]
    }
    var Dd = Cd;

    function jd(t) {
        return function(e) {
            return t(e)
        }
    }
    var Md = jd,
        Vr = {
            exports: {}
        };
    (function(t, e) {
        var r = $a,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            a = i && i.exports === n,
            s = a && r.process,
            o = function() {
                try {
                    var c = i && i.require && i.require("util").types;
                    return c || s && s.binding && s.binding("util")
                } catch {}
            }();
        t.exports = o
    })(Vr, Vr.exports);
    var Bd = Dd,
        Ud = Md,
        gi = Vr.exports,
        _i = gi && gi.isTypedArray,
        Fd = _i ? Ud(_i) : Bd,
        Fa = Fd;

    function Gd(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var Ga = Gd,
        qd = bn,
        Hd = cr,
        Wd = Object.prototype,
        Yd = Wd.hasOwnProperty;

    function zd(t, e, r) {
        var n = t[e];
        (!(Yd.call(t, e) && Hd(n, r)) || r === void 0 && !(e in t)) && qd(t, e, r)
    }
    var Jd = zd,
        Vd = Jd,
        Kd = bn;

    function Xd(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var a = -1, s = e.length; ++a < s;) {
            var o = e[a],
                c = n ? n(r[o], t[o], o, r, t) : void 0;
            c === void 0 && (c = t[o]), i ? Kd(r, o, c) : Vd(r, o, c)
        }
        return r
    }
    var Qd = Xd;

    function Zd(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var eh = Zd,
        th = 9007199254740991,
        rh = /^(?:0|[1-9]\d*)$/;

    function nh(t, e) {
        var r = typeof t;
        return e = e == null ? th : e, !!e && (r == "number" || r != "symbol" && rh.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var qa = nh,
        ih = eh,
        ah = ja,
        sh = Ma,
        oh = Vt.exports,
        ch = qa,
        uh = Fa,
        lh = Object.prototype,
        fh = lh.hasOwnProperty;

    function dh(t, e) {
        var r = sh(t),
            n = !r && ah(t),
            i = !r && !n && oh(t),
            a = !r && !n && !i && uh(t),
            s = r || n || i || a,
            o = s ? ih(t.length, String) : [],
            c = o.length;
        for (var f in t)(e || fh.call(t, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || ch(f, c))) && o.push(f);
        return o
    }
    var hh = dh;

    function ph(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var yh = ph,
        vh = Ye,
        mh = Ca,
        gh = yh,
        _h = Object.prototype,
        bh = _h.hasOwnProperty;

    function Eh(t) {
        if (!vh(t)) return gh(t);
        var e = mh(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !bh.call(t, n)) || r.push(n);
        return r
    }
    var wh = Eh,
        Sh = hh,
        Oh = wh,
        kh = En;

    function Rh(t) {
        return kh(t) ? Sh(t, !0) : Oh(t)
    }
    var Ha = Rh,
        Th = Qd,
        $h = Ha;

    function Ph(t) {
        return Th(t, $h(t))
    }
    var Ih = Ph,
        bi = Na,
        Ah = Jr.exports,
        xh = hf,
        Nh = yf,
        Lh = Pf,
        Ei = ja,
        wi = Ma,
        Ch = Vf,
        Dh = Vt.exports,
        jh = gn,
        Mh = Ye,
        Bh = od,
        Uh = Fa,
        Si = Ga,
        Fh = Ih;

    function Gh(t, e, r, n, i, a, s) {
        var o = Si(t, r),
            c = Si(e, r),
            f = s.get(c);
        if (f) {
            bi(t, r, f);
            return
        }
        var y = a ? a(o, c, r + "", t, e, s) : void 0,
            m = y === void 0;
        if (m) {
            var w = wi(c),
                O = !w && Dh(c),
                k = !w && !O && Uh(c);
            y = c, w || O || k ? wi(o) ? y = o : Ch(o) ? y = Nh(o) : O ? (m = !1, y = Ah(c, !0)) : k ? (m = !1, y = xh(c, !0)) : y = [] : Bh(c) || Ei(c) ? (y = o, Ei(o) ? y = Fh(o) : (!Mh(o) || jh(o)) && (y = Lh(c))) : m = !1
        }
        m && (s.set(c, y), i(y, c, n, a, s), s.delete(c)), bi(t, r, y)
    }
    var qh = Gh,
        Hh = zl,
        Wh = Na,
        Yh = af,
        zh = qh,
        Jh = Ye,
        Vh = Ha,
        Kh = Ga;

    function Wa(t, e, r, n, i) {
        t !== e && Yh(e, function(a, s) {
            if (i || (i = new Hh), Jh(a)) zh(t, e, s, r, Wa, n, i);
            else {
                var o = n ? n(Kh(t, s), a, s + "", t, e, i) : void 0;
                o === void 0 && (o = a), Wh(t, s, o)
            }
        }, Vh)
    }
    var Xh = Wa;

    function Qh(t) {
        return t
    }
    var Ya = Qh;

    function Zh(t, e, r) {
        switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
    }
    var ep = Zh,
        tp = ep,
        Oi = Math.max;

    function rp(t, e, r) {
        return e = Oi(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, a = Oi(n.length - e, 0), s = Array(a); ++i < a;) s[i] = n[e + i];
                i = -1;
                for (var o = Array(e + 1); ++i < e;) o[i] = n[i];
                return o[e] = r(s), tp(t, this, o)
            }
    }
    var np = rp;

    function ip(t) {
        return function() {
            return t
        }
    }
    var ap = ip,
        sp = ap,
        ki = xa,
        op = Ya,
        cp = ki ? function(t, e) {
            return ki(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: sp(e),
                writable: !0
            })
        } : op,
        up = cp,
        lp = 800,
        fp = 16,
        dp = Date.now;

    function hp(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = dp(),
                i = fp - (n - r);
            if (r = n, i > 0) {
                if (++e >= lp) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var pp = hp,
        yp = up,
        vp = pp,
        mp = vp(yp),
        gp = mp,
        _p = Ya,
        bp = np,
        Ep = gp;

    function wp(t, e) {
        return Ep(bp(t, e, _p), t + "")
    }
    var Sp = wp,
        Op = cr,
        kp = En,
        Rp = qa,
        Tp = Ye;

    function $p(t, e, r) {
        if (!Tp(r)) return !1;
        var n = typeof e;
        return (n == "number" ? kp(r) && Rp(e, r.length) : n == "string" && e in r) ? Op(r[e], t) : !1
    }
    var Pp = $p,
        Ip = Sp,
        Ap = Pp;

    function xp(t) {
        return Ip(function(e, r) {
            var n = -1,
                i = r.length,
                a = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (a = t.length > 3 && typeof a == "function" ? (i--, a) : void 0, s && Ap(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++n < i;) {
                var o = r[n];
                o && t(e, o, n, a)
            }
            return e
        })
    }
    var Np = xp,
        Lp = Xh,
        Cp = Np;
    Cp(function(t, e, r) {
        Lp(t, e, r)
    });
    const ni = class {
        static get serverUrl() {
            var r;
            const e = (r = this.getQueryParam("server")) != null ? r : this.getQueryParam("s");
            return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
        }
        static get isCanvasSupported() {
            const e = document.createElement("canvas");
            return !!(e.getContext && e.getContext("2d"))
        }
        static toPrecision(e, r) {
            const n = 10 ** r;
            return Math.round((e + Number.EPSILON) * n) / n
        }
        static isProduction() {
            return window.location.hostname === "jackbox.tv"
        }
        static htmlUnescape(e) {
            return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
        }
        static htmlEscape(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        static sanitize(e) {
            const r = this.sanitizeInput(e).replace(/'/g, "\u2019");
            return this.htmlEscape(r).trim()
        }
        static sanitizeName(e) {
            return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
        }
        static sanitizeInput(e) {
            return e = e.replace("\u2026", "..."), e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
        }
        static sanitizeEmoji(e) {
            return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
        }
        static safeText(e) {
            const r = document.createElement("div");
            return r.textContent = e, r.innerHTML
        }
        static htmlTagsToBBCode(e, r) {
            if (!r.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
            return r.reduce((n, i) => (n.replaceAll(`<${i[0]}>`, `[${i[1]}]`), n.replaceAll(`</${i[0]}>`, `</${i[1]}>`), n), e)
        }
        static hexToRgb(e) {
            const r = new ArrayBuffer(4);
            new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
            const i = new Uint8Array(r);
            return `${i[1]},${i[2]},${i[3]}`
        }
        static adjustColor(e, r) {
            let n = !1,
                i = e;
            i[0] === "#" && (i = i.slice(1), n = !0);
            const a = parseInt(i, 16),
                s = Math.min(Math.max(0, (a >> 16) * r), 255),
                o = Math.min(Math.max(0, (a >> 8 & 255) * r), 255);
            let f = (Math.min(Math.max(0, (a & 255) * r), 255) | o << 8 | s << 16).toString(16);
            for (; f.length < i.length;) f = `0${f}`;
            return (n ? "#" : "") + f
        }
        static isInTolerance(e, r, n) {
            return !(Math.abs(e.x - r.x) < n || Math.abs(e.y - r.y) > n)
        }
        static getDistanceBetweenPoints(e, r) {
            const n = [e.x - r.x, e.y - r.y],
                i = Math.hypot(...n);
            return Math.round(i * 100) / 100
        }
        static getMidpoint(e, r) {
            return {
                x: (e.x + r.x) / 2,
                y: (e.y + r.y) / 2
            }
        }
        static getAngleBetweenPoints(e, r) {
            let i = Math.atan2(r.y - e.y, r.x - e.x) * (180 / Math.PI);
            return i < 0 && (i += 360), 360 - i
        }
        static getAngularDistance(e, r) {
            let n = (r - e) % 360;
            const i = n < 0 ? 1 : -1;
            return n = Math.abs(n), n > 180 ? i * (360 - n) : i * n
        }
        static getVelocity(e, r, n, i) {
            return this.getDistanceBetweenPoints(e, n) / (i - r)
        }
        static isInsideElement(e, r) {
            const n = r.getBoundingClientRect();
            return !(e.x < n.left || e.x > n.left + n.width || e.y < n.top || e.y > n.top + n.height)
        }
    };
    let Te = ni;
    G(Te, "queryParams", new URLSearchParams(window.location.search)), G(Te, "getQueryParam", e => ni.queryParams.get(e)), G(Te, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    class Kt {
        static get namespace() {
            var e, r;
            return (r = (e = window.tv.storage) == null ? void 0 : e.namespace) != null ? r : this.defaultNamespace
        }
        static get isDisabled() {
            var e, r;
            return (r = (e = window.tv.storage) == null ? void 0 : e.isDisabled) != null ? r : !1
        }
        static get tag() {
            var e;
            return (e = window.tv.storage) == null ? void 0 : e.tag
        }
        static get code() {
            var e;
            return (e = window.tv.storage) == null ? void 0 : e.code
        }
        static get isSupported() {
            if (this.isDisabled) return !1;
            try {
                return window.localStorage ? (window.localStorage.setItem("support-check", "1"), window.localStorage.removeItem("support-check"), !0) : !1
            } catch {
                return !1
            }
        }
        static setup(e, r) {
            var n, i;
            delete window.tv.storage, window.tv.storage = {
                namespace: (i = (n = Te.getQueryParam("namespace")) != null ? n : Te.getQueryParam("ns")) != null ? i : this.defaultNamespace,
                isDisabled: Te.queryParams.has("incognito") || Te.queryParams.has("nc")
            }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
        }
        static get(e, r) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
        }
        static set(e, r, n = "none") {
            if (!!this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, n), r)
        }
        static remove(e, r) {
            if (!!this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, r))
        }
        static setTag(e) {
            var s;
            const r = e.toLowerCase(),
                n = (s = this.get("tags")) != null ? s : "[]",
                i = r.split("-")[0];
            let a = JSON.parse(n);
            a = a.filter(o => {
                const c = o.split("-")[0];
                return i !== c
            }), a.push(r), this.set("tags", JSON.stringify(a))
        }
        static getScopedKey(e, r) {
            const n = `${this.namespace}:${e}`,
                i = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
                a = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
            if (r === "none") return n;
            if (r === "tag") {
                if (!i) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
                return i
            }
            if (r === "code") {
                if (!a) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return a
            }
            return a && window.localStorage.getItem(a) !== null ? a : i && window.localStorage.getItem(i) !== null ? i : n
        }
        static getScopedSetKey(e, r = "none") {
            if (r === "tag") {
                if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
                return `${this.namespace}:${e}:tag:${this.tag}`
            }
            if (r === "code") {
                if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return `${this.namespace}:${e}:code:${this.code}`
            }
            return `${this.namespace}:${e}`
        }
        static clearCodeScopedKeys(e) {
            !this.isSupported || Object.keys(window.localStorage).forEach(r => {
                const n = r.split(":code:");
                n.length <= 1 || n[1] !== e && window.localStorage.removeItem(r)
            })
        }
        static migrateNamespace(e, r) {
            !this.isSupported || Object.keys(window.localStorage).forEach(n => {
                if (!n.startsWith(`${e}-`)) return;
                const i = n.replace(`${e}-`, `${r}:`),
                    a = window.localStorage.getItem(n);
                !a || (window.localStorage.setItem(i, a), window.localStorage.removeItem(n))
            })
        }
    }
    G(Kt, "defaultNamespace", "tv");
    var Kr = {
        exports: {}
    };
    (function(t, e) {
        var r = typeof self < "u" ? self : ve,
            n = function() {
                function a() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return a.prototype = r, new a
            }();
        (function(a) {
            (function(s) {
                var o = {
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

                function c(v) {
                    return v && DataView.prototype.isPrototypeOf(v)
                }
                if (o.arrayBuffer) var f = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    y = ArrayBuffer.isView || function(v) {
                        return v && f.indexOf(Object.prototype.toString.call(v)) > -1
                    };

                function m(v) {
                    if (typeof v != "string" && (v = String(v)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(v)) throw new TypeError("Invalid character in header field name");
                    return v.toLowerCase()
                }

                function w(v) {
                    return typeof v != "string" && (v = String(v)), v
                }

                function O(v) {
                    var E = {
                        next: function() {
                            var $ = v.shift();
                            return {
                                done: $ === void 0,
                                value: $
                            }
                        }
                    };
                    return o.iterable && (E[Symbol.iterator] = function() {
                        return E
                    }), E
                }

                function k(v) {
                    this.map = {}, v instanceof k ? v.forEach(function(E, $) {
                        this.append($, E)
                    }, this) : Array.isArray(v) ? v.forEach(function(E) {
                        this.append(E[0], E[1])
                    }, this) : v && Object.getOwnPropertyNames(v).forEach(function(E) {
                        this.append(E, v[E])
                    }, this)
                }
                k.prototype.append = function(v, E) {
                    v = m(v), E = w(E);
                    var $ = this.map[v];
                    this.map[v] = $ ? $ + ", " + E : E
                }, k.prototype.delete = function(v) {
                    delete this.map[m(v)]
                }, k.prototype.get = function(v) {
                    return v = m(v), this.has(v) ? this.map[v] : null
                }, k.prototype.has = function(v) {
                    return this.map.hasOwnProperty(m(v))
                }, k.prototype.set = function(v, E) {
                    this.map[m(v)] = w(E)
                }, k.prototype.forEach = function(v, E) {
                    for (var $ in this.map) this.map.hasOwnProperty($) && v.call(E, this.map[$], $, this)
                }, k.prototype.keys = function() {
                    var v = [];
                    return this.forEach(function(E, $) {
                        v.push($)
                    }), O(v)
                }, k.prototype.values = function() {
                    var v = [];
                    return this.forEach(function(E) {
                        v.push(E)
                    }), O(v)
                }, k.prototype.entries = function() {
                    var v = [];
                    return this.forEach(function(E, $) {
                        v.push([$, E])
                    }), O(v)
                }, o.iterable && (k.prototype[Symbol.iterator] = k.prototype.entries);

                function U(v) {
                    if (v.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    v.bodyUsed = !0
                }

                function ee(v) {
                    return new Promise(function(E, $) {
                        v.onload = function() {
                            E(v.result)
                        }, v.onerror = function() {
                            $(v.error)
                        }
                    })
                }

                function N(v) {
                    var E = new FileReader,
                        $ = ee(E);
                    return E.readAsArrayBuffer(v), $
                }

                function te(v) {
                    var E = new FileReader,
                        $ = ee(E);
                    return E.readAsText(v), $
                }

                function ie(v) {
                    for (var E = new Uint8Array(v), $ = new Array(E.length), M = 0; M < E.length; M++) $[M] = String.fromCharCode(E[M]);
                    return $.join("")
                }

                function ue(v) {
                    if (v.slice) return v.slice(0);
                    var E = new Uint8Array(v.byteLength);
                    return E.set(new Uint8Array(v)), E.buffer
                }

                function pe() {
                    return this.bodyUsed = !1, this._initBody = function(v) {
                        this._bodyInit = v, v ? typeof v == "string" ? this._bodyText = v : o.blob && Blob.prototype.isPrototypeOf(v) ? this._bodyBlob = v : o.formData && FormData.prototype.isPrototypeOf(v) ? this._bodyFormData = v : o.searchParams && URLSearchParams.prototype.isPrototypeOf(v) ? this._bodyText = v.toString() : o.arrayBuffer && o.blob && c(v) ? (this._bodyArrayBuffer = ue(v.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(v) || y(v)) ? this._bodyArrayBuffer = ue(v) : this._bodyText = v = Object.prototype.toString.call(v) : this._bodyText = "", this.headers.get("content-type") || (typeof v == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(v) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, o.blob && (this.blob = function() {
                        var v = U(this);
                        if (v) return v;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? U(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(N)
                    }), this.text = function() {
                        var v = U(this);
                        if (v) return v;
                        if (this._bodyBlob) return te(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(ie(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, o.formData && (this.formData = function() {
                        return this.text().then(W)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var K = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function le(v) {
                    var E = v.toUpperCase();
                    return K.indexOf(E) > -1 ? E : v
                }

                function re(v, E) {
                    E = E || {};
                    var $ = E.body;
                    if (v instanceof re) {
                        if (v.bodyUsed) throw new TypeError("Already read");
                        this.url = v.url, this.credentials = v.credentials, E.headers || (this.headers = new k(v.headers)), this.method = v.method, this.mode = v.mode, this.signal = v.signal, !$ && v._bodyInit != null && ($ = v._bodyInit, v.bodyUsed = !0)
                    } else this.url = String(v);
                    if (this.credentials = E.credentials || this.credentials || "same-origin", (E.headers || !this.headers) && (this.headers = new k(E.headers)), this.method = le(E.method || this.method || "GET"), this.mode = E.mode || this.mode || null, this.signal = E.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && $) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody($)
                }
                re.prototype.clone = function() {
                    return new re(this, {
                        body: this._bodyInit
                    })
                };

                function W(v) {
                    var E = new FormData;
                    return v.trim().split("&").forEach(function($) {
                        if ($) {
                            var M = $.split("="),
                                C = M.shift().replace(/\+/g, " "),
                                A = M.join("=").replace(/\+/g, " ");
                            E.append(decodeURIComponent(C), decodeURIComponent(A))
                        }
                    }), E
                }

                function me(v) {
                    var E = new k,
                        $ = v.replace(/\r?\n[\t ]+/g, " ");
                    return $.split(/\r?\n/).forEach(function(M) {
                        var C = M.split(":"),
                            A = C.shift().trim();
                        if (A) {
                            var g = C.join(":").trim();
                            E.append(A, g)
                        }
                    }), E
                }
                pe.call(re.prototype);

                function Y(v, E) {
                    E || (E = {}), this.type = "default", this.status = E.status === void 0 ? 200 : E.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in E ? E.statusText : "OK", this.headers = new k(E.headers), this.url = E.url || "", this._initBody(v)
                }
                pe.call(Y.prototype), Y.prototype.clone = function() {
                    return new Y(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new k(this.headers),
                        url: this.url
                    })
                }, Y.error = function() {
                    var v = new Y(null, {
                        status: 0,
                        statusText: ""
                    });
                    return v.type = "error", v
                };
                var fe = [301, 302, 303, 307, 308];
                Y.redirect = function(v, E) {
                    if (fe.indexOf(E) === -1) throw new RangeError("Invalid status code");
                    return new Y(null, {
                        status: E,
                        headers: {
                            location: v
                        }
                    })
                }, s.DOMException = a.DOMException;
                try {
                    new s.DOMException
                } catch {
                    s.DOMException = function(E, $) {
                        this.message = E, this.name = $;
                        var M = Error(E);
                        this.stack = M.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function z(v, E) {
                    return new Promise(function($, M) {
                        var C = new re(v, E);
                        if (C.signal && C.signal.aborted) return M(new s.DOMException("Aborted", "AbortError"));
                        var A = new XMLHttpRequest;

                        function g() {
                            A.abort()
                        }
                        A.onload = function() {
                            var S = {
                                status: A.status,
                                statusText: A.statusText,
                                headers: me(A.getAllResponseHeaders() || "")
                            };
                            S.url = "responseURL" in A ? A.responseURL : S.headers.get("X-Request-URL");
                            var T = "response" in A ? A.response : A.responseText;
                            $(new Y(T, S))
                        }, A.onerror = function() {
                            M(new TypeError("Network request failed"))
                        }, A.ontimeout = function() {
                            M(new TypeError("Network request failed"))
                        }, A.onabort = function() {
                            M(new s.DOMException("Aborted", "AbortError"))
                        }, A.open(C.method, C.url, !0), C.credentials === "include" ? A.withCredentials = !0 : C.credentials === "omit" && (A.withCredentials = !1), "responseType" in A && o.blob && (A.responseType = "blob"), C.headers.forEach(function(S, T) {
                            A.setRequestHeader(T, S)
                        }), C.signal && (C.signal.addEventListener("abort", g), A.onreadystatechange = function() {
                            A.readyState === 4 && C.signal.removeEventListener("abort", g)
                        }), A.send(typeof C._bodyInit > "u" ? null : C._bodyInit)
                    })
                }
                return z.polyfill = !0, a.fetch || (a.fetch = z, a.Headers = k, a.Request = re, a.Response = Y), s.Headers = k, s.Request = re, s.Response = Y, s.fetch = z, Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = n;
        e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
    })(Kr, Kr.exports);
    var Dp = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var e = {},
                r = Symbol("test"),
                n = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var i = 42;
            e[r] = i;
            for (r in e) return !1;
            if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
            var a = Object.getOwnPropertySymbols(e);
            if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var s = Object.getOwnPropertyDescriptor(e, r);
                if (s.value !== i || s.enumerable !== !0) return !1
            }
            return !0
        },
        Ri = typeof Symbol < "u" && Symbol,
        jp = Dp,
        Mp = function() {
            return typeof Ri != "function" || typeof Symbol != "function" || typeof Ri("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : jp()
        },
        Bp = "Function.prototype.bind called on incompatible ",
        Rr = Array.prototype.slice,
        Up = Object.prototype.toString,
        Fp = "[object Function]",
        Gp = function(e) {
            var r = this;
            if (typeof r != "function" || Up.call(r) !== Fp) throw new TypeError(Bp + r);
            for (var n = Rr.call(arguments, 1), i, a = function() {
                    if (this instanceof i) {
                        var y = r.apply(this, n.concat(Rr.call(arguments)));
                        return Object(y) === y ? y : this
                    } else return r.apply(e, n.concat(Rr.call(arguments)))
                }, s = Math.max(0, r.length - n.length), o = [], c = 0; c < s; c++) o.push("$" + c);
            if (i = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
                var f = function() {};
                f.prototype = r.prototype, i.prototype = new f, f.prototype = null
            }
            return i
        },
        qp = Gp,
        wn = Function.prototype.bind || qp,
        Hp = wn,
        Wp = Hp.call(Function.call, Object.prototype.hasOwnProperty),
        L, ot = SyntaxError,
        za = Function,
        Ze = TypeError,
        Tr = function(t) {
            try {
                return za('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        He = Object.getOwnPropertyDescriptor;
    if (He) try {
        He({}, "")
    } catch {
        He = null
    }
    var $r = function() {
            throw new Ze
        },
        Yp = He ? function() {
            try {
                return arguments.callee, $r
            } catch {
                try {
                    return He(arguments, "callee").get
                } catch {
                    return $r
                }
            }
        }() : $r,
        Je = Mp(),
        $e = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        Ve = {},
        zp = typeof Uint8Array > "u" ? L : $e(Uint8Array),
        et = {
            "%AggregateError%": typeof AggregateError > "u" ? L : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? L : ArrayBuffer,
            "%ArrayIteratorPrototype%": Je ? $e([][Symbol.iterator]()) : L,
            "%AsyncFromSyncIteratorPrototype%": L,
            "%AsyncFunction%": Ve,
            "%AsyncGenerator%": Ve,
            "%AsyncGeneratorFunction%": Ve,
            "%AsyncIteratorPrototype%": Ve,
            "%Atomics%": typeof Atomics > "u" ? L : Atomics,
            "%BigInt%": typeof BigInt > "u" ? L : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? L : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? L : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? L : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? L : FinalizationRegistry,
            "%Function%": za,
            "%GeneratorFunction%": Ve,
            "%Int8Array%": typeof Int8Array > "u" ? L : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? L : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? L : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Je ? $e($e([][Symbol.iterator]())) : L,
            "%JSON%": typeof JSON == "object" ? JSON : L,
            "%Map%": typeof Map > "u" ? L : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Je ? L : $e(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? L : Promise,
            "%Proxy%": typeof Proxy > "u" ? L : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? L : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? L : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Je ? L : $e(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? L : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Je ? $e("" [Symbol.iterator]()) : L,
            "%Symbol%": Je ? Symbol : L,
            "%SyntaxError%": ot,
            "%ThrowTypeError%": Yp,
            "%TypedArray%": zp,
            "%TypeError%": Ze,
            "%Uint8Array%": typeof Uint8Array > "u" ? L : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? L : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? L : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? L : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? L : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? L : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? L : WeakSet
        },
        Jp = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = Tr("async function () {}");
            else if (e === "%GeneratorFunction%") r = Tr("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = Tr("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var i = t("%AsyncGenerator%");
                i && (r = $e(i.prototype))
            }
            return et[e] = r, r
        },
        Ti = {
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
        Dt = wn,
        Xt = Wp,
        Vp = Dt.call(Function.call, Array.prototype.concat),
        Kp = Dt.call(Function.apply, Array.prototype.splice),
        $i = Dt.call(Function.call, String.prototype.replace),
        Qt = Dt.call(Function.call, String.prototype.slice),
        Xp = Dt.call(Function.call, RegExp.prototype.exec),
        Qp = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        Zp = /\\(\\)?/g,
        ey = function(e) {
            var r = Qt(e, 0, 1),
                n = Qt(e, -1);
            if (r === "%" && n !== "%") throw new ot("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new ot("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return $i(e, Qp, function(a, s, o, c) {
                i[i.length] = o ? $i(c, Zp, "$1") : s || a
            }), i
        },
        ty = function(e, r) {
            var n = e,
                i;
            if (Xt(Ti, n) && (i = Ti[n], n = "%" + i[0] + "%"), Xt(et, n)) {
                var a = et[n];
                if (a === Ve && (a = Jp(n)), typeof a > "u" && !r) throw new Ze("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: a
                }
            }
            throw new ot("intrinsic " + e + " does not exist!")
        },
        Sn = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new Ze("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Ze('"allowMissing" argument must be a boolean');
            if (Xp(/^%?[^%]*%?$/g, e) === null) throw new ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = ey(e),
                i = n.length > 0 ? n[0] : "",
                a = ty("%" + i + "%", r),
                s = a.name,
                o = a.value,
                c = !1,
                f = a.alias;
            f && (i = f[0], Kp(n, Vp([0, 1], f)));
            for (var y = 1, m = !0; y < n.length; y += 1) {
                var w = n[y],
                    O = Qt(w, 0, 1),
                    k = Qt(w, -1);
                if ((O === '"' || O === "'" || O === "`" || k === '"' || k === "'" || k === "`") && O !== k) throw new ot("property names with quotes must have matching quotes");
                if ((w === "constructor" || !m) && (c = !0), i += "." + w, s = "%" + i + "%", Xt(et, s)) o = et[s];
                else if (o != null) {
                    if (!(w in o)) {
                        if (!r) throw new Ze("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (He && y + 1 >= n.length) {
                        var U = He(o, w);
                        m = !!U, m && "get" in U && !("originalValue" in U.get) ? o = U.get : o = o[w]
                    } else m = Xt(o, w), o = o[w];
                    m && !c && (et[s] = o)
                }
            }
            return o
        },
        Ja = {
            exports: {}
        };
    (function(t) {
        var e = wn,
            r = Sn,
            n = r("%Function.prototype.apply%"),
            i = r("%Function.prototype.call%"),
            a = r("%Reflect.apply%", !0) || e.call(i, n),
            s = r("%Object.getOwnPropertyDescriptor%", !0),
            o = r("%Object.defineProperty%", !0),
            c = r("%Math.max%");
        if (o) try {
            o({}, "a", {
                value: 1
            })
        } catch {
            o = null
        }
        t.exports = function(m) {
            var w = a(e, i, arguments);
            if (s && o) {
                var O = s(w, "length");
                O.configurable && o(w, "length", {
                    value: 1 + c(0, m.length - (arguments.length - 1))
                })
            }
            return w
        };
        var f = function() {
            return a(e, n, arguments)
        };
        o ? o(t.exports, "apply", {
            value: f
        }) : t.exports.apply = f
    })(Ja);
    var Va = Sn,
        Ka = Ja.exports,
        ry = Ka(Va("String.prototype.indexOf")),
        ny = function(e, r) {
            var n = Va(e, !!r);
            return typeof n == "function" && ry(e, ".prototype.") > -1 ? Ka(n) : n
        };
    const iy = {},
        ay = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: iy
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        sy = Zo(ay);
    var On = typeof Map == "function" && Map.prototype,
        Pr = Object.getOwnPropertyDescriptor && On ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Zt = On && Pr && typeof Pr.get == "function" ? Pr.get : null,
        oy = On && Map.prototype.forEach,
        kn = typeof Set == "function" && Set.prototype,
        Ir = Object.getOwnPropertyDescriptor && kn ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        er = kn && Ir && typeof Ir.get == "function" ? Ir.get : null,
        cy = kn && Set.prototype.forEach,
        uy = typeof WeakMap == "function" && WeakMap.prototype,
        Rt = uy ? WeakMap.prototype.has : null,
        ly = typeof WeakSet == "function" && WeakSet.prototype,
        Tt = ly ? WeakSet.prototype.has : null,
        fy = typeof WeakRef == "function" && WeakRef.prototype,
        Pi = fy ? WeakRef.prototype.deref : null,
        dy = Boolean.prototype.valueOf,
        hy = Object.prototype.toString,
        py = Function.prototype.toString,
        yy = String.prototype.match,
        Rn = String.prototype.slice,
        xe = String.prototype.replace,
        vy = String.prototype.toUpperCase,
        Ii = String.prototype.toLowerCase,
        Xa = RegExp.prototype.test,
        Ai = Array.prototype.concat,
        Se = Array.prototype.join,
        my = Array.prototype.slice,
        xi = Math.floor,
        Xr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Ar = Object.getOwnPropertySymbols,
        Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        ct = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        oe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ct ? "object" : "symbol") ? Symbol.toStringTag : null,
        Qa = Object.prototype.propertyIsEnumerable,
        Ni = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
            return t.__proto__
        } : null);

    function Li(t, e) {
        if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Xa.call(/e/, e)) return e;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof t == "number") {
            var n = t < 0 ? -xi(-t) : xi(t);
            if (n !== t) {
                var i = String(n),
                    a = Rn.call(e, i.length + 1);
                return xe.call(i, r, "$&_") + "." + xe.call(xe.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return xe.call(e, r, "$&_")
    }
    var Zr = sy,
        Ci = Zr.custom,
        Di = es(Ci) ? Ci : null,
        gy = function t(e, r, n, i) {
            var a = r || {};
            if (Pe(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (Pe(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var s = Pe(a, "customInspect") ? a.customInspect : !0;
            if (typeof s != "boolean" && s !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (Pe(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (Pe(a, "numericSeparator") && typeof a.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var o = a.numericSeparator;
            if (typeof e > "u") return "undefined";
            if (e === null) return "null";
            if (typeof e == "boolean") return e ? "true" : "false";
            if (typeof e == "string") return rs(e, a);
            if (typeof e == "number") {
                if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
                var c = String(e);
                return o ? Li(e, c) : c
            }
            if (typeof e == "bigint") {
                var f = String(e) + "n";
                return o ? Li(e, f) : f
            }
            var y = typeof a.depth > "u" ? 5 : a.depth;
            if (typeof n > "u" && (n = 0), n >= y && y > 0 && typeof e == "object") return en(e) ? "[Array]" : "[Object]";
            var m = Dy(a, n);
            if (typeof i > "u") i = [];
            else if (ts(i, e) >= 0) return "[Circular]";

            function w(z, v, E) {
                if (v && (i = my.call(i), i.push(v)), E) {
                    var $ = {
                        depth: a.depth
                    };
                    return Pe(a, "quoteStyle") && ($.quoteStyle = a.quoteStyle), t(z, $, n + 1, i)
                }
                return t(z, a, n + 1, i)
            }
            if (typeof e == "function" && !ji(e)) {
                var O = Ty(e),
                    k = Ut(e, w);
                return "[Function" + (O ? ": " + O : " (anonymous)") + "]" + (k.length > 0 ? " { " + Se.call(k, ", ") + " }" : "")
            }
            if (es(e)) {
                var U = ct ? xe.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Qr.call(e);
                return typeof e == "object" && !ct ? Ot(U) : U
            }
            if (Ny(e)) {
                for (var ee = "<" + Ii.call(String(e.nodeName)), N = e.attributes || [], te = 0; te < N.length; te++) ee += " " + N[te].name + "=" + Za(_y(N[te].value), "double", a);
                return ee += ">", e.childNodes && e.childNodes.length && (ee += "..."), ee += "</" + Ii.call(String(e.nodeName)) + ">", ee
            }
            if (en(e)) {
                if (e.length === 0) return "[]";
                var ie = Ut(e, w);
                return m && !Cy(ie) ? "[" + tn(ie, m) + "]" : "[ " + Se.call(ie, ", ") + " ]"
            }
            if (Ey(e)) {
                var ue = Ut(e, w);
                return !("cause" in Error.prototype) && "cause" in e && !Qa.call(e, "cause") ? "{ [" + String(e) + "] " + Se.call(Ai.call("[cause]: " + w(e.cause), ue), ", ") + " }" : ue.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Se.call(ue, ", ") + " }"
            }
            if (typeof e == "object" && s) {
                if (Di && typeof e[Di] == "function" && Zr) return Zr(e, {
                    depth: y - n
                });
                if (s !== "symbol" && typeof e.inspect == "function") return e.inspect()
            }
            if ($y(e)) {
                var pe = [];
                return oy.call(e, function(z, v) {
                    pe.push(w(v, e, !0) + " => " + w(z, e))
                }), Mi("Map", Zt.call(e), pe, m)
            }
            if (Ay(e)) {
                var K = [];
                return cy.call(e, function(z) {
                    K.push(w(z, e))
                }), Mi("Set", er.call(e), K, m)
            }
            if (Py(e)) return xr("WeakMap");
            if (xy(e)) return xr("WeakSet");
            if (Iy(e)) return xr("WeakRef");
            if (Sy(e)) return Ot(w(Number(e)));
            if (ky(e)) return Ot(w(Xr.call(e)));
            if (Oy(e)) return Ot(dy.call(e));
            if (wy(e)) return Ot(w(String(e)));
            if (!by(e) && !ji(e)) {
                var le = Ut(e, w),
                    re = Ni ? Ni(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                    W = e instanceof Object ? "" : "null prototype",
                    me = !re && oe && Object(e) === e && oe in e ? Rn.call(De(e), 8, -1) : W ? "Object" : "",
                    Y = re || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                    fe = Y + (me || W ? "[" + Se.call(Ai.call([], me || [], W || []), ": ") + "] " : "");
                return le.length === 0 ? fe + "{}" : m ? fe + "{" + tn(le, m) + "}" : fe + "{ " + Se.call(le, ", ") + " }"
            }
            return String(e)
        };

    function Za(t, e, r) {
        var n = (r.quoteStyle || e) === "double" ? '"' : "'";
        return n + t + n
    }

    function _y(t) {
        return xe.call(String(t), /"/g, "&quot;")
    }

    function en(t) {
        return De(t) === "[object Array]" && (!oe || !(typeof t == "object" && oe in t))
    }

    function by(t) {
        return De(t) === "[object Date]" && (!oe || !(typeof t == "object" && oe in t))
    }

    function ji(t) {
        return De(t) === "[object RegExp]" && (!oe || !(typeof t == "object" && oe in t))
    }

    function Ey(t) {
        return De(t) === "[object Error]" && (!oe || !(typeof t == "object" && oe in t))
    }

    function wy(t) {
        return De(t) === "[object String]" && (!oe || !(typeof t == "object" && oe in t))
    }

    function Sy(t) {
        return De(t) === "[object Number]" && (!oe || !(typeof t == "object" && oe in t))
    }

    function Oy(t) {
        return De(t) === "[object Boolean]" && (!oe || !(typeof t == "object" && oe in t))
    }

    function es(t) {
        if (ct) return t && typeof t == "object" && t instanceof Symbol;
        if (typeof t == "symbol") return !0;
        if (!t || typeof t != "object" || !Qr) return !1;
        try {
            return Qr.call(t), !0
        } catch {}
        return !1
    }

    function ky(t) {
        if (!t || typeof t != "object" || !Xr) return !1;
        try {
            return Xr.call(t), !0
        } catch {}
        return !1
    }
    var Ry = Object.prototype.hasOwnProperty || function(t) {
        return t in this
    };

    function Pe(t, e) {
        return Ry.call(t, e)
    }

    function De(t) {
        return hy.call(t)
    }

    function Ty(t) {
        if (t.name) return t.name;
        var e = yy.call(py.call(t), /^function\s*([\w$]+)/);
        return e ? e[1] : null
    }

    function ts(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var r = 0, n = t.length; r < n; r++)
            if (t[r] === e) return r;
        return -1
    }

    function $y(t) {
        if (!Zt || !t || typeof t != "object") return !1;
        try {
            Zt.call(t);
            try {
                er.call(t)
            } catch {
                return !0
            }
            return t instanceof Map
        } catch {}
        return !1
    }

    function Py(t) {
        if (!Rt || !t || typeof t != "object") return !1;
        try {
            Rt.call(t, Rt);
            try {
                Tt.call(t, Tt)
            } catch {
                return !0
            }
            return t instanceof WeakMap
        } catch {}
        return !1
    }

    function Iy(t) {
        if (!Pi || !t || typeof t != "object") return !1;
        try {
            return Pi.call(t), !0
        } catch {}
        return !1
    }

    function Ay(t) {
        if (!er || !t || typeof t != "object") return !1;
        try {
            er.call(t);
            try {
                Zt.call(t)
            } catch {
                return !0
            }
            return t instanceof Set
        } catch {}
        return !1
    }

    function xy(t) {
        if (!Tt || !t || typeof t != "object") return !1;
        try {
            Tt.call(t, Tt);
            try {
                Rt.call(t, Rt)
            } catch {
                return !0
            }
            return t instanceof WeakSet
        } catch {}
        return !1
    }

    function Ny(t) {
        return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
    }

    function rs(t, e) {
        if (t.length > e.maxStringLength) {
            var r = t.length - e.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return rs(Rn.call(t, 0, e.maxStringLength), e) + n
        }
        var i = xe.call(xe.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ly);
        return Za(i, "single", e)
    }

    function Ly(t) {
        var e = t.charCodeAt(0),
            r = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [e];
        return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + vy.call(e.toString(16))
    }

    function Ot(t) {
        return "Object(" + t + ")"
    }

    function xr(t) {
        return t + " { ? }"
    }

    function Mi(t, e, r, n) {
        var i = n ? tn(r, n) : Se.call(r, ", ");
        return t + " (" + e + ") {" + i + "}"
    }

    function Cy(t) {
        for (var e = 0; e < t.length; e++)
            if (ts(t[e], `
`) >= 0) return !1;
        return !0
    }

    function Dy(t, e) {
        var r;
        if (t.indent === "	") r = "	";
        else if (typeof t.indent == "number" && t.indent > 0) r = Se.call(Array(t.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: Se.call(Array(e + 1), r)
        }
    }

    function tn(t, e) {
        if (t.length === 0) return "";
        var r = `
` + e.prev + e.base;
        return r + Se.call(t, "," + r) + `
` + e.prev
    }

    function Ut(t, e) {
        var r = en(t),
            n = [];
        if (r) {
            n.length = t.length;
            for (var i = 0; i < t.length; i++) n[i] = Pe(t, i) ? e(t[i], t) : ""
        }
        var a = typeof Ar == "function" ? Ar(t) : [],
            s;
        if (ct) {
            s = {};
            for (var o = 0; o < a.length; o++) s["$" + a[o]] = a[o]
        }
        for (var c in t) !Pe(t, c) || r && String(Number(c)) === c && c < t.length || ct && s["$" + c] instanceof Symbol || (Xa.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t)));
        if (typeof Ar == "function")
            for (var f = 0; f < a.length; f++) Qa.call(t, a[f]) && n.push("[" + e(a[f]) + "]: " + e(t[a[f]], t));
        return n
    }
    var Tn = Sn,
        bt = ny,
        jy = gy,
        My = Tn("%TypeError%"),
        Ft = Tn("%WeakMap%", !0),
        Gt = Tn("%Map%", !0),
        By = bt("WeakMap.prototype.get", !0),
        Uy = bt("WeakMap.prototype.set", !0),
        Fy = bt("WeakMap.prototype.has", !0),
        Gy = bt("Map.prototype.get", !0),
        qy = bt("Map.prototype.set", !0),
        Hy = bt("Map.prototype.has", !0),
        $n = function(t, e) {
            for (var r = t, n;
                (n = r.next) !== null; r = n)
                if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n
        },
        Wy = function(t, e) {
            var r = $n(t, e);
            return r && r.value
        },
        Yy = function(t, e, r) {
            var n = $n(t, e);
            n ? n.value = r : t.next = {
                key: e,
                next: t.next,
                value: r
            }
        },
        zy = function(t, e) {
            return !!$n(t, e)
        },
        Jy = function() {
            var e, r, n, i = {
                assert: function(a) {
                    if (!i.has(a)) throw new My("Side channel does not contain " + jy(a))
                },
                get: function(a) {
                    if (Ft && a && (typeof a == "object" || typeof a == "function")) {
                        if (e) return By(e, a)
                    } else if (Gt) {
                        if (r) return Gy(r, a)
                    } else if (n) return Wy(n, a)
                },
                has: function(a) {
                    if (Ft && a && (typeof a == "object" || typeof a == "function")) {
                        if (e) return Fy(e, a)
                    } else if (Gt) {
                        if (r) return Hy(r, a)
                    } else if (n) return zy(n, a);
                    return !1
                },
                set: function(a, s) {
                    Ft && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Ft), Uy(e, a, s)) : Gt ? (r || (r = new Gt), qy(r, a, s)) : (n || (n = {
                        key: {},
                        next: null
                    }), Yy(n, a, s))
                }
            };
            return i
        },
        Vy = String.prototype.replace,
        Ky = /%20/g,
        Nr = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Pn = {
            default: Nr.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return Vy.call(t, Ky, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: Nr.RFC1738,
            RFC3986: Nr.RFC3986
        },
        Xy = Pn,
        Lr = Object.prototype.hasOwnProperty,
        Ge = Array.isArray,
        we = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        Qy = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];
                if (Ge(n)) {
                    for (var i = [], a = 0; a < n.length; ++a) typeof n[a] < "u" && i.push(n[a]);
                    r.obj[r.prop] = i
                }
            }
        },
        ns = function(e, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
            return n
        },
        Zy = function t(e, r, n) {
            if (!r) return e;
            if (typeof r != "object") {
                if (Ge(e)) e.push(r);
                else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !Lr.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var i = e;
            return Ge(e) && !Ge(r) && (i = ns(e, n)), Ge(e) && Ge(r) ? (r.forEach(function(a, s) {
                if (Lr.call(e, s)) {
                    var o = e[s];
                    o && typeof o == "object" && a && typeof a == "object" ? e[s] = t(o, a, n) : e.push(a)
                } else e[s] = a
            }), e) : Object.keys(r).reduce(function(a, s) {
                var o = r[s];
                return Lr.call(a, s) ? a[s] = t(a[s], o, n) : a[s] = o, a
            }, i)
        },
        ev = function(e, r) {
            return Object.keys(r).reduce(function(n, i) {
                return n[i] = r[i], n
            }, e)
        },
        tv = function(t, e, r) {
            var n = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        rv = function(e, r, n, i, a) {
            if (e.length === 0) return e;
            var s = e;
            if (typeof e == "symbol" ? s = Symbol.prototype.toString.call(e) : typeof e != "string" && (s = String(e)), n === "iso-8859-1") return escape(s).replace(/%u[0-9a-f]{4}/gi, function(y) {
                return "%26%23" + parseInt(y.slice(2), 16) + "%3B"
            });
            for (var o = "", c = 0; c < s.length; ++c) {
                var f = s.charCodeAt(c);
                if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || a === Xy.RFC1738 && (f === 40 || f === 41)) {
                    o += s.charAt(c);
                    continue
                }
                if (f < 128) {
                    o = o + we[f];
                    continue
                }
                if (f < 2048) {
                    o = o + (we[192 | f >> 6] + we[128 | f & 63]);
                    continue
                }
                if (f < 55296 || f >= 57344) {
                    o = o + (we[224 | f >> 12] + we[128 | f >> 6 & 63] + we[128 | f & 63]);
                    continue
                }
                c += 1, f = 65536 + ((f & 1023) << 10 | s.charCodeAt(c) & 1023), o += we[240 | f >> 18] + we[128 | f >> 12 & 63] + we[128 | f >> 6 & 63] + we[128 | f & 63]
            }
            return o
        },
        nv = function(e) {
            for (var r = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], i = 0; i < r.length; ++i)
                for (var a = r[i], s = a.obj[a.prop], o = Object.keys(s), c = 0; c < o.length; ++c) {
                    var f = o[c],
                        y = s[f];
                    typeof y == "object" && y !== null && n.indexOf(y) === -1 && (r.push({
                        obj: s,
                        prop: f
                    }), n.push(y))
                }
            return Qy(r), e
        },
        iv = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        av = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        sv = function(e, r) {
            return [].concat(e, r)
        },
        ov = function(e, r) {
            if (Ge(e)) {
                for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
                return n
            }
            return r(e)
        },
        is = {
            arrayToObject: ns,
            assign: ev,
            combine: sv,
            compact: nv,
            decode: tv,
            encode: rv,
            isBuffer: av,
            isRegExp: iv,
            maybeMap: ov,
            merge: Zy
        },
        as = Jy,
        rn = is,
        $t = Pn,
        cv = Object.prototype.hasOwnProperty,
        Bi = {
            brackets: function(e) {
                return e + "[]"
            },
            comma: "comma",
            indices: function(e, r) {
                return e + "[" + r + "]"
            },
            repeat: function(e) {
                return e
            }
        },
        Re = Array.isArray,
        uv = String.prototype.split,
        lv = Array.prototype.push,
        ss = function(t, e) {
            lv.apply(t, Re(e) ? e : [e])
        },
        fv = Date.prototype.toISOString,
        Ui = $t.default,
        ne = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: rn.encode,
            encodeValuesOnly: !1,
            format: Ui,
            formatter: $t.formatters[Ui],
            indices: !1,
            serializeDate: function(e) {
                return fv.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        dv = function(e) {
            return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
        },
        Cr = {},
        hv = function t(e, r, n, i, a, s, o, c, f, y, m, w, O, k, U, ee) {
            for (var N = e, te = ee, ie = 0, ue = !1;
                (te = te.get(Cr)) !== void 0 && !ue;) {
                var pe = te.get(e);
                if (ie += 1, typeof pe < "u") {
                    if (pe === ie) throw new RangeError("Cyclic object value");
                    ue = !0
                }
                typeof te.get(Cr) > "u" && (ie = 0)
            }
            if (typeof c == "function" ? N = c(r, N) : N instanceof Date ? N = m(N) : n === "comma" && Re(N) && (N = rn.maybeMap(N, function(A) {
                    return A instanceof Date ? m(A) : A
                })), N === null) {
                if (a) return o && !k ? o(r, ne.encoder, U, "key", w) : r;
                N = ""
            }
            if (dv(N) || rn.isBuffer(N)) {
                if (o) {
                    var K = k ? r : o(r, ne.encoder, U, "key", w);
                    if (n === "comma" && k) {
                        for (var le = uv.call(String(N), ","), re = "", W = 0; W < le.length; ++W) re += (W === 0 ? "" : ",") + O(o(le[W], ne.encoder, U, "value", w));
                        return [O(K) + (i && Re(N) && le.length === 1 ? "[]" : "") + "=" + re]
                    }
                    return [O(K) + "=" + O(o(N, ne.encoder, U, "value", w))]
                }
                return [O(r) + "=" + O(String(N))]
            }
            var me = [];
            if (typeof N > "u") return me;
            var Y;
            if (n === "comma" && Re(N)) Y = [{
                value: N.length > 0 ? N.join(",") || null : void 0
            }];
            else if (Re(c)) Y = c;
            else {
                var fe = Object.keys(N);
                Y = f ? fe.sort(f) : fe
            }
            for (var z = i && Re(N) && N.length === 1 ? r + "[]" : r, v = 0; v < Y.length; ++v) {
                var E = Y[v],
                    $ = typeof E == "object" && typeof E.value < "u" ? E.value : N[E];
                if (!(s && $ === null)) {
                    var M = Re(N) ? typeof n == "function" ? n(z, E) : z : z + (y ? "." + E : "[" + E + "]");
                    ee.set(e, ie);
                    var C = as();
                    C.set(Cr, ee), ss(me, t($, M, n, i, a, s, o, c, f, y, m, w, O, k, U, C))
                }
            }
            return me
        },
        pv = function(e) {
            if (!e) return ne;
            if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = e.charset || ne.charset;
            if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = $t.default;
            if (typeof e.format < "u") {
                if (!cv.call($t.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                n = e.format
            }
            var i = $t.formatters[n],
                a = ne.filter;
            return (typeof e.filter == "function" || Re(e.filter)) && (a = e.filter), {
                addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : ne.addQueryPrefix,
                allowDots: typeof e.allowDots > "u" ? ne.allowDots : !!e.allowDots,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ne.charsetSentinel,
                delimiter: typeof e.delimiter > "u" ? ne.delimiter : e.delimiter,
                encode: typeof e.encode == "boolean" ? e.encode : ne.encode,
                encoder: typeof e.encoder == "function" ? e.encoder : ne.encoder,
                encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : ne.encodeValuesOnly,
                filter: a,
                format: n,
                formatter: i,
                serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : ne.serializeDate,
                skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : ne.skipNulls,
                sort: typeof e.sort == "function" ? e.sort : null,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ne.strictNullHandling
            }
        },
        yv = function(t, e) {
            var r = t,
                n = pv(e),
                i, a;
            typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Re(n.filter) && (a = n.filter, i = a);
            var s = [];
            if (typeof r != "object" || r === null) return "";
            var o;
            e && e.arrayFormat in Bi ? o = e.arrayFormat : e && "indices" in e ? o = e.indices ? "indices" : "repeat" : o = "indices";
            var c = Bi[o];
            if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var f = c === "comma" && e && e.commaRoundTrip;
            i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
            for (var y = as(), m = 0; m < i.length; ++m) {
                var w = i[m];
                n.skipNulls && r[w] === null || ss(s, hv(r[w], w, c, f, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, y))
            }
            var O = s.join(n.delimiter),
                k = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? k += "utf8=%26%2310003%3B&" : k += "utf8=%E2%9C%93&"), O.length > 0 ? k + O : ""
        },
        ut = is,
        nn = Object.prototype.hasOwnProperty,
        vv = Array.isArray,
        Z = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: ut.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        mv = function(t) {
            return t.replace(/&#(\d+);/g, function(e, r) {
                return String.fromCharCode(parseInt(r, 10))
            })
        },
        os = function(t, e) {
            return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
        },
        gv = "utf8=%26%2310003%3B",
        _v = "utf8=%E2%9C%93",
        bv = function(e, r) {
            var n = {},
                i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                s = i.split(r.delimiter, a),
                o = -1,
                c, f = r.charset;
            if (r.charsetSentinel)
                for (c = 0; c < s.length; ++c) s[c].indexOf("utf8=") === 0 && (s[c] === _v ? f = "utf-8" : s[c] === gv && (f = "iso-8859-1"), o = c, c = s.length);
            for (c = 0; c < s.length; ++c)
                if (c !== o) {
                    var y = s[c],
                        m = y.indexOf("]="),
                        w = m === -1 ? y.indexOf("=") : m + 1,
                        O, k;
                    w === -1 ? (O = r.decoder(y, Z.decoder, f, "key"), k = r.strictNullHandling ? null : "") : (O = r.decoder(y.slice(0, w), Z.decoder, f, "key"), k = ut.maybeMap(os(y.slice(w + 1), r), function(U) {
                        return r.decoder(U, Z.decoder, f, "value")
                    })), k && r.interpretNumericEntities && f === "iso-8859-1" && (k = mv(k)), y.indexOf("[]=") > -1 && (k = vv(k) ? [k] : k), nn.call(n, O) ? n[O] = ut.combine(n[O], k) : n[O] = k
                } return n
        },
        Ev = function(t, e, r, n) {
            for (var i = n ? e : os(e, r), a = t.length - 1; a >= 0; --a) {
                var s, o = t[a];
                if (o === "[]" && r.parseArrays) s = [].concat(i);
                else {
                    s = r.plainObjects ? Object.create(null) : {};
                    var c = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o,
                        f = parseInt(c, 10);
                    !r.parseArrays && c === "" ? s = {
                        0: i
                    } : !isNaN(f) && o !== c && String(f) === c && f >= 0 && r.parseArrays && f <= r.arrayLimit ? (s = [], s[f] = i) : c !== "__proto__" && (s[c] = i)
                }
                i = s
            }
            return i
        },
        wv = function(e, r, n, i) {
            if (!!e) {
                var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                    s = /(\[[^[\]]*])/,
                    o = /(\[[^[\]]*])/g,
                    c = n.depth > 0 && s.exec(a),
                    f = c ? a.slice(0, c.index) : a,
                    y = [];
                if (f) {
                    if (!n.plainObjects && nn.call(Object.prototype, f) && !n.allowPrototypes) return;
                    y.push(f)
                }
                for (var m = 0; n.depth > 0 && (c = o.exec(a)) !== null && m < n.depth;) {
                    if (m += 1, !n.plainObjects && nn.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes) return;
                    y.push(c[1])
                }
                return c && y.push("[" + a.slice(c.index) + "]"), Ev(y, r, n, i)
            }
        },
        Sv = function(e) {
            if (!e) return Z;
            if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof e.charset > "u" ? Z.charset : e.charset;
            return {
                allowDots: typeof e.allowDots > "u" ? Z.allowDots : !!e.allowDots,
                allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Z.allowPrototypes,
                allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Z.allowSparse,
                arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Z.arrayLimit,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Z.charsetSentinel,
                comma: typeof e.comma == "boolean" ? e.comma : Z.comma,
                decoder: typeof e.decoder == "function" ? e.decoder : Z.decoder,
                delimiter: typeof e.delimiter == "string" || ut.isRegExp(e.delimiter) ? e.delimiter : Z.delimiter,
                depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Z.depth,
                ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Z.interpretNumericEntities,
                parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Z.parameterLimit,
                parseArrays: e.parseArrays !== !1,
                plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Z.plainObjects,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Z.strictNullHandling
            }
        },
        Ov = function(t, e) {
            var r = Sv(e);
            if (t === "" || t === null || typeof t > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof t == "string" ? bv(t, r) : t, i = r.plainObjects ? Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
                var o = a[s],
                    c = wv(o, n[o], r, typeof t == "string");
                i = ut.merge(i, c, r)
            }
            return r.allowSparse === !0 ? i : ut.compact(i)
        },
        kv = yv,
        Rv = Ov,
        Tv = Pn,
        cs = {
            formats: Tv,
            parse: Rv,
            stringify: kv
        };
    class $v {
        constructor(e) {
            this.code = e.code, this.token = e.token, this.host = e.host
        }
    }
    class Pv {
        constructor(e) {
            this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
        }
    }
    class Iv {
        constructor(e) {
            this.connections = e.connections
        }
    }
    class Av {
        constructor(e) {
            this.cause = e.cause
        }
        whenReceived(e) {
            e.disconnect()
        }
    }
    class xv {}
    var pr = {
        CreateRoomReply: $v,
        GetRoomReply: Pv,
        GetAudienceReply: Iv,
        RoomExit: Av,
        RoomLock: xv
    };
    const Fi = Kr.exports,
        Nv = cs,
        {
            CreateRoomReply: Lv,
            GetRoomReply: Cv
        } = pr;
    class Dv {
        constructor(e) {
            if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = e.scheme
        }
        url(e, r) {
            if (r) {
                let n = Nv.stringify(r);
                return `${this.scheme}://${this.host}/api/v2${e}?${n}`
            }
            return `${this.scheme}://${this.host}/api/v2${e}`
        }
        async createRoom(e) {
            let r = {
                userId: e.userId || "fart",
                appTag: e.appTag || "test"
            };
            e.password && (r.password = e.password), e.moderatorPassword && (r.moderatorPassword = e.moderatorPassword), e.twitchLocked && (r.twitchLocked = e.twitchLocked), e.locale && (r.locale = e.locale), e.keepalive && (r.keepalive = e.keepalive), e.controllerBranch && (r.controllerBranch = e.controllerBranch);
            let n = this.url("/rooms", r),
                s = await (await Fi(n, {
                    method: "POST"
                })).json();
            if (!s.ok) throw new Error(`failed to create room: ${s.error}`);
            let o = s.body;
            return new Lv({
                code: o.code,
                token: o.token,
                host: o.host
            })
        }
        async getRoom(e) {
            let r = this.url(`/rooms/${e.code}`),
                i = await (await Fi(r)).json();
            if (!i.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${i.error}`);
            let a = i.body;
            return new Cv({
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
    var jv = {
            APIClient: Dv
        },
        Ke = null;
    typeof WebSocket < "u" ? Ke = WebSocket : typeof MozWebSocket < "u" ? Ke = MozWebSocket : typeof ve < "u" ? Ke = ve.WebSocket || ve.MozWebSocket : typeof window < "u" ? Ke = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Ke = self.WebSocket || self.MozWebSocket);
    var Mv = Ke,
        In = {
            exports: {}
        },
        tt = typeof Reflect == "object" ? Reflect : null,
        Gi = tt && typeof tt.apply == "function" ? tt.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        zt;
    tt && typeof tt.ownKeys == "function" ? zt = tt.ownKeys : Object.getOwnPropertySymbols ? zt = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : zt = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function Bv(t) {
        console && console.warn && console.warn(t)
    }
    var us = Number.isNaN || function(e) {
        return e !== e
    };

    function F() {
        F.init.call(this)
    }
    In.exports = F;
    In.exports.once = qv;
    F.EventEmitter = F;
    F.prototype._events = void 0;
    F.prototype._eventsCount = 0;
    F.prototype._maxListeners = void 0;
    var qi = 10;

    function yr(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(F, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return qi
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || us(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            qi = t
        }
    });
    F.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    F.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || us(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function ls(t) {
        return t._maxListeners === void 0 ? F.defaultMaxListeners : t._maxListeners
    }
    F.prototype.getMaxListeners = function() {
        return ls(this)
    };
    F.prototype.emit = function(e) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var i = e === "error",
            a = this._events;
        if (a !== void 0) i = i && a.error === void 0;
        else if (!i) return !1;
        if (i) {
            var s;
            if (r.length > 0 && (s = r[0]), s instanceof Error) throw s;
            var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw o.context = s, o
        }
        var c = a[e];
        if (c === void 0) return !1;
        if (typeof c == "function") Gi(c, this, r);
        else
            for (var f = c.length, y = ys(c, f), n = 0; n < f; ++n) Gi(y[n], this, r);
        return !0
    };

    function fs(t, e, r, n) {
        var i, a, s;
        if (yr(r), a = t._events, a === void 0 ? (a = t._events = Object.create(null), t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), a = t._events), s = a[e]), s === void 0) s = a[e] = r, ++t._eventsCount;
        else if (typeof s == "function" ? s = a[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = ls(t), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var o = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = s.length, Bv(o)
        }
        return t
    }
    F.prototype.addListener = function(e, r) {
        return fs(this, e, r, !1)
    };
    F.prototype.on = F.prototype.addListener;
    F.prototype.prependListener = function(e, r) {
        return fs(this, e, r, !0)
    };

    function Uv() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function ds(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = Uv.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    F.prototype.once = function(e, r) {
        return yr(r), this.on(e, ds(this, e, r)), this
    };
    F.prototype.prependOnceListener = function(e, r) {
        return yr(r), this.prependListener(e, ds(this, e, r)), this
    };
    F.prototype.removeListener = function(e, r) {
        var n, i, a, s, o;
        if (yr(r), i = this._events, i === void 0) return this;
        if (n = i[e], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
        else if (typeof n != "function") {
            for (a = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === r || n[s].listener === r) {
                    o = n[s].listener, a = s;
                    break
                } if (a < 0) return this;
            a === 0 ? n.shift() : Fv(n, a), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r)
        }
        return this
    };
    F.prototype.off = F.prototype.removeListener;
    F.prototype.removeAllListeners = function(e) {
        var r, n, i;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
        if (arguments.length === 0) {
            var a = Object.keys(n),
                s;
            for (i = 0; i < a.length; ++i) s = a[i], s !== "removeListener" && this.removeAllListeners(s);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[e], typeof r == "function") this.removeListener(e, r);
        else if (r !== void 0)
            for (i = r.length - 1; i >= 0; i--) this.removeListener(e, r[i]);
        return this
    };

    function hs(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Gv(i) : ys(i, i.length)
    }
    F.prototype.listeners = function(e) {
        return hs(this, e, !0)
    };
    F.prototype.rawListeners = function(e) {
        return hs(this, e, !1)
    };
    F.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : ps.call(t, e)
    };
    F.prototype.listenerCount = ps;

    function ps(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    F.prototype.eventNames = function() {
        return this._eventsCount > 0 ? zt(this._events) : []
    };

    function ys(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function Fv(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function Gv(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function qv(t, e) {
        return new Promise(function(r, n) {
            function i(s) {
                t.removeListener(e, a), n(s)
            }

            function a() {
                typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
            }
            vs(t, e, a, {
                once: !0
            }), e !== "error" && Hv(t, i, {
                once: !0
            })
        })
    }

    function Hv(t, e, r) {
        typeof t.on == "function" && vs(t, "error", e, r)
    }

    function vs(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(a) {
            n.once && t.removeEventListener(e, i), r(a)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }
    class Wv {
        constructor(e) {
            e && (this.error = e.error, this.to = e.to)
        }
        toString() {
            return `ObservedError{
	to:${this.to}
	error:${this.error}
}`
        }
    }
    class vr extends Error {
        constructor(e) {
            super(e), e && (this.code = e.code, this.message = e.message)
        }
    }
    class jt extends vr {
        constructor(e) {
            super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
        }
    }
    class ms extends jt {
        constructor(e) {
            super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
        }
    }
    class gs extends jt {
        constructor(e) {
            super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
        }
    }
    class _s extends jt {
        constructor(e) {
            super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
        }
    }
    class B extends vr {
        constructor(e) {
            super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
        }
    }
    class bs extends B {
        constructor(e) {
            super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
        }
    }
    class Es extends B {
        constructor(e) {
            super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
        }
    }
    class ws extends B {
        constructor(e) {
            super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
        }
    }
    class Ss extends B {
        constructor(e) {
            super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
        }
    }
    class Os extends B {
        constructor(e) {
            super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
        }
    }
    class ks extends B {
        constructor(e) {
            super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
        }
    }
    class Rs extends B {
        constructor(e) {
            super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
        }
    }
    class Ts extends B {
        constructor(e) {
            super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
        }
    }
    class $s extends B {
        constructor(e) {
            super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
        }
    }
    class Ps extends B {
        constructor(e) {
            super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
        }
    }
    class Is extends B {
        constructor(e) {
            super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
        }
    }
    class As extends B {
        constructor(e) {
            super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
        }
    }
    class xs extends B {
        constructor(e) {
            super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
        }
    }
    class Ns extends B {
        constructor(e) {
            super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
        }
    }
    class Ls extends B {
        constructor(e) {
            super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
        }
    }
    class Cs extends B {
        constructor(e) {
            super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
        }
    }
    class Ds extends B {
        constructor(e) {
            super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
        }
    }
    class js extends B {
        constructor(e) {
            super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
        }
    }
    class Ms extends B {
        constructor(e) {
            super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
        }
    }
    class Bs extends B {
        constructor(e) {
            super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
        }
    }
    class Us extends B {
        constructor(e) {
            super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
        }
    }
    class Fs extends B {
        constructor(e) {
            super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
        }
    }
    class Gs extends B {
        constructor(e) {
            super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
        }
    }
    class qs extends B {
        constructor(e) {
            super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
        }
    }
    class Hs extends B {
        constructor(e) {
            super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
        }
    }
    class Ws extends B {
        constructor(e) {
            super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
        }
    }
    class Ys extends B {
        constructor(e) {
            super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
        }
    }
    class zs extends B {
        constructor(e) {
            super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
        }
    }

    function Yv({
        code: t,
        message: e
    }) {
        const r = zv[t];
        return r ? new r({
            message: e
        }) : new vr({
            message: e
        })
    }
    var Js = {
        createError: Yv,
        CallError: vr,
        EcastServerError: jt,
        EcastCreateRoomFailed: ms,
        EcastDialRoomFailed: gs,
        EcastServerIsShuttingDown: _s,
        EcastClientError: B,
        EcastParseError: bs,
        EcastRequestIsMissingOpcode: Es,
        EcastRequestHasInvalidOpcode: ws,
        EcastRequestHasInvalidArguments: Ss,
        EcastEntityNotFound: Os,
        EcastEntityAlreadyExists: ks,
        EcastEntityTypeError: Rs,
        EcastNoSuchClient: Ts,
        EcastRoomIsLocked: $s,
        EcastRoomIsFull: Ps,
        EcastLicenseNotFound: Is,
        EcastLicenseCheckFailed: As,
        EcastRoomNotFound: xs,
        EcastInvalidRole: Ns,
        EcastTwitchLoginRequired: Ls,
        EcastInvalidOption: Cs,
        EcastPasswordRequired: Ds,
        EcastInvalidPassword: js,
        EcastNameRequired: Ms,
        EcastFilterError: Bs,
        EcastNoSuchFilter: Us,
        EcastPermissionDenied: Fs,
        EcastNotConnected: Gs,
        EcastIllegalOperation: qs,
        EcastACLChangeDenied: Hs,
        EcastRoomHasEnded: Ws,
        EcastEntityLocked: Ys,
        EcastRateLimitExceeded: zs,
        ObservedError: Wv
    };
    const zv = {
        1e3: jt,
        1001: ms,
        1002: gs,
        1003: _s,
        2e3: B,
        2001: bs,
        2002: Es,
        2003: ws,
        2004: Ss,
        2005: Os,
        2006: ks,
        2007: Rs,
        2008: Ts,
        2009: $s,
        2010: Ps,
        2011: Is,
        2012: As,
        2013: xs,
        2014: Ns,
        2015: Ls,
        2016: Cs,
        2017: Ds,
        2018: js,
        2019: Ms,
        2021: Bs,
        2022: Us,
        2023: Fs,
        2024: Gs,
        2025: qs,
        2026: Hs,
        2027: Ws,
        2028: Ys,
        2420: zs
    };
    class Jv {
        constructor(e) {
            this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
        }
    }
    class Vv {
        constructor(e) {
            this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
        }
    }
    class Kv {
        constructor(e) {
            this.id = e.id, this.role = e.role
        }
    }
    class Xv {
        constructor(e) {
            this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
        }
    }
    class Qv {
        constructor(e) {
            this.id = e.id, this.banned = e.banned, this.reason = e.reason
        }
    }
    var An = {
        ClientConnected: Vv,
        ClientDisconnected: Kv,
        ClientKicked: Qv,
        ClientSend: Xv,
        ClientWelcome: Jv
    };
    class Zv {
        constructor(e) {
            this.choices = e.choices, this.key = e.key, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var xn = {
        CountGroup: Zv
    };
    class em {
        constructor(e) {
            this.key = e.key, this.count = e.count, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`
        }
    }
    var Nn = {
        GCounter: em
    };
    class tm {
        constructor(e) {
            this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
        }
    }
    var Vs = {
        Notification: tm
    };
    class rm {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.val = e.val, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this
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
    class nm {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var Ln = {
        ObjectEntity: rm,
        ObjectEcho: nm
    };
    class im {
        constructor(e) {
            this.key = e.key, this.count = e.count, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var Cn = {
        PNCounter: im
    };
    class am {
        constructor(e) {
            this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
        }
    }
    var Ks = {
        Reply: am
    };
    class sm {
        constructor(e) {
            this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
        }
    }
    var om = {
        Request: sm
    };
    class cm {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.text = e.text, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this, e.emit("text " + this.key, this)
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
    class um {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var Dn = {
        TextEntity: cm,
        TextEcho: um
    };
    class lm {
        constructor(e) {
            this.key = e.key, this.elements = e.elements, this.limit = e.limit, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`
        }
    }
    var jn = {
        TextRing: lm
    };
    class fm {
        constructor(e) {
            this.key = e.key, this.artifactId = e.artifactId, this.categoryId = e.categoryId, this.rootId = e.rootId, this.meta = e.meta || {}
        }
        whenReceived(e) {
            e.entities[this.key] = this
        }
        toString() {
            return `ArtifactEntity${JSON.stringify(this)}
`
        }
    }
    var Xs = {
        ArtifactEntity: fm
    };
    class dm {
        constructor(e) {
            this.key = e.key, this.colors = e.colors, this.lines = e.lines, this.live = e.live, this.maxPoints = e.maxPoints, this.size = e.size, this.weights = e.weights, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this
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
    class hm {
        constructor(e) {
            this.key = e.key, this.line = e.line
        }
        whenReceived(e) {
            e.entities[this.key].lines.push(this.line)
        }
        toString() {
            return `DoodleLine{
	val:${this.line}
}`
        }
    }
    class pm {
        constructor(e) {
            this.key = e.key, this.index = e.index
        }
        whenReceived(e) {
            e.entities[this.key].lines.splice(this.index, 1)
        }
        toString() {
            return `DoodleLineRemoved{
	index:${this.index}
}`
        }
    }
    var Mn = {
        DoodleEntity: dm,
        DoodleLine: hm,
        DoodleLineRemoved: pm
    };
    class ym {
        constructor(e) {
            this.key = e.key, this.size = e.size, this.version = e.version, this.from = e.from, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenRecived(e) {
            e.entities[this.key] = this
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
    class vm {
        constructor(e) {
            this.key = e.key, this.val = e.val
        }
        toString() {
            return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
        }
    }
    class mm {
        constructor(e) {
            this.key = e.key, this.vals = e.vals
        }
        toString() {
            return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
        }
    }
    var Qs = {
        StackEntity: ym,
        StackElement: vm,
        StackElements: mm
    };
    class gm {
        constructor(e) {
            this.key = e.key
        }
        whenReceived(e) {
            delete e.entities[this.key]
        }
        toString() {
            return `DropEntity{
	key:${this.key}
}`
        }
    }
    var Zs = {
        DropEntity: gm
    };
    class _m {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var bm = {
        Echo: _m
    };
    class Em {
        constructor(e) {
            this.key = e.key, this.from = e.from
        }
        whenReceived(e) {
            e.entities[this.key] && (e.entities[this.key].meta.locked = !0)
        }
        toString() {
            return `LockEntity{
	key:${this.key}
}`
        }
    }
    var wm = {
        LockEntity: Em
    };
    class Sm {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var eo = {
        OK: Sm
    };
    class Om {
        constructor(e) {
            this.from = e.from, this.key = e.key, this.val = e.val, this.restrictions = e.restrictions, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
        }
        whenReceived(e) {
            e.entities[this.key] = this
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
    var to = {
        NumberEntity: Om
    };
    const {
        ArtifactEntity: km
    } = Xs, {
        ClientWelcome: Rm,
        ClientConnected: Tm,
        ClientDisconnected: $m,
        ClientKicked: Pm,
        ClientSend: Im
    } = An, {
        CountGroup: Am
    } = xn, {
        DoodleEntity: xm,
        DoodleLine: Nm,
        DoodleLineRemoved: Lm
    } = Mn, {
        StackEntity: Cm,
        StackElement: Dm,
        StackElements: jm
    } = Qs, {
        DropEntity: Mm
    } = Zs, {
        Echo: Bm
    } = bm, {
        LockEntity: Um
    } = wm, {
        GCounter: Fm
    } = Nn, {
        GetAudienceReply: Gm,
        RoomExit: qm,
        RoomLock: Hm
    } = pr, {
        Notification: Wm
    } = Vs, {
        OK: Ym
    } = eo, {
        NumberEntity: zm
    } = to, {
        ObjectEcho: Jm,
        ObjectEntity: Vm
    } = Ln, {
        PNCounter: Hi
    } = Cn, {
        Reply: Km
    } = Ks, {
        TextEcho: Xm,
        TextEntity: Qm
    } = Dn, {
        TextRing: Zm
    } = jn, {
        createError: Wi,
        ObservedError: eg
    } = Js;

    function an(t, e, r) {
        switch (t) {
            case "ok":
                return new Ym;
            case "echo":
                return new Bm({
                    message: e.message
                });
            case "lock":
                return new Um({
                    key: e.key,
                    from: e.from
                });
            case "error":
                return Wi({
                    code: e.code,
                    message: e.msg
                });
            case "error/observed":
                return new eg({
                    to: e.to,
                    error: Wi({
                        code: e.error.code,
                        message: e.error.msg
                    })
                });
            case "string":
                return e;
            case "text":
                return new Qm({
                    from: e.from,
                    key: e.key,
                    text: e.val,
                    version: e.version,
                    meta: r,
                    acl: e.acl
                });
            case "text/echo":
                return new Xm({
                    message: e.message
                });
            case "object":
                return new Vm({
                    from: e.from,
                    key: e.key,
                    val: e.val,
                    meta: r,
                    acl: e.acl
                });
            case "object/echo":
                return new Jm({
                    message: e.message
                });
            case "drop":
                return new Mm({
                    key: e.key
                });
            case "artifact":
                return new km({
                    key: e.key,
                    artifactId: e.artifactId,
                    categoryId: e.categoryId,
                    rootId: e.rootId,
                    meta: r
                });
            case "client/connected":
                return new Tm({
                    id: e.id,
                    userId: e.userId,
                    name: e.name,
                    role: e.role,
                    reconnect: e.reconnect
                });
            case "client/disconnected":
                return new $m({
                    id: e.id,
                    role: e.role
                });
            case "client/kicked":
                return new Pm({
                    id: e.id,
                    banned: e.banned,
                    reason: e.reason
                });
            case "client/send":
                return new Im({
                    to: e.to,
                    from: e.from,
                    body: e.body,
                    userId: e.userID
                });
            case "client/welcome": {
                let n = new Rm({
                    id: e.id,
                    name: e.name,
                    secret: e.secret,
                    reconnect: e.reconnect,
                    here: e.here,
                    profile: e.profile,
                    replayEnd: e.replayEnd
                });
                if (e.entities) {
                    let i = {};
                    Object.entries(e.entities).forEach(([a, s]) => {
                        i[a] = an(s[0], s[1], s[2])
                    }), n.entities = i
                }
                return n
            }
            case "doodle":
                return new xm({
                    key: e.key,
                    colors: e.val.colors,
                    lines: e.val.lines,
                    live: e.val.live,
                    maxPoints: e.val.maxPoints,
                    size: e.val.size,
                    weights: e.val.weights,
                    meta: r,
                    acl: e.acl
                });
            case "doodle/line":
                return new Nm({
                    key: e.key,
                    line: e.val
                });
            case "doodle/line/removed":
                return new Lm({
                    key: e.key,
                    index: e.index
                });
            case "stack":
                return new Cm({
                    key: e.key,
                    size: e.size,
                    from: e.from,
                    version: e.version,
                    meta: e.meta,
                    acl: e.acl
                });
            case "stack/element":
                return new Dm({
                    key: e.key,
                    val: e.val
                });
            case "stack/elements":
                return new jm({
                    key: e.key,
                    vals: e.vals
                });
            case "number":
                return new zm({
                    key: e.key,
                    val: e.val,
                    restrictions: e.restrictions,
                    from: e.from,
                    version: e.version,
                    meta: r,
                    acl: e.acl
                });
            case "room/exit":
                return new qm({
                    cause: e.cause
                });
            case "room/lock":
                return new Hm;
            case "room/get-audience":
                return new Gm({
                    connections: e.connections
                });
            case "audience":
                return new Hi({
                    key: t,
                    count: e[1]
                });
            case "audience/count-group":
                return new Am({
                    key: e.key,
                    choices: e.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new Zm({
                    key: e.key,
                    elements: e.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new Fm({
                    key: e.key,
                    count: e.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new Hi({
                    key: e.key,
                    count: e.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
        }
    }

    function tg(t) {
        let e = JSON.parse(t.data),
            r = e.opcode || e.type;
        return e.re ? new Km({
            pc: e.pc,
            re: e.re,
            opcode: r,
            result: an(r, e.result)
        }) : new Wm({
            pc: e.pc,
            opcode: r,
            result: an(r, e.result)
        })
    }
    var rg = {
        parseResponseMessage: tg
    };
    const Yi = Mv,
        ng = cs,
        ig = In.exports,
        {
            CallError: ag
        } = Js,
        {
            ClientWelcome: sg
        } = An,
        {
            CountGroup: og
        } = xn,
        {
            GCounter: cg
        } = Nn,
        {
            Notification: zi
        } = Vs,
        {
            ObjectEntity: Dr
        } = Ln,
        {
            PNCounter: ug
        } = Cn,
        {
            Reply: lg
        } = Ks,
        {
            Request: fg
        } = om,
        {
            TextEntity: jr
        } = Dn,
        {
            TextRing: dg
        } = jn,
        {
            parseResponseMessage: hg
        } = rg,
        {
            DoodleEntity: pg
        } = Mn,
        {
            StackEntity: yg
        } = Qs,
        vg = 1e3 + Math.floor(Math.random() * 500),
        Ji = 13e3;
    class mg extends ig {
        constructor(e) {
            if (super(), this.debug = e.debug || !1, !e.host) throw new Error("unable to create ecast WSClient: no host provided");
            if (this.host = e.host, !e.code) throw new Error("unable to create ecast WSClient: no room code provided");
            if (this.code = e.code, e.scheme ? this.scheme = e.scheme : this.scheme = "wss", e.secret && e.id) this.id = e.id, this.secret = e.secret;
            else {
                switch (e.role) {
                    case "player":
                        if (!e.name) throw new Error("unable to create ecast WSClient: no name provided");
                        break;
                    case "host":
                        if (!e.token) throw new Error("unable to create ecast WSClient: tried to connect with host role but without host token");
                        this.token = e.token;
                        break;
                    case "moderator":
                        if (!e.password) throw new Error("unable to create ecast WSClient: tried to connect with moderator role but without password");
                        break
                }
                e.password && (this.password = e.password), e.twitchToken && (this.twitchToken = e.twitchToken)
            }
            this.name = e.name, this.role = e.role, this.deviceId = e.deviceId, this.userId = e.userId, this.conn = null, this.seq = 0, this.pending = {}, this.entities = {}, e.role == "host" && (this.replaySince = e.replaySince || 0, this.syncEntities = e.syncEntities || !1)
        }
        connect() {
            const e = {
                id: this.id,
                role: this.role,
                name: this.name,
                format: "json",
                "user-id": this.userId,
                password: this.password
            };
            this.deviceId && (e["device-id"] = this.deviceId), this.twitchToken && (e["twitch-token"] = this.twitchToken), this.secret && (e.secret = this.secret), this.role === "host" && (e["host-token"] = this.token, this.replaySince > 0 && (e["replay-since"] = this.replaySince), this.syncEntities && (e["sync-entities"] = this.syncEntities));
            const r = ng.stringify(e),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((i, a) => {
                let s = !1,
                    o = !1,
                    c = y => {
                        i(y), s = !0
                    },
                    f = y => {
                        a(y), s = !0
                    };
                this.conn = new Yi(n, "ecast-v0"), this.conn.onmessage = y => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(y.data),null,2)}`);
                    const m = hg(y);
                    if (m instanceof lg) this.onReply(m);
                    else if (m instanceof zi) {
                        if (m.result instanceof sg) o = !0, this.id = m.result.id, this.deviceId = m.result.deviceId, this.entities = m.result.entities, this.secret = m.result.secret, m.result.name && (this.name = m.result.name), c(m.result);
                        else if (!s) {
                            f(m.result);
                            return
                        }
                        this.onNotification(m)
                    } else console.error(`failed to parse response messsage: ${m}`)
                }, this.conn.onerror = y => {
                    s ? this.emit("socketError", y) : f(y)
                }, this.conn.onclose = y => {
                    this.debugLog("onclose", y.code), o && y.code === 1006 ? this.reconnect() : this.emit("socketClose", y)
                }, this.conn.onopen = y => {
                    this.emit("socketOpen", y)
                }
            })
        }
        sleep(e) {
            return new Promise(r => setTimeout(r, e))
        }
        debugLog(...e) {
            !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...e)
        }
        async reconnect() {
            this.disconnect(), this.debugLog("Attempting to reconnect");
            let e = 1,
                r = vg;
            for (;;) try {
                this.emit("connection", {
                    status: "connecting",
                    attempt: e
                }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                    status: "connected"
                });
                return
            } catch (n) {
                if (this.debugLog("reconnect error", n), n.code === 1005 || n.code === 1e3) {
                    this.debugLog("unable to reconnect!", n), this.emit("socketClose", n);
                    return
                }
                if (r >= Ji) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                e += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: e
                }), await this.sleep(r), r = Math.min(Ji, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(e) {
            const r = e.re,
                n = this.pending[r];
            if (!n) {
                const i = new zi(e);
                i.re = r, this.emit("notification", i);
                return
            }
            delete this.pending[r], e.result instanceof ag ? n.reject(e.result) : n.resolve(e.result)
        }
        onNotification(e) {
            typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
        }
        send(e, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== Yi.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                i = new fg({
                    seq: n,
                    opcode: e,
                    params: r
                }),
                a = new Promise((o, c) => {
                    this.pending[n] = {
                        resolve: o,
                        reject: c,
                        request: i
                    }
                }),
                s = JSON.stringify(i);
            return this.debugLog(`send -> ${s}`), this.conn.send(s), a
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
        mail(e, r) {
            return this.send("client/send", {
                from: this.id,
                to: e,
                body: r
            })
        }
        kick(e, r = !1, n) {
            return this.send("client/kick", {
                id: e,
                ban: r,
                reason: n
            })
        }
        async drop(e) {
            const r = await this.send("drop", {
                key: e
            });
            return delete this.entities[e], r
        }
        echo(e) {
            return this.send("echo", {
                message: e
            })
        }
        async lock(e) {
            const r = await this.send("lock", {
                key: e
            });
            return this.entities[e].meta.locked = !0, r
        }
        async getNumber(e) {
            const r = await this.send("number/get", {
                key: e
            });
            return this.entities[e].val = r.val, this.entities[e].restrictions = r.restrictions, r
        }
        async updateNumber(e, r) {
            const n = await this.send("number/update", {
                key: e,
                val: r
            });
            return this.entities[e].val = r, n
        }
        async createObject(e, r, n) {
            const i = {
                key: e,
                val: r
            };
            n && (i.acl = n);
            const a = await this.send("object/create", i);
            return this.entities[e] = new Dr({
                key: e,
                val: r,
                meta: {
                    locked: !1
                }
            }), a
        }
        echoObject(e) {
            return this.send("object/echo", {
                message: e
            })
        }
        async setObject(e, r, n) {
            const i = {
                key: e,
                val: r
            };
            n && (i.acl = n);
            const a = await this.send("object/set", i);
            return this.entities[e] = new Dr({
                key: e,
                val: r,
                meta: {
                    locked: !1
                }
            }), a
        }
        async updateObject(e, r) {
            const n = await this.send("object/update", {
                key: e,
                val: r
            });
            return this.entities[e] = new Dr({
                key: e,
                val: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        echoText(e) {
            return this.send("text/echo", {
                message: e
            })
        }
        getText(e) {
            return this.send("text/get", {
                key: e
            })
        }
        async createText(e, r, n) {
            const i = {
                    key: e,
                    val: r
                },
                {
                    acl: a,
                    accept: s,
                    reject: o
                } = n;
            a && (i.acl = a), s && (i.accept = s), o && (i.reject = o);
            const c = await this.send("text/create", i);
            return this.entities[e] = new jr({
                key: e,
                text: r,
                meta: {
                    locked: !1
                }
            }), c
        }
        async setText(e, r, n) {
            const i = {
                key: e,
                val: r
            };
            n && (i.acl = n);
            const a = await this.send("text/set", i);
            return this.entities[e] = new jr({
                key: e,
                text: r,
                meta: {
                    locked: !1
                }
            }), a
        }
        async updateText(e, r) {
            const n = await this.send("text/update", {
                key: e,
                val: r
            });
            return this.entities[e] = new jr({
                key: e,
                text: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        async createDoodle(e, r) {
            let n = {
                key: e
            };
            const {
                acl: i,
                colors: a,
                live: s,
                maxPoints: o,
                size: c,
                weights: f
            } = r;
            i && (n.acl = i), a && (n.colors = a), n.live = s, o != null && (n.maxPoints = o), c && (n.size = c), f && (n.weights = f);
            const y = await this.send("doodle/create", n);
            return this.entities[e] = new pg({
                key: e,
                colors: a,
                lines: [],
                live: s,
                locked: !1,
                maxPoints: n.maxPoints || 0,
                size: c,
                weights: f,
                meta: {
                    locked: !1
                }
            }), y
        }
        async getDoodle(e) {
            return this.send("doodle/get", {
                key: e
            })
        }
        async strokeDoodle(e, r) {
            const {
                layer: n,
                color: i,
                weight: a,
                points: s
            } = r, o = await this.send("doodle/stroke", {
                key: e,
                layer: n,
                color: i,
                weight: a,
                points: s
            }), c = {
                layer: n,
                color: i,
                weight: a,
                points: s
            };
            return this.entities[e].lines.push(c), o
        }
        async undoDoodle(e) {
            const r = await this.send("doodle/undo", {
                key: e
            });
            return this.entities[e].lines.pop(), r
        }
        async createStack(e, r) {
            const n = {
                key: e
            };
            r && (n.acl = r);
            const i = await this.send("stack/create", n);
            return this.entities[e] = new yg({
                key: e,
                size: 0,
                meta: {
                    locked: !1
                }
            }), i
        }
        async pushStack(e, r) {
            return await this.send("stack/push", {
                key: e,
                val: r
            })
        }
        async bulkPushStack(e, r) {
            return await this.send("stack/bulkpush", {
                key: e,
                vals: r
            })
        }
        async peekStack(e, r) {
            return await this.send("stack/peek", {
                key: e,
                size: r
            })
        }
        async popStack(e) {
            return await this.send("stack/pop", {
                key: e
            })
        }
        async createCountGroup(e, r) {
            const n = await this.send("audience/count-group/create", {
                name: e,
                options: r
            });
            return this.entities[e] = new og({
                key: e,
                choices: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementCountGroupCounter(e, r, n = 1) {
            return this.send("audience/count-group/increment", {
                name: e,
                vote: r,
                times: n
            })
        }
        getCountGroup(e) {
            return this.send("audience/count-group/get", {
                name: e
            })
        }
        async createGCounter(e, r) {
            const n = await this.send("audience/g-counter/create", {
                key: e,
                count: r
            });
            return this.entities[e] = new cg({
                key: e,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementGCounter(e, r) {
            return this.send("audience/g-counter/increment", {
                key: e,
                times: r
            })
        }
        getGCounter(e) {
            return this.send("audience/g-counter/get", {
                key: e
            })
        }
        async createPNCounter(e, r) {
            const n = await this.send("audience/pn-counter/create", {
                key: e,
                count: r
            });
            return this.entities[e] = new ug({
                key: e,
                count: r,
                meta: {
                    locked: !1
                }
            }), n
        }
        incrementPNCounter(e, r) {
            return this.send("audience/pn-counter/increment", {
                key: e,
                times: r
            })
        }
        decrementPNCounter(e, r) {
            return this.send("audience/pn-counter/decrement", {
                key: e,
                times: r
            })
        }
        getPNCounter(e) {
            return this.send("audience/pn-counter/get", {
                key: e
            })
        }
        async createTextRing(e, r) {
            const n = {
                    key: e
                },
                {
                    limit: i,
                    accept: a,
                    reject: s
                } = r;
            i && (n.limit = i), a && (n.accept = a), s && (n.reject = s);
            const o = await this.send("audience/text-ring/create", n);
            return this.entities[e] = new dg({
                key: e,
                elements: [],
                limit: i,
                meta: {
                    locked: !1
                }
            }), o
        }
        getTextRing(e) {
            return this.send("audience/text-ring/get", {
                name: e
            })
        }
        pushTextRing(e, r) {
            return this.send("audience/text-ring/push", {
                name: e,
                text: r
            })
        }
    }
    var gg = {
        WSClient: mg
    };
    const {
        APIClient: _g
    } = jv, {
        WSClient: bg
    } = gg, {
        CreateRoomReply: Eg,
        GetRoomReply: wg
    } = pr, {
        ClientWelcome: Sg,
        ClientDisconnected: Og
    } = An, {
        ArtifactEntity: kg
    } = Xs, {
        GCounter: Rg
    } = Nn, {
        NumberEntity: Tg
    } = to, {
        TextEntity: $g
    } = Dn, {
        DoodleEntity: Pg
    } = Mn, {
        ObjectEntity: Ig
    } = Ln, {
        CountGroup: Ag
    } = xn, {
        DropEntity: xg
    } = Zs, {
        OK: Ng
    } = eo, {
        RoomExit: Lg
    } = pr, {
        TextRing: Cg
    } = jn, {
        PNCounter: Dg
    } = Cn;
    var Vi = {
        APIClient: _g,
        WSClient: bg,
        ClientWelcome: Sg,
        CreateRoomReply: Eg,
        DropEntity: xg,
        GetRoomReply: wg,
        ClientDisconnected: Og,
        RoomExit: Lg,
        OK: Ng,
        ArtifactEntity: kg,
        DoodleEntity: Pg,
        NumberEntity: Tg,
        CountGroup: Ag,
        GCounter: Rg,
        ObjectEntity: Ig,
        PNCounter: Dg,
        TextEntity: $g,
        TextRing: Cg
    };
    const jg = [{
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
        Ki = t => jg.find(e => e.tag === t || e.categoryId === t);

    function Jt(...t) {
        console.log(...t)
    }

    function Mg(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var tr = {
        exports: {}
    };
    (function(t, e) {
        (function(r, n) {
            n(e)
        })(ve, function(r) {
            var n = typeof window < "u" ? window : typeof ve < "u" ? ve : typeof self < "u" ? self : {},
                i = function(l, p) {
                    if (p = p.split(":")[0], l = +l, !l) return !1;
                    switch (p) {
                        case "http":
                        case "ws":
                            return l !== 80;
                        case "https":
                        case "wss":
                            return l !== 443;
                        case "ftp":
                            return l !== 21;
                        case "gopher":
                            return l !== 70;
                        case "file":
                            return !1
                    }
                    return l !== 0
                },
                a = Object.prototype.hasOwnProperty,
                s;

            function o(d) {
                try {
                    return decodeURIComponent(d.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function c(d) {
                try {
                    return encodeURIComponent(d)
                } catch {
                    return null
                }
            }

            function f(d) {
                for (var l = /([^=?#&]+)=?([^&]*)/g, p = {}, u; u = l.exec(d);) {
                    var h = o(u[1]),
                        _ = o(u[2]);
                    h === null || _ === null || h in p || (p[h] = _)
                }
                return p
            }

            function y(d, l) {
                l = l || "";
                var p = [],
                    u, h;
                typeof l != "string" && (l = "?");
                for (h in d)
                    if (a.call(d, h)) {
                        if (u = d[h], !u && (u === null || u === s || isNaN(u)) && (u = ""), h = c(h), u = c(u), h === null || u === null) continue;
                        p.push(h + "=" + u)
                    } return p.length ? l + p.join("&") : ""
            }
            var m = y,
                w = f,
                O = {
                    stringify: m,
                    parse: w
                },
                k = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                U = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                ee = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                N = new RegExp("^" + ee + "+");

            function te(d) {
                return (d || "").toString().replace(N, "")
            }
            var ie = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(l, p) {
                        return K(p.protocol) ? l.replace(/\\/g, "/") : l
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                ue = {
                    hash: 1,
                    query: 1
                };

            function pe(d) {
                var l;
                typeof window < "u" ? l = window : typeof n < "u" ? l = n : typeof self < "u" ? l = self : l = {};
                var p = l.location || {};
                d = d || p;
                var u = {},
                    h = typeof d,
                    _;
                if (d.protocol === "blob:") u = new W(unescape(d.pathname), {});
                else if (h === "string") {
                    u = new W(d, {});
                    for (_ in ue) delete u[_]
                } else if (h === "object") {
                    for (_ in d) _ in ue || (u[_] = d[_]);
                    u.slashes === void 0 && (u.slashes = k.test(d.href))
                }
                return u
            }

            function K(d) {
                return d === "file:" || d === "ftp:" || d === "http:" || d === "https:" || d === "ws:" || d === "wss:"
            }

            function le(d, l) {
                d = te(d), l = l || {};
                var p = U.exec(d),
                    u = p[1] ? p[1].toLowerCase() : "",
                    h = !!p[2],
                    _ = !!p[3],
                    b = 0,
                    R;
                return h ? _ ? (R = p[2] + p[3] + p[4], b = p[2].length + p[3].length) : (R = p[2] + p[4], b = p[2].length) : _ ? (R = p[3] + p[4], b = p[3].length) : R = p[4], u === "file:" ? b >= 2 && (R = R.slice(2)) : K(u) ? R = p[4] : u ? h && (R = R.slice(2)) : b >= 2 && K(l.protocol) && (R = p[4]), {
                    protocol: u,
                    slashes: h || K(u),
                    slashesCount: b,
                    rest: R
                }
            }

            function re(d, l) {
                if (d === "") return l;
                for (var p = (l || "/").split("/").slice(0, -1).concat(d.split("/")), u = p.length, h = p[u - 1], _ = !1, b = 0; u--;) p[u] === "." ? p.splice(u, 1) : p[u] === ".." ? (p.splice(u, 1), b++) : b && (u === 0 && (_ = !0), p.splice(u, 1), b--);
                return _ && p.unshift(""), (h === "." || h === "..") && p.push(""), p.join("/")
            }

            function W(d, l, p) {
                if (d = te(d), !(this instanceof W)) return new W(d, l, p);
                var u, h, _, b, R, P, he = ie.slice(),
                    _e = typeof l,
                    I = this,
                    Or = 0;
                for (_e !== "object" && _e !== "string" && (p = l, l = null), p && typeof p != "function" && (p = O.parse), l = pe(l), h = le(d || "", l), u = !h.protocol && !h.slashes, I.slashes = h.slashes || u && l.slashes, I.protocol = h.protocol || l.protocol || "", d = h.rest, (I.protocol === "file:" || !h.slashes && (h.protocol || h.slashesCount < 2 || !K(I.protocol))) && (he[3] = [/(.*)/, "pathname"]); Or < he.length; Or++) {
                    if (b = he[Or], typeof b == "function") {
                        d = b(d, I);
                        continue
                    }
                    _ = b[0], P = b[1], _ !== _ ? I[P] = d : typeof _ == "string" ? ~(R = d.indexOf(_)) && (typeof b[2] == "number" ? (I[P] = d.slice(0, R), d = d.slice(R + b[2])) : (I[P] = d.slice(R), d = d.slice(0, R))) : (R = _.exec(d)) && (I[P] = R[1], d = d.slice(0, R.index)), I[P] = I[P] || u && b[3] && l[P] || "", b[4] && (I[P] = I[P].toLowerCase())
                }
                p && (I.query = p(I.query)), u && l.slashes && I.pathname.charAt(0) !== "/" && (I.pathname !== "" || l.pathname !== "") && (I.pathname = re(I.pathname, l.pathname)), I.pathname.charAt(0) !== "/" && K(I.protocol) && (I.pathname = "/" + I.pathname), i(I.port, I.protocol) || (I.host = I.hostname, I.port = ""), I.username = I.password = "", I.auth && (b = I.auth.split(":"), I.username = b[0] || "", I.password = b[1] || ""), I.origin = I.protocol !== "file:" && K(I.protocol) && I.host ? I.protocol + "//" + I.host : "null", I.href = I.toString()
            }

            function me(d, l, p) {
                var u = this;
                switch (d) {
                    case "query":
                        typeof l == "string" && l.length && (l = (p || O.parse)(l)), u[d] = l;
                        break;
                    case "port":
                        u[d] = l, i(l, u.protocol) ? l && (u.host = u.hostname + ":" + l) : (u.host = u.hostname, u[d] = "");
                        break;
                    case "hostname":
                        u[d] = l, u.port && (l += ":" + u.port), u.host = l;
                        break;
                    case "host":
                        u[d] = l, /:\d+$/.test(l) ? (l = l.split(":"), u.port = l.pop(), u.hostname = l.join(":")) : (u.hostname = l, u.port = "");
                        break;
                    case "protocol":
                        u.protocol = l.toLowerCase(), u.slashes = !p;
                        break;
                    case "pathname":
                    case "hash":
                        if (l) {
                            var h = d === "pathname" ? "/" : "#";
                            u[d] = l.charAt(0) !== h ? h + l : l
                        } else u[d] = l;
                        break;
                    default:
                        u[d] = l
                }
                for (var _ = 0; _ < ie.length; _++) {
                    var b = ie[_];
                    b[4] && (u[b[1]] = u[b[1]].toLowerCase())
                }
                return u.origin = u.protocol !== "file:" && K(u.protocol) && u.host ? u.protocol + "//" + u.host : "null", u.href = u.toString(), u
            }

            function Y(d) {
                (!d || typeof d != "function") && (d = O.stringify);
                var l, p = this,
                    u = p.protocol;
                u && u.charAt(u.length - 1) !== ":" && (u += ":");
                var h = u + (p.slashes || K(p.protocol) ? "//" : "");
                return p.username && (h += p.username, p.password && (h += ":" + p.password), h += "@"), h += p.host + p.pathname, l = typeof p.query == "object" ? d(p.query) : p.query, l && (h += l.charAt(0) !== "?" ? "?" + l : l), p.hash && (h += p.hash), h
            }
            W.prototype = {
                set: me,
                toString: Y
            }, W.extractProtocol = le, W.location = pe, W.trimLeft = te, W.qs = O;
            var fe = W;

            function z(d, l) {
                setTimeout(function(p) {
                    return d.call(p)
                }, 4, l)
            }

            function v(d, l) {
                typeof process < "u" && console[d].call(null, l)
            }

            function E(d, l) {
                d === void 0 && (d = []);
                var p = [];
                return d.forEach(function(u) {
                    l(u) || p.push(u)
                }), p
            }

            function $(d, l) {
                d === void 0 && (d = []);
                var p = [];
                return d.forEach(function(u) {
                    l(u) && p.push(u)
                }), p
            }
            var M = function() {
                this.listeners = {}
            };
            M.prototype.addEventListener = function(l, p) {
                typeof p == "function" && (Array.isArray(this.listeners[l]) || (this.listeners[l] = []), $(this.listeners[l], function(u) {
                    return u === p
                }).length === 0 && this.listeners[l].push(p))
            }, M.prototype.removeEventListener = function(l, p) {
                var u = this.listeners[l];
                this.listeners[l] = E(u, function(h) {
                    return h === p
                })
            }, M.prototype.dispatchEvent = function(l) {
                for (var p = this, u = [], h = arguments.length - 1; h-- > 0;) u[h] = arguments[h + 1];
                var _ = l.type,
                    b = this.listeners[_];
                return Array.isArray(b) ? (b.forEach(function(R) {
                    u.length > 0 ? R.apply(p, u) : R.call(p, l)
                }), !0) : !1
            };

            function C(d) {
                var l = d.indexOf("?");
                return l >= 0 ? d.slice(0, l) : d
            }
            var A = function() {
                this.urlMap = {}
            };
            A.prototype.attachWebSocket = function(l, p) {
                var u = C(p),
                    h = this.urlMap[u];
                if (h && h.server && h.websockets.indexOf(l) === -1) return h.websockets.push(l), h.server
            }, A.prototype.addMembershipToRoom = function(l, p) {
                var u = this.urlMap[C(l.url)];
                u && u.server && u.websockets.indexOf(l) !== -1 && (u.roomMemberships[p] || (u.roomMemberships[p] = []), u.roomMemberships[p].push(l))
            }, A.prototype.attachServer = function(l, p) {
                var u = C(p),
                    h = this.urlMap[u];
                if (!h) return this.urlMap[u] = {
                    server: l,
                    websockets: [],
                    roomMemberships: {}
                }, l
            }, A.prototype.serverLookup = function(l) {
                var p = C(l),
                    u = this.urlMap[p];
                if (u) return u.server
            }, A.prototype.websocketsLookup = function(l, p, u) {
                var h = C(l),
                    _, b = this.urlMap[h];
                if (_ = b ? b.websockets : [], p) {
                    var R = b.roomMemberships[p];
                    _ = R || []
                }
                return u ? _.filter(function(P) {
                    return P !== u
                }) : _
            }, A.prototype.removeServer = function(l) {
                delete this.urlMap[C(l)]
            }, A.prototype.removeWebSocket = function(l, p) {
                var u = C(p),
                    h = this.urlMap[u];
                h && (h.websockets = E(h.websockets, function(_) {
                    return _ === l
                }))
            }, A.prototype.removeMembershipFromRoom = function(l, p) {
                var u = this.urlMap[C(l.url)],
                    h = u.roomMemberships[p];
                u && h !== null && (u.roomMemberships[p] = E(h, function(_) {
                    return _ === l
                }))
            };
            var g = new A,
                S = {
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
                T = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                D = function() {};
            D.prototype.stopPropagation = function() {}, D.prototype.stopImmediatePropagation = function() {}, D.prototype.initEvent = function(l, p, u) {
                l === void 0 && (l = "undefined"), p === void 0 && (p = !1), u === void 0 && (u = !1), this.type = "" + l, this.bubbles = Boolean(p), this.cancelable = Boolean(u)
            };
            var j = function(d) {
                    function l(p, u) {
                        if (u === void 0 && (u = {}), d.call(this), !p) throw new TypeError(T.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof u != "object") throw new TypeError(T.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var h = u.bubbles,
                            _ = u.cancelable;
                        this.type = "" + p, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = _ ? Boolean(_) : !1, this.cancelBubble = !1, this.bubbles = h ? Boolean(h) : !1
                    }
                    return d && (l.__proto__ = d), l.prototype = Object.create(d && d.prototype), l.prototype.constructor = l, l
                }(D),
                ge = function(d) {
                    function l(p, u) {
                        if (u === void 0 && (u = {}), d.call(this), !p) throw new TypeError(T.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof u != "object") throw new TypeError(T.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var h = u.bubbles,
                            _ = u.cancelable,
                            b = u.data,
                            R = u.origin,
                            P = u.lastEventId,
                            he = u.ports;
                        this.type = "" + p, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = _ ? Boolean(_) : !1, this.canncelBubble = !1, this.bubbles = h ? Boolean(h) : !1, this.origin = "" + R, this.ports = typeof he > "u" ? null : he, this.data = typeof b > "u" ? null : b, this.lastEventId = "" + (P || "")
                    }
                    return d && (l.__proto__ = d), l.prototype = Object.create(d && d.prototype), l.prototype.constructor = l, l
                }(D),
                Me = function(d) {
                    function l(p, u) {
                        if (u === void 0 && (u = {}), d.call(this), !p) throw new TypeError(T.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof u != "object") throw new TypeError(T.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var h = u.bubbles,
                            _ = u.cancelable,
                            b = u.code,
                            R = u.reason,
                            P = u.wasClean;
                        this.type = "" + p, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = _ ? Boolean(_) : !1, this.cancelBubble = !1, this.bubbles = h ? Boolean(h) : !1, this.code = typeof b == "number" ? parseInt(b, 10) : 0, this.reason = "" + (R || ""), this.wasClean = P ? Boolean(P) : !1
                    }
                    return d && (l.__proto__ = d), l.prototype = Object.create(d && d.prototype), l.prototype.constructor = l, l
                }(D);

            function de(d) {
                var l = d.type,
                    p = d.target,
                    u = new j(l);
                return p && (u.target = p, u.srcElement = p, u.currentTarget = p), u
            }

            function Be(d) {
                var l = d.type,
                    p = d.origin,
                    u = d.data,
                    h = d.target,
                    _ = new ge(l, {
                        data: u,
                        origin: p
                    });
                return h && (_.target = h, _.srcElement = h, _.currentTarget = h), _
            }

            function ye(d) {
                var l = d.code,
                    p = d.reason,
                    u = d.type,
                    h = d.target,
                    _ = d.wasClean;
                _ || (_ = l === S.CLOSE_NORMAL || l === S.CLOSE_NO_STATUS);
                var b = new Me(u, {
                    code: l,
                    reason: p,
                    wasClean: _
                });
                return h && (b.target = h, b.srcElement = h, b.currentTarget = h), b
            }

            function ii(d, l, p) {
                d.readyState = X.CLOSING;
                var u = g.serverLookup(d.url),
                    h = ye({
                        type: "close",
                        target: d.target,
                        code: l,
                        reason: p
                    }),
                    _ = ye({
                        type: "server::close",
                        target: d,
                        code: l,
                        reason: p
                    });
                z(function() {
                    g.removeWebSocket(d, d.url), d.readyState = X.CLOSED, d.dispatchEvent(h), d.dispatchEvent(_), u && u.dispatchEvent(h, u)
                }, d)
            }

            function Go(d, l, p) {
                d.readyState = X.CLOSING;
                var u = g.serverLookup(d.url),
                    h = ye({
                        type: "close",
                        target: d.target,
                        code: l,
                        reason: p,
                        wasClean: !1
                    }),
                    _ = ye({
                        type: "server::close",
                        target: d,
                        code: l,
                        reason: p,
                        wasClean: !1
                    }),
                    b = de({
                        type: "error",
                        target: d.target
                    });
                z(function() {
                    g.removeWebSocket(d, d.url), d.readyState = X.CLOSED, d.dispatchEvent(b), d.dispatchEvent(h), d.dispatchEvent(_), u && u.dispatchEvent(h, u)
                }, d)
            }

            function Bt(d) {
                return Object.prototype.toString.call(d) !== "[object Blob]" && !(d instanceof ArrayBuffer) && (d = String(d)), d
            }
            var Er = new WeakMap;

            function ai(d) {
                if (Er.has(d)) return Er.get(d);
                var l = new Proxy(d, {
                    get: function(u, h) {
                        return h === "close" ? function(b) {
                            b === void 0 && (b = {});
                            var R = b.code || S.CLOSE_NORMAL,
                                P = b.reason || "";
                            ii(l, R, P)
                        } : h === "send" ? function(b) {
                            b = Bt(b), d.dispatchEvent(Be({
                                type: "message",
                                data: b,
                                origin: this.url,
                                target: d
                            }))
                        } : h === "on" ? function(b, R) {
                            d.addEventListener("server::" + b, R)
                        } : h === "target" ? d : u[h]
                    }
                });
                return Er.set(d, l), l
            }

            function qo(d) {
                var l = encodeURIComponent(d).match(/%[89ABab]/g);
                return d.length + (l ? l.length : 0)
            }

            function Ho(d) {
                var l = new fe(d),
                    p = l.pathname,
                    u = l.protocol,
                    h = l.hash;
                if (!d) throw new TypeError(T.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (p || (l.pathname = "/"), u === "") throw new SyntaxError(T.CONSTRUCTOR_ERROR + " The URL '" + l.toString() + "' is invalid.");
                if (u !== "ws:" && u !== "wss:") throw new SyntaxError(T.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + u + "' is not allowed.");
                if (h !== "") throw new SyntaxError(T.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + h + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return l.toString()
            }

            function Wo(d) {
                if (d === void 0 && (d = []), !Array.isArray(d) && typeof d != "string") throw new SyntaxError(T.CONSTRUCTOR_ERROR + " The subprotocol '" + d.toString() + "' is invalid.");
                typeof d == "string" && (d = [d]);
                var l = d.map(function(u) {
                        return {
                            count: 1,
                            protocol: u
                        }
                    }).reduce(function(u, h) {
                        return u[h.protocol] = (u[h.protocol] || 0) + h.count, u
                    }, {}),
                    p = Object.keys(l).filter(function(u) {
                        return l[u] > 1
                    });
                if (p.length > 0) throw new SyntaxError(T.CONSTRUCTOR_ERROR + " The subprotocol '" + p[0] + "' is duplicated.");
                return d
            }
            var X = function(d) {
                function l(u, h) {
                    d.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = Ho(u), h = Wo(h), this.protocol = h[0] || "", this.binaryType = "blob", this.readyState = l.CONNECTING;
                    var _ = ai(this),
                        b = g.attachWebSocket(_, this.url);
                    z(function() {
                        if (b)
                            if (b.options.verifyClient && typeof b.options.verifyClient == "function" && !b.options.verifyClient()) this.readyState = l.CLOSED, v("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), g.removeWebSocket(_, this.url), this.dispatchEvent(de({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(ye({
                                type: "close",
                                target: this,
                                code: S.CLOSE_NORMAL
                            }));
                            else {
                                if (b.options.selectProtocol && typeof b.options.selectProtocol == "function") {
                                    var P = b.options.selectProtocol(h),
                                        he = P !== "",
                                        _e = h.indexOf(P) !== -1;
                                    if (he && !_e) {
                                        this.readyState = l.CLOSED, v("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), g.removeWebSocket(_, this.url), this.dispatchEvent(de({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(ye({
                                            type: "close",
                                            target: this,
                                            code: S.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = P
                                }
                                this.readyState = l.OPEN, this.dispatchEvent(de({
                                    type: "open",
                                    target: this
                                })), b.dispatchEvent(de({
                                    type: "connection"
                                }), _)
                            }
                        else this.readyState = l.CLOSED, this.dispatchEvent(de({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ye({
                            type: "close",
                            target: this,
                            code: S.CLOSE_NORMAL
                        })), v("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                d && (l.__proto__ = d), l.prototype = Object.create(d && d.prototype), l.prototype.constructor = l;
                var p = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return p.onopen.get = function() {
                    return this._onopen
                }, p.onmessage.get = function() {
                    return this._onmessage
                }, p.onclose.get = function() {
                    return this._onclose
                }, p.onerror.get = function() {
                    return this._onerror
                }, p.onopen.set = function(u) {
                    this.removeEventListener("open", this._onopen), this._onopen = u, this.addEventListener("open", u)
                }, p.onmessage.set = function(u) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = u, this.addEventListener("message", u)
                }, p.onclose.set = function(u) {
                    this.removeEventListener("close", this._onclose), this._onclose = u, this.addEventListener("close", u)
                }, p.onerror.set = function(u) {
                    this.removeEventListener("error", this._onerror), this._onerror = u, this.addEventListener("error", u)
                }, l.prototype.send = function(h) {
                    var _ = this;
                    if (this.readyState === l.CLOSING || this.readyState === l.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var b = Be({
                            type: "server::message",
                            origin: this.url,
                            data: Bt(h)
                        }),
                        R = g.serverLookup(this.url);
                    R && z(function() {
                        _.dispatchEvent(b, h)
                    }, R)
                }, l.prototype.close = function(h, _) {
                    if (h !== void 0 && (typeof h != "number" || h !== 1e3 && (h < 3e3 || h > 4999))) throw new TypeError(T.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + h + " is neither.");
                    if (_ !== void 0) {
                        var b = qo(_);
                        if (b > 123) throw new SyntaxError(T.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === l.CLOSING || this.readyState === l.CLOSED)) {
                        var R = ai(this);
                        this.readyState === l.CONNECTING ? Go(R, h || S.CLOSE_ABNORMAL, _) : ii(R, h || S.CLOSE_NO_STATUS, _)
                    }
                }, Object.defineProperties(l.prototype, p), l
            }(M);
            X.CONNECTING = 0, X.prototype.CONNECTING = X.CONNECTING, X.OPEN = 1, X.prototype.OPEN = X.OPEN, X.CLOSING = 2, X.prototype.CLOSING = X.CLOSING, X.CLOSED = 3, X.prototype.CLOSED = X.CLOSED;
            var Yo = function(d) {
                return d.reduce(function(l, p) {
                    return l.indexOf(p) > -1 ? l : l.concat(p)
                }, [])
            };

            function si() {
                return typeof window < "u" ? window : typeof process == "object" && typeof Mg == "function" && typeof ve == "object" ? ve : this
            }
            var oi = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                wr = function(d) {
                    function l(p, u) {
                        u === void 0 && (u = oi), d.call(this);
                        var h = new fe(p);
                        h.pathname || (h.pathname = "/"), this.url = h.toString(), this.originalWebSocket = null;
                        var _ = g.attachServer(this, this.url);
                        if (!_) throw this.dispatchEvent(de({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, oi, u), this.options.mock && this.mockWebsocket()
                    }
                    return d && (l.__proto__ = d), l.prototype = Object.create(d && d.prototype), l.prototype.constructor = l, l.prototype.mockWebsocket = function() {
                        var u = si();
                        this.originalWebSocket = u.WebSocket, u.WebSocket = X
                    }, l.prototype.restoreWebsocket = function() {
                        var u = si();
                        this.originalWebSocket !== null && (u.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, l.prototype.stop = function(u) {
                        u === void 0 && (u = function() {}), this.options.mock && this.restoreWebsocket(), g.removeServer(this.url), typeof u == "function" && u()
                    }, l.prototype.on = function(u, h) {
                        this.addEventListener(u, h)
                    }, l.prototype.close = function(u) {
                        u === void 0 && (u = {});
                        var h = u.code,
                            _ = u.reason,
                            b = u.wasClean,
                            R = g.websocketsLookup(this.url);
                        g.removeServer(this.url), R.forEach(function(P) {
                            P.readyState = X.CLOSED, P.dispatchEvent(ye({
                                type: "close",
                                target: P.target,
                                code: h || S.CLOSE_NORMAL,
                                reason: _ || "",
                                wasClean: b
                            }))
                        }), this.dispatchEvent(ye({
                            type: "close"
                        }), this)
                    }, l.prototype.emit = function(u, h, _) {
                        var b = this;
                        _ === void 0 && (_ = {});
                        var R = _.websockets;
                        R || (R = g.websocketsLookup(this.url)), typeof _ != "object" || arguments.length > 3 ? (h = Array.prototype.slice.call(arguments, 1, arguments.length), h = h.map(function(P) {
                            return Bt(P)
                        })) : h = Bt(h), R.forEach(function(P) {
                            Array.isArray(h) ? P.dispatchEvent.apply(P, [Be({
                                type: u,
                                data: h,
                                origin: b.url,
                                target: P.target
                            })].concat(h)) : P.dispatchEvent(Be({
                                type: u,
                                data: h,
                                origin: b.url,
                                target: P.target
                            }))
                        })
                    }, l.prototype.clients = function() {
                        return g.websocketsLookup(this.url)
                    }, l.prototype.to = function(u, h, _) {
                        var b = this;
                        _ === void 0 && (_ = []);
                        var R = this,
                            P = Yo(_.concat(g.websocketsLookup(this.url, u, h)));
                        return {
                            to: function(he, _e) {
                                return b.to.call(b, he, _e, P)
                            },
                            emit: function(_e, I) {
                                R.emit(_e, I, {
                                    websockets: P
                                })
                            }
                        }
                    }, l.prototype.in = function() {
                        for (var u = [], h = arguments.length; h--;) u[h] = arguments[h];
                        return this.to.apply(null, u)
                    }, l.prototype.simulate = function(u) {
                        var h = g.websocketsLookup(this.url);
                        u === "error" && h.forEach(function(_) {
                            _.readyState = X.CLOSED, _.dispatchEvent(de({
                                type: "error"
                            }))
                        })
                    }, l
                }(M);
            wr.of = function(l) {
                return new wr(l)
            };
            var wt = function(d) {
                function l(u, h) {
                    var _ = this;
                    u === void 0 && (u = "socket.io"), h === void 0 && (h = ""), d.call(this), this.binaryType = "blob";
                    var b = new fe(u);
                    b.pathname || (b.pathname = "/"), this.url = b.toString(), this.readyState = l.CONNECTING, this.protocol = "", this.target = this, typeof h == "string" || typeof h == "object" && h !== null ? this.protocol = h : Array.isArray(h) && h.length > 0 && (this.protocol = h[0]);
                    var R = g.attachWebSocket(this, this.url);
                    z(function() {
                        R ? (this.readyState = l.OPEN, R.dispatchEvent(de({
                            type: "connection"
                        }), R, this), R.dispatchEvent(de({
                            type: "connect"
                        }), R, this), this.dispatchEvent(de({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = l.CLOSED, this.dispatchEvent(de({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ye({
                            type: "close",
                            target: this,
                            code: S.CLOSE_NORMAL
                        })), v("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(P) {
                        _.dispatchEvent(ye({
                            type: "disconnect",
                            target: P.target,
                            code: P.code
                        }))
                    })
                }
                d && (l.__proto__ = d), l.prototype = Object.create(d && d.prototype), l.prototype.constructor = l;
                var p = {
                    broadcast: {}
                };
                return l.prototype.close = function() {
                    if (this.readyState === l.OPEN) {
                        var h = g.serverLookup(this.url);
                        return g.removeWebSocket(this, this.url), this.readyState = l.CLOSED, this.dispatchEvent(ye({
                            type: "close",
                            target: this,
                            code: S.CLOSE_NORMAL
                        })), h && h.dispatchEvent(ye({
                            type: "disconnect",
                            target: this,
                            code: S.CLOSE_NORMAL
                        }), h), this
                    }
                }, l.prototype.disconnect = function() {
                    return this.close()
                }, l.prototype.emit = function(h) {
                    for (var _ = [], b = arguments.length - 1; b-- > 0;) _[b] = arguments[b + 1];
                    if (this.readyState !== l.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var R = Be({
                            type: h,
                            origin: this.url,
                            data: _
                        }),
                        P = g.serverLookup(this.url);
                    return P && P.dispatchEvent.apply(P, [R].concat(_)), this
                }, l.prototype.send = function(h) {
                    return this.emit("message", h), this
                }, p.broadcast.get = function() {
                    if (this.readyState !== l.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var u = this,
                        h = g.serverLookup(this.url);
                    if (!h) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(b, R) {
                            return h.emit(b, R, {
                                websockets: g.websocketsLookup(u.url, null, u)
                            }), u
                        },
                        to: function(b) {
                            return h.to(b, u)
                        },
                        in: function(b) {
                            return h.in(b, u)
                        }
                    }
                }, l.prototype.on = function(h, _) {
                    return this.addEventListener(h, _), this
                }, l.prototype.off = function(h, _) {
                    this.removeEventListener(h, _)
                }, l.prototype.hasListeners = function(h) {
                    var _ = this.listeners[h];
                    return Array.isArray(_) ? !!_.length : !1
                }, l.prototype.join = function(h) {
                    g.addMembershipToRoom(this, h)
                }, l.prototype.leave = function(h) {
                    g.removeMembershipFromRoom(this, h)
                }, l.prototype.to = function(h) {
                    return this.broadcast.to(h)
                }, l.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, l.prototype.dispatchEvent = function(h) {
                    for (var _ = this, b = [], R = arguments.length - 1; R-- > 0;) b[R] = arguments[R + 1];
                    var P = h.type,
                        he = this.listeners[P];
                    if (!Array.isArray(he)) return !1;
                    he.forEach(function(_e) {
                        b.length > 0 ? _e.apply(_, b) : _e.call(_, h.data ? h.data : h)
                    })
                }, Object.defineProperties(l.prototype, p), l
            }(M);
            wt.CONNECTING = 0, wt.OPEN = 1, wt.CLOSING = 2, wt.CLOSED = 3;
            var Sr = function(l, p) {
                return new wt(l, p)
            };
            Sr.connect = function(l, p) {
                return Sr(l, p)
            };
            var zo = wr,
                Jo = X,
                Vo = Sr;
            r.Server = zo, r.WebSocket = Jo, r.SocketIO = Vo, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(tr, tr.exports);
    class ro {
        parse(e) {
            const r = this.items(e);
            return [this.room(e), this.client(e), r[0], r[1], r[2]]
        }
    }
    class Bg extends ro {
        room(e) {
            return {
                appTag: e.room.appTag || "unknown"
            }
        }
        client(e) {
            return {
                id: e.client.id !== void 0 ? e.client.id : 2,
                name: e.client.name || "DEBUG",
                role: e.client.role || "player"
            }
        }
        items(e) {
            if (!e.items.length) throw new Error("[Version3Parser] JSON contains no items.");
            const r = [],
                n = [],
                i = [],
                a = [],
                s = e.items;
            for (let o = 0; o < s.length; o++) {
                const c = s[o];
                if ("marker" in c) {
                    const f = n.filter(y => y === c.marker).length;
                    n.push(c.marker), f && (c.marker = `${c.marker}_${f}`), r.push([a.length - 1, c]), i.push([a.length - 1, c]);
                    continue
                }
                if ("error" in c) {
                    i.push([a.length - 1, c]);
                    continue
                }
                if ("opcode" in c) {
                    i.push([a.length - 1, c]);
                    continue
                }
                a.push(c)
            }
            return r.length ? "marker" in s[s.length - 1] || r.push([a.length - 1, {
                marker: "end"
            }]) : console.warn("[Version3Parser] JSON file does not contain any markers. Navigation will be by entities."), [r, i, a]
        }
    }
    class Ug extends ro {
        room(e) {
            var r;
            return {
                appTag: (r = e.appTag) != null ? r : "unknown"
            }
        }
        client() {
            return {
                id: 2,
                name: "DEBUG",
                role: "player"
            }
        }
        items(e) {
            var o;
            const r = Object.keys((o = e.states) != null ? o : {});
            if (!r.length) throw new Error("[Version1Parser] JSON contains no states.");
            const n = [],
                i = [],
                a = [],
                s = e.states;
            return r.forEach(c => {
                Object.keys(s[c]).forEach(y => {
                    a.push({
                        type: "object",
                        key: y,
                        value: s[c][y]
                    })
                });
                const f = {
                    marker: c
                };
                n.push([a.length - 1, f]), i.push([a.length - 1, f])
            }), [n, i, a]
        }
    }
    class Fg {
        static parse(e) {
            switch (e.version) {
                case 3:
                    return new Bg().parse(e);
                default:
                    return new Ug().parse(e)
            }
        }
    }
    class Gg {
        constructor(e) {
            G(this, "url", "localhost:8080");
            G(this, "pcCounter", -1);
            G(this, "server");
            G(this, "client");
            G(this, "sockets", {
                server: null,
                client: null
            });
            G(this, "roomData");
            G(this, "clientData");
            G(this, "markerMap");
            G(this, "metaMap");
            G(this, "entityItems");
            G(this, "currentEntityItemIndex", 0);
            G(this, "clientProxyHandler", {
                get: (e, r) => r === "conn" ? this.sockets.client : r === "reconnect" ? (setTimeout(() => {
                    e.reconnect()
                }, 1), function() {}) : e[r],
                set: (e, r, n) => r !== "conn" ? Reflect.set(e, r, n) : (this.sockets.client = n ? new tr.exports.WebSocket(`wss://${this.url}`, "ecast-v0") : null, !0)
            });
            [this.roomData, this.clientData, this.markerMap, this.metaMap, this.entityItems] = Fg.parse(e), this.setIndexFromURL(), this.server = this.createServer(), this.client = this.createClient()
        }
        get currentEntityItem() {
            return this.entityItems[this.currentEntityItemIndex]
        }
        get currentMarkerItemIndex() {
            return this.markerMap.findIndex(([e]) => e >= this.currentEntityItemIndex)
        }
        get currentMarkerItem() {
            return this.markerMap[this.currentMarkerItemIndex]
        }
        get getRoomReply() {
            return new Vi.GetRoomReply({
                appId: "",
                appTag: this.roomData.appTag,
                audienceEnabled: !0,
                code: "DBUG",
                host: this.url,
                audienceHost: this.url,
                locked: !0,
                full: !0,
                moderationEnabled: !1,
                passwordRequired: !1,
                twitchLocked: !1,
                keepalive: !0,
                locale: "en"
            })
        }
        getWelcomeResult() {
            const e = {};
            return this.getEntityItemsForIndex(this.currentEntityItemIndex).forEach(r => {
                switch (r.type) {
                    case "artifact":
                        e[r.key] = ["artifact", this.getArtifactResult(r)];
                        break;
                    case "doodle":
                        e[r.key] = ["doodle", this.getDoodleResult(r)];
                        break;
                    case "drop":
                        e[r.key] = ["drop", this.getDropResult(r)];
                        break;
                    case "number":
                        e[r.key] = ["number", this.getNumberResult(r)];
                        break;
                    case "text":
                        e[r.key] = ["text", this.getTextResult(r)];
                        break;
                    case "object":
                    default:
                        e[r.key] = ["object", this.getObjectResult(r)]
                }
            }), {
                id: this.clientData.id,
                name: this.clientData.name,
                secret: "secret-abc-123",
                reconnect: !1,
                entities: e,
                here: {
                    1: {
                        id: 1,
                        roles: {
                            host: {}
                        }
                    }
                },
                profile: {
                    id: this.clientData.id,
                    roles: {
                        [this.clientData.role]: {
                            name: this.clientData.name
                        }
                    }
                }
            }
        }
        getArtifactResult(e) {
            var r;
            return {
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: (r = e.meta) != null ? r : {}
            }
        }
        getDoodleResult(e) {
            var r;
            return {
                key: e.key,
                val: {
                    colors: e.colors,
                    lines: e.lines,
                    live: e.live,
                    maxPoints: e.maxPoints,
                    size: e.size,
                    weights: e.weights
                },
                version: 0,
                meta: (r = e.meta) != null ? r : {}
            }
        }
        getDropResult(e) {
            return {
                key: e.key,
                version: 0
            }
        }
        getNumberResult(e) {
            var r, n;
            return {
                from: 1,
                key: e.key,
                val: e.value,
                version: 0,
                meta: (r = e.meta) != null ? r : {},
                restrictions: (n = e.restrictions) != null ? n : {}
            }
        }
        getObjectResult(e) {
            var r;
            return {
                from: 1,
                key: e.key,
                val: e.value,
                version: 0,
                meta: (r = e.meta) != null ? r : {}
            }
        }
        getTextResult(e) {
            var r;
            return {
                from: 1,
                key: e.key,
                val: e.value,
                version: 0,
                meta: (r = e.meta) != null ? r : {}
            }
        }
        toPreviousEntity() {
            const e = this.currentEntityItemIndex <= 0 ? this.entityItems.length - 1 : this.currentEntityItemIndex - 1;
            this.goToEntityItemIndex(e)
        }
        toNextEntity() {
            const e = this.currentEntityItemIndex >= this.entityItems.length - 1 ? 0 : this.currentEntityItemIndex + 1;
            this.goToEntityItemIndex(e)
        }
        toPreviousMarker() {
            if (!this.markerMap.length) {
                this.toPreviousEntity();
                return
            }
            const e = this.currentMarkerItemIndex <= 0 ? this.markerMap[this.markerMap.length - 1][0] : this.markerMap[this.currentMarkerItemIndex - 1][0];
            this.goToEntityItemIndex(e)
        }
        toNextMarker() {
            if (!this.markerMap.length) {
                this.toNextEntity();
                return
            }
            const e = this.currentMarkerItemIndex >= this.markerMap.length - 1 ? this.markerMap[0][0] : this.markerMap[this.currentMarkerItemIndex + 1][0];
            this.goToEntityItemIndex(e)
        }
        toMarkerIndex(e) {
            if (!this.markerMap.length) {
                this.toNextEntity();
                return
            }
            this.goToEntityItemIndex(this.markerMap[e][0])
        }
        goToEntityItemIndex(e) {
            this.processMetaItems(e);
            let r = this.currentEntityItemIndex;
            e < r && (Object.keys(this.client.entities).forEach(i => delete this.client.entities[i]), r = 0);
            const n = this.getEntityItemsForIndex(e, r);
            this.currentEntityItemIndex = e, this.updateURL(), n.forEach(i => {
                switch (i.type) {
                    case "artifact":
                        this.serverSend("artifact", {
                            ...i
                        });
                        break;
                    case "doodle":
                        this.serverSend("doodle", this.getDoodleResult(i));
                        break;
                    case "drop":
                        this.serverSend("drop", this.getDropResult(i));
                        break;
                    case "number":
                        this.serverSend("number", this.getNumberResult(i));
                        break;
                    case "text":
                        this.serverSend("text", this.getTextResult(i));
                        break;
                    case "object":
                    default:
                        this.serverSend("object", this.getObjectResult(i))
                }
            })
        }
        getEntityItemsForIndex(e, r = 0) {
            const n = {};
            for (let i = r; i <= e; i++) {
                const a = this.entityItems[i];
                n[a.key] = a
            }
            return Object.values(n)
        }
        processMetaItems(e) {
            e < this.currentEntityItemIndex || this.metaMap.forEach(([r, n]) => {
                r < this.currentEntityItemIndex || r > e || ("opcode" in n && Jt("[REPLAYING SEND]", n.opcode, JSON.parse(JSON.stringify(n.arguments))), "error" in n && Jt("[REPLAYING ERROR]", JSON.parse(JSON.stringify(n.error))))
            })
        }
        kill() {
            this.server.close({
                code: 1e3,
                reason: "debug",
                wasClean: !0
            })
        }
        disconnect() {
            this.server.close({
                code: 1006,
                reason: "debug",
                wasClean: !1
            })
        }
        setIndexFromURL() {
            if (!this.markerMap.length) return;
            const n = window.location.pathname.split("/")[5];
            for (let i = 0; i < this.markerMap.length; i++) {
                const [a, s] = this.markerMap[i];
                if (s.marker === n) {
                    this.currentEntityItemIndex = a;
                    return
                }
            }
            this.currentEntityItemIndex = this.markerMap[0][0], this.updateURL()
        }
        updateURL() {
            const e = this.markerMap.length ? this.currentMarkerItem[1].marker : `${this.currentMarkerItem}`,
                r = window.location.pathname.split("/"),
                n = 5;
            r[n] = e, window.history.pushState({}, "", r.join("/"))
        }
        createServer() {
            const e = new tr.exports.Server(`wss://${this.url}`);
            return e.on("connection", r => {
                this.sockets.server = r, r.on("message", this.onServerMessage.bind(this)), this.onServerConnection()
            }), e
        }
        onServerConnection() {
            console.warn("*** 'WebSocket connection failed' errors are expected when using the debug controller ***"), this.serverSend("client/welcome", this.getWelcomeResult())
        }
        onServerMessage(e) {
            const r = JSON.parse(e);
            Jt("[DebugReplayer] Message Sent", r), this.serverSend("ok", {}, r.seq)
        }
        serverSend(e, r, n) {
            if (!this.sockets.server) return;
            const i = {
                pc: this.pcCounter += 1,
                opcode: e,
                result: r
            };
            n !== void 0 && (i.re = n), this.sockets.server.send(JSON.stringify(i))
        }
        createClient() {
            const e = new Vi.WSClient({
                host: this.url,
                code: "DBUG",
                name: this.clientData.name,
                role: this.clientData.role
            });
            return new Proxy(e, this.clientProxyHandler)
        }
    }
    var qg = {
        exports: {}
    };
    (function(t) {
        (function() {
            function e(o, c) {
                var f = o.x - c.x,
                    y = o.y - c.y;
                return f * f + y * y
            }

            function r(o, c, f) {
                var y = c.x,
                    m = c.y,
                    w = f.x - y,
                    O = f.y - m;
                if (w !== 0 || O !== 0) {
                    var k = ((o.x - y) * w + (o.y - m) * O) / (w * w + O * O);
                    k > 1 ? (y = f.x, m = f.y) : k > 0 && (y += w * k, m += O * k)
                }
                return w = o.x - y, O = o.y - m, w * w + O * O
            }

            function n(o, c) {
                for (var f = o[0], y = [f], m, w = 1, O = o.length; w < O; w++) m = o[w], e(m, f) > c && (y.push(m), f = m);
                return f !== m && y.push(m), y
            }

            function i(o, c, f, y, m) {
                for (var w = y, O, k = c + 1; k < f; k++) {
                    var U = r(o[k], o[c], o[f]);
                    U > w && (O = k, w = U)
                }
                w > y && (O - c > 1 && i(o, c, O, y, m), m.push(o[O]), f - O > 1 && i(o, O, f, y, m))
            }

            function a(o, c) {
                var f = o.length - 1,
                    y = [o[0]];
                return i(o, 0, f, c, y), y.push(o[f]), y
            }

            function s(o, c, f) {
                if (o.length <= 2) return o;
                var y = c !== void 0 ? c * c : 1;
                return o = f ? o : n(o, y), o = a(o, y), o
            }
            t.exports = s, t.exports.default = s
        })()
    })(qg);

    function Hg() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Bn() {
        return !Hg() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function Wg(t, e) {
        return t.require(e)
    }
    var Yg = {};

    function V() {
        return Bn() ? global : typeof window < "u" ? window : typeof self < "u" ? self : Yg
    }

    function Un(t, e, r) {
        var n = r || V(),
            i = n.__SENTRY__ = n.__SENTRY__ || {},
            a = i[t] || (i[t] = e());
        return a
    }
    var no = Object.prototype.toString;

    function io(t) {
        switch (no.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return je(t, Error)
        }
    }

    function Et(t, e) {
        return no.call(t) === `[object ${e}]`
    }

    function ao(t) {
        return Et(t, "ErrorEvent")
    }

    function Xi(t) {
        return Et(t, "DOMError")
    }

    function zg(t) {
        return Et(t, "DOMException")
    }

    function lt(t) {
        return Et(t, "String")
    }

    function so(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function ft(t) {
        return Et(t, "Object")
    }

    function Fn(t) {
        return typeof Event < "u" && je(t, Event)
    }

    function Jg(t) {
        return typeof Element < "u" && je(t, Element)
    }

    function Vg(t) {
        return Et(t, "RegExp")
    }

    function Gn(t) {
        return Boolean(t && t.then && typeof t.then == "function")
    }

    function Kg(t) {
        return ft(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function Xg(t) {
        return typeof t == "number" && t !== t
    }

    function je(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function sn(t, e) {
        try {
            let o = t;
            var r = 5,
                n = 80,
                i = [];
            let c = 0,
                f = 0;
            var a = " > ",
                s = a.length;
            let y;
            for (; o && c++ < r && (y = Qg(o, e), !(y === "html" || c > 1 && f + i.length * s + y.length >= n));) i.push(y), f += y.length, o = o.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function Qg(t, e) {
        var r = t,
            n = [];
        let i, a, s, o, c;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var f = e && e.length ? e.filter(m => r.getAttribute(m)).map(m => [m, r.getAttribute(m)]) : null;
        if (f && f.length) f.forEach(m => {
            n.push(`[${m[0]}="${m[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), i = r.className, i && lt(i))
            for (a = i.split(/\s+/), c = 0; c < a.length; c++) n.push(`.${a[c]}`);
        var y = ["type", "name", "title", "alt"];
        for (c = 0; c < y.length; c++) s = y[c], o = r.getAttribute(s), o && n.push(`[${s}="${o}"]`);
        return n.join("")
    }

    function Zg() {
        var t = V();
        try {
            return t.document.location.href
        } catch {
            return ""
        }
    }
    class ae extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    var e_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function t_(t) {
        return t === "http" || t === "https"
    }

    function qn(t, e = !1) {
        const {
            host: r,
            path: n,
            pass: i,
            port: a,
            projectId: s,
            protocol: o,
            publicKey: c
        } = t;
        return `${o}://${c}${e&&i?`:${i}`:""}@${r}${a?`:${a}`:""}/${n&&`${n}/`}${s}`
    }

    function r_(t) {
        var e = e_.exec(t);
        if (!e) throw new ae(`Invalid Sentry Dsn: ${t}`);
        const [r, n, i = "", a, s = "", o] = e.slice(1);
        let c = "",
            f = o;
        var y = f.split("/");
        if (y.length > 1 && (c = y.slice(0, -1).join("/"), f = y.pop()), f) {
            var m = f.match(/^\d+/);
            m && (f = m[0])
        }
        return oo({
            host: a,
            pass: i,
            path: c,
            projectId: f,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function oo(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }

    function n_(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: e,
            projectId: r,
            protocol: n
        } = t;
        var i = ["protocol", "publicKey", "host", "projectId"];
        if (i.forEach(a => {
                if (!t[a]) throw new ae(`Invalid Sentry Dsn: ${a} missing`)
            }), !r.match(/^\d+$/)) throw new ae(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!t_(n)) throw new ae(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new ae(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function i_(t) {
        var e = typeof t == "string" ? r_(t) : oo(t);
        return n_(e), e
    }
    var a_ = V(),
        s_ = "Sentry Logger ",
        rr = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function co(t) {
        var e = V();
        if (!("console" in e)) return t();
        var r = e.console,
            n = {};
        rr.forEach(i => {
            var a = r[i] && r[i].__sentry_original__;
            i in e.console && a && (n[i] = r[i], r[i] = a)
        });
        try {
            return t()
        } finally {
            Object.keys(n).forEach(i => {
                r[i] = n[i]
            })
        }
    }

    function Qi() {
        let t = !1;
        var e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? rr.forEach(r => {
            e[r] = (...n) => {
                t && co(() => {
                    a_.console[r](`${s_}[${r}]:`, ...n)
                })
            }
        }) : rr.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let x;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? x = Un("logger", Qi) : x = Qi();

    function Pt(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.substr(0,e)}...`
    }

    function Zi(t, e) {
        if (!Array.isArray(t)) return "";
        var r = [];
        for (let i = 0; i < t.length; i++) {
            var n = t[i];
            try {
                r.push(String(n))
            } catch {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(e)
    }

    function Hn(t, e) {
        return lt(t) ? Vg(e) ? e.test(t) : typeof e == "string" ? t.indexOf(e) !== -1 : !1 : !1
    }

    function se(t, e, r) {
        if (e in t) {
            var n = t[e],
                i = r(n);
            if (typeof i == "function") try {
                uo(i, n)
            } catch {}
            t[e] = i
        }
    }

    function Wn(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function uo(t, e) {
        var r = e.prototype || {};
        t.prototype = e.prototype = r, Wn(t, "__sentry_original__", e)
    }

    function Yn(t) {
        return t.__sentry_original__
    }

    function o_(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function lo(t) {
        if (io(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...ta(t)
        };
        if (Fn(t)) {
            var e = {
                type: t.type,
                target: ea(t.target),
                currentTarget: ea(t.currentTarget),
                ...ta(t)
            };
            return typeof CustomEvent < "u" && je(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function ea(t) {
        try {
            return Jg(t) ? sn(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function ta(t) {
        if (typeof t == "object" && t !== null) {
            var e = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function c_(t, e = 40) {
        var r = Object.keys(lo(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return Pt(r[0], e);
        for (let i = r.length; i > 0; i--) {
            var n = r.slice(0, i).join(", ");
            if (!(n.length > e)) return i === r.length ? n : Pt(n, e)
        }
        return ""
    }

    function zn(t) {
        var e = new Map;
        return on(t, e)
    }

    function on(t, e) {
        if (ft(t)) {
            var r = e.get(t);
            if (r !== void 0) return r;
            var n = {};
            e.set(t, n);
            for (var i of Object.keys(t)) typeof t[i] < "u" && (n[i] = on(t[i], e));
            return n
        }
        if (Array.isArray(t)) {
            var r = e.get(t);
            if (r !== void 0) return r;
            var n = [];
            return e.set(t, n), t.forEach(o => {
                n.push(on(o, e))
            }), n
        }
        return t
    }
    var u_ = 50;

    function fo(...t) {
        var e = t.sort((r, n) => r[0] - n[0]).map(r => r[1]);
        return (r, n = 0) => {
            var i = [];
            for (var a of r.split(`
`).slice(n)) {
                var s = a.replace(/\(error: (.*)\)/, "$1");
                for (var o of e) {
                    var c = o(s);
                    if (c) {
                        i.push(c);
                        break
                    }
                }
            }
            return f_(i)
        }
    }

    function l_(t) {
        return Array.isArray(t) ? fo(...t) : t
    }

    function f_(t) {
        if (!t.length) return [];
        let e = t;
        var r = e[0].function || "",
            n = e[e.length - 1].function || "";
        return (r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (e = e.slice(1)), n.indexOf("sentryWrapped") !== -1 && (e = e.slice(0, -1)), e.slice(0, u_).map(i => ({
            ...i,
            filename: i.filename || e[0].filename,
            function: i.function || "?"
        })).reverse()
    }
    var Mr = "<anonymous>";

    function Ce(t) {
        try {
            return !t || typeof t != "function" ? Mr : t.name || Mr
        } catch {
            return Mr
        }
    }

    function Jn() {
        if (!("fetch" in V())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function cn(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function d_() {
        if (!Jn()) return !1;
        var t = V();
        if (cn(t.fetch)) return !0;
        let e = !1;
        var r = t.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = cn(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (i) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
        }
        return e
    }

    function h_() {
        var t = V(),
            e = t.chrome,
            r = e && e.app && e.app.runtime,
            n = "history" in t && !!t.history.pushState && !!t.history.replaceState;
        return !r && n
    }
    var H = V(),
        It = {},
        ra = {};

    function p_(t) {
        if (!ra[t]) switch (ra[t] = !0, t) {
            case "console":
                y_();
                break;
            case "dom":
                O_();
                break;
            case "xhr":
                __();
                break;
            case "fetch":
                v_();
                break;
            case "history":
                b_();
                break;
            case "error":
                k_();
                break;
            case "unhandledrejection":
                R_();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("unknown instrumentation type:", t);
                return
        }
    }

    function Ie(t, e) {
        It[t] = It[t] || [], It[t].push(e), p_(t)
    }

    function Ee(t, e) {
        if (!(!t || !It[t]))
            for (var r of It[t] || []) try {
                r(e)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Ce(r)}
Error:`, n)
            }
    }

    function y_() {
        "console" in H && rr.forEach(function(t) {
            t in H.console && se(H.console, t, function(e) {
                return function(...r) {
                    Ee("console", {
                        args: r,
                        level: t
                    }), e && e.apply(H.console, r)
                }
            })
        })
    }

    function v_() {
        !d_() || se(H, "fetch", function(t) {
            return function(...e) {
                var r = {
                    args: e,
                    fetchData: {
                        method: m_(e),
                        url: g_(e)
                    },
                    startTimestamp: Date.now()
                };
                return Ee("fetch", {
                    ...r
                }), t.apply(H, e).then(n => (Ee("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw Ee("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function m_(t = []) {
        return "Request" in H && je(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }

    function g_(t = []) {
        return typeof t[0] == "string" ? t[0] : "Request" in H && je(t[0], Request) ? t[0].url : String(t[0])
    }

    function __() {
        if ("XMLHttpRequest" in H) {
            var t = XMLHttpRequest.prototype;
            se(t, "open", function(e) {
                return function(...r) {
                    var n = this,
                        i = r[1],
                        a = n.__sentry_xhr__ = {
                            method: lt(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    lt(i) && a.method === "POST" && i.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                    var s = function() {
                        if (n.readyState === 4) {
                            try {
                                a.status_code = n.status
                            } catch {}
                            Ee("xhr", {
                                args: r,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: n
                            })
                        }
                    };
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? se(n, "onreadystatechange", function(o) {
                        return function(...c) {
                            return s(), o.apply(n, c)
                        }
                    }) : n.addEventListener("readystatechange", s), e.apply(n, r)
                }
            }), se(t, "send", function(e) {
                return function(...r) {
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), Ee("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), e.apply(this, r)
                }
            })
        }
    }
    let qt;

    function b_() {
        if (!h_()) return;
        var t = H.onpopstate;
        H.onpopstate = function(...r) {
            var n = H.location.href,
                i = qt;
            if (qt = n, Ee("history", {
                    from: i,
                    to: n
                }), t) try {
                return t.apply(this, r)
            } catch {}
        };

        function e(r) {
            return function(...n) {
                var i = n.length > 2 ? n[2] : void 0;
                if (i) {
                    var a = qt,
                        s = String(i);
                    qt = s, Ee("history", {
                        from: a,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        se(H.history, "pushState", e), se(H.history, "replaceState", e)
    }
    var E_ = 1e3;
    let Ht, Wt;

    function w_(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function S_(t) {
        if (t.type !== "keypress") return !1;
        try {
            var e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function na(t, e = !1) {
        return r => {
            if (!(!r || Wt === r) && !S_(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Ht === void 0 ? (t({
                    event: r,
                    name: n,
                    global: e
                }), Wt = r) : w_(Wt, r) && (t({
                    event: r,
                    name: n,
                    global: e
                }), Wt = r), clearTimeout(Ht), Ht = H.setTimeout(() => {
                    Ht = void 0
                }, E_)
            }
        }
    }

    function O_() {
        if ("document" in H) {
            var t = Ee.bind(null, "dom"),
                e = na(t, !0);
            H.document.addEventListener("click", e, !1), H.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
                var n = H[r] && H[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (se(n, "addEventListener", function(i) {
                    return function(a, s, o) {
                        if (a === "click" || a == "keypress") try {
                            var c = this,
                                f = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {},
                                y = f[a] = f[a] || {
                                    refCount: 0
                                };
                            if (!y.handler) {
                                var m = na(t);
                                y.handler = m, i.call(this, a, m, o)
                            }
                            y.refCount += 1
                        } catch {}
                        return i.call(this, a, s, o)
                    }
                }), se(n, "removeEventListener", function(i) {
                    return function(a, s, o) {
                        if (a === "click" || a == "keypress") try {
                            var c = this,
                                f = c.__sentry_instrumentation_handlers__ || {},
                                y = f[a];
                            y && (y.refCount -= 1, y.refCount <= 0 && (i.call(this, a, y.handler, o), y.handler = void 0, delete f[a]), Object.keys(f).length === 0 && delete c.__sentry_instrumentation_handlers__)
                        } catch {}
                        return i.call(this, a, s, o)
                    }
                }))
            })
        }
    }
    let Br = null;

    function k_() {
        Br = H.onerror, H.onerror = function(t, e, r, n, i) {
            return Ee("error", {
                column: n,
                error: i,
                line: r,
                msg: t,
                url: e
            }), Br ? Br.apply(this, arguments) : !1
        }
    }
    let Ur = null;

    function R_() {
        Ur = H.onunhandledrejection, H.onunhandledrejection = function(t) {
            return Ee("unhandledrejection", t), Ur ? Ur.apply(this, arguments) : !0
        }
    }

    function T_() {
        var t = typeof WeakSet == "function",
            e = t ? new WeakSet : [];

        function r(i) {
            if (t) return e.has(i) ? !0 : (e.add(i), !1);
            for (let s = 0; s < e.length; s++) {
                var a = e[s];
                if (a === i) return !0
            }
            return e.push(i), !1
        }

        function n(i) {
            if (t) e.delete(i);
            else
                for (let a = 0; a < e.length; a++)
                    if (e[a] === i) {
                        e.splice(a, 1);
                        break
                    }
        }
        return [r, n]
    }

    function rt() {
        var t = V(),
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        var r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function ho(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function qe(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        var n = ho(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function un(t, e, r) {
        var n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            a = i[0] = i[0] || {};
        a.value || (a.value = e || ""), a.type || (a.type = r || "Error")
    }

    function At(t, e) {
        var r = ho(t);
        if (!!r) {
            var n = {
                    type: "generic",
                    handled: !0
                },
                i = r.mechanism;
            if (r.mechanism = {
                    ...n,
                    ...i,
                    ...e
                }, e && "data" in e) {
                var a = {
                    ...i && i.data,
                    ...e.data
                };
                r.mechanism.data = a
            }
        }
    }

    function ia(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            Wn(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function Fe(t, e = 1 / 0, r = 1 / 0) {
        try {
            return ln("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function po(t, e = 3, r = 100 * 1024) {
        var n = Fe(t, e);
        return I_(n) > r ? po(t, e - 1, r) : n
    }

    function ln(t, e, r = 1 / 0, n = 1 / 0, i = T_()) {
        const [a, s] = i;
        if (e === null || ["number", "boolean", "string"].includes(typeof e) && !Xg(e)) return e;
        var o = $_(t, e);
        if (!o.startsWith("[object ")) return o;
        if (e.__sentry_skip_normalization__) return e;
        if (r === 0) return o.replace("object ", "");
        if (a(e)) return "[Circular ~]";
        var c = e;
        if (c && typeof c.toJSON == "function") try {
            var f = c.toJSON();
            return ln("", f, r - 1, n, i)
        } catch {}
        var y = Array.isArray(e) ? [] : {};
        let m = 0;
        var w = lo(e);
        for (var O in w)
            if (!!Object.prototype.hasOwnProperty.call(w, O)) {
                if (m >= n) {
                    y[O] = "[MaxProperties ~]";
                    break
                }
                var k = w[O];
                y[O] = ln(O, k, r - 1, n, i), m += 1
            } return s(e), y
    }

    function $_(t, e) {
        try {
            return t === "domain" && e && typeof e == "object" && e._events ? "[Domain]" : t === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && e === global ? "[Global]" : typeof window < "u" && e === window ? "[Window]" : typeof document < "u" && e === document ? "[Document]" : Kg(e) ? "[SyntheticEvent]" : typeof e == "number" && e !== e ? "[NaN]" : e === void 0 ? "[undefined]" : typeof e == "function" ? `[Function: ${Ce(e)}]` : typeof e == "symbol" ? `[${String(e)}]` : typeof e == "bigint" ? `[BigInt: ${String(e)}]` : `[object ${Object.getPrototypeOf(e).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function P_(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function I_(t) {
        return P_(JSON.stringify(t))
    }
    var ke;
    (function(t) {
        var e = 0;
        t[t.PENDING = e] = "PENDING";
        var r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        var n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(ke || (ke = {}));

    function We(t) {
        return new ce(e => {
            e(t)
        })
    }

    function fn(t) {
        return new ce((e, r) => {
            r(t)
        })
    }
    class ce {
        __init() {
            this._state = ke.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(e) {
            ce.prototype.__init.call(this), ce.prototype.__init2.call(this), ce.prototype.__init3.call(this), ce.prototype.__init4.call(this), ce.prototype.__init5.call(this), ce.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(e, r) {
            return new ce((n, i) => {
                this._handlers.push([!1, a => {
                    if (!e) n(a);
                    else try {
                        n(e(a))
                    } catch (s) {
                        i(s)
                    }
                }, a => {
                    if (!r) i(a);
                    else try {
                        n(r(a))
                    } catch (s) {
                        i(s)
                    }
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(r => r, e)
        } finally(e) {
            return new ce((r, n) => {
                let i, a;
                return this.then(s => {
                    a = !1, i = s, e && e()
                }, s => {
                    a = !0, i = s, e && e()
                }).then(() => {
                    if (a) {
                        n(i);
                        return
                    }
                    r(i)
                })
            })
        }
        __init3() {
            this._resolve = e => {
                this._setResult(ke.RESOLVED, e)
            }
        }
        __init4() {
            this._reject = e => {
                this._setResult(ke.REJECTED, e)
            }
        }
        __init5() {
            this._setResult = (e, r) => {
                if (this._state === ke.PENDING) {
                    if (Gn(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== ke.PENDING) {
                    var e = this._handlers.slice();
                    this._handlers = [], e.forEach(r => {
                        r[0] || (this._state === ke.RESOLVED && r[1](this._value), this._state === ke.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function A_(t) {
        var e = [];

        function r() {
            return t === void 0 || e.length < t
        }

        function n(s) {
            return e.splice(e.indexOf(s), 1)[0]
        }

        function i(s) {
            if (!r()) return fn(new ae("Not adding Promise due to buffer limit reached."));
            var o = s();
            return e.indexOf(o) === -1 && e.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {})), o
        }

        function a(s) {
            return new ce((o, c) => {
                let f = e.length;
                if (!f) return o(!0);
                var y = setTimeout(() => {
                    s && s > 0 && o(!1)
                }, s);
                e.forEach(m => {
                    We(m).then(() => {
                        --f || (clearTimeout(y), o(!0))
                    }, c)
                })
            })
        }
        return {
            $: e,
            add: i,
            drain: a
        }
    }

    function Fr(t) {
        if (!t) return {};
        var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        var r = e[6] || "",
            n = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + r + n
        }
    }
    var x_ = ["fatal", "error", "warning", "log", "info", "debug"];

    function N_(t) {
        return t === "warn" ? "warning" : x_.includes(t) ? t : "log"
    }
    var dn = {
        nowSeconds: () => Date.now() / 1e3
    };

    function L_() {
        const {
            performance: t
        } = V();
        if (!(!t || !t.now)) {
            var e = Date.now() - t.now();
            return {
                now: () => t.now(),
                timeOrigin: e
            }
        }
    }

    function C_() {
        try {
            var t = Wg(Fo, "perf_hooks");
            return t.performance
        } catch {
            return
        }
    }
    var Gr = Bn() ? C_() : L_(),
        aa = Gr === void 0 ? dn : {
            nowSeconds: () => (Gr.timeOrigin + Gr.now()) / 1e3
        },
        mr = dn.nowSeconds.bind(dn),
        yo = aa.nowSeconds.bind(aa);
    (() => {
        const {
            performance: t
        } = V();
        if (!(!t || !t.now)) {
            var e = 3600 * 1e3,
                r = t.now(),
                n = Date.now(),
                i = t.timeOrigin ? Math.abs(t.timeOrigin + r - n) : e,
                a = i < e,
                s = t.timing && t.timing.navigationStart,
                o = typeof s == "number",
                c = o ? Math.abs(s + r - n) : e,
                f = c < e;
            return a || f ? i <= c ? t.timeOrigin : s : n
        }
    })();

    function gr(t, e = []) {
        return [t, e]
    }

    function D_(t, e) {
        const [r, n] = t;
        return [r, [...n, e]]
    }

    function sa(t, e) {
        var r = t[1];
        r.forEach(n => {
            var i = n[0].type;
            e(n, i)
        })
    }

    function hn(t, e) {
        var r = e || new TextEncoder;
        return r.encode(t)
    }

    function vo(t, e) {
        const [r, n] = t;
        let i = JSON.stringify(r);

        function a(o) {
            typeof i == "string" ? i = typeof o == "string" ? i + o : [hn(i, e), o] : i.push(typeof o == "string" ? hn(o, e) : o)
        }
        for (var s of n) {
            const [o, c] = s;
            a(`
${JSON.stringify(o)}
`), a(typeof c == "string" || c instanceof Uint8Array ? c : JSON.stringify(c))
        }
        return typeof i == "string" ? i : j_(i)
    }

    function j_(t) {
        var e = t.reduce((a, s) => a + s.length, 0),
            r = new Uint8Array(e);
        let n = 0;
        for (var i of t) r.set(i, n), n += i.length;
        return r
    }

    function M_(t, e) {
        var r = typeof t.data == "string" ? hn(t.data, e) : t.data;
        return [zn({
            type: "attachment",
            length: r.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), r]
    }
    var B_ = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default"
    };

    function oa(t) {
        return B_[t]
    }

    function U_(t, e, r) {
        var n = [{
            type: "client_report"
        }, {
            timestamp: r || mr(),
            discarded_events: t
        }];
        return gr(e ? {
            dsn: e
        } : {}, [n])
    }
    var F_ = 60 * 1e3;

    function G_(t, e = Date.now()) {
        var r = parseInt(`${t}`, 10);
        if (!isNaN(r)) return r * 1e3;
        var n = Date.parse(`${t}`);
        return isNaN(n) ? F_ : n - e
    }

    function q_(t, e) {
        return t[e] || t.all || 0
    }

    function H_(t, e, r = Date.now()) {
        return q_(t, e) > r
    }

    function W_(t, {
        statusCode: e,
        headers: r
    }, n = Date.now()) {
        var i = {
                ...t
            },
            a = r && r["x-sentry-rate-limits"],
            s = r && r["retry-after"];
        if (a)
            for (var o of a.trim().split(",")) {
                const [m, w] = o.split(":", 2);
                var c = parseInt(m, 10),
                    f = (isNaN(c) ? 60 : c) * 1e3;
                if (!w) i.all = n + f;
                else
                    for (var y of w.split(";")) i[y] = n + f
            } else s ? i.all = n + G_(s, n) : e === 429 && (i.all = n + 60 * 1e3);
        return i
    }

    function Y_(t) {
        return t[0]
    }

    function z_(t) {
        var e = yo(),
            r = {
                sid: rt(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => V_(r)
            };
        return t && dt(r, t), r
    }

    function dt(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || yo(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : rt()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            var r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function J_(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), dt(t, r)
    }

    function V_(t) {
        return zn({
            sid: `${t.sid}`,
            init: t.init,
            started: new Date(t.started * 1e3).toISOString(),
            timestamp: new Date(t.timestamp * 1e3).toISOString(),
            status: t.status,
            errors: t.errors,
            did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
            duration: t.duration,
            attrs: {
                release: t.release,
                environment: t.environment,
                ip_address: t.ipAddress,
                user_agent: t.userAgent
            }
        })
    }
    var ca = 100;
    class Ne {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            var r = new Ne;
            return e && (r._breadcrumbs = [...e._breadcrumbs], r._tags = {
                ...e._tags
            }, r._extra = {
                ...e._extra
            }, r._contexts = {
                ...e._contexts
            }, r._user = e._user, r._level = e._level, r._span = e._span, r._session = e._session, r._transactionName = e._transactionName, r._fingerprint = e._fingerprint, r._eventProcessors = [...e._eventProcessors], r._requestSession = e._requestSession, r._attachments = [...e._attachments]), r
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this
        }
        setUser(e) {
            return this._user = e || {}, this._session && dt(this._session, {
                user: e
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(e) {
            return this._requestSession = e, this
        }
        setTags(e) {
            return this._tags = {
                ...this._tags,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setTag(e, r) {
            return this._tags = {
                ...this._tags,
                [e]: r
            }, this._notifyScopeListeners(), this
        }
        setExtras(e) {
            return this._extra = {
                ...this._extra,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setExtra(e, r) {
            return this._extra = {
                ...this._extra,
                [e]: r
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(e) {
            return this._fingerprint = e, this._notifyScopeListeners(), this
        }
        setLevel(e) {
            return this._level = e, this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
            return this._transactionName = e, this._notifyScopeListeners(), this
        }
        setContext(e, r) {
            return r === null ? delete this._contexts[e] : this._contexts = {
                ...this._contexts,
                [e]: r
            }, this._notifyScopeListeners(), this
        }
        setSpan(e) {
            return this._span = e, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            var e = this.getSpan();
            return e && e.transaction
        }
        setSession(e) {
            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e) return this;
            if (typeof e == "function") {
                var r = e(this);
                return r instanceof Ne ? r : this
            }
            return e instanceof Ne ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : ft(e) && (e = e, this._tags = {
                ...this._tags,
                ...e.tags
            }, this._extra = {
                ...this._extra,
                ...e.extra
            }, this._contexts = {
                ...this._contexts,
                ...e.contexts
            }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
        }
        addBreadcrumb(e, r) {
            var n = typeof r == "number" ? Math.min(r, ca) : ca;
            if (n <= 0) return this;
            var i = {
                timestamp: mr(),
                ...e
            };
            return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n), this._notifyScopeListeners(), this
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(e) {
            return this._attachments.push(e), this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        applyToEvent(e, r = {}) {
            if (this._extra && Object.keys(this._extra).length && (e.extra = {
                    ...this._extra,
                    ...e.extra
                }), this._tags && Object.keys(this._tags).length && (e.tags = {
                    ...this._tags,
                    ...e.tags
                }), this._user && Object.keys(this._user).length && (e.user = {
                    ...this._user,
                    ...e.user
                }), this._contexts && Object.keys(this._contexts).length && (e.contexts = {
                    ...this._contexts,
                    ...e.contexts
                }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                e.contexts = {
                    trace: this._span.getTraceContext(),
                    ...e.contexts
                };
                var n = this._span.transaction && this._span.transaction.name;
                n && (e.tags = {
                    transaction: n,
                    ...e.tags
                })
            }
            return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            }, this._notifyEventProcessors([...mo(), ...this._eventProcessors], e, r)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        _notifyEventProcessors(e, r, n, i = 0) {
            return new ce((a, s) => {
                var o = e[i];
                if (r === null || typeof o != "function") a(r);
                else {
                    var c = o({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && o.id && c === null && x.log(`Event processor "${o.id}" dropped event`), Gn(c) ? c.then(f => this._notifyEventProcessors(e, f, n, i + 1).then(a)).then(null, s) : this._notifyEventProcessors(e, c, n, i + 1).then(a).then(null, s)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function mo() {
        return Un("globalEventProcessors", () => [])
    }

    function Vn(t) {
        mo().push(t)
    }
    var Kn = 4,
        K_ = 100;
    class Mt {
        __init() {
            this._stack = [{}]
        }
        constructor(e, r = new Ne, n = Kn) {
            this._version = n, Mt.prototype.__init.call(this), this.getStackTop().scope = r, e && this.bindClient(e)
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            var r = this.getStackTop();
            r.client = e, e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            var e = Ne.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }), e
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(e) {
            var r = this.pushScope();
            try {
                e(r)
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
        captureException(e, r) {
            var n = this._lastEventId = r && r.event_id ? r.event_id : rt(),
                i = new Error("Sentry syntheticException");
            return this._withClient((a, s) => {
                a.captureException(e, {
                    originalException: e,
                    syntheticException: i,
                    ...r,
                    event_id: n
                }, s)
            }), n
        }
        captureMessage(e, r, n) {
            var i = this._lastEventId = n && n.event_id ? n.event_id : rt(),
                a = new Error(e);
            return this._withClient((s, o) => {
                s.captureMessage(e, r, {
                    originalException: e,
                    syntheticException: a,
                    ...n,
                    event_id: i
                }, o)
            }), i
        }
        captureEvent(e, r) {
            var n = r && r.event_id ? r.event_id : rt();
            return e.type !== "transaction" && (this._lastEventId = n), this._withClient((i, a) => {
                i.captureEvent(e, {
                    ...r,
                    event_id: n
                }, a)
            }), n
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(e, r) {
            const {
                scope: n,
                client: i
            } = this.getStackTop();
            if (!n || !i) return;
            const {
                beforeBreadcrumb: a = null,
                maxBreadcrumbs: s = K_
            } = i.getOptions && i.getOptions() || {};
            if (!(s <= 0)) {
                var o = mr(),
                    c = {
                        timestamp: o,
                        ...e
                    },
                    f = a ? co(() => a(c, r)) : c;
                f !== null && n.addBreadcrumb(f, s)
            }
        }
        setUser(e) {
            var r = this.getScope();
            r && r.setUser(e)
        }
        setTags(e) {
            var r = this.getScope();
            r && r.setTags(e)
        }
        setExtras(e) {
            var r = this.getScope();
            r && r.setExtras(e)
        }
        setTag(e, r) {
            var n = this.getScope();
            n && n.setTag(e, r)
        }
        setExtra(e, r) {
            var n = this.getScope();
            n && n.setExtra(e, r)
        }
        setContext(e, r) {
            var n = this.getScope();
            n && n.setContext(e, r)
        }
        configureScope(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            r && n && e(r)
        }
        run(e) {
            var r = ua(this);
            try {
                e(this)
            } finally {
                ua(r)
            }
        }
        getIntegration(e) {
            var r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(e)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
            }
        }
        startTransaction(e, r) {
            return this._callExtensionMethod("startTransaction", e, r)
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(e = !1) {
            if (e) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            var e = this.getStackTop(),
                r = e && e.scope,
                n = r && r.getSession();
            n && J_(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: a
            } = n && n.getOptions() || {};
            var s = V();
            const {
                userAgent: o
            } = s.navigator || {};
            var c = z_({
                release: i,
                environment: a,
                ...r && {
                    user: r.getUser()
                },
                ...o && {
                    userAgent: o
                },
                ...e
            });
            if (r) {
                var f = r.getSession && r.getSession();
                f && f.status === "ok" && dt(f, {
                    status: "exited"
                }), this.endSession(), r.setSession(c)
            }
            return c
        }
        shouldSendDefaultPii() {
            var e = this.getClient(),
                r = e && e.getOptions();
            return Boolean(r && r.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {
                scope: e,
                client: r
            } = this.getStackTop();
            if (!!e) {
                var n = e.getSession();
                n && r && r.captureSession && r.captureSession(n)
            }
        }
        _withClient(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            n && e(n, r)
        }
        _callExtensionMethod(e, ...r) {
            var n = _r(),
                i = n.__SENTRY__;
            if (i && i.extensions && typeof i.extensions[e] == "function") return i.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function _r() {
        var t = V();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, t
    }

    function ua(t) {
        var e = _r(),
            r = Ae(e);
        return Xn(e, t), r
    }

    function Q() {
        var t = _r();
        return (!go(t) || Ae(t).isOlderThan(Kn)) && Xn(t, new Mt), Bn() ? X_(t) : Ae(t)
    }

    function X_(t) {
        try {
            var e = _r().__SENTRY__,
                r = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
            if (!r) return Ae(t);
            if (!go(r) || Ae(r).isOlderThan(Kn)) {
                var n = Ae(t).getStackTop();
                Xn(r, new Mt(n.client, Ne.clone(n.scope)))
            }
            return Ae(r)
        } catch {
            return Ae(t)
        }
    }

    function go(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function Ae(t) {
        return Un("hub", () => new Mt, t)
    }

    function Xn(t, e) {
        if (!t) return !1;
        var r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function Q_(t, e) {
        return Q().captureException(t, {
            captureContext: e
        })
    }

    function Z_(t, e) {
        var r = typeof e == "string" ? e : void 0,
            n = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return Q().captureMessage(t, r, n)
    }

    function _o(t) {
        Q().setTags(t)
    }

    function eb(t) {
        Q().withScope(t)
    }
    var tb = "7";

    function rb(t) {
        var e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function nb(t) {
        return `${rb(t)}${t.projectId}/envelope/`
    }

    function ib(t, e) {
        return o_({
            sentry_key: t.publicKey,
            sentry_version: tb,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function bo(t, e = {}) {
        var r = typeof e == "string" ? e : e.tunnel,
            n = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return r || `${nb(t)}?${ib(t,n)}`
    }

    function Eo(t) {
        if (!t || !t.sdk) return;
        const {
            name: e,
            version: r
        } = t.sdk;
        return {
            name: e,
            version: r
        }
    }

    function ab(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function sb(t, e, r, n) {
        var i = Eo(r),
            a = {
                sent_at: new Date().toISOString(),
                ...i && {
                    sdk: i
                },
                ...!!n && {
                    dsn: qn(e)
                }
            },
            s = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t];
        return gr(a, [s])
    }

    function ob(t, e, r, n) {
        var i = Eo(r),
            a = t.type || "event";
        const {
            transactionSampling: s
        } = t.sdkProcessingMetadata || {}, {
            method: o,
            rate: c
        } = s || {};
        ab(t, r && r.sdk);
        var f = cb(t, i, n, e);
        delete t.sdkProcessingMetadata;
        var y = [{
            type: a,
            sample_rates: [{
                id: o,
                rate: c
            }]
        }, t];
        return gr(f, [y])
    }

    function cb(t, e, r, n) {
        var i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.baggage,
            a = i && Y_(i);
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!r && {
                dsn: qn(n)
            },
            ...t.type === "transaction" && a && {
                trace: zn({
                    ...a
                })
            }
        }
    }
    var la = [];

    function fa(t) {
        return t.reduce((e, r) => (e.every(n => r.name !== n.name) && e.push(r), e), [])
    }

    function ub(t) {
        var e = t.defaultIntegrations && [...t.defaultIntegrations] || [],
            r = t.integrations;
        let n = [...fa(e)];
        Array.isArray(r) ? n = [...n.filter(s => r.every(o => o.name !== s.name)), ...fa(r)] : typeof r == "function" && (n = r(n), n = Array.isArray(n) ? n : [n]);
        var i = n.map(s => s.name),
            a = "Debug";
        return i.indexOf(a) !== -1 && n.push(...n.splice(i.indexOf(a), 1)), n
    }

    function lb(t) {
        var e = {};
        return t.forEach(r => {
            e[r.name] = r, la.indexOf(r.name) === -1 && (r.setupOnce(Vn, Q), la.push(r.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log(`Integration installed: ${r.name}`))
        }), e
    }
    var da = "Not capturing exception because it's already been captured.";
    class Qe {
        __init() {
            this._integrations = {}
        }
        __init2() {
            this._integrationsInitialized = !1
        }
        __init3() {
            this._numProcessing = 0
        }
        __init4() {
            this._outcomes = {}
        }
        constructor(e) {
            if (Qe.prototype.__init.call(this), Qe.prototype.__init2.call(this), Qe.prototype.__init3.call(this), Qe.prototype.__init4.call(this), this._options = e, e.dsn) {
                this._dsn = i_(e.dsn);
                var r = bo(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, r, n) {
            if (ia(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log(da);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(a => this._captureEvent(a, r, n)).then(a => {
                i = a
            })), i
        }
        captureMessage(e, r, n, i) {
            let a = n && n.event_id;
            var s = so(e) ? this.eventFromMessage(String(e), r, n) : this.eventFromException(e, n);
            return this._process(s.then(o => this._captureEvent(o, n, i)).then(o => {
                a = o
            })), a
        }
        captureEvent(e, r, n) {
            if (r && r.originalException && ia(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log(da);
                return
            }
            let i = r && r.event_id;
            return this._process(this._captureEvent(e, r, n).then(a => {
                i = a
            })), i
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), dt(e, {
                init: !1
            }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getTransport() {
            return this._transport
        }
        flush(e) {
            var r = this._transport;
            return r ? this._isClientDoneProcessing(e).then(n => r.flush(e).then(i => n && i)) : We(!0)
        }
        close(e) {
            return this.flush(e).then(r => (this.getOptions().enabled = !1, r))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = lb(this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
            }
        }
        sendEvent(e, r = {}) {
            if (this._dsn) {
                let i = ob(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (var n of r.attachments || []) i = D_(i, M_(n, this._options.transportOptions && this._options.transportOptions.textEncoder));
                this._sendEnvelope(i)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                var r = sb(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(r)
            }
        }
        recordDroppedEvent(e, r) {
            if (this._options.sendClientReports) {
                var n = `${e}:${r}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
            }
        }
        _updateSessionFromEvent(e, r) {
            let n = !1,
                i = !1;
            var a = r.exception && r.exception.values;
            if (a) {
                i = !0;
                for (var s of a) {
                    var o = s.mechanism;
                    if (o && o.handled === !1) {
                        n = !0;
                        break
                    }
                }
            }
            var c = e.status === "ok",
                f = c && e.errors === 0 || c && n;
            f && (dt(e, {
                ...n && {
                    status: "crashed"
                },
                errors: e.errors || Number(i || n)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new ce(r => {
                let n = 0;
                var i = 1,
                    a = setInterval(() => {
                        this._numProcessing == 0 ? (clearInterval(a), r(!0)) : (n += i, e && n >= e && (clearInterval(a), r(!1)))
                    }, i)
            })
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._dsn !== void 0
        }
        _prepareEvent(e, r, n) {
            const {
                normalizeDepth: i = 3,
                normalizeMaxBreadth: a = 1e3
            } = this.getOptions();
            var s = {
                ...e,
                event_id: e.event_id || r.event_id || rt(),
                timestamp: e.timestamp || mr()
            };
            this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
            let o = n;
            r.captureContext && (o = Ne.clone(o).update(r.captureContext));
            let c = We(s);
            if (o) {
                var f = [...r.attachments || [], ...o.getAttachments()];
                f.length && (r.attachments = f), c = o.applyToEvent(s, r)
            }
            return c.then(y => typeof i == "number" && i > 0 ? this._normalizeEvent(y, i, a) : y)
        }
        _normalizeEvent(e, r, n) {
            if (!e) return null;
            var i = {
                ...e,
                ...e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map(a => ({
                        ...a,
                        ...a.data && {
                            data: Fe(a.data, r, n)
                        }
                    }))
                },
                ...e.user && {
                    user: Fe(e.user, r, n)
                },
                ...e.contexts && {
                    contexts: Fe(e.contexts, r, n)
                },
                ...e.extra && {
                    extra: Fe(e.extra, r, n)
                }
            };
            return e.contexts && e.contexts.trace && i.contexts && (i.contexts.trace = e.contexts.trace, e.contexts.trace.data && (i.contexts.trace.data = Fe(e.contexts.trace.data, r, n))), e.spans && (i.spans = e.spans.map(a => (a.data && (a.data = Fe(a.data, r, n)), a))), i
        }
        _applyClientOptions(e) {
            var r = this.getOptions();
            const {
                environment: n,
                release: i,
                dist: a,
                maxValueLength: s = 250
            } = r;
            "environment" in e || (e.environment = "environment" in r ? n : "production"), e.release === void 0 && i !== void 0 && (e.release = i), e.dist === void 0 && a !== void 0 && (e.dist = a), e.message && (e.message = Pt(e.message, s));
            var o = e.exception && e.exception.values && e.exception.values[0];
            o && o.value && (o.value = Pt(o.value, s));
            var c = e.request;
            c && c.url && (c.url = Pt(c.url, s))
        }
        _applyIntegrationsMetadata(e) {
            var r = Object.keys(this._integrations);
            r.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...r])
        }
        _captureEvent(e, r = {}, n) {
            return this._processEvent(e, r, n).then(i => i.event_id, i => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    var a = i;
                    a.logLevel === "log" ? x.log(a.message) : x.warn(a)
                }
            })
        }
        _processEvent(e, r, n) {
            const {
                beforeSend: i,
                sampleRate: a
            } = this.getOptions();
            if (!this._isEnabled()) return fn(new ae("SDK not enabled, will not capture event.", "log"));
            var s = e.type === "transaction";
            return !s && typeof a == "number" && Math.random() > a ? (this.recordDroppedEvent("sample_rate", "error"), fn(new ae(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"))) : this._prepareEvent(e, r, n).then(o => {
                if (o === null) throw this.recordDroppedEvent("event_processor", e.type || "error"), new ae("An event processor returned null, will not send event.", "log");
                var c = r.data && r.data.__sentry__ === !0;
                if (c || s || !i) return o;
                var f = i(o, r);
                return fb(f)
            }).then(o => {
                if (o === null) throw this.recordDroppedEvent("before_send", e.type || "error"), new ae("`beforeSend` returned `null`, will not send event.", "log");
                var c = n && n.getSession();
                return !s && c && this._updateSessionFromEvent(c, o), this.sendEvent(o, r), o
            }).then(null, o => {
                throw o instanceof ae ? o : (this.captureException(o, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: o
                }), new ae(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${o}`))
            })
        }
        _process(e) {
            this._numProcessing += 1, e.then(r => (this._numProcessing -= 1, r), r => (this._numProcessing -= 1, r))
        }
        _sendEnvelope(e) {
            this._transport && this._dsn ? this._transport.send(e).then(null, r => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error("Error while sending event:", r)
            }) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error("Transport disabled")
        }
        _clearOutcomes() {
            var e = this._outcomes;
            return this._outcomes = {}, Object.keys(e).map(r => {
                const [n, i] = r.split(":");
                return {
                    reason: n,
                    category: i,
                    quantity: e[r]
                }
            })
        }
    }

    function fb(t) {
        var e = "`beforeSend` method has to return `null` or a valid event.";
        if (Gn(t)) return t.then(r => {
            if (!(ft(r) || r === null)) throw new ae(e);
            return r
        }, r => {
            throw new ae(`beforeSend rejected with ${r}`)
        });
        if (!(ft(t) || t === null)) throw new ae(e);
        return t
    }

    function db(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? x.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        var r = Q(),
            n = r.getScope();
        n && n.update(e.initialScope);
        var i = new t(e);
        r.bindClient(i)
    }
    var hb = 30;

    function wo(t, e, r = A_(t.bufferSize || hb)) {
        let n = {};
        var i = s => r.drain(s);

        function a(s) {
            var o = [];
            if (sa(s, (m, w) => {
                    var O = oa(w);
                    H_(n, O) ? t.recordDroppedEvent("ratelimit_backoff", O) : o.push(m)
                }), o.length === 0) return We();
            var c = gr(s[0], o),
                f = m => {
                    sa(c, (w, O) => {
                        t.recordDroppedEvent(m, oa(O))
                    })
                },
                y = () => e({
                    body: vo(c, t.textEncoder)
                }).then(m => {
                    m.statusCode !== void 0 && (m.statusCode < 200 || m.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Sentry responded with status code ${m.statusCode} to sent event.`), n = W_(n, m)
                }, m => {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error("Failed while sending event:", m), f("network_error")
                });
            return r.add(y).then(m => m, m => {
                if (m instanceof ae) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error("Skipped sending event due to full buffer"), f("queue_overflow"), We();
                throw m
            })
        }
        return {
            send: a,
            flush: i
        }
    }
    var ha = "7.11.1";
    let pa;
    class xt {
        constructor() {
            xt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = xt.id
        }
        setupOnce() {
            pa = Function.prototype.toString, Function.prototype.toString = function(...e) {
                var r = Yn(this) || this;
                return pa.apply(r, e)
            }
        }
    }
    xt.__initStatic();
    var pb = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class nt {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = nt.id
        }
        constructor(e = {}) {
            this._options = e, nt.prototype.__init.call(this)
        }
        setupOnce(e, r) {
            var n = i => {
                var a = r();
                if (a) {
                    var s = a.getIntegration(nt);
                    if (s) {
                        var o = a.getClient(),
                            c = o ? o.getOptions() : {},
                            f = yb(s._options, c);
                        return vb(i, f) ? null : i
                    }
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    nt.__initStatic();

    function yb(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...pb],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function vb(t, e) {
        return e.ignoreInternal && Eb(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Event dropped due to being internal Sentry Error.
Event: ${qe(t)}`), !0) : mb(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${qe(t)}`), !0) : gb(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${qe(t)}.
Url: ${nr(t)}`), !0) : _b(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${qe(t)}.
Url: ${nr(t)}`), !0)
    }

    function mb(t, e) {
        return !e || !e.length ? !1 : bb(t).some(r => e.some(n => Hn(r, n)))
    }

    function gb(t, e) {
        if (!e || !e.length) return !1;
        var r = nr(t);
        return r ? e.some(n => Hn(r, n)) : !1
    }

    function _b(t, e) {
        if (!e || !e.length) return !0;
        var r = nr(t);
        return r ? e.some(n => Hn(r, n)) : !0
    }

    function bb(t) {
        if (t.message) return [t.message];
        if (t.exception) try {
            const {
                type: e = "",
                value: r = ""
            } = t.exception.values && t.exception.values[0] || {};
            return [`${r}`, `${e}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error(`Cannot extract message for event ${qe(t)}`), []
        }
        return []
    }

    function Eb(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function wb(t = []) {
        for (let r = t.length - 1; r >= 0; r--) {
            var e = t[r];
            if (e && e.filename !== "<anonymous>" && e.filename !== "[native code]") return e.filename || null
        }
        return null
    }

    function nr(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? wb(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error(`Cannot extract url for event ${qe(t)}`), null
        }
    }

    function So(t, e) {
        var r = Qn(t, e),
            n = {
                type: e && e.name,
                value: Rb(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function Sb(t, e, r, n) {
        var i = {
            exception: {
                values: [{
                    type: Fn(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${c_(e)}`
                }]
            },
            extra: {
                __serialized__: po(e)
            }
        };
        if (r) {
            var a = Qn(t, r);
            a.length && (i.exception.values[0].stacktrace = {
                frames: a
            })
        }
        return i
    }

    function qr(t, e) {
        return {
            exception: {
                values: [So(t, e)]
            }
        }
    }

    function Qn(t, e) {
        var r = e.stacktrace || e.stack || "",
            n = kb(e);
        try {
            return t(r, n)
        } catch {}
        return []
    }
    var Ob = /Minified React error #\d+;/i;

    function kb(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (Ob.test(t.message)) return 1
        }
        return 0
    }

    function Rb(t) {
        var e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function Tb(t, e, r, n) {
        var i = r && r.syntheticException || void 0,
            a = Zn(t, e, i, n);
        return At(a), a.level = "error", r && r.event_id && (a.event_id = r.event_id), We(a)
    }

    function $b(t, e, r = "info", n, i) {
        var a = n && n.syntheticException || void 0,
            s = pn(t, e, a, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), We(s)
    }

    function Zn(t, e, r, n, i) {
        let a;
        if (ao(e) && e.error) {
            var s = e;
            return qr(t, s.error)
        }
        if (Xi(e) || zg(e)) {
            var o = e;
            if ("stack" in e) a = qr(t, e);
            else {
                var c = o.name || (Xi(o) ? "DOMError" : "DOMException"),
                    f = o.message ? `${c}: ${o.message}` : c;
                a = pn(t, f, r, n), un(a, f)
            }
            return "code" in o && (a.tags = {
                ...a.tags,
                "DOMException.code": `${o.code}`
            }), a
        }
        if (io(e)) return qr(t, e);
        if (ft(e) || Fn(e)) {
            var y = e;
            return a = Sb(t, y, r, i), At(a, {
                synthetic: !0
            }), a
        }
        return a = pn(t, e, r, n), un(a, `${e}`, void 0), At(a, {
            synthetic: !0
        }), a
    }

    function pn(t, e, r, n) {
        var i = {
            message: e
        };
        if (n && r) {
            var a = Qn(t, r);
            a.length && (i.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: a
                    }
                }]
            })
        }
        return i
    }
    var Oo = "Breadcrumbs";
    class Nt {
        static __initStatic() {
            this.id = Oo
        }
        __init() {
            this.name = Nt.id
        }
        constructor(e) {
            Nt.prototype.__init.call(this), this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            }
        }
        setupOnce() {
            this.options.console && Ie("console", Ib), this.options.dom && Ie("dom", Pb(this.options.dom)), this.options.xhr && Ie("xhr", Ab), this.options.fetch && Ie("fetch", xb), this.options.history && Ie("history", Nb)
        }
    }
    Nt.__initStatic();

    function Pb(t) {
        function e(r) {
            let n, i = typeof t == "object" ? t.serializeAttribute : void 0;
            typeof i == "string" && (i = [i]);
            try {
                n = r.event.target ? sn(r.event.target, i) : sn(r.event, i)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && Q().addBreadcrumb({
                category: `ui.${r.name}`,
                message: n
            }, {
                event: r.event,
                name: r.name,
                global: r.global
            })
        }
        return e
    }

    function Ib(t) {
        var e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: N_(t.level),
            message: Zi(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${Zi(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        Q().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function Ab(t) {
        if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__) return;
            const {
                method: e,
                url: r,
                status_code: n,
                body: i
            } = t.xhr.__sentry_xhr__ || {};
            Q().addBreadcrumb({
                category: "xhr",
                data: {
                    method: e,
                    url: r,
                    status_code: n
                },
                type: "http"
            }, {
                xhr: t.xhr,
                input: i
            });
            return
        }
    }

    function xb(t) {
        !t.endTimestamp || t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST" || (t.error ? Q().addBreadcrumb({
            category: "fetch",
            data: t.fetchData,
            level: "error",
            type: "http"
        }, {
            data: t.error,
            input: t.args
        }) : Q().addBreadcrumb({
            category: "fetch",
            data: {
                ...t.fetchData,
                status_code: t.response.status
            },
            type: "http"
        }, {
            input: t.args,
            response: t.response
        }))
    }

    function Nb(t) {
        var e = V();
        let r = t.from,
            n = t.to;
        var i = Fr(e.location.href);
        let a = Fr(r);
        var s = Fr(n);
        a.path || (a = i), i.protocol === s.protocol && i.host === s.host && (n = s.relative), i.protocol === a.protocol && i.host === a.host && (r = a.relative), Q().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    var be = V();
    let Yt;

    function ko() {
        if (Yt) return Yt;
        if (cn(be.fetch)) return Yt = be.fetch.bind(be);
        var t = be.document;
        let e = be.fetch;
        if (t && typeof t.createElement == "function") try {
            var r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r);
            var n = r.contentWindow;
            n && n.fetch && (e = n.fetch), t.head.removeChild(r)
        } catch (i) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
        }
        return Yt = e.bind(be)
    }

    function Lb(t, e) {
        var r = Object.prototype.toString.call(be && be.navigator) === "[object Navigator]",
            n = r && typeof be.navigator.sendBeacon == "function";
        if (n) {
            var i = be.navigator.sendBeacon.bind(be.navigator);
            i(t, e)
        } else if (Jn()) {
            var a = ko();
            a(t, {
                body: e,
                method: "POST",
                credentials: "omit",
                keepalive: !0
            }).then(null, s => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error(s)
            })
        }
    }
    var Hr = V();
    class Cb extends Qe {
        constructor(e) {
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: ha
                }],
                version: ha
            }, super(e), e.sendClientReports && Hr.document && Hr.document.addEventListener("visibilitychange", () => {
                Hr.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return Tb(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", n) {
            return $b(this._options.stackParser, e, r, n, this._options.attachStacktrace)
        }
        sendEvent(e, r) {
            var n = this.getIntegrationById(Oo);
            n && n.options && n.options.sentry && Q().addBreadcrumb({
                category: `sentry.${e.type==="transaction"?"transaction":"event"}`,
                event_id: e.event_id,
                level: e.level,
                message: qe(e)
            }, {
                event: e
            }), super.sendEvent(e, r)
        }
        _prepareEvent(e, r, n) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, r, n)
        }
        _flushOutcomes() {
            var e = this._clearOutcomes();
            if (e.length === 0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log("Sending outcomes:", e);
            var r = bo(this._dsn, this._options),
                n = U_(e, this._options.tunnel && qn(this._dsn));
            try {
                Lb(r, vo(n))
            } catch (i) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.error(i)
            }
        }
    }

    function Db(t, e = ko()) {
        function r(n) {
            var i = {
                body: n.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                ...t.fetchOptions
            };
            return e(t.url, i).then(a => ({
                statusCode: a.status,
                headers: {
                    "x-sentry-rate-limits": a.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": a.headers.get("Retry-After")
                }
            }))
        }
        return wo(t, r)
    }
    var jb = 4;

    function Mb(t) {
        function e(r) {
            return new ce((n, i) => {
                var a = new XMLHttpRequest;
                a.onerror = i, a.onreadystatechange = () => {
                    a.readyState === jb && n({
                        statusCode: a.status,
                        headers: {
                            "x-sentry-rate-limits": a.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": a.getResponseHeader("Retry-After")
                        }
                    })
                }, a.open("POST", t.url);
                for (var s in t.headers) Object.prototype.hasOwnProperty.call(t.headers, s) && a.setRequestHeader(s, t.headers[s]);
                a.send(r.body)
            })
        }
        return wo(t, e)
    }
    var br = "?",
        Bb = 30,
        Ub = 40,
        Fb = 50;

    function ei(t, e, r, n) {
        var i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i
    }
    var Gb = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        qb = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Hb = t => {
            var e = Gb.exec(t);
            if (e) {
                var r = e[2] && e[2].indexOf("eval") === 0;
                if (r) {
                    var n = qb.exec(e[2]);
                    n && (e[2] = n[1], e[3] = n[2], e[4] = n[3])
                }
                const [i, a] = Ro(e[1] || br, e[2]);
                return ei(a, i, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        Wb = [Bb, Hb],
        Yb = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        zb = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Jb = t => {
            var e = Yb.exec(t);
            if (e) {
                var r = e[3] && e[3].indexOf(" > eval") > -1;
                if (r) {
                    var n = zb.exec(e[3]);
                    n && (e[1] = e[1] || "eval", e[3] = n[1], e[4] = n[2], e[5] = "")
                }
                let i = e[3],
                    a = e[1] || br;
                return [a, i] = Ro(a, i), ei(i, a, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        Vb = [Fb, Jb],
        Kb = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Xb = t => {
            var e = Kb.exec(t);
            return e ? ei(e[2], e[1] || br, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        Qb = [Ub, Xb],
        Zb = [Wb, Vb, Qb],
        eE = fo(...Zb),
        Ro = (t, e) => {
            var r = t.indexOf("safari-extension") !== -1,
                n = t.indexOf("safari-web-extension") !== -1;
            return r || n ? [t.indexOf("@") !== -1 ? t.split("@")[0] : br, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
    let yn = 0;

    function To() {
        return yn > 0
    }

    function tE() {
        yn += 1, setTimeout(() => {
            yn -= 1
        })
    }

    function ht(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            var n = t.__sentry_wrapped__;
            if (n) return n;
            if (Yn(t)) return t
        } catch {
            return t
        }
        var i = function() {
            var o = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var c = o.map(f => ht(f, e));
                return t.apply(this, c)
            } catch (f) {
                throw tE(), eb(y => {
                    y.addEventProcessor(m => (e.mechanism && (un(m, void 0, void 0), At(m, e.mechanism)), m.extra = {
                        ...m.extra,
                        arguments: o
                    }, m)), Q_(f)
                }), f
            }
        };
        try {
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a])
        } catch {}
        uo(i, t), Wn(t, "__sentry_wrapped__", i);
        try {
            var s = Object.getOwnPropertyDescriptor(i, "name");
            s.configurable && Object.defineProperty(i, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return i
    }
    class Le {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = Le.id
        }
        __init2() {
            this._installFunc = {
                onerror: rE,
                onunhandledrejection: nE
            }
        }
        constructor(e) {
            Le.prototype.__init.call(this), Le.prototype.__init2.call(this), this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            var e = this._options;
            for (var r in e) {
                var n = this._installFunc[r];
                n && e[r] && (sE(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    Le.__initStatic();

    function rE() {
        Ie("error", t => {
            const [e, r, n] = Io();
            if (!e.getIntegration(Le)) return;
            const {
                msg: i,
                url: a,
                line: s,
                column: o,
                error: c
            } = t;
            if (!(To() || c && c.__sentry_own_request__)) {
                var f = c === void 0 && lt(i) ? aE(i, a, s, o) : $o(Zn(r, c || i, void 0, n, !1), a, s, o);
                f.level = "error", Po(e, c, f, "onerror")
            }
        })
    }

    function nE() {
        Ie("unhandledrejection", t => {
            const [e, r, n] = Io();
            if (!e.getIntegration(Le)) return;
            let i = t;
            try {
                "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
            } catch {}
            if (To() || i && i.__sentry_own_request__) return !0;
            var a = so(i) ? iE(i) : Zn(r, i, void 0, n, !0);
            a.level = "error", Po(e, i, a, "onunhandledrejection")
        })
    }

    function iE(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function aE(t, e, r, n) {
        var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let a = ao(t) ? t.message : t,
            s = "Error";
        var o = a.match(i);
        o && (s = o[1], a = o[2]);
        var c = {
            exception: {
                values: [{
                    type: s,
                    value: a
                }]
            }
        };
        return $o(c, e, r, n)
    }

    function $o(t, e, r, n) {
        var i = t.exception = t.exception || {},
            a = i.values = i.values || [],
            s = a[0] = a[0] || {},
            o = s.stacktrace = s.stacktrace || {},
            c = o.frames = o.frames || [],
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            y = isNaN(parseInt(r, 10)) ? void 0 : r,
            m = lt(e) && e.length > 0 ? e : Zg();
        return c.length === 0 && c.push({
            colno: f,
            filename: m,
            function: "?",
            in_app: !0,
            lineno: y
        }), t
    }

    function sE(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.log(`Global Handler attached: ${t}`)
    }

    function Po(t, e, r, n) {
        At(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function Io() {
        var t = Q(),
            e = t.getClient(),
            r = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, r.stackParser, r.attachStacktrace]
    }
    var oE = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Lt {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = Lt.id
        }
        constructor(e) {
            Lt.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            var e = V();
            this._options.setTimeout && se(e, "setTimeout", ya), this._options.setInterval && se(e, "setInterval", ya), this._options.requestAnimationFrame && se(e, "requestAnimationFrame", cE), this._options.XMLHttpRequest && "XMLHttpRequest" in e && se(XMLHttpRequest.prototype, "send", uE);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : oE;
                n.forEach(lE)
            }
        }
    }
    Lt.__initStatic();

    function ya(t) {
        return function(...e) {
            var r = e[0];
            return e[0] = ht(r, {
                mechanism: {
                    data: {
                        function: Ce(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function cE(t) {
        return function(e) {
            return t.apply(this, [ht(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Ce(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function uE(t) {
        return function(...e) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(i => {
                i in r && typeof r[i] == "function" && se(r, i, function(a) {
                    var s = {
                            mechanism: {
                                data: {
                                    function: i,
                                    handler: Ce(a)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        o = Yn(a);
                    return o && (s.mechanism.data.handler = Ce(o)), ht(a, s)
                })
            }), t.apply(this, e)
        }
    }

    function lE(t) {
        var e = V(),
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (se(r, "addEventListener", function(n) {
            return function(i, a, s) {
                try {
                    typeof a.handleEvent == "function" && (a.handleEvent = ht(a.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Ce(a),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [i, ht(a, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Ce(a),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), s])
            }
        }), se(r, "removeEventListener", function(n) {
            return function(i, a, s) {
                var o = a;
                try {
                    var c = o && o.__sentry_wrapped__;
                    c && n.call(this, i, c, s)
                } catch {}
                return n.call(this, i, o, s)
            }
        }))
    }
    var fE = "cause",
        dE = 5;
    class it {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = it.id
        }
        constructor(e = {}) {
            it.prototype.__init.call(this), this._key = e.key || fE, this._limit = e.limit || dE
        }
        setupOnce() {
            var e = Q().getClient();
            !e || Vn((r, n) => {
                var i = Q().getIntegration(it);
                return i ? hE(e.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    it.__initStatic();

    function hE(t, e, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !je(i.originalException, Error)) return n;
        var a = Ao(t, r, i.originalException, e);
        return n.exception.values = [...a, ...n.exception.values], n
    }

    function Ao(t, e, r, n, i = []) {
        if (!je(r[n], Error) || i.length + 1 >= e) return i;
        var a = So(t, r[n]);
        return Ao(t, e, r[n], n, [a, ...i])
    }
    var Ue = V();
    class at {
        constructor() {
            at.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = at.id
        }
        setupOnce() {
            Vn(e => {
                if (Q().getIntegration(at)) {
                    if (!Ue.navigator && !Ue.location && !Ue.document) return e;
                    var r = e.request && e.request.url || Ue.location && Ue.location.href;
                    const {
                        referrer: a
                    } = Ue.document || {}, {
                        userAgent: s
                    } = Ue.navigator || {};
                    var n = {
                            ...e.request && e.request.headers,
                            ...a && {
                                Referer: a
                            },
                            ...s && {
                                "User-Agent": s
                            }
                        },
                        i = {
                            ...r && {
                                url: r
                            },
                            headers: n
                        };
                    return {
                        ...e,
                        request: i
                    }
                }
                return e
            })
        }
    }
    at.__initStatic();
    class st {
        constructor() {
            st.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = st.id
        }
        setupOnce(e, r) {
            var n = i => {
                var a = r().getIntegration(st);
                if (a) {
                    try {
                        if (pE(i, a._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {
                        return a._previousEvent = i
                    }
                    return a._previousEvent = i
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    st.__initStatic();

    function pE(t, e) {
        return e ? !!(yE(t, e) || vE(t, e)) : !1
    }

    function yE(t, e) {
        var r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !No(t, e) || !xo(t, e))
    }

    function vE(t, e) {
        var r = va(e),
            n = va(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !No(t, e) || !xo(t, e))
    }

    function xo(t, e) {
        let r = ma(t),
            n = ma(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let s = 0; s < n.length; s++) {
            var i = n[s],
                a = r[s];
            if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
        }
        return !0
    }

    function No(t, e) {
        let r = t.fingerprint,
            n = e.fingerprint;
        if (!r && !n) return !0;
        if (r && !n || !r && n) return !1;
        r = r, n = n;
        try {
            return r.join("") === n.join("")
        } catch {
            return !1
        }
    }

    function va(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function ma(t) {
        var e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    var mE = [new nt, new xt, new Lt, new Nt, new Le, new it, new st, new at];

    function gE(t = {}) {
        if (t.defaultIntegrations === void 0 && (t.defaultIntegrations = mE), t.release === void 0) {
            var e = V();
            e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
        }
        t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        var r = {
            ...t,
            stackParser: l_(t.stackParser || eE),
            integrations: ub(t),
            transport: t.transport || (Jn() ? Db : Mb)
        };
        db(Cb, r), t.autoSessionTracking && _E()
    }

    function ga(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function _E() {
        var t = V(),
            e = t.document;
        if (typeof e > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && x.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        var r = Q();
        !r.captureSession || (ga(r), Ie("history", ({
            from: n,
            to: i
        }) => {
            n === void 0 || n === i || ga(Q())
        }))
    }
    const bE = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        EE = {
            RETRY: bE
        },
        _a = {
            en: EE
        };
    class Lo {
        constructor(e) {
            G(this, "manifest");
            G(this, "registered", {});
            G(this, "register", e => {
                this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
            });
            G(this, "load", async e => {
                var o, c;
                document.querySelectorAll("[data-tv-prefetch]").forEach(f => f.remove());
                const n = this.getBranchName(e),
                    i = window.tv.manifest.branches[n];
                if (!i) throw new Error(`[loader] Unknown branch "${n}" can not be found in manifest`);
                const a = i.bundles[e.app];
                if (!a) throw new Error(`[loader] Unknown app "${e.app}" can not be loaded from branch "${n}"`);
                try {
                    n === "** hmr **" ? await this.loadHMRBundle(a) : n === "** dist **" ? await this.loadDistBundle(a) : await this.loadS3Bundle(a)
                } catch {
                    console.error(`[loader] Unable to load "${e.app}" from branch "${n}"`), this.showLoaderError();
                    return
                }
                if (Jt("[loader] load success", {
                        app: e.app,
                        appVersion: (o = a.version) != null ? o : i.version,
                        loaderVersion: window.tv.manifest.loader.version,
                        branch: n
                    }), !e.autoMount) return;
                const s = e;
                s.version = (c = a.version) != null ? c : i.version, this.mount(s)
            });
            G(this, "connect", e => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(e)
            });
            G(this, "mount", e => {
                var s, o, c, f;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const y = this.registered.info(e);
                    _o({
                        branch: y.branch,
                        "app.tag": y.tag,
                        "app.type": y.type,
                        "app.version": y.version,
                        "app.wrapper": y.wrapper
                    }), Ta.pageView(y.tag)
                }
                Kt.setup(e.app, (c = (s = e.room) == null ? void 0 : s.code) != null ? c : (o = e.client) == null ? void 0 : o.code);
                const n = document.querySelectorAll("[data-tv-style]"),
                    a = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(y => {
                        const m = document.createElement("link");
                        return m.rel = "stylesheet", m.href = y.href, m.setAttribute("data-tv-style", ""), m
                    });
                document.head.append(...a), n.forEach(y => y.remove()), this.registered.unmount = (f = this.registered.mount(e)) != null ? f : void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            G(this, "debugLoad", async (e, r) => {
                throw new Error("[Loader] Debug controllers are not avaialble in production builds")
            });
            this.manifest = e
        }
        getBranchName(e) {
            var a, s, o, c, f;
            const r = (s = (a = e.match) == null ? void 0 : a.params) == null ? void 0 : s.branch,
                n = Kt.get("preference:branch"),
                i = this.manifest.branches;
            if (r) return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
            if (e.branch) return e.branch;
            if ((o = i["** hmr **"]) != null && o.bundles[e.app]) return "** hmr **";
            if (n && ((c = i[n]) == null ? void 0 : c.bundles[e.app])) return n;
            if ((f = i["** dist **"]) != null && f.bundles[e.app]) return "** dist **";
            if (i.main) return "main";
            throw new Error("[loader] Could not resolve a branch name and main is not available")
        }
        getS3Url(e, r) {
            return `${r}/${e}`
        }
        async loadHMRBundle(e) {
            const r = e.file;
            await r()
        }
        loadScript(e) {
            return new Promise((r, n) => {
                const i = document.createElement("script");
                i.src = e, i.async = !0, i.type = "module", i.crossOrigin = "", i.onerror = n, i.onload = r, i.setAttribute("data-tv-script", ""), document.head.append(i)
            })
        }
        async fetchBundle(e, r, n) {
            r.forEach(a => {
                const s = n ? this.getS3Url(a, n) : a,
                    o = document.createElement("link");
                n ? o.rel = "prefetch" : (o.rel = "preload", o.as = "style"), o.href = s, o.setAttribute("data-tv-prefetch", ""), document.head.append(o)
            });
            const i = n ? this.getS3Url(e, n) : e;
            await this.loadScript(i)
        }
        async loadDistBundle(e) {
            return this.fetchBundle(`/@fs/${e.file}`, e.css)
        }
        async loadS3Bundle(e) {
            return this.fetchBundle(e.file, e.css, e.base)
        }
        showLoaderError() {
            var a;
            const e = document.getElementsByClassName("loader-status")[0];
            if (!e) return;
            const r = document.createElement("p"),
                n = navigator.languages[0],
                i = (a = _a[n]) != null ? a : _a.en;
            e.classList.add("error"), r.textContent = i.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    }
    const wE = [{
            name: "Loader",
            tag: "@loader",
            directory: "loader",
            isPublic: !0
        }, {
            name: "Connect",
            tag: "@connect",
            directory: "connect",
            isPublic: !0
        }, {
            name: "Moderator",
            tag: "@moderator",
            directory: "moderator",
            isPublic: !0
        }],
        SE = t => wE.find(e => e.tag === t);
    class ba extends Lo {
        constructor() {
            super(...arguments);
            G(this, "debugLoad", async (r, n) => {
                const i = this.getBranchName({
                        app: n.data.app,
                        match: n
                    }),
                    a = await this.fetchJson(r, i, n.data.app, n.data.file),
                    s = new Gg(a),
                    o = await s.client.connect(),
                    c = {
                        app: n.data.app,
                        autoMount: !0,
                        client: s.client,
                        branch: i,
                        replayer: s,
                        match: n,
                        welcome: o
                    };
                return this.load(c)
            })
        }
        getLocalPath(r, n) {
            var a, s;
            if (r[0] === "@") {
                const o = (a = SE(r)) == null ? void 0 : a.directory;
                if (!o) throw new Error(`No app found with tag ${r}`);
                return `/@fs/${window.tv.manifest.root}}/apps/${o}/src/json/${n}.json`
            }
            const i = (s = Ki(r)) == null ? void 0 : s.directory;
            if (!i) throw new Error(`No game found with tag ${r}`);
            return `/@fs/${window.tv.manifest.root}/games/${i}/src/json/${n}.json`
        }
        getBundlePath(r, n, i) {
            var o;
            if (n[0] === "@") return `${r}/${n}/json/${i}.json`;
            const a = (o = Ki(n)) == null ? void 0 : o.directory;
            if (!a) throw new Error(`No game found with tag ${n}`);
            const s = a.replaceAll("/", "-");
            return `${r}/${s}/json/${i}.json`
        }
        getCloudPath(r, n) {
            return `https://jbg-ops.s3.amazonaws.com/controller/states/${r}/${n}.json`
        }
        async fetchJson(r, n, i, a) {
            let s = "";
            return r === "cloud" ? s = this.getCloudPath(i, a) : n === "** hmr **" || n === "** dist **" ? s = this.getLocalPath(i, a) : s = this.getBundlePath(n, i, a), await (await fetch(s)).json()
        }
    }
    const Ea = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        OE = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        kE = t => {
            gE({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: OE,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === Ea.EcastEntityNotFound) return Z_("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === Ea.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(e, r);
                        n && (e.contexts = e.contexts || {}, e.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return e
                }
            }), _o({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    var RE = /([:*])(\w+)/g,
        TE = "([^/]+)",
        $E = /\*/g,
        PE = "?(?:.*)",
        IE = /\/\?/g,
        AE = "/?([^/]+|)",
        xE = "(?:/^|^)",
        NE = "";

    function Co(t) {
        return t === void 0 && (t = "/"), ri() ? location.pathname + location.search + location.hash : t
    }

    function J(t) {
        return t.replace(/\/+$/, "").replace(/^\/+/, "")
    }

    function ir(t) {
        return typeof t == "string"
    }

    function LE(t) {
        return typeof t == "function"
    }

    function ar(t) {
        return t && t.indexOf("#") >= 0 && t.split("#").pop() || ""
    }

    function CE(t, e) {
        return e.length === 0 || !t ? null : t.slice(1, t.length).reduce(function(r, n, i) {
            return r === null && (r = {}), r[e[i]] = decodeURIComponent(n), r
        }, null)
    }

    function sr(t) {
        var e = J(t).split(/\?(.*)?$/);
        return [J(e[0]), e.slice(1).join("")]
    }

    function ti(t) {
        for (var e = {}, r = t.split("&"), n = 0; n < r.length; n++) {
            var i = r[n].split("=");
            if (i[0] !== "") {
                var a = decodeURIComponent(i[0]);
                e[a] ? (Array.isArray(e[a]) || (e[a] = [e[a]]), e[a].push(decodeURIComponent(i[1] || ""))) : e[a] = decodeURIComponent(i[1] || "")
            }
        }
        return e
    }

    function Do(t, e) {
        var r = sr(J(t.currentLocationPath)),
            n = r[0],
            i = r[1],
            a = i === "" ? null : ti(i),
            s = [],
            o;
        if (ir(e.path)) {
            if (o = xE + J(e.path).replace(RE, function(m, w, O) {
                    return s.push(O), TE
                }).replace($E, PE).replace(IE, AE) + "$", J(e.path) === "" && J(n) === "") return {
                url: n,
                queryString: i,
                hashString: ar(t.to),
                route: e,
                data: null,
                params: a
            }
        } else o = e.path;
        var c = new RegExp(o, NE),
            f = n.match(c);
        if (f) {
            var y = ir(e.path) ? CE(f, s) : f.groups ? f.groups : f.slice(1);
            return {
                url: J(n.replace(new RegExp("^" + t.instance.root), "")),
                queryString: i,
                hashString: ar(t.to),
                route: e,
                data: y,
                params: a
            }
        }
        return !1
    }

    function jo() {
        return !!(typeof window < "u" && window.history && window.history.pushState)
    }

    function ze(t, e) {
        return typeof t[e] > "u" || t[e] === !0
    }

    function DE(t) {
        if (!t) return {};
        var e = t.split(","),
            r = {},
            n;
        return e.forEach(function(i) {
            var a = i.split(":").map(function(s) {
                return s.replace(/(^ +| +$)/g, "")
            });
            switch (a[0]) {
                case "historyAPIMethod":
                    r.historyAPIMethod = a[1];
                    break;
                case "resolveOptionsStrategy":
                    n || (n = {}), n.strategy = a[1];
                    break;
                case "resolveOptionsHash":
                    n || (n = {}), n.hash = a[1] === "true";
                    break;
                case "updateBrowserURL":
                case "callHandler":
                case "updateState":
                case "force":
                    r[a[0]] = a[1] === "true";
                    break
            }
        }), n && (r.resolveOptions = n), r
    }

    function ri() {
        return typeof window < "u"
    }

    function jE(t, e) {
        return t === void 0 && (t = []), e === void 0 && (e = {}), t.filter(function(r) {
            return r
        }).forEach(function(r) {
            ["before", "after", "already", "leave"].forEach(function(n) {
                r[n] && (e[n] || (e[n] = []), e[n].push(r[n]))
            })
        }), e
    }

    function Oe(t, e, r) {
        var n = e || {},
            i = 0;
        (function a() {
            if (!t[i]) {
                r && r(n);
                return
            }
            Array.isArray(t[i]) ? (t.splice.apply(t, [i, 1].concat(t[i][0](n) ? t[i][1] : t[i][2])), a()) : t[i](n, function(s) {
                typeof s > "u" || s === !0 ? (i += 1, a()) : r && r(n)
            })
        })()
    }
    Oe.if = function(t, e, r) {
        return Array.isArray(e) || (e = [e]), Array.isArray(r) || (r = [r]), [t, e, r]
    };

    function wa(t, e) {
        typeof t.currentLocationPath > "u" && (t.currentLocationPath = t.to = Co(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), e()
    }

    function Wr(t, e) {
        for (var r = 0; r < t.instance.routes.length; r++) {
            var n = t.instance.routes[r],
                i = Do(t, n);
            if (i && (t.matches || (t.matches = []), t.matches.push(i), t.resolveOptions.strategy === "ONE")) {
                e();
                return
            }
        }
        e()
    }

    function ME(t, e) {
        t.navigateOptions && (typeof t.navigateOptions.shouldResolve < "u" && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), typeof t.navigateOptions.silent < "u" && console.warn('"silent" is deprecated. Please check the documentation.')), e()
    }

    function BE(t, e) {
        t.navigateOptions.force === !0 ? (t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]), e(!1)) : e()
    }
    var Sa = ri(),
        UE = jo();

    function FE(t, e) {
        if (ze(t.navigateOptions, "updateBrowserURL")) {
            var r = ("/" + t.to).replace(/\/\//g, "/"),
                n = Sa && t.resolveOptions && t.resolveOptions.hash === !0;
            UE ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {}, t.navigateOptions.title || "", n ? "#" + r : r), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                if (!n) {
                    var i = location.hash;
                    location.hash = "", location.hash = i
                }
                t.instance.__freezeListening = !1
            }, 1))) : Sa && (window.location.href = t.to)
        }
        e()
    }

    function Mo(t, e) {
        var r = t.instance;
        if (!r.lastResolved()) {
            e();
            return
        }
        Oe(r.lastResolved().map(function(n) {
            return function(i, a) {
                if (!n.route.hooks || !n.route.hooks.leave) {
                    a();
                    return
                }
                var s = !1,
                    o = t.instance.matchLocation(n.route.path, t.currentLocationPath, !1);
                if (n.route.path !== "*") s = !o;
                else {
                    var c = t.matches ? t.matches.find(function(f) {
                        return n.route.path === f.route.path
                    }) : !1;
                    s = !c
                }
                if (ze(t.navigateOptions, "callHooks") && s) {
                    Oe(n.route.hooks.leave.map(function(f) {
                        return function(y, m) {
                            return f(function(w) {
                                w === !1 ? t.instance.__markAsClean(t) : m()
                            }, t.matches && t.matches.length > 0 ? t.matches.length === 1 ? t.matches[0] : t.matches : void 0)
                        }
                    }).concat([function() {
                        return a()
                    }]));
                    return
                } else a()
            }
        }), {}, function() {
            return e()
        })
    }

    function GE(t, e) {
        t.match.route.hooks && t.match.route.hooks.before && ze(t.navigateOptions, "callHooks") ? Oe(t.match.route.hooks.before.map(function(r) {
            return function(i, a) {
                return r(function(s) {
                    s === !1 ? t.instance.__markAsClean(t) : a()
                }, t.match)
            }
        }).concat([function() {
            return e()
        }])) : e()
    }

    function qE(t, e) {
        ze(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), e()
    }

    function HE(t, e) {
        t.match.route.hooks && t.match.route.hooks.after && ze(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(r) {
            return r(t.match)
        }), e()
    }

    function WE(t, e) {
        var r = t.instance.lastResolved();
        if (r && r[0] && r[0].route === t.match.route && r[0].url === t.match.url && r[0].queryString === t.match.queryString) {
            r.forEach(function(n) {
                n.route.hooks && n.route.hooks.already && ze(t.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(i) {
                    return i(t.match)
                })
            }), e(!1);
            return
        }
        e()
    }

    function YE(t, e) {
        var r = t.instance._notFoundRoute;
        if (r) {
            t.notFoundHandled = !0;
            var n = sr(t.currentLocationPath),
                i = n[0],
                a = n[1],
                s = ar(t.to);
            r.path = J(i);
            var o = {
                url: r.path,
                queryString: a,
                hashString: s,
                data: null,
                route: r,
                params: a !== "" ? ti(a) : null
            };
            t.matches = [o], t.match = o
        }
        e()
    }

    function zE(t, e) {
        (!t.resolveOptions || t.resolveOptions.noMatchWarning === !1 || typeof t.resolveOptions.noMatchWarning > "u") && console.warn('Navigo: "' + t.currentLocationPath + `" didn't match any of the registered routes.`), e()
    }

    function JE(t, e) {
        t.instance._setCurrent(null), e()
    }

    function Bo(t, e) {
        ze(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), e()
    }
    var Uo = [WE, GE, qE, HE],
        Oa = [Mo, YE, Oe.if(function(t) {
            var e = t.notFoundHandled;
            return e
        }, Uo.concat([Bo]), [zE, JE])];

    function vn() {
        return vn = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, vn.apply(this, arguments)
    }

    function ka(t, e) {
        var r = 0;

        function n() {
            if (r === t.matches.length) {
                Bo(t, e);
                return
            }
            Oe(Uo, vn({}, t, {
                match: t.matches[r]
            }), function() {
                r += 1, n()
            })
        }
        Mo(t, n)
    }

    function Yr(t) {
        t.instance.__markAsClean(t)
    }

    function mn() {
        return mn = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, mn.apply(this, arguments)
    }
    var Ra = "[data-navigo]";

    function VE(t, e) {
        var r = e || {
                strategy: "ONE",
                hash: !1,
                noMatchWarning: !1,
                linksSelector: Ra
            },
            n = this,
            i = "/",
            a = null,
            s = [],
            o = !1,
            c, f = jo(),
            y = ri();
        t ? i = J(t) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');

        function m(g) {
            return g.indexOf("#") >= 0 && (r.hash === !0 ? g = g.split("#")[1] || "/" : g = g.split("#")[0]), g
        }

        function w(g) {
            return J(i + "/" + J(g))
        }

        function O(g, S, T, D) {
            return g = ir(g) ? w(g) : g, {
                name: D || J(String(g)),
                path: g,
                handler: S,
                hooks: jE(T)
            }
        }

        function k(g, S, T) {
            var D = this;
            return typeof g == "object" && !(g instanceof RegExp) ? (Object.keys(g).forEach(function(j) {
                if (typeof g[j] == "function") D.on(j, g[j]);
                else {
                    var ge = g[j],
                        Me = ge.uses,
                        de = ge.as,
                        Be = ge.hooks;
                    s.push(O(j, Me, [c, Be], de))
                }
            }), this) : (typeof g == "function" && (T = S, S = g, g = i), s.push(O(g, S, [c, T])), this)
        }

        function U(g, S) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.resolve(g, S)
                });
                return
            } else n.__dirty = !0;
            g = g ? J(i) + "/" + J(g) : void 0;
            var T = {
                instance: n,
                to: g,
                currentLocationPath: g,
                navigateOptions: {},
                resolveOptions: mn({}, r, S)
            };
            return Oe([wa, Wr, Oe.if(function(D) {
                var j = D.matches;
                return j && j.length > 0
            }, ka, Oa)], T, Yr), T.matches ? T.matches : !1
        }

        function ee(g, S) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.navigate(g, S)
                });
                return
            } else n.__dirty = !0;
            g = J(i) + "/" + J(g);
            var T = {
                instance: n,
                to: g,
                navigateOptions: S || {},
                resolveOptions: S && S.resolveOptions ? S.resolveOptions : r,
                currentLocationPath: m(g)
            };
            Oe([ME, BE, Wr, Oe.if(function(D) {
                var j = D.matches;
                return j && j.length > 0
            }, ka, Oa), FE, Yr], T, Yr)
        }

        function N(g, S, T) {
            var D = Y(g, S);
            return D !== null ? (ee(D.replace(new RegExp("^/?" + i), ""), T), !0) : !1
        }

        function te(g) {
            return this.routes = s = s.filter(function(S) {
                return ir(g) ? J(S.path) !== J(g) : LE(g) ? g !== S.handler : String(S.path) !== String(g)
            }), this
        }

        function ie() {
            f && (this.__popstateListener = function() {
                n.__freezeListening || U()
            }, window.addEventListener("popstate", this.__popstateListener))
        }

        function ue() {
            this.routes = s = [], f && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = o = !0
        }

        function pe(g, S) {
            return n._notFoundRoute = O("*", g, [c, S], "__NOT_FOUND__"), this
        }

        function K() {
            if (!!y) return le().forEach(function(g) {
                if (g.getAttribute("data-navigo") === "false" || g.getAttribute("target") === "_blank") {
                    g.hasListenerAttached && g.removeEventListener("click", g.navigoHandler);
                    return
                }
                g.hasListenerAttached || (g.hasListenerAttached = !0, g.navigoHandler = function(S) {
                    if ((S.ctrlKey || S.metaKey) && S.target.tagName.toLowerCase() === "a") return !1;
                    var T = g.getAttribute("href");
                    if (typeof T > "u" || T === null) return !1;
                    if (T.match(/^(http|https)/) && typeof URL < "u") try {
                        var D = new URL(T);
                        T = D.pathname + D.search
                    } catch {}
                    var j = DE(g.getAttribute("data-navigo-options"));
                    o || (S.preventDefault(), S.stopPropagation(), n.navigate(J(T), j))
                }, g.addEventListener("click", g.navigoHandler))
            }), n
        }

        function le() {
            return y ? [].slice.call(document.querySelectorAll(r.linksSelector || Ra)) : []
        }

        function re(g) {
            return "/" + i + "/" + J(g)
        }

        function W(g) {
            return c = g, this
        }

        function me() {
            return a
        }

        function Y(g, S, T) {
            var D = s.find(function(Me) {
                    return Me.name === g
                }),
                j = null;
            if (D) {
                if (j = D.path, S)
                    for (var ge in S) j = j.replace(":" + ge, S[ge]);
                j = j.match(/^\//) ? j : "/" + j
            }
            return j && T && !T.includeRoot && (j = j.replace(new RegExp("^/" + i), "")), j
        }

        function fe(g) {
            return g.getAttribute("href")
        }

        function z(g) {
            var S = sr(J(g)),
                T = S[0],
                D = S[1],
                j = D === "" ? null : ti(D),
                ge = ar(g),
                Me = O(T, function() {}, [c], T);
            return {
                url: T,
                queryString: D,
                hashString: ge,
                route: Me,
                data: null,
                params: j
            }
        }

        function v() {
            return z(J(Co(i)).replace(new RegExp("^" + i), ""))
        }

        function E(g) {
            var S = {
                instance: n,
                currentLocationPath: g,
                to: g,
                navigateOptions: {},
                resolveOptions: r
            };
            return Wr(S, function() {}), S.matches ? S.matches : !1
        }

        function $(g, S, T) {
            typeof S < "u" && (typeof T > "u" || T) && (S = w(S));
            var D = {
                instance: n,
                to: S,
                currentLocationPath: S
            };
            wa(D, function() {}), typeof g == "string" && (g = typeof T > "u" || T ? w(g) : g);
            var j = Do(D, {
                name: String(g),
                path: g,
                handler: function() {},
                hooks: {}
            });
            return j || !1
        }

        function M(g, S, T) {
            return typeof S == "string" && (S = C(S)), S ? (S.hooks[g] || (S.hooks[g] = []), S.hooks[g].push(T), function() {
                S.hooks[g] = S.hooks[g].filter(function(D) {
                    return D !== T
                })
            }) : (console.warn("Route doesn't exists: " + S), function() {})
        }

        function C(g) {
            return typeof g == "string" ? s.find(function(S) {
                return S.name === w(g)
            }) : s.find(function(S) {
                return S.handler === g
            })
        }

        function A(g) {
            g.instance.__dirty = !1, g.instance.__waiting.length > 0 && g.instance.__waiting.shift()()
        }
        this.root = i, this.routes = s, this.destroyed = o, this.current = a, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = A, this.on = k, this.off = te, this.resolve = U, this.navigate = ee, this.navigateByName = N, this.destroy = ue, this.notFound = pe, this.updatePageLinks = K, this.link = re, this.hooks = W, this.extractGETParameters = function(g) {
            return sr(m(g))
        }, this.lastResolved = me, this.generate = Y, this.getLinkPath = fe, this.match = E, this.matchLocation = $, this.getCurrentLocation = v, this.addBeforeHook = M.bind(this, "before"), this.addAfterHook = M.bind(this, "after"), this.addAlreadyHook = M.bind(this, "already"), this.addLeaveHook = M.bind(this, "leave"), this.getRoute = C, this._pathToMatchObject = z, this._clean = J, this._checkForAHash = m, this._setCurrent = function(g) {
            return a = n.current = g
        }, ie.call(this), K.call(this)
    }

    function KE(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                e += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
    }

    function XE() {
        return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
        padding-bottom: 15px;
    }

    details {
        width: 200px;
    }
    
    a {
        display: block;
        padding-left: 20px;
        color: #d4d8ff;
    }
    `
    }

    function zr(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = XE(), document.getElementsByTagName("html")[0].append(e);
        const n = document.getElementById("app");
        n.innerHTML = KE(t)
    }

    function QE() {
        const t = window.tv.manifest;
        let e = "<div>";
        e += `   <h1>Current Manifest : ${t.environment}</h1>`;
        const r = new Date(t.loader.lastUpdated);
        return e += "   <h2>Loader</h2>", e += `   <p>last deployed: <strong>${r.toLocaleDateString()} ${r.toLocaleTimeString()}</strong></p>`, e += `   <p>branch: <strong>${t.loader.branch}</strong></p>`, e += `   <p>version: <strong>${t.loader.version}</strong></p>`, e += `   <p>type: <strong>${t.loader.type}</strong></p>`, e += "   <h2>Branches</h2>", Object.keys(t.branches).sort().forEach(n => {
            const i = t.branches[n],
                a = new Date(i.lastUpdated);
            e += "    <details>", e += "        <summary>", e += `            <span class="name">${n}</span>`, e += `            <span class="version">${i.version}</span>`, e += `            <span class="date">${a.toLocaleDateString()} ${a.toLocaleTimeString()}</span>`, e += `            <span class="type">${i.type}</span>`, e += `            <span class="type">${Object.keys(i.bundles).length} Apps</span>`, e += "        </summary>", Object.keys(i.bundles).forEach(s => {
                const o = i.bundles[s];
                o.version ? e += `        <p><span class="name">${s}</span> <span class="version">${o.version}</span></p>` : e += `        <p><span class="name">${s}</span> <span class="version">${i.version}</span></p>`
            }), e += "    </details>"
        }), e += "</div>", e
    }

    function ZE() {
        return `
    html {
        padding: 30px;
        background: #4254f4;
        color: #fff;
    }

    body {
        background: #4254f4;
    }

    body .loader-status {
        display: none;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        padding-top: 30px;
    }

    details {
        padding: 3px 0;
        border-bottom: 1px solid #a4adfa;
    }

    details span {
        font-size: 14px;
        display: inline-block;
    }

    span.name {
        width: 175px;
    }

    span.version {
        width: 225px;
    }

    span.date {
        width: 225px;
        font-style: italic;
    }

    span.type {
        color: #4254F4;
        font-size: 11px;
        padding: 2px 10px 0px;
        background: #fff;
        border-radius: 10px;
    }
    
    details p {
        padding: 3px 0;
        padding-left: 30px;
        font-size: 14px;
    }

    details p:nth-child(odd) {
        background: rgba(255, 255, 255, 0.1);
    }
    `
    }

    function ew() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = ZE(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = QE()
    }
    const pt = new VE("/");

    function Xe(t, e) {
        const r = e != null && e.queryString ? `?${e.queryString}` : "";
        pt.navigate(`${t}${r}`, {
            historyAPIMethod: "replaceState"
        })
    }
    pt.hooks({
        before(t) {
            var r;
            const e = (r = pt.lastResolved()) == null ? void 0 : r[0];
            (!e || e.route.name === "__NOT_FOUND__") && t()
        }
    });
    pt.on({
        "/": t => {
            window.tv.load({
                app: "@connect",
                match: t,
                autoMount: !0
            })
        },
        "/moderator": t => {
            window.tv.load({
                app: "@moderator",
                match: t,
                autoMount: !0
            })
        },
        "/moderate": t => {
            Xe("/moderator", t)
        },
        "/moderation": t => {
            Xe("/moderator", t)
        },
        "/moderador": t => {
            Xe("/moderator", t)
        },
        "/moderateur": t => {
            Xe("/moderator", t)
        },
        "/moderatore": t => {
            Xe("/moderator", t)
        },
        "/([A-Za-z]{4})": t => {
            const e = t;
            e.params || (e.params = {}), e.params.code || (e.params.code = e.url), window.tv.load({
                app: "@connect",
                match: e,
                autoMount: !0
            })
        },
        "/manifest": t => {
            ew()
        },
        "/debug": t => {
            zr()
        },
        "/debug/:app": t => {
            zr(t.data.app)
        },
        "/debug/local/:app": t => {
            zr(t.data.app)
        },
        "/debug/local/:app/:file/:marker": t => {
            window.tv.debugLoad("local", t)
        },
        "/debug/local/:app/:file": t => {
            window.tv.debugLoad("local", t)
        },
        "/debug/cloud/:app/:file/:marker": t => {
            window.tv.debugLoad("cloud", t)
        },
        "/debug/cloud/:app/:file": t => {
            window.tv.debugLoad("cloud", t)
        }
    });
    pt.notFound(t => {
        Xe("/", t)
    });
    const tw = () => {
            pt.resolve()
        },
        rw = "production",
        nw = 1,
        iw = {
            branch: "main",
            sha: "546b846b5fc03266eb2e736c0e3da82bf4fc5577",
            lastUpdated: 1668803053158,
            version: "5.63.0",
            type: "production"
        },
        aw = {
            main: {
                sha: "546b846b5fc03266eb2e736c0e3da82bf4fc5577",
                lastUpdated: 1668803053158,
                version: "5.63.0",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.61.0"
                    },
                    "the-wheel": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp8/the-wheel",
                        version: "5.12.0"
                    },
                    "drawful-animate": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp8/drawful-animate",
                        version: "5.28.0"
                    },
                    "@moderator": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@moderator",
                        version: "5.55.0"
                    },
                    "awshirt-tjsp": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/tjsp/awshirt",
                        version: "5.20.0"
                    },
                    "ecast-test-client": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/internal/ecast-test-client",
                        version: "5.0.0"
                    },
                    drawful: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp1/drawful",
                        version: "5.0.0"
                    },
                    fibbage: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp1/fibbage",
                        version: "5.0.0"
                    },
                    lieswatter: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp1/lieswatter",
                        version: "5.0.0"
                    },
                    wordspud: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp1/wordspud",
                        version: "5.0.0"
                    },
                    ydkj2015: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp1/ydkj2015",
                        version: "5.0.0"
                    },
                    auction: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp2/auction",
                        version: "5.11.0"
                    },
                    bombintern: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp2/bombintern",
                        version: "5.10.0"
                    },
                    earwax: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp2/earwax",
                        version: "5.23.0"
                    },
                    fibbage2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp2/fibbage2",
                        version: "5.3.0"
                    },
                    quiplash: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp2/quiplash",
                        version: "5.10.0"
                    },
                    awshirt: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp3/awshirt",
                        version: "5.10.0"
                    },
                    fakinit: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp3/fakinit",
                        version: "5.3.0"
                    },
                    pollposition: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp3/pollposition",
                        version: "5.3.0"
                    },
                    quiplash2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp3/quiplash2",
                        version: "5.10.0"
                    },
                    triviadeath: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp3/triviadeath",
                        version: "5.10.0"
                    },
                    bracketeering: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp4/bracketeering",
                        version: "5.3.0"
                    },
                    fibbage3: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp4/fibbage3",
                        version: "5.3.0"
                    },
                    monstermingle: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp4/monstermingle",
                        version: "5.3.0"
                    },
                    overdrawn: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp4/overdrawn",
                        version: "5.3.0"
                    },
                    survivetheinternet: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp4/survivetheinternet",
                        version: "5.3.0"
                    },
                    patentlystupid: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp5/patentlystupid",
                        version: "5.3.0"
                    },
                    rapbattle: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp5/rapbattle",
                        version: "5.3.0"
                    },
                    slingshoot: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp5/slingshoot",
                        version: "5.3.0"
                    },
                    splittheroom: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp5/splittheroom",
                        version: "5.3.0"
                    },
                    ydkj2018: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp5/ydkj2018",
                        version: "5.3.0"
                    },
                    jokeboat: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp6/jokeboat",
                        version: "5.3.0"
                    },
                    pushthebutton: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp6/pushthebutton",
                        version: "5.0.0"
                    },
                    ridictionary: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp6/ridictionary",
                        version: "5.3.0"
                    },
                    rolemodels: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp6/rolemodels",
                        version: "5.25.0"
                    },
                    triviadeath2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp6/triviadeath2",
                        version: "5.3.0"
                    },
                    "blanky-blank": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp7/blanky-blank",
                        version: "5.3.0"
                    },
                    everyday: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp7/everyday",
                        version: "5.3.0"
                    },
                    "jackbox-talks": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp7/jackboxtalks",
                        version: "5.25.0"
                    },
                    quiplash3: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp7/quiplash3",
                        version: "5.18.0"
                    },
                    worldchamps: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp7/worldchampions",
                        version: "5.3.0"
                    },
                    "acquisitions-inc": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/standalone/acquisitions-inc",
                        version: "5.3.0"
                    },
                    drawful2international: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/standalone/drawful2-international",
                        version: "5.3.0"
                    },
                    drawful2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/standalone/drawful2",
                        version: "5.10.0"
                    },
                    "guesspionage-crowdplay": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/standalone/guesspionage-crowdplay",
                        version: "5.0.0"
                    },
                    "quiplash2-international": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/standalone/quiplash2-international",
                        version: "5.3.0"
                    },
                    "survey-bomb": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp8/survey-bomb",
                        version: "5.0.0"
                    },
                    "triviadeath2-tjsp": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/tjsp/triviadeath2",
                        version: "5.30.0"
                    },
                    "murder-detectives": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp8/murder-detectives",
                        version: "5.0.0"
                    },
                    "quiplash3-tjsp": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/tjsp/quiplash3",
                        version: "5.0.0"
                    },
                    "apply-yourself": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp8/apply-yourself",
                        version: "5.0.0"
                    },
                    "antique-freak": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/antique-freak",
                        version: "5.55.0"
                    },
                    fourbage: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/fourbage",
                        version: "5.63.0"
                    },
                    htmf: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/htmf",
                        version: "5.62.0"
                    },
                    lineup: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/lineup",
                        version: "5.59.0"
                    },
                    "range-game": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/range-game",
                        version: "5.58.0"
                    },
                    prototype: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/internal/prototype",
                        version: "5.57.0"
                    }
                }
            }
        },
        sw = {
            environment: rw,
            version: nw,
            loader: iw,
            branches: aw
        },
        or = sw,
        kt = ba ? new ba(or) : new Lo(or);
    window.tv = {
        debugLoad: kt.debugLoad,
        load: kt.load,
        register: kt.register,
        mount: kt.mount,
        connect: kt.connect,
        manifest: or
    };
    kE(or);
    Ta.setup();
    Kt.setup();
    tw()
});
export default ow();
//# sourceMappingURL=7319884c.js.map