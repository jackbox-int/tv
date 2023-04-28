var pa = Object.defineProperty;
var da = (e, t, r) => t in e ? pa(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var ha = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t), t.exports);
var Se = (e, t, r) => (da(e, typeof t != "symbol" ? t + "" : t, r), r);
var $v = ha((jv, na) => {
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
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
        var gi = {
            hostname: ""
        };
        le = {
            navigator: {
                userAgent: ""
            },
            document: {
                location: gi,
                referrer: ""
            },
            screen: {
                width: 0,
                height: 0
            },
            location: gi
        }
    } else le = window;
    var Rr = Array.prototype,
        _a = Function.prototype,
        To = Object.prototype,
        Be = Rr.slice,
        Zt = To.toString,
        xr = To.hasOwnProperty,
        ne = le.console,
        Le = le.navigator,
        V = le.document,
        Mt = le.opera,
        lr = le.screen,
        Te = Le.userAgent,
        zr = _a.bind,
        yi = Rr.forEach,
        vi = Rr.indexOf,
        mi = Rr.map,
        ga = Array.isArray,
        fn = {},
        c = {
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        z = {
            log: function() {
                if (Fe.DEBUG && !c.isUndefined(ne) && ne) try {
                    ne.log.apply(ne, arguments)
                } catch {
                    c.each(arguments, function(t) {
                        ne.log(t)
                    })
                }
            },
            warn: function() {
                if (Fe.DEBUG && !c.isUndefined(ne) && ne) {
                    var e = ["Mixpanel warning:"].concat(c.toArray(arguments));
                    try {
                        ne.warn.apply(ne, e)
                    } catch {
                        c.each(e, function(r) {
                            ne.warn(r)
                        })
                    }
                }
            },
            error: function() {
                if (Fe.DEBUG && !c.isUndefined(ne) && ne) {
                    var e = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        ne.error.apply(ne, e)
                    } catch {
                        c.each(e, function(r) {
                            ne.error(r)
                        })
                    }
                }
            },
            critical: function() {
                if (!c.isUndefined(ne) && ne) {
                    var e = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        ne.error.apply(ne, e)
                    } catch {
                        c.each(e, function(r) {
                            ne.error(r)
                        })
                    }
                }
            }
        },
        Kr = function(e, t) {
            return function() {
                return arguments[0] = "[" + t + "] " + arguments[0], e.apply(z, arguments)
            }
        },
        An = function(e) {
            return {
                log: Kr(z.log, e),
                error: Kr(z.error, e),
                critical: Kr(z.critical, e)
            }
        };
    c.bind = function(e, t) {
        var r, n;
        if (zr && e.bind === zr) return zr.apply(e, Be.call(arguments, 1));
        if (!c.isFunction(e)) throw new TypeError;
        return r = Be.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return e.apply(t, r.concat(Be.call(arguments)));
            var i = {};
            i.prototype = e.prototype;
            var o = new i;
            i.prototype = null;
            var s = e.apply(o, r.concat(Be.call(arguments)));
            return Object(s) === s ? s : o
        }, n
    };
    c.each = function(e, t, r) {
        if (e != null) {
            if (yi && e.forEach === yi) e.forEach(t, r);
            else if (e.length === +e.length) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (n in e && t.call(r, e[n], n, e) === fn) return
            } else
                for (var o in e)
                    if (xr.call(e, o) && t.call(r, e[o], o, e) === fn) return
        }
    };
    c.extend = function(e) {
        return c.each(Be.call(arguments, 1), function(t) {
            for (var r in t) t[r] !== void 0 && (e[r] = t[r])
        }), e
    };
    c.isArray = ga || function(e) {
        return Zt.call(e) === "[object Array]"
    };
    c.isFunction = function(e) {
        try {
            return /^\s*\bfunction\b/.test(e)
        } catch {
            return !1
        }
    };
    c.isArguments = function(e) {
        return !!(e && xr.call(e, "callee"))
    };
    c.toArray = function(e) {
        return e ? e.toArray ? e.toArray() : c.isArray(e) || c.isArguments(e) ? Be.call(e) : c.values(e) : []
    };
    c.map = function(e, t, r) {
        if (mi && e.map === mi) return e.map(t, r);
        var n = [];
        return c.each(e, function(i) {
            n.push(t.call(r, i))
        }), n
    };
    c.keys = function(e) {
        var t = [];
        return e === null || c.each(e, function(r, n) {
            t[t.length] = n
        }), t
    };
    c.values = function(e) {
        var t = [];
        return e === null || c.each(e, function(r) {
            t[t.length] = r
        }), t
    };
    c.include = function(e, t) {
        var r = !1;
        return e === null ? r : vi && e.indexOf === vi ? e.indexOf(t) != -1 : (c.each(e, function(n) {
            if (r || (r = n === t)) return fn
        }), r)
    };
    c.includes = function(e, t) {
        return e.indexOf(t) !== -1
    };
    c.inherit = function(e, t) {
        return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
    };
    c.isObject = function(e) {
        return e === Object(e) && !c.isArray(e)
    };
    c.isEmptyObject = function(e) {
        if (c.isObject(e)) {
            for (var t in e)
                if (xr.call(e, t)) return !1;
            return !0
        }
        return !1
    };
    c.isUndefined = function(e) {
        return e === void 0
    };
    c.isString = function(e) {
        return Zt.call(e) == "[object String]"
    };
    c.isDate = function(e) {
        return Zt.call(e) == "[object Date]"
    };
    c.isNumber = function(e) {
        return Zt.call(e) == "[object Number]"
    };
    c.isElement = function(e) {
        return !!(e && e.nodeType === 1)
    };
    c.encodeDates = function(e) {
        return c.each(e, function(t, r) {
            c.isDate(t) ? e[r] = c.formatDate(t) : c.isObject(t) && (e[r] = c.encodeDates(t))
        }), e
    };
    c.timestamp = function() {
        return Date.now = Date.now || function() {
            return +new Date
        }, Date.now()
    };
    c.formatDate = function(e) {
        function t(r) {
            return r < 10 ? "0" + r : r
        }
        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
    };
    c.strip_empty_properties = function(e) {
        var t = {};
        return c.each(e, function(r, n) {
            c.isString(r) && r.length > 0 && (t[n] = r)
        }), t
    };
    c.truncate = function(e, t) {
        var r;
        return typeof e == "string" ? r = e.slice(0, t) : c.isArray(e) ? (r = [], c.each(e, function(n) {
            r.push(c.truncate(n, t))
        })) : c.isObject(e) ? (r = {}, c.each(e, function(n, i) {
            r[i] = c.truncate(n, t)
        })) : r = e, r
    };
    c.JSONEncode = function() {
        return function(e) {
            var t = e,
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
                            if (s += a, E = [], Zt.apply(w) === "[object Array]") {
                                for (y = w.length, u = 0; u < y; u += 1) E[u] = n(u, w) || "null";
                                return _ = E.length === 0 ? "[]" : s ? `[
` + s + E.join(`,
` + s) + `
` + v + "]" : "[" + E.join(",") + "]", s = v, _
                            }
                            for (f in w) xr.call(w, f) && (_ = n(f, w), _ && E.push(r(f) + (s ? ": " : ":") + _));
                            return _ = E.length === 0 ? "{}" : s ? "{" + E.join(",") + v + "}" : "{" + E.join(",") + "}", s = v, _
                    }
                };
            return n("", {
                "": t
            })
        }
    }();
    c.JSONDecode = function() {
        var e, t, r = {
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
                throw w.at = e, w.text = n, w
            },
            o = function(E) {
                return E && E !== t && i("Expected '" + E + "' instead of '" + t + "'"), t = n.charAt(e), e += 1, t
            },
            s = function() {
                var E, w = "";
                for (t === "-" && (w = "-", o("-")); t >= "0" && t <= "9";) w += t, o();
                if (t === ".")
                    for (w += "."; o() && t >= "0" && t <= "9";) w += t;
                if (t === "e" || t === "E")
                    for (w += t, o(), (t === "-" || t === "+") && (w += t, o()); t >= "0" && t <= "9";) w += t, o();
                if (E = +w, !isFinite(E)) i("Bad number");
                else return E
            },
            a = function() {
                var E, w, I = "",
                    L;
                if (t === '"')
                    for (; o();) {
                        if (t === '"') return o(), I;
                        if (t === "\\")
                            if (o(), t === "u") {
                                for (L = 0, w = 0; w < 4 && (E = parseInt(o(), 16), !!isFinite(E)); w += 1) L = L * 16 + E;
                                I += String.fromCharCode(L)
                            } else if (typeof r[t] == "string") I += r[t];
                        else break;
                        else I += t
                    }
                i("Bad string")
            },
            u = function() {
                for (; t && t <= " ";) o()
            },
            f = function() {
                switch (t) {
                    case "t":
                        return o("t"), o("r"), o("u"), o("e"), !0;
                    case "f":
                        return o("f"), o("a"), o("l"), o("s"), o("e"), !1;
                    case "n":
                        return o("n"), o("u"), o("l"), o("l"), null
                }
                i('Unexpected "' + t + '"')
            },
            _, y = function() {
                var E = [];
                if (t === "[") {
                    if (o("["), u(), t === "]") return o("]"), E;
                    for (; t;) {
                        if (E.push(_()), u(), t === "]") return o("]"), E;
                        o(","), u()
                    }
                }
                i("Bad array")
            },
            v = function() {
                var E, w = {};
                if (t === "{") {
                    if (o("{"), u(), t === "}") return o("}"), w;
                    for (; t;) {
                        if (E = a(), u(), o(":"), Object.hasOwnProperty.call(w, E) && i('Duplicate key "' + E + '"'), w[E] = _(), u(), t === "}") return o("}"), w;
                        o(","), u()
                    }
                }
                i("Bad object")
            };
        return _ = function() {
                switch (u(), t) {
                    case "{":
                        return v();
                    case "[":
                        return y();
                    case '"':
                        return a();
                    case "-":
                        return s();
                    default:
                        return t >= "0" && t <= "9" ? s() : f()
                }
            },
            function(E) {
                var w;
                return n = E, e = 0, t = " ", w = _(), u(), t && i("Syntax error"), w
            }
    }();
    c.base64Encode = function(e) {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r, n, i, o, s, a, u, f, _ = 0,
            y = 0,
            v = "",
            E = [];
        if (!e) return e;
        e = c.utf8Encode(e);
        do r = e.charCodeAt(_++), n = e.charCodeAt(_++), i = e.charCodeAt(_++), f = r << 16 | n << 8 | i, o = f >> 18 & 63, s = f >> 12 & 63, a = f >> 6 & 63, u = f & 63, E[y++] = t.charAt(o) + t.charAt(s) + t.charAt(a) + t.charAt(u); while (_ < e.length);
        switch (v = E.join(""), e.length % 3) {
            case 1:
                v = v.slice(0, -2) + "==";
                break;
            case 2:
                v = v.slice(0, -1) + "=";
                break
        }
        return v
    };
    c.utf8Encode = function(e) {
        e = (e + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        var t = "",
            r, n, i = 0,
            o;
        for (r = n = 0, i = e.length, o = 0; o < i; o++) {
            var s = e.charCodeAt(o),
                a = null;
            s < 128 ? n++ : s > 127 && s < 2048 ? a = String.fromCharCode(s >> 6 | 192, s & 63 | 128) : a = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128), a !== null && (n > r && (t += e.substring(r, n)), t += a, r = n = o + 1)
        }
        return n > r && (t += e.substring(r, e.length)), t
    };
    c.UUID = function() {
        var e = function() {
                for (var n = 1 * new Date, i = 0; n == 1 * new Date;) i++;
                return n.toString(16) + i.toString(16)
            },
            t = function() {
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
            var n = (lr.height * lr.width).toString(16);
            return e() + "-" + t() + "-" + r() + "-" + n + "-" + e()
        }
    }();
    var bi = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
    c.isBlockedUA = function(e) {
        var t;
        for (e = e.toLowerCase(), t = 0; t < bi.length; t++)
            if (e.indexOf(bi[t]) !== -1) return !0;
        return !1
    };
    c.HTTPBuildQuery = function(e, t) {
        var r, n, i = [];
        return c.isUndefined(t) && (t = "&"), c.each(e, function(o, s) {
            r = encodeURIComponent(o.toString()), n = encodeURIComponent(s), i[i.length] = n + "=" + r
        }), i.join(t)
    };
    c.getQueryParam = function(e, t) {
        t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var r = "[\\?&]" + t + "=([^&#]*)",
            n = new RegExp(r),
            i = n.exec(e);
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
        get: function(e) {
            for (var t = e + "=", r = V.cookie.split(";"), n = 0; n < r.length; n++) {
                for (var i = r[n]; i.charAt(0) == " ";) i = i.substring(1, i.length);
                if (i.indexOf(t) === 0) return decodeURIComponent(i.substring(t.length, i.length))
            }
            return null
        },
        parse: function(e) {
            var t;
            try {
                t = c.JSONDecode(c.cookie.get(e)) || {}
            } catch {}
            return t
        },
        set_seconds: function(e, t, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var _ = Ei(V.location.hostname);
                a = _ ? "; domain=." + _ : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure"), V.cookie = e + "=" + encodeURIComponent(t) + u + "; path=/" + a + f
        },
        set: function(e, t, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var _ = Ei(V.location.hostname);
                a = _ ? "; domain=." + _ : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 24 * 60 * 60 * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure");
            var v = e + "=" + encodeURIComponent(t) + u + "; path=/" + a + f;
            return V.cookie = v, v
        },
        remove: function(e, t, r) {
            c.cookie.set(e, "", -1, t, !1, !1, r)
        }
    };
    var Vr = null,
        pr = function(e, t) {
            if (Vr !== null && !t) return Vr;
            var r = !0;
            try {
                e = e || window.localStorage;
                var n = "__mplss_" + Rn(8),
                    i = "xyz";
                e.setItem(n, i), e.getItem(n) !== i && (r = !1), e.removeItem(n)
            } catch {
                r = !1
            }
            return Vr = r, r
        };
    c.localStorage = {
        is_supported: function(e) {
            var t = pr(null, e);
            return t || z.error("localStorage unsupported; falling back to cookie store"), t
        },
        error: function(e) {
            z.error("localStorage error: " + e)
        },
        get: function(e) {
            try {
                return window.localStorage.getItem(e)
            } catch (t) {
                c.localStorage.error(t)
            }
            return null
        },
        parse: function(e) {
            try {
                return c.JSONDecode(c.localStorage.get(e)) || {}
            } catch {}
            return null
        },
        set: function(e, t) {
            try {
                window.localStorage.setItem(e, t)
            } catch (r) {
                c.localStorage.error(r)
            }
        },
        remove: function(e) {
            try {
                window.localStorage.removeItem(e)
            } catch (t) {
                c.localStorage.error(t)
            }
        }
    };
    c.register_event = function() {
        var e = function(n, i, o, s, a) {
            if (!n) {
                z.error("No valid element provided to register_event");
                return
            }
            if (n.addEventListener && !s) n.addEventListener(i, o, !!a);
            else {
                var u = "on" + i,
                    f = n[u];
                n[u] = t(n, o, f)
            }
        };

        function t(n, i, o) {
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
        }, e
    }();
    var ya = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
    c.dom_query = function() {
        function e(i) {
            return i.all ? i.all : i.getElementsByTagName("*")
        }
        var t = /[\t\r\n]/g;

        function r(i, o) {
            var s = " " + o + " ";
            return (" " + i.className + " ").replace(t, " ").indexOf(s) >= 0
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
                        for (u == "*" ? w = e(L[v]) : w = L[v].getElementsByTagName(u), E = 0; E < w.length; E++) f[_++] = w[E];
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
                        for (u == "*" ? w = e(L[v]) : w = L[v].getElementsByTagName(u), E = 0; E < w.length; E++) f[_++] = w[E];
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
            var e = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                t = "",
                r = {};
            return c.each(e, function(n) {
                t = c.getQueryParam(V.URL, n), t.length && (r[n] = t)
            }), r
        },
        searchEngine: function(e) {
            return e.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : e.search("https?://(.*)bing.com") === 0 ? "bing" : e.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : e.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null
        },
        searchInfo: function(e) {
            var t = c.info.searchEngine(e),
                r = t != "yahoo" ? "q" : "p",
                n = {};
            if (t !== null) {
                n.$search_engine = t;
                var i = c.getQueryParam(e, r);
                i.length && (n.mp_keyword = i)
            }
            return n
        },
        browser: function(e, t, r) {
            return t = t || "", r || c.includes(e, " OPR/") ? c.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : c.includes(e, "IEMobile") || c.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : c.includes(e, "SamsungBrowser/") ? "Samsung Internet" : c.includes(e, "Edge") || c.includes(e, "Edg/") ? "Microsoft Edge" : c.includes(e, "FBIOS") ? "Facebook Mobile" : c.includes(e, "Chrome") ? "Chrome" : c.includes(e, "CriOS") ? "Chrome iOS" : c.includes(e, "UCWEB") || c.includes(e, "UCBrowser") ? "UC Browser" : c.includes(e, "FxiOS") ? "Firefox iOS" : c.includes(t, "Apple") ? c.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : c.includes(e, "Android") ? "Android Mobile" : c.includes(e, "Konqueror") ? "Konqueror" : c.includes(e, "Firefox") ? "Firefox" : c.includes(e, "MSIE") || c.includes(e, "Trident/") ? "Internet Explorer" : c.includes(e, "Gecko") ? "Mozilla" : ""
        },
        browserVersion: function(e, t, r) {
            var n = c.info.browser(e, t, r),
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
            var s = e.match(o);
            return s ? parseFloat(s[s.length - 2]) : null
        },
        os: function() {
            var e = Te;
            return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
        },
        device: function(e) {
            return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : ""
        },
        referringDomain: function(e) {
            var t = e.split("/");
            return t.length >= 3 ? t[2] : ""
        },
        properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(Te, Le.vendor, Mt),
                $referrer: V.referrer,
                $referring_domain: c.info.referringDomain(V.referrer),
                $device: c.info.device(Te)
            }), {
                $current_url: le.location.href,
                $browser_version: c.info.browserVersion(Te, Le.vendor, Mt),
                $screen_height: lr.height,
                $screen_width: lr.width,
                mp_lib: "web",
                $lib_version: Fe.LIB_VERSION,
                $insert_id: Rn(),
                time: c.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(Te, Le.vendor, Mt)
            }), {
                $browser_version: c.info.browserVersion(Te, Le.vendor, Mt)
            })
        },
        pageviewInfo: function(e) {
            return c.strip_empty_properties({
                mp_page: e,
                mp_referrer: V.referrer,
                mp_browser: c.info.browser(Te, Le.vendor, Mt),
                mp_platform: c.info.os()
            })
        }
    };
    var Rn = function(e) {
            var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return e ? t.substring(0, e) : t
        },
        va = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        ma = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Ei = function(e) {
            var t = ma,
                r = e.split("."),
                n = r[r.length - 1];
            (n.length > 4 || n === "com" || n === "org") && (t = va);
            var i = e.match(t);
            return i ? i[0] : ""
        },
        dr = null,
        hr = null;
    typeof JSON < "u" && (dr = JSON.stringify, hr = JSON.parse);
    dr = dr || c.JSONEncode;
    hr = hr || c.JSONDecode;
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
    De.prototype.init = function(e) {
        return this.mp = e, this
    };
    De.prototype.track = function(e, t, r, n) {
        var i = this,
            o = c.dom_query(e);
        if (o.length === 0) {
            z.error("The DOM query (" + e + ") returned 0 elements");
            return
        }
        return c.each(o, function(s) {
            c.register_event(s, this.override_event, function(a) {
                var u = {},
                    f = i.create_properties(r, this),
                    _ = i.mp.get_config("track_links_timeout");
                i.event_handler(a, this, u), window.setTimeout(i.track_callback(n, f, u, !0), _), i.mp.track(t, f, i.track_callback(n, f, u))
            })
        }, this), !0
    };
    De.prototype.track_callback = function(e, t, r, n) {
        n = n || !1;
        var i = this;
        return function() {
            r.callback_fired || (r.callback_fired = !0, !(e && e(n, t) === !1) && i.after_track_handler(t, r, n))
        }
    };
    De.prototype.create_properties = function(e, t) {
        var r;
        return typeof e == "function" ? r = e(t) : r = c.extend({}, e), r
    };
    var St = function() {
        this.override_event = "click"
    };
    c.inherit(St, De);
    St.prototype.create_properties = function(e, t) {
        var r = St.superclass.create_properties.apply(this, arguments);
        return t.href && (r.url = t.href), r
    };
    St.prototype.event_handler = function(e, t, r) {
        r.new_tab = e.which === 2 || e.metaKey || e.ctrlKey || t.target === "_blank", r.href = t.href, r.new_tab || e.preventDefault()
    };
    St.prototype.after_track_handler = function(e, t) {
        t.new_tab || setTimeout(function() {
            window.location = t.href
        }, 0)
    };
    var Nr = function() {
        this.override_event = "submit"
    };
    c.inherit(Nr, De);
    Nr.prototype.event_handler = function(e, t, r) {
        r.element = t, e.preventDefault()
    };
    Nr.prototype.after_track_handler = function(e, t) {
        setTimeout(function() {
            t.element.submit()
        }, 0)
    };
    var ba = An("lock"),
        Ao = function(e, t) {
            t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.pollIntervalMS = t.pollIntervalMS || 100, this.timeoutMS = t.timeoutMS || 2e3
        };
    Ao.prototype.withLock = function(e, t, r) {
        !r && typeof t != "function" && (r = t, t = null);
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
                t && t(G)
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
                if (!pr(u, !0)) throw new Error("localStorage support dropped while acquiring lock");
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
                    e()
                } finally {
                    u.removeItem(y), u.getItem(_) === n && u.removeItem(_), u.getItem(f) === n && u.removeItem(f)
                }
            };
        try {
            if (pr(u, !0)) L();
            else throw new Error("localStorage support check failed")
        } catch (G) {
            v(G)
        }
    };
    var Si = An("batch"),
        ze = function(e, t) {
            t = t || {}, this.storageKey = e, this.storage = t.storage || window.localStorage, this.reportError = t.errorReporter || c.bind(Si.error, Si), this.lock = new Ao(e, {
                storage: this.storage
            }), this.pid = t.pid || null, this.memQueue = []
        };
    ze.prototype.enqueue = function(e, t, r) {
        var n = {
            id: Rn(),
            flushAfter: new Date().getTime() + t * 2,
            payload: e
        };
        this.lock.withLock(c.bind(function() {
            var o;
            try {
                var s = this.readFromStorage();
                s.push(n), o = this.saveToStorage(s), o && this.memQueue.push(n)
            } catch {
                this.reportError("Error enqueueing item", e), o = !1
            }
            r && r(o)
        }, this), c.bind(function(o) {
            this.reportError("Error acquiring storage lock", o), r && r(!1)
        }, this), this.pid)
    };
    ze.prototype.fillBatch = function(e) {
        var t = this.memQueue.slice(0, e);
        if (t.length < e) {
            var r = this.readFromStorage();
            if (r.length) {
                var n = {};
                c.each(t, function(s) {
                    n[s.id] = !0
                });
                for (var i = 0; i < r.length; i++) {
                    var o = r[i];
                    if (new Date().getTime() > o.flushAfter && !n[o.id] && (o.orphaned = !0, t.push(o), t.length >= e)) break
                }
            }
        }
        return t
    };
    var wi = function(e, t) {
        var r = [];
        return c.each(e, function(n) {
            n.id && !t[n.id] && r.push(n)
        }), r
    };
    ze.prototype.removeItemsByID = function(e, t) {
        var r = {};
        c.each(e, function(i) {
            r[i] = !0
        }), this.memQueue = wi(this.memQueue, r);
        var n = c.bind(function() {
            var i;
            try {
                var o = this.readFromStorage();
                if (o = wi(o, r), i = this.saveToStorage(o), i) {
                    o = this.readFromStorage();
                    for (var s = 0; s < o.length; s++) {
                        var a = o[s];
                        if (a.id && r[a.id]) return this.reportError("Item not removed from storage"), !1
                    }
                }
            } catch {
                this.reportError("Error removing items", e), i = !1
            }
            return i
        }, this);
        this.lock.withLock(function() {
            var o = n();
            t && t(o)
        }, c.bind(function(o) {
            var s = !1;
            if (this.reportError("Error acquiring storage lock", o), !pr(this.storage, !0) && (s = n(), !s)) try {
                this.storage.removeItem(this.storageKey)
            } catch (a) {
                this.reportError("Error clearing queue", a)
            }
            t && t(s)
        }, this), this.pid)
    };
    var Oi = function(e, t) {
        var r = [];
        return c.each(e, function(n) {
            var i = n.id;
            if (i in t) {
                var o = t[i];
                o !== null && (n.payload = o, r.push(n))
            } else r.push(n)
        }), r
    };
    ze.prototype.updatePayloads = function(e, t) {
        this.memQueue = Oi(this.memQueue, e), this.lock.withLock(c.bind(function() {
            var n;
            try {
                var i = this.readFromStorage();
                i = Oi(i, e), n = this.saveToStorage(i)
            } catch {
                this.reportError("Error updating items", e), n = !1
            }
            t && t(n)
        }, this), c.bind(function(n) {
            this.reportError("Error acquiring storage lock", n), t && t(!1)
        }, this), this.pid)
    };
    ze.prototype.readFromStorage = function() {
        var e;
        try {
            e = this.storage.getItem(this.storageKey), e && (e = hr(e), c.isArray(e) || (this.reportError("Invalid storage entry:", e), e = null))
        } catch (t) {
            this.reportError("Error retrieving queue", t), e = null
        }
        return e || []
    };
    ze.prototype.saveToStorage = function(e) {
        try {
            return this.storage.setItem(this.storageKey, dr(e)), !0
        } catch (t) {
            return this.reportError("Error saving queue", t), !1
        }
    };
    ze.prototype.clear = function() {
        this.memQueue = [], this.storage.removeItem(this.storageKey)
    };
    var Ea = 10 * 60 * 1e3,
        Gt = An("batch"),
        Ne = function(e, t) {
            this.errorReporter = t.errorReporter, this.queue = new ze(e, {
                errorReporter: c.bind(this.reportError, this),
                storage: t.storage
            }), this.libConfig = t.libConfig, this.sendRequest = t.sendRequestFunc, this.beforeSendHook = t.beforeSendHook, this.stopAllBatching = t.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
        };
    Ne.prototype.enqueue = function(e, t) {
        this.queue.enqueue(e, this.flushInterval, t)
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
    Ne.prototype.scheduleFlush = function(e) {
        this.flushInterval = e, this.stopped || (this.timeoutID = setTimeout(c.bind(this.flush, this), this.flushInterval))
    };
    Ne.prototype.flush = function(e) {
        try {
            if (this.requestInProgress) {
                Gt.log("Flush: Request already in progress");
                return
            }
            e = e || {};
            var t = this.libConfig.batch_request_timeout_ms,
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
                        if (e.unloading) this.queue.updatePayloads(s);
                        else if (c.isObject(f) && f.error === "timeout" && new Date().getTime() - r >= t) this.reportError("Network timeout; retrying"), this.flush();
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
                    timeout_ms: t
                };
            e.unloading && (u.transport = "sendBeacon"), Gt.log("MIXPANEL REQUEST:", o), this.sendRequest(o, u, a)
        } catch (f) {
            this.reportError("Error flushing request queue", f), this.resetFlush()
        }
    };
    Ne.prototype.reportError = function(e, t) {
        if (Gt.error.apply(Gt.error, arguments), this.errorReporter) try {
            t instanceof Error || (t = new Error(e)), this.errorReporter(e, t)
        } catch (r) {
            Gt.error(r)
        }
    };
    var Sa = "__mp_opt_in_out_";

    function wa(e, t) {
        No(!0, e, t)
    }

    function Oa(e, t) {
        No(!1, e, t)
    }

    function ka(e, t) {
        return xo(e, t) === "1"
    }

    function Ro(e, t) {
        if (Aa(t)) return z.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = xo(e, t) === "0";
        return r && z.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function er(e) {
        return In(e, function(t) {
            return this.get_config(t)
        })
    }

    function Ke(e) {
        return In(e, function(t) {
            return this._get_config(t)
        })
    }

    function xt(e) {
        return In(e, function(t) {
            return this._get_config(t)
        })
    }

    function Ta(e, t) {
        t = t || {}, xn(t).remove(Nn(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
    }

    function xn(e) {
        return e = e || {}, e.persistenceType === "localStorage" ? c.localStorage : c.cookie
    }

    function Nn(e, t) {
        return t = t || {}, (t.persistencePrefix || Sa) + e
    }

    function xo(e, t) {
        return xn(t).get(Nn(e, t))
    }

    function Aa(e) {
        if (e && e.ignoreDnt) return !1;
        var t = e && e.window || le,
            r = t.navigator || {},
            n = !1;
        return c.each([r.doNotTrack, r.msDoNotTrack, t.doNotTrack], function(i) {
            c.includes([!0, 1, "1", "yes"], i) && (n = !0)
        }), n
    }

    function No(e, t, r) {
        if (!c.isString(t) || !t.length) {
            z.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
            return
        }
        r = r || {}, xn(r).set(Nn(t, r), e ? 1 : 0, c.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && e && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0
        })
    }

    function In(e, t) {
        return function() {
            var r = !1;
            try {
                var n = t.call(this, "token"),
                    i = t.call(this, "ignore_dnt"),
                    o = t.call(this, "opt_out_tracking_persistence_type"),
                    s = t.call(this, "opt_out_tracking_cookie_prefix"),
                    a = t.call(this, "window");
                n && (r = Ro(n, {
                    ignoreDnt: i,
                    persistenceType: o,
                    persistencePrefix: s,
                    window: a
                }))
            } catch (f) {
                z.error("Unexpected error when checking tracking opt-out status: " + f)
            }
            if (!r) return e.apply(this, arguments);
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
        Io = {
            set_action: function(e, t) {
                var r = {},
                    n = {};
                return c.isObject(e) ? c.each(e, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[e] = t, r[He] = n, r
            },
            unset_action: function(e) {
                var t = {},
                    r = [];
                return c.isArray(e) || (e = [e]), c.each(e, function(n) {
                    this._is_reserved_property(n) || r.push(n)
                }, this), t[Ae] = r, t
            },
            set_once_action: function(e, t) {
                var r = {},
                    n = {};
                return c.isObject(e) ? c.each(e, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[e] = t, r[wt] = n, r
            },
            union_action: function(e, t) {
                var r = {},
                    n = {};
                return c.isObject(e) ? c.each(e, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = c.isArray(i) ? i : [i])
                }, this) : n[e] = c.isArray(t) ? t : [t], r[it] = n, r
            },
            append_action: function(e, t) {
                var r = {},
                    n = {};
                return c.isObject(e) ? c.each(e, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[e] = t, r[$e] = n, r
            },
            remove_action: function(e, t) {
                var r = {},
                    n = {};
                return c.isObject(e) ? c.each(e, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[e] = t, r[Ye] = n, r
            },
            delete_action: function() {
                var e = {};
                return e[Ra] = "", e
            }
        },
        Q = function() {};
    c.extend(Q.prototype, Io);
    Q.prototype._init = function(e, t, r) {
        this._mixpanel = e, this._group_key = t, this._group_id = r
    };
    Q.prototype.set = xt(function(e, t, r) {
        var n = this.set_action(e, t);
        return c.isObject(e) && (r = t), this._send_request(n, r)
    });
    Q.prototype.set_once = xt(function(e, t, r) {
        var n = this.set_once_action(e, t);
        return c.isObject(e) && (r = t), this._send_request(n, r)
    });
    Q.prototype.unset = xt(function(e, t) {
        var r = this.unset_action(e);
        return this._send_request(r, t)
    });
    Q.prototype.union = xt(function(e, t, r) {
        c.isObject(e) && (r = t);
        var n = this.union_action(e, t);
        return this._send_request(n, r)
    });
    Q.prototype.delete = xt(function(e) {
        var t = this.delete_action();
        return this._send_request(t, e)
    });
    Q.prototype.remove = xt(function(e, t, r) {
        var n = this.remove_action(e, t);
        return this._send_request(n, r)
    });
    Q.prototype._send_request = function(e, t) {
        e.$group_key = this._group_key, e.$group_id = this._group_id, e.$token = this._get_config("token");
        var r = c.encodeDates(e);
        return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/groups/",
            batcher: this._mixpanel.request_batchers.groups
        }, t)
    };
    Q.prototype._is_reserved_property = function(e) {
        return e === "$group_key" || e === "$group_id"
    };
    Q.prototype._get_config = function(e) {
        return this._mixpanel.get_config(e)
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
    c.extend($.prototype, Io);
    $.prototype._init = function(e) {
        this._mixpanel = e
    };
    $.prototype.set = Ke(function(e, t, r) {
        var n = this.set_action(e, t);
        return c.isObject(e) && (r = t), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n[He] = c.extend({}, c.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[He]), this._send_request(n, r)
    });
    $.prototype.set_once = Ke(function(e, t, r) {
        var n = this.set_once_action(e, t);
        return c.isObject(e) && (r = t), this._send_request(n, r)
    });
    $.prototype.unset = Ke(function(e, t) {
        var r = this.unset_action(e);
        return this._send_request(r, t)
    });
    $.prototype.increment = Ke(function(e, t, r) {
        var n = {},
            i = {};
        return c.isObject(e) ? (c.each(e, function(o, s) {
            if (!this._is_reserved_property(s))
                if (isNaN(parseFloat(o))) {
                    z.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else i[s] = o
        }, this), r = t) : (c.isUndefined(t) && (t = 1), i[e] = t), n[nt] = i, this._send_request(n, r)
    });
    $.prototype.append = Ke(function(e, t, r) {
        c.isObject(e) && (r = t);
        var n = this.append_action(e, t);
        return this._send_request(n, r)
    });
    $.prototype.remove = Ke(function(e, t, r) {
        c.isObject(e) && (r = t);
        var n = this.remove_action(e, t);
        return this._send_request(n, r)
    });
    $.prototype.union = Ke(function(e, t, r) {
        c.isObject(e) && (r = t);
        var n = this.union_action(e, t);
        return this._send_request(n, r)
    });
    $.prototype.track_charge = Ke(function(e, t, r) {
        if (!c.isNumber(e) && (e = parseFloat(e), isNaN(e))) {
            z.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return
        }
        return this.append("$transactions", c.extend({
            $amount: e
        }, t), r)
    });
    $.prototype.clear_charges = function(e) {
        return this.set("$transactions", [], e)
    };
    $.prototype.delete_user = function() {
        if (!this._identify_called()) {
            z.error("mixpanel.people.delete_user() requires you to call identify() first");
            return
        }
        var e = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(e)
    };
    $.prototype.toString = function() {
        return this._mixpanel.toString() + ".people"
    };
    $.prototype._send_request = function(e, t) {
        e.$token = this._get_config("token"), e.$distinct_id = this._mixpanel.get_distinct_id();
        var r = this._mixpanel.get_property("$device_id"),
            n = this._mixpanel.get_property("$user_id"),
            i = this._mixpanel.get_property("$had_persisted_distinct_id");
        r && (e.$device_id = r), n && (e.$user_id = n), i && (e.$had_persisted_distinct_id = i);
        var o = c.encodeDates(e);
        return this._identify_called() ? this._mixpanel._track_or_batch({
            type: "people",
            data: o,
            endpoint: this._get_config("api_host") + "/engage/",
            batcher: this._mixpanel.request_batchers.people
        }, t) : (this._enqueue(e), c.isUndefined(t) || (this._get_config("verbose") ? t({
            status: -1,
            error: null
        }) : t(-1)), c.truncate(o, 255))
    };
    $.prototype._get_config = function(e) {
        return this._mixpanel.get_config(e)
    };
    $.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0
    };
    $.prototype._enqueue = function(e) {
        He in e ? this._mixpanel.persistence._add_to_people_queue(He, e) : wt in e ? this._mixpanel.persistence._add_to_people_queue(wt, e) : Ae in e ? this._mixpanel.persistence._add_to_people_queue(Ae, e) : nt in e ? this._mixpanel.persistence._add_to_people_queue(nt, e) : $e in e ? this._mixpanel.persistence._add_to_people_queue($e, e) : Ye in e ? this._mixpanel.persistence._add_to_people_queue(Ye, e) : it in e ? this._mixpanel.persistence._add_to_people_queue(it, e) : z.error("Invalid call to _enqueue():", e)
    };
    $.prototype._flush_one_queue = function(e, t, r, n) {
        var i = this,
            o = c.extend({}, this._mixpanel.persistence._get_queue(e)),
            s = o;
        !c.isUndefined(o) && c.isObject(o) && !c.isEmptyObject(o) && (i._mixpanel.persistence._pop_from_people_queue(e, o), n && (s = n(o)), t.call(i, s, function(a, u) {
            a === 0 && i._mixpanel.persistence._add_to_people_queue(e, o), c.isUndefined(r) || r(a, u)
        }))
    };
    $.prototype._flush = function(e, t, r, n, i, o, s) {
        var a = this,
            u = this._mixpanel.persistence._get_queue($e),
            f = this._mixpanel.persistence._get_queue(Ye);
        if (this._flush_one_queue(He, this.set, e), this._flush_one_queue(wt, this.set_once, n), this._flush_one_queue(Ae, this.unset, o, function(L) {
                return c.keys(L)
            }), this._flush_one_queue(nt, this.increment, t), this._flush_one_queue(it, this.union, i), !c.isUndefined(u) && c.isArray(u) && u.length) {
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
    $.prototype._is_reserved_property = function(e) {
        return e === "$distinct_id" || e === "$token" || e === "$device_id" || e === "$user_id" || e === "$had_persisted_distinct_id"
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
    var Ln = "__mps",
        Pn = "__mpso",
        $n = "__mpus",
        Dn = "__mpa",
        Cn = "__mpap",
        jn = "__mpr",
        Un = "__mpu",
        Lo = "$people_distinct_id",
        _r = "__alias",
        Wt = "__timers",
        xa = [Ln, Pn, $n, Dn, Cn, jn, Un, Lo, _r, Wt],
        j = function(e) {
            this.props = {}, this.campaign_params_saved = !1, e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
            var t = e.persistence;
            t !== "cookie" && t !== "localStorage" && (z.critical("Unknown persistence type " + t + "; falling back to cookie"), t = e.persistence = "cookie"), t === "localStorage" && c.localStorage.is_supported() ? this.storage = c.localStorage : this.storage = c.cookie, this.load(), this.update_config(e), this.upgrade(e), this.save()
        };
    j.prototype.properties = function() {
        var e = {};
        return c.each(this.props, function(t, r) {
            c.include(xa, r) || (e[r] = t)
        }), e
    };
    j.prototype.load = function() {
        if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = c.extend({}, e))
        }
    };
    j.prototype.upgrade = function(e) {
        var t = e.upgrade,
            r, n;
        t && (r = "mp_super_properties", typeof t == "string" && (r = t), n = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), n && (this.props = c.extend(this.props, n.all, n.events))), !e.cookie_name && e.name !== "mixpanel" && (r = "mp_" + e.token + "_" + e.name, n = this.storage.parse(r), n && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(n))), this.storage === c.localStorage && (n = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, !0), n && this.register_once(n))
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
    j.prototype.register_once = function(e, t, r) {
        return c.isObject(e) ? (typeof t > "u" && (t = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, c.each(e, function(n, i) {
            (!this.props.hasOwnProperty(i) || this.props[i] === t) && (this.props[i] = n)
        }, this), this.save(), !0) : !1
    };
    j.prototype.register = function(e, t) {
        return c.isObject(e) ? (this.expire_days = typeof t > "u" ? this.default_expiry : t, c.extend(this.props, e), this.save(), !0) : !1
    };
    j.prototype.unregister = function(e) {
        e in this.props && (delete this.props[e], this.save())
    };
    j.prototype.update_campaign_params = function() {
        this.campaign_params_saved || (this.register_once(c.info.campaignParams()), this.campaign_params_saved = !0)
    };
    j.prototype.update_search_keyword = function(e) {
        this.register(c.info.searchInfo(e))
    };
    j.prototype.update_referrer_info = function(e) {
        this.register_once({
            $initial_referrer: e || "$direct",
            $initial_referring_domain: c.info.referringDomain(e) || "$direct"
        }, "")
    };
    j.prototype.get_referrer_info = function() {
        return c.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    j.prototype.safe_merge = function(e) {
        return c.each(this.props, function(t, r) {
            r in e || (e[r] = t)
        }), e
    };
    j.prototype.update_config = function(e) {
        this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cookie_domain(e.cookie_domain), this.set_cross_site(e.cross_site_cookie), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie)
    };
    j.prototype.set_disabled = function(e) {
        this.disabled = e, this.disabled ? this.remove() : this.save()
    };
    j.prototype.set_cookie_domain = function(e) {
        e !== this.cookie_domain && (this.remove(), this.cookie_domain = e, this.save())
    };
    j.prototype.set_cross_site = function(e) {
        e !== this.cross_site && (this.cross_site = e, this.remove(), this.save())
    };
    j.prototype.set_cross_subdomain = function(e) {
        e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
    };
    j.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    j.prototype.set_secure = function(e) {
        e !== this.secure && (this.secure = !!e, this.remove(), this.save())
    };
    j.prototype._add_to_people_queue = function(e, t) {
        var r = this._get_queue_key(e),
            n = t[e],
            i = this._get_or_create_queue(He),
            o = this._get_or_create_queue(wt),
            s = this._get_or_create_queue(Ae),
            a = this._get_or_create_queue(nt),
            u = this._get_or_create_queue(it),
            f = this._get_or_create_queue(Ye, []),
            _ = this._get_or_create_queue($e, []);
        r === Ln ? (c.extend(i, n), this._pop_from_people_queue(nt, n), this._pop_from_people_queue(it, n), this._pop_from_people_queue(Ae, n)) : r === Pn ? (c.each(n, function(y, v) {
            v in o || (o[v] = y)
        }), this._pop_from_people_queue(Ae, n)) : r === $n ? c.each(n, function(y) {
            c.each([i, o, a, u], function(v) {
                y in v && delete v[y]
            }), c.each(_, function(v) {
                y in v && delete v[y]
            }), s[y] = !0
        }) : r === Dn ? (c.each(n, function(y, v) {
            v in i ? i[v] += y : (v in a || (a[v] = 0), a[v] += y)
        }, this), this._pop_from_people_queue(Ae, n)) : r === Un ? (c.each(n, function(y, v) {
            c.isArray(y) && (v in u || (u[v] = []), u[v] = u[v].concat(y))
        }), this._pop_from_people_queue(Ae, n)) : r === jn ? (f.push(n), this._pop_from_people_queue($e, n)) : r === Cn && (_.push(n), this._pop_from_people_queue(Ae, n)), z.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), z.log(t), this.save()
    };
    j.prototype._pop_from_people_queue = function(e, t) {
        var r = this._get_queue(e);
        c.isUndefined(r) || (c.each(t, function(n, i) {
            e === $e || e === Ye ? c.each(r, function(o) {
                o[i] === n && delete o[i]
            }) : delete r[i]
        }, this), this.save())
    };
    j.prototype._get_queue_key = function(e) {
        if (e === He) return Ln;
        if (e === wt) return Pn;
        if (e === Ae) return $n;
        if (e === nt) return Dn;
        if (e === $e) return Cn;
        if (e === Ye) return jn;
        if (e === it) return Un;
        z.error("Invalid queue:", e)
    };
    j.prototype._get_queue = function(e) {
        return this.props[this._get_queue_key(e)]
    };
    j.prototype._get_or_create_queue = function(e, t) {
        var r = this._get_queue_key(e);
        return t = c.isUndefined(t) ? {} : t, this.props[r] || (this.props[r] = t)
    };
    j.prototype.set_event_timer = function(e, t) {
        var r = this.props[Wt] || {};
        r[e] = t, this.props[Wt] = r, this.save()
    };
    j.prototype.remove_event_timer = function(e) {
        var t = this.props[Wt] || {},
            r = t[e];
        return c.isUndefined(r) || (delete this.props[Wt][e], this.save()), r
    };
    var Mn, ce, Po = 0,
        Na = 1,
        Ia = function(e) {
            return e
        },
        zt = function() {},
        we = "mixpanel",
        $o = "base64",
        La = "json",
        dt = le.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        Do = !dt && Te.indexOf("MSIE") === -1 && Te.indexOf("Mozilla") === -1,
        gr = null;
    Le.sendBeacon && (gr = function() {
        return Le.sendBeacon.apply(Le, arguments)
    });
    var ki = {
            api_host: "https://api-js.mixpanel.com",
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: $o,
            app_host: "https://mixpanel.com",
            cdn: "https://cdn.mxpnl.com",
            cross_site_cookie: !1,
            cross_subdomain_cookie: !0,
            error_reporter: zt,
            persistence: "cookie",
            persistence_name: "",
            cookie_domain: "",
            cookie_name: "",
            loaded: zt,
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
        Co = !1,
        S = function() {},
        ln = function(e, t, r) {
            var n, i = r === we ? ce : ce[r];
            if (i && Mn === Po) n = i;
            else {
                if (i && !c.isArray(i)) {
                    z.error("You have already initialized " + r);
                    return
                }
                n = new S
            }
            return n._cached_groups = {}, n._init(e, t, r), n.people = new $, n.people._init(n), Fe.DEBUG = Fe.DEBUG || n.get_config("debug"), !c.isUndefined(i) && c.isArray(i) && (n._execute_array.call(n.people, i.people), n._execute_array(i)), n
        };
    S.prototype.init = function(e, t, r) {
        if (c.isUndefined(r)) {
            this.report_error("You must name your new library: init(token, config, name)");
            return
        }
        if (r === we) {
            this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            return
        }
        var n = ln(e, t, r);
        return ce[r] = n, n._loaded(), n
    };
    S.prototype._init = function(e, t, r) {
        t = t || {}, this.__loaded = !0, this.config = {};
        var n = {};
        if (!("api_payload_format" in t)) {
            var i = t.api_host || ki.api_host;
            i.match(/\.mixpanel\.com$/) && (n.api_payload_format = La)
        }
        if (this.set_config(c.extend({}, ki, n, t, {
                name: r,
                token: e,
                callback_fn: (r === we ? r : we + "." + r) + "._jsc"
            })), this._jsc = zt, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!c.localStorage.is_supported(!0) || !dt) this._batch_requests = !1, z.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
            else if (this.init_batchers(), gr && le.addEventListener) {
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
        c.each(this.__dom_loaded_queue, function(e) {
            this._track_dom.apply(this, e)
        }, this), this.has_opted_out_tracking() || c.each(this.__request_queue, function(e) {
            this._send_request.apply(this, e)
        }, this), delete this.__dom_loaded_queue, delete this.__request_queue
    };
    S.prototype._track_dom = function(e, t) {
        if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
        if (!Co) return this.__dom_loaded_queue.push([e, t]), !1;
        var r = new e().init(this);
        return r.track.apply(r, t)
    };
    S.prototype._prepare_callback = function(e, t) {
        if (c.isUndefined(e)) return null;
        if (dt) {
            var r = function(s) {
                e(s, t)
            };
            return r
        } else {
            var n = this._jsc,
                i = "" + Math.floor(Math.random() * 1e8),
                o = this.get_config("callback_fn") + "[" + i + "]";
            return n[i] = function(s) {
                delete n[i], e(s, t)
            }, o
        }
    };
    S.prototype._send_request = function(e, t, r, n) {
        var i = !0;
        if (Do) return this.__request_queue.push(arguments), i;
        var o = {
                method: this.get_config("api_method"),
                transport: this.get_config("api_transport"),
                verbose: this.get_config("verbose")
            },
            s = null;
        !n && (c.isFunction(r) || typeof r == "string") && (n = r, r = null), r = c.extend(o, r || {}), dt || (r.method = "GET");
        var a = r.method === "POST",
            u = gr && a && r.transport.toLowerCase() === "sendbeacon",
            f = r.verbose;
        t.verbose && (f = !0), this.get_config("test") && (t.test = 1), f && (t.verbose = 1), this.get_config("img") && (t.img = 1), dt || (n ? t.callback = n : (f || this.get_config("test")) && (t.callback = "(function(){})")), t.ip = this.get_config("ip") ? 1 : 0, t._ = new Date().getTime().toString(), a && (s = "data=" + encodeURIComponent(t.data), delete t.data), e += "?" + c.HTTPBuildQuery(t);
        var _ = this;
        if ("img" in t) {
            var y = V.createElement("img");
            y.src = e, V.body.appendChild(y)
        } else if (u) {
            try {
                i = gr(e, s)
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
            v.open(r.method, e, !0);
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
            I.type = "text/javascript", I.async = !0, I.defer = !0, I.src = e;
            var L = V.getElementsByTagName("script")[0];
            L.parentNode.insertBefore(I, L)
        }
        return i
    };
    S.prototype._execute_array = function(e) {
        var t, r = [],
            n = [],
            i = [];
        c.each(e, function(s) {
            s && (t = s[0], c.isArray(t) ? i.push(s) : typeof s == "function" ? s.call(this) : c.isArray(s) && t === "alias" ? r.push(s) : c.isArray(s) && t.indexOf("track") !== -1 && typeof this[t] == "function" ? i.push(s) : n.push(s))
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
        var e = this.get_config("token");
        if (!this.are_batchers_initialized()) {
            var t = c.bind(function(r) {
                return new Ne("__mpq_" + e + r.queue_suffix, {
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
                events: t({
                    type: "events",
                    endpoint: "/track/",
                    queue_suffix: "_ev"
                }),
                people: t({
                    type: "people",
                    endpoint: "/engage/",
                    queue_suffix: "_pp"
                }),
                groups: t({
                    type: "groups",
                    endpoint: "/groups/",
                    queue_suffix: "_gr"
                })
            }
        }
        this.get_config("batch_autostart") && this.start_batch_senders()
    };
    S.prototype.start_batch_senders = function() {
        this.are_batchers_initialized() && (this._batch_requests = !0, c.each(this.request_batchers, function(e) {
            e.start()
        }))
    };
    S.prototype.stop_batch_senders = function() {
        this._batch_requests = !1, c.each(this.request_batchers, function(e) {
            e.stop(), e.clear()
        })
    };
    S.prototype.push = function(e) {
        this._execute_array([e])
    };
    S.prototype.disable = function(e) {
        typeof e > "u" ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
    };
    S.prototype._encode_data_for_request = function(e) {
        var t = c.JSONEncode(e);
        return this.get_config("api_payload_format") === $o && (t = c.base64Encode(t)), {
            data: t
        }
    };
    S.prototype._track_or_batch = function(e, t) {
        var r = c.truncate(e.data, 255),
            n = e.endpoint,
            i = e.batcher,
            o = e.should_send_immediately,
            s = e.send_request_options || {};
        t = t || zt;
        var a = !0,
            u = c.bind(function() {
                return s.skip_hooks || (r = this._run_hook("before_send_" + e.type, r)), r ? (z.log("MIXPANEL REQUEST:"), z.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(t, r))) : null
            }, this);
        return this._batch_requests && !o ? i.enqueue(r, function(f) {
            f ? t(1, r) : u()
        }) : a = u(), a && r
    };
    S.prototype.track = er(function(e, t, r, n) {
        !n && typeof r == "function" && (n = r, r = null), r = r || {};
        var i = r.transport;
        i && (r.transport = i);
        var o = r.send_immediately;
        if (typeof n != "function" && (n = zt), c.isUndefined(e)) {
            this.report_error("No event name provided to mixpanel.track");
            return
        }
        if (this._event_is_disabled(e)) {
            n(0);
            return
        }
        t = t || {}, t.token = this.get_config("token");
        var s = this.persistence.remove_event_timer(e);
        if (!c.isUndefined(s)) {
            var a = new Date().getTime() - s;
            t.$duration = parseFloat((a / 1e3).toFixed(3))
        }
        this._set_default_superprops(), t = c.extend({}, c.info.properties(), this.persistence.properties(), this.unpersisted_superprops, t);
        var u = this.get_config("property_blacklist");
        c.isArray(u) ? c.each(u, function(y) {
            delete t[y]
        }) : this.report_error("Invalid value for property_blacklist config: " + u);
        var f = {
                event: e,
                properties: t
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
    S.prototype.set_group = er(function(e, t, r) {
        c.isArray(t) || (t = [t]);
        var n = {};
        return n[e] = t, this.register(n), this.people.set(e, t, r)
    });
    S.prototype.add_group = er(function(e, t, r) {
        var n = this.get_property(e);
        if (n === void 0) {
            var i = {};
            i[e] = [t], this.register(i)
        } else n.indexOf(t) === -1 && (n.push(t), this.register(i));
        return this.people.union(e, t, r)
    });
    S.prototype.remove_group = er(function(e, t, r) {
        var n = this.get_property(e);
        if (n !== void 0) {
            var i = n.indexOf(t);
            i > -1 && (n.splice(i, 1), this.register({
                group_key: n
            })), n.length === 0 && this.unregister(e)
        }
        return this.people.remove(e, t, r)
    });
    S.prototype.track_with_groups = er(function(e, t, r, n) {
        var i = c.extend({}, t || {});
        return c.each(r, function(o, s) {
            o != null && (i[s] = o)
        }), this.track(e, i, n)
    });
    S.prototype._create_map_key = function(e, t) {
        return e + "_" + JSON.stringify(t)
    };
    S.prototype._remove_group_from_cache = function(e, t) {
        delete this._cached_groups[this._create_map_key(e, t)]
    };
    S.prototype.get_group = function(e, t) {
        var r = this._create_map_key(e, t),
            n = this._cached_groups[r];
        return (n === void 0 || n._group_key !== e || n._group_id !== t) && (n = new Q, n._init(this, e, t), this._cached_groups[r] = n), n
    };
    S.prototype.track_pageview = function(e) {
        c.isUndefined(e) && (e = V.location.href), this.track("mp_page_view", c.info.pageviewInfo(e))
    };
    S.prototype.track_links = function() {
        return this._track_dom.call(this, St, arguments)
    };
    S.prototype.track_forms = function() {
        return this._track_dom.call(this, Nr, arguments)
    };
    S.prototype.time_event = function(e) {
        if (c.isUndefined(e)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return
        }
        this._event_is_disabled(e) || this.persistence.set_event_timer(e, new Date().getTime())
    };
    var Pa = {
            persistent: !0
        },
        Bn = function(e) {
            var t;
            return c.isObject(e) ? t = e : c.isUndefined(e) ? t = {} : t = {
                days: e
            }, c.extend({}, Pa, t)
        };
    S.prototype.register = function(e, t) {
        var r = Bn(t);
        r.persistent ? this.persistence.register(e, r.days) : c.extend(this.unpersisted_superprops, e)
    };
    S.prototype.register_once = function(e, t, r) {
        var n = Bn(r);
        n.persistent ? this.persistence.register_once(e, t, n.days) : (typeof t > "u" && (t = "None"), c.each(e, function(i, o) {
            (!this.unpersisted_superprops.hasOwnProperty(o) || this.unpersisted_superprops[o] === t) && (this.unpersisted_superprops[o] = i)
        }, this))
    };
    S.prototype.unregister = function(e, t) {
        t = Bn(t), t.persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
    };
    S.prototype._register_single = function(e, t) {
        var r = {};
        r[e] = t, this.register(r)
    };
    S.prototype.identify = function(e, t, r, n, i, o, s, a) {
        var u = this.get_distinct_id();
        if (this.register({
                $user_id: e
            }), !this.get_property("$device_id")) {
            var f = u;
            this.register_once({
                $had_persisted_distinct_id: !0,
                $device_id: f
            }, "")
        }
        e !== u && e !== this.get_property(_r) && (this.unregister(_r), this.register({
            distinct_id: e
        })), this._flags.identify_called = !0, this.people._flush(t, r, n, i, o, s, a), e !== u && this.track("$identify", {
            distinct_id: e,
            $anon_distinct_id: u
        }, {
            skip_hooks: !0
        })
    };
    S.prototype.reset = function() {
        this.persistence.clear(), this._flags.identify_called = !1;
        var e = c.UUID();
        this.register_once({
            distinct_id: e,
            $device_id: e
        }, "")
    };
    S.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id")
    };
    S.prototype.alias = function(e, t) {
        if (e === this.get_property(Lo)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
        var r = this;
        return c.isUndefined(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(_r, e), this.track("$create_alias", {
            alias: e,
            distinct_id: t
        }, {
            skip_hooks: !0
        }, function() {
            r.identify(e)
        })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(e), -1)
    };
    S.prototype.name_tag = function(e) {
        this._register_single("mp_name_tag", e)
    };
    S.prototype.set_config = function(e) {
        if (c.isObject(e)) {
            c.extend(this.config, e);
            var t = e.batch_size;
            t && c.each(this.request_batchers, function(r) {
                r.resetBatchSize()
            }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Fe.DEBUG = Fe.DEBUG || this.get_config("debug")
        }
    };
    S.prototype.get_config = function(e) {
        return this.config[e]
    };
    S.prototype._run_hook = function(e) {
        var t = (this.config.hooks[e] || Ia).apply(this, Be.call(arguments, 1));
        return typeof t > "u" && (this.report_error(e + " hook did not return a value"), t = null), t
    };
    S.prototype.get_property = function(e) {
        return this.persistence.props[e]
    };
    S.prototype.toString = function() {
        var e = this.get_config("name");
        return e !== we && (e = we + "." + e), e
    };
    S.prototype._event_is_disabled = function(e) {
        return c.isBlockedUA(Te) || this._flags.disable_all_events || c.include(this.__disabled_events, e)
    };
    S.prototype._gdpr_init = function() {
        var e = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
        e && c.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
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
    S.prototype._gdpr_update_persistence = function(e) {
        var t;
        if (e && e.clear_persistence) t = !0;
        else if (e && e.enable_persistence) t = !1;
        else return;
        !this.get_config("disable_persistence") && this.persistence.disabled !== t && this.persistence.set_disabled(t), t && c.each(this.request_batchers, function(r) {
            r.clear()
        })
    };
    S.prototype._gdpr_call_func = function(e, t) {
        return t = c.extend({
            track: c.bind(this.track, this),
            persistence_type: this.get_config("opt_out_tracking_persistence_type"),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt")
        }, t), c.localStorage.is_supported() || (t.persistence_type = "cookie"), e(this.get_config("token"), {
            track: t.track,
            trackEventName: t.track_event_name,
            trackProperties: t.track_properties,
            persistenceType: t.persistence_type,
            persistencePrefix: t.cookie_prefix,
            cookieDomain: t.cookie_domain,
            cookieExpiration: t.cookie_expiration,
            crossSiteCookie: t.cross_site_cookie,
            crossSubdomainCookie: t.cross_subdomain_cookie,
            secureCookie: t.secure_cookie,
            ignoreDnt: t.ignore_dnt
        })
    };
    S.prototype.opt_in_tracking = function(e) {
        e = c.extend({
            enable_persistence: !0
        }, e), this._gdpr_call_func(wa, e), this._gdpr_update_persistence(e)
    };
    S.prototype.opt_out_tracking = function(e) {
        e = c.extend({
            clear_persistence: !0,
            delete_user: !0
        }, e), e.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(Oa, e), this._gdpr_update_persistence(e)
    };
    S.prototype.has_opted_in_tracking = function(e) {
        return this._gdpr_call_func(ka, e)
    };
    S.prototype.has_opted_out_tracking = function(e) {
        return this._gdpr_call_func(Ro, e)
    };
    S.prototype.clear_opt_in_out_tracking = function(e) {
        e = c.extend({
            enable_persistence: !0
        }, e), this._gdpr_call_func(Ta, e), this._gdpr_update_persistence(e)
    };
    S.prototype.report_error = function(e, t) {
        z.error.apply(z.error, arguments);
        try {
            !t && !(e instanceof Error) && (e = new Error(e)), this.get_config("error_reporter")(e, t)
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
            c.each(pt, function(e, t) {
                t !== we && (ce[t] = e)
            }), ce._ = c
        },
        Da = function() {
            ce.init = function(e, t, r) {
                if (r) return ce[r] || (ce[r] = pt[r] = ln(e, t, r), ce[r]._loaded()), ce[r];
                var n = ce;
                pt[we] ? n = pt[we] : e && (n = ln(e, t, we), n._loaded(), pt[we] = n), ce = n, Mn === Na && (le[we] = ce), $a()
            }
        },
        Ca = function() {
            function e() {
                e.done || (e.done = !0, Co = !0, Do = !1, c.each(pt, function(n) {
                    n._dom_loaded()
                }))
            }

            function t() {
                try {
                    V.documentElement.doScroll("left")
                } catch {
                    setTimeout(t, 1);
                    return
                }
                e()
            }
            if (V.addEventListener) V.readyState === "complete" ? e() : V.addEventListener("DOMContentLoaded", e, !1);
            else if (V.attachEvent) {
                V.attachEvent("onreadystatechange", e);
                var r = !1;
                try {
                    r = le.frameElement === null
                } catch {}
                V.documentElement.doScroll && r && t()
            }
            c.register_event(le, "load", e, !0)
        };

    function ja() {
        return Mn = Po, ce = new S, Da(), ce.init(), Ca(), ce
    }
    var Ua = ja(),
        Ti = Ua;
    class jo {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), Ti.init("2e284873b7269f13b850ac994abfd848", {
                debug: "false"
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
        static gameJoined(t, r) {
            Ti.track("Game Joined", {
                tag: t,
                ...r
            })
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

    function Ma() {
        this.__data__ = [], this.size = 0
    }
    var Ba = Ma;

    function Fa(e, t) {
        return e === t || e !== e && t !== t
    }
    var Ir = Fa,
        qa = Ir;

    function Ga(e, t) {
        for (var r = e.length; r--;)
            if (qa(e[r][0], t)) return r;
        return -1
    }
    var Lr = Ga,
        Ha = Lr,
        Ya = Array.prototype,
        Wa = Ya.splice;

    function za(e) {
        var t = this.__data__,
            r = Ha(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : Wa.call(t, r, 1), --this.size, !0
    }
    var Ka = za,
        Va = Lr;

    function Ja(e) {
        var t = this.__data__,
            r = Va(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
    var Xa = Ja,
        Qa = Lr;

    function Za(e) {
        return Qa(this.__data__, e) > -1
    }
    var ec = Za,
        tc = Lr;

    function rc(e, t) {
        var r = this.__data__,
            n = tc(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    var nc = rc,
        ic = Ba,
        oc = Ka,
        sc = Xa,
        ac = ec,
        cc = nc;

    function Nt(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    Nt.prototype.clear = ic;
    Nt.prototype.delete = oc;
    Nt.prototype.get = sc;
    Nt.prototype.has = ac;
    Nt.prototype.set = cc;
    var Pr = Nt,
        uc = Pr;

    function fc() {
        this.__data__ = new uc, this.size = 0
    }
    var lc = fc;

    function pc(e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r
    }
    var dc = pc;

    function hc(e) {
        return this.__data__.get(e)
    }
    var _c = hc;

    function gc(e) {
        return this.__data__.has(e)
    }
    var yc = gc,
        vc = typeof me == "object" && me && me.Object === Object && me,
        Uo = vc,
        mc = Uo,
        bc = typeof self == "object" && self && self.Object === Object && self,
        Ec = mc || bc || Function("return this")(),
        It = Ec,
        Sc = It,
        wc = Sc.Symbol,
        Mo = wc,
        Ai = Mo,
        Bo = Object.prototype,
        Oc = Bo.hasOwnProperty,
        kc = Bo.toString,
        Bt = Ai ? Ai.toStringTag : void 0;

    function Tc(e) {
        var t = Oc.call(e, Bt),
            r = e[Bt];
        try {
            e[Bt] = void 0;
            var n = !0
        } catch {}
        var i = kc.call(e);
        return n && (t ? e[Bt] = r : delete e[Bt]), i
    }
    var Ac = Tc,
        Rc = Object.prototype,
        xc = Rc.toString;

    function Nc(e) {
        return xc.call(e)
    }
    var Ic = Nc,
        Ri = Mo,
        Lc = Ac,
        Pc = Ic,
        $c = "[object Null]",
        Dc = "[object Undefined]",
        xi = Ri ? Ri.toStringTag : void 0;

    function Cc(e) {
        return e == null ? e === void 0 ? Dc : $c : xi && xi in Object(e) ? Lc(e) : Pc(e)
    }
    var $r = Cc;

    function jc(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    var at = jc,
        Uc = $r,
        Mc = at,
        Bc = "[object AsyncFunction]",
        Fc = "[object Function]",
        qc = "[object GeneratorFunction]",
        Gc = "[object Proxy]";

    function Hc(e) {
        if (!Mc(e)) return !1;
        var t = Uc(e);
        return t == Fc || t == qc || t == Bc || t == Gc
    }
    var Fn = Hc,
        Yc = It,
        Wc = Yc["__core-js_shared__"],
        zc = Wc,
        Jr = zc,
        Ni = function() {
            var e = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

    function Kc(e) {
        return !!Ni && Ni in e
    }
    var Vc = Kc,
        Jc = Function.prototype,
        Xc = Jc.toString;

    function Qc(e) {
        if (e != null) {
            try {
                return Xc.call(e)
            } catch {}
            try {
                return e + ""
            } catch {}
        }
        return ""
    }
    var Zc = Qc,
        eu = Fn,
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

    function lu(e) {
        if (!ru(e) || tu(e)) return !1;
        var t = eu(e) ? fu : ou;
        return t.test(nu(e))
    }
    var pu = lu;

    function du(e, t) {
        return e == null ? void 0 : e[t]
    }
    var hu = du,
        _u = pu,
        gu = hu;

    function yu(e, t) {
        var r = gu(e, t);
        return _u(r) ? r : void 0
    }
    var qn = yu,
        vu = qn,
        mu = It,
        bu = vu(mu, "Map"),
        Fo = bu,
        Eu = qn,
        Su = Eu(Object, "create"),
        Dr = Su,
        Ii = Dr;

    function wu() {
        this.__data__ = Ii ? Ii(null) : {}, this.size = 0
    }
    var Ou = wu;

    function ku(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    var Tu = ku,
        Au = Dr,
        Ru = "__lodash_hash_undefined__",
        xu = Object.prototype,
        Nu = xu.hasOwnProperty;

    function Iu(e) {
        var t = this.__data__;
        if (Au) {
            var r = t[e];
            return r === Ru ? void 0 : r
        }
        return Nu.call(t, e) ? t[e] : void 0
    }
    var Lu = Iu,
        Pu = Dr,
        $u = Object.prototype,
        Du = $u.hasOwnProperty;

    function Cu(e) {
        var t = this.__data__;
        return Pu ? t[e] !== void 0 : Du.call(t, e)
    }
    var ju = Cu,
        Uu = Dr,
        Mu = "__lodash_hash_undefined__";

    function Bu(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = Uu && t === void 0 ? Mu : t, this
    }
    var Fu = Bu,
        qu = Ou,
        Gu = Tu,
        Hu = Lu,
        Yu = ju,
        Wu = Fu;

    function Lt(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    Lt.prototype.clear = qu;
    Lt.prototype.delete = Gu;
    Lt.prototype.get = Hu;
    Lt.prototype.has = Yu;
    Lt.prototype.set = Wu;
    var zu = Lt,
        Li = zu,
        Ku = Pr,
        Vu = Fo;

    function Ju() {
        this.size = 0, this.__data__ = {
            hash: new Li,
            map: new(Vu || Ku),
            string: new Li
        }
    }
    var Xu = Ju;

    function Qu(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    var Zu = Qu,
        ef = Zu;

    function tf(e, t) {
        var r = e.__data__;
        return ef(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    var Cr = tf,
        rf = Cr;

    function nf(e) {
        var t = rf(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var of = nf, sf = Cr;

    function af(e) {
        return sf(this, e).get(e)
    }
    var cf = af,
        uf = Cr;

    function ff(e) {
        return uf(this, e).has(e)
    }
    var lf = ff,
        pf = Cr;

    function df(e, t) {
        var r = pf(this, e),
            n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    var hf = df,
        _f = Xu,
        gf = of,
        yf = cf,
        vf = lf,
        mf = hf;

    function Pt(e) {
        var t = -1,
            r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    Pt.prototype.clear = _f;
    Pt.prototype.delete = gf;
    Pt.prototype.get = yf;
    Pt.prototype.has = vf;
    Pt.prototype.set = mf;
    var bf = Pt,
        Ef = Pr,
        Sf = Fo,
        wf = bf,
        Of = 200;

    function kf(e, t) {
        var r = this.__data__;
        if (r instanceof Ef) {
            var n = r.__data__;
            if (!Sf || n.length < Of - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new wf(n)
        }
        return r.set(e, t), this.size = r.size, this
    }
    var Tf = kf,
        Af = Pr,
        Rf = lc,
        xf = dc,
        Nf = _c,
        If = yc,
        Lf = Tf;

    function $t(e) {
        var t = this.__data__ = new Af(e);
        this.size = t.size
    }
    $t.prototype.clear = Rf;
    $t.prototype.delete = xf;
    $t.prototype.get = Nf;
    $t.prototype.has = If;
    $t.prototype.set = Lf;
    var Pf = $t,
        $f = qn,
        Df = function() {
            try {
                var e = $f(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {}
        }(),
        qo = Df,
        Pi = qo;

    function Cf(e, t, r) {
        t == "__proto__" && Pi ? Pi(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }
    var Gn = Cf,
        jf = Gn,
        Uf = Ir;

    function Mf(e, t, r) {
        (r !== void 0 && !Uf(e[t], r) || r === void 0 && !(t in e)) && jf(e, t, r)
    }
    var Go = Mf;

    function Bf(e) {
        return function(t, r, n) {
            for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                var u = s[e ? a : ++i];
                if (r(o[u], u, o) === !1) break
            }
            return t
        }
    }
    var Ff = Bf,
        qf = Ff,
        Gf = qf(),
        Hf = Gf,
        yr = {},
        Yf = {
            get exports() {
                return yr
            },
            set exports(e) {
                yr = e
            }
        };
    (function(e, t) {
        var r = It,
            n = t && !t.nodeType && t,
            i = n && !0 && e && !e.nodeType && e,
            o = i && i.exports === n,
            s = o ? r.Buffer : void 0,
            a = s ? s.allocUnsafe : void 0;

        function u(f, _) {
            if (_) return f.slice();
            var y = f.length,
                v = a ? a(y) : new f.constructor(y);
            return f.copy(v), v
        }
        e.exports = u
    })(Yf, yr);
    var Wf = It,
        zf = Wf.Uint8Array,
        Kf = zf,
        $i = Kf;

    function Vf(e) {
        var t = new e.constructor(e.byteLength);
        return new $i(t).set(new $i(e)), t
    }
    var Jf = Vf,
        Xf = Jf;

    function Qf(e, t) {
        var r = t ? Xf(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length)
    }
    var Zf = Qf;

    function el(e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
        return t
    }
    var tl = el,
        rl = at,
        Di = Object.create,
        nl = function() {
            function e() {}
            return function(t) {
                if (!rl(t)) return {};
                if (Di) return Di(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }(),
        il = nl;

    function ol(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
    var sl = ol,
        al = sl,
        cl = al(Object.getPrototypeOf, Object),
        Ho = cl,
        ul = Object.prototype;

    function fl(e) {
        var t = e && e.constructor,
            r = typeof t == "function" && t.prototype || ul;
        return e === r
    }
    var Yo = fl,
        ll = il,
        pl = Ho,
        dl = Yo;

    function hl(e) {
        return typeof e.constructor == "function" && !dl(e) ? ll(pl(e)) : {}
    }
    var _l = hl;

    function gl(e) {
        return e != null && typeof e == "object"
    }
    var tr = gl,
        yl = $r,
        vl = tr,
        ml = "[object Arguments]";

    function bl(e) {
        return vl(e) && yl(e) == ml
    }
    var El = bl,
        Ci = El,
        Sl = tr,
        Wo = Object.prototype,
        wl = Wo.hasOwnProperty,
        Ol = Wo.propertyIsEnumerable,
        kl = Ci(function() {
            return arguments
        }()) ? Ci : function(e) {
            return Sl(e) && wl.call(e, "callee") && !Ol.call(e, "callee")
        },
        zo = kl,
        Tl = Array.isArray,
        Ko = Tl,
        Al = 9007199254740991;

    function Rl(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Al
    }
    var Vo = Rl,
        xl = Fn,
        Nl = Vo;

    function Il(e) {
        return e != null && Nl(e.length) && !xl(e)
    }
    var Hn = Il,
        Ll = Hn,
        Pl = tr;

    function $l(e) {
        return Pl(e) && Ll(e)
    }
    var Dl = $l,
        Kt = {},
        Cl = {
            get exports() {
                return Kt
            },
            set exports(e) {
                Kt = e
            }
        };

    function jl() {
        return !1
    }
    var Ul = jl;
    (function(e, t) {
        var r = It,
            n = Ul,
            i = t && !t.nodeType && t,
            o = i && !0 && e && !e.nodeType && e,
            s = o && o.exports === i,
            a = s ? r.Buffer : void 0,
            u = a ? a.isBuffer : void 0,
            f = u || n;
        e.exports = f
    })(Cl, Kt);
    var Ml = $r,
        Bl = Ho,
        Fl = tr,
        ql = "[object Object]",
        Gl = Function.prototype,
        Hl = Object.prototype,
        Jo = Gl.toString,
        Yl = Hl.hasOwnProperty,
        Wl = Jo.call(Object);

    function zl(e) {
        if (!Fl(e) || Ml(e) != ql) return !1;
        var t = Bl(e);
        if (t === null) return !0;
        var r = Yl.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && Jo.call(r) == Wl
    }
    var Kl = zl,
        Vl = $r,
        Jl = Vo,
        Xl = tr,
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

    function Sp(e) {
        return Xl(e) && Jl(e.length) && !!X[Vl(e)]
    }
    var wp = Sp;

    function Op(e) {
        return function(t) {
            return e(t)
        }
    }
    var kp = Op,
        vr = {},
        Tp = {
            get exports() {
                return vr
            },
            set exports(e) {
                vr = e
            }
        };
    (function(e, t) {
        var r = Uo,
            n = t && !t.nodeType && t,
            i = n && !0 && e && !e.nodeType && e,
            o = i && i.exports === n,
            s = o && r.process,
            a = function() {
                try {
                    var u = i && i.require && i.require("util").types;
                    return u || s && s.binding && s.binding("util")
                } catch {}
            }();
        e.exports = a
    })(Tp, vr);
    var Ap = wp,
        Rp = kp,
        ji = vr,
        Ui = ji && ji.isTypedArray,
        xp = Ui ? Rp(Ui) : Ap,
        Xo = xp;

    function Np(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }
    var Qo = Np,
        Ip = Gn,
        Lp = Ir,
        Pp = Object.prototype,
        $p = Pp.hasOwnProperty;

    function Dp(e, t, r) {
        var n = e[t];
        (!($p.call(e, t) && Lp(n, r)) || r === void 0 && !(t in e)) && Ip(e, t, r)
    }
    var Cp = Dp,
        jp = Cp,
        Up = Gn;

    function Mp(e, t, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, s = t.length; ++o < s;) {
            var a = t[o],
                u = n ? n(r[a], e[a], a, r, e) : void 0;
            u === void 0 && (u = e[a]), i ? Up(r, a, u) : jp(r, a, u)
        }
        return r
    }
    var Bp = Mp;

    function Fp(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }
    var qp = Fp,
        Gp = 9007199254740991,
        Hp = /^(?:0|[1-9]\d*)$/;

    function Yp(e, t) {
        var r = typeof e;
        return t = t ?? Gp, !!t && (r == "number" || r != "symbol" && Hp.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var Zo = Yp,
        Wp = qp,
        zp = zo,
        Kp = Ko,
        Vp = Kt,
        Jp = Zo,
        Xp = Xo,
        Qp = Object.prototype,
        Zp = Qp.hasOwnProperty;

    function ed(e, t) {
        var r = Kp(e),
            n = !r && zp(e),
            i = !r && !n && Vp(e),
            o = !r && !n && !i && Xp(e),
            s = r || n || i || o,
            a = s ? Wp(e.length, String) : [],
            u = a.length;
        for (var f in e)(t || Zp.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Jp(f, u))) && a.push(f);
        return a
    }
    var td = ed;

    function rd(e) {
        var t = [];
        if (e != null)
            for (var r in Object(e)) t.push(r);
        return t
    }
    var nd = rd,
        id = at,
        od = Yo,
        sd = nd,
        ad = Object.prototype,
        cd = ad.hasOwnProperty;

    function ud(e) {
        if (!id(e)) return sd(e);
        var t = od(e),
            r = [];
        for (var n in e) n == "constructor" && (t || !cd.call(e, n)) || r.push(n);
        return r
    }
    var fd = ud,
        ld = td,
        pd = fd,
        dd = Hn;

    function hd(e) {
        return dd(e) ? ld(e, !0) : pd(e)
    }
    var es = hd,
        _d = Bp,
        gd = es;

    function yd(e) {
        return _d(e, gd(e))
    }
    var vd = yd,
        Mi = Go,
        md = yr,
        bd = Zf,
        Ed = tl,
        Sd = _l,
        Bi = zo,
        Fi = Ko,
        wd = Dl,
        Od = Kt,
        kd = Fn,
        Td = at,
        Ad = Kl,
        Rd = Xo,
        qi = Qo,
        xd = vd;

    function Nd(e, t, r, n, i, o, s) {
        var a = qi(e, r),
            u = qi(t, r),
            f = s.get(u);
        if (f) {
            Mi(e, r, f);
            return
        }
        var _ = o ? o(a, u, r + "", e, t, s) : void 0,
            y = _ === void 0;
        if (y) {
            var v = Fi(u),
                E = !v && Od(u),
                w = !v && !E && Rd(u);
            _ = u, v || E || w ? Fi(a) ? _ = a : wd(a) ? _ = Ed(a) : E ? (y = !1, _ = md(u, !0)) : w ? (y = !1, _ = bd(u, !0)) : _ = [] : Ad(u) || Bi(u) ? (_ = a, Bi(a) ? _ = xd(a) : (!Td(a) || kd(a)) && (_ = Sd(u))) : y = !1
        }
        y && (s.set(u, _), i(_, u, n, o, s), s.delete(u)), Mi(e, r, _)
    }
    var Id = Nd,
        Ld = Pf,
        Pd = Go,
        $d = Hf,
        Dd = Id,
        Cd = at,
        jd = es,
        Ud = Qo;

    function ts(e, t, r, n, i) {
        e !== t && $d(t, function(o, s) {
            if (i || (i = new Ld), Cd(o)) Dd(e, t, s, r, ts, n, i);
            else {
                var a = n ? n(Ud(e, s), o, s + "", e, t, i) : void 0;
                a === void 0 && (a = o), Pd(e, s, a)
            }
        }, jd)
    }
    var Md = ts;

    function Bd(e) {
        return e
    }
    var rs = Bd;

    function Fd(e, t, r) {
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
    var qd = Fd,
        Gd = qd,
        Gi = Math.max;

    function Hd(e, t, r) {
        return t = Gi(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = Gi(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                i = -1;
                for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                return a[t] = r(s), Gd(e, this, a)
            }
    }
    var Yd = Hd;

    function Wd(e) {
        return function() {
            return e
        }
    }
    var zd = Wd,
        Kd = zd,
        Hi = qo,
        Vd = rs,
        Jd = Hi ? function(e, t) {
            return Hi(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Kd(t),
                writable: !0
            })
        } : Vd,
        Xd = Jd,
        Qd = 800,
        Zd = 16,
        eh = Date.now;

    function th(e) {
        var t = 0,
            r = 0;
        return function() {
            var n = eh(),
                i = Zd - (n - r);
            if (r = n, i > 0) {
                if (++t >= Qd) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var rh = th,
        nh = Xd,
        ih = rh,
        oh = ih(nh),
        sh = oh,
        ah = rs,
        ch = Yd,
        uh = sh;

    function fh(e, t) {
        return uh(ch(e, t, ah), e + "")
    }
    var lh = fh,
        ph = Ir,
        dh = Hn,
        hh = Zo,
        _h = at;

    function gh(e, t, r) {
        if (!_h(r)) return !1;
        var n = typeof t;
        return (n == "number" ? dh(r) && hh(t, r.length) : n == "string" && t in r) ? ph(r[t], e) : !1
    }
    var yh = gh,
        vh = lh,
        mh = yh;

    function bh(e) {
        return vh(function(t, r) {
            var n = -1,
                i = r.length,
                o = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (o = e.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && mh(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++n < i;) {
                var a = r[n];
                a && e(t, a, n, o)
            }
            return t
        })
    }
    var Eh = bh,
        Sh = Md,
        wh = Eh;
    wh(function(e, t, r) {
        Sh(e, t, r)
    });
    const li = class {
        static get serverUrl() {
            const t = this.getQueryParam("server") ?? this.getQueryParam("s");
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
            const r = this.sanitizeInput(t).replace(/'/g, "’");
            return this.htmlEscape(r).trim()
        }
        static sanitizeName(t) {
            return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
        }
        static sanitizeInput(t) {
            return t = t.replace("…", "..."), t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
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
            return r.reduce((n, i) => (n.replaceAll(`<${i[0]}>`, `[${i[1]}]`), n.replaceAll(`</${i[0]}>`, `</${i[1]}>`), n), t)
        }
        static hexToRgb(t) {
            const r = new ArrayBuffer(4);
            new DataView(r).setUint32(0, parseInt(t.replace("#", ""), 16), !1);
            const i = new Uint8Array(r);
            return `${i[1]},${i[2]},${i[3]}`
        }
        static adjustColor(t, r) {
            let n = !1,
                i = t;
            i[0] === "#" && (i = i.slice(1), n = !0);
            const o = parseInt(i, 16),
                s = Math.min(Math.max(0, (o >> 16) * r), 255),
                a = Math.min(Math.max(0, (o >> 8 & 255) * r), 255);
            let f = (Math.min(Math.max(0, (o & 255) * r), 255) | a << 8 | s << 16).toString(16);
            for (; f.length < i.length;) f = `0${f}`;
            return (n ? "#" : "") + f
        }
        static isInTolerance(t, r, n) {
            return !(Math.abs(t.x - r.x) < n || Math.abs(t.y - r.y) > n)
        }
        static getDistanceBetweenPoints(t, r) {
            const n = [t.x - r.x, t.y - r.y],
                i = Math.hypot(...n);
            return Math.round(i * 100) / 100
        }
        static getMidpoint(t, r) {
            return {
                x: (t.x + r.x) / 2,
                y: (t.y + r.y) / 2
            }
        }
        static getAngleBetweenPoints(t, r) {
            let i = Math.atan2(r.y - t.y, r.x - t.x) * (180 / Math.PI);
            return i < 0 && (i += 360), 360 - i
        }
        static getAngularDistance(t, r) {
            let n = (r - t) % 360;
            const i = n < 0 ? 1 : -1;
            return n = Math.abs(n), n > 180 ? i * (360 - n) : i * n
        }
        static getVelocity(t, r, n, i) {
            return this.getDistanceBetweenPoints(t, n) / (i - r)
        }
        static isInsideElement(t, r) {
            const n = r.getBoundingClientRect();
            return !(t.x < n.left || t.x > n.left + n.width || t.y < n.top || t.y > n.top + n.height)
        }
        static cyrb128(t) {
            let r = 1779033703,
                n = 3144134277,
                i = 1013904242,
                o = 2773480762;
            for (let s = 0, a; s < t.length; s++) a = t.charCodeAt(s), r = n ^ Math.imul(r ^ a, 597399067), n = i ^ Math.imul(n ^ a, 2869860233), i = o ^ Math.imul(i ^ a, 951274213), o = r ^ Math.imul(o ^ a, 2716044179);
            return r = Math.imul(i ^ r >>> 18, 597399067), n = Math.imul(o ^ n >>> 22, 2869860233), i = Math.imul(r ^ i >>> 17, 951274213), o = Math.imul(n ^ o >>> 19, 2716044179), [(r ^ n ^ i ^ o) >>> 0, (n ^ r) >>> 0, (i ^ r) >>> 0, (o ^ r) >>> 0]
        }
        static sfc32(t, r, n, i) {
            return function() {
                t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0;
                let s = t + r | 0;
                return t = r ^ r >>> 9, r = n + (n << 3) | 0, n = n << 21 | n >>> 11, i = i + 1 | 0, s = s + i | 0, n = n + s | 0, (s >>> 0) / 4294967296
            }
        }
    };
    let Pe = li;
    Se(Pe, "queryParams", new URLSearchParams(window.location.search)), Se(Pe, "getQueryParam", t => li.queryParams.get(t)), Se(Pe, "sleep", t => new Promise(r => {
        window.setTimeout(r, t)
    }));
    class mr {
        static get namespace() {
            var t;
            return ((t = window.tv.storage) == null ? void 0 : t.namespace) ?? this.defaultNamespace
        }
        static get isDisabled() {
            var t;
            return ((t = window.tv.storage) == null ? void 0 : t.isDisabled) ?? !1
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
            delete window.tv.storage, window.tv.storage = {
                namespace: Pe.getQueryParam("namespace") ?? Pe.getQueryParam("ns") ?? this.defaultNamespace,
                isDisabled: Pe.queryParams.has("incognito") || Pe.queryParams.has("nc")
            }, t && (window.tv.storage.tag = t), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
        }
        static get(t, r) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(t, r)) : null
        }
        static set(t, r, n = "none") {
            if (this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(t, n), r)
        }
        static remove(t, r) {
            if (this.isSupported) return window.localStorage.removeItem(this.getScopedKey(t, r))
        }
        static setTag(t) {
            const r = t.toLowerCase(),
                n = this.get("tags") ?? "[]",
                i = r.split("-")[0];
            let o = JSON.parse(n);
            o = o.filter(s => {
                const a = s.split("-")[0];
                return i !== a
            }), o.push(r), this.set("tags", JSON.stringify(o))
        }
        static getScopedKey(t, r) {
            const n = `${this.namespace}:${t}`,
                i = this.tag ? `${this.namespace}:${t}:tag:${this.tag}` : null,
                o = this.code ? `${this.namespace}:${t}:code:${this.code}` : null;
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
            this.isSupported && Object.keys(window.localStorage).forEach(r => {
                const n = r.split(":code:");
                n.length <= 1 || n[1] !== t && window.localStorage.removeItem(r)
            })
        }
        static migrateNamespace(t, r) {
            this.isSupported && Object.keys(window.localStorage).forEach(n => {
                if (!n.startsWith(`${t}-`)) return;
                const i = n.replace(`${t}-`, `${r}:`),
                    o = window.localStorage.getItem(n);
                o && (window.localStorage.setItem(i, o), window.localStorage.removeItem(n))
            })
        }
    }
    Se(mr, "defaultNamespace", "tv");
    var pn = {},
        Oh = {
            get exports() {
                return pn
            },
            set exports(e) {
                pn = e
            }
        };
    (function(e, t) {
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

                function jt(m) {
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
                                headers: jt(C.getAllResponseHeaders() || "")
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
        t = i.fetch, t.default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
    })(Oh, pn);
    var kh = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var t = {},
                r = Symbol("test"),
                n = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var i = 42;
            t[r] = i;
            for (r in t) return !1;
            if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
            var o = Object.getOwnPropertySymbols(t);
            if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var s = Object.getOwnPropertyDescriptor(t, r);
                if (s.value !== i || s.enumerable !== !0) return !1
            }
            return !0
        },
        Yi = typeof Symbol < "u" && Symbol,
        Th = kh,
        Ah = function() {
            return typeof Yi != "function" || typeof Symbol != "function" || typeof Yi("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Th()
        },
        Rh = "Function.prototype.bind called on incompatible ",
        Xr = Array.prototype.slice,
        xh = Object.prototype.toString,
        Nh = "[object Function]",
        Ih = function(t) {
            var r = this;
            if (typeof r != "function" || xh.call(r) !== Nh) throw new TypeError(Rh + r);
            for (var n = Xr.call(arguments, 1), i, o = function() {
                    if (this instanceof i) {
                        var _ = r.apply(this, n.concat(Xr.call(arguments)));
                        return Object(_) === _ ? _ : this
                    } else return r.apply(t, n.concat(Xr.call(arguments)))
                }, s = Math.max(0, r.length - n.length), a = [], u = 0; u < s; u++) a.push("$" + u);
            if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var f = function() {};
                f.prototype = r.prototype, i.prototype = new f, f.prototype = null
            }
            return i
        },
        Lh = Ih,
        Yn = Function.prototype.bind || Lh,
        Ph = Yn,
        $h = Ph.call(Function.call, Object.prototype.hasOwnProperty),
        M, Ot = SyntaxError,
        ns = Function,
        ht = TypeError,
        Qr = function(e) {
            try {
                return ns('"use strict"; return (' + e + ").constructor;")()
            } catch {}
        },
        rt = Object.getOwnPropertyDescriptor;
    if (rt) try {
        rt({}, "")
    } catch {
        rt = null
    }
    var Zr = function() {
            throw new ht
        },
        Dh = rt ? function() {
            try {
                return arguments.callee, Zr
            } catch {
                try {
                    return rt(arguments, "callee").get
                } catch {
                    return Zr
                }
            }
        }() : Zr,
        ut = Ah(),
        Ce = Object.getPrototypeOf || function(e) {
            return e.__proto__
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
            "%Function%": ns,
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
        jh = function e(t) {
            var r;
            if (t === "%AsyncFunction%") r = Qr("async function () {}");
            else if (t === "%GeneratorFunction%") r = Qr("function* () {}");
            else if (t === "%AsyncGeneratorFunction%") r = Qr("async function* () {}");
            else if (t === "%AsyncGenerator%") {
                var n = e("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (t === "%AsyncIteratorPrototype%") {
                var i = e("%AsyncGenerator%");
                i && (r = Ce(i.prototype))
            }
            return _t[t] = r, r
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
        rr = Yn,
        br = $h,
        Uh = rr.call(Function.call, Array.prototype.concat),
        Mh = rr.call(Function.apply, Array.prototype.splice),
        zi = rr.call(Function.call, String.prototype.replace),
        Er = rr.call(Function.call, String.prototype.slice),
        Bh = rr.call(Function.call, RegExp.prototype.exec),
        Fh = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        qh = /\\(\\)?/g,
        Gh = function(t) {
            var r = Er(t, 0, 1),
                n = Er(t, -1);
            if (r === "%" && n !== "%") throw new Ot("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Ot("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return zi(t, Fh, function(o, s, a, u) {
                i[i.length] = a ? zi(u, qh, "$1") : s || o
            }), i
        },
        Hh = function(t, r) {
            var n = t,
                i;
            if (br(Wi, n) && (i = Wi[n], n = "%" + i[0] + "%"), br(_t, n)) {
                var o = _t[n];
                if (o === ft && (o = jh(n)), typeof o > "u" && !r) throw new ht("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: o
                }
            }
            throw new Ot("intrinsic " + t + " does not exist!")
        },
        Wn = function(t, r) {
            if (typeof t != "string" || t.length === 0) throw new ht("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new ht('"allowMissing" argument must be a boolean');
            if (Bh(/^%?[^%]*%?$/g, t) === null) throw new Ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = Gh(t),
                i = n.length > 0 ? n[0] : "",
                o = Hh("%" + i + "%", r),
                s = o.name,
                a = o.value,
                u = !1,
                f = o.alias;
            f && (i = f[0], Mh(n, Uh([0, 1], f)));
            for (var _ = 1, y = !0; _ < n.length; _ += 1) {
                var v = n[_],
                    E = Er(v, 0, 1),
                    w = Er(v, -1);
                if ((E === '"' || E === "'" || E === "`" || w === '"' || w === "'" || w === "`") && E !== w) throw new Ot("property names with quotes must have matching quotes");
                if ((v === "constructor" || !y) && (u = !0), i += "." + v, s = "%" + i + "%", br(_t, s)) a = _t[s];
                else if (a != null) {
                    if (!(v in a)) {
                        if (!r) throw new ht("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (rt && _ + 1 >= n.length) {
                        var I = rt(a, v);
                        y = !!I, y && "get" in I && !("originalValue" in I.get) ? a = I.get : a = a[v]
                    } else y = br(a, v), a = a[v];
                    y && !u && (_t[s] = a)
                }
            }
            return a
        },
        dn = {},
        Yh = {
            get exports() {
                return dn
            },
            set exports(e) {
                dn = e
            }
        };
    (function(e) {
        var t = Yn,
            r = Wn,
            n = r("%Function.prototype.apply%"),
            i = r("%Function.prototype.call%"),
            o = r("%Reflect.apply%", !0) || t.call(i, n),
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
        e.exports = function(y) {
            var v = o(t, i, arguments);
            if (s && a) {
                var E = s(v, "length");
                E.configurable && a(v, "length", {
                    value: 1 + u(0, y.length - (arguments.length - 1))
                })
            }
            return v
        };
        var f = function() {
            return o(t, n, arguments)
        };
        a ? a(e.exports, "apply", {
            value: f
        }) : e.exports.apply = f
    })(Yh);
    var is = Wn,
        os = dn,
        Wh = os(is("String.prototype.indexOf")),
        zh = function(t, r) {
            var n = is(t, !!r);
            return typeof n == "function" && Wh(t, ".prototype.") > -1 ? os(n) : n
        },
        zn = Wn,
        Dt = zh;
    zn("%TypeError%");
    zn("%WeakMap%", !0);
    zn("%Map%", !0);
    Dt("WeakMap.prototype.get", !0);
    Dt("WeakMap.prototype.set", !0);
    Dt("WeakMap.prototype.has", !0);
    Dt("Map.prototype.get", !0);
    Dt("Map.prototype.set", !0);
    Dt("Map.prototype.has", !0);
    (function() {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e
    })();
    typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof me < "u" && (me.WebSocket || me.MozWebSocket));
    var hn = {},
        Kh = {
            get exports() {
                return hn
            },
            set exports(e) {
                hn = e
            }
        },
        gt = typeof Reflect == "object" ? Reflect : null,
        Ki = gt && typeof gt.apply == "function" ? gt.apply : function(t, r, n) {
            return Function.prototype.apply.call(t, r, n)
        },
        fr;
    gt && typeof gt.ownKeys == "function" ? fr = gt.ownKeys : Object.getOwnPropertySymbols ? fr = function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : fr = function(t) {
        return Object.getOwnPropertyNames(t)
    };

    function Vh(e) {
        console && console.warn && console.warn(e)
    }
    var ss = Number.isNaN || function(t) {
        return t !== t
    };

    function K() {
        K.init.call(this)
    }
    Kh.exports = K;
    hn.once = Zh;
    K.EventEmitter = K;
    K.prototype._events = void 0;
    K.prototype._eventsCount = 0;
    K.prototype._maxListeners = void 0;
    var Vi = 10;

    function jr(e) {
        if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    Object.defineProperty(K, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Vi
        },
        set: function(e) {
            if (typeof e != "number" || e < 0 || ss(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Vi = e
        }
    });
    K.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    K.prototype.setMaxListeners = function(t) {
        if (typeof t != "number" || t < 0 || ss(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
        return this._maxListeners = t, this
    };

    function as(e) {
        return e._maxListeners === void 0 ? K.defaultMaxListeners : e._maxListeners
    }
    K.prototype.getMaxListeners = function() {
        return as(this)
    };
    K.prototype.emit = function(t) {
        for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
        var i = t === "error",
            o = this._events;
        if (o !== void 0) i = i && o.error === void 0;
        else if (!i) return !1;
        if (i) {
            var s;
            if (r.length > 0 && (s = r[0]), s instanceof Error) throw s;
            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw a.context = s, a
        }
        var u = o[t];
        if (u === void 0) return !1;
        if (typeof u == "function") Ki(u, this, r);
        else
            for (var f = u.length, _ = ps(u, f), n = 0; n < f; ++n) Ki(_[n], this, r);
        return !0
    };

    function cs(e, t, r, n) {
        var i, o, s;
        if (jr(r), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), s = o[t]), s === void 0) s = o[t] = r, ++e._eventsCount;
        else if (typeof s == "function" ? s = o[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = as(e), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = s.length, Vh(a)
        }
        return e
    }
    K.prototype.addListener = function(t, r) {
        return cs(this, t, r, !1)
    };
    K.prototype.on = K.prototype.addListener;
    K.prototype.prependListener = function(t, r) {
        return cs(this, t, r, !0)
    };

    function Jh() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function us(e, t, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            },
            i = Jh.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    K.prototype.once = function(t, r) {
        return jr(r), this.on(t, us(this, t, r)), this
    };
    K.prototype.prependOnceListener = function(t, r) {
        return jr(r), this.prependListener(t, us(this, t, r)), this
    };
    K.prototype.removeListener = function(t, r) {
        var n, i, o, s, a;
        if (jr(r), i = this._events, i === void 0) return this;
        if (n = i[t], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
        else if (typeof n != "function") {
            for (o = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === r || n[s].listener === r) {
                    a = n[s].listener, o = s;
                    break
                } if (o < 0) return this;
            o === 0 ? n.shift() : Xh(n, o), n.length === 1 && (i[t] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", t, a || r)
        }
        return this
    };
    K.prototype.off = K.prototype.removeListener;
    K.prototype.removeAllListeners = function(t) {
        var r, n, i;
        if (n = this._events, n === void 0) return this;
        if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[t]), this;
        if (arguments.length === 0) {
            var o = Object.keys(n),
                s;
            for (i = 0; i < o.length; ++i) s = o[i], s !== "removeListener" && this.removeAllListeners(s);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = n[t], typeof r == "function") this.removeListener(t, r);
        else if (r !== void 0)
            for (i = r.length - 1; i >= 0; i--) this.removeListener(t, r[i]);
        return this
    };

    function fs(e, t, r) {
        var n = e._events;
        if (n === void 0) return [];
        var i = n[t];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Qh(i) : ps(i, i.length)
    }
    K.prototype.listeners = function(t) {
        return fs(this, t, !0)
    };
    K.prototype.rawListeners = function(t) {
        return fs(this, t, !1)
    };
    K.listenerCount = function(e, t) {
        return typeof e.listenerCount == "function" ? e.listenerCount(t) : ls.call(e, t)
    };
    K.prototype.listenerCount = ls;

    function ls(e) {
        var t = this._events;
        if (t !== void 0) {
            var r = t[e];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    K.prototype.eventNames = function() {
        return this._eventsCount > 0 ? fr(this._events) : []
    };

    function ps(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r
    }

    function Xh(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop()
    }

    function Qh(e) {
        for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
        return t
    }

    function Zh(e, t) {
        return new Promise(function(r, n) {
            function i(s) {
                e.removeListener(t, o), n(s)
            }

            function o() {
                typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments))
            }
            ds(e, t, o, {
                once: !0
            }), t !== "error" && e_(e, i, {
                once: !0
            })
        })
    }

    function e_(e, t, r) {
        typeof e.on == "function" && ds(e, "error", t, r)
    }

    function ds(e, t, r, n) {
        if (typeof e.on == "function") n.once ? e.once(t, r) : e.on(t, r);
        else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(o) {
            n.once && e.removeEventListener(t, i), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }

    function t_(...e) {
        console.log(...e)
    }

    function r_(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var _n = {},
        n_ = {
            get exports() {
                return _n
            },
            set exports(e) {
                _n = e
            }
        };
    (function(e, t) {
        (function(r, n) {
            n(t)
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
                    Wr = 0;
                for (ke !== "object" && ke !== "string" && (g = p, p = null), g && typeof g != "function" && (g = E.parse), p = se(p), h = he(d || "", p), l = !h.protocol && !h.slashes, P.slashes = h.slashes || l && p.slashes, P.protocol = h.protocol || p.protocol || "", d = h.rest, (P.protocol === "file:" || !h.slashes && (h.protocol || h.slashesCount < 2 || !ae(P.protocol))) && (ge[3] = [/(.*)/, "pathname"]); Wr < ge.length; Wr++) {
                    if (k = ge[Wr], typeof k == "function") {
                        d = k(d, P);
                        continue
                    }
                    O = k[0], N = k[1], O !== O ? P[N] = d : typeof O == "string" ? ~(R = d.indexOf(O)) && (typeof k[2] == "number" ? (P[N] = d.slice(0, R), d = d.slice(R + k[2])) : (P[N] = d.slice(R), d = d.slice(0, R))) : (R = O.exec(d)) && (P[N] = R[1], d = d.slice(0, R.index)), P[N] = P[N] || l && k[3] && p[N] || "", k[4] && (P[N] = P[N].toLowerCase())
                }
                g && (P.query = g(P.query)), l && p.slashes && P.pathname.charAt(0) !== "/" && (P.pathname !== "" || p.pathname !== "") && (P.pathname = te(P.pathname, p.pathname)), P.pathname.charAt(0) !== "/" && ae(P.protocol) && (P.pathname = "/" + P.pathname), i(P.port, P.protocol) || (P.host = P.hostname, P.port = ""), P.username = P.password = "", P.auth && (k = P.auth.split(":"), P.username = k[0] || "", P.password = k[1] || ""), P.origin = P.protocol !== "file:" && ae(P.protocol) && P.host ? P.protocol + "//" + P.host : "null", P.href = P.toString()
            }

            function jt(d, p, g) {
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
                set: jt,
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

            function pi(d, p, g) {
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

            function ir(d) {
                return Object.prototype.toString.call(d) !== "[object Blob]" && !(d instanceof ArrayBuffer) && (d = String(d)), d
            }
            var Gr = new WeakMap;

            function di(d) {
                if (Gr.has(d)) return Gr.get(d);
                var p = new Proxy(d, {
                    get: function(l, h) {
                        return h === "close" ? function(k) {
                            k === void 0 && (k = {});
                            var R = k.code || A.CLOSE_NORMAL,
                                N = k.reason || "";
                            pi(p, R, N)
                        } : h === "send" ? function(k) {
                            k = ir(k), d.dispatchEvent(Qe({
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
                return Gr.set(d, p), p
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
                    var O = di(this),
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
                            data: ir(h)
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
                        var R = di(this);
                        this.readyState === p.CONNECTING ? ia(R, h || A.CLOSE_ABNORMAL, O) : pi(R, h || A.CLOSE_NO_STATUS, O)
                    }
                }, Object.defineProperties(p.prototype, g), p
            }(W);
            re.CONNECTING = 0, re.prototype.CONNECTING = re.CONNECTING, re.OPEN = 1, re.prototype.OPEN = re.OPEN, re.CLOSING = 2, re.prototype.CLOSING = re.CLOSING, re.CLOSED = 3, re.prototype.CLOSED = re.CLOSED;
            var ca = function(d) {
                return d.reduce(function(p, g) {
                    return p.indexOf(g) > -1 ? p : p.concat(g)
                }, [])
            };

            function hi() {
                return typeof window < "u" ? window : typeof process == "object" && typeof r_ == "function" && typeof me == "object" ? me : this
            }
            var _i = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                Hr = function(d) {
                    function p(g, l) {
                        l === void 0 && (l = _i), d.call(this);
                        var h = new Je(g);
                        h.pathname || (h.pathname = "/"), this.url = h.toString(), this.originalWebSocket = null;
                        var O = b.attachServer(this, this.url);
                        if (!O) throw this.dispatchEvent(_e({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, _i, l), this.options.mock && this.mockWebsocket()
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p.prototype.mockWebsocket = function() {
                        var l = hi();
                        this.originalWebSocket = l.WebSocket, l.WebSocket = re
                    }, p.prototype.restoreWebsocket = function() {
                        var l = hi();
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
                            return ir(N)
                        })) : h = ir(h), R.forEach(function(N) {
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
            Hr.of = function(p) {
                return new Hr(p)
            };
            var Ut = function(d) {
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
            Ut.CONNECTING = 0, Ut.OPEN = 1, Ut.CLOSING = 2, Ut.CLOSED = 3;
            var Yr = function(p, g) {
                return new Ut(p, g)
            };
            Yr.connect = function(p, g) {
                return Yr(p, g)
            };
            var ua = Hr,
                fa = re,
                la = Yr;
            r.Server = ua, r.WebSocket = fa, r.SocketIO = la, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(n_, _n);
    var Ji = {},
        i_ = {
            get exports() {
                return Ji
            },
            set exports(e) {
                Ji = e
            }
        };
    (function(e) {
        (function() {
            function t(a, u) {
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
                for (var f = a[0], _ = [f], y, v = 1, E = a.length; v < E; v++) y = a[v], t(y, f) > u && (_.push(y), f = y);
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
            e.exports = s, e.exports.default = s
        })()
    })(i_);
    const hs = Object.prototype.toString;

    function _s(e) {
        switch (hs.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Ve(e, Error)
        }
    }

    function Ct(e, t) {
        return hs.call(e) === `[object ${t}]`
    }

    function gs(e) {
        return Ct(e, "ErrorEvent")
    }

    function Xi(e) {
        return Ct(e, "DOMError")
    }

    function o_(e) {
        return Ct(e, "DOMException")
    }

    function ot(e) {
        return Ct(e, "String")
    }

    function ys(e) {
        return e === null || typeof e != "object" && typeof e != "function"
    }

    function kt(e) {
        return Ct(e, "Object")
    }

    function Kn(e) {
        return typeof Event < "u" && Ve(e, Event)
    }

    function s_(e) {
        return typeof Element < "u" && Ve(e, Element)
    }

    function a_(e) {
        return Ct(e, "RegExp")
    }

    function Vn(e) {
        return !!(e && e.then && typeof e.then == "function")
    }

    function c_(e) {
        return kt(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
    }

    function u_(e) {
        return typeof e == "number" && e !== e
    }

    function Ve(e, t) {
        try {
            return e instanceof t
        } catch {
            return !1
        }
    }

    function or(e) {
        return e && e.Math == Math ? e : void 0
    }
    const Oe = typeof globalThis == "object" && or(globalThis) || typeof window == "object" && or(window) || typeof self == "object" && or(self) || typeof global == "object" && or(global) || function() {
        return this
    }() || {};

    function Ur() {
        return Oe
    }

    function Jn(e, t, r) {
        const n = r || Oe,
            i = n.__SENTRY__ = n.__SENTRY__ || {};
        return i[e] || (i[e] = t())
    }
    const f_ = Ur(),
        l_ = 80;

    function gn(e, t = {}) {
        try {
            let r = e;
            const n = 5,
                i = [];
            let o = 0,
                s = 0;
            const a = " > ",
                u = a.length;
            let f;
            const _ = Array.isArray(t) ? t : t.keyAttrs,
                y = !Array.isArray(t) && t.maxStringLength || l_;
            for (; r && o++ < n && (f = p_(r, _), !(f === "html" || o > 1 && s + i.length * u + f.length >= y));) i.push(f), s += f.length, r = r.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function p_(e, t) {
        const r = e,
            n = [];
        let i, o, s, a, u;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        const f = t && t.length ? t.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
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
        constructor(t, r = "warn") {
            super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    const h_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function __(e) {
        return e === "http" || e === "https"
    }

    function Xn(e, t = !1) {
        const {
            host: r,
            path: n,
            pass: i,
            port: o,
            projectId: s,
            protocol: a,
            publicKey: u
        } = e;
        return `${a}://${u}${t&&i?`:${i}`:""}@${r}${o?`:${o}`:""}/${n&&`${n}/`}${s}`
    }

    function g_(e) {
        const t = h_.exec(e);
        if (!t) throw new ue(`Invalid Sentry Dsn: ${e}`);
        const [r, n, i = "", o, s = "", a] = t.slice(1);
        let u = "",
            f = a;
        const _ = f.split("/");
        if (_.length > 1 && (u = _.slice(0, -1).join("/"), f = _.pop()), f) {
            const y = f.match(/^\d+/);
            y && (f = y[0])
        }
        return vs({
            host: o,
            pass: i,
            path: u,
            projectId: f,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function vs(e) {
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

    function y_(e) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: t,
            projectId: r,
            protocol: n
        } = e;
        if (["protocol", "publicKey", "host", "projectId"].forEach(o => {
                if (!e[o]) throw new ue(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new ue(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!__(n)) throw new ue(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (t && isNaN(parseInt(t, 10))) throw new ue(`Invalid Sentry Dsn: Invalid port ${t}`);
        return !0
    }

    function v_(e) {
        const t = typeof e == "string" ? g_(e) : vs(e);
        return y_(t), t
    }
    const m_ = "Sentry Logger ",
        Sr = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function ms(e) {
        if (!("console" in Oe)) return e();
        const t = Oe.console,
            r = {};
        Sr.forEach(n => {
            const i = t[n] && t[n].__sentry_original__;
            n in t && i && (r[n] = t[n], t[n] = i)
        });
        try {
            return e()
        } finally {
            Object.keys(r).forEach(n => {
                t[n] = r[n]
            })
        }
    }

    function Qi() {
        let e = !1;
        const t = {
            enable: () => {
                e = !0
            },
            disable: () => {
                e = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Sr.forEach(r => {
            t[r] = (...n) => {
                e && ms(() => {
                    Oe.console[r](`${m_}[${r}]:`, ...n)
                })
            }
        }) : Sr.forEach(r => {
            t[r] = () => {}
        }), t
    }
    let U;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? U = Jn("logger", Qi) : U = Qi();

    function Ht(e, t = 0) {
        return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0,t)}...`
    }

    function Zi(e, t) {
        if (!Array.isArray(e)) return "";
        const r = [];
        for (let n = 0; n < e.length; n++) {
            const i = e[n];
            try {
                r.push(String(i))
            } catch {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(t)
    }

    function b_(e, t, r = !1) {
        return ot(e) ? a_(t) ? t.test(e) : ot(t) ? r ? e === t : e.includes(t) : !1 : !1
    }

    function Qn(e, t = [], r = !1) {
        return t.some(n => b_(e, n, r))
    }

    function fe(e, t, r) {
        if (!(t in e)) return;
        const n = e[t],
            i = r(n);
        if (typeof i == "function") try {
            bs(i, n)
        } catch {}
        e[t] = i
    }

    function Zn(e, t, r) {
        Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function bs(e, t) {
        const r = t.prototype || {};
        e.prototype = t.prototype = r, Zn(e, "__sentry_original__", t)
    }

    function ei(e) {
        return e.__sentry_original__
    }

    function E_(e) {
        return Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")
    }

    function Es(e) {
        if (_s(e)) return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...to(e)
        };
        if (Kn(e)) {
            const t = {
                type: e.type,
                target: eo(e.target),
                currentTarget: eo(e.currentTarget),
                ...to(e)
            };
            return typeof CustomEvent < "u" && Ve(e, CustomEvent) && (t.detail = e.detail), t
        } else return e
    }

    function eo(e) {
        try {
            return s_(e) ? gn(e) : Object.prototype.toString.call(e)
        } catch {
            return "<unknown>"
        }
    }

    function to(e) {
        if (typeof e == "object" && e !== null) {
            const t = {};
            for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        } else return {}
    }

    function S_(e, t = 40) {
        const r = Object.keys(Es(e));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= t) return Ht(r[0], t);
        for (let n = r.length; n > 0; n--) {
            const i = r.slice(0, n).join(", ");
            if (!(i.length > t)) return n === r.length ? i : Ht(i, t)
        }
        return ""
    }

    function ti(e) {
        return yn(e, new Map)
    }

    function yn(e, t) {
        if (kt(e)) {
            const r = t.get(e);
            if (r !== void 0) return r;
            const n = {};
            t.set(e, n);
            for (const i of Object.keys(e)) typeof e[i] < "u" && (n[i] = yn(e[i], t));
            return n
        }
        if (Array.isArray(e)) {
            const r = t.get(e);
            if (r !== void 0) return r;
            const n = [];
            return t.set(e, n), e.forEach(i => {
                n.push(yn(i, t))
            }), n
        }
        return e
    }
    const w_ = 50;

    function Ss(...e) {
        const t = e.sort((r, n) => r[0] - n[0]).map(r => r[1]);
        return (r, n = 0) => {
            const i = [];
            for (const o of r.split(`
`).slice(n)) {
                if (o.length > 1024) continue;
                const s = o.replace(/\(error: (.*)\)/, "$1");
                for (const a of t) {
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

    function O_(e) {
        return Array.isArray(e) ? Ss(...e) : e
    }

    function k_(e) {
        if (!e.length) return [];
        let t = e;
        const r = t[0].function || "",
            n = t[t.length - 1].function || "";
        return (r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (t = t.slice(1)), n.indexOf("sentryWrapped") !== -1 && (t = t.slice(0, -1)), t.slice(0, w_).map(i => ({
            ...i,
            filename: i.filename || t[0].filename,
            function: i.function || "?"
        })).reverse()
    }
    const en = "<anonymous>";

    function We(e) {
        try {
            return !e || typeof e != "function" ? en : e.name || en
        } catch {
            return en
        }
    }
    const et = Ur();

    function ws() {
        if (!("fetch" in et)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch {
            return !1
        }
    }

    function vn(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function T_() {
        if (!ws()) return !1;
        if (vn(et.fetch)) return !0;
        let e = !1;
        const t = et.document;
        if (t && typeof t.createElement == "function") try {
            const r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (e = vn(r.contentWindow.fetch)), t.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return e
    }

    function A_() {
        const e = et.chrome,
            t = e && e.app && e.app.runtime,
            r = "history" in et && !!et.history.pushState && !!et.history.replaceState;
        return !t && r
    }
    const Z = Ur(),
        Yt = {},
        ro = {};

    function R_(e) {
        if (!ro[e]) switch (ro[e] = !0, e) {
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
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("unknown instrumentation type:", e);
                return
        }
    }

    function Ue(e, t) {
        Yt[e] = Yt[e] || [], Yt[e].push(t), R_(e)
    }

    function Re(e, t) {
        if (!(!e || !Yt[e]))
            for (const r of Yt[e] || []) try {
                r(t)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${We(r)}
Error:`, n)
            }
    }

    function x_() {
        "console" in Z && Sr.forEach(function(e) {
            e in Z.console && fe(Z.console, e, function(t) {
                return function(...r) {
                    Re("console", {
                        args: r,
                        level: e
                    }), t && t.apply(Z.console, r)
                }
            })
        })
    }

    function N_() {
        T_() && fe(Z, "fetch", function(e) {
            return function(...t) {
                const r = {
                    args: t,
                    fetchData: {
                        method: I_(t),
                        url: L_(t)
                    },
                    startTimestamp: Date.now()
                };
                return Re("fetch", {
                    ...r
                }), e.apply(Z, t).then(n => (Re("fetch", {
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

    function I_(e = []) {
        return "Request" in Z && Ve(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function L_(e = []) {
        return typeof e[0] == "string" ? e[0] : "Request" in Z && Ve(e[0], Request) ? e[0].url : String(e[0])
    }

    function P_() {
        if (!("XMLHttpRequest" in Z)) return;
        const e = XMLHttpRequest.prototype;
        fe(e, "open", function(t) {
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
                }) : n.addEventListener("readystatechange", s), t.apply(n, r)
            }
        }), fe(e, "send", function(t) {
            return function(...r) {
                return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), Re("xhr", {
                    args: r,
                    startTimestamp: Date.now(),
                    xhr: this
                }), t.apply(this, r)
            }
        })
    }
    let sr;

    function $_() {
        if (!A_()) return;
        const e = Z.onpopstate;
        Z.onpopstate = function(...r) {
            const n = Z.location.href,
                i = sr;
            if (sr = n, Re("history", {
                    from: i,
                    to: n
                }), e) try {
                return e.apply(this, r)
            } catch {}
        };

        function t(r) {
            return function(...n) {
                const i = n.length > 2 ? n[2] : void 0;
                if (i) {
                    const o = sr,
                        s = String(i);
                    sr = s, Re("history", {
                        from: o,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        fe(Z.history, "pushState", t), fe(Z.history, "replaceState", t)
    }
    const D_ = 1e3;
    let ar, cr;

    function C_(e, t) {
        if (!e || e.type !== t.type) return !0;
        try {
            if (e.target !== t.target) return !0
        } catch {}
        return !1
    }

    function j_(e) {
        if (e.type !== "keypress") return !1;
        try {
            const t = e.target;
            if (!t || !t.tagName) return !0;
            if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1
        } catch {}
        return !0
    }

    function no(e, t = !1) {
        return r => {
            if (!r || cr === r || j_(r)) return;
            const n = r.type === "keypress" ? "input" : r.type;
            ar === void 0 ? (e({
                event: r,
                name: n,
                global: t
            }), cr = r) : C_(cr, r) && (e({
                event: r,
                name: n,
                global: t
            }), cr = r), clearTimeout(ar), ar = Z.setTimeout(() => {
                ar = void 0
            }, D_)
        }
    }

    function U_() {
        if (!("document" in Z)) return;
        const e = Re.bind(null, "dom"),
            t = no(e, !0);
        Z.document.addEventListener("click", t, !1), Z.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(r => {
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
                            const y = no(e);
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
    let tn = null;

    function M_() {
        tn = Z.onerror, Z.onerror = function(e, t, r, n, i) {
            return Re("error", {
                column: n,
                error: i,
                line: r,
                msg: e,
                url: t
            }), tn ? tn.apply(this, arguments) : !1
        }
    }
    let rn = null;

    function B_() {
        rn = Z.onunhandledrejection, Z.onunhandledrejection = function(e) {
            return Re("unhandledrejection", e), rn ? rn.apply(this, arguments) : !0
        }
    }

    function F_() {
        const e = typeof WeakSet == "function",
            t = e ? new WeakSet : [];

        function r(i) {
            if (e) return t.has(i) ? !0 : (t.add(i), !1);
            for (let o = 0; o < t.length; o++)
                if (t[o] === i) return !0;
            return t.push(i), !1
        }

        function n(i) {
            if (e) t.delete(i);
            else
                for (let o = 0; o < t.length; o++)
                    if (t[o] === i) {
                        t.splice(o, 1);
                        break
                    }
        }
        return [r, n]
    }

    function yt() {
        const e = Oe,
            t = e.crypto || e.msCrypto;
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        const r = t && t.getRandomValues ? () => t.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function Os(e) {
        return e.exception && e.exception.values ? e.exception.values[0] : void 0
    }

    function tt(e) {
        const {
            message: t,
            event_id: r
        } = e;
        if (t) return t;
        const n = Os(e);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function mn(e, t, r) {
        const n = e.exception = e.exception || {},
            i = n.values = n.values || [],
            o = i[0] = i[0] || {};
        o.value || (o.value = t || ""), o.type || (o.type = r || "Error")
    }

    function Vt(e, t) {
        const r = Os(e);
        if (!r) return;
        const n = {
                type: "generic",
                handled: !0
            },
            i = r.mechanism;
        if (r.mechanism = {
                ...n,
                ...i,
                ...t
            }, t && "data" in t) {
            const o = {
                ...i && i.data,
                ...t.data
            };
            r.mechanism.data = o
        }
    }

    function io(e) {
        if (e && e.__sentry_captured__) return !0;
        try {
            Zn(e, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function ks(e) {
        return Array.isArray(e) ? e : [e]
    }

    function q_() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function G_() {
        return "npm"
    }

    function Ts() {
        return !q_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function H_(e, t) {
        return e.require(t)
    }

    function je(e, t = 1 / 0, r = 1 / 0) {
        try {
            return bn("", e, t, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function As(e, t = 3, r = 100 * 1024) {
        const n = je(e, t);
        return K_(n) > r ? As(e, t - 1, r) : n
    }

    function bn(e, t, r = 1 / 0, n = 1 / 0, i = F_()) {
        const [o, s] = i;
        if (t === null || ["number", "boolean", "string"].includes(typeof t) && !u_(t)) return t;
        const a = Y_(e, t);
        if (!a.startsWith("[object ")) return a;
        if (t.__sentry_skip_normalization__) return t;
        let u = r;
        if (typeof t.__sentry_override_normalization_depth__ == "number" && (u = t.__sentry_override_normalization_depth__), u === 0) return a.replace("object ", "");
        if (o(t)) return "[Circular ~]";
        const f = t;
        if (f && typeof f.toJSON == "function") try {
            const E = f.toJSON();
            return bn("", E, u - 1, n, i)
        } catch {}
        const _ = Array.isArray(t) ? [] : {};
        let y = 0;
        const v = Es(t);
        for (const E in v) {
            if (!Object.prototype.hasOwnProperty.call(v, E)) continue;
            if (y >= n) {
                _[E] = "[MaxProperties ~]";
                break
            }
            const w = v[E];
            _[E] = bn(E, w, u - 1, n, i), y++
        }
        return s(t), _
    }

    function Y_(e, t) {
        try {
            return e === "domain" && t && typeof t == "object" && t._events ? "[Domain]" : e === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && t === global ? "[Global]" : typeof window < "u" && t === window ? "[Window]" : typeof document < "u" && t === document ? "[Document]" : c_(t) ? "[SyntheticEvent]" : typeof t == "number" && t !== t ? "[NaN]" : t === void 0 ? "[undefined]" : typeof t == "function" ? `[Function: ${We(t)}]` : typeof t == "symbol" ? `[${String(t)}]` : typeof t == "bigint" ? `[BigInt: ${String(t)}]` : `[object ${W_(t)}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function W_(e) {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : "null prototype"
    }

    function z_(e) {
        return ~-encodeURI(e).split(/%..|./).length
    }

    function K_(e) {
        return z_(JSON.stringify(e))
    }
    var Ie;
    (function(e) {
        e[e.PENDING = 0] = "PENDING";
        const r = 1;
        e[e.RESOLVED = r] = "RESOLVED";
        const n = 2;
        e[e.REJECTED = n] = "REJECTED"
    })(Ie || (Ie = {}));

    function st(e) {
        return new de(t => {
            t(e)
        })
    }

    function wr(e) {
        return new de((t, r) => {
            r(e)
        })
    }
    class de {
        __init() {
            this._state = Ie.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            de.prototype.__init.call(this), de.prototype.__init2.call(this), de.prototype.__init3.call(this), de.prototype.__init4.call(this), de.prototype.__init5.call(this), de.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(t, r) {
            return new de((n, i) => {
                this._handlers.push([!1, o => {
                    if (!t) n(o);
                    else try {
                        n(t(o))
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
        } catch (t) {
            return this.then(r => r, t)
        } finally(t) {
            return new de((r, n) => {
                let i, o;
                return this.then(s => {
                    o = !1, i = s, t && t()
                }, s => {
                    o = !0, i = s, t && t()
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
            this._resolve = t => {
                this._setResult(Ie.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(Ie.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, r) => {
                if (this._state === Ie.PENDING) {
                    if (Vn(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === Ie.PENDING) return;
                const t = this._handlers.slice();
                this._handlers = [], t.forEach(r => {
                    r[0] || (this._state === Ie.RESOLVED && r[1](this._value), this._state === Ie.REJECTED && r[2](this._value), r[0] = !0)
                })
            }
        }
    }

    function V_(e) {
        const t = [];

        function r() {
            return e === void 0 || t.length < e
        }

        function n(s) {
            return t.splice(t.indexOf(s), 1)[0]
        }

        function i(s) {
            if (!r()) return wr(new ue("Not adding Promise because buffer limit was reached."));
            const a = s();
            return t.indexOf(a) === -1 && t.push(a), a.then(() => n(a)).then(null, () => n(a).then(null, () => {})), a
        }

        function o(s) {
            return new de((a, u) => {
                let f = t.length;
                if (!f) return a(!0);
                const _ = setTimeout(() => {
                    s && s > 0 && a(!1)
                }, s);
                t.forEach(y => {
                    st(y).then(() => {
                        --f || (clearTimeout(_), a(!0))
                    }, u)
                })
            })
        }
        return {
            $: t,
            add: i,
            drain: o
        }
    }

    function nn(e) {
        if (!e) return {};
        const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        const r = t[6] || "",
            n = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + r + n
        }
    }
    const J_ = ["fatal", "error", "warning", "log", "info", "debug"];

    function X_(e) {
        return e === "warn" ? "warning" : J_.includes(e) ? e : "log"
    }
    const Rs = Ur(),
        En = {
            nowSeconds: () => Date.now() / 1e3
        };

    function Q_() {
        const {
            performance: e
        } = Rs;
        if (!e || !e.now) return;
        const t = Date.now() - e.now();
        return {
            now: () => e.now(),
            timeOrigin: t
        }
    }

    function Z_() {
        try {
            return H_(na, "perf_hooks").performance
        } catch {
            return
        }
    }
    const on = Ts() ? Z_() : Q_(),
        oo = on === void 0 ? En : {
            nowSeconds: () => (on.timeOrigin + on.now()) / 1e3
        },
        Mr = En.nowSeconds.bind(En),
        xs = oo.nowSeconds.bind(oo);
    (() => {
        const {
            performance: e
        } = Rs;
        if (!e || !e.now) return;
        const t = 3600 * 1e3,
            r = e.now(),
            n = Date.now(),
            i = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
            o = i < t,
            s = e.timing && e.timing.navigationStart,
            u = typeof s == "number" ? Math.abs(s + r - n) : t,
            f = u < t;
        return o || f ? i <= u ? e.timeOrigin : s : n
    })();

    function Br(e, t = []) {
        return [e, t]
    }

    function eg(e, t) {
        const [r, n] = e;
        return [r, [...n, t]]
    }

    function so(e, t) {
        const r = e[1];
        for (const n of r) {
            const i = n[0].type;
            if (t(n, i)) return !0
        }
        return !1
    }

    function Sn(e, t) {
        return (t || new TextEncoder).encode(e)
    }

    function Ns(e, t) {
        const [r, n] = e;
        let i = JSON.stringify(r);

        function o(s) {
            typeof i == "string" ? i = typeof s == "string" ? i + s : [Sn(i, t), s] : i.push(typeof s == "string" ? Sn(s, t) : s)
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

    function tg(e) {
        const t = e.reduce((i, o) => i + o.length, 0),
            r = new Uint8Array(t);
        let n = 0;
        for (const i of e) r.set(i, n), n += i.length;
        return r
    }

    function rg(e, t) {
        const r = typeof e.data == "string" ? Sn(e.data, t) : e.data;
        return [ti({
            type: "attachment",
            length: r.length,
            filename: e.filename,
            content_type: e.contentType,
            attachment_type: e.attachmentType
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

    function ao(e) {
        return ng[e]
    }

    function Is(e) {
        if (!e || !e.sdk) return;
        const {
            name: t,
            version: r
        } = e.sdk;
        return {
            name: t,
            version: r
        }
    }

    function ig(e, t, r, n) {
        const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...t && {
                sdk: t
            },
            ...!!r && {
                dsn: Xn(n)
            },
            ...e.type === "transaction" && i && {
                trace: ti({
                    ...i
                })
            }
        }
    }

    function og(e, t, r) {
        const n = [{
            type: "client_report"
        }, {
            timestamp: r || Mr(),
            discarded_events: e
        }];
        return Br(t ? {
            dsn: t
        } : {}, [n])
    }
    const sg = 60 * 1e3;

    function ag(e, t = Date.now()) {
        const r = parseInt(`${e}`, 10);
        if (!isNaN(r)) return r * 1e3;
        const n = Date.parse(`${e}`);
        return isNaN(n) ? sg : n - t
    }

    function cg(e, t) {
        return e[t] || e.all || 0
    }

    function ug(e, t, r = Date.now()) {
        return cg(e, t) > r
    }

    function fg(e, {
        statusCode: t,
        headers: r
    }, n = Date.now()) {
        const i = {
                ...e
            },
            o = r && r["x-sentry-rate-limits"],
            s = r && r["retry-after"];
        if (o)
            for (const a of o.trim().split(",")) {
                const [u, f] = a.split(":", 2), _ = parseInt(u, 10), y = (isNaN(_) ? 60 : _) * 1e3;
                if (!f) i.all = n + y;
                else
                    for (const v of f.split(";")) i[v] = n + y
            } else s ? i.all = n + ag(s, n) : t === 429 && (i.all = n + 60 * 1e3);
        return i
    }
    const Ls = "production";

    function lg(e) {
        const t = xs(),
            r = {
                sid: yt(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => dg(r)
            };
        return e && Tt(r, e), r
    }

    function Tt(e, t = {}) {
        if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || xs(), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : yt()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
        else if (typeof t.duration == "number") e.duration = t.duration;
        else {
            const r = e.timestamp - e.started;
            e.duration = r >= 0 ? r : 0
        }
        t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
    }

    function pg(e, t) {
        let r = {};
        t ? r = {
            status: t
        } : e.status === "ok" && (r = {
            status: "exited"
        }), Tt(e, r)
    }

    function dg(e) {
        return ti({
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
    const hg = 100;
    class qe {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(t) {
            const r = new qe;
            return t && (r._breadcrumbs = [...t._breadcrumbs], r._tags = {
                ...t._tags
            }, r._extra = {
                ...t._extra
            }, r._contexts = {
                ...t._contexts
            }, r._user = t._user, r._level = t._level, r._span = t._span, r._session = t._session, r._transactionName = t._transactionName, r._fingerprint = t._fingerprint, r._eventProcessors = [...t._eventProcessors], r._requestSession = t._requestSession, r._attachments = [...t._attachments], r._sdkProcessingMetadata = {
                ...t._sdkProcessingMetadata
            }), r
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {}, this._session && Tt(this._session, {
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
            return r === null ? delete this._contexts[t] : this._contexts[t] = r, this._notifyScopeListeners(), this
        }
        setSpan(t) {
            return this._span = t, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            const t = this.getSpan();
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
                const r = t(this);
                return r instanceof qe ? r : this
            }
            return t instanceof qe ? (this._tags = {
                ...this._tags,
                ...t._tags
            }, this._extra = {
                ...this._extra,
                ...t._extra
            }, this._contexts = {
                ...this._contexts,
                ...t._contexts
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : kt(t) && (t = t, this._tags = {
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
            const n = typeof r == "number" ? r : hg;
            if (n <= 0) return this;
            const i = {
                timestamp: Mr(),
                ...t
            };
            return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
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
                const n = this._span.transaction && this._span.transaction.name;
                n && (t.tags = {
                    transaction: n,
                    ...t.tags
                })
            }
            return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = {
                ...t.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata
            }, this._notifyEventProcessors([...Ps(), ...this._eventProcessors], t, r)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        _notifyEventProcessors(t, r, n, i = 0) {
            return new de((o, s) => {
                const a = t[i];
                if (r === null || typeof a != "function") o(r);
                else {
                    const u = a({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && u === null && U.log(`Event processor "${a.id}" dropped event`), Vn(u) ? u.then(f => this._notifyEventProcessors(t, f, n, i + 1).then(o)).then(null, s) : this._notifyEventProcessors(t, u, n, i + 1).then(o).then(null, s)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(t) {
            t.fingerprint = t.fingerprint ? ks(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
    }

    function Ps() {
        return Jn("globalEventProcessors", () => [])
    }

    function ri(e) {
        Ps().push(e)
    }
    const ni = 4,
        _g = 100;
    class nr {
        __init() {
            this._stack = [{}]
        }
        constructor(t, r = new qe, n = ni) {
            this._version = n, nr.prototype.__init.call(this), this.getStackTop().scope = r, t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            const r = this.getStackTop();
            r.client = t, t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            const t = qe.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }), t
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(t) {
            const r = this.pushScope();
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
            const n = this._lastEventId = r && r.event_id ? r.event_id : yt(),
                i = new Error("Sentry syntheticException");
            return this._withClient((o, s) => {
                o.captureException(t, {
                    originalException: t,
                    syntheticException: i,
                    ...r,
                    event_id: n
                }, s)
            }), n
        }
        captureMessage(t, r, n) {
            const i = this._lastEventId = n && n.event_id ? n.event_id : yt(),
                o = new Error(t);
            return this._withClient((s, a) => {
                s.captureMessage(t, r, {
                    originalException: t,
                    syntheticException: o,
                    ...n,
                    event_id: i
                }, a)
            }), i
        }
        captureEvent(t, r) {
            const n = r && r.event_id ? r.event_id : yt();
            return t.type || (this._lastEventId = n), this._withClient((i, o) => {
                i.captureEvent(t, {
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
                client: i
            } = this.getStackTop();
            if (!n || !i) return;
            const {
                beforeBreadcrumb: o = null,
                maxBreadcrumbs: s = _g
            } = i.getOptions && i.getOptions() || {};
            if (s <= 0) return;
            const u = {
                    timestamp: Mr(),
                    ...t
                },
                f = o ? ms(() => o(u, r)) : u;
            f !== null && n.addBreadcrumb(f, s)
        }
        setUser(t) {
            const r = this.getScope();
            r && r.setUser(t)
        }
        setTags(t) {
            const r = this.getScope();
            r && r.setTags(t)
        }
        setExtras(t) {
            const r = this.getScope();
            r && r.setExtras(t)
        }
        setTag(t, r) {
            const n = this.getScope();
            n && n.setTag(t, r)
        }
        setExtra(t, r) {
            const n = this.getScope();
            n && n.setExtra(t, r)
        }
        setContext(t, r) {
            const n = this.getScope();
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
            const r = co(this);
            try {
                t(this)
            } finally {
                co(r)
            }
        }
        getIntegration(t) {
            const r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(t)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
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
            const t = this.getStackTop(),
                r = t && t.scope,
                n = r && r.getSession();
            n && pg(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: o = Ls
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
                ...t
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
            const t = this.getClient(),
                r = t && t.getOptions();
            return !!(r && r.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {
                scope: t,
                client: r
            } = this.getStackTop();
            if (!t) return;
            const n = t.getSession();
            n && r && r.captureSession && r.captureSession(n)
        }
        _withClient(t) {
            const {
                scope: r,
                client: n
            } = this.getStackTop();
            n && t(n, r)
        }
        _callExtensionMethod(t, ...r) {
            const i = Fr().__SENTRY__;
            if (i && i.extensions && typeof i.extensions[t] == "function") return i.extensions[t].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function Fr() {
        return Oe.__SENTRY__ = Oe.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, Oe
    }

    function co(e) {
        const t = Fr(),
            r = Me(t);
        return ii(t, e), r
    }

    function ie() {
        const e = Fr();
        return (!$s(e) || Me(e).isOlderThan(ni)) && ii(e, new nr), Ts() ? gg(e) : Me(e)
    }

    function gg(e) {
        try {
            const t = Fr().__SENTRY__,
                r = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
            if (!r) return Me(e);
            if (!$s(r) || Me(r).isOlderThan(ni)) {
                const n = Me(e).getStackTop();
                ii(r, new nr(n.client, qe.clone(n.scope)))
            }
            return Me(r)
        } catch {
            return Me(e)
        }
    }

    function $s(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function Me(e) {
        return Jn("hub", () => new nr, e)
    }

    function ii(e, t) {
        if (!e) return !1;
        const r = e.__SENTRY__ = e.__SENTRY__ || {};
        return r.hub = t, !0
    }

    function yg(e, t) {
        return ie().captureException(e, {
            captureContext: t
        })
    }

    function vg(e, t) {
        const r = typeof t == "string" ? t : void 0,
            n = typeof t != "string" ? {
                captureContext: t
            } : void 0;
        return ie().captureMessage(e, r, n)
    }

    function Ds(e) {
        ie().setTags(e)
    }

    function mg(e) {
        ie().withScope(e)
    }
    const bg = "7";

    function Eg(e) {
        const t = e.protocol ? `${e.protocol}:` : "",
            r = e.port ? `:${e.port}` : "";
        return `${t}//${e.host}${r}${e.path?`/${e.path}`:""}/api/`
    }

    function Sg(e) {
        return `${Eg(e)}${e.projectId}/envelope/`
    }

    function wg(e, t) {
        return E_({
            sentry_key: e.publicKey,
            sentry_version: bg,
            ...t && {
                sentry_client: `${t.name}/${t.version}`
            }
        })
    }

    function Cs(e, t = {}) {
        const r = typeof t == "string" ? t : t.tunnel,
            n = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
        return r || `${Sg(e)}?${wg(e,n)}`
    }

    function Og(e, t) {
        return t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []]), e
    }

    function kg(e, t, r, n) {
        const i = Is(r),
            o = {
                sent_at: new Date().toISOString(),
                ...i && {
                    sdk: i
                },
                ...!!n && {
                    dsn: Xn(t)
                }
            },
            s = "aggregates" in e ? [{
                type: "sessions"
            }, e] : [{
                type: "session"
            }, e];
        return Br(o, [s])
    }

    function Tg(e, t, r, n) {
        const i = Is(r),
            o = e.type && e.type !== "replay_event" ? e.type : "event";
        Og(e, r && r.sdk);
        const s = ig(e, i, n, t);
        return delete e.sdkProcessingMetadata, Br(s, [
            [{
                type: o
            }, e]
        ])
    }
    const uo = [];

    function Ag(e) {
        const t = {};
        return e.forEach(r => {
            const {
                name: n
            } = r, i = t[n];
            i && !i.isDefaultInstance && r.isDefaultInstance || (t[n] = r)
        }), Object.keys(t).map(r => t[r])
    }

    function Rg(e) {
        const t = e.defaultIntegrations || [],
            r = e.integrations;
        t.forEach(s => {
            s.isDefaultInstance = !0
        });
        let n;
        Array.isArray(r) ? n = [...t, ...r] : typeof r == "function" ? n = ks(r(t)) : n = t;
        const i = Ag(n),
            o = i.findIndex(s => s.name === "Debug");
        if (o !== -1) {
            const [s] = i.splice(o, 1);
            i.push(s)
        }
        return i
    }

    function xg(e) {
        const t = {};
        return e.forEach(r => {
            r && js(r, t)
        }), t
    }

    function js(e, t) {
        t[e.name] = e, uo.indexOf(e.name) === -1 && (e.setupOnce(ri, ie), uo.push(e.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Integration installed: ${e.name}`))
    }

    function Ng(e, t, r, n) {
        const {
            normalizeDepth: i = 3,
            normalizeMaxBreadth: o = 1e3
        } = e, s = {
            ...t,
            event_id: t.event_id || r.event_id || yt(),
            timestamp: t.timestamp || Mr()
        }, a = r.integrations || e.integrations.map(_ => _.name);
        Ig(s, e), Pg(s, a), Lg(s, e.stackParser);
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

    function Ig(e, t) {
        const {
            environment: r,
            release: n,
            dist: i,
            maxValueLength: o = 250
        } = t;
        "environment" in e || (e.environment = "environment" in t ? r : Ls), e.release === void 0 && n !== void 0 && (e.release = n), e.dist === void 0 && i !== void 0 && (e.dist = i), e.message && (e.message = Ht(e.message, o));
        const s = e.exception && e.exception.values && e.exception.values[0];
        s && s.value && (s.value = Ht(s.value, o));
        const a = e.request;
        a && a.url && (a.url = Ht(a.url, o))
    }

    function Lg(e, t) {
        const r = Oe._sentryDebugIds;
        if (!r) return;
        const n = Object.keys(r).reduce((s, a) => {
                const u = t(a);
                for (const f of u)
                    if (f.abs_path) {
                        s[f.abs_path] = r[a];
                        break
                    } return s
            }, {}),
            i = new Set;
        try {
            e.exception.values.forEach(s => {
                s.stacktrace.frames.forEach(a => {
                    a.abs_path && i.add(a.abs_path)
                })
            })
        } catch {}
        e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
        const o = e.debug_meta.images;
        i.forEach(s => {
            n[s] && o.push({
                type: "sourcemap",
                code_file: s,
                debug_id: n[s]
            })
        })
    }

    function Pg(e, t) {
        t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
    }

    function $g(e, t, r) {
        if (!e) return null;
        const n = {
            ...e,
            ...e.breadcrumbs && {
                breadcrumbs: e.breadcrumbs.map(i => ({
                    ...i,
                    ...i.data && {
                        data: je(i.data, t, r)
                    }
                }))
            },
            ...e.user && {
                user: je(e.user, t, r)
            },
            ...e.contexts && {
                contexts: je(e.contexts, t, r)
            },
            ...e.extra && {
                extra: je(e.extra, t, r)
            }
        };
        return e.contexts && e.contexts.trace && n.contexts && (n.contexts.trace = e.contexts.trace, e.contexts.trace.data && (n.contexts.trace.data = je(e.contexts.trace.data, t, r))), e.spans && (n.spans = e.spans.map(i => (i.data && (i.data = je(i.data, t, r)), i))), n
    }
    const fo = "Not capturing exception because it's already been captured.";
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
        constructor(t) {
            if (Ze.prototype.__init.call(this), Ze.prototype.__init2.call(this), Ze.prototype.__init3.call(this), Ze.prototype.__init4.call(this), Ze.prototype.__init5.call(this), this._options = t, t.dsn) {
                this._dsn = v_(t.dsn);
                const r = Cs(this._dsn, t);
                this._transport = t.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...t.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("No DSN provided, client will not do anything.")
        }
        captureException(t, r, n) {
            if (io(t)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(fo);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(t, r).then(o => this._captureEvent(o, r, n)).then(o => {
                i = o
            })), i
        }
        captureMessage(t, r, n, i) {
            let o = n && n.event_id;
            const s = ys(t) ? this.eventFromMessage(String(t), r, n) : this.eventFromException(t, n);
            return this._process(s.then(a => this._captureEvent(a, n, i)).then(a => {
                o = a
            })), o
        }
        captureEvent(t, r, n) {
            if (r && r.originalException && io(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(fo);
                return
            }
            let i = r && r.event_id;
            return this._process(this._captureEvent(t, r, n).then(o => {
                i = o
            })), i
        }
        captureSession(t) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof t.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), Tt(t, {
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
        flush(t) {
            const r = this._transport;
            return r ? this._isClientDoneProcessing(t).then(n => r.flush(t).then(i => n && i)) : st(!0)
        }
        close(t) {
            return this.flush(t).then(r => (this.getOptions().enabled = !1, r))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = xg(this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(t) {
            return this._integrations[t]
        }
        getIntegration(t) {
            try {
                return this._integrations[t.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
            }
        }
        addIntegration(t) {
            js(t, this._integrations)
        }
        sendEvent(t, r = {}) {
            if (this._dsn) {
                let n = Tg(t, this._dsn, this._options._metadata, this._options.tunnel);
                for (const i of r.attachments || []) n = eg(n, rg(i, this._options.transportOptions && this._options.transportOptions.textEncoder));
                this._sendEnvelope(n)
            }
        }
        sendSession(t) {
            if (this._dsn) {
                const r = kg(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(r)
            }
        }
        recordDroppedEvent(t, r, n) {
            if (this._options.sendClientReports) {
                const i = `${t}:${r}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1
            }
        }
        on(t, r) {
            this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(r)
        }
        emit(t, ...r) {
            this._hooks[t] && this._hooks[t].forEach(n => n(...r))
        }
        _updateSessionFromEvent(t, r) {
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
            const s = t.status === "ok";
            (s && t.errors === 0 || s && n) && (Tt(t, {
                ...n && {
                    status: "crashed"
                },
                errors: t.errors || Number(i || n)
            }), this.captureSession(t))
        }
        _isClientDoneProcessing(t) {
            return new de(r => {
                let n = 0;
                const i = 1,
                    o = setInterval(() => {
                        this._numProcessing == 0 ? (clearInterval(o), r(!0)) : (n += i, t && n >= t && (clearInterval(o), r(!1)))
                    }, i)
            })
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._dsn !== void 0
        }
        _prepareEvent(t, r, n) {
            const i = this.getOptions(),
                o = Object.keys(this._integrations);
            return !r.integrations && o.length > 0 && (r.integrations = o), Ng(i, t, r, n)
        }
        _captureEvent(t, r = {}, n) {
            return this._processEvent(t, r, n).then(i => i.event_id, i => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    const o = i;
                    o.logLevel === "log" ? U.log(o.message) : U.warn(o)
                }
            })
        }
        _processEvent(t, r, n) {
            const i = this.getOptions(),
                {
                    sampleRate: o
                } = i;
            if (!this._isEnabled()) return wr(new ue("SDK not enabled, will not capture event.", "log"));
            const s = Ms(t),
                a = Us(t),
                u = t.type || "error",
                f = `before send for type \`${u}\``;
            if (a && typeof o == "number" && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", t), wr(new ue(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
            const _ = u === "replay_event" ? "replay" : u;
            return this._prepareEvent(t, r, n).then(y => {
                if (y === null) throw this.recordDroppedEvent("event_processor", _, t), new ue("An event processor returned `null`, will not send event.", "log");
                if (r.data && r.data.__sentry__ === !0) return y;
                const E = Cg(i, y, r);
                return Dg(E, f)
            }).then(y => {
                if (y === null) throw this.recordDroppedEvent("before_send", _, t), new ue(`${f} returned \`null\`, will not send event.`, "log");
                const v = n && n.getSession();
                !s && v && this._updateSessionFromEvent(v, y);
                const E = y.transaction_info;
                if (s && E && y.transaction !== t.transaction) {
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
        _process(t) {
            this._numProcessing++, t.then(r => (this._numProcessing--, r), r => (this._numProcessing--, r))
        }
        _sendEnvelope(t) {
            this._transport && this._dsn ? this._transport.send(t).then(null, r => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Error while sending event:", r)
            }) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Transport disabled")
        }
        _clearOutcomes() {
            const t = this._outcomes;
            return this._outcomes = {}, Object.keys(t).map(r => {
                const [n, i] = r.split(":");
                return {
                    reason: n,
                    category: i,
                    quantity: t[r]
                }
            })
        }
    }

    function Dg(e, t) {
        const r = `${t} must return \`null\` or a valid event.`;
        if (Vn(e)) return e.then(n => {
            if (!kt(n) && n !== null) throw new ue(r);
            return n
        }, n => {
            throw new ue(`${t} rejected with ${n}`)
        });
        if (!kt(e) && e !== null) throw new ue(r);
        return e
    }

    function Cg(e, t, r) {
        const {
            beforeSend: n,
            beforeSendTransaction: i
        } = e;
        return Us(t) && n ? n(t, r) : Ms(t) && i ? i(t, r) : t
    }

    function Us(e) {
        return e.type === void 0
    }

    function Ms(e) {
        return e.type === "transaction"
    }

    function jg(e, t) {
        t.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? U.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const r = ie(),
            n = r.getScope();
        n && n.update(t.initialScope);
        const i = new e(t);
        r.bindClient(i)
    }
    const Ug = 30;

    function Bs(e, t, r = V_(e.bufferSize || Ug)) {
        let n = {};
        const i = s => r.drain(s);

        function o(s) {
            const a = [];
            if (so(s, (y, v) => {
                    const E = ao(v);
                    if (ug(n, E)) {
                        const w = lo(y, v);
                        e.recordDroppedEvent("ratelimit_backoff", E, w)
                    } else a.push(y)
                }), a.length === 0) return st();
            const u = Br(s[0], a),
                f = y => {
                    so(u, (v, E) => {
                        const w = lo(v, E);
                        e.recordDroppedEvent(y, ao(E), w)
                    })
                },
                _ = () => t({
                    body: Ns(u, e.textEncoder)
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

    function lo(e, t) {
        if (!(t !== "event" && t !== "transaction")) return Array.isArray(e) ? e[1] : void 0
    }
    const po = "7.42.0";
    let ho;
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
            ho = Function.prototype.toString, Function.prototype.toString = function(...t) {
                const r = ei(this) || this;
                return ho.apply(r, t)
            }
        }
    }
    Jt.__initStatic();
    const Mg = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class vt {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = vt.id
        }
        constructor(t = {}) {
            this._options = t, vt.prototype.__init.call(this)
        }
        setupOnce(t, r) {
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
            n.id = this.name, t(n)
        }
    }
    vt.__initStatic();

    function Bg(e = {}, t = {}) {
        return {
            allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
            denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
            ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...Mg],
            ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0
        }
    }

    function Fg(e, t) {
        return t.ignoreInternal && Wg(e) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being internal Sentry Error.
Event: ${tt(e)}`), !0) : qg(e, t.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${tt(e)}`), !0) : Gg(e, t.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${tt(e)}.
Url: ${Or(e)}`), !0) : Hg(e, t.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${tt(e)}.
Url: ${Or(e)}`), !0)
    }

    function qg(e, t) {
        return !t || !t.length ? !1 : Yg(e).some(r => Qn(r, t))
    }

    function Gg(e, t) {
        if (!t || !t.length) return !1;
        const r = Or(e);
        return r ? Qn(r, t) : !1
    }

    function Hg(e, t) {
        if (!t || !t.length) return !0;
        const r = Or(e);
        return r ? Qn(r, t) : !0
    }

    function Yg(e) {
        if (e.message) return [e.message];
        if (e.exception) try {
            const {
                type: t = "",
                value: r = ""
            } = e.exception.values && e.exception.values[0] || {};
            return [`${r}`, `${t}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Cannot extract message for event ${tt(e)}`), []
        }
        return []
    }

    function Wg(e) {
        try {
            return e.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function zg(e = []) {
        for (let t = e.length - 1; t >= 0; t--) {
            const r = e[t];
            if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") return r.filename || null
        }
        return null
    }

    function Or(e) {
        try {
            let t;
            try {
                t = e.exception.values[0].stacktrace.frames
            } catch {}
            return t ? zg(t) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Cannot extract url for event ${tt(e)}`), null
        }
    }
    const q = Oe;
    let wn = 0;

    function Fs() {
        return wn > 0
    }

    function Kg() {
        wn++, setTimeout(() => {
            wn--
        })
    }

    function At(e, t = {}, r) {
        if (typeof e != "function") return e;
        try {
            const i = e.__sentry_wrapped__;
            if (i) return i;
            if (ei(e)) return e
        } catch {
            return e
        }
        const n = function() {
            const i = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                const o = i.map(s => At(s, t));
                return e.apply(this, o)
            } catch (o) {
                throw Kg(), mg(s => {
                    s.addEventProcessor(a => (t.mechanism && (mn(a, void 0, void 0), Vt(a, t.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: i
                    }, a)), yg(o)
                }), o
            }
        };
        try {
            for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
        } catch {}
        bs(n, e), Zn(e, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get() {
                    return e.name
                }
            })
        } catch {}
        return n
    }

    function qs(e, t) {
        const r = oi(e, t),
            n = {
                type: t && t.name,
                value: Qg(t)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function Vg(e, t, r, n) {
        const o = ie().getClient(),
            s = o && o.getOptions().normalizeDepth,
            a = {
                exception: {
                    values: [{
                        type: Kn(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${S_(t)}`
                    }]
                },
                extra: {
                    __serialized__: As(t, s)
                }
            };
        if (r) {
            const u = oi(e, r);
            u.length && (a.exception.values[0].stacktrace = {
                frames: u
            })
        }
        return a
    }

    function sn(e, t) {
        return {
            exception: {
                values: [qs(e, t)]
            }
        }
    }

    function oi(e, t) {
        const r = t.stacktrace || t.stack || "",
            n = Xg(t);
        try {
            return e(r, n)
        } catch {}
        return []
    }
    const Jg = /Minified React error #\d+;/i;

    function Xg(e) {
        if (e) {
            if (typeof e.framesToPop == "number") return e.framesToPop;
            if (Jg.test(e.message)) return 1
        }
        return 0
    }

    function Qg(e) {
        const t = e && e.message;
        return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message"
    }

    function Zg(e, t, r, n) {
        const i = r && r.syntheticException || void 0,
            o = si(e, t, i, n);
        return Vt(o), o.level = "error", r && r.event_id && (o.event_id = r.event_id), st(o)
    }

    function ey(e, t, r = "info", n, i) {
        const o = n && n.syntheticException || void 0,
            s = On(e, t, o, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), st(s)
    }

    function si(e, t, r, n, i) {
        let o;
        if (gs(t) && t.error) return sn(e, t.error);
        if (Xi(t) || o_(t)) {
            const s = t;
            if ("stack" in t) o = sn(e, t);
            else {
                const a = s.name || (Xi(s) ? "DOMError" : "DOMException"),
                    u = s.message ? `${a}: ${s.message}` : a;
                o = On(e, u, r, n), mn(o, u)
            }
            return "code" in s && (o.tags = {
                ...o.tags,
                "DOMException.code": `${s.code}`
            }), o
        }
        return _s(t) ? sn(e, t) : kt(t) || Kn(t) ? (o = Vg(e, t, r, i), Vt(o, {
            synthetic: !0
        }), o) : (o = On(e, t, r, n), mn(o, `${t}`, void 0), Vt(o, {
            synthetic: !0
        }), o)
    }

    function On(e, t, r, n) {
        const i = {
            message: t
        };
        if (n && r) {
            const o = oi(e, r);
            o.length && (i.exception = {
                values: [{
                    value: t,
                    stacktrace: {
                        frames: o
                    }
                }]
            })
        }
        return i
    }
    const ur = 1024,
        Gs = "Breadcrumbs";
    class Xt {
        static __initStatic() {
            this.id = Gs
        }
        __init() {
            this.name = Xt.id
        }
        constructor(t) {
            Xt.prototype.__init.call(this), this.options = {
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
            this.options.console && Ue("console", ry), this.options.dom && Ue("dom", ty(this.options.dom)), this.options.xhr && Ue("xhr", ny), this.options.fetch && Ue("fetch", iy), this.options.history && Ue("history", oy)
        }
        addSentryBreadcrumb(t) {
            this.options.sentry && ie().addBreadcrumb({
                category: `sentry.${t.type==="transaction"?"transaction":"event"}`,
                event_id: t.event_id,
                level: t.level,
                message: tt(t)
            }, {
                event: t
            })
        }
    }
    Xt.__initStatic();

    function ty(e) {
        function t(r) {
            let n, i = typeof e == "object" ? e.serializeAttribute : void 0,
                o = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
            o && o > ur && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`\`dom.maxStringLength\` cannot exceed ${ur}, but a value of ${o} was configured. Sentry will use ${ur} instead.`), o = ur), typeof i == "string" && (i = [i]);
            try {
                const s = r.event;
                n = sy(s) ? gn(s.target, {
                    keyAttrs: i,
                    maxStringLength: o
                }) : gn(s, {
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
        return t
    }

    function ry(e) {
        for (let r = 0; r < e.args.length; r++)
            if (e.args[r] === "ref=Ref<") {
                e.args[r + 1] = "viewRef";
                break
            } const t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: X_(e.level),
            message: Zi(e.args, " ")
        };
        if (e.level === "assert")
            if (e.args[0] === !1) t.message = `Assertion failed: ${Zi(e.args.slice(1)," ")||"console.assert"}`, t.data.arguments = e.args.slice(1);
            else return;
        ie().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }

    function ny(e) {
        if (e.endTimestamp) {
            if (e.xhr.__sentry_own_request__) return;
            const {
                method: t,
                url: r,
                status_code: n,
                body: i
            } = e.xhr.__sentry_xhr__ || {};
            ie().addBreadcrumb({
                category: "xhr",
                data: {
                    method: t,
                    url: r,
                    status_code: n
                },
                type: "http"
            }, {
                xhr: e.xhr,
                input: i
            });
            return
        }
    }

    function iy(e) {
        e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && e.fetchData.method === "POST" || (e.error ? ie().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: "error",
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : ie().addBreadcrumb({
            category: "fetch",
            data: {
                ...e.fetchData,
                status_code: e.response && e.response.status
            },
            type: "http"
        }, {
            input: e.args,
            response: e.response
        })))
    }

    function oy(e) {
        let t = e.from,
            r = e.to;
        const n = nn(q.location.href);
        let i = nn(t);
        const o = nn(r);
        i.path || (i = n), n.protocol === o.protocol && n.host === o.host && (r = o.relative), n.protocol === i.protocol && n.host === i.host && (t = i.relative), ie().addBreadcrumb({
            category: "navigation",
            data: {
                from: t,
                to: r
            }
        })
    }

    function sy(e) {
        return e && !!e.target
    }
    class ay extends Ze {
        constructor(t) {
            const r = q.SENTRY_SDK_SOURCE || G_();
            t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${r}:@sentry/browser`,
                    version: po
                }],
                version: po
            }, super(t), t.sendClientReports && q.document && q.document.addEventListener("visibilitychange", () => {
                q.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(t, r) {
            return Zg(this._options.stackParser, t, r, this._options.attachStacktrace)
        }
        eventFromMessage(t, r = "info", n) {
            return ey(this._options.stackParser, t, r, n, this._options.attachStacktrace)
        }
        sendEvent(t, r) {
            const n = this.getIntegrationById(Gs);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, r)
        }
        _prepareEvent(t, r, n) {
            return t.platform = t.platform || "javascript", super._prepareEvent(t, r, n)
        }
        _flushOutcomes() {
            const t = this._clearOutcomes();
            if (t.length === 0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("Sending outcomes:", t);
            const r = Cs(this._dsn, this._options),
                n = og(t, this._options.tunnel && Xn(this._dsn));
            try {
                Object.prototype.toString.call(q && q.navigator) === "[object Navigator]" && typeof q.navigator.sendBeacon == "function" && !this._options.transportOptions ? q.navigator.sendBeacon.bind(q.navigator)(r, Ns(n)) : this._sendEnvelope(n)
            } catch (i) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(i)
            }
        }
    }
    let qt;

    function cy() {
        if (qt) return qt;
        if (vn(q.fetch)) return qt = q.fetch.bind(q);
        const e = q.document;
        let t = q.fetch;
        if (e && typeof e.createElement == "function") try {
            const r = e.createElement("iframe");
            r.hidden = !0, e.head.appendChild(r);
            const n = r.contentWindow;
            n && n.fetch && (t = n.fetch), e.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return qt = t.bind(q)
    }

    function uy() {
        qt = void 0
    }

    function fy(e, t = cy()) {
        function r(n) {
            const i = {
                body: n.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: e.headers,
                keepalive: n.body.length <= 65536,
                ...e.fetchOptions
            };
            try {
                return t(e.url, i).then(o => ({
                    statusCode: o.status,
                    headers: {
                        "x-sentry-rate-limits": o.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": o.headers.get("Retry-After")
                    }
                }))
            } catch (o) {
                return uy(), wr(o)
            }
        }
        return Bs(e, r)
    }
    const ly = 4;

    function py(e) {
        function t(r) {
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
                }, o.open("POST", e.url);
                for (const s in e.headers) Object.prototype.hasOwnProperty.call(e.headers, s) && o.setRequestHeader(s, e.headers[s]);
                o.send(r.body)
            })
        }
        return Bs(e, t)
    }
    const qr = "?",
        dy = 30,
        hy = 40,
        _y = 50;

    function ai(e, t, r, n) {
        const i = {
            filename: e,
            abs_path: e,
            function: t,
            in_app: !0
        };
        return r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i
    }
    const gy = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?(?:async )?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        yy = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        vy = e => {
            const t = gy.exec(e);
            if (t) {
                if (t[2] && t[2].indexOf("eval") === 0) {
                    const o = yy.exec(t[2]);
                    o && (t[2] = o[1], t[3] = o[2], t[4] = o[3])
                }
                const [n, i] = Hs(t[1] || qr, t[2]);
                return ai(i, n, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
            }
        },
        my = [dy, vy],
        by = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Ey = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Sy = e => {
            const t = by.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    const o = Ey.exec(t[3]);
                    o && (t[1] = t[1] || "eval", t[3] = o[1], t[4] = o[2], t[5] = "")
                }
                let n = t[3],
                    i = t[1] || qr;
                return [i, n] = Hs(i, n), ai(n, i, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        },
        wy = [_y, Sy],
        Oy = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ky = e => {
            const t = Oy.exec(e);
            return t ? ai(t[2], t[1] || qr, +t[3], t[4] ? +t[4] : void 0) : void 0
        },
        Ty = [hy, ky],
        Ay = [my, wy, Ty],
        Ry = Ss(...Ay),
        Hs = (e, t) => {
            const r = e.indexOf("safari-extension") !== -1,
                n = e.indexOf("safari-web-extension") !== -1;
            return r || n ? [e.indexOf("@") !== -1 ? e.split("@")[0] : qr, r ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
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
        constructor(t) {
            Ge.prototype.__init.call(this), Ge.prototype.__init2.call(this), this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            const t = this._options;
            for (const r in t) {
                const n = this._installFunc[r];
                n && t[r] && (Py(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    Ge.__initStatic();

    function xy() {
        Ue("error", e => {
            const [t, r, n] = zs();
            if (!t.getIntegration(Ge)) return;
            const {
                msg: i,
                url: o,
                line: s,
                column: a,
                error: u
            } = e;
            if (Fs() || u && u.__sentry_own_request__) return;
            const f = u === void 0 && ot(i) ? Ly(i, o, s, a) : Ys(si(r, u || i, void 0, n, !1), o, s, a);
            f.level = "error", Ws(t, u, f, "onerror")
        })
    }

    function Ny() {
        Ue("unhandledrejection", e => {
            const [t, r, n] = zs();
            if (!t.getIntegration(Ge)) return;
            let i = e;
            try {
                "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason)
            } catch {}
            if (Fs() || i && i.__sentry_own_request__) return !0;
            const o = ys(i) ? Iy(i) : si(r, i, void 0, n, !0);
            o.level = "error", Ws(t, i, o, "onunhandledrejection")
        })
    }

    function Iy(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }]
            }
        }
    }

    function Ly(e, t, r, n) {
        const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = gs(e) ? e.message : e,
            s = "Error";
        const a = o.match(i);
        return a && (s = a[1], o = a[2]), Ys({
            exception: {
                values: [{
                    type: s,
                    value: o
                }]
            }
        }, t, r, n)
    }

    function Ys(e, t, r, n) {
        const i = e.exception = e.exception || {},
            o = i.values = i.values || [],
            s = o[0] = o[0] || {},
            a = s.stacktrace = s.stacktrace || {},
            u = a.frames = a.frames || [],
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            _ = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = ot(t) && t.length > 0 ? t : d_();
        return u.length === 0 && u.push({
            colno: f,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: _
        }), e
    }

    function Py(e) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Global Handler attached: ${e}`)
    }

    function Ws(e, t, r, n) {
        Vt(r, {
            handled: !1,
            type: n
        }), e.captureEvent(r, {
            originalException: t
        })
    }

    function zs() {
        const e = ie(),
            t = e.getClient(),
            r = t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [e, r.stackParser, r.attachStacktrace]
    }
    const $y = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Qt {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = Qt.id
        }
        constructor(t) {
            Qt.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            }
        }
        setupOnce() {
            this._options.setTimeout && fe(q, "setTimeout", _o), this._options.setInterval && fe(q, "setInterval", _o), this._options.requestAnimationFrame && fe(q, "requestAnimationFrame", Dy), this._options.XMLHttpRequest && "XMLHttpRequest" in q && fe(XMLHttpRequest.prototype, "send", Cy);
            const t = this._options.eventTarget;
            t && (Array.isArray(t) ? t : $y).forEach(jy)
        }
    }
    Qt.__initStatic();

    function _o(e) {
        return function(...t) {
            const r = t[0];
            return t[0] = At(r, {
                mechanism: {
                    data: {
                        function: We(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), e.apply(this, t)
        }
    }

    function Dy(e) {
        return function(t) {
            return e.apply(this, [At(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: We(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function Cy(e) {
        return function(...t) {
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
                        a = ei(o);
                    return a && (s.mechanism.data.handler = We(a)), At(o, s)
                })
            }), e.apply(this, t)
        }
    }

    function jy(e) {
        const t = q,
            r = t[e] && t[e].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (fe(r, "addEventListener", function(n) {
            return function(i, o, s) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = At(o.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: We(o),
                                target: e
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
                            target: e
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
        constructor(t = {}) {
            mt.prototype.__init.call(this), this._key = t.key || Uy, this._limit = t.limit || My
        }
        setupOnce() {
            const t = ie().getClient();
            t && ri((r, n) => {
                const i = ie().getIntegration(mt);
                return i ? By(t.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    mt.__initStatic();

    function By(e, t, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !Ve(i.originalException, Error)) return n;
        const o = Ks(e, r, i.originalException, t);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function Ks(e, t, r, n, i = []) {
        if (!Ve(r[n], Error) || i.length + 1 >= t) return i;
        const o = qs(e, r[n]);
        return Ks(e, t, r[n], n, [o, ...i])
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
            ri(t => {
                if (ie().getIntegration(bt)) {
                    if (!q.navigator && !q.location && !q.document) return t;
                    const r = t.request && t.request.url || q.location && q.location.href,
                        {
                            referrer: n
                        } = q.document || {},
                        {
                            userAgent: i
                        } = q.navigator || {},
                        o = {
                            ...t.request && t.request.headers,
                            ...n && {
                                Referer: n
                            },
                            ...i && {
                                "User-Agent": i
                            }
                        },
                        s = {
                            ...t.request,
                            ...r && {
                                url: r
                            },
                            headers: o
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
        setupOnce(t, r) {
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
            n.id = this.name, t(n)
        }
    }
    Et.__initStatic();

    function Fy(e, t) {
        return t ? !!(qy(e, t) || Gy(e, t)) : !1
    }

    function qy(e, t) {
        const r = e.message,
            n = t.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !Js(e, t) || !Vs(e, t))
    }

    function Gy(e, t) {
        const r = go(t),
            n = go(e);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !Js(e, t) || !Vs(e, t))
    }

    function Vs(e, t) {
        let r = yo(e),
            n = yo(t);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let i = 0; i < n.length; i++) {
            const o = n[i],
                s = r[i];
            if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function) return !1
        }
        return !0
    }

    function Js(e, t) {
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

    function go(e) {
        return e.exception && e.exception.values && e.exception.values[0]
    }

    function yo(e) {
        const t = e.exception;
        if (t) try {
            return t.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const Hy = [new vt, new Jt, new Qt, new Xt, new Ge, new mt, new Et, new bt];

    function Yy(e = {}) {
        e.defaultIntegrations === void 0 && (e.defaultIntegrations = Hy), e.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (e.release = __SENTRY_RELEASE__), q.SENTRY_RELEASE && q.SENTRY_RELEASE.id && (e.release = q.SENTRY_RELEASE.id)), e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0), e.sendClientReports === void 0 && (e.sendClientReports = !0);
        const t = {
            ...e,
            stackParser: O_(e.stackParser || Ry),
            integrations: Rg(e),
            transport: e.transport || (ws() ? fy : py)
        };
        jg(ay, t), e.autoSessionTracking && Wy()
    }

    function vo(e) {
        e.startSession({
            ignoreDuration: !0
        }), e.captureSession()
    }

    function Wy() {
        if (typeof q.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const e = ie();
        e.captureSession && (vo(e), Ue("history", ({
            from: t,
            to: r
        }) => {
            t === void 0 || t === r || vo(ie())
        }))
    }
    const zy = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        Ky = {
            RETRY: zy
        },
        mo = {
            en: Ky
        };
    let Vy = class {
        constructor(t) {
            Se(this, "manifest");
            Se(this, "registered", {});
            Se(this, "register", t => {
                this.registered.connect = t.connect, this.registered.mount = t.mount, this.registered.info = t.info
            });
            Se(this, "load", async t => {
                document.querySelectorAll("[data-tv-prefetch]").forEach(a => a.remove());
                const n = this.getBranchName(t),
                    i = window.tv.manifest.branches[n];
                if (!i) throw new Error(`[loader] Unknown branch "${n}" can not be found in manifest`);
                const o = i.bundles[t.app];
                if (!o) throw new Error(`[loader] Unknown app "${t.app}" can not be loaded from branch "${n}"`);
                try {
                    n === "** hmr **" ? await this.loadHMRBundle(o) : n === "** dist **" ? await this.loadDistBundle(o) : await this.loadS3Bundle(o)
                } catch {
                    console.error(`[loader] Unable to load "${t.app}" from branch "${n}"`), this.showLoaderError();
                    return
                }
                if (t_("[loader] load success", {
                        app: t.app,
                        appVersion: o.version ?? i.version,
                        loaderVersion: window.tv.manifest.loader.version,
                        branch: n
                    }), !t.autoMount) return;
                const s = t;
                s.version = o.version ?? i.version, this.mount(s)
            });
            Se(this, "connect", t => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(t)
            });
            Se(this, "mount", t => {
                var s, a;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const u = this.registered.info(t);
                    Ds({
                        branch: u.branch,
                        "app.tag": u.tag,
                        "app.type": u.type,
                        "app.version": u.version,
                        "app.wrapper": u.wrapper
                    }), jo.pageView(u.tag)
                }
                mr.setup(t.app, ((s = t.room) == null ? void 0 : s.code) ?? ((a = t.client) == null ? void 0 : a.code));
                const n = document.querySelectorAll("[data-tv-style]"),
                    o = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(u => {
                        const f = document.createElement("link");
                        return f.rel = "stylesheet", f.href = u.href, f.setAttribute("data-tv-style", ""), f
                    });
                document.head.append(...o), n.forEach(u => u.remove()), this.registered.unmount = this.registered.mount(t) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            Se(this, "debugLoad", async (t, r) => {
                throw new Error("[Loader] Debug controllers are not available in production builds")
            });
            this.manifest = t
        }
        getBranchName(t) {
            var o, s, a, u, f;
            const r = (s = (o = t.match) == null ? void 0 : o.params) == null ? void 0 : s.branch,
                n = mr.get("preference:branch"),
                i = this.manifest.branches;
            if (r) return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
            if (t.branch) return t.branch;
            if ((a = i["** hmr **"]) != null && a.bundles[t.app]) return "** hmr **";
            if (n && ((u = i[n]) != null && u.bundles[t.app])) return n;
            if ((f = i["** dist **"]) != null && f.bundles[t.app]) return "** dist **";
            if (i.main) return "main";
            throw new Error("[loader] Could not resolve a branch name and main is not available")
        }
        getS3Url(t, r) {
            return `${r}/${t}`
        }
        async loadHMRBundle(t) {
            const r = t.file;
            await r()
        }
        loadScript(t) {
            return new Promise((r, n) => {
                const i = document.createElement("script");
                i.src = t, i.async = !0, i.type = "module", i.crossOrigin = "", i.onerror = n, i.onload = r, i.setAttribute("data-tv-script", ""), document.head.append(i)
            })
        }
        async fetchBundle(t, r, n) {
            r.forEach(o => {
                const s = n ? this.getS3Url(o, n) : o,
                    a = document.createElement("link");
                n ? a.rel = "prefetch" : (a.rel = "preload", a.as = "style"), a.href = s, a.setAttribute("data-tv-prefetch", ""), document.head.append(a)
            });
            const i = n ? this.getS3Url(t, n) : t;
            await this.loadScript(i)
        }
        async loadDistBundle(t) {
            return this.fetchBundle(`/@fs/${t.file}`, t.css)
        }
        async loadS3Bundle(t) {
            return this.fetchBundle(t.file, t.css, t.base)
        }
        showLoaderError() {
            const t = document.getElementsByClassName("loader-status")[0];
            if (!t) return;
            const r = document.createElement("p"),
                n = navigator.languages[0],
                i = mo[n] ?? mo.en;
            t.classList.add("error"), r.textContent = i.RETRY, t.append(r), t.addEventListener("click", () => window.location.reload())
        }
    };
    const bo = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        Jy = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        Xy = e => {
            Yy({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: e.environment,
                release: `tv-mono@${e.loader.version}`,
                ignoreErrors: Jy,
                beforeSend: async (t, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === bo.EcastEntityNotFound) return vg("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === bo.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(t, r);
                        n && (t.contexts = t.contexts || {}, t.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return t
                }
            }), Ds({
                "app.tag": "@loader",
                "app.version": e.loader.version,
                "app.type": e.loader.type,
                branch: e.loader.branch
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

    function Xs(e) {
        return e === void 0 && (e = "/"), ui() ? location.pathname + location.search + location.hash : e
    }

    function ee(e) {
        return e.replace(/\/+$/, "").replace(/^\/+/, "")
    }

    function kr(e) {
        return typeof e == "string"
    }

    function sv(e) {
        return typeof e == "function"
    }

    function Tr(e) {
        return e && e.indexOf("#") >= 0 && e.split("#").pop() || ""
    }

    function av(e, t) {
        return t.length === 0 || !e ? null : e.slice(1, e.length).reduce(function(r, n, i) {
            return r === null && (r = {}), r[t[i]] = decodeURIComponent(n), r
        }, null)
    }

    function Ar(e) {
        var t = ee(e).split(/\?(.*)?$/);
        return [ee(t[0]), t.slice(1).join("")]
    }

    function ci(e) {
        for (var t = {}, r = e.split("&"), n = 0; n < r.length; n++) {
            var i = r[n].split("=");
            if (i[0] !== "") {
                var o = decodeURIComponent(i[0]);
                t[o] ? (Array.isArray(t[o]) || (t[o] = [t[o]]), t[o].push(decodeURIComponent(i[1] || ""))) : t[o] = decodeURIComponent(i[1] || "")
            }
        }
        return t
    }

    function Qs(e, t) {
        var r = Ar(ee(e.currentLocationPath)),
            n = r[0],
            i = r[1],
            o = i === "" ? null : ci(i),
            s = [],
            a;
        if (kr(t.path)) {
            if (a = iv + ee(t.path).replace(Qy, function(y, v, E) {
                    return s.push(E), Zy
                }).replace(ev, tv).replace(rv, nv) + "$", ee(t.path) === "" && ee(n) === "") return {
                url: n,
                queryString: i,
                hashString: Tr(e.to),
                route: t,
                data: null,
                params: o
            }
        } else a = t.path;
        var u = new RegExp(a, ov),
            f = n.match(u);
        if (f) {
            var _ = kr(t.path) ? av(f, s) : f.groups ? f.groups : f.slice(1);
            return {
                url: ee(n.replace(new RegExp("^" + e.instance.root), "")),
                queryString: i,
                hashString: Tr(e.to),
                route: t,
                data: _,
                params: o
            }
        }
        return !1
    }

    function Zs() {
        return !!(typeof window < "u" && window.history && window.history.pushState)
    }

    function ct(e, t) {
        return typeof e[t] > "u" || e[t] === !0
    }

    function cv(e) {
        if (!e) return {};
        var t = e.split(","),
            r = {},
            n;
        return t.forEach(function(i) {
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

    function uv(e, t) {
        return e === void 0 && (e = []), t === void 0 && (t = {}), e.filter(function(r) {
            return r
        }).forEach(function(r) {
            ["before", "after", "already", "leave"].forEach(function(n) {
                r[n] && (t[n] || (t[n] = []), t[n].push(r[n]))
            })
        }), t
    }

    function xe(e, t, r) {
        var n = t || {},
            i = 0;
        (function o() {
            if (!e[i]) {
                r && r(n);
                return
            }
            Array.isArray(e[i]) ? (e.splice.apply(e, [i, 1].concat(e[i][0](n) ? e[i][1] : e[i][2])), o()) : e[i](n, function(s) {
                typeof s > "u" || s === !0 ? (i += 1, o()) : r && r(n)
            })
        })()
    }
    xe.if = function(e, t, r) {
        return Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]), [e, t, r]
    };

    function Eo(e, t) {
        typeof e.currentLocationPath > "u" && (e.currentLocationPath = e.to = Xs(e.instance.root)), e.currentLocationPath = e.instance._checkForAHash(e.currentLocationPath), t()
    }

    function an(e, t) {
        for (var r = 0; r < e.instance.routes.length; r++) {
            var n = e.instance.routes[r],
                i = Qs(e, n);
            if (i && (e.matches || (e.matches = []), e.matches.push(i), e.resolveOptions.strategy === "ONE")) {
                t();
                return
            }
        }
        t()
    }

    function fv(e, t) {
        e.navigateOptions && (typeof e.navigateOptions.shouldResolve < "u" && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), typeof e.navigateOptions.silent < "u" && console.warn('"silent" is deprecated. Please check the documentation.')), t()
    }

    function lv(e, t) {
        e.navigateOptions.force === !0 ? (e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]), t(!1)) : t()
    }
    var So = ui(),
        pv = Zs();

    function dv(e, t) {
        if (ct(e.navigateOptions, "updateBrowserURL")) {
            var r = ("/" + e.to).replace(/\/\//g, "/"),
                n = So && e.resolveOptions && e.resolveOptions.hash === !0;
            pv ? (history[e.navigateOptions.historyAPIMethod || "pushState"](e.navigateOptions.stateObj || {}, e.navigateOptions.title || "", n ? "#" + r : r), location && location.hash && (e.instance.__freezeListening = !0, setTimeout(function() {
                if (!n) {
                    var i = location.hash;
                    location.hash = "", location.hash = i
                }
                e.instance.__freezeListening = !1
            }, 1))) : So && (window.location.href = e.to)
        }
        t()
    }

    function ea(e, t) {
        var r = e.instance;
        if (!r.lastResolved()) {
            t();
            return
        }
        xe(r.lastResolved().map(function(n) {
            return function(i, o) {
                if (!n.route.hooks || !n.route.hooks.leave) {
                    o();
                    return
                }
                var s = !1,
                    a = e.instance.matchLocation(n.route.path, e.currentLocationPath, !1);
                if (n.route.path !== "*") s = !a;
                else {
                    var u = e.matches ? e.matches.find(function(f) {
                        return n.route.path === f.route.path
                    }) : !1;
                    s = !u
                }
                if (ct(e.navigateOptions, "callHooks") && s) {
                    xe(n.route.hooks.leave.map(function(f) {
                        return function(_, y) {
                            return f(function(v) {
                                v === !1 ? e.instance.__markAsClean(e) : y()
                            }, e.matches && e.matches.length > 0 ? e.matches.length === 1 ? e.matches[0] : e.matches : void 0)
                        }
                    }).concat([function() {
                        return o()
                    }]));
                    return
                } else o()
            }
        }), {}, function() {
            return t()
        })
    }

    function hv(e, t) {
        e.match.route.hooks && e.match.route.hooks.before && ct(e.navigateOptions, "callHooks") ? xe(e.match.route.hooks.before.map(function(r) {
            return function(i, o) {
                return r(function(s) {
                    s === !1 ? e.instance.__markAsClean(e) : o()
                }, e.match)
            }
        }).concat([function() {
            return t()
        }])) : t()
    }

    function _v(e, t) {
        ct(e.navigateOptions, "callHandler") && e.match.route.handler(e.match), e.instance.updatePageLinks(), t()
    }

    function gv(e, t) {
        e.match.route.hooks && e.match.route.hooks.after && ct(e.navigateOptions, "callHooks") && e.match.route.hooks.after.forEach(function(r) {
            return r(e.match)
        }), t()
    }

    function yv(e, t) {
        var r = e.instance.lastResolved();
        if (r && r[0] && r[0].route === e.match.route && r[0].url === e.match.url && r[0].queryString === e.match.queryString) {
            r.forEach(function(n) {
                n.route.hooks && n.route.hooks.already && ct(e.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(i) {
                    return i(e.match)
                })
            }), t(!1);
            return
        }
        t()
    }

    function vv(e, t) {
        var r = e.instance._notFoundRoute;
        if (r) {
            e.notFoundHandled = !0;
            var n = Ar(e.currentLocationPath),
                i = n[0],
                o = n[1],
                s = Tr(e.to);
            r.path = ee(i);
            var a = {
                url: r.path,
                queryString: o,
                hashString: s,
                data: null,
                route: r,
                params: o !== "" ? ci(o) : null
            };
            e.matches = [a], e.match = a
        }
        t()
    }

    function mv(e, t) {
        (!e.resolveOptions || e.resolveOptions.noMatchWarning === !1 || typeof e.resolveOptions.noMatchWarning > "u") && console.warn('Navigo: "' + e.currentLocationPath + `" didn't match any of the registered routes.`), t()
    }

    function bv(e, t) {
        e.instance._setCurrent(null), t()
    }

    function ta(e, t) {
        ct(e.navigateOptions, "updateState") && e.instance._setCurrent(e.matches), t()
    }
    var ra = [yv, hv, _v, gv],
        wo = [ea, vv, xe.if(function(e) {
            var t = e.notFoundHandled;
            return t
        }, ra.concat([ta]), [mv, bv])];

    function kn() {
        return kn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, kn.apply(this, arguments)
    }

    function Oo(e, t) {
        var r = 0;

        function n() {
            if (r === e.matches.length) {
                ta(e, t);
                return
            }
            xe(ra, kn({}, e, {
                match: e.matches[r]
            }), function() {
                r += 1, n()
            })
        }
        ea(e, n)
    }

    function cn(e) {
        e.instance.__markAsClean(e)
    }

    function Tn() {
        return Tn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, Tn.apply(this, arguments)
    }
    var ko = "[data-navigo]";

    function Ev(e, t) {
        var r = t || {
                strategy: "ONE",
                hash: !1,
                noMatchWarning: !1,
                linksSelector: ko
            },
            n = this,
            i = "/",
            o = null,
            s = [],
            a = !1,
            u, f = Zs(),
            _ = ui();
        e ? i = ee(e) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');

        function y(b) {
            return b.indexOf("#") >= 0 && (r.hash === !0 ? b = b.split("#")[1] || "/" : b = b.split("#")[0]), b
        }

        function v(b) {
            return ee(i + "/" + ee(b))
        }

        function E(b, A, x, B) {
            return b = kr(b) ? v(b) : b, {
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
                resolveOptions: Tn({}, r, A)
            };
            return xe([Eo, an, xe.if(function(B) {
                var F = B.matches;
                return F && F.length > 0
            }, Oo, wo)], x, cn), x.matches ? x.matches : !1
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
            xe([fv, lv, an, xe.if(function(B) {
                var F = B.matches;
                return F && F.length > 0
            }, Oo, wo), dv, cn], x, cn)
        }

        function J(b, A, x) {
            var B = pe(b, A);
            return B !== null ? (L(B.replace(new RegExp("^/?" + i), ""), x), !0) : !1
        }

        function G(b) {
            return this.routes = s = s.filter(function(A) {
                return kr(b) ? ee(A.path) !== ee(b) : sv(b) ? b !== A.handler : String(A.path) !== String(b)
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
            return _ ? [].slice.call(document.querySelectorAll(r.linksSelector || ko)) : []
        }

        function te(b) {
            return "/" + i + "/" + ee(b)
        }

        function H(b) {
            return u = b, this
        }

        function jt() {
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
            var A = Ar(ee(b)),
                x = A[0],
                B = A[1],
                F = B === "" ? null : ci(B),
                Ee = Tr(b),
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
            return be(ee(Xs(i)).replace(new RegExp("^" + i), ""))
        }

        function T(b) {
            var A = {
                instance: n,
                currentLocationPath: b,
                to: b,
                navigateOptions: {},
                resolveOptions: r
            };
            return an(A, function() {}), A.matches ? A.matches : !1
        }

        function D(b, A, x) {
            typeof A < "u" && (typeof x > "u" || x) && (A = v(A));
            var B = {
                instance: n,
                to: A,
                currentLocationPath: A
            };
            Eo(B, function() {}), typeof b == "string" && (b = typeof x > "u" || x ? v(b) : b);
            var F = Qs(B, {
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
            return Ar(y(b))
        }, this.lastResolved = jt, this.generate = pe, this.getLinkPath = Je, this.match = T, this.matchLocation = D, this.getCurrentLocation = m, this.addBeforeHook = W.bind(this, "before"), this.addAfterHook = W.bind(this, "after"), this.addAlreadyHook = W.bind(this, "already"), this.addLeaveHook = W.bind(this, "leave"), this.getRoute = Y, this._pathToMatchObject = be, this._clean = ee, this._checkForAHash = y, this._setCurrent = function(b) {
            return o = n.current = b
        }, oe.call(this), ae.call(this)
    }

    function Sv(e) {
        let t = "<div>";
        return e ? (t += `   <h1>Debug JSON Index : ${e}</h1>`, Object.keys(window.tv.debugMap[e]).forEach(r => {
            t += `    <a href="/${window.tv.debugMap[e][r]}" target="_blank">${r}</a>`
        })) : (t += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            t += "    <details>", t += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                t += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), t += "    </details>"
        })), t += "</div>", t
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

    function un(e) {
        if (!window.tv.debugMap) return;
        const t = document.createElement("style");
        t.innerHTML = wv(), document.getElementsByTagName("html")[0].append(t);
        const n = document.getElementById("app");
        n.innerHTML = Sv(e)
    }

    function Ov() {
        const e = window.tv.manifest;
        let t = "<div>";
        t += `   <h1>Current Manifest : ${e.environment}</h1>`;
        const r = new Date(e.loader.lastUpdated);
        return t += "   <h2>Loader</h2>", t += `   <p>last deployed: <strong>${r.toLocaleDateString()} ${r.toLocaleTimeString()}</strong></p>`, t += `   <p>branch: <strong>${e.loader.branch}</strong></p>`, t += `   <p>version: <strong>${e.loader.version}</strong></p>`, t += `   <p>type: <strong>${e.loader.type}</strong></p>`, t += "   <h2>Branches</h2>", Object.keys(e.branches).sort().forEach(n => {
            const i = e.branches[n],
                o = new Date(i.lastUpdated);
            t += "    <details>", t += "        <summary>", t += `            <span class="name">${n}</span>`, t += `            <span class="version">${i.version}</span>`, t += `            <span class="date">${o.toLocaleDateString()} ${o.toLocaleTimeString()}</span>`, t += `            <span class="type">${i.type}</span>`, t += `            <span class="type">${Object.keys(i.bundles).length} Apps</span>`, t += "        </summary>", Object.keys(i.bundles).forEach(s => {
                const a = i.bundles[s];
                a.version ? t += `        <p><span class="name">${s}</span> <span class="version">${a.version}</span></p>` : t += `        <p><span class="name">${s}</span> <span class="version">${i.version}</span></p>`
            }), t += "    </details>"
        }), t += "</div>", t
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
        const e = document.createElement("style");
        e.innerHTML = kv(), document.getElementsByTagName("html")[0].append(e);
        const r = document.getElementById("app");
        r.innerHTML = Ov()
    }
    const Rt = new Ev("/");

    function lt(e, t) {
        const r = t != null && t.queryString ? `?${t.queryString}` : "";
        Rt.navigate(`${e}${r}`, {
            historyAPIMethod: "replaceState"
        })
    }
    Rt.hooks({
        before(e) {
            var r;
            const t = (r = Rt.lastResolved()) == null ? void 0 : r[0];
            (!t || t.route.name === "__NOT_FOUND__") && e()
        }
    });
    Rt.on({
        "/": e => {
            window.tv.load({
                app: "@connect",
                match: e,
                autoMount: !0
            })
        },
        "/past-games": e => {
            window.tv.load({
                app: "@connect",
                match: e,
                autoMount: !0
            })
        },
        "/past-games/:game": e => {
            window.tv.load({
                app: "@connect",
                match: e,
                autoMount: !0
            })
        },
        "/moderator": e => {
            window.tv.load({
                app: "@moderator",
                match: e,
                autoMount: !0
            })
        },
        "/moderate": e => {
            lt("/moderator", e)
        },
        "/moderation": e => {
            lt("/moderator", e)
        },
        "/moderador": e => {
            lt("/moderator", e)
        },
        "/moderateur": e => {
            lt("/moderator", e)
        },
        "/moderatore": e => {
            lt("/moderator", e)
        },
        "/([A-Za-z]{4})": e => {
            const t = e;
            t.params || (t.params = {}), t.params.code || (t.params.code = t.url), window.tv.load({
                app: "@connect",
                match: t,
                autoMount: !0
            })
        },
        "/manifest": e => {
            Tv()
        },
        "/debug": e => {
            un()
        },
        "/debug/:app": e => {
            un(e.data.app)
        },
        "/debug/local/:app": e => {
            un(e.data.app)
        },
        "/debug/local/:app/:file/:marker": e => {
            window.tv.debugLoad("local", e)
        },
        "/debug/local/:app/:file": e => {
            window.tv.debugLoad("local", e)
        },
        "/debug/cloud/:app/:file/:marker": e => {
            window.tv.debugLoad("cloud", e)
        },
        "/debug/cloud/:app/:file": e => {
            window.tv.debugLoad("cloud", e)
        }
    });
    Rt.notFound(e => {
        lt("/", e)
    });
    const Av = () => {
            Rt.resolve()
        },
        Rv = "production",
        xv = 1,
        Nv = {
            branch: "main",
            sha: "b4a0bdab1b21b9b2e64ac4f848ef9351908b0c2b",
            lastUpdated: 1680806440821,
            version: "5.122.22",
            type: "production"
        },
        Iv = {
            main: {
                sha: "b4a0bdab1b21b9b2e64ac4f848ef9351908b0c2b",
                lastUpdated: 1680806440821,
                version: "5.122.22",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.121.22"
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
                        base: "main/@moderator",
                        version: "5.122.22"
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
                    }
                }
            }
        },
        Lv = {
            environment: Rv,
            version: xv,
            loader: Nv,
            branches: Iv
        },
        fi = Lv;
    let Pv = Vy;
    const Ft = new Pv(fi);
    window.tv = {
        debugLoad: Ft.debugLoad,
        load: Ft.load,
        register: Ft.register,
        mount: Ft.mount,
        connect: Ft.connect,
        manifest: fi
    };
    Xy(fi);
    jo.setup();
    mr.setup();
    Av()
});
export default $v();
//# sourceMappingURL=131c6b8c.js.map