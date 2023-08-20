var Oa = Object.defineProperty;
var ka = (t, e, r) => e in t ? Oa(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var Ta = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var Se = (t, e, r) => (ka(t, typeof e != "symbol" ? e + "" : e, r), r);
var mm = Ta((Sm, _a) => {
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
        new MutationObserver(i => {
            for (const o of i)
                if (o.type === "childList")
                    for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function r(i) {
            const o = {};
            return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
        }

        function n(i) {
            if (i.ep) return;
            i.ep = !0;
            const o = r(i);
            fetch(i.href, o)
        }
    })();
    var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Aa(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var Fe = {
            DEBUG: !1,
            LIB_VERSION: "2.45.0"
        },
        le;
    if (typeof window > "u") {
        var _i = {
            hostname: ""
        };
        le = {
            navigator: {
                userAgent: ""
            },
            document: {
                location: _i,
                referrer: ""
            },
            screen: {
                width: 0,
                height: 0
            },
            location: _i
        }
    } else le = window;
    var Pr = Array.prototype,
        Ra = Function.prototype,
        No = Object.prototype,
        Be = Pr.slice,
        Zt = No.toString,
        Dr = No.hasOwnProperty,
        ne = le.console,
        Pe = le.navigator,
        K = le.document,
        Mt = le.opera,
        _r = le.screen,
        Te = Pe.userAgent,
        Qr = Ra.bind,
        gi = Pr.forEach,
        yi = Pr.indexOf,
        vi = Pr.map,
        xa = Array.isArray,
        _n = {},
        c = {
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        W = {
            log: function() {
                if (Fe.DEBUG && !c.isUndefined(ne) && ne) try {
                    ne.log.apply(ne, arguments)
                } catch {
                    c.each(arguments, function(e) {
                        ne.log(e)
                    })
                }
            },
            warn: function() {
                if (Fe.DEBUG && !c.isUndefined(ne) && ne) {
                    var t = ["Mixpanel warning:"].concat(c.toArray(arguments));
                    try {
                        ne.warn.apply(ne, t)
                    } catch {
                        c.each(t, function(r) {
                            ne.warn(r)
                        })
                    }
                }
            },
            error: function() {
                if (Fe.DEBUG && !c.isUndefined(ne) && ne) {
                    var t = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        ne.error.apply(ne, t)
                    } catch {
                        c.each(t, function(r) {
                            ne.error(r)
                        })
                    }
                }
            },
            critical: function() {
                if (!c.isUndefined(ne) && ne) {
                    var t = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        ne.error.apply(ne, t)
                    } catch {
                        c.each(t, function(r) {
                            ne.error(r)
                        })
                    }
                }
            }
        },
        Zr = function(t, e) {
            return function() {
                return arguments[0] = "[" + e + "] " + arguments[0], t.apply(W, arguments)
            }
        },
        In = function(t) {
            return {
                log: Zr(W.log, t),
                error: Zr(W.error, t),
                critical: Zr(W.critical, t)
            }
        };
    c.bind = function(t, e) {
        var r, n;
        if (Qr && t.bind === Qr) return Qr.apply(t, Be.call(arguments, 1));
        if (!c.isFunction(t)) throw new TypeError;
        return r = Be.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, r.concat(Be.call(arguments)));
            var i = {};
            i.prototype = t.prototype;
            var o = new i;
            i.prototype = null;
            var s = t.apply(o, r.concat(Be.call(arguments)));
            return Object(s) === s ? s : o
        }, n
    };
    c.each = function(t, e, r) {
        if (t != null) {
            if (gi && t.forEach === gi) t.forEach(e, r);
            else if (t.length === +t.length) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (n in t && e.call(r, t[n], n, t) === _n) return
            } else
                for (var o in t)
                    if (Dr.call(t, o) && e.call(r, t[o], o, t) === _n) return
        }
    };
    c.extend = function(t) {
        return c.each(Be.call(arguments, 1), function(e) {
            for (var r in e) e[r] !== void 0 && (t[r] = e[r])
        }), t
    };
    c.isArray = xa || function(t) {
        return Zt.call(t) === "[object Array]"
    };
    c.isFunction = function(t) {
        try {
            return /^\s*\bfunction\b/.test(t)
        } catch {
            return !1
        }
    };
    c.isArguments = function(t) {
        return !!(t && Dr.call(t, "callee"))
    };
    c.toArray = function(t) {
        return t ? t.toArray ? t.toArray() : c.isArray(t) || c.isArguments(t) ? Be.call(t) : c.values(t) : []
    };
    c.map = function(t, e, r) {
        if (vi && t.map === vi) return t.map(e, r);
        var n = [];
        return c.each(t, function(i) {
            n.push(e.call(r, i))
        }), n
    };
    c.keys = function(t) {
        var e = [];
        return t === null || c.each(t, function(r, n) {
            e[e.length] = n
        }), e
    };
    c.values = function(t) {
        var e = [];
        return t === null || c.each(t, function(r) {
            e[e.length] = r
        }), e
    };
    c.include = function(t, e) {
        var r = !1;
        return t === null ? r : yi && t.indexOf === yi ? t.indexOf(e) != -1 : (c.each(t, function(n) {
            if (r || (r = n === e)) return _n
        }), r)
    };
    c.includes = function(t, e) {
        return t.indexOf(e) !== -1
    };
    c.inherit = function(t, e) {
        return t.prototype = new e, t.prototype.constructor = t, t.superclass = e.prototype, t
    };
    c.isObject = function(t) {
        return t === Object(t) && !c.isArray(t)
    };
    c.isEmptyObject = function(t) {
        if (c.isObject(t)) {
            for (var e in t)
                if (Dr.call(t, e)) return !1;
            return !0
        }
        return !1
    };
    c.isUndefined = function(t) {
        return t === void 0
    };
    c.isString = function(t) {
        return Zt.call(t) == "[object String]"
    };
    c.isDate = function(t) {
        return Zt.call(t) == "[object Date]"
    };
    c.isNumber = function(t) {
        return Zt.call(t) == "[object Number]"
    };
    c.isElement = function(t) {
        return !!(t && t.nodeType === 1)
    };
    c.encodeDates = function(t) {
        return c.each(t, function(e, r) {
            c.isDate(e) ? t[r] = c.formatDate(e) : c.isObject(e) && (t[r] = c.encodeDates(e))
        }), t
    };
    c.timestamp = function() {
        return Date.now = Date.now || function() {
            return +new Date
        }, Date.now()
    };
    c.formatDate = function(t) {
        function e(r) {
            return r < 10 ? "0" + r : r
        }
        return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds())
    };
    c.strip_empty_properties = function(t) {
        var e = {};
        return c.each(t, function(r, n) {
            c.isString(r) && r.length > 0 && (e[n] = r)
        }), e
    };
    c.truncate = function(t, e) {
        var r;
        return typeof t == "string" ? r = t.slice(0, e) : c.isArray(t) ? (r = [], c.each(t, function(n) {
            r.push(c.truncate(n, e))
        })) : c.isObject(t) ? (r = {}, c.each(t, function(n, i) {
            r[i] = c.truncate(n, e)
        })) : r = t, r
    };
    c.JSONEncode = function() {
        return function(t) {
            var e = t,
                r = function(i) {
                    var o = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        s = {
                            "\b": "\\b",
                            "	": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    return o.lastIndex = 0, o.test(i) ? '"' + i.replace(o, function(a) {
                        var u = s[a];
                        return typeof u == "string" ? u : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + i + '"'
                },
                n = function(i, o) {
                    var s = "",
                        a = "    ",
                        u = 0,
                        f = "",
                        h = "",
                        g = 0,
                        v = s,
                        b = [],
                        w = o[i];
                    switch (w && typeof w == "object" && typeof w.toJSON == "function" && (w = w.toJSON(i)), typeof w) {
                        case "string":
                            return r(w);
                        case "number":
                            return isFinite(w) ? String(w) : "null";
                        case "boolean":
                        case "null":
                            return String(w);
                        case "object":
                            if (!w) return "null";
                            if (s += a, b = [], Zt.apply(w) === "[object Array]") {
                                for (g = w.length, u = 0; u < g; u += 1) b[u] = n(u, w) || "null";
                                return h = b.length === 0 ? "[]" : s ? `[
` + s + b.join(`,
` + s) + `
` + v + "]" : "[" + b.join(",") + "]", s = v, h
                            }
                            for (f in w) Dr.call(w, f) && (h = n(f, w), h && b.push(r(f) + (s ? ": " : ":") + h));
                            return h = b.length === 0 ? "{}" : s ? "{" + b.join(",") + v + "}" : "{" + b.join(",") + "}", s = v, h
                    }
                };
            return n("", {
                "": e
            })
        }
    }();
    c.JSONDecode = function() {
        var t, e, r = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: `
`,
                r: "\r",
                t: "	"
            },
            n, i = function(b) {
                var w = new SyntaxError(b);
                throw w.at = t, w.text = n, w
            },
            o = function(b) {
                return b && b !== e && i("Expected '" + b + "' instead of '" + e + "'"), e = n.charAt(t), t += 1, e
            },
            s = function() {
                var b, w = "";
                for (e === "-" && (w = "-", o("-")); e >= "0" && e <= "9";) w += e, o();
                if (e === ".")
                    for (w += "."; o() && e >= "0" && e <= "9";) w += e;
                if (e === "e" || e === "E")
                    for (w += e, o(), (e === "-" || e === "+") && (w += e, o()); e >= "0" && e <= "9";) w += e, o();
                if (b = +w, !isFinite(b)) i("Bad number");
                else return b
            },
            a = function() {
                var b, w, I = "",
                    L;
                if (e === '"')
                    for (; o();) {
                        if (e === '"') return o(), I;
                        if (e === "\\")
                            if (o(), e === "u") {
                                for (L = 0, w = 0; w < 4 && (b = parseInt(o(), 16), !!isFinite(b)); w += 1) L = L * 16 + b;
                                I += String.fromCharCode(L)
                            } else if (typeof r[e] == "string") I += r[e];
                        else break;
                        else I += e
                    }
                i("Bad string")
            },
            u = function() {
                for (; e && e <= " ";) o()
            },
            f = function() {
                switch (e) {
                    case "t":
                        return o("t"), o("r"), o("u"), o("e"), !0;
                    case "f":
                        return o("f"), o("a"), o("l"), o("s"), o("e"), !1;
                    case "n":
                        return o("n"), o("u"), o("l"), o("l"), null
                }
                i('Unexpected "' + e + '"')
            },
            h, g = function() {
                var b = [];
                if (e === "[") {
                    if (o("["), u(), e === "]") return o("]"), b;
                    for (; e;) {
                        if (b.push(h()), u(), e === "]") return o("]"), b;
                        o(","), u()
                    }
                }
                i("Bad array")
            },
            v = function() {
                var b, w = {};
                if (e === "{") {
                    if (o("{"), u(), e === "}") return o("}"), w;
                    for (; e;) {
                        if (b = a(), u(), o(":"), Object.hasOwnProperty.call(w, b) && i('Duplicate key "' + b + '"'), w[b] = h(), u(), e === "}") return o("}"), w;
                        o(","), u()
                    }
                }
                i("Bad object")
            };
        return h = function() {
                switch (u(), e) {
                    case "{":
                        return v();
                    case "[":
                        return g();
                    case '"':
                        return a();
                    case "-":
                        return s();
                    default:
                        return e >= "0" && e <= "9" ? s() : f()
                }
            },
            function(b) {
                var w;
                return n = b, t = 0, e = " ", w = h(), u(), e && i("Syntax error"), w
            }
    }();
    c.base64Encode = function(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r, n, i, o, s, a, u, f, h = 0,
            g = 0,
            v = "",
            b = [];
        if (!t) return t;
        t = c.utf8Encode(t);
        do r = t.charCodeAt(h++), n = t.charCodeAt(h++), i = t.charCodeAt(h++), f = r << 16 | n << 8 | i, o = f >> 18 & 63, s = f >> 12 & 63, a = f >> 6 & 63, u = f & 63, b[g++] = e.charAt(o) + e.charAt(s) + e.charAt(a) + e.charAt(u); while (h < t.length);
        switch (v = b.join(""), t.length % 3) {
            case 1:
                v = v.slice(0, -2) + "==";
                break;
            case 2:
                v = v.slice(0, -1) + "=";
                break
        }
        return v
    };
    c.utf8Encode = function(t) {
        t = (t + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        var e = "",
            r, n, i = 0,
            o;
        for (r = n = 0, i = t.length, o = 0; o < i; o++) {
            var s = t.charCodeAt(o),
                a = null;
            s < 128 ? n++ : s > 127 && s < 2048 ? a = String.fromCharCode(s >> 6 | 192, s & 63 | 128) : a = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128), a !== null && (n > r && (e += t.substring(r, n)), e += a, r = n = o + 1)
        }
        return n > r && (e += t.substring(r, t.length)), e
    };
    c.UUID = function() {
        var t = function() {
                for (var n = 1 * new Date, i = 0; n == 1 * new Date;) i++;
                return n.toString(16) + i.toString(16)
            },
            e = function() {
                return Math.random().toString(16).replace(".", "")
            },
            r = function() {
                var n = Te,
                    i, o, s = [],
                    a = 0;

                function u(f, h) {
                    var g, v = 0;
                    for (g = 0; g < h.length; g++) v |= s[g] << g * 8;
                    return f ^ v
                }
                for (i = 0; i < n.length; i++) o = n.charCodeAt(i), s.unshift(o & 255), s.length >= 4 && (a = u(a, s), s = []);
                return s.length > 0 && (a = u(a, s)), a.toString(16)
            };
        return function() {
            var n = (_r.height * _r.width).toString(16);
            return t() + "-" + e() + "-" + r() + "-" + n + "-" + t()
        }
    }();
    var mi = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
    c.isBlockedUA = function(t) {
        var e;
        for (t = t.toLowerCase(), e = 0; e < mi.length; e++)
            if (t.indexOf(mi[e]) !== -1) return !0;
        return !1
    };
    c.HTTPBuildQuery = function(t, e) {
        var r, n, i = [];
        return c.isUndefined(e) && (e = "&"), c.each(t, function(o, s) {
            r = encodeURIComponent(o.toString()), n = encodeURIComponent(s), i[i.length] = n + "=" + r
        }), i.join(e)
    };
    c.getQueryParam = function(t, e) {
        e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var r = "[\\?&]" + e + "=([^&#]*)",
            n = new RegExp(r),
            i = n.exec(t);
        if (i === null || i && typeof i[1] != "string" && i[1].length) return "";
        var o = i[1];
        try {
            o = decodeURIComponent(o)
        } catch {
            W.error("Skipping decoding for malformed query param: " + o)
        }
        return o.replace(/\+/g, " ")
    };
    c.cookie = {
        get: function(t) {
            for (var e = t + "=", r = K.cookie.split(";"), n = 0; n < r.length; n++) {
                for (var i = r[n]; i.charAt(0) == " ";) i = i.substring(1, i.length);
                if (i.indexOf(e) === 0) return decodeURIComponent(i.substring(e.length, i.length))
            }
            return null
        },
        parse: function(t) {
            var e;
            try {
                e = c.JSONDecode(c.cookie.get(t)) || {}
            } catch {}
            return e
        },
        set_seconds: function(t, e, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var h = bi(K.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var g = new Date;
                g.setTime(g.getTime() + r * 1e3), u = "; expires=" + g.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure"), K.cookie = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f
        },
        set: function(t, e, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var h = bi(K.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var g = new Date;
                g.setTime(g.getTime() + r * 24 * 60 * 60 * 1e3), u = "; expires=" + g.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure");
            var v = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f;
            return K.cookie = v, v
        },
        remove: function(t, e, r) {
            c.cookie.set(t, "", -1, e, !1, !1, r)
        }
    };
    var en = null,
        gr = function(t, e) {
            if (en !== null && !e) return en;
            var r = !0;
            try {
                t = t || window.localStorage;
                var n = "__mplss_" + Ln(8),
                    i = "xyz";
                t.setItem(n, i), t.getItem(n) !== i && (r = !1), t.removeItem(n)
            } catch {
                r = !1
            }
            return en = r, r
        };
    c.localStorage = {
        is_supported: function(t) {
            var e = gr(null, t);
            return e || W.error("localStorage unsupported; falling back to cookie store"), e
        },
        error: function(t) {
            W.error("localStorage error: " + t)
        },
        get: function(t) {
            try {
                return window.localStorage.getItem(t)
            } catch (e) {
                c.localStorage.error(e)
            }
            return null
        },
        parse: function(t) {
            try {
                return c.JSONDecode(c.localStorage.get(t)) || {}
            } catch {}
            return null
        },
        set: function(t, e) {
            try {
                window.localStorage.setItem(t, e)
            } catch (r) {
                c.localStorage.error(r)
            }
        },
        remove: function(t) {
            try {
                window.localStorage.removeItem(t)
            } catch (e) {
                c.localStorage.error(e)
            }
        }
    };
    c.register_event = function() {
        var t = function(n, i, o, s, a) {
            if (!n) {
                W.error("No valid element provided to register_event");
                return
            }
            if (n.addEventListener && !s) n.addEventListener(i, o, !!a);
            else {
                var u = "on" + i,
                    f = n[u];
                n[u] = e(n, o, f)
            }
        };

        function e(n, i, o) {
            var s = function(a) {
                if (a = a || r(window.event), !!a) {
                    var u = !0,
                        f, h;
                    return c.isFunction(o) && (f = o(a)), h = i.call(n, a), (f === !1 || h === !1) && (u = !1), u
                }
            };
            return s
        }

        function r(n) {
            return n && (n.preventDefault = r.preventDefault, n.stopPropagation = r.stopPropagation), n
        }
        return r.preventDefault = function() {
            this.returnValue = !1
        }, r.stopPropagation = function() {
            this.cancelBubble = !0
        }, t
    }();
    var Na = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
    c.dom_query = function() {
        function t(i) {
            return i.all ? i.all : i.getElementsByTagName("*")
        }
        var e = /[\t\r\n]/g;

        function r(i, o) {
            var s = " " + o + " ";
            return (" " + i.className + " ").replace(e, " ").indexOf(s) >= 0
        }

        function n(i) {
            if (!K.getElementsByTagName) return [];
            var o = i.split(" "),
                s, a, u, f, h, g, v, b, w, I, L = [K];
            for (g = 0; g < o.length; g++) {
                if (s = o[g].replace(/^\s+/, "").replace(/\s+$/, ""), s.indexOf("#") > -1) {
                    a = s.split("#"), u = a[0];
                    var J = a[1],
                        q = K.getElementById(J);
                    if (!q || u && q.nodeName.toLowerCase() != u) return [];
                    L = [q];
                    continue
                }
                if (s.indexOf(".") > -1) {
                    a = s.split("."), u = a[0];
                    var se = a[1];
                    for (u || (u = "*"), f = [], h = 0, v = 0; v < L.length; v++)
                        for (u == "*" ? w = t(L[v]) : w = L[v].getElementsByTagName(u), b = 0; b < w.length; b++) f[h++] = w[b];
                    for (L = [], I = 0, v = 0; v < f.length; v++) f[v].className && c.isString(f[v].className) && r(f[v], se) && (L[I++] = f[v]);
                    continue
                }
                var ye = s.match(Na);
                if (ye) {
                    u = ye[1];
                    var ae = ye[2],
                        ce = ye[3],
                        he = ye[4];
                    for (u || (u = "*"), f = [], h = 0, v = 0; v < L.length; v++)
                        for (u == "*" ? w = t(L[v]) : w = L[v].getElementsByTagName(u), b = 0; b < w.length; b++) f[h++] = w[b];
                    L = [], I = 0;
                    var te;
                    switch (ce) {
                        case "=":
                            te = function(G) {
                                return G.getAttribute(ae) == he
                            };
                            break;
                        case "~":
                            te = function(G) {
                                return G.getAttribute(ae).match(new RegExp("\\b" + he + "\\b"))
                            };
                            break;
                        case "|":
                            te = function(G) {
                                return G.getAttribute(ae).match(new RegExp("^" + he + "-?"))
                            };
                            break;
                        case "^":
                            te = function(G) {
                                return G.getAttribute(ae).indexOf(he) === 0
                            };
                            break;
                        case "$":
                            te = function(G) {
                                return G.getAttribute(ae).lastIndexOf(he) == G.getAttribute(ae).length - he.length
                            };
                            break;
                        case "*":
                            te = function(G) {
                                return G.getAttribute(ae).indexOf(he) > -1
                            };
                            break;
                        default:
                            te = function(G) {
                                return G.getAttribute(ae)
                            }
                    }
                    for (L = [], I = 0, v = 0; v < f.length; v++) te(f[v]) && (L[I++] = f[v]);
                    continue
                }
                for (u = s, f = [], h = 0, v = 0; v < L.length; v++)
                    for (w = L[v].getElementsByTagName(u), b = 0; b < w.length; b++) f[h++] = w[b];
                L = f
            }
            return L
        }
        return function(i) {
            return c.isElement(i) ? [i] : c.isObject(i) && !c.isUndefined(i.length) ? i : n.call(this, i)
        }
    }();
    c.info = {
        campaignParams: function() {
            var t = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                e = "",
                r = {};
            return c.each(t, function(n) {
                e = c.getQueryParam(K.URL, n), e.length && (r[n] = e)
            }), r
        },
        searchEngine: function(t) {
            return t.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : t.search("https?://(.*)bing.com") === 0 ? "bing" : t.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : t.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null
        },
        searchInfo: function(t) {
            var e = c.info.searchEngine(t),
                r = e != "yahoo" ? "q" : "p",
                n = {};
            if (e !== null) {
                n.$search_engine = e;
                var i = c.getQueryParam(t, r);
                i.length && (n.mp_keyword = i)
            }
            return n
        },
        browser: function(t, e, r) {
            return e = e || "", r || c.includes(t, " OPR/") ? c.includes(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : c.includes(t, "IEMobile") || c.includes(t, "WPDesktop") ? "Internet Explorer Mobile" : c.includes(t, "SamsungBrowser/") ? "Samsung Internet" : c.includes(t, "Edge") || c.includes(t, "Edg/") ? "Microsoft Edge" : c.includes(t, "FBIOS") ? "Facebook Mobile" : c.includes(t, "Chrome") ? "Chrome" : c.includes(t, "CriOS") ? "Chrome iOS" : c.includes(t, "UCWEB") || c.includes(t, "UCBrowser") ? "UC Browser" : c.includes(t, "FxiOS") ? "Firefox iOS" : c.includes(e, "Apple") ? c.includes(t, "Mobile") ? "Mobile Safari" : "Safari" : c.includes(t, "Android") ? "Android Mobile" : c.includes(t, "Konqueror") ? "Konqueror" : c.includes(t, "Firefox") ? "Firefox" : c.includes(t, "MSIE") || c.includes(t, "Trident/") ? "Internet Explorer" : c.includes(t, "Gecko") ? "Mozilla" : ""
        },
        browserVersion: function(t, e, r) {
            var n = c.info.browser(t, e, r),
                i = {
                    "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                    "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                    Chrome: /Chrome\/(\d+(\.\d+)?)/,
                    "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                    "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                    Safari: /Version\/(\d+(\.\d+)?)/,
                    "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                    Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                    Firefox: /Firefox\/(\d+(\.\d+)?)/,
                    "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                    Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                    BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                    "Android Mobile": /android\s(\d+(\.\d+)?)/,
                    "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                    "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                    Mozilla: /rv:(\d+(\.\d+)?)/
                },
                o = i[n];
            if (o === void 0) return null;
            var s = t.match(o);
            return s ? parseFloat(s[s.length - 2]) : null
        },
        os: function() {
            var t = Te;
            return /Windows/i.test(t) ? /Phone/.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Mac/i.test(t) ? "Mac OS X" : /Linux/.test(t) ? "Linux" : /CrOS/.test(t) ? "Chrome OS" : ""
        },
        device: function(t) {
            return /Windows Phone/i.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : /iPad/.test(t) ? "iPad" : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Android/.test(t) ? "Android" : ""
        },
        referringDomain: function(t) {
            var e = t.split("/");
            return e.length >= 3 ? e[2] : ""
        },
        properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(Te, Pe.vendor, Mt),
                $referrer: K.referrer,
                $referring_domain: c.info.referringDomain(K.referrer),
                $device: c.info.device(Te)
            }), {
                $current_url: le.location.href,
                $browser_version: c.info.browserVersion(Te, Pe.vendor, Mt),
                $screen_height: _r.height,
                $screen_width: _r.width,
                mp_lib: "web",
                $lib_version: Fe.LIB_VERSION,
                $insert_id: Ln(),
                time: c.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(Te, Pe.vendor, Mt)
            }), {
                $browser_version: c.info.browserVersion(Te, Pe.vendor, Mt)
            })
        },
        pageviewInfo: function(t) {
            return c.strip_empty_properties({
                mp_page: t,
                mp_referrer: K.referrer,
                mp_browser: c.info.browser(Te, Pe.vendor, Mt),
                mp_platform: c.info.os()
            })
        }
    };
    var Ln = function(t) {
            var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return t ? e.substring(0, t) : e
        },
        Ia = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        La = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        bi = function(t) {
            var e = La,
                r = t.split("."),
                n = r[r.length - 1];
            (n.length > 4 || n === "com" || n === "org") && (e = Ia);
            var i = t.match(e);
            return i ? i[0] : ""
        },
        yr = null,
        vr = null;
    typeof JSON < "u" && (yr = JSON.stringify, vr = JSON.parse);
    yr = yr || c.JSONEncode;
    vr = vr || c.JSONDecode;
    c.toArray = c.toArray;
    c.isObject = c.isObject;
    c.JSONEncode = c.JSONEncode;
    c.JSONDecode = c.JSONDecode;
    c.isBlockedUA = c.isBlockedUA;
    c.isEmptyObject = c.isEmptyObject;
    c.info = c.info;
    c.info.device = c.info.device;
    c.info.browser = c.info.browser;
    c.info.browserVersion = c.info.browserVersion;
    c.info.properties = c.info.properties;
    var $e = function() {};
    $e.prototype.create_properties = function() {};
    $e.prototype.event_handler = function() {};
    $e.prototype.after_track_handler = function() {};
    $e.prototype.init = function(t) {
        return this.mp = t, this
    };
    $e.prototype.track = function(t, e, r, n) {
        var i = this,
            o = c.dom_query(t);
        if (o.length === 0) {
            W.error("The DOM query (" + t + ") returned 0 elements");
            return
        }
        return c.each(o, function(s) {
            c.register_event(s, this.override_event, function(a) {
                var u = {},
                    f = i.create_properties(r, this),
                    h = i.mp.get_config("track_links_timeout");
                i.event_handler(a, this, u), window.setTimeout(i.track_callback(n, f, u, !0), h), i.mp.track(e, f, i.track_callback(n, f, u))
            })
        }, this), !0
    };
    $e.prototype.track_callback = function(t, e, r, n) {
        n = n || !1;
        var i = this;
        return function() {
            r.callback_fired || (r.callback_fired = !0, !(t && t(n, e) === !1) && i.after_track_handler(e, r, n))
        }
    };
    $e.prototype.create_properties = function(t, e) {
        var r;
        return typeof t == "function" ? r = t(e) : r = c.extend({}, t), r
    };
    var St = function() {
        this.override_event = "click"
    };
    c.inherit(St, $e);
    St.prototype.create_properties = function(t, e) {
        var r = St.superclass.create_properties.apply(this, arguments);
        return e.href && (r.url = e.href), r
    };
    St.prototype.event_handler = function(t, e, r) {
        r.new_tab = t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank", r.href = e.href, r.new_tab || t.preventDefault()
    };
    St.prototype.after_track_handler = function(t, e) {
        e.new_tab || setTimeout(function() {
            window.location = e.href
        }, 0)
    };
    var $r = function() {
        this.override_event = "submit"
    };
    c.inherit($r, $e);
    $r.prototype.event_handler = function(t, e, r) {
        r.element = e, t.preventDefault()
    };
    $r.prototype.after_track_handler = function(t, e) {
        setTimeout(function() {
            e.element.submit()
        }, 0)
    };
    var Pa = In("lock"),
        Io = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
        };
    Io.prototype.withLock = function(t, e, r) {
        !r && typeof e != "function" && (r = e, e = null);
        var n = r || new Date().getTime() + "|" + Math.random(),
            i = new Date().getTime(),
            o = this.storageKey,
            s = this.pollIntervalMS,
            a = this.timeoutMS,
            u = this.storage,
            f = o + ":X",
            h = o + ":Y",
            g = o + ":Z",
            v = function(q) {
                e && e(q)
            },
            b = function(q) {
                if (new Date().getTime() - i > a) {
                    Pa.error("Timeout waiting for mutex on " + o + "; clearing lock. [" + n + "]"), u.removeItem(g), u.removeItem(h), L();
                    return
                }
                setTimeout(function() {
                    try {
                        q()
                    } catch (se) {
                        v(se)
                    }
                }, s * (Math.random() + .1))
            },
            w = function(q, se) {
                q() ? se() : b(function() {
                    w(q, se)
                })
            },
            I = function() {
                var q = u.getItem(h);
                if (q && q !== n) return !1;
                if (u.setItem(h, n), u.getItem(h) === n) return !0;
                if (!gr(u, !0)) throw new Error("localStorage support dropped while acquiring lock");
                return !1
            },
            L = function() {
                u.setItem(f, n), w(I, function() {
                    if (u.getItem(f) === n) {
                        J();
                        return
                    }
                    b(function() {
                        if (u.getItem(h) !== n) {
                            L();
                            return
                        }
                        w(function() {
                            return !u.getItem(g)
                        }, J)
                    })
                })
            },
            J = function() {
                u.setItem(g, "1");
                try {
                    t()
                } finally {
                    u.removeItem(g), u.getItem(h) === n && u.removeItem(h), u.getItem(f) === n && u.removeItem(f)
                }
            };
        try {
            if (gr(u, !0)) L();
            else throw new Error("localStorage support check failed")
        } catch (q) {
            v(q)
        }
    };
    var Ei = In("batch"),
        We = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || c.bind(Ei.error, Ei), this.lock = new Io(t, {
                storage: this.storage
            }), this.pid = e.pid || null, this.memQueue = []
        };
    We.prototype.enqueue = function(t, e, r) {
        var n = {
            id: Ln(),
            flushAfter: new Date().getTime() + e * 2,
            payload: t
        };
        this.lock.withLock(c.bind(function() {
            var o;
            try {
                var s = this.readFromStorage();
                s.push(n), o = this.saveToStorage(s), o && this.memQueue.push(n)
            } catch {
                this.reportError("Error enqueueing item", t), o = !1
            }
            r && r(o)
        }, this), c.bind(function(o) {
            this.reportError("Error acquiring storage lock", o), r && r(!1)
        }, this), this.pid)
    };
    We.prototype.fillBatch = function(t) {
        var e = this.memQueue.slice(0, t);
        if (e.length < t) {
            var r = this.readFromStorage();
            if (r.length) {
                var n = {};
                c.each(e, function(s) {
                    n[s.id] = !0
                });
                for (var i = 0; i < r.length; i++) {
                    var o = r[i];
                    if (new Date().getTime() > o.flushAfter && !n[o.id] && (o.orphaned = !0, e.push(o), e.length >= t)) break
                }
            }
        }
        return e
    };
    var Si = function(t, e) {
        var r = [];
        return c.each(t, function(n) {
            n.id && !e[n.id] && r.push(n)
        }), r
    };
    We.prototype.removeItemsByID = function(t, e) {
        var r = {};
        c.each(t, function(i) {
            r[i] = !0
        }), this.memQueue = Si(this.memQueue, r);
        var n = c.bind(function() {
            var i;
            try {
                var o = this.readFromStorage();
                if (o = Si(o, r), i = this.saveToStorage(o), i) {
                    o = this.readFromStorage();
                    for (var s = 0; s < o.length; s++) {
                        var a = o[s];
                        if (a.id && r[a.id]) return this.reportError("Item not removed from storage"), !1
                    }
                }
            } catch {
                this.reportError("Error removing items", t), i = !1
            }
            return i
        }, this);
        this.lock.withLock(function() {
            var o = n();
            e && e(o)
        }, c.bind(function(o) {
            var s = !1;
            if (this.reportError("Error acquiring storage lock", o), !gr(this.storage, !0) && (s = n(), !s)) try {
                this.storage.removeItem(this.storageKey)
            } catch (a) {
                this.reportError("Error clearing queue", a)
            }
            e && e(s)
        }, this), this.pid)
    };
    var wi = function(t, e) {
        var r = [];
        return c.each(t, function(n) {
            var i = n.id;
            if (i in e) {
                var o = e[i];
                o !== null && (n.payload = o, r.push(n))
            } else r.push(n)
        }), r
    };
    We.prototype.updatePayloads = function(t, e) {
        this.memQueue = wi(this.memQueue, t), this.lock.withLock(c.bind(function() {
            var n;
            try {
                var i = this.readFromStorage();
                i = wi(i, t), n = this.saveToStorage(i)
            } catch {
                this.reportError("Error updating items", t), n = !1
            }
            e && e(n)
        }, this), c.bind(function(n) {
            this.reportError("Error acquiring storage lock", n), e && e(!1)
        }, this), this.pid)
    };
    We.prototype.readFromStorage = function() {
        var t;
        try {
            t = this.storage.getItem(this.storageKey), t && (t = vr(t), c.isArray(t) || (this.reportError("Invalid storage entry:", t), t = null))
        } catch (e) {
            this.reportError("Error retrieving queue", e), t = null
        }
        return t || []
    };
    We.prototype.saveToStorage = function(t) {
        try {
            return this.storage.setItem(this.storageKey, yr(t)), !0
        } catch (e) {
            return this.reportError("Error saving queue", e), !1
        }
    };
    We.prototype.clear = function() {
        this.memQueue = [], this.storage.removeItem(this.storageKey)
    };
    var Da = 10 * 60 * 1e3,
        Ht = In("batch"),
        Ie = function(t, e) {
            this.errorReporter = e.errorReporter, this.queue = new We(t, {
                errorReporter: c.bind(this.reportError, this),
                storage: e.storage
            }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
        };
    Ie.prototype.enqueue = function(t, e) {
        this.queue.enqueue(t, this.flushInterval, e)
    };
    Ie.prototype.start = function() {
        this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
    };
    Ie.prototype.stop = function() {
        this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
    };
    Ie.prototype.clear = function() {
        this.queue.clear()
    };
    Ie.prototype.resetBatchSize = function() {
        this.batchSize = this.libConfig.batch_size
    };
    Ie.prototype.resetFlush = function() {
        this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
    };
    Ie.prototype.scheduleFlush = function(t) {
        this.flushInterval = t, this.stopped || (this.timeoutID = setTimeout(c.bind(this.flush, this), this.flushInterval))
    };
    Ie.prototype.flush = function(t) {
        try {
            if (this.requestInProgress) {
                Ht.log("Flush: Request already in progress");
                return
            }
            t = t || {};
            var e = this.libConfig.batch_request_timeout_ms,
                r = new Date().getTime(),
                n = this.batchSize,
                i = this.queue.fillBatch(n),
                o = [],
                s = {};
            if (c.each(i, function(f) {
                    var h = f.payload;
                    this.beforeSendHook && !f.orphaned && (h = this.beforeSendHook(h)), h && o.push(h), s[f.id] = h
                }, this), o.length < 1) {
                this.resetFlush();
                return
            }
            this.requestInProgress = !0;
            var a = c.bind(function(f) {
                    this.requestInProgress = !1;
                    try {
                        var h = !1;
                        if (t.unloading) this.queue.updatePayloads(s);
                        else if (c.isObject(f) && f.error === "timeout" && new Date().getTime() - r >= e) this.reportError("Network timeout; retrying"), this.flush();
                        else if (c.isObject(f) && f.xhr_req && (f.xhr_req.status >= 500 || f.xhr_req.status === 429 || f.error === "timeout")) {
                            var g = this.flushInterval * 2,
                                v = f.xhr_req.responseHeaders;
                            if (v) {
                                var b = v["Retry-After"];
                                b && (g = parseInt(b, 10) * 1e3 || g)
                            }
                            g = Math.min(Da, g), this.reportError("Error; retry in " + g + " ms"), this.scheduleFlush(g)
                        } else if (c.isObject(f) && f.xhr_req && f.xhr_req.status === 413)
                            if (i.length > 1) {
                                var w = Math.max(1, Math.floor(n / 2));
                                this.batchSize = Math.min(this.batchSize, w, i.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                            } else this.reportError("Single-event request too large; dropping", i), this.resetBatchSize(), h = !0;
                        else h = !0;
                        h && this.queue.removeItemsByID(c.map(i, function(I) {
                            return I.id
                        }), c.bind(function(I) {
                            I ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                        }, this))
                    } catch (I) {
                        this.reportError("Error handling API response", I), this.resetFlush()
                    }
                }, this),
                u = {
                    method: "POST",
                    verbose: !0,
                    ignore_json_errors: !0,
                    timeout_ms: e
                };
            t.unloading && (u.transport = "sendBeacon"), Ht.log("MIXPANEL REQUEST:", o), this.sendRequest(o, u, a)
        } catch (f) {
            this.reportError("Error flushing request queue", f), this.resetFlush()
        }
    };
    Ie.prototype.reportError = function(t, e) {
        if (Ht.error.apply(Ht.error, arguments), this.errorReporter) try {
            e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
        } catch (r) {
            Ht.error(r)
        }
    };
    var $a = "__mp_opt_in_out_";

    function Ca(t, e) {
        Do(!0, t, e)
    }

    function ja(t, e) {
        Do(!1, t, e)
    }

    function Ua(t, e) {
        return Po(t, e) === "1"
    }

    function Lo(t, e) {
        if (Ba(e)) return W.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = Po(t, e) === "0";
        return r && W.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function er(t) {
        return $n(t, function(e) {
            return this.get_config(e)
        })
    }

    function ze(t) {
        return $n(t, function(e) {
            return this._get_config(e)
        })
    }

    function Rt(t) {
        return $n(t, function(e) {
            return this._get_config(e)
        })
    }

    function Ma(t, e) {
        e = e || {}, Pn(e).remove(Dn(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
    }

    function Pn(t) {
        return t = t || {}, t.persistenceType === "localStorage" ? c.localStorage : c.cookie
    }

    function Dn(t, e) {
        return e = e || {}, (e.persistencePrefix || $a) + t
    }

    function Po(t, e) {
        return Pn(e).get(Dn(t, e))
    }

    function Ba(t) {
        if (t && t.ignoreDnt) return !1;
        var e = t && t.window || le,
            r = e.navigator || {},
            n = !1;
        return c.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(i) {
            c.includes([!0, 1, "1", "yes"], i) && (n = !0)
        }), n
    }

    function Do(t, e, r) {
        if (!c.isString(e) || !e.length) {
            W.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
            return
        }
        r = r || {}, Pn(r).set(Dn(e, r), t ? 1 : 0, c.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0
        })
    }

    function $n(t, e) {
        return function() {
            var r = !1;
            try {
                var n = e.call(this, "token"),
                    i = e.call(this, "ignore_dnt"),
                    o = e.call(this, "opt_out_tracking_persistence_type"),
                    s = e.call(this, "opt_out_tracking_cookie_prefix"),
                    a = e.call(this, "window");
                n && (r = Lo(n, {
                    ignoreDnt: i,
                    persistenceType: o,
                    persistencePrefix: s,
                    window: a
                }))
            } catch (f) {
                W.error("Unexpected error when checking tracking opt-out status: " + f)
            }
            if (!r) return t.apply(this, arguments);
            var u = arguments[arguments.length - 1];
            typeof u == "function" && u(0)
        }
    }
    var Ge = "$set",
        wt = "$set_once",
        Ae = "$unset",
        tt = "$add",
        De = "$append",
        rt = "$union",
        He = "$remove",
        Fa = "$delete",
        $o = {
            set_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[Ge] = n, r
            },
            unset_action: function(t) {
                var e = {},
                    r = [];
                return c.isArray(t) || (t = [t]), c.each(t, function(n) {
                    this._is_reserved_property(n) || r.push(n)
                }, this), e[Ae] = r, e
            },
            set_once_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[wt] = n, r
            },
            union_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = c.isArray(i) ? i : [i])
                }, this) : n[t] = c.isArray(e) ? e : [e], r[rt] = n, r
            },
            append_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[De] = n, r
            },
            remove_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[He] = n, r
            },
            delete_action: function() {
                var t = {};
                return t[Fa] = "", t
            }
        },
        Q = function() {};
    c.extend(Q.prototype, $o);
    Q.prototype._init = function(t, e, r) {
        this._mixpanel = t, this._group_key = e, this._group_id = r
    };
    Q.prototype.set = Rt(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    Q.prototype.set_once = Rt(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    Q.prototype.unset = Rt(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    Q.prototype.union = Rt(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    Q.prototype.delete = Rt(function(t) {
        var e = this.delete_action();
        return this._send_request(e, t)
    });
    Q.prototype.remove = Rt(function(t, e, r) {
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    Q.prototype._send_request = function(t, e) {
        t.$group_key = this._group_key, t.$group_id = this._group_id, t.$token = this._get_config("token");
        var r = c.encodeDates(t);
        return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/groups/",
            batcher: this._mixpanel.request_batchers.groups
        }, e)
    };
    Q.prototype._is_reserved_property = function(t) {
        return t === "$group_key" || t === "$group_id"
    };
    Q.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    Q.prototype.toString = function() {
        return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
    };
    Q.prototype.remove = Q.prototype.remove;
    Q.prototype.set = Q.prototype.set;
    Q.prototype.set_once = Q.prototype.set_once;
    Q.prototype.union = Q.prototype.union;
    Q.prototype.unset = Q.prototype.unset;
    Q.prototype.toString = Q.prototype.toString;
    var D = function() {};
    c.extend(D.prototype, $o);
    D.prototype._init = function(t) {
        this._mixpanel = t
    };
    D.prototype.set = ze(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n[Ge] = c.extend({}, c.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[Ge]), this._send_request(n, r)
    });
    D.prototype.set_once = ze(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    D.prototype.unset = ze(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    D.prototype.increment = ze(function(t, e, r) {
        var n = {},
            i = {};
        return c.isObject(t) ? (c.each(t, function(o, s) {
            if (!this._is_reserved_property(s))
                if (isNaN(parseFloat(o))) {
                    W.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else i[s] = o
        }, this), r = e) : (c.isUndefined(e) && (e = 1), i[t] = e), n[tt] = i, this._send_request(n, r)
    });
    D.prototype.append = ze(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.append_action(t, e);
        return this._send_request(n, r)
    });
    D.prototype.remove = ze(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    D.prototype.union = ze(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    D.prototype.track_charge = ze(function(t, e, r) {
        if (!c.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
            W.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return
        }
        return this.append("$transactions", c.extend({
            $amount: t
        }, e), r)
    });
    D.prototype.clear_charges = function(t) {
        return this.set("$transactions", [], t)
    };
    D.prototype.delete_user = function() {
        if (!this._identify_called()) {
            W.error("mixpanel.people.delete_user() requires you to call identify() first");
            return
        }
        var t = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(t)
    };
    D.prototype.toString = function() {
        return this._mixpanel.toString() + ".people"
    };
    D.prototype._send_request = function(t, e) {
        t.$token = this._get_config("token"), t.$distinct_id = this._mixpanel.get_distinct_id();
        var r = this._mixpanel.get_property("$device_id"),
            n = this._mixpanel.get_property("$user_id"),
            i = this._mixpanel.get_property("$had_persisted_distinct_id");
        r && (t.$device_id = r), n && (t.$user_id = n), i && (t.$had_persisted_distinct_id = i);
        var o = c.encodeDates(t);
        return this._identify_called() ? this._mixpanel._track_or_batch({
            type: "people",
            data: o,
            endpoint: this._get_config("api_host") + "/engage/",
            batcher: this._mixpanel.request_batchers.people
        }, e) : (this._enqueue(t), c.isUndefined(e) || (this._get_config("verbose") ? e({
            status: -1,
            error: null
        }) : e(-1)), c.truncate(o, 255))
    };
    D.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    D.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0
    };
    D.prototype._enqueue = function(t) {
        Ge in t ? this._mixpanel.persistence._add_to_people_queue(Ge, t) : wt in t ? this._mixpanel.persistence._add_to_people_queue(wt, t) : Ae in t ? this._mixpanel.persistence._add_to_people_queue(Ae, t) : tt in t ? this._mixpanel.persistence._add_to_people_queue(tt, t) : De in t ? this._mixpanel.persistence._add_to_people_queue(De, t) : He in t ? this._mixpanel.persistence._add_to_people_queue(He, t) : rt in t ? this._mixpanel.persistence._add_to_people_queue(rt, t) : W.error("Invalid call to _enqueue():", t)
    };
    D.prototype._flush_one_queue = function(t, e, r, n) {
        var i = this,
            o = c.extend({}, this._mixpanel.persistence._get_queue(t)),
            s = o;
        !c.isUndefined(o) && c.isObject(o) && !c.isEmptyObject(o) && (i._mixpanel.persistence._pop_from_people_queue(t, o), n && (s = n(o)), e.call(i, s, function(a, u) {
            a === 0 && i._mixpanel.persistence._add_to_people_queue(t, o), c.isUndefined(r) || r(a, u)
        }))
    };
    D.prototype._flush = function(t, e, r, n, i, o, s) {
        var a = this,
            u = this._mixpanel.persistence._get_queue(De),
            f = this._mixpanel.persistence._get_queue(He);
        if (this._flush_one_queue(Ge, this.set, t), this._flush_one_queue(wt, this.set_once, n), this._flush_one_queue(Ae, this.unset, o, function(L) {
                return c.keys(L)
            }), this._flush_one_queue(tt, this.increment, e), this._flush_one_queue(rt, this.union, i), !c.isUndefined(u) && c.isArray(u) && u.length) {
            for (var h, g = function(L, J) {
                    L === 0 && a._mixpanel.persistence._add_to_people_queue(De, h), c.isUndefined(r) || r(L, J)
                }, v = u.length - 1; v >= 0; v--) h = u.pop(), c.isEmptyObject(h) || a.append(h, g);
            a._mixpanel.persistence.save()
        }
        if (!c.isUndefined(f) && c.isArray(f) && f.length) {
            for (var b, w = function(L, J) {
                    L === 0 && a._mixpanel.persistence._add_to_people_queue(He, b), c.isUndefined(s) || s(L, J)
                }, I = f.length - 1; I >= 0; I--) b = f.pop(), c.isEmptyObject(b) || a.remove(b, w);
            a._mixpanel.persistence.save()
        }
    };
    D.prototype._is_reserved_property = function(t) {
        return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
    };
    D.prototype.set = D.prototype.set;
    D.prototype.set_once = D.prototype.set_once;
    D.prototype.unset = D.prototype.unset;
    D.prototype.increment = D.prototype.increment;
    D.prototype.append = D.prototype.append;
    D.prototype.remove = D.prototype.remove;
    D.prototype.union = D.prototype.union;
    D.prototype.track_charge = D.prototype.track_charge;
    D.prototype.clear_charges = D.prototype.clear_charges;
    D.prototype.delete_user = D.prototype.delete_user;
    D.prototype.toString = D.prototype.toString;
    var Cn = "__mps",
        jn = "__mpso",
        Un = "__mpus",
        Mn = "__mpa",
        Bn = "__mpap",
        Fn = "__mpr",
        qn = "__mpu",
        Co = "$people_distinct_id",
        mr = "__alias",
        zt = "__timers",
        qa = [Cn, jn, Un, Mn, Bn, Fn, qn, Co, mr, zt],
        U = function(t) {
            this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
            var e = t.persistence;
            e !== "cookie" && e !== "localStorage" && (W.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && c.localStorage.is_supported() ? this.storage = c.localStorage : this.storage = c.cookie, this.load(), this.update_config(t), this.upgrade(t), this.save()
        };
    U.prototype.properties = function() {
        var t = {};
        return c.each(this.props, function(e, r) {
            c.include(qa, r) || (t[r] = e)
        }), t
    };
    U.prototype.load = function() {
        if (!this.disabled) {
            var t = this.storage.parse(this.name);
            t && (this.props = c.extend({}, t))
        }
    };
    U.prototype.upgrade = function(t) {
        var e = t.upgrade,
            r, n;
        e && (r = "mp_super_properties", typeof e == "string" && (r = e), n = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), n && (this.props = c.extend(this.props, n.all, n.events))), !t.cookie_name && t.name !== "mixpanel" && (r = "mp_" + t.token + "_" + t.name, n = this.storage.parse(r), n && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(n))), this.storage === c.localStorage && (n = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, !0), n && this.register_once(n))
    };
    U.prototype.save = function() {
        this.disabled || this.storage.set(this.name, c.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
    };
    U.prototype.remove = function() {
        this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
    };
    U.prototype.clear = function() {
        this.remove(), this.props = {}
    };
    U.prototype.register_once = function(t, e, r) {
        return c.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, c.each(t, function(n, i) {
            (!this.props.hasOwnProperty(i) || this.props[i] === e) && (this.props[i] = n)
        }, this), this.save(), !0) : !1
    };
    U.prototype.register = function(t, e) {
        return c.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, c.extend(this.props, t), this.save(), !0) : !1
    };
    U.prototype.unregister = function(t) {
        t in this.props && (delete this.props[t], this.save())
    };
    U.prototype.update_campaign_params = function() {
        this.campaign_params_saved || (this.register_once(c.info.campaignParams()), this.campaign_params_saved = !0)
    };
    U.prototype.update_search_keyword = function(t) {
        this.register(c.info.searchInfo(t))
    };
    U.prototype.update_referrer_info = function(t) {
        this.register_once({
            $initial_referrer: t || "$direct",
            $initial_referring_domain: c.info.referringDomain(t) || "$direct"
        }, "")
    };
    U.prototype.get_referrer_info = function() {
        return c.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    U.prototype.safe_merge = function(t) {
        return c.each(this.props, function(e, r) {
            r in t || (t[r] = e)
        }), t
    };
    U.prototype.update_config = function(t) {
        this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
    };
    U.prototype.set_disabled = function(t) {
        this.disabled = t, this.disabled ? this.remove() : this.save()
    };
    U.prototype.set_cookie_domain = function(t) {
        t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
    };
    U.prototype.set_cross_site = function(t) {
        t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
    };
    U.prototype.set_cross_subdomain = function(t) {
        t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
    };
    U.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    U.prototype.set_secure = function(t) {
        t !== this.secure && (this.secure = !!t, this.remove(), this.save())
    };
    U.prototype._add_to_people_queue = function(t, e) {
        var r = this._get_queue_key(t),
            n = e[t],
            i = this._get_or_create_queue(Ge),
            o = this._get_or_create_queue(wt),
            s = this._get_or_create_queue(Ae),
            a = this._get_or_create_queue(tt),
            u = this._get_or_create_queue(rt),
            f = this._get_or_create_queue(He, []),
            h = this._get_or_create_queue(De, []);
        r === Cn ? (c.extend(i, n), this._pop_from_people_queue(tt, n), this._pop_from_people_queue(rt, n), this._pop_from_people_queue(Ae, n)) : r === jn ? (c.each(n, function(g, v) {
            v in o || (o[v] = g)
        }), this._pop_from_people_queue(Ae, n)) : r === Un ? c.each(n, function(g) {
            c.each([i, o, a, u], function(v) {
                g in v && delete v[g]
            }), c.each(h, function(v) {
                g in v && delete v[g]
            }), s[g] = !0
        }) : r === Mn ? (c.each(n, function(g, v) {
            v in i ? i[v] += g : (v in a || (a[v] = 0), a[v] += g)
        }, this), this._pop_from_people_queue(Ae, n)) : r === qn ? (c.each(n, function(g, v) {
            c.isArray(g) && (v in u || (u[v] = []), u[v] = u[v].concat(g))
        }), this._pop_from_people_queue(Ae, n)) : r === Fn ? (f.push(n), this._pop_from_people_queue(De, n)) : r === Bn && (h.push(n), this._pop_from_people_queue(Ae, n)), W.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), W.log(e), this.save()
    };
    U.prototype._pop_from_people_queue = function(t, e) {
        var r = this._get_queue(t);
        c.isUndefined(r) || (c.each(e, function(n, i) {
            t === De || t === He ? c.each(r, function(o) {
                o[i] === n && delete o[i]
            }) : delete r[i]
        }, this), this.save())
    };
    U.prototype._get_queue_key = function(t) {
        if (t === Ge) return Cn;
        if (t === wt) return jn;
        if (t === Ae) return Un;
        if (t === tt) return Mn;
        if (t === De) return Bn;
        if (t === He) return Fn;
        if (t === rt) return qn;
        W.error("Invalid queue:", t)
    };
    U.prototype._get_queue = function(t) {
        return this.props[this._get_queue_key(t)]
    };
    U.prototype._get_or_create_queue = function(t, e) {
        var r = this._get_queue_key(t);
        return e = c.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
    };
    U.prototype.set_event_timer = function(t, e) {
        var r = this.props[zt] || {};
        r[t] = e, this.props[zt] = r, this.save()
    };
    U.prototype.remove_event_timer = function(t) {
        var e = this.props[zt] || {},
            r = e[t];
        return c.isUndefined(r) || (delete this.props[zt][t], this.save()), r
    };
    var Gn, ue, jo = 0,
        Ga = 1,
        Ha = function(t) {
            return t
        },
        Kt = function() {},
        we = "mixpanel",
        Uo = "base64",
        Ya = "json",
        dt = le.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        Mo = !dt && Te.indexOf("MSIE") === -1 && Te.indexOf("Mozilla") === -1,
        br = null;
    Pe.sendBeacon && (br = function() {
        return Pe.sendBeacon.apply(Pe, arguments)
    });
    var Oi = {
            api_host: "https://api-js.mixpanel.com",
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: Uo,
            app_host: "https://mixpanel.com",
            cdn: "https://cdn.mxpnl.com",
            cross_site_cookie: !1,
            cross_subdomain_cookie: !0,
            error_reporter: Kt,
            persistence: "cookie",
            persistence_name: "",
            cookie_domain: "",
            cookie_name: "",
            loaded: Kt,
            store_google: !0,
            save_referrer: !0,
            test: !1,
            verbose: !1,
            img: !1,
            debug: !1,
            track_links_timeout: 300,
            cookie_expiration: 365,
            upgrade: !1,
            disable_persistence: !1,
            disable_cookie: !1,
            secure_cookie: !1,
            ip: !0,
            opt_out_tracking_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_tracking_persistence_type: "localStorage",
            opt_out_tracking_cookie_prefix: null,
            property_blacklist: [],
            xhr_headers: {},
            ignore_dnt: !1,
            batch_requests: !0,
            batch_size: 50,
            batch_flush_interval_ms: 5e3,
            batch_request_timeout_ms: 9e4,
            batch_autostart: !0,
            hooks: {}
        },
        Bo = !1,
        S = function() {},
        gn = function(t, e, r) {
            var n, i = r === we ? ue : ue[r];
            if (i && Gn === jo) n = i;
            else {
                if (i && !c.isArray(i)) {
                    W.error("You have already initialized " + r);
                    return
                }
                n = new S
            }
            return n._cached_groups = {}, n._init(t, e, r), n.people = new D, n.people._init(n), Fe.DEBUG = Fe.DEBUG || n.get_config("debug"), !c.isUndefined(i) && c.isArray(i) && (n._execute_array.call(n.people, i.people), n._execute_array(i)), n
        };
    S.prototype.init = function(t, e, r) {
        if (c.isUndefined(r)) {
            this.report_error("You must name your new library: init(token, config, name)");
            return
        }
        if (r === we) {
            this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            return
        }
        var n = gn(t, e, r);
        return ue[r] = n, n._loaded(), n
    };
    S.prototype._init = function(t, e, r) {
        e = e || {}, this.__loaded = !0, this.config = {};
        var n = {};
        if (!("api_payload_format" in e)) {
            var i = e.api_host || Oi.api_host;
            i.match(/\.mixpanel\.com$/) && (n.api_payload_format = Ya)
        }
        if (this.set_config(c.extend({}, Oi, n, e, {
                name: r,
                token: t,
                callback_fn: (r === we ? r : we + "." + r) + "._jsc"
            })), this._jsc = Kt, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!c.localStorage.is_supported(!0) || !dt) this._batch_requests = !1, W.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
            else if (this.init_batchers(), br && le.addEventListener) {
                var o = c.bind(function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }, this);
                le.addEventListener("pagehide", function(a) {
                    a.persisted && o()
                }), le.addEventListener("visibilitychange", function() {
                    K.visibilityState === "hidden" && o()
                })
            }
        }
        this.persistence = this.cookie = new U(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
        var s = c.UUID();
        this.get_distinct_id() || this.register_once({
            distinct_id: s,
            $device_id: s
        }, "")
    };
    S.prototype._loaded = function() {
        this.get_config("loaded")(this), this._set_default_superprops()
    };
    S.prototype._set_default_superprops = function() {
        this.persistence.update_search_keyword(K.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(K.referrer)
    };
    S.prototype._dom_loaded = function() {
        c.each(this.__dom_loaded_queue, function(t) {
            this._track_dom.apply(this, t)
        }, this), this.has_opted_out_tracking() || c.each(this.__request_queue, function(t) {
            this._send_request.apply(this, t)
        }, this), delete this.__dom_loaded_queue, delete this.__request_queue
    };
    S.prototype._track_dom = function(t, e) {
        if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
        if (!Bo) return this.__dom_loaded_queue.push([t, e]), !1;
        var r = new t().init(this);
        return r.track.apply(r, e)
    };
    S.prototype._prepare_callback = function(t, e) {
        if (c.isUndefined(t)) return null;
        if (dt) {
            var r = function(s) {
                t(s, e)
            };
            return r
        } else {
            var n = this._jsc,
                i = "" + Math.floor(Math.random() * 1e8),
                o = this.get_config("callback_fn") + "[" + i + "]";
            return n[i] = function(s) {
                delete n[i], t(s, e)
            }, o
        }
    };
    S.prototype._send_request = function(t, e, r, n) {
        var i = !0;
        if (Mo) return this.__request_queue.push(arguments), i;
        var o = {
                method: this.get_config("api_method"),
                transport: this.get_config("api_transport"),
                verbose: this.get_config("verbose")
            },
            s = null;
        !n && (c.isFunction(r) || typeof r == "string") && (n = r, r = null), r = c.extend(o, r || {}), dt || (r.method = "GET");
        var a = r.method === "POST",
            u = br && a && r.transport.toLowerCase() === "sendbeacon",
            f = r.verbose;
        e.verbose && (f = !0), this.get_config("test") && (e.test = 1), f && (e.verbose = 1), this.get_config("img") && (e.img = 1), dt || (n ? e.callback = n : (f || this.get_config("test")) && (e.callback = "(function(){})")), e.ip = this.get_config("ip") ? 1 : 0, e._ = new Date().getTime().toString(), a && (s = "data=" + encodeURIComponent(e.data), delete e.data), t += "?" + c.HTTPBuildQuery(e);
        var h = this;
        if ("img" in e) {
            var g = K.createElement("img");
            g.src = t, K.body.appendChild(g)
        } else if (u) {
            try {
                i = br(t, s)
            } catch (J) {
                h.report_error(J), i = !1
            }
            try {
                n && n(i ? 1 : 0)
            } catch (J) {
                h.report_error(J)
            }
        } else if (dt) try {
            var v = new XMLHttpRequest;
            v.open(r.method, t, !0);
            var b = this.get_config("xhr_headers");
            if (a && (b["Content-Type"] = "application/x-www-form-urlencoded"), c.each(b, function(J, q) {
                    v.setRequestHeader(q, J)
                }), r.timeout_ms && typeof v.timeout < "u") {
                v.timeout = r.timeout_ms;
                var w = new Date().getTime()
            }
            v.withCredentials = !0, v.onreadystatechange = function() {
                if (v.readyState === 4)
                    if (v.status === 200) {
                        if (n)
                            if (f) {
                                var J;
                                try {
                                    J = c.JSONDecode(v.responseText)
                                } catch (se) {
                                    if (h.report_error(se), r.ignore_json_errors) J = v.responseText;
                                    else return
                                }
                                n(J)
                            } else n(Number(v.responseText))
                    } else {
                        var q;
                        v.timeout && !v.status && new Date().getTime() - w >= v.timeout ? q = "timeout" : q = "Bad HTTP status: " + v.status + " " + v.statusText, h.report_error(q), n && n(f ? {
                            status: 0,
                            error: q,
                            xhr_req: v
                        } : 0)
                    }
            }, v.send(s)
        } catch (J) {
            h.report_error(J), i = !1
        } else {
            var I = K.createElement("script");
            I.type = "text/javascript", I.async = !0, I.defer = !0, I.src = t;
            var L = K.getElementsByTagName("script")[0];
            L.parentNode.insertBefore(I, L)
        }
        return i
    };
    S.prototype._execute_array = function(t) {
        var e, r = [],
            n = [],
            i = [];
        c.each(t, function(s) {
            s && (e = s[0], c.isArray(e) ? i.push(s) : typeof s == "function" ? s.call(this) : c.isArray(s) && e === "alias" ? r.push(s) : c.isArray(s) && e.indexOf("track") !== -1 && typeof this[e] == "function" ? i.push(s) : n.push(s))
        }, this);
        var o = function(s, a) {
            c.each(s, function(u) {
                if (c.isArray(u[0])) {
                    var f = a;
                    c.each(u, function(h) {
                        f = f[h[0]].apply(f, h.slice(1))
                    })
                } else this[u[0]].apply(this, u.slice(1))
            }, a)
        };
        o(r, this), o(n, this), o(i, this)
    };
    S.prototype.are_batchers_initialized = function() {
        return !!this.request_batchers.events
    };
    S.prototype.init_batchers = function() {
        var t = this.get_config("token");
        if (!this.are_batchers_initialized()) {
            var e = c.bind(function(r) {
                return new Ie("__mpq_" + t + r.queue_suffix, {
                    libConfig: this.config,
                    sendRequestFunc: c.bind(function(n, i, o) {
                        this._send_request(this.get_config("api_host") + r.endpoint, this._encode_data_for_request(n), i, this._prepare_callback(o, n))
                    }, this),
                    beforeSendHook: c.bind(function(n) {
                        return this._run_hook("before_send_" + r.type, n)
                    }, this),
                    errorReporter: this.get_config("error_reporter"),
                    stopAllBatchingFunc: c.bind(this.stop_batch_senders, this)
                })
            }, this);
            this.request_batchers = {
                events: e({
                    type: "events",
                    endpoint: "/track/",
                    queue_suffix: "_ev"
                }),
                people: e({
                    type: "people",
                    endpoint: "/engage/",
                    queue_suffix: "_pp"
                }),
                groups: e({
                    type: "groups",
                    endpoint: "/groups/",
                    queue_suffix: "_gr"
                })
            }
        }
        this.get_config("batch_autostart") && this.start_batch_senders()
    };
    S.prototype.start_batch_senders = function() {
        this.are_batchers_initialized() && (this._batch_requests = !0, c.each(this.request_batchers, function(t) {
            t.start()
        }))
    };
    S.prototype.stop_batch_senders = function() {
        this._batch_requests = !1, c.each(this.request_batchers, function(t) {
            t.stop(), t.clear()
        })
    };
    S.prototype.push = function(t) {
        this._execute_array([t])
    };
    S.prototype.disable = function(t) {
        typeof t > "u" ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(t)
    };
    S.prototype._encode_data_for_request = function(t) {
        var e = c.JSONEncode(t);
        return this.get_config("api_payload_format") === Uo && (e = c.base64Encode(e)), {
            data: e
        }
    };
    S.prototype._track_or_batch = function(t, e) {
        var r = c.truncate(t.data, 255),
            n = t.endpoint,
            i = t.batcher,
            o = t.should_send_immediately,
            s = t.send_request_options || {};
        e = e || Kt;
        var a = !0,
            u = c.bind(function() {
                return s.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (W.log("MIXPANEL REQUEST:"), W.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(e, r))) : null
            }, this);
        return this._batch_requests && !o ? i.enqueue(r, function(f) {
            f ? e(1, r) : u()
        }) : a = u(), a && r
    };
    S.prototype.track = er(function(t, e, r, n) {
        !n && typeof r == "function" && (n = r, r = null), r = r || {};
        var i = r.transport;
        i && (r.transport = i);
        var o = r.send_immediately;
        if (typeof n != "function" && (n = Kt), c.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.track");
            return
        }
        if (this._event_is_disabled(t)) {
            n(0);
            return
        }
        e = e || {}, e.token = this.get_config("token");
        var s = this.persistence.remove_event_timer(t);
        if (!c.isUndefined(s)) {
            var a = new Date().getTime() - s;
            e.$duration = parseFloat((a / 1e3).toFixed(3))
        }
        this._set_default_superprops(), e = c.extend({}, c.info.properties(), this.persistence.properties(), this.unpersisted_superprops, e);
        var u = this.get_config("property_blacklist");
        c.isArray(u) ? c.each(u, function(g) {
            delete e[g]
        }) : this.report_error("Invalid value for property_blacklist config: " + u);
        var f = {
                event: t,
                properties: e
            },
            h = this._track_or_batch({
                type: "events",
                data: f,
                endpoint: this.get_config("api_host") + "/track/",
                batcher: this.request_batchers.events,
                should_send_immediately: o,
                send_request_options: r
            }, n);
        return h
    });
    S.prototype.set_group = er(function(t, e, r) {
        c.isArray(e) || (e = [e]);
        var n = {};
        return n[t] = e, this.register(n), this.people.set(t, e, r)
    });
    S.prototype.add_group = er(function(t, e, r) {
        var n = this.get_property(t);
        if (n === void 0) {
            var i = {};
            i[t] = [e], this.register(i)
        } else n.indexOf(e) === -1 && (n.push(e), this.register(i));
        return this.people.union(t, e, r)
    });
    S.prototype.remove_group = er(function(t, e, r) {
        var n = this.get_property(t);
        if (n !== void 0) {
            var i = n.indexOf(e);
            i > -1 && (n.splice(i, 1), this.register({
                group_key: n
            })), n.length === 0 && this.unregister(t)
        }
        return this.people.remove(t, e, r)
    });
    S.prototype.track_with_groups = er(function(t, e, r, n) {
        var i = c.extend({}, e || {});
        return c.each(r, function(o, s) {
            o != null && (i[s] = o)
        }), this.track(t, i, n)
    });
    S.prototype._create_map_key = function(t, e) {
        return t + "_" + JSON.stringify(e)
    };
    S.prototype._remove_group_from_cache = function(t, e) {
        delete this._cached_groups[this._create_map_key(t, e)]
    };
    S.prototype.get_group = function(t, e) {
        var r = this._create_map_key(t, e),
            n = this._cached_groups[r];
        return (n === void 0 || n._group_key !== t || n._group_id !== e) && (n = new Q, n._init(this, t, e), this._cached_groups[r] = n), n
    };
    S.prototype.track_pageview = function(t) {
        c.isUndefined(t) && (t = K.location.href), this.track("mp_page_view", c.info.pageviewInfo(t))
    };
    S.prototype.track_links = function() {
        return this._track_dom.call(this, St, arguments)
    };
    S.prototype.track_forms = function() {
        return this._track_dom.call(this, $r, arguments)
    };
    S.prototype.time_event = function(t) {
        if (c.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return
        }
        this._event_is_disabled(t) || this.persistence.set_event_timer(t, new Date().getTime())
    };
    var Wa = {
            persistent: !0
        },
        Hn = function(t) {
            var e;
            return c.isObject(t) ? e = t : c.isUndefined(t) ? e = {} : e = {
                days: t
            }, c.extend({}, Wa, e)
        };
    S.prototype.register = function(t, e) {
        var r = Hn(e);
        r.persistent ? this.persistence.register(t, r.days) : c.extend(this.unpersisted_superprops, t)
    };
    S.prototype.register_once = function(t, e, r) {
        var n = Hn(r);
        n.persistent ? this.persistence.register_once(t, e, n.days) : (typeof e > "u" && (e = "None"), c.each(t, function(i, o) {
            (!this.unpersisted_superprops.hasOwnProperty(o) || this.unpersisted_superprops[o] === e) && (this.unpersisted_superprops[o] = i)
        }, this))
    };
    S.prototype.unregister = function(t, e) {
        e = Hn(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
    };
    S.prototype._register_single = function(t, e) {
        var r = {};
        r[t] = e, this.register(r)
    };
    S.prototype.identify = function(t, e, r, n, i, o, s, a) {
        var u = this.get_distinct_id();
        if (this.register({
                $user_id: t
            }), !this.get_property("$device_id")) {
            var f = u;
            this.register_once({
                $had_persisted_distinct_id: !0,
                $device_id: f
            }, "")
        }
        t !== u && t !== this.get_property(mr) && (this.unregister(mr), this.register({
            distinct_id: t
        })), this._flags.identify_called = !0, this.people._flush(e, r, n, i, o, s, a), t !== u && this.track("$identify", {
            distinct_id: t,
            $anon_distinct_id: u
        }, {
            skip_hooks: !0
        })
    };
    S.prototype.reset = function() {
        this.persistence.clear(), this._flags.identify_called = !1;
        var t = c.UUID();
        this.register_once({
            distinct_id: t,
            $device_id: t
        }, "")
    };
    S.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id")
    };
    S.prototype.alias = function(t, e) {
        if (t === this.get_property(Co)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
        var r = this;
        return c.isUndefined(e) && (e = this.get_distinct_id()), t !== e ? (this._register_single(mr, t), this.track("$create_alias", {
            alias: t,
            distinct_id: e
        }, {
            skip_hooks: !0
        }, function() {
            r.identify(t)
        })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(t), -1)
    };
    S.prototype.name_tag = function(t) {
        this._register_single("mp_name_tag", t)
    };
    S.prototype.set_config = function(t) {
        if (c.isObject(t)) {
            c.extend(this.config, t);
            var e = t.batch_size;
            e && c.each(this.request_batchers, function(r) {
                r.resetBatchSize()
            }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Fe.DEBUG = Fe.DEBUG || this.get_config("debug")
        }
    };
    S.prototype.get_config = function(t) {
        return this.config[t]
    };
    S.prototype._run_hook = function(t) {
        var e = (this.config.hooks[t] || Ha).apply(this, Be.call(arguments, 1));
        return typeof e > "u" && (this.report_error(t + " hook did not return a value"), e = null), e
    };
    S.prototype.get_property = function(t) {
        return this.persistence.props[t]
    };
    S.prototype.toString = function() {
        var t = this.get_config("name");
        return t !== we && (t = we + "." + t), t
    };
    S.prototype._event_is_disabled = function(t) {
        return c.isBlockedUA(Te) || this._flags.disable_all_events || c.include(this.__disabled_events, t)
    };
    S.prototype._gdpr_init = function() {
        var t = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
        t && c.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
            persistence_type: "cookie"
        }) && this.opt_in_tracking({
            enable_persistence: !1
        }), !this.has_opted_out_tracking() && this.has_opted_out_tracking({
            persistence_type: "cookie"
        }) && this.opt_out_tracking({
            clear_persistence: !1
        }), this.clear_opt_in_out_tracking({
            persistence_type: "cookie",
            enable_persistence: !1
        })), this.has_opted_out_tracking() ? this._gdpr_update_persistence({
            clear_persistence: !0
        }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || c.cookie.get("mp_optout")) && (c.cookie.remove("mp_optout"), this.opt_out_tracking({
            clear_persistence: this.get_config("opt_out_persistence_by_default")
        }))
    };
    S.prototype._gdpr_update_persistence = function(t) {
        var e;
        if (t && t.clear_persistence) e = !0;
        else if (t && t.enable_persistence) e = !1;
        else return;
        !this.get_config("disable_persistence") && this.persistence.disabled !== e && this.persistence.set_disabled(e), e && c.each(this.request_batchers, function(r) {
            r.clear()
        })
    };
    S.prototype._gdpr_call_func = function(t, e) {
        return e = c.extend({
            track: c.bind(this.track, this),
            persistence_type: this.get_config("opt_out_tracking_persistence_type"),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt")
        }, e), c.localStorage.is_supported() || (e.persistence_type = "cookie"), t(this.get_config("token"), {
            track: e.track,
            trackEventName: e.track_event_name,
            trackProperties: e.track_properties,
            persistenceType: e.persistence_type,
            persistencePrefix: e.cookie_prefix,
            cookieDomain: e.cookie_domain,
            cookieExpiration: e.cookie_expiration,
            crossSiteCookie: e.cross_site_cookie,
            crossSubdomainCookie: e.cross_subdomain_cookie,
            secureCookie: e.secure_cookie,
            ignoreDnt: e.ignore_dnt
        })
    };
    S.prototype.opt_in_tracking = function(t) {
        t = c.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Ca, t), this._gdpr_update_persistence(t)
    };
    S.prototype.opt_out_tracking = function(t) {
        t = c.extend({
            clear_persistence: !0,
            delete_user: !0
        }, t), t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(ja, t), this._gdpr_update_persistence(t)
    };
    S.prototype.has_opted_in_tracking = function(t) {
        return this._gdpr_call_func(Ua, t)
    };
    S.prototype.has_opted_out_tracking = function(t) {
        return this._gdpr_call_func(Lo, t)
    };
    S.prototype.clear_opt_in_out_tracking = function(t) {
        t = c.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Ma, t), this._gdpr_update_persistence(t)
    };
    S.prototype.report_error = function(t, e) {
        W.error.apply(W.error, arguments);
        try {
            !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
        } catch (r) {
            W.error(r)
        }
    };
    S.prototype.init = S.prototype.init;
    S.prototype.reset = S.prototype.reset;
    S.prototype.disable = S.prototype.disable;
    S.prototype.time_event = S.prototype.time_event;
    S.prototype.track = S.prototype.track;
    S.prototype.track_links = S.prototype.track_links;
    S.prototype.track_forms = S.prototype.track_forms;
    S.prototype.track_pageview = S.prototype.track_pageview;
    S.prototype.register = S.prototype.register;
    S.prototype.register_once = S.prototype.register_once;
    S.prototype.unregister = S.prototype.unregister;
    S.prototype.identify = S.prototype.identify;
    S.prototype.alias = S.prototype.alias;
    S.prototype.name_tag = S.prototype.name_tag;
    S.prototype.set_config = S.prototype.set_config;
    S.prototype.get_config = S.prototype.get_config;
    S.prototype.get_property = S.prototype.get_property;
    S.prototype.get_distinct_id = S.prototype.get_distinct_id;
    S.prototype.toString = S.prototype.toString;
    S.prototype.opt_out_tracking = S.prototype.opt_out_tracking;
    S.prototype.opt_in_tracking = S.prototype.opt_in_tracking;
    S.prototype.has_opted_out_tracking = S.prototype.has_opted_out_tracking;
    S.prototype.has_opted_in_tracking = S.prototype.has_opted_in_tracking;
    S.prototype.clear_opt_in_out_tracking = S.prototype.clear_opt_in_out_tracking;
    S.prototype.get_group = S.prototype.get_group;
    S.prototype.set_group = S.prototype.set_group;
    S.prototype.add_group = S.prototype.add_group;
    S.prototype.remove_group = S.prototype.remove_group;
    S.prototype.track_with_groups = S.prototype.track_with_groups;
    S.prototype.start_batch_senders = S.prototype.start_batch_senders;
    S.prototype.stop_batch_senders = S.prototype.stop_batch_senders;
    U.prototype.properties = U.prototype.properties;
    U.prototype.update_search_keyword = U.prototype.update_search_keyword;
    U.prototype.update_referrer_info = U.prototype.update_referrer_info;
    U.prototype.get_cross_subdomain = U.prototype.get_cross_subdomain;
    U.prototype.clear = U.prototype.clear;
    var ft = {},
        za = function() {
            c.each(ft, function(t, e) {
                e !== we && (ue[e] = t)
            }), ue._ = c
        },
        Ka = function() {
            ue.init = function(t, e, r) {
                if (r) return ue[r] || (ue[r] = ft[r] = gn(t, e, r), ue[r]._loaded()), ue[r];
                var n = ue;
                ft[we] ? n = ft[we] : t && (n = gn(t, e, we), n._loaded(), ft[we] = n), ue = n, Gn === Ga && (le[we] = ue), za()
            }
        },
        Va = function() {
            function t() {
                t.done || (t.done = !0, Bo = !0, Mo = !1, c.each(ft, function(n) {
                    n._dom_loaded()
                }))
            }

            function e() {
                try {
                    K.documentElement.doScroll("left")
                } catch {
                    setTimeout(e, 1);
                    return
                }
                t()
            }
            if (K.addEventListener) K.readyState === "complete" ? t() : K.addEventListener("DOMContentLoaded", t, !1);
            else if (K.attachEvent) {
                K.attachEvent("onreadystatechange", t);
                var r = !1;
                try {
                    r = le.frameElement === null
                } catch {}
                K.documentElement.doScroll && r && e()
            }
            c.register_event(le, "load", t, !0)
        };

    function Ja() {
        return Gn = jo, ue = new S, Ka(), ue.init(), Va(), ue
    }
    var Xa = Ja(),
        Qa = Xa;
    const ki = Aa(Qa);
    class Fo {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), ki.init("2e284873b7269f13b850ac994abfd848", {
                debug: "false"
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
        static gameJoined(e, r) {
            ki.track("Game Joined", {
                tag: e,
                ...r
            })
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

    function Za() {
        this.__data__ = [], this.size = 0
    }
    var ec = Za;

    function tc(t, e) {
        return t === e || t !== t && e !== e
    }
    var Cr = tc,
        rc = Cr;

    function nc(t, e) {
        for (var r = t.length; r--;)
            if (rc(t[r][0], e)) return r;
        return -1
    }
    var jr = nc,
        ic = jr,
        oc = Array.prototype,
        sc = oc.splice;

    function ac(t) {
        var e = this.__data__,
            r = ic(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : sc.call(e, r, 1), --this.size, !0
    }
    var cc = ac,
        uc = jr;

    function fc(t) {
        var e = this.__data__,
            r = uc(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var lc = fc,
        pc = jr;

    function dc(t) {
        return pc(this.__data__, t) > -1
    }
    var hc = dc,
        _c = jr;

    function gc(t, e) {
        var r = this.__data__,
            n = _c(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var yc = gc,
        vc = ec,
        mc = cc,
        bc = lc,
        Ec = hc,
        Sc = yc;

    function xt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    xt.prototype.clear = vc;
    xt.prototype.delete = mc;
    xt.prototype.get = bc;
    xt.prototype.has = Ec;
    xt.prototype.set = Sc;
    var Ur = xt,
        wc = Ur;

    function Oc() {
        this.__data__ = new wc, this.size = 0
    }
    var kc = Oc;

    function Tc(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var Ac = Tc;

    function Rc(t) {
        return this.__data__.get(t)
    }
    var xc = Rc;

    function Nc(t) {
        return this.__data__.has(t)
    }
    var Ic = Nc,
        Lc = typeof me == "object" && me && me.Object === Object && me,
        qo = Lc,
        Pc = qo,
        Dc = typeof self == "object" && self && self.Object === Object && self,
        $c = Pc || Dc || Function("return this")(),
        Nt = $c,
        Cc = Nt,
        jc = Cc.Symbol,
        Go = jc,
        Ti = Go,
        Ho = Object.prototype,
        Uc = Ho.hasOwnProperty,
        Mc = Ho.toString,
        Bt = Ti ? Ti.toStringTag : void 0;

    function Bc(t) {
        var e = Uc.call(t, Bt),
            r = t[Bt];
        try {
            t[Bt] = void 0;
            var n = !0
        } catch {}
        var i = Mc.call(t);
        return n && (e ? t[Bt] = r : delete t[Bt]), i
    }
    var Fc = Bc,
        qc = Object.prototype,
        Gc = qc.toString;

    function Hc(t) {
        return Gc.call(t)
    }
    var Yc = Hc,
        Ai = Go,
        Wc = Fc,
        zc = Yc,
        Kc = "[object Null]",
        Vc = "[object Undefined]",
        Ri = Ai ? Ai.toStringTag : void 0;

    function Jc(t) {
        return t == null ? t === void 0 ? Vc : Kc : Ri && Ri in Object(t) ? Wc(t) : zc(t)
    }
    var Mr = Jc;

    function Xc(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var ot = Xc,
        Qc = Mr,
        Zc = ot,
        eu = "[object AsyncFunction]",
        tu = "[object Function]",
        ru = "[object GeneratorFunction]",
        nu = "[object Proxy]";

    function iu(t) {
        if (!Zc(t)) return !1;
        var e = Qc(t);
        return e == tu || e == ru || e == eu || e == nu
    }
    var Yn = iu,
        ou = Nt,
        su = ou["__core-js_shared__"],
        au = su,
        tn = au,
        xi = function() {
            var t = /[^.]+$/.exec(tn && tn.keys && tn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function cu(t) {
        return !!xi && xi in t
    }
    var uu = cu,
        fu = Function.prototype,
        lu = fu.toString;

    function pu(t) {
        if (t != null) {
            try {
                return lu.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var du = pu,
        hu = Yn,
        _u = uu,
        gu = ot,
        yu = du,
        vu = /[\\^$.*+?()[\]{}|]/g,
        mu = /^\[object .+?Constructor\]$/,
        bu = Function.prototype,
        Eu = Object.prototype,
        Su = bu.toString,
        wu = Eu.hasOwnProperty,
        Ou = RegExp("^" + Su.call(wu).replace(vu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ku(t) {
        if (!gu(t) || _u(t)) return !1;
        var e = hu(t) ? Ou : mu;
        return e.test(yu(t))
    }
    var Tu = ku;

    function Au(t, e) {
        return t == null ? void 0 : t[e]
    }
    var Ru = Au,
        xu = Tu,
        Nu = Ru;

    function Iu(t, e) {
        var r = Nu(t, e);
        return xu(r) ? r : void 0
    }
    var Wn = Iu,
        Lu = Wn,
        Pu = Nt,
        Du = Lu(Pu, "Map"),
        Yo = Du,
        $u = Wn,
        Cu = $u(Object, "create"),
        Br = Cu,
        Ni = Br;

    function ju() {
        this.__data__ = Ni ? Ni(null) : {}, this.size = 0
    }
    var Uu = ju;

    function Mu(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var Bu = Mu,
        Fu = Br,
        qu = "__lodash_hash_undefined__",
        Gu = Object.prototype,
        Hu = Gu.hasOwnProperty;

    function Yu(t) {
        var e = this.__data__;
        if (Fu) {
            var r = e[t];
            return r === qu ? void 0 : r
        }
        return Hu.call(e, t) ? e[t] : void 0
    }
    var Wu = Yu,
        zu = Br,
        Ku = Object.prototype,
        Vu = Ku.hasOwnProperty;

    function Ju(t) {
        var e = this.__data__;
        return zu ? e[t] !== void 0 : Vu.call(e, t)
    }
    var Xu = Ju,
        Qu = Br,
        Zu = "__lodash_hash_undefined__";

    function ef(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Qu && e === void 0 ? Zu : e, this
    }
    var tf = ef,
        rf = Uu,
        nf = Bu,
        of = Wu,
        sf = Xu,
        af = tf;

    function It(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    It.prototype.clear = rf;
    It.prototype.delete = nf;
    It.prototype.get = of;
    It.prototype.has = sf;
    It.prototype.set = af;
    var cf = It,
        Ii = cf,
        uf = Ur,
        ff = Yo;

    function lf() {
        this.size = 0, this.__data__ = {
            hash: new Ii,
            map: new(ff || uf),
            string: new Ii
        }
    }
    var pf = lf;

    function df(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var hf = df,
        _f = hf;

    function gf(t, e) {
        var r = t.__data__;
        return _f(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var Fr = gf,
        yf = Fr;

    function vf(t) {
        var e = yf(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var mf = vf,
        bf = Fr;

    function Ef(t) {
        return bf(this, t).get(t)
    }
    var Sf = Ef,
        wf = Fr;

    function Of(t) {
        return wf(this, t).has(t)
    }
    var kf = Of,
        Tf = Fr;

    function Af(t, e) {
        var r = Tf(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var Rf = Af,
        xf = pf,
        Nf = mf,
        If = Sf,
        Lf = kf,
        Pf = Rf;

    function Lt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Lt.prototype.clear = xf;
    Lt.prototype.delete = Nf;
    Lt.prototype.get = If;
    Lt.prototype.has = Lf;
    Lt.prototype.set = Pf;
    var Df = Lt,
        $f = Ur,
        Cf = Yo,
        jf = Df,
        Uf = 200;

    function Mf(t, e) {
        var r = this.__data__;
        if (r instanceof $f) {
            var n = r.__data__;
            if (!Cf || n.length < Uf - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new jf(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var Bf = Mf,
        Ff = Ur,
        qf = kc,
        Gf = Ac,
        Hf = xc,
        Yf = Ic,
        Wf = Bf;

    function Pt(t) {
        var e = this.__data__ = new Ff(t);
        this.size = e.size
    }
    Pt.prototype.clear = qf;
    Pt.prototype.delete = Gf;
    Pt.prototype.get = Hf;
    Pt.prototype.has = Yf;
    Pt.prototype.set = Wf;
    var zf = Pt,
        Kf = Wn,
        Vf = function() {
            try {
                var t = Kf(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        Wo = Vf,
        Li = Wo;

    function Jf(t, e, r) {
        e == "__proto__" && Li ? Li(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var zn = Jf,
        Xf = zn,
        Qf = Cr;

    function Zf(t, e, r) {
        (r !== void 0 && !Qf(t[e], r) || r === void 0 && !(e in t)) && Xf(t, e, r)
    }
    var zo = Zf;

    function el(t) {
        return function(e, r, n) {
            for (var i = -1, o = Object(e), s = n(e), a = s.length; a--;) {
                var u = s[t ? a : ++i];
                if (r(o[u], u, o) === !1) break
            }
            return e
        }
    }
    var tl = el,
        rl = tl,
        nl = rl(),
        il = nl,
        Er = {
            exports: {}
        };
    Er.exports;
    (function(t, e) {
        var r = Nt,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            o = i && i.exports === n,
            s = o ? r.Buffer : void 0,
            a = s ? s.allocUnsafe : void 0;

        function u(f, h) {
            if (h) return f.slice();
            var g = f.length,
                v = a ? a(g) : new f.constructor(g);
            return f.copy(v), v
        }
        t.exports = u
    })(Er, Er.exports);
    var ol = Er.exports,
        sl = Nt,
        al = sl.Uint8Array,
        cl = al,
        Pi = cl;

    function ul(t) {
        var e = new t.constructor(t.byteLength);
        return new Pi(e).set(new Pi(t)), e
    }
    var fl = ul,
        ll = fl;

    function pl(t, e) {
        var r = e ? ll(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var dl = pl;

    function hl(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var _l = hl,
        gl = ot,
        Di = Object.create,
        yl = function() {
            function t() {}
            return function(e) {
                if (!gl(e)) return {};
                if (Di) return Di(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        vl = yl;

    function ml(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var bl = ml,
        El = bl,
        Sl = El(Object.getPrototypeOf, Object),
        Ko = Sl,
        wl = Object.prototype;

    function Ol(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || wl;
        return t === r
    }
    var Vo = Ol,
        kl = vl,
        Tl = Ko,
        Al = Vo;

    function Rl(t) {
        return typeof t.constructor == "function" && !Al(t) ? kl(Tl(t)) : {}
    }
    var xl = Rl;

    function Nl(t) {
        return t != null && typeof t == "object"
    }
    var tr = Nl,
        Il = Mr,
        Ll = tr,
        Pl = "[object Arguments]";

    function Dl(t) {
        return Ll(t) && Il(t) == Pl
    }
    var $l = Dl,
        $i = $l,
        Cl = tr,
        Jo = Object.prototype,
        jl = Jo.hasOwnProperty,
        Ul = Jo.propertyIsEnumerable,
        Ml = $i(function() {
            return arguments
        }()) ? $i : function(t) {
            return Cl(t) && jl.call(t, "callee") && !Ul.call(t, "callee")
        },
        Xo = Ml,
        Bl = Array.isArray,
        Qo = Bl,
        Fl = 9007199254740991;

    function ql(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Fl
    }
    var Zo = ql,
        Gl = Yn,
        Hl = Zo;

    function Yl(t) {
        return t != null && Hl(t.length) && !Gl(t)
    }
    var Kn = Yl,
        Wl = Kn,
        zl = tr;

    function Kl(t) {
        return zl(t) && Wl(t)
    }
    var Vl = Kl,
        Sr = {
            exports: {}
        };

    function Jl() {
        return !1
    }
    var Xl = Jl;
    Sr.exports;
    (function(t, e) {
        var r = Nt,
            n = Xl,
            i = e && !e.nodeType && e,
            o = i && !0 && t && !t.nodeType && t,
            s = o && o.exports === i,
            a = s ? r.Buffer : void 0,
            u = a ? a.isBuffer : void 0,
            f = u || n;
        t.exports = f
    })(Sr, Sr.exports);
    var es = Sr.exports,
        Ql = Mr,
        Zl = Ko,
        ep = tr,
        tp = "[object Object]",
        rp = Function.prototype,
        np = Object.prototype,
        ts = rp.toString,
        ip = np.hasOwnProperty,
        op = ts.call(Object);

    function sp(t) {
        if (!ep(t) || Ql(t) != tp) return !1;
        var e = Zl(t);
        if (e === null) return !0;
        var r = ip.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && ts.call(r) == op
    }
    var ap = sp,
        cp = Mr,
        up = Zo,
        fp = tr,
        lp = "[object Arguments]",
        pp = "[object Array]",
        dp = "[object Boolean]",
        hp = "[object Date]",
        _p = "[object Error]",
        gp = "[object Function]",
        yp = "[object Map]",
        vp = "[object Number]",
        mp = "[object Object]",
        bp = "[object RegExp]",
        Ep = "[object Set]",
        Sp = "[object String]",
        wp = "[object WeakMap]",
        Op = "[object ArrayBuffer]",
        kp = "[object DataView]",
        Tp = "[object Float32Array]",
        Ap = "[object Float64Array]",
        Rp = "[object Int8Array]",
        xp = "[object Int16Array]",
        Np = "[object Int32Array]",
        Ip = "[object Uint8Array]",
        Lp = "[object Uint8ClampedArray]",
        Pp = "[object Uint16Array]",
        Dp = "[object Uint32Array]",
        X = {};
    X[Tp] = X[Ap] = X[Rp] = X[xp] = X[Np] = X[Ip] = X[Lp] = X[Pp] = X[Dp] = !0;
    X[lp] = X[pp] = X[Op] = X[dp] = X[kp] = X[hp] = X[_p] = X[gp] = X[yp] = X[vp] = X[mp] = X[bp] = X[Ep] = X[Sp] = X[wp] = !1;

    function $p(t) {
        return fp(t) && up(t.length) && !!X[cp(t)]
    }
    var Cp = $p;

    function jp(t) {
        return function(e) {
            return t(e)
        }
    }
    var Up = jp,
        wr = {
            exports: {}
        };
    wr.exports;
    (function(t, e) {
        var r = qo,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            o = i && i.exports === n,
            s = o && r.process,
            a = function() {
                try {
                    var u = i && i.require && i.require("util").types;
                    return u || s && s.binding && s.binding("util")
                } catch {}
            }();
        t.exports = a
    })(wr, wr.exports);
    var Mp = wr.exports,
        Bp = Cp,
        Fp = Up,
        Ci = Mp,
        ji = Ci && Ci.isTypedArray,
        qp = ji ? Fp(ji) : Bp,
        rs = qp;

    function Gp(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var ns = Gp,
        Hp = zn,
        Yp = Cr,
        Wp = Object.prototype,
        zp = Wp.hasOwnProperty;

    function Kp(t, e, r) {
        var n = t[e];
        (!(zp.call(t, e) && Yp(n, r)) || r === void 0 && !(e in t)) && Hp(t, e, r)
    }
    var Vp = Kp,
        Jp = Vp,
        Xp = zn;

    function Qp(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, s = e.length; ++o < s;) {
            var a = e[o],
                u = n ? n(r[a], t[a], a, r, t) : void 0;
            u === void 0 && (u = t[a]), i ? Xp(r, a, u) : Jp(r, a, u)
        }
        return r
    }
    var Zp = Qp;

    function ed(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var td = ed,
        rd = 9007199254740991,
        nd = /^(?:0|[1-9]\d*)$/;

    function id(t, e) {
        var r = typeof t;
        return e = e ?? rd, !!e && (r == "number" || r != "symbol" && nd.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var is = id,
        od = td,
        sd = Xo,
        ad = Qo,
        cd = es,
        ud = is,
        fd = rs,
        ld = Object.prototype,
        pd = ld.hasOwnProperty;

    function dd(t, e) {
        var r = ad(t),
            n = !r && sd(t),
            i = !r && !n && cd(t),
            o = !r && !n && !i && fd(t),
            s = r || n || i || o,
            a = s ? od(t.length, String) : [],
            u = a.length;
        for (var f in t)(e || pd.call(t, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || ud(f, u))) && a.push(f);
        return a
    }
    var hd = dd;

    function _d(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var gd = _d,
        yd = ot,
        vd = Vo,
        md = gd,
        bd = Object.prototype,
        Ed = bd.hasOwnProperty;

    function Sd(t) {
        if (!yd(t)) return md(t);
        var e = vd(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !Ed.call(t, n)) || r.push(n);
        return r
    }
    var wd = Sd,
        Od = hd,
        kd = wd,
        Td = Kn;

    function Ad(t) {
        return Td(t) ? Od(t, !0) : kd(t)
    }
    var os = Ad,
        Rd = Zp,
        xd = os;

    function Nd(t) {
        return Rd(t, xd(t))
    }
    var Id = Nd,
        Ui = zo,
        Ld = ol,
        Pd = dl,
        Dd = _l,
        $d = xl,
        Mi = Xo,
        Bi = Qo,
        Cd = Vl,
        jd = es,
        Ud = Yn,
        Md = ot,
        Bd = ap,
        Fd = rs,
        Fi = ns,
        qd = Id;

    function Gd(t, e, r, n, i, o, s) {
        var a = Fi(t, r),
            u = Fi(e, r),
            f = s.get(u);
        if (f) {
            Ui(t, r, f);
            return
        }
        var h = o ? o(a, u, r + "", t, e, s) : void 0,
            g = h === void 0;
        if (g) {
            var v = Bi(u),
                b = !v && jd(u),
                w = !v && !b && Fd(u);
            h = u, v || b || w ? Bi(a) ? h = a : Cd(a) ? h = Dd(a) : b ? (g = !1, h = Ld(u, !0)) : w ? (g = !1, h = Pd(u, !0)) : h = [] : Bd(u) || Mi(u) ? (h = a, Mi(a) ? h = qd(a) : (!Md(a) || Ud(a)) && (h = $d(u))) : g = !1
        }
        g && (s.set(u, h), i(h, u, n, o, s), s.delete(u)), Ui(t, r, h)
    }
    var Hd = Gd,
        Yd = zf,
        Wd = zo,
        zd = il,
        Kd = Hd,
        Vd = ot,
        Jd = os,
        Xd = ns;

    function ss(t, e, r, n, i) {
        t !== e && zd(e, function(o, s) {
            if (i || (i = new Yd), Vd(o)) Kd(t, e, s, r, ss, n, i);
            else {
                var a = n ? n(Xd(t, s), o, s + "", t, e, i) : void 0;
                a === void 0 && (a = o), Wd(t, s, a)
            }
        }, Jd)
    }
    var Qd = ss;

    function Zd(t) {
        return t
    }
    var as = Zd;

    function eh(t, e, r) {
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
    var th = eh,
        rh = th,
        qi = Math.max;

    function nh(t, e, r) {
        return e = qi(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, o = qi(n.length - e, 0), s = Array(o); ++i < o;) s[i] = n[e + i];
                i = -1;
                for (var a = Array(e + 1); ++i < e;) a[i] = n[i];
                return a[e] = r(s), rh(t, this, a)
            }
    }
    var ih = nh;

    function oh(t) {
        return function() {
            return t
        }
    }
    var sh = oh,
        ah = sh,
        Gi = Wo,
        ch = as,
        uh = Gi ? function(t, e) {
            return Gi(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: ah(e),
                writable: !0
            })
        } : ch,
        fh = uh,
        lh = 800,
        ph = 16,
        dh = Date.now;

    function hh(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = dh(),
                i = ph - (n - r);
            if (r = n, i > 0) {
                if (++e >= lh) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var _h = hh,
        gh = fh,
        yh = _h,
        vh = yh(gh),
        mh = vh,
        bh = as,
        Eh = ih,
        Sh = mh;

    function wh(t, e) {
        return Sh(Eh(t, e, bh), t + "")
    }
    var Oh = wh,
        kh = Cr,
        Th = Kn,
        Ah = is,
        Rh = ot;

    function xh(t, e, r) {
        if (!Rh(r)) return !1;
        var n = typeof e;
        return (n == "number" ? Th(r) && Ah(e, r.length) : n == "string" && e in r) ? kh(r[e], t) : !1
    }
    var Nh = xh,
        Ih = Oh,
        Lh = Nh;

    function Ph(t) {
        return Ih(function(e, r) {
            var n = -1,
                i = r.length,
                o = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && Lh(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                var a = r[n];
                a && t(e, a, n, o)
            }
            return e
        })
    }
    var Dh = Ph,
        $h = Qd,
        Ch = Dh;
    Ch(function(t, e, r) {
        $h(t, e, r)
    });
    const pt = class pt {
        static get serverUrl() {
            const e = this.getQueryParam("server") ?? this.getQueryParam("s");
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
            const r = this.sanitizeInput(e).replace(/'/g, "’");
            return this.htmlEscape(r).trim()
        }
        static sanitizeName(e) {
            return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
        }
        static sanitizeInput(e) {
            return e = e.replace("…", "..."), e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
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
            const o = parseInt(i, 16),
                s = Math.min(Math.max(0, (o >> 16) * r), 255),
                a = Math.min(Math.max(0, (o >> 8 & 255) * r), 255);
            let f = (Math.min(Math.max(0, (o & 255) * r), 255) | a << 8 | s << 16).toString(16);
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
        static cyrb128(e) {
            let r = 1779033703,
                n = 3144134277,
                i = 1013904242,
                o = 2773480762;
            for (let s = 0, a; s < e.length; s++) a = e.charCodeAt(s), r = n ^ Math.imul(r ^ a, 597399067), n = i ^ Math.imul(n ^ a, 2869860233), i = o ^ Math.imul(i ^ a, 951274213), o = r ^ Math.imul(o ^ a, 2716044179);
            return r = Math.imul(i ^ r >>> 18, 597399067), n = Math.imul(o ^ n >>> 22, 2869860233), i = Math.imul(r ^ i >>> 17, 951274213), o = Math.imul(n ^ o >>> 19, 2716044179), [(r ^ n ^ i ^ o) >>> 0, (n ^ r) >>> 0, (i ^ r) >>> 0, (o ^ r) >>> 0]
        }
        static sfc32(e, r, n, i) {
            return function() {
                e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0;
                let s = e + r | 0;
                return e = r ^ r >>> 9, r = n + (n << 3) | 0, n = n << 21 | n >>> 11, i = i + 1 | 0, s = s + i | 0, n = n + s | 0, (s >>> 0) / 4294967296
            }
        }
    };
    Se(pt, "queryParams", new URLSearchParams(window.location.search)), Se(pt, "getQueryParam", e => pt.queryParams.get(e)), Se(pt, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    let lt = pt;
    class Or {
        static get namespace() {
            var e;
            return ((e = window.tv.storage) == null ? void 0 : e.namespace) ?? this.defaultNamespace
        }
        static get isDisabled() {
            var e;
            return ((e = window.tv.storage) == null ? void 0 : e.isDisabled) ?? !1
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
            delete window.tv.storage, window.tv.storage = {
                namespace: lt.getQueryParam("namespace") ?? lt.getQueryParam("ns") ?? this.defaultNamespace,
                isDisabled: lt.queryParams.has("incognito") || lt.queryParams.has("nc")
            }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code))
        }
        static get(e, r) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
        }
        static set(e, r, n = "none") {
            if (this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, n), r)
        }
        static remove(e, r) {
            if (this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, r))
        }
        static setTag(e) {
            const r = e.toLowerCase(),
                n = this.get("tags") ?? "[]",
                i = r.split("-")[0];
            let o = JSON.parse(n);
            o = o.filter(s => {
                const a = s.split("-")[0];
                return i !== a
            }), o.push(r), this.set("tags", JSON.stringify(o))
        }
        static getScopedKey(e, r) {
            const n = `${this.namespace}:${e}`,
                i = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
                o = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
            if (r === "none") return n;
            if (r === "tag") {
                if (!i) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
                return i
            }
            if (r === "code") {
                if (!o) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return o
            }
            return o && window.localStorage.getItem(o) !== null ? o : i && window.localStorage.getItem(i) !== null ? i : n
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
            this.isSupported && Object.keys(window.localStorage).forEach(r => {
                const n = r.split(":code:");
                n.length <= 1 || n[1] !== e && window.localStorage.removeItem(r)
            })
        }
    }
    Se(Or, "defaultNamespace", "tv");
    var Hi = {
        exports: {}
    };
    (function(t, e) {
        var r = typeof self < "u" ? self : me,
            n = function() {
                function o() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return o.prototype = r, new o
            }();
        (function(o) {
            (function(s) {
                var a = {
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

                function u(m) {
                    return m && DataView.prototype.isPrototypeOf(m)
                }
                if (a.arrayBuffer) var f = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    h = ArrayBuffer.isView || function(m) {
                        return m && f.indexOf(Object.prototype.toString.call(m)) > -1
                    };

                function g(m) {
                    if (typeof m != "string" && (m = String(m)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(m)) throw new TypeError("Invalid character in header field name");
                    return m.toLowerCase()
                }

                function v(m) {
                    return typeof m != "string" && (m = String(m)), m
                }

                function b(m) {
                    var T = {
                        next: function() {
                            var $ = m.shift();
                            return {
                                done: $ === void 0,
                                value: $
                            }
                        }
                    };
                    return a.iterable && (T[Symbol.iterator] = function() {
                        return T
                    }), T
                }

                function w(m) {
                    this.map = {}, m instanceof w ? m.forEach(function(T, $) {
                        this.append($, T)
                    }, this) : Array.isArray(m) ? m.forEach(function(T) {
                        this.append(T[0], T[1])
                    }, this) : m && Object.getOwnPropertyNames(m).forEach(function(T) {
                        this.append(T, m[T])
                    }, this)
                }
                w.prototype.append = function(m, T) {
                    m = g(m), T = v(T);
                    var $ = this.map[m];
                    this.map[m] = $ ? $ + ", " + T : T
                }, w.prototype.delete = function(m) {
                    delete this.map[g(m)]
                }, w.prototype.get = function(m) {
                    return m = g(m), this.has(m) ? this.map[m] : null
                }, w.prototype.has = function(m) {
                    return this.map.hasOwnProperty(g(m))
                }, w.prototype.set = function(m, T) {
                    this.map[g(m)] = v(T)
                }, w.prototype.forEach = function(m, T) {
                    for (var $ in this.map) this.map.hasOwnProperty($) && m.call(T, this.map[$], $, this)
                }, w.prototype.keys = function() {
                    var m = [];
                    return this.forEach(function(T, $) {
                        m.push($)
                    }), b(m)
                }, w.prototype.values = function() {
                    var m = [];
                    return this.forEach(function(T) {
                        m.push(T)
                    }), b(m)
                }, w.prototype.entries = function() {
                    var m = [];
                    return this.forEach(function(T, $) {
                        m.push([$, T])
                    }), b(m)
                }, a.iterable && (w.prototype[Symbol.iterator] = w.prototype.entries);

                function I(m) {
                    if (m.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    m.bodyUsed = !0
                }

                function L(m) {
                    return new Promise(function(T, $) {
                        m.onload = function() {
                            T(m.result)
                        }, m.onerror = function() {
                            $(m.error)
                        }
                    })
                }

                function J(m) {
                    var T = new FileReader,
                        $ = L(T);
                    return T.readAsArrayBuffer(m), $
                }

                function q(m) {
                    var T = new FileReader,
                        $ = L(T);
                    return T.readAsText(m), $
                }

                function se(m) {
                    for (var T = new Uint8Array(m), $ = new Array(T.length), Y = 0; Y < T.length; Y++) $[Y] = String.fromCharCode(T[Y]);
                    return $.join("")
                }

                function ye(m) {
                    if (m.slice) return m.slice(0);
                    var T = new Uint8Array(m.byteLength);
                    return T.set(new Uint8Array(m)), T.buffer
                }

                function ae() {
                    return this.bodyUsed = !1, this._initBody = function(m) {
                        this._bodyInit = m, m ? typeof m == "string" ? this._bodyText = m : a.blob && Blob.prototype.isPrototypeOf(m) ? this._bodyBlob = m : a.formData && FormData.prototype.isPrototypeOf(m) ? this._bodyFormData = m : a.searchParams && URLSearchParams.prototype.isPrototypeOf(m) ? this._bodyText = m.toString() : a.arrayBuffer && a.blob && u(m) ? (this._bodyArrayBuffer = ye(m.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(m) || h(m)) ? this._bodyArrayBuffer = ye(m) : this._bodyText = m = Object.prototype.toString.call(m) : this._bodyText = "", this.headers.get("content-type") || (typeof m == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(m) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, a.blob && (this.blob = function() {
                        var m = I(this);
                        if (m) return m;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? I(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(J)
                    }), this.text = function() {
                        var m = I(this);
                        if (m) return m;
                        if (this._bodyBlob) return q(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(se(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, a.formData && (this.formData = function() {
                        return this.text().then(G)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var ce = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function he(m) {
                    var T = m.toUpperCase();
                    return ce.indexOf(T) > -1 ? T : m
                }

                function te(m, T) {
                    T = T || {};
                    var $ = T.body;
                    if (m instanceof te) {
                        if (m.bodyUsed) throw new TypeError("Already read");
                        this.url = m.url, this.credentials = m.credentials, T.headers || (this.headers = new w(m.headers)), this.method = m.method, this.mode = m.mode, this.signal = m.signal, !$ && m._bodyInit != null && ($ = m._bodyInit, m.bodyUsed = !0)
                    } else this.url = String(m);
                    if (this.credentials = T.credentials || this.credentials || "same-origin", (T.headers || !this.headers) && (this.headers = new w(T.headers)), this.method = he(T.method || this.method || "GET"), this.mode = T.mode || this.mode || null, this.signal = T.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && $) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody($)
                }
                te.prototype.clone = function() {
                    return new te(this, {
                        body: this._bodyInit
                    })
                };

                function G(m) {
                    var T = new FormData;
                    return m.trim().split("&").forEach(function($) {
                        if ($) {
                            var Y = $.split("="),
                                H = Y.shift().replace(/\+/g, " "),
                                C = Y.join("=").replace(/\+/g, " ");
                            T.append(decodeURIComponent(H), decodeURIComponent(C))
                        }
                    }), T
                }

                function jt(m) {
                    var T = new w,
                        $ = m.replace(/\r?\n[\t ]+/g, " ");
                    return $.split(/\r?\n/).forEach(function(Y) {
                        var H = Y.split(":"),
                            C = H.shift().trim();
                        if (C) {
                            var E = H.join(":").trim();
                            T.append(C, E)
                        }
                    }), T
                }
                ae.call(te.prototype);

                function pe(m, T) {
                    T || (T = {}), this.type = "default", this.status = T.status === void 0 ? 200 : T.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in T ? T.statusText : "OK", this.headers = new w(T.headers), this.url = T.url || "", this._initBody(m)
                }
                ae.call(pe.prototype), pe.prototype.clone = function() {
                    return new pe(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new w(this.headers),
                        url: this.url
                    })
                }, pe.error = function() {
                    var m = new pe(null, {
                        status: 0,
                        statusText: ""
                    });
                    return m.type = "error", m
                };
                var Ke = [301, 302, 303, 307, 308];
                pe.redirect = function(m, T) {
                    if (Ke.indexOf(T) === -1) throw new RangeError("Invalid status code");
                    return new pe(null, {
                        status: T,
                        headers: {
                            location: m
                        }
                    })
                }, s.DOMException = o.DOMException;
                try {
                    new s.DOMException
                } catch {
                    s.DOMException = function(T, $) {
                        this.message = T, this.name = $;
                        var Y = Error(T);
                        this.stack = Y.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function be(m, T) {
                    return new Promise(function($, Y) {
                        var H = new te(m, T);
                        if (H.signal && H.signal.aborted) return Y(new s.DOMException("Aborted", "AbortError"));
                        var C = new XMLHttpRequest;

                        function E() {
                            C.abort()
                        }
                        C.onload = function() {
                            var A = {
                                status: C.status,
                                statusText: C.statusText,
                                headers: jt(C.getAllResponseHeaders() || "")
                            };
                            A.url = "responseURL" in C ? C.responseURL : A.headers.get("X-Request-URL");
                            var x = "response" in C ? C.response : C.responseText;
                            $(new pe(x, A))
                        }, C.onerror = function() {
                            Y(new TypeError("Network request failed"))
                        }, C.ontimeout = function() {
                            Y(new TypeError("Network request failed"))
                        }, C.onabort = function() {
                            Y(new s.DOMException("Aborted", "AbortError"))
                        }, C.open(H.method, H.url, !0), H.credentials === "include" ? C.withCredentials = !0 : H.credentials === "omit" && (C.withCredentials = !1), "responseType" in C && a.blob && (C.responseType = "blob"), H.headers.forEach(function(A, x) {
                            C.setRequestHeader(x, A)
                        }), H.signal && (H.signal.addEventListener("abort", E), C.onreadystatechange = function() {
                            C.readyState === 4 && H.signal.removeEventListener("abort", E)
                        }), C.send(typeof H._bodyInit > "u" ? null : H._bodyInit)
                    })
                }
                return be.polyfill = !0, o.fetch || (o.fetch = be, o.Headers = w, o.Request = te, o.Response = pe), s.Headers = w, s.Request = te, s.Response = pe, s.fetch = be, Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = n;
        e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
    })(Hi, Hi.exports);
    var jh = function() {
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
            var o = Object.getOwnPropertySymbols(e);
            if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var s = Object.getOwnPropertyDescriptor(e, r);
                if (s.value !== i || s.enumerable !== !0) return !1
            }
            return !0
        },
        Yi = typeof Symbol < "u" && Symbol,
        Uh = jh,
        Mh = function() {
            return typeof Yi != "function" || typeof Symbol != "function" || typeof Yi("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Uh()
        },
        Bh = "Function.prototype.bind called on incompatible ",
        rn = Array.prototype.slice,
        Fh = Object.prototype.toString,
        qh = "[object Function]",
        Gh = function(e) {
            var r = this;
            if (typeof r != "function" || Fh.call(r) !== qh) throw new TypeError(Bh + r);
            for (var n = rn.call(arguments, 1), i, o = function() {
                    if (this instanceof i) {
                        var h = r.apply(this, n.concat(rn.call(arguments)));
                        return Object(h) === h ? h : this
                    } else return r.apply(e, n.concat(rn.call(arguments)))
                }, s = Math.max(0, r.length - n.length), a = [], u = 0; u < s; u++) a.push("$" + u);
            if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var f = function() {};
                f.prototype = r.prototype, i.prototype = new f, f.prototype = null
            }
            return i
        },
        Hh = Gh,
        Vn = Function.prototype.bind || Hh,
        Yh = Vn,
        Wh = Yh.call(Function.call, Object.prototype.hasOwnProperty),
        M, Ot = SyntaxError,
        cs = Function,
        ht = TypeError,
        nn = function(t) {
            try {
                return cs('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        Ze = Object.getOwnPropertyDescriptor;
    if (Ze) try {
        Ze({}, "")
    } catch {
        Ze = null
    }
    var on = function() {
            throw new ht
        },
        zh = Ze ? function() {
            try {
                return arguments.callee, on
            } catch {
                try {
                    return Ze(arguments, "callee").get
                } catch {
                    return on
                }
            }
        }() : on,
        at = Mh(),
        Ce = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        ct = {},
        Kh = typeof Uint8Array > "u" ? M : Ce(Uint8Array),
        _t = {
            "%AggregateError%": typeof AggregateError > "u" ? M : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? M : ArrayBuffer,
            "%ArrayIteratorPrototype%": at ? Ce([][Symbol.iterator]()) : M,
            "%AsyncFromSyncIteratorPrototype%": M,
            "%AsyncFunction%": ct,
            "%AsyncGenerator%": ct,
            "%AsyncGeneratorFunction%": ct,
            "%AsyncIteratorPrototype%": ct,
            "%Atomics%": typeof Atomics > "u" ? M : Atomics,
            "%BigInt%": typeof BigInt > "u" ? M : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? M : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? M : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? M : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? M : FinalizationRegistry,
            "%Function%": cs,
            "%GeneratorFunction%": ct,
            "%Int8Array%": typeof Int8Array > "u" ? M : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? M : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? M : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": at ? Ce(Ce([][Symbol.iterator]())) : M,
            "%JSON%": typeof JSON == "object" ? JSON : M,
            "%Map%": typeof Map > "u" ? M : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !at ? M : Ce(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? M : Promise,
            "%Proxy%": typeof Proxy > "u" ? M : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? M : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? M : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !at ? M : Ce(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? M : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": at ? Ce("" [Symbol.iterator]()) : M,
            "%Symbol%": at ? Symbol : M,
            "%SyntaxError%": Ot,
            "%ThrowTypeError%": zh,
            "%TypedArray%": Kh,
            "%TypeError%": ht,
            "%Uint8Array%": typeof Uint8Array > "u" ? M : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? M : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? M : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? M : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? M : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? M : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? M : WeakSet
        },
        Vh = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = nn("async function () {}");
            else if (e === "%GeneratorFunction%") r = nn("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = nn("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var i = t("%AsyncGenerator%");
                i && (r = Ce(i.prototype))
            }
            return _t[e] = r, r
        },
        Wi = {
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
        rr = Vn,
        kr = Wh,
        Jh = rr.call(Function.call, Array.prototype.concat),
        Xh = rr.call(Function.apply, Array.prototype.splice),
        zi = rr.call(Function.call, String.prototype.replace),
        Tr = rr.call(Function.call, String.prototype.slice),
        Qh = rr.call(Function.call, RegExp.prototype.exec),
        Zh = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        e_ = /\\(\\)?/g,
        t_ = function(e) {
            var r = Tr(e, 0, 1),
                n = Tr(e, -1);
            if (r === "%" && n !== "%") throw new Ot("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Ot("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return zi(e, Zh, function(o, s, a, u) {
                i[i.length] = a ? zi(u, e_, "$1") : s || o
            }), i
        },
        r_ = function(e, r) {
            var n = e,
                i;
            if (kr(Wi, n) && (i = Wi[n], n = "%" + i[0] + "%"), kr(_t, n)) {
                var o = _t[n];
                if (o === ct && (o = Vh(n)), typeof o > "u" && !r) throw new ht("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: o
                }
            }
            throw new Ot("intrinsic " + e + " does not exist!")
        },
        Jn = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new ht("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new ht('"allowMissing" argument must be a boolean');
            if (Qh(/^%?[^%]*%?$/g, e) === null) throw new Ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = t_(e),
                i = n.length > 0 ? n[0] : "",
                o = r_("%" + i + "%", r),
                s = o.name,
                a = o.value,
                u = !1,
                f = o.alias;
            f && (i = f[0], Xh(n, Jh([0, 1], f)));
            for (var h = 1, g = !0; h < n.length; h += 1) {
                var v = n[h],
                    b = Tr(v, 0, 1),
                    w = Tr(v, -1);
                if ((b === '"' || b === "'" || b === "`" || w === '"' || w === "'" || w === "`") && b !== w) throw new Ot("property names with quotes must have matching quotes");
                if ((v === "constructor" || !g) && (u = !0), i += "." + v, s = "%" + i + "%", kr(_t, s)) a = _t[s];
                else if (a != null) {
                    if (!(v in a)) {
                        if (!r) throw new ht("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (Ze && h + 1 >= n.length) {
                        var I = Ze(a, v);
                        g = !!I, g && "get" in I && !("originalValue" in I.get) ? a = I.get : a = a[v]
                    } else g = kr(a, v), a = a[v];
                    g && !u && (_t[s] = a)
                }
            }
            return a
        },
        us = {
            exports: {}
        };
    (function(t) {
        var e = Vn,
            r = Jn,
            n = r("%Function.prototype.apply%"),
            i = r("%Function.prototype.call%"),
            o = r("%Reflect.apply%", !0) || e.call(i, n),
            s = r("%Object.getOwnPropertyDescriptor%", !0),
            a = r("%Object.defineProperty%", !0),
            u = r("%Math.max%");
        if (a) try {
            a({}, "a", {
                value: 1
            })
        } catch {
            a = null
        }
        t.exports = function(g) {
            var v = o(e, i, arguments);
            if (s && a) {
                var b = s(v, "length");
                b.configurable && a(v, "length", {
                    value: 1 + u(0, g.length - (arguments.length - 1))
                })
            }
            return v
        };
        var f = function() {
            return o(e, n, arguments)
        };
        a ? a(t.exports, "apply", {
            value: f
        }) : t.exports.apply = f
    })(us);
    var n_ = us.exports,
        fs = Jn,
        ls = n_,
        i_ = ls(fs("String.prototype.indexOf")),
        o_ = function(e, r) {
            var n = fs(e, !!r);
            return typeof n == "function" && i_(e, ".prototype.") > -1 ? ls(n) : n
        },
        Xn = Jn,
        Dt = o_;
    Xn("%TypeError%");
    Xn("%WeakMap%", !0);
    Xn("%Map%", !0);
    Dt("WeakMap.prototype.get", !0);
    Dt("WeakMap.prototype.set", !0);
    Dt("WeakMap.prototype.has", !0);
    Dt("Map.prototype.get", !0);
    Dt("Map.prototype.set", !0);
    Dt("Map.prototype.has", !0);
    var s_ = String.prototype.replace,
        a_ = /%20/g,
        sn = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        ps = {
            default: sn.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return s_.call(t, a_, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: sn.RFC1738,
            RFC3986: sn.RFC3986
        },
        c_ = ps,
        an = Object.prototype.hasOwnProperty,
        Xe = Array.isArray,
        xe = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        u_ = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];
                if (Xe(n)) {
                    for (var i = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && i.push(n[o]);
                    r.obj[r.prop] = i
                }
            }
        },
        ds = function(e, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
            return n
        },
        f_ = function t(e, r, n) {
            if (!r) return e;
            if (typeof r != "object") {
                if (Xe(e)) e.push(r);
                else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !an.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var i = e;
            return Xe(e) && !Xe(r) && (i = ds(e, n)), Xe(e) && Xe(r) ? (r.forEach(function(o, s) {
                if (an.call(e, s)) {
                    var a = e[s];
                    a && typeof a == "object" && o && typeof o == "object" ? e[s] = t(a, o, n) : e.push(o)
                } else e[s] = o
            }), e) : Object.keys(r).reduce(function(o, s) {
                var a = r[s];
                return an.call(o, s) ? o[s] = t(o[s], a, n) : o[s] = a, o
            }, i)
        },
        l_ = function(e, r) {
            return Object.keys(r).reduce(function(n, i) {
                return n[i] = r[i], n
            }, e)
        },
        p_ = function(t, e, r) {
            var n = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        d_ = function(e, r, n, i, o) {
            if (e.length === 0) return e;
            var s = e;
            if (typeof e == "symbol" ? s = Symbol.prototype.toString.call(e) : typeof e != "string" && (s = String(e)), n === "iso-8859-1") return escape(s).replace(/%u[0-9a-f]{4}/gi, function(h) {
                return "%26%23" + parseInt(h.slice(2), 16) + "%3B"
            });
            for (var a = "", u = 0; u < s.length; ++u) {
                var f = s.charCodeAt(u);
                if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || o === c_.RFC1738 && (f === 40 || f === 41)) {
                    a += s.charAt(u);
                    continue
                }
                if (f < 128) {
                    a = a + xe[f];
                    continue
                }
                if (f < 2048) {
                    a = a + (xe[192 | f >> 6] + xe[128 | f & 63]);
                    continue
                }
                if (f < 55296 || f >= 57344) {
                    a = a + (xe[224 | f >> 12] + xe[128 | f >> 6 & 63] + xe[128 | f & 63]);
                    continue
                }
                u += 1, f = 65536 + ((f & 1023) << 10 | s.charCodeAt(u) & 1023), a += xe[240 | f >> 18] + xe[128 | f >> 12 & 63] + xe[128 | f >> 6 & 63] + xe[128 | f & 63]
            }
            return a
        },
        h_ = function(e) {
            for (var r = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], i = 0; i < r.length; ++i)
                for (var o = r[i], s = o.obj[o.prop], a = Object.keys(s), u = 0; u < a.length; ++u) {
                    var f = a[u],
                        h = s[f];
                    typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({
                        obj: s,
                        prop: f
                    }), n.push(h))
                }
            return u_(r), e
        },
        __ = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        g_ = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        y_ = function(e, r) {
            return [].concat(e, r)
        },
        v_ = function(e, r) {
            if (Xe(e)) {
                for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
                return n
            }
            return r(e)
        },
        hs = {
            arrayToObject: ds,
            assign: l_,
            combine: y_,
            compact: h_,
            decode: p_,
            encode: d_,
            isBuffer: g_,
            isRegExp: __,
            maybeMap: v_,
            merge: f_
        },
        m_ = hs,
        _s = ps,
        b_ = Date.prototype.toISOString,
        Ki = _s.default;
    m_.encode, _s.formatters[Ki];
    var E_ = hs;
    E_.decode;
    typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof me < "u" && (me.WebSocket || me.MozWebSocket));
    var gs = {
            exports: {}
        },
        gt = typeof Reflect == "object" ? Reflect : null,
        Vi = gt && typeof gt.apply == "function" ? gt.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        hr;
    gt && typeof gt.ownKeys == "function" ? hr = gt.ownKeys : Object.getOwnPropertySymbols ? hr = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : hr = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function S_(t) {
        console && console.warn && console.warn(t)
    }
    var ys = Number.isNaN || function(e) {
        return e !== e
    };

    function z() {
        z.init.call(this)
    }
    gs.exports = z;
    gs.exports.once = T_;
    z.EventEmitter = z;
    z.prototype._events = void 0;
    z.prototype._eventsCount = 0;
    z.prototype._maxListeners = void 0;
    var Ji = 10;

    function qr(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(z, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Ji
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || ys(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            Ji = t
        }
    });
    z.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    z.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || ys(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function vs(t) {
        return t._maxListeners === void 0 ? z.defaultMaxListeners : t._maxListeners
    }
    z.prototype.getMaxListeners = function() {
        return vs(this)
    };
    z.prototype.emit = function(e) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var i = e === "error",
            o = this._events;
        if (o !== void 0) i = i && o.error === void 0;
        else if (!i) return !1;
        if (i) {
            var s;
            if (r.length > 0 && (s = r[0]), s instanceof Error) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
        }
        var u = o[e];
        if (u === void 0) return !1;
        if (typeof u == "function") Vi(u, this, r);
        else
            for (var f = u.length, h = ws(u, f), n = 0; n < f; ++n) Vi(h[n], this, r);
        return !0
    };

    function ms(t, e, r, n) {
        var i, o, s;
        if (qr(r), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), s === void 0) s = o[e] = r, ++t._eventsCount;
        else if (typeof s == "function" ? s = o[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = vs(t), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, S_(a)
        }
        return t
    }
    z.prototype.addListener = function(e, r) {
        return ms(this, e, r, !1)
    };
    z.prototype.on = z.prototype.addListener;
    z.prototype.prependListener = function(e, r) {
        return ms(this, e, r, !0)
    };

    function w_() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function bs(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = w_.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    z.prototype.once = function(e, r) {
        return qr(r), this.on(e, bs(this, e, r)), this
    };
    z.prototype.prependOnceListener = function(e, r) {
        return qr(r), this.prependListener(e, bs(this, e, r)), this
    };
    z.prototype.removeListener = function(e, r) {
        var n, i, o, s, a;
        if (qr(r), i = this._events, i === void 0) return this;
        if (n = i[e], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === r || n[s].listener === r) {
                    a = n[s].listener, o = s;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : O_(n, o), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r)
        }
        return this
    };
    z.prototype.off = z.prototype.removeListener;
    z.prototype.removeAllListeners = function(e) {
        var r, n, i;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
        if (arguments.length === 0) {
            var o = Object.keys(n),
                s;
            for (i = 0; i < o.length; ++i) s = o[i], s !== "removeListener" && this.removeAllListeners(s);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[e], typeof r == "function") this.removeListener(e, r);
        else if (r !== void 0)
            for (i = r.length - 1; i >= 0; i--) this.removeListener(e, r[i]);
        return this
    };

    function Es(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? k_(i) : ws(i, i.length)
    }
    z.prototype.listeners = function(e) {
        return Es(this, e, !0)
    };
    z.prototype.rawListeners = function(e) {
        return Es(this, e, !1)
    };
    z.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ss.call(t, e)
    };
    z.prototype.listenerCount = Ss;

    function Ss(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    z.prototype.eventNames = function() {
        return this._eventsCount > 0 ? hr(this._events) : []
    };

    function ws(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function O_(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function k_(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function T_(t, e) {
        return new Promise(function(r, n) {
            function i(s) {
                t.removeListener(e, o), n(s)
            }

            function o() {
                typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
            }
            Os(t, e, o, {
                once: !0
            }), e !== "error" && A_(t, i, {
                once: !0
            })
        })
    }

    function A_(t, e, r) {
        typeof t.on == "function" && Os(t, "error", e, r)
    }

    function Os(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }

    function R_(...t) {
        console.log(...t)
    }

    function x_(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Xi = {
        exports: {}
    };
    (function(t, e) {
        (function(r, n) {
            n(e)
        })(me, function(r) {
            var n = typeof window < "u" ? window : typeof me < "u" ? me : typeof self < "u" ? self : {},
                i = function(p, y) {
                    if (y = y.split(":")[0], p = +p, !p) return !1;
                    switch (y) {
                        case "http":
                        case "ws":
                            return p !== 80;
                        case "https":
                        case "wss":
                            return p !== 443;
                        case "ftp":
                            return p !== 21;
                        case "gopher":
                            return p !== 70;
                        case "file":
                            return !1
                    }
                    return p !== 0
                },
                o = Object.prototype.hasOwnProperty,
                s;

            function a(d) {
                try {
                    return decodeURIComponent(d.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function u(d) {
                try {
                    return encodeURIComponent(d)
                } catch {
                    return null
                }
            }

            function f(d) {
                for (var p = /([^=?#&]+)=?([^&]*)/g, y = {}, l; l = p.exec(d);) {
                    var _ = a(l[1]),
                        O = a(l[2]);
                    _ === null || O === null || _ in y || (y[_] = O)
                }
                return y
            }

            function h(d, p) {
                p = p || "";
                var y = [],
                    l, _;
                typeof p != "string" && (p = "?");
                for (_ in d)
                    if (o.call(d, _)) {
                        if (l = d[_], !l && (l === null || l === s || isNaN(l)) && (l = ""), _ = u(_), l = u(l), _ === null || l === null) continue;
                        y.push(_ + "=" + l)
                    } return y.length ? p + y.join("&") : ""
            }
            var g = h,
                v = f,
                b = {
                    stringify: g,
                    parse: v
                },
                w = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                I = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                L = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                J = new RegExp("^" + L + "+");

            function q(d) {
                return (d || "").toString().replace(J, "")
            }
            var se = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(p, y) {
                        return ce(y.protocol) ? p.replace(/\\/g, "/") : p
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                ye = {
                    hash: 1,
                    query: 1
                };

            function ae(d) {
                var p;
                typeof window < "u" ? p = window : typeof n < "u" ? p = n : typeof self < "u" ? p = self : p = {};
                var y = p.location || {};
                d = d || y;
                var l = {},
                    _ = typeof d,
                    O;
                if (d.protocol === "blob:") l = new G(unescape(d.pathname), {});
                else if (_ === "string") {
                    l = new G(d, {});
                    for (O in ye) delete l[O]
                } else if (_ === "object") {
                    for (O in d) O in ye || (l[O] = d[O]);
                    l.slashes === void 0 && (l.slashes = w.test(d.href))
                }
                return l
            }

            function ce(d) {
                return d === "file:" || d === "ftp:" || d === "http:" || d === "https:" || d === "ws:" || d === "wss:"
            }

            function he(d, p) {
                d = q(d), p = p || {};
                var y = I.exec(d),
                    l = y[1] ? y[1].toLowerCase() : "",
                    _ = !!y[2],
                    O = !!y[3],
                    k = 0,
                    R;
                return _ ? O ? (R = y[2] + y[3] + y[4], k = y[2].length + y[3].length) : (R = y[2] + y[4], k = y[2].length) : O ? (R = y[3] + y[4], k = y[3].length) : R = y[4], l === "file:" ? k >= 2 && (R = R.slice(2)) : ce(l) ? R = y[4] : l ? _ && (R = R.slice(2)) : k >= 2 && ce(p.protocol) && (R = y[4]), {
                    protocol: l,
                    slashes: _ || ce(l),
                    slashesCount: k,
                    rest: R
                }
            }

            function te(d, p) {
                if (d === "") return p;
                for (var y = (p || "/").split("/").slice(0, -1).concat(d.split("/")), l = y.length, _ = y[l - 1], O = !1, k = 0; l--;) y[l] === "." ? y.splice(l, 1) : y[l] === ".." ? (y.splice(l, 1), k++) : k && (l === 0 && (O = !0), y.splice(l, 1), k--);
                return O && y.unshift(""), (_ === "." || _ === "..") && y.push(""), y.join("/")
            }

            function G(d, p, y) {
                if (d = q(d), !(this instanceof G)) return new G(d, p, y);
                var l, _, O, k, R, N, ge = se.slice(),
                    ke = typeof p,
                    P = this,
                    Xr = 0;
                for (ke !== "object" && ke !== "string" && (y = p, p = null), y && typeof y != "function" && (y = b.parse), p = ae(p), _ = he(d || "", p), l = !_.protocol && !_.slashes, P.slashes = _.slashes || l && p.slashes, P.protocol = _.protocol || p.protocol || "", d = _.rest, (P.protocol === "file:" || !_.slashes && (_.protocol || _.slashesCount < 2 || !ce(P.protocol))) && (ge[3] = [/(.*)/, "pathname"]); Xr < ge.length; Xr++) {
                    if (k = ge[Xr], typeof k == "function") {
                        d = k(d, P);
                        continue
                    }
                    O = k[0], N = k[1], O !== O ? P[N] = d : typeof O == "string" ? ~(R = d.indexOf(O)) && (typeof k[2] == "number" ? (P[N] = d.slice(0, R), d = d.slice(R + k[2])) : (P[N] = d.slice(R), d = d.slice(0, R))) : (R = O.exec(d)) && (P[N] = R[1], d = d.slice(0, R.index)), P[N] = P[N] || l && k[3] && p[N] || "", k[4] && (P[N] = P[N].toLowerCase())
                }
                y && (P.query = y(P.query)), l && p.slashes && P.pathname.charAt(0) !== "/" && (P.pathname !== "" || p.pathname !== "") && (P.pathname = te(P.pathname, p.pathname)), P.pathname.charAt(0) !== "/" && ce(P.protocol) && (P.pathname = "/" + P.pathname), i(P.port, P.protocol) || (P.host = P.hostname, P.port = ""), P.username = P.password = "", P.auth && (k = P.auth.split(":"), P.username = k[0] || "", P.password = k[1] || ""), P.origin = P.protocol !== "file:" && ce(P.protocol) && P.host ? P.protocol + "//" + P.host : "null", P.href = P.toString()
            }

            function jt(d, p, y) {
                var l = this;
                switch (d) {
                    case "query":
                        typeof p == "string" && p.length && (p = (y || b.parse)(p)), l[d] = p;
                        break;
                    case "port":
                        l[d] = p, i(p, l.protocol) ? p && (l.host = l.hostname + ":" + p) : (l.host = l.hostname, l[d] = "");
                        break;
                    case "hostname":
                        l[d] = p, l.port && (p += ":" + l.port), l.host = p;
                        break;
                    case "host":
                        l[d] = p, /:\d+$/.test(p) ? (p = p.split(":"), l.port = p.pop(), l.hostname = p.join(":")) : (l.hostname = p, l.port = "");
                        break;
                    case "protocol":
                        l.protocol = p.toLowerCase(), l.slashes = !y;
                        break;
                    case "pathname":
                    case "hash":
                        if (p) {
                            var _ = d === "pathname" ? "/" : "#";
                            l[d] = p.charAt(0) !== _ ? _ + p : p
                        } else l[d] = p;
                        break;
                    default:
                        l[d] = p
                }
                for (var O = 0; O < se.length; O++) {
                    var k = se[O];
                    k[4] && (l[k[1]] = l[k[1]].toLowerCase())
                }
                return l.origin = l.protocol !== "file:" && ce(l.protocol) && l.host ? l.protocol + "//" + l.host : "null", l.href = l.toString(), l
            }

            function pe(d) {
                (!d || typeof d != "function") && (d = b.stringify);
                var p, y = this,
                    l = y.protocol;
                l && l.charAt(l.length - 1) !== ":" && (l += ":");
                var _ = l + (y.slashes || ce(y.protocol) ? "//" : "");
                return y.username && (_ += y.username, y.password && (_ += ":" + y.password), _ += "@"), _ += y.host + y.pathname, p = typeof y.query == "object" ? d(y.query) : y.query, p && (_ += p.charAt(0) !== "?" ? "?" + p : p), y.hash && (_ += y.hash), _
            }
            G.prototype = {
                set: jt,
                toString: pe
            }, G.extractProtocol = he, G.location = ae, G.trimLeft = q, G.qs = b;
            var Ke = G;

            function be(d, p) {
                setTimeout(function(y) {
                    return d.call(y)
                }, 4, p)
            }

            function m(d, p) {
                typeof process < "u" && console[d].call(null, p)
            }

            function T(d, p) {
                d === void 0 && (d = []);
                var y = [];
                return d.forEach(function(l) {
                    p(l) || y.push(l)
                }), y
            }

            function $(d, p) {
                d === void 0 && (d = []);
                var y = [];
                return d.forEach(function(l) {
                    p(l) && y.push(l)
                }), y
            }
            var Y = function() {
                this.listeners = {}
            };
            Y.prototype.addEventListener = function(p, y) {
                typeof y == "function" && (Array.isArray(this.listeners[p]) || (this.listeners[p] = []), $(this.listeners[p], function(l) {
                    return l === y
                }).length === 0 && this.listeners[p].push(y))
            }, Y.prototype.removeEventListener = function(p, y) {
                var l = this.listeners[p];
                this.listeners[p] = T(l, function(_) {
                    return _ === y
                })
            }, Y.prototype.dispatchEvent = function(p) {
                for (var y = this, l = [], _ = arguments.length - 1; _-- > 0;) l[_] = arguments[_ + 1];
                var O = p.type,
                    k = this.listeners[O];
                return Array.isArray(k) ? (k.forEach(function(R) {
                    l.length > 0 ? R.apply(y, l) : R.call(y, p)
                }), !0) : !1
            };

            function H(d) {
                var p = d.indexOf("?");
                return p >= 0 ? d.slice(0, p) : d
            }
            var C = function() {
                this.urlMap = {}
            };
            C.prototype.attachWebSocket = function(p, y) {
                var l = H(y),
                    _ = this.urlMap[l];
                if (_ && _.server && _.websockets.indexOf(p) === -1) return _.websockets.push(p), _.server
            }, C.prototype.addMembershipToRoom = function(p, y) {
                var l = this.urlMap[H(p.url)];
                l && l.server && l.websockets.indexOf(p) !== -1 && (l.roomMemberships[y] || (l.roomMemberships[y] = []), l.roomMemberships[y].push(p))
            }, C.prototype.attachServer = function(p, y) {
                var l = H(y),
                    _ = this.urlMap[l];
                if (!_) return this.urlMap[l] = {
                    server: p,
                    websockets: [],
                    roomMemberships: {}
                }, p
            }, C.prototype.serverLookup = function(p) {
                var y = H(p),
                    l = this.urlMap[y];
                if (l) return l.server
            }, C.prototype.websocketsLookup = function(p, y, l) {
                var _ = H(p),
                    O, k = this.urlMap[_];
                if (O = k ? k.websockets : [], y) {
                    var R = k.roomMemberships[y];
                    O = R || []
                }
                return l ? O.filter(function(N) {
                    return N !== l
                }) : O
            }, C.prototype.removeServer = function(p) {
                delete this.urlMap[H(p)]
            }, C.prototype.removeWebSocket = function(p, y) {
                var l = H(y),
                    _ = this.urlMap[l];
                _ && (_.websockets = T(_.websockets, function(O) {
                    return O === p
                }))
            }, C.prototype.removeMembershipFromRoom = function(p, y) {
                var l = this.urlMap[H(p.url)],
                    _ = l.roomMemberships[y];
                l && _ !== null && (l.roomMemberships[y] = T(_, function(O) {
                    return O === p
                }))
            };
            var E = new C,
                A = {
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
                x = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                B = function() {};
            B.prototype.stopPropagation = function() {}, B.prototype.stopImmediatePropagation = function() {}, B.prototype.initEvent = function(p, y, l) {
                p === void 0 && (p = "undefined"), y === void 0 && (y = !1), l === void 0 && (l = !1), this.type = "" + p, this.bubbles = !!y, this.cancelable = !!l
            };
            var F = function(d) {
                    function p(y, l) {
                        if (l === void 0 && (l = {}), d.call(this), !y) throw new TypeError(x.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(x.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var _ = l.bubbles,
                            O = l.cancelable;
                        this.type = "" + y, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = O ? !!O : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(B),
                Ee = function(d) {
                    function p(y, l) {
                        if (l === void 0 && (l = {}), d.call(this), !y) throw new TypeError(x.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(x.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            O = l.cancelable,
                            k = l.data,
                            R = l.origin,
                            N = l.lastEventId,
                            ge = l.ports;
                        this.type = "" + y, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = O ? !!O : !1, this.canncelBubble = !1, this.bubbles = _ ? !!_ : !1, this.origin = "" + R, this.ports = typeof ge > "u" ? null : ge, this.data = typeof k > "u" ? null : k, this.lastEventId = "" + (N || "")
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(B),
                Ve = function(d) {
                    function p(y, l) {
                        if (l === void 0 && (l = {}), d.call(this), !y) throw new TypeError(x.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(x.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            O = l.cancelable,
                            k = l.code,
                            R = l.reason,
                            N = l.wasClean;
                        this.type = "" + y, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = O ? !!O : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1, this.code = typeof k == "number" ? parseInt(k, 10) : 0, this.reason = "" + (R || ""), this.wasClean = N ? !!N : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(B);

            function _e(d) {
                var p = d.type,
                    y = d.target,
                    l = new F(p);
                return y && (l.target = y, l.srcElement = y, l.currentTarget = y), l
            }

            function Je(d) {
                var p = d.type,
                    y = d.origin,
                    l = d.data,
                    _ = d.target,
                    O = new Ee(p, {
                        data: l,
                        origin: y
                    });
                return _ && (O.target = _, O.srcElement = _, O.currentTarget = _), O
            }

            function ve(d) {
                var p = d.code,
                    y = d.reason,
                    l = d.type,
                    _ = d.target,
                    O = d.wasClean;
                O || (O = p === A.CLOSE_NORMAL || p === A.CLOSE_NO_STATUS);
                var k = new Ve(l, {
                    code: p,
                    reason: y,
                    wasClean: O
                });
                return _ && (k.target = _, k.srcElement = _, k.currentTarget = _), k
            }

            function li(d, p, y) {
                d.readyState = re.CLOSING;
                var l = E.serverLookup(d.url),
                    _ = ve({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: y
                    }),
                    O = ve({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: y
                    });
                be(function() {
                    E.removeWebSocket(d, d.url), d.readyState = re.CLOSED, d.dispatchEvent(_), d.dispatchEvent(O), l && l.dispatchEvent(_, l)
                }, d)
            }

            function ga(d, p, y) {
                d.readyState = re.CLOSING;
                var l = E.serverLookup(d.url),
                    _ = ve({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: y,
                        wasClean: !1
                    }),
                    O = ve({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: y,
                        wasClean: !1
                    }),
                    k = _e({
                        type: "error",
                        target: d.target
                    });
                be(function() {
                    E.removeWebSocket(d, d.url), d.readyState = re.CLOSED, d.dispatchEvent(k), d.dispatchEvent(_), d.dispatchEvent(O), l && l.dispatchEvent(_, l)
                }, d)
            }

            function or(d) {
                return Object.prototype.toString.call(d) !== "[object Blob]" && !(d instanceof ArrayBuffer) && (d = String(d)), d
            }
            var Kr = new WeakMap;

            function pi(d) {
                if (Kr.has(d)) return Kr.get(d);
                var p = new Proxy(d, {
                    get: function(l, _) {
                        return _ === "close" ? function(k) {
                            k === void 0 && (k = {});
                            var R = k.code || A.CLOSE_NORMAL,
                                N = k.reason || "";
                            li(p, R, N)
                        } : _ === "send" ? function(k) {
                            k = or(k), d.dispatchEvent(Je({
                                type: "message",
                                data: k,
                                origin: this.url,
                                target: d
                            }))
                        } : _ === "on" ? function(k, R) {
                            d.addEventListener("server::" + k, R)
                        } : _ === "target" ? d : l[_]
                    }
                });
                return Kr.set(d, p), p
            }

            function ya(d) {
                var p = encodeURIComponent(d).match(/%[89ABab]/g);
                return d.length + (p ? p.length : 0)
            }

            function va(d) {
                var p = new Ke(d),
                    y = p.pathname,
                    l = p.protocol,
                    _ = p.hash;
                if (!d) throw new TypeError(x.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (y || (p.pathname = "/"), l === "") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The URL '" + p.toString() + "' is invalid.");
                if (l !== "ws:" && l !== "wss:") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + l + "' is not allowed.");
                if (_ !== "") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + _ + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return p.toString()
            }

            function ma(d) {
                if (d === void 0 && (d = []), !Array.isArray(d) && typeof d != "string") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The subprotocol '" + d.toString() + "' is invalid.");
                typeof d == "string" && (d = [d]);
                var p = d.map(function(l) {
                        return {
                            count: 1,
                            protocol: l
                        }
                    }).reduce(function(l, _) {
                        return l[_.protocol] = (l[_.protocol] || 0) + _.count, l
                    }, {}),
                    y = Object.keys(p).filter(function(l) {
                        return p[l] > 1
                    });
                if (y.length > 0) throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The subprotocol '" + y[0] + "' is duplicated.");
                return d
            }
            var re = function(d) {
                function p(l, _) {
                    d.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = va(l), _ = ma(_), this.protocol = _[0] || "", this.binaryType = "blob", this.readyState = p.CONNECTING;
                    var O = pi(this),
                        k = E.attachWebSocket(O, this.url);
                    be(function() {
                        if (k)
                            if (k.options.verifyClient && typeof k.options.verifyClient == "function" && !k.options.verifyClient()) this.readyState = p.CLOSED, m("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), E.removeWebSocket(O, this.url), this.dispatchEvent(_e({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(ve({
                                type: "close",
                                target: this,
                                code: A.CLOSE_NORMAL
                            }));
                            else {
                                if (k.options.selectProtocol && typeof k.options.selectProtocol == "function") {
                                    var N = k.options.selectProtocol(_),
                                        ge = N !== "",
                                        ke = _.indexOf(N) !== -1;
                                    if (ge && !ke) {
                                        this.readyState = p.CLOSED, m("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), E.removeWebSocket(O, this.url), this.dispatchEvent(_e({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(ve({
                                            type: "close",
                                            target: this,
                                            code: A.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = N
                                }
                                this.readyState = p.OPEN, this.dispatchEvent(_e({
                                    type: "open",
                                    target: this
                                })), k.dispatchEvent(_e({
                                    type: "connection"
                                }), O)
                            }
                        else this.readyState = p.CLOSED, this.dispatchEvent(_e({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ve({
                            type: "close",
                            target: this,
                            code: A.CLOSE_NORMAL
                        })), m("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p;
                var y = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return y.onopen.get = function() {
                    return this._onopen
                }, y.onmessage.get = function() {
                    return this._onmessage
                }, y.onclose.get = function() {
                    return this._onclose
                }, y.onerror.get = function() {
                    return this._onerror
                }, y.onopen.set = function(l) {
                    this.removeEventListener("open", this._onopen), this._onopen = l, this.addEventListener("open", l)
                }, y.onmessage.set = function(l) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = l, this.addEventListener("message", l)
                }, y.onclose.set = function(l) {
                    this.removeEventListener("close", this._onclose), this._onclose = l, this.addEventListener("close", l)
                }, y.onerror.set = function(l) {
                    this.removeEventListener("error", this._onerror), this._onerror = l, this.addEventListener("error", l)
                }, p.prototype.send = function(_) {
                    var O = this;
                    if (this.readyState === p.CLOSING || this.readyState === p.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var k = Je({
                            type: "server::message",
                            origin: this.url,
                            data: or(_)
                        }),
                        R = E.serverLookup(this.url);
                    R && be(function() {
                        O.dispatchEvent(k, _)
                    }, R)
                }, p.prototype.close = function(_, O) {
                    if (_ !== void 0 && (typeof _ != "number" || _ !== 1e3 && (_ < 3e3 || _ > 4999))) throw new TypeError(x.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + _ + " is neither.");
                    if (O !== void 0) {
                        var k = ya(O);
                        if (k > 123) throw new SyntaxError(x.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === p.CLOSING || this.readyState === p.CLOSED)) {
                        var R = pi(this);
                        this.readyState === p.CONNECTING ? ga(R, _ || A.CLOSE_ABNORMAL, O) : li(R, _ || A.CLOSE_NO_STATUS, O)
                    }
                }, Object.defineProperties(p.prototype, y), p
            }(Y);
            re.CONNECTING = 0, re.prototype.CONNECTING = re.CONNECTING, re.OPEN = 1, re.prototype.OPEN = re.OPEN, re.CLOSING = 2, re.prototype.CLOSING = re.CLOSING, re.CLOSED = 3, re.prototype.CLOSED = re.CLOSED;
            var ba = function(d) {
                return d.reduce(function(p, y) {
                    return p.indexOf(y) > -1 ? p : p.concat(y)
                }, [])
            };

            function di() {
                return typeof window < "u" ? window : typeof process == "object" && typeof x_ == "function" && typeof me == "object" ? me : this
            }
            var hi = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                Vr = function(d) {
                    function p(y, l) {
                        l === void 0 && (l = hi), d.call(this);
                        var _ = new Ke(y);
                        _.pathname || (_.pathname = "/"), this.url = _.toString(), this.originalWebSocket = null;
                        var O = E.attachServer(this, this.url);
                        if (!O) throw this.dispatchEvent(_e({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, hi, l), this.options.mock && this.mockWebsocket()
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p.prototype.mockWebsocket = function() {
                        var l = di();
                        this.originalWebSocket = l.WebSocket, l.WebSocket = re
                    }, p.prototype.restoreWebsocket = function() {
                        var l = di();
                        this.originalWebSocket !== null && (l.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, p.prototype.stop = function(l) {
                        l === void 0 && (l = function() {}), this.options.mock && this.restoreWebsocket(), E.removeServer(this.url), typeof l == "function" && l()
                    }, p.prototype.on = function(l, _) {
                        this.addEventListener(l, _)
                    }, p.prototype.close = function(l) {
                        l === void 0 && (l = {});
                        var _ = l.code,
                            O = l.reason,
                            k = l.wasClean,
                            R = E.websocketsLookup(this.url);
                        E.removeServer(this.url), R.forEach(function(N) {
                            N.readyState = re.CLOSED, N.dispatchEvent(ve({
                                type: "close",
                                target: N.target,
                                code: _ || A.CLOSE_NORMAL,
                                reason: O || "",
                                wasClean: k
                            }))
                        }), this.dispatchEvent(ve({
                            type: "close"
                        }), this)
                    }, p.prototype.emit = function(l, _, O) {
                        var k = this;
                        O === void 0 && (O = {});
                        var R = O.websockets;
                        R || (R = E.websocketsLookup(this.url)), typeof O != "object" || arguments.length > 3 ? (_ = Array.prototype.slice.call(arguments, 1, arguments.length), _ = _.map(function(N) {
                            return or(N)
                        })) : _ = or(_), R.forEach(function(N) {
                            Array.isArray(_) ? N.dispatchEvent.apply(N, [Je({
                                type: l,
                                data: _,
                                origin: k.url,
                                target: N.target
                            })].concat(_)) : N.dispatchEvent(Je({
                                type: l,
                                data: _,
                                origin: k.url,
                                target: N.target
                            }))
                        })
                    }, p.prototype.clients = function() {
                        return E.websocketsLookup(this.url)
                    }, p.prototype.to = function(l, _, O) {
                        var k = this;
                        O === void 0 && (O = []);
                        var R = this,
                            N = ba(O.concat(E.websocketsLookup(this.url, l, _)));
                        return {
                            to: function(ge, ke) {
                                return k.to.call(k, ge, ke, N)
                            },
                            emit: function(ke, P) {
                                R.emit(ke, P, {
                                    websockets: N
                                })
                            }
                        }
                    }, p.prototype.in = function() {
                        for (var l = [], _ = arguments.length; _--;) l[_] = arguments[_];
                        return this.to.apply(null, l)
                    }, p.prototype.simulate = function(l) {
                        var _ = E.websocketsLookup(this.url);
                        l === "error" && _.forEach(function(O) {
                            O.readyState = re.CLOSED, O.dispatchEvent(_e({
                                type: "error"
                            }))
                        })
                    }, p
                }(Y);
            Vr.of = function(p) {
                return new Vr(p)
            };
            var Ut = function(d) {
                function p(l, _) {
                    var O = this;
                    l === void 0 && (l = "socket.io"), _ === void 0 && (_ = ""), d.call(this), this.binaryType = "blob";
                    var k = new Ke(l);
                    k.pathname || (k.pathname = "/"), this.url = k.toString(), this.readyState = p.CONNECTING, this.protocol = "", this.target = this, typeof _ == "string" || typeof _ == "object" && _ !== null ? this.protocol = _ : Array.isArray(_) && _.length > 0 && (this.protocol = _[0]);
                    var R = E.attachWebSocket(this, this.url);
                    be(function() {
                        R ? (this.readyState = p.OPEN, R.dispatchEvent(_e({
                            type: "connection"
                        }), R, this), R.dispatchEvent(_e({
                            type: "connect"
                        }), R, this), this.dispatchEvent(_e({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = p.CLOSED, this.dispatchEvent(_e({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(ve({
                            type: "close",
                            target: this,
                            code: A.CLOSE_NORMAL
                        })), m("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(N) {
                        O.dispatchEvent(ve({
                            type: "disconnect",
                            target: N.target,
                            code: N.code
                        }))
                    })
                }
                d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p;
                var y = {
                    broadcast: {}
                };
                return p.prototype.close = function() {
                    if (this.readyState === p.OPEN) {
                        var _ = E.serverLookup(this.url);
                        return E.removeWebSocket(this, this.url), this.readyState = p.CLOSED, this.dispatchEvent(ve({
                            type: "close",
                            target: this,
                            code: A.CLOSE_NORMAL
                        })), _ && _.dispatchEvent(ve({
                            type: "disconnect",
                            target: this,
                            code: A.CLOSE_NORMAL
                        }), _), this
                    }
                }, p.prototype.disconnect = function() {
                    return this.close()
                }, p.prototype.emit = function(_) {
                    for (var O = [], k = arguments.length - 1; k-- > 0;) O[k] = arguments[k + 1];
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var R = Je({
                            type: _,
                            origin: this.url,
                            data: O
                        }),
                        N = E.serverLookup(this.url);
                    return N && N.dispatchEvent.apply(N, [R].concat(O)), this
                }, p.prototype.send = function(_) {
                    return this.emit("message", _), this
                }, y.broadcast.get = function() {
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var l = this,
                        _ = E.serverLookup(this.url);
                    if (!_) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(k, R) {
                            return _.emit(k, R, {
                                websockets: E.websocketsLookup(l.url, null, l)
                            }), l
                        },
                        to: function(k) {
                            return _.to(k, l)
                        },
                        in: function(k) {
                            return _.in(k, l)
                        }
                    }
                }, p.prototype.on = function(_, O) {
                    return this.addEventListener(_, O), this
                }, p.prototype.off = function(_, O) {
                    this.removeEventListener(_, O)
                }, p.prototype.hasListeners = function(_) {
                    var O = this.listeners[_];
                    return Array.isArray(O) ? !!O.length : !1
                }, p.prototype.join = function(_) {
                    E.addMembershipToRoom(this, _)
                }, p.prototype.leave = function(_) {
                    E.removeMembershipFromRoom(this, _)
                }, p.prototype.to = function(_) {
                    return this.broadcast.to(_)
                }, p.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, p.prototype.dispatchEvent = function(_) {
                    for (var O = this, k = [], R = arguments.length - 1; R-- > 0;) k[R] = arguments[R + 1];
                    var N = _.type,
                        ge = this.listeners[N];
                    if (!Array.isArray(ge)) return !1;
                    ge.forEach(function(ke) {
                        k.length > 0 ? ke.apply(O, k) : ke.call(O, _.data ? _.data : _)
                    })
                }, Object.defineProperties(p.prototype, y), p
            }(Y);
            Ut.CONNECTING = 0, Ut.OPEN = 1, Ut.CLOSING = 2, Ut.CLOSED = 3;
            var Jr = function(p, y) {
                return new Ut(p, y)
            };
            Jr.connect = function(p, y) {
                return Jr(p, y)
            };
            var Ea = Vr,
                Sa = re,
                wa = Jr;
            r.Server = Ea, r.WebSocket = Sa, r.SocketIO = wa, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Xi, Xi.exports);
    var N_ = {
        exports: {}
    };
    (function(t) {
        (function() {
            function e(a, u) {
                var f = a.x - u.x,
                    h = a.y - u.y;
                return f * f + h * h
            }

            function r(a, u, f) {
                var h = u.x,
                    g = u.y,
                    v = f.x - h,
                    b = f.y - g;
                if (v !== 0 || b !== 0) {
                    var w = ((a.x - h) * v + (a.y - g) * b) / (v * v + b * b);
                    w > 1 ? (h = f.x, g = f.y) : w > 0 && (h += v * w, g += b * w)
                }
                return v = a.x - h, b = a.y - g, v * v + b * b
            }

            function n(a, u) {
                for (var f = a[0], h = [f], g, v = 1, b = a.length; v < b; v++) g = a[v], e(g, f) > u && (h.push(g), f = g);
                return f !== g && h.push(g), h
            }

            function i(a, u, f, h, g) {
                for (var v = h, b, w = u + 1; w < f; w++) {
                    var I = r(a[w], a[u], a[f]);
                    I > v && (b = w, v = I)
                }
                v > h && (b - u > 1 && i(a, u, b, h, g), g.push(a[b]), f - b > 1 && i(a, b, f, h, g))
            }

            function o(a, u) {
                var f = a.length - 1,
                    h = [a[0]];
                return i(a, 0, f, u, h), h.push(a[f]), h
            }

            function s(a, u, f) {
                if (a.length <= 2) return a;
                var h = u !== void 0 ? u * u : 1;
                return a = f ? a : n(a, h), a = o(a, h), a
            }
            t.exports = s, t.exports.default = s
        })()
    })(N_);
    const ks = Object.prototype.toString;

    function Ts(t) {
        switch (ks.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ct(t, Error)
        }
    }

    function $t(t, e) {
        return ks.call(t) === `[object ${e}]`
    }

    function As(t) {
        return $t(t, "ErrorEvent")
    }

    function Qi(t) {
        return $t(t, "DOMError")
    }

    function I_(t) {
        return $t(t, "DOMException")
    }

    function nt(t) {
        return $t(t, "String")
    }

    function Rs(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function kt(t) {
        return $t(t, "Object")
    }

    function Qn(t) {
        return typeof Event < "u" && Ct(t, Event)
    }

    function L_(t) {
        return typeof Element < "u" && Ct(t, Element)
    }

    function P_(t) {
        return $t(t, "RegExp")
    }

    function Zn(t) {
        return !!(t && t.then && typeof t.then == "function")
    }

    function D_(t) {
        return kt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function $_(t) {
        return typeof t == "number" && t !== t
    }

    function Ct(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function sr(t) {
        return t && t.Math == Math ? t : void 0
    }
    const Oe = typeof globalThis == "object" && sr(globalThis) || typeof window == "object" && sr(window) || typeof self == "object" && sr(self) || typeof global == "object" && sr(global) || function() {
        return this
    }() || {};

    function nr() {
        return Oe
    }

    function ei(t, e, r) {
        const n = r || Oe,
            i = n.__SENTRY__ = n.__SENTRY__ || {};
        return i[t] || (i[t] = e())
    }
    const C_ = nr(),
        j_ = 80;

    function yn(t, e = {}) {
        try {
            let r = t;
            const n = 5,
                i = [];
            let o = 0,
                s = 0;
            const a = " > ",
                u = a.length;
            let f;
            const h = Array.isArray(e) ? e : e.keyAttrs,
                g = !Array.isArray(e) && e.maxStringLength || j_;
            for (; r && o++ < n && (f = U_(r, h), !(f === "html" || o > 1 && s + i.length * u + f.length >= g));) i.push(f), s += f.length, r = r.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function U_(t, e) {
        const r = t,
            n = [];
        let i, o, s, a, u;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        const f = e && e.length ? e.filter(g => r.getAttribute(g)).map(g => [g, r.getAttribute(g)]) : null;
        if (f && f.length) f.forEach(g => {
            n.push(`[${g[0]}="${g[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), i = r.className, i && nt(i))
            for (o = i.split(/\s+/), u = 0; u < o.length; u++) n.push(`.${o[u]}`);
        const h = ["aria-label", "type", "name", "title", "alt"];
        for (u = 0; u < h.length; u++) s = h[u], a = r.getAttribute(s), a && n.push(`[${s}="${a}"]`);
        return n.join("")
    }

    function M_() {
        try {
            return C_.document.location.href
        } catch {
            return ""
        }
    }
    class fe extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    const B_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function F_(t) {
        return t === "http" || t === "https"
    }

    function Gr(t, e = !1) {
        const {
            host: r,
            path: n,
            pass: i,
            port: o,
            projectId: s,
            protocol: a,
            publicKey: u
        } = t;
        return `${a}://${u}${e&&i?`:${i}`:""}@${r}${o?`:${o}`:""}/${n&&`${n}/`}${s}`
    }

    function q_(t) {
        const e = B_.exec(t);
        if (!e) throw new fe(`Invalid Sentry Dsn: ${t}`);
        const [r, n, i = "", o, s = "", a] = e.slice(1);
        let u = "",
            f = a;
        const h = f.split("/");
        if (h.length > 1 && (u = h.slice(0, -1).join("/"), f = h.pop()), f) {
            const g = f.match(/^\d+/);
            g && (f = g[0])
        }
        return xs({
            host: o,
            pass: i,
            path: u,
            projectId: f,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function xs(t) {
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

    function G_(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: e,
            projectId: r,
            protocol: n
        } = t;
        if (["protocol", "publicKey", "host", "projectId"].forEach(o => {
                if (!t[o]) throw new fe(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new fe(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!F_(n)) throw new fe(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new fe(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function H_(t) {
        const e = typeof t == "string" ? q_(t) : xs(t);
        return G_(e), e
    }
    const Y_ = "Sentry Logger ",
        Ar = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function Ns(t) {
        if (!("console" in Oe)) return t();
        const e = Oe.console,
            r = {};
        Ar.forEach(n => {
            const i = e[n] && e[n].__sentry_original__;
            n in e && i && (r[n] = e[n], e[n] = i)
        });
        try {
            return t()
        } finally {
            Object.keys(r).forEach(n => {
                e[n] = r[n]
            })
        }
    }

    function Zi() {
        let t = !1;
        const e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Ar.forEach(r => {
            e[r] = (...n) => {
                t && Ns(() => {
                    Oe.console[r](`${Y_}[${r}]:`, ...n)
                })
            }
        }) : Ar.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let j;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? j = ei("logger", Zi) : j = Zi();

    function Yt(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function eo(t, e) {
        if (!Array.isArray(t)) return "";
        const r = [];
        for (let n = 0; n < t.length; n++) {
            const i = t[n];
            try {
                r.push(String(i))
            } catch {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(e)
    }

    function W_(t, e, r = !1) {
        return nt(t) ? P_(e) ? e.test(t) : nt(e) ? r ? t === e : t.includes(e) : !1 : !1
    }

    function Hr(t, e = [], r = !1) {
        return e.some(n => W_(t, n, r))
    }

    function oe(t, e, r) {
        if (!(e in t)) return;
        const n = t[e],
            i = r(n);
        if (typeof i == "function") try {
            Is(i, n)
        } catch {}
        t[e] = i
    }

    function ti(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function Is(t, e) {
        const r = e.prototype || {};
        t.prototype = e.prototype = r, ti(t, "__sentry_original__", e)
    }

    function ri(t) {
        return t.__sentry_original__
    }

    function z_(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function Ls(t) {
        if (Ts(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...ro(t)
        };
        if (Qn(t)) {
            const e = {
                type: t.type,
                target: to(t.target),
                currentTarget: to(t.currentTarget),
                ...ro(t)
            };
            return typeof CustomEvent < "u" && Ct(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function to(t) {
        try {
            return L_(t) ? yn(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function ro(t) {
        if (typeof t == "object" && t !== null) {
            const e = {};
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function K_(t, e = 40) {
        const r = Object.keys(Ls(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return Yt(r[0], e);
        for (let n = r.length; n > 0; n--) {
            const i = r.slice(0, n).join(", ");
            if (!(i.length > e)) return n === r.length ? i : Yt(i, e)
        }
        return ""
    }

    function ni(t) {
        return vn(t, new Map)
    }

    function vn(t, e) {
        if (kt(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = {};
            e.set(t, n);
            for (const i of Object.keys(t)) typeof t[i] < "u" && (n[i] = vn(t[i], e));
            return n
        }
        if (Array.isArray(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = [];
            return e.set(t, n), t.forEach(i => {
                n.push(vn(i, e))
            }), n
        }
        return t
    }
    const Ps = 50,
        no = /\(error: (.*)\)/;

    function Ds(...t) {
        const e = t.sort((r, n) => r[0] - n[0]).map(r => r[1]);
        return (r, n = 0) => {
            const i = [],
                o = r.split(`
`);
            for (let s = n; s < o.length; s++) {
                const a = o[s];
                if (a.length > 1024) continue;
                const u = no.test(a) ? a.replace(no, "$1") : a;
                if (!u.match(/\S*Error: /)) {
                    for (const f of e) {
                        const h = f(u);
                        if (h) {
                            i.push(h);
                            break
                        }
                    }
                    if (i.length >= Ps) break
                }
            }
            return J_(i)
        }
    }

    function V_(t) {
        return Array.isArray(t) ? Ds(...t) : t
    }

    function J_(t) {
        if (!t.length) return [];
        const e = t.slice(0, Ps),
            r = e[e.length - 1].function;
        r && /sentryWrapped/.test(r) && e.pop(), e.reverse();
        const n = e[e.length - 1].function;
        return n && /captureMessage|captureException/.test(n) && e.pop(), e.map(i => ({
            ...i,
            filename: i.filename || e[e.length - 1].filename,
            function: i.function || "?"
        }))
    }
    const cn = "<anonymous>";

    function Ye(t) {
        try {
            return !t || typeof t != "function" ? cn : t.name || cn
        } catch {
            return cn
        }
    }
    const mn = nr();

    function $s() {
        if (!("fetch" in mn)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch {
            return !1
        }
    }

    function bn(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function X_() {
        if (!$s()) return !1;
        if (bn(mn.fetch)) return !0;
        let t = !1;
        const e = mn.document;
        if (e && typeof e.createElement == "function") try {
            const r = e.createElement("iframe");
            r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = bn(r.contentWindow.fetch)), e.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return t
    }
    const ar = nr();

    function Q_() {
        const t = ar.chrome,
            e = t && t.app && t.app.runtime,
            r = "history" in ar && !!ar.history.pushState && !!ar.history.replaceState;
        return !e && r
    }
    const Z = nr(),
        qt = "__sentry_xhr_v2__",
        Wt = {},
        io = {};

    function Z_(t) {
        if (!io[t]) switch (io[t] = !0, t) {
            case "console":
                eg();
                break;
            case "dom":
                cg();
                break;
            case "xhr":
                ng();
                break;
            case "fetch":
                tg();
                break;
            case "history":
                ig();
                break;
            case "error":
                ug();
                break;
            case "unhandledrejection":
                fg();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("unknown instrumentation type:", t);
                return
        }
    }

    function Ue(t, e) {
        Wt[t] = Wt[t] || [], Wt[t].push(e), Z_(t)
    }

    function Re(t, e) {
        if (!(!t || !Wt[t]))
            for (const r of Wt[t] || []) try {
                r(e)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Ye(r)}
Error:`, n)
            }
    }

    function eg() {
        "console" in Z && Ar.forEach(function(t) {
            t in Z.console && oe(Z.console, t, function(e) {
                return function(...r) {
                    Re("console", {
                        args: r,
                        level: t
                    }), e && e.apply(Z.console, r)
                }
            })
        })
    }

    function tg() {
        X_() && oe(Z, "fetch", function(t) {
            return function(...e) {
                const {
                    method: r,
                    url: n
                } = rg(e), i = {
                    args: e,
                    fetchData: {
                        method: r,
                        url: n
                    },
                    startTimestamp: Date.now()
                };
                return Re("fetch", {
                    ...i
                }), t.apply(Z, e).then(o => (Re("fetch", {
                    ...i,
                    endTimestamp: Date.now(),
                    response: o
                }), o), o => {
                    throw Re("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        error: o
                    }), o
                })
            }
        })
    }

    function En(t, e) {
        return !!t && typeof t == "object" && !!t[e]
    }

    function oo(t) {
        return typeof t == "string" ? t : t ? En(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
    }

    function rg(t) {
        if (t.length === 0) return {
            method: "GET",
            url: ""
        };
        if (t.length === 2) {
            const [r, n] = t;
            return {
                url: oo(r),
                method: En(n, "method") ? String(n.method).toUpperCase() : "GET"
            }
        }
        const e = t[0];
        return {
            url: oo(e),
            method: En(e, "method") ? String(e.method).toUpperCase() : "GET"
        }
    }

    function ng() {
        if (!("XMLHttpRequest" in Z)) return;
        const t = XMLHttpRequest.prototype;
        oe(t, "open", function(e) {
            return function(...r) {
                const n = r[1],
                    i = this[qt] = {
                        method: nt(r[0]) ? r[0].toUpperCase() : r[0],
                        url: r[1],
                        request_headers: {}
                    };
                nt(n) && i.method === "POST" && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const o = () => {
                    const s = this[qt];
                    if (s && this.readyState === 4) {
                        try {
                            s.status_code = this.status
                        } catch {}
                        Re("xhr", {
                            args: r,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: this
                        })
                    }
                };
                return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? oe(this, "onreadystatechange", function(s) {
                    return function(...a) {
                        return o(), s.apply(this, a)
                    }
                }) : this.addEventListener("readystatechange", o), oe(this, "setRequestHeader", function(s) {
                    return function(...a) {
                        const [u, f] = a, h = this[qt];
                        return h && (h.request_headers[u.toLowerCase()] = f), s.apply(this, a)
                    }
                }), e.apply(this, r)
            }
        }), oe(t, "send", function(e) {
            return function(...r) {
                const n = this[qt];
                return n && r[0] !== void 0 && (n.body = r[0]), Re("xhr", {
                    args: r,
                    startTimestamp: Date.now(),
                    xhr: this
                }), e.apply(this, r)
            }
        })
    }
    let cr;

    function ig() {
        if (!Q_()) return;
        const t = Z.onpopstate;
        Z.onpopstate = function(...r) {
            const n = Z.location.href,
                i = cr;
            if (cr = n, Re("history", {
                    from: i,
                    to: n
                }), t) try {
                return t.apply(this, r)
            } catch {}
        };

        function e(r) {
            return function(...n) {
                const i = n.length > 2 ? n[2] : void 0;
                if (i) {
                    const o = cr,
                        s = String(i);
                    cr = s, Re("history", {
                        from: o,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        oe(Z.history, "pushState", e), oe(Z.history, "replaceState", e)
    }
    const og = 1e3;
    let ur, fr;

    function sg(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function ag(t) {
        if (t.type !== "keypress") return !1;
        try {
            const e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function so(t, e = !1) {
        return r => {
            if (!r || fr === r || ag(r)) return;
            const n = r.type === "keypress" ? "input" : r.type;
            ur === void 0 ? (t({
                event: r,
                name: n,
                global: e
            }), fr = r) : sg(fr, r) && (t({
                event: r,
                name: n,
                global: e
            }), fr = r), clearTimeout(ur), ur = Z.setTimeout(() => {
                ur = void 0
            }, og)
        }
    }

    function cg() {
        if (!("document" in Z)) return;
        const t = Re.bind(null, "dom"),
            e = so(t, !0);
        Z.document.addEventListener("click", e, !1), Z.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
            const n = Z[r] && Z[r].prototype;
            !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (oe(n, "addEventListener", function(i) {
                return function(o, s, a) {
                    if (o === "click" || o == "keypress") try {
                        const u = this,
                            f = u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {},
                            h = f[o] = f[o] || {
                                refCount: 0
                            };
                        if (!h.handler) {
                            const g = so(t);
                            h.handler = g, i.call(this, o, g, a)
                        }
                        h.refCount++
                    } catch {}
                    return i.call(this, o, s, a)
                }
            }), oe(n, "removeEventListener", function(i) {
                return function(o, s, a) {
                    if (o === "click" || o == "keypress") try {
                        const u = this,
                            f = u.__sentry_instrumentation_handlers__ || {},
                            h = f[o];
                        h && (h.refCount--, h.refCount <= 0 && (i.call(this, o, h.handler, a), h.handler = void 0, delete f[o]), Object.keys(f).length === 0 && delete u.__sentry_instrumentation_handlers__)
                    } catch {}
                    return i.call(this, o, s, a)
                }
            }))
        })
    }
    let lr = null;

    function ug() {
        lr = Z.onerror, Z.onerror = function(t, e, r, n, i) {
            return Re("error", {
                column: n,
                error: i,
                line: r,
                msg: t,
                url: e
            }), lr && !lr.__SENTRY_LOADER__ ? lr.apply(this, arguments) : !1
        }, Z.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    let pr = null;

    function fg() {
        pr = Z.onunhandledrejection, Z.onunhandledrejection = function(t) {
            return Re("unhandledrejection", t), pr && !pr.__SENTRY_LOADER__ ? pr.apply(this, arguments) : !0
        }, Z.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }

    function lg() {
        const t = typeof WeakSet == "function",
            e = t ? new WeakSet : [];

        function r(i) {
            if (t) return e.has(i) ? !0 : (e.add(i), !1);
            for (let o = 0; o < e.length; o++)
                if (e[o] === i) return !0;
            return e.push(i), !1
        }

        function n(i) {
            if (t) e.delete(i);
            else
                for (let o = 0; o < e.length; o++)
                    if (e[o] === i) {
                        e.splice(o, 1);
                        break
                    }
        }
        return [r, n]
    }

    function yt() {
        const t = Oe,
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        const r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function Cs(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function Me(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        const n = Cs(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function Sn(t, e, r) {
        const n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            o = i[0] = i[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = r || "Error")
    }

    function Vt(t, e) {
        const r = Cs(t);
        if (!r) return;
        const n = {
                type: "generic",
                handled: !0
            },
            i = r.mechanism;
        if (r.mechanism = {
                ...n,
                ...i,
                ...e
            }, e && "data" in e) {
            const o = {
                ...i && i.data,
                ...e.data
            };
            r.mechanism.data = o
        }
    }

    function ao(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            ti(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function js(t) {
        return Array.isArray(t) ? t : [t]
    }

    function pg() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function dg() {
        return "npm"
    }

    function hg() {
        return !pg() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function _g(t, e) {
        return t.require(e)
    }

    function je(t, e = 100, r = 1 / 0) {
        try {
            return wn("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function Us(t, e = 3, r = 100 * 1024) {
        const n = je(t, e);
        return mg(n) > r ? Us(t, e - 1, r) : n
    }

    function wn(t, e, r = 1 / 0, n = 1 / 0, i = lg()) {
        const [o, s] = i;
        if (e == null || ["number", "boolean", "string"].includes(typeof e) && !$_(e)) return e;
        const a = gg(t, e);
        if (!a.startsWith("[object ")) return a;
        if (e.__sentry_skip_normalization__) return e;
        const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : r;
        if (u === 0) return a.replace("object ", "");
        if (o(e)) return "[Circular ~]";
        const f = e;
        if (f && typeof f.toJSON == "function") try {
            const b = f.toJSON();
            return wn("", b, u - 1, n, i)
        } catch {}
        const h = Array.isArray(e) ? [] : {};
        let g = 0;
        const v = Ls(e);
        for (const b in v) {
            if (!Object.prototype.hasOwnProperty.call(v, b)) continue;
            if (g >= n) {
                h[b] = "[MaxProperties ~]";
                break
            }
            const w = v[b];
            h[b] = wn(b, w, u - 1, n, i), g++
        }
        return s(e), h
    }

    function gg(t, e) {
        try {
            if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
            if (t === "domainEmitter") return "[DomainEmitter]";
            if (typeof global < "u" && e === global) return "[Global]";
            if (typeof window < "u" && e === window) return "[Window]";
            if (typeof document < "u" && e === document) return "[Document]";
            if (D_(e)) return "[SyntheticEvent]";
            if (typeof e == "number" && e !== e) return "[NaN]";
            if (typeof e == "function") return `[Function: ${Ye(e)}]`;
            if (typeof e == "symbol") return `[${String(e)}]`;
            if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
            const r = yg(e);
            return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function yg(t) {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : "null prototype"
    }

    function vg(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function mg(t) {
        return vg(JSON.stringify(t))
    }
    var Le;
    (function(t) {
        t[t.PENDING = 0] = "PENDING";
        const r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        const n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(Le || (Le = {}));

    function it(t) {
        return new de(e => {
            e(t)
        })
    }

    function Rr(t) {
        return new de((e, r) => {
            r(t)
        })
    }
    class de {
        __init() {
            this._state = Le.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(e) {
            de.prototype.__init.call(this), de.prototype.__init2.call(this), de.prototype.__init3.call(this), de.prototype.__init4.call(this), de.prototype.__init5.call(this), de.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(e, r) {
            return new de((n, i) => {
                this._handlers.push([!1, o => {
                    if (!e) n(o);
                    else try {
                        n(e(o))
                    } catch (s) {
                        i(s)
                    }
                }, o => {
                    if (!r) i(o);
                    else try {
                        n(r(o))
                    } catch (s) {
                        i(s)
                    }
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(r => r, e)
        } finally(e) {
            return new de((r, n) => {
                let i, o;
                return this.then(s => {
                    o = !1, i = s, e && e()
                }, s => {
                    o = !0, i = s, e && e()
                }).then(() => {
                    if (o) {
                        n(i);
                        return
                    }
                    r(i)
                })
            })
        }
        __init3() {
            this._resolve = e => {
                this._setResult(Le.RESOLVED, e)
            }
        }
        __init4() {
            this._reject = e => {
                this._setResult(Le.REJECTED, e)
            }
        }
        __init5() {
            this._setResult = (e, r) => {
                if (this._state === Le.PENDING) {
                    if (Zn(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === Le.PENDING) return;
                const e = this._handlers.slice();
                this._handlers = [], e.forEach(r => {
                    r[0] || (this._state === Le.RESOLVED && r[1](this._value), this._state === Le.REJECTED && r[2](this._value), r[0] = !0)
                })
            }
        }
    }

    function bg(t) {
        const e = [];

        function r() {
            return t === void 0 || e.length < t
        }

        function n(s) {
            return e.splice(e.indexOf(s), 1)[0]
        }

        function i(s) {
            if (!r()) return Rr(new fe("Not adding Promise because buffer limit was reached."));
            const a = s();
            return e.indexOf(a) === -1 && e.push(a), a.then(() => n(a)).then(null, () => n(a).then(null, () => {})), a
        }

        function o(s) {
            return new de((a, u) => {
                let f = e.length;
                if (!f) return a(!0);
                const h = setTimeout(() => {
                    s && s > 0 && a(!1)
                }, s);
                e.forEach(g => {
                    it(g).then(() => {
                        --f || (clearTimeout(h), a(!0))
                    }, u)
                })
            })
        }
        return {
            $: e,
            add: i,
            drain: o
        }
    }

    function un(t) {
        if (!t) return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        const r = e[6] || "",
            n = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            search: r,
            hash: n,
            relative: e[5] + r + n
        }
    }
    const Eg = ["fatal", "error", "warning", "log", "info", "debug"];

    function Sg(t) {
        return t === "warn" ? "warning" : Eg.includes(t) ? t : "log"
    }
    const Ms = nr(),
        On = {
            nowSeconds: () => Date.now() / 1e3
        };

    function wg() {
        const {
            performance: t
        } = Ms;
        if (!t || !t.now) return;
        const e = Date.now() - t.now();
        return {
            now: () => t.now(),
            timeOrigin: e
        }
    }

    function Og() {
        try {
            return _g(_a, "perf_hooks").performance
        } catch {
            return
        }
    }
    const fn = hg() ? Og() : wg(),
        co = fn === void 0 ? On : {
            nowSeconds: () => (fn.timeOrigin + fn.now()) / 1e3
        },
        Yr = On.nowSeconds.bind(On),
        Bs = co.nowSeconds.bind(co);
    (() => {
        const {
            performance: t
        } = Ms;
        if (!t || !t.now) return;
        const e = 3600 * 1e3,
            r = t.now(),
            n = Date.now(),
            i = t.timeOrigin ? Math.abs(t.timeOrigin + r - n) : e,
            o = i < e,
            s = t.timing && t.timing.navigationStart,
            u = typeof s == "number" ? Math.abs(s + r - n) : e,
            f = u < e;
        return o || f ? i <= u ? t.timeOrigin : s : n
    })();

    function ir(t, e = []) {
        return [t, e]
    }

    function kg(t, e) {
        const [r, n] = t;
        return [r, [...n, e]]
    }

    function uo(t, e) {
        const r = t[1];
        for (const n of r) {
            const i = n[0].type;
            if (e(n, i)) return !0
        }
        return !1
    }

    function kn(t, e) {
        return (e || new TextEncoder).encode(t)
    }

    function Tg(t, e) {
        const [r, n] = t;
        let i = JSON.stringify(r);

        function o(s) {
            typeof i == "string" ? i = typeof s == "string" ? i + s : [kn(i, e), s] : i.push(typeof s == "string" ? kn(s, e) : s)
        }
        for (const s of n) {
            const [a, u] = s;
            if (o(`
${JSON.stringify(a)}
`), typeof u == "string" || u instanceof Uint8Array) o(u);
            else {
                let f;
                try {
                    f = JSON.stringify(u)
                } catch {
                    f = JSON.stringify(je(u))
                }
                o(f)
            }
        }
        return typeof i == "string" ? i : Ag(i)
    }

    function Ag(t) {
        const e = t.reduce((i, o) => i + o.length, 0),
            r = new Uint8Array(e);
        let n = 0;
        for (const i of t) r.set(i, n), n += i.length;
        return r
    }

    function Rg(t, e) {
        const r = typeof t.data == "string" ? kn(t.data, e) : t.data;
        return [ni({
            type: "attachment",
            length: r.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), r]
    }
    const xg = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor"
    };

    function fo(t) {
        return xg[t]
    }

    function Fs(t) {
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

    function Ng(t, e, r, n) {
        const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!r && {
                dsn: Gr(n)
            },
            ...i && {
                trace: ni({
                    ...i
                })
            }
        }
    }

    function Ig(t, e, r) {
        const n = [{
            type: "client_report"
        }, {
            timestamp: r || Yr(),
            discarded_events: t
        }];
        return ir(e ? {
            dsn: e
        } : {}, [n])
    }
    const Lg = 60 * 1e3;

    function Pg(t, e = Date.now()) {
        const r = parseInt(`${t}`, 10);
        if (!isNaN(r)) return r * 1e3;
        const n = Date.parse(`${t}`);
        return isNaN(n) ? Lg : n - e
    }

    function Dg(t, e) {
        return t[e] || t.all || 0
    }

    function $g(t, e, r = Date.now()) {
        return Dg(t, e) > r
    }

    function Cg(t, {
        statusCode: e,
        headers: r
    }, n = Date.now()) {
        const i = {
                ...t
            },
            o = r && r["x-sentry-rate-limits"],
            s = r && r["retry-after"];
        if (o)
            for (const a of o.trim().split(",")) {
                const [u, f] = a.split(":", 2), h = parseInt(u, 10), g = (isNaN(h) ? 60 : h) * 1e3;
                if (!f) i.all = n + g;
                else
                    for (const v of f.split(";")) i[v] = n + g
            } else s ? i.all = n + Pg(s, n) : e === 429 && (i.all = n + 60 * 1e3);
        return i
    }
    const qs = "production";

    function jg(t) {
        const e = Bs(),
            r = {
                sid: yt(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => Mg(r)
            };
        return t && Tt(r, t), r
    }

    function Tt(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Bs(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : yt()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            const r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function Ug(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), Tt(t, r)
    }

    function Mg(t) {
        return ni({
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
    const Bg = 100;
    class et {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            const r = new et;
            return e && (r._breadcrumbs = [...e._breadcrumbs], r._tags = {
                ...e._tags
            }, r._extra = {
                ...e._extra
            }, r._contexts = {
                ...e._contexts
            }, r._user = e._user, r._level = e._level, r._span = e._span, r._session = e._session, r._transactionName = e._transactionName, r._fingerprint = e._fingerprint, r._eventProcessors = [...e._eventProcessors], r._requestSession = e._requestSession, r._attachments = [...e._attachments], r._sdkProcessingMetadata = {
                ...e._sdkProcessingMetadata
            }), r
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this
        }
        setUser(e) {
            return this._user = e || {}, this._session && Tt(this._session, {
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
            return r === null ? delete this._contexts[e] : this._contexts[e] = r, this._notifyScopeListeners(), this
        }
        setSpan(e) {
            return this._span = e, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            const e = this.getSpan();
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
                const r = e(this);
                return r instanceof et ? r : this
            }
            return e instanceof et ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : kt(e) && (e = e, this._tags = {
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
            const n = typeof r == "number" ? r : Bg;
            if (n <= 0) return this;
            const i = {
                timestamp: Yr(),
                ...e
            };
            return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
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
                const n = this._span.transaction;
                if (n) {
                    e.sdkProcessingMetadata = {
                        dynamicSamplingContext: n.getDynamicSamplingContext(),
                        ...e.sdkProcessingMetadata
                    };
                    const i = n.name;
                    i && (e.tags = {
                        transaction: i,
                        ...e.tags
                    })
                }
            }
            return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            }, this._notifyEventProcessors([...Gs(), ...this._eventProcessors], e, r)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        _notifyEventProcessors(e, r, n, i = 0) {
            return new de((o, s) => {
                const a = e[i];
                if (r === null || typeof a != "function") o(r);
                else {
                    const u = a({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && u === null && j.log(`Event processor "${a.id}" dropped event`), Zn(u) ? u.then(f => this._notifyEventProcessors(e, f, n, i + 1).then(o)).then(null, s) : this._notifyEventProcessors(e, u, n, i + 1).then(o).then(null, s)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? js(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function Gs() {
        return ei("globalEventProcessors", () => [])
    }

    function ii(t) {
        Gs().push(t)
    }
    const Hs = 4,
        Fg = 100;
    class Ys {
        constructor(e, r = new et, n = Hs) {
            this._version = n, this._stack = [{
                scope: r
            }], e && this.bindClient(e)
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            const r = this.getStackTop();
            r.client = e, e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            const e = et.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }), e
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(e) {
            const r = this.pushScope();
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
            const n = this._lastEventId = r && r.event_id ? r.event_id : yt(),
                i = new Error("Sentry syntheticException");
            return this._withClient((o, s) => {
                o.captureException(e, {
                    originalException: e,
                    syntheticException: i,
                    ...r,
                    event_id: n
                }, s)
            }), n
        }
        captureMessage(e, r, n) {
            const i = this._lastEventId = n && n.event_id ? n.event_id : yt(),
                o = new Error(e);
            return this._withClient((s, a) => {
                s.captureMessage(e, r, {
                    originalException: e,
                    syntheticException: o,
                    ...n,
                    event_id: i
                }, a)
            }), i
        }
        captureEvent(e, r) {
            const n = r && r.event_id ? r.event_id : yt();
            return e.type || (this._lastEventId = n), this._withClient((i, o) => {
                i.captureEvent(e, {
                    ...r,
                    event_id: n
                }, o)
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
            if (!i) return;
            const {
                beforeBreadcrumb: o = null,
                maxBreadcrumbs: s = Fg
            } = i.getOptions && i.getOptions() || {};
            if (s <= 0) return;
            const u = {
                    timestamp: Yr(),
                    ...e
                },
                f = o ? Ns(() => o(u, r)) : u;
            f !== null && (i.emit && i.emit("beforeAddBreadcrumb", f, r), n.addBreadcrumb(f, s))
        }
        setUser(e) {
            this.getScope().setUser(e)
        }
        setTags(e) {
            this.getScope().setTags(e)
        }
        setExtras(e) {
            this.getScope().setExtras(e)
        }
        setTag(e, r) {
            this.getScope().setTag(e, r)
        }
        setExtra(e, r) {
            this.getScope().setExtra(e, r)
        }
        setContext(e, r) {
            this.getScope().setContext(e, r)
        }
        configureScope(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            n && e(r)
        }
        run(e) {
            const r = lo(this);
            try {
                e(this)
            } finally {
                lo(r)
            }
        }
        getIntegration(e) {
            const r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(e)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
            }
        }
        startTransaction(e, r) {
            const n = this._callExtensionMethod("startTransaction", e, r);
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && !n && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), n
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(e = !1) {
            if (e) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            const r = this.getStackTop().scope,
                n = r.getSession();
            n && Ug(n), this._sendSessionUpdate(), r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: o = qs
            } = n && n.getOptions() || {}, {
                userAgent: s
            } = Oe.navigator || {}, a = jg({
                release: i,
                environment: o,
                user: r.getUser(),
                ...s && {
                    userAgent: s
                },
                ...e
            }), u = r.getSession && r.getSession();
            return u && u.status === "ok" && Tt(u, {
                status: "exited"
            }), this.endSession(), r.setSession(a), a
        }
        shouldSendDefaultPii() {
            const e = this.getClient(),
                r = e && e.getOptions();
            return !!(r && r.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {
                scope: e,
                client: r
            } = this.getStackTop(), n = e.getSession();
            n && r && r.captureSession && r.captureSession(n)
        }
        _withClient(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            n && e(n, r)
        }
        _callExtensionMethod(e, ...r) {
            const i = Wr().__SENTRY__;
            if (i && i.extensions && typeof i.extensions[e] == "function") return i.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Wr() {
        return Oe.__SENTRY__ = Oe.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, Oe
    }

    function lo(t) {
        const e = Wr(),
            r = Tn(e);
        return Ws(e, t), r
    }

    function ie() {
        const t = Wr();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            const e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return qg(t)
    }

    function qg(t = Wr()) {
        return (!Gg(t) || Tn(t).isOlderThan(Hs)) && Ws(t, new Ys), Tn(t)
    }

    function Gg(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function Tn(t) {
        return ei("hub", () => new Ys, t)
    }

    function Ws(t, e) {
        if (!t) return !1;
        const r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function Hg(t, e) {
        return ie().captureException(t, {
            captureContext: e
        })
    }

    function Yg(t, e) {
        const r = typeof e == "string" ? e : void 0,
            n = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return ie().captureMessage(t, r, n)
    }

    function zs(t) {
        ie().setTags(t)
    }

    function Wg(t) {
        ie().withScope(t)
    }
    const zg = "7";

    function Kg(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function Vg(t) {
        return `${Kg(t)}${t.projectId}/envelope/`
    }

    function Jg(t, e) {
        return z_({
            sentry_key: t.publicKey,
            sentry_version: zg,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function Xg(t, e = {}) {
        const r = typeof e == "string" ? e : e.tunnel,
            n = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return r || `${Vg(t)}?${Jg(t,n)}`
    }

    function Qg(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function Zg(t, e, r, n) {
        const i = Fs(r),
            o = {
                sent_at: new Date().toISOString(),
                ...i && {
                    sdk: i
                },
                ...!!n && {
                    dsn: Gr(e)
                }
            },
            s = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t];
        return ir(o, [s])
    }

    function ey(t, e, r, n) {
        const i = Fs(r),
            o = t.type && t.type !== "replay_event" ? t.type : "event";
        Qg(t, r && r.sdk);
        const s = Ng(t, i, n, e);
        return delete t.sdkProcessingMetadata, ir(s, [
            [{
                type: o
            }, t]
        ])
    }
    const po = [];

    function ty(t) {
        const e = {};
        return t.forEach(r => {
            const {
                name: n
            } = r, i = e[n];
            i && !i.isDefaultInstance && r.isDefaultInstance || (e[n] = r)
        }), Object.keys(e).map(r => e[r])
    }

    function ry(t) {
        const e = t.defaultIntegrations || [],
            r = t.integrations;
        e.forEach(s => {
            s.isDefaultInstance = !0
        });
        let n;
        Array.isArray(r) ? n = [...e, ...r] : typeof r == "function" ? n = js(r(e)) : n = e;
        const i = ty(n),
            o = iy(i, s => s.name === "Debug");
        if (o !== -1) {
            const [s] = i.splice(o, 1);
            i.push(s)
        }
        return i
    }

    function ny(t) {
        const e = {};
        return t.forEach(r => {
            r && Ks(r, e)
        }), e
    }

    function Ks(t, e) {
        e[t.name] = t, po.indexOf(t.name) === -1 && (t.setupOnce(ii, ie), po.push(t.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log(`Integration installed: ${t.name}`))
    }

    function iy(t, e) {
        for (let r = 0; r < t.length; r++)
            if (e(t[r]) === !0) return r;
        return -1
    }

    function oy(t, e, r, n) {
        const {
            normalizeDepth: i = 3,
            normalizeMaxBreadth: o = 1e3
        } = t, s = {
            ...e,
            event_id: e.event_id || r.event_id || yt(),
            timestamp: e.timestamp || Yr()
        }, a = r.integrations || t.integrations.map(h => h.name);
        sy(s, t), cy(s, a), e.type === void 0 && ay(s, t.stackParser);
        let u = n;
        r.captureContext && (u = et.clone(u).update(r.captureContext));
        let f = it(s);
        if (u) {
            if (u.getAttachments) {
                const h = [...r.attachments || [], ...u.getAttachments()];
                h.length && (r.attachments = h)
            }
            f = u.applyToEvent(s, r)
        }
        return f.then(h => typeof i == "number" && i > 0 ? uy(h, i, o) : h)
    }

    function sy(t, e) {
        const {
            environment: r,
            release: n,
            dist: i,
            maxValueLength: o = 250
        } = e;
        "environment" in t || (t.environment = "environment" in e ? r : qs), t.release === void 0 && n !== void 0 && (t.release = n), t.dist === void 0 && i !== void 0 && (t.dist = i), t.message && (t.message = Yt(t.message, o));
        const s = t.exception && t.exception.values && t.exception.values[0];
        s && s.value && (s.value = Yt(s.value, o));
        const a = t.request;
        a && a.url && (a.url = Yt(a.url, o))
    }
    const ho = new WeakMap;

    function ay(t, e) {
        const r = Oe._sentryDebugIds;
        if (!r) return;
        let n;
        const i = ho.get(e);
        i ? n = i : (n = new Map, ho.set(e, n));
        const o = Object.keys(r).reduce((u, f) => {
                let h;
                const g = n.get(f);
                g ? h = g : (h = e(f), n.set(f, h));
                for (let v = h.length - 1; v >= 0; v--) {
                    const b = h[v];
                    if (b.filename) {
                        u[b.filename] = r[f];
                        break
                    }
                }
                return u
            }, {}),
            s = new Set;
        try {
            t.exception.values.forEach(u => {
                u.stacktrace.frames.forEach(f => {
                    f.filename && s.add(f.filename)
                })
            })
        } catch {}
        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
        const a = t.debug_meta.images;
        s.forEach(u => {
            o[u] && a.push({
                type: "sourcemap",
                code_file: u,
                debug_id: o[u]
            })
        })
    }

    function cy(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
    }

    function uy(t, e, r) {
        if (!t) return null;
        const n = {
            ...t,
            ...t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map(i => ({
                    ...i,
                    ...i.data && {
                        data: je(i.data, e, r)
                    }
                }))
            },
            ...t.user && {
                user: je(t.user, e, r)
            },
            ...t.contexts && {
                contexts: je(t.contexts, e, r)
            },
            ...t.extra && {
                extra: je(t.extra, e, r)
            }
        };
        return t.contexts && t.contexts.trace && n.contexts && (n.contexts.trace = t.contexts.trace, t.contexts.trace.data && (n.contexts.trace.data = je(t.contexts.trace.data, e, r))), t.spans && (n.spans = t.spans.map(i => (i.data && (i.data = je(i.data, e, r)), i))), n
    }
    const _o = "Not capturing exception because it's already been captured.";
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
        __init5() {
            this._hooks = {}
        }
        constructor(e) {
            if (Qe.prototype.__init.call(this), Qe.prototype.__init2.call(this), Qe.prototype.__init3.call(this), Qe.prototype.__init4.call(this), Qe.prototype.__init5.call(this), this._options = e, e.dsn) {
                this._dsn = H_(e.dsn);
                const r = Xg(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, r, n) {
            if (ao(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log(_o);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(o => this._captureEvent(o, r, n)).then(o => {
                i = o
            })), i
        }
        captureMessage(e, r, n, i) {
            let o = n && n.event_id;
            const s = Rs(e) ? this.eventFromMessage(String(e), r, n) : this.eventFromException(e, n);
            return this._process(s.then(a => this._captureEvent(a, n, i)).then(a => {
                o = a
            })), o
        }
        captureEvent(e, r, n) {
            if (r && r.originalException && ao(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log(_o);
                return
            }
            let i = r && r.event_id;
            return this._process(this._captureEvent(e, r, n).then(o => {
                i = o
            })), i
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Tt(e, {
                init: !1
            }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        flush(e) {
            const r = this._transport;
            return r ? this._isClientDoneProcessing(e).then(n => r.flush(e).then(i => n && i)) : it(!0)
        }
        close(e) {
            return this.flush(e).then(r => (this.getOptions().enabled = !1, r))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = ny(this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
            }
        }
        addIntegration(e) {
            Ks(e, this._integrations)
        }
        sendEvent(e, r = {}) {
            if (this._dsn) {
                let n = ey(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const o of r.attachments || []) n = kg(n, Rg(o, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const i = this._sendEnvelope(n);
                i && i.then(o => this.emit("afterSendEvent", e, o), null)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                const r = Zg(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(r)
            }
        }
        recordDroppedEvent(e, r, n) {
            if (this._options.sendClientReports) {
                const i = `${e}:${r}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1
            }
        }
        on(e, r) {
            this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(r)
        }
        emit(e, ...r) {
            this._hooks[e] && this._hooks[e].forEach(n => n(...r))
        }
        _updateSessionFromEvent(e, r) {
            let n = !1,
                i = !1;
            const o = r.exception && r.exception.values;
            if (o) {
                i = !0;
                for (const u of o) {
                    const f = u.mechanism;
                    if (f && f.handled === !1) {
                        n = !0;
                        break
                    }
                }
            }
            const s = e.status === "ok";
            (s && e.errors === 0 || s && n) && (Tt(e, {
                ...n && {
                    status: "crashed"
                },
                errors: e.errors || Number(i || n)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new de(r => {
                let n = 0;
                const i = 1,
                    o = setInterval(() => {
                        this._numProcessing == 0 ? (clearInterval(o), r(!0)) : (n += i, e && n >= e && (clearInterval(o), r(!1)))
                    }, i)
            })
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._dsn !== void 0
        }
        _prepareEvent(e, r, n) {
            const i = this.getOptions(),
                o = Object.keys(this._integrations);
            return !r.integrations && o.length > 0 && (r.integrations = o), oy(i, e, r, n)
        }
        _captureEvent(e, r = {}, n) {
            return this._processEvent(e, r, n).then(i => i.event_id, i => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    const o = i;
                    o.logLevel === "log" ? j.log(o.message) : j.warn(o)
                }
            })
        }
        _processEvent(e, r, n) {
            const i = this.getOptions(),
                {
                    sampleRate: o
                } = i;
            if (!this._isEnabled()) return Rr(new fe("SDK not enabled, will not capture event.", "log"));
            const s = Js(e),
                a = Vs(e),
                u = e.type || "error",
                f = `before send for type \`${u}\``;
            if (a && typeof o == "number" && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), Rr(new fe(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
            const h = u === "replay_event" ? "replay" : u;
            return this._prepareEvent(e, r, n).then(g => {
                if (g === null) throw this.recordDroppedEvent("event_processor", h, e), new fe("An event processor returned `null`, will not send event.", "log");
                if (r.data && r.data.__sentry__ === !0) return g;
                const b = ly(i, g, r);
                return fy(b, f)
            }).then(g => {
                if (g === null) throw this.recordDroppedEvent("before_send", h, e), new fe(`${f} returned \`null\`, will not send event.`, "log");
                const v = n && n.getSession();
                !s && v && this._updateSessionFromEvent(v, g);
                const b = g.transaction_info;
                if (s && b && g.transaction !== e.transaction) {
                    const w = "custom";
                    g.transaction_info = {
                        ...b,
                        source: w
                    }
                }
                return this.sendEvent(g, r), g
            }).then(null, g => {
                throw g instanceof fe ? g : (this.captureException(g, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: g
                }), new fe(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${g}`))
            })
        }
        _process(e) {
            this._numProcessing++, e.then(r => (this._numProcessing--, r), r => (this._numProcessing--, r))
        }
        _sendEnvelope(e) {
            if (this._transport && this._dsn) return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, r => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.error("Error while sending event:", r)
            });
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.error("Transport disabled")
        }
        _clearOutcomes() {
            const e = this._outcomes;
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

    function fy(t, e) {
        const r = `${e} must return \`null\` or a valid event.`;
        if (Zn(t)) return t.then(n => {
            if (!kt(n) && n !== null) throw new fe(r);
            return n
        }, n => {
            throw new fe(`${e} rejected with ${n}`)
        });
        if (!kt(t) && t !== null) throw new fe(r);
        return t
    }

    function ly(t, e, r) {
        const {
            beforeSend: n,
            beforeSendTransaction: i
        } = t;
        return Vs(e) && n ? n(e, r) : Js(e) && i ? i(e, r) : e
    }

    function Vs(t) {
        return t.type === void 0
    }

    function Js(t) {
        return t.type === "transaction"
    }

    function py(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? j.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const r = ie();
        r.getScope().update(e.initialScope);
        const i = new t(e);
        r.bindClient(i)
    }
    const dy = 30;

    function Xs(t, e, r = bg(t.bufferSize || dy)) {
        let n = {};
        const i = s => r.drain(s);

        function o(s) {
            const a = [];
            if (uo(s, (g, v) => {
                    const b = fo(v);
                    if ($g(n, b)) {
                        const w = go(g, v);
                        t.recordDroppedEvent("ratelimit_backoff", b, w)
                    } else a.push(g)
                }), a.length === 0) return it();
            const u = ir(s[0], a),
                f = g => {
                    uo(u, (v, b) => {
                        const w = go(v, b);
                        t.recordDroppedEvent(g, fo(b), w)
                    })
                },
                h = () => e({
                    body: Tg(u, t.textEncoder)
                }).then(g => (g.statusCode !== void 0 && (g.statusCode < 200 || g.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Sentry responded with status code ${g.statusCode} to sent event.`), n = Cg(n, g), g), g => {
                    throw f("network_error"), g
                });
            return r.add(h).then(g => g, g => {
                if (g instanceof fe) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.error("Skipped sending event because buffer is full."), f("queue_overflow"), it();
                throw g
            })
        }
        return o.__sentry__baseTransport__ = !0, {
            send: o,
            flush: i
        }
    }

    function go(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
    }
    const yo = "7.52.1";
    let vo;
    class Jt {
        constructor() {
            Jt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = Jt.id
        }
        setupOnce() {
            vo = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const r = ri(this) || this;
                    return vo.apply(r, e)
                }
            } catch {}
        }
    }
    Jt.__initStatic();
    const hy = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class vt {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = vt.id
        }
        constructor(e = {}) {
            this._options = e, vt.prototype.__init.call(this)
        }
        setupOnce(e, r) {
            const n = i => {
                const o = r();
                if (o) {
                    const s = o.getIntegration(vt);
                    if (s) {
                        const a = o.getClient(),
                            u = a ? a.getOptions() : {},
                            f = _y(s._options, u);
                        return gy(i, f) ? null : i
                    }
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    vt.__initStatic();

    function _y(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...hy],
            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function gy(t, e) {
        return e.ignoreInternal && Sy(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Event dropped due to being internal Sentry Error.
Event: ${Me(t)}`), !0) : yy(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Me(t)}`), !0) : vy(t, e.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Me(t)}`), !0) : my(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Me(t)}.
Url: ${xr(t)}`), !0) : by(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Me(t)}.
Url: ${xr(t)}`), !0)
    }

    function yy(t, e) {
        return t.type || !e || !e.length ? !1 : Ey(t).some(r => Hr(r, e))
    }

    function vy(t, e) {
        if (t.type !== "transaction" || !e || !e.length) return !1;
        const r = t.transaction;
        return r ? Hr(r, e) : !1
    }

    function my(t, e) {
        if (!e || !e.length) return !1;
        const r = xr(t);
        return r ? Hr(r, e) : !1
    }

    function by(t, e) {
        if (!e || !e.length) return !0;
        const r = xr(t);
        return r ? Hr(r, e) : !0
    }

    function Ey(t) {
        if (t.message) return [t.message];
        if (t.exception) {
            const {
                values: e
            } = t.exception;
            try {
                const {
                    type: r = "",
                    value: n = ""
                } = e && e[e.length - 1] || {};
                return [`${n}`, `${r}: ${n}`]
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.error(`Cannot extract message for event ${Me(t)}`), []
            }
        }
        return []
    }

    function Sy(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function wy(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
            const r = t[e];
            if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") return r.filename || null
        }
        return null
    }

    function xr(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? wy(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.error(`Cannot extract url for event ${Me(t)}`), null
        }
    }
    const V = Oe;
    let An = 0;

    function Qs() {
        return An > 0
    }

    function Oy() {
        An++, setTimeout(() => {
            An--
        })
    }

    function At(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            const i = t.__sentry_wrapped__;
            if (i) return i;
            if (ri(t)) return t
        } catch {
            return t
        }
        const n = function() {
            const i = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                const o = i.map(s => At(s, e));
                return t.apply(this, o)
            } catch (o) {
                throw Oy(), Wg(s => {
                    s.addEventProcessor(a => (e.mechanism && (Sn(a, void 0, void 0), Vt(a, e.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: i
                    }, a)), Hg(o)
                }), o
            }
        };
        try {
            for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        } catch {}
        Is(n, t), ti(t, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return n
    }

    function Zs(t, e) {
        const r = oi(t, e),
            n = {
                type: e && e.name,
                value: Ry(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function ky(t, e, r, n) {
        const o = ie().getClient(),
            s = o && o.getOptions().normalizeDepth,
            a = {
                exception: {
                    values: [{
                        type: Qn(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${K_(e)}`
                    }]
                },
                extra: {
                    __serialized__: Us(e, s)
                }
            };
        if (r) {
            const u = oi(t, r);
            u.length && (a.exception.values[0].stacktrace = {
                frames: u
            })
        }
        return a
    }

    function ln(t, e) {
        return {
            exception: {
                values: [Zs(t, e)]
            }
        }
    }

    function oi(t, e) {
        const r = e.stacktrace || e.stack || "",
            n = Ay(e);
        try {
            return t(r, n)
        } catch {}
        return []
    }
    const Ty = /Minified React error #\d+;/i;

    function Ay(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (Ty.test(t.message)) return 1
        }
        return 0
    }

    function Ry(t) {
        const e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function xy(t, e, r, n) {
        const i = r && r.syntheticException || void 0,
            o = si(t, e, i, n);
        return Vt(o), o.level = "error", r && r.event_id && (o.event_id = r.event_id), it(o)
    }

    function Ny(t, e, r = "info", n, i) {
        const o = n && n.syntheticException || void 0,
            s = Rn(t, e, o, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), it(s)
    }

    function si(t, e, r, n, i) {
        let o;
        if (As(e) && e.error) return ln(t, e.error);
        if (Qi(e) || I_(e)) {
            const s = e;
            if ("stack" in e) o = ln(t, e);
            else {
                const a = s.name || (Qi(s) ? "DOMError" : "DOMException"),
                    u = s.message ? `${a}: ${s.message}` : a;
                o = Rn(t, u, r, n), Sn(o, u)
            }
            return "code" in s && (o.tags = {
                ...o.tags,
                "DOMException.code": `${s.code}`
            }), o
        }
        return Ts(e) ? ln(t, e) : kt(e) || Qn(e) ? (o = ky(t, e, r, i), Vt(o, {
            synthetic: !0
        }), o) : (o = Rn(t, e, r, n), Sn(o, `${e}`, void 0), Vt(o, {
            synthetic: !0
        }), o)
    }

    function Rn(t, e, r, n) {
        const i = {
            message: e
        };
        if (n && r) {
            const o = oi(t, r);
            o.length && (i.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: o
                    }
                }]
            })
        }
        return i
    }
    const dr = 1024,
        ea = "Breadcrumbs";
    class Xt {
        static __initStatic() {
            this.id = ea
        }
        __init() {
            this.name = Xt.id
        }
        constructor(e) {
            Xt.prototype.__init.call(this), this.options = {
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
            this.options.console && Ue("console", Ly), this.options.dom && Ue("dom", Iy(this.options.dom)), this.options.xhr && Ue("xhr", Py), this.options.fetch && Ue("fetch", Dy), this.options.history && Ue("history", $y)
        }
        addSentryBreadcrumb(e) {
            this.options.sentry && ie().addBreadcrumb({
                category: `sentry.${e.type==="transaction"?"transaction":"event"}`,
                event_id: e.event_id,
                level: e.level,
                message: Me(e)
            }, {
                event: e
            })
        }
    }
    Xt.__initStatic();

    function Iy(t) {
        function e(r) {
            let n, i = typeof t == "object" ? t.serializeAttribute : void 0,
                o = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
            o && o > dr && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn(`\`dom.maxStringLength\` cannot exceed ${dr}, but a value of ${o} was configured. Sentry will use ${dr} instead.`), o = dr), typeof i == "string" && (i = [i]);
            try {
                const s = r.event;
                n = Cy(s) ? yn(s.target, {
                    keyAttrs: i,
                    maxStringLength: o
                }) : yn(s, {
                    keyAttrs: i,
                    maxStringLength: o
                })
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && ie().addBreadcrumb({
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

    function Ly(t) {
        for (let r = 0; r < t.args.length; r++)
            if (t.args[r] === "ref=Ref<") {
                t.args[r + 1] = "viewRef";
                break
            } const e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: Sg(t.level),
            message: eo(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${eo(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        ie().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function Py(t) {
        const {
            startTimestamp: e,
            endTimestamp: r
        } = t, n = t.xhr[qt];
        if (!e || !r || !n) return;
        const {
            method: i,
            url: o,
            status_code: s,
            body: a
        } = n, u = {
            method: i,
            url: o,
            status_code: s
        }, f = {
            xhr: t.xhr,
            input: a,
            startTimestamp: e,
            endTimestamp: r
        };
        ie().addBreadcrumb({
            category: "xhr",
            data: u,
            type: "http"
        }, f)
    }

    function Dy(t) {
        const {
            startTimestamp: e,
            endTimestamp: r
        } = t;
        if (r && !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST"))
            if (t.error) {
                const n = t.fetchData,
                    i = {
                        data: t.error,
                        input: t.args,
                        startTimestamp: e,
                        endTimestamp: r
                    };
                ie().addBreadcrumb({
                    category: "fetch",
                    data: n,
                    level: "error",
                    type: "http"
                }, i)
            } else {
                const n = {
                        ...t.fetchData,
                        status_code: t.response && t.response.status
                    },
                    i = {
                        input: t.args,
                        response: t.response,
                        startTimestamp: e,
                        endTimestamp: r
                    };
                ie().addBreadcrumb({
                    category: "fetch",
                    data: n,
                    type: "http"
                }, i)
            }
    }

    function $y(t) {
        let e = t.from,
            r = t.to;
        const n = un(V.location.href);
        let i = un(e);
        const o = un(r);
        i.path || (i = n), n.protocol === o.protocol && n.host === o.host && (r = o.relative), n.protocol === i.protocol && n.host === i.host && (e = i.relative), ie().addBreadcrumb({
            category: "navigation",
            data: {
                from: e,
                to: r
            }
        })
    }

    function Cy(t) {
        return t && !!t.target
    }

    function jy(t, {
        metadata: e,
        tunnel: r,
        dsn: n
    }) {
        const i = {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...e && e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                },
                ...!!r && !!n && {
                    dsn: Gr(n)
                }
            },
            o = Uy(t);
        return ir(i, [o])
    }

    function Uy(t) {
        return [{
            type: "user_report"
        }, t]
    }
    class My extends Qe {
        constructor(e) {
            const r = V.SENTRY_SDK_SOURCE || dg();
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${r}:@sentry/browser`,
                    version: yo
                }],
                version: yo
            }, super(e), e.sendClientReports && V.document && V.document.addEventListener("visibilitychange", () => {
                V.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return xy(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", n) {
            return Ny(this._options.stackParser, e, r, n, this._options.attachStacktrace)
        }
        sendEvent(e, r) {
            const n = this.getIntegrationById(ea);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, r)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("SDK not enabled, will not capture user feedback.");
                return
            }
            const r = jy(e, {
                metadata: this.getSdkMetadata(),
                dsn: this.getDsn(),
                tunnel: this.getOptions().tunnel
            });
            this._sendEnvelope(r)
        }
        _prepareEvent(e, r, n) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, r, n)
        }
        _flushOutcomes() {
            const e = this._clearOutcomes();
            if (e.length === 0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log("Sending outcomes:", e);
            const r = Ig(e, this._options.tunnel && Gr(this._dsn));
            this._sendEnvelope(r)
        }
    }
    let Gt;

    function By() {
        if (Gt) return Gt;
        if (bn(V.fetch)) return Gt = V.fetch.bind(V);
        const t = V.document;
        let e = V.fetch;
        if (t && typeof t.createElement == "function") try {
            const r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r);
            const n = r.contentWindow;
            n && n.fetch && (e = n.fetch), t.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return Gt = e.bind(V)
    }

    function Fy() {
        Gt = void 0
    }

    function qy(t, e = By()) {
        let r = 0,
            n = 0;

        function i(o) {
            const s = o.body.length;
            r += s, n++;
            const a = {
                body: o.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                keepalive: r <= 6e4 && n < 15,
                ...t.fetchOptions
            };
            try {
                return e(t.url, a).then(u => (r -= s, n--, {
                    statusCode: u.status,
                    headers: {
                        "x-sentry-rate-limits": u.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": u.headers.get("Retry-After")
                    }
                }))
            } catch (u) {
                return Fy(), r -= s, n--, Rr(u)
            }
        }
        return Xs(t, i)
    }
    const Gy = 4;

    function Hy(t) {
        function e(r) {
            return new de((n, i) => {
                const o = new XMLHttpRequest;
                o.onerror = i, o.onreadystatechange = () => {
                    o.readyState === Gy && n({
                        statusCode: o.status,
                        headers: {
                            "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": o.getResponseHeader("Retry-After")
                        }
                    })
                }, o.open("POST", t.url);
                for (const s in t.headers) Object.prototype.hasOwnProperty.call(t.headers, s) && o.setRequestHeader(s, t.headers[s]);
                o.send(r.body)
            })
        }
        return Xs(t, e)
    }
    const zr = "?",
        Yy = 30,
        Wy = 40,
        zy = 50;

    function ai(t, e, r, n) {
        const i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i
    }
    const Ky = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Vy = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Jy = t => {
            const e = Ky.exec(t);
            if (e) {
                if (e[2] && e[2].indexOf("eval") === 0) {
                    const o = Vy.exec(e[2]);
                    o && (e[2] = o[1], e[3] = o[2], e[4] = o[3])
                }
                const [n, i] = ta(e[1] || zr, e[2]);
                return ai(i, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        Xy = [Yy, Jy],
        Qy = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Zy = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        ev = t => {
            const e = Qy.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const o = Zy.exec(e[3]);
                    o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "")
                }
                let n = e[3],
                    i = e[1] || zr;
                return [i, n] = ta(i, n), ai(n, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        tv = [zy, ev],
        rv = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        nv = t => {
            const e = rv.exec(t);
            return e ? ai(e[2], e[1] || zr, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        iv = [Wy, nv],
        ov = [Xy, tv, iv],
        sv = Ds(...ov),
        ta = (t, e) => {
            const r = t.indexOf("safari-extension") !== -1,
                n = t.indexOf("safari-web-extension") !== -1;
            return r || n ? [t.indexOf("@") !== -1 ? t.split("@")[0] : zr, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
    class qe {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = qe.id
        }
        __init2() {
            this._installFunc = {
                onerror: av,
                onunhandledrejection: cv
            }
        }
        constructor(e) {
            qe.prototype.__init.call(this), qe.prototype.__init2.call(this), this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            const e = this._options;
            for (const r in e) {
                const n = this._installFunc[r];
                n && e[r] && (lv(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    qe.__initStatic();

    function av() {
        Ue("error", t => {
            const [e, r, n] = ia();
            if (!e.getIntegration(qe)) return;
            const {
                msg: i,
                url: o,
                line: s,
                column: a,
                error: u
            } = t;
            if (Qs() || u && u.__sentry_own_request__) return;
            const f = u === void 0 && nt(i) ? fv(i, o, s, a) : ra(si(r, u || i, void 0, n, !1), o, s, a);
            f.level = "error", na(e, u, f, "onerror")
        })
    }

    function cv() {
        Ue("unhandledrejection", t => {
            const [e, r, n] = ia();
            if (!e.getIntegration(qe)) return;
            let i = t;
            try {
                "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
            } catch {}
            if (Qs() || i && i.__sentry_own_request__) return !0;
            const o = Rs(i) ? uv(i) : si(r, i, void 0, n, !0);
            o.level = "error", na(e, i, o, "onunhandledrejection")
        })
    }

    function uv(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function fv(t, e, r, n) {
        const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = As(t) ? t.message : t,
            s = "Error";
        const a = o.match(i);
        return a && (s = a[1], o = a[2]), ra({
            exception: {
                values: [{
                    type: s,
                    value: o
                }]
            }
        }, e, r, n)
    }

    function ra(t, e, r, n) {
        const i = t.exception = t.exception || {},
            o = i.values = i.values || [],
            s = o[0] = o[0] || {},
            a = s.stacktrace = s.stacktrace || {},
            u = a.frames = a.frames || [],
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            h = isNaN(parseInt(r, 10)) ? void 0 : r,
            g = nt(e) && e.length > 0 ? e : M_();
        return u.length === 0 && u.push({
            colno: f,
            filename: g,
            function: "?",
            in_app: !0,
            lineno: h
        }), t
    }

    function lv(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.log(`Global Handler attached: ${t}`)
    }

    function na(t, e, r, n) {
        Vt(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function ia() {
        const t = ie(),
            e = t.getClient(),
            r = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, r.stackParser, r.attachStacktrace]
    }
    const pv = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Qt {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = Qt.id
        }
        constructor(e) {
            Qt.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            this._options.setTimeout && oe(V, "setTimeout", mo), this._options.setInterval && oe(V, "setInterval", mo), this._options.requestAnimationFrame && oe(V, "requestAnimationFrame", dv), this._options.XMLHttpRequest && "XMLHttpRequest" in V && oe(XMLHttpRequest.prototype, "send", hv);
            const e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : pv).forEach(_v)
        }
    }
    Qt.__initStatic();

    function mo(t) {
        return function(...e) {
            const r = e[0];
            return e[0] = At(r, {
                mechanism: {
                    data: {
                        function: Ye(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function dv(t) {
        return function(e) {
            return t.apply(this, [At(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Ye(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function hv(t) {
        return function(...e) {
            const r = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i => {
                i in r && typeof r[i] == "function" && oe(r, i, function(o) {
                    const s = {
                            mechanism: {
                                data: {
                                    function: i,
                                    handler: Ye(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        a = ri(o);
                    return a && (s.mechanism.data.handler = Ye(a)), At(o, s)
                })
            }), t.apply(this, e)
        }
    }

    function _v(t) {
        const e = V,
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (oe(r, "addEventListener", function(n) {
            return function(i, o, s) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = At(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Ye(o),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [i, At(o, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Ye(o),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), s])
            }
        }), oe(r, "removeEventListener", function(n) {
            return function(i, o, s) {
                const a = o;
                try {
                    const u = a && a.__sentry_wrapped__;
                    u && n.call(this, i, u, s)
                } catch {}
                return n.call(this, i, a, s)
            }
        }))
    }
    const gv = "cause",
        yv = 5;
    class mt {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = mt.id
        }
        constructor(e = {}) {
            mt.prototype.__init.call(this), this._key = e.key || gv, this._limit = e.limit || yv
        }
        setupOnce() {
            const e = ie().getClient();
            e && ii((r, n) => {
                const i = ie().getIntegration(mt);
                return i ? vv(e.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    mt.__initStatic();

    function vv(t, e, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !Ct(i.originalException, Error)) return n;
        const o = oa(t, r, i.originalException, e);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function oa(t, e, r, n, i = []) {
        if (!Ct(r[n], Error) || i.length + 1 >= e) return i;
        const o = Zs(t, r[n]);
        return oa(t, e, r[n], n, [o, ...i])
    }
    class bt {
        constructor() {
            bt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = bt.id
        }
        setupOnce() {
            ii(e => {
                if (ie().getIntegration(bt)) {
                    if (!V.navigator && !V.location && !V.document) return e;
                    const r = e.request && e.request.url || V.location && V.location.href,
                        {
                            referrer: n
                        } = V.document || {},
                        {
                            userAgent: i
                        } = V.navigator || {},
                        o = {
                            ...e.request && e.request.headers,
                            ...n && {
                                Referer: n
                            },
                            ...i && {
                                "User-Agent": i
                            }
                        },
                        s = {
                            ...e.request,
                            ...r && {
                                url: r
                            },
                            headers: o
                        };
                    return {
                        ...e,
                        request: s
                    }
                }
                return e
            })
        }
    }
    bt.__initStatic();
    class Et {
        constructor() {
            Et.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = Et.id
        }
        setupOnce(e, r) {
            const n = i => {
                if (i.type) return i;
                const o = r().getIntegration(Et);
                if (o) {
                    try {
                        if (mv(i, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {
                        return o._previousEvent = i
                    }
                    return o._previousEvent = i
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    Et.__initStatic();

    function mv(t, e) {
        return e ? !!(bv(t, e) || Ev(t, e)) : !1
    }

    function bv(t, e) {
        const r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !aa(t, e) || !sa(t, e))
    }

    function Ev(t, e) {
        const r = bo(e),
            n = bo(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !aa(t, e) || !sa(t, e))
    }

    function sa(t, e) {
        let r = Eo(t),
            n = Eo(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let i = 0; i < n.length; i++) {
            const o = n[i],
                s = r[i];
            if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function) return !1
        }
        return !0
    }

    function aa(t, e) {
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

    function bo(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function Eo(t) {
        const e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const Sv = [new vt, new Jt, new Qt, new Xt, new qe, new mt, new Et, new bt];

    function wv(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = Sv), t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__), V.SENTRY_RELEASE && V.SENTRY_RELEASE.id && (t.release = V.SENTRY_RELEASE.id)), t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: V_(t.stackParser || sv),
            integrations: ry(t),
            transport: t.transport || ($s() ? qy : Hy)
        };
        py(My, e), t.autoSessionTracking && Ov()
    }

    function So(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function Ov() {
        if (typeof V.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && j.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const t = ie();
        t.captureSession && (So(t), Ue("history", ({
            from: e,
            to: r
        }) => {
            e === void 0 || e === r || So(ie())
        }))
    }
    const kv = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        Tv = {
            RETRY: kv
        },
        wo = {
            en: Tv
        };
    let Av = class {
        constructor(e) {
            Se(this, "manifest");
            Se(this, "registered", {});
            Se(this, "register", e => {
                this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
            });
            Se(this, "load", async e => {
                document.querySelectorAll("[data-tv-prefetch]").forEach(a => a.remove());
                const n = this.getBranchName(e),
                    i = window.tv.manifest.branches[n];
                if (!i) throw new Error(`[loader] Unknown branch "${n}" can not be found in manifest`);
                const o = i.bundles[e.app];
                if (!o) throw new Error(`[loader] Unknown app "${e.app}" can not be loaded from branch "${n}"`);
                try {
                    n === "** hmr **" ? await this.loadHMRBundle(o) : n === "** dist **" ? await this.loadDistBundle(o) : await this.loadS3Bundle(o)
                } catch {
                    console.error(`[loader] Unable to load "${e.app}" from branch "${n}"`), this.showLoaderError();
                    return
                }
                if (R_("[loader] load success", {
                        app: e.app,
                        appVersion: o.version ?? i.version,
                        loaderVersion: window.tv.manifest.loader.version,
                        branch: n
                    }), !e.autoMount) return;
                const s = e;
                s.version = o.version ?? i.version, this.mount(s)
            });
            Se(this, "connect", (e, r) => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(e, r)
            });
            Se(this, "mount", e => {
                var s, a;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const u = this.registered.info(e);
                    zs({
                        branch: u.branch,
                        "app.tag": u.tag,
                        "app.type": u.type,
                        "app.version": u.version,
                        "app.wrapper": u.wrapper
                    }), Fo.pageView(u.tag)
                }
                Or.setup(e.app, ((s = e.room) == null ? void 0 : s.code) ?? ((a = e.client) == null ? void 0 : a.code));
                const n = document.querySelectorAll("[data-tv-style]"),
                    o = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(u => {
                        const f = document.createElement("link");
                        return f.rel = "stylesheet", f.href = u.href, f.setAttribute("data-tv-style", ""), f
                    });
                document.head.append(...o), n.forEach(u => u.remove()), this.registered.unmount = this.registered.mount(e) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            Se(this, "debugLoad", async (e, r) => {
                throw new Error("[Loader] Debug controllers are not available in production builds")
            });
            this.manifest = e
        }
        getBranchName(e) {
            var o, s, a, u, f;
            const r = (s = (o = e.match) == null ? void 0 : o.params) == null ? void 0 : s.branch,
                n = Or.get("preference:branch"),
                i = this.manifest.branches;
            if (r) return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
            if (e.branch) return e.branch;
            if ((a = i["** hmr **"]) != null && a.bundles[e.app]) return "** hmr **";
            if (n && ((u = i[n]) != null && u.bundles[e.app])) return n;
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
            r.forEach(o => {
                const s = n ? this.getS3Url(o, n) : o,
                    a = document.createElement("link");
                n ? a.rel = "prefetch" : (a.rel = "preload", a.as = "style"), a.href = s, a.setAttribute("data-tv-prefetch", ""), document.head.append(a)
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
            const e = document.getElementsByClassName("loader-status")[0];
            if (!e) return;
            const r = document.createElement("p"),
                n = navigator.languages[0],
                i = wo[n] ?? wo.en;
            e.classList.add("error"), r.textContent = i.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    };
    const Oo = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        Rv = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        xv = t => {
            wv({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: Rv,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === Oo.EcastEntityNotFound) return Yg("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === Oo.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(e, r);
                        n && (e.contexts = e.contexts || {}, e.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return e
                }
            }), zs({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    var Nv = /([:*])(\w+)/g,
        Iv = "([^/]+)",
        Lv = /\*/g,
        Pv = "?(?:.*)",
        Dv = /\/\?/g,
        $v = "/?([^/]+|)",
        Cv = "(?:/^|^)",
        jv = "";

    function ca(t) {
        return t === void 0 && (t = "/"), ui() ? location.pathname + location.search + location.hash : t
    }

    function ee(t) {
        return t.replace(/\/+$/, "").replace(/^\/+/, "")
    }

    function Nr(t) {
        return typeof t == "string"
    }

    function Uv(t) {
        return typeof t == "function"
    }

    function Ir(t) {
        return t && t.indexOf("#") >= 0 && t.split("#").pop() || ""
    }

    function Mv(t, e) {
        return e.length === 0 || !t ? null : t.slice(1, t.length).reduce(function(r, n, i) {
            return r === null && (r = {}), r[e[i]] = decodeURIComponent(n), r
        }, null)
    }

    function Lr(t) {
        var e = ee(t).split(/\?(.*)?$/);
        return [ee(e[0]), e.slice(1).join("")]
    }

    function ci(t) {
        for (var e = {}, r = t.split("&"), n = 0; n < r.length; n++) {
            var i = r[n].split("=");
            if (i[0] !== "") {
                var o = decodeURIComponent(i[0]);
                e[o] ? (Array.isArray(e[o]) || (e[o] = [e[o]]), e[o].push(decodeURIComponent(i[1] || ""))) : e[o] = decodeURIComponent(i[1] || "")
            }
        }
        return e
    }

    function ua(t, e) {
        var r = Lr(ee(t.currentLocationPath)),
            n = r[0],
            i = r[1],
            o = i === "" ? null : ci(i),
            s = [],
            a;
        if (Nr(e.path)) {
            if (a = Cv + ee(e.path).replace(Nv, function(g, v, b) {
                    return s.push(b), Iv
                }).replace(Lv, Pv).replace(Dv, $v) + "$", ee(e.path) === "" && ee(n) === "") return {
                url: n,
                queryString: i,
                hashString: Ir(t.to),
                route: e,
                data: null,
                params: o
            }
        } else a = e.path;
        var u = new RegExp(a, jv),
            f = n.match(u);
        if (f) {
            var h = Nr(e.path) ? Mv(f, s) : f.groups ? f.groups : f.slice(1);
            return {
                url: ee(n.replace(new RegExp("^" + t.instance.root), "")),
                queryString: i,
                hashString: Ir(t.to),
                route: e,
                data: h,
                params: o
            }
        }
        return !1
    }

    function fa() {
        return !!(typeof window < "u" && window.history && window.history.pushState)
    }

    function st(t, e) {
        return typeof t[e] > "u" || t[e] === !0
    }

    function Bv(t) {
        if (!t) return {};
        var e = t.split(","),
            r = {},
            n;
        return e.forEach(function(i) {
            var o = i.split(":").map(function(s) {
                return s.replace(/(^ +| +$)/g, "")
            });
            switch (o[0]) {
                case "historyAPIMethod":
                    r.historyAPIMethod = o[1];
                    break;
                case "resolveOptionsStrategy":
                    n || (n = {}), n.strategy = o[1];
                    break;
                case "resolveOptionsHash":
                    n || (n = {}), n.hash = o[1] === "true";
                    break;
                case "updateBrowserURL":
                case "callHandler":
                case "updateState":
                case "force":
                    r[o[0]] = o[1] === "true";
                    break
            }
        }), n && (r.resolveOptions = n), r
    }

    function ui() {
        return typeof window < "u"
    }

    function Fv(t, e) {
        return t === void 0 && (t = []), e === void 0 && (e = {}), t.filter(function(r) {
            return r
        }).forEach(function(r) {
            ["before", "after", "already", "leave"].forEach(function(n) {
                r[n] && (e[n] || (e[n] = []), e[n].push(r[n]))
            })
        }), e
    }

    function Ne(t, e, r) {
        var n = e || {},
            i = 0;
        (function o() {
            if (!t[i]) {
                r && r(n);
                return
            }
            Array.isArray(t[i]) ? (t.splice.apply(t, [i, 1].concat(t[i][0](n) ? t[i][1] : t[i][2])), o()) : t[i](n, function(s) {
                typeof s > "u" || s === !0 ? (i += 1, o()) : r && r(n)
            })
        })()
    }
    Ne.if = function(t, e, r) {
        return Array.isArray(e) || (e = [e]), Array.isArray(r) || (r = [r]), [t, e, r]
    };

    function ko(t, e) {
        typeof t.currentLocationPath > "u" && (t.currentLocationPath = t.to = ca(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), e()
    }

    function pn(t, e) {
        for (var r = 0; r < t.instance.routes.length; r++) {
            var n = t.instance.routes[r],
                i = ua(t, n);
            if (i && (t.matches || (t.matches = []), t.matches.push(i), t.resolveOptions.strategy === "ONE")) {
                e();
                return
            }
        }
        e()
    }

    function qv(t, e) {
        t.navigateOptions && (typeof t.navigateOptions.shouldResolve < "u" && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), typeof t.navigateOptions.silent < "u" && console.warn('"silent" is deprecated. Please check the documentation.')), e()
    }

    function Gv(t, e) {
        t.navigateOptions.force === !0 ? (t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]), e(!1)) : e()
    }
    var To = ui(),
        Hv = fa();

    function Yv(t, e) {
        if (st(t.navigateOptions, "updateBrowserURL")) {
            var r = ("/" + t.to).replace(/\/\//g, "/"),
                n = To && t.resolveOptions && t.resolveOptions.hash === !0;
            Hv ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {}, t.navigateOptions.title || "", n ? "#" + r : r), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                if (!n) {
                    var i = location.hash;
                    location.hash = "", location.hash = i
                }
                t.instance.__freezeListening = !1
            }, 1))) : To && (window.location.href = t.to)
        }
        e()
    }

    function la(t, e) {
        var r = t.instance;
        if (!r.lastResolved()) {
            e();
            return
        }
        Ne(r.lastResolved().map(function(n) {
            return function(i, o) {
                if (!n.route.hooks || !n.route.hooks.leave) {
                    o();
                    return
                }
                var s = !1,
                    a = t.instance.matchLocation(n.route.path, t.currentLocationPath, !1);
                if (n.route.path !== "*") s = !a;
                else {
                    var u = t.matches ? t.matches.find(function(f) {
                        return n.route.path === f.route.path
                    }) : !1;
                    s = !u
                }
                if (st(t.navigateOptions, "callHooks") && s) {
                    Ne(n.route.hooks.leave.map(function(f) {
                        return function(h, g) {
                            return f(function(v) {
                                v === !1 ? t.instance.__markAsClean(t) : g()
                            }, t.matches && t.matches.length > 0 ? t.matches.length === 1 ? t.matches[0] : t.matches : void 0)
                        }
                    }).concat([function() {
                        return o()
                    }]));
                    return
                } else o()
            }
        }), {}, function() {
            return e()
        })
    }

    function Wv(t, e) {
        t.match.route.hooks && t.match.route.hooks.before && st(t.navigateOptions, "callHooks") ? Ne(t.match.route.hooks.before.map(function(r) {
            return function(i, o) {
                return r(function(s) {
                    s === !1 ? t.instance.__markAsClean(t) : o()
                }, t.match)
            }
        }).concat([function() {
            return e()
        }])) : e()
    }

    function zv(t, e) {
        st(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), e()
    }

    function Kv(t, e) {
        t.match.route.hooks && t.match.route.hooks.after && st(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(r) {
            return r(t.match)
        }), e()
    }

    function Vv(t, e) {
        var r = t.instance.lastResolved();
        if (r && r[0] && r[0].route === t.match.route && r[0].url === t.match.url && r[0].queryString === t.match.queryString) {
            r.forEach(function(n) {
                n.route.hooks && n.route.hooks.already && st(t.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(i) {
                    return i(t.match)
                })
            }), e(!1);
            return
        }
        e()
    }

    function Jv(t, e) {
        var r = t.instance._notFoundRoute;
        if (r) {
            t.notFoundHandled = !0;
            var n = Lr(t.currentLocationPath),
                i = n[0],
                o = n[1],
                s = Ir(t.to);
            r.path = ee(i);
            var a = {
                url: r.path,
                queryString: o,
                hashString: s,
                data: null,
                route: r,
                params: o !== "" ? ci(o) : null
            };
            t.matches = [a], t.match = a
        }
        e()
    }

    function Xv(t, e) {
        (!t.resolveOptions || t.resolveOptions.noMatchWarning === !1 || typeof t.resolveOptions.noMatchWarning > "u") && console.warn('Navigo: "' + t.currentLocationPath + `" didn't match any of the registered routes.`), e()
    }

    function Qv(t, e) {
        t.instance._setCurrent(null), e()
    }

    function pa(t, e) {
        st(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), e()
    }
    var da = [Vv, Wv, zv, Kv],
        Ao = [la, Jv, Ne.if(function(t) {
            var e = t.notFoundHandled;
            return e
        }, da.concat([pa]), [Xv, Qv])];

    function xn() {
        return xn = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, xn.apply(this, arguments)
    }

    function Ro(t, e) {
        var r = 0;

        function n() {
            if (r === t.matches.length) {
                pa(t, e);
                return
            }
            Ne(da, xn({}, t, {
                match: t.matches[r]
            }), function() {
                r += 1, n()
            })
        }
        la(t, n)
    }

    function dn(t) {
        t.instance.__markAsClean(t)
    }

    function Nn() {
        return Nn = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, Nn.apply(this, arguments)
    }
    var xo = "[data-navigo]";

    function Zv(t, e) {
        var r = e || {
                strategy: "ONE",
                hash: !1,
                noMatchWarning: !1,
                linksSelector: xo
            },
            n = this,
            i = "/",
            o = null,
            s = [],
            a = !1,
            u, f = fa(),
            h = ui();
        t ? i = ee(t) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');

        function g(E) {
            return E.indexOf("#") >= 0 && (r.hash === !0 ? E = E.split("#")[1] || "/" : E = E.split("#")[0]), E
        }

        function v(E) {
            return ee(i + "/" + ee(E))
        }

        function b(E, A, x, B) {
            return E = Nr(E) ? v(E) : E, {
                name: B || ee(String(E)),
                path: E,
                handler: A,
                hooks: Fv(x)
            }
        }

        function w(E, A, x) {
            var B = this;
            return typeof E == "object" && !(E instanceof RegExp) ? (Object.keys(E).forEach(function(F) {
                if (typeof E[F] == "function") B.on(F, E[F]);
                else {
                    var Ee = E[F],
                        Ve = Ee.uses,
                        _e = Ee.as,
                        Je = Ee.hooks;
                    s.push(b(F, Ve, [u, Je], _e))
                }
            }), this) : (typeof E == "function" && (x = A, A = E, E = i), s.push(b(E, A, [u, x])), this)
        }

        function I(E, A) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.resolve(E, A)
                });
                return
            } else n.__dirty = !0;
            E = E ? ee(i) + "/" + ee(E) : void 0;
            var x = {
                instance: n,
                to: E,
                currentLocationPath: E,
                navigateOptions: {},
                resolveOptions: Nn({}, r, A)
            };
            return Ne([ko, pn, Ne.if(function(B) {
                var F = B.matches;
                return F && F.length > 0
            }, Ro, Ao)], x, dn), x.matches ? x.matches : !1
        }

        function L(E, A) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.navigate(E, A)
                });
                return
            } else n.__dirty = !0;
            E = ee(i) + "/" + ee(E);
            var x = {
                instance: n,
                to: E,
                navigateOptions: A || {},
                resolveOptions: A && A.resolveOptions ? A.resolveOptions : r,
                currentLocationPath: g(E)
            };
            Ne([qv, Gv, pn, Ne.if(function(B) {
                var F = B.matches;
                return F && F.length > 0
            }, Ro, Ao), Yv, dn], x, dn)
        }

        function J(E, A, x) {
            var B = pe(E, A);
            return B !== null ? (L(B.replace(new RegExp("^/?" + i), ""), x), !0) : !1
        }

        function q(E) {
            return this.routes = s = s.filter(function(A) {
                return Nr(E) ? ee(A.path) !== ee(E) : Uv(E) ? E !== A.handler : String(A.path) !== String(E)
            }), this
        }

        function se() {
            f && (this.__popstateListener = function() {
                n.__freezeListening || I()
            }, window.addEventListener("popstate", this.__popstateListener))
        }

        function ye() {
            this.routes = s = [], f && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = a = !0
        }

        function ae(E, A) {
            return n._notFoundRoute = b("*", E, [u, A], "__NOT_FOUND__"), this
        }

        function ce() {
            if (h) return he().forEach(function(E) {
                if (E.getAttribute("data-navigo") === "false" || E.getAttribute("target") === "_blank") {
                    E.hasListenerAttached && E.removeEventListener("click", E.navigoHandler);
                    return
                }
                E.hasListenerAttached || (E.hasListenerAttached = !0, E.navigoHandler = function(A) {
                    if ((A.ctrlKey || A.metaKey) && A.target.tagName.toLowerCase() === "a") return !1;
                    var x = E.getAttribute("href");
                    if (typeof x > "u" || x === null) return !1;
                    if (x.match(/^(http|https)/) && typeof URL < "u") try {
                        var B = new URL(x);
                        x = B.pathname + B.search
                    } catch {}
                    var F = Bv(E.getAttribute("data-navigo-options"));
                    a || (A.preventDefault(), A.stopPropagation(), n.navigate(ee(x), F))
                }, E.addEventListener("click", E.navigoHandler))
            }), n
        }

        function he() {
            return h ? [].slice.call(document.querySelectorAll(r.linksSelector || xo)) : []
        }

        function te(E) {
            return "/" + i + "/" + ee(E)
        }

        function G(E) {
            return u = E, this
        }

        function jt() {
            return o
        }

        function pe(E, A, x) {
            var B = s.find(function(Ve) {
                    return Ve.name === E
                }),
                F = null;
            if (B) {
                if (F = B.path, A)
                    for (var Ee in A) F = F.replace(":" + Ee, A[Ee]);
                F = F.match(/^\//) ? F : "/" + F
            }
            return F && x && !x.includeRoot && (F = F.replace(new RegExp("^/" + i), "")), F
        }

        function Ke(E) {
            return E.getAttribute("href")
        }

        function be(E) {
            var A = Lr(ee(E)),
                x = A[0],
                B = A[1],
                F = B === "" ? null : ci(B),
                Ee = Ir(E),
                Ve = b(x, function() {}, [u], x);
            return {
                url: x,
                queryString: B,
                hashString: Ee,
                route: Ve,
                data: null,
                params: F
            }
        }

        function m() {
            return be(ee(ca(i)).replace(new RegExp("^" + i), ""))
        }

        function T(E) {
            var A = {
                instance: n,
                currentLocationPath: E,
                to: E,
                navigateOptions: {},
                resolveOptions: r
            };
            return pn(A, function() {}), A.matches ? A.matches : !1
        }

        function $(E, A, x) {
            typeof A < "u" && (typeof x > "u" || x) && (A = v(A));
            var B = {
                instance: n,
                to: A,
                currentLocationPath: A
            };
            ko(B, function() {}), typeof E == "string" && (E = typeof x > "u" || x ? v(E) : E);
            var F = ua(B, {
                name: String(E),
                path: E,
                handler: function() {},
                hooks: {}
            });
            return F || !1
        }

        function Y(E, A, x) {
            return typeof A == "string" && (A = H(A)), A ? (A.hooks[E] || (A.hooks[E] = []), A.hooks[E].push(x), function() {
                A.hooks[E] = A.hooks[E].filter(function(B) {
                    return B !== x
                })
            }) : (console.warn("Route doesn't exists: " + A), function() {})
        }

        function H(E) {
            return typeof E == "string" ? s.find(function(A) {
                return A.name === v(E)
            }) : s.find(function(A) {
                return A.handler === E
            })
        }

        function C(E) {
            E.instance.__dirty = !1, E.instance.__waiting.length > 0 && E.instance.__waiting.shift()()
        }
        this.root = i, this.routes = s, this.destroyed = a, this.current = o, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = C, this.on = w, this.off = q, this.resolve = I, this.navigate = L, this.navigateByName = J, this.destroy = ye, this.notFound = ae, this.updatePageLinks = ce, this.link = te, this.hooks = G, this.extractGETParameters = function(E) {
            return Lr(g(E))
        }, this.lastResolved = jt, this.generate = pe, this.getLinkPath = Ke, this.match = T, this.matchLocation = $, this.getCurrentLocation = m, this.addBeforeHook = Y.bind(this, "before"), this.addAfterHook = Y.bind(this, "after"), this.addAlreadyHook = Y.bind(this, "already"), this.addLeaveHook = Y.bind(this, "leave"), this.getRoute = H, this._pathToMatchObject = be, this._clean = ee, this._checkForAHash = g, this._setCurrent = function(E) {
            return o = n.current = E
        }, se.call(this), ce.call(this)
    }

    function em(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                e += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
    }

    function tm() {
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

    function hn(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = tm(), document.getElementsByTagName("html")[0].append(e);
        const n = document.getElementById("app");
        n.innerHTML = em(t)
    }

    function rm() {
        const t = window.tv.manifest;
        let e = "<div>";
        e += `   <h1>Current Manifest : ${t.environment}</h1>`;
        const r = new Date(t.loader.lastUpdated);
        return e += "   <h2>Loader</h2>", e += `   <p>last deployed: <strong>${r.toLocaleDateString()} ${r.toLocaleTimeString()}</strong></p>`, e += `   <p>branch: <strong>${t.loader.branch}</strong></p>`, e += `   <p>version: <strong>${t.loader.version}</strong></p>`, e += `   <p>type: <strong>${t.loader.type}</strong></p>`, e += "   <h2>Branches</h2>", Object.keys(t.branches).sort().forEach(n => {
            const i = t.branches[n],
                o = new Date(i.lastUpdated);
            e += "    <details>", e += "        <summary>", e += `            <span class="name">${n}</span>`, e += `            <span class="version">${i.version}</span>`, e += `            <span class="date">${o.toLocaleDateString()} ${o.toLocaleTimeString()}</span>`, e += `            <span class="type">${i.type}</span>`, e += `            <span class="type">${Object.keys(i.bundles).length} Apps</span>`, e += "        </summary>", Object.keys(i.bundles).forEach(s => {
                const a = i.bundles[s];
                a.version ? e += `        <p><span class="name">${s}</span> <span class="version">${a.version}</span></p>` : e += `        <p><span class="name">${s}</span> <span class="version">${i.version}</span></p>`
            }), e += "    </details>"
        }), e += "</div>", e
    }

    function nm() {
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

    function im() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = nm(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = rm()
    }
    const ut = new Zv("/"),
        om = () => {
            function t(r, n) {
                const i = n != null && n.queryString ? `?${n.queryString}` : "";
                ut.navigate(`${r}${i}`, {
                    historyAPIMethod: "replaceState"
                })
            }
            ut.hooks({
                before(r) {
                    var i;
                    const n = (i = ut.lastResolved()) == null ? void 0 : i[0];
                    (!n || n.route.name === "__NOT_FOUND__") && r()
                }
            });
            const e = new Map([
                ["TV", {
                    "/": r => {
                        window.tv.load({
                            app: "@connect",
                            match: r,
                            autoMount: !0
                        })
                    },
                    "/past-games": r => {
                        window.tv.load({
                            app: "@connect",
                            match: r,
                            autoMount: !0
                        })
                    },
                    "/past-games/:game": r => {
                        window.tv.load({
                            app: "@connect",
                            match: r,
                            autoMount: !0
                        })
                    },
                    "/moderator": r => {
                        window.tv.load({
                            app: "@moderator",
                            match: r,
                            autoMount: !0
                        })
                    },
                    "/moderate": r => {
                        t("/moderator", r)
                    },
                    "/moderation": r => {
                        t("/moderator", r)
                    },
                    "/moderador": r => {
                        t("/moderator", r)
                    },
                    "/moderateur": r => {
                        t("/moderator", r)
                    },
                    "/moderatore": r => {
                        t("/moderator", r)
                    },
                    "/([A-Za-z]{4})": r => {
                        const n = r;
                        n.params || (n.params = {}), n.params.code || (n.params.code = n.url), window.tv.load({
                            app: "@connect",
                            match: n,
                            autoMount: !0
                        })
                    },
                    "/manifest": r => {
                        im()
                    },
                    "/debug": r => {
                        hn()
                    },
                    "/debug/:app": r => {
                        hn(r.data.app)
                    },
                    "/debug/local/:app": r => {
                        hn(r.data.app)
                    },
                    "/debug/local/:app/:file/:marker": r => {
                        window.tv.debugLoad("local", r)
                    },
                    "/debug/local/:app/:file": r => {
                        window.tv.debugLoad("local", r)
                    },
                    "/debug/cloud/:app/:file/:marker": r => {
                        window.tv.debugLoad("cloud", r)
                    },
                    "/debug/cloud/:app/:file": r => {
                        window.tv.debugLoad("cloud", r)
                    }
                }],
                ["TEEKO_WEB", {
                    "/": r => {
                        window.tv.load({
                            app: "@teeko-web",
                            match: r,
                            autoMount: !0
                        })
                    },
                    "/event": r => {
                        window.tv.load({
                            app: "@teeko-web",
                            match: r,
                            autoMount: !0
                        })
                    }
                }]
            ]);
            ut.on(e.get(window.tv.location)), ut.notFound(r => {
                t("/", r)
            })
        },
        sm = () => {
            ut.resolve()
        },
        am = 9091,
        cm = "teeko.jackboxgames",
        um = "production",
        fm = 1,
        lm = {
            branch: "main",
            sha: "ae32f4d4ba5cba343a8072829697780c202da17b",
            lastUpdated: 1692386812922,
            version: "5.241.119",
            type: "production"
        },
        pm = {
            main: {
                sha: "ae32f4d4ba5cba343a8072829697780c202da17b",
                lastUpdated: 1692386812922,
                version: "5.241.119",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.229.113"
                    },
                    "the-wheel": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp8/the-wheel",
                        version: "5.94.0"
                    },
                    "drawful-animate": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp8/drawful-animate",
                        version: "5.229.113"
                    },
                    "@moderator": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@moderator",
                        version: "5.219.105"
                    },
                    "awshirt-tjsp": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/tjsp/awshirt",
                        version: "5.94.0"
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
                        base: "main/pp7/worldchamps",
                        version: "5.144.39"
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
                        version: "5.94.0"
                    },
                    "triviadeath2-tjsp": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/tjsp/triviadeath2",
                        version: "5.120.22"
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
                        version: "5.229.113"
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
                        version: "5.94.0"
                    },
                    fourbage: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/fourbage",
                        version: "5.94.0"
                    },
                    htmf: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/htmf",
                        version: "5.94.0"
                    },
                    lineup: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/lineup",
                        version: "5.83.0"
                    },
                    "range-game": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/range-game",
                        version: "5.94.0"
                    },
                    prototype: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/internal/prototype",
                        version: "5.91.0"
                    },
                    "@teeko-web": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@teeko-web",
                        version: "5.229.113"
                    },
                    awshirt2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/awshirt2",
                        version: "5.236.119"
                    },
                    "nopus-opus": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/nopus-opus",
                        version: "5.237.119"
                    },
                    "risky-text": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/risky-text",
                        version: "5.239.119"
                    },
                    "time-trivia": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/time-trivia",
                        version: "5.241.119"
                    },
                    "us-them": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/us-them",
                        version: "5.238.119"
                    }
                }
            }
        },
        dm = {
            environment: um,
            version: fm,
            loader: lm,
            branches: pm
        },
        fi = dm;
    let hm = Av;
    const Ft = new hm(fi),
        ha = window.location.hostname,
        _m = Number(window.location.port),
        gm = ha === "localhost" && _m === am,
        ym = ha.includes(cm) || gm,
        vm = ym ? "TEEKO_WEB" : "TV";
    window.tv = {
        debugLoad: Ft.debugLoad,
        load: Ft.load,
        register: Ft.register,
        mount: Ft.mount,
        connect: Ft.connect,
        location: vm,
        manifest: fi
    };
    xv(fi);
    Fo.setup();
    Or.setup();
    om();
    sm()
});
export default mm();
//# sourceMappingURL=f9b7a6ef.js.map