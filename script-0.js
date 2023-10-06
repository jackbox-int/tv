var ra = Object.defineProperty;
var na = (t, e, r) => e in t ? ra(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var ia = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var fe = (t, e, r) => (na(t, typeof e != "symbol" ? e + "" : e, r), r);
var $m = ia((jm, Ys) => {
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
    var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function oa(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var Ce = {
            DEBUG: !1,
            LIB_VERSION: "2.45.0"
        },
        oe;
    if (typeof window > "u") {
        var Qn = {
            hostname: ""
        };
        oe = {
            navigator: {
                userAgent: ""
            },
            document: {
                location: Qn,
                referrer: ""
            },
            screen: {
                width: 0,
                height: 0
            },
            location: Qn
        }
    } else oe = window;
    var Sr = Array.prototype,
        sa = Function.prototype,
        lo = Object.prototype,
        Le = Sr.slice,
        Ht = lo.toString,
        wr = lo.hasOwnProperty,
        X = oe.console,
        Re = oe.navigator,
        q = oe.document,
        Pt = oe.opera,
        ar = oe.screen,
        Ee = Re.userAgent,
        qr = sa.bind,
        Zn = Sr.forEach,
        ei = Sr.indexOf,
        ti = Sr.map,
        aa = Array.isArray,
        tn = {},
        c = {
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        M = {
            log: function() {
                if (Ce.DEBUG && !c.isUndefined(X) && X) try {
                    X.log.apply(X, arguments)
                } catch {
                    c.each(arguments, function(e) {
                        X.log(e)
                    })
                }
            },
            warn: function() {
                if (Ce.DEBUG && !c.isUndefined(X) && X) {
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
                if (Ce.DEBUG && !c.isUndefined(X) && X) {
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
        Gr = function(t, e) {
            return function() {
                return arguments[0] = "[" + e + "] " + arguments[0], t.apply(M, arguments)
            }
        },
        gn = function(t) {
            return {
                log: Gr(M.log, t),
                error: Gr(M.error, t),
                critical: Gr(M.critical, t)
            }
        };
    c.bind = function(t, e) {
        var r, n;
        if (qr && t.bind === qr) return qr.apply(t, Le.call(arguments, 1));
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
            if (Zn && t.forEach === Zn) t.forEach(e, r);
            else if (t.length === +t.length) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (n in t && e.call(r, t[n], n, t) === tn) return
            } else
                for (var o in t)
                    if (wr.call(t, o) && e.call(r, t[o], o, t) === tn) return
        }
    };
    c.extend = function(t) {
        return c.each(Le.call(arguments, 1), function(e) {
            for (var r in e) e[r] !== void 0 && (t[r] = e[r])
        }), t
    };
    c.isArray = aa || function(t) {
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
        if (ti && t.map === ti) return t.map(e, r);
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
        return t === null ? r : ei && t.indexOf === ei ? t.indexOf(e) != -1 : (c.each(t, function(n) {
            if (r || (r = n === e)) return tn
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
                        y = 0,
                        m = s,
                        b = [],
                        S = o[i];
                    switch (S && typeof S == "object" && typeof S.toJSON == "function" && (S = S.toJSON(i)), typeof S) {
                        case "string":
                            return r(S);
                        case "number":
                            return isFinite(S) ? String(S) : "null";
                        case "boolean":
                        case "null":
                            return String(S);
                        case "object":
                            if (!S) return "null";
                            if (s += a, b = [], Ht.apply(S) === "[object Array]") {
                                for (y = S.length, u = 0; u < y; u += 1) b[u] = n(u, S) || "null";
                                return h = b.length === 0 ? "[]" : s ? `[
` + s + b.join(`,
` + s) + `
` + m + "]" : "[" + b.join(",") + "]", s = m, h
                            }
                            for (f in S) wr.call(S, f) && (h = n(f, S), h && b.push(r(f) + (s ? ": " : ":") + h));
                            return h = b.length === 0 ? "{}" : s ? "{" + b.join(",") + m + "}" : "{" + b.join(",") + "}", s = m, h
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
                var S = new SyntaxError(b);
                throw S.at = t, S.text = n, S
            },
            o = function(b) {
                return b && b !== e && i("Expected '" + b + "' instead of '" + e + "'"), e = n.charAt(t), t += 1, e
            },
            s = function() {
                var b, S = "";
                for (e === "-" && (S = "-", o("-")); e >= "0" && e <= "9";) S += e, o();
                if (e === ".")
                    for (S += "."; o() && e >= "0" && e <= "9";) S += e;
                if (e === "e" || e === "E")
                    for (S += e, o(), (e === "-" || e === "+") && (S += e, o()); e >= "0" && e <= "9";) S += e, o();
                if (b = +S, !isFinite(b)) i("Bad number");
                else return b
            },
            a = function() {
                var b, S, I = "",
                    P;
                if (e === '"')
                    for (; o();) {
                        if (e === '"') return o(), I;
                        if (e === "\\")
                            if (o(), e === "u") {
                                for (P = 0, S = 0; S < 4 && (b = parseInt(o(), 16), !!isFinite(b)); S += 1) P = P * 16 + b;
                                I += String.fromCharCode(P)
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
            h, y = function() {
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
            m = function() {
                var b, S = {};
                if (e === "{") {
                    if (o("{"), u(), e === "}") return o("}"), S;
                    for (; e;) {
                        if (b = a(), u(), o(":"), Object.hasOwnProperty.call(S, b) && i('Duplicate key "' + b + '"'), S[b] = h(), u(), e === "}") return o("}"), S;
                        o(","), u()
                    }
                }
                i("Bad object")
            };
        return h = function() {
                switch (u(), e) {
                    case "{":
                        return m();
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
            function(b) {
                var S;
                return n = b, t = 0, e = " ", S = h(), u(), e && i("Syntax error"), S
            }
    }();
    c.base64Encode = function(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r, n, i, o, s, a, u, f, h = 0,
            y = 0,
            m = "",
            b = [];
        if (!t) return t;
        t = c.utf8Encode(t);
        do r = t.charCodeAt(h++), n = t.charCodeAt(h++), i = t.charCodeAt(h++), f = r << 16 | n << 8 | i, o = f >> 18 & 63, s = f >> 12 & 63, a = f >> 6 & 63, u = f & 63, b[y++] = e.charAt(o) + e.charAt(s) + e.charAt(a) + e.charAt(u); while (h < t.length);
        switch (m = b.join(""), t.length % 3) {
            case 1:
                m = m.slice(0, -2) + "==";
                break;
            case 2:
                m = m.slice(0, -1) + "=";
                break
        }
        return m
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
                var n = Ee,
                    i, o, s = [],
                    a = 0;

                function u(f, h) {
                    var y, m = 0;
                    for (y = 0; y < h.length; y++) m |= s[y] << y * 8;
                    return f ^ m
                }
                for (i = 0; i < n.length; i++) o = n.charCodeAt(i), s.unshift(o & 255), s.length >= 4 && (a = u(a, s), s = []);
                return s.length > 0 && (a = u(a, s)), a.toString(16)
            };
        return function() {
            var n = (ar.height * ar.width).toString(16);
            return t() + "-" + e() + "-" + r() + "-" + n + "-" + t()
        }
    }();
    var ri = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
    c.isBlockedUA = function(t) {
        var e;
        for (t = t.toLowerCase(), e = 0; e < ri.length; e++)
            if (t.indexOf(ri[e]) !== -1) return !0;
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
            M.error("Skipping decoding for malformed query param: " + o)
        }
        return o.replace(/\+/g, " ")
    };
    c.cookie = {
        get: function(t) {
            for (var e = t + "=", r = q.cookie.split(";"), n = 0; n < r.length; n++) {
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
                var h = ni(q.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure"), q.cookie = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f
        },
        set: function(t, e, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var h = ni(q.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 24 * 60 * 60 * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure");
            var m = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f;
            return q.cookie = m, m
        },
        remove: function(t, e, r) {
            c.cookie.set(t, "", -1, e, !1, !1, r)
        }
    };
    var Yr = null,
        cr = function(t, e) {
            if (Yr !== null && !e) return Yr;
            var r = !0;
            try {
                t = t || window.localStorage;
                var n = "__mplss_" + yn(8),
                    i = "xyz";
                t.setItem(n, i), t.getItem(n) !== i && (r = !1), t.removeItem(n)
            } catch {
                r = !1
            }
            return Yr = r, r
        };
    c.localStorage = {
        is_supported: function(t) {
            var e = cr(null, t);
            return e || M.error("localStorage unsupported; falling back to cookie store"), e
        },
        error: function(t) {
            M.error("localStorage error: " + t)
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
                M.error("No valid element provided to register_event");
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
    var ca = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
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
            if (!q.getElementsByTagName) return [];
            var o = i.split(" "),
                s, a, u, f, h, y, m, b, S, I, P = [q];
            for (y = 0; y < o.length; y++) {
                if (s = o[y].replace(/^\s+/, "").replace(/\s+$/, ""), s.indexOf("#") > -1) {
                    a = s.split("#"), u = a[0];
                    var z = a[1],
                        U = q.getElementById(z);
                    if (!U || u && U.nodeName.toLowerCase() != u) return [];
                    P = [U];
                    continue
                }
                if (s.indexOf(".") > -1) {
                    a = s.split("."), u = a[0];
                    var ae = a[1];
                    for (u || (u = "*"), f = [], h = 0, m = 0; m < P.length; m++)
                        for (u == "*" ? S = t(P[m]) : S = P[m].getElementsByTagName(u), b = 0; b < S.length; b++) f[h++] = S[b];
                    for (P = [], I = 0, m = 0; m < f.length; m++) f[m].className && c.isString(f[m].className) && r(f[m], ae) && (P[I++] = f[m]);
                    continue
                }
                var ve = s.match(ca);
                if (ve) {
                    u = ve[1];
                    var ce = ve[2],
                        le = ve[3],
                        he = ve[4];
                    for (u || (u = "*"), f = [], h = 0, m = 0; m < P.length; m++)
                        for (u == "*" ? S = t(P[m]) : S = P[m].getElementsByTagName(u), b = 0; b < S.length; b++) f[h++] = S[b];
                    P = [], I = 0;
                    var Z;
                    switch (le) {
                        case "=":
                            Z = function(F) {
                                return F.getAttribute(ce) == he
                            };
                            break;
                        case "~":
                            Z = function(F) {
                                return F.getAttribute(ce).match(new RegExp("\\b" + he + "\\b"))
                            };
                            break;
                        case "|":
                            Z = function(F) {
                                return F.getAttribute(ce).match(new RegExp("^" + he + "-?"))
                            };
                            break;
                        case "^":
                            Z = function(F) {
                                return F.getAttribute(ce).indexOf(he) === 0
                            };
                            break;
                        case "$":
                            Z = function(F) {
                                return F.getAttribute(ce).lastIndexOf(he) == F.getAttribute(ce).length - he.length
                            };
                            break;
                        case "*":
                            Z = function(F) {
                                return F.getAttribute(ce).indexOf(he) > -1
                            };
                            break;
                        default:
                            Z = function(F) {
                                return F.getAttribute(ce)
                            }
                    }
                    for (P = [], I = 0, m = 0; m < f.length; m++) Z(f[m]) && (P[I++] = f[m]);
                    continue
                }
                for (u = s, f = [], h = 0, m = 0; m < P.length; m++)
                    for (S = P[m].getElementsByTagName(u), b = 0; b < S.length; b++) f[h++] = S[b];
                P = f
            }
            return P
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
                e = c.getQueryParam(q.URL, n), e.length && (r[n] = e)
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
            var t = Ee;
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
                $browser: c.info.browser(Ee, Re.vendor, Pt),
                $referrer: q.referrer,
                $referring_domain: c.info.referringDomain(q.referrer),
                $device: c.info.device(Ee)
            }), {
                $current_url: oe.location.href,
                $browser_version: c.info.browserVersion(Ee, Re.vendor, Pt),
                $screen_height: ar.height,
                $screen_width: ar.width,
                mp_lib: "web",
                $lib_version: Ce.LIB_VERSION,
                $insert_id: yn(),
                time: c.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(Ee, Re.vendor, Pt)
            }), {
                $browser_version: c.info.browserVersion(Ee, Re.vendor, Pt)
            })
        },
        pageviewInfo: function(t) {
            return c.strip_empty_properties({
                mp_page: t,
                mp_referrer: q.referrer,
                mp_browser: c.info.browser(Ee, Re.vendor, Pt),
                mp_platform: c.info.os()
            })
        }
    };
    var yn = function(t) {
            var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return t ? e.substring(0, t) : e
        },
        ua = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        fa = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        ni = function(t) {
            var e = fa,
                r = t.split("."),
                n = r[r.length - 1];
            (n.length > 4 || n === "com" || n === "org") && (e = ua);
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
            M.error("The DOM query (" + t + ") returned 0 elements");
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
    var dt = function() {
        this.override_event = "click"
    };
    c.inherit(dt, Ie);
    dt.prototype.create_properties = function(t, e) {
        var r = dt.superclass.create_properties.apply(this, arguments);
        return e.href && (r.url = e.href), r
    };
    dt.prototype.event_handler = function(t, e, r) {
        r.new_tab = t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank", r.href = e.href, r.new_tab || t.preventDefault()
    };
    dt.prototype.after_track_handler = function(t, e) {
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
    var la = gn("lock"),
        po = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
        };
    po.prototype.withLock = function(t, e, r) {
        !r && typeof e != "function" && (r = e, e = null);
        var n = r || new Date().getTime() + "|" + Math.random(),
            i = new Date().getTime(),
            o = this.storageKey,
            s = this.pollIntervalMS,
            a = this.timeoutMS,
            u = this.storage,
            f = o + ":X",
            h = o + ":Y",
            y = o + ":Z",
            m = function(U) {
                e && e(U)
            },
            b = function(U) {
                if (new Date().getTime() - i > a) {
                    la.error("Timeout waiting for mutex on " + o + "; clearing lock. [" + n + "]"), u.removeItem(y), u.removeItem(h), P();
                    return
                }
                setTimeout(function() {
                    try {
                        U()
                    } catch (ae) {
                        m(ae)
                    }
                }, s * (Math.random() + .1))
            },
            S = function(U, ae) {
                U() ? ae() : b(function() {
                    S(U, ae)
                })
            },
            I = function() {
                var U = u.getItem(h);
                if (U && U !== n) return !1;
                if (u.setItem(h, n), u.getItem(h) === n) return !0;
                if (!cr(u, !0)) throw new Error("localStorage support dropped while acquiring lock");
                return !1
            },
            P = function() {
                u.setItem(f, n), S(I, function() {
                    if (u.getItem(f) === n) {
                        z();
                        return
                    }
                    b(function() {
                        if (u.getItem(h) !== n) {
                            P();
                            return
                        }
                        S(function() {
                            return !u.getItem(y)
                        }, z)
                    })
                })
            },
            z = function() {
                u.setItem(y, "1");
                try {
                    t()
                } finally {
                    u.removeItem(y), u.getItem(h) === n && u.removeItem(h), u.getItem(f) === n && u.removeItem(f)
                }
            };
        try {
            if (cr(u, !0)) P();
            else throw new Error("localStorage support check failed")
        } catch (U) {
            m(U)
        }
    };
    var ii = gn("batch"),
        Fe = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || c.bind(ii.error, ii), this.lock = new po(t, {
                storage: this.storage
            }), this.pid = e.pid || null, this.memQueue = []
        };
    Fe.prototype.enqueue = function(t, e, r) {
        var n = {
            id: yn(),
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
    var oi = function(t, e) {
        var r = [];
        return c.each(t, function(n) {
            n.id && !e[n.id] && r.push(n)
        }), r
    };
    Fe.prototype.removeItemsByID = function(t, e) {
        var r = {};
        c.each(t, function(i) {
            r[i] = !0
        }), this.memQueue = oi(this.memQueue, r);
        var n = c.bind(function() {
            var i;
            try {
                var o = this.readFromStorage();
                if (o = oi(o, r), i = this.saveToStorage(o), i) {
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
    var si = function(t, e) {
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
        this.memQueue = si(this.memQueue, t), this.lock.withLock(c.bind(function() {
            var n;
            try {
                var i = this.readFromStorage();
                i = si(i, t), n = this.saveToStorage(i)
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
    var pa = 10 * 60 * 1e3,
        Ct = gn("batch"),
        ke = function(t, e) {
            this.errorReporter = e.errorReporter, this.queue = new Fe(t, {
                errorReporter: c.bind(this.reportError, this),
                storage: e.storage
            }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
        };
    ke.prototype.enqueue = function(t, e) {
        this.queue.enqueue(t, this.flushInterval, e)
    };
    ke.prototype.start = function() {
        this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
    };
    ke.prototype.stop = function() {
        this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
    };
    ke.prototype.clear = function() {
        this.queue.clear()
    };
    ke.prototype.resetBatchSize = function() {
        this.batchSize = this.libConfig.batch_size
    };
    ke.prototype.resetFlush = function() {
        this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
    };
    ke.prototype.scheduleFlush = function(t) {
        this.flushInterval = t, this.stopped || (this.timeoutID = setTimeout(c.bind(this.flush, this), this.flushInterval))
    };
    ke.prototype.flush = function(t) {
        try {
            if (this.requestInProgress) {
                Ct.log("Flush: Request already in progress");
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
                            var y = this.flushInterval * 2,
                                m = f.xhr_req.responseHeaders;
                            if (m) {
                                var b = m["Retry-After"];
                                b && (y = parseInt(b, 10) * 1e3 || y)
                            }
                            y = Math.min(pa, y), this.reportError("Error; retry in " + y + " ms"), this.scheduleFlush(y)
                        } else if (c.isObject(f) && f.xhr_req && f.xhr_req.status === 413)
                            if (i.length > 1) {
                                var S = Math.max(1, Math.floor(n / 2));
                                this.batchSize = Math.min(this.batchSize, S, i.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
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
            t.unloading && (u.transport = "sendBeacon"), Ct.log("MIXPANEL REQUEST:", o), this.sendRequest(o, u, a)
        } catch (f) {
            this.reportError("Error flushing request queue", f), this.resetFlush()
        }
    };
    ke.prototype.reportError = function(t, e) {
        if (Ct.error.apply(Ct.error, arguments), this.errorReporter) try {
            e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
        } catch (r) {
            Ct.error(r)
        }
    };
    var da = "__mp_opt_in_out_";

    function ha(t, e) {
        go(!0, t, e)
    }

    function _a(t, e) {
        go(!1, t, e)
    }

    function ga(t, e) {
        return _o(t, e) === "1"
    }

    function ho(t, e) {
        if (ma(e)) return M.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = _o(t, e) === "0";
        return r && M.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function Wt(t) {
        return bn(t, function(e) {
            return this.get_config(e)
        })
    }

    function qe(t) {
        return bn(t, function(e) {
            return this._get_config(e)
        })
    }

    function vt(t) {
        return bn(t, function(e) {
            return this._get_config(e)
        })
    }

    function ya(t, e) {
        e = e || {}, mn(e).remove(vn(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
    }

    function mn(t) {
        return t = t || {}, t.persistenceType === "localStorage" ? c.localStorage : c.cookie
    }

    function vn(t, e) {
        return e = e || {}, (e.persistencePrefix || da) + t
    }

    function _o(t, e) {
        return mn(e).get(vn(t, e))
    }

    function ma(t) {
        if (t && t.ignoreDnt) return !1;
        var e = t && t.window || oe,
            r = e.navigator || {},
            n = !1;
        return c.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(i) {
            c.includes([!0, 1, "1", "yes"], i) && (n = !0)
        }), n
    }

    function go(t, e, r) {
        if (!c.isString(e) || !e.length) {
            M.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
            return
        }
        r = r || {}, mn(r).set(vn(e, r), t ? 1 : 0, c.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0
        })
    }

    function bn(t, e) {
        return function() {
            var r = !1;
            try {
                var n = e.call(this, "token"),
                    i = e.call(this, "ignore_dnt"),
                    o = e.call(this, "opt_out_tracking_persistence_type"),
                    s = e.call(this, "opt_out_tracking_cookie_prefix"),
                    a = e.call(this, "window");
                n && (r = ho(n, {
                    ignoreDnt: i,
                    persistenceType: o,
                    persistencePrefix: s,
                    window: a
                }))
            } catch (f) {
                M.error("Unexpected error when checking tracking opt-out status: " + f)
            }
            if (!r) return t.apply(this, arguments);
            var u = arguments[arguments.length - 1];
            typeof u == "function" && u(0)
        }
    }
    var Ue = "$set",
        ht = "$set_once",
        Se = "$unset",
        ze = "$add",
        Ae = "$append",
        Ke = "$union",
        Me = "$remove",
        va = "$delete",
        yo = {
            set_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[Ue] = n, r
            },
            unset_action: function(t) {
                var e = {},
                    r = [];
                return c.isArray(t) || (t = [t]), c.each(t, function(n) {
                    this._is_reserved_property(n) || r.push(n)
                }, this), e[Se] = r, e
            },
            set_once_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[ht] = n, r
            },
            union_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = c.isArray(i) ? i : [i])
                }, this) : n[t] = c.isArray(e) ? e : [e], r[Ke] = n, r
            },
            append_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[Ae] = n, r
            },
            remove_action: function(t, e) {
                var r = {},
                    n = {};
                return c.isObject(t) ? c.each(t, function(i, o) {
                    this._is_reserved_property(o) || (n[o] = i)
                }, this) : n[t] = e, r[Me] = n, r
            },
            delete_action: function() {
                var t = {};
                return t[va] = "", t
            }
        },
        W = function() {};
    c.extend(W.prototype, yo);
    W.prototype._init = function(t, e, r) {
        this._mixpanel = t, this._group_key = e, this._group_id = r
    };
    W.prototype.set = vt(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    W.prototype.set_once = vt(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    W.prototype.unset = vt(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    W.prototype.union = vt(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    W.prototype.delete = vt(function(t) {
        var e = this.delete_action();
        return this._send_request(e, t)
    });
    W.prototype.remove = vt(function(t, e, r) {
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    W.prototype._send_request = function(t, e) {
        t.$group_key = this._group_key, t.$group_id = this._group_id, t.$token = this._get_config("token");
        var r = c.encodeDates(t);
        return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/groups/",
            batcher: this._mixpanel.request_batchers.groups
        }, e)
    };
    W.prototype._is_reserved_property = function(t) {
        return t === "$group_key" || t === "$group_id"
    };
    W.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    W.prototype.toString = function() {
        return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
    };
    W.prototype.remove = W.prototype.remove;
    W.prototype.set = W.prototype.set;
    W.prototype.set_once = W.prototype.set_once;
    W.prototype.union = W.prototype.union;
    W.prototype.unset = W.prototype.unset;
    W.prototype.toString = W.prototype.toString;
    var A = function() {};
    c.extend(A.prototype, yo);
    A.prototype._init = function(t) {
        this._mixpanel = t
    };
    A.prototype.set = qe(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n[Ue] = c.extend({}, c.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[Ue]), this._send_request(n, r)
    });
    A.prototype.set_once = qe(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    A.prototype.unset = qe(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    A.prototype.increment = qe(function(t, e, r) {
        var n = {},
            i = {};
        return c.isObject(t) ? (c.each(t, function(o, s) {
            if (!this._is_reserved_property(s))
                if (isNaN(parseFloat(o))) {
                    M.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else i[s] = o
        }, this), r = e) : (c.isUndefined(e) && (e = 1), i[t] = e), n[ze] = i, this._send_request(n, r)
    });
    A.prototype.append = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.append_action(t, e);
        return this._send_request(n, r)
    });
    A.prototype.remove = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    A.prototype.union = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    A.prototype.track_charge = qe(function(t, e, r) {
        if (!c.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
            M.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return
        }
        return this.append("$transactions", c.extend({
            $amount: t
        }, e), r)
    });
    A.prototype.clear_charges = function(t) {
        return this.set("$transactions", [], t)
    };
    A.prototype.delete_user = function() {
        if (!this._identify_called()) {
            M.error("mixpanel.people.delete_user() requires you to call identify() first");
            return
        }
        var t = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(t)
    };
    A.prototype.toString = function() {
        return this._mixpanel.toString() + ".people"
    };
    A.prototype._send_request = function(t, e) {
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
    A.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    A.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0
    };
    A.prototype._enqueue = function(t) {
        Ue in t ? this._mixpanel.persistence._add_to_people_queue(Ue, t) : ht in t ? this._mixpanel.persistence._add_to_people_queue(ht, t) : Se in t ? this._mixpanel.persistence._add_to_people_queue(Se, t) : ze in t ? this._mixpanel.persistence._add_to_people_queue(ze, t) : Ae in t ? this._mixpanel.persistence._add_to_people_queue(Ae, t) : Me in t ? this._mixpanel.persistence._add_to_people_queue(Me, t) : Ke in t ? this._mixpanel.persistence._add_to_people_queue(Ke, t) : M.error("Invalid call to _enqueue():", t)
    };
    A.prototype._flush_one_queue = function(t, e, r, n) {
        var i = this,
            o = c.extend({}, this._mixpanel.persistence._get_queue(t)),
            s = o;
        !c.isUndefined(o) && c.isObject(o) && !c.isEmptyObject(o) && (i._mixpanel.persistence._pop_from_people_queue(t, o), n && (s = n(o)), e.call(i, s, function(a, u) {
            a === 0 && i._mixpanel.persistence._add_to_people_queue(t, o), c.isUndefined(r) || r(a, u)
        }))
    };
    A.prototype._flush = function(t, e, r, n, i, o, s) {
        var a = this,
            u = this._mixpanel.persistence._get_queue(Ae),
            f = this._mixpanel.persistence._get_queue(Me);
        if (this._flush_one_queue(Ue, this.set, t), this._flush_one_queue(ht, this.set_once, n), this._flush_one_queue(Se, this.unset, o, function(P) {
                return c.keys(P)
            }), this._flush_one_queue(ze, this.increment, e), this._flush_one_queue(Ke, this.union, i), !c.isUndefined(u) && c.isArray(u) && u.length) {
            for (var h, y = function(P, z) {
                    P === 0 && a._mixpanel.persistence._add_to_people_queue(Ae, h), c.isUndefined(r) || r(P, z)
                }, m = u.length - 1; m >= 0; m--) h = u.pop(), c.isEmptyObject(h) || a.append(h, y);
            a._mixpanel.persistence.save()
        }
        if (!c.isUndefined(f) && c.isArray(f) && f.length) {
            for (var b, S = function(P, z) {
                    P === 0 && a._mixpanel.persistence._add_to_people_queue(Me, b), c.isUndefined(s) || s(P, z)
                }, I = f.length - 1; I >= 0; I--) b = f.pop(), c.isEmptyObject(b) || a.remove(b, S);
            a._mixpanel.persistence.save()
        }
    };
    A.prototype._is_reserved_property = function(t) {
        return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
    };
    A.prototype.set = A.prototype.set;
    A.prototype.set_once = A.prototype.set_once;
    A.prototype.unset = A.prototype.unset;
    A.prototype.increment = A.prototype.increment;
    A.prototype.append = A.prototype.append;
    A.prototype.remove = A.prototype.remove;
    A.prototype.union = A.prototype.union;
    A.prototype.track_charge = A.prototype.track_charge;
    A.prototype.clear_charges = A.prototype.clear_charges;
    A.prototype.delete_user = A.prototype.delete_user;
    A.prototype.toString = A.prototype.toString;
    var En = "__mps",
        Sn = "__mpso",
        wn = "__mpus",
        On = "__mpa",
        kn = "__mpap",
        Tn = "__mpr",
        xn = "__mpu",
        mo = "$people_distinct_id",
        lr = "__alias",
        Mt = "__timers",
        ba = [En, Sn, wn, On, kn, Tn, xn, mo, lr, Mt],
        $ = function(t) {
            this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
            var e = t.persistence;
            e !== "cookie" && e !== "localStorage" && (M.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && c.localStorage.is_supported() ? this.storage = c.localStorage : this.storage = c.cookie, this.load(), this.update_config(t), this.upgrade(t), this.save()
        };
    $.prototype.properties = function() {
        var t = {};
        return c.each(this.props, function(e, r) {
            c.include(ba, r) || (t[r] = e)
        }), t
    };
    $.prototype.load = function() {
        if (!this.disabled) {
            var t = this.storage.parse(this.name);
            t && (this.props = c.extend({}, t))
        }
    };
    $.prototype.upgrade = function(t) {
        var e = t.upgrade,
            r, n;
        e && (r = "mp_super_properties", typeof e == "string" && (r = e), n = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), n && (this.props = c.extend(this.props, n.all, n.events))), !t.cookie_name && t.name !== "mixpanel" && (r = "mp_" + t.token + "_" + t.name, n = this.storage.parse(r), n && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(n))), this.storage === c.localStorage && (n = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, !0), n && this.register_once(n))
    };
    $.prototype.save = function() {
        this.disabled || this.storage.set(this.name, c.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
    };
    $.prototype.remove = function() {
        this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
    };
    $.prototype.clear = function() {
        this.remove(), this.props = {}
    };
    $.prototype.register_once = function(t, e, r) {
        return c.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, c.each(t, function(n, i) {
            (!this.props.hasOwnProperty(i) || this.props[i] === e) && (this.props[i] = n)
        }, this), this.save(), !0) : !1
    };
    $.prototype.register = function(t, e) {
        return c.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, c.extend(this.props, t), this.save(), !0) : !1
    };
    $.prototype.unregister = function(t) {
        t in this.props && (delete this.props[t], this.save())
    };
    $.prototype.update_campaign_params = function() {
        this.campaign_params_saved || (this.register_once(c.info.campaignParams()), this.campaign_params_saved = !0)
    };
    $.prototype.update_search_keyword = function(t) {
        this.register(c.info.searchInfo(t))
    };
    $.prototype.update_referrer_info = function(t) {
        this.register_once({
            $initial_referrer: t || "$direct",
            $initial_referring_domain: c.info.referringDomain(t) || "$direct"
        }, "")
    };
    $.prototype.get_referrer_info = function() {
        return c.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    $.prototype.safe_merge = function(t) {
        return c.each(this.props, function(e, r) {
            r in t || (t[r] = e)
        }), t
    };
    $.prototype.update_config = function(t) {
        this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
    };
    $.prototype.set_disabled = function(t) {
        this.disabled = t, this.disabled ? this.remove() : this.save()
    };
    $.prototype.set_cookie_domain = function(t) {
        t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
    };
    $.prototype.set_cross_site = function(t) {
        t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
    };
    $.prototype.set_cross_subdomain = function(t) {
        t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
    };
    $.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    $.prototype.set_secure = function(t) {
        t !== this.secure && (this.secure = !!t, this.remove(), this.save())
    };
    $.prototype._add_to_people_queue = function(t, e) {
        var r = this._get_queue_key(t),
            n = e[t],
            i = this._get_or_create_queue(Ue),
            o = this._get_or_create_queue(ht),
            s = this._get_or_create_queue(Se),
            a = this._get_or_create_queue(ze),
            u = this._get_or_create_queue(Ke),
            f = this._get_or_create_queue(Me, []),
            h = this._get_or_create_queue(Ae, []);
        r === En ? (c.extend(i, n), this._pop_from_people_queue(ze, n), this._pop_from_people_queue(Ke, n), this._pop_from_people_queue(Se, n)) : r === Sn ? (c.each(n, function(y, m) {
            m in o || (o[m] = y)
        }), this._pop_from_people_queue(Se, n)) : r === wn ? c.each(n, function(y) {
            c.each([i, o, a, u], function(m) {
                y in m && delete m[y]
            }), c.each(h, function(m) {
                y in m && delete m[y]
            }), s[y] = !0
        }) : r === On ? (c.each(n, function(y, m) {
            m in i ? i[m] += y : (m in a || (a[m] = 0), a[m] += y)
        }, this), this._pop_from_people_queue(Se, n)) : r === xn ? (c.each(n, function(y, m) {
            c.isArray(y) && (m in u || (u[m] = []), u[m] = u[m].concat(y))
        }), this._pop_from_people_queue(Se, n)) : r === Tn ? (f.push(n), this._pop_from_people_queue(Ae, n)) : r === kn && (h.push(n), this._pop_from_people_queue(Se, n)), M.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), M.log(e), this.save()
    };
    $.prototype._pop_from_people_queue = function(t, e) {
        var r = this._get_queue(t);
        c.isUndefined(r) || (c.each(e, function(n, i) {
            t === Ae || t === Me ? c.each(r, function(o) {
                o[i] === n && delete o[i]
            }) : delete r[i]
        }, this), this.save())
    };
    $.prototype._get_queue_key = function(t) {
        if (t === Ue) return En;
        if (t === ht) return Sn;
        if (t === Se) return wn;
        if (t === ze) return On;
        if (t === Ae) return kn;
        if (t === Me) return Tn;
        if (t === Ke) return xn;
        M.error("Invalid queue:", t)
    };
    $.prototype._get_queue = function(t) {
        return this.props[this._get_queue_key(t)]
    };
    $.prototype._get_or_create_queue = function(t, e) {
        var r = this._get_queue_key(t);
        return e = c.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
    };
    $.prototype.set_event_timer = function(t, e) {
        var r = this.props[Mt] || {};
        r[t] = e, this.props[Mt] = r, this.save()
    };
    $.prototype.remove_event_timer = function(t) {
        var e = this.props[Mt] || {},
            r = e[t];
        return c.isUndefined(r) || (delete this.props[Mt][t], this.save()), r
    };
    var Rn, ne, vo = 0,
        Ea = 1,
        Sa = function(t) {
            return t
        },
        Bt = function() {},
        ye = "mixpanel",
        bo = "base64",
        wa = "json",
        it = oe.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        Eo = !it && Ee.indexOf("MSIE") === -1 && Ee.indexOf("Mozilla") === -1,
        pr = null;
    Re.sendBeacon && (pr = function() {
        return Re.sendBeacon.apply(Re, arguments)
    });
    var ai = {
            api_host: "https://api-js.mixpanel.com",
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: bo,
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
        So = !1,
        E = function() {},
        rn = function(t, e, r) {
            var n, i = r === ye ? ne : ne[r];
            if (i && Rn === vo) n = i;
            else {
                if (i && !c.isArray(i)) {
                    M.error("You have already initialized " + r);
                    return
                }
                n = new E
            }
            return n._cached_groups = {}, n._init(t, e, r), n.people = new A, n.people._init(n), Ce.DEBUG = Ce.DEBUG || n.get_config("debug"), !c.isUndefined(i) && c.isArray(i) && (n._execute_array.call(n.people, i.people), n._execute_array(i)), n
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
        var n = rn(t, e, r);
        return ne[r] = n, n._loaded(), n
    };
    E.prototype._init = function(t, e, r) {
        e = e || {}, this.__loaded = !0, this.config = {};
        var n = {};
        if (!("api_payload_format" in e)) {
            var i = e.api_host || ai.api_host;
            i.match(/\.mixpanel\.com$/) && (n.api_payload_format = wa)
        }
        if (this.set_config(c.extend({}, ai, n, e, {
                name: r,
                token: t,
                callback_fn: (r === ye ? r : ye + "." + r) + "._jsc"
            })), this._jsc = Bt, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!c.localStorage.is_supported(!0) || !it) this._batch_requests = !1, M.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
            else if (this.init_batchers(), pr && oe.addEventListener) {
                var o = c.bind(function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }, this);
                oe.addEventListener("pagehide", function(a) {
                    a.persisted && o()
                }), oe.addEventListener("visibilitychange", function() {
                    q.visibilityState === "hidden" && o()
                })
            }
        }
        this.persistence = this.cookie = new $(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
        var s = c.UUID();
        this.get_distinct_id() || this.register_once({
            distinct_id: s,
            $device_id: s
        }, "")
    };
    E.prototype._loaded = function() {
        this.get_config("loaded")(this), this._set_default_superprops()
    };
    E.prototype._set_default_superprops = function() {
        this.persistence.update_search_keyword(q.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(q.referrer)
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
        if (!So) return this.__dom_loaded_queue.push([t, e]), !1;
        var r = new t().init(this);
        return r.track.apply(r, e)
    };
    E.prototype._prepare_callback = function(t, e) {
        if (c.isUndefined(t)) return null;
        if (it) {
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
        if (Eo) return this.__request_queue.push(arguments), i;
        var o = {
                method: this.get_config("api_method"),
                transport: this.get_config("api_transport"),
                verbose: this.get_config("verbose")
            },
            s = null;
        !n && (c.isFunction(r) || typeof r == "string") && (n = r, r = null), r = c.extend(o, r || {}), it || (r.method = "GET");
        var a = r.method === "POST",
            u = pr && a && r.transport.toLowerCase() === "sendbeacon",
            f = r.verbose;
        e.verbose && (f = !0), this.get_config("test") && (e.test = 1), f && (e.verbose = 1), this.get_config("img") && (e.img = 1), it || (n ? e.callback = n : (f || this.get_config("test")) && (e.callback = "(function(){})")), e.ip = this.get_config("ip") ? 1 : 0, e._ = new Date().getTime().toString(), a && (s = "data=" + encodeURIComponent(e.data), delete e.data), t += "?" + c.HTTPBuildQuery(e);
        var h = this;
        if ("img" in e) {
            var y = q.createElement("img");
            y.src = t, q.body.appendChild(y)
        } else if (u) {
            try {
                i = pr(t, s)
            } catch (z) {
                h.report_error(z), i = !1
            }
            try {
                n && n(i ? 1 : 0)
            } catch (z) {
                h.report_error(z)
            }
        } else if (it) try {
            var m = new XMLHttpRequest;
            m.open(r.method, t, !0);
            var b = this.get_config("xhr_headers");
            if (a && (b["Content-Type"] = "application/x-www-form-urlencoded"), c.each(b, function(z, U) {
                    m.setRequestHeader(U, z)
                }), r.timeout_ms && typeof m.timeout < "u") {
                m.timeout = r.timeout_ms;
                var S = new Date().getTime()
            }
            m.withCredentials = !0, m.onreadystatechange = function() {
                if (m.readyState === 4)
                    if (m.status === 200) {
                        if (n)
                            if (f) {
                                var z;
                                try {
                                    z = c.JSONDecode(m.responseText)
                                } catch (ae) {
                                    if (h.report_error(ae), r.ignore_json_errors) z = m.responseText;
                                    else return
                                }
                                n(z)
                            } else n(Number(m.responseText))
                    } else {
                        var U;
                        m.timeout && !m.status && new Date().getTime() - S >= m.timeout ? U = "timeout" : U = "Bad HTTP status: " + m.status + " " + m.statusText, h.report_error(U), n && n(f ? {
                            status: 0,
                            error: U,
                            xhr_req: m
                        } : 0)
                    }
            }, m.send(s)
        } catch (z) {
            h.report_error(z), i = !1
        } else {
            var I = q.createElement("script");
            I.type = "text/javascript", I.async = !0, I.defer = !0, I.src = t;
            var P = q.getElementsByTagName("script")[0];
            P.parentNode.insertBefore(I, P)
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
    E.prototype.init_batchers = function() {
        var t = this.get_config("token");
        if (!this.are_batchers_initialized()) {
            var e = c.bind(function(r) {
                return new ke("__mpq_" + t + r.queue_suffix, {
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
    E.prototype.start_batch_senders = function() {
        this.are_batchers_initialized() && (this._batch_requests = !0, c.each(this.request_batchers, function(t) {
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
        return this.get_config("api_payload_format") === bo && (e = c.base64Encode(e)), {
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
                return s.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (M.log("MIXPANEL REQUEST:"), M.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(e, r))) : null
            }, this);
        return this._batch_requests && !o ? i.enqueue(r, function(f) {
            f ? e(1, r) : u()
        }) : a = u(), a && r
    };
    E.prototype.track = Wt(function(t, e, r, n) {
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
    E.prototype.set_group = Wt(function(t, e, r) {
        c.isArray(e) || (e = [e]);
        var n = {};
        return n[t] = e, this.register(n), this.people.set(t, e, r)
    });
    E.prototype.add_group = Wt(function(t, e, r) {
        var n = this.get_property(t);
        if (n === void 0) {
            var i = {};
            i[t] = [e], this.register(i)
        } else n.indexOf(e) === -1 && (n.push(e), this.register(i));
        return this.people.union(t, e, r)
    });
    E.prototype.remove_group = Wt(function(t, e, r) {
        var n = this.get_property(t);
        if (n !== void 0) {
            var i = n.indexOf(e);
            i > -1 && (n.splice(i, 1), this.register({
                group_key: n
            })), n.length === 0 && this.unregister(t)
        }
        return this.people.remove(t, e, r)
    });
    E.prototype.track_with_groups = Wt(function(t, e, r, n) {
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
        return (n === void 0 || n._group_key !== t || n._group_id !== e) && (n = new W, n._init(this, t, e), this._cached_groups[r] = n), n
    };
    E.prototype.track_pageview = function(t) {
        c.isUndefined(t) && (t = q.location.href), this.track("mp_page_view", c.info.pageviewInfo(t))
    };
    E.prototype.track_links = function() {
        return this._track_dom.call(this, dt, arguments)
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
    var Oa = {
            persistent: !0
        },
        An = function(t) {
            var e;
            return c.isObject(t) ? e = t : c.isUndefined(t) ? e = {} : e = {
                days: t
            }, c.extend({}, Oa, e)
        };
    E.prototype.register = function(t, e) {
        var r = An(e);
        r.persistent ? this.persistence.register(t, r.days) : c.extend(this.unpersisted_superprops, t)
    };
    E.prototype.register_once = function(t, e, r) {
        var n = An(r);
        n.persistent ? this.persistence.register_once(t, e, n.days) : (typeof e > "u" && (e = "None"), c.each(t, function(i, o) {
            (!this.unpersisted_superprops.hasOwnProperty(o) || this.unpersisted_superprops[o] === e) && (this.unpersisted_superprops[o] = i)
        }, this))
    };
    E.prototype.unregister = function(t, e) {
        e = An(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
    };
    E.prototype._register_single = function(t, e) {
        var r = {};
        r[t] = e, this.register(r)
    };
    E.prototype.identify = function(t, e, r, n, i, o, s, a) {
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
            distinct_id: t,
            $device_id: t
        }, "")
    };
    E.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id")
    };
    E.prototype.alias = function(t, e) {
        if (t === this.get_property(mo)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
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
            }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Ce.DEBUG = Ce.DEBUG || this.get_config("debug")
        }
    };
    E.prototype.get_config = function(t) {
        return this.config[t]
    };
    E.prototype._run_hook = function(t) {
        var e = (this.config.hooks[t] || Sa).apply(this, Le.call(arguments, 1));
        return typeof e > "u" && (this.report_error(t + " hook did not return a value"), e = null), e
    };
    E.prototype.get_property = function(t) {
        return this.persistence.props[t]
    };
    E.prototype.toString = function() {
        var t = this.get_config("name");
        return t !== ye && (t = ye + "." + t), t
    };
    E.prototype._event_is_disabled = function(t) {
        return c.isBlockedUA(Ee) || this._flags.disable_all_events || c.include(this.__disabled_events, t)
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
        !this.get_config("disable_persistence") && this.persistence.disabled !== e && this.persistence.set_disabled(e), e && c.each(this.request_batchers, function(r) {
            r.clear()
        })
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
        }, t), this._gdpr_call_func(ha, t), this._gdpr_update_persistence(t)
    };
    E.prototype.opt_out_tracking = function(t) {
        t = c.extend({
            clear_persistence: !0,
            delete_user: !0
        }, t), t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(_a, t), this._gdpr_update_persistence(t)
    };
    E.prototype.has_opted_in_tracking = function(t) {
        return this._gdpr_call_func(ga, t)
    };
    E.prototype.has_opted_out_tracking = function(t) {
        return this._gdpr_call_func(ho, t)
    };
    E.prototype.clear_opt_in_out_tracking = function(t) {
        t = c.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(ya, t), this._gdpr_update_persistence(t)
    };
    E.prototype.report_error = function(t, e) {
        M.error.apply(M.error, arguments);
        try {
            !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
        } catch (r) {
            M.error(r)
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
    $.prototype.properties = $.prototype.properties;
    $.prototype.update_search_keyword = $.prototype.update_search_keyword;
    $.prototype.update_referrer_info = $.prototype.update_referrer_info;
    $.prototype.get_cross_subdomain = $.prototype.get_cross_subdomain;
    $.prototype.clear = $.prototype.clear;
    var tt = {},
        ka = function() {
            c.each(tt, function(t, e) {
                e !== ye && (ne[e] = t)
            }), ne._ = c
        },
        Ta = function() {
            ne.init = function(t, e, r) {
                if (r) return ne[r] || (ne[r] = tt[r] = rn(t, e, r), ne[r]._loaded()), ne[r];
                var n = ne;
                tt[ye] ? n = tt[ye] : t && (n = rn(t, e, ye), n._loaded(), tt[ye] = n), ne = n, Rn === Ea && (oe[ye] = ne), ka()
            }
        },
        xa = function() {
            function t() {
                t.done || (t.done = !0, So = !0, Eo = !1, c.each(tt, function(n) {
                    n._dom_loaded()
                }))
            }

            function e() {
                try {
                    q.documentElement.doScroll("left")
                } catch {
                    setTimeout(e, 1);
                    return
                }
                t()
            }
            if (q.addEventListener) q.readyState === "complete" ? t() : q.addEventListener("DOMContentLoaded", t, !1);
            else if (q.attachEvent) {
                q.attachEvent("onreadystatechange", t);
                var r = !1;
                try {
                    r = oe.frameElement === null
                } catch {}
                q.documentElement.doScroll && r && e()
            }
            c.register_event(oe, "load", t, !0)
        };

    function Ra() {
        return Rn = vo, ne = new E, Ta(), ne.init(), xa(), ne
    }
    var Aa = Ra(),
        Ia = Aa;
    const ci = oa(Ia);
    class wo {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), ci.init("2e284873b7269f13b850ac994abfd848", {
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
            ci.track("Game Joined", {
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

    function Pa() {
        this.__data__ = [], this.size = 0
    }
    var Na = Pa;

    function Da(t, e) {
        return t === e || t !== t && e !== e
    }
    var kr = Da,
        $a = kr;

    function La(t, e) {
        for (var r = t.length; r--;)
            if ($a(t[r][0], e)) return r;
        return -1
    }
    var Tr = La,
        Ca = Tr,
        ja = Array.prototype,
        Ua = ja.splice;

    function Ma(t) {
        var e = this.__data__,
            r = Ca(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : Ua.call(e, r, 1), --this.size, !0
    }
    var Ba = Ma,
        Fa = Tr;

    function qa(t) {
        var e = this.__data__,
            r = Fa(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var Ga = qa,
        Ya = Tr;

    function Ha(t) {
        return Ya(this.__data__, t) > -1
    }
    var Wa = Ha,
        za = Tr;

    function Ka(t, e) {
        var r = this.__data__,
            n = za(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var Va = Ka,
        Ja = Na,
        Xa = Ba,
        Qa = Ga,
        Za = Wa,
        ec = Va;

    function bt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    bt.prototype.clear = Ja;
    bt.prototype.delete = Xa;
    bt.prototype.get = Qa;
    bt.prototype.has = Za;
    bt.prototype.set = ec;
    var xr = bt,
        tc = xr;

    function rc() {
        this.__data__ = new tc, this.size = 0
    }
    var nc = rc;

    function ic(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var oc = ic;

    function sc(t) {
        return this.__data__.get(t)
    }
    var ac = sc;

    function cc(t) {
        return this.__data__.has(t)
    }
    var uc = cc,
        fc = typeof de == "object" && de && de.Object === Object && de,
        Oo = fc,
        lc = Oo,
        pc = typeof self == "object" && self && self.Object === Object && self,
        dc = lc || pc || Function("return this")(),
        Et = dc,
        hc = Et,
        _c = hc.Symbol,
        ko = _c,
        ui = ko,
        To = Object.prototype,
        gc = To.hasOwnProperty,
        yc = To.toString,
        Nt = ui ? ui.toStringTag : void 0;

    function mc(t) {
        var e = gc.call(t, Nt),
            r = t[Nt];
        try {
            t[Nt] = void 0;
            var n = !0
        } catch {}
        var i = yc.call(t);
        return n && (e ? t[Nt] = r : delete t[Nt]), i
    }
    var vc = mc,
        bc = Object.prototype,
        Ec = bc.toString;

    function Sc(t) {
        return Ec.call(t)
    }
    var wc = Sc,
        fi = ko,
        Oc = vc,
        kc = wc,
        Tc = "[object Null]",
        xc = "[object Undefined]",
        li = fi ? fi.toStringTag : void 0;

    function Rc(t) {
        return t == null ? t === void 0 ? xc : Tc : li && li in Object(t) ? Oc(t) : kc(t)
    }
    var Rr = Rc;

    function Ac(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var Xe = Ac,
        Ic = Rr,
        Pc = Xe,
        Nc = "[object AsyncFunction]",
        Dc = "[object Function]",
        $c = "[object GeneratorFunction]",
        Lc = "[object Proxy]";

    function Cc(t) {
        if (!Pc(t)) return !1;
        var e = Ic(t);
        return e == Dc || e == $c || e == Nc || e == Lc
    }
    var In = Cc,
        jc = Et,
        Uc = jc["__core-js_shared__"],
        Mc = Uc,
        Hr = Mc,
        pi = function() {
            var t = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function Bc(t) {
        return !!pi && pi in t
    }
    var Fc = Bc,
        qc = Function.prototype,
        Gc = qc.toString;

    function Yc(t) {
        if (t != null) {
            try {
                return Gc.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var Hc = Yc,
        Wc = In,
        zc = Fc,
        Kc = Xe,
        Vc = Hc,
        Jc = /[\\^$.*+?()[\]{}|]/g,
        Xc = /^\[object .+?Constructor\]$/,
        Qc = Function.prototype,
        Zc = Object.prototype,
        eu = Qc.toString,
        tu = Zc.hasOwnProperty,
        ru = RegExp("^" + eu.call(tu).replace(Jc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function nu(t) {
        if (!Kc(t) || zc(t)) return !1;
        var e = Wc(t) ? ru : Xc;
        return e.test(Vc(t))
    }
    var iu = nu;

    function ou(t, e) {
        return t == null ? void 0 : t[e]
    }
    var su = ou,
        au = iu,
        cu = su;

    function uu(t, e) {
        var r = cu(t, e);
        return au(r) ? r : void 0
    }
    var Pn = uu,
        fu = Pn,
        lu = Et,
        pu = fu(lu, "Map"),
        xo = pu,
        du = Pn,
        hu = du(Object, "create"),
        Ar = hu,
        di = Ar;

    function _u() {
        this.__data__ = di ? di(null) : {}, this.size = 0
    }
    var gu = _u;

    function yu(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var mu = yu,
        vu = Ar,
        bu = "__lodash_hash_undefined__",
        Eu = Object.prototype,
        Su = Eu.hasOwnProperty;

    function wu(t) {
        var e = this.__data__;
        if (vu) {
            var r = e[t];
            return r === bu ? void 0 : r
        }
        return Su.call(e, t) ? e[t] : void 0
    }
    var Ou = wu,
        ku = Ar,
        Tu = Object.prototype,
        xu = Tu.hasOwnProperty;

    function Ru(t) {
        var e = this.__data__;
        return ku ? e[t] !== void 0 : xu.call(e, t)
    }
    var Au = Ru,
        Iu = Ar,
        Pu = "__lodash_hash_undefined__";

    function Nu(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Iu && e === void 0 ? Pu : e, this
    }
    var Du = Nu,
        $u = gu,
        Lu = mu,
        Cu = Ou,
        ju = Au,
        Uu = Du;

    function St(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    St.prototype.clear = $u;
    St.prototype.delete = Lu;
    St.prototype.get = Cu;
    St.prototype.has = ju;
    St.prototype.set = Uu;
    var Mu = St,
        hi = Mu,
        Bu = xr,
        Fu = xo;

    function qu() {
        this.size = 0, this.__data__ = {
            hash: new hi,
            map: new(Fu || Bu),
            string: new hi
        }
    }
    var Gu = qu;

    function Yu(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var Hu = Yu,
        Wu = Hu;

    function zu(t, e) {
        var r = t.__data__;
        return Wu(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var Ir = zu,
        Ku = Ir;

    function Vu(t) {
        var e = Ku(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var Ju = Vu,
        Xu = Ir;

    function Qu(t) {
        return Xu(this, t).get(t)
    }
    var Zu = Qu,
        ef = Ir;

    function tf(t) {
        return ef(this, t).has(t)
    }
    var rf = tf,
        nf = Ir;

    function of(t, e) {
        var r = nf(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var sf = of,
        af = Gu,
        cf = Ju,
        uf = Zu,
        ff = rf,
        lf = sf;

    function wt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    wt.prototype.clear = af;
    wt.prototype.delete = cf;
    wt.prototype.get = uf;
    wt.prototype.has = ff;
    wt.prototype.set = lf;
    var pf = wt,
        df = xr,
        hf = xo,
        _f = pf,
        gf = 200;

    function yf(t, e) {
        var r = this.__data__;
        if (r instanceof df) {
            var n = r.__data__;
            if (!hf || n.length < gf - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new _f(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var mf = yf,
        vf = xr,
        bf = nc,
        Ef = oc,
        Sf = ac,
        wf = uc,
        Of = mf;

    function Ot(t) {
        var e = this.__data__ = new vf(t);
        this.size = e.size
    }
    Ot.prototype.clear = bf;
    Ot.prototype.delete = Ef;
    Ot.prototype.get = Sf;
    Ot.prototype.has = wf;
    Ot.prototype.set = Of;
    var kf = Ot,
        Tf = Pn,
        xf = function() {
            try {
                var t = Tf(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        Ro = xf,
        _i = Ro;

    function Rf(t, e, r) {
        e == "__proto__" && _i ? _i(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var Nn = Rf,
        Af = Nn,
        If = kr;

    function Pf(t, e, r) {
        (r !== void 0 && !If(t[e], r) || r === void 0 && !(e in t)) && Af(t, e, r)
    }
    var Ao = Pf;

    function Nf(t) {
        return function(e, r, n) {
            for (var i = -1, o = Object(e), s = n(e), a = s.length; a--;) {
                var u = s[t ? a : ++i];
                if (r(o[u], u, o) === !1) break
            }
            return e
        }
    }
    var Df = Nf,
        $f = Df,
        Lf = $f(),
        Cf = Lf,
        dr = {
            exports: {}
        };
    dr.exports;
    (function(t, e) {
        var r = Et,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            o = i && i.exports === n,
            s = o ? r.Buffer : void 0,
            a = s ? s.allocUnsafe : void 0;

        function u(f, h) {
            if (h) return f.slice();
            var y = f.length,
                m = a ? a(y) : new f.constructor(y);
            return f.copy(m), m
        }
        t.exports = u
    })(dr, dr.exports);
    var jf = dr.exports,
        Uf = Et,
        Mf = Uf.Uint8Array,
        Bf = Mf,
        gi = Bf;

    function Ff(t) {
        var e = new t.constructor(t.byteLength);
        return new gi(e).set(new gi(t)), e
    }
    var qf = Ff,
        Gf = qf;

    function Yf(t, e) {
        var r = e ? Gf(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var Hf = Yf;

    function Wf(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var zf = Wf,
        Kf = Xe,
        yi = Object.create,
        Vf = function() {
            function t() {}
            return function(e) {
                if (!Kf(e)) return {};
                if (yi) return yi(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        Jf = Vf;

    function Xf(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var Qf = Xf,
        Zf = Qf,
        el = Zf(Object.getPrototypeOf, Object),
        Io = el,
        tl = Object.prototype;

    function rl(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || tl;
        return t === r
    }
    var Po = rl,
        nl = Jf,
        il = Io,
        ol = Po;

    function sl(t) {
        return typeof t.constructor == "function" && !ol(t) ? nl(il(t)) : {}
    }
    var al = sl;

    function cl(t) {
        return t != null && typeof t == "object"
    }
    var zt = cl,
        ul = Rr,
        fl = zt,
        ll = "[object Arguments]";

    function pl(t) {
        return fl(t) && ul(t) == ll
    }
    var dl = pl,
        mi = dl,
        hl = zt,
        No = Object.prototype,
        _l = No.hasOwnProperty,
        gl = No.propertyIsEnumerable,
        yl = mi(function() {
            return arguments
        }()) ? mi : function(t) {
            return hl(t) && _l.call(t, "callee") && !gl.call(t, "callee")
        },
        Do = yl,
        ml = Array.isArray,
        $o = ml,
        vl = 9007199254740991;

    function bl(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vl
    }
    var Lo = bl,
        El = In,
        Sl = Lo;

    function wl(t) {
        return t != null && Sl(t.length) && !El(t)
    }
    var Dn = wl,
        Ol = Dn,
        kl = zt;

    function Tl(t) {
        return kl(t) && Ol(t)
    }
    var xl = Tl,
        hr = {
            exports: {}
        };

    function Rl() {
        return !1
    }
    var Al = Rl;
    hr.exports;
    (function(t, e) {
        var r = Et,
            n = Al,
            i = e && !e.nodeType && e,
            o = i && !0 && t && !t.nodeType && t,
            s = o && o.exports === i,
            a = s ? r.Buffer : void 0,
            u = a ? a.isBuffer : void 0,
            f = u || n;
        t.exports = f
    })(hr, hr.exports);
    var Co = hr.exports,
        Il = Rr,
        Pl = Io,
        Nl = zt,
        Dl = "[object Object]",
        $l = Function.prototype,
        Ll = Object.prototype,
        jo = $l.toString,
        Cl = Ll.hasOwnProperty,
        jl = jo.call(Object);

    function Ul(t) {
        if (!Nl(t) || Il(t) != Dl) return !1;
        var e = Pl(t);
        if (e === null) return !0;
        var r = Cl.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && jo.call(r) == jl
    }
    var Ml = Ul,
        Bl = Rr,
        Fl = Lo,
        ql = zt,
        Gl = "[object Arguments]",
        Yl = "[object Array]",
        Hl = "[object Boolean]",
        Wl = "[object Date]",
        zl = "[object Error]",
        Kl = "[object Function]",
        Vl = "[object Map]",
        Jl = "[object Number]",
        Xl = "[object Object]",
        Ql = "[object RegExp]",
        Zl = "[object Set]",
        ep = "[object String]",
        tp = "[object WeakMap]",
        rp = "[object ArrayBuffer]",
        np = "[object DataView]",
        ip = "[object Float32Array]",
        op = "[object Float64Array]",
        sp = "[object Int8Array]",
        ap = "[object Int16Array]",
        cp = "[object Int32Array]",
        up = "[object Uint8Array]",
        fp = "[object Uint8ClampedArray]",
        lp = "[object Uint16Array]",
        pp = "[object Uint32Array]",
        H = {};
    H[ip] = H[op] = H[sp] = H[ap] = H[cp] = H[up] = H[fp] = H[lp] = H[pp] = !0;
    H[Gl] = H[Yl] = H[rp] = H[Hl] = H[np] = H[Wl] = H[zl] = H[Kl] = H[Vl] = H[Jl] = H[Xl] = H[Ql] = H[Zl] = H[ep] = H[tp] = !1;

    function dp(t) {
        return ql(t) && Fl(t.length) && !!H[Bl(t)]
    }
    var hp = dp;

    function _p(t) {
        return function(e) {
            return t(e)
        }
    }
    var gp = _p,
        _r = {
            exports: {}
        };
    _r.exports;
    (function(t, e) {
        var r = Oo,
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
    var yp = _r.exports,
        mp = hp,
        vp = gp,
        vi = yp,
        bi = vi && vi.isTypedArray,
        bp = bi ? vp(bi) : mp,
        Uo = bp;

    function Ep(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var Mo = Ep,
        Sp = Nn,
        wp = kr,
        Op = Object.prototype,
        kp = Op.hasOwnProperty;

    function Tp(t, e, r) {
        var n = t[e];
        (!(kp.call(t, e) && wp(n, r)) || r === void 0 && !(e in t)) && Sp(t, e, r)
    }
    var xp = Tp,
        Rp = xp,
        Ap = Nn;

    function Ip(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, s = e.length; ++o < s;) {
            var a = e[o],
                u = n ? n(r[a], t[a], a, r, t) : void 0;
            u === void 0 && (u = t[a]), i ? Ap(r, a, u) : Rp(r, a, u)
        }
        return r
    }
    var Pp = Ip;

    function Np(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var Dp = Np,
        $p = 9007199254740991,
        Lp = /^(?:0|[1-9]\d*)$/;

    function Cp(t, e) {
        var r = typeof t;
        return e = e ?? $p, !!e && (r == "number" || r != "symbol" && Lp.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var Bo = Cp,
        jp = Dp,
        Up = Do,
        Mp = $o,
        Bp = Co,
        Fp = Bo,
        qp = Uo,
        Gp = Object.prototype,
        Yp = Gp.hasOwnProperty;

    function Hp(t, e) {
        var r = Mp(t),
            n = !r && Up(t),
            i = !r && !n && Bp(t),
            o = !r && !n && !i && qp(t),
            s = r || n || i || o,
            a = s ? jp(t.length, String) : [],
            u = a.length;
        for (var f in t)(e || Yp.call(t, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Fp(f, u))) && a.push(f);
        return a
    }
    var Wp = Hp;

    function zp(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var Kp = zp,
        Vp = Xe,
        Jp = Po,
        Xp = Kp,
        Qp = Object.prototype,
        Zp = Qp.hasOwnProperty;

    function ed(t) {
        if (!Vp(t)) return Xp(t);
        var e = Jp(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !Zp.call(t, n)) || r.push(n);
        return r
    }
    var td = ed,
        rd = Wp,
        nd = td,
        id = Dn;

    function od(t) {
        return id(t) ? rd(t, !0) : nd(t)
    }
    var Fo = od,
        sd = Pp,
        ad = Fo;

    function cd(t) {
        return sd(t, ad(t))
    }
    var ud = cd,
        Ei = Ao,
        fd = jf,
        ld = Hf,
        pd = zf,
        dd = al,
        Si = Do,
        wi = $o,
        hd = xl,
        _d = Co,
        gd = In,
        yd = Xe,
        md = Ml,
        vd = Uo,
        Oi = Mo,
        bd = ud;

    function Ed(t, e, r, n, i, o, s) {
        var a = Oi(t, r),
            u = Oi(e, r),
            f = s.get(u);
        if (f) {
            Ei(t, r, f);
            return
        }
        var h = o ? o(a, u, r + "", t, e, s) : void 0,
            y = h === void 0;
        if (y) {
            var m = wi(u),
                b = !m && _d(u),
                S = !m && !b && vd(u);
            h = u, m || b || S ? wi(a) ? h = a : hd(a) ? h = pd(a) : b ? (y = !1, h = fd(u, !0)) : S ? (y = !1, h = ld(u, !0)) : h = [] : md(u) || Si(u) ? (h = a, Si(a) ? h = bd(a) : (!yd(a) || gd(a)) && (h = dd(u))) : y = !1
        }
        y && (s.set(u, h), i(h, u, n, o, s), s.delete(u)), Ei(t, r, h)
    }
    var Sd = Ed,
        wd = kf,
        Od = Ao,
        kd = Cf,
        Td = Sd,
        xd = Xe,
        Rd = Fo,
        Ad = Mo;

    function qo(t, e, r, n, i) {
        t !== e && kd(e, function(o, s) {
            if (i || (i = new wd), xd(o)) Td(t, e, s, r, qo, n, i);
            else {
                var a = n ? n(Ad(t, s), o, s + "", t, e, i) : void 0;
                a === void 0 && (a = o), Od(t, s, a)
            }
        }, Rd)
    }
    var Id = qo;

    function Pd(t) {
        return t
    }
    var Go = Pd;

    function Nd(t, e, r) {
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
    var Dd = Nd,
        $d = Dd,
        ki = Math.max;

    function Ld(t, e, r) {
        return e = ki(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, o = ki(n.length - e, 0), s = Array(o); ++i < o;) s[i] = n[e + i];
                i = -1;
                for (var a = Array(e + 1); ++i < e;) a[i] = n[i];
                return a[e] = r(s), $d(t, this, a)
            }
    }
    var Cd = Ld;

    function jd(t) {
        return function() {
            return t
        }
    }
    var Ud = jd,
        Md = Ud,
        Ti = Ro,
        Bd = Go,
        Fd = Ti ? function(t, e) {
            return Ti(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Md(e),
                writable: !0
            })
        } : Bd,
        qd = Fd,
        Gd = 800,
        Yd = 16,
        Hd = Date.now;

    function Wd(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = Hd(),
                i = Yd - (n - r);
            if (r = n, i > 0) {
                if (++e >= Gd) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var zd = Wd,
        Kd = qd,
        Vd = zd,
        Jd = Vd(Kd),
        Xd = Jd,
        Qd = Go,
        Zd = Cd,
        eh = Xd;

    function th(t, e) {
        return eh(Zd(t, e, Qd), t + "")
    }
    var rh = th,
        nh = kr,
        ih = Dn,
        oh = Bo,
        sh = Xe;

    function ah(t, e, r) {
        if (!sh(r)) return !1;
        var n = typeof e;
        return (n == "number" ? ih(r) && oh(e, r.length) : n == "string" && e in r) ? nh(r[e], t) : !1
    }
    var ch = ah,
        uh = rh,
        fh = ch;

    function lh(t) {
        return uh(function(e, r) {
            var n = -1,
                i = r.length,
                o = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && fh(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                var a = r[n];
                a && t(e, a, n, o)
            }
            return e
        })
    }
    var ph = lh,
        dh = Id,
        hh = ph;
    hh(function(t, e, r) {
        dh(t, e, r)
    });
    const nt = class nt {
        static get serverUrl() {
            const e = this.getQueryParam("server") ?? this.getQueryParam("s");
            return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
        }
        static get isCanvasSupported() {
            const e = document.createElement("canvas");
            return !!(e.getContext && e.getContext("2d"))
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
    fe(nt, "queryParams", new URLSearchParams(window.location.search)), fe(nt, "getQueryParam", e => nt.queryParams.get(e)), fe(nt, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    let rt = nt;
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
                namespace: rt.getQueryParam("namespace") ?? rt.getQueryParam("ns") ?? this.defaultNamespace,
                isDisabled: rt.queryParams.has("incognito") || rt.queryParams.has("nc")
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
    fe(gr, "defaultNamespace", "tv");
    var xi = {
        exports: {}
    };
    (function(t, e) {
        var r = typeof self < "u" ? self : de,
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

                function u(v) {
                    return v && DataView.prototype.isPrototypeOf(v)
                }
                if (a.arrayBuffer) var f = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    h = ArrayBuffer.isView || function(v) {
                        return v && f.indexOf(Object.prototype.toString.call(v)) > -1
                    };

                function y(v) {
                    if (typeof v != "string" && (v = String(v)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(v)) throw new TypeError("Invalid character in header field name");
                    return v.toLowerCase()
                }

                function m(v) {
                    return typeof v != "string" && (v = String(v)), v
                }

                function b(v) {
                    var k = {
                        next: function() {
                            var N = v.shift();
                            return {
                                done: N === void 0,
                                value: N
                            }
                        }
                    };
                    return a.iterable && (k[Symbol.iterator] = function() {
                        return k
                    }), k
                }

                function S(v) {
                    this.map = {}, v instanceof S ? v.forEach(function(k, N) {
                        this.append(N, k)
                    }, this) : Array.isArray(v) ? v.forEach(function(k) {
                        this.append(k[0], k[1])
                    }, this) : v && Object.getOwnPropertyNames(v).forEach(function(k) {
                        this.append(k, v[k])
                    }, this)
                }
                S.prototype.append = function(v, k) {
                    v = y(v), k = m(k);
                    var N = this.map[v];
                    this.map[v] = N ? N + ", " + k : k
                }, S.prototype.delete = function(v) {
                    delete this.map[y(v)]
                }, S.prototype.get = function(v) {
                    return v = y(v), this.has(v) ? this.map[v] : null
                }, S.prototype.has = function(v) {
                    return this.map.hasOwnProperty(y(v))
                }, S.prototype.set = function(v, k) {
                    this.map[y(v)] = m(k)
                }, S.prototype.forEach = function(v, k) {
                    for (var N in this.map) this.map.hasOwnProperty(N) && v.call(k, this.map[N], N, this)
                }, S.prototype.keys = function() {
                    var v = [];
                    return this.forEach(function(k, N) {
                        v.push(N)
                    }), b(v)
                }, S.prototype.values = function() {
                    var v = [];
                    return this.forEach(function(k) {
                        v.push(k)
                    }), b(v)
                }, S.prototype.entries = function() {
                    var v = [];
                    return this.forEach(function(k, N) {
                        v.push([N, k])
                    }), b(v)
                }, a.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);

                function I(v) {
                    if (v.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    v.bodyUsed = !0
                }

                function P(v) {
                    return new Promise(function(k, N) {
                        v.onload = function() {
                            k(v.result)
                        }, v.onerror = function() {
                            N(v.error)
                        }
                    })
                }

                function z(v) {
                    var k = new FileReader,
                        N = P(k);
                    return k.readAsArrayBuffer(v), N
                }

                function U(v) {
                    var k = new FileReader,
                        N = P(k);
                    return k.readAsText(v), N
                }

                function ae(v) {
                    for (var k = new Uint8Array(v), N = new Array(k.length), V = 0; V < k.length; V++) N[V] = String.fromCharCode(k[V]);
                    return N.join("")
                }

                function ve(v) {
                    if (v.slice) return v.slice(0);
                    var k = new Uint8Array(v.byteLength);
                    return k.set(new Uint8Array(v)), k.buffer
                }

                function ce() {
                    return this.bodyUsed = !1, this._initBody = function(v) {
                        this._bodyInit = v, v ? typeof v == "string" ? this._bodyText = v : a.blob && Blob.prototype.isPrototypeOf(v) ? this._bodyBlob = v : a.formData && FormData.prototype.isPrototypeOf(v) ? this._bodyFormData = v : a.searchParams && URLSearchParams.prototype.isPrototypeOf(v) ? this._bodyText = v.toString() : a.arrayBuffer && a.blob && u(v) ? (this._bodyArrayBuffer = ve(v.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(v) || h(v)) ? this._bodyArrayBuffer = ve(v) : this._bodyText = v = Object.prototype.toString.call(v) : this._bodyText = "", this.headers.get("content-type") || (typeof v == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(v) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, a.blob && (this.blob = function() {
                        var v = I(this);
                        if (v) return v;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? I(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(z)
                    }), this.text = function() {
                        var v = I(this);
                        if (v) return v;
                        if (this._bodyBlob) return U(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, a.formData && (this.formData = function() {
                        return this.text().then(F)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var le = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function he(v) {
                    var k = v.toUpperCase();
                    return le.indexOf(k) > -1 ? k : v
                }

                function Z(v, k) {
                    k = k || {};
                    var N = k.body;
                    if (v instanceof Z) {
                        if (v.bodyUsed) throw new TypeError("Already read");
                        this.url = v.url, this.credentials = v.credentials, k.headers || (this.headers = new S(v.headers)), this.method = v.method, this.mode = v.mode, this.signal = v.signal, !N && v._bodyInit != null && (N = v._bodyInit, v.bodyUsed = !0)
                    } else this.url = String(v);
                    if (this.credentials = k.credentials || this.credentials || "same-origin", (k.headers || !this.headers) && (this.headers = new S(k.headers)), this.method = he(k.method || this.method || "GET"), this.mode = k.mode || this.mode || null, this.signal = k.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && N) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(N)
                }
                Z.prototype.clone = function() {
                    return new Z(this, {
                        body: this._bodyInit
                    })
                };

                function F(v) {
                    var k = new FormData;
                    return v.trim().split("&").forEach(function(N) {
                        if (N) {
                            var V = N.split("="),
                                Y = V.shift().replace(/\+/g, " "),
                                L = V.join("=").replace(/\+/g, " ");
                            k.append(decodeURIComponent(Y), decodeURIComponent(L))
                        }
                    }), k
                }

                function jr(v) {
                    var k = new S,
                        N = v.replace(/\r?\n[\t ]+/g, " ");
                    return N.split(/\r?\n/).forEach(function(V) {
                        var Y = V.split(":"),
                            L = Y.shift().trim();
                        if (L) {
                            var j = Y.join(":").trim();
                            k.append(L, j)
                        }
                    }), k
                }
                ce.call(Z.prototype);

                function _e(v, k) {
                    k || (k = {}), this.type = "default", this.status = k.status === void 0 ? 200 : k.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in k ? k.statusText : "OK", this.headers = new S(k.headers), this.url = k.url || "", this._initBody(v)
                }
                ce.call(_e.prototype), _e.prototype.clone = function() {
                    return new _e(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new S(this.headers),
                        url: this.url
                    })
                }, _e.error = function() {
                    var v = new _e(null, {
                        status: 0,
                        statusText: ""
                    });
                    return v.type = "error", v
                };
                var Rt = [301, 302, 303, 307, 308];
                _e.redirect = function(v, k) {
                    if (Rt.indexOf(k) === -1) throw new RangeError("Invalid status code");
                    return new _e(null, {
                        status: k,
                        headers: {
                            location: v
                        }
                    })
                }, s.DOMException = o.DOMException;
                try {
                    new s.DOMException
                } catch {
                    s.DOMException = function(k, N) {
                        this.message = k, this.name = N;
                        var V = Error(k);
                        this.stack = V.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function Te(v, k) {
                    return new Promise(function(N, V) {
                        var Y = new Z(v, k);
                        if (Y.signal && Y.signal.aborted) return V(new s.DOMException("Aborted", "AbortError"));
                        var L = new XMLHttpRequest;

                        function j() {
                            L.abort()
                        }
                        L.onload = function() {
                            var ee = {
                                status: L.status,
                                statusText: L.statusText,
                                headers: jr(L.getAllResponseHeaders() || "")
                            };
                            ee.url = "responseURL" in L ? L.responseURL : ee.headers.get("X-Request-URL");
                            var te = "response" in L ? L.response : L.responseText;
                            N(new _e(te, ee))
                        }, L.onerror = function() {
                            V(new TypeError("Network request failed"))
                        }, L.ontimeout = function() {
                            V(new TypeError("Network request failed"))
                        }, L.onabort = function() {
                            V(new s.DOMException("Aborted", "AbortError"))
                        }, L.open(Y.method, Y.url, !0), Y.credentials === "include" ? L.withCredentials = !0 : Y.credentials === "omit" && (L.withCredentials = !1), "responseType" in L && a.blob && (L.responseType = "blob"), Y.headers.forEach(function(ee, te) {
                            L.setRequestHeader(te, ee)
                        }), Y.signal && (Y.signal.addEventListener("abort", j), L.onreadystatechange = function() {
                            L.readyState === 4 && Y.signal.removeEventListener("abort", j)
                        }), L.send(typeof Y._bodyInit > "u" ? null : Y._bodyInit)
                    })
                }
                return Te.polyfill = !0, o.fetch || (o.fetch = Te, o.Headers = S, o.Request = Z, o.Response = _e), s.Headers = S, s.Request = Z, s.Response = _e, s.fetch = Te, Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = n;
        e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
    })(xi, xi.exports);
    var _h = function() {
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
        Ri = typeof Symbol < "u" && Symbol,
        gh = _h,
        yh = function() {
            return typeof Ri != "function" || typeof Symbol != "function" || typeof Ri("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : gh()
        },
        mh = "Function.prototype.bind called on incompatible ",
        Wr = Array.prototype.slice,
        vh = Object.prototype.toString,
        bh = "[object Function]",
        Eh = function(e) {
            var r = this;
            if (typeof r != "function" || vh.call(r) !== bh) throw new TypeError(mh + r);
            for (var n = Wr.call(arguments, 1), i, o = function() {
                    if (this instanceof i) {
                        var h = r.apply(this, n.concat(Wr.call(arguments)));
                        return Object(h) === h ? h : this
                    } else return r.apply(e, n.concat(Wr.call(arguments)))
                }, s = Math.max(0, r.length - n.length), a = [], u = 0; u < s; u++) a.push("$" + u);
            if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
                var f = function() {};
                f.prototype = r.prototype, i.prototype = new f, f.prototype = null
            }
            return i
        },
        Sh = Eh,
        $n = Function.prototype.bind || Sh,
        wh = $n,
        Oh = wh.call(Function.call, Object.prototype.hasOwnProperty),
        C, _t = SyntaxError,
        Yo = Function,
        ot = TypeError,
        zr = function(t) {
            try {
                return Yo('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        He = Object.getOwnPropertyDescriptor;
    if (He) try {
        He({}, "")
    } catch {
        He = null
    }
    var Kr = function() {
            throw new ot
        },
        kh = He ? function() {
            try {
                return arguments.callee, Kr
            } catch {
                try {
                    return He(arguments, "callee").get
                } catch {
                    return Kr
                }
            }
        }() : Kr,
        Ze = yh(),
        Pe = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        et = {},
        Th = typeof Uint8Array > "u" ? C : Pe(Uint8Array),
        st = {
            "%AggregateError%": typeof AggregateError > "u" ? C : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? C : ArrayBuffer,
            "%ArrayIteratorPrototype%": Ze ? Pe([][Symbol.iterator]()) : C,
            "%AsyncFromSyncIteratorPrototype%": C,
            "%AsyncFunction%": et,
            "%AsyncGenerator%": et,
            "%AsyncGeneratorFunction%": et,
            "%AsyncIteratorPrototype%": et,
            "%Atomics%": typeof Atomics > "u" ? C : Atomics,
            "%BigInt%": typeof BigInt > "u" ? C : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? C : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? C : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? C : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? C : FinalizationRegistry,
            "%Function%": Yo,
            "%GeneratorFunction%": et,
            "%Int8Array%": typeof Int8Array > "u" ? C : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? C : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? C : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": Ze ? Pe(Pe([][Symbol.iterator]())) : C,
            "%JSON%": typeof JSON == "object" ? JSON : C,
            "%Map%": typeof Map > "u" ? C : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !Ze ? C : Pe(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? C : Promise,
            "%Proxy%": typeof Proxy > "u" ? C : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? C : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? C : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !Ze ? C : Pe(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? C : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": Ze ? Pe("" [Symbol.iterator]()) : C,
            "%Symbol%": Ze ? Symbol : C,
            "%SyntaxError%": _t,
            "%ThrowTypeError%": kh,
            "%TypedArray%": Th,
            "%TypeError%": ot,
            "%Uint8Array%": typeof Uint8Array > "u" ? C : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? C : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? C : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? C : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? C : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? C : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? C : WeakSet
        },
        xh = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = zr("async function () {}");
            else if (e === "%GeneratorFunction%") r = zr("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = zr("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var i = t("%AsyncGenerator%");
                i && (r = Pe(i.prototype))
            }
            return st[e] = r, r
        },
        Ai = {
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
        Kt = $n,
        yr = Oh,
        Rh = Kt.call(Function.call, Array.prototype.concat),
        Ah = Kt.call(Function.apply, Array.prototype.splice),
        Ii = Kt.call(Function.call, String.prototype.replace),
        mr = Kt.call(Function.call, String.prototype.slice),
        Ih = Kt.call(Function.call, RegExp.prototype.exec),
        Ph = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        Nh = /\\(\\)?/g,
        Dh = function(e) {
            var r = mr(e, 0, 1),
                n = mr(e, -1);
            if (r === "%" && n !== "%") throw new _t("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new _t("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return Ii(e, Ph, function(o, s, a, u) {
                i[i.length] = a ? Ii(u, Nh, "$1") : s || o
            }), i
        },
        $h = function(e, r) {
            var n = e,
                i;
            if (yr(Ai, n) && (i = Ai[n], n = "%" + i[0] + "%"), yr(st, n)) {
                var o = st[n];
                if (o === et && (o = xh(n)), typeof o > "u" && !r) throw new ot("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: o
                }
            }
            throw new _t("intrinsic " + e + " does not exist!")
        },
        Ln = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new ot("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new ot('"allowMissing" argument must be a boolean');
            if (Ih(/^%?[^%]*%?$/g, e) === null) throw new _t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = Dh(e),
                i = n.length > 0 ? n[0] : "",
                o = $h("%" + i + "%", r),
                s = o.name,
                a = o.value,
                u = !1,
                f = o.alias;
            f && (i = f[0], Ah(n, Rh([0, 1], f)));
            for (var h = 1, y = !0; h < n.length; h += 1) {
                var m = n[h],
                    b = mr(m, 0, 1),
                    S = mr(m, -1);
                if ((b === '"' || b === "'" || b === "`" || S === '"' || S === "'" || S === "`") && b !== S) throw new _t("property names with quotes must have matching quotes");
                if ((m === "constructor" || !y) && (u = !0), i += "." + m, s = "%" + i + "%", yr(st, s)) a = st[s];
                else if (a != null) {
                    if (!(m in a)) {
                        if (!r) throw new ot("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (He && h + 1 >= n.length) {
                        var I = He(a, m);
                        y = !!I, y && "get" in I && !("originalValue" in I.get) ? a = I.get : a = a[m]
                    } else y = yr(a, m), a = a[m];
                    y && !u && (st[s] = a)
                }
            }
            return a
        },
        Ho = {
            exports: {}
        };
    (function(t) {
        var e = $n,
            r = Ln,
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
            var m = o(e, i, arguments);
            if (s && a) {
                var b = s(m, "length");
                b.configurable && a(m, "length", {
                    value: 1 + u(0, y.length - (arguments.length - 1))
                })
            }
            return m
        };
        var f = function() {
            return o(e, n, arguments)
        };
        a ? a(t.exports, "apply", {
            value: f
        }) : t.exports.apply = f
    })(Ho);
    var Lh = Ho.exports,
        Wo = Ln,
        zo = Lh,
        Ch = zo(Wo("String.prototype.indexOf")),
        jh = function(e, r) {
            var n = Wo(e, !!r);
            return typeof n == "function" && Ch(e, ".prototype.") > -1 ? zo(n) : n
        },
        Cn = Ln,
        kt = jh;
    Cn("%TypeError%");
    Cn("%WeakMap%", !0);
    Cn("%Map%", !0);
    kt("WeakMap.prototype.get", !0);
    kt("WeakMap.prototype.set", !0);
    kt("WeakMap.prototype.has", !0);
    kt("Map.prototype.get", !0);
    kt("Map.prototype.set", !0);
    kt("Map.prototype.has", !0);
    var Uh = String.prototype.replace,
        Mh = /%20/g,
        Vr = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Ko = {
            default: Vr.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return Uh.call(t, Mh, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: Vr.RFC1738,
            RFC3986: Vr.RFC3986
        },
        Bh = Ko,
        Jr = Object.prototype.hasOwnProperty,
        Ge = Array.isArray,
        Oe = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        Fh = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];
                if (Ge(n)) {
                    for (var i = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && i.push(n[o]);
                    r.obj[r.prop] = i
                }
            }
        },
        Vo = function(e, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
            return n
        },
        qh = function t(e, r, n) {
            if (!r) return e;
            if (typeof r != "object") {
                if (Ge(e)) e.push(r);
                else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !Jr.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var i = e;
            return Ge(e) && !Ge(r) && (i = Vo(e, n)), Ge(e) && Ge(r) ? (r.forEach(function(o, s) {
                if (Jr.call(e, s)) {
                    var a = e[s];
                    a && typeof a == "object" && o && typeof o == "object" ? e[s] = t(a, o, n) : e.push(o)
                } else e[s] = o
            }), e) : Object.keys(r).reduce(function(o, s) {
                var a = r[s];
                return Jr.call(o, s) ? o[s] = t(o[s], a, n) : o[s] = a, o
            }, i)
        },
        Gh = function(e, r) {
            return Object.keys(r).reduce(function(n, i) {
                return n[i] = r[i], n
            }, e)
        },
        Yh = function(t, e, r) {
            var n = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        Hh = function(e, r, n, i, o) {
            if (e.length === 0) return e;
            var s = e;
            if (typeof e == "symbol" ? s = Symbol.prototype.toString.call(e) : typeof e != "string" && (s = String(e)), n === "iso-8859-1") return escape(s).replace(/%u[0-9a-f]{4}/gi, function(h) {
                return "%26%23" + parseInt(h.slice(2), 16) + "%3B"
            });
            for (var a = "", u = 0; u < s.length; ++u) {
                var f = s.charCodeAt(u);
                if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || o === Bh.RFC1738 && (f === 40 || f === 41)) {
                    a += s.charAt(u);
                    continue
                }
                if (f < 128) {
                    a = a + Oe[f];
                    continue
                }
                if (f < 2048) {
                    a = a + (Oe[192 | f >> 6] + Oe[128 | f & 63]);
                    continue
                }
                if (f < 55296 || f >= 57344) {
                    a = a + (Oe[224 | f >> 12] + Oe[128 | f >> 6 & 63] + Oe[128 | f & 63]);
                    continue
                }
                u += 1, f = 65536 + ((f & 1023) << 10 | s.charCodeAt(u) & 1023), a += Oe[240 | f >> 18] + Oe[128 | f >> 12 & 63] + Oe[128 | f >> 6 & 63] + Oe[128 | f & 63]
            }
            return a
        },
        Wh = function(e) {
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
            return Fh(r), e
        },
        zh = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        Kh = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        Vh = function(e, r) {
            return [].concat(e, r)
        },
        Jh = function(e, r) {
            if (Ge(e)) {
                for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
                return n
            }
            return r(e)
        },
        Jo = {
            arrayToObject: Vo,
            assign: Gh,
            combine: Vh,
            compact: Wh,
            decode: Yh,
            encode: Hh,
            isBuffer: Kh,
            isRegExp: zh,
            maybeMap: Jh,
            merge: qh
        },
        Xh = Jo,
        Xo = Ko,
        Qh = Date.prototype.toISOString,
        Pi = Xo.default;
    Xh.encode, Xo.formatters[Pi];
    var Zh = Jo;
    Zh.decode;
    typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof de < "u" && (de.WebSocket || de.MozWebSocket));
    var Qo = {
            exports: {}
        },
        at = typeof Reflect == "object" ? Reflect : null,
        Ni = at && typeof at.apply == "function" ? at.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        sr;
    at && typeof at.ownKeys == "function" ? sr = at.ownKeys : Object.getOwnPropertySymbols ? sr = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : sr = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function e_(t) {
        console && console.warn && console.warn(t)
    }
    var Zo = Number.isNaN || function(e) {
        return e !== e
    };

    function B() {
        B.init.call(this)
    }
    Qo.exports = B;
    Qo.exports.once = i_;
    B.EventEmitter = B;
    B.prototype._events = void 0;
    B.prototype._eventsCount = 0;
    B.prototype._maxListeners = void 0;
    var Di = 10;

    function Pr(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(B, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Di
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || Zo(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            Di = t
        }
    });
    B.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    B.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || Zo(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function es(t) {
        return t._maxListeners === void 0 ? B.defaultMaxListeners : t._maxListeners
    }
    B.prototype.getMaxListeners = function() {
        return es(this)
    };
    B.prototype.emit = function(e) {
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
        if (typeof u == "function") Ni(u, this, r);
        else
            for (var f = u.length, h = os(u, f), n = 0; n < f; ++n) Ni(h[n], this, r);
        return !0
    };

    function ts(t, e, r, n) {
        var i, o, s;
        if (Pr(r), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), s === void 0) s = o[e] = r, ++t._eventsCount;
        else if (typeof s == "function" ? s = o[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = es(t), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, e_(a)
        }
        return t
    }
    B.prototype.addListener = function(e, r) {
        return ts(this, e, r, !1)
    };
    B.prototype.on = B.prototype.addListener;
    B.prototype.prependListener = function(e, r) {
        return ts(this, e, r, !0)
    };

    function t_() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function rs(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = t_.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    B.prototype.once = function(e, r) {
        return Pr(r), this.on(e, rs(this, e, r)), this
    };
    B.prototype.prependOnceListener = function(e, r) {
        return Pr(r), this.prependListener(e, rs(this, e, r)), this
    };
    B.prototype.removeListener = function(e, r) {
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
            o === 0 ? n.shift() : r_(n, o), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r)
        }
        return this
    };
    B.prototype.off = B.prototype.removeListener;
    B.prototype.removeAllListeners = function(e) {
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

    function ns(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? n_(i) : os(i, i.length)
    }
    B.prototype.listeners = function(e) {
        return ns(this, e, !0)
    };
    B.prototype.rawListeners = function(e) {
        return ns(this, e, !1)
    };
    B.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : is.call(t, e)
    };
    B.prototype.listenerCount = is;

    function is(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    B.prototype.eventNames = function() {
        return this._eventsCount > 0 ? sr(this._events) : []
    };

    function os(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function r_(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function n_(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function i_(t, e) {
        return new Promise(function(r, n) {
            function i(s) {
                t.removeListener(e, o), n(s)
            }

            function o() {
                typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
            }
            ss(t, e, o, {
                once: !0
            }), e !== "error" && o_(t, i, {
                once: !0
            })
        })
    }

    function o_(t, e, r) {
        typeof t.on == "function" && ss(t, "error", e, r)
    }

    function ss(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }
    const s_ = [{
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
            categoryId: "TeeKO2Game"
        }, {
            name: "Dodo Re Mi",
            tag: "nopus-opus",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/nopus-opus",
            features: ["dropInDropOut", "kicking"],
            shopItems: [],
            categoryId: "NopusOpusGame"
        }, {
            name: "FixyText",
            tag: "risky-text",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/risky-text",
            features: ["moderation", "kicking"],
            shopItems: [],
            categoryId: "RiskyTextGame"
        }, {
            name: "Timejinx",
            tag: "time-trivia",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/time-trivia",
            features: ["kicking"],
            shopItems: [],
            categoryId: "TimeTriviaGame"
        }, {
            name: "Hypnotorious",
            tag: "us-them",
            wrapper: "vue",
            isPublic: !0,
            directory: "pp10/us-them",
            features: ["moderation", "kicking"],
            shopItems: [],
            categoryId: "UsThemGame"
        }],
        $i = t => s_.find(e => e.tag === t || e.galleryId === t || e.categoryId === t);

    function a_(...t) {
        console.log(...t)
    }

    function c_(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Li = {
        exports: {}
    };
    (function(t, e) {
        (function(r, n) {
            n(e)
        })(de, function(r) {
            var n = typeof window < "u" ? window : typeof de < "u" ? de : typeof self < "u" ? self : {},
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
                        w = a(l[2]);
                    _ === null || w === null || _ in g || (g[_] = w)
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
            var y = h,
                m = f,
                b = {
                    stringify: y,
                    parse: m
                },
                S = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                I = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                P = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                z = new RegExp("^" + P + "+");

            function U(d) {
                return (d || "").toString().replace(z, "")
            }
            var ae = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(p, g) {
                        return le(g.protocol) ? p.replace(/\\/g, "/") : p
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                ve = {
                    hash: 1,
                    query: 1
                };

            function ce(d) {
                var p;
                typeof window < "u" ? p = window : typeof n < "u" ? p = n : typeof self < "u" ? p = self : p = {};
                var g = p.location || {};
                d = d || g;
                var l = {},
                    _ = typeof d,
                    w;
                if (d.protocol === "blob:") l = new F(unescape(d.pathname), {});
                else if (_ === "string") {
                    l = new F(d, {});
                    for (w in ve) delete l[w]
                } else if (_ === "object") {
                    for (w in d) w in ve || (l[w] = d[w]);
                    l.slashes === void 0 && (l.slashes = S.test(d.href))
                }
                return l
            }

            function le(d) {
                return d === "file:" || d === "ftp:" || d === "http:" || d === "https:" || d === "ws:" || d === "wss:"
            }

            function he(d, p) {
                d = U(d), p = p || {};
                var g = I.exec(d),
                    l = g[1] ? g[1].toLowerCase() : "",
                    _ = !!g[2],
                    w = !!g[3],
                    O = 0,
                    T;
                return _ ? w ? (T = g[2] + g[3] + g[4], O = g[2].length + g[3].length) : (T = g[2] + g[4], O = g[2].length) : w ? (T = g[3] + g[4], O = g[3].length) : T = g[4], l === "file:" ? O >= 2 && (T = T.slice(2)) : le(l) ? T = g[4] : l ? _ && (T = T.slice(2)) : O >= 2 && le(p.protocol) && (T = g[4]), {
                    protocol: l,
                    slashes: _ || le(l),
                    slashesCount: O,
                    rest: T
                }
            }

            function Z(d, p) {
                if (d === "") return p;
                for (var g = (p || "/").split("/").slice(0, -1).concat(d.split("/")), l = g.length, _ = g[l - 1], w = !1, O = 0; l--;) g[l] === "." ? g.splice(l, 1) : g[l] === ".." ? (g.splice(l, 1), O++) : O && (l === 0 && (w = !0), g.splice(l, 1), O--);
                return w && g.unshift(""), (_ === "." || _ === "..") && g.push(""), g.join("/")
            }

            function F(d, p, g) {
                if (d = U(d), !(this instanceof F)) return new F(d, p, g);
                var l, _, w, O, T, x, ue = ae.slice(),
                    be = typeof p,
                    R = this,
                    Fr = 0;
                for (be !== "object" && be !== "string" && (g = p, p = null), g && typeof g != "function" && (g = b.parse), p = ce(p), _ = he(d || "", p), l = !_.protocol && !_.slashes, R.slashes = _.slashes || l && p.slashes, R.protocol = _.protocol || p.protocol || "", d = _.rest, (R.protocol === "file:" || !_.slashes && (_.protocol || _.slashesCount < 2 || !le(R.protocol))) && (ue[3] = [/(.*)/, "pathname"]); Fr < ue.length; Fr++) {
                    if (O = ue[Fr], typeof O == "function") {
                        d = O(d, R);
                        continue
                    }
                    w = O[0], x = O[1], w !== w ? R[x] = d : typeof w == "string" ? ~(T = d.indexOf(w)) && (typeof O[2] == "number" ? (R[x] = d.slice(0, T), d = d.slice(T + O[2])) : (R[x] = d.slice(T), d = d.slice(0, T))) : (T = w.exec(d)) && (R[x] = T[1], d = d.slice(0, T.index)), R[x] = R[x] || l && O[3] && p[x] || "", O[4] && (R[x] = R[x].toLowerCase())
                }
                g && (R.query = g(R.query)), l && p.slashes && R.pathname.charAt(0) !== "/" && (R.pathname !== "" || p.pathname !== "") && (R.pathname = Z(R.pathname, p.pathname)), R.pathname.charAt(0) !== "/" && le(R.protocol) && (R.pathname = "/" + R.pathname), i(R.port, R.protocol) || (R.host = R.hostname, R.port = ""), R.username = R.password = "", R.auth && (O = R.auth.split(":"), R.username = O[0] || "", R.password = O[1] || ""), R.origin = R.protocol !== "file:" && le(R.protocol) && R.host ? R.protocol + "//" + R.host : "null", R.href = R.toString()
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
                for (var w = 0; w < ae.length; w++) {
                    var O = ae[w];
                    O[4] && (l[O[1]] = l[O[1]].toLowerCase())
                }
                return l.origin = l.protocol !== "file:" && le(l.protocol) && l.host ? l.protocol + "//" + l.host : "null", l.href = l.toString(), l
            }

            function _e(d) {
                (!d || typeof d != "function") && (d = b.stringify);
                var p, g = this,
                    l = g.protocol;
                l && l.charAt(l.length - 1) !== ":" && (l += ":");
                var _ = l + (g.slashes || le(g.protocol) ? "//" : "");
                return g.username && (_ += g.username, g.password && (_ += ":" + g.password), _ += "@"), _ += g.host + g.pathname, p = typeof g.query == "object" ? d(g.query) : g.query, p && (_ += p.charAt(0) !== "?" ? "?" + p : p), g.hash && (_ += g.hash), _
            }
            F.prototype = {
                set: jr,
                toString: _e
            }, F.extractProtocol = he, F.location = ce, F.trimLeft = U, F.qs = b;
            var Rt = F;

            function Te(d, p) {
                setTimeout(function(g) {
                    return d.call(g)
                }, 4, p)
            }

            function v(d, p) {
                typeof process < "u" && console[d].call(null, p)
            }

            function k(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) || g.push(l)
                }), g
            }

            function N(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) && g.push(l)
                }), g
            }
            var V = function() {
                this.listeners = {}
            };
            V.prototype.addEventListener = function(p, g) {
                typeof g == "function" && (Array.isArray(this.listeners[p]) || (this.listeners[p] = []), N(this.listeners[p], function(l) {
                    return l === g
                }).length === 0 && this.listeners[p].push(g))
            }, V.prototype.removeEventListener = function(p, g) {
                var l = this.listeners[p];
                this.listeners[p] = k(l, function(_) {
                    return _ === g
                })
            }, V.prototype.dispatchEvent = function(p) {
                for (var g = this, l = [], _ = arguments.length - 1; _-- > 0;) l[_] = arguments[_ + 1];
                var w = p.type,
                    O = this.listeners[w];
                return Array.isArray(O) ? (O.forEach(function(T) {
                    l.length > 0 ? T.apply(g, l) : T.call(g, p)
                }), !0) : !1
            };

            function Y(d) {
                var p = d.indexOf("?");
                return p >= 0 ? d.slice(0, p) : d
            }
            var L = function() {
                this.urlMap = {}
            };
            L.prototype.attachWebSocket = function(p, g) {
                var l = Y(g),
                    _ = this.urlMap[l];
                if (_ && _.server && _.websockets.indexOf(p) === -1) return _.websockets.push(p), _.server
            }, L.prototype.addMembershipToRoom = function(p, g) {
                var l = this.urlMap[Y(p.url)];
                l && l.server && l.websockets.indexOf(p) !== -1 && (l.roomMemberships[g] || (l.roomMemberships[g] = []), l.roomMemberships[g].push(p))
            }, L.prototype.attachServer = function(p, g) {
                var l = Y(g),
                    _ = this.urlMap[l];
                if (!_) return this.urlMap[l] = {
                    server: p,
                    websockets: [],
                    roomMemberships: {}
                }, p
            }, L.prototype.serverLookup = function(p) {
                var g = Y(p),
                    l = this.urlMap[g];
                if (l) return l.server
            }, L.prototype.websocketsLookup = function(p, g, l) {
                var _ = Y(p),
                    w, O = this.urlMap[_];
                if (w = O ? O.websockets : [], g) {
                    var T = O.roomMemberships[g];
                    w = T || []
                }
                return l ? w.filter(function(x) {
                    return x !== l
                }) : w
            }, L.prototype.removeServer = function(p) {
                delete this.urlMap[Y(p)]
            }, L.prototype.removeWebSocket = function(p, g) {
                var l = Y(g),
                    _ = this.urlMap[l];
                _ && (_.websockets = k(_.websockets, function(w) {
                    return w === p
                }))
            }, L.prototype.removeMembershipFromRoom = function(p, g) {
                var l = this.urlMap[Y(p.url)],
                    _ = l.roomMemberships[g];
                l && _ !== null && (l.roomMemberships[g] = k(_, function(w) {
                    return w === p
                }))
            };
            var j = new L,
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
                te = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                Qe = function() {};
            Qe.prototype.stopPropagation = function() {}, Qe.prototype.stopImmediatePropagation = function() {}, Qe.prototype.initEvent = function(p, g, l) {
                p === void 0 && (p = "undefined"), g === void 0 && (g = !1), l === void 0 && (l = !1), this.type = "" + p, this.bubbles = !!g, this.cancelable = !!l
            };
            var Hs = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(te.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(te.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var _ = l.bubbles,
                            w = l.cancelable;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = w ? !!w : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Qe),
                Ws = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(te.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(te.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            w = l.cancelable,
                            O = l.data,
                            T = l.origin,
                            x = l.lastEventId,
                            ue = l.ports;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = w ? !!w : !1, this.canncelBubble = !1, this.bubbles = _ ? !!_ : !1, this.origin = "" + T, this.ports = typeof ue > "u" ? null : ue, this.data = typeof O > "u" ? null : O, this.lastEventId = "" + (x || "")
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Qe),
                zs = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(te.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(te.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            w = l.cancelable,
                            O = l.code,
                            T = l.reason,
                            x = l.wasClean;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = w ? !!w : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1, this.code = typeof O == "number" ? parseInt(O, 10) : 0, this.reason = "" + (T || ""), this.wasClean = x ? !!x : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Qe);

            function ge(d) {
                var p = d.type,
                    g = d.target,
                    l = new Hs(p);
                return g && (l.target = g, l.srcElement = g, l.currentTarget = g), l
            }

            function At(d) {
                var p = d.type,
                    g = d.origin,
                    l = d.data,
                    _ = d.target,
                    w = new Ws(p, {
                        data: l,
                        origin: g
                    });
                return _ && (w.target = _, w.srcElement = _, w.currentTarget = _), w
            }

            function pe(d) {
                var p = d.code,
                    g = d.reason,
                    l = d.type,
                    _ = d.target,
                    w = d.wasClean;
                w || (w = p === ee.CLOSE_NORMAL || p === ee.CLOSE_NO_STATUS);
                var O = new zs(l, {
                    code: p,
                    reason: g,
                    wasClean: w
                });
                return _ && (O.target = _, O.srcElement = _, O.currentTarget = _), O
            }

            function Kn(d, p, g) {
                d.readyState = J.CLOSING;
                var l = j.serverLookup(d.url),
                    _ = pe({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: g
                    }),
                    w = pe({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: g
                    });
                Te(function() {
                    j.removeWebSocket(d, d.url), d.readyState = J.CLOSED, d.dispatchEvent(_), d.dispatchEvent(w), l && l.dispatchEvent(_, l)
                }, d)
            }

            function Ks(d, p, g) {
                d.readyState = J.CLOSING;
                var l = j.serverLookup(d.url),
                    _ = pe({
                        type: "close",
                        target: d.target,
                        code: p,
                        reason: g,
                        wasClean: !1
                    }),
                    w = pe({
                        type: "server::close",
                        target: d,
                        code: p,
                        reason: g,
                        wasClean: !1
                    }),
                    O = ge({
                        type: "error",
                        target: d.target
                    });
                Te(function() {
                    j.removeWebSocket(d, d.url), d.readyState = J.CLOSED, d.dispatchEvent(O), d.dispatchEvent(_), d.dispatchEvent(w), l && l.dispatchEvent(_, l)
                }, d)
            }

            function Xt(d) {
                return Object.prototype.toString.call(d) !== "[object Blob]" && !(d instanceof ArrayBuffer) && (d = String(d)), d
            }
            var Ur = new WeakMap;

            function Vn(d) {
                if (Ur.has(d)) return Ur.get(d);
                var p = new Proxy(d, {
                    get: function(l, _) {
                        return _ === "close" ? function(O) {
                            O === void 0 && (O = {});
                            var T = O.code || ee.CLOSE_NORMAL,
                                x = O.reason || "";
                            Kn(p, T, x)
                        } : _ === "send" ? function(O) {
                            O = Xt(O), d.dispatchEvent(At({
                                type: "message",
                                data: O,
                                origin: this.url,
                                target: d
                            }))
                        } : _ === "on" ? function(O, T) {
                            d.addEventListener("server::" + O, T)
                        } : _ === "target" ? d : l[_]
                    }
                });
                return Ur.set(d, p), p
            }

            function Vs(d) {
                var p = encodeURIComponent(d).match(/%[89ABab]/g);
                return d.length + (p ? p.length : 0)
            }

            function Js(d) {
                var p = new Rt(d),
                    g = p.pathname,
                    l = p.protocol,
                    _ = p.hash;
                if (!d) throw new TypeError(te.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (g || (p.pathname = "/"), l === "") throw new SyntaxError(te.CONSTRUCTOR_ERROR + " The URL '" + p.toString() + "' is invalid.");
                if (l !== "ws:" && l !== "wss:") throw new SyntaxError(te.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + l + "' is not allowed.");
                if (_ !== "") throw new SyntaxError(te.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + _ + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return p.toString()
            }

            function Xs(d) {
                if (d === void 0 && (d = []), !Array.isArray(d) && typeof d != "string") throw new SyntaxError(te.CONSTRUCTOR_ERROR + " The subprotocol '" + d.toString() + "' is invalid.");
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
                if (g.length > 0) throw new SyntaxError(te.CONSTRUCTOR_ERROR + " The subprotocol '" + g[0] + "' is duplicated.");
                return d
            }
            var J = function(d) {
                function p(l, _) {
                    d.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = Js(l), _ = Xs(_), this.protocol = _[0] || "", this.binaryType = "blob", this.readyState = p.CONNECTING;
                    var w = Vn(this),
                        O = j.attachWebSocket(w, this.url);
                    Te(function() {
                        if (O)
                            if (O.options.verifyClient && typeof O.options.verifyClient == "function" && !O.options.verifyClient()) this.readyState = p.CLOSED, v("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), j.removeWebSocket(w, this.url), this.dispatchEvent(ge({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(pe({
                                type: "close",
                                target: this,
                                code: ee.CLOSE_NORMAL
                            }));
                            else {
                                if (O.options.selectProtocol && typeof O.options.selectProtocol == "function") {
                                    var x = O.options.selectProtocol(_),
                                        ue = x !== "",
                                        be = _.indexOf(x) !== -1;
                                    if (ue && !be) {
                                        this.readyState = p.CLOSED, v("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), j.removeWebSocket(w, this.url), this.dispatchEvent(ge({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(pe({
                                            type: "close",
                                            target: this,
                                            code: ee.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = x
                                }
                                this.readyState = p.OPEN, this.dispatchEvent(ge({
                                    type: "open",
                                    target: this
                                })), O.dispatchEvent(ge({
                                    type: "connection"
                                }), w)
                            }
                        else this.readyState = p.CLOSED, this.dispatchEvent(ge({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(pe({
                            type: "close",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        })), v("error", "WebSocket connection to '" + this.url + "' failed")
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
                    var w = this;
                    if (this.readyState === p.CLOSING || this.readyState === p.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var O = At({
                            type: "server::message",
                            origin: this.url,
                            data: Xt(_)
                        }),
                        T = j.serverLookup(this.url);
                    T && Te(function() {
                        w.dispatchEvent(O, _)
                    }, T)
                }, p.prototype.close = function(_, w) {
                    if (_ !== void 0 && (typeof _ != "number" || _ !== 1e3 && (_ < 3e3 || _ > 4999))) throw new TypeError(te.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + _ + " is neither.");
                    if (w !== void 0) {
                        var O = Vs(w);
                        if (O > 123) throw new SyntaxError(te.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === p.CLOSING || this.readyState === p.CLOSED)) {
                        var T = Vn(this);
                        this.readyState === p.CONNECTING ? Ks(T, _ || ee.CLOSE_ABNORMAL, w) : Kn(T, _ || ee.CLOSE_NO_STATUS, w)
                    }
                }, Object.defineProperties(p.prototype, g), p
            }(V);
            J.CONNECTING = 0, J.prototype.CONNECTING = J.CONNECTING, J.OPEN = 1, J.prototype.OPEN = J.OPEN, J.CLOSING = 2, J.prototype.CLOSING = J.CLOSING, J.CLOSED = 3, J.prototype.CLOSED = J.CLOSED;
            var Qs = function(d) {
                return d.reduce(function(p, g) {
                    return p.indexOf(g) > -1 ? p : p.concat(g)
                }, [])
            };

            function Jn() {
                return typeof window < "u" ? window : typeof process == "object" && typeof c_ == "function" && typeof de == "object" ? de : this
            }
            var Xn = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                Mr = function(d) {
                    function p(g, l) {
                        l === void 0 && (l = Xn), d.call(this);
                        var _ = new Rt(g);
                        _.pathname || (_.pathname = "/"), this.url = _.toString(), this.originalWebSocket = null;
                        var w = j.attachServer(this, this.url);
                        if (!w) throw this.dispatchEvent(ge({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, Xn, l), this.options.mock && this.mockWebsocket()
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p.prototype.mockWebsocket = function() {
                        var l = Jn();
                        this.originalWebSocket = l.WebSocket, l.WebSocket = J
                    }, p.prototype.restoreWebsocket = function() {
                        var l = Jn();
                        this.originalWebSocket !== null && (l.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, p.prototype.stop = function(l) {
                        l === void 0 && (l = function() {}), this.options.mock && this.restoreWebsocket(), j.removeServer(this.url), typeof l == "function" && l()
                    }, p.prototype.on = function(l, _) {
                        this.addEventListener(l, _)
                    }, p.prototype.close = function(l) {
                        l === void 0 && (l = {});
                        var _ = l.code,
                            w = l.reason,
                            O = l.wasClean,
                            T = j.websocketsLookup(this.url);
                        j.removeServer(this.url), T.forEach(function(x) {
                            x.readyState = J.CLOSED, x.dispatchEvent(pe({
                                type: "close",
                                target: x.target,
                                code: _ || ee.CLOSE_NORMAL,
                                reason: w || "",
                                wasClean: O
                            }))
                        }), this.dispatchEvent(pe({
                            type: "close"
                        }), this)
                    }, p.prototype.emit = function(l, _, w) {
                        var O = this;
                        w === void 0 && (w = {});
                        var T = w.websockets;
                        T || (T = j.websocketsLookup(this.url)), typeof w != "object" || arguments.length > 3 ? (_ = Array.prototype.slice.call(arguments, 1, arguments.length), _ = _.map(function(x) {
                            return Xt(x)
                        })) : _ = Xt(_), T.forEach(function(x) {
                            Array.isArray(_) ? x.dispatchEvent.apply(x, [At({
                                type: l,
                                data: _,
                                origin: O.url,
                                target: x.target
                            })].concat(_)) : x.dispatchEvent(At({
                                type: l,
                                data: _,
                                origin: O.url,
                                target: x.target
                            }))
                        })
                    }, p.prototype.clients = function() {
                        return j.websocketsLookup(this.url)
                    }, p.prototype.to = function(l, _, w) {
                        var O = this;
                        w === void 0 && (w = []);
                        var T = this,
                            x = Qs(w.concat(j.websocketsLookup(this.url, l, _)));
                        return {
                            to: function(ue, be) {
                                return O.to.call(O, ue, be, x)
                            },
                            emit: function(be, R) {
                                T.emit(be, R, {
                                    websockets: x
                                })
                            }
                        }
                    }, p.prototype.in = function() {
                        for (var l = [], _ = arguments.length; _--;) l[_] = arguments[_];
                        return this.to.apply(null, l)
                    }, p.prototype.simulate = function(l) {
                        var _ = j.websocketsLookup(this.url);
                        l === "error" && _.forEach(function(w) {
                            w.readyState = J.CLOSED, w.dispatchEvent(ge({
                                type: "error"
                            }))
                        })
                    }, p
                }(V);
            Mr.of = function(p) {
                return new Mr(p)
            };
            var It = function(d) {
                function p(l, _) {
                    var w = this;
                    l === void 0 && (l = "socket.io"), _ === void 0 && (_ = ""), d.call(this), this.binaryType = "blob";
                    var O = new Rt(l);
                    O.pathname || (O.pathname = "/"), this.url = O.toString(), this.readyState = p.CONNECTING, this.protocol = "", this.target = this, typeof _ == "string" || typeof _ == "object" && _ !== null ? this.protocol = _ : Array.isArray(_) && _.length > 0 && (this.protocol = _[0]);
                    var T = j.attachWebSocket(this, this.url);
                    Te(function() {
                        T ? (this.readyState = p.OPEN, T.dispatchEvent(ge({
                            type: "connection"
                        }), T, this), T.dispatchEvent(ge({
                            type: "connect"
                        }), T, this), this.dispatchEvent(ge({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = p.CLOSED, this.dispatchEvent(ge({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(pe({
                            type: "close",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        })), v("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(x) {
                        w.dispatchEvent(pe({
                            type: "disconnect",
                            target: x.target,
                            code: x.code
                        }))
                    })
                }
                d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p;
                var g = {
                    broadcast: {}
                };
                return p.prototype.close = function() {
                    if (this.readyState === p.OPEN) {
                        var _ = j.serverLookup(this.url);
                        return j.removeWebSocket(this, this.url), this.readyState = p.CLOSED, this.dispatchEvent(pe({
                            type: "close",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        })), _ && _.dispatchEvent(pe({
                            type: "disconnect",
                            target: this,
                            code: ee.CLOSE_NORMAL
                        }), _), this
                    }
                }, p.prototype.disconnect = function() {
                    return this.close()
                }, p.prototype.emit = function(_) {
                    for (var w = [], O = arguments.length - 1; O-- > 0;) w[O] = arguments[O + 1];
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var T = At({
                            type: _,
                            origin: this.url,
                            data: w
                        }),
                        x = j.serverLookup(this.url);
                    return x && x.dispatchEvent.apply(x, [T].concat(w)), this
                }, p.prototype.send = function(_) {
                    return this.emit("message", _), this
                }, g.broadcast.get = function() {
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var l = this,
                        _ = j.serverLookup(this.url);
                    if (!_) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(O, T) {
                            return _.emit(O, T, {
                                websockets: j.websocketsLookup(l.url, null, l)
                            }), l
                        },
                        to: function(O) {
                            return _.to(O, l)
                        },
                        in: function(O) {
                            return _.in(O, l)
                        }
                    }
                }, p.prototype.on = function(_, w) {
                    return this.addEventListener(_, w), this
                }, p.prototype.off = function(_, w) {
                    this.removeEventListener(_, w)
                }, p.prototype.hasListeners = function(_) {
                    var w = this.listeners[_];
                    return Array.isArray(w) ? !!w.length : !1
                }, p.prototype.join = function(_) {
                    j.addMembershipToRoom(this, _)
                }, p.prototype.leave = function(_) {
                    j.removeMembershipFromRoom(this, _)
                }, p.prototype.to = function(_) {
                    return this.broadcast.to(_)
                }, p.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, p.prototype.dispatchEvent = function(_) {
                    for (var w = this, O = [], T = arguments.length - 1; T-- > 0;) O[T] = arguments[T + 1];
                    var x = _.type,
                        ue = this.listeners[x];
                    if (!Array.isArray(ue)) return !1;
                    ue.forEach(function(be) {
                        O.length > 0 ? be.apply(w, O) : be.call(w, _.data ? _.data : _)
                    })
                }, Object.defineProperties(p.prototype, g), p
            }(V);
            It.CONNECTING = 0, It.OPEN = 1, It.CLOSING = 2, It.CLOSED = 3;
            var Br = function(p, g) {
                return new It(p, g)
            };
            Br.connect = function(p, g) {
                return Br(p, g)
            };
            var Zs = Mr,
                ea = J,
                ta = Br;
            r.Server = Zs, r.WebSocket = ea, r.SocketIO = ta, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Li, Li.exports);
    var u_ = {
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
                    y = u.y,
                    m = f.x - h,
                    b = f.y - y;
                if (m !== 0 || b !== 0) {
                    var S = ((a.x - h) * m + (a.y - y) * b) / (m * m + b * b);
                    S > 1 ? (h = f.x, y = f.y) : S > 0 && (h += m * S, y += b * S)
                }
                return m = a.x - h, b = a.y - y, m * m + b * b
            }

            function n(a, u) {
                for (var f = a[0], h = [f], y, m = 1, b = a.length; m < b; m++) y = a[m], e(y, f) > u && (h.push(y), f = y);
                return f !== y && h.push(y), h
            }

            function i(a, u, f, h, y) {
                for (var m = h, b, S = u + 1; S < f; S++) {
                    var I = r(a[S], a[u], a[f]);
                    I > m && (b = S, m = I)
                }
                m > h && (b - u > 1 && i(a, u, b, h, y), y.push(a[b]), f - b > 1 && i(a, b, f, h, y))
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
    })(u_);
    const as = Object.prototype.toString;

    function cs(t) {
        switch (as.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return xt(t, Error)
        }
    }

    function Tt(t, e) {
        return as.call(t) === `[object ${e}]`
    }

    function us(t) {
        return Tt(t, "ErrorEvent")
    }

    function Ci(t) {
        return Tt(t, "DOMError")
    }

    function f_(t) {
        return Tt(t, "DOMException")
    }

    function Ve(t) {
        return Tt(t, "String")
    }

    function fs(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function gt(t) {
        return Tt(t, "Object")
    }

    function jn(t) {
        return typeof Event < "u" && xt(t, Event)
    }

    function l_(t) {
        return typeof Element < "u" && xt(t, Element)
    }

    function p_(t) {
        return Tt(t, "RegExp")
    }

    function Un(t) {
        return !!(t && t.then && typeof t.then == "function")
    }

    function d_(t) {
        return gt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function h_(t) {
        return typeof t == "number" && t !== t
    }

    function xt(t, e) {
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

    function Vt() {
        return me
    }

    function Mn(t, e, r) {
        const n = r || me,
            i = n.__SENTRY__ = n.__SENTRY__ || {};
        return i[t] || (i[t] = e())
    }
    const __ = Vt(),
        g_ = 80;

    function nn(t, e = {}) {
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
                y = !Array.isArray(e) && e.maxStringLength || g_;
            for (; r && o++ < n && (f = y_(r, h), !(f === "html" || o > 1 && s + i.length * u + f.length >= y));) i.push(f), s += f.length, r = r.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function y_(t, e) {
        const r = t,
            n = [];
        let i, o, s, a, u;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        const f = e && e.length ? e.filter(y => r.getAttribute(y)).map(y => [y, r.getAttribute(y)]) : null;
        if (f && f.length) f.forEach(y => {
            n.push(`[${y[0]}="${y[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), i = r.className, i && Ve(i))
            for (o = i.split(/\s+/), u = 0; u < o.length; u++) n.push(`.${o[u]}`);
        const h = ["aria-label", "type", "name", "title", "alt"];
        for (u = 0; u < h.length; u++) s = h[u], a = r.getAttribute(s), a && n.push(`[${s}="${a}"]`);
        return n.join("")
    }

    function m_() {
        try {
            return __.document.location.href
        } catch {
            return ""
        }
    }
    class ie extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    const v_ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function b_(t) {
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

    function E_(t) {
        const e = v_.exec(t);
        if (!e) throw new ie(`Invalid Sentry Dsn: ${t}`);
        const [r, n, i = "", o, s = "", a] = e.slice(1);
        let u = "",
            f = a;
        const h = f.split("/");
        if (h.length > 1 && (u = h.slice(0, -1).join("/"), f = h.pop()), f) {
            const y = f.match(/^\d+/);
            y && (f = y[0])
        }
        return ls({
            host: o,
            pass: i,
            path: u,
            projectId: f,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function ls(t) {
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

    function S_(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: e,
            projectId: r,
            protocol: n
        } = t;
        if (["protocol", "publicKey", "host", "projectId"].forEach(o => {
                if (!t[o]) throw new ie(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new ie(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!b_(n)) throw new ie(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new ie(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function w_(t) {
        const e = typeof t == "string" ? E_(t) : ls(t);
        return S_(e), e
    }
    const O_ = "Sentry Logger ",
        vr = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function ps(t) {
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

    function ji() {
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
                t && ps(() => {
                    me.console[r](`${O_}[${r}]:`, ...n)
                })
            }
        }) : vr.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let D;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? D = Mn("logger", ji) : D = ji();

    function jt(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function Ui(t, e) {
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

    function k_(t, e, r = !1) {
        return Ve(t) ? p_(e) ? e.test(t) : Ve(e) ? r ? t === e : t.includes(e) : !1 : !1
    }

    function Dr(t, e = [], r = !1) {
        return e.some(n => k_(t, n, r))
    }

    function re(t, e, r) {
        if (!(e in t)) return;
        const n = t[e],
            i = r(n);
        if (typeof i == "function") try {
            ds(i, n)
        } catch {}
        t[e] = i
    }

    function Bn(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function ds(t, e) {
        const r = e.prototype || {};
        t.prototype = e.prototype = r, Bn(t, "__sentry_original__", e)
    }

    function Fn(t) {
        return t.__sentry_original__
    }

    function T_(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function hs(t) {
        if (cs(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...Bi(t)
        };
        if (jn(t)) {
            const e = {
                type: t.type,
                target: Mi(t.target),
                currentTarget: Mi(t.currentTarget),
                ...Bi(t)
            };
            return typeof CustomEvent < "u" && xt(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function Mi(t) {
        try {
            return l_(t) ? nn(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function Bi(t) {
        if (typeof t == "object" && t !== null) {
            const e = {};
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function x_(t, e = 40) {
        const r = Object.keys(hs(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return jt(r[0], e);
        for (let n = r.length; n > 0; n--) {
            const i = r.slice(0, n).join(", ");
            if (!(i.length > e)) return n === r.length ? i : jt(i, e)
        }
        return ""
    }

    function qn(t) {
        return on(t, new Map)
    }

    function on(t, e) {
        if (gt(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = {};
            e.set(t, n);
            for (const i of Object.keys(t)) typeof t[i] < "u" && (n[i] = on(t[i], e));
            return n
        }
        if (Array.isArray(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const n = [];
            return e.set(t, n), t.forEach(i => {
                n.push(on(i, e))
            }), n
        }
        return t
    }
    const _s = 50,
        Fi = /\(error: (.*)\)/;

    function gs(...t) {
        const e = t.sort((r, n) => r[0] - n[0]).map(r => r[1]);
        return (r, n = 0) => {
            const i = [],
                o = r.split(`
`);
            for (let s = n; s < o.length; s++) {
                const a = o[s];
                if (a.length > 1024) continue;
                const u = Fi.test(a) ? a.replace(Fi, "$1") : a;
                if (!u.match(/\S*Error: /)) {
                    for (const f of e) {
                        const h = f(u);
                        if (h) {
                            i.push(h);
                            break
                        }
                    }
                    if (i.length >= _s) break
                }
            }
            return A_(i)
        }
    }

    function R_(t) {
        return Array.isArray(t) ? gs(...t) : t
    }

    function A_(t) {
        if (!t.length) return [];
        const e = t.slice(0, _s),
            r = e[e.length - 1].function;
        r && /sentryWrapped/.test(r) && e.pop(), e.reverse();
        const n = e[e.length - 1].function;
        return n && /captureMessage|captureException/.test(n) && e.pop(), e.map(i => ({
            ...i,
            filename: i.filename || e[e.length - 1].filename,
            function: i.function || "?"
        }))
    }
    const Xr = "<anonymous>";

    function Be(t) {
        try {
            return !t || typeof t != "function" ? Xr : t.name || Xr
        } catch {
            return Xr
        }
    }
    const sn = Vt();

    function ys() {
        if (!("fetch" in sn)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch {
            return !1
        }
    }

    function an(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function I_() {
        if (!ys()) return !1;
        if (an(sn.fetch)) return !0;
        let t = !1;
        const e = sn.document;
        if (e && typeof e.createElement == "function") try {
            const r = e.createElement("iframe");
            r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = an(r.contentWindow.fetch)), e.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return t
    }
    const Zt = Vt();

    function P_() {
        const t = Zt.chrome,
            e = t && t.app && t.app.runtime,
            r = "history" in Zt && !!Zt.history.pushState && !!Zt.history.replaceState;
        return !e && r
    }
    const K = Vt(),
        $t = "__sentry_xhr_v2__",
        Ut = {},
        qi = {};

    function N_(t) {
        if (!qi[t]) switch (qi[t] = !0, t) {
            case "console":
                D_();
                break;
            case "dom":
                F_();
                break;
            case "xhr":
                C_();
                break;
            case "fetch":
                $_();
                break;
            case "history":
                j_();
                break;
            case "error":
                q_();
                break;
            case "unhandledrejection":
                G_();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("unknown instrumentation type:", t);
                return
        }
    }

    function De(t, e) {
        Ut[t] = Ut[t] || [], Ut[t].push(e), N_(t)
    }

    function we(t, e) {
        if (!(!t || !Ut[t]))
            for (const r of Ut[t] || []) try {
                r(e)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Be(r)}
Error:`, n)
            }
    }

    function D_() {
        "console" in K && vr.forEach(function(t) {
            t in K.console && re(K.console, t, function(e) {
                return function(...r) {
                    we("console", {
                        args: r,
                        level: t
                    }), e && e.apply(K.console, r)
                }
            })
        })
    }

    function $_() {
        I_() && re(K, "fetch", function(t) {
            return function(...e) {
                const {
                    method: r,
                    url: n
                } = L_(e), i = {
                    args: e,
                    fetchData: {
                        method: r,
                        url: n
                    },
                    startTimestamp: Date.now()
                };
                return we("fetch", {
                    ...i
                }), t.apply(K, e).then(o => (we("fetch", {
                    ...i,
                    endTimestamp: Date.now(),
                    response: o
                }), o), o => {
                    throw we("fetch", {
                        ...i,
                        endTimestamp: Date.now(),
                        error: o
                    }), o
                })
            }
        })
    }

    function cn(t, e) {
        return !!t && typeof t == "object" && !!t[e]
    }

    function Gi(t) {
        return typeof t == "string" ? t : t ? cn(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
    }

    function L_(t) {
        if (t.length === 0) return {
            method: "GET",
            url: ""
        };
        if (t.length === 2) {
            const [r, n] = t;
            return {
                url: Gi(r),
                method: cn(n, "method") ? String(n.method).toUpperCase() : "GET"
            }
        }
        const e = t[0];
        return {
            url: Gi(e),
            method: cn(e, "method") ? String(e.method).toUpperCase() : "GET"
        }
    }

    function C_() {
        if (!("XMLHttpRequest" in K)) return;
        const t = XMLHttpRequest.prototype;
        re(t, "open", function(e) {
            return function(...r) {
                const n = r[1],
                    i = this[$t] = {
                        method: Ve(r[0]) ? r[0].toUpperCase() : r[0],
                        url: r[1],
                        request_headers: {}
                    };
                Ve(n) && i.method === "POST" && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const o = () => {
                    const s = this[$t];
                    if (s && this.readyState === 4) {
                        try {
                            s.status_code = this.status
                        } catch {}
                        we("xhr", {
                            args: r,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: this
                        })
                    }
                };
                return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? re(this, "onreadystatechange", function(s) {
                    return function(...a) {
                        return o(), s.apply(this, a)
                    }
                }) : this.addEventListener("readystatechange", o), re(this, "setRequestHeader", function(s) {
                    return function(...a) {
                        const [u, f] = a, h = this[$t];
                        return h && (h.request_headers[u.toLowerCase()] = f), s.apply(this, a)
                    }
                }), e.apply(this, r)
            }
        }), re(t, "send", function(e) {
            return function(...r) {
                const n = this[$t];
                return n && r[0] !== void 0 && (n.body = r[0]), we("xhr", {
                    args: r,
                    startTimestamp: Date.now(),
                    xhr: this
                }), e.apply(this, r)
            }
        })
    }
    let er;

    function j_() {
        if (!P_()) return;
        const t = K.onpopstate;
        K.onpopstate = function(...r) {
            const n = K.location.href,
                i = er;
            if (er = n, we("history", {
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
                    er = s, we("history", {
                        from: o,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        re(K.history, "pushState", e), re(K.history, "replaceState", e)
    }
    const U_ = 1e3;
    let tr, rr;

    function M_(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function B_(t) {
        if (t.type !== "keypress") return !1;
        try {
            const e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function Yi(t, e = !1) {
        return r => {
            if (!r || rr === r || B_(r)) return;
            const n = r.type === "keypress" ? "input" : r.type;
            tr === void 0 ? (t({
                event: r,
                name: n,
                global: e
            }), rr = r) : M_(rr, r) && (t({
                event: r,
                name: n,
                global: e
            }), rr = r), clearTimeout(tr), tr = K.setTimeout(() => {
                tr = void 0
            }, U_)
        }
    }

    function F_() {
        if (!("document" in K)) return;
        const t = we.bind(null, "dom"),
            e = Yi(t, !0);
        K.document.addEventListener("click", e, !1), K.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
            const n = K[r] && K[r].prototype;
            !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (re(n, "addEventListener", function(i) {
                return function(o, s, a) {
                    if (o === "click" || o == "keypress") try {
                        const u = this,
                            f = u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {},
                            h = f[o] = f[o] || {
                                refCount: 0
                            };
                        if (!h.handler) {
                            const y = Yi(t);
                            h.handler = y, i.call(this, o, y, a)
                        }
                        h.refCount++
                    } catch {}
                    return i.call(this, o, s, a)
                }
            }), re(n, "removeEventListener", function(i) {
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

    function q_() {
        nr = K.onerror, K.onerror = function(t, e, r, n, i) {
            return we("error", {
                column: n,
                error: i,
                line: r,
                msg: t,
                url: e
            }), nr && !nr.__SENTRY_LOADER__ ? nr.apply(this, arguments) : !1
        }, K.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    let ir = null;

    function G_() {
        ir = K.onunhandledrejection, K.onunhandledrejection = function(t) {
            return we("unhandledrejection", t), ir && !ir.__SENTRY_LOADER__ ? ir.apply(this, arguments) : !0
        }, K.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }

    function Y_() {
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

    function ct() {
        const t = me,
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        const r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function ms(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function $e(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        const n = ms(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function un(t, e, r) {
        const n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            o = i[0] = i[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = r || "Error")
    }

    function Ft(t, e) {
        const r = ms(t);
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

    function Hi(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            Bn(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function vs(t) {
        return Array.isArray(t) ? t : [t]
    }

    function H_() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function W_() {
        return "npm"
    }

    function z_() {
        return !H_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function K_(t, e) {
        return t.require(e)
    }

    function Ne(t, e = 100, r = 1 / 0) {
        try {
            return fn("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function bs(t, e = 3, r = 100 * 1024) {
        const n = Ne(t, e);
        return Q_(n) > r ? bs(t, e - 1, r) : n
    }

    function fn(t, e, r = 1 / 0, n = 1 / 0, i = Y_()) {
        const [o, s] = i;
        if (e == null || ["number", "boolean", "string"].includes(typeof e) && !h_(e)) return e;
        const a = V_(t, e);
        if (!a.startsWith("[object ")) return a;
        if (e.__sentry_skip_normalization__) return e;
        const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : r;
        if (u === 0) return a.replace("object ", "");
        if (o(e)) return "[Circular ~]";
        const f = e;
        if (f && typeof f.toJSON == "function") try {
            const b = f.toJSON();
            return fn("", b, u - 1, n, i)
        } catch {}
        const h = Array.isArray(e) ? [] : {};
        let y = 0;
        const m = hs(e);
        for (const b in m) {
            if (!Object.prototype.hasOwnProperty.call(m, b)) continue;
            if (y >= n) {
                h[b] = "[MaxProperties ~]";
                break
            }
            const S = m[b];
            h[b] = fn(b, S, u - 1, n, i), y++
        }
        return s(e), h
    }

    function V_(t, e) {
        try {
            if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
            if (t === "domainEmitter") return "[DomainEmitter]";
            if (typeof global < "u" && e === global) return "[Global]";
            if (typeof window < "u" && e === window) return "[Window]";
            if (typeof document < "u" && e === document) return "[Document]";
            if (d_(e)) return "[SyntheticEvent]";
            if (typeof e == "number" && e !== e) return "[NaN]";
            if (typeof e == "function") return `[Function: ${Be(e)}]`;
            if (typeof e == "symbol") return `[${String(e)}]`;
            if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
            const r = J_(e);
            return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function J_(t) {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : "null prototype"
    }

    function X_(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function Q_(t) {
        return X_(JSON.stringify(t))
    }
    var xe;
    (function(t) {
        t[t.PENDING = 0] = "PENDING";
        const r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        const n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(xe || (xe = {}));

    function Je(t) {
        return new se(e => {
            e(t)
        })
    }

    function br(t) {
        return new se((e, r) => {
            r(t)
        })
    }
    class se {
        __init() {
            this._state = xe.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(e) {
            se.prototype.__init.call(this), se.prototype.__init2.call(this), se.prototype.__init3.call(this), se.prototype.__init4.call(this), se.prototype.__init5.call(this), se.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(e, r) {
            return new se((n, i) => {
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
            return new se((r, n) => {
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
                    if (Un(r)) {
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

    function Z_(t) {
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
            return new se((a, u) => {
                let f = e.length;
                if (!f) return a(!0);
                const h = setTimeout(() => {
                    s && s > 0 && a(!1)
                }, s);
                e.forEach(y => {
                    Je(y).then(() => {
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

    function Qr(t) {
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
    const eg = ["fatal", "error", "warning", "log", "info", "debug"];

    function tg(t) {
        return t === "warn" ? "warning" : eg.includes(t) ? t : "log"
    }
    const Es = Vt(),
        ln = {
            nowSeconds: () => Date.now() / 1e3
        };

    function rg() {
        const {
            performance: t
        } = Es;
        if (!t || !t.now) return;
        const e = Date.now() - t.now();
        return {
            now: () => t.now(),
            timeOrigin: e
        }
    }

    function ng() {
        try {
            return K_(Ys, "perf_hooks").performance
        } catch {
            return
        }
    }
    const Zr = z_() ? ng() : rg(),
        Wi = Zr === void 0 ? ln : {
            nowSeconds: () => (Zr.timeOrigin + Zr.now()) / 1e3
        },
        $r = ln.nowSeconds.bind(ln),
        Ss = Wi.nowSeconds.bind(Wi);
    (() => {
        const {
            performance: t
        } = Es;
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

    function Jt(t, e = []) {
        return [t, e]
    }

    function ig(t, e) {
        const [r, n] = t;
        return [r, [...n, e]]
    }

    function zi(t, e) {
        const r = t[1];
        for (const n of r) {
            const i = n[0].type;
            if (e(n, i)) return !0
        }
        return !1
    }

    function pn(t, e) {
        return (e || new TextEncoder).encode(t)
    }

    function og(t, e) {
        const [r, n] = t;
        let i = JSON.stringify(r);

        function o(s) {
            typeof i == "string" ? i = typeof s == "string" ? i + s : [pn(i, e), s] : i.push(typeof s == "string" ? pn(s, e) : s)
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
                    f = JSON.stringify(Ne(u))
                }
                o(f)
            }
        }
        return typeof i == "string" ? i : sg(i)
    }

    function sg(t) {
        const e = t.reduce((i, o) => i + o.length, 0),
            r = new Uint8Array(e);
        let n = 0;
        for (const i of t) r.set(i, n), n += i.length;
        return r
    }

    function ag(t, e) {
        const r = typeof t.data == "string" ? pn(t.data, e) : t.data;
        return [qn({
            type: "attachment",
            length: r.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), r]
    }
    const cg = {
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

    function Ki(t) {
        return cg[t]
    }

    function ws(t) {
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

    function ug(t, e, r, n) {
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
                trace: qn({
                    ...i
                })
            }
        }
    }

    function fg(t, e, r) {
        const n = [{
            type: "client_report"
        }, {
            timestamp: r || $r(),
            discarded_events: t
        }];
        return Jt(e ? {
            dsn: e
        } : {}, [n])
    }
    const lg = 60 * 1e3;

    function pg(t, e = Date.now()) {
        const r = parseInt(`${t}`, 10);
        if (!isNaN(r)) return r * 1e3;
        const n = Date.parse(`${t}`);
        return isNaN(n) ? lg : n - e
    }

    function dg(t, e) {
        return t[e] || t.all || 0
    }

    function hg(t, e, r = Date.now()) {
        return dg(t, e) > r
    }

    function _g(t, {
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
                const [u, f] = a.split(":", 2), h = parseInt(u, 10), y = (isNaN(h) ? 60 : h) * 1e3;
                if (!f) i.all = n + y;
                else
                    for (const m of f.split(";")) i[m] = n + y
            } else s ? i.all = n + pg(s, n) : e === 429 && (i.all = n + 60 * 1e3);
        return i
    }
    const Os = "production";

    function gg(t) {
        const e = Ss(),
            r = {
                sid: ct(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => mg(r)
            };
        return t && yt(r, t), r
    }

    function yt(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Ss(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ct()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            const r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function yg(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), yt(t, r)
    }

    function mg(t) {
        return qn({
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
    const vg = 100;
    class We {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            const r = new We;
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
            return this._user = e || {}, this._session && yt(this._session, {
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
                return r instanceof We ? r : this
            }
            return e instanceof We ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : gt(e) && (e = e, this._tags = {
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
            const n = typeof r == "number" ? r : vg;
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
            }, this._notifyEventProcessors([...ks(), ...this._eventProcessors], e, r)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        _notifyEventProcessors(e, r, n, i = 0) {
            return new se((o, s) => {
                const a = e[i];
                if (r === null || typeof a != "function") o(r);
                else {
                    const u = a({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && u === null && D.log(`Event processor "${a.id}" dropped event`), Un(u) ? u.then(f => this._notifyEventProcessors(e, f, n, i + 1).then(o)).then(null, s) : this._notifyEventProcessors(e, u, n, i + 1).then(o).then(null, s)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? vs(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function ks() {
        return Mn("globalEventProcessors", () => [])
    }

    function Gn(t) {
        ks().push(t)
    }
    const Ts = 4,
        bg = 100;
    class xs {
        constructor(e, r = new We, n = Ts) {
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
            const e = We.clone(this.getScope());
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
            const n = this._lastEventId = r && r.event_id ? r.event_id : ct(),
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
            const i = this._lastEventId = n && n.event_id ? n.event_id : ct(),
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
            const n = r && r.event_id ? r.event_id : ct();
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
                maxBreadcrumbs: s = bg
            } = i.getOptions && i.getOptions() || {};
            if (s <= 0) return;
            const u = {
                    timestamp: $r(),
                    ...e
                },
                f = o ? ps(() => o(u, r)) : u;
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
            const r = Vi(this);
            try {
                e(this)
            } finally {
                Vi(r)
            }
        }
        getIntegration(e) {
            const r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(e)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
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
            n && yg(n), this._sendSessionUpdate(), r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: o = Os
            } = n && n.getOptions() || {}, {
                userAgent: s
            } = me.navigator || {}, a = gg({
                release: i,
                environment: o,
                user: r.getUser(),
                ...s && {
                    userAgent: s
                },
                ...e
            }), u = r.getSession && r.getSession();
            return u && u.status === "ok" && yt(u, {
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
            const i = Lr().__SENTRY__;
            if (i && i.extensions && typeof i.extensions[e] == "function") return i.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Lr() {
        return me.__SENTRY__ = me.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, me
    }

    function Vi(t) {
        const e = Lr(),
            r = dn(e);
        return Rs(e, t), r
    }

    function Q() {
        const t = Lr();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            const e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return Eg(t)
    }

    function Eg(t = Lr()) {
        return (!Sg(t) || dn(t).isOlderThan(Ts)) && Rs(t, new xs), dn(t)
    }

    function Sg(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function dn(t) {
        return Mn("hub", () => new xs, t)
    }

    function Rs(t, e) {
        if (!t) return !1;
        const r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function wg(t, e) {
        return Q().captureException(t, {
            captureContext: e
        })
    }

    function Og(t, e) {
        const r = typeof e == "string" ? e : void 0,
            n = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return Q().captureMessage(t, r, n)
    }

    function As(t) {
        Q().setTags(t)
    }

    function kg(t) {
        Q().withScope(t)
    }
    const Tg = "7";

    function xg(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function Rg(t) {
        return `${xg(t)}${t.projectId}/envelope/`
    }

    function Ag(t, e) {
        return T_({
            sentry_key: t.publicKey,
            sentry_version: Tg,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function Ig(t, e = {}) {
        const r = typeof e == "string" ? e : e.tunnel,
            n = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return r || `${Rg(t)}?${Ag(t,n)}`
    }

    function Pg(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function Ng(t, e, r, n) {
        const i = ws(r),
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
        return Jt(o, [s])
    }

    function Dg(t, e, r, n) {
        const i = ws(r),
            o = t.type && t.type !== "replay_event" ? t.type : "event";
        Pg(t, r && r.sdk);
        const s = ug(t, i, n, e);
        return delete t.sdkProcessingMetadata, Jt(s, [
            [{
                type: o
            }, t]
        ])
    }
    const Ji = [];

    function $g(t) {
        const e = {};
        return t.forEach(r => {
            const {
                name: n
            } = r, i = e[n];
            i && !i.isDefaultInstance && r.isDefaultInstance || (e[n] = r)
        }), Object.keys(e).map(r => e[r])
    }

    function Lg(t) {
        const e = t.defaultIntegrations || [],
            r = t.integrations;
        e.forEach(s => {
            s.isDefaultInstance = !0
        });
        let n;
        Array.isArray(r) ? n = [...e, ...r] : typeof r == "function" ? n = vs(r(e)) : n = e;
        const i = $g(n),
            o = jg(i, s => s.name === "Debug");
        if (o !== -1) {
            const [s] = i.splice(o, 1);
            i.push(s)
        }
        return i
    }

    function Cg(t) {
        const e = {};
        return t.forEach(r => {
            r && Is(r, e)
        }), e
    }

    function Is(t, e) {
        e[t.name] = t, Ji.indexOf(t.name) === -1 && (t.setupOnce(Gn, Q), Ji.push(t.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log(`Integration installed: ${t.name}`))
    }

    function jg(t, e) {
        for (let r = 0; r < t.length; r++)
            if (e(t[r]) === !0) return r;
        return -1
    }

    function Ug(t, e, r, n) {
        const {
            normalizeDepth: i = 3,
            normalizeMaxBreadth: o = 1e3
        } = t, s = {
            ...e,
            event_id: e.event_id || r.event_id || ct(),
            timestamp: e.timestamp || $r()
        }, a = r.integrations || t.integrations.map(h => h.name);
        Mg(s, t), Fg(s, a), e.type === void 0 && Bg(s, t.stackParser);
        let u = n;
        r.captureContext && (u = We.clone(u).update(r.captureContext));
        let f = Je(s);
        if (u) {
            if (u.getAttachments) {
                const h = [...r.attachments || [], ...u.getAttachments()];
                h.length && (r.attachments = h)
            }
            f = u.applyToEvent(s, r)
        }
        return f.then(h => typeof i == "number" && i > 0 ? qg(h, i, o) : h)
    }

    function Mg(t, e) {
        const {
            environment: r,
            release: n,
            dist: i,
            maxValueLength: o = 250
        } = e;
        "environment" in t || (t.environment = "environment" in e ? r : Os), t.release === void 0 && n !== void 0 && (t.release = n), t.dist === void 0 && i !== void 0 && (t.dist = i), t.message && (t.message = jt(t.message, o));
        const s = t.exception && t.exception.values && t.exception.values[0];
        s && s.value && (s.value = jt(s.value, o));
        const a = t.request;
        a && a.url && (a.url = jt(a.url, o))
    }
    const Xi = new WeakMap;

    function Bg(t, e) {
        const r = me._sentryDebugIds;
        if (!r) return;
        let n;
        const i = Xi.get(e);
        i ? n = i : (n = new Map, Xi.set(e, n));
        const o = Object.keys(r).reduce((u, f) => {
                let h;
                const y = n.get(f);
                y ? h = y : (h = e(f), n.set(f, h));
                for (let m = h.length - 1; m >= 0; m--) {
                    const b = h[m];
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

    function Fg(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
    }

    function qg(t, e, r) {
        if (!t) return null;
        const n = {
            ...t,
            ...t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map(i => ({
                    ...i,
                    ...i.data && {
                        data: Ne(i.data, e, r)
                    }
                }))
            },
            ...t.user && {
                user: Ne(t.user, e, r)
            },
            ...t.contexts && {
                contexts: Ne(t.contexts, e, r)
            },
            ...t.extra && {
                extra: Ne(t.extra, e, r)
            }
        };
        return t.contexts && t.contexts.trace && n.contexts && (n.contexts.trace = t.contexts.trace, t.contexts.trace.data && (n.contexts.trace.data = Ne(t.contexts.trace.data, e, r))), t.spans && (n.spans = t.spans.map(i => (i.data && (i.data = Ne(i.data, e, r)), i))), n
    }
    const Qi = "Not capturing exception because it's already been captured.";
    class Ye {
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
            if (Ye.prototype.__init.call(this), Ye.prototype.__init2.call(this), Ye.prototype.__init3.call(this), Ye.prototype.__init4.call(this), Ye.prototype.__init5.call(this), this._options = e, e.dsn) {
                this._dsn = w_(e.dsn);
                const r = Ig(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, r, n) {
            if (Hi(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log(Qi);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(o => this._captureEvent(o, r, n)).then(o => {
                i = o
            })), i
        }
        captureMessage(e, r, n, i) {
            let o = n && n.event_id;
            const s = fs(e) ? this.eventFromMessage(String(e), r, n) : this.eventFromException(e, n);
            return this._process(s.then(a => this._captureEvent(a, n, i)).then(a => {
                o = a
            })), o
        }
        captureEvent(e, r, n) {
            if (r && r.originalException && Hi(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log(Qi);
                return
            }
            let i = r && r.event_id;
            return this._process(this._captureEvent(e, r, n).then(o => {
                i = o
            })), i
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), yt(e, {
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
            return r ? this._isClientDoneProcessing(e).then(n => r.flush(e).then(i => n && i)) : Je(!0)
        }
        close(e) {
            return this.flush(e).then(r => (this.getOptions().enabled = !1, r))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = Cg(this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
            }
        }
        addIntegration(e) {
            Is(e, this._integrations)
        }
        sendEvent(e, r = {}) {
            if (this._dsn) {
                let n = Dg(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const o of r.attachments || []) n = ig(n, ag(o, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const i = this._sendEnvelope(n);
                i && i.then(o => this.emit("afterSendEvent", e, o), null)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                const r = Ng(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(r)
            }
        }
        recordDroppedEvent(e, r, n) {
            if (this._options.sendClientReports) {
                const i = `${e}:${r}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log(`Adding outcome: "${i}"`), this._outcomes[i] = this._outcomes[i] + 1 || 1
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
            (s && e.errors === 0 || s && n) && (yt(e, {
                ...n && {
                    status: "crashed"
                },
                errors: e.errors || Number(i || n)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new se(r => {
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
            return !r.integrations && o.length > 0 && (r.integrations = o), Ug(i, e, r, n)
        }
        _captureEvent(e, r = {}, n) {
            return this._processEvent(e, r, n).then(i => i.event_id, i => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    const o = i;
                    o.logLevel === "log" ? D.log(o.message) : D.warn(o)
                }
            })
        }
        _processEvent(e, r, n) {
            const i = this.getOptions(),
                {
                    sampleRate: o
                } = i;
            if (!this._isEnabled()) return br(new ie("SDK not enabled, will not capture event.", "log"));
            const s = Ns(e),
                a = Ps(e),
                u = e.type || "error",
                f = `before send for type \`${u}\``;
            if (a && typeof o == "number" && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), br(new ie(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
            const h = u === "replay_event" ? "replay" : u;
            return this._prepareEvent(e, r, n).then(y => {
                if (y === null) throw this.recordDroppedEvent("event_processor", h, e), new ie("An event processor returned `null`, will not send event.", "log");
                if (r.data && r.data.__sentry__ === !0) return y;
                const b = Yg(i, y, r);
                return Gg(b, f)
            }).then(y => {
                if (y === null) throw this.recordDroppedEvent("before_send", h, e), new ie(`${f} returned \`null\`, will not send event.`, "log");
                const m = n && n.getSession();
                !s && m && this._updateSessionFromEvent(m, y);
                const b = y.transaction_info;
                if (s && b && y.transaction !== e.transaction) {
                    const S = "custom";
                    y.transaction_info = {
                        ...b,
                        source: S
                    }
                }
                return this.sendEvent(y, r), y
            }).then(null, y => {
                throw y instanceof ie ? y : (this.captureException(y, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: y
                }), new ie(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${y}`))
            })
        }
        _process(e) {
            this._numProcessing++, e.then(r => (this._numProcessing--, r), r => (this._numProcessing--, r))
        }
        _sendEnvelope(e) {
            if (this._transport && this._dsn) return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, r => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.error("Error while sending event:", r)
            });
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.error("Transport disabled")
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

    function Gg(t, e) {
        const r = `${e} must return \`null\` or a valid event.`;
        if (Un(t)) return t.then(n => {
            if (!gt(n) && n !== null) throw new ie(r);
            return n
        }, n => {
            throw new ie(`${e} rejected with ${n}`)
        });
        if (!gt(t) && t !== null) throw new ie(r);
        return t
    }

    function Yg(t, e, r) {
        const {
            beforeSend: n,
            beforeSendTransaction: i
        } = t;
        return Ps(e) && n ? n(e, r) : Ns(e) && i ? i(e, r) : e
    }

    function Ps(t) {
        return t.type === void 0
    }

    function Ns(t) {
        return t.type === "transaction"
    }

    function Hg(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? D.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const r = Q();
        r.getScope().update(e.initialScope);
        const i = new t(e);
        r.bindClient(i)
    }
    const Wg = 30;

    function Ds(t, e, r = Z_(t.bufferSize || Wg)) {
        let n = {};
        const i = s => r.drain(s);

        function o(s) {
            const a = [];
            if (zi(s, (y, m) => {
                    const b = Ki(m);
                    if (hg(n, b)) {
                        const S = Zi(y, m);
                        t.recordDroppedEvent("ratelimit_backoff", b, S)
                    } else a.push(y)
                }), a.length === 0) return Je();
            const u = Jt(s[0], a),
                f = y => {
                    zi(u, (m, b) => {
                        const S = Zi(m, b);
                        t.recordDroppedEvent(y, Ki(b), S)
                    })
                },
                h = () => e({
                    body: og(u, t.textEncoder)
                }).then(y => (y.statusCode !== void 0 && (y.statusCode < 200 || y.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Sentry responded with status code ${y.statusCode} to sent event.`), n = _g(n, y), y), y => {
                    throw f("network_error"), y
                });
            return r.add(h).then(y => y, y => {
                if (y instanceof ie) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.error("Skipped sending event because buffer is full."), f("queue_overflow"), Je();
                throw y
            })
        }
        return o.__sentry__baseTransport__ = !0, {
            send: o,
            flush: i
        }
    }

    function Zi(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
    }
    const eo = "7.52.1";
    let to;
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
            to = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const r = Fn(this) || this;
                    return to.apply(r, e)
                }
            } catch {}
        }
    }
    qt.__initStatic();
    const zg = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class ut {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = ut.id
        }
        constructor(e = {}) {
            this._options = e, ut.prototype.__init.call(this)
        }
        setupOnce(e, r) {
            const n = i => {
                const o = r();
                if (o) {
                    const s = o.getIntegration(ut);
                    if (s) {
                        const a = o.getClient(),
                            u = a ? a.getOptions() : {},
                            f = Kg(s._options, u);
                        return Vg(i, f) ? null : i
                    }
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    ut.__initStatic();

    function Kg(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...zg],
            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || []],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function Vg(t, e) {
        return e.ignoreInternal && ty(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Event dropped due to being internal Sentry Error.
Event: ${$e(t)}`), !0) : Jg(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${$e(t)}`), !0) : Xg(t, e.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${$e(t)}`), !0) : Qg(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${$e(t)}.
Url: ${Er(t)}`), !0) : Zg(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${$e(t)}.
Url: ${Er(t)}`), !0)
    }

    function Jg(t, e) {
        return t.type || !e || !e.length ? !1 : ey(t).some(r => Dr(r, e))
    }

    function Xg(t, e) {
        if (t.type !== "transaction" || !e || !e.length) return !1;
        const r = t.transaction;
        return r ? Dr(r, e) : !1
    }

    function Qg(t, e) {
        if (!e || !e.length) return !1;
        const r = Er(t);
        return r ? Dr(r, e) : !1
    }

    function Zg(t, e) {
        if (!e || !e.length) return !0;
        const r = Er(t);
        return r ? Dr(r, e) : !0
    }

    function ey(t) {
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
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.error(`Cannot extract message for event ${$e(t)}`), []
            }
        }
        return []
    }

    function ty(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function ry(t = []) {
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
            return e ? ry(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.error(`Cannot extract url for event ${$e(t)}`), null
        }
    }
    const G = me;
    let hn = 0;

    function $s() {
        return hn > 0
    }

    function ny() {
        hn++, setTimeout(() => {
            hn--
        })
    }

    function mt(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            const i = t.__sentry_wrapped__;
            if (i) return i;
            if (Fn(t)) return t
        } catch {
            return t
        }
        const n = function() {
            const i = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                const o = i.map(s => mt(s, e));
                return t.apply(this, o)
            } catch (o) {
                throw ny(), kg(s => {
                    s.addEventProcessor(a => (e.mechanism && (un(a, void 0, void 0), Ft(a, e.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: i
                    }, a)), wg(o)
                }), o
            }
        };
        try {
            for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        } catch {}
        ds(n, t), Bn(t, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return n
    }

    function Ls(t, e) {
        const r = Yn(t, e),
            n = {
                type: e && e.name,
                value: ay(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function iy(t, e, r, n) {
        const o = Q().getClient(),
            s = o && o.getOptions().normalizeDepth,
            a = {
                exception: {
                    values: [{
                        type: jn(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${x_(e)}`
                    }]
                },
                extra: {
                    __serialized__: bs(e, s)
                }
            };
        if (r) {
            const u = Yn(t, r);
            u.length && (a.exception.values[0].stacktrace = {
                frames: u
            })
        }
        return a
    }

    function en(t, e) {
        return {
            exception: {
                values: [Ls(t, e)]
            }
        }
    }

    function Yn(t, e) {
        const r = e.stacktrace || e.stack || "",
            n = sy(e);
        try {
            return t(r, n)
        } catch {}
        return []
    }
    const oy = /Minified React error #\d+;/i;

    function sy(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (oy.test(t.message)) return 1
        }
        return 0
    }

    function ay(t) {
        const e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function cy(t, e, r, n) {
        const i = r && r.syntheticException || void 0,
            o = Hn(t, e, i, n);
        return Ft(o), o.level = "error", r && r.event_id && (o.event_id = r.event_id), Je(o)
    }

    function uy(t, e, r = "info", n, i) {
        const o = n && n.syntheticException || void 0,
            s = _n(t, e, o, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), Je(s)
    }

    function Hn(t, e, r, n, i) {
        let o;
        if (us(e) && e.error) return en(t, e.error);
        if (Ci(e) || f_(e)) {
            const s = e;
            if ("stack" in e) o = en(t, e);
            else {
                const a = s.name || (Ci(s) ? "DOMError" : "DOMException"),
                    u = s.message ? `${a}: ${s.message}` : a;
                o = _n(t, u, r, n), un(o, u)
            }
            return "code" in s && (o.tags = {
                ...o.tags,
                "DOMException.code": `${s.code}`
            }), o
        }
        return cs(e) ? en(t, e) : gt(e) || jn(e) ? (o = iy(t, e, r, i), Ft(o, {
            synthetic: !0
        }), o) : (o = _n(t, e, r, n), un(o, `${e}`, void 0), Ft(o, {
            synthetic: !0
        }), o)
    }

    function _n(t, e, r, n) {
        const i = {
            message: e
        };
        if (n && r) {
            const o = Yn(t, r);
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
        Cs = "Breadcrumbs";
    class Gt {
        static __initStatic() {
            this.id = Cs
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
            this.options.console && De("console", ly), this.options.dom && De("dom", fy(this.options.dom)), this.options.xhr && De("xhr", py), this.options.fetch && De("fetch", dy), this.options.history && De("history", hy)
        }
        addSentryBreadcrumb(e) {
            this.options.sentry && Q().addBreadcrumb({
                category: `sentry.${e.type==="transaction"?"transaction":"event"}`,
                event_id: e.event_id,
                level: e.level,
                message: $e(e)
            }, {
                event: e
            })
        }
    }
    Gt.__initStatic();

    function fy(t) {
        function e(r) {
            let n, i = typeof t == "object" ? t.serializeAttribute : void 0,
                o = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
            o && o > or && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn(`\`dom.maxStringLength\` cannot exceed ${or}, but a value of ${o} was configured. Sentry will use ${or} instead.`), o = or), typeof i == "string" && (i = [i]);
            try {
                const s = r.event;
                n = _y(s) ? nn(s.target, {
                    keyAttrs: i,
                    maxStringLength: o
                }) : nn(s, {
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

    function ly(t) {
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
            level: tg(t.level),
            message: Ui(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${Ui(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        Q().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function py(t) {
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

    function dy(t) {
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

    function hy(t) {
        let e = t.from,
            r = t.to;
        const n = Qr(G.location.href);
        let i = Qr(e);
        const o = Qr(r);
        i.path || (i = n), n.protocol === o.protocol && n.host === o.host && (r = o.relative), n.protocol === i.protocol && n.host === i.host && (e = i.relative), Q().addBreadcrumb({
            category: "navigation",
            data: {
                from: e,
                to: r
            }
        })
    }

    function _y(t) {
        return t && !!t.target
    }

    function gy(t, {
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
            o = yy(t);
        return Jt(i, [o])
    }

    function yy(t) {
        return [{
            type: "user_report"
        }, t]
    }
    class my extends Ye {
        constructor(e) {
            const r = G.SENTRY_SDK_SOURCE || W_();
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${r}:@sentry/browser`,
                    version: eo
                }],
                version: eo
            }, super(e), e.sendClientReports && G.document && G.document.addEventListener("visibilitychange", () => {
                G.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return cy(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", n) {
            return uy(this._options.stackParser, e, r, n, this._options.attachStacktrace)
        }
        sendEvent(e, r) {
            const n = this.getIntegrationById(Cs);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, r)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("SDK not enabled, will not capture user feedback.");
                return
            }
            const r = gy(e, {
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
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log("Sending outcomes:", e);
            const r = fg(e, this._options.tunnel && Nr(this._dsn));
            this._sendEnvelope(r)
        }
    }
    let Lt;

    function vy() {
        if (Lt) return Lt;
        if (an(G.fetch)) return Lt = G.fetch.bind(G);
        const t = G.document;
        let e = G.fetch;
        if (t && typeof t.createElement == "function") try {
            const r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r);
            const n = r.contentWindow;
            n && n.fetch && (e = n.fetch), t.head.removeChild(r)
        } catch (r) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return Lt = e.bind(G)
    }

    function by() {
        Lt = void 0
    }

    function Ey(t, e = vy()) {
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
                return by(), r -= s, n--, br(u)
            }
        }
        return Ds(t, i)
    }
    const Sy = 4;

    function wy(t) {
        function e(r) {
            return new se((n, i) => {
                const o = new XMLHttpRequest;
                o.onerror = i, o.onreadystatechange = () => {
                    o.readyState === Sy && n({
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
        return Ds(t, e)
    }
    const Cr = "?",
        Oy = 30,
        ky = 40,
        Ty = 50;

    function Wn(t, e, r, n) {
        const i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i
    }
    const xy = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Ry = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Ay = t => {
            const e = xy.exec(t);
            if (e) {
                if (e[2] && e[2].indexOf("eval") === 0) {
                    const o = Ry.exec(e[2]);
                    o && (e[2] = o[1], e[3] = o[2], e[4] = o[3])
                }
                const [n, i] = js(e[1] || Cr, e[2]);
                return Wn(i, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        Iy = [Oy, Ay],
        Py = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Ny = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Dy = t => {
            const e = Py.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const o = Ny.exec(e[3]);
                    o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "")
                }
                let n = e[3],
                    i = e[1] || Cr;
                return [i, n] = js(i, n), Wn(n, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        $y = [Ty, Dy],
        Ly = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Cy = t => {
            const e = Ly.exec(t);
            return e ? Wn(e[2], e[1] || Cr, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        jy = [ky, Cy],
        Uy = [Iy, $y, jy],
        My = gs(...Uy),
        js = (t, e) => {
            const r = t.indexOf("safari-extension") !== -1,
                n = t.indexOf("safari-web-extension") !== -1;
            return r || n ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Cr, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
    class je {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = je.id
        }
        __init2() {
            this._installFunc = {
                onerror: By,
                onunhandledrejection: Fy
            }
        }
        constructor(e) {
            je.prototype.__init.call(this), je.prototype.__init2.call(this), this._options = {
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
                n && e[r] && (Yy(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    je.__initStatic();

    function By() {
        De("error", t => {
            const [e, r, n] = Bs();
            if (!e.getIntegration(je)) return;
            const {
                msg: i,
                url: o,
                line: s,
                column: a,
                error: u
            } = t;
            if ($s() || u && u.__sentry_own_request__) return;
            const f = u === void 0 && Ve(i) ? Gy(i, o, s, a) : Us(Hn(r, u || i, void 0, n, !1), o, s, a);
            f.level = "error", Ms(e, u, f, "onerror")
        })
    }

    function Fy() {
        De("unhandledrejection", t => {
            const [e, r, n] = Bs();
            if (!e.getIntegration(je)) return;
            let i = t;
            try {
                "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
            } catch {}
            if ($s() || i && i.__sentry_own_request__) return !0;
            const o = fs(i) ? qy(i) : Hn(r, i, void 0, n, !0);
            o.level = "error", Ms(e, i, o, "onunhandledrejection")
        })
    }

    function qy(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function Gy(t, e, r, n) {
        const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let o = us(t) ? t.message : t,
            s = "Error";
        const a = o.match(i);
        return a && (s = a[1], o = a[2]), Us({
            exception: {
                values: [{
                    type: s,
                    value: o
                }]
            }
        }, e, r, n)
    }

    function Us(t, e, r, n) {
        const i = t.exception = t.exception || {},
            o = i.values = i.values || [],
            s = o[0] = o[0] || {},
            a = s.stacktrace = s.stacktrace || {},
            u = a.frames = a.frames || [],
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            h = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Ve(e) && e.length > 0 ? e : m_();
        return u.length === 0 && u.push({
            colno: f,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: h
        }), t
    }

    function Yy(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.log(`Global Handler attached: ${t}`)
    }

    function Ms(t, e, r, n) {
        Ft(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function Bs() {
        const t = Q(),
            e = t.getClient(),
            r = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, r.stackParser, r.attachStacktrace]
    }
    const Hy = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
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
            this._options.setTimeout && re(G, "setTimeout", ro), this._options.setInterval && re(G, "setInterval", ro), this._options.requestAnimationFrame && re(G, "requestAnimationFrame", Wy), this._options.XMLHttpRequest && "XMLHttpRequest" in G && re(XMLHttpRequest.prototype, "send", zy);
            const e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : Hy).forEach(Ky)
        }
    }
    Yt.__initStatic();

    function ro(t) {
        return function(...e) {
            const r = e[0];
            return e[0] = mt(r, {
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

    function Wy(t) {
        return function(e) {
            return t.apply(this, [mt(e, {
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

    function zy(t) {
        return function(...e) {
            const r = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i => {
                i in r && typeof r[i] == "function" && re(r, i, function(o) {
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
                        a = Fn(o);
                    return a && (s.mechanism.data.handler = Be(a)), mt(o, s)
                })
            }), t.apply(this, e)
        }
    }

    function Ky(t) {
        const e = G,
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (re(r, "addEventListener", function(n) {
            return function(i, o, s) {
                try {
                    typeof o.handleEvent == "function" && (o.handleEvent = mt(o.handleEvent, {
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
                return n.apply(this, [i, mt(o, {
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
        }), re(r, "removeEventListener", function(n) {
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
    const Vy = "cause",
        Jy = 5;
    class ft {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = ft.id
        }
        constructor(e = {}) {
            ft.prototype.__init.call(this), this._key = e.key || Vy, this._limit = e.limit || Jy
        }
        setupOnce() {
            const e = Q().getClient();
            e && Gn((r, n) => {
                const i = Q().getIntegration(ft);
                return i ? Xy(e.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    ft.__initStatic();

    function Xy(t, e, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !xt(i.originalException, Error)) return n;
        const o = Fs(t, r, i.originalException, e);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function Fs(t, e, r, n, i = []) {
        if (!xt(r[n], Error) || i.length + 1 >= e) return i;
        const o = Ls(t, r[n]);
        return Fs(t, e, r[n], n, [o, ...i])
    }
    class lt {
        constructor() {
            lt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = lt.id
        }
        setupOnce() {
            Gn(e => {
                if (Q().getIntegration(lt)) {
                    if (!G.navigator && !G.location && !G.document) return e;
                    const r = e.request && e.request.url || G.location && G.location.href,
                        {
                            referrer: n
                        } = G.document || {},
                        {
                            userAgent: i
                        } = G.navigator || {},
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
    lt.__initStatic();
    class pt {
        constructor() {
            pt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = pt.id
        }
        setupOnce(e, r) {
            const n = i => {
                if (i.type) return i;
                const o = r().getIntegration(pt);
                if (o) {
                    try {
                        if (Qy(i, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("Event dropped due to being a duplicate of previously captured event."), null
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
    pt.__initStatic();

    function Qy(t, e) {
        return e ? !!(Zy(t, e) || em(t, e)) : !1
    }

    function Zy(t, e) {
        const r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !Gs(t, e) || !qs(t, e))
    }

    function em(t, e) {
        const r = no(e),
            n = no(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !Gs(t, e) || !qs(t, e))
    }

    function qs(t, e) {
        let r = io(t),
            n = io(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let i = 0; i < n.length; i++) {
            const o = n[i],
                s = r[i];
            if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function) return !1
        }
        return !0
    }

    function Gs(t, e) {
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

    function no(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function io(t) {
        const e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const tm = [new ut, new qt, new Yt, new Gt, new je, new ft, new pt, new lt];

    function rm(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = tm), t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__), G.SENTRY_RELEASE && G.SENTRY_RELEASE.id && (t.release = G.SENTRY_RELEASE.id)), t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: R_(t.stackParser || My),
            integrations: Lg(t),
            transport: t.transport || (ys() ? Ey : wy)
        };
        Hg(my, e), t.autoSessionTracking && nm()
    }

    function oo(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function nm() {
        if (typeof G.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && D.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const t = Q();
        t.captureSession && (oo(t), De("history", ({
            from: e,
            to: r
        }) => {
            e === void 0 || e === r || oo(Q())
        }))
    }
    const im = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        om = {
            RETRY: im
        },
        sm = "CHARGEMENT IMPOSSIBLE. APPUYEZ POUR RÉESSAYER.",
        am = {
            RETRY: sm
        },
        cm = "IMPOSSIBILE CARICARE. CLICCA PER RIPROVARE.",
        um = {
            RETRY: cm
        },
        fm = "LADEN FEHLGESCHLAGEN. DRÜCKEN ZUM ERNEUT VERSUCHEN.",
        lm = {
            RETRY: fm
        },
        pm = "CARGA FALLIDA. TOCA PARA VOLVER A INTENTARLO.",
        dm = {
            RETRY: pm
        },
        hm = "NO SE PUEDE CARGAR. TOCA PARA VOLVER A INTENTARLO.",
        _m = {
            RETRY: hm
        },
        so = {
            en: om,
            fr: am,
            it: um,
            de: lm,
            es: dm,
            "es-XL": _m
        };
    let gm = class {
        constructor(e) {
            fe(this, "manifest");
            fe(this, "registered", {});
            fe(this, "register", e => {
                this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
            });
            fe(this, "load", async e => {
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
                if (a_("[loader] load success", {
                        app: e.app,
                        appVersion: o.version ?? i.version,
                        loaderVersion: window.tv.manifest.loader.version,
                        branch: n
                    }), !e.autoMount) return;
                const s = e;
                s.version = o.version ?? i.version, this.mount(s)
            });
            fe(this, "connect", (e, r) => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(e, r)
            });
            fe(this, "mount", e => {
                var s, a;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const u = this.registered.info(e);
                    As({
                        branch: u.branch,
                        "app.tag": u.tag,
                        "app.type": u.type,
                        "app.version": u.version,
                        "app.wrapper": u.wrapper
                    }), wo.pageView(u.tag)
                }
                gr.setup(e.app, ((s = e.room) == null ? void 0 : s.code) ?? ((a = e.client) == null ? void 0 : a.code));
                const n = document.querySelectorAll("[data-tv-style]"),
                    o = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(u => {
                        const f = document.createElement("link");
                        return f.rel = "stylesheet", f.href = u.href, f.setAttribute("data-tv-style", ""), f
                    });
                document.head.append(...o), n.forEach(u => u.remove()), this.registered.unmount = this.registered.mount(e) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            fe(this, "debugLoad", async (e, r) => {
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
                i = so[n] ?? so.en;
            e.classList.add("error"), r.textContent = i.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    };
    const ao = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        ym = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        mm = t => {
            rm({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: ym,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === ao.EcastEntityNotFound) return Og("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === ao.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(e, r);
                        n && (e.contexts = e.contexts || {}, e.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return e
                }
            }), As({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    let co;
    async function uo() {
        if (!co) try {
            co = await navigator.wakeLock.request("screen")
        } catch (t) {
            console.warn(t)
        }
    }
    const vm = async () => {
        navigator.wakeLock && (await uo(), document.addEventListener("visibilitychange", () => {
            document.visibilityState === "visible" && uo()
        }))
    };

    function bm(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                e += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
    }

    function Em() {
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

    function fo(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = Em(), document.getElementsByTagName("html")[0].append(e);
        const n = document.getElementById("app");
        n.innerHTML = bm(t)
    }

    function Sm() {
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

    function wm() {
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

    function Om() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = wm(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = Sm()
    }
    const km = {
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
                path: "/gallery/:galleryId/:artifactId",
                handler: t => {
                    const e = $i(t.data.galleryId);
                    return !e || !e.categoryId ? {
                        redirect: "/"
                    } : (t.data.categoryId = e.categoryId, {
                        load: e.tag
                    })
                }
            }, {
                path: "/render/:galleryId/:artifactId",
                handler: t => {
                    const e = $i(t.data.galleryId);
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
                    Om()
                }
            }, {
                path: "/debug",
                handler: () => {
                    fo()
                }
            }, {
                path: ["/debug/:app", "/debug/local/:app"],
                handler: t => {
                    fo(t.data.app)
                }
            }, {
                path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
                debugLoad: "local"
            }, {
                path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
                debugLoad: "cloud"
            }]
        },
        Tm = {
            hmrApps: ["teeko-web"],
            hostnames: ["teeko.jackboxgames.com"],
            routes: [{
                path: ["/", "/event"],
                load: "@teeko-web"
            }]
        };
    class xm {
        constructor(e) {
            fe(this, "hmrApp", "loader");
            fe(this, "sites");
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
    const Rm = "production",
        Am = 1,
        Im = {
            branch: "main",
            sha: "9ab1dd998d9d9a22506bf42bcb8843017fbbd5fa",
            lastUpdated: 1696614088529,
            version: "5.275.119",
            type: "production"
        },
        Pm = {
            main: {
                sha: "9ab1dd998d9d9a22506bf42bcb8843017fbbd5fa",
                lastUpdated: 1696614088529,
                version: "5.275.119",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.266.119"
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
                        version: "5.266.119"
                    },
                    "awshirt-tjsp": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/tjsp/awshirt",
                        version: "5.256.119"
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
                        version: "5.266.119"
                    },
                    awshirt2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/awshirt2",
                        version: "5.275.119"
                    },
                    "nopus-opus": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/nopus-opus",
                        version: "5.265.119"
                    },
                    "risky-text": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/risky-text",
                        version: "5.271.119"
                    },
                    "time-trivia": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/time-trivia",
                        version: "5.248.119"
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
        Nm = {
            environment: Rm,
            version: Am,
            loader: Im,
            branches: Pm
        },
        zn = Nm;
    let Dm = gm;
    const Dt = new Dm(zn);
    window.tv = {
        debugLoad: Dt.debugLoad,
        load: Dt.load,
        register: Dt.register,
        mount: Dt.mount,
        connect: Dt.connect,
        manifest: zn
    };
    mm(zn);
    wo.setup();
    gr.setup();
    vm();
    new xm([km, Tm])
});
export default $m();
//# sourceMappingURL=d24c306f.js.map