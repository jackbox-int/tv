var ia = Object.defineProperty;
var oa = (t, e, r) => e in t ? ia(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var sa = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var se = (t, e, r) => (oa(t, typeof e != "symbol" ? e + "" : e, r), r);
var Bm = sa((Gm, zs) => {
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
    var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function aa(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var Re = {
            DEBUG: !1,
            LIB_VERSION: "2.48.1"
        },
        V;
    if (typeof window > "u") {
        var ti = {
            hostname: ""
        };
        V = {
            navigator: {
                userAgent: ""
            },
            document: {
                location: ti,
                referrer: ""
            },
            screen: {
                width: 0,
                height: 0
            },
            location: ti
        }
    } else V = window;
    var Sr = Array.prototype,
        ca = Function.prototype,
        _o = Object.prototype,
        Le = Sr.slice,
        Ht = _o.toString,
        wr = _o.hasOwnProperty,
        X = V.console,
        je = V.navigator,
        G = V.document,
        Xt = V.opera,
        ar = V.screen,
        Oe = je.userAgent,
        Gr = ca.bind,
        ri = Sr.forEach,
        ni = Sr.indexOf,
        ii = Sr.map,
        ua = Array.isArray,
        rn = {},
        c = {
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        B = {
            log: function() {
                if (Re.DEBUG && !c.isUndefined(X) && X) try {
                    X.log.apply(X, arguments)
                } catch {
                    c.each(arguments, function(e) {
                        X.log(e)
                    })
                }
            },
            warn: function() {
                if (Re.DEBUG && !c.isUndefined(X) && X) {
                    var t = ["Mixpanel warning:"].concat(c.toArray(arguments));
                    try {
                        X.warn.apply(X, t)
                    } catch {
                        c.each(t, function(r) {
                            X.warn(r)
                        })
                    }
                }
            },
            error: function() {
                if (Re.DEBUG && !c.isUndefined(X) && X) {
                    var t = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        X.error.apply(X, t)
                    } catch {
                        c.each(t, function(r) {
                            X.error(r)
                        })
                    }
                }
            },
            critical: function() {
                if (!c.isUndefined(X) && X) {
                    var t = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        X.error.apply(X, t)
                    } catch {
                        c.each(t, function(r) {
                            X.error(r)
                        })
                    }
                }
            }
        },
        Yr = function(t, e) {
            return function() {
                return arguments[0] = "[" + e + "] " + arguments[0], t.apply(B, arguments)
            }
        },
        yn = function(t) {
            return {
                log: Yr(B.log, t),
                error: Yr(B.error, t),
                critical: Yr(B.critical, t)
            }
        };
    c.bind = function(t, e) {
        var r, n;
        if (Gr && t.bind === Gr) return Gr.apply(t, Le.call(arguments, 1));
        if (!c.isFunction(t)) throw new TypeError;
        return r = Le.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, r.concat(Le.call(arguments)));
            var i = {};
            i.prototype = t.prototype;
            var o = new i;
            i.prototype = null;
            var s = t.apply(o, r.concat(Le.call(arguments)));
            return Object(s) === s ? s : o
        }, n
    };
    c.each = function(t, e, r) {
        if (t != null) {
            if (ri && t.forEach === ri) t.forEach(e, r);
            else if (t.length === +t.length) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (n in t && e.call(r, t[n], n, t) === rn) return
            } else
                for (var o in t)
                    if (wr.call(t, o) && e.call(r, t[o], o, t) === rn) return
        }
    };
    c.extend = function(t) {
        return c.each(Le.call(arguments, 1), function(e) {
            for (var r in e) e[r] !== void 0 && (t[r] = e[r])
        }), t
    };
    c.isArray = ua || function(t) {
        return Ht.call(t) === "[object Array]"
    };
    c.isFunction = function(t) {
        try {
            return /^\s*\bfunction\b/.test(t)
        } catch {
            return !1
        }
    };
    c.isArguments = function(t) {
        return !!(t && wr.call(t, "callee"))
    };
    c.toArray = function(t) {
        return t ? t.toArray ? t.toArray() : c.isArray(t) || c.isArguments(t) ? Le.call(t) : c.values(t) : []
    };
    c.map = function(t, e, r) {
        if (ii && t.map === ii) return t.map(e, r);
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
        return t === null ? r : ni && t.indexOf === ni ? t.indexOf(e) != -1 : (c.each(t, function(n) {
            if (r || (r = n === e)) return rn
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
                if (wr.call(t, e)) return !1;
            return !0
        }
        return !1
    };
    c.isUndefined = function(t) {
        return t === void 0
    };
    c.isString = function(t) {
        return Ht.call(t) == "[object String]"
    };
    c.isDate = function(t) {
        return Ht.call(t) == "[object Date]"
    };
    c.isNumber = function(t) {
        return Ht.call(t) == "[object Number]"
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
                        m = 0,
                        y = s,
                        b = [],
                        O = o[i];
                    switch (O && typeof O == "object" && typeof O.toJSON == "function" && (O = O.toJSON(i)), typeof O) {
                        case "string":
                            return r(O);
                        case "number":
                            return isFinite(O) ? String(O) : "null";
                        case "boolean":
                        case "null":
                            return String(O);
                        case "object":
                            if (!O) return "null";
                            if (s += a, b = [], Ht.apply(O) === "[object Array]") {
                                for (m = O.length, u = 0; u < m; u += 1) b[u] = n(u, O) || "null";
                                return h = b.length === 0 ? "[]" : s ? `[
` + s + b.join(`,
` + s) + `
` + y + "]" : "[" + b.join(",") + "]", s = y, h
                            }
                            for (f in O) wr.call(O, f) && (h = n(f, O), h && b.push(r(f) + (s ? ": " : ":") + h));
                            return h = b.length === 0 ? "{}" : s ? "{" + b.join(",") + y + "}" : "{" + b.join(",") + "}", s = y, h
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
                var O = new SyntaxError(b);
                throw O.at = t, O.text = n, O
            },
            o = function(b) {
                return b && b !== e && i("Expected '" + b + "' instead of '" + e + "'"), e = n.charAt(t), t += 1, e
            },
            s = function() {
                var b, O = "";
                for (e === "-" && (O = "-", o("-")); e >= "0" && e <= "9";) O += e, o();
                if (e === ".")
                    for (O += "."; o() && e >= "0" && e <= "9";) O += e;
                if (e === "e" || e === "E")
                    for (O += e, o(), (e === "-" || e === "+") && (O += e, o()); e >= "0" && e <= "9";) O += e, o();
                if (b = +O, !isFinite(b)) i("Bad number");
                else return b
            },
            a = function() {
                var b, O, T = "",
                    A;
                if (e === '"')
                    for (; o();) {
                        if (e === '"') return o(), T;
                        if (e === "\\")
                            if (o(), e === "u") {
                                for (A = 0, O = 0; O < 4 && (b = parseInt(o(), 16), !!isFinite(b)); O += 1) A = A * 16 + b;
                                T += String.fromCharCode(A)
                            } else if (typeof r[e] == "string") T += r[e];
                        else break;
                        else T += e
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
            h, m = function() {
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
            y = function() {
                var b, O = {};
                if (e === "{") {
                    if (o("{"), u(), e === "}") return o("}"), O;
                    for (; e;) {
                        if (b = a(), u(), o(":"), Object.hasOwnProperty.call(O, b) && i('Duplicate key "' + b + '"'), O[b] = h(), u(), e === "}") return o("}"), O;
                        o(","), u()
                    }
                }
                i("Bad object")
            };
        return h = function() {
                switch (u(), e) {
                    case "{":
                        return y();
                    case "[":
                        return m();
                    case '"':
                        return a();
                    case "-":
                        return s();
                    default:
                        return e >= "0" && e <= "9" ? s() : f()
                }
            },
            function(b) {
                var O;
                return n = b, t = 0, e = " ", O = h(), u(), e && i("Syntax error"), O
            }
    }();
    c.base64Encode = function(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r, n, i, o, s, a, u, f, h = 0,
            m = 0,
            y = "",
            b = [];
        if (!t) return t;
        t = c.utf8Encode(t);
        do r = t.charCodeAt(h++), n = t.charCodeAt(h++), i = t.charCodeAt(h++), f = r << 16 | n << 8 | i, o = f >> 18 & 63, s = f >> 12 & 63, a = f >> 6 & 63, u = f & 63, b[m++] = e.charAt(o) + e.charAt(s) + e.charAt(a) + e.charAt(u); while (h < t.length);
        switch (y = b.join(""), t.length % 3) {
            case 1:
                y = y.slice(0, -2) + "==";
                break;
            case 2:
                y = y.slice(0, -1) + "=";
                break
        }
        return y
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
                var n = 1 * new Date,
                    i;
                if (V.performance && V.performance.now) i = V.performance.now();
                else
                    for (i = 0; n == 1 * new Date;) i++;
                return n.toString(16) + Math.floor(i).toString(16)
            },
            e = function() {
                return Math.random().toString(16).replace(".", "")
            },
            r = function() {
                var n = Oe,
                    i, o, s = [],
                    a = 0;

                function u(f, h) {
                    var m, y = 0;
                    for (m = 0; m < h.length; m++) y |= s[m] << m * 8;
                    return f ^ y
                }
                for (i = 0; i < n.length; i++) o = n.charCodeAt(i), s.unshift(o & 255), s.length >= 4 && (a = u(a, s), s = []);
                return s.length > 0 && (a = u(a, s)), a.toString(16)
            };
        return function() {
            var n = (ar.height * ar.width).toString(16);
            return t() + "-" + e() + "-" + r() + "-" + n + "-" + t()
        }
    }();
    var oi = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
    c.isBlockedUA = function(t) {
        var e;
        for (t = t.toLowerCase(), e = 0; e < oi.length; e++)
            if (t.indexOf(oi[e]) !== -1) return !0;
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
            B.error("Skipping decoding for malformed query param: " + o)
        }
        return o.replace(/\+/g, " ")
    };
    c.cookie = {
        get: function(t) {
            for (var e = t + "=", r = G.cookie.split(";"), n = 0; n < r.length; n++) {
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
                var h = si(G.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var m = new Date;
                m.setTime(m.getTime() + r * 1e3), u = "; expires=" + m.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure"), G.cookie = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f
        },
        set: function(t, e, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var h = si(G.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var m = new Date;
                m.setTime(m.getTime() + r * 24 * 60 * 60 * 1e3), u = "; expires=" + m.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure");
            var y = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f;
            return G.cookie = y, y
        },
        remove: function(t, e, r) {
            c.cookie.set(t, "", -1, e, !1, !1, r)
        }
    };
    var Hr = null,
        cr = function(t, e) {
            if (Hr !== null && !e) return Hr;
            var r = !0;
            try {
                t = t || window.localStorage;
                var n = "__mplss_" + mn(8),
                    i = "xyz";
                t.setItem(n, i), t.getItem(n) !== i && (r = !1), t.removeItem(n)
            } catch {
                r = !1
            }
            return Hr = r, r
        };
    c.localStorage = {
        is_supported: function(t) {
            var e = cr(null, t);
            return e || B.error("localStorage unsupported; falling back to cookie store"), e
        },
        error: function(t) {
            B.error("localStorage error: " + t)
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
                B.error("No valid element provided to register_event");
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
    var fa = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
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
            if (!G.getElementsByTagName) return [];
            var o = i.split(" "),
                s, a, u, f, h, m, y, b, O, T, A = [G];
            for (m = 0; m < o.length; m++) {
                if (s = o[m].replace(/^\s+/, "").replace(/\s+$/, ""), s.indexOf("#") > -1) {
                    a = s.split("#"), u = a[0];
                    var H = a[1],
                        F = G.getElementById(H);
                    if (!F || u && F.nodeName.toLowerCase() != u) return [];
                    A = [F];
                    continue
                }
                if (s.indexOf(".") > -1) {
                    a = s.split("."), u = a[0];
                    var ce = a[1];
                    for (u || (u = "*"), f = [], h = 0, y = 0; y < A.length; y++)
                        for (u == "*" ? O = t(A[y]) : O = A[y].getElementsByTagName(u), b = 0; b < O.length; b++) f[h++] = O[b];
                    for (A = [], T = 0, y = 0; y < f.length; y++) f[y].className && c.isString(f[y].className) && r(f[y], ce) && (A[T++] = f[y]);
                    continue
                }
                var Se = s.match(fa);
                if (Se) {
                    u = Se[1];
                    var ue = Se[2],
                        fe = Se[3],
                        he = Se[4];
                    for (u || (u = "*"), f = [], h = 0, y = 0; y < A.length; y++)
                        for (u == "*" ? O = t(A[y]) : O = A[y].getElementsByTagName(u), b = 0; b < O.length; b++) f[h++] = O[b];
                    A = [], T = 0;
                    var _e;
                    switch (fe) {
                        case "=":
                            _e = function(L) {
                                return L.getAttribute(ue) == he
                            };
                            break;
                        case "~":
                            _e = function(L) {
                                return L.getAttribute(ue).match(new RegExp("\\b" + he + "\\b"))
                            };
                            break;
                        case "|":
                            _e = function(L) {
                                return L.getAttribute(ue).match(new RegExp("^" + he + "-?"))
                            };
                            break;
                        case "^":
                            _e = function(L) {
                                return L.getAttribute(ue).indexOf(he) === 0
                            };
                            break;
                        case "$":
                            _e = function(L) {
                                return L.getAttribute(ue).lastIndexOf(he) == L.getAttribute(ue).length - he.length
                            };
                            break;
                        case "*":
                            _e = function(L) {
                                return L.getAttribute(ue).indexOf(he) > -1
                            };
                            break;
                        default:
                            _e = function(L) {
                                return L.getAttribute(ue)
                            }
                    }
                    for (A = [], T = 0, y = 0; y < f.length; y++) _e(f[y]) && (A[T++] = f[y]);
                    continue
                }
                for (u = s, f = [], h = 0, y = 0; y < A.length; y++)
                    for (O = A[y].getElementsByTagName(u), b = 0; b < O.length; b++) f[h++] = O[b];
                A = f
            }
            return A
        }
        return function(i) {
            return c.isElement(i) ? [i] : c.isObject(i) && !c.isUndefined(i.length) ? i : n.call(this, i)
        }
    }();
    var la = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
        pa = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "ttclid", "twclid", "wbraid"];
    c.info = {
        campaignParams: function(t) {
            var e = "",
                r = {};
            return c.each(la, function(n) {
                e = c.getQueryParam(G.URL, n), e.length ? r[n] = e : t !== void 0 && (r[n] = t)
            }), r
        },
        clickParams: function() {
            var t = "",
                e = {};
            return c.each(pa, function(r) {
                t = c.getQueryParam(G.URL, r), t.length && (e[r] = t)
            }), e
        },
        marketingParams: function() {
            return c.extend(c.info.campaignParams(), c.info.clickParams())
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
            var t = Oe;
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
                $browser: c.info.browser(Oe, je.vendor, Xt),
                $referrer: G.referrer,
                $referring_domain: c.info.referringDomain(G.referrer),
                $device: c.info.device(Oe)
            }), {
                $current_url: V.location.href,
                $browser_version: c.info.browserVersion(Oe, je.vendor, Xt),
                $screen_height: ar.height,
                $screen_width: ar.width,
                mp_lib: "web",
                $lib_version: Re.LIB_VERSION,
                $insert_id: mn(),
                time: c.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(Oe, je.vendor, Xt)
            }), {
                $browser_version: c.info.browserVersion(Oe, je.vendor, Xt)
            })
        },
        mpPageViewProperties: function() {
            return c.strip_empty_properties({
                current_page_title: G.title,
                current_domain: V.location.hostname,
                current_url_path: V.location.pathname,
                current_url_protocol: V.location.protocol,
                current_url_search: V.location.search
            })
        }
    };
    var mn = function(t) {
            var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return t ? e.substring(0, t) : e
        },
        da = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        ha = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        si = function(t) {
            var e = ha,
                r = t.split("."),
                n = r[r.length - 1];
            (n.length > 4 || n === "com" || n === "org") && (e = da);
            var i = t.match(e);
            return i ? i[0] : ""
        },
        ur = null,
        fr = null;
    typeof JSON < "u" && (ur = JSON.stringify, fr = JSON.parse);
    ur = ur || c.JSONEncode;
    fr = fr || c.JSONDecode;
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
    var Ie = function() {};
    Ie.prototype.create_properties = function() {};
    Ie.prototype.event_handler = function() {};
    Ie.prototype.after_track_handler = function() {};
    Ie.prototype.init = function(t) {
        return this.mp = t, this
    };
    Ie.prototype.track = function(t, e, r, n) {
        var i = this,
            o = c.dom_query(t);
        if (o.length === 0) {
            B.error("The DOM query (" + t + ") returned 0 elements");
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
    Ie.prototype.track_callback = function(t, e, r, n) {
        n = n || !1;
        var i = this;
        return function() {
            r.callback_fired || (r.callback_fired = !0, !(t && t(n, e) === !1) && i.after_track_handler(e, r, n))
        }
    };
    Ie.prototype.create_properties = function(t, e) {
        var r;
        return typeof t == "function" ? r = t(e) : r = c.extend({}, t), r
    };
    var ht = function() {
        this.override_event = "click"
    };
    c.inherit(ht, Ie);
    ht.prototype.create_properties = function(t, e) {
        var r = ht.superclass.create_properties.apply(this, arguments);
        return e.href && (r.url = e.href), r
    };
    ht.prototype.event_handler = function(t, e, r) {
        r.new_tab = t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank", r.href = e.href, r.new_tab || t.preventDefault()
    };
    ht.prototype.after_track_handler = function(t, e) {
        e.new_tab || setTimeout(function() {
            window.location = e.href
        }, 0)
    };
    var Or = function() {
        this.override_event = "submit"
    };
    c.inherit(Or, Ie);
    Or.prototype.event_handler = function(t, e, r) {
        r.element = e, t.preventDefault()
    };
    Or.prototype.after_track_handler = function(t, e) {
        setTimeout(function() {
            e.element.submit()
        }, 0)
    };
    var _a = yn("lock"),
        go = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
        };
    go.prototype.withLock = function(t, e, r) {
        !r && typeof e != "function" && (r = e, e = null);
        var n = r || new Date().getTime() + "|" + Math.random(),
            i = new Date().getTime(),
            o = this.storageKey,
            s = this.pollIntervalMS,
            a = this.timeoutMS,
            u = this.storage,
            f = o + ":X",
            h = o + ":Y",
            m = o + ":Z",
            y = function(F) {
                e && e(F)
            },
            b = function(F) {
                if (new Date().getTime() - i > a) {
                    _a.error("Timeout waiting for mutex on " + o + "; clearing lock. [" + n + "]"), u.removeItem(m), u.removeItem(h), A();
                    return
                }
                setTimeout(function() {
                    try {
                        F()
                    } catch (ce) {
                        y(ce)
                    }
                }, s * (Math.random() + .1))
            },
            O = function(F, ce) {
                F() ? ce() : b(function() {
                    O(F, ce)
                })
            },
            T = function() {
                var F = u.getItem(h);
                if (F && F !== n) return !1;
                if (u.setItem(h, n), u.getItem(h) === n) return !0;
                if (!cr(u, !0)) throw new Error("localStorage support dropped while acquiring lock");
                return !1
            },
            A = function() {
                u.setItem(f, n), O(T, function() {
                    if (u.getItem(f) === n) {
                        H();
                        return
                    }
                    b(function() {
                        if (u.getItem(h) !== n) {
                            A();
                            return
                        }
                        O(function() {
                            return !u.getItem(m)
                        }, H)
                    })
                })
            },
            H = function() {
                u.setItem(m, "1");
                try {
                    t()
                } finally {
                    u.removeItem(m), u.getItem(h) === n && u.removeItem(h), u.getItem(f) === n && u.removeItem(f)
                }
            };
        try {
            if (cr(u, !0)) A();
            else throw new Error("localStorage support check failed")
        } catch (F) {
            y(F)
        }
    };
    var ai = yn("batch"),
        Fe = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || c.bind(ai.error, ai), this.lock = new go(t, {
                storage: this.storage
            }), this.pid = e.pid || null, this.memQueue = []
        };
    Fe.prototype.enqueue = function(t, e, r) {
        var n = {
            id: mn(),
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
    Fe.prototype.fillBatch = function(t) {
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
    var ci = function(t, e) {
        var r = [];
        return c.each(t, function(n) {
            n.id && !e[n.id] && r.push(n)
        }), r
    };
    Fe.prototype.removeItemsByID = function(t, e) {
        var r = {};
        c.each(t, function(i) {
            r[i] = !0
        }), this.memQueue = ci(this.memQueue, r);
        var n = c.bind(function() {
            var i;
            try {
                var o = this.readFromStorage();
                if (o = ci(o, r), i = this.saveToStorage(o), i) {
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
            if (this.reportError("Error acquiring storage lock", o), !cr(this.storage, !0) && (s = n(), !s)) try {
                this.storage.removeItem(this.storageKey)
            } catch (a) {
                this.reportError("Error clearing queue", a)
            }
            e && e(s)
        }, this), this.pid)
    };
    var ui = function(t, e) {
        var r = [];
        return c.each(t, function(n) {
            var i = n.id;
            if (i in e) {
                var o = e[i];
                o !== null && (n.payload = o, r.push(n))
            } else r.push(n)
        }), r
    };
    Fe.prototype.updatePayloads = function(t, e) {
        this.memQueue = ui(this.memQueue, t), this.lock.withLock(c.bind(function() {
            var n;
            try {
                var i = this.readFromStorage();
                i = ui(i, t), n = this.saveToStorage(i)
            } catch {
                this.reportError("Error updating items", t), n = !1
            }
            e && e(n)
        }, this), c.bind(function(n) {
            this.reportError("Error acquiring storage lock", n), e && e(!1)
        }, this), this.pid)
    };
    Fe.prototype.readFromStorage = function() {
        var t;
        try {
            t = this.storage.getItem(this.storageKey), t && (t = fr(t), c.isArray(t) || (this.reportError("Invalid storage entry:", t), t = null))
        } catch (e) {
            this.reportError("Error retrieving queue", e), t = null
        }
        return t || []
    };
    Fe.prototype.saveToStorage = function(t) {
        try {
            return this.storage.setItem(this.storageKey, ur(t)), !0
        } catch (e) {
            return this.reportError("Error saving queue", e), !1
        }
    };
    Fe.prototype.clear = function() {
        this.memQueue = [], this.storage.removeItem(this.storageKey)
    };
    var ga = 10 * 60 * 1e3,
        Lt = yn("batch"),
        Te = function(t, e) {
            this.errorReporter = e.errorReporter, this.queue = new Fe(t, {
                errorReporter: c.bind(this.reportError, this),
                storage: e.storage
            }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0, this.itemIdsSentSuccessfully = {}
        };
    Te.prototype.enqueue = function(t, e) {
        this.queue.enqueue(t, this.flushInterval, e)
    };
    Te.prototype.start = function() {
        this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
    };
    Te.prototype.stop = function() {
        this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
    };
    Te.prototype.clear = function() {
        this.queue.clear()
    };
    Te.prototype.resetBatchSize = function() {
        this.batchSize = this.libConfig.batch_size
    };
    Te.prototype.resetFlush = function() {
        this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
    };
    Te.prototype.scheduleFlush = function(t) {
        this.flushInterval = t, this.stopped || (this.timeoutID = setTimeout(c.bind(this.flush, this), this.flushInterval))
    };
    Te.prototype.flush = function(t) {
        try {
            if (this.requestInProgress) {
                Lt.log("Flush: Request already in progress");
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
                    if (this.beforeSendHook && !f.orphaned && (h = this.beforeSendHook(h)), h) {
                        h.event && h.properties && (h.properties = c.extend({}, h.properties, {
                            mp_sent_by_lib_version: Re.LIB_VERSION
                        }));
                        var m = !0,
                            y = f.id;
                        y ? (this.itemIdsSentSuccessfully[y] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
                            item: f,
                            batchSize: i.length,
                            timesSent: this.itemIdsSentSuccessfully[y]
                        }), m = !1) : this.reportError("[dupe] found item with no ID", {
                            item: f
                        }), m && o.push(h)
                    }
                    s[f.id] = h
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
                            var m = this.flushInterval * 2,
                                y = f.xhr_req.responseHeaders;
                            if (y) {
                                var b = y["Retry-After"];
                                b && (m = parseInt(b, 10) * 1e3 || m)
                            }
                            m = Math.min(ga, m), this.reportError("Error; retry in " + m + " ms"), this.scheduleFlush(m)
                        } else if (c.isObject(f) && f.xhr_req && f.xhr_req.status === 413)
                            if (i.length > 1) {
                                var O = Math.max(1, Math.floor(n / 2));
                                this.batchSize = Math.min(this.batchSize, O, i.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                            } else this.reportError("Single-event request too large; dropping", i), this.resetBatchSize(), h = !0;
                        else h = !0;
                        h && (this.queue.removeItemsByID(c.map(i, function(T) {
                            return T.id
                        }), c.bind(function(T) {
                            T ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                        }, this)), c.each(i, c.bind(function(T) {
                            var A = T.id;
                            A ? (this.itemIdsSentSuccessfully[A] = this.itemIdsSentSuccessfully[A] || 0, this.itemIdsSentSuccessfully[A]++, this.itemIdsSentSuccessfully[A] > 5 && this.reportError("[dupe] item ID sent too many times", {
                                item: T,
                                batchSize: i.length,
                                timesSent: this.itemIdsSentSuccessfully[A]
                            })) : this.reportError("[dupe] found item with no ID while removing", {
                                item: T
                            })
                        }, this)))
                    } catch (T) {
                        this.reportError("Error handling API response", T), this.resetFlush()
                    }
                }, this),
                u = {
                    method: "POST",
                    verbose: !0,
                    ignore_json_errors: !0,
                    timeout_ms: e
                };
            t.unloading && (u.transport = "sendBeacon"), Lt.log("MIXPANEL REQUEST:", o), this.sendRequest(o, u, a)
        } catch (f) {
            this.reportError("Error flushing request queue", f), this.resetFlush()
        }
    };
    Te.prototype.reportError = function(t, e) {
        if (Lt.error.apply(Lt.error, arguments), this.errorReporter) try {
            e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
        } catch (r) {
            Lt.error(r)
        }
    };
    var ya = "__mp_opt_in_out_";

    function ma(t, e) {
        vo(!0, t, e)
    }

    function va(t, e) {
        vo(!1, t, e)
    }

    function ba(t, e) {
        return mo(t, e) === "1"
    }

    function yo(t, e) {
        if (Sa(e)) return B.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = mo(t, e) === "0";
        return r && B.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function bt(t) {
        return En(t, function(e) {
            return this.get_config(e)
        })
    }

    function qe(t) {
        return En(t, function(e) {
            return this._get_config(e)
        })
    }

    function Et(t) {
        return En(t, function(e) {
            return this._get_config(e)
        })
    }

    function Ea(t, e) {
        e = e || {}, vn(e).remove(bn(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
    }

    function vn(t) {
        return t = t || {}, t.persistenceType === "localStorage" ? c.localStorage : c.cookie
    }

    function bn(t, e) {
        return e = e || {}, (e.persistencePrefix || ya) + t
    }

    function mo(t, e) {
        return vn(e).get(bn(t, e))
    }

    function Sa(t) {
        if (t && t.ignoreDnt) return !1;
        var e = t && t.window || V,
            r = e.navigator || {},
            n = !1;
        return c.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(i) {
            c.includes([!0, 1, "1", "yes"], i) && (n = !0)
        }), n
    }

    function vo(t, e, r) {
        if (!c.isString(e) || !e.length) {
            B.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
            return
        }
        r = r || {}, vn(r).set(bn(e, r), t ? 1 : 0, c.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0
        })
    }

    function En(t, e) {
        return function() {
            var r = !1;
            try {
                var n = e.call(this, "token"),
                    i = e.call(this, "ignore_dnt"),
                    o = e.call(this, "opt_out_tracking_persistence_type"),
                    s = e.call(this, "opt_out_tracking_cookie_prefix"),
                    a = e.call(this, "window");
                n && (r = yo(n, {
                    ignoreDnt: i,
                    persistenceType: o,
                    persistencePrefix: s,
                    window: a
                }))
            } catch (f) {
                B.error("Unexpected error when checking tracking opt-out status: " + f)
            }
            if (!r) return t.apply(this, arguments);
            var u = arguments[arguments.length - 1];
            typeof u == "function" && u(0)
        }
    }
    var Me = "$set",
        _t = "$set_once",
        be = "$unset",
        Ke = "$add",
        ke = "$append",
        Ve = "$union",
        Ae = "$remove",
        wa = "$delete",
        bo = {
            set_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[Me] = n, r
            },
            unset_action: function(t) {
                var e = {},
                    r = [];
                return c.isArray(t) || (t = [t]), c.each(t, function(n) {
                    this._is_reserved_property(n) || r.push(n)
                }, this), e[be] = r, e
            },
            set_once_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[_t] = n, r
            },
            union_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = c.isArray(i) ? i : [i])
                }, this) : n[t] = c.isArray(e) ? e : [e], r[Ve] = n, r
            },
            append_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[ke] = n, r
            },
            remove_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[Ae] = n, r
            },
            delete_action: function() {
                var t = {};
                return t[wa] = "", t
            }
        },
        z = function() {};
    c.extend(z.prototype, bo);
    z.prototype._init = function(t, e, r) {
        this._mixpanel = t, this._group_key = e, this._group_id = r
    };
    z.prototype.set = Et(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    z.prototype.set_once = Et(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    z.prototype.unset = Et(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    z.prototype.union = Et(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    z.prototype.delete = Et(function(t) {
        var e = this.delete_action();
        return this._send_request(e, t)
    });
    z.prototype.remove = Et(function(t, e, r) {
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    z.prototype._send_request = function(t, e) {
        t.$group_key = this._group_key, t.$group_id = this._group_id, t.$token = this._get_config("token");
        var r = c.encodeDates(t);
        return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").groups,
            batcher: this._mixpanel.request_batchers.groups
        }, e)
    };
    z.prototype._is_reserved_property = function(t) {
        return t === "$group_key" || t === "$group_id"
    };
    z.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    z.prototype.toString = function() {
        return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
    };
    z.prototype.remove = z.prototype.remove;
    z.prototype.set = z.prototype.set;
    z.prototype.set_once = z.prototype.set_once;
    z.prototype.union = z.prototype.union;
    z.prototype.unset = z.prototype.unset;
    z.prototype.toString = z.prototype.toString;
    var D = function() {};
    c.extend(D.prototype, bo);
    D.prototype._init = function(t) {
        this._mixpanel = t
    };
    D.prototype.set = qe(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n[Me] = c.extend({}, c.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[Me]), this._send_request(n, r)
    });
    D.prototype.set_once = qe(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    D.prototype.unset = qe(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    D.prototype.increment = qe(function(t, e, r) {
        var n = {},
            i = {};
        return c.isObject(t) ? (c.each(t, function(o, s) {
            if (!this._is_reserved_property(s))
                if (isNaN(parseFloat(o))) {
                    B.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else i[s] = o
        }, this), r = e) : (c.isUndefined(e) && (e = 1), i[t] = e), n[Ke] = i, this._send_request(n, r)
    });
    D.prototype.append = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.append_action(t, e);
        return this._send_request(n, r)
    });
    D.prototype.remove = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    D.prototype.union = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    D.prototype.track_charge = qe(function(t, e, r) {
        if (!c.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
            B.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
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
            B.error("mixpanel.people.delete_user() requires you to call identify() first");
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
            endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").engage,
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
        Me in t ? this._mixpanel.persistence._add_to_people_queue(Me, t) : _t in t ? this._mixpanel.persistence._add_to_people_queue(_t, t) : be in t ? this._mixpanel.persistence._add_to_people_queue(be, t) : Ke in t ? this._mixpanel.persistence._add_to_people_queue(Ke, t) : ke in t ? this._mixpanel.persistence._add_to_people_queue(ke, t) : Ae in t ? this._mixpanel.persistence._add_to_people_queue(Ae, t) : Ve in t ? this._mixpanel.persistence._add_to_people_queue(Ve, t) : B.error("Invalid call to _enqueue():", t)
    };
    D.prototype._flush_one_queue = function(t, e, r, n) {
        var i = this,
            o = c.extend({}, this._mixpanel.persistence.load_queue(t)),
            s = o;
        !c.isUndefined(o) && c.isObject(o) && !c.isEmptyObject(o) && (i._mixpanel.persistence._pop_from_people_queue(t, o), i._mixpanel.persistence.save(), n && (s = n(o)), e.call(i, s, function(a, u) {
            a === 0 && i._mixpanel.persistence._add_to_people_queue(t, o), c.isUndefined(r) || r(a, u)
        }))
    };
    D.prototype._flush = function(t, e, r, n, i, o, s) {
        var a = this;
        this._flush_one_queue(Me, this.set, t), this._flush_one_queue(_t, this.set_once, n), this._flush_one_queue(be, this.unset, o, function(A) {
            return c.keys(A)
        }), this._flush_one_queue(Ke, this.increment, e), this._flush_one_queue(Ve, this.union, i);
        var u = this._mixpanel.persistence.load_queue(ke);
        if (!c.isUndefined(u) && c.isArray(u) && u.length)
            for (var f, h = function(A, H) {
                    A === 0 && a._mixpanel.persistence._add_to_people_queue(ke, f), c.isUndefined(r) || r(A, H)
                }, m = u.length - 1; m >= 0; m--) u = this._mixpanel.persistence.load_queue(ke), f = u.pop(), a._mixpanel.persistence.save(), c.isEmptyObject(f) || a.append(f, h);
        var y = this._mixpanel.persistence.load_queue(Ae);
        if (!c.isUndefined(y) && c.isArray(y) && y.length)
            for (var b, O = function(A, H) {
                    A === 0 && a._mixpanel.persistence._add_to_people_queue(Ae, b), c.isUndefined(s) || s(A, H)
                }, T = y.length - 1; T >= 0; T--) y = this._mixpanel.persistence.load_queue(Ae), b = y.pop(), a._mixpanel.persistence.save(), c.isEmptyObject(b) || a.remove(b, O)
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
    var Sn = "__mps",
        wn = "__mpso",
        On = "__mpus",
        kn = "__mpa",
        Tn = "__mpap",
        xn = "__mpr",
        Rn = "__mpu",
        Eo = "$people_distinct_id",
        lr = "__alias",
        Mt = "__timers",
        Oa = [Sn, wn, On, kn, Tn, xn, Rn, Eo, lr, Mt],
        C = function(t) {
            this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
            var e = t.persistence;
            e !== "cookie" && e !== "localStorage" && (B.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && c.localStorage.is_supported() ? this.storage = c.localStorage : this.storage = c.cookie, this.load(), this.update_config(t), this.upgrade(t), this.save()
        };
    C.prototype.properties = function() {
        var t = {};
        return this.load(), c.each(this.props, function(e, r) {
            c.include(Oa, r) || (t[r] = e)
        }), t
    };
    C.prototype.load = function() {
        if (!this.disabled) {
            var t = this.storage.parse(this.name);
            t && (this.props = c.extend({}, t))
        }
    };
    C.prototype.upgrade = function(t) {
        var e = t.upgrade,
            r, n;
        e && (r = "mp_super_properties", typeof e == "string" && (r = e), n = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), n && (this.props = c.extend(this.props, n.all, n.events))), !t.cookie_name && t.name !== "mixpanel" && (r = "mp_" + t.token + "_" + t.name, n = this.storage.parse(r), n && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(n))), this.storage === c.localStorage && (n = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, !0), n && this.register_once(n))
    };
    C.prototype.save = function() {
        this.disabled || this.storage.set(this.name, c.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
    };
    C.prototype.load_prop = function(t) {
        return this.load(), this.props[t]
    };
    C.prototype.remove = function() {
        this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
    };
    C.prototype.clear = function() {
        this.remove(), this.props = {}
    };
    C.prototype.register_once = function(t, e, r) {
        return c.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, this.load(), c.each(t, function(n, i) {
            (!this.props.hasOwnProperty(i) || this.props[i] === e) && (this.props[i] = n)
        }, this), this.save(), !0) : !1
    };
    C.prototype.register = function(t, e) {
        return c.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, this.load(), c.extend(this.props, t), this.save(), !0) : !1
    };
    C.prototype.unregister = function(t) {
        this.load(), t in this.props && (delete this.props[t], this.save())
    };
    C.prototype.update_search_keyword = function(t) {
        this.register(c.info.searchInfo(t))
    };
    C.prototype.update_referrer_info = function(t) {
        this.register_once({
            $initial_referrer: t || "$direct",
            $initial_referring_domain: c.info.referringDomain(t) || "$direct"
        }, "")
    };
    C.prototype.get_referrer_info = function() {
        return c.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    C.prototype.update_config = function(t) {
        this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
    };
    C.prototype.set_disabled = function(t) {
        this.disabled = t, this.disabled ? this.remove() : this.save()
    };
    C.prototype.set_cookie_domain = function(t) {
        t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
    };
    C.prototype.set_cross_site = function(t) {
        t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
    };
    C.prototype.set_cross_subdomain = function(t) {
        t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
    };
    C.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    C.prototype.set_secure = function(t) {
        t !== this.secure && (this.secure = !!t, this.remove(), this.save())
    };
    C.prototype._add_to_people_queue = function(t, e) {
        var r = this._get_queue_key(t),
            n = e[t],
            i = this._get_or_create_queue(Me),
            o = this._get_or_create_queue(_t),
            s = this._get_or_create_queue(be),
            a = this._get_or_create_queue(Ke),
            u = this._get_or_create_queue(Ve),
            f = this._get_or_create_queue(Ae, []),
            h = this._get_or_create_queue(ke, []);
        r === Sn ? (c.extend(i, n), this._pop_from_people_queue(Ke, n), this._pop_from_people_queue(Ve, n), this._pop_from_people_queue(be, n)) : r === wn ? (c.each(n, function(m, y) {
            y in o || (o[y] = m)
        }), this._pop_from_people_queue(be, n)) : r === On ? c.each(n, function(m) {
            c.each([i, o, a, u], function(y) {
                m in y && delete y[m]
            }), c.each(h, function(y) {
                m in y && delete y[m]
            }), s[m] = !0
        }) : r === kn ? (c.each(n, function(m, y) {
            y in i ? i[y] += m : (y in a || (a[y] = 0), a[y] += m)
        }, this), this._pop_from_people_queue(be, n)) : r === Rn ? (c.each(n, function(m, y) {
            c.isArray(m) && (y in u || (u[y] = []), u[y] = u[y].concat(m))
        }), this._pop_from_people_queue(be, n)) : r === xn ? (f.push(n), this._pop_from_people_queue(ke, n)) : r === Tn && (h.push(n), this._pop_from_people_queue(be, n)), B.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), B.log(e), this.save()
    };
    C.prototype._pop_from_people_queue = function(t, e) {
        var r = this.props[this._get_queue_key(t)];
        c.isUndefined(r) || c.each(e, function(n, i) {
            t === ke || t === Ae ? c.each(r, function(o) {
                o[i] === n && delete o[i]
            }) : delete r[i]
        }, this)
    };
    C.prototype.load_queue = function(t) {
        return this.load_prop(this._get_queue_key(t))
    };
    C.prototype._get_queue_key = function(t) {
        if (t === Me) return Sn;
        if (t === _t) return wn;
        if (t === be) return On;
        if (t === Ke) return kn;
        if (t === ke) return Tn;
        if (t === Ae) return xn;
        if (t === Ve) return Rn;
        B.error("Invalid queue:", t)
    };
    C.prototype._get_or_create_queue = function(t, e) {
        var r = this._get_queue_key(t);
        return e = c.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
    };
    C.prototype.set_event_timer = function(t, e) {
        var r = this.load_prop(Mt) || {};
        r[t] = e, this.props[Mt] = r, this.save()
    };
    C.prototype.remove_event_timer = function(t) {
        var e = this.load_prop(Mt) || {},
            r = e[t];
        return c.isUndefined(r) || (delete this.props[Mt][t], this.save()), r
    };
    var An, ne, So = 0,
        ka = 1,
        Ta = function(t) {
            return t
        },
        Bt = function() {},
        ye = "mixpanel",
        wo = "base64",
        xa = "json",
        In = "$device:",
        ot = V.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        Oo = !ot && Oe.indexOf("MSIE") === -1 && Oe.indexOf("Mozilla") === -1,
        pr = null;
    je.sendBeacon && (pr = function() {
        return je.sendBeacon.apply(je, arguments)
    });
    var ko = {
            track: "track/",
            engage: "engage/",
            groups: "groups/"
        },
        fi = {
            api_host: "https://api-js.mixpanel.com",
            api_routes: ko,
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: wo,
            app_host: "https://mixpanel.com",
            cdn: "https://cdn.mxpnl.com",
            cross_site_cookie: !1,
            cross_subdomain_cookie: !0,
            error_reporter: Bt,
            persistence: "cookie",
            persistence_name: "",
            cookie_domain: "",
            cookie_name: "",
            loaded: Bt,
            track_marketing: !0,
            track_pageview: !1,
            skip_first_touch_marketing: !1,
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
        To = !1,
        E = function() {},
        nn = function(t, e, r) {
            var n, i = r === ye ? ne : ne[r];
            if (i && An === So) n = i;
            else {
                if (i && !c.isArray(i)) {
                    B.error("You have already initialized " + r);
                    return
                }
                n = new E
            }
            if (n._cached_groups = {}, n._init(t, e, r), n.people = new D, n.people._init(n), !n.get_config("skip_first_touch_marketing")) {
                var o = c.info.campaignParams(null),
                    s = {},
                    a = !1;
                c.each(o, function(u, f) {
                    s["initial_" + f] = u, u && (a = !0)
                }), a && n.people.set_once(s)
            }
            return Re.DEBUG = Re.DEBUG || n.get_config("debug"), !c.isUndefined(i) && c.isArray(i) && (n._execute_array.call(n.people, i.people), n._execute_array(i)), n
        };
    E.prototype.init = function(t, e, r) {
        if (c.isUndefined(r)) {
            this.report_error("You must name your new library: init(token, config, name)");
            return
        }
        if (r === ye) {
            this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            return
        }
        var n = nn(t, e, r);
        return ne[r] = n, n._loaded(), n
    };
    E.prototype._init = function(t, e, r) {
        e = e || {}, this.__loaded = !0, this.config = {};
        var n = {};
        if (!("api_payload_format" in e)) {
            var i = e.api_host || fi.api_host;
            i.match(/\.mixpanel\.com/) && (n.api_payload_format = xa)
        }
        if (this.set_config(c.extend({}, fi, n, e, {
                name: r,
                token: t,
                callback_fn: (r === ye ? r : ye + "." + r) + "._jsc"
            })), this._jsc = Bt, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!c.localStorage.is_supported(!0) || !ot) this._batch_requests = !1, B.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"), c.each(this.get_batcher_configs(), function(a) {
                B.log("Clearing batch queue " + a.queue_key), c.localStorage.remove(a.queue_key)
            });
            else if (this.init_batchers(), pr && V.addEventListener) {
                var o = c.bind(function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }, this);
                V.addEventListener("pagehide", function(a) {
                    a.persisted && o()
                }), V.addEventListener("visibilitychange", function() {
                    G.visibilityState === "hidden" && o()
                })
            }
        }
        this.persistence = this.cookie = new C(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
        var s = c.UUID();
        this.get_distinct_id() || this.register_once({
            distinct_id: In + s,
            $device_id: s
        }, ""), this.get_config("track_pageview") && this.track_pageview()
    };
    E.prototype._loaded = function() {
        this.get_config("loaded")(this), this._set_default_superprops()
    };
    E.prototype._set_default_superprops = function() {
        this.persistence.update_search_keyword(G.referrer), this.get_config("store_google") && this.register(c.info.campaignParams()), this.get_config("save_referrer") && this.persistence.update_referrer_info(G.referrer)
    };
    E.prototype._dom_loaded = function() {
        c.each(this.__dom_loaded_queue, function(t) {
            this._track_dom.apply(this, t)
        }, this), this.has_opted_out_tracking() || c.each(this.__request_queue, function(t) {
            this._send_request.apply(this, t)
        }, this), delete this.__dom_loaded_queue, delete this.__request_queue
    };
    E.prototype._track_dom = function(t, e) {
        if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
        if (!To) return this.__dom_loaded_queue.push([t, e]), !1;
        var r = new t().init(this);
        return r.track.apply(r, e)
    };
    E.prototype._prepare_callback = function(t, e) {
        if (c.isUndefined(t)) return null;
        if (ot) {
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
    E.prototype._send_request = function(t, e, r, n) {
        var i = !0;
        if (Oo) return this.__request_queue.push(arguments), i;
        var o = {
                method: this.get_config("api_method"),
                transport: this.get_config("api_transport"),
                verbose: this.get_config("verbose")
            },
            s = null;
        !n && (c.isFunction(r) || typeof r == "string") && (n = r, r = null), r = c.extend(o, r || {}), ot || (r.method = "GET");
        var a = r.method === "POST",
            u = pr && a && r.transport.toLowerCase() === "sendbeacon",
            f = r.verbose;
        e.verbose && (f = !0), this.get_config("test") && (e.test = 1), f && (e.verbose = 1), this.get_config("img") && (e.img = 1), ot || (n ? e.callback = n : (f || this.get_config("test")) && (e.callback = "(function(){})")), e.ip = this.get_config("ip") ? 1 : 0, e._ = new Date().getTime().toString(), a && (s = "data=" + encodeURIComponent(e.data), delete e.data), t += "?" + c.HTTPBuildQuery(e);
        var h = this;
        if ("img" in e) {
            var m = G.createElement("img");
            m.src = t, G.body.appendChild(m)
        } else if (u) {
            try {
                i = pr(t, s)
            } catch (H) {
                h.report_error(H), i = !1
            }
            try {
                n && n(i ? 1 : 0)
            } catch (H) {
                h.report_error(H)
            }
        } else if (ot) try {
            var y = new XMLHttpRequest;
            y.open(r.method, t, !0);
            var b = this.get_config("xhr_headers");
            if (a && (b["Content-Type"] = "application/x-www-form-urlencoded"), c.each(b, function(H, F) {
                    y.setRequestHeader(F, H)
                }), r.timeout_ms && typeof y.timeout < "u") {
                y.timeout = r.timeout_ms;
                var O = new Date().getTime()
            }
            y.withCredentials = !0, y.onreadystatechange = function() {
                if (y.readyState === 4)
                    if (y.status === 200) {
                        if (n)
                            if (f) {
                                var H;
                                try {
                                    H = c.JSONDecode(y.responseText)
                                } catch (ce) {
                                    if (h.report_error(ce), r.ignore_json_errors) H = y.responseText;
                                    else return
                                }
                                n(H)
                            } else n(Number(y.responseText))
                    } else {
                        var F;
                        y.timeout && !y.status && new Date().getTime() - O >= y.timeout ? F = "timeout" : F = "Bad HTTP status: " + y.status + " " + y.statusText, h.report_error(F), n && n(f ? {
                            status: 0,
                            error: F,
                            xhr_req: y
                        } : 0)
                    }
            }, y.send(s)
        } catch (H) {
            h.report_error(H), i = !1
        } else {
            var T = G.createElement("script");
            T.type = "text/javascript", T.async = !0, T.defer = !0, T.src = t;
            var A = G.getElementsByTagName("script")[0];
            A.parentNode.insertBefore(T, A)
        }
        return i
    };
    E.prototype._execute_array = function(t) {
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
    E.prototype.are_batchers_initialized = function() {
        return !!this.request_batchers.events
    };
    E.prototype.get_batcher_configs = function() {
        var t = "__mpq_" + this.get_config("token"),
            e = this.get_config("api_routes");
        return this._batcher_configs = this._batcher_configs || {
            events: {
                type: "events",
                endpoint: "/" + e.track,
                queue_key: t + "_ev"
            },
            people: {
                type: "people",
                endpoint: "/" + e.engage,
                queue_key: t + "_pp"
            },
            groups: {
                type: "groups",
                endpoint: "/" + e.groups,
                queue_key: t + "_gr"
            }
        }, this._batcher_configs
    };
    E.prototype.init_batchers = function() {
        if (!this.are_batchers_initialized()) {
            var t = c.bind(function(r) {
                    return new Te(r.queue_key, {
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
                }, this),
                e = this.get_batcher_configs();
            this.request_batchers = {
                events: t(e.events),
                people: t(e.people),
                groups: t(e.groups)
            }
        }
        this.get_config("batch_autostart") && this.start_batch_senders()
    };
    E.prototype.start_batch_senders = function() {
        this._batchers_were_started = !0, this.are_batchers_initialized() && (this._batch_requests = !0, c.each(this.request_batchers, function(t) {
            t.start()
        }))
    };
    E.prototype.stop_batch_senders = function() {
        this._batch_requests = !1, c.each(this.request_batchers, function(t) {
            t.stop(), t.clear()
        })
    };
    E.prototype.push = function(t) {
        this._execute_array([t])
    };
    E.prototype.disable = function(t) {
        typeof t > "u" ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(t)
    };
    E.prototype._encode_data_for_request = function(t) {
        var e = c.JSONEncode(t);
        return this.get_config("api_payload_format") === wo && (e = c.base64Encode(e)), {
            data: e
        }
    };
    E.prototype._track_or_batch = function(t, e) {
        var r = c.truncate(t.data, 255),
            n = t.endpoint,
            i = t.batcher,
            o = t.should_send_immediately,
            s = t.send_request_options || {};
        e = e || Bt;
        var a = !0,
            u = c.bind(function() {
                return s.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (B.log("MIXPANEL REQUEST:"), B.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(e, r))) : null
            }, this);
        return this._batch_requests && !o ? i.enqueue(r, function(f) {
            f ? e(1, r) : u()
        }) : a = u(), a && r
    };
    E.prototype.track = bt(function(t, e, r, n) {
        !n && typeof r == "function" && (n = r, r = null), r = r || {};
        var i = r.transport;
        i && (r.transport = i);
        var o = r.send_immediately;
        if (typeof n != "function" && (n = Bt), c.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.track");
            return
        }
        if (this._event_is_disabled(t)) {
            n(0);
            return
        }
        e = c.extend({}, e), e.token = this.get_config("token");
        var s = this.persistence.remove_event_timer(t);
        if (!c.isUndefined(s)) {
            var a = new Date().getTime() - s;
            e.$duration = parseFloat((a / 1e3).toFixed(3))
        }
        this._set_default_superprops();
        var u = this.get_config("track_marketing") ? c.info.marketingParams() : {};
        e = c.extend({}, c.info.properties(), u, this.persistence.properties(), this.unpersisted_superprops, e);
        var f = this.get_config("property_blacklist");
        c.isArray(f) ? c.each(f, function(y) {
            delete e[y]
        }) : this.report_error("Invalid value for property_blacklist config: " + f);
        var h = {
                event: t,
                properties: e
            },
            m = this._track_or_batch({
                type: "events",
                data: h,
                endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes").track,
                batcher: this.request_batchers.events,
                should_send_immediately: o,
                send_request_options: r
            }, n);
        return m
    });
    E.prototype.set_group = bt(function(t, e, r) {
        c.isArray(e) || (e = [e]);
        var n = {};
        return n[t] = e, this.register(n), this.people.set(t, e, r)
    });
    E.prototype.add_group = bt(function(t, e, r) {
        var n = this.get_property(t),
            i = {};
        return n === void 0 ? (i[t] = [e], this.register(i)) : n.indexOf(e) === -1 && (n.push(e), i[t] = n, this.register(i)), this.people.union(t, e, r)
    });
    E.prototype.remove_group = bt(function(t, e, r) {
        var n = this.get_property(t);
        if (n !== void 0) {
            var i = n.indexOf(e);
            i > -1 && (n.splice(i, 1), this.register({
                group_key: n
            })), n.length === 0 && this.unregister(t)
        }
        return this.people.remove(t, e, r)
    });
    E.prototype.track_with_groups = bt(function(t, e, r, n) {
        var i = c.extend({}, e || {});
        return c.each(r, function(o, s) {
            o != null && (i[s] = o)
        }), this.track(t, i, n)
    });
    E.prototype._create_map_key = function(t, e) {
        return t + "_" + JSON.stringify(e)
    };
    E.prototype._remove_group_from_cache = function(t, e) {
        delete this._cached_groups[this._create_map_key(t, e)]
    };
    E.prototype.get_group = function(t, e) {
        var r = this._create_map_key(t, e),
            n = this._cached_groups[r];
        return (n === void 0 || n._group_key !== t || n._group_id !== e) && (n = new z, n._init(this, t, e), this._cached_groups[r] = n), n
    };
    E.prototype.track_pageview = bt(function(t, e) {
        typeof t != "object" && (t = {}), e = e || {};
        var r = e.event_name || "$mp_web_page_view",
            n = c.extend(c.info.mpPageViewProperties(), c.info.campaignParams(), c.info.clickParams()),
            i = c.extend({}, n, t);
        return this.track(r, i)
    });
    E.prototype.track_links = function() {
        return this._track_dom.call(this, ht, arguments)
    };
    E.prototype.track_forms = function() {
        return this._track_dom.call(this, Or, arguments)
    };
    E.prototype.time_event = function(t) {
        if (c.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return
        }
        this._event_is_disabled(t) || this.persistence.set_event_timer(t, new Date().getTime())
    };
    var Ra = {
            persistent: !0
        },
        Pn = function(t) {
            var e;
            return c.isObject(t) ? e = t : c.isUndefined(t) ? e = {} : e = {
                days: t
            }, c.extend({}, Ra, e)
        };
    E.prototype.register = function(t, e) {
        var r = Pn(e);
        r.persistent ? this.persistence.register(t, r.days) : c.extend(this.unpersisted_superprops, t)
    };
    E.prototype.register_once = function(t, e, r) {
        var n = Pn(r);
        n.persistent ? this.persistence.register_once(t, e, n.days) : (typeof e > "u" && (e = "None"), c.each(t, function(i, o) {
            (!this.unpersisted_superprops.hasOwnProperty(o) || this.unpersisted_superprops[o] === e) && (this.unpersisted_superprops[o] = i)
        }, this))
    };
    E.prototype.unregister = function(t, e) {
        e = Pn(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
    };
    E.prototype._register_single = function(t, e) {
        var r = {};
        r[t] = e, this.register(r)
    };
    E.prototype.identify = function(t, e, r, n, i, o, s, a) {
        var u = this.get_distinct_id();
        if (t && u !== t) {
            if (typeof t == "string" && t.indexOf(In) === 0) return this.report_error("distinct_id cannot have $device: prefix"), -1;
            this.register({
                $user_id: t
            })
        }
        if (!this.get_property("$device_id")) {
            var f = u;
            this.register_once({
                $had_persisted_distinct_id: !0,
                $device_id: f
            }, "")
        }
        t !== u && t !== this.get_property(lr) && (this.unregister(lr), this.register({
            distinct_id: t
        })), this._flags.identify_called = !0, this.people._flush(e, r, n, i, o, s, a), t !== u && this.track("$identify", {
            distinct_id: t,
            $anon_distinct_id: u
        }, {
            skip_hooks: !0
        })
    };
    E.prototype.reset = function() {
        this.persistence.clear(), this._flags.identify_called = !1;
        var t = c.UUID();
        this.register_once({
            distinct_id: In + t,
            $device_id: t
        }, "")
    };
    E.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id")
    };
    E.prototype.alias = function(t, e) {
        if (t === this.get_property(Eo)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
        var r = this;
        return c.isUndefined(e) && (e = this.get_distinct_id()), t !== e ? (this._register_single(lr, t), this.track("$create_alias", {
            alias: t,
            distinct_id: e
        }, {
            skip_hooks: !0
        }, function() {
            r.identify(t)
        })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(t), -1)
    };
    E.prototype.name_tag = function(t) {
        this._register_single("mp_name_tag", t)
    };
    E.prototype.set_config = function(t) {
        if (c.isObject(t)) {
            c.extend(this.config, t);
            var e = t.batch_size;
            e && c.each(this.request_batchers, function(r) {
                r.resetBatchSize()
            }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Re.DEBUG = Re.DEBUG || this.get_config("debug")
        }
    };
    E.prototype.get_config = function(t) {
        return this.config[t]
    };
    E.prototype._run_hook = function(t) {
        var e = (this.config.hooks[t] || Ta).apply(this, Le.call(arguments, 1));
        return typeof e > "u" && (this.report_error(t + " hook did not return a value"), e = null), e
    };
    E.prototype.get_property = function(t) {
        return this.persistence.load_prop([t])
    };
    E.prototype.toString = function() {
        var t = this.get_config("name");
        return t !== ye && (t = ye + "." + t), t
    };
    E.prototype._event_is_disabled = function(t) {
        return c.isBlockedUA(Oe) || this._flags.disable_all_events || c.include(this.__disabled_events, t)
    };
    E.prototype._gdpr_init = function() {
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
    E.prototype._gdpr_update_persistence = function(t) {
        var e;
        if (t && t.clear_persistence) e = !0;
        else if (t && t.enable_persistence) e = !1;
        else return;
        !this.get_config("disable_persistence") && this.persistence.disabled !== e && this.persistence.set_disabled(e), e ? this.stop_batch_senders() : this._batchers_were_started && this.start_batch_senders()
    };
    E.prototype._gdpr_call_func = function(t, e) {
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
    E.prototype.opt_in_tracking = function(t) {
        t = c.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(ma, t), this._gdpr_update_persistence(t)
    };
    E.prototype.opt_out_tracking = function(t) {
        t = c.extend({
            clear_persistence: !0,
            delete_user: !0
        }, t), t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(va, t), this._gdpr_update_persistence(t)
    };
    E.prototype.has_opted_in_tracking = function(t) {
        return this._gdpr_call_func(ba, t)
    };
    E.prototype.has_opted_out_tracking = function(t) {
        return this._gdpr_call_func(yo, t)
    };
    E.prototype.clear_opt_in_out_tracking = function(t) {
        t = c.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Ea, t), this._gdpr_update_persistence(t)
    };
    E.prototype.report_error = function(t, e) {
        B.error.apply(B.error, arguments);
        try {
            !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
        } catch (r) {
            B.error(r)
        }
    };
    E.prototype.init = E.prototype.init;
    E.prototype.reset = E.prototype.reset;
    E.prototype.disable = E.prototype.disable;
    E.prototype.time_event = E.prototype.time_event;
    E.prototype.track = E.prototype.track;
    E.prototype.track_links = E.prototype.track_links;
    E.prototype.track_forms = E.prototype.track_forms;
    E.prototype.track_pageview = E.prototype.track_pageview;
    E.prototype.register = E.prototype.register;
    E.prototype.register_once = E.prototype.register_once;
    E.prototype.unregister = E.prototype.unregister;
    E.prototype.identify = E.prototype.identify;
    E.prototype.alias = E.prototype.alias;
    E.prototype.name_tag = E.prototype.name_tag;
    E.prototype.set_config = E.prototype.set_config;
    E.prototype.get_config = E.prototype.get_config;
    E.prototype.get_property = E.prototype.get_property;
    E.prototype.get_distinct_id = E.prototype.get_distinct_id;
    E.prototype.toString = E.prototype.toString;
    E.prototype.opt_out_tracking = E.prototype.opt_out_tracking;
    E.prototype.opt_in_tracking = E.prototype.opt_in_tracking;
    E.prototype.has_opted_out_tracking = E.prototype.has_opted_out_tracking;
    E.prototype.has_opted_in_tracking = E.prototype.has_opted_in_tracking;
    E.prototype.clear_opt_in_out_tracking = E.prototype.clear_opt_in_out_tracking;
    E.prototype.get_group = E.prototype.get_group;
    E.prototype.set_group = E.prototype.set_group;
    E.prototype.add_group = E.prototype.add_group;
    E.prototype.remove_group = E.prototype.remove_group;
    E.prototype.track_with_groups = E.prototype.track_with_groups;
    E.prototype.start_batch_senders = E.prototype.start_batch_senders;
    E.prototype.stop_batch_senders = E.prototype.stop_batch_senders;
    E.prototype.DEFAULT_API_ROUTES = ko;
    C.prototype.properties = C.prototype.properties;
    C.prototype.update_search_keyword = C.prototype.update_search_keyword;
    C.prototype.update_referrer_info = C.prototype.update_referrer_info;
    C.prototype.get_cross_subdomain = C.prototype.get_cross_subdomain;
    C.prototype.clear = C.prototype.clear;
    var rt = {},
        Aa = function() {
            c.each(rt, function(t, e) {
                e !== ye && (ne[e] = t)
            }), ne._ = c
        },
        Ia = function() {
            ne.init = function(t, e, r) {
                if (r) return ne[r] || (ne[r] = rt[r] = nn(t, e, r), ne[r]._loaded()), ne[r];
                var n = ne;
                rt[ye] ? n = rt[ye] : t && (n = nn(t, e, ye), n._loaded(), rt[ye] = n), ne = n, An === ka && (V[ye] = ne), Aa()
            }
        },
        Pa = function() {
            function t() {
                t.done || (t.done = !0, To = !0, Oo = !1, c.each(rt, function(n) {
                    n._dom_loaded()
                }))
            }

            function e() {
                try {
                    G.documentElement.doScroll("left")
                } catch {
                    setTimeout(e, 1);
                    return
                }
                t()
            }
            if (G.addEventListener) G.readyState === "complete" ? t() : G.addEventListener("DOMContentLoaded", t, !1);
            else if (G.attachEvent) {
                G.attachEvent("onreadystatechange", t);
                var r = !1;
                try {
                    r = V.frameElement === null
                } catch {}
                G.documentElement.doScroll && r && e()
            }
            c.register_event(V, "load", t, !0)
        };

    function Na() {
        return An = So, ne = new E, Ia(), ne.init(), Pa(), ne
    }
    var Da = Na(),
        $a = Da;
    const li = aa($a);
    class Nn {
        static setup() {
            this.isSetup = !0, gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), li.init("2e284873b7269f13b850ac994abfd848", {
                debug: "false"
            })
        }
        static ga(e, r) {
            this.isSetup || this.setup(), gtag("event", e, r)
        }
        static mp(e, r) {
            this.isSetup || this.setup(), li.track(e, r)
        }
        static pageView(e) {
            this.ga("page_view", {
                page_title: e,
                page_location: `https://jackbox.tv/${e}`
            })
        }
        static gameStarted(e, r) {
            const n = {
                tag: e
            };
            r.isUGC !== void 0 && (n.is_ugc = r.isUGC), r.isSequel !== void 0 && (n.is_sequel = r.isSequel), r.locale !== void 0 && (n.locale = r.locale), r.mode !== void 0 && (n.mode = r.mode), r.numberOfPlayer !== void 0 && (n.number_of_players = r.numberOfPlayer), this.ga("game_start", n)
        }
        static gameJoined(e, r) {
            this.mp("Game Joined", {
                tag: e,
                ...r
            })
        }
        static bannerClick(e, r) {
            this.ga("banner_click", {
                url: e,
                location: r
            })
        }
        static externalLinkClick(e, r) {
            this.ga("external_link_click", {
                url: e,
                location: r
            })
        }
        static moderatorConnected(e) {
            this.ga("moderator_connected", {
                tag: e
            }), this.mp("Moderator Connected", {
                tag: e
            })
        }
        static itemModerated(e, r) {
            this.ga("item_moderated", {
                tag: e,
                was_rejected: r
            }), this.mp("Moderator Item", {
                tag: e,
                wasRejected: r
            })
        }
        static playerKicked(e, r) {
            this.ga("player_kicked", {
                tag: e,
                is_lobby: r
            }), this.mp("Moderator Kick", {
                tag: e,
                isLobby: r
            })
        }
        static galleryImpression(e, r) {
            this.ga("gallery_impression", {
                category_id: e,
                location: r
            })
        }
        static galleryClick(e, r) {
            this.ga("gallery_click", {
                category_id: e,
                location: r
            }), this.mp("Gallery Click", {
                categoryId: e,
                location: r
            })
        }
        static galleryAddToCart(e, r) {
            this.mp("Gallery Add To Cart", {
                categoryId: e,
                ...r
            })
        }
        static galleryCheckout(e, r) {
            this.mp("Gallery Checkout", {
                categoryId: e,
                ...r
            })
        }
        static galleryShare(e, r) {
            this.mp("Gallery Share", {
                categoryId: e,
                ...r
            })
        }
        static galleryWatch(e, r) {
            this.mp("Gallery Watch", {
                categoryId: e,
                ...r
            })
        }
        static galleryDownload(e, r) {
            this.mp("Gallery Download", {
                categoryId: e,
                ...r
            })
        }
    }
    se(Nn, "isSetup", !1);
    const Ca = [{
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
            directory: "pp7/worldchamps",
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
        }, {
            name: "Tee K.O. 2",
            tag: "awshirt2",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/awshirt2",
            features: ["moderation", "kicking"],
            shopItems: ["shirts"],
            categoryId: "TeeKO2Game",
            galleryId: "teeko2"
        }, {
            name: "Dodo Re Mi",
            tag: "nopus-opus",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/nopus-opus",
            features: ["dropInDropOut", "kicking"],
            categoryId: "NopusOpusGame",
            galleryId: "dodo-re-mi"
        }, {
            name: "FixyText",
            tag: "risky-text",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/risky-text",
            features: ["moderation", "kicking"],
            categoryId: "FixyTextGame",
            galleryId: "fixytext"
        }, {
            name: "Timejinx",
            tag: "time-trivia",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/time-trivia",
            features: ["kicking"],
            categoryId: "TimeTriviaGame",
            galleryId: "timejinx"
        }, {
            name: "Hypnotorious",
            tag: "us-them",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/us-them",
            features: ["moderation", "kicking"],
            categoryId: "StrangersGame",
            galleryId: "hypnotorious"
        }, {
            name: "Fakin' It All Night Long",
            tag: "fakinit2",
            wrapper: "vue",
            isPublic: !1,
            directory: "ppad/fakinit2",
            categoryId: "FakinIt2Game",
            features: ["moderation", "kicking"]
        }, {
            name: "Drawful After Dark",
            tag: "drawful3",
            wrapper: "vue",
            isPublic: !1,
            directory: "ppad/drawful3",
            categoryId: "Drawful3Game",
            features: ["moderation", "kicking"]
        }, {
            name: "CAPTCHA Game",
            tag: "captcha",
            wrapper: "vue",
            isPublic: !1,
            directory: "ppad/captcha",
            categoryId: "CaptchaGame",
            features: ["moderation", "kicking"]
        }],
        pi = t => Ca.find(e => e.tag === t || e.galleryId === t || e.categoryId === t);

    function La() {
        this.__data__ = [], this.size = 0
    }
    var ja = La;

    function Ua(t, e) {
        return t === e || t !== t && e !== e
    }
    var kr = Ua,
        Ma = kr;

    function Ba(t, e) {
        for (var r = t.length; r--;)
            if (Ma(t[r][0], e)) return r;
        return -1
    }
    var Tr = Ba,
        Fa = Tr,
        qa = Array.prototype,
        Ga = qa.splice;

    function Ya(t) {
        var e = this.__data__,
            r = Fa(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : Ga.call(e, r, 1), --this.size, !0
    }
    var Ha = Ya,
        Wa = Tr;

    function za(t) {
        var e = this.__data__,
            r = Wa(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var Ka = za,
        Va = Tr;

    function Ja(t) {
        return Va(this.__data__, t) > -1
    }
    var Xa = Ja,
        Qa = Tr;

    function Za(t, e) {
        var r = this.__data__,
            n = Qa(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var ec = Za,
        tc = ja,
        rc = Ha,
        nc = Ka,
        ic = Xa,
        oc = ec;

    function St(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    St.prototype.clear = tc;
    St.prototype.delete = rc;
    St.prototype.get = nc;
    St.prototype.has = ic;
    St.prototype.set = oc;
    var xr = St,
        sc = xr;

    function ac() {
        this.__data__ = new sc, this.size = 0
    }
    var cc = ac;

    function uc(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var fc = uc;

    function lc(t) {
        return this.__data__.get(t)
    }
    var pc = lc;

    function dc(t) {
        return this.__data__.has(t)
    }
    var hc = dc,
        _c = typeof pe == "object" && pe && pe.Object === Object && pe,
        xo = _c,
        gc = xo,
        yc = typeof self == "object" && self && self.Object === Object && self,
        mc = gc || yc || Function("return this")(),
        wt = mc,
        vc = wt,
        bc = vc.Symbol,
        Ro = bc,
        di = Ro,
        Ao = Object.prototype,
        Ec = Ao.hasOwnProperty,
        Sc = Ao.toString,
        Nt = di ? di.toStringTag : void 0;

    function wc(t) {
        var e = Ec.call(t, Nt),
            r = t[Nt];
        try {
            t[Nt] = void 0;
            var n = !0
        } catch {}
        var i = Sc.call(t);
        return n && (e ? t[Nt] = r : delete t[Nt]), i
    }
    var Oc = wc,
        kc = Object.prototype,
        Tc = kc.toString;

    function xc(t) {
        return Tc.call(t)
    }
    var Rc = xc,
        hi = Ro,
        Ac = Oc,
        Ic = Rc,
        Pc = "[object Null]",
        Nc = "[object Undefined]",
        _i = hi ? hi.toStringTag : void 0;

    function Dc(t) {
        return t == null ? t === void 0 ? Nc : Pc : _i && _i in Object(t) ? Ac(t) : Ic(t)
    }
    var Rr = Dc;

    function $c(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var Qe = $c,
        Cc = Rr,
        Lc = Qe,
        jc = "[object AsyncFunction]",
        Uc = "[object Function]",
        Mc = "[object GeneratorFunction]",
        Bc = "[object Proxy]";

    function Fc(t) {
        if (!Lc(t)) return !1;
        var e = Cc(t);
        return e == Uc || e == Mc || e == jc || e == Bc
    }
    var Dn = Fc,
        qc = wt,
        Gc = qc["__core-js_shared__"],
        Yc = Gc,
        Wr = Yc,
        gi = function() {
            var t = /[^.]+$/.exec(Wr && Wr.keys && Wr.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function Hc(t) {
        return !!gi && gi in t
    }
    var Wc = Hc,
        zc = Function.prototype,
        Kc = zc.toString;

    function Vc(t) {
        if (t != null) {
            try {
                return Kc.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var Jc = Vc,
        Xc = Dn,
        Qc = Wc,
        Zc = Qe,
        eu = Jc,
        tu = /[\\^$.*+?()[\]{}|]/g,
        ru = /^\[object .+?Constructor\]$/,
        nu = Function.prototype,
        iu = Object.prototype,
        ou = nu.toString,
        su = iu.hasOwnProperty,
        au = RegExp("^" + ou.call(su).replace(tu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function cu(t) {
        if (!Zc(t) || Qc(t)) return !1;
        var e = Xc(t) ? au : ru;
        return e.test(eu(t))
    }
    var uu = cu;

    function fu(t, e) {
        return t == null ? void 0 : t[e]
    }
    var lu = fu,
        pu = uu,
        du = lu;

    function hu(t, e) {
        var r = du(t, e);
        return pu(r) ? r : void 0
    }
    var $n = hu,
        _u = $n,
        gu = wt,
        yu = _u(gu, "Map"),
        Io = yu,
        mu = $n,
        vu = mu(Object, "create"),
        Ar = vu,
        yi = Ar;

    function bu() {
        this.__data__ = yi ? yi(null) : {}, this.size = 0
    }
    var Eu = bu;

    function Su(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var wu = Su,
        Ou = Ar,
        ku = "__lodash_hash_undefined__",
        Tu = Object.prototype,
        xu = Tu.hasOwnProperty;

    function Ru(t) {
        var e = this.__data__;
        if (Ou) {
            var r = e[t];
            return r === ku ? void 0 : r
        }
        return xu.call(e, t) ? e[t] : void 0
    }
    var Au = Ru,
        Iu = Ar,
        Pu = Object.prototype,
        Nu = Pu.hasOwnProperty;

    function Du(t) {
        var e = this.__data__;
        return Iu ? e[t] !== void 0 : Nu.call(e, t)
    }
    var $u = Du,
        Cu = Ar,
        Lu = "__lodash_hash_undefined__";

    function ju(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Cu && e === void 0 ? Lu : e, this
    }
    var Uu = ju,
        Mu = Eu,
        Bu = wu,
        Fu = Au,
        qu = $u,
        Gu = Uu;

    function Ot(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Ot.prototype.clear = Mu;
    Ot.prototype.delete = Bu;
    Ot.prototype.get = Fu;
    Ot.prototype.has = qu;
    Ot.prototype.set = Gu;
    var Yu = Ot,
        mi = Yu,
        Hu = xr,
        Wu = Io;

    function zu() {
        this.size = 0, this.__data__ = {
            hash: new mi,
            map: new(Wu || Hu),
            string: new mi
        }
    }
    var Ku = zu;

    function Vu(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var Ju = Vu,
        Xu = Ju;

    function Qu(t, e) {
        var r = t.__data__;
        return Xu(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var Ir = Qu,
        Zu = Ir;

    function ef(t) {
        var e = Zu(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var tf = ef,
        rf = Ir;

    function nf(t) {
        return rf(this, t).get(t)
    }
    var of = nf, sf = Ir;

    function af(t) {
        return sf(this, t).has(t)
    }
    var cf = af,
        uf = Ir;

    function ff(t, e) {
        var r = uf(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var lf = ff,
        pf = Ku,
        df = tf,
        hf = of,
        _f = cf,
        gf = lf;

    function kt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    kt.prototype.clear = pf;
    kt.prototype.delete = df;
    kt.prototype.get = hf;
    kt.prototype.has = _f;
    kt.prototype.set = gf;
    var yf = kt,
        mf = xr,
        vf = Io,
        bf = yf,
        Ef = 200;

    function Sf(t, e) {
        var r = this.__data__;
        if (r instanceof mf) {
            var n = r.__data__;
            if (!vf || n.length < Ef - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new bf(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var wf = Sf,
        Of = xr,
        kf = cc,
        Tf = fc,
        xf = pc,
        Rf = hc,
        Af = wf;

    function Tt(t) {
        var e = this.__data__ = new Of(t);
        this.size = e.size
    }
    Tt.prototype.clear = kf;
    Tt.prototype.delete = Tf;
    Tt.prototype.get = xf;
    Tt.prototype.has = Rf;
    Tt.prototype.set = Af;
    var If = Tt,
        Pf = $n,
        Nf = function() {
            try {
                var t = Pf(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        Po = Nf,
        vi = Po;

    function Df(t, e, r) {
        e == "__proto__" && vi ? vi(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var Cn = Df,
        $f = Cn,
        Cf = kr;

    function Lf(t, e, r) {
        (r !== void 0 && !Cf(t[e], r) || r === void 0 && !(e in t)) && $f(t, e, r)
    }
    var No = Lf;

    function jf(t) {
        return function(e, r, n) {
            for (var i = -1, o = Object(e), s = n(e), a = s.length; a--;) {
                var u = s[t ? a : ++i];
                if (r(o[u], u, o) === !1) break
            }
            return e
        }
    }
    var Uf = jf,
        Mf = Uf,
        Bf = Mf(),
        Ff = Bf,
        dr = {
            exports: {}
        };
    dr.exports;
    (function(t, e) {
        var r = wt,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            o = i && i.exports === n,
            s = o ? r.Buffer : void 0,
            a = s ? s.allocUnsafe : void 0;

        function u(f, h) {
            if (h) return f.slice();
            var m = f.length,
                y = a ? a(m) : new f.constructor(m);
            return f.copy(y), y
        }
        t.exports = u
    })(dr, dr.exports);
    var qf = dr.exports,
        Gf = wt,
        Yf = Gf.Uint8Array,
        Hf = Yf,
        bi = Hf;

    function Wf(t) {
        var e = new t.constructor(t.byteLength);
        return new bi(e).set(new bi(t)), e
    }
    var zf = Wf,
        Kf = zf;

    function Vf(t, e) {
        var r = e ? Kf(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var Jf = Vf;

    function Xf(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var Qf = Xf,
        Zf = Qe,
        Ei = Object.create,
        el = function() {
            function t() {}
            return function(e) {
                if (!Zf(e)) return {};
                if (Ei) return Ei(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        tl = el;

    function rl(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var nl = rl,
        il = nl,
        ol = il(Object.getPrototypeOf, Object),
        Do = ol,
        sl = Object.prototype;

    function al(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || sl;
        return t === r
    }
    var $o = al,
        cl = tl,
        ul = Do,
        fl = $o;

    function ll(t) {
        return typeof t.constructor == "function" && !fl(t) ? cl(ul(t)) : {}
    }
    var pl = ll;

    function dl(t) {
        return t != null && typeof t == "object"
    }
    var Wt = dl,
        hl = Rr,
        _l = Wt,
        gl = "[object Arguments]";

    function yl(t) {
        return _l(t) && hl(t) == gl
    }
    var ml = yl,
        Si = ml,
        vl = Wt,
        Co = Object.prototype,
        bl = Co.hasOwnProperty,
        El = Co.propertyIsEnumerable,
        Sl = Si(function() {
            return arguments
        }()) ? Si : function(t) {
            return vl(t) && bl.call(t, "callee") && !El.call(t, "callee")
        },
        Lo = Sl,
        wl = Array.isArray,
        jo = wl,
        Ol = 9007199254740991;

    function kl(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ol
    }
    var Uo = kl,
        Tl = Dn,
        xl = Uo;

    function Rl(t) {
        return t != null && xl(t.length) && !Tl(t)
    }
    var Ln = Rl,
        Al = Ln,
        Il = Wt;

    function Pl(t) {
        return Il(t) && Al(t)
    }
    var Nl = Pl,
        hr = {
            exports: {}
        };

    function Dl() {
        return !1
    }
    var $l = Dl;
    hr.exports;
    (function(t, e) {
        var r = wt,
            n = $l,
            i = e && !e.nodeType && e,
            o = i && !0 && t && !t.nodeType && t,
            s = o && o.exports === i,
            a = s ? r.Buffer : void 0,
            u = a ? a.isBuffer : void 0,
            f = u || n;
        t.exports = f
    })(hr, hr.exports);
    var Mo = hr.exports,
        Cl = Rr,
        Ll = Do,
        jl = Wt,
        Ul = "[object Object]",
        Ml = Function.prototype,
        Bl = Object.prototype,
        Bo = Ml.toString,
        Fl = Bl.hasOwnProperty,
        ql = Bo.call(Object);

    function Gl(t) {
        if (!jl(t) || Cl(t) != Ul) return !1;
        var e = Ll(t);
        if (e === null) return !0;
        var r = Fl.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && Bo.call(r) == ql
    }
    var Yl = Gl,
        Hl = Rr,
        Wl = Uo,
        zl = Wt,
        Kl = "[object Arguments]",
        Vl = "[object Array]",
        Jl = "[object Boolean]",
        Xl = "[object Date]",
        Ql = "[object Error]",
        Zl = "[object Function]",
        ep = "[object Map]",
        tp = "[object Number]",
        rp = "[object Object]",
        np = "[object RegExp]",
        ip = "[object Set]",
        op = "[object String]",
        sp = "[object WeakMap]",
        ap = "[object ArrayBuffer]",
        cp = "[object DataView]",
        up = "[object Float32Array]",
        fp = "[object Float64Array]",
        lp = "[object Int8Array]",
        pp = "[object Int16Array]",
        dp = "[object Int32Array]",
        hp = "[object Uint8Array]",
        _p = "[object Uint8ClampedArray]",
        gp = "[object Uint16Array]",
        yp = "[object Uint32Array]",
        W = {};
    W[up] = W[fp] = W[lp] = W[pp] = W[dp] = W[hp] = W[_p] = W[gp] = W[yp] = !0;
    W[Kl] = W[Vl] = W[ap] = W[Jl] = W[cp] = W[Xl] = W[Ql] = W[Zl] = W[ep] = W[tp] = W[rp] = W[np] = W[ip] = W[op] = W[sp] = !1;

    function mp(t) {
        return zl(t) && Wl(t.length) && !!W[Hl(t)]
    }
    var vp = mp;

    function bp(t) {
        return function(e) {
            return t(e)
        }
    }
    var Ep = bp,
        _r = {
            exports: {}
        };
    _r.exports;
    (function(t, e) {
        var r = xo,
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
    })(_r, _r.exports);
    var Sp = _r.exports,
        wp = vp,
        Op = Ep,
        wi = Sp,
        Oi = wi && wi.isTypedArray,
        kp = Oi ? Op(Oi) : wp,
        Fo = kp;

    function Tp(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var qo = Tp,
        xp = Cn,
        Rp = kr,
        Ap = Object.prototype,
        Ip = Ap.hasOwnProperty;

    function Pp(t, e, r) {
        var n = t[e];
        (!(Ip.call(t, e) && Rp(n, r)) || r === void 0 && !(e in t)) && xp(t, e, r)
    }
    var Np = Pp,
        Dp = Np,
        $p = Cn;

    function Cp(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, s = e.length; ++o < s;) {
            var a = e[o],
                u = n ? n(r[a], t[a], a, r, t) : void 0;
            u === void 0 && (u = t[a]), i ? $p(r, a, u) : Dp(r, a, u)
        }
        return r
    }
    var Lp = Cp;

    function jp(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var Up = jp,
        Mp = 9007199254740991,
        Bp = /^(?:0|[1-9]\d*)$/;

    function Fp(t, e) {
        var r = typeof t;
        return e = e ?? Mp, !!e && (r == "number" || r != "symbol" && Bp.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var Go = Fp,
        qp = Up,
        Gp = Lo,
        Yp = jo,
        Hp = Mo,
        Wp = Go,
        zp = Fo,
        Kp = Object.prototype,
        Vp = Kp.hasOwnProperty;

    function Jp(t, e) {
        var r = Yp(t),
            n = !r && Gp(t),
            i = !r && !n && Hp(t),
            o = !r && !n && !i && zp(t),
            s = r || n || i || o,
            a = s ? qp(t.length, String) : [],
            u = a.length;
        for (var f in t)(e || Vp.call(t, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Wp(f, u))) && a.push(f);
        return a
    }
    var Xp = Jp;

    function Qp(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var Zp = Qp,
        ed = Qe,
        td = $o,
        rd = Zp,
        nd = Object.prototype,
        id = nd.hasOwnProperty;

    function od(t) {
        if (!ed(t)) return rd(t);
        var e = td(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !id.call(t, n)) || r.push(n);
        return r
    }
    var sd = od,
        ad = Xp,
        cd = sd,
        ud = Ln;

    function fd(t) {
        return ud(t) ? ad(t, !0) : cd(t)
    }
    var Yo = fd,
        ld = Lp,
        pd = Yo;

    function dd(t) {
        return ld(t, pd(t))
    }
    var hd = dd,
        ki = No,
        _d = qf,
        gd = Jf,
        yd = Qf,
        md = pl,
        Ti = Lo,
        xi = jo,
        vd = Nl,
        bd = Mo,
        Ed = Dn,
        Sd = Qe,
        wd = Yl,
        Od = Fo,
        Ri = qo,
        kd = hd;

    function Td(t, e, r, n, i, o, s) {
        var a = Ri(t, r),
            u = Ri(e, r),
            f = s.get(u);
        if (f) {
            ki(t, r, f);
            return
        }
        var h = o ? o(a, u, r + "", t, e, s) : void 0,
            m = h === void 0;
        if (m) {
            var y = xi(u),
                b = !y && bd(u),
                O = !y && !b && Od(u);
            h = u, y || b || O ? xi(a) ? h = a : vd(a) ? h = yd(a) : b ? (m = !1, h = _d(u, !0)) : O ? (m = !1, h = gd(u, !0)) : h = [] : wd(u) || Ti(u) ? (h = a, Ti(a) ? h = kd(a) : (!Sd(a) || Ed(a)) && (h = md(u))) : m = !1
        }
        m && (s.set(u, h), i(h, u, n, o, s), s.delete(u)), ki(t, r, h)
    }
    var xd = Td,
        Rd = If,
        Ad = No,
        Id = Ff,
        Pd = xd,
        Nd = Qe,
        Dd = Yo,
        $d = qo;

    function Ho(t, e, r, n, i) {
        t !== e && Id(e, function(o, s) {
            if (i || (i = new Rd), Nd(o)) Pd(t, e, s, r, Ho, n, i);
            else {
                var a = n ? n($d(t, s), o, s + "", t, e, i) : void 0;
                a === void 0 && (a = o), Ad(t, s, a)
            }
        }, Dd)
    }
    var Cd = Ho;

    function Ld(t) {
        return t
    }
    var Wo = Ld;

    function jd(t, e, r) {
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
    var Ud = jd,
        Md = Ud,
        Ai = Math.max;

    function Bd(t, e, r) {
        return e = Ai(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, o = Ai(n.length - e, 0), s = Array(o); ++i < o;) s[i] = n[e + i];
                i = -1;
                for (var a = Array(e + 1); ++i < e;) a[i] = n[i];
                return a[e] = r(s), Md(t, this, a)
            }
    }
    var Fd = Bd;

    function qd(t) {
        return function() {
            return t
        }
    }
    var Gd = qd,
        Yd = Gd,
        Ii = Po,
        Hd = Wo,
        Wd = Ii ? function(t, e) {
            return Ii(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Yd(e),
                writable: !0
            })
        } : Hd,
        zd = Wd,
        Kd = 800,
        Vd = 16,
        Jd = Date.now;

    function Xd(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = Jd(),
                i = Vd - (n - r);
            if (r = n, i > 0) {
                if (++e >= Kd) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var Qd = Xd,
        Zd = zd,
        eh = Qd,
        th = eh(Zd),
        rh = th,
        nh = Wo,
        ih = Fd,
        oh = rh;

    function sh(t, e) {
        return oh(ih(t, e, nh), t + "")
    }
    var ah = sh,
        ch = kr,
        uh = Ln,
        fh = Go,
        lh = Qe;

    function ph(t, e, r) {
        if (!lh(r)) return !1;
        var n = typeof e;
        return (n == "number" ? uh(r) && fh(e, r.length) : n == "string" && e in r) ? ch(r[e], t) : !1
    }
    var dh = ph,
        hh = ah,
        _h = dh;

    function gh(t) {
        return hh(function(e, r) {
            var n = -1,
                i = r.length,
                o = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && _h(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                var a = r[n];
                a && t(e, a, n, o)
            }
            return e
        })
    }
    var yh = gh,
        mh = Cd,
        vh = yh;
    vh(function(t, e, r) {
        mh(t, e, r)
    });
    const it = class it {
        static get serverUrl() {
            const e = this.getQueryParam("server") ?? this.getQueryParam("s");
            return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
        }
        static isDevelopment() {
            return window.location.hostname === "dev.jackbox.tv" || window.location.hostname === "localhost"
        }
        static isProduction() {
            return window.location.hostname === "jackbox.tv"
        }
        static get isCanvasSupported() {
            const e = document.createElement("canvas");
            return !!(e.getContext && e.getContext("2d"))
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
    se(it, "queryParams", new URLSearchParams(window.location.search)), se(it, "getQueryParam", e => it.queryParams.get(e)), se(it, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    let nt = it;
    class gr {
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
                namespace: nt.getQueryParam("namespace") ?? nt.getQueryParam("ns") ?? this.defaultNamespace,
                isDisabled: nt.queryParams.has("incognito") || nt.queryParams.has("nc")
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
    se(gr, "defaultNamespace", "tv");
    var Pi = {
        exports: {}
    };
    (function(t, e) {
        var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof pe < "u" && pe,
            n = function() {
                function o() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return o.prototype = r, new o
            }();
        (function(o) {
            (function(s) {
                var a = typeof o < "u" && o || typeof self < "u" && self || typeof a < "u" && a,
                    u = {
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

                function f(v) {
                    return v && DataView.prototype.isPrototypeOf(v)
                }
                if (u.arrayBuffer) var h = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    m = ArrayBuffer.isView || function(v) {
                        return v && h.indexOf(Object.prototype.toString.call(v)) > -1
                    };

                function y(v) {
                    if (typeof v != "string" && (v = String(v)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(v) || v === "") throw new TypeError('Invalid character in header field name: "' + v + '"');
                    return v.toLowerCase()
                }

                function b(v) {
                    return typeof v != "string" && (v = String(v)), v
                }

                function O(v) {
                    var k = {
                        next: function() {
                            var P = v.shift();
                            return {
                                done: P === void 0,
                                value: P
                            }
                        }
                    };
                    return u.iterable && (k[Symbol.iterator] = function() {
                        return k
                    }), k
                }

                function T(v) {
                    this.map = {}, v instanceof T ? v.forEach(function(k, P) {
                        this.append(P, k)
                    }, this) : Array.isArray(v) ? v.forEach(function(k) {
                        this.append(k[0], k[1])
                    }, this) : v && Object.getOwnPropertyNames(v).forEach(function(k) {
                        this.append(k, v[k])
                    }, this)
                }
                T.prototype.append = function(v, k) {
                    v = y(v), k = b(k);
                    var P = this.map[v];
                    this.map[v] = P ? P + ", " + k : k
                }, T.prototype.delete = function(v) {
                    delete this.map[y(v)]
                }, T.prototype.get = function(v) {
                    return v = y(v), this.has(v) ? this.map[v] : null
                }, T.prototype.has = function(v) {
                    return this.map.hasOwnProperty(y(v))
                }, T.prototype.set = function(v, k) {
                    this.map[y(v)] = b(k)
                }, T.prototype.forEach = function(v, k) {
                    for (var P in this.map) this.map.hasOwnProperty(P) && v.call(k, this.map[P], P, this)
                }, T.prototype.keys = function() {
                    var v = [];
                    return this.forEach(function(k, P) {
                        v.push(P)
                    }), O(v)
                }, T.prototype.values = function() {
                    var v = [];
                    return this.forEach(function(k) {
                        v.push(k)
                    }), O(v)
                }, T.prototype.entries = function() {
                    var v = [];
                    return this.forEach(function(k, P) {
                        v.push([P, k])
                    }), O(v)
                }, u.iterable && (T.prototype[Symbol.iterator] = T.prototype.entries);

                function A(v) {
                    if (v.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    v.bodyUsed = !0
                }

                function H(v) {
                    return new Promise(function(k, P) {
                        v.onload = function() {
                            k(v.result)
                        }, v.onerror = function() {
                            P(v.error)
                        }
                    })
                }

                function F(v) {
                    var k = new FileReader,
                        P = H(k);
                    return k.readAsArrayBuffer(v), P
                }

                function ce(v) {
                    var k = new FileReader,
                        P = H(k);
                    return k.readAsText(v), P
                }

                function Se(v) {
                    for (var k = new Uint8Array(v), P = new Array(k.length), U = 0; U < k.length; U++) P[U] = String.fromCharCode(k[U]);
                    return P.join("")
                }

                function ue(v) {
                    if (v.slice) return v.slice(0);
                    var k = new Uint8Array(v.byteLength);
                    return k.set(new Uint8Array(v)), k.buffer
                }

                function fe() {
                    return this.bodyUsed = !1, this._initBody = function(v) {
                        this.bodyUsed = this.bodyUsed, this._bodyInit = v, v ? typeof v == "string" ? this._bodyText = v : u.blob && Blob.prototype.isPrototypeOf(v) ? this._bodyBlob = v : u.formData && FormData.prototype.isPrototypeOf(v) ? this._bodyFormData = v : u.searchParams && URLSearchParams.prototype.isPrototypeOf(v) ? this._bodyText = v.toString() : u.arrayBuffer && u.blob && f(v) ? (this._bodyArrayBuffer = ue(v.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(v) || m(v)) ? this._bodyArrayBuffer = ue(v) : this._bodyText = v = Object.prototype.toString.call(v) : this._bodyText = "", this.headers.get("content-type") || (typeof v == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(v) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var v = A(this);
                        if (v) return v;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            var v = A(this);
                            return v || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        } else return this.blob().then(F)
                    }), this.text = function() {
                        var v = A(this);
                        if (v) return v;
                        if (this._bodyBlob) return ce(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(Se(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, u.formData && (this.formData = function() {
                        return this.text().then(jr)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var he = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function _e(v) {
                    var k = v.toUpperCase();
                    return he.indexOf(k) > -1 ? k : v
                }

                function L(v, k) {
                    if (!(this instanceof L)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    k = k || {};
                    var P = k.body;
                    if (v instanceof L) {
                        if (v.bodyUsed) throw new TypeError("Already read");
                        this.url = v.url, this.credentials = v.credentials, k.headers || (this.headers = new T(v.headers)), this.method = v.method, this.mode = v.mode, this.signal = v.signal, !P && v._bodyInit != null && (P = v._bodyInit, v.bodyUsed = !0)
                    } else this.url = String(v);
                    if (this.credentials = k.credentials || this.credentials || "same-origin", (k.headers || !this.headers) && (this.headers = new T(k.headers)), this.method = _e(k.method || this.method || "GET"), this.mode = k.mode || this.mode || null, this.signal = k.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && P) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(P), (this.method === "GET" || this.method === "HEAD") && (k.cache === "no-store" || k.cache === "no-cache")) {
                        var U = /([?&])_=[^&]*/;
                        if (U.test(this.url)) this.url = this.url.replace(U, "$1_=" + new Date().getTime());
                        else {
                            var M = /\?/;
                            this.url += (M.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                        }
                    }
                }
                L.prototype.clone = function() {
                    return new L(this, {
                        body: this._bodyInit
                    })
                };

                function jr(v) {
                    var k = new FormData;
                    return v.trim().split("&").forEach(function(P) {
                        if (P) {
                            var U = P.split("="),
                                M = U.shift().replace(/\+/g, " "),
                                R = U.join("=").replace(/\+/g, " ");
                            k.append(decodeURIComponent(M), decodeURIComponent(R))
                        }
                    }), k
                }

                function Ur(v) {
                    var k = new T,
                        P = v.replace(/\r?\n[\t ]+/g, " ");
                    return P.split("\r").map(function(U) {
                        return U.indexOf(`
`) === 0 ? U.substr(1, U.length) : U
                    }).forEach(function(U) {
                        var M = U.split(":"),
                            R = M.shift().trim();
                        if (R) {
                            var ee = M.join(":").trim();
                            k.append(R, ee)
                        }
                    }), k
                }
                fe.call(L.prototype);

                function oe(v, k) {
                    if (!(this instanceof oe)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    k || (k = {}), this.type = "default", this.status = k.status === void 0 ? 200 : k.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = k.statusText === void 0 ? "" : "" + k.statusText, this.headers = new T(k.headers), this.url = k.url || "", this._initBody(v)
                }
                fe.call(oe.prototype), oe.prototype.clone = function() {
                    return new oe(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new T(this.headers),
                        url: this.url
                    })
                }, oe.error = function() {
                    var v = new oe(null, {
                        status: 0,
                        statusText: ""
                    });
                    return v.type = "error", v
                };
                var Ge = [301, 302, 303, 307, 308];
                oe.redirect = function(v, k) {
                    if (Ge.indexOf(k) === -1) throw new RangeError("Invalid status code");
                    return new oe(null, {
                        status: k,
                        headers: {
                            location: v
                        }
                    })
                }, s.DOMException = a.DOMException;
                try {
                    new s.DOMException
                } catch {
                    s.DOMException = function(k, P) {
                        this.message = k, this.name = P;
                        var U = Error(k);
                        this.stack = U.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function Pe(v, k) {
                    return new Promise(function(P, U) {
                        var M = new L(v, k);
                        if (M.signal && M.signal.aborted) return U(new s.DOMException("Aborted", "AbortError"));
                        var R = new XMLHttpRequest;

                        function ee() {
                            R.abort()
                        }
                        R.onload = function() {
                            var Z = {
                                status: R.status,
                                statusText: R.statusText,
                                headers: Ur(R.getAllResponseHeaders() || "")
                            };
                            Z.url = "responseURL" in R ? R.responseURL : Z.headers.get("X-Request-URL");
                            var Ze = "response" in R ? R.response : R.responseText;
                            setTimeout(function() {
                                P(new oe(Ze, Z))
                            }, 0)
                        }, R.onerror = function() {
                            setTimeout(function() {
                                U(new TypeError("Network request failed"))
                            }, 0)
                        }, R.ontimeout = function() {
                            setTimeout(function() {
                                U(new TypeError("Network request failed"))
                            }, 0)
                        }, R.onabort = function() {
                            setTimeout(function() {
                                U(new s.DOMException("Aborted", "AbortError"))
                            }, 0)
                        };

                        function re(Z) {
                            try {
                                return Z === "" && a.location.href ? a.location.href : Z
                            } catch {
                                return Z
                            }
                        }
                        R.open(M.method, re(M.url), !0), M.credentials === "include" ? R.withCredentials = !0 : M.credentials === "omit" && (R.withCredentials = !1), "responseType" in R && (u.blob ? R.responseType = "blob" : u.arrayBuffer && M.headers.get("Content-Type") && M.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (R.responseType = "arraybuffer")), k && typeof k.headers == "object" && !(k.headers instanceof T) ? Object.getOwnPropertyNames(k.headers).forEach(function(Z) {
                            R.setRequestHeader(Z, b(k.headers[Z]))
                        }) : M.headers.forEach(function(Z, Ze) {
                            R.setRequestHeader(Ze, Z)
                        }), M.signal && (M.signal.addEventListener("abort", ee), R.onreadystatechange = function() {
                            R.readyState === 4 && M.signal.removeEventListener("abort", ee)
                        }), R.send(typeof M._bodyInit > "u" ? null : M._bodyInit)
                    })
                }
                return Pe.polyfill = !0, a.fetch || (a.fetch = Pe, a.Headers = T, a.Request = L, a.Response = oe), s.Headers = T, s.Request = L, s.Response = oe, s.fetch = Pe, s
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = r.fetch ? r : n;
        e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
    })(Pi, Pi.exports);
    var bh = function() {
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
        Ni = typeof Symbol < "u" && Symbol,
        Eh = bh,
        Sh = function() {
            return typeof Ni != "function" || typeof Symbol != "function" || typeof Ni("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Eh()
        },
        wh = "Function.prototype.bind called on incompatible ",
        zr = Array.prototype.slice,
        Oh = Object.prototype.toString,
        kh = "[object Function]",
        Th = function(e) {
            var r = this;
            if (typeof r != "function" || Oh.call(r) !== kh) throw new TypeError(wh + r);
            for (var n = zr.call(arguments, 1), i, o = function() {
                    if (this instanceof i) {
                        var h = r.apply(this, n.concat(zr.call(arguments)));
                        return Object(h) === h ? h : this
                    } else return r.apply(e, n.concat(zr.call(arguments)))
                }, s = Math.max(0, r.length - n.length), a = [], u = 0; u < s; u++) a.push("$" + u);
            if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var f = function() {};
                f.prototype = r.prototype, i.prototype = new f, f.prototype = null
            }
            return i
        },
        xh = Th,
        jn = Function.prototype.bind || xh,
        Rh = jn,
        Ah = Rh.call(Function.call, Object.prototype.hasOwnProperty),
        j, gt = SyntaxError,
        zo = Function,
        st = TypeError,
        Kr = function(t) {
            try {
                return zo('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        We = Object.getOwnPropertyDescriptor;
    if (We) try {
        We({}, "")
    } catch {
        We = null
    }
    var Vr = function() {
            throw new st
        },
        Ih = We ? function() {
            try {
                return arguments.callee, Vr
            } catch {
                try {
                    return We(arguments, "callee").get
                } catch {
                    return Vr
                }
            }
        }() : Vr,
        et = Sh(),
        Ne = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        tt = {},
        Ph = typeof Uint8Array > "u" ? j : Ne(Uint8Array),
        at = {
            "%AggregateError%": typeof AggregateError > "u" ? j : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? j : ArrayBuffer,
            "%ArrayIteratorPrototype%": et ? Ne([][Symbol.iterator]()) : j,
            "%AsyncFromSyncIteratorPrototype%": j,
            "%AsyncFunction%": tt,
            "%AsyncGenerator%": tt,
            "%AsyncGeneratorFunction%": tt,
            "%AsyncIteratorPrototype%": tt,
            "%Atomics%": typeof Atomics > "u" ? j : Atomics,
            "%BigInt%": typeof BigInt > "u" ? j : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? j : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? j : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? j : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? j : FinalizationRegistry,
            "%Function%": zo,
            "%GeneratorFunction%": tt,
            "%Int8Array%": typeof Int8Array > "u" ? j : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? j : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? j : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": et ? Ne(Ne([][Symbol.iterator]())) : j,
            "%JSON%": typeof JSON == "object" ? JSON : j,
            "%Map%": typeof Map > "u" ? j : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !et ? j : Ne(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? j : Promise,
            "%Proxy%": typeof Proxy > "u" ? j : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? j : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? j : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !et ? j : Ne(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? j : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": et ? Ne("" [Symbol.iterator]()) : j,
            "%Symbol%": et ? Symbol : j,
            "%SyntaxError%": gt,
            "%ThrowTypeError%": Ih,
            "%TypedArray%": Ph,
            "%TypeError%": st,
            "%Uint8Array%": typeof Uint8Array > "u" ? j : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? j : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? j : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? j : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? j : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? j : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? j : WeakSet
        },
        Nh = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = Kr("async function () {}");
            else if (e === "%GeneratorFunction%") r = Kr("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = Kr("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var i = t("%AsyncGenerator%");
                i && (r = Ne(i.prototype))
            }
            return at[e] = r, r
        },
        Di = {
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
        zt = jn,
        yr = Ah,
        Dh = zt.call(Function.call, Array.prototype.concat),
        $h = zt.call(Function.apply, Array.prototype.splice),
        $i = zt.call(Function.call, String.prototype.replace),
        mr = zt.call(Function.call, String.prototype.slice),
        Ch = zt.call(Function.call, RegExp.prototype.exec),
        Lh = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        jh = /\\(\\)?/g,
        Uh = function(e) {
            var r = mr(e, 0, 1),
                n = mr(e, -1);
            if (r === "%" && n !== "%") throw new gt("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new gt("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return $i(e, Lh, function(o, s, a, u) {
                i[i.length] = a ? $i(u, jh, "$1") : s || o
            }), i
        },
        Mh = function(e, r) {
            var n = e,
                i;
            if (yr(Di, n) && (i = Di[n], n = "%" + i[0] + "%"), yr(at, n)) {
                var o = at[n];
                if (o === tt && (o = Nh(n)), typeof o > "u" && !r) throw new st("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: o
                }
            }
            throw new gt("intrinsic " + e + " does not exist!")
        },
        Un = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new st("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new st('"allowMissing" argument must be a boolean');
            if (Ch(/^%?[^%]*%?$/g, e) === null) throw new gt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = Uh(e),
                i = n.length > 0 ? n[0] : "",
                o = Mh("%" + i + "%", r),
                s = o.name,
                a = o.value,
                u = !1,
                f = o.alias;
            f && (i = f[0], $h(n, Dh([0, 1], f)));
            for (var h = 1, m = !0; h < n.length; h += 1) {
                var y = n[h],
                    b = mr(y, 0, 1),
                    O = mr(y, -1);
                if ((b === '"' || b === "'" || b === "`" || O === '"' || O === "'" || O === "`") && b !== O) throw new gt("property names with quotes must have matching quotes");
                if ((y === "constructor" || !m) && (u = !0), i += "." + y, s = "%" + i + "%", yr(at, s)) a = at[s];
                else if (a != null) {
                    if (!(y in a)) {
                        if (!r) throw new st("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (We && h + 1 >= n.length) {
                        var T = We(a, y);
                        m = !!T, m && "get" in T && !("originalValue" in T.get) ? a = T.get : a = a[y]
                    } else m = yr(a, y), a = a[y];
                    m && !u && (at[s] = a)
                }
            }
            return a
        },
        Ko = {
            exports: {}
        };
    (function(t) {
        var e = jn,
            r = Un,
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
        t.exports = function(m) {
            var y = o(e, i, arguments);
            if (s && a) {
                var b = s(y, "length");
                b.configurable && a(y, "length", {
                    value: 1 + u(0, m.length - (arguments.length - 1))
                })
            }
            return y
        };
        var f = function() {
            return o(e, n, arguments)
        };
        a ? a(t.exports, "apply", {
            value: f
        }) : t.exports.apply = f
    })(Ko);
    var Bh = Ko.exports,
        Vo = Un,
        Jo = Bh,
        Fh = Jo(Vo("String.prototype.indexOf")),
        qh = function(e, r) {
            var n = Vo(e, !!r);
            return typeof n == "function" && Fh(e, ".prototype.") > -1 ? Jo(n) : n
        },
        Mn = Un,
        xt = qh;
    Mn("%TypeError%");
    Mn("%WeakMap%", !0);
    Mn("%Map%", !0);
    xt("WeakMap.prototype.get", !0);
    xt("WeakMap.prototype.set", !0);
    xt("WeakMap.prototype.has", !0);
    xt("Map.prototype.get", !0);
    xt("Map.prototype.set", !0);
    xt("Map.prototype.has", !0);
    var Gh = String.prototype.replace,
        Yh = /%20/g,
        Jr = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Xo = {
            default: Jr.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return Gh.call(t, Yh, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: Jr.RFC1738,
            RFC3986: Jr.RFC3986
        },
        Hh = Xo,
        Xr = Object.prototype.hasOwnProperty,
        Ye = Array.isArray,
        we = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        Wh = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];
                if (Ye(n)) {
                    for (var i = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && i.push(n[o]);
                    r.obj[r.prop] = i
                }
            }
        },
        Qo = function(e, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
            return n
        },
        zh = function t(e, r, n) {
            if (!r) return e;
            if (typeof r != "object") {
                if (Ye(e)) e.push(r);
                else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !Xr.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var i = e;
            return Ye(e) && !Ye(r) && (i = Qo(e, n)), Ye(e) && Ye(r) ? (r.forEach(function(o, s) {
                if (Xr.call(e, s)) {
                    var a = e[s];
                    a && typeof a == "object" && o && typeof o == "object" ? e[s] = t(a, o, n) : e.push(o)
                } else e[s] = o
            }), e) : Object.keys(r).reduce(function(o, s) {
                var a = r[s];
                return Xr.call(o, s) ? o[s] = t(o[s], a, n) : o[s] = a, o
            }, i)
        },
        Kh = function(e, r) {
            return Object.keys(r).reduce(function(n, i) {
                return n[i] = r[i], n
            }, e)
        },
        Vh = function(t, e, r) {
            var n = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        Jh = function(e, r, n, i, o) {
            if (e.length === 0) return e;
            var s = e;
            if (typeof e == "symbol" ? s = Symbol.prototype.toString.call(e) : typeof e != "string" && (s = String(e)), n === "iso-8859-1") return escape(s).replace(/%u[0-9a-f]{4}/gi, function(h) {
                return "%26%23" + parseInt(h.slice(2), 16) + "%3B"
            });
            for (var a = "", u = 0; u < s.length; ++u) {
                var f = s.charCodeAt(u);
                if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || o === Hh.RFC1738 && (f === 40 || f === 41)) {
                    a += s.charAt(u);
                    continue
                }
                if (f < 128) {
                    a = a + we[f];
                    continue
                }
                if (f < 2048) {
                    a = a + (we[192 | f >> 6] + we[128 | f & 63]);
                    continue
                }
                if (f < 55296 || f >= 57344) {
                    a = a + (we[224 | f >> 12] + we[128 | f >> 6 & 63] + we[128 | f & 63]);
                    continue
                }
                u += 1, f = 65536 + ((f & 1023) << 10 | s.charCodeAt(u) & 1023), a += we[240 | f >> 18] + we[128 | f >> 12 & 63] + we[128 | f >> 6 & 63] + we[128 | f & 63]
            }
            return a
        },
        Xh = function(e) {
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
            return Wh(r), e
        },
        Qh = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        Zh = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        e_ = function(e, r) {
            return [].concat(e, r)
        },
        t_ = function(e, r) {
            if (Ye(e)) {
                for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
                return n
            }
            return r(e)
        },
        Zo = {
            arrayToObject: Qo,
            assign: Kh,
            combine: e_,
            compact: Xh,
            decode: Vh,
            encode: Jh,
            isBuffer: Zh,
            isRegExp: Qh,
            maybeMap: t_,
            merge: zh
        },
        r_ = Zo,
        es = Xo,
        n_ = Date.prototype.toISOString,
        Ci = es.default;
    r_.encode, es.formatters[Ci];
    var i_ = Zo;
    i_.decode;
    typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof pe < "u" && (pe.WebSocket || pe.MozWebSocket));
    var ts = {
            exports: {}
        },
        ct = typeof Reflect == "object" ? Reflect : null,
        Li = ct && typeof ct.apply == "function" ? ct.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        sr;
    ct && typeof ct.ownKeys == "function" ? sr = ct.ownKeys : Object.getOwnPropertySymbols ? sr = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : sr = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function o_(t) {
        console && console.warn && console.warn(t)
    }
    var rs = Number.isNaN || function(e) {
        return e !== e
    };

    function q() {
        q.init.call(this)
    }
    ts.exports = q;
    ts.exports.once = u_;
    q.EventEmitter = q;
    q.prototype._events = void 0;
    q.prototype._eventsCount = 0;
    q.prototype._maxListeners = void 0;
    var ji = 10;

    function Pr(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(q, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return ji
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || rs(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            ji = t
        }
    });
    q.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    q.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || rs(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function ns(t) {
        return t._maxListeners === void 0 ? q.defaultMaxListeners : t._maxListeners
    }
    q.prototype.getMaxListeners = function() {
        return ns(this)
    };
    q.prototype.emit = function(e) {
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
        if (typeof u == "function") Li(u, this, r);
        else
            for (var f = u.length, h = cs(u, f), n = 0; n < f; ++n) Li(h[n], this, r);
        return !0
    };

    function is(t, e, r, n) {
        var i, o, s;
        if (Pr(r), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), s === void 0) s = o[e] = r, ++t._eventsCount;
        else if (typeof s == "function" ? s = o[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = ns(t), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, o_(a)
        }
        return t
    }
    q.prototype.addListener = function(e, r) {
        return is(this, e, r, !1)
    };
    q.prototype.on = q.prototype.addListener;
    q.prototype.prependListener = function(e, r) {
        return is(this, e, r, !0)
    };

    function s_() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function os(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = s_.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    q.prototype.once = function(e, r) {
        return Pr(r), this.on(e, os(this, e, r)), this
    };
    q.prototype.prependOnceListener = function(e, r) {
        return Pr(r), this.prependListener(e, os(this, e, r)), this
    };
    q.prototype.removeListener = function(e, r) {
        var n, i, o, s, a;
        if (Pr(r), i = this._events, i === void 0) return this;
        if (n = i[e], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === r || n[s].listener === r) {
                    a = n[s].listener, o = s;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : a_(n, o), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r)
        }
        return this
    };
    q.prototype.off = q.prototype.removeListener;
    q.prototype.removeAllListeners = function(e) {
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

    function ss(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? c_(i) : cs(i, i.length)
    }
    q.prototype.listeners = function(e) {
        return ss(this, e, !0)
    };
    q.prototype.rawListeners = function(e) {
        return ss(this, e, !1)
    };
    q.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : as.call(t, e)
    };
    q.prototype.listenerCount = as;

    function as(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    q.prototype.eventNames = function() {
        return this._eventsCount > 0 ? sr(this._events) : []
    };

    function cs(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function a_(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function c_(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function u_(t, e) {
        return new Promise(function(r, n) {
            function i(s) {
                t.removeListener(e, o), n(s)
            }

            function o() {
                typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
            }
            us(t, e, o, {
                once: !0
            }), e !== "error" && f_(t, i, {
                once: !0
            })
        })
    }

    function f_(t, e, r) {
        typeof t.on == "function" && us(t, "error", e, r)
    }

    function us(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }

    function l_(...t) {
        console.log(...t)
    }

    function p_(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Ui = {
        exports: {}
    };
    (function(t, e) {
        (function(r, n) {
            n(e)
        })(pe, function(r) {
            var n = typeof window < "u" ? window : typeof pe < "u" ? pe : typeof self < "u" ? self : {},
                i = function(p, g) {
                    if (g = g.split(":")[0], p = +p, !p) return !1;
                    switch (g) {
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
                for (var p = /([^=?#&]+)=?([^&]*)/g, g = {}, l; l = p.exec(d);) {
                    var _ = a(l[1]),
                        S = a(l[2]);
                    _ === null || S === null || _ in g || (g[_] = S)
                }
                return g
            }

            function h(d, p) {
                p = p || "";
                var g = [],
                    l, _;
                typeof p != "string" && (p = "?");
                for (_ in d)
                    if (o.call(d, _)) {
                        if (l = d[_], !l && (l === null || l === s || isNaN(l)) && (l = ""), _ = u(_), l = u(l), _ === null || l === null) continue;
                        g.push(_ + "=" + l)
                    } return g.length ? p + g.join("&") : ""
            }
            var m = h,
                y = f,
                b = {
                    stringify: m,
                    parse: y
                },
                O = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                T = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                A = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                H = new RegExp("^" + A + "+");

            function F(d) {
                return (d || "").toString().replace(H, "")
            }
            var ce = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(p, g) {
                        return fe(g.protocol) ? p.replace(/\\/g, "/") : p
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                Se = {
                    hash: 1,
                    query: 1
                };

            function ue(d) {
                var p;
                typeof window < "u" ? p = window : typeof n < "u" ? p = n : typeof self < "u" ? p = self : p = {};
                var g = p.location || {};
                d = d || g;
                var l = {},
                    _ = typeof d,
                    S;
                if (d.protocol === "blob:") l = new L(unescape(d.pathname), {});
                else if (_ === "string") {
                    l = new L(d, {});
                    for (S in Se) delete l[S]
                } else if (_ === "object") {
                    for (S in d) S in Se || (l[S] = d[S]);
                    l.slashes === void 0 && (l.slashes = O.test(d.href))
                }
                return l
            }

            function fe(d) {
                return d === "file:" || d === "ftp:" || d === "http:" || d === "https:" || d === "ws:" || d === "wss:"
            }

            function he(d, p) {
                d = F(d), p = p || {};
                var g = T.exec(d),
                    l = g[1] ? g[1].toLowerCase() : "",
                    _ = !!g[2],
                    S = !!g[3],
                    w = 0,
                    x;
                return _ ? S ? (x = g[2] + g[3] + g[4], w = g[2].length + g[3].length) : (x = g[2] + g[4], w = g[2].length) : S ? (x = g[3] + g[4], w = g[3].length) : x = g[4], l === "file:" ? w >= 2 && (x = x.slice(2)) : fe(l) ? x = g[4] : l ? _ && (x = x.slice(2)) : w >= 2 && fe(p.protocol) && (x = g[4]), {
                    protocol: l,
                    slashes: _ || fe(l),
                    slashesCount: w,
                    rest: x
                }
            }

            function _e(d, p) {
                if (d === "") return p;
                for (var g = (p || "/").split("/").slice(0, -1).concat(d.split("/")), l = g.length, _ = g[l - 1], S = !1, w = 0; l--;) g[l] === "." ? g.splice(l, 1) : g[l] === ".." ? (g.splice(l, 1), w++) : w && (l === 0 && (S = !0), g.splice(l, 1), w--);
                return S && g.unshift(""), (_ === "." || _ === "..") && g.push(""), g.join("/")
            }

            function L(d, p, g) {
                if (d = F(d), !(this instanceof L)) return new L(d, p, g);
                var l, _, S, w, x, I, le = ce.slice(),
                    ve = typeof p,
                    N = this,
                    qr = 0;
                for (ve !== "object" && ve !== "string" && (g = p, p = null), g && typeof g != "function" && (g = b.parse), p = ue(p), _ = he(d || "", p), l = !_.protocol && !_.slashes, N.slashes = _.slashes || l && p.slashes, N.protocol = _.protocol || p.protocol || "", d = _.rest, (N.protocol === "file:" || !_.slashes && (_.protocol || _.slashesCount < 2 || !fe(N.protocol))) && (le[3] = [/(.*)/, "pathname"]); qr < le.length; qr++) {
                    if (w = le[qr], typeof w == "function") {
                        d = w(d, N);
                        continue
                    }
                    S = w[0], I = w[1], S !== S ? N[I] = d : typeof S == "string" ? ~(x = d.indexOf(S)) && (typeof w[2] == "number" ? (N[I] = d.slice(0, x), d = d.slice(x + w[2])) : (N[I] = d.slice(x), d = d.slice(0, x))) : (x = S.exec(d)) && (N[I] = x[1], d = d.slice(0, x.index)), N[I] = N[I] || l && w[3] && p[I] || "", w[4] && (N[I] = N[I].toLowerCase())
                }
                g && (N.query = g(N.query)), l && p.slashes && N.pathname.charAt(0) !== "/" && (N.pathname !== "" || p.pathname !== "") && (N.pathname = _e(N.pathname, p.pathname)), N.pathname.charAt(0) !== "/" && fe(N.protocol) && (N.pathname = "/" + N.pathname), i(N.port, N.protocol) || (N.host = N.hostname, N.port = ""), N.username = N.password = "", N.auth && (w = N.auth.split(":"), N.username = w[0] || "", N.password = w[1] || ""), N.origin = N.protocol !== "file:" && fe(N.protocol) && N.host ? N.protocol + "//" + N.host : "null", N.href = N.toString()
            }

            function jr(d, p, g) {
                var l = this;
                switch (d) {
                    case "query":
                        typeof p == "string" && p.length && (p = (g || b.parse)(p)), l[d] = p;
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
                        l.protocol = p.toLowerCase(), l.slashes = !g;
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
                for (var S = 0; S < ce.length; S++) {
                    var w = ce[S];
                    w[4] && (l[w[1]] = l[w[1]].toLowerCase())
                }
                return l.origin = l.protocol !== "file:" && fe(l.protocol) && l.host ? l.protocol + "//" + l.host : "null", l.href = l.toString(), l
            }

            function Ur(d) {
                (!d || typeof d != "function") && (d = b.stringify);
                var p, g = this,
                    l = g.protocol;
                l && l.charAt(l.length - 1) !== ":" && (l += ":");
                var _ = l + (g.slashes || fe(g.protocol) ? "//" : "");
                return g.username && (_ += g.username, g.password && (_ += ":" + g.password), _ += "@"), _ += g.host + g.pathname, p = typeof g.query == "object" ? d(g.query) : g.query, p && (_ += p.charAt(0) !== "?" ? "?" + p : p), g.hash && (_ += g.hash), _
            }
            L.prototype = {
                set: jr,
                toString: Ur
            }, L.extractProtocol = he, L.location = ue, L.trimLeft = F, L.qs = b;
            var oe = L;

            function Ge(d, p) {
                setTimeout(function(g) {
                    return d.call(g)
                }, 4, p)
            }

            function Pe(d, p) {
                typeof process < "u" && console[d].call(null, p)
            }

            function v(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) || g.push(l)
                }), g
            }

            function k(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) && g.push(l)
                }), g
            }
            var P = function() {
                this.listeners = {}
            };
            P.prototype.addEventListener = function(p, g) {
                typeof g == "function" && (Array.isArray(this.listeners[p]) || (this.listeners[p] = []), k(this.listeners[p], function(l) {
                    return l === g
                }).length === 0 && this.listeners[p].push(g))
            }, P.prototype.removeEventListener = function(p, g) {
                var l = this.listeners[p];
                this.listeners[p] = v(l, function(_) {
                    return _ === g
                })
            }, P.prototype.dispatchEvent = function(p) {
                for (var g = this, l = [], _ = arguments.length - 1; _-- > 0;) l[_] = arguments[_ + 1];
                var S = p.type,
                    w = this.listeners[S];
                return Array.isArray(w) ? (w.forEach(function(x) {
                    l.length > 0 ? x.apply(g, l) : x.call(g, p)
                }), !0) : !1
            };

            function U(d) {
                var p = d.indexOf("?");
                return p >= 0 ? d.slice(0, p) : d
            }
            var M = function() {
                this.urlMap = {}
            };
            M.prototype.attachWebSocket = function(p, g) {
                var l = U(g),
                    _ = this.urlMap[l];
                if (_ && _.server && _.websockets.indexOf(p) === -1) return _.websockets.push(p), _.server
            }, M.prototype.addMembershipToRoom = function(p, g) {
                var l = this.urlMap[U(p.url)];
                l && l.server && l.websockets.indexOf(p) !== -1 && (l.roomMemberships[g] || (l.roomMemberships[g] = []), l.roomMemberships[g].push(p))
            }, M.prototype.attachServer = function(p, g) {
                var l = U(g),
                    _ = this.urlMap[l];
                if (!_) return this.urlMap[l] = {
                    server: p,
                    websockets: [],
                    roomMemberships: {}
                }, p
            }, M.prototype.serverLookup = function(p) {
                var g = U(p),
                    l = this.urlMap[g];
                if (l) return l.server
            }, M.prototype.websocketsLookup = function(p, g, l) {
                var _ = U(p),
                    S, w = this.urlMap[_];
                if (S = w ? w.websockets : [], g) {
                    var x = w.roomMemberships[g];
                    S = x || []
                }
                return l ? S.filter(function(I) {
                    return I !== l
                }) : S
            }, M.prototype.removeServer = function(p) {
                delete this.urlMap[U(p)]
            }, M.prototype.removeWebSocket = function(p, g) {
                var l = U(g),
                    _ = this.urlMap[l];
                _ && (_.websockets = v(_.websockets, function(S) {
                    return S === p
                }))
            }, M.prototype.removeMembershipFromRoom = function(p, g) {
                var l = this.urlMap[U(p.url)],
                    _ = l.roomMemberships[g];
                l && _ !== null && (l.roomMemberships[g] = v(_, function(S) {
                    return S === p
                }))
            };
            var R = new M,
                ee = {
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
                re = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                Z = function() {};
            Z.prototype.stopPropagation = function() {}, Z.prototype.stopImmediatePropagation = function() {}, Z.prototype.initEvent = function(p, g, l) {
                p === void 0 && (p = "undefined"), g === void 0 && (g = !1), l === void 0 && (l = !1), this.type = "" + p, this.bubbles = !!g, this.cancelable = !!l
            };
            var Ze = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(re.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(re.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var _ = l.bubbles,
                            S = l.cancelable;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Z),
                Ks = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(re.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(re.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            S = l.cancelable,
                            w = l.data,
                            x = l.origin,
                            I = l.lastEventId,
                            le = l.ports;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.canncelBubble = !1, this.bubbles = _ ? !!_ : !1, this.origin = "" + x, this.ports = typeof le > "u" ? null : le, this.data = typeof w > "u" ? null : w, this.lastEventId = "" + (I || "")
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Z),
                Vs = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(re.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(re.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            S = l.cancelable,
                            w = l.code,
                            x = l.reason,
                            I = l.wasClean;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1, this.code = typeof w == "number" ? parseInt(w, 10) : 0, this.reason = "" + (x || ""), this.wasClean = I ? !!I : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Z);

            function ge(d) {
                var p = d.type,
                    g = d.target,
                    l = new Ze(p);
                return g && (l.target = g, l.srcElement = g, l.currentTarget = g), l
            }

            function It(d) {
                var p = d.type,
                    g = d.origin,
                    l = d.data,
                    _ = d.target,
                    S = new Ks(p, {
                        data: l,
                        origin: g
                    });
                return _ && (S.target = _, S.srcElement = _, S.currentTarget = _), S
            }

            function de(d) {
                var p = d.code,
                    g = d.reason,
                    l = d.type,
                    _ = d.target,
                    S = d.wasClean;
                S || (S = p === ee.CLOSE_NORMAL || p === ee.CLOSE_NO_STATUS);
                var w = new Vs(l, {
                    code: p,
                    reason: g,
                    wasClean: S
                });
                return _ && (w.target = _, w.srcElement = _, w.currentTarget = _), w
            }

            function Xn(d, p, g) {
                d.readyState = J.CLOSING;
                var l = R.serverLookup(d.url),
                    _ = de({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: g
                    }),
                    S = de({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: g
                    });
                Ge(function() {
                    R.removeWebSocket(d, d.url), d.readyState = J.CLOSED, d.dispatchEvent(_), d.dispatchEvent(S), l && l.dispatchEvent(_, l)
                }, d)
            }

            function Js(d, p, g) {
                d.readyState = J.CLOSING;
                var l = R.serverLookup(d.url),
                    _ = de({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: g,
                        wasClean: !1
                    }),
                    S = de({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: g,
                        wasClean: !1
                    }),
                    w = ge({
                        type: "error",
                        target: d.target
                    });
                Ge(function() {
                    R.removeWebSocket(d, d.url), d.readyState = J.CLOSED, d.dispatchEvent(w), d.dispatchEvent(_), d.dispatchEvent(S), l && l.dispatchEvent(_, l)
                }, d)
            }

            function Jt(d) {
                return Object.prototype.toString.call(d) !== "[object Blob]" && !(d instanceof ArrayBuffer) && (d = String(d)), d
            }
            var Mr = new WeakMap;

            function Qn(d) {
                if (Mr.has(d)) return Mr.get(d);
                var p = new Proxy(d, {
                    get: function(l, _) {
                        return _ === "close" ? function(w) {
                            w === void 0 && (w = {});
                            var x = w.code || ee.CLOSE_NORMAL,
                                I = w.reason || "";
                            Xn(p, x, I)
                        } : _ === "send" ? function(w) {
                            w = Jt(w), d.dispatchEvent(It({
                                type: "message",
                                data: w,
                                origin: this.url,
                                target: d
                            }))
                        } : _ === "on" ? function(w, x) {
                            d.addEventListener("server::" + w, x)
                        } : _ === "target" ? d : l[_]
                    }
                });
                return Mr.set(d, p), p
            }

            function Xs(d) {
                var p = encodeURIComponent(d).match(/%[89ABab]/g);
                return d.length + (p ? p.length : 0)
            }

            function Qs(d) {
                var p = new oe(d),
                    g = p.pathname,
                    l = p.protocol,
                    _ = p.hash;
                if (!d) throw new TypeError(re.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (g || (p.pathname = "/"), l === "") throw new SyntaxError(re.CONSTRUCTOR_ERROR + " The URL '" + p.toString() + "' is invalid.");
                if (l !== "ws:" && l !== "wss:") throw new SyntaxError(re.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + l + "' is not allowed.");
                if (_ !== "") throw new SyntaxError(re.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + _ + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return p.toString()
            }

            function Zs(d) {
                if (d === void 0 && (d = []), !Array.isArray(d) && typeof d != "string") throw new SyntaxError(re.CONSTRUCTOR_ERROR + " The subprotocol '" + d.toString() + "' is invalid.");
                typeof d == "string" && (d = [d]);
                var p = d.map(function(l) {
                        return {
                            count: 1,
                            protocol: l
                        }
                    }).reduce(function(l, _) {
                        return l[_.protocol] = (l[_.protocol] || 0) + _.count, l
                    }, {}),
                    g = Object.keys(p).filter(function(l) {
                        return p[l] > 1
                    });
                if (g.length > 0) throw new SyntaxError(re.CONSTRUCTOR_ERROR + " The subprotocol '" + g[0] + "' is duplicated.");
                return d
            }
            var J = function(d) {
                function p(l, _) {
                    d.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = Qs(l), _ = Zs(_), this.protocol = _[0] || "", this.binaryType = "blob", this.readyState = p.CONNECTING;
                    var S = Qn(this),
                        w = R.attachWebSocket(S, this.url);
                    Ge(function() {
                        if (w)
                            if (w.options.verifyClient && typeof w.options.verifyClient == "function" && !w.options.verifyClient()) this.readyState = p.CLOSED, Pe("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), R.removeWebSocket(S, this.url), this.dispatchEvent(ge({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(de({
                                type: "close",
                                target: this,
                                code: ee.CLOSE_NORMAL
                            }));
                            else {
                                if (w.options.selectProtocol && typeof w.options.selectProtocol == "function") {
                                    var I = w.options.selectProtocol(_),
                                        le = I !== "",
                                        ve = _.indexOf(I) !== -1;
                                    if (le && !ve) {
                                        this.readyState = p.CLOSED, Pe("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), R.removeWebSocket(S, this.url), this.dispatchEvent(ge({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(de({
                                            type: "close",
                                            target: this,
                                            code: ee.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = I
                                }
                                this.readyState = p.OPEN, this.dispatchEvent(ge({
                                    type: "open",
                                    target: this
                                })), w.dispatchEvent(ge({
                                    type: "connection"
                                }), S)
                            }
                        else this.readyState = p.CLOSED, this.dispatchEvent(ge({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(de({
                            type: "close",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        })), Pe("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p;
                var g = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return g.onopen.get = function() {
                    return this._onopen
                }, g.onmessage.get = function() {
                    return this._onmessage
                }, g.onclose.get = function() {
                    return this._onclose
                }, g.onerror.get = function() {
                    return this._onerror
                }, g.onopen.set = function(l) {
                    this.removeEventListener("open", this._onopen), this._onopen = l, this.addEventListener("open", l)
                }, g.onmessage.set = function(l) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = l, this.addEventListener("message", l)
                }, g.onclose.set = function(l) {
                    this.removeEventListener("close", this._onclose), this._onclose = l, this.addEventListener("close", l)
                }, g.onerror.set = function(l) {
                    this.removeEventListener("error", this._onerror), this._onerror = l, this.addEventListener("error", l)
                }, p.prototype.send = function(_) {
                    var S = this;
                    if (this.readyState === p.CLOSING || this.readyState === p.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var w = It({
                            type: "server::message",
                            origin: this.url,
                            data: Jt(_)
                        }),
                        x = R.serverLookup(this.url);
                    x && Ge(function() {
                        S.dispatchEvent(w, _)
                    }, x)
                }, p.prototype.close = function(_, S) {
                    if (_ !== void 0 && (typeof _ != "number" || _ !== 1e3 && (_ < 3e3 || _ > 4999))) throw new TypeError(re.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + _ + " is neither.");
                    if (S !== void 0) {
                        var w = Xs(S);
                        if (w > 123) throw new SyntaxError(re.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === p.CLOSING || this.readyState === p.CLOSED)) {
                        var x = Qn(this);
                        this.readyState === p.CONNECTING ? Js(x, _ || ee.CLOSE_ABNORMAL, S) : Xn(x, _ || ee.CLOSE_NO_STATUS, S)
                    }
                }, Object.defineProperties(p.prototype, g), p
            }(P);
            J.CONNECTING = 0, J.prototype.CONNECTING = J.CONNECTING, J.OPEN = 1, J.prototype.OPEN = J.OPEN, J.CLOSING = 2, J.prototype.CLOSING = J.CLOSING, J.CLOSED = 3, J.prototype.CLOSED = J.CLOSED;
            var ea = function(d) {
                return d.reduce(function(p, g) {
                    return p.indexOf(g) > -1 ? p : p.concat(g)
                }, [])
            };

            function Zn() {
                return typeof window < "u" ? window : typeof process == "object" && typeof p_ == "function" && typeof pe == "object" ? pe : this
            }
            var ei = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                Br = function(d) {
                    function p(g, l) {
                        l === void 0 && (l = ei), d.call(this);
                        var _ = new oe(g);
                        _.pathname || (_.pathname = "/"), this.url = _.toString(), this.originalWebSocket = null;
                        var S = R.attachServer(this, this.url);
                        if (!S) throw this.dispatchEvent(ge({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, ei, l), this.options.mock && this.mockWebsocket()
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p.prototype.mockWebsocket = function() {
                        var l = Zn();
                        this.originalWebSocket = l.WebSocket, l.WebSocket = J
                    }, p.prototype.restoreWebsocket = function() {
                        var l = Zn();
                        this.originalWebSocket !== null && (l.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, p.prototype.stop = function(l) {
                        l === void 0 && (l = function() {}), this.options.mock && this.restoreWebsocket(), R.removeServer(this.url), typeof l == "function" && l()
                    }, p.prototype.on = function(l, _) {
                        this.addEventListener(l, _)
                    }, p.prototype.close = function(l) {
                        l === void 0 && (l = {});
                        var _ = l.code,
                            S = l.reason,
                            w = l.wasClean,
                            x = R.websocketsLookup(this.url);
                        R.removeServer(this.url), x.forEach(function(I) {
                            I.readyState = J.CLOSED, I.dispatchEvent(de({
                                type: "close",
                                target: I.target,
                                code: _ || ee.CLOSE_NORMAL,
                                reason: S || "",
                                wasClean: w
                            }))
                        }), this.dispatchEvent(de({
                            type: "close"
                        }), this)
                    }, p.prototype.emit = function(l, _, S) {
                        var w = this;
                        S === void 0 && (S = {});
                        var x = S.websockets;
                        x || (x = R.websocketsLookup(this.url)), typeof S != "object" || arguments.length > 3 ? (_ = Array.prototype.slice.call(arguments, 1, arguments.length), _ = _.map(function(I) {
                            return Jt(I)
                        })) : _ = Jt(_), x.forEach(function(I) {
                            Array.isArray(_) ? I.dispatchEvent.apply(I, [It({
                                type: l,
                                data: _,
                                origin: w.url,
                                target: I.target
                            })].concat(_)) : I.dispatchEvent(It({
                                type: l,
                                data: _,
                                origin: w.url,
                                target: I.target
                            }))
                        })
                    }, p.prototype.clients = function() {
                        return R.websocketsLookup(this.url)
                    }, p.prototype.to = function(l, _, S) {
                        var w = this;
                        S === void 0 && (S = []);
                        var x = this,
                            I = ea(S.concat(R.websocketsLookup(this.url, l, _)));
                        return {
                            to: function(le, ve) {
                                return w.to.call(w, le, ve, I)
                            },
                            emit: function(ve, N) {
                                x.emit(ve, N, {
                                    websockets: I
                                })
                            }
                        }
                    }, p.prototype.in = function() {
                        for (var l = [], _ = arguments.length; _--;) l[_] = arguments[_];
                        return this.to.apply(null, l)
                    }, p.prototype.simulate = function(l) {
                        var _ = R.websocketsLookup(this.url);
                        l === "error" && _.forEach(function(S) {
                            S.readyState = J.CLOSED, S.dispatchEvent(ge({
                                type: "error"
                            }))
                        })
                    }, p
                }(P);
            Br.of = function(p) {
                return new Br(p)
            };
            var Pt = function(d) {
                function p(l, _) {
                    var S = this;
                    l === void 0 && (l = "socket.io"), _ === void 0 && (_ = ""), d.call(this), this.binaryType = "blob";
                    var w = new oe(l);
                    w.pathname || (w.pathname = "/"), this.url = w.toString(), this.readyState = p.CONNECTING, this.protocol = "", this.target = this, typeof _ == "string" || typeof _ == "object" && _ !== null ? this.protocol = _ : Array.isArray(_) && _.length > 0 && (this.protocol = _[0]);
                    var x = R.attachWebSocket(this, this.url);
                    Ge(function() {
                        x ? (this.readyState = p.OPEN, x.dispatchEvent(ge({
                            type: "connection"
                        }), x, this), x.dispatchEvent(ge({
                            type: "connect"
                        }), x, this), this.dispatchEvent(ge({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = p.CLOSED, this.dispatchEvent(ge({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(de({
                            type: "close",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        })), Pe("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(I) {
                        S.dispatchEvent(de({
                            type: "disconnect",
                            target: I.target,
                            code: I.code
                        }))
                    })
                }
                d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p;
                var g = {
                    broadcast: {}
                };
                return p.prototype.close = function() {
                    if (this.readyState === p.OPEN) {
                        var _ = R.serverLookup(this.url);
                        return R.removeWebSocket(this, this.url), this.readyState = p.CLOSED, this.dispatchEvent(de({
                            type: "close",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        })), _ && _.dispatchEvent(de({
                            type: "disconnect",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        }), _), this
                    }
                }, p.prototype.disconnect = function() {
                    return this.close()
                }, p.prototype.emit = function(_) {
                    for (var S = [], w = arguments.length - 1; w-- > 0;) S[w] = arguments[w + 1];
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var x = It({
                            type: _,
                            origin: this.url,
                            data: S
                        }),
                        I = R.serverLookup(this.url);
                    return I && I.dispatchEvent.apply(I, [x].concat(S)), this
                }, p.prototype.send = function(_) {
                    return this.emit("message", _), this
                }, g.broadcast.get = function() {
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var l = this,
                        _ = R.serverLookup(this.url);
                    if (!_) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(w, x) {
                            return _.emit(w, x, {
                                websockets: R.websocketsLookup(l.url, null, l)
                            }), l
                        },
                        to: function(w) {
                            return _.to(w, l)
                        },
                        in: function(w) {
                            return _.in(w, l)
                        }
                    }
                }, p.prototype.on = function(_, S) {
                    return this.addEventListener(_, S), this
                }, p.prototype.off = function(_, S) {
                    this.removeEventListener(_, S)
                }, p.prototype.hasListeners = function(_) {
                    var S = this.listeners[_];
                    return Array.isArray(S) ? !!S.length : !1
                }, p.prototype.join = function(_) {
                    R.addMembershipToRoom(this, _)
                }, p.prototype.leave = function(_) {
                    R.removeMembershipFromRoom(this, _)
                }, p.prototype.to = function(_) {
                    return this.broadcast.to(_)
                }, p.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, p.prototype.dispatchEvent = function(_) {
                    for (var S = this, w = [], x = arguments.length - 1; x-- > 0;) w[x] = arguments[x + 1];
                    var I = _.type,
                        le = this.listeners[I];
                    if (!Array.isArray(le)) return !1;
                    le.forEach(function(ve) {
                        w.length > 0 ? ve.apply(S, w) : ve.call(S, _.data ? _.data : _)
                    })
                }, Object.defineProperties(p.prototype, g), p
            }(P);
            Pt.CONNECTING = 0, Pt.OPEN = 1, Pt.CLOSING = 2, Pt.CLOSED = 3;
            var Fr = function(p, g) {
                return new Pt(p, g)
            };
            Fr.connect = function(p, g) {
                return Fr(p, g)
            };
            var ta = Br,
                ra = J,
                na = Fr;
            r.Server = ta, r.WebSocket = ra, r.SocketIO = na, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Ui, Ui.exports);
    var d_ = {
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
                    m = u.y,
                    y = f.x - h,
                    b = f.y - m;
                if (y !== 0 || b !== 0) {
                    var O = ((a.x - h) * y + (a.y - m) * b) / (y * y + b * b);
                    O > 1 ? (h = f.x, m = f.y) : O > 0 && (h += y * O, m += b * O)
                }
                return y = a.x - h, b = a.y - m, y * y + b * b
            }

            function n(a, u) {
                for (var f = a[0], h = [f], m, y = 1, b = a.length; y < b; y++) m = a[y], e(m, f) > u && (h.push(m), f = m);
                return f !== m && h.push(m), h
            }

            function i(a, u, f, h, m) {
                for (var y = h, b, O = u + 1; O < f; O++) {
                    var T = r(a[O], a[u], a[f]);
                    T > y && (b = O, y = T)
                }
                y > h && (b - u > 1 && i(a, u, b, h, m), m.push(a[b]), f - b > 1 && i(a, b, f, h, m))
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
    })(d_);
    const fs = Object.prototype.toString;

    function ls(t) {
        switch (fs.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return At(t, Error)
        }
    }

    function Rt(t, e) {
        return fs.call(t) === `[object ${e}]`
    }

    function ps(t) {
        return Rt(t, "ErrorEvent")
    }

    function Mi(t) {
        return Rt(t, "DOMError")
    }

    function h_(t) {
        return Rt(t, "DOMException")
    }

    function Je(t) {
        return Rt(t, "String")
    }

    function ds(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function yt(t) {
        return Rt(t, "Object")
    }

    function Bn(t) {
        return typeof Event < "u" && At(t, Event)
    }

    function __(t) {
        return typeof Element < "u" && At(t, Element)
    }

    function g_(t) {
        return Rt(t, "RegExp")
    }

    function Fn(t) {
        return !!(t && t.then && typeof t.then == "function")
    }

    function y_(t) {
        return yt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function m_(t) {
        return typeof t == "number" && t !== t
    }

    function At(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function Qt(t) {
        return t && t.Math == Math ? t : void 0
    }
    const me = typeof globalThis == "object" && Qt(globalThis) || typeof window == "object" && Qt(window) || typeof self == "object" && Qt(self) || typeof global == "object" && Qt(global) || function() {
        return this
    }() || {};

    function Kt() {
        return me
    }

    function qn(t, e, r) {
        const n = r || me,
            i = n.__SENTRY__ = n.__SENTRY__ || {};
        return i[t] || (i[t] = e())
    }
    const v_ = Kt(),
        b_ = 80;

    function on(t, e = {}) {
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
                m = !Array.isArray(e) && e.maxStringLength || b_;
            for (; r && o++ < n && (f = E_(r, h), !(f === "html" || o > 1 && s + i.length * u + f.length >= m));) i.push(f), s += f.length, r = r.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function E_(t, e) {
        const r = t,
            n = [];
        let i, o, s, a, u;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        const f = e && e.length ? e.filter(m => r.getAttribute(m)).map(m => [m, r.getAttribute(m)]) : null;
        if (f && f.length) f.forEach(m => {
            n.push(`[${m[0]}="${m[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), i = r.className, i && Je(i))
            for (o = i.split(/\s+/), u = 0; u < o.length; u++) n.push(`.${o[u]}`);
        const h = ["aria-label", "type", "name", "title", "alt"];
        for (u = 0; u < h.length; u++) s = h[u], a = r.getAttribute(s), a && n.push(`[${s}="${a}"]`);
        return n.join("")
    }

    function S_() {
        try {
            return v_.document.location.href
        } catch {
            return ""
        }
    }
    class ie extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    const w_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function O_(t) {
        return t === "http" || t === "https"
    }

    function Nr(t, e = !1) {
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

    function k_(t) {
        const e = w_.exec(t);
        if (!e) throw new ie(`Invalid Sentry Dsn: ${t}`);
        const [r, n, i = "", o, s = "", a] = e.slice(1);
        let u = "",
            f = a;
        const h = f.split("/");
        if (h.length > 1 && (u = h.slice(0, -1).join("/"), f = h.pop()), f) {
            const m = f.match(/^\d+/);
            m && (f = m[0])
        }
        return hs({
            host: o,
            pass: i,
            path: u,
            projectId: f,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function hs(t) {
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

    function T_(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: e,
            projectId: r,
            protocol: n
        } = t;
        if (["protocol", "publicKey", "host", "projectId"].forEach(o => {
                if (!t[o]) throw new ie(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new ie(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!O_(n)) throw new ie(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new ie(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function x_(t) {
        const e = typeof t == "string" ? k_(t) : hs(t);
        return T_(e), e
    }
    const R_ = "Sentry Logger ",
        vr = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function _s(t) {
        if (!("console" in me)) return t();
        const e = me.console,
            r = {};
        vr.forEach(n => {
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

    function Bi() {
        let t = !1;
        const e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? vr.forEach(r => {
            e[r] = (...n) => {
                t && _s(() => {
                    me.console[r](`${R_}[${r}]:`, ...n)
                })
            }
        }) : vr.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let $;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? $ = qn("logger", Bi) : $ = Bi();

    function jt(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function Fi(t, e) {
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

    function A_(t, e, r = !1) {
        return Je(t) ? g_(e) ? e.test(t) : Je(e) ? r ? t === e : t.includes(e) : !1 : !1
    }

    function Dr(t, e = [], r = !1) {
        return e.some(n => A_(t, n, r))
    }

    function te(t, e, r) {
        if (!(e in t)) return;
        const n = t[e],
            i = r(n);
        if (typeof i == "function") try {
            gs(i, n)
        } catch {}
        t[e] = i
    }

    function Gn(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function gs(t, e) {
        const r = e.prototype || {};
        t.prototype = e.prototype = r, Gn(t, "__sentry_original__", e)
    }

    function Yn(t) {
        return t.__sentry_original__
    }

    function I_(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function ys(t) {
        if (ls(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...Gi(t)
        };
        if (Bn(t)) {
            const e = {
                type: t.type,
                target: qi(t.target),
                currentTarget: qi(t.currentTarget),
                ...Gi(t)
            };
            return typeof CustomEvent < "u" && At(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function qi(t) {
        try {
            return __(t) ? on(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function Gi(t) {
        if (typeof t == "object" && t !== null) {
            const e = {};
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function P_(t, e = 40) {
        const r = Object.keys(ys(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return jt(r[0], e);
        for (let n = r.length; n > 0; n--) {
            const i = r.slice(0, n).join(", ");
            if (!(i.length > e)) return n === r.length ? i : jt(i, e)
        }
        return ""
    }

    function Hn(t) {
        return sn(t, new Map)
    }

    function sn(t, e) {
        if (yt(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = {};
            e.set(t, n);
            for (const i of Object.keys(t)) typeof t[i] < "u" && (n[i] = sn(t[i], e));
            return n
        }
        if (Array.isArray(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = [];
            return e.set(t, n), t.forEach(i => {
                n.push(sn(i, e))
            }), n
        }
        return t
    }
    const ms = 50,
        Yi = /\(error: (.*)\)/;

    function vs(...t) {
        const e = t.sort((r, n) => r[0] - n[0]).map(r => r[1]);
        return (r, n = 0) => {
            const i = [],
                o = r.split(`
`);
            for (let s = n; s < o.length; s++) {
                const a = o[s];
                if (a.length > 1024) continue;
                const u = Yi.test(a) ? a.replace(Yi, "$1") : a;
                if (!u.match(/\S*Error: /)) {
                    for (const f of e) {
                        const h = f(u);
                        if (h) {
                            i.push(h);
                            break
                        }
                    }
                    if (i.length >= ms) break
                }
            }
            return D_(i)
        }
    }

    function N_(t) {
        return Array.isArray(t) ? vs(...t) : t
    }

    function D_(t) {
        if (!t.length) return [];
        const e = t.slice(0, ms),
            r = e[e.length - 1].function;
        r && /sentryWrapped/.test(r) && e.pop(), e.reverse();
        const n = e[e.length - 1].function;
        return n && /captureMessage|captureException/.test(n) && e.pop(), e.map(i => ({
            ...i,
            filename: i.filename || e[e.length - 1].filename,
            function: i.function || "?"
        }))
    }
    const Qr = "<anonymous>";

    function Be(t) {
        try {
            return !t || typeof t != "function" ? Qr : t.name || Qr
        } catch {
            return Qr
        }
    }
    const an = Kt();

    function bs() {
        if (!("fetch" in an)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch {
            return !1
        }
    }

    function cn(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function $_() {
        if (!bs()) return !1;
        if (cn(an.fetch)) return !0;
        let t = !1;
        const e = an.document;
        if (e && typeof e.createElement == "function") try {
            const r = e.createElement("iframe");
            r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = cn(r.contentWindow.fetch)), e.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return t
    }
    const Zt = Kt();

    function C_() {
        const t = Zt.chrome,
            e = t && t.app && t.app.runtime,
            r = "history" in Zt && !!Zt.history.pushState && !!Zt.history.replaceState;
        return !e && r
    }
    const K = Kt(),
        $t = "__sentry_xhr_v2__",
        Ut = {},
        Hi = {};

    function L_(t) {
        if (!Hi[t]) switch (Hi[t] = !0, t) {
            case "console":
                j_();
                break;
            case "dom":
                H_();
                break;
            case "xhr":
                B_();
                break;
            case "fetch":
                U_();
                break;
            case "history":
                F_();
                break;
            case "error":
                W_();
                break;
            case "unhandledrejection":
                z_();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("unknown instrumentation type:", t);
                return
        }
    }

    function $e(t, e) {
        Ut[t] = Ut[t] || [], Ut[t].push(e), L_(t)
    }

    function Ee(t, e) {
        if (!(!t || !Ut[t]))
            for (const r of Ut[t] || []) try {
                r(e)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Be(r)}
Error:`, n)
            }
    }

    function j_() {
        "console" in K && vr.forEach(function(t) {
            t in K.console && te(K.console, t, function(e) {
                return function(...r) {
                    Ee("console", {
                        args: r,
                        level: t
                    }), e && e.apply(K.console, r)
                }
            })
        })
    }

    function U_() {
        $_() && te(K, "fetch", function(t) {
            return function(...e) {
                const {
                    method: r,
                    url: n
                } = M_(e), i = {
                    args: e,
                    fetchData: {
                        method: r,
                        url: n
                    },
                    startTimestamp: Date.now()
                };
                return Ee("fetch", {
                    ...i
                }), t.apply(K, e).then(o => (Ee("fetch", {
                    ...i,
                    endTimestamp: Date.now(),
                    response: o
                }), o), o => {
                    throw Ee("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        error: o
                    }), o
                })
            }
        })
    }

    function un(t, e) {
        return !!t && typeof t == "object" && !!t[e]
    }

    function Wi(t) {
        return typeof t == "string" ? t : t ? un(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
    }

    function M_(t) {
        if (t.length === 0) return {
            method: "GET",
            url: ""
        };
        if (t.length === 2) {
            const [r, n] = t;
            return {
                url: Wi(r),
                method: un(n, "method") ? String(n.method).toUpperCase() : "GET"
            }
        }
        const e = t[0];
        return {
            url: Wi(e),
            method: un(e, "method") ? String(e.method).toUpperCase() : "GET"
        }
    }

    function B_() {
        if (!("XMLHttpRequest" in K)) return;
        const t = XMLHttpRequest.prototype;
        te(t, "open", function(e) {
            return function(...r) {
                const n = r[1],
                    i = this[$t] = {
                        method: Je(r[0]) ? r[0].toUpperCase() : r[0],
                        url: r[1],
                        request_headers: {}
                    };
                Je(n) && i.method === "POST" && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const o = () => {
                    const s = this[$t];
                    if (s && this.readyState === 4) {
                        try {
                            s.status_code = this.status
                        } catch {}
                        Ee("xhr", {
                            args: r,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: this
                        })
                    }
                };
                return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? te(this, "onreadystatechange", function(s) {
                    return function(...a) {
                        return o(), s.apply(this, a)
                    }
                }) : this.addEventListener("readystatechange", o), te(this, "setRequestHeader", function(s) {
                    return function(...a) {
                        const [u, f] = a, h = this[$t];
                        return h && (h.request_headers[u.toLowerCase()] = f), s.apply(this, a)
                    }
                }), e.apply(this, r)
            }
        }), te(t, "send", function(e) {
            return function(...r) {
                const n = this[$t];
                return n && r[0] !== void 0 && (n.body = r[0]), Ee("xhr", {
                    args: r,
                    startTimestamp: Date.now(),
                    xhr: this
                }), e.apply(this, r)
            }
        })
    }
    let er;

    function F_() {
        if (!C_()) return;
        const t = K.onpopstate;
        K.onpopstate = function(...r) {
            const n = K.location.href,
                i = er;
            if (er = n, Ee("history", {
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
                    const o = er,
                        s = String(i);
                    er = s, Ee("history", {
                        from: o,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        te(K.history, "pushState", e), te(K.history, "replaceState", e)
    }
    const q_ = 1e3;
    let tr, rr;

    function G_(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function Y_(t) {
        if (t.type !== "keypress") return !1;
        try {
            const e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function zi(t, e = !1) {
        return r => {
            if (!r || rr === r || Y_(r)) return;
            const n = r.type === "keypress" ? "input" : r.type;
            tr === void 0 ? (t({
                event: r,
                name: n,
                global: e
            }), rr = r) : G_(rr, r) && (t({
                event: r,
                name: n,
                global: e
            }), rr = r), clearTimeout(tr), tr = K.setTimeout(() => {
                tr = void 0
            }, q_)
        }
    }

    function H_() {
        if (!("document" in K)) return;
        const t = Ee.bind(null, "dom"),
            e = zi(t, !0);
        K.document.addEventListener("click", e, !1), K.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
            const n = K[r] && K[r].prototype;
            !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (te(n, "addEventListener", function(i) {
                return function(o, s, a) {
                    if (o === "click" || o == "keypress") try {
                        const u = this,
                            f = u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {},
                            h = f[o] = f[o] || {
                                refCount: 0
                            };
                        if (!h.handler) {
                            const m = zi(t);
                            h.handler = m, i.call(this, o, m, a)
                        }
                        h.refCount++
                    } catch {}
                    return i.call(this, o, s, a)
                }
            }), te(n, "removeEventListener", function(i) {
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
    let nr = null;

    function W_() {
        nr = K.onerror, K.onerror = function(t, e, r, n, i) {
            return Ee("error", {
                column: n,
                error: i,
                line: r,
                msg: t,
                url: e
            }), nr && !nr.__SENTRY_LOADER__ ? nr.apply(this, arguments) : !1
        }, K.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    let ir = null;

    function z_() {
        ir = K.onunhandledrejection, K.onunhandledrejection = function(t) {
            return Ee("unhandledrejection", t), ir && !ir.__SENTRY_LOADER__ ? ir.apply(this, arguments) : !0
        }, K.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }

    function K_() {
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

    function ut() {
        const t = me,
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        const r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function Es(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function Ce(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        const n = Es(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function fn(t, e, r) {
        const n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            o = i[0] = i[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = r || "Error")
    }

    function Ft(t, e) {
        const r = Es(t);
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

    function Ki(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            Gn(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function Ss(t) {
        return Array.isArray(t) ? t : [t]
    }

    function V_() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function J_() {
        return "npm"
    }

    function X_() {
        return !V_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function Q_(t, e) {
        return t.require(e)
    }

    function De(t, e = 100, r = 1 / 0) {
        try {
            return ln("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function ws(t, e = 3, r = 100 * 1024) {
        const n = De(t, e);
        return rg(n) > r ? ws(t, e - 1, r) : n
    }

    function ln(t, e, r = 1 / 0, n = 1 / 0, i = K_()) {
        const [o, s] = i;
        if (e == null || ["number", "boolean", "string"].includes(typeof e) && !m_(e)) return e;
        const a = Z_(t, e);
        if (!a.startsWith("[object ")) return a;
        if (e.__sentry_skip_normalization__) return e;
        const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : r;
        if (u === 0) return a.replace("object ", "");
        if (o(e)) return "[Circular ~]";
        const f = e;
        if (f && typeof f.toJSON == "function") try {
            const b = f.toJSON();
            return ln("", b, u - 1, n, i)
        } catch {}
        const h = Array.isArray(e) ? [] : {};
        let m = 0;
        const y = ys(e);
        for (const b in y) {
            if (!Object.prototype.hasOwnProperty.call(y, b)) continue;
            if (m >= n) {
                h[b] = "[MaxProperties ~]";
                break
            }
            const O = y[b];
            h[b] = ln(b, O, u - 1, n, i), m++
        }
        return s(e), h
    }

    function Z_(t, e) {
        try {
            if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
            if (t === "domainEmitter") return "[DomainEmitter]";
            if (typeof global < "u" && e === global) return "[Global]";
            if (typeof window < "u" && e === window) return "[Window]";
            if (typeof document < "u" && e === document) return "[Document]";
            if (y_(e)) return "[SyntheticEvent]";
            if (typeof e == "number" && e !== e) return "[NaN]";
            if (typeof e == "function") return `[Function: ${Be(e)}]`;
            if (typeof e == "symbol") return `[${String(e)}]`;
            if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
            const r = eg(e);
            return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function eg(t) {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : "null prototype"
    }

    function tg(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function rg(t) {
        return tg(JSON.stringify(t))
    }
    var xe;
    (function(t) {
        t[t.PENDING = 0] = "PENDING";
        const r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        const n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(xe || (xe = {}));

    function Xe(t) {
        return new ae(e => {
            e(t)
        })
    }

    function br(t) {
        return new ae((e, r) => {
            r(t)
        })
    }
    class ae {
        __init() {
            this._state = xe.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(e) {
            ae.prototype.__init.call(this), ae.prototype.__init2.call(this), ae.prototype.__init3.call(this), ae.prototype.__init4.call(this), ae.prototype.__init5.call(this), ae.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(e, r) {
            return new ae((n, i) => {
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
            return new ae((r, n) => {
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
                this._setResult(xe.RESOLVED, e)
            }
        }
        __init4() {
            this._reject = e => {
                this._setResult(xe.REJECTED, e)
            }
        }
        __init5() {
            this._setResult = (e, r) => {
                if (this._state === xe.PENDING) {
                    if (Fn(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === xe.PENDING) return;
                const e = this._handlers.slice();
                this._handlers = [], e.forEach(r => {
                    r[0] || (this._state === xe.RESOLVED && r[1](this._value), this._state === xe.REJECTED && r[2](this._value), r[0] = !0)
                })
            }
        }
    }

    function ng(t) {
        const e = [];

        function r() {
            return t === void 0 || e.length < t
        }

        function n(s) {
            return e.splice(e.indexOf(s), 1)[0]
        }

        function i(s) {
            if (!r()) return br(new ie("Not adding Promise because buffer limit was reached."));
            const a = s();
            return e.indexOf(a) === -1 && e.push(a), a.then(() => n(a)).then(null, () => n(a).then(null, () => {})), a
        }

        function o(s) {
            return new ae((a, u) => {
                let f = e.length;
                if (!f) return a(!0);
                const h = setTimeout(() => {
                    s && s > 0 && a(!1)
                }, s);
                e.forEach(m => {
                    Xe(m).then(() => {
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

    function Zr(t) {
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
    const ig = ["fatal", "error", "warning", "log", "info", "debug"];

    function og(t) {
        return t === "warn" ? "warning" : ig.includes(t) ? t : "log"
    }
    const Os = Kt(),
        pn = {
            nowSeconds: () => Date.now() / 1e3
        };

    function sg() {
        const {
            performance: t
        } = Os;
        if (!t || !t.now) return;
        const e = Date.now() - t.now();
        return {
            now: () => t.now(),
            timeOrigin: e
        }
    }

    function ag() {
        try {
            return Q_(zs, "perf_hooks").performance
        } catch {
            return
        }
    }
    const en = X_() ? ag() : sg(),
        Vi = en === void 0 ? pn : {
            nowSeconds: () => (en.timeOrigin + en.now()) / 1e3
        },
        $r = pn.nowSeconds.bind(pn),
        ks = Vi.nowSeconds.bind(Vi);
    (() => {
        const {
            performance: t
        } = Os;
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

    function Vt(t, e = []) {
        return [t, e]
    }

    function cg(t, e) {
        const [r, n] = t;
        return [r, [...n, e]]
    }

    function Ji(t, e) {
        const r = t[1];
        for (const n of r) {
            const i = n[0].type;
            if (e(n, i)) return !0
        }
        return !1
    }

    function dn(t, e) {
        return (e || new TextEncoder).encode(t)
    }

    function ug(t, e) {
        const [r, n] = t;
        let i = JSON.stringify(r);

        function o(s) {
            typeof i == "string" ? i = typeof s == "string" ? i + s : [dn(i, e), s] : i.push(typeof s == "string" ? dn(s, e) : s)
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
                    f = JSON.stringify(De(u))
                }
                o(f)
            }
        }
        return typeof i == "string" ? i : fg(i)
    }

    function fg(t) {
        const e = t.reduce((i, o) => i + o.length, 0),
            r = new Uint8Array(e);
        let n = 0;
        for (const i of t) r.set(i, n), n += i.length;
        return r
    }

    function lg(t, e) {
        const r = typeof t.data == "string" ? dn(t.data, e) : t.data;
        return [Hn({
            type: "attachment",
            length: r.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), r]
    }
    const pg = {
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

    function Xi(t) {
        return pg[t]
    }

    function Ts(t) {
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

    function dg(t, e, r, n) {
        const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!r && {
                dsn: Nr(n)
            },
            ...i && {
                trace: Hn({
                    ...i
                })
            }
        }
    }

    function hg(t, e, r) {
        const n = [{
            type: "client_report"
        }, {
            timestamp: r || $r(),
            discarded_events: t
        }];
        return Vt(e ? {
            dsn: e
        } : {}, [n])
    }
    const _g = 60 * 1e3;

    function gg(t, e = Date.now()) {
        const r = parseInt(`${t}`, 10);
        if (!isNaN(r)) return r * 1e3;
        const n = Date.parse(`${t}`);
        return isNaN(n) ? _g : n - e
    }

    function yg(t, e) {
        return t[e] || t.all || 0
    }

    function mg(t, e, r = Date.now()) {
        return yg(t, e) > r
    }

    function vg(t, {
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
                const [u, f] = a.split(":", 2), h = parseInt(u, 10), m = (isNaN(h) ? 60 : h) * 1e3;
                if (!f) i.all = n + m;
                else
                    for (const y of f.split(";")) i[y] = n + m
            } else s ? i.all = n + gg(s, n) : e === 429 && (i.all = n + 60 * 1e3);
        return i
    }
    const xs = "production";

    function bg(t) {
        const e = ks(),
            r = {
                sid: ut(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => Sg(r)
            };
        return t && mt(r, t), r
    }

    function mt(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || ks(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ut()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            const r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function Eg(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), mt(t, r)
    }

    function Sg(t) {
        return Hn({
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
    const wg = 100;
    class ze {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            const r = new ze;
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
            return this._user = e || {}, this._session && mt(this._session, {
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
                return r instanceof ze ? r : this
            }
            return e instanceof ze ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : yt(e) && (e = e, this._tags = {
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
            const n = typeof r == "number" ? r : wg;
            if (n <= 0) return this;
            const i = {
                timestamp: $r(),
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
            }, this._notifyEventProcessors([...Rs(), ...this._eventProcessors], e, r)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        _notifyEventProcessors(e, r, n, i = 0) {
            return new ae((o, s) => {
                const a = e[i];
                if (r === null || typeof a != "function") o(r);
                else {
                    const u = a({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && u === null && $.log(`Event processor "${a.id}" dropped event`), Fn(u) ? u.then(f => this._notifyEventProcessors(e, f, n, i + 1).then(o)).then(null, s) : this._notifyEventProcessors(e, u, n, i + 1).then(o).then(null, s)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? Ss(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function Rs() {
        return qn("globalEventProcessors", () => [])
    }

    function Wn(t) {
        Rs().push(t)
    }
    const As = 4,
        Og = 100;
    class Is {
        constructor(e, r = new ze, n = As) {
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
            const e = ze.clone(this.getScope());
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
            const n = this._lastEventId = r && r.event_id ? r.event_id : ut(),
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
            const i = this._lastEventId = n && n.event_id ? n.event_id : ut(),
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
            const n = r && r.event_id ? r.event_id : ut();
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
                maxBreadcrumbs: s = Og
            } = i.getOptions && i.getOptions() || {};
            if (s <= 0) return;
            const u = {
                    timestamp: $r(),
                    ...e
                },
                f = o ? _s(() => o(u, r)) : u;
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
            const r = Qi(this);
            try {
                e(this)
            } finally {
                Qi(r)
            }
        }
        getIntegration(e) {
            const r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(e)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
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
            n && Eg(n), this._sendSessionUpdate(), r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: o = xs
            } = n && n.getOptions() || {}, {
                userAgent: s
            } = me.navigator || {}, a = bg({
                release: i,
                environment: o,
                user: r.getUser(),
                ...s && {
                    userAgent: s
                },
                ...e
            }), u = r.getSession && r.getSession();
            return u && u.status === "ok" && mt(u, {
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
            const i = Cr().__SENTRY__;
            if (i && i.extensions && typeof i.extensions[e] == "function") return i.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Cr() {
        return me.__SENTRY__ = me.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, me
    }

    function Qi(t) {
        const e = Cr(),
            r = hn(e);
        return Ps(e, t), r
    }

    function Q() {
        const t = Cr();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            const e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return kg(t)
    }

    function kg(t = Cr()) {
        return (!Tg(t) || hn(t).isOlderThan(As)) && Ps(t, new Is), hn(t)
    }

    function Tg(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function hn(t) {
        return qn("hub", () => new Is, t)
    }

    function Ps(t, e) {
        if (!t) return !1;
        const r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function xg(t, e) {
        return Q().captureException(t, {
            captureContext: e
        })
    }

    function Rg(t, e) {
        const r = typeof e == "string" ? e : void 0,
            n = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return Q().captureMessage(t, r, n)
    }

    function Ns(t) {
        Q().setTags(t)
    }

    function Ag(t) {
        Q().withScope(t)
    }
    const Ig = "7";

    function Pg(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function Ng(t) {
        return `${Pg(t)}${t.projectId}/envelope/`
    }

    function Dg(t, e) {
        return I_({
            sentry_key: t.publicKey,
            sentry_version: Ig,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function $g(t, e = {}) {
        const r = typeof e == "string" ? e : e.tunnel,
            n = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return r || `${Ng(t)}?${Dg(t,n)}`
    }

    function Cg(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function Lg(t, e, r, n) {
        const i = Ts(r),
            o = {
                sent_at: new Date().toISOString(),
                ...i && {
                    sdk: i
                },
                ...!!n && {
                    dsn: Nr(e)
                }
            },
            s = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t];
        return Vt(o, [s])
    }

    function jg(t, e, r, n) {
        const i = Ts(r),
            o = t.type && t.type !== "replay_event" ? t.type : "event";
        Cg(t, r && r.sdk);
        const s = dg(t, i, n, e);
        return delete t.sdkProcessingMetadata, Vt(s, [
            [{
                type: o
            }, t]
        ])
    }
    const Zi = [];

    function Ug(t) {
        const e = {};
        return t.forEach(r => {
            const {
                name: n
            } = r, i = e[n];
            i && !i.isDefaultInstance && r.isDefaultInstance || (e[n] = r)
        }), Object.keys(e).map(r => e[r])
    }

    function Mg(t) {
        const e = t.defaultIntegrations || [],
            r = t.integrations;
        e.forEach(s => {
            s.isDefaultInstance = !0
        });
        let n;
        Array.isArray(r) ? n = [...e, ...r] : typeof r == "function" ? n = Ss(r(e)) : n = e;
        const i = Ug(n),
            o = Fg(i, s => s.name === "Debug");
        if (o !== -1) {
            const [s] = i.splice(o, 1);
            i.push(s)
        }
        return i
    }

    function Bg(t) {
        const e = {};
        return t.forEach(r => {
            r && Ds(r, e)
        }), e
    }

    function Ds(t, e) {
        e[t.name] = t, Zi.indexOf(t.name) === -1 && (t.setupOnce(Wn, Q), Zi.push(t.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(`Integration installed: ${t.name}`))
    }

    function Fg(t, e) {
        for (let r = 0; r < t.length; r++)
            if (e(t[r]) === !0) return r;
        return -1
    }

    function qg(t, e, r, n) {
        const {
            normalizeDepth: i = 3,
            normalizeMaxBreadth: o = 1e3
        } = t, s = {
            ...e,
            event_id: e.event_id || r.event_id || ut(),
            timestamp: e.timestamp || $r()
        }, a = r.integrations || t.integrations.map(h => h.name);
        Gg(s, t), Hg(s, a), e.type === void 0 && Yg(s, t.stackParser);
        let u = n;
        r.captureContext && (u = ze.clone(u).update(r.captureContext));
        let f = Xe(s);
        if (u) {
            if (u.getAttachments) {
                const h = [...r.attachments || [], ...u.getAttachments()];
                h.length && (r.attachments = h)
            }
            f = u.applyToEvent(s, r)
        }
        return f.then(h => typeof i == "number" && i > 0 ? Wg(h, i, o) : h)
    }

    function Gg(t, e) {
        const {
            environment: r,
            release: n,
            dist: i,
            maxValueLength: o = 250
        } = e;
        "environment" in t || (t.environment = "environment" in e ? r : xs), t.release === void 0 && n !== void 0 && (t.release = n), t.dist === void 0 && i !== void 0 && (t.dist = i), t.message && (t.message = jt(t.message, o));
        const s = t.exception && t.exception.values && t.exception.values[0];
        s && s.value && (s.value = jt(s.value, o));
        const a = t.request;
        a && a.url && (a.url = jt(a.url, o))
    }
    const eo = new WeakMap;

    function Yg(t, e) {
        const r = me._sentryDebugIds;
        if (!r) return;
        let n;
        const i = eo.get(e);
        i ? n = i : (n = new Map, eo.set(e, n));
        const o = Object.keys(r).reduce((u, f) => {
                let h;
                const m = n.get(f);
                m ? h = m : (h = e(f), n.set(f, h));
                for (let y = h.length - 1; y >= 0; y--) {
                    const b = h[y];
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

    function Hg(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
    }

    function Wg(t, e, r) {
        if (!t) return null;
        const n = {
            ...t,
            ...t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map(i => ({
                    ...i,
                    ...i.data && {
                        data: De(i.data, e, r)
                    }
                }))
            },
            ...t.user && {
                user: De(t.user, e, r)
            },
            ...t.contexts && {
                contexts: De(t.contexts, e, r)
            },
            ...t.extra && {
                extra: De(t.extra, e, r)
            }
        };
        return t.contexts && t.contexts.trace && n.contexts && (n.contexts.trace = t.contexts.trace, t.contexts.trace.data && (n.contexts.trace.data = De(t.contexts.trace.data, e, r))), t.spans && (n.spans = t.spans.map(i => (i.data && (i.data = De(i.data, e, r)), i))), n
    }
    const to = "Not capturing exception because it's already been captured.";
    class He {
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
            if (He.prototype.__init.call(this), He.prototype.__init2.call(this), He.prototype.__init3.call(this), He.prototype.__init4.call(this), He.prototype.__init5.call(this), this._options = e, e.dsn) {
                this._dsn = x_(e.dsn);
                const r = $g(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, r, n) {
            if (Ki(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(to);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(o => this._captureEvent(o, r, n)).then(o => {
                i = o
            })), i
        }
        captureMessage(e, r, n, i) {
            let o = n && n.event_id;
            const s = ds(e) ? this.eventFromMessage(String(e), r, n) : this.eventFromException(e, n);
            return this._process(s.then(a => this._captureEvent(a, n, i)).then(a => {
                o = a
            })), o
        }
        captureEvent(e, r, n) {
            if (r && r.originalException && Ki(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(to);
                return
            }
            let i = r && r.event_id;
            return this._process(this._captureEvent(e, r, n).then(o => {
                i = o
            })), i
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), mt(e, {
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
            return r ? this._isClientDoneProcessing(e).then(n => r.flush(e).then(i => n && i)) : Xe(!0)
        }
        close(e) {
            return this.flush(e).then(r => (this.getOptions().enabled = !1, r))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = Bg(this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
            }
        }
        addIntegration(e) {
            Ds(e, this._integrations)
        }
        sendEvent(e, r = {}) {
            if (this._dsn) {
                let n = jg(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const o of r.attachments || []) n = cg(n, lg(o, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const i = this._sendEnvelope(n);
                i && i.then(o => this.emit("afterSendEvent", e, o), null)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                const r = Lg(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(r)
            }
        }
        recordDroppedEvent(e, r, n) {
            if (this._options.sendClientReports) {
                const i = `${e}:${r}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1
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
            (s && e.errors === 0 || s && n) && (mt(e, {
                ...n && {
                    status: "crashed"
                },
                errors: e.errors || Number(i || n)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new ae(r => {
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
            return !r.integrations && o.length > 0 && (r.integrations = o), qg(i, e, r, n)
        }
        _captureEvent(e, r = {}, n) {
            return this._processEvent(e, r, n).then(i => i.event_id, i => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    const o = i;
                    o.logLevel === "log" ? $.log(o.message) : $.warn(o)
                }
            })
        }
        _processEvent(e, r, n) {
            const i = this.getOptions(),
                {
                    sampleRate: o
                } = i;
            if (!this._isEnabled()) return br(new ie("SDK not enabled, will not capture event.", "log"));
            const s = Cs(e),
                a = $s(e),
                u = e.type || "error",
                f = `before send for type \`${u}\``;
            if (a && typeof o == "number" && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), br(new ie(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
            const h = u === "replay_event" ? "replay" : u;
            return this._prepareEvent(e, r, n).then(m => {
                if (m === null) throw this.recordDroppedEvent("event_processor", h, e), new ie("An event processor returned `null`, will not send event.", "log");
                if (r.data && r.data.__sentry__ === !0) return m;
                const b = Kg(i, m, r);
                return zg(b, f)
            }).then(m => {
                if (m === null) throw this.recordDroppedEvent("before_send", h, e), new ie(`${f} returned \`null\`, will not send event.`, "log");
                const y = n && n.getSession();
                !s && y && this._updateSessionFromEvent(y, m);
                const b = m.transaction_info;
                if (s && b && m.transaction !== e.transaction) {
                    const O = "custom";
                    m.transaction_info = {
                        ...b,
                        source: O
                    }
                }
                return this.sendEvent(m, r), m
            }).then(null, m => {
                throw m instanceof ie ? m : (this.captureException(m, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: m
                }), new ie(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`))
            })
        }
        _process(e) {
            this._numProcessing++, e.then(r => (this._numProcessing--, r), r => (this._numProcessing--, r))
        }
        _sendEnvelope(e) {
            if (this._transport && this._dsn) return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, r => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error("Error while sending event:", r)
            });
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error("Transport disabled")
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

    function zg(t, e) {
        const r = `${e} must return \`null\` or a valid event.`;
        if (Fn(t)) return t.then(n => {
            if (!yt(n) && n !== null) throw new ie(r);
            return n
        }, n => {
            throw new ie(`${e} rejected with ${n}`)
        });
        if (!yt(t) && t !== null) throw new ie(r);
        return t
    }

    function Kg(t, e, r) {
        const {
            beforeSend: n,
            beforeSendTransaction: i
        } = t;
        return $s(e) && n ? n(e, r) : Cs(e) && i ? i(e, r) : e
    }

    function $s(t) {
        return t.type === void 0
    }

    function Cs(t) {
        return t.type === "transaction"
    }

    function Vg(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? $.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const r = Q();
        r.getScope().update(e.initialScope);
        const i = new t(e);
        r.bindClient(i)
    }
    const Jg = 30;

    function Ls(t, e, r = ng(t.bufferSize || Jg)) {
        let n = {};
        const i = s => r.drain(s);

        function o(s) {
            const a = [];
            if (Ji(s, (m, y) => {
                    const b = Xi(y);
                    if (mg(n, b)) {
                        const O = ro(m, y);
                        t.recordDroppedEvent("ratelimit_backoff", b, O)
                    } else a.push(m)
                }), a.length === 0) return Xe();
            const u = Vt(s[0], a),
                f = m => {
                    Ji(u, (y, b) => {
                        const O = ro(y, b);
                        t.recordDroppedEvent(m, Xi(b), O)
                    })
                },
                h = () => e({
                    body: ug(u, t.textEncoder)
                }).then(m => (m.statusCode !== void 0 && (m.statusCode < 200 || m.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Sentry responded with status code ${m.statusCode} to sent event.`), n = vg(n, m), m), m => {
                    throw f("network_error"), m
                });
            return r.add(h).then(m => m, m => {
                if (m instanceof ie) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error("Skipped sending event because buffer is full."), f("queue_overflow"), Xe();
                throw m
            })
        }
        return o.__sentry__baseTransport__ = !0, {
            send: o,
            flush: i
        }
    }

    function ro(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
    }
    const no = "7.52.1";
    let io;
    class qt {
        constructor() {
            qt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = qt.id
        }
        setupOnce() {
            io = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const r = Yn(this) || this;
                    return io.apply(r, e)
                }
            } catch {}
        }
    }
    qt.__initStatic();
    const Xg = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class ft {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = ft.id
        }
        constructor(e = {}) {
            this._options = e, ft.prototype.__init.call(this)
        }
        setupOnce(e, r) {
            const n = i => {
                const o = r();
                if (o) {
                    const s = o.getIntegration(ft);
                    if (s) {
                        const a = o.getClient(),
                            u = a ? a.getOptions() : {},
                            f = Qg(s._options, u);
                        return Zg(i, f) ? null : i
                    }
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    ft.__initStatic();

    function Qg(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...Xg],
            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function Zg(t, e) {
        return e.ignoreInternal && oy(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ce(t)}`), !0) : ey(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ce(t)}`), !0) : ty(t, e.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ce(t)}`), !0) : ry(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ce(t)}.
Url: ${Er(t)}`), !0) : ny(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ce(t)}.
Url: ${Er(t)}`), !0)
    }

    function ey(t, e) {
        return t.type || !e || !e.length ? !1 : iy(t).some(r => Dr(r, e))
    }

    function ty(t, e) {
        if (t.type !== "transaction" || !e || !e.length) return !1;
        const r = t.transaction;
        return r ? Dr(r, e) : !1
    }

    function ry(t, e) {
        if (!e || !e.length) return !1;
        const r = Er(t);
        return r ? Dr(r, e) : !1
    }

    function ny(t, e) {
        if (!e || !e.length) return !0;
        const r = Er(t);
        return r ? Dr(r, e) : !0
    }

    function iy(t) {
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
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error(`Cannot extract message for event ${Ce(t)}`), []
            }
        }
        return []
    }

    function oy(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function sy(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
            const r = t[e];
            if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") return r.filename || null
        }
        return null
    }

    function Er(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? sy(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error(`Cannot extract url for event ${Ce(t)}`), null
        }
    }
    const Y = me;
    let _n = 0;

    function js() {
        return _n > 0
    }

    function ay() {
        _n++, setTimeout(() => {
            _n--
        })
    }

    function vt(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            const i = t.__sentry_wrapped__;
            if (i) return i;
            if (Yn(t)) return t
        } catch {
            return t
        }
        const n = function() {
            const i = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                const o = i.map(s => vt(s, e));
                return t.apply(this, o)
            } catch (o) {
                throw ay(), Ag(s => {
                    s.addEventProcessor(a => (e.mechanism && (fn(a, void 0, void 0), Ft(a, e.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: i
                    }, a)), xg(o)
                }), o
            }
        };
        try {
            for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        } catch {}
        gs(n, t), Gn(t, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return n
    }

    function Us(t, e) {
        const r = zn(t, e),
            n = {
                type: e && e.name,
                value: ly(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function cy(t, e, r, n) {
        const o = Q().getClient(),
            s = o && o.getOptions().normalizeDepth,
            a = {
                exception: {
                    values: [{
                        type: Bn(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${P_(e)}`
                    }]
                },
                extra: {
                    __serialized__: ws(e, s)
                }
            };
        if (r) {
            const u = zn(t, r);
            u.length && (a.exception.values[0].stacktrace = {
                frames: u
            })
        }
        return a
    }

    function tn(t, e) {
        return {
            exception: {
                values: [Us(t, e)]
            }
        }
    }

    function zn(t, e) {
        const r = e.stacktrace || e.stack || "",
            n = fy(e);
        try {
            return t(r, n)
        } catch {}
        return []
    }
    const uy = /Minified React error #\d+;/i;

    function fy(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (uy.test(t.message)) return 1
        }
        return 0
    }

    function ly(t) {
        const e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function py(t, e, r, n) {
        const i = r && r.syntheticException || void 0,
            o = Kn(t, e, i, n);
        return Ft(o), o.level = "error", r && r.event_id && (o.event_id = r.event_id), Xe(o)
    }

    function dy(t, e, r = "info", n, i) {
        const o = n && n.syntheticException || void 0,
            s = gn(t, e, o, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), Xe(s)
    }

    function Kn(t, e, r, n, i) {
        let o;
        if (ps(e) && e.error) return tn(t, e.error);
        if (Mi(e) || h_(e)) {
            const s = e;
            if ("stack" in e) o = tn(t, e);
            else {
                const a = s.name || (Mi(s) ? "DOMError" : "DOMException"),
                    u = s.message ? `${a}: ${s.message}` : a;
                o = gn(t, u, r, n), fn(o, u)
            }
            return "code" in s && (o.tags = {
                ...o.tags,
                "DOMException.code": `${s.code}`
            }), o
        }
        return ls(e) ? tn(t, e) : yt(e) || Bn(e) ? (o = cy(t, e, r, i), Ft(o, {
            synthetic: !0
        }), o) : (o = gn(t, e, r, n), fn(o, `${e}`, void 0), Ft(o, {
            synthetic: !0
        }), o)
    }

    function gn(t, e, r, n) {
        const i = {
            message: e
        };
        if (n && r) {
            const o = zn(t, r);
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
    const or = 1024,
        Ms = "Breadcrumbs";
    class Gt {
        static __initStatic() {
            this.id = Ms
        }
        __init() {
            this.name = Gt.id
        }
        constructor(e) {
            Gt.prototype.__init.call(this), this.options = {
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
            this.options.console && $e("console", _y), this.options.dom && $e("dom", hy(this.options.dom)), this.options.xhr && $e("xhr", gy), this.options.fetch && $e("fetch", yy), this.options.history && $e("history", my)
        }
        addSentryBreadcrumb(e) {
            this.options.sentry && Q().addBreadcrumb({
                category: `sentry.${e.type==="transaction"?"transaction":"event"}`,
                event_id: e.event_id,
                level: e.level,
                message: Ce(e)
            }, {
                event: e
            })
        }
    }
    Gt.__initStatic();

    function hy(t) {
        function e(r) {
            let n, i = typeof t == "object" ? t.serializeAttribute : void 0,
                o = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
            o && o > or && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`\`dom.maxStringLength\` cannot exceed ${or}, but a value of ${o} was configured. Sentry will use ${or} instead.`), o = or), typeof i == "string" && (i = [i]);
            try {
                const s = r.event;
                n = vy(s) ? on(s.target, {
                    keyAttrs: i,
                    maxStringLength: o
                }) : on(s, {
                    keyAttrs: i,
                    maxStringLength: o
                })
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

    function _y(t) {
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
            level: og(t.level),
            message: Fi(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${Fi(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        Q().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function gy(t) {
        const {
            startTimestamp: e,
            endTimestamp: r
        } = t, n = t.xhr[$t];
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
        Q().addBreadcrumb({
            category: "xhr",
            data: u,
            type: "http"
        }, f)
    }

    function yy(t) {
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
                Q().addBreadcrumb({
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
                Q().addBreadcrumb({
                    category: "fetch",
                    data: n,
                    type: "http"
                }, i)
            }
    }

    function my(t) {
        let e = t.from,
            r = t.to;
        const n = Zr(Y.location.href);
        let i = Zr(e);
        const o = Zr(r);
        i.path || (i = n), n.protocol === o.protocol && n.host === o.host && (r = o.relative), n.protocol === i.protocol && n.host === i.host && (e = i.relative), Q().addBreadcrumb({
            category: "navigation",
            data: {
                from: e,
                to: r
            }
        })
    }

    function vy(t) {
        return t && !!t.target
    }

    function by(t, {
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
                    dsn: Nr(n)
                }
            },
            o = Ey(t);
        return Vt(i, [o])
    }

    function Ey(t) {
        return [{
            type: "user_report"
        }, t]
    }
    class Sy extends He {
        constructor(e) {
            const r = Y.SENTRY_SDK_SOURCE || J_();
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${r}:@sentry/browser`,
                    version: no
                }],
                version: no
            }, super(e), e.sendClientReports && Y.document && Y.document.addEventListener("visibilitychange", () => {
                Y.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return py(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", n) {
            return dy(this._options.stackParser, e, r, n, this._options.attachStacktrace)
        }
        sendEvent(e, r) {
            const n = this.getIntegrationById(Ms);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, r)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("SDK not enabled, will not capture user feedback.");
                return
            }
            const r = by(e, {
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
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log("Sending outcomes:", e);
            const r = hg(e, this._options.tunnel && Nr(this._dsn));
            this._sendEnvelope(r)
        }
    }
    let Ct;

    function wy() {
        if (Ct) return Ct;
        if (cn(Y.fetch)) return Ct = Y.fetch.bind(Y);
        const t = Y.document;
        let e = Y.fetch;
        if (t && typeof t.createElement == "function") try {
            const r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r);
            const n = r.contentWindow;
            n && n.fetch && (e = n.fetch), t.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return Ct = e.bind(Y)
    }

    function Oy() {
        Ct = void 0
    }

    function ky(t, e = wy()) {
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
                return Oy(), r -= s, n--, br(u)
            }
        }
        return Ls(t, i)
    }
    const Ty = 4;

    function xy(t) {
        function e(r) {
            return new ae((n, i) => {
                const o = new XMLHttpRequest;
                o.onerror = i, o.onreadystatechange = () => {
                    o.readyState === Ty && n({
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
        return Ls(t, e)
    }
    const Lr = "?",
        Ry = 30,
        Ay = 40,
        Iy = 50;

    function Vn(t, e, r, n) {
        const i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i
    }
    const Py = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Ny = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Dy = t => {
            const e = Py.exec(t);
            if (e) {
                if (e[2] && e[2].indexOf("eval") === 0) {
                    const o = Ny.exec(e[2]);
                    o && (e[2] = o[1], e[3] = o[2], e[4] = o[3])
                }
                const [n, i] = Bs(e[1] || Lr, e[2]);
                return Vn(i, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        $y = [Ry, Dy],
        Cy = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Ly = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        jy = t => {
            const e = Cy.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const o = Ly.exec(e[3]);
                    o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "")
                }
                let n = e[3],
                    i = e[1] || Lr;
                return [i, n] = Bs(i, n), Vn(n, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        Uy = [Iy, jy],
        My = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        By = t => {
            const e = My.exec(t);
            return e ? Vn(e[2], e[1] || Lr, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        Fy = [Ay, By],
        qy = [$y, Uy, Fy],
        Gy = vs(...qy),
        Bs = (t, e) => {
            const r = t.indexOf("safari-extension") !== -1,
                n = t.indexOf("safari-web-extension") !== -1;
            return r || n ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Lr, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
    class Ue {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = Ue.id
        }
        __init2() {
            this._installFunc = {
                onerror: Yy,
                onunhandledrejection: Hy
            }
        }
        constructor(e) {
            Ue.prototype.__init.call(this), Ue.prototype.__init2.call(this), this._options = {
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
                n && e[r] && (Ky(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    Ue.__initStatic();

    function Yy() {
        $e("error", t => {
            const [e, r, n] = Gs();
            if (!e.getIntegration(Ue)) return;
            const {
                msg: i,
                url: o,
                line: s,
                column: a,
                error: u
            } = t;
            if (js() || u && u.__sentry_own_request__) return;
            const f = u === void 0 && Je(i) ? zy(i, o, s, a) : Fs(Kn(r, u || i, void 0, n, !1), o, s, a);
            f.level = "error", qs(e, u, f, "onerror")
        })
    }

    function Hy() {
        $e("unhandledrejection", t => {
            const [e, r, n] = Gs();
            if (!e.getIntegration(Ue)) return;
            let i = t;
            try {
                "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
            } catch {}
            if (js() || i && i.__sentry_own_request__) return !0;
            const o = ds(i) ? Wy(i) : Kn(r, i, void 0, n, !0);
            o.level = "error", qs(e, i, o, "onunhandledrejection")
        })
    }

    function Wy(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function zy(t, e, r, n) {
        const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = ps(t) ? t.message : t,
            s = "Error";
        const a = o.match(i);
        return a && (s = a[1], o = a[2]), Fs({
            exception: {
                values: [{
                    type: s,
                    value: o
                }]
            }
        }, e, r, n)
    }

    function Fs(t, e, r, n) {
        const i = t.exception = t.exception || {},
            o = i.values = i.values || [],
            s = o[0] = o[0] || {},
            a = s.stacktrace = s.stacktrace || {},
            u = a.frames = a.frames || [],
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            h = isNaN(parseInt(r, 10)) ? void 0 : r,
            m = Je(e) && e.length > 0 ? e : S_();
        return u.length === 0 && u.push({
            colno: f,
            filename: m,
            function: "?",
            in_app: !0,
            lineno: h
        }), t
    }

    function Ky(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(`Global Handler attached: ${t}`)
    }

    function qs(t, e, r, n) {
        Ft(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function Gs() {
        const t = Q(),
            e = t.getClient(),
            r = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, r.stackParser, r.attachStacktrace]
    }
    const Vy = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Yt {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = Yt.id
        }
        constructor(e) {
            Yt.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            this._options.setTimeout && te(Y, "setTimeout", oo), this._options.setInterval && te(Y, "setInterval", oo), this._options.requestAnimationFrame && te(Y, "requestAnimationFrame", Jy), this._options.XMLHttpRequest && "XMLHttpRequest" in Y && te(XMLHttpRequest.prototype, "send", Xy);
            const e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : Vy).forEach(Qy)
        }
    }
    Yt.__initStatic();

    function oo(t) {
        return function(...e) {
            const r = e[0];
            return e[0] = vt(r, {
                mechanism: {
                    data: {
                        function: Be(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function Jy(t) {
        return function(e) {
            return t.apply(this, [vt(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Be(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function Xy(t) {
        return function(...e) {
            const r = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i => {
                i in r && typeof r[i] == "function" && te(r, i, function(o) {
                    const s = {
                            mechanism: {
                                data: {
                                    function: i,
                                    handler: Be(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        a = Yn(o);
                    return a && (s.mechanism.data.handler = Be(a)), vt(o, s)
                })
            }), t.apply(this, e)
        }
    }

    function Qy(t) {
        const e = Y,
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (te(r, "addEventListener", function(n) {
            return function(i, o, s) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = vt(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Be(o),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [i, vt(o, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Be(o),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), s])
            }
        }), te(r, "removeEventListener", function(n) {
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
    const Zy = "cause",
        em = 5;
    class lt {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = lt.id
        }
        constructor(e = {}) {
            lt.prototype.__init.call(this), this._key = e.key || Zy, this._limit = e.limit || em
        }
        setupOnce() {
            const e = Q().getClient();
            e && Wn((r, n) => {
                const i = Q().getIntegration(lt);
                return i ? tm(e.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    lt.__initStatic();

    function tm(t, e, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !At(i.originalException, Error)) return n;
        const o = Ys(t, r, i.originalException, e);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function Ys(t, e, r, n, i = []) {
        if (!At(r[n], Error) || i.length + 1 >= e) return i;
        const o = Us(t, r[n]);
        return Ys(t, e, r[n], n, [o, ...i])
    }
    class pt {
        constructor() {
            pt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = pt.id
        }
        setupOnce() {
            Wn(e => {
                if (Q().getIntegration(pt)) {
                    if (!Y.navigator && !Y.location && !Y.document) return e;
                    const r = e.request && e.request.url || Y.location && Y.location.href,
                        {
                            referrer: n
                        } = Y.document || {},
                        {
                            userAgent: i
                        } = Y.navigator || {},
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
    pt.__initStatic();
    class dt {
        constructor() {
            dt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = dt.id
        }
        setupOnce(e, r) {
            const n = i => {
                if (i.type) return i;
                const o = r().getIntegration(dt);
                if (o) {
                    try {
                        if (rm(i, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("Event dropped due to being a duplicate of previously captured event."), null
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
    dt.__initStatic();

    function rm(t, e) {
        return e ? !!(nm(t, e) || im(t, e)) : !1
    }

    function nm(t, e) {
        const r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !Ws(t, e) || !Hs(t, e))
    }

    function im(t, e) {
        const r = so(e),
            n = so(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !Ws(t, e) || !Hs(t, e))
    }

    function Hs(t, e) {
        let r = ao(t),
            n = ao(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let i = 0; i < n.length; i++) {
            const o = n[i],
                s = r[i];
            if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function) return !1
        }
        return !0
    }

    function Ws(t, e) {
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

    function so(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function ao(t) {
        const e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const om = [new ft, new qt, new Yt, new Gt, new Ue, new lt, new dt, new pt];

    function sm(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = om), t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__), Y.SENTRY_RELEASE && Y.SENTRY_RELEASE.id && (t.release = Y.SENTRY_RELEASE.id)), t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: N_(t.stackParser || Gy),
            integrations: Mg(t),
            transport: t.transport || (bs() ? ky : xy)
        };
        Vg(Sy, e), t.autoSessionTracking && am()
    }

    function co(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function am() {
        if (typeof Y.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const t = Q();
        t.captureSession && (co(t), $e("history", ({
            from: e,
            to: r
        }) => {
            e === void 0 || e === r || co(Q())
        }))
    }
    const cm = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        um = {
            RETRY: cm
        },
        fm = "CHARGEMENT IMPOSSIBLE. APPUYEZ POUR RÉESSAYER.",
        lm = {
            RETRY: fm
        },
        pm = "IMPOSSIBILE CARICARE. CLICCA PER RIPROVARE.",
        dm = {
            RETRY: pm
        },
        hm = "LADEN FEHLGESCHLAGEN. DRÜCKEN ZUM ERNEUT VERSUCHEN.",
        _m = {
            RETRY: hm
        },
        gm = "CARGA FALLIDA. TOCA PARA VOLVER A INTENTARLO.",
        ym = {
            RETRY: gm
        },
        mm = "NO SE PUEDE CARGAR. TOCA PARA VOLVER A INTENTARLO.",
        vm = {
            RETRY: mm
        },
        bm = "NÃO FOI POSSÍVEL CARREGAR. TOQUE PARA TENTAR DE NOVO.",
        Em = {
            RETRY: bm
        },
        uo = {
            en: um,
            fr: lm,
            it: dm,
            de: _m,
            es: ym,
            "es-XL": vm,
            "pt-BR": Em
        };
    let Sm = class {
        constructor(e) {
            se(this, "manifest");
            se(this, "registered", {});
            se(this, "register", e => {
                this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
            });
            se(this, "load", async e => {
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
                if (l_("[loader] load success", {
                        app: e.app,
                        appVersion: o.version ?? i.version,
                        loaderVersion: window.tv.manifest.loader.version,
                        branch: n
                    }), !e.autoMount) return;
                const s = e;
                s.version = o.version ?? i.version, this.mount(s)
            });
            se(this, "connect", (e, r) => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(e, r)
            });
            se(this, "mount", e => {
                var s, a;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const u = this.registered.info(e);
                    Ns({
                        branch: u.branch,
                        "app.tag": u.tag,
                        "app.type": u.type,
                        "app.version": u.version,
                        "app.wrapper": u.wrapper
                    }), Nn.pageView(u.tag)
                }
                gr.setup(e.app, ((s = e.room) == null ? void 0 : s.code) ?? ((a = e.client) == null ? void 0 : a.code));
                const n = document.querySelectorAll("[data-tv-style]"),
                    o = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(u => {
                        const f = document.createElement("link");
                        return f.rel = "stylesheet", f.href = u.href, f.setAttribute("data-tv-style", ""), f
                    });
                document.head.append(...o), n.forEach(u => u.remove()), this.registered.unmount = this.registered.mount(e) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            se(this, "debugLoad", async (e, r) => {
                throw new Error("[Loader] Debug controllers are not available in production builds")
            });
            this.manifest = e
        }
        getBranchName(e) {
            var o, s, a, u, f;
            const r = (s = (o = e.match) == null ? void 0 : o.params) == null ? void 0 : s.branch,
                n = gr.get("preference:branch"),
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
                i = uo[n] ?? uo.en;
            e.classList.add("error"), r.textContent = i.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    };
    const fo = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        wm = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        Om = t => {
            sm({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: wm,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === fo.EcastEntityNotFound) return Rg("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === fo.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(e, r);
                        n && (e.contexts = e.contexts || {}, e.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return e
                }
            }), Ns({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    let lo;
    async function po() {
        if (!lo) try {
            lo = await navigator.wakeLock.request("screen")
        } catch (t) {
            console.warn(t)
        }
    }
    const km = async () => {
        navigator.wakeLock && (await po(), document.addEventListener("visibilitychange", () => {
            document.visibilityState === "visible" && po()
        }))
    };

    function Tm(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                e += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
    }

    function xm() {
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

    function ho(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = xm(), document.getElementsByTagName("html")[0].append(e);
        const n = document.getElementById("app");
        n.innerHTML = Tm(t)
    }

    function Rm() {
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

    function Am() {
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

    function Im() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = Am(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = Rm()
    }
    const Pm = {
            routes: [{
                path: "/",
                load: "@connect"
            }, {
                path: ["/past-games", "/past-games/:galleryId"],
                load: "@connect"
            }, {
                path: "/gallery",
                redirect: "/past-games"
            }, {
                path: "/gallery/:galleryId",
                handler: t => ({
                    redirect: `/past-games/${t.data.galleryId}`
                })
            }, {
                path: ["/gallery/:galleryId/:artifactId", "/gallery/:galleryId/:artifactId/:itemId"],
                handler: t => {
                    const e = pi(t.data.galleryId);
                    return !e || !e.categoryId ? {
                        redirect: "/"
                    } : (t.data.categoryId = e.categoryId, {
                        load: e.tag
                    })
                }
            }, {
                path: "/render/:galleryId/:artifactId/:renderer",
                handler: t => {
                    const e = pi(t.data.galleryId);
                    return !e || !e.categoryId ? {
                        redirect: "/"
                    } : {
                        load: e.tag
                    }
                }
            }, {
                path: "/moderator",
                load: "@moderator"
            }, {
                path: ["/moderate", "/moderation", "/moderador", "/moderateur", "/moderatore"],
                redirect: "/moderator"
            }, {
                path: "/manifest",
                handler: () => {
                    Im()
                }
            }, {
                path: "/debug",
                handler: () => {
                    ho()
                }
            }, {
                path: ["/debug/:app", "/debug/local/:app"],
                handler: t => {
                    ho(t.data.app)
                }
            }, {
                path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
                debugLoad: "local"
            }, {
                path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
                debugLoad: "cloud"
            }]
        },
        Nm = {
            hmrApps: ["teeko-web"],
            hostnames: ["teeko.jackboxgames.com"],
            routes: [{
                path: ["/", "/event"],
                load: "@teeko-web"
            }]
        };
    class Dm {
        constructor(e) {
            se(this, "hmrApp", "loader");
            se(this, "sites");
            this.sites = e;
            const r = this.getMatch(window.location.pathname);
            this.executeMatch(r)
        }
        executeMatch(e) {
            var n, i;
            const r = ((i = e == null ? void 0 : (n = e.route).handler) == null ? void 0 : i.call(n, e)) ?? (e == null ? void 0 : e.route);
            if (!e || !r) {
                this.redirect("/", e);
                return
            }
            if (r.debugLoad) {
                window.tv.debugLoad(r.debugLoad, e);
                return
            }
            if (r.load) {
                window.tv.load({
                    app: r.load,
                    match: e,
                    autoMount: e.route.autoMount ?? !0
                });
                return
            }
            if (e.route.redirect) {
                this.redirect(e.route.redirect, e);
                return
            }
            if (!e.route.handler) throw console.error(e), new Error("[Router] Unable to execute match")
        }
        redirect(e, r) {
            const n = this.getMatch(e);
            if (!n) throw new Error("[Router] Redirecting to an unexpected path causes an infinite redirect loop");
            r && (n.hashString || (n.hashString = r.hashString), n.params || (n.params = r.params), n.queryString || (n.queryString = r.queryString)), window.history.replaceState(null, "", e), this.executeMatch(n)
        }
        getSite() {
            const e = document.location.hostname;
            return (e === "localhost" || e === "127.0.0.1" ? this.sites.find(n => {
                var i;
                return (i = n.hmrApps) == null ? void 0 : i.includes(this.hmrApp)
            }) : this.sites.find(n => {
                var i;
                return (i = n.hostnames) == null ? void 0 : i.includes(e)
            })) ?? this.sites[0]
        }
        splitPath(e) {
            return e.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "").split("/")
        }
        matchRouteToPath(e, r) {
            if (e.length !== r.length) return !1;
            for (let n = 0; n < e.length; n++)
                if (e[n][0] !== ":" && e[n] !== r[n]) return !1;
            return !0
        }
        getRoute(e, r) {
            const n = this.splitPath(e);
            for (let i = 0; i < r.length; i++) {
                const o = Array.isArray(r[i].path) ? r[i].path : [r[i].path];
                for (let s = 0; s < o.length; s++) {
                    const a = this.splitPath(o[s]);
                    if (this.matchRouteToPath(a, n)) return {
                        route: r[i],
                        parts: a
                    }
                }
            }
            return null
        }
        parseData(e, r) {
            const n = {},
                i = this.splitPath(e);
            for (let o = 0; o < r.parts.length; o++) r.parts[o][0] === ":" && (n[r.parts[o].substring(1)] = i[o]);
            return n
        }
        parseParams() {
            if (!document.location.search) return {};
            const e = new URLSearchParams(document.location.search);
            return Object.fromEntries(e)
        }
        getMatch(e) {
            const r = this.getSite(),
                n = this.getRoute(e, r.routes);
            if (!n) return null;
            const i = {
                url: document.location.href,
                route: n.route,
                path: n.parts.join("/"),
                parts: n.parts,
                data: this.parseData(e, n),
                params: this.parseParams()
            };
            if (document.location.hash) {
                let o = document.location.hash;
                document.location.hash[0] === "#" && (o = o.substring(1)), i.hashString = o
            }
            return document.location.search && (i.queryString = document.location.search), i
        }
    }
    const $m = "production",
        Cm = 1,
        Lm = {
            branch: "main",
            sha: "e987a28613224b91b365a915916c4efba98bcfd6",
            lastUpdated: 1703012061964,
            version: "5.357.132",
            type: "production"
        },
        jm = {
            main: {
                sha: "e987a28613224b91b365a915916c4efba98bcfd6",
                lastUpdated: 1703012061964,
                version: "5.357.132",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.357.132"
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
                        version: "5.344.128"
                    },
                    "awshirt-tjsp": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/tjsp/awshirt",
                        version: "5.353.130"
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
                        version: "5.256.119"
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
                        version: "5.297.119"
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
                        version: "5.353.130"
                    },
                    awshirt2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/awshirt2",
                        version: "5.353.130"
                    },
                    "nopus-opus": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/nopus-opus",
                        version: "5.349.128"
                    },
                    "risky-text": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/risky-text",
                        version: "5.356.132"
                    },
                    "time-trivia": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/time-trivia",
                        version: "5.348.128"
                    },
                    "us-them": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/us-them",
                        version: "5.348.128"
                    }
                }
            }
        },
        Um = {
            environment: $m,
            version: Cm,
            loader: Lm,
            branches: jm
        },
        Jn = Um;
    let Mm = Sm;
    const Dt = new Mm(Jn);
    window.tv = {
        debugLoad: Dt.debugLoad,
        load: Dt.load,
        register: Dt.register,
        mount: Dt.mount,
        connect: Dt.connect,
        manifest: Jn
    };
    Om(Jn);
    Nn.setup();
    gr.setup();
    km();
    new Dm([Pm, Nm])
});
export default Bm();
//# sourceMappingURL=cbffb38b.js.map