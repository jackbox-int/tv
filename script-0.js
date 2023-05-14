var pa = Object.defineProperty;
var da = (t, e, r) => e in t ? pa(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var ha = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var Se = (t, e, r) => (da(t, typeof e != "symbol" ? e + "" : e, r), r);
var Fv = ha((Hv, na) => {
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
    var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
        Fe = {
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
    var Ar = Array.prototype,
        _a = Function.prototype,
        ko = Object.prototype,
        Be = Ar.slice,
        Qt = ko.toString,
        Rr = ko.hasOwnProperty,
        ne = le.console,
        Le = le.navigator,
        V = le.document,
        Ut = le.opera,
        fr = le.screen,
        Te = Le.userAgent,
        Wr = _a.bind,
        gi = Ar.forEach,
        yi = Ar.indexOf,
        vi = Ar.map,
        ga = Array.isArray,
        un = {},
        c = {
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        z = {
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
        zr = function(t, e) {
            return function() {
                return arguments[0] = "[" + e + "] " + arguments[0], t.apply(z, arguments)
            }
        },
        Tn = function(t) {
            return {
                log: zr(z.log, t),
                error: zr(z.error, t),
                critical: zr(z.critical, t)
            }
        };
    c.bind = function(t, e) {
        var r, n;
        if (Wr && t.bind === Wr) return Wr.apply(t, Be.call(arguments, 1));
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
                    if (n in t && e.call(r, t[n], n, t) === un) return
            } else
                for (var o in t)
                    if (Rr.call(t, o) && e.call(r, t[o], o, t) === un) return
        }
    };
    c.extend = function(t) {
        return c.each(Be.call(arguments, 1), function(e) {
            for (var r in e) e[r] !== void 0 && (t[r] = e[r])
        }), t
    };
    c.isArray = ga || function(t) {
        return Qt.call(t) === "[object Array]"
    };
    c.isFunction = function(t) {
        try {
            return /^\s*\bfunction\b/.test(t)
        } catch {
            return !1
        }
    };
    c.isArguments = function(t) {
        return !!(t && Rr.call(t, "callee"))
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
            if (r || (r = n === e)) return un
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
                if (Rr.call(t, e)) return !1;
            return !0
        }
        return !1
    };
    c.isUndefined = function(t) {
        return t === void 0
    };
    c.isString = function(t) {
        return Qt.call(t) == "[object String]"
    };
    c.isDate = function(t) {
        return Qt.call(t) == "[object Date]"
    };
    c.isNumber = function(t) {
        return Qt.call(t) == "[object Number]"
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
                        _ = "",
                        y = 0,
                        v = s,
                        E = [],
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
                            if (s += a, E = [], Qt.apply(w) === "[object Array]") {
                                for (y = w.length, u = 0; u < y; u += 1) E[u] = n(u, w) || "null";
                                return _ = E.length === 0 ? "[]" : s ? `[
` + s + E.join(`,
` + s) + `
` + v + "]" : "[" + E.join(",") + "]", s = v, _
                            }
                            for (f in w) Rr.call(w, f) && (_ = n(f, w), _ && E.push(r(f) + (s ? ": " : ":") + _));
                            return _ = E.length === 0 ? "{}" : s ? "{" + E.join(",") + v + "}" : "{" + E.join(",") + "}", s = v, _
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
            n, i = function(E) {
                var w = new SyntaxError(E);
                throw w.at = t, w.text = n, w
            },
            o = function(E) {
                return E && E !== e && i("Expected '" + E + "' instead of '" + e + "'"), e = n.charAt(t), t += 1, e
            },
            s = function() {
                var E, w = "";
                for (e === "-" && (w = "-", o("-")); e >= "0" && e <= "9";) w += e, o();
                if (e === ".")
                    for (w += "."; o() && e >= "0" && e <= "9";) w += e;
                if (e === "e" || e === "E")
                    for (w += e, o(), (e === "-" || e === "+") && (w += e, o()); e >= "0" && e <= "9";) w += e, o();
                if (E = +w, !isFinite(E)) i("Bad number");
                else return E
            },
            a = function() {
                var E, w, I = "",
                    L;
                if (e === '"')
                    for (; o();) {
                        if (e === '"') return o(), I;
                        if (e === "\\")
                            if (o(), e === "u") {
                                for (L = 0, w = 0; w < 4 && (E = parseInt(o(), 16), !!isFinite(E)); w += 1) L = L * 16 + E;
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
            _, y = function() {
                var E = [];
                if (e === "[") {
                    if (o("["), u(), e === "]") return o("]"), E;
                    for (; e;) {
                        if (E.push(_()), u(), e === "]") return o("]"), E;
                        o(","), u()
                    }
                }
                i("Bad array")
            },
            v = function() {
                var E, w = {};
                if (e === "{") {
                    if (o("{"), u(), e === "}") return o("}"), w;
                    for (; e;) {
                        if (E = a(), u(), o(":"), Object.hasOwnProperty.call(w, E) && i('Duplicate key "' + E + '"'), w[E] = _(), u(), e === "}") return o("}"), w;
                        o(","), u()
                    }
                }
                i("Bad object")
            };
        return _ = function() {
                switch (u(), e) {
                    case "{":
                        return v();
                    case "[":
                        return y();
                    case '"':
                        return a();
                    case "-":
                        return s();
                    default:
                        return e >= "0" && e <= "9" ? s() : f()
                }
            },
            function(E) {
                var w;
                return n = E, t = 0, e = " ", w = _(), u(), e && i("Syntax error"), w
            }
    }();
    c.base64Encode = function(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r, n, i, o, s, a, u, f, _ = 0,
            y = 0,
            v = "",
            E = [];
        if (!t) return t;
        t = c.utf8Encode(t);
        do r = t.charCodeAt(_++), n = t.charCodeAt(_++), i = t.charCodeAt(_++), f = r << 16 | n << 8 | i, o = f >> 18 & 63, s = f >> 12 & 63, a = f >> 6 & 63, u = f & 63, E[y++] = e.charAt(o) + e.charAt(s) + e.charAt(a) + e.charAt(u); while (_ < t.length);
        switch (v = E.join(""), t.length % 3) {
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

                function u(f, _) {
                    var y, v = 0;
                    for (y = 0; y < _.length; y++) v |= s[y] << y * 8;
                    return f ^ v
                }
                for (i = 0; i < n.length; i++) o = n.charCodeAt(i), s.unshift(o & 255), s.length >= 4 && (a = u(a, s), s = []);
                return s.length > 0 && (a = u(a, s)), a.toString(16)
            };
        return function() {
            var n = (fr.height * fr.width).toString(16);
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
            z.error("Skipping decoding for malformed query param: " + o)
        }
        return o.replace(/\+/g, " ")
    };
    c.cookie = {
        get: function(t) {
            for (var e = t + "=", r = V.cookie.split(";"), n = 0; n < r.length; n++) {
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
                var _ = bi(V.location.hostname);
                a = _ ? "; domain=." + _ : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure"), V.cookie = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f
        },
        set: function(t, e, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var _ = bi(V.location.hostname);
                a = _ ? "; domain=." + _ : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 24 * 60 * 60 * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure");
            var v = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f;
            return V.cookie = v, v
        },
        remove: function(t, e, r) {
            c.cookie.set(t, "", -1, e, !1, !1, r)
        }
    };
    var Kr = null,
        lr = function(t, e) {
            if (Kr !== null && !e) return Kr;
            var r = !0;
            try {
                t = t || window.localStorage;
                var n = "__mplss_" + An(8),
                    i = "xyz";
                t.setItem(n, i), t.getItem(n) !== i && (r = !1), t.removeItem(n)
            } catch {
                r = !1
            }
            return Kr = r, r
        };
    c.localStorage = {
        is_supported: function(t) {
            var e = lr(null, t);
            return e || z.error("localStorage unsupported; falling back to cookie store"), e
        },
        error: function(t) {
            z.error("localStorage error: " + t)
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
                z.error("No valid element provided to register_event");
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
                        f, _;
                    return c.isFunction(o) && (f = o(a)), _ = i.call(n, a), (f === !1 || _ === !1) && (u = !1), u
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
    var ya = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
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
            if (!V.getElementsByTagName) return [];
            var o = i.split(" "),
                s, a, u, f, _, y, v, E, w, I, L = [V];
            for (y = 0; y < o.length; y++) {
                if (s = o[y].replace(/^\s+/, "").replace(/\s+$/, ""), s.indexOf("#") > -1) {
                    a = s.split("#"), u = a[0];
                    var J = a[1],
                        G = V.getElementById(J);
                    if (!G || u && G.nodeName.toLowerCase() != u) return [];
                    L = [G];
                    continue
                }
                if (s.indexOf(".") > -1) {
                    a = s.split("."), u = a[0];
                    var oe = a[1];
                    for (u || (u = "*"), f = [], _ = 0, v = 0; v < L.length; v++)
                        for (u == "*" ? w = t(L[v]) : w = L[v].getElementsByTagName(u), E = 0; E < w.length; E++) f[_++] = w[E];
                    for (L = [], I = 0, v = 0; v < f.length; v++) f[v].className && c.isString(f[v].className) && r(f[v], oe) && (L[I++] = f[v]);
                    continue
                }
                var ye = s.match(ya);
                if (ye) {
                    u = ye[1];
                    var se = ye[2],
                        ae = ye[3],
                        he = ye[4];
                    for (u || (u = "*"), f = [], _ = 0, v = 0; v < L.length; v++)
                        for (u == "*" ? w = t(L[v]) : w = L[v].getElementsByTagName(u), E = 0; E < w.length; E++) f[_++] = w[E];
                    L = [], I = 0;
                    var te;
                    switch (ae) {
                        case "=":
                            te = function(H) {
                                return H.getAttribute(se) == he
                            };
                            break;
                        case "~":
                            te = function(H) {
                                return H.getAttribute(se).match(new RegExp("\\b" + he + "\\b"))
                            };
                            break;
                        case "|":
                            te = function(H) {
                                return H.getAttribute(se).match(new RegExp("^" + he + "-?"))
                            };
                            break;
                        case "^":
                            te = function(H) {
                                return H.getAttribute(se).indexOf(he) === 0
                            };
                            break;
                        case "$":
                            te = function(H) {
                                return H.getAttribute(se).lastIndexOf(he) == H.getAttribute(se).length - he.length
                            };
                            break;
                        case "*":
                            te = function(H) {
                                return H.getAttribute(se).indexOf(he) > -1
                            };
                            break;
                        default:
                            te = function(H) {
                                return H.getAttribute(se)
                            }
                    }
                    for (L = [], I = 0, v = 0; v < f.length; v++) te(f[v]) && (L[I++] = f[v]);
                    continue
                }
                for (u = s, f = [], _ = 0, v = 0; v < L.length; v++)
                    for (w = L[v].getElementsByTagName(u), E = 0; E < w.length; E++) f[_++] = w[E];
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
                e = c.getQueryParam(V.URL, n), e.length && (r[n] = e)
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
                $browser: c.info.browser(Te, Le.vendor, Ut),
                $referrer: V.referrer,
                $referring_domain: c.info.referringDomain(V.referrer),
                $device: c.info.device(Te)
            }), {
                $current_url: le.location.href,
                $browser_version: c.info.browserVersion(Te, Le.vendor, Ut),
                $screen_height: fr.height,
                $screen_width: fr.width,
                mp_lib: "web",
                $lib_version: Fe.LIB_VERSION,
                $insert_id: An(),
                time: c.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(Te, Le.vendor, Ut)
            }), {
                $browser_version: c.info.browserVersion(Te, Le.vendor, Ut)
            })
        },
        pageviewInfo: function(t) {
            return c.strip_empty_properties({
                mp_page: t,
                mp_referrer: V.referrer,
                mp_browser: c.info.browser(Te, Le.vendor, Ut),
                mp_platform: c.info.os()
            })
        }
    };
    var An = function(t) {
            var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return t ? e.substring(0, t) : e
        },
        va = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        ma = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        bi = function(t) {
            var e = ma,
                r = t.split("."),
                n = r[r.length - 1];
            (n.length > 4 || n === "com" || n === "org") && (e = va);
            var i = t.match(e);
            return i ? i[0] : ""
        },
        pr = null,
        dr = null;
    typeof JSON < "u" && (pr = JSON.stringify, dr = JSON.parse);
    pr = pr || c.JSONEncode;
    dr = dr || c.JSONDecode;
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
    var De = function() {};
    De.prototype.create_properties = function() {};
    De.prototype.event_handler = function() {};
    De.prototype.after_track_handler = function() {};
    De.prototype.init = function(t) {
        return this.mp = t, this
    };
    De.prototype.track = function(t, e, r, n) {
        var i = this,
            o = c.dom_query(t);
        if (o.length === 0) {
            z.error("The DOM query (" + t + ") returned 0 elements");
            return
        }
        return c.each(o, function(s) {
            c.register_event(s, this.override_event, function(a) {
                var u = {},
                    f = i.create_properties(r, this),
                    _ = i.mp.get_config("track_links_timeout");
                i.event_handler(a, this, u), window.setTimeout(i.track_callback(n, f, u, !0), _), i.mp.track(e, f, i.track_callback(n, f, u))
            })
        }, this), !0
    };
    De.prototype.track_callback = function(t, e, r, n) {
        n = n || !1;
        var i = this;
        return function() {
            r.callback_fired || (r.callback_fired = !0, !(t && t(n, e) === !1) && i.after_track_handler(e, r, n))
        }
    };
    De.prototype.create_properties = function(t, e) {
        var r;
        return typeof t == "function" ? r = t(e) : r = c.extend({}, t), r
    };
    var St = function() {
        this.override_event = "click"
    };
    c.inherit(St, De);
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
    var xr = function() {
        this.override_event = "submit"
    };
    c.inherit(xr, De);
    xr.prototype.event_handler = function(t, e, r) {
        r.element = e, t.preventDefault()
    };
    xr.prototype.after_track_handler = function(t, e) {
        setTimeout(function() {
            e.element.submit()
        }, 0)
    };
    var ba = Tn("lock"),
        To = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
        };
    To.prototype.withLock = function(t, e, r) {
        !r && typeof e != "function" && (r = e, e = null);
        var n = r || new Date().getTime() + "|" + Math.random(),
            i = new Date().getTime(),
            o = this.storageKey,
            s = this.pollIntervalMS,
            a = this.timeoutMS,
            u = this.storage,
            f = o + ":X",
            _ = o + ":Y",
            y = o + ":Z",
            v = function(G) {
                e && e(G)
            },
            E = function(G) {
                if (new Date().getTime() - i > a) {
                    ba.error("Timeout waiting for mutex on " + o + "; clearing lock. [" + n + "]"), u.removeItem(y), u.removeItem(_), L();
                    return
                }
                setTimeout(function() {
                    try {
                        G()
                    } catch (oe) {
                        v(oe)
                    }
                }, s * (Math.random() + .1))
            },
            w = function(G, oe) {
                G() ? oe() : E(function() {
                    w(G, oe)
                })
            },
            I = function() {
                var G = u.getItem(_);
                if (G && G !== n) return !1;
                if (u.setItem(_, n), u.getItem(_) === n) return !0;
                if (!lr(u, !0)) throw new Error("localStorage support dropped while acquiring lock");
                return !1
            },
            L = function() {
                u.setItem(f, n), w(I, function() {
                    if (u.getItem(f) === n) {
                        J();
                        return
                    }
                    E(function() {
                        if (u.getItem(_) !== n) {
                            L();
                            return
                        }
                        w(function() {
                            return !u.getItem(y)
                        }, J)
                    })
                })
            },
            J = function() {
                u.setItem(y, "1");
                try {
                    t()
                } finally {
                    u.removeItem(y), u.getItem(_) === n && u.removeItem(_), u.getItem(f) === n && u.removeItem(f)
                }
            };
        try {
            if (lr(u, !0)) L();
            else throw new Error("localStorage support check failed")
        } catch (G) {
            v(G)
        }
    };
    var Ei = Tn("batch"),
        ze = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || c.bind(Ei.error, Ei), this.lock = new To(t, {
                storage: this.storage
            }), this.pid = e.pid || null, this.memQueue = []
        };
    ze.prototype.enqueue = function(t, e, r) {
        var n = {
            id: An(),
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
    ze.prototype.fillBatch = function(t) {
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
    ze.prototype.removeItemsByID = function(t, e) {
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
            if (this.reportError("Error acquiring storage lock", o), !lr(this.storage, !0) && (s = n(), !s)) try {
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
    ze.prototype.updatePayloads = function(t, e) {
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
    ze.prototype.readFromStorage = function() {
        var t;
        try {
            t = this.storage.getItem(this.storageKey), t && (t = dr(t), c.isArray(t) || (this.reportError("Invalid storage entry:", t), t = null))
        } catch (e) {
            this.reportError("Error retrieving queue", e), t = null
        }
        return t || []
    };
    ze.prototype.saveToStorage = function(t) {
        try {
            return this.storage.setItem(this.storageKey, pr(t)), !0
        } catch (e) {
            return this.reportError("Error saving queue", e), !1
        }
    };
    ze.prototype.clear = function() {
        this.memQueue = [], this.storage.removeItem(this.storageKey)
    };
    var Ea = 10 * 60 * 1e3,
        qt = Tn("batch"),
        Ne = function(t, e) {
            this.errorReporter = e.errorReporter, this.queue = new ze(t, {
                errorReporter: c.bind(this.reportError, this),
                storage: e.storage
            }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
        };
    Ne.prototype.enqueue = function(t, e) {
        this.queue.enqueue(t, this.flushInterval, e)
    };
    Ne.prototype.start = function() {
        this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
    };
    Ne.prototype.stop = function() {
        this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
    };
    Ne.prototype.clear = function() {
        this.queue.clear()
    };
    Ne.prototype.resetBatchSize = function() {
        this.batchSize = this.libConfig.batch_size
    };
    Ne.prototype.resetFlush = function() {
        this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
    };
    Ne.prototype.scheduleFlush = function(t) {
        this.flushInterval = t, this.stopped || (this.timeoutID = setTimeout(c.bind(this.flush, this), this.flushInterval))
    };
    Ne.prototype.flush = function(t) {
        try {
            if (this.requestInProgress) {
                qt.log("Flush: Request already in progress");
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
                    var _ = f.payload;
                    this.beforeSendHook && !f.orphaned && (_ = this.beforeSendHook(_)), _ && o.push(_), s[f.id] = _
                }, this), o.length < 1) {
                this.resetFlush();
                return
            }
            this.requestInProgress = !0;
            var a = c.bind(function(f) {
                    this.requestInProgress = !1;
                    try {
                        var _ = !1;
                        if (t.unloading) this.queue.updatePayloads(s);
                        else if (c.isObject(f) && f.error === "timeout" && new Date().getTime() - r >= e) this.reportError("Network timeout; retrying"), this.flush();
                        else if (c.isObject(f) && f.xhr_req && (f.xhr_req.status >= 500 || f.xhr_req.status === 429 || f.error === "timeout")) {
                            var y = this.flushInterval * 2,
                                v = f.xhr_req.responseHeaders;
                            if (v) {
                                var E = v["Retry-After"];
                                E && (y = parseInt(E, 10) * 1e3 || y)
                            }
                            y = Math.min(Ea, y), this.reportError("Error; retry in " + y + " ms"), this.scheduleFlush(y)
                        } else if (c.isObject(f) && f.xhr_req && f.xhr_req.status === 413)
                            if (i.length > 1) {
                                var w = Math.max(1, Math.floor(n / 2));
                                this.batchSize = Math.min(this.batchSize, w, i.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                            } else this.reportError("Single-event request too large; dropping", i), this.resetBatchSize(), _ = !0;
                        else _ = !0;
                        _ && this.queue.removeItemsByID(c.map(i, function(I) {
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
            t.unloading && (u.transport = "sendBeacon"), qt.log("MIXPANEL REQUEST:", o), this.sendRequest(o, u, a)
        } catch (f) {
            this.reportError("Error flushing request queue", f), this.resetFlush()
        }
    };
    Ne.prototype.reportError = function(t, e) {
        if (qt.error.apply(qt.error, arguments), this.errorReporter) try {
            e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
        } catch (r) {
            qt.error(r)
        }
    };
    var Sa = "__mp_opt_in_out_";

    function wa(t, e) {
        xo(!0, t, e)
    }

    function Oa(t, e) {
        xo(!1, t, e)
    }

    function ka(t, e) {
        return Ro(t, e) === "1"
    }

    function Ao(t, e) {
        if (Aa(e)) return z.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = Ro(t, e) === "0";
        return r && z.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function Zt(t) {
        return Nn(t, function(e) {
            return this.get_config(e)
        })
    }

    function Ke(t) {
        return Nn(t, function(e) {
            return this._get_config(e)
        })
    }

    function Rt(t) {
        return Nn(t, function(e) {
            return this._get_config(e)
        })
    }

    function Ta(t, e) {
        e = e || {}, Rn(e).remove(xn(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
    }

    function Rn(t) {
        return t = t || {}, t.persistenceType === "localStorage" ? c.localStorage : c.cookie
    }

    function xn(t, e) {
        return e = e || {}, (e.persistencePrefix || Sa) + t
    }

    function Ro(t, e) {
        return Rn(e).get(xn(t, e))
    }

    function Aa(t) {
        if (t && t.ignoreDnt) return !1;
        var e = t && t.window || le,
            r = e.navigator || {},
            n = !1;
        return c.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(i) {
            c.includes([!0, 1, "1", "yes"], i) && (n = !0)
        }), n
    }

    function xo(t, e, r) {
        if (!c.isString(e) || !e.length) {
            z.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
            return
        }
        r = r || {}, Rn(r).set(xn(e, r), t ? 1 : 0, c.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0
        })
    }

    function Nn(t, e) {
        return function() {
            var r = !1;
            try {
                var n = e.call(this, "token"),
                    i = e.call(this, "ignore_dnt"),
                    o = e.call(this, "opt_out_tracking_persistence_type"),
                    s = e.call(this, "opt_out_tracking_cookie_prefix"),
                    a = e.call(this, "window");
                n && (r = Ao(n, {
                    ignoreDnt: i,
                    persistenceType: o,
                    persistencePrefix: s,
                    window: a
                }))
            } catch (f) {
                z.error("Unexpected error when checking tracking opt-out status: " + f)
            }
            if (!r) return t.apply(this, arguments);
            var u = arguments[arguments.length - 1];
            typeof u == "function" && u(0)
        }
    }
    var He = "$set",
        wt = "$set_once",
        Ae = "$unset",
        nt = "$add",
        $e = "$append",
        it = "$union",
        Ye = "$remove",
        Ra = "$delete",
        No = {
            set_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[He] = n, r
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
                }, this) : n[t] = c.isArray(e) ? e : [e], r[it] = n, r
            },
            append_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[$e] = n, r
            },
            remove_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[Ye] = n, r
            },
            delete_action: function() {
                var t = {};
                return t[Ra] = "", t
            }
        },
        Q = function() {};
    c.extend(Q.prototype, No);
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
    var $ = function() {};
    c.extend($.prototype, No);
    $.prototype._init = function(t) {
        this._mixpanel = t
    };
    $.prototype.set = Ke(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n[He] = c.extend({}, c.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[He]), this._send_request(n, r)
    });
    $.prototype.set_once = Ke(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    $.prototype.unset = Ke(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    $.prototype.increment = Ke(function(t, e, r) {
        var n = {},
            i = {};
        return c.isObject(t) ? (c.each(t, function(o, s) {
            if (!this._is_reserved_property(s))
                if (isNaN(parseFloat(o))) {
                    z.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else i[s] = o
        }, this), r = e) : (c.isUndefined(e) && (e = 1), i[t] = e), n[nt] = i, this._send_request(n, r)
    });
    $.prototype.append = Ke(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.append_action(t, e);
        return this._send_request(n, r)
    });
    $.prototype.remove = Ke(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    $.prototype.union = Ke(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    $.prototype.track_charge = Ke(function(t, e, r) {
        if (!c.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
            z.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return
        }
        return this.append("$transactions", c.extend({
            $amount: t
        }, e), r)
    });
    $.prototype.clear_charges = function(t) {
        return this.set("$transactions", [], t)
    };
    $.prototype.delete_user = function() {
        if (!this._identify_called()) {
            z.error("mixpanel.people.delete_user() requires you to call identify() first");
            return
        }
        var t = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(t)
    };
    $.prototype.toString = function() {
        return this._mixpanel.toString() + ".people"
    };
    $.prototype._send_request = function(t, e) {
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
    $.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    $.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0
    };
    $.prototype._enqueue = function(t) {
        He in t ? this._mixpanel.persistence._add_to_people_queue(He, t) : wt in t ? this._mixpanel.persistence._add_to_people_queue(wt, t) : Ae in t ? this._mixpanel.persistence._add_to_people_queue(Ae, t) : nt in t ? this._mixpanel.persistence._add_to_people_queue(nt, t) : $e in t ? this._mixpanel.persistence._add_to_people_queue($e, t) : Ye in t ? this._mixpanel.persistence._add_to_people_queue(Ye, t) : it in t ? this._mixpanel.persistence._add_to_people_queue(it, t) : z.error("Invalid call to _enqueue():", t)
    };
    $.prototype._flush_one_queue = function(t, e, r, n) {
        var i = this,
            o = c.extend({}, this._mixpanel.persistence._get_queue(t)),
            s = o;
        !c.isUndefined(o) && c.isObject(o) && !c.isEmptyObject(o) && (i._mixpanel.persistence._pop_from_people_queue(t, o), n && (s = n(o)), e.call(i, s, function(a, u) {
            a === 0 && i._mixpanel.persistence._add_to_people_queue(t, o), c.isUndefined(r) || r(a, u)
        }))
    };
    $.prototype._flush = function(t, e, r, n, i, o, s) {
        var a = this,
            u = this._mixpanel.persistence._get_queue($e),
            f = this._mixpanel.persistence._get_queue(Ye);
        if (this._flush_one_queue(He, this.set, t), this._flush_one_queue(wt, this.set_once, n), this._flush_one_queue(Ae, this.unset, o, function(L) {
                return c.keys(L)
            }), this._flush_one_queue(nt, this.increment, e), this._flush_one_queue(it, this.union, i), !c.isUndefined(u) && c.isArray(u) && u.length) {
            for (var _, y = function(L, J) {
                    L === 0 && a._mixpanel.persistence._add_to_people_queue($e, _), c.isUndefined(r) || r(L, J)
                }, v = u.length - 1; v >= 0; v--) _ = u.pop(), c.isEmptyObject(_) || a.append(_, y);
            a._mixpanel.persistence.save()
        }
        if (!c.isUndefined(f) && c.isArray(f) && f.length) {
            for (var E, w = function(L, J) {
                    L === 0 && a._mixpanel.persistence._add_to_people_queue(Ye, E), c.isUndefined(s) || s(L, J)
                }, I = f.length - 1; I >= 0; I--) E = f.pop(), c.isEmptyObject(E) || a.remove(E, w);
            a._mixpanel.persistence.save()
        }
    };
    $.prototype._is_reserved_property = function(t) {
        return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
    };
    $.prototype.set = $.prototype.set;
    $.prototype.set_once = $.prototype.set_once;
    $.prototype.unset = $.prototype.unset;
    $.prototype.increment = $.prototype.increment;
    $.prototype.append = $.prototype.append;
    $.prototype.remove = $.prototype.remove;
    $.prototype.union = $.prototype.union;
    $.prototype.track_charge = $.prototype.track_charge;
    $.prototype.clear_charges = $.prototype.clear_charges;
    $.prototype.delete_user = $.prototype.delete_user;
    $.prototype.toString = $.prototype.toString;
    var In = "__mps",
        Ln = "__mpso",
        Pn = "__mpus",
        $n = "__mpa",
        Dn = "__mpap",
        Cn = "__mpr",
        jn = "__mpu",
        Io = "$people_distinct_id",
        hr = "__alias",
        Yt = "__timers",
        xa = [In, Ln, Pn, $n, Dn, Cn, jn, Io, hr, Yt],
        j = function(t) {
            this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
            var e = t.persistence;
            e !== "cookie" && e !== "localStorage" && (z.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && c.localStorage.is_supported() ? this.storage = c.localStorage : this.storage = c.cookie, this.load(), this.update_config(t), this.upgrade(t), this.save()
        };
    j.prototype.properties = function() {
        var t = {};
        return c.each(this.props, function(e, r) {
            c.include(xa, r) || (t[r] = e)
        }), t
    };
    j.prototype.load = function() {
        if (!this.disabled) {
            var t = this.storage.parse(this.name);
            t && (this.props = c.extend({}, t))
        }
    };
    j.prototype.upgrade = function(t) {
        var e = t.upgrade,
            r, n;
        e && (r = "mp_super_properties", typeof e == "string" && (r = e), n = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), n && (this.props = c.extend(this.props, n.all, n.events))), !t.cookie_name && t.name !== "mixpanel" && (r = "mp_" + t.token + "_" + t.name, n = this.storage.parse(r), n && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(n))), this.storage === c.localStorage && (n = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, !0), n && this.register_once(n))
    };
    j.prototype.save = function() {
        this.disabled || this.storage.set(this.name, c.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
    };
    j.prototype.remove = function() {
        this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
    };
    j.prototype.clear = function() {
        this.remove(), this.props = {}
    };
    j.prototype.register_once = function(t, e, r) {
        return c.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, c.each(t, function(n, i) {
            (!this.props.hasOwnProperty(i) || this.props[i] === e) && (this.props[i] = n)
        }, this), this.save(), !0) : !1
    };
    j.prototype.register = function(t, e) {
        return c.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, c.extend(this.props, t), this.save(), !0) : !1
    };
    j.prototype.unregister = function(t) {
        t in this.props && (delete this.props[t], this.save())
    };
    j.prototype.update_campaign_params = function() {
        this.campaign_params_saved || (this.register_once(c.info.campaignParams()), this.campaign_params_saved = !0)
    };
    j.prototype.update_search_keyword = function(t) {
        this.register(c.info.searchInfo(t))
    };
    j.prototype.update_referrer_info = function(t) {
        this.register_once({
            $initial_referrer: t || "$direct",
            $initial_referring_domain: c.info.referringDomain(t) || "$direct"
        }, "")
    };
    j.prototype.get_referrer_info = function() {
        return c.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    j.prototype.safe_merge = function(t) {
        return c.each(this.props, function(e, r) {
            r in t || (t[r] = e)
        }), t
    };
    j.prototype.update_config = function(t) {
        this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
    };
    j.prototype.set_disabled = function(t) {
        this.disabled = t, this.disabled ? this.remove() : this.save()
    };
    j.prototype.set_cookie_domain = function(t) {
        t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
    };
    j.prototype.set_cross_site = function(t) {
        t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
    };
    j.prototype.set_cross_subdomain = function(t) {
        t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
    };
    j.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    j.prototype.set_secure = function(t) {
        t !== this.secure && (this.secure = !!t, this.remove(), this.save())
    };
    j.prototype._add_to_people_queue = function(t, e) {
        var r = this._get_queue_key(t),
            n = e[t],
            i = this._get_or_create_queue(He),
            o = this._get_or_create_queue(wt),
            s = this._get_or_create_queue(Ae),
            a = this._get_or_create_queue(nt),
            u = this._get_or_create_queue(it),
            f = this._get_or_create_queue(Ye, []),
            _ = this._get_or_create_queue($e, []);
        r === In ? (c.extend(i, n), this._pop_from_people_queue(nt, n), this._pop_from_people_queue(it, n), this._pop_from_people_queue(Ae, n)) : r === Ln ? (c.each(n, function(y, v) {
            v in o || (o[v] = y)
        }), this._pop_from_people_queue(Ae, n)) : r === Pn ? c.each(n, function(y) {
            c.each([i, o, a, u], function(v) {
                y in v && delete v[y]
            }), c.each(_, function(v) {
                y in v && delete v[y]
            }), s[y] = !0
        }) : r === $n ? (c.each(n, function(y, v) {
            v in i ? i[v] += y : (v in a || (a[v] = 0), a[v] += y)
        }, this), this._pop_from_people_queue(Ae, n)) : r === jn ? (c.each(n, function(y, v) {
            c.isArray(y) && (v in u || (u[v] = []), u[v] = u[v].concat(y))
        }), this._pop_from_people_queue(Ae, n)) : r === Cn ? (f.push(n), this._pop_from_people_queue($e, n)) : r === Dn && (_.push(n), this._pop_from_people_queue(Ae, n)), z.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), z.log(e), this.save()
    };
    j.prototype._pop_from_people_queue = function(t, e) {
        var r = this._get_queue(t);
        c.isUndefined(r) || (c.each(e, function(n, i) {
            t === $e || t === Ye ? c.each(r, function(o) {
                o[i] === n && delete o[i]
            }) : delete r[i]
        }, this), this.save())
    };
    j.prototype._get_queue_key = function(t) {
        if (t === He) return In;
        if (t === wt) return Ln;
        if (t === Ae) return Pn;
        if (t === nt) return $n;
        if (t === $e) return Dn;
        if (t === Ye) return Cn;
        if (t === it) return jn;
        z.error("Invalid queue:", t)
    };
    j.prototype._get_queue = function(t) {
        return this.props[this._get_queue_key(t)]
    };
    j.prototype._get_or_create_queue = function(t, e) {
        var r = this._get_queue_key(t);
        return e = c.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
    };
    j.prototype.set_event_timer = function(t, e) {
        var r = this.props[Yt] || {};
        r[t] = e, this.props[Yt] = r, this.save()
    };
    j.prototype.remove_event_timer = function(t) {
        var e = this.props[Yt] || {},
            r = e[t];
        return c.isUndefined(r) || (delete this.props[Yt][t], this.save()), r
    };
    var Un, ce, Lo = 0,
        Na = 1,
        Ia = function(t) {
            return t
        },
        Wt = function() {},
        we = "mixpanel",
        Po = "base64",
        La = "json",
        dt = le.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        $o = !dt && Te.indexOf("MSIE") === -1 && Te.indexOf("Mozilla") === -1,
        _r = null;
    Le.sendBeacon && (_r = function() {
        return Le.sendBeacon.apply(Le, arguments)
    });
    var Oi = {
            api_host: "https://api-js.mixpanel.com",
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: Po,
            app_host: "https://mixpanel.com",
            cdn: "https://cdn.mxpnl.com",
            cross_site_cookie: !1,
            cross_subdomain_cookie: !0,
            error_reporter: Wt,
            persistence: "cookie",
            persistence_name: "",
            cookie_domain: "",
            cookie_name: "",
            loaded: Wt,
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
        Do = !1,
        S = function() {},
        fn = function(t, e, r) {
            var n, i = r === we ? ce : ce[r];
            if (i && Un === Lo) n = i;
            else {
                if (i && !c.isArray(i)) {
                    z.error("You have already initialized " + r);
                    return
                }
                n = new S
            }
            return n._cached_groups = {}, n._init(t, e, r), n.people = new $, n.people._init(n), Fe.DEBUG = Fe.DEBUG || n.get_config("debug"), !c.isUndefined(i) && c.isArray(i) && (n._execute_array.call(n.people, i.people), n._execute_array(i)), n
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
        var n = fn(t, e, r);
        return ce[r] = n, n._loaded(), n
    };
    S.prototype._init = function(t, e, r) {
        e = e || {}, this.__loaded = !0, this.config = {};
        var n = {};
        if (!("api_payload_format" in e)) {
            var i = e.api_host || Oi.api_host;
            i.match(/\.mixpanel\.com$/) && (n.api_payload_format = La)
        }
        if (this.set_config(c.extend({}, Oi, n, e, {
                name: r,
                token: t,
                callback_fn: (r === we ? r : we + "." + r) + "._jsc"
            })), this._jsc = Wt, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!c.localStorage.is_supported(!0) || !dt) this._batch_requests = !1, z.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
            else if (this.init_batchers(), _r && le.addEventListener) {
                var o = c.bind(function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }, this);
                le.addEventListener("pagehide", function(a) {
                    a.persisted && o()
                }), le.addEventListener("visibilitychange", function() {
                    V.visibilityState === "hidden" && o()
                })
            }
        }
        this.persistence = this.cookie = new j(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
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
        this.persistence.update_search_keyword(V.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(V.referrer)
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
        if (!Do) return this.__dom_loaded_queue.push([t, e]), !1;
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
        if ($o) return this.__request_queue.push(arguments), i;
        var o = {
                method: this.get_config("api_method"),
                transport: this.get_config("api_transport"),
                verbose: this.get_config("verbose")
            },
            s = null;
        !n && (c.isFunction(r) || typeof r == "string") && (n = r, r = null), r = c.extend(o, r || {}), dt || (r.method = "GET");
        var a = r.method === "POST",
            u = _r && a && r.transport.toLowerCase() === "sendbeacon",
            f = r.verbose;
        e.verbose && (f = !0), this.get_config("test") && (e.test = 1), f && (e.verbose = 1), this.get_config("img") && (e.img = 1), dt || (n ? e.callback = n : (f || this.get_config("test")) && (e.callback = "(function(){})")), e.ip = this.get_config("ip") ? 1 : 0, e._ = new Date().getTime().toString(), a && (s = "data=" + encodeURIComponent(e.data), delete e.data), t += "?" + c.HTTPBuildQuery(e);
        var _ = this;
        if ("img" in e) {
            var y = V.createElement("img");
            y.src = t, V.body.appendChild(y)
        } else if (u) {
            try {
                i = _r(t, s)
            } catch (J) {
                _.report_error(J), i = !1
            }
            try {
                n && n(i ? 1 : 0)
            } catch (J) {
                _.report_error(J)
            }
        } else if (dt) try {
            var v = new XMLHttpRequest;
            v.open(r.method, t, !0);
            var E = this.get_config("xhr_headers");
            if (a && (E["Content-Type"] = "application/x-www-form-urlencoded"), c.each(E, function(J, G) {
                    v.setRequestHeader(G, J)
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
                                } catch (oe) {
                                    if (_.report_error(oe), r.ignore_json_errors) J = v.responseText;
                                    else return
                                }
                                n(J)
                            } else n(Number(v.responseText))
                    } else {
                        var G;
                        v.timeout && !v.status && new Date().getTime() - w >= v.timeout ? G = "timeout" : G = "Bad HTTP status: " + v.status + " " + v.statusText, _.report_error(G), n && n(f ? {
                            status: 0,
                            error: G,
                            xhr_req: v
                        } : 0)
                    }
            }, v.send(s)
        } catch (J) {
            _.report_error(J), i = !1
        } else {
            var I = V.createElement("script");
            I.type = "text/javascript", I.async = !0, I.defer = !0, I.src = t;
            var L = V.getElementsByTagName("script")[0];
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
                    c.each(u, function(_) {
                        f = f[_[0]].apply(f, _.slice(1))
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
                return new Ne("__mpq_" + t + r.queue_suffix, {
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
        return this.get_config("api_payload_format") === Po && (e = c.base64Encode(e)), {
            data: e
        }
    };
    S.prototype._track_or_batch = function(t, e) {
        var r = c.truncate(t.data, 255),
            n = t.endpoint,
            i = t.batcher,
            o = t.should_send_immediately,
            s = t.send_request_options || {};
        e = e || Wt;
        var a = !0,
            u = c.bind(function() {
                return s.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (z.log("MIXPANEL REQUEST:"), z.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(e, r))) : null
            }, this);
        return this._batch_requests && !o ? i.enqueue(r, function(f) {
            f ? e(1, r) : u()
        }) : a = u(), a && r
    };
    S.prototype.track = Zt(function(t, e, r, n) {
        !n && typeof r == "function" && (n = r, r = null), r = r || {};
        var i = r.transport;
        i && (r.transport = i);
        var o = r.send_immediately;
        if (typeof n != "function" && (n = Wt), c.isUndefined(t)) {
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
        c.isArray(u) ? c.each(u, function(y) {
            delete e[y]
        }) : this.report_error("Invalid value for property_blacklist config: " + u);
        var f = {
                event: t,
                properties: e
            },
            _ = this._track_or_batch({
                type: "events",
                data: f,
                endpoint: this.get_config("api_host") + "/track/",
                batcher: this.request_batchers.events,
                should_send_immediately: o,
                send_request_options: r
            }, n);
        return _
    });
    S.prototype.set_group = Zt(function(t, e, r) {
        c.isArray(e) || (e = [e]);
        var n = {};
        return n[t] = e, this.register(n), this.people.set(t, e, r)
    });
    S.prototype.add_group = Zt(function(t, e, r) {
        var n = this.get_property(t);
        if (n === void 0) {
            var i = {};
            i[t] = [e], this.register(i)
        } else n.indexOf(e) === -1 && (n.push(e), this.register(i));
        return this.people.union(t, e, r)
    });
    S.prototype.remove_group = Zt(function(t, e, r) {
        var n = this.get_property(t);
        if (n !== void 0) {
            var i = n.indexOf(e);
            i > -1 && (n.splice(i, 1), this.register({
                group_key: n
            })), n.length === 0 && this.unregister(t)
        }
        return this.people.remove(t, e, r)
    });
    S.prototype.track_with_groups = Zt(function(t, e, r, n) {
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
        c.isUndefined(t) && (t = V.location.href), this.track("mp_page_view", c.info.pageviewInfo(t))
    };
    S.prototype.track_links = function() {
        return this._track_dom.call(this, St, arguments)
    };
    S.prototype.track_forms = function() {
        return this._track_dom.call(this, xr, arguments)
    };
    S.prototype.time_event = function(t) {
        if (c.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return
        }
        this._event_is_disabled(t) || this.persistence.set_event_timer(t, new Date().getTime())
    };
    var Pa = {
            persistent: !0
        },
        Mn = function(t) {
            var e;
            return c.isObject(t) ? e = t : c.isUndefined(t) ? e = {} : e = {
                days: t
            }, c.extend({}, Pa, e)
        };
    S.prototype.register = function(t, e) {
        var r = Mn(e);
        r.persistent ? this.persistence.register(t, r.days) : c.extend(this.unpersisted_superprops, t)
    };
    S.prototype.register_once = function(t, e, r) {
        var n = Mn(r);
        n.persistent ? this.persistence.register_once(t, e, n.days) : (typeof e > "u" && (e = "None"), c.each(t, function(i, o) {
            (!this.unpersisted_superprops.hasOwnProperty(o) || this.unpersisted_superprops[o] === e) && (this.unpersisted_superprops[o] = i)
        }, this))
    };
    S.prototype.unregister = function(t, e) {
        e = Mn(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
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
        t !== u && t !== this.get_property(hr) && (this.unregister(hr), this.register({
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
        if (t === this.get_property(Io)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
        var r = this;
        return c.isUndefined(e) && (e = this.get_distinct_id()), t !== e ? (this._register_single(hr, t), this.track("$create_alias", {
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
        var e = (this.config.hooks[t] || Ia).apply(this, Be.call(arguments, 1));
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
        }, t), this._gdpr_call_func(wa, t), this._gdpr_update_persistence(t)
    };
    S.prototype.opt_out_tracking = function(t) {
        t = c.extend({
            clear_persistence: !0,
            delete_user: !0
        }, t), t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(Oa, t), this._gdpr_update_persistence(t)
    };
    S.prototype.has_opted_in_tracking = function(t) {
        return this._gdpr_call_func(ka, t)
    };
    S.prototype.has_opted_out_tracking = function(t) {
        return this._gdpr_call_func(Ao, t)
    };
    S.prototype.clear_opt_in_out_tracking = function(t) {
        t = c.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Ta, t), this._gdpr_update_persistence(t)
    };
    S.prototype.report_error = function(t, e) {
        z.error.apply(z.error, arguments);
        try {
            !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
        } catch (r) {
            z.error(r)
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
    j.prototype.properties = j.prototype.properties;
    j.prototype.update_search_keyword = j.prototype.update_search_keyword;
    j.prototype.update_referrer_info = j.prototype.update_referrer_info;
    j.prototype.get_cross_subdomain = j.prototype.get_cross_subdomain;
    j.prototype.clear = j.prototype.clear;
    var pt = {},
        $a = function() {
            c.each(pt, function(t, e) {
                e !== we && (ce[e] = t)
            }), ce._ = c
        },
        Da = function() {
            ce.init = function(t, e, r) {
                if (r) return ce[r] || (ce[r] = pt[r] = fn(t, e, r), ce[r]._loaded()), ce[r];
                var n = ce;
                pt[we] ? n = pt[we] : t && (n = fn(t, e, we), n._loaded(), pt[we] = n), ce = n, Un === Na && (le[we] = ce), $a()
            }
        },
        Ca = function() {
            function t() {
                t.done || (t.done = !0, Do = !0, $o = !1, c.each(pt, function(n) {
                    n._dom_loaded()
                }))
            }

            function e() {
                try {
                    V.documentElement.doScroll("left")
                } catch {
                    setTimeout(e, 1);
                    return
                }
                t()
            }
            if (V.addEventListener) V.readyState === "complete" ? t() : V.addEventListener("DOMContentLoaded", t, !1);
            else if (V.attachEvent) {
                V.attachEvent("onreadystatechange", t);
                var r = !1;
                try {
                    r = le.frameElement === null
                } catch {}
                V.documentElement.doScroll && r && e()
            }
            c.register_event(le, "load", t, !0)
        };

    function ja() {
        return Un = Lo, ce = new S, Da(), ce.init(), Ca(), ce
    }
    var Ua = ja(),
        ki = Ua;
    class Co {
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

    function Ma() {
        this.__data__ = [], this.size = 0
    }
    var Ba = Ma;

    function Fa(t, e) {
        return t === e || t !== t && e !== e
    }
    var Nr = Fa,
        qa = Nr;

    function Ga(t, e) {
        for (var r = t.length; r--;)
            if (qa(t[r][0], e)) return r;
        return -1
    }
    var Ir = Ga,
        Ha = Ir,
        Ya = Array.prototype,
        Wa = Ya.splice;

    function za(t) {
        var e = this.__data__,
            r = Ha(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : Wa.call(e, r, 1), --this.size, !0
    }
    var Ka = za,
        Va = Ir;

    function Ja(t) {
        var e = this.__data__,
            r = Va(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var Xa = Ja,
        Qa = Ir;

    function Za(t) {
        return Qa(this.__data__, t) > -1
    }
    var ec = Za,
        tc = Ir;

    function rc(t, e) {
        var r = this.__data__,
            n = tc(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var nc = rc,
        ic = Ba,
        oc = Ka,
        sc = Xa,
        ac = ec,
        cc = nc;

    function xt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    xt.prototype.clear = ic;
    xt.prototype.delete = oc;
    xt.prototype.get = sc;
    xt.prototype.has = ac;
    xt.prototype.set = cc;
    var Lr = xt,
        uc = Lr;

    function fc() {
        this.__data__ = new uc, this.size = 0
    }
    var lc = fc;

    function pc(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var dc = pc;

    function hc(t) {
        return this.__data__.get(t)
    }
    var _c = hc;

    function gc(t) {
        return this.__data__.has(t)
    }
    var yc = gc,
        vc = typeof me == "object" && me && me.Object === Object && me,
        jo = vc,
        mc = jo,
        bc = typeof self == "object" && self && self.Object === Object && self,
        Ec = mc || bc || Function("return this")(),
        Nt = Ec,
        Sc = Nt,
        wc = Sc.Symbol,
        Uo = wc,
        Ti = Uo,
        Mo = Object.prototype,
        Oc = Mo.hasOwnProperty,
        kc = Mo.toString,
        Mt = Ti ? Ti.toStringTag : void 0;

    function Tc(t) {
        var e = Oc.call(t, Mt),
            r = t[Mt];
        try {
            t[Mt] = void 0;
            var n = !0
        } catch {}
        var i = kc.call(t);
        return n && (e ? t[Mt] = r : delete t[Mt]), i
    }
    var Ac = Tc,
        Rc = Object.prototype,
        xc = Rc.toString;

    function Nc(t) {
        return xc.call(t)
    }
    var Ic = Nc,
        Ai = Uo,
        Lc = Ac,
        Pc = Ic,
        $c = "[object Null]",
        Dc = "[object Undefined]",
        Ri = Ai ? Ai.toStringTag : void 0;

    function Cc(t) {
        return t == null ? t === void 0 ? Dc : $c : Ri && Ri in Object(t) ? Lc(t) : Pc(t)
    }
    var Pr = Cc;

    function jc(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var at = jc,
        Uc = Pr,
        Mc = at,
        Bc = "[object AsyncFunction]",
        Fc = "[object Function]",
        qc = "[object GeneratorFunction]",
        Gc = "[object Proxy]";

    function Hc(t) {
        if (!Mc(t)) return !1;
        var e = Uc(t);
        return e == Fc || e == qc || e == Bc || e == Gc
    }
    var Bn = Hc,
        Yc = Nt,
        Wc = Yc["__core-js_shared__"],
        zc = Wc,
        Vr = zc,
        xi = function() {
            var t = /[^.]+$/.exec(Vr && Vr.keys && Vr.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function Kc(t) {
        return !!xi && xi in t
    }
    var Vc = Kc,
        Jc = Function.prototype,
        Xc = Jc.toString;

    function Qc(t) {
        if (t != null) {
            try {
                return Xc.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var Zc = Qc,
        eu = Bn,
        tu = Vc,
        ru = at,
        nu = Zc,
        iu = /[\\^$.*+?()[\]{}|]/g,
        ou = /^\[object .+?Constructor\]$/,
        su = Function.prototype,
        au = Object.prototype,
        cu = su.toString,
        uu = au.hasOwnProperty,
        fu = RegExp("^" + cu.call(uu).replace(iu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function lu(t) {
        if (!ru(t) || tu(t)) return !1;
        var e = eu(t) ? fu : ou;
        return e.test(nu(t))
    }
    var pu = lu;

    function du(t, e) {
        return t == null ? void 0 : t[e]
    }
    var hu = du,
        _u = pu,
        gu = hu;

    function yu(t, e) {
        var r = gu(t, e);
        return _u(r) ? r : void 0
    }
    var Fn = yu,
        vu = Fn,
        mu = Nt,
        bu = vu(mu, "Map"),
        Bo = bu,
        Eu = Fn,
        Su = Eu(Object, "create"),
        $r = Su,
        Ni = $r;

    function wu() {
        this.__data__ = Ni ? Ni(null) : {}, this.size = 0
    }
    var Ou = wu;

    function ku(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var Tu = ku,
        Au = $r,
        Ru = "__lodash_hash_undefined__",
        xu = Object.prototype,
        Nu = xu.hasOwnProperty;

    function Iu(t) {
        var e = this.__data__;
        if (Au) {
            var r = e[t];
            return r === Ru ? void 0 : r
        }
        return Nu.call(e, t) ? e[t] : void 0
    }
    var Lu = Iu,
        Pu = $r,
        $u = Object.prototype,
        Du = $u.hasOwnProperty;

    function Cu(t) {
        var e = this.__data__;
        return Pu ? e[t] !== void 0 : Du.call(e, t)
    }
    var ju = Cu,
        Uu = $r,
        Mu = "__lodash_hash_undefined__";

    function Bu(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Uu && e === void 0 ? Mu : e, this
    }
    var Fu = Bu,
        qu = Ou,
        Gu = Tu,
        Hu = Lu,
        Yu = ju,
        Wu = Fu;

    function It(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    It.prototype.clear = qu;
    It.prototype.delete = Gu;
    It.prototype.get = Hu;
    It.prototype.has = Yu;
    It.prototype.set = Wu;
    var zu = It,
        Ii = zu,
        Ku = Lr,
        Vu = Bo;

    function Ju() {
        this.size = 0, this.__data__ = {
            hash: new Ii,
            map: new(Vu || Ku),
            string: new Ii
        }
    }
    var Xu = Ju;

    function Qu(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var Zu = Qu,
        ef = Zu;

    function tf(t, e) {
        var r = t.__data__;
        return ef(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var Dr = tf,
        rf = Dr;

    function nf(t) {
        var e = rf(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var of = nf, sf = Dr;

    function af(t) {
        return sf(this, t).get(t)
    }
    var cf = af,
        uf = Dr;

    function ff(t) {
        return uf(this, t).has(t)
    }
    var lf = ff,
        pf = Dr;

    function df(t, e) {
        var r = pf(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var hf = df,
        _f = Xu,
        gf = of,
        yf = cf,
        vf = lf,
        mf = hf;

    function Lt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Lt.prototype.clear = _f;
    Lt.prototype.delete = gf;
    Lt.prototype.get = yf;
    Lt.prototype.has = vf;
    Lt.prototype.set = mf;
    var bf = Lt,
        Ef = Lr,
        Sf = Bo,
        wf = bf,
        Of = 200;

    function kf(t, e) {
        var r = this.__data__;
        if (r instanceof Ef) {
            var n = r.__data__;
            if (!Sf || n.length < Of - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new wf(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var Tf = kf,
        Af = Lr,
        Rf = lc,
        xf = dc,
        Nf = _c,
        If = yc,
        Lf = Tf;

    function Pt(t) {
        var e = this.__data__ = new Af(t);
        this.size = e.size
    }
    Pt.prototype.clear = Rf;
    Pt.prototype.delete = xf;
    Pt.prototype.get = Nf;
    Pt.prototype.has = If;
    Pt.prototype.set = Lf;
    var Pf = Pt,
        $f = Fn,
        Df = function() {
            try {
                var t = $f(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        Fo = Df,
        Li = Fo;

    function Cf(t, e, r) {
        e == "__proto__" && Li ? Li(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var qn = Cf,
        jf = qn,
        Uf = Nr;

    function Mf(t, e, r) {
        (r !== void 0 && !Uf(t[e], r) || r === void 0 && !(e in t)) && jf(t, e, r)
    }
    var qo = Mf;

    function Bf(t) {
        return function(e, r, n) {
            for (var i = -1, o = Object(e), s = n(e), a = s.length; a--;) {
                var u = s[t ? a : ++i];
                if (r(o[u], u, o) === !1) break
            }
            return e
        }
    }
    var Ff = Bf,
        qf = Ff,
        Gf = qf(),
        Hf = Gf,
        gr = {},
        Yf = {
            get exports() {
                return gr
            },
            set exports(t) {
                gr = t
            }
        };
    (function(t, e) {
        var r = Nt,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            o = i && i.exports === n,
            s = o ? r.Buffer : void 0,
            a = s ? s.allocUnsafe : void 0;

        function u(f, _) {
            if (_) return f.slice();
            var y = f.length,
                v = a ? a(y) : new f.constructor(y);
            return f.copy(v), v
        }
        t.exports = u
    })(Yf, gr);
    var Wf = Nt,
        zf = Wf.Uint8Array,
        Kf = zf,
        Pi = Kf;

    function Vf(t) {
        var e = new t.constructor(t.byteLength);
        return new Pi(e).set(new Pi(t)), e
    }
    var Jf = Vf,
        Xf = Jf;

    function Qf(t, e) {
        var r = e ? Xf(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var Zf = Qf;

    function el(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var tl = el,
        rl = at,
        $i = Object.create,
        nl = function() {
            function t() {}
            return function(e) {
                if (!rl(e)) return {};
                if ($i) return $i(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        il = nl;

    function ol(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var sl = ol,
        al = sl,
        cl = al(Object.getPrototypeOf, Object),
        Go = cl,
        ul = Object.prototype;

    function fl(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || ul;
        return t === r
    }
    var Ho = fl,
        ll = il,
        pl = Go,
        dl = Ho;

    function hl(t) {
        return typeof t.constructor == "function" && !dl(t) ? ll(pl(t)) : {}
    }
    var _l = hl;

    function gl(t) {
        return t != null && typeof t == "object"
    }
    var er = gl,
        yl = Pr,
        vl = er,
        ml = "[object Arguments]";

    function bl(t) {
        return vl(t) && yl(t) == ml
    }
    var El = bl,
        Di = El,
        Sl = er,
        Yo = Object.prototype,
        wl = Yo.hasOwnProperty,
        Ol = Yo.propertyIsEnumerable,
        kl = Di(function() {
            return arguments
        }()) ? Di : function(t) {
            return Sl(t) && wl.call(t, "callee") && !Ol.call(t, "callee")
        },
        Wo = kl,
        Tl = Array.isArray,
        zo = Tl,
        Al = 9007199254740991;

    function Rl(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Al
    }
    var Ko = Rl,
        xl = Bn,
        Nl = Ko;

    function Il(t) {
        return t != null && Nl(t.length) && !xl(t)
    }
    var Gn = Il,
        Ll = Gn,
        Pl = er;

    function $l(t) {
        return Pl(t) && Ll(t)
    }
    var Dl = $l,
        zt = {},
        Cl = {
            get exports() {
                return zt
            },
            set exports(t) {
                zt = t
            }
        };

    function jl() {
        return !1
    }
    var Ul = jl;
    (function(t, e) {
        var r = Nt,
            n = Ul,
            i = e && !e.nodeType && e,
            o = i && !0 && t && !t.nodeType && t,
            s = o && o.exports === i,
            a = s ? r.Buffer : void 0,
            u = a ? a.isBuffer : void 0,
            f = u || n;
        t.exports = f
    })(Cl, zt);
    var Ml = Pr,
        Bl = Go,
        Fl = er,
        ql = "[object Object]",
        Gl = Function.prototype,
        Hl = Object.prototype,
        Vo = Gl.toString,
        Yl = Hl.hasOwnProperty,
        Wl = Vo.call(Object);

    function zl(t) {
        if (!Fl(t) || Ml(t) != ql) return !1;
        var e = Bl(t);
        if (e === null) return !0;
        var r = Yl.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && Vo.call(r) == Wl
    }
    var Kl = zl,
        Vl = Pr,
        Jl = Ko,
        Xl = er,
        Ql = "[object Arguments]",
        Zl = "[object Array]",
        ep = "[object Boolean]",
        tp = "[object Date]",
        rp = "[object Error]",
        np = "[object Function]",
        ip = "[object Map]",
        op = "[object Number]",
        sp = "[object Object]",
        ap = "[object RegExp]",
        cp = "[object Set]",
        up = "[object String]",
        fp = "[object WeakMap]",
        lp = "[object ArrayBuffer]",
        pp = "[object DataView]",
        dp = "[object Float32Array]",
        hp = "[object Float64Array]",
        _p = "[object Int8Array]",
        gp = "[object Int16Array]",
        yp = "[object Int32Array]",
        vp = "[object Uint8Array]",
        mp = "[object Uint8ClampedArray]",
        bp = "[object Uint16Array]",
        Ep = "[object Uint32Array]",
        X = {};
    X[dp] = X[hp] = X[_p] = X[gp] = X[yp] = X[vp] = X[mp] = X[bp] = X[Ep] = !0;
    X[Ql] = X[Zl] = X[lp] = X[ep] = X[pp] = X[tp] = X[rp] = X[np] = X[ip] = X[op] = X[sp] = X[ap] = X[cp] = X[up] = X[fp] = !1;

    function Sp(t) {
        return Xl(t) && Jl(t.length) && !!X[Vl(t)]
    }
    var wp = Sp;

    function Op(t) {
        return function(e) {
            return t(e)
        }
    }
    var kp = Op,
        yr = {},
        Tp = {
            get exports() {
                return yr
            },
            set exports(t) {
                yr = t
            }
        };
    (function(t, e) {
        var r = jo,
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
    })(Tp, yr);
    var Ap = wp,
        Rp = kp,
        Ci = yr,
        ji = Ci && Ci.isTypedArray,
        xp = ji ? Rp(ji) : Ap,
        Jo = xp;

    function Np(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var Xo = Np,
        Ip = qn,
        Lp = Nr,
        Pp = Object.prototype,
        $p = Pp.hasOwnProperty;

    function Dp(t, e, r) {
        var n = t[e];
        (!($p.call(t, e) && Lp(n, r)) || r === void 0 && !(e in t)) && Ip(t, e, r)
    }
    var Cp = Dp,
        jp = Cp,
        Up = qn;

    function Mp(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, s = e.length; ++o < s;) {
            var a = e[o],
                u = n ? n(r[a], t[a], a, r, t) : void 0;
            u === void 0 && (u = t[a]), i ? Up(r, a, u) : jp(r, a, u)
        }
        return r
    }
    var Bp = Mp;

    function Fp(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var qp = Fp,
        Gp = 9007199254740991,
        Hp = /^(?:0|[1-9]\d*)$/;

    function Yp(t, e) {
        var r = typeof t;
        return e = e ?? Gp, !!e && (r == "number" || r != "symbol" && Hp.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var Qo = Yp,
        Wp = qp,
        zp = Wo,
        Kp = zo,
        Vp = zt,
        Jp = Qo,
        Xp = Jo,
        Qp = Object.prototype,
        Zp = Qp.hasOwnProperty;

    function ed(t, e) {
        var r = Kp(t),
            n = !r && zp(t),
            i = !r && !n && Vp(t),
            o = !r && !n && !i && Xp(t),
            s = r || n || i || o,
            a = s ? Wp(t.length, String) : [],
            u = a.length;
        for (var f in t)(e || Zp.call(t, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Jp(f, u))) && a.push(f);
        return a
    }
    var td = ed;

    function rd(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var nd = rd,
        id = at,
        od = Ho,
        sd = nd,
        ad = Object.prototype,
        cd = ad.hasOwnProperty;

    function ud(t) {
        if (!id(t)) return sd(t);
        var e = od(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !cd.call(t, n)) || r.push(n);
        return r
    }
    var fd = ud,
        ld = td,
        pd = fd,
        dd = Gn;

    function hd(t) {
        return dd(t) ? ld(t, !0) : pd(t)
    }
    var Zo = hd,
        _d = Bp,
        gd = Zo;

    function yd(t) {
        return _d(t, gd(t))
    }
    var vd = yd,
        Ui = qo,
        md = gr,
        bd = Zf,
        Ed = tl,
        Sd = _l,
        Mi = Wo,
        Bi = zo,
        wd = Dl,
        Od = zt,
        kd = Bn,
        Td = at,
        Ad = Kl,
        Rd = Jo,
        Fi = Xo,
        xd = vd;

    function Nd(t, e, r, n, i, o, s) {
        var a = Fi(t, r),
            u = Fi(e, r),
            f = s.get(u);
        if (f) {
            Ui(t, r, f);
            return
        }
        var _ = o ? o(a, u, r + "", t, e, s) : void 0,
            y = _ === void 0;
        if (y) {
            var v = Bi(u),
                E = !v && Od(u),
                w = !v && !E && Rd(u);
            _ = u, v || E || w ? Bi(a) ? _ = a : wd(a) ? _ = Ed(a) : E ? (y = !1, _ = md(u, !0)) : w ? (y = !1, _ = bd(u, !0)) : _ = [] : Ad(u) || Mi(u) ? (_ = a, Mi(a) ? _ = xd(a) : (!Td(a) || kd(a)) && (_ = Sd(u))) : y = !1
        }
        y && (s.set(u, _), i(_, u, n, o, s), s.delete(u)), Ui(t, r, _)
    }
    var Id = Nd,
        Ld = Pf,
        Pd = qo,
        $d = Hf,
        Dd = Id,
        Cd = at,
        jd = Zo,
        Ud = Xo;

    function es(t, e, r, n, i) {
        t !== e && $d(e, function(o, s) {
            if (i || (i = new Ld), Cd(o)) Dd(t, e, s, r, es, n, i);
            else {
                var a = n ? n(Ud(t, s), o, s + "", t, e, i) : void 0;
                a === void 0 && (a = o), Pd(t, s, a)
            }
        }, jd)
    }
    var Md = es;

    function Bd(t) {
        return t
    }
    var ts = Bd;

    function Fd(t, e, r) {
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
    var qd = Fd,
        Gd = qd,
        qi = Math.max;

    function Hd(t, e, r) {
        return e = qi(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, o = qi(n.length - e, 0), s = Array(o); ++i < o;) s[i] = n[e + i];
                i = -1;
                for (var a = Array(e + 1); ++i < e;) a[i] = n[i];
                return a[e] = r(s), Gd(t, this, a)
            }
    }
    var Yd = Hd;

    function Wd(t) {
        return function() {
            return t
        }
    }
    var zd = Wd,
        Kd = zd,
        Gi = Fo,
        Vd = ts,
        Jd = Gi ? function(t, e) {
            return Gi(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Kd(e),
                writable: !0
            })
        } : Vd,
        Xd = Jd,
        Qd = 800,
        Zd = 16,
        eh = Date.now;

    function th(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = eh(),
                i = Zd - (n - r);
            if (r = n, i > 0) {
                if (++e >= Qd) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var rh = th,
        nh = Xd,
        ih = rh,
        oh = ih(nh),
        sh = oh,
        ah = ts,
        ch = Yd,
        uh = sh;

    function fh(t, e) {
        return uh(ch(t, e, ah), t + "")
    }
    var lh = fh,
        ph = Nr,
        dh = Gn,
        hh = Qo,
        _h = at;

    function gh(t, e, r) {
        if (!_h(r)) return !1;
        var n = typeof e;
        return (n == "number" ? dh(r) && hh(e, r.length) : n == "string" && e in r) ? ph(r[e], t) : !1
    }
    var yh = gh,
        vh = lh,
        mh = yh;

    function bh(t) {
        return vh(function(e, r) {
            var n = -1,
                i = r.length,
                o = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && mh(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                var a = r[n];
                a && t(e, a, n, o)
            }
            return e
        })
    }
    var Eh = bh,
        Sh = Md,
        wh = Eh;
    wh(function(t, e, r) {
        Sh(t, e, r)
    });
    const fi = class {
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
    let Pe = fi;
    Se(Pe, "queryParams", new URLSearchParams(window.location.search)), Se(Pe, "getQueryParam", e => fi.queryParams.get(e)), Se(Pe, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    class vr {
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
                namespace: Pe.getQueryParam("namespace") ?? Pe.getQueryParam("ns") ?? this.defaultNamespace,
                isDisabled: Pe.queryParams.has("incognito") || Pe.queryParams.has("nc")
            }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
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
        static migrateNamespace(e, r) {
            this.isSupported && Object.keys(window.localStorage).forEach(n => {
                if (!n.startsWith(`${e}-`)) return;
                const i = n.replace(`${e}-`, `${r}:`),
                    o = window.localStorage.getItem(n);
                o && (window.localStorage.setItem(i, o), window.localStorage.removeItem(n))
            })
        }
    }
    Se(vr, "defaultNamespace", "tv");
    var ln = {},
        Oh = {
            get exports() {
                return ln
            },
            set exports(t) {
                ln = t
            }
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
                    _ = ArrayBuffer.isView || function(m) {
                        return m && f.indexOf(Object.prototype.toString.call(m)) > -1
                    };

                function y(m) {
                    if (typeof m != "string" && (m = String(m)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(m)) throw new TypeError("Invalid character in header field name");
                    return m.toLowerCase()
                }

                function v(m) {
                    return typeof m != "string" && (m = String(m)), m
                }

                function E(m) {
                    var T = {
                        next: function() {
                            var D = m.shift();
                            return {
                                done: D === void 0,
                                value: D
                            }
                        }
                    };
                    return a.iterable && (T[Symbol.iterator] = function() {
                        return T
                    }), T
                }

                function w(m) {
                    this.map = {}, m instanceof w ? m.forEach(function(T, D) {
                        this.append(D, T)
                    }, this) : Array.isArray(m) ? m.forEach(function(T) {
                        this.append(T[0], T[1])
                    }, this) : m && Object.getOwnPropertyNames(m).forEach(function(T) {
                        this.append(T, m[T])
                    }, this)
                }
                w.prototype.append = function(m, T) {
                    m = y(m), T = v(T);
                    var D = this.map[m];
                    this.map[m] = D ? D + ", " + T : T
                }, w.prototype.delete = function(m) {
                    delete this.map[y(m)]
                }, w.prototype.get = function(m) {
                    return m = y(m), this.has(m) ? this.map[m] : null
                }, w.prototype.has = function(m) {
                    return this.map.hasOwnProperty(y(m))
                }, w.prototype.set = function(m, T) {
                    this.map[y(m)] = v(T)
                }, w.prototype.forEach = function(m, T) {
                    for (var D in this.map) this.map.hasOwnProperty(D) && m.call(T, this.map[D], D, this)
                }, w.prototype.keys = function() {
                    var m = [];
                    return this.forEach(function(T, D) {
                        m.push(D)
                    }), E(m)
                }, w.prototype.values = function() {
                    var m = [];
                    return this.forEach(function(T) {
                        m.push(T)
                    }), E(m)
                }, w.prototype.entries = function() {
                    var m = [];
                    return this.forEach(function(T, D) {
                        m.push([D, T])
                    }), E(m)
                }, a.iterable && (w.prototype[Symbol.iterator] = w.prototype.entries);

                function I(m) {
                    if (m.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    m.bodyUsed = !0
                }

                function L(m) {
                    return new Promise(function(T, D) {
                        m.onload = function() {
                            T(m.result)
                        }, m.onerror = function() {
                            D(m.error)
                        }
                    })
                }

                function J(m) {
                    var T = new FileReader,
                        D = L(T);
                    return T.readAsArrayBuffer(m), D
                }

                function G(m) {
                    var T = new FileReader,
                        D = L(T);
                    return T.readAsText(m), D
                }

                function oe(m) {
                    for (var T = new Uint8Array(m), D = new Array(T.length), W = 0; W < T.length; W++) D[W] = String.fromCharCode(T[W]);
                    return D.join("")
                }

                function ye(m) {
                    if (m.slice) return m.slice(0);
                    var T = new Uint8Array(m.byteLength);
                    return T.set(new Uint8Array(m)), T.buffer
                }

                function se() {
                    return this.bodyUsed = !1, this._initBody = function(m) {
                        this._bodyInit = m, m ? typeof m == "string" ? this._bodyText = m : a.blob && Blob.prototype.isPrototypeOf(m) ? this._bodyBlob = m : a.formData && FormData.prototype.isPrototypeOf(m) ? this._bodyFormData = m : a.searchParams && URLSearchParams.prototype.isPrototypeOf(m) ? this._bodyText = m.toString() : a.arrayBuffer && a.blob && u(m) ? (this._bodyArrayBuffer = ye(m.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(m) || _(m)) ? this._bodyArrayBuffer = ye(m) : this._bodyText = m = Object.prototype.toString.call(m) : this._bodyText = "", this.headers.get("content-type") || (typeof m == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(m) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
                        if (this._bodyBlob) return G(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(oe(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, a.formData && (this.formData = function() {
                        return this.text().then(H)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var ae = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function he(m) {
                    var T = m.toUpperCase();
                    return ae.indexOf(T) > -1 ? T : m
                }

                function te(m, T) {
                    T = T || {};
                    var D = T.body;
                    if (m instanceof te) {
                        if (m.bodyUsed) throw new TypeError("Already read");
                        this.url = m.url, this.credentials = m.credentials, T.headers || (this.headers = new w(m.headers)), this.method = m.method, this.mode = m.mode, this.signal = m.signal, !D && m._bodyInit != null && (D = m._bodyInit, m.bodyUsed = !0)
                    } else this.url = String(m);
                    if (this.credentials = T.credentials || this.credentials || "same-origin", (T.headers || !this.headers) && (this.headers = new w(T.headers)), this.method = he(T.method || this.method || "GET"), this.mode = T.mode || this.mode || null, this.signal = T.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && D) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(D)
                }
                te.prototype.clone = function() {
                    return new te(this, {
                        body: this._bodyInit
                    })
                };

                function H(m) {
                    var T = new FormData;
                    return m.trim().split("&").forEach(function(D) {
                        if (D) {
                            var W = D.split("="),
                                Y = W.shift().replace(/\+/g, " "),
                                C = W.join("=").replace(/\+/g, " ");
                            T.append(decodeURIComponent(Y), decodeURIComponent(C))
                        }
                    }), T
                }

                function Ct(m) {
                    var T = new w,
                        D = m.replace(/\r?\n[\t ]+/g, " ");
                    return D.split(/\r?\n/).forEach(function(W) {
                        var Y = W.split(":"),
                            C = Y.shift().trim();
                        if (C) {
                            var b = Y.join(":").trim();
                            T.append(C, b)
                        }
                    }), T
                }
                se.call(te.prototype);

                function pe(m, T) {
                    T || (T = {}), this.type = "default", this.status = T.status === void 0 ? 200 : T.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in T ? T.statusText : "OK", this.headers = new w(T.headers), this.url = T.url || "", this._initBody(m)
                }
                se.call(pe.prototype), pe.prototype.clone = function() {
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
                var Je = [301, 302, 303, 307, 308];
                pe.redirect = function(m, T) {
                    if (Je.indexOf(T) === -1) throw new RangeError("Invalid status code");
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
                    s.DOMException = function(T, D) {
                        this.message = T, this.name = D;
                        var W = Error(T);
                        this.stack = W.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function be(m, T) {
                    return new Promise(function(D, W) {
                        var Y = new te(m, T);
                        if (Y.signal && Y.signal.aborted) return W(new s.DOMException("Aborted", "AbortError"));
                        var C = new XMLHttpRequest;

                        function b() {
                            C.abort()
                        }
                        C.onload = function() {
                            var A = {
                                status: C.status,
                                statusText: C.statusText,
                                headers: Ct(C.getAllResponseHeaders() || "")
                            };
                            A.url = "responseURL" in C ? C.responseURL : A.headers.get("X-Request-URL");
                            var x = "response" in C ? C.response : C.responseText;
                            D(new pe(x, A))
                        }, C.onerror = function() {
                            W(new TypeError("Network request failed"))
                        }, C.ontimeout = function() {
                            W(new TypeError("Network request failed"))
                        }, C.onabort = function() {
                            W(new s.DOMException("Aborted", "AbortError"))
                        }, C.open(Y.method, Y.url, !0), Y.credentials === "include" ? C.withCredentials = !0 : Y.credentials === "omit" && (C.withCredentials = !1), "responseType" in C && a.blob && (C.responseType = "blob"), Y.headers.forEach(function(A, x) {
                            C.setRequestHeader(x, A)
                        }), Y.signal && (Y.signal.addEventListener("abort", b), C.onreadystatechange = function() {
                            C.readyState === 4 && Y.signal.removeEventListener("abort", b)
                        }), C.send(typeof Y._bodyInit > "u" ? null : Y._bodyInit)
                    })
                }
                return be.polyfill = !0, o.fetch || (o.fetch = be, o.Headers = w, o.Request = te, o.Response = pe), s.Headers = w, s.Request = te, s.Response = pe, s.fetch = be, Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = n;
        e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
    })(Oh, ln);
    var kh = function() {
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
        Hi = typeof Symbol < "u" && Symbol,
        Th = kh,
        Ah = function() {
            return typeof Hi != "function" || typeof Symbol != "function" || typeof Hi("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Th()
        },
        Rh = "Function.prototype.bind called on incompatible ",
        Jr = Array.prototype.slice,
        xh = Object.prototype.toString,
        Nh = "[object Function]",
        Ih = function(e) {
            var r = this;
            if (typeof r != "function" || xh.call(r) !== Nh) throw new TypeError(Rh + r);
            for (var n = Jr.call(arguments, 1), i, o = function() {
                    if (this instanceof i) {
                        var _ = r.apply(this, n.concat(Jr.call(arguments)));
                        return Object(_) === _ ? _ : this
                    } else return r.apply(e, n.concat(Jr.call(arguments)))
                }, s = Math.max(0, r.length - n.length), a = [], u = 0; u < s; u++) a.push("$" + u);
            if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var f = function() {};
                f.prototype = r.prototype, i.prototype = new f, f.prototype = null
            }
            return i
        },
        Lh = Ih,
        Hn = Function.prototype.bind || Lh,
        Ph = Hn,
        $h = Ph.call(Function.call, Object.prototype.hasOwnProperty),
        M, Ot = SyntaxError,
        rs = Function,
        ht = TypeError,
        Xr = function(t) {
            try {
                return rs('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        rt = Object.getOwnPropertyDescriptor;
    if (rt) try {
        rt({}, "")
    } catch {
        rt = null
    }
    var Qr = function() {
            throw new ht
        },
        Dh = rt ? function() {
            try {
                return arguments.callee, Qr
            } catch {
                try {
                    return rt(arguments, "callee").get
                } catch {
                    return Qr
                }
            }
        }() : Qr,
        ut = Ah(),
        Ce = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        ft = {},
        Ch = typeof Uint8Array > "u" ? M : Ce(Uint8Array),
        _t = {
            "%AggregateError%": typeof AggregateError > "u" ? M : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? M : ArrayBuffer,
            "%ArrayIteratorPrototype%": ut ? Ce([][Symbol.iterator]()) : M,
            "%AsyncFromSyncIteratorPrototype%": M,
            "%AsyncFunction%": ft,
            "%AsyncGenerator%": ft,
            "%AsyncGeneratorFunction%": ft,
            "%AsyncIteratorPrototype%": ft,
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
            "%Function%": rs,
            "%GeneratorFunction%": ft,
            "%Int8Array%": typeof Int8Array > "u" ? M : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? M : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? M : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": ut ? Ce(Ce([][Symbol.iterator]())) : M,
            "%JSON%": typeof JSON == "object" ? JSON : M,
            "%Map%": typeof Map > "u" ? M : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !ut ? M : Ce(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !ut ? M : Ce(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? M : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": ut ? Ce("" [Symbol.iterator]()) : M,
            "%Symbol%": ut ? Symbol : M,
            "%SyntaxError%": Ot,
            "%ThrowTypeError%": Dh,
            "%TypedArray%": Ch,
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
        jh = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = Xr("async function () {}");
            else if (e === "%GeneratorFunction%") r = Xr("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = Xr("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var i = t("%AsyncGenerator%");
                i && (r = Ce(i.prototype))
            }
            return _t[e] = r, r
        },
        Yi = {
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
        tr = Hn,
        mr = $h,
        Uh = tr.call(Function.call, Array.prototype.concat),
        Mh = tr.call(Function.apply, Array.prototype.splice),
        Wi = tr.call(Function.call, String.prototype.replace),
        br = tr.call(Function.call, String.prototype.slice),
        Bh = tr.call(Function.call, RegExp.prototype.exec),
        Fh = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        qh = /\\(\\)?/g,
        Gh = function(e) {
            var r = br(e, 0, 1),
                n = br(e, -1);
            if (r === "%" && n !== "%") throw new Ot("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Ot("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return Wi(e, Fh, function(o, s, a, u) {
                i[i.length] = a ? Wi(u, qh, "$1") : s || o
            }), i
        },
        Hh = function(e, r) {
            var n = e,
                i;
            if (mr(Yi, n) && (i = Yi[n], n = "%" + i[0] + "%"), mr(_t, n)) {
                var o = _t[n];
                if (o === ft && (o = jh(n)), typeof o > "u" && !r) throw new ht("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: o
                }
            }
            throw new Ot("intrinsic " + e + " does not exist!")
        },
        Yn = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new ht("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new ht('"allowMissing" argument must be a boolean');
            if (Bh(/^%?[^%]*%?$/g, e) === null) throw new Ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = Gh(e),
                i = n.length > 0 ? n[0] : "",
                o = Hh("%" + i + "%", r),
                s = o.name,
                a = o.value,
                u = !1,
                f = o.alias;
            f && (i = f[0], Mh(n, Uh([0, 1], f)));
            for (var _ = 1, y = !0; _ < n.length; _ += 1) {
                var v = n[_],
                    E = br(v, 0, 1),
                    w = br(v, -1);
                if ((E === '"' || E === "'" || E === "`" || w === '"' || w === "'" || w === "`") && E !== w) throw new Ot("property names with quotes must have matching quotes");
                if ((v === "constructor" || !y) && (u = !0), i += "." + v, s = "%" + i + "%", mr(_t, s)) a = _t[s];
                else if (a != null) {
                    if (!(v in a)) {
                        if (!r) throw new ht("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (rt && _ + 1 >= n.length) {
                        var I = rt(a, v);
                        y = !!I, y && "get" in I && !("originalValue" in I.get) ? a = I.get : a = a[v]
                    } else y = mr(a, v), a = a[v];
                    y && !u && (_t[s] = a)
                }
            }
            return a
        },
        pn = {},
        Yh = {
            get exports() {
                return pn
            },
            set exports(t) {
                pn = t
            }
        };
    (function(t) {
        var e = Hn,
            r = Yn,
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
        t.exports = function(y) {
            var v = o(e, i, arguments);
            if (s && a) {
                var E = s(v, "length");
                E.configurable && a(v, "length", {
                    value: 1 + u(0, y.length - (arguments.length - 1))
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
    })(Yh);
    var ns = Yn,
        is = pn,
        Wh = is(ns("String.prototype.indexOf")),
        zh = function(e, r) {
            var n = ns(e, !!r);
            return typeof n == "function" && Wh(e, ".prototype.") > -1 ? is(n) : n
        },
        Wn = Yn,
        $t = zh;
    Wn("%TypeError%");
    Wn("%WeakMap%", !0);
    Wn("%Map%", !0);
    $t("WeakMap.prototype.get", !0);
    $t("WeakMap.prototype.set", !0);
    $t("WeakMap.prototype.has", !0);
    $t("Map.prototype.get", !0);
    $t("Map.prototype.set", !0);
    $t("Map.prototype.has", !0);
    (function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    })();
    typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof me < "u" && (me.WebSocket || me.MozWebSocket));
    var dn = {},
        Kh = {
            get exports() {
                return dn
            },
            set exports(t) {
                dn = t
            }
        },
        gt = typeof Reflect == "object" ? Reflect : null,
        zi = gt && typeof gt.apply == "function" ? gt.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        ur;
    gt && typeof gt.ownKeys == "function" ? ur = gt.ownKeys : Object.getOwnPropertySymbols ? ur = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : ur = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function Vh(t) {
        console && console.warn && console.warn(t)
    }
    var os = Number.isNaN || function(e) {
        return e !== e
    };

    function K() {
        K.init.call(this)
    }
    Kh.exports = K;
    dn.once = Zh;
    K.EventEmitter = K;
    K.prototype._events = void 0;
    K.prototype._eventsCount = 0;
    K.prototype._maxListeners = void 0;
    var Ki = 10;

    function Cr(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(K, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Ki
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || os(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            Ki = t
        }
    });
    K.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    K.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || os(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function ss(t) {
        return t._maxListeners === void 0 ? K.defaultMaxListeners : t._maxListeners
    }
    K.prototype.getMaxListeners = function() {
        return ss(this)
    };
    K.prototype.emit = function(e) {
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
        if (typeof u == "function") zi(u, this, r);
        else
            for (var f = u.length, _ = ls(u, f), n = 0; n < f; ++n) zi(_[n], this, r);
        return !0
    };

    function as(t, e, r, n) {
        var i, o, s;
        if (Cr(r), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), s === void 0) s = o[e] = r, ++t._eventsCount;
        else if (typeof s == "function" ? s = o[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = ss(t), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, Vh(a)
        }
        return t
    }
    K.prototype.addListener = function(e, r) {
        return as(this, e, r, !1)
    };
    K.prototype.on = K.prototype.addListener;
    K.prototype.prependListener = function(e, r) {
        return as(this, e, r, !0)
    };

    function Jh() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function cs(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = Jh.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    K.prototype.once = function(e, r) {
        return Cr(r), this.on(e, cs(this, e, r)), this
    };
    K.prototype.prependOnceListener = function(e, r) {
        return Cr(r), this.prependListener(e, cs(this, e, r)), this
    };
    K.prototype.removeListener = function(e, r) {
        var n, i, o, s, a;
        if (Cr(r), i = this._events, i === void 0) return this;
        if (n = i[e], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === r || n[s].listener === r) {
                    a = n[s].listener, o = s;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : Xh(n, o), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r)
        }
        return this
    };
    K.prototype.off = K.prototype.removeListener;
    K.prototype.removeAllListeners = function(e) {
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

    function us(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Qh(i) : ls(i, i.length)
    }
    K.prototype.listeners = function(e) {
        return us(this, e, !0)
    };
    K.prototype.rawListeners = function(e) {
        return us(this, e, !1)
    };
    K.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : fs.call(t, e)
    };
    K.prototype.listenerCount = fs;

    function fs(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    K.prototype.eventNames = function() {
        return this._eventsCount > 0 ? ur(this._events) : []
    };

    function ls(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function Xh(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function Qh(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function Zh(t, e) {
        return new Promise(function(r, n) {
            function i(s) {
                t.removeListener(e, o), n(s)
            }

            function o() {
                typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
            }
            ps(t, e, o, {
                once: !0
            }), e !== "error" && e_(t, i, {
                once: !0
            })
        })
    }

    function e_(t, e, r) {
        typeof t.on == "function" && ps(t, "error", e, r)
    }

    function ps(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }

    function t_(...t) {
        console.log(...t)
    }

    function r_(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var hn = {},
        n_ = {
            get exports() {
                return hn
            },
            set exports(t) {
                hn = t
            }
        };
    (function(t, e) {
        (function(r, n) {
            n(e)
        })(me, function(r) {
            var n = typeof window < "u" ? window : typeof me < "u" ? me : typeof self < "u" ? self : {},
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
                    var h = a(l[1]),
                        O = a(l[2]);
                    h === null || O === null || h in g || (g[h] = O)
                }
                return g
            }

            function _(d, p) {
                p = p || "";
                var g = [],
                    l, h;
                typeof p != "string" && (p = "?");
                for (h in d)
                    if (o.call(d, h)) {
                        if (l = d[h], !l && (l === null || l === s || isNaN(l)) && (l = ""), h = u(h), l = u(l), h === null || l === null) continue;
                        g.push(h + "=" + l)
                    } return g.length ? p + g.join("&") : ""
            }
            var y = _,
                v = f,
                E = {
                    stringify: y,
                    parse: v
                },
                w = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                I = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                L = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                J = new RegExp("^" + L + "+");

            function G(d) {
                return (d || "").toString().replace(J, "")
            }
            var oe = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(p, g) {
                        return ae(g.protocol) ? p.replace(/\\/g, "/") : p
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

            function se(d) {
                var p;
                typeof window < "u" ? p = window : typeof n < "u" ? p = n : typeof self < "u" ? p = self : p = {};
                var g = p.location || {};
                d = d || g;
                var l = {},
                    h = typeof d,
                    O;
                if (d.protocol === "blob:") l = new H(unescape(d.pathname), {});
                else if (h === "string") {
                    l = new H(d, {});
                    for (O in ye) delete l[O]
                } else if (h === "object") {
                    for (O in d) O in ye || (l[O] = d[O]);
                    l.slashes === void 0 && (l.slashes = w.test(d.href))
                }
                return l
            }

            function ae(d) {
                return d === "file:" || d === "ftp:" || d === "http:" || d === "https:" || d === "ws:" || d === "wss:"
            }

            function he(d, p) {
                d = G(d), p = p || {};
                var g = I.exec(d),
                    l = g[1] ? g[1].toLowerCase() : "",
                    h = !!g[2],
                    O = !!g[3],
                    k = 0,
                    R;
                return h ? O ? (R = g[2] + g[3] + g[4], k = g[2].length + g[3].length) : (R = g[2] + g[4], k = g[2].length) : O ? (R = g[3] + g[4], k = g[3].length) : R = g[4], l === "file:" ? k >= 2 && (R = R.slice(2)) : ae(l) ? R = g[4] : l ? h && (R = R.slice(2)) : k >= 2 && ae(p.protocol) && (R = g[4]), {
                    protocol: l,
                    slashes: h || ae(l),
                    slashesCount: k,
                    rest: R
                }
            }

            function te(d, p) {
                if (d === "") return p;
                for (var g = (p || "/").split("/").slice(0, -1).concat(d.split("/")), l = g.length, h = g[l - 1], O = !1, k = 0; l--;) g[l] === "." ? g.splice(l, 1) : g[l] === ".." ? (g.splice(l, 1), k++) : k && (l === 0 && (O = !0), g.splice(l, 1), k--);
                return O && g.unshift(""), (h === "." || h === "..") && g.push(""), g.join("/")
            }

            function H(d, p, g) {
                if (d = G(d), !(this instanceof H)) return new H(d, p, g);
                var l, h, O, k, R, N, ge = oe.slice(),
                    ke = typeof p,
                    P = this,
                    Yr = 0;
                for (ke !== "object" && ke !== "string" && (g = p, p = null), g && typeof g != "function" && (g = E.parse), p = se(p), h = he(d || "", p), l = !h.protocol && !h.slashes, P.slashes = h.slashes || l && p.slashes, P.protocol = h.protocol || p.protocol || "", d = h.rest, (P.protocol === "file:" || !h.slashes && (h.protocol || h.slashesCount < 2 || !ae(P.protocol))) && (ge[3] = [/(.*)/, "pathname"]); Yr < ge.length; Yr++) {
                    if (k = ge[Yr], typeof k == "function") {
                        d = k(d, P);
                        continue
                    }
                    O = k[0], N = k[1], O !== O ? P[N] = d : typeof O == "string" ? ~(R = d.indexOf(O)) && (typeof k[2] == "number" ? (P[N] = d.slice(0, R), d = d.slice(R + k[2])) : (P[N] = d.slice(R), d = d.slice(0, R))) : (R = O.exec(d)) && (P[N] = R[1], d = d.slice(0, R.index)), P[N] = P[N] || l && k[3] && p[N] || "", k[4] && (P[N] = P[N].toLowerCase())
                }
                g && (P.query = g(P.query)), l && p.slashes && P.pathname.charAt(0) !== "/" && (P.pathname !== "" || p.pathname !== "") && (P.pathname = te(P.pathname, p.pathname)), P.pathname.charAt(0) !== "/" && ae(P.protocol) && (P.pathname = "/" + P.pathname), i(P.port, P.protocol) || (P.host = P.hostname, P.port = ""), P.username = P.password = "", P.auth && (k = P.auth.split(":"), P.username = k[0] || "", P.password = k[1] || ""), P.origin = P.protocol !== "file:" && ae(P.protocol) && P.host ? P.protocol + "//" + P.host : "null", P.href = P.toString()
            }

            function Ct(d, p, g) {
                var l = this;
                switch (d) {
                    case "query":
                        typeof p == "string" && p.length && (p = (g || E.parse)(p)), l[d] = p;
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
                            var h = d === "pathname" ? "/" : "#";
                            l[d] = p.charAt(0) !== h ? h + p : p
                        } else l[d] = p;
                        break;
                    default:
                        l[d] = p
                }
                for (var O = 0; O < oe.length; O++) {
                    var k = oe[O];
                    k[4] && (l[k[1]] = l[k[1]].toLowerCase())
                }
                return l.origin = l.protocol !== "file:" && ae(l.protocol) && l.host ? l.protocol + "//" + l.host : "null", l.href = l.toString(), l
            }

            function pe(d) {
                (!d || typeof d != "function") && (d = E.stringify);
                var p, g = this,
                    l = g.protocol;
                l && l.charAt(l.length - 1) !== ":" && (l += ":");
                var h = l + (g.slashes || ae(g.protocol) ? "//" : "");
                return g.username && (h += g.username, g.password && (h += ":" + g.password), h += "@"), h += g.host + g.pathname, p = typeof g.query == "object" ? d(g.query) : g.query, p && (h += p.charAt(0) !== "?" ? "?" + p : p), g.hash && (h += g.hash), h
            }
            H.prototype = {
                set: Ct,
                toString: pe
            }, H.extractProtocol = he, H.location = se, H.trimLeft = G, H.qs = E;
            var Je = H;

            function be(d, p) {
                setTimeout(function(g) {
                    return d.call(g)
                }, 4, p)
            }

            function m(d, p) {
                typeof process < "u" && console[d].call(null, p)
            }

            function T(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) || g.push(l)
                }), g
            }

            function D(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) && g.push(l)
                }), g
            }
            var W = function() {
                this.listeners = {}
            };
            W.prototype.addEventListener = function(p, g) {
                typeof g == "function" && (Array.isArray(this.listeners[p]) || (this.listeners[p] = []), D(this.listeners[p], function(l) {
                    return l === g
                }).length === 0 && this.listeners[p].push(g))
            }, W.prototype.removeEventListener = function(p, g) {
                var l = this.listeners[p];
                this.listeners[p] = T(l, function(h) {
                    return h === g
                })
            }, W.prototype.dispatchEvent = function(p) {
                for (var g = this, l = [], h = arguments.length - 1; h-- > 0;) l[h] = arguments[h + 1];
                var O = p.type,
                    k = this.listeners[O];
                return Array.isArray(k) ? (k.forEach(function(R) {
                    l.length > 0 ? R.apply(g, l) : R.call(g, p)
                }), !0) : !1
            };

            function Y(d) {
                var p = d.indexOf("?");
                return p >= 0 ? d.slice(0, p) : d
            }
            var C = function() {
                this.urlMap = {}
            };
            C.prototype.attachWebSocket = function(p, g) {
                var l = Y(g),
                    h = this.urlMap[l];
                if (h && h.server && h.websockets.indexOf(p) === -1) return h.websockets.push(p), h.server
            }, C.prototype.addMembershipToRoom = function(p, g) {
                var l = this.urlMap[Y(p.url)];
                l && l.server && l.websockets.indexOf(p) !== -1 && (l.roomMemberships[g] || (l.roomMemberships[g] = []), l.roomMemberships[g].push(p))
            }, C.prototype.attachServer = function(p, g) {
                var l = Y(g),
                    h = this.urlMap[l];
                if (!h) return this.urlMap[l] = {
                    server: p,
                    websockets: [],
                    roomMemberships: {}
                }, p
            }, C.prototype.serverLookup = function(p) {
                var g = Y(p),
                    l = this.urlMap[g];
                if (l) return l.server
            }, C.prototype.websocketsLookup = function(p, g, l) {
                var h = Y(p),
                    O, k = this.urlMap[h];
                if (O = k ? k.websockets : [], g) {
                    var R = k.roomMemberships[g];
                    O = R || []
                }
                return l ? O.filter(function(N) {
                    return N !== l
                }) : O
            }, C.prototype.removeServer = function(p) {
                delete this.urlMap[Y(p)]
            }, C.prototype.removeWebSocket = function(p, g) {
                var l = Y(g),
                    h = this.urlMap[l];
                h && (h.websockets = T(h.websockets, function(O) {
                    return O === p
                }))
            }, C.prototype.removeMembershipFromRoom = function(p, g) {
                var l = this.urlMap[Y(p.url)],
                    h = l.roomMemberships[g];
                l && h !== null && (l.roomMemberships[g] = T(h, function(O) {
                    return O === p
                }))
            };
            var b = new C,
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
            B.prototype.stopPropagation = function() {}, B.prototype.stopImmediatePropagation = function() {}, B.prototype.initEvent = function(p, g, l) {
                p === void 0 && (p = "undefined"), g === void 0 && (g = !1), l === void 0 && (l = !1), this.type = "" + p, this.bubbles = !!g, this.cancelable = !!l
            };
            var F = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(x.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(x.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var h = l.bubbles,
                            O = l.cancelable;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = O ? !!O : !1, this.cancelBubble = !1, this.bubbles = h ? !!h : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(B),
                Ee = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(x.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(x.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var h = l.bubbles,
                            O = l.cancelable,
                            k = l.data,
                            R = l.origin,
                            N = l.lastEventId,
                            ge = l.ports;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = O ? !!O : !1, this.canncelBubble = !1, this.bubbles = h ? !!h : !1, this.origin = "" + R, this.ports = typeof ge > "u" ? null : ge, this.data = typeof k > "u" ? null : k, this.lastEventId = "" + (N || "")
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(B),
                Xe = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(x.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(x.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var h = l.bubbles,
                            O = l.cancelable,
                            k = l.code,
                            R = l.reason,
                            N = l.wasClean;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = O ? !!O : !1, this.cancelBubble = !1, this.bubbles = h ? !!h : !1, this.code = typeof k == "number" ? parseInt(k, 10) : 0, this.reason = "" + (R || ""), this.wasClean = N ? !!N : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(B);

            function _e(d) {
                var p = d.type,
                    g = d.target,
                    l = new F(p);
                return g && (l.target = g, l.srcElement = g, l.currentTarget = g), l
            }

            function Qe(d) {
                var p = d.type,
                    g = d.origin,
                    l = d.data,
                    h = d.target,
                    O = new Ee(p, {
                        data: l,
                        origin: g
                    });
                return h && (O.target = h, O.srcElement = h, O.currentTarget = h), O
            }

            function ve(d) {
                var p = d.code,
                    g = d.reason,
                    l = d.type,
                    h = d.target,
                    O = d.wasClean;
                O || (O = p === A.CLOSE_NORMAL || p === A.CLOSE_NO_STATUS);
                var k = new Xe(l, {
                    code: p,
                    reason: g,
                    wasClean: O
                });
                return h && (k.target = h, k.srcElement = h, k.currentTarget = h), k
            }

            function li(d, p, g) {
                d.readyState = re.CLOSING;
                var l = b.serverLookup(d.url),
                    h = ve({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: g
                    }),
                    O = ve({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: g
                    });
                be(function() {
                    b.removeWebSocket(d, d.url), d.readyState = re.CLOSED, d.dispatchEvent(h), d.dispatchEvent(O), l && l.dispatchEvent(h, l)
                }, d)
            }

            function ia(d, p, g) {
                d.readyState = re.CLOSING;
                var l = b.serverLookup(d.url),
                    h = ve({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: g,
                        wasClean: !1
                    }),
                    O = ve({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: g,
                        wasClean: !1
                    }),
                    k = _e({
                        type: "error",
                        target: d.target
                    });
                be(function() {
                    b.removeWebSocket(d, d.url), d.readyState = re.CLOSED, d.dispatchEvent(k), d.dispatchEvent(h), d.dispatchEvent(O), l && l.dispatchEvent(h, l)
                }, d)
            }

            function nr(d) {
                return Object.prototype.toString.call(d) !== "[object Blob]" && !(d instanceof ArrayBuffer) && (d = String(d)), d
            }
            var qr = new WeakMap;

            function pi(d) {
                if (qr.has(d)) return qr.get(d);
                var p = new Proxy(d, {
                    get: function(l, h) {
                        return h === "close" ? function(k) {
                            k === void 0 && (k = {});
                            var R = k.code || A.CLOSE_NORMAL,
                                N = k.reason || "";
                            li(p, R, N)
                        } : h === "send" ? function(k) {
                            k = nr(k), d.dispatchEvent(Qe({
                                type: "message",
                                data: k,
                                origin: this.url,
                                target: d
                            }))
                        } : h === "on" ? function(k, R) {
                            d.addEventListener("server::" + k, R)
                        } : h === "target" ? d : l[h]
                    }
                });
                return qr.set(d, p), p
            }

            function oa(d) {
                var p = encodeURIComponent(d).match(/%[89ABab]/g);
                return d.length + (p ? p.length : 0)
            }

            function sa(d) {
                var p = new Je(d),
                    g = p.pathname,
                    l = p.protocol,
                    h = p.hash;
                if (!d) throw new TypeError(x.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (g || (p.pathname = "/"), l === "") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The URL '" + p.toString() + "' is invalid.");
                if (l !== "ws:" && l !== "wss:") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + l + "' is not allowed.");
                if (h !== "") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + h + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return p.toString()
            }

            function aa(d) {
                if (d === void 0 && (d = []), !Array.isArray(d) && typeof d != "string") throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The subprotocol '" + d.toString() + "' is invalid.");
                typeof d == "string" && (d = [d]);
                var p = d.map(function(l) {
                        return {
                            count: 1,
                            protocol: l
                        }
                    }).reduce(function(l, h) {
                        return l[h.protocol] = (l[h.protocol] || 0) + h.count, l
                    }, {}),
                    g = Object.keys(p).filter(function(l) {
                        return p[l] > 1
                    });
                if (g.length > 0) throw new SyntaxError(x.CONSTRUCTOR_ERROR + " The subprotocol '" + g[0] + "' is duplicated.");
                return d
            }
            var re = function(d) {
                function p(l, h) {
                    d.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = sa(l), h = aa(h), this.protocol = h[0] || "", this.binaryType = "blob", this.readyState = p.CONNECTING;
                    var O = pi(this),
                        k = b.attachWebSocket(O, this.url);
                    be(function() {
                        if (k)
                            if (k.options.verifyClient && typeof k.options.verifyClient == "function" && !k.options.verifyClient()) this.readyState = p.CLOSED, m("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), b.removeWebSocket(O, this.url), this.dispatchEvent(_e({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(ve({
                                type: "close",
                                target: this,
                                code: A.CLOSE_NORMAL
                            }));
                            else {
                                if (k.options.selectProtocol && typeof k.options.selectProtocol == "function") {
                                    var N = k.options.selectProtocol(h),
                                        ge = N !== "",
                                        ke = h.indexOf(N) !== -1;
                                    if (ge && !ke) {
                                        this.readyState = p.CLOSED, m("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), b.removeWebSocket(O, this.url), this.dispatchEvent(_e({
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
                }, p.prototype.send = function(h) {
                    var O = this;
                    if (this.readyState === p.CLOSING || this.readyState === p.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var k = Qe({
                            type: "server::message",
                            origin: this.url,
                            data: nr(h)
                        }),
                        R = b.serverLookup(this.url);
                    R && be(function() {
                        O.dispatchEvent(k, h)
                    }, R)
                }, p.prototype.close = function(h, O) {
                    if (h !== void 0 && (typeof h != "number" || h !== 1e3 && (h < 3e3 || h > 4999))) throw new TypeError(x.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + h + " is neither.");
                    if (O !== void 0) {
                        var k = oa(O);
                        if (k > 123) throw new SyntaxError(x.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === p.CLOSING || this.readyState === p.CLOSED)) {
                        var R = pi(this);
                        this.readyState === p.CONNECTING ? ia(R, h || A.CLOSE_ABNORMAL, O) : li(R, h || A.CLOSE_NO_STATUS, O)
                    }
                }, Object.defineProperties(p.prototype, g), p
            }(W);
            re.CONNECTING = 0, re.prototype.CONNECTING = re.CONNECTING, re.OPEN = 1, re.prototype.OPEN = re.OPEN, re.CLOSING = 2, re.prototype.CLOSING = re.CLOSING, re.CLOSED = 3, re.prototype.CLOSED = re.CLOSED;
            var ca = function(d) {
                return d.reduce(function(p, g) {
                    return p.indexOf(g) > -1 ? p : p.concat(g)
                }, [])
            };

            function di() {
                return typeof window < "u" ? window : typeof process == "object" && typeof r_ == "function" && typeof me == "object" ? me : this
            }
            var hi = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                Gr = function(d) {
                    function p(g, l) {
                        l === void 0 && (l = hi), d.call(this);
                        var h = new Je(g);
                        h.pathname || (h.pathname = "/"), this.url = h.toString(), this.originalWebSocket = null;
                        var O = b.attachServer(this, this.url);
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
                        l === void 0 && (l = function() {}), this.options.mock && this.restoreWebsocket(), b.removeServer(this.url), typeof l == "function" && l()
                    }, p.prototype.on = function(l, h) {
                        this.addEventListener(l, h)
                    }, p.prototype.close = function(l) {
                        l === void 0 && (l = {});
                        var h = l.code,
                            O = l.reason,
                            k = l.wasClean,
                            R = b.websocketsLookup(this.url);
                        b.removeServer(this.url), R.forEach(function(N) {
                            N.readyState = re.CLOSED, N.dispatchEvent(ve({
                                type: "close",
                                target: N.target,
                                code: h || A.CLOSE_NORMAL,
                                reason: O || "",
                                wasClean: k
                            }))
                        }), this.dispatchEvent(ve({
                            type: "close"
                        }), this)
                    }, p.prototype.emit = function(l, h, O) {
                        var k = this;
                        O === void 0 && (O = {});
                        var R = O.websockets;
                        R || (R = b.websocketsLookup(this.url)), typeof O != "object" || arguments.length > 3 ? (h = Array.prototype.slice.call(arguments, 1, arguments.length), h = h.map(function(N) {
                            return nr(N)
                        })) : h = nr(h), R.forEach(function(N) {
                            Array.isArray(h) ? N.dispatchEvent.apply(N, [Qe({
                                type: l,
                                data: h,
                                origin: k.url,
                                target: N.target
                            })].concat(h)) : N.dispatchEvent(Qe({
                                type: l,
                                data: h,
                                origin: k.url,
                                target: N.target
                            }))
                        })
                    }, p.prototype.clients = function() {
                        return b.websocketsLookup(this.url)
                    }, p.prototype.to = function(l, h, O) {
                        var k = this;
                        O === void 0 && (O = []);
                        var R = this,
                            N = ca(O.concat(b.websocketsLookup(this.url, l, h)));
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
                        for (var l = [], h = arguments.length; h--;) l[h] = arguments[h];
                        return this.to.apply(null, l)
                    }, p.prototype.simulate = function(l) {
                        var h = b.websocketsLookup(this.url);
                        l === "error" && h.forEach(function(O) {
                            O.readyState = re.CLOSED, O.dispatchEvent(_e({
                                type: "error"
                            }))
                        })
                    }, p
                }(W);
            Gr.of = function(p) {
                return new Gr(p)
            };
            var jt = function(d) {
                function p(l, h) {
                    var O = this;
                    l === void 0 && (l = "socket.io"), h === void 0 && (h = ""), d.call(this), this.binaryType = "blob";
                    var k = new Je(l);
                    k.pathname || (k.pathname = "/"), this.url = k.toString(), this.readyState = p.CONNECTING, this.protocol = "", this.target = this, typeof h == "string" || typeof h == "object" && h !== null ? this.protocol = h : Array.isArray(h) && h.length > 0 && (this.protocol = h[0]);
                    var R = b.attachWebSocket(this, this.url);
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
                var g = {
                    broadcast: {}
                };
                return p.prototype.close = function() {
                    if (this.readyState === p.OPEN) {
                        var h = b.serverLookup(this.url);
                        return b.removeWebSocket(this, this.url), this.readyState = p.CLOSED, this.dispatchEvent(ve({
                            type: "close",
                            target: this,
                            code: A.CLOSE_NORMAL
                        })), h && h.dispatchEvent(ve({
                            type: "disconnect",
                            target: this,
                            code: A.CLOSE_NORMAL
                        }), h), this
                    }
                }, p.prototype.disconnect = function() {
                    return this.close()
                }, p.prototype.emit = function(h) {
                    for (var O = [], k = arguments.length - 1; k-- > 0;) O[k] = arguments[k + 1];
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var R = Qe({
                            type: h,
                            origin: this.url,
                            data: O
                        }),
                        N = b.serverLookup(this.url);
                    return N && N.dispatchEvent.apply(N, [R].concat(O)), this
                }, p.prototype.send = function(h) {
                    return this.emit("message", h), this
                }, g.broadcast.get = function() {
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var l = this,
                        h = b.serverLookup(this.url);
                    if (!h) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(k, R) {
                            return h.emit(k, R, {
                                websockets: b.websocketsLookup(l.url, null, l)
                            }), l
                        },
                        to: function(k) {
                            return h.to(k, l)
                        },
                        in: function(k) {
                            return h.in(k, l)
                        }
                    }
                }, p.prototype.on = function(h, O) {
                    return this.addEventListener(h, O), this
                }, p.prototype.off = function(h, O) {
                    this.removeEventListener(h, O)
                }, p.prototype.hasListeners = function(h) {
                    var O = this.listeners[h];
                    return Array.isArray(O) ? !!O.length : !1
                }, p.prototype.join = function(h) {
                    b.addMembershipToRoom(this, h)
                }, p.prototype.leave = function(h) {
                    b.removeMembershipFromRoom(this, h)
                }, p.prototype.to = function(h) {
                    return this.broadcast.to(h)
                }, p.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, p.prototype.dispatchEvent = function(h) {
                    for (var O = this, k = [], R = arguments.length - 1; R-- > 0;) k[R] = arguments[R + 1];
                    var N = h.type,
                        ge = this.listeners[N];
                    if (!Array.isArray(ge)) return !1;
                    ge.forEach(function(ke) {
                        k.length > 0 ? ke.apply(O, k) : ke.call(O, h.data ? h.data : h)
                    })
                }, Object.defineProperties(p.prototype, g), p
            }(W);
            jt.CONNECTING = 0, jt.OPEN = 1, jt.CLOSING = 2, jt.CLOSED = 3;
            var Hr = function(p, g) {
                return new jt(p, g)
            };
            Hr.connect = function(p, g) {
                return Hr(p, g)
            };
            var ua = Gr,
                fa = re,
                la = Hr;
            r.Server = ua, r.WebSocket = fa, r.SocketIO = la, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(n_, hn);
    var Vi = {},
        i_ = {
            get exports() {
                return Vi
            },
            set exports(t) {
                Vi = t
            }
        };
    (function(t) {
        (function() {
            function e(a, u) {
                var f = a.x - u.x,
                    _ = a.y - u.y;
                return f * f + _ * _
            }

            function r(a, u, f) {
                var _ = u.x,
                    y = u.y,
                    v = f.x - _,
                    E = f.y - y;
                if (v !== 0 || E !== 0) {
                    var w = ((a.x - _) * v + (a.y - y) * E) / (v * v + E * E);
                    w > 1 ? (_ = f.x, y = f.y) : w > 0 && (_ += v * w, y += E * w)
                }
                return v = a.x - _, E = a.y - y, v * v + E * E
            }

            function n(a, u) {
                for (var f = a[0], _ = [f], y, v = 1, E = a.length; v < E; v++) y = a[v], e(y, f) > u && (_.push(y), f = y);
                return f !== y && _.push(y), _
            }

            function i(a, u, f, _, y) {
                for (var v = _, E, w = u + 1; w < f; w++) {
                    var I = r(a[w], a[u], a[f]);
                    I > v && (E = w, v = I)
                }
                v > _ && (E - u > 1 && i(a, u, E, _, y), y.push(a[E]), f - E > 1 && i(a, E, f, _, y))
            }

            function o(a, u) {
                var f = a.length - 1,
                    _ = [a[0]];
                return i(a, 0, f, u, _), _.push(a[f]), _
            }

            function s(a, u, f) {
                if (a.length <= 2) return a;
                var _ = u !== void 0 ? u * u : 1;
                return a = f ? a : n(a, _), a = o(a, _), a
            }
            t.exports = s, t.exports.default = s
        })()
    })(i_);
    const ds = Object.prototype.toString;

    function hs(t) {
        switch (ds.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ve(t, Error)
        }
    }

    function Dt(t, e) {
        return ds.call(t) === `[object ${e}]`
    }

    function _s(t) {
        return Dt(t, "ErrorEvent")
    }

    function Ji(t) {
        return Dt(t, "DOMError")
    }

    function o_(t) {
        return Dt(t, "DOMException")
    }

    function ot(t) {
        return Dt(t, "String")
    }

    function gs(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function kt(t) {
        return Dt(t, "Object")
    }

    function zn(t) {
        return typeof Event < "u" && Ve(t, Event)
    }

    function s_(t) {
        return typeof Element < "u" && Ve(t, Element)
    }

    function a_(t) {
        return Dt(t, "RegExp")
    }

    function Kn(t) {
        return !!(t && t.then && typeof t.then == "function")
    }

    function c_(t) {
        return kt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function u_(t) {
        return typeof t == "number" && t !== t
    }

    function Ve(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function ir(t) {
        return t && t.Math == Math ? t : void 0
    }
    const Oe = typeof globalThis == "object" && ir(globalThis) || typeof window == "object" && ir(window) || typeof self == "object" && ir(self) || typeof global == "object" && ir(global) || function() {
        return this
    }() || {};

    function jr() {
        return Oe
    }

    function Vn(t, e, r) {
        const n = r || Oe,
            i = n.__SENTRY__ = n.__SENTRY__ || {};
        return i[t] || (i[t] = e())
    }
    const f_ = jr(),
        l_ = 80;

    function _n(t, e = {}) {
        try {
            let r = t;
            const n = 5,
                i = [];
            let o = 0,
                s = 0;
            const a = " > ",
                u = a.length;
            let f;
            const _ = Array.isArray(e) ? e : e.keyAttrs,
                y = !Array.isArray(e) && e.maxStringLength || l_;
            for (; r && o++ < n && (f = p_(r, _), !(f === "html" || o > 1 && s + i.length * u + f.length >= y));) i.push(f), s += f.length, r = r.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function p_(t, e) {
        const r = t,
            n = [];
        let i, o, s, a, u;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        const f = e && e.length ? e.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (f && f.length) f.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), i = r.className, i && ot(i))
            for (o = i.split(/\s+/), u = 0; u < o.length; u++) n.push(`.${o[u]}`);
        const _ = ["aria-label", "type", "name", "title", "alt"];
        for (u = 0; u < _.length; u++) s = _[u], a = r.getAttribute(s), a && n.push(`[${s}="${a}"]`);
        return n.join("")
    }

    function d_() {
        try {
            return f_.document.location.href
        } catch {
            return ""
        }
    }
    class ue extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    const h_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function __(t) {
        return t === "http" || t === "https"
    }

    function Jn(t, e = !1) {
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

    function g_(t) {
        const e = h_.exec(t);
        if (!e) throw new ue(`Invalid Sentry Dsn: ${t}`);
        const [r, n, i = "", o, s = "", a] = e.slice(1);
        let u = "",
            f = a;
        const _ = f.split("/");
        if (_.length > 1 && (u = _.slice(0, -1).join("/"), f = _.pop()), f) {
            const y = f.match(/^\d+/);
            y && (f = y[0])
        }
        return ys({
            host: o,
            pass: i,
            path: u,
            projectId: f,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function ys(t) {
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

    function y_(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: e,
            projectId: r,
            protocol: n
        } = t;
        if (["protocol", "publicKey", "host", "projectId"].forEach(o => {
                if (!t[o]) throw new ue(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new ue(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!__(n)) throw new ue(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new ue(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function v_(t) {
        const e = typeof t == "string" ? g_(t) : ys(t);
        return y_(e), e
    }
    const m_ = "Sentry Logger ",
        Er = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function vs(t) {
        if (!("console" in Oe)) return t();
        const e = Oe.console,
            r = {};
        Er.forEach(n => {
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

    function Xi() {
        let t = !1;
        const e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Er.forEach(r => {
            e[r] = (...n) => {
                t && vs(() => {
                    Oe.console[r](`${m_}[${r}]:`, ...n)
                })
            }
        }) : Er.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let U;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? U = Vn("logger", Xi) : U = Xi();

    function Gt(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function Qi(t, e) {
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

    function b_(t, e, r = !1) {
        return ot(t) ? a_(e) ? e.test(t) : ot(e) ? r ? t === e : t.includes(e) : !1 : !1
    }

    function Xn(t, e = [], r = !1) {
        return e.some(n => b_(t, n, r))
    }

    function fe(t, e, r) {
        if (!(e in t)) return;
        const n = t[e],
            i = r(n);
        if (typeof i == "function") try {
            ms(i, n)
        } catch {}
        t[e] = i
    }

    function Qn(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function ms(t, e) {
        const r = e.prototype || {};
        t.prototype = e.prototype = r, Qn(t, "__sentry_original__", e)
    }

    function Zn(t) {
        return t.__sentry_original__
    }

    function E_(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function bs(t) {
        if (hs(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...eo(t)
        };
        if (zn(t)) {
            const e = {
                type: t.type,
                target: Zi(t.target),
                currentTarget: Zi(t.currentTarget),
                ...eo(t)
            };
            return typeof CustomEvent < "u" && Ve(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function Zi(t) {
        try {
            return s_(t) ? _n(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function eo(t) {
        if (typeof t == "object" && t !== null) {
            const e = {};
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function S_(t, e = 40) {
        const r = Object.keys(bs(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return Gt(r[0], e);
        for (let n = r.length; n > 0; n--) {
            const i = r.slice(0, n).join(", ");
            if (!(i.length > e)) return n === r.length ? i : Gt(i, e)
        }
        return ""
    }

    function ei(t) {
        return gn(t, new Map)
    }

    function gn(t, e) {
        if (kt(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = {};
            e.set(t, n);
            for (const i of Object.keys(t)) typeof t[i] < "u" && (n[i] = gn(t[i], e));
            return n
        }
        if (Array.isArray(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = [];
            return e.set(t, n), t.forEach(i => {
                n.push(gn(i, e))
            }), n
        }
        return t
    }
    const w_ = 50;

    function Es(...t) {
        const e = t.sort((r, n) => r[0] - n[0]).map(r => r[1]);
        return (r, n = 0) => {
            const i = [];
            for (const o of r.split(`
`).slice(n)) {
                if (o.length > 1024) continue;
                const s = o.replace(/\(error: (.*)\)/, "$1");
                for (const a of e) {
                    const u = a(s);
                    if (u) {
                        i.push(u);
                        break
                    }
                }
            }
            return k_(i)
        }
    }

    function O_(t) {
        return Array.isArray(t) ? Es(...t) : t
    }

    function k_(t) {
        if (!t.length) return [];
        let e = t;
        const r = e[0].function || "",
            n = e[e.length - 1].function || "";
        return (r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (e = e.slice(1)), n.indexOf("sentryWrapped") !== -1 && (e = e.slice(0, -1)), e.slice(0, w_).map(i => ({
            ...i,
            filename: i.filename || e[0].filename,
            function: i.function || "?"
        })).reverse()
    }
    const Zr = "<anonymous>";

    function We(t) {
        try {
            return !t || typeof t != "function" ? Zr : t.name || Zr
        } catch {
            return Zr
        }
    }
    const et = jr();

    function Ss() {
        if (!("fetch" in et)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch {
            return !1
        }
    }

    function yn(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function T_() {
        if (!Ss()) return !1;
        if (yn(et.fetch)) return !0;
        let t = !1;
        const e = et.document;
        if (e && typeof e.createElement == "function") try {
            const r = e.createElement("iframe");
            r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = yn(r.contentWindow.fetch)), e.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return t
    }

    function A_() {
        const t = et.chrome,
            e = t && t.app && t.app.runtime,
            r = "history" in et && !!et.history.pushState && !!et.history.replaceState;
        return !e && r
    }
    const Z = jr(),
        Ht = {},
        to = {};

    function R_(t) {
        if (!to[t]) switch (to[t] = !0, t) {
            case "console":
                x_();
                break;
            case "dom":
                U_();
                break;
            case "xhr":
                P_();
                break;
            case "fetch":
                N_();
                break;
            case "history":
                $_();
                break;
            case "error":
                M_();
                break;
            case "unhandledrejection":
                B_();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("unknown instrumentation type:", t);
                return
        }
    }

    function Ue(t, e) {
        Ht[t] = Ht[t] || [], Ht[t].push(e), R_(t)
    }

    function Re(t, e) {
        if (!(!t || !Ht[t]))
            for (const r of Ht[t] || []) try {
                r(e)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${We(r)}
Error:`, n)
            }
    }

    function x_() {
        "console" in Z && Er.forEach(function(t) {
            t in Z.console && fe(Z.console, t, function(e) {
                return function(...r) {
                    Re("console", {
                        args: r,
                        level: t
                    }), e && e.apply(Z.console, r)
                }
            })
        })
    }

    function N_() {
        T_() && fe(Z, "fetch", function(t) {
            return function(...e) {
                const r = {
                    args: e,
                    fetchData: {
                        method: I_(e),
                        url: L_(e)
                    },
                    startTimestamp: Date.now()
                };
                return Re("fetch", {
                    ...r
                }), t.apply(Z, e).then(n => (Re("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw Re("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function I_(t = []) {
        return "Request" in Z && Ve(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }

    function L_(t = []) {
        return typeof t[0] == "string" ? t[0] : "Request" in Z && Ve(t[0], Request) ? t[0].url : String(t[0])
    }

    function P_() {
        if (!("XMLHttpRequest" in Z)) return;
        const t = XMLHttpRequest.prototype;
        fe(t, "open", function(e) {
            return function(...r) {
                const n = this,
                    i = r[1],
                    o = n.__sentry_xhr__ = {
                        method: ot(r[0]) ? r[0].toUpperCase() : r[0],
                        url: r[1]
                    };
                ot(i) && o.method === "POST" && i.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                const s = function() {
                    if (n.readyState === 4) {
                        try {
                            o.status_code = n.status
                        } catch {}
                        Re("xhr", {
                            args: r,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: n
                        })
                    }
                };
                return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? fe(n, "onreadystatechange", function(a) {
                    return function(...u) {
                        return s(), a.apply(n, u)
                    }
                }) : n.addEventListener("readystatechange", s), e.apply(n, r)
            }
        }), fe(t, "send", function(e) {
            return function(...r) {
                return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), Re("xhr", {
                    args: r,
                    startTimestamp: Date.now(),
                    xhr: this
                }), e.apply(this, r)
            }
        })
    }
    let or;

    function $_() {
        if (!A_()) return;
        const t = Z.onpopstate;
        Z.onpopstate = function(...r) {
            const n = Z.location.href,
                i = or;
            if (or = n, Re("history", {
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
                    const o = or,
                        s = String(i);
                    or = s, Re("history", {
                        from: o,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        fe(Z.history, "pushState", e), fe(Z.history, "replaceState", e)
    }
    const D_ = 1e3;
    let sr, ar;

    function C_(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function j_(t) {
        if (t.type !== "keypress") return !1;
        try {
            const e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function ro(t, e = !1) {
        return r => {
            if (!r || ar === r || j_(r)) return;
            const n = r.type === "keypress" ? "input" : r.type;
            sr === void 0 ? (t({
                event: r,
                name: n,
                global: e
            }), ar = r) : C_(ar, r) && (t({
                event: r,
                name: n,
                global: e
            }), ar = r), clearTimeout(sr), sr = Z.setTimeout(() => {
                sr = void 0
            }, D_)
        }
    }

    function U_() {
        if (!("document" in Z)) return;
        const t = Re.bind(null, "dom"),
            e = ro(t, !0);
        Z.document.addEventListener("click", e, !1), Z.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
            const n = Z[r] && Z[r].prototype;
            !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (fe(n, "addEventListener", function(i) {
                return function(o, s, a) {
                    if (o === "click" || o == "keypress") try {
                        const u = this,
                            f = u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {},
                            _ = f[o] = f[o] || {
                                refCount: 0
                            };
                        if (!_.handler) {
                            const y = ro(t);
                            _.handler = y, i.call(this, o, y, a)
                        }
                        _.refCount++
                    } catch {}
                    return i.call(this, o, s, a)
                }
            }), fe(n, "removeEventListener", function(i) {
                return function(o, s, a) {
                    if (o === "click" || o == "keypress") try {
                        const u = this,
                            f = u.__sentry_instrumentation_handlers__ || {},
                            _ = f[o];
                        _ && (_.refCount--, _.refCount <= 0 && (i.call(this, o, _.handler, a), _.handler = void 0, delete f[o]), Object.keys(f).length === 0 && delete u.__sentry_instrumentation_handlers__)
                    } catch {}
                    return i.call(this, o, s, a)
                }
            }))
        })
    }
    let en = null;

    function M_() {
        en = Z.onerror, Z.onerror = function(t, e, r, n, i) {
            return Re("error", {
                column: n,
                error: i,
                line: r,
                msg: t,
                url: e
            }), en ? en.apply(this, arguments) : !1
        }
    }
    let tn = null;

    function B_() {
        tn = Z.onunhandledrejection, Z.onunhandledrejection = function(t) {
            return Re("unhandledrejection", t), tn ? tn.apply(this, arguments) : !0
        }
    }

    function F_() {
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

    function ws(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function tt(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        const n = ws(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function vn(t, e, r) {
        const n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            o = i[0] = i[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = r || "Error")
    }

    function Kt(t, e) {
        const r = ws(t);
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

    function no(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            Qn(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function Os(t) {
        return Array.isArray(t) ? t : [t]
    }

    function q_() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function G_() {
        return "npm"
    }

    function ks() {
        return !q_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function H_(t, e) {
        return t.require(e)
    }

    function je(t, e = 1 / 0, r = 1 / 0) {
        try {
            return mn("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function Ts(t, e = 3, r = 100 * 1024) {
        const n = je(t, e);
        return K_(n) > r ? Ts(t, e - 1, r) : n
    }

    function mn(t, e, r = 1 / 0, n = 1 / 0, i = F_()) {
        const [o, s] = i;
        if (e === null || ["number", "boolean", "string"].includes(typeof e) && !u_(e)) return e;
        const a = Y_(t, e);
        if (!a.startsWith("[object ")) return a;
        if (e.__sentry_skip_normalization__) return e;
        let u = r;
        if (typeof e.__sentry_override_normalization_depth__ == "number" && (u = e.__sentry_override_normalization_depth__), u === 0) return a.replace("object ", "");
        if (o(e)) return "[Circular ~]";
        const f = e;
        if (f && typeof f.toJSON == "function") try {
            const E = f.toJSON();
            return mn("", E, u - 1, n, i)
        } catch {}
        const _ = Array.isArray(e) ? [] : {};
        let y = 0;
        const v = bs(e);
        for (const E in v) {
            if (!Object.prototype.hasOwnProperty.call(v, E)) continue;
            if (y >= n) {
                _[E] = "[MaxProperties ~]";
                break
            }
            const w = v[E];
            _[E] = mn(E, w, u - 1, n, i), y++
        }
        return s(e), _
    }

    function Y_(t, e) {
        try {
            return t === "domain" && e && typeof e == "object" && e._events ? "[Domain]" : t === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && e === global ? "[Global]" : typeof window < "u" && e === window ? "[Window]" : typeof document < "u" && e === document ? "[Document]" : c_(e) ? "[SyntheticEvent]" : typeof e == "number" && e !== e ? "[NaN]" : e === void 0 ? "[undefined]" : typeof e == "function" ? `[Function: ${We(e)}]` : typeof e == "symbol" ? `[${String(e)}]` : typeof e == "bigint" ? `[BigInt: ${String(e)}]` : `[object ${W_(e)}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function W_(t) {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : "null prototype"
    }

    function z_(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function K_(t) {
        return z_(JSON.stringify(t))
    }
    var Ie;
    (function(t) {
        t[t.PENDING = 0] = "PENDING";
        const r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        const n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(Ie || (Ie = {}));

    function st(t) {
        return new de(e => {
            e(t)
        })
    }

    function Sr(t) {
        return new de((e, r) => {
            r(t)
        })
    }
    class de {
        __init() {
            this._state = Ie.PENDING
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
                this._setResult(Ie.RESOLVED, e)
            }
        }
        __init4() {
            this._reject = e => {
                this._setResult(Ie.REJECTED, e)
            }
        }
        __init5() {
            this._setResult = (e, r) => {
                if (this._state === Ie.PENDING) {
                    if (Kn(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === Ie.PENDING) return;
                const e = this._handlers.slice();
                this._handlers = [], e.forEach(r => {
                    r[0] || (this._state === Ie.RESOLVED && r[1](this._value), this._state === Ie.REJECTED && r[2](this._value), r[0] = !0)
                })
            }
        }
    }

    function V_(t) {
        const e = [];

        function r() {
            return t === void 0 || e.length < t
        }

        function n(s) {
            return e.splice(e.indexOf(s), 1)[0]
        }

        function i(s) {
            if (!r()) return Sr(new ue("Not adding Promise because buffer limit was reached."));
            const a = s();
            return e.indexOf(a) === -1 && e.push(a), a.then(() => n(a)).then(null, () => n(a).then(null, () => {})), a
        }

        function o(s) {
            return new de((a, u) => {
                let f = e.length;
                if (!f) return a(!0);
                const _ = setTimeout(() => {
                    s && s > 0 && a(!1)
                }, s);
                e.forEach(y => {
                    st(y).then(() => {
                        --f || (clearTimeout(_), a(!0))
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

    function rn(t) {
        if (!t) return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        const r = e[6] || "",
            n = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            relative: e[5] + r + n
        }
    }
    const J_ = ["fatal", "error", "warning", "log", "info", "debug"];

    function X_(t) {
        return t === "warn" ? "warning" : J_.includes(t) ? t : "log"
    }
    const As = jr(),
        bn = {
            nowSeconds: () => Date.now() / 1e3
        };

    function Q_() {
        const {
            performance: t
        } = As;
        if (!t || !t.now) return;
        const e = Date.now() - t.now();
        return {
            now: () => t.now(),
            timeOrigin: e
        }
    }

    function Z_() {
        try {
            return H_(na, "perf_hooks").performance
        } catch {
            return
        }
    }
    const nn = ks() ? Z_() : Q_(),
        io = nn === void 0 ? bn : {
            nowSeconds: () => (nn.timeOrigin + nn.now()) / 1e3
        },
        Ur = bn.nowSeconds.bind(bn),
        Rs = io.nowSeconds.bind(io);
    (() => {
        const {
            performance: t
        } = As;
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

    function Mr(t, e = []) {
        return [t, e]
    }

    function eg(t, e) {
        const [r, n] = t;
        return [r, [...n, e]]
    }

    function oo(t, e) {
        const r = t[1];
        for (const n of r) {
            const i = n[0].type;
            if (e(n, i)) return !0
        }
        return !1
    }

    function En(t, e) {
        return (e || new TextEncoder).encode(t)
    }

    function xs(t, e) {
        const [r, n] = t;
        let i = JSON.stringify(r);

        function o(s) {
            typeof i == "string" ? i = typeof s == "string" ? i + s : [En(i, e), s] : i.push(typeof s == "string" ? En(s, e) : s)
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
        return typeof i == "string" ? i : tg(i)
    }

    function tg(t) {
        const e = t.reduce((i, o) => i + o.length, 0),
            r = new Uint8Array(e);
        let n = 0;
        for (const i of t) r.set(i, n), n += i.length;
        return r
    }

    function rg(t, e) {
        const r = typeof t.data == "string" ? En(t.data, e) : t.data;
        return [ei({
            type: "attachment",
            length: r.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), r]
    }
    const ng = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay"
    };

    function so(t) {
        return ng[t]
    }

    function Ns(t) {
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

    function ig(t, e, r, n) {
        const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!r && {
                dsn: Jn(n)
            },
            ...t.type === "transaction" && i && {
                trace: ei({
                    ...i
                })
            }
        }
    }

    function og(t, e, r) {
        const n = [{
            type: "client_report"
        }, {
            timestamp: r || Ur(),
            discarded_events: t
        }];
        return Mr(e ? {
            dsn: e
        } : {}, [n])
    }
    const sg = 60 * 1e3;

    function ag(t, e = Date.now()) {
        const r = parseInt(`${t}`, 10);
        if (!isNaN(r)) return r * 1e3;
        const n = Date.parse(`${t}`);
        return isNaN(n) ? sg : n - e
    }

    function cg(t, e) {
        return t[e] || t.all || 0
    }

    function ug(t, e, r = Date.now()) {
        return cg(t, e) > r
    }

    function fg(t, {
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
                const [u, f] = a.split(":", 2), _ = parseInt(u, 10), y = (isNaN(_) ? 60 : _) * 1e3;
                if (!f) i.all = n + y;
                else
                    for (const v of f.split(";")) i[v] = n + y
            } else s ? i.all = n + ag(s, n) : e === 429 && (i.all = n + 60 * 1e3);
        return i
    }
    const Is = "production";

    function lg(t) {
        const e = Rs(),
            r = {
                sid: yt(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => dg(r)
            };
        return t && Tt(r, t), r
    }

    function Tt(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Rs(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : yt()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            const r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function pg(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), Tt(t, r)
    }

    function dg(t) {
        return ei({
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
    const hg = 100;
    class qe {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            const r = new qe;
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
                return r instanceof qe ? r : this
            }
            return e instanceof qe ? (this._tags = {
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
            const n = typeof r == "number" ? r : hg;
            if (n <= 0) return this;
            const i = {
                timestamp: Ur(),
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
                const n = this._span.transaction && this._span.transaction.name;
                n && (e.tags = {
                    transaction: n,
                    ...e.tags
                })
            }
            return this._applyFingerprint(e), e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs], e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            }, this._notifyEventProcessors([...Ls(), ...this._eventProcessors], e, r)
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && u === null && U.log(`Event processor "${a.id}" dropped event`), Kn(u) ? u.then(f => this._notifyEventProcessors(e, f, n, i + 1).then(o)).then(null, s) : this._notifyEventProcessors(e, u, n, i + 1).then(o).then(null, s)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? Os(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function Ls() {
        return Vn("globalEventProcessors", () => [])
    }

    function ti(t) {
        Ls().push(t)
    }
    const ri = 4,
        _g = 100;
    class rr {
        __init() {
            this._stack = [{}]
        }
        constructor(e, r = new qe, n = ri) {
            this._version = n, rr.prototype.__init.call(this), this.getStackTop().scope = r, e && this.bindClient(e)
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            const r = this.getStackTop();
            r.client = e, e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            const e = qe.clone(this.getScope());
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
            if (!n || !i) return;
            const {
                beforeBreadcrumb: o = null,
                maxBreadcrumbs: s = _g
            } = i.getOptions && i.getOptions() || {};
            if (s <= 0) return;
            const u = {
                    timestamp: Ur(),
                    ...e
                },
                f = o ? vs(() => o(u, r)) : u;
            f !== null && n.addBreadcrumb(f, s)
        }
        setUser(e) {
            const r = this.getScope();
            r && r.setUser(e)
        }
        setTags(e) {
            const r = this.getScope();
            r && r.setTags(e)
        }
        setExtras(e) {
            const r = this.getScope();
            r && r.setExtras(e)
        }
        setTag(e, r) {
            const n = this.getScope();
            n && n.setTag(e, r)
        }
        setExtra(e, r) {
            const n = this.getScope();
            n && n.setExtra(e, r)
        }
        setContext(e, r) {
            const n = this.getScope();
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
            const r = ao(this);
            try {
                e(this)
            } finally {
                ao(r)
            }
        }
        getIntegration(e) {
            const r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(e)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
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
            const e = this.getStackTop(),
                r = e && e.scope,
                n = r && r.getSession();
            n && pg(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: o = Is
            } = n && n.getOptions() || {}, {
                userAgent: s
            } = Oe.navigator || {}, a = lg({
                release: i,
                environment: o,
                ...r && {
                    user: r.getUser()
                },
                ...s && {
                    userAgent: s
                },
                ...e
            });
            if (r) {
                const u = r.getSession && r.getSession();
                u && u.status === "ok" && Tt(u, {
                    status: "exited"
                }), this.endSession(), r.setSession(a)
            }
            return a
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
            } = this.getStackTop();
            if (!e) return;
            const n = e.getSession();
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
            const i = Br().__SENTRY__;
            if (i && i.extensions && typeof i.extensions[e] == "function") return i.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Br() {
        return Oe.__SENTRY__ = Oe.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, Oe
    }

    function ao(t) {
        const e = Br(),
            r = Me(e);
        return ni(e, t), r
    }

    function ie() {
        const t = Br();
        return (!Ps(t) || Me(t).isOlderThan(ri)) && ni(t, new rr), ks() ? gg(t) : Me(t)
    }

    function gg(t) {
        try {
            const e = Br().__SENTRY__,
                r = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
            if (!r) return Me(t);
            if (!Ps(r) || Me(r).isOlderThan(ri)) {
                const n = Me(t).getStackTop();
                ni(r, new rr(n.client, qe.clone(n.scope)))
            }
            return Me(r)
        } catch {
            return Me(t)
        }
    }

    function Ps(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function Me(t) {
        return Vn("hub", () => new rr, t)
    }

    function ni(t, e) {
        if (!t) return !1;
        const r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function yg(t, e) {
        return ie().captureException(t, {
            captureContext: e
        })
    }

    function vg(t, e) {
        const r = typeof e == "string" ? e : void 0,
            n = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return ie().captureMessage(t, r, n)
    }

    function $s(t) {
        ie().setTags(t)
    }

    function mg(t) {
        ie().withScope(t)
    }
    const bg = "7";

    function Eg(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function Sg(t) {
        return `${Eg(t)}${t.projectId}/envelope/`
    }

    function wg(t, e) {
        return E_({
            sentry_key: t.publicKey,
            sentry_version: bg,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function Ds(t, e = {}) {
        const r = typeof e == "string" ? e : e.tunnel,
            n = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return r || `${Sg(t)}?${wg(t,n)}`
    }

    function Og(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function kg(t, e, r, n) {
        const i = Ns(r),
            o = {
                sent_at: new Date().toISOString(),
                ...i && {
                    sdk: i
                },
                ...!!n && {
                    dsn: Jn(e)
                }
            },
            s = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t];
        return Mr(o, [s])
    }

    function Tg(t, e, r, n) {
        const i = Ns(r),
            o = t.type && t.type !== "replay_event" ? t.type : "event";
        Og(t, r && r.sdk);
        const s = ig(t, i, n, e);
        return delete t.sdkProcessingMetadata, Mr(s, [
            [{
                type: o
            }, t]
        ])
    }
    const co = [];

    function Ag(t) {
        const e = {};
        return t.forEach(r => {
            const {
                name: n
            } = r, i = e[n];
            i && !i.isDefaultInstance && r.isDefaultInstance || (e[n] = r)
        }), Object.keys(e).map(r => e[r])
    }

    function Rg(t) {
        const e = t.defaultIntegrations || [],
            r = t.integrations;
        e.forEach(s => {
            s.isDefaultInstance = !0
        });
        let n;
        Array.isArray(r) ? n = [...e, ...r] : typeof r == "function" ? n = Os(r(e)) : n = e;
        const i = Ag(n),
            o = i.findIndex(s => s.name === "Debug");
        if (o !== -1) {
            const [s] = i.splice(o, 1);
            i.push(s)
        }
        return i
    }

    function xg(t) {
        const e = {};
        return t.forEach(r => {
            r && Cs(r, e)
        }), e
    }

    function Cs(t, e) {
        e[t.name] = t, co.indexOf(t.name) === -1 && (t.setupOnce(ti, ie), co.push(t.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Integration installed: ${t.name}`))
    }

    function Ng(t, e, r, n) {
        const {
            normalizeDepth: i = 3,
            normalizeMaxBreadth: o = 1e3
        } = t, s = {
            ...e,
            event_id: e.event_id || r.event_id || yt(),
            timestamp: e.timestamp || Ur()
        }, a = r.integrations || t.integrations.map(_ => _.name);
        Ig(s, t), Pg(s, a), Lg(s, t.stackParser);
        let u = n;
        r.captureContext && (u = qe.clone(u).update(r.captureContext));
        let f = st(s);
        if (u) {
            if (u.getAttachments) {
                const _ = [...r.attachments || [], ...u.getAttachments()];
                _.length && (r.attachments = _)
            }
            f = u.applyToEvent(s, r)
        }
        return f.then(_ => typeof i == "number" && i > 0 ? $g(_, i, o) : _)
    }

    function Ig(t, e) {
        const {
            environment: r,
            release: n,
            dist: i,
            maxValueLength: o = 250
        } = e;
        "environment" in t || (t.environment = "environment" in e ? r : Is), t.release === void 0 && n !== void 0 && (t.release = n), t.dist === void 0 && i !== void 0 && (t.dist = i), t.message && (t.message = Gt(t.message, o));
        const s = t.exception && t.exception.values && t.exception.values[0];
        s && s.value && (s.value = Gt(s.value, o));
        const a = t.request;
        a && a.url && (a.url = Gt(a.url, o))
    }

    function Lg(t, e) {
        const r = Oe._sentryDebugIds;
        if (!r) return;
        const n = Object.keys(r).reduce((s, a) => {
                const u = e(a);
                for (const f of u)
                    if (f.abs_path) {
                        s[f.abs_path] = r[a];
                        break
                    } return s
            }, {}),
            i = new Set;
        try {
            t.exception.values.forEach(s => {
                s.stacktrace.frames.forEach(a => {
                    a.abs_path && i.add(a.abs_path)
                })
            })
        } catch {}
        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
        const o = t.debug_meta.images;
        i.forEach(s => {
            n[s] && o.push({
                type: "sourcemap",
                code_file: s,
                debug_id: n[s]
            })
        })
    }

    function Pg(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
    }

    function $g(t, e, r) {
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
    const uo = "Not capturing exception because it's already been captured.";
    class Ze {
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
            if (Ze.prototype.__init.call(this), Ze.prototype.__init2.call(this), Ze.prototype.__init3.call(this), Ze.prototype.__init4.call(this), Ze.prototype.__init5.call(this), this._options = e, e.dsn) {
                this._dsn = v_(e.dsn);
                const r = Ds(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, r, n) {
            if (no(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(uo);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(o => this._captureEvent(o, r, n)).then(o => {
                i = o
            })), i
        }
        captureMessage(e, r, n, i) {
            let o = n && n.event_id;
            const s = gs(e) ? this.eventFromMessage(String(e), r, n) : this.eventFromException(e, n);
            return this._process(s.then(a => this._captureEvent(a, n, i)).then(a => {
                o = a
            })), o
        }
        captureEvent(e, r, n) {
            if (r && r.originalException && no(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(uo);
                return
            }
            let i = r && r.event_id;
            return this._process(this._captureEvent(e, r, n).then(o => {
                i = o
            })), i
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Tt(e, {
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
            return r ? this._isClientDoneProcessing(e).then(n => r.flush(e).then(i => n && i)) : st(!0)
        }
        close(e) {
            return this.flush(e).then(r => (this.getOptions().enabled = !1, r))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = xg(this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
            }
        }
        addIntegration(e) {
            Cs(e, this._integrations)
        }
        sendEvent(e, r = {}) {
            if (this._dsn) {
                let n = Tg(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const i of r.attachments || []) n = eg(n, rg(i, this._options.transportOptions && this._options.transportOptions.textEncoder));
                this._sendEnvelope(n)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                const r = kg(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(r)
            }
        }
        recordDroppedEvent(e, r, n) {
            if (this._options.sendClientReports) {
                const i = `${e}:${r}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1
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
            return !r.integrations && o.length > 0 && (r.integrations = o), Ng(i, e, r, n)
        }
        _captureEvent(e, r = {}, n) {
            return this._processEvent(e, r, n).then(i => i.event_id, i => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    const o = i;
                    o.logLevel === "log" ? U.log(o.message) : U.warn(o)
                }
            })
        }
        _processEvent(e, r, n) {
            const i = this.getOptions(),
                {
                    sampleRate: o
                } = i;
            if (!this._isEnabled()) return Sr(new ue("SDK not enabled, will not capture event.", "log"));
            const s = Us(e),
                a = js(e),
                u = e.type || "error",
                f = `before send for type \`${u}\``;
            if (a && typeof o == "number" && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), Sr(new ue(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
            const _ = u === "replay_event" ? "replay" : u;
            return this._prepareEvent(e, r, n).then(y => {
                if (y === null) throw this.recordDroppedEvent("event_processor", _, e), new ue("An event processor returned `null`, will not send event.", "log");
                if (r.data && r.data.__sentry__ === !0) return y;
                const E = Cg(i, y, r);
                return Dg(E, f)
            }).then(y => {
                if (y === null) throw this.recordDroppedEvent("before_send", _, e), new ue(`${f} returned \`null\`, will not send event.`, "log");
                const v = n && n.getSession();
                !s && v && this._updateSessionFromEvent(v, y);
                const E = y.transaction_info;
                if (s && E && y.transaction !== e.transaction) {
                    const w = "custom";
                    y.transaction_info = {
                        ...E,
                        source: w
                    }
                }
                return this.sendEvent(y, r), y
            }).then(null, y => {
                throw y instanceof ue ? y : (this.captureException(y, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: y
                }), new ue(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${y}`))
            })
        }
        _process(e) {
            this._numProcessing++, e.then(r => (this._numProcessing--, r), r => (this._numProcessing--, r))
        }
        _sendEnvelope(e) {
            this._transport && this._dsn ? this._transport.send(e).then(null, r => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Error while sending event:", r)
            }) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Transport disabled")
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

    function Dg(t, e) {
        const r = `${e} must return \`null\` or a valid event.`;
        if (Kn(t)) return t.then(n => {
            if (!kt(n) && n !== null) throw new ue(r);
            return n
        }, n => {
            throw new ue(`${e} rejected with ${n}`)
        });
        if (!kt(t) && t !== null) throw new ue(r);
        return t
    }

    function Cg(t, e, r) {
        const {
            beforeSend: n,
            beforeSendTransaction: i
        } = t;
        return js(e) && n ? n(e, r) : Us(e) && i ? i(e, r) : e
    }

    function js(t) {
        return t.type === void 0
    }

    function Us(t) {
        return t.type === "transaction"
    }

    function jg(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? U.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const r = ie(),
            n = r.getScope();
        n && n.update(e.initialScope);
        const i = new t(e);
        r.bindClient(i)
    }
    const Ug = 30;

    function Ms(t, e, r = V_(t.bufferSize || Ug)) {
        let n = {};
        const i = s => r.drain(s);

        function o(s) {
            const a = [];
            if (oo(s, (y, v) => {
                    const E = so(v);
                    if (ug(n, E)) {
                        const w = fo(y, v);
                        t.recordDroppedEvent("ratelimit_backoff", E, w)
                    } else a.push(y)
                }), a.length === 0) return st();
            const u = Mr(s[0], a),
                f = y => {
                    oo(u, (v, E) => {
                        const w = fo(v, E);
                        t.recordDroppedEvent(y, so(E), w)
                    })
                },
                _ = () => e({
                    body: xs(u, t.textEncoder)
                }).then(y => (y.statusCode !== void 0 && (y.statusCode < 200 || y.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Sentry responded with status code ${y.statusCode} to sent event.`), n = fg(n, y), y), y => {
                    throw f("network_error"), y
                });
            return r.add(_).then(y => y, y => {
                if (y instanceof ue) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Skipped sending event because buffer is full."), f("queue_overflow"), st();
                throw y
            })
        }
        return {
            send: o,
            flush: i
        }
    }

    function fo(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
    }
    const lo = "7.42.0";
    let po;
    class Vt {
        constructor() {
            Vt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = Vt.id
        }
        setupOnce() {
            po = Function.prototype.toString, Function.prototype.toString = function(...e) {
                const r = Zn(this) || this;
                return po.apply(r, e)
            }
        }
    }
    Vt.__initStatic();
    const Mg = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            f = Bg(s._options, u);
                        return Fg(i, f) ? null : i
                    }
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    vt.__initStatic();

    function Bg(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...Mg],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function Fg(t, e) {
        return e.ignoreInternal && Wg(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being internal Sentry Error.
Event: ${tt(t)}`), !0) : qg(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${tt(t)}`), !0) : Gg(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${tt(t)}.
Url: ${wr(t)}`), !0) : Hg(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${tt(t)}.
Url: ${wr(t)}`), !0)
    }

    function qg(t, e) {
        return !e || !e.length ? !1 : Yg(t).some(r => Xn(r, e))
    }

    function Gg(t, e) {
        if (!e || !e.length) return !1;
        const r = wr(t);
        return r ? Xn(r, e) : !1
    }

    function Hg(t, e) {
        if (!e || !e.length) return !0;
        const r = wr(t);
        return r ? Xn(r, e) : !0
    }

    function Yg(t) {
        if (t.message) return [t.message];
        if (t.exception) try {
            const {
                type: e = "",
                value: r = ""
            } = t.exception.values && t.exception.values[0] || {};
            return [`${r}`, `${e}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Cannot extract message for event ${tt(t)}`), []
        }
        return []
    }

    function Wg(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function zg(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
            const r = t[e];
            if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") return r.filename || null
        }
        return null
    }

    function wr(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? zg(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Cannot extract url for event ${tt(t)}`), null
        }
    }
    const q = Oe;
    let Sn = 0;

    function Bs() {
        return Sn > 0
    }

    function Kg() {
        Sn++, setTimeout(() => {
            Sn--
        })
    }

    function At(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            const i = t.__sentry_wrapped__;
            if (i) return i;
            if (Zn(t)) return t
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
                throw Kg(), mg(s => {
                    s.addEventProcessor(a => (e.mechanism && (vn(a, void 0, void 0), Kt(a, e.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: i
                    }, a)), yg(o)
                }), o
            }
        };
        try {
            for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        } catch {}
        ms(n, t), Qn(t, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return n
    }

    function Fs(t, e) {
        const r = ii(t, e),
            n = {
                type: e && e.name,
                value: Qg(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function Vg(t, e, r, n) {
        const o = ie().getClient(),
            s = o && o.getOptions().normalizeDepth,
            a = {
                exception: {
                    values: [{
                        type: zn(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${S_(e)}`
                    }]
                },
                extra: {
                    __serialized__: Ts(e, s)
                }
            };
        if (r) {
            const u = ii(t, r);
            u.length && (a.exception.values[0].stacktrace = {
                frames: u
            })
        }
        return a
    }

    function on(t, e) {
        return {
            exception: {
                values: [Fs(t, e)]
            }
        }
    }

    function ii(t, e) {
        const r = e.stacktrace || e.stack || "",
            n = Xg(e);
        try {
            return t(r, n)
        } catch {}
        return []
    }
    const Jg = /Minified React error #\d+;/i;

    function Xg(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (Jg.test(t.message)) return 1
        }
        return 0
    }

    function Qg(t) {
        const e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function Zg(t, e, r, n) {
        const i = r && r.syntheticException || void 0,
            o = oi(t, e, i, n);
        return Kt(o), o.level = "error", r && r.event_id && (o.event_id = r.event_id), st(o)
    }

    function ey(t, e, r = "info", n, i) {
        const o = n && n.syntheticException || void 0,
            s = wn(t, e, o, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), st(s)
    }

    function oi(t, e, r, n, i) {
        let o;
        if (_s(e) && e.error) return on(t, e.error);
        if (Ji(e) || o_(e)) {
            const s = e;
            if ("stack" in e) o = on(t, e);
            else {
                const a = s.name || (Ji(s) ? "DOMError" : "DOMException"),
                    u = s.message ? `${a}: ${s.message}` : a;
                o = wn(t, u, r, n), vn(o, u)
            }
            return "code" in s && (o.tags = {
                ...o.tags,
                "DOMException.code": `${s.code}`
            }), o
        }
        return hs(e) ? on(t, e) : kt(e) || zn(e) ? (o = Vg(t, e, r, i), Kt(o, {
            synthetic: !0
        }), o) : (o = wn(t, e, r, n), vn(o, `${e}`, void 0), Kt(o, {
            synthetic: !0
        }), o)
    }

    function wn(t, e, r, n) {
        const i = {
            message: e
        };
        if (n && r) {
            const o = ii(t, r);
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
    const cr = 1024,
        qs = "Breadcrumbs";
    class Jt {
        static __initStatic() {
            this.id = qs
        }
        __init() {
            this.name = Jt.id
        }
        constructor(e) {
            Jt.prototype.__init.call(this), this.options = {
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
            this.options.console && Ue("console", ry), this.options.dom && Ue("dom", ty(this.options.dom)), this.options.xhr && Ue("xhr", ny), this.options.fetch && Ue("fetch", iy), this.options.history && Ue("history", oy)
        }
        addSentryBreadcrumb(e) {
            this.options.sentry && ie().addBreadcrumb({
                category: `sentry.${e.type==="transaction"?"transaction":"event"}`,
                event_id: e.event_id,
                level: e.level,
                message: tt(e)
            }, {
                event: e
            })
        }
    }
    Jt.__initStatic();

    function ty(t) {
        function e(r) {
            let n, i = typeof t == "object" ? t.serializeAttribute : void 0,
                o = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
            o && o > cr && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`\`dom.maxStringLength\` cannot exceed ${cr}, but a value of ${o} was configured. Sentry will use ${cr} instead.`), o = cr), typeof i == "string" && (i = [i]);
            try {
                const s = r.event;
                n = sy(s) ? _n(s.target, {
                    keyAttrs: i,
                    maxStringLength: o
                }) : _n(s, {
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

    function ry(t) {
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
            level: X_(t.level),
            message: Qi(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${Qi(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        ie().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function ny(t) {
        if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__) return;
            const {
                method: e,
                url: r,
                status_code: n,
                body: i
            } = t.xhr.__sentry_xhr__ || {};
            ie().addBreadcrumb({
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

    function iy(t) {
        t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST" || (t.error ? ie().addBreadcrumb({
            category: "fetch",
            data: t.fetchData,
            level: "error",
            type: "http"
        }, {
            data: t.error,
            input: t.args
        }) : ie().addBreadcrumb({
            category: "fetch",
            data: {
                ...t.fetchData,
                status_code: t.response && t.response.status
            },
            type: "http"
        }, {
            input: t.args,
            response: t.response
        })))
    }

    function oy(t) {
        let e = t.from,
            r = t.to;
        const n = rn(q.location.href);
        let i = rn(e);
        const o = rn(r);
        i.path || (i = n), n.protocol === o.protocol && n.host === o.host && (r = o.relative), n.protocol === i.protocol && n.host === i.host && (e = i.relative), ie().addBreadcrumb({
            category: "navigation",
            data: {
                from: e,
                to: r
            }
        })
    }

    function sy(t) {
        return t && !!t.target
    }
    class ay extends Ze {
        constructor(e) {
            const r = q.SENTRY_SDK_SOURCE || G_();
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${r}:@sentry/browser`,
                    version: lo
                }],
                version: lo
            }, super(e), e.sendClientReports && q.document && q.document.addEventListener("visibilitychange", () => {
                q.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return Zg(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", n) {
            return ey(this._options.stackParser, e, r, n, this._options.attachStacktrace)
        }
        sendEvent(e, r) {
            const n = this.getIntegrationById(qs);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, r)
        }
        _prepareEvent(e, r, n) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, r, n)
        }
        _flushOutcomes() {
            const e = this._clearOutcomes();
            if (e.length === 0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("Sending outcomes:", e);
            const r = Ds(this._dsn, this._options),
                n = og(e, this._options.tunnel && Jn(this._dsn));
            try {
                Object.prototype.toString.call(q && q.navigator) === "[object Navigator]" && typeof q.navigator.sendBeacon == "function" && !this._options.transportOptions ? q.navigator.sendBeacon.bind(q.navigator)(r, xs(n)) : this._sendEnvelope(n)
            } catch (i) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(i)
            }
        }
    }
    let Ft;

    function cy() {
        if (Ft) return Ft;
        if (yn(q.fetch)) return Ft = q.fetch.bind(q);
        const t = q.document;
        let e = q.fetch;
        if (t && typeof t.createElement == "function") try {
            const r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r);
            const n = r.contentWindow;
            n && n.fetch && (e = n.fetch), t.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return Ft = e.bind(q)
    }

    function uy() {
        Ft = void 0
    }

    function fy(t, e = cy()) {
        function r(n) {
            const i = {
                body: n.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                keepalive: n.body.length <= 65536,
                ...t.fetchOptions
            };
            try {
                return e(t.url, i).then(o => ({
                    statusCode: o.status,
                    headers: {
                        "x-sentry-rate-limits": o.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": o.headers.get("Retry-After")
                    }
                }))
            } catch (o) {
                return uy(), Sr(o)
            }
        }
        return Ms(t, r)
    }
    const ly = 4;

    function py(t) {
        function e(r) {
            return new de((n, i) => {
                const o = new XMLHttpRequest;
                o.onerror = i, o.onreadystatechange = () => {
                    o.readyState === ly && n({
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
        return Ms(t, e)
    }
    const Fr = "?",
        dy = 30,
        hy = 40,
        _y = 50;

    function si(t, e, r, n) {
        const i = {
            filename: t,
            abs_path: t,
            function: e,
            in_app: !0
        };
        return r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i
    }
    const gy = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?(?:async )?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        yy = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        vy = t => {
            const e = gy.exec(t);
            if (e) {
                if (e[2] && e[2].indexOf("eval") === 0) {
                    const o = yy.exec(e[2]);
                    o && (e[2] = o[1], e[3] = o[2], e[4] = o[3])
                }
                const [n, i] = Gs(e[1] || Fr, e[2]);
                return si(i, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        my = [dy, vy],
        by = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Ey = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Sy = t => {
            const e = by.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const o = Ey.exec(e[3]);
                    o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "")
                }
                let n = e[3],
                    i = e[1] || Fr;
                return [i, n] = Gs(i, n), si(n, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        wy = [_y, Sy],
        Oy = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ky = t => {
            const e = Oy.exec(t);
            return e ? si(e[2], e[1] || Fr, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        Ty = [hy, ky],
        Ay = [my, wy, Ty],
        Ry = Es(...Ay),
        Gs = (t, e) => {
            const r = t.indexOf("safari-extension") !== -1,
                n = t.indexOf("safari-web-extension") !== -1;
            return r || n ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Fr, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
    class Ge {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = Ge.id
        }
        __init2() {
            this._installFunc = {
                onerror: xy,
                onunhandledrejection: Ny
            }
        }
        constructor(e) {
            Ge.prototype.__init.call(this), Ge.prototype.__init2.call(this), this._options = {
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
                n && e[r] && (Py(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    Ge.__initStatic();

    function xy() {
        Ue("error", t => {
            const [e, r, n] = Ws();
            if (!e.getIntegration(Ge)) return;
            const {
                msg: i,
                url: o,
                line: s,
                column: a,
                error: u
            } = t;
            if (Bs() || u && u.__sentry_own_request__) return;
            const f = u === void 0 && ot(i) ? Ly(i, o, s, a) : Hs(oi(r, u || i, void 0, n, !1), o, s, a);
            f.level = "error", Ys(e, u, f, "onerror")
        })
    }

    function Ny() {
        Ue("unhandledrejection", t => {
            const [e, r, n] = Ws();
            if (!e.getIntegration(Ge)) return;
            let i = t;
            try {
                "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
            } catch {}
            if (Bs() || i && i.__sentry_own_request__) return !0;
            const o = gs(i) ? Iy(i) : oi(r, i, void 0, n, !0);
            o.level = "error", Ys(e, i, o, "onunhandledrejection")
        })
    }

    function Iy(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function Ly(t, e, r, n) {
        const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = _s(t) ? t.message : t,
            s = "Error";
        const a = o.match(i);
        return a && (s = a[1], o = a[2]), Hs({
            exception: {
                values: [{
                    type: s,
                    value: o
                }]
            }
        }, e, r, n)
    }

    function Hs(t, e, r, n) {
        const i = t.exception = t.exception || {},
            o = i.values = i.values || [],
            s = o[0] = o[0] || {},
            a = s.stacktrace = s.stacktrace || {},
            u = a.frames = a.frames || [],
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            _ = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = ot(e) && e.length > 0 ? e : d_();
        return u.length === 0 && u.push({
            colno: f,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: _
        }), t
    }

    function Py(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Global Handler attached: ${t}`)
    }

    function Ys(t, e, r, n) {
        Kt(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function Ws() {
        const t = ie(),
            e = t.getClient(),
            r = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, r.stackParser, r.attachStacktrace]
    }
    const $y = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Xt {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = Xt.id
        }
        constructor(e) {
            Xt.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            this._options.setTimeout && fe(q, "setTimeout", ho), this._options.setInterval && fe(q, "setInterval", ho), this._options.requestAnimationFrame && fe(q, "requestAnimationFrame", Dy), this._options.XMLHttpRequest && "XMLHttpRequest" in q && fe(XMLHttpRequest.prototype, "send", Cy);
            const e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : $y).forEach(jy)
        }
    }
    Xt.__initStatic();

    function ho(t) {
        return function(...e) {
            const r = e[0];
            return e[0] = At(r, {
                mechanism: {
                    data: {
                        function: We(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function Dy(t) {
        return function(e) {
            return t.apply(this, [At(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: We(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function Cy(t) {
        return function(...e) {
            const r = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i => {
                i in r && typeof r[i] == "function" && fe(r, i, function(o) {
                    const s = {
                            mechanism: {
                                data: {
                                    function: i,
                                    handler: We(o)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        a = Zn(o);
                    return a && (s.mechanism.data.handler = We(a)), At(o, s)
                })
            }), t.apply(this, e)
        }
    }

    function jy(t) {
        const e = q,
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (fe(r, "addEventListener", function(n) {
            return function(i, o, s) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = At(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: We(o),
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
                            handler: We(o),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), s])
            }
        }), fe(r, "removeEventListener", function(n) {
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
    const Uy = "cause",
        My = 5;
    class mt {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = mt.id
        }
        constructor(e = {}) {
            mt.prototype.__init.call(this), this._key = e.key || Uy, this._limit = e.limit || My
        }
        setupOnce() {
            const e = ie().getClient();
            e && ti((r, n) => {
                const i = ie().getIntegration(mt);
                return i ? By(e.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    mt.__initStatic();

    function By(t, e, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !Ve(i.originalException, Error)) return n;
        const o = zs(t, r, i.originalException, e);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function zs(t, e, r, n, i = []) {
        if (!Ve(r[n], Error) || i.length + 1 >= e) return i;
        const o = Fs(t, r[n]);
        return zs(t, e, r[n], n, [o, ...i])
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
            ti(e => {
                if (ie().getIntegration(bt)) {
                    if (!q.navigator && !q.location && !q.document) return e;
                    const r = e.request && e.request.url || q.location && q.location.href,
                        {
                            referrer: n
                        } = q.document || {},
                        {
                            userAgent: i
                        } = q.navigator || {},
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
                        if (Fy(i, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function Fy(t, e) {
        return e ? !!(qy(t, e) || Gy(t, e)) : !1
    }

    function qy(t, e) {
        const r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !Vs(t, e) || !Ks(t, e))
    }

    function Gy(t, e) {
        const r = _o(e),
            n = _o(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !Vs(t, e) || !Ks(t, e))
    }

    function Ks(t, e) {
        let r = go(t),
            n = go(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let i = 0; i < n.length; i++) {
            const o = n[i],
                s = r[i];
            if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function) return !1
        }
        return !0
    }

    function Vs(t, e) {
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

    function _o(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function go(t) {
        const e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const Hy = [new vt, new Vt, new Xt, new Jt, new Ge, new mt, new Et, new bt];

    function Yy(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = Hy), t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__), q.SENTRY_RELEASE && q.SENTRY_RELEASE.id && (t.release = q.SENTRY_RELEASE.id)), t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: O_(t.stackParser || Ry),
            integrations: Rg(t),
            transport: t.transport || (Ss() ? fy : py)
        };
        jg(ay, e), t.autoSessionTracking && Wy()
    }

    function yo(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function Wy() {
        if (typeof q.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const t = ie();
        t.captureSession && (yo(t), Ue("history", ({
            from: e,
            to: r
        }) => {
            e === void 0 || e === r || yo(ie())
        }))
    }
    const zy = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        Ky = {
            RETRY: zy
        },
        vo = {
            en: Ky
        };
    let Vy = class {
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
                if (t_("[loader] load success", {
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
                    $s({
                        branch: u.branch,
                        "app.tag": u.tag,
                        "app.type": u.type,
                        "app.version": u.version,
                        "app.wrapper": u.wrapper
                    }), Co.pageView(u.tag)
                }
                vr.setup(e.app, ((s = e.room) == null ? void 0 : s.code) ?? ((a = e.client) == null ? void 0 : a.code));
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
                n = vr.get("preference:branch"),
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
                i = vo[n] ?? vo.en;
            e.classList.add("error"), r.textContent = i.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    };
    const mo = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        Jy = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        Xy = t => {
            Yy({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: Jy,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === mo.EcastEntityNotFound) return vg("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === mo.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(e, r);
                        n && (e.contexts = e.contexts || {}, e.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return e
                }
            }), $s({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    var Qy = /([:*])(\w+)/g,
        Zy = "([^/]+)",
        ev = /\*/g,
        tv = "?(?:.*)",
        rv = /\/\?/g,
        nv = "/?([^/]+|)",
        iv = "(?:/^|^)",
        ov = "";

    function Js(t) {
        return t === void 0 && (t = "/"), ci() ? location.pathname + location.search + location.hash : t
    }

    function ee(t) {
        return t.replace(/\/+$/, "").replace(/^\/+/, "")
    }

    function Or(t) {
        return typeof t == "string"
    }

    function sv(t) {
        return typeof t == "function"
    }

    function kr(t) {
        return t && t.indexOf("#") >= 0 && t.split("#").pop() || ""
    }

    function av(t, e) {
        return e.length === 0 || !t ? null : t.slice(1, t.length).reduce(function(r, n, i) {
            return r === null && (r = {}), r[e[i]] = decodeURIComponent(n), r
        }, null)
    }

    function Tr(t) {
        var e = ee(t).split(/\?(.*)?$/);
        return [ee(e[0]), e.slice(1).join("")]
    }

    function ai(t) {
        for (var e = {}, r = t.split("&"), n = 0; n < r.length; n++) {
            var i = r[n].split("=");
            if (i[0] !== "") {
                var o = decodeURIComponent(i[0]);
                e[o] ? (Array.isArray(e[o]) || (e[o] = [e[o]]), e[o].push(decodeURIComponent(i[1] || ""))) : e[o] = decodeURIComponent(i[1] || "")
            }
        }
        return e
    }

    function Xs(t, e) {
        var r = Tr(ee(t.currentLocationPath)),
            n = r[0],
            i = r[1],
            o = i === "" ? null : ai(i),
            s = [],
            a;
        if (Or(e.path)) {
            if (a = iv + ee(e.path).replace(Qy, function(y, v, E) {
                    return s.push(E), Zy
                }).replace(ev, tv).replace(rv, nv) + "$", ee(e.path) === "" && ee(n) === "") return {
                url: n,
                queryString: i,
                hashString: kr(t.to),
                route: e,
                data: null,
                params: o
            }
        } else a = e.path;
        var u = new RegExp(a, ov),
            f = n.match(u);
        if (f) {
            var _ = Or(e.path) ? av(f, s) : f.groups ? f.groups : f.slice(1);
            return {
                url: ee(n.replace(new RegExp("^" + t.instance.root), "")),
                queryString: i,
                hashString: kr(t.to),
                route: e,
                data: _,
                params: o
            }
        }
        return !1
    }

    function Qs() {
        return !!(typeof window < "u" && window.history && window.history.pushState)
    }

    function ct(t, e) {
        return typeof t[e] > "u" || t[e] === !0
    }

    function cv(t) {
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

    function ci() {
        return typeof window < "u"
    }

    function uv(t, e) {
        return t === void 0 && (t = []), e === void 0 && (e = {}), t.filter(function(r) {
            return r
        }).forEach(function(r) {
            ["before", "after", "already", "leave"].forEach(function(n) {
                r[n] && (e[n] || (e[n] = []), e[n].push(r[n]))
            })
        }), e
    }

    function xe(t, e, r) {
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
    xe.if = function(t, e, r) {
        return Array.isArray(e) || (e = [e]), Array.isArray(r) || (r = [r]), [t, e, r]
    };

    function bo(t, e) {
        typeof t.currentLocationPath > "u" && (t.currentLocationPath = t.to = Js(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), e()
    }

    function sn(t, e) {
        for (var r = 0; r < t.instance.routes.length; r++) {
            var n = t.instance.routes[r],
                i = Xs(t, n);
            if (i && (t.matches || (t.matches = []), t.matches.push(i), t.resolveOptions.strategy === "ONE")) {
                e();
                return
            }
        }
        e()
    }

    function fv(t, e) {
        t.navigateOptions && (typeof t.navigateOptions.shouldResolve < "u" && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), typeof t.navigateOptions.silent < "u" && console.warn('"silent" is deprecated. Please check the documentation.')), e()
    }

    function lv(t, e) {
        t.navigateOptions.force === !0 ? (t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]), e(!1)) : e()
    }
    var Eo = ci(),
        pv = Qs();

    function dv(t, e) {
        if (ct(t.navigateOptions, "updateBrowserURL")) {
            var r = ("/" + t.to).replace(/\/\//g, "/"),
                n = Eo && t.resolveOptions && t.resolveOptions.hash === !0;
            pv ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {}, t.navigateOptions.title || "", n ? "#" + r : r), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                if (!n) {
                    var i = location.hash;
                    location.hash = "", location.hash = i
                }
                t.instance.__freezeListening = !1
            }, 1))) : Eo && (window.location.href = t.to)
        }
        e()
    }

    function Zs(t, e) {
        var r = t.instance;
        if (!r.lastResolved()) {
            e();
            return
        }
        xe(r.lastResolved().map(function(n) {
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
                if (ct(t.navigateOptions, "callHooks") && s) {
                    xe(n.route.hooks.leave.map(function(f) {
                        return function(_, y) {
                            return f(function(v) {
                                v === !1 ? t.instance.__markAsClean(t) : y()
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

    function hv(t, e) {
        t.match.route.hooks && t.match.route.hooks.before && ct(t.navigateOptions, "callHooks") ? xe(t.match.route.hooks.before.map(function(r) {
            return function(i, o) {
                return r(function(s) {
                    s === !1 ? t.instance.__markAsClean(t) : o()
                }, t.match)
            }
        }).concat([function() {
            return e()
        }])) : e()
    }

    function _v(t, e) {
        ct(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), e()
    }

    function gv(t, e) {
        t.match.route.hooks && t.match.route.hooks.after && ct(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(r) {
            return r(t.match)
        }), e()
    }

    function yv(t, e) {
        var r = t.instance.lastResolved();
        if (r && r[0] && r[0].route === t.match.route && r[0].url === t.match.url && r[0].queryString === t.match.queryString) {
            r.forEach(function(n) {
                n.route.hooks && n.route.hooks.already && ct(t.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(i) {
                    return i(t.match)
                })
            }), e(!1);
            return
        }
        e()
    }

    function vv(t, e) {
        var r = t.instance._notFoundRoute;
        if (r) {
            t.notFoundHandled = !0;
            var n = Tr(t.currentLocationPath),
                i = n[0],
                o = n[1],
                s = kr(t.to);
            r.path = ee(i);
            var a = {
                url: r.path,
                queryString: o,
                hashString: s,
                data: null,
                route: r,
                params: o !== "" ? ai(o) : null
            };
            t.matches = [a], t.match = a
        }
        e()
    }

    function mv(t, e) {
        (!t.resolveOptions || t.resolveOptions.noMatchWarning === !1 || typeof t.resolveOptions.noMatchWarning > "u") && console.warn('Navigo: "' + t.currentLocationPath + `" didn't match any of the registered routes.`), e()
    }

    function bv(t, e) {
        t.instance._setCurrent(null), e()
    }

    function ea(t, e) {
        ct(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), e()
    }
    var ta = [yv, hv, _v, gv],
        So = [Zs, vv, xe.if(function(t) {
            var e = t.notFoundHandled;
            return e
        }, ta.concat([ea]), [mv, bv])];

    function On() {
        return On = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, On.apply(this, arguments)
    }

    function wo(t, e) {
        var r = 0;

        function n() {
            if (r === t.matches.length) {
                ea(t, e);
                return
            }
            xe(ta, On({}, t, {
                match: t.matches[r]
            }), function() {
                r += 1, n()
            })
        }
        Zs(t, n)
    }

    function an(t) {
        t.instance.__markAsClean(t)
    }

    function kn() {
        return kn = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, kn.apply(this, arguments)
    }
    var Oo = "[data-navigo]";

    function Ev(t, e) {
        var r = e || {
                strategy: "ONE",
                hash: !1,
                noMatchWarning: !1,
                linksSelector: Oo
            },
            n = this,
            i = "/",
            o = null,
            s = [],
            a = !1,
            u, f = Qs(),
            _ = ci();
        t ? i = ee(t) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');

        function y(b) {
            return b.indexOf("#") >= 0 && (r.hash === !0 ? b = b.split("#")[1] || "/" : b = b.split("#")[0]), b
        }

        function v(b) {
            return ee(i + "/" + ee(b))
        }

        function E(b, A, x, B) {
            return b = Or(b) ? v(b) : b, {
                name: B || ee(String(b)),
                path: b,
                handler: A,
                hooks: uv(x)
            }
        }

        function w(b, A, x) {
            var B = this;
            return typeof b == "object" && !(b instanceof RegExp) ? (Object.keys(b).forEach(function(F) {
                if (typeof b[F] == "function") B.on(F, b[F]);
                else {
                    var Ee = b[F],
                        Xe = Ee.uses,
                        _e = Ee.as,
                        Qe = Ee.hooks;
                    s.push(E(F, Xe, [u, Qe], _e))
                }
            }), this) : (typeof b == "function" && (x = A, A = b, b = i), s.push(E(b, A, [u, x])), this)
        }

        function I(b, A) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.resolve(b, A)
                });
                return
            } else n.__dirty = !0;
            b = b ? ee(i) + "/" + ee(b) : void 0;
            var x = {
                instance: n,
                to: b,
                currentLocationPath: b,
                navigateOptions: {},
                resolveOptions: kn({}, r, A)
            };
            return xe([bo, sn, xe.if(function(B) {
                var F = B.matches;
                return F && F.length > 0
            }, wo, So)], x, an), x.matches ? x.matches : !1
        }

        function L(b, A) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.navigate(b, A)
                });
                return
            } else n.__dirty = !0;
            b = ee(i) + "/" + ee(b);
            var x = {
                instance: n,
                to: b,
                navigateOptions: A || {},
                resolveOptions: A && A.resolveOptions ? A.resolveOptions : r,
                currentLocationPath: y(b)
            };
            xe([fv, lv, sn, xe.if(function(B) {
                var F = B.matches;
                return F && F.length > 0
            }, wo, So), dv, an], x, an)
        }

        function J(b, A, x) {
            var B = pe(b, A);
            return B !== null ? (L(B.replace(new RegExp("^/?" + i), ""), x), !0) : !1
        }

        function G(b) {
            return this.routes = s = s.filter(function(A) {
                return Or(b) ? ee(A.path) !== ee(b) : sv(b) ? b !== A.handler : String(A.path) !== String(b)
            }), this
        }

        function oe() {
            f && (this.__popstateListener = function() {
                n.__freezeListening || I()
            }, window.addEventListener("popstate", this.__popstateListener))
        }

        function ye() {
            this.routes = s = [], f && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = a = !0
        }

        function se(b, A) {
            return n._notFoundRoute = E("*", b, [u, A], "__NOT_FOUND__"), this
        }

        function ae() {
            if (_) return he().forEach(function(b) {
                if (b.getAttribute("data-navigo") === "false" || b.getAttribute("target") === "_blank") {
                    b.hasListenerAttached && b.removeEventListener("click", b.navigoHandler);
                    return
                }
                b.hasListenerAttached || (b.hasListenerAttached = !0, b.navigoHandler = function(A) {
                    if ((A.ctrlKey || A.metaKey) && A.target.tagName.toLowerCase() === "a") return !1;
                    var x = b.getAttribute("href");
                    if (typeof x > "u" || x === null) return !1;
                    if (x.match(/^(http|https)/) && typeof URL < "u") try {
                        var B = new URL(x);
                        x = B.pathname + B.search
                    } catch {}
                    var F = cv(b.getAttribute("data-navigo-options"));
                    a || (A.preventDefault(), A.stopPropagation(), n.navigate(ee(x), F))
                }, b.addEventListener("click", b.navigoHandler))
            }), n
        }

        function he() {
            return _ ? [].slice.call(document.querySelectorAll(r.linksSelector || Oo)) : []
        }

        function te(b) {
            return "/" + i + "/" + ee(b)
        }

        function H(b) {
            return u = b, this
        }

        function Ct() {
            return o
        }

        function pe(b, A, x) {
            var B = s.find(function(Xe) {
                    return Xe.name === b
                }),
                F = null;
            if (B) {
                if (F = B.path, A)
                    for (var Ee in A) F = F.replace(":" + Ee, A[Ee]);
                F = F.match(/^\//) ? F : "/" + F
            }
            return F && x && !x.includeRoot && (F = F.replace(new RegExp("^/" + i), "")), F
        }

        function Je(b) {
            return b.getAttribute("href")
        }

        function be(b) {
            var A = Tr(ee(b)),
                x = A[0],
                B = A[1],
                F = B === "" ? null : ai(B),
                Ee = kr(b),
                Xe = E(x, function() {}, [u], x);
            return {
                url: x,
                queryString: B,
                hashString: Ee,
                route: Xe,
                data: null,
                params: F
            }
        }

        function m() {
            return be(ee(Js(i)).replace(new RegExp("^" + i), ""))
        }

        function T(b) {
            var A = {
                instance: n,
                currentLocationPath: b,
                to: b,
                navigateOptions: {},
                resolveOptions: r
            };
            return sn(A, function() {}), A.matches ? A.matches : !1
        }

        function D(b, A, x) {
            typeof A < "u" && (typeof x > "u" || x) && (A = v(A));
            var B = {
                instance: n,
                to: A,
                currentLocationPath: A
            };
            bo(B, function() {}), typeof b == "string" && (b = typeof x > "u" || x ? v(b) : b);
            var F = Xs(B, {
                name: String(b),
                path: b,
                handler: function() {},
                hooks: {}
            });
            return F || !1
        }

        function W(b, A, x) {
            return typeof A == "string" && (A = Y(A)), A ? (A.hooks[b] || (A.hooks[b] = []), A.hooks[b].push(x), function() {
                A.hooks[b] = A.hooks[b].filter(function(B) {
                    return B !== x
                })
            }) : (console.warn("Route doesn't exists: " + A), function() {})
        }

        function Y(b) {
            return typeof b == "string" ? s.find(function(A) {
                return A.name === v(b)
            }) : s.find(function(A) {
                return A.handler === b
            })
        }

        function C(b) {
            b.instance.__dirty = !1, b.instance.__waiting.length > 0 && b.instance.__waiting.shift()()
        }
        this.root = i, this.routes = s, this.destroyed = a, this.current = o, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = C, this.on = w, this.off = G, this.resolve = I, this.navigate = L, this.navigateByName = J, this.destroy = ye, this.notFound = se, this.updatePageLinks = ae, this.link = te, this.hooks = H, this.extractGETParameters = function(b) {
            return Tr(y(b))
        }, this.lastResolved = Ct, this.generate = pe, this.getLinkPath = Je, this.match = T, this.matchLocation = D, this.getCurrentLocation = m, this.addBeforeHook = W.bind(this, "before"), this.addAfterHook = W.bind(this, "after"), this.addAlreadyHook = W.bind(this, "already"), this.addLeaveHook = W.bind(this, "leave"), this.getRoute = Y, this._pathToMatchObject = be, this._clean = ee, this._checkForAHash = y, this._setCurrent = function(b) {
            return o = n.current = b
        }, oe.call(this), ae.call(this)
    }

    function Sv(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                e += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
    }

    function wv() {
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

    function cn(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = wv(), document.getElementsByTagName("html")[0].append(e);
        const n = document.getElementById("app");
        n.innerHTML = Sv(t)
    }

    function Ov() {
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

    function kv() {
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

    function Tv() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = kv(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = Ov()
    }
    const lt = new Ev("/"),
        Av = () => {
            function t(r, n) {
                const i = n != null && n.queryString ? `?${n.queryString}` : "";
                lt.navigate(`${r}${i}`, {
                    historyAPIMethod: "replaceState"
                })
            }
            lt.hooks({
                before(r) {
                    var i;
                    const n = (i = lt.lastResolved()) == null ? void 0 : i[0];
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
                        Tv()
                    },
                    "/debug": r => {
                        cn()
                    },
                    "/debug/:app": r => {
                        cn(r.data.app)
                    },
                    "/debug/local/:app": r => {
                        cn(r.data.app)
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
                    }
                }]
            ]);
            lt.on(e.get(window.tv.location)), lt.notFound(r => {
                t("/", r)
            })
        },
        Rv = () => {
            lt.resolve()
        },
        xv = 9091,
        Nv = "teeko.jackboxgames",
        Iv = "production",
        Lv = 1,
        Pv = {
            branch: "main",
            sha: "b9fad7246c28e46cb0627a1804709570bc42cc4a",
            lastUpdated: 1683053645822,
            version: "5.147.41",
            type: "production"
        },
        $v = {
            main: {
                sha: "b9fad7246c28e46cb0627a1804709570bc42cc4a",
                lastUpdated: 1683053645822,
                version: "5.147.41",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main//@connect",
                        version: "5.134.31"
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
                        version: "5.28.0"
                    },
                    "@moderator": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main//@moderator",
                        version: "5.147.41"
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
                        version: "5.94.0"
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
                        base: "main//@teeko-web",
                        version: "5.142.38"
                    }
                }
            }
        },
        Dv = {
            environment: Iv,
            version: Lv,
            loader: Pv,
            branches: $v
        },
        ui = Dv;
    let Cv = Vy;
    const Bt = new Cv(ui),
        ra = window.location.hostname,
        jv = Number(window.location.port),
        Uv = ra === "localhost" && jv === xv,
        Mv = ra.includes(Nv) || Uv,
        Bv = Mv ? "TEEKO_WEB" : "TV";
    window.tv = {
        debugLoad: Bt.debugLoad,
        load: Bt.load,
        register: Bt.register,
        mount: Bt.mount,
        connect: Bt.connect,
        location: Bv,
        manifest: ui
    };
    Xy(ui);
    Co.setup();
    vr.setup();
    Av();
    Rv()
});
export default Fv();
//# sourceMappingURL=1bf21a5c.js.map