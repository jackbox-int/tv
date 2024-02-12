var Of = Object.defineProperty;
var Pf = (t, e, r) => e in t ? Of(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var Vf = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var le = (t, e, r) => (Pf(t, typeof e != "symbol" ? e + "" : e, r), r);
var ST = Vf((mT, Af) => {
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
        new MutationObserver(s => {
            for (const a of s)
                if (a.type === "childList")
                    for (const f of a.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f)
        }).observe(document, {
            childList: !0,
            subtree: !0
        });

        function r(s) {
            const a = {};
            return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
        }

        function i(s) {
            if (s.ep) return;
            s.ep = !0;
            const a = r(s);
            fetch(s.href, a)
        }
    })();
    var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function kf(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }
    var Pe = {
            DEBUG: !1,
            LIB_VERSION: "2.48.1"
        },
        te;
    if (typeof window > "u") {
        var Ti = {
            hostname: ""
        };
        te = {
            navigator: {
                userAgent: ""
            },
            document: {
                location: Ti,
                referrer: ""
            },
            screen: {
                width: 0,
                height: 0
            },
            location: Ti
        }
    } else te = window;
    var vr = Array.prototype,
        Mf = Function.prototype,
        Ps = Object.prototype,
        Fe = vr.slice,
        Yt = Ps.toString,
        Ur = Ps.hasOwnProperty,
        ie = te.console,
        qe = te.navigator,
        F = te.document,
        rr = te.opera,
        pr = te.screen,
        Ce = qe.userAgent,
        Yr = Mf.bind,
        gi = vr.forEach,
        Li = vr.indexOf,
        Si = vr.map,
        $f = Array.isArray,
        pn = {},
        o = {
            trim: function(t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        G = {
            log: function() {
                if (Pe.DEBUG && !o.isUndefined(ie) && ie) try {
                    ie.log.apply(ie, arguments)
                } catch {
                    o.each(arguments, function(e) {
                        ie.log(e)
                    })
                }
            },
            warn: function() {
                if (Pe.DEBUG && !o.isUndefined(ie) && ie) {
                    var t = ["Mixpanel warning:"].concat(o.toArray(arguments));
                    try {
                        ie.warn.apply(ie, t)
                    } catch {
                        o.each(t, function(r) {
                            ie.warn(r)
                        })
                    }
                }
            },
            error: function() {
                if (Pe.DEBUG && !o.isUndefined(ie) && ie) {
                    var t = ["Mixpanel error:"].concat(o.toArray(arguments));
                    try {
                        ie.error.apply(ie, t)
                    } catch {
                        o.each(t, function(r) {
                            ie.error(r)
                        })
                    }
                }
            },
            critical: function() {
                if (!o.isUndefined(ie) && ie) {
                    var t = ["Mixpanel error:"].concat(o.toArray(arguments));
                    try {
                        ie.error.apply(ie, t)
                    } catch {
                        o.each(t, function(r) {
                            ie.error(r)
                        })
                    }
                }
            }
        },
        Jr = function(t, e) {
            return function() {
                return arguments[0] = "[" + e + "] " + arguments[0], t.apply(G, arguments)
            }
        },
        Kn = function(t) {
            return {
                log: Jr(G.log, t),
                error: Jr(G.error, t),
                critical: Jr(G.critical, t)
            }
        };
    o.bind = function(t, e) {
        var r, i;
        if (Yr && t.bind === Yr) return Yr.apply(t, Fe.call(arguments, 1));
        if (!o.isFunction(t)) throw new TypeError;
        return r = Fe.call(arguments, 2), i = function() {
            if (!(this instanceof i)) return t.apply(e, r.concat(Fe.call(arguments)));
            var s = {};
            s.prototype = t.prototype;
            var a = new s;
            s.prototype = null;
            var f = t.apply(a, r.concat(Fe.call(arguments)));
            return Object(f) === f ? f : a
        }, i
    };
    o.each = function(t, e, r) {
        if (t != null) {
            if (gi && t.forEach === gi) t.forEach(e, r);
            else if (t.length === +t.length) {
                for (var i = 0, s = t.length; i < s; i++)
                    if (i in t && e.call(r, t[i], i, t) === pn) return
            } else
                for (var a in t)
                    if (Ur.call(t, a) && e.call(r, t[a], a, t) === pn) return
        }
    };
    o.extend = function(t) {
        return o.each(Fe.call(arguments, 1), function(e) {
            for (var r in e) e[r] !== void 0 && (t[r] = e[r])
        }), t
    };
    o.isArray = $f || function(t) {
        return Yt.call(t) === "[object Array]"
    };
    o.isFunction = function(t) {
        try {
            return /^\s*\bfunction\b/.test(t)
        } catch {
            return !1
        }
    };
    o.isArguments = function(t) {
        return !!(t && Ur.call(t, "callee"))
    };
    o.toArray = function(t) {
        return t ? t.toArray ? t.toArray() : o.isArray(t) || o.isArguments(t) ? Fe.call(t) : o.values(t) : []
    };
    o.map = function(t, e, r) {
        if (Si && t.map === Si) return t.map(e, r);
        var i = [];
        return o.each(t, function(s) {
            i.push(e.call(r, s))
        }), i
    };
    o.keys = function(t) {
        var e = [];
        return t === null || o.each(t, function(r, i) {
            e[e.length] = i
        }), e
    };
    o.values = function(t) {
        var e = [];
        return t === null || o.each(t, function(r) {
            e[e.length] = r
        }), e
    };
    o.include = function(t, e) {
        var r = !1;
        return t === null ? r : Li && t.indexOf === Li ? t.indexOf(e) != -1 : (o.each(t, function(i) {
            if (r || (r = i === e)) return pn
        }), r)
    };
    o.includes = function(t, e) {
        return t.indexOf(e) !== -1
    };
    o.inherit = function(t, e) {
        return t.prototype = new e, t.prototype.constructor = t, t.superclass = e.prototype, t
    };
    o.isObject = function(t) {
        return t === Object(t) && !o.isArray(t)
    };
    o.isEmptyObject = function(t) {
        if (o.isObject(t)) {
            for (var e in t)
                if (Ur.call(t, e)) return !1;
            return !0
        }
        return !1
    };
    o.isUndefined = function(t) {
        return t === void 0
    };
    o.isString = function(t) {
        return Yt.call(t) == "[object String]"
    };
    o.isDate = function(t) {
        return Yt.call(t) == "[object Date]"
    };
    o.isNumber = function(t) {
        return Yt.call(t) == "[object Number]"
    };
    o.isElement = function(t) {
        return !!(t && t.nodeType === 1)
    };
    o.encodeDates = function(t) {
        return o.each(t, function(e, r) {
            o.isDate(e) ? t[r] = o.formatDate(e) : o.isObject(e) && (t[r] = o.encodeDates(e))
        }), t
    };
    o.timestamp = function() {
        return Date.now = Date.now || function() {
            return +new Date
        }, Date.now()
    };
    o.formatDate = function(t) {
        function e(r) {
            return r < 10 ? "0" + r : r
        }
        return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds())
    };
    o.strip_empty_properties = function(t) {
        var e = {};
        return o.each(t, function(r, i) {
            o.isString(r) && r.length > 0 && (e[i] = r)
        }), e
    };
    o.truncate = function(t, e) {
        var r;
        return typeof t == "string" ? r = t.slice(0, e) : o.isArray(t) ? (r = [], o.each(t, function(i) {
            r.push(o.truncate(i, e))
        })) : o.isObject(t) ? (r = {}, o.each(t, function(i, s) {
            r[s] = o.truncate(i, e)
        })) : r = t, r
    };
    o.JSONEncode = function() {
        return function(t) {
            var e = t,
                r = function(s) {
                    var a = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        f = {
                            "\b": "\\b",
                            "	": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    return a.lastIndex = 0, a.test(s) ? '"' + s.replace(a, function(u) {
                        var l = f[u];
                        return typeof l == "string" ? l : "\\u" + ("0000" + u.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + s + '"'
                },
                i = function(s, a) {
                    var f = "",
                        u = "    ",
                        l = 0,
                        E = "",
                        x = "",
                        h = 0,
                        b = f,
                        L = [],
                        A = a[s];
                    switch (A && typeof A == "object" && typeof A.toJSON == "function" && (A = A.toJSON(s)), typeof A) {
                        case "string":
                            return r(A);
                        case "number":
                            return isFinite(A) ? String(A) : "null";
                        case "boolean":
                        case "null":
                            return String(A);
                        case "object":
                            if (!A) return "null";
                            if (f += u, L = [], Yt.apply(A) === "[object Array]") {
                                for (h = A.length, l = 0; l < h; l += 1) L[l] = i(l, A) || "null";
                                return x = L.length === 0 ? "[]" : f ? `[
` + f + L.join(`,
` + f) + `
` + b + "]" : "[" + L.join(",") + "]", f = b, x
                            }
                            for (E in A) Ur.call(A, E) && (x = i(E, A), x && L.push(r(E) + (f ? ": " : ":") + x));
                            return x = L.length === 0 ? "{}" : f ? "{" + L.join(",") + b + "}" : "{" + L.join(",") + "}", f = b, x
                    }
                };
            return i("", {
                "": e
            })
        }
    }();
    o.JSONDecode = function() {
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
            i, s = function(L) {
                var A = new SyntaxError(L);
                throw A.at = t, A.text = i, A
            },
            a = function(L) {
                return L && L !== e && s("Expected '" + L + "' instead of '" + e + "'"), e = i.charAt(t), t += 1, e
            },
            f = function() {
                var L, A = "";
                for (e === "-" && (A = "-", a("-")); e >= "0" && e <= "9";) A += e, a();
                if (e === ".")
                    for (A += "."; a() && e >= "0" && e <= "9";) A += e;
                if (e === "e" || e === "E")
                    for (A += e, a(), (e === "-" || e === "+") && (A += e, a()); e >= "0" && e <= "9";) A += e, a();
                if (L = +A, !isFinite(L)) s("Bad number");
                else return L
            },
            u = function() {
                var L, A, U = "",
                    B;
                if (e === '"')
                    for (; a();) {
                        if (e === '"') return a(), U;
                        if (e === "\\")
                            if (a(), e === "u") {
                                for (B = 0, A = 0; A < 4 && (L = parseInt(a(), 16), !!isFinite(L)); A += 1) B = B * 16 + L;
                                U += String.fromCharCode(B)
                            } else if (typeof r[e] == "string") U += r[e];
                        else break;
                        else U += e
                    }
                s("Bad string")
            },
            l = function() {
                for (; e && e <= " ";) a()
            },
            E = function() {
                switch (e) {
                    case "t":
                        return a("t"), a("r"), a("u"), a("e"), !0;
                    case "f":
                        return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
                    case "n":
                        return a("n"), a("u"), a("l"), a("l"), null
                }
                s('Unexpected "' + e + '"')
            },
            x, h = function() {
                var L = [];
                if (e === "[") {
                    if (a("["), l(), e === "]") return a("]"), L;
                    for (; e;) {
                        if (L.push(x()), l(), e === "]") return a("]"), L;
                        a(","), l()
                    }
                }
                s("Bad array")
            },
            b = function() {
                var L, A = {};
                if (e === "{") {
                    if (a("{"), l(), e === "}") return a("}"), A;
                    for (; e;) {
                        if (L = u(), l(), a(":"), Object.hasOwnProperty.call(A, L) && s('Duplicate key "' + L + '"'), A[L] = x(), l(), e === "}") return a("}"), A;
                        a(","), l()
                    }
                }
                s("Bad object")
            };
        return x = function() {
                switch (l(), e) {
                    case "{":
                        return b();
                    case "[":
                        return h();
                    case '"':
                        return u();
                    case "-":
                        return f();
                    default:
                        return e >= "0" && e <= "9" ? f() : E()
                }
            },
            function(L) {
                var A;
                return i = L, t = 0, e = " ", A = x(), l(), e && s("Syntax error"), A
            }
    }();
    o.base64Encode = function(t) {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r, i, s, a, f, u, l, E, x = 0,
            h = 0,
            b = "",
            L = [];
        if (!t) return t;
        t = o.utf8Encode(t);
        do r = t.charCodeAt(x++), i = t.charCodeAt(x++), s = t.charCodeAt(x++), E = r << 16 | i << 8 | s, a = E >> 18 & 63, f = E >> 12 & 63, u = E >> 6 & 63, l = E & 63, L[h++] = e.charAt(a) + e.charAt(f) + e.charAt(u) + e.charAt(l); while (x < t.length);
        switch (b = L.join(""), t.length % 3) {
            case 1:
                b = b.slice(0, -2) + "==";
                break;
            case 2:
                b = b.slice(0, -1) + "=";
                break
        }
        return b
    };
    o.utf8Encode = function(t) {
        t = (t + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        var e = "",
            r, i, s = 0,
            a;
        for (r = i = 0, s = t.length, a = 0; a < s; a++) {
            var f = t.charCodeAt(a),
                u = null;
            f < 128 ? i++ : f > 127 && f < 2048 ? u = String.fromCharCode(f >> 6 | 192, f & 63 | 128) : u = String.fromCharCode(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128), u !== null && (i > r && (e += t.substring(r, i)), e += u, r = i = a + 1)
        }
        return i > r && (e += t.substring(r, t.length)), e
    };
    o.UUID = function() {
        var t = function() {
                var i = 1 * new Date,
                    s;
                if (te.performance && te.performance.now) s = te.performance.now();
                else
                    for (s = 0; i == 1 * new Date;) s++;
                return i.toString(16) + Math.floor(s).toString(16)
            },
            e = function() {
                return Math.random().toString(16).replace(".", "")
            },
            r = function() {
                var i = Ce,
                    s, a, f = [],
                    u = 0;

                function l(E, x) {
                    var h, b = 0;
                    for (h = 0; h < x.length; h++) b |= f[h] << h * 8;
                    return E ^ b
                }
                for (s = 0; s < i.length; s++) a = i.charCodeAt(s), f.unshift(a & 255), f.length >= 4 && (u = l(u, f), f = []);
                return f.length > 0 && (u = l(u, f)), u.toString(16)
            };
        return function() {
            var i = (pr.height * pr.width).toString(16);
            return t() + "-" + e() + "-" + r() + "-" + i + "-" + t()
        }
    }();
    var yi = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
    o.isBlockedUA = function(t) {
        var e;
        for (t = t.toLowerCase(), e = 0; e < yi.length; e++)
            if (t.indexOf(yi[e]) !== -1) return !0;
        return !1
    };
    o.HTTPBuildQuery = function(t, e) {
        var r, i, s = [];
        return o.isUndefined(e) && (e = "&"), o.each(t, function(a, f) {
            r = encodeURIComponent(a.toString()), i = encodeURIComponent(f), s[s.length] = i + "=" + r
        }), s.join(e)
    };
    o.getQueryParam = function(t, e) {
        e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var r = "[\\?&]" + e + "=([^&#]*)",
            i = new RegExp(r),
            s = i.exec(t);
        if (s === null || s && typeof s[1] != "string" && s[1].length) return "";
        var a = s[1];
        try {
            a = decodeURIComponent(a)
        } catch {
            G.error("Skipping decoding for malformed query param: " + a)
        }
        return a.replace(/\+/g, " ")
    };
    o.cookie = {
        get: function(t) {
            for (var e = t + "=", r = F.cookie.split(";"), i = 0; i < r.length; i++) {
                for (var s = r[i]; s.charAt(0) == " ";) s = s.substring(1, s.length);
                if (s.indexOf(e) === 0) return decodeURIComponent(s.substring(e.length, s.length))
            }
            return null
        },
        parse: function(t) {
            var e;
            try {
                e = o.JSONDecode(o.cookie.get(t)) || {}
            } catch {}
            return e
        },
        set_seconds: function(t, e, r, i, s, a, f) {
            var u = "",
                l = "",
                E = "";
            if (f) u = "; domain=" + f;
            else if (i) {
                var x = Ai(F.location.hostname);
                u = x ? "; domain=." + x : ""
            }
            if (r) {
                var h = new Date;
                h.setTime(h.getTime() + r * 1e3), l = "; expires=" + h.toGMTString()
            }
            a && (s = !0, E = "; SameSite=None"), s && (E += "; secure"), F.cookie = t + "=" + encodeURIComponent(e) + l + "; path=/" + u + E
        },
        set: function(t, e, r, i, s, a, f) {
            var u = "",
                l = "",
                E = "";
            if (f) u = "; domain=" + f;
            else if (i) {
                var x = Ai(F.location.hostname);
                u = x ? "; domain=." + x : ""
            }
            if (r) {
                var h = new Date;
                h.setTime(h.getTime() + r * 24 * 60 * 60 * 1e3), l = "; expires=" + h.toGMTString()
            }
            a && (s = !0, E = "; SameSite=None"), s && (E += "; secure");
            var b = t + "=" + encodeURIComponent(e) + l + "; path=/" + u + E;
            return F.cookie = b, b
        },
        remove: function(t, e, r) {
            o.cookie.set(t, "", -1, e, !1, !1, r)
        }
    };
    var Qr = null,
        cr = function(t, e) {
            if (Qr !== null && !e) return Qr;
            var r = !0;
            try {
                t = t || window.localStorage;
                var i = "__mplss_" + dn(8),
                    s = "xyz";
                t.setItem(i, s), t.getItem(i) !== s && (r = !1), t.removeItem(i)
            } catch {
                r = !1
            }
            return Qr = r, r
        };
    o.localStorage = {
        is_supported: function(t) {
            var e = cr(null, t);
            return e || G.error("localStorage unsupported; falling back to cookie store"), e
        },
        error: function(t) {
            G.error("localStorage error: " + t)
        },
        get: function(t) {
            try {
                return window.localStorage.getItem(t)
            } catch (e) {
                o.localStorage.error(e)
            }
            return null
        },
        parse: function(t) {
            try {
                return o.JSONDecode(o.localStorage.get(t)) || {}
            } catch {}
            return null
        },
        set: function(t, e) {
            try {
                window.localStorage.setItem(t, e)
            } catch (r) {
                o.localStorage.error(r)
            }
        },
        remove: function(t) {
            try {
                window.localStorage.removeItem(t)
            } catch (e) {
                o.localStorage.error(e)
            }
        }
    };
    o.register_event = function() {
        var t = function(i, s, a, f, u) {
            if (!i) {
                G.error("No valid element provided to register_event");
                return
            }
            if (i.addEventListener && !f) i.addEventListener(s, a, !!u);
            else {
                var l = "on" + s,
                    E = i[l];
                i[l] = e(i, a, E)
            }
        };

        function e(i, s, a) {
            var f = function(u) {
                if (u = u || r(window.event), !!u) {
                    var l = !0,
                        E, x;
                    return o.isFunction(a) && (E = a(u)), x = s.call(i, u), (E === !1 || x === !1) && (l = !1), l
                }
            };
            return f
        }

        function r(i) {
            return i && (i.preventDefault = r.preventDefault, i.stopPropagation = r.stopPropagation), i
        }
        return r.preventDefault = function() {
            this.returnValue = !1
        }, r.stopPropagation = function() {
            this.cancelBubble = !0
        }, t
    }();
    var Gf = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
    o.dom_query = function() {
        function t(s) {
            return s.all ? s.all : s.getElementsByTagName("*")
        }
        var e = /[\t\r\n]/g;

        function r(s, a) {
            var f = " " + a + " ";
            return (" " + s.className + " ").replace(e, " ").indexOf(f) >= 0
        }

        function i(s) {
            if (!F.getElementsByTagName) return [];
            var a = s.split(" "),
                f, u, l, E, x, h, b, L, A, U, B = [F];
            for (h = 0; h < a.length; h++) {
                if (f = a[h].replace(/^\s+/, "").replace(/\s+$/, ""), f.indexOf("#") > -1) {
                    u = f.split("#"), l = u[0];
                    var z = u[1],
                        W = F.getElementById(z);
                    if (!W || l && W.nodeName.toLowerCase() != l) return [];
                    B = [W];
                    continue
                }
                if (f.indexOf(".") > -1) {
                    u = f.split("."), l = u[0];
                    var oe = u[1];
                    for (l || (l = "*"), E = [], x = 0, b = 0; b < B.length; b++)
                        for (l == "*" ? A = t(B[b]) : A = B[b].getElementsByTagName(l), L = 0; L < A.length; L++) E[x++] = A[L];
                    for (B = [], U = 0, b = 0; b < E.length; b++) E[b].className && o.isString(E[b].className) && r(E[b], oe) && (B[U++] = E[b]);
                    continue
                }
                var ge = f.match(Gf);
                if (ge) {
                    l = ge[1];
                    var Ee = ge[2],
                        Qe = ge[3],
                        re = ge[4];
                    for (l || (l = "*"), E = [], x = 0, b = 0; b < B.length; b++)
                        for (l == "*" ? A = t(B[b]) : A = B[b].getElementsByTagName(l), L = 0; L < A.length; L++) E[x++] = A[L];
                    B = [], U = 0;
                    var ce;
                    switch (Qe) {
                        case "=":
                            ce = function(Y) {
                                return Y.getAttribute(Ee) == re
                            };
                            break;
                        case "~":
                            ce = function(Y) {
                                return Y.getAttribute(Ee).match(new RegExp("\\b" + re + "\\b"))
                            };
                            break;
                        case "|":
                            ce = function(Y) {
                                return Y.getAttribute(Ee).match(new RegExp("^" + re + "-?"))
                            };
                            break;
                        case "^":
                            ce = function(Y) {
                                return Y.getAttribute(Ee).indexOf(re) === 0
                            };
                            break;
                        case "$":
                            ce = function(Y) {
                                return Y.getAttribute(Ee).lastIndexOf(re) == Y.getAttribute(Ee).length - re.length
                            };
                            break;
                        case "*":
                            ce = function(Y) {
                                return Y.getAttribute(Ee).indexOf(re) > -1
                            };
                            break;
                        default:
                            ce = function(Y) {
                                return Y.getAttribute(Ee)
                            }
                    }
                    for (B = [], U = 0, b = 0; b < E.length; b++) ce(E[b]) && (B[U++] = E[b]);
                    continue
                }
                for (l = f, E = [], x = 0, b = 0; b < B.length; b++)
                    for (A = B[b].getElementsByTagName(l), L = 0; L < A.length; L++) E[x++] = A[L];
                B = E
            }
            return B
        }
        return function(s) {
            return o.isElement(s) ? [s] : o.isObject(s) && !o.isUndefined(s.length) ? s : i.call(this, s)
        }
    }();
    var Xf = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
        jf = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "ttclid", "twclid", "wbraid"];
    o.info = {
        campaignParams: function(t) {
            var e = "",
                r = {};
            return o.each(Xf, function(i) {
                e = o.getQueryParam(F.URL, i), e.length ? r[i] = e : t !== void 0 && (r[i] = t)
            }), r
        },
        clickParams: function() {
            var t = "",
                e = {};
            return o.each(jf, function(r) {
                t = o.getQueryParam(F.URL, r), t.length && (e[r] = t)
            }), e
        },
        marketingParams: function() {
            return o.extend(o.info.campaignParams(), o.info.clickParams())
        },
        searchEngine: function(t) {
            return t.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : t.search("https?://(.*)bing.com") === 0 ? "bing" : t.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : t.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null
        },
        searchInfo: function(t) {
            var e = o.info.searchEngine(t),
                r = e != "yahoo" ? "q" : "p",
                i = {};
            if (e !== null) {
                i.$search_engine = e;
                var s = o.getQueryParam(t, r);
                s.length && (i.mp_keyword = s)
            }
            return i
        },
        browser: function(t, e, r) {
            return e = e || "", r || o.includes(t, " OPR/") ? o.includes(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : o.includes(t, "IEMobile") || o.includes(t, "WPDesktop") ? "Internet Explorer Mobile" : o.includes(t, "SamsungBrowser/") ? "Samsung Internet" : o.includes(t, "Edge") || o.includes(t, "Edg/") ? "Microsoft Edge" : o.includes(t, "FBIOS") ? "Facebook Mobile" : o.includes(t, "Chrome") ? "Chrome" : o.includes(t, "CriOS") ? "Chrome iOS" : o.includes(t, "UCWEB") || o.includes(t, "UCBrowser") ? "UC Browser" : o.includes(t, "FxiOS") ? "Firefox iOS" : o.includes(e, "Apple") ? o.includes(t, "Mobile") ? "Mobile Safari" : "Safari" : o.includes(t, "Android") ? "Android Mobile" : o.includes(t, "Konqueror") ? "Konqueror" : o.includes(t, "Firefox") ? "Firefox" : o.includes(t, "MSIE") || o.includes(t, "Trident/") ? "Internet Explorer" : o.includes(t, "Gecko") ? "Mozilla" : ""
        },
        browserVersion: function(t, e, r) {
            var i = o.info.browser(t, e, r),
                s = {
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
                a = s[i];
            if (a === void 0) return null;
            var f = t.match(a);
            return f ? parseFloat(f[f.length - 2]) : null
        },
        os: function() {
            var t = Ce;
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
            return o.extend(o.strip_empty_properties({
                $os: o.info.os(),
                $browser: o.info.browser(Ce, qe.vendor, rr),
                $referrer: F.referrer,
                $referring_domain: o.info.referringDomain(F.referrer),
                $device: o.info.device(Ce)
            }), {
                $current_url: te.location.href,
                $browser_version: o.info.browserVersion(Ce, qe.vendor, rr),
                $screen_height: pr.height,
                $screen_width: pr.width,
                mp_lib: "web",
                $lib_version: Pe.LIB_VERSION,
                $insert_id: dn(),
                time: o.timestamp() / 1e3
            })
        },
        people_properties: function() {
            return o.extend(o.strip_empty_properties({
                $os: o.info.os(),
                $browser: o.info.browser(Ce, qe.vendor, rr)
            }), {
                $browser_version: o.info.browserVersion(Ce, qe.vendor, rr)
            })
        },
        mpPageViewProperties: function() {
            return o.strip_empty_properties({
                current_page_title: F.title,
                current_domain: te.location.hostname,
                current_url_path: te.location.pathname,
                current_url_protocol: te.location.protocol,
                current_url_search: te.location.search
            })
        }
    };
    var dn = function(t) {
            var e = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return t ? e.substring(0, t) : e
        },
        Ff = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
        qf = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Ai = function(t) {
            var e = qf,
                r = t.split("."),
                i = r[r.length - 1];
            (i.length > 4 || i === "com" || i === "org") && (e = Ff);
            var s = t.match(e);
            return s ? s[0] : ""
        },
        xr = null,
        _r = null;
    typeof JSON < "u" && (xr = JSON.stringify, _r = JSON.parse);
    xr = xr || o.JSONEncode;
    _r = _r || o.JSONDecode;
    o.toArray = o.toArray;
    o.isObject = o.isObject;
    o.JSONEncode = o.JSONEncode;
    o.JSONDecode = o.JSONDecode;
    o.isBlockedUA = o.isBlockedUA;
    o.isEmptyObject = o.isEmptyObject;
    o.info = o.info;
    o.info.device = o.info.device;
    o.info.browser = o.info.browser;
    o.info.browserVersion = o.info.browserVersion;
    o.info.properties = o.info.properties;
    var $e = function() {};
    $e.prototype.create_properties = function() {};
    $e.prototype.event_handler = function() {};
    $e.prototype.after_track_handler = function() {};
    $e.prototype.init = function(t) {
        return this.mp = t, this
    };
    $e.prototype.track = function(t, e, r, i) {
        var s = this,
            a = o.dom_query(t);
        if (a.length === 0) {
            G.error("The DOM query (" + t + ") returned 0 elements");
            return
        }
        return o.each(a, function(f) {
            o.register_event(f, this.override_event, function(u) {
                var l = {},
                    E = s.create_properties(r, this),
                    x = s.mp.get_config("track_links_timeout");
                s.event_handler(u, this, l), window.setTimeout(s.track_callback(i, E, l, !0), x), s.mp.track(e, E, s.track_callback(i, E, l))
            })
        }, this), !0
    };
    $e.prototype.track_callback = function(t, e, r, i) {
        i = i || !1;
        var s = this;
        return function() {
            r.callback_fired || (r.callback_fired = !0, !(t && t(i, e) === !1) && s.after_track_handler(e, r, i))
        }
    };
    $e.prototype.create_properties = function(t, e) {
        var r;
        return typeof t == "function" ? r = t(e) : r = o.extend({}, t), r
    };
    var gt = function() {
        this.override_event = "click"
    };
    o.inherit(gt, $e);
    gt.prototype.create_properties = function(t, e) {
        var r = gt.superclass.create_properties.apply(this, arguments);
        return e.href && (r.url = e.href), r
    };
    gt.prototype.event_handler = function(t, e, r) {
        r.new_tab = t.which === 2 || t.metaKey || t.ctrlKey || e.target === "_blank", r.href = e.href, r.new_tab || t.preventDefault()
    };
    gt.prototype.after_track_handler = function(t, e) {
        e.new_tab || setTimeout(function() {
            window.location = e.href
        }, 0)
    };
    var Br = function() {
        this.override_event = "submit"
    };
    o.inherit(Br, $e);
    Br.prototype.event_handler = function(t, e, r) {
        r.element = e, t.preventDefault()
    };
    Br.prototype.after_track_handler = function(t, e) {
        setTimeout(function() {
            e.element.submit()
        }, 0)
    };
    var Hf = Kn("lock"),
        Vs = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.pollIntervalMS = e.pollIntervalMS || 100, this.timeoutMS = e.timeoutMS || 2e3
        };
    Vs.prototype.withLock = function(t, e, r) {
        !r && typeof e != "function" && (r = e, e = null);
        var i = r || new Date().getTime() + "|" + Math.random(),
            s = new Date().getTime(),
            a = this.storageKey,
            f = this.pollIntervalMS,
            u = this.timeoutMS,
            l = this.storage,
            E = a + ":X",
            x = a + ":Y",
            h = a + ":Z",
            b = function(W) {
                e && e(W)
            },
            L = function(W) {
                if (new Date().getTime() - s > u) {
                    Hf.error("Timeout waiting for mutex on " + a + "; clearing lock. [" + i + "]"), l.removeItem(h), l.removeItem(x), B();
                    return
                }
                setTimeout(function() {
                    try {
                        W()
                    } catch (oe) {
                        b(oe)
                    }
                }, f * (Math.random() + .1))
            },
            A = function(W, oe) {
                W() ? oe() : L(function() {
                    A(W, oe)
                })
            },
            U = function() {
                var W = l.getItem(x);
                if (W && W !== i) return !1;
                if (l.setItem(x, i), l.getItem(x) === i) return !0;
                if (!cr(l, !0)) throw new Error("localStorage support dropped while acquiring lock");
                return !1
            },
            B = function() {
                l.setItem(E, i), A(U, function() {
                    if (l.getItem(E) === i) {
                        z();
                        return
                    }
                    L(function() {
                        if (l.getItem(x) !== i) {
                            B();
                            return
                        }
                        A(function() {
                            return !l.getItem(h)
                        }, z)
                    })
                })
            },
            z = function() {
                l.setItem(h, "1");
                try {
                    t()
                } finally {
                    l.removeItem(h), l.getItem(x) === i && l.removeItem(x), l.getItem(E) === i && l.removeItem(E)
                }
            };
        try {
            if (cr(l, !0)) B();
            else throw new Error("localStorage support check failed")
        } catch (W) {
            b(W)
        }
    };
    var mi = Kn("batch"),
        ze = function(t, e) {
            e = e || {}, this.storageKey = t, this.storage = e.storage || window.localStorage, this.reportError = e.errorReporter || o.bind(mi.error, mi), this.lock = new Vs(t, {
                storage: this.storage
            }), this.pid = e.pid || null, this.memQueue = []
        };
    ze.prototype.enqueue = function(t, e, r) {
        var i = {
            id: dn(),
            flushAfter: new Date().getTime() + e * 2,
            payload: t
        };
        this.lock.withLock(o.bind(function() {
            var a;
            try {
                var f = this.readFromStorage();
                f.push(i), a = this.saveToStorage(f), a && this.memQueue.push(i)
            } catch {
                this.reportError("Error enqueueing item", t), a = !1
            }
            r && r(a)
        }, this), o.bind(function(a) {
            this.reportError("Error acquiring storage lock", a), r && r(!1)
        }, this), this.pid)
    };
    ze.prototype.fillBatch = function(t) {
        var e = this.memQueue.slice(0, t);
        if (e.length < t) {
            var r = this.readFromStorage();
            if (r.length) {
                var i = {};
                o.each(e, function(f) {
                    i[f.id] = !0
                });
                for (var s = 0; s < r.length; s++) {
                    var a = r[s];
                    if (new Date().getTime() > a.flushAfter && !i[a.id] && (a.orphaned = !0, e.push(a), e.length >= t)) break
                }
            }
        }
        return e
    };
    var Ci = function(t, e) {
        var r = [];
        return o.each(t, function(i) {
            i.id && !e[i.id] && r.push(i)
        }), r
    };
    ze.prototype.removeItemsByID = function(t, e) {
        var r = {};
        o.each(t, function(s) {
            r[s] = !0
        }), this.memQueue = Ci(this.memQueue, r);
        var i = o.bind(function() {
            var s;
            try {
                var a = this.readFromStorage();
                if (a = Ci(a, r), s = this.saveToStorage(a), s) {
                    a = this.readFromStorage();
                    for (var f = 0; f < a.length; f++) {
                        var u = a[f];
                        if (u.id && r[u.id]) return this.reportError("Item not removed from storage"), !1
                    }
                }
            } catch {
                this.reportError("Error removing items", t), s = !1
            }
            return s
        }, this);
        this.lock.withLock(function() {
            var a = i();
            e && e(a)
        }, o.bind(function(a) {
            var f = !1;
            if (this.reportError("Error acquiring storage lock", a), !cr(this.storage, !0) && (f = i(), !f)) try {
                this.storage.removeItem(this.storageKey)
            } catch (u) {
                this.reportError("Error clearing queue", u)
            }
            e && e(f)
        }, this), this.pid)
    };
    var vi = function(t, e) {
        var r = [];
        return o.each(t, function(i) {
            var s = i.id;
            if (s in e) {
                var a = e[s];
                a !== null && (i.payload = a, r.push(i))
            } else r.push(i)
        }), r
    };
    ze.prototype.updatePayloads = function(t, e) {
        this.memQueue = vi(this.memQueue, t), this.lock.withLock(o.bind(function() {
            var i;
            try {
                var s = this.readFromStorage();
                s = vi(s, t), i = this.saveToStorage(s)
            } catch {
                this.reportError("Error updating items", t), i = !1
            }
            e && e(i)
        }, this), o.bind(function(i) {
            this.reportError("Error acquiring storage lock", i), e && e(!1)
        }, this), this.pid)
    };
    ze.prototype.readFromStorage = function() {
        var t;
        try {
            t = this.storage.getItem(this.storageKey), t && (t = _r(t), o.isArray(t) || (this.reportError("Invalid storage entry:", t), t = null))
        } catch (e) {
            this.reportError("Error retrieving queue", e), t = null
        }
        return t || []
    };
    ze.prototype.saveToStorage = function(t) {
        try {
            return this.storage.setItem(this.storageKey, xr(t)), !0
        } catch (e) {
            return this.reportError("Error saving queue", e), !1
        }
    };
    ze.prototype.clear = function() {
        this.memQueue = [], this.storage.removeItem(this.storageKey)
    };
    var Wf = 10 * 60 * 1e3,
        Ft = Kn("batch"),
        Ke = function(t, e) {
            this.errorReporter = e.errorReporter, this.queue = new ze(t, {
                errorReporter: o.bind(this.reportError, this),
                storage: e.storage
            }), this.libConfig = e.libConfig, this.sendRequest = e.sendRequestFunc, this.beforeSendHook = e.beforeSendHook, this.stopAllBatching = e.stopAllBatchingFunc, this.batchSize = this.libConfig.batch_size, this.flushInterval = this.libConfig.batch_flush_interval_ms, this.stopped = !this.libConfig.batch_autostart, this.consecutiveRemovalFailures = 0, this.itemIdsSentSuccessfully = {}
        };
    Ke.prototype.enqueue = function(t, e) {
        this.queue.enqueue(t, this.flushInterval, e)
    };
    Ke.prototype.start = function() {
        this.stopped = !1, this.consecutiveRemovalFailures = 0, this.flush()
    };
    Ke.prototype.stop = function() {
        this.stopped = !0, this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null)
    };
    Ke.prototype.clear = function() {
        this.queue.clear()
    };
    Ke.prototype.resetBatchSize = function() {
        this.batchSize = this.libConfig.batch_size
    };
    Ke.prototype.resetFlush = function() {
        this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
    };
    Ke.prototype.scheduleFlush = function(t) {
        this.flushInterval = t, this.stopped || (this.timeoutID = setTimeout(o.bind(this.flush, this), this.flushInterval))
    };
    Ke.prototype.flush = function(t) {
        try {
            if (this.requestInProgress) {
                Ft.log("Flush: Request already in progress");
                return
            }
            t = t || {};
            var e = this.libConfig.batch_request_timeout_ms,
                r = new Date().getTime(),
                i = this.batchSize,
                s = this.queue.fillBatch(i),
                a = [],
                f = {};
            if (o.each(s, function(E) {
                    var x = E.payload;
                    if (this.beforeSendHook && !E.orphaned && (x = this.beforeSendHook(x)), x) {
                        x.event && x.properties && (x.properties = o.extend({}, x.properties, {
                            mp_sent_by_lib_version: Pe.LIB_VERSION
                        }));
                        var h = !0,
                            b = E.id;
                        b ? (this.itemIdsSentSuccessfully[b] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
                            item: E,
                            batchSize: s.length,
                            timesSent: this.itemIdsSentSuccessfully[b]
                        }), h = !1) : this.reportError("[dupe] found item with no ID", {
                            item: E
                        }), h && a.push(x)
                    }
                    f[E.id] = x
                }, this), a.length < 1) {
                this.resetFlush();
                return
            }
            this.requestInProgress = !0;
            var u = o.bind(function(E) {
                    this.requestInProgress = !1;
                    try {
                        var x = !1;
                        if (t.unloading) this.queue.updatePayloads(f);
                        else if (o.isObject(E) && E.error === "timeout" && new Date().getTime() - r >= e) this.reportError("Network timeout; retrying"), this.flush();
                        else if (o.isObject(E) && E.xhr_req && (E.xhr_req.status >= 500 || E.xhr_req.status === 429 || E.error === "timeout")) {
                            var h = this.flushInterval * 2,
                                b = E.xhr_req.responseHeaders;
                            if (b) {
                                var L = b["Retry-After"];
                                L && (h = parseInt(L, 10) * 1e3 || h)
                            }
                            h = Math.min(Wf, h), this.reportError("Error; retry in " + h + " ms"), this.scheduleFlush(h)
                        } else if (o.isObject(E) && E.xhr_req && E.xhr_req.status === 413)
                            if (s.length > 1) {
                                var A = Math.max(1, Math.floor(i / 2));
                                this.batchSize = Math.min(this.batchSize, A, s.length - 1), this.reportError("413 response; reducing batch size to " + this.batchSize), this.resetFlush()
                            } else this.reportError("Single-event request too large; dropping", s), this.resetBatchSize(), x = !0;
                        else x = !0;
                        x && (this.queue.removeItemsByID(o.map(s, function(U) {
                            return U.id
                        }), o.bind(function(U) {
                            U ? (this.consecutiveRemovalFailures = 0, this.flush()) : (this.reportError("Failed to remove items from queue"), ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."), this.stopAllBatching()) : this.resetFlush())
                        }, this)), o.each(s, o.bind(function(U) {
                            var B = U.id;
                            B ? (this.itemIdsSentSuccessfully[B] = this.itemIdsSentSuccessfully[B] || 0, this.itemIdsSentSuccessfully[B]++, this.itemIdsSentSuccessfully[B] > 5 && this.reportError("[dupe] item ID sent too many times", {
                                item: U,
                                batchSize: s.length,
                                timesSent: this.itemIdsSentSuccessfully[B]
                            })) : this.reportError("[dupe] found item with no ID while removing", {
                                item: U
                            })
                        }, this)))
                    } catch (U) {
                        this.reportError("Error handling API response", U), this.resetFlush()
                    }
                }, this),
                l = {
                    method: "POST",
                    verbose: !0,
                    ignore_json_errors: !0,
                    timeout_ms: e
                };
            t.unloading && (l.transport = "sendBeacon"), Ft.log("MIXPANEL REQUEST:", a), this.sendRequest(a, l, u)
        } catch (E) {
            this.reportError("Error flushing request queue", E), this.resetFlush()
        }
    };
    Ke.prototype.reportError = function(t, e) {
        if (Ft.error.apply(Ft.error, arguments), this.errorReporter) try {
            e instanceof Error || (e = new Error(t)), this.errorReporter(t, e)
        } catch (r) {
            Ft.error(r)
        }
    };
    var zf = "__mp_opt_in_out_";

    function Yf(t, e) {
        $s(!0, t, e)
    }

    function Jf(t, e) {
        $s(!1, t, e)
    }

    function Qf(t, e) {
        return Ms(t, e) === "1"
    }

    function ks(t, e) {
        if (eu(e)) return G.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), !0;
        var r = Ms(t, e) === "0";
        return r && G.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."), r
    }

    function vt(t) {
        return Dn(t, function(e) {
            return this.get_config(e)
        })
    }

    function Ye(t) {
        return Dn(t, function(e) {
            return this._get_config(e)
        })
    }

    function Ut(t) {
        return Dn(t, function(e) {
            return this._get_config(e)
        })
    }

    function Zf(t, e) {
        e = e || {}, Nn(e).remove(wn(t, e), !!e.crossSubdomainCookie, e.cookieDomain)
    }

    function Nn(t) {
        return t = t || {}, t.persistenceType === "localStorage" ? o.localStorage : o.cookie
    }

    function wn(t, e) {
        return e = e || {}, (e.persistencePrefix || zf) + t
    }

    function Ms(t, e) {
        return Nn(e).get(wn(t, e))
    }

    function eu(t) {
        if (t && t.ignoreDnt) return !1;
        var e = t && t.window || te,
            r = e.navigator || {},
            i = !1;
        return o.each([r.doNotTrack, r.msDoNotTrack, e.doNotTrack], function(s) {
            o.includes([!0, 1, "1", "yes"], s) && (i = !0)
        }), i
    }

    function $s(t, e, r) {
        if (!o.isString(e) || !e.length) {
            G.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
            return
        }
        r = r || {}, Nn(r).set(wn(e, r), t ? 1 : 0, o.isNumber(r.cookieExpiration) ? r.cookieExpiration : null, !!r.crossSubdomainCookie, !!r.secureCookie, !!r.crossSiteCookie, r.cookieDomain), r.track && t && r.track(r.trackEventName || "$opt_in", r.trackProperties, {
            send_immediately: !0
        })
    }

    function Dn(t, e) {
        return function() {
            var r = !1;
            try {
                var i = e.call(this, "token"),
                    s = e.call(this, "ignore_dnt"),
                    a = e.call(this, "opt_out_tracking_persistence_type"),
                    f = e.call(this, "opt_out_tracking_cookie_prefix"),
                    u = e.call(this, "window");
                i && (r = ks(i, {
                    ignoreDnt: s,
                    persistenceType: a,
                    persistencePrefix: f,
                    window: u
                }))
            } catch (E) {
                G.error("Unexpected error when checking tracking opt-out status: " + E)
            }
            if (!r) return t.apply(this, arguments);
            var l = arguments[arguments.length - 1];
            typeof l == "function" && l(0)
        }
    }
    var He = "$set",
        Lt = "$set_once",
        ye = "$unset",
        tt = "$add",
        Be = "$append",
        rt = "$union",
        Ve = "$remove",
        tu = "$delete",
        Gs = {
            set_action: function(t, e) {
                var r = {},
                    i = {};
                return o.isObject(t) ? o.each(t, function(s, a) {
                    this._is_reserved_property(a) || (i[a] = s)
                }, this) : i[t] = e, r[He] = i, r
            },
            unset_action: function(t) {
                var e = {},
                    r = [];
                return o.isArray(t) || (t = [t]), o.each(t, function(i) {
                    this._is_reserved_property(i) || r.push(i)
                }, this), e[ye] = r, e
            },
            set_once_action: function(t, e) {
                var r = {},
                    i = {};
                return o.isObject(t) ? o.each(t, function(s, a) {
                    this._is_reserved_property(a) || (i[a] = s)
                }, this) : i[t] = e, r[Lt] = i, r
            },
            union_action: function(t, e) {
                var r = {},
                    i = {};
                return o.isObject(t) ? o.each(t, function(s, a) {
                    this._is_reserved_property(a) || (i[a] = o.isArray(s) ? s : [s])
                }, this) : i[t] = o.isArray(e) ? e : [e], r[rt] = i, r
            },
            append_action: function(t, e) {
                var r = {},
                    i = {};
                return o.isObject(t) ? o.each(t, function(s, a) {
                    this._is_reserved_property(a) || (i[a] = s)
                }, this) : i[t] = e, r[Be] = i, r
            },
            remove_action: function(t, e) {
                var r = {},
                    i = {};
                return o.isObject(t) ? o.each(t, function(s, a) {
                    this._is_reserved_property(a) || (i[a] = s)
                }, this) : i[t] = e, r[Ve] = i, r
            },
            delete_action: function() {
                var t = {};
                return t[tu] = "", t
            }
        },
        ee = function() {};
    o.extend(ee.prototype, Gs);
    ee.prototype._init = function(t, e, r) {
        this._mixpanel = t, this._group_key = e, this._group_id = r
    };
    ee.prototype.set = Ut(function(t, e, r) {
        var i = this.set_action(t, e);
        return o.isObject(t) && (r = e), this._send_request(i, r)
    });
    ee.prototype.set_once = Ut(function(t, e, r) {
        var i = this.set_once_action(t, e);
        return o.isObject(t) && (r = e), this._send_request(i, r)
    });
    ee.prototype.unset = Ut(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    ee.prototype.union = Ut(function(t, e, r) {
        o.isObject(t) && (r = e);
        var i = this.union_action(t, e);
        return this._send_request(i, r)
    });
    ee.prototype.delete = Ut(function(t) {
        var e = this.delete_action();
        return this._send_request(e, t)
    });
    ee.prototype.remove = Ut(function(t, e, r) {
        var i = this.remove_action(t, e);
        return this._send_request(i, r)
    });
    ee.prototype._send_request = function(t, e) {
        t.$group_key = this._group_key, t.$group_id = this._group_id, t.$token = this._get_config("token");
        var r = o.encodeDates(t);
        return this._mixpanel._track_or_batch({
            type: "groups",
            data: r,
            endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").groups,
            batcher: this._mixpanel.request_batchers.groups
        }, e)
    };
    ee.prototype._is_reserved_property = function(t) {
        return t === "$group_key" || t === "$group_id"
    };
    ee.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    ee.prototype.toString = function() {
        return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
    };
    ee.prototype.remove = ee.prototype.remove;
    ee.prototype.set = ee.prototype.set;
    ee.prototype.set_once = ee.prototype.set_once;
    ee.prototype.union = ee.prototype.union;
    ee.prototype.unset = ee.prototype.unset;
    ee.prototype.toString = ee.prototype.toString;
    var w = function() {};
    o.extend(w.prototype, Gs);
    w.prototype._init = function(t) {
        this._mixpanel = t
    };
    w.prototype.set = Ye(function(t, e, r) {
        var i = this.set_action(t, e);
        return o.isObject(t) && (r = e), this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer), i[He] = o.extend({}, o.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), i[He]), this._send_request(i, r)
    });
    w.prototype.set_once = Ye(function(t, e, r) {
        var i = this.set_once_action(t, e);
        return o.isObject(t) && (r = e), this._send_request(i, r)
    });
    w.prototype.unset = Ye(function(t, e) {
        var r = this.unset_action(t);
        return this._send_request(r, e)
    });
    w.prototype.increment = Ye(function(t, e, r) {
        var i = {},
            s = {};
        return o.isObject(t) ? (o.each(t, function(a, f) {
            if (!this._is_reserved_property(f))
                if (isNaN(parseFloat(a))) {
                    G.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                    return
                } else s[f] = a
        }, this), r = e) : (o.isUndefined(e) && (e = 1), s[t] = e), i[tt] = s, this._send_request(i, r)
    });
    w.prototype.append = Ye(function(t, e, r) {
        o.isObject(t) && (r = e);
        var i = this.append_action(t, e);
        return this._send_request(i, r)
    });
    w.prototype.remove = Ye(function(t, e, r) {
        o.isObject(t) && (r = e);
        var i = this.remove_action(t, e);
        return this._send_request(i, r)
    });
    w.prototype.union = Ye(function(t, e, r) {
        o.isObject(t) && (r = e);
        var i = this.union_action(t, e);
        return this._send_request(i, r)
    });
    w.prototype.track_charge = Ye(function(t, e, r) {
        if (!o.isNumber(t) && (t = parseFloat(t), isNaN(t))) {
            G.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
            return
        }
        return this.append("$transactions", o.extend({
            $amount: t
        }, e), r)
    });
    w.prototype.clear_charges = function(t) {
        return this.set("$transactions", [], t)
    };
    w.prototype.delete_user = function() {
        if (!this._identify_called()) {
            G.error("mixpanel.people.delete_user() requires you to call identify() first");
            return
        }
        var t = {
            $delete: this._mixpanel.get_distinct_id()
        };
        return this._send_request(t)
    };
    w.prototype.toString = function() {
        return this._mixpanel.toString() + ".people"
    };
    w.prototype._send_request = function(t, e) {
        t.$token = this._get_config("token"), t.$distinct_id = this._mixpanel.get_distinct_id();
        var r = this._mixpanel.get_property("$device_id"),
            i = this._mixpanel.get_property("$user_id"),
            s = this._mixpanel.get_property("$had_persisted_distinct_id");
        r && (t.$device_id = r), i && (t.$user_id = i), s && (t.$had_persisted_distinct_id = s);
        var a = o.encodeDates(t);
        return this._identify_called() ? this._mixpanel._track_or_batch({
            type: "people",
            data: a,
            endpoint: this._get_config("api_host") + "/" + this._get_config("api_routes").engage,
            batcher: this._mixpanel.request_batchers.people
        }, e) : (this._enqueue(t), o.isUndefined(e) || (this._get_config("verbose") ? e({
            status: -1,
            error: null
        }) : e(-1)), o.truncate(a, 255))
    };
    w.prototype._get_config = function(t) {
        return this._mixpanel.get_config(t)
    };
    w.prototype._identify_called = function() {
        return this._mixpanel._flags.identify_called === !0
    };
    w.prototype._enqueue = function(t) {
        He in t ? this._mixpanel.persistence._add_to_people_queue(He, t) : Lt in t ? this._mixpanel.persistence._add_to_people_queue(Lt, t) : ye in t ? this._mixpanel.persistence._add_to_people_queue(ye, t) : tt in t ? this._mixpanel.persistence._add_to_people_queue(tt, t) : Be in t ? this._mixpanel.persistence._add_to_people_queue(Be, t) : Ve in t ? this._mixpanel.persistence._add_to_people_queue(Ve, t) : rt in t ? this._mixpanel.persistence._add_to_people_queue(rt, t) : G.error("Invalid call to _enqueue():", t)
    };
    w.prototype._flush_one_queue = function(t, e, r, i) {
        var s = this,
            a = o.extend({}, this._mixpanel.persistence.load_queue(t)),
            f = a;
        !o.isUndefined(a) && o.isObject(a) && !o.isEmptyObject(a) && (s._mixpanel.persistence._pop_from_people_queue(t, a), s._mixpanel.persistence.save(), i && (f = i(a)), e.call(s, f, function(u, l) {
            u === 0 && s._mixpanel.persistence._add_to_people_queue(t, a), o.isUndefined(r) || r(u, l)
        }))
    };
    w.prototype._flush = function(t, e, r, i, s, a, f) {
        var u = this;
        this._flush_one_queue(He, this.set, t), this._flush_one_queue(Lt, this.set_once, i), this._flush_one_queue(ye, this.unset, a, function(B) {
            return o.keys(B)
        }), this._flush_one_queue(tt, this.increment, e), this._flush_one_queue(rt, this.union, s);
        var l = this._mixpanel.persistence.load_queue(Be);
        if (!o.isUndefined(l) && o.isArray(l) && l.length)
            for (var E, x = function(B, z) {
                    B === 0 && u._mixpanel.persistence._add_to_people_queue(Be, E), o.isUndefined(r) || r(B, z)
                }, h = l.length - 1; h >= 0; h--) l = this._mixpanel.persistence.load_queue(Be), E = l.pop(), u._mixpanel.persistence.save(), o.isEmptyObject(E) || u.append(E, x);
        var b = this._mixpanel.persistence.load_queue(Ve);
        if (!o.isUndefined(b) && o.isArray(b) && b.length)
            for (var L, A = function(B, z) {
                    B === 0 && u._mixpanel.persistence._add_to_people_queue(Ve, L), o.isUndefined(f) || f(B, z)
                }, U = b.length - 1; U >= 0; U--) b = this._mixpanel.persistence.load_queue(Ve), L = b.pop(), u._mixpanel.persistence.save(), o.isEmptyObject(L) || u.remove(L, A)
    };
    w.prototype._is_reserved_property = function(t) {
        return t === "$distinct_id" || t === "$token" || t === "$device_id" || t === "$user_id" || t === "$had_persisted_distinct_id"
    };
    w.prototype.set = w.prototype.set;
    w.prototype.set_once = w.prototype.set_once;
    w.prototype.unset = w.prototype.unset;
    w.prototype.increment = w.prototype.increment;
    w.prototype.append = w.prototype.append;
    w.prototype.remove = w.prototype.remove;
    w.prototype.union = w.prototype.union;
    w.prototype.track_charge = w.prototype.track_charge;
    w.prototype.clear_charges = w.prototype.clear_charges;
    w.prototype.delete_user = w.prototype.delete_user;
    w.prototype.toString = w.prototype.toString;
    var In = "__mps",
        On = "__mpso",
        Pn = "__mpus",
        Vn = "__mpa",
        kn = "__mpap",
        Mn = "__mpr",
        $n = "__mpu",
        Xs = "$people_distinct_id",
        hr = "__alias",
        qt = "__timers",
        ru = [In, On, Pn, Vn, kn, Mn, $n, Xs, hr, qt],
        O = function(t) {
            this.props = {}, this.campaign_params_saved = !1, t.persistence_name ? this.name = "mp_" + t.persistence_name : this.name = "mp_" + t.token + "_mixpanel";
            var e = t.persistence;
            e !== "cookie" && e !== "localStorage" && (G.critical("Unknown persistence type " + e + "; falling back to cookie"), e = t.persistence = "cookie"), e === "localStorage" && o.localStorage.is_supported() ? this.storage = o.localStorage : this.storage = o.cookie, this.load(), this.update_config(t), this.upgrade(t), this.save()
        };
    O.prototype.properties = function() {
        var t = {};
        return this.load(), o.each(this.props, function(e, r) {
            o.include(ru, r) || (t[r] = e)
        }), t
    };
    O.prototype.load = function() {
        if (!this.disabled) {
            var t = this.storage.parse(this.name);
            t && (this.props = o.extend({}, t))
        }
    };
    O.prototype.upgrade = function(t) {
        var e = t.upgrade,
            r, i;
        e && (r = "mp_super_properties", typeof e == "string" && (r = e), i = this.storage.parse(r), this.storage.remove(r), this.storage.remove(r, !0), i && (this.props = o.extend(this.props, i.all, i.events))), !t.cookie_name && t.name !== "mixpanel" && (r = "mp_" + t.token + "_" + t.name, i = this.storage.parse(r), i && (this.storage.remove(r), this.storage.remove(r, !0), this.register_once(i))), this.storage === o.localStorage && (i = o.cookie.parse(this.name), o.cookie.remove(this.name), o.cookie.remove(this.name, !0), i && this.register_once(i))
    };
    O.prototype.save = function() {
        this.disabled || this.storage.set(this.name, o.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
    };
    O.prototype.load_prop = function(t) {
        return this.load(), this.props[t]
    };
    O.prototype.remove = function() {
        this.storage.remove(this.name, !1, this.cookie_domain), this.storage.remove(this.name, !0, this.cookie_domain)
    };
    O.prototype.clear = function() {
        this.remove(), this.props = {}
    };
    O.prototype.register_once = function(t, e, r) {
        return o.isObject(t) ? (typeof e > "u" && (e = "None"), this.expire_days = typeof r > "u" ? this.default_expiry : r, this.load(), o.each(t, function(i, s) {
            (!this.props.hasOwnProperty(s) || this.props[s] === e) && (this.props[s] = i)
        }, this), this.save(), !0) : !1
    };
    O.prototype.register = function(t, e) {
        return o.isObject(t) ? (this.expire_days = typeof e > "u" ? this.default_expiry : e, this.load(), o.extend(this.props, t), this.save(), !0) : !1
    };
    O.prototype.unregister = function(t) {
        this.load(), t in this.props && (delete this.props[t], this.save())
    };
    O.prototype.update_search_keyword = function(t) {
        this.register(o.info.searchInfo(t))
    };
    O.prototype.update_referrer_info = function(t) {
        this.register_once({
            $initial_referrer: t || "$direct",
            $initial_referring_domain: o.info.referringDomain(t) || "$direct"
        }, "")
    };
    O.prototype.get_referrer_info = function() {
        return o.strip_empty_properties({
            $initial_referrer: this.props.$initial_referrer,
            $initial_referring_domain: this.props.$initial_referring_domain
        })
    };
    O.prototype.update_config = function(t) {
        this.default_expiry = this.expire_days = t.cookie_expiration, this.set_disabled(t.disable_persistence), this.set_cookie_domain(t.cookie_domain), this.set_cross_site(t.cross_site_cookie), this.set_cross_subdomain(t.cross_subdomain_cookie), this.set_secure(t.secure_cookie)
    };
    O.prototype.set_disabled = function(t) {
        this.disabled = t, this.disabled ? this.remove() : this.save()
    };
    O.prototype.set_cookie_domain = function(t) {
        t !== this.cookie_domain && (this.remove(), this.cookie_domain = t, this.save())
    };
    O.prototype.set_cross_site = function(t) {
        t !== this.cross_site && (this.cross_site = t, this.remove(), this.save())
    };
    O.prototype.set_cross_subdomain = function(t) {
        t !== this.cross_subdomain && (this.cross_subdomain = t, this.remove(), this.save())
    };
    O.prototype.get_cross_subdomain = function() {
        return this.cross_subdomain
    };
    O.prototype.set_secure = function(t) {
        t !== this.secure && (this.secure = !!t, this.remove(), this.save())
    };
    O.prototype._add_to_people_queue = function(t, e) {
        var r = this._get_queue_key(t),
            i = e[t],
            s = this._get_or_create_queue(He),
            a = this._get_or_create_queue(Lt),
            f = this._get_or_create_queue(ye),
            u = this._get_or_create_queue(tt),
            l = this._get_or_create_queue(rt),
            E = this._get_or_create_queue(Ve, []),
            x = this._get_or_create_queue(Be, []);
        r === In ? (o.extend(s, i), this._pop_from_people_queue(tt, i), this._pop_from_people_queue(rt, i), this._pop_from_people_queue(ye, i)) : r === On ? (o.each(i, function(h, b) {
            b in a || (a[b] = h)
        }), this._pop_from_people_queue(ye, i)) : r === Pn ? o.each(i, function(h) {
            o.each([s, a, u, l], function(b) {
                h in b && delete b[h]
            }), o.each(x, function(b) {
                h in b && delete b[h]
            }), f[h] = !0
        }) : r === Vn ? (o.each(i, function(h, b) {
            b in s ? s[b] += h : (b in u || (u[b] = 0), u[b] += h)
        }, this), this._pop_from_people_queue(ye, i)) : r === $n ? (o.each(i, function(h, b) {
            o.isArray(h) && (b in l || (l[b] = []), l[b] = l[b].concat(h))
        }), this._pop_from_people_queue(ye, i)) : r === Mn ? (E.push(i), this._pop_from_people_queue(Be, i)) : r === kn && (x.push(i), this._pop_from_people_queue(ye, i)), G.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"), G.log(e), this.save()
    };
    O.prototype._pop_from_people_queue = function(t, e) {
        var r = this.props[this._get_queue_key(t)];
        o.isUndefined(r) || o.each(e, function(i, s) {
            t === Be || t === Ve ? o.each(r, function(a) {
                a[s] === i && delete a[s]
            }) : delete r[s]
        }, this)
    };
    O.prototype.load_queue = function(t) {
        return this.load_prop(this._get_queue_key(t))
    };
    O.prototype._get_queue_key = function(t) {
        if (t === He) return In;
        if (t === Lt) return On;
        if (t === ye) return Pn;
        if (t === tt) return Vn;
        if (t === Be) return kn;
        if (t === Ve) return Mn;
        if (t === rt) return $n;
        G.error("Invalid queue:", t)
    };
    O.prototype._get_or_create_queue = function(t, e) {
        var r = this._get_queue_key(t);
        return e = o.isUndefined(e) ? {} : e, this.props[r] || (this.props[r] = e)
    };
    O.prototype.set_event_timer = function(t, e) {
        var r = this.load_prop(qt) || {};
        r[t] = e, this.props[qt] = r, this.save()
    };
    O.prototype.remove_event_timer = function(t) {
        var e = this.load_prop(qt) || {},
            r = e[t];
        return o.isUndefined(r) || (delete this.props[qt][t], this.save()), r
    };
    var Gn, ue, js = 0,
        nu = 1,
        iu = function(t) {
            return t
        },
        Ht = function() {},
        be = "mixpanel",
        Fs = "base64",
        su = "json",
        Xn = "$device:",
        _t = te.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        qs = !_t && Ce.indexOf("MSIE") === -1 && Ce.indexOf("Mozilla") === -1,
        Rr = null;
    qe.sendBeacon && (Rr = function() {
        return qe.sendBeacon.apply(qe, arguments)
    });
    var Hs = {
            track: "track/",
            engage: "engage/",
            groups: "groups/"
        },
        Ui = {
            api_host: "https://api-js.mixpanel.com",
            api_routes: Hs,
            api_method: "POST",
            api_transport: "XHR",
            api_payload_format: Fs,
            app_host: "https://mixpanel.com",
            cdn: "https://cdn.mxpnl.com",
            cross_site_cookie: !1,
            cross_subdomain_cookie: !0,
            error_reporter: Ht,
            persistence: "cookie",
            persistence_name: "",
            cookie_domain: "",
            cookie_name: "",
            loaded: Ht,
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
        Ws = !1,
        y = function() {},
        cn = function(t, e, r) {
            var i, s = r === be ? ue : ue[r];
            if (s && Gn === js) i = s;
            else {
                if (s && !o.isArray(s)) {
                    G.error("You have already initialized " + r);
                    return
                }
                i = new y
            }
            if (i._cached_groups = {}, i._init(t, e, r), i.people = new w, i.people._init(i), !i.get_config("skip_first_touch_marketing")) {
                var a = o.info.campaignParams(null),
                    f = {},
                    u = !1;
                o.each(a, function(l, E) {
                    f["initial_" + E] = l, l && (u = !0)
                }), u && i.people.set_once(f)
            }
            return Pe.DEBUG = Pe.DEBUG || i.get_config("debug"), !o.isUndefined(s) && o.isArray(s) && (i._execute_array.call(i.people, s.people), i._execute_array(s)), i
        };
    y.prototype.init = function(t, e, r) {
        if (o.isUndefined(r)) {
            this.report_error("You must name your new library: init(token, config, name)");
            return
        }
        if (r === be) {
            this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            return
        }
        var i = cn(t, e, r);
        return ue[r] = i, i._loaded(), i
    };
    y.prototype._init = function(t, e, r) {
        e = e || {}, this.__loaded = !0, this.config = {};
        var i = {};
        if (!("api_payload_format" in e)) {
            var s = e.api_host || Ui.api_host;
            s.match(/\.mixpanel\.com/) && (i.api_payload_format = su)
        }
        if (this.set_config(o.extend({}, Ui, i, e, {
                name: r,
                token: t,
                callback_fn: (r === be ? r : be + "." + r) + "._jsc"
            })), this._jsc = Ht, this.__dom_loaded_queue = [], this.__request_queue = [], this.__disabled_events = [], this._flags = {
                disable_all_events: !1,
                identify_called: !1
            }, this.request_batchers = {}, this._batch_requests = this.get_config("batch_requests"), this._batch_requests) {
            if (!o.localStorage.is_supported(!0) || !_t) this._batch_requests = !1, G.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support"), o.each(this.get_batcher_configs(), function(u) {
                G.log("Clearing batch queue " + u.queue_key), o.localStorage.remove(u.queue_key)
            });
            else if (this.init_batchers(), Rr && te.addEventListener) {
                var a = o.bind(function() {
                    this.request_batchers.events.stopped || this.request_batchers.events.flush({
                        unloading: !0
                    })
                }, this);
                te.addEventListener("pagehide", function(u) {
                    u.persisted && a()
                }), te.addEventListener("visibilitychange", function() {
                    F.visibilityState === "hidden" && a()
                })
            }
        }
        this.persistence = this.cookie = new O(this.config), this.unpersisted_superprops = {}, this._gdpr_init();
        var f = o.UUID();
        this.get_distinct_id() || this.register_once({
            distinct_id: Xn + f,
            $device_id: f
        }, ""), this.get_config("track_pageview") && this.track_pageview()
    };
    y.prototype._loaded = function() {
        this.get_config("loaded")(this), this._set_default_superprops()
    };
    y.prototype._set_default_superprops = function() {
        this.persistence.update_search_keyword(F.referrer), this.get_config("store_google") && this.register(o.info.campaignParams()), this.get_config("save_referrer") && this.persistence.update_referrer_info(F.referrer)
    };
    y.prototype._dom_loaded = function() {
        o.each(this.__dom_loaded_queue, function(t) {
            this._track_dom.apply(this, t)
        }, this), this.has_opted_out_tracking() || o.each(this.__request_queue, function(t) {
            this._send_request.apply(this, t)
        }, this), delete this.__dom_loaded_queue, delete this.__request_queue
    };
    y.prototype._track_dom = function(t, e) {
        if (this.get_config("img")) return this.report_error("You can't use DOM tracking functions with img = true."), !1;
        if (!Ws) return this.__dom_loaded_queue.push([t, e]), !1;
        var r = new t().init(this);
        return r.track.apply(r, e)
    };
    y.prototype._prepare_callback = function(t, e) {
        if (o.isUndefined(t)) return null;
        if (_t) {
            var r = function(f) {
                t(f, e)
            };
            return r
        } else {
            var i = this._jsc,
                s = "" + Math.floor(Math.random() * 1e8),
                a = this.get_config("callback_fn") + "[" + s + "]";
            return i[s] = function(f) {
                delete i[s], t(f, e)
            }, a
        }
    };
    y.prototype._send_request = function(t, e, r, i) {
        var s = !0;
        if (qs) return this.__request_queue.push(arguments), s;
        var a = {
                method: this.get_config("api_method"),
                transport: this.get_config("api_transport"),
                verbose: this.get_config("verbose")
            },
            f = null;
        !i && (o.isFunction(r) || typeof r == "string") && (i = r, r = null), r = o.extend(a, r || {}), _t || (r.method = "GET");
        var u = r.method === "POST",
            l = Rr && u && r.transport.toLowerCase() === "sendbeacon",
            E = r.verbose;
        e.verbose && (E = !0), this.get_config("test") && (e.test = 1), E && (e.verbose = 1), this.get_config("img") && (e.img = 1), _t || (i ? e.callback = i : (E || this.get_config("test")) && (e.callback = "(function(){})")), e.ip = this.get_config("ip") ? 1 : 0, e._ = new Date().getTime().toString(), u && (f = "data=" + encodeURIComponent(e.data), delete e.data), t += "?" + o.HTTPBuildQuery(e);
        var x = this;
        if ("img" in e) {
            var h = F.createElement("img");
            h.src = t, F.body.appendChild(h)
        } else if (l) {
            try {
                s = Rr(t, f)
            } catch (z) {
                x.report_error(z), s = !1
            }
            try {
                i && i(s ? 1 : 0)
            } catch (z) {
                x.report_error(z)
            }
        } else if (_t) try {
            var b = new XMLHttpRequest;
            b.open(r.method, t, !0);
            var L = this.get_config("xhr_headers");
            if (u && (L["Content-Type"] = "application/x-www-form-urlencoded"), o.each(L, function(z, W) {
                    b.setRequestHeader(W, z)
                }), r.timeout_ms && typeof b.timeout < "u") {
                b.timeout = r.timeout_ms;
                var A = new Date().getTime()
            }
            b.withCredentials = !0, b.onreadystatechange = function() {
                if (b.readyState === 4)
                    if (b.status === 200) {
                        if (i)
                            if (E) {
                                var z;
                                try {
                                    z = o.JSONDecode(b.responseText)
                                } catch (oe) {
                                    if (x.report_error(oe), r.ignore_json_errors) z = b.responseText;
                                    else return
                                }
                                i(z)
                            } else i(Number(b.responseText))
                    } else {
                        var W;
                        b.timeout && !b.status && new Date().getTime() - A >= b.timeout ? W = "timeout" : W = "Bad HTTP status: " + b.status + " " + b.statusText, x.report_error(W), i && i(E ? {
                            status: 0,
                            error: W,
                            xhr_req: b
                        } : 0)
                    }
            }, b.send(f)
        } catch (z) {
            x.report_error(z), s = !1
        } else {
            var U = F.createElement("script");
            U.type = "text/javascript", U.async = !0, U.defer = !0, U.src = t;
            var B = F.getElementsByTagName("script")[0];
            B.parentNode.insertBefore(U, B)
        }
        return s
    };
    y.prototype._execute_array = function(t) {
        var e, r = [],
            i = [],
            s = [];
        o.each(t, function(f) {
            f && (e = f[0], o.isArray(e) ? s.push(f) : typeof f == "function" ? f.call(this) : o.isArray(f) && e === "alias" ? r.push(f) : o.isArray(f) && e.indexOf("track") !== -1 && typeof this[e] == "function" ? s.push(f) : i.push(f))
        }, this);
        var a = function(f, u) {
            o.each(f, function(l) {
                if (o.isArray(l[0])) {
                    var E = u;
                    o.each(l, function(x) {
                        E = E[x[0]].apply(E, x.slice(1))
                    })
                } else this[l[0]].apply(this, l.slice(1))
            }, u)
        };
        a(r, this), a(i, this), a(s, this)
    };
    y.prototype.are_batchers_initialized = function() {
        return !!this.request_batchers.events
    };
    y.prototype.get_batcher_configs = function() {
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
    y.prototype.init_batchers = function() {
        if (!this.are_batchers_initialized()) {
            var t = o.bind(function(r) {
                    return new Ke(r.queue_key, {
                        libConfig: this.config,
                        sendRequestFunc: o.bind(function(i, s, a) {
                            this._send_request(this.get_config("api_host") + r.endpoint, this._encode_data_for_request(i), s, this._prepare_callback(a, i))
                        }, this),
                        beforeSendHook: o.bind(function(i) {
                            return this._run_hook("before_send_" + r.type, i)
                        }, this),
                        errorReporter: this.get_config("error_reporter"),
                        stopAllBatchingFunc: o.bind(this.stop_batch_senders, this)
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
    y.prototype.start_batch_senders = function() {
        this._batchers_were_started = !0, this.are_batchers_initialized() && (this._batch_requests = !0, o.each(this.request_batchers, function(t) {
            t.start()
        }))
    };
    y.prototype.stop_batch_senders = function() {
        this._batch_requests = !1, o.each(this.request_batchers, function(t) {
            t.stop(), t.clear()
        })
    };
    y.prototype.push = function(t) {
        this._execute_array([t])
    };
    y.prototype.disable = function(t) {
        typeof t > "u" ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(t)
    };
    y.prototype._encode_data_for_request = function(t) {
        var e = o.JSONEncode(t);
        return this.get_config("api_payload_format") === Fs && (e = o.base64Encode(e)), {
            data: e
        }
    };
    y.prototype._track_or_batch = function(t, e) {
        var r = o.truncate(t.data, 255),
            i = t.endpoint,
            s = t.batcher,
            a = t.should_send_immediately,
            f = t.send_request_options || {};
        e = e || Ht;
        var u = !0,
            l = o.bind(function() {
                return f.skip_hooks || (r = this._run_hook("before_send_" + t.type, r)), r ? (G.log("MIXPANEL REQUEST:"), G.log(r), this._send_request(i, this._encode_data_for_request(r), f, this._prepare_callback(e, r))) : null
            }, this);
        return this._batch_requests && !a ? s.enqueue(r, function(E) {
            E ? e(1, r) : l()
        }) : u = l(), u && r
    };
    y.prototype.track = vt(function(t, e, r, i) {
        !i && typeof r == "function" && (i = r, r = null), r = r || {};
        var s = r.transport;
        s && (r.transport = s);
        var a = r.send_immediately;
        if (typeof i != "function" && (i = Ht), o.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.track");
            return
        }
        if (this._event_is_disabled(t)) {
            i(0);
            return
        }
        e = o.extend({}, e), e.token = this.get_config("token");
        var f = this.persistence.remove_event_timer(t);
        if (!o.isUndefined(f)) {
            var u = new Date().getTime() - f;
            e.$duration = parseFloat((u / 1e3).toFixed(3))
        }
        this._set_default_superprops();
        var l = this.get_config("track_marketing") ? o.info.marketingParams() : {};
        e = o.extend({}, o.info.properties(), l, this.persistence.properties(), this.unpersisted_superprops, e);
        var E = this.get_config("property_blacklist");
        o.isArray(E) ? o.each(E, function(b) {
            delete e[b]
        }) : this.report_error("Invalid value for property_blacklist config: " + E);
        var x = {
                event: t,
                properties: e
            },
            h = this._track_or_batch({
                type: "events",
                data: x,
                endpoint: this.get_config("api_host") + "/" + this.get_config("api_routes").track,
                batcher: this.request_batchers.events,
                should_send_immediately: a,
                send_request_options: r
            }, i);
        return h
    });
    y.prototype.set_group = vt(function(t, e, r) {
        o.isArray(e) || (e = [e]);
        var i = {};
        return i[t] = e, this.register(i), this.people.set(t, e, r)
    });
    y.prototype.add_group = vt(function(t, e, r) {
        var i = this.get_property(t),
            s = {};
        return i === void 0 ? (s[t] = [e], this.register(s)) : i.indexOf(e) === -1 && (i.push(e), s[t] = i, this.register(s)), this.people.union(t, e, r)
    });
    y.prototype.remove_group = vt(function(t, e, r) {
        var i = this.get_property(t);
        if (i !== void 0) {
            var s = i.indexOf(e);
            s > -1 && (i.splice(s, 1), this.register({
                group_key: i
            })), i.length === 0 && this.unregister(t)
        }
        return this.people.remove(t, e, r)
    });
    y.prototype.track_with_groups = vt(function(t, e, r, i) {
        var s = o.extend({}, e || {});
        return o.each(r, function(a, f) {
            a != null && (s[f] = a)
        }), this.track(t, s, i)
    });
    y.prototype._create_map_key = function(t, e) {
        return t + "_" + JSON.stringify(e)
    };
    y.prototype._remove_group_from_cache = function(t, e) {
        delete this._cached_groups[this._create_map_key(t, e)]
    };
    y.prototype.get_group = function(t, e) {
        var r = this._create_map_key(t, e),
            i = this._cached_groups[r];
        return (i === void 0 || i._group_key !== t || i._group_id !== e) && (i = new ee, i._init(this, t, e), this._cached_groups[r] = i), i
    };
    y.prototype.track_pageview = vt(function(t, e) {
        typeof t != "object" && (t = {}), e = e || {};
        var r = e.event_name || "$mp_web_page_view",
            i = o.extend(o.info.mpPageViewProperties(), o.info.campaignParams(), o.info.clickParams()),
            s = o.extend({}, i, t);
        return this.track(r, s)
    });
    y.prototype.track_links = function() {
        return this._track_dom.call(this, gt, arguments)
    };
    y.prototype.track_forms = function() {
        return this._track_dom.call(this, Br, arguments)
    };
    y.prototype.time_event = function(t) {
        if (o.isUndefined(t)) {
            this.report_error("No event name provided to mixpanel.time_event");
            return
        }
        this._event_is_disabled(t) || this.persistence.set_event_timer(t, new Date().getTime())
    };
    var au = {
            persistent: !0
        },
        jn = function(t) {
            var e;
            return o.isObject(t) ? e = t : o.isUndefined(t) ? e = {} : e = {
                days: t
            }, o.extend({}, au, e)
        };
    y.prototype.register = function(t, e) {
        var r = jn(e);
        r.persistent ? this.persistence.register(t, r.days) : o.extend(this.unpersisted_superprops, t)
    };
    y.prototype.register_once = function(t, e, r) {
        var i = jn(r);
        i.persistent ? this.persistence.register_once(t, e, i.days) : (typeof e > "u" && (e = "None"), o.each(t, function(s, a) {
            (!this.unpersisted_superprops.hasOwnProperty(a) || this.unpersisted_superprops[a] === e) && (this.unpersisted_superprops[a] = s)
        }, this))
    };
    y.prototype.unregister = function(t, e) {
        e = jn(e), e.persistent ? this.persistence.unregister(t) : delete this.unpersisted_superprops[t]
    };
    y.prototype._register_single = function(t, e) {
        var r = {};
        r[t] = e, this.register(r)
    };
    y.prototype.identify = function(t, e, r, i, s, a, f, u) {
        var l = this.get_distinct_id();
        if (t && l !== t) {
            if (typeof t == "string" && t.indexOf(Xn) === 0) return this.report_error("distinct_id cannot have $device: prefix"), -1;
            this.register({
                $user_id: t
            })
        }
        if (!this.get_property("$device_id")) {
            var E = l;
            this.register_once({
                $had_persisted_distinct_id: !0,
                $device_id: E
            }, "")
        }
        t !== l && t !== this.get_property(hr) && (this.unregister(hr), this.register({
            distinct_id: t
        })), this._flags.identify_called = !0, this.people._flush(e, r, i, s, a, f, u), t !== l && this.track("$identify", {
            distinct_id: t,
            $anon_distinct_id: l
        }, {
            skip_hooks: !0
        })
    };
    y.prototype.reset = function() {
        this.persistence.clear(), this._flags.identify_called = !1;
        var t = o.UUID();
        this.register_once({
            distinct_id: Xn + t,
            $device_id: t
        }, "")
    };
    y.prototype.get_distinct_id = function() {
        return this.get_property("distinct_id")
    };
    y.prototype.alias = function(t, e) {
        if (t === this.get_property(Xs)) return this.report_error("Attempting to create alias for existing People user - aborting."), -2;
        var r = this;
        return o.isUndefined(e) && (e = this.get_distinct_id()), t !== e ? (this._register_single(hr, t), this.track("$create_alias", {
            alias: t,
            distinct_id: e
        }, {
            skip_hooks: !0
        }, function() {
            r.identify(t)
        })) : (this.report_error("alias matches current distinct_id - skipping api call."), this.identify(t), -1)
    };
    y.prototype.name_tag = function(t) {
        this._register_single("mp_name_tag", t)
    };
    y.prototype.set_config = function(t) {
        if (o.isObject(t)) {
            o.extend(this.config, t);
            var e = t.batch_size;
            e && o.each(this.request_batchers, function(r) {
                r.resetBatchSize()
            }), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), Pe.DEBUG = Pe.DEBUG || this.get_config("debug")
        }
    };
    y.prototype.get_config = function(t) {
        return this.config[t]
    };
    y.prototype._run_hook = function(t) {
        var e = (this.config.hooks[t] || iu).apply(this, Fe.call(arguments, 1));
        return typeof e > "u" && (this.report_error(t + " hook did not return a value"), e = null), e
    };
    y.prototype.get_property = function(t) {
        return this.persistence.load_prop([t])
    };
    y.prototype.toString = function() {
        var t = this.get_config("name");
        return t !== be && (t = be + "." + t), t
    };
    y.prototype._event_is_disabled = function(t) {
        return o.isBlockedUA(Ce) || this._flags.disable_all_events || o.include(this.__disabled_events, t)
    };
    y.prototype._gdpr_init = function() {
        var t = this.get_config("opt_out_tracking_persistence_type") === "localStorage";
        t && o.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
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
        }) : !this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || o.cookie.get("mp_optout")) && (o.cookie.remove("mp_optout"), this.opt_out_tracking({
            clear_persistence: this.get_config("opt_out_persistence_by_default")
        }))
    };
    y.prototype._gdpr_update_persistence = function(t) {
        var e;
        if (t && t.clear_persistence) e = !0;
        else if (t && t.enable_persistence) e = !1;
        else return;
        !this.get_config("disable_persistence") && this.persistence.disabled !== e && this.persistence.set_disabled(e), e ? this.stop_batch_senders() : this._batchers_were_started && this.start_batch_senders()
    };
    y.prototype._gdpr_call_func = function(t, e) {
        return e = o.extend({
            track: o.bind(this.track, this),
            persistence_type: this.get_config("opt_out_tracking_persistence_type"),
            cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
            cookie_expiration: this.get_config("cookie_expiration"),
            cross_site_cookie: this.get_config("cross_site_cookie"),
            cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
            cookie_domain: this.get_config("cookie_domain"),
            secure_cookie: this.get_config("secure_cookie"),
            ignore_dnt: this.get_config("ignore_dnt")
        }, e), o.localStorage.is_supported() || (e.persistence_type = "cookie"), t(this.get_config("token"), {
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
    y.prototype.opt_in_tracking = function(t) {
        t = o.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Yf, t), this._gdpr_update_persistence(t)
    };
    y.prototype.opt_out_tracking = function(t) {
        t = o.extend({
            clear_persistence: !0,
            delete_user: !0
        }, t), t.delete_user && this.people && this.people._identify_called() && (this.people.delete_user(), this.people.clear_charges()), this._gdpr_call_func(Jf, t), this._gdpr_update_persistence(t)
    };
    y.prototype.has_opted_in_tracking = function(t) {
        return this._gdpr_call_func(Qf, t)
    };
    y.prototype.has_opted_out_tracking = function(t) {
        return this._gdpr_call_func(ks, t)
    };
    y.prototype.clear_opt_in_out_tracking = function(t) {
        t = o.extend({
            enable_persistence: !0
        }, t), this._gdpr_call_func(Zf, t), this._gdpr_update_persistence(t)
    };
    y.prototype.report_error = function(t, e) {
        G.error.apply(G.error, arguments);
        try {
            !e && !(t instanceof Error) && (t = new Error(t)), this.get_config("error_reporter")(t, e)
        } catch (r) {
            G.error(r)
        }
    };
    y.prototype.init = y.prototype.init;
    y.prototype.reset = y.prototype.reset;
    y.prototype.disable = y.prototype.disable;
    y.prototype.time_event = y.prototype.time_event;
    y.prototype.track = y.prototype.track;
    y.prototype.track_links = y.prototype.track_links;
    y.prototype.track_forms = y.prototype.track_forms;
    y.prototype.track_pageview = y.prototype.track_pageview;
    y.prototype.register = y.prototype.register;
    y.prototype.register_once = y.prototype.register_once;
    y.prototype.unregister = y.prototype.unregister;
    y.prototype.identify = y.prototype.identify;
    y.prototype.alias = y.prototype.alias;
    y.prototype.name_tag = y.prototype.name_tag;
    y.prototype.set_config = y.prototype.set_config;
    y.prototype.get_config = y.prototype.get_config;
    y.prototype.get_property = y.prototype.get_property;
    y.prototype.get_distinct_id = y.prototype.get_distinct_id;
    y.prototype.toString = y.prototype.toString;
    y.prototype.opt_out_tracking = y.prototype.opt_out_tracking;
    y.prototype.opt_in_tracking = y.prototype.opt_in_tracking;
    y.prototype.has_opted_out_tracking = y.prototype.has_opted_out_tracking;
    y.prototype.has_opted_in_tracking = y.prototype.has_opted_in_tracking;
    y.prototype.clear_opt_in_out_tracking = y.prototype.clear_opt_in_out_tracking;
    y.prototype.get_group = y.prototype.get_group;
    y.prototype.set_group = y.prototype.set_group;
    y.prototype.add_group = y.prototype.add_group;
    y.prototype.remove_group = y.prototype.remove_group;
    y.prototype.track_with_groups = y.prototype.track_with_groups;
    y.prototype.start_batch_senders = y.prototype.start_batch_senders;
    y.prototype.stop_batch_senders = y.prototype.stop_batch_senders;
    y.prototype.DEFAULT_API_ROUTES = Hs;
    O.prototype.properties = O.prototype.properties;
    O.prototype.update_search_keyword = O.prototype.update_search_keyword;
    O.prototype.update_referrer_info = O.prototype.update_referrer_info;
    O.prototype.get_cross_subdomain = O.prototype.get_cross_subdomain;
    O.prototype.clear = O.prototype.clear;
    var pt = {},
        fu = function() {
            o.each(pt, function(t, e) {
                e !== be && (ue[e] = t)
            }), ue._ = o
        },
        uu = function() {
            ue.init = function(t, e, r) {
                if (r) return ue[r] || (ue[r] = pt[r] = cn(t, e, r), ue[r]._loaded()), ue[r];
                var i = ue;
                pt[be] ? i = pt[be] : t && (i = cn(t, e, be), i._loaded(), pt[be] = i), ue = i, Gn === nu && (te[be] = ue), fu()
            }
        },
        lu = function() {
            function t() {
                t.done || (t.done = !0, Ws = !0, qs = !1, o.each(pt, function(i) {
                    i._dom_loaded()
                }))
            }

            function e() {
                try {
                    F.documentElement.doScroll("left")
                } catch {
                    setTimeout(e, 1);
                    return
                }
                t()
            }
            if (F.addEventListener) F.readyState === "complete" ? t() : F.addEventListener("DOMContentLoaded", t, !1);
            else if (F.attachEvent) {
                F.attachEvent("onreadystatechange", t);
                var r = !1;
                try {
                    r = te.frameElement === null
                } catch {}
                F.documentElement.doScroll && r && e()
            }
            o.register_event(te, "load", t, !0)
        };

    function ou() {
        return Gn = js, ue = new y, uu(), ue.init(), lu(), ue
    }
    var Eu = ou(),
        pu = Eu;
    const Bi = kf(pu);
    class Fn {
        static setup() {
            this.isSetup = !0, gtag("config", "G-V1QJVQMYF1", {
                send_page_view: !1
            }), Bi.init("2e284873b7269f13b850ac994abfd848", {
                debug: "false"
            })
        }
        static ga(e, r) {
            this.isSetup || this.setup(), gtag("event", e, r)
        }
        static mp(e, r) {
            this.isSetup || this.setup(), Bi.track(e, r)
        }
        static pageView(e) {
            this.ga("page_view", {
                page_title: e,
                page_location: `https://jackbox.tv/${e}`
            })
        }
        static gameStarted(e, r) {
            const i = {
                tag: e
            };
            r.isUGC !== void 0 && (i.is_ugc = r.isUGC), r.isSequel !== void 0 && (i.is_sequel = r.isSequel), r.locale !== void 0 && (i.locale = r.locale), r.mode !== void 0 && (i.mode = r.mode), r.numberOfPlayer !== void 0 && (i.number_of_players = r.numberOfPlayer), this.ga("game_start", i)
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
    le(Fn, "isSetup", !1);
    const cu = [{
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
        Ki = t => cu.find(e => e.tag === t || e.galleryId === t || e.categoryId === t);

    function xu() {
        this.__data__ = [], this.size = 0
    }
    var _u = xu;

    function hu(t, e) {
        return t === e || t !== t && e !== e
    }
    var Kr = hu,
        Ru = Kr;

    function bu(t, e) {
        for (var r = t.length; r--;)
            if (Ru(t[r][0], e)) return r;
        return -1
    }
    var dr = bu,
        Tu = dr,
        gu = Array.prototype,
        Lu = gu.splice;

    function Su(t) {
        var e = this.__data__,
            r = Tu(e, t);
        if (r < 0) return !1;
        var i = e.length - 1;
        return r == i ? e.pop() : Lu.call(e, r, 1), --this.size, !0
    }
    var yu = Su,
        Au = dr;

    function mu(t) {
        var e = this.__data__,
            r = Au(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
    var Cu = mu,
        vu = dr;

    function Uu(t) {
        return vu(this.__data__, t) > -1
    }
    var Bu = Uu,
        Ku = dr;

    function du(t, e) {
        var r = this.__data__,
            i = Ku(r, t);
        return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
    }
    var Nu = du,
        wu = _u,
        Du = yu,
        Iu = Cu,
        Ou = Bu,
        Pu = Nu;

    function Bt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    Bt.prototype.clear = wu;
    Bt.prototype.delete = Du;
    Bt.prototype.get = Iu;
    Bt.prototype.has = Ou;
    Bt.prototype.set = Pu;
    var Nr = Bt,
        Vu = Nr;

    function ku() {
        this.__data__ = new Vu, this.size = 0
    }
    var Mu = ku;

    function $u(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
    var Gu = $u;

    function Xu(t) {
        return this.__data__.get(t)
    }
    var ju = Xu;

    function Fu(t) {
        return this.__data__.has(t)
    }
    var qu = Fu,
        Hu = typeof se == "object" && se && se.Object === Object && se,
        zs = Hu,
        Wu = zs,
        zu = typeof self == "object" && self && self.Object === Object && self,
        Yu = Wu || zu || Function("return this")(),
        Kt = Yu,
        Ju = Kt,
        Qu = Ju.Symbol,
        Ys = Qu,
        di = Ys,
        Js = Object.prototype,
        Zu = Js.hasOwnProperty,
        el = Js.toString,
        kt = di ? di.toStringTag : void 0;

    function tl(t) {
        var e = Zu.call(t, kt),
            r = t[kt];
        try {
            t[kt] = void 0;
            var i = !0
        } catch {}
        var s = el.call(t);
        return i && (e ? t[kt] = r : delete t[kt]), s
    }
    var rl = tl,
        nl = Object.prototype,
        il = nl.toString;

    function sl(t) {
        return il.call(t)
    }
    var al = sl,
        Ni = Ys,
        fl = rl,
        ul = al,
        ll = "[object Null]",
        ol = "[object Undefined]",
        wi = Ni ? Ni.toStringTag : void 0;

    function El(t) {
        return t == null ? t === void 0 ? ol : ll : wi && wi in Object(t) ? fl(t) : ul(t)
    }
    var wr = El;

    function pl(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var st = pl,
        cl = wr,
        xl = st,
        _l = "[object AsyncFunction]",
        hl = "[object Function]",
        Rl = "[object GeneratorFunction]",
        bl = "[object Proxy]";

    function Tl(t) {
        if (!xl(t)) return !1;
        var e = cl(t);
        return e == hl || e == Rl || e == _l || e == bl
    }
    var qn = Tl,
        gl = Kt,
        Ll = gl["__core-js_shared__"],
        Sl = Ll,
        Zr = Sl,
        Di = function() {
            var t = /[^.]+$/.exec(Zr && Zr.keys && Zr.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function yl(t) {
        return !!Di && Di in t
    }
    var Al = yl,
        ml = Function.prototype,
        Cl = ml.toString;

    function vl(t) {
        if (t != null) {
            try {
                return Cl.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var Ul = vl,
        Bl = qn,
        Kl = Al,
        dl = st,
        Nl = Ul,
        wl = /[\\^$.*+?()[\]{}|]/g,
        Dl = /^\[object .+?Constructor\]$/,
        Il = Function.prototype,
        Ol = Object.prototype,
        Pl = Il.toString,
        Vl = Ol.hasOwnProperty,
        kl = RegExp("^" + Pl.call(Vl).replace(wl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function Ml(t) {
        if (!dl(t) || Kl(t)) return !1;
        var e = Bl(t) ? kl : Dl;
        return e.test(Nl(t))
    }
    var $l = Ml;

    function Gl(t, e) {
        return t == null ? void 0 : t[e]
    }
    var Xl = Gl,
        jl = $l,
        Fl = Xl;

    function ql(t, e) {
        var r = Fl(t, e);
        return jl(r) ? r : void 0
    }
    var Hn = ql,
        Hl = Hn,
        Wl = Kt,
        zl = Hl(Wl, "Map"),
        Qs = zl,
        Yl = Hn,
        Jl = Yl(Object, "create"),
        Dr = Jl,
        Ii = Dr;

    function Ql() {
        this.__data__ = Ii ? Ii(null) : {}, this.size = 0
    }
    var Zl = Ql;

    function eo(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
    var to = eo,
        ro = Dr,
        no = "__lodash_hash_undefined__",
        io = Object.prototype,
        so = io.hasOwnProperty;

    function ao(t) {
        var e = this.__data__;
        if (ro) {
            var r = e[t];
            return r === no ? void 0 : r
        }
        return so.call(e, t) ? e[t] : void 0
    }
    var fo = ao,
        uo = Dr,
        lo = Object.prototype,
        oo = lo.hasOwnProperty;

    function Eo(t) {
        var e = this.__data__;
        return uo ? e[t] !== void 0 : oo.call(e, t)
    }
    var po = Eo,
        co = Dr,
        xo = "__lodash_hash_undefined__";

    function _o(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = co && e === void 0 ? xo : e, this
    }
    var ho = _o,
        Ro = Zl,
        bo = to,
        To = fo,
        go = po,
        Lo = ho;

    function dt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    dt.prototype.clear = Ro;
    dt.prototype.delete = bo;
    dt.prototype.get = To;
    dt.prototype.has = go;
    dt.prototype.set = Lo;
    var So = dt,
        Oi = So,
        yo = Nr,
        Ao = Qs;

    function mo() {
        this.size = 0, this.__data__ = {
            hash: new Oi,
            map: new(Ao || yo),
            string: new Oi
        }
    }
    var Co = mo;

    function vo(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
    }
    var Uo = vo,
        Bo = Uo;

    function Ko(t, e) {
        var r = t.__data__;
        return Bo(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
    }
    var Ir = Ko,
        No = Ir;

    function wo(t) {
        var e = No(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
    var Do = wo,
        Io = Ir;

    function Oo(t) {
        return Io(this, t).get(t)
    }
    var Po = Oo,
        Vo = Ir;

    function ko(t) {
        return Vo(this, t).has(t)
    }
    var Mo = ko,
        $o = Ir;

    function Go(t, e) {
        var r = $o(this, t),
            i = r.size;
        return r.set(t, e), this.size += r.size == i ? 0 : 1, this
    }
    var Xo = Go,
        jo = Co,
        Fo = Do,
        qo = Po,
        Ho = Mo,
        Wo = Xo;

    function Nt(t) {
        var e = -1,
            r = t == null ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }
    Nt.prototype.clear = jo;
    Nt.prototype.delete = Fo;
    Nt.prototype.get = qo;
    Nt.prototype.has = Ho;
    Nt.prototype.set = Wo;
    var zo = Nt,
        Yo = Nr,
        Jo = Qs,
        Qo = zo,
        Zo = 200;

    function e0(t, e) {
        var r = this.__data__;
        if (r instanceof Yo) {
            var i = r.__data__;
            if (!Jo || i.length < Zo - 1) return i.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new Qo(i)
        }
        return r.set(t, e), this.size = r.size, this
    }
    var t0 = e0,
        r0 = Nr,
        n0 = Mu,
        i0 = Gu,
        s0 = ju,
        a0 = qu,
        f0 = t0;

    function wt(t) {
        var e = this.__data__ = new r0(t);
        this.size = e.size
    }
    wt.prototype.clear = n0;
    wt.prototype.delete = i0;
    wt.prototype.get = s0;
    wt.prototype.has = a0;
    wt.prototype.set = f0;
    var u0 = wt,
        l0 = Hn,
        o0 = function() {
            try {
                var t = l0(Object, "defineProperty");
                return t({}, "", {}), t
            } catch {}
        }(),
        Zs = o0,
        Pi = Zs;

    function E0(t, e, r) {
        e == "__proto__" && Pi ? Pi(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
    var Wn = E0,
        p0 = Wn,
        c0 = Kr;

    function x0(t, e, r) {
        (r !== void 0 && !c0(t[e], r) || r === void 0 && !(e in t)) && p0(t, e, r)
    }
    var ea = x0;

    function _0(t) {
        return function(e, r, i) {
            for (var s = -1, a = Object(e), f = i(e), u = f.length; u--;) {
                var l = f[t ? u : ++s];
                if (r(a[l], l, a) === !1) break
            }
            return e
        }
    }
    var h0 = _0,
        R0 = h0,
        b0 = R0(),
        T0 = b0,
        br = {
            exports: {}
        };
    br.exports;
    (function(t, e) {
        var r = Kt,
            i = e && !e.nodeType && e,
            s = i && !0 && t && !t.nodeType && t,
            a = s && s.exports === i,
            f = a ? r.Buffer : void 0,
            u = f ? f.allocUnsafe : void 0;

        function l(E, x) {
            if (x) return E.slice();
            var h = E.length,
                b = u ? u(h) : new E.constructor(h);
            return E.copy(b), b
        }
        t.exports = l
    })(br, br.exports);
    var g0 = br.exports,
        L0 = Kt,
        S0 = L0.Uint8Array,
        y0 = S0,
        Vi = y0;

    function A0(t) {
        var e = new t.constructor(t.byteLength);
        return new Vi(e).set(new Vi(t)), e
    }
    var m0 = A0,
        C0 = m0;

    function v0(t, e) {
        var r = e ? C0(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.length)
    }
    var U0 = v0;

    function B0(t, e) {
        var r = -1,
            i = t.length;
        for (e || (e = Array(i)); ++r < i;) e[r] = t[r];
        return e
    }
    var K0 = B0,
        d0 = st,
        ki = Object.create,
        N0 = function() {
            function t() {}
            return function(e) {
                if (!d0(e)) return {};
                if (ki) return ki(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }(),
        w0 = N0;

    function D0(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
    var I0 = D0,
        O0 = I0,
        P0 = O0(Object.getPrototypeOf, Object),
        ta = P0,
        V0 = Object.prototype;

    function k0(t) {
        var e = t && t.constructor,
            r = typeof e == "function" && e.prototype || V0;
        return t === r
    }
    var ra = k0,
        M0 = w0,
        $0 = ta,
        G0 = ra;

    function X0(t) {
        return typeof t.constructor == "function" && !G0(t) ? M0($0(t)) : {}
    }
    var j0 = X0;

    function F0(t) {
        return t != null && typeof t == "object"
    }
    var Jt = F0,
        q0 = wr,
        H0 = Jt,
        W0 = "[object Arguments]";

    function z0(t) {
        return H0(t) && q0(t) == W0
    }
    var Y0 = z0,
        Mi = Y0,
        J0 = Jt,
        na = Object.prototype,
        Q0 = na.hasOwnProperty,
        Z0 = na.propertyIsEnumerable,
        eE = Mi(function() {
            return arguments
        }()) ? Mi : function(t) {
            return J0(t) && Q0.call(t, "callee") && !Z0.call(t, "callee")
        },
        ia = eE,
        tE = Array.isArray,
        sa = tE,
        rE = 9007199254740991;

    function nE(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= rE
    }
    var aa = nE,
        iE = qn,
        sE = aa;

    function aE(t) {
        return t != null && sE(t.length) && !iE(t)
    }
    var zn = aE,
        fE = zn,
        uE = Jt;

    function lE(t) {
        return uE(t) && fE(t)
    }
    var oE = lE,
        Tr = {
            exports: {}
        };

    function EE() {
        return !1
    }
    var pE = EE;
    Tr.exports;
    (function(t, e) {
        var r = Kt,
            i = pE,
            s = e && !e.nodeType && e,
            a = s && !0 && t && !t.nodeType && t,
            f = a && a.exports === s,
            u = f ? r.Buffer : void 0,
            l = u ? u.isBuffer : void 0,
            E = l || i;
        t.exports = E
    })(Tr, Tr.exports);
    var fa = Tr.exports,
        cE = wr,
        xE = ta,
        _E = Jt,
        hE = "[object Object]",
        RE = Function.prototype,
        bE = Object.prototype,
        ua = RE.toString,
        TE = bE.hasOwnProperty,
        gE = ua.call(Object);

    function LE(t) {
        if (!_E(t) || cE(t) != hE) return !1;
        var e = xE(t);
        if (e === null) return !0;
        var r = TE.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && ua.call(r) == gE
    }
    var SE = LE,
        yE = wr,
        AE = aa,
        mE = Jt,
        CE = "[object Arguments]",
        vE = "[object Array]",
        UE = "[object Boolean]",
        BE = "[object Date]",
        KE = "[object Error]",
        dE = "[object Function]",
        NE = "[object Map]",
        wE = "[object Number]",
        DE = "[object Object]",
        IE = "[object RegExp]",
        OE = "[object Set]",
        PE = "[object String]",
        VE = "[object WeakMap]",
        kE = "[object ArrayBuffer]",
        ME = "[object DataView]",
        $E = "[object Float32Array]",
        GE = "[object Float64Array]",
        XE = "[object Int8Array]",
        jE = "[object Int16Array]",
        FE = "[object Int32Array]",
        qE = "[object Uint8Array]",
        HE = "[object Uint8ClampedArray]",
        WE = "[object Uint16Array]",
        zE = "[object Uint32Array]",
        Q = {};
    Q[$E] = Q[GE] = Q[XE] = Q[jE] = Q[FE] = Q[qE] = Q[HE] = Q[WE] = Q[zE] = !0;
    Q[CE] = Q[vE] = Q[kE] = Q[UE] = Q[ME] = Q[BE] = Q[KE] = Q[dE] = Q[NE] = Q[wE] = Q[DE] = Q[IE] = Q[OE] = Q[PE] = Q[VE] = !1;

    function YE(t) {
        return mE(t) && AE(t.length) && !!Q[yE(t)]
    }
    var JE = YE;

    function QE(t) {
        return function(e) {
            return t(e)
        }
    }
    var ZE = QE,
        gr = {
            exports: {}
        };
    gr.exports;
    (function(t, e) {
        var r = zs,
            i = e && !e.nodeType && e,
            s = i && !0 && t && !t.nodeType && t,
            a = s && s.exports === i,
            f = a && r.process,
            u = function() {
                try {
                    var l = s && s.require && s.require("util").types;
                    return l || f && f.binding && f.binding("util")
                } catch {}
            }();
        t.exports = u
    })(gr, gr.exports);
    var ep = gr.exports,
        tp = JE,
        rp = ZE,
        $i = ep,
        Gi = $i && $i.isTypedArray,
        np = Gi ? rp(Gi) : tp,
        la = np;

    function ip(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
    }
    var oa = ip,
        sp = Wn,
        ap = Kr,
        fp = Object.prototype,
        up = fp.hasOwnProperty;

    function lp(t, e, r) {
        var i = t[e];
        (!(up.call(t, e) && ap(i, r)) || r === void 0 && !(e in t)) && sp(t, e, r)
    }
    var op = lp,
        Ep = op,
        pp = Wn;

    function cp(t, e, r, i) {
        var s = !r;
        r || (r = {});
        for (var a = -1, f = e.length; ++a < f;) {
            var u = e[a],
                l = i ? i(r[u], t[u], u, r, t) : void 0;
            l === void 0 && (l = t[u]), s ? pp(r, u, l) : Ep(r, u, l)
        }
        return r
    }
    var xp = cp;

    function _p(t, e) {
        for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
        return i
    }
    var hp = _p,
        Rp = 9007199254740991,
        bp = /^(?:0|[1-9]\d*)$/;

    function Tp(t, e) {
        var r = typeof t;
        return e = e ?? Rp, !!e && (r == "number" || r != "symbol" && bp.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var Ea = Tp,
        gp = hp,
        Lp = ia,
        Sp = sa,
        yp = fa,
        Ap = Ea,
        mp = la,
        Cp = Object.prototype,
        vp = Cp.hasOwnProperty;

    function Up(t, e) {
        var r = Sp(t),
            i = !r && Lp(t),
            s = !r && !i && yp(t),
            a = !r && !i && !s && mp(t),
            f = r || i || s || a,
            u = f ? gp(t.length, String) : [],
            l = u.length;
        for (var E in t)(e || vp.call(t, E)) && !(f && (E == "length" || s && (E == "offset" || E == "parent") || a && (E == "buffer" || E == "byteLength" || E == "byteOffset") || Ap(E, l))) && u.push(E);
        return u
    }
    var Bp = Up;

    function Kp(t) {
        var e = [];
        if (t != null)
            for (var r in Object(t)) e.push(r);
        return e
    }
    var dp = Kp,
        Np = st,
        wp = ra,
        Dp = dp,
        Ip = Object.prototype,
        Op = Ip.hasOwnProperty;

    function Pp(t) {
        if (!Np(t)) return Dp(t);
        var e = wp(t),
            r = [];
        for (var i in t) i == "constructor" && (e || !Op.call(t, i)) || r.push(i);
        return r
    }
    var Vp = Pp,
        kp = Bp,
        Mp = Vp,
        $p = zn;

    function Gp(t) {
        return $p(t) ? kp(t, !0) : Mp(t)
    }
    var pa = Gp,
        Xp = xp,
        jp = pa;

    function Fp(t) {
        return Xp(t, jp(t))
    }
    var qp = Fp,
        Xi = ea,
        Hp = g0,
        Wp = U0,
        zp = K0,
        Yp = j0,
        ji = ia,
        Fi = sa,
        Jp = oE,
        Qp = fa,
        Zp = qn,
        ec = st,
        tc = SE,
        rc = la,
        qi = oa,
        nc = qp;

    function ic(t, e, r, i, s, a, f) {
        var u = qi(t, r),
            l = qi(e, r),
            E = f.get(l);
        if (E) {
            Xi(t, r, E);
            return
        }
        var x = a ? a(u, l, r + "", t, e, f) : void 0,
            h = x === void 0;
        if (h) {
            var b = Fi(l),
                L = !b && Qp(l),
                A = !b && !L && rc(l);
            x = l, b || L || A ? Fi(u) ? x = u : Jp(u) ? x = zp(u) : L ? (h = !1, x = Hp(l, !0)) : A ? (h = !1, x = Wp(l, !0)) : x = [] : tc(l) || ji(l) ? (x = u, ji(u) ? x = nc(u) : (!ec(u) || Zp(u)) && (x = Yp(l))) : h = !1
        }
        h && (f.set(l, x), s(x, l, i, a, f), f.delete(l)), Xi(t, r, x)
    }
    var sc = ic,
        ac = u0,
        fc = ea,
        uc = T0,
        lc = sc,
        oc = st,
        Ec = pa,
        pc = oa;

    function ca(t, e, r, i, s) {
        t !== e && uc(e, function(a, f) {
            if (s || (s = new ac), oc(a)) lc(t, e, f, r, ca, i, s);
            else {
                var u = i ? i(pc(t, f), a, f + "", t, e, s) : void 0;
                u === void 0 && (u = a), fc(t, f, u)
            }
        }, Ec)
    }
    var cc = ca;

    function xc(t) {
        return t
    }
    var xa = xc;

    function _c(t, e, r) {
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
    var hc = _c,
        Rc = hc,
        Hi = Math.max;

    function bc(t, e, r) {
        return e = Hi(e === void 0 ? t.length - 1 : e, 0),
            function() {
                for (var i = arguments, s = -1, a = Hi(i.length - e, 0), f = Array(a); ++s < a;) f[s] = i[e + s];
                s = -1;
                for (var u = Array(e + 1); ++s < e;) u[s] = i[s];
                return u[e] = r(f), Rc(t, this, u)
            }
    }
    var Tc = bc;

    function gc(t) {
        return function() {
            return t
        }
    }
    var Lc = gc,
        Sc = Lc,
        Wi = Zs,
        yc = xa,
        Ac = Wi ? function(t, e) {
            return Wi(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Sc(e),
                writable: !0
            })
        } : yc,
        mc = Ac,
        Cc = 800,
        vc = 16,
        Uc = Date.now;

    function Bc(t) {
        var e = 0,
            r = 0;
        return function() {
            var i = Uc(),
                s = vc - (i - r);
            if (r = i, s > 0) {
                if (++e >= Cc) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
    var Kc = Bc,
        dc = mc,
        Nc = Kc,
        wc = Nc(dc),
        Dc = wc,
        Ic = xa,
        Oc = Tc,
        Pc = Dc;

    function Vc(t, e) {
        return Pc(Oc(t, e, Ic), t + "")
    }
    var kc = Vc,
        Mc = Kr,
        $c = zn,
        Gc = Ea,
        Xc = st;

    function jc(t, e, r) {
        if (!Xc(r)) return !1;
        var i = typeof e;
        return (i == "number" ? $c(r) && Gc(e, r.length) : i == "string" && e in r) ? Mc(r[e], t) : !1
    }
    var Fc = jc,
        qc = kc,
        Hc = Fc;

    function Wc(t) {
        return qc(function(e, r) {
            var i = -1,
                s = r.length,
                a = s > 1 ? r[s - 1] : void 0,
                f = s > 2 ? r[2] : void 0;
            for (a = t.length > 3 && typeof a == "function" ? (s--, a) : void 0, f && Hc(r[0], r[1], f) && (a = s < 3 ? void 0 : a, s = 1), e = Object(e); ++i < s;) {
                var u = r[i];
                u && t(e, u, i, a)
            }
            return e
        })
    }
    var zc = Wc,
        Yc = cc,
        Jc = zc;
    Jc(function(t, e, r) {
        Yc(t, e, r)
    });
    const xt = class xt {
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
            return r.reduce((i, s) => (i.replaceAll(`<${s[0]}>`, `[${s[1]}]`), i.replaceAll(`</${s[0]}>`, `</${s[1]}>`), i), e)
        }
        static hexToRgb(e) {
            const r = new ArrayBuffer(4);
            new DataView(r).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
            const s = new Uint8Array(r);
            return `${s[1]},${s[2]},${s[3]}`
        }
        static adjustColor(e, r) {
            let i = !1,
                s = e;
            s[0] === "#" && (s = s.slice(1), i = !0);
            const a = parseInt(s, 16),
                f = Math.min(Math.max(0, (a >> 16) * r), 255),
                u = Math.min(Math.max(0, (a >> 8 & 255) * r), 255);
            let E = (Math.min(Math.max(0, (a & 255) * r), 255) | u << 8 | f << 16).toString(16);
            for (; E.length < s.length;) E = `0${E}`;
            return (i ? "#" : "") + E
        }
        static isInTolerance(e, r, i) {
            return !(Math.abs(e.x - r.x) < i || Math.abs(e.y - r.y) > i)
        }
        static getDistanceBetweenPoints(e, r) {
            const i = [e.x - r.x, e.y - r.y],
                s = Math.hypot(...i);
            return Math.round(s * 100) / 100
        }
        static getMidpoint(e, r) {
            return {
                x: (e.x + r.x) / 2,
                y: (e.y + r.y) / 2
            }
        }
        static getAngleBetweenPoints(e, r) {
            let s = Math.atan2(r.y - e.y, r.x - e.x) * (180 / Math.PI);
            return s < 0 && (s += 360), 360 - s
        }
        static getAngularDistance(e, r) {
            let i = (r - e) % 360;
            const s = i < 0 ? 1 : -1;
            return i = Math.abs(i), i > 180 ? s * (360 - i) : s * i
        }
        static getVelocity(e, r, i, s) {
            return this.getDistanceBetweenPoints(e, i) / (s - r)
        }
        static isInsideElement(e, r) {
            const i = r.getBoundingClientRect();
            return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
        }
        static cyrb128(e) {
            let r = 1779033703,
                i = 3144134277,
                s = 1013904242,
                a = 2773480762;
            for (let f = 0, u; f < e.length; f++) u = e.charCodeAt(f), r = i ^ Math.imul(r ^ u, 597399067), i = s ^ Math.imul(i ^ u, 2869860233), s = a ^ Math.imul(s ^ u, 951274213), a = r ^ Math.imul(a ^ u, 2716044179);
            return r = Math.imul(s ^ r >>> 18, 597399067), i = Math.imul(a ^ i >>> 22, 2869860233), s = Math.imul(r ^ s >>> 17, 951274213), a = Math.imul(i ^ a >>> 19, 2716044179), [(r ^ i ^ s ^ a) >>> 0, (i ^ r) >>> 0, (s ^ r) >>> 0, (a ^ r) >>> 0]
        }
        static sfc32(e, r, i, s) {
            return function() {
                e >>>= 0, r >>>= 0, i >>>= 0, s >>>= 0;
                let f = e + r | 0;
                return e = r ^ r >>> 9, r = i + (i << 3) | 0, i = i << 21 | i >>> 11, s = s + 1 | 0, f = f + s | 0, i = i + f | 0, (f >>> 0) / 4294967296
            }
        }
    };
    le(xt, "queryParams", new URLSearchParams(window.location.search)), le(xt, "getQueryParam", e => xt.queryParams.get(e)), le(xt, "sleep", e => new Promise(r => {
        window.setTimeout(r, e)
    }));
    let ct = xt;
    class Lr {
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
                namespace: ct.getQueryParam("namespace") ?? ct.getQueryParam("ns") ?? this.defaultNamespace,
                isDisabled: ct.queryParams.has("incognito") || ct.queryParams.has("nc")
            }, e && (window.tv.storage.tag = e), r && (window.tv.storage.code = r.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code))
        }
        static get(e, r) {
            return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, r)) : null
        }
        static set(e, r, i = "none") {
            if (this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, i), r)
        }
        static remove(e, r) {
            if (this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, r))
        }
        static setTag(e) {
            const r = e.toLowerCase(),
                i = this.get("tags") ?? "[]",
                s = r.split("-")[0];
            let a = JSON.parse(i);
            a = a.filter(f => {
                const u = f.split("-")[0];
                return s !== u
            }), a.push(r), this.set("tags", JSON.stringify(a))
        }
        static getScopedKey(e, r) {
            const i = `${this.namespace}:${e}`,
                s = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
                a = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
            if (r === "none") return i;
            if (r === "tag") {
                if (!s) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
                return s
            }
            if (r === "code") {
                if (!a) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
                return a
            }
            return a && window.localStorage.getItem(a) !== null ? a : s && window.localStorage.getItem(s) !== null ? s : i
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
                const i = r.split(":code:");
                i.length <= 1 || i[1] !== e && window.localStorage.removeItem(r)
            })
        }
    }
    le(Lr, "defaultNamespace", "tv");
    var zi = {
        exports: {}
    };
    (function(t, e) {
        var r = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof se < "u" && se,
            i = function() {
                function a() {
                    this.fetch = !1, this.DOMException = r.DOMException
                }
                return a.prototype = r, new a
            }();
        (function(a) {
            (function(f) {
                var u = typeof a < "u" && a || typeof self < "u" && self || typeof u < "u" && u,
                    l = {
                        searchParams: "URLSearchParams" in u,
                        iterable: "Symbol" in u && "iterator" in Symbol,
                        blob: "FileReader" in u && "Blob" in u && function() {
                            try {
                                return new Blob, !0
                            } catch {
                                return !1
                            }
                        }(),
                        formData: "FormData" in u,
                        arrayBuffer: "ArrayBuffer" in u
                    };

                function E(g) {
                    return g && DataView.prototype.isPrototypeOf(g)
                }
                if (l.arrayBuffer) var x = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    h = ArrayBuffer.isView || function(g) {
                        return g && x.indexOf(Object.prototype.toString.call(g)) > -1
                    };

                function b(g) {
                    if (typeof g != "string" && (g = String(g)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(g) || g === "") throw new TypeError('Invalid character in header field name: "' + g + '"');
                    return g.toLowerCase()
                }

                function L(g) {
                    return typeof g != "string" && (g = String(g)), g
                }

                function A(g) {
                    var C = {
                        next: function() {
                            var D = g.shift();
                            return {
                                done: D === void 0,
                                value: D
                            }
                        }
                    };
                    return l.iterable && (C[Symbol.iterator] = function() {
                        return C
                    }), C
                }

                function U(g) {
                    this.map = {}, g instanceof U ? g.forEach(function(C, D) {
                        this.append(D, C)
                    }, this) : Array.isArray(g) ? g.forEach(function(C) {
                        this.append(C[0], C[1])
                    }, this) : g && Object.getOwnPropertyNames(g).forEach(function(C) {
                        this.append(C, g[C])
                    }, this)
                }
                U.prototype.append = function(g, C) {
                    g = b(g), C = L(C);
                    var D = this.map[g];
                    this.map[g] = D ? D + ", " + C : C
                }, U.prototype.delete = function(g) {
                    delete this.map[b(g)]
                }, U.prototype.get = function(g) {
                    return g = b(g), this.has(g) ? this.map[g] : null
                }, U.prototype.has = function(g) {
                    return this.map.hasOwnProperty(b(g))
                }, U.prototype.set = function(g, C) {
                    this.map[b(g)] = L(C)
                }, U.prototype.forEach = function(g, C) {
                    for (var D in this.map) this.map.hasOwnProperty(D) && g.call(C, this.map[D], D, this)
                }, U.prototype.keys = function() {
                    var g = [];
                    return this.forEach(function(C, D) {
                        g.push(D)
                    }), A(g)
                }, U.prototype.values = function() {
                    var g = [];
                    return this.forEach(function(C) {
                        g.push(C)
                    }), A(g)
                }, U.prototype.entries = function() {
                    var g = [];
                    return this.forEach(function(C, D) {
                        g.push([D, C])
                    }), A(g)
                }, l.iterable && (U.prototype[Symbol.iterator] = U.prototype.entries);

                function B(g) {
                    if (g.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    g.bodyUsed = !0
                }

                function z(g) {
                    return new Promise(function(C, D) {
                        g.onload = function() {
                            C(g.result)
                        }, g.onerror = function() {
                            D(g.error)
                        }
                    })
                }

                function W(g) {
                    var C = new FileReader,
                        D = z(C);
                    return C.readAsArrayBuffer(g), D
                }

                function oe(g) {
                    var C = new FileReader,
                        D = z(C);
                    return C.readAsText(g), D
                }

                function ge(g) {
                    for (var C = new Uint8Array(g), D = new Array(C.length), k = 0; k < C.length; k++) D[k] = String.fromCharCode(C[k]);
                    return D.join("")
                }

                function Ee(g) {
                    if (g.slice) return g.slice(0);
                    var C = new Uint8Array(g.byteLength);
                    return C.set(new Uint8Array(g)), C.buffer
                }

                function Qe() {
                    return this.bodyUsed = !1, this._initBody = function(g) {
                        this.bodyUsed = this.bodyUsed, this._bodyInit = g, g ? typeof g == "string" ? this._bodyText = g : l.blob && Blob.prototype.isPrototypeOf(g) ? this._bodyBlob = g : l.formData && FormData.prototype.isPrototypeOf(g) ? this._bodyFormData = g : l.searchParams && URLSearchParams.prototype.isPrototypeOf(g) ? this._bodyText = g.toString() : l.arrayBuffer && l.blob && E(g) ? (this._bodyArrayBuffer = Ee(g.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(g) || h(g)) ? this._bodyArrayBuffer = Ee(g) : this._bodyText = g = Object.prototype.toString.call(g) : this._bodyText = "", this.headers.get("content-type") || (typeof g == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : l.searchParams && URLSearchParams.prototype.isPrototypeOf(g) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, l.blob && (this.blob = function() {
                        var g = B(this);
                        if (g) return g;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            var g = B(this);
                            return g || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        } else return this.blob().then(W)
                    }), this.text = function() {
                        var g = B(this);
                        if (g) return g;
                        if (this._bodyBlob) return oe(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(ge(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, l.formData && (this.formData = function() {
                        return this.text().then(he)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var re = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function ce(g) {
                    var C = g.toUpperCase();
                    return re.indexOf(C) > -1 ? C : g
                }

                function Y(g, C) {
                    if (!(this instanceof Y)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    C = C || {};
                    var D = C.body;
                    if (g instanceof Y) {
                        if (g.bodyUsed) throw new TypeError("Already read");
                        this.url = g.url, this.credentials = g.credentials, C.headers || (this.headers = new U(g.headers)), this.method = g.method, this.mode = g.mode, this.signal = g.signal, !D && g._bodyInit != null && (D = g._bodyInit, g.bodyUsed = !0)
                    } else this.url = String(g);
                    if (this.credentials = C.credentials || this.credentials || "same-origin", (C.headers || !this.headers) && (this.headers = new U(C.headers)), this.method = ce(C.method || this.method || "GET"), this.mode = C.mode || this.mode || null, this.signal = C.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && D) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(D), (this.method === "GET" || this.method === "HEAD") && (C.cache === "no-store" || C.cache === "no-cache")) {
                        var k = /([?&])_=[^&]*/;
                        if (k.test(this.url)) this.url = this.url.replace(k, "$1_=" + new Date().getTime());
                        else {
                            var M = /\?/;
                            this.url += (M.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                        }
                    }
                }
                Y.prototype.clone = function() {
                    return new Y(this, {
                        body: this._bodyInit
                    })
                };

                function he(g) {
                    var C = new FormData;
                    return g.trim().split("&").forEach(function(D) {
                        if (D) {
                            var k = D.split("="),
                                M = k.shift().replace(/\+/g, " "),
                                I = k.join("=").replace(/\+/g, " ");
                            C.append(decodeURIComponent(M), decodeURIComponent(I))
                        }
                    }), C
                }

                function Fr(g) {
                    var C = new U,
                        D = g.replace(/\r?\n[\t ]+/g, " ");
                    return D.split("\r").map(function(k) {
                        return k.indexOf(`
`) === 0 ? k.substr(1, k.length) : k
                    }).forEach(function(k) {
                        var M = k.split(":"),
                            I = M.shift().trim();
                        if (I) {
                            var $ = M.join(":").trim();
                            C.append(I, $)
                        }
                    }), C
                }
                Qe.call(Y.prototype);

                function xe(g, C) {
                    if (!(this instanceof xe)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    C || (C = {}), this.type = "default", this.status = C.status === void 0 ? 200 : C.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = C.statusText === void 0 ? "" : "" + C.statusText, this.headers = new U(C.headers), this.url = C.url || "", this._initBody(g)
                }
                Qe.call(xe.prototype), xe.prototype.clone = function() {
                    return new xe(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new U(this.headers),
                        url: this.url
                    })
                }, xe.error = function() {
                    var g = new xe(null, {
                        status: 0,
                        statusText: ""
                    });
                    return g.type = "error", g
                };
                var Pt = [301, 302, 303, 307, 308];
                xe.redirect = function(g, C) {
                    if (Pt.indexOf(C) === -1) throw new RangeError("Invalid status code");
                    return new xe(null, {
                        status: C,
                        headers: {
                            location: g
                        }
                    })
                }, f.DOMException = u.DOMException;
                try {
                    new f.DOMException
                } catch {
                    f.DOMException = function(C, D) {
                        this.message = C, this.name = D;
                        var k = Error(C);
                        this.stack = k.stack
                    }, f.DOMException.prototype = Object.create(Error.prototype), f.DOMException.prototype.constructor = f.DOMException
                }

                function Ne(g, C) {
                    return new Promise(function(D, k) {
                        var M = new Y(g, C);
                        if (M.signal && M.signal.aborted) return k(new f.DOMException("Aborted", "AbortError"));
                        var I = new XMLHttpRequest;

                        function $() {
                            I.abort()
                        }
                        I.onload = function() {
                            var j = {
                                status: I.status,
                                statusText: I.statusText,
                                headers: Fr(I.getAllResponseHeaders() || "")
                            };
                            j.url = "responseURL" in I ? I.responseURL : j.headers.get("X-Request-URL");
                            var Le = "response" in I ? I.response : I.responseText;
                            setTimeout(function() {
                                D(new xe(Le, j))
                            }, 0)
                        }, I.onerror = function() {
                            setTimeout(function() {
                                k(new TypeError("Network request failed"))
                            }, 0)
                        }, I.ontimeout = function() {
                            setTimeout(function() {
                                k(new TypeError("Network request failed"))
                            }, 0)
                        }, I.onabort = function() {
                            setTimeout(function() {
                                k(new f.DOMException("Aborted", "AbortError"))
                            }, 0)
                        };

                        function pe(j) {
                            try {
                                return j === "" && u.location.href ? u.location.href : j
                            } catch {
                                return j
                            }
                        }
                        I.open(M.method, pe(M.url), !0), M.credentials === "include" ? I.withCredentials = !0 : M.credentials === "omit" && (I.withCredentials = !1), "responseType" in I && (l.blob ? I.responseType = "blob" : l.arrayBuffer && M.headers.get("Content-Type") && M.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (I.responseType = "arraybuffer")), C && typeof C.headers == "object" && !(C.headers instanceof U) ? Object.getOwnPropertyNames(C.headers).forEach(function(j) {
                            I.setRequestHeader(j, L(C.headers[j]))
                        }) : M.headers.forEach(function(j, Le) {
                            I.setRequestHeader(Le, j)
                        }), M.signal && (M.signal.addEventListener("abort", $), I.onreadystatechange = function() {
                            I.readyState === 4 && M.signal.removeEventListener("abort", $)
                        }), I.send(typeof M._bodyInit > "u" ? null : M._bodyInit)
                    })
                }
                return Ne.polyfill = !0, u.fetch || (u.fetch = Ne, u.Headers = U, u.Request = Y, u.Response = xe), f.Headers = U, f.Request = Y, f.Response = xe, f.fetch = Ne, f
            })({})
        })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
        var s = r.fetch ? r : i;
        e = s.fetch, e.default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, t.exports = e
    })(zi, zi.exports);
    var Qc = function() {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var e = {},
                r = Symbol("test"),
                i = Object(r);
            if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]") return !1;
            var s = 42;
            e[r] = s;
            for (r in e) return !1;
            if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
            var a = Object.getOwnPropertySymbols(e);
            if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var f = Object.getOwnPropertyDescriptor(e, r);
                if (f.value !== s || f.enumerable !== !0) return !1
            }
            return !0
        },
        Yi = typeof Symbol < "u" && Symbol,
        Zc = Qc,
        ex = function() {
            return typeof Yi != "function" || typeof Symbol != "function" || typeof Yi("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Zc()
        },
        tx = "Function.prototype.bind called on incompatible ",
        en = Array.prototype.slice,
        rx = Object.prototype.toString,
        nx = "[object Function]",
        ix = function(e) {
            var r = this;
            if (typeof r != "function" || rx.call(r) !== nx) throw new TypeError(tx + r);
            for (var i = en.call(arguments, 1), s, a = function() {
                    if (this instanceof s) {
                        var x = r.apply(this, i.concat(en.call(arguments)));
                        return Object(x) === x ? x : this
                    } else return r.apply(e, i.concat(en.call(arguments)))
                }, f = Math.max(0, r.length - i.length), u = [], l = 0; l < f; l++) u.push("$" + l);
            if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
                var E = function() {};
                E.prototype = r.prototype, s.prototype = new E, E.prototype = null
            }
            return s
        },
        sx = ix,
        Yn = Function.prototype.bind || sx,
        ax = Yn,
        fx = ax.call(Function.call, Object.prototype.hasOwnProperty),
        V, St = SyntaxError,
        _a = Function,
        ht = TypeError,
        tn = function(t) {
            try {
                return _a('"use strict"; return (' + t + ").constructor;")()
            } catch {}
        },
        et = Object.getOwnPropertyDescriptor;
    if (et) try {
        et({}, "")
    } catch {
        et = null
    }
    var rn = function() {
            throw new ht
        },
        ux = et ? function() {
            try {
                return arguments.callee, rn
            } catch {
                try {
                    return et(arguments, "callee").get
                } catch {
                    return rn
                }
            }
        }() : rn,
        lt = ex(),
        Ge = Object.getPrototypeOf || function(t) {
            return t.__proto__
        },
        ot = {},
        lx = typeof Uint8Array > "u" ? V : Ge(Uint8Array),
        Rt = {
            "%AggregateError%": typeof AggregateError > "u" ? V : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": typeof ArrayBuffer > "u" ? V : ArrayBuffer,
            "%ArrayIteratorPrototype%": lt ? Ge([][Symbol.iterator]()) : V,
            "%AsyncFromSyncIteratorPrototype%": V,
            "%AsyncFunction%": ot,
            "%AsyncGenerator%": ot,
            "%AsyncGeneratorFunction%": ot,
            "%AsyncIteratorPrototype%": ot,
            "%Atomics%": typeof Atomics > "u" ? V : Atomics,
            "%BigInt%": typeof BigInt > "u" ? V : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": typeof DataView > "u" ? V : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": typeof Float32Array > "u" ? V : Float32Array,
            "%Float64Array%": typeof Float64Array > "u" ? V : Float64Array,
            "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? V : FinalizationRegistry,
            "%Function%": _a,
            "%GeneratorFunction%": ot,
            "%Int8Array%": typeof Int8Array > "u" ? V : Int8Array,
            "%Int16Array%": typeof Int16Array > "u" ? V : Int16Array,
            "%Int32Array%": typeof Int32Array > "u" ? V : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": lt ? Ge(Ge([][Symbol.iterator]())) : V,
            "%JSON%": typeof JSON == "object" ? JSON : V,
            "%Map%": typeof Map > "u" ? V : Map,
            "%MapIteratorPrototype%": typeof Map > "u" || !lt ? V : Ge(new Map()[Symbol.iterator]()),
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": typeof Promise > "u" ? V : Promise,
            "%Proxy%": typeof Proxy > "u" ? V : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": typeof Reflect > "u" ? V : Reflect,
            "%RegExp%": RegExp,
            "%Set%": typeof Set > "u" ? V : Set,
            "%SetIteratorPrototype%": typeof Set > "u" || !lt ? V : Ge(new Set()[Symbol.iterator]()),
            "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? V : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": lt ? Ge("" [Symbol.iterator]()) : V,
            "%Symbol%": lt ? Symbol : V,
            "%SyntaxError%": St,
            "%ThrowTypeError%": ux,
            "%TypedArray%": lx,
            "%TypeError%": ht,
            "%Uint8Array%": typeof Uint8Array > "u" ? V : Uint8Array,
            "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? V : Uint8ClampedArray,
            "%Uint16Array%": typeof Uint16Array > "u" ? V : Uint16Array,
            "%Uint32Array%": typeof Uint32Array > "u" ? V : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": typeof WeakMap > "u" ? V : WeakMap,
            "%WeakRef%": typeof WeakRef > "u" ? V : WeakRef,
            "%WeakSet%": typeof WeakSet > "u" ? V : WeakSet
        },
        ox = function t(e) {
            var r;
            if (e === "%AsyncFunction%") r = tn("async function () {}");
            else if (e === "%GeneratorFunction%") r = tn("function* () {}");
            else if (e === "%AsyncGeneratorFunction%") r = tn("async function* () {}");
            else if (e === "%AsyncGenerator%") {
                var i = t("%AsyncGeneratorFunction%");
                i && (r = i.prototype)
            } else if (e === "%AsyncIteratorPrototype%") {
                var s = t("%AsyncGenerator%");
                s && (r = Ge(s.prototype))
            }
            return Rt[e] = r, r
        },
        Ji = {
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
        Qt = Yn,
        Sr = fx,
        Ex = Qt.call(Function.call, Array.prototype.concat),
        px = Qt.call(Function.apply, Array.prototype.splice),
        Qi = Qt.call(Function.call, String.prototype.replace),
        yr = Qt.call(Function.call, String.prototype.slice),
        cx = Qt.call(Function.call, RegExp.prototype.exec),
        xx = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        _x = /\\(\\)?/g,
        hx = function(e) {
            var r = yr(e, 0, 1),
                i = yr(e, -1);
            if (r === "%" && i !== "%") throw new St("invalid intrinsic syntax, expected closing `%`");
            if (i === "%" && r !== "%") throw new St("invalid intrinsic syntax, expected opening `%`");
            var s = [];
            return Qi(e, xx, function(a, f, u, l) {
                s[s.length] = u ? Qi(l, _x, "$1") : f || a
            }), s
        },
        Rx = function(e, r) {
            var i = e,
                s;
            if (Sr(Ji, i) && (s = Ji[i], i = "%" + s[0] + "%"), Sr(Rt, i)) {
                var a = Rt[i];
                if (a === ot && (a = ox(i)), typeof a > "u" && !r) throw new ht("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: i,
                    value: a
                }
            }
            throw new St("intrinsic " + e + " does not exist!")
        },
        Jn = function(e, r) {
            if (typeof e != "string" || e.length === 0) throw new ht("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof r != "boolean") throw new ht('"allowMissing" argument must be a boolean');
            if (cx(/^%?[^%]*%?$/g, e) === null) throw new St("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var i = hx(e),
                s = i.length > 0 ? i[0] : "",
                a = Rx("%" + s + "%", r),
                f = a.name,
                u = a.value,
                l = !1,
                E = a.alias;
            E && (s = E[0], px(i, Ex([0, 1], E)));
            for (var x = 1, h = !0; x < i.length; x += 1) {
                var b = i[x],
                    L = yr(b, 0, 1),
                    A = yr(b, -1);
                if ((L === '"' || L === "'" || L === "`" || A === '"' || A === "'" || A === "`") && L !== A) throw new St("property names with quotes must have matching quotes");
                if ((b === "constructor" || !h) && (l = !0), s += "." + b, f = "%" + s + "%", Sr(Rt, f)) u = Rt[f];
                else if (u != null) {
                    if (!(b in u)) {
                        if (!r) throw new ht("base intrinsic for " + e + " exists, but the property is not available.");
                        return
                    }
                    if (et && x + 1 >= i.length) {
                        var U = et(u, b);
                        h = !!U, h && "get" in U && !("originalValue" in U.get) ? u = U.get : u = u[b]
                    } else h = Sr(u, b), u = u[b];
                    h && !l && (Rt[f] = u)
                }
            }
            return u
        },
        ha = {
            exports: {}
        };
    (function(t) {
        var e = Yn,
            r = Jn,
            i = r("%Function.prototype.apply%"),
            s = r("%Function.prototype.call%"),
            a = r("%Reflect.apply%", !0) || e.call(s, i),
            f = r("%Object.getOwnPropertyDescriptor%", !0),
            u = r("%Object.defineProperty%", !0),
            l = r("%Math.max%");
        if (u) try {
            u({}, "a", {
                value: 1
            })
        } catch {
            u = null
        }
        t.exports = function(h) {
            var b = a(e, s, arguments);
            if (f && u) {
                var L = f(b, "length");
                L.configurable && u(b, "length", {
                    value: 1 + l(0, h.length - (arguments.length - 1))
                })
            }
            return b
        };
        var E = function() {
            return a(e, i, arguments)
        };
        u ? u(t.exports, "apply", {
            value: E
        }) : t.exports.apply = E
    })(ha);
    var bx = ha.exports,
        Ra = Jn,
        ba = bx,
        Tx = ba(Ra("String.prototype.indexOf")),
        gx = function(e, r) {
            var i = Ra(e, !!r);
            return typeof i == "function" && Tx(e, ".prototype.") > -1 ? ba(i) : i
        },
        Qn = Jn,
        Dt = gx;
    Qn("%TypeError%");
    Qn("%WeakMap%", !0);
    Qn("%Map%", !0);
    Dt("WeakMap.prototype.get", !0);
    Dt("WeakMap.prototype.set", !0);
    Dt("WeakMap.prototype.has", !0);
    Dt("Map.prototype.get", !0);
    Dt("Map.prototype.set", !0);
    Dt("Map.prototype.has", !0);
    var Lx = String.prototype.replace,
        Sx = /%20/g,
        nn = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        Ta = {
            default: nn.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return Lx.call(t, Sx, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            },
            RFC1738: nn.RFC1738,
            RFC3986: nn.RFC3986
        },
        yx = Ta,
        sn = Object.prototype.hasOwnProperty,
        Ze = Array.isArray,
        me = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        Ax = function(e) {
            for (; e.length > 1;) {
                var r = e.pop(),
                    i = r.obj[r.prop];
                if (Ze(i)) {
                    for (var s = [], a = 0; a < i.length; ++a) typeof i[a] < "u" && s.push(i[a]);
                    r.obj[r.prop] = s
                }
            }
        },
        ga = function(e, r) {
            for (var i = r && r.plainObjects ? Object.create(null) : {}, s = 0; s < e.length; ++s) typeof e[s] < "u" && (i[s] = e[s]);
            return i
        },
        mx = function t(e, r, i) {
            if (!r) return e;
            if (typeof r != "object") {
                if (Ze(e)) e.push(r);
                else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !sn.call(Object.prototype, r)) && (e[r] = !0);
                else return [e, r];
                return e
            }
            if (!e || typeof e != "object") return [e].concat(r);
            var s = e;
            return Ze(e) && !Ze(r) && (s = ga(e, i)), Ze(e) && Ze(r) ? (r.forEach(function(a, f) {
                if (sn.call(e, f)) {
                    var u = e[f];
                    u && typeof u == "object" && a && typeof a == "object" ? e[f] = t(u, a, i) : e.push(a)
                } else e[f] = a
            }), e) : Object.keys(r).reduce(function(a, f) {
                var u = r[f];
                return sn.call(a, f) ? a[f] = t(a[f], u, i) : a[f] = u, a
            }, s)
        },
        Cx = function(e, r) {
            return Object.keys(r).reduce(function(i, s) {
                return i[s] = r[s], i
            }, e)
        },
        vx = function(t, e, r) {
            var i = t.replace(/\+/g, " ");
            if (r === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(i)
            } catch {
                return i
            }
        },
        Ux = function(e, r, i, s, a) {
            if (e.length === 0) return e;
            var f = e;
            if (typeof e == "symbol" ? f = Symbol.prototype.toString.call(e) : typeof e != "string" && (f = String(e)), i === "iso-8859-1") return escape(f).replace(/%u[0-9a-f]{4}/gi, function(x) {
                return "%26%23" + parseInt(x.slice(2), 16) + "%3B"
            });
            for (var u = "", l = 0; l < f.length; ++l) {
                var E = f.charCodeAt(l);
                if (E === 45 || E === 46 || E === 95 || E === 126 || E >= 48 && E <= 57 || E >= 65 && E <= 90 || E >= 97 && E <= 122 || a === yx.RFC1738 && (E === 40 || E === 41)) {
                    u += f.charAt(l);
                    continue
                }
                if (E < 128) {
                    u = u + me[E];
                    continue
                }
                if (E < 2048) {
                    u = u + (me[192 | E >> 6] + me[128 | E & 63]);
                    continue
                }
                if (E < 55296 || E >= 57344) {
                    u = u + (me[224 | E >> 12] + me[128 | E >> 6 & 63] + me[128 | E & 63]);
                    continue
                }
                l += 1, E = 65536 + ((E & 1023) << 10 | f.charCodeAt(l) & 1023), u += me[240 | E >> 18] + me[128 | E >> 12 & 63] + me[128 | E >> 6 & 63] + me[128 | E & 63]
            }
            return u
        },
        Bx = function(e) {
            for (var r = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], i = [], s = 0; s < r.length; ++s)
                for (var a = r[s], f = a.obj[a.prop], u = Object.keys(f), l = 0; l < u.length; ++l) {
                    var E = u[l],
                        x = f[E];
                    typeof x == "object" && x !== null && i.indexOf(x) === -1 && (r.push({
                        obj: f,
                        prop: E
                    }), i.push(x))
                }
            return Ax(r), e
        },
        Kx = function(e) {
            return Object.prototype.toString.call(e) === "[object RegExp]"
        },
        dx = function(e) {
            return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        Nx = function(e, r) {
            return [].concat(e, r)
        },
        wx = function(e, r) {
            if (Ze(e)) {
                for (var i = [], s = 0; s < e.length; s += 1) i.push(r(e[s]));
                return i
            }
            return r(e)
        },
        La = {
            arrayToObject: ga,
            assign: Cx,
            combine: Nx,
            compact: Bx,
            decode: vx,
            encode: Ux,
            isBuffer: dx,
            isRegExp: Kx,
            maybeMap: wx,
            merge: mx
        },
        Dx = La,
        Sa = Ta,
        Ix = Date.prototype.toISOString,
        Zi = Sa.default;
    Dx.encode, Sa.formatters[Zi];
    var Ox = La;
    Ox.decode;
    typeof WebSocket < "u" || (typeof MozWebSocket < "u" ? MozWebSocket : typeof se < "u" && (se.WebSocket || se.MozWebSocket));
    var ya = {
            exports: {}
        },
        bt = typeof Reflect == "object" ? Reflect : null,
        es = bt && typeof bt.apply == "function" ? bt.apply : function(e, r, i) {
            return Function.prototype.apply.call(e, r, i)
        },
        or;
    bt && typeof bt.ownKeys == "function" ? or = bt.ownKeys : Object.getOwnPropertySymbols ? or = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : or = function(e) {
        return Object.getOwnPropertyNames(e)
    };

    function Px(t) {
        console && console.warn && console.warn(t)
    }
    var Aa = Number.isNaN || function(e) {
        return e !== e
    };

    function X() {
        X.init.call(this)
    }
    ya.exports = X;
    ya.exports.once = $x;
    X.EventEmitter = X;
    X.prototype._events = void 0;
    X.prototype._eventsCount = 0;
    X.prototype._maxListeners = void 0;
    var ts = 10;

    function Or(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(X, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return ts
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || Aa(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            ts = t
        }
    });
    X.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    };
    X.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || Aa(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    };

    function ma(t) {
        return t._maxListeners === void 0 ? X.defaultMaxListeners : t._maxListeners
    }
    X.prototype.getMaxListeners = function() {
        return ma(this)
    };
    X.prototype.emit = function(e) {
        for (var r = [], i = 1; i < arguments.length; i++) r.push(arguments[i]);
        var s = e === "error",
            a = this._events;
        if (a !== void 0) s = s && a.error === void 0;
        else if (!s) return !1;
        if (s) {
            var f;
            if (r.length > 0 && (f = r[0]), f instanceof Error) throw f;
            var u = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
            throw u.context = f, u
        }
        var l = a[e];
        if (l === void 0) return !1;
        if (typeof l == "function") es(l, this, r);
        else
            for (var E = l.length, x = Ka(l, E), i = 0; i < E; ++i) es(x[i], this, r);
        return !0
    };

    function Ca(t, e, r, i) {
        var s, a, f;
        if (Or(r), a = t._events, a === void 0 ? (a = t._events = Object.create(null), t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), a = t._events), f = a[e]), f === void 0) f = a[e] = r, ++t._eventsCount;
        else if (typeof f == "function" ? f = a[e] = i ? [r, f] : [f, r] : i ? f.unshift(r) : f.push(r), s = ma(t), s > 0 && f.length > s && !f.warned) {
            f.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = t, u.type = e, u.count = f.length, Px(u)
        }
        return t
    }
    X.prototype.addListener = function(e, r) {
        return Ca(this, e, r, !1)
    };
    X.prototype.on = X.prototype.addListener;
    X.prototype.prependListener = function(e, r) {
        return Ca(this, e, r, !0)
    };

    function Vx() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function va(t, e, r) {
        var i = {
                fired: !1,
                wrapFn: void 0,
                target: t,
                type: e,
                listener: r
            },
            s = Vx.bind(i);
        return s.listener = r, i.wrapFn = s, s
    }
    X.prototype.once = function(e, r) {
        return Or(r), this.on(e, va(this, e, r)), this
    };
    X.prototype.prependOnceListener = function(e, r) {
        return Or(r), this.prependListener(e, va(this, e, r)), this
    };
    X.prototype.removeListener = function(e, r) {
        var i, s, a, f, u;
        if (Or(r), s = this._events, s === void 0) return this;
        if (i = s[e], i === void 0) return this;
        if (i === r || i.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, i.listener || r));
        else if (typeof i != "function") {
            for (a = -1, f = i.length - 1; f >= 0; f--)
                if (i[f] === r || i[f].listener === r) {
                    u = i[f].listener, a = f;
                    break
                } if (a < 0) return this;
            a === 0 ? i.shift() : kx(i, a), i.length === 1 && (s[e] = i[0]), s.removeListener !== void 0 && this.emit("removeListener", e, u || r)
        }
        return this
    };
    X.prototype.off = X.prototype.removeListener;
    X.prototype.removeAllListeners = function(e) {
        var r, i, s;
        if (i = this._events, i === void 0) return this;
        if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
        if (arguments.length === 0) {
            var a = Object.keys(i),
                f;
            for (s = 0; s < a.length; ++s) f = a[s], f !== "removeListener" && this.removeAllListeners(f);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if (r = i[e], typeof r == "function") this.removeListener(e, r);
        else if (r !== void 0)
            for (s = r.length - 1; s >= 0; s--) this.removeListener(e, r[s]);
        return this
    };

    function Ua(t, e, r) {
        var i = t._events;
        if (i === void 0) return [];
        var s = i[e];
        return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Mx(s) : Ka(s, s.length)
    }
    X.prototype.listeners = function(e) {
        return Ua(this, e, !0)
    };
    X.prototype.rawListeners = function(e) {
        return Ua(this, e, !1)
    };
    X.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ba.call(t, e)
    };
    X.prototype.listenerCount = Ba;

    function Ba(t) {
        var e = this._events;
        if (e !== void 0) {
            var r = e[t];
            if (typeof r == "function") return 1;
            if (r !== void 0) return r.length
        }
        return 0
    }
    X.prototype.eventNames = function() {
        return this._eventsCount > 0 ? or(this._events) : []
    };

    function Ka(t, e) {
        for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
        return r
    }

    function kx(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop()
    }

    function Mx(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e
    }

    function $x(t, e) {
        return new Promise(function(r, i) {
            function s(f) {
                t.removeListener(e, a), i(f)
            }

            function a() {
                typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments))
            }
            da(t, e, a, {
                once: !0
            }), e !== "error" && Gx(t, s, {
                once: !0
            })
        })
    }

    function Gx(t, e, r) {
        typeof t.on == "function" && da(t, "error", e, r)
    }

    function da(t, e, r, i) {
        if (typeof t.on == "function") i.once ? t.once(e, r) : t.on(e, r);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function s(a) {
            i.once && t.removeEventListener(e, s), r(a)
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }

    function Xx(...t) {
        console.log(...t)
    }

    function jx(t) {
        throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
    }
    var rs = {
        exports: {}
    };
    (function(t, e) {
        (function(r, i) {
            i(e)
        })(se, function(r) {
            var i = typeof window < "u" ? window : typeof se < "u" ? se : typeof self < "u" ? self : {},
                s = function(c, T) {
                    if (T = T.split(":")[0], c = +c, !c) return !1;
                    switch (T) {
                        case "http":
                        case "ws":
                            return c !== 80;
                        case "https":
                        case "wss":
                            return c !== 443;
                        case "ftp":
                            return c !== 21;
                        case "gopher":
                            return c !== 70;
                        case "file":
                            return !1
                    }
                    return c !== 0
                },
                a = Object.prototype.hasOwnProperty,
                f;

            function u(_) {
                try {
                    return decodeURIComponent(_.replace(/\+/g, " "))
                } catch {
                    return null
                }
            }

            function l(_) {
                try {
                    return encodeURIComponent(_)
                } catch {
                    return null
                }
            }

            function E(_) {
                for (var c = /([^=?#&]+)=?([^&]*)/g, T = {}, p; p = c.exec(_);) {
                    var R = u(p[1]),
                        S = u(p[2]);
                    R === null || S === null || R in T || (T[R] = S)
                }
                return T
            }

            function x(_, c) {
                c = c || "";
                var T = [],
                    p, R;
                typeof c != "string" && (c = "?");
                for (R in _)
                    if (a.call(_, R)) {
                        if (p = _[R], !p && (p === null || p === f || isNaN(p)) && (p = ""), R = l(R), p = l(p), R === null || p === null) continue;
                        T.push(R + "=" + p)
                    } return T.length ? c + T.join("&") : ""
            }
            var h = x,
                b = E,
                L = {
                    stringify: h,
                    parse: b
                },
                A = /[\n\r\t]/g,
                U = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                B = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                z = /^[a-zA-Z]:/,
                W = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;

            function oe(_) {
                return (_ || "").toString().replace(W, "")
            }
            var ge = [
                    ["#", "hash"],
                    ["?", "query"],
                    function(c, T) {
                        return re(T.protocol) ? c.replace(/\\/g, "/") : c
                    },
                    ["/", "pathname"],
                    ["@", "auth", 1],
                    [NaN, "host", void 0, 1, 1],
                    [/:(\d*)$/, "port", void 0, 1],
                    [NaN, "hostname", void 0, 1, 1]
                ],
                Ee = {
                    hash: 1,
                    query: 1
                };

            function Qe(_) {
                var c;
                typeof window < "u" ? c = window : typeof i < "u" ? c = i : typeof self < "u" ? c = self : c = {};
                var T = c.location || {};
                _ = _ || T;
                var p = {},
                    R = typeof _,
                    S;
                if (_.protocol === "blob:") p = new he(unescape(_.pathname), {});
                else if (R === "string") {
                    p = new he(_, {});
                    for (S in Ee) delete p[S]
                } else if (R === "object") {
                    for (S in _) S in Ee || (p[S] = _[S]);
                    p.slashes === void 0 && (p.slashes = U.test(_.href))
                }
                return p
            }

            function re(_) {
                return _ === "file:" || _ === "ftp:" || _ === "http:" || _ === "https:" || _ === "ws:" || _ === "wss:"
            }

            function ce(_, c) {
                _ = oe(_), _ = _.replace(A, ""), c = c || {};
                var T = B.exec(_),
                    p = T[1] ? T[1].toLowerCase() : "",
                    R = !!T[2],
                    S = !!T[3],
                    m = 0,
                    v;
                return R ? S ? (v = T[2] + T[3] + T[4], m = T[2].length + T[3].length) : (v = T[2] + T[4], m = T[2].length) : S ? (v = T[3] + T[4], m = T[3].length) : v = T[4], p === "file:" ? m >= 2 && (v = v.slice(2)) : re(p) ? v = T[4] : p ? R && (v = v.slice(2)) : m >= 2 && re(c.protocol) && (v = T[4]), {
                    protocol: p,
                    slashes: R || re(p),
                    slashesCount: m,
                    rest: v
                }
            }

            function Y(_, c) {
                if (_ === "") return c;
                for (var T = (c || "/").split("/").slice(0, -1).concat(_.split("/")), p = T.length, R = T[p - 1], S = !1, m = 0; p--;) T[p] === "." ? T.splice(p, 1) : T[p] === ".." ? (T.splice(p, 1), m++) : m && (p === 0 && (S = !0), T.splice(p, 1), m--);
                return S && T.unshift(""), (R === "." || R === "..") && T.push(""), T.join("/")
            }

            function he(_, c, T) {
                if (_ = oe(_), _ = _.replace(A, ""), !(this instanceof he)) return new he(_, c, T);
                var p, R, S, m, v, d, J = ge.slice(),
                    fe = typeof c,
                    K = this,
                    zr = 0;
                for (fe !== "object" && fe !== "string" && (T = c, c = null), T && typeof T != "function" && (T = L.parse), c = Qe(c), R = ce(_ || "", c), p = !R.protocol && !R.slashes, K.slashes = R.slashes || p && c.slashes, K.protocol = R.protocol || c.protocol || "", _ = R.rest, (R.protocol === "file:" && (R.slashesCount !== 2 || z.test(_)) || !R.slashes && (R.protocol || R.slashesCount < 2 || !re(K.protocol))) && (J[3] = [/(.*)/, "pathname"]); zr < J.length; zr++) {
                    if (m = J[zr], typeof m == "function") {
                        _ = m(_, K);
                        continue
                    }
                    S = m[0], d = m[1], S !== S ? K[d] = _ : typeof S == "string" ? (v = S === "@" ? _.lastIndexOf(S) : _.indexOf(S), ~v && (typeof m[2] == "number" ? (K[d] = _.slice(0, v), _ = _.slice(v + m[2])) : (K[d] = _.slice(v), _ = _.slice(0, v)))) : (v = S.exec(_)) && (K[d] = v[1], _ = _.slice(0, v.index)), K[d] = K[d] || p && m[3] && c[d] || "", m[4] && (K[d] = K[d].toLowerCase())
                }
                T && (K.query = T(K.query)), p && c.slashes && K.pathname.charAt(0) !== "/" && (K.pathname !== "" || c.pathname !== "") && (K.pathname = Y(K.pathname, c.pathname)), K.pathname.charAt(0) !== "/" && re(K.protocol) && (K.pathname = "/" + K.pathname), s(K.port, K.protocol) || (K.host = K.hostname, K.port = ""), K.username = K.password = "", K.auth && (v = K.auth.indexOf(":"), ~v ? (K.username = K.auth.slice(0, v), K.username = encodeURIComponent(decodeURIComponent(K.username)), K.password = K.auth.slice(v + 1), K.password = encodeURIComponent(decodeURIComponent(K.password))) : K.username = encodeURIComponent(decodeURIComponent(K.auth)), K.auth = K.password ? K.username + ":" + K.password : K.username), K.origin = K.protocol !== "file:" && re(K.protocol) && K.host ? K.protocol + "//" + K.host : "null", K.href = K.toString()
            }

            function Fr(_, c, T) {
                var p = this;
                switch (_) {
                    case "query":
                        typeof c == "string" && c.length && (c = (T || L.parse)(c)), p[_] = c;
                        break;
                    case "port":
                        p[_] = c, s(c, p.protocol) ? c && (p.host = p.hostname + ":" + c) : (p.host = p.hostname, p[_] = "");
                        break;
                    case "hostname":
                        p[_] = c, p.port && (c += ":" + p.port), p.host = c;
                        break;
                    case "host":
                        p[_] = c, /:\d+$/.test(c) ? (c = c.split(":"), p.port = c.pop(), p.hostname = c.join(":")) : (p.hostname = c, p.port = "");
                        break;
                    case "protocol":
                        p.protocol = c.toLowerCase(), p.slashes = !T;
                        break;
                    case "pathname":
                    case "hash":
                        if (c) {
                            var R = _ === "pathname" ? "/" : "#";
                            p[_] = c.charAt(0) !== R ? R + c : c
                        } else p[_] = c;
                        break;
                    case "username":
                    case "password":
                        p[_] = encodeURIComponent(c);
                        break;
                    case "auth":
                        var S = c.indexOf(":");
                        ~S ? (p.username = c.slice(0, S), p.username = encodeURIComponent(decodeURIComponent(p.username)), p.password = c.slice(S + 1), p.password = encodeURIComponent(decodeURIComponent(p.password))) : p.username = encodeURIComponent(decodeURIComponent(c))
                }
                for (var m = 0; m < ge.length; m++) {
                    var v = ge[m];
                    v[4] && (p[v[1]] = p[v[1]].toLowerCase())
                }
                return p.auth = p.password ? p.username + ":" + p.password : p.username, p.origin = p.protocol !== "file:" && re(p.protocol) && p.host ? p.protocol + "//" + p.host : "null", p.href = p.toString(), p
            }

            function xe(_) {
                (!_ || typeof _ != "function") && (_ = L.stringify);
                var c, T = this,
                    p = T.host,
                    R = T.protocol;
                R && R.charAt(R.length - 1) !== ":" && (R += ":");
                var S = R + (T.protocol && T.slashes || re(T.protocol) ? "//" : "");
                return T.username ? (S += T.username, T.password && (S += ":" + T.password), S += "@") : T.password ? (S += ":" + T.password, S += "@") : T.protocol !== "file:" && re(T.protocol) && !p && T.pathname !== "/" && (S += "@"), p[p.length - 1] === ":" && (p += ":"), S += p + T.pathname, c = typeof T.query == "object" ? _(T.query) : T.query, c && (S += c.charAt(0) !== "?" ? "?" + c : c), T.hash && (S += T.hash), S
            }
            he.prototype = {
                set: Fr,
                toString: xe
            }, he.extractProtocol = ce, he.location = Qe, he.trimLeft = oe, he.qs = L;
            var Pt = he;

            function Ne(_, c) {
                setTimeout(function(T) {
                    return _.call(T)
                }, 4, c)
            }

            function g(_, c) {
                typeof process < "u" && console[_].call(null, c)
            }

            function C(_, c) {
                _ === void 0 && (_ = []);
                var T = [];
                return _.forEach(function(p) {
                    c(p) || T.push(p)
                }), T
            }

            function D(_, c) {
                _ === void 0 && (_ = []);
                var T = [];
                return _.forEach(function(p) {
                    c(p) && T.push(p)
                }), T
            }
            var k = function() {
                this.listeners = {}
            };
            k.prototype.addEventListener = function(c, T) {
                typeof T == "function" && (Array.isArray(this.listeners[c]) || (this.listeners[c] = []), D(this.listeners[c], function(p) {
                    return p === T
                }).length === 0 && this.listeners[c].push(T))
            }, k.prototype.removeEventListener = function(c, T) {
                var p = this.listeners[c];
                this.listeners[c] = C(p, function(R) {
                    return R === T
                })
            }, k.prototype.dispatchEvent = function(c) {
                for (var T = this, p = [], R = arguments.length - 1; R-- > 0;) p[R] = arguments[R + 1];
                var S = c.type,
                    m = this.listeners[S];
                return Array.isArray(m) ? (m.forEach(function(v) {
                    p.length > 0 ? v.apply(T, p) : v.call(T, c)
                }), !0) : !1
            };

            function M(_) {
                var c = _.indexOf("?");
                return c >= 0 ? _.slice(0, c) : _
            }
            var I = function() {
                this.urlMap = {}
            };
            I.prototype.attachWebSocket = function(c, T) {
                var p = M(T),
                    R = this.urlMap[p];
                if (R && R.server && R.websockets.indexOf(c) === -1) return R.websockets.push(c), R.server
            }, I.prototype.addMembershipToRoom = function(c, T) {
                var p = this.urlMap[M(c.url)];
                p && p.server && p.websockets.indexOf(c) !== -1 && (p.roomMemberships[T] || (p.roomMemberships[T] = []), p.roomMemberships[T].push(c))
            }, I.prototype.attachServer = function(c, T) {
                var p = M(T),
                    R = this.urlMap[p];
                if (!R) return this.urlMap[p] = {
                    server: c,
                    websockets: [],
                    roomMemberships: {}
                }, c
            }, I.prototype.serverLookup = function(c) {
                var T = M(c),
                    p = this.urlMap[T];
                if (p) return p.server
            }, I.prototype.websocketsLookup = function(c, T, p) {
                var R = M(c),
                    S, m = this.urlMap[R];
                if (S = m ? m.websockets : [], T) {
                    var v = m.roomMemberships[T];
                    S = v || []
                }
                return p ? S.filter(function(d) {
                    return d !== p
                }) : S
            }, I.prototype.removeServer = function(c) {
                delete this.urlMap[M(c)]
            }, I.prototype.removeWebSocket = function(c, T) {
                var p = M(T),
                    R = this.urlMap[p];
                R && (R.websockets = C(R.websockets, function(S) {
                    return S === c
                }))
            }, I.prototype.removeMembershipFromRoom = function(c, T) {
                var p = this.urlMap[M(c.url)],
                    R = p.roomMemberships[T];
                p && R !== null && (p.roomMemberships[T] = C(R, function(S) {
                    return S === c
                }))
            };
            var $ = new I,
                pe = {
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
                j = {
                    CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                    CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                    EVENT: {
                        CONSTRUCT: "Failed to construct 'Event':",
                        MESSAGE: "Failed to construct 'MessageEvent':",
                        CLOSE: "Failed to construct 'CloseEvent':"
                    }
                },
                Le = function() {};
            Le.prototype.stopPropagation = function() {}, Le.prototype.stopImmediatePropagation = function() {}, Le.prototype.initEvent = function(c, T, p) {
                c === void 0 && (c = "undefined"), T === void 0 && (T = !1), p === void 0 && (p = !1), this.type = "" + c, this.bubbles = !!T, this.cancelable = !!p
            };
            var mf = function(_) {
                    function c(T, p) {
                        if (p === void 0 && (p = {}), _.call(this), !T) throw new TypeError(j.EVENT_ERROR + " 1 argument required, but only 0 present.");
                        if (typeof p != "object") throw new TypeError(j.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                        var R = p.bubbles,
                            S = p.cancelable;
                        this.type = "" + T, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.cancelBubble = !1, this.bubbles = R ? !!R : !1
                    }
                    return _ && (c.__proto__ = _), c.prototype = Object.create(_ && _.prototype), c.prototype.constructor = c, c
                }(Le),
                Cf = function(_) {
                    function c(T, p) {
                        if (p === void 0 && (p = {}), _.call(this), !T) throw new TypeError(j.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                        if (typeof p != "object") throw new TypeError(j.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                        var R = p.bubbles,
                            S = p.cancelable,
                            m = p.data,
                            v = p.origin,
                            d = p.lastEventId,
                            J = p.ports;
                        this.type = "" + T, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.canncelBubble = !1, this.bubbles = R ? !!R : !1, this.origin = "" + v, this.ports = typeof J > "u" ? null : J, this.data = typeof m > "u" ? null : m, this.lastEventId = "" + (d || "")
                    }
                    return _ && (c.__proto__ = _), c.prototype = Object.create(_ && _.prototype), c.prototype.constructor = c, c
                }(Le),
                vf = function(_) {
                    function c(T, p) {
                        if (p === void 0 && (p = {}), _.call(this), !T) throw new TypeError(j.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                        if (typeof p != "object") throw new TypeError(j.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                        var R = p.bubbles,
                            S = p.cancelable,
                            m = p.code,
                            v = p.reason,
                            d = p.wasClean;
                        this.type = "" + T, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = S ? !!S : !1, this.cancelBubble = !1, this.bubbles = R ? !!R : !1, this.code = typeof m == "number" ? parseInt(m, 10) : 0, this.reason = "" + (v || ""), this.wasClean = d ? !!d : !1
                    }
                    return _ && (c.__proto__ = _), c.prototype = Object.create(_ && _.prototype), c.prototype.constructor = c, c
                }(Le);

            function Re(_) {
                var c = _.type,
                    T = _.target,
                    p = new mf(c);
                return T && (p.target = T, p.srcElement = T, p.currentTarget = T), p
            }

            function Vt(_) {
                var c = _.type,
                    T = _.origin,
                    p = _.data,
                    R = _.target,
                    S = new Cf(c, {
                        data: p,
                        origin: T
                    });
                return R && (S.target = R, S.srcElement = R, S.currentTarget = R), S
            }

            function Se(_) {
                var c = _.code,
                    T = _.reason,
                    p = _.type,
                    R = _.target,
                    S = _.wasClean;
                S || (S = c === pe.CLOSE_NORMAL || c === pe.CLOSE_NO_STATUS);
                var m = new vf(p, {
                    code: c,
                    reason: T,
                    wasClean: S
                });
                return R && (m.target = R, m.srcElement = R, m.currentTarget = R), m
            }

            function _i(_, c, T) {
                _.readyState = ne.CLOSING;
                var p = $.serverLookup(_.url),
                    R = Se({
                        type: "close",
                        target: _.target,
                        code: c,
                        reason: T
                    });
                Ne(function() {
                    $.removeWebSocket(_, _.url), _.readyState = ne.CLOSED, _.dispatchEvent(R), p && p.dispatchEvent(R, p)
                }, _)
            }

            function Uf(_, c, T) {
                _.readyState = ne.CLOSING;
                var p = $.serverLookup(_.url),
                    R = Se({
                        type: "close",
                        target: _.target,
                        code: c,
                        reason: T,
                        wasClean: !1
                    }),
                    S = Re({
                        type: "error",
                        target: _.target
                    });
                Ne(function() {
                    $.removeWebSocket(_, _.url), _.readyState = ne.CLOSED, _.dispatchEvent(S), _.dispatchEvent(R), p && p.dispatchEvent(R, p)
                }, _)
            }

            function tr(_) {
                return Object.prototype.toString.call(_) !== "[object Blob]" && !(_ instanceof ArrayBuffer) && (_ = String(_)), _
            }
            var qr = new WeakMap;

            function hi(_) {
                if (qr.has(_)) return qr.get(_);
                var c = new Proxy(_, {
                    get: function(p, R) {
                        if (R === "close") return function(v) {
                            v === void 0 && (v = {});
                            var d = v.code || pe.CLOSE_NORMAL,
                                J = v.reason || "";
                            _i(c, d, J)
                        };
                        if (R === "send") return function(v) {
                            v = tr(v), _.dispatchEvent(Vt({
                                type: "message",
                                data: v,
                                origin: this.url,
                                target: _
                            }))
                        };
                        var S = function(m) {
                            return m === "message" ? "server::" + m : m
                        };
                        return R === "on" ? function(v, d) {
                            _.addEventListener(S(v), d)
                        } : R === "off" ? function(v, d) {
                            _.removeEventListener(S(v), d)
                        } : R === "target" ? _ : p[R]
                    }
                });
                return qr.set(_, c), c
            }

            function Bf(_) {
                var c = encodeURIComponent(_).match(/%[89ABab]/g);
                return _.length + (c ? c.length : 0)
            }

            function Kf(_) {
                var c = new Pt(_),
                    T = c.pathname,
                    p = c.protocol,
                    R = c.hash;
                if (!_) throw new TypeError(j.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
                if (T || (c.pathname = "/"), p === "") throw new SyntaxError(j.CONSTRUCTOR_ERROR + " The URL '" + c.toString() + "' is invalid.");
                if (p !== "ws:" && p !== "wss:") throw new SyntaxError(j.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + p + "' is not allowed.");
                if (R !== "") throw new SyntaxError(j.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + R + "'). Fragment identifiers are not allowed in WebSocket URLs.");
                return c.toString()
            }

            function df(_) {
                if (_ === void 0 && (_ = []), !Array.isArray(_) && typeof _ != "string") throw new SyntaxError(j.CONSTRUCTOR_ERROR + " The subprotocol '" + _.toString() + "' is invalid.");
                typeof _ == "string" && (_ = [_]);
                var c = _.map(function(p) {
                        return {
                            count: 1,
                            protocol: p
                        }
                    }).reduce(function(p, R) {
                        return p[R.protocol] = (p[R.protocol] || 0) + R.count, p
                    }, {}),
                    T = Object.keys(c).filter(function(p) {
                        return c[p] > 1
                    });
                if (T.length > 0) throw new SyntaxError(j.CONSTRUCTOR_ERROR + " The subprotocol '" + T[0] + "' is duplicated.");
                return _
            }
            var ne = function(_) {
                function c(p, R) {
                    _.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = Kf(p), R = df(R), this.protocol = R[0] || "", this.binaryType = "blob", this.readyState = c.CONNECTING;
                    var S = hi(this),
                        m = $.attachWebSocket(S, this.url);
                    Ne(function() {
                        if (this.readyState === c.CONNECTING)
                            if (m)
                                if (m.options.verifyClient && typeof m.options.verifyClient == "function" && !m.options.verifyClient()) this.readyState = c.CLOSED, g("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), $.removeWebSocket(S, this.url), this.dispatchEvent(Re({
                                    type: "error",
                                    target: this
                                })), this.dispatchEvent(Se({
                                    type: "close",
                                    target: this,
                                    code: pe.CLOSE_NORMAL
                                }));
                                else {
                                    if (m.options.selectProtocol && typeof m.options.selectProtocol == "function") {
                                        var d = m.options.selectProtocol(R),
                                            J = d !== "",
                                            fe = R.indexOf(d) !== -1;
                                        if (J && !fe) {
                                            this.readyState = c.CLOSED, g("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), $.removeWebSocket(S, this.url), this.dispatchEvent(Re({
                                                type: "error",
                                                target: this
                                            })), this.dispatchEvent(Se({
                                                type: "close",
                                                target: this,
                                                code: pe.CLOSE_NORMAL
                                            }));
                                            return
                                        }
                                        this.protocol = d
                                    }
                                    this.readyState = c.OPEN, this.dispatchEvent(Re({
                                        type: "open",
                                        target: this
                                    })), m.dispatchEvent(Re({
                                        type: "connection"
                                    }), S)
                                }
                        else this.readyState = c.CLOSED, this.dispatchEvent(Re({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(Se({
                            type: "close",
                            target: this,
                            code: pe.CLOSE_NORMAL
                        })), g("error", "WebSocket connection to '" + this.url + "' failed")
                    }, this)
                }
                _ && (c.__proto__ = _), c.prototype = Object.create(_ && _.prototype), c.prototype.constructor = c;
                var T = {
                    onopen: {},
                    onmessage: {},
                    onclose: {},
                    onerror: {}
                };
                return T.onopen.get = function() {
                    return this._onopen
                }, T.onmessage.get = function() {
                    return this._onmessage
                }, T.onclose.get = function() {
                    return this._onclose
                }, T.onerror.get = function() {
                    return this._onerror
                }, T.onopen.set = function(p) {
                    this.removeEventListener("open", this._onopen), this._onopen = p, this.addEventListener("open", p)
                }, T.onmessage.set = function(p) {
                    this.removeEventListener("message", this._onmessage), this._onmessage = p, this.addEventListener("message", p)
                }, T.onclose.set = function(p) {
                    this.removeEventListener("close", this._onclose), this._onclose = p, this.addEventListener("close", p)
                }, T.onerror.set = function(p) {
                    this.removeEventListener("error", this._onerror), this._onerror = p, this.addEventListener("error", p)
                }, c.prototype.send = function(R) {
                    var S = this;
                    if (this.readyState === c.CONNECTING) throw new Error("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state");
                    var m = Vt({
                            type: "server::message",
                            origin: this.url,
                            data: tr(R)
                        }),
                        v = $.serverLookup(this.url);
                    v && Ne(function() {
                        S.dispatchEvent(m, R)
                    }, v)
                }, c.prototype.close = function(R, S) {
                    if (R !== void 0 && (typeof R != "number" || R !== 1e3 && (R < 3e3 || R > 4999))) throw new TypeError(j.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + R + " is neither.");
                    if (S !== void 0) {
                        var m = Bf(S);
                        if (m > 123) throw new SyntaxError(j.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                    }
                    if (!(this.readyState === c.CLOSING || this.readyState === c.CLOSED)) {
                        var v = hi(this);
                        this.readyState === c.CONNECTING ? Uf(v, R || pe.CLOSE_ABNORMAL, S) : _i(v, R || pe.CLOSE_NO_STATUS, S)
                    }
                }, Object.defineProperties(c.prototype, T), c
            }(k);
            ne.CONNECTING = 0, ne.prototype.CONNECTING = ne.CONNECTING, ne.OPEN = 1, ne.prototype.OPEN = ne.OPEN, ne.CLOSING = 2, ne.prototype.CLOSING = ne.CLOSING, ne.CLOSED = 3, ne.prototype.CLOSED = ne.CLOSED;
            var ut = function(_) {
                function c(p, R) {
                    var S = this;
                    p === void 0 && (p = "socket.io"), R === void 0 && (R = ""), _.call(this), this.binaryType = "blob";
                    var m = new Pt(p);
                    m.pathname || (m.pathname = "/"), this.url = m.toString(), this.readyState = c.CONNECTING, this.protocol = "", this.target = this, typeof R == "string" || typeof R == "object" && R !== null ? this.protocol = R : Array.isArray(R) && R.length > 0 && (this.protocol = R[0]);
                    var v = $.attachWebSocket(this, this.url);
                    Ne(function() {
                        v ? (this.readyState = c.OPEN, v.dispatchEvent(Re({
                            type: "connection"
                        }), v, this), v.dispatchEvent(Re({
                            type: "connect"
                        }), v, this), this.dispatchEvent(Re({
                            type: "connect",
                            target: this
                        }))) : (this.readyState = c.CLOSED, this.dispatchEvent(Re({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(Se({
                            type: "close",
                            target: this,
                            code: pe.CLOSE_NORMAL
                        })), g("error", "Socket.io connection to '" + this.url + "' failed"))
                    }, this), this.addEventListener("close", function(d) {
                        S.dispatchEvent(Se({
                            type: "disconnect",
                            target: d.target,
                            code: d.code
                        }))
                    })
                }
                _ && (c.__proto__ = _), c.prototype = Object.create(_ && _.prototype), c.prototype.constructor = c;
                var T = {
                    broadcast: {}
                };
                return c.prototype.close = function() {
                    if (this.readyState === c.OPEN) {
                        var R = $.serverLookup(this.url);
                        return $.removeWebSocket(this, this.url), this.readyState = c.CLOSED, this.dispatchEvent(Se({
                            type: "close",
                            target: this,
                            code: pe.CLOSE_NORMAL
                        })), R && R.dispatchEvent(Se({
                            type: "disconnect",
                            target: this,
                            code: pe.CLOSE_NORMAL
                        }), R), this
                    }
                }, c.prototype.disconnect = function() {
                    return this.close()
                }, c.prototype.emit = function(R) {
                    for (var S = [], m = arguments.length - 1; m-- > 0;) S[m] = arguments[m + 1];
                    if (this.readyState !== c.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var v = Vt({
                            type: R,
                            origin: this.url,
                            data: S
                        }),
                        d = $.serverLookup(this.url);
                    return d && d.dispatchEvent.apply(d, [v].concat(S)), this
                }, c.prototype.send = function(R) {
                    return this.emit("message", R), this
                }, T.broadcast.get = function() {
                    if (this.readyState !== c.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                    var p = this,
                        R = $.serverLookup(this.url);
                    if (!R) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                    return {
                        emit: function(m, v) {
                            return R.emit(m, v, {
                                websockets: $.websocketsLookup(p.url, null, p)
                            }), p
                        },
                        to: function(m) {
                            return R.to(m, p)
                        },
                        in: function(m) {
                            return R.in(m, p)
                        }
                    }
                }, c.prototype.on = function(R, S) {
                    return this.addEventListener(R, S), this
                }, c.prototype.off = function(R, S) {
                    this.removeEventListener(R, S)
                }, c.prototype.hasListeners = function(R) {
                    var S = this.listeners[R];
                    return Array.isArray(S) ? !!S.length : !1
                }, c.prototype.join = function(R) {
                    $.addMembershipToRoom(this, R)
                }, c.prototype.leave = function(R) {
                    $.removeMembershipFromRoom(this, R)
                }, c.prototype.to = function(R) {
                    return this.broadcast.to(R)
                }, c.prototype.in = function() {
                    return this.to.apply(null, arguments)
                }, c.prototype.dispatchEvent = function(R) {
                    for (var S = this, m = [], v = arguments.length - 1; v-- > 0;) m[v] = arguments[v + 1];
                    var d = R.type,
                        J = this.listeners[d];
                    if (!Array.isArray(J)) return !1;
                    J.forEach(function(fe) {
                        m.length > 0 ? fe.apply(S, m) : fe.call(S, R.data ? R.data : R)
                    })
                }, Object.defineProperties(c.prototype, T), c
            }(k);
            ut.CONNECTING = 0, ut.OPEN = 1, ut.CLOSING = 2, ut.CLOSED = 3;
            var Hr = function(c, T) {
                return new ut(c, T)
            };
            Hr.connect = function(c, T) {
                return Hr(c, T)
            };
            var Nf = function(_) {
                return _.reduce(function(c, T) {
                    return c.indexOf(T) > -1 ? c : c.concat(T)
                }, [])
            };

            function Ri() {
                return typeof window < "u" ? window : typeof process == "object" && typeof jx == "function" && typeof se == "object" ? se : this
            }
            var bi = {
                    mock: !0,
                    verifyClient: null,
                    selectProtocol: null
                },
                Wr = function(_) {
                    function c(T, p) {
                        p === void 0 && (p = bi), _.call(this);
                        var R = new Pt(T);
                        R.pathname || (R.pathname = "/"), this.url = R.toString(), this.originalWebSocket = null;
                        var S = $.attachServer(this, this.url);
                        if (!S) throw this.dispatchEvent(Re({
                            type: "error"
                        })), new Error("A mock server is already listening on this url");
                        this.options = Object.assign({}, bi, p), this.options.mock && this.mockWebsocket()
                    }
                    return _ && (c.__proto__ = _), c.prototype = Object.create(_ && _.prototype), c.prototype.constructor = c, c.prototype.mockWebsocket = function() {
                        var p = Ri();
                        this.originalWebSocket = p.WebSocket, p.WebSocket = ne
                    }, c.prototype.restoreWebsocket = function() {
                        var p = Ri();
                        this.originalWebSocket !== null && (p.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                    }, c.prototype.stop = function(p) {
                        p === void 0 && (p = function() {}), this.options.mock && this.restoreWebsocket(), $.removeServer(this.url), typeof p == "function" && p()
                    }, c.prototype.on = function(p, R) {
                        this.addEventListener(p, R)
                    }, c.prototype.off = function(p, R) {
                        this.removeEventListener(p, R)
                    }, c.prototype.close = function(p) {
                        p === void 0 && (p = {});
                        var R = p.code,
                            S = p.reason,
                            m = p.wasClean,
                            v = $.websocketsLookup(this.url);
                        $.removeServer(this.url), v.forEach(function(d) {
                            d.readyState = ne.CLOSED, d.dispatchEvent(Se({
                                type: "close",
                                target: d.target,
                                code: R || pe.CLOSE_NORMAL,
                                reason: S || "",
                                wasClean: m
                            }))
                        }), this.dispatchEvent(Se({
                            type: "close"
                        }), this)
                    }, c.prototype.emit = function(p, R, S) {
                        var m = this;
                        S === void 0 && (S = {});
                        var v = S.websockets;
                        v || (v = $.websocketsLookup(this.url));
                        var d;
                        typeof S != "object" || arguments.length > 3 ? (R = Array.prototype.slice.call(arguments, 1, arguments.length), d = R.map(function(J) {
                            return tr(J)
                        })) : d = tr(R), v.forEach(function(J) {
                            var fe = J instanceof ut ? R : d;
                            Array.isArray(fe) ? J.dispatchEvent.apply(J, [Vt({
                                type: p,
                                data: fe,
                                origin: m.url,
                                target: J.target
                            })].concat(fe)) : J.dispatchEvent(Vt({
                                type: p,
                                data: fe,
                                origin: m.url,
                                target: J.target
                            }))
                        })
                    }, c.prototype.clients = function() {
                        return $.websocketsLookup(this.url)
                    }, c.prototype.to = function(p, R, S) {
                        var m = this;
                        S === void 0 && (S = []);
                        var v = this,
                            d = Nf(S.concat($.websocketsLookup(this.url, p, R)));
                        return {
                            to: function(J, fe) {
                                return m.to.call(m, J, fe, d)
                            },
                            emit: function(fe, K) {
                                v.emit(fe, K, {
                                    websockets: d
                                })
                            }
                        }
                    }, c.prototype.in = function() {
                        for (var p = [], R = arguments.length; R--;) p[R] = arguments[R];
                        return this.to.apply(null, p)
                    }, c.prototype.simulate = function(p) {
                        var R = $.websocketsLookup(this.url);
                        p === "error" && R.forEach(function(S) {
                            S.readyState = ne.CLOSED, S.dispatchEvent(Re({
                                type: "error",
                                target: S.target
                            }))
                        })
                    }, c
                }(k);
            Wr.of = function(c) {
                return new Wr(c)
            };
            var wf = Wr,
                Df = ne,
                If = Hr;
            r.Server = wf, r.WebSocket = Df, r.SocketIO = If, Object.defineProperty(r, "__esModule", {
                value: !0
            })
        })
    })(rs, rs.exports);
    var Fx = {
        exports: {}
    };
    (function(t) {
        (function() {
            function e(u, l) {
                var E = u.x - l.x,
                    x = u.y - l.y;
                return E * E + x * x
            }

            function r(u, l, E) {
                var x = l.x,
                    h = l.y,
                    b = E.x - x,
                    L = E.y - h;
                if (b !== 0 || L !== 0) {
                    var A = ((u.x - x) * b + (u.y - h) * L) / (b * b + L * L);
                    A > 1 ? (x = E.x, h = E.y) : A > 0 && (x += b * A, h += L * A)
                }
                return b = u.x - x, L = u.y - h, b * b + L * L
            }

            function i(u, l) {
                for (var E = u[0], x = [E], h, b = 1, L = u.length; b < L; b++) h = u[b], e(h, E) > l && (x.push(h), E = h);
                return E !== h && x.push(h), x
            }

            function s(u, l, E, x, h) {
                for (var b = x, L, A = l + 1; A < E; A++) {
                    var U = r(u[A], u[l], u[E]);
                    U > b && (L = A, b = U)
                }
                b > x && (L - l > 1 && s(u, l, L, x, h), h.push(u[L]), E - L > 1 && s(u, L, E, x, h))
            }

            function a(u, l) {
                var E = u.length - 1,
                    x = [u[0]];
                return s(u, 0, E, l, x), x.push(u[E]), x
            }

            function f(u, l, E) {
                if (u.length <= 2) return u;
                var x = l !== void 0 ? l * l : 1;
                return u = E ? u : i(u, x), u = a(u, x), u
            }
            t.exports = f, t.exports.default = f
        })()
    })(Fx);
    var Na = {},
        Zn = {},
        ei = {};
    (function(t) {
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EXTENDED_PICTOGRAPHIC = t.CLUSTER_BREAK = void 0,
            function(e) {
                e[e.CR = 0] = "CR", e[e.LF = 1] = "LF", e[e.CONTROL = 2] = "CONTROL", e[e.EXTEND = 3] = "EXTEND", e[e.REGIONAL_INDICATOR = 4] = "REGIONAL_INDICATOR", e[e.SPACINGMARK = 5] = "SPACINGMARK", e[e.L = 6] = "L", e[e.V = 7] = "V", e[e.T = 8] = "T", e[e.LV = 9] = "LV", e[e.LVT = 10] = "LVT", e[e.OTHER = 11] = "OTHER", e[e.PREPEND = 12] = "PREPEND", e[e.E_BASE = 13] = "E_BASE", e[e.E_MODIFIER = 14] = "E_MODIFIER", e[e.ZWJ = 15] = "ZWJ", e[e.GLUE_AFTER_ZWJ = 16] = "GLUE_AFTER_ZWJ", e[e.E_BASE_GAZ = 17] = "E_BASE_GAZ"
            }(t.CLUSTER_BREAK || (t.CLUSTER_BREAK = {})), t.EXTENDED_PICTOGRAPHIC = 101
    })(ei);
    var ti = {};
    Object.defineProperty(ti, "__esModule", {
        value: !0
    });
    const P = ei,
        we = 0,
        an = 1,
        qx = 2,
        Hx = 3,
        Wx = 4;
    class zx {
        static isSurrogate(e, r) {
            return 55296 <= e.charCodeAt(r) && e.charCodeAt(r) <= 56319 && 56320 <= e.charCodeAt(r + 1) && e.charCodeAt(r + 1) <= 57343
        }
        static codePointAt(e, r) {
            r === void 0 && (r = 0);
            const i = e.charCodeAt(r);
            if (55296 <= i && i <= 56319 && r < e.length - 1) {
                const s = i,
                    a = e.charCodeAt(r + 1);
                return 56320 <= a && a <= 57343 ? (s - 55296) * 1024 + (a - 56320) + 65536 : s
            }
            if (56320 <= i && i <= 57343 && r >= 1) {
                const s = e.charCodeAt(r - 1),
                    a = i;
                return 55296 <= s && s <= 56319 ? (s - 55296) * 1024 + (a - 56320) + 65536 : a
            }
            return i
        }
        static shouldBreak(e, r, i, s, a, f) {
            const u = [e].concat(r).concat([i]),
                l = [s].concat(a).concat([f]),
                E = u[u.length - 2],
                x = i,
                h = f,
                b = u.lastIndexOf(P.CLUSTER_BREAK.REGIONAL_INDICATOR);
            if (b > 0 && u.slice(1, b).every(function(A) {
                    return A === P.CLUSTER_BREAK.REGIONAL_INDICATOR
                }) && [P.CLUSTER_BREAK.PREPEND, P.CLUSTER_BREAK.REGIONAL_INDICATOR].indexOf(E) === -1) return u.filter(function(A) {
                return A === P.CLUSTER_BREAK.REGIONAL_INDICATOR
            }).length % 2 === 1 ? Hx : Wx;
            if (E === P.CLUSTER_BREAK.CR && x === P.CLUSTER_BREAK.LF) return we;
            if (E === P.CLUSTER_BREAK.CONTROL || E === P.CLUSTER_BREAK.CR || E === P.CLUSTER_BREAK.LF) return an;
            if (x === P.CLUSTER_BREAK.CONTROL || x === P.CLUSTER_BREAK.CR || x === P.CLUSTER_BREAK.LF) return an;
            if (E === P.CLUSTER_BREAK.L && (x === P.CLUSTER_BREAK.L || x === P.CLUSTER_BREAK.V || x === P.CLUSTER_BREAK.LV || x === P.CLUSTER_BREAK.LVT)) return we;
            if ((E === P.CLUSTER_BREAK.LV || E === P.CLUSTER_BREAK.V) && (x === P.CLUSTER_BREAK.V || x === P.CLUSTER_BREAK.T)) return we;
            if ((E === P.CLUSTER_BREAK.LVT || E === P.CLUSTER_BREAK.T) && x === P.CLUSTER_BREAK.T) return we;
            if (x === P.CLUSTER_BREAK.EXTEND || x === P.CLUSTER_BREAK.ZWJ) return we;
            if (x === P.CLUSTER_BREAK.SPACINGMARK) return we;
            if (E === P.CLUSTER_BREAK.PREPEND) return we;
            const L = l.slice(0, -1).lastIndexOf(P.EXTENDED_PICTOGRAPHIC);
            return L !== -1 && l[L] === P.EXTENDED_PICTOGRAPHIC && u.slice(L + 1, -2).every(function(A) {
                return A === P.CLUSTER_BREAK.EXTEND
            }) && E === P.CLUSTER_BREAK.ZWJ && h === P.EXTENDED_PICTOGRAPHIC ? we : r.indexOf(P.CLUSTER_BREAK.REGIONAL_INDICATOR) !== -1 ? qx : E === P.CLUSTER_BREAK.REGIONAL_INDICATOR && x === P.CLUSTER_BREAK.REGIONAL_INDICATOR ? we : an
        }
    }
    ti.default = zx;
    var ri = {};
    Object.defineProperty(ri, "__esModule", {
        value: !0
    });
    class Yx {
        constructor(e, r) {
            this._index = 0, this._str = e, this._nextBreak = r
        } [Symbol.iterator]() {
            return this
        }
        next() {
            let e;
            if ((e = this._nextBreak(this._str, this._index)) < this._str.length) {
                const r = this._str.slice(this._index, e);
                return this._index = e, {
                    value: r,
                    done: !1
                }
            }
            if (this._index < this._str.length) {
                const r = this._str.slice(this._index);
                return this._index = this._str.length, {
                    value: r,
                    done: !1
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }
    }
    ri.default = Yx;
    var wa = se && se.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(Zn, "__esModule", {
        value: !0
    });
    const n = ei,
        nr = wa(ti),
        Jx = wa(ri);
    class De {
        static nextBreak(e, r) {
            if (r === void 0 && (r = 0), r < 0) return 0;
            if (r >= e.length - 1) return e.length;
            const i = nr.default.codePointAt(e, r),
                s = De.getGraphemeBreakProperty(i),
                a = De.getEmojiProperty(i),
                f = [],
                u = [];
            for (let l = r + 1; l < e.length; l++) {
                if (nr.default.isSurrogate(e, l - 1)) continue;
                const E = nr.default.codePointAt(e, l),
                    x = De.getGraphemeBreakProperty(E),
                    h = De.getEmojiProperty(E);
                if (nr.default.shouldBreak(s, f, x, a, u, h)) return l;
                f.push(x), u.push(h)
            }
            return e.length
        }
        splitGraphemes(e) {
            const r = [];
            let i = 0,
                s;
            for (;
                (s = De.nextBreak(e, i)) < e.length;) r.push(e.slice(i, s)), i = s;
            return i < e.length && r.push(e.slice(i)), r
        }
        iterateGraphemes(e) {
            return new Jx.default(e, De.nextBreak)
        }
        countGraphemes(e) {
            let r = 0,
                i = 0,
                s;
            for (;
                (s = De.nextBreak(e, i)) < e.length;) i = s, r++;
            return i < e.length && r++, r
        }
        static getGraphemeBreakProperty(e) {
            if (e < 48905) {
                if (e < 44116) {
                    if (e < 4141) {
                        if (e < 2818) {
                            if (e < 2363)
                                if (e < 1759) {
                                    if (e < 1471) {
                                        if (e < 127) {
                                            if (e < 11) {
                                                if (e < 10) {
                                                    if (0 <= e && e <= 9) return n.CLUSTER_BREAK.CONTROL
                                                } else if (e === 10) return n.CLUSTER_BREAK.LF
                                            } else if (e < 13) {
                                                if (11 <= e && e <= 12) return n.CLUSTER_BREAK.CONTROL
                                            } else if (e < 14) {
                                                if (e === 13) return n.CLUSTER_BREAK.CR
                                            } else if (14 <= e && e <= 31) return n.CLUSTER_BREAK.CONTROL
                                        } else if (e < 768) {
                                            if (e < 173) {
                                                if (127 <= e && e <= 159) return n.CLUSTER_BREAK.CONTROL
                                            } else if (e === 173) return n.CLUSTER_BREAK.CONTROL
                                        } else if (e < 1155) {
                                            if (768 <= e && e <= 879) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 1425) {
                                            if (1155 <= e && e <= 1161) return n.CLUSTER_BREAK.EXTEND
                                        } else if (1425 <= e && e <= 1469) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1552) {
                                        if (e < 1476) {
                                            if (e < 1473) {
                                                if (e === 1471) return n.CLUSTER_BREAK.EXTEND
                                            } else if (1473 <= e && e <= 1474) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 1479) {
                                            if (1476 <= e && e <= 1477) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 1536) {
                                            if (e === 1479) return n.CLUSTER_BREAK.EXTEND
                                        } else if (1536 <= e && e <= 1541) return n.CLUSTER_BREAK.PREPEND
                                    } else if (e < 1648) {
                                        if (e < 1564) {
                                            if (1552 <= e && e <= 1562) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 1611) {
                                            if (e === 1564) return n.CLUSTER_BREAK.CONTROL
                                        } else if (1611 <= e && e <= 1631) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1750) {
                                        if (e === 1648) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1757) {
                                        if (1750 <= e && e <= 1756) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 1757) return n.CLUSTER_BREAK.PREPEND
                                } else if (e < 2075) {
                                if (e < 1840)
                                    if (e < 1770) {
                                        if (e < 1767) {
                                            if (1759 <= e && e <= 1764) return n.CLUSTER_BREAK.EXTEND
                                        } else if (1767 <= e && e <= 1768) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 1807) {
                                    if (1770 <= e && e <= 1773) return n.CLUSTER_BREAK.EXTEND
                                } else {
                                    if (e === 1807) return n.CLUSTER_BREAK.PREPEND;
                                    if (e === 1809) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2027) {
                                    if (e < 1958) {
                                        if (1840 <= e && e <= 1866) return n.CLUSTER_BREAK.EXTEND
                                    } else if (1958 <= e && e <= 1968) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2045) {
                                    if (2027 <= e && e <= 2035) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2070) {
                                    if (e === 2045) return n.CLUSTER_BREAK.EXTEND
                                } else if (2070 <= e && e <= 2073) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2200) {
                                if (e < 2089) {
                                    if (e < 2085) {
                                        if (2075 <= e && e <= 2083) return n.CLUSTER_BREAK.EXTEND
                                    } else if (2085 <= e && e <= 2087) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2137) {
                                    if (2089 <= e && e <= 2093) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2192) {
                                    if (2137 <= e && e <= 2139) return n.CLUSTER_BREAK.EXTEND
                                } else if (2192 <= e && e <= 2193) return n.CLUSTER_BREAK.PREPEND
                            } else if (e < 2275) {
                                if (e < 2250) {
                                    if (2200 <= e && e <= 2207) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2274) {
                                    if (2250 <= e && e <= 2273) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 2274) return n.CLUSTER_BREAK.PREPEND
                            } else if (e < 2307) {
                                if (2275 <= e && e <= 2306) return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 2307) return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 2362) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2561) {
                                if (e < 2434) {
                                    if (e < 2381) {
                                        if (e < 2366) {
                                            if (e === 2363) return n.CLUSTER_BREAK.SPACINGMARK;
                                            if (e === 2364) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 2369) {
                                            if (2366 <= e && e <= 2368) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (e < 2377) {
                                            if (2369 <= e && e <= 2376) return n.CLUSTER_BREAK.EXTEND
                                        } else if (2377 <= e && e <= 2380) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2385) {
                                        if (e < 2382) {
                                            if (e === 2381) return n.CLUSTER_BREAK.EXTEND
                                        } else if (2382 <= e && e <= 2383) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2402) {
                                        if (2385 <= e && e <= 2391) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2433) {
                                        if (2402 <= e && e <= 2403) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 2433) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2503) {
                                    if (e < 2494) {
                                        if (e < 2492) {
                                            if (2434 <= e && e <= 2435) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (e === 2492) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2495) {
                                        if (e === 2494) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2497) {
                                        if (2495 <= e && e <= 2496) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2497 <= e && e <= 2500) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2519) {
                                    if (e < 2507) {
                                        if (2503 <= e && e <= 2504) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2509) {
                                        if (2507 <= e && e <= 2508) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 2509) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2530) {
                                    if (e === 2519) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2558) {
                                    if (2530 <= e && e <= 2531) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 2558) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2691) {
                                if (e < 2631) {
                                    if (e < 2620) {
                                        if (e < 2563) {
                                            if (2561 <= e && e <= 2562) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e === 2563) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2622) {
                                        if (e === 2620) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2625) {
                                        if (2622 <= e && e <= 2624) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (2625 <= e && e <= 2626) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2672) {
                                    if (e < 2635) {
                                        if (2631 <= e && e <= 2632) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2641) {
                                        if (2635 <= e && e <= 2637) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 2641) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2677) {
                                    if (2672 <= e && e <= 2673) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2689) {
                                    if (e === 2677) return n.CLUSTER_BREAK.EXTEND
                                } else if (2689 <= e && e <= 2690) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2761) {
                                if (e < 2750) {
                                    if (e === 2691) return n.CLUSTER_BREAK.SPACINGMARK;
                                    if (e === 2748) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 2753) {
                                    if (2750 <= e && e <= 2752) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2759) {
                                    if (2753 <= e && e <= 2757) return n.CLUSTER_BREAK.EXTEND
                                } else if (2759 <= e && e <= 2760) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2786) {
                                if (e < 2763) {
                                    if (e === 2761) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 2765) {
                                    if (2763 <= e && e <= 2764) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 2765) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2810) {
                                if (2786 <= e && e <= 2787) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 2817) {
                                if (2810 <= e && e <= 2815) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 2817) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3315) {
                            if (e < 3076) {
                                if (e < 2946) {
                                    if (e < 2887) {
                                        if (e < 2878) {
                                            if (e < 2876) {
                                                if (2818 <= e && e <= 2819) return n.CLUSTER_BREAK.SPACINGMARK
                                            } else if (e === 2876) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 2880) {
                                            if (2878 <= e && e <= 2879) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 2881) {
                                            if (e === 2880) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (2881 <= e && e <= 2884) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2893) {
                                        if (e < 2891) {
                                            if (2887 <= e && e <= 2888) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (2891 <= e && e <= 2892) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 2901) {
                                        if (e === 2893) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 2914) {
                                        if (2901 <= e && e <= 2903) return n.CLUSTER_BREAK.EXTEND
                                    } else if (2914 <= e && e <= 2915) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3014) {
                                    if (e < 3007) {
                                        if (e === 2946 || e === 3006) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 3008) {
                                        if (e === 3007) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 3009) {
                                        if (e === 3008) return n.CLUSTER_BREAK.EXTEND
                                    } else if (3009 <= e && e <= 3010) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3031) {
                                    if (e < 3018) {
                                        if (3014 <= e && e <= 3016) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 3021) {
                                        if (3018 <= e && e <= 3020) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e === 3021) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3072) {
                                    if (e === 3031) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3073) {
                                    if (e === 3072) return n.CLUSTER_BREAK.EXTEND
                                } else if (3073 <= e && e <= 3075) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3262) {
                                if (e < 3146) {
                                    if (e < 3134) {
                                        if (e === 3076 || e === 3132) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 3137) {
                                        if (3134 <= e && e <= 3136) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 3142) {
                                        if (3137 <= e && e <= 3140) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (3142 <= e && e <= 3144) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3201) {
                                    if (e < 3157) {
                                        if (3146 <= e && e <= 3149) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 3170) {
                                        if (3157 <= e && e <= 3158) return n.CLUSTER_BREAK.EXTEND
                                    } else if (3170 <= e && e <= 3171) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3202) {
                                    if (e === 3201) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3260) {
                                    if (3202 <= e && e <= 3203) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 3260) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3270) {
                                if (e < 3264) {
                                    if (e === 3262) return n.CLUSTER_BREAK.SPACINGMARK;
                                    if (e === 3263) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3266) {
                                    if (3264 <= e && e <= 3265) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3267) {
                                    if (e === 3266) return n.CLUSTER_BREAK.EXTEND
                                } else if (3267 <= e && e <= 3268) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3276) {
                                if (e < 3271) {
                                    if (e === 3270) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3274) {
                                    if (3271 <= e && e <= 3272) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (3274 <= e && e <= 3275) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3285) {
                                if (3276 <= e && e <= 3277) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3298) {
                                if (3285 <= e && e <= 3286) return n.CLUSTER_BREAK.EXTEND
                            } else if (3298 <= e && e <= 3299) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3551) {
                            if (e < 3406) {
                                if (e < 3391) {
                                    if (e < 3330) {
                                        if (e < 3328) {
                                            if (e === 3315) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (3328 <= e && e <= 3329) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 3387) {
                                        if (3330 <= e && e <= 3331) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 3390) {
                                        if (3387 <= e && e <= 3388) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 3390) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3398) {
                                    if (e < 3393) {
                                        if (3391 <= e && e <= 3392) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (3393 <= e && e <= 3396) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3402) {
                                    if (3398 <= e && e <= 3400) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3405) {
                                    if (3402 <= e && e <= 3404) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 3405) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3530) {
                                if (e < 3426) {
                                    if (e === 3406) return n.CLUSTER_BREAK.PREPEND;
                                    if (e === 3415) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3457) {
                                    if (3426 <= e && e <= 3427) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3458) {
                                    if (e === 3457) return n.CLUSTER_BREAK.EXTEND
                                } else if (3458 <= e && e <= 3459) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3538) {
                                if (e < 3535) {
                                    if (e === 3530) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3536) {
                                    if (e === 3535) return n.CLUSTER_BREAK.EXTEND
                                } else if (3536 <= e && e <= 3537) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3542) {
                                if (3538 <= e && e <= 3540) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3544) {
                                if (e === 3542) return n.CLUSTER_BREAK.EXTEND
                            } else if (3544 <= e && e <= 3550) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 3893) {
                            if (e < 3655) {
                                if (e < 3633) {
                                    if (e < 3570) {
                                        if (e === 3551) return n.CLUSTER_BREAK.EXTEND
                                    } else if (3570 <= e && e <= 3571) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 3635) {
                                    if (e === 3633) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 3636) {
                                    if (e === 3635) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (3636 <= e && e <= 3642) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3764)
                                if (e < 3761) {
                                    if (3655 <= e && e <= 3662) return n.CLUSTER_BREAK.EXTEND
                                } else {
                                    if (e === 3761) return n.CLUSTER_BREAK.EXTEND;
                                    if (e === 3763) return n.CLUSTER_BREAK.SPACINGMARK
                                }
                            else if (e < 3784) {
                                if (3764 <= e && e <= 3772) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3864) {
                                if (3784 <= e && e <= 3790) return n.CLUSTER_BREAK.EXTEND
                            } else if (3864 <= e && e <= 3865) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3967) {
                            if (e < 3897) {
                                if (e === 3893 || e === 3895) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3902) {
                                if (e === 3897) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 3953) {
                                if (3902 <= e && e <= 3903) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (3953 <= e && e <= 3966) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3981) {
                            if (e < 3968) {
                                if (e === 3967) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 3974) {
                                if (3968 <= e && e <= 3972) return n.CLUSTER_BREAK.EXTEND
                            } else if (3974 <= e && e <= 3975) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 3993) {
                            if (3981 <= e && e <= 3991) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 4038) {
                            if (3993 <= e && e <= 4028) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 4038) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 7204) {
                        if (e < 6448) {
                            if (e < 5938) {
                                if (e < 4226) {
                                    if (e < 4157) {
                                        if (e < 4146) {
                                            if (e < 4145) {
                                                if (4141 <= e && e <= 4144) return n.CLUSTER_BREAK.EXTEND
                                            } else if (e === 4145) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (e < 4153) {
                                            if (4146 <= e && e <= 4151) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e < 4155) {
                                            if (4153 <= e && e <= 4154) return n.CLUSTER_BREAK.EXTEND
                                        } else if (4155 <= e && e <= 4156) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 4184) {
                                        if (e < 4182) {
                                            if (4157 <= e && e <= 4158) return n.CLUSTER_BREAK.EXTEND
                                        } else if (4182 <= e && e <= 4183) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 4190) {
                                        if (4184 <= e && e <= 4185) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 4209) {
                                        if (4190 <= e && e <= 4192) return n.CLUSTER_BREAK.EXTEND
                                    } else if (4209 <= e && e <= 4212) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 4352) {
                                    if (e < 4229) {
                                        if (e === 4226) return n.CLUSTER_BREAK.EXTEND;
                                        if (e === 4228) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 4237) {
                                        if (4229 <= e && e <= 4230) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 4237 || e === 4253) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 4957) {
                                    if (e < 4448) {
                                        if (4352 <= e && e <= 4447) return n.CLUSTER_BREAK.L
                                    } else if (e < 4520) {
                                        if (4448 <= e && e <= 4519) return n.CLUSTER_BREAK.V
                                    } else if (4520 <= e && e <= 4607) return n.CLUSTER_BREAK.T
                                } else if (e < 5906) {
                                    if (4957 <= e && e <= 4959) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 5909) {
                                    if (5906 <= e && e <= 5908) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 5909) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6089) {
                                if (e < 6070) {
                                    if (e < 5970) {
                                        if (e < 5940) {
                                            if (5938 <= e && e <= 5939) return n.CLUSTER_BREAK.EXTEND
                                        } else if (e === 5940) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 6002) {
                                        if (5970 <= e && e <= 5971) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 6068) {
                                        if (6002 <= e && e <= 6003) return n.CLUSTER_BREAK.EXTEND
                                    } else if (6068 <= e && e <= 6069) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6078) {
                                    if (e < 6071) {
                                        if (e === 6070) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (6071 <= e && e <= 6077) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6086) {
                                    if (6078 <= e && e <= 6085) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6087) {
                                    if (e === 6086) return n.CLUSTER_BREAK.EXTEND
                                } else if (6087 <= e && e <= 6088) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6277)
                                if (e < 6155) {
                                    if (e < 6109) {
                                        if (6089 <= e && e <= 6099) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 6109) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6158) {
                                if (6155 <= e && e <= 6157) return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 6158) return n.CLUSTER_BREAK.CONTROL;
                                if (e === 6159) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6435) {
                                if (e < 6313) {
                                    if (6277 <= e && e <= 6278) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6432) {
                                    if (e === 6313) return n.CLUSTER_BREAK.EXTEND
                                } else if (6432 <= e && e <= 6434) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6439) {
                                if (6435 <= e && e <= 6438) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6441) {
                                if (6439 <= e && e <= 6440) return n.CLUSTER_BREAK.EXTEND
                            } else if (6441 <= e && e <= 6443) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 6971) {
                            if (e < 6744)
                                if (e < 6681) {
                                    if (e < 6451) {
                                        if (e < 6450) {
                                            if (6448 <= e && e <= 6449) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (e === 6450) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 6457) {
                                        if (6451 <= e && e <= 6456) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 6679) {
                                        if (6457 <= e && e <= 6459) return n.CLUSTER_BREAK.EXTEND
                                    } else if (6679 <= e && e <= 6680) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6741) {
                                if (e < 6683) {
                                    if (6681 <= e && e <= 6682) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e === 6683) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6742) {
                                if (e === 6741) return n.CLUSTER_BREAK.SPACINGMARK
                            } else {
                                if (e === 6742) return n.CLUSTER_BREAK.EXTEND;
                                if (e === 6743) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6771) {
                                if (e < 6754) {
                                    if (e < 6752) {
                                        if (6744 <= e && e <= 6750) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 6752) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6757) {
                                    if (e === 6754) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6765) {
                                    if (6757 <= e && e <= 6764) return n.CLUSTER_BREAK.EXTEND
                                } else if (6765 <= e && e <= 6770) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 6912) {
                                if (e < 6783) {
                                    if (6771 <= e && e <= 6780) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6832) {
                                    if (e === 6783) return n.CLUSTER_BREAK.EXTEND
                                } else if (6832 <= e && e <= 6862) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6916) {
                                if (6912 <= e && e <= 6915) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 6964) {
                                if (e === 6916) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (6964 <= e && e <= 6970) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 7080) {
                            if (e < 7019) {
                                if (e < 6973) {
                                    if (e === 6971) return n.CLUSTER_BREAK.SPACINGMARK;
                                    if (e === 6972) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 6978) {
                                    if (6973 <= e && e <= 6977) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 6979) {
                                    if (e === 6978) return n.CLUSTER_BREAK.EXTEND
                                } else if (6979 <= e && e <= 6980) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 7073) {
                                if (e < 7040) {
                                    if (7019 <= e && e <= 7027) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 7042) {
                                    if (7040 <= e && e <= 7041) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 7042) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 7074) {
                                if (e === 7073) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 7078) {
                                if (7074 <= e && e <= 7077) return n.CLUSTER_BREAK.EXTEND
                            } else if (7078 <= e && e <= 7079) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7144)
                            if (e < 7083) {
                                if (e < 7082) {
                                    if (7080 <= e && e <= 7081) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 7082) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 7142) {
                            if (7083 <= e && e <= 7085) return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 7142) return n.CLUSTER_BREAK.EXTEND;
                            if (e === 7143) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7150) {
                            if (e < 7146) {
                                if (7144 <= e && e <= 7145) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 7149) {
                                if (7146 <= e && e <= 7148) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 7149) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 7151) {
                            if (e === 7150) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 7154) {
                            if (7151 <= e && e <= 7153) return n.CLUSTER_BREAK.EXTEND
                        } else if (7154 <= e && e <= 7155) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 43346) {
                        if (e < 11647) {
                            if (e < 7415) {
                                if (e < 7380) {
                                    if (e < 7220) {
                                        if (e < 7212) {
                                            if (7204 <= e && e <= 7211) return n.CLUSTER_BREAK.SPACINGMARK
                                        } else if (7212 <= e && e <= 7219) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e < 7222) {
                                        if (7220 <= e && e <= 7221) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (e < 7376) {
                                        if (7222 <= e && e <= 7223) return n.CLUSTER_BREAK.EXTEND
                                    } else if (7376 <= e && e <= 7378) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 7394) {
                                    if (e < 7393) {
                                        if (7380 <= e && e <= 7392) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 7393) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 7405) {
                                    if (7394 <= e && e <= 7400) return n.CLUSTER_BREAK.EXTEND
                                } else if (e === 7405 || e === 7412) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 8205)
                                if (e < 7616) {
                                    if (e < 7416) {
                                        if (e === 7415) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (7416 <= e && e <= 7417) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 8203) {
                                if (7616 <= e && e <= 7679) return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 8203) return n.CLUSTER_BREAK.CONTROL;
                                if (e === 8204) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 8288) {
                                if (e < 8206) {
                                    if (e === 8205) return n.CLUSTER_BREAK.ZWJ
                                } else if (e < 8232) {
                                    if (8206 <= e && e <= 8207) return n.CLUSTER_BREAK.CONTROL
                                } else if (8232 <= e && e <= 8238) return n.CLUSTER_BREAK.CONTROL
                            } else if (e < 8400) {
                                if (8288 <= e && e <= 8303) return n.CLUSTER_BREAK.CONTROL
                            } else if (e < 11503) {
                                if (8400 <= e && e <= 8432) return n.CLUSTER_BREAK.EXTEND
                            } else if (11503 <= e && e <= 11505) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43043) {
                            if (e < 42612) {
                                if (e < 12330) {
                                    if (e < 11744) {
                                        if (e === 11647) return n.CLUSTER_BREAK.EXTEND
                                    } else if (11744 <= e && e <= 11775) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 12441) {
                                    if (12330 <= e && e <= 12335) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 42607) {
                                    if (12441 <= e && e <= 12442) return n.CLUSTER_BREAK.EXTEND
                                } else if (42607 <= e && e <= 42610) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43010) {
                                if (e < 42654) {
                                    if (42612 <= e && e <= 42621) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 42736) {
                                    if (42654 <= e && e <= 42655) return n.CLUSTER_BREAK.EXTEND
                                } else if (42736 <= e && e <= 42737) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43014) {
                                if (e === 43010) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 43014 || e === 43019) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43188) {
                            if (e < 43047) {
                                if (e < 43045) {
                                    if (43043 <= e && e <= 43044) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (43045 <= e && e <= 43046) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43052) {
                                if (e === 43047) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 43136) {
                                if (e === 43052) return n.CLUSTER_BREAK.EXTEND
                            } else if (43136 <= e && e <= 43137) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43263) {
                            if (e < 43204) {
                                if (43188 <= e && e <= 43203) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 43232) {
                                if (43204 <= e && e <= 43205) return n.CLUSTER_BREAK.EXTEND
                            } else if (43232 <= e && e <= 43249) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43302) {
                            if (e === 43263) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43335) {
                            if (43302 <= e && e <= 43309) return n.CLUSTER_BREAK.EXTEND
                        } else if (43335 <= e && e <= 43345) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 43698) {
                        if (e < 43493) {
                            if (e < 43444)
                                if (e < 43392) {
                                    if (e < 43360) {
                                        if (43346 <= e && e <= 43347) return n.CLUSTER_BREAK.SPACINGMARK
                                    } else if (43360 <= e && e <= 43388) return n.CLUSTER_BREAK.L
                                } else if (e < 43395) {
                                if (43392 <= e && e <= 43394) return n.CLUSTER_BREAK.EXTEND
                            } else {
                                if (e === 43395) return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 43443) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43450) {
                                if (e < 43446) {
                                    if (43444 <= e && e <= 43445) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (43446 <= e && e <= 43449) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43452) {
                                if (43450 <= e && e <= 43451) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 43454) {
                                if (43452 <= e && e <= 43453) return n.CLUSTER_BREAK.EXTEND
                            } else if (43454 <= e && e <= 43456) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43573) {
                            if (e < 43567) {
                                if (e < 43561) {
                                    if (e === 43493) return n.CLUSTER_BREAK.EXTEND
                                } else if (43561 <= e && e <= 43566) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43569) {
                                if (43567 <= e && e <= 43568) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 43571) {
                                if (43569 <= e && e <= 43570) return n.CLUSTER_BREAK.EXTEND
                            } else if (43571 <= e && e <= 43572) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43597) {
                            if (e < 43587) {
                                if (43573 <= e && e <= 43574) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 43587 || e === 43596) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 43644) {
                            if (e === 43597) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 43644 || e === 43696) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 44006) {
                        if (e < 43756)
                            if (e < 43710) {
                                if (e < 43703) {
                                    if (43698 <= e && e <= 43700) return n.CLUSTER_BREAK.EXTEND
                                } else if (43703 <= e && e <= 43704) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43713) {
                            if (43710 <= e && e <= 43711) return n.CLUSTER_BREAK.EXTEND
                        } else {
                            if (e === 43713) return n.CLUSTER_BREAK.EXTEND;
                            if (e === 43755) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 43766) {
                            if (e < 43758) {
                                if (43756 <= e && e <= 43757) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 43765) {
                                if (43758 <= e && e <= 43759) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 43765) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 44003) {
                            if (e === 43766) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 44005) {
                            if (44003 <= e && e <= 44004) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 44005) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 44032)
                        if (e < 44009) {
                            if (e < 44008) {
                                if (44006 <= e && e <= 44007) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 44008) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 44012) {
                        if (44009 <= e && e <= 44010) return n.CLUSTER_BREAK.SPACINGMARK
                    } else {
                        if (e === 44012) return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 44013) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 44061) {
                        if (e < 44033) {
                            if (e === 44032) return n.CLUSTER_BREAK.LV
                        } else if (e < 44060) {
                            if (44033 <= e && e <= 44059) return n.CLUSTER_BREAK.LVT
                        } else if (e === 44060) return n.CLUSTER_BREAK.LV
                    } else if (e < 44088) {
                        if (44061 <= e && e <= 44087) return n.CLUSTER_BREAK.LVT
                    } else if (e < 44089) {
                        if (e === 44088) return n.CLUSTER_BREAK.LV
                    } else if (44089 <= e && e <= 44115) return n.CLUSTER_BREAK.LVT
                } else if (e < 46497) {
                    if (e < 45293) {
                        if (e < 44704) {
                            if (e < 44397) {
                                if (e < 44256) {
                                    if (e < 44173) {
                                        if (e < 44144) {
                                            if (e < 44117) {
                                                if (e === 44116) return n.CLUSTER_BREAK.LV
                                            } else if (44117 <= e && e <= 44143) return n.CLUSTER_BREAK.LVT
                                        } else if (e < 44145) {
                                            if (e === 44144) return n.CLUSTER_BREAK.LV
                                        } else if (e < 44172) {
                                            if (44145 <= e && e <= 44171) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 44172) return n.CLUSTER_BREAK.LV
                                    } else if (e < 44201) {
                                        if (e < 44200) {
                                            if (44173 <= e && e <= 44199) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 44200) return n.CLUSTER_BREAK.LV
                                    } else if (e < 44228) {
                                        if (44201 <= e && e <= 44227) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 44229) {
                                        if (e === 44228) return n.CLUSTER_BREAK.LV
                                    } else if (44229 <= e && e <= 44255) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44313) {
                                    if (e < 44284) {
                                        if (e < 44257) {
                                            if (e === 44256) return n.CLUSTER_BREAK.LV
                                        } else if (44257 <= e && e <= 44283) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 44285) {
                                        if (e === 44284) return n.CLUSTER_BREAK.LV
                                    } else if (e < 44312) {
                                        if (44285 <= e && e <= 44311) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44312) return n.CLUSTER_BREAK.LV
                                } else if (e < 44368) {
                                    if (e < 44340) {
                                        if (44313 <= e && e <= 44339) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 44341) {
                                        if (e === 44340) return n.CLUSTER_BREAK.LV
                                    } else if (44341 <= e && e <= 44367) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44369) {
                                    if (e === 44368) return n.CLUSTER_BREAK.LV
                                } else if (e < 44396) {
                                    if (44369 <= e && e <= 44395) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44396) return n.CLUSTER_BREAK.LV
                            } else if (e < 44537) {
                                if (e < 44480) {
                                    if (e < 44425) {
                                        if (e < 44424) {
                                            if (44397 <= e && e <= 44423) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 44424) return n.CLUSTER_BREAK.LV
                                    } else if (e < 44452) {
                                        if (44425 <= e && e <= 44451) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 44453) {
                                        if (e === 44452) return n.CLUSTER_BREAK.LV
                                    } else if (44453 <= e && e <= 44479) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44508) {
                                    if (e < 44481) {
                                        if (e === 44480) return n.CLUSTER_BREAK.LV
                                    } else if (44481 <= e && e <= 44507) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44509) {
                                    if (e === 44508) return n.CLUSTER_BREAK.LV
                                } else if (e < 44536) {
                                    if (44509 <= e && e <= 44535) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44536) return n.CLUSTER_BREAK.LV
                            } else if (e < 44620) {
                                if (e < 44565) {
                                    if (e < 44564) {
                                        if (44537 <= e && e <= 44563) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44564) return n.CLUSTER_BREAK.LV
                                } else if (e < 44592) {
                                    if (44565 <= e && e <= 44591) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44593) {
                                    if (e === 44592) return n.CLUSTER_BREAK.LV
                                } else if (44593 <= e && e <= 44619) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44649) {
                                if (e < 44621) {
                                    if (e === 44620) return n.CLUSTER_BREAK.LV
                                } else if (e < 44648) {
                                    if (44621 <= e && e <= 44647) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44648) return n.CLUSTER_BREAK.LV
                            } else if (e < 44676) {
                                if (44649 <= e && e <= 44675) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44677) {
                                if (e === 44676) return n.CLUSTER_BREAK.LV
                            } else if (44677 <= e && e <= 44703) return n.CLUSTER_BREAK.LVT
                        } else if (e < 44985) {
                            if (e < 44844) {
                                if (e < 44761) {
                                    if (e < 44732) {
                                        if (e < 44705) {
                                            if (e === 44704) return n.CLUSTER_BREAK.LV
                                        } else if (44705 <= e && e <= 44731) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 44733) {
                                        if (e === 44732) return n.CLUSTER_BREAK.LV
                                    } else if (e < 44760) {
                                        if (44733 <= e && e <= 44759) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44760) return n.CLUSTER_BREAK.LV
                                } else if (e < 44789) {
                                    if (e < 44788) {
                                        if (44761 <= e && e <= 44787) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 44788) return n.CLUSTER_BREAK.LV
                                } else if (e < 44816) {
                                    if (44789 <= e && e <= 44815) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44817) {
                                    if (e === 44816) return n.CLUSTER_BREAK.LV
                                } else if (44817 <= e && e <= 44843) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44901) {
                                if (e < 44872) {
                                    if (e < 44845) {
                                        if (e === 44844) return n.CLUSTER_BREAK.LV
                                    } else if (44845 <= e && e <= 44871) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44873) {
                                    if (e === 44872) return n.CLUSTER_BREAK.LV
                                } else if (e < 44900) {
                                    if (44873 <= e && e <= 44899) return n.CLUSTER_BREAK.LVT
                                } else if (e === 44900) return n.CLUSTER_BREAK.LV
                            } else if (e < 44956) {
                                if (e < 44928) {
                                    if (44901 <= e && e <= 44927) return n.CLUSTER_BREAK.LVT
                                } else if (e < 44929) {
                                    if (e === 44928) return n.CLUSTER_BREAK.LV
                                } else if (44929 <= e && e <= 44955) return n.CLUSTER_BREAK.LVT
                            } else if (e < 44957) {
                                if (e === 44956) return n.CLUSTER_BREAK.LV
                            } else if (e < 44984) {
                                if (44957 <= e && e <= 44983) return n.CLUSTER_BREAK.LVT
                            } else if (e === 44984) return n.CLUSTER_BREAK.LV
                        } else if (e < 45152) {
                            if (e < 45068) {
                                if (e < 45013) {
                                    if (e < 45012) {
                                        if (44985 <= e && e <= 45011) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 45012) return n.CLUSTER_BREAK.LV
                                } else if (e < 45040) {
                                    if (45013 <= e && e <= 45039) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45041) {
                                    if (e === 45040) return n.CLUSTER_BREAK.LV
                                } else if (45041 <= e && e <= 45067) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45097) {
                                if (e < 45069) {
                                    if (e === 45068) return n.CLUSTER_BREAK.LV
                                } else if (e < 45096) {
                                    if (45069 <= e && e <= 45095) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45096) return n.CLUSTER_BREAK.LV
                            } else if (e < 45124) {
                                if (45097 <= e && e <= 45123) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45125) {
                                if (e === 45124) return n.CLUSTER_BREAK.LV
                            } else if (45125 <= e && e <= 45151) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45209) {
                            if (e < 45180) {
                                if (e < 45153) {
                                    if (e === 45152) return n.CLUSTER_BREAK.LV
                                } else if (45153 <= e && e <= 45179) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45181) {
                                if (e === 45180) return n.CLUSTER_BREAK.LV
                            } else if (e < 45208) {
                                if (45181 <= e && e <= 45207) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45208) return n.CLUSTER_BREAK.LV
                        } else if (e < 45264) {
                            if (e < 45236) {
                                if (45209 <= e && e <= 45235) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45237) {
                                if (e === 45236) return n.CLUSTER_BREAK.LV
                            } else if (45237 <= e && e <= 45263) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45265) {
                            if (e === 45264) return n.CLUSTER_BREAK.LV
                        } else if (e < 45292) {
                            if (45265 <= e && e <= 45291) return n.CLUSTER_BREAK.LVT
                        } else if (e === 45292) return n.CLUSTER_BREAK.LV
                    } else if (e < 45908) {
                        if (e < 45600) {
                            if (e < 45433) {
                                if (e < 45376) {
                                    if (e < 45321) {
                                        if (e < 45320) {
                                            if (45293 <= e && e <= 45319) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 45320) return n.CLUSTER_BREAK.LV
                                    } else if (e < 45348) {
                                        if (45321 <= e && e <= 45347) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 45349) {
                                        if (e === 45348) return n.CLUSTER_BREAK.LV
                                    } else if (45349 <= e && e <= 45375) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45404) {
                                    if (e < 45377) {
                                        if (e === 45376) return n.CLUSTER_BREAK.LV
                                    } else if (45377 <= e && e <= 45403) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45405) {
                                    if (e === 45404) return n.CLUSTER_BREAK.LV
                                } else if (e < 45432) {
                                    if (45405 <= e && e <= 45431) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45432) return n.CLUSTER_BREAK.LV
                            } else if (e < 45516) {
                                if (e < 45461) {
                                    if (e < 45460) {
                                        if (45433 <= e && e <= 45459) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 45460) return n.CLUSTER_BREAK.LV
                                } else if (e < 45488) {
                                    if (45461 <= e && e <= 45487) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45489) {
                                    if (e === 45488) return n.CLUSTER_BREAK.LV
                                } else if (45489 <= e && e <= 45515) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45545) {
                                if (e < 45517) {
                                    if (e === 45516) return n.CLUSTER_BREAK.LV
                                } else if (e < 45544) {
                                    if (45517 <= e && e <= 45543) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45544) return n.CLUSTER_BREAK.LV
                            } else if (e < 45572) {
                                if (45545 <= e && e <= 45571) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45573) {
                                if (e === 45572) return n.CLUSTER_BREAK.LV
                            } else if (45573 <= e && e <= 45599) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45741) {
                            if (e < 45657) {
                                if (e < 45628) {
                                    if (e < 45601) {
                                        if (e === 45600) return n.CLUSTER_BREAK.LV
                                    } else if (45601 <= e && e <= 45627) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45629) {
                                    if (e === 45628) return n.CLUSTER_BREAK.LV
                                } else if (e < 45656) {
                                    if (45629 <= e && e <= 45655) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45656) return n.CLUSTER_BREAK.LV
                            } else if (e < 45712) {
                                if (e < 45684) {
                                    if (45657 <= e && e <= 45683) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45685) {
                                    if (e === 45684) return n.CLUSTER_BREAK.LV
                                } else if (45685 <= e && e <= 45711) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45713) {
                                if (e === 45712) return n.CLUSTER_BREAK.LV
                            } else if (e < 45740) {
                                if (45713 <= e && e <= 45739) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45740) return n.CLUSTER_BREAK.LV
                        } else if (e < 45824) {
                            if (e < 45769) {
                                if (e < 45768) {
                                    if (45741 <= e && e <= 45767) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45768) return n.CLUSTER_BREAK.LV
                            } else if (e < 45796) {
                                if (45769 <= e && e <= 45795) return n.CLUSTER_BREAK.LVT
                            } else if (e < 45797) {
                                if (e === 45796) return n.CLUSTER_BREAK.LV
                            } else if (45797 <= e && e <= 45823) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45853) {
                            if (e < 45825) {
                                if (e === 45824) return n.CLUSTER_BREAK.LV
                            } else if (e < 45852) {
                                if (45825 <= e && e <= 45851) return n.CLUSTER_BREAK.LVT
                            } else if (e === 45852) return n.CLUSTER_BREAK.LV
                        } else if (e < 45880) {
                            if (45853 <= e && e <= 45879) return n.CLUSTER_BREAK.LVT
                        } else if (e < 45881) {
                            if (e === 45880) return n.CLUSTER_BREAK.LV
                        } else if (45881 <= e && e <= 45907) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46189) {
                        if (e < 46048) {
                            if (e < 45965) {
                                if (e < 45936) {
                                    if (e < 45909) {
                                        if (e === 45908) return n.CLUSTER_BREAK.LV
                                    } else if (45909 <= e && e <= 45935) return n.CLUSTER_BREAK.LVT
                                } else if (e < 45937) {
                                    if (e === 45936) return n.CLUSTER_BREAK.LV
                                } else if (e < 45964) {
                                    if (45937 <= e && e <= 45963) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45964) return n.CLUSTER_BREAK.LV
                            } else if (e < 45993) {
                                if (e < 45992) {
                                    if (45965 <= e && e <= 45991) return n.CLUSTER_BREAK.LVT
                                } else if (e === 45992) return n.CLUSTER_BREAK.LV
                            } else if (e < 46020) {
                                if (45993 <= e && e <= 46019) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46021) {
                                if (e === 46020) return n.CLUSTER_BREAK.LV
                            } else if (46021 <= e && e <= 46047) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46105) {
                            if (e < 46076) {
                                if (e < 46049) {
                                    if (e === 46048) return n.CLUSTER_BREAK.LV
                                } else if (46049 <= e && e <= 46075) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46077) {
                                if (e === 46076) return n.CLUSTER_BREAK.LV
                            } else if (e < 46104) {
                                if (46077 <= e && e <= 46103) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46104) return n.CLUSTER_BREAK.LV
                        } else if (e < 46160) {
                            if (e < 46132) {
                                if (46105 <= e && e <= 46131) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46133) {
                                if (e === 46132) return n.CLUSTER_BREAK.LV
                            } else if (46133 <= e && e <= 46159) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46161) {
                            if (e === 46160) return n.CLUSTER_BREAK.LV
                        } else if (e < 46188) {
                            if (46161 <= e && e <= 46187) return n.CLUSTER_BREAK.LVT
                        } else if (e === 46188) return n.CLUSTER_BREAK.LV
                    } else if (e < 46356) {
                        if (e < 46272) {
                            if (e < 46217) {
                                if (e < 46216) {
                                    if (46189 <= e && e <= 46215) return n.CLUSTER_BREAK.LVT
                                } else if (e === 46216) return n.CLUSTER_BREAK.LV
                            } else if (e < 46244) {
                                if (46217 <= e && e <= 46243) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46245) {
                                if (e === 46244) return n.CLUSTER_BREAK.LV
                            } else if (46245 <= e && e <= 46271) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46301) {
                            if (e < 46273) {
                                if (e === 46272) return n.CLUSTER_BREAK.LV
                            } else if (e < 46300) {
                                if (46273 <= e && e <= 46299) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46300) return n.CLUSTER_BREAK.LV
                        } else if (e < 46328) {
                            if (46301 <= e && e <= 46327) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46329) {
                            if (e === 46328) return n.CLUSTER_BREAK.LV
                        } else if (46329 <= e && e <= 46355) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46413) {
                        if (e < 46384) {
                            if (e < 46357) {
                                if (e === 46356) return n.CLUSTER_BREAK.LV
                            } else if (46357 <= e && e <= 46383) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46385) {
                            if (e === 46384) return n.CLUSTER_BREAK.LV
                        } else if (e < 46412) {
                            if (46385 <= e && e <= 46411) return n.CLUSTER_BREAK.LVT
                        } else if (e === 46412) return n.CLUSTER_BREAK.LV
                    } else if (e < 46468) {
                        if (e < 46440) {
                            if (46413 <= e && e <= 46439) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46441) {
                            if (e === 46440) return n.CLUSTER_BREAK.LV
                        } else if (46441 <= e && e <= 46467) return n.CLUSTER_BREAK.LVT
                    } else if (e < 46469) {
                        if (e === 46468) return n.CLUSTER_BREAK.LV
                    } else if (e < 46496) {
                        if (46469 <= e && e <= 46495) return n.CLUSTER_BREAK.LVT
                    } else if (e === 46496) return n.CLUSTER_BREAK.LV
                } else if (e < 47701) {
                    if (e < 47112) {
                        if (e < 46804) {
                            if (e < 46637) {
                                if (e < 46580) {
                                    if (e < 46525) {
                                        if (e < 46524) {
                                            if (46497 <= e && e <= 46523) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 46524) return n.CLUSTER_BREAK.LV
                                    } else if (e < 46552) {
                                        if (46525 <= e && e <= 46551) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 46553) {
                                        if (e === 46552) return n.CLUSTER_BREAK.LV
                                    } else if (46553 <= e && e <= 46579) return n.CLUSTER_BREAK.LVT
                                } else if (e < 46608) {
                                    if (e < 46581) {
                                        if (e === 46580) return n.CLUSTER_BREAK.LV
                                    } else if (46581 <= e && e <= 46607) return n.CLUSTER_BREAK.LVT
                                } else if (e < 46609) {
                                    if (e === 46608) return n.CLUSTER_BREAK.LV
                                } else if (e < 46636) {
                                    if (46609 <= e && e <= 46635) return n.CLUSTER_BREAK.LVT
                                } else if (e === 46636) return n.CLUSTER_BREAK.LV
                            } else if (e < 46720) {
                                if (e < 46665) {
                                    if (e < 46664) {
                                        if (46637 <= e && e <= 46663) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 46664) return n.CLUSTER_BREAK.LV
                                } else if (e < 46692) {
                                    if (46665 <= e && e <= 46691) return n.CLUSTER_BREAK.LVT
                                } else if (e < 46693) {
                                    if (e === 46692) return n.CLUSTER_BREAK.LV
                                } else if (46693 <= e && e <= 46719) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46749) {
                                if (e < 46721) {
                                    if (e === 46720) return n.CLUSTER_BREAK.LV
                                } else if (e < 46748) {
                                    if (46721 <= e && e <= 46747) return n.CLUSTER_BREAK.LVT
                                } else if (e === 46748) return n.CLUSTER_BREAK.LV
                            } else if (e < 46776) {
                                if (46749 <= e && e <= 46775) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46777) {
                                if (e === 46776) return n.CLUSTER_BREAK.LV
                            } else if (46777 <= e && e <= 46803) return n.CLUSTER_BREAK.LVT
                        } else if (e < 46945) {
                            if (e < 46861) {
                                if (e < 46832) {
                                    if (e < 46805) {
                                        if (e === 46804) return n.CLUSTER_BREAK.LV
                                    } else if (46805 <= e && e <= 46831) return n.CLUSTER_BREAK.LVT
                                } else if (e < 46833) {
                                    if (e === 46832) return n.CLUSTER_BREAK.LV
                                } else if (e < 46860) {
                                    if (46833 <= e && e <= 46859) return n.CLUSTER_BREAK.LVT
                                } else if (e === 46860) return n.CLUSTER_BREAK.LV
                            } else if (e < 46916) {
                                if (e < 46888) {
                                    if (46861 <= e && e <= 46887) return n.CLUSTER_BREAK.LVT
                                } else if (e < 46889) {
                                    if (e === 46888) return n.CLUSTER_BREAK.LV
                                } else if (46889 <= e && e <= 46915) return n.CLUSTER_BREAK.LVT
                            } else if (e < 46917) {
                                if (e === 46916) return n.CLUSTER_BREAK.LV
                            } else if (e < 46944) {
                                if (46917 <= e && e <= 46943) return n.CLUSTER_BREAK.LVT
                            } else if (e === 46944) return n.CLUSTER_BREAK.LV
                        } else if (e < 47028) {
                            if (e < 46973) {
                                if (e < 46972) {
                                    if (46945 <= e && e <= 46971) return n.CLUSTER_BREAK.LVT
                                } else if (e === 46972) return n.CLUSTER_BREAK.LV
                            } else if (e < 47e3) {
                                if (46973 <= e && e <= 46999) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47001) {
                                if (e === 47e3) return n.CLUSTER_BREAK.LV
                            } else if (47001 <= e && e <= 47027) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47057) {
                            if (e < 47029) {
                                if (e === 47028) return n.CLUSTER_BREAK.LV
                            } else if (e < 47056) {
                                if (47029 <= e && e <= 47055) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47056) return n.CLUSTER_BREAK.LV
                        } else if (e < 47084) {
                            if (47057 <= e && e <= 47083) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47085) {
                            if (e === 47084) return n.CLUSTER_BREAK.LV
                        } else if (47085 <= e && e <= 47111) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47393) {
                        if (e < 47252) {
                            if (e < 47169) {
                                if (e < 47140) {
                                    if (e < 47113) {
                                        if (e === 47112) return n.CLUSTER_BREAK.LV
                                    } else if (47113 <= e && e <= 47139) return n.CLUSTER_BREAK.LVT
                                } else if (e < 47141) {
                                    if (e === 47140) return n.CLUSTER_BREAK.LV
                                } else if (e < 47168) {
                                    if (47141 <= e && e <= 47167) return n.CLUSTER_BREAK.LVT
                                } else if (e === 47168) return n.CLUSTER_BREAK.LV
                            } else if (e < 47197) {
                                if (e < 47196) {
                                    if (47169 <= e && e <= 47195) return n.CLUSTER_BREAK.LVT
                                } else if (e === 47196) return n.CLUSTER_BREAK.LV
                            } else if (e < 47224) {
                                if (47197 <= e && e <= 47223) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47225) {
                                if (e === 47224) return n.CLUSTER_BREAK.LV
                            } else if (47225 <= e && e <= 47251) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47309) {
                            if (e < 47280) {
                                if (e < 47253) {
                                    if (e === 47252) return n.CLUSTER_BREAK.LV
                                } else if (47253 <= e && e <= 47279) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47281) {
                                if (e === 47280) return n.CLUSTER_BREAK.LV
                            } else if (e < 47308) {
                                if (47281 <= e && e <= 47307) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47308) return n.CLUSTER_BREAK.LV
                        } else if (e < 47364) {
                            if (e < 47336) {
                                if (47309 <= e && e <= 47335) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47337) {
                                if (e === 47336) return n.CLUSTER_BREAK.LV
                            } else if (47337 <= e && e <= 47363) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47365) {
                            if (e === 47364) return n.CLUSTER_BREAK.LV
                        } else if (e < 47392) {
                            if (47365 <= e && e <= 47391) return n.CLUSTER_BREAK.LVT
                        } else if (e === 47392) return n.CLUSTER_BREAK.LV
                    } else if (e < 47560) {
                        if (e < 47476) {
                            if (e < 47421) {
                                if (e < 47420) {
                                    if (47393 <= e && e <= 47419) return n.CLUSTER_BREAK.LVT
                                } else if (e === 47420) return n.CLUSTER_BREAK.LV
                            } else if (e < 47448) {
                                if (47421 <= e && e <= 47447) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47449) {
                                if (e === 47448) return n.CLUSTER_BREAK.LV
                            } else if (47449 <= e && e <= 47475) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47505) {
                            if (e < 47477) {
                                if (e === 47476) return n.CLUSTER_BREAK.LV
                            } else if (e < 47504) {
                                if (47477 <= e && e <= 47503) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47504) return n.CLUSTER_BREAK.LV
                        } else if (e < 47532) {
                            if (47505 <= e && e <= 47531) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47533) {
                            if (e === 47532) return n.CLUSTER_BREAK.LV
                        } else if (47533 <= e && e <= 47559) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47617) {
                        if (e < 47588) {
                            if (e < 47561) {
                                if (e === 47560) return n.CLUSTER_BREAK.LV
                            } else if (47561 <= e && e <= 47587) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47589) {
                            if (e === 47588) return n.CLUSTER_BREAK.LV
                        } else if (e < 47616) {
                            if (47589 <= e && e <= 47615) return n.CLUSTER_BREAK.LVT
                        } else if (e === 47616) return n.CLUSTER_BREAK.LV
                    } else if (e < 47672) {
                        if (e < 47644) {
                            if (47617 <= e && e <= 47643) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47645) {
                            if (e === 47644) return n.CLUSTER_BREAK.LV
                        } else if (47645 <= e && e <= 47671) return n.CLUSTER_BREAK.LVT
                    } else if (e < 47673) {
                        if (e === 47672) return n.CLUSTER_BREAK.LV
                    } else if (e < 47700) {
                        if (47673 <= e && e <= 47699) return n.CLUSTER_BREAK.LVT
                    } else if (e === 47700) return n.CLUSTER_BREAK.LV
                } else if (e < 48316) {
                    if (e < 48008) {
                        if (e < 47841) {
                            if (e < 47784) {
                                if (e < 47729) {
                                    if (e < 47728) {
                                        if (47701 <= e && e <= 47727) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 47728) return n.CLUSTER_BREAK.LV
                                } else if (e < 47756) {
                                    if (47729 <= e && e <= 47755) return n.CLUSTER_BREAK.LVT
                                } else if (e < 47757) {
                                    if (e === 47756) return n.CLUSTER_BREAK.LV
                                } else if (47757 <= e && e <= 47783) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47812) {
                                if (e < 47785) {
                                    if (e === 47784) return n.CLUSTER_BREAK.LV
                                } else if (47785 <= e && e <= 47811) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47813) {
                                if (e === 47812) return n.CLUSTER_BREAK.LV
                            } else if (e < 47840) {
                                if (47813 <= e && e <= 47839) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47840) return n.CLUSTER_BREAK.LV
                        } else if (e < 47924) {
                            if (e < 47869) {
                                if (e < 47868) {
                                    if (47841 <= e && e <= 47867) return n.CLUSTER_BREAK.LVT
                                } else if (e === 47868) return n.CLUSTER_BREAK.LV
                            } else if (e < 47896) {
                                if (47869 <= e && e <= 47895) return n.CLUSTER_BREAK.LVT
                            } else if (e < 47897) {
                                if (e === 47896) return n.CLUSTER_BREAK.LV
                            } else if (47897 <= e && e <= 47923) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47953) {
                            if (e < 47925) {
                                if (e === 47924) return n.CLUSTER_BREAK.LV
                            } else if (e < 47952) {
                                if (47925 <= e && e <= 47951) return n.CLUSTER_BREAK.LVT
                            } else if (e === 47952) return n.CLUSTER_BREAK.LV
                        } else if (e < 47980) {
                            if (47953 <= e && e <= 47979) return n.CLUSTER_BREAK.LVT
                        } else if (e < 47981) {
                            if (e === 47980) return n.CLUSTER_BREAK.LV
                        } else if (47981 <= e && e <= 48007) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48149) {
                        if (e < 48065) {
                            if (e < 48036) {
                                if (e < 48009) {
                                    if (e === 48008) return n.CLUSTER_BREAK.LV
                                } else if (48009 <= e && e <= 48035) return n.CLUSTER_BREAK.LVT
                            } else if (e < 48037) {
                                if (e === 48036) return n.CLUSTER_BREAK.LV
                            } else if (e < 48064) {
                                if (48037 <= e && e <= 48063) return n.CLUSTER_BREAK.LVT
                            } else if (e === 48064) return n.CLUSTER_BREAK.LV
                        } else if (e < 48120) {
                            if (e < 48092) {
                                if (48065 <= e && e <= 48091) return n.CLUSTER_BREAK.LVT
                            } else if (e < 48093) {
                                if (e === 48092) return n.CLUSTER_BREAK.LV
                            } else if (48093 <= e && e <= 48119) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48121) {
                            if (e === 48120) return n.CLUSTER_BREAK.LV
                        } else if (e < 48148) {
                            if (48121 <= e && e <= 48147) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48148) return n.CLUSTER_BREAK.LV
                    } else if (e < 48232) {
                        if (e < 48177) {
                            if (e < 48176) {
                                if (48149 <= e && e <= 48175) return n.CLUSTER_BREAK.LVT
                            } else if (e === 48176) return n.CLUSTER_BREAK.LV
                        } else if (e < 48204) {
                            if (48177 <= e && e <= 48203) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48205) {
                            if (e === 48204) return n.CLUSTER_BREAK.LV
                        } else if (48205 <= e && e <= 48231) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48261) {
                        if (e < 48233) {
                            if (e === 48232) return n.CLUSTER_BREAK.LV
                        } else if (e < 48260) {
                            if (48233 <= e && e <= 48259) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48260) return n.CLUSTER_BREAK.LV
                    } else if (e < 48288) {
                        if (48261 <= e && e <= 48287) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48289) {
                        if (e === 48288) return n.CLUSTER_BREAK.LV
                    } else if (48289 <= e && e <= 48315) return n.CLUSTER_BREAK.LVT
                } else if (e < 48597) {
                    if (e < 48456) {
                        if (e < 48373) {
                            if (e < 48344) {
                                if (e < 48317) {
                                    if (e === 48316) return n.CLUSTER_BREAK.LV
                                } else if (48317 <= e && e <= 48343) return n.CLUSTER_BREAK.LVT
                            } else if (e < 48345) {
                                if (e === 48344) return n.CLUSTER_BREAK.LV
                            } else if (e < 48372) {
                                if (48345 <= e && e <= 48371) return n.CLUSTER_BREAK.LVT
                            } else if (e === 48372) return n.CLUSTER_BREAK.LV
                        } else if (e < 48401) {
                            if (e < 48400) {
                                if (48373 <= e && e <= 48399) return n.CLUSTER_BREAK.LVT
                            } else if (e === 48400) return n.CLUSTER_BREAK.LV
                        } else if (e < 48428) {
                            if (48401 <= e && e <= 48427) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48429) {
                            if (e === 48428) return n.CLUSTER_BREAK.LV
                        } else if (48429 <= e && e <= 48455) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48513) {
                        if (e < 48484) {
                            if (e < 48457) {
                                if (e === 48456) return n.CLUSTER_BREAK.LV
                            } else if (48457 <= e && e <= 48483) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48485) {
                            if (e === 48484) return n.CLUSTER_BREAK.LV
                        } else if (e < 48512) {
                            if (48485 <= e && e <= 48511) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48512) return n.CLUSTER_BREAK.LV
                    } else if (e < 48568) {
                        if (e < 48540) {
                            if (48513 <= e && e <= 48539) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48541) {
                            if (e === 48540) return n.CLUSTER_BREAK.LV
                        } else if (48541 <= e && e <= 48567) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48569) {
                        if (e === 48568) return n.CLUSTER_BREAK.LV
                    } else if (e < 48596) {
                        if (48569 <= e && e <= 48595) return n.CLUSTER_BREAK.LVT
                    } else if (e === 48596) return n.CLUSTER_BREAK.LV
                } else if (e < 48764) {
                    if (e < 48680) {
                        if (e < 48625) {
                            if (e < 48624) {
                                if (48597 <= e && e <= 48623) return n.CLUSTER_BREAK.LVT
                            } else if (e === 48624) return n.CLUSTER_BREAK.LV
                        } else if (e < 48652) {
                            if (48625 <= e && e <= 48651) return n.CLUSTER_BREAK.LVT
                        } else if (e < 48653) {
                            if (e === 48652) return n.CLUSTER_BREAK.LV
                        } else if (48653 <= e && e <= 48679) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48709) {
                        if (e < 48681) {
                            if (e === 48680) return n.CLUSTER_BREAK.LV
                        } else if (e < 48708) {
                            if (48681 <= e && e <= 48707) return n.CLUSTER_BREAK.LVT
                        } else if (e === 48708) return n.CLUSTER_BREAK.LV
                    } else if (e < 48736) {
                        if (48709 <= e && e <= 48735) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48737) {
                        if (e === 48736) return n.CLUSTER_BREAK.LV
                    } else if (48737 <= e && e <= 48763) return n.CLUSTER_BREAK.LVT
                } else if (e < 48821) {
                    if (e < 48792) {
                        if (e < 48765) {
                            if (e === 48764) return n.CLUSTER_BREAK.LV
                        } else if (48765 <= e && e <= 48791) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48793) {
                        if (e === 48792) return n.CLUSTER_BREAK.LV
                    } else if (e < 48820) {
                        if (48793 <= e && e <= 48819) return n.CLUSTER_BREAK.LVT
                    } else if (e === 48820) return n.CLUSTER_BREAK.LV
                } else if (e < 48876) {
                    if (e < 48848) {
                        if (48821 <= e && e <= 48847) return n.CLUSTER_BREAK.LVT
                    } else if (e < 48849) {
                        if (e === 48848) return n.CLUSTER_BREAK.LV
                    } else if (48849 <= e && e <= 48875) return n.CLUSTER_BREAK.LVT
                } else if (e < 48877) {
                    if (e === 48876) return n.CLUSTER_BREAK.LV
                } else if (e < 48904) {
                    if (48877 <= e && e <= 48903) return n.CLUSTER_BREAK.LVT
                } else if (e === 48904) return n.CLUSTER_BREAK.LV
            } else if (e < 53720) {
                if (e < 51312) {
                    if (e < 50108) {
                        if (e < 49493) {
                            if (e < 49212) {
                                if (e < 49045) {
                                    if (e < 48988) {
                                        if (e < 48933) {
                                            if (e < 48932) {
                                                if (48905 <= e && e <= 48931) return n.CLUSTER_BREAK.LVT
                                            } else if (e === 48932) return n.CLUSTER_BREAK.LV
                                        } else if (e < 48960) {
                                            if (48933 <= e && e <= 48959) return n.CLUSTER_BREAK.LVT
                                        } else if (e < 48961) {
                                            if (e === 48960) return n.CLUSTER_BREAK.LV
                                        } else if (48961 <= e && e <= 48987) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 49016) {
                                        if (e < 48989) {
                                            if (e === 48988) return n.CLUSTER_BREAK.LV
                                        } else if (48989 <= e && e <= 49015) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 49017) {
                                        if (e === 49016) return n.CLUSTER_BREAK.LV
                                    } else if (e < 49044) {
                                        if (49017 <= e && e <= 49043) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49044) return n.CLUSTER_BREAK.LV
                                } else if (e < 49128) {
                                    if (e < 49073) {
                                        if (e < 49072) {
                                            if (49045 <= e && e <= 49071) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 49072) return n.CLUSTER_BREAK.LV
                                    } else if (e < 49100) {
                                        if (49073 <= e && e <= 49099) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 49101) {
                                        if (e === 49100) return n.CLUSTER_BREAK.LV
                                    } else if (49101 <= e && e <= 49127) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49157) {
                                    if (e < 49129) {
                                        if (e === 49128) return n.CLUSTER_BREAK.LV
                                    } else if (e < 49156) {
                                        if (49129 <= e && e <= 49155) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49156) return n.CLUSTER_BREAK.LV
                                } else if (e < 49184) {
                                    if (49157 <= e && e <= 49183) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49185) {
                                    if (e === 49184) return n.CLUSTER_BREAK.LV
                                } else if (49185 <= e && e <= 49211) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49352) {
                                if (e < 49269) {
                                    if (e < 49240) {
                                        if (e < 49213) {
                                            if (e === 49212) return n.CLUSTER_BREAK.LV
                                        } else if (49213 <= e && e <= 49239) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 49241) {
                                        if (e === 49240) return n.CLUSTER_BREAK.LV
                                    } else if (e < 49268) {
                                        if (49241 <= e && e <= 49267) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49268) return n.CLUSTER_BREAK.LV
                                } else if (e < 49297) {
                                    if (e < 49296) {
                                        if (49269 <= e && e <= 49295) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49296) return n.CLUSTER_BREAK.LV
                                } else if (e < 49324) {
                                    if (49297 <= e && e <= 49323) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49325) {
                                    if (e === 49324) return n.CLUSTER_BREAK.LV
                                } else if (49325 <= e && e <= 49351) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49409) {
                                if (e < 49380) {
                                    if (e < 49353) {
                                        if (e === 49352) return n.CLUSTER_BREAK.LV
                                    } else if (49353 <= e && e <= 49379) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49381) {
                                    if (e === 49380) return n.CLUSTER_BREAK.LV
                                } else if (e < 49408) {
                                    if (49381 <= e && e <= 49407) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49408) return n.CLUSTER_BREAK.LV
                            } else if (e < 49464) {
                                if (e < 49436) {
                                    if (49409 <= e && e <= 49435) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49437) {
                                    if (e === 49436) return n.CLUSTER_BREAK.LV
                                } else if (49437 <= e && e <= 49463) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49465) {
                                if (e === 49464) return n.CLUSTER_BREAK.LV
                            } else if (e < 49492) {
                                if (49465 <= e && e <= 49491) return n.CLUSTER_BREAK.LVT
                            } else if (e === 49492) return n.CLUSTER_BREAK.LV
                        } else if (e < 49800) {
                            if (e < 49633) {
                                if (e < 49576) {
                                    if (e < 49521) {
                                        if (e < 49520) {
                                            if (49493 <= e && e <= 49519) return n.CLUSTER_BREAK.LVT
                                        } else if (e === 49520) return n.CLUSTER_BREAK.LV
                                    } else if (e < 49548) {
                                        if (49521 <= e && e <= 49547) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 49549) {
                                        if (e === 49548) return n.CLUSTER_BREAK.LV
                                    } else if (49549 <= e && e <= 49575) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49604) {
                                    if (e < 49577) {
                                        if (e === 49576) return n.CLUSTER_BREAK.LV
                                    } else if (49577 <= e && e <= 49603) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49605) {
                                    if (e === 49604) return n.CLUSTER_BREAK.LV
                                } else if (e < 49632) {
                                    if (49605 <= e && e <= 49631) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49632) return n.CLUSTER_BREAK.LV
                            } else if (e < 49716) {
                                if (e < 49661) {
                                    if (e < 49660) {
                                        if (49633 <= e && e <= 49659) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 49660) return n.CLUSTER_BREAK.LV
                                } else if (e < 49688) {
                                    if (49661 <= e && e <= 49687) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49689) {
                                    if (e === 49688) return n.CLUSTER_BREAK.LV
                                } else if (49689 <= e && e <= 49715) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49745) {
                                if (e < 49717) {
                                    if (e === 49716) return n.CLUSTER_BREAK.LV
                                } else if (e < 49744) {
                                    if (49717 <= e && e <= 49743) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49744) return n.CLUSTER_BREAK.LV
                            } else if (e < 49772) {
                                if (49745 <= e && e <= 49771) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49773) {
                                if (e === 49772) return n.CLUSTER_BREAK.LV
                            } else if (49773 <= e && e <= 49799) return n.CLUSTER_BREAK.LVT
                        } else if (e < 49941) {
                            if (e < 49857) {
                                if (e < 49828) {
                                    if (e < 49801) {
                                        if (e === 49800) return n.CLUSTER_BREAK.LV
                                    } else if (49801 <= e && e <= 49827) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49829) {
                                    if (e === 49828) return n.CLUSTER_BREAK.LV
                                } else if (e < 49856) {
                                    if (49829 <= e && e <= 49855) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49856) return n.CLUSTER_BREAK.LV
                            } else if (e < 49912) {
                                if (e < 49884) {
                                    if (49857 <= e && e <= 49883) return n.CLUSTER_BREAK.LVT
                                } else if (e < 49885) {
                                    if (e === 49884) return n.CLUSTER_BREAK.LV
                                } else if (49885 <= e && e <= 49911) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49913) {
                                if (e === 49912) return n.CLUSTER_BREAK.LV
                            } else if (e < 49940) {
                                if (49913 <= e && e <= 49939) return n.CLUSTER_BREAK.LVT
                            } else if (e === 49940) return n.CLUSTER_BREAK.LV
                        } else if (e < 50024) {
                            if (e < 49969) {
                                if (e < 49968) {
                                    if (49941 <= e && e <= 49967) return n.CLUSTER_BREAK.LVT
                                } else if (e === 49968) return n.CLUSTER_BREAK.LV
                            } else if (e < 49996) {
                                if (49969 <= e && e <= 49995) return n.CLUSTER_BREAK.LVT
                            } else if (e < 49997) {
                                if (e === 49996) return n.CLUSTER_BREAK.LV
                            } else if (49997 <= e && e <= 50023) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50053) {
                            if (e < 50025) {
                                if (e === 50024) return n.CLUSTER_BREAK.LV
                            } else if (e < 50052) {
                                if (50025 <= e && e <= 50051) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50052) return n.CLUSTER_BREAK.LV
                        } else if (e < 50080) {
                            if (50053 <= e && e <= 50079) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50081) {
                            if (e === 50080) return n.CLUSTER_BREAK.LV
                        } else if (50081 <= e && e <= 50107) return n.CLUSTER_BREAK.LVT
                    } else if (e < 50697) {
                        if (e < 50389) {
                            if (e < 50248) {
                                if (e < 50165) {
                                    if (e < 50136) {
                                        if (e < 50109) {
                                            if (e === 50108) return n.CLUSTER_BREAK.LV
                                        } else if (50109 <= e && e <= 50135) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 50137) {
                                        if (e === 50136) return n.CLUSTER_BREAK.LV
                                    } else if (e < 50164) {
                                        if (50137 <= e && e <= 50163) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 50164) return n.CLUSTER_BREAK.LV
                                } else if (e < 50193) {
                                    if (e < 50192) {
                                        if (50165 <= e && e <= 50191) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 50192) return n.CLUSTER_BREAK.LV
                                } else if (e < 50220) {
                                    if (50193 <= e && e <= 50219) return n.CLUSTER_BREAK.LVT
                                } else if (e < 50221) {
                                    if (e === 50220) return n.CLUSTER_BREAK.LV
                                } else if (50221 <= e && e <= 50247) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50305) {
                                if (e < 50276) {
                                    if (e < 50249) {
                                        if (e === 50248) return n.CLUSTER_BREAK.LV
                                    } else if (50249 <= e && e <= 50275) return n.CLUSTER_BREAK.LVT
                                } else if (e < 50277) {
                                    if (e === 50276) return n.CLUSTER_BREAK.LV
                                } else if (e < 50304) {
                                    if (50277 <= e && e <= 50303) return n.CLUSTER_BREAK.LVT
                                } else if (e === 50304) return n.CLUSTER_BREAK.LV
                            } else if (e < 50360) {
                                if (e < 50332) {
                                    if (50305 <= e && e <= 50331) return n.CLUSTER_BREAK.LVT
                                } else if (e < 50333) {
                                    if (e === 50332) return n.CLUSTER_BREAK.LV
                                } else if (50333 <= e && e <= 50359) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50361) {
                                if (e === 50360) return n.CLUSTER_BREAK.LV
                            } else if (e < 50388) {
                                if (50361 <= e && e <= 50387) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50388) return n.CLUSTER_BREAK.LV
                        } else if (e < 50556) {
                            if (e < 50472) {
                                if (e < 50417) {
                                    if (e < 50416) {
                                        if (50389 <= e && e <= 50415) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 50416) return n.CLUSTER_BREAK.LV
                                } else if (e < 50444) {
                                    if (50417 <= e && e <= 50443) return n.CLUSTER_BREAK.LVT
                                } else if (e < 50445) {
                                    if (e === 50444) return n.CLUSTER_BREAK.LV
                                } else if (50445 <= e && e <= 50471) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50501) {
                                if (e < 50473) {
                                    if (e === 50472) return n.CLUSTER_BREAK.LV
                                } else if (e < 50500) {
                                    if (50473 <= e && e <= 50499) return n.CLUSTER_BREAK.LVT
                                } else if (e === 50500) return n.CLUSTER_BREAK.LV
                            } else if (e < 50528) {
                                if (50501 <= e && e <= 50527) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50529) {
                                if (e === 50528) return n.CLUSTER_BREAK.LV
                            } else if (50529 <= e && e <= 50555) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50613) {
                            if (e < 50584) {
                                if (e < 50557) {
                                    if (e === 50556) return n.CLUSTER_BREAK.LV
                                } else if (50557 <= e && e <= 50583) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50585) {
                                if (e === 50584) return n.CLUSTER_BREAK.LV
                            } else if (e < 50612) {
                                if (50585 <= e && e <= 50611) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50612) return n.CLUSTER_BREAK.LV
                        } else if (e < 50668) {
                            if (e < 50640) {
                                if (50613 <= e && e <= 50639) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50641) {
                                if (e === 50640) return n.CLUSTER_BREAK.LV
                            } else if (50641 <= e && e <= 50667) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50669) {
                            if (e === 50668) return n.CLUSTER_BREAK.LV
                        } else if (e < 50696) {
                            if (50669 <= e && e <= 50695) return n.CLUSTER_BREAK.LVT
                        } else if (e === 50696) return n.CLUSTER_BREAK.LV
                    } else if (e < 51004) {
                        if (e < 50837) {
                            if (e < 50780) {
                                if (e < 50725) {
                                    if (e < 50724) {
                                        if (50697 <= e && e <= 50723) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 50724) return n.CLUSTER_BREAK.LV
                                } else if (e < 50752) {
                                    if (50725 <= e && e <= 50751) return n.CLUSTER_BREAK.LVT
                                } else if (e < 50753) {
                                    if (e === 50752) return n.CLUSTER_BREAK.LV
                                } else if (50753 <= e && e <= 50779) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50808) {
                                if (e < 50781) {
                                    if (e === 50780) return n.CLUSTER_BREAK.LV
                                } else if (50781 <= e && e <= 50807) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50809) {
                                if (e === 50808) return n.CLUSTER_BREAK.LV
                            } else if (e < 50836) {
                                if (50809 <= e && e <= 50835) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50836) return n.CLUSTER_BREAK.LV
                        } else if (e < 50920) {
                            if (e < 50865) {
                                if (e < 50864) {
                                    if (50837 <= e && e <= 50863) return n.CLUSTER_BREAK.LVT
                                } else if (e === 50864) return n.CLUSTER_BREAK.LV
                            } else if (e < 50892) {
                                if (50865 <= e && e <= 50891) return n.CLUSTER_BREAK.LVT
                            } else if (e < 50893) {
                                if (e === 50892) return n.CLUSTER_BREAK.LV
                            } else if (50893 <= e && e <= 50919) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50949) {
                            if (e < 50921) {
                                if (e === 50920) return n.CLUSTER_BREAK.LV
                            } else if (e < 50948) {
                                if (50921 <= e && e <= 50947) return n.CLUSTER_BREAK.LVT
                            } else if (e === 50948) return n.CLUSTER_BREAK.LV
                        } else if (e < 50976) {
                            if (50949 <= e && e <= 50975) return n.CLUSTER_BREAK.LVT
                        } else if (e < 50977) {
                            if (e === 50976) return n.CLUSTER_BREAK.LV
                        } else if (50977 <= e && e <= 51003) return n.CLUSTER_BREAK.LVT
                    } else if (e < 51145) {
                        if (e < 51061) {
                            if (e < 51032) {
                                if (e < 51005) {
                                    if (e === 51004) return n.CLUSTER_BREAK.LV
                                } else if (51005 <= e && e <= 51031) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51033) {
                                if (e === 51032) return n.CLUSTER_BREAK.LV
                            } else if (e < 51060) {
                                if (51033 <= e && e <= 51059) return n.CLUSTER_BREAK.LVT
                            } else if (e === 51060) return n.CLUSTER_BREAK.LV
                        } else if (e < 51116) {
                            if (e < 51088) {
                                if (51061 <= e && e <= 51087) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51089) {
                                if (e === 51088) return n.CLUSTER_BREAK.LV
                            } else if (51089 <= e && e <= 51115) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51117) {
                            if (e === 51116) return n.CLUSTER_BREAK.LV
                        } else if (e < 51144) {
                            if (51117 <= e && e <= 51143) return n.CLUSTER_BREAK.LVT
                        } else if (e === 51144) return n.CLUSTER_BREAK.LV
                    } else if (e < 51228) {
                        if (e < 51173) {
                            if (e < 51172) {
                                if (51145 <= e && e <= 51171) return n.CLUSTER_BREAK.LVT
                            } else if (e === 51172) return n.CLUSTER_BREAK.LV
                        } else if (e < 51200) {
                            if (51173 <= e && e <= 51199) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51201) {
                            if (e === 51200) return n.CLUSTER_BREAK.LV
                        } else if (51201 <= e && e <= 51227) return n.CLUSTER_BREAK.LVT
                    } else if (e < 51257) {
                        if (e < 51229) {
                            if (e === 51228) return n.CLUSTER_BREAK.LV
                        } else if (e < 51256) {
                            if (51229 <= e && e <= 51255) return n.CLUSTER_BREAK.LVT
                        } else if (e === 51256) return n.CLUSTER_BREAK.LV
                    } else if (e < 51284) {
                        if (51257 <= e && e <= 51283) return n.CLUSTER_BREAK.LVT
                    } else if (e < 51285) {
                        if (e === 51284) return n.CLUSTER_BREAK.LV
                    } else if (51285 <= e && e <= 51311) return n.CLUSTER_BREAK.LVT
                } else if (e < 52516) {
                    if (e < 51901) {
                        if (e < 51593) {
                            if (e < 51452) {
                                if (e < 51369) {
                                    if (e < 51340) {
                                        if (e < 51313) {
                                            if (e === 51312) return n.CLUSTER_BREAK.LV
                                        } else if (51313 <= e && e <= 51339) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 51341) {
                                        if (e === 51340) return n.CLUSTER_BREAK.LV
                                    } else if (e < 51368) {
                                        if (51341 <= e && e <= 51367) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 51368) return n.CLUSTER_BREAK.LV
                                } else if (e < 51397) {
                                    if (e < 51396) {
                                        if (51369 <= e && e <= 51395) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 51396) return n.CLUSTER_BREAK.LV
                                } else if (e < 51424) {
                                    if (51397 <= e && e <= 51423) return n.CLUSTER_BREAK.LVT
                                } else if (e < 51425) {
                                    if (e === 51424) return n.CLUSTER_BREAK.LV
                                } else if (51425 <= e && e <= 51451) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51509) {
                                if (e < 51480) {
                                    if (e < 51453) {
                                        if (e === 51452) return n.CLUSTER_BREAK.LV
                                    } else if (51453 <= e && e <= 51479) return n.CLUSTER_BREAK.LVT
                                } else if (e < 51481) {
                                    if (e === 51480) return n.CLUSTER_BREAK.LV
                                } else if (e < 51508) {
                                    if (51481 <= e && e <= 51507) return n.CLUSTER_BREAK.LVT
                                } else if (e === 51508) return n.CLUSTER_BREAK.LV
                            } else if (e < 51564) {
                                if (e < 51536) {
                                    if (51509 <= e && e <= 51535) return n.CLUSTER_BREAK.LVT
                                } else if (e < 51537) {
                                    if (e === 51536) return n.CLUSTER_BREAK.LV
                                } else if (51537 <= e && e <= 51563) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51565) {
                                if (e === 51564) return n.CLUSTER_BREAK.LV
                            } else if (e < 51592) {
                                if (51565 <= e && e <= 51591) return n.CLUSTER_BREAK.LVT
                            } else if (e === 51592) return n.CLUSTER_BREAK.LV
                        } else if (e < 51760) {
                            if (e < 51676) {
                                if (e < 51621) {
                                    if (e < 51620) {
                                        if (51593 <= e && e <= 51619) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 51620) return n.CLUSTER_BREAK.LV
                                } else if (e < 51648) {
                                    if (51621 <= e && e <= 51647) return n.CLUSTER_BREAK.LVT
                                } else if (e < 51649) {
                                    if (e === 51648) return n.CLUSTER_BREAK.LV
                                } else if (51649 <= e && e <= 51675) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51705) {
                                if (e < 51677) {
                                    if (e === 51676) return n.CLUSTER_BREAK.LV
                                } else if (e < 51704) {
                                    if (51677 <= e && e <= 51703) return n.CLUSTER_BREAK.LVT
                                } else if (e === 51704) return n.CLUSTER_BREAK.LV
                            } else if (e < 51732) {
                                if (51705 <= e && e <= 51731) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51733) {
                                if (e === 51732) return n.CLUSTER_BREAK.LV
                            } else if (51733 <= e && e <= 51759) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51817) {
                            if (e < 51788) {
                                if (e < 51761) {
                                    if (e === 51760) return n.CLUSTER_BREAK.LV
                                } else if (51761 <= e && e <= 51787) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51789) {
                                if (e === 51788) return n.CLUSTER_BREAK.LV
                            } else if (e < 51816) {
                                if (51789 <= e && e <= 51815) return n.CLUSTER_BREAK.LVT
                            } else if (e === 51816) return n.CLUSTER_BREAK.LV
                        } else if (e < 51872) {
                            if (e < 51844) {
                                if (51817 <= e && e <= 51843) return n.CLUSTER_BREAK.LVT
                            } else if (e < 51845) {
                                if (e === 51844) return n.CLUSTER_BREAK.LV
                            } else if (51845 <= e && e <= 51871) return n.CLUSTER_BREAK.LVT
                        } else if (e < 51873) {
                            if (e === 51872) return n.CLUSTER_BREAK.LV
                        } else if (e < 51900) {
                            if (51873 <= e && e <= 51899) return n.CLUSTER_BREAK.LVT
                        } else if (e === 51900) return n.CLUSTER_BREAK.LV
                    } else if (e < 52208) {
                        if (e < 52041) {
                            if (e < 51984) {
                                if (e < 51929) {
                                    if (e < 51928) {
                                        if (51901 <= e && e <= 51927) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 51928) return n.CLUSTER_BREAK.LV
                                } else if (e < 51956) {
                                    if (51929 <= e && e <= 51955) return n.CLUSTER_BREAK.LVT
                                } else if (e < 51957) {
                                    if (e === 51956) return n.CLUSTER_BREAK.LV
                                } else if (51957 <= e && e <= 51983) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52012) {
                                if (e < 51985) {
                                    if (e === 51984) return n.CLUSTER_BREAK.LV
                                } else if (51985 <= e && e <= 52011) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52013) {
                                if (e === 52012) return n.CLUSTER_BREAK.LV
                            } else if (e < 52040) {
                                if (52013 <= e && e <= 52039) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52040) return n.CLUSTER_BREAK.LV
                        } else if (e < 52124) {
                            if (e < 52069) {
                                if (e < 52068) {
                                    if (52041 <= e && e <= 52067) return n.CLUSTER_BREAK.LVT
                                } else if (e === 52068) return n.CLUSTER_BREAK.LV
                            } else if (e < 52096) {
                                if (52069 <= e && e <= 52095) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52097) {
                                if (e === 52096) return n.CLUSTER_BREAK.LV
                            } else if (52097 <= e && e <= 52123) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52153) {
                            if (e < 52125) {
                                if (e === 52124) return n.CLUSTER_BREAK.LV
                            } else if (e < 52152) {
                                if (52125 <= e && e <= 52151) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52152) return n.CLUSTER_BREAK.LV
                        } else if (e < 52180) {
                            if (52153 <= e && e <= 52179) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52181) {
                            if (e === 52180) return n.CLUSTER_BREAK.LV
                        } else if (52181 <= e && e <= 52207) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52349) {
                        if (e < 52265) {
                            if (e < 52236) {
                                if (e < 52209) {
                                    if (e === 52208) return n.CLUSTER_BREAK.LV
                                } else if (52209 <= e && e <= 52235) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52237) {
                                if (e === 52236) return n.CLUSTER_BREAK.LV
                            } else if (e < 52264) {
                                if (52237 <= e && e <= 52263) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52264) return n.CLUSTER_BREAK.LV
                        } else if (e < 52320) {
                            if (e < 52292) {
                                if (52265 <= e && e <= 52291) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52293) {
                                if (e === 52292) return n.CLUSTER_BREAK.LV
                            } else if (52293 <= e && e <= 52319) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52321) {
                            if (e === 52320) return n.CLUSTER_BREAK.LV
                        } else if (e < 52348) {
                            if (52321 <= e && e <= 52347) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52348) return n.CLUSTER_BREAK.LV
                    } else if (e < 52432) {
                        if (e < 52377) {
                            if (e < 52376) {
                                if (52349 <= e && e <= 52375) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52376) return n.CLUSTER_BREAK.LV
                        } else if (e < 52404) {
                            if (52377 <= e && e <= 52403) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52405) {
                            if (e === 52404) return n.CLUSTER_BREAK.LV
                        } else if (52405 <= e && e <= 52431) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52461) {
                        if (e < 52433) {
                            if (e === 52432) return n.CLUSTER_BREAK.LV
                        } else if (e < 52460) {
                            if (52433 <= e && e <= 52459) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52460) return n.CLUSTER_BREAK.LV
                    } else if (e < 52488) {
                        if (52461 <= e && e <= 52487) return n.CLUSTER_BREAK.LVT
                    } else if (e < 52489) {
                        if (e === 52488) return n.CLUSTER_BREAK.LV
                    } else if (52489 <= e && e <= 52515) return n.CLUSTER_BREAK.LVT
                } else if (e < 53105) {
                    if (e < 52797) {
                        if (e < 52656) {
                            if (e < 52573) {
                                if (e < 52544) {
                                    if (e < 52517) {
                                        if (e === 52516) return n.CLUSTER_BREAK.LV
                                    } else if (52517 <= e && e <= 52543) return n.CLUSTER_BREAK.LVT
                                } else if (e < 52545) {
                                    if (e === 52544) return n.CLUSTER_BREAK.LV
                                } else if (e < 52572) {
                                    if (52545 <= e && e <= 52571) return n.CLUSTER_BREAK.LVT
                                } else if (e === 52572) return n.CLUSTER_BREAK.LV
                            } else if (e < 52601) {
                                if (e < 52600) {
                                    if (52573 <= e && e <= 52599) return n.CLUSTER_BREAK.LVT
                                } else if (e === 52600) return n.CLUSTER_BREAK.LV
                            } else if (e < 52628) {
                                if (52601 <= e && e <= 52627) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52629) {
                                if (e === 52628) return n.CLUSTER_BREAK.LV
                            } else if (52629 <= e && e <= 52655) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52713) {
                            if (e < 52684) {
                                if (e < 52657) {
                                    if (e === 52656) return n.CLUSTER_BREAK.LV
                                } else if (52657 <= e && e <= 52683) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52685) {
                                if (e === 52684) return n.CLUSTER_BREAK.LV
                            } else if (e < 52712) {
                                if (52685 <= e && e <= 52711) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52712) return n.CLUSTER_BREAK.LV
                        } else if (e < 52768) {
                            if (e < 52740) {
                                if (52713 <= e && e <= 52739) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52741) {
                                if (e === 52740) return n.CLUSTER_BREAK.LV
                            } else if (52741 <= e && e <= 52767) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52769) {
                            if (e === 52768) return n.CLUSTER_BREAK.LV
                        } else if (e < 52796) {
                            if (52769 <= e && e <= 52795) return n.CLUSTER_BREAK.LVT
                        } else if (e === 52796) return n.CLUSTER_BREAK.LV
                    } else if (e < 52964) {
                        if (e < 52880) {
                            if (e < 52825) {
                                if (e < 52824) {
                                    if (52797 <= e && e <= 52823) return n.CLUSTER_BREAK.LVT
                                } else if (e === 52824) return n.CLUSTER_BREAK.LV
                            } else if (e < 52852) {
                                if (52825 <= e && e <= 52851) return n.CLUSTER_BREAK.LVT
                            } else if (e < 52853) {
                                if (e === 52852) return n.CLUSTER_BREAK.LV
                            } else if (52853 <= e && e <= 52879) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52909) {
                            if (e < 52881) {
                                if (e === 52880) return n.CLUSTER_BREAK.LV
                            } else if (e < 52908) {
                                if (52881 <= e && e <= 52907) return n.CLUSTER_BREAK.LVT
                            } else if (e === 52908) return n.CLUSTER_BREAK.LV
                        } else if (e < 52936) {
                            if (52909 <= e && e <= 52935) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52937) {
                            if (e === 52936) return n.CLUSTER_BREAK.LV
                        } else if (52937 <= e && e <= 52963) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53021) {
                        if (e < 52992) {
                            if (e < 52965) {
                                if (e === 52964) return n.CLUSTER_BREAK.LV
                            } else if (52965 <= e && e <= 52991) return n.CLUSTER_BREAK.LVT
                        } else if (e < 52993) {
                            if (e === 52992) return n.CLUSTER_BREAK.LV
                        } else if (e < 53020) {
                            if (52993 <= e && e <= 53019) return n.CLUSTER_BREAK.LVT
                        } else if (e === 53020) return n.CLUSTER_BREAK.LV
                    } else if (e < 53076) {
                        if (e < 53048) {
                            if (53021 <= e && e <= 53047) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53049) {
                            if (e === 53048) return n.CLUSTER_BREAK.LV
                        } else if (53049 <= e && e <= 53075) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53077) {
                        if (e === 53076) return n.CLUSTER_BREAK.LV
                    } else if (e < 53104) {
                        if (53077 <= e && e <= 53103) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53104) return n.CLUSTER_BREAK.LV
                } else if (e < 53412) {
                    if (e < 53245) {
                        if (e < 53188) {
                            if (e < 53133) {
                                if (e < 53132) {
                                    if (53105 <= e && e <= 53131) return n.CLUSTER_BREAK.LVT
                                } else if (e === 53132) return n.CLUSTER_BREAK.LV
                            } else if (e < 53160) {
                                if (53133 <= e && e <= 53159) return n.CLUSTER_BREAK.LVT
                            } else if (e < 53161) {
                                if (e === 53160) return n.CLUSTER_BREAK.LV
                            } else if (53161 <= e && e <= 53187) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53216) {
                            if (e < 53189) {
                                if (e === 53188) return n.CLUSTER_BREAK.LV
                            } else if (53189 <= e && e <= 53215) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53217) {
                            if (e === 53216) return n.CLUSTER_BREAK.LV
                        } else if (e < 53244) {
                            if (53217 <= e && e <= 53243) return n.CLUSTER_BREAK.LVT
                        } else if (e === 53244) return n.CLUSTER_BREAK.LV
                    } else if (e < 53328) {
                        if (e < 53273) {
                            if (e < 53272) {
                                if (53245 <= e && e <= 53271) return n.CLUSTER_BREAK.LVT
                            } else if (e === 53272) return n.CLUSTER_BREAK.LV
                        } else if (e < 53300) {
                            if (53273 <= e && e <= 53299) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53301) {
                            if (e === 53300) return n.CLUSTER_BREAK.LV
                        } else if (53301 <= e && e <= 53327) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53357) {
                        if (e < 53329) {
                            if (e === 53328) return n.CLUSTER_BREAK.LV
                        } else if (e < 53356) {
                            if (53329 <= e && e <= 53355) return n.CLUSTER_BREAK.LVT
                        } else if (e === 53356) return n.CLUSTER_BREAK.LV
                    } else if (e < 53384) {
                        if (53357 <= e && e <= 53383) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53385) {
                        if (e === 53384) return n.CLUSTER_BREAK.LV
                    } else if (53385 <= e && e <= 53411) return n.CLUSTER_BREAK.LVT
                } else if (e < 53553) {
                    if (e < 53469) {
                        if (e < 53440) {
                            if (e < 53413) {
                                if (e === 53412) return n.CLUSTER_BREAK.LV
                            } else if (53413 <= e && e <= 53439) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53441) {
                            if (e === 53440) return n.CLUSTER_BREAK.LV
                        } else if (e < 53468) {
                            if (53441 <= e && e <= 53467) return n.CLUSTER_BREAK.LVT
                        } else if (e === 53468) return n.CLUSTER_BREAK.LV
                    } else if (e < 53524) {
                        if (e < 53496) {
                            if (53469 <= e && e <= 53495) return n.CLUSTER_BREAK.LVT
                        } else if (e < 53497) {
                            if (e === 53496) return n.CLUSTER_BREAK.LV
                        } else if (53497 <= e && e <= 53523) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53525) {
                        if (e === 53524) return n.CLUSTER_BREAK.LV
                    } else if (e < 53552) {
                        if (53525 <= e && e <= 53551) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53552) return n.CLUSTER_BREAK.LV
                } else if (e < 53636) {
                    if (e < 53581) {
                        if (e < 53580) {
                            if (53553 <= e && e <= 53579) return n.CLUSTER_BREAK.LVT
                        } else if (e === 53580) return n.CLUSTER_BREAK.LV
                    } else if (e < 53608) {
                        if (53581 <= e && e <= 53607) return n.CLUSTER_BREAK.LVT
                    } else if (e < 53609) {
                        if (e === 53608) return n.CLUSTER_BREAK.LV
                    } else if (53609 <= e && e <= 53635) return n.CLUSTER_BREAK.LVT
                } else if (e < 53665) {
                    if (e < 53637) {
                        if (e === 53636) return n.CLUSTER_BREAK.LV
                    } else if (e < 53664) {
                        if (53637 <= e && e <= 53663) return n.CLUSTER_BREAK.LVT
                    } else if (e === 53664) return n.CLUSTER_BREAK.LV
                } else if (e < 53692) {
                    if (53665 <= e && e <= 53691) return n.CLUSTER_BREAK.LVT
                } else if (e < 53693) {
                    if (e === 53692) return n.CLUSTER_BREAK.LV
                } else if (53693 <= e && e <= 53719) return n.CLUSTER_BREAK.LVT
            } else if (e < 70459) {
                if (e < 54897) {
                    if (e < 54308) {
                        if (e < 54001) {
                            if (e < 53860) {
                                if (e < 53777) {
                                    if (e < 53748) {
                                        if (e < 53721) {
                                            if (e === 53720) return n.CLUSTER_BREAK.LV
                                        } else if (53721 <= e && e <= 53747) return n.CLUSTER_BREAK.LVT
                                    } else if (e < 53749) {
                                        if (e === 53748) return n.CLUSTER_BREAK.LV
                                    } else if (e < 53776) {
                                        if (53749 <= e && e <= 53775) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 53776) return n.CLUSTER_BREAK.LV
                                } else if (e < 53805) {
                                    if (e < 53804) {
                                        if (53777 <= e && e <= 53803) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 53804) return n.CLUSTER_BREAK.LV
                                } else if (e < 53832) {
                                    if (53805 <= e && e <= 53831) return n.CLUSTER_BREAK.LVT
                                } else if (e < 53833) {
                                    if (e === 53832) return n.CLUSTER_BREAK.LV
                                } else if (53833 <= e && e <= 53859) return n.CLUSTER_BREAK.LVT
                            } else if (e < 53917) {
                                if (e < 53888) {
                                    if (e < 53861) {
                                        if (e === 53860) return n.CLUSTER_BREAK.LV
                                    } else if (53861 <= e && e <= 53887) return n.CLUSTER_BREAK.LVT
                                } else if (e < 53889) {
                                    if (e === 53888) return n.CLUSTER_BREAK.LV
                                } else if (e < 53916) {
                                    if (53889 <= e && e <= 53915) return n.CLUSTER_BREAK.LVT
                                } else if (e === 53916) return n.CLUSTER_BREAK.LV
                            } else if (e < 53972) {
                                if (e < 53944) {
                                    if (53917 <= e && e <= 53943) return n.CLUSTER_BREAK.LVT
                                } else if (e < 53945) {
                                    if (e === 53944) return n.CLUSTER_BREAK.LV
                                } else if (53945 <= e && e <= 53971) return n.CLUSTER_BREAK.LVT
                            } else if (e < 53973) {
                                if (e === 53972) return n.CLUSTER_BREAK.LV
                            } else if (e < 54e3) {
                                if (53973 <= e && e <= 53999) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54e3) return n.CLUSTER_BREAK.LV
                        } else if (e < 54141) {
                            if (e < 54084) {
                                if (e < 54029) {
                                    if (e < 54028) {
                                        if (54001 <= e && e <= 54027) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 54028) return n.CLUSTER_BREAK.LV
                                } else if (e < 54056) {
                                    if (54029 <= e && e <= 54055) return n.CLUSTER_BREAK.LVT
                                } else if (e < 54057) {
                                    if (e === 54056) return n.CLUSTER_BREAK.LV
                                } else if (54057 <= e && e <= 54083) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54112) {
                                if (e < 54085) {
                                    if (e === 54084) return n.CLUSTER_BREAK.LV
                                } else if (54085 <= e && e <= 54111) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54113) {
                                if (e === 54112) return n.CLUSTER_BREAK.LV
                            } else if (e < 54140) {
                                if (54113 <= e && e <= 54139) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54140) return n.CLUSTER_BREAK.LV
                        } else if (e < 54224) {
                            if (e < 54169) {
                                if (e < 54168) {
                                    if (54141 <= e && e <= 54167) return n.CLUSTER_BREAK.LVT
                                } else if (e === 54168) return n.CLUSTER_BREAK.LV
                            } else if (e < 54196) {
                                if (54169 <= e && e <= 54195) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54197) {
                                if (e === 54196) return n.CLUSTER_BREAK.LV
                            } else if (54197 <= e && e <= 54223) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54253) {
                            if (e < 54225) {
                                if (e === 54224) return n.CLUSTER_BREAK.LV
                            } else if (e < 54252) {
                                if (54225 <= e && e <= 54251) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54252) return n.CLUSTER_BREAK.LV
                        } else if (e < 54280) {
                            if (54253 <= e && e <= 54279) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54281) {
                            if (e === 54280) return n.CLUSTER_BREAK.LV
                        } else if (54281 <= e && e <= 54307) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54589) {
                        if (e < 54448) {
                            if (e < 54365) {
                                if (e < 54336) {
                                    if (e < 54309) {
                                        if (e === 54308) return n.CLUSTER_BREAK.LV
                                    } else if (54309 <= e && e <= 54335) return n.CLUSTER_BREAK.LVT
                                } else if (e < 54337) {
                                    if (e === 54336) return n.CLUSTER_BREAK.LV
                                } else if (e < 54364) {
                                    if (54337 <= e && e <= 54363) return n.CLUSTER_BREAK.LVT
                                } else if (e === 54364) return n.CLUSTER_BREAK.LV
                            } else if (e < 54393) {
                                if (e < 54392) {
                                    if (54365 <= e && e <= 54391) return n.CLUSTER_BREAK.LVT
                                } else if (e === 54392) return n.CLUSTER_BREAK.LV
                            } else if (e < 54420) {
                                if (54393 <= e && e <= 54419) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54421) {
                                if (e === 54420) return n.CLUSTER_BREAK.LV
                            } else if (54421 <= e && e <= 54447) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54505) {
                            if (e < 54476) {
                                if (e < 54449) {
                                    if (e === 54448) return n.CLUSTER_BREAK.LV
                                } else if (54449 <= e && e <= 54475) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54477) {
                                if (e === 54476) return n.CLUSTER_BREAK.LV
                            } else if (e < 54504) {
                                if (54477 <= e && e <= 54503) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54504) return n.CLUSTER_BREAK.LV
                        } else if (e < 54560) {
                            if (e < 54532) {
                                if (54505 <= e && e <= 54531) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54533) {
                                if (e === 54532) return n.CLUSTER_BREAK.LV
                            } else if (54533 <= e && e <= 54559) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54561) {
                            if (e === 54560) return n.CLUSTER_BREAK.LV
                        } else if (e < 54588) {
                            if (54561 <= e && e <= 54587) return n.CLUSTER_BREAK.LVT
                        } else if (e === 54588) return n.CLUSTER_BREAK.LV
                    } else if (e < 54756) {
                        if (e < 54672) {
                            if (e < 54617) {
                                if (e < 54616) {
                                    if (54589 <= e && e <= 54615) return n.CLUSTER_BREAK.LVT
                                } else if (e === 54616) return n.CLUSTER_BREAK.LV
                            } else if (e < 54644) {
                                if (54617 <= e && e <= 54643) return n.CLUSTER_BREAK.LVT
                            } else if (e < 54645) {
                                if (e === 54644) return n.CLUSTER_BREAK.LV
                            } else if (54645 <= e && e <= 54671) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54701) {
                            if (e < 54673) {
                                if (e === 54672) return n.CLUSTER_BREAK.LV
                            } else if (e < 54700) {
                                if (54673 <= e && e <= 54699) return n.CLUSTER_BREAK.LVT
                            } else if (e === 54700) return n.CLUSTER_BREAK.LV
                        } else if (e < 54728) {
                            if (54701 <= e && e <= 54727) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54729) {
                            if (e === 54728) return n.CLUSTER_BREAK.LV
                        } else if (54729 <= e && e <= 54755) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54813) {
                        if (e < 54784) {
                            if (e < 54757) {
                                if (e === 54756) return n.CLUSTER_BREAK.LV
                            } else if (54757 <= e && e <= 54783) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54785) {
                            if (e === 54784) return n.CLUSTER_BREAK.LV
                        } else if (e < 54812) {
                            if (54785 <= e && e <= 54811) return n.CLUSTER_BREAK.LVT
                        } else if (e === 54812) return n.CLUSTER_BREAK.LV
                    } else if (e < 54868) {
                        if (e < 54840) {
                            if (54813 <= e && e <= 54839) return n.CLUSTER_BREAK.LVT
                        } else if (e < 54841) {
                            if (e === 54840) return n.CLUSTER_BREAK.LV
                        } else if (54841 <= e && e <= 54867) return n.CLUSTER_BREAK.LVT
                    } else if (e < 54869) {
                        if (e === 54868) return n.CLUSTER_BREAK.LV
                    } else if (e < 54896) {
                        if (54869 <= e && e <= 54895) return n.CLUSTER_BREAK.LVT
                    } else if (e === 54896) return n.CLUSTER_BREAK.LV
                } else if (e < 69632) {
                    if (e < 55216) {
                        if (e < 55037) {
                            if (e < 54980) {
                                if (e < 54925) {
                                    if (e < 54924) {
                                        if (54897 <= e && e <= 54923) return n.CLUSTER_BREAK.LVT
                                    } else if (e === 54924) return n.CLUSTER_BREAK.LV
                                } else if (e < 54952) {
                                    if (54925 <= e && e <= 54951) return n.CLUSTER_BREAK.LVT
                                } else if (e < 54953) {
                                    if (e === 54952) return n.CLUSTER_BREAK.LV
                                } else if (54953 <= e && e <= 54979) return n.CLUSTER_BREAK.LVT
                            } else if (e < 55008) {
                                if (e < 54981) {
                                    if (e === 54980) return n.CLUSTER_BREAK.LV
                                } else if (54981 <= e && e <= 55007) return n.CLUSTER_BREAK.LVT
                            } else if (e < 55009) {
                                if (e === 55008) return n.CLUSTER_BREAK.LV
                            } else if (e < 55036) {
                                if (55009 <= e && e <= 55035) return n.CLUSTER_BREAK.LVT
                            } else if (e === 55036) return n.CLUSTER_BREAK.LV
                        } else if (e < 55120) {
                            if (e < 55065) {
                                if (e < 55064) {
                                    if (55037 <= e && e <= 55063) return n.CLUSTER_BREAK.LVT
                                } else if (e === 55064) return n.CLUSTER_BREAK.LV
                            } else if (e < 55092) {
                                if (55065 <= e && e <= 55091) return n.CLUSTER_BREAK.LVT
                            } else if (e < 55093) {
                                if (e === 55092) return n.CLUSTER_BREAK.LV
                            } else if (55093 <= e && e <= 55119) return n.CLUSTER_BREAK.LVT
                        } else if (e < 55149) {
                            if (e < 55121) {
                                if (e === 55120) return n.CLUSTER_BREAK.LV
                            } else if (e < 55148) {
                                if (55121 <= e && e <= 55147) return n.CLUSTER_BREAK.LVT
                            } else if (e === 55148) return n.CLUSTER_BREAK.LV
                        } else if (e < 55176) {
                            if (55149 <= e && e <= 55175) return n.CLUSTER_BREAK.LVT
                        } else if (e < 55177) {
                            if (e === 55176) return n.CLUSTER_BREAK.LV
                        } else if (55177 <= e && e <= 55203) return n.CLUSTER_BREAK.LVT
                    } else if (e < 68097) {
                        if (e < 65279) {
                            if (e < 64286) {
                                if (e < 55243) {
                                    if (55216 <= e && e <= 55238) return n.CLUSTER_BREAK.V
                                } else if (55243 <= e && e <= 55291) return n.CLUSTER_BREAK.T
                            } else if (e < 65024) {
                                if (e === 64286) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 65056) {
                                if (65024 <= e && e <= 65039) return n.CLUSTER_BREAK.EXTEND
                            } else if (65056 <= e && e <= 65071) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 66045) {
                            if (e < 65438) {
                                if (e === 65279) return n.CLUSTER_BREAK.CONTROL
                            } else if (e < 65520) {
                                if (65438 <= e && e <= 65439) return n.CLUSTER_BREAK.EXTEND
                            } else if (65520 <= e && e <= 65531) return n.CLUSTER_BREAK.CONTROL
                        } else if (e < 66272) {
                            if (e === 66045) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 66422) {
                            if (e === 66272) return n.CLUSTER_BREAK.EXTEND
                        } else if (66422 <= e && e <= 66426) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 68325) {
                        if (e < 68108) {
                            if (e < 68101) {
                                if (68097 <= e && e <= 68099) return n.CLUSTER_BREAK.EXTEND
                            } else if (68101 <= e && e <= 68102) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 68152) {
                            if (68108 <= e && e <= 68111) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 68159) {
                            if (68152 <= e && e <= 68154) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 68159) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69373) {
                        if (e < 68900) {
                            if (68325 <= e && e <= 68326) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 69291) {
                            if (68900 <= e && e <= 68903) return n.CLUSTER_BREAK.EXTEND
                        } else if (69291 <= e && e <= 69292) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69446) {
                        if (69373 <= e && e <= 69375) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69506) {
                        if (69446 <= e && e <= 69456) return n.CLUSTER_BREAK.EXTEND
                    } else if (69506 <= e && e <= 69509) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70016) {
                    if (e < 69815) {
                        if (e < 69747) {
                            if (e < 69634) {
                                if (e === 69632) return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 69633) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 69688) {
                                if (e === 69634) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 69744) {
                                if (69688 <= e && e <= 69702) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 69744) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 69762) {
                            if (e < 69759) {
                                if (69747 <= e && e <= 69748) return n.CLUSTER_BREAK.EXTEND
                            } else if (69759 <= e && e <= 69761) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 69808) {
                            if (e === 69762) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 69811) {
                            if (69808 <= e && e <= 69810) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (69811 <= e && e <= 69814) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 69888)
                        if (e < 69821) {
                            if (e < 69817) {
                                if (69815 <= e && e <= 69816) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (69817 <= e && e <= 69818) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 69826) {
                        if (e === 69821) return n.CLUSTER_BREAK.PREPEND
                    } else {
                        if (e === 69826) return n.CLUSTER_BREAK.EXTEND;
                        if (e === 69837) return n.CLUSTER_BREAK.PREPEND
                    } else if (e < 69933) {
                        if (e < 69927) {
                            if (69888 <= e && e <= 69890) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 69932) {
                            if (69927 <= e && e <= 69931) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 69932) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 69957) {
                        if (69933 <= e && e <= 69940) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70003) {
                        if (69957 <= e && e <= 69958) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e === 70003) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70194) {
                    if (e < 70082) {
                        if (e < 70067) {
                            if (e < 70018) {
                                if (70016 <= e && e <= 70017) return n.CLUSTER_BREAK.EXTEND
                            } else if (e === 70018) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70070) {
                            if (70067 <= e && e <= 70069) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 70079) {
                            if (70070 <= e && e <= 70078) return n.CLUSTER_BREAK.EXTEND
                        } else if (70079 <= e && e <= 70080) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70095) {
                        if (e < 70089) {
                            if (70082 <= e && e <= 70083) return n.CLUSTER_BREAK.PREPEND
                        } else if (e < 70094) {
                            if (70089 <= e && e <= 70092) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 70094) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70188) {
                        if (e === 70095) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70191) {
                        if (70188 <= e && e <= 70190) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (70191 <= e && e <= 70193) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70209) {
                    if (e < 70197) {
                        if (e < 70196) {
                            if (70194 <= e && e <= 70195) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e === 70196) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70198) {
                        if (e === 70197) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 70206) {
                        if (70198 <= e && e <= 70199) return n.CLUSTER_BREAK.EXTEND
                    } else if (e === 70206) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70371) {
                    if (e < 70367) {
                        if (e === 70209) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 70368) {
                        if (e === 70367) return n.CLUSTER_BREAK.EXTEND
                    } else if (70368 <= e && e <= 70370) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 70400) {
                    if (70371 <= e && e <= 70378) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 70402) {
                    if (70400 <= e && e <= 70401) return n.CLUSTER_BREAK.EXTEND
                } else if (70402 <= e && e <= 70403) return n.CLUSTER_BREAK.SPACINGMARK
            } else if (e < 72343) {
                if (e < 71339) {
                    if (e < 70841) {
                        if (e < 70512) {
                            if (e < 70471) {
                                if (e < 70463) {
                                    if (e < 70462) {
                                        if (70459 <= e && e <= 70460) return n.CLUSTER_BREAK.EXTEND
                                    } else if (e === 70462) return n.CLUSTER_BREAK.EXTEND
                                } else if (e < 70464) {
                                    if (e === 70463) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (e < 70465) {
                                    if (e === 70464) return n.CLUSTER_BREAK.EXTEND
                                } else if (70465 <= e && e <= 70468) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 70487) {
                                if (e < 70475) {
                                    if (70471 <= e && e <= 70472) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (70475 <= e && e <= 70477) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 70498) {
                                if (e === 70487) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 70502) {
                                if (70498 <= e && e <= 70499) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (70502 <= e && e <= 70508) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70725) {
                            if (e < 70712) {
                                if (e < 70709) {
                                    if (70512 <= e && e <= 70516) return n.CLUSTER_BREAK.EXTEND
                                } else if (70709 <= e && e <= 70711) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 70720) {
                                if (70712 <= e && e <= 70719) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 70722) {
                                if (70720 <= e && e <= 70721) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (70722 <= e && e <= 70724) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70832) {
                            if (e < 70726) {
                                if (e === 70725) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e === 70726 || e === 70750) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70833) {
                            if (e === 70832) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 70835) {
                            if (70833 <= e && e <= 70834) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (70835 <= e && e <= 70840) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71096) {
                        if (e < 70847)
                            if (e < 70843) {
                                if (e === 70841) return n.CLUSTER_BREAK.SPACINGMARK;
                                if (e === 70842) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 70845) {
                            if (70843 <= e && e <= 70844) return n.CLUSTER_BREAK.SPACINGMARK
                        } else {
                            if (e === 70845) return n.CLUSTER_BREAK.EXTEND;
                            if (e === 70846) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 71087) {
                            if (e < 70849) {
                                if (70847 <= e && e <= 70848) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 70850) {
                                if (e === 70849) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (70850 <= e && e <= 70851) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71088) {
                            if (e === 71087) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71090) {
                            if (71088 <= e && e <= 71089) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (71090 <= e && e <= 71093) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71216) {
                        if (e < 71102) {
                            if (e < 71100) {
                                if (71096 <= e && e <= 71099) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (71100 <= e && e <= 71101) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71103) {
                            if (e === 71102) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 71132) {
                            if (71103 <= e && e <= 71104) return n.CLUSTER_BREAK.EXTEND
                        } else if (71132 <= e && e <= 71133) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71229) {
                        if (e < 71219) {
                            if (71216 <= e && e <= 71218) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 71227) {
                            if (71219 <= e && e <= 71226) return n.CLUSTER_BREAK.EXTEND
                        } else if (71227 <= e && e <= 71228) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71230) {
                        if (e === 71229) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71231) {
                        if (e === 71230) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (71231 <= e && e <= 71232) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71999)
                    if (e < 71463) {
                        if (e < 71350) {
                            if (e < 71341) {
                                if (e === 71339) return n.CLUSTER_BREAK.EXTEND;
                                if (e === 71340) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 71342) {
                                if (e === 71341) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 71344) {
                                if (71342 <= e && e <= 71343) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (71344 <= e && e <= 71349) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71453) {
                            if (e === 71350) return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 71351) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71458) {
                            if (71453 <= e && e <= 71455) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 71462) {
                            if (71458 <= e && e <= 71461) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 71462) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71984) {
                    if (e < 71727) {
                        if (e < 71724) {
                            if (71463 <= e && e <= 71467) return n.CLUSTER_BREAK.EXTEND
                        } else if (71724 <= e && e <= 71726) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 71736) {
                        if (71727 <= e && e <= 71735) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71737) {
                        if (e === 71736) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (71737 <= e && e <= 71738) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 71995) {
                    if (e < 71985) {
                        if (e === 71984) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 71991) {
                        if (71985 <= e && e <= 71989) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (71991 <= e && e <= 71992) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 71997) {
                    if (71995 <= e && e <= 71996) return n.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 71997) return n.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 71998) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72193)
                    if (e < 72145)
                        if (e < 72001) {
                            if (e === 71999) return n.CLUSTER_BREAK.PREPEND;
                            if (e === 72e3) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 72002) {
                    if (e === 72001) return n.CLUSTER_BREAK.PREPEND
                } else {
                    if (e === 72002) return n.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 72003) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72156) {
                    if (e < 72148) {
                        if (72145 <= e && e <= 72147) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 72154) {
                        if (72148 <= e && e <= 72151) return n.CLUSTER_BREAK.EXTEND
                    } else if (72154 <= e && e <= 72155) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72160) {
                    if (72156 <= e && e <= 72159) return n.CLUSTER_BREAK.SPACINGMARK
                } else {
                    if (e === 72160) return n.CLUSTER_BREAK.EXTEND;
                    if (e === 72164) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 72263) {
                    if (e < 72249) {
                        if (e < 72243) {
                            if (72193 <= e && e <= 72202) return n.CLUSTER_BREAK.EXTEND
                        } else if (72243 <= e && e <= 72248) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72250) {
                        if (e === 72249) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 72251) {
                        if (e === 72250) return n.CLUSTER_BREAK.PREPEND
                    } else if (72251 <= e && e <= 72254) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72281) {
                    if (e < 72273) {
                        if (e === 72263) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 72279) {
                        if (72273 <= e && e <= 72278) return n.CLUSTER_BREAK.EXTEND
                    } else if (72279 <= e && e <= 72280) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 72324) {
                    if (72281 <= e && e <= 72283) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 72330) {
                    if (72324 <= e && e <= 72329) return n.CLUSTER_BREAK.PREPEND
                } else if (72330 <= e && e <= 72342) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 94033) {
                if (e < 73104) {
                    if (e < 72881) {
                        if (e < 72766) {
                            if (e < 72751) {
                                if (e < 72344) {
                                    if (e === 72343) return n.CLUSTER_BREAK.SPACINGMARK
                                } else if (72344 <= e && e <= 72345) return n.CLUSTER_BREAK.EXTEND
                            } else if (e < 72752) {
                                if (e === 72751) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (e < 72760) {
                                if (72752 <= e && e <= 72758) return n.CLUSTER_BREAK.EXTEND
                            } else if (72760 <= e && e <= 72765) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 72850) {
                            if (e === 72766) return n.CLUSTER_BREAK.SPACINGMARK;
                            if (e === 72767) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 72873) {
                            if (72850 <= e && e <= 72871) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 72874) {
                            if (e === 72873) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (72874 <= e && e <= 72880) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73018) {
                        if (e < 72884) {
                            if (e < 72882) {
                                if (e === 72881) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (72882 <= e && e <= 72883) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 72885) {
                            if (e === 72884) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 73009) {
                            if (72885 <= e && e <= 72886) return n.CLUSTER_BREAK.EXTEND
                        } else if (73009 <= e && e <= 73014) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73030) {
                        if (e < 73020) {
                            if (e === 73018) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 73023) {
                            if (73020 <= e && e <= 73021) return n.CLUSTER_BREAK.EXTEND
                        } else if (73023 <= e && e <= 73029) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73031) {
                        if (e === 73030) return n.CLUSTER_BREAK.PREPEND
                    } else if (e < 73098) {
                        if (e === 73031) return n.CLUSTER_BREAK.EXTEND
                    } else if (73098 <= e && e <= 73102) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 73526) {
                    if (e < 73459)
                        if (e < 73109) {
                            if (e < 73107) {
                                if (73104 <= e && e <= 73105) return n.CLUSTER_BREAK.EXTEND
                            } else if (73107 <= e && e <= 73108) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (e < 73110) {
                        if (e === 73109) return n.CLUSTER_BREAK.EXTEND
                    } else {
                        if (e === 73110) return n.CLUSTER_BREAK.SPACINGMARK;
                        if (e === 73111) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73474) {
                        if (e < 73461) {
                            if (73459 <= e && e <= 73460) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 73472) {
                            if (73461 <= e && e <= 73462) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (73472 <= e && e <= 73473) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 73475) {
                        if (e === 73474) return n.CLUSTER_BREAK.PREPEND
                    } else if (e < 73524) {
                        if (e === 73475) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (73524 <= e && e <= 73525) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 78896)
                    if (e < 73536) {
                        if (e < 73534) {
                            if (73526 <= e && e <= 73530) return n.CLUSTER_BREAK.EXTEND
                        } else if (73534 <= e && e <= 73535) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 73537) {
                    if (e === 73536) return n.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 73537) return n.CLUSTER_BREAK.SPACINGMARK;
                    if (e === 73538) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 92912) {
                    if (e < 78912) {
                        if (78896 <= e && e <= 78911) return n.CLUSTER_BREAK.CONTROL
                    } else if (e < 78919) {
                        if (e === 78912) return n.CLUSTER_BREAK.EXTEND
                    } else if (78919 <= e && e <= 78933) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 92976) {
                    if (92912 <= e && e <= 92916) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 94031) {
                    if (92976 <= e && e <= 92982) return n.CLUSTER_BREAK.EXTEND
                } else if (e === 94031) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 121476) {
                if (e < 119143)
                    if (e < 113824) {
                        if (e < 94180) {
                            if (e < 94095) {
                                if (94033 <= e && e <= 94087) return n.CLUSTER_BREAK.SPACINGMARK
                            } else if (94095 <= e && e <= 94098) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 94192) {
                            if (e === 94180) return n.CLUSTER_BREAK.EXTEND
                        } else if (e < 113821) {
                            if (94192 <= e && e <= 94193) return n.CLUSTER_BREAK.SPACINGMARK
                        } else if (113821 <= e && e <= 113822) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 118576) {
                    if (e < 118528) {
                        if (113824 <= e && e <= 113827) return n.CLUSTER_BREAK.CONTROL
                    } else if (118528 <= e && e <= 118573) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 119141) {
                    if (118576 <= e && e <= 118598) return n.CLUSTER_BREAK.EXTEND
                } else {
                    if (e === 119141) return n.CLUSTER_BREAK.EXTEND;
                    if (e === 119142) return n.CLUSTER_BREAK.SPACINGMARK
                } else if (e < 119173) {
                    if (e < 119150) {
                        if (e < 119149) {
                            if (119143 <= e && e <= 119145) return n.CLUSTER_BREAK.EXTEND
                        } else if (e === 119149) return n.CLUSTER_BREAK.SPACINGMARK
                    } else if (e < 119155) {
                        if (119150 <= e && e <= 119154) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 119163) {
                        if (119155 <= e && e <= 119162) return n.CLUSTER_BREAK.CONTROL
                    } else if (119163 <= e && e <= 119170) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 121344) {
                    if (e < 119210) {
                        if (119173 <= e && e <= 119179) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 119362) {
                        if (119210 <= e && e <= 119213) return n.CLUSTER_BREAK.EXTEND
                    } else if (119362 <= e && e <= 119364) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 121403) {
                    if (121344 <= e && e <= 121398) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 121461) {
                    if (121403 <= e && e <= 121452) return n.CLUSTER_BREAK.EXTEND
                } else if (e === 121461) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 123628) {
                if (e < 122907) {
                    if (e < 121505) {
                        if (e < 121499) {
                            if (e === 121476) return n.CLUSTER_BREAK.EXTEND
                        } else if (121499 <= e && e <= 121503) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 122880) {
                        if (121505 <= e && e <= 121519) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 122888) {
                        if (122880 <= e && e <= 122886) return n.CLUSTER_BREAK.EXTEND
                    } else if (122888 <= e && e <= 122904) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 123023) {
                    if (e < 122915) {
                        if (122907 <= e && e <= 122913) return n.CLUSTER_BREAK.EXTEND
                    } else if (e < 122918) {
                        if (122915 <= e && e <= 122916) return n.CLUSTER_BREAK.EXTEND
                    } else if (122918 <= e && e <= 122922) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 123184) {
                    if (e === 123023) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 123566) {
                    if (123184 <= e && e <= 123190) return n.CLUSTER_BREAK.EXTEND
                } else if (e === 123566) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 127995) {
                if (e < 125136) {
                    if (e < 124140) {
                        if (123628 <= e && e <= 123631) return n.CLUSTER_BREAK.EXTEND
                    } else if (124140 <= e && e <= 124143) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 125252) {
                    if (125136 <= e && e <= 125142) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 127462) {
                    if (125252 <= e && e <= 125258) return n.CLUSTER_BREAK.EXTEND
                } else if (127462 <= e && e <= 127487) return n.CLUSTER_BREAK.REGIONAL_INDICATOR
            } else if (e < 917632) {
                if (e < 917504) {
                    if (127995 <= e && e <= 127999) return n.CLUSTER_BREAK.EXTEND
                } else if (e < 917536) {
                    if (917504 <= e && e <= 917535) return n.CLUSTER_BREAK.CONTROL
                } else if (917536 <= e && e <= 917631) return n.CLUSTER_BREAK.EXTEND
            } else if (e < 917760) {
                if (917632 <= e && e <= 917759) return n.CLUSTER_BREAK.CONTROL
            } else if (e < 918e3) {
                if (917760 <= e && e <= 917999) return n.CLUSTER_BREAK.EXTEND
            } else if (918e3 <= e && e <= 921599) return n.CLUSTER_BREAK.CONTROL;
            return n.CLUSTER_BREAK.OTHER
        }
        static getEmojiProperty(e) {
            if (e < 10160) {
                if (e < 9728) {
                    if (e < 9e3) {
                        if (e < 8482) {
                            if (e < 8252) {
                                if (e === 169 || e === 174) return n.EXTENDED_PICTOGRAPHIC
                            } else if (e === 8252 || e === 8265) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 8596) {
                            if (e === 8482 || e === 8505) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 8617) {
                            if (8596 <= e && e <= 8601) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 8986) {
                            if (8617 <= e && e <= 8618) return n.EXTENDED_PICTOGRAPHIC
                        } else if (8986 <= e && e <= 8987) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9410) {
                        if (e < 9167) {
                            if (e === 9e3 || e === 9096) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 9193) {
                            if (e === 9167) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 9208) {
                            if (9193 <= e && e <= 9203) return n.EXTENDED_PICTOGRAPHIC
                        } else if (9208 <= e && e <= 9210) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9654) {
                        if (e < 9642) {
                            if (e === 9410) return n.EXTENDED_PICTOGRAPHIC
                        } else if (9642 <= e && e <= 9643) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9664) {
                        if (e === 9654) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 9723) {
                        if (e === 9664) return n.EXTENDED_PICTOGRAPHIC
                    } else if (9723 <= e && e <= 9726) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10035) {
                    if (e < 10004) {
                        if (e < 9748) {
                            if (e < 9735) {
                                if (9728 <= e && e <= 9733) return n.EXTENDED_PICTOGRAPHIC
                            } else if (9735 <= e && e <= 9746) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 9872) {
                            if (9748 <= e && e <= 9861) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 9992) {
                            if (9872 <= e && e <= 9989) return n.EXTENDED_PICTOGRAPHIC
                        } else if (9992 <= e && e <= 10002) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 10013) {
                        if (e === 10004 || e === 10006) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 10017) {
                        if (e === 10013) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 10017 || e === 10024) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10067) {
                    if (e < 10055) {
                        if (e < 10052) {
                            if (10035 <= e && e <= 10036) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e === 10052) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 10060) {
                        if (e === 10055) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 10060 || e === 10062) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10083) {
                    if (e < 10071) {
                        if (10067 <= e && e <= 10069) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 10071) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10133) {
                    if (10083 <= e && e <= 10087) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 10145) {
                    if (10133 <= e && e <= 10135) return n.EXTENDED_PICTOGRAPHIC
                } else if (e === 10145) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 127489) {
                if (e < 12951) {
                    if (e < 11035) {
                        if (e < 10548) {
                            if (e === 10160 || e === 10175) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e < 11013) {
                            if (10548 <= e && e <= 10549) return n.EXTENDED_PICTOGRAPHIC
                        } else if (11013 <= e && e <= 11015) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 11093) {
                        if (e < 11088) {
                            if (11035 <= e && e <= 11036) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e === 11088) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 12336) {
                        if (e === 11093) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 12336 || e === 12349) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127340) {
                    if (e < 126976) {
                        if (e === 12951 || e === 12953) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 127245) {
                        if (126976 <= e && e <= 127231) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 127279) {
                        if (127245 <= e && e <= 127247) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e === 127279) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127374) {
                    if (e < 127358) {
                        if (127340 <= e && e <= 127345) return n.EXTENDED_PICTOGRAPHIC
                    } else if (127358 <= e && e <= 127359) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127377) {
                    if (e === 127374) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 127405) {
                    if (127377 <= e && e <= 127386) return n.EXTENDED_PICTOGRAPHIC
                } else if (127405 <= e && e <= 127461) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 128981) {
                if (e < 127561) {
                    if (e < 127535) {
                        if (e < 127514) {
                            if (127489 <= e && e <= 127503) return n.EXTENDED_PICTOGRAPHIC
                        } else if (e === 127514) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 127538) {
                        if (e === 127535) return n.EXTENDED_PICTOGRAPHIC
                    } else if (e < 127548) {
                        if (127538 <= e && e <= 127546) return n.EXTENDED_PICTOGRAPHIC
                    } else if (127548 <= e && e <= 127551) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 128326) {
                    if (e < 128e3) {
                        if (127561 <= e && e <= 127994) return n.EXTENDED_PICTOGRAPHIC
                    } else if (128e3 <= e && e <= 128317) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 128640) {
                    if (128326 <= e && e <= 128591) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 128884) {
                    if (128640 <= e && e <= 128767) return n.EXTENDED_PICTOGRAPHIC
                } else if (128884 <= e && e <= 128895) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 129198) {
                if (e < 129096) {
                    if (e < 129036) {
                        if (128981 <= e && e <= 129023) return n.EXTENDED_PICTOGRAPHIC
                    } else if (129036 <= e && e <= 129039) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 129114) {
                    if (129096 <= e && e <= 129103) return n.EXTENDED_PICTOGRAPHIC
                } else if (e < 129160) {
                    if (129114 <= e && e <= 129119) return n.EXTENDED_PICTOGRAPHIC
                } else if (129160 <= e && e <= 129167) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 129340) {
                if (e < 129292) {
                    if (129198 <= e && e <= 129279) return n.EXTENDED_PICTOGRAPHIC
                } else if (129292 <= e && e <= 129338) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 129351) {
                if (129340 <= e && e <= 129349) return n.EXTENDED_PICTOGRAPHIC
            } else if (e < 130048) {
                if (129351 <= e && e <= 129791) return n.EXTENDED_PICTOGRAPHIC
            } else if (130048 <= e && e <= 131069) return n.EXTENDED_PICTOGRAPHIC;
            return n.CLUSTER_BREAK.OTHER
        }
    }
    Zn.default = De;
    var Qx = se && se.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(Na, "__esModule", {
        value: !0
    });
    const Zx = Qx(Zn);
    var e_ = Na.default = Zx.default;
    new e_;
    const Da = Object.prototype.toString;

    function Ia(t) {
        switch (Da.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return nt(t, Error)
        }
    }

    function It(t, e) {
        return Da.call(t) === `[object ${e}]`
    }

    function ni(t) {
        return It(t, "ErrorEvent")
    }

    function ns(t) {
        return It(t, "DOMError")
    }

    function t_(t) {
        return It(t, "DOMException")
    }

    function ke(t) {
        return It(t, "String")
    }

    function ii(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function yt(t) {
        return It(t, "Object")
    }

    function Pr(t) {
        return typeof Event < "u" && nt(t, Event)
    }

    function r_(t) {
        return typeof Element < "u" && nt(t, Element)
    }

    function n_(t) {
        return It(t, "RegExp")
    }

    function si(t) {
        return !!(t && t.then && typeof t.then == "function")
    }

    function i_(t) {
        return yt(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function s_(t) {
        return typeof t == "number" && t !== t
    }

    function nt(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function Oa(t) {
        return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
    }

    function Tt(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function is(t, e) {
        if (!Array.isArray(t)) return "";
        const r = [];
        for (let i = 0; i < t.length; i++) {
            const s = t[i];
            try {
                Oa(s) ? r.push("[VueViewModel]") : r.push(String(s))
            } catch {
                r.push("[value cannot be serialized]")
            }
        }
        return r.join(e)
    }

    function a_(t, e, r = !1) {
        return ke(t) ? n_(e) ? e.test(t) : ke(e) ? r ? t === e : t.includes(e) : !1 : !1
    }

    function Vr(t, e = [], r = !1) {
        return e.some(i => a_(t, i, r))
    }

    function f_(t, e, r = 250, i, s, a, f) {
        if (!a.exception || !a.exception.values || !f || !nt(f.originalException, Error)) return;
        const u = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
        u && (a.exception.values = u_(xn(t, e, s, f.originalException, i, a.exception.values, u, 0), r))
    }

    function xn(t, e, r, i, s, a, f, u) {
        if (a.length >= r + 1) return a;
        let l = [...a];
        if (nt(i[s], Error)) {
            ss(f, u);
            const E = t(e, i[s]),
                x = l.length;
            as(E, s, x, u), l = xn(t, e, r, i[s], s, [E, ...l], E, x)
        }
        return Array.isArray(i.errors) && i.errors.forEach((E, x) => {
            if (nt(E, Error)) {
                ss(f, u);
                const h = t(e, E),
                    b = l.length;
                as(h, `errors[${x}]`, b, u), l = xn(t, e, r, E, s, [h, ...l], h, b)
            }
        }), l
    }

    function ss(t, e) {
        t.mechanism = t.mechanism || {
            type: "generic",
            handled: !0
        }, t.mechanism = {
            ...t.mechanism,
            is_exception_group: !0,
            exception_id: e
        }
    }

    function as(t, e, r, i) {
        t.mechanism = t.mechanism || {
            type: "generic",
            handled: !0
        }, t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: r,
            parent_id: i
        }
    }

    function u_(t, e) {
        return t.map(r => (r.value && (r.value = Tt(r.value, e)), r))
    }

    function ir(t) {
        return t && t.Math == Math ? t : void 0
    }
    const H = typeof globalThis == "object" && ir(globalThis) || typeof window == "object" && ir(window) || typeof self == "object" && ir(self) || typeof global == "object" && ir(global) || function() {
        return this
    }() || {};

    function kr() {
        return H
    }

    function Pa(t, e, r) {
        const i = r || H,
            s = i.__SENTRY__ = i.__SENTRY__ || {};
        return s[t] || (s[t] = e())
    }
    const ai = kr(),
        l_ = 80;

    function Va(t, e = {}) {
        if (!t) return "<unknown>";
        try {
            let r = t;
            const i = 5,
                s = [];
            let a = 0,
                f = 0;
            const u = " > ",
                l = u.length;
            let E;
            const x = Array.isArray(e) ? e : e.keyAttrs,
                h = !Array.isArray(e) && e.maxStringLength || l_;
            for (; r && a++ < i && (E = o_(r, x), !(E === "html" || a > 1 && f + s.length * l + E.length >= h));) s.push(E), f += E.length, r = r.parentNode;
            return s.reverse().join(u)
        } catch {
            return "<unknown>"
        }
    }

    function o_(t, e) {
        const r = t,
            i = [];
        let s, a, f, u, l;
        if (!r || !r.tagName) return "";
        if (ai.HTMLElement && r instanceof HTMLElement && r.dataset && r.dataset.sentryComponent) return r.dataset.sentryComponent;
        i.push(r.tagName.toLowerCase());
        const E = e && e.length ? e.filter(h => r.getAttribute(h)).map(h => [h, r.getAttribute(h)]) : null;
        if (E && E.length) E.forEach(h => {
            i.push(`[${h[0]}="${h[1]}"]`)
        });
        else if (r.id && i.push(`#${r.id}`), s = r.className, s && ke(s))
            for (a = s.split(/\s+/), l = 0; l < a.length; l++) i.push(`.${a[l]}`);
        const x = ["aria-label", "type", "name", "title", "alt"];
        for (l = 0; l < x.length; l++) f = x[l], u = r.getAttribute(f), u && i.push(`[${f}="${u}"]`);
        return i.join("")
    }

    function E_() {
        try {
            return ai.document.location.href
        } catch {
            return ""
        }
    }

    function p_(t) {
        if (!ai.HTMLElement) return null;
        let e = t;
        const r = 5;
        for (let i = 0; i < r; i++) {
            if (!e) return null;
            if (e instanceof HTMLElement && e.dataset.sentryComponent) return e.dataset.sentryComponent;
            e = e.parentNode
        }
        return null
    }
    const Zt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
        c_ = "Sentry Logger ",
        _n = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        Ar = {};

    function Mr(t) {
        if (!("console" in H)) return t();
        const e = H.console,
            r = {},
            i = Object.keys(Ar);
        i.forEach(s => {
            const a = Ar[s];
            r[s] = e[s], e[s] = a
        });
        try {
            return t()
        } finally {
            i.forEach(s => {
                e[s] = r[s]
            })
        }
    }

    function x_() {
        let t = !1;
        const e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            },
            isEnabled: () => t
        };
        return Zt ? _n.forEach(r => {
            e[r] = (...i) => {
                t && Mr(() => {
                    H.console[r](`${c_}[${r}]:`, ...i)
                })
            }
        }) : _n.forEach(r => {
            e[r] = () => {}
        }), e
    }
    const N = x_(),
        __ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function h_(t) {
        return t === "http" || t === "https"
    }

    function er(t, e = !1) {
        const {
            host: r,
            path: i,
            pass: s,
            port: a,
            projectId: f,
            protocol: u,
            publicKey: l
        } = t;
        return `${u}://${l}${e&&s?`:${s}`:""}@${r}${a?`:${a}`:""}/${i&&`${i}/`}${f}`
    }

    function R_(t) {
        const e = __.exec(t);
        if (!e) {
            Mr(() => {
                console.error(`Invalid Sentry Dsn: ${t}`)
            });
            return
        }
        const [r, i, s = "", a, f = "", u] = e.slice(1);
        let l = "",
            E = u;
        const x = E.split("/");
        if (x.length > 1 && (l = x.slice(0, -1).join("/"), E = x.pop()), E) {
            const h = E.match(/^\d+/);
            h && (E = h[0])
        }
        return ka({
            host: a,
            pass: s,
            path: l,
            projectId: E,
            port: f,
            protocol: r,
            publicKey: i
        })
    }

    function ka(t) {
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

    function b_(t) {
        if (!Zt) return !0;
        const {
            port: e,
            projectId: r,
            protocol: i
        } = t;
        return ["protocol", "publicKey", "host", "projectId"].find(f => t[f] ? !1 : (N.error(`Invalid Sentry Dsn: ${f} missing`), !0)) ? !1 : r.match(/^\d+$/) ? h_(i) ? e && isNaN(parseInt(e, 10)) ? (N.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (N.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (N.error(`Invalid Sentry Dsn: Invalid projectId ${r}`), !1)
    }

    function T_(t) {
        const e = typeof t == "string" ? R_(t) : ka(t);
        if (!(!e || !b_(e))) return e
    }
    class ve extends Error {
        constructor(e, r = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = r
        }
    }

    function ae(t, e, r) {
        if (!(e in t)) return;
        const i = t[e],
            s = r(i);
        typeof s == "function" && Ma(s, i), t[e] = s
    }

    function Wt(t, e, r) {
        try {
            Object.defineProperty(t, e, {
                value: r,
                writable: !0,
                configurable: !0
            })
        } catch {
            Zt && N.log(`Failed to add non-enumerable property "${e}" to object`, t)
        }
    }

    function Ma(t, e) {
        try {
            const r = e.prototype || {};
            t.prototype = e.prototype = r, Wt(t, "__sentry_original__", e)
        } catch {}
    }

    function fi(t) {
        return t.__sentry_original__
    }

    function g_(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function $a(t) {
        if (Ia(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...us(t)
        };
        if (Pr(t)) {
            const e = {
                type: t.type,
                target: fs(t.target),
                currentTarget: fs(t.currentTarget),
                ...us(t)
            };
            return typeof CustomEvent < "u" && nt(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function fs(t) {
        try {
            return r_(t) ? Va(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function us(t) {
        if (typeof t == "object" && t !== null) {
            const e = {};
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        } else return {}
    }

    function L_(t, e = 40) {
        const r = Object.keys($a(t));
        if (r.sort(), !r.length) return "[object has no keys]";
        if (r[0].length >= e) return Tt(r[0], e);
        for (let i = r.length; i > 0; i--) {
            const s = r.slice(0, i).join(", ");
            if (!(s.length > e)) return i === r.length ? s : Tt(s, e)
        }
        return ""
    }

    function $r(t) {
        return hn(t, new Map)
    }

    function hn(t, e) {
        if (yt(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const i = {};
            e.set(t, i);
            for (const s of Object.keys(t)) typeof t[s] < "u" && (i[s] = hn(t[s], e));
            return i
        }
        if (Array.isArray(t)) {
            const r = e.get(t);
            if (r !== void 0) return r;
            const i = [];
            return e.set(t, i), t.forEach(s => {
                i.push(hn(s, e))
            }), i
        }
        return t
    }
    const Ga = 50,
        ls = /\(error: (.*)\)/,
        os = /captureMessage|captureException/;

    function Xa(...t) {
        const e = t.sort((r, i) => r[0] - i[0]).map(r => r[1]);
        return (r, i = 0) => {
            const s = [],
                a = r.split(`
`);
            for (let f = i; f < a.length; f++) {
                const u = a[f];
                if (u.length > 1024) continue;
                const l = ls.test(u) ? u.replace(ls, "$1") : u;
                if (!l.match(/\S*Error: /)) {
                    for (const E of e) {
                        const x = E(l);
                        if (x) {
                            s.push(x);
                            break
                        }
                    }
                    if (s.length >= Ga) break
                }
            }
            return y_(s)
        }
    }

    function S_(t) {
        return Array.isArray(t) ? Xa(...t) : t
    }

    function y_(t) {
        if (!t.length) return [];
        const e = Array.from(t);
        return /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(), e.reverse(), os.test(e[e.length - 1].function || "") && (e.pop(), os.test(e[e.length - 1].function || "") && e.pop()), e.slice(0, Ga).map(r => ({
            ...r,
            filename: r.filename || e[e.length - 1].filename,
            function: r.function || "?"
        }))
    }
    const fn = "<anonymous>";

    function We(t) {
        try {
            return !t || typeof t != "function" ? fn : t.name || fn
        } catch {
            return fn
        }
    }
    const Er = {},
        Es = {};

    function at(t, e) {
        Er[t] = Er[t] || [], Er[t].push(e)
    }

    function ft(t, e) {
        Es[t] || (e(), Es[t] = !0)
    }

    function Ae(t, e) {
        const r = t && Er[t];
        if (r)
            for (const i of r) try {
                i(e)
            } catch (s) {
                Zt && N.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${We(i)}
Error:`, s)
            }
    }

    function A_(t) {
        const e = "console";
        at(e, t), ft(e, m_)
    }

    function m_() {
        "console" in H && _n.forEach(function(t) {
            t in H.console && ae(H.console, t, function(e) {
                return Ar[t] = e,
                    function(...r) {
                        Ae("console", {
                            args: r,
                            level: t
                        });
                        const s = Ar[t];
                        s && s.apply(H.console, r)
                    }
            })
        })
    }

    function Me() {
        const t = H,
            e = t.crypto || t.msCrypto;
        let r = () => Math.random() * 16;
        try {
            if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
            e && e.getRandomValues && (r = () => {
                const i = new Uint8Array(1);
                return e.getRandomValues(i), i[0]
            })
        } catch {}
        return ("10000000100040008000" + 1e11).replace(/[018]/g, i => (i ^ (r() & 15) >> i / 4).toString(16))
    }

    function ja(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function je(t) {
        const {
            message: e,
            event_id: r
        } = t;
        if (e) return e;
        const i = ja(t);
        return i ? i.type && i.value ? `${i.type}: ${i.value}` : i.type || i.value || r || "<unknown>" : r || "<unknown>"
    }

    function Rn(t, e, r) {
        const i = t.exception = t.exception || {},
            s = i.values = i.values || [],
            a = s[0] = s[0] || {};
        a.value || (a.value = e || ""), a.type || (a.type = r || "Error")
    }

    function zt(t, e) {
        const r = ja(t);
        if (!r) return;
        const i = {
                type: "generic",
                handled: !0
            },
            s = r.mechanism;
        if (r.mechanism = {
                ...i,
                ...s,
                ...e
            }, e && "data" in e) {
            const a = {
                ...s && s.data,
                ...e.data
            };
            r.mechanism.data = a
        }
    }

    function ps(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            Wt(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function Fa(t) {
        return Array.isArray(t) ? t : [t]
    }
    const Et = H,
        C_ = 1e3;
    let cs, bn, Tn;

    function v_(t) {
        const e = "dom";
        at(e, t), ft(e, U_)
    }

    function U_() {
        if (!Et.document) return;
        const t = Ae.bind(null, "dom"),
            e = xs(t, !0);
        Et.document.addEventListener("click", e, !1), Et.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(r => {
            const i = Et[r] && Et[r].prototype;
            !i || !i.hasOwnProperty || !i.hasOwnProperty("addEventListener") || (ae(i, "addEventListener", function(s) {
                return function(a, f, u) {
                    if (a === "click" || a == "keypress") try {
                        const l = this,
                            E = l.__sentry_instrumentation_handlers__ = l.__sentry_instrumentation_handlers__ || {},
                            x = E[a] = E[a] || {
                                refCount: 0
                            };
                        if (!x.handler) {
                            const h = xs(t);
                            x.handler = h, s.call(this, a, h, u)
                        }
                        x.refCount++
                    } catch {}
                    return s.call(this, a, f, u)
                }
            }), ae(i, "removeEventListener", function(s) {
                return function(a, f, u) {
                    if (a === "click" || a == "keypress") try {
                        const l = this,
                            E = l.__sentry_instrumentation_handlers__ || {},
                            x = E[a];
                        x && (x.refCount--, x.refCount <= 0 && (s.call(this, a, x.handler, u), x.handler = void 0, delete E[a]), Object.keys(E).length === 0 && delete l.__sentry_instrumentation_handlers__)
                    } catch {}
                    return s.call(this, a, f, u)
                }
            }))
        })
    }

    function B_(t) {
        if (t.type !== bn) return !1;
        try {
            if (!t.target || t.target._sentryId !== Tn) return !1
        } catch {}
        return !0
    }

    function K_(t, e) {
        return t !== "keypress" ? !1 : !e || !e.tagName ? !0 : !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
    }

    function xs(t, e = !1) {
        return r => {
            if (!r || r._sentryCaptured) return;
            const i = d_(r);
            if (K_(r.type, i)) return;
            Wt(r, "_sentryCaptured", !0), i && !i._sentryId && Wt(i, "_sentryId", Me());
            const s = r.type === "keypress" ? "input" : r.type;
            B_(r) || (t({
                event: r,
                name: s,
                global: e
            }), bn = r.type, Tn = i ? i._sentryId : void 0), clearTimeout(cs), cs = Et.setTimeout(() => {
                Tn = void 0, bn = void 0
            }, C_)
        }
    }

    function d_(t) {
        try {
            return t.target
        } catch {
            return null
        }
    }
    const gn = kr();

    function qa() {
        if (!("fetch" in gn)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch {
            return !1
        }
    }

    function Ln(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function N_() {
        if (typeof EdgeRuntime == "string") return !0;
        if (!qa()) return !1;
        if (Ln(gn.fetch)) return !0;
        let t = !1;
        const e = gn.document;
        if (e && typeof e.createElement == "function") try {
            const r = e.createElement("iframe");
            r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = Ln(r.contentWindow.fetch)), e.head.removeChild(r)
        } catch (r) {
            Zt && N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return t
    }

    function w_(t) {
        const e = "fetch";
        at(e, t), ft(e, D_)
    }

    function D_() {
        N_() && ae(H, "fetch", function(t) {
            return function(...e) {
                const {
                    method: r,
                    url: i
                } = I_(e), s = {
                    args: e,
                    fetchData: {
                        method: r,
                        url: i
                    },
                    startTimestamp: Date.now()
                };
                return Ae("fetch", {
                    ...s
                }), t.apply(H, e).then(a => {
                    const f = {
                        ...s,
                        endTimestamp: Date.now(),
                        response: a
                    };
                    return Ae("fetch", f), a
                }, a => {
                    const f = {
                        ...s,
                        endTimestamp: Date.now(),
                        error: a
                    };
                    throw Ae("fetch", f), a
                })
            }
        })
    }

    function Sn(t, e) {
        return !!t && typeof t == "object" && !!t[e]
    }

    function _s(t) {
        return typeof t == "string" ? t : t ? Sn(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
    }

    function I_(t) {
        if (t.length === 0) return {
            method: "GET",
            url: ""
        };
        if (t.length === 2) {
            const [r, i] = t;
            return {
                url: _s(r),
                method: Sn(i, "method") ? String(i.method).toUpperCase() : "GET"
            }
        }
        const e = t[0];
        return {
            url: _s(e),
            method: Sn(e, "method") ? String(e.method).toUpperCase() : "GET"
        }
    }
    let sr = null;

    function O_(t) {
        const e = "error";
        at(e, t), ft(e, P_)
    }

    function P_() {
        sr = H.onerror, H.onerror = function(t, e, r, i, s) {
            return Ae("error", {
                column: i,
                error: s,
                line: r,
                msg: t,
                url: e
            }), sr && !sr.__SENTRY_LOADER__ ? sr.apply(this, arguments) : !1
        }, H.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    let ar = null;

    function V_(t) {
        const e = "unhandledrejection";
        at(e, t), ft(e, k_)
    }

    function k_() {
        ar = H.onunhandledrejection, H.onunhandledrejection = function(t) {
            return Ae("unhandledrejection", t), ar && !ar.__SENTRY_LOADER__ ? ar.apply(this, arguments) : !0
        }, H.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }
    const fr = kr();

    function M_() {
        const t = fr.chrome,
            e = t && t.app && t.app.runtime,
            r = "history" in fr && !!fr.history.pushState && !!fr.history.replaceState;
        return !e && r
    }
    const Mt = H;
    let ur;

    function Ha(t) {
        const e = "history";
        at(e, t), ft(e, $_)
    }

    function $_() {
        if (!M_()) return;
        const t = Mt.onpopstate;
        Mt.onpopstate = function(...r) {
            const i = Mt.location.href,
                s = ur;
            if (ur = i, Ae("history", {
                    from: s,
                    to: i
                }), t) try {
                return t.apply(this, r)
            } catch {}
        };

        function e(r) {
            return function(...i) {
                const s = i.length > 2 ? i[2] : void 0;
                if (s) {
                    const a = ur,
                        f = String(s);
                    ur = f, Ae("history", {
                        from: a,
                        to: f
                    })
                }
                return r.apply(this, i)
            }
        }
        ae(Mt.history, "pushState", e), ae(Mt.history, "replaceState", e)
    }
    const G_ = H,
        Xt = "__sentry_xhr_v3__";

    function X_(t) {
        const e = "xhr";
        at(e, t), ft(e, j_)
    }

    function j_() {
        if (!G_.XMLHttpRequest) return;
        const t = XMLHttpRequest.prototype;
        ae(t, "open", function(e) {
            return function(...r) {
                const i = Date.now(),
                    s = ke(r[0]) ? r[0].toUpperCase() : void 0,
                    a = F_(r[1]);
                if (!s || !a) return e.apply(this, r);
                this[Xt] = {
                    method: s,
                    url: a,
                    request_headers: {}
                }, s === "POST" && a.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const f = () => {
                    const u = this[Xt];
                    if (u && this.readyState === 4) {
                        try {
                            u.status_code = this.status
                        } catch {}
                        const l = {
                            args: [s, a],
                            endTimestamp: Date.now(),
                            startTimestamp: i,
                            xhr: this
                        };
                        Ae("xhr", l)
                    }
                };
                return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? ae(this, "onreadystatechange", function(u) {
                    return function(...l) {
                        return f(), u.apply(this, l)
                    }
                }) : this.addEventListener("readystatechange", f), ae(this, "setRequestHeader", function(u) {
                    return function(...l) {
                        const [E, x] = l, h = this[Xt];
                        return h && ke(E) && ke(x) && (h.request_headers[E.toLowerCase()] = x), u.apply(this, l)
                    }
                }), e.apply(this, r)
            }
        }), ae(t, "send", function(e) {
            return function(...r) {
                const i = this[Xt];
                if (!i) return e.apply(this, r);
                r[0] !== void 0 && (i.body = r[0]);
                const s = {
                    args: [i.method, i.url],
                    startTimestamp: Date.now(),
                    xhr: this
                };
                return Ae("xhr", s), e.apply(this, r)
            }
        })
    }

    function F_(t) {
        if (ke(t)) return t;
        try {
            return t.toString()
        } catch {}
    }

    function q_() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function H_() {
        return "npm"
    }

    function W_() {
        return !q_() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function z_(t, e) {
        return t.require(e)
    }

    function Y_() {
        const t = typeof WeakSet == "function",
            e = t ? new WeakSet : [];

        function r(s) {
            if (t) return e.has(s) ? !0 : (e.add(s), !1);
            for (let a = 0; a < e.length; a++)
                if (e[a] === s) return !0;
            return e.push(s), !1
        }

        function i(s) {
            if (t) e.delete(s);
            else
                for (let a = 0; a < e.length; a++)
                    if (e[a] === s) {
                        e.splice(a, 1);
                        break
                    }
        }
        return [r, i]
    }

    function Xe(t, e = 100, r = 1 / 0) {
        try {
            return yn("", t, e, r)
        } catch (i) {
            return {
                ERROR: `**non-serializable** (${i})`
            }
        }
    }

    function Wa(t, e = 3, r = 100 * 1024) {
        const i = Xe(t, e);
        return eh(i) > r ? Wa(t, e - 1, r) : i
    }

    function yn(t, e, r = 1 / 0, i = 1 / 0, s = Y_()) {
        const [a, f] = s;
        if (e == null || ["number", "boolean", "string"].includes(typeof e) && !s_(e)) return e;
        const u = J_(t, e);
        if (!u.startsWith("[object ")) return u;
        if (e.__sentry_skip_normalization__) return e;
        const l = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : r;
        if (l === 0) return u.replace("object ", "");
        if (a(e)) return "[Circular ~]";
        const E = e;
        if (E && typeof E.toJSON == "function") try {
            const L = E.toJSON();
            return yn("", L, l - 1, i, s)
        } catch {}
        const x = Array.isArray(e) ? [] : {};
        let h = 0;
        const b = $a(e);
        for (const L in b) {
            if (!Object.prototype.hasOwnProperty.call(b, L)) continue;
            if (h >= i) {
                x[L] = "[MaxProperties ~]";
                break
            }
            const A = b[L];
            x[L] = yn(L, A, l - 1, i, s), h++
        }
        return f(e), x
    }

    function J_(t, e) {
        try {
            if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
            if (t === "domainEmitter") return "[DomainEmitter]";
            if (typeof global < "u" && e === global) return "[Global]";
            if (typeof window < "u" && e === window) return "[Window]";
            if (typeof document < "u" && e === document) return "[Document]";
            if (Oa(e)) return "[VueViewModel]";
            if (i_(e)) return "[SyntheticEvent]";
            if (typeof e == "number" && e !== e) return "[NaN]";
            if (typeof e == "function") return `[Function: ${We(e)}]`;
            if (typeof e == "symbol") return `[${String(e)}]`;
            if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
            const r = Q_(e);
            return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`
        } catch (r) {
            return `**non-serializable** (${r})`
        }
    }

    function Q_(t) {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : "null prototype"
    }

    function Z_(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function eh(t) {
        return Z_(JSON.stringify(t))
    }
    var Ie;
    (function(t) {
        t[t.PENDING = 0] = "PENDING";
        const r = 1;
        t[t.RESOLVED = r] = "RESOLVED";
        const i = 2;
        t[t.REJECTED = i] = "REJECTED"
    })(Ie || (Ie = {}));

    function At(t) {
        return new _e(e => {
            e(t)
        })
    }

    function ui(t) {
        return new _e((e, r) => {
            r(t)
        })
    }
    class _e {
        constructor(e) {
            _e.prototype.__init.call(this), _e.prototype.__init2.call(this), _e.prototype.__init3.call(this), _e.prototype.__init4.call(this), this._state = Ie.PENDING, this._handlers = [];
            try {
                e(this._resolve, this._reject)
            } catch (r) {
                this._reject(r)
            }
        }
        then(e, r) {
            return new _e((i, s) => {
                this._handlers.push([!1, a => {
                    if (!e) i(a);
                    else try {
                        i(e(a))
                    } catch (f) {
                        s(f)
                    }
                }, a => {
                    if (!r) s(a);
                    else try {
                        i(r(a))
                    } catch (f) {
                        s(f)
                    }
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(r => r, e)
        } finally(e) {
            return new _e((r, i) => {
                let s, a;
                return this.then(f => {
                    a = !1, s = f, e && e()
                }, f => {
                    a = !0, s = f, e && e()
                }).then(() => {
                    if (a) {
                        i(s);
                        return
                    }
                    r(s)
                })
            })
        }
        __init() {
            this._resolve = e => {
                this._setResult(Ie.RESOLVED, e)
            }
        }
        __init2() {
            this._reject = e => {
                this._setResult(Ie.REJECTED, e)
            }
        }
        __init3() {
            this._setResult = (e, r) => {
                if (this._state === Ie.PENDING) {
                    if (si(r)) {
                        r.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = r, this._executeHandlers()
                }
            }
        }
        __init4() {
            this._executeHandlers = () => {
                if (this._state === Ie.PENDING) return;
                const e = this._handlers.slice();
                this._handlers = [], e.forEach(r => {
                    r[0] || (this._state === Ie.RESOLVED && r[1](this._value), this._state === Ie.REJECTED && r[2](this._value), r[0] = !0)
                })
            }
        }
    }

    function th(t) {
        const e = [];

        function r() {
            return t === void 0 || e.length < t
        }

        function i(f) {
            return e.splice(e.indexOf(f), 1)[0]
        }

        function s(f) {
            if (!r()) return ui(new ve("Not adding Promise because buffer limit was reached."));
            const u = f();
            return e.indexOf(u) === -1 && e.push(u), u.then(() => i(u)).then(null, () => i(u).then(null, () => {})), u
        }

        function a(f) {
            return new _e((u, l) => {
                let E = e.length;
                if (!E) return u(!0);
                const x = setTimeout(() => {
                    f && f > 0 && u(!1)
                }, f);
                e.forEach(h => {
                    At(h).then(() => {
                        --E || (clearTimeout(x), u(!0))
                    }, l)
                })
            })
        }
        return {
            $: e,
            add: s,
            drain: a
        }
    }

    function un(t) {
        if (!t) return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        const r = e[6] || "",
            i = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            search: r,
            hash: i,
            relative: e[5] + r + i
        }
    }
    const rh = ["fatal", "error", "warning", "log", "info", "debug"];

    function nh(t) {
        return t === "warn" ? "warning" : rh.includes(t) ? t : "log"
    }
    const za = kr(),
        An = {
            nowSeconds: () => Date.now() / 1e3
        };

    function ih() {
        const {
            performance: t
        } = za;
        if (!t || !t.now) return;
        const e = Date.now() - t.now();
        return {
            now: () => t.now(),
            timeOrigin: e
        }
    }

    function sh() {
        try {
            return z_(Af, "perf_hooks").performance
        } catch {
            return
        }
    }
    const ln = W_() ? sh() : ih(),
        hs = ln === void 0 ? An : {
            nowSeconds: () => (ln.timeOrigin + ln.now()) / 1e3
        },
        Gr = An.nowSeconds.bind(An),
        Ya = hs.nowSeconds.bind(hs);
    (() => {
        const {
            performance: t
        } = za;
        if (!t || !t.now) return;
        const e = 3600 * 1e3,
            r = t.now(),
            i = Date.now(),
            s = t.timeOrigin ? Math.abs(t.timeOrigin + r - i) : e,
            a = s < e,
            f = t.timing && t.timing.navigationStart,
            l = typeof f == "number" ? Math.abs(f + r - i) : e,
            E = l < e;
        return a || E ? s <= l ? t.timeOrigin : f : i
    })();

    function Ot(t, e = []) {
        return [t, e]
    }

    function ah(t, e) {
        const [r, i] = t;
        return [r, [...i, e]]
    }

    function Rs(t, e) {
        const r = t[1];
        for (const i of r) {
            const s = i[0].type;
            if (e(i, s)) return !0
        }
        return !1
    }

    function mn(t, e) {
        return (e || new TextEncoder).encode(t)
    }

    function fh(t, e) {
        const [r, i] = t;
        let s = JSON.stringify(r);

        function a(f) {
            typeof s == "string" ? s = typeof f == "string" ? s + f : [mn(s, e), f] : s.push(typeof f == "string" ? mn(f, e) : f)
        }
        for (const f of i) {
            const [u, l] = f;
            if (a(`
${JSON.stringify(u)}
`), typeof l == "string" || l instanceof Uint8Array) a(l);
            else {
                let E;
                try {
                    E = JSON.stringify(l)
                } catch {
                    E = JSON.stringify(Xe(l))
                }
                a(E)
            }
        }
        return typeof s == "string" ? s : uh(s)
    }

    function uh(t) {
        const e = t.reduce((s, a) => s + a.length, 0),
            r = new Uint8Array(e);
        let i = 0;
        for (const s of t) r.set(s, i), i += s.length;
        return r
    }

    function lh(t, e) {
        const r = typeof t.data == "string" ? mn(t.data, e) : t.data;
        return [$r({
            type: "attachment",
            length: r.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), r]
    }
    const oh = {
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
        check_in: "monitor",
        feedback: "feedback",
        statsd: "unknown"
    };

    function bs(t) {
        return oh[t]
    }

    function Ja(t) {
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

    function Eh(t, e, r, i) {
        const s = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!r && i && {
                dsn: er(i)
            },
            ...s && {
                trace: $r({
                    ...s
                })
            }
        }
    }

    function ph(t, e, r) {
        const i = [{
            type: "client_report"
        }, {
            timestamp: r || Gr(),
            discarded_events: t
        }];
        return Ot(e ? {
            dsn: e
        } : {}, [i])
    }
    const ch = 60 * 1e3;

    function xh(t, e = Date.now()) {
        const r = parseInt(`${t}`, 10);
        if (!isNaN(r)) return r * 1e3;
        const i = Date.parse(`${t}`);
        return isNaN(i) ? ch : i - e
    }

    function _h(t, e) {
        return t[e] || t.all || 0
    }

    function hh(t, e, r = Date.now()) {
        return _h(t, e) > r
    }

    function Rh(t, {
        statusCode: e,
        headers: r
    }, i = Date.now()) {
        const s = {
                ...t
            },
            a = r && r["x-sentry-rate-limits"],
            f = r && r["retry-after"];
        if (a)
            for (const u of a.trim().split(",")) {
                const [l, E] = u.split(":", 2), x = parseInt(l, 10), h = (isNaN(x) ? 60 : x) * 1e3;
                if (!E) s.all = i + h;
                else
                    for (const b of E.split(";")) s[b] = i + h
            } else f ? s.all = i + xh(f, i) : e === 429 && (s.all = i + 60 * 1e3);
        return s
    }
    const Z = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
        li = "production";

    function oi() {
        return Pa("globalEventProcessors", () => [])
    }

    function bh(t) {
        oi().push(t)
    }

    function mr(t, e, r, i = 0) {
        return new _e((s, a) => {
            const f = t[i];
            if (e === null || typeof f != "function") s(e);
            else {
                const u = f({
                    ...e
                }, r);
                Z && f.id && u === null && N.log(`Event processor "${f.id}" dropped event`), si(u) ? u.then(l => mr(t, l, r, i + 1).then(s)).then(null, a) : mr(t, u, r, i + 1).then(s).then(null, a)
            }
        })
    }

    function Th(t) {
        const e = Ya(),
            r = {
                sid: Me(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => Lh(r)
            };
        return t && mt(r, t), r
    }

    function mt(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Ya(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : Me()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            const r = t.timestamp - t.started;
            t.duration = r >= 0 ? r : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function gh(t, e) {
        let r = {};
        e ? r = {
            status: e
        } : t.status === "ok" && (r = {
            status: "exited"
        }), mt(t, r)
    }

    function Lh(t) {
        return $r({
            sid: `${t.sid}`,
            init: t.init,
            started: new Date(t.started * 1e3).toISOString(),
            timestamp: new Date(t.timestamp * 1e3).toISOString(),
            status: t.status,
            errors: t.errors,
            did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
            duration: t.duration,
            abnormal_mechanism: t.abnormal_mechanism,
            attrs: {
                release: t.release,
                environment: t.environment,
                ip_address: t.ipAddress,
                user_agent: t.userAgent
            }
        })
    }

    function Qa(t, e) {
        const {
            fingerprint: r,
            span: i,
            breadcrumbs: s,
            sdkProcessingMetadata: a,
            propagationContext: f
        } = e;
        Sh(t, e), i && mh(t, i), Ch(t, r), yh(t, s), Ah(t, a, f)
    }

    function Ts(t, e) {
        const {
            extra: r,
            tags: i,
            user: s,
            contexts: a,
            level: f,
            sdkProcessingMetadata: u,
            breadcrumbs: l,
            fingerprint: E,
            eventProcessors: x,
            attachments: h,
            propagationContext: b,
            transactionName: L,
            span: A
        } = e;
        $t(t, "extra", r), $t(t, "tags", i), $t(t, "user", s), $t(t, "contexts", a), $t(t, "sdkProcessingMetadata", u), f && (t.level = f), L && (t.transactionName = L), A && (t.span = A), l.length && (t.breadcrumbs = [...t.breadcrumbs, ...l]), E.length && (t.fingerprint = [...t.fingerprint, ...E]), x.length && (t.eventProcessors = [...t.eventProcessors, ...x]), h.length && (t.attachments = [...t.attachments, ...h]), t.propagationContext = {
            ...t.propagationContext,
            ...b
        }
    }

    function $t(t, e, r) {
        r && Object.keys(r).length && (t[e] = {
            ...t[e],
            ...r
        })
    }

    function Sh(t, e) {
        const {
            extra: r,
            tags: i,
            user: s,
            contexts: a,
            level: f,
            transactionName: u
        } = e;
        r && Object.keys(r).length && (t.extra = {
            ...r,
            ...t.extra
        }), i && Object.keys(i).length && (t.tags = {
            ...i,
            ...t.tags
        }), s && Object.keys(s).length && (t.user = {
            ...s,
            ...t.user
        }), a && Object.keys(a).length && (t.contexts = {
            ...a,
            ...t.contexts
        }), f && (t.level = f), u && (t.transaction = u)
    }

    function yh(t, e) {
        const r = [...t.breadcrumbs || [], ...e];
        t.breadcrumbs = r.length ? r : void 0
    }

    function Ah(t, e, r) {
        t.sdkProcessingMetadata = {
            ...t.sdkProcessingMetadata,
            ...e,
            propagationContext: r
        }
    }

    function mh(t, e) {
        t.contexts = {
            trace: e.getTraceContext(),
            ...t.contexts
        };
        const r = e.transaction;
        if (r) {
            t.sdkProcessingMetadata = {
                dynamicSamplingContext: r.getDynamicSamplingContext(),
                ...t.sdkProcessingMetadata
            };
            const i = r.name;
            i && (t.tags = {
                transaction: i,
                ...t.tags
            })
        }
    }

    function Ch(t, e) {
        t.fingerprint = t.fingerprint ? Fa(t.fingerprint) : [], e && (t.fingerprint = t.fingerprint.concat(e)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
    }
    const vh = 100;
    let on;
    class Ue {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = gs()
        }
        static clone(e) {
            return e ? e.clone() : new Ue
        }
        clone() {
            const e = new Ue;
            return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
                ...this._tags
            }, e._extra = {
                ...this._extra
            }, e._contexts = {
                ...this._contexts
            }, e._user = this._user, e._level = this._level, e._span = this._span, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata
            }, e._propagationContext = {
                ...this._propagationContext
            }, e
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
                return r instanceof Ue ? r : this
            }
            return e instanceof Ue ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : yt(e) && (e = e, this._tags = {
                ...this._tags,
                ...e.tags
            }, this._extra = {
                ...this._extra,
                ...e.extra
            }, this._contexts = {
                ...this._contexts,
                ...e.contexts
            }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = gs(), this
        }
        addBreadcrumb(e, r) {
            const i = typeof r == "number" ? r : vh;
            if (i <= 0) return this;
            const s = {
                    timestamp: Gr(),
                    ...e
                },
                a = this._breadcrumbs;
            return a.push(s), this._breadcrumbs = a.length > i ? a.slice(-i) : a, this._notifyScopeListeners(), this
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
            return this.getScopeData().attachments
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            const {
                _breadcrumbs: e,
                _attachments: r,
                _contexts: i,
                _tags: s,
                _extra: a,
                _user: f,
                _level: u,
                _fingerprint: l,
                _eventProcessors: E,
                _propagationContext: x,
                _sdkProcessingMetadata: h,
                _transactionName: b,
                _span: L
            } = this;
            return {
                breadcrumbs: e,
                attachments: r,
                contexts: i,
                tags: s,
                extra: a,
                user: f,
                level: u,
                fingerprint: l || [],
                eventProcessors: E,
                propagationContext: x,
                sdkProcessingMetadata: h,
                transactionName: b,
                span: L
            }
        }
        applyToEvent(e, r = {}, i = []) {
            Qa(e, this.getScopeData());
            const s = [...i, ...oi(), ...this._eventProcessors];
            return mr(s, e, r)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        setPropagationContext(e) {
            return this._propagationContext = e, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
    }

    function Uh() {
        return on || (on = new Ue), on
    }

    function gs() {
        return {
            traceId: Me(),
            spanId: Me().substring(16)
        }
    }
    const Cn = "7.91.0",
        Za = parseFloat(Cn),
        Bh = 100;
    class ef {
        constructor(e, r = new Ue, i = new Ue, s = Za) {
            this._version = s, this._stack = [{
                scope: r
            }], e && this.bindClient(e), this._isolationScope = i
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            const r = this.getStackTop();
            r.client = e, e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            const e = this.getScope().clone();
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
                return e(r)
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
        getIsolationScope() {
            return this._isolationScope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(e, r) {
            const i = this._lastEventId = r && r.event_id ? r.event_id : Me(),
                s = new Error("Sentry syntheticException");
            return this._withClient((a, f) => {
                a.captureException(e, {
                    originalException: e,
                    syntheticException: s,
                    ...r,
                    event_id: i
                }, f)
            }), i
        }
        captureMessage(e, r, i) {
            const s = this._lastEventId = i && i.event_id ? i.event_id : Me(),
                a = new Error(e);
            return this._withClient((f, u) => {
                f.captureMessage(e, r, {
                    originalException: e,
                    syntheticException: a,
                    ...i,
                    event_id: s
                }, u)
            }), s
        }
        captureEvent(e, r) {
            const i = r && r.event_id ? r.event_id : Me();
            return e.type || (this._lastEventId = i), this._withClient((s, a) => {
                s.captureEvent(e, {
                    ...r,
                    event_id: i
                }, a)
            }), i
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(e, r) {
            const {
                scope: i,
                client: s
            } = this.getStackTop();
            if (!s) return;
            const {
                beforeBreadcrumb: a = null,
                maxBreadcrumbs: f = Bh
            } = s.getOptions && s.getOptions() || {};
            if (f <= 0) return;
            const l = {
                    timestamp: Gr(),
                    ...e
                },
                E = a ? Mr(() => a(l, r)) : l;
            E !== null && (s.emit && s.emit("beforeAddBreadcrumb", E, r), i.addBreadcrumb(E, f))
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
                client: i
            } = this.getStackTop();
            i && e(r)
        }
        run(e) {
            const r = Ls(this);
            try {
                e(this)
            } finally {
                Ls(r)
            }
        }
        getIntegration(e) {
            const r = this.getClient();
            if (!r) return null;
            try {
                return r.getIntegration(e)
            } catch {
                return Z && N.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
            }
        }
        startTransaction(e, r) {
            const i = this._callExtensionMethod("startTransaction", e, r);
            return Z && !i && (this.getClient() ? N.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`) : N.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), i
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
                i = r.getSession();
            i && gh(i), this._sendSessionUpdate(), r.setSession()
        }
        startSession(e) {
            const {
                scope: r,
                client: i
            } = this.getStackTop(), {
                release: s,
                environment: a = li
            } = i && i.getOptions() || {}, {
                userAgent: f
            } = H.navigator || {}, u = Th({
                release: s,
                environment: a,
                user: r.getUser(),
                ...f && {
                    userAgent: f
                },
                ...e
            }), l = r.getSession && r.getSession();
            return l && l.status === "ok" && mt(l, {
                status: "exited"
            }), this.endSession(), r.setSession(u), u
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
            } = this.getStackTop(), i = e.getSession();
            i && r && r.captureSession && r.captureSession(i)
        }
        _withClient(e) {
            const {
                scope: r,
                client: i
            } = this.getStackTop();
            i && e(i, r)
        }
        _callExtensionMethod(e, ...r) {
            const s = Xr().__SENTRY__;
            if (s && s.extensions && typeof s.extensions[e] == "function") return s.extensions[e].apply(this, r);
            Z && N.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Xr() {
        return H.__SENTRY__ = H.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, H
    }

    function Ls(t) {
        const e = Xr(),
            r = vn(e);
        return tf(e, t), r
    }

    function Te() {
        const t = Xr();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            const e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return dh(t)
    }

    function Kh() {
        return Te().getIsolationScope()
    }

    function dh(t = Xr()) {
        return (!Nh(t) || vn(t).isOlderThan(Za)) && tf(t, new ef), vn(t)
    }

    function Nh(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function vn(t) {
        return Pa("hub", () => new ef, t)
    }

    function tf(t, e) {
        if (!t) return !1;
        const r = t.__SENTRY__ = t.__SENTRY__ || {};
        return r.hub = e, !0
    }

    function wh(t, e, r) {
        const i = e.getOptions(),
            {
                publicKey: s
            } = e.getDsn() || {},
            {
                segment: a
            } = r && r.getUser() || {},
            f = $r({
                environment: i.environment || li,
                release: i.release,
                user_segment: a,
                public_key: s,
                trace_id: t
            });
        return e.emit && e.emit("createDsc", f), f
    }

    function Dh(t, e, r, i, s, a) {
        const {
            normalizeDepth: f = 3,
            normalizeMaxBreadth: u = 1e3
        } = t, l = {
            ...e,
            event_id: e.event_id || r.event_id || Me(),
            timestamp: e.timestamp || Gr()
        }, E = r.integrations || t.integrations.map(B => B.name);
        Ih(l, t), Vh(l, E), e.type === void 0 && Oh(l, t.stackParser);
        const x = Mh(i, r.captureContext);
        r.mechanism && zt(l, r.mechanism);
        const h = s && s.getEventProcessors ? s.getEventProcessors() : [],
            b = Uh().getScopeData();
        if (a) {
            const B = a.getScopeData();
            Ts(b, B)
        }
        if (x) {
            const B = x.getScopeData();
            Ts(b, B)
        }
        const L = [...r.attachments || [], ...b.attachments];
        L.length && (r.attachments = L), Qa(l, b);
        const A = [...h, ...oi(), ...b.eventProcessors];
        return mr(A, l, r).then(B => (B && Ph(B), typeof f == "number" && f > 0 ? kh(B, f, u) : B))
    }

    function Ih(t, e) {
        const {
            environment: r,
            release: i,
            dist: s,
            maxValueLength: a = 250
        } = e;
        "environment" in t || (t.environment = "environment" in e ? r : li), t.release === void 0 && i !== void 0 && (t.release = i), t.dist === void 0 && s !== void 0 && (t.dist = s), t.message && (t.message = Tt(t.message, a));
        const f = t.exception && t.exception.values && t.exception.values[0];
        f && f.value && (f.value = Tt(f.value, a));
        const u = t.request;
        u && u.url && (u.url = Tt(u.url, a))
    }
    const Ss = new WeakMap;

    function Oh(t, e) {
        const r = H._sentryDebugIds;
        if (!r) return;
        let i;
        const s = Ss.get(e);
        s ? i = s : (i = new Map, Ss.set(e, i));
        const a = Object.keys(r).reduce((f, u) => {
            let l;
            const E = i.get(u);
            E ? l = E : (l = e(u), i.set(u, l));
            for (let x = l.length - 1; x >= 0; x--) {
                const h = l[x];
                if (h.filename) {
                    f[h.filename] = r[u];
                    break
                }
            }
            return f
        }, {});
        try {
            t.exception.values.forEach(f => {
                f.stacktrace.frames.forEach(u => {
                    u.filename && (u.debug_id = a[u.filename])
                })
            })
        } catch {}
    }

    function Ph(t) {
        const e = {};
        try {
            t.exception.values.forEach(i => {
                i.stacktrace.frames.forEach(s => {
                    s.debug_id && (s.abs_path ? e[s.abs_path] = s.debug_id : s.filename && (e[s.filename] = s.debug_id), delete s.debug_id)
                })
            })
        } catch {}
        if (Object.keys(e).length === 0) return;
        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
        const r = t.debug_meta.images;
        Object.keys(e).forEach(i => {
            r.push({
                type: "sourcemap",
                code_file: i,
                debug_id: e[i]
            })
        })
    }

    function Vh(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
    }

    function kh(t, e, r) {
        if (!t) return null;
        const i = {
            ...t,
            ...t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map(s => ({
                    ...s,
                    ...s.data && {
                        data: Xe(s.data, e, r)
                    }
                }))
            },
            ...t.user && {
                user: Xe(t.user, e, r)
            },
            ...t.contexts && {
                contexts: Xe(t.contexts, e, r)
            },
            ...t.extra && {
                extra: Xe(t.extra, e, r)
            }
        };
        return t.contexts && t.contexts.trace && i.contexts && (i.contexts.trace = t.contexts.trace, t.contexts.trace.data && (i.contexts.trace.data = Xe(t.contexts.trace.data, e, r))), t.spans && (i.spans = t.spans.map(s => (s.data && (s.data = Xe(s.data, e, r)), s))), i
    }

    function Mh(t, e) {
        if (!e) return t;
        const r = t ? t.clone() : new Ue;
        return r.update(e), r
    }

    function $h(t) {
        if (t) return Gh(t) ? {
            captureContext: t
        } : jh(t) ? {
            captureContext: t
        } : t
    }

    function Gh(t) {
        return t instanceof Ue || typeof t == "function"
    }
    const Xh = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

    function jh(t) {
        return Object.keys(t).some(e => Xh.includes(e))
    }

    function Fh(t, e) {
        return Te().captureException(t, $h(e))
    }

    function qh(t, e) {
        const r = typeof e == "string" ? e : void 0,
            i = typeof e != "string" ? {
                captureContext: e
            } : void 0;
        return Te().captureMessage(t, r, i)
    }

    function rf(t, e) {
        return Te().captureEvent(t, e)
    }

    function it(t, e) {
        Te().addBreadcrumb(t, e)
    }

    function nf(t) {
        Te().setTags(t)
    }

    function Hh(t) {
        return Te().withScope(t)
    }

    function de() {
        return Te().getClient()
    }

    function Wh(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function zh(t, e, r, i) {
        const s = Ja(r),
            a = {
                sent_at: new Date().toISOString(),
                ...s && {
                    sdk: s
                },
                ...!!i && e && {
                    dsn: er(e)
                }
            },
            f = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t.toJSON()];
        return Ot(a, [f])
    }

    function Yh(t, e, r, i) {
        const s = Ja(r),
            a = t.type && t.type !== "replay_event" ? t.type : "event";
        Wh(t, r && r.sdk);
        const f = Eh(t, s, i, e);
        return delete t.sdkProcessingMetadata, Ot(f, [
            [{
                type: a
            }, t]
        ])
    }
    const Jh = "7";

    function Qh(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
            r = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${r}${t.path?`/${t.path}`:""}/api/`
    }

    function Zh(t) {
        return `${Qh(t)}${t.projectId}/envelope/`
    }

    function eR(t, e) {
        return g_({
            sentry_key: t.publicKey,
            sentry_version: Jh,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function tR(t, e = {}) {
        const r = typeof e == "string" ? e : e.tunnel,
            i = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return r || `${Zh(t)}?${eR(t,i)}`
    }
    const ys = [];

    function rR(t) {
        const e = {};
        return t.forEach(r => {
            const {
                name: i
            } = r, s = e[i];
            s && !s.isDefaultInstance && r.isDefaultInstance || (e[i] = r)
        }), Object.keys(e).map(r => e[r])
    }

    function nR(t) {
        const e = t.defaultIntegrations || [],
            r = t.integrations;
        e.forEach(f => {
            f.isDefaultInstance = !0
        });
        let i;
        Array.isArray(r) ? i = [...e, ...r] : typeof r == "function" ? i = Fa(r(e)) : i = e;
        const s = rR(i),
            a = sR(s, f => f.name === "Debug");
        if (a !== -1) {
            const [f] = s.splice(a, 1);
            s.push(f)
        }
        return s
    }

    function iR(t, e) {
        const r = {};
        return e.forEach(i => {
            i && sf(t, i, r)
        }), r
    }

    function sf(t, e, r) {
        if (r[e.name] = e, ys.indexOf(e.name) === -1 && (e.setupOnce(bh, Te), ys.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), t.on && typeof e.preprocessEvent == "function") {
            const i = e.preprocessEvent.bind(e);
            t.on("preprocessEvent", (s, a) => i(s, a, t))
        }
        if (t.addEventProcessor && typeof e.processEvent == "function") {
            const i = e.processEvent.bind(e),
                s = Object.assign((a, f) => i(a, f, t), {
                    id: e.name
                });
            t.addEventProcessor(s)
        }
        Z && N.log(`Integration installed: ${e.name}`)
    }

    function sR(t, e) {
        for (let r = 0; r < t.length; r++)
            if (e(t[r]) === !0) return r;
        return -1
    }

    function Je(t, e) {
        return Object.assign(function(...i) {
            return {
                setupOnce: () => {},
                ...e(...i)
            }
        }, {
            id: t
        })
    }

    function aR(t) {
        let e = "";
        for (const r of t) {
            const i = Object.entries(r.tags),
                s = i.length > 0 ? `|#${i.map(([a,f])=>`${a}:${f}`).join(",")}` : "";
            e += `${r.name}@${r.unit}:${r.metric}|${r.metricType}${s}|T${r.timestamp}
`
        }
        return e
    }

    function fR(t, e, r, i) {
        const s = {
            sent_at: new Date().toISOString()
        };
        r && r.sdk && (s.sdk = {
            name: r.sdk.name,
            version: r.sdk.version
        }), i && e && (s.dsn = er(e));
        const a = uR(t);
        return Ot(s, [a])
    }

    function uR(t) {
        const e = aR(t);
        return [{
            type: "statsd",
            length: e.length
        }, e]
    }
    const As = "Not capturing exception because it's already been captured.";
    class lR {
        constructor(e) {
            if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = T_(e.dsn) : Z && N.warn("No DSN provided, client will not send events."), this._dsn) {
                const r = tR(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: r
                })
            }
        }
        captureException(e, r, i) {
            if (ps(e)) {
                Z && N.log(As);
                return
            }
            let s = r && r.event_id;
            return this._process(this.eventFromException(e, r).then(a => this._captureEvent(a, r, i)).then(a => {
                s = a
            })), s
        }
        captureMessage(e, r, i, s) {
            let a = i && i.event_id;
            const f = ii(e) ? this.eventFromMessage(String(e), r, i) : this.eventFromException(e, i);
            return this._process(f.then(u => this._captureEvent(u, i, s)).then(u => {
                a = u
            })), a
        }
        captureEvent(e, r, i) {
            if (r && r.originalException && ps(r.originalException)) {
                Z && N.log(As);
                return
            }
            let s = r && r.event_id;
            return this._process(this._captureEvent(e, r, i).then(a => {
                s = a
            })), s
        }
        captureSession(e) {
            typeof e.release != "string" ? Z && N.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), mt(e, {
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
            return r ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(e).then(i => r.flush(e).then(s => i && s))) : At(!0)
        }
        close(e) {
            return this.flush(e).then(r => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), r))
        }
        getEventProcessors() {
            return this._eventProcessors
        }
        addEventProcessor(e) {
            this._eventProcessors.push(e)
        }
        setupIntegrations(e) {
            (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && (this._integrations = iR(this, this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return Z && N.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
            }
        }
        addIntegration(e) {
            sf(this, e, this._integrations)
        }
        sendEvent(e, r = {}) {
            this.emit("beforeSendEvent", e, r);
            let i = Yh(e, this._dsn, this._options._metadata, this._options.tunnel);
            for (const a of r.attachments || []) i = ah(i, lh(a, this._options.transportOptions && this._options.transportOptions.textEncoder));
            const s = this._sendEnvelope(i);
            s && s.then(a => this.emit("afterSendEvent", e, a), null)
        }
        sendSession(e) {
            const r = zh(e, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(r)
        }
        recordDroppedEvent(e, r, i) {
            if (this._options.sendClientReports) {
                const s = `${e}:${r}`;
                Z && N.log(`Adding outcome: "${s}"`), this._outcomes[s] = this._outcomes[s] + 1 || 1
            }
        }
        captureAggregateMetrics(e) {
            Z && N.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
            const r = fR(e, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(r)
        }
        on(e, r) {
            this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(r)
        }
        emit(e, ...r) {
            this._hooks[e] && this._hooks[e].forEach(i => i(...r))
        }
        _updateSessionFromEvent(e, r) {
            let i = !1,
                s = !1;
            const a = r.exception && r.exception.values;
            if (a) {
                s = !0;
                for (const l of a) {
                    const E = l.mechanism;
                    if (E && E.handled === !1) {
                        i = !0;
                        break
                    }
                }
            }
            const f = e.status === "ok";
            (f && e.errors === 0 || f && i) && (mt(e, {
                ...i && {
                    status: "crashed"
                },
                errors: e.errors || Number(s || i)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new _e(r => {
                let i = 0;
                const s = 1,
                    a = setInterval(() => {
                        this._numProcessing == 0 ? (clearInterval(a), r(!0)) : (i += s, e && i >= e && (clearInterval(a), r(!1)))
                    }, s)
            })
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._transport !== void 0
        }
        _prepareEvent(e, r, i, s = Kh()) {
            const a = this.getOptions(),
                f = Object.keys(this._integrations);
            return !r.integrations && f.length > 0 && (r.integrations = f), this.emit("preprocessEvent", e, r), Dh(a, e, r, i, this, s).then(u => {
                if (u === null) return u;
                const {
                    propagationContext: l
                } = u.sdkProcessingMetadata || {};
                if (!(u.contexts && u.contexts.trace) && l) {
                    const {
                        traceId: x,
                        spanId: h,
                        parentSpanId: b,
                        dsc: L
                    } = l;
                    u.contexts = {
                        trace: {
                            trace_id: x,
                            span_id: h,
                            parent_span_id: b
                        },
                        ...u.contexts
                    };
                    const A = L || wh(x, this, i);
                    u.sdkProcessingMetadata = {
                        dynamicSamplingContext: A,
                        ...u.sdkProcessingMetadata
                    }
                }
                return u
            })
        }
        _captureEvent(e, r = {}, i) {
            return this._processEvent(e, r, i).then(s => s.event_id, s => {
                if (Z) {
                    const a = s;
                    a.logLevel === "log" ? N.log(a.message) : N.warn(a)
                }
            })
        }
        _processEvent(e, r, i) {
            const s = this.getOptions(),
                {
                    sampleRate: a
                } = s,
                f = ff(e),
                u = af(e),
                l = e.type || "error",
                E = `before send for type \`${l}\``;
            if (u && typeof a == "number" && Math.random() > a) return this.recordDroppedEvent("sample_rate", "error", e), ui(new ve(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"));
            const x = l === "replay_event" ? "replay" : l;
            return this._prepareEvent(e, r, i).then(h => {
                if (h === null) throw this.recordDroppedEvent("event_processor", x, e), new ve("An event processor returned `null`, will not send event.", "log");
                if (r.data && r.data.__sentry__ === !0) return h;
                const L = ER(s, h, r);
                return oR(L, E)
            }).then(h => {
                if (h === null) throw this.recordDroppedEvent("before_send", x, e), new ve(`${E} returned \`null\`, will not send event.`, "log");
                const b = i && i.getSession();
                !f && b && this._updateSessionFromEvent(b, h);
                const L = h.transaction_info;
                if (f && L && h.transaction !== e.transaction) {
                    const A = "custom";
                    h.transaction_info = {
                        ...L,
                        source: A
                    }
                }
                return this.sendEvent(h, r), h
            }).then(null, h => {
                throw h instanceof ve ? h : (this.captureException(h, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: h
                }), new ve(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${h}`))
            })
        }
        _process(e) {
            this._numProcessing++, e.then(r => (this._numProcessing--, r), r => (this._numProcessing--, r))
        }
        _sendEnvelope(e) {
            if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) return this._transport.send(e).then(null, r => {
                Z && N.error("Error while sending event:", r)
            });
            Z && N.error("Transport disabled")
        }
        _clearOutcomes() {
            const e = this._outcomes;
            return this._outcomes = {}, Object.keys(e).map(r => {
                const [i, s] = r.split(":");
                return {
                    reason: i,
                    category: s,
                    quantity: e[r]
                }
            })
        }
    }

    function oR(t, e) {
        const r = `${e} must return \`null\` or a valid event.`;
        if (si(t)) return t.then(i => {
            if (!yt(i) && i !== null) throw new ve(r);
            return i
        }, i => {
            throw new ve(`${e} rejected with ${i}`)
        });
        if (!yt(t) && t !== null) throw new ve(r);
        return t
    }

    function ER(t, e, r) {
        const {
            beforeSend: i,
            beforeSendTransaction: s
        } = t;
        return af(e) && i ? i(e, r) : ff(e) && s ? s(e, r) : e
    }

    function af(t) {
        return t.type === void 0
    }

    function ff(t) {
        return t.type === "transaction"
    }

    function pR(t, e) {
        e.debug === !0 && (Z ? N.enable() : Mr(() => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
        }));
        const r = Te();
        r.getScope().update(e.initialScope);
        const s = new t(e);
        r.bindClient(s)
    }
    const cR = 30;

    function uf(t, e, r = th(t.bufferSize || cR)) {
        let i = {};
        const s = f => r.drain(f);

        function a(f) {
            const u = [];
            if (Rs(f, (h, b) => {
                    const L = bs(b);
                    if (hh(i, L)) {
                        const A = ms(h, b);
                        t.recordDroppedEvent("ratelimit_backoff", L, A)
                    } else u.push(h)
                }), u.length === 0) return At();
            const l = Ot(f[0], u),
                E = h => {
                    Rs(l, (b, L) => {
                        const A = ms(b, L);
                        t.recordDroppedEvent(h, bs(L), A)
                    })
                },
                x = () => e({
                    body: fh(l, t.textEncoder)
                }).then(h => (h.statusCode !== void 0 && (h.statusCode < 200 || h.statusCode >= 300) && Z && N.warn(`Sentry responded with status code ${h.statusCode} to sent event.`), i = Rh(i, h), h), h => {
                    throw E("network_error"), h
                });
            return r.add(x).then(h => h, h => {
                if (h instanceof ve) return Z && N.error("Skipped sending event because buffer is full."), E("queue_overflow"), At();
                throw h
            })
        }
        return a.__sentry__baseTransport__ = !0, {
            send: a,
            flush: s
        }
    }

    function ms(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
    }
    let Cs;
    const lf = "FunctionToString",
        xR = () => ({
            name: lf,
            setupOnce() {
                Cs = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...t) {
                        const e = fi(this) || this;
                        return Cs.apply(e, t)
                    }
                } catch {}
            }
        }),
        _R = Je(lf, xR),
        hR = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        RR = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
        of = "InboundFilters",
        bR = t => ({
            name: of,
            processEvent(e, r, i) {
                const s = i.getOptions(),
                    a = gR(t, s);
                return LR(e, a) ? null : e
            }
        }),
        TR = Je(of, bR);

    function gR(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : hR],
            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : RR],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function LR(t, e) {
        return e.ignoreInternal && vR(t) ? (Z && N.warn(`Event dropped due to being internal Sentry Error.
Event: ${je(t)}`), !0) : SR(t, e.ignoreErrors) ? (Z && N.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${je(t)}`), !0) : yR(t, e.ignoreTransactions) ? (Z && N.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${je(t)}`), !0) : AR(t, e.denyUrls) ? (Z && N.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${je(t)}.
Url: ${Cr(t)}`), !0) : mR(t, e.allowUrls) ? !1 : (Z && N.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${je(t)}.
Url: ${Cr(t)}`), !0)
    }

    function SR(t, e) {
        return t.type || !e || !e.length ? !1 : CR(t).some(r => Vr(r, e))
    }

    function yR(t, e) {
        if (t.type !== "transaction" || !e || !e.length) return !1;
        const r = t.transaction;
        return r ? Vr(r, e) : !1
    }

    function AR(t, e) {
        if (!e || !e.length) return !1;
        const r = Cr(t);
        return r ? Vr(r, e) : !1
    }

    function mR(t, e) {
        if (!e || !e.length) return !0;
        const r = Cr(t);
        return r ? Vr(r, e) : !0
    }

    function CR(t) {
        const e = [];
        t.message && e.push(t.message);
        let r;
        try {
            r = t.exception.values[t.exception.values.length - 1]
        } catch {}
        return r && r.value && (e.push(r.value), r.type && e.push(`${r.type}: ${r.value}`)), Z && e.length === 0 && N.error(`Could not extract message for event ${je(t)}`), e
    }

    function vR(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function UR(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
            const r = t[e];
            if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") return r.filename || null
        }
        return null
    }

    function Cr(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? UR(e) : null
        } catch {
            return Z && N.error(`Cannot extract url for event ${je(t)}`), null
        }
    }
    const q = H;
    let Un = 0;

    function Ef() {
        return Un > 0
    }

    function BR() {
        Un++, setTimeout(() => {
            Un--
        })
    }

    function Ct(t, e = {}, r) {
        if (typeof t != "function") return t;
        try {
            const s = t.__sentry_wrapped__;
            if (s) return s;
            if (fi(t)) return t
        } catch {
            return t
        }
        const i = function() {
            const s = Array.prototype.slice.call(arguments);
            try {
                r && typeof r == "function" && r.apply(this, arguments);
                const a = s.map(f => Ct(f, e));
                return t.apply(this, a)
            } catch (a) {
                throw BR(), Hh(f => {
                    f.addEventProcessor(u => (e.mechanism && (Rn(u, void 0, void 0), zt(u, e.mechanism)), u.extra = {
                        ...u.extra,
                        arguments: s
                    }, u)), Fh(a)
                }), a
            }
        };
        try {
            for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
        } catch {}
        Ma(i, t), Wt(t, "__sentry_wrapped__", i);
        try {
            Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return i
    }
    const Oe = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;

    function pf(t, e) {
        const r = Ei(t, e),
            i = {
                type: e && e.name,
                value: wR(e)
            };
        return r.length && (i.stacktrace = {
            frames: r
        }), i.type === void 0 && i.value === "" && (i.value = "Unrecoverable error caught"), i
    }

    function KR(t, e, r, i) {
        const s = de(),
            a = s && s.getOptions().normalizeDepth,
            f = {
                exception: {
                    values: [{
                        type: Pr(e) ? e.constructor.name : i ? "UnhandledRejection" : "Error",
                        value: OR(e, {
                            isUnhandledRejection: i
                        })
                    }]
                },
                extra: {
                    __serialized__: Wa(e, a)
                }
            };
        if (r) {
            const u = Ei(t, r);
            u.length && (f.exception.values[0].stacktrace = {
                frames: u
            })
        }
        return f
    }

    function En(t, e) {
        return {
            exception: {
                values: [pf(t, e)]
            }
        }
    }

    function Ei(t, e) {
        const r = e.stacktrace || e.stack || "",
            i = NR(e);
        try {
            return t(r, i)
        } catch {}
        return []
    }
    const dR = /Minified React error #\d+;/i;

    function NR(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (dR.test(t.message)) return 1
        }
        return 0
    }

    function wR(t) {
        const e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function DR(t, e, r, i) {
        const s = r && r.syntheticException || void 0,
            a = pi(t, e, s, i);
        return zt(a), a.level = "error", r && r.event_id && (a.event_id = r.event_id), At(a)
    }

    function IR(t, e, r = "info", i, s) {
        const a = i && i.syntheticException || void 0,
            f = Bn(t, e, a, s);
        return f.level = r, i && i.event_id && (f.event_id = i.event_id), At(f)
    }

    function pi(t, e, r, i, s) {
        let a;
        if (ni(e) && e.error) return En(t, e.error);
        if (ns(e) || t_(e)) {
            const f = e;
            if ("stack" in e) a = En(t, e);
            else {
                const u = f.name || (ns(f) ? "DOMError" : "DOMException"),
                    l = f.message ? `${u}: ${f.message}` : u;
                a = Bn(t, l, r, i), Rn(a, l)
            }
            return "code" in f && (a.tags = {
                ...a.tags,
                "DOMException.code": `${f.code}`
            }), a
        }
        return Ia(e) ? En(t, e) : yt(e) || Pr(e) ? (a = KR(t, e, r, s), zt(a, {
            synthetic: !0
        }), a) : (a = Bn(t, e, r, i), Rn(a, `${e}`, void 0), zt(a, {
            synthetic: !0
        }), a)
    }

    function Bn(t, e, r, i) {
        const s = {
            message: e
        };
        if (i && r) {
            const a = Ei(t, r);
            a.length && (s.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: a
                    }
                }]
            })
        }
        return s
    }

    function OR(t, {
        isUnhandledRejection: e
    }) {
        const r = L_(t),
            i = e ? "promise rejection" : "exception";
        return ni(t) ? `Event \`ErrorEvent\` captured as ${i} with message \`${t.message}\`` : Pr(t) ? `Event \`${PR(t)}\` (type=${t.type}) captured as ${i}` : `Object captured as ${i} with keys: ${r}`
    }

    function PR(t) {
        try {
            const e = Object.getPrototypeOf(t);
            return e ? e.constructor.name : void 0
        } catch {}
    }

    function VR(t, {
        metadata: e,
        tunnel: r,
        dsn: i
    }) {
        const s = {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...e && e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                },
                ...!!r && !!i && {
                    dsn: er(i)
                }
            },
            a = kR(t);
        return Ot(s, [a])
    }

    function kR(t) {
        return [{
            type: "user_report"
        }, t]
    }
    class MR extends lR {
        constructor(e) {
            const r = q.SENTRY_SDK_SOURCE || H_();
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${r}:@sentry/browser`,
                    version: Cn
                }],
                version: Cn
            }, super(e), e.sendClientReports && q.document && q.document.addEventListener("visibilitychange", () => {
                q.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, r) {
            return DR(this._options.stackParser, e, r, this._options.attachStacktrace)
        }
        eventFromMessage(e, r = "info", i) {
            return IR(this._options.stackParser, e, r, i, this._options.attachStacktrace)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) {
                Oe && N.warn("SDK not enabled, will not capture user feedback.");
                return
            }
            const r = VR(e, {
                metadata: this.getSdkMetadata(),
                dsn: this.getDsn(),
                tunnel: this.getOptions().tunnel
            });
            this._sendEnvelope(r)
        }
        _prepareEvent(e, r, i) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, r, i)
        }
        _flushOutcomes() {
            const e = this._clearOutcomes();
            if (e.length === 0) {
                Oe && N.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                Oe && N.log("No dsn provided, will not send outcomes");
                return
            }
            Oe && N.log("Sending outcomes:", e);
            const r = ph(e, this._options.tunnel && er(this._dsn));
            this._sendEnvelope(r)
        }
    }
    let jt;

    function $R() {
        if (jt) return jt;
        if (Ln(q.fetch)) return jt = q.fetch.bind(q);
        const t = q.document;
        let e = q.fetch;
        if (t && typeof t.createElement == "function") try {
            const r = t.createElement("iframe");
            r.hidden = !0, t.head.appendChild(r);
            const i = r.contentWindow;
            i && i.fetch && (e = i.fetch), t.head.removeChild(r)
        } catch (r) {
            Oe && N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r)
        }
        return jt = e.bind(q)
    }

    function GR() {
        jt = void 0
    }

    function XR(t, e = $R()) {
        let r = 0,
            i = 0;

        function s(a) {
            const f = a.body.length;
            r += f, i++;
            const u = {
                body: a.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                keepalive: r <= 6e4 && i < 15,
                ...t.fetchOptions
            };
            try {
                return e(t.url, u).then(l => (r -= f, i--, {
                    statusCode: l.status,
                    headers: {
                        "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": l.headers.get("Retry-After")
                    }
                }))
            } catch (l) {
                return GR(), r -= f, i--, ui(l)
            }
        }
        return uf(t, s)
    }
    const jR = 4;

    function FR(t) {
        function e(r) {
            return new _e((i, s) => {
                const a = new XMLHttpRequest;
                a.onerror = s, a.onreadystatechange = () => {
                    a.readyState === jR && i({
                        statusCode: a.status,
                        headers: {
                            "x-sentry-rate-limits": a.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": a.getResponseHeader("Retry-After")
                        }
                    })
                }, a.open("POST", t.url);
                for (const f in t.headers) Object.prototype.hasOwnProperty.call(t.headers, f) && a.setRequestHeader(f, t.headers[f]);
                a.send(r.body)
            })
        }
        return uf(t, e)
    }
    const jr = "?",
        qR = 30,
        HR = 40,
        WR = 50;

    function ci(t, e, r, i) {
        const s = {
            filename: t,
            function: e,
            in_app: !0
        };
        return r !== void 0 && (s.lineno = r), i !== void 0 && (s.colno = i), s
    }
    const zR = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        YR = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        JR = t => {
            const e = zR.exec(t);
            if (e) {
                if (e[2] && e[2].indexOf("eval") === 0) {
                    const a = YR.exec(e[2]);
                    a && (e[2] = a[1], e[3] = a[2], e[4] = a[3])
                }
                const [i, s] = cf(e[1] || jr, e[2]);
                return ci(s, i, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        QR = [qR, JR],
        ZR = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        eb = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        tb = t => {
            const e = ZR.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const a = eb.exec(e[3]);
                    a && (e[1] = e[1] || "eval", e[3] = a[1], e[4] = a[2], e[5] = "")
                }
                let i = e[3],
                    s = e[1] || jr;
                return [s, i] = cf(s, i), ci(i, s, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        rb = [WR, tb],
        nb = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ib = t => {
            const e = nb.exec(t);
            return e ? ci(e[2], e[1] || jr, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        sb = [HR, ib],
        ab = [QR, rb, sb],
        fb = Xa(...ab),
        cf = (t, e) => {
            const r = t.indexOf("safari-extension") !== -1,
                i = t.indexOf("safari-web-extension") !== -1;
            return r || i ? [t.indexOf("@") !== -1 ? t.split("@")[0] : jr, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        },
        xf = "GlobalHandlers",
        ub = (t = {}) => {
            const e = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            };
            return {
                name: xf,
                setupOnce() {
                    Error.stackTraceLimit = 50
                },
                setup(r) {
                    e.onerror && (ob(r), vs("onerror")), e.onunhandledrejection && (Eb(r), vs("onunhandledrejection"))
                }
            }
        },
        lb = Je(xf, ub);

    function ob(t) {
        O_(e => {
            const {
                stackParser: r,
                attachStacktrace: i
            } = hf();
            if (de() !== t || Ef()) return;
            const {
                msg: s,
                url: a,
                line: f,
                column: u,
                error: l
            } = e, E = l === void 0 && ke(s) ? xb(s, a, f, u) : _f(pi(r, l || s, void 0, i, !1), a, f, u);
            E.level = "error", rf(E, {
                originalException: l,
                mechanism: {
                    handled: !1,
                    type: "onerror"
                }
            })
        })
    }

    function Eb(t) {
        V_(e => {
            const {
                stackParser: r,
                attachStacktrace: i
            } = hf();
            if (de() !== t || Ef()) return;
            const s = pb(e),
                a = ii(s) ? cb(s) : pi(r, s, void 0, i, !0);
            a.level = "error", rf(a, {
                originalException: s,
                mechanism: {
                    handled: !1,
                    type: "onunhandledrejection"
                }
            })
        })
    }

    function pb(t) {
        if (ii(t)) return t;
        const e = t;
        try {
            if ("reason" in e) return e.reason;
            if ("detail" in e && "reason" in e.detail) return e.detail.reason
        } catch {}
        return t
    }

    function cb(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function xb(t, e, r, i) {
        const s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let a = ni(t) ? t.message : t,
            f = "Error";
        const u = a.match(s);
        return u && (f = u[1], a = u[2]), _f({
            exception: {
                values: [{
                    type: f,
                    value: a
                }]
            }
        }, e, r, i)
    }

    function _f(t, e, r, i) {
        const s = t.exception = t.exception || {},
            a = s.values = s.values || [],
            f = a[0] = a[0] || {},
            u = f.stacktrace = f.stacktrace || {},
            l = u.frames = u.frames || [],
            E = isNaN(parseInt(i, 10)) ? void 0 : i,
            x = isNaN(parseInt(r, 10)) ? void 0 : r,
            h = ke(e) && e.length > 0 ? e : E_();
        return l.length === 0 && l.push({
            colno: E,
            filename: h,
            function: "?",
            in_app: !0,
            lineno: x
        }), t
    }

    function vs(t) {
        Oe && N.log(`Global Handler attached: ${t}`)
    }

    function hf() {
        const t = de();
        return t && t.getOptions() || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    }
    const _b = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        Rf = "TryCatch",
        hb = (t = {}) => {
            const e = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            };
            return {
                name: Rf,
                setupOnce() {
                    e.setTimeout && ae(q, "setTimeout", Us), e.setInterval && ae(q, "setInterval", Us), e.requestAnimationFrame && ae(q, "requestAnimationFrame", bb), e.XMLHttpRequest && "XMLHttpRequest" in q && ae(XMLHttpRequest.prototype, "send", Tb);
                    const r = e.eventTarget;
                    r && (Array.isArray(r) ? r : _b).forEach(gb)
                }
            }
        },
        Rb = Je(Rf, hb);

    function Us(t) {
        return function(...e) {
            const r = e[0];
            return e[0] = Ct(r, {
                mechanism: {
                    data: {
                        function: We(t)
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function bb(t) {
        return function(e) {
            return t.apply(this, [Ct(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: We(t)
                    },
                    handled: !1,
                    type: "instrument"
                }
            })])
        }
    }

    function Tb(t) {
        return function(...e) {
            const r = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(s => {
                s in r && typeof r[s] == "function" && ae(r, s, function(a) {
                    const f = {
                            mechanism: {
                                data: {
                                    function: s,
                                    handler: We(a)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        },
                        u = fi(a);
                    return u && (f.mechanism.data.handler = We(u)), Ct(a, f)
                })
            }), t.apply(this, e)
        }
    }

    function gb(t) {
        const e = q,
            r = e[t] && e[t].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (ae(r, "addEventListener", function(i) {
            return function(s, a, f) {
                try {
                    typeof a.handleEvent == "function" && (a.handleEvent = Ct(a.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: We(a),
                                target: t
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return i.apply(this, [s, Ct(a, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: We(a),
                            target: t
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }), f])
            }
        }), ae(r, "removeEventListener", function(i) {
            return function(s, a, f) {
                const u = a;
                try {
                    const l = u && u.__sentry_wrapped__;
                    l && i.call(this, s, l, f)
                } catch {}
                return i.call(this, s, u, f)
            }
        }))
    }
    const lr = 1024,
        bf = "Breadcrumbs",
        Lb = (t = {}) => {
            const e = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...t
            };
            return {
                name: bf,
                setup(r) {
                    e.console && A_(mb(r)), e.dom && v_(Ab(r, e.dom)), e.xhr && X_(Cb(r)), e.fetch && w_(vb(r)), e.history && Ha(Ub(r)), e.sentry && r.on && r.on("beforeSendEvent", yb(r))
                }
            }
        },
        Sb = Je(bf, Lb);

    function yb(t) {
        return function(r) {
            de() === t && it({
                category: `sentry.${r.type==="transaction"?"transaction":"event"}`,
                event_id: r.event_id,
                level: r.level,
                message: je(r)
            }, {
                event: r
            })
        }
    }

    function Ab(t, e) {
        return function(i) {
            if (de() !== t) return;
            let s, a, f = typeof e == "object" ? e.serializeAttribute : void 0,
                u = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
            u && u > lr && (Oe && N.warn(`\`dom.maxStringLength\` cannot exceed ${lr}, but a value of ${u} was configured. Sentry will use ${lr} instead.`), u = lr), typeof f == "string" && (f = [f]);
            try {
                const E = i.event,
                    x = Bb(E) ? E.target : E;
                s = Va(x, {
                    keyAttrs: f,
                    maxStringLength: u
                }), a = p_(x)
            } catch {
                s = "<unknown>"
            }
            if (s.length === 0) return;
            const l = {
                category: `ui.${i.name}`,
                message: s
            };
            a && (l.data = {
                "ui.component_name": a
            }), it(l, {
                event: i.event,
                name: i.name,
                global: i.global
            })
        }
    }

    function mb(t) {
        return function(r) {
            if (de() !== t) return;
            const i = {
                category: "console",
                data: {
                    arguments: r.args,
                    logger: "console"
                },
                level: nh(r.level),
                message: is(r.args, " ")
            };
            if (r.level === "assert")
                if (r.args[0] === !1) i.message = `Assertion failed: ${is(r.args.slice(1)," ")||"console.assert"}`, i.data.arguments = r.args.slice(1);
                else return;
            it(i, {
                input: r.args,
                level: r.level
            })
        }
    }

    function Cb(t) {
        return function(r) {
            if (de() !== t) return;
            const {
                startTimestamp: i,
                endTimestamp: s
            } = r, a = r.xhr[Xt];
            if (!i || !s || !a) return;
            const {
                method: f,
                url: u,
                status_code: l,
                body: E
            } = a, x = {
                method: f,
                url: u,
                status_code: l
            }, h = {
                xhr: r.xhr,
                input: E,
                startTimestamp: i,
                endTimestamp: s
            };
            it({
                category: "xhr",
                data: x,
                type: "http"
            }, h)
        }
    }

    function vb(t) {
        return function(r) {
            if (de() !== t) return;
            const {
                startTimestamp: i,
                endTimestamp: s
            } = r;
            if (s && !(r.fetchData.url.match(/sentry_key/) && r.fetchData.method === "POST"))
                if (r.error) {
                    const a = r.fetchData,
                        f = {
                            data: r.error,
                            input: r.args,
                            startTimestamp: i,
                            endTimestamp: s
                        };
                    it({
                        category: "fetch",
                        data: a,
                        level: "error",
                        type: "http"
                    }, f)
                } else {
                    const a = r.response,
                        f = {
                            ...r.fetchData,
                            status_code: a && a.status
                        },
                        u = {
                            input: r.args,
                            response: a,
                            startTimestamp: i,
                            endTimestamp: s
                        };
                    it({
                        category: "fetch",
                        data: f,
                        type: "http"
                    }, u)
                }
        }
    }

    function Ub(t) {
        return function(r) {
            if (de() !== t) return;
            let i = r.from,
                s = r.to;
            const a = un(q.location.href);
            let f = i ? un(i) : void 0;
            const u = un(s);
            (!f || !f.path) && (f = a), a.protocol === u.protocol && a.host === u.host && (s = u.relative), a.protocol === f.protocol && a.host === f.host && (i = f.relative), it({
                category: "navigation",
                data: {
                    from: i,
                    to: s
                }
            })
        }
    }

    function Bb(t) {
        return !!t && !!t.target
    }
    const Kb = "cause",
        db = 5,
        Tf = "LinkedErrors",
        Nb = (t = {}) => {
            const e = t.limit || db,
                r = t.key || Kb;
            return {
                name: Tf,
                preprocessEvent(i, s, a) {
                    const f = a.getOptions();
                    f_(pf, f.stackParser, f.maxValueLength, r, e, i, s)
                }
            }
        },
        wb = Je(Tf, Nb),
        gf = "HttpContext",
        Db = () => ({
            name: gf,
            preprocessEvent(t) {
                if (!q.navigator && !q.location && !q.document) return;
                const e = t.request && t.request.url || q.location && q.location.href,
                    {
                        referrer: r
                    } = q.document || {},
                    {
                        userAgent: i
                    } = q.navigator || {},
                    s = {
                        ...t.request && t.request.headers,
                        ...r && {
                            Referer: r
                        },
                        ...i && {
                            "User-Agent": i
                        }
                    },
                    a = {
                        ...t.request,
                        ...e && {
                            url: e
                        },
                        headers: s
                    };
                t.request = a
            }
        }),
        Ib = Je(gf, Db),
        Lf = "Dedupe",
        Ob = () => {
            let t;
            return {
                name: Lf,
                processEvent(e) {
                    if (e.type) return e;
                    try {
                        if (Vb(e, t)) return Oe && N.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {}
                    return t = e
                }
            }
        },
        Pb = Je(Lf, Ob);

    function Vb(t, e) {
        return e ? !!(kb(t, e) || Mb(t, e)) : !1
    }

    function kb(t, e) {
        const r = t.message,
            i = e.message;
        return !(!r && !i || r && !i || !r && i || r !== i || !yf(t, e) || !Sf(t, e))
    }

    function Mb(t, e) {
        const r = Bs(e),
            i = Bs(t);
        return !(!r || !i || r.type !== i.type || r.value !== i.value || !yf(t, e) || !Sf(t, e))
    }

    function Sf(t, e) {
        let r = Ks(t),
            i = Ks(e);
        if (!r && !i) return !0;
        if (r && !i || !r && i || (r = r, i = i, i.length !== r.length)) return !1;
        for (let s = 0; s < i.length; s++) {
            const a = i[s],
                f = r[s];
            if (a.filename !== f.filename || a.lineno !== f.lineno || a.colno !== f.colno || a.function !== f.function) return !1
        }
        return !0
    }

    function yf(t, e) {
        let r = t.fingerprint,
            i = e.fingerprint;
        if (!r && !i) return !0;
        if (r && !i || !r && i) return !1;
        r = r, i = i;
        try {
            return r.join("") === i.join("")
        } catch {
            return !1
        }
    }

    function Bs(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function Ks(t) {
        const e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const $b = [new TR, new _R, new Rb, new Sb, new lb, new wb, new Pb, new Ib];

    function Gb(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = $b), t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__), q.SENTRY_RELEASE && q.SENTRY_RELEASE.id && (t.release = q.SENTRY_RELEASE.id)), t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: S_(t.stackParser || fb),
            integrations: nR(t),
            transport: t.transport || (qa() ? XR : FR)
        };
        pR(MR, e), t.autoSessionTracking && Xb()
    }

    function ds(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function Xb() {
        if (typeof q.document > "u") {
            Oe && N.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const t = Te();
        t.captureSession && (ds(t), Ha(({
            from: e,
            to: r
        }) => {
            e !== void 0 && e !== r && ds(Te())
        }))
    }
    const jb = "UNABLE TO LOAD. TAP TO TRY AGAIN.",
        Fb = {
            RETRY: jb
        },
        qb = "CHARGEMENT IMPOSSIBLE. APPUYEZ POUR RÉESSAYER.",
        Hb = {
            RETRY: qb
        },
        Wb = "IMPOSSIBILE CARICARE. CLICCA PER RIPROVARE.",
        zb = {
            RETRY: Wb
        },
        Yb = "LADEN FEHLGESCHLAGEN. DRÜCKEN ZUM ERNEUT VERSUCHEN.",
        Jb = {
            RETRY: Yb
        },
        Qb = "CARGA FALLIDA. TOCA PARA VOLVER A INTENTARLO.",
        Zb = {
            RETRY: Qb
        },
        eT = "NO SE PUEDE CARGAR. TOCA PARA VOLVER A INTENTARLO.",
        tT = {
            RETRY: eT
        },
        rT = "NÃO FOI POSSÍVEL CARREGAR. TOQUE PARA TENTAR DE NOVO.",
        nT = {
            RETRY: rT
        },
        Ns = {
            en: Fb,
            fr: Hb,
            it: zb,
            de: Jb,
            es: Zb,
            "es-XL": tT,
            "pt-BR": nT
        };
    let iT = class {
        constructor(e) {
            le(this, "manifest");
            le(this, "registered", {});
            le(this, "register", e => {
                this.registered.connect = e.connect, this.registered.mount = e.mount, this.registered.info = e.info
            });
            le(this, "load", async e => {
                document.querySelectorAll("[data-tv-prefetch]").forEach(u => u.remove());
                const i = this.getBranchName(e),
                    s = window.tv.manifest.branches[i];
                if (!s) throw new Error(`[loader] Unknown branch "${i}" can not be found in manifest`);
                const a = s.bundles[e.app];
                if (!a) throw new Error(`[loader] Unknown app "${e.app}" can not be loaded from branch "${i}"`);
                try {
                    i === "** hmr **" ? await this.loadHMRBundle(a) : i === "** dist **" ? await this.loadDistBundle(a) : await this.loadS3Bundle(a)
                } catch {
                    console.error(`[loader] Unable to load "${e.app}" from branch "${i}"`), this.showLoaderError();
                    return
                }
                if (Xx("[loader] load success", {
                        app: e.app,
                        appVersion: a.version ?? s.version,
                        loaderVersion: window.tv.manifest.loader.version,
                        branch: i
                    }), !e.autoMount) return;
                const f = e;
                f.version = a.version ?? s.version, this.mount(f)
            });
            le(this, "connect", (e, r) => {
                if (!this.registered.connect) throw new Error("[loader] There is not a registered connect function");
                return this.registered.connect(e, r)
            });
            le(this, "mount", e => {
                var f, u;
                if (!this.registered.mount) {
                    console.error("[loader] There is not a registered app to mount"), this.showLoaderError();
                    return
                }
                const r = document.getElementsByClassName("loader-status")[0];
                if (r && r.remove(), this.registered.unmount && this.registered.unmount(), this.registered.info) {
                    const l = this.registered.info(e);
                    nf({
                        branch: l.branch,
                        "app.tag": l.tag,
                        "app.type": l.type,
                        "app.version": l.version,
                        "app.wrapper": l.wrapper
                    }), Fn.pageView(l.tag)
                }
                Lr.setup(e.app, ((f = e.room) == null ? void 0 : f.code) ?? ((u = e.client) == null ? void 0 : u.code));
                const i = document.querySelectorAll("[data-tv-style]"),
                    a = Array.from(document.querySelectorAll("[data-tv-prefetch]")).map(l => {
                        const E = document.createElement("link");
                        return E.rel = "stylesheet", E.href = l.href, E.setAttribute("data-tv-style", ""), E
                    });
                document.head.append(...a), i.forEach(l => l.remove()), this.registered.unmount = this.registered.mount(e) ?? void 0, delete this.registered.connect, delete this.registered.mount, delete this.registered.info
            });
            le(this, "debugLoad", async (e, r) => {
                throw new Error("[Loader] Debug controllers are not available in production builds")
            });
            this.manifest = e
        }
        getBranchName(e) {
            var a, f, u, l, E;
            const r = (f = (a = e.match) == null ? void 0 : a.params) == null ? void 0 : f.branch,
                i = Lr.get("preference:branch"),
                s = this.manifest.branches;
            if (r) return r === "hmr" ? "** hmr **" : r === "dist" ? "** dist **" : r;
            if (e.branch) return e.branch;
            if ((u = s["** hmr **"]) != null && u.bundles[e.app]) return "** hmr **";
            if (i && ((l = s[i]) != null && l.bundles[e.app])) return i;
            if ((E = s["** dist **"]) != null && E.bundles[e.app]) return "** dist **";
            if (s.main) return "main";
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
            return new Promise((r, i) => {
                const s = document.createElement("script");
                s.src = e, s.async = !0, s.type = "module", s.crossOrigin = "", s.onerror = i, s.onload = r, s.setAttribute("data-tv-script", ""), document.head.append(s)
            })
        }
        async fetchBundle(e, r, i) {
            r.forEach(a => {
                const f = i ? this.getS3Url(a, i) : a,
                    u = document.createElement("link");
                i ? u.rel = "prefetch" : (u.rel = "preload", u.as = "style"), u.href = f, u.setAttribute("data-tv-prefetch", ""), document.head.append(u)
            });
            const s = i ? this.getS3Url(e, i) : e;
            await this.loadScript(s)
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
                i = navigator.languages[0],
                s = Ns[i] ?? Ns.en;
            e.classList.add("error"), r.textContent = s.RETRY, e.append(r), e.addEventListener("click", () => window.location.reload())
        }
    };
    const ws = {
            EcastEntityNotFound: 2005,
            EcastFilterError: 2021
        },
        sT = ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
        aT = t => {
            Gb({
                dsn: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                debug: "false",
                environment: t.environment,
                release: `tv-mono@${t.loader.version}`,
                ignoreErrors: sT,
                beforeSend: async (e, r) => {
                    if (r.originalException) {
                        const i = r.originalException;
                        if (i.code === ws.EcastEntityNotFound) return qh("no entity found having key", {
                            extra: {
                                exception: r.originalException
                            }
                        }), null;
                        if (i.code === ws.EcastFilterError) return null
                    }
                    if (window.tv.onError) try {
                        const i = await window.tv.onError(e, r);
                        i && (e.contexts = e.contexts || {}, e.contexts.debug = i)
                    } catch (i) {
                        console.error("failed to send states to ecast", i)
                    }
                    return e
                }
            }), nf({
                "app.tag": "@loader",
                "app.version": t.loader.version,
                "app.type": t.loader.type,
                branch: t.loader.branch
            })
        };
    let Ds;
    async function Is() {
        if (!Ds) try {
            Ds = await navigator.wakeLock.request("screen")
        } catch (t) {
            console.warn(t)
        }
    }
    const fT = async () => {
        navigator.wakeLock && (await Is(), document.addEventListener("visibilitychange", () => {
            document.visibilityState === "visible" && Is()
        }))
    };

    function uT(t) {
        let e = "<div>";
        return t ? (e += `   <h1>Debug JSON Index : ${t}</h1>`, Object.keys(window.tv.debugMap[t]).forEach(r => {
            e += `    <a href="/${window.tv.debugMap[t][r]}" target="_blank">${r}</a>`
        })) : (e += "   <h1>Debug JSON Index</h1>", Object.keys(window.tv.debugMap).sort().forEach(r => {
            e += "    <details>", e += `        <summary>${r}</summary>`, Object.keys(window.tv.debugMap[r]).forEach(i => {
                e += `        <a href="/${window.tv.debugMap[r][i]}" target="_blank">${i}</a>`
            }), e += "    </details>"
        })), e += "</div>", e
    }

    function lT() {
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

    function Os(t) {
        if (!window.tv.debugMap) return;
        const e = document.createElement("style");
        e.innerHTML = lT(), document.getElementsByTagName("html")[0].append(e);
        const i = document.getElementById("app");
        i.innerHTML = uT(t)
    }

    function oT() {
        const t = window.tv.manifest;
        let e = "<div>";
        e += `   <h1>Current Manifest : ${t.environment}</h1>`;
        const r = new Date(t.loader.lastUpdated);
        return e += "   <h2>Loader</h2>", e += `   <p>last deployed: <strong>${r.toLocaleDateString()} ${r.toLocaleTimeString()}</strong></p>`, e += `   <p>branch: <strong>${t.loader.branch}</strong></p>`, e += `   <p>version: <strong>${t.loader.version}</strong></p>`, e += `   <p>type: <strong>${t.loader.type}</strong></p>`, e += "   <h2>Branches</h2>", Object.keys(t.branches).sort().forEach(i => {
            const s = t.branches[i],
                a = new Date(s.lastUpdated);
            e += "    <details>", e += "        <summary>", e += `            <span class="name">${i}</span>`, e += `            <span class="version">${s.version}</span>`, e += `            <span class="date">${a.toLocaleDateString()} ${a.toLocaleTimeString()}</span>`, e += `            <span class="type">${s.type}</span>`, e += `            <span class="type">${Object.keys(s.bundles).length} Apps</span>`, e += "        </summary>", Object.keys(s.bundles).forEach(f => {
                const u = s.bundles[f];
                u.version ? e += `        <p><span class="name">${f}</span> <span class="version">${u.version}</span></p>` : e += `        <p><span class="name">${f}</span> <span class="version">${s.version}</span></p>`
            }), e += "    </details>"
        }), e += "</div>", e
    }

    function ET() {
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

    function pT() {
        if (!window.tv.manifest) return;
        const t = document.createElement("style");
        t.innerHTML = ET(), document.getElementsByTagName("html")[0].append(t);
        const r = document.getElementById("app");
        r.innerHTML = oT()
    }
    const cT = {
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
                    const e = Ki(t.data.galleryId);
                    return !e || !e.categoryId ? {
                        redirect: "/"
                    } : (t.data.categoryId = e.categoryId, {
                        load: e.tag
                    })
                }
            }, {
                path: "/render/:galleryId/:artifactId/:renderer",
                handler: t => {
                    const e = Ki(t.data.galleryId);
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
                    pT()
                }
            }, {
                path: "/debug",
                handler: () => {
                    Os()
                }
            }, {
                path: ["/debug/:app", "/debug/local/:app"],
                handler: t => {
                    Os(t.data.app)
                }
            }, {
                path: ["/debug/local/:app/:file", "/debug/local/:app/:file/:marker"],
                debugLoad: "local"
            }, {
                path: ["/debug/cloud/:app/:file", "/debug/cloud/:app/:file/:marker"],
                debugLoad: "cloud"
            }]
        },
        xT = {
            hmrApps: ["teeko-web"],
            hostnames: ["teeko.jackboxgames.com"],
            routes: [{
                path: ["/", "/event"],
                load: "@teeko-web"
            }]
        };
    class _T {
        constructor(e) {
            le(this, "hmrApp", "loader");
            le(this, "sites");
            this.sites = e;
            const r = this.getMatch(window.location.pathname);
            this.executeMatch(r)
        }
        executeMatch(e) {
            var i, s;
            const r = ((s = e == null ? void 0 : (i = e.route).handler) == null ? void 0 : s.call(i, e)) ?? (e == null ? void 0 : e.route);
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
            const i = this.getMatch(e);
            if (!i) throw new Error("[Router] Redirecting to an unexpected path causes an infinite redirect loop");
            r && (i.hashString || (i.hashString = r.hashString), i.params || (i.params = r.params), i.queryString || (i.queryString = r.queryString)), window.history.replaceState(null, "", e), this.executeMatch(i)
        }
        getSite() {
            const e = document.location.hostname;
            return (e === "localhost" || e === "127.0.0.1" ? this.sites.find(i => {
                var s;
                return (s = i.hmrApps) == null ? void 0 : s.includes(this.hmrApp)
            }) : this.sites.find(i => {
                var s;
                return (s = i.hostnames) == null ? void 0 : s.includes(e)
            })) ?? this.sites[0]
        }
        splitPath(e) {
            return e.replace(/^\s*\/*\s*|\s*\/*\s*$/g, "").split("/")
        }
        matchRouteToPath(e, r) {
            if (e.length !== r.length) return !1;
            for (let i = 0; i < e.length; i++)
                if (e[i][0] !== ":" && e[i] !== r[i]) return !1;
            return !0
        }
        getRoute(e, r) {
            const i = this.splitPath(e);
            for (let s = 0; s < r.length; s++) {
                const a = Array.isArray(r[s].path) ? r[s].path : [r[s].path];
                for (let f = 0; f < a.length; f++) {
                    const u = this.splitPath(a[f]);
                    if (this.matchRouteToPath(u, i)) return {
                        route: r[s],
                        parts: u
                    }
                }
            }
            return null
        }
        parseData(e, r) {
            const i = {},
                s = this.splitPath(e);
            for (let a = 0; a < r.parts.length; a++) r.parts[a][0] === ":" && (i[r.parts[a].substring(1)] = s[a]);
            return i
        }
        parseParams() {
            if (!document.location.search) return {};
            const e = new URLSearchParams(document.location.search);
            return Object.fromEntries(e)
        }
        getMatch(e) {
            const r = this.getSite(),
                i = this.getRoute(e, r.routes);
            if (!i) return null;
            const s = {
                url: document.location.href,
                route: i.route,
                path: i.parts.join("/"),
                parts: i.parts,
                data: this.parseData(e, i),
                params: this.parseParams()
            };
            if (document.location.hash) {
                let a = document.location.hash;
                document.location.hash[0] === "#" && (a = a.substring(1)), s.hashString = a
            }
            return document.location.search && (s.queryString = document.location.search), s
        }
    }
    const hT = "production",
        RT = 1,
        bT = {
            branch: "main",
            sha: "fe2c31a06e0b040bd9cb0f26b8a18971f34d1237",
            lastUpdated: 1707246372175,
            version: "5.374.144",
            type: "production"
        },
        TT = {
            main: {
                sha: "fe2c31a06e0b040bd9cb0f26b8a18971f34d1237",
                lastUpdated: 1707246372175,
                version: "5.374.144",
                type: "production",
                bundles: {
                    "@connect": {
                        file: "script.js",
                        css: ["assets/style-0.css"],
                        base: "main/@connect",
                        version: "5.374.144"
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
                        version: "5.374.144"
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
                        version: "5.366.138"
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
                        version: "5.359.132"
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
                        version: "5.359.132"
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
                        version: "5.359.132"
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
        gT = {
            environment: hT,
            version: RT,
            loader: bT,
            branches: TT
        },
        xi = gT;
    let LT = iT;
    const Gt = new LT(xi);
    window.tv = {
        debugLoad: Gt.debugLoad,
        load: Gt.load,
        register: Gt.register,
        mount: Gt.mount,
        connect: Gt.connect,
        manifest: xi
    };
    aT(xi);
    Fn.setup();
    Lr.setup();
    fT();
    new _T([cT, xT])
});
export default ST();
//# sourceMappingURL=Irk15ntH.js.map