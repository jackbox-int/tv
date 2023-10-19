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
var le = (t, e, r) => (na(t, typeof e != "symbol" ? e + "" : e, r), r);
var Cm = ia((Mm, Hs) => {
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

    function oa(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var Ce = {
            DEBUG: !1,
            LIB_VERSION: "2.45.0"
        },
        ie;
    if (typeof window > "u") {
        var Zn = {
            hostname: ""
        };
        ie = {
            navigator: {
                userAgent: ""
            },
            document: {
                location: Zn,
                referrer: ""
            },
            screen: {
                width: 0,
                height: 0
            },
            location: Zn
        }
    } else ie = window;
    var Sr = Array.prototype,
        sa = Function.prototype,
        po = Object.prototype,
        Le = Sr.slice,
        Ht = po.toString,
        wr = po.hasOwnProperty,
        J = ie.console,
        xe = ie.navigator,
        G = ie.document,
        Pt = ie.opera,
        ar = ie.screen,
        be = xe.userAgent,
        Gr = sa.bind,
        ei = Sr.forEach,
        ti = Sr.indexOf,
        ri = Sr.map,
        aa = Array.isArray,
        rn = {},
        c = {
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        F = {
            log: function() {
                if (Ce.DEBUG && !c.isUndefined(J) && J) try {
                    J.log.apply(J, arguments)
                } catch {
                    c.each(arguments, function(e) {
                        J.log(e)
                    })
                }
            },
            warn: function() {
                if (Ce.DEBUG && !c.isUndefined(J) && J) {
                    var t = ["Mixpanel warning:"].concat(c.toArray(arguments));
                    try {
                        J.warn.apply(J, t)
                    } catch {
                        c.each(t, function(r) {
                            J.warn(r)
                        })
                    }
                }
            },
            error: function() {
                if (Ce.DEBUG && !c.isUndefined(J) && J) {
                    var t = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        J.error.apply(J, t)
                    } catch {
                        c.each(t, function(r) {
                            J.error(r)
                        })
                    }
                }
            },
            critical: function() {
                if (!c.isUndefined(J) && J) {
                    var t = ["Mixpanel error:"].concat(c.toArray(arguments));
                    try {
                        J.error.apply(J, t)
                    } catch {
                        c.each(t, function(r) {
                            J.error(r)
                        })
                    }
                }
            }
        },
        Yr = function(t, e) {
            return function() {
                return arguments[0] = "[" + e + "] " + arguments[0], t.apply(F, arguments)
            }
        },
        yn = function(t) {
            return {
                log: Yr(F.log, t),
                error: Yr(F.error, t),
                critical: Yr(F.critical, t)
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
            if (ei && t.forEach === ei) t.forEach(e, r);
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
        if (ri && t.map === ri) return t.map(e, r);
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
        return t === null ? r : ti && t.indexOf === ti ? t.indexOf(e) != -1 : (c.each(t, function(n) {
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
                        y = 0,
                        m = s,
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
                                for (y = O.length, u = 0; u < y; u += 1) b[u] = n(u, O) || "null";
                                return h = b.length === 0 ? "[]" : s ? `[
` + s + b.join(`,
` + s) + `
` + m + "]" : "[" + b.join(",") + "]", s = m, h
                            }
                            for (f in O) wr.call(O, f) && (h = n(f, O), h && b.push(r(f) + (s ? ": " : ":") + h));
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
                var b, O, x = "",
                    D;
                if (e === '"')
                    for (; o();) {
                        if (e === '"') return o(), x;
                        if (e === "\\")
                            if (o(), e === "u") {
                                for (D = 0, O = 0; O < 4 && (b = parseInt(o(), 16), !!isFinite(b)); O += 1) D = D * 16 + b;
                                x += String.fromCharCode(D)
                            } else if (typeof r[e] == "string") x += r[e];
                        else break;
                        else x += e
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
                var O;
                return n = b, t = 0, e = " ", O = h(), u(), e && i("Syntax error"), O
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
                var n = be,
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
    var ni = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
    c.isBlockedUA = function(t) {
        var e;
        for (t = t.toLowerCase(), e = 0; e < ni.length; e++)
            if (t.indexOf(ni[e]) !== -1) return !0;
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
            F.error("Skipping decoding for malformed query param: " + o)
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
                var h = ii(G.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure"), G.cookie = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f
        },
        set: function(t, e, r, n, i, o, s) {
            var a = "",
                u = "",
                f = "";
            if (s) a = "; domain=" + s;
            else if (n) {
                var h = ii(G.location.hostname);
                a = h ? "; domain=." + h : ""
            }
            if (r) {
                var y = new Date;
                y.setTime(y.getTime() + r * 24 * 60 * 60 * 1e3), u = "; expires=" + y.toGMTString()
            }
            o && (i = !0, f = "; SameSite=None"), i && (f += "; secure");
            var m = t + "=" + encodeURIComponent(e) + u + "; path=/" + a + f;
            return G.cookie = m, m
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
            return e || F.error("localStorage unsupported; falling back to cookie store"), e
        },
        error: function(t) {
            F.error("localStorage error: " + t)
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
                F.error("No valid element provided to register_event");
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
            if (!G.getElementsByTagName) return [];
            var o = i.split(" "),
                s, a, u, f, h, y, m, b, O, x, D = [G];
            for (y = 0; y < o.length; y++) {
                if (s = o[y].replace(/^\s+/, "").replace(/\s+$/, ""), s.indexOf("#") > -1) {
                    a = s.split("#"), u = a[0];
                    var H = a[1],
                        B = G.getElementById(H);
                    if (!B || u && B.nodeName.toLowerCase() != u) return [];
                    D = [B];
                    continue
                }
                if (s.indexOf(".") > -1) {
                    a = s.split("."), u = a[0];
                    var ae = a[1];
                    for (u || (u = "*"), f = [], h = 0, m = 0; m < D.length; m++)
                        for (u == "*" ? O = t(D[m]) : O = D[m].getElementsByTagName(u), b = 0; b < O.length; b++) f[h++] = O[b];
                    for (D = [], x = 0, m = 0; m < f.length; m++) f[m].className && c.isString(f[m].className) && r(f[m], ae) && (D[x++] = f[m]);
                    continue
                }
                var we = s.match(ca);
                if (we) {
                    u = we[1];
                    var ce = we[2],
                        ue = we[3],
                        he = we[4];
                    for (u || (u = "*"), f = [], h = 0, m = 0; m < D.length; m++)
                        for (u == "*" ? O = t(D[m]) : O = D[m].getElementsByTagName(u), b = 0; b < O.length; b++) f[h++] = O[b];
                    D = [], x = 0;
                    var _e;
                    switch (ue) {
                        case "=":
                            _e = function(C) {
                                return C.getAttribute(ce) == he
                            };
                            break;
                        case "~":
                            _e = function(C) {
                                return C.getAttribute(ce).match(new RegExp("\\b" + he + "\\b"))
                            };
                            break;
                        case "|":
                            _e = function(C) {
                                return C.getAttribute(ce).match(new RegExp("^" + he + "-?"))
                            };
                            break;
                        case "^":
                            _e = function(C) {
                                return C.getAttribute(ce).indexOf(he) === 0
                            };
                            break;
                        case "$":
                            _e = function(C) {
                                return C.getAttribute(ce).lastIndexOf(he) == C.getAttribute(ce).length - he.length
                            };
                            break;
                        case "*":
                            _e = function(C) {
                                return C.getAttribute(ce).indexOf(he) > -1
                            };
                            break;
                        default:
                            _e = function(C) {
                                return C.getAttribute(ce)
                            }
                    }
                    for (D = [], x = 0, m = 0; m < f.length; m++) _e(f[m]) && (D[x++] = f[m]);
                    continue
                }
                for (u = s, f = [], h = 0, m = 0; m < D.length; m++)
                    for (O = D[m].getElementsByTagName(u), b = 0; b < O.length; b++) f[h++] = O[b];
                D = f
            }
            return D
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
                e = c.getQueryParam(G.URL, n), e.length && (r[n] = e)
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
            var t = be;
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
                $browser: c.info.browser(be, xe.vendor, Pt),
                $referrer: G.referrer,
                $referring_domain: c.info.referringDomain(G.referrer),
                $device: c.info.device(be)
            }), {
                $current_url: ie.location.href,
                $browser_version: c.info.browserVersion(be, xe.vendor, Pt),
                $screen_height: ar.height,
                $screen_width: ar.width,
                mp_lib: "web",
                $lib_version: Ce.LIB_VERSION,
                $insert_id: mn(),
                time: c.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return c.extend(c.strip_empty_properties({
                $os: c.info.os(),
                $browser: c.info.browser(be, xe.vendor, Pt)
            }), {
                $browser_version: c.info.browserVersion(be, xe.vendor, Pt)
            })
        },
        pageviewInfo: function(t) {
            return c.strip_empty_properties({
                mp_page: t,
                mp_referrer: G.referrer,
                mp_browser: c.info.browser(be, xe.vendor, Pt),
                mp_platform: c.info.os()
            })
        }
    };
    var mn = function(t) {
            var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return t ? e.substring(0, t) : e
        },
        ua = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        fa = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        ii = function(t) {
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
    var Ae = function() {};
    Ae.prototype.create_properties = function() {};
    Ae.prototype.event_handler = function() {};
    Ae.prototype.after_track_handler = function() {};
    Ae.prototype.init = function(t) {
        return this.mp = t, this
    };
    Ae.prototype.track = function(t, e, r, n) {
        var i = this,
            o = c.dom_query(t);
        if (o.length === 0) {
            F.error("The DOM query (" + t + ") returned 0 elements");
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
    Ae.prototype.track_callback = function(t, e, r, n) {
        n = n || !1;
        var i = this;
        return function() {
            r.callback_fired || (r.callback_fired = !0, !(t && t(n, e) === !1) && i.after_track_handler(e, r, n))
        }
    };
    Ae.prototype.create_properties = function(t, e) {
        var r;
        return typeof t == "function" ? r = t(e) : r = c.extend({}, t), r
    };
    var ht = function() {
        this.override_event = "click"
    };
    c.inherit(ht, Ae);
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
    c.inherit(Or, Ae);
    Or.prototype.event_handler = function(t, e, r) {
        r.element = e, t.preventDefault()
    };
    Or.prototype.after_track_handler = function(t, e) {
        setTimeout(function() {
            e.element.submit()
        }, 0)
    };
    var la = yn("lock"),
        ho = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
        };
    ho.prototype.withLock = function(t, e, r) {
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
            m = function(B) {
                e && e(B)
            },
            b = function(B) {
                if (new Date().getTime() - i > a) {
                    la.error("Timeout waiting for mutex on " + o + "; clearing lock. [" + n + "]"), u.removeItem(y), u.removeItem(h), D();
                    return
                }
                setTimeout(function() {
                    try {
                        B()
                    } catch (ae) {
                        m(ae)
                    }
                }, s * (Math.random() + .1))
            },
            O = function(B, ae) {
                B() ? ae() : b(function() {
                    O(B, ae)
                })
            },
            x = function() {
                var B = u.getItem(h);
                if (B && B !== n) return !1;
                if (u.setItem(h, n), u.getItem(h) === n) return !0;
                if (!cr(u, !0)) throw new Error("localStorage support dropped while acquiring lock");
                return !1
            },
            D = function() {
                u.setItem(f, n), O(x, function() {
                    if (u.getItem(f) === n) {
                        H();
                        return
                    }
                    b(function() {
                        if (u.getItem(h) !== n) {
                            D();
                            return
                        }
                        O(function() {
                            return !u.getItem(y)
                        }, H)
                    })
                })
            },
            H = function() {
                u.setItem(y, "1");
                try {
                    t()
                } finally {
                    u.removeItem(y), u.getItem(h) === n && u.removeItem(h), u.getItem(f) === n && u.removeItem(f)
                }
            };
        try {
            if (cr(u, !0)) D();
            else throw new Error("localStorage support check failed")
        } catch (B) {
            m(B)
        }
    };
    var oi = yn("batch"),
        Fe = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || c.bind(oi.error, oi), this.lock = new ho(t, {
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
    var si = function(t, e) {
        var r = [];
        return c.each(t, function(n) {
            n.id && !e[n.id] && r.push(n)
        }), r
    };
    Fe.prototype.removeItemsByID = function(t, e) {
        var r = {};
        c.each(t, function(i) {
            r[i] = !0
        }), this.memQueue = si(this.memQueue, r);
        var n = c.bind(function() {
            var i;
            try {
                var o = this.readFromStorage();
                if (o = si(o, r), i = this.saveToStorage(o), i) {
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
    var ai = function(t, e) {
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
        this.memQueue = ai(this.memQueue, t), this.lock.withLock(c.bind(function() {
            var n;
            try {
                var i = this.readFromStorage();
                i = ai(i, t), n = this.saveToStorage(i)
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
        Ct = yn("batch"),
        Te = function(t, e) {
            this.errorReporter = e.errorReporter, this.queue = new Fe(t, {
                errorReporter: c.bind(this.reportError, this),
                storage: e.storage
            }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0
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
                                var O = Math.max(1, Math.floor(n / 2));
                                this.batchSize = Math.min(this.batchSize, O, i.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                            } else this.reportError("Single-event request too large; dropping", i), this.resetBatchSize(), h = !0;
                        else h = !0;
                        h && this.queue.removeItemsByID(c.map(i, function(x) {
                            return x.id
                        }), c.bind(function(x) {
                            x ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                        }, this))
                    } catch (x) {
                        this.reportError("Error handling API response", x), this.resetFlush()
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
    Te.prototype.reportError = function(t, e) {
        if (Ct.error.apply(Ct.error, arguments), this.errorReporter) try {
            e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
        } catch (r) {
            Ct.error(r)
        }
    };
    var da = "__mp_opt_in_out_";

    function ha(t, e) {
        yo(!0, t, e)
    }

    function _a(t, e) {
        yo(!1, t, e)
    }

    function ga(t, e) {
        return go(t, e) === "1"
    }

    function _o(t, e) {
        if (ma(e)) return F.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = go(t, e) === "0";
        return r && F.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function Wt(t) {
        return En(t, function(e) {
            return this.get_config(e)
        })
    }

    function qe(t) {
        return En(t, function(e) {
            return this._get_config(e)
        })
    }

    function bt(t) {
        return En(t, function(e) {
            return this._get_config(e)
        })
    }

    function ya(t, e) {
        e = e || {}, vn(e).remove(bn(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
    }

    function vn(t) {
        return t = t || {}, t.persistenceType === "localStorage" ? c.localStorage : c.cookie
    }

    function bn(t, e) {
        return e = e || {}, (e.persistencePrefix || da) + t
    }

    function go(t, e) {
        return vn(e).get(bn(t, e))
    }

    function ma(t) {
        if (t && t.ignoreDnt) return !1;
        var e = t && t.window || ie,
            r = e.navigator || {},
            n = !1;
        return c.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(i) {
            c.includes([!0, 1, "1", "yes"], i) && (n = !0)
        }), n
    }

    function yo(t, e, r) {
        if (!c.isString(e) || !e.length) {
            F.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
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
                n && (r = _o(n, {
                    ignoreDnt: i,
                    persistenceType: o,
                    persistencePrefix: s,
                    window: a
                }))
            } catch (f) {
                F.error("Unexpected error when checking tracking opt-out status: " + f)
            }
            if (!r) return t.apply(this, arguments);
            var u = arguments[arguments.length - 1];
            typeof u == "function" && u(0)
        }
    }
    var Ue = "$set",
        _t = "$set_once",
        Ee = "$unset",
        Ke = "$add",
        Re = "$append",
        Ve = "$union",
        Me = "$remove",
        va = "$delete",
        mo = {
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
                }, this), e[Ee] = r, e
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
                }, this) : n[t] = e, r[Re] = n, r
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
        z = function() {};
    c.extend(z.prototype, mo);
    z.prototype._init = function(t, e, r) {
        this._mixpanel = t, this._group_key = e, this._group_id = r
    };
    z.prototype.set = bt(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    z.prototype.set_once = bt(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    z.prototype.unset = bt(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    z.prototype.union = bt(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    z.prototype.delete = bt(function(t) {
        var e = this.delete_action();
        return this._send_request(e, t)
    });
    z.prototype.remove = bt(function(t, e, r) {
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    z.prototype._send_request = function(t, e) {
        t.$group_key = this._group_key, t.$group_id = this._group_id, t.$token = this._get_config("token");
        var r = c.encodeDates(t);
        return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/groups/",
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
    var N = function() {};
    c.extend(N.prototype, mo);
    N.prototype._init = function(t) {
        this._mixpanel = t
    };
    N.prototype.set = qe(function(t, e, r) {
        var n = this.set_action(t, e);
        return c.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), n[Ue] = c.extend({}, c.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), n[Ue]), this._send_request(n, r)
    });
    N.prototype.set_once = qe(function(t, e, r) {
        var n = this.set_once_action(t, e);
        return c.isObject(t) && (r = e), this._send_request(n, r)
    });
    N.prototype.unset = qe(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    N.prototype.increment = qe(function(t, e, r) {
        var n = {},
            i = {};
        return c.isObject(t) ? (c.each(t, function(o, s) {
            if (!this._is_reserved_property(s))
                if (isNaN(parseFloat(o))) {
                    F.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else i[s] = o
        }, this), r = e) : (c.isUndefined(e) && (e = 1), i[t] = e), n[Ke] = i, this._send_request(n, r)
    });
    N.prototype.append = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.append_action(t, e);
        return this._send_request(n, r)
    });
    N.prototype.remove = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.remove_action(t, e);
        return this._send_request(n, r)
    });
    N.prototype.union = qe(function(t, e, r) {
        c.isObject(t) && (r = e);
        var n = this.union_action(t, e);
        return this._send_request(n, r)
    });
    N.prototype.track_charge = qe(function(t, e, r) {
        if (!c.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
            F.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return
        }
        return this.append("$transactions", c.extend({
            $amount: t
        }, e), r)
    });
    N.prototype.clear_charges = function(t) {
        return this.set("$transactions", [], t)
    };
    N.prototype.delete_user = function() {
        if (!this._identify_called()) {
            F.error("mixpanel.people.delete_user() requires you to call identify() first");
            return
        }
        var t = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(t)
    };
    N.prototype.toString = function() {
        return this._mixpanel.toString() + ".people"
    };
    N.prototype._send_request = function(t, e) {
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
    N.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    N.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0
    };
    N.prototype._enqueue = function(t) {
        Ue in t ? this._mixpanel.persistence._add_to_people_queue(Ue, t) : _t in t ? this._mixpanel.persistence._add_to_people_queue(_t, t) : Ee in t ? this._mixpanel.persistence._add_to_people_queue(Ee, t) : Ke in t ? this._mixpanel.persistence._add_to_people_queue(Ke, t) : Re in t ? this._mixpanel.persistence._add_to_people_queue(Re, t) : Me in t ? this._mixpanel.persistence._add_to_people_queue(Me, t) : Ve in t ? this._mixpanel.persistence._add_to_people_queue(Ve, t) : F.error("Invalid call to _enqueue():", t)
    };
    N.prototype._flush_one_queue = function(t, e, r, n) {
        var i = this,
            o = c.extend({}, this._mixpanel.persistence._get_queue(t)),
            s = o;
        !c.isUndefined(o) && c.isObject(o) && !c.isEmptyObject(o) && (i._mixpanel.persistence._pop_from_people_queue(t, o), n && (s = n(o)), e.call(i, s, function(a, u) {
            a === 0 && i._mixpanel.persistence._add_to_people_queue(t, o), c.isUndefined(r) || r(a, u)
        }))
    };
    N.prototype._flush = function(t, e, r, n, i, o, s) {
        var a = this,
            u = this._mixpanel.persistence._get_queue(Re),
            f = this._mixpanel.persistence._get_queue(Me);
        if (this._flush_one_queue(Ue, this.set, t), this._flush_one_queue(_t, this.set_once, n), this._flush_one_queue(Ee, this.unset, o, function(D) {
                return c.keys(D)
            }), this._flush_one_queue(Ke, this.increment, e), this._flush_one_queue(Ve, this.union, i), !c.isUndefined(u) && c.isArray(u) && u.length) {
            for (var h, y = function(D, H) {
                    D === 0 && a._mixpanel.persistence._add_to_people_queue(Re, h), c.isUndefined(r) || r(D, H)
                }, m = u.length - 1; m >= 0; m--) h = u.pop(), c.isEmptyObject(h) || a.append(h, y);
            a._mixpanel.persistence.save()
        }
        if (!c.isUndefined(f) && c.isArray(f) && f.length) {
            for (var b, O = function(D, H) {
                    D === 0 && a._mixpanel.persistence._add_to_people_queue(Me, b), c.isUndefined(s) || s(D, H)
                }, x = f.length - 1; x >= 0; x--) b = f.pop(), c.isEmptyObject(b) || a.remove(b, O);
            a._mixpanel.persistence.save()
        }
    };
    N.prototype._is_reserved_property = function(t) {
        return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
    };
    N.prototype.set = N.prototype.set;
    N.prototype.set_once = N.prototype.set_once;
    N.prototype.unset = N.prototype.unset;
    N.prototype.increment = N.prototype.increment;
    N.prototype.append = N.prototype.append;
    N.prototype.remove = N.prototype.remove;
    N.prototype.union = N.prototype.union;
    N.prototype.track_charge = N.prototype.track_charge;
    N.prototype.clear_charges = N.prototype.clear_charges;
    N.prototype.delete_user = N.prototype.delete_user;
    N.prototype.toString = N.prototype.toString;
    var Sn = "__mps",
        wn = "__mpso",
        On = "__mpus",
        Tn = "__mpa",
        kn = "__mpap",
        xn = "__mpr",
        Rn = "__mpu",
        vo = "$people_distinct_id",
        lr = "__alias",
        Mt = "__timers",
        ba = [Sn, wn, On, Tn, kn, xn, Rn, vo, lr, Mt],
        L = function(t) {
            this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
            var e = t.persistence;
            e !== "cookie" && e !== "localStorage" && (F.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && c.localStorage.is_supported() ? this.storage = c.localStorage : this.storage = c.cookie, this.load(), this.update_config(t), this.upgrade(t), this.save()
        };
    L.prototype.properties = function() {
        var t = {};
        return c.each(this.props, function(e, r) {
            c.include(ba, r) || (t[r] = e)
        }), t
    };
    L.prototype.load = function() {
        if (!this.disabled) {
            var t = this.storage.parse(this.name);
            t && (this.props = c.extend({}, t))
        }
    };
    L.prototype.upgrade = function(t) {
        var e = t.upgrade,
            r, n;
        e && (r = "mp_super_properties", typeof e == "string" && (r = e), n = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), n && (this.props = c.extend(this.props, n.all, n.events))), !t.cookie_name && t.name !== "mixpanel" && (r = "mp_" + t.token + "_" + t.name, n = this.storage.parse(r), n && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(n))), this.storage === c.localStorage && (n = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, !0), n && this.register_once(n))
    };
    L.prototype.save = function() {
        this.disabled || this.storage.set(this.name, c.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
    };
    L.prototype.remove = function() {
        this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
    };
    L.prototype.clear = function() {
        this.remove(), this.props = {}
    };
    L.prototype.register_once = function(t, e, r) {
        return c.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, c.each(t, function(n, i) {
            (!this.props.hasOwnProperty(i) || this.props[i] === e) && (this.props[i] = n)
        }, this), this.save(), !0) : !1
    };
    L.prototype.register = function(t, e) {
        return c.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, c.extend(this.props, t), this.save(), !0) : !1
    };
    L.prototype.unregister = function(t) {
        t in this.props && (delete this.props[t], this.save())
    };
    L.prototype.update_campaign_params = function() {
        this.campaign_params_saved || (this.register_once(c.info.campaignParams()), this.campaign_params_saved = !0)
    };
    L.prototype.update_search_keyword = function(t) {
        this.register(c.info.searchInfo(t))
    };
    L.prototype.update_referrer_info = function(t) {
        this.register_once({
            $initial_referrer: t || "$direct",
            $initial_referring_domain: c.info.referringDomain(t) || "$direct"
        }, "")
    };
    L.prototype.get_referrer_info = function() {
        return c.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    L.prototype.safe_merge = function(t) {
        return c.each(this.props, function(e, r) {
            r in t || (t[r] = e)
        }), t
    };
    L.prototype.update_config = function(t) {
        this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
    };
    L.prototype.set_disabled = function(t) {
        this.disabled = t, this.disabled ? this.remove() : this.save()
    };
    L.prototype.set_cookie_domain = function(t) {
        t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
    };
    L.prototype.set_cross_site = function(t) {
        t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
    };
    L.prototype.set_cross_subdomain = function(t) {
        t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
    };
    L.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    L.prototype.set_secure = function(t) {
        t !== this.secure && (this.secure = !!t, this.remove(), this.save())
    };
    L.prototype._add_to_people_queue = function(t, e) {
        var r = this._get_queue_key(t),
            n = e[t],
            i = this._get_or_create_queue(Ue),
            o = this._get_or_create_queue(_t),
            s = this._get_or_create_queue(Ee),
            a = this._get_or_create_queue(Ke),
            u = this._get_or_create_queue(Ve),
            f = this._get_or_create_queue(Me, []),
            h = this._get_or_create_queue(Re, []);
        r === Sn ? (c.extend(i, n), this._pop_from_people_queue(Ke, n), this._pop_from_people_queue(Ve, n), this._pop_from_people_queue(Ee, n)) : r === wn ? (c.each(n, function(y, m) {
            m in o || (o[m] = y)
        }), this._pop_from_people_queue(Ee, n)) : r === On ? c.each(n, function(y) {
            c.each([i, o, a, u], function(m) {
                y in m && delete m[y]
            }), c.each(h, function(m) {
                y in m && delete m[y]
            }), s[y] = !0
        }) : r === Tn ? (c.each(n, function(y, m) {
            m in i ? i[m] += y : (m in a || (a[m] = 0), a[m] += y)
        }, this), this._pop_from_people_queue(Ee, n)) : r === Rn ? (c.each(n, function(y, m) {
            c.isArray(y) && (m in u || (u[m] = []), u[m] = u[m].concat(y))
        }), this._pop_from_people_queue(Ee, n)) : r === xn ? (f.push(n), this._pop_from_people_queue(Re, n)) : r === kn && (h.push(n), this._pop_from_people_queue(Ee, n)), F.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), F.log(e), this.save()
    };
    L.prototype._pop_from_people_queue = function(t, e) {
        var r = this._get_queue(t);
        c.isUndefined(r) || (c.each(e, function(n, i) {
            t === Re || t === Me ? c.each(r, function(o) {
                o[i] === n && delete o[i]
            }) : delete r[i]
        }, this), this.save())
    };
    L.prototype._get_queue_key = function(t) {
        if (t === Ue) return Sn;
        if (t === _t) return wn;
        if (t === Ee) return On;
        if (t === Ke) return Tn;
        if (t === Re) return kn;
        if (t === Me) return xn;
        if (t === Ve) return Rn;
        F.error("Invalid queue:", t)
    };
    L.prototype._get_queue = function(t) {
        return this.props[this._get_queue_key(t)]
    };
    L.prototype._get_or_create_queue = function(t, e) {
        var r = this._get_queue_key(t);
        return e = c.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
    };
    L.prototype.set_event_timer = function(t, e) {
        var r = this.props[Mt] || {};
        r[t] = e, this.props[Mt] = r, this.save()
    };
    L.prototype.remove_event_timer = function(t) {
        var e = this.props[Mt] || {},
            r = e[t];
        return c.isUndefined(r) || (delete this.props[Mt][t], this.save()), r
    };
    var An, re, bo = 0,
        Ea = 1,
        Sa = function(t) {
            return t
        },
        Bt = function() {},
        ye = "mixpanel",
        Eo = "base64",
        wa = "json",
        ot = ie.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        So = !ot && be.indexOf("MSIE") === -1 && be.indexOf("Mozilla") === -1,
        pr = null;
    xe.sendBeacon && (pr = function() {
        return xe.sendBeacon.apply(xe, arguments)
    });
    var ci = {
            api_host: "https://api-js.mixpanel.com",
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: Eo,
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
        wo = !1,
        E = function() {},
        nn = function(t, e, r) {
            var n, i = r === ye ? re : re[r];
            if (i && An === bo) n = i;
            else {
                if (i && !c.isArray(i)) {
                    F.error("You have already initialized " + r);
                    return
                }
                n = new E
            }
            return n._cached_groups = {}, n._init(t, e, r), n.people = new N, n.people._init(n), Ce.DEBUG = Ce.DEBUG || n.get_config("debug"), !c.isUndefined(i) && c.isArray(i) && (n._execute_array.call(n.people, i.people), n._execute_array(i)), n
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
        return re[r] = n, n._loaded(), n
    };
    E.prototype._init = function(t, e, r) {
        e = e || {}, this.__loaded = !0, this.config = {};
        var n = {};
        if (!("api_payload_format" in e)) {
            var i = e.api_host || ci.api_host;
            i.match(/\.mixpanel\.com$/) && (n.api_payload_format = wa)
        }
        if (this.set_config(c.extend({}, ci, n, e, {
                name: r,
                token: t,
                callback_fn: (r === ye ? r : ye + "." + r) + "._jsc"
            })), this._jsc = Bt, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!c.localStorage.is_supported(!0) || !ot) this._batch_requests = !1, F.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
            else if (this.init_batchers(), pr && ie.addEventListener) {
                var o = c.bind(function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }, this);
                ie.addEventListener("pagehide", function(a) {
                    a.persisted && o()
                }), ie.addEventListener("visibilitychange", function() {
                    G.visibilityState === "hidden" && o()
                })
            }
        }
        this.persistence = this.cookie = new L(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
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
        this.persistence.update_search_keyword(G.referrer), this.get_config("store_google") && this.persistence.update_campaign_params(), this.get_config("save_referrer") && this.persistence.update_referrer_info(G.referrer)
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
        if (!wo) return this.__dom_loaded_queue.push([t, e]), !1;
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
        if (So) return this.__request_queue.push(arguments), i;
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
            var y = G.createElement("img");
            y.src = t, G.body.appendChild(y)
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
            var m = new XMLHttpRequest;
            m.open(r.method, t, !0);
            var b = this.get_config("xhr_headers");
            if (a && (b["Content-Type"] = "application/x-www-form-urlencoded"), c.each(b, function(H, B) {
                    m.setRequestHeader(B, H)
                }), r.timeout_ms && typeof m.timeout < "u") {
                m.timeout = r.timeout_ms;
                var O = new Date().getTime()
            }
            m.withCredentials = !0, m.onreadystatechange = function() {
                if (m.readyState === 4)
                    if (m.status === 200) {
                        if (n)
                            if (f) {
                                var H;
                                try {
                                    H = c.JSONDecode(m.responseText)
                                } catch (ae) {
                                    if (h.report_error(ae), r.ignore_json_errors) H = m.responseText;
                                    else return
                                }
                                n(H)
                            } else n(Number(m.responseText))
                    } else {
                        var B;
                        m.timeout && !m.status && new Date().getTime() - O >= m.timeout ? B = "timeout" : B = "Bad HTTP status: " + m.status + " " + m.statusText, h.report_error(B), n && n(f ? {
                            status: 0,
                            error: B,
                            xhr_req: m
                        } : 0)
                    }
            }, m.send(s)
        } catch (H) {
            h.report_error(H), i = !1
        } else {
            var x = G.createElement("script");
            x.type = "text/javascript", x.async = !0, x.defer = !0, x.src = t;
            var D = G.getElementsByTagName("script")[0];
            D.parentNode.insertBefore(x, D)
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
                return new Te("__mpq_" + t + r.queue_suffix, {
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
        return this.get_config("api_payload_format") === Eo && (e = c.base64Encode(e)), {
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
                return s.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (F.log("MIXPANEL REQUEST:"), F.log(r), this._send_request(n, this._encode_data_for_request(r), s, this._prepare_callback(e, r))) : null
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
        return (n === void 0 || n._group_key !== t || n._group_id !== e) && (n = new z, n._init(this, t, e), this._cached_groups[r] = n), n
    };
    E.prototype.track_pageview = function(t) {
        c.isUndefined(t) && (t = G.location.href), this.track("mp_page_view", c.info.pageviewInfo(t))
    };
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
    var Oa = {
            persistent: !0
        },
        In = function(t) {
            var e;
            return c.isObject(t) ? e = t : c.isUndefined(t) ? e = {} : e = {
                days: t
            }, c.extend({}, Oa, e)
        };
    E.prototype.register = function(t, e) {
        var r = In(e);
        r.persistent ? this.persistence.register(t, r.days) : c.extend(this.unpersisted_superprops, t)
    };
    E.prototype.register_once = function(t, e, r) {
        var n = In(r);
        n.persistent ? this.persistence.register_once(t, e, n.days) : (typeof e > "u" && (e = "None"), c.each(t, function(i, o) {
            (!this.unpersisted_superprops.hasOwnProperty(o) || this.unpersisted_superprops[o] === e) && (this.unpersisted_superprops[o] = i)
        }, this))
    };
    E.prototype.unregister = function(t, e) {
        e = In(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
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
        if (t === this.get_property(vo)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
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
        return c.isBlockedUA(be) || this._flags.disable_all_events || c.include(this.__disabled_events, t)
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
        return this._gdpr_call_func(_o, t)
    };
    E.prototype.clear_opt_in_out_tracking = function(t) {
        t = c.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(ya, t), this._gdpr_update_persistence(t)
    };
    E.prototype.report_error = function(t, e) {
        F.error.apply(F.error, arguments);
        try {
            !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
        } catch (r) {
            F.error(r)
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
    L.prototype.properties = L.prototype.properties;
    L.prototype.update_search_keyword = L.prototype.update_search_keyword;
    L.prototype.update_referrer_info = L.prototype.update_referrer_info;
    L.prototype.get_cross_subdomain = L.prototype.get_cross_subdomain;
    L.prototype.clear = L.prototype.clear;
    var rt = {},
        Ta = function() {
            c.each(rt, function(t, e) {
                e !== ye && (re[e] = t)
            }), re._ = c
        },
        ka = function() {
            re.init = function(t, e, r) {
                if (r) return re[r] || (re[r] = rt[r] = nn(t, e, r), re[r]._loaded()), re[r];
                var n = re;
                rt[ye] ? n = rt[ye] : t && (n = nn(t, e, ye), n._loaded(), rt[ye] = n), re = n, An === Ea && (ie[ye] = re), Ta()
            }
        },
        xa = function() {
            function t() {
                t.done || (t.done = !0, wo = !0, So = !1, c.each(rt, function(n) {
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
                    r = ie.frameElement === null
                } catch {}
                G.documentElement.doScroll && r && e()
            }
            c.register_event(ie, "load", t, !0)
        };

    function Ra() {
        return An = bo, re = new E, ka(), re.init(), xa(), re
    }
    var Aa = Ra(),
        Ia = Aa;
    const ui = oa(Ia);
    class Oo {
        static setup() {
            gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), ui.init("2e284873b7269f13b850ac994abfd848", {
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
            ui.track("Game Joined", {
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
    const Pa = [{
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
            categoryId: "LineupGame",
            galleryId: "quixort"
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
        }],
        fi = t => Pa.find(e => e.tag === t || e.galleryId === t || e.categoryId === t);

    function Na() {
        this.__data__ = [], this.size = 0
    }
    var Da = Na;

    function $a(t, e) {
        return t === e || t !== t && e !== e
    }
    var Tr = $a,
        La = Tr;

    function Ca(t, e) {
        for (var r = t.length; r--;)
            if (La(t[r][0], e)) return r;
        return -1
    }
    var kr = Ca,
        ja = kr,
        Ua = Array.prototype,
        Ma = Ua.splice;

    function Ba(t) {
        var e = this.__data__,
            r = ja(e, t);
        if (r < 0) return !1;
        var n = e.length - 1;
        return r == n ? e.pop() : Ma.call(e, r, 1), --this.size, !0
    }
    var Fa = Ba,
        qa = kr;

    function Ga(t) {
        var e = this.__data__,
            r = qa(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var Ya = Ga,
        Ha = kr;

    function Wa(t) {
        return Ha(this.__data__, t) > -1
    }
    var za = Wa,
        Ka = kr;

    function Va(t, e) {
        var r = this.__data__,
            n = Ka(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }
    var Ja = Va,
        Xa = Da,
        Qa = Fa,
        Za = Ya,
        ec = za,
        tc = Ja;

    function Et(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Et.prototype.clear = Xa;
    Et.prototype.delete = Qa;
    Et.prototype.get = Za;
    Et.prototype.has = ec;
    Et.prototype.set = tc;
    var xr = Et,
        rc = xr;

    function nc() {
        this.__data__ = new rc, this.size = 0
    }
    var ic = nc;

    function oc(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var sc = oc;

    function ac(t) {
        return this.__data__.get(t)
    }
    var cc = ac;

    function uc(t) {
        return this.__data__.has(t)
    }
    var fc = uc,
        lc = typeof pe == "object" && pe && pe.Object === Object && pe,
        To = lc,
        pc = To,
        dc = typeof self == "object" && self && self.Object === Object && self,
        hc = pc || dc || Function("return this")(),
        St = hc,
        _c = St,
        gc = _c.Symbol,
        ko = gc,
        li = ko,
        xo = Object.prototype,
        yc = xo.hasOwnProperty,
        mc = xo.toString,
        Nt = li ? li.toStringTag : void 0;

    function vc(t) {
        var e = yc.call(t, Nt),
            r = t[Nt];
        try {
            t[Nt] = void 0;
            var n = !0
        } catch {}
        var i = mc.call(t);
        return n && (e ? t[Nt] = r : delete t[Nt]), i
    }
    var bc = vc,
        Ec = Object.prototype,
        Sc = Ec.toString;

    function wc(t) {
        return Sc.call(t)
    }
    var Oc = wc,
        pi = ko,
        Tc = bc,
        kc = Oc,
        xc = "[object Null]",
        Rc = "[object Undefined]",
        di = pi ? pi.toStringTag : void 0;

    function Ac(t) {
        return t == null ? t === void 0 ? Rc : xc : di && di in Object(t) ? Tc(t) : kc(t)
    }
    var Rr = Ac;

    function Ic(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var Qe = Ic,
        Pc = Rr,
        Nc = Qe,
        Dc = "[object AsyncFunction]",
        $c = "[object Function]",
        Lc = "[object GeneratorFunction]",
        Cc = "[object Proxy]";

    function jc(t) {
        if (!Nc(t)) return !1;
        var e = Pc(t);
        return e == $c || e == Lc || e == Dc || e == Cc
    }
    var Pn = jc,
        Uc = St,
        Mc = Uc["__core-js_shared__"],
        Bc = Mc,
        Wr = Bc,
        hi = function() {
            var t = /[^.]+$/.exec(Wr && Wr.keys && Wr.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function Fc(t) {
        return !!hi && hi in t
    }
    var qc = Fc,
        Gc = Function.prototype,
        Yc = Gc.toString;

    function Hc(t) {
        if (t != null) {
            try {
                return Yc.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var Wc = Hc,
        zc = Pn,
        Kc = qc,
        Vc = Qe,
        Jc = Wc,
        Xc = /[\\^$.*+?()[\]{}|]/g,
        Qc = /^\[object .+?Constructor\]$/,
        Zc = Function.prototype,
        eu = Object.prototype,
        tu = Zc.toString,
        ru = eu.hasOwnProperty,
        nu = RegExp("^" + tu.call(ru).replace(Xc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function iu(t) {
        if (!Vc(t) || Kc(t)) return !1;
        var e = zc(t) ? nu : Qc;
        return e.test(Jc(t))
    }
    var ou = iu;

    function su(t, e) {
        return t == null ? void 0 : t[e]
    }
    var au = su,
        cu = ou,
        uu = au;

    function fu(t, e) {
        var r = uu(t, e);
        return cu(r) ? r : void 0
    }
    var Nn = fu,
        lu = Nn,
        pu = St,
        du = lu(pu, "Map"),
        Ro = du,
        hu = Nn,
        _u = hu(Object, "create"),
        Ar = _u,
        _i = Ar;

    function gu() {
        this.__data__ = _i ? _i(null) : {}, this.size = 0
    }
    var yu = gu;

    function mu(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var vu = mu,
        bu = Ar,
        Eu = "__lodash_hash_undefined__",
        Su = Object.prototype,
        wu = Su.hasOwnProperty;

    function Ou(t) {
        var e = this.__data__;
        if (bu) {
            var r = e[t];
            return r === Eu ? void 0 : r
        }
        return wu.call(e, t) ? e[t] : void 0
    }
    var Tu = Ou,
        ku = Ar,
        xu = Object.prototype,
        Ru = xu.hasOwnProperty;

    function Au(t) {
        var e = this.__data__;
        return ku ? e[t] !== void 0 : Ru.call(e, t)
    }
    var Iu = Au,
        Pu = Ar,
        Nu = "__lodash_hash_undefined__";

    function Du(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = Pu && e === void 0 ? Nu : e, this
    }
    var $u = Du,
        Lu = yu,
        Cu = vu,
        ju = Tu,
        Uu = Iu,
        Mu = $u;

    function wt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    wt.prototype.clear = Lu;
    wt.prototype.delete = Cu;
    wt.prototype.get = ju;
    wt.prototype.has = Uu;
    wt.prototype.set = Mu;
    var Bu = wt,
        gi = Bu,
        Fu = xr,
        qu = Ro;

    function Gu() {
        this.size = 0, this.__data__ = {
            hash: new gi,
            map: new(qu || Fu),
            string: new gi
        }
    }
    var Yu = Gu;

    function Hu(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var Wu = Hu,
        zu = Wu;

    function Ku(t, e) {
        var r = t.__data__;
        return zu(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var Ir = Ku,
        Vu = Ir;

    function Ju(t) {
        var e = Vu(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var Xu = Ju,
        Qu = Ir;

    function Zu(t) {
        return Qu(this, t).get(t)
    }
    var ef = Zu,
        tf = Ir;

    function rf(t) {
        return tf(this, t).has(t)
    }
    var nf = rf,
        of = Ir;

    function sf(t, e) {
        var r = of(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }
    var af = sf,
        cf = Yu,
        uf = Xu,
        ff = ef,
        lf = nf,
        pf = af;

    function Ot(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    Ot.prototype.clear = cf;
    Ot.prototype.delete = uf;
    Ot.prototype.get = ff;
    Ot.prototype.has = lf;
    Ot.prototype.set = pf;
    var df = Ot,
        hf = xr,
        _f = Ro,
        gf = df,
        yf = 200;

    function mf(t, e) {
        var r = this.__data__;
        if (r instanceof hf) {
            var n = r.__data__;
            if (!_f || n.length < yf - 1) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new gf(n)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var vf = mf,
        bf = xr,
        Ef = ic,
        Sf = sc,
        wf = cc,
        Of = fc,
        Tf = vf;

    function Tt(t) {
        var e = this.__data__ = new bf(t);
        this.size = e.size
    }
    Tt.prototype.clear = Ef;
    Tt.prototype.delete = Sf;
    Tt.prototype.get = wf;
    Tt.prototype.has = Of;
    Tt.prototype.set = Tf;
    var kf = Tt,
        xf = Nn,
        Rf = function() {
            try {
                var t = xf(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        Ao = Rf,
        yi = Ao;

    function Af(t, e, r) {
        e == "__proto__" && yi ? yi(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var Dn = Af,
        If = Dn,
        Pf = Tr;

    function Nf(t, e, r) {
        (r !== void 0 && !Pf(t[e], r) || r === void 0 && !(e in t)) && If(t, e, r)
    }
    var Io = Nf;

    function Df(t) {
        return function(e, r, n) {
            for (var i = -1, o = Object(e), s = n(e), a = s.length; a--;) {
                var u = s[t ? a : ++i];
                if (r(o[u], u, o) === !1) break
            }
            return e
        }
    }
    var $f = Df,
        Lf = $f,
        Cf = Lf(),
        jf = Cf,
        dr = {
            exports: {}
        };
    dr.exports;
    (function(t, e) {
        var r = St,
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
    var Uf = dr.exports,
        Mf = St,
        Bf = Mf.Uint8Array,
        Ff = Bf,
        mi = Ff;

    function qf(t) {
        var e = new t.constructor(t.byteLength);
        return new mi(e).set(new mi(t)), e
    }
    var Gf = qf,
        Yf = Gf;

    function Hf(t, e) {
        var r = e ? Yf(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var Wf = Hf;

    function zf(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
    var Kf = zf,
        Vf = Qe,
        vi = Object.create,
        Jf = function() {
            function t() {}
            return function(e) {
                if (!Vf(e)) return {};
                if (vi) return vi(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        Xf = Jf;

    function Qf(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var Zf = Qf,
        el = Zf,
        tl = el(Object.getPrototypeOf, Object),
        Po = tl,
        rl = Object.prototype;

    function nl(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || rl;
        return t === r
    }
    var No = nl,
        il = Xf,
        ol = Po,
        sl = No;

    function al(t) {
        return typeof t.constructor == "function" && !sl(t) ? il(ol(t)) : {}
    }
    var cl = al;

    function ul(t) {
        return t != null && typeof t == "object"
    }
    var zt = ul,
        fl = Rr,
        ll = zt,
        pl = "[object Arguments]";

    function dl(t) {
        return ll(t) && fl(t) == pl
    }
    var hl = dl,
        bi = hl,
        _l = zt,
        Do = Object.prototype,
        gl = Do.hasOwnProperty,
        yl = Do.propertyIsEnumerable,
        ml = bi(function() {
            return arguments
        }()) ? bi : function(t) {
            return _l(t) && gl.call(t, "callee") && !yl.call(t, "callee")
        },
        $o = ml,
        vl = Array.isArray,
        Lo = vl,
        bl = 9007199254740991;

    function El(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= bl
    }
    var Co = El,
        Sl = Pn,
        wl = Co;

    function Ol(t) {
        return t != null && wl(t.length) && !Sl(t)
    }
    var $n = Ol,
        Tl = $n,
        kl = zt;

    function xl(t) {
        return kl(t) && Tl(t)
    }
    var Rl = xl,
        hr = {
            exports: {}
        };

    function Al() {
        return !1
    }
    var Il = Al;
    hr.exports;
    (function(t, e) {
        var r = St,
            n = Il,
            i = e && !e.nodeType && e,
            o = i && !0 && t && !t.nodeType && t,
            s = o && o.exports === i,
            a = s ? r.Buffer : void 0,
            u = a ? a.isBuffer : void 0,
            f = u || n;
        t.exports = f
    })(hr, hr.exports);
    var jo = hr.exports,
        Pl = Rr,
        Nl = Po,
        Dl = zt,
        $l = "[object Object]",
        Ll = Function.prototype,
        Cl = Object.prototype,
        Uo = Ll.toString,
        jl = Cl.hasOwnProperty,
        Ul = Uo.call(Object);

    function Ml(t) {
        if (!Dl(t) || Pl(t) != $l) return !1;
        var e = Nl(t);
        if (e === null) return !0;
        var r = jl.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && Uo.call(r) == Ul
    }
    var Bl = Ml,
        Fl = Rr,
        ql = Co,
        Gl = zt,
        Yl = "[object Arguments]",
        Hl = "[object Array]",
        Wl = "[object Boolean]",
        zl = "[object Date]",
        Kl = "[object Error]",
        Vl = "[object Function]",
        Jl = "[object Map]",
        Xl = "[object Number]",
        Ql = "[object Object]",
        Zl = "[object RegExp]",
        ep = "[object Set]",
        tp = "[object String]",
        rp = "[object WeakMap]",
        np = "[object ArrayBuffer]",
        ip = "[object DataView]",
        op = "[object Float32Array]",
        sp = "[object Float64Array]",
        ap = "[object Int8Array]",
        cp = "[object Int16Array]",
        up = "[object Int32Array]",
        fp = "[object Uint8Array]",
        lp = "[object Uint8ClampedArray]",
        pp = "[object Uint16Array]",
        dp = "[object Uint32Array]",
        W = {};
    W[op] = W[sp] = W[ap] = W[cp] = W[up] = W[fp] = W[lp] = W[pp] = W[dp] = !0;
    W[Yl] = W[Hl] = W[np] = W[Wl] = W[ip] = W[zl] = W[Kl] = W[Vl] = W[Jl] = W[Xl] = W[Ql] = W[Zl] = W[ep] = W[tp] = W[rp] = !1;

    function hp(t) {
        return Gl(t) && ql(t.length) && !!W[Fl(t)]
    }
    var _p = hp;

    function gp(t) {
        return function(e) {
            return t(e)
        }
    }
    var yp = gp,
        _r = {
            exports: {}
        };
    _r.exports;
    (function(t, e) {
        var r = To,
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
    var mp = _r.exports,
        vp = _p,
        bp = yp,
        Ei = mp,
        Si = Ei && Ei.isTypedArray,
        Ep = Si ? bp(Si) : vp,
        Mo = Ep;

    function Sp(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var Bo = Sp,
        wp = Dn,
        Op = Tr,
        Tp = Object.prototype,
        kp = Tp.hasOwnProperty;

    function xp(t, e, r) {
        var n = t[e];
        (!(kp.call(t, e) && Op(n, r)) || r === void 0 && !(e in t)) && wp(t, e, r)
    }
    var Rp = xp,
        Ap = Rp,
        Ip = Dn;

    function Pp(t, e, r, n) {
        var i = !r;
        r || (r = {});
        for (var o = -1, s = e.length; ++o < s;) {
            var a = e[o],
                u = n ? n(r[a], t[a], a, r, t) : void 0;
            u === void 0 && (u = t[a]), i ? Ip(r, a, u) : Ap(r, a, u)
        }
        return r
    }
    var Np = Pp;

    function Dp(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
    var $p = Dp,
        Lp = 9007199254740991,
        Cp = /^(?:0|[1-9]\d*)$/;

    function jp(t, e) {
        var r = typeof t;
        return e = e ?? Lp, !!e && (r == "number" || r != "symbol" && Cp.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var Fo = jp,
        Up = $p,
        Mp = $o,
        Bp = Lo,
        Fp = jo,
        qp = Fo,
        Gp = Mo,
        Yp = Object.prototype,
        Hp = Yp.hasOwnProperty;

    function Wp(t, e) {
        var r = Bp(t),
            n = !r && Mp(t),
            i = !r && !n && Fp(t),
            o = !r && !n && !i && Gp(t),
            s = r || n || i || o,
            a = s ? Up(t.length, String) : [],
            u = a.length;
        for (var f in t)(e || Hp.call(t, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || qp(f, u))) && a.push(f);
        return a
    }
    var zp = Wp;

    function Kp(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var Vp = Kp,
        Jp = Qe,
        Xp = No,
        Qp = Vp,
        Zp = Object.prototype,
        ed = Zp.hasOwnProperty;

    function td(t) {
        if (!Jp(t)) return Qp(t);
        var e = Xp(t),
            r = [];
        for (var n in t) n == "constructor" && (e || !ed.call(t, n)) || r.push(n);
        return r
    }
    var rd = td,
        nd = zp,
        id = rd,
        od = $n;

    function sd(t) {
        return od(t) ? nd(t, !0) : id(t)
    }
    var qo = sd,
        ad = Np,
        cd = qo;

    function ud(t) {
        return ad(t, cd(t))
    }
    var fd = ud,
        wi = Io,
        ld = Uf,
        pd = Wf,
        dd = Kf,
        hd = cl,
        Oi = $o,
        Ti = Lo,
        _d = Rl,
        gd = jo,
        yd = Pn,
        md = Qe,
        vd = Bl,
        bd = Mo,
        ki = Bo,
        Ed = fd;

    function Sd(t, e, r, n, i, o, s) {
        var a = ki(t, r),
            u = ki(e, r),
            f = s.get(u);
        if (f) {
            wi(t, r, f);
            return
        }
        var h = o ? o(a, u, r + "", t, e, s) : void 0,
            y = h === void 0;
        if (y) {
            var m = Ti(u),
                b = !m && gd(u),
                O = !m && !b && bd(u);
            h = u, m || b || O ? Ti(a) ? h = a : _d(a) ? h = dd(a) : b ? (y = !1, h = ld(u, !0)) : O ? (y = !1, h = pd(u, !0)) : h = [] : vd(u) || Oi(u) ? (h = a, Oi(a) ? h = Ed(a) : (!md(a) || yd(a)) && (h = hd(u))) : y = !1
        }
        y && (s.set(u, h), i(h, u, n, o, s), s.delete(u)), wi(t, r, h)
    }
    var wd = Sd,
        Od = kf,
        Td = Io,
        kd = jf,
        xd = wd,
        Rd = Qe,
        Ad = qo,
        Id = Bo;

    function Go(t, e, r, n, i) {
        t !== e && kd(e, function(o, s) {
            if (i || (i = new Od), Rd(o)) xd(t, e, s, r, Go, n, i);
            else {
                var a = n ? n(Id(t, s), o, s + "", t, e, i) : void 0;
                a === void 0 && (a = o), Td(t, s, a)
            }
        }, Ad)
    }
    var Pd = Go;

    function Nd(t) {
        return t
    }
    var Yo = Nd;

    function Dd(t, e, r) {
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
    var $d = Dd,
        Ld = $d,
        xi = Math.max;

    function Cd(t, e, r) {
        return e = xi(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, o = xi(n.length - e, 0), s = Array(o); ++i < o;) s[i] = n[e + i];
                i = -1;
                for (var a = Array(e + 1); ++i < e;) a[i] = n[i];
                return a[e] = r(s), Ld(t, this, a)
            }
    }
    var jd = Cd;

    function Ud(t) {
        return function() {
            return t
        }
    }
    var Md = Ud,
        Bd = Md,
        Ri = Ao,
        Fd = Yo,
        qd = Ri ? function(t, e) {
            return Ri(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Bd(e),
                writable: !0
            })
        } : Fd,
        Gd = qd,
        Yd = 800,
        Hd = 16,
        Wd = Date.now;

    function zd(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = Wd(),
                i = Hd - (n - r);
            if (r = n, i > 0) {
                if (++e >= Yd) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var Kd = zd,
        Vd = Gd,
        Jd = Kd,
        Xd = Jd(Vd),
        Qd = Xd,
        Zd = Yo,
        eh = jd,
        th = Qd;

    function rh(t, e) {
        return th(eh(t, e, Zd), t + "")
    }
    var nh = rh,
        ih = Tr,
        oh = $n,
        sh = Fo,
        ah = Qe;

    function ch(t, e, r) {
        if (!ah(r)) return !1;
        var n = typeof e;
        return (n == "number" ? oh(r) && sh(e, r.length) : n == "string" && e in r) ? ih(r[e], t) : !1
    }
    var uh = ch,
        fh = nh,
        lh = uh;

    function ph(t) {
        return fh(function(e, r) {
            var n = -1,
                i = r.length,
                o = i > 1 ? r[i - 1] : void 0,
                s = i > 2 ? r[2] : void 0;
            for (o = t.length > 3 && typeof o == "function" ? (i--, o) : void 0, s && lh(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                var a = r[n];
                a && t(e, a, n, o)
            }
            return e
        })
    }
    var dh = ph,
        hh = Pd,
        _h = dh;
    _h(function(t, e, r) {
        hh(t, e, r)
    });
    const it = class it {
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
    le(it, "queryParams", new URLSearchParams(window.location.search)), le(it, "getQueryParam", e => it.queryParams.get(e)), le(it, "sleep", e => new Promise(r => {
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
    le(gr, "defaultNamespace", "tv");
    var Ai = {
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
                    y = ArrayBuffer.isView || function(v) {
                        return v && h.indexOf(Object.prototype.toString.call(v)) > -1
                    };

                function m(v) {
                    if (typeof v != "string" && (v = String(v)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(v) || v === "") throw new TypeError('Invalid character in header field name: "' + v + '"');
                    return v.toLowerCase()
                }

                function b(v) {
                    return typeof v != "string" && (v = String(v)), v
                }

                function O(v) {
                    var T = {
                        next: function() {
                            var I = v.shift();
                            return {
                                done: I === void 0,
                                value: I
                            }
                        }
                    };
                    return u.iterable && (T[Symbol.iterator] = function() {
                        return T
                    }), T
                }

                function x(v) {
                    this.map = {}, v instanceof x ? v.forEach(function(T, I) {
                        this.append(I, T)
                    }, this) : Array.isArray(v) ? v.forEach(function(T) {
                        this.append(T[0], T[1])
                    }, this) : v && Object.getOwnPropertyNames(v).forEach(function(T) {
                        this.append(T, v[T])
                    }, this)
                }
                x.prototype.append = function(v, T) {
                    v = m(v), T = b(T);
                    var I = this.map[v];
                    this.map[v] = I ? I + ", " + T : T
                }, x.prototype.delete = function(v) {
                    delete this.map[m(v)]
                }, x.prototype.get = function(v) {
                    return v = m(v), this.has(v) ? this.map[v] : null
                }, x.prototype.has = function(v) {
                    return this.map.hasOwnProperty(m(v))
                }, x.prototype.set = function(v, T) {
                    this.map[m(v)] = b(T)
                }, x.prototype.forEach = function(v, T) {
                    for (var I in this.map) this.map.hasOwnProperty(I) && v.call(T, this.map[I], I, this)
                }, x.prototype.keys = function() {
                    var v = [];
                    return this.forEach(function(T, I) {
                        v.push(I)
                    }), O(v)
                }, x.prototype.values = function() {
                    var v = [];
                    return this.forEach(function(T) {
                        v.push(T)
                    }), O(v)
                }, x.prototype.entries = function() {
                    var v = [];
                    return this.forEach(function(T, I) {
                        v.push([I, T])
                    }), O(v)
                }, u.iterable && (x.prototype[Symbol.iterator] = x.prototype.entries);

                function D(v) {
                    if (v.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    v.bodyUsed = !0
                }

                function H(v) {
                    return new Promise(function(T, I) {
                        v.onload = function() {
                            T(v.result)
                        }, v.onerror = function() {
                            I(v.error)
                        }
                    })
                }

                function B(v) {
                    var T = new FileReader,
                        I = H(T);
                    return T.readAsArrayBuffer(v), I
                }

                function ae(v) {
                    var T = new FileReader,
                        I = H(T);
                    return T.readAsText(v), I
                }

                function we(v) {
                    for (var T = new Uint8Array(v), I = new Array(T.length), U = 0; U < T.length; U++) I[U] = String.fromCharCode(T[U]);
                    return I.join("")
                }

                function ce(v) {
                    if (v.slice) return v.slice(0);
                    var T = new Uint8Array(v.byteLength);
                    return T.set(new Uint8Array(v)), T.buffer
                }

                function ue() {
                    return this.bodyUsed = !1, this._initBody = function(v) {
                        this.bodyUsed = this.bodyUsed, this._bodyInit = v, v ? typeof v == "string" ? this._bodyText = v : u.blob && Blob.prototype.isPrototypeOf(v) ? this._bodyBlob = v : u.formData && FormData.prototype.isPrototypeOf(v) ? this._bodyFormData = v : u.searchParams && URLSearchParams.prototype.isPrototypeOf(v) ? this._bodyText = v.toString() : u.arrayBuffer && u.blob && f(v) ? (this._bodyArrayBuffer = ce(v.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(v) || y(v)) ? this._bodyArrayBuffer = ce(v) : this._bodyText = v = Object.prototype.toString.call(v) : this._bodyText = "", this.headers.get("content-type") || (typeof v == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(v) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, u.blob && (this.blob = function() {
                        var v = D(this);
                        if (v) return v;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            var v = D(this);
                            return v || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        } else return this.blob().then(B)
                    }), this.text = function() {
                        var v = D(this);
                        if (v) return v;
                        if (this._bodyBlob) return ae(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(we(this._bodyArrayBuffer));
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
                    var T = v.toUpperCase();
                    return he.indexOf(T) > -1 ? T : v
                }

                function C(v, T) {
                    if (!(this instanceof C)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    T = T || {};
                    var I = T.body;
                    if (v instanceof C) {
                        if (v.bodyUsed) throw new TypeError("Already read");
                        this.url = v.url, this.credentials = v.credentials, T.headers || (this.headers = new x(v.headers)), this.method = v.method, this.mode = v.mode, this.signal = v.signal, !I && v._bodyInit != null && (I = v._bodyInit, v.bodyUsed = !0)
                    } else this.url = String(v);
                    if (this.credentials = T.credentials || this.credentials || "same-origin", (T.headers || !this.headers) && (this.headers = new x(T.headers)), this.method = _e(T.method || this.method || "GET"), this.mode = T.mode || this.mode || null, this.signal = T.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && I) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(I), (this.method === "GET" || this.method === "HEAD") && (T.cache === "no-store" || T.cache === "no-cache")) {
                        var U = /([?&])_=[^&]*/;
                        if (U.test(this.url)) this.url = this.url.replace(U, "$1_=" + new Date().getTime());
                        else {
                            var M = /\?/;
                            this.url += (M.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                        }
                    }
                }
                C.prototype.clone = function() {
                    return new C(this, {
                        body: this._bodyInit
                    })
                };

                function jr(v) {
                    var T = new FormData;
                    return v.trim().split("&").forEach(function(I) {
                        if (I) {
                            var U = I.split("="),
                                M = U.shift().replace(/\+/g, " "),
                                R = U.join("=").replace(/\+/g, " ");
                            T.append(decodeURIComponent(M), decodeURIComponent(R))
                        }
                    }), T
                }

                function Ur(v) {
                    var T = new x,
                        I = v.replace(/\r?\n[\t ]+/g, " ");
                    return I.split("\r").map(function(U) {
                        return U.indexOf(`
`) === 0 ? U.substr(1, U.length) : U
                    }).forEach(function(U) {
                        var M = U.split(":"),
                            R = M.shift().trim();
                        if (R) {
                            var Z = M.join(":").trim();
                            T.append(R, Z)
                        }
                    }), T
                }
                ue.call(C.prototype);

                function oe(v, T) {
                    if (!(this instanceof oe)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    T || (T = {}), this.type = "default", this.status = T.status === void 0 ? 200 : T.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = T.statusText === void 0 ? "" : "" + T.statusText, this.headers = new x(T.headers), this.url = T.url || "", this._initBody(v)
                }
                ue.call(oe.prototype), oe.prototype.clone = function() {
                    return new oe(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new x(this.headers),
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
                oe.redirect = function(v, T) {
                    if (Ge.indexOf(T) === -1) throw new RangeError("Invalid status code");
                    return new oe(null, {
                        status: T,
                        headers: {
                            location: v
                        }
                    })
                }, s.DOMException = a.DOMException;
                try {
                    new s.DOMException
                } catch {
                    s.DOMException = function(T, I) {
                        this.message = T, this.name = I;
                        var U = Error(T);
                        this.stack = U.stack
                    }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException
                }

                function Ie(v, T) {
                    return new Promise(function(I, U) {
                        var M = new C(v, T);
                        if (M.signal && M.signal.aborted) return U(new s.DOMException("Aborted", "AbortError"));
                        var R = new XMLHttpRequest;

                        function Z() {
                            R.abort()
                        }
                        R.onload = function() {
                            var Q = {
                                status: R.status,
                                statusText: R.statusText,
                                headers: Ur(R.getAllResponseHeaders() || "")
                            };
                            Q.url = "responseURL" in R ? R.responseURL : Q.headers.get("X-Request-URL");
                            var Ze = "response" in R ? R.response : R.responseText;
                            setTimeout(function() {
                                I(new oe(Ze, Q))
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

                        function te(Q) {
                            try {
                                return Q === "" && a.location.href ? a.location.href : Q
                            } catch {
                                return Q
                            }
                        }
                        R.open(M.method, te(M.url), !0), M.credentials === "include" ? R.withCredentials = !0 : M.credentials === "omit" && (R.withCredentials = !1), "responseType" in R && (u.blob ? R.responseType = "blob" : u.arrayBuffer && M.headers.get("Content-Type") && M.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (R.responseType = "arraybuffer")), T && typeof T.headers == "object" && !(T.headers instanceof x) ? Object.getOwnPropertyNames(T.headers).forEach(function(Q) {
                            R.setRequestHeader(Q, b(T.headers[Q]))
                        }) : M.headers.forEach(function(Q, Ze) {
                            R.setRequestHeader(Ze, Q)
                        }), M.signal && (M.signal.addEventListener("abort", Z), R.onreadystatechange = function() {
                            R.readyState === 4 && M.signal.removeEventListener("abort", Z)
                        }), R.send(typeof M._bodyInit > "u" ? null : M._bodyInit)
                    })
                }
                return Ie.polyfill = !0, a.fetch || (a.fetch = Ie, a.Headers = x, a.Request = C, a.Response = oe), s.Headers = x, s.Request = C, s.Response = oe, s.fetch = Ie, s
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = r.fetch ? r : n;
        e = i.fetch, e.default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e
    })(Ai, Ai.exports);
    var gh = function() {
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
        Ii = typeof Symbol < "u" && Symbol,
        yh = gh,
        mh = function() {
            return typeof Ii != "function" || typeof Symbol != "function" || typeof Ii("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : yh()
        },
        vh = "Function.prototype.bind called on incompatible ",
        zr = Array.prototype.slice,
        bh = Object.prototype.toString,
        Eh = "[object Function]",
        Sh = function(e) {
            var r = this;
            if (typeof r != "function" || bh.call(r) !== Eh) throw new TypeError(vh + r);
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
        wh = Sh,
        Ln = Function.prototype.bind || wh,
        Oh = Ln,
        Th = Oh.call(Function.call, Object.prototype.hasOwnProperty),
        j, gt = SyntaxError,
        Ho = Function,
        st = TypeError,
        Kr = function(t) {
            try {
                return Ho('"use strict"; return (' + t + ").constructor;")()
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
        kh = We ? function() {
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
        et = mh(),
        Pe = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        tt = {},
        xh = typeof Uint8Array > "u" ? j : Pe(Uint8Array),
        at = {
            "%AggregateError%": typeof AggregateError > "u" ? j : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? j : ArrayBuffer,
            "%ArrayIteratorPrototype%": et ? Pe([][Symbol.iterator]()) : j,
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
            "%Function%": Ho,
            "%GeneratorFunction%": tt,
            "%Int8Array%": typeof Int8Array > "u" ? j : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? j : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? j : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": et ? Pe(Pe([][Symbol.iterator]())) : j,
            "%JSON%": typeof JSON == "object" ? JSON : j,
            "%Map%": typeof Map > "u" ? j : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !et ? j : Pe(new Map()[Symbol.iterator]()),
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
            "%SetIteratorPrototype%": typeof Set > "u" || !et ? j : Pe(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? j : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": et ? Pe("" [Symbol.iterator]()) : j,
            "%Symbol%": et ? Symbol : j,
            "%SyntaxError%": gt,
            "%ThrowTypeError%": kh,
            "%TypedArray%": xh,
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
        Rh = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = Kr("async function () {}");
            else if (e === "%GeneratorFunction%") r = Kr("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = Kr("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var i = t("%AsyncGenerator%");
                i && (r = Pe(i.prototype))
            }
            return at[e] = r, r
        },
        Pi = {
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
        Kt = Ln,
        yr = Th,
        Ah = Kt.call(Function.call, Array.prototype.concat),
        Ih = Kt.call(Function.apply, Array.prototype.splice),
        Ni = Kt.call(Function.call, String.prototype.replace),
        mr = Kt.call(Function.call, String.prototype.slice),
        Ph = Kt.call(Function.call, RegExp.prototype.exec),
        Nh = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        Dh = /\\(\\)?/g,
        $h = function(e) {
            var r = mr(e, 0, 1),
                n = mr(e, -1);
            if (r === "%" && n !== "%") throw new gt("invalid intrinsic syntax, expected closing `%`");
            if (n === "%" && r !== "%") throw new gt("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return Ni(e, Nh, function(o, s, a, u) {
                i[i.length] = a ? Ni(u, Dh, "$1") : s || o
            }), i
        },
        Lh = function(e, r) {
            var n = e,
                i;
            if (yr(Pi, n) && (i = Pi[n], n = "%" + i[0] + "%"), yr(at, n)) {
                var o = at[n];
                if (o === tt && (o = Rh(n)), typeof o > "u" && !r) throw new st("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: i,
                    name: n,
                    value: o
                }
            }
            throw new gt("intrinsic " + e + " does not exist!")
        },
        Cn = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new st("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new st('"allowMissing" argument must be a boolean');
            if (Ph(/^%?[^%]*%?$/g, e) === null) throw new gt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var n = $h(e),
                i = n.length > 0 ? n[0] : "",
                o = Lh("%" + i + "%", r),
                s = o.name,
                a = o.value,
                u = !1,
                f = o.alias;
            f && (i = f[0], Ih(n, Ah([0, 1], f)));
            for (var h = 1, y = !0; h < n.length; h += 1) {
                var m = n[h],
                    b = mr(m, 0, 1),
                    O = mr(m, -1);
                if ((b === '"' || b === "'" || b === "`" || O === '"' || O === "'" || O === "`") && b !== O) throw new gt("property names with quotes must have matching quotes");
                if ((m === "constructor" || !y) && (u = !0), i += "." + m, s = "%" + i + "%", yr(at, s)) a = at[s];
                else if (a != null) {
                    if (!(m in a)) {
                        if (!r) throw new st("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (We && h + 1 >= n.length) {
                        var x = We(a, m);
                        y = !!x, y && "get" in x && !("originalValue" in x.get) ? a = x.get : a = a[m]
                    } else y = yr(a, m), a = a[m];
                    y && !u && (at[s] = a)
                }
            }
            return a
        },
        Wo = {
            exports: {}
        };
    (function(t) {
        var e = Ln,
            r = Cn,
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
    })(Wo);
    var Ch = Wo.exports,
        zo = Cn,
        Ko = Ch,
        jh = Ko(zo("String.prototype.indexOf")),
        Uh = function(e, r) {
            var n = zo(e, !!r);
            return typeof n == "function" && jh(e, ".prototype.") > -1 ? Ko(n) : n
        },
        jn = Cn,
        kt = Uh;
    jn("%TypeError%");
    jn("%WeakMap%", !0);
    jn("%Map%", !0);
    kt("WeakMap.prototype.get", !0);
    kt("WeakMap.prototype.set", !0);
    kt("WeakMap.prototype.has", !0);
    kt("Map.prototype.get", !0);
    kt("Map.prototype.set", !0);
    kt("Map.prototype.has", !0);
    var Mh = String.prototype.replace,
        Bh = /%20/g,
        Jr = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Vo = {
            default: Jr.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return Mh.call(t, Bh, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: Jr.RFC1738,
            RFC3986: Jr.RFC3986
        },
        Fh = Vo,
        Xr = Object.prototype.hasOwnProperty,
        Ye = Array.isArray,
        Oe = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        qh = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    n = r.obj[r.prop];
                if (Ye(n)) {
                    for (var i = [], o = 0; o < n.length; ++o) typeof n[o] < "u" && i.push(n[o]);
                    r.obj[r.prop] = i
                }
            }
        },
        Jo = function(e, r) {
            for (var n = r && r.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
            return n
        },
        Gh = function t(e, r, n) {
            if (!r) return e;
            if (typeof r != "object") {
                if (Ye(e)) e.push(r);
                else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !Xr.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var i = e;
            return Ye(e) && !Ye(r) && (i = Jo(e, n)), Ye(e) && Ye(r) ? (r.forEach(function(o, s) {
                if (Xr.call(e, s)) {
                    var a = e[s];
                    a && typeof a == "object" && o && typeof o == "object" ? e[s] = t(a, o, n) : e.push(o)
                } else e[s] = o
            }), e) : Object.keys(r).reduce(function(o, s) {
                var a = r[s];
                return Xr.call(o, s) ? o[s] = t(o[s], a, n) : o[s] = a, o
            }, i)
        },
        Yh = function(e, r) {
            return Object.keys(r).reduce(function(n, i) {
                return n[i] = r[i], n
            }, e)
        },
        Hh = function(t, e, r) {
            var n = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n)
            } catch {
                return n
            }
        },
        Wh = function(e, r, n, i, o) {
            if (e.length === 0) return e;
            var s = e;
            if (typeof e == "symbol" ? s = Symbol.prototype.toString.call(e) : typeof e != "string" && (s = String(e)), n === "iso-8859-1") return escape(s).replace(/%u[0-9a-f]{4}/gi, function(h) {
                return "%26%23" + parseInt(h.slice(2), 16) + "%3B"
            });
            for (var a = "", u = 0; u < s.length; ++u) {
                var f = s.charCodeAt(u);
                if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || o === Fh.RFC1738 && (f === 40 || f === 41)) {
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
        zh = function(e) {
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
            return qh(r), e
        },
        Kh = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        Vh = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        Jh = function(e, r) {
            return [].concat(e, r)
        },
        Xh = function(e, r) {
            if (Ye(e)) {
                for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
                return n
            }
            return r(e)
        },
        Xo = {
            arrayToObject: Jo,
            assign: Yh,
            combine: Jh,
            compact: zh,
            decode: Hh,
            encode: Wh,
            isBuffer: Vh,
            isRegExp: Kh,
            maybeMap: Xh,
            merge: Gh
        },
        Qh = Xo,
        Qo = Vo,
        Zh = Date.prototype.toISOString,
        Di = Qo.default;
    Qh.encode, Qo.formatters[Di];
    var e_ = Xo;
    e_.decode;
    typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof pe < "u" && (pe.WebSocket || pe.MozWebSocket));
    var Zo = {
            exports: {}
        },
        ct = typeof Reflect == "object" ? Reflect : null,
        $i = ct && typeof ct.apply == "function" ? ct.apply : function(e, r, n) {
            return Function.prototype.apply.call(e, r, n)
        },
        sr;
    ct && typeof ct.ownKeys == "function" ? sr = ct.ownKeys : Object.getOwnPropertySymbols ? sr = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : sr = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function t_(t) {
        console && console.warn && console.warn(t)
    }
    var es = Number.isNaN || function(e) {
        return e !== e
    };

    function q() {
        q.init.call(this)
    }
    Zo.exports = q;
    Zo.exports.once = o_;
    q.EventEmitter = q;
    q.prototype._events = void 0;
    q.prototype._eventsCount = 0;
    q.prototype._maxListeners = void 0;
    var Li = 10;

    function Pr(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(q, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Li
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || es(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            Li = t
        }
    });
    q.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    q.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || es(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function ts(t) {
        return t._maxListeners === void 0 ? q.defaultMaxListeners : t._maxListeners
    }
    q.prototype.getMaxListeners = function() {
        return ts(this)
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
        if (typeof u == "function") $i(u, this, r);
        else
            for (var f = u.length, h = ss(u, f), n = 0; n < f; ++n) $i(h[n], this, r);
        return !0
    };

    function rs(t, e, r, n) {
        var i, o, s;
        if (Pr(r), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), s === void 0) s = o[e] = r, ++t._eventsCount;
        else if (typeof s == "function" ? s = o[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), i = ts(t), i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, t_(a)
        }
        return t
    }
    q.prototype.addListener = function(e, r) {
        return rs(this, e, r, !1)
    };
    q.prototype.on = q.prototype.addListener;
    q.prototype.prependListener = function(e, r) {
        return rs(this, e, r, !0)
    };

    function r_() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function ns(t, e, r) {
        var n = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            i = r_.bind(n);
        return i.listener = r, n.wrapFn = i, i
    }
    q.prototype.once = function(e, r) {
        return Pr(r), this.on(e, ns(this, e, r)), this
    };
    q.prototype.prependOnceListener = function(e, r) {
        return Pr(r), this.prependListener(e, ns(this, e, r)), this
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
            o === 0 ? n.shift() : n_(n, o), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r)
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

    function is(t, e, r) {
        var n = t._events;
        if (n === void 0) return [];
        var i = n[e];
        return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? i_(i) : ss(i, i.length)
    }
    q.prototype.listeners = function(e) {
        return is(this, e, !0)
    };
    q.prototype.rawListeners = function(e) {
        return is(this, e, !1)
    };
    q.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : os.call(t, e)
    };
    q.prototype.listenerCount = os;

    function os(t) {
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

    function ss(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r
    }

    function n_(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function i_(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function o_(t, e) {
        return new Promise(function(r, n) {
            function i(s) {
                t.removeListener(e, o), n(s)
            }

            function o() {
                typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments))
            }
            as(t, e, o, {
                once: !0
            }), e !== "error" && s_(t, i, {
                once: !0
            })
        })
    }

    function s_(t, e, r) {
        typeof t.on == "function" && as(t, "error", e, r)
    }

    function as(t, e, r, n) {
        if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function i(o) {
            n.once && t.removeEventListener(e, i), r(o)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }

    function a_(...t) {
        console.log(...t)
    }

    function c_(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var Ci = {
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
            var y = h,
                m = f,
                b = {
                    stringify: y,
                    parse: m
                },
                O = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                x = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                D = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
                H = new RegExp("^" + D + "+");

            function B(d) {
                return (d || "").toString().replace(H, "")
            }
            var ae = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(p, g) {
                        return ue(g.protocol) ? p.replace(/\\/g, "/") : p
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d+)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                we = {
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
                    S;
                if (d.protocol === "blob:") l = new C(unescape(d.pathname), {});
                else if (_ === "string") {
                    l = new C(d, {});
                    for (S in we) delete l[S]
                } else if (_ === "object") {
                    for (S in d) S in we || (l[S] = d[S]);
                    l.slashes === void 0 && (l.slashes = O.test(d.href))
                }
                return l
            }

            function ue(d) {
                return d === "file:" || d === "ftp:" || d === "http:" || d === "https:" || d === "ws:" || d === "wss:"
            }

            function he(d, p) {
                d = B(d), p = p || {};
                var g = x.exec(d),
                    l = g[1] ? g[1].toLowerCase() : "",
                    _ = !!g[2],
                    S = !!g[3],
                    w = 0,
                    k;
                return _ ? S ? (k = g[2] + g[3] + g[4], w = g[2].length + g[3].length) : (k = g[2] + g[4], w = g[2].length) : S ? (k = g[3] + g[4], w = g[3].length) : k = g[4], l === "file:" ? w >= 2 && (k = k.slice(2)) : ue(l) ? k = g[4] : l ? _ && (k = k.slice(2)) : w >= 2 && ue(p.protocol) && (k = g[4]), {
                    protocol: l,
                    slashes: _ || ue(l),
                    slashesCount: w,
                    rest: k
                }
            }

            function _e(d, p) {
                if (d === "") return p;
                for (var g = (p || "/").split("/").slice(0, -1).concat(d.split("/")), l = g.length, _ = g[l - 1], S = !1, w = 0; l--;) g[l] === "." ? g.splice(l, 1) : g[l] === ".." ? (g.splice(l, 1), w++) : w && (l === 0 && (S = !0), g.splice(l, 1), w--);
                return S && g.unshift(""), (_ === "." || _ === "..") && g.push(""), g.join("/")
            }

            function C(d, p, g) {
                if (d = B(d), !(this instanceof C)) return new C(d, p, g);
                var l, _, S, w, k, A, fe = ae.slice(),
                    ve = typeof p,
                    P = this,
                    qr = 0;
                for (ve !== "object" && ve !== "string" && (g = p, p = null), g && typeof g != "function" && (g = b.parse), p = ce(p), _ = he(d || "", p), l = !_.protocol && !_.slashes, P.slashes = _.slashes || l && p.slashes, P.protocol = _.protocol || p.protocol || "", d = _.rest, (P.protocol === "file:" || !_.slashes && (_.protocol || _.slashesCount < 2 || !ue(P.protocol))) && (fe[3] = [/(.*)/, "pathname"]); qr < fe.length; qr++) {
                    if (w = fe[qr], typeof w == "function") {
                        d = w(d, P);
                        continue
                    }
                    S = w[0], A = w[1], S !== S ? P[A] = d : typeof S == "string" ? ~(k = d.indexOf(S)) && (typeof w[2] == "number" ? (P[A] = d.slice(0, k), d = d.slice(k + w[2])) : (P[A] = d.slice(k), d = d.slice(0, k))) : (k = S.exec(d)) && (P[A] = k[1], d = d.slice(0, k.index)), P[A] = P[A] || l && w[3] && p[A] || "", w[4] && (P[A] = P[A].toLowerCase())
                }
                g && (P.query = g(P.query)), l && p.slashes && P.pathname.charAt(0) !== "/" && (P.pathname !== "" || p.pathname !== "") && (P.pathname = _e(P.pathname, p.pathname)), P.pathname.charAt(0) !== "/" && ue(P.protocol) && (P.pathname = "/" + P.pathname), i(P.port, P.protocol) || (P.host = P.hostname, P.port = ""), P.username = P.password = "", P.auth && (w = P.auth.split(":"), P.username = w[0] || "", P.password = w[1] || ""), P.origin = P.protocol !== "file:" && ue(P.protocol) && P.host ? P.protocol + "//" + P.host : "null", P.href = P.toString()
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
                for (var S = 0; S < ae.length; S++) {
                    var w = ae[S];
                    w[4] && (l[w[1]] = l[w[1]].toLowerCase())
                }
                return l.origin = l.protocol !== "file:" && ue(l.protocol) && l.host ? l.protocol + "//" + l.host : "null", l.href = l.toString(), l
            }

            function Ur(d) {
                (!d || typeof d != "function") && (d = b.stringify);
                var p, g = this,
                    l = g.protocol;
                l && l.charAt(l.length - 1) !== ":" && (l += ":");
                var _ = l + (g.slashes || ue(g.protocol) ? "//" : "");
                return g.username && (_ += g.username, g.password && (_ += ":" + g.password), _ += "@"), _ += g.host + g.pathname, p = typeof g.query == "object" ? d(g.query) : g.query, p && (_ += p.charAt(0) !== "?" ? "?" + p : p), g.hash && (_ += g.hash), _
            }
            C.prototype = {
                set: jr,
                toString: Ur
            }, C.extractProtocol = he, C.location = ce, C.trimLeft = B, C.qs = b;
            var oe = C;

            function Ge(d, p) {
                setTimeout(function(g) {
                    return d.call(g)
                }, 4, p)
            }

            function Ie(d, p) {
                typeof process < "u" && console[d].call(null, p)
            }

            function v(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) || g.push(l)
                }), g
            }

            function T(d, p) {
                d === void 0 && (d = []);
                var g = [];
                return d.forEach(function(l) {
                    p(l) && g.push(l)
                }), g
            }
            var I = function() {
                this.listeners = {}
            };
            I.prototype.addEventListener = function(p, g) {
                typeof g == "function" && (Array.isArray(this.listeners[p]) || (this.listeners[p] = []), T(this.listeners[p], function(l) {
                    return l === g
                }).length === 0 && this.listeners[p].push(g))
            }, I.prototype.removeEventListener = function(p, g) {
                var l = this.listeners[p];
                this.listeners[p] = v(l, function(_) {
                    return _ === g
                })
            }, I.prototype.dispatchEvent = function(p) {
                for (var g = this, l = [], _ = arguments.length - 1; _-- > 0;) l[_] = arguments[_ + 1];
                var S = p.type,
                    w = this.listeners[S];
                return Array.isArray(w) ? (w.forEach(function(k) {
                    l.length > 0 ? k.apply(g, l) : k.call(g, p)
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
                    var k = w.roomMemberships[g];
                    S = k || []
                }
                return l ? S.filter(function(A) {
                    return A !== l
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
                Z = {
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
                Q = function() {};
            Q.prototype.stopPropagation = function() {}, Q.prototype.stopImmediatePropagation = function() {}, Q.prototype.initEvent = function(p, g, l) {
                p === void 0 && (p = "undefined"), g === void 0 && (g = !1), l === void 0 && (l = !1), this.type = "" + p, this.bubbles = !!g, this.cancelable = !!l
            };
            var Ze = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(te.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(te.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var _ = l.bubbles,
                            S = l.cancelable;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Q),
                Ws = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(te.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(te.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            S = l.cancelable,
                            w = l.data,
                            k = l.origin,
                            A = l.lastEventId,
                            fe = l.ports;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.canncelBubble = !1, this.bubbles = _ ? !!_ : !1, this.origin = "" + k, this.ports = typeof fe > "u" ? null : fe, this.data = typeof w > "u" ? null : w, this.lastEventId = "" + (A || "")
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Q),
                zs = function(d) {
                    function p(g, l) {
                        if (l === void 0 && (l = {}), d.call(this), !g) throw new TypeError(te.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof l != "object") throw new TypeError(te.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var _ = l.bubbles,
                            S = l.cancelable,
                            w = l.code,
                            k = l.reason,
                            A = l.wasClean;
                        this.type = "" + g, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.cancelBubble = !1, this.bubbles = _ ? !!_ : !1, this.code = typeof w == "number" ? parseInt(w, 10) : 0, this.reason = "" + (k || ""), this.wasClean = A ? !!A : !1
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p
                }(Q);

            function ge(d) {
                var p = d.type,
                    g = d.target,
                    l = new Ze(p);
                return g && (l.target = g, l.srcElement = g, l.currentTarget = g), l
            }

            function At(d) {
                var p = d.type,
                    g = d.origin,
                    l = d.data,
                    _ = d.target,
                    S = new Ws(p, {
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
                S || (S = p === Z.CLOSE_NORMAL || p === Z.CLOSE_NO_STATUS);
                var w = new zs(l, {
                    code: p,
                    reason: g,
                    wasClean: S
                });
                return _ && (w.target = _, w.srcElement = _, w.currentTarget = _), w
            }

            function Vn(d, p, g) {
                d.readyState = V.CLOSING;
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
                    R.removeWebSocket(d, d.url), d.readyState = V.CLOSED, d.dispatchEvent(_), d.dispatchEvent(S), l && l.dispatchEvent(_, l)
                }, d)
            }

            function Ks(d, p, g) {
                d.readyState = V.CLOSING;
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
                    R.removeWebSocket(d, d.url), d.readyState = V.CLOSED, d.dispatchEvent(w), d.dispatchEvent(_), d.dispatchEvent(S), l && l.dispatchEvent(_, l)
                }, d)
            }

            function Xt(d) {
                return Object.prototype.toString.call(d) !== "[object Blob]" && !(d instanceof ArrayBuffer) && (d = String(d)), d
            }
            var Mr = new WeakMap;

            function Jn(d) {
                if (Mr.has(d)) return Mr.get(d);
                var p = new Proxy(d, {
                    get: function(l, _) {
                        return _ === "close" ? function(w) {
                            w === void 0 && (w = {});
                            var k = w.code || Z.CLOSE_NORMAL,
                                A = w.reason || "";
                            Vn(p, k, A)
                        } : _ === "send" ? function(w) {
                            w = Xt(w), d.dispatchEvent(At({
                                type: "message",
                                data: w,
                                origin: this.url,
                                target: d
                            }))
                        } : _ === "on" ? function(w, k) {
                            d.addEventListener("server::" + w, k)
                        } : _ === "target" ? d : l[_]
                    }
                });
                return Mr.set(d, p), p
            }

            function Vs(d) {
                var p = encodeURIComponent(d).match(/%[89ABab]/g);
                return d.length + (p ? p.length : 0)
            }

            function Js(d) {
                var p = new oe(d),
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
            var V = function(d) {
                function p(l, _) {
                    d.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = Js(l), _ = Xs(_), this.protocol = _[0] || "", this.binaryType = "blob", this.readyState = p.CONNECTING;
                    var S = Jn(this),
                        w = R.attachWebSocket(S, this.url);
                    Ge(function() {
                        if (w)
                            if (w.options.verifyClient && typeof w.options.verifyClient == "function" && !w.options.verifyClient()) this.readyState = p.CLOSED, Ie("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), R.removeWebSocket(S, this.url), this.dispatchEvent(ge({
                                type: "error",
                                target: this
                            })), this.dispatchEvent(de({
                                type: "close",
                                target: this,
                                code: Z.CLOSE_NORMAL
                            }));
                            else {
                                if (w.options.selectProtocol && typeof w.options.selectProtocol == "function") {
                                    var A = w.options.selectProtocol(_),
                                        fe = A !== "",
                                        ve = _.indexOf(A) !== -1;
                                    if (fe && !ve) {
                                        this.readyState = p.CLOSED, Ie("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), R.removeWebSocket(S, this.url), this.dispatchEvent(ge({
                                            type: "error",
                                            target: this
                                        })), this.dispatchEvent(de({
                                            type: "close",
                                            target: this,
                                            code: Z.CLOSE_NORMAL
                                        }));
                                        return
                                    }
                                    this.protocol = A
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
                            code: Z.CLOSE_NORMAL
                        })), Ie("error", "WebSocket connection to '" + this.url + "' failed")
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
                    var w = At({
                            type: "server::message",
                            origin: this.url,
                            data: Xt(_)
                        }),
                        k = R.serverLookup(this.url);
                    k && Ge(function() {
                        S.dispatchEvent(w, _)
                    }, k)
                }, p.prototype.close = function(_, S) {
                    if (_ !== void 0 && (typeof _ != "number" || _ !== 1e3 && (_ < 3e3 || _ > 4999))) throw new TypeError(te.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + _ + " is neither.");
                    if (S !== void 0) {
                        var w = Vs(S);
                        if (w > 123) throw new SyntaxError(te.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === p.CLOSING || this.readyState === p.CLOSED)) {
                        var k = Jn(this);
                        this.readyState === p.CONNECTING ? Ks(k, _ || Z.CLOSE_ABNORMAL, S) : Vn(k, _ || Z.CLOSE_NO_STATUS, S)
                    }
                }, Object.defineProperties(p.prototype, g), p
            }(I);
            V.CONNECTING = 0, V.prototype.CONNECTING = V.CONNECTING, V.OPEN = 1, V.prototype.OPEN = V.OPEN, V.CLOSING = 2, V.prototype.CLOSING = V.CLOSING, V.CLOSED = 3, V.prototype.CLOSED = V.CLOSED;
            var Qs = function(d) {
                return d.reduce(function(p, g) {
                    return p.indexOf(g) > -1 ? p : p.concat(g)
                }, [])
            };

            function Xn() {
                return typeof window < "u" ? window : typeof process == "object" && typeof c_ == "function" && typeof pe == "object" ? pe : this
            }
            var Qn = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                Br = function(d) {
                    function p(g, l) {
                        l === void 0 && (l = Qn), d.call(this);
                        var _ = new oe(g);
                        _.pathname || (_.pathname = "/"), this.url = _.toString(), this.originalWebSocket = null;
                        var S = R.attachServer(this, this.url);
                        if (!S) throw this.dispatchEvent(ge({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, Qn, l), this.options.mock && this.mockWebsocket()
                    }
                    return d && (p.__proto__ = d), p.prototype = Object.create(d && d.prototype), p.prototype.constructor = p, p.prototype.mockWebsocket = function() {
                        var l = Xn();
                        this.originalWebSocket = l.WebSocket, l.WebSocket = V
                    }, p.prototype.restoreWebsocket = function() {
                        var l = Xn();
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
                            k = R.websocketsLookup(this.url);
                        R.removeServer(this.url), k.forEach(function(A) {
                            A.readyState = V.CLOSED, A.dispatchEvent(de({
                                type: "close",
                                target: A.target,
                                code: _ || Z.CLOSE_NORMAL,
                                reason: S || "",
                                wasClean: w
                            }))
                        }), this.dispatchEvent(de({
                            type: "close"
                        }), this)
                    }, p.prototype.emit = function(l, _, S) {
                        var w = this;
                        S === void 0 && (S = {});
                        var k = S.websockets;
                        k || (k = R.websocketsLookup(this.url)), typeof S != "object" || arguments.length > 3 ? (_ = Array.prototype.slice.call(arguments, 1, arguments.length), _ = _.map(function(A) {
                            return Xt(A)
                        })) : _ = Xt(_), k.forEach(function(A) {
                            Array.isArray(_) ? A.dispatchEvent.apply(A, [At({
                                type: l,
                                data: _,
                                origin: w.url,
                                target: A.target
                            })].concat(_)) : A.dispatchEvent(At({
                                type: l,
                                data: _,
                                origin: w.url,
                                target: A.target
                            }))
                        })
                    }, p.prototype.clients = function() {
                        return R.websocketsLookup(this.url)
                    }, p.prototype.to = function(l, _, S) {
                        var w = this;
                        S === void 0 && (S = []);
                        var k = this,
                            A = Qs(S.concat(R.websocketsLookup(this.url, l, _)));
                        return {
                            to: function(fe, ve) {
                                return w.to.call(w, fe, ve, A)
                            },
                            emit: function(ve, P) {
                                k.emit(ve, P, {
                                    websockets: A
                                })
                            }
                        }
                    }, p.prototype.in = function() {
                        for (var l = [], _ = arguments.length; _--;) l[_] = arguments[_];
                        return this.to.apply(null, l)
                    }, p.prototype.simulate = function(l) {
                        var _ = R.websocketsLookup(this.url);
                        l === "error" && _.forEach(function(S) {
                            S.readyState = V.CLOSED, S.dispatchEvent(ge({
                                type: "error"
                            }))
                        })
                    }, p
                }(I);
            Br.of = function(p) {
                return new Br(p)
            };
            var It = function(d) {
                function p(l, _) {
                    var S = this;
                    l === void 0 && (l = "socket.io"), _ === void 0 && (_ = ""), d.call(this), this.binaryType = "blob";
                    var w = new oe(l);
                    w.pathname || (w.pathname = "/"), this.url = w.toString(), this.readyState = p.CONNECTING, this.protocol = "", this.target = this, typeof _ == "string" || typeof _ == "object" && _ !== null ? this.protocol = _ : Array.isArray(_) && _.length > 0 && (this.protocol = _[0]);
                    var k = R.attachWebSocket(this, this.url);
                    Ge(function() {
                        k ? (this.readyState = p.OPEN, k.dispatchEvent(ge({
                            type: "connection"
                        }), k, this), k.dispatchEvent(ge({
                            type: "connect"
                        }), k, this), this.dispatchEvent(ge({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = p.CLOSED, this.dispatchEvent(ge({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(de({
                            type: "close",
                            target: this,
                            code: Z.CLOSE_NORMAL
                        })), Ie("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(A) {
                        S.dispatchEvent(de({
                            type: "disconnect",
                            target: A.target,
                            code: A.code
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
                            code: Z.CLOSE_NORMAL
                        })), _ && _.dispatchEvent(de({
                            type: "disconnect",
                            target: this,
                            code: Z.CLOSE_NORMAL
                        }), _), this
                    }
                }, p.prototype.disconnect = function() {
                    return this.close()
                }, p.prototype.emit = function(_) {
                    for (var S = [], w = arguments.length - 1; w-- > 0;) S[w] = arguments[w + 1];
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var k = At({
                            type: _,
                            origin: this.url,
                            data: S
                        }),
                        A = R.serverLookup(this.url);
                    return A && A.dispatchEvent.apply(A, [k].concat(S)), this
                }, p.prototype.send = function(_) {
                    return this.emit("message", _), this
                }, g.broadcast.get = function() {
                    if (this.readyState !== p.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var l = this,
                        _ = R.serverLookup(this.url);
                    if (!_) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(w, k) {
                            return _.emit(w, k, {
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
                    for (var S = this, w = [], k = arguments.length - 1; k-- > 0;) w[k] = arguments[k + 1];
                    var A = _.type,
                        fe = this.listeners[A];
                    if (!Array.isArray(fe)) return !1;
                    fe.forEach(function(ve) {
                        w.length > 0 ? ve.apply(S, w) : ve.call(S, _.data ? _.data : _)
                    })
                }, Object.defineProperties(p.prototype, g), p
            }(I);
            It.CONNECTING = 0, It.OPEN = 1, It.CLOSING = 2, It.CLOSED = 3;
            var Fr = function(p, g) {
                return new It(p, g)
            };
            Fr.connect = function(p, g) {
                return Fr(p, g)
            };
            var Zs = Br,
                ea = V,
                ta = Fr;
            r.Server = Zs, r.WebSocket = ea, r.SocketIO = ta, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(Ci, Ci.exports);
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
                    var O = ((a.x - h) * m + (a.y - y) * b) / (m * m + b * b);
                    O > 1 ? (h = f.x, y = f.y) : O > 0 && (h += m * O, y += b * O)
                }
                return m = a.x - h, b = a.y - y, m * m + b * b
            }

            function n(a, u) {
                for (var f = a[0], h = [f], y, m = 1, b = a.length; m < b; m++) y = a[m], e(y, f) > u && (h.push(y), f = y);
                return f !== y && h.push(y), h
            }

            function i(a, u, f, h, y) {
                for (var m = h, b, O = u + 1; O < f; O++) {
                    var x = r(a[O], a[u], a[f]);
                    x > m && (b = O, m = x)
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
    const cs = Object.prototype.toString;

    function us(t) {
        switch (cs.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Rt(t, Error)
        }
    }

    function xt(t, e) {
        return cs.call(t) === `[object ${e}]`
    }

    function fs(t) {
        return xt(t, "ErrorEvent")
    }

    function ji(t) {
        return xt(t, "DOMError")
    }

    function f_(t) {
        return xt(t, "DOMException")
    }

    function Je(t) {
        return xt(t, "String")
    }

    function ls(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function yt(t) {
        return xt(t, "Object")
    }

    function Un(t) {
        return typeof Event < "u" && Rt(t, Event)
    }

    function l_(t) {
        return typeof Element < "u" && Rt(t, Element)
    }

    function p_(t) {
        return xt(t, "RegExp")
    }

    function Mn(t) {
        return !!(t && t.then && typeof t.then == "function")
    }

    function d_(t) {
        return yt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function h_(t) {
        return typeof t == "number" && t !== t
    }

    function Rt(t, e) {
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

    function Bn(t, e, r) {
        const n = r || me,
            i = n.__SENTRY__ = n.__SENTRY__ || {};
        return i[t] || (i[t] = e())
    }
    const __ = Vt(),
        g_ = 80;

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
        else if (r.id && n.push(`#${r.id}`), i = r.className, i && Je(i))
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
    class ne extends Error {
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
        if (!e) throw new ne(`Invalid Sentry Dsn: ${t}`);
        const [r, n, i = "", o, s = "", a] = e.slice(1);
        let u = "",
            f = a;
        const h = f.split("/");
        if (h.length > 1 && (u = h.slice(0, -1).join("/"), f = h.pop()), f) {
            const y = f.match(/^\d+/);
            y && (f = y[0])
        }
        return ps({
            host: o,
            pass: i,
            path: u,
            projectId: f,
            port: s,
            protocol: r,
            publicKey: n
        })
    }

    function ps(t) {
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
                if (!t[o]) throw new ne(`Invalid Sentry Dsn: ${o} missing`)
            }), !r.match(/^\d+$/)) throw new ne(`Invalid Sentry Dsn: Invalid projectId ${r}`);
        if (!b_(n)) throw new ne(`Invalid Sentry Dsn: Invalid protocol ${n}`);
        if (e && isNaN(parseInt(e, 10))) throw new ne(`Invalid Sentry Dsn: Invalid port ${e}`);
        return !0
    }

    function w_(t) {
        const e = typeof t == "string" ? E_(t) : ps(t);
        return S_(e), e
    }
    const O_ = "Sentry Logger ",
        vr = ["debug", "info", "warn", "error", "log", "assert", "trace"];

    function ds(t) {
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

    function Ui() {
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
                t && ds(() => {
                    me.console[r](`${O_}[${r}]:`, ...n)
                })
            }
        }) : vr.forEach(r => {
            e[r] = () => {}
        }), e
    }
    let $;
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? $ = Bn("logger", Ui) : $ = Ui();

    function jt(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function Mi(t, e) {
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

    function T_(t, e, r = !1) {
        return Je(t) ? p_(e) ? e.test(t) : Je(e) ? r ? t === e : t.includes(e) : !1 : !1
    }

    function Dr(t, e = [], r = !1) {
        return e.some(n => T_(t, n, r))
    }

    function ee(t, e, r) {
        if (!(e in t)) return;
        const n = t[e],
            i = r(n);
        if (typeof i == "function") try {
            hs(i, n)
        } catch {}
        t[e] = i
    }

    function Fn(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            configurable: !0
        })
    }

    function hs(t, e) {
        const r = e.prototype || {};
        t.prototype = e.prototype = r, Fn(t, "__sentry_original__", e)
    }

    function qn(t) {
        return t.__sentry_original__
    }

    function k_(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function _s(t) {
        if (us(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...Fi(t)
        };
        if (Un(t)) {
            const e = {
                type: t.type,
                target: Bi(t.target),
                currentTarget: Bi(t.currentTarget),
                ...Fi(t)
            };
            return typeof CustomEvent < "u" && Rt(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function Bi(t) {
        try {
            return l_(t) ? on(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function Fi(t) {
        if (typeof t == "object" && t !== null) {
            const e = {};
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function x_(t, e = 40) {
        const r = Object.keys(_s(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return jt(r[0], e);
        for (let n = r.length; n > 0; n--) {
            const i = r.slice(0, n).join(", ");
            if (!(i.length > e)) return n === r.length ? i : jt(i, e)
        }
        return ""
    }

    function Gn(t) {
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
    const gs = 50,
        qi = /\(error: (.*)\)/;

    function ys(...t) {
        const e = t.sort((r, n) => r[0] - n[0]).map(r => r[1]);
        return (r, n = 0) => {
            const i = [],
                o = r.split(`
`);
            for (let s = n; s < o.length; s++) {
                const a = o[s];
                if (a.length > 1024) continue;
                const u = qi.test(a) ? a.replace(qi, "$1") : a;
                if (!u.match(/\S*Error: /)) {
                    for (const f of e) {
                        const h = f(u);
                        if (h) {
                            i.push(h);
                            break
                        }
                    }
                    if (i.length >= gs) break
                }
            }
            return A_(i)
        }
    }

    function R_(t) {
        return Array.isArray(t) ? ys(...t) : t
    }

    function A_(t) {
        if (!t.length) return [];
        const e = t.slice(0, gs),
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
    const an = Vt();

    function ms() {
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

    function I_() {
        if (!ms()) return !1;
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
        Gi = {};

    function N_(t) {
        if (!Gi[t]) switch (Gi[t] = !0, t) {
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
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("unknown instrumentation type:", t);
                return
        }
    }

    function De(t, e) {
        Ut[t] = Ut[t] || [], Ut[t].push(e), N_(t)
    }

    function Se(t, e) {
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

    function D_() {
        "console" in K && vr.forEach(function(t) {
            t in K.console && ee(K.console, t, function(e) {
                return function(...r) {
                    Se("console", {
                        args: r,
                        level: t
                    }), e && e.apply(K.console, r)
                }
            })
        })
    }

    function $_() {
        I_() && ee(K, "fetch", function(t) {
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
                return Se("fetch", {
                    ...i
                }), t.apply(K, e).then(o => (Se("fetch", {
                    ...i,
                    endTimestamp: Date.now(),
                    response: o
                }), o), o => {
                    throw Se("fetch", {
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

    function Yi(t) {
        return typeof t == "string" ? t : t ? un(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
    }

    function L_(t) {
        if (t.length === 0) return {
            method: "GET",
            url: ""
        };
        if (t.length === 2) {
            const [r, n] = t;
            return {
                url: Yi(r),
                method: un(n, "method") ? String(n.method).toUpperCase() : "GET"
            }
        }
        const e = t[0];
        return {
            url: Yi(e),
            method: un(e, "method") ? String(e.method).toUpperCase() : "GET"
        }
    }

    function C_() {
        if (!("XMLHttpRequest" in K)) return;
        const t = XMLHttpRequest.prototype;
        ee(t, "open", function(e) {
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
                        Se("xhr", {
                            args: r,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: this
                        })
                    }
                };
                return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? ee(this, "onreadystatechange", function(s) {
                    return function(...a) {
                        return o(), s.apply(this, a)
                    }
                }) : this.addEventListener("readystatechange", o), ee(this, "setRequestHeader", function(s) {
                    return function(...a) {
                        const [u, f] = a, h = this[$t];
                        return h && (h.request_headers[u.toLowerCase()] = f), s.apply(this, a)
                    }
                }), e.apply(this, r)
            }
        }), ee(t, "send", function(e) {
            return function(...r) {
                const n = this[$t];
                return n && r[0] !== void 0 && (n.body = r[0]), Se("xhr", {
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
            if (er = n, Se("history", {
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
                    er = s, Se("history", {
                        from: o,
                        to: s
                    })
                }
                return r.apply(this, n)
            }
        }
        ee(K.history, "pushState", e), ee(K.history, "replaceState", e)
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

    function Hi(t, e = !1) {
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
        const t = Se.bind(null, "dom"),
            e = Hi(t, !0);
        K.document.addEventListener("click", e, !1), K.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
            const n = K[r] && K[r].prototype;
            !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (ee(n, "addEventListener", function(i) {
                return function(o, s, a) {
                    if (o === "click" || o == "keypress") try {
                        const u = this,
                            f = u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {},
                            h = f[o] = f[o] || {
                                refCount: 0
                            };
                        if (!h.handler) {
                            const y = Hi(t);
                            h.handler = y, i.call(this, o, y, a)
                        }
                        h.refCount++
                    } catch {}
                    return i.call(this, o, s, a)
                }
            }), ee(n, "removeEventListener", function(i) {
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
            return Se("error", {
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
            return Se("unhandledrejection", t), ir && !ir.__SENTRY_LOADER__ ? ir.apply(this, arguments) : !0
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

    function ut() {
        const t = me,
            e = t.crypto || t.msCrypto;
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
        const r = e && e.getRandomValues ? () => e.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, n => (n ^ (r() & 15) >> n / 4).toString(16))
    }

    function vs(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function $e(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        const n = vs(t);
        return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>"
    }

    function fn(t, e, r) {
        const n = t.exception = t.exception || {},
            i = n.values = n.values || [],
            o = i[0] = i[0] || {};
        o.value || (o.value = e || ""), o.type || (o.type = r || "Error")
    }

    function Ft(t, e) {
        const r = vs(t);
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

    function Wi(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            Fn(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function bs(t) {
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
            return ln("", t, e, r)
        } catch (n) {
            return {
                ERROR: `**non-serializable** (${n})`
            }
        }
    }

    function Es(t, e = 3, r = 100 * 1024) {
        const n = Ne(t, e);
        return Q_(n) > r ? Es(t, e - 1, r) : n
    }

    function ln(t, e, r = 1 / 0, n = 1 / 0, i = Y_()) {
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
            return ln("", b, u - 1, n, i)
        } catch {}
        const h = Array.isArray(e) ? [] : {};
        let y = 0;
        const m = _s(e);
        for (const b in m) {
            if (!Object.prototype.hasOwnProperty.call(m, b)) continue;
            if (y >= n) {
                h[b] = "[MaxProperties ~]";
                break
            }
            const O = m[b];
            h[b] = ln(b, O, u - 1, n, i), y++
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
    var ke;
    (function(t) {
        t[t.PENDING = 0] = "PENDING";
        const r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        const n = 2;
        t[t.REJECTED = n] = "REJECTED"
    })(ke || (ke = {}));

    function Xe(t) {
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
            this._state = ke.PENDING
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
                    if (Mn(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === ke.PENDING) return;
                const e = this._handlers.slice();
                this._handlers = [], e.forEach(r => {
                    r[0] || (this._state === ke.RESOLVED && r[1](this._value), this._state === ke.REJECTED && r[2](this._value), r[0] = !0)
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
            if (!r()) return br(new ne("Not adding Promise because buffer limit was reached."));
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
                    Xe(y).then(() => {
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
    const eg = ["fatal", "error", "warning", "log", "info", "debug"];

    function tg(t) {
        return t === "warn" ? "warning" : eg.includes(t) ? t : "log"
    }
    const Ss = Vt(),
        pn = {
            nowSeconds: () => Date.now() / 1e3
        };

    function rg() {
        const {
            performance: t
        } = Ss;
        if (!t || !t.now) return;
        const e = Date.now() - t.now();
        return {
            now: () => t.now(),
            timeOrigin: e
        }
    }

    function ng() {
        try {
            return K_(Hs, "perf_hooks").performance
        } catch {
            return
        }
    }
    const en = z_() ? ng() : rg(),
        zi = en === void 0 ? pn : {
            nowSeconds: () => (en.timeOrigin + en.now()) / 1e3
        },
        $r = pn.nowSeconds.bind(pn),
        ws = zi.nowSeconds.bind(zi);
    (() => {
        const {
            performance: t
        } = Ss;
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

    function Ki(t, e) {
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

    function og(t, e) {
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
        const r = typeof t.data == "string" ? dn(t.data, e) : t.data;
        return [Gn({
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

    function Vi(t) {
        return cg[t]
    }

    function Os(t) {
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
                trace: Gn({
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
    const Ts = "production";

    function gg(t) {
        const e = ws(),
            r = {
                sid: ut(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => mg(r)
            };
        return t && mt(r, t), r
    }

    function mt(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || ws(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ut()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
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
        }), mt(t, r)
    }

    function mg(t) {
        return Gn({
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
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && u === null && $.log(`Event processor "${a.id}" dropped event`), Mn(u) ? u.then(f => this._notifyEventProcessors(e, f, n, i + 1).then(o)).then(null, s) : this._notifyEventProcessors(e, u, n, i + 1).then(o).then(null, s)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? bs(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function ks() {
        return Bn("globalEventProcessors", () => [])
    }

    function Yn(t) {
        ks().push(t)
    }
    const xs = 4,
        bg = 100;
    class Rs {
        constructor(e, r = new ze, n = xs) {
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
                maxBreadcrumbs: s = bg
            } = i.getOptions && i.getOptions() || {};
            if (s <= 0) return;
            const u = {
                    timestamp: $r(),
                    ...e
                },
                f = o ? ds(() => o(u, r)) : u;
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
            const r = Ji(this);
            try {
                e(this)
            } finally {
                Ji(r)
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
            n && yg(n), this._sendSessionUpdate(), r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: n
            } = this.getStackTop(), {
                release: i,
                environment: o = Ts
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
            const i = Lr().__SENTRY__;
            if (i && i.extensions && typeof i.extensions[e] == "function") return i.extensions[e].apply(this, r);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Lr() {
        return me.__SENTRY__ = me.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, me
    }

    function Ji(t) {
        const e = Lr(),
            r = hn(e);
        return As(e, t), r
    }

    function X() {
        const t = Lr();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            const e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return Eg(t)
    }

    function Eg(t = Lr()) {
        return (!Sg(t) || hn(t).isOlderThan(xs)) && As(t, new Rs), hn(t)
    }

    function Sg(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function hn(t) {
        return Bn("hub", () => new Rs, t)
    }

    function As(t, e) {
        if (!t) return !1;
        const r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function wg(t, e) {
        return X().captureException(t, {
            captureContext: e
        })
    }

    function Og(t, e) {
        const r = typeof e == "string" ? e : void 0,
            n = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return X().captureMessage(t, r, n)
    }

    function Is(t) {
        X().setTags(t)
    }

    function Tg(t) {
        X().withScope(t)
    }
    const kg = "7";

    function xg(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function Rg(t) {
        return `${xg(t)}${t.projectId}/envelope/`
    }

    function Ag(t, e) {
        return k_({
            sentry_key: t.publicKey,
            sentry_version: kg,
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
        const i = Os(r),
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
        const i = Os(r),
            o = t.type && t.type !== "replay_event" ? t.type : "event";
        Pg(t, r && r.sdk);
        const s = ug(t, i, n, e);
        return delete t.sdkProcessingMetadata, Jt(s, [
            [{
                type: o
            }, t]
        ])
    }
    const Xi = [];

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
        Array.isArray(r) ? n = [...e, ...r] : typeof r == "function" ? n = bs(r(e)) : n = e;
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
            r && Ps(r, e)
        }), e
    }

    function Ps(t, e) {
        e[t.name] = t, Xi.indexOf(t.name) === -1 && (t.setupOnce(Yn, X), Xi.push(t.name), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(`Integration installed: ${t.name}`))
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
            event_id: e.event_id || r.event_id || ut(),
            timestamp: e.timestamp || $r()
        }, a = r.integrations || t.integrations.map(h => h.name);
        Mg(s, t), Fg(s, a), e.type === void 0 && Bg(s, t.stackParser);
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
        return f.then(h => typeof i == "number" && i > 0 ? qg(h, i, o) : h)
    }

    function Mg(t, e) {
        const {
            environment: r,
            release: n,
            dist: i,
            maxValueLength: o = 250
        } = e;
        "environment" in t || (t.environment = "environment" in e ? r : Ts), t.release === void 0 && n !== void 0 && (t.release = n), t.dist === void 0 && i !== void 0 && (t.dist = i), t.message && (t.message = jt(t.message, o));
        const s = t.exception && t.exception.values && t.exception.values[0];
        s && s.value && (s.value = jt(s.value, o));
        const a = t.request;
        a && a.url && (a.url = jt(a.url, o))
    }
    const Qi = new WeakMap;

    function Bg(t, e) {
        const r = me._sentryDebugIds;
        if (!r) return;
        let n;
        const i = Qi.get(e);
        i ? n = i : (n = new Map, Qi.set(e, n));
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
    const Zi = "Not capturing exception because it's already been captured.";
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
                this._dsn = w_(e.dsn);
                const r = Ig(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, r, n) {
            if (Wi(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(Zi);
                return
            }
            let i = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(o => this._captureEvent(o, r, n)).then(o => {
                i = o
            })), i
        }
        captureMessage(e, r, n, i) {
            let o = n && n.event_id;
            const s = ls(e) ? this.eventFromMessage(String(e), r, n) : this.eventFromException(e, n);
            return this._process(s.then(a => this._captureEvent(a, n, i)).then(a => {
                o = a
            })), o
        }
        captureEvent(e, r, n) {
            if (r && r.originalException && Wi(r.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(Zi);
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
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = Cg(this._options.integrations), this._integrationsInitialized = !0)
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
            Ps(e, this._integrations)
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
                    o.logLevel === "log" ? $.log(o.message) : $.warn(o)
                }
            })
        }
        _processEvent(e, r, n) {
            const i = this.getOptions(),
                {
                    sampleRate: o
                } = i;
            if (!this._isEnabled()) return br(new ne("SDK not enabled, will not capture event.", "log"));
            const s = Ds(e),
                a = Ns(e),
                u = e.type || "error",
                f = `before send for type \`${u}\``;
            if (a && typeof o == "number" && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), br(new ne(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
            const h = u === "replay_event" ? "replay" : u;
            return this._prepareEvent(e, r, n).then(y => {
                if (y === null) throw this.recordDroppedEvent("event_processor", h, e), new ne("An event processor returned `null`, will not send event.", "log");
                if (r.data && r.data.__sentry__ === !0) return y;
                const b = Yg(i, y, r);
                return Gg(b, f)
            }).then(y => {
                if (y === null) throw this.recordDroppedEvent("before_send", h, e), new ne(`${f} returned \`null\`, will not send event.`, "log");
                const m = n && n.getSession();
                !s && m && this._updateSessionFromEvent(m, y);
                const b = y.transaction_info;
                if (s && b && y.transaction !== e.transaction) {
                    const O = "custom";
                    y.transaction_info = {
                        ...b,
                        source: O
                    }
                }
                return this.sendEvent(y, r), y
            }).then(null, y => {
                throw y instanceof ne ? y : (this.captureException(y, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: y
                }), new ne(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${y}`))
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

    function Gg(t, e) {
        const r = `${e} must return \`null\` or a valid event.`;
        if (Mn(t)) return t.then(n => {
            if (!yt(n) && n !== null) throw new ne(r);
            return n
        }, n => {
            throw new ne(`${e} rejected with ${n}`)
        });
        if (!yt(t) && t !== null) throw new ne(r);
        return t
    }

    function Yg(t, e, r) {
        const {
            beforeSend: n,
            beforeSendTransaction: i
        } = t;
        return Ns(e) && n ? n(e, r) : Ds(e) && i ? i(e, r) : e
    }

    function Ns(t) {
        return t.type === void 0
    }

    function Ds(t) {
        return t.type === "transaction"
    }

    function Hg(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? $.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const r = X();
        r.getScope().update(e.initialScope);
        const i = new t(e);
        r.bindClient(i)
    }
    const Wg = 30;

    function $s(t, e, r = Z_(t.bufferSize || Wg)) {
        let n = {};
        const i = s => r.drain(s);

        function o(s) {
            const a = [];
            if (Ki(s, (y, m) => {
                    const b = Vi(m);
                    if (hg(n, b)) {
                        const O = eo(y, m);
                        t.recordDroppedEvent("ratelimit_backoff", b, O)
                    } else a.push(y)
                }), a.length === 0) return Xe();
            const u = Jt(s[0], a),
                f = y => {
                    Ki(u, (m, b) => {
                        const O = eo(m, b);
                        t.recordDroppedEvent(y, Vi(b), O)
                    })
                },
                h = () => e({
                    body: og(u, t.textEncoder)
                }).then(y => (y.statusCode !== void 0 && (y.statusCode < 200 || y.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Sentry responded with status code ${y.statusCode} to sent event.`), n = _g(n, y), y), y => {
                    throw f("network_error"), y
                });
            return r.add(h).then(y => y, y => {
                if (y instanceof ne) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error("Skipped sending event because buffer is full."), f("queue_overflow"), Xe();
                throw y
            })
        }
        return o.__sentry__baseTransport__ = !0, {
            send: o,
            flush: i
        }
    }

    function eo(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
    }
    const to = "7.52.1";
    let ro;
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
            ro = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const r = qn(this) || this;
                    return ro.apply(r, e)
                }
            } catch {}
        }
    }
    qt.__initStatic();
    const zg = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
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
                            f = Kg(s._options, u);
                        return Vg(i, f) ? null : i
                    }
                }
                return i
            };
            n.id = this.name, e(n)
        }
    }
    ft.__initStatic();

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
        return e.ignoreInternal && ty(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being internal Sentry Error.
Event: ${$e(t)}`), !0) : Jg(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${$e(t)}`), !0) : Xg(t, e.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${$e(t)}`), !0) : Qg(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${$e(t)}.
Url: ${Er(t)}`), !0) : Zg(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`Event dropped due to not being matched by \`allowUrls\` option.
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
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error(`Cannot extract message for event ${$e(t)}`), []
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
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.error(`Cannot extract url for event ${$e(t)}`), null
        }
    }
    const Y = me;
    let _n = 0;

    function Ls() {
        return _n > 0
    }

    function ny() {
        _n++, setTimeout(() => {
            _n--
        })
    }

    function vt(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            const i = t.__sentry_wrapped__;
            if (i) return i;
            if (qn(t)) return t
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
                throw ny(), Tg(s => {
                    s.addEventProcessor(a => (e.mechanism && (fn(a, void 0, void 0), Ft(a, e.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: i
                    }, a)), wg(o)
                }), o
            }
        };
        try {
            for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        } catch {}
        hs(n, t), Fn(t, "__sentry_wrapped__", n);
        try {
            Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return n
    }

    function Cs(t, e) {
        const r = Hn(t, e),
            n = {
                type: e && e.name,
                value: ay(e)
            };
        return r.length && (n.stacktrace = {
            frames: r
        }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n
    }

    function iy(t, e, r, n) {
        const o = X().getClient(),
            s = o && o.getOptions().normalizeDepth,
            a = {
                exception: {
                    values: [{
                        type: Un(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: `Non-Error ${n?"promise rejection":"exception"} captured with keys: ${x_(e)}`
                    }]
                },
                extra: {
                    __serialized__: Es(e, s)
                }
            };
        if (r) {
            const u = Hn(t, r);
            u.length && (a.exception.values[0].stacktrace = {
                frames: u
            })
        }
        return a
    }

    function tn(t, e) {
        return {
            exception: {
                values: [Cs(t, e)]
            }
        }
    }

    function Hn(t, e) {
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
            o = Wn(t, e, i, n);
        return Ft(o), o.level = "error", r && r.event_id && (o.event_id = r.event_id), Xe(o)
    }

    function uy(t, e, r = "info", n, i) {
        const o = n && n.syntheticException || void 0,
            s = gn(t, e, o, i);
        return s.level = r, n && n.event_id && (s.event_id = n.event_id), Xe(s)
    }

    function Wn(t, e, r, n, i) {
        let o;
        if (fs(e) && e.error) return tn(t, e.error);
        if (ji(e) || f_(e)) {
            const s = e;
            if ("stack" in e) o = tn(t, e);
            else {
                const a = s.name || (ji(s) ? "DOMError" : "DOMException"),
                    u = s.message ? `${a}: ${s.message}` : a;
                o = gn(t, u, r, n), fn(o, u)
            }
            return "code" in s && (o.tags = {
                ...o.tags,
                "DOMException.code": `${s.code}`
            }), o
        }
        return us(e) ? tn(t, e) : yt(e) || Un(e) ? (o = iy(t, e, r, i), Ft(o, {
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
            const o = Hn(t, r);
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
        js = "Breadcrumbs";
    class Gt {
        static __initStatic() {
            this.id = js
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
            this.options.sentry && X().addBreadcrumb({
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
            o && o > or && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn(`\`dom.maxStringLength\` cannot exceed ${or}, but a value of ${o} was configured. Sentry will use ${or} instead.`), o = or), typeof i == "string" && (i = [i]);
            try {
                const s = r.event;
                n = _y(s) ? on(s.target, {
                    keyAttrs: i,
                    maxStringLength: o
                }) : on(s, {
                    keyAttrs: i,
                    maxStringLength: o
                })
            } catch {
                n = "<unknown>"
            }
            n.length !== 0 && X().addBreadcrumb({
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
            message: Mi(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${Mi(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        X().addBreadcrumb(e, {
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
        X().addBreadcrumb({
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
                X().addBreadcrumb({
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
                X().addBreadcrumb({
                    category: "fetch",
                    data: n,
                    type: "http"
                }, i)
            }
    }

    function hy(t) {
        let e = t.from,
            r = t.to;
        const n = Zr(Y.location.href);
        let i = Zr(e);
        const o = Zr(r);
        i.path || (i = n), n.protocol === o.protocol && n.host === o.host && (r = o.relative), n.protocol === i.protocol && n.host === i.host && (e = i.relative), X().addBreadcrumb({
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
    class my extends He {
        constructor(e) {
            const r = Y.SENTRY_SDK_SOURCE || W_();
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${r}:@sentry/browser`,
                    version: to
                }],
                version: to
            }, super(e), e.sendClientReports && Y.document && Y.document.addEventListener("visibilitychange", () => {
                Y.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return cy(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", n) {
            return uy(this._options.stackParser, e, r, n, this._options.attachStacktrace)
        }
        sendEvent(e, r) {
            const n = this.getIntegrationById(js);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(e), super.sendEvent(e, r)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("SDK not enabled, will not capture user feedback.");
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
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log("Sending outcomes:", e);
            const r = fg(e, this._options.tunnel && Nr(this._dsn));
            this._sendEnvelope(r)
        }
    }
    let Lt;

    function vy() {
        if (Lt) return Lt;
        if (cn(Y.fetch)) return Lt = Y.fetch.bind(Y);
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
        return Lt = e.bind(Y)
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
        return $s(t, i)
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
        return $s(t, e)
    }
    const Cr = "?",
        Oy = 30,
        Ty = 40,
        ky = 50;

    function zn(t, e, r, n) {
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
                const [n, i] = Us(e[1] || Cr, e[2]);
                return zn(i, n, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
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
                return [i, n] = Us(i, n), zn(n, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        $y = [ky, Dy],
        Ly = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Cy = t => {
            const e = Ly.exec(t);
            return e ? zn(e[2], e[1] || Cr, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        jy = [Ty, Cy],
        Uy = [Iy, $y, jy],
        My = ys(...Uy),
        Us = (t, e) => {
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
            const [e, r, n] = Fs();
            if (!e.getIntegration(je)) return;
            const {
                msg: i,
                url: o,
                line: s,
                column: a,
                error: u
            } = t;
            if (Ls() || u && u.__sentry_own_request__) return;
            const f = u === void 0 && Je(i) ? Gy(i, o, s, a) : Ms(Wn(r, u || i, void 0, n, !1), o, s, a);
            f.level = "error", Bs(e, u, f, "onerror")
        })
    }

    function Fy() {
        De("unhandledrejection", t => {
            const [e, r, n] = Fs();
            if (!e.getIntegration(je)) return;
            let i = t;
            try {
                "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
            } catch {}
            if (Ls() || i && i.__sentry_own_request__) return !0;
            const o = ls(i) ? qy(i) : Wn(r, i, void 0, n, !0);
            o.level = "error", Bs(e, i, o, "onunhandledrejection")
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
        let o = fs(t) ? t.message : t,
            s = "Error";
        const a = o.match(i);
        return a && (s = a[1], o = a[2]), Ms({
            exception: {
                values: [{
                    type: s,
                    value: o
                }]
            }
        }, e, r, n)
    }

    function Ms(t, e, r, n) {
        const i = t.exception = t.exception || {},
            o = i.values = i.values || [],
            s = o[0] = o[0] || {},
            a = s.stacktrace = s.stacktrace || {},
            u = a.frames = a.frames || [],
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            h = isNaN(parseInt(r, 10)) ? void 0 : r,
            y = Je(e) && e.length > 0 ? e : m_();
        return u.length === 0 && u.push({
            colno: f,
            filename: y,
            function: "?",
            in_app: !0,
            lineno: h
        }), t
    }

    function Yy(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.log(`Global Handler attached: ${t}`)
    }

    function Bs(t, e, r, n) {
        Ft(r, {
            handled: !1,
            type: n
        }), t.captureEvent(r, {
            originalException: e
        })
    }

    function Fs() {
        const t = X(),
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
            this._options.setTimeout && ee(Y, "setTimeout", no), this._options.setInterval && ee(Y, "setInterval", no), this._options.requestAnimationFrame && ee(Y, "requestAnimationFrame", Wy), this._options.XMLHttpRequest && "XMLHttpRequest" in Y && ee(XMLHttpRequest.prototype, "send", zy);
            const e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : Hy).forEach(Ky)
        }
    }
    Yt.__initStatic();

    function no(t) {
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

    function Wy(t) {
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

    function zy(t) {
        return function(...e) {
            const r = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i => {
                i in r && typeof r[i] == "function" && ee(r, i, function(o) {
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
                        a = qn(o);
                    return a && (s.mechanism.data.handler = Be(a)), vt(o, s)
                })
            }), t.apply(this, e)
        }
    }

    function Ky(t) {
        const e = Y,
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (ee(r, "addEventListener", function(n) {
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
        }), ee(r, "removeEventListener", function(n) {
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
    class lt {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        __init() {
            this.name = lt.id
        }
        constructor(e = {}) {
            lt.prototype.__init.call(this), this._key = e.key || Vy, this._limit = e.limit || Jy
        }
        setupOnce() {
            const e = X().getClient();
            e && Yn((r, n) => {
                const i = X().getIntegration(lt);
                return i ? Xy(e.getOptions().stackParser, i._key, i._limit, r, n) : r
            })
        }
    }
    lt.__initStatic();

    function Xy(t, e, r, n, i) {
        if (!n.exception || !n.exception.values || !i || !Rt(i.originalException, Error)) return n;
        const o = qs(t, r, i.originalException, e);
        return n.exception.values = [...o, ...n.exception.values], n
    }

    function qs(t, e, r, n, i = []) {
        if (!Rt(r[n], Error) || i.length + 1 >= e) return i;
        const o = Cs(t, r[n]);
        return qs(t, e, r[n], n, [o, ...i])
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
            Yn(e => {
                if (X().getIntegration(pt)) {
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
                        if (Qy(i, o._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("Event dropped due to being a duplicate of previously captured event."), null
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

    function Qy(t, e) {
        return e ? !!(Zy(t, e) || em(t, e)) : !1
    }

    function Zy(t, e) {
        const r = t.message,
            n = e.message;
        return !(!r && !n || r && !n || !r && n || r !== n || !Ys(t, e) || !Gs(t, e))
    }

    function em(t, e) {
        const r = io(e),
            n = io(t);
        return !(!r || !n || r.type !== n.type || r.value !== n.value || !Ys(t, e) || !Gs(t, e))
    }

    function Gs(t, e) {
        let r = oo(t),
            n = oo(e);
        if (!r && !n) return !0;
        if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return !1;
        for (let i = 0; i < n.length; i++) {
            const o = n[i],
                s = r[i];
            if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function) return !1
        }
        return !0
    }

    function Ys(t, e) {
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

    function io(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function oo(t) {
        const e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const tm = [new ft, new qt, new Yt, new Gt, new je, new lt, new dt, new pt];

    function rm(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = tm), t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__), Y.SENTRY_RELEASE && Y.SENTRY_RELEASE.id && (t.release = Y.SENTRY_RELEASE.id)), t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: R_(t.stackParser || My),
            integrations: Lg(t),
            transport: t.transport || (ms() ? Ey : wy)
        };
        Hg(my, e), t.autoSessionTracking && nm()
    }

    function so(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function nm() {
        if (typeof Y.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && $.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const t = X();
        t.captureSession && (so(t), De("history", ({
            from: e,
            to: r
        }) => {
            e === void 0 || e === r || so(X())
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
        gm = "NÃO FOI POSSÍVEL CARREGAR. TOQUE PARA TENTAR DE NOVO.",
        ym = {
            RETRY: gm
        },
        ao = {
            en: om,
            fr: am,
            it: um,
            de: lm,
            es: dm,
            "es-XL": _m,
            "pt-BR": ym
        };
    let mm = class {
        constructor(e) {
            le(this, "manifest");
            le(this, "registered", {});
            le(this, "register", e => {
                this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
            });
            le(this, "load", async e => {
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
            le(this, "connect", (e, r) => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(e, r)
            });
            le(this, "mount", e => {
                var s, a;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const u = this.registered.info(e);
                    Is({
                        branch: u.branch,
                        "app.tag": u.tag,
                        "app.type": u.type,
                        "app.version": u.version,
                        "app.wrapper": u.wrapper
                    }), Oo.pageView(u.tag)
                }
                gr.setup(e.app, ((s = e.room) == null ? void 0 : s.code) ?? ((a = e.client) == null ? void 0 : a.code));
                const n = document.querySelectorAll("[data-tv-style]"),
                    o = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(u => {
                        const f = document.createElement("link");
                        return f.rel = "stylesheet", f.href = u.href, f.setAttribute("data-tv-style", ""), f
                    });
                document.head.append(...o), n.forEach(u => u.remove()), this.registered.unmount = this.registered.mount(e) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            le(this, "debugLoad", async (e, r) => {
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
                i = ao[n] ?? ao.en;
            e.classList.add("error"), r.textContent = i.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    };
    const co = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        vm = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        bm = t => {
            rm({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: vm,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const n = r.originalException;
                        if (n.code === co.EcastEntityNotFound) return Og("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (n.code === co.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const n = await window.tv.onError(e, r);
                        n && (e.contexts = e.contexts || {}, e.contexts.debug = n)
                    } catch (n) {
                        console.error("failed to send states to ecast", n)
                    }
                    return e
                }
            }), Is({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    let uo;
    async function fo() {
        if (!uo) try {
            uo = await navigator.wakeLock.request("screen")
        } catch (t) {
            console.warn(t)
        }
    }
    const Em = async () => {
        navigator.wakeLock && (await fo(), document.addEventListener("visibilitychange", () => {
            document.visibilityState === "visible" && fo()
        }))
    };

    function Sm(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(n => {
                e += `        <a href="/${window.tv.debugMap[r][n]}" target="_blank">${n}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
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

    function lo(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = wm(), document.getElementsByTagName("html")[0].append(e);
        const n = document.getElementById("app");
        n.innerHTML = Sm(t)
    }

    function Om() {
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

    function Tm() {
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

    function km() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = Tm(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = Om()
    }
    const xm = {
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
                    const e = fi(t.data.galleryId);
                    return !e || !e.categoryId ? {
                        redirect: "/"
                    } : (t.data.categoryId = e.categoryId, {
                        load: e.tag
                    })
                }
            }, {
                path: "/render/:galleryId/:artifactId",
                handler: t => {
                    const e = fi(t.data.galleryId);
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
                    km()
                }
            }, {
                path: "/debug",
                handler: () => {
                    lo()
                }
            }, {
                path: ["/debug/:app", "/debug/local/:app"],
                handler: t => {
                    lo(t.data.app)
                }
            }, {
                path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
                debugLoad: "local"
            }, {
                path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
                debugLoad: "cloud"
            }]
        },
        Rm = {
            hmrApps: ["teeko-web"],
            hostnames: ["teeko.jackboxgames.com"],
            routes: [{
                path: ["/", "/event"],
                load: "@teeko-web"
            }]
        };
    class Am {
        constructor(e) {
            le(this, "hmrApp", "loader");
            le(this, "sites");
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
    const Im = "production",
        Pm = 1,
        Nm = {
            branch: "main",
            sha: "102f787d840bd78081fe35c99f65ffc38b2a6092",
            lastUpdated: 1697666734518,
            version: "5.296.119",
            type: "production"
        },
        Dm = {
            main: {
                sha: "102f787d840bd78081fe35c99f65ffc38b2a6092",
                lastUpdated: 1697666734518,
                version: "5.296.119",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.285.119"
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
                        version: "5.276.119"
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
                        version: "5.276.119"
                    },
                    awshirt2: {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/awshirt2",
                        version: "5.291.119"
                    },
                    "nopus-opus": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/nopus-opus",
                        version: "5.294.119"
                    },
                    "risky-text": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/risky-text",
                        version: "5.296.119"
                    },
                    "time-trivia": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/time-trivia",
                        version: "5.279.119"
                    },
                    "us-them": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/pp10/us-them",
                        version: "5.286.119"
                    }
                }
            }
        },
        $m = {
            environment: Im,
            version: Pm,
            loader: Nm,
            branches: Dm
        },
        Kn = $m;
    let Lm = mm;
    const Dt = new Lm(Kn);
    window.tv = {
        debugLoad: Dt.debugLoad,
        load: Dt.load,
        register: Dt.register,
        mount: Dt.mount,
        connect: Dt.connect,
        manifest: Kn
    };
    bm(Kn);
    Oo.setup();
    gr.setup();
    Em();
    new Am([xm, Rm])
});
export default Cm();
//# sourceMappingURL=80b07b1a.js.map