var xu = Object.defineProperty;
var Iu = (t, e, r) => e in t ? xu(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var $u = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var Z = (t, e, r) => (Iu(t, typeof e != "symbol" ? e + "" : e, r), r);
var u0 = $u((f0, mu) => {
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
    var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Au(t) {
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
    var Xe = {
            DEBUG: !1,
            LIB_VERSION: "2.45.0"
        },
        me;
    if (typeof window > "u") {
        var va = {
            hostname: ""
        };
        me = {
            navigator: {
                userAgent: ""
            },
            document: {
                location: va,
                referrer: ""
            },
            screen: {
                width: 0,
                height: 0
            },
            location: va
        }
    } else me = window;
    var Vr = Array.prototype,
        Pu = Function.prototype,
        Js = Object.prototype,
        Ke = Vr.slice,
        gr = Js.toString,
        Xr = Js.hasOwnProperty,
        pe = me.console,
        Fe = me.navigator,
        V = me.document,
        Zt = me.opera,
        Ar = me.screen,
        Ae = Fe.userAgent,
        yn = Pu.bind,
        ma = Vr.forEach,
        ba = Vr.indexOf,
        Ea = Vr.map,
        Nu = Array.isArray,
        Gn = {},
        u = {
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        J = {
            log: function() {
                if (Xe.DEBUG && !u.isUndefined(pe) && pe) try {
                    pe.log.apply(pe, arguments)
                } catch {
                    u.each(arguments, function(e) {
                        pe.log(e)
                    })
                }
            },
            warn: function() {
                if (Xe.DEBUG && !u.isUndefined(pe) && pe) {
                    var t = ["Mixpanel warning:"].concat(u.toArray(arguments));
                    try {
                        pe.warn.apply(pe, t)
                    } catch {
                        u.each(t, function(r) {
                            pe.warn(r)
                        })
                    }
                }
            },
            error: function() {
                if (Xe.DEBUG && !u.isUndefined(pe) && pe) {
                    var t = ["Mixpanel error:"].concat(u.toArray(arguments));
                    try {
                        pe.error.apply(pe, t)
                    } catch {
                        u.each(t, function(r) {
                            pe.error(r)
                        })
                    }
                }
            },
            critical: function() {
                if (!u.isUndefined(pe) && pe) {
                    var t = ["Mixpanel error:"].concat(u.toArray(arguments));
                    try {
                        pe.error.apply(pe, t)
                    } catch {
                        u.each(t, function(r) {
                            pe.error(r)
                        })
                    }
                }
            }
        },
        vn = function(t, e) {
            return function() {
                return arguments[0] = "[" + e + "] " + arguments[0], t.apply(J, arguments)
            }
        },
        hi = function(t) {
            return {
                log: vn(J.log, t),
                error: vn(J.error, t),
                critical: vn(J.critical, t)
            }
        };
    u.bind = function(t, e) {
        var r, n;
        if (yn && t.bind === yn) return yn.apply(t, Ke.call(arguments, 1));
        if (!u.isFunction(t)) throw new TypeError;
        return r = Ke.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return t.apply(e, r.concat(Ke.call(arguments)));
            var i = {};
            i.prototype = t.prototype;
            var a = new i;
            i.prototype = null;
            var s = t.apply(a, r.concat(Ke.call(arguments)));
            return Object(s) === s ? s : a
        }, n
    };
    u.each = function(t, e, r) {
        if (t != null) {
            if (ma && t.forEach === ma) t.forEach(e, r);
            else if (t.length === +t.length) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (n in t && e.call(r, t[n], n, t) === Gn) return
            } else
                for (var a in t)
                    if (Xr.call(t, a) && e.call(r, t[a], a, t) === Gn) return
        }
    };
    u.extend = function(t) {
        return u.each(Ke.call(arguments, 1), function(e) {
            for (var r in e) e[r] !== void 0 && (t[r] = e[r])
        }), t
    };
    u.isArray = Nu || function(t) {
        return gr.call(t) === "[object Array]"
    };
    u.isFunction = function(t) {
        try {
            return /^\s*\bfunction\b/.test(t)
        } catch {
            return !1
        }
    };
    u.isArguments = function(t) {
        return !!(t && Xr.call(t, "callee"))
    };
    u.toArray = function(t) {
        return t ? t.toArray ? t.toArray() : u.isArray(t) || u.isArguments(t) ? Ke.call(t) : u.values(t) : []
    };
    u.map = function(t, e, r) {
        if (Ea && t.map === Ea) return t.map(e, r);
        var n = [];
        return u.each(t, function(i) {
            n.push(e.call(r, i))
        }), n
    };
    u.keys = function(t) {
        var e = [];
        return t === null || u.each(t, function(r, n) {
            e[e.length] = n
        }), e
    };
    u.values = function(t) {
        var e = [];
        return t === null || u.each(t, function(r) {
            e[e.length] = r
        }), e
    };
    u.include = function(t, e) {
        var r = !1;
        return t === null ? r : ba && t.indexOf === ba ? t.indexOf(e) != -1 : (u.each(t, function(n) {
            if (r || (r = n === e)) return Gn
        }), r)
    };
    u.includes = function(t, e) {
        return t.indexOf(e) !== -1
    };
    u.inherit = function(t, e) {
        return t.prototype = new e, t.prototype.constructor = t, t.superclass = e.prototype, t
    };
    u.isObject = function(t) {
        return t === Object(t) && !u.isArray(t)
    };
    u.isEmptyObject = function(t) {
        if (u.isObject(t)) {
            for (var e in t)
                if (Xr.call(t, e)) return !1;
            return !0
        }
        return !1
    };
    u.isUndefined = function(t) {
        return t === void 0
    };
    u.isString = function(t) {
        return gr.call(t) == "[object String]"
    };
    u.isDate = function(t) {
        return gr.call(t) == "[object Date]"
    };
    u.isNumber = function(t) {
        return gr.call(t) == "[object Number]"
    };
    u.isElement = function(t) {
        return !!(t && t.nodeType === 1)
    };
    u.encodeDates = function(t) {
        return u.each(t, function(e, r) {
            u.isDate(e) ? t[r] = u.formatDate(e) : u.isObject(e) && (t[r] = u.encodeDates(e))
        }), t
    };
    u.timestamp = function() {
        return Date.now = Date.now || function() {
            return +new Date
        }, Date.now()
    };
    u.formatDate = function(t) {
        function e(r) {
            return r < 10 ? "0" + r : r
        }
        return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds())
    };
    u.strip_empty_properties = function(t) {
        var e = {};
        return u.each(t, function(r, n) {
            u.isString(r) && r.length > 0 && (e[n] = r)
        }), e
    };
    u.truncate = function(t, e) {
        var r;
        return typeof t == "string" ? r = t.slice(0, e) : u.isArray(t) ? (r = [], u.each(t, function(n) {
            r.push(u.truncate(n, e))
        })) : u.isObject(t) ? (r = {}, u.each(t, function(n, i) {
            r[i] = u.truncate(n, e)
        })) : r = t, r
    };
    u.JSONEncode = function() {
        return function(t) {
            var e = t,
                r = function(i) {
                    var a = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        s = {
                            "\b": "\\b",
                            "	": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    return a.lastIndex = 0, a.test(i) ? '"' + i.replace(a, function(o) {
                        var c = s[o];
                        return typeof c == "string" ? c : "\\u" + ("0000" + o.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + i + '"'
                },
                n = function(i, a) {
                    var s = "",
                        o = "    ",
                        c = 0,
                        l = "",
                        d = "",
                        g = 0,
                        y = s,
                        b = [],
                        E = a[i];
                    switch (E && typeof E == "object" && typeof E.toJSON == "function" && (E = E.toJSON(i)), typeof E) {
                        case "string":
                            return r(E);
                        case "number":
                            return isFinite(E) ? String(E) : "null";
                        case "boolean":
                        case "null":
                            return String(E);
                        case "object":
                            if (!E) return "null";
                            if (s += o, b = [], gr.apply(E) === "[object Array]") {
                                for (g = E.length, c = 0; c < g; c += 1) b[c] = n(c, E) || "null";
                                return d = b.length === 0 ? "[]" : s ? `[
` + s + b.join(`,
` + s) + `
` + y + "]" : "[" + b.join(",") + "]", s = y, d
                            }
                            for (l in E) Xr.call(E, l) && (d = n(l, E), d && b.push(r(l) + (s ? ": " : ":") + d));
                            return d = b.length === 0 ? "{}" : s ? "{" + b.join(",") + y + "}" : "{" + b.join(",") + "}", s = y, d
                    }
                };
            return n("", {
                "": e
            })
        }
    }();
    u.JSONDecode = function() {
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
                var E = new SyntaxError(b);
                throw E.at = t, E.text = n, E
            },
            a = function(b) {
                return b && b !== e && i("Expected '" + b + "' instead of '" + e + "'"), e = n.charAt(t), t += 1, e
            },
            s = function() {
                var b, E = "";
                for (e === "-" && (E = "-", a("-")); e >= "0" && e <= "9";) E += e, a();
                if (e === ".")
                    for (E += "."; a() && e >= "0" && e <= "9";) E += e;
                if (e === "e" || e === "E")
                    for (E += e, a(), (e === "-" || e === "+") && (E += e, a()); e >= "0" && e <= "9";) E += e, a();
                if (b = +E, !isFinite(b)) i("Bad number");
                else return b
            },
            o = function() {
                var b, E, I = "",
                    A;
                if (e === '"')
                    for (; a();) {
                        if (e === '"') return a(), I;
                        if (e === "\\")
                            if (a(), e === "u") {
                                for (A = 0, E = 0; E < 4 && (b = parseInt(a(), 16), !!isFinite(b)); E += 1) A = A * 16 + b;
                                I += String.fromCharCode(A)
                            } else if (typeof r[e] == "string") I += r[e];
                        else break;
                        else I += e
                    }
                i("Bad string")
            },
            c = function() {
                for (; e && e <= " ";) a()
            },
            l = function() {
                switch (e) {
                    case "t":
                        return a("t"), a("r"), a("u"), a("e"), !0;
                    case "f":
                        return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
                    case "n":
                        return a("n"), a("u"), a("l"), a("l"), null
                }
                i('Unexpected "' + e + '"')
            },
            d, g = function() {
                var b = [];
                if (e === "[") {
                    if (a("["), c(), e === "]") return a("]"), b;
                    for (; e;) {
                        if (b.push(d()), c(), e === "]") return a("]"), b;
                        a(","), c()
                    }
                }
                i("Bad array")
            },
            y = function() {
                var b, E = {};
                if (e === "{") {
                    if (a("{"), c(), e === "}") return a("}"), E;
                    for (; e;) {
                        if (b = o(), c(), a(":"), Object.hasOwnProperty.call(E, b) && i('Duplicate key "' + b + '"'), E[b] = d(), c(), e === "}") return a("}"), E;
                        a(","), c()
                    }
                }
                i("Bad object")
            };
        return d = function() {
                switch (c(), e) {
                    case "{":
                        return y();
                    case "[":
                        return g();
                    case '"':
                        return o();
                    case "-":
                        return s();
                    default:
                        return e >= "0" && e <= "9" ? s() : l()
                }
            },
            function(b) {
                var E;
                return n = b, t = 0, e = " ", E = d(), c(), e && i("Syntax error"), E
            }
    }();
    u.base64Encode = function(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r, n, i, a, s, o, c, l, d = 0,
            g = 0,
            y = "",
            b = [];
        if (!t) return t;
        t = u.utf8Encode(t);
        do r = t.charCodeAt(d++), n = t.charCodeAt(d++), i = t.charCodeAt(d++), l = r << 16 | n << 8 | i, a = l >> 18 & 63, s = l >> 12 & 63, o = l >> 6 & 63, c = l & 63, b[g++] = e.charAt(a) + e.charAt(s) + e.charAt(o) + e.charAt(c); while (d < t.length);
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
    u.utf8Encode = function(t) {
        t = (t + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        var e = "",
            r, n, i = 0,
            a;
        for (r = n = 0, i = t.length, a = 0; a < i; a++) {
            var s = t.charCodeAt(a),
                o = null;
            s < 128 ? n++ : s > 127 && s < 2048 ? o = String.fromCharCode(s >> 6 | 192, s & 63 | 128) : o = String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128), o !== null && (n > r && (e += t.substring(r, n)), e += o, r = n = a + 1)
        }
        return n > r && (e += t.substring(r, t.length)), e
    };
    u.UUID = function() {
        var t = function() {
                for (var n = 1 * new Date, i = 0; n == 1 * new Date;) i++;
                return n.toString(16) + i.toString(16)
            },
            e = function() {
                return Math.random().toString(16).replace(".", "")
            },
            r = function() {
                var n = Ae,
                    i, a, s = [],
                    o = 0;

                function c(l, d) {
                    var g, y = 0;
                    for (g = 0; g < d.length; g++) y |= s[g] << g * 8;
                    return l ^ y
                }
                for (i = 0; i < n.length; i++) a = n.charCodeAt(i), s.unshift(a & 255), s.length >= 4 && (o = c(o, s), s = []);
                return s.length > 0 && (o = c(o, s)), o.toString(16)
            };
        return function() {
            var n = (Ar.height * Ar.width).toString(16);
            return t() + "-" + e() + "-" + r() + "-" + n + "-" + t()
        }
    }();
    var wa = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
    u.isBlockedUA = function(t) {
        var e;
        for (t = t.toLowerCase(), e = 0; e < wa.length; e++)
            if (t.indexOf(wa[e]) !== -1) return !0;
        return !1
    };
    u.HTTPBuildQuery = function(t, e) {
        var r, n, i = [];
        return u.isUndefined(e) && (e = "&"), u.each(t, function(a, s) {
            r = encodeURIComponent(a.toString()), n = encodeURIComponent(s), i[i.length] = n + "=" + r
        }), i.join(e)
    };
    u.getQueryParam = function(t, e) {
        e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var r = "[\\?&]" + e + "=([^&#]*)",
            n = new RegExp(r),
            i = n.exec(t);
        if (i === null || i && typeof i[1] != "string" && i[1].length) return "";
        var a = i[1];
        try {
            a = decodeURIComponent(a)
        } catch {
            J.error("Skipping decoding for malformed query param: " + a)
        }
        return a.replace(/\+/g, " ")
    };
    u.cookie = {
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
                e = u.JSONDecode(u.cookie.get(t)) || {}
            } catch {}
            return e
        },
        set_seconds: function(t, e, r, n, i, a, s) {
            var o = "",
                c = "",
                l = "";
            if (s) o = "; domain=" + s;
            else if (n) {
                var d = Sa(V.location.hostname);
                o = d ? "; domain=." + d : ""
            }
            if (r) {
                var g = new Date;
                g.setTime(g.getTime() + r * 1e3), c = "; expires=" + g.toGMTString()
            }
            a && (i = !0, l = "; SameSite=None"), i && (l += "; secure"), V.cookie = t + "=" + encodeURIComponent(e) + c + "; path=/" + o + l
        },
        set: function(t, e, r, n, i, a, s) {
            var o = "",
                c = "",
                l = "";
            if (s) o = "; domain=" + s;
            else if (n) {
                var d = Sa(V.location.hostname);
                o = d ? "; domain=." + d : ""
            }
            if (r) {
                var g = new Date;
                g.setTime(g.getTime() + r * 24 * 60 * 60 * 1e3), c = "; expires=" + g.toGMTString()
            }
            a && (i = !0, l = "; SameSite=None"), i && (l += "; secure");
            var y = t + "=" + encodeURIComponent(e) + c + "; path=/" + o + l;
            return V.cookie = y, y
        },
        remove: function(t, e, r) {
            u.cookie.set(t, "", -1, e, !1, !1, r)
        }
    };
    var mn = null,
        Pr = function(t, e) {
            if (mn !== null && !e) return mn;
            var r = !0;
            try {
                t = t || window.localStorage;
                var n = "__mplss_" + gi(8),
                    i = "xyz";
                t.setItem(n, i), t.getItem(n) !== i && (r = !1), t.removeItem(n)
            } catch {
                r = !1
            }
            return mn = r, r
        };
    u.localStorage = {
        is_supported: function(t) {
            var e = Pr(null, t);
            return e || J.error("localStorage unsupported; falling back to cookie store"), e
        },
        error: function(t) {
            J.error("localStorage error: " + t)
        },
        get: function(t) {
            try {
                return window.localStorage.getItem(t)
            } catch (e) {
                u.localStorage.error(e)
            }
            return null
        },
        parse: function(t) {
            try {
                return u.JSONDecode(u.localStorage.get(t)) || {}
            } catch {}
            return null
        },
        set: function(t, e) {
            try {
                window.localStorage.setItem(t, e)
            } catch (r) {
                u.localStorage.error(r)
            }
        },
        remove: function(t) {
            try {
                window.localStorage.removeItem(t)
            } catch (e) {
                u.localStorage.error(e)
            }
        }
    };
    u.register_event = function() {
        var t = function(n, i, a, s, o) {
            if (!n) {
                J.error("No valid element provided to register_event");
                return
            }
            if (n.addEventListener && !s) n.addEventListener(i, a, !!o);
            else {
                var c = "on" + i,
                    l = n[c];
                n[c] = e(n, a, l)
            }
        };

        function e(n, i, a) {
            var s = function(o) {
                if (o = o || r(window.event), !!o) {
                    var c = !0,
                        l, d;
                    return u.isFunction(a) && (l = a(o)), d = i.call(n, o), (l === !1 || d === !1) && (c = !1), c
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
    var Cu = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
    u.dom_query = function() {
        function t(i) {
            return i.all ? i.all : i.getElementsByTagName("*")
        }
        var e = /[\t\r\n]/g;

        function r(i, a) {
            var s = " " + a + " ";
            return (" " + i.className + " ").replace(e, " ").indexOf(s) >= 0
        }

        function n(i) {
            if (!V.getElementsByTagName) return [];
            var a = i.split(" "),
                s, o, c, l, d, g, y, b, E, I, A = [V];
            for (g = 0; g < a.length; g++) {
                if (s = a[g].replace(/^\s+/, "").replace(/\s+$/, ""), s.indexOf("#") > -1) {
                    o = s.split("#"), c = o[0];
                    var $ = o[1],
                        j = V.getElementById($);
                    if (!j || c && j.nodeName.toLowerCase() != c) return [];
                    A = [j];
                    continue
                }
                if (s.indexOf(".") > -1) {
                    o = s.split("."), c = o[0];
                    var Q = o[1];
                    for (c || (c = "*"), l = [], d = 0, y = 0; y < A.length; y++)
                        for (c == "*" ? E = t(A[y]) : E = A[y].getElementsByTagName(c), b = 0; b < E.length; b++) l[d++] = E[b];
                    for (A = [], I = 0, y = 0; y < l.length; y++) l[y].className && u.isString(l[y].className) && r(l[y], Q) && (A[I++] = l[y]);
                    continue
                }
                var le = s.match(Cu);
                if (le) {
                    c = le[1];
                    var se = le[2],
                        oe = le[3],
                        ce = le[4];
                    for (c || (c = "*"), l = [], d = 0, y = 0; y < A.length; y++)
                        for (c == "*" ? E = t(A[y]) : E = A[y].getElementsByTagName(c), b = 0; b < E.length; b++) l[d++] = E[b];
                    A = [], I = 0;
                    var X;
                    switch (oe) {
                        case "=":
                            X = function(F) {
                                return F.getAttribute(se) == ce
                            };
                            break;
                        case "~":
                            X = function(F) {
                                return F.getAttribute(se).match(new RegExp("\\b" + ce + "\\b"))
                            };
                            break;
                        case "|":
                            X = function(F) {
                                return F.getAttribute(se).match(new RegExp("^" + ce + "-?"))
                            };
                            break;
                        case "^":
                            X = function(F) {
                                return F.getAttribute(se).indexOf(ce) === 0
                            };
                            break;
                        case "$":
                            X = function(F) {
                                return F.getAttribute(se).lastIndexOf(ce) == F.getAttribute(se).length - ce.length
                            };
                            break;
                        case "*":
                            X = function(F) {
                                return F.getAttribute(se).indexOf(ce) > -1
                            };
                            break;
                        default:
                            X = function(F) {
                                return F.getAttribute(se)
                            }
                    }
                    for (A = [], I = 0, y = 0; y < l.length; y++) X(l[y]) && (A[I++] = l[y]);
                    continue
                }
                for (c = s, l = [], d = 0, y = 0; y < A.length; y++)
                    for (E = A[y].getElementsByTagName(c), b = 0; b < E.length; b++) l[d++] = E[b];
                A = l
            }
            return A
        }
        return function(i) {
            return u.isElement(i) ? [i] : u.isObject(i) && !u.isUndefined(i.length) ? i : n.call(this, i)
        }
    }();
    u.info = {
        campaignParams: function() {
            var t = "utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                e = "",
                r = {};
            return u.each(t, function(n) {
                e = u.getQueryParam(V.URL, n), e.length && (r[n] = e)
            }), r
        },
        searchEngine: function(t) {
            return t.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : t.search("https?://(.*)bing.com") === 0 ? "bing" : t.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : t.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null
        },
        searchInfo: function(t) {
            var e = u.info.searchEngine(t),
                r = e != "yahoo" ? "q" : "p",
                n = {};
            if (e !== null) {
                n.$search_engine = e;
                var i = u.getQueryParam(t, r);
                i.length && (n.mp_keyword = i)
            }
            return n
        },
        browser: function(t, e, r) {
            return e = e || "", r || u.includes(t, " OPR/") ? u.includes(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : u.includes(t, "IEMobile") || u.includes(t, "WPDesktop") ? "Internet Explorer Mobile" : u.includes(t, "SamsungBrowser/") ? "Samsung Internet" : u.includes(t, "Edge") || u.includes(t, "Edg/") ? "Microsoft Edge" : u.includes(t, "FBIOS") ? "Facebook Mobile" : u.includes(t, "Chrome") ? "Chrome" : u.includes(t, "CriOS") ? "Chrome iOS" : u.includes(t, "UCWEB") || u.includes(t, "UCBrowser") ? "UC Browser" : u.includes(t, "FxiOS") ? "Firefox iOS" : u.includes(e, "Apple") ? u.includes(t, "Mobile") ? "Mobile Safari" : "Safari" : u.includes(t, "Android") ? "Android Mobile" : u.includes(t, "Konqueror") ? "Konqueror" : u.includes(t, "Firefox") ? "Firefox" : u.includes(t, "MSIE") || u.includes(t, "Trident/") ? "Internet Explorer" : u.includes(t, "Gecko") ? "Mozilla" : ""
        },
        browserVersion: function(t, e, r) {
            var n = u.info.browser(t, e, r),
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
                a = i[n];
            if (a === void 0) return null;
            var s = t.match(a);
            return s ? parseFloat(s[s.length - 2]) : null
        },
        os: function() {
            var t = Ae;
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
            return u.extend(u.strip_empty_properties({
                $os: u.info.os(),
                $browser: u.info.browser(Ae, Fe.vendor, Zt),
                $referrer: V.referrer,
                $referring_domain: u.info.referringDomain(V.referrer),
                $device: u.info.device(Ae)
            }), {
                $current_url: me.location.href,
                $browser_version: u.info.browserVersion(Ae, Fe.vendor, Zt),
                $screen_height: Ar.height,
                $screen_width: Ar.width,
                mp_lib: "web",
                $lib_version: Xe.LIB_VERSION,
                $insert_id: gi(),
                time: u.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return u.extend(u.strip_empty_properties({
                $os: u.info.os(),
                $browser: u.info.browser(Ae, Fe.vendor, Zt)
            }), {
                $browser_version: u.info.browserVersion(Ae, Fe.vendor, Zt)
            })
        },
        pageviewInfo: function(t) {
            return u.strip_empty_properties({
                mp_page: t,
                mp_referrer: V.referrer,
                mp_browser: u.info.browser(Ae, Fe.vendor, Zt),
                mp_platform: u.info.os()
            })
        }
    };
    var gi = function(t) {
            var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return t ? e.substring(0, t) : e
        },
        Lu = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        Du = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Sa = function(t) {
            var e = Du,
                r = t.split("."),
                n = r[r.length - 1];
            (n.length > 4 || n === "com" || n === "org") && (e = Lu);
            var i = t.match(e);
            return i ? i[0] : ""
        },
        Nr = null,
        Cr = null;
    typeof JSON < "u" && (Nr = JSON.stringify, Cr = JSON.parse);
    Nr = Nr || u.JSONEncode;
    Cr = Cr || u.JSONDecode;
    u.toArray = u.toArray;
    u.isObject = u.isObject;
    u.JSONEncode = u.JSONEncode;
    u.JSONDecode = u.JSONDecode;
    u.isBlockedUA = u.isBlockedUA;
    u.isEmptyObject = u.isEmptyObject;
    u.info = u.info;
    u.info.device = u.info.device;
    u.info.browser = u.info.browser;
    u.info.browserVersion = u.info.browserVersion;
    u.info.properties = u.info.properties;
    var He = function() {};
    He.prototype.create_properties = function() {};
    He.prototype.event_handler = function() {};
    He.prototype.after_track_handler = function() {};
    He.prototype.init = function(t) {
        return this.mp = t, this
    };
    He.prototype.track = function(t, e, r, n) {
        var i = this,
            a = u.dom_query(t);
        if (a.length === 0) {
            J.error("The DOM query (" + t + ") returned 0 elements");
            return
        }
        return u.each(a, function(s) {
            u.register_event(s, this.override_event, function(o) {
                var c = {},
                    l = i.create_properties(r, this),
                    d = i.mp.get_config("track_links_timeout");
                i.event_handler(o, this, c), window.setTimeout(i.track_callback(n, l, c, !0), d), i.mp.track(e, l, i.track_callback(n, l, c))
            })
        }, this), !0
    };
    He.prototype.track_callback = function(t, e, r, n) {
        n = n || !1;
        var i = this;
        return function() {
            r.callback_fired || (r.callback_fired = !0, !(t && t(n, e) === !1) && i.after_track_handler(e, r, n))
        }
    };
    He.prototype.create_properties = function(t, e) {
        var r;
        return typeof t == "function" ? r = t(e) : r = u.extend({}, t), r
    };
    var Ct = function() {
        this.override_event = "click"
    };
    u.inherit(Ct, He);
    Ct.prototype.create_properties = function(t, e) {
        var r = Ct.superclass.create_properties.apply(this, arguments);
        return e.href && (r.url = e.href), r
    };
    Ct.prototype.event_handler = function(t, e, r) {
        r.new_tab = t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank", r.href = e.href, r.new_tab || t.preventDefault()
    };
    Ct.prototype.after_track_handler = function(t, e) {
        e.new_tab || setTimeout(function() {
            window.location = e.href
        }, 0)
    };
    var Qr = function() {
        this.override_event = "submit"
    };
    u.inherit(Qr, He);
    Qr.prototype.event_handler = function(t, e, r) {
        r.element = e, t.preventDefault()
    };
    Qr.prototype.after_track_handler = function(t, e) {
        setTimeout(function() {
            e.element.submit()
        }, 0)
    };
    var Mu = hi("lock"),
        Ks = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
        };
    Ks.prototype.withLock = function(t, e, r) {
        !r && typeof e != "function" && (r = e, e = null);
        var n = r || new Date().getTime() + "|" + Math.random(),
            i = new Date().getTime(),
            a = this.storageKey,
            s = this.pollIntervalMS,
            o = this.timeoutMS,
            c = this.storage,
            l = a + ":X",
            d = a + ":Y",
            g = a + ":Z",
            y = function(j) {
                e && e(j)
            },
            b = function(j) {
                if (new Date().getTime() - i > o) {
                    Mu.error("Timeout waiting for mutex on " + a + "; clearing lock. [" + n + "]"), c.removeItem(g), c.removeItem(d), A();
                    return
                }
                setTimeout(function() {
                    try {
                        j()
                    } catch (Q) {
                        y(Q)
                    }
                }, s * (Math.random() + .1))
            },
            E = function(j, Q) {
                j() ? Q() : b(function() {
                    E(j, Q)
                })
            },
            I = function() {
                var j = c.getItem(d);
                if (j && j !== n) return !1;
                if (c.setItem(d, n), c.getItem(d) === n) return !0;
                if (!Pr(c, !0)) throw new Error("localStorage support dropped while acquiring lock");
                return !1
            },
            A = function() {
                c.setItem(l, n), E(I, function() {
                    if (c.getItem(l) === n) {
                        $();
                        return
                    }
                    b(function() {
                        if (c.getItem(d) !== n) {
                            A();
                            return
                        }
                        E(function() {
                            return !c.getItem(g)
                        }, $)
                    })
                })
            },
            $ = function() {
                c.setItem(g, "1");
                try {
                    t()
                } finally {
                    c.removeItem(g), c.getItem(d) === n && c.removeItem(d), c.getItem(l) === n && c.removeItem(l)
                }
            };
        try {
            if (Pr(c, !0)) A();
            else throw new Error("localStorage support check failed")
        } catch (j) {
            y(j)
        }
    };
    var ka = hi("batch"),
        nt = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || u.bind(ka.error, ka), this.lock = new Ks(t, {
                storage: this.storage
            }), this.pid = e.pid || null, this.memQueue = []
        };
    nt.prototype.enqueue = function(t, e, r) {
        var n = {
            id: gi(),
            flushAfter: new Date().getTime() + e * 2,
            payload: t
        };
        this.lock.withLock(u.bind(function() {
            var a;
            try {
                var s = this.readFromStorage();
                s.push(n), a = this.saveToStorage(s), a && this.memQueue.push(n)
            } catch {
                this.reportError("Error enqueueing item", t), a = !1
            }
            r && r(a)
        }, this), u.bind(function(a) {
            this.reportError("Error acquiring storage lock", a), r && r(!1)
        }, this), this.pid)
    };
    nt.prototype.fillBatch = function(t) {
        var e = this.memQueue.slice(0, t);
        if (e.length < t) {
            var r = this.readFromStorage();
            if (r.length) {
                var n = {};
                u.each(e, function(s) {
                    n[s.id] = !0
                });
                for (var i = 0; i < r.length; i++) {
                    var a = r[i];
                    if (new Date().getTime() > a.flushAfter && !n[a.id] && (a.orphaned = !0, e.push(a), e.length >= t)) break
                }
            }
        }
        return e
    };
    var Oa = function(t, e) {
        var r = [];
        return u.each(t, function(n) {
            n.id && !e[n.id] && r.push(n)
        }), r
    };
    nt.prototype.removeItemsByID = function(t, e) {
        var r = {};
        u.each(t, function(i) {
            r[i] = !0
        }), this.memQueue = Oa(this.memQueue, r);
        var n = u.bind(function() {
            var i;
            try {
                var a = this.readFromStorage();
                if (a = Oa(a, r), i = this.saveToStorage(a), i) {
                    a = this.readFromStorage();
                    for (var s = 0; s < a.length; s++) {
                        var o = a[s];
                        if (o.id && !!r[o.id]) return this.reportError("Item not removed from storage"), !1
                    }
                }
            } catch {
                this.reportError("Error removing items", t), i = !1
            }
            return i
        }, this);
        this.lock.withLock(function() {
            var a = n();
            e && e(a)
        }, u.bind(function(a) {
            var s = !1;
            if (this.reportError("Error acquiring storage lock", a), !Pr(this.storage, !0) && (s = n(), !s)) try {
                this.storage.removeItem(this.storageKey)
            } catch (o) {
                this.reportError("Error clearing queue", o)
            }
            e && e(s)
        }, this), this.pid)
    };
    var Ra = function(t, e) {
        var r = [];
        return u.each(t, function(n) {
            var i = n.id;
            if (i in e) {
                var a = e[i];
                a !== null && (n.payload = a, r.push(n))
            } else r.push(n)
        }), r
    };
    nt.prototype.updatePayloads = function(t, e) {
        this.memQueue = Ra(this.memQueue, t), this.lock.withLock(u.bind(function() {
            var n;
            try {
                var i = this.readFromStorage();
                i = Ra(i, t), n = this.saveToStorage(i)
            } catch {
                this.reportError("Error updating items", t), n = !1
            }
            e && e(n)
        }, this), u.bind(function(n) {
            this.reportError("Error acquiring storage lock", n), e && e(!1)
        }, this), this.pid)
    };
    nt.prototype.readFromStorage = function() {
        var t;
        try {
            t = this.storage.getItem(this.storageKey), t && (t = Cr(t), u.isArray(t) || (this.reportError("Invalid storage entry:", t), t = null))
        } catch (e) {
            this.reportError("Error retrieving queue", e), t = null
        }
        return t || []
    };
    nt.prototype.saveToStorage = function(t) {
        try {
            return this.storage.setItem(this.storageKey, Nr(t)), !0
        } catch (e) {
            return this.reportError("Error saving queue", e), !1
        }
    };
    nt.prototype.clear = function() {
        this.memQueue = [], this.storage.removeItem(this.storageKey)
    };
    var ju = 10 * 60 * 1e3,
        nr = hi("batch"),
        je = function(t, e) {
            this.errorReporter = e.errorReporter, this.queue = new nt(t, {
                errorReporter: u.bind(this.reportError, this),
                storage: e.storage
            }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
        };
    je.prototype.enqueue = function(t, e) {
        this.queue.enqueue(t, this.flushInterval, e)
    };
    je.prototype.start = function() {
        this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
    };
    je.prototype.stop = function() {
        this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
    };
    je.prototype.clear = function() {
        this.queue.clear()
    };
    je.prototype.resetBatchSize = function() {
        this.batchSize = this.libConfig.batch_size
    };
    je.prototype.resetFlush = function() {
        this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
    };
    je.prototype.scheduleFlush = function(t) {
        this.flushInterval = t, this.stopped || (this.timeoutID = setTimeout(u.bind(this.flush, this), this.flushInterval))
    };
    je.prototype.flush = function(t) {
        try {
            if (this.requestInProgress) {
                nr.log("Flush: Request already in progress");
                return
            }
            t = t || {};
            var e = this.libConfig.batch_request_timeout_ms,
                r = new Date().getTime(),
                n = this.batchSize,
                i = this.queue.fillBatch(n),
                a = [],
                s = {};
            if (u.each(i, function(l) {
                    var d = l.payload;
                    this.beforeSendHook && !l.orphaned && (d = this.beforeSendHook(d)), d && a.push(d), s[l.id] = d
                }, this), a.length < 1) {
                this.resetFlush();
                return
            }
            this.requestInProgress = !0;
            var o = u.bind(function(l) {
                    this.requestInProgress = !1;
                    try {
                        var d = !1;
                        if (t.unloading) this.queue.updatePayloads(s);
                        else if (u.isObject(l) && l.error === "timeout" && new Date().getTime() - r >= e) this.reportError("Network timeout; retrying"), this.flush();
                        else if (u.isObject(l) && l.xhr_req && (l.xhr_req.status >= 500 || l.xhr_req.status === 429 || l.error === "timeout")) {
                            var g = this.flushInterval * 2,
                                y = l.xhr_req.responseHeaders;
                            if (y) {
                                var b = y["Retry-After"];
                                b && (g = parseInt(b, 10) * 1e3 || g)
                            }
                            g = Math.min(ju, g), this.reportError("Error; retry in " + g + " ms"), this.scheduleFlush(g)
                        } else if (u.isObject(l) && l.xhr_req && l.xhr_req.status === 413)
                            if (i.length > 1) {
                                var E = Math.max(1, Math.floor(n / 2));
                                this.batchSize = Math.min(this.batchSize, E, i.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                            } else this.reportError("Single-event request too large; dropping", i), this.resetBatchSize(), d = !0;
                        else d = !0;
                        d && this.queue.removeItemsByID(u.map(i, function(I) {
                            return I.id
                        }), u.bind(function(I) {
                            I ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                        }, this))
                    } catch (I) {
                        this.reportError("Error handling API response", I), this.resetFlush()
                    }
                }, this),
                c = {
                    method: "POST",
                    verbose: !0,
                    ignore_json_errors: !0,
                    timeout_ms: e
                };
            t.unloading && (c.transport = "sendBeacon"), nr.log("MIXPANEL REQUEST:", a), this.sendRequest(a, c, o)
        } catch (l) {
            this.reportError("Error flushing request queue", l), this.resetFlush()
        }
    };
    je.prototype.reportError = function(t, e) {
        if (nr.error.apply(nr.error, arguments), this.errorReporter) try {
            e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
        } catch (r) {
            nr.error(r)
        }
    };
    var Uu = "__mp_opt_in_out_";

    function Bu(t, e) {
        Qs(!0, t, e)
    }

    function Fu(t, e) {
        Qs(!1, t, e)
    }

    function qu(t, e) {
        return Xs(t, e) === "1"
    }

    function Vs(t, e) {
        if (Hu(e)) return J.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = Xs(t, e) === "0";
        return r && J.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function _r(t) {
        return vi(t, function(e) {
            return this.get_config(e)
        })
    }

    function it(t) {
        return vi(t, function(e) {
            return this._get_config(e)
        })
    }

    function Ht(t) {
        return vi(t, function(e) {
            return this._get_config(e)
        })
    }

    function Gu(t, e) {
        e = e || {}, _i(e).remove(yi(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
    }

    function _i(t) {
        return t = t || {}, t.persistenceType === "localStorage" ? u.localStorage : u.cookie
    }

    function yi(t, e) {
        return e = e || {}, (e.persistencePrefix || Uu) + t
    }

    function Xs(t, e) {
        return _i(e).get(yi(t, e))
    }

    function Hu(t) {
        if (t && t.ignoreDnt) return !1;
        var e = t && t.window || me,
            r = e.navigator || {},
            n = !1;
        return u.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(i) {
            u.includes([!0, 1, "1", "yes"], i) && (n = !0)
        }), n
    }

    function Qs(t, e, r) {
        if (!u.isString(e) || !e.length) {
            J.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
            return
        }
        r = r || {}, _i(r).set(yi(e, r), t ? 1 : 0, u.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0
        })
    }

    function vi(t, e) {
        return function() {
            var r = !1;
            try {
                var n = e.call(this, "token"),
                    i = e.call(this, "ignore_dnt"),
                    a = e.call(this, "opt_out_tracking_persistence_type"),
                    s = e.call(this, "opt_out_tracking_cookie_prefix"),
                    o = e.call(this, "window");
                n && (r = Vs(n, {
                    ignoreDnt: i,
                    persistenceType: a,
                    persistencePrefix: s,
                    window: o
                }))
            } catch (l) {
                J.error("Unexpected error when checking tracking opt-out status: " + l)
            }
            if (!r) return t.apply(this, arguments);
            var c = arguments[arguments.length - 1];
            typeof c == "function" && c(0)
        }
    }
    var et = "$set",
        Lt = "$set_once",
        Pe = "$unset",
        ht = "$add",
        Ge = "$append",
        gt = "$union",
        tt = "$remove",
        Wu = "$delete",
        Zs = {
            set_action: function(t, e) {
                var r = {},
                    n = {};
                return u.isObject(t) ? u.each(t, function(i, a) {
                    this._is_reserved_property(a) || (n[a] = i)
                }, this) : n[t] = e, r[et] = n, r
            },
            unset_action: function(t) {
                var e = {},
                    r = [];
                return u.isArray(t) || (t = [t]), u.each(t, function(n) {
                    this._is_reserved_property(n) || r.push(n)
                }, this), e[Pe] = r, e
            },
            set_once_action: function(t, e) {
                var r = {},
                    n = {};
                return u.isObject(t) ? u.each(t, function(i, a) {
                    this._is_reserved_property(a) || (n[a] = i)
                }, this) : n[t] = e, r[Lt] = n, r
            },
            union_action: function(t, e) {
                var r = {},
                    n = {};
                return u.isObject(t) ? u.each(t, function(i, a) {
                    this._is_reserved_property(a) || (n[a] = u.isArray(i) ? i : [i])
                }, this) : n[t] = u.isArray(e) ? e : [e], r[gt] = n, r
            },
            append_action: function(t, e) {
                var r = {},
                    n = {};
                return u.isObject(t) ? u.each(t, function(i, a) {
                    this._is_reserved_property(a) || (n[a] = i)
                }, this) : n[t] = e, r[Ge] = n, r
            },
            remove_action: function(t, e) {
                var r = {},
                    n = {};
                return u.isObject(t) ? u.each(t, function(i, a) {
                    this._is_reserved_property(a) || (n[a] = i)
                }, this) : n[t] = e, r[tt] = n, r
            },
            delete_action: function() {
                var t = {};
                return t[Wu] = "", t
            }
        },
        te = function() {};
    u.extend(te.prototype, Zs);
    te.prototype._init = function(t, e, r) {
        this._mixpanel = t, this._group_key = e, this._group_id = r
    };
    te.prototype.set = Ht(function(t, e, r) {
        var n = this.set_action(t, e);
        return u.isObject(t) && (r = e), this._send_request(n, r)
    });
    te.prototype.set_once = Ht(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return u.isObject(t) && (r = e), this._send_request(n, r)
    });
    te.prototype.unset = Ht(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    te.prototype.union = Ht(function(t, e, r) {
        u.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    te.prototype.delete = Ht(function(t) {
        var e = this.delete_action();
        return this._send_request(e, t)
    });
    te.prototype.remove = Ht(function(t, e, r) {
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    te.prototype._send_request = function(t, e) {
        t.$group_key = this._group_key, t.$group_id = this._group_id, t.$token = this._get_config("token");
        var r = u.encodeDates(t);
        return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/groups/",
            batcher: this._mixpanel.request_batchers.groups
        }, e)
    };
    te.prototype._is_reserved_property = function(t) {
        return t === "$group_key" || t === "$group_id"
    };
    te.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    te.prototype.toString = function() {
        return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
    };
    te.prototype.remove = te.prototype.remove;
    te.prototype.set = te.prototype.set;
    te.prototype.set_once = te.prototype.set_once;
    te.prototype.union = te.prototype.union;
    te.prototype.unset = te.prototype.unset;
    te.prototype.toString = te.prototype.toString;
    var M = function() {};
    u.extend(M.prototype, Zs);
    M.prototype._init = function(t) {
        this._mixpanel = t
    };
    M.prototype.set = it(function(t, e, r) {
        var n = this.set_action(t, e);
        return u.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n[et] = u.extend({}, u.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[et]), this._send_request(n, r)
    });
    M.prototype.set_once = it(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return u.isObject(t) && (r = e), this._send_request(n, r)
    });
    M.prototype.unset = it(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    M.prototype.increment = it(function(t, e, r) {
        var n = {},
            i = {};
        return u.isObject(t) ? (u.each(t, function(a, s) {
            if (!this._is_reserved_property(s))
                if (isNaN(parseFloat(a))) {
                    J.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else i[s] = a
        }, this), r = e) : (u.isUndefined(e) && (e = 1), i[t] = e), n[ht] = i, this._send_request(n, r)
    });
    M.prototype.append = it(function(t, e, r) {
        u.isObject(t) && (r = e);
        var n = this.append_action(t, e);
        return this._send_request(n, r)
    });
    M.prototype.remove = it(function(t, e, r) {
        u.isObject(t) && (r = e);
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    M.prototype.union = it(function(t, e, r) {
        u.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    M.prototype.track_charge = it(function(t, e, r) {
        if (!u.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
            J.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return
        }
        return this.append("$transactions", u.extend({
            $amount: t
        }, e), r)
    });
    M.prototype.clear_charges = function(t) {
        return this.set("$transactions", [], t)
    };
    M.prototype.delete_user = function() {
        if (!this._identify_called()) {
            J.error("mixpanel.people.delete_user() requires you to call identify() first");
            return
        }
        var t = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(t)
    };
    M.prototype.toString = function() {
        return this._mixpanel.toString() + ".people"
    };
    M.prototype._send_request = function(t, e) {
        t.$token = this._get_config("token"), t.$distinct_id = this._mixpanel.get_distinct_id();
        var r = this._mixpanel.get_property("$device_id"),
            n = this._mixpanel.get_property("$user_id"),
            i = this._mixpanel.get_property("$had_persisted_distinct_id");
        r && (t.$device_id = r), n && (t.$user_id = n), i && (t.$had_persisted_distinct_id = i);
        var a = u.encodeDates(t);
        return this._identify_called() ? this._mixpanel._track_or_batch({
            type: "people",
            data: a,
            endpoint: this._get_config("api_host") + "/engage/",
            batcher: this._mixpanel.request_batchers.people
        }, e) : (this._enqueue(t), u.isUndefined(e) || (this._get_config("verbose") ? e({
            status: -1,
            error: null
        }) : e(-1)), u.truncate(a, 255))
    };
    M.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    M.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0
    };
    M.prototype._enqueue = function(t) {
        et in t ? this._mixpanel.persistence._add_to_people_queue(et, t) : Lt in t ? this._mixpanel.persistence._add_to_people_queue(Lt, t) : Pe in t ? this._mixpanel.persistence._add_to_people_queue(Pe, t) : ht in t ? this._mixpanel.persistence._add_to_people_queue(ht, t) : Ge in t ? this._mixpanel.persistence._add_to_people_queue(Ge, t) : tt in t ? this._mixpanel.persistence._add_to_people_queue(tt, t) : gt in t ? this._mixpanel.persistence._add_to_people_queue(gt, t) : J.error("Invalid call to _enqueue():", t)
    };
    M.prototype._flush_one_queue = function(t, e, r, n) {
        var i = this,
            a = u.extend({}, this._mixpanel.persistence._get_queue(t)),
            s = a;
        !u.isUndefined(a) && u.isObject(a) && !u.isEmptyObject(a) && (i._mixpanel.persistence._pop_from_people_queue(t, a), n && (s = n(a)), e.call(i, s, function(o, c) {
            o === 0 && i._mixpanel.persistence._add_to_people_queue(t, a), u.isUndefined(r) || r(o, c)
        }))
    };
    M.prototype._flush = function(t, e, r, n, i, a, s) {
        var o = this,
            c = this._mixpanel.persistence._get_queue(Ge),
            l = this._mixpanel.persistence._get_queue(tt);
        if (this._flush_one_queue(et, this.set, t), this._flush_one_queue(Lt, this.set_once, n), this._flush_one_queue(Pe, this.unset, a, function(A) {
                return u.keys(A)
            }), this._flush_one_queue(ht, this.increment, e), this._flush_one_queue(gt, this.union, i), !u.isUndefined(c) && u.isArray(c) && c.length) {
            for (var d, g = function(A, $) {
                    A === 0 && o._mixpanel.persistence._add_to_people_queue(Ge, d), u.isUndefined(r) || r(A, $)
                }, y = c.length - 1; y >= 0; y--) d = c.pop(), u.isEmptyObject(d) || o.append(d, g);
            o._mixpanel.persistence.save()
        }
        if (!u.isUndefined(l) && u.isArray(l) && l.length) {
            for (var b, E = function(A, $) {
                    A === 0 && o._mixpanel.persistence._add_to_people_queue(tt, b), u.isUndefined(s) || s(A, $)
                }, I = l.length - 1; I >= 0; I--) b = l.pop(), u.isEmptyObject(b) || o.remove(b, E);
            o._mixpanel.persistence.save()
        }
    };
    M.prototype._is_reserved_property = function(t) {
        return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
    };
    M.prototype.set = M.prototype.set;
    M.prototype.set_once = M.prototype.set_once;
    M.prototype.unset = M.prototype.unset;
    M.prototype.increment = M.prototype.increment;
    M.prototype.append = M.prototype.append;
    M.prototype.remove = M.prototype.remove;
    M.prototype.union = M.prototype.union;
    M.prototype.track_charge = M.prototype.track_charge;
    M.prototype.clear_charges = M.prototype.clear_charges;
    M.prototype.delete_user = M.prototype.delete_user;
    M.prototype.toString = M.prototype.toString;
    var mi = "__mps",
        bi = "__mpso",
        Ei = "__mpus",
        wi = "__mpa",
        Si = "__mpap",
        ki = "__mpr",
        Oi = "__mpu",
        eo = "$people_distinct_id",
        Lr = "__alias",
        ur = "__timers",
        Yu = [mi, bi, Ei, wi, Si, ki, Oi, eo, Lr, ur],
        B = function(t) {
            this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
            var e = t.persistence;
            e !== "cookie" && e !== "localStorage" && (J.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && u.localStorage.is_supported() ? this.storage = u.localStorage : this.storage = u.cookie, this.load(), this.update_config(t), this.upgrade(t), this.save()
        };
    B.prototype.properties = function() {
        var t = {};
        return u.each(this.props, function(e, r) {
            u.include(Yu, r) || (t[r] = e)
        }), t
    };
    B.prototype.load = function() {
        if (!this.disabled) {
            var t = this.storage.parse(this.name);
            t && (this.props = u.extend({}, t))
        }
    };
    B.prototype.upgrade = function(t) {
        var e = t.upgrade,
            r, n;
        e && (r = "mp_super_properties", typeof e == "string" && (r = e), n = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), n && (this.props = u.extend(this.props, n.all, n.events))), !t.cookie_name && t.name !== "mixpanel" && (r = "mp_" + t.token + "_" + t.name, n = this.storage.parse(r), n && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(n))), this.storage === u.localStorage && (n = u.cookie.parse(this.name), u.cookie.remove(this.name), u.cookie.remove(this.name, !0), n && this.register_once(n))
    };
    B.prototype.save = function() {
        this.disabled || this.storage.set(this.name, u.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
    };
    B.prototype.remove = function() {
        this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
    };
    B.prototype.clear = function() {
        this.remove(), this.props = {}
    };
    B.prototype.register_once = function(t, e, r) {
        return u.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, u.each(t, function(n, i) {
            (!this.props.hasOwnProperty(i) || this.props[i] === e) && (this.props[i] = n)
        }, this), this.save(), !0) : !1
    };
    B.prototype.register = function(t, e) {
        return u.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, u.extend(this.props, t), this.save(), !0) : !1
    };
    B.prototype.unregister = function(t) {
        t in this.props && (delete this.props[t], this.save())
    };
    B.prototype.update_campaign_params = function() {
        this.campaign_params_saved || (this.register_once(u.info.campaignParams()), this.campaign_params_saved = !0)
    };
    B.prototype.update_search_keyword = function(t) {
        this.register(u.info.searchInfo(t))
    };
    B.prototype.update_referrer_info = function(t) {
        this.register_once({
            $initial_referrer: t || "$direct",
            $initial_referring_domain: u.info.referringDomain(t) || "$direct"
        }, "")
    };
    B.prototype.get_referrer_info = function() {
        return u.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    B.prototype.safe_merge = function(t) {
        return u.each(this.props, function(e, r) {
            r in t || (t[r] = e)
        }), t
    };
    B.prototype.update_config = function(t) {
        this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
    };
    B.prototype.set_disabled = function(t) {
        this.disabled = t, this.disabled ? this.remove() : this.save()
    };
    B.prototype.set_cookie_domain = function(t) {
        t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
    };
    B.prototype.set_cross_site = function(t) {
        t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
    };
    B.prototype.set_cross_subdomain = function(t) {
        t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
    };
    B.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    B.prototype.set_secure = function(t) {
        t !== this.secure && (this.secure = !!t, this.remove(), this.save())
    };
    B.prototype._add_to_people_queue = function(t, e) {
        var r = this._get_queue_key(t),
            n = e[t],
            i = this._get_or_create_queue(et),
            a = this._get_or_create_queue(Lt),
            s = this._get_or_create_queue(Pe),
            o = this._get_or_create_queue(ht),
            c = this._get_or_create_queue(gt),
            l = this._get_or_create_queue(tt, []),
            d = this._get_or_create_queue(Ge, []);
        r === mi ? (u.extend(i, n), this._pop_from_people_queue(ht, n), this._pop_from_people_queue(gt, n), this._pop_from_people_queue(Pe, n)) : r === bi ? (u.each(n, function(g, y) {
            y in a || (a[y] = g)
        }), this._pop_from_people_queue(Pe, n)) : r === Ei ? u.each(n, function(g) {
            u.each([i, a, o, c], function(y) {
                g in y && delete y[g]
            }), u.each(d, function(y) {
                g in y && delete y[g]
            }), s[g] = !0
        }) : r === wi ? (u.each(n, function(g, y) {
            y in i ? i[y] += g : (y in o || (o[y] = 0), o[y] += g)
        }, this), this._pop_from_people_queue(Pe, n)) : r === Oi ? (u.each(n, function(g, y) {
            u.isArray(g) && (y in c || (c[y] = []), c[y] = c[y].concat(g))
        }), this._pop_from_people_queue(Pe, n)) : r === ki ? (l.push(n), this._pop_from_people_queue(Ge, n)) : r === Si && (d.push(n), this._pop_from_people_queue(Pe, n)), J.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), J.log(e), this.save()
    };
    B.prototype._pop_from_people_queue = function(t, e) {
        var r = this._get_queue(t);
        u.isUndefined(r) || (u.each(e, function(n, i) {
            t === Ge || t === tt ? u.each(r, function(a) {
                a[i] === n && delete a[i]
            }) : delete r[i]
        }, this), this.save())
    };
    B.prototype._get_queue_key = function(t) {
        if (t === et) return mi;
        if (t === Lt) return bi;
        if (t === Pe) return Ei;
        if (t === ht) return wi;
        if (t === Ge) return Si;
        if (t === tt) return ki;
        if (t === gt) return Oi;
        J.error("Invalid queue:", t)
    };
    B.prototype._get_queue = function(t) {
        return this.props[this._get_queue_key(t)]
    };
    B.prototype._get_or_create_queue = function(t, e) {
        var r = this._get_queue_key(t);
        return e = u.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
    };
    B.prototype.set_event_timer = function(t, e) {
        var r = this.props[ur] || {};
        r[t] = e, this.props[ur] = r, this.save()
    };
    B.prototype.remove_event_timer = function(t) {
        var e = this.props[ur] || {},
            r = e[t];
        return u.isUndefined(r) || (delete this.props[ur][t], this.save()), r
    };
    var Ri, _e, to = 0,
        zu = 1,
        Ju = function(t) {
            return t
        },
        lr = function() {},
        Ie = "mixpanel",
        ro = "base64",
        Ku = "json",
        Ot = me.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        no = !Ot && Ae.indexOf("MSIE") === -1 && Ae.indexOf("Mozilla") === -1,
        Dr = null;
    Fe.sendBeacon && (Dr = function() {
        return Fe.sendBeacon.apply(Fe, arguments)
    });
    var Ta = {
            api_host: "https://api-js.mixpanel.com",
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: ro,
            app_host: "https://mixpanel.com",
            cdn: "https://cdn.mxpnl.com",
            cross_site_cookie: !1,
            cross_subdomain_cookie: !0,
            error_reporter: lr,
            persistence: "cookie",
            persistence_name: "",
            cookie_domain: "",
            cookie_name: "",
            loaded: lr,
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
        io = !1,
        S = function() {},
        Hn = function(t, e, r) {
            var n, i = r === Ie ? _e : _e[r];
            if (i && Ri === to) n = i;
            else {
                if (i && !u.isArray(i)) {
                    J.error("You have already initialized " + r);
                    return
                }
                n = new S
            }
            return n._cached_groups = {}, n._init(t, e, r), n.people = new M, n.people._init(n), Xe.DEBUG = Xe.DEBUG || n.get_config("debug"), !u.isUndefined(i) && u.isArray(i) && (n._execute_array.call(n.people, i.people), n._execute_array(i)), n
        };
    S.prototype.init = function(t, e, r) {
        if (u.isUndefined(r)) {
            this.report_error("You must name your new library: init(token, config, name)");
            return
        }
        if (r === Ie) {
            this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            return
        }
        var n = Hn(t, e, r);
        return _e[r] = n, n._loaded(), n
    };
    S.prototype._init = function(t, e, r) {
        e = e || {}, this.__loaded = !0, this.config = {};
        var n = {};
        if (!("api_payload_format" in e)) {
            var i = e.api_host || Ta.api_host;
            i.match(/\.mixpanel\.com$/) && (n.api_payload_format = Ku)
        }
        if (this.set_config(u.extend({}, Ta, n, e, {
                name: r,
                token: t,
                callback_fn: (r === Ie ? r : Ie + "." + r) + "._jsc"
            })), this._jsc = lr, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!u.localStorage.is_supported(!0) || !Ot) this._batch_requests = !1, J.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
            else if (this.init_batchers(), Dr && me.addEventListener) {
                var a = u.bind(function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }, this);
                me.addEventListener("pagehide", function(o) {
                    o.persisted && a()
                }), me.addEventListener("visibilitychange", function() {
                    V.visibilityState === "hidden" && a()
                })
            }
        }
        this.persistence = this.cookie = new B(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
        var s = u.UUID();
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
        u.each(this.__dom_loaded_queue, function(t) {
            this._track_dom.apply(this, t)
        }, this), this.has_opted_out_tracking() || u.each(this.__request_queue, function(t) {
            this._send_request.apply(this, t)
        }, this), delete this.__dom_loaded_queue, delete this.__request_queue
    };
    S.prototype._track_dom = function(t, e) {
        if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
        if (!io) return this.__dom_loaded_queue.push([t, e]), !1;
        var r = new t().init(this);
        return r.track.apply(r, e)
    };
    S.prototype._prepare_callback = function(t, e) {
        if (u.isUndefined(t)) return null;
        if (Ot) {
            var r = function(s) {
                t(s, e)
            };
            return r
        } else {
            var n = this._jsc,
                i = "" + Math.floor(Math.random() * 1e8),
                a = this.get_config("callback_fn") + "[" + i + "]";
            return n[i] = function(s) {
                delete n[i], t(s, e)
            }, a
        }
    };
    S.prototype._send_request = function(t, e, r, n) {
        var i = !0;
        if (no) return this.__request_queue.push(arguments), i;
        var a = {
                method: this.get_config("api_method"),
                transport: this.get_config("api_transport"),
                verbose: this.get_config("verbose")
            },
            s = null;
        !n && (u.isFunction(r) || typeof r == "string") && (n = r, r = null), r = u.extend(a, r || {}), Ot || (r.method = "GET");
        var o = r.method === "POST",
            c = Dr && o && r.transport.toLowerCase() === "sendbeacon",
            l = r.verbose;
        e.verbose && (l = !0), this.get_config("test") && (e.test = 1), l && (e.verbose = 1), this.get_config("img") && (e.img = 1), Ot || (n ? e.callback = n : (l || this.get_config("test")) && (e.callback = "(function(){})")), e.ip = this.get_config("ip") ? 1 : 0, e._ = new Date().getTime().toString(), o && (s = "data=" + encodeURIComponent(e.data), delete e.data), t += "?" + u.HTTPBuildQuery(e);
        var d = this;
        if ("img" in e) {
            var g = V.createElement("img");
            g.src = t, V.body.appendChild(g)
        } else if (c) {
            try {
                i = Dr(t, s)
            } catch ($) {
                d.report_error($), i = !1
            }
            try {
                n && n(i ? 1 : 0)
            } catch ($) {
                d.report_error($)
            }
        } else if (Ot) try {
            var y = new XMLHttpRequest;
            y.open(r.method, t, !0);
            var b = this.get_config("xhr_headers");
            if (o && (b["Content-Type"] = "application/x-www-form-urlencoded"), u.each(b, function($, j) {
                    y.setRequestHeader(j, $)
                }), r.timeout_ms && typeof y.timeout < "u") {
                y.timeout = r.timeout_ms;
                var E = new Date().getTime()
            }
            y.withCredentials = !0, y.onreadystatechange = function() {
                if (y.readyState === 4)
                    if (y.status === 200) {
                        if (n)
                            if (l) {
                                var $;
                                try {
                                    $ = u.JSONDecode(y.responseText)
                                } catch (Q) {
                                    if (d.report_error(Q), r.ignore_json_errors) $ = y.responseText;
                                    else return
                                }
                                n($)
                            } else n(Number(y.responseText))
                    } else {
                        var j;
                        y.timeout && !y.status && new Date().getTime() - E >= y.timeout ? j = "timeout" : j = "Bad HTTP status: " + y.status + " " + y.statusText, d.report_error(j), n && n(l ? {
                            status: 0,
                            error: j,
                            xhr_req: y
                        } : 0)
                    }
            }, y.send(s)
        } catch ($) {
            d.report_error($), i = !1
        } else {
            var I = V.createElement("script");
            I.type = "text/javascript", I.async = !0, I.defer = !0, I.src = t;
            var A = V.getElementsByTagName("script")[0];
            A.parentNode.insertBefore(I, A)
        }
        return i
    };
    S.prototype._execute_array = function(t) {
        var e, r = [],
            n = [],
            i = [];
        u.each(t, function(s) {
            s && (e = s[0], u.isArray(e) ? i.push(s) : typeof s == "function" ? s.call(this) : u.isArray(s) && e === "alias" ? r.push(s) : u.isArray(s) && e.indexOf("track") !== -1 && typeof this[e] == "function" ? i.push(s) : n.push(s))
        }, this);
        var a = function(s, o) {
            u.each(s, function(c) {
                if (u.isArray(c[0])) {
                    var l = o;
                    u.each(c, function(d) {
                        l = l[d[0]].apply(l, d.slice(1))
                    })
                } else this[c[0]].apply(this, c.slice(1))
            }, o)
        };
        a(r, this), a(n, this), a(i, this)
    };
    S.prototype.are_batchers_initialized = function() {
        return !!this.request_batchers.events
    };
    S.prototype.init_batchers = function() {
        var t = this.get_config("token");
        if (!this.are_batchers_initialized()) {
            var e = u.bind(function(r) {
                return new je("__mpq_" + t + r.queue_suffix, {
                    libConfig: this.config,
                    sendRequestFunc: u.bind(function(n, i, a) {
                        this._send_request(this.get_config("api_host") + r.endpoint, this._encode_data_for_request(n), i, this._prepare_callback(a, n))
                    }, this),
                    beforeSendHook: u.bind(function(n) {
                        return this._run_hook("before_send_" + r.type, n)
                    }, this),
                    errorReporter: this.get_config("error_reporter"),
                    stopAllBatchingFunc: u.bind(this.stop_batch_senders, this)
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
        this.are_batchers_initialized() && (this._batch_requests = !0, u.each(this.request_batchers, function(t) {
            t.start()
        }))
    };
    S.prototype.stop_batch_senders = function() {
        this._batch_requests = !1, u.each(this.request_batchers, function(t) {
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
        var e = u.JSONEncode(t);
        return this.get_config("api_payload_format") === ro && (e = u.base64Encode(e)), {
            data: e
        }
    };
    S.prototype._track_or_batch = function(t, e) {
        var r = u.truncate(t.data, 255),
            n = t.endpoint,
            i = t.batcher,
            a = t.should_send_immediately,
            s = t.send_request_options || {};
        e = e || lr;
        var o = !0,
            c = u.bind(function() {
                return s.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (J.log("MIXPANEL REQUEST:"), J.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(e, r))) : null
            }, this);
        return this._batch_requests && !a ? i.enqueue(r, function(l) {
            l ? e(1, r) : c()
        }) : o = c(), o && r
    };
    S.prototype.track = _r(function(t, e, r, n) {
        !n && typeof r == "function" && (n = r, r = null), r = r || {};
        var i = r.transport;
        i && (r.transport = i);
        var a = r.send_immediately;
        if (typeof n != "function" && (n = lr), u.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.track");
            return
        }
        if (this._event_is_disabled(t)) {
            n(0);
            return
        }
        e = e || {}, e.token = this.get_config("token");
        var s = this.persistence.remove_event_timer(t);
        if (!u.isUndefined(s)) {
            var o = new Date().getTime() - s;
            e.$duration = parseFloat((o / 1e3).toFixed(3))
        }
        this._set_default_superprops(), e = u.extend({}, u.info.properties(), this.persistence.properties(), this.unpersisted_superprops, e);
        var c = this.get_config("property_blacklist");
        u.isArray(c) ? u.each(c, function(g) {
            delete e[g]
        }) : this.report_error("Invalid value for property_blacklist config: " + c);
        var l = {
                event: t,
                properties: e
            },
            d = this._track_or_batch({
                type: "events",
                data: l,
                endpoint: this.get_config("api_host") + "/track/",
                batcher: this.request_batchers.events,
                should_send_immediately: a,
                send_request_options: r
            }, n);
        return d
    });
    S.prototype.set_group = _r(function(t, e, r) {
        u.isArray(e) || (e = [e]);
        var n = {};
        return n[t] = e, this.register(n), this.people.set(t, e, r)
    });
    S.prototype.add_group = _r(function(t, e, r) {
        var n = this.get_property(t);
        if (n === void 0) {
            var i = {};
            i[t] = [e], this.register(i)
        } else n.indexOf(e) === -1 && (n.push(e), this.register(i));
        return this.people.union(t, e, r)
    });
    S.prototype.remove_group = _r(function(t, e, r) {
        var n = this.get_property(t);
        if (n !== void 0) {
            var i = n.indexOf(e);
            i > -1 && (n.splice(i, 1), this.register({
                group_key: n
            })), n.length === 0 && this.unregister(t)
        }
        return this.people.remove(t, e, r)
    });
    S.prototype.track_with_groups = _r(function(t, e, r, n) {
        var i = u.extend({}, e || {});
        return u.each(r, function(a, s) {
            a != null && (i[s] = a)
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
        return (n === void 0 || n._group_key !== t || n._group_id !== e) && (n = new te, n._init(this, t, e), this._cached_groups[r] = n), n
    };
    S.prototype.track_pageview = function(t) {
        u.isUndefined(t) && (t = V.location.href), this.track("mp_page_view", u.info.pageviewInfo(t))
    };
    S.prototype.track_links = function() {
        return this._track_dom.call(this, Ct, arguments)
    };
    S.prototype.track_forms = function() {
        return this._track_dom.call(this, Qr, arguments)
    };
    S.prototype.time_event = function(t) {
        if (u.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return
        }
        this._event_is_disabled(t) || this.persistence.set_event_timer(t, new Date().getTime())
    };
    var Vu = {
            persistent: !0
        },
        Ti = function(t) {
            var e;
            return u.isObject(t) ? e = t : u.isUndefined(t) ? e = {} : e = {
                days: t
            }, u.extend({}, Vu, e)
        };
    S.prototype.register = function(t, e) {
        var r = Ti(e);
        r.persistent ? this.persistence.register(t, r.days) : u.extend(this.unpersisted_superprops, t)
    };
    S.prototype.register_once = function(t, e, r) {
        var n = Ti(r);
        n.persistent ? this.persistence.register_once(t, e, n.days) : (typeof e > "u" && (e = "None"), u.each(t, function(i, a) {
            (!this.unpersisted_superprops.hasOwnProperty(a) || this.unpersisted_superprops[a] === e) && (this.unpersisted_superprops[a] = i)
        }, this))
    };
    S.prototype.unregister = function(t, e) {
        e = Ti(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
    };
    S.prototype._register_single = function(t, e) {
        var r = {};
        r[t] = e, this.register(r)
    };
    S.prototype.identify = function(t, e, r, n, i, a, s, o) {
        var c = this.get_distinct_id();
        if (this.register({
                $user_id: t
            }), !this.get_property("$device_id")) {
            var l = c;
            this.register_once({
                $had_persisted_distinct_id: !0,
                $device_id: l
            }, "")
        }
        t !== c && t !== this.get_property(Lr) && (this.unregister(Lr), this.register({
            distinct_id: t
        })), this._flags.identify_called = !0, this.people._flush(e, r, n, i, a, s, o), t !== c && this.track("$identify", {
            distinct_id: t,
            $anon_distinct_id: c
        }, {
            skip_hooks: !0
        })
    };
    S.prototype.reset = function() {
        this.persistence.clear(), this._flags.identify_called = !1;
        var t = u.UUID();
        this.register_once({
            distinct_id: t,
            $device_id: t
        }, "")
    };
    S.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id")
    };
    S.prototype.alias = function(t, e) {
        if (t === this.get_property(eo)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
        var r = this;
        return u.isUndefined(e) && (e = this.get_distinct_id()), t !== e ? (this._register_single(Lr, t), this.track("$create_alias", {
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
        if (u.isObject(t)) {
            u.extend(this.config, t);
            var e = t.batch_size;
            e && u.each(this.request_batchers, function(r) {
                r.resetBatchSize()
            }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Xe.DEBUG = Xe.DEBUG || this.get_config("debug")
        }
    };
    S.prototype.get_config = function(t) {
        return this.config[t]
    };
    S.prototype._run_hook = function(t) {
        var e = (this.config.hooks[t] || Ju).apply(this, Ke.call(arguments, 1));
        return typeof e > "u" && (this.report_error(t + " hook did not return a value"), e = null), e
    };
    S.prototype.get_property = function(t) {
        return this.persistence.props[t]
    };
    S.prototype.toString = function() {
        var t = this.get_config("name");
        return t !== Ie && (t = Ie + "." + t), t
    };
    S.prototype._event_is_disabled = function(t) {
        return u.isBlockedUA(Ae) || this._flags.disable_all_events || u.include(this.__disabled_events, t)
    };
    S.prototype._gdpr_init = function() {
        var t = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
        t && u.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
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
        }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || u.cookie.get("mp_optout")) && (u.cookie.remove("mp_optout"), this.opt_out_tracking({
            clear_persistence: this.get_config("opt_out_persistence_by_default")
        }))
    };
    S.prototype._gdpr_update_persistence = function(t) {
        var e;
        if (t && t.clear_persistence) e = !0;
        else if (t && t.enable_persistence) e = !1;
        else return;
        !this.get_config("disable_persistence") && this.persistence.disabled !== e && this.persistence.set_disabled(e), e && u.each(this.request_batchers, function(r) {
            r.clear()
        })
    };
    S.prototype._gdpr_call_func = function(t, e) {
        return e = u.extend({
            track: u.bind(this.track, this),
            persistence_type: this.get_config("opt_out_tracking_persistence_type"),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt")
        }, e), u.localStorage.is_supported() || (e.persistence_type = "cookie"), t(this.get_config("token"), {
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
        t = u.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Bu, t), this._gdpr_update_persistence(t)
    };
    S.prototype.opt_out_tracking = function(t) {
        t = u.extend({
            clear_persistence: !0,
            delete_user: !0
        }, t), t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(Fu, t), this._gdpr_update_persistence(t)
    };
    S.prototype.has_opted_in_tracking = function(t) {
        return this._gdpr_call_func(qu, t)
    };
    S.prototype.has_opted_out_tracking = function(t) {
        return this._gdpr_call_func(Vs, t)
    };
    S.prototype.clear_opt_in_out_tracking = function(t) {
        t = u.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Gu, t), this._gdpr_update_persistence(t)
    };
    S.prototype.report_error = function(t, e) {
        J.error.apply(J.error, arguments);
        try {
            !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
        } catch (r) {
            J.error(r)
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
    B.prototype.properties = B.prototype.properties;
    B.prototype.update_search_keyword = B.prototype.update_search_keyword;
    B.prototype.update_referrer_info = B.prototype.update_referrer_info;
    B.prototype.get_cross_subdomain = B.prototype.get_cross_subdomain;
    B.prototype.clear = B.prototype.clear;
    var St = {},
        Xu = function() {
            u.each(St, function(t, e) {
                e !== Ie && (_e[e] = t)
            }), _e._ = u
        },
        Qu = function() {
            _e.init = function(t, e, r) {
                if (r) return _e[r] || (_e[r] = St[r] = Hn(t, e, r), _e[r]._loaded()), _e[r];
                var n = _e;
                St[Ie] ? n = St[Ie] : t && (n = Hn(t, e, Ie), n._loaded(), St[Ie] = n), _e = n, Ri === zu && (me[Ie] = _e), Xu()
            }
        },
        Zu = function() {
            function t() {
                t.done || (t.done = !0, io = !0, no = !1, u.each(St, function(n) {
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
                    r = me.frameElement === null
                } catch {}
                V.documentElement.doScroll && r && e()
            }
            u.register_event(me, "load", t, !0)
        };

    function el() {
        return Ri = to, _e = new S, Qu(), _e.init(), Zu(), _e
    }
    var tl = el(),
        xa = tl;
    class ao {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), xa.init("2e284873b7269f13b850ac994abfd848", {
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
            xa.track("Game Joined", {
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

    function rl() {
        this.__data__ = [], this.size = 0
    }
    var nl = rl;

    function il(t, e) {
        return t === e || t !== t && e !== e
    }
    var Zr = il,
        al = Zr;

    function sl(t, e) {
        for (var r = t.length; r--;)
            if (al(t[r][0], e)) return r;
        return -1
    }
    var en = sl,
        ol = en,
        cl = Array.prototype,
        ul = cl.splice;

    function ll(t) {
        var e = this.__data__,
            r = ol(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : ul.call(e, r, 1), --this.size, !0
    }
    var fl = ll,
        pl = en;

    function dl(t) {
        var e = this.__data__,
            r = pl(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var hl = dl,
        gl = en;

    function _l(t) {
        return gl(this.__data__, t) > -1
    }
    var yl = _l,
        vl = en;

    function ml(t, e) {
        var r = this.__data__,
            n = vl(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var bl = ml,
        El = nl,
        wl = fl,
        Sl = hl,
        kl = yl,
        Ol = bl;

    function Wt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Wt.prototype.clear = El;
    Wt.prototype.delete = wl;
    Wt.prototype.get = Sl;
    Wt.prototype.has = kl;
    Wt.prototype.set = Ol;
    var tn = Wt,
        Rl = tn;

    function Tl() {
        this.__data__ = new Rl, this.size = 0
    }
    var xl = Tl;

    function Il(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var $l = Il;

    function Al(t) {
        return this.__data__.get(t)
    }
    var Pl = Al;

    function Nl(t) {
        return this.__data__.has(t)
    }
    var Cl = Nl,
        Ll = typeof Re == "object" && Re && Re.Object === Object && Re,
        so = Ll,
        Dl = so,
        Ml = typeof self == "object" && self && self.Object === Object && self,
        jl = Dl || Ml || Function("return this")(),
        Yt = jl,
        Ul = Yt,
        Bl = Ul.Symbol,
        oo = Bl,
        Ia = oo,
        co = Object.prototype,
        Fl = co.hasOwnProperty,
        ql = co.toString,
        er = Ia ? Ia.toStringTag : void 0;

    function Gl(t) {
        var e = Fl.call(t, er),
            r = t[er];
        try {
            t[er] = void 0;
            var n = !0
        } catch {}
        var i = ql.call(t);
        return n && (e ? t[er] = r : delete t[er]), i
    }
    var Hl = Gl,
        Wl = Object.prototype,
        Yl = Wl.toString;

    function zl(t) {
        return Yl.call(t)
    }
    var Jl = zl,
        $a = oo,
        Kl = Hl,
        Vl = Jl,
        Xl = "[object Null]",
        Ql = "[object Undefined]",
        Aa = $a ? $a.toStringTag : void 0;

    function Zl(t) {
        return t == null ? t === void 0 ? Ql : Xl : Aa && Aa in Object(t) ? Kl(t) : Vl(t)
    }
    var rn = Zl;

    function ef(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var yt = ef,
        tf = rn,
        rf = yt,
        nf = "[object AsyncFunction]",
        af = "[object Function]",
        sf = "[object GeneratorFunction]",
        of = "[object Proxy]";

    function cf(t) {
        if (!rf(t)) return !1;
        var e = tf(t);
        return e == af || e == sf || e == nf || e == of
    }
    var xi = cf,
        uf = Yt,
        lf = uf["__core-js_shared__"],
        ff = lf,
        bn = ff,
        Pa = function() {
            var t = /[^.]+$/.exec(bn && bn.keys && bn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function pf(t) {
        return !!Pa && Pa in t
    }
    var df = pf,
        hf = Function.prototype,
        gf = hf.toString;

    function _f(t) {
        if (t != null) {
            try {
                return gf.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var yf = _f,
        vf = xi,
        mf = df,
        bf = yt,
        Ef = yf,
        wf = /[\\^$.*+?()[\]{}|]/g,
        Sf = /^\[object .+?Constructor\]$/,
        kf = Function.prototype,
        Of = Object.prototype,
        Rf = kf.toString,
        Tf = Of.hasOwnProperty,
        xf = RegExp("^" + Rf.call(Tf).replace(wf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function If(t) {
        if (!bf(t) || mf(t)) return !1;
        var e = vf(t) ? xf : Sf;
        return e.test(Ef(t))
    }
    var $f = If;

    function Af(t, e) {
        return t == null ? void 0 : t[e]
    }
    var Pf = Af,
        Nf = $f,
        Cf = Pf;

    function Lf(t, e) {
        var r = Cf(t, e);
        return Nf(r) ? r : void 0
    }
    var Ii = Lf,
        Df = Ii,
        Mf = Yt,
        jf = Df(Mf, "Map"),
        uo = jf,
        Uf = Ii,
        Bf = Uf(Object, "create"),
        nn = Bf,
        Na = nn;

    function Ff() {
        this.__data__ = Na ? Na(null) : {}, this.size = 0
    }
    var qf = Ff;

    function Gf(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var Hf = Gf,
        Wf = nn,
        Yf = "__lodash_hash_undefined__",
        zf = Object.prototype,
        Jf = zf.hasOwnProperty;

    function Kf(t) {
        var e = this.__data__;
        if (Wf) {
            var r = e[t];
            return r === Yf ? void 0 : r
        }
        return Jf.call(e, t) ? e[t] : void 0
    }
    var Vf = Kf,
        Xf = nn,
        Qf = Object.prototype,
        Zf = Qf.hasOwnProperty;

    function ep(t) {
        var e = this.__data__;
        return Xf ? e[t] !== void 0 : Zf.call(e, t)
    }
    var tp = ep,
        rp = nn,
        np = "__lodash_hash_undefined__";

    function ip(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = rp && e === void 0 ? np : e, this
    }
    var ap = ip,
        sp = qf,
        op = Hf,
        cp = Vf,
        up = tp,
        lp = ap;

    function zt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    zt.prototype.clear = sp;
    zt.prototype.delete = op;
    zt.prototype.get = cp;
    zt.prototype.has = up;
    zt.prototype.set = lp;
    var fp = zt,
        Ca = fp,
        pp = tn,
        dp = uo;

    function hp() {
        this.size = 0, this.__data__ = {
            hash: new Ca,
            map: new(dp || pp),
            string: new Ca
        }
    }
    var gp = hp;

    function _p(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var yp = _p,
        vp = yp;

    function mp(t, e) {
        var r = t.__data__;
        return vp(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var an = mp,
        bp = an;

    function Ep(t) {
        var e = bp(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var wp = Ep,
        Sp = an;

    function kp(t) {
        return Sp(this, t).get(t)
    }
    var Op = kp,
        Rp = an;

    function Tp(t) {
        return Rp(this, t).has(t)
    }
    var xp = Tp,
        Ip = an;

    function $p(t, e) {
        var r = Ip(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var Ap = $p,
        Pp = gp,
        Np = wp,
        Cp = Op,
        Lp = xp,
        Dp = Ap;

    function Jt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Jt.prototype.clear = Pp;
    Jt.prototype.delete = Np;
    Jt.prototype.get = Cp;
    Jt.prototype.has = Lp;
    Jt.prototype.set = Dp;
    var Mp = Jt,
        jp = tn,
        Up = uo,
        Bp = Mp,
        Fp = 200;

    function qp(t, e) {
        var r = this.__data__;
        if (r instanceof jp) {
            var n = r.__data__;
            if (!Up || n.length < Fp - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new Bp(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var Gp = qp,
        Hp = tn,
        Wp = xl,
        Yp = $l,
        zp = Pl,
        Jp = Cl,
        Kp = Gp;

    function Kt(t) {
        var e = this.__data__ = new Hp(t);
        this.size = e.size
    }
    Kt.prototype.clear = Wp;
    Kt.prototype.delete = Yp;
    Kt.prototype.get = zp;
    Kt.prototype.has = Jp;
    Kt.prototype.set = Kp;
    var Vp = Kt,
        Xp = Ii,
        Qp = function() {
            try {
                var t = Xp(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        lo = Qp,
        La = lo;

    function Zp(t, e, r) {
        e == "__proto__" && La ? La(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var $i = Zp,
        ed = $i,
        td = Zr;

    function rd(t, e, r) {
        (r !== void 0 && !td(t[e], r) || r === void 0 && !(e in t)) && ed(t, e, r)
    }
    var fo = rd;

    function nd(t) {
        return function(e, r, n) {
            for (var i = -1, a = Object(e), s = n(e), o = s.length; o--;) {
                var c = s[t ? o : ++i];
                if (r(a[c], c, a) === !1) break
            }
            return e
        }
    }
    var id = nd,
        ad = id,
        sd = ad(),
        od = sd,
        Wn = {
            exports: {}
        };
    (function(t, e) {
        var r = Yt,
            n = e && !e.nodeType && e,
            i = n && !0 && t && !t.nodeType && t,
            a = i && i.exports === n,
            s = a ? r.Buffer : void 0,
            o = s ? s.allocUnsafe : void 0;

        function c(l, d) {
            if (d) return l.slice();
            var g = l.length,
                y = o ? o(g) : new l.constructor(g);
            return l.copy(y), y
        }
        t.exports = c
    })(Wn, Wn.exports);
    var cd = Yt,
        ud = cd.Uint8Array,
        ld = ud,
        Da = ld;

    function fd(t) {
        var e = new t.constructor(t.byteLength);
        return new Da(e).set(new Da(t)), e
    }
    var pd = fd,
        dd = pd;

    function hd(t, e) {
        var r = e ? dd(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var gd = hd;

    function _d(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var yd = _d,
        vd = yt,
        Ma = Object.create,
        md = function() {
            function t() {}
            return function(e) {
                if (!vd(e)) return {};
                if (Ma) return Ma(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        bd = md;

    function Ed(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var wd = Ed,
        Sd = wd,
        kd = Sd(Object.getPrototypeOf, Object),
        po = kd,
        Od = Object.prototype;

    function Rd(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || Od;
        return t === r
    }
    var ho = Rd,
        Td = bd,
        xd = po,
        Id = ho;

    function $d(t) {
        return typeof t.constructor == "function" && !Id(t) ? Td(xd(t)) : {}
    }
    var Ad = $d;

    function Pd(t) {
        return t != null && typeof t == "object"
    }
    var yr = Pd,
        Nd = rn,
        Cd = yr,
        Ld = "[object Arguments]";

    function Dd(t) {
        return Cd(t) && Nd(t) == Ld
    }
    var Md = Dd,
        ja = Md,
        jd = yr,
        go = Object.prototype,
        Ud = go.hasOwnProperty,
        Bd = go.propertyIsEnumerable,
        Fd = ja(function() {
            return arguments
        }()) ? ja : function(t) {
            return jd(t) && Ud.call(t, "callee") && !Bd.call(t, "callee")
        },
        _o = Fd,
        qd = Array.isArray,
        yo = qd,
        Gd = 9007199254740991;

    function Hd(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Gd
    }
    var vo = Hd,
        Wd = xi,
        Yd = vo;

    function zd(t) {
        return t != null && Yd(t.length) && !Wd(t)
    }
    var Ai = zd,
        Jd = Ai,
        Kd = yr;

    function Vd(t) {
        return Kd(t) && Jd(t)
    }
    var Xd = Vd,
        Mr = {
            exports: {}
        };

    function Qd() {
        return !1
    }
    var Zd = Qd;
    (function(t, e) {
        var r = Yt,
            n = Zd,
            i = e && !e.nodeType && e,
            a = i && !0 && t && !t.nodeType && t,
            s = a && a.exports === i,
            o = s ? r.Buffer : void 0,
            c = o ? o.isBuffer : void 0,
            l = c || n;
        t.exports = l
    })(Mr, Mr.exports);
    var eh = rn,
        th = po,
        rh = yr,
        nh = "[object Object]",
        ih = Function.prototype,
        ah = Object.prototype,
        mo = ih.toString,
        sh = ah.hasOwnProperty,
        oh = mo.call(Object);

    function ch(t) {
        if (!rh(t) || eh(t) != nh) return !1;
        var e = th(t);
        if (e === null) return !0;
        var r = sh.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && mo.call(r) == oh
    }
    var uh = ch,
        lh = rn,
        fh = vo,
        ph = yr,
        dh = "[object Arguments]",
        hh = "[object Array]",
        gh = "[object Boolean]",
        _h = "[object Date]",
        yh = "[object Error]",
        vh = "[object Function]",
        mh = "[object Map]",
        bh = "[object Number]",
        Eh = "[object Object]",
        wh = "[object RegExp]",
        Sh = "[object Set]",
        kh = "[object String]",
        Oh = "[object WeakMap]",
        Rh = "[object ArrayBuffer]",
        Th = "[object DataView]",
        xh = "[object Float32Array]",
        Ih = "[object Float64Array]",
        $h = "[object Int8Array]",
        Ah = "[object Int16Array]",
        Ph = "[object Int32Array]",
        Nh = "[object Uint8Array]",
        Ch = "[object Uint8ClampedArray]",
        Lh = "[object Uint16Array]",
        Dh = "[object Uint32Array]",
        ee = {};
    ee[xh] = ee[Ih] = ee[$h] = ee[Ah] = ee[Ph] = ee[Nh] = ee[Ch] = ee[Lh] = ee[Dh] = !0;
    ee[dh] = ee[hh] = ee[Rh] = ee[gh] = ee[Th] = ee[_h] = ee[yh] = ee[vh] = ee[mh] = ee[bh] = ee[Eh] = ee[wh] = ee[Sh] = ee[kh] = ee[Oh] = !1;

    function Mh(t) {
        return ph(t) && fh(t.length) && !!ee[lh(t)]
    }
    var jh = Mh;

    function Uh(t) {
        return function(e) {
            return t(e)
        }
    }
    var Bh = Uh,
        Yn = {
            exports: {}
        };
    (function(t, e) {
        var r = so,
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
    })(Yn, Yn.exports);
    var Fh = jh,
        qh = Bh,
        Ua = Yn.exports,
        Ba = Ua && Ua.isTypedArray,
        Gh = Ba ? qh(Ba) : Fh,
        bo = Gh;

    function Hh(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var Eo = Hh,
        Wh = $i,
        Yh = Zr,
        zh = Object.prototype,
        Jh = zh.hasOwnProperty;

    function Kh(t, e, r) {
        var n = t[e];
        (!(Jh.call(t, e) && Yh(n, r)) || r === void 0 && !(e in t)) && Wh(t, e, r)
    }
    var Vh = Kh,
        Xh = Vh,
        Qh = $i;

    function Zh(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var a = -1, s = e.length; ++a < s;) {
            var o = e[a],
                c = n ? n(r[o], t[o], o, r, t) : void 0;
            c === void 0 && (c = t[o]), i ? Qh(r, o, c) : Xh(r, o, c)
        }
        return r
    }
    var eg = Zh;

    function tg(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var rg = tg,
        ng = 9007199254740991,
        ig = /^(?:0|[1-9]\d*)$/;

    function ag(t, e) {
        var r = typeof t;
        return e = e == null ? ng : e, !!e && (r == "number" || r != "symbol" && ig.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var wo = ag,
        sg = rg,
        og = _o,
        cg = yo,
        ug = Mr.exports,
        lg = wo,
        fg = bo,
        pg = Object.prototype,
        dg = pg.hasOwnProperty;

    function hg(t, e) {
        var r = cg(t),
            n = !r && og(t),
            i = !r && !n && ug(t),
            a = !r && !n && !i && fg(t),
            s = r || n || i || a,
            o = s ? sg(t.length, String) : [],
            c = o.length;
        for (var l in t)(e || dg.call(t, l)) && !(s && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || lg(l, c))) && o.push(l);
        return o
    }
    var gg = hg;

    function _g(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var yg = _g,
        vg = yt,
        mg = ho,
        bg = yg,
        Eg = Object.prototype,
        wg = Eg.hasOwnProperty;

    function Sg(t) {
        if (!vg(t)) return bg(t);
        var e = mg(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !wg.call(t, n)) || r.push(n);
        return r
    }
    var kg = Sg,
        Og = gg,
        Rg = kg,
        Tg = Ai;

    function xg(t) {
        return Tg(t) ? Og(t, !0) : Rg(t)
    }
    var So = xg,
        Ig = eg,
        $g = So;

    function Ag(t) {
        return Ig(t, $g(t))
    }
    var Pg = Ag,
        Fa = fo,
        Ng = Wn.exports,
        Cg = gd,
        Lg = yd,
        Dg = Ad,
        qa = _o,
        Ga = yo,
        Mg = Xd,
        jg = Mr.exports,
        Ug = xi,
        Bg = yt,
        Fg = uh,
        qg = bo,
        Ha = Eo,
        Gg = Pg;

    function Hg(t, e, r, n, i, a, s) {
        var o = Ha(t, r),
            c = Ha(e, r),
            l = s.get(c);
        if (l) {
            Fa(t, r, l);
            return
        }
        var d = a ? a(o, c, r + "", t, e, s) : void 0,
            g = d === void 0;
        if (g) {
            var y = Ga(c),
                b = !y && jg(c),
                E = !y && !b && qg(c);
            d = c, y || b || E ? Ga(o) ? d = o : Mg(o) ? d = Lg(o) : b ? (g = !1, d = Ng(c, !0)) : E ? (g = !1, d = Cg(c, !0)) : d = [] : Fg(c) || qa(c) ? (d = o, qa(o) ? d = Gg(o) : (!Bg(o) || Ug(o)) && (d = Dg(c))) : g = !1
        }
        g && (s.set(c, d), i(d, c, n, a, s), s.delete(c)), Fa(t, r, d)
    }
    var Wg = Hg,
        Yg = Vp,
        zg = fo,
        Jg = od,
        Kg = Wg,
        Vg = yt,
        Xg = So,
        Qg = Eo;

    function ko(t, e, r, n, i) {
        t !== e && Jg(e, function(a, s) {
            if (i || (i = new Yg), Vg(a)) Kg(t, e, s, r, ko, n, i);
            else {
                var o = n ? n(Qg(t, s), a, s + "", t, e, i) : void 0;
                o === void 0 && (o = a), zg(t, s, o)
            }
        }, Xg)
    }
    var Zg = ko;

    function e_(t) {
        return t
    }
    var Oo = e_;

    function t_(t, e, r) {
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
    var r_ = t_,
        n_ = r_,
        Wa = Math.max;

    function i_(t, e, r) {
        return e = Wa(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, a = Wa(n.length - e, 0), s = Array(a); ++i < a;) s[i] = n[e + i];
                i = -1;
                for (var o = Array(e + 1); ++i < e;) o[i] = n[i];
                return o[e] = r(s), n_(t, this, o)
            }
    }
    var a_ = i_;

    function s_(t) {
        return function() {
            return t
        }
    }
    var o_ = s_,
        c_ = o_,
        Ya = lo,
        u_ = Oo,
        l_ = Ya ? function(t, e) {
            return Ya(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: c_(e),
                writable: !0
            })
        } : u_,
        f_ = l_,
        p_ = 800,
        d_ = 16,
        h_ = Date.now;

    function g_(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = h_(),
                i = d_ - (n - r);
            if (r = n, i > 0) {
                if (++e >= p_) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var __ = g_,
        y_ = f_,
        v_ = __,
        m_ = v_(y_),
        b_ = m_,
        E_ = Oo,
        w_ = a_,
        S_ = b_;

    function k_(t, e) {
        return S_(w_(t, e, E_), t + "")
    }
    var O_ = k_,
        R_ = Zr,
        T_ = Ai,
        x_ = wo,
        I_ = yt;

    function $_(t, e, r) {
        if (!I_(r)) return !1;
        var n = typeof e;
        return (n == "number" ? T_(r) && x_(e, r.length) : n == "string" && e in r) ? R_(r[e], t) : !1
    }
    var A_ = $_,
        P_ = O_,
        N_ = A_;

    function C_(t) {
        return P_(function(e, r) {
            var n = -1,
                i = r.length,
                a = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (a = t.length > 3 && typeof a == "function" ? (i--, a) : void 0, s && N_(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++n < i;) {
                var o = r[n];
                o && t(e, o, n, a)
            }
            return e
        })
    }
    var L_ = C_,
        D_ = Zg,
        M_ = L_;
    M_(function(t, e, r) {
        D_(t, e, r)
    });
    const da = class {
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
            let l = (Math.min(Math.max(0, (a & 255) * r), 255) | o << 8 | s << 16).toString(16);
            for (; l.length < i.length;) l = `0${l}`;
            return (n ? "#" : "") + l
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
    let qe = da;
    Z(qe, "queryParams", new URLSearchParams(window.location.search)), Z(qe, "getQueryParam", e => da.queryParams.get(e)), Z(qe, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    class jr {
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
                namespace: (i = (n = qe.getQueryParam("namespace")) != null ? n : qe.getQueryParam("ns")) != null ? i : this.defaultNamespace,
                isDisabled: qe.queryParams.has("incognito") || qe.queryParams.has("nc")
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
    Z(jr, "defaultNamespace", "tv");
    var zn = {
        exports: {}
    };
    (function(t, e) {
        var r = typeof self < "u" ? self : Re,
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

                function c(m) {
                    return m && DataView.prototype.isPrototypeOf(m)
                }
                if (o.arrayBuffer) var l = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    d = ArrayBuffer.isView || function(m) {
                        return m && l.indexOf(Object.prototype.toString.call(m)) > -1
                    };

                function g(m) {
                    if (typeof m != "string" && (m = String(m)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(m)) throw new TypeError("Invalid character in header field name");
                    return m.toLowerCase()
                }

                function y(m) {
                    return typeof m != "string" && (m = String(m)), m
                }

                function b(m) {
                    var R = {
                        next: function() {
                            var N = m.shift();
                            return {
                                done: N === void 0,
                                value: N
                            }
                        }
                    };
                    return o.iterable && (R[Symbol.iterator] = function() {
                        return R
                    }), R
                }

                function E(m) {
                    this.map = {}, m instanceof E ? m.forEach(function(R, N) {
                        this.append(N, R)
                    }, this) : Array.isArray(m) ? m.forEach(function(R) {
                        this.append(R[0], R[1])
                    }, this) : m && Object.getOwnPropertyNames(m).forEach(function(R) {
                        this.append(R, m[R])
                    }, this)
                }
                E.prototype.append = function(m, R) {
                    m = g(m), R = y(R);
                    var N = this.map[m];
                    this.map[m] = N ? N + ", " + R : R
                }, E.prototype.delete = function(m) {
                    delete this.map[g(m)]
                }, E.prototype.get = function(m) {
                    return m = g(m), this.has(m) ? this.map[m] : null
                }, E.prototype.has = function(m) {
                    return this.map.hasOwnProperty(g(m))
                }, E.prototype.set = function(m, R) {
                    this.map[g(m)] = y(R)
                }, E.prototype.forEach = function(m, R) {
                    for (var N in this.map) this.map.hasOwnProperty(N) && m.call(R, this.map[N], N, this)
                }, E.prototype.keys = function() {
                    var m = [];
                    return this.forEach(function(R, N) {
                        m.push(N)
                    }), b(m)
                }, E.prototype.values = function() {
                    var m = [];
                    return this.forEach(function(R) {
                        m.push(R)
                    }), b(m)
                }, E.prototype.entries = function() {
                    var m = [];
                    return this.forEach(function(R, N) {
                        m.push([N, R])
                    }), b(m)
                }, o.iterable && (E.prototype[Symbol.iterator] = E.prototype.entries);

                function I(m) {
                    if (m.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    m.bodyUsed = !0
                }

                function A(m) {
                    return new Promise(function(R, N) {
                        m.onload = function() {
                            R(m.result)
                        }, m.onerror = function() {
                            N(m.error)
                        }
                    })
                }

                function $(m) {
                    var R = new FileReader,
                        N = A(R);
                    return R.readAsArrayBuffer(m), N
                }

                function j(m) {
                    var R = new FileReader,
                        N = A(R);
                    return R.readAsText(m), N
                }

                function Q(m) {
                    for (var R = new Uint8Array(m), N = new Array(R.length), Y = 0; Y < R.length; Y++) N[Y] = String.fromCharCode(R[Y]);
                    return N.join("")
                }

                function le(m) {
                    if (m.slice) return m.slice(0);
                    var R = new Uint8Array(m.byteLength);
                    return R.set(new Uint8Array(m)), R.buffer
                }

                function se() {
                    return this.bodyUsed = !1, this._initBody = function(m) {
                        this._bodyInit = m, m ? typeof m == "string" ? this._bodyText = m : o.blob && Blob.prototype.isPrototypeOf(m) ? this._bodyBlob = m : o.formData && FormData.prototype.isPrototypeOf(m) ? this._bodyFormData = m : o.searchParams && URLSearchParams.prototype.isPrototypeOf(m) ? this._bodyText = m.toString() : o.arrayBuffer && o.blob && c(m) ? (this._bodyArrayBuffer = le(m.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : o.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(m) || d(m)) ? this._bodyArrayBuffer = le(m) : this._bodyText = m = Object.prototype.toString.call(m) : this._bodyText = "", this.headers.get("content-type") || (typeof m == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o.searchParams && URLSearchParams.prototype.isPrototypeOf(m) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, o.blob && (this.blob = function() {
                        var m = I(this);
                        if (m) return m;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? I(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then($)
                    }), this.text = function() {
                        var m = I(this);
                        if (m) return m;
                        if (this._bodyBlob) return j(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(Q(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, o.formData && (this.formData = function() {
                        return this.text().then(F)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var oe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function ce(m) {
                    var R = m.toUpperCase();
                    return oe.indexOf(R) > -1 ? R : m
                }

                function X(m, R) {
                    R = R || {};
                    var N = R.body;
                    if (m instanceof X) {
                        if (m.bodyUsed) throw new TypeError("Already read");
                        this.url = m.url, this.credentials = m.credentials, R.headers || (this.headers = new E(m.headers)), this.method = m.method, this.mode = m.mode, this.signal = m.signal, !N && m._bodyInit != null && (N = m._bodyInit, m.bodyUsed = !0)
                    } else this.url = String(m);
                    if (this.credentials = R.credentials || this.credentials || "same-origin", (R.headers || !this.headers) && (this.headers = new E(R.headers)), this.method = ce(R.method || this.method || "GET"), this.mode = R.mode || this.mode || null, this.signal = R.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && N) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(N)
                }
                X.prototype.clone = function() {
                    return new X(this, {
                        body: this._bodyInit
                    })
                };

                function F(m) {
                    var R = new FormData;
                    return m.trim().split("&").forEach(function(N) {
                        if (N) {
                            var Y = N.split("="),
                                G = Y.shift().replace(/\+/g, " "),
                                D = Y.join("=").replace(/\+/g, " ");
                            R.append(decodeURIComponent(G), decodeURIComponent(D))
                        }
                    }), R
                }

                function Te(m) {
                    var R = new E,
                        N = m.replace(/\r?\n[\t ]+/g, " ");
                    return N.split(/\r?\n/).forEach(function(Y) {
                        var G = Y.split(":"),
                            D = G.shift().trim();
                        if (D) {
                            var w = G.join(":").trim();
                            R.append(D, w)
                        }
                    }), R
                }
                se.call(X.prototype);

                function ne(m, R) {
                    R || (R = {}), this.type = "default", this.status = R.status === void 0 ? 200 : R.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in R ? R.statusText : "OK", this.headers = new E(R.headers), this.url = R.url || "", this._initBody(m)
                }
                se.call(ne.prototype), ne.prototype.clone = function() {
                    return new ne(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new E(this.headers),
                        url: this.url
                    })
                }, ne.error = function() {
                    var m = new ne(null, {
                        status: 0,
                        statusText: ""
                    });
                    return m.type = "error", m
                };
                var we = [301, 302, 303, 307, 308];
                ne.redirect = function(m, R) {
                    if (we.indexOf(R) === -1) throw new RangeError("Invalid status code");
                    return new ne(null, {
                        status: R,
                        headers: {
                            location: m
                        }
                    })
                }, s.DOMException = a.DOMException;
                try {
                    new s.DOMException
                } catch {
                    s.DOMException = function(R, N) {
                        this.message = R, this.name = N;
                        var Y = Error(R);
                        this.stack = Y.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function ie(m, R) {
                    return new Promise(function(N, Y) {
                        var G = new X(m, R);
                        if (G.signal && G.signal.aborted) return Y(new s.DOMException("Aborted", "AbortError"));
                        var D = new XMLHttpRequest;

                        function w() {
                            D.abort()
                        }
                        D.onload = function() {
                            var T = {
                                status: D.status,
                                statusText: D.statusText,
                                headers: Te(D.getAllResponseHeaders() || "")
                            };
                            T.url = "responseURL" in D ? D.responseURL : T.headers.get("X-Request-URL");
                            var P = "response" in D ? D.response : D.responseText;
                            N(new ne(P, T))
                        }, D.onerror = function() {
                            Y(new TypeError("Network request failed"))
                        }, D.ontimeout = function() {
                            Y(new TypeError("Network request failed"))
                        }, D.onabort = function() {
                            Y(new s.DOMException("Aborted", "AbortError"))
                        }, D.open(G.method, G.url, !0), G.credentials === "include" ? D.withCredentials = !0 : G.credentials === "omit" && (D.withCredentials = !1), "responseType" in D && o.blob && (D.responseType = "blob"), G.headers.forEach(function(T, P) {
                            D.setRequestHeader(P, T)
                        }), G.signal && (G.signal.addEventListener("abort", w), D.onreadystatechange = function() {
                            D.readyState === 4 && G.signal.removeEventListener("abort", w)
                        }), D.send(typeof G._bodyInit > "u" ? null : G._bodyInit)
                    })
                }
                return ie.polyfill = !0, a.fetch || (a.fetch = ie, a.Headers = E, a.Request = X, a.Response = ne), s.Headers = E, s.Request = X, s.Response = ne, s.fetch = ie, Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = n;
        e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
    })(zn, zn.exports);
    var j_ = function() {
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
        za = typeof Symbol < "u" && Symbol,
        U_ = j_,
        B_ = function() {
            return typeof za != "function" || typeof Symbol != "function" || typeof za("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : U_()
        },
        F_ = "Function.prototype.bind called on incompatible ",
        En = Array.prototype.slice,
        q_ = Object.prototype.toString,
        G_ = "[object Function]",
        H_ = function(e) {
            var r = this;
            if (typeof r != "function" || q_.call(r) !== G_) throw new TypeError(F_ + r);
            for (var n = En.call(arguments, 1), i, a = function() {
                    if (this instanceof i) {
                        var d = r.apply(this, n.concat(En.call(arguments)));
                        return Object(d) === d ? d : this
                    } else return r.apply(e, n.concat(En.call(arguments)))
                }, s = Math.max(0, r.length - n.length), o = [], c = 0; c < s; c++) o.push("$" + c);
            if (i = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
                var l = function() {};
                l.prototype = r.prototype, i.prototype = new l, l.prototype = null
            }
            return i
        },
        W_ = H_,
        Pi = Function.prototype.bind || W_,
        Y_ = Pi,
        z_ = Y_.call(Function.call, Object.prototype.hasOwnProperty),
        q, Dt = SyntaxError,
        Ro = Function,
        Rt = TypeError,
        wn = function(t) {
            try {
                return Ro('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        dt = Object.getOwnPropertyDescriptor;
    if (dt) try {
        dt({}, "")
    } catch {
        dt = null
    }
    var Sn = function() {
            throw new Rt
        },
        J_ = dt ? function() {
            try {
                return arguments.callee, Sn
            } catch {
                try {
                    return dt(arguments, "callee").get
                } catch {
                    return Sn
                }
            }
        }() : Sn,
        mt = B_(),
        We = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        bt = {},
        K_ = typeof Uint8Array > "u" ? q : We(Uint8Array),
        Tt = {
            "%AggregateError%": typeof AggregateError > "u" ? q : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? q : ArrayBuffer,
            "%ArrayIteratorPrototype%": mt ? We([][Symbol.iterator]()) : q,
            "%AsyncFromSyncIteratorPrototype%": q,
            "%AsyncFunction%": bt,
            "%AsyncGenerator%": bt,
            "%AsyncGeneratorFunction%": bt,
            "%AsyncIteratorPrototype%": bt,
            "%Atomics%": typeof Atomics > "u" ? q : Atomics,
            "%BigInt%": typeof BigInt > "u" ? q : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? q : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? q : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? q : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? q : FinalizationRegistry,
            "%Function%": Ro,
            "%GeneratorFunction%": bt,
            "%Int8Array%": typeof Int8Array > "u" ? q : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? q : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? q : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": mt ? We(We([][Symbol.iterator]())) : q,
            "%JSON%": typeof JSON == "object" ? JSON : q,
            "%Map%": typeof Map > "u" ? q : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !mt ? q : We(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? q : Promise,
            "%Proxy%": typeof Proxy > "u" ? q : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? q : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? q : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !mt ? q : We(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? q : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": mt ? We("" [Symbol.iterator]()) : q,
            "%Symbol%": mt ? Symbol : q,
            "%SyntaxError%": Dt,
            "%ThrowTypeError%": J_,
            "%TypedArray%": K_,
            "%TypeError%": Rt,
            "%Uint8Array%": typeof Uint8Array > "u" ? q : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? q : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? q : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? q : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? q : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? q : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? q : WeakSet
        },
        V_ = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = wn("async function () {}");
            else if (e === "%GeneratorFunction%") r = wn("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = wn("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var i = t("%AsyncGenerator%");
                i && (r = We(i.prototype))
            }
            return Tt[e] = r, r
        },
        Ja = {
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
        vr = Pi,
        Ur = z_,
        X_ = vr.call(Function.call, Array.prototype.concat),
        Q_ = vr.call(Function.apply, Array.prototype.splice),
        Ka = vr.call(Function.call, String.prototype.replace),
        Br = vr.call(Function.call, String.prototype.slice),
        Z_ = vr.call(Function.call, RegExp.prototype.exec),
        ey = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        ty = /\\(\\)?/g,
        ry = function(e) {
            var r = Br(e, 0, 1),
                n = Br(e, -1);
            if (r === "%" && n !== "%") throw new Dt("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new Dt("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return Ka(e, ey, function(a, s, o, c) {
                i[i.length] = o ? Ka(c, ty, "$1") : s || a
            }), i
        },
        ny = function(e, r) {
            var n = e,
                i;
            if (Ur(Ja, n) && (i = Ja[n], n = "%" + i[0] + "%"), Ur(Tt, n)) {
                var a = Tt[n];
                if (a === bt && (a = V_(n)), typeof a > "u" && !r) throw new Rt("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: a
                }
            }
            throw new Dt("intrinsic " + e + " does not exist!")
        },
        Ni = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new Rt("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new Rt('"allowMissing" argument must be a boolean');
            if (Z_(/^%?[^%]*%?$/g, e) === null) throw new Dt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = ry(e),
                i = n.length > 0 ? n[0] : "",
                a = ny("%" + i + "%", r),
                s = a.name,
                o = a.value,
                c = !1,
                l = a.alias;
            l && (i = l[0], Q_(n, X_([0, 1], l)));
            for (var d = 1, g = !0; d < n.length; d += 1) {
                var y = n[d],
                    b = Br(y, 0, 1),
                    E = Br(y, -1);
                if ((b === '"' || b === "'" || b === "`" || E === '"' || E === "'" || E === "`") && b !== E) throw new Dt("property names with quotes must have matching quotes");
                if ((y === "constructor" || !g) && (c = !0), i += "." + y, s = "%" + i + "%", Ur(Tt, s)) o = Tt[s];
                else if (o != null) {
                    if (!(y in o)) {
                        if (!r) throw new Rt("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (dt && d + 1 >= n.length) {
                        var I = dt(o, y);
                        g = !!I, g && "get" in I && !("originalValue" in I.get) ? o = I.get : o = o[y]
                    } else g = Ur(o, y), o = o[y];
                    g && !c && (Tt[s] = o)
                }
            }
            return o
        },
        To = {
            exports: {}
        };
    (function(t) {
        var e = Pi,
            r = Ni,
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
        t.exports = function(g) {
            var y = a(e, i, arguments);
            if (s && o) {
                var b = s(y, "length");
                b.configurable && o(y, "length", {
                    value: 1 + c(0, g.length - (arguments.length - 1))
                })
            }
            return y
        };
        var l = function() {
            return a(e, n, arguments)
        };
        o ? o(t.exports, "apply", {
            value: l
        }) : t.exports.apply = l
    })(To);
    var xo = Ni,
        Io = To.exports,
        iy = Io(xo("String.prototype.indexOf")),
        ay = function(e, r) {
            var n = xo(e, !!r);
            return typeof n == "function" && iy(e, ".prototype.") > -1 ? Io(n) : n
        };
    const sy = {},
        oy = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: sy
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        cy = Au(oy);
    var Ci = typeof Map == "function" && Map.prototype,
        kn = Object.getOwnPropertyDescriptor && Ci ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        Fr = Ci && kn && typeof kn.get == "function" ? kn.get : null,
        uy = Ci && Map.prototype.forEach,
        Li = typeof Set == "function" && Set.prototype,
        On = Object.getOwnPropertyDescriptor && Li ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        qr = Li && On && typeof On.get == "function" ? On.get : null,
        ly = Li && Set.prototype.forEach,
        fy = typeof WeakMap == "function" && WeakMap.prototype,
        ir = fy ? WeakMap.prototype.has : null,
        py = typeof WeakSet == "function" && WeakSet.prototype,
        ar = py ? WeakSet.prototype.has : null,
        dy = typeof WeakRef == "function" && WeakRef.prototype,
        Va = dy ? WeakRef.prototype.deref : null,
        hy = Boolean.prototype.valueOf,
        gy = Object.prototype.toString,
        _y = Function.prototype.toString,
        yy = String.prototype.match,
        Di = String.prototype.slice,
        Ve = String.prototype.replace,
        vy = String.prototype.toUpperCase,
        Xa = String.prototype.toLowerCase,
        $o = RegExp.prototype.test,
        Qa = Array.prototype.concat,
        De = Array.prototype.join,
        my = Array.prototype.slice,
        Za = Math.floor,
        Jn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
        Rn = Object.getOwnPropertySymbols,
        Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
        Mt = typeof Symbol == "function" && typeof Symbol.iterator == "object",
        be = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Mt ? "object" : "symbol") ? Symbol.toStringTag : null,
        Ao = Object.prototype.propertyIsEnumerable,
        es = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
            return t.__proto__
        } : null);

    function ts(t, e) {
        if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || $o.call(/e/, e)) return e;
        var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof t == "number") {
            var n = t < 0 ? -Za(-t) : Za(t);
            if (n !== t) {
                var i = String(n),
                    a = Di.call(e, i.length + 1);
                return Ve.call(i, r, "$&_") + "." + Ve.call(Ve.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return Ve.call(e, r, "$&_")
    }
    var Vn = cy,
        rs = Vn.custom,
        ns = No(rs) ? rs : null,
        by = function t(e, r, n, i) {
            var a = r || {};
            if (Ye(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (Ye(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var s = Ye(a, "customInspect") ? a.customInspect : !0;
            if (typeof s != "boolean" && s !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (Ye(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (Ye(a, "numericSeparator") && typeof a.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var o = a.numericSeparator;
            if (typeof e > "u") return "undefined";
            if (e === null) return "null";
            if (typeof e == "boolean") return e ? "true" : "false";
            if (typeof e == "string") return Lo(e, a);
            if (typeof e == "number") {
                if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
                var c = String(e);
                return o ? ts(e, c) : c
            }
            if (typeof e == "bigint") {
                var l = String(e) + "n";
                return o ? ts(e, l) : l
            }
            var d = typeof a.depth > "u" ? 5 : a.depth;
            if (typeof n > "u" && (n = 0), n >= d && d > 0 && typeof e == "object") return Xn(e) ? "[Array]" : "[Object]";
            var g = jy(a, n);
            if (typeof i > "u") i = [];
            else if (Co(i, e) >= 0) return "[Circular]";

            function y(ie, m, R) {
                if (m && (i = my.call(i), i.push(m)), R) {
                    var N = {
                        depth: a.depth
                    };
                    return Ye(a, "quoteStyle") && (N.quoteStyle = a.quoteStyle), t(ie, N, n + 1, i)
                }
                return t(ie, a, n + 1, i)
            }
            if (typeof e == "function" && !is(e)) {
                var b = Iy(e),
                    E = wr(e, y);
                return "[Function" + (b ? ": " + b : " (anonymous)") + "]" + (E.length > 0 ? " { " + De.call(E, ", ") + " }" : "")
            }
            if (No(e)) {
                var I = Mt ? Ve.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Kn.call(e);
                return typeof e == "object" && !Mt ? tr(I) : I
            }
            if (Ly(e)) {
                for (var A = "<" + Xa.call(String(e.nodeName)), $ = e.attributes || [], j = 0; j < $.length; j++) A += " " + $[j].name + "=" + Po(Ey($[j].value), "double", a);
                return A += ">", e.childNodes && e.childNodes.length && (A += "..."), A += "</" + Xa.call(String(e.nodeName)) + ">", A
            }
            if (Xn(e)) {
                if (e.length === 0) return "[]";
                var Q = wr(e, y);
                return g && !My(Q) ? "[" + Qn(Q, g) + "]" : "[ " + De.call(Q, ", ") + " ]"
            }
            if (Sy(e)) {
                var le = wr(e, y);
                return !("cause" in Error.prototype) && "cause" in e && !Ao.call(e, "cause") ? "{ [" + String(e) + "] " + De.call(Qa.call("[cause]: " + y(e.cause), le), ", ") + " }" : le.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + De.call(le, ", ") + " }"
            }
            if (typeof e == "object" && s) {
                if (ns && typeof e[ns] == "function" && Vn) return Vn(e, {
                    depth: d - n
                });
                if (s !== "symbol" && typeof e.inspect == "function") return e.inspect()
            }
            if ($y(e)) {
                var se = [];
                return uy.call(e, function(ie, m) {
                    se.push(y(m, e, !0) + " => " + y(ie, e))
                }), as("Map", Fr.call(e), se, g)
            }
            if (Ny(e)) {
                var oe = [];
                return ly.call(e, function(ie) {
                    oe.push(y(ie, e))
                }), as("Set", qr.call(e), oe, g)
            }
            if (Ay(e)) return Tn("WeakMap");
            if (Cy(e)) return Tn("WeakSet");
            if (Py(e)) return Tn("WeakRef");
            if (Oy(e)) return tr(y(Number(e)));
            if (Ty(e)) return tr(y(Jn.call(e)));
            if (Ry(e)) return tr(hy.call(e));
            if (ky(e)) return tr(y(String(e)));
            if (!wy(e) && !is(e)) {
                var ce = wr(e, y),
                    X = es ? es(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                    F = e instanceof Object ? "" : "null prototype",
                    Te = !X && be && Object(e) === e && be in e ? Di.call(at(e), 8, -1) : F ? "Object" : "",
                    ne = X || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                    we = ne + (Te || F ? "[" + De.call(Qa.call([], Te || [], F || []), ": ") + "] " : "");
                return ce.length === 0 ? we + "{}" : g ? we + "{" + Qn(ce, g) + "}" : we + "{ " + De.call(ce, ", ") + " }"
            }
            return String(e)
        };

    function Po(t, e, r) {
        var n = (r.quoteStyle || e) === "double" ? '"' : "'";
        return n + t + n
    }

    function Ey(t) {
        return Ve.call(String(t), /"/g, "&quot;")
    }

    function Xn(t) {
        return at(t) === "[object Array]" && (!be || !(typeof t == "object" && be in t))
    }

    function wy(t) {
        return at(t) === "[object Date]" && (!be || !(typeof t == "object" && be in t))
    }

    function is(t) {
        return at(t) === "[object RegExp]" && (!be || !(typeof t == "object" && be in t))
    }

    function Sy(t) {
        return at(t) === "[object Error]" && (!be || !(typeof t == "object" && be in t))
    }

    function ky(t) {
        return at(t) === "[object String]" && (!be || !(typeof t == "object" && be in t))
    }

    function Oy(t) {
        return at(t) === "[object Number]" && (!be || !(typeof t == "object" && be in t))
    }

    function Ry(t) {
        return at(t) === "[object Boolean]" && (!be || !(typeof t == "object" && be in t))
    }

    function No(t) {
        if (Mt) return t && typeof t == "object" && t instanceof Symbol;
        if (typeof t == "symbol") return !0;
        if (!t || typeof t != "object" || !Kn) return !1;
        try {
            return Kn.call(t), !0
        } catch {}
        return !1
    }

    function Ty(t) {
        if (!t || typeof t != "object" || !Jn) return !1;
        try {
            return Jn.call(t), !0
        } catch {}
        return !1
    }
    var xy = Object.prototype.hasOwnProperty || function(t) {
        return t in this
    };

    function Ye(t, e) {
        return xy.call(t, e)
    }

    function at(t) {
        return gy.call(t)
    }

    function Iy(t) {
        if (t.name) return t.name;
        var e = yy.call(_y.call(t), /^function\s*([\w$]+)/);
        return e ? e[1] : null
    }

    function Co(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var r = 0, n = t.length; r < n; r++)
            if (t[r] === e) return r;
        return -1
    }

    function $y(t) {
        if (!Fr || !t || typeof t != "object") return !1;
        try {
            Fr.call(t);
            try {
                qr.call(t)
            } catch {
                return !0
            }
            return t instanceof Map
        } catch {}
        return !1
    }

    function Ay(t) {
        if (!ir || !t || typeof t != "object") return !1;
        try {
            ir.call(t, ir);
            try {
                ar.call(t, ar)
            } catch {
                return !0
            }
            return t instanceof WeakMap
        } catch {}
        return !1
    }

    function Py(t) {
        if (!Va || !t || typeof t != "object") return !1;
        try {
            return Va.call(t), !0
        } catch {}
        return !1
    }

    function Ny(t) {
        if (!qr || !t || typeof t != "object") return !1;
        try {
            qr.call(t);
            try {
                Fr.call(t)
            } catch {
                return !0
            }
            return t instanceof Set
        } catch {}
        return !1
    }

    function Cy(t) {
        if (!ar || !t || typeof t != "object") return !1;
        try {
            ar.call(t, ar);
            try {
                ir.call(t, ir)
            } catch {
                return !0
            }
            return t instanceof WeakSet
        } catch {}
        return !1
    }

    function Ly(t) {
        return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
    }

    function Lo(t, e) {
        if (t.length > e.maxStringLength) {
            var r = t.length - e.maxStringLength,
                n = "... " + r + " more character" + (r > 1 ? "s" : "");
            return Lo(Di.call(t, 0, e.maxStringLength), e) + n
        }
        var i = Ve.call(Ve.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Dy);
        return Po(i, "single", e)
    }

    function Dy(t) {
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

    function tr(t) {
        return "Object(" + t + ")"
    }

    function Tn(t) {
        return t + " { ? }"
    }

    function as(t, e, r, n) {
        var i = n ? Qn(r, n) : De.call(r, ", ");
        return t + " (" + e + ") {" + i + "}"
    }

    function My(t) {
        for (var e = 0; e < t.length; e++)
            if (Co(t[e], `
`) >= 0) return !1;
        return !0
    }

    function jy(t, e) {
        var r;
        if (t.indent === "	") r = "	";
        else if (typeof t.indent == "number" && t.indent > 0) r = De.call(Array(t.indent + 1), " ");
        else return null;
        return {
            base: r,
            prev: De.call(Array(e + 1), r)
        }
    }

    function Qn(t, e) {
        if (t.length === 0) return "";
        var r = `
` + e.prev + e.base;
        return r + De.call(t, "," + r) + `
` + e.prev
    }

    function wr(t, e) {
        var r = Xn(t),
            n = [];
        if (r) {
            n.length = t.length;
            for (var i = 0; i < t.length; i++) n[i] = Ye(t, i) ? e(t[i], t) : ""
        }
        var a = typeof Rn == "function" ? Rn(t) : [],
            s;
        if (Mt) {
            s = {};
            for (var o = 0; o < a.length; o++) s["$" + a[o]] = a[o]
        }
        for (var c in t) !Ye(t, c) || r && String(Number(c)) === c && c < t.length || Mt && s["$" + c] instanceof Symbol || ($o.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t)));
        if (typeof Rn == "function")
            for (var l = 0; l < a.length; l++) Ao.call(t, a[l]) && n.push("[" + e(a[l]) + "]: " + e(t[a[l]], t));
        return n
    }
    var Mi = Ni,
        Vt = ay,
        Uy = by,
        By = Mi("%TypeError%"),
        Sr = Mi("%WeakMap%", !0),
        kr = Mi("%Map%", !0),
        Fy = Vt("WeakMap.prototype.get", !0),
        qy = Vt("WeakMap.prototype.set", !0),
        Gy = Vt("WeakMap.prototype.has", !0),
        Hy = Vt("Map.prototype.get", !0),
        Wy = Vt("Map.prototype.set", !0),
        Yy = Vt("Map.prototype.has", !0),
        ji = function(t, e) {
            for (var r = t, n;
                (n = r.next) !== null; r = n)
                if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n
        },
        zy = function(t, e) {
            var r = ji(t, e);
            return r && r.value
        },
        Jy = function(t, e, r) {
            var n = ji(t, e);
            n ? n.value = r : t.next = {
                key: e,
                next: t.next,
                value: r
            }
        },
        Ky = function(t, e) {
            return !!ji(t, e)
        },
        Vy = function() {
            var e, r, n, i = {
                assert: function(a) {
                    if (!i.has(a)) throw new By("Side channel does not contain " + Uy(a))
                },
                get: function(a) {
                    if (Sr && a && (typeof a == "object" || typeof a == "function")) {
                        if (e) return Fy(e, a)
                    } else if (kr) {
                        if (r) return Hy(r, a)
                    } else if (n) return zy(n, a)
                },
                has: function(a) {
                    if (Sr && a && (typeof a == "object" || typeof a == "function")) {
                        if (e) return Gy(e, a)
                    } else if (kr) {
                        if (r) return Yy(r, a)
                    } else if (n) return Ky(n, a);
                    return !1
                },
                set: function(a, s) {
                    Sr && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Sr), qy(e, a, s)) : kr ? (r || (r = new kr), Wy(r, a, s)) : (n || (n = {
                        key: {},
                        next: null
                    }), Jy(n, a, s))
                }
            };
            return i
        },
        Xy = String.prototype.replace,
        Qy = /%20/g,
        xn = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Ui = {
            default: xn.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return Xy.call(t, Qy, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: xn.RFC1738,
            RFC3986: xn.RFC3986
        },
        Zy = Ui,
        In = Object.prototype.hasOwnProperty,
        ft = Array.isArray,
        Le = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        ev = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];
                if (ft(n)) {
                    for (var i = [], a = 0; a < n.length; ++a) typeof n[a] < "u" && i.push(n[a]);
                    r.obj[r.prop] = i
                }
            }
        },
        Do = function(e, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
            return n
        },
        tv = function t(e, r, n) {
            if (!r) return e;
            if (typeof r != "object") {
                if (ft(e)) e.push(r);
                else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !In.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var i = e;
            return ft(e) && !ft(r) && (i = Do(e, n)), ft(e) && ft(r) ? (r.forEach(function(a, s) {
                if (In.call(e, s)) {
                    var o = e[s];
                    o && typeof o == "object" && a && typeof a == "object" ? e[s] = t(o, a, n) : e.push(a)
                } else e[s] = a
            }), e) : Object.keys(r).reduce(function(a, s) {
                var o = r[s];
                return In.call(a, s) ? a[s] = t(a[s], o, n) : a[s] = o, a
            }, i)
        },
        rv = function(e, r) {
            return Object.keys(r).reduce(function(n, i) {
                return n[i] = r[i], n
            }, e)
        },
        nv = function(t, e, r) {
            var n = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        iv = function(e, r, n, i, a) {
            if (e.length === 0) return e;
            var s = e;
            if (typeof e == "symbol" ? s = Symbol.prototype.toString.call(e) : typeof e != "string" && (s = String(e)), n === "iso-8859-1") return escape(s).replace(/%u[0-9a-f]{4}/gi, function(d) {
                return "%26%23" + parseInt(d.slice(2), 16) + "%3B"
            });
            for (var o = "", c = 0; c < s.length; ++c) {
                var l = s.charCodeAt(c);
                if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || a === Zy.RFC1738 && (l === 40 || l === 41)) {
                    o += s.charAt(c);
                    continue
                }
                if (l < 128) {
                    o = o + Le[l];
                    continue
                }
                if (l < 2048) {
                    o = o + (Le[192 | l >> 6] + Le[128 | l & 63]);
                    continue
                }
                if (l < 55296 || l >= 57344) {
                    o = o + (Le[224 | l >> 12] + Le[128 | l >> 6 & 63] + Le[128 | l & 63]);
                    continue
                }
                c += 1, l = 65536 + ((l & 1023) << 10 | s.charCodeAt(c) & 1023), o += Le[240 | l >> 18] + Le[128 | l >> 12 & 63] + Le[128 | l >> 6 & 63] + Le[128 | l & 63]
            }
            return o
        },
        av = function(e) {
            for (var r = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], i = 0; i < r.length; ++i)
                for (var a = r[i], s = a.obj[a.prop], o = Object.keys(s), c = 0; c < o.length; ++c) {
                    var l = o[c],
                        d = s[l];
                    typeof d == "object" && d !== null && n.indexOf(d) === -1 && (r.push({
                        obj: s,
                        prop: l
                    }), n.push(d))
                }
            return ev(r), e
        },
        sv = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        ov = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        cv = function(e, r) {
            return [].concat(e, r)
        },
        uv = function(e, r) {
            if (ft(e)) {
                for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
                return n
            }
            return r(e)
        },
        Mo = {
            arrayToObject: Do,
            assign: rv,
            combine: cv,
            compact: av,
            decode: nv,
            encode: iv,
            isBuffer: ov,
            isRegExp: sv,
            maybeMap: uv,
            merge: tv
        },
        jo = Vy,
        Zn = Mo,
        sr = Ui,
        lv = Object.prototype.hasOwnProperty,
        ss = {
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
        Be = Array.isArray,
        fv = String.prototype.split,
        pv = Array.prototype.push,
        Uo = function(t, e) {
            pv.apply(t, Be(e) ? e : [e])
        },
        dv = Date.prototype.toISOString,
        os = sr.default,
        ge = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Zn.encode,
            encodeValuesOnly: !1,
            format: os,
            formatter: sr.formatters[os],
            indices: !1,
            serializeDate: function(e) {
                return dv.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        hv = function(e) {
            return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
        },
        $n = {},
        gv = function t(e, r, n, i, a, s, o, c, l, d, g, y, b, E, I, A) {
            for (var $ = e, j = A, Q = 0, le = !1;
                (j = j.get($n)) !== void 0 && !le;) {
                var se = j.get(e);
                if (Q += 1, typeof se < "u") {
                    if (se === Q) throw new RangeError("Cyclic object value");
                    le = !0
                }
                typeof j.get($n) > "u" && (Q = 0)
            }
            if (typeof c == "function" ? $ = c(r, $) : $ instanceof Date ? $ = g($) : n === "comma" && Be($) && ($ = Zn.maybeMap($, function(D) {
                    return D instanceof Date ? g(D) : D
                })), $ === null) {
                if (a) return o && !E ? o(r, ge.encoder, I, "key", y) : r;
                $ = ""
            }
            if (hv($) || Zn.isBuffer($)) {
                if (o) {
                    var oe = E ? r : o(r, ge.encoder, I, "key", y);
                    if (n === "comma" && E) {
                        for (var ce = fv.call(String($), ","), X = "", F = 0; F < ce.length; ++F) X += (F === 0 ? "" : ",") + b(o(ce[F], ge.encoder, I, "value", y));
                        return [b(oe) + (i && Be($) && ce.length === 1 ? "[]" : "") + "=" + X]
                    }
                    return [b(oe) + "=" + b(o($, ge.encoder, I, "value", y))]
                }
                return [b(r) + "=" + b(String($))]
            }
            var Te = [];
            if (typeof $ > "u") return Te;
            var ne;
            if (n === "comma" && Be($)) ne = [{
                value: $.length > 0 ? $.join(",") || null : void 0
            }];
            else if (Be(c)) ne = c;
            else {
                var we = Object.keys($);
                ne = l ? we.sort(l) : we
            }
            for (var ie = i && Be($) && $.length === 1 ? r + "[]" : r, m = 0; m < ne.length; ++m) {
                var R = ne[m],
                    N = typeof R == "object" && typeof R.value < "u" ? R.value : $[R];
                if (!(s && N === null)) {
                    var Y = Be($) ? typeof n == "function" ? n(ie, R) : ie : ie + (d ? "." + R : "[" + R + "]");
                    A.set(e, Q);
                    var G = jo();
                    G.set($n, A), Uo(Te, t(N, Y, n, i, a, s, o, c, l, d, g, y, b, E, I, G))
                }
            }
            return Te
        },
        _v = function(e) {
            if (!e) return ge;
            if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var r = e.charset || ge.charset;
            if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = sr.default;
            if (typeof e.format < "u") {
                if (!lv.call(sr.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                n = e.format
            }
            var i = sr.formatters[n],
                a = ge.filter;
            return (typeof e.filter == "function" || Be(e.filter)) && (a = e.filter), {
                addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : ge.addQueryPrefix,
                allowDots: typeof e.allowDots > "u" ? ge.allowDots : !!e.allowDots,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ge.charsetSentinel,
                delimiter: typeof e.delimiter > "u" ? ge.delimiter : e.delimiter,
                encode: typeof e.encode == "boolean" ? e.encode : ge.encode,
                encoder: typeof e.encoder == "function" ? e.encoder : ge.encoder,
                encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : ge.encodeValuesOnly,
                filter: a,
                format: n,
                formatter: i,
                serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : ge.serializeDate,
                skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : ge.skipNulls,
                sort: typeof e.sort == "function" ? e.sort : null,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ge.strictNullHandling
            }
        },
        yv = function(t, e) {
            var r = t,
                n = _v(e),
                i, a;
            typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : Be(n.filter) && (a = n.filter, i = a);
            var s = [];
            if (typeof r != "object" || r === null) return "";
            var o;
            e && e.arrayFormat in ss ? o = e.arrayFormat : e && "indices" in e ? o = e.indices ? "indices" : "repeat" : o = "indices";
            var c = ss[o];
            if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var l = c === "comma" && e && e.commaRoundTrip;
            i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
            for (var d = jo(), g = 0; g < i.length; ++g) {
                var y = i[g];
                n.skipNulls && r[y] === null || Uo(s, gv(r[y], y, c, l, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, d))
            }
            var b = s.join(n.delimiter),
                E = n.addQueryPrefix === !0 ? "?" : "";
            return n.charsetSentinel && (n.charset === "iso-8859-1" ? E += "utf8=%26%2310003%3B&" : E += "utf8=%E2%9C%93&"), b.length > 0 ? E + b : ""
        },
        jt = Mo,
        ei = Object.prototype.hasOwnProperty,
        vv = Array.isArray,
        he = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: jt.decode,
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
        Bo = function(t, e) {
            return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
        },
        bv = "utf8=%26%2310003%3B",
        Ev = "utf8=%E2%9C%93",
        wv = function(e, r) {
            var n = {},
                i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                s = i.split(r.delimiter, a),
                o = -1,
                c, l = r.charset;
            if (r.charsetSentinel)
                for (c = 0; c < s.length; ++c) s[c].indexOf("utf8=") === 0 && (s[c] === Ev ? l = "utf-8" : s[c] === bv && (l = "iso-8859-1"), o = c, c = s.length);
            for (c = 0; c < s.length; ++c)
                if (c !== o) {
                    var d = s[c],
                        g = d.indexOf("]="),
                        y = g === -1 ? d.indexOf("=") : g + 1,
                        b, E;
                    y === -1 ? (b = r.decoder(d, he.decoder, l, "key"), E = r.strictNullHandling ? null : "") : (b = r.decoder(d.slice(0, y), he.decoder, l, "key"), E = jt.maybeMap(Bo(d.slice(y + 1), r), function(I) {
                        return r.decoder(I, he.decoder, l, "value")
                    })), E && r.interpretNumericEntities && l === "iso-8859-1" && (E = mv(E)), d.indexOf("[]=") > -1 && (E = vv(E) ? [E] : E), ei.call(n, b) ? n[b] = jt.combine(n[b], E) : n[b] = E
                } return n
        },
        Sv = function(t, e, r, n) {
            for (var i = n ? e : Bo(e, r), a = t.length - 1; a >= 0; --a) {
                var s, o = t[a];
                if (o === "[]" && r.parseArrays) s = [].concat(i);
                else {
                    s = r.plainObjects ? Object.create(null) : {};
                    var c = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o,
                        l = parseInt(c, 10);
                    !r.parseArrays && c === "" ? s = {
                        0: i
                    } : !isNaN(l) && o !== c && String(l) === c && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (s = [], s[l] = i) : c !== "__proto__" && (s[c] = i)
                }
                i = s
            }
            return i
        },
        kv = function(e, r, n, i) {
            if (!!e) {
                var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                    s = /(\[[^[\]]*])/,
                    o = /(\[[^[\]]*])/g,
                    c = n.depth > 0 && s.exec(a),
                    l = c ? a.slice(0, c.index) : a,
                    d = [];
                if (l) {
                    if (!n.plainObjects && ei.call(Object.prototype, l) && !n.allowPrototypes) return;
                    d.push(l)
                }
                for (var g = 0; n.depth > 0 && (c = o.exec(a)) !== null && g < n.depth;) {
                    if (g += 1, !n.plainObjects && ei.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes) return;
                    d.push(c[1])
                }
                return c && d.push("[" + a.slice(c.index) + "]"), Sv(d, r, n, i)
            }
        },
        Ov = function(e) {
            if (!e) return he;
            if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var r = typeof e.charset > "u" ? he.charset : e.charset;
            return {
                allowDots: typeof e.allowDots > "u" ? he.allowDots : !!e.allowDots,
                allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : he.allowPrototypes,
                allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : he.allowSparse,
                arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : he.arrayLimit,
                charset: r,
                charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : he.charsetSentinel,
                comma: typeof e.comma == "boolean" ? e.comma : he.comma,
                decoder: typeof e.decoder == "function" ? e.decoder : he.decoder,
                delimiter: typeof e.delimiter == "string" || jt.isRegExp(e.delimiter) ? e.delimiter : he.delimiter,
                depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : he.depth,
                ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : he.interpretNumericEntities,
                parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : he.parameterLimit,
                parseArrays: e.parseArrays !== !1,
                plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : he.plainObjects,
                strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : he.strictNullHandling
            }
        },
        Rv = function(t, e) {
            var r = Ov(e);
            if (t === "" || t === null || typeof t > "u") return r.plainObjects ? Object.create(null) : {};
            for (var n = typeof t == "string" ? wv(t, r) : t, i = r.plainObjects ? Object.create(null) : {}, a = Object.keys(n), s = 0; s < a.length; ++s) {
                var o = a[s],
                    c = kv(o, n[o], r, typeof t == "string");
                i = jt.merge(i, c, r)
            }
            return r.allowSparse === !0 ? i : jt.compact(i)
        },
        Tv = yv,
        xv = Rv,
        Iv = Ui,
        Fo = {
            formats: Iv,
            parse: xv,
            stringify: Tv
        };
    class $v {
        constructor(e) {
            this.code = e.code, this.token = e.token, this.host = e.host
        }
    }
    class Av {
        constructor(e) {
            this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
        }
    }
    class Pv {
        constructor(e) {
            this.connections = e.connections
        }
    }
    class Nv {
        constructor(e) {
            this.cause = e.cause
        }
        whenReceived(e) {
            e.disconnect()
        }
    }
    class Cv {}
    var sn = {
        CreateRoomReply: $v,
        GetRoomReply: Av,
        GetAudienceReply: Pv,
        RoomExit: Nv,
        RoomLock: Cv
    };
    const cs = zn.exports,
        Lv = Fo,
        {
            CreateRoomReply: Dv,
            GetRoomReply: Mv
        } = sn;
    class jv {
        constructor(e) {
            if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
            if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
            this.scheme = e.scheme
        }
        url(e, r) {
            if (r) {
                let n = Lv.stringify(r);
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
                s = await (await cs(n, {
                    method: "POST"
                })).json();
            if (!s.ok) throw new Error(`failed to create room: ${s.error}`);
            let o = s.body;
            return new Dv({
                code: o.code,
                token: o.token,
                host: o.host
            })
        }
        async getRoom(e) {
            let r = this.url(`/rooms/${e.code}`),
                i = await (await cs(r)).json();
            if (!i.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${i.error}`);
            let a = i.body;
            return new Mv({
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
    var Uv = {
            APIClient: jv
        },
        Et = null;
    typeof WebSocket < "u" ? Et = WebSocket : typeof MozWebSocket < "u" ? Et = MozWebSocket : typeof Re < "u" ? Et = Re.WebSocket || Re.MozWebSocket : typeof window < "u" ? Et = window.WebSocket || window.MozWebSocket : typeof self < "u" && (Et = self.WebSocket || self.MozWebSocket);
    var Bv = Et,
        Bi = {
            exports: {}
        },
        xt = typeof Reflect == "object" ? Reflect : null,
        us = xt && typeof xt.apply == "function" ? xt.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        Ir;
    xt && typeof xt.ownKeys == "function" ? Ir = xt.ownKeys : Object.getOwnPropertySymbols ? Ir = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : Ir = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function Fv(t) {
        console && console.warn && console.warn(t)
    }
    var qo = Number.isNaN || function(e) {
        return e !== e
    };

    function K() {
        K.init.call(this)
    }
    Bi.exports = K;
    Bi.exports.once = Wv;
    K.EventEmitter = K;
    K.prototype._events = void 0;
    K.prototype._eventsCount = 0;
    K.prototype._maxListeners = void 0;
    var ls = 10;

    function on(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(K, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return ls
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || qo(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            ls = t
        }
    });
    K.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    K.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || qo(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function Go(t) {
        return t._maxListeners === void 0 ? K.defaultMaxListeners : t._maxListeners
    }
    K.prototype.getMaxListeners = function() {
        return Go(this)
    };
    K.prototype.emit = function(e) {
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
        if (typeof c == "function") us(c, this, r);
        else
            for (var l = c.length, d = Jo(c, l), n = 0; n < l; ++n) us(d[n], this, r);
        return !0
    };

    function Ho(t, e, r, n) {
        var i, a, s;
        if (on(r), a = t._events, a === void 0 ? (a = t._events = Object.create(null), t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), a = t._events), s = a[e]), s === void 0) s = a[e] = r, ++t._eventsCount;
        else if (typeof s == "function" ? s = a[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = Go(t), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var o = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = s.length, Fv(o)
        }
        return t
    }
    K.prototype.addListener = function(e, r) {
        return Ho(this, e, r, !1)
    };
    K.prototype.on = K.prototype.addListener;
    K.prototype.prependListener = function(e, r) {
        return Ho(this, e, r, !0)
    };

    function qv() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function Wo(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = qv.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    K.prototype.once = function(e, r) {
        return on(r), this.on(e, Wo(this, e, r)), this
    };
    K.prototype.prependOnceListener = function(e, r) {
        return on(r), this.prependListener(e, Wo(this, e, r)), this
    };
    K.prototype.removeListener = function(e, r) {
        var n, i, a, s, o;
        if (on(r), i = this._events, i === void 0) return this;
        if (n = i[e], n === void 0) return this;
        if (n === r || n.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
        else if (typeof n != "function") {
            for (a = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === r || n[s].listener === r) {
                    o = n[s].listener, a = s;
                    break
                } if (a < 0) return this;
            a === 0 ? n.shift() : Gv(n, a), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r)
        }
        return this
    };
    K.prototype.off = K.prototype.removeListener;
    K.prototype.removeAllListeners = function(e) {
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

    function Yo(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Hv(i) : Jo(i, i.length)
    }
    K.prototype.listeners = function(e) {
        return Yo(this, e, !0)
    };
    K.prototype.rawListeners = function(e) {
        return Yo(this, e, !1)
    };
    K.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : zo.call(t, e)
    };
    K.prototype.listenerCount = zo;

    function zo(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    K.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Ir(this._events) : []
    };

    function Jo(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function Gv(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function Hv(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function Wv(t, e) {
        return new Promise(function(r, n) {
            function i(s) {
                t.removeListener(e, a), n(s)
            }

            function a() {
                typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
            }
            Ko(t, e, a, {
                once: !0
            }), e !== "error" && Yv(t, i, {
                once: !0
            })
        })
    }

    function Yv(t, e, r) {
        typeof t.on == "function" && Ko(t, "error", e, r)
    }

    function Ko(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(a) {
            n.once && t.removeEventListener(e, i), r(a)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }
    class zv {
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
    class cn extends Error {
        constructor(e) {
            super(e), e && (this.code = e.code, this.message = e.message)
        }
    }
    class mr extends cn {
        constructor(e) {
            super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
        }
    }
    class Vo extends mr {
        constructor(e) {
            super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
        }
    }
    class Xo extends mr {
        constructor(e) {
            super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
        }
    }
    class Qo extends mr {
        constructor(e) {
            super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
        }
    }
    class z extends cn {
        constructor(e) {
            super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
        }
    }
    class Zo extends z {
        constructor(e) {
            super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
        }
    }
    class ec extends z {
        constructor(e) {
            super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
        }
    }
    class tc extends z {
        constructor(e) {
            super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
        }
    }
    class rc extends z {
        constructor(e) {
            super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
        }
    }
    class nc extends z {
        constructor(e) {
            super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
        }
    }
    class ic extends z {
        constructor(e) {
            super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
        }
    }
    class ac extends z {
        constructor(e) {
            super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
        }
    }
    class sc extends z {
        constructor(e) {
            super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
        }
    }
    class oc extends z {
        constructor(e) {
            super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
        }
    }
    class cc extends z {
        constructor(e) {
            super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
        }
    }
    class uc extends z {
        constructor(e) {
            super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
        }
    }
    class lc extends z {
        constructor(e) {
            super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
        }
    }
    class fc extends z {
        constructor(e) {
            super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
        }
    }
    class pc extends z {
        constructor(e) {
            super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
        }
    }
    class dc extends z {
        constructor(e) {
            super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
        }
    }
    class hc extends z {
        constructor(e) {
            super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
        }
    }
    class gc extends z {
        constructor(e) {
            super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
        }
    }
    class _c extends z {
        constructor(e) {
            super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
        }
    }
    class yc extends z {
        constructor(e) {
            super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
        }
    }
    class vc extends z {
        constructor(e) {
            super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
        }
    }
    class mc extends z {
        constructor(e) {
            super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
        }
    }
    class bc extends z {
        constructor(e) {
            super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
        }
    }
    class Ec extends z {
        constructor(e) {
            super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
        }
    }
    class wc extends z {
        constructor(e) {
            super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
        }
    }
    class Sc extends z {
        constructor(e) {
            super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
        }
    }
    class kc extends z {
        constructor(e) {
            super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
        }
    }
    class Oc extends z {
        constructor(e) {
            super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
        }
    }
    class Rc extends z {
        constructor(e) {
            super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
        }
    }

    function Jv({
        code: t,
        message: e
    }) {
        const r = Kv[t];
        return r ? new r({
            message: e
        }) : new cn({
            message: e
        })
    }
    var Tc = {
        createError: Jv,
        CallError: cn,
        EcastServerError: mr,
        EcastCreateRoomFailed: Vo,
        EcastDialRoomFailed: Xo,
        EcastServerIsShuttingDown: Qo,
        EcastClientError: z,
        EcastParseError: Zo,
        EcastRequestIsMissingOpcode: ec,
        EcastRequestHasInvalidOpcode: tc,
        EcastRequestHasInvalidArguments: rc,
        EcastEntityNotFound: nc,
        EcastEntityAlreadyExists: ic,
        EcastEntityTypeError: ac,
        EcastNoSuchClient: sc,
        EcastRoomIsLocked: oc,
        EcastRoomIsFull: cc,
        EcastLicenseNotFound: uc,
        EcastLicenseCheckFailed: lc,
        EcastRoomNotFound: fc,
        EcastInvalidRole: pc,
        EcastTwitchLoginRequired: dc,
        EcastInvalidOption: hc,
        EcastPasswordRequired: gc,
        EcastInvalidPassword: _c,
        EcastNameRequired: yc,
        EcastFilterError: vc,
        EcastNoSuchFilter: mc,
        EcastPermissionDenied: bc,
        EcastNotConnected: Ec,
        EcastIllegalOperation: wc,
        EcastACLChangeDenied: Sc,
        EcastRoomHasEnded: kc,
        EcastEntityLocked: Oc,
        EcastRateLimitExceeded: Rc,
        ObservedError: zv
    };
    const Kv = {
        1e3: mr,
        1001: Vo,
        1002: Xo,
        1003: Qo,
        2e3: z,
        2001: Zo,
        2002: ec,
        2003: tc,
        2004: rc,
        2005: nc,
        2006: ic,
        2007: ac,
        2008: sc,
        2009: oc,
        2010: cc,
        2011: uc,
        2012: lc,
        2013: fc,
        2014: pc,
        2015: dc,
        2016: hc,
        2017: gc,
        2018: _c,
        2019: yc,
        2021: vc,
        2022: mc,
        2023: bc,
        2024: Ec,
        2025: wc,
        2026: Sc,
        2027: kc,
        2028: Oc,
        2420: Rc
    };
    class Vv {
        constructor(e) {
            this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
        }
    }
    class Xv {
        constructor(e) {
            this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
        }
    }
    class Qv {
        constructor(e) {
            this.id = e.id, this.role = e.role
        }
    }
    class Zv {
        constructor(e) {
            this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
        }
    }
    class em {
        constructor(e) {
            this.id = e.id, this.banned = e.banned, this.reason = e.reason
        }
    }
    var Fi = {
        ClientConnected: Xv,
        ClientDisconnected: Qv,
        ClientKicked: em,
        ClientSend: Zv,
        ClientWelcome: Vv
    };
    class tm {
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
    var qi = {
        CountGroup: tm
    };
    class rm {
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
    var Gi = {
        GCounter: rm
    };
    class nm {
        constructor(e) {
            this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
        }
    }
    var xc = {
        Notification: nm
    };
    class im {
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
    class am {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `ObjectEcho{message: ${this.message}}`
        }
    }
    var Hi = {
        ObjectEntity: im,
        ObjectEcho: am
    };
    class sm {
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
    var Wi = {
        PNCounter: sm
    };
    class om {
        constructor(e) {
            this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
        }
    }
    var Ic = {
        Reply: om
    };
    class cm {
        constructor(e) {
            this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
        }
    }
    var um = {
        Request: cm
    };
    class lm {
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
    class fm {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `TextEcho{message: ${this.message}
}`
        }
    }
    var Yi = {
        TextEntity: lm,
        TextEcho: fm
    };
    class pm {
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
    var zi = {
        TextRing: pm
    };
    class dm {
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
    var $c = {
        ArtifactEntity: dm
    };
    class hm {
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
    class gm {
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
    class _m {
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
    var Ji = {
        DoodleEntity: hm,
        DoodleLine: gm,
        DoodleLineRemoved: _m
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
    var Ac = {
        StackEntity: ym,
        StackElement: vm,
        StackElements: mm
    };
    class bm {
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
    var Pc = {
        DropEntity: bm
    };
    class Em {
        constructor(e) {
            this.message = e.message
        }
        toString() {
            return `Echo{message: ${this.message}
}`
        }
    }
    var wm = {
        Echo: Em
    };
    class Sm {
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
    var km = {
        LockEntity: Sm
    };
    class Om {
        constructor() {}
        toString() {
            return "OK"
        }
    }
    var Nc = {
        OK: Om
    };
    class Rm {
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
    var Cc = {
        NumberEntity: Rm
    };
    const {
        ArtifactEntity: Tm
    } = $c, {
        ClientWelcome: xm,
        ClientConnected: Im,
        ClientDisconnected: $m,
        ClientKicked: Am,
        ClientSend: Pm
    } = Fi, {
        CountGroup: Nm
    } = qi, {
        DoodleEntity: Cm,
        DoodleLine: Lm,
        DoodleLineRemoved: Dm
    } = Ji, {
        StackEntity: Mm,
        StackElement: jm,
        StackElements: Um
    } = Ac, {
        DropEntity: Bm
    } = Pc, {
        Echo: Fm
    } = wm, {
        LockEntity: qm
    } = km, {
        GCounter: Gm
    } = Gi, {
        GetAudienceReply: Hm,
        RoomExit: Wm,
        RoomLock: Ym
    } = sn, {
        Notification: zm
    } = xc, {
        OK: Jm
    } = Nc, {
        NumberEntity: Km
    } = Cc, {
        ObjectEcho: Vm,
        ObjectEntity: Xm
    } = Hi, {
        PNCounter: fs
    } = Wi, {
        Reply: Qm
    } = Ic, {
        TextEcho: Zm,
        TextEntity: eb
    } = Yi, {
        TextRing: tb
    } = zi, {
        createError: ps,
        ObservedError: rb
    } = Tc;

    function ti(t, e, r) {
        switch (t) {
            case "ok":
                return new Jm;
            case "echo":
                return new Fm({
                    message: e.message
                });
            case "lock":
                return new qm({
                    key: e.key,
                    from: e.from
                });
            case "error":
                return ps({
                    code: e.code,
                    message: e.msg
                });
            case "error/observed":
                return new rb({
                    to: e.to,
                    error: ps({
                        code: e.error.code,
                        message: e.error.msg
                    })
                });
            case "string":
                return e;
            case "text":
                return new eb({
                    from: e.from,
                    key: e.key,
                    text: e.val,
                    version: e.version,
                    meta: r,
                    acl: e.acl
                });
            case "text/echo":
                return new Zm({
                    message: e.message
                });
            case "object":
                return new Xm({
                    from: e.from,
                    key: e.key,
                    val: e.val,
                    meta: r,
                    acl: e.acl
                });
            case "object/echo":
                return new Vm({
                    message: e.message
                });
            case "drop":
                return new Bm({
                    key: e.key
                });
            case "artifact":
                return new Tm({
                    key: e.key,
                    artifactId: e.artifactId,
                    categoryId: e.categoryId,
                    rootId: e.rootId,
                    meta: r
                });
            case "client/connected":
                return new Im({
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
                return new Am({
                    id: e.id,
                    banned: e.banned,
                    reason: e.reason
                });
            case "client/send":
                return new Pm({
                    to: e.to,
                    from: e.from,
                    body: e.body,
                    userId: e.userID
                });
            case "client/welcome": {
                let n = new xm({
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
                        i[a] = ti(s[0], s[1], s[2])
                    }), n.entities = i
                }
                return n
            }
            case "doodle":
                return new Cm({
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
                return new Lm({
                    key: e.key,
                    line: e.val
                });
            case "doodle/line/removed":
                return new Dm({
                    key: e.key,
                    index: e.index
                });
            case "stack":
                return new Mm({
                    key: e.key,
                    size: e.size,
                    from: e.from,
                    version: e.version,
                    meta: e.meta,
                    acl: e.acl
                });
            case "stack/element":
                return new jm({
                    key: e.key,
                    val: e.val
                });
            case "stack/elements":
                return new Um({
                    key: e.key,
                    vals: e.vals
                });
            case "number":
                return new Km({
                    key: e.key,
                    val: e.val,
                    restrictions: e.restrictions,
                    from: e.from,
                    version: e.version,
                    meta: r,
                    acl: e.acl
                });
            case "room/exit":
                return new Wm({
                    cause: e.cause
                });
            case "room/lock":
                return new Ym;
            case "room/get-audience":
                return new Hm({
                    connections: e.connections
                });
            case "audience":
                return new fs({
                    key: t,
                    count: e[1]
                });
            case "audience/count-group":
                return new Nm({
                    key: e.key,
                    choices: e.choices,
                    meta: r
                });
            case "audience/text-ring":
                return new tb({
                    key: e.key,
                    elements: e.elements,
                    meta: r
                });
            case "audience/g-counter":
                return new Gm({
                    key: e.key,
                    count: e.count,
                    meta: r
                });
            case "audience/pn-counter":
                return new fs({
                    key: e.key,
                    count: e.count,
                    meta: r
                });
            default:
                return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
        }
    }

    function nb(t) {
        let e = JSON.parse(t.data),
            r = e.opcode || e.type;
        return e.re ? new Qm({
            pc: e.pc,
            re: e.re,
            opcode: r,
            result: ti(r, e.result)
        }) : new zm({
            pc: e.pc,
            opcode: r,
            result: ti(r, e.result)
        })
    }
    var ib = {
        parseResponseMessage: nb
    };
    const ds = Bv,
        ab = Fo,
        sb = Bi.exports,
        {
            CallError: ob
        } = Tc,
        {
            ClientWelcome: cb
        } = Fi,
        {
            CountGroup: ub
        } = qi,
        {
            GCounter: lb
        } = Gi,
        {
            Notification: hs
        } = xc,
        {
            ObjectEntity: An
        } = Hi,
        {
            PNCounter: fb
        } = Wi,
        {
            Reply: pb
        } = Ic,
        {
            Request: db
        } = um,
        {
            TextEntity: Pn
        } = Yi,
        {
            TextRing: hb
        } = zi,
        {
            parseResponseMessage: gb
        } = ib,
        {
            DoodleEntity: _b
        } = Ji,
        {
            StackEntity: yb
        } = Ac,
        vb = 1e3 + Math.floor(Math.random() * 500),
        gs = 13e3;
    class mb extends sb {
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
            const r = ab.stringify(e),
                n = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${r}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${r}`;
            return new Promise((i, a) => {
                let s = !1,
                    o = !1,
                    c = d => {
                        i(d), s = !0
                    },
                    l = d => {
                        a(d), s = !0
                    };
                this.conn = new ds(n, "ecast-v0"), this.conn.onmessage = d => {
                    this.debugLog(`recv <- ${JSON.stringify(JSON.parse(d.data),null,2)}`);
                    const g = gb(d);
                    if (g instanceof pb) this.onReply(g);
                    else if (g instanceof hs) {
                        if (g.result instanceof cb) o = !0, this.id = g.result.id, this.deviceId = g.result.deviceId, this.entities = g.result.entities, this.secret = g.result.secret, g.result.name && (this.name = g.result.name), c(g.result);
                        else if (!s) {
                            l(g.result);
                            return
                        }
                        this.onNotification(g)
                    } else console.error(`failed to parse response messsage: ${g}`)
                }, this.conn.onerror = d => {
                    s ? this.emit("socketError", d) : l(d)
                }, this.conn.onclose = d => {
                    this.debugLog("onclose", d.code), o && d.code === 1006 ? this.reconnect() : this.emit("socketClose", d)
                }, this.conn.onopen = d => {
                    this.emit("socketOpen", d)
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
                r = vb;
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
                if (r >= gs) {
                    this.debugLog("reconnect failed!", n), this.emit("socketClose", n);
                    return
                }
                e += 1, this.debugLog("waiting", r), this.emit("connection", {
                    status: "waiting",
                    attempt: e
                }), await this.sleep(r), r = Math.min(gs, r * 2)
            }
        }
        disconnect() {
            !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
        }
        onReply(e) {
            const r = e.re,
                n = this.pending[r];
            if (!n) {
                const i = new hs(e);
                i.re = r, this.emit("notification", i);
                return
            }
            delete this.pending[r], e.result instanceof ob ? n.reject(e.result) : n.resolve(e.result)
        }
        onNotification(e) {
            typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
        }
        send(e, r = {}) {
            if (!this.conn) throw new Error("No connection available");
            if (this.conn.readyState !== ds.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
            const n = ++this.seq,
                i = new db({
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
            return this.entities[e] = new An({
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
            return this.entities[e] = new An({
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
            return this.entities[e] = new An({
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
            return this.entities[e] = new Pn({
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
            return this.entities[e] = new Pn({
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
            return this.entities[e] = new Pn({
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
                weights: l
            } = r;
            i && (n.acl = i), a && (n.colors = a), n.live = s, o != null && (n.maxPoints = o), c && (n.size = c), l && (n.weights = l);
            const d = await this.send("doodle/create", n);
            return this.entities[e] = new _b({
                key: e,
                colors: a,
                lines: [],
                live: s,
                locked: !1,
                maxPoints: n.maxPoints || 0,
                size: c,
                weights: l,
                meta: {
                    locked: !1
                }
            }), d
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
            return this.entities[e] = new yb({
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
            return this.entities[e] = new ub({
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
            return this.entities[e] = new lb({
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
            return this.entities[e] = new fb({
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
            return this.entities[e] = new hb({
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
    var bb = {
        WSClient: mb
    };
    const {
        APIClient: Eb
    } = Uv, {
        WSClient: wb
    } = bb, {
        CreateRoomReply: Sb,
        GetRoomReply: kb
    } = sn, {
        ClientWelcome: Ob,
        ClientDisconnected: Rb
    } = Fi, {
        ArtifactEntity: Tb
    } = $c, {
        GCounter: xb
    } = Gi, {
        NumberEntity: Ib
    } = Cc, {
        TextEntity: $b
    } = Yi, {
        DoodleEntity: Ab
    } = Ji, {
        ObjectEntity: Pb
    } = Hi, {
        CountGroup: Nb
    } = qi, {
        DropEntity: Cb
    } = Pc, {
        OK: Lb
    } = Nc, {
        RoomExit: Db
    } = sn, {
        TextRing: Mb
    } = zi, {
        PNCounter: jb
    } = Wi;
    var _s = {
        APIClient: Eb,
        WSClient: wb,
        ClientWelcome: Ob,
        CreateRoomReply: Sb,
        DropEntity: Cb,
        GetRoomReply: kb,
        ClientDisconnected: Rb,
        RoomExit: Db,
        OK: Lb,
        ArtifactEntity: Tb,
        DoodleEntity: Ab,
        NumberEntity: Ib,
        CountGroup: Nb,
        GCounter: xb,
        ObjectEntity: Pb,
        PNCounter: jb,
        TextEntity: $b,
        TextRing: Mb
    };
    const Ub = [{
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
        ys = t => Ub.find(e => e.tag === t || e.categoryId === t);

    function $r(...t) {
        console.log(...t)
    }

    function Bb(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Gr = {
        exports: {}
    };
    (function(t, e) {
        (function(r, n) {
            n(e)
        })(Re, function(r) {
            var n = typeof window < "u" ? window : typeof Re < "u" ? Re : typeof self < "u" ? self : {},
                i = function(p, v) {
                    if (v = v.split(":")[0], p = +p, !p) return !1;
                    switch (v) {
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
                a = Object.prototype.hasOwnProperty,
                s;

            function o(h) {
                try {
                    return decodeURIComponent(h.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function c(h) {
                try {
                    return encodeURIComponent(h)
                } catch {
                    return null
                }
            }

            function l(h) {
                for (var p = /([^=?#&]+)=?([^&]*)/g, v = {}, f; f = p.exec(h);) {
                    var _ = o(f[1]),
                        k = o(f[2]);
                    _ === null || k === null || _ in v || (v[_] = k)
                }
                return v
            }

            function d(h, p) {
                p = p || "";
                var v = [],
                    f, _;
                typeof p != "string" && (p = "?");
                for (_ in h)
                    if (a.call(h, _)) {
                        if (f = h[_], !f && (f === null || f === s || isNaN(f)) && (f = ""), _ = c(_), f = c(f), _ === null || f === null) continue;
                        v.push(_ + "=" + f)
                    } return v.length ? p + v.join("&") : ""
            }
            var g = d,
                y = l,
                b = {
                    stringify: g,
                    parse: y
                },
                E = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                I = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                A = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                $ = new RegExp("^" + A + "+");

            function j(h) {
                return (h || "").toString().replace($, "")
            }
            var Q = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(p, v) {
                        return oe(v.protocol) ? p.replace(/\\/g, "/") : p
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                le = {
                    hash: 1,
                    query: 1
                };

            function se(h) {
                var p;
                typeof window < "u" ? p = window : typeof n < "u" ? p = n : typeof self < "u" ? p = self : p = {};
                var v = p.location || {};
                h = h || v;
                var f = {},
                    _ = typeof h,
                    k;
                if (h.protocol === "blob:") f = new F(unescape(h.pathname), {});
                else if (_ === "string") {
                    f = new F(h, {});
                    for (k in le) delete f[k]
                } else if (_ === "object") {
                    for (k in h) k in le || (f[k] = h[k]);
                    f.slashes === void 0 && (f.slashes = E.test(h.href))
                }
                return f
            }

            function oe(h) {
                return h === "file:" || h === "ftp:" || h === "http:" || h === "https:" || h === "ws:" || h === "wss:"
            }

            function ce(h, p) {
                h = j(h), p = p || {};
                var v = I.exec(h),
                    f = v[1] ? v[1].toLowerCase() : "",
                    _ = !!v[2],
                    k = !!v[3],
                    O = 0,
                    x;
                return _ ? k ? (x = v[2] + v[3] + v[4], O = v[2].length + v[3].length) : (x = v[2] + v[4], O = v[2].length) : k ? (x = v[3] + v[4], O = v[3].length) : x = v[4], f === "file:" ? O >= 2 && (x = x.slice(2)) : oe(f) ? x = v[4] : f ? _ && (x = x.slice(2)) : O >= 2 && oe(p.protocol) && (x = v[4]), {
                    protocol: f,
                    slashes: _ || oe(f),
                    slashesCount: O,
                    rest: x
                }
            }

            function X(h, p) {
                if (h === "") return p;
                for (var v = (p || "/").split("/").slice(0, -1).concat(h.split("/")), f = v.length, _ = v[f - 1], k = !1, O = 0; f--;) v[f] === "." ? v.splice(f, 1) : v[f] === ".." ? (v.splice(f, 1), O++) : O && (f === 0 && (k = !0), v.splice(f, 1), O--);
                return k && v.unshift(""), (_ === "." || _ === "..") && v.push(""), v.join("/")
            }

            function F(h, p, v) {
                if (h = j(h), !(this instanceof F)) return new F(h, p, v);
                var f, _, k, O, x, C, ke = Q.slice(),
                    $e = typeof p,
                    L = this,
                    _n = 0;
                for ($e !== "object" && $e !== "string" && (v = p, p = null), v && typeof v != "function" && (v = b.parse), p = se(p), _ = ce(h || "", p), f = !_.protocol && !_.slashes, L.slashes = _.slashes || f && p.slashes, L.protocol = _.protocol || p.protocol || "", h = _.rest, (L.protocol === "file:" || !_.slashes && (_.protocol || _.slashesCount < 2 || !oe(L.protocol))) && (ke[3] = [/(.*)/, "pathname"]); _n < ke.length; _n++) {
                    if (O = ke[_n], typeof O == "function") {
                        h = O(h, L);
                        continue
                    }
                    k = O[0], C = O[1], k !== k ? L[C] = h : typeof k == "string" ? ~(x = h.indexOf(k)) && (typeof O[2] == "number" ? (L[C] = h.slice(0, x), h = h.slice(x + O[2])) : (L[C] = h.slice(x), h = h.slice(0, x))) : (x = k.exec(h)) && (L[C] = x[1], h = h.slice(0, x.index)), L[C] = L[C] || f && O[3] && p[C] || "", O[4] && (L[C] = L[C].toLowerCase())
                }
                v && (L.query = v(L.query)), f && p.slashes && L.pathname.charAt(0) !== "/" && (L.pathname !== "" || p.pathname !== "") && (L.pathname = X(L.pathname, p.pathname)), L.pathname.charAt(0) !== "/" && oe(L.protocol) && (L.pathname = "/" + L.pathname), i(L.port, L.protocol) || (L.host = L.hostname, L.port = ""), L.username = L.password = "", L.auth && (O = L.auth.split(":"), L.username = O[0] || "", L.password = O[1] || ""), L.origin = L.protocol !== "file:" && oe(L.protocol) && L.host ? L.protocol + "//" + L.host : "null", L.href = L.toString()
            }

            function Te(h, p, v) {
                var f = this;
                switch (h) {
                    case "query":
                        typeof p == "string" && p.length && (p = (v || b.parse)(p)), f[h] = p;
                        break;
                    case "port":
                        f[h] = p, i(p, f.protocol) ? p && (f.host = f.hostname + ":" + p) : (f.host = f.hostname, f[h] = "");
                        break;
                    case "hostname":
                        f[h] = p, f.port && (p += ":" + f.port), f.host = p;
                        break;
                    case "host":
                        f[h] = p, /:\d+$/.test(p) ? (p = p.split(":"), f.port = p.pop(), f.hostname = p.join(":")) : (f.hostname = p, f.port = "");
                        break;
                    case "protocol":
                        f.protocol = p.toLowerCase(), f.slashes = !v;
                        break;
                    case "pathname":
                    case "hash":
                        if (p) {
                            var _ = h === "pathname" ? "/" : "#";
                            f[h] = p.charAt(0) !== _ ? _ + p : p
                        } else f[h] = p;
                        break;
                    default:
                        f[h] = p
                }
                for (var k = 0; k < Q.length; k++) {
                    var O = Q[k];
                    O[4] && (f[O[1]] = f[O[1]].toLowerCase())
                }
                return f.origin = f.protocol !== "file:" && oe(f.protocol) && f.host ? f.protocol + "//" + f.host : "null", f.href = f.toString(), f
            }

            function ne(h) {
                (!h || typeof h != "function") && (h = b.stringify);
                var p, v = this,
                    f = v.protocol;
                f && f.charAt(f.length - 1) !== ":" && (f += ":");
                var _ = f + (v.slashes || oe(v.protocol) ? "//" : "");
                return v.username && (_ += v.username, v.password && (_ += ":" + v.password), _ += "@"), _ += v.host + v.pathname, p = typeof v.query == "object" ? h(v.query) : v.query, p && (_ += p.charAt(0) !== "?" ? "?" + p : p), v.hash && (_ += v.hash), _
            }
            F.prototype = {
                set: Te,
                toString: ne
            }, F.extractProtocol = ce, F.location = se, F.trimLeft = j, F.qs = b;
            var we = F;

            function ie(h, p) {
                setTimeout(function(v) {
                    return h.call(v)
                }, 4, p)
            }

            function m(h, p) {
                typeof process < "u" && console[h].call(null, p)
            }

            function R(h, p) {
                h === void 0 && (h = []);
                var v = [];
                return h.forEach(function(f) {
                    p(f) || v.push(f)
                }), v
            }

            function N(h, p) {
                h === void 0 && (h = []);
                var v = [];
                return h.forEach(function(f) {
                    p(f) && v.push(f)
                }), v
            }
            var Y = function() {
                this.listeners = {}
            };
            Y.prototype.addEventListener = function(p, v) {
                typeof v == "function" && (Array.isArray(this.listeners[p]) || (this.listeners[p] = []), N(this.listeners[p], function(f) {
                    return f === v
                }).length === 0 && this.listeners[p].push(v))
            }, Y.prototype.removeEventListener = function(p, v) {
                var f = this.listeners[p];
                this.listeners[p] = R(f, function(_) {
                    return _ === v
                })
            }, Y.prototype.dispatchEvent = function(p) {
                for (var v = this, f = [], _ = arguments.length - 1; _-- > 0;) f[_] = arguments[_ + 1];
                var k = p.type,
                    O = this.listeners[k];
                return Array.isArray(O) ? (O.forEach(function(x) {
                    f.length > 0 ? x.apply(v, f) : x.call(v, p)
                }), !0) : !1
            };

            function G(h) {
                var p = h.indexOf("?");
                return p >= 0 ? h.slice(0, p) : h
            }
            var D = function() {
                this.urlMap = {}
            };
            D.prototype.attachWebSocket = function(p, v) {
                var f = G(v),
                    _ = this.urlMap[f];
                if (_ && _.server && _.websockets.indexOf(p) === -1) return _.websockets.push(p), _.server
            }, D.prototype.addMembershipToRoom = function(p, v) {
                var f = this.urlMap[G(p.url)];
                f && f.server && f.websockets.indexOf(p) !== -1 && (f.roomMemberships[v] || (f.roomMemberships[v] = []), f.roomMemberships[v].push(p))
            }, D.prototype.attachServer = function(p, v) {
                var f = G(v),
                    _ = this.urlMap[f];
                if (!_) return this.urlMap[f] = {
                    server: p,
                    websockets: [],
                    roomMemberships: {}
                }, p
            }, D.prototype.serverLookup = function(p) {
                var v = G(p),
                    f = this.urlMap[v];
                if (f) return f.server
            }, D.prototype.websocketsLookup = function(p, v, f) {
                var _ = G(p),
                    k, O = this.urlMap[_];
                if (k = O ? O.websockets : [], v) {
                    var x = O.roomMemberships[v];
                    k = x || []
                }
                return f ? k.filter(function(C) {
                    return C !== f
                }) : k
            }, D.prototype.removeServer = function(p) {
                delete this.urlMap[G(p)]
            }, D.prototype.removeWebSocket = function(p, v) {
                var f = G(v),
                    _ = this.urlMap[f];
                _ && (_.websockets = R(_.websockets, function(k) {
                    return k === p
                }))
            }, D.prototype.removeMembershipFromRoom = function(p, v) {
                var f = this.urlMap[G(p.url)],
                    _ = f.roomMemberships[v];
                f && _ !== null && (f.roomMemberships[v] = R(_, function(k) {
                    return k === p
                }))
            };
            var w = new D,
                T = {
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
                P = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                H = function() {};
            H.prototype.stopPropagation = function() {}, H.prototype.stopImmediatePropagation = function() {}, H.prototype.initEvent = function(p, v, f) {
                p === void 0 && (p = "undefined"), v === void 0 && (v = !1), f === void 0 && (f = !1), this.type = "" + p, this.bubbles = Boolean(v), this.cancelable = Boolean(f)
            };
            var W = function(h) {
                    function p(v, f) {
                        if (f === void 0 && (f = {}), h.call(this), !v) throw new TypeError(P.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof f != "object") throw new TypeError(P.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var _ = f.bubbles,
                            k = f.cancelable;
                        this.type = "" + v, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = k ? Boolean(k) : !1, this.cancelBubble = !1, this.bubbles = _ ? Boolean(_) : !1
                    }
                    return h && (p.__proto__ = h), p.prototype = Object.create(h && h.prototype), p.prototype.constructor = p, p
                }(H),
                xe = function(h) {
                    function p(v, f) {
                        if (f === void 0 && (f = {}), h.call(this), !v) throw new TypeError(P.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof f != "object") throw new TypeError(P.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = f.bubbles,
                            k = f.cancelable,
                            O = f.data,
                            x = f.origin,
                            C = f.lastEventId,
                            ke = f.ports;
                        this.type = "" + v, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = k ? Boolean(k) : !1, this.canncelBubble = !1, this.bubbles = _ ? Boolean(_) : !1, this.origin = "" + x, this.ports = typeof ke > "u" ? null : ke, this.data = typeof O > "u" ? null : O, this.lastEventId = "" + (C || "")
                    }
                    return h && (p.__proto__ = h), p.prototype = Object.create(h && h.prototype), p.prototype.constructor = p, p
                }(H),
                ot = function(h) {
                    function p(v, f) {
                        if (f === void 0 && (f = {}), h.call(this), !v) throw new TypeError(P.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof f != "object") throw new TypeError(P.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = f.bubbles,
                            k = f.cancelable,
                            O = f.code,
                            x = f.reason,
                            C = f.wasClean;
                        this.type = "" + v, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = k ? Boolean(k) : !1, this.cancelBubble = !1, this.bubbles = _ ? Boolean(_) : !1, this.code = typeof O == "number" ? parseInt(O, 10) : 0, this.reason = "" + (x || ""), this.wasClean = C ? Boolean(C) : !1
                    }
                    return h && (p.__proto__ = h), p.prototype = Object.create(h && h.prototype), p.prototype.constructor = p, p
                }(H);

            function Se(h) {
                var p = h.type,
                    v = h.target,
                    f = new W(p);
                return v && (f.target = v, f.srcElement = v, f.currentTarget = v), f
            }

            function ct(h) {
                var p = h.type,
                    v = h.origin,
                    f = h.data,
                    _ = h.target,
                    k = new xe(p, {
                        data: f,
                        origin: v
                    });
                return _ && (k.target = _, k.srcElement = _, k.currentTarget = _), k
            }

            function Oe(h) {
                var p = h.code,
                    v = h.reason,
                    f = h.type,
                    _ = h.target,
                    k = h.wasClean;
                k || (k = p === T.CLOSE_NORMAL || p === T.CLOSE_NO_STATUS);
                var O = new ot(f, {
                    code: p,
                    reason: v,
                    wasClean: k
                });
                return _ && (O.target = _, O.srcElement = _, O.currentTarget = _), O
            }

            function ha(h, p, v) {
                h.readyState = fe.CLOSING;
                var f = w.serverLookup(h.url),
                    _ = Oe({
                        type: "close",
                        target: h.target,
                        code: p,
                        reason: v
                    }),
                    k = Oe({
                        type: "server::close",
                        target: h,
                        code: p,
                        reason: v
                    });
                ie(function() {
                    w.removeWebSocket(h, h.url), h.readyState = fe.CLOSED, h.dispatchEvent(_), h.dispatchEvent(k), f && f.dispatchEvent(_, f)
                }, h)
            }

            function bu(h, p, v) {
                h.readyState = fe.CLOSING;
                var f = w.serverLookup(h.url),
                    _ = Oe({
                        type: "close",
                        target: h.target,
                        code: p,
                        reason: v,
                        wasClean: !1
                    }),
                    k = Oe({
                        type: "server::close",
                        target: h,
                        code: p,
                        reason: v,
                        wasClean: !1
                    }),
                    O = Se({
                        type: "error",
                        target: h.target
                    });
                ie(function() {
                    w.removeWebSocket(h, h.url), h.readyState = fe.CLOSED, h.dispatchEvent(O), h.dispatchEvent(_), h.dispatchEvent(k), f && f.dispatchEvent(_, f)
                }, h)
            }

            function Er(h) {
                return Object.prototype.toString.call(h) !== "[object Blob]" && !(h instanceof ArrayBuffer) && (h = String(h)), h
            }
            var dn = new WeakMap;

            function ga(h) {
                if (dn.has(h)) return dn.get(h);
                var p = new Proxy(h, {
                    get: function(f, _) {
                        return _ === "close" ? function(O) {
                            O === void 0 && (O = {});
                            var x = O.code || T.CLOSE_NORMAL,
                                C = O.reason || "";
                            ha(p, x, C)
                        } : _ === "send" ? function(O) {
                            O = Er(O), h.dispatchEvent(ct({
                                type: "message",
                                data: O,
                                origin: this.url,
                                target: h
                            }))
                        } : _ === "on" ? function(O, x) {
                            h.addEventListener("server::" + O, x)
                        } : _ === "target" ? h : f[_]
                    }
                });
                return dn.set(h, p), p
            }

            function Eu(h) {
                var p = encodeURIComponent(h).match(/%[89ABab]/g);
                return h.length + (p ? p.length : 0)
            }

            function wu(h) {
                var p = new we(h),
                    v = p.pathname,
                    f = p.protocol,
                    _ = p.hash;
                if (!h) throw new TypeError(P.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (v || (p.pathname = "/"), f === "") throw new SyntaxError(P.CONSTRUCTOR_ERROR + " The URL '" + p.toString() + "' is invalid.");
                if (f !== "ws:" && f !== "wss:") throw new SyntaxError(P.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + f + "' is not allowed.");
                if (_ !== "") throw new SyntaxError(P.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + _ + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return p.toString()
            }

            function Su(h) {
                if (h === void 0 && (h = []), !Array.isArray(h) && typeof h != "string") throw new SyntaxError(P.CONSTRUCTOR_ERROR + " The subprotocol '" + h.toString() + "' is invalid.");
                typeof h == "string" && (h = [h]);
                var p = h.map(function(f) {
                        return {
                            count: 1,
                            protocol: f
                        }
                    }).reduce(function(f, _) {
                        return f[_.protocol] = (f[_.protocol] || 0) + _.count, f
                    }, {}),
                    v = Object.keys(p).filter(function(f) {
                        return p[f] > 1
                    });
                if (v.length > 0) throw new SyntaxError(P.CONSTRUCTOR_ERROR + " The subprotocol '" + v[0] + "' is duplicated.");
                return h
            }
            var fe = function(h) {
                function p(f, _) {
                    h.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = wu(f), _ = Su(_), this.protocol = _[0] || "", this.binaryType = "blob", this.readyState = p.CONNECTING;
                    var k = ga(this),
                        O = w.attachWebSocket(k, this.url);
                    ie(function() {
                        if (O)
                            if (O.options.verifyClient && typeof O.options.verifyClient == "function" && !O.options.verifyClient()) this.readyState = p.CLOSED, m("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), w.removeWebSocket(k, this.url), this.dispatchEvent(Se({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(Oe({
                                type: "close",
                                target: this,
                                code: T.CLOSE_NORMAL
                            }));
                            else {
                                if (O.options.selectProtocol && typeof O.options.selectProtocol == "function") {
                                    var C = O.options.selectProtocol(_),
                                        ke = C !== "",
                                        $e = _.indexOf(C) !== -1;
                                    if (ke && !$e) {
                                        this.readyState = p.CLOSED, m("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), w.removeWebSocket(k, this.url), this.dispatchEvent(Se({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(Oe({
                                            type: "close",
                                            target: this,
                                            code: T.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = C
                                }
                                this.readyState = p.OPEN, this.dispatchEvent(Se({
                                    type: "open",
                                    target: this
                                })), O.dispatchEvent(Se({
                                    type: "connection"
                                }), k)
                            }
                        else this.readyState = p.CLOSED, this.dispatchEvent(Se({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(Oe({
                            type: "close",
                            target: this,
                            code: T.CLOSE_NORMAL
                        })), m("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                h && (p.__proto__ = h), p.prototype = Object.create(h && h.prototype), p.prototype.constructor = p;
                var v = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return v.onopen.get = function() {
                    return this._onopen
                }, v.onmessage.get = function() {
                    return this._onmessage
                }, v.onclose.get = function() {
                    return this._onclose
                }, v.onerror.get = function() {
                    return this._onerror
                }, v.onopen.set = function(f) {
                    this.removeEventListener("open", this._onopen), this._onopen = f, this.addEventListener("open", f)
                }, v.onmessage.set = function(f) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = f, this.addEventListener("message", f)
                }, v.onclose.set = function(f) {
                    this.removeEventListener("close", this._onclose), this._onclose = f, this.addEventListener("close", f)
                }, v.onerror.set = function(f) {
                    this.removeEventListener("error", this._onerror), this._onerror = f, this.addEventListener("error", f)
                }, p.prototype.send = function(_) {
                    var k = this;
                    if (this.readyState === p.CLOSING || this.readyState === p.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                    var O = ct({
                            type: "server::message",
                            origin: this.url,
                            data: Er(_)
                        }),
                        x = w.serverLookup(this.url);
                    x && ie(function() {
                        k.dispatchEvent(O, _)
                    }, x)
                }, p.prototype.close = function(_, k) {
                    if (_ !== void 0 && (typeof _ != "number" || _ !== 1e3 && (_ < 3e3 || _ > 4999))) throw new TypeError(P.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + _ + " is neither.");
                    if (k !== void 0) {
                        var O = Eu(k);
                        if (O > 123) throw new SyntaxError(P.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === p.CLOSING || this.readyState === p.CLOSED)) {
                        var x = ga(this);
                        this.readyState === p.CONNECTING ? bu(x, _ || T.CLOSE_ABNORMAL, k) : ha(x, _ || T.CLOSE_NO_STATUS, k)
                    }
                }, Object.defineProperties(p.prototype, v), p
            }(Y);
            fe.CONNECTING = 0, fe.prototype.CONNECTING = fe.CONNECTING, fe.OPEN = 1, fe.prototype.OPEN = fe.OPEN, fe.CLOSING = 2, fe.prototype.CLOSING = fe.CLOSING, fe.CLOSED = 3, fe.prototype.CLOSED = fe.CLOSED;
            var ku = function(h) {
                return h.reduce(function(p, v) {
                    return p.indexOf(v) > -1 ? p : p.concat(v)
                }, [])
            };

            function _a() {
                return typeof window < "u" ? window : typeof process == "object" && typeof Bb == "function" && typeof Re == "object" ? Re : this
            }
            var ya = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                hn = function(h) {
                    function p(v, f) {
                        f === void 0 && (f = ya), h.call(this);
                        var _ = new we(v);
                        _.pathname || (_.pathname = "/"), this.url = _.toString(), this.originalWebSocket = null;
                        var k = w.attachServer(this, this.url);
                        if (!k) throw this.dispatchEvent(Se({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, ya, f), this.options.mock && this.mockWebsocket()
                    }
                    return h && (p.__proto__ = h), p.prototype = Object.create(h && h.prototype), p.prototype.constructor = p, p.prototype.mockWebsocket = function() {
                        var f = _a();
                        this.originalWebSocket = f.WebSocket, f.WebSocket = fe
                    }, p.prototype.restoreWebsocket = function() {
                        var f = _a();
                        this.originalWebSocket !== null && (f.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, p.prototype.stop = function(f) {
                        f === void 0 && (f = function() {}), this.options.mock && this.restoreWebsocket(), w.removeServer(this.url), typeof f == "function" && f()
                    }, p.prototype.on = function(f, _) {
                        this.addEventListener(f, _)
                    }, p.prototype.close = function(f) {
                        f === void 0 && (f = {});
                        var _ = f.code,
                            k = f.reason,
                            O = f.wasClean,
                            x = w.websocketsLookup(this.url);
                        w.removeServer(this.url), x.forEach(function(C) {
                            C.readyState = fe.CLOSED, C.dispatchEvent(Oe({
                                type: "close",
                                target: C.target,
                                code: _ || T.CLOSE_NORMAL,
                                reason: k || "",
                                wasClean: O
                            }))
                        }), this.dispatchEvent(Oe({
                            type: "close"
                        }), this)
                    }, p.prototype.emit = function(f, _, k) {
                        var O = this;
                        k === void 0 && (k = {});
                        var x = k.websockets;
                        x || (x = w.websocketsLookup(this.url)), typeof k != "object" || arguments.length > 3 ? (_ = Array.prototype.slice.call(arguments, 1, arguments.length), _ = _.map(function(C) {
                            return Er(C)
                        })) : _ = Er(_), x.forEach(function(C) {
                            Array.isArray(_) ? C.dispatchEvent.apply(C, [ct({
                                type: f,
                                data: _,
                                origin: O.url,
                                target: C.target
                            })].concat(_)) : C.dispatchEvent(ct({
                                type: f,
                                data: _,
                                origin: O.url,
                                target: C.target
                            }))
                        })
                    }, p.prototype.clients = function() {
                        return w.websocketsLookup(this.url)
                    }, p.prototype.to = function(f, _, k) {
                        var O = this;
                        k === void 0 && (k = []);
                        var x = this,
                            C = ku(k.concat(w.websocketsLookup(this.url, f, _)));
                        return {
                            to: function(ke, $e) {
                                return O.to.call(O, ke, $e, C)
                            },
                            emit: function($e, L) {
                                x.emit($e, L, {
                                    websockets: C
                                })
                            }
                        }
                    }, p.prototype.in = function() {
                        for (var f = [], _ = arguments.length; _--;) f[_] = arguments[_];
                        return this.to.apply(null, f)
                    }, p.prototype.simulate = function(f) {
                        var _ = w.websocketsLookup(this.url);
                        f === "error" && _.forEach(function(k) {
                            k.readyState = fe.CLOSED, k.dispatchEvent(Se({
                                type: "error"
                            }))
                        })
                    }, p
                }(Y);
            hn.of = function(p) {
                return new hn(p)
            };
            var Qt = function(h) {
                function p(f, _) {
                    var k = this;
                    f === void 0 && (f = "socket.io"), _ === void 0 && (_ = ""), h.call(this), this.binaryType = "blob";
                    var O = new we(f);
                    O.pathname || (O.pathname = "/"), this.url = O.toString(), this.readyState = p.CONNECTING, this.protocol = "", this.target = this, typeof _ == "string" || typeof _ == "object" && _ !== null ? this.protocol = _ : Array.isArray(_) && _.length > 0 && (this.protocol = _[0]);
                    var x = w.attachWebSocket(this, this.url);
                    ie(function() {
                        x ? (this.readyState = p.OPEN, x.dispatchEvent(Se({
                            type: "connection"
                        }), x, this), x.dispatchEvent(Se({
                            type: "connect"
                        }), x, this), this.dispatchEvent(Se({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = p.CLOSED, this.dispatchEvent(Se({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(Oe({
                            type: "close",
                            target: this,
                            code: T.CLOSE_NORMAL
                        })), m("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(C) {
                        k.dispatchEvent(Oe({
                            type: "disconnect",
                            target: C.target,
                            code: C.code
                        }))
                    })
                }
                h && (p.__proto__ = h), p.prototype = Object.create(h && h.prototype), p.prototype.constructor = p;
                var v = {
                    broadcast: {}
                };
                return p.prototype.close = function() {
                    if (this.readyState === p.OPEN) {
                        var _ = w.serverLookup(this.url);
                        return w.removeWebSocket(this, this.url), this.readyState = p.CLOSED, this.dispatchEvent(Oe({
                            type: "close",
                            target: this,
                            code: T.CLOSE_NORMAL
                        })), _ && _.dispatchEvent(Oe({
                            type: "disconnect",
                            target: this,
                            code: T.CLOSE_NORMAL
                        }), _), this
                    }
                }, p.prototype.disconnect = function() {
                    return this.close()
                }, p.prototype.emit = function(_) {
                    for (var k = [], O = arguments.length - 1; O-- > 0;) k[O] = arguments[O + 1];
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var x = ct({
                            type: _,
                            origin: this.url,
                            data: k
                        }),
                        C = w.serverLookup(this.url);
                    return C && C.dispatchEvent.apply(C, [x].concat(k)), this
                }, p.prototype.send = function(_) {
                    return this.emit("message", _), this
                }, v.broadcast.get = function() {
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var f = this,
                        _ = w.serverLookup(this.url);
                    if (!_) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(O, x) {
                            return _.emit(O, x, {
                                websockets: w.websocketsLookup(f.url, null, f)
                            }), f
                        },
                        to: function(O) {
                            return _.to(O, f)
                        },
                        in: function(O) {
                            return _.in(O, f)
                        }
                    }
                }, p.prototype.on = function(_, k) {
                    return this.addEventListener(_, k), this
                }, p.prototype.off = function(_, k) {
                    this.removeEventListener(_, k)
                }, p.prototype.hasListeners = function(_) {
                    var k = this.listeners[_];
                    return Array.isArray(k) ? !!k.length : !1
                }, p.prototype.join = function(_) {
                    w.addMembershipToRoom(this, _)
                }, p.prototype.leave = function(_) {
                    w.removeMembershipFromRoom(this, _)
                }, p.prototype.to = function(_) {
                    return this.broadcast.to(_)
                }, p.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, p.prototype.dispatchEvent = function(_) {
                    for (var k = this, O = [], x = arguments.length - 1; x-- > 0;) O[x] = arguments[x + 1];
                    var C = _.type,
                        ke = this.listeners[C];
                    if (!Array.isArray(ke)) return !1;
                    ke.forEach(function($e) {
                        O.length > 0 ? $e.apply(k, O) : $e.call(k, _.data ? _.data : _)
                    })
                }, Object.defineProperties(p.prototype, v), p
            }(Y);
            Qt.CONNECTING = 0, Qt.OPEN = 1, Qt.CLOSING = 2, Qt.CLOSED = 3;
            var gn = function(p, v) {
                return new Qt(p, v)
            };
            gn.connect = function(p, v) {
                return gn(p, v)
            };
            var Ou = hn,
                Ru = fe,
                Tu = gn;
            r.Server = Ou, r.WebSocket = Ru, r.SocketIO = Tu, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Gr, Gr.exports);
    class Lc {
        parse(e) {
            const r = this.items(e);
            return [this.room(e), this.client(e), r[0], r[1], r[2]]
        }
    }
    class Fb extends Lc {
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
                    const l = n.filter(d => d === c.marker).length;
                    n.push(c.marker), l && (c.marker = `${c.marker}_${l}`), r.push([a.length - 1, c]), i.push([a.length - 1, c]);
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
    class qb extends Lc {
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
                Object.keys(s[c]).forEach(d => {
                    a.push({
                        type: "object",
                        key: d,
                        value: s[c][d]
                    })
                });
                const l = {
                    marker: c
                };
                n.push([a.length - 1, l]), i.push([a.length - 1, l])
            }), [n, i, a]
        }
    }
    class Gb {
        static parse(e) {
            switch (e.version) {
                case 3:
                    return new Fb().parse(e);
                default:
                    return new qb().parse(e)
            }
        }
    }
    class Hb {
        constructor(e) {
            Z(this, "url", "localhost:8080");
            Z(this, "pcCounter", -1);
            Z(this, "server");
            Z(this, "client");
            Z(this, "sockets", {
                server: null,
                client: null
            });
            Z(this, "roomData");
            Z(this, "clientData");
            Z(this, "markerMap");
            Z(this, "metaMap");
            Z(this, "entityItems");
            Z(this, "currentEntityItemIndex", 0);
            Z(this, "clientProxyHandler", {
                get: (e, r) => r === "conn" ? this.sockets.client : r === "reconnect" ? (setTimeout(() => {
                    e.reconnect()
                }, 1), function() {}) : e[r],
                set: (e, r, n) => r !== "conn" ? Reflect.set(e, r, n) : (this.sockets.client = n ? new Gr.exports.WebSocket(`wss://${this.url}`, "ecast-v0") : null, !0)
            });
            [this.roomData, this.clientData, this.markerMap, this.metaMap, this.entityItems] = Gb.parse(e), this.setIndexFromURL(), this.server = this.createServer(), this.client = this.createClient()
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
            return new _s.GetRoomReply({
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
                r < this.currentEntityItemIndex || r > e || ("opcode" in n && $r("[REPLAYING SEND]", n.opcode, JSON.parse(JSON.stringify(n.arguments))), "error" in n && $r("[REPLAYING ERROR]", JSON.parse(JSON.stringify(n.error))))
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
            const e = new Gr.exports.Server(`wss://${this.url}`);
            return e.on("connection", r => {
                this.sockets.server = r, r.on("message", this.onServerMessage.bind(this)), this.onServerConnection()
            }), e
        }
        onServerConnection() {
            console.warn("*** 'WebSocket connection failed' errors are expected when using the debug controller ***"), this.serverSend("client/welcome", this.getWelcomeResult())
        }
        onServerMessage(e) {
            const r = JSON.parse(e);
            $r("[DebugReplayer] Message Sent", r), this.serverSend("ok", {}, r.seq)
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
            const e = new _s.WSClient({
                host: this.url,
                code: "DBUG",
                name: this.clientData.name,
                role: this.clientData.role
            });
            return new Proxy(e, this.clientProxyHandler)
        }
    }
    var Wb = {
        exports: {}
    };
    (function(t) {
        (function() {
            function e(o, c) {
                var l = o.x - c.x,
                    d = o.y - c.y;
                return l * l + d * d
            }

            function r(o, c, l) {
                var d = c.x,
                    g = c.y,
                    y = l.x - d,
                    b = l.y - g;
                if (y !== 0 || b !== 0) {
                    var E = ((o.x - d) * y + (o.y - g) * b) / (y * y + b * b);
                    E > 1 ? (d = l.x, g = l.y) : E > 0 && (d += y * E, g += b * E)
                }
                return y = o.x - d, b = o.y - g, y * y + b * b
            }

            function n(o, c) {
                for (var l = o[0], d = [l], g, y = 1, b = o.length; y < b; y++) g = o[y], e(g, l) > c && (d.push(g), l = g);
                return l !== g && d.push(g), d
            }

            function i(o, c, l, d, g) {
                for (var y = d, b, E = c + 1; E < l; E++) {
                    var I = r(o[E], o[c], o[l]);
                    I > y && (b = E, y = I)
                }
                y > d && (b - c > 1 && i(o, c, b, d, g), g.push(o[b]), l - b > 1 && i(o, b, l, d, g))
            }

            function a(o, c) {
                var l = o.length - 1,
                    d = [o[0]];
                return i(o, 0, l, c, d), d.push(o[l]), d
            }

            function s(o, c, l) {
                if (o.length <= 2) return o;
                var d = c !== void 0 ? c * c : 1;
                return o = l ? o : n(o, d), o = a(o, d), o
            }
            t.exports = s, t.exports.default = s
        })()
    })(Wb);

    function Yb() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Ki() {
        return !Yb() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function zb(t, e) {
        return t.require(e)
    }
    var Jb = {};

    function ue() {
        return Ki() ? global : typeof window < "u" ? window : typeof self < "u" ? self : Jb
    }

    function Vi(t, e, r) {
        var n = r || ue(),
            i = n.__SENTRY__ = n.__SENTRY__ || {},
            a = i[t] || (i[t] = e());
        return a
    }
    var Dc = Object.prototype.toString;

    function Mc(t) {
        switch (Dc.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return st(t, Error)
        }
    }

    function Xt(t, e) {
        return Dc.call(t) === `[object ${e}]`
    }

    function jc(t) {
        return Xt(t, "ErrorEvent")
    }

    function vs(t) {
        return Xt(t, "DOMError")
    }

    function Kb(t) {
        return Xt(t, "DOMException")
    }

    function Ut(t) {
        return Xt(t, "String")
    }

    function Uc(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function Bt(t) {
        return Xt(t, "Object")
    }

    function Xi(t) {
        return typeof Event < "u" && st(t, Event)
    }

    function Vb(t) {
        return typeof Element < "u" && st(t, Element)
    }

    function Xb(t) {
        return Xt(t, "RegExp")
    }

    function Qi(t) {
        return Boolean(t && t.then && typeof t.then == "function")
    }

    function Qb(t) {
        return Bt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function Zb(t) {
        return typeof t == "number" && t !== t
    }

    function st(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function ri(t, e) {
        try {
            let o = t;
            var r = 5,
                n = 80,
                i = [];
            let c = 0,
                l = 0;
            var a = " > ",
                s = a.length;
            let d;
            for (; o && c++ < r && (d = eE(o, e), !(d === "html" || c > 1 && l + i.length * s + d.length >= n));) i.push(d), l += d.length, o = o.parentNode;
            return i.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function eE(t, e) {
        var r = t,
            n = [];
        let i, a, s, o, c;
        if (!r || !r.tagName) return "";
        n.push(r.tagName.toLowerCase());
        var l = e && e.length ? e.filter(g => r.getAttribute(g)).map(g => [g, r.getAttribute(g)]) : null;
        if (l && l.length) l.forEach(g => {
            n.push(`[${g[0]}="${g[1]}"]`)
        });
        else if (r.id && n.push(`#${r.id}`), i = r.className, i && Ut(i))
            for (a = i.split(/\s+/), c = 0; c < a.length; c++) n.push(`.${a[c]}`);
        var d = ["type", "name", "title", "alt"];
        for (c = 0; c < d.length; c++) s = d[c], o = r.getAttribute(s), o && n.push(`[${s}="${o}"]`);
        return n.join("")
    }

    function tE() {
        var t = ue();
        try {
            return t.document.location.href
        } catch {
            return ""
        }
    }
    class ye extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }
    var rE = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function nE(t) {
        return t === "http" || t === "https"
    }

    function Zi(t, e = !1) {
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

    function iE(t) {
        var e = rE.exec(t);
        if (!e) throw new ye(`Invalid Sentry Dsn: ${t}`);
        const [r, n, i = "", a, s = "", o] = e.slice(1);
        let c = "",
            l = o;
        var d = l.split("/");
        if (d.length > 1 && (c = d.slice(0, -1).join("/"), l = d.pop()), l) {
            var g = l.match(/^\d+/);
            g && (l = g[0])
        }
        return Bc({
            host: a,
            pass: i,
            path: c,
            projectId: l,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function Bc(t) {
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

    function aE(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return;
        const {
            port: e,
            projectId: r,
            protocol: n
        } = t;
        var i = ["protocol", "publicKey", "host", "projectId"];
        if (i.forEach(a => {
                if (!t[a]) throw new ye(`Invalid Sentry Dsn: ${a} missing`)
            }), !r.match(/^\d+$/)) throw new ye(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!nE(n)) throw new ye(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new ye(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function sE(t) {
        var e = typeof t == "string" ? iE(t) : Bc(t);
        return aE(e), e
    }
    var oE = ue(),
        cE = "Sentry Logger ",
        Hr = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function Fc(t) {
        var e = ue();
        if (!("console" in e)) return t();
        var r = e.console,
            n = {};
        Hr.forEach(i => {
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

    function ms() {
        let t = !1;
        var e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Hr.forEach(r => {
            e[r] = (...n) => {
                t && Fc(() => {
                    oE.console[r](`${cE}[${r}]:`, ...n)
                })
            }
        }) : Hr.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let U;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? U = Vi("logger", ms) : U = ms();

    function or(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.substr(0,e)}...`
    }

    function bs(t, e) {
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

    function ea(t, e) {
        return Ut(t) ? Xb(e) ? e.test(t) : typeof e == "string" ? t.indexOf(e) !== -1 : !1 : !1
    }

    function ve(t, e, r) {
        if (e in t) {
            var n = t[e],
                i = r(n);
            if (typeof i == "function") try {
                qc(i, n)
            } catch {}
            t[e] = i
        }
    }

    function ta(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function qc(t, e) {
        var r = e.prototype || {};
        t.prototype = e.prototype = r, ta(t, "__sentry_original__", e)
    }

    function ra(t) {
        return t.__sentry_original__
    }

    function uE(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function Gc(t) {
        if (Mc(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...ws(t)
        };
        if (Xi(t)) {
            var e = {
                type: t.type,
                target: Es(t.target),
                currentTarget: Es(t.currentTarget),
                ...ws(t)
            };
            return typeof CustomEvent < "u" && st(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function Es(t) {
        try {
            return Vb(t) ? ri(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function ws(t) {
        if (typeof t == "object" && t !== null) {
            var e = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function lE(t, e = 40) {
        var r = Object.keys(Gc(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return or(r[0], e);
        for (let i = r.length; i > 0; i--) {
            var n = r.slice(0, i).join(", ");
            if (!(n.length > e)) return i === r.length ? n : or(n, e)
        }
        return ""
    }

    function na(t) {
        var e = new Map;
        return ni(t, e)
    }

    function ni(t, e) {
        if (Bt(t)) {
            var r = e.get(t);
            if (r !== void 0) return r;
            var n = {};
            e.set(t, n);
            for (var i of Object.keys(t)) typeof t[i] < "u" && (n[i] = ni(t[i], e));
            return n
        }
        if (Array.isArray(t)) {
            var r = e.get(t);
            if (r !== void 0) return r;
            var n = [];
            return e.set(t, n), t.forEach(o => {
                n.push(ni(o, e))
            }), n
        }
        return t
    }
    var fE = 50;

    function Hc(...t) {
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
            return dE(i)
        }
    }

    function pE(t) {
        return Array.isArray(t) ? Hc(...t) : t
    }

    function dE(t) {
        if (!t.length) return [];
        let e = t;
        var r = e[0].function || "",
            n = e[e.length - 1].function || "";
        return (r.indexOf("captureMessage") !== -1 || r.indexOf("captureException") !== -1) && (e = e.slice(1)), n.indexOf("sentryWrapped") !== -1 && (e = e.slice(0, -1)), e.slice(0, fE).map(i => ({
            ...i,
            filename: i.filename || e[0].filename,
            function: i.function || "?"
        })).reverse()
    }
    var Nn = "<anonymous>";

    function rt(t) {
        try {
            return !t || typeof t != "function" ? Nn : t.name || Nn
        } catch {
            return Nn
        }
    }

    function ia() {
        if (!("fetch" in ue())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch {
            return !1
        }
    }

    function ii(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function hE() {
        if (!ia()) return !1;
        var t = ue();
        if (ii(t.fetch)) return !0;
        let e = !1;
        var r = t.document;
        if (r && typeof r.createElement == "function") try {
            var n = r.createElement("iframe");
            n.hidden = !0, r.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = ii(n.contentWindow.fetch)), r.head.removeChild(n)
        } catch (i) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
        }
        return e
    }

    function gE() {
        var t = ue(),
            e = t.chrome,
            r = e && e.app && e.app.runtime,
            n = "history" in t && !!t.history.pushState && !!t.history.replaceState;
        return !r && n
    }
    var re = ue(),
        cr = {},
        Ss = {};

    function _E(t) {
        if (!Ss[t]) switch (Ss[t] = !0, t) {
            case "console":
                yE();
                break;
            case "dom":
                RE();
                break;
            case "xhr":
                EE();
                break;
            case "fetch":
                vE();
                break;
            case "history":
                wE();
                break;
            case "error":
                TE();
                break;
            case "unhandledrejection":
                xE();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("unknown instrumentation type:", t);
                return
        }
    }

    function ze(t, e) {
        cr[t] = cr[t] || [], cr[t].push(e), _E(t)
    }

    function Ce(t, e) {
        if (!(!t || !cr[t]))
            for (var r of cr[t] || []) try {
                r(e)
            } catch (n) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${rt(r)}
Error:`, n)
            }
    }

    function yE() {
        "console" in re && Hr.forEach(function(t) {
            t in re.console && ve(re.console, t, function(e) {
                return function(...r) {
                    Ce("console", {
                        args: r,
                        level: t
                    }), e && e.apply(re.console, r)
                }
            })
        })
    }

    function vE() {
        !hE() || ve(re, "fetch", function(t) {
            return function(...e) {
                var r = {
                    args: e,
                    fetchData: {
                        method: mE(e),
                        url: bE(e)
                    },
                    startTimestamp: Date.now()
                };
                return Ce("fetch", {
                    ...r
                }), t.apply(re, e).then(n => (Ce("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: n
                }), n), n => {
                    throw Ce("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: n
                    }), n
                })
            }
        })
    }

    function mE(t = []) {
        return "Request" in re && st(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }

    function bE(t = []) {
        return typeof t[0] == "string" ? t[0] : "Request" in re && st(t[0], Request) ? t[0].url : String(t[0])
    }

    function EE() {
        if ("XMLHttpRequest" in re) {
            var t = XMLHttpRequest.prototype;
            ve(t, "open", function(e) {
                return function(...r) {
                    var n = this,
                        i = r[1],
                        a = n.__sentry_xhr__ = {
                            method: Ut(r[0]) ? r[0].toUpperCase() : r[0],
                            url: r[1]
                        };
                    Ut(i) && a.method === "POST" && i.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                    var s = function() {
                        if (n.readyState === 4) {
                            try {
                                a.status_code = n.status
                            } catch {}
                            Ce("xhr", {
                                args: r,
                                endTimestamp: Date.now(),
                                startTimestamp: Date.now(),
                                xhr: n
                            })
                        }
                    };
                    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? ve(n, "onreadystatechange", function(o) {
                        return function(...c) {
                            return s(), o.apply(n, c)
                        }
                    }) : n.addEventListener("readystatechange", s), e.apply(n, r)
                }
            }), ve(t, "send", function(e) {
                return function(...r) {
                    return this.__sentry_xhr__ && r[0] !== void 0 && (this.__sentry_xhr__.body = r[0]), Ce("xhr", {
                        args: r,
                        startTimestamp: Date.now(),
                        xhr: this
                    }), e.apply(this, r)
                }
            })
        }
    }
    let Or;

    function wE() {
        if (!gE()) return;
        var t = re.onpopstate;
        re.onpopstate = function(...r) {
            var n = re.location.href,
                i = Or;
            if (Or = n, Ce("history", {
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
                    var a = Or,
                        s = String(i);
                    Or = s, Ce("history", {
                        from: a,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        ve(re.history, "pushState", e), ve(re.history, "replaceState", e)
    }
    var SE = 1e3;
    let Rr, Tr;

    function kE(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function OE(t) {
        if (t.type !== "keypress") return !1;
        try {
            var e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function ks(t, e = !1) {
        return r => {
            if (!(!r || Tr === r) && !OE(r)) {
                var n = r.type === "keypress" ? "input" : r.type;
                Rr === void 0 ? (t({
                    event: r,
                    name: n,
                    global: e
                }), Tr = r) : kE(Tr, r) && (t({
                    event: r,
                    name: n,
                    global: e
                }), Tr = r), clearTimeout(Rr), Rr = re.setTimeout(() => {
                    Rr = void 0
                }, SE)
            }
        }
    }

    function RE() {
        if ("document" in re) {
            var t = Ce.bind(null, "dom"),
                e = ks(t, !0);
            re.document.addEventListener("click", e, !1), re.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
                var n = re[r] && re[r].prototype;
                !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (ve(n, "addEventListener", function(i) {
                    return function(a, s, o) {
                        if (a === "click" || a == "keypress") try {
                            var c = this,
                                l = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {},
                                d = l[a] = l[a] || {
                                    refCount: 0
                                };
                            if (!d.handler) {
                                var g = ks(t);
                                d.handler = g, i.call(this, a, g, o)
                            }
                            d.refCount += 1
                        } catch {}
                        return i.call(this, a, s, o)
                    }
                }), ve(n, "removeEventListener", function(i) {
                    return function(a, s, o) {
                        if (a === "click" || a == "keypress") try {
                            var c = this,
                                l = c.__sentry_instrumentation_handlers__ || {},
                                d = l[a];
                            d && (d.refCount -= 1, d.refCount <= 0 && (i.call(this, a, d.handler, o), d.handler = void 0, delete l[a]), Object.keys(l).length === 0 && delete c.__sentry_instrumentation_handlers__)
                        } catch {}
                        return i.call(this, a, s, o)
                    }
                }))
            })
        }
    }
    let Cn = null;

    function TE() {
        Cn = re.onerror, re.onerror = function(t, e, r, n, i) {
            return Ce("error", {
                column: n,
                error: i,
                line: r,
                msg: t,
                url: e
            }), Cn ? Cn.apply(this, arguments) : !1
        }
    }
    let Ln = null;

    function xE() {
        Ln = re.onunhandledrejection, re.onunhandledrejection = function(t) {
            return Ce("unhandledrejection", t), Ln ? Ln.apply(this, arguments) : !0
        }
    }

    function IE() {
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

    function It() {
        var t = ue(),
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        var r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function Wc(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function pt(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        var n = Wc(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function ai(t, e, r) {
        var n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            a = i[0] = i[0] || {};
        a.value || (a.value = e || ""), a.type || (a.type = r || "Error")
    }

    function fr(t, e) {
        var r = Wc(t);
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

    function Os(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            ta(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function lt(t, e = 1 / 0, r = 1 / 0) {
        try {
            return si("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function Yc(t, e = 3, r = 100 * 1024) {
        var n = lt(t, e);
        return PE(n) > r ? Yc(t, e - 1, r) : n
    }

    function si(t, e, r = 1 / 0, n = 1 / 0, i = IE()) {
        const [a, s] = i;
        if (e === null || ["number", "boolean", "string"].includes(typeof e) && !Zb(e)) return e;
        var o = $E(t, e);
        if (!o.startsWith("[object ")) return o;
        if (e.__sentry_skip_normalization__) return e;
        if (r === 0) return o.replace("object ", "");
        if (a(e)) return "[Circular ~]";
        var c = e;
        if (c && typeof c.toJSON == "function") try {
            var l = c.toJSON();
            return si("", l, r - 1, n, i)
        } catch {}
        var d = Array.isArray(e) ? [] : {};
        let g = 0;
        var y = Gc(e);
        for (var b in y)
            if (!!Object.prototype.hasOwnProperty.call(y, b)) {
                if (g >= n) {
                    d[b] = "[MaxProperties ~]";
                    break
                }
                var E = y[b];
                d[b] = si(b, E, r - 1, n, i), g += 1
            } return s(e), d
    }

    function $E(t, e) {
        try {
            return t === "domain" && e && typeof e == "object" && e._events ? "[Domain]" : t === "domainEmitter" ? "[DomainEmitter]" : typeof global < "u" && e === global ? "[Global]" : typeof window < "u" && e === window ? "[Window]" : typeof document < "u" && e === document ? "[Document]" : Qb(e) ? "[SyntheticEvent]" : typeof e == "number" && e !== e ? "[NaN]" : e === void 0 ? "[undefined]" : typeof e == "function" ? `[Function: ${rt(e)}]` : typeof e == "symbol" ? `[${String(e)}]` : typeof e == "bigint" ? `[BigInt: ${String(e)}]` : `[object ${Object.getPrototypeOf(e).constructor.name}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function AE(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function PE(t) {
        return AE(JSON.stringify(t))
    }
    var Ue;
    (function(t) {
        var e = 0;
        t[t.PENDING = e] = "PENDING";
        var r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        var n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(Ue || (Ue = {}));

    function _t(t) {
        return new Ee(e => {
            e(t)
        })
    }

    function oi(t) {
        return new Ee((e, r) => {
            r(t)
        })
    }
    class Ee {
        __init() {
            this._state = Ue.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(e) {
            Ee.prototype.__init.call(this), Ee.prototype.__init2.call(this), Ee.prototype.__init3.call(this), Ee.prototype.__init4.call(this), Ee.prototype.__init5.call(this), Ee.prototype.__init6.call(this);
            try {
                e(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(e, r) {
            return new Ee((n, i) => {
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
            return new Ee((r, n) => {
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
                this._setResult(Ue.RESOLVED, e)
            }
        }
        __init4() {
            this._reject = e => {
                this._setResult(Ue.REJECTED, e)
            }
        }
        __init5() {
            this._setResult = (e, r) => {
                if (this._state === Ue.PENDING) {
                    if (Qi(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state !== Ue.PENDING) {
                    var e = this._handlers.slice();
                    this._handlers = [], e.forEach(r => {
                        r[0] || (this._state === Ue.RESOLVED && r[1](this._value), this._state === Ue.REJECTED && r[2](this._value), r[0] = !0)
                    })
                }
            }
        }
    }

    function NE(t) {
        var e = [];

        function r() {
            return t === void 0 || e.length < t
        }

        function n(s) {
            return e.splice(e.indexOf(s), 1)[0]
        }

        function i(s) {
            if (!r()) return oi(new ye("Not adding Promise due to buffer limit reached."));
            var o = s();
            return e.indexOf(o) === -1 && e.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {})), o
        }

        function a(s) {
            return new Ee((o, c) => {
                let l = e.length;
                if (!l) return o(!0);
                var d = setTimeout(() => {
                    s && s > 0 && o(!1)
                }, s);
                e.forEach(g => {
                    _t(g).then(() => {
                        --l || (clearTimeout(d), o(!0))
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

    function Dn(t) {
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
    var CE = ["fatal", "error", "warning", "log", "info", "debug"];

    function LE(t) {
        return t === "warn" ? "warning" : CE.includes(t) ? t : "log"
    }
    var ci = {
        nowSeconds: () => Date.now() / 1e3
    };

    function DE() {
        const {
            performance: t
        } = ue();
        if (!(!t || !t.now)) {
            var e = Date.now() - t.now();
            return {
                now: () => t.now(),
                timeOrigin: e
            }
        }
    }

    function ME() {
        try {
            var t = zb(mu, "perf_hooks");
            return t.performance
        } catch {
            return
        }
    }
    var Mn = Ki() ? ME() : DE(),
        Rs = Mn === void 0 ? ci : {
            nowSeconds: () => (Mn.timeOrigin + Mn.now()) / 1e3
        },
        un = ci.nowSeconds.bind(ci),
        zc = Rs.nowSeconds.bind(Rs);
    (() => {
        const {
            performance: t
        } = ue();
        if (!(!t || !t.now)) {
            var e = 3600 * 1e3,
                r = t.now(),
                n = Date.now(),
                i = t.timeOrigin ? Math.abs(t.timeOrigin + r - n) : e,
                a = i < e,
                s = t.timing && t.timing.navigationStart,
                o = typeof s == "number",
                c = o ? Math.abs(s + r - n) : e,
                l = c < e;
            return a || l ? i <= c ? t.timeOrigin : s : n
        }
    })();

    function ln(t, e = []) {
        return [t, e]
    }

    function jE(t, e) {
        const [r, n] = t;
        return [r, [...n, e]]
    }

    function Ts(t, e) {
        var r = t[1];
        r.forEach(n => {
            var i = n[0].type;
            e(n, i)
        })
    }

    function ui(t, e) {
        var r = e || new TextEncoder;
        return r.encode(t)
    }

    function Jc(t, e) {
        const [r, n] = t;
        let i = JSON.stringify(r);

        function a(o) {
            typeof i == "string" ? i = typeof o == "string" ? i + o : [ui(i, e), o] : i.push(typeof o == "string" ? ui(o, e) : o)
        }
        for (var s of n) {
            const [o, c] = s;
            a(`
${JSON.stringify(o)}
`), a(typeof c == "string" || c instanceof Uint8Array ? c : JSON.stringify(c))
        }
        return typeof i == "string" ? i : UE(i)
    }

    function UE(t) {
        var e = t.reduce((a, s) => a + s.length, 0),
            r = new Uint8Array(e);
        let n = 0;
        for (var i of t) r.set(i, n), n += i.length;
        return r
    }

    function BE(t, e) {
        var r = typeof t.data == "string" ? ui(t.data, e) : t.data;
        return [na({
            type: "attachment",
            length: r.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), r]
    }
    var FE = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default"
    };

    function xs(t) {
        return FE[t]
    }

    function qE(t, e, r) {
        var n = [{
            type: "client_report"
        }, {
            timestamp: r || un(),
            discarded_events: t
        }];
        return ln(e ? {
            dsn: e
        } : {}, [n])
    }
    var GE = 60 * 1e3;

    function HE(t, e = Date.now()) {
        var r = parseInt(`${t}`, 10);
        if (!isNaN(r)) return r * 1e3;
        var n = Date.parse(`${t}`);
        return isNaN(n) ? GE : n - e
    }

    function WE(t, e) {
        return t[e] || t.all || 0
    }

    function YE(t, e, r = Date.now()) {
        return WE(t, e) > r
    }

    function zE(t, {
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
                const [g, y] = o.split(":", 2);
                var c = parseInt(g, 10),
                    l = (isNaN(c) ? 60 : c) * 1e3;
                if (!y) i.all = n + l;
                else
                    for (var d of y.split(";")) i[d] = n + l
            } else s ? i.all = n + HE(s, n) : e === 429 && (i.all = n + 60 * 1e3);
        return i
    }

    function JE(t) {
        return t[0]
    }

    function KE(t) {
        var e = zc(),
            r = {
                sid: It(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => XE(r)
            };
        return t && Ft(r, t), r
    }

    function Ft(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || zc(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : It()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            var r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function VE(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), Ft(t, r)
    }

    function XE(t) {
        return na({
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
    var Is = 100;
    class Qe {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            var r = new Qe;
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
            return this._user = e || {}, this._session && Ft(this._session, {
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
                return r instanceof Qe ? r : this
            }
            return e instanceof Qe ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : Bt(e) && (e = e, this._tags = {
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
            var n = typeof r == "number" ? Math.min(r, Is) : Is;
            if (n <= 0) return this;
            var i = {
                timestamp: un(),
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
            }, this._notifyEventProcessors([...Kc(), ...this._eventProcessors], e, r)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        _notifyEventProcessors(e, r, n, i = 0) {
            return new Ee((a, s) => {
                var o = e[i];
                if (r === null || typeof o != "function") a(r);
                else {
                    var c = o({
                        ...r
                    }, n);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && o.id && c === null && U.log(`Event processor "${o.id}" dropped event`), Qi(c) ? c.then(l => this._notifyEventProcessors(e, l, n, i + 1).then(a)).then(null, s) : this._notifyEventProcessors(e, c, n, i + 1).then(a).then(null, s)
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

    function Kc() {
        return Vi("globalEventProcessors", () => [])
    }

    function aa(t) {
        Kc().push(t)
    }
    var sa = 4,
        QE = 100;
    class br {
        __init() {
            this._stack = [{}]
        }
        constructor(e, r = new Qe, n = sa) {
            this._version = n, br.prototype.__init.call(this), this.getStackTop().scope = r, e && this.bindClient(e)
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            var r = this.getStackTop();
            r.client = e, e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            var e = Qe.clone(this.getScope());
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
            var n = this._lastEventId = r && r.event_id ? r.event_id : It(),
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
            var i = this._lastEventId = n && n.event_id ? n.event_id : It(),
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
            var n = r && r.event_id ? r.event_id : It();
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
                maxBreadcrumbs: s = QE
            } = i.getOptions && i.getOptions() || {};
            if (!(s <= 0)) {
                var o = un(),
                    c = {
                        timestamp: o,
                        ...e
                    },
                    l = a ? Fc(() => a(c, r)) : c;
                l !== null && n.addBreadcrumb(l, s)
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
            var r = $s(this);
            try {
                e(this)
            } finally {
                $s(r)
            }
        }
        getIntegration(e) {
            var r = this.getClient();
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
            var e = this.getStackTop(),
                r = e && e.scope,
                n = r && r.getSession();
            n && VE(n), this._sendSessionUpdate(), r && r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: a
            } = n && n.getOptions() || {};
            var s = ue();
            const {
                userAgent: o
            } = s.navigator || {};
            var c = KE({
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
                var l = r.getSession && r.getSession();
                l && l.status === "ok" && Ft(l, {
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
            var n = fn(),
                i = n.__SENTRY__;
            if (i && i.extensions && typeof i.extensions[e] == "function") return i.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function fn() {
        var t = ue();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, t
    }

    function $s(t) {
        var e = fn(),
            r = Je(e);
        return oa(e, t), r
    }

    function de() {
        var t = fn();
        return (!Vc(t) || Je(t).isOlderThan(sa)) && oa(t, new br), Ki() ? ZE(t) : Je(t)
    }

    function ZE(t) {
        try {
            var e = fn().__SENTRY__,
                r = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
            if (!r) return Je(t);
            if (!Vc(r) || Je(r).isOlderThan(sa)) {
                var n = Je(t).getStackTop();
                oa(r, new br(n.client, Qe.clone(n.scope)))
            }
            return Je(r)
        } catch {
            return Je(t)
        }
    }

    function Vc(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function Je(t) {
        return Vi("hub", () => new br, t)
    }

    function oa(t, e) {
        if (!t) return !1;
        var r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function ew(t, e) {
        return de().captureException(t, {
            captureContext: e
        })
    }

    function tw(t, e) {
        var r = typeof e == "string" ? e : void 0,
            n = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return de().captureMessage(t, r, n)
    }

    function Xc(t) {
        de().setTags(t)
    }

    function rw(t) {
        de().withScope(t)
    }
    var nw = "7";

    function iw(t) {
        var e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function aw(t) {
        return `${iw(t)}${t.projectId}/envelope/`
    }

    function sw(t, e) {
        return uE({
            sentry_key: t.publicKey,
            sentry_version: nw,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function Qc(t, e = {}) {
        var r = typeof e == "string" ? e : e.tunnel,
            n = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return r || `${aw(t)}?${sw(t,n)}`
    }

    function Zc(t) {
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

    function ow(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function cw(t, e, r, n) {
        var i = Zc(r),
            a = {
                sent_at: new Date().toISOString(),
                ...i && {
                    sdk: i
                },
                ...!!n && {
                    dsn: Zi(e)
                }
            },
            s = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t];
        return ln(a, [s])
    }

    function uw(t, e, r, n) {
        var i = Zc(r),
            a = t.type || "event";
        const {
            transactionSampling: s
        } = t.sdkProcessingMetadata || {}, {
            method: o,
            rate: c
        } = s || {};
        ow(t, r && r.sdk);
        var l = lw(t, i, n, e);
        delete t.sdkProcessingMetadata;
        var d = [{
            type: a,
            sample_rates: [{
                id: o,
                rate: c
            }]
        }, t];
        return ln(l, [d])
    }

    function lw(t, e, r, n) {
        var i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.baggage,
            a = i && JE(i);
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!r && {
                dsn: Zi(n)
            },
            ...t.type === "transaction" && a && {
                trace: na({
                    ...a
                })
            }
        }
    }
    var As = [];

    function Ps(t) {
        return t.reduce((e, r) => (e.every(n => r.name !== n.name) && e.push(r), e), [])
    }

    function fw(t) {
        var e = t.defaultIntegrations && [...t.defaultIntegrations] || [],
            r = t.integrations;
        let n = [...Ps(e)];
        Array.isArray(r) ? n = [...n.filter(s => r.every(o => o.name !== s.name)), ...Ps(r)] : typeof r == "function" && (n = r(n), n = Array.isArray(n) ? n : [n]);
        var i = n.map(s => s.name),
            a = "Debug";
        return i.indexOf(a) !== -1 && n.push(...n.splice(i.indexOf(a), 1)), n
    }

    function pw(t) {
        var e = {};
        return t.forEach(r => {
            e[r.name] = r, As.indexOf(r.name) === -1 && (r.setupOnce(aa, de), As.push(r.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Integration installed: ${r.name}`))
        }), e
    }
    var Ns = "Not capturing exception because it's already been captured.";
    class kt {
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
            if (kt.prototype.__init.call(this), kt.prototype.__init2.call(this), kt.prototype.__init3.call(this), kt.prototype.__init4.call(this), this._options = e, e.dsn) {
                this._dsn = sE(e.dsn);
                var r = Qc(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, r, n) {
            if (Os(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(Ns);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(a => this._captureEvent(a, r, n)).then(a => {
                i = a
            })), i
        }
        captureMessage(e, r, n, i) {
            let a = n && n.event_id;
            var s = Uc(e) ? this.eventFromMessage(String(e), r, n) : this.eventFromException(e, n);
            return this._process(s.then(o => this._captureEvent(o, n, i)).then(o => {
                a = o
            })), a
        }
        captureEvent(e, r, n) {
            if (r && r.originalException && Os(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(Ns);
                return
            }
            let i = r && r.event_id;
            return this._process(this._captureEvent(e, r, n).then(a => {
                i = a
            })), i
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Ft(e, {
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
            return r ? this._isClientDoneProcessing(e).then(n => r.flush(e).then(i => n && i)) : _t(!0)
        }
        close(e) {
            return this.flush(e).then(r => (this.getOptions().enabled = !1, r))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = pw(this._options.integrations), this._integrationsInitialized = !0)
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
        sendEvent(e, r = {}) {
            if (this._dsn) {
                let i = uw(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (var n of r.attachments || []) i = jE(i, BE(n, this._options.transportOptions && this._options.transportOptions.textEncoder));
                this._sendEnvelope(i)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                var r = cw(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(r)
            }
        }
        recordDroppedEvent(e, r) {
            if (this._options.sendClientReports) {
                var n = `${e}:${r}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
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
                l = c && e.errors === 0 || c && n;
            l && (Ft(e, {
                ...n && {
                    status: "crashed"
                },
                errors: e.errors || Number(i || n)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new Ee(r => {
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
                event_id: e.event_id || r.event_id || It(),
                timestamp: e.timestamp || un()
            };
            this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
            let o = n;
            r.captureContext && (o = Qe.clone(o).update(r.captureContext));
            let c = _t(s);
            if (o) {
                var l = [...r.attachments || [], ...o.getAttachments()];
                l.length && (r.attachments = l), c = o.applyToEvent(s, r)
            }
            return c.then(d => typeof i == "number" && i > 0 ? this._normalizeEvent(d, i, a) : d)
        }
        _normalizeEvent(e, r, n) {
            if (!e) return null;
            var i = {
                ...e,
                ...e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map(a => ({
                        ...a,
                        ...a.data && {
                            data: lt(a.data, r, n)
                        }
                    }))
                },
                ...e.user && {
                    user: lt(e.user, r, n)
                },
                ...e.contexts && {
                    contexts: lt(e.contexts, r, n)
                },
                ...e.extra && {
                    extra: lt(e.extra, r, n)
                }
            };
            return e.contexts && e.contexts.trace && i.contexts && (i.contexts.trace = e.contexts.trace, e.contexts.trace.data && (i.contexts.trace.data = lt(e.contexts.trace.data, r, n))), e.spans && (i.spans = e.spans.map(a => (a.data && (a.data = lt(a.data, r, n)), a))), i
        }
        _applyClientOptions(e) {
            var r = this.getOptions();
            const {
                environment: n,
                release: i,
                dist: a,
                maxValueLength: s = 250
            } = r;
            "environment" in e || (e.environment = "environment" in r ? n : "production"), e.release === void 0 && i !== void 0 && (e.release = i), e.dist === void 0 && a !== void 0 && (e.dist = a), e.message && (e.message = or(e.message, s));
            var o = e.exception && e.exception.values && e.exception.values[0];
            o && o.value && (o.value = or(o.value, s));
            var c = e.request;
            c && c.url && (c.url = or(c.url, s))
        }
        _applyIntegrationsMetadata(e) {
            var r = Object.keys(this._integrations);
            r.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...r])
        }
        _captureEvent(e, r = {}, n) {
            return this._processEvent(e, r, n).then(i => i.event_id, i => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    var a = i;
                    a.logLevel === "log" ? U.log(a.message) : U.warn(a)
                }
            })
        }
        _processEvent(e, r, n) {
            const {
                beforeSend: i,
                sampleRate: a
            } = this.getOptions();
            if (!this._isEnabled()) return oi(new ye("SDK not enabled, will not capture event.", "log"));
            var s = e.type === "transaction";
            return !s && typeof a == "number" && Math.random() > a ? (this.recordDroppedEvent("sample_rate", "error"), oi(new ye(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"))) : this._prepareEvent(e, r, n).then(o => {
                if (o === null) throw this.recordDroppedEvent("event_processor", e.type || "error"), new ye("An event processor returned null, will not send event.", "log");
                var c = r.data && r.data.__sentry__ === !0;
                if (c || s || !i) return o;
                var l = i(o, r);
                return dw(l)
            }).then(o => {
                if (o === null) throw this.recordDroppedEvent("before_send", e.type || "error"), new ye("`beforeSend` returned `null`, will not send event.", "log");
                var c = n && n.getSession();
                return !s && c && this._updateSessionFromEvent(c, o), this.sendEvent(o, r), o
            }).then(null, o => {
                throw o instanceof ye ? o : (this.captureException(o, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: o
                }), new ye(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${o}`))
            })
        }
        _process(e) {
            this._numProcessing += 1, e.then(r => (this._numProcessing -= 1, r), r => (this._numProcessing -= 1, r))
        }
        _sendEnvelope(e) {
            this._transport && this._dsn ? this._transport.send(e).then(null, r => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Error while sending event:", r)
            }) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Transport disabled")
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

    function dw(t) {
        var e = "`beforeSend` method has to return `null` or a valid event.";
        if (Qi(t)) return t.then(r => {
            if (!(Bt(r) || r === null)) throw new ye(e);
            return r
        }, r => {
            throw new ye(`beforeSend rejected with ${r}`)
        });
        if (!(Bt(t) || t === null)) throw new ye(e);
        return t
    }

    function hw(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? U.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        var r = de(),
            n = r.getScope();
        n && n.update(e.initialScope);
        var i = new t(e);
        r.bindClient(i)
    }
    var gw = 30;

    function eu(t, e, r = NE(t.bufferSize || gw)) {
        let n = {};
        var i = s => r.drain(s);

        function a(s) {
            var o = [];
            if (Ts(s, (g, y) => {
                    var b = xs(y);
                    YE(n, b) ? t.recordDroppedEvent("ratelimit_backoff", b) : o.push(g)
                }), o.length === 0) return _t();
            var c = ln(s[0], o),
                l = g => {
                    Ts(c, (y, b) => {
                        t.recordDroppedEvent(g, xs(b))
                    })
                },
                d = () => e({
                    body: Jc(c, t.textEncoder)
                }).then(g => {
                    g.statusCode !== void 0 && (g.statusCode < 200 || g.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Sentry responded with status code ${g.statusCode} to sent event.`), n = zE(n, g)
                }, g => {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Failed while sending event:", g), l("network_error")
                });
            return r.add(d).then(g => g, g => {
                if (g instanceof ye) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error("Skipped sending event due to full buffer"), l("queue_overflow"), _t();
                throw g
            })
        }
        return {
            send: a,
            flush: i
        }
    }
    var Cs = "7.11.1";
    let Ls;
    class pr {
        constructor() {
            pr.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "FunctionToString"
        }
        __init() {
            this.name = pr.id
        }
        setupOnce() {
            Ls = Function.prototype.toString, Function.prototype.toString = function(...e) {
                var r = ra(this) || this;
                return Ls.apply(r, e)
            }
        }
    }
    pr.__initStatic();
    var _w = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    class $t {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = $t.id
        }
        constructor(e = {}) {
            this._options = e, $t.prototype.__init.call(this)
        }
        setupOnce(e, r) {
            var n = i => {
                var a = r();
                if (a) {
                    var s = a.getIntegration($t);
                    if (s) {
                        var o = a.getClient(),
                            c = o ? o.getOptions() : {},
                            l = yw(s._options, c);
                        return vw(i, l) ? null : i
                    }
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    $t.__initStatic();

    function yw(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ..._w],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function vw(t, e) {
        return e.ignoreInternal && Sw(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being internal Sentry Error.
Event: ${pt(t)}`), !0) : mw(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${pt(t)}`), !0) : bw(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${pt(t)}.
Url: ${Wr(t)}`), !0) : Ew(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${pt(t)}.
Url: ${Wr(t)}`), !0)
    }

    function mw(t, e) {
        return !e || !e.length ? !1 : ww(t).some(r => e.some(n => ea(r, n)))
    }

    function bw(t, e) {
        if (!e || !e.length) return !1;
        var r = Wr(t);
        return r ? e.some(n => ea(r, n)) : !1
    }

    function Ew(t, e) {
        if (!e || !e.length) return !0;
        var r = Wr(t);
        return r ? e.some(n => ea(r, n)) : !0
    }

    function ww(t) {
        if (t.message) return [t.message];
        if (t.exception) try {
            const {
                type: e = "",
                value: r = ""
            } = t.exception.values && t.exception.values[0] || {};
            return [`${r}`, `${e}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Cannot extract message for event ${pt(t)}`), []
        }
        return []
    }

    function Sw(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function kw(t = []) {
        for (let r = t.length - 1; r >= 0; r--) {
            var e = t[r];
            if (e && e.filename !== "<anonymous>" && e.filename !== "[native code]") return e.filename || null
        }
        return null
    }

    function Wr(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? kw(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(`Cannot extract url for event ${pt(t)}`), null
        }
    }

    function tu(t, e) {
        var r = ca(t, e),
            n = {
                type: e && e.name,
                value: xw(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function Ow(t, e, r, n) {
        var i = {
            exception: {
                values: [{
                    type: Xi(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${lE(e)}`
                }]
            },
            extra: {
                __serialized__: Yc(e)
            }
        };
        if (r) {
            var a = ca(t, r);
            a.length && (i.exception.values[0].stacktrace = {
                frames: a
            })
        }
        return i
    }

    function jn(t, e) {
        return {
            exception: {
                values: [tu(t, e)]
            }
        }
    }

    function ca(t, e) {
        var r = e.stacktrace || e.stack || "",
            n = Tw(e);
        try {
            return t(r, n)
        } catch {}
        return []
    }
    var Rw = /Minified React error #\d+;/i;

    function Tw(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (Rw.test(t.message)) return 1
        }
        return 0
    }

    function xw(t) {
        var e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function Iw(t, e, r, n) {
        var i = r && r.syntheticException || void 0,
            a = ua(t, e, i, n);
        return fr(a), a.level = "error", r && r.event_id && (a.event_id = r.event_id), _t(a)
    }

    function $w(t, e, r = "info", n, i) {
        var a = n && n.syntheticException || void 0,
            s = li(t, e, a, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), _t(s)
    }

    function ua(t, e, r, n, i) {
        let a;
        if (jc(e) && e.error) {
            var s = e;
            return jn(t, s.error)
        }
        if (vs(e) || Kb(e)) {
            var o = e;
            if ("stack" in e) a = jn(t, e);
            else {
                var c = o.name || (vs(o) ? "DOMError" : "DOMException"),
                    l = o.message ? `${c}: ${o.message}` : c;
                a = li(t, l, r, n), ai(a, l)
            }
            return "code" in o && (a.tags = {
                ...a.tags,
                "DOMException.code": `${o.code}`
            }), a
        }
        if (Mc(e)) return jn(t, e);
        if (Bt(e) || Xi(e)) {
            var d = e;
            return a = Ow(t, d, r, i), fr(a, {
                synthetic: !0
            }), a
        }
        return a = li(t, e, r, n), ai(a, `${e}`, void 0), fr(a, {
            synthetic: !0
        }), a
    }

    function li(t, e, r, n) {
        var i = {
            message: e
        };
        if (n && r) {
            var a = ca(t, r);
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
    var ru = "Breadcrumbs";
    class dr {
        static __initStatic() {
            this.id = ru
        }
        __init() {
            this.name = dr.id
        }
        constructor(e) {
            dr.prototype.__init.call(this), this.options = {
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
            this.options.console && ze("console", Pw), this.options.dom && ze("dom", Aw(this.options.dom)), this.options.xhr && ze("xhr", Nw), this.options.fetch && ze("fetch", Cw), this.options.history && ze("history", Lw)
        }
    }
    dr.__initStatic();

    function Aw(t) {
        function e(r) {
            let n, i = typeof t == "object" ? t.serializeAttribute : void 0;
            typeof i == "string" && (i = [i]);
            try {
                n = r.event.target ? ri(r.event.target, i) : ri(r.event, i)
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && de().addBreadcrumb({
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

    function Pw(t) {
        var e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: LE(t.level),
            message: bs(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${bs(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        de().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function Nw(t) {
        if (t.endTimestamp) {
            if (t.xhr.__sentry_own_request__) return;
            const {
                method: e,
                url: r,
                status_code: n,
                body: i
            } = t.xhr.__sentry_xhr__ || {};
            de().addBreadcrumb({
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

    function Cw(t) {
        !t.endTimestamp || t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST" || (t.error ? de().addBreadcrumb({
            category: "fetch",
            data: t.fetchData,
            level: "error",
            type: "http"
        }, {
            data: t.error,
            input: t.args
        }) : de().addBreadcrumb({
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

    function Lw(t) {
        var e = ue();
        let r = t.from,
            n = t.to;
        var i = Dn(e.location.href);
        let a = Dn(r);
        var s = Dn(n);
        a.path || (a = i), i.protocol === s.protocol && i.host === s.host && (n = s.relative), i.protocol === a.protocol && i.host === a.host && (r = a.relative), de().addBreadcrumb({
            category: "navigation",
            data: {
                from: r,
                to: n
            }
        })
    }
    var Ne = ue();
    let xr;

    function nu() {
        if (xr) return xr;
        if (ii(Ne.fetch)) return xr = Ne.fetch.bind(Ne);
        var t = Ne.document;
        let e = Ne.fetch;
        if (t && typeof t.createElement == "function") try {
            var r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r);
            var n = r.contentWindow;
            n && n.fetch && (e = n.fetch), t.head.removeChild(r)
        } catch (i) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
        }
        return xr = e.bind(Ne)
    }

    function Dw(t, e) {
        var r = Object.prototype.toString.call(Ne && Ne.navigator) === "[object Navigator]",
            n = r && typeof Ne.navigator.sendBeacon == "function";
        if (n) {
            var i = Ne.navigator.sendBeacon.bind(Ne.navigator);
            i(t, e)
        } else if (ia()) {
            var a = nu();
            a(t, {
                body: e,
                method: "POST",
                credentials: "omit",
                keepalive: !0
            }).then(null, s => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(s)
            })
        }
    }
    var Un = ue();
    class Mw extends kt {
        constructor(e) {
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: Cs
                }],
                version: Cs
            }, super(e), e.sendClientReports && Un.document && Un.document.addEventListener("visibilitychange", () => {
                Un.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return Iw(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", n) {
            return $w(this._options.stackParser, e, r, n, this._options.attachStacktrace)
        }
        sendEvent(e, r) {
            var n = this.getIntegrationById(ru);
            n && n.options && n.options.sentry && de().addBreadcrumb({
                category: `sentry.${e.type==="transaction"?"transaction":"event"}`,
                event_id: e.event_id,
                level: e.level,
                message: pt(e)
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
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log("Sending outcomes:", e);
            var r = Qc(this._dsn, this._options),
                n = qE(e, this._options.tunnel && Zi(this._dsn));
            try {
                Dw(r, Jc(n))
            } catch (i) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.error(i)
            }
        }
    }

    function jw(t, e = nu()) {
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
        return eu(t, r)
    }
    var Uw = 4;

    function Bw(t) {
        function e(r) {
            return new Ee((n, i) => {
                var a = new XMLHttpRequest;
                a.onerror = i, a.onreadystatechange = () => {
                    a.readyState === Uw && n({
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
        return eu(t, e)
    }
    var pn = "?",
        Fw = 30,
        qw = 40,
        Gw = 50;

    function la(t, e, r, n) {
        var i = {
            filename: t,
            function: e,
            in_app: !0
        };
        return r !== void 0 && (i.lineno = r), n !== void 0 && (i.colno = n), i
    }
    var Hw = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Ww = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Yw = t => {
            var e = Hw.exec(t);
            if (e) {
                var r = e[2] && e[2].indexOf("eval") === 0;
                if (r) {
                    var n = Ww.exec(e[2]);
                    n && (e[2] = n[1], e[3] = n[2], e[4] = n[3])
                }
                const [i, a] = iu(e[1] || pn, e[2]);
                return la(a, i, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        zw = [Fw, Yw],
        Jw = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Kw = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Vw = t => {
            var e = Jw.exec(t);
            if (e) {
                var r = e[3] && e[3].indexOf(" > eval") > -1;
                if (r) {
                    var n = Kw.exec(e[3]);
                    n && (e[1] = e[1] || "eval", e[3] = n[1], e[4] = n[2], e[5] = "")
                }
                let i = e[3],
                    a = e[1] || pn;
                return [a, i] = iu(a, i), la(i, a, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        Xw = [Gw, Vw],
        Qw = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Zw = t => {
            var e = Qw.exec(t);
            return e ? la(e[2], e[1] || pn, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        eS = [qw, Zw],
        tS = [zw, Xw, eS],
        rS = Hc(...tS),
        iu = (t, e) => {
            var r = t.indexOf("safari-extension") !== -1,
                n = t.indexOf("safari-web-extension") !== -1;
            return r || n ? [t.indexOf("@") !== -1 ? t.split("@")[0] : pn, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
    let fi = 0;

    function au() {
        return fi > 0
    }

    function nS() {
        fi += 1, setTimeout(() => {
            fi -= 1
        })
    }

    function qt(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            var n = t.__sentry_wrapped__;
            if (n) return n;
            if (ra(t)) return t
        } catch {
            return t
        }
        var i = function() {
            var o = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                var c = o.map(l => qt(l, e));
                return t.apply(this, c)
            } catch (l) {
                throw nS(), rw(d => {
                    d.addEventProcessor(g => (e.mechanism && (ai(g, void 0, void 0), fr(g, e.mechanism)), g.extra = {
                        ...g.extra,
                        arguments: o
                    }, g)), ew(l)
                }), l
            }
        };
        try {
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a])
        } catch {}
        qc(i, t), ta(t, "__sentry_wrapped__", i);
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
    class Ze {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        __init() {
            this.name = Ze.id
        }
        __init2() {
            this._installFunc = {
                onerror: iS,
                onunhandledrejection: aS
            }
        }
        constructor(e) {
            Ze.prototype.__init.call(this), Ze.prototype.__init2.call(this), this._options = {
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
                n && e[r] && (cS(r), n(), this._installFunc[r] = void 0)
            }
        }
    }
    Ze.__initStatic();

    function iS() {
        ze("error", t => {
            const [e, r, n] = cu();
            if (!e.getIntegration(Ze)) return;
            const {
                msg: i,
                url: a,
                line: s,
                column: o,
                error: c
            } = t;
            if (!(au() || c && c.__sentry_own_request__)) {
                var l = c === void 0 && Ut(i) ? oS(i, a, s, o) : su(ua(r, c || i, void 0, n, !1), a, s, o);
                l.level = "error", ou(e, c, l, "onerror")
            }
        })
    }

    function aS() {
        ze("unhandledrejection", t => {
            const [e, r, n] = cu();
            if (!e.getIntegration(Ze)) return;
            let i = t;
            try {
                "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
            } catch {}
            if (au() || i && i.__sentry_own_request__) return !0;
            var a = Uc(i) ? sS(i) : ua(r, i, void 0, n, !0);
            a.level = "error", ou(e, i, a, "onunhandledrejection")
        })
    }

    function sS(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function oS(t, e, r, n) {
        var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let a = jc(t) ? t.message : t,
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
        return su(c, e, r, n)
    }

    function su(t, e, r, n) {
        var i = t.exception = t.exception || {},
            a = i.values = i.values || [],
            s = a[0] = a[0] || {},
            o = s.stacktrace = s.stacktrace || {},
            c = o.frames = o.frames || [],
            l = isNaN(parseInt(n, 10)) ? void 0 : n,
            d = isNaN(parseInt(r, 10)) ? void 0 : r,
            g = Ut(e) && e.length > 0 ? e : tE();
        return c.length === 0 && c.push({
            colno: l,
            filename: g,
            function: "?",
            in_app: !0,
            lineno: d
        }), t
    }

    function cS(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.log(`Global Handler attached: ${t}`)
    }

    function ou(t, e, r, n) {
        fr(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function cu() {
        var t = de(),
            e = t.getClient(),
            r = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, r.stackParser, r.attachStacktrace]
    }
    var uS = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class hr {
        static __initStatic() {
            this.id = "TryCatch"
        }
        __init() {
            this.name = hr.id
        }
        constructor(e) {
            hr.prototype.__init.call(this), this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            var e = ue();
            this._options.setTimeout && ve(e, "setTimeout", Ds), this._options.setInterval && ve(e, "setInterval", Ds), this._options.requestAnimationFrame && ve(e, "requestAnimationFrame", lS), this._options.XMLHttpRequest && "XMLHttpRequest" in e && ve(XMLHttpRequest.prototype, "send", fS);
            var r = this._options.eventTarget;
            if (r) {
                var n = Array.isArray(r) ? r : uS;
                n.forEach(pS)
            }
        }
    }
    hr.__initStatic();

    function Ds(t) {
        return function(...e) {
            var r = e[0];
            return e[0] = qt(r, {
                mechanism: {
                    data: {
                        function: rt(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function lS(t) {
        return function(e) {
            return t.apply(this, [qt(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: rt(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }

    function fS(t) {
        return function(...e) {
            var r = this,
                n = ["onload", "onerror", "onprogress", "onreadystatechange"];
            return n.forEach(i => {
                i in r && typeof r[i] == "function" && ve(r, i, function(a) {
                    var s = {
                            mechanism: {
                                data: {
                                    function: i,
                                    handler: rt(a)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        },
                        o = ra(a);
                    return o && (s.mechanism.data.handler = rt(o)), qt(a, s)
                })
            }), t.apply(this, e)
        }
    }

    function pS(t) {
        var e = ue(),
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (ve(r, "addEventListener", function(n) {
            return function(i, a, s) {
                try {
                    typeof a.handleEvent == "function" && (a.handleEvent = qt(a.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: rt(a),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return n.apply(this, [i, qt(a, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: rt(a),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), s])
            }
        }), ve(r, "removeEventListener", function(n) {
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
    var dS = "cause",
        hS = 5;
    class At {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = At.id
        }
        constructor(e = {}) {
            At.prototype.__init.call(this), this._key = e.key || dS, this._limit = e.limit || hS
        }
        setupOnce() {
            var e = de().getClient();
            !e || aa((r, n) => {
                var i = de().getIntegration(At);
                return i ? gS(e.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    At.__initStatic();

    function gS(t, e, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !st(i.originalException, Error)) return n;
        var a = uu(t, r, i.originalException, e);
        return n.exception.values = [...a, ...n.exception.values], n
    }

    function uu(t, e, r, n, i = []) {
        if (!st(r[n], Error) || i.length + 1 >= e) return i;
        var a = tu(t, r[n]);
        return uu(t, e, r[n], n, [a, ...i])
    }
    var ut = ue();
    class Pt {
        constructor() {
            Pt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "HttpContext"
        }
        __init() {
            this.name = Pt.id
        }
        setupOnce() {
            aa(e => {
                if (de().getIntegration(Pt)) {
                    if (!ut.navigator && !ut.location && !ut.document) return e;
                    var r = e.request && e.request.url || ut.location && ut.location.href;
                    const {
                        referrer: a
                    } = ut.document || {}, {
                        userAgent: s
                    } = ut.navigator || {};
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
    Pt.__initStatic();
    class Nt {
        constructor() {
            Nt.prototype.__init.call(this)
        }
        static __initStatic() {
            this.id = "Dedupe"
        }
        __init() {
            this.name = Nt.id
        }
        setupOnce(e, r) {
            var n = i => {
                var a = r().getIntegration(Nt);
                if (a) {
                    try {
                        if (_S(i, a._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Event dropped due to being a duplicate of previously captured event."), null
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
    Nt.__initStatic();

    function _S(t, e) {
        return e ? !!(yS(t, e) || vS(t, e)) : !1
    }

    function yS(t, e) {
        var r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !fu(t, e) || !lu(t, e))
    }

    function vS(t, e) {
        var r = Ms(e),
            n = Ms(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !fu(t, e) || !lu(t, e))
    }

    function lu(t, e) {
        let r = js(t),
            n = js(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let s = 0; s < n.length; s++) {
            var i = n[s],
                a = r[s];
            if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
        }
        return !0
    }

    function fu(t, e) {
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

    function Ms(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function js(t) {
        var e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    var mS = [new $t, new pr, new hr, new dr, new Ze, new At, new Nt, new Pt];

    function bS(t = {}) {
        if (t.defaultIntegrations === void 0 && (t.defaultIntegrations = mS), t.release === void 0) {
            var e = ue();
            e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
        }
        t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        var r = {
            ...t,
            stackParser: pE(t.stackParser || rS),
            integrations: fw(t),
            transport: t.transport || (ia() ? jw : Bw)
        };
        hw(Mw, r), t.autoSessionTracking && ES()
    }

    function Us(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function ES() {
        var t = ue(),
            e = t.document;
        if (typeof e > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && U.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        var r = de();
        !r.captureSession || (Us(r), ze("history", ({
            from: n,
            to: i
        }) => {
            n === void 0 || n === i || Us(de())
        }))
    }
    const wS = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        SS = {
            RETRY: wS
        },
        Bs = {
            en: SS
        };
    class pu {
        constructor(e) {
            Z(this, "manifest");
            Z(this, "registered", {});
            Z(this, "register", e => {
                this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
            });
            Z(this, "load", async e => {
                var o, c;
                document.querySelectorAll("[data-tv-prefetch]").forEach(l => l.remove());
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
                if ($r("[loader] load success", {
                        app: e.app,
                        appVersion: (o = a.version) != null ? o : i.version,
                        loaderVersion: window.tv.manifest.loader.version,
                        branch: n
                    }), !e.autoMount) return;
                const s = e;
                s.version = (c = a.version) != null ? c : i.version, this.mount(s)
            });
            Z(this, "connect", e => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(e)
            });
            Z(this, "mount", e => {
                var s, o, c, l;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const d = this.registered.info(e);
                    Xc({
                        branch: d.branch,
                        "app.tag": d.tag,
                        "app.type": d.type,
                        "app.version": d.version,
                        "app.wrapper": d.wrapper
                    }), ao.pageView(d.tag)
                }
                jr.setup(e.app, (c = (s = e.room) == null ? void 0 : s.code) != null ? c : (o = e.client) == null ? void 0 : o.code);
                const n = document.querySelectorAll("[data-tv-style]"),
                    a = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(d => {
                        const g = document.createElement("link");
                        return g.rel = "stylesheet", g.href = d.href, g.setAttribute("data-tv-style", ""), g
                    });
                document.head.append(...a), n.forEach(d => d.remove()), this.registered.unmount = (l = this.registered.mount(e)) != null ? l : void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            Z(this, "debugLoad", async (e, r) => {
                throw new Error("[Loader] Debug controllers are not avaialble in production builds")
            });
            this.manifest = e
        }
        getBranchName(e) {
            var a, s, o, c, l;
            const r = (s = (a = e.match) == null ? void 0 : a.params) == null ? void 0 : s.branch,
                n = jr.get("preference:branch"),
                i = this.manifest.branches;
            if (r) return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
            if (e.branch) return e.branch;
            if ((o = i["** hmr **"]) != null && o.bundles[e.app]) return "** hmr **";
            if (n && ((c = i[n]) == null ? void 0 : c.bundles[e.app])) return n;
            if ((l = i["** dist **"]) != null && l.bundles[e.app]) return "** dist **";
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
                i = (a = Bs[n]) != null ? a : Bs.en;
            e.classList.add("error"), r.textContent = i.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    }
    const kS = [{
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
        OS = t => kS.find(e => e.tag === t);
    class Fs extends pu {
        constructor() {
            super(...arguments);
            Z(this, "debugLoad", async (r, n) => {
                const i = this.getBranchName({
                        app: n.data.app,
                        match: n
                    }),
                    a = await this.fetchJson(r, i, n.data.app, n.data.file),
                    s = new Hb(a),
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
                const o = (a = OS(r)) == null ? void 0 : a.directory;
                if (!o) throw new Error(`No app found with tag ${r}`);
                return `/@fs/${window.tv.manifest.root}}/apps/${o}/src/json/${n}.json`
            }
            const i = (s = ys(r)) == null ? void 0 : s.directory;
            if (!i) throw new Error(`No game found with tag ${r}`);
            return `/@fs/${window.tv.manifest.root}/games/${i}/src/json/${n}.json`
        }
        getBundlePath(r, n, i) {
            var o;
            if (n[0] === "@") return `${r}/${n}/json/${i}.json`;
            const a = (o = ys(n)) == null ? void 0 : o.directory;
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
    const qs = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        RS = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        TS = t => {
            bS({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: RS,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === qs.EcastEntityNotFound) return tw("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === qs.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(e, r);
                        n && (e.contexts = e.contexts || {}, e.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return e
                }
            }), Xc({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    var xS = /([:*])(\w+)/g,
        IS = "([^/]+)",
        $S = /\*/g,
        AS = "?(?:.*)",
        PS = /\/\?/g,
        NS = "/?([^/]+|)",
        CS = "(?:/^|^)",
        LS = "";

    function du(t) {
        return t === void 0 && (t = "/"), pa() ? location.pathname + location.search + location.hash : t
    }

    function ae(t) {
        return t.replace(/\/+$/, "").replace(/^\/+/, "")
    }

    function Yr(t) {
        return typeof t == "string"
    }

    function DS(t) {
        return typeof t == "function"
    }

    function zr(t) {
        return t && t.indexOf("#") >= 0 && t.split("#").pop() || ""
    }

    function MS(t, e) {
        return e.length === 0 || !t ? null : t.slice(1, t.length).reduce(function(r, n, i) {
            return r === null && (r = {}), r[e[i]] = decodeURIComponent(n), r
        }, null)
    }

    function Jr(t) {
        var e = ae(t).split(/\?(.*)?$/);
        return [ae(e[0]), e.slice(1).join("")]
    }

    function fa(t) {
        for (var e = {}, r = t.split("&"), n = 0; n < r.length; n++) {
            var i = r[n].split("=");
            if (i[0] !== "") {
                var a = decodeURIComponent(i[0]);
                e[a] ? (Array.isArray(e[a]) || (e[a] = [e[a]]), e[a].push(decodeURIComponent(i[1] || ""))) : e[a] = decodeURIComponent(i[1] || "")
            }
        }
        return e
    }

    function hu(t, e) {
        var r = Jr(ae(t.currentLocationPath)),
            n = r[0],
            i = r[1],
            a = i === "" ? null : fa(i),
            s = [],
            o;
        if (Yr(e.path)) {
            if (o = CS + ae(e.path).replace(xS, function(g, y, b) {
                    return s.push(b), IS
                }).replace($S, AS).replace(PS, NS) + "$", ae(e.path) === "" && ae(n) === "") return {
                url: n,
                queryString: i,
                hashString: zr(t.to),
                route: e,
                data: null,
                params: a
            }
        } else o = e.path;
        var c = new RegExp(o, LS),
            l = n.match(c);
        if (l) {
            var d = Yr(e.path) ? MS(l, s) : l.groups ? l.groups : l.slice(1);
            return {
                url: ae(n.replace(new RegExp("^" + t.instance.root), "")),
                queryString: i,
                hashString: zr(t.to),
                route: e,
                data: d,
                params: a
            }
        }
        return !1
    }

    function gu() {
        return !!(typeof window < "u" && window.history && window.history.pushState)
    }

    function vt(t, e) {
        return typeof t[e] > "u" || t[e] === !0
    }

    function jS(t) {
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

    function pa() {
        return typeof window < "u"
    }

    function US(t, e) {
        return t === void 0 && (t = []), e === void 0 && (e = {}), t.filter(function(r) {
            return r
        }).forEach(function(r) {
            ["before", "after", "already", "leave"].forEach(function(n) {
                r[n] && (e[n] || (e[n] = []), e[n].push(r[n]))
            })
        }), e
    }

    function Me(t, e, r) {
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
    Me.if = function(t, e, r) {
        return Array.isArray(e) || (e = [e]), Array.isArray(r) || (r = [r]), [t, e, r]
    };

    function Gs(t, e) {
        typeof t.currentLocationPath > "u" && (t.currentLocationPath = t.to = du(t.instance.root)), t.currentLocationPath = t.instance._checkForAHash(t.currentLocationPath), e()
    }

    function Bn(t, e) {
        for (var r = 0; r < t.instance.routes.length; r++) {
            var n = t.instance.routes[r],
                i = hu(t, n);
            if (i && (t.matches || (t.matches = []), t.matches.push(i), t.resolveOptions.strategy === "ONE")) {
                e();
                return
            }
        }
        e()
    }

    function BS(t, e) {
        t.navigateOptions && (typeof t.navigateOptions.shouldResolve < "u" && console.warn('"shouldResolve" is deprecated. Please check the documentation.'), typeof t.navigateOptions.silent < "u" && console.warn('"silent" is deprecated. Please check the documentation.')), e()
    }

    function FS(t, e) {
        t.navigateOptions.force === !0 ? (t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]), e(!1)) : e()
    }
    var Hs = pa(),
        qS = gu();

    function GS(t, e) {
        if (vt(t.navigateOptions, "updateBrowserURL")) {
            var r = ("/" + t.to).replace(/\/\//g, "/"),
                n = Hs && t.resolveOptions && t.resolveOptions.hash === !0;
            qS ? (history[t.navigateOptions.historyAPIMethod || "pushState"](t.navigateOptions.stateObj || {}, t.navigateOptions.title || "", n ? "#" + r : r), location && location.hash && (t.instance.__freezeListening = !0, setTimeout(function() {
                if (!n) {
                    var i = location.hash;
                    location.hash = "", location.hash = i
                }
                t.instance.__freezeListening = !1
            }, 1))) : Hs && (window.location.href = t.to)
        }
        e()
    }

    function _u(t, e) {
        var r = t.instance;
        if (!r.lastResolved()) {
            e();
            return
        }
        Me(r.lastResolved().map(function(n) {
            return function(i, a) {
                if (!n.route.hooks || !n.route.hooks.leave) {
                    a();
                    return
                }
                var s = !1,
                    o = t.instance.matchLocation(n.route.path, t.currentLocationPath, !1);
                if (n.route.path !== "*") s = !o;
                else {
                    var c = t.matches ? t.matches.find(function(l) {
                        return n.route.path === l.route.path
                    }) : !1;
                    s = !c
                }
                if (vt(t.navigateOptions, "callHooks") && s) {
                    Me(n.route.hooks.leave.map(function(l) {
                        return function(d, g) {
                            return l(function(y) {
                                y === !1 ? t.instance.__markAsClean(t) : g()
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

    function HS(t, e) {
        t.match.route.hooks && t.match.route.hooks.before && vt(t.navigateOptions, "callHooks") ? Me(t.match.route.hooks.before.map(function(r) {
            return function(i, a) {
                return r(function(s) {
                    s === !1 ? t.instance.__markAsClean(t) : a()
                }, t.match)
            }
        }).concat([function() {
            return e()
        }])) : e()
    }

    function WS(t, e) {
        vt(t.navigateOptions, "callHandler") && t.match.route.handler(t.match), t.instance.updatePageLinks(), e()
    }

    function YS(t, e) {
        t.match.route.hooks && t.match.route.hooks.after && vt(t.navigateOptions, "callHooks") && t.match.route.hooks.after.forEach(function(r) {
            return r(t.match)
        }), e()
    }

    function zS(t, e) {
        var r = t.instance.lastResolved();
        if (r && r[0] && r[0].route === t.match.route && r[0].url === t.match.url && r[0].queryString === t.match.queryString) {
            r.forEach(function(n) {
                n.route.hooks && n.route.hooks.already && vt(t.navigateOptions, "callHooks") && n.route.hooks.already.forEach(function(i) {
                    return i(t.match)
                })
            }), e(!1);
            return
        }
        e()
    }

    function JS(t, e) {
        var r = t.instance._notFoundRoute;
        if (r) {
            t.notFoundHandled = !0;
            var n = Jr(t.currentLocationPath),
                i = n[0],
                a = n[1],
                s = zr(t.to);
            r.path = ae(i);
            var o = {
                url: r.path,
                queryString: a,
                hashString: s,
                data: null,
                route: r,
                params: a !== "" ? fa(a) : null
            };
            t.matches = [o], t.match = o
        }
        e()
    }

    function KS(t, e) {
        (!t.resolveOptions || t.resolveOptions.noMatchWarning === !1 || typeof t.resolveOptions.noMatchWarning > "u") && console.warn('Navigo: "' + t.currentLocationPath + `" didn't match any of the registered routes.`), e()
    }

    function VS(t, e) {
        t.instance._setCurrent(null), e()
    }

    function yu(t, e) {
        vt(t.navigateOptions, "updateState") && t.instance._setCurrent(t.matches), e()
    }
    var vu = [zS, HS, WS, YS],
        Ws = [_u, JS, Me.if(function(t) {
            var e = t.notFoundHandled;
            return e
        }, vu.concat([yu]), [KS, VS])];

    function pi() {
        return pi = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, pi.apply(this, arguments)
    }

    function Ys(t, e) {
        var r = 0;

        function n() {
            if (r === t.matches.length) {
                yu(t, e);
                return
            }
            Me(vu, pi({}, t, {
                match: t.matches[r]
            }), function() {
                r += 1, n()
            })
        }
        _u(t, n)
    }

    function Fn(t) {
        t.instance.__markAsClean(t)
    }

    function di() {
        return di = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, di.apply(this, arguments)
    }
    var zs = "[data-navigo]";

    function XS(t, e) {
        var r = e || {
                strategy: "ONE",
                hash: !1,
                noMatchWarning: !1,
                linksSelector: zs
            },
            n = this,
            i = "/",
            a = null,
            s = [],
            o = !1,
            c, l = gu(),
            d = pa();
        t ? i = ae(t) : console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');

        function g(w) {
            return w.indexOf("#") >= 0 && (r.hash === !0 ? w = w.split("#")[1] || "/" : w = w.split("#")[0]), w
        }

        function y(w) {
            return ae(i + "/" + ae(w))
        }

        function b(w, T, P, H) {
            return w = Yr(w) ? y(w) : w, {
                name: H || ae(String(w)),
                path: w,
                handler: T,
                hooks: US(P)
            }
        }

        function E(w, T, P) {
            var H = this;
            return typeof w == "object" && !(w instanceof RegExp) ? (Object.keys(w).forEach(function(W) {
                if (typeof w[W] == "function") H.on(W, w[W]);
                else {
                    var xe = w[W],
                        ot = xe.uses,
                        Se = xe.as,
                        ct = xe.hooks;
                    s.push(b(W, ot, [c, ct], Se))
                }
            }), this) : (typeof w == "function" && (P = T, T = w, w = i), s.push(b(w, T, [c, P])), this)
        }

        function I(w, T) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.resolve(w, T)
                });
                return
            } else n.__dirty = !0;
            w = w ? ae(i) + "/" + ae(w) : void 0;
            var P = {
                instance: n,
                to: w,
                currentLocationPath: w,
                navigateOptions: {},
                resolveOptions: di({}, r, T)
            };
            return Me([Gs, Bn, Me.if(function(H) {
                var W = H.matches;
                return W && W.length > 0
            }, Ys, Ws)], P, Fn), P.matches ? P.matches : !1
        }

        function A(w, T) {
            if (n.__dirty) {
                n.__waiting.push(function() {
                    return n.navigate(w, T)
                });
                return
            } else n.__dirty = !0;
            w = ae(i) + "/" + ae(w);
            var P = {
                instance: n,
                to: w,
                navigateOptions: T || {},
                resolveOptions: T && T.resolveOptions ? T.resolveOptions : r,
                currentLocationPath: g(w)
            };
            Me([BS, FS, Bn, Me.if(function(H) {
                var W = H.matches;
                return W && W.length > 0
            }, Ys, Ws), GS, Fn], P, Fn)
        }

        function $(w, T, P) {
            var H = ne(w, T);
            return H !== null ? (A(H.replace(new RegExp("^/?" + i), ""), P), !0) : !1
        }

        function j(w) {
            return this.routes = s = s.filter(function(T) {
                return Yr(w) ? ae(T.path) !== ae(w) : DS(w) ? w !== T.handler : String(T.path) !== String(w)
            }), this
        }

        function Q() {
            l && (this.__popstateListener = function() {
                n.__freezeListening || I()
            }, window.addEventListener("popstate", this.__popstateListener))
        }

        function le() {
            this.routes = s = [], l && window.removeEventListener("popstate", this.__popstateListener), this.destroyed = o = !0
        }

        function se(w, T) {
            return n._notFoundRoute = b("*", w, [c, T], "__NOT_FOUND__"), this
        }

        function oe() {
            if (!!d) return ce().forEach(function(w) {
                if (w.getAttribute("data-navigo") === "false" || w.getAttribute("target") === "_blank") {
                    w.hasListenerAttached && w.removeEventListener("click", w.navigoHandler);
                    return
                }
                w.hasListenerAttached || (w.hasListenerAttached = !0, w.navigoHandler = function(T) {
                    if ((T.ctrlKey || T.metaKey) && T.target.tagName.toLowerCase() === "a") return !1;
                    var P = w.getAttribute("href");
                    if (typeof P > "u" || P === null) return !1;
                    if (P.match(/^(http|https)/) && typeof URL < "u") try {
                        var H = new URL(P);
                        P = H.pathname + H.search
                    } catch {}
                    var W = jS(w.getAttribute("data-navigo-options"));
                    o || (T.preventDefault(), T.stopPropagation(), n.navigate(ae(P), W))
                }, w.addEventListener("click", w.navigoHandler))
            }), n
        }

        function ce() {
            return d ? [].slice.call(document.querySelectorAll(r.linksSelector || zs)) : []
        }

        function X(w) {
            return "/" + i + "/" + ae(w)
        }

        function F(w) {
            return c = w, this
        }

        function Te() {
            return a
        }

        function ne(w, T, P) {
            var H = s.find(function(ot) {
                    return ot.name === w
                }),
                W = null;
            if (H) {
                if (W = H.path, T)
                    for (var xe in T) W = W.replace(":" + xe, T[xe]);
                W = W.match(/^\//) ? W : "/" + W
            }
            return W && P && !P.includeRoot && (W = W.replace(new RegExp("^/" + i), "")), W
        }

        function we(w) {
            return w.getAttribute("href")
        }

        function ie(w) {
            var T = Jr(ae(w)),
                P = T[0],
                H = T[1],
                W = H === "" ? null : fa(H),
                xe = zr(w),
                ot = b(P, function() {}, [c], P);
            return {
                url: P,
                queryString: H,
                hashString: xe,
                route: ot,
                data: null,
                params: W
            }
        }

        function m() {
            return ie(ae(du(i)).replace(new RegExp("^" + i), ""))
        }

        function R(w) {
            var T = {
                instance: n,
                currentLocationPath: w,
                to: w,
                navigateOptions: {},
                resolveOptions: r
            };
            return Bn(T, function() {}), T.matches ? T.matches : !1
        }

        function N(w, T, P) {
            typeof T < "u" && (typeof P > "u" || P) && (T = y(T));
            var H = {
                instance: n,
                to: T,
                currentLocationPath: T
            };
            Gs(H, function() {}), typeof w == "string" && (w = typeof P > "u" || P ? y(w) : w);
            var W = hu(H, {
                name: String(w),
                path: w,
                handler: function() {},
                hooks: {}
            });
            return W || !1
        }

        function Y(w, T, P) {
            return typeof T == "string" && (T = G(T)), T ? (T.hooks[w] || (T.hooks[w] = []), T.hooks[w].push(P), function() {
                T.hooks[w] = T.hooks[w].filter(function(H) {
                    return H !== P
                })
            }) : (console.warn("Route doesn't exists: " + T), function() {})
        }

        function G(w) {
            return typeof w == "string" ? s.find(function(T) {
                return T.name === y(w)
            }) : s.find(function(T) {
                return T.handler === w
            })
        }

        function D(w) {
            w.instance.__dirty = !1, w.instance.__waiting.length > 0 && w.instance.__waiting.shift()()
        }
        this.root = i, this.routes = s, this.destroyed = o, this.current = a, this.__freezeListening = !1, this.__waiting = [], this.__dirty = !1, this.__markAsClean = D, this.on = E, this.off = j, this.resolve = I, this.navigate = A, this.navigateByName = $, this.destroy = le, this.notFound = se, this.updatePageLinks = oe, this.link = X, this.hooks = F, this.extractGETParameters = function(w) {
            return Jr(g(w))
        }, this.lastResolved = Te, this.generate = ne, this.getLinkPath = we, this.match = R, this.matchLocation = N, this.getCurrentLocation = m, this.addBeforeHook = Y.bind(this, "before"), this.addAfterHook = Y.bind(this, "after"), this.addAlreadyHook = Y.bind(this, "already"), this.addLeaveHook = Y.bind(this, "leave"), this.getRoute = G, this._pathToMatchObject = ie, this._clean = ae, this._checkForAHash = g, this._setCurrent = function(w) {
            return a = n.current = w
        }, Q.call(this), oe.call(this)
    }

    function QS(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                e += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
    }

    function ZS() {
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

    function qn(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = ZS(), document.getElementsByTagName("html")[0].append(e);
        const n = document.getElementById("app");
        n.innerHTML = QS(t)
    }

    function e0() {
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

    function t0() {
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

    function r0() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = t0(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = e0()
    }
    const Gt = new XS("/");

    function wt(t, e) {
        const r = e != null && e.queryString ? `?${e.queryString}` : "";
        Gt.navigate(`${t}${r}`, {
            historyAPIMethod: "replaceState"
        })
    }
    Gt.hooks({
        before(t) {
            var r;
            const e = (r = Gt.lastResolved()) == null ? void 0 : r[0];
            (!e || e.route.name === "__NOT_FOUND__") && t()
        }
    });
    Gt.on({
        "/": t => {
            window.tv.load({
                app: "@connect",
                match: t,
                autoMount: !0
            })
        },
        "/past-games": t => {
            window.tv.load({
                app: "@connect",
                match: t,
                autoMount: !0
            })
        },
        "/past-games/:game": t => {
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
            wt("/moderator", t)
        },
        "/moderation": t => {
            wt("/moderator", t)
        },
        "/moderador": t => {
            wt("/moderator", t)
        },
        "/moderateur": t => {
            wt("/moderator", t)
        },
        "/moderatore": t => {
            wt("/moderator", t)
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
            r0()
        },
        "/debug": t => {
            qn()
        },
        "/debug/:app": t => {
            qn(t.data.app)
        },
        "/debug/local/:app": t => {
            qn(t.data.app)
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
    Gt.notFound(t => {
        wt("/", t)
    });
    const n0 = () => {
            Gt.resolve()
        },
        i0 = "production",
        a0 = 1,
        s0 = {
            branch: "main",
            sha: "d494c3bd5d2b5eaeba8934fec33ea08da0e17334",
            lastUpdated: 1672941040347,
            version: "5.93.0",
            type: "production"
        },
        o0 = {
            main: {
                sha: "d494c3bd5d2b5eaeba8934fec33ea08da0e17334",
                lastUpdated: 1672941040347,
                version: "5.93.0",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.87.0"
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
                        version: "5.67.0"
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
                        version: "5.78.0"
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
                        version: "5.91.0"
                    },
                    fourbage: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/fourbage",
                        version: "5.92.0"
                    },
                    htmf: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp9/htmf",
                        version: "5.93.0"
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
                        version: "5.88.0"
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
        c0 = {
            environment: i0,
            version: a0,
            loader: s0,
            branches: o0
        },
        Kr = c0,
        rr = Fs ? new Fs(Kr) : new pu(Kr);
    window.tv = {
        debugLoad: rr.debugLoad,
        load: rr.load,
        register: rr.register,
        mount: rr.mount,
        connect: rr.connect,
        manifest: Kr
    };
    TS(Kr);
    ao.setup();
    jr.setup();
    n0()
});
export default u0();
//# sourceMappingURL=b39cb44c.js.map